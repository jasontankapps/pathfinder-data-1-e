import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
const _not_found = {title: "Unknown", jsx: <><h2 id="arcana-not_found-error">Error</h2>
<p>Unable to find the requested arcanum.</p>
</>};
const _accurate_strike = {title: "Accurate Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 54</Link></p>
<Ability id="accurate-strike-ex" icon={["touch"]}>
<Pair single id="accurate-strike-ex">Accurate Strike (Ex):</Pair>
<Pair title="Prerequisites">9th-level magus</Pair>
<Pair title="Swift Action">The magus can expend 2 points from his arcane pool to resolve all of his melee weapon attacks until the end of his turn as melee touch attacks.</Pair>
</Ability>
</>};
const _aquatic_agility = {title: "Aquatic Agility", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon pg. 21</Link></p>
<Ability id="aquatic-agility-su" icon={["magic"]}>
<Pair single id="aquatic-agility-su">Aquatic Agility (Su):</Pair>
<Pair title="Prerequisites">6th-level magus</Pair>
<Pair title="Immediate Action">The magus can spend 1 point from his arcane pool to gain the benefits of <Link to="/spell/water_breathing">water breathing</Link> for 1 round per level. During this time, he can ignore the effects of <Link to="/skill/swim">rough water</Link> and <Link to="/rule/underwater_combat">underwater combat</Link> on his attacks and movement.</Pair>
</Ability>
</>};
const _arcane_accuracy = {title: "Arcane Accuracy", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 11</Link></p>
<Ability id="arcane-accuracy-su" icon={["boost"]}>
<Pair single id="arcane-accuracy-su">Arcane Accuracy (Su):</Pair>
<Pair title="Swift Action">The magus can expend 1 point from his arcane pool to grant himself an insight bonus equal to his Intelligence bonus on all attack rolls until the end of his turn.</Pair>
</Ability>
</>};
const _arcane_cloak = {title: "Arcane Cloak", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 54</Link></p>
<Ability id="arcane-cloak-su" icon={["def"]}>
<Pair single id="arcane-cloak-su">Arcane Cloak (Su):</Pair>
<Pair title="Ability">The magus can expend 1 point from his arcane pool to add his Intelligence bonus to <Link to="/skill/stealth">Stealth</Link> checks and <Link to="/skill/bluff">Bluff</Link> checks to create a diversion in order to hide. This bonus lasts for 1 minute.</Pair>
</Ability>
</>};
const _arcane_dealer = {title: "Arcane Dealer", jsx: <><p><strong>Sources</strong> <Link to="/source/the_harrow_handbook">The Harrow Handbook pg. 24</Link></p>
<Ability id="arcane-dealer-su" icon={["power","ranged"]}>
<Pair single id="arcane-dealer-su">Arcane Dealer (Su):</Pair>
<Pair title="Prerequisites">6th-level magus</Pair>
<Pair title="Ability">The magus gains the <Link to="/feat/deadly_dealer">Deadly Dealer</Link> feat, even if he does not meet the prerequisites. He can use his arcane pool to grant a <Link to="/eq-misc/deck_of_cards">deck of cards</Link> an enhancement bonus as though it were a ranged weapon with 54 pieces of ammunition. The magus must use either <Link to="/feat/arcane_strike">Arcane Strike</Link> or his arcane pool to enhance the cards in order to use them as weapons.</Pair>
</Ability>
</>};
const _arcane_deed = {title: "Arcane Deed", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 104</Link></p>
<Ability id="arcane-deed-ex" icon={["power"]}>
<Pair single id="arcane-deed-ex">Arcane Deed (Ex):</Pair>
<Pair title="Prerequisites"><Link to="/arcana/flamboyant_arcana">Flamboyant arcana</Link></Pair>
<Pair title="Choice">When a magus takes this arcana, he can pick any one <Link to="/ability/swashbuckler_deeds">deed</Link> from the swashbuckler class feature as long as that deed can be used by a swashbuckler of his magus level.</Pair>
<Pair title="Ability">The magus can use that deed by using points from his arcane pool as the panache points required for that deed. Even if he gains a panache pool through another means, the magus is not considered to have at least 1 point in his panache pool for the purpose of deeds selected with <em>arcane deed,</em> and his effective swashbuckler level for determining such a deed's effect is 0.</Pair>
<Pair title="Special">A magus can take this arcana multiple times, each time gaining a new deed.</Pair>
</Ability>
</>};
const _arcane_edge = {title: "Arcane Edge", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 54</Link></p>
<Ability id="arcane-edge-su" icon={["boost"]}>
<Pair single id="arcane-edge-su">Arcane Edge (Su):</Pair>
<Pair title="Prerequisites">9th-level magus</Pair>
<Pair title="Immediate Action">The magus can expend 1 point from his arcane pool after hitting a target with a slashing or piercing weapon in order to deal an amount of <Link to="/rule/bleed">bleed</Link> damage equal to his Intelligence modifier (minimum 0).</Pair>
</Ability>
</>};
const _arcane_redoubt = {title: "Arcane Redoubt", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 54</Link></p>
<Ability id="arcane-redoubt-su" icon={["def"]}>
<Pair single id="arcane-redoubt-su">Arcane Redoubt (Su):</Pair>
<Pair title="Swift Action">The magus can expend 1 point from his arcane pool to treat his shield bonus to AC (including any enhancement bonus) as a bonus to touch AC until the beginning of his next turn.</Pair>
</Ability>
</>};
const _arcane_redoubt_greater = {title: "Greater Arcane Redoubt", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 54</Link></p>
<Ability id="greater-arcane-redoubt-su" icon={["def"]}>
<Pair single id="greater-arcane-redoubt-su">Greater Arcane Redoubt (Su):</Pair>
<Pair title="Prerequisites"><Link to="/arcana/arcane_redoubt">Arcane redoubt</Link>, 12th-level magus</Pair>
<Pair title="Ability">Whenever the magus uses his <Link to="/arcana/arcane_redoubt">arcane redoubt</Link> magus arcana, he may spend an additional point from his arcane pool in order to apply his shield bonus to AC (including any enhancement bonus) as a bonus on Reflex saves until the beginning of his next turn.</Pair>
<Pair title="Immediate Action">If he is targeted with an effect requiring a Reflex save while using this power, he may spend 2 points from his arcane pool to grant himself <Link to="/ability/evasion">evasion</Link>, or 4 points to grant himself <Link to="/talent/improved_evasion">improved evasion</Link>.</Pair>
</Ability>
</>};
const _arcane_scent = {title: "Arcane Scent", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon pg. 21</Link></p>
<Ability id="arcane-scent-ex" icon={["power"]}>
<Pair single id="arcane-scent-ex">Arcane Scent (Ex):</Pair>
<Pair title="Ability">The magus can sniff out other spellcasters. By spending 1 point from his arcane pool, the magus gains the <Link to="/umr/scent">scent</Link> special quality for 1 hour per magus level. This scent can only detect creatures capable of casting spells or using spell-like abilities.</Pair>
<Pair title="Move-Equivalent Action">Additionally, while this effect persists, the magus can attempt a Spellcraft check to determine the highest level spell a detected creature is capable of casting (DC = 10 + the creature's caster level). The magus can only attempt this Spellcraft check once per creature per 24 hours.</Pair>
</Ability>
</>};
const _bane_blade = {title: "Bane Blade", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 54</Link></p>
<Ability id="bane-blade-su" icon={["boost"]}>
<Pair single id="bane-blade-su">Bane Blade (Su):</Pair>
<Pair title="Prerequisites">15th-level magus</Pair>
<Pair title="Ability">Whenever the magus enhances his weapon using his arcane pool, he may spend 1 additional point from his arcane pool to add the <Link to="/magic-enh/bane">bane</Link> special ability to the weapon.</Pair>
</Ability>
</>};
const _book_bound = {title: "Book-Bound", jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 9</Link></p>
<Ability id="book-bound-su" icon={["def"]}>
<Pair single id="book-bound-su">Book-Bound (Su):</Pair>
<Pair title="Usage">3 times/day</Pair>
<Pair title="Immediate Action">As long as he wields his spellbook in his off hand, the magus can gain a +4 bonus on a <Link to="/rule/concentration">concentration</Link> check he attempts within the next round. This bonus stacks with other bonuses, including the bonus from the <Link to="/arcana/concentrate">concentrate</Link> arcana.</Pair>
</Ability>
</>};
const _broad_study = {title: "Broad Study", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 11</Link></p>
<Ability id="broad-study-ex" icon={["power"]}>
<Pair single id="broad-study-ex">Broad Study (Ex):</Pair>
<Pair title="Prerequisites">6th-level magus, levels in at least one other spellcasting class</Pair>
<Pair title="Choice">The magus selects another one of his spellcasting classes.</Pair>
<Pair title="Ability">The magus can use his <em>spellstrike</em> and <em>spell combat</em> abilities while casting or using spells from the spell list of that class.</Pair>
<Pair title="Special">This does not allow him to cast arcane spells from that class's spell list without suffering the normal chances of arcane spell failure, unless the spell lacks somatic components.</Pair>
</Ability>
</>};
const _circle_of_order = {title: "Circle of Order", jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 9</Link></p>
<Ability id="circle-of-order-su" icon={["def"]}>
<Pair single id="circle-of-order-su">Circle of Order (Su):</Pair>
<Pair title="Prerequisites">9th-level magus</Pair>
<Pair title="Swift Action">The magus can spend 1 point from his arcane pool to fortify his defenses against chaotic attacks. This grants him a dodge bonus to his AC equal to <Link to="/misc/half">half</Link> his magus level against chaotic-aligned attacks and effects and outsiders with the chaotic subtype until the beginning of his next turn. (For example, the magus would gain the dodge bonus against attacks from an <Link to="/magic-enh/anarchic">anarchic</Link> weapon or a <Link to="/monster/glabrezu">glabrezu's</Link> pincers.)</Pair>
</Ability>
</>};
const _close_range = {title: "Close Range", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 11</Link></p>
<Ability id="close-range-ex" icon={["touch"]}>
<Pair single id="close-range-ex">Close Range (Ex):</Pair>
<Pair title="Ability">The magus can deliver ray spells that feature a ranged touch attack as melee touch spells. He can use a ranged touch attack spell that targets more than one creature (such as <Link to="/spell/scorching_ray">scorching ray</Link>), but he makes only one melee touch attack to deliver one of these ranged touch effects; additional ranged touch attacks from that spell are wasted and have no effect.</Pair>
<Pair title="Special">These spells can be used with the <em>spellstrike</em> class feature.</Pair>
</Ability>
</>};
const _concentrate = {title: "Concentrate", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 11</Link></p>
<Ability id="concentrate-ex" icon={["roll","boost"]}>
<Pair single id="concentrate-ex">Concentrate (Ex):</Pair>
<Pair title="Usage">Once per day</Pair>
<Pair title="Ability">The magus can reroll any <Link to="/rule/concentration">concentration</Link> check he has just made with a +4 bonus. He must use this ability after the roll is made, but before the roll's outcome is determined. The magus must take the second roll, even if it is worse.</Pair>
</Ability>
</>};
const _critical_strike = {title: "Critical Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 11</Link></p>
<Ability id="critical-strike-su" icon={["power","magic"]}>
<Pair single id="critical-strike-su">Critical Strike (Su):</Pair>
<Pair title="Prerequisites">12th-level magus</Pair>
<Pair title="Usage">Once per day</Pair>
<Pair title="Ability">Whenever the magus scores a critical hit with a melee weapon, he may cast a spell with a range of touch as a <strong className="hl">swift action</strong>, then make a touch attack with that spell against the target of the critical hit as a <strong className="hl">free action</strong>.</Pair>
</Ability>
</>};
const _dark_shifter = {title: "Dark Shifter", jsx: <><p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 13</Link>, <Link to="/source/bastards_of_golarion">Bastards of Golarion pg. 9</Link></p>
<Ability id="dark-shifter-su" icon={["magic"]}>
<Pair single id="dark-shifter-su">Dark Shifter (Su):</Pair>
<Pair title="Prerequisites">6th-level magus</Pair>
<Pair title="Move-Equivalent Action"><p>The magus can expend 1 point from his arcane pool to change the target of an ongoing spell effect with the darkness descriptor. The new target must be within the spell's original range, and uses the magus's level as the effective caster level for the purpose of determining the maximum distance the effect can be moved from the magus.</p>
<p>If the spell effect the magus is moving originated from another creature, the magus must succeed at a caster level check to reposition the effect (DC = 11 + the effect's caster level). Failure wastes the magus's move action, but doesn't expend the point from his arcane pool.</p>
</Pair>
</Ability>
</>};
const _devoted_blade = {title: "Devoted Blade", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 54</Link></p>
<Ability id="devoted-blade-su" icon={["boost"]}>
<Pair single id="devoted-blade-su">Devoted Blade (Su):</Pair>
<Pair title="Prerequisites">12th-level magus</Pair>
<Pair title="Ability">Whenever the magus enhances his weapon using his arcane pool, he may spend 1 additional point from his arcane pool to add either the <Link to="/magic-enh/anarchic">anarchic</Link>, <Link to="/magic-enh/axiomatic">axiomatic</Link>, <Link to="/magic-enh/holy">holy</Link>, or <Link to="/magic-enh/unholy">unholy</Link> special ability to the list of available options. A magus may only add one of these abilities if it matches his own alignment.</Pair>
</Ability>
</>};
const _dispelling_strike = {title: "Dispelling Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 11</Link></p>
<Ability id="dispelling-strike-su" icon={["magic"]}>
<Pair single id="dispelling-strike-su">Dispelling Strike (Su):</Pair>
<Pair title="Prerequisites">9th-level magus</Pair>
<Pair title="Swift Action">The magus can spend 1 or more points from his arcane pool to imbue his weapon with a special power. If the weapon strikes a creature within the next minute, that creature is the subject of a targeted <Link to="/spell/dispel_magic">dispel magic</Link> using the magus's level as the caster level, except that this effect cannot dispel a spell of a level higher than the number of arcane pool points expended to activate this ability (treat higher-level spells as if they do not exist and apply the dispel attempt to the remaining spells with the highest caster level). Once the strike is made, the power dissipates, even if the dispel attempt is unsuccessful.</Pair>
</Ability>
</>};
const _disruptive = {title: "Disruptive", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 54</Link></p>
<Ability id="disruptive-ex" icon={["power"]}>
<Pair single id="disruptive-ex">Disruptive (Ex):</Pair>
<Pair title="Prerequisites">6th-level magus</Pair>
<Pair title="Ability">The magus gains <Link to="/feat/disruptive">Disruptive</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _distant_spellstrike = {title: "Distant Spellstrike", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets pg. 11</Link></p>
<Ability id="distant-spellstrike-su" icon={["ranged"]}>
<Pair single id="distant-spellstrike-su">Distant Spellstrike (Su):</Pair>
<Pair title="Prerequisites">12th-level magus, <em>ranged spellstrike</em> (<Link to="/arc-magus/eldritch_archer">Eldritch Archer</Link> or <Link to="/arc-magus/myrmidarch">Myrmidarch</Link>)</Pair>
<Pair title="Ability">The range of any spell the magus delivers through a ranged weapon attack increases to the maximum range of the weapon if that is greater than the spell's range.</Pair>
</Ability>
</>};
const _divinatory_strike = {title: "Divinatory Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 4</Link></p>
<Ability id="divinatory-strike-su" icon={["power"]}>
<Pair single id="divinatory-strike-su">Divinatory Strike (Su):</Pair>
<Pair title="Ability">Whenever the magus scores a critical hit against an opponent with a melee attack, he can gain preternatural insight into his foe's strengths and weaknesses as though he had rolled a natural 20 on a <Link to="/skill/knowledge">Knowledge</Link> check to identify the creature struck. Any bonuses or penalties the magus normally applies to such a Knowledge check are applied to this ability, including his Intelligence modifier, ranks in the requisite Knowledge skill, and other applicable modifiers.</Pair>
<Pair title="Special">Depending on the final calculated outcome of this ability and the CR of the creature struck, the magus may still be unable to glean information about his enemy. This ability works even if the magus has already attempted a Knowledge check to identify the creature.</Pair>
</Ability>
</>};
const _empowered_magic = {title: "Empowered Magic", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 11</Link></p>
<Ability id="empowered-magic-su" icon={["boost"]}>
<Pair single id="empowered-magic-su">Empowered Magic (Su):</Pair>
<Pair title="Prerequisites">6th-level magus</Pair>
<Pair title="Ability">The magus can cast one spell per day as if it were modified by the <Link to="/feat/empower_spell">Empower Spell</Link> feat. This does not increase the casting time or the level of the spell.</Pair>
</Ability>
</>};
const _enduring_blade = {title: "Enduring Blade", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 54</Link></p>
<Ability id="enduring-blade-su" icon={["boost"]}>
<Pair single id="enduring-blade-su">Enduring Blade (Su):</Pair>
<Pair title="Prerequisites">6th-level magus</Pair>
<Pair title="Ability">Whenever the magus enchants his weapon using his arcane pool, he may spend 1 additional point from his arcane pool to increase the duration to 1 minute per magus level.</Pair>
</Ability>
</>};
const _familiar = {title: "Familiar", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 12</Link></p>
<Ability id="familiar-ex" icon={["power"]}>
<Pair single id="familiar-ex">Familiar (Ex):</Pair>
<Pair title="Ability">The magus gains a <Link to="/sidekick/familiar">familiar</Link>, using his magus level as his effective wizard level. This familiar follows the rules for <Link to="/ability/familiars">familiars</Link> presented in the <em>arcane bond</em> wizard class feature.</Pair>
</Ability>
</>};
const _flamboyant_arcana = {title: "Flamboyant Arcana", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 104</Link></p>
<Ability id="flamboyant-arcana" icon={["power"]}>
<Pair single id="flamboyant-arcana">Flamboyant Arcana:</Pair>
<Pair title="Ability">A magus gains the <Link to="/swashdeed/derring_do">derring-do</Link> and <Link to="/swashdeed/opportune_parry_and_riposte">opportune parry and riposte</Link> deeds from the swashbuckler's list of deeds. The magus can spend only points from his arcane pool (not panache points) to use these deeds and any other deeds he gains from the <Link to="/arcana/arcane_deed">arcane deed</Link> arcana. He can't use points from his arcane pool to use deeds from other classes or those gained by feats, nor can he regain points to his arcane pool as a swashbuckler would regain panache points.</Pair>
<Pair title="Special">Effects that add to, reduce the cost of, or otherwise affect panache or grit don't affect the arcane pool of a magus with this arcana.</Pair>
</Ability>
</>};
const _ghost_blade = {title: "Ghost Blade", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 54</Link></p>
<Ability id="ghost-blade-su" icon={["boost"]}>
<Pair single id="ghost-blade-su">Ghost Blade (Su):</Pair>
<Pair title="Prerequisites">9th-level magus</Pair>
<Pair title="Ability">Whenever the magus enchants his weapon using his arcane pool, he may spend 1 additional point from his arcane pool to add the <Link to="/magic-enh/brilliant_energy">brilliant energy</Link> and <Link to="/magic-enh/ghost_touch">ghost touch</Link> special abilities to the list of available options.</Pair>
</Ability>
</>};
const _hasted_assault = {title: "Hasted Assault", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 12</Link></p>
<Ability id="hasted-assault-su" icon={["boost"]}>
<Pair single id="hasted-assault-su">Hasted Assault (Su):</Pair>
<Pair title="Prerequisites">9th-level magus</Pair>
<Pair title="Swift Action">The magus can expend 1 point from his arcane pool to move more quickly. This functions as <Link to="/spell/haste">haste</Link>, but only targets the magus and lasts for a number of rounds equal to the magus's Intelligence bonus.</Pair>
</Ability>
</>};
const _intuitive_protection = {title: "Intuitive Protection", jsx: <><p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook pg. 9</Link></p>
<Ability id="intuitive-protection-sp" icon={["def"]}>
<Pair single id="intuitive-protection-sp">Intuitive Protection (Sp):</Pair>
<Pair title="Prerequisites">3rd-level magus</Pair>
<Pair title="Ability">When a conjuration (summoning) spell is cast by an opponent and the magus successfully identifies the spell with a <Link to="/skill/spellcraft">Spellcraft</Link> check, he can spend 1 point form his arcane pool as an <strong className="hl">immediate action</strong> to cast <Link to="/spell/protection_from_chaos_evil_good_law">protection from chaos, evil, good, or law</Link> (chosen when using this ability) on himself; this lasts a number of rounds equal to his magus level.</Pair>
<Pair title="At 7th Level">He can instead cast <Link to="/spell/magic_circle_against_chaos_evil_good_law">magic circle against chaos, evil, good, or law</Link> when using this ability.</Pair>
</Ability>
</>};
const _ki_arcana = {title: "Ki Arcana", jsx: <><p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 4</Link></p>
<Ability id="ki-arcana-ex" icon={["power"]}>
<Pair single id="ki-arcana-ex">Ki Arcana (Ex):</Pair>
<Pair title="Prerequisites">6th-level magus, levels in a class that grants him a <em>ki pool</em></Pair>
<Pair title="Ability">The magus may use points from his arcana pool and ki points from a <em>ki pool</em> granted by another class interchangeably.</Pair>
</Ability>
</>};
const _lingering_pain = {title: "Lingering Pain", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 54</Link></p>
<Ability id="lingering-pain-su" icon={["lower"]}>
<Pair single id="lingering-pain-su">Lingering Pain (Su):</Pair>
<Pair title="Immediate Action">The magus can expend 1 point from his arcane pool after hitting a target with a weapon attack. All damage from that attack (including damage from a spell cast using the spellstrike ability) is considered continuous damage for the purposes of any <Link to="/rule/concentration">concentration</Link> checks made by the target prior to the beginning of the magus's next turn.</Pair>
</Ability>
</>};
const _maneuver_mastery = {title: "Maneuver Mastery", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 12</Link></p>
<Ability id="maneuver-mastery-ex" icon={["melee"]}>
<Pair single id="maneuver-mastery-ex" flavor={<>The magus has mastered one <Link to="/rule/combat_maneuver">combat maneuver</Link>.</>}>Maneuver Mastery (Ex):</Pair>
<Pair title="Choice">He selects one maneuver when selecting this arcana.</Pair>
<Pair title="Passive Ability">Whenever he is attempting the selected maneuver, he uses his magus level in place of his base attack bonus (in addition to any base attack bonus gained from other classes).</Pair>
<Pair title="Special">A magus can select this magus arcana more than once. Its effects do not stack. Each time he selects this arcana, he selects another combat maneuver.</Pair>
</Ability>
</>};
const _maximized_magic = {title: "Maximized Magic", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 12</Link></p>
<Ability id="maximized-magic-su" icon={["boost"]}>
<Pair single id="maximized-magic-su">Maximized Magic (Su):</Pair>
<Pair title="Prerequisites">12th-level magus</Pair>
<Pair title="Ability">The magus can cast one spell per day as if it were modified by the <Link to="/feat/maximize_spell">Maximize Spell</Link> feat. This does not increase the casting time or the level of the spell.</Pair>
</Ability>
</>};
const _natural_spell_combat = {title: "Natural Spell Combat", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon pg. 21</Link></p>
<Ability id="natural-spell-combat-ex" icon={["melee","boost"]}>
<Pair single id="natural-spell-combat-ex">Natural Spell Combat (Ex):</Pair>
<Pair title="Ability"><p>The magus can use his <em>spell combat</em> class feature with a <Link to="/rule/natural_attack">natural attack</Link> of his choice. If he does, he gains a +2 bonus on <Link to="/rule/concentration">concentration</Link> checks.</p>
<p>If the natural attack is made with an appendage that would normally hold a weapon (such as a claw attack), the magus cannot wield a weapon in that appendage while making natural attacks with it. If the natural attack is a bite or other attack that does not require a free appendage to make, the magus can use the natural attack in addition to all of the attacks he could make with his melee weapon, if he has one.</p>
</Pair>
<Pair title="Special"><p>A magus can select this arcana more than once. The bonus on concentration checks does not stack.</p>
<p>Each time he selects this arcana, he selects another natural weapon. For example, a magus could select this arcana twice, choosing claw attacks and bite attacks. This would allow him to use a full-round action to make all of his claw attacks with his free hand and all of his bite attacks in addition to casting a spell.</p>
<p>This arcana otherwise functions exactly like the <em>spell combat</em> class feature.</p>
</Pair>
</Ability>
</>};
const _planar_hunter = {title: "Planar Hunter", jsx: <><p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook pg. 9</Link></p>
<Ability id="planar-hunter-su" icon={["boost"]}>
<Pair single id="planar-hunter-su">Planar Hunter (Su):</Pair>
<Pair title="Prerequisites">9th-level magus</Pair>
<Pair title="Ability">Whenever the magus enhances his weapon using his arcane pool, he can spend 1 additional point from his arcane pool to add the <Link to="/magic-enh/planar">planar</Link> special ability to his weapon, or 2 additional points to add the <Link to="/magic-enh/phase_locking">phase locking</Link> special ability.</Pair>
</Ability>
</>};
const _pool_ray = {title: "Pool Ray", jsx: <><p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 13</Link></p>
<Ability id="pool-ray" icon={["ranged"]}>
<Pair single id="pool-ray">Pool Ray:</Pair>
<Pair title="Standard Action">The magus can expend 1 point from his arcane pool to infuse a ranged weapon with elemental power.</Pair>
<Pair title="Free Action">While making an attack roll with the infused ranged weapon, after the attack roll has been made but before the results are revealed by the GM, the magus can release the charge and cause his attack to deal 1d6 points of energy damage (acid, cold, electricity, or fire, chosen when he spends the arcane pool point to activate this ability). If he misses with this attack, the charge is lost and the effect is wasted.</Pair>
<Pair title="At 6th Level">The damage becomes 2d6.</Pair>
<Pair title="At 9th Level">The damage increases to 3d6.</Pair>
<Pair title="At 12th Level">The damage becomes 4d6.</Pair>
<Pair title="At 15th Level">The damage increases to 5d6.</Pair>
<Pair title="At 18th Level">The damage becomes 6d6.</Pair>
<Pair title="Special">If the magus has the <em>ranged spellstrike</em> class feature (such as through the <Link to="/arc-magus/myrmidarch">Myrmidarch</Link> archetype), he can use this ability with <em>ranged spellstrike</em> to treat it as its own ranged touch attack.</Pair>
</Ability>
</>};
const _pool_strike = {title: "Pool Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 12</Link></p>
<Ability id="pool-strike-su" icon={["touch"]}>
<Pair single id="pool-strike-su">Pool Strike (Su):</Pair>
<Pair title="Standard Action">The magus can expend 1 point from his arcane pool to charge his free hand with energy. He can make a melee touch attack with that hand as a <strong className="hl">free action</strong> as part of activating this ability. If the touch attack hits, it releases the charge and deals 2d6 points of energy damage (acid, cold, electricity, or fire, chosen when he spends the arcane pool point to activate this ability).</Pair>
<Pair title="At 6th Level">The damage becomes 3d6.</Pair>
<Pair title="At 9th Level">The damage increases to 4d6.</Pair>
<Pair title="At 12th Level">The damage becomes 5d6.</Pair>
<Pair title="At 15th Level">The damage increases to 6d6.</Pair>
<Pair title="At 18th Level">The damage becomes 7d6.</Pair>
<Pair title="Special">He can use this ability with the <em>spellstrike</em> class feature. If he misses with this attack, he can hold the charge for up to 1 minute before it dissipates.</Pair>
</Ability>
</>};
const _pool_strike_arcing = {title: "Arcing Pool Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 54</Link></p>
<Ability id="arcing-pool-strike-su" icon={["zap"]}>
<Pair single id="arcing-pool-strike-su">Arcing Pool Strike (Su):</Pair>
<Pair title="Prerequisites">12th-level magus, <Link to="/arcana/pool_strike">pool strike</Link></Pair>
<Pair title="Ability">The magus can expend 1 additional point from his arcane pool when using the <Link to="/arcana/pool_strike">pool strike</Link> arcana. If his attack hits, the magus can target a number of enemies within 15 feet equal to his Intelligence modifier (minimum 0) with a ranged touch attack as a <strong className="hl">free action</strong>. Those struck take the same energy damage as the primary target of the pool strike, including increased damage on a critical hit.</Pair>
</Ability>
</>};
const _pool_strike_clinging = {title: "Clinging Pool Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 54</Link></p>
<Ability id="clinging-pool-strike-su" icon={["boost"]}>
<Pair single id="clinging-pool-strike-su">Clinging Pool Strike (Su):</Pair>
<Pair title="Prerequisites">9th-level magus, <Link to="/arcana/pool_strike">pool strike</Link></Pair>
<Pair title="Ability">The magus can expend 1 additional point from his arcane pool when making a <Link to="/arcana/pool_strike">pool strike</Link>. A single target of his pool strike takes energy damage as normal from the pool strike and also takes half this amount of damage at the beginning of its turn on the following round.</Pair>
</Ability>
</>};
const _pool_strike_thunderous = {title: "Thunderous Pool Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 55</Link></p>
<Ability id="thunderous-pool-strike-su" icon={["boost","lower"]}>
<Pair single id="thunderous-pool-strike-su">Thunderous Pool Strike (Su):</Pair>
<Pair title="Prerequisites">6th-level magus, <Link to="/arcana/pool_strike">pool strike</Link></Pair>
<Pair title="Ability">The magus can expend 1 additional point from his arcane pool when making a <Link to="/arcana/pool_strike">pool strike</Link>. His pool strike deals sonic damage and <Link to="/misc/deafen">deafens</Link> a single target for 1 round (DC 10 + 1/2 magus level + Intelligence modifier).</Pair>
</Ability>
</>};
const _prescient_attack = {title: "Prescient Attack", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 55</Link></p>
<Ability id="prescient-attack-su" icon={["lower"]}>
<Pair single id="prescient-attack-su">Prescient Attack (Su):</Pair>
<Pair title="Prerequisites">6th-level magus</Pair>
<Pair title="Immediate Action">The magus can expend 1 point from his arcane pool after hitting a target with a weapon attack, allowing him to anticipate his opponent's defenses. The target is denied its Dexterity bonus against the magus's attacks until the end of the magus's next turn.</Pair>
</Ability>
</>};
const _prescient_defense = {title: "Prescient Defense", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 55</Link></p>
<Ability id="prescient-defense-su" icon={["def"]}>
<Pair single id="prescient-defense-su">Prescient Defense (Su):</Pair>
<Pair title="Prerequisites">9th-level magus</Pair>
<Pair title="Immediate Action">The magus can expend 1 point from his arcane pool after hitting a target with a weapon attack, granting him a premonition of his enemy's intentions. The magus gains a bonus to his AC and on Reflex saves equal to his Intelligence modifier (minimum 0) against attacks by that opponent until the beginning of his next turn.</Pair>
</Ability>
</>};
const _quickened_magic = {title: "Quickened Magic", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 12</Link></p>
<Ability id="quickened-magic-su" icon={["boost"]}>
<Pair single id="quickened-magic-su">Quickened Magic (Su):</Pair>
<Pair title="Prerequisites">15th-level magus</Pair>
<Pair title="Ability">The magus can cast one spell per day as if it were modified by the <Link to="/feat/quicken_spell">Quicken Spell</Link> feat. This does not increase the level of the spell.</Pair>
</Ability>
</>};
const _rakshasas_fortune = {title: "Rakshasa's Fortune", jsx: <><p><strong>Sources</strong> <Link to="/source/the_harrow_handbook">The Harrow Handbook pg. 25</Link></p>
<Ability id="rakshasas-fortune-su" icon={["boost","down"]}>
<Pair single id="rakshasas-fortune-su">Rakshasa's Fortune (Su):</Pair>
<Pair title="Prerequisites">9th-level magus</Pair>
<Pair title="Free Action"><p>Whenever the magus casts a spell of the polymorph subschool on himself, he can draw a card from a complete <Link to="/eq-misc/harrow_deck">harrow deck</Link> he owns. If the card's alignment and the magus's alignment are a true match, the spell's duration is doubled and the magus can select two additional monster abilities granted by the polymorph spell (such as <Link to="/umr/scent">scent</Link> or <Link to="/umr/grab">grab</Link> for <Link to="/spell/beast_shape_ii">beast shape II</Link>), even if the form assumed by the magus doesn't normally grant that ability.</p>
<p>On a partial match, the magus can select an additional ability granted by the polymorph spell, even if the form assumed by the magus doesn't normally grant that ability.</p>
<p>On an opposite match, the duration of the spell is halved and the magus must forgo one of the abilities granted by his form.</p>
</Pair>
</Ability>
</>};
const _ranger_trap = {title: "Ranger Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 13</Link></p>
<Ability id="ranger-trap" icon={["power"]}>
<Pair single id="ranger-trap">Ranger Trap:</Pair>
<Pair title="Prerequisites">10th-level magus</Pair>
<Pair title="Ability">The magus learns a <Link to="/ability/ranger_traps">ranger trap</Link>.</Pair>
</Ability>
</>};
const _reach_magic = {title: "Reach Magic", jsx: <><p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 13</Link></p>
<Ability id="reach-magic" icon={["boost"]}>
<Pair single id="reach-magic">Reach Magic:</Pair>
<Pair title="Ability">The magus can cast one spell per day as if it were modified by the <Link to="/feat/reach_spell">Reach Spell</Link> feat. This doesn't increase the spell's casting time or level.</Pair>
</Ability>
</>};
const _reach_spellstrike = {title: "Reach Spellstrike", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets pg. 11</Link></p>
<Ability id="reach-spellstrike-su" icon={["boost"]}>
<Pair single id="reach-spellstrike-su">Reach Spellstrike (Su):</Pair>
<Pair title="Prerequisites">9th-level magus, <em>ranged spellstrike</em> (<Link to="/arc-magus/eldritch_archer">Eldritch Archer</Link> or <Link to="/arc-magus/myrmidarch">Myrmidarch</Link>)</Pair>
<Pair title="Ability">The magus can deliver spells with a range of touch with <em>ranged spellstrike</em> up to a maximum range of close (25 feet + 5 feet per 2 caster levels).</Pair>
</Ability>
</>};
const _reflection = {title: "Reflection", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 12</Link></p>
<Ability id="reflection-su" icon={["def"]}>
<Pair single id="reflection-su">Reflection (Su):</Pair>
<Pair title="Prerequisites">15th-level magus</Pair>
<Pair title="Immediate Action">The magus can sacrifice 1 or more points from his arcane pool to reflect a spell back at its caster. This functions as <Link to="/spell/spell_turning">spell turning</Link>, but only if the targeted spell is of a level equal to or lower than the number of points expended. If insufficient points are expended, they instead grant an insight bonus on any saving throws allowed by the spell, equal to the number of points spent.</Pair>
</Ability>
</>};
const _rod_mastery = {title: "Rod Mastery", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 55</Link></p>
<Ability id="rod-mastery-su" icon={["boost"]}>
<Pair single id="rod-mastery-su">Rod Mastery (Su):</Pair>
<Pair title="Ability">Whenever the magus uses a rod, he calculates the DC for any spell it contains using his Intelligence modifier (minimum 0) instead of the minimum modifier needed to cast a spell of that level.</Pair>
</Ability>
</>};
const _rod_wielder = {title: "Rod Wielder", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 55</Link></p>
<Ability id="rod-wielder-su" icon={["boost"]}>
<Pair single id="rod-wielder-su">Rod Wielder (Su):</Pair>
<Pair title="Ability">The magus adds his Intelligence bonus (minimum 0) on caster level checks made to overcome spell resistance when using a spell contained within a rod or when making a <em>spellstrike</em> attack channeled through a rod.</Pair>
</Ability>
</>};
const _scroll_mastery = {title: "Scroll Mastery", jsx: <><p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 4</Link></p>
<Ability id="scroll-mastery-su" icon={["boost"]}>
<Pair single id="scroll-mastery-su">Scroll Mastery (Su):</Pair>
<Pair title="Prerequisites">6th-level magus</Pair>
<Pair title="Ability">Whenever the magus uses a scroll, he may expend 1 point from his arcane pool to allow him to calculate the DC for any spell contained on the scroll using his Intelligence modifier, instead of the minimum modifier needed cast a spell of that level.</Pair>
</Ability>
</>};
const _silent_magic = {title: "Silent Magic", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 12</Link></p>
<Ability id="silent-magic-su" icon={["boost"]}>
<Pair single id="silent-magic-su">Silent Magic (Su):</Pair>
<Pair title="Ability">The magus can cast one spell per day as if it were modified by the <Link to="/feat/silent_spell">Silent Spell</Link> feat. This does not increase the casting time or the level of the spell.</Pair>
</Ability>
</>};
const _spell_blending = {title: "Spell Blending", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 12</Link></p>
<Ability id="spell-blending-ex" icon={["learn"]}>
<Pair single id="spell-blending-ex">Spell Blending (Ex):</Pair>
<Pair title="Ability"><p>When a magus selects this arcana, he must select one spell from the <Link to="/main/wizard_spell">wizard spell list</Link> that is of a magus spell level he can cast. He adds this spell to his spellbook and list of magus spells known as a magus spell of its wizard spell level.</p>
<p>He can instead select two spells to add in this way, but both must be at least one level lower than the highest-level magus spell he can cast.</p>
</Pair>
<Pair title="Special">A magus can select this magus arcana more than once.</Pair>
</Ability>
</>};
const _spell_shield = {title: "Spell Shield", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 12</Link></p>
<Ability id="spell-shield-su" icon={["def"]}>
<Pair single id="spell-shield-su">Spell Shield (Su):</Pair>
<Pair title="Immediate Action">The magus can expend a point from his arcane pool to grant himself a shield bonus to AC equal to his Intelligence bonus until the end of his next turn.</Pair>
</Ability>
</>};
const _spell_trickery = {title: "Spell Trickery", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon pg. 21</Link></p>
<Ability id="spell-trickery-ex" icon={["magic"]}>
<Pair single id="spell-trickery-ex">Spell Trickery (Ex):</Pair>
<Pair title="Prerequisites">12th-level magus</Pair>
<Pair title="Usage">Once per day</Pair>
<Pair title="Ability">When the magus successfully performs a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver, he can cast an illusion or enchantment spell he has prepared with a casting time of 1 standard action or less as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
</>};
const _spellbreaker = {title: "Spellbreaker", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 55</Link></p>
<Ability id="spellbreaker-ex" icon={["power"]}>
<Pair single id="spellbreaker-ex">Spellbreaker (Ex):</Pair>
<Pair title="Prerequisites">9th-level magus</Pair>
<Pair title="Ability">The magus gains <Link to="/feat/spellbreaker">Spellbreaker</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _spell_scars = {title: "Spell-Scars", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon pg. 21</Link></p>
<Ability id="spell-scars-ex" icon={["magic"]}>
<Pair single id="spell-scars-ex">Spell-Scars (Ex):</Pair>
<Pair title="Ability">The magus can use special scar-based tattoos called spell-scars on his skin to cast or prepare spells, much like scrolls. He can cast a spell from a spell-scar exactly like casting from a scroll; the ink and scars vanish when the spell is cast. The magus can also prepare spells from his spell-scars without expending them, similar to a wizard using the <Link to="/feat/spell_mastery">Spell Mastery</Link> feat.</Pair>
<Pair title="Special">The magus does not need to be able to see his spell-scar to use it. A magus has room on his skin for 18 total spell levels of spell-scars, which he can create using the rules for <Link to="/rule/creating_scrolls">scribing scrolls</Link> (although they do not require the <Link to="/feat/scribe_scroll">Scribe Scroll</Link> feat).</Pair>
</Ability>
</>};
const _still_magic = {title: "Still Magic", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 12</Link></p>
<Ability id="still-magic-su" icon={["boost"]}>
<Pair single id="still-magic-su">Still Magic (Su):</Pair>
<Pair title="Ability">The magus can cast one spell per day as if it were modified by the <Link to="/feat/still_spell">Still Spell</Link> feat. This does not increase the casting time or the level of the spell.</Pair>
</Ability>
</>};
const _tabriss_step = {title: "Tabris's Step", jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 9</Link></p>
<Ability id="tabriss-step-sp" icon={["magic"]}>
<Pair single id="tabriss-step-sp">Tabris's Step (Sp):</Pair>
<Pair title="Prerequisites">6th-level magus</Pair>
<Pair title="Swift Action">A magus can spend 1 point from his arcane pool and gain the effects of a <Link to="/spell/water_walk">water walk</Link> spell for 10 minutes per magus level. If he expends 2 points from his arcane pool, he can affect a total number of touched creatures equal to his magus level.</Pair>
</Ability>
</>};
const _throwing_magus = {title: "Throwing Magus", jsx: <><p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 13</Link></p>
<Ability id="throwing-magus" icon={["boost"]}>
<Pair single id="throwing-magus">Throwing Magus:</Pair>
<Pair title="Ability"><p>Whenever the magus enhances his weapon using his arcane pool, he can spend 1 additional point from his arcane pool to add the <Link to="/magic-enh/returning">returning</Link> and <Link to="/magic-enh/throwing">throwing</Link> abilities to the list of available weapon special abilities.</p>
<p>When the magus throws a weapon enhanced by his arcane pool and hits a foe, he regains 1 arcane pool point. The magus can regain a number of arcane pool points per day equal to his Intelligence modifier in this way.</p>
</Pair>
<Pair title="Special">If he throws his held weapon and draws another in the same round, he can enhance the newly drawn weapon with his arcane pool as a <strong className="hl">free action</strong> instead of a swift action.</Pair>
</Ability>
</>};
const _vision_clouding_strike = {title: "Vision-Clouding Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil pg. 25</Link></p>
<Ability id="vision-clouding-strike" icon={["boost","def"]}>
<Pair single id="vision-clouding-strike">Vision-Clouding Strike:</Pair>
<Pair title="Prerequisites">9th-level magus</Pair>
<Pair title="Swift Action">The magus can expend 1 or more points from his arcane pool to empower his weapon with shadowy energy that dissipates within 1 minute. A creature struck with the weapon must succeed at a Will save (DC = 1/2 the magus's level + his Intelligence modifier) or treat the magus as being in an area of <Link to="/rule/dim_light">dim light</Link> for 1d4 rounds, plus 1 additional round for each arcane pool point expended. <Link to="/spell/true_seeing">True seeing</Link> penetrates this effect, but darkvision and similar darkness-penetrating effects do not.</Pair>
</Ability>
</>};
const _wand_mastery = {title: "Wand Mastery", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 12</Link></p>
<Ability id="wand-mastery-su" icon={["boost"]}>
<Pair single id="wand-mastery-su">Wand Mastery (Su):</Pair>
<Pair title="Ability">Whenever the magus uses a wand, he calculates the DC for any spell it contains using his Intelligence modifier, instead of the minimum modifier needed to cast a spell of that level.</Pair>
</Ability>
</>};
const _wand_wielder = {title: "Wand Wielder", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 12</Link></p>
<Ability id="wand-wielder-su" icon={["power"]}>
<Pair single id="wand-wielder-su">Wand Wielder (Su):</Pair>
<Pair title="Ability">The magus can activate a wand or staff in place of casting a spell when using spell combat.</Pair>
</Ability>
</>};
export default {not_found:_not_found,accurate_strike:_accurate_strike,aquatic_agility:_aquatic_agility,arcane_accuracy:_arcane_accuracy,arcane_cloak:_arcane_cloak,arcane_dealer:_arcane_dealer,arcane_deed:_arcane_deed,arcane_edge:_arcane_edge,arcane_redoubt:_arcane_redoubt,arcane_redoubt_greater:_arcane_redoubt_greater,arcane_scent:_arcane_scent,bane_blade:_bane_blade,book_bound:_book_bound,broad_study:_broad_study,circle_of_order:_circle_of_order,close_range:_close_range,concentrate:_concentrate,critical_strike:_critical_strike,dark_shifter:_dark_shifter,devoted_blade:_devoted_blade,dispelling_strike:_dispelling_strike,disruptive:_disruptive,distant_spellstrike:_distant_spellstrike,divinatory_strike:_divinatory_strike,empowered_magic:_empowered_magic,enduring_blade:_enduring_blade,familiar:_familiar,flamboyant_arcana:_flamboyant_arcana,ghost_blade:_ghost_blade,hasted_assault:_hasted_assault,intuitive_protection:_intuitive_protection,ki_arcana:_ki_arcana,lingering_pain:_lingering_pain,maneuver_mastery:_maneuver_mastery,maximized_magic:_maximized_magic,natural_spell_combat:_natural_spell_combat,planar_hunter:_planar_hunter,pool_ray:_pool_ray,pool_strike:_pool_strike,pool_strike_arcing:_pool_strike_arcing,pool_strike_clinging:_pool_strike_clinging,pool_strike_thunderous:_pool_strike_thunderous,prescient_attack:_prescient_attack,prescient_defense:_prescient_defense,quickened_magic:_quickened_magic,rakshasas_fortune:_rakshasas_fortune,ranger_trap:_ranger_trap,reach_magic:_reach_magic,reach_spellstrike:_reach_spellstrike,reflection:_reflection,rod_mastery:_rod_mastery,rod_wielder:_rod_wielder,scroll_mastery:_scroll_mastery,silent_magic:_silent_magic,spell_blending:_spell_blending,spell_shield:_spell_shield,spell_trickery:_spell_trickery,spellbreaker:_spellbreaker,spell_scars:_spell_scars,still_magic:_still_magic,tabriss_step:_tabriss_step,throwing_magus:_throwing_magus,vision_clouding_strike:_vision_clouding_strike,wand_mastery:_wand_mastery,wand_wielder:_wand_wielder}