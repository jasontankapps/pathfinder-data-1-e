import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
const _aeromancer = {title: "Aeromancer", jsx: <><h2 id="arc-arcanist-aeromancer-aeromancer">Aeromancer</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 26</Link><br/>The Shory were the undisputed masters of wind and sky, and they unlocked numerous secrets of air magic. The vast majority of these secrets were lost when their civilization collapsed, but a few of their magical traditions have been preserved through the years. While the practice of aeromancy is rare, some arcanists today are able to rival the aerial mastery of the ancient Shory aeromancers.</p>
<Ability id="arc-arcanist-aeromancer-air-mastery-su" icon={["upgrade"]}>
<Pair single id="arc-arcanist-aeromancer-air-mastery-su" flavor="Aeromancers specialize in magic that manipulates the wind and sky.">Air Mastery (Su)</Pair>
<Pair hl title="Replaces">The arcane exploit gained at 1st level</Pair>
<Pair title="Passive Ability">Whenever an aeromancer expends a point from her arcane reservoir to increase the caster level of a spell with the air, cold, electricity, or sonic descriptor, she increases that bonus by an additional 1. Alternatively, if the aeromancer expends a point from her arcane reservoir to increase the saving throw DC of a spell with the air, cold, electricity, or sonic descriptor, she increases it by an additional 1.</Pair>
<Pair title="At 5th Level">The caster level improvement becomes an additional 2.</Pair>
<Pair title="At 10th Level">The caster level improvement becomes an additional 3, and the saving throw DC increase becomes an additional 2.</Pair>
<Pair title="At 15th Level">The caster level improvement becomes an additional 4.</Pair>
<Pair title="At 20th Level">The caster level improvement becomes an additional 5.</Pair>
</Ability>
<Ability id="arc-arcanist-aeromancer-winds-embrace-su" icon={["magic-swirl"]}>
<Pair single id="arc-arcanist-aeromancer-winds-embrace-su">Wind's Embrace (Su)</Pair>
<Pair hl title="Replaces">The arcane exploit gained at 5th level</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">An aeromancer can expend 2 points from her arcane reservoir to call upon the winds to gently carry her through the air while protecting her from harm. She is affected as though by the spell <Link to="/spell/air_walk">air walk</Link> and is surrounded by protective winds that function similarly to a <Link to="/spell/wind_wall">wind wall</Link> spell, except the effect surrounds only the aeromancer and moves with her wherever she goes. Both of these effects last for 1 minute.</Pair>
</Ability>
<Ability id="arc-arcanist-aeromancer-rebuking-gale-su" icon={["aura","tornado-discs"]}>
<Pair single id="arc-arcanist-aeromancer-rebuking-gale-su">Rebuking Gale (Su)</Pair>
<Pair hl title="Replaces">The arcane exploit gained at 11th level</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">By expending 3 points from her arcane reservoir, an aeromancer can release a powerful blast of wind to push back her foes. This takes the form of either a 20-foot-radius <Link to="/misc/burst">burst</Link> centered on the aeromancer or a 40-foot cone originating from the aeromancer's space. She can choose which form the wind takes each time she uses the ability. The winds created by this ability last for 1 round.</Pair>
<Pair title="Special">The affected area is filled with hurricane-force <Link to="/rule/winds">winds</Link> (75 mph). This makes normal ranged attacks passing through this area impossible, imposes a -8 penalty on ranged attacks from siege weapons that pass through the area, and imposes a -12 penalty on <Link to="/skill/fly">Fly</Link> checks attempted within the area. Additionally, Large creatures in the area are in danger of being checked, and Medium or smaller creatures in the area are in danger of being blown away.</Pair>
</Ability>
</>};
const _arcane_tinkerer = {title: "Arcane Tinkerer", jsx: <><h2 id="arc-arcanist-arcane_tinkerer-arcane-tinkerer">Arcane Tinkerer</h2>
<p><strong>Sources</strong> <Link to="/source/construct_handbook">Construct Handbook pg. 10</Link><br/>All constructs are animated by magic in some capacity. Arcane tinkerers use their knowledge and understanding of magic to disrupt or even destroy constructs.</p>
<Ability id="arc-arcanist-arcane_tinkerer-manipulate-construct-su" icon={["armor-downgrade"]}>
<Pair single id="arc-arcanist-arcane_tinkerer-manipulate-construct-su" flavor="An arcane tinkerer can turn the animating magic of a construct against itself.">Manipulate Construct (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploit gained at 1st level</Pair>
<Pair title="Standard Action">She can expend 1 point from her arcane reservoir to impose a -1 penalty on a single construct's attack and damage rolls for 1 round. The target can attempt a Will save to negate this effect (DC = 10 + <Link to="/misc/half">half</Link> the arcane tinkerer's level + the arcane tinkerer's Charisma modifier).</Pair>
<Pair title="At 7th Level">Instead of gaining an arcanist exploit, an arcane tinkerer can improve her <em>manipulate construct</em> ability to instead affect a construct with <Link to="/spell/slow">slow</Link> for 1 round.</Pair>
<Pair title="At 13th Level">If the arcane tinkerer has previously improved this ability, instead of gaining an arcanist exploit, she can improve this ability again to instead cause a construct to become <Link to="/misc/helpless">helpless</Link> for 1 round.</Pair>
</Ability>
<Ability id="arc-arcanist-arcane_tinkerer-break-magic-immunity-su" icon={["magic-swirl"]}>
<Pair single id="arc-arcanist-arcane_tinkerer-break-magic-immunity-su">Break Magic Immunity (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploits gained at 5th and 11th level</Pair>
<Pair title="At 5th Level">An arcane tinkerer can overcome a construct's immunity to magic. When targeting a construct with a spell, the construct is instead treated as if it has spell resistance equal to 15 + the construct's CR.</Pair>
<Pair title="At 11th Level">A construct is instead treated as if it has spell resistance equal to 11 + the construct's CR.</Pair>
</Ability>
</>};
const _blade_adept = {title: "Blade Adept", jsx: <><h2 id="arc-arcanist-blade_adept-blade-adept">Blade Adept</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 76</Link><br/>A small number of arcanists learn to use blades as part of their spellcasting and in combat. While these blade adepts are not as capable with a sword as a true master duelist, their combination of swordplay and arcane power makes them quite deadly.</p>
<Ability id="arc-arcanist-blade_adept-sword-bond-su" extraClasses="hasSubs" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-arcanist-blade_adept-sword-bond-su" flavor="A blade adept develops a bond with a blade and infuses it with arcane power.">Sword Bond (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploits gained at 1st and 9th levels</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">This ability works like a <Link to="/class/wizard">wizard's</Link> <em>arcane bond</em> ability save that the blade adept must bond to a one-handed piercing or slashing melee weapon. Additionally, the blade adept gains proficiency with the weapon if it is a simple or martial weapon.</Pair>
</Ability>
<Ability id="arc-arcanist-blade_adept-bonded-object" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-arcanist-blade_adept-bonded-object" flavor="Text from the wizard class">Bonded Object</Pair>
<Pair title="Ability"><p>If you select a bonded object, you begin play with one at no cost. These objects are always masterwork quality. Weapons acquired at 1st level are not made of any special material. If you attempt to cast a spell without your bonded object wielded, you must make a <Link to="/rule/concentration">concentration</Link> check or lose the spell. The DC for this check is equal to 20 + the spell's level.</p>
<p>You can add additional magic abilities to your bonded object as if you have the required item creation feats and if you meet the level prerequisites of the feat. For example, a wizard with a bonded dagger must be at least 5th level to add magic abilities to the dagger (see <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>). The magic properties of a bonded object, including any magic abilities added to the object, only function for the wizard who owns it. If a bonded object's owner dies, or the item is replaced, the object reverts to being an ordinary masterwork item of the appropriate type.</p>
<p>If a bonded object is damaged, it is restored to full hit points the next time you prepare your spells. If the object of an arcane bond is lost or destroyed, it can be replaced after 1 week in a special ritual that costs 200 gp per wizard level plus the cost of the masterwork item. This ritual takes 8 hours to complete. Items replaced in this way do not possess any of the additional enchantments of the previous bonded item. You can designate an existing magic item as his bonded item. This functions in the same way as replacing a lost or destroyed item except that the new magic item retains its abilities while gaining the benefits and drawbacks of becoming a bonded item.</p>
</Pair>
</Ability>
<Ability id="arc-arcanist-blade_adept-sentient-sword-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-arcanist-blade_adept-sentient-sword-su" flavor="The blade adept's bonded sword becomes a powerful, sentient black blade.">Sentient Sword (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploit gained at 3rd level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">The blade advances as a <Link to="/arc-magus/bladebound">black blade</Link> using the blade adept's class level in place of the magus's class level and points from her arcane reservoir in place of the magus's arcane pool. A blade adept with this class feature cannot have a familiar of any kind, even from another class.</Pair>
</Ability>
<Ability id="arc-arcanist-blade_adept-adept-exploits" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-arcanist-blade_adept-adept-exploits">Adept Exploits</Pair>
<Pair title="Ability">A blade adept can select from the following five additional exploits.</Pair>
</Ability>
<Ability id="arc-arcanist-blade_adept-eldritch-blade" extraClasses="subAbility numbered" icon={["upgrade"]}>
<Pair single id="arc-arcanist-blade_adept-eldritch-blade">Eldritch Blade</Pair>
<Pair title="Passive Ability">A blade adept with this exploit uses her caster level instead of her class level for the purpose of advancing her bonded sword's powers.</Pair>
</Ability>
<Ability id="arc-arcanist-blade_adept-magus-arcana" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="arc-arcanist-blade_adept-magus-arcana">Magus Arcana</Pair>
<Pair title="Passive Ability">A blade adept can select any of the following <Link to="/ability/magus_arcana">magus arcana</Link>, using her arcane reservoir in place of the magus's arcane pool: <Link to="/arcana/arcane_accuracy">arcane accuracy</Link>, <Link to="/arcana/close_range">close range</Link>, <Link to="/arcana/critical_strike">critical strike</Link>, <Link to="/arcana/dispelling_strike">dispelling strike</Link>, and <Link to="/arcana/hasted_assault">hasted assault</Link>. The blade adept treats her arcanist level as her magus level when determining the effects of magus arcana and when specific arcana are available.</Pair>
<Pair title="Special">A blade adept can take this exploit multiple times. Each time it is taken, it applies to a different magus arcana.</Pair>
</Ability>
<Ability id="arc-arcanist-blade_adept-spell-strike-su" extraClasses="subAbility numbered" icon={["mailed-fist"]}>
<Pair single id="arc-arcanist-blade_adept-spell-strike-su">Spell Strike (Su)</Pair>
<Pair title="Ability">The blade adept can deliver touch spells with her bonded weapon. This works as the <Link to="/class/magus">magus</Link> ability of the same name.</Pair>
</Ability>
<Ability id="arc-arcanist-blade_adept-student-of-the-blade-ex" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="arc-arcanist-blade_adept-student-of-the-blade-ex">Student of the Blade (Ex)</Pair>
<Pair title="Ability">A blade adept can choose from any of the following bonus feats: <Link to="/feat/arcane_strike">Arcane Strike</Link>, <Link to="/feat/weapon_finesse">Weapon Finesse</Link>, and <Link to="/feat/weapon_focus">Weapon Focus</Link> (in the weapon she is bonded to).</Pair>
<Pair title="Special">This exploit can be taken multiple times. Each time it is taken, it applies to a different feat.</Pair>
</Ability>
<Ability id="arc-arcanist-blade_adept-weapon-specialization-ex" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="arc-arcanist-blade_adept-weapon-specialization-ex">Weapon Specialization (Ex)</Pair>
<Pair title="Prerequisites">5th-level blade adept, Weapon Focus with chosen weapon</Pair>
<Pair title="Ability">The arcanist gains <Link to="/feat/weapon_specialization">Weapon Specialization</Link> with her chosen weapon as a bonus feat. The blade adept does not need to meet the prerequisites for this feat.</Pair>
</Ability>
</>};
const _blood_arcanist = {title: "Blood Arcanist", jsx: <><h2 id="arc-arcanist-blood_arcanist-blood-arcanist">Blood Arcanist</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 77</Link><br/>Though most arcanists possess only a rudimentary innate arcane gift, the blood arcanist has the full power of a bloodline to draw upon.</p>
<Ability id="arc-arcanist-blood_arcanist-bloodline" icon={["magic-swirl","stairs-goal"]}>
<Pair single id="arc-arcanist-blood_arcanist-bloodline">Bloodline</Pair>
<Pair hl title="Replaces">Arcanist exploits gained at 1st, 3rd, 9th, and 15th levels, magical supremacy</Pair>
<Pair title="Choice">A blood arcanist selects one bloodline from those available through the <Link to="/ability/sorcerer_bloodlines">sorcerer bloodline</Link> class feature.</Pair>
<Pair title="Ability">The blood arcanist gains the bloodline arcana and bloodline powers of that bloodline, treating her arcanist level as her sorcerer level. The blood arcanist does not gain the class skill, bonus feats, or bonus spells from her bloodline.</Pair>
<Pair title="Special">A blood arcanist cannot select the <Link to="/exploit/bloodline_development">bloodline development</Link> arcanist exploit. If the blood arcanist takes levels in another class that grants a bloodline, the bloodlines must be the same type, even if that means that the bloodline of one of her classes must change. Subject to GM discretion, the blood arcanist can change her former bloodline to make them conform.</Pair>
</Ability>
</>};
const _brown_fur_transmuter = {title: "Brown-Fur Transmuter", jsx: <><h2 id="arc-arcanist-brown_fur_transmuter-brown-fur-transmuter">Brown-Fur Transmuter</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 77</Link><br/>Frequently called "brown-furs," these transmutation-focused arcanists are known for transforming themselves into animals. What few realize is that these specialized arcanists excel at turning themselves - and others - into all kinds of creatures.</p>
<Ability id="arc-arcanist-brown_fur_transmuter-powerful-change-su" icon={["magic-swirl"]}>
<Pair single id="arc-arcanist-brown_fur_transmuter-powerful-change-su" flavor="The brown-fur transmuter learns to harness the power of her magic to empower her transmutations.">Powerful Change (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploit gained at 3rd level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Free Action">Whenever the brown-fur transmuter casts a transmutation spell using one of her arcanist spell slots, she can expend 1 point from her arcane reservoir to bolster the spell. If the spell grants a bonus to an ability score, the bonus then increases by 2. If it grants a bonus to more than one ability score, only one of the ability scores gains this bonus. The brownfur transmuter cannot expend more than 1 point from her arcane reservoir in this way.</Pair>
</Ability>
<Ability id="arc-arcanist-brown_fur_transmuter-share-transmutation-su" icon={["magic-swirl"]}>
<Pair single id="arc-arcanist-brown_fur_transmuter-share-transmutation-su" flavor="The brown-fur transmuter can target others with her transmutation spells.">Share Transmutation (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploit gained at 9th level</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A brown-fur transmuter can expend 1 point from her arcane reservoir to change any transmutation spell with a range of personal to a range of touch. Such a spell automatically fails on unwilling creatures.</Pair>
</Ability>
<Ability id="arc-arcanist-brown_fur_transmuter-transmutation-supremacy-su" icon={["magic-swirl"]}>
<Pair single id="arc-arcanist-brown_fur_transmuter-transmutation-supremacy-su" flavor="The brown-fur transmuter learns to fully master the power of transmutation.">Transmutation Supremacy (Su)</Pair>
<Pair hl title="Replaces">Magical supremacy</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Special">Whenever she casts a transmutation spell, it is treated as it were affected by the <Link to="/feat/extend_spell">Extend Spell</Link> feat without altering the casting time or slot used. (She cannot then alter its duration again with the Extend Spell feat). Whenever she uses her <em>powerful change</em> ability, the bonus increases by 4 instead of 2. Her <em>share transmutation</em> ability can now target a willing creature within 30 feet.</Pair>
</Ability>
</>};
const _eldritch_font = {title: "Eldritch Font", jsx: <><h2 id="arc-arcanist-eldritch_font-eldritch-font">Eldritch Font</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 77</Link><br/>For some arcanists, the power bubbling up from within is nearly too much to contain. They become adept at shaping this magical energy without needing to bind it up in spells.</p>
<Ability id="arc-arcanist-eldritch_font-font-of-power" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-arcanist-eldritch_font-font-of-power">Font of Power</Pair>
<Pair title="Passive Ability">An eldritch font gains one additional spell slot for each level of arcanist spell she can cast. However, the number of spells of each level that she can prepare reduces by 1. If this reduces her spells prepared for a level to 0, she still gains spell slots of that level, which can be consumed using the <em>consume spells</em> class feature to fuel her <em>arcane reservoir</em> or cast spells using metamagic feats.</Pair>
</Ability>
<Ability id="arc-arcanist-eldritch_font-eldritch-surge-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-arcanist-eldritch_font-eldritch-surge-su">Eldritch Surge (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploit gained at 3rd level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Swift Action">An eldritch font can pour more power into her spells and abilities. She can add 2 to the caster level and DC of a spell, or increase her effective arcanist level by 2 when using an arcanist exploit. She becomes <Link to="/misc/fatigued">fatigued</Link> upon using this ability. If she is already fatigued, she becomes <Link to="/misc/exhausted">exhausted</Link>. If she's already exhausted, or something would prevent her from becoming fatigued or exhausted, she cannot use this ability.</Pair>
<Pair title="Special">This ability does not stack with spending points from her arcane reservoir to increase the spell's caster level or DC (as the <em>arcane reservoir</em> class feature). Only rest can remove fatigue or exhaustion caused by an eldritch surge - spells and abilities have no effect.</Pair>
</Ability>
<Ability id="arc-arcanist-eldritch_font-improved-surge-su" icon={["rolling-dices"]}>
<Pair single id="arc-arcanist-eldritch_font-improved-surge-su">Improved Surge (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploit gained at 7th level</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">An eldritch font can use her <em>eldritch surge</em> ability to reroll an attack roll associated with a spell or arcanist exploit, or to reroll all of the damage dice associated with a spell or arcanist exploit. In the case of attack rolls, this ability must be used after the die is rolled but before the results are revealed. The eldritch font must take the results of the reroll, even if they are lower.</Pair>
</Ability>
<Ability id="arc-arcanist-eldritch_font-greater-surge-su" icon={["rolling-dices","armor-downgrade"]}>
<Pair single id="arc-arcanist-eldritch_font-greater-surge-su">Greater Surge (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploit gained at 13th level</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">An eldritch font can use her <em>eldritch surge</em> ability to force a creature to reroll a saving throw against one spell or arcanist exploit and take the lower value. The eldritch font must declare the use of this ability before the result of that creature's saving throw is revealed. If the spell or arcanist exploit affects more than one target, only one target is affected by this ability.</Pair>
</Ability>
<Ability id="arc-arcanist-eldritch_font-bottomless-well" icon={["magic-swirl"]}>
<Pair single id="arc-arcanist-eldritch_font-bottomless-well">Bottomless Well</Pair>
<Pair hl title="Replaces">Magical supremacy</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">An eldritch font can spend 1 hour studying her spellbook to refuel herself. Doing so allows her to prepare new spells and regain points of arcane reservoir equal to <Link to="/misc/half">half</Link> her level. She can use this ability multiple times per day, however she still only regains spell slots once per day.</Pair>
</Ability>
</>};
const _elemental_master = {title: "Elemental Master", jsx: <><h2 id="arc-arcanist-elemental_master-elemental-master">Elemental Master</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 78</Link><br/>Arcanists with an affinity for elemental forces sometimes focus on one and display its power in everything they do.</p>
<Ability id="arc-arcanist-elemental_master-elemental-focus-su" icon={["magic-swirl"]}>
<Pair single id="arc-arcanist-elemental_master-elemental-focus-su">Elemental Focus (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploit gained at 1st level</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">At 1st level, the elemental master must select one element: air, earth, fire, or water. The arcanist can prepare one additional spell per day of each level she can cast, but it must have the elemental descriptor of her chosen element. In addition, any spell she prepares from the opposite elemental school (air opposes earth, fire opposes water) takes up two of her prepared spell slots.</Pair>
</Ability>
<Ability id="arc-arcanist-elemental_master-elemental-attack-su" icon={["stairs-goal"]}>
<Pair single id="arc-arcanist-elemental_master-elemental-attack-su">Elemental Attack (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploit gained at 3rd level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The elemental master gains an arcanist exploit tied to her element. If she selected air, she gains the <Link to="/exploit/lightning_lance">lightning lance</Link> arcanist exploit. If she selected earth, she gains the <Link to="/exploit/acid_jet">acid jet</Link> arcanist exploit. If she selected fire, she gains the <Link to="/exploit/flame_arc">flame arc</Link> arcanist exploit. If she selected water, she gains the <Link to="/exploit/ice_missile">ice missile</Link> arcanist exploit.</Pair>
</Ability>
<Ability id="arc-arcanist-elemental_master-powerful-exploit-su" icon={["upgrade"]}>
<Pair single id="arc-arcanist-elemental_master-powerful-exploit-su">Powerful Exploit (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploit gained at 9th level</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">An elemental master increases the damage done by her elemental attack to 1d8 points of energy damage plus 1d8 points of damage per two arcanist levels she possesses. The type of damage is determined by the elemental attack. In addition, the range for the elemental attack ability increases to 60 feet (in the case of flame arc, a 60-foot line).</Pair>
</Ability>
<Ability id="arc-arcanist-elemental_master-greater-elemental-attack-su" icon={["stairs-goal"]}>
<Pair single id="arc-arcanist-elemental_master-greater-elemental-attack-su">Greater Elemental Attack (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploit gained at 11th level</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">The elemental master gains a greater arcanist exploit tied to her element. If she selected air, she gains the <Link to="/exploit/dancing_electricity">dancing electricity</Link> arcanist exploit. If she selected earth, she gains the <Link to="/exploit/lingering_acid">lingering acid</Link> arcanist exploit. If she selected fire, she gains the <Link to="/exploit/burning_flame">burning flame</Link> arcanist exploit. If she selected water, she gains the <Link to="/exploit/icy_tomb">icy tomb</Link> arcanist exploit.</Pair>
</Ability>
<Ability id="arc-arcanist-elemental_master-elemental-movement-su" icon={["stairs-goal"]}>
<Pair single id="arc-arcanist-elemental_master-elemental-movement-su">Elemental Movement (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploit gained at 15th level</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">An elemental master gains an elemental movement. This enhancement is based on her chosen element type. Air grants a fly speed of 90 feet (average maneuverability), earth grants a burrow speed of 30 feet, fire grants an increase of 30 feet to base land speed, and water grants a swim speed of 60 feet.</Pair>
</Ability>
</>};
const _harrowed_society_student = {title: "Harrowed Society Student", jsx: <><h2 id="arc-arcanist-harrowed_society_student-harrowed-society-student">Harrowed Society Student</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 22</Link><br/>Based out of Varisia's Twilight Academy, the secretive Harrowed Society focuses its efforts on the intellectual study of the region's supernatural quirks and hidden history, and embraces the use of the <Link to="/eq-misc/harrow_deck">harrow deck</Link> to examine the world's occult mysteries.</p>
<aside><p>This archetype is intended for use with the Pathfinder Cards: Deluxe Harrow Deck. If you don't have access to that product, use the table presented at the bottom of the <em>harrow deck</em> item page.</p>
</aside><Ability id="arc-arcanist-harrowed_society_student-psychic-reader-ex" icon={["stairs-goal","skills"]}>
<Pair single id="arc-arcanist-harrowed_society_student-psychic-reader-ex">Psychic Reader (Ex)</Pair>
<Pair hl title="Replaces">The 1st-level arcanist exploit</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A Harrowed Society student gains <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> as a bonus feat and adds <Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/perception">Perception</Link> (WIS), and <Link to="/skill/sense_motive">Sense Motive</Link> (WIS) to her list of class skills.</Pair>
</Ability>
<Ability id="arc-arcanist-harrowed_society_student-harrow-reservoir-ex" icon={["magic-swirl","upgrade"]}>
<Pair single id="arc-arcanist-harrowed_society_student-harrow-reservoir-ex">Harrow Reservoir (Ex)</Pair>
<Pair hl title="Replaces">Consume spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Once per day, a Harrowed Society student can perform a harrow reading as a 5-minute ritual. She decides which suit most closely aligns with her task at hand and deals a nine-card spread. Each time that suit appears in her spread, she adds 1 point to her arcane reservoir, to a maximum of 1 point per 2 arcanist levels. Points gained in excess of her reservoir's maximum are lost.</Pair>
<Pair title="At 8th Level">This can be done twice a day.</Pair>
<Pair title="At 16th Level">This can be done three times a day.</Pair>
</Ability>
<Ability id="arc-arcanist-harrowed_society_student-divine-the-mysteries-ex" icon={["spell-book"]}>
<Pair single id="arc-arcanist-harrowed_society_student-divine-the-mysteries-ex">Divine the Mysteries (Ex)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A Harrowed Society student can select a <Link to="/main/spells_divination">divination</Link> spell from the spell list of any class, including classes that cast divine or psychic spells, and add it to her list of spells known. This spell must be at least 1 level lower than the highest-level spell she can cast.</Pair>
<Pair title="Special">At every odd-numbered level beyond 5th (7th, 9th, 11th, and so on), a Harrowed Society student can select a new divination spell, following the same restrictions as above. She casts these spells as arcane spells, using her normal spell slots, but must use a harrow deck as an additional focus component. If such a spell is normally a psychic spell with an emotion or thought component, she must also add that component.</Pair>
</Ability>
<Ability id="arc-arcanist-harrowed_society_student-trump-card-su" icon={["upgrade","armor-upgrade","remedy","armor-downgrade"]}>
<Pair single id="arc-arcanist-harrowed_society_student-trump-card-su">Trump Card (Su)</Pair>
<Pair hl title="Replaces">The 9th-level arcanist exploit</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Standard Action"><p>A Harrowed Society student can expend 1 point from her arcane reservoir and draw a card from her harrow deck to learn her own fate or that of an ally within 30 feet. The target's fate depends on the suit of the card drawn from the deck.</p>
<blockquote>
<p><strong>Books:</strong> The target gains a +2 insight bonus on her next caster level check.</p>
<p><strong>Crowns:</strong> The target gains a +2 insight bonus on her next saving throw.</p>
<p><strong>Hammers:</strong> The target gains a +4 insight bonus on the damage roll of her next successful melee attack.</p>
<p><strong>Keys:</strong> The target gains a +4 insight bonus on her next initiative check.</p>
<p><strong>Shields:</strong> The next time the target receives magical healing, she regains an additional number of hit points equal to the Harrowed Society student's arcanist class level.</p>
<p><strong>Stars:</strong> The target gains a +4 insight bonus on her next skill check.</p>
</blockquote>
<p>A creature cannot have more than one trump card in effect at one time; drawing a new trump card for a target negates the effect of the previous trump card.</p>
<p>A Harrow Society student can attempt to read the fate of an enemy within 30 feet, resulting in a penalty for that target equal to the bonus granted above, but the target is entitled to a Will save (DC = 10 + <Link to="/misc/half">half</Link> the Harrowed Society student's arcanist level + her Charisma modifier) to negate the effect. This is considered a curse effect.</p>
<p>A Harrow Society student can have trump cards in effect for multiple creatures at the same time.</p>
</Pair>
</Ability>
</>};
const _magaambyan_initiate = {title: "Magaambyan Initiate", jsx: <><h2 id="arc-arcanist-magaambyan_initiate-magaambyan-initiate">Magaambyan Initiate</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 122</Link>, <Link to="/source/arcane_anthology">Arcane Anthology pg. 16</Link><br/>Aspiring students of the <Link to="/rule/magaambya">Magaambya</Link> often spend decades researching arcane magic while learning to follow in the footsteps of the academy's founder, Old-Mage Jatembe. Those particularly gifted in the art of sculpting spells are sometimes schooled privately in the art of traditional, esoteric, and righteous spells, in the hope that such knowledge will pave the way for the initiate's acceptance into the school proper as a <Link to="/pclass/magaambyan_arcanist">Magaambyan arcanist</Link>.</p>
<p>But many initiates find themselves overwhelmed by the extensive training and end up leaving the Magaambya before completing their studies. These spellcasters retain many of the Magaambya's techniques and philosophical bents, but are not considered to be graduates of the school. Yet they are still respected and valued, for the Magaambya's staff fully understand that its teachings and the scholastic, often hermetic lifestyle required to master the techniques are not to everyone's tastes. For the teachers of the Magaambya, there are no truly failed students save those who abandon their philosophy and succumb to the lure of cruelty and evil.</p>
<p>Because they hold the Magaambya's interests close to their hearts but are not hindered by the need to remain close at hand to study or serve as teachers or assistants, Magaambyan initiates often serve as strong supporters beyond the normal reach of the Magaambya. Furthermore, Magaambyan initiates can act immediately against the forces of evil without waiting to be officially sent out into the world.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-arcanist-magaambyan_initiate--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>A Magaambyan initiate must be of a good alignment.</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-arcanist-magaambyan_initiate-aura-of-good-ex" icon={["aura"]}>
<Pair single id="arc-arcanist-magaambyan_initiate-aura-of-good-ex">Aura of Good (Ex)</Pair>
<Pair title="Passive Ability">A Magaambyan arcanist radiates an aura of good as if she were a <Link to="/class/cleric">cleric</Link> of a level equal to her class level (see the <Link to="/spell/detect_good">detect good</Link> spell).</Pair>
</Ability>
<Ability id="arc-arcanist-magaambyan_initiate-halcyon-spell-lore-su" icon={["spell-book"]}>
<Pair single id="arc-arcanist-magaambyan_initiate-halcyon-spell-lore-su" flavor="A Magaambyan initiate's studies of the philanthropic teachings of Old-Mage Jatembe allow her to cast a limited number of spells per day beyond those she could normally prepare ahead of time.">Halcyon Spell Lore (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploits gained at 1st, 9th, and 17th levels</Pair>
<Pair title="Ability">At each class level, she chooses one spell from the druid spell list or one spell with the good descriptor from the cleric spell list. The spell must be of a spell level that she can cast, and cannot be a spell that already appears on her arcanist spell list. A Magaambyan initiate can cast a spell that she has chosen with this ability as if it were on her spell list and prepared by expending a number of points from her <em>arcane reservoir</em> equal to <Link to="/misc/half">half</Link> the spell's level (minimum 1) and expending a spell slot of the spell's level.</Pair>
<Pair title="Special">At 4th level and every 2 levels thereafter, a Magaambyan initiate can choose to lose a spell that she has chosen with this ability in exchange for a new spell of the same spell level that meets the same requirements.</Pair>
</Ability>
<Ability id="arc-arcanist-magaambyan_initiate-spell-mastery" icon={["stairs-goal"]}>
<Pair single id="arc-arcanist-magaambyan_initiate-spell-mastery">Spell Mastery</Pair>
<Pair hl title="Replaces">The arcanist exploit gained at 5th level</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability"><p>A Magaambyan initiate gains <Link to="/feat/spell_mastery">Spell Mastery</Link> as a bonus feat. Her arcanist levels count as wizard levels for the purpose of satisfying feat prerequisites, both when selecting this bonus feat and when selecting feats gained from character advancement. If she uses her arcanist level to satisfy the prerequisites for Spell Mastery, she can prepare spells selected with this feat as arcanist spells without referring to a spellbook, but not as wizard spells.</p>
<p>In addition, if the Magaambyan initiate gains levels in the <Link to="/pclass/magaambyan_arcanist">Magaambyan arcanist</Link> prestige class, her prestige class levels stack with her arcanist levels when determining the number of points in her <em>arcane reservoir</em> (though not the effectiveness of arcane exploits based on class level). A Magaambyan initiate who takes levels in Magaambyan arcanist and gains the <em>spontaneous spell mastery</em> class feature can use that ability to instantly lose one of her prepared spells and immediately prepare a different arcanist spell of the same level or lower that she has mastered with Spell Mastery, rather than <em>spontaneous spell mastery's</em> normal effect. She is still limited to the same number of times per day she can use <em>spontaneous spell mastery.</em></p>
</Pair>
<Pair title="Special">The Magaambyan initiate can also select Spell Mastery as a feat gained from character advancement, allowing her to select the feat multiple times.</Pair>
</Ability>
</>};
const _occultist = {title: "Occultist", jsx: <><h2 id="arc-arcanist-occultist-occultist">Occultist</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 78</Link><br/>Not all arcanists peer inward to discern the deepest secrets of magic. Some look outward, connecting with extraplanar creatures and bartering for secrets, power, and favor.</p>
<Ability id="arc-arcanist-occultist-planar-spells" icon={["spell-book"]}>
<Pair single id="arc-arcanist-occultist-planar-spells">Planar Spells</Pair>
<Pair title="Ability">An occultist adds all <Link to="/spell/planar_ally">planar ally</Link> spells to her spell list (using her arcanist level as the cleric level), and treats <Link to="/spell/plane_shift">plane shift</Link> as a 5th-level arcanist spell.</Pair>
</Ability>
<Ability id="arc-arcanist-occultist-conjurers-focus-sp" icon={["magic-swirl"]}>
<Pair single id="arc-arcanist-occultist-conjurers-focus-sp">Conjurer's Focus (Sp)</Pair>
<Pair hl title="Replaces">The arcanist exploit gained at 1st level</Pair>
<Pair title="Ability">An occultist can spend 1 point from her arcane reservoir to cast <Link to="/spell/summon_monster_i">summon monster I</Link>. She can cast this spell as a <strong className="hl">standard action</strong> and the summoned creatures remain for 1 minute per level (instead of 1 round per level).</Pair>
<Pair title="Special">At 3rd level and every 2 levels thereafter, the power of this ability increases by one spell level, allowing her to summon more powerful creatures (to a maximum of <Link to="/spell/summon_monster_ix">summon monster IX</Link> at 17th level), at the cost of an additional point from her arcane spell reserve per spell level. An occultist cannot have more than one summon monster spell active in this way at one time. If this ability is used again, any existing summon monster immediately ends.</Pair>
</Ability>
<Ability id="arc-arcanist-occultist-planar-contact-sp" icon={["magic-swirl"]}>
<Pair single id="arc-arcanist-occultist-planar-contact-sp">Planar Contact (Sp)</Pair>
<Pair hl title="Replaces">The arcanist exploit gained at 7th level</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">An occultist can cast <Link to="/spell/augury">augury</Link> once per day and <Link to="/spell/contact_other_plane">contact other plane</Link> once per week, using her arcanist level as her caster level.</Pair>
</Ability>
<Ability id="arc-arcanist-occultist-perfect-summoner" icon={["magic-swirl"]}>
<Pair single id="arc-arcanist-occultist-perfect-summoner">Perfect Summoner</Pair>
<Pair hl title="Replaces">Magical supremacy</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">An occultist can use her <em>conjurer's focus</em> without spending points from her arcane reservoir, and the creatures summoned last until dismissed.</Pair>
</Ability>
</>};
const _school_savant = {title: "School Savant", jsx: <><h2 id="arc-arcanist-school_savant-school-savant">School Savant</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 78</Link><br/>Some arcanists specialize in a school of magic and trade flexibility for focus. School savants are able to prepare more spells per day than typical arcanists, but their selection is more limited.</p>
<Ability id="arc-arcanist-school_savant-school-focus-su" icon={["magic-swirl"]}>
<Pair single id="arc-arcanist-school_savant-school-focus-su">School Focus (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploits gained at 1st, 3rd, and 7th levels</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>A school savant chooses <Link to="/ability/arcane_schools">a school of magic</Link>. The arcanist gains the abilities granted by that school, as the arcane school class feature of the <Link to="/class/wizard">wizard</Link>, treating her arcanist level as her wizard level for these abilities. She can also further specialize by selecting a subschool. In addition, the arcanist can prepare one additional spell per day of each level she can cast, but this spell must be chosen from the selected school.</p>
<p>Finally, the arcanist must select two additional schools of magic as her opposition schools. Whenever she prepares spells from one of her opposition schools, the spell takes up two of her prepared spell slots. In addition, a school savant takes a -4 penalty on any skill checks when crafting a magic item that has a spell from one of her opposition schools as a prerequisite. A school savant cannot select the <Link to="/exploit/school_understanding">school understanding</Link> arcanist exploit.</p>
</Pair>
</Ability>
</>};
const _spell_specialist = {title: "Spell Specialist", jsx: <><h2 id="arc-arcanist-spell_specialist-spell-specialist">Spell Specialist</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 78</Link><br/>Where most arcanists are broad in their study of magic, a spell specialist has her power focused in a few spells. Spell specialists are able to warp and twist the magic of their signature spells in ways other casters cannot.</p>
<Ability id="arc-arcanist-spell_specialist-signature-spells" extraClasses="hasSubs" icon={["magic-swirl"]}>
<Pair single id="arc-arcanist-spell_specialist-signature-spells">Signature Spells</Pair>
<Pair hl title="Replaces">The arcanist exploits gained at 1st, 7th, 13th, and 19th levels</Pair>
<Pair title="Ability">At 1st level and each time a spell specialist gains a new spell level, she chooses a signature spell. The spell specialist can cast this spell without preparing it, in the same way a <Link to="/class/sorcerer">sorcerer</Link> casts spells spontaneously. Even though the spell specialist does not need to prepare this spell, it still counts against the number of spells she can prepare, reducing the number of spells of each level she can prepare each day by 1. A spell specialist can swap out a single signature spell for another spell of the same level when gaining a class level.</Pair>
<Pair title="Passive Ability">The DC for signature spells increases by 1. The spell specialist gains a +2 bonus on <Link to="/rule/concentration">concentration</Link> checks when casting signature spells; this bonus increases to +4 at 10th level.</Pair>
<Pair title="Special">Additionally, a spell specialist can apply one of the three following additional effects by spending 1 point from her arcane reservoir.</Pair>
</Ability>
<Ability id="arc-arcanist-spell_specialist-dismiss-su" extraClasses="subAbility numbered" icon={["upgrade"]}>
<Pair single id="arc-arcanist-spell_specialist-dismiss-su">Dismiss (Su)</Pair>
<Pair title="Swift Action">A spell specialist can <Link to="/misc/dismiss">dismiss</Link> a signature spell as a swift action instead of a standard action. Alternatively, the spell specialist can dismiss a signature spell that has a duration but isn't normally dismissible.</Pair>
</Ability>
<Ability id="arc-arcanist-spell_specialist-spell-bender-su" extraClasses="subAbility numbered" icon={["magic-swirl","barbed-arrow"]}>
<Pair single id="arc-arcanist-spell_specialist-spell-bender-su">Spell Bender (Su)</Pair>
<Pair title="Ability">The spell specialist can bend the line of a spell that has a line area of effect up to 90 degrees at any single point along the line's length.</Pair>
</Ability>
<Ability id="arc-arcanist-spell_specialist-spellwarp-su" extraClasses="subAbility numbered" icon={["aura","tornado-discs","barbed-arrow"]}>
<Pair single id="arc-arcanist-spell_specialist-spellwarp-su">Spellwarp (Su)</Pair>
<Pair title="Ability">A spell specialist can reduce the radius of a <Link to="/misc/spread">spread or burst</Link> effect or shorten the length of a cone. All changes must occur in 5-foot increments, to a minimum of 5 feet. Alternatively, the spell specialist can change the area of effect of a cone spell to a line with a length equal to the spell's range.</Pair>
</Ability>
</>};
const _twilight_sage = {title: "Twilight Sage", jsx: <><h2 id="arc-arcanist-twilight_sage-twilight-sage">Twilight Sage</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 6</Link><br/>The twilight sages of Geb carry out experiments to solve the ultimate puzzle and unlock the secrets of life and death. While the twilight sages generally aren't actively malicious, most are willing to perform human experimentation in pursuit of knowledge with little regard for the casualties.</p>
<Ability id="arc-arcanist-twilight_sage-consume-life-su" icon={["magic-swirl"]}>
<Pair single id="arc-arcanist-twilight_sage-consume-life-su" flavor="By wresting a soul from life to death, a twilight sage gains a slightly deeper understanding of mortality, fueling her curiosity and eldritch power.">Consume Life (Su)</Pair>
<Pair hl title="Replaces">Consume spells</Pair>
<Pair title="Full-Round Action">She can consume the life energy of a helpless living creature, killing it. This creature must have 2 or more Hit Dice and be below 0 hit points. The twilight sage adds 2 points to her <em>arcane reservoir</em> if the creature's Hit Dice equaled or exceeded the sage's character level, or 1 point if the creature's Hit Dice equaled at least <Link to="/misc/half">half</Link> her character level. This ability is a death effect.</Pair>
</Ability>
<Ability id="arc-arcanist-twilight_sage-necromantic-focus-ex" icon={["magic-swirl"]}>
<Pair single id="arc-arcanist-twilight_sage-necromantic-focus-ex">Necromantic Focus (Ex)</Pair>
<Pair title="Info">Twilight sages consider their research into life and death to be paramount, beyond all other concerns. Each day, a twilight sage must prepare at least one necromancy spell of each spell level she can cast.</Pair>
</Ability>
<Ability id="arc-arcanist-twilight_sage-twilight-barrier-ex" icon={["magic-swirl","armor-upgrade","stairs-goal"]}>
<Pair single id="arc-arcanist-twilight_sage-twilight-barrier-ex" flavor="A twilight sage's arcane barrier differs from those of other arcanists, as it draws upon both negative and positive energy to protect the sage.">Twilight Barrier (Ex)</Pair>
<Pair hl title="Alters">The arcanist exploit gained at 1st level</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A twilight sage must choose the <Link to="/exploit/arcane_barrier">arcane barrier</Link> exploit as her first arcanist exploit. Whenever an attack removes the last temporary hit point from the twilight sage's arcane barrier, the barrier's negative energy lashes back at the attacker, dealing an amount of negative energy damage equal to the barrier's maximum temporary hit point capacity.</Pair>
</Ability>
<Ability id="arc-arcanist-twilight_sage-twilight-transfer-su" icon={["remedy","magic-swirl"]}>
<Pair single id="arc-arcanist-twilight_sage-twilight-transfer-su" flavor="A twilight sage's mastery over life and death allows her to transfer life energy into a fading vessel.">Twilight Transfer (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploit gained at 11th level</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">Once per day, she can expend 1 point from her arcane reservoir while touching a creature that died within the past round to affect that creature as if it had received a <Link to="/spell/breath_of_life">breath of life</Link> spell, using her arcanist level as the caster level. At the same time, a willing or unconscious living creature within 300 feet that has a number of Hit Dice equal to or greater than the recipient's instantly dies. This ability is a death effect, and if the victim doesn't actually die (such as if it was summoned or is immune to death effects), the recipient doesn't receive the <em>breath of life</em> effect.</Pair>
</Ability>
<Ability id="arc-arcanist-twilight_sage-deaths-release-su" icon={["magic-swirl"]}>
<Pair single id="arc-arcanist-twilight_sage-deaths-release-su" flavor="A twilight sage has mastered the relationship between death and arcane power, and has gained a limited ability to surpass her own mortality.">Death's Release (Su)</Pair>
<Pair hl title="Replaces">Magical supremacy</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Whenever she dies (but not if she becomes undead), if she still has points in her arcane reservoir she appears as an ephemeral spirit in the air above her corpse. She can still cast spells in this form, using her corpse as the origin point and determining whether she can see or target any creature or area as though she were alive in that square. To cast a spell, she must expend a number of points from her arcane reservoir equal to 1 + the spell's level.</Pair>
<Pair title="Special">The spirit disappears if she has no points remaining in her arcane reservoir or she spends a round without casting a spell. The spirit can't move, deliver touch or ranged touch spells, or do anything that isn't part of casting a spell. Her spirit completes the verbal and somatic components of her spells, any material components are consumed from the supply on the corpse, and any focus components must be on the corpse.</Pair>
</Ability>
</>};
const _unlettered_arcanist = {title: "Unlettered Arcanist", jsx: <><h2 id="arc-arcanist-unlettered_arcanist-unlettered-arcanist">Unlettered Arcanist</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 79</Link><br/>Some arcanists store their spells as whispered secrets within familiars instead of on paper.</p>
<Ability id="arc-arcanist-unlettered_arcanist-familiar" icon={["stairs-goal"]}>
<Pair single id="arc-arcanist-unlettered_arcanist-familiar">Familiar</Pair>
<Pair hl title="Replaces">Spellbooks</Pair>
<Pair title="Ability">An unlettered arcanist does not keep a spellbook. Instead, she gains a <Link to="/ability/familiar">familiar</Link> in which she stores her spells as a <Link to="/class/witch">witch</Link> does, though she does not gain a witch's patron. Treat her arcanist level as her witch level for determining the abilities and benefits granted by the <Link to="/sidekick/familiar">familiar</Link>. Anything that would allow an unlettered arcanist to add spells to her spellbook allows her to add spells to her familiar instead.</Pair>
</Ability>
<Ability id="arc-arcanist-unlettered_arcanist-witch-spells" icon={["magic-swirl"]}>
<Pair single id="arc-arcanist-unlettered_arcanist-witch-spells">Witch Spells</Pair>
<Pair hl title="Alters">Spells</Pair>
<Pair title="Passive Ability">An unlettered arcanist follows a different arcane tradition. She uses the <Link to="/main/witch_spell">witch spell list</Link> instead of the <Link to="/main/spells_arcanist">arcanist spell list</Link>.</Pair>
</Ability>
</>};
const _white_mage = {title: "White Mage", jsx: <><h2 id="arc-arcanist-white_mage-white-mage">White Mage</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 79</Link><br/>A white mage is an arcanist touched by a divine power and gifted with the ability to heal others.</p>
<Ability id="arc-arcanist-white_mage-spontaneous-healing-su" icon={["remedy"]}>
<Pair single id="arc-arcanist-white_mage-spontaneous-healing-su">Spontaneous Healing (Su)</Pair>
<Pair hl title="Replaces">The arcanist exploits gained at 1st and 9th levels</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A white mage can expend 1 point from her arcane reservoir to use one of her spell slots to cast a <Link to="/main/cure_spells">cure spell</Link> (any spell with "cure" in its name) from the cleric spell list as if it were on her spell list and prepared. The spell must be of a level the arcanist can cast.</Pair>
<Pair title="At 10th Level">The white mage can expend 5 points from her arcane reservoir and a spell slot of at least 5th level to cast <Link to="/spell/breath_of_life">breath of life</Link>.</Pair>
</Ability>
<Ability id="arc-arcanist-white_mage-greater-exploit" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-arcanist-white_mage-greater-exploit">Greater Exploit</Pair>
<Pair title="Info">A white mage can select the following greater exploit.</Pair>
</Ability>
<Ability id="arc-arcanist-white_mage-fast-healing-su" extraClasses="subAbility" icon={["remedy"]}>
<Pair single id="arc-arcanist-white_mage-fast-healing-su">Fast Healing (Su)</Pair>
<Pair title="Prerequisites">11th-level arcanist</Pair>
<Pair title="Ability">A white mage can spend 1 point from her arcane reservoir and expend a spell slot of at least 2nd level to grant her allies the <em>fast healing</em> ability. Allies within 30 feet gain <Link to="/umr/fast_healing">fast healing</Link> equal to <Link to="/misc/half">half</Link> the level of the spell slot sacrificed. This effect lasts for a number of rounds equal to the arcanist's Charisma modifier (minimum 1).</Pair>
</Ability>
</>};
export default {aeromancer:_aeromancer,arcane_tinkerer:_arcane_tinkerer,blade_adept:_blade_adept,blood_arcanist:_blood_arcanist,brown_fur_transmuter:_brown_fur_transmuter,eldritch_font:_eldritch_font,elemental_master:_elemental_master,harrowed_society_student:_harrowed_society_student,magaambyan_initiate:_magaambyan_initiate,occultist:_occultist,school_savant:_school_savant,spell_specialist:_spell_specialist,twilight_sage:_twilight_sage,unlettered_arcanist:_unlettered_arcanist,white_mage:_white_mage}