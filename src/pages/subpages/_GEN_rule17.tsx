import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
const _step_6_spells = {title: "Step 6: Spells", parent_topics: ["advanced_gm_topics","simple_monster_creation"], siblings: ["step_1_array","step_2_creature_type_or_class_graft","step_3_subtype_graft","step_4_template_graft","step_5_size_graft","step_6_spells","step_7_monster_options","step_8_skills","step_9_damage","other_calculations","monster_creation_examples"], subtopics: ["choosing_spells","spell_lists"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 218</Link></p>
<p>This step is only for monsters that use the spellcaster array. For monsters that know only a few spells (rather than being focused primarily on spellcasting), choose an array other than spellcaster and give the monster the secondary spellcasting universal option in <Link to="/rule/step_7_monster_options">Step 7</Link>.</p>
<p>The spell choices for a spellcaster monster are intentionally limited compared to those of a full NPC, since a monster created using the simple monster creation system is designed to have enough spells to last though a single battle or session. If a monster created this way ends up appearing in multiple sessions, you can swap out the spells each time, assuming that doing so fits the nature and theme of the monster.</p>
<p>The spells you choose for the monster during this step represent its total spellcasting arsenal for an encounter. If you want to treat some of the spells as being cast from scrolls, wands, or staves, implement them as such during play. Regardless of the source, additional spells still count against the total number the monster can cast.</p>
<p>You'll also notice that some types of spells don't appear on these lists - especially spells that solely increase statistics, such as <Link to="/spell/bulls_strength">bull's strength</Link>, <Link to="/spell/false_life">false life</Link>, and <Link to="/spell/mage_armor">mage armor</Link>. That's because such spells are often cast before combat, and the simple monster creation system assumes the effects of those spells are already in the monster's base numbers.</p>
<p><strong className="hl">Spell DCs:</strong> To determine the DC of a spell cast by a monster, add the spell's level to the number listed in the spell DC column of the monster's array. Use the spell's cleric or sorcerer/wizard level if multiple classes can cast it. If neither of those classes has the spell, use the highest spell level listed in the spell's description.</p>
</>};
const _choosing_spells = {title: "Choosing Spells", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_6_spells"], siblings: ["choosing_spells","spell_lists"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 218</Link></p>
<p>The easiest way to choose spells for a monster is to select a spell list from among those on the following pages that best matches its theme, using the options in this section. A fey with powerful spell-like abilities might choose the enchantment, fey, nature, or trickery spell list. A wizard dedicated to flame might choose the fire spell list, a dedicated transmuter would likely pick the transmutation list, and a generalist might take the arcane or magic list.</p>
<p>When you choose a spell list, the monster gains the following sets of spells according to its CR band - the spellcasting range its CR falls into.</p>
<ul>
<li>The primary spells of its CR band, usable once per day. These are the monster's highest-level spells.</li>
<li>Both the primary and secondary spells of the CR band one step lower than its own CR band, usable three times per day. These account for the monster's less potent spells.</li>
<li>The primary spells of the CR band two steps below its own, usable at will. These are the monster's lowest-level spells.</li>
</ul>
<p>This setup produces a spellcaster with a small number of powerful spells that it can use rarely, a larger number of weaker but still useful spells that it can use often, and spells so weak that it hardly ever uses them in battle but can use them frequently.</p>
<p>Note that a CR 0-3 monster doesn't gain any at-will spells or any spells usable three times per day, and a CR 4-7 monster doesn't gain any at-will spells.</p>
<p>Write down the spells and the number of times they can be used. For the sample monsters later in this section, the spells are separated into attack spells, defensive spells, and utility spells, but this step is optional.</p>
<p>When you pick a spell list, the monster automatically gains the benefit listed at the bottom of that spell list. If you choose to create your own spell list, choose the benefit that matches your monster best, or create your own benefit for that monster instead.</p>
<p>For example, a CR 9 monster using the aberrant spell list would gain <Link to="/spell/feeblemind">feeblemind</Link> and <Link to="/spell/spell_resistance">spell resistance</Link> once per day each (from the 8-11 CR band); <Link to="/spell/beast_shape_i">beast shape I</Link>, <Link to="/spell/major_image">major image</Link>, <Link to="/spell/acid_arrow">acid arrow</Link>, and <Link to="/spell/see_invisibility">see invisibility</Link> three times per day each (from the 4-7 CR band); and <Link to="/spell/cause_fear">cause fear</Link> and <Link to="/spell/long_arm">long arm</Link> usable at will (from the 0-3 CR band). It would also gain the spell list's benefit: the <Link to="/umr/fortification">fortification</Link> universal monster rule.</p>
<h3 id="rule-choosing_spells-in-depth-spell-choice">In-Depth Spell Choice</h3>
<p>These lists are arranged to facilitate maximum speed in choosing spells, but you can choose spells individually, give the monster secondary spells in place of primary spells (which is why the CR 16+ band lists secondary spells), or mix and match at your discretion. To keep your monster balanced, don't deviate too far from the number of spells listed for its power level, though you can decrease or increase the number of spells within reason.</p>
<p>If you want to pick spells one by one, use the following spell levels for each CR band.</p>
<ScrollContainer id="rule-choosing_spells--table-0"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Spell Level</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td>0 or 1st</td>
</tr>
<tr>
<td>4-7</td>
<td>2nd or 3rd</td>
</tr>
<tr>
<td>8-11</td>
<td>4th or 5th</td>
</tr>
<tr>
<td>12-15</td>
<td>6th or 7th</td>
</tr>
<tr>
<td>16+</td>
<td>8th or 9th</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _spell_lists = {title: "Spell Lists", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_6_spells"], siblings: ["choosing_spells","spell_lists"], subtopics: ["spell_lists_1","spell_lists_2","spell_lists_3","spell_lists_4","spell_lists_5","spell_lists_6"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 218</Link></p>
<p>The following lists are themed to different uses of magic, and also correspond to bloodlines, domains, and other prominent spell themes. For a monster with a class graft, use the graft's suggested spell lists to help you choose the monster's spells.</p>
</>};
const _spell_lists_1 = {title: "Aberrant through Battle", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_6_spells","spell_lists"], siblings: ["spell_lists_1","spell_lists_2","spell_lists_3","spell_lists_4","spell_lists_5","spell_lists_6"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 218</Link></p>
<p>The following lists are themed to different uses of magic, and also correspond to bloodlines, domains, and other prominent spell themes. For a monster with a class graft, use the graft's suggested spell lists to help you choose the monster's spells.</p>
<h3 id="rule-spell_lists_1-aberrant-spell-list">Aberrant Spell List</h3>
<ScrollContainer id="rule-spell_lists_1--table-0"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/cause_fear">Cause fear</Link>, <Link to="/spell/long_arm">long arm</Link></td>
<td><Link to="/spell/daze">Daze</Link>, <Link to="/spell/silent_image">silent image</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/beast_shape_i">Beast shape I</Link>, <Link to="/spell/major_image">major image</Link></td>
<td><Link to="/spell/acid_arrow">Acid arrow</Link>, <Link to="/spell/see_invisibility">see invisibility</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/feeblemind">Feeblemind</Link>, <Link to="/spell/spell_resistance">spell resistance</Link></td>
<td><Link to="/spell/beast_shape_ii">Beast shape II</Link>, <Link to="/spell/black_tentacles">black tentacles</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/plane_shift">Plane shift</Link>, <Link to="/spell/project_image">project image</Link></td>
<td><Link to="/spell/beast_shape_iv">Beast shape IV</Link>, <Link to="/spell/veil">veil</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/foresight">Foresight</Link>, <Link to="/spell/shapechange">shapechange</Link></td>
<td><Link to="/spell/mind_blank">Mind blank</Link>, <Link to="/spell/polymorph_any_object">polymorph any object</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains the benefit of the <Link to="/umr/fortification">fortification</Link> universal monster rule.</p>
<h3 id="rule-spell_lists_1-abjuration-spell-list">Abjuration Spell List</h3>
<ScrollContainer id="rule-spell_lists_1--table-1"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/endure_elements">Endure elements</Link>, <Link to="/spell/magic_circle_against_chaos_evil_good_law">magic circle against chaos/evil/good/law</Link></td>
<td><Link to="/spell/alarm">Alarm</Link>, <Link to="/spell/hold_portal">hold portal</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/nondetection">Nondetection</Link>, <Link to="/spell/protection_from_energy">protection from energy</Link></td>
<td><Link to="/spell/dispel_magic">Dispel magic</Link>, <Link to="/spell/resist_energy">resist energy</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/dismissal">Dismissal</Link>, <Link to="/spell/stoneskin">stoneskin</Link></td>
<td><Link to="/spell/dimensional_anchor">Dimensional anchor</Link>, <Link to="/spell/lesser_globe_of_invulnerability">lesser globe of invulnerability</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/antimagic_field">Antimagic field</Link>, <Link to="/spell/banishment">banishment</Link></td>
<td><Link to="/spell/globe_of_invulnerability">Globe of invulnerability</Link>, <Link to="/spell/greater_dispel_magic">greater dispel magic</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/mages_disjunction">Mage's disjunction</Link>, <Link to="/spell/prismatic_sphere">prismatic sphere</Link></td>
<td><Link to="/spell/prismatic_wall">Prismatic wall</Link>, <Link to="/spell/protection_from_spells">protection from spells</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Choose one energy type. The monster gains resistance 5 to that type of damage. At CR 12, increase the resistance to 10. At CR 16, increase the resistance to 20.</p>
<h3 id="rule-spell_lists_1-abyssal-spell-list">Abyssal Spell List</h3>
<ScrollContainer id="rule-spell_lists_1--table-2"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/burning_hands">Burning hands</Link>, <Link to="/spell/summon_monster_i">summon monster I</Link></td>
<td><Link to="/spell/cause_fear">Cause fear</Link>, <Link to="/spell/protection_from_good">protection from good or law</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/rage">Rage</Link>, <Link to="/spell/summon_monster_iii">summon monster III</Link></td>
<td><Link to="/spell/alter_self">Alter self</Link>, <Link to="/spell/scare">scare</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/dismissal">Dismissal</Link>, <Link to="/spell/summon_monster_v">summon monster V</Link></td>
<td><Link to="/spell/chaos_hammer">Chaos hammer</Link>, <Link to="/spell/dimension_door">dimension door</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/summon_monster_vi">Summon monster VI</Link>, <Link to="/spell/word_of_chaos">word of chaos</Link></td>
<td><Link to="/spell/greater_dispel_magic">Greater dispel magic</Link>, <Link to="/spell/greater_teleport">greater teleport</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/energy_drain">Energy drain</Link>, <Link to="/spell/summon_monster_ix">summon monster IX</Link></td>
<td><Link to="/spell/cloak_of_chaos">Cloak of chaos</Link>, <Link to="/spell/unholy_aura">unholy aura</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Increase the monster's Strength modifier by 1. At CR 13, increase it by 2 instead. At CR 17, increase it by 3 instead.</p>
<h3 id="rule-spell_lists_1-acid-spell-list">Acid Spell List</h3>
<ScrollContainer id="rule-spell_lists_1--table-3"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/corrosive_touch">Corrosive touch</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link></td>
<td><Link to="/spell/acid_splash">acid splash</Link>, <Link to="/spell/cause_fear">cause fear</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/feat/empowered">Empowered</Link> <em>corrosive touch,</em> <Link to="/spell/protection_from_energy">protection from energy (acid only)</Link></td>
<td><Link to="/spell/acid_arrow">acid arrow</Link>, <Link to="/spell/resist_energy">resist energy (acid only)</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/acidic_spray">Acidic spray</Link>, <Link to="/spell/corrosive_consumption">corrosive consumption</Link></td>
<td><Link to="/spell/rusting_grasp">rusting grasp</Link>, <Link to="/spell/transmute_rock_to_mud">transmute rock to mud</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/feat/widened">Widened</Link> <Link to="/spell/acid_fog">acid fog</Link>, <Link to="/spell/caustic_eruption">caustic eruption</Link></td>
<td><Link to="/feat/quickened">Quickened</Link> <em>acid arrow, acid fog</em></td>
</tr>
<tr>
<td>16+</td>
<td>Empowered <em>caustic eruption,</em> <Link to="/spell/form_of_the_dragon_iii">form of the dragon III (black only)</Link></td>
<td><Link to="/feat/maximized">Maximized</Link> <em>acidic spray,</em> <Link to="/spell/storm_of_vengeance">storm of vengeance</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains acid resistance 5. At CR 12, increase the resistance to 10. At CR 16, the monster gains acid immunity.</p>
<h3 id="rule-spell_lists_1-air-spell-list">Air Spell List</h3>
<ScrollContainer id="rule-spell_lists_1--table-4"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/jump">Jump</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link></td>
<td><Link to="/spell/feather_fall">Feather fall</Link>, <Link to="/spell/open_close">open/close</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/gaseous_form">Gaseous form</Link>, <Link to="/spell/wind_wall">wind wall</Link></td>
<td><Link to="/spell/fly">Fly</Link>, <Link to="/spell/gust_of_wind">gust of wind</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/control_winds">Control winds</Link>, <Link to="/spell/overland_flight">overland flight</Link></td>
<td><Link to="/spell/air_walk">Air walk</Link>, <Link to="/feat/extended">extended</Link> <em>wind wall</em></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/control_weather">Control weather</Link>, <Link to="/spell/elemental_body_iv">elemental body IV (air only)</Link></td>
<td><Link to="/spell/chain_lightning">Chain lightning</Link>, <Link to="/spell/reverse_gravity">reverse gravity</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/elemental_swarm">Elemental swarm (air only)</Link>, <Link to="/spell/winds_of_vengeance">winds of vengeance</Link></td>
<td><Link to="/feat/empowered">Empowered</Link> <em>chain lightning,</em> <Link to="/spell/whirlwind">whirlwind</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Increase the monster's movement speed by 10 feet.</p>
<h3 id="rule-spell_lists_1-alchemy-spell-list">Alchemy Spell List</h3>
<ScrollContainer id="rule-spell_lists_1--table-5"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/expeditious_retreat">Expeditious retreat</Link>, <Link to="/spell/true_strike">true strike</Link></td>
<td><Link to="/spell/ant_haul">Ant haul</Link>, <Link to="/spell/jump">jump</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/displacement">Displacement</Link>, <Link to="/spell/fly">fly</Link></td>
<td><Link to="/spell/invisibility">Invisibility</Link>, <Link to="/spell/vomit_swarm">vomit swarm</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/magic_jar">Magic jar</Link>, <Link to="/spell/overland_flight">overland flight</Link></td>
<td><Link to="/spell/dragons_breath">Dragon's breath</Link>, <Link to="/spell/stoneskin">stoneskin</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/eyebite">Eyebite</Link>, <Link to="/spell/twin_form">twin form</Link></td>
<td><Link to="/spell/heal">Heal</Link>, <Link to="/spell/true_seeing">true seeing</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/fiery_body">Fiery body</Link>, <Link to="/spell/shapechange">shapechange</Link></td>
<td><Link to="/spell/clone">Clone</Link>, <Link to="/spell/simulacrum">simulacrum</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains a +2 bonus on saving throws against disease and poison</p>
<h3 id="rule-spell_lists_1-animal-spell-list">Animal Spell List</h3>
<ScrollContainer id="rule-spell_lists_1--table-6"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/hold_animal">Hold animal</Link>, <Link to="/spell/summon_natures_ally_i">summon nature's ally I</Link></td>
<td><Link to="/spell/charm_animal">Charm animal</Link>, <Link to="/spell/hide_from_animals">hide from animals</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/dominate_animal">Dominate animal</Link>, <Link to="/spell/greater_magic_fang">greater magic fang</Link></td>
<td><Link to="/spell/beast_shape_i">Beast shape I (animals only)</Link>, <Link to="/spell/speak_with_animals">speak with animals</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/animal_growth">Animal growth</Link>, <Link to="/spell/insect_plague">insect plague</Link></td>
<td><Link to="/spell/giant_vermin">Giant vermin</Link>, <Link to="/spell/locate_creature">locate creature</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/antilife_shell">Antilife shell</Link>, <Link to="/spell/summon_natures_ally_vii">summon nature's ally VII</Link></td>
<td><Link to="/spell/beast_shape_iv">Beast shape IV (animal only)</Link>, <Link to="/spell/mass_cure_light_wounds">mass cure light wounds</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/feat/quickened">Quickened</Link> <em>insect plague,</em> <Link to="/spell/shapechange">shapechange</Link></td>
<td><Link to="/spell/animal_shapes">Animal shapes</Link>, <Link to="/spell/summon_natures_ally_vii">summon nature's ally VII (animals only)</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Animal allies within 20 feet of the monster gain a +1 luck bonus on attack rolls.</p>
<h3 id="rule-spell_lists_1-arcane-spell-list">Arcane Spell List</h3>
<ScrollContainer id="rule-spell_lists_1--table-7"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/expeditious_retreat">Expeditious retreat</Link>, <Link to="/spell/magic_missile">magic missile</Link></td>
<td><Link to="/spell/light">Light</Link>, <Link to="/spell/prestidigitation">prestidigitation</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/dispel_magic">Dispel magic</Link>, <Link to="/spell/levitate">levitate</Link></td>
<td><Link to="/spell/invisibility">Invisibility</Link>, <Link to="/spell/scorching_ray">scorching ray</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/feat/empowered">Empowered</Link> <Link to="/spell/lightning_bolt">lightning bolt</Link>, <Link to="/spell/overland_flight">overland flight</Link></td>
<td><Link to="/spell/dimension_door">Dimension door</Link>, <Link to="/spell/lesser_globe_of_invulnerability">lesser globe of invulnerability</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/feat/quickened">Quickened</Link> <em>dispel magic,</em> <Link to="/spell/greater_teleport">greater teleport</Link></td>
<td><Link to="/feat/maximized">Maximized</Link> <Link to="/spell/fireball">fireball</Link>, <Link to="/spell/true_seeing">true seeing</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/power_word_kill">Power word kill</Link>, quickened <Link to="/spell/wall_of_force">wall of force</Link></td>
<td>Maximized <Link to="/spell/cone_of_cold">cone of cold</Link>, <Link to="/spell/power_word_stun">power word stun</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Increase the saving throw DCs of any of the monster's spells to which a metamagic feat has been applied by 1.</p>
<h3 id="rule-spell_lists_1-artifice-spell-list">Artifice Spell List</h3>
<ScrollContainer id="rule-spell_lists_1--table-8"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/animate_rope">Animate rope</Link>, <Link to="/spell/magic_stone">magic stone</Link></td>
<td><Link to="/spell/floating_disk">floating disk</Link>, <Link to="/spell/mending">mending</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/stone_shape">Stone shape</Link>, <Link to="/spell/tiny_hut">tiny hut</Link></td>
<td><Link to="/spell/make_whole">Make whole</Link>, <Link to="/spell/wood_shape">wood shape</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/major_creation">Major creation</Link>, <Link to="/spell/wall_of_stone">wall of stone</Link></td>
<td><Link to="/spell/fabricate">Fabricate</Link>, <Link to="/spell/minor_creation">minor creation</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/limited_wish">Limited wish</Link>, <Link to="/spell/wall_of_iron">wall of iron</Link></td>
<td><Link to="/spell/animate_objects">Animate objects</Link>, <Link to="/spell/flesh_to_stone">flesh to stone</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/crushing_hand">Crushing hand</Link>, <Link to="/spell/prismatic_sphere">prismatic sphere</Link></td>
<td><Link to="/spell/iron_body">Iron body</Link>, <Link to="/spell/polymorph_any_object">polymorph any object</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> When the monster casts a spell from this list, it gains a deflection bonus to AC equal to the spell's level for 1 round.</p>
<h3 id="rule-spell_lists_1-battle-spell-list">Battle Spell List</h3>
<ScrollContainer id="rule-spell_lists_1--table-9"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/bless">Bless</Link>, <Link to="/spell/expeditious_retreat">expeditious retreat</Link></td>
<td><Link to="/spell/bleed">Bleed</Link>, <Link to="/spell/flare">flare</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/fly">Fly</Link>, <Link to="/spell/haste">haste</Link></td>
<td><Link to="/spell/invisibility">Invisibility</Link>, <Link to="/spell/protection_from_arrows">protection from arrows</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/interposing_hand">Interposing hand</Link>, <Link to="/spell/teleport">teleport</Link></td>
<td><Link to="/spell/dimension_door">Dimension door</Link>, <Link to="/spell/greater_invisibility">greater invisibility</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/giant_form_i">Giant form I</Link>, <Link to="/spell/transformation">transformation</Link></td>
<td><Link to="/spell/greater_teleport">Greater teleport</Link>, <Link to="/spell/true_seeing">true seeing</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/mass_hold_monster">Mass hold monster</Link>, <Link to="/spell/time_stop">time stop</Link></td>
<td><Link to="/spell/mislead">Mislead</Link>, <Link to="/spell/power_word_stun">power word stun</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Increase the monster's attack bonus for all attacks by 1.</p>
</>};
const _spell_lists_2 = {title: "Celestial through Destruction", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_6_spells","spell_lists"], siblings: ["spell_lists_1","spell_lists_2","spell_lists_3","spell_lists_4","spell_lists_5","spell_lists_6"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 218</Link></p>
<h3 id="rule-spell_lists_2-celestial-spell-list">Celestial Spell List</h3>
<ScrollContainer id="rule-spell_lists_2--table-0"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/bless">Bless</Link>, <Link to="/spell/divine_favor">divine favor</Link></td>
<td><Link to="/spell/guidance">Guidance</Link>, <Link to="/spell/light">light</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/magic_circle_against_evil">Magic circle against evil</Link>, <Link to="/spell/prayer">prayer</Link></td>
<td><Link to="/spell/cure_moderate_wounds">Cure moderate wounds</Link>, <Link to="/spell/resist_energy">resist energy</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/flame_strike">Flame strike</Link>, <Link to="/spell/greater_command">greater command</Link></td>
<td><Link to="/spell/blessing_of_fervor">Blessing of fervor</Link>, <Link to="/spell/holy_smite">holy smite</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/banishment">Banishment</Link>, <Link to="/spell/holy_word">holy word</Link></td>
<td><Link to="/feat/empowered">Empowered</Link> <em>flame strike,</em> <Link to="/spell/greater_dispel_magic">greater dispel magic</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/feat/quickened">Quickened</Link> <em>flame strike,</em> <Link to="/spell/gate">gate</Link></td>
<td><Link to="/spell/holy_aura">Holy aura</Link>, <Link to="/spell/sunburst">sunburst</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains resistance 5 to acid and cold. At CR 12, these resistances increase to 10.</p>
<h3 id="rule-spell_lists_2-chaos-spell-list">Chaos Spell List</h3>
<ScrollContainer id="rule-spell_lists_2--table-1"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/lesser_confusion">Lesser confusion</Link>, <Link to="/spell/protection_from_law">protection from law</Link></td>
<td><Link to="/spell/daze">Daze</Link>, <Link to="/spell/entropic_shield">entropic shield</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/magic_circle_against_law">Magic circle against law</Link>, <Link to="/spell/rage">rage</Link></td>
<td><Link to="/spell/alter_self">Alter self</Link>, <Link to="/spell/daze_monster">daze monster</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/dispel_law">Dispel law</Link>, <Link to="/spell/mind_fog">mind fog</Link></td>
<td><Link to="/spell/chaos_hammer">Chaos hammer</Link>, <Link to="/spell/confusion">confusion</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/insanity">Insanity</Link>, <Link to="/spell/word_of_chaos">word of chaos</Link></td>
<td><Link to="/spell/animate_objects">Animate objects</Link>, <Link to="/spell/repulsion">repulsion</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/prismatic_sphere">Prismatic sphere</Link>, <Link to="/spell/summon_monster_ix">summon monster IX (chaotic only)</Link></td>
<td><Link to="/spell/cloak_of_chaos">Cloak of chaos</Link>, <Link to="/spell/scintillating_pattern">scintillating pattern</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster's attacks count as chaotic for the purpose of overcoming damage reduction.</p>
<h3 id="rule-spell_lists_2-charm-spell-list">Charm Spell List</h3>
<ScrollContainer id="rule-spell_lists_2--table-2"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/charm_person">Charm person</Link>, <Link to="/spell/hypnotism">hypnotism</Link></td>
<td><Link to="/spell/daze">Daze</Link>, <Link to="/spell/message">message</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/hold_person">Hold person</Link>, <Link to="/spell/suggestion">suggestion</Link></td>
<td><Link to="/spell/calm_emotions">Calm emotions</Link>, <Link to="/spell/daze_monster">daze monster</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/charm_monster">Charm monster</Link>, <Link to="/spell/dominate_person">dominate person</Link></td>
<td><Link to="/spell/confusion">Confusion</Link>, <Link to="/spell/lesser_geas">lesser geas</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/insanity">Insanity</Link>, <Link to="/spell/mass_hold_person">mass hold person</Link></td>
<td><Link to="/spell/geas_quest">Geas/quest</Link>, <Link to="/spell/mass_suggestion">mass suggestion</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/dominate_monster">Dominate monster</Link>, <Link to="/spell/mass_hold_monster">mass hold monster</Link></td>
<td><Link to="/spell/demand">Demand</Link>, <Link to="/spell/mass_charm_monster">mass charm monster</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains a +4 bonus on saving throws against charm effects.</p>
<h3 id="rule-spell_lists_2-cold-spell-list">Cold Spell List</h3>
<ScrollContainer id="rule-spell_lists_2--table-3"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/frostbite">Frostbite</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link></td>
<td><Link to="/spell/endure_elements">Endure elements</Link>, <Link to="/spell/ray_of_frost">ray of frost</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/protection_from_energy">Protection from energy</Link>, <Link to="/spell/sleet_storm">sleet storm</Link></td>
<td><Link to="/spell/chill_metal">Chill metal</Link>, <Link to="/spell/resist_energy">resist energy</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/cone_of_cold">Cone of cold</Link>, <Link to="/feat/enlarged">enlarged</Link> <Link to="/spell/ice_storm">ice storm</Link></td>
<td><em>Ice storm,</em> <Link to="/spell/wall_of_ice">wall of ice</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/control_weather">Control weather</Link>, <Link to="/spell/form_of_the_dragon_ii">form of the dragon II (white only)</Link></td>
<td><Link to="/feat/empowered">Empowered</Link> <em>cone of cold,</em> <Link to="/spell/freezing_sphere">freezing sphere</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/feat/quickened">Quickened</Link> <em>cone of cold,</em> <Link to="/spell/form_of_the_dragon_iii">form of the dragon III (white only)</Link></td>
<td><Link to="/spell/polar_ray">Polar ray</Link>, <Link to="/spell/simulacrum">simulacrum</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains cold resistance 5. At CR 12, increase the resistance to 10. At CR 16, the monster gains cold immunity.</p>
<h3 id="rule-spell_lists_2-community-spell-list">Community Spell List</h3>
<ScrollContainer id="rule-spell_lists_2--table-4"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/bless">Bless</Link>, <Link to="/spell/sanctuary">sanctuary</Link></td>
<td><Link to="/spell/cure_light_wounds">Cure light wounds</Link>, <Link to="/spell/virtue">virtue</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/dispel_magic">Dispel magic</Link>, <Link to="/spell/prayer">prayer</Link></td>
<td><Link to="/spell/aid">Aid</Link>, <Link to="/spell/shield_other">shield other</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/telepathic_bond">Telepathic bond</Link>, <Link to="/spell/wall_of_stone">wall of stone</Link></td>
<td><Link to="/spell/cure_critical_wounds">Cure critical wounds</Link>, <Link to="/spell/status">status</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/heal">Heal</Link>, <Link to="/spell/repulsion">repulsion</Link></td>
<td><Link to="/spell/banishment">Banishment</Link>, <Link to="/spell/blade_barrier">blade barrier</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/foresight">Foresight</Link>, <Link to="/spell/miracle">miracle</Link></td>
<td><Link to="/spell/dimensional_lock">Dimensional lock</Link>, <Link to="/spell/mass_cure_critical_wounds">mass cure critical wounds</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains Diplomacy as an additional master skill.</p>
<h3 id="rule-spell_lists_2-conjuration-spell-list">Conjuration Spell List</h3>
<ScrollContainer id="rule-spell_lists_2--table-5"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/grease">Grease</Link>, <Link to="/spell/summon_monster_i">summon monster I</Link></td>
<td><Link to="/spell/acid_splash">Acid splash</Link>, <Link to="/spell/guidance">guidance</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/stinking_cloud">Stinking cloud</Link>, <Link to="/spell/summon_monster_iii">summon monster III</Link></td>
<td><Link to="/spell/acid_arrow">Acid arrow</Link>, <Link to="/spell/summon_monster_ii">summon monster II</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/summon_monster_v">Summon monster V</Link>, <Link to="/spell/teleport">teleport</Link></td>
<td><Link to="/spell/dimension_door">Dimension door</Link>, <Link to="/spell/summon_monster_iv">summon monster IV</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/greater_teleport">Greater teleport</Link>, <Link to="/spell/summon_monster_vii">summon monster VII</Link></td>
<td><Link to="/spell/acid_fog">Acid fog</Link>, <Link to="/spell/summon_monster_vi">summon monster VI</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/gate">Gate</Link>, <Link to="/spell/summon_monster_ix">summon monster IX</Link></td>
<td><Link to="/spell/incendiary_cloud">Incendiary cloud</Link>, <Link to="/spell/summon_monster_viii">summon monster VIII</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster doubles the duration of all conjuration (summoning) spells it casts.</p>
<h3 id="rule-spell_lists_2-darkness-spell-list">Darkness Spell List</h3>
<ScrollContainer id="rule-spell_lists_2--table-6"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/cause_fear">Cause fear</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link></td>
<td><Link to="/spell/daze">Daze</Link>, <Link to="/spell/silent_image">silent image</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/deeper_darkness">Deeper darkness</Link>, <Link to="/spell/displacement">displacement</Link></td>
<td><Link to="/spell/blindness_deafness">Blindness/deafness (only to cause blindness)</Link>, <Link to="/spell/darkness">darkness</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/shadow_evocation">Shadow evocation</Link>, <Link to="/spell/summon_monster_v">summon monster V (1d3 shadows)</Link></td>
<td><Link to="/spell/black_tentacles">Black tentacles</Link>, <Link to="/spell/shadow_conjuration">shadow conjuration</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/greater_shadow_conjuration">Greater shadow conjuration</Link>, <Link to="/spell/power_word_blind">power word blind</Link></td>
<td><Link to="/feat/quickened">Quickened</Link> <em>darkness,</em> <Link to="/spell/shadow_walk">shadow walk</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/energy_drain">Energy drain</Link>, <Link to="/spell/shades">shades</Link></td>
<td><Link to="/spell/greater_shadow_evocation">Greater shadow evocation</Link>, <Link to="/feat/maximized">maximized</Link> <em>shadow evocation</em></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster's spells with the darkness descriptor count as 1 spell level higher.</p>
<h3 id="rule-spell_lists_2-death-spell-list">Death Spell List</h3>
<ScrollContainer id="rule-spell_lists_2--table-7"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/chill_touch">Chill touch</Link>, <Link to="/spell/ray_of_enfeeblement">ray of enfeeblement</Link></td>
<td><Link to="/spell/bleed">Bleed</Link>, <Link to="/spell/touch_of_fatigue">touch of fatigue</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/stricken_heart">Stricken heart</Link>, <Link to="/spell/vampiric_touch">vampiric touch</Link></td>
<td><Link to="/spell/death_knell">Death knell</Link>, <Link to="/spell/ghoul_touch">ghoul touch</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/slay_living">Slay living</Link>, <Link to="/spell/waves_of_fatigue">waves of fatigue</Link></td>
<td><Link to="/spell/death_ward">Death ward</Link>, <Link to="/spell/enervation">enervation</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/destruction">Destruction</Link>, <Link to="/spell/finger_of_death">finger of death</Link></td>
<td><Link to="/spell/circle_of_death">Circle of death</Link>, <Link to="/spell/undeath_to_death">undeath to death</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/energy_drain">Energy drain</Link>, <Link to="/spell/wail_of_the_banshee">wail of the banshee</Link></td>
<td><Link to="/spell/horrid_wilting">Horrid wilting</Link>, <Link to="/spell/symbol_of_death">symbol of death</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Increase the saving throw DC of any death spell the monster casts by 1.</p>
<h3 id="rule-spell_lists_2-destined-spell-list">Destined Spell List</h3>
<ScrollContainer id="rule-spell_lists_2--table-8"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/alarm">Alarm</Link>, <Link to="/spell/magic_circle_against_chaos_evil_good_law">magic circle against chaos/evil/good/law</Link></td>
<td><Link to="/spell/expeditious_retreat">Expeditious retreat</Link>, <Link to="/spell/true_strike">true strike</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/displacement">Displacement</Link>, <Link to="/spell/protection_from_energy">protection from energy</Link></td>
<td><Link to="/spell/blur">Blur</Link>, <Link to="/spell/good_hope">good hope</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/break_enchantment">Break enchantment</Link>, <Link to="/spell/debilitating_portent">debilitating portent</Link></td>
<td><Link to="/spell/divination">Divination</Link>, <Link to="/spell/freedom_of_movement">freedom of movement</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/feat/quickened">Quickened</Link> <em>displacement,</em> <Link to="/spell/jolting_portent">jolting portent</Link></td>
<td><Link to="/spell/mislead">Mislead</Link>, <Link to="/spell/spell_turning">spell turning</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/foresight">Foresight</Link>, quickened <em>freedom of movement</em></td>
<td><Link to="/spell/mind_blank">Mind blank</Link>, <Link to="/spell/moment_of_prescience">moment of prescience</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Increase all the monster's saving throw bonuses by 1.</p>
<h3 id="rule-spell_lists_2-destruction-spell-list">Destruction Spell List</h3>
<ScrollContainer id="rule-spell_lists_2--table-9"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/burning_hands">Burning hands</Link>, <Link to="/spell/true_strike">true strike</Link></td>
<td><Link to="/spell/acid_splash">Acid splash</Link>, <Link to="/spell/ray_of_frost">ray of frost</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/fireball">Fireball</Link>, <Link to="/spell/rage">rage</Link></td>
<td><Link to="/spell/acid_arrow">acid arrow</Link>, <Link to="/spell/shatter">shatter</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/feat/maximized">Maximized</Link> <em>acid arrow,</em> <Link to="/spell/shout">shout</Link></td>
<td><Link to="/spell/ice_storm">Ice storm</Link>, <Link to="/spell/inflict_critical_wounds">inflict critical wounds</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/disintegrate">Disintegrate</Link>, <Link to="/feat/quickened">quickened</Link> <Link to="/spell/lightning_bolt">lightning bolt</Link></td>
<td>Maximized <em>fireball,</em> <Link to="/spell/harm">harm</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/feat/empowered">Empowered</Link> <em>disintegrate,</em> <Link to="/spell/implosion">implosion</Link></td>
<td><Link to="/spell/earthquake">Earthquake</Link>, <Link to="/spell/fire_storm">fire storm</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Increase the saving throw DCs of any spells the monster casts that deal damage by 1.</p>
</>};
const _spell_lists_3 = {title: "Divination through Fire", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_6_spells","spell_lists"], siblings: ["spell_lists_1","spell_lists_2","spell_lists_3","spell_lists_4","spell_lists_5","spell_lists_6"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 218</Link></p>
<h3 id="rule-spell_lists_3-divination-spell-list">Divination Spell List</h3>
<ScrollContainer id="rule-spell_lists_3--table-0"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/anticipate_peril">Anticipate peril</Link>, <Link to="/spell/unprepared_combatant">unprepared combatant</Link></td>
<td><Link to="/spell/guidance">Guidance</Link>, <Link to="/spell/true_strike">true strike</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/clairaudience_clairvoyance">Clairaudience/clairvoyance</Link>, <Link to="/spell/see_invisibility">see invisibility</Link></td>
<td><Link to="/spell/arcane_sight">Arcane sight</Link>, <Link to="/spell/detect_thoughts">detect thoughts</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/scrying">Scrying</Link>, <Link to="/spell/telepathic_bond">telepathic bond</Link></td>
<td><Link to="/spell/discern_lies">Discern lies</Link>, <Link to="/spell/locate_creature">locate creature</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/greater_arcane_sight">Greater arcane sight</Link>, <Link to="/spell/greater_scrying">greater scrying</Link></td>
<td><Link to="/spell/find_the_path">Find the path</Link>, <Link to="/spell/true_seeing">true seeing</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/foresight">Foresight</Link>, <Link to="/spell/prediction_of_failure">prediction of failure</Link></td>
<td><Link to="/spell/discern_location">Discern location</Link>, <Link to="/spell/moment_of_prescience">moment of prescience</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster cannot be surprised while it is conscious and able to take actions.</p>
<h3 id="rule-spell_lists_3-draconic-spell-list">Draconic Spell List</h3>
<ScrollContainer id="rule-spell_lists_3--table-1"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/burning_hands">Burning hands</Link>, <Link to="/spell/cause_fear">cause fear</Link></td>
<td><Link to="/spell/jump">Jump</Link>, <Link to="/spell/true_strike">true strike</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/fly">Fly</Link>, <Link to="/spell/haste">haste</Link></td>
<td><Link to="/spell/draconic_reservoir">Draconic reservoir</Link>, <Link to="/spell/scare">scare</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/overland_flight">Overland flight</Link>, <Link to="/spell/spell_resistance">spell resistance</Link></td>
<td><Link to="/spell/dragons_breath">Dragon's breath</Link>, <Link to="/spell/fear">fear</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/form_of_the_dragon_ii">Form of the dragon II</Link>, <Link to="/spell/spell_turning">spell turning</Link></td>
<td><Link to="/spell/form_of_the_dragon_i">Form of the dragon I</Link>, <Link to="/spell/symbol_of_fear">symbol of fear</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/form_of_the_dragon_iii">Form of the dragon III</Link>, <Link to="/spell/wish">wish</Link></td>
<td><Link to="/spell/foresight">Foresight</Link>, <Link to="/spell/power_word_stun">power word stun</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster's AC and flat-footed AC increase by 2. In addition, the monster gains resistance 5 to your choice of acid, cold, electricity, or fire.</p>
<h3 id="rule-spell_lists_3-earth-spell-list">Earth Spell List</h3>
<ScrollContainer id="rule-spell_lists_3--table-2"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/expeditious_excavation">Expeditious excavation</Link>, <Link to="/spell/magic_stone">magic stone</Link></td>
<td><Link to="/spell/acid_splash">Acid splash</Link>, <Link to="/spell/resistance">resistance</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/meld_into_stone">Meld into stone</Link>, <Link to="/spell/stone_shape">stone shape</Link></td>
<td><Link to="/spell/acid_arrow">Acid arrow</Link>, <Link to="/spell/soften_earth_and_stone">soften earth and stone</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/transmute_mud_to_rock">Transmute mud to rock</Link>, <Link to="/spell/transmute_rock_to_mud">transmute rock to mud</Link></td>
<td><Link to="/spell/spike_stones">Spike stones</Link>, <Link to="/spell/wall_of_stone">wall of stone</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/elemental_body_iv">Elemental body IV (earth only)</Link>, <Link to="/spell/wall_of_iron">wall of iron</Link></td>
<td><Link to="/spell/major_creation">Major creation</Link>, <Link to="/spell/move_earth">move earth</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/elemental_swarm">Elemental swarm (earth only)</Link>, <Link to="/spell/imprisonment">imprisonment</Link></td>
<td><Link to="/spell/earthquake">Earthquake</Link>, <Link to="/spell/iron_body">iron body</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains acid resistance 5. At CR 12, increase the resistance to 10. At CR 16, the monster gains acid immunity.</p>
<h3 id="rule-spell_lists_3-electricity-spell-list">Electricity Spell List</h3>
<ScrollContainer id="rule-spell_lists_3--table-3"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/expeditious_retreat">Expeditious retreat</Link>, <Link to="/spell/shocking_grasp">shocking grasp</Link></td>
<td><Link to="/spell/flare">Flare</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/call_lightning">Call lightning</Link>, <Link to="/spell/lightning_bolt">lightning bolt</Link></td>
<td><Link to="/spell/elemental_touch">Elemental touch (electricity only)</Link>, <Link to="/spell/elemental_aura">elemental aura (electricity only)</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/call_lightning_storm">Call lightning storm</Link>, <Link to="/feat/empowered">empowered</Link> <em>lightning bolt</em></td>
<td><Link to="/spell/ball_lightning">Ball lightning</Link>, <Link to="/spell/dragons_breath">dragon's breath (electricity only)</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/chain_lightning">Chain lightning</Link>, <Link to="/feat/quickened">quickened</Link> <em>lightning bolt</em></td>
<td><Link to="/spell/control_weather">control weather</Link>, <Link to="/spell/form_of_the_dragon_ii">form of the dragon II (blue or bronze only)</Link></td>
</tr>
<tr>
<td>16+</td>
<td>Empowered <em>chain lightning,</em> empowered quickened <em>lightning bolt</em></td>
<td><Link to="/spell/form_of_the_dragon_iii">Form of the dragon III (blue or bronze only)</Link>, <Link to="/spell/power_word_stun">power word stun</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains electricity resistance 5. At CR 12, increase the resistance to 10. At CR 16, the monster gains electricity immunity.</p>
<h3 id="rule-spell_lists_3-elemental-spell-list">Elemental Spell List</h3>
<ScrollContainer id="rule-spell_lists_3--table-4"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/burning_hands">Burning hands</Link>, <Link to="/spell/produce_flame">produce flame</Link></td>
<td><Link to="/spell/ray_of_frost">Ray of frost</Link>, <Link to="/spell/resistance">resistance</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/fireball">Fireball</Link>, <Link to="/spell/lightning_bolt">lightning bolt</Link></td>
<td><Link to="/spell/scorching_ray">Scorching ray</Link>, <Link to="/spell/sleet_storm">sleet storm</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/control_winds">Control winds</Link>, <Link to="/spell/elemental_body_ii">elemental body II</Link></td>
<td><Link to="/spell/elemental_body_i">Elemental body I</Link>, <Link to="/spell/ice_storm">ice storm</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/elemental_body_iv">Elemental body IV</Link>, <Link to="/spell/fire_storm">fire storm</Link></td>
<td><Link to="/spell/elemental_body_iii">Elemental body III</Link>, <Link to="/spell/freezing_sphere">freezing sphere</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/elemental_swarm">Elemental swarm</Link>, <Link to="/spell/meteor_swarm">meteor swarm</Link></td>
<td><Link to="/feat/empowered">Empowered</Link> <Link to="/spell/chain_lightning">chain lightning</Link>, <Link to="/spell/summon_monster_viii">summon monster VIII (elementals only)</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains one of the following: a fly speed of 60 feet with average maneuverability, a burrow speed of 30 feet, a 30-foot increase to its base speed, or a swim speed of 60 feet.</p>
<h3 id="rule-spell_lists_3-enchantment-spell-list">Enchantment Spell List</h3>
<ScrollContainer id="rule-spell_lists_3--table-5"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/charm_person">Charm person</Link>, <Link to="/spell/sleep">sleep</Link></td>
<td><Link to="/spell/daze">Daze</Link>, <Link to="/spell/hypnotism">hypnotism</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/hideous_laughter">Hideous laughter</Link>, <Link to="/spell/hold_person">hold person</Link></td>
<td><Link to="/spell/suggestion">Suggestion</Link>, <Link to="/spell/touch_of_idiocy">touch of idiocy</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/dominate_person">Dominate person</Link>, <Link to="/spell/feeblemind">feeblemind</Link></td>
<td><Link to="/spell/charm_monster">Charm monster</Link>, <Link to="/spell/confusion">confusion</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/insanity">Insanity</Link>, <Link to="/spell/mass_suggestion">mass suggestion</Link></td>
<td><Link to="/spell/mass_hold_person">Mass hold person</Link>, <Link to="/spell/power_word_blind">power word blind</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/irresistible_dance">Irresistible dance</Link>, <Link to="/spell/power_word_kill">power word kill</Link></td>
<td><Link to="/spell/binding">Binding</Link>, <Link to="/spell/power_word_stun">power word stun</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains either Bluff or Diplomacy as an additional master skill.</p>
<h3 id="rule-spell_lists_3-evil-spell-list">Evil Spell List</h3>
<ScrollContainer id="rule-spell_lists_3--table-6"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/bane">Bane</Link>, <Link to="/spell/inflict_light_wounds">inflict light wounds</Link></td>
<td><Link to="/spell/bleed">Bleed</Link>, <Link to="/spell/protection_from_good">protection from good</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/bestow_curse">Bestow curse</Link>, <Link to="/spell/magic_circle_against_good">magic circle against good</Link></td>
<td><Link to="/spell/darkness">Darkness</Link>, <Link to="/spell/ghoul_touch">ghoul touch</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/dispel_good">Dispel good</Link>, <Link to="/spell/slay_living">slay living</Link></td>
<td><Link to="/spell/inflict_critical_wounds">Inflict critical wounds</Link>, <Link to="/spell/unholy_blight">unholy blight</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/blasphemy">Blasphemy</Link>, <Link to="/spell/destruction">destruction</Link></td>
<td><Link to="/spell/harm">Harm</Link>, <Link to="/spell/mass_inflict_moderate_wounds">mass inflict moderate wounds</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/power_word_kill">Power word kill</Link>, <Link to="/spell/summon_monster_ix">summon monster IX (evil only)</Link></td>
<td><Link to="/spell/power_word_stun">Power word stun</Link>, <Link to="/spell/unholy_aura">unholy aura</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster's attacks count as evil for the purpose of overcoming damage reduction.</p>
<h3 id="rule-spell_lists_3-evocation-spell-list">Evocation Spell List</h3>
<ScrollContainer id="rule-spell_lists_3--table-7"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/burning_hands">Burning hands</Link>, <Link to="/spell/magic_missile">magic missile</Link></td>
<td><Link to="/spell/light">Light</Link>, <Link to="/spell/ray_of_frost">ray of frost</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/fireball">Fireball</Link>, <Link to="/spell/lightning_bolt">lightning bolt</Link></td>
<td><Link to="/spell/scorching_ray">Scorching ray</Link>, <Link to="/spell/shatter">shatter</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/cone_of_cold">Cone of cold</Link>, <Link to="/feat/empowered">empowered</Link> <em>fireball</em></td>
<td><Link to="/spell/ice_storm">Ice storm</Link>, <Link to="/spell/wall_of_fire">wall of fire</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/delayed_blast_fireball">Delayed blast fireball</Link>, <Link to="/feat/quickened">quickened</Link> <em>fireball</em></td>
<td><Link to="/spell/chain_lightning">Chain lightning</Link>, <Link to="/feat/maximized">maximized</Link> <em>lightning bolt</em></td>
</tr>
<tr>
<td>16+</td>
<td>Quickened <em>ice storm,</em> <Link to="/spell/meteor_swarm">meteor swarm</Link></td>
<td><Link to="/spell/polar_ray">Polar ray</Link>, <Link to="/spell/sunburst">sunburst</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster adds 1/2 its CR to the damage dealt with evocation spells it casts.</p>
<h3 id="rule-spell_lists_3-fey-spell-list">Fey Spell List</h3>
<ScrollContainer id="rule-spell_lists_3--table-8"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/charm_person">Charm person</Link>, <Link to="/spell/entangle">entangle</Link></td>
<td><Link to="/spell/dancing_lights">Dancing lights</Link>, <Link to="/spell/faerie_fire">faerie fire</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/deep_slumber">Deep slumber</Link>, <Link to="/spell/suggestion">suggestion</Link></td>
<td><Link to="/spell/glitterdust">Glitterdust</Link>, <Link to="/spell/hideous_laughter">hideous laughter</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/baleful_polymorph">Baleful polymorph</Link>, <Link to="/spell/tree_stride">tree stride</Link></td>
<td><Link to="/spell/dimension_door">Dimension door</Link>, <Link to="/spell/poison">poison</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/insanity">Insanity</Link>, <Link to="/spell/phase_door">phase door</Link></td>
<td><Link to="/spell/mislead">Mislead</Link>, <Link to="/spell/transport_via_plants">transport via plants</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/shambler">Shambler</Link>, <Link to="/spell/shapechange">shapechange</Link></td>
<td><Link to="/spell/irresistible_dance">Irresistible dance</Link>, <Link to="/spell/scintillating_pattern">scintillating pattern</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Increase the saving throw DCs of any compulsion spell the monster casts by 2.</p>
<h3 id="rule-spell_lists_3-fire-spell-list">Fire Spell List</h3>
<ScrollContainer id="rule-spell_lists_3--table-9"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/burning_hands">Burning hands</Link>, <Link to="/spell/heat_metal">heat metal</Link></td>
<td><Link to="/spell/flare">Flare</Link>, <Link to="/spell/produce_flame">produce flame</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/feat/empowered">Empowered</Link> <em>burning hands,</em> <Link to="/spell/fireball">fireball</Link></td>
<td><Link to="/spell/flame_blade">Flame blade</Link>, <Link to="/spell/flaming_sphere">flaming sphere</Link></td>
</tr>
<tr>
<td>8-11</td>
<td>Empowered <em>fireball,</em> <Link to="/spell/flame_strike">flame strike</Link></td>
<td><Link to="/spell/fire_shield">Fire shield</Link>, <Link to="/spell/wall_of_fire">wall of fire</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/elemental_body_iv">Elemental body IV (fire only)</Link>, <Link to="/feat/quickened">quickened</Link> <em>fireball</em></td>
<td><Link to="/spell/fire_seeds">Fire seeds</Link>, <Link to="/spell/fire_storm">fire storm</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/elemental_swarm">Elemental swarm (fire only)</Link>, <Link to="/spell/meteor_swarm">meteor swarm</Link></td>
<td>Empowered <em>fire storm,</em> <Link to="/spell/incendiary_cloud">incendiary cloud</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains fire resistance 5. At CR 12, increase the resistance to 10. At CR 16, the monster gains fire immunity.</p>
</>};
const _spell_lists_4 = {title: "Glory through Madness", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_6_spells","spell_lists"], siblings: ["spell_lists_1","spell_lists_2","spell_lists_3","spell_lists_4","spell_lists_5","spell_lists_6"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 218</Link></p>
<h3 id="rule-spell_lists_4-glory-spell-list">Glory Spell List</h3>
<ScrollContainer id="rule-spell_lists_4--table-0"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/bless">Bless</Link>, <Link to="/spell/sanctuary">sanctuary</Link></td>
<td><Link to="/spell/guidance">Guidance</Link>, <Link to="/spell/resistance">resistance</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/daylight">Daylight</Link>, <Link to="/spell/searing_light">searing light</Link></td>
<td><Link to="/spell/aid">Aid</Link>, <Link to="/spell/bless_weapon">bless weapon</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/dispel_evil">Dispel evil</Link>, <Link to="/spell/flame_strike">flame strike</Link></td>
<td><Link to="/spell/dismissal">Dismissal</Link>, <Link to="/spell/holy_smite">holy smite</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/holy_sword">Holy sword</Link>, <Link to="/spell/holy_word">holy word</Link></td>
<td><Link to="/spell/blade_barrier">Blade barrier</Link>, <Link to="/spell/undeath_to_death">undeath to death</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/gate">Gate</Link>, <Link to="/spell/overwhelming_presence">overwhelming presence</Link></td>
<td><Link to="/spell/earthquake">Earthquake</Link>, <Link to="/spell/holy_aura">holy aura</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains a +4 bonus on saves against fear.</p>
<h3 id="rule-spell_lists_4-good-spell-list">Good Spell List</h3>
<ScrollContainer id="rule-spell_lists_4--table-1"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/bless">Bless</Link>, <Link to="/spell/protection_from_evil">protection from evil</Link></td>
<td><Link to="/spell/guidance">Guidance</Link>, <Link to="/spell/virtue">virtue</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/magic_circle_against_evil">Magic circle against evil</Link>, <Link to="/spell/prayer">prayer</Link></td>
<td><Link to="/spell/cure_moderate_wounds">Cure moderate wounds</Link>, <Link to="/spell/hold_person">hold person</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/dispel_evil">Dispel evil</Link>, <Link to="/spell/plane_shift">plane shift</Link></td>
<td><Link to="/spell/cure_critical_wounds">Cure critical wounds</Link>, <Link to="/spell/holy_smite">holy smite</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/holy_word">Holy word</Link>, <Link to="/spell/summon_monster_vii">summon monster VII</Link>*</td>
<td><Link to="/spell/blade_barrier">Blade barrier</Link>, <Link to="/spell/heal">heal</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/storm_of_vengeance">Storm of vengeance</Link>, <Link to="/spell/summon_monster_ix">summon monster IX</Link>*</td>
<td><Link to="/spell/holy_aura">Holy aura</Link>, <Link to="/spell/summon_monster_viii">summon monster VIII</Link>*</td>
</tr>
</tbody></table></ScrollContainer>
<p>* Can summon good creatures only.</p>
<p><strong className="hl">Benefit:</strong> The monster's attacks count as good for the purpose of overcoming damage reduction.</p>
<h3 id="rule-spell_lists_4-healing-spell-list">Healing Spell List</h3>
<ScrollContainer id="rule-spell_lists_4--table-2"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/cure_light_wounds">cure light wounds</Link>, <Link to="/spell/sanctuary">sanctuary</Link></td>
<td><Link to="/spell/stabilize">Stabilize</Link>, <Link to="/spell/virtue">virtue</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/cure_serious_wounds">cure serious wounds</Link>, <Link to="/spell/remove_disease">remove disease</Link></td>
<td><Link to="/spell/cure_moderate_wounds">Cure moderate wounds</Link>, <Link to="/spell/shield_other">shield other</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/breath_of_life">breath of life</Link>, <Link to="/spell/mass_cure_light_wounds">mass cure light wounds</Link></td>
<td><Link to="/spell/cure_critical_wounds">Cure critical wounds</Link>, <Link to="/spell/neutralize_poison">neutralize poison</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/mass_cure_serious_wounds">Mass cure serious wounds</Link>, <Link to="/spell/regenerate">regenerate</Link></td>
<td><Link to="/spell/heal">Heal</Link>, <Link to="/spell/mass_cure_moderate_wounds">mass cure moderate wounds</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/feat/quickened">Quickened</Link> <em>breath of life,</em> <Link to="/spell/mass_heal">mass heal</Link></td>
<td>quickened <em>cure critical wounds,</em> <Link to="/spell/mass_cure_critical_wounds">mass cure critical wounds</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains Diplomacy or Heal as an additional master skill.</p>
<h3 id="rule-spell_lists_4-illusion-spell-list">Illusion Spell List</h3>
<ScrollContainer id="rule-spell_lists_4--table-3"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/color_spray">Color spray</Link>, <Link to="/spell/silent_image">silent image</Link></td>
<td><Link to="/spell/disguise_self">Disguise self</Link>, <Link to="/spell/ghost_sound">ghost sound</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/displacement">Displacement</Link>, <Link to="/spell/major_image">major image</Link></td>
<td><Link to="/spell/invisibility">Invisibility</Link>, <Link to="/spell/minor_image">minor image</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/mirage_arcana">Mirage arcana</Link>, <Link to="/spell/persistent_image">persistent image</Link></td>
<td><Link to="/spell/greater_invisibility">Greater invisibility</Link>, <Link to="/spell/phantasmal_killer">phantasmal killer</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/feat/quickened">Quickened</Link> <em>displacement,</em> <Link to="/spell/mass_invisibility">mass invisibility</Link></td>
<td><Link to="/spell/shadow_walk">Shadow walk</Link>, <Link to="/spell/veil">veil</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/shades">Shades</Link>, <Link to="/spell/weird">weird</Link></td>
<td><Link to="/spell/greater_shadow_evocation">Greater shadow evocation</Link>, <Link to="/spell/scintillating_pattern">scintillating pattern</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Increase the saving throw DCs of any illusion spells the monster casts by 1.</p>
<h3 id="rule-spell_lists_4-infernal-spell-list">Infernal Spell List</h3>
<ScrollContainer id="rule-spell_lists_4--table-4"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/burning_hands">Burning hands</Link>, <Link to="/spell/protection_from_good">protection from good</Link></td>
<td><Link to="/spell/charm_person">Charm person</Link>, <Link to="/spell/flare">flare</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/fireball">Fireball</Link>, <Link to="/spell/suggestion">suggestion</Link></td>
<td><Link to="/spell/daze_monster">Daze monster</Link>, <Link to="/spell/scorching_ray">scorching ray</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/dominate_person">Dominate person</Link>, <Link to="/feat/empowered">empowered</Link> <em>fireball</em></td>
<td><Link to="/spell/charm_monster">Charm monster</Link>, <Link to="/spell/wall_of_fire">wall of fire</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/blasphemy">Blasphemy</Link>, <Link to="/spell/greater_teleport">greater teleport</Link></td>
<td><Link to="/feat/quickened">Quickened</Link> <em>fireball,</em> <Link to="/spell/mass_suggestion">mass suggestion</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/dominate_monster">Dominate monster</Link>, <Link to="/spell/meteor_swarm">meteor swarm</Link></td>
<td>Empowered <Link to="/feat/maximized">maximized</Link> <em>fireball,</em> <Link to="/spell/power_word_stun">power word stun</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains fire resistance 5 and a +2 bonus on saving throws against poison. At CR 9, the fire resistance increases to 10 and the bonus on saving throws against poison increases to +4.</p>
<h3 id="rule-spell_lists_4-knowledge-spell-list">Knowledge Spell List</h3>
<ScrollContainer id="rule-spell_lists_4--table-5"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/anticipate_peril">Anticipate peril</Link>, <Link to="/spell/true_strike">true strike</Link></td>
<td><Link to="/spell/alarm">Alarm</Link>, <Link to="/spell/comprehend_languages">comprehend languages</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/arcane_sight">Arcane sight</Link>, <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link></td>
<td><Link to="/spell/detect_thoughts">Detect thoughts</Link>, <Link to="/spell/locate_object">locate object</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/commune">Commune</Link>, <Link to="/spell/true_seeing">true seeing</Link></td>
<td><Link to="/spell/divination">Divination</Link>, <Link to="/spell/locate_creature">locate creature</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/contact_other_plane">Contact other plane</Link>, <Link to="/spell/vision">vision</Link></td>
<td><Link to="/spell/find_the_path">Find the path</Link>, <Link to="/spell/legend_lore">legend lore</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/foresight">Foresight</Link>, <Link to="/spell/prediction_of_failure">prediction of failure</Link></td>
<td><Link to="/spell/discern_location">Discern location</Link>, <Link to="/spell/moment_of_prescience">moment of prescience</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains two Knowledge skills of your choice as additional master skills.</p>
<h3 id="rule-spell_lists_4-law-spell-list">Law Spell List</h3>
<ScrollContainer id="rule-spell_lists_4--table-6"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/command">Command</Link>, <Link to="/spell/protection_from_chaos">protection from chaos</Link></td>
<td><Link to="/spell/cause_fear">Cause fear</Link>, <Link to="/spell/stabilize">stabilize</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/dispel_magic">Dispel magic</Link>, <Link to="/spell/magic_circle_against_chaos">magic circle against chaos</Link></td>
<td><Link to="/spell/calm_emotions">Calm emotions</Link>, <Link to="/spell/enthrall">enthrall</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/dispel_chaos">Dispel chaos</Link>, <Link to="/spell/greater_command">greater command</Link></td>
<td><Link to="/spell/dimensional_anchor">Dimensional anchor</Link>, <Link to="/spell/orders_wrath">order's wrath</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/dictum">Dictum</Link>, <Link to="/spell/power_word_blind">power word blind</Link></td>
<td><Link to="/spell/banishment">Banishment</Link>, <Link to="/spell/hold_monster">hold monster</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/power_word_kill">Power word kill</Link>, <Link to="/spell/summon_monster_ix">summon monster IX (law only)</Link></td>
<td><Link to="/spell/shield_of_law">Shield of law</Link>, <Link to="/spell/power_word_stun">power word stun</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster's attacks count as lawful for the purpose of overcoming damage reduction.</p>
<h3 id="rule-spell_lists_4-liberation-spell-list">Liberation Spell List</h3>
<ScrollContainer id="rule-spell_lists_4--table-7"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/expeditious_retreat">Expeditious retreat</Link>, <Link to="/spell/remove_fear">remove fear</Link></td>
<td><Link to="/spell/feather_fall">Feather fall</Link>, <Link to="/spell/open_close">open/close</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/fly">Fly</Link>, <Link to="/spell/remove_curse">remove curse</Link></td>
<td><Link to="/spell/knock">Knock</Link>, <Link to="/spell/remove_paralysis">remove paralysis</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/break_enchantment">Break enchantment</Link>, <Link to="/spell/overland_flight">overland flight</Link></td>
<td><Link to="/spell/freedom_of_movement">Freedom of movement</Link>, <Link to="/feat/extended">extended</Link> <Link to="/spell/haste">haste</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/ethereal_jaunt">Ethereal jaunt</Link>, <Link to="/spell/refuge">refuge</Link></td>
<td><Link to="/feat/quickened">Quickened</Link> <em>fly,</em> <Link to="/spell/greater_dispel_magic">greater dispel magic</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/freedom">Freedom</Link>, <Link to="/spell/wish">wish</Link></td>
<td>Quickened <em>freedom of movement,</em> <Link to="/spell/mind_blank">mind blank</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains Escape Artist as an additional master skill.</p>
<h3 id="rule-spell_lists_4-luck-spell-list">Luck Spell List</h3>
<ScrollContainer id="rule-spell_lists_4--table-8"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/entropic_shield">Entropic shield</Link>, <Link to="/spell/true_strike">true strike</Link></td>
<td><Link to="/spell/daze">Daze</Link>, <Link to="/spell/feather_fall">feather fall</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/dispel_magic">Dispel magic</Link>, <Link to="/spell/prayer">prayer</Link></td>
<td><Link to="/spell/aid">Aid</Link>, <Link to="/spell/protection_from_energy">protection from energy</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/bestow_curse">Bestow curse</Link>, <Link to="/spell/break_enchantment">break enchantment</Link></td>
<td><Link to="/spell/freedom_of_movement">Freedom of movement</Link>, <Link to="/spell/serenity">serenity</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/feat/quickened">Quickened</Link> <em>dispel magic,</em> <Link to="/spell/spell_turning">spell turning</Link></td>
<td><Link to="/spell/dismissal">Dismissal</Link>, <Link to="/spell/mislead">mislead</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/foresight">Foresight</Link>, <Link to="/spell/miracle">miracle</Link></td>
<td><Link to="/spell/antimagic_field">Antimagic field</Link>, <Link to="/spell/moment_of_prescience">moment of prescience</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Increase all the monster's saving throw bonuses by 1.</p>
<h3 id="rule-spell_lists_4-madness-spell-list">Madness Spell List</h3>
<ScrollContainer id="rule-spell_lists_4--table-9"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/cause_fear">Cause fear</Link>, <Link to="/spell/confusion_lesser">confusion, lesser</Link></td>
<td><Link to="/spell/daze">Daze</Link>, <Link to="/spell/touch_of_fatigue">touch of fatigue</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/major_image">Major image</Link>, <Link to="/spell/rage">rage</Link></td>
<td><Link to="/spell/hideous_laughter">Hideous laughter</Link>, <Link to="/spell/touch_of_idiocy">touch of idiocy</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/nightmare">Nightmare</Link>, <Link to="/spell/phantasmal_killer">phantasmal killer</Link></td>
<td><Link to="/spell/confusion">Confusion</Link>, <Link to="/spell/crushing_despair">crushing despair</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/insanity">Insanity</Link>, <Link to="/spell/mass_suggestion">mass suggestion</Link></td>
<td><Link to="/spell/feeblemind">Feeblemind</Link>, <Link to="/spell/mind_fog">mind fog</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/dominate_monster">Dominate monster</Link>, <Link to="/spell/weird">weird</Link></td>
<td><Link to="/spell/irresistible_dance">Irresistible dance</Link>, <Link to="/spell/scintillating_pattern">scintillating pattern</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains a +2 bonus on saving throws against mind-affecting effects.</p>
</>};
const _spell_lists_5 = {title: "Magic through Sonic", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_6_spells","spell_lists"], siblings: ["spell_lists_1","spell_lists_2","spell_lists_3","spell_lists_4","spell_lists_5","spell_lists_6"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 218</Link></p>
<h3 id="rule-spell_lists_5-magic-spell-list">Magic Spell List</h3>
<ScrollContainer id="rule-spell_lists_5--table-0"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/magic_missile">Magic missile</Link>, <Link to="/spell/silent_image">silent image</Link></td>
<td><Link to="/spell/detect_magic">Detect magic</Link>, <Link to="/spell/read_magic">read magic</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/dispel_magic">Dispel magic</Link>, <Link to="/spell/hold_person">hold person</Link></td>
<td><Link to="/spell/invisibility">Invisibility</Link>, <Link to="/spell/scorching_ray">scorching ray</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/spell_resistance">Spell resistance</Link>, <Link to="/spell/teleport">teleport</Link></td>
<td><Link to="/spell/imbue_with_spell_ability">Imbue with spell ability</Link>, <Link to="/spell/lesser_globe_of_invulnerability">lesser globe of invulnerability</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/mages_sword">Mage's sword</Link>, <Link to="/spell/spell_turning">spell turning</Link></td>
<td><Link to="/spell/antimagic_field">Antimagic field</Link>, <Link to="/spell/forceful_hand">forceful hand</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/mages_disjunction">Mage's disjunction</Link>, <Link to="/spell/time_stop">time stop</Link></td>
<td><Link to="/spell/clenched_fist">Clenched fist</Link>, <Link to="/spell/protection_from_spells">protection from spells</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains a +2 bonus on caster level checks made to overcome spell resistance.</p>
<h3 id="rule-spell_lists_5-metal-spell-list">Metal Spell List</h3>
<ScrollContainer id="rule-spell_lists_5--table-1"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/lead_blades">Lead blades</Link>, <Link to="/spell/shocking_grasp">shocking grasp</Link></td>
<td><Link to="/spell/disguise_weapon">Disguise weapon</Link>, <Link to="/spell/magic_weapon">magic weapon</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/heat_metal">Heat metal</Link>, <Link to="/spell/molten_orb">molten orb</Link></td>
<td><Link to="/spell/chill_metal">Chill metal</Link>, <Link to="/spell/pellet_blast">pellet blast</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/rusting_grasp">Rusting grasp</Link>, <Link to="/spell/major_creation">major creation</Link></td>
<td><Link to="/spell/heart_of_the_metal">Heart of the metal</Link>, <Link to="/spell/wreath_of_blades">wreath of blades</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/transmute_metal_to_wood">Transmute metal to wood</Link>, <Link to="/spell/wall_of_iron">wall of iron</Link></td>
<td><Link to="/spell/chain_lightning">Chain lightning</Link>, <Link to="/spell/instant_summons">instant summons</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/iron_body">Iron body</Link>, <Link to="/spell/repel_metal_or_stone">repel metal or stone</Link></td>
<td><Link to="/spell/mages_disjunction">Mage's disjunction</Link>, <Link to="/spell/polymorph_any_object">polymorph any object</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster increases one of its speeds by 10 feet.</p>
<h3 id="rule-spell_lists_5-nature-spell-list">Nature Spell List</h3>
<ScrollContainer id="rule-spell_lists_5--table-2"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td>Entangle, shillelagh</td>
<td><Link to="/spell/charm_animal">Charm animal</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/call_lightning">Call lightning</Link>, <Link to="/spell/sleet_storm">sleet storm</Link></td>
<td><Link to="/spell/flame_blade">Flame blade</Link>, <Link to="/spell/heat_metal">heat metal</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/call_lightning_storm">Call lightning storm</Link>, <Link to="/spell/wall_of_thorns">wall of thorns</Link></td>
<td><Link to="/spell/flame_strike">Flame strike</Link>, <Link to="/spell/ice_storm">ice storm</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/antilife_shell">Antilife shell</Link>, <Link to="/spell/control_weather">control weather</Link></td>
<td><Link to="/spell/fire_seeds">Fire seeds</Link>, <Link to="/spell/wall_of_stone">wall of stone</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/shambler">Shambler</Link>, <Link to="/spell/summon_natures_ally_ix">summon nature's ally IX</Link></td>
<td><Link to="/spell/earthquake">Earthquake</Link>, <Link to="/spell/finger_of_death">finger of death</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster ignores difficult terrain caused by nonmagical natural terrain.</p>
<h3 id="rule-spell_lists_5-necromancy-spell-list">Necromancy Spell List</h3>
<ScrollContainer id="rule-spell_lists_5--table-3"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/chill_touch">Chill touch</Link>, <Link to="/spell/ray_of_enfeeblement">ray of enfeeblement</Link></td>
<td><Link to="/spell/bleed">Bleed</Link>, <Link to="/spell/touch_of_fatigue">touch of fatigue</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/ray_of_exhaustion">Ray of exhaustion</Link>, <Link to="/spell/vampiric_touch">vampiric touch</Link></td>
<td><Link to="/spell/blindness_deafness">Blindness/deafness</Link>, <Link to="/spell/scare">scare</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/animate_dead">Animate dead</Link>, <Link to="/spell/bestow_curse">bestow curse</Link></td>
<td><Link to="/spell/contagion">Contagion</Link>, <Link to="/spell/enervation">enervation</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/finger_of_death">Finger of death</Link>, <Link to="/spell/waves_of_exhaustion">waves of exhaustion</Link></td>
<td><Link to="/spell/circle_of_death">Circle of death</Link>, <Link to="/spell/eyebite">eyebite</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/energy_drain">Energy drain</Link>, <Link to="/spell/wail_of_the_banshee">wail of the banshee</Link></td>
<td><Link to="/feat/quickened">Quickened</Link> <em>enervation,</em> <Link to="/spell/horrid_wilting">horrid wilting</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains the channel energy option (negative energy only).</p>
<h3 id="rule-spell_lists_5-nobility-spell-list">Nobility Spell List</h3>
<ScrollContainer id="rule-spell_lists_5--table-4"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/bless">Bless</Link>, <Link to="/spell/command">command</Link></td>
<td><Link to="/spell/bane">Bane</Link>, <Link to="/spell/sanctuary">sanctuary</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/bestow_curse">Bestow curse</Link>, <Link to="/spell/summon_monster_iii">summon monster III</Link></td>
<td><Link to="/spell/enthrall">Enthrall</Link>, <Link to="/spell/shield_other">shield other</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/greater_command">Greater command</Link>, <Link to="/spell/summon_monster_v">summon monster V</Link></td>
<td><Link to="/spell/discern_lies">Discern lies</Link>, <Link to="/spell/freedom_of_movement">freedom of movement</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/repulsion">Repulsion</Link>, <Link to="/spell/summon_monster_vii">summon monster VII</Link></td>
<td><Link to="/spell/geas_quest">Geas/quest</Link>, <Link to="/spell/word_of_recall">word of recall</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/overwhelming_presence">Overwhelming presence</Link>, <Link to="/spell/storm_of_vengeance">storm of vengeance</Link></td>
<td><Link to="/spell/demand">Demand</Link>, <Link to="/spell/mass_cure_critical_wounds">mass cure critical wounds</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains Diplomacy or Sense Motive as an additional master skill.</p>
<h3 id="rule-spell_lists_5-plant-spell-list">Plant Spell List</h3>
<ScrollContainer id="rule-spell_lists_5--table-5"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/entangle">Entangle</Link>, <Link to="/spell/summon_natures_ally_i">summon nature's ally I (plant only)</Link></td>
<td><Link to="/spell/goodberry">Goodberry</Link>, <Link to="/spell/pass_without_trace">pass without trace</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/plant_growth">Plant growth</Link>, <Link to="/spell/spike_growth">spike growth</Link></td>
<td><Link to="/spell/tree_shape">Tree shape</Link>, <Link to="/spell/warp_wood">warp wood</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/tree_stride">Tree stride</Link>, <Link to="/spell/wall_of_thorns">wall of thorns</Link></td>
<td><Link to="/spell/command_plants">Command plants</Link>, <Link to="/spell/summon_natures_ally_iv">summon nature's ally IV</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/animate_plants">Animate plants</Link>, <Link to="/spell/changestaff">changestaff</Link></td>
<td><Link to="/spell/fire_seeds">Fire seeds</Link>, <Link to="/spell/repel_wood">repel wood</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/feat/maximized">Maximized</Link> <em>fire seeds,</em> <Link to="/spell/shambler">shambler</Link></td>
<td><Link to="/spell/control_plants">Control plants</Link>, <Link to="/spell/summon_natures_ally_viii">summon nature's ally VIII</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster ignores difficult terrain caused by nonmagical natural terrain.</p>
<h3 id="rule-spell_lists_5-protection-spell-list">Protection Spell List</h3>
<ScrollContainer id="rule-spell_lists_5--table-6"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/hold_portal">Hold portal</Link>, <Link to="/spell/sanctuary">sanctuary</Link></td>
<td><Link to="/spell/alarm">Alarm</Link>, <Link to="/spell/resistance">resistance</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/dispel_magic">Dispel magic</Link>, <Link to="/spell/protection_from_energy">protection from energy</Link></td>
<td><Link to="/spell/resist_energy">Resist energy</Link>, <Link to="/spell/shield_other">shield other</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/dismissal">Dismissal</Link>, <Link to="/spell/spell_resistance">spell resistance</Link></td>
<td><Link to="/spell/dimensional_anchor">Dimensional anchor</Link>, <Link to="/spell/spell_immunity">spell immunity</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/globe_of_invulnerability">Globe of invulnerability</Link>, <Link to="/spell/repulsion">repulsion</Link></td>
<td><Link to="/spell/antimagic_field">Antimagic field</Link>, <Link to="/spell/greater_dispel_magic">greater dispel magic</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/prismatic_sphere">Prismatic sphere</Link>, <Link to="/spell/wall_of_suppression">wall of suppression</Link></td>
<td><Link to="/spell/mind_blank">Mind blank</Link>, <Link to="/spell/prismatic_wall">prismatic wall</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Increase all the monster's saving throw bonuses by 1.</p>
<h3 id="rule-spell_lists_5-repose-spell-list">Repose Spell List</h3>
<ScrollContainer id="rule-spell_lists_5--table-7"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/deathwatch">Deathwatch</Link>, <Link to="/spell/ray_of_enfeeblement">ray of enfeeblement</Link></td>
<td><Link to="/spell/cause_fear">Cause fear</Link>, <Link to="/spell/chill_touch">chill touch</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/false_life">False life</Link>, <Link to="/spell/scare">scare</Link></td>
<td><Link to="/spell/gentle_repose">Gentle repose</Link>, <Link to="/spell/speak_with_dead">speak with dead</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/death_ward">Death ward</Link>, <Link to="/spell/slay_living">slay living</Link></td>
<td><Link to="/spell/enervation">Enervation</Link>, <Link to="/spell/fear">fear</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/circle_of_death">Circle of death</Link>, <Link to="/spell/destruction">destruction</Link></td>
<td><Link to="/spell/undeath_to_death">Undeath to death</Link>, <Link to="/spell/waves_of_fatigue">waves of fatigue</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/power_word_kill">Power word kill</Link>, <Link to="/spell/wail_of_the_banshee">wail of the banshee</Link></td>
<td><Link to="/spell/finger_of_death">Finger of death</Link>, <Link to="/spell/waves_of_exhaustion">waves of exhaustion</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains a +4 bonus on saving throws against death spells and effects.</p>
<h3 id="rule-spell_lists_5-rune-spell-list">Rune Spell List</h3>
<ScrollContainer id="rule-spell_lists_5--table-8"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/alarm">Alarm</Link>, <Link to="/spell/erase">erase</Link></td>
<td><Link to="/spell/arcane_mark">Arcane mark</Link>, <Link to="/spell/magic_circle_against_chaos_evil_good_law">magic circle against chaos/evil/good/law</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/arcane_lock">Arcane lock</Link>, <Link to="/spell/glyph_of_warding">glyph of warding</Link></td>
<td><Link to="/spell/dispel_magic">Dispel magic</Link>, <Link to="/spell/symbol_of_mirroring">symbol of mirroring</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/lesser_planar_binding">Lesser planar binding</Link>, <Link to="/spell/symbol_of_pain">symbol of pain</Link></td>
<td><Link to="/spell/explosive_runes">Explosive runes</Link>, <Link to="/spell/symbol_of_slowing">symbol of slowing</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/symbol_of_stunning">Symbol of stunning</Link>, <Link to="/spell/symbol_of_weakness">symbol of weakness</Link></td>
<td><Link to="/spell/glyph_of_warding_greater">glyph of warding, greater</Link>, <Link to="/spell/symbol_of_fear">symbol of fear</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/symbol_of_strife">Symbol of strife</Link>, <Link to="/spell/symbol_of_vulnerability">symbol of vulnerability</Link></td>
<td><Link to="/spell/symbol_of_death">Symbol of death</Link>, <Link to="/spell/symbol_of_insanity">symbol of insanity</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Choose one energy type. The monster gains resistance 5 to that type of damage. At CR 12, increase the resistance to 10. At CR 16, increase the resistance to 20.</p>
<h3 id="rule-spell_lists_5-sonic-spell-list">Sonic Spell List</h3>
<ScrollContainer id="rule-spell_lists_5--table-9"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/command">Command</Link>, <Link to="/spell/ear_piercing_scream">ear-piercing scream</Link></td>
<td><Link to="/spell/ghost_sound">Ghost sound</Link>, <Link to="/spell/message">message</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/enthrall">Enthrall</Link>, <Link to="/spell/silence">silence</Link></td>
<td><Link to="/spell/shatter">Shatter</Link>, <Link to="/spell/sound_burst">sound burst</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/song_of_discord">Song of discord</Link>, <Link to="/spell/zone_of_silence">zone of silence</Link></td>
<td><Link to="/spell/shout">Shout</Link>, <Link to="/feat/empowered">empowered</Link> <em>sound burst</em></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/feat/maximized">Maximized</Link> <em>shout,</em> <Link to="/feat/quickened">quickened</Link> <em>silence</em></td>
<td><Link to="/spell/greater_shout">Greater shout</Link>, <Link to="/spell/sympathetic_vibration">sympathetic vibration</Link></td>
</tr>
<tr>
<td>16+</td>
<td>Maximized <em>greater shout,</em> <Link to="/spell/power_word_kill">power word kill</Link></td>
<td><Link to="/spell/power_word_stun">Power word stun</Link>, quickened <em>shout</em></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains sonic resistance 5. At CR 12, increase the resistance to 10. At CR 16, the monster gains sonic immunity.</p>
</>};
const _spell_lists_6 = {title: "Strength through Weather", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_6_spells","spell_lists"], siblings: ["spell_lists_1","spell_lists_2","spell_lists_3","spell_lists_4","spell_lists_5","spell_lists_6"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 218</Link></p>
<h3 id="rule-spell_lists_6-stealth-spell-list">Stealth Spell List</h3>
<ScrollContainer id="rule-spell_lists_6--table-0"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/disguise_self">Disguise self</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link></td>
<td><Link to="/spell/flare">Flare</Link>, <Link to="/spell/silent_image">silent image</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/displacement">Displacement</Link>, <Link to="/spell/nondetection">nondetection</Link></td>
<td><Link to="/spell/darkness">Darkness</Link>, <Link to="/spell/invisibility">invisibility</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/mages_private_sanctum">Mage's private sanctum</Link>, <Link to="/spell/seeming">seeming</Link></td>
<td><Link to="/spell/dimension_door">Dimension door</Link>, <Link to="/spell/greater_invisibility">greater invisibility</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/sequester">Sequester</Link>, <Link to="/spell/shadow_walk">shadow walk</Link></td>
<td><Link to="/spell/greater_teleport">Greater teleport</Link>, <Link to="/spell/mislead">mislead</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/screen">Screen</Link>, <Link to="/spell/time_stop">time stop</Link></td>
<td><Link to="/feat/extended">Extended</Link> <Link to="/feat/widened">widened</Link> <Link to="/spell/deeper_darkness">deeper darkness</Link>, <Link to="/feat/quickened">quickened</Link> <em>greater invisibility</em></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains Stealth as an additional master skill.</p>
<h3 id="rule-spell_lists_6-strength-spell-list">Strength Spell List</h3>
<ScrollContainer id="rule-spell_lists_6--table-1"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/enlarge_person">Enlarge person</Link>, <Link to="/spell/gust_of_wind">gust of wind</Link></td>
<td><Link to="/spell/cure_light_wounds">Cure light wounds</Link>, <Link to="/spell/resistance">resistance</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/haste">Haste</Link>, <Link to="/spell/hold_person">hold person</Link></td>
<td><Link to="/spell/rage">Rage</Link>, <Link to="/spell/weapon_of_awe">weapon of awe</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/interposing_hand">Interposing hand</Link>, <Link to="/spell/telekinesis">telekinesis</Link></td>
<td><Link to="/spell/blessing_of_fervor">Blessing of fervor</Link>, <Link to="/spell/spell_immunity">spell immunity</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/destruction">Destruction</Link>, <Link to="/spell/grasping_hand">grasping hand</Link></td>
<td><Link to="/spell/forceful_hand">Forceful hand</Link>, <Link to="/spell/stoneskin">stoneskin</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/crushing_hand">Crushing hand</Link>, <Link to="/spell/implosion">implosion</Link></td>
<td><Link to="/spell/clenched_fist">Clenched fist</Link>, <Link to="/spell/earthquake">earthquake</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Increase the monster's Strength modifier by 1. At CR 12, increase it by 2 instead. At CR 16, increase it by 3 instead.</p>
<h3 id="rule-spell_lists_6-sun-spell-list">Sun Spell List</h3>
<ScrollContainer id="rule-spell_lists_6--table-2"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/burning_hands">Burning hands</Link>, <Link to="/spell/endure_elements">endure elements</Link></td>
<td><Link to="/spell/flare">Flare</Link>, <Link to="/spell/light">light</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/daylight">Daylight</Link>, <Link to="/spell/searing_light">searing light</Link></td>
<td><Link to="/spell/heat_metal">Heat metal</Link>, <Link to="/spell/scorching_ray">scorching ray</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/flame_strike">Flame strike</Link>, <Link to="/feat/empowered">empowered</Link> <em>searing light</em></td>
<td><Link to="/spell/fire_shield">Fire shield</Link>, <Link to="/spell/flame_arrow">flame arrow</Link></td>
</tr>
<tr>
<td>12-15</td>
<td>Empowered <em>flame strike,</em> <Link to="/spell/sunbeam">sunbeam</Link></td>
<td><Link to="/spell/fire_seeds">Fire seeds</Link>, <Link to="/feat/maximized">maximized</Link> <Link to="/spell/fireball">fireball</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/meteor_swarm">Meteor swarm</Link>, <Link to="/spell/prismatic_sphere">prismatic sphere</Link></td>
<td><Link to="/spell/fire_storm">Fire storm</Link>, <Link to="/spell/sunburst">sunburst</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Increase the saving throw DC of any spell the monster casts from this spell list by 1.</p>
<h3 id="rule-spell_lists_6-transmutation-spell-list">Transmutation Spell List</h3>
<ScrollContainer id="rule-spell_lists_6--table-3"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/enlarge_person">Enlarge person</Link>, <Link to="/spell/expeditious_retreat">expeditious retreat</Link></td>
<td><Link to="/spell/animate_rope">Animate rope</Link>, <Link to="/spell/reduce_person">reduce person</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/haste">Haste</Link>, <Link to="/spell/slow">slow</Link></td>
<td><Link to="/spell/alter_self">Alter self</Link>, <Link to="/spell/levitate">levitate</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/baleful_polymorph">Baleful polymorph</Link>, <Link to="/spell/polymorph">polymorph</Link></td>
<td><Link to="/spell/beast_shape_ii">Beast shape II</Link>, <Link to="/spell/mass_reduce_person">mass reduce person</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/giant_form_i">Giant form I</Link>, <Link to="/spell/greater_polymorph">greater polymorph</Link></td>
<td><Link to="/spell/disintegrate">Disintegrate</Link>, <Link to="/spell/flesh_to_stone">flesh to stone</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/form_of_the_dragon_iii">Form of the dragon III</Link>, <Link to="/spell/shapechange">shapechange</Link></td>
<td><Link to="/spell/iron_body">Iron body</Link>, <Link to="/spell/polymorph_any_object">polymorph any object</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Increase any one of the monster's physical ability score modifiers by 1. At CR 12, increase that modifier by 2 instead.</p>
<h3 id="rule-spell_lists_6-travel-spell-list">Travel Spell List</h3>
<ScrollContainer id="rule-spell_lists_6--table-4"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/jump">Jump</Link>, <Link to="/spell/longstrider">longstrider</Link></td>
<td><Link to="/spell/expeditious_retreat">Expeditious retreat</Link>, <Link to="/spell/open_close">open/close</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/fly">Fly</Link>, <Link to="/spell/gaseous_form">gaseous form</Link></td>
<td><Link to="/spell/knock">Knock</Link>, <Link to="/spell/levitate">levitate</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/overland_flight">Overland flight</Link>, <Link to="/spell/teleport">teleport</Link></td>
<td><Link to="/spell/dimension_door">Dimension door</Link>, <Link to="/spell/freedom_of_movement">freedom of movement</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/greater_teleport">Greater teleport</Link>, <Link to="/spell/plane_shift">plane shift</Link></td>
<td><Link to="/spell/find_the_path">Find the path</Link>, <Link to="/spell/shadow_walk">shadow walk</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/astral_projection">Astral projection</Link>, <Link to="/spell/gate">gate</Link></td>
<td><Link to="/spell/ethereal_jaunt">Ethereal jaunt</Link>, <Link to="/spell/phase_door">phase door</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Increase the monster's movement speed by 10 feet.</p>
<h3 id="rule-spell_lists_6-trickery-spell-list">Trickery Spell List</h3>
<ScrollContainer id="rule-spell_lists_6--table-5"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td>Disguise self, lesser confusion</td>
<td>Ghost sound, mage hand</td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/gaseous_form">Gaseous form</Link>, <Link to="/spell/nondetection">nondetection</Link></td>
<td><Link to="/spell/invisibility">Invisibility</Link>, <Link to="/spell/minor_image">minor image</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/greater_invisibility">Greater invisibility</Link>, <Link to="/spell/mind_fog">mind fog</Link></td>
<td><Link to="/spell/confusion">Confusion</Link>, <Link to="/spell/dimension_door">dimension door</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/mass_hold_person">Mass hold person</Link>, <Link to="/spell/veil">veil</Link></td>
<td><Link to="/spell/mass_suggestion">Mass suggestion</Link>, <Link to="/spell/mislead">mislead</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/foresight">Foresight</Link>, <Link to="/spell/time_stop">time stop</Link></td>
<td><Link to="/spell/mass_charm_monster">Mass charm monster</Link>, <Link to="/spell/mass_invisibility">mass invisibility</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains Bluff or Stealth as an additional master skill.</p>
<h3 id="rule-spell_lists_6-undead-spell-list">Undead Spell List</h3>
<ScrollContainer id="rule-spell_lists_6--table-6"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/chill_touch">Chill touch</Link>, <Link to="/spell/ray_of_enfeeblement">ray of enfeeblement</Link></td>
<td><Link to="/spell/bleed">Bleed</Link>, <Link to="/spell/touch_of_fatigue">touch of fatigue</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/animate_dead">Animate dead</Link>, <Link to="/spell/vampiric_touch">vampiric touch</Link></td>
<td><Link to="/spell/command_undead">Command undead</Link>, <Link to="/spell/ghoul_touch">ghoul touch</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/magic_jar">Magic jar</Link>, <Link to="/feat/quickened">quickened</Link> <em>ray of enfeeblement</em></td>
<td><Link to="/spell/enervation">Enervation</Link>, <Link to="/spell/waves_of_fatigue">waves of fatigue</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/control_undead">Control undead</Link>, <Link to="/spell/create_undead">create undead</Link></td>
<td><Link to="/spell/circle_of_death">Circle of death</Link>, <Link to="/feat/maximized">maximized</Link> <em>vampiric touch</em></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/create_greater_undead">Create greater undead</Link>, <Link to="/spell/energy_drain">energy drain</Link></td>
<td><Link to="/spell/horrid_wilting">Horrid wilting</Link>, <Link to="/spell/wail_of_the_banshee">wail of the banshee</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains DR 5/- against nonlethal damage. At CR 8, the DR increases to 10/-.</p>
<h3 id="rule-spell_lists_6-war-spell-list">War Spell List</h3>
<ScrollContainer id="rule-spell_lists_6--table-7"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/cause_fear">Cause fear</Link>, <Link to="/spell/true_strike">true strike</Link></td>
<td><Link to="/spell/magic_weapon">Magic weapon</Link>, <Link to="/spell/resistance">resistance</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/prayer">Prayer</Link>, <Link to="/spell/searing_light">searing light</Link></td>
<td><Link to="/spell/grace">Grace</Link>, <Link to="/spell/spiritual_weapon">spiritual weapon</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/flame_strike">Flame strike</Link>, <Link to="/spell/slay_living">slay living</Link></td>
<td><Link to="/spell/blessing_of_fervor">Blessing of fervor</Link>, <Link to="/spell/spiritual_ally">spiritual ally</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/destruction">Destruction</Link>, <Link to="/spell/power_word_blind">power word blind</Link></td>
<td><Link to="/spell/blade_barrier">Blade barrier</Link>, <Link to="/spell/harm">harm</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/implosion">Implosion</Link>, <Link to="/spell/power_word_kill">power word kill</Link></td>
<td><Link to="/spell/earthquake">Earthquake</Link>, <Link to="/spell/power_word_stun">power word stun</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> Increase the monster's attack bonus for all attacks by 1.</p>
<h3 id="rule-spell_lists_6-water-spell-list">Water Spell List</h3>
<ScrollContainer id="rule-spell_lists_6--table-8"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/hydraulic_push">Hydraulic push</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link></td>
<td><Link to="/spell/ray_of_frost">Ray of frost</Link>, <Link to="/spell/touch_of_the_sea">touch of the sea</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/gaseous_form">Gaseous form</Link>, <Link to="/spell/stinking_cloud">stinking cloud</Link></td>
<td><Link to="/spell/chill_metal">Chill metal</Link>, <Link to="/spell/fog_cloud">fog cloud</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/cone_of_cold">Cone of cold</Link>, <Link to="/spell/wall_of_ice">wall of ice</Link></td>
<td><Link to="/spell/ice_storm">Ice storm</Link>, <Link to="/spell/solid_fog">solid fog</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/control_water">Control water</Link>, <Link to="/spell/elemental_body_iv">elemental body IV (water only)</Link></td>
<td><Link to="/spell/fluid_form">Fluid form</Link>, <Link to="/spell/freezing_sphere">freezing sphere</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/elemental_swarm">Elemental swarm (water only)</Link>, <Link to="/spell/storm_of_vengeance">storm of vengeance</Link></td>
<td><Link to="/spell/horrid_wilting">Horrid wilting</Link>, <Link to="/spell/summon_natures_ally_viii">summon nature's ally VIII</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains cold resistance 5. At CR 12, increase the resistance to 10. At CR 16, the monster gains cold immunity.</p>
<h3 id="rule-spell_lists_6-weather-spell-list">Weather Spell List</h3>
<ScrollContainer id="rule-spell_lists_6--table-9"><table>
<thead>
<tr>
<th>CR Band</th>
<th>Primary Spells</th>
<th>Secondary Spells</th>
</tr>
</thead>
<tbody><tr>
<td>0-3</td>
<td><Link to="/spell/obscuring_mist">Obscuring mist</Link>, <Link to="/spell/summon_natures_ally_i">summon nature's ally I</Link></td>
<td><Link to="/spell/faerie_fire">Faerie fire</Link>, <Link to="/spell/shocking_grasp">shocking grasp</Link></td>
</tr>
<tr>
<td>4-7</td>
<td><Link to="/spell/call_lightning">Call lightning</Link>, <Link to="/spell/wind_wall">wind wall</Link></td>
<td><Link to="/spell/gust_of_wind">Gust of wind</Link>, <Link to="/spell/sound_burst">sound burst</Link></td>
</tr>
<tr>
<td>8-11</td>
<td><Link to="/spell/call_lightning_storm">Call lightning storm</Link>, <Link to="/spell/ice_storm">ice storm</Link></td>
<td><Link to="/spell/air_walk">Air walk</Link>, <Link to="/spell/sleet_storm">sleet storm</Link></td>
</tr>
<tr>
<td>12-15</td>
<td><Link to="/spell/control_weather">Control weather</Link>, <Link to="/spell/wind_walk">wind walk</Link></td>
<td><Link to="/spell/control_winds">Control winds</Link>, <Link to="/feat/quickened">quickened</Link> <Link to="/spell/lightning_bolt">lightning bolt</Link></td>
</tr>
<tr>
<td>16+</td>
<td><Link to="/spell/storm_of_vengeance">Storm of vengeance</Link>, <Link to="/spell/summon_natures_ally_ix">summon nature's ally IX</Link></td>
<td><Link to="/spell/fire_storm">Fire storm</Link>, <Link to="/spell/whirlwind">whirlwind</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Benefit:</strong> The monster gains electricity resistance 5. At CR 12, increase the resistance to 10. At CR 16, the monster gains electricity immunity.</p>
</>};
const _step_7_monster_options = {title: "Step 7: Monster Options", parent_topics: ["advanced_gm_topics","simple_monster_creation"], siblings: ["step_1_array","step_2_creature_type_or_class_graft","step_3_subtype_graft","step_4_template_graft","step_5_size_graft","step_6_spells","step_7_monster_options","step_8_skills","step_9_damage","other_calculations","monster_creation_examples"], subtopics: ["choosing_monster_options","combat_options","magic_options","social_options","universal_options"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 228</Link></p>
<p>Options are the main way to specialize your monster. They represent feats, universal monster rules, magic items, and all the other abilities a monster has at its disposal beyond its statistics. There are a large number of monster options to choose from, especially compared to the number of choices you make during the other steps of the simple monster creation process. Some are active abilities (such as those that give the monster a special attack), others adjust statistics (such as the power attack option, which has the same purpose as the <Link to="/feat/power_attack">Power Attack</Link> feat), and still others grant conditional modifiers (such as combat casting's bonus to <Link to="/rule/concentration">concentration</Link> checks). Unless specified otherwise, saving throw DCs in this section use the Ability DC from the monster's array, modified by the monster's grafts.</p>
</>};
const _choosing_monster_options = {title: "Choosing Monster Options", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_7_monster_options"], siblings: ["choosing_monster_options","combat_options","magic_options","social_options","universal_options"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 228</Link></p>
<p>Look at the number of monster options you're supposed to choose based on the monster's array and grafts. You should have a list saying how many to pick of each category. When you pick an option, write down the option's name and effects. Adjust any statistics the option's entry tells you to. After you've selected all the monster options you're supposed to, look at the list carefully. Does the monster do everything it needs to do? Does it seem like it has too few or too many options? Using your best judgment, add or remove options as necessary.</p>
<p><strong className="hl">Categories:</strong> Monster options are divided into four categories: combat, magic, social, and universal.</p>
<p><em>Combat options</em> are the most numerous, and most monsters the PCs are meant to face in battle should have at least one combat option. These options are subdivided to make them easier to choose based on the monster's theme, though you can choose from any combat option subcategory. Decide whether the monster is primarily cunning, powerful, quick, or tough, and look in that subcategory first. These subcategories correspond roughly to physical ability scores-Strength, Dexterity, and Constitution, respectively. One additional category, monstrous, lists options that are rarely appropriate for monsters of PC races, such as energy drain or regeneration.</p>
<p><em>Magic options</em> benefit monsters that cast spells, and are typically useful only to those with the spellcaster array or the secondary magic universal monster option. They also include some options that mimic PC class features of a magical nature. These options are divided into the creature, offensive, support, and versatile subcategories.</p>
<p><em>Social options</em> give a monster advantages in interactions with other creatures. These are divided into the inspiration and miscellaneous subcategories. The inspiration subcategory includes mostly effects that bolster morale or cause fear.</p>
<p><em>Universal options</em> can be chosen as though they were listed in any category. This means you can use a combat, magic, social, or "any" option to take a universal option.</p>
<p><strong className="hl">"Any" Options:</strong> When a graft or array tells you to choose "any" option, you can take an option from the combat, magic, social, or universal category.</p>
<p><strong className="hl">Feats:</strong> If you're looking to replicate a certain feat, look for its name in Table 5-7. Note that many monster options use the same names as feats but have different mechanical effects. This is intentional. The power attack option adjusts the monster's statistics once, applying an effect similar to the <Link to="/feat/power_attack">Power Attack</Link> feat, but making it simpler to use rather than having you choose each time the monster attacks. In a case like this, if you prefer to have the added complexity and flexibility, you can use the feat's rules instead.</p>
<p><strong className="hl">Universal Monster Rules:</strong> As with feats, many of these options mimic but simplify universal monster rules. Other monster rules, such as senses, can be used as-is and aren't repeated in this section.</p>
<p><strong className="hl">Duplicate Options:</strong> Generally speaking, you can choose an ability more than once when it makes sense and is useful. For example, you might give a monster the extra attack option twice because it fights with two weapons, one of which is a <Link to="/magic-enh/speed">speed</Link> weapon. Use your best judgement to determine whether it's a good idea to do so.</p>
<p><strong className="hl">Damage:</strong> Many options say to use the high or low attack or damage value from the monster's array. Use the values from the high or low weapon attack and damage columns, not the natural attack values (even if the option is more like a natural attack thematically). You can choose to use a lower value if the ability would deal too much damage otherwise.</p>
<h3 id="rule-choosing_monster_options-universal-monster-rules">Universal Monster Rules</h3>
<p>Some options listed in this section grant a monster the use of a universal monster rule. Often these refer to the entry in the appropriate Bestiary volume, sometimes with notes on how to simplify the ability. When a universal monster rule is gained through this system, use the ability DC from the monster's array instead of calculating the DC by the formula listed in the rule's entry in the Bestiary.</p>
<p>If you want to give a particular universal monster rule to a monster, look for it in the lists below. Most universal monster rules that aren't appropriate for player races appear in the section of monstrous combat rules.</p>
<h4 id="rule-choosing_monster_options-simplified-rules">Simplified Rules</h4>
<p>The following universal monster rules have been recreated as options in this system, typically to simplify them or give concrete values for numbers that aren't defined in the original universal monster rule.</p>
<p>These rules are: <Link to="/umr/bleed">bleed</Link>, <Link to="/umr/blood_drain">blood drain</Link>, <Link to="/umr/breath_weapon">breath weapon</Link>, <Link to="/umr/channel_resistance">channel resistance</Link>, <Link to="/umr/constrict">constrict</Link>, <Link to="/umr/damage_reduction">damage reduction</Link>, <Link to="/umr/disease">disease</Link>, <Link to="/umr/distraction">distraction</Link>, <Link to="/umr/energy_drain">energy drain</Link>, <Link to="/umr/engulf">engulf</Link>, <Link to="/umr/fast_healing">fast healing</Link>, <Link to="/umr/frightful_presence">frightful presence</Link>, <Link to="/umr/immunity">immunity</Link>, <Link to="/umr/incorporeal">incorporeal</Link>, <Link to="/umr/natural_attacks">natural attacks</Link>, <Link to="/umr/poison">poison</Link>, <Link to="/umr/poisonous_blood">poisonous blood</Link>, <Link to="/umr/powerful_charge">powerful charge</Link>, <Link to="/umr/rake">rake</Link>, <Link to="/umr/regeneration">regeneration</Link>, <Link to="/umr/rend">rend</Link>, <Link to="/umr/rock_throwing">rock throwing</Link>, <Link to="/umr/sound_mimicry">sound mimicry</Link>, <Link to="/umr/spell_resistance">spell resistance</Link>, <Link to="/umr/stench">stench</Link>, <Link to="/umr/telepathy">telepathy</Link>, <Link to="/umr/trample">trample</Link>.</p>
<h4 id="rule-choosing_monster_options-substitutions">Substitutions</h4>
<p>Some universal monster rules are very similar to other combat options, but the combat options use a different name because they're meant to be easier to understand with a quick look. The following list describes these, and shows in parentheses the name of the monster option to use instead: <Link to="/rule/ability_damage_drain">ability drain</Link> (ability damage), <Link to="/umr/all_around_vision">all-around vision</Link> (unflankable), <Link to="/umr/blood_rage">blood rage</Link> (rage), <Link to="/umr/fear">fear</Link> (fear aura/fear attack), <Link to="/umr/grab">grab</Link> (improved combat maneuver), <Link to="/umr/natural_invisibility">natural invisibility</Link> (constant invisibility), <Link to="/umr/powerful_blows">powerful blows</Link> (power attack), <Link to="/umr/pull">pull</Link> (repositioning attack), <Link to="/umr/push">push</Link> (repositioning attack), <Link to="/umr/resistance">resistance</Link> (energy resistance), <Link to="/umr/rock_catching">rock catching</Link> (rock throwing), <Link to="/umr/spell_like_abilities">spell-like abilities</Link> (either the spellcaster array or the secondary magic universal option), <Link to="/umr/summon">summon</Link> (summon allies).</p>
<h4 id="rule-choosing_monster_options-unmodified-rules">Unmodified Rules</h4>
<p>Most universal monster rules not mentioned herein can be used as written. Unless they have a major effect on the monster's combat abilities, it's not worth counting them against the suggested number of options the monster can take. Senses, for example, are not covered in this section, and can be used as-is without costing the monster any options. Assume that weaknesses (such as <Link to="/umr/light_blindness">light blindness</Link> or vulnerabilities) also fall into this category and can be used unmodified.</p>
<p>Other universal rules that can be used without modification, but which should be counted against the monster's number of options are <Link to="/umr/attach">attach</Link>, <Link to="/umr/burn">burn</Link>, <Link to="/umr/capsize">capsize</Link>, <Link to="/umr/change_shape">change shape</Link>, <Link to="/umr/curse_of_lycanthropy">curse of lycanthropy</Link>, <Link to="/umr/fast_swallow">fast swallow</Link>, <Link to="/umr/ferocity">ferocity</Link>, <Link to="/umr/fortification">fortification</Link>, <Link to="/umr/gaze">gaze</Link>, <Link to="/umr/pounce">pounce</Link>, <Link to="/umr/web">web</Link> (using the monster's CR as its Hit Dice to determine the web's hit points), <Link to="/umr/whirlwind">whirlwind</Link>.</p>
</>};
const _combat_options = {title: "Combat Options", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_7_monster_options"], siblings: ["choosing_monster_options","combat_options","magic_options","social_options","universal_options"], subtopics: ["cunning","monstrous","powerful","quick","tough"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 228</Link></p>
<p>Though these options are geared primarily toward combatants, consider giving every monster at least one combat option, unless you intend the monster to never fight in any battle.</p>
</>};
const _cunning = {title: "Cunning", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_7_monster_options","combat_options"], siblings: ["cunning","monstrous","powerful","quick","tough"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 228</Link></p>
<p>Thematically, monsters with higher mental ability modifiers are the most likely to have cunning combat options.</p>
<p><strong className="hl">Ability Damage:</strong> Attacks by this monster deal 1d2 points of damage to one ability score. This can apply to all the monster's attacks, apply only to its weapons, or function as a melee touch attack. This damage increases to 1d4 at CR 5, 1d6 at CR 10, 1d8 at CR 15, and 2d6 at CR 20. Alternatively, the attack can deal damage to two ability scores, but uses the damage value for a creature 5 CR lower. The attack could instead deal ability drain (rather than ability damage), but uses the damage value for a creature 5 CR lower.</p>
<p><strong className="hl">Blind-Fight:</strong> The monster rolls miss chances due to <Link to="/rule/concealment">concealment</Link> twice and takes the higher result.</p>
<p><strong className="hl">Bombs:</strong> As a standard action, the monster creates a bomb and throws it with a range of 20 feet. Use the <Link to="/rule/throw_splash_weapon">throw splash weapon</Link> special attack. On a direct hit, the bomb deals fire damage equal to the monster's low weapon damage, using 3d6 damage dice. Splash damage is 6 + 1/2 the monster's CR.</p>
<p><strong className="hl">Challenge:</strong> Once per day as a swift action, the monster can challenge one target within sight. The monster gains a bonus on melee damage rolls equal to its CR (minimum 1) against that creature, but takes a -2 penalty to AC against attacks made by creatures other than the target. The target remains challenged until it is killed, falls unconscious, or the combat ends. The monster can use this ability three times per day at CR 5, and at will at CR 14.</p>
<p><strong className="hl">Combatant's Touch:</strong> As a standard action, the monster can touch a creature to grant that creature a bonus equal to 1 + 1/2 the monster's CR on melee attack rolls. Additionally, choose one physical ability modifier. This bonus applies on combat maneuver checks, skill checks, and ability checks that use that ability modifier.</p>
<p><strong className="hl">Constant Invisibility:</strong> Because of its natural appearance or an exterior effect, such as a cloak of invisibility, this monster is invisible at all times. If this ability is used below CR 10, it should be for monsters that aren't focused on combat.</p>
<p><strong className="hl">Fast Feint:</strong> The monster can attempt a Bluff check to feint as a move action.</p>
<p><strong className="hl">Favored Enemy:</strong> Choose a creature type, or a single subtype of humanoid or outsider. The monster gains a +2 bonus on attack and damage rolls against creatures of that type. Increase the bonus and number of creature types chosen based on the monster's CR: +4 and two types at CR 4, +6 and three types at CR 9, +8 and four types at CR 14, and +10 and five types at CR 19.</p>
<p><strong className="hl">Improved Combat Maneuver:</strong> Choose a type of combat maneuver. The monster doesn't provoke attacks of opportunity when using that maneuver, its CMB for that type of maneuver increases by 4, and its CMD increases by 4 against that type of maneuver. You can choose one of the monster's attack types. If you do, whenever the monster hits with an attack of that type, it can automatically attempt a combat maneuver of the type chosen with this option.</p>
<p><strong className="hl">Mage Killer:</strong> The DC to cast defensively when threatened by this monster increases by 4. Casters that fail attempts to cast defensively provoke attacks of opportunity from this monster.</p>
<p><strong className="hl">Mage Punisher:</strong> Whenever an enemy within the monster's reach successfully casts a spell defensively, that enemy provokes an attack of opportunity from the monster after the spell is complete.</p>
<p><strong className="hl">Poison:</strong> The monster uses poison with its attacks, either through a natural weapon or by applying the poison to a particular manufactured weapon. The target of a successful attack with the chosen weapon must attempt a Fortitude save to resist the poison. The basic poison is:</p>
<div className="sideNoteWrap startAlign"><ScrollContainer id="rule-cunning--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th colSpan={4} scope="col" className="title">Basic Poison</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}></td></tr><tr><th scope="row">Onset</th><td colSpan={3}>1 minute</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/minute for 6 minutes</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d2 points of damage to any one ability score (chosen when the monster gains this option)</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><p>Choose two of the following additional advantages, plus one advantage for every 3 CR the monster possesses: decrease onset to -, change the frequency to 1/round for 6 rounds, increase the ability damage to 1d3 points of damage (this option can be chosen multiple times to increase the damage to 1d4, 1d6, and 1d8), damage an additional ability score (using the same damage die as the primary ability damage effect), increase the cure to 2 consecutive saves.</p>
<p><strong className="hl">Repositioning Attack:</strong> When it hits a creature of its size or smaller with a certain type of attack, the monster can immediately attempt a reposition combat maneuver check to push or pull that creature. Its CMB for this check increases by 4. The distance the monster pushes or pulls the creature can increase under certain conditions, such as if the monster has special appendages.</p>
<p><strong className="hl">Sneak Attack:</strong> When flanking or attacking a foe denied its Dexterity bonus to AC, this monster deals an additional 1d6 points of damage. This damage increases by 1d6 for every 2 CR the monster possesses. Decrease the base damage of the monster's attacks by 2 points for every 1d6 of sneak attack it has.</p>
<p><strong className="hl">Team Fighter:</strong> The monster gains a +2 bonus on attack and damage rolls against targets that are threatened by one of the monster's allies (other than itself). This bonus increases by 1 for every 4 CR the monster possesses.</p>
<p><strong className="hl">Trap Squares:</strong> The monster can trap any square adjacent to it as a standard action. Any creature that enters the trapped square takes an amount of damage equal to 1d6 + 1/2 the monster's CR of a damage type chosen by the monster while setting the trap. The trap is invisible and lasts for a number a rounds equal to the monster's CR. It can be found with a successful DC 25 Perception check and disarmed with a successful DC 25 Disable Device check. The monster can create three traps per day; at CR 10, this increases to five traps per day. This ability can be used for mundane or magical traps. For mundane traps, choose bludgeoning, piercing, or slashing damage; for magical traps, choose acid, cold, electricity, or fire damage.</p>
<p><strong className="hl">Unflankable:</strong> The monster can't be flanked.</p>
</>};
const _monstrous = {title: "Monstrous", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_7_monster_options","combat_options"], siblings: ["cunning","monstrous","powerful","quick","tough"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 232</Link></p>
<p>These abilities are typically supernatural or inhuman in nature. If a monster is meant to be more like an NPC - and especially if it uses a PC race - avoid choosing monstrous combat options.</p>
<p><strong className="hl">Blood Drain:</strong> This monster deals Constitution damage as the <Link to="/rule/cunning">ability damage option</Link>, but does so automatically at the end of the monster's turn to any creature it's grappling.</p>
<p><strong className="hl">Breath Weapon:</strong> The monster gains a breath weapon that deals 1d6 points of damage + 1d6 per CR. A target can attempt a Reflex saving throw to take half damage. If the breath weapon is a cone, it's 30 feet long, increasing by 10 feet for each size category above Medium, and decreasing by 5 feet for every size category below Medium. If the breath weapon is a line, its area of effect is twice as long as a cone would be.</p>
<p><strong className="hl">Channel Resistance:</strong> The monster gains <Link to="/umr/channel_resistance">channel resistance +4</Link>.</p>
<p><strong className="hl">Confusion Aura:</strong> Any creature that comes within 30 feet of the monster must attempt a Will save (DC = the monster's ability DC - 5). If it fails, it is confused for a number of rounds equal to the monster's CR. If it succeeds, it can't be affected again by this aura for 24 hours. The range increases to 60 feet at CR 10 and to 120 feet at CR 20.</p>
<p><strong className="hl">Corrupting Gaze:</strong> The monster has a <Link to="/umr/gaze">gaze attack</Link> (as the universal monster rule) with a range of 30 feet. The attack deals 2d10 points of damage and 1d4 points of Charisma damage. A successful Fortitude save negates the Charisma damage.</p>
<p><strong className="hl">Corrupting Touch:</strong> A monster must be incorporeal to have this ability. The monster can make a touch attack. If it hits, the target supernaturally ages and takes 1d6 points of damage per CR the monster possesses (Fortitude half). Targets immune to magical aging are immune to this damage.</p>
<p><strong className="hl">Create Spawn:</strong> The monster can create spawn out of those it slays. The victim rises from death as the kind of monster that created it in 1d4 days and is under the command of the monster that created it, remaining enslaved until its master's destruction. The monster can have enslaved spawn whose HD total no more than 2 &times; the monster's CR; any spawn it creates that would exceed this limit become free-willed. The monster can free an enslaved spawn in order to create a new enslaved spawn, but once freed, a creature cannot be enslaved again.</p>
<p><strong className="hl">Curse of Lycanthropy:</strong> The monster bears the curse of lycanthropy. When the monster is in animal or hybrid form and hits a humanoid target with a bite attack, the target must succeed at a Fortitude save (DC = the monster's ability DC - 5) or become infected by the curse. If the target's size category is not within one size category of the lycanthrope's, this ability has no effect.</p>
<p><strong className="hl">Damaging Body:</strong> When the monster is hit with an unarmed strike or melee weapon without reach, the attacker takes an amount of damage equal to 1d6 + 1/2 the monster's CR. Choose an appropriate damage type for this option, such as fire if the monster's body is burning or piercing if it's covered in spines.</p>
<p><strong className="hl">Disease:</strong> One of the monster's attacks causes disease unless the target succeeds at a Fortitude save. The basic disease is:</p>
<div className="sideNoteWrap startAlign"><ScrollContainer id="rule-monstrous--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/diseases"><IonIcon aria-label="Disease" icon="/icons/paramecia.svg" /></ThLink><th colSpan={4} scope="col" className="title">Basic Disease</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Affliction</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}></td></tr><tr><th scope="row">Onset</th><td colSpan={3}>1d3 days</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/day</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 point of damage to any one ability score (chosen when the monster gains this option)</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>2 consecutive saves</td></tr></tbody></table></ScrollContainer></div><p>Choose two of the following additional advantages, plus one advantage for every 5 CR the monster has: decrease the onset to 1 day (can be chosen multiple times to reduce the onset to 1 hour, then to -), change the frequency to 1 hour, increase the effect to 1d3 points of damage (this option can be chosen multiple times to further increase the damage to 1d4, then to 1d6), damage an additional ability score (using the same amount of damage as the primary ability damage effect), or change the cure to -.</p>
<p><strong className="hl">Distraction:</strong> A creature damaged by this monster is nauseated for 1 round (Fortitude negates).</p>
<p><strong className="hl">Draining Touch:</strong> The monster can make a melee touch attack as though it had the <Link to="/rule/cunning">ability damage option</Link> dealing ability drain. Each time the monster drains an ability score in this way, it heals 5 points of damage to itself.</p>
<p><strong className="hl">Energy Drain:</strong> This monster bestows 1 negative level with its attacks (or attacks of a particular type) and gains 5 temporary hit points for each negative level bestowed. The number of negative levels bestowed increases to 2 at CR 10 and 3 at CR 20.</p>
<p><strong className="hl">Engulf:</strong> This functions as the <Link to="/umr/engulf">universal monster rule</Link>, but uses the monster's ability DC from its array. The monster can either deal its high weapon damage to engulfed creatures, or deal its low weapon damage and inflict one of the following conditions: bleed (as the <Link to="/rule/powerful">option</Link>), blinded (Fortitude negates), deafened, energy drain (as the option; see above), frightened (Will negates), nauseated (Fortitude negates), or paralyzed (Fortitude negates).</p>
<p><strong className="hl">Fast Healing:</strong> This monster regains 2 hit points per round. This healing increases to 5 hit points per round at CR 4, 10 at CR 11, 15 at CR 16, and 20 at CR 21.</p>
<p><strong className="hl">Fear Attack:</strong> This ability functions as the fear aura option (see below), but requires a standard action to activate, uses the monster's full ability DC, and affects creatures in a cone, burst, or ray. If used as a ray, it affects only one creature and requires a ranged touch attack to affect the creature. The size of the effect appears on the table below.</p>
<ScrollContainer id="rule-monstrous--table-1"><table>
<thead>
<tr>
<th>CR</th>
<th>Cone</th>
<th>Burst</th>
<th>Ray</th>
</tr>
</thead>
<tbody><tr>
<td>0-9</td>
<td>60 ft.</td>
<td>30 ft.</td>
<td>120 ft.</td>
</tr>
<tr>
<td>10-19</td>
<td>120 ft.</td>
<td>60 ft.</td>
<td>240 ft.</td>
</tr>
<tr>
<td>20+</td>
<td>240 ft.</td>
<td>120 ft.</td>
<td>480 ft.</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Fear Aura:</strong> Any creature that comes within 30 feet of the monster must attempt a Will save (DC = the monster's ability DC - 5). If it fails, it is panicked for a number of rounds equal to the monster's CR; if it succeeds, it is shaken for 1 round. The range increases to 60 feet at CR 10 and 120 feet at CR 20.</p>
<p><strong className="hl">Fling:</strong> When the monster has a creature grappled, it can fling that creature as a standard action. The flung creature travels 1d6 &times; 10 feet and takes 1d6 points of damage per 10 feet traveled. If the monster can fly, it can instead fling the creature as a free action while airborne. If it does, the flung creature takes damage as specified above or the appropriate falling damage, whichever is greater.</p>
<p><strong className="hl">Frightful Presence:</strong> This ability functions as fear aura (see above), but affected creatures are shaken for 15 rounds (or panicked if they have 4 or fewer HD). This ability doesn't affect creatures of a level equal to or higher than the monster's CR + 4, and a creature that succeeds at its save can't be affected by the monster's frightful presence for 24 hours.</p>
<p><strong className="hl">Gaseous Form:</strong> As a standard action, the monster can use <Link to="/spell/gaseous_form">gaseous form</Link> at will, and it can remain in this form indefinitely. While it does, it has a fly speed of 20 feet with perfect maneuverability.</p>
<p><strong className="hl">Incorporeal:</strong> This functions as the <Link to="/umr/incorporeal">universal monster rule</Link>, without adjusting AC, attack bonuses, or CMB.</p>
<p><strong className="hl">Malevolence:</strong> Once per round, the monster can attempt to merge its body with a creature within its reach. The target can resist the attack with a successful Will save. A target that succeeds at its save becomes immune to the monster's malevolence for 24 hours. This ability is similar to <Link to="/spell/magic_jar">magic jar</Link>, except that it doesn't require a receptacle.</p>
<p><strong className="hl">Negative Healing:</strong> You heal damage instead of taking damage from negative energy.</p>
<p><strong className="hl">Paralysis:</strong> The monster's attacks paralyze a target for 1d2 rounds unless it succeeds at a Fortitude save. For every 3 CR, improve this ability by increasing the number of rounds (to 1d3, 1d4, 1d6, 1d8, and finally 2d6). At CR 18, targets are paralyzed for 1 round even on a success.</p>
<p><strong className="hl">Paralyzing Touch:</strong> The monster gains a touch attack. A living creature hit by this attack must succeed at a Fortitude save (DC = the monster's ability DC - 5) or be permanently paralyzed. <Link to="/spell/remove_paralysis">Remove paralysis</Link> or any spell that can remove a curse can free the victim. The effect cannot be dispelled. Anyone paralyzed by this attack seems dead, though a successful DC 20 Perception check or a successful DC 15 Heal check reveals that the creature is still alive.</p>
<p><strong className="hl">Poisonous Blood:</strong> This functions as the <Link to="/rule/cunning">poison option</Link>, but affects any creature that confirms a critical hit against the monster using a piercing or slashing melee weapon (unless the weapon has reach).</p>
<p><strong className="hl">Rake:</strong> If the monster begins its turn grappling a creature, it can make two free claw attacks on its turn against that creature, dealing its low weapon damage. If it has <Link to="/umr/pounce">pounce</Link>, it also gains these rake attacks when it pounces.</p>
<p><strong className="hl">Regeneration:</strong> This functions as the fast healing option (see above), but the monster can't die while its regeneration still functions. Choose two or more damage types (typically acid and fire damage); these types suppress the regeneration for 1 round.</p>
<p><strong className="hl">Rejuvenation:</strong> Once destroyed or killed, the monster restores itself after a set period of time (typically 1d10 days). The specific means for permanently destroying the monster and the time it takes before reforming vary between monsters.</p>
<p><strong className="hl">Rock Throwing:</strong> The monster can throw and catch rocks. The thrown rock is a ranged attack with a range increment of 120 feet, and deals the monster's low weapon damage. Once per round as a free action, the monster can catch a rock that would hit it, taking no damage.</p>
<p><strong className="hl">Snatch:</strong> When the monster is grappling a creature three or more size categories smaller than itself that it grabbed after hitting with a bite or claw attack, it deals damage as though it had hit with the attack again each time it successfully rolls to maintain the grapple. If the monster's holding a creature in its mouth, that creature can't save against the monster's breath weapon (if any). The monster can fling a creature it has snatched as though it had the fling option (see above). A monster must have the <Link to="/rule/cunning">improved combat maneuver (grab) option</Link> to select this option.</p>
<p><strong className="hl">Stench:</strong> Any living creature within 30 feet of the monster must succeed at a Fortitude save or be sickened for 10 rounds. Creatures that succeed can't be affected by the monster's stench for 24 hours. Stench counts as a poison for effects that resist or remove poisons.</p>
<p><strong className="hl">Vampiric Attack:</strong> Once per day, the monster can leech health from one target as a melee touch attack or as a ranged touch attack with a range of 30 feet. This deals 1d6 points of damage per CR the monster possesses (Fortitude half). The monster gains temporary hit points equal to the amount of damage dealt.</p>
</>};
const _powerful = {title: "Powerful", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_7_monster_options","combat_options"], siblings: ["cunning","monstrous","powerful","quick","tough"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 234</Link></p>
<p>These options are most appropriate for monsters with high Strength or that rely on overwhelming physical attacks.</p>
<p><strong className="hl">Awesome Blow:</strong> As a standard action, the monster can attempt an awesome blow combat maneuver. If it succeeds, the target takes damage as if it had been hit by one of the monster's attacks, is knocked 10 feet in a direction of the monster's choice, and falls prone. The target must be moved in a straight line; if it hits an obstacle, both it and the obstacle take 1d6 points of damage.</p>
<p><strong className="hl">Bleed:</strong> The monster's attacks deal 1d6 points of bleed damage. This increases to 1d8 at CR 6, 1d10 at CR 11, 2d6 at CR 16, and 3d6 at CR 21. Bleeding can be stopped by a successful DC 15 Heal check or with any magical healing.</p>
<p><strong className="hl">Burn:</strong> This uses the same damage values as the bleed option (see above), but deals fire damage and requires the target to succeed at a Reflex save or catch fire.</p>
<p><strong className="hl">Constrict:</strong> Whenever this monster succeeds at a grapple combat maneuver, it deals its high weapon damage.</p>
<p><strong className="hl">Critical Striker:</strong> The monster gains a +4 bonus on rolls to confirm critical hits. This monster also doubles its critical threat range with one of its attacks.</p>
<p><strong className="hl">Defense Breaker:</strong> When this monster hits an opponent, that opponent is flat-footed for the next attack made against it. If the monster makes a full-round attack, this takes effect after all its attacks and affects all targets hit.</p>
<p><strong className="hl">Power Attack:</strong> The monster's main attack uses the low attack value, but deals 50% more damage.</p>
<p><strong className="hl">Powerful Charge:</strong> The monster's charge attacks deal 50% more damage.</p>
<p><strong className="hl">Quivering Palm:</strong> Once per day, the monster can use this option when it makes an attack against a target that is not immune to critical hits. On a hit, the target is affected by the monster's quivering palm. At any point within a number of days equal to the monster's CR, the monster can force the target to attempt a Fortitude save (DC = the monster's ability DC - 5). The target dies on a failure, and ends the quivering palm effect on a successful one.</p>
<p><strong className="hl">Rage:</strong> This monster can fly into a rage as a free action, either at its choice (as the barbarian class feature) or on the turn after it takes damage in combat (as the <Link to="/umr/blood_rage">blood rage</Link> universal monster rule). While raging, the monster gains additional hit points equal to double its CR, and deals 3 extra points of damage on Strength-based attacks. The monster also gains a +2 bonus on Will saves and takes a -2 penalty to AC. The rage lasts until the end of the battle or for 1 minute, whichever comes first.</p>
<p><strong className="hl">CR 10:</strong> The monster instead gains hp equal to triple its CR, deals 4 extra points of damage on Strength-based attacks, and gains a +3 bonus on Will saves.</p>
<p><strong className="hl">CR 19:</strong> The monster instead gains hp equal to quadruple its CR, deals 6 extra points of damage on Strength-based attacks, and gains a +4 bonus on Will saves.</p>
<p><strong className="hl">Rend:</strong> If the monster hits the same target with two or more attacks in 1 round, it rends - dealing its high weapon damage. It can do this once per round.</p>
<p><strong className="hl">Slaying Attack:</strong> Once per day as a standard action, the monster can make a single attack that can kill a creature outright. On a hit, the attack deals normal damage and the target must succeed at a save or die. The type of save is either Fortitude or Will, chosen when the monster gains this option. This option typically appears only on monsters of CR 19 or higher.</p>
<p><strong className="hl">Stun Attack:</strong> The monster can make one of its attacks a stun attack once per round. On a hit, the target takes damage normally and must succeed at a Fortitude save (DC = the monster's ability DC - 5) or become stunned for 1 round. A creature is immune to this ability if it is a construct, ooze, plant, or undead, or if it is incorporeal or immune to critical hits. The monster can use this option a number of times per day equal to its CR.</p>
<p><strong className="hl">Trample:</strong> The monster can automatically overrun creatures smaller than itself as a full-round action. It automatically deals its high weapon damage to each creature it runs over in this way (dealing damage only once per round to any given creature). A creature being trampled can either attempt an attack of opportunity at a -4 penalty or attempt a Reflex save (DC = 2 &times; the monster's ability DC - 10) to take half damage.</p>
</>};
const _quick = {title: "Quick", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_7_monster_options","combat_options"], siblings: ["cunning","monstrous","powerful","quick","tough"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 234</Link></p>
<p>Monsters with high Dexterity tend to take quick combat options, many of which increase mobility.</p>
<p><strong className="hl">Accuracy:</strong> Increase the monster's attack bonuses by 2.</p>
<p><strong className="hl">Combat Reflexes:</strong> The monster can make up to five attacks of opportunity each round, and can make attacks of opportunity while flat-footed.</p>
<p><strong className="hl">Deflect Projectiles:</strong> When not flat-footed, the monster deflects one ranged attack per round.</p>
<p><strong className="hl">Dodge Expert:</strong> Increase the monster's AC by 2 and its touch AC by 4. Decrease its flat-footed AC by 6.</p>
<p><strong className="hl">Evasion:</strong> When the monster succeeds on a Reflex saving throw against an effect that normally deals half damage on a successful save, the monster instead takes no damage. At CR 8, it also takes only half damage if it fails its save.</p>
<p><strong className="hl">Extra Attack:</strong> The monster gains one additional melee or ranged attack at its highest bonus, but reduces its attack bonus by 2 with all attacks of that type. Use this option for monsters that use two-weapon fighting.</p>
<p><strong className="hl">Far Shot:</strong> Double all the monster's range increments and reduce the monster's penalties on ranged attacks from range increments by half.</p>
<p><strong className="hl">Fast Reload:</strong> The monster can reload a ranged weapon that normally takes a move or standard action to reload as a free action. When it reloads a ranged weapon, it doesn't provoke attacks of opportunity.</p>
<p><strong className="hl">Firearm Savvy:</strong> The monster's firearm attacks target touch AC when firing beyond the first range increment. As a move action, the monster can remove the broken condition from a firearm caused by a misfire.</p>
<p><strong className="hl">Improved Initiative:</strong> Increase the monster's initiative bonus by 4.</p>
<p><strong className="hl">Mobile Attack:</strong> The monster can move its speed and make an attack (either melee or ranged, chosen when the monster gains this option) at any point during its movement as a full-round action. The monster can use this ability with any of its movement modes.</p>
<p><strong className="hl">Mobility:</strong> The monster gains a +4 bonus to AC against attacks of opportunity.</p>
<p><strong className="hl">Mounted Master:</strong> The monster deals double damage on a mounted charge, halves its penalties on ranged attacks for being mounted, and grants its mount a +4 bonus to AC.</p>
<p><strong className="hl">Precise Shot:</strong> When making a ranged attack, the monster ignores the -4 penalty for attacking an opponent engaged in melee as well as the target's AC bonuses from <Link to="/rule/cover">cover</Link> and <Link to="/rule/concealment">concealment</Link> (except total cover or total concealment).</p>
<p><strong className="hl">Swap Places:</strong> The monster can swap positions with an adjacent ally as a move action without provoking attacks of opportunity.</p>
<p><strong className="hl">Uncanny Dodge:</strong> The monster can't be caught flat-footed.</p>
<p><strong className="hl">Whirlwind Attack:</strong> The monster can make an attack against each creature within reach at its highest attack bonus as a full attack.</p>
</>};
const _tough = {title: "Tough", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_7_monster_options","combat_options"], siblings: ["cunning","monstrous","powerful","quick","tough"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 235</Link></p>
<p>High-Constitution monsters beef up their resistance to being hurt with tough combat options.</p>
<p><strong className="hl">Damage Reduction:</strong> The monster gains damage reduction. Cross-reference the monster's CR band and the type of damage that bypasses the reduction to find the value of the monster's DR on the table below. For DR that requires more than one damage type to bypass, the DR equals the lower value - 5. (If this reduces it to 0, this type of DR is probably too strong.)</p>
<ScrollContainer id="rule-tough--table-0"><table>
<thead>
<tr>
<th>CR</th>
<th>Type*</th>
<th>Material</th>
<th>Magic</th>
<th>Alignment</th>
<th>None</th>
</tr>
</thead>
<tbody><tr>
<td>0-5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>1</td>
</tr>
<tr>
<td>6-10</td>
<td>10</td>
<td>10</td>
<td>10</td>
<td>5</td>
<td>3</td>
</tr>
<tr>
<td>11-15</td>
<td>15</td>
<td>15</td>
<td>10</td>
<td>10</td>
<td>5</td>
</tr>
<tr>
<td>16-20</td>
<td>20</td>
<td>20</td>
<td>20</td>
<td>15</td>
<td>10</td>
</tr>
<tr>
<td>21+</td>
<td>30</td>
<td>30</td>
<td>30</td>
<td>20</td>
<td>15</td>
</tr>
</tbody></table></ScrollContainer>
<p>* A bludgeoning, piercing, or slashing weapon.</p>
<p><strong className="hl">Diehard:</strong> When reduced to below 0 hit points, this monster automatically stabilizes and can remain conscious.</p>
<p><strong className="hl">Energy Resistance:</strong> The monster gains resistance 10 against two energy types. For every 5 CR the monster has, increase the amount of energy resistance by 5, or increase the number of resistances by one. For example, a CR 17 monster might have three resistances at 10 or two resistances at 15.</p>
<p><strong className="hl">Extra Armor:</strong> Increase the monster's AC by 2 and its flat-footed AC by 4. Decrease its touch AC by 6. Reduce the monster's speed by 10 feet if this change comes from manufactured armor.</p>
<p><strong className="hl">Extra Hit Points:</strong> Increase the monster's hit point total by 20%.</p>
<p><strong className="hl">Immunity:</strong> The monster gains immunity from one energy type, affliction, condition, or spell of your choice, plus one additional immunity for every 5 CR it has.</p>
<p><strong className="hl">Spell Resistance:</strong> The monster gains spell resistance equal to its CR + 11.</p>
<p><strong className="hl">Stalwart:</strong> When the monster succeeds at a Fortitude or Reflex saving throw against an effect that normally has a reduced effect on a successful save, the monster instead avoids the effect entirely. At CR 8, it also takes only the reduced effect if it fails its save.</p>
</>};
const _magic_options = {title: "Magic Options", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_7_monster_options"], siblings: ["choosing_monster_options","combat_options","magic_options","social_options","universal_options"], subtopics: ["creature","offensive","support","versatile"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 235</Link></p>
<p>These options are primarily useful to spellcasters, though combatants and experts blessed with magic can take them.</p>
</>};
const _creature = {title: "Creature", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_7_monster_options","magic_options"], siblings: ["creature","offensive","support","versatile"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 235</Link></p>
<p>These options improve a monster's ability to bring minion creatures into the fight.</p>
<p><strong className="hl">Children of the Night:</strong> Once per day as a standard action, the monster can call forth 1d6+1 rat swarms, 1d4+1 bat swarms, or 2d6 wolves. (If the monster is not terrestrial, it might summon other creatures of similar power.) These creatures arrive in 2d6 rounds and serve the monster for 1 hour.</p>
<p><strong className="hl">Phantom Mount:</strong> Once per hour, the monster can summon a horse similar to a <Link to="/spell/phantom_steed">phantom steed</Link>. This mount is more substantial than a typical <em>phantom steed,</em> and can carry one additional rider. The mount's powers are based on the monster's total CR rather than caster level.</p>
<p><strong className="hl">Powerful Summons:</strong> Increase the duration of the monster's conjuration (summoning) spells by a number of rounds equal to the monster's CR. Any creature summoned by such a spell also gains temporary hit points equal to 1/2 the monster's CR and a +2 bonus on damage rolls.</p>
<p><strong className="hl">Undead Mastery:</strong> As a standard action, the monster can choose one undead creature within 50 feet. That creature must succeed at a Will save or fall under the monster's control. This control is permanent for unintelligent undead; an undead creature with an Intelligence score can attempt an additional saving throw each day to break free. A creature that succeeds at its saving throw cannot be affected again by the same monster's undead mastery for 24 hours.</p>
<p>A monster can control a number of undead creatures with a combined CR equal to its own CR. If this limit is exceeded, the excess undead become uncontrolled in order from longest-controlled to most recently controlled.</p>
</>};
const _offensive = {title: "Offensive", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_7_monster_options","magic_options"], siblings: ["creature","offensive","support","versatile"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 236</Link></p>
<p>These magic options are most useful for aggressive monsters that use their spells to deal damage.</p>
<p><strong className="hl">Bestow Major Condition:</strong> As a standard action, the monster makes a melee touch attack against one creature it can reach. On a hit, the target gains the condition (dazed, paralyzed, or stunned) that was chosen when the monster gained this option. Each round, the target can attempt a Will save (DC = the monster's ability DC - 5) to end the condition.</p>
<p><strong className="hl">Bestow Minor Condition:</strong> As a standard action, the monster makes a melee touch attack against one creature it can reach. On a hit, the target gains the condition (dazzled, deafened, fatigued, shaken, or sickened) that was chosen when the monster gained this option. Each round, the target can attempt a Will save (DC = the monster's ability DC - 5) to end the condition.</p>
<p><strong className="hl">Bestow Moderate Condition:</strong> As a standard action, the monster makes a melee touch attack against one creature it can reach. On a hit, the target gains the condition (blinded, exhausted, frightened, or nauseated) that was chosen when the monster gained this option. Each round, the target can attempt a Will save (DC = the monster's ability DC - 5) to end the condition.</p>
<p><strong className="hl">Bypass DR:</strong> The monster's attacks count as being magic, of a particular alignment, or of a particular material for the purpose of overcoming damage reduction. Each time the monster gains this option, choose two from the following: adamantine, chaotic, cold iron, evil, good, lawful, magic, or silver.</p>
<p><strong className="hl">Channel Destruction:</strong> Choose one energy type: acid, cold, electricity, or fire. The monster's weapon attacks deal an additional 1d6 points of damage of the chosen type for every 4 CR the monster has.</p>
<p><strong className="hl">Energy Explosion:</strong> Choose one of the following: acid, cold, electricity, fire, force, or sonic. Once per day as a standard action, the monster can create a 20-foot-radius burst of energy within 60 feet. This deals an amount of damage equal to 1d6 + the monster's CR of the chosen type to all creatures in the burst. A successful Reflex save halves the damage.</p>
<p><strong className="hl">Energy Infusion:</strong> Choose one of the following: acid, cold, electricity, fire, force, or sonic. Each time the monster uses a spell, spell-like ability, or supernatural ability that deals energy damage, it can choose to change the energy damage type dealt by that ability to the chosen type instead.</p>
<p><strong className="hl">Evil Eye:</strong> As a standard action, the monster chooses one creature within 30 feet that it can see. The target takes a -2 penalty on either ability checks, attack rolls, saving throws, skill checks, or to AC for 1 minute. If the target succeeds at a Will save, the effect lasts for 1 round instead.</p>
<p><strong className="hl">Magic Attack:</strong> As a standard action, the monster makes a ranged touch attack against one creature within 30 feet of it. On a hit, the attack inflicts the monster's high weapon damage of one of the following types (chosen when the monster gains this option): bludgeoning, cold, electricity, fire, force, piercing, slashing, or sonic. For force damage, use the low damage value instead of high damage value.</p>
<p><strong className="hl">Misfortune:</strong> As a standard action, the monster targets one creature within 30 feet. The next time the target attempts an ability check, attack roll, saving throw, or skill check before the end of the monster's next turn, the target must roll twice and use the lower result.</p>
<p><strong className="hl">Potent Magic Damage:</strong> Choose a spell subschool or descriptor, such as fire or phantasm. The monster's spells and spell-like abilities of the chosen type deal an additional 1 point of damage per damage die.</p>
<p><strong className="hl">Sacrilegious Aura:</strong> The monster emits an aura of intense evil and negative energy in a 30-foot radius. The aura functions as the <Link to="/spell/desecrate">desecrate</Link> spell cast on an altar. In addition, any creature that attempts to use a positive energy effect in this area must succeed at a <Link to="/rule/concentration">concentration</Link> check or the positive energy has no effect.</p>
<p><strong className="hl">Smite:</strong> Choose chaotic, evil, good, or lawful. With one attack per day, the monster can deal additional damage equal to its CR against a creature of the chosen type. The number of uses per day increases by one for every 3 CR the monster has.</p>
<p><strong className="hl">Spell Combat:</strong> The monster's attacks use the low attack value, but when it makes a full attack the monster can also cast any spell it knows that has a casting time of 1 standard action.</p>
<p><strong className="hl">Spell Penetration:</strong> The monster gains a +2 bonus on caster level checks to overcome a creature's spell resistance. At CR 11, the bonus increases to +4.</p>
<p><strong className="hl">Spellstrike:</strong> Whenever the monster casts a spell with a range of touch, it can deliver the spell as part of a melee attack. The monster makes the melee attack in place of the spell's touch attack. On a hit, the attack deals normal damage and the spell takes effect.</p>
<p><strong className="hl">Turn Undead:</strong> As a standard action, this monster forces each undead creature within 30 feet of it to attempt a Will save (DC = the monster's ability DC - 5). On a failed saving throw, the target flees from the monster for 1 minute as if panicked. Intelligent undead receive a new saving throw each round to end the effect.</p>
</>};
const _support = {title: "Support", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_7_monster_options","magic_options"], siblings: ["creature","offensive","support","versatile"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 237</Link></p>
<p>These magical benefits protect, heal, or improve the abilities of the monster or its allies.</p>
<p><strong className="hl">Bolstering Touch:</strong> As a standard action, the monster can touch a creature to grant it a bonus equal to 1 + 1/2 the monster's CR on attack rolls, skill checks, ability checks, and saving throws for 1 round.</p>
<p><strong className="hl">Channel Energy:</strong> As a standard action, the monster releases a burst of energy that affects either all living creatures or all undead creatures in a 30-foot radius. The burst either deals 1d6 points of damage (from negative energy) or heals 1d6 points of damage (from positive energy). A creature that would take damage from this effect can attempt a Will save (DC = the monster's ability DC - 5) to halve the damage. A monster can use this option 8 times per day. Increase the damage or healing by 1d6 per 2 CR.</p>
<p><strong className="hl">Combat Casting:</strong> The monster gains a +6 bonus on <Link to="/rule/concentration">concentration</Link> checks.</p>
<p><strong className="hl">Countersong:</strong> The monster can attempt a Perform skill check. It and each ally within 30 feet of it can use the result of this check in place of saving throws to resist sonic, language-dependent, illusion (pattern), and illusion (figment) effects.</p>
<p><strong className="hl">Fortune:</strong> As a standard action, the monster grants good luck to one creature within 30 feet of it. The next time the target attempts an ability check, attack roll, saving throw, or skill check before the end of the monster's next turn, the target can reroll and must use the second result.</p>
<p><strong className="hl">Healing Touch:</strong> As a standard action (or a swift action if it targets itself), the monster touches itself or one living creature it can reach. The target heals 1d6 hit points of damage for every 2 CR the monster has (minimum 1d6) and removes one condition of the monster's choice. If the monster targets an undead creature, it must make a melee touch attack. On a hit, the target takes damage instead of being healed. The monster can use this option 5 times per day.</p>
<p><strong className="hl">Potent Healing:</strong> Whenever the monster heals hit point damage using a spell, spell-like ability, or supernatural ability, it heals a number of additional hit points equal to its CR. This doesn't apply to dealing damage to undead using positive energy, but does apply to using negative energy to heal undead.</p>
<p><strong className="hl">Protective Ward:</strong> As a standard action, the monster emits a field of protective magic that extends from it in a 10-foot radius. The monster and each allied creature in the area gains a +2 bonus to AC until the end of the monster's next turn.</p>
<p><strong className="hl">Remove Major Condition:</strong> As a standard action, the monster can touch a creature to remove the blinded, paralyzed, or stunned condition. It can use this ability on itself as a swift action.</p>
<p><strong className="hl">Remove Minor Condition:</strong> As a standard action, the monster can touch a creature to remove the dazzled, deafened, fatigued, shaken, or sickened condition. It can use this ability on itself as a swift action.</p>
<p><strong className="hl">Remove Moderate Condition:</strong> As a standard action, the monster can touch a creature to remove the dazed, exhausted, frightened, or nauseated condition. It can use this ability on itself as a swift action.</p>
<p><strong className="hl">Transfer Hit Points:</strong> As an immediate action, the monster can transfer hit points from either itself to an ally or an ally to itself; choose one when taking this option. The number of hit points it can transfer in this way is equal to its CR + 5.</p>
</>};
const _versatile = {title: "Versatile", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_7_monster_options","magic_options"], siblings: ["creature","offensive","support","versatile"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 237</Link></p>
<p>Most of these abilities grant more spellcasting abilities or reflect the monster's deep understanding or clever manipulation of magical forces.</p>
<p><strong className="hl">At-Will Magic:</strong> Choose one spell of 0 or 1st level that does not heal damage. The monster can cast this spell at will.</p>
<p><strong className="hl">Contingent Spell:</strong> Choose one spell of the monster's CR band or lower (see <Link to="/rule/spell_lists">Spell Lists</Link>). This spell comes into effect on the monster under a particular condition you specify (such as "when an enemy attempts to attack the monster" or "when the monster is targeted by an enchantment spell"). This ability can trigger once per day. The spell chosen is in addition to any spells the monster gains from being a spellcaster or having the secondary magic option (see <Link to="/rule/universal_options">Universal Options</Link>).</p>
<p><strong className="hl">Dimensional Steps:</strong> As a standard action, the monster teleports to an open space it can see within 150 feet of it.</p>
<p><strong className="hl">Incorporeal Form:</strong> Once per day, this monster gains the <Link to="/rule/monstrous">incorporeal option</Link> for 1 minute.</p>
<p><strong className="hl">Magical Aptitude:</strong> When attempting a Spellcraft or Use Magic Device check, the monster rolls twice and takes the higher result.</p>
<p><strong className="hl">Metamagic Spell:</strong> Choose one <Link to="/main/metamagic_feat">metamagic feat</Link> and one spell the monster knows. That spell gains the benefit of the chosen metamagic feat once per day.</p>
<p><strong className="hl">Mutagen:</strong> Choose one of the following benefits:</p>
<ul>
<li>The monster's AC, Reflex save bonus, ranged attack bonus, and Dexterity modifier each increase by 2. Its Wisdom modifier decreases by 2.</li>
<li>The monster's melee attack bonus, melee damage rolls, and Strength modifier each increase by 2. Its Intelligence modifier decreases by 2.</li>
<li>The monster's Fortitude save bonus and Constitution modifier by each increase by 2, and its hit points increase by an amount equal to double its CR. Its Charisma modifier decreases by 2.</li>
</ul>
<p><strong className="hl">Spontaneous Casting:</strong> The monster can spontaneously replace its normal spells with spells of the same level of a particular type. Choose <Link to="/main/inflict_spells">cure spells, inflict spells</Link>, <Link to="/spell/summon_natures_ally_1">summon nature's ally_1</Link> spells, or any type of spell that has one spell per level in a similar fashion. Spontaneously casting a spell in this way uses up the daily use of a spell. A monster must have the spellcaster array to gain this option.</p>
</>};
const _social_options = {title: "Social Options", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_7_monster_options"], siblings: ["choosing_monster_options","combat_options","magic_options","social_options","universal_options"], subtopics: ["inspiration","miscellaneous"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 238</Link></p>
<p>Monsters with the expert array are the most adept with social options, though a charming swashbuckler (combatant) or an inspiring priest (spellcaster) could also benefit from one.</p>
</>};
const _inspiration = {title: "Inspiration", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_7_monster_options","social_options"], siblings: ["inspiration","miscellaneous"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 238</Link></p>
<p>These abilities manipulate mental states to either hinder enemies or boost allies. Many of them are more applicable in combat than other social options.</p>
<p><strong className="hl">Aura of Resistance:</strong> Choose two effect descriptors (such as fear or charm). Allies within 10 feet of the monster gain a +4 morale bonus on saving throws against effects with those descriptors.</p>
<p><strong className="hl">Bolstering Presence:</strong> As a standard action, the monster emits an aura that extends from it in a 30-foot radius and lasts for 1 minute. Any allied creature in the aura gains a +2 bonus on ability checks, attack rolls, damage rolls, and skill checks.</p>
<p><strong className="hl">Demoralize Foes:</strong> As a full-round action, the monster can attempt an Intimidate check to demoralize all enemies within 30 feet of it. When the monster reduces a creature to 0 or fewer hit points, it can use this ability as a free action.</p>
<p><strong className="hl">Dread:</strong> As a standard action, the monster causes each creature it chooses within 30 feet of it to become shaken for 1 minute. This option doesn't cause a shaken creature to become frightened or frightened creature to become panicked.</p>
<p><strong className="hl">Fascinate:</strong> As a standard action, the monster forces any number of creatures within 90 feet of it that can see, hear, and pay attention to it to make a Will save (DC = the monster's ability DC - 5). On a failure, a target becomes fascinated for 1 minute or until it sees someone make a hostile move such as drawing a sword or casting a spell. If successful, the target is immune to this ability for 24 hours.</p>
<p><strong className="hl">Heroic Recovery:</strong> Once per day, the monster can grant itself and every ally within 60 feet an additional saving throw against one effect affecting it.</p>
<p><strong className="hl">Inspire Competence:</strong> As a standard action, the monster grants a +5 competence bonus on skill checks using a particular skill to one ally within 30 feet of it that can hear it. The effect ends if the monster is killed, knocked unconscious, paralyzed, or otherwise unable to use a free action to continue the inspiration each round.</p>
<p><strong className="hl">Inspire Courage:</strong> As a standard action, the monster grants a +1 competence bonus on attack rolls and weapon damage rolls and a +1 morale bonus on saving throws against charm and fear effects to every ally that can hear it. The bonuses increase to +2 at CR 4, +3 at CR 10, and +4 at CR 16. At CR 6, the monster can start this effect as a free action. The effect ends if the monster is killed, knocked unconscious, paralyzed, or otherwise unable to use a free action to continue the inspiration each round.</p>
<p><strong className="hl">Inspire Fear:</strong> As a standard action, the monster forces each enemy creature within 30 feet of it that can hear it to attempt a Will saving throw. On a failure, the target becomes frightened and must flee from the monster's presence for 1 minute or until it can no longer hear the monster. If successful, the target becomes immune to this effect for 24 hours.</p>
<p><strong className="hl">Inspire Heroics:</strong> As a standard action, the monster and one willing ally within 30 feet of it gain a +4 morale bonus on saving throws and a +4 dodge bonus to AC for 1 minute. The effect ends if the monster is killed, knocked unconscious, paralyzed, or otherwise unable to use a free action to continue the inspiration each round.</p>
<p><strong className="hl">Weakening Presence:</strong> The monster emits an aura that extends from it in a 30-foot radius. Any enemy creature in the aura takes a -2 penalty on ability checks, attack rolls, damage rolls, and skill checks. A target can attempt a Will save (DC = the monster's ability DC - 5) when it starts its turn in the aura. If successful, the target is immune to this aura's effect for 24 hours.</p>
</>};
const _miscellaneous = {title: "Miscellaneous", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_7_monster_options","social_options"], siblings: ["inspiration","miscellaneous"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 239</Link></p>
<p>These options primarily factor into interactions other than combat. Most of them are good for creating adversaries who present a noncombat challenge or for quickly generating NPC allies with useful abilities.</p>
<p><strong className="hl">Alertness:</strong> When attempting a Perception or Sense Motive check, the monster rolls twice and takes the higher result.</p>
<p><strong className="hl">Animal Talker:</strong> The monster can speak with animals, and gains Handle Animal as an additional master skill.</p>
<p><strong className="hl">Knowledgeable:</strong> When attempting any Knowledge check, the monster rolls twice and takes the higher result.</p>
<p><strong className="hl">Liar:</strong> When attempting a Bluff, Disguise, or Stealth skill check, the monster rolls twice and takes the higher result. The monster's lies can't be detected by magic unless the one attempting to detect them succeeds at a caster level check (DC = 15 + the monster's CR).</p>
<p><strong className="hl">Linguist:</strong> The monster speaks, reads, and understands all languages.</p>
<p><strong className="hl">Mercantile Savvy:</strong> When attempting an Appraise check, the monster rolls twice and takes the higher result. In addition, the monster can attempt to identify magic items without casting <Link to="/spell/detect_magic">detect magic</Link>, using Appraise instead of Spellcraft. If the monster fails, it can't attempt to identify the same item again.</p>
<p><strong className="hl">Persuasive:</strong> When attempting a Charisma-based skill check, the monster rolls twice and takes the higher result.</p>
<p><strong className="hl">Slippery Mind:</strong> If the monster would be affected by an enchantment spell or effect and fails its saving throw, it can repeat the saving throw attempt 1 round later.</p>
<p><strong className="hl">Sound Mimicry:</strong> The monster can perfectly mimic sounds, and possibly voices. It gains Bluff as an additional master skill, and can attempt a Bluff check opposed by its targets' Sense Motive checks to mimic a sound convincingly. The target takes a -8 penalty if it's unfamiliar with the type of sound or creature being imitated.</p>
<p><strong className="hl">Telepathy:</strong> The monster can mentally communicate with any creature within 100 feet that has a language.</p>
</>};
const _universal_options = {title: "Universal Options", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_7_monster_options"], siblings: ["choosing_monster_options","combat_options","magic_options","social_options","universal_options"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 239</Link></p>
<p>A universal option can be taken in place of any option granted by an array or graft, regardless of the intended option type. These abilities are suitable for multiple arrays and roles.</p>
<p><strong className="hl">Athletic:</strong> When attempting an Acrobatics, Climb, or Swim check, the monster rolls twice and takes the higher result.</p>
<p><strong className="hl">Flying Acumen:</strong> This monster gains hover (as the <Link to="/feat/hover">monster feat</Link>) and gains Fly as an additional master skill.</p>
<p><strong className="hl">Magic Weapon:</strong> The monster uses a magic weapon. Choose one of the following benefits to apply to its attacks with that weapon.</p>
<p><strong className="hl">Bane:</strong> +2d6 points of damage against creatures of a specified type.</p>
<p><strong className="hl">Energy:</strong> +1d6 points of energy damage (choose one type).</p>
<p><strong className="hl">Keen:</strong> Double critical threat range.</p>
<p><strong className="hl">Returning:</strong> Weapon returns if thrown (thrown only).</p>
<p><strong className="hl">Seeking:</strong> Negates miss chances (ranged only).</p>
<p><strong className="hl">Vicious:</strong> +2d6 points of damage, and also deals 1d6 points of damage to the monster on a hit (melee only).</p>
<p>If the monster is CR 10 or higher, you can also choose from the following.</p>
<p><strong className="hl">Aligned:</strong> +2d6 points of damage against creatures of a specified alignment (choose chaotic, evil, good, or lawful).</p>
<p><strong className="hl">Energy Burst:</strong> +1d6 points of energy damage and an additional 1d10 points of damage on a critical hit (choose one type).</p>
<p>To imitate a <Link to="/magic-enh/speed">speed</Link> or <Link to="/magic-enh/wounding">wounding</Link> weapon, use extra attack or bleed, respectively, and apply them only to attacks with the weapon.</p>
<p><strong className="hl">Potions:</strong> The monster has two <Link to="/spell/cure_light_wounds">potions of cure light wounds</Link>, which cure 1d8+1 hit points each. At CR 5, these are <Link to="/spell/cure_moderate_wounds">potions of cure moderate wounds</Link> healing 2d8+3 hit points, and at CR 10 they're <Link to="/spell/cure_serious_wounds">potions of cure serious wounds</Link> healing 3d8+5 hit points.</p>
<p><strong className="hl">Save Boost:</strong> Increase the monster's saving throw bonuses by 1, or increase any one of its saving throw bonuses by 3.</p>
<p><strong className="hl">Secondary Magic:</strong> Though this monster isn't primarily a spellcaster, it does have several spells or spell-like abilities. Choose any <Link to="/main/spells">spell list</Link>. The monster can use each of that list's primary spells of its CR band once per day. This ability can also be used to give a spellcaster extra spell-like abilities to fit its monster type.</p>
<p><strong className="hl">Summon Allies:</strong> This monster can attempt to summon monsters of the same creature type as itself as a full-round action. Choose either a creature of the same CR as the monster (with a 35% chance of success) or a creature with a CR no greater than the monster's - 5 (with a 60% chance of success). The summoned ally returns to the place from which it came after 1 hour.</p>
<p><strong className="hl">Terrain Stride:</strong> Choose a type of terrain, such as undergrowth, ice, or rubble. The monster can move through nonmagical terrain of that type without impairing its movement or taking damage.</p>
</>};
const _step_8_skills = {title: "Step 8: Skills", parent_topics: ["advanced_gm_topics","simple_monster_creation"], siblings: ["step_1_array","step_2_creature_type_or_class_graft","step_3_subtype_graft","step_4_template_graft","step_5_size_graft","step_6_spells","step_7_monster_options","step_8_skills","step_9_damage","other_calculations","monster_creation_examples"], subtopics: ["assigning_skills","choosing_skills"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 240</Link></p>
<p>Skill bonuses in simple monster creation are divided into two categories: good and master. A good skill is one the monster has a significant bonus in, representing what would normally come from a moderate ability modifier and a decent number of skill ranks. A master skill is one the monster is incredibly talented with, representing a high ability modifier, full skill ranks, and possibly a significant racial bonus.</p>
<p>Any skills that don't have a good or master rating default to the monster's appropriate ability modifier. Monsters automatically use the good modifier for Perception without needing to spend a good skill slot on it, though they can still increase this by taking Perception as a master skill.</p>
</>};
const _assigning_skills = {title: "Assigning Skills", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_8_skills"], siblings: ["assigning_skills","choosing_skills"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 240</Link></p>
<p>Your monster's array - and potentially its grafts, spell list boons, and options - will tell you how many good and master skills to assign that monster. You should assign whatever feels right during this step. You might decide that an especially scholarly spellcaster monster should have more master skills than normal, or that you want to follow the construct array's guidelines and forgo giving your construct any good or master skills at all. In any case, the total number of skills you choose should be within one or two of the suggested numbers.</p>
<p>Mark down all the skills the monster has and indicate their bonuses. Use the bonus as written - don't add the monster's ability modifier on top of it. For instance, a CR 9 combatant has a +7 for its highest ability modifier and a +17 for its master skill bonus. If you assigned the monster's highest ability modifier to Strength and picked Climb as a master skill, the monster would still get only a +17 bonus on Climb checks, not a +24.</p>
</>};
const _choosing_skills = {title: "Choosing Skills", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_8_skills"], siblings: ["assigning_skills","choosing_skills"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 240</Link></p>
<p>Picking a monster's skills should be simple. Typically, a monster should have master skills that match its highest ability modifiers. For example, if you have a monster with a high Dexterity modifier, consider Acrobatics, Escape Artist, and Stealth when choosing its master skills. If you find yourself unsure of which skills to give a monster, or if you draw a blank after selecting a few especially important ones, you can skip the rest of the skills step. A table listing the skills appears below for easy reference. To make it faster to select a monster's spells, the table is divided into the most useful combat skills in the left-hand column and all other skills in the right-hand column. Combatants typically choose only combat skills.</p>
<h3 id="rule-choosing_skills-table-5-8-skills">Table 5-8: Skills</h3>
<ScrollContainer id="rule-choosing_skills--table-0"><table>
<thead>
<tr>
<th>Combat Skill</th>
<th>Noncombat Skill</th>
</tr>
</thead>
<tbody><tr>
<td>Acrobatics</td>
<td>Appraise</td>
</tr>
<tr>
<td>Climb</td>
<td>Bluff</td>
</tr>
<tr>
<td>Escape Artist</td>
<td>Craft</td>
</tr>
<tr>
<td>Fly</td>
<td>Diplomacy</td>
</tr>
<tr>
<td>Heal</td>
<td>Disable Device</td>
</tr>
<tr>
<td>Intimidate</td>
<td>Disguise</td>
</tr>
<tr>
<td>Perception*</td>
<td>Handle Animal</td>
</tr>
<tr>
<td>Ride</td>
<td>Knowledge (arcane)</td>
</tr>
<tr>
<td>Sleight of Hand</td>
<td>Knowledge (dungeoneering)</td>
</tr>
<tr>
<td>Spellcraft</td>
<td>Knowledge (engineering)</td>
</tr>
<tr>
<td>Stealth</td>
<td>Knowledge (geography)</td>
</tr>
<tr>
<td>Swim</td>
<td>Knowledge (history)</td>
</tr>
<tr>
<td>Use Magic Device</td>
<td>Knowledge (local)</td>
</tr>
<tr>
<td></td>
<td>Knowledge (nature)</td>
</tr>
<tr>
<td></td>
<td>Knowledge (nobility)</td>
</tr>
<tr>
<td></td>
<td>Knowledge (planes)</td>
</tr>
<tr>
<td></td>
<td>Knowledge (religion)</td>
</tr>
<tr>
<td></td>
<td>Linguistics</td>
</tr>
<tr>
<td></td>
<td>Perform</td>
</tr>
<tr>
<td></td>
<td>Profession</td>
</tr>
<tr>
<td></td>
<td>Sense Motive</td>
</tr>
<tr>
<td></td>
<td>Survival</td>
</tr>
</tbody></table></ScrollContainer>
<p>* Perception defaults to the good modifier for all monsters.</p>
</>};
const _step_9_damage = {title: "Step 9: Damage", parent_topics: ["advanced_gm_topics","simple_monster_creation"], siblings: ["step_1_array","step_2_creature_type_or_class_graft","step_3_subtype_graft","step_4_template_graft","step_5_size_graft","step_6_spells","step_7_monster_options","step_8_skills","step_9_damage","other_calculations","monster_creation_examples"], subtopics: ["assigning_damage","giving_a_monster_more_attacks"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 241</Link></p>
<p>Each weapon and type of natural attack has a damage dice value associated with it. The values in the monster arrays from Step 1 give only the total amount of damage each attack deals. Assigning the right damage dice to each of a monster's attacks helps make it fit more naturally with the rest of the game's rules. For damage dice for natural attacks, reference <Link to="/umr/natural_attacks">Table 3-1: Natural Attacks by Size</Link>.</p>
</>};
const _assigning_damage = {title: "Assigning Damage", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_9_damage"], siblings: ["assigning_damage","giving_a_monster_more_attacks"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 241</Link></p>
<p>For each of the monster's attacks, cross-reference the total amount of damage dealt with its appropriate die size on the table below. This will assign a value of damage dice to roll plus a flat modifier to the damage. Use these dice and modifiers to roll the attack's damage.</p>
<p>For example, if you have a CR 5 combatant using a weapon, its high damage value for a single attack is 11. If you give it a short sword (which deals 1d6 points of damage), you'd check the 9-11 row against the 1d6 column to get 1d6+7.</p>
<h3 id="rule-assigning_damage-table-5-9-damage-dice-values">Table 5-9: Damage Dice Values</h3>
<ScrollContainer id="rule-assigning_damage--table-0"><table>
<thead>
<tr>
<th>Damage</th>
<th>1d4</th>
<th>1d6</th>
<th>1d8</th>
<th>1d10</th>
<th>1d12</th>
<th>2d6</th>
<th>3d6</th>
</tr>
</thead>
<tbody><tr>
<td>4-5</td>
<td>1d4+2</td>
<td>1d6+1</td>
<td>1d8+0</td>
<td>1d10-1</td>
<td>1d12-2</td>
<td>2d6-3</td>
<td>3d6-5</td>
</tr>
<tr>
<td>6-8</td>
<td>1d4+5</td>
<td>1d6+4</td>
<td>1d8+3</td>
<td>1d10+2</td>
<td>1d12+1</td>
<td>2d6+0</td>
<td>3d6-2</td>
</tr>
<tr>
<td>9-11</td>
<td>1d4+8</td>
<td>1d6+7</td>
<td>1d8+6</td>
<td>1d10+5</td>
<td>1d12+4</td>
<td>2d6+3</td>
<td>3d6+1</td>
</tr>
<tr>
<td>12-14</td>
<td>1d4+11</td>
<td>1d6+10</td>
<td>1d8+9</td>
<td>1d10+8</td>
<td>1d12+7</td>
<td>2d6+6</td>
<td>3d6+4</td>
</tr>
<tr>
<td>15-17</td>
<td>1d4+14</td>
<td>1d6+13</td>
<td>1d8+12</td>
<td>1d10+11</td>
<td>1d12+10</td>
<td>2d6+9</td>
<td>3d6+7</td>
</tr>
<tr>
<td>18-20</td>
<td>1d4+17</td>
<td>1d6+16</td>
<td>1d8+15</td>
<td>1d10+14</td>
<td>1d12+13</td>
<td>2d6+12</td>
<td>3d6+10</td>
</tr>
<tr>
<td>21-23</td>
<td>1d4+20</td>
<td>1d6+19</td>
<td>1d8+18</td>
<td>1d10+17</td>
<td>1d12+16</td>
<td>2d6+15</td>
<td>3d6+13</td>
</tr>
<tr>
<td>24-26</td>
<td>1d4+23</td>
<td>1d6+22</td>
<td>1d8+21</td>
<td>1d10+20</td>
<td>1d12+19</td>
<td>2d6+18</td>
<td>3d6+16</td>
</tr>
<tr>
<td>27-29</td>
<td>1d4+26</td>
<td>1d6+25</td>
<td>1d8+24</td>
<td>1d10+23</td>
<td>1d12+22</td>
<td>2d6+21</td>
<td>3d6+19</td>
</tr>
<tr>
<td>30-32</td>
<td>1d4+29</td>
<td>1d6+28</td>
<td>1d8+27</td>
<td>1d10+26</td>
<td>1d12+25</td>
<td>2d6+24</td>
<td>3d6+22</td>
</tr>
<tr>
<td>33-35</td>
<td>1d4+32</td>
<td>1d6+31</td>
<td>1d8+30</td>
<td>1d10+29</td>
<td>1d12+28</td>
<td>2d6+27</td>
<td>3d6+25</td>
</tr>
<tr>
<td>36-38</td>
<td>1d4+35</td>
<td>1d6+34</td>
<td>1d8+33</td>
<td>1d10+32</td>
<td>1d12+31</td>
<td>2d6+30</td>
<td>3d6+28</td>
</tr>
<tr>
<td>39-41</td>
<td>1d4+38</td>
<td>1d6+37</td>
<td>1d8+36</td>
<td>1d10+35</td>
<td>1d12+34</td>
<td>2d6+33</td>
<td>3d6+31</td>
</tr>
<tr>
<td>42-44</td>
<td>1d4+41</td>
<td>1d6+40</td>
<td>1d8+39</td>
<td>1d10+38</td>
<td>1d12+37</td>
<td>2d6+36</td>
<td>3d6+34</td>
</tr>
<tr>
<td>45-47</td>
<td>1d4+44</td>
<td>1d6+43</td>
<td>1d8+42</td>
<td>1d10+41</td>
<td>1d12+40</td>
<td>2d6+39</td>
<td>3d6+37</td>
</tr>
<tr>
<td>48-50</td>
<td>1d4+47</td>
<td>1d6+46</td>
<td>1d8+45</td>
<td>1d10+44</td>
<td>1d12+43</td>
<td>2d6+42</td>
<td>3d6+40</td>
</tr>
<tr>
<td>51-53</td>
<td>1d4+50</td>
<td>1d6+49</td>
<td>1d8+48</td>
<td>1d10+47</td>
<td>1d12+46</td>
<td>2d6+45</td>
<td>3d6+43</td>
</tr>
<tr>
<td>54-56</td>
<td>1d4+53</td>
<td>1d6+52</td>
<td>1d8+51</td>
<td>1d10+50</td>
<td>1d12+49</td>
<td>2d6+48</td>
<td>3d6+46</td>
</tr>
<tr>
<td>57-59</td>
<td>1d4+56</td>
<td>1d6+55</td>
<td>1d8+54</td>
<td>1d10+53</td>
<td>1d12+52</td>
<td>2d6+51</td>
<td>3d6+49</td>
</tr>
<tr>
<td>60-62</td>
<td>1d4+59</td>
<td>1d6+58</td>
<td>1d8+57</td>
<td>1d10+56</td>
<td>1d12+55</td>
<td>2d6+54</td>
<td>3d6+52</td>
</tr>
<tr>
<td>63-65</td>
<td>1d4+62</td>
<td>1d6+61</td>
<td>1d8+60</td>
<td>1d10+59</td>
<td>1d12+58</td>
<td>2d6+57</td>
<td>3d6+55</td>
</tr>
<tr>
<td>66-68</td>
<td>1d4+65</td>
<td>1d6+64</td>
<td>1d8+63</td>
<td>1d10+62</td>
<td>1d12+61</td>
<td>2d6+60</td>
<td>3d6+58</td>
</tr>
<tr>
<td>69-71</td>
<td>1d4+68</td>
<td>1d6+67</td>
<td>1d8+66</td>
<td>1d10+65</td>
<td>1d12+64</td>
<td>2d6+63</td>
<td>3d6+61</td>
</tr>
<tr>
<td>72-74</td>
<td>1d4+71</td>
<td>1d6+70</td>
<td>1d8+69</td>
<td>1d10+68</td>
<td>1d12+67</td>
<td>2d6+66</td>
<td>3d6+64</td>
</tr>
<tr>
<td>75-77</td>
<td>1d4+74</td>
<td>1d6+73</td>
<td>1d8+72</td>
<td>1d10+71</td>
<td>1d12+70</td>
<td>2d6+69</td>
<td>3d6+67</td>
</tr>
<tr>
<td>78-80</td>
<td>1d4+77</td>
<td>1d6+76</td>
<td>1d8+75</td>
<td>1d10+74</td>
<td>1d12+73</td>
<td>2d6+72</td>
<td>3d6+70</td>
</tr>
<tr>
<td>81-83</td>
<td>1d4+80</td>
<td>1d6+79</td>
<td>1d8+78</td>
<td>1d10+77</td>
<td>1d12+76</td>
<td>2d6+75</td>
<td>3d6+73</td>
</tr>
<tr>
<td>84-86</td>
<td>1d4+83</td>
<td>1d6+82</td>
<td>1d8+81</td>
<td>1d10+80</td>
<td>1d12+79</td>
<td>2d6+78</td>
<td>3d6+76</td>
</tr>
<tr>
<td>87-89</td>
<td>1d4+86</td>
<td>1d6+85</td>
<td>1d8+84</td>
<td>1d10+83</td>
<td>1d12+82</td>
<td>2d6+81</td>
<td>3d6+79</td>
</tr>
<tr>
<td>90-92</td>
<td>1d4+89</td>
<td>1d6+88</td>
<td>1d8+87</td>
<td>1d10+86</td>
<td>1d12+85</td>
<td>2d6+84</td>
<td>3d6+82</td>
</tr>
<tr>
<td>93-95</td>
<td>1d4+92</td>
<td>1d6+91</td>
<td>1d8+90</td>
<td>1d10+89</td>
<td>1d12+88</td>
<td>2d6+87</td>
<td>3d6+85</td>
</tr>
<tr>
<td>96-98</td>
<td>1d4+95</td>
<td>1d6+94</td>
<td>1d8+93</td>
<td>1d10+92</td>
<td>1d12+91</td>
<td>2d6+90</td>
<td>3d6+88</td>
</tr>
<tr>
<td>99-101</td>
<td>1d4+98</td>
<td>1d6+97</td>
<td>1d8+96</td>
<td>1d10+95</td>
<td>1d12+94</td>
<td>2d6+93</td>
<td>3d6+91</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _giving_a_monster_more_attacks = {title: "Giving a Monster More Attacks", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_9_damage"], siblings: ["assigning_damage","giving_a_monster_more_attacks"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 241</Link></p>
<p>If a monster needs more attacks than the array allows, calculate the damage yourself. Start by combining the damage values in the monster's array: a monster that deals 20 points of damage with two natural attacks should deal 40 points of damage total. If the monster has a large number of secondary attacks (which are less likely to hit), increase the total damage value by 25% or 50%. Finally, divide the total among all attacks before using the table. You don't have to distribute it evenly if some attacks should deal less damage.</p>
<p>If you want to increase both the number of attacks and damage output, use the extra attack option instead.</p>
</>};
const _other_calculations = {title: "Other Calculations", parent_topics: ["advanced_gm_topics","simple_monster_creation"], siblings: ["step_1_array","step_2_creature_type_or_class_graft","step_3_subtype_graft","step_4_template_graft","step_5_size_graft","step_6_spells","step_7_monster_options","step_8_skills","step_9_damage","other_calculations","monster_creation_examples"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 195</Link></p>
<p>The monster statistics below aren't defined in the individual steps. Calculate them at the end of the process.</p>
<p><strong className="hl">CMB:</strong> A monster's CMB is equal to its high attack bonus.</p>
<p><strong className="hl">Concentration:</strong> For monsters that can cast spells, calculate the concentration bonus by adding the monster's CR and the most applicable ability modifier. For monsters with spell-like abilities, this is typically Charisma.</p>
<p><strong className="hl">Hit Dice:</strong> A monster created using this system uses its CR as its Hit Dice for any calculations that involve HD. Treat a monster with a CR lower than 1 as having 1 Hit Die.</p>
<p><strong className="hl">Initiative:</strong> Unless it's modified by the improved initiative options, a graft, or an ad hoc adjustment, a monster's initiative bonus is equal to its Dexterity modifier.</p>
<p><strong className="hl">Perception:</strong> Monsters automatically use the good skill modifier for Perception.</p>
<p><strong className="hl">Speed:</strong> Give the monster whatever speed and movement modes are appropriate. These don't cost monster options.</p>
<h3 id="rule-other_calculations-when-youre-done">When You're Done</h3>
<p>Compare your final monster to your initial concept. Its statistics should be close to those on <Link to="/rule/step_2_target_statistics">Table 1-1: Monster Statistics by CR</Link>. However, if you made a large number of adjustments to the monster's statistics, go over the results and make sure the monster matches your expectations before unleashing your creation!</p>
<h3 id="rule-other_calculations-the-golden-rule">The Golden Rule</h3>
<p>This system lets you quickly design a monster that's ready for use at the table, so it cuts some corners so that creating the monster doesn't require as many steps or calculations. This means you won't always get exactly what you want, and you'll need to eyeball the monster as it comes along to make sure it fits your concept. The golden rule of creating monsters is that you can change whatever you need to if it helps make the monster work the way you want.</p>
<p>If a monster needs more combat options than the grafts suggest, give it more. Give the monster extra spells if it's meant to have a more versatile selection. The natural attacks columns of the array tables go up to only three attacks, so if you have a creature with six tentacles, give it six attacks and use the average damage value from Table: Monster Statistics by CR to calculate the damage for each. All of these changes are fair game! Just keep an eye out for balance when you deviate from the baseline, and compensate elsewhere if necessary. The guidelines from Table: Monster Statistics by CR still apply for monsters created using this system.</p>
</>};
const _monster_creation_examples = {title: "Monster Creation Examples", parent_topics: ["advanced_gm_topics","simple_monster_creation"], siblings: ["step_1_array","step_2_creature_type_or_class_graft","step_3_subtype_graft","step_4_template_graft","step_5_size_graft","step_6_spells","step_7_monster_options","step_8_skills","step_9_damage","other_calculations","monster_creation_examples"], subtopics: ["extended_example_medusa","monster_examples"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 242</Link></p>
<p>To show the end result of the simple monster creation process described in this section, this section shows existing Pathfinder RPG monsters recreated using this system.</p>
</>};
const _extended_example_medusa = {title: "Extended Example: Medusa", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples"], siblings: ["extended_example_medusa","monster_examples"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 242</Link></p>
<p>This long-form example gives a detailed breakdown of monster creation from start to finish, resulting in a new medusa archer. This illustrates the steps of the process, and shows how to think about creating a monster using this variant system. Throughout, it compares the new medusa to the <Link to="/monster/medusa">original</Link>.</p>
<h3 id="rule-extended_example_medusa-monster-concept">Monster Concept</h3>
<p>The GM wants to create a monster much like the traditional medusa: a human-like creature with serpents for hair and the ability to turn her enemies to stone. He also wants to make her a skilled archer and focus on that set of abilities. He wants to use the medusa at the same level that she'd normally appear, so he chooses CR 7 (and the medusa's Hit Dice are treated as 7 as well). He knows some other basic details: the medusa is a lawful evil monstrous humanoid, her size is Medium, and she has a base speed of 30 feet.</p>
<p><strong className="hl">Step 1:</strong> Array</p>
<p>This medusa should be a formidable enemy, so the GM chooses the combatant array. He fills out her statistics from the CR 7 entry on <Link to="/rule/combatant_array">Table 5-1</Link>. She has AC 22, touch 13, flat-footed 16. Her saving throw bonuses are: Fortitude +8, Reflex +8, and Will +6. Her CMD is 24, and she has 93 hit points. The GM makes a note of all these statistics, and won't need to change any of them unless a later graft or option alters them.</p>
<p>Next, the GM makes a note of the remaining values he'll be deciding on later. The monster's special abilities will have a DC of 15. He doesn't plan to give her spells, so he skips the spell DC column. Since he's already pretty sure how he wants the medusa's ability modifiers to shake out, he gives her a +6 Dexterity modifier, a +4 Constitution modifier, and a +2 Charisma modifier. Her initiative ends up being +6, matching her Dexterity modifier. He marks down that he'll later pick one master skill with a +15 modifier and two good skills with +12 modifiers. In Step 7, he'll also pick one combat option and one option from any category.</p>
<p>The last things to record from the arrays are the medusa's attacks. He wants her to be best at ranged attacks, so he uses the high weapon attack column for a longbow attack, marking down attack bonuses of +13/+8 and noting that he'll later pick a value adding up to 22 points of damage. For her melee attacks, she uses the snakes that make up her hair, and the GM decides that she uses the low weapon attacks table since she's primarily focused on ranged attacks. He marks down a +10/+5 attack bonus that deals 16 points of damage.</p>
<p>Her attacks and damage are significantly stronger than those of the monster in the Bestiary. The GM decides to leave them this way for now, planning to compensate by weakening some of her other abilities in later steps.</p>
<p><strong className="hl">Step 2:</strong> Creature Type or Class Graft</p>
<p>Since the medusa is a monstrous humanoid, the GM applies the automatic traits for that creature type graft, giving her darkvision 60 feet. After toying with using the ranger class graft, he decides that doesn't really fit with his concept for the monster. Instead, he uses the monstrous humanoid graft, increasing the medusa's Reflex to +10 and Will to +8, and increasing her attack bonuses to +12/+7 for her snake hair attack and +15/+10 for the longbow. He looks at the elective adjustment of one additional good skill and decides not to give her the extra good skill.</p>
<p><strong className="hl">Steps 3-6:</strong> Skipped Steps</p>
<p>The medusa doesn't need a subtype, isn't based on a template, is size Medium, and doesn't have spells, so the GM skips steps 3 through 6. Most monsters created using this system will skip at least one or two steps of the monster creation process.</p>
<p><strong className="hl">Step 7:</strong> Monster Options</p>
<p>The GM is sure that he wants the medusa to have a petrifying gaze attack. Because the gaze option uses the same rules as the pre-existing <Link to="/umr/gaze">universal monster rule</Link>, the GM writes down a gaze with a 30-foot range that turns targets to stone permanently. He uses the ability DC from the combatant array: 15. This ability uses up the medusa's one combat option, leaving her with one option from any category. The GM adds poison to the snake bite attack, and decides that the medusa can apply it to her arrows too. Choosing the poison option gives him the base statistics of the poison plus two advantages, plus an additional two advantages since the medusa is CR 7. He ends up with a poison that is:</p>
<div className="sideNoteWrap startAlign"><ScrollContainer id="rule-extended_example_medusa--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}></td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/minute for 6 minutes</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d3 <Link to="/rule/str_damage">Str damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>2 consecutive saves</td></tr></tbody></table></ScrollContainer></div><p>This is pretty close to the poison in the Bestiary, though with a lower DC, which is what the GM wants. Though an ability such as all-around vision could be replicated by giving the medusa unflankable as a bonus monster option, the GM decides against that to help compensate for the medusa's stronger attacks.</p>
<p><strong className="hl">Step 8:</strong> Skills</p>
<p>The medusa will have one master skill and two good skills. The GM picks Perception as the master skill instead of leaving it at its default of good, since that fits an archer. The medusa now has Perception +15. For the good skills, he wants one social skill and one physical skill that uses the medusa's Dexterity, so he gives her Intimidate +12 and Stealth +12.</p>
<p><strong className="hl">Step 9:</strong> Damage</p>
<p>The longbow attack will deal a total of 22 points of damage, using a d8 damage die (since it's a longbow). The GM finds the 21-23 row and 1d8 column on Table 5-9: Damage Dice Values, learning that the attack should deal 1d8+18 points of damage. Thinking about it further, the GM wants to roll more damage dice, just to make the monster's damage a little more variable and sort of like the <Link to="/feat/manyshot">Manyshot</Link> feat. So instead, he uses 2d8+12. The melee attack will deal 16 points of damage using a d4, which turns out to be 1d4+14.</p>
<h3 id="rule-extended_example_medusa-reality-check">Reality Check</h3>
<p>Looking back over the monster, the GM thinks that the petrifying gaze plus the powerful attacks make the medusa too powerful. He decides that the part that seems strangest is the damage, particularly since the medusa uses a longbow and gets to deal poison with all her attacks. He decides to trim the damage down as though the medusa were 2 CR lower. The longbow attack now deals 2d8+6 points of damage, and the snake bite deals 1d4+8 points of damage.</p>
<h4 id="rule-extended_example_medusa-medusa">Medusa</h4>
<p><strong className="hl">CR/HD</strong> 7</p>
<p><strong>Init</strong> +6; <strong>Perception</strong> +15 (darkvision 60 ft.)<br/><strong>Size</strong> Medium; <strong>Speed</strong> 30 ft.</p>
<h5 id="rule-extended_example_medusa-defenses">Defenses</h5>
<p><strong>AC</strong> 22 (touch 13, flat-footed 16); <strong>Fort</strong> +8, <strong>Ref</strong> +10, <strong>Will</strong> +10; <strong>CMD</strong> 24<br/><strong>hp</strong> 93</p>
<h5 id="rule-extended_example_medusa-attacks">Attacks</h5>
<p><strong>Melee</strong> snake bite +12/+7 (1d4+8 plus poison)<br/><strong>Ranged</strong> longbow (range 100 ft.) +15/+10 (2d8+6/&times;3 plus poison)<br/><strong>Attack Options</strong> (DC 15) petrifying gaze (turn to stone permanently, 30 ft., Fort negates), poison (see below); <strong>CMB</strong> +13</p>
<h5 id="rule-extended_example_medusa-statistics">Statistics</h5>
<p><strong>Dex</strong> +6, <strong>Con</strong> +4, <strong>Cha</strong> +2; Intimidate +12, Stealth +12<br/><strong>XP</strong> 3,200; LE monstrous humanoid</p>
<div className="sideNoteWrap"><ScrollContainer id="rule-extended_example_medusa--table-1"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison; Injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}></td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/minute for 6 minutes</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d3 <Link to="/rule/str_damage">Str damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>2 consecutive saves</td></tr></tbody></table></ScrollContainer></div></>};
const _monster_examples = {title: "Monster Examples", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples"], siblings: ["extended_example_medusa","monster_examples"], subtopics: ["me_worg","me_mastodon","me_griffon","me_goblin_fighter","me_zombie_minotaur","me_bat_swarm","me_imp","me_fire_giant","me_satyr","me_frost_giant_explorer","me_vampire_cleric","me_ogre_mage","me_night_hag_soul_collector","me_marilith_general","me_ancient_blue_dragon","me_pit_fiend"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 243</Link></p>
<p>The following sections re-create monsters found in the Bestiary. Many of them are variants on the initial creatures, meant to mimic creatures with class levels or alternate ability sets. Each entry includes a breakdown of the significant choices made for the monster, discounting simple procedures such as selecting the attacks and damage for a monster that don't deviate from its array numbers. After each breakdown, the monster's statistics appear in a new format unique to this section, as described below. The monsters are presented in order from simplest to most complex. Some of the monsters that appear early on - particularly combatants - have a high CR but simple abilities, so they're still easy to create.</p>
<h3 id="rule-monster_examples-unchained-monster-statistics">Unchained Monster Statistics</h3>
<p>The monster statistics presented in this section use an alternate format meant to make important monster abilities easier to find. It removes the listings of any monster options or abilities that only increase existing values. For example, the extra armor option wouldn't be listed because the new AC values are already implemented.</p>
<p>In addition, each statistic block is divided into defenses, attacks, and statistics, with options and spells that fit into those categories appearing in the appropriate section. For example, instead of all a monster's spells appearing in one list, its offensive spells appear under attacks, and its defensive spells appear under defenses.</p>
<p>Subtopics are arranged with the most simple creations first and the more complex examples last.</p>
</>};
const _me_worg = {title: "Worg", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples","monster_examples"], siblings: ["me_worg","me_mastodon","me_griffon","me_goblin_fighter","me_zombie_minotaur","me_bat_swarm","me_imp","me_fire_giant","me_satyr","me_frost_giant_explorer","me_vampire_cleric","me_ogre_mage","me_night_hag_soul_collector","me_marilith_general","me_ancient_blue_dragon","me_pit_fiend"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 243</Link></p>
<p>The worg is easy to create since it's a simple monster.</p>
<p><strong className="hl">Array:</strong> The worg is a combatant. As a feral, vicious creature, it has a high Strength. The GM also decides that the worg should have an Intelligence modifier lower than 0.</p>
<p><strong className="hl">Creature Type:</strong> As a magical beast, the worg gains darkvision and low-light vision as automatic traits. Because it doesn't have a class graft, it also gains the statistics adjustments, increasing its Fortitude from +3 to +5, its Reflex from +3 to +5, and its attack bonus from +4 to +6.</p>
<p><strong className="hl">Options:</strong> The worg gets one combat option, and gains improved combat maneuver (trip).</p>
<p><strong className="hl">Skills:</strong> Because it's not a very smart creature, the worg's two good skills are both physical, but it gains Perception as its master skill.</p>
<h3 id="rule-me_worg-worg">Worg</h3>
<h4 id="rule-me_worg-crhd-2">CR/HD 2</h4>
<p><strong>Init</strong> +2; <strong>Perception</strong> +10 (darkvision 60 ft., low-light vision)<br/><strong>Size</strong> Medium; <strong>Speed</strong> 50 ft.</p>
<h4 id="rule-me_worg-defenses">Defenses</h4>
<p><strong>AC</strong> 16 (touch 12, flat-footed 12); <strong>Fort</strong> +5, <strong>Ref</strong> +5, <strong>Will</strong> +1<br/><strong>CMD</strong> 16 (20 vs. trip)<br/><strong>hp</strong> 22</p>
<h4 id="rule-me_worg-attacks">Attacks</h4>
<p><strong>Melee</strong> bite +6 (1d6+7 plus improved combat maneuver [trip])<br/><strong>CMB</strong> +4 (+8 trip)</p>
<h4 id="rule-me_worg-statistics">Statistics</h4>
<p><strong>Str</strong> +3, <strong>Dex</strong> +2, <strong>Con</strong> +1, <strong>Int</strong> -2; Stealth +7, Survival +7<br/><strong>XP</strong> 600; NE magical beast</p>
</>};
const _me_mastodon = {title: "Mastodon", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples","monster_examples"], siblings: ["me_worg","me_mastodon","me_griffon","me_goblin_fighter","me_zombie_minotaur","me_bat_swarm","me_imp","me_fire_giant","me_satyr","me_frost_giant_explorer","me_vampire_cleric","me_ogre_mage","me_night_hag_soul_collector","me_marilith_general","me_ancient_blue_dragon","me_pit_fiend"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 243</Link></p>
<p>As a big, dumb creature, the mastodon requires only a few adjustments despite its high CR.</p>
<p><strong className="hl">Array:</strong> The mastodon uses the combatant array. The GM adjusts its ability modifiers to +9, +4, and -1 instead of +7, +4, and +3 to reflect its major emphasis on Strength and its poor Dexterity.</p>
<p><strong className="hl">Creature Type:</strong> As an animal, the mastodon gains low-light vision and a -4 Intelligence modifier. It increases its Fortitude and Will +saves from +10 to +12.</p>
<p><strong className="hl">Size:</strong> Since it's Huge, the mastodon reduces its touch AC to 13 and increases its flat-footed AC to 21. It also increases its CMB to 21 and its CMD to 30.</p>
<p><strong className="hl">Options:</strong> The mastodon uses its combat option to gain improved combat maneuver (bull rush), which also adjusts its CMB to bull rush and its CMD against bull rush. It uses its any option for extra hit points, increasing its hp from 126 to 151.</p>
<p><strong className="hl">Skills:</strong> Since it's not very intelligent, the mastodon has master Perception but no other skills.</p>
<p><strong className="hl">Damage:</strong> The mastodon uses the two natural attacks column for its attacks and damage. The two attacks have the same average damage value, but use different damage dice.</p>
<h3 id="rule-me_mastodon-mastodon">Mastodon</h3>
<h4 id="rule-me_mastodon-crhd-9">CR/HD 9</h4>
<p><strong>Init</strong> -1; <strong>Perception</strong> +17 (low-light vision)<br/><strong>Size</strong> Huge (15 ft.); <strong>Speed</strong> 40 ft.</p>
<h4 id="rule-me_mastodon-defenses">Defenses</h4>
<p><strong>AC</strong> 25 (touch 13, flat-footed 21); <strong>Fort</strong> +12, <strong>Ref</strong> +12, <strong>Will</strong> +8; <strong>CMD</strong> 30 (33 vs. bull rush)<br/><strong>hp</strong> 151</p>
<h4 id="rule-me_mastodon-attacks">Attacks</h4>
<p><strong>Melee</strong> gore (reach 15 ft.) +17 (2d8+12), slam (reach 15 ft.) +17 (2d6+15)<br/><strong>Attack Options</strong> improved combat maneuver (bull rush)<br/><strong>CMB</strong> +21 (+25 bull rush)</p>
<h4 id="rule-me_mastodon-statistics">Statistics</h4>
<p><strong>Str</strong> +9, <strong>Dex</strong> -1, <strong>Con</strong> +4, <strong>Int</strong> -4<br/><strong>XP</strong> 6,400; N animal</p>
</>};
const _me_griffon = {title: "Griffon", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples","monster_examples"], siblings: ["me_worg","me_mastodon","me_griffon","me_goblin_fighter","me_zombie_minotaur","me_bat_swarm","me_imp","me_fire_giant","me_satyr","me_frost_giant_explorer","me_vampire_cleric","me_ogre_mage","me_night_hag_soul_collector","me_marilith_general","me_ancient_blue_dragon","me_pit_fiend"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 243</Link></p>
<p>A majestic aerial hunter, the griffon's only significant adjustments come from its type and size.</p>
<p><strong className="hl">Array:</strong> The griffon uses the combatant array. To reflect its balance between speed and toughness, the griffon has ability modifiers of +4, +2, and +2 instead of +4, +3, and +1.</p>
<p><strong className="hl">Creature Type:</strong> As a magical beast, the griffon gains darkvision 60 feet and low-light vision. Its Fortitude and Reflex bonuses both increase from +5 to +7, and its attack bonuses increase from +8 to +10 for its bite and from +3 to +5 for its talons.</p>
<p><strong className="hl">Size:</strong> Since it's Large, the griffon changes its touch AC from 12 to 11 and its flat-footed AC from 14 to 15. Its CMB increases from +10 to +12, and its CMD rises from 20 to 21.</p>
<p><strong className="hl">Options:</strong> The griffon spends both its options on combat options to gain pounce and rake.</p>
<p><strong className="hl">Skills:</strong> The griffon's master skill is Perception to reflect its keen vision, and its good skills in Acrobatics and Fly give it agility in the air.</p>
<h3 id="rule-me_griffon-griffon">Griffon</h3>
<h4 id="rule-me_griffon-crhd-4">CR/HD 4</h4>
<p><strong>Init</strong> +2; <strong>Perception</strong> +12 (darkvision 60 ft., low-light vision, scent)<br/><strong>Size</strong> Large (10 ft.); <strong>Speed</strong> 30 ft., fly 80 ft. (average)</p>
<h4 id="rule-me_griffon-defenses">Defenses</h4>
<p><strong>AC</strong> 19 (touch 11, flat-footed 15); <strong>Fort</strong> +7, <strong>Ref</strong> +7, <strong>Will</strong> +3; <strong>CMD</strong> 21<br/><strong>hp</strong> 44</p>
<h4 id="rule-me_griffon-attacks">Attacks</h4>
<p><strong>Melee</strong> bite +10 (1d6+10), 2 talons +5 (1d6+4)<br/><strong>Attack Options</strong> (DC 13) pounce, rake; <strong>CMB</strong> +12</p>
<h4 id="rule-me_griffon-statistics">Statistics</h4>
<p><strong>Str</strong> +4, <strong>Dex</strong> +2, <strong>Con</strong> +2, <strong>Int</strong> -3; Acrobatics +9, Fly +9<br/><strong>XP</strong> 1,200; N magical beast</p>
</>};
const _me_goblin_fighter = {title: "Goblin Fighter", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples","monster_examples"], siblings: ["me_worg","me_mastodon","me_griffon","me_goblin_fighter","me_zombie_minotaur","me_bat_swarm","me_imp","me_fire_giant","me_satyr","me_frost_giant_explorer","me_vampire_cleric","me_ogre_mage","me_night_hag_soul_collector","me_marilith_general","me_ancient_blue_dragon","me_pit_fiend"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 243</Link></p>
<p>The goblin fighter is a suitable minion for any overlord, provided it doesn't burn the fortress down.</p>
<p><strong className="hl">Array:</strong> The goblin fighter is a combatant, as required by the fighter class graft.</p>
<p><strong className="hl">Creature Type:</strong> Because of the fighter class graft, the goblin does not gain anything from the humanoid type.</p>
<p><strong className="hl">Class:</strong> As a fighter, the goblin increases both its Fortitude and Reflex bonuses from +1 to +2. It also receives one combat option from its fighter graft.</p>
<p><strong className="hl">Subtype:</strong> The goblin fighter gains Stealth as a good skill from the goblinoid subtype.</p>
<p><strong className="hl">Size:</strong> The goblin's Small size increases its touch AC and flat-footed AC by 1, reduces its CMB by 2, and reduces its CMD by 1. It gains Stealth as a good skill (again; see below).</p>
<p><strong className="hl">Options:</strong> A fighter of this CR typically gets one combat option, but this goblin has two additional options to reflect its quick combat style. The accuracy, dodge expert, and improved initiative options are all calculated in the goblin fighter's statistics. The adjustment to flat-footed AC from dodge expert would have made the goblin's flat-footed AC too low for a monster at this CR, so the goblin gains only a +1 bonus to touch AC and no penalty to its flat-footed AC. Goblins are able to see in the dark, so the goblin gains the darkvision option. As usual, adding a sense didn't count against the goblin's number of options.</p>
<p><strong className="hl">Skills:</strong> The goblin already gets Stealth as a good skill from both the goblinoid and Small grafts, so instead it was discretionarily given Stealth as a second master skill.</p>
<h3 id="rule-me_goblin_fighter-goblin-fighter">Goblin Fighter</h3>
<h4 id="rule-me_goblin_fighter-crhd-12">CR/HD 1/2</h4>
<p><strong>Init</strong> +7; <strong>Perception</strong> +5 (darkvision 60 ft.)<br/><strong>Size</strong> Small; <strong>Speed</strong> 30 ft.</p>
<h4 id="rule-me_goblin_fighter-defenses">Defenses</h4>
<p><strong>AC</strong> 15 (touch 14, flat-footed 13); <strong>Fort</strong> +2, <strong>Ref</strong> +2, <strong>Will</strong> +0; <strong>CMD</strong> 12<br/><strong>hp</strong> 11</p>
<h4 id="rule-me_goblin_fighter-attacks">Attacks</h4>
<p><strong>Melee</strong> short sword +3 (1d4+2/19-20)<br/><strong>Ranged</strong> shortbow (range 60 ft.) +3 (1d4+2/&times;3)<br/><strong>CMB</strong> +1</p>
<h4 id="rule-me_goblin_fighter-statistics">Statistics</h4>
<p><strong>Str</strong> +2, <strong>Dex</strong> +3, <strong>Con</strong> +1, <strong>Cha</strong> -2; Ride +8, Stealth +8, Swim +5<br/><strong>XP</strong> 200; CE humanoid (goblinoid) fighter 1</p>
</>};
const _me_zombie_minotaur = {title: "Zombie Minotaur", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples","monster_examples"], siblings: ["me_worg","me_mastodon","me_griffon","me_goblin_fighter","me_zombie_minotaur","me_bat_swarm","me_imp","me_fire_giant","me_satyr","me_frost_giant_explorer","me_vampire_cleric","me_ogre_mage","me_night_hag_soul_collector","me_marilith_general","me_ancient_blue_dragon","me_pit_fiend"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 243</Link></p>
<p>Some templates have complicated alterations, but the zombie template is fairly easy to apply.</p>
<p><strong className="hl">Array:</strong> The zombie uses the combatant array, as suggested in the zombie template.</p>
<p><strong className="hl">Creature Type:</strong> The undead graft gives the creature darkvision 60 feet and undead immunities, and sets its Constitution to -. It also increases the minotaur's Will +save from +1 to +3. The elective adjustments for mindless undead will be covered by the template graft.</p>
<p><strong className="hl">Template:</strong> The zombie template makes the minotaur staggered, changes its Intelligence to -, gives it DR 5/slashing, and gives it the extra hit points option to represent a zombie's resilience.</p>
<p><strong className="hl">Size:</strong> As a Large creature, the minotaur changes its touch AC from 12 to 11 and its flat-footed AC from 12 to 13. Its CMB increases from +2 to +4, and its CMD goes from 14 to 15.</p>
<p><strong className="hl">Options:</strong> The extra hit points option from the zombie template increases the zombie's hp from 16 to 19. Although the zombie template adds more options than the monster would normally have, the zombie still gains the powerful charge option to keep the minotaur feel.</p>
<h3 id="rule-me_zombie_minotaur-zombie-minotaur">Zombie Minotaur</h3>
<h4 id="rule-me_zombie_minotaur-crhd-1">CR/HD 1</h4>
<p><strong>Init</strong> +0; <strong>Perception</strong> +6 (darkvision 60 ft.)<br/><strong>Size</strong> Large (10 ft.); <strong>Speed</strong> 30 ft.</p>
<h4 id="rule-me_zombie_minotaur-defenses">Defenses</h4>
<p><strong>AC</strong> 14 (touch 11, flat-footed 13); <strong>Fort</strong> +2, <strong>Ref</strong> +2, <strong>Will</strong> +3; <strong>CMD</strong> 15<br/><strong>hp</strong> 19; <strong>DR</strong> 5/slashing; <strong>Immune</strong> undead immunities<br/><strong>Weakness</strong> staggered</p>
<h4 id="rule-me_zombie_minotaur-attacks">Attacks</h4>
<p><strong>Melee</strong> gore (reach 10 ft.) +2 (1d6+4) or slam (reach 10 ft.) +2 (1d8+3)<br/><strong>Attack Options</strong> powerful charge; <strong>CMB</strong> +4</p>
<h4 id="rule-me_zombie_minotaur-statistics">Statistics</h4>
<p><strong>Str</strong> +3, <strong>Con</strong> -, <strong>Int</strong> -, <strong>Wis</strong> +1, <strong>Cha</strong> +2<br/><strong>XP</strong> 400; NE undead</p>
</>};
const _me_bat_swarm = {title: "Bat Swarm", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples","monster_examples"], siblings: ["me_worg","me_mastodon","me_griffon","me_goblin_fighter","me_zombie_minotaur","me_bat_swarm","me_imp","me_fire_giant","me_satyr","me_frost_giant_explorer","me_vampire_cleric","me_ogre_mage","me_night_hag_soul_collector","me_marilith_general","me_ancient_blue_dragon","me_pit_fiend"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 243</Link></p>
<p>The bat swarm is straightforward to create, but its swarm subtype is complicated and grants it additional features that make it unlike other monsters.</p>
<p><strong className="hl">Array:</strong> Since a bat swarm is made up of creatures with only animal intelligence, the combatant array is the only choice for it that makes sense.</p>
<p><strong className="hl">Creature Type:</strong> The animal type increases the bat swarm's Fortitude and Reflex bonuses each from +3 to +5 and grants low-light vision, but it mandates an Intelligence modifier of either -4 or -5. Bats are slightly more intelligent than some other animals, so they have a -4 modifier.</p>
<p><strong className="hl">Subtype:</strong> The swarm subtype grants the bat swarm its various immunities, vulnerability to area effects, swarm traits, swarm attack, and distraction.</p>
<p><strong className="hl">Size:</strong> The bat swarm is made up of many Diminutive creatures, so it gains a +4 bonus to touch and flat-footed AC. As a swarm, it doesn't have CMB or CMD, so the size adjustments to those numbers are ignored. It also gains Fly and Stealth as master skills.</p>
<p><strong className="hl">Options:</strong> The bat swarm's option is a weaker variant of the bleed attack option.</p>
<p><strong className="hl">Skills:</strong> Other than the master skills from size, the bat swarm's echolocation enhances its ability to notice things, so it gets Perception as a master skill. That's already plenty of skills for an animal, so the bat swarm doesn't have any good skills.</p>
<h3 id="rule-me_bat_swarm-bat-swarm">Bat Swarm</h3>
<h4 id="rule-me_bat_swarm-crhd-2">CR/HD 2</h4>
<p><strong>Init</strong> +3; <strong>Perception</strong> +10 (blindsense 20 ft., low-light vision)<br/><strong>Size</strong> Diminutive (10 ft.); <strong>Speed</strong> 5 ft., fly 40 ft. (good)</p>
<h4 id="rule-me_bat_swarm-defenses">Defenses</h4>
<p><strong>AC</strong> 16 (touch 16, flat-footed 16); <strong>Fort</strong> +5, <strong>Ref</strong> +5, <strong>Will</strong> +1<br/><strong>hp</strong> 22; <strong>Immune</strong> bull rush, critical hits, flanking, grapple, spells that target a specific number of creatures, trip, weapon damage<br/><strong>Weakness</strong> +50% damage from area effects<br/><strong>Defense Options</strong> swarm traits</p>
<h4 id="rule-me_bat_swarm-attacks">Attacks</h4>
<p><strong>Melee</strong> swarm (all targets in the swarm's space) always hits (1d6 plus 1 bleed)<br/><strong>Attack Options</strong> (DC 11) distraction</p>
<h4 id="rule-me_bat_swarm-statistics">Statistics</h4>
<p><strong>Str</strong> -4, <strong>Dex</strong> +3, <strong>Con</strong> +1, <strong>Int</strong> -4, <strong>Wis</strong> +2; Fly +10, Stealth +10<br/><strong>XP</strong> 600; N animal (swarm)</p>
</>};
const _me_imp = {title: "Imp", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples","monster_examples"], siblings: ["me_worg","me_mastodon","me_griffon","me_goblin_fighter","me_zombie_minotaur","me_bat_swarm","me_imp","me_fire_giant","me_satyr","me_frost_giant_explorer","me_vampire_cleric","me_ogre_mage","me_night_hag_soul_collector","me_marilith_general","me_ancient_blue_dragon","me_pit_fiend"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 243</Link></p>
<p>A vexing adversary, this imp has a variety of extra options to confound its enemies.</p>
<p><strong className="hl">Array:</strong> The imp uses the expert array, with the Reflex and Will saves swapped. The imp has a Strength modifier of -4 because its size and build make it so physically weak.</p>
<p><strong className="hl">Creature Type:</strong> The outsider graft gives the imp darkvision 60 feet, increases its Will saving throw from +1 to +3, and increases its attack bonus from +4 to +6. It gains the additional master skill mentioned under elective adjustments.</p>
<p><strong className="hl">Subtype:</strong> The devil subtype gives the imp the see in darkness sense, energy resistance 10 to acid and cold, immunity to fire and poison, the summon allies option, and telepathy to a range of 100 feet.</p>
<p><strong className="hl">Size:</strong> Because the imp is Tiny, its touch and flat-footed AC increased from 10 to 12.</p>
<p><strong className="hl">Spells:</strong> The secondary magic option gives the imp some spell-like abilities.</p>
<p><strong className="hl">Options:</strong> Instead of the single monster option that would be normal for an expert of its CR, the imp has a total of five options: change shape, dodge expert, poison, and modified versions of constant invisibility and secondary magic. Dodge expert changes the imp's AC from 14 (touch 12, flat-footed 12) to 16 (touch 16, flat-footed 10). By the numbers, the imp's flat-footed AC would drop to 6, but the GM sets it as 10 as part of the reality checking process. For its poison, the imp gets two advantages, which were used to remove the onset time and change the frequency to 1/round for 6 rounds. Instead of the normal effect of constant invisibility, the imp gains invisibility at will, affecting only itself. The modified secondary magic option gives the imp one once-per-day spell and two constant spells instead of two once-per-day spells.</p>
<p><strong className="hl">Skills:</strong> The imp has an extra master skill from the outsider graft, and gains Fly and Stealth from its size graft. The +10 bonus from change shape is included in the Disguise skill.</p>
<p><strong className="hl">Damage:</strong> The imp uses the low damage value on its sting to compensate for being a low-CR creature with poison.</p>
<h3 id="rule-me_imp-imp">Imp</h3>
<h4 id="rule-me_imp-crhd-2">CR/HD 2</h4>
<p><strong>Init</strong> +3; <strong>Perception</strong> +7 (darkvision 60 ft., see in darkness)<br/><strong>Size</strong> Tiny (2-1/2 ft.); <strong>Speed</strong> 20 ft., fly 50 ft. (perfect)</p>
<h4 id="rule-me_imp-defenses">Defenses</h4>
<p><strong>AC</strong> 16 (touch 16, flat-footed 6); <strong>Fort</strong> +1, <strong>Ref</strong> +5, <strong>Will</strong> +3; <strong>CMD</strong> 14; <strong>Concentration</strong> +4<br/><strong>hp</strong> 20; <strong>Immune</strong> fire, poison; <strong>Resist</strong> acid 10, cold 10</p>
<h4 id="rule-me_imp-attacks">Attacks</h4>
<p><strong>Melee</strong> sting (reach 0 ft.) +6 (1d4+5 plus poison)<br/><strong>Attack Spell-Like Abilities</strong> (DC 13 + spell's level) 1/day-suggestion<br/><strong>Attack Options</strong> (DC 13) poison (see below); <strong>CMB</strong> +2</p>
<h4 id="rule-me_imp-statistics">Statistics</h4>
<p><strong>Utility Spell-Like Abilities</strong> constant-detect good, detect magic; at will-invisibility (self only)<br/><strong>Utility Options</strong> change shape (boar, giant spider, rat, or raven, beast shape I), summon allies (imp, 35%) Str -4, <strong>Dex</strong> +3, <strong>Int</strong> +1, <strong>Cha</strong> +2; Acrobatics +10, Bluff +10, Disguise +12, Fly +10, Knowledge (arcana) +7, Knowledge (planes) +7, Stealth +10; telepathy 100 ft.<br/><strong>XP</strong> 600; LE outsider (devil, evil, extraplanar, lawful)</p>
<div className="sideNoteWrap"><ScrollContainer id="rule-me_imp--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison; Injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}></td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/minute for 6 minutes</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d2 <Link to="/rule/dex_damage">Dex damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div></>};
const _me_fire_giant = {title: "Fire Giant", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples","monster_examples"], siblings: ["me_worg","me_mastodon","me_griffon","me_goblin_fighter","me_zombie_minotaur","me_bat_swarm","me_imp","me_fire_giant","me_satyr","me_frost_giant_explorer","me_vampire_cleric","me_ogre_mage","me_night_hag_soul_collector","me_marilith_general","me_ancient_blue_dragon","me_pit_fiend"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 243</Link></p>
<p>This monster uses different gear than the Bestiary fire giant, but has the same CR.</p>
<p><strong className="hl">Array:</strong> The fire giant uses the combatant array.</p>
<p><strong className="hl">Creature Type:</strong> As a humanoid, the giant increases its Fort +save from +11 to +13.</p>
<p><strong className="hl">Subtype:</strong> The giant graft gives the giant low-light vision and adds Intimidate as a good skill.</p>
<p><strong className="hl">Size:</strong> Being Large changes the giant's touch AC from 15 to 14 and its flat-footed AC from 19 to 20. The giant's CMB increases from +18 to +20.</p>
<p><strong className="hl">Options:</strong> The monster has one combat option and one of any type. The extra armor option alters the giant's AC to 28 (touch 8, flat-footed 24) and makes its speed 30 feet instead of 40 feet. The magic weapon (bane) option causes the giant's greataxe to deal additional damage to dwarves. The monster has rock throwing as a bonus option, and 3 points of that attack's bludgeoning damage have been replaced with 1d6 points of fire damage since the giant heats the rocks.</p>
<p><strong className="hl">Skills:</strong> This giant is primarily a brute, so its master skill in Climb and the good skill from the giant subtype are sufficient to cover its skills. The GM ignores the remaining two good skills from the combatant array.</p>
<p><strong className="hl">Damage:</strong> The giant is less adept at ranged attacks, so its rock throw attack uses low attack and damage values.</p>
<h3 id="rule-me_fire_giant-fire-giant">Fire Giant</h3>
<h4 id="rule-me_fire_giant-crhd-10">CR/HD 10</h4>
<p><strong>Init</strong> +0; <strong>Perception</strong> +14 (low-light vision)<br/><strong>Size</strong> Large (10 ft.); <strong>Speed</strong> 30 ft.</p>
<h4 id="rule-me_fire_giant-defenses">Defenses</h4>
<p><strong>AC</strong> 28 (touch 8, flat-footed 24); <strong>Fort</strong> +13, <strong>Ref</strong> +11, <strong>Will</strong> +9; <strong>CMD</strong> 30<br/><strong>hp</strong> 143; <strong>Immune</strong> fire<br/><strong>Weakness</strong> vulnerability to cold<br/><strong>Defensive Options</strong> rock throwing</p>
<h4 id="rule-me_fire_giant-attacks">Attacks</h4>
<p><strong>Melee</strong> dwarf-bane greataxe (reach 10 ft.) +18/+13/+8 (3d6+19/&times;3 [+2d6 against dwarves]) or 2 slams (reach 10 ft.) +18 (1d8+21)<br/><strong>Ranged</strong> rock (range 120 ft.) +13 (1d8+15 plus 1d6 fire)<br/><strong>CMB</strong> +20</p>
<h4 id="rule-me_fire_giant-statistics">Statistics</h4>
<p><strong>Str</strong> +7, <strong>Con</strong> +5, <strong>Wis</strong> +3; Climb +18, Intimidate +14 XP 9,600; LE humanoid (fire, giant)</p>
</>};
const _me_satyr = {title: "Satyr", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples","monster_examples"], siblings: ["me_worg","me_mastodon","me_griffon","me_goblin_fighter","me_zombie_minotaur","me_bat_swarm","me_imp","me_fire_giant","me_satyr","me_frost_giant_explorer","me_vampire_cleric","me_ogre_mage","me_night_hag_soul_collector","me_marilith_general","me_ancient_blue_dragon","me_pit_fiend"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 243</Link></p>
<p>With its unique pipes, the satyr requires a custom ability not included in the monster options.</p>
<p><strong className="hl">Array:</strong> As a skillful social creature with a magical bent, the satyr uses the expert array with options to cover its magical abilities.</p>
<p><strong className="hl">Creature Type:</strong> Because of the fey graft, the satyr gains low-light vision. It increases its Reflex from +3 to +5 and its Will +from +7 to +9. Its attack bonuses drop from +8 to +6. It has the elective adjustment that grants one additional master skill.</p>
<p><strong className="hl">Spells:</strong> The satyr can channel magical effects through his pipes, so he gains his spells as spell-like abilities. These are chosen on a case-by-case basis instead of using a spell list.</p>
<p><strong className="hl">Options:</strong> The satyr uses its one social option for persuasive, uses its any option for damage reduction, and has a bonus pipes ability. Pipes doesn't have a corresponding monster option because it's so specific to satyrs. It's a custom ability based on the Bestiary satyr's pipes, but simplified and using the standard ability DC for the satyr's CR.</p>
<p><strong className="hl">Skills:</strong> Due to being a fey with the expert array, the satyr has four master skills and two good skills.</p>
<p><strong className="hl">Damage:</strong> Instead of having a dagger attack like the satyr in the Bestiary, this one uses only its horn attack in melee. The satyr's ranged attacks use the low damage value (but the high attack value).</p>
<h3 id="rule-me_satyr-satyr">Satyr</h3>
<h4 id="rule-me_satyr-crhd-4">CR/HD 4</h4>
<p><strong>Init</strong> +3; <strong>Perception</strong> +12 (low-light vision)<br/><strong>Size</strong> Medium; <strong>Speed</strong> 40 ft.</p>
<h4 id="rule-me_satyr-defenses">Defenses</h4>
<p><strong>AC</strong> 17 (touch 10, flat-footed 12); <strong>Fort</strong> +3, <strong>Ref</strong> +5, <strong>Will</strong> +9; <strong>CMD</strong> 18<br/><strong>hp</strong> 40; <strong>DR</strong> 5/cold iron</p>
<h4 id="rule-me_satyr-attacks">Attacks</h4>
<p><strong>Melee</strong> horns +6 (1d6+13)<br/><strong>Ranged</strong> shortbow (range 60 ft.) +6 (1d6+10/&times;3) Attack Spell-Like Abilities (DC 14 + spell's level) 1/day-fear; at will-charm person, sleep, suggestion<br/><strong>Attack Options</strong> (DC 15) pipes; <strong>CMB</strong> +6</p>
<h4 id="rule-me_satyr-statistics">Statistics</h4>
<p><strong>Utility Options</strong> persuasive<br/><strong>Dex</strong> +3, <strong>Wis</strong> +1, <strong>Cha</strong> +4; Bluff +12, Diplomacy +9, Intimidate +9, Perform (wind) +12, Stealth +12<br/><strong>XP</strong> 1,200; CN fey</p>
<h4 id="rule-me_satyr-special-abilities">Special Abilities</h4>
<p><strong>Pipes (Su):</strong> A satyr can play haunting melodies on his panpipes to affect all creatures within a 60-foot radius with a spell (Will +DC 15 negates). Each time it uses this ability, the satyr chooses charm person, fear, sleep, or suggestion. A creature that succeeds at its save can't be affected by the same set of pipes for 24 hours.</p>
</>};
const _me_frost_giant_explorer = {title: "Frost Giant Explorer", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples","monster_examples"], siblings: ["me_worg","me_mastodon","me_griffon","me_goblin_fighter","me_zombie_minotaur","me_bat_swarm","me_imp","me_fire_giant","me_satyr","me_frost_giant_explorer","me_vampire_cleric","me_ogre_mage","me_night_hag_soul_collector","me_marilith_general","me_ancient_blue_dragon","me_pit_fiend"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 243</Link></p>
<p>This creature has access to nature magic, much like a druid would. However, turning it into a spellcaster would make it feel unlike a burly frost giant. Instead, this stat block starts with the combatant array and draws inspiration from the options of the druid class graft. This monster is meant to fight alongside a mastodon as a CR 13 encounter.</p>
<p><strong className="hl">Array:</strong> The frost giant uses the combatant array and gains its spellcasting from its magic options. Its Reflex and Will +save bonuses are swapped.</p>
<p><strong className="hl">Creature Type:</strong> Because the monster's saving throws are uniformly high, it has a -2 penalty to Reflex instead of increasing any save from the humanoid graft.</p>
<p><strong className="hl">Class:</strong> Though the giant doesn't use the druid graft, many of its options are drawn from there.</p>
<p><strong className="hl">Subtype:</strong> The giant subtype grants low-light vision and gives Intimidate as a good skill.</p>
<p><strong className="hl">Size:</strong> Because it's Large, the giant decreases its touch AC from 17 to 16 and raises its flat-footed AC from 21 to 22. Its CMB changes from +21 to +23, and its CMD goes from 32 to 33.</p>
<p><strong className="hl">Spells:</strong> The giant gains a few spells from the Animal spell list due to the secondary magic option. Even though that option says to take the primary spells from the spell lists, it's reasonable to pick and choose from among both the primary and secondary spells of the monster's CR band, as was done here.</p>
<p><strong className="hl">Options:</strong> Instead of one of its combat options, the giant gains the powerful summons magic option. It spends its other combat option on rock throwing and its any option on secondary magic.</p>
<p><strong className="hl">Skills:</strong> With its good skill from the giant subtype, the explorer has only one master skill, but a well-rounded set of good skills.</p>
<p><strong className="hl">Damage:</strong> The giant's thrown rock attack uses the low attack and damage values.</p>
<h3 id="rule-me_frost_giant_explorer-frost-giant-explorer">Frost Giant Explorer</h3>
<h4 id="rule-me_frost_giant_explorer-crhd-12">CR/HD 12</h4>
<p><strong>Init</strong> +0; <strong>Perception</strong> +16 (low-light vision)<br/><strong>Size</strong> Large (10 ft.); <strong>Speed</strong> 40 ft.; <strong>Special Movement</strong> terrain stride (ice)</p>
<h4 id="rule-me_frost_giant_explorer-defenses">Defenses</h4>
<p><strong>AC</strong> 29 (touch 16, flat-footed 22); <strong>Fort</strong> +13, <strong>Ref</strong> +9, <strong>Will</strong> +13; <strong>CMD</strong> 33; <strong>Concentration</strong> +17<br/><strong>hp</strong> 176; <strong>Immune</strong> cold<br/><strong>Weakness</strong> vulnerability to fire<br/><strong>Defensive Options</strong> rock throwing</p>
<h4 id="rule-me_frost_giant_explorer-attacks">Attacks</h4>
<p><strong>Melee</strong> spear (reach 10 ft.) +21/+16/+11 (2d6+27/&times;3) or 2 slams (reach 10 ft.) +21 (1d8+27)<br/><strong>Ranged</strong> rock (range 120 ft.) +15 (1d8+21)<br/><strong>CMB</strong> +23</p>
<h4 id="rule-me_frost_giant_explorer-statistics">Statistics</h4>
<p><strong>Utility Spells</strong> 1/day-beast shape IV (animal only), summon nature's ally VII<br/><strong>Utility Options</strong> powerful summons<br/><strong>Str</strong> +8, <strong>Con</strong> +4, <strong>Wis</strong> +5; Climb +16, Intimidate +16, Knowledge (nature) +20, Survival +16<br/><strong>XP</strong> 19,200; CE humanoid (cold, giant)</p>
</>};
const _me_vampire_cleric = {title: "Vampire Cleric", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples","monster_examples"], siblings: ["me_worg","me_mastodon","me_griffon","me_goblin_fighter","me_zombie_minotaur","me_bat_swarm","me_imp","me_fire_giant","me_satyr","me_frost_giant_explorer","me_vampire_cleric","me_ogre_mage","me_night_hag_soul_collector","me_marilith_general","me_ancient_blue_dragon","me_pit_fiend"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 243</Link></p>
<p>For an alternative to the vampire sorcerer in the Bestiary, this vampire is a cleric of a slightly higher CR.</p>
<p><strong className="hl">Array:</strong> This creature uses the spellcaster array so it can take the cleric class graft.</p>
<p><strong className="hl">Creature Type:</strong> As indicated in the vampire template graft, the vampire must have the undead type. Because it will have the cleric class graft, the vampire gains only the automatic traits from the undead type: darkvision 60 feet, undead immunities, and a Constitution of -.</p>
<p><strong className="hl">Class:</strong> The cleric class graft increases the vampire's Fortitude save from +10 to +12 and gives it Knowledge (religion) as a master skill. It automatically gains the channel energy and spontaneous casting options.</p>
<p><strong className="hl">Subtype:</strong> The vampire has the augmented humanoid subtype, though this doesn't alter its abilities.</p>
<p><strong className="hl">Template:</strong> The vampire template graft increases the vampire's AC from 23 to 25 and flat-footed AC from 17 to 19. The vampire also gains spider climb as a constant spell-like ability and gets vampire weaknesses. The template gives a large number of options: at-will magic (dominate person), blood drain, change shape, channel resistance, children of the night, create spawn, damage reduction, energy drain, energy resistance 10 (cold and electricity), fast healing 5, and gaseous form. Because the vampire has DR and so many healing abilities, its hit points are calculated as though its CR were 2 lower, giving it 103 hp.</p>
<p><strong className="hl">Spells:</strong> Because of its violent and cruel nature, this cleric mixes the Evil and War domain spell lists instead of taking spells from one list exclusively. The monster has the special ability from only the War spell list, which increases its attack bonuses by 1.</p>
<p><strong className="hl">Options:</strong> As a cleric, the monster would normally have one additional option (of any type) beyond what it has here. However, because the monster gains so many abilities from being a vampire, adding yet another option is unnecessary.</p>
<p><strong className="hl">Skills:</strong> Because of the vampire template, this creature has Bluff, Perception, Sense Motive, and Stealth as master skills. The +10 bonus from change shape is included in the Disguise skill.</p>
<p><strong className="hl">Damage:</strong> The slam attack uses the low damage value since it can also bestow negative levels and heal the vampire. The vampire's ranged attack uses the low attack and damage values.</p>
<h3 id="rule-me_vampire_cleric-vampire-cleric">VAMPIRE CLERIC</h3>
<h4 id="rule-me_vampire_cleric-crhd-11">CR/HD 11</h4>
<p><strong>Init</strong> +2; <strong>Perception</strong> +19 (darkvision 60 ft.)<br/><strong>Size</strong> Medium; <strong>Speed</strong> 30 ft.; <strong>Special Movement</strong> spider climb (constant)</p>
<h4 id="rule-me_vampire_cleric-defenses">Defenses</h4>
<p><strong>AC</strong> 25 (touch 13, flat-footed 19); <strong>Fort</strong> +12, <strong>Ref</strong> +10, <strong>Will</strong> +14; <strong>CMD</strong> 26; <strong>Concentration</strong> +20<br/><strong>hp</strong> 103; fast healing 5; <strong>DR</strong> 10/magic and silver; <strong>Immune</strong> undead immunities; <strong>Resist</strong> cold 10, electricity 10<br/><strong>Weakness</strong> vampire weaknesses<br/><strong>Defensive Options</strong> channel resistance +4</p>
<h4 id="rule-me_vampire_cleric-attacks">Attacks</h4>
<p><strong>Melee</strong> scythe +20/+15 (2d4+25/&times;4) or slam +20 (1d4+20 plus energy drain [2 negative levels])<br/><strong>Ranged</strong> light crossbow (range 80 ft.) +15 (1d8+22/19-20)<br/><strong>Attack Spells</strong> (DC 17 + spell's level) 1/day-dispel good, slay living; 3/day-bestow curse, spiritual weapon; at will-bane, dominate person, inflict light wounds<br/><strong>Attack Options</strong> blood drain, channel energy (negative energy), spontaneous casting (inflict); <strong>CMB</strong> +20</p>
<h4 id="rule-me_vampire_cleric-statistics">Statistics</h4>
<p><strong>Utility Spells</strong> 3/day-darkness, prayer; at will-change shape (dire bat or wolf, beast shape II)<br/><strong>Utility Options</strong> children of the night, create spawn, gaseous form<br/><strong>Str</strong> +8, <strong>Con</strong> -, <strong>Dex</strong> +2, <strong>Int</strong> +1, <strong>Wis</strong> +9, <strong>Cha</strong> +5; Bluff +19, Disguise +15, Knowledge (religion) +19, Sense Motive +19, Stealth +19<br/><strong>XP</strong> 12,800; CE undead (augmented humanoid) cleric 10</p>
</>};
const _me_ogre_mage = {title: "Ogre Mage", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples","monster_examples"], siblings: ["me_worg","me_mastodon","me_griffon","me_goblin_fighter","me_zombie_minotaur","me_bat_swarm","me_imp","me_fire_giant","me_satyr","me_frost_giant_explorer","me_vampire_cleric","me_ogre_mage","me_night_hag_soul_collector","me_marilith_general","me_ancient_blue_dragon","me_pit_fiend"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 243</Link></p>
<p>The ogre mage oni are devious shapeshifters who combine martial prowess with magical threats.</p>
<p><strong className="hl">Array:</strong> The ogre mage's consistent fallback strategy is its mighty greatsword, so it uses the combatant array. Since oni take many roles depending on the situation, the ogre mage has more high ability modifiers than usual. Since the ogre mage's mind is stronger than its reflexes, it switches its Will and Reflex save bonuses.</p>
<p><strong className="hl">Creature Type:</strong> As an outsider, the ogre mage gains darkvision and +2 on attack rolls and Fortitude saves.</p>
<p><strong className="hl">Subtype:</strong> The ogre mage has two subtype grafts, and gains options from both of them. The oni subtype grants the change shape and regeneration options. The giant subtype grants low-light vision as well as Intimidate as a good skill.</p>
<p><strong className="hl">Size:</strong> The ogre mage's Large size gives it -1 to touch AC, +1 to flat-footed AC, +2 to CMB, and +1 to CMD.</p>
<p><strong className="hl">Spells:</strong> The ogre mage took the secondary magic option twice, gaining a set of custom spells that assist with infiltration and combat. It receives darkness and invisibility at will as an additional bonus.</p>
<p><strong className="hl">Options:</strong> The improved initiative option is included in the ogre mage's statistics.</p>
<p><strong className="hl">Skills:</strong> The ogre mage is more of a generalist than a specialist, able to handle a variety of situations equally well. Instead of one master skill and two good skills, the versatile ogre mage has five good skills beyond the two it receives from the giant subtype.</p>
<p><strong className="hl">Damage:</strong> The ogre mage uses the low attack and damage values for its composite longbow.</p>
<h3 id="rule-me_ogre_mage-ogre-mage">Ogre Mage</h3>
<h4 id="rule-me_ogre_mage-crhd-8">CR/HD 8</h4>
<p><strong>Init</strong> +6; <strong>Perception</strong> +13 (darkvision 60 ft., low-light vision)<br/><strong>Size</strong> Large (10 ft.); <strong>Speed</strong> 40 ft., fly 60 ft. (good)</p>
<h4 id="rule-me_ogre_mage-defenses">Defenses</h4>
<p><strong>AC</strong> 23 (touch 12, flat-footed 18); <strong>Fort</strong> +11, <strong>Ref</strong> +7, <strong>Will</strong> +9; <strong>CMD</strong> 27; <strong>SR</strong> 19; <strong>Concentration</strong> +12<br/><strong>hp</strong> 110; regeneration 5 (acid, fire)</p>
<h4 id="rule-me_ogre_mage-attacks">Attacks</h4>
<p><strong>Melee</strong> greatsword (reach 10 ft.) +17/+12 (3d6+15/19-20)<br/><strong>Ranged</strong> composite longbow (range 110 ft.) +13/+8 (2d6+12/&times;3)<br/><strong>Attack Spell-Like Abilities</strong> (DC 13 + spell's level) 1/day-charm monster, cone of cold, deep slumber<br/><strong>CMB</strong> +19</p>
<h4 id="rule-me_ogre_mage-statistics">Statistics</h4>
<p><strong>Utility Spell-Like Abilities</strong> 1/day-gaseous form; at will-darkness, invisibility; constant-fly<br/><strong>Utility Options</strong> change shape (Small, Medium, or Large humanoid; alter self or giant form I)<br/><strong>Str</strong> +6, <strong>Dex</strong> +2, <strong>Con</strong> +6, <strong>Int</strong> +2, <strong>Wis</strong> +2, <strong>Cha</strong> +4; Bluff +13, Disguise +23, Intimidate +13, Sense Motive +13, Spellcraft +13, Use Magic Device +13<br/><strong>XP</strong> 4,800; LE outsider (giant, native, oni, shapechanger)</p>
</>};
const _me_night_hag_soul_collector = {title: "Night Hag Soul Collector", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples","monster_examples"], siblings: ["me_worg","me_mastodon","me_griffon","me_goblin_fighter","me_zombie_minotaur","me_bat_swarm","me_imp","me_fire_giant","me_satyr","me_frost_giant_explorer","me_vampire_cleric","me_ogre_mage","me_night_hag_soul_collector","me_marilith_general","me_ancient_blue_dragon","me_pit_fiend"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 243</Link></p>
<p>The night hag soul collector is not only a dangerous opponent; she is also dangerously well connected. She can force her captured souls to do her bidding to augment her own combat effectiveness, granting her powers from the summoner class graft.</p>
<p><strong className="hl">Array:</strong> This night hag is a summoner for all practical purposes, so she uses the spellcaster array, albeit with increased ability modifiers to reflect the fact that she is physically imposing for a spellcaster.</p>
<p><strong className="hl">Creature Type:</strong> Since her type is outsider, the night hag gains darkvision and a +2 bonus on attack rolls. She trades the outsider saving throw adjustments for the summoner adjustments.</p>
<p><strong className="hl">Class:</strong> The night hag soul collector's summoner class graft increases her Fortitude and Reflex by 1 and grants Knowledge (planes) as a master skill. The lost soul acts as her eidolon. The night hag is thematically similar to a summoner, but isn't treated as actually having class levels in summoner.</p>
<p><strong className="hl">Spells:</strong> The night hag uses a modified version of the conjuration spell list, to stay in theme with her spontaneous summoning from the summoner class graft. As a soul broker, she needs constant detection spells to inspect her merchandise, as well as the <Link to="/spell/soul_bind">soul bind</Link> spell at will.</p>
<p><strong className="hl">Options:</strong> From the summoner graft, the night hag gains spontaneous magic (summon monster), as well as one magic option and one any option. She chooses change shape and a custom dream haunting option to allow her to torment her foes from safety. To represent the defenses necessary to ply her trade among evil outsiders, the night hag also has particularly potent spell resistance and damage reduction options for her CR.</p>
<p><strong className="hl">Skills:</strong> A night hag encounter might be social and deceptive, so the monster has additional master and good skills, and her +10 bonus from change shape is reflected in her Disguise skill.</p>
<p><strong className="hl">Damage:</strong> For damage with three primary attacks, the night hag doubles the damage for two primary attacks (18) to get a total of 36, then divides by three (her total number of attacks). Each attack deals roughly 12 points of damage<br/>Lost Soul: This represents the twisted form of a lost soul that the night hag can call forth to defend her; effectively her eidolon, since she is using the summoner graft. The soul's twisted form has screaming mouths on long tendrils that bite as it moves, allowing it to pounce.</p>
<p><strong className="hl">Array:</strong> As an eidolon, the lost soul uses the combatant array.</p>
<p><strong className="hl">Creature Type:</strong> The outsider type graft grants the lost soul a +2 bonus on attack rolls and Reflex saving throws.</p>
<p><strong className="hl">Size:</strong> The lost soul's Large size grants it -1 to touch AC, +1 to flat-footed AC, +2 to CMB, and +1 to CMD.</p>
<p><strong className="hl">Options:</strong> As a combatant, the lost soul gains one combat option and one any option. For these options, it gains pounce and damage reduction.</p>
<p><strong className="hl">Skills:</strong> While a combatant normally has one master skill and two good skills, the lost soul is simple, so the GM gives it only Intimidate as a master skill and Fly as a good skill.</p>
<p><strong className="hl">Damage:</strong> To determine its damage with four primary attacks, the lost soul doubles the damage value for two primary attacks (22) to get 44 points of damage, then divides by 4. Each attack deals 11 points of damage, or 1d8+6 on Table 5-9.</p>
<h3 id="rule-me_night_hag_soul_collector-night-hag-soul-collector">Night Hag Soul Collector</h3>
<h4 id="rule-me_night_hag_soul_collector-crhd-9">CR/HD 9</h4>
<p><strong>Init</strong> +4; <strong>Perception</strong> +14 (darkvision 60 ft.)<br/><strong>Size</strong> Medium; <strong>Speed</strong> 30 ft.; <strong>Special Movement</strong> etherealness (at will)</p>
<h4 id="rule-me_night_hag_soul_collector-defenses">Defenses</h4>
<p><strong>AC</strong> 21 (touch 12, flat-footed 15); <strong>Fort</strong> +9, <strong>Ref</strong> +9, <strong>Will</strong> +12; <strong>CMD</strong> 24; <strong>SR</strong> 24; <strong>Concentration</strong> +12<br/><strong>hp</strong> 103; <strong>DR</strong> 10/cold iron and magic; <strong>Immune</strong> charm, cold, fear, fire, sleep</p>
<h4 id="rule-me_night_hag_soul_collector-attacks">Attacks</h4>
<p><strong>Melee</strong> 2 claws +14 (1d4+9), bite +14 (1d6+9)<br/><strong>Attack Spell-Like Abilities</strong> (DC 16 + spell's level) 1/day-deep slumber; at will-magic missile, ray of enfeeblement, soul bind<br/><strong>Attack Options</strong> dream haunting, spontaneous casting (summon monster); <strong>CMB</strong> +14</p>
<h4 id="rule-me_night_hag_soul_collector-statistics">Statistics</h4>
<p><strong>Utility Spell-Like Abilities</strong> 1/day-dimension door; 3/day-darkness, dispel magic, haste, invisibility; constant-detect chaos, detect evil, detect good, detect law, detect magic; double the duration of all conjuration (summoning) spells<br/><strong>Utility Options</strong> change shape, soul broker<br/><strong>Str</strong> +6, <strong>Dex</strong> +4, <strong>Con</strong> +6, <strong>Int</strong> +4, <strong>Wis</strong> +3, <strong>Cha</strong> +3; Bluff +17, Diplomacy +14, Disguise +27, Intimidate +14, Knowledge (planes) +17, <strong>Perception</strong> +14, Sense Motive +14, Spellcraft +14<br/><strong>XP</strong> 6,400; NE outsider (evil, extraplanar)</p>
<h4 id="rule-me_night_hag_soul_collector-special-abilities">Special Abilities</h4>
<p><strong>Dream Haunting (Su):</strong> The night hag can haunt a creature's dreams from her home on the Ethereal Plane. A creature she haunts takes 1 point of Constitution damage when it awakes.</p>
<p><strong>Soul Broker (Su):</strong> As a standard action, the night hag can release one of her captured souls to fight at her side; see the night hag's lost soul statistics, below.</p>
<h3 id="rule-me_night_hag_soul_collector-night-hags-lost-soul">Night Hag's Lost Soul</h3>
<h4 id="rule-me_night_hag_soul_collector-crhd-9-1">CR/HD 9</h4>
<p><strong>Init</strong> +4; <strong>Perception</strong> +14 (darkvision 60 ft.)<br/><strong>Size</strong> Large (10 ft.); <strong>Speed</strong> 30 ft., fly 60 ft. (good)</p>
<h4 id="rule-me_night_hag_soul_collector-defenses-1">Defenses</h4>
<p><strong>AC</strong> 25 (touch 15, flat-footed 18); <strong>Fort</strong> +10, <strong>Ref</strong> +12, <strong>Will</strong> +8; <strong>CMD</strong> 28<br/><strong>hp</strong> 126; <strong>DR</strong> 10/cold iron and magic</p>
<h4 id="rule-me_night_hag_soul_collector-attacks-1">Attacks</h4>
<p><strong>Melee</strong> 4 bites (reach 15 ft.) +19 (1d8+6)<br/><strong>Attack Options</strong> pounce; <strong>CMB</strong> +19</p>
<h4 id="rule-me_night_hag_soul_collector-statistics-1">Statistics</h4>
<p><strong>Str</strong> +7, <strong>Dex</strong> +4, <strong>Con</strong> +3; Fly +14, Intimidate +17<br/><strong>XP</strong> 6,400; NE outsider (extraplanar)</p>
</>};
const _me_marilith_general = {title: "Marilith General", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples","monster_examples"], siblings: ["me_worg","me_mastodon","me_griffon","me_goblin_fighter","me_zombie_minotaur","me_bat_swarm","me_imp","me_fire_giant","me_satyr","me_frost_giant_explorer","me_vampire_cleric","me_ogre_mage","me_night_hag_soul_collector","me_marilith_general","me_ancient_blue_dragon","me_pit_fiend"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 243</Link></p>
<p>A six-armed general of the abyssal hordes, the marilith is iconic for its overwhelming number of attacks. This marilith uses custom options to better reflect her skills as a general.</p>
<p><strong className="hl">Array:</strong> As an abyssal general, the marilith uses the combatant array and has additional strong ability modifiers.</p>
<p><strong className="hl">Creature Type:</strong> The marilith is an outsider, so she gains darkvision and a +2 bonus on attack rolls and Fortitude saves. She also gains the elective adjustment of spells, with a modified list.</p>
<p><strong className="hl">Subtype:</strong> From the demon subtype, the marilith gains her immunities, resistances, summon ability, and telepathy. Her tactical nature gives her a wider-than-normal variety of allies she can call forth with her summon ability.</p>
<p><strong className="hl">Size:</strong> The marilith's Large size grants her -1 to touch AC, +1 to flat-footed AC, +2 to CMB, and +1 to CMD.</p>
<p><strong className="hl">Spells:</strong> The marilith prefers to meet her enemies directly with her numerous blades, so her modified spell list is more about trickery, mobility, and battlefield control than about directly attacking her foes with magic.</p>
<p><strong className="hl">Options:</strong> Normally, a CR 17 combatant has two combat options and one any option, but the marilith general is cunning and tactical. To better lead her forces in battle, in addition to critical striker and damage reduction, she gets the heroic recovery and inspire courage social options.</p>
<p><strong className="hl">Skills:</strong> In order to keep her command post, a marilith general needs guile and social skills. Therefore, she has more master skills than normal, but trades away one good skill in the bargain.</p>
<p><strong className="hl">Damage:</strong> The marilith's multi-armed attacks make her damage complex to calculate. Doubling the damage for two natural attacks (50) gives her 100 points of damage. This is then increased by 50% - since her iterative attacks and tail are less likely to hit - for a total of 150. Dividing 150 by 10 attacks gets 15, which is 2d6+9 on Table 5-9. The tail slap is weaker, so it uses the low attack and damage values for secondary attacks in the three natural attacks column in the array. This reduces the marilith's overall damage, but not enough to necessitate increasing the rest of her damage.</p>
<h3 id="rule-me_marilith_general-marilith-general">Marilith General</h3>
<h4 id="rule-me_marilith_general-crhd-17">CR/HD 17</h4>
<p><strong>Init</strong> +5; <strong>Perception</strong> +29 (darkvision 60 ft., true seeing)<br/><strong>Size</strong> Large (10 ft.); <strong>Speed</strong> 40 ft.; <strong>Special Movement</strong> greater teleport (at will, self plus 50 lbs. of objects only)</p>
<h4 id="rule-me_marilith_general-defenses">Defenses</h4>
<p><strong>AC</strong> 34 (touch 20, flat-footed 25); <strong>Fort</strong> +20, <strong>Ref</strong> +18, <strong>Will</strong> +15; <strong>CMD</strong> 39 (43 vs. grapple, can't be tripped); <strong>SR</strong> 28; <strong>Concentration</strong> +25<br/><strong>hp</strong> 297; <strong>DR</strong> 10/cold iron and good; <strong>Immune</strong> electricity, poison; <strong>Resist</strong> acid 10, cold 10, fire 10; unholy aura<br/><strong>Defensive Spell-Like Abilities</strong> at will-project image</p>
<h4 id="rule-me_marilith_general-attacks">Attacks</h4>
<p><strong>Melee</strong> +1 longsword (reach 10 ft.) +29/+24/+19/+14 (2d6+9/17-20), 5 +1 longswords (reach 10 ft.) +29 (2d6+9/17-20), tail slap +24 (2d6+3 plus improved combat maneuver [grapple])<br/><strong>Attack Spell-Like Abilities</strong> (DC 18 + spell's level) 3/day-blade barrier; at will-telekinesis<br/><strong>Attack Options</strong> critical striker; <strong>CMB</strong> +31 (+35 grapple)</p>
<h4 id="rule-me_marilith_general-statistics">Statistics</h4>
<p><strong>Utility Spell-Like Abilities</strong> 3/day-fly<br/><strong>Utility Options</strong> heroic recovery, inspire courage, summon allies (marilith 20%, nalfeshnee 35%, or 1d4 hezrous 60%)<br/><strong>Str</strong> +8, <strong>Dex</strong> +5, <strong>Con</strong> +11, <strong>Int</strong> +5, <strong>Wis</strong> +5, <strong>Cha</strong> +8; Bluff +29, Diplomacy +29, Intimidate +29, Sense Motive +21, Use Magic Device +29; telepathy 100 ft.<br/><strong>XP</strong> 102,400; CE outsider (chaotic, demon, evil, extraplanar)</p>
</>};
const _me_ancient_blue_dragon = {title: "Ancient Blue Dragon", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples","monster_examples"], siblings: ["me_worg","me_mastodon","me_griffon","me_goblin_fighter","me_zombie_minotaur","me_bat_swarm","me_imp","me_fire_giant","me_satyr","me_frost_giant_explorer","me_vampire_cleric","me_ogre_mage","me_night_hag_soul_collector","me_marilith_general","me_ancient_blue_dragon","me_pit_fiend"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 243</Link></p>
<p>This ancient blue dragon has additional attacks, with damage extrapolated from the natural attacks column for CR 18. Despite being a combatant, it has a reduced spellcasting ability (as if it were a CR 12-15 spellcaster) with a DC halfway between combatant and spellcaster to represent a dragon's natural spellcasting prowess. The spells are customized for this dragon, and it doesn't receive an additional boon from selecting one of the preset lists.<br/>The dragon has seven options instead of four to reflect its many talents, including several built into its statistics: damage reduction, extra armor, and spell resistance. It adds +4 to the DC of its breath weapon to reflect at ability's raw power. The dragon gains additional Wisdom and Charisma modifiers of +5. It uses the expert array's number of skills, and has the flying acumen option built into its statistics.</p>
<p><strong className="hl">Array:</strong> The dragon is a mighty and iconic beast. It uses the combatant array, but it also possesses reduced spellcasting abilities, and its advanced age grants it superior mental ability scores.</p>
<p><strong className="hl">Creature Type:</strong> The dragon type grants the ancient blue dragon darkvision, low-light vision, immunity to paralysis and sleep, and a +2 bonus on attack rolls and Will saves. To emphasize its sheer size, the ancient blue dragon also gains an additional +2 bonus on Fortitude saves.</p>
<p><strong className="hl">Size:</strong> The dragon's Gargantuan size graft grants it -4 to touch AC, +5 to flat-footed AC, +8 to CMB, and +4 to CMD.</p>
<p><strong className="hl">Spells:</strong> To reflect its nature as a slightly lesser spellcaster than a true spellcaster of its CR, the dragon gains the spells of a CR 12-15 spellcaster instead, with DCs halfway between those of the combatant and spellcaster arrays. Since it has its own customized spell list, the dragon doesn't receive an additional boon from selecting one of the preset lists.</p>
<p><strong className="hl">Options:</strong> Normally, a CR 18 combatant would have three combat options and one any option, but the ancient blue dragon not only has damage reduction, extra armor, and spell resistance, but also critical striker and defense breaker to reflect its ferocious power.</p>
<p><strong className="hl">Skills:</strong> As it has collected untold knowledge over its many years, the ancient blue dragon uses the expert's number of skills, and its flying acumen option negates the Gargantuan size graft's prohibition on Fly as a master skill.</p>
<p><strong className="hl">Damage:</strong> The dragon has three primary attacks and three secondary attacks. The damage for two natural attacks (55) is doubled to 110. This is multiplied by 125% (137 total) since many attacks use a lower bonus. The damage is divided unevenly to emphasize certain attacks: 32 points for the bite and tail slap, 22 per claw, and 13 per wing.</p>
<h3 id="rule-me_ancient_blue_dragon-ancient-blue-dragon">Ancient Blue Dragon</h3>
<h4 id="rule-me_ancient_blue_dragon-crhd-18">CR/HD 18</h4>
<p><strong>Init</strong> +4; <strong>Perception</strong> +31 (blindsense 60 ft., darkvision 60 ft., low-light vision)<br/><strong>Aura</strong> electricity (10 ft., 2d6 electricity), frightful presence (300 ft., DC 25)<br/><strong>Size</strong> Gargantuan (20 ft.); <strong>Speed</strong> 40 ft., burrow 20 ft., fly 250 ft. (clumsy, hover)</p>
<h4 id="rule-me_ancient_blue_dragon-defenses">Defenses</h4>
<p><strong>AC</strong> 37 (touch 11, flat-footed 35); <strong>Fort</strong> +20, <strong>Ref</strong> +18, <strong>Will</strong> +18; <strong>CMD</strong> 43; <strong>SR</strong> 29; <strong>Concentration</strong> +23<br/><strong>hp</strong> 330; <strong>DR</strong> 15/magic; <strong>Immune</strong> electricity, paralysis, sleep<br/><strong>Defensive Spells</strong> 1/day-mislead</p>
<h4 id="rule-me_ancient_blue_dragon-attacks">Attacks</h4>
<p><strong>Melee</strong> bite (reach 20 ft.) +30 (4d6+18/19-20), 2 claws (reach 15 ft.) +30 (3d6+12), 2 wings (reach 15 ft.) +25 (2d6+6), tail slap (reach 15 ft.) +25 (3d8+18)<br/><strong>Attack Spells</strong> (DC 17 + spell's level) 1/day-forceful hand; 3/day-enervation, hold monster; at will-haste<br/><strong>Attack Options</strong> (DC 27) breath weapon (120-ft. line, 19d6 electricity), critical striker, defense breaker; <strong>CMB</strong> +36</p>
<h4 id="rule-me_ancient_blue_dragon-statistics">Statistics</h4>
<p><strong>Utility Spells</strong> 3/day-dimension door, hallucinatory terrain; at will-invisibility<br/><strong>Str</strong> +12, <strong>Dex</strong> -2, <strong>Con</strong> +8, <strong>Int</strong> +6, <strong>Wis</strong> +5, <strong>Cha</strong> +5; Bluff +25, Fly +31, Intimidate +31, Knowledge (arcana) +31, Spellcraft +25<br/><strong>XP</strong> 153,600; LE dragon (earth)</p>
</>};
const _me_pit_fiend = {title: "Pit Fiend", parent_topics: ["advanced_gm_topics","simple_monster_creation","monster_creation_examples","monster_examples"], siblings: ["me_worg","me_mastodon","me_griffon","me_goblin_fighter","me_zombie_minotaur","me_bat_swarm","me_imp","me_fire_giant","me_satyr","me_frost_giant_explorer","me_vampire_cleric","me_ogre_mage","me_night_hag_soul_collector","me_marilith_general","me_ancient_blue_dragon","me_pit_fiend"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 243</Link></p>
<p>With a diverse spread of abilities useful for both combat and spellcasting, a pit fiend remains fairly complex to create even in the simple monster creation system. It's not really 100% a combatant, so it requires special statistical adjustments.</p>
<p><strong className="hl">Array:</strong> This monster mostly uses the numbers from the combatant array, but gains a large number of spells, and therefore has the hit points of a spellcaster. As a powerful ruler in Hell, the pit fiend's starting ability modifiers are +13, +13, +9, +9, +6, and +6.</p>
<p><strong className="hl">Creature Type:</strong> As an outsider, the pit fiend gains darkvision 60 feet, increases its Fortitude from +20 to +22, and increases its attack bonuses from +30 to +32. It also gets the elective adjustment for one additional master skill.</p>
<p><strong className="hl">Subtype:</strong> The devil subtype graft grants the see in darkness sense, energy resistance 10 to acid and cold, and immunity to fire and poison. It also gives the pit fiend the summon allies option and telepathy 100 feet.</p>
<p><strong className="hl">Size:</strong> Since it's Large, the pit fiend decreases its touch AC from 22 to 21 and increases its flat-footed AC from 28 to 29. Its CMB goes up from +32 to +34, and its CMD goes from 42 to 43.</p>
<p><strong className="hl">Spells:</strong> The monster gains spells as though it were a spellcaster. In addition, it can use mass hold monster and greater teleport at will.</p>
<p><strong className="hl">Options:</strong> For the three combat options given by its array, the pit fiend has constrict, damage reduction, and improved combat maneuver (grapple), which also gives it bonuses on CMB checks made to grapple and to CMD against grapple checks. For its one any option, it has poison with eight advantages (two + 1/3 of the pit fiend's CR of 20). These advantages are removing the onset, changing the frequency to 1/round for 6 rounds, increasing the ability damage three times, increasing the cure to 2 consecutive saves, and two advantages invented specifically for this monster: increasing the frequency to 1/round for 10 rounds, and increasing the cure to 3 consecutive saves. As a nod to classic pit fiends, the monster can regenerate from wounds, but the regeneration amount is so low for its level that it doesn't cost an option. Its diseased bite is also free, since it won't matter much in high-level combat. The devil has a bonus option for its fear aura, and doesn't spend any options for its spells, but these additions are reasonable for a high-level villain such as the pit fiend. The Bestiary pit fiend's devil shaping ability won't come up in combat, so it has been omitted.</p>
<p><strong className="hl">Skills:</strong> Because of its creature type graft, the pit fiend has two master skills instead of one.</p>
<p><strong className="hl">Damage:</strong> The number of attacks the pit fiend gains has been reduced from the number in the Bestiary; in particular, its wing attacks have been removed to allow its remaining attacks to have more impact. The array's two natural attacks' damage (66) is doubled to 132, then increased by 25% to get 165, which is then divvied up between four attacks. This sets the damage value at 48 points for each claw, 42 for the bite, and 27 for the tail slap.</p>
<h3 id="rule-me_pit_fiend-pit-fiend">Pit Fiend</h3>
<h4 id="rule-me_pit_fiend-crhd-20">CR/HD 20</h4>
<p><strong>Init</strong> +9; <strong>Perception</strong> +35 (darkvision 60 ft., see in darkness)<br/><strong>Aura</strong> fear (30 ft., DC 20)<br/><strong>Size</strong> Large (10 ft.); <strong>Speed</strong> 40 ft., fly 60 ft. (average); <strong>Special Movement</strong> greater teleport (at will, self plus 50 lbs. of objects only)</p>
<h4 id="rule-me_pit_fiend-defenses">Defenses</h4>
<p><strong>AC</strong> 38 (touch 21, flat-footed 29); <strong>Fort</strong> +22, <strong>Ref</strong> +20, <strong>Will</strong> +17; <strong>CMD</strong> 43 (47 vs. grapple); <strong>SR</strong> 31; <strong>Concentration</strong> +26<br/><strong>hp</strong> 333; regeneration 5 (good weapons, good spells); <strong>DR</strong> 10/good and silver; <strong>Immune</strong> fire, poison; <strong>Resist</strong> acid 10, cold 10</p>
<h4 id="rule-me_pit_fiend-attacks">Attacks</h4>
<p><strong>Melee</strong> 2 claws (reach 10 ft.) +32 (2d8+42), bite (reach 10 ft.) +32 (4d6+30 plus disease and poison), tail slap (reach 10 ft.) +32 (2d8+18 plus improved combat maneuver [grapple])<br/><strong>Attack Spell-Like Abilities</strong> (DC 17 + spell's level) 1/day-quickened fireball, meteor swarm; at will-mass hold monster, wall of fire<br/><strong>Attack Options</strong> (DC 25) constrict (2d8+60), disease (see below), poison (see below); <strong>CMB</strong> +34 (+38 grapple)</p>
<h4 id="rule-me_pit_fiend-statistics">Statistics</h4>
<p><strong>Utility Options</strong> summon allies (typically barbed devil or ice devil, 60%)<br/><strong>Str</strong> +13, <strong>Dex</strong> +9, <strong>Con</strong> +13, <strong>Int</strong> +6, <strong>Wis</strong> +9, <strong>Cha</strong> +6; Bluff +28, Intimidate +35, Sense Motive +28; telepathy 100 ft.<br/><strong>XP</strong> 307,200; LE outsider (devil, evil, extraplanar, lawful)</p>
<div className="sideNoteWrap"><ScrollContainer id="rule-me_pit_fiend--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/diseases"><IonIcon aria-label="Disease" icon="/icons/paramecia.svg" /></ThLink><th colSpan={4} scope="col" className="title">Disease</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Affliction</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}></td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/day</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d4 <Link to="/rule/str_damage">Str damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>2 consecutive saves</td></tr></tbody></table></ScrollContainer></div><div className="sideNoteWrap"><ScrollContainer id="rule-me_pit_fiend--table-1"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th colSpan={4} scope="col" className="title">Poison</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}></td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/minute for 10 minutes</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d6 <Link to="/rule/con_damage">Con damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>3 consecutive saves</td></tr></tbody></table></ScrollContainer></div></>};
const _spells_of_intrigue = {title: "Spells of Intrigue", parent_topics: ["advanced_gm_topics"], siblings: ["diseases_and_poisons","catastrophes","exploration_ucp","discovery_and_exploration","duels","verbal_duels","heists","infiltration","nemeses","performance_combat","pursuit","simple_monster_creation","skills_in_conflict","social_conflicts","spells_of_intrigue","spells_of_the_wild","taxation","treasure_generator","trophies","weather_in_the_wilderness"], subtopics: ["low_level_play_1_6","mid_level_play_7_12","high_level_play_13","example_of_intrigue_spells"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 154</Link></p>
<p>Magic influences nearly everything in the Pathfinder Roleplaying Game. In an intrigue-based campaign, the principal focus shifts from exploration and dungeon-delving - where magic is primarily used for survival and fighting - to navigating complex and precarious social interactions. Politics, organized crime, espionage, mercantilism, and other intrigue-based objectives require extensive use of subtlety, subterfuge, thoughtful planning, and orchestrated tactics. As a result, characters engaged in intrigue often utilize spells that are geared toward communication rather than combat, spying and intelligence-gathering rather than physical defense, and winning power and influence rather than slaying opponents outright and taking their treasure.</p>
<p>The following section offers advice on certain spells particularly likely to see use in an intrigue-focused game, organized by level of play and spell school.</p>
</>};
const _low_level_play_1_6 = {title: "Low-Level Play (1-6)", parent_topics: ["advanced_gm_topics","spells_of_intrigue"], siblings: ["low_level_play_1_6","mid_level_play_7_12","high_level_play_13","example_of_intrigue_spells"], subtopics: ["divinations","enchantments","illusions","necromancy_ui"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 154</Link></p>
<p>At early levels, the number of spells available is smaller, but these are sometimes the most important spells to understand. Low-level spells of intrigue (typically 3rd level or lower) can remain useful at high levels, and high-level characters can cast them far more often.</p>
</>};
const _divinations = {title: "Divinations", parent_topics: ["advanced_gm_topics","spells_of_intrigue","low_level_play_1_6"], siblings: ["divinations","enchantments","illusions","necromancy_ui"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 154</Link></p>
<p>Nothing can alter the fundamental flow of an entire adventure or campaign quite like divinations. The rules for divination spells contain many gray areas. Unfortunately, that can lead to GMs either reining in these spells too tightly (sometimes making them a waste of a spell slot), or allowing divinations to provide far more information than the spell should allow, potentially derailing the story. Many GMs feel that divinations are the primary reason high-level games can be difficult to run.</p>
<p>When adjudicating the results of divinations, you, as the GM, should apply the principle of "yes, but..." rather than simply saying "yes" or "no." In other words, the PCs can get the kind of information the spell indicates, but that information doesn't include other factors beyond the scope of the spell. Or perhaps it comes in a cryptic form, is sketchy because the PCs didn't have enough information to connect the dots, or is otherwise less than ideal. These spells have built-in restrictions that prevent them from being perfect, and targets can prepare countermeasures to vex casters.</p>
<p>Information is a key factor in many games, and divination magic often plays a central role in uncovering that information. Information allows characters to lay ambushes instead of being ambushed, to bypass threats to pursue their goals most efficiently, to prepare exactly the right countermeasures for their opposition, and more. As the GM, ultimately, you are the channel through which all the knowledge about the world flows. You are responsible for providing the appropriate information to both the PCs and the NPCs. You should give them the information their characters would have and not withhold knowledge, but you should also control the information flow in a way that enhances the game.</p>
<p>Some of the first divinations available to characters can often cause the most disruptions because they are available at will: <Link to="/spell/detect_poison">detect poison</Link> and especially <Link to="/spell/detect_magic">detect magic</Link>. Detection spells generally cannot pierce solid material, including a thin layer of lead, so consider having NPCs use lead linings for important secrets. The idea of using appropriate precautions makes a particularly formidable NPC seem like a more worthy adversary after the fact, once the PCs find the hidden secret, though if every NPC does this, it can quickly cheapen that effect.</p>
<p>Though it might seem humble, the ability to find a creature, object, or location can easily short-circuit an entire adventure based around discovering something lost or hidden. However, spells that find things have significant limitations, and the first line of defense against allowing locator spells to damage the fun of a campaign is knowledge. Characters can't attempt to locate something they don't even know exists, and several of those spells have further restrictions that depend on the caster's level of knowledge about the target.</p>
<p><strong><Link to="/spell/augury">Augury</Link>:</strong> Conceptually, having only four options (weal, woe, both, and neither) seems simple enough, but the trick comes in that almost everything involves a little bit of weal or woe - so where do you draw the line? Remember that the spell can see only 30 minutes into the future. It doesn't take into account long-term consequences of the action. That means that, for instance, making a deal with a devil to gain 1,000 gp in exchange for possibly forfeiting your soul sometime in the future would probably be considered a weal by a casting of <em>augury.</em></p>
<p>If the half-hour isn't enough to decide, then think about the personality of the caster's deity or spirit. For instance, a god of bravery might think that a CR-appropriate battle with great loot is a weal because that sounds like a grand adventure, while a more cautious deity might say that is a weal and woe.</p>
<p>You can't predict everything that will happen, so just try to make your best guess - even the gods can't be sure exactly how the PCs will behave! Try to remember that "neither" is a valid option, particularly since that's the result when the spell fails to give an accurate response. The caster must consider whether the "neither" result is a false negative or a true negative. <em>Augury</em> costs 25 gp to cast, so likely the PCs won't throw it around indiscriminately, even at higher levels.</p>
<p><strong><Link to="/spell/clairaudience_clairvoyance">Clairaudience/Clairvoyance</Link>:</strong> This spell is the lowest-level scouting spell, and so is often the first to appear in play. It allows PCs to examine their surroundings or eavesdrop without endangering themselves, but has a large number of mitigating factors, which can make it trickier to use.</p>
<p><em>Clairaudience/clairvoyance</em> has a limited range of 400 feet, plus 40 feet per caster level. While that is generally enough to see areas in the same dungeon, the spell can't just look anywhere. The caster must place the sensor in a known locale or a familiar place, or somewhere he can see. This prevents blindly casting it on whatever is 100 feet in a given direction, for instance. The casting time of this spell - 10 minutes - is quite long, likely wasting the duration of other spells currently cast on the party. It is also a major security risk to chant for 10 minutes straight in a loud and clear voice in hostile territory, so this spell is best paired with <Link to="/feat/silent_spell">Silent Spell</Link> for safety's sake. This spell lasts only 1 minute per level, which makes it difficult to spy on long conversations unless the caster knows exactly the right time. Finally, the spell doesn't project any enhanced senses, so even if the caster has darkvision, if the spell hits a dark area, he can only see in a 10-foot radius. Unlike some of the more powerful scrying subschool spells, the caster can't move the sensor beyond rotating it.</p>
<p>The clairaudience version of the spell can better detect things in the dark, but making sense of auditory stimuli can be tricky. Finally, remember that the enemies might potentially notice invisible magical sensors (the base DC to notice a sensor is 23 for this spell). <Link to="/spell/detect_scrying">Detect scrying</Link> automatically detects the spell and possibly reveals the PCs' nearby location, too, potentially allowing the observed enemies to retaliate quickly.</p>
<p><strong><Link to="/spell/detect_evil">Detect Evil</Link>:</strong> This entry applies to other alignment detection spells and abilities, as well. In some stories, concealing a character's alignment is important; it can be particularly challenging in the presence of a paladin or inquisitor who uses <em>detect evil</em> at will (or some familiars that have constant <em>detect evil</em>). Fortunately, there are a lot of easy ways to protect against these spells.</p>
<p>The first thing to note is that at the lowest levels, alignment detection spells simply don't register NPCs due to their low level. Other than clerics, undead, and evil outsiders, creatures require 5 Hit Dice or more to register with <em>detect evil.</em> The second thing to keep in mind is that creatures with actively evil, good, chaotic, and lawful intents register as that alignment if they have enough Hit Dice, regardless of their actual alignment. So a selfish merchant whose heart is moved by an orphan's plight into an act of largesse would register as good at the time, and a loyal knight forced to kill an innocent child to stop a war could appear evil while she formulates and executes the deed. The final thing to consider is that alignment detection is exceptionally easy and cheap to foil in the long-term.</p>
<p>Some GMs rely on expensive, high-level, short-duration spells that could fail based on a d20 roll such as <Link to="/spell/misdirection">misdirection</Link> and <Link to="/spell/nondetection">nondetection</Link>, but the 1st-level bard spell <Link to="/spell/undetectable_alignment">undetectable alignment</Link> lasts 24 hours and works automatically. A wand containing this spell lasts for longer than a month and costs only 750 gp. Several new spells and magic items also help protect against alignment detection.</p>
<p>As always, it is important to use countermeasures that the NPC in question would reasonably and realistically use, considering the NPC's circumstances and the cost of employing the countermeasure. Spending 15 gold pieces a day for a charge from a <em>wand of undetectable alignment</em> is clearly worth it for an important spy who expects to match wits with paladins who can test her alignment, but it isn't reasonable for a random evil monster living alone in the sewers. Also, <em>undetectable alignment</em> fools alignment detection, but it leaves the telltale aura of <em>undetectable alignment</em> itself on the NPC, which could give him away just as easily if not combined with other effects to obscure the magical aura of the spell.</p>
<p><strong><Link to="/spell/detect_magic">Detect Magic</Link>:</strong> Though this at-will cantrip is an extremely powerful tool, remember that concentrating to maintain the spell consumes the caster's standard action every round, and may significantly slow a party's progress when timing is important or action is required. It also requires several rounds to reveal useful information.</p>
<p>On the first round of the spell, the caster doesn't learn more than the presence or absence of magical auras in a 60-foot cone. If the wizard is standing behind someone in the party who has a magic item, he'll get a false positive. Even on the second round, the caster just learns the number of auras and the power of the most potent aura, so it takes quite a while to pinpoint the locations of each aura. For instance, a common complaint about <em>detect magic</em> is that it might reveal invisible creatures, but in reality, an invisible creature can easily run circles around the concentrating wizard's cone, never allowing the wizard enough time to pinpoint it.</p>
<p>The final and most important point to note is the fact that magical areas, multiple types of magic, and stronger auras can distort or conceal weaker auras. Very few GMs use this to its full potential. For instance, the NPCs might build their base on a ley line in order to mask magic auras. If all else fails, numerous countermeasures protect against a simple <em>detect magic</em> spell, starting with nonmagical means such as thin layers of lead and moving to <Link to="/spell/magic_aura">magic aura</Link>, <em>nondetection, misdirection,</em> and more. Take a look at <Link to="/spell/greater_magic_aura">greater magic aura</Link> for a solid countermeasure. <Link to="/spell/greater_detect_magic">Greater detect magic</Link> allows for some interesting additional pieces of information, but it's a 2nd-level spell, so it can never be as ubiquitous as the 0-level version. <em>Greater magic aura</em> still foils <em>greater detect magic.</em></p>
<p><strong><Link to="/spell/detect_poison">Detect Poison</Link>:</strong> This spell makes it trivial for even a fledgling acolyte to detect the presence of poison, and seems to kill the entire idea of poisoning the king's drink. One solution is to slip poison into something that it wouldn't be socially acceptable to check with detect poison or that the consuming character doesn't even stop to check, such as poisoning the spoons rather than the meal. Clever assassins may poison something that is supposed to have poison in it (such as alcohol). Even though ethanol alcohol (along with other possible food additives) is a neurotoxin, it doesn't have its own poison stat block, and you'll want to make your stance clear on poisonous substances not listed with specific poison rules to your players. If you use this option, the caster still has to fail the DC 20 Wisdom check (which is quite likely, particularly at lower levels). For added concealment, use an overdose of the same sort of poison already expected to be in the dish, so even a successful check wouldn't help (such as lethal quantities of wormwood in a glass of absinthe). <Link to="/spell/obscure_poison">Obscure poison</Link>, a 1st-level spell, can also make a poison harder to detect, and the <Link to="/spell/languid_venom">languid venom</Link> spell can both delay the onset of a poison and make it slightly harder to detect.</p>
<p><strong><Link to="/spell/detect_thoughts">Detect Thoughts</Link>:</strong> This spell's notorious ambiguity often leads back to the idea that, as the GM, you are the one who ultimately controls the flow of information. Reading surface thoughts doesn't act perfectly to give the information that the PCs want, even if the target fails its saving throw, instead only betraying a character's immediate concerns. For instance, the <Link to="/monster/rakshasa">rakshasa</Link> disguised as a noble probably isn't thinking "I'm a rakshasa" all the time, but she might generally think of things in oddly predatory terms. Give the PCs something interesting and worthwhile but, most importantly, the spell should tell them something that makes sense for the target to be thinking and provide clues more than answers.</p>
<p>Clever PCs could combine <em>detect thoughts</em> with an interrogation session in an attempt to gather answers to specific questions. Against rank-and-file foes who are nonetheless too loyal to intimidate, this is very likely to work. However, liars skilled enough to remove any tells from their social deceit often train themselves not to dwell on their prevarications, so characters with high ranks in Bluff are likely able to obfuscate their surface thoughts. Still, if the PCs aren't sure whether they've captured a spy, their captive might reveal that she is more than she seems when the PCs' pointed questions are met with surface thoughts repeating a soothing rhyme or song.</p>
<p><Link to="/spell/seek_thoughts">Seek thoughts</Link> allows a character to sweep through many more people's minds than <em>detect thoughts,</em> but still allows a saving throw (and with multiple targets, the caster isn't aware who made or failed the save). The same adjudication on surface thoughts applies: a sweeping search for surface thoughts about being the murderer will only work if the murderer is actively thinking about being such. A true sociopath might be thinking about their lunch, though clever PCs might be able to use this information as evidence that the sociopathic NPC is suspicious.</p>
<p><strong><Link to="/spell/locate_object">Locate Object</Link>:</strong> Many GMs fear that a PC who casts <em>locate object</em> can locate key objects and ignore entire sections of an adventure. The good news is, unless the adventure was about the PCs being robbed of an item in a small town, that fear is probably baseless (and in many circumstances, there are countermeasures to this spell).</p>
<p>The first thing to note about <em>locate object</em> is its long range. Even 400 feet plus 40 feet per caster level is not very far in a city or overland adventure. Also, PCs cannot specify a unique item as the target of this spell unless they have observed the particular item firsthand (not through divination). In the majority of adventures focused on finding an item, the object is a unique item that the PCs have not observed firsthand. Finally, this spell is blocked by a thin sheet of lead. So any competent thief in a world with divinations is likely to store the object of her larceny within a bag that is lined with a thin sheet of lead, at least until she can get far enough away from pursuit. Precautions like these show the antagonists' understanding of the nature of magic and the world around them.</p>
<p><strong><Link to="/spell/speak_with_animals">Speak with Animals</Link> and <Link to="/spell/speak_with_plants">Speak with Plants</Link>:</strong> These two spells are useful in that animals and plants often observe plenty of secrets, and even the most meticulous murderer rarely thinks of a houseplant as a witness. However, these entities have either low or no intelligence, and they look at the world in a different way than people do. It's important to strike a balance with these spells so that they provide useful information that's worth casting a spell without breaking every mystery. The way to do that is all in the art of roleplaying animals and plants. Have them pay attention to things that are immediate and important for an animal or a plant, but not necessarily to details that the PCs want to know. Use these spells to offer more clues colored by the animal or plant's worldview.</p>
<p><strong><Link to="/spell/zone_of_truth">Zone of Truth</Link>:</strong> Truth-telling magic often has interesting consequences when combined with intrigue. Even ignoring spells such as <Link to="/spell/glibness">glibness</Link> that allow someone to lie directly in a <em>zone of truth,</em> a creature can succeed at its saving throw against the spell without the caster ever knowing. Creatures can also simply avoid speaking a direct lie, or even speak an untruth that she thinks is true, potentially through the use of memory-altering magic such as <Link to="/spell/modify_memory">modify memory</Link> or <Link to="/spell/false_belief">false belief</Link>. This advice applies for other truth-telling magic as well, such as discern lies.</p>
<p><strong className="hl">Other Divinations:</strong> A few rare, highly specific divination spells have the potential to disrupt an intrigue-based game.</p>
<p><strong><Link to="/spell/blood_biography">Blood Biography</Link>:</strong> This spell offers several options to a spellcaster who gains possession of a creature's blood, identifying the creature that shed the blood as well as the circumstance and time of the bloodshed, to that creature's knowledge. In terms of living creatures, beyond a successful Will saving throw, the best protection for a creature against this spell is also generally a good way to prevent penalties against spells such as <Link to="/spell/scrying">scrying</Link>: try not to leave blood for the PCs to find. Much like in a modern crime drama with DNA evidence, in a game with <em>blood biography,</em> a bloodstain from the culprit is a powerful piece of evidence that can often assure a successful investigation on its own. Of course, a wily criminal can plant the blood of an innocent at the scene to throw off the trail. However, that could cause issues due to the fact that the spell reveals how and when the blood was shed, unless the criminal can manipulate a truly devious frame-up that includes suspicious circumstances and timing. Another option, if cleaning up blood with <Link to="/spell/prestidigitation">prestidigitation</Link> or similar spells is out of the question, is to scatter blood from so many different sources throughout the area that the mixture makes the search nearly impossible. The other use of the spell, particularly in a murder, is that it can potentially reveal details of the murder, just like with spells such as <Link to="/spell/speak_with_dead">speak with dead</Link>. In addition to the advice for <em>speak with dead</em> below, a murderer could consider killing in such a way as to avoid spilling blood. Or, he could even plant blood from a previous situation that didn't involve the killer and then use spells such as <Link to="/spell/dress_corpse">dress corpse</Link> to obscure the time and cause of death to match the earlier bloodshed.</p>
<p><strong><Link to="/spell/create_treasure_map">Create Treasure Map</Link>:</strong> This spell allows the PCs to gain a map to whatever a dead creature considered most valuable. Since the spell indicates that the value is subjective and might include intangibles, such as a mate or a favorite place to find food, the spell usually offers numerous opportunities for other interesting adventures. It does this without forcing the GM's hand on any particular issue, particularly since it takes an hour to cast, costs 100 gp, and requires the particularly ghoulish task of using a corpse's skin as the map. Sometimes, however, there is just no way around it: the evil cultist who worships the mad artifact as a god certainly considers it to be the most valuable treasure in the area, for instance. In these cases, one countermeasure that also protects against various other divinations is to ensure that the villain's underlings have some level of misinformation, or no information at all. For instance, the cult leader might allow her lackeys to believe that the artifact is always housed within their secret but insecure temple, while in reality, she usually switches it for an elaborately trapped fake. Since <em>create treasure map</em> can't account for inconsistencies or holes in a creature's knowledge, even blindfolding cult members or using teleportation to bring them to the worship chamber would prevent them from leaking its secret location.</p>
</>};
const _enchantments = {title: "Enchantments", parent_topics: ["advanced_gm_topics","spells_of_intrigue","low_level_play_1_6"], siblings: ["divinations","enchantments","illusions","necromancy_ui"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 157</Link></p>
<p>The main danger with enchantments lies in removing agency from a character, either a PC or NPC, and the main difficulty in running them is adjudicating just how much they do so. As such, they are much easier to deal with than divinations, as they have less variety in the difficulties that arise. In all cases, a DC 25 (or lower) Sense Motive check notices that someone is enchanted. (See <Link to="/rule/skills_in_conflict">Skills in Conflict</Link> for more information on using Sense Motive to detect enchantment.)</p>
<p><strong><Link to="/spell/charm_person">Charm Person</Link>:</strong> The main thing to remember about charm magic is that it is not a compulsion (that is a different subschool of enchantment), which means it doesn't directly force someone to do something. Instead, the spell basically makes someone feel like the caster is a friend, and puts what the caster says in the best possible light. Just like in the <Link to="/rule/diplomacy">Diplomacy section of Skills in Conflict</Link>, being someone's friend doesn't mean the caster gets to dictate everything they do, and even the opposed Charisma check the spell grants can only go so far; it doesn't compel them to act exactly as the caster desires.</p>
<p>For instance, an evil necromancer might be willing to allow her friend to sit as her new right hand, but she won't quit her entire life's goal just because a friend asked, even with an opposed Charisma check. This advice applies equally as well to other charm spells (such as <Link to="/spell/charm_animal">charm animal</Link> and <Link to="/spell/charm_monster">charm monster</Link>).</p>
<p><strong><Link to="/spell/suggestion">Suggestion</Link>:</strong> <em>Suggestion</em> and its ilk, on the other hand, actually are mind-controlling spells. The key to <em>suggestion</em> is that it has to be presented in a reasonable fashion - and certain suggestions would simply never be reasonable for the target in question. The more creative the player, or the sharper his understanding of an NPC's motivations, the more often he can use this spell to his advantage. Players should be rewarded for this type of ingenuity, especially at lower levels when <em>suggestion</em> is one of the most powerful spells available. In mid-level play (or for a resourceful low-level villain), adversaries might start to succeed at Sense Motive checks to notice <em>suggestion</em> effects, potentially using <Link to="/spell/protection_from_evil">protection from evil</Link> or similar spells to either protect against them or end ongoing compulsions.</p>
</>};
const _illusions = {title: "Illusions", parent_topics: ["advanced_gm_topics","spells_of_intrigue","low_level_play_1_6"], siblings: ["divinations","enchantments","illusions","necromancy_ui"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 158</Link></p>
<p>Illusions are a staple of fantasy, and there are two main things to consider when adjudicating them at all levels of play: first, the different subschools of illusion, and second, disbelief and interaction. Once you are familiar with those, you will be set for handling illusions at all levels of play.</p>
<p><strong className="hl">Subschools:</strong> The three most easily confused subschools of illusion are figment, glamer, and phantasm. Figment spells, such as <Link to="/spell/silent_image">silent image</Link>, create wholly new sensory effects anyone can sense, even a mindless creature. The similar glamer subschool includes spells that change the way creatures sense something that already exists, such as <Link to="/spell/disguise_self">disguise self</Link> and <Link to="/spell/silence">silence</Link>. Phantasms, in contrast to the first two, are all in a creature's mind, and thus don't work on mindless creatures.</p>
<p>There are other subschools of illusion, such as patterns and shadow, but they tend to be easier to distinguish from each other, since patterns are typically light-based spells that impose conditions on enemies and shadow spells usually create shadows or quasi-real effects.</p>
<p><strong className="hl">Disbelief and Interaction:</strong> All three of the subschools above tend to have saving throw lines that say "Will disbelief," but they differ in how those saving throws apply.</p>
<p>Phantasms directly assail a creature's mind, so the creature automatically and immediately receives a saving throw to disbelieve a phantasm. Figments and glamers, however, have the more difficult-to-adjudicate rule that creatures receive a saving throw to disbelieve only if they "interact" with the illusion.</p>
<p>But what does it mean to interact with an illusion? It can't just mean looking at the illusion, as otherwise there would be no need to make the distinction, but drawing the line can be a bit tricky. Fortunately, the rules can help to define that difference. A creature that spends a move action to carefully study an illusion receives a Will saving throw to disbelieve that illusion, so that is a good benchmark from which to work.</p>
<p>Using that as a basis, interacting generally means spending a move action, standard action, or greater on a character's part. For example, if there were a <Link to="/spell/major_image">major image</Link> of an ogre, a character who tried to attack the ogre would receive a saving throw to disbelieve, as would a character who spent 1 minute attempting a Diplomacy check on the ogre. A character who just traded witty banter with the ogre as a free action would not, nor would a character who simply cast spells on herself or her allies and never directly confronted the illusory ogre. For a glamer, interacting generally works the same as for a figment, except that the interaction must be limited to something the glamer affects. For instance, grabbing a creature's ear would be an interaction for a human using <Link to="/spell/disguise_self">disguise self</Link> to appear as an elf, but not for someone using a glamer to change his hair color. Similarly, visually studying someone would not grant a save against a glamer that purely changed her voice.</p>
</>};
const _necromancy_ui = {title: "Necromancy", parent_topics: ["advanced_gm_topics","spells_of_intrigue","low_level_play_1_6"], siblings: ["divinations","enchantments","illusions","necromancy_ui"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 158</Link></p>
<p>There are a few necromancy spells that are similar enough to divinations that their information-gathering ability is worth considering.</p>
<p><strong><Link to="/spell/speak_with_dead">Speak with Dead</Link>:</strong> This spell - and other similar spells such as <Link to="/spell/call_spirit">call spirit</Link> - operate much like spells such as <Link to="/spell/speak_with_animals">speak with animals</Link>, allowing the caster to talk with a witness who is otherwise inaccessible.</p>
<p>This might seem like a surefire way to ruin any murder mystery, but there are mitigating factors that need to be taken into account. First, the corpse's knowledge is limited to what the creature knew while it was alive. A murderer's best recourse to avoiding this spell is using a disguise or stealth, so that the victim doesn't learn the killer's identity. Second, if the corpse is in no condition to speak, that stops <em>speak with dead</em> (though there are spells that can repair a corpse). Third, the spell allows a saving throw, and whether or not it succeeds, the spell fails for the next week, so a murderer can cast <em>speak with dead</em> herself to forestall future castings. Such precautions on the part of the murderer, however, give the PCs more information about her, so it advances the plot and the investigation in an interesting way. Finally, the corpse's answers are brief, cryptic, and repetitive; a corpse could provide an interesting clue that furthers the investigation, rather than allowing the PCs to abruptly solve the whole thing.</p>
</>};
const _mid_level_play_7_12 = {title: "Mid-Level Play (7-12)", parent_topics: ["advanced_gm_topics","spells_of_intrigue"], siblings: ["low_level_play_1_6","mid_level_play_7_12","high_level_play_13","example_of_intrigue_spells"], subtopics: ["conjuration_ui","divinations_2","enchantments_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 158</Link></p>
<p>The spells that come into prominence around 7th level can greatly affect campaigns, making it more complicated to run mysteries and interaction-heavy adventures. These spells are typically 4th level or higher.</p>
</>};
const _conjuration_ui = {title: "Conjuration", parent_topics: ["advanced_gm_topics","spells_of_intrigue","mid_level_play_7_12"], siblings: ["conjuration_ui","divinations_2","enchantments_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 158</Link></p>
<p>Teleportation effects have a big impact on your game because they can foil situations such as being tracked or followed, and can bypass protections, such as locks and walls. These kinds of effects often only enter the game during mid-level play.</p>
<p><strong><Link to="/spell/dimension_door">Dimension Door</Link>:</strong> <em>Dimension door</em> works by specifying a distance within long range, and then the character and any passengers suddenly appear at that spot. This is useful for bypassing obstacles, which means that any vault-maker who plans to keep out characters with access to teleportation magic needs to consider this and plan accordingly. <Link to="/spell/forbiddance">Forbiddance</Link> is an excellent effect for hedging out teleportation effects such as <em>dimension door,</em> and tying a <Link to="/spell/hallow">hallow</Link> or <Link to="/spell/unhallow">unhallow</Link> to <Link to="/spell/dimensional_anchor">dimensional anchor</Link> also works well for this. Remember that the caster of the spell can take no further actions after arriving at their destination unless she has the <Link to="/feat/dimensional_agility">Dimensional Agility</Link> feat.</p>
<p><strong><Link to="/spell/teleport">Teleport</Link>:</strong> <em>Teleport</em> is like <em>dimension door,</em> but adds considerably to the range and versatility. However, it is important to note that <em>teleport</em> has several special limitations built into the spell. For one thing, the caster needs to know both the layout of the destination as well as where it is physically located. If the caster has managed to use divinations to see the layout of a secret hideout, it still won't do any good unless she knows where it is. Second, areas of strong physical and magical energy may make teleportation more hazardous or even impossible. Many GMs forget this important component, which actually gives the villain a good in-game reason to establish a secret volcano lair or build her fortress on a ley line. This advice applies equally well to <Link to="/spell/greater_teleport">greater teleport</Link>, although the results of a failed teleportation are less dire.</p>
</>};
const _divinations_2 = {title: "Divinations", parent_topics: ["advanced_gm_topics","spells_of_intrigue","mid_level_play_7_12"], siblings: ["conjuration_ui","divinations_2","enchantments_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 159</Link></p>
<p>A lot of the game-changing divinations become available in the mid-level range, particularly <Link to="/spell/scrying">scrying</Link>.</p>
<p><strong><Link to="/spell/arcane_eye">Arcane Eye</Link>:</strong> Although similar to <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link>, <em>arcane eye</em> is better in most ways and only 1 spell level higher. With it, the caster can use enhanced vision, and move the sensor around to spy throughout an area, potentially revealing much of a dungeon's layout. It still has a long casting time, and it requires concentration to move it around and receive sensory information. Keep the eye's movement speed in mind; if the caster wants to actually look around and see the walls and ceilings, it can only move 10 feet per round, so it could potentially take quite a while to travel very far. Remember that it can only squeeze through holes 1 inch in diameter or larger, so most doors will likely block it. Enemies can still notice the sensor with a successful DC 24 Perception check, and while most foes can't really harm it (unless they have countermeasures such as <Link to="/spell/dispel_magic">dispel magic</Link> available), an enemy can prevent the eye from moving further by capturing it in a container, since it can't pass through solid barriers.</p>
<p><strong><Link to="/spell/commune">Commune</Link>:</strong> This is a critical spell to note, particularly because some improved familiars can use it earlier than normal and without spending the required gold. Normally, casting commune consumes 500 gp worth of special materials. Remember that <em>commune</em> talks to either a deity or divine agents; there is no guarantee that the spell will contact a god. The spell text includes a reminder that powerful beings of the Outer Planes are not necessarily omniscient, so be sure to think about whether they would know the answer. As a rule of thumb, look at the deity's portfolio and have the contacted agent be particularly knowledgeable in that area. This can also lead the PCs to find a cleric of a more appropriate deity to cast the spell on their behalf. This could add an interesting narrative step and a potential for roleplaying the interaction. In any case, remember that commune calls out that the question has to be one that could be answered with a yes or no, though if the deity's agent thinks a misleading one-word answer would harm their own interests, they might give up to five words to help clarify. Chances are, the PCs were already suspecting something before they cast the <em>commune</em> to begin with. For instance, if they already suspect that Lady Hidimbi is a rakshasa, they could ask if she is, and if it makes sense for the deity's agent to know the answer, it might say "yes." However, if they know there is a rakshasa but not who it is, they couldn't ask "Who is the rakshasa"? and receive the answer "Lady Hidimbi."</p>
<p><strong><Link to="/spell/commune_with_nature">Commune with Nature</Link>:</strong> Out of the three spells that return cryptic information from outside forces, <em>commune with nature</em> can potentially give the caster the most robust information, since it provides three full facts from a variety of topics. However, <em>commune with nature</em> provides limited types of information compared to other divinations. First of all, it is most useful in large outdoor areas, where it finds information across miles and miles (although that could lead to false positives, if the caster prefers a narrower area and doesn't think to specify). It is still effective in unworked caves, since 900 or more feet is usually enough to cover an area that the PCs want to explore, but remember that it can't see into settlements or even constructed dungeons at all. The awareness of nature tends to return general information rather than specific. A druid trying to determine the identity of the most powerful unnatural creature in the area might get a sense that a malevolent, unnatural thing has been stalking the jungle, but she probably wouldn't learn specifics about the creature. Nature can sense corruption in its midst, but doesn't possess specific knowledge about types of undead, for example.</p>
<p><strong><Link to="/spell/contact_other_plane">Contact Other Plane</Link>:</strong> One of the easier divinations to handle, this spell takes 10 minutes to cast, requires concentration, and has a non-negligible chance of rendering the caster useless for multiple weeks with no real way to remove the negative effect. Though the odds of getting a true answer aren't terrible, the spell isn't very trustworthy. All questions get a one-word answer, such as "yes" or "no," without exception. Compare this to <em>commune,</em> where a helpful deity might rarely give a few more words for context. With all these mitigating factors, this spell isn't especially dangerous to the integrity of a mystery.</p>
<p><strong><Link to="/spell/detect_scrying">Detect Scrying</Link>:</strong> This spell lasts a long time and automatically detects nearby scrying sensors, potentially even revealing the scryer's location and offering a glimpse of her. This spell doesn't entirely counter the scrying. The scrying effect still happens, but now it gives information to the target. Paranoid PCs are likely to cast this spell in an intrigue campaign when they have access to it, so have paranoid NPCs do so as well, but only if it makes sense that they would have a 4th-level slot they are willing to use. If a character always has an active <em>detect scrying</em> spell because it's a reasonable resource expenditure for that character, then the player and PCs will buy into it as part of the way the world works (particularly if they are also casting <em>detect scrying</em> each day). However, having the NPC conveniently use the spell off a scroll only when the PCs want to scry on her is sloppy - unless the PCs have given the NPC some strong reason to expect that they will scry on her that day. All in all, when <Link to="/spell/scrying">scrying</Link> starts becoming available, <em>detect scrying</em> is a great way to say "yes, but."</p>
<p><strong><Link to="/spell/divination">Divination</Link>:</strong> Like <Link to="/spell/augury">augury</Link>, <em>divination</em> also costs 25 gp, but can see 1 week into the future, and returns a short phrase, cryptic rhyme, omen, or something similar if successful. As the GM, be creative and play to your strengths when giving responses. For instance, poetry is a great way to structure a response for this spell, but if you aren't as skilled at writing verse, but are great at making collages, do that. The result of this spell could be anything! It's a great chance to give some interesting clues that the PCs might use to their advantage, or even figure out later in a moment of revelation. Coming up with a satisfying result for this spell takes time, so try to work with your players and have them come up with <em>divination</em> ideas outside of the session, if possible, letting them know that the result will be more fun if you have some time. If there's just no way to predict it until the game, however, there's nothing wrong with calling a quick time-out. <em>Divination</em> opens up tons of possibilities and puts all the power in your hands. The PC is spending 25 gp and a spell slot and trusting you to make it awesome, so make sure the answer is neither worthless nor overly blatant. Getting the result just right is more of an art than a science.</p>
<p><strong><Link to="/spell/find_the_path">Find the Path</Link>:</strong> The major restrictions for this spell are that the caster can only specify a location (not an object or creature) and the location must be prominent (which typically means either important or famous). Though many of the locations that an adventurer may be trying to find are important, not all of them are famous - and if they're famous enough, chances are that they aren't hard to find. Where the two overlap, there is usually some sort of powerful magical effect protecting the area from divinations. That's a reasonable plot device to use if you must have such a location, and it makes sense from a narrative perspective. After all, if the place were famous, chances are someone before the PCs would have tried basic divinations such as <em>find the path</em> already (and catalogued the results of their attempts), so it wouldn't also be hard to find. If you do use this plot device, it is a good idea to introduce it early as the result of the PCs' research. Finding old notes from a previous explorer who determined that a place must be protected against divinations right at the outset helps cement the fact as a fundamental part of the initial challenge, rather than seeming like a desperate cop-out added later as a counter to something unexpected the PCs did.</p>
<p><strong><Link to="/spell/legend_lore">Legend Lore</Link>:</strong> Legend lore costs 250 gp to cast, so the PCs probably won't cast it frivolously. They are likely looking for some interesting information about a person, place, or thing (here, thing means an object that can be at hand, not a conceptual thing like love or a specific mystery). Even if the target is at hand, casting the spell still takes up to 40 minutes. Without the subject, the spell takes a long time to cast - up to 12 weeks if working from rumors. Remember that not everything is legendary. Recognize that 11th-level characters often use or deal with things that would usually count as legendary; mythic creatures likely count as well, even if they have a low CR.</p>
<p>Depending on the PCs' previous access to the target, they might get vague results that lead them to somewhat better information about the target (if they know only rumors), incomplete and unspecific lore (if they started with detailed information), or legends about the target (if they have the target at hand). The kinds of legends aren't specified; they can come from all over. Legends are generally told verbally, so text is an easy format for conveying the results to your players. But legends can be anything, so unleash your creativity. Some legends might contradict one another, particularly if the PCs don't have the target at hand, and legends are rarely conclusive. Particularly if the object is at hand, be sure to give some useful or at least interesting information that enhances the experience, rather than just a rambling story that reveals nothing. Since the spell might reveal legends that were never generally known, it is an excellent opportunity to provide PCs with cool or useful information that goes above and beyond what they might expect if you want to advance the narrative more quickly or give them some more clues. Everything in the spell works at your pace.</p>
<p><strong><Link to="/spell/locate_creature">Locate Creature</Link>:</strong> This spell has many of the same problems as <em>locate object,</em> although running water blocks it rather than lead (the spell still helps in cities with canals, though). For this spell, a kind of creature is distinct from a type of creature. For instance, an orc is a kind of creature, while a humanoid is a type of creature. Remember that the caster must have seen that kind of creature up close. A specific creature must be known to the caster; this terminology is less-defined compared to other locating spells. Consider it synonymous with the "with which you are familiar" clause of the <Link to="/spell/sending">sending</Link> spell. A creature is known to the caster only if the caster has met the creature in person and recognizes it on sight.</p>
<p><strong><Link to="/spell/prying_eyes">Prying Eyes</Link>:</strong> This spell and its greater version work in much the same way - the only difference with the greater version is that the eyes can see extremely well with <em>true seeing</em> and a respectable Perception total skill bonus. Focusing on the commonalities, this spell is useful in much different situations than <em>arcane eye,</em> but situations that are more common in games using intrigue. The spell doesn't work well in a dungeon, but with its 1-mile radius, hour-per-level duration, and numerous eyes, it can tell the caster basically everything that is going on in a small community - without the caster having to concentrate. The main vulnerability of <em>prying eyes</em> is that it produces sensors that are both semi-tangible and visible and have only a +16 total skill bonus on Stealth checks. That means that opponents of a similar level to the caster are likely to see the eyes and could destroy them easily. Remember that an eye's destruction is interesting knowledge that a savvy PC can keep in mind. If that sweet and foppish nobleman somehow noticed the eye, chances are he is more than he seems, or at least that he has bodyguards with keen vision.</p>
<p>The spell says that an eye sent into the darkness could hit an obstacle and be destroyed. This should only happen if the caster tells the eyes to act recklessly, such as if he commands them to travel so far in so short a time that they have to fly at full speed, rather than slowly traveling in the dark. As the spell mentions, when an eye is destroyed, the caster is aware of the destruction, but can never be sure how it happened, which can lead to interesting speculation and more investigations. If the eyes are doing general scouting, be sure to think of some amusing anecdotes of things the eyes saw, potentially showing another side of an NPC by relaying information that isn't crucial to the plot. This serves many purposes. First of all, it gives the caster a strong sense that the spell is effective, and it helps her feel like a powerful diviner whose spells provide lots of information. Second, it adds depth to the game world and helps change the mood a bit or relieve tension, particularly if it is humorous. Finally, and most importantly, it serves as a smoke screen if you decide to put in extra clues that the caster wasn't necessarily trying to find. For example, if you often have the eyes report interesting extra tidbits, you could slip in a small bit about a certain woman hiding her silverware, and at first it will seem like just another peculiarity, perhaps to protect her valuables from thieves. If you never describe anything from the eyes except for plot-crucial information, the PCs are very likely to immediately jump to investigating the woman (who you were hoping to slowly reveal had just been infected with lycanthropy).</p>
<p><strong><Link to="/spell/scrying">Scrying</Link>:</strong> The most important thing to remember about <em>scrying</em> is that it must scry a creature. It is not able to scry a location. Erroneously allowing the spell to scry a location is a common mistake. The caster needs to buy a reusable 1,000 gp mirror and then spend an hour to see and hear a small area around a creature (only 10 feet in all directions, but with magically enhanced senses for vision). This lasts for 1 minute per level, and the sensor moves with the creature with a 150-foot speed. Creatures are able to notice <em>scrying's</em> effect as they would with other scrying sensors, requiring a successful DC 24 Perception check. There's good news for the target, however. First of all, those observed targets can automatically detect (and possibly uncover the source of) the spell via the 24-hour-duration <Link to="/spell/detect_scrying">detect scrying</Link> spell. Even without that spell at their disposal, the target receives a Will saving throw and spell resistance (if applicable) to avoid the attempt (and a failed attempt prevents another from that caster for 24 hours). Not only that, unless the target and caster have met before, chances are that the target also gains at least a +3 bonus on the saving throw (from secondhand knowledge and a picture, which is the best the PCs can usually hope to have). <em>Scrying</em> can be enormously useful for a spy, if the circumstances all align well for the scryer, but it isn't particularly useful on its own for a potential <Link to="/spell/teleport">teleport</Link>. The 10-foot-radius visual requires the target to move in order to provide a clear idea of the layout of the destination, and the spell doesn't directly indicate the location. The PCs must use contextual clues to figure this out, unless they already know where the target is.</p>
<p><strong><Link to="/spell/stone_tell">Stone Tell</Link>:</strong> This one is similar enough in nature to <Link to="/spell/speak_with_animals">speak with animals</Link> and <Link to="/spell/speak_with_plants">speak with plants</Link> that much of the same advice is applicable for you to apply. Play up the stones's different way of thinking, including how they view the world and events on a much longer timescale than most living beings.</p>
</>};
const _enchantments_2 = {title: "Enchantments", parent_topics: ["advanced_gm_topics","spells_of_intrigue","mid_level_play_7_12"], siblings: ["conjuration_ui","divinations_2","enchantments_2"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 162</Link></p>
<p>In mid-level play, enchantments become more versatile, affecting more creature types, and dominate spells also come into play.</p>
<p><strong><Link to="/spell/dominate_person">Dominate Person</Link>:</strong> Unlike <Link to="/spell/suggestion">suggestion</Link>, this spell gives the caster total control over another character, and the demands don't need to be reasonable. The one saving grace in a game that employs intrigue is that the Sense Motive DC to detect the effect is only 15, so someone is very likely to notice it. Still, the effect is quite powerful, and it can potentially ruin a player's time if her character becomes dominated, or it can ruin a plot if players dominate a vital NPC. The spell even allows a caster to use the dominated creature as a spy and see through its eyes, though again, the low DC of the Sense Motive check means that there are usually better ways to do so. In addition to other means of protecting against compulsions, <em>dominate person</em> has two special escape clauses.</p>
<p>First, the creature never takes obviously self-destructive actions. The spell doesn't mention whether this means only bodily harm, but there are many sorts of destruction beyond the physical. For instance, a command to make a king announce something that will obviously irreparably destroy his reputation and tear his kingdom apart likely counts. Even if something isn't obviously self-destructive, each time a command forces the dominated person to take actions against his nature, he receives another saving throw with a +2 bonus. It's up to you to determine how often to give these new saving throws if orders result in many successive acts against a character's nature, but be fair in applying them at the same rate for both PCs and NPCs. Since being dominated can be highly frustrating for PCs, you can consider choosing a particularly fast rate in applying these new saving throws in both cases, though be sure to let the PCs know about this if it looks like they can use a dominate effect before the NPCs do. The advice here also applies to <em>dominate monster.</em></p>
</>};
const _high_level_play_13 = {title: "High-Level Play (13+)", parent_topics: ["advanced_gm_topics","spells_of_intrigue"], siblings: ["low_level_play_1_6","mid_level_play_7_12","high_level_play_13","example_of_intrigue_spells"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 162</Link></p>
<p>The most reliable spells for finding out information arrive at higher levels, and are 7th level or higher.</p>
<h3 id="rule-high_level_play_13-abjuration"><Link to="/spelldef/abjuration">Abjuration</Link></h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 162</Link></p>
<p>At least one noteworthy abjuration spell becomes available at 15th level, with far-reaching effects.</p>
<p><strong><Link to="/spell/mind_blank">Mind Blank</Link>:</strong> The 8th-level spell mind blank is a powerful and versatile protection spell that becomes ubiquitous at high levels. Spells such as <Link to="/spell/discern_location">discern location</Link> can make people easy to find in high-level play, so a credible villain whose identity the PCs know should have <em>mind blank</em> cast on himself at all times. If the villain absolutely can't employ a spellcaster with this spell, consider having him join forces with a hag coven (which can offer unlimited castings of <em>mind blank</em> spells each day) or equipping him with a <Link to="/magic-wondrous/headband_of_sealed_thoughts">headband of sealed thoughts</Link>.</p>
<p>The PCs are likely starting to cast <em>mind blank</em> as much as possible at this level as well, so the villains should put in at least as much effort. Obviously, the villain won't be able to keep all his allies and staff under <em>mind blank,</em> which provides plenty of opportunities for clever PCs to exploit. For instance, though scrying on a nearby ally of the villain still doesn't reveal the villain protected by <em>mind blank,</em> PCs might be able to notice a one-sided conversation that indicates that someone with <em>mind blank</em> is present.</p>
<p>It all comes down to the villain mustering a defense that is reasonable given his resources, and allowing the PCs to find a clever way to circumvent those defenses. No defense in the world is perfect. For instance, even if a villain somehow convinced a coven of hags to act as a source of <em>mind blank</em> for his entire network of allies, the hags become a new vulnerability. The PCs can capture one of the villain's agents, discover information about the hags, and then eliminate the hags or scout out their coven's domain in an attempt to ambush the villain on his way to reestablishing his <em>mind blank.</em></p>
<h3 id="rule-high_level_play_13-divinations"><Link to="/rule/divinations">Divinations</Link></h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 162</Link></p>
<p>Divinations in high-level play tend to be incredibly powerful, with only <em>mind blank</em> offering protection.</p>
<p><strong><Link to="/spell/discern_location">Discern Location</Link>:</strong> This spell lacks the mitigations common to lower-level locating spells. Unless you have a deity willing to cooperate, the only protection from <em>discern location</em> is <em>mind blank.</em> Because not everyone can be under <em>mind blank</em> all the time, <em>discern location</em> is incredibly useful, allowing the PCs to get close to a target protected by <em>mind blank</em> as long as he has allies or interacts with other people - almost a certainty in an intrigue-focused game. The spell becomes well known by most NPCs, and even threatening to use discern location can be a powerful tactic.</p>
<p><strong><Link to="/spell/greater_scrying">Greater Scrying</Link>:</strong> This is mostly the same as its lesser version, but the timing is vastly different. It takes only a single standard action to cast, and can last the better part of a day. The long duration gives the caster a much greater chance of following the target to a place about which the caster knows the exact layout and precise location. On the other hand, by this level, <Link to="/spell/detect_scrying">detect scrying</Link> becomes easier to cast, many creatures can see invisible spies, and <em>mind blank</em> may shield targets.</p>
<p><strong><Link to="/spell/vision">Vision</Link>:</strong> Compared to <Link to="/spell/legend_lore">legend lore</Link>, <em>vision</em> takes much less time to cast, causes fatigue, and requires a caster level check to succeed. Stylistically, the big difference is that the caster sees a single vision rather than hearing information from numerous legends. The character also gets to ask a particular question to narrow the scope of the spell, so that one vision is likely to be related to a topic about which the character really wants to know. For a vision spell, put some good thought into exactly what the PC sees, and try to describe it as vividly as possible with plenty of visual details. You can tailor the vision to show the most-interesting visual snippet related to the question the PC asked. By describing what the PC sees as if she were there, you make the spell an experience rather than a simple information dump. The PC must still interpret what she saw. You may even wish to take the spellcaster's player to another room and describe the vision, then let her return to describe and interpret what her spell revealed to the rest of the party. Sometimes the caster will focus on one of the visual details when another was an even greater clue, which she only discovers later on in an exciting moment of revelation.</p>
</>};
const _example_of_intrigue_spells = {title: "Example of Intrigue Spells", parent_topics: ["advanced_gm_topics","spells_of_intrigue"], siblings: ["low_level_play_1_6","mid_level_play_7_12","high_level_play_13","example_of_intrigue_spells"], subtopics: ["the_story","divination_poem","vision"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 163</Link></p>
<p>The following detailed example puts some of the above advice into practice, using two of the most difficult spells to adjudicate, divination and vision. The GM in this example provides different sets of clues to her players with each spell that help point them toward the mystery's solution only when examined together.</p>
</>};
const _the_story = {title: "The Story", parent_topics: ["advanced_gm_topics","spells_of_intrigue","example_of_intrigue_spells"], siblings: ["the_story","divination_poem","vision"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 163</Link></p>
<p>Long ago, a powerful hag led a wicked coven that sought to destroy the kingdom of Gaheris. Seeking to turn enemies into allies, the king of Gaheris convinced the two weaker sisters to break their coven and betray their leader. In exchange, he used magic to reincarnate them into humans and married them to two of his most powerful dukes. The hags sealed their elder sister in her shack and burned her alive, only to see her to rise as a powerful <Link to="/monster/witchfire">witchfire</Link>. After weeks of pitched battle with the undead hag that ranged all across the kingdom, the two sisters trapped the witchfire on the other side of a thick wall in the royal mausoleum, and warded it to contain incorporeal entities, believing they had sealed away the menace forever.</p>
<p>Centuries later, a tomb robber accidentally chipped a hole in the wall, allowing the trapped witchfire to escape. Now consumed with revenge, the enraged undead creature seeks out any of her treacherous sisters' descendants. Given the interbreeding common among the nobility, this includes much of Gaheris's current nobility. Given her original goal of destroying the kingdom, that suits the witchfire just fine. Using ritual magic born of hatred and well beyond a witchfire's normal abilities, she called back the souls of her sisters and bound them into black sapphires, allowing her to gain all the powers of a coven and more. Then, she returned to a cave near her old burned-down hut in the swamp and began to enact her vengeance, using mind-controlled minions to burn her targets alive.</p>
<p>The PCs receive a plea from the current king of Gaheris, asking them to investigate the cause of the streak of arson, which has been targeting members of his family. Kyra casts <Link to="/spell/divination">divination</Link> with the goal of solving the arsons and Ezren casts <Link to="/spell/vision">vision</Link>, hoping to learn about the true source of the arsons.</p>
</>};
const _divination_poem = {title: "Divination Poem", parent_topics: ["advanced_gm_topics","spells_of_intrigue","example_of_intrigue_spells"], siblings: ["the_story","divination_poem","vision"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 163</Link></p>
<p>The GM composes a poem for Kyra to represent the information imparted to her by her deity.</p>
<blockquote>
<p>The flame of passion, that which brightest burns,<br/>Of love and hatred treasured or betrayed,<br/>We chip away at every wall in turns,<br/>Not thwarted is the payment, just delayed.</p>
<p>In blackened yawn near the first hungry pyre,<br/>Twin sleepers lie, once foul but later fair,<br/>Dark beauty gleams the prisons two to break,<br/>No loyalty, no love except to take.</p>
</blockquote>
<p><strong className="hl">Interpretation:</strong> When read aloud, the first line of the poem contains a homophone of the word "witch." The verse references the witchfire's escape when the wall of the tomb was chipped away. The witchfire's vengeance, or payment as the poem describes it, has just been delayed. The cave mouth is a blackened yawn, and the "first" pyre is the one where the hag was burned, though the PCs might go to the first arson as a red herring before they realize this, except perhaps by using additional clues from Ezren's <em>vision.</em> The twin sleepers in prisons of dark beauty are the sisters' souls trapped in black sapphires; freeing them from their magical prisons would weaken the witchfire substantially. The final line hints at the story of betrayal between the sisters, and of how the witchfire only gained their cooperation by taking it forcefully.</p>
</>};
const _vision = {title: "Vision", parent_topics: ["advanced_gm_topics","spells_of_intrigue","example_of_intrigue_spells"], siblings: ["the_story","divination_poem","vision"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 163</Link></p>
<p>The GM writes a descriptive vision for Ezren.</p>
<p>Flames engulf everything around you. You're in a simple wooden hut that looks out over a swamp onto a great cypress tree in the distance. You see two silhouettes outside, and the front door seems barricaded. Your vision blurs from the smoke and moves violently toward that entrance, as if you were attempting to smash it down - a futile effort. At the edges of your vision, you see countless objects bursting into flames, and you can barely make out strange spices, straw dolls, and what appears to be an eyeball in a bowl of water. Then there is nothing but flame. Your view shifts toward the floor, as your charred hand, with long fingernails, bashes over and over against the floor of the hut. But the effort was too late, and your hand stops moving, as the inferno rises once more, consuming everything.</p>
<p>You shake yourself from the vision and find yourself fatigued, your breathing and heart rate still elevated from the horrible desperation of the burning hut.</p>
<p><strong className="hl">Interpretation:</strong> The true source of the arsons, when it comes down to it, is the original killing of the coven leader, who became a witchfire. The vision provides numerous clues to some of the elements of the story, but the most striking one might be the distinctive great cypress tree. With some further research, Ezren might be able to locate it, allowing him to find the hut's remains, which are also near the cave where the witchfire placed the door to her new demesne.</p>
</>};
export default {step_6_spells:_step_6_spells,choosing_spells:_choosing_spells,spell_lists:_spell_lists,spell_lists_1:_spell_lists_1,spell_lists_2:_spell_lists_2,spell_lists_3:_spell_lists_3,spell_lists_4:_spell_lists_4,spell_lists_5:_spell_lists_5,spell_lists_6:_spell_lists_6,step_7_monster_options:_step_7_monster_options,choosing_monster_options:_choosing_monster_options,combat_options:_combat_options,cunning:_cunning,monstrous:_monstrous,powerful:_powerful,quick:_quick,tough:_tough,magic_options:_magic_options,creature:_creature,offensive:_offensive,support:_support,versatile:_versatile,social_options:_social_options,inspiration:_inspiration,miscellaneous:_miscellaneous,universal_options:_universal_options,step_8_skills:_step_8_skills,assigning_skills:_assigning_skills,choosing_skills:_choosing_skills,step_9_damage:_step_9_damage,assigning_damage:_assigning_damage,giving_a_monster_more_attacks:_giving_a_monster_more_attacks,other_calculations:_other_calculations,monster_creation_examples:_monster_creation_examples,extended_example_medusa:_extended_example_medusa,monster_examples:_monster_examples,me_worg:_me_worg,me_mastodon:_me_mastodon,me_griffon:_me_griffon,me_goblin_fighter:_me_goblin_fighter,me_zombie_minotaur:_me_zombie_minotaur,me_bat_swarm:_me_bat_swarm,me_imp:_me_imp,me_fire_giant:_me_fire_giant,me_satyr:_me_satyr,me_frost_giant_explorer:_me_frost_giant_explorer,me_vampire_cleric:_me_vampire_cleric,me_ogre_mage:_me_ogre_mage,me_night_hag_soul_collector:_me_night_hag_soul_collector,me_marilith_general:_me_marilith_general,me_ancient_blue_dragon:_me_ancient_blue_dragon,me_pit_fiend:_me_pit_fiend,spells_of_intrigue:_spells_of_intrigue,low_level_play_1_6:_low_level_play_1_6,divinations:_divinations,enchantments:_enchantments,illusions:_illusions,necromancy_ui:_necromancy_ui,mid_level_play_7_12:_mid_level_play_7_12,conjuration_ui:_conjuration_ui,divinations_2:_divinations_2,enchantments_2:_enchantments_2,high_level_play_13:_high_level_play_13,example_of_intrigue_spells:_example_of_intrigue_spells,the_story:_the_story,divination_poem:_divination_poem,vision:_vision}