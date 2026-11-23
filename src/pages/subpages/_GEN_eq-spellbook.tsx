import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import {Block,Row,Cell} from '../../components/Block';
import Tabular from '../../components/Tabular';
const _not_found = {title: "Unknown", jsx: <><h2 id="eq-spellbook-not_found-error">Error</h2>
<p>Unable to find the requested spellbook.</p>
</>};
const _apprentice_chapbook_of_rul_thaven = {title: "Apprentice Chapbook of Rul Thaven", jsx: <><div className="headerLike"><div>Apprentice Chapbook of Rul Thaven</div><div className="sub">(Level 2 Diviner)</div></div>
<p><em>This slim book is carefully but amateurishly bound, with leather stretched tight across thin boards. The writing inside is fussy and crammed together, with words that are occasionally illegible. Eight of its pages contain spells; the final 10 pages are blank. A portrait of a plain woman, unsmiling, has been bound into the inside front cover.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 121</Link></p>
<Tabular format="sbook" o="Illusion, transmutation" v="195" />
<h4 id="eq-spellbook-apprentice_chapbook_of_rul_thaven-spells">Spells</h4>
<Block size="simple">
<Row><Cell>1st</Cell><Cell><Link to="/spell/comprehend_languages">Comprehend languages</Link>&#42;, <Link to="/spell/detect_secret_doors">detect secret doors</Link>&#42;, <Link to="/spell/detect_undead">detect undead</Link>&#42;, <Link to="/spell/identify">identify</Link>&#42;, <Link to="/spell/protection_from_evil">protection from evil</Link>, <Link to="/spell/protection_from_law">protection from law</Link>, <Link to="/spell/summon_monster_i">summon monster I</Link>, <Link to="/spell/true_strike">true strike</Link>&#42;</Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.</li>
</ul>
</>};
const _arctic_call = {title: "Arctic Call", className: "noBullet", jsx: <><div className="headerLike"><div>Arctic Call</div><div className="sub">(Level 11 Evoker)</div></div>
<p><em>Fine vellum sheets fill these two well-worn books. Beautiful illustrations depict the effects of each spell, many with a distinctly arctic theme. Though the pages and their wintry illustrations are of high quality, the protective leather case that encloses both books smells and feels greasy, as if the hide has been crudely waterproofed with animal fat.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 124</Link></p>
<Tabular format="sbook" o="Illusion, necromancy" p={<><em>Fire trap</em> modified to inflict cold damage (Reflex DC 17)</>} v="4335" r="5985" />
<h4 id="eq-spellbook-arctic_call-spells">Spells</h4>
<Block size="simple">
<Row><Cell>6th</Cell><Cell><Link to="/spell/contingency">Contingency</Link>&#42;, <Link to="/spell/freezing_sphere">freezing sphere</Link>&#42;, <Link to="/spell/repulsion">repulsion</Link></Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/cone_of_cold">Cone of cold</Link>&#42;, <Link to="/spell/mages_private_sanctum">mage's private sanctum</Link>, <Link to="/spell/permanency">permanency</Link>, <Link to="/spell/teleport">teleport</Link>, <Link to="/spell/wall_of_force">wall of force</Link>&#42;</Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/ice_storm">Ice storm</Link>&#42;, <Link to="/spell/shout">shout</Link>&#42;, <Link to="/spell/stoneskin">stoneskin</Link>, <Link to="/spell/symbol_of_revelation">symbol of revelation</Link>, <Link to="/spell/wall_of_ice">wall of ice</Link>&#42;</Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/arcane_sight">Arcane sight</Link>, <Link to="/spell/dispel_magic">dispel magic</Link>, <Link to="/spell/elemental_aura">elemental aura</Link>&#42;, <Link to="/spell/fire_trap">fire trap</Link>, <Link to="/spell/heroism">heroism</Link>, <Link to="/spell/lightning_bolt">lightning bolt</Link>&#42;, <Link to="/spell/phantom_steed">phantom steed</Link>, <Link to="/spell/seek_thoughts">seek thoughts</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/bulls_strength">Bull's strength</Link>, <Link to="/spell/false_life">false life</Link>&dagger;, <Link to="/spell/glitterdust">glitterdust</Link>, <Link to="/spell/hideous_laughter">hideous laughter</Link>, <Link to="/spell/make_whole">make whole</Link>, <Link to="/spell/resist_energy">resist energy</Link>, <Link to="/spell/rope_trick">rope trick</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/detect_secret_doors">Detect secret doors</Link>, <Link to="/spell/endure_elements">endure elements</Link>, <Link to="/spell/enlarge_person">enlarge person</Link>, <Link to="/spell/feather_fall">feather fall</Link>, <Link to="/spell/mage_armor">mage armor</Link>, <Link to="/spell/magic_missile">magic missile</Link>&#42;, <Link to="/spell/obscuring_mist">obscuring mist</Link>, <Link to="/spell/shield">shield</Link>, <Link to="/spell/shocking_grasp">shocking grasp</Link>&#42;</Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.  </li>
<li><strong>&dagger;</strong> A spell from the spellbook creator's opposition school.</li>
</ul>
<h4 id="eq-spellbook-arctic_call-ritual">Ritual</h4>
<Ability id="rime-bite-su" icon={["boost"]}>
<Pair single id="rime-bite-su" flavor="You infuse your spell with a biting cold that few can withstand.">Rime Bite (Su)</Pair>
<Pair title="Free Action">Spend this boon when you cast a spell with the cold descriptor. Any damage from that spell ignores all <Link to="/umr/resistance">resistance</Link> to cold, but does not ignore <Link to="/umr/immunity">immunity</Link> to cold.</Pair>
</Ability>
</>};
const _arrowsongs_sorrow = {title: "Arrowsong's Sorrow", jsx: <><div className="headerLike"><div>Arrowsong's Sorrow</div><div className="sub">(Level 3 Universalist)</div></div>
<p><em>This drab leather tome is stamped plainly with elven lettering, appearing at first glance as little more than a journeyman's treatise on spellcasting. Penned into almost every margin, however, are copious notes by an author who identifies herself only as "Arrowsong." These annotations discuss numerous spellcasting fallacies made by the tome's original authors and simple (yet effective) countermeasures that more martially inclined persons can use to disrupt spellcasting. The overall tone of Arrowsong's notes is one of bitter melancholy, and an equal amount of space is dedicated to slanderous poetry directed toward Arrowsong's parents and the book's writers, who might be the same people.</em></p>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 30</Link></p>
<Tabular format="sbook" v="1200" r="2200" />
<h4 id="eq-spellbook-arrowsongs_sorrow-spells">Spells</h4>
<Block size="simple">
<Row><Cell>3rd</Cell><Cell><Link to="/spell/contingent_action">Contingent action</Link>, <Link to="/spell/cloak_of_winds">cloak of winds</Link>, <Link to="/spell/fireball">fireball</Link>, <Link to="/spell/lightning_bolt">lightning bolt</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/acid_arrow">Acid arrow</Link>, <Link to="/spell/arrow_eruption">arrow eruption</Link>, <Link to="/spell/protection_from_arrows">protection from arrows</Link>, <Link to="/spell/scorching_ray">scorching ray</Link>, <Link to="/spell/stone_call">stone call</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/blend">Blend</Link>, <Link to="/spell/gravity_bow">gravity bow</Link>, <Link to="/spell/identify">identify</Link>, <Link to="/spell/longshot">longshot</Link>, <Link to="/spell/magic_missile">magic missile</Link>, <Link to="/spell/shield">shield</Link>, <Link to="/spell/true_strike">true strike</Link></Cell></Row></Block>
<h4 id="eq-spellbook-arrowsongs_sorrow-ritual">Ritual</h4>
<Ability id="disruption-master-ex" icon={["lower"]}>
<Pair single id="disruption-master-ex" flavor="Arrowsong's claims about the imperfections of spellcasting and the failings of magic provide additional insight into interrupting spellcasting.">Disruption Master (Ex)</Pair>
<Pair title="Passive Ability">Unlike other boons, you do not spend this one. Until you prepare spells again, when you damage a foe or the foe fails a saving throw against a spell of yours, the foe also takes a -2 penalty on all <Link to="/rule/concentration">concentration</Link> checks it attempts for 1 round.</Pair>
</Ability>
</>};
const _book_of_harms = {title: "Book of Harms", className: "noBullet", jsx: <><div className="headerLike"><div>Book of Harms</div><div className="sub">(Level 5 Evoker)</div></div>
<p><em>The leather wrapping of this book is of an indeterminate type, and gives off a faint and unpleasant scent, as of charred meat. The writing inside is in a jagged hand, and many notes on the ash-smudged pages indicate its previous owner sought ever more damaging magic. A glittering rune in the cover's center is shaped vaguely like a lightning bolt.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 122</Link></p>
<Tabular format="sbook" o="Divination, transmutation" p={<><Link to="/eq-misc/average_lock">Average lock</Link> (DC 25)</>} v="535" r="900" />
<h4 id="eq-spellbook-book_of_harms-spells">Spells</h4>
<Block size="simple">
<Row><Cell>3rd</Cell><Cell><Link to="/spell/fireball">Fireball</Link>&#42;, <Link to="/spell/lightning_bolt">lightning bolt</Link>&#42;</Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/acid_arrow">Acid arrow</Link>, <Link to="/spell/darkness">darkness</Link>&#42;, <Link to="/spell/ghoul_touch">ghoul touch</Link>, <Link to="/spell/gust_of_wind">gust of wind</Link>&#42;</Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/burning_hands">Burning hands</Link>&#42;, <Link to="/spell/color_spray">color spray</Link>, <Link to="/spell/corrosive_touch">corrosive touch</Link>, <Link to="/spell/hydraulic_push">hydraulic push</Link>&#42;, <Link to="/spell/hypnotism">hypnotism</Link>, <Link to="/spell/magic_missile">magic missile</Link>&#42;, <Link to="/spell/ray_of_enfeeblement">ray of enfeeblement</Link>, <Link to="/spell/shocking_grasp">shocking grasp</Link>&#42;</Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.</li>
</ul>
<h4 id="eq-spellbook-book_of_harms-ritual">Ritual</h4>
<Ability id="harmful-surge-su" icon={["boost","down"]}>
<Pair single id="harmful-surge-su" flavor="You can maximize a spell, but doing so damages you.">Harmful Surge (Su)</Pair>
<Pair title="Free Action">Spend this boon effect when you cast a wizard evocation spell. When you do, you can treat that spell as if it were cast with the <Link to="/feat/maximize_spell">Maximize Spell</Link> metamagic feat, but you take 1d4 points of damage <strong>&times;</strong> the level of the spell that you are maximizing. The damage you take cannot be reduced in any way.</Pair>
</Ability>
</>};
const _book_of_the_grave = {title: "Book of the Grave", className: "noBullet", jsx: <><div className="headerLike"><div>Book of the Grave</div><div className="sub">(Level 6 Necromancer)</div></div>
<p><em>This tome reeks of decomposing flesh or some even fouler stench. Grave mold clings to the worm-eaten cover, and dirt stains the pages. Some pages have been torn out.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 122</Link></p>
<Tabular format="sbook" o="Enchantment, transmutation" p={<>The edges of the first three pages are coated with <Link to="/eq-poison/nitharit">nitharit</Link> poison</>} v="815" r="1265" />
<h4 id="eq-spellbook-book_of_the_grave-spells">Spells</h4>
<Block size="simple">
<Row><Cell>3rd</Cell><Cell><Link to="/spell/blood_biography">Blood biography</Link>, <Link to="/spell/ray_of_exhaustion">ray of exhaustion</Link>&#42;, <Link to="/spell/vampiric_touch">vampiric touch</Link>&#42;</Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/command_undead">Command undead</Link>&#42;, <Link to="/spell/create_treasure_map">create treasure map</Link>, <Link to="/spell/ghoul_touch">ghoul touch</Link>&#42;, <Link to="/spell/spectral_hand">spectral hand</Link>&#42;, <Link to="/spell/stone_call">stone call</Link>, <Link to="/spell/web">web</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/burning_hands">Burning hands</Link>, <Link to="/spell/chill_touch">chill touch</Link>&#42;, <Link to="/spell/disguise_self">disguise self</Link>, <Link to="/spell/mage_armor">mage armor</Link>, <Link to="/spell/protection_from_good">protection from good</Link>, <Link to="/spell/ray_of_enfeeblement">ray of enfeeblement</Link>&#42;, <Link to="/spell/sculpt_corpse">sculpt corpse</Link>&#42;, <Link to="/spell/shield">shield</Link>, <Link to="/spell/true_strike">true strike</Link>, <Link to="/spell/ventriloquism">ventriloquism</Link></Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.</li>
</ul>
<blockquote>
<p><strong className="hl">Note:</strong> The original text also contains a 3rd-level spell named "vitriol", but the spell was not included in the source book. (The spell <Link to="/spell/vitriolic_mist">vitriolic mist</Link> was given, but it's 4th level, out of the range of a 6th-level necromancer.)</p>
</blockquote>
<h4 id="eq-spellbook-book_of_the_grave-ritual">Ritual</h4>
<Ability id="breath-of-the-grave-su" icon={["cone","lower","down"]}>
<Pair single id="breath-of-the-grave-su">Breath of the Grave (Su)</Pair>
<Pair title="Swift Action">Spend this boon's effect to breathe a 15-foot cone of rotting stench. Creatures within the cone must succeed at a Fortitude saving throw (DC 10 + your highest caster level in a class that prepares spells) or be <Link to="/misc/sickened">sickened</Link> for 1 round. This spends the boon.</Pair>
<Pair title="Special">After this boon has been spent, you take a -4 penalty on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/stealth">Stealth</Link> checks until you prepare spells again.</Pair>
</Ability>
</>};
const _calamaes_fragment = {title: "Calamaes Fragment", className: "noBullet", jsx: <><div className="headerLike"><div>Calamaes Fragment</div><div className="sub">(Level 7 Transmuter)</div></div>
<p><em>Two gold-plated bronze covers bind this gaudy tome. Several synonyms for "wealth" are neatly chiseled in different languages on the cover.</em></p>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 18</Link></p>
<Tabular format="sbook" o="Not provided" v="1565" />
<h4 id="eq-spellbook-calamaes_fragment-spells">Spells</h4>
<Block size="simple">
<Row><Cell>4th</Cell><Cell><Link to="/spell/dimension_door">Dimension door</Link>, <Link to="/spell/lesser_age_resistance">lesser age resistance</Link>&#42;, <Link to="/spell/liquefy">liquefy</Link>&#42;</Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/deft_digits">Deft digits</Link>&#42;, <Link to="/spell/dispel_magic">dispel magic</Link>, <Link to="/spell/greater_magic_weapon">greater magic weapon</Link>&#42;, <Link to="/spell/haste">haste</Link>&#42;, <Link to="/spell/hostile_levitation">hostile levitation</Link>&#42;, <Link to="/spell/rags_to_riches">rags to riches</Link>&#42;</Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/alter_self">Alter self</Link>&#42;, <Link to="/spell/darkvision">darkvision</Link>&#42;, <Link to="/spell/fools_gold_aa">fool's gold</Link>&#42;, <Link to="/spell/glide">glide</Link>&#42;, <Link to="/spell/glitterdust">glitterdust</Link>, <Link to="/spell/scorching_ray">scorching ray</Link>, <Link to="/spell/tears_to_wine">tears to wine</Link>&#42;, <Link to="/spell/touch_of_idiocy">touch of idiocy</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/ant_haul">Ant haul</Link>&#42;, <Link to="/spell/jury_rig">jury-rig</Link>&#42;, <Link to="/spell/mage_armor">mage armor</Link>, <Link to="/spell/magic_missile">magic missile</Link>, <Link to="/spell/polypurpose_panacea">polypurpose panacea</Link>&#42;, <Link to="/spell/shocking_grasp">shocking grasp</Link>, <Link to="/spell/sleep">sleep</Link></Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.</li>
</ul>
</>};
const _chymists_guidebook = {title: "Chymist's Guidebook", jsx: <><div className="headerLike"><div>Chymist's Guidebook</div><div className="sub">(Level 15 Alchemist)</div></div>
<p><em>The pages of this formula book are carefully varnished. Sprinkled among the formulae are details and diagrams of alchemical devices, many of which seem to defy the normal conventions of alchemy and physics. The last page contains incomplete notes on the preparation of experimental mutagens.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 125</Link></p>
<Tabular format="sbook" p={<><Link to="/eq-misc/good_lock">Good lock</Link> (DC 30)</>} v="2545" />
<h4 id="eq-spellbook-chymists_guidebook-formulae">Formulae</h4>
<Block size="simple">
<Row><Cell>5th</Cell><Cell><Link to="/spell/delayed_consumption">Delayed consumption</Link>, <Link to="/spell/magic_jar">magic jar</Link>, <Link to="/spell/spell_resistance">spell resistance</Link></Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/detonate">Detonate</Link>, <Link to="/spell/freedom_of_movement">freedom of movement</Link>, <Link to="/spell/greater_invisibility">greater invisibility</Link>, <Link to="/spell/restoration">restoration</Link>, <Link to="/spell/stoneskin">stoneskin</Link></Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/amplify_elixir">Amplify elixir</Link>, <Link to="/spell/arcane_sight">arcane sight</Link>, <Link to="/spell/haste">haste</Link>, <Link to="/spell/heroism">heroism</Link>, <Link to="/spell/protection_from_energy">protection from energy</Link>, <Link to="/spell/thorn_body">thorn body</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/alter_self">Alter self</Link>, <Link to="/spell/bears_endurance">bear's endurance</Link>, <Link to="/spell/false_life">false life</Link>, <Link to="/spell/fire_breath">fire breath</Link>, <Link to="/spell/see_invisibility">see invisibility</Link>, <Link to="/spell/transmute_potion_to_poison">transmute potion to poison</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/ant_haul">Ant haul</Link>, <Link to="/spell/comprehend_languages">comprehend languages</Link>, <Link to="/spell/cure_light_wounds">cure light wounds</Link>, <Link to="/spell/detect_secret_doors">detect secret doors</Link>, <Link to="/spell/enlarge_person">enlarge person</Link>, <Link to="/spell/jump">jump</Link>, <Link to="/spell/keen_senses">keen senses</Link>, <Link to="/spell/negate_aroma">negate aroma</Link>, <Link to="/spell/shield">shield</Link>, <Link to="/spell/true_strike">true strike</Link></Cell></Row></Block>
</>};
const _cold_irony = {title: "Cold Irony", jsx: <><div className="headerLike"><div>Cold Irony</div><div className="sub">(Level 15 Bard)</div></div>
<p><em>Bound in thin sheets of iron, this book is designed as a series of treatises on divination, information gathering, and rhetoric. The thoughts and notes are so complete as to qualify as a spellbook for the spells listed, despite the fact the author was a bard with no need for a spellbook.</em></p>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 24</Link></p>
<Tabular format="sbook" v="2420" r="2795" />
<h4 id="eq-spellbook-cold_irony-spells">Spells</h4>
<Block size="simple">
<Row><Cell>5th</Cell><Cell><Link to="/spell/foe_to_friend">Foe to friend</Link>, <Link to="/spell/greater_heroism">greater heroism</Link>, <Link to="/spell/song_of_discord">song of discord</Link>, <Link to="/spell/unwilling_shield">unwilling shield</Link></Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/break_enchantment">Break enchantment</Link>, <Link to="/spell/detect_scrying">detect scrying</Link>, <Link to="/spell/dominate_person">dominate person</Link>, <Link to="/spell/foretell_failure">foretell failure</Link></Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/blink">Blink</Link>, <Link to="/spell/find_fault">find fault</Link>, <Link to="/spell/glibness">glibness</Link>, <Link to="/spell/haste">haste</Link>, <Link to="/spell/reviving_finale">reviving finale</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/cure_moderate_wounds">Cure moderate wounds</Link>, <Link to="/spell/gallant_inspiration">gallant inspiration</Link>, <Link to="/spell/hold_person">hold person</Link>, <Link to="/spell/locate_object">locate object</Link>, <Link to="/spell/misdirection">misdirection</Link>, <Link to="/spell/perfect_placement">perfect placement</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/expeditious_retreat">Expeditious retreat</Link>, <Link to="/spell/memory_lapse">memory lapse</Link>, <Link to="/spell/moment_of_greatness">moment of greatness</Link>, <Link to="/spell/obscure_object">obscure object</Link>, <Link to="/spell/undetectable_alignment">undetectable alignment</Link>, <Link to="/spell/vanish">vanish</Link></Cell></Row></Block>
<h4 id="eq-spellbook-cold_irony-ritual">Ritual</h4>
<Ability id="brain-wash-su" icon={["boost"]}>
<Pair single id="brain-wash-su" flavor="You combine magic and skill to masterfully manipulate your subjects.">Brain Wash (Su)</Pair>
<Pair title="Ability">You can expend this boon when you cast a spell on a creature you have succeeded at a <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/knowledge">Knowledge</Link>, or <Link to="/skill/sense_motive">Sense Motive</Link> check against. You cast that spell at +1 caster level and its save DC increases by 1.</Pair>
</Ability>
</>};
const _cyrusian_codex = {title: "Cyrusian Codex", className: "noBullet", jsx: <><div className="headerLike"><div>Cyrusian Codex</div><div className="sub">(Level 11 Transmuter)</div></div>
<p><em>This heavy tome bears a handsome leather cover over thick metal plates. The front cover displays a dozen tiny dials arranged in a semi-circle around the locking mechanism.</em></p>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 18</Link></p>
<Tabular format="sbook" o="Not provided" p={<><Link to="/eq-misc/good_lock">Good lock</Link> with <em>arcane lock</em> (DC 40)</>} v="4425" r="9125" />
<h4 id="eq-spellbook-cyrusian_codex-spells">Spells</h4>
<Block size="simple">
<Row><Cell>6th</Cell><Cell><Link to="/spell/age_resistance">Age resistance</Link>&#42;, <Link to="/spell/disintegrate">disintegrate</Link>&#42;, <Link to="/spell/greater_heroism">greater heroism</Link>, <Link to="/spell/wall_of_iron">wall of iron</Link></Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/dissolution">Dissolution</Link>&#42;, <Link to="/spell/major_creation">major creation</Link>, <Link to="/spell/open_arms">open arms</Link>&#42;, <Link to="/spell/treasure_stitching">treasure stitching</Link>&#42;</Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/adjustable_polymorph">Adjustable polymorph</Link>&#42;, <Link to="/spell/calcific_touch">calcific touch</Link>&#42;, <Link to="/spell/greater_darkvision">greater darkvision</Link>&#42;, <Link to="/spell/liquefy">liquefy</Link>&#42;, <Link to="/spell/rags_to_riches">rags to riches</Link>&#42;, <Link to="/spell/shout">shout</Link></Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/anthropomorphic_animal">Anthropomorphic animal</Link>&#42;, <Link to="/spell/deft_digits">deft digits</Link>&#42;, <Link to="/spell/disable_construct">disable construct</Link>&#42;, <Link to="/spell/dispel_magic">dispel magic</Link>, <Link to="/spell/fly">fly</Link>&#42;, <Link to="/spell/lightning_bolt">lightning bolt</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/arcane_lock">Arcane lock</Link>, <Link to="/spell/darkness">darkness</Link>, <Link to="/spell/detect_thoughts">detect thoughts</Link>, <Link to="/spell/full_pouch">full pouch</Link>&#42;, <Link to="/spell/masterwork_transformation">masterwork transformation</Link>&#42;, <Link to="/spell/shatter">shatter</Link>, <Link to="/spell/silk_to_steel">silk to steel</Link>&#42;, <Link to="/spell/twisted_space">twisted space</Link>&#42;</Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/ant_haul">Ant haul</Link>&#42;, <Link to="/spell/burning_hands">burning hands</Link>, <Link to="/spell/endure_elements">endure elements</Link>, <Link to="/spell/jump">jump</Link>&#42;, <Link to="/spell/mage_armor">mage armor</Link>, <Link to="/spell/mirror_strike">mirror strike</Link>&#42;, <Link to="/spell/true_strike">true strike</Link>, <Link to="/spell/vocal_alteration">vocal alteration</Link>&#42;</Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.</li>
</ul>
<h4 id="eq-spellbook-cyrusian_codex-ritual">Ritual</h4>
<Ability id="enduring-alteration-su" icon={["boost"]}>
<Pair single id="enduring-alteration-su" flavor="Your spells resist reality's attempts to restore the things you change.">Enduring Alteration (Su)</Pair>
<Pair title="Ability">You can spend this boon to apply the benefits of the <Link to="/feat/extend_spell">Extend Spell</Link> feat to a transmutation spell as you cast it. This also increases the DC to dispel that spell (via <em>dispel magic</em> or similar abilities) by 4.</Pair>
<Pair title="Special">This boon does not increase the spell level or casting time of your spell.</Pair>
</Ability>
</>};
const _defensive_primer = {title: "Defensive Primer", className: "noBullet", jsx: <><div className="headerLike"><div>Defensive Primer</div><div className="sub">(Level 1 Abjurer)</div></div>
<p><em>This surprisingly ornate and heavy volume is more than three-quarters empty. Tightly written notes on the precepts of arcane defense and the vulnerabilities of supernatural entities fill the first two pages.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 121</Link></p>
<Tabular format="sbook" o="Conjuration, enchantment" p={<><Link to="/eq-misc/average_lock">Average lock</Link> (DC 25)</>} v="185" />
<h4 id="eq-spellbook-defensive_primer-spells">Spells</h4>
<Block size="simple">
<Row><Cell>1st</Cell><Cell><Link to="/spell/burning_hands">Burning hands</Link>, <Link to="/spell/detect_undead">detect undead</Link>, <Link to="/spell/expeditious_retreat">expeditious retreat</Link>, <Link to="/spell/magic_missile">magic missile</Link>, <Link to="/spell/protection_from_evil">protection from evil</Link>&#42;, <Link to="/spell/ray_of_enfeeblement">ray of enfeeblement</Link>, <Link to="/spell/shield">shield</Link>&#42;</Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.</li>
</ul>
</>};
const _erages_journeymans_manual = {title: "Erages Journeyman's Manual", jsx: <><div className="headerLike"><div>Erages Journeyman's Manual</div><div className="sub">(Level 7 Magus)</div></div>
<p><em>This book is bound in glittering silver bark, and its title is printed in golden calligraphy in both Elven and Common.</em></p>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 5</Link></p>
<Tabular format="sbook" v="575" r="1100" />
<h4 id="eq-spellbook-erages_journeymans_manual-spells">Spells</h4>
<Block size="simple">
<Row><Cell>3rd</Cell><Cell><Link to="/spell/dispel_magic">Dispel magic</Link>, <Link to="/spell/haste">haste</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/alter_self">Alter self</Link>, <Link to="/spell/frigid_touch">frigid touch</Link>, <Link to="/spell/invisibility">invisibility</Link>, <Link to="/spell/mirror_image">mirror image</Link>, <Link to="/spell/pyrotechnics">pyrotechnics</Link>, <Link to="/spell/scorching_ray">scorching ray</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/chill_touch">Chill touch</Link>, <Link to="/spell/color_spray">color spray</Link>, <Link to="/spell/enlarge_person">enlarge person</Link>, <Link to="/spell/grease">grease</Link>, <Link to="/spell/jump">jump</Link>, <Link to="/spell/reduce_person">reduce person</Link>, <Link to="/spell/shield">shield</Link>, <Link to="/spell/silent_image">silent image</Link></Cell></Row></Block>
<h4 id="eq-spellbook-erages_journeymans_manual-ritual">Ritual</h4>
<Ability id="avoiding-spell-su" icon={["def"]}>
<Pair single id="avoiding-spell-su">Avoiding Spell (Su)</Pair>
<Pair title="Swift Action">Whenever you cast a transmutation spell, you can spend this boon to gain a +1 dodge bonus to your AC for a number of rounds equal to the spell's level.</Pair>
</Ability>
</>};
const _galtan_cookbook = {title: "Galtan Cookbook", jsx: <><div className="headerLike"><div>Galtan Cookbook</div><div className="sub">(Level 8 Alchemist)</div></div>
<p><em>This book's cover is illegibly scorched and the pages are wrinkled from water damage.</em></p>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 5</Link></p>
<Tabular format="sbook" v="670" r="1270" />
<h4 id="eq-spellbook-galtan_cookbook-formulae">Formulae</h4>
<Block size="simple">
<Row><Cell>3rd</Cell><Cell><Link to="/spell/absorbing_touch">Absorbing touch</Link>, <Link to="/spell/arcane_sight">arcane sight</Link>, <Link to="/spell/draconic_reservoir">draconic reservoir</Link>, <Link to="/spell/seek_thoughts">seek thoughts</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/cats_grace">Cat's grace</Link>, <Link to="/spell/invisibility">invisibility</Link>, <Link to="/spell/perceive_cues">perceive cues</Link>, <Link to="/spell/resist_energy">resist energy</Link>, <Link to="/spell/see_invisibility">see invisibility</Link>, <Link to="/spell/undetectable_alignment">undetectable alignment</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/ant_haul">Ant haul</Link>, <Link to="/spell/bombers_eye">bomber's eye</Link>, <Link to="/spell/comprehend_languages">comprehend languages</Link>, <Link to="/spell/detect_secret_doors">detect secret doors</Link>, <Link to="/spell/disguise_self">disguise self</Link>, <Link to="/spell/expeditious_retreat">expeditious retreat</Link>, <Link to="/spell/true_strike">true strike</Link></Cell></Row></Block>
<h4 id="eq-spellbook-galtan_cookbook-ritual">Ritual</h4>
<Ability id="blast-finesse-su" icon={["boost"]}>
<Pair single id="blast-finesse-su">Blast Finesse (Su)</Pair>
<Pair title="Immediate Action">When you throw a bomb, you can spend this boon to shape the blast by adding up to three 5-foot squares to the area, as long as these spaces are adjacent to the bomb's normal area of effect.</Pair>
</Ability>
</>};
const _grandfathers_legacy = {title: "Grandfather's Legacy", className: "noBullet", jsx: <><div className="headerLike"><div>Grandfather's Legacy</div><div className="sub">(Level 14 Necromancer)</div></div>
<p><em>This pair of lexicons is covered in excellently preserved human skin, with an intricate lace of fingerbones forming the locks on the cover. A family seal has been embossed on the lower center of the cover, but flecks of gold leaf have begun to peel away, revealing that the embossed pattern in fact follows a faded tattoo on the skin itself.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 124</Link></p>
<Tabular format="sbook" o="Enchantment, illusion" p={<>A series of three <Link to="/eq-misc/superior_lock">superior locks</Link> each augmented with <em>arcane lock</em> (DC 50) and a <em>symbol of weakness</em> (Fortitude DC 20) on the second page of each book.</>} v="7635" />
<h4 id="eq-spellbook-grandfathers_legacy-spells">Spells</h4>
<Block size="simple">
<Row><Cell>7th</Cell><Cell><Link to="/spell/control_undead">Control undead</Link>&#42;, <Link to="/spell/finger_of_death">finger of death</Link>&#42;, <Link to="/spell/symbol_of_weakness">symbol of weakness</Link>&#42;, <Link to="/spell/temporary_resurrection">temporary resurrection</Link>&#42;</Cell></Row>
<Row><Cell>6th</Cell><Cell><Link to="/spell/acid_fog">Acid fog</Link>, <Link to="/spell/chain_lightning">chain lightning</Link>, <Link to="/spell/circle_of_death">circle of death</Link>&#42;, <Link to="/spell/create_undead">create undead</Link>&#42;, <Link to="/spell/unwilling_shield">unwilling shield</Link>&#42;</Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/dismissal">Dismissal</Link>, <Link to="/spell/hold_monster">hold monster</Link>, <Link to="/spell/magic_jar">magic jar</Link>&#42;, <Link to="/spell/possess_object">possess object</Link>&#42;, <Link to="/spell/wall_of_force">wall of force</Link>, <Link to="/spell/waves_of_fatigue">waves of fatigue</Link>&#42;</Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/animate_dead">Animate dead</Link>&#42;, <Link to="/spell/bestow_curse">bestow curse</Link>&#42;, <Link to="/spell/contagion">contagion</Link>&#42;, <Link to="/spell/enervation">enervation</Link>&#42;, <Link to="/spell/shadow_projection">shadow projection</Link>&#42;, <Link to="/spell/shout">shout</Link>, <Link to="/spell/wall_of_ice">wall of ice</Link></Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/gentle_repose">Gentle repose</Link>&#42;, <Link to="/spell/halt_undead">halt undead</Link>&#42;, <Link to="/spell/lightning_bolt">lightning bolt</Link>, <Link to="/spell/magic_circle_against_good">magic circle against good</Link>, <Link to="/spell/nondetection">nondetection</Link>, <Link to="/spell/ray_of_exhaustion">ray of exhaustion</Link>&#42;, <Link to="/spell/stinking_cloud">stinking cloud</Link>, <Link to="/spell/vampiric_touch">vampiric touch</Link>&#42;</Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/arcane_lock">Arcane lock</Link>, <Link to="/spell/blindness_deafness">blindness</Link>&#42;, <Link to="/spell/darkness">darkness</Link>, <Link to="/spell/false_life">false life</Link>&#42;, <Link to="/spell/obscure_object">obscure object</Link>, <Link to="/spell/resist_energy">resist energy</Link>, <Link to="/spell/scare">scare</Link>&#42;, <Link to="/spell/summon_swarm">summon swarm</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/cause_fear">Cause fear</Link>&#42;, <Link to="/spell/chill_touch">chill touch</Link>&#42;, <Link to="/spell/floating_disk">floating disk</Link>, <Link to="/spell/hypnotism">hypnotism</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link>, <Link to="/spell/ray_of_enfeeblement">ray of enfeeblement</Link>&#42;, <Link to="/spell/restore_corpse">restore corpse</Link>&#42;, <Link to="/spell/sculpt_corpse">sculpt corpse</Link>&#42;, <Link to="/spell/shield">shield</Link>, <Link to="/spell/sleep">sleep</Link></Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.</li>
</ul>
</>};
const _grimoire_of_glittering_eyes = {title: "Grimoire of Glittering Eyes", className: "noBullet", jsx: <><div className="headerLike"><div>Grimoire of Glittering Eyes</div><div className="sub">(Level 7 Illusionist)</div></div>
<p><em>The title of this book is embossed into the scaly cover. Inside, the pages sparkle and gleam in even the faintest light, and the handwriting looks preternaturally clean.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 122</Link></p>
<Tabular format="sbook" o="Evocation, necromancy" p={<>The entire book is warded with <em>illusory script</em> (Will DC 16; on failure, the <em>suggestion</em> is for the reader to "Close the book and leave").</>} v="1055" r="1755" />
<h4 id="eq-spellbook-grimoire_of_glittering_eyes-spells">Spells</h4>
<Block size="simple">
<Row><Cell>4th</Cell><Cell><Link to="/spell/phantasmal_killer">Phantasmal killer</Link>&#42;, <Link to="/spell/wandering_star_motes">wandering star motes</Link>&#42;</Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/illusory_script">Illusory script</Link>&#42;, <Link to="/spell/invisibility_sphere">invisibility sphere</Link>&#42;, <Link to="/spell/major_image">major image</Link>&#42;</Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/magic_mouth">Magic mouth</Link>&#42;, <Link to="/spell/misdirection">misdirection</Link>&#42;, <Link to="/spell/phantom_trap">phantom trap</Link>&#42;, <Link to="/spell/scare">scare</Link>&dagger;</Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/alarm">Alarm</Link>, <Link to="/spell/animate_rope">animate rope</Link>, <Link to="/spell/color_spray">color spray</Link>&#42;, <Link to="/spell/comprehend_languages">comprehend languages</Link>, <Link to="/spell/disguise_self">disguise self</Link>&#42;, <Link to="/spell/hypnotism">hypnotism</Link>, <Link to="/spell/magic_aura">magic aura</Link>&#42;, <Link to="/spell/magic_weapon">magic weapon</Link>, <Link to="/spell/shield">shield</Link>, <Link to="/spell/sleep">sleep</Link></Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.  </li>
<li><strong>&dagger;</strong> A spell from the spellbook creator's opposition school.</li>
</ul>
<blockquote>
<p><strong className="hl">Note:</strong> The original text also contains a 3rd-level spell named "madness", but the spell was not included in the source book.</p>
</blockquote>
<h4 id="eq-spellbook-grimoire_of_glittering_eyes-ritual">Ritual</h4>
<Ability id="glittering-eyes-su" icon={["power","def"]}>
<Pair single id="glittering-eyes-su" flavor="When casting an illusion spell, you gain expanded sight.">Glittering Eyes (Su)</Pair>
<Pair title="Free Action">Spend this boon's effect when you cast an illusion spell. You gain darkvision 60 feet and a +4 bonus on saving throws to disbelieve illusions, with both benefits lasting for 1 minute.</Pair>
</Ability>
</>};
const _guardian_grimoire = {title: "Guardian Grimoire", className: "noBullet", jsx: <><div className="headerLike"><div>Guardian Grimoire</div><div className="sub">(Level 15 Abjurer)</div></div>
<p><em>These three well-made books are covered with <Link to="/spell/rune_of_warding">runes of warding</Link> against outsiders and undead. The pages inside show water damage along the edges.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 125</Link></p>
<Tabular format="sbook" o="Illusion, necromancy" p={<><em>Explosive runes</em> (Reflex DC 16) and <em>fire trap</em> (Reflex DC 17)</>} v="10055" r="13055" />
<h4 id="eq-spellbook-guardian_grimoire-spells">Spells</h4>
<Block size="simple">
<Row><Cell>8th</Cell><Cell><Link to="/spell/binding">Binding</Link>, <Link to="/spell/maze">maze</Link>, <Link to="/spell/protection_from_spells">protection from spells</Link>&#42;</Cell></Row>
<Row><Cell>7th</Cell><Cell><Link to="/spell/banishment">Banishment</Link>&#42;, <Link to="/spell/delayed_blast_fireball">delayed blast fireball</Link>, <Link to="/spell/expend">expend</Link>&#42;, <Link to="/spell/form_of_the_dragon_ii">form of the dragon II</Link>, <Link to="/spell/grasping_hand">grasping hand</Link></Cell></Row>
<Row><Cell>6th</Cell><Cell><Link to="/spell/analyze_dweomer">Analyze dweomer</Link>, <Link to="/spell/antimagic_field">antimagic field</Link>&#42;, <Link to="/spell/chain_lightning">chain lightning</Link>, <Link to="/spell/greater_dispel_magic">greater dispel magic</Link>&#42;, <Link to="/spell/true_seeing">true seeing</Link></Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/break_enchantment">Break enchantment</Link>&#42;, <Link to="/spell/cone_of_cold">cone of cold</Link>, <Link to="/spell/dismissal">dismissal</Link>&#42;, <Link to="/spell/polymorph">polymorph</Link>, <Link to="/spell/summon_monster_v">summon monster V</Link>, <Link to="/spell/wall_of_force">wall of force</Link></Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/confusion">Confusion</Link>, <Link to="/spell/dimension_door">dimension door</Link>, <Link to="/spell/dimensional_anchor">dimensional anchor</Link>&#42;, <Link to="/spell/fire_trap">fire trap</Link>&#42;, <Link to="/spell/mass_enlarge_person">mass enlarge person</Link>, <Link to="/spell/secure_shelter">secure shelter</Link>, <Link to="/spell/true_form">true form</Link>&#42;</Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/cloak_of_winds">Cloak of winds</Link>&#42;, <Link to="/spell/daylight">daylight</Link>, <Link to="/spell/enter_image">enter image</Link>, <Link to="/spell/explosive_runes">explosive runes</Link>&#42;, <Link to="/spell/haste">haste</Link>, <Link to="/spell/lightning_bolt">lightning bolt</Link>, <Link to="/spell/magic_circle_against_evil">magic circle against evil</Link>&#42;, <Link to="/spell/water_breathing">water breathing</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/cushioning_bands">Cushioning bands</Link>, <Link to="/spell/detect_thoughts">detect thoughts</Link>, <Link to="/spell/glitterdust">glitterdust</Link>, <Link to="/spell/knock">knock</Link>, <Link to="/spell/protection_from_arrows">protection from arrows</Link>&#42;, <Link to="/spell/resist_energy">resist energy</Link>&#42;, <Link to="/spell/scorching_ray">scorching ray</Link>, <Link to="/spell/whispering_wind">whispering wind</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/animate_rope">Animate rope</Link>, <Link to="/spell/detect_secret_doors">detect secret doors</Link>, <Link to="/spell/detect_undead">detect undead</Link>, <Link to="/spell/endure_elements">endure elements</Link>&#42;, <Link to="/spell/feather_fall">feather fall</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link>, <Link to="/spell/protection_from_chaos">protection from chaos</Link>&#42;, <Link to="/spell/shadow_weapon">shadow weapon</Link>&#42;, <Link to="/spell/shield">shield</Link>&#42;, <Link to="/spell/shocking_grasp">shocking grasp</Link>, <Link to="/spell/touch_of_gracelessness">touch of gracelessness</Link></Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.</li>
</ul>
<h4 id="eq-spellbook-guardian_grimoire-ritual">Ritual</h4>
<Ability id="guardian-trick-su" icon={["roll","def"]}>
<Pair single id="guardian-trick-su" flavor="With a quick phrase of power, you attempt to foil an attack.">Guardian Trick (Su)</Pair>
<Pair title="Immediate Action">Spend this boon's effect when an undead or outsider hits you with an attack. The attacking creature must reroll the attack, taking the second roll even if it is lower.</Pair>
</Ability>
</>};
const _insights_of_far_seeing_taernis = {title: "Insights of Far-Seeing Taernis", className: "noBullet", jsx: <><div className="headerLike"><div>Insights of Far-Seeing Taernis</div><div className="sub">(Level 12 Conjurer)</div></div>
<p><em>These two books are part of a set held together with a leather strap. The covers are of a shimmering and unearthly blue leather, and the spines are built of silver and iron. The books are chilly to the touch, and staring at them induces minor vertigo.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 124</Link></p>
<Tabular format="sbook" o="Divination, necromancy" p={<><em>Sepia snake sigil</em> (Reflex DC 16)</>} v="4555" r="6355" />
<h4 id="eq-spellbook-insights_of_far_seeing_taernis-spells">Spells</h4>
<Block size="simple">
<Row><Cell>6th</Cell><Cell><Link to="/spell/getaway">Getaway</Link>&#42;, <Link to="/spell/planar_binding">planar binding</Link>&#42;, <Link to="/spell/summon_monster_vi">summon monster VI</Link>&#42;, <Link to="/spell/wall_of_iron">wall of iron</Link>&#42;</Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/contact_other_plane">Contact other plane</Link>&dagger;, <Link to="/spell/life_bubble">life bubble</Link>, <Link to="/spell/overland_flight">overland flight</Link>, <Link to="/spell/teleport">teleport</Link>&#42;</Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/acid_pit">Acid pit</Link>&#42;, <Link to="/spell/black_tentacles">black tentacles</Link>&#42;, <Link to="/spell/dimensional_anchor">dimensional anchor</Link>, <Link to="/spell/lesser_geas">lesser geas</Link>, <Link to="/spell/phantasmal_killer">phantasmal killer</Link>, <Link to="/spell/solid_fog">solid fog</Link>&#42;</Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/gaseous_form">Gaseous form</Link>, <Link to="/spell/greater_magic_weapon">greater magic weapon</Link>, <Link to="/spell/magic_circle_against_evil">magic circle against evil</Link>, <Link to="/spell/sepia_snake_sigil">sepia snake sigil</Link>&#42;, <Link to="/spell/spiked_pit">spiked pit</Link>&#42;, <Link to="/spell/stinking_cloud">stinking cloud</Link>, <Link to="/spell/tiny_hut">tiny hut</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/arrow_eruption">Arrow eruption</Link>&#42;, <Link to="/spell/daze_monster">daze monster</Link>, <Link to="/spell/dust_of_twilight">dust of twilight</Link>&#42;, <Link to="/spell/glitterdust">glitterdust</Link>&#42;, <Link to="/spell/shatter">shatter</Link>, <Link to="/spell/stone_call">stone call</Link>&#42;</Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/comprehend_languages">Comprehend languages</Link>&dagger;, <Link to="/spell/disguise_self">disguise self</Link>, <Link to="/spell/jump">jump</Link>, <Link to="/spell/mage_armor">mage armor</Link>&#42;, <Link to="/spell/magic_aura">magic aura</Link>, <Link to="/spell/mount">mount</Link>&#42;, <Link to="/spell/sleep">sleep</Link>, <Link to="/spell/stumble_gap">stumble gap</Link>&#42;, <Link to="/spell/unseen_servant">unseen servant</Link>&#42;</Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.  </li>
<li><strong>&dagger;</strong> A spell from the spellbook creator's opposition school.</li>
</ul>
<blockquote>
<p><strong className="hl">Note:</strong> The original text also contains a 2nd-level spell "fantastical reach" and a 2nd-level conjuration spell named "metabolize", but the spells were not included in the source book.</p>
</blockquote>
<h4 id="eq-spellbook-insights_of_far_seeing_taernis-ritual">Ritual</h4>
<Ability id="sturdy-summoning-su" icon={["protect"]}>
<Pair single id="sturdy-summoning-su" flavor="A creature you summon gains augmented defenses for a short time.">Sturdy Summoning (Su)</Pair>
<Pair title="Free Action">Spend this boon effect when you cast a conjuration (summoning) wizard spell. The creature you summon with that spell gains a number of temporary hit points equal to your caster level, and as long as the summoned creature has at least 1 of these hit points, it gains a +2 circumstance bonus on saving throws.</Pair>
</Ability>
</>};
const _journal_of_the_beast_within = {title: "Journal of the Beast Within", jsx: <><div className="headerLike"><div>Journal of the Beast Within</div><div className="sub">(Level 10 Alchemist)</div></div>
<p><em>This ragged collection of scorched and stained notes is tied with cheap twine between wooden covers. A few formulae appear to have been deliberately obliterated, scratched through so thoroughly that the paper is torn in places.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 123</Link></p>
<Tabular format="sbook" v="915" r="2165" />
<h4 id="eq-spellbook-journal_of_the_beast_within-formulae">Formulae</h4>
<Block size="simple">
<Row><Cell>4th</Cell><Cell><Link to="/spell/dragons_breath">Dragon's breath</Link></Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/beast_shape_i">Beast shape I</Link>, <Link to="/spell/rage">rage</Link>, <Link to="/spell/tongues">tongues</Link>, <Link to="/spell/water_breathing">water breathing</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/barkskin">Barkskin</Link>, <Link to="/spell/bulls_strength">bull's strength</Link>, <Link to="/spell/cure_moderate_wounds">cure moderate wounds</Link>, <Link to="/spell/elemental_touch">elemental touch</Link>, <Link to="/spell/resist_energy">resist energy</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/bombers_eye">Bomber's eye</Link>, <Link to="/spell/comprehend_languages">comprehend languages</Link>, <Link to="/spell/crafters_fortune">crafter's fortune</Link>, <Link to="/spell/cure_light_wounds">cure light wounds</Link>, <Link to="/spell/disguise_self">disguise self</Link>, <Link to="/spell/enlarge_person">enlarge person</Link>, <Link to="/spell/identify">identify</Link>, <Link to="/spell/shield">shield</Link></Cell></Row></Block>
<h4 id="eq-spellbook-journal_of_the_beast_within-ritual">Ritual</h4>
<Ability id="beastly-concoction-su" icon={["boost","down"]}>
<Pair single id="beastly-concoction-su" flavor="This journal grants you the ability to make an extremely potent and savage mutagen.">Beastly Concoction (Su)</Pair>
<Pair title="Ability">Spend this boon when you imbibe your mutagen. The mutagen grants you a +6 alchemical bonus to your selected ability score instead of the normal +4; you take a -2 penalty to all of your mental ability scores (Intelligence, Wisdom, and Charisma) while the mutagen is in effect.</Pair>
</Ability>
</>};
const _journeyman_book_of_rul_thaven = {title: "Journeyman Book of Rul Thaven", className: "noBullet", jsx: <><div className="headerLike"><div>Journeyman Book of Rul Thaven</div><div className="sub">(Level 9 Diviner)</div></div>
<p><em>This medium-sized book has a creased spine and supple gray leather covers. The leather has rubbed away in certain spots, tiny pinhole burns pock the surface, and a brass lock holds the book shut. A woman's portrait has been bound into the front cover, and text covers almost all of the image except her face: text in circles, with arrows pointing to new circles with suppositions. Underneath the woman's chin are the words "Diabolist sacrifice?"</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 123</Link></p>
<Tabular format="sbook" o="Illusion, transmutation" p={<><Link to="/eq-misc/average_lock">Average lock</Link> (DC 25), and the 5th-level spells are hidden with <em>secret page.</em> The special word is "reveal."</>} v="2195" r="3320" />
<h4 id="eq-spellbook-journeyman_book_of_rul_thaven-spells">Spells</h4>
<Block size="simple">
<Row><Cell>5th</Cell><Cell><Link to="/spell/contact_other_plane">Contact other plane</Link>&#42;, <Link to="/spell/major_creation">major creation</Link>, <Link to="/spell/telepathic_bond">telepathic bond</Link>&#42;,</Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/detect_scrying">Detect scrying</Link>&#42;, <Link to="/spell/locate_creature">locate creature</Link>&#42;, <Link to="/spell/remove_curse">remove curse</Link>, <Link to="/spell/scrying">scrying</Link>&#42;</Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/arcane_sight">Arcane sight</Link>&#42;, <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link>&#42;, <Link to="/spell/secret_page">secret page</Link>&dagger;, <Link to="/spell/tongues">tongues</Link>&#42;</Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/detect_thoughts">Detect thoughts</Link>&#42;, <Link to="/spell/flaming_sphere">flaming sphere</Link>, <Link to="/spell/locate_object">locate object</Link>&#42;, <Link to="/spell/resist_energy">resist energy</Link>, <Link to="/spell/see_invisibility">see invisibility</Link>&#42;, <Link to="/spell/summon_monster_ii">summon monster II</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/cause_fear">Cause fear</Link>, <Link to="/spell/comprehend_languages">comprehend languages</Link>&#42;, <Link to="/spell/detect_secret_doors">detect secret doors</Link>&#42;, <Link to="/spell/detect_undead">detect undead</Link>&#42;, <Link to="/spell/disguise_self">disguise self</Link>&dagger;, <Link to="/spell/identify">identify</Link>&#42;, <Link to="/spell/protection_from_evil">protection from evil</Link>, <Link to="/spell/protection_from_law">protection from law</Link>, <Link to="/spell/true_strike">true strike</Link>&#42;</Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.  </li>
<li><strong>&dagger;</strong> A spell from the spellbook creator's opposition school.</li>
</ul>
<h4 id="eq-spellbook-journeyman_book_of_rul_thaven-ritual">Ritual</h4>
<Ability id="eyes-of-rul-thaven-su" icon={["magic"]}>
<Pair single id="eyes-of-rul-thaven-su" flavor="You use a trick perfected by Rul Thaven to ferret out invisible creatures.">Eyes of Rul Thaven (Su)</Pair>
<Pair title="Swift Action">Spend this boon's effect. You gain the effects of <em>see invisibility</em> for 1 round.</Pair>
</Ability>
</>};
const _lab_journal_of_constance_inflix = {title: "Lab Journal of Constance Inflix", jsx: <><div className="headerLike"><div>Lab Journal of Constance Inflix</div><div className="sub">(Level 5 Alchemist)</div></div>
<p><em>The steel cover of this slim journal has taken its fair share of abuse; acid scars and minor slag spots show where the journal was subjected to intense working conditions. Equations, balances, and chemical notations mark the margins of the pages - with some formulae, it is difficult to tell where the notes end and the formula begins.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 122</Link></p>
<Tabular format="sbook" v="395" r="770" />
<h4 id="eq-spellbook-lab_journal_of_constance_inflix-formulae">Formulae</h4>
<Block size="simple">
<Row><Cell>2nd</Cell><Cell><Link to="/spell/blur">Blur</Link>, <Link to="/spell/delay_poison">delay poison</Link>, <Link to="/spell/fire_breath">fire breath</Link>, <Link to="/spell/transmute_potion_to_poison">transmute potion to poison</Link>, <Link to="/spell/vomit_swarm">vomit swarm</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/bombers_eye">Bomber's eye</Link>, <Link to="/spell/comprehend_languages">comprehend languages</Link>, <Link to="/spell/cure_light_wounds">cure light wounds</Link>, <Link to="/spell/jump">jump</Link>, <Link to="/spell/keen_senses">keen senses</Link>, <Link to="/spell/negate_aroma">negate aroma</Link>, <Link to="/spell/resist_energy">resist energy</Link>, <Link to="/spell/touch_of_the_sea">touch of the sea</Link></Cell></Row></Block>
<h4 id="eq-spellbook-lab_journal_of_constance_inflix-ritual">Ritual</h4>
<Ability id="alchemical-protection-su" icon={["def"]}>
<Pair single id="alchemical-protection-su" flavor="The alchemical knowledge granted by this book protects you from poisons and alchemical items.">Alchemical Protection (Su)</Pair>
<Pair title="Immediate Action">Spend this boon's effect when you make a saving throw against poison or an alchemical item but before rolling the saving throw. You gain a +4 bonus on that saving throw.</Pair>
</Ability>
</>};
const _library_of_the_dancer_of_skins = {title: "Library of the Dancer of Skins", jsx: <><div className="headerLike"><div>Library of the Dancer of Skins</div><div className="sub">(Level 19 Universalist)</div></div>
<p><em>This quartet of books is held together by a shining silver strand wound around the four tomes and tied in an intricate knot. Inside, the writing is expansive and sloppy, filled with marginalia; the author's notes indicate clear excitement about her discoveries, and while the thinker is obviously brilliant, she is also apparently undisciplined.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 126</Link></p>
<Tabular format="sbook" v="16435" r="20710" />
<h4 id="eq-spellbook-library_of_the_dancer_of_skins-spells">Spells</h4>
<Block size="simple">
<Row><Cell>9th</Cell><Cell><Link to="/spell/shapechange">Shapechange</Link>, <Link to="/spell/weird">weird</Link>, <Link to="/spell/wish">wish</Link>, <Link to="/spell/world_wave">world wave</Link></Cell></Row>
<Row><Cell>8th</Cell><Cell><Link to="/spell/giant_form_ii">Giant form II</Link>, <Link to="/spell/polar_ray">polar ray</Link>, <Link to="/spell/scintillating_pattern">scintillating pattern</Link>, <Link to="/spell/seamantle">seamantle</Link>, <Link to="/spell/trap_the_soul">trap the soul</Link></Cell></Row>
<Row><Cell>7th</Cell><Cell><Link to="/spell/control_weather">Control weather</Link>, <Link to="/spell/elemental_body_iv">elemental body IV</Link>, <Link to="/spell/phantasmal_revenge">phantasmal revenge</Link>, <Link to="/spell/power_word_blind">power word blind</Link>, <Link to="/spell/rampart">rampart</Link>, <Link to="/spell/spell_turning">spell turning</Link></Cell></Row>
<Row><Cell>6th</Cell><Cell><Link to="/spell/beast_shape_iv">Beast shape IV</Link>, <Link to="/spell/cloak_of_dreams">cloak of dreams</Link>, <Link to="/spell/control_water">control water</Link>, <Link to="/spell/fluid_form">fluid form</Link>, <Link to="/spell/getaway">getaway</Link>, <Link to="/spell/plant_shape_ii">plant shape II</Link></Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/fabricate">Fabricate</Link>, <Link to="/spell/fire_snake">fire snake</Link>, <Link to="/spell/geyser">geyser</Link>, <Link to="/spell/hold_monster">hold monster</Link>, <Link to="/spell/overland_flight">overland flight</Link>, <Link to="/spell/planar_adaptation">planar adaptation</Link>, <Link to="/spell/telekinesis">telekinesis</Link></Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/dragons_breath">Dragon's breath</Link>, <Link to="/spell/dimension_door">dimension door</Link>, <Link to="/spell/firefall">firefall</Link>, <Link to="/spell/greater_invisibility">greater invisibility</Link>, <Link to="/spell/moonstruck">moonstruck</Link>, <Link to="/spell/resilient_sphere">resilient sphere</Link>, <Link to="/spell/true_form">true form</Link>, <Link to="/spell/wandering_star_motes">wandering star motes</Link></Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/blink">Blink</Link>, <Link to="/spell/cloak_of_winds">cloak of winds</Link>, <Link to="/spell/elemental_aura">elemental aura</Link>, <Link to="/spell/fly">fly</Link>, <Link to="/spell/shifting_sand">shifting sand</Link>, <Link to="/spell/twilight_knife">twilight knife</Link>, <Link to="/spell/versatile_weapon">versatile weapon</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/accelerate_poison">Accelerate poison</Link>, <Link to="/spell/arrow_eruption">arrow eruption</Link>, <Link to="/spell/dust_of_twilight">dust of twilight</Link>, <Link to="/spell/elemental_speech">elemental speech</Link>, <Link to="/spell/alter_self">alter self</Link>, <Link to="/spell/fire_breath">fire breath</Link>, <Link to="/spell/share_language">share language</Link>, <Link to="/spell/slipstream">slipstream</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/alter_winds">Alter winds</Link>, <Link to="/spell/ant_haul">ant haul</Link>, <Link to="/spell/endure_elements">endure elements</Link>, <Link to="/spell/feather_fall">feather fall</Link>, <Link to="/spell/flare_burst">flare burst</Link>, <Link to="/spell/identify">identify</Link>, <Link to="/spell/stone_fist">stone fist</Link>, <Link to="/spell/touch_of_the_sea">touch of the sea</Link>, <Link to="/spell/true_strike">true strike</Link>, <Link to="/spell/vanish">vanish</Link></Cell></Row></Block>
<blockquote>
<p><strong className="hl">Note:</strong> The original text also contains a 3rd-level spell named "lightwall", a 5th-level spell named "comet", and a 6th-level spell named "lightning field", but the spells were not included in the source book.</p>
</blockquote>
<h4 id="eq-spellbook-library_of_the_dancer_of_skins-ritual">Ritual</h4>
<Ability id="defensive-boon-su" icon={["def"]}>
<Pair single id="defensive-boon-su" flavor="You throw up a quick burst of arcane energy that deflects an incoming spell attack.">Defensive Boon (Su)</Pair>
<Pair title="Immediate Action">When targeted with a touch spell or spell-like ability, you can spend this boon's effect to gain a +4 deflection bonus to AC against the triggering attack.</Pair>
</Ability>
</>};
const _manual_of_binding = {title: "Manual of Binding", className: "noBullet", jsx: <><div className="headerLike"><div>Manual of Binding</div><div className="sub">(Level 18 Conjurer)</div></div>
<p><em>The three volumes of this set are bound in black sharkskin, the spells inscribed in purple ink on fine paper. Spells conceal extensive notes on constructing a lich's phylactery.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 126</Link></p>
<Tabular format="sbook" o="Abjuration, enchantment" p={<><em>Magic aura</em> (spellbook appears nonmagical), <em>secret page</em> hides the notes on constructing a lich's phylactery, <em>sepia snake sigil</em> (Reflex DC 17)</>} v="17165" r="21215" />
<h4 id="eq-spellbook-manual_of_binding-spells">Spells</h4>
<Block size="simple">
<Row><Cell>9th</Cell><Cell><Link to="/spell/gate">Gate</Link>&#42;, <Link to="/spell/soul_bind">soul bind</Link>, <Link to="/spell/summon_monster_ix">summon monster IX</Link>&#42;, <Link to="/spell/time_stop">time stop</Link>, <Link to="/spell/wish">wish</Link></Cell></Row>
<Row><Cell>8th</Cell><Cell><Link to="/spell/create_greater_undead">Create greater undead</Link>, <Link to="/spell/horrid_wilting">horrid wilting</Link>, <Link to="/spell/greater_planar_binding">greater planar binding</Link>&#42;, <Link to="/spell/maze">maze</Link>&#42;, <Link to="/spell/screen">screen</Link></Cell></Row>
<Row><Cell>7th</Cell><Cell><Link to="/spell/banishment">Banishment</Link>&dagger;, <Link to="/spell/finger_of_death">finger of death</Link>, <Link to="/spell/grasping_hand">grasping hand</Link>, <Link to="/spell/greater_teleport">greater teleport</Link>&#42;, <Link to="/spell/reverse_gravity">reverse gravity</Link>, <Link to="/spell/summon_monster_vii">summon monster VII</Link>&#42;</Cell></Row>
<Row><Cell>6th</Cell><Cell><Link to="/spell/contagious_flame">Contagious flame</Link>, <Link to="/spell/disintegrate">disintegrate</Link>, <Link to="/spell/greater_dispel_magic">greater dispel magic</Link>&dagger;, <Link to="/spell/legend_lore">legend lore</Link>, <Link to="/spell/planar_binding">planar binding</Link>&#42;, <Link to="/spell/wall_of_iron">wall of iron</Link>&#42;</Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/cloudkill">Cloudkill</Link>&#42;, <Link to="/spell/cone_of_cold">cone of cold</Link>, <Link to="/spell/contact_other_plane">contact other plane</Link>, <Link to="/spell/hungry_pit">hungry pit</Link>&#42;, <Link to="/spell/magic_jar">magic jar</Link>, <Link to="/spell/overland_flight">overland flight</Link>, <Link to="/spell/permanency">permanency</Link>, <Link to="/spell/secret_chest">secret chest</Link>&#42;, <Link to="/spell/symbol_of_pain">symbol of pain</Link></Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/ball_lightning">Ball lightning</Link>, <Link to="/spell/black_tentacles">black tentacles</Link>&#42;, <Link to="/spell/detect_scrying">detect scrying</Link>, <Link to="/spell/dimension_door">dimension door</Link>&#42;, <Link to="/spell/enervation">enervation</Link>, <Link to="/spell/greater_invisibility">greater invisibility</Link>, <Link to="/spell/resilient_sphere">resilient sphere</Link>, <Link to="/spell/remove_curse">remove curse</Link>&dagger;</Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/blink">Blink</Link>, <Link to="/spell/daylight">daylight</Link>, <Link to="/spell/enter_image">enter image</Link>, <Link to="/spell/fireball">fireball</Link>, <Link to="/spell/gentle_repose">gentle repose</Link>, <Link to="/spell/secret_page">secret page</Link>, <Link to="/spell/sepia_snake_sigil">sepia snake sigil</Link>&#42;, <Link to="/spell/stinking_cloud">stinking cloud</Link>&#42;</Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/darkvision">Darkvision</Link>, <Link to="/spell/false_life">false life</Link>, <Link to="/spell/glitterdust">glitterdust</Link>&#42;, <Link to="/spell/make_whole">make whole</Link>, <Link to="/spell/mirror_image">mirror image</Link>, <Link to="/spell/resist_energy">resist energy</Link>&dagger;, <Link to="/spell/see_invisibility">see invisibility</Link>, <Link to="/spell/summon_swarm">summon swarm</Link>&#42;, <Link to="/spell/web">web</Link>&#42;</Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/burning_hands">Burning hands</Link>, <Link to="/spell/detect_undead">detect undead</Link>, <Link to="/spell/disguise_self">disguise self</Link>, <Link to="/spell/grease">grease</Link>&#42;, <Link to="/spell/mage_armor">mage armor</Link>&#42;, <Link to="/spell/magic_aura">magic aura</Link>, <Link to="/spell/magic_missile">magic missile</Link>, <Link to="/spell/ray_of_enfeeblement">ray of enfeeblement</Link>, <Link to="/spell/unseen_servant">unseen servant</Link>&#42;</Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.  </li>
<li><strong>&dagger;</strong> A spell from the spellbook creator's opposition school.</li>
</ul>
<h4 id="eq-spellbook-manual_of_binding-ritual">Ritual</h4>
<Ability id="revivifying-contingency-su" icon={["def"]}>
<Pair single id="revivifying-contingency-su">Revivifying Contingency (Su)</Pair>
<Pair title="Passive Ability">You do not spend this boon with an action. When you are affected by this boon, the first time you are reduced to 0 or fewer hit points, you immediately regain 2d6 hit points. If this is enough for you to reach 0 hit points or higher, you do not fall unconscious.</Pair>
</Ability>
</>};
const _manuscript_of_jack_were_son = {title: "Manuscript of Jack Were-son", jsx: <><div className="headerLike"><div>Manuscript of Jack Were-son</div><div className="sub">(Level 10 Universalist)</div></div>
<p><em>Blood, dirt, wine, and more stain this white leather book. The owner's name, Jack Were-son, is stamped into the cover in peeling gold, yet no more information about the author is immediately evident. Several of the pages contain careful diagrams and illustrations done by a competent but uninspiring artist.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 123</Link></p>
<Tabular format="sbook" p={<><Link to="/eq-misc/average_lock">Average lock</Link> with <Link to="/spell/arcane_lock">arcane lock</Link> (DC 35) and <em>explosive runes</em> (Reflex DC 16)</>} v="2835" />
<h4 id="eq-spellbook-manuscript_of_jack_were_son-spells">Spells</h4>
<Block size="simple">
<Row><Cell>5th</Cell><Cell><Link to="/spell/break_enchantment">Break enchantment</Link>, <Link to="/spell/mages_private_sanctum">mage's private sanctum</Link>, <Link to="/spell/polymorph">polymorph</Link>, <Link to="/spell/treasure_stitching">treasure stitching</Link></Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/charm_monster">Charm monster</Link>, <Link to="/spell/dimension_door">dimension door</Link>, <Link to="/spell/greater_invisibility">greater invisibility</Link>, <Link to="/spell/moonstruck">moonstruck</Link>, <Link to="/spell/true_form">true form</Link></Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/cloak_of_winds">Cloak of winds</Link>, <Link to="/spell/explosive_runes">explosive runes</Link>, <Link to="/spell/haste">haste</Link>, <Link to="/spell/lightning_bolt">lightning bolt</Link>, <Link to="/spell/nondetection">nondetection</Link>, <Link to="/spell/twilight_knife">twilight knife</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/acid_arrow">Acid arrow</Link>, <Link to="/spell/burning_gaze">burning gaze</Link>, <Link to="/spell/dust_of_twilight">dust of twilight</Link>, <Link to="/spell/fog_cloud">fog cloud</Link>, <Link to="/spell/protection_from_arrows">protection from arrows</Link>, <Link to="/spell/spider_climb">spider climb</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/alter_winds">Alter winds</Link>, <Link to="/spell/ant_haul">ant haul</Link>, <Link to="/spell/burning_hands">burning hands</Link>, <Link to="/spell/cause_fear">cause fear</Link>, <Link to="/spell/hold_portal">hold portal</Link>, <Link to="/spell/identify">identify</Link>, <Link to="/spell/magic_missile">magic missile</Link>, <Link to="/spell/sleep">sleep</Link>, <Link to="/spell/stone_fist">stone fist</Link>, <Link to="/spell/vanish">vanish</Link></Cell></Row></Block>
<blockquote>
<p><strong className="hl">Note:</strong> The original text also contains a 2nd-level conjuration spell named "metabolize", but the spell was not included in the source book.</p>
</blockquote>
</>};
const _master_books_of_rul_thaven = {title: "Master Books of Rul Thaven", className: "noBullet", jsx: <><div className="headerLike"><div>Master Books of Rul Thaven</div><div className="sub">(Level 17 Diviner)</div></div>
<p><em>This trio of books is bound in leather as black as a starless night, clasped together with gleaming silver. The pages are filled with notes and errata. The handwriting becomes more hurried toward the end of the trilogy, and the final page says, "I have found her!"</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 126</Link></p>
<Tabular format="sbook" o="Illusion, transmutation" p={<>Each book features a <Link to="/eq-misc/superior_lock">superior lock</Link> (DC 40); <em>secret page</em> hides the 9th- and 7th-level spells, and the first book is warded with <em>explosive runes</em> (Reflex DC 17).</>} v="12725" r="16550" />
<h4 id="eq-spellbook-master_books_of_rul_thaven-spells">Spells</h4>
<Block size="simple">
<Row><Cell>9th</Cell><Cell><Link to="/spell/foresight">Foresight</Link>&#42;, <Link to="/spell/freedom">freedom</Link></Cell></Row>
<Row><Cell>8th</Cell><Cell><Link to="/spell/demand">Demand</Link>, <Link to="/spell/discern_location">discern location</Link>&#42;, <Link to="/spell/greater_prying_eyes">greater prying eyes</Link>&#42;, <Link to="/spell/trap_the_soul">trap the soul</Link></Cell></Row>
<Row><Cell>7th</Cell><Cell><Link to="/spell/instant_summons">Instant summons</Link>, <Link to="/spell/greater_arcane_sight">greater arcane sight</Link>&#42;, <Link to="/spell/greater_scrying">greater scrying</Link>&#42;, <Link to="/spell/plane_shift">plane shift</Link>, <Link to="/spell/vision">vision</Link>&#42;</Cell></Row>
<Row><Cell>6th</Cell><Cell><Link to="/spell/analyze_dweomer">Analyze dweomer</Link>&#42;, <Link to="/spell/greater_dispel_magic">greater dispel magic</Link>, <Link to="/spell/guards_and_wards">guards and wards</Link>, <Link to="/spell/legend_lore">legend lore</Link>&#42;, <Link to="/spell/repulsion">repulsion</Link>, <Link to="/spell/true_seeing">true seeing</Link>&#42;</Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/contact_other_plane">Contact other plane</Link>&#42;, <Link to="/spell/major_creation">major creation</Link>, <Link to="/spell/secret_chest">secret chest</Link>, <Link to="/spell/sending">sending</Link>, <Link to="/spell/telepathic_bond">telepathic bond</Link>&#42;, <Link to="/spell/planar_adaptation">planar adaptation</Link>&dagger;</Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/bestow_curse">Bestow curse</Link>, <Link to="/spell/dimensional_anchor">dimensional anchor</Link>, <Link to="/spell/lesser_geas">lesser geas</Link>, <Link to="/spell/lesser_globe_of_invulnerability">lesser globe of invulnerability</Link>, <Link to="/spell/locate_creature">locate creature</Link>&#42;, <Link to="/spell/remove_curse">remove curse</Link>, <Link to="/spell/secure_shelter">secure shelter</Link>, <Link to="/spell/share_senses">share senses</Link>&#42;</Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/arcane_sight">Arcane sight</Link>&#42;, <Link to="/spell/blood_biography">blood biography</Link>&#42;, <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link>&#42;, <Link to="/spell/explosive_runes">explosive runes</Link>, <Link to="/spell/secret_page">secret page</Link>&dagger;, <Link to="/spell/tongues">tongues</Link>&#42;</Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/continual_flame">Continual flame</Link>, <Link to="/spell/detect_thoughts">detect thoughts</Link>&#42;, <Link to="/spell/flaming_sphere">flaming sphere</Link>, <Link to="/spell/hold_person">hold person</Link>, <Link to="/spell/locate_object">locate object</Link>&#42;, <Link to="/spell/resist_energy">resist energy</Link>, <Link to="/spell/see_invisibility">see invisibility</Link>&#42;, <Link to="/spell/summon_monster_ii">summon monster II</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/cause_fear">Cause fear</Link>, <Link to="/spell/comprehend_languages">comprehend languages</Link>&#42;, <Link to="/spell/detect_secret_doors">detect secret doors</Link>&#42;, <Link to="/spell/detect_undead">detect undead</Link>&#42;, <Link to="/spell/disguise_self">disguise self</Link>&dagger;, <Link to="/spell/identify">identify</Link>&#42;, <Link to="/spell/protection_from_evil">protection from evil</Link>, <Link to="/spell/protection_from_law">protection from law</Link>, <Link to="/spell/true_strike">true strike</Link>&#42;</Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.  </li>
<li><strong>&dagger;</strong> A spell from the spellbook creator's opposition school.</li>
</ul>
<blockquote>
<p><strong className="hl">Note:</strong> The original text also contains a 3rd-level divination spell named "seek senses", but the spell was not included in the source book.</p>
</blockquote>
<h4 id="eq-spellbook-master_books_of_rul_thaven-ritual">Ritual</h4>
<Ability id="improved-eyes-of-rul-thaven-su" icon={["magic"]}>
<Pair single id="improved-eyes-of-rul-thaven-su" flavor="This improved boon allows you to see invisible creatures.">Improved Eyes of Rul Thaven (Su)</Pair>
<Pair title="Swift Action">You can activate the boon's effect to gain the effects of <em>see invisibility</em> for up to 10 rounds. The rounds need not be consecutive, but you must spend a swift action each time you activate the boon's effect.</Pair>
<Pair title="Special">The boon's effect is only spent when all 10 rounds of <em>see invisibility</em> are used up, or the next time you prepare wizard spells.</Pair>
</Ability>
</>};
const _mastery_of_word_and_thought = {title: "Mastery of Word and Thought", className: "noBullet", jsx: <><div className="headerLike"><div>Mastery of Word and Thought</div><div className="sub">(Level 20 Enchanter)</div></div>
<p><em>This massive tome is the size of four normal spellbooks, bound in leather as hard as plate armor and stitched together with strands of thin, pliable metal rather than thread. Toward the end is a list of names, each crossed out.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 127</Link></p>
<Tabular format="sbook" o="Conjuration, illusion" p={<><Link to="/spell/symbol_of_death">Symbol of death</Link> on the first page of the book (Fort DC 22)</>} v="22675" r="27265" />
<h4 id="eq-spellbook-mastery_of_word_and_thought-spells">Spells</h4>
<Block size="simple">
<Row><Cell>9th</Cell><Cell><Link to="/spell/dominate_monster">Dominate monster</Link>&#42;, <Link to="/spell/foresight">foresight</Link>, <Link to="/spell/mages_disjunction">mage's disjunction</Link>, <Link to="/spell/mass_hold_monster">mass hold monster</Link>&#42;, <Link to="/spell/mass_suffocation">mass suffocation</Link>, <Link to="/spell/power_word_kill">power word kill</Link>&#42;, <Link to="/spell/time_stop">time stop</Link></Cell></Row>
<Row><Cell>8th</Cell><Cell><Link to="/spell/binding">Binding</Link>&#42;, <Link to="/spell/clone">clone</Link>, <Link to="/spell/irresistible_dance">irresistible dance</Link>&#42;, <Link to="/spell/mind_blank">mind blank</Link>, <Link to="/spell/polymorph_any_object">polymorph any object</Link>, <Link to="/spell/power_word_stun">power word stun</Link>&#42;, <Link to="/spell/sunburst">sunburst</Link></Cell></Row>
<Row><Cell>7th</Cell><Cell><Link to="/spell/deflection">Deflection</Link>, <Link to="/spell/greater_arcane_sight">greater arcane sight</Link>, <Link to="/spell/instant_summons">instant summons</Link>&dagger;, <Link to="/spell/limited_wish">limited wish</Link>, <Link to="/spell/mass_hold_person">mass hold person</Link>&#42;, <Link to="/spell/plane_shift">plane shift</Link>&dagger;, <Link to="/spell/power_word_blind">power word blind</Link>&#42;, <Link to="/spell/resonating_word">resonating word</Link>, <Link to="/spell/symbol_of_stunning">symbol of stunning</Link>&#42;</Cell></Row>
<Row><Cell>6th</Cell><Cell><Link to="/spell/cloak_of_dreams">Cloak of dreams</Link>&#42;, <Link to="/spell/contingency">contingency</Link>, <Link to="/spell/enemy_hammer">enemy hammer</Link>, <Link to="/spell/forceful_hand">forceful hand</Link>, <Link to="/spell/greater_dispel_magic">greater dispel magic</Link>, <Link to="/spell/geas_quest">geas/quest</Link>&#42;, <Link to="/spell/legend_lore">legend lore</Link>, <Link to="/spell/mages_lucubration">mage's lucubration</Link>, <Link to="/spell/true_seeing">true seeing</Link></Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/dismissal">Dismissal</Link>, <Link to="/spell/dominate_person">dominate person</Link>&#42;, <Link to="/spell/fabricate">fabricate</Link>, <Link to="/spell/icy_prison">icy prison</Link>, <Link to="/spell/feeblemind">feeblemind</Link>&#42;, <Link to="/spell/mages_private_sanctum">mage's private sanctum</Link>, <Link to="/spell/permanency">permanency</Link>, <Link to="/spell/prying_eyes">prying eyes</Link>, <Link to="/spell/teleport">teleport</Link>&dagger;</Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/bestow_curse">Bestow curse</Link>, <Link to="/spell/crushing_despair">crushing despair</Link>&#42;, <Link to="/spell/dimensional_anchor">dimensional anchor</Link>, <Link to="/spell/fear">fear</Link>, <Link to="/spell/moonstruck">moonstruck</Link>&#42;, <Link to="/spell/resilient_sphere">resilient sphere</Link>, <Link to="/spell/stone_shape">stone shape</Link>, <Link to="/spell/stoneskin">stoneskin</Link></Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/fireball">Fireball</Link>, <Link to="/spell/fly">fly</Link>, <Link to="/spell/greater_magic_weapon">greater magic weapon</Link>, <Link to="/spell/heroism">heroism</Link>&#42;, <Link to="/spell/loathsome_veil">loathsome veil</Link>, <Link to="/spell/nondetection">nondetection</Link>, <Link to="/spell/protection_from_energy">protection from energy</Link>, <Link to="/spell/suggestion">suggestion</Link>&#42;</Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/arcane_lock">Arcane lock</Link>, <Link to="/spell/continual_flame">continual flame</Link>, <Link to="/spell/false_life">false life</Link>, <Link to="/spell/hideous_laughter">hideous laughter</Link>&#42;, <Link to="/spell/magic_mouth">magic mouth</Link>&dagger;, <Link to="/spell/mirror_image">mirror image</Link>&dagger;, <Link to="/spell/resist_energy">resist energy</Link>, <Link to="/spell/rope_trick">rope trick</Link>, <Link to="/spell/see_invisibility">see invisibility</Link>, <Link to="/spell/touch_of_idiocy">touch of idiocy</Link>&#42;</Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/alarm">Alarm</Link>, <Link to="/spell/charm_person">charm person</Link>&#42;, <Link to="/spell/feather_fall">feather fall</Link>, <Link to="/spell/forced_quiet">forced quiet</Link>, <Link to="/spell/hydraulic_push">hydraulic push</Link>, <Link to="/spell/identify">identify</Link>, <Link to="/spell/magic_missile">magic missile</Link>, <Link to="/spell/memory_lapse">memory lapse</Link>&#42;, <Link to="/spell/ray_of_enfeeblement">ray of enfeeblement</Link>, <Link to="/spell/shield">shield</Link>, <Link to="/spell/unseen_servant">unseen servant</Link>&dagger;</Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.  </li>
<li><strong>&dagger;</strong> A spell from the spellbook creator's opposition school.</li>
</ul>
<blockquote>
<p><strong className="hl">Note:</strong> The original text also contains a 3rd-level enchantment spell named "symbol of peace", but the spell was not included in the source book.</p>
</blockquote>
<h4 id="eq-spellbook-mastery_of_word_and_thought-ritual">Ritual</h4>
<Ability id="curse-of-names-su" icon={["lower"]}>
<Pair single id="curse-of-names-su">Curse of Names (Su)</Pair>
<Pair title="Ability">When you are finished preparing your spells with this book, write the proper name of a single creature among the list of names in this book.</Pair>
<Pair title="Swift Action"><p>When you are within 30 feet of the named creature, you can call out its name to bestow the <em>curse of names</em> on it. This spends the boon's effect.</p>
<p>The target creature takes a -2 penalty on all attack rolls, and a -4 penalty on all attack rolls against you, for 1 minute.</p>
</Pair>
<Pair title="Special">When you activate this curse, the name is crossed out in the back of the book. That creature cannot be the target of a <em>curse of names</em> originating from you ever again. The penalties of two instances of <em>curse of names</em> on the same creature do not stack.</Pair>
</Ability>
</>};
const _mysteries_of_shadow = {title: "Mysteries of Shadow", className: "noBullet", jsx: <><div className="headerLike"><div>Mysteries of Shadow</div><div className="sub">(Level 16 Illusionist)</div></div>
<p><em>Each volume of this three-book set is written in gold ink on jet-black paper. <em>Illusory script</em> hides descriptions of the geography and denizens of the Shadow Plane.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 125</Link></p>
<Tabular format="sbook" o="Divination, evocation" p={<><em>Illusory script</em> (Will DC 16; on failure the <em>suggestion</em> is "Forget the existence of the descriptions and notes"), <em>phantom trap</em> (opening any of the books seems to set off a trap)</>} v="11865" r="15065" />
<h4 id="eq-spellbook-mysteries_of_shadow-spells">Spells</h4>
<Block size="simple">
<Row><Cell>8th</Cell><Cell><Link to="/spell/greater_shadow_evocation">Greater shadow evocation</Link>&#42;, <Link to="/spell/mind_blank">mind blank</Link>, <Link to="/spell/scintillating_pattern">scintillating pattern</Link>&#42;, <Link to="/spell/temporal_stasis">temporal stasis</Link></Cell></Row>
<Row><Cell>7th</Cell><Cell><Link to="/spell/finger_of_death">Finger of death</Link>, <Link to="/spell/greater_shadow_conjuration">greater shadow conjuration</Link>&#42;, <Link to="/spell/project_image">project image</Link>&#42;, <Link to="/spell/simulacrum">simulacrum</Link>&#42;, <Link to="/spell/spell_turning">spell turning</Link></Cell></Row>
<Row><Cell>6th</Cell><Cell><Link to="/spell/eyebite">Eyebite</Link>, <Link to="/spell/guards_and_wards">guards and wards</Link>, <Link to="/spell/limited_wish">limited wish</Link>, <Link to="/spell/permanent_image">permanent image</Link>&#42;, <Link to="/spell/programmed_image">programmed image</Link>&#42;, <Link to="/spell/shadow_walk">shadow walk</Link>&#42;, <Link to="/spell/symbol_of_persuasion">symbol of persuasion</Link></Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/cloudkill">Cloudkill</Link>, <Link to="/spell/mirage_arcana">mirage arcana</Link>&#42;, <Link to="/spell/mind_fog">mind fog</Link>, <Link to="/spell/nightmare">nightmare</Link>&#42;, <Link to="/spell/seeming">seeming</Link>&#42;, <Link to="/spell/shadow_evocation">shadow evocation</Link>&#42;, <Link to="/spell/telekinesis">telekinesis</Link></Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/black_tentacles">Black tentacles</Link>, <Link to="/spell/dimension_door">dimension door</Link>, <Link to="/spell/greater_invisibility">greater invisibility</Link>&#42;, <Link to="/spell/lesser_globe_of_invulnerability">lesser globe of invulnerability</Link>, <Link to="/spell/phantasmal_killer">phantasmal killer</Link>&#42;, <Link to="/spell/remove_curse">remove curse</Link>, <Link to="/spell/scrying">scrying</Link>&dagger;, <Link to="/spell/shadow_conjuration">shadow conjuration</Link>&#42;</Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/dispel_magic">Dispel magic</Link>, <Link to="/spell/heroism">heroism</Link>, <Link to="/spell/illusory_script">illusory script</Link>&#42;, <Link to="/spell/magic_circle_against_good">magic circle against good</Link>, <Link to="/spell/major_image">major image</Link>&#42;, <Link to="/spell/phantom_steed">phantom steed</Link>, <Link to="/spell/shrink_item">shrink item</Link>, <Link to="/spell/slow">slow</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/arcane_lock">Arcane lock</Link>, <Link to="/spell/darkness">darkness</Link>&dagger;, <Link to="/spell/false_life">false life</Link>, <Link to="/spell/glitterdust">glitterdust</Link>, <Link to="/spell/magic_mouth">magic mouth</Link>&#42;, <Link to="/spell/mirror_image">mirror image</Link>&#42;, <Link to="/spell/obscure_object">obscure object</Link>, <Link to="/spell/phantom_trap">phantom trap</Link>&#42;, <Link to="/spell/whispering_wind">whispering wind</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/color_spray">Color spray</Link>&#42;, <Link to="/spell/disguise_self">disguise self</Link>&#42;, <Link to="/spell/endure_elements">endure elements</Link>, <Link to="/spell/feather_fall">feather fall</Link>, <Link to="/spell/grease">grease</Link>, <Link to="/spell/magic_aura">magic aura</Link>&#42;, <Link to="/spell/minor_image">minor image</Link>&#42;, <Link to="/spell/obscuring_mist">obscuring mist</Link>, <Link to="/spell/ray_of_enfeeblement">ray of enfeeblement</Link>, <Link to="/spell/silent_image">silent image</Link>&#42;, <Link to="/spell/ventriloquism">ventriloquism</Link>&#42;</Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.  </li>
<li><strong>&dagger;</strong> A spell from the spellbook creator's opposition school.</li>
</ul>
<h4 id="eq-spellbook-mysteries_of_shadow-ritual">Ritual</h4>
<Ability id="shadow-knowledge-su" icon={["boost"]}>
<Pair single id="shadow-knowledge-su" flavor="The knowledge in this book clings to your consciousness like the Shadow Plane itself.">Shadow Knowledge (Su)</Pair>
<Pair title="Passive Ability">Unlike other boons, you do not spend this one. Until you prepare spells again, you are considered trained in all <Link to="/skill/knowledge">Knowledge</Link> skills as long as the check pertains to the geography and denizens of the Shadow Plane. If you are already trained in the appropriate Knowledge skill, you gain a +2 circumstance bonus on these checks instead.</Pair>
</Ability>
</>};
const _nyzams_remedies = {title: "Nyzam's Remedies", jsx: <><div className="headerLike"><div>Nyzam's Remedies</div><div className="sub">(Level 3 Alchemist)</div></div>
<p><em>The first three pages of this book contain pressed flowers and botanical diagrams relating to brewing Thuvian remedies.</em></p>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 5</Link></p>
<Tabular format="sbook" v="50" r="115" />
<h4 id="eq-spellbook-nyzams_remedies-formulae">Formulae</h4>
<Block size="simple">
<Row><Cell>1st</Cell><Cell><Link to="/spell/cure_light_wounds">Cure light wounds</Link>, <Link to="/spell/expeditious_retreat">expeditious retreat</Link>, <Link to="/spell/keen_senses">keen senses</Link>, <Link to="/spell/polypurpose_panacea">polypurpose panacea</Link>, <Link to="/spell/youthful_appearance">youthful appearance</Link></Cell></Row></Block>
<h4 id="eq-spellbook-nyzams_remedies-ritual">Ritual</h4>
<Ability id="rejuvenating-infusion-su" icon={["aid"]}>
<Pair single id="rejuvenating-infusion-su">Rejuvenating Infusion (Su)</Pair>
<Pair title="Swift Action">Whenever you imbibe an alchemist extract of a conjuration spell, you can spend this boon. If you do, you are healed of 1 point of damage and can ignore the effects of <Link to="/misc/fatigue">fatigue</Link> for 1 round.</Pair>
</Ability>
</>};
const _quest_eternal = {title: "Quest Eternal", className: "noBullet", jsx: <><div className="headerLike"><div>Quest Eternal</div><div className="sub">(Level 13 Diviner)</div></div>
<p><em>Stuffed between the pages of these two well-worn volumes are all manner of riddles, tidbits of lore, and fragments of maps. One of the covers is missing a corner, as if hacked off with a blade, and the text inside is tiny and cramped, as if the author were afraid of running out of room.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 124</Link></p>
<Tabular format="sbook" o="Conjuration, transmutation" v="6475" r="8395" />
<h4 id="eq-spellbook-quest_eternal-spells">Spells</h4>
<Block size="simple">
<Row><Cell>7th</Cell><Cell><Link to="/spell/greater_arcane_sight">Greater arcane sight</Link>&#42;, <Link to="/spell/greater_scrying">greater scrying</Link>&#42;, <Link to="/spell/prismatic_spray">prismatic spray</Link></Cell></Row>
<Row><Cell>6th</Cell><Cell><Link to="/spell/chain_lightning">Chain lightning</Link>, <Link to="/spell/contingency">contingency</Link>, <Link to="/spell/eyebite">eyebite</Link>, <Link to="/spell/legend_lore">legend lore</Link>&#42;, <Link to="/spell/true_seeing">true seeing</Link>&#42;</Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/dominate_person">Dominate person</Link>, <Link to="/spell/fire_snake">fire snake</Link>, <Link to="/spell/prying_eyes">prying eyes</Link>&#42;, <Link to="/spell/teleport">teleport</Link>&dagger;, <Link to="/spell/telepathic_bond">telepathic bond</Link>&#42;</Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/arcane_eye">Arcane eye</Link>&#42;, <Link to="/spell/confusion">confusion</Link>, <Link to="/spell/detect_scrying">detect scrying</Link>&#42;, <Link to="/spell/fear">fear</Link>, <Link to="/spell/ice_storm">ice storm</Link>, <Link to="/spell/wall_of_fire">wall of fire</Link></Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/clairaudience_clairvoyance">Clairaudience/clairvoyance</Link>&#42;, <Link to="/spell/dispel_magic">dispel magic</Link>, <Link to="/spell/displacement">displacement</Link>, <Link to="/spell/greater_magic_weapon">greater magic weapon</Link>&dagger;, <Link to="/spell/hydraulic_torrent">hydraulic torrent</Link>, <Link to="/spell/lightning_bolt">lightning bolt</Link>, <Link to="/spell/seek_thoughts">seek thoughts</Link>, <Link to="/spell/tongues">tongues</Link>&#42;</Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/arcane_lock">Arcane lock</Link>, <Link to="/spell/false_life">false life</Link>, <Link to="/spell/foxs_cunning">fox's cunning</Link>&dagger;, <Link to="/spell/locate_object">locate object</Link>&#42;, <Link to="/spell/resist_energy">resist energy</Link>, <Link to="/spell/scorching_ray">scorching ray</Link>, <Link to="/spell/see_invisibility">see invisibility</Link>&#42;, <Link to="/spell/touch_of_idiocy">touch of idiocy</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/alarm">Alarm</Link>, <Link to="/spell/charm_person">charm person</Link>, <Link to="/spell/comprehend_languages">comprehend languages</Link>&#42;, <Link to="/spell/color_spray">color spray</Link>, <Link to="/spell/detect_secret_doors">detect secret doors</Link>&#42;, <Link to="/spell/expeditious_excavation">expeditious excavation</Link>&dagger;, <Link to="/spell/floating_disk">floating disk</Link>, <Link to="/spell/protection_from_evil">protection from evil</Link>, <Link to="/spell/shield">shield</Link>, <Link to="/spell/true_strike">true strike</Link>&#42;, <Link to="/spell/ventriloquism">ventriloquism</Link></Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.  </li>
<li><strong>&dagger;</strong> A spell from the spellbook creator's opposition school.</li>
</ul>
<h4 id="eq-spellbook-quest_eternal-ritual">Ritual</h4>
<Ability id="travel-sage-su" icon={["boost"]}>
<Pair single id="travel-sage-su" flavor="There is nothing like a magic book to enhance the memory.">Travel Sage (Su)</Pair>
<Pair title="Passive Ability">Unlike other boons, you do not spend this one. Until you prepare spells again, you are considered trained in <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>. If you are already trained in Knowledge (geography), you gain a +2 circumstance bonus on those checks instead.</Pair>
</Ability>
</>};
const _runes_of_wealth = {title: "Runes of Wealth", className: "noBullet", jsx: <><div className="headerLike"><div>Runes of Wealth</div><div className="sub">(Level 18 Transmuter)</div></div>
<p><em>Golden arcane runes and sigils seem to change or move constantly across the green leather cover of this remarkably well-preserved text. Each page is edged in thin silver, and a luxurious silk ribbon trapped between the pages flutters of its own accord.</em></p>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 18</Link></p>
<Tabular format="sbook" o="Not provided" p={<><Link to="/eq-misc/superior_lock">Superior lock</Link> with <em>arcane lock</em> (DC 50), <em>polymorph</em> (appears as a different spellbook each evening if no spells have been prepared from it)</>} v="26365" r="31365" />
<h4 id="eq-spellbook-runes_of_wealth-spells">Spells</h4>
<Block size="simple">
<Row><Cell>9th</Cell><Cell><Link to="/spell/fiery_body">Fiery body</Link>&#42;, <Link to="/spell/greater_create_demiplane">greater create demiplane</Link>, <Link to="/spell/shapechange">shapechange</Link>&#42;, <Link to="/spell/time_stop">time stop</Link>&#42;, <Link to="/spell/transmute_blood_to_acid">transmute blood to acid</Link>&#42;, <Link to="/spell/transmute_golem">transmute golem</Link>&#42;</Cell></Row>
<Row><Cell>8th</Cell><Cell><Link to="/spell/frightful_aspect">Frightful aspect</Link>&#42;, <Link to="/spell/greater_planar_binding">greater planar binding</Link>, <Link to="/spell/greater_shout">greater shout</Link>, <Link to="/spell/moment_of_prescience">moment of prescience</Link>, <Link to="/spell/polymorph_any_object">polymorph any object</Link>&#42;, <Link to="/spell/temporal_stasis">temporal stasis</Link>&#42;</Cell></Row>
<Row><Cell>7th</Cell><Cell><Link to="/spell/artificers_curse">Artificer's curse</Link>&#42;, <Link to="/spell/control_construct">control construct</Link>&#42;, <Link to="/spell/emblem_of_greed">emblem of greed</Link>&#42;, <Link to="/spell/firebrand">firebrand</Link>&#42;, <Link to="/spell/greater_age_resistance">greater age resistance</Link>&#42;, <Link to="/spell/greater_teleport">greater teleport</Link>, <Link to="/spell/legendary_proportions">legendary proportions</Link>&#42;, <Link to="/spell/reverse_gravity">reverse gravity</Link>&#42;</Cell></Row>
<Row><Cell>6th</Cell><Cell><Link to="/spell/enemy_hammer">Enemy hammer</Link>&#42;, <Link to="/spell/disintegrate">disintegrate</Link>&#42;, <Link to="/spell/flesh_to_stone">flesh to stone</Link>&#42;, <Link to="/spell/globe_of_invulnerability">globe of invulnerability</Link>, <Link to="/spell/monstrous_physique_iv">monstrous physique IV</Link>&#42;, <Link to="/spell/sonic_form">sonic form</Link>&#42;, <Link to="/spell/tar_pool">tar pool</Link>&#42;, <Link to="/spell/transformation">transformation</Link>&#42;</Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/baleful_polymorph">Baleful polymorph</Link>&#42;, <Link to="/spell/beast_shape_iii">beast shape III</Link>&#42;, <Link to="/spell/contact_other_plane">contact other plane</Link>, <Link to="/spell/monstrous_physique_iii">monstrous physique III</Link>&#42;, <Link to="/spell/open_arms">open arms</Link>&#42;, <Link to="/spell/permanency">permanency</Link>, <Link to="/spell/polymorph">polymorph</Link>&#42;, <Link to="/spell/rune_of_ruin">rune of ruin</Link>&#42;, <Link to="/spell/telekinesis">telekinesis</Link>&#42;, <Link to="/spell/treasure_stitching">treasure stitching</Link>&#42;</Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/arcane_eye">Arcane eye</Link>, <Link to="/spell/black_tentacles">black tentacles</Link>, <Link to="/spell/dimension_door">dimension door</Link>, <Link to="/spell/fire_shield">fire shield</Link>, <Link to="/spell/greater_darkvision">greater darkvision</Link>&#42;, <Link to="/spell/monstrous_physique_ii">monstrous physique II</Link>&#42;, <Link to="/spell/obsidian_flow">obsidian flow</Link>&#42;, <Link to="/spell/stoneskin">stoneskin</Link>, <Link to="/spell/telekinetic_charge">telekinetic charge</Link>&#42;, <Link to="/spell/true_form">true form</Link></Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/deft_digits">Deft digits</Link>&#42;, <Link to="/spell/disable_construct">disable construct</Link>&#42;, <Link to="/spell/enter_image">enter image</Link>&#42;, <Link to="/spell/excruciating_deformation">excruciating deformation</Link>&#42;, <Link to="/spell/fly">fly</Link>&#42;, <Link to="/spell/greater_magic_weapon">greater magic weapon</Link>&#42;, <Link to="/spell/haste">haste</Link>&#42;, <Link to="/spell/heroism">heroism</Link>, <Link to="/spell/lightning_bolt">lightning bolt</Link>, <Link to="/spell/monstrous_physique_i">monstrous physique I</Link>&#42;, <Link to="/spell/protection_from_energy">protection from energy</Link>, <Link to="/spell/strangling_hair">strangling hair</Link>&#42;</Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/arcane_lock">Arcane lock</Link>, <Link to="/spell/continual_flame">continual flame</Link>, <Link to="/spell/disfiguring_touch">disfiguring touch</Link>&#42;, <Link to="/spell/locate_object">locate object</Link>, <Link to="/spell/make_whole">make whole</Link>&#42;, <Link to="/spell/masterwork_transformation">masterwork transformation</Link>&#42;, <Link to="/spell/protection_from_arrows">protection from arrows</Link>, <Link to="/spell/scorching_ray">scorching ray</Link>, <Link to="/spell/see_invisibility">see invisibility</Link>, <Link to="/spell/shatter">shatter</Link>, <Link to="/spell/summon_swarm">summon swarm</Link>, <Link to="/spell/telekinetic_assembly">telekinetic assembly</Link>&#42;</Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/ant_haul">Ant haul</Link>&#42;, <Link to="/spell/burning_hands">burning hands</Link>, <Link to="/spell/color_spray">color spray</Link>, <Link to="/spell/comprehend_languages">comprehend languages</Link>, <Link to="/spell/identify">identify</Link>, <Link to="/spell/jump">jump</Link>&#42;, <Link to="/spell/mage_armor">mage armor</Link>, <Link to="/spell/magic_missile">magic missile</Link>, <Link to="/spell/mirror_strike">mirror strike</Link>&#42;, <Link to="/spell/reduce_person">reduce person</Link>&#42;, <Link to="/spell/thunderstomp">thunderstomp</Link>, <Link to="/spell/youthful_appearance">youthful appearance</Link>&#42;</Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.</li>
</ul>
<h4 id="eq-spellbook-runes_of_wealth-ritual">Ritual</h4>
<Ability id="change-magic-su" icon={["magic"]}>
<Pair single id="change-magic-su" flavor="Even the nature of magic is susceptible to your powerful transmutations.">Change Magic (Su)</Pair>
<Pair title="Swift Action">You can spend this boon to declare a non-transmutation spell you are casting to be "changed magic." This spell becomes a transmutation effect, and benefits from any abilities or feats that influence your transmutation spells and can be applied to the spell you cast (such as <Link to="/feat/spell_focus">Spell Focus</Link>).</Pair>
</Ability>
</>};
const _sarinis_workbook = {title: "Sarini's Workbook", jsx: <><div className="headerLike"><div>Sarini's Workbook</div><div className="sub">(Level 16 Magus with Bard Spells)</div></div>
<p><em>This book appears to be more of a personal journal than a magical tome. The soft leather binding is worn, and many pages bear the telltale creases of dog-ears and stains of spilled wine.</em></p>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 26</Link></p>
<Tabular format="sbook" v="4295" r="4670" />
<h4 id="eq-spellbook-sarinis_workbook-spells">Spells</h4>
<Block size="simple">
<Row><Cell>6th</Cell><Cell><Link to="/spell/mass_eagles_splendor">Mass eagle's splendor</Link>, <Link to="/spell/transformation">transformation</Link></Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/baleful_polymorph">Baleful polymorph</Link>, <Link to="/spell/shadow_evocation">shadow evocation</Link>, <Link to="/spell/telekinesis">telekinesis</Link>, <Link to="/spell/teleport">teleport</Link>, <Link to="/spell/vampiric_shadow_shield">vampiric shadow shield</Link>, <Link to="/spell/wall_of_force">wall of force</Link></Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/black_tentacles">Black tentacles</Link>, <Link to="/spell/charm_monster">charm monster</Link>, <Link to="/spell/greater_flaming_sphere">greater flaming sphere</Link>, <Link to="/spell/mass_enlarge_person">mass enlarge person</Link>, <Link to="/spell/mass_reduce_person">mass reduce person</Link>, <Link to="/spell/tough_crowd">tough crowd</Link>, <Link to="/spell/wreath_of_blades">wreath of blades</Link></Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/burst_of_speed">Burst of speed</Link>, <Link to="/spell/dispel_magic">dispel magic</Link>, <Link to="/spell/fly">fly</Link>, <Link to="/spell/heckle">heckle</Link>, <Link to="/spell/major_image">major image</Link>, <Link to="/spell/stage_fright">stage fright</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/alter_self">Alter self</Link>, <Link to="/spell/darkness">darkness</Link>, <Link to="/spell/hold_person">hold person</Link>, <Link to="/spell/minor_image">minor image</Link>, <Link to="/spell/pilfering_hand">pilfering hand</Link>, <Link to="/spell/scorching_ray">scorching ray</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/charm_person">Charm person</Link>, <Link to="/spell/flare_burst">flare burst</Link>, <Link to="/spell/grease">grease</Link>, <Link to="/spell/jump">jump</Link>, <Link to="/spell/mirror_strike">mirror strike</Link>, <Link to="/spell/mount">mount</Link>, <Link to="/spell/negative_reaction">negative reaction</Link>, <Link to="/spell/silent_image">silent image</Link>, <Link to="/spell/true_strike">true strike</Link>, <Link to="/spell/unseen_servant">unseen servant</Link></Cell></Row></Block>
<h4 id="eq-spellbook-sarinis_workbook-ritual">Ritual</h4>
<Ability id="devilishly-reasonable-su" icon={["boost"]}>
<Pair single id="devilishly-reasonable-su">Devilishly Reasonable (Su)</Pair>
<Pair title="Ability">You can spend this boon to gain a +5 bonus on a <Link to="/skill/diplomacy">Diplomacy</Link> check against a target that has an attitude of friendly or helpful toward you to request aid in the form of the target revealing an important secret.</Pair>
</Ability>
</>};
const _songs_of_the_linnorm_kings = {title: "Songs of the Linnorm Kings", jsx: <><div className="headerLike"><div>Songs of the Linnorm Kings</div><div className="sub">(Level 5 Skald)</div></div>
<p><em>This book's cover is made of scales that are warm to the touch.</em></p>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 5</Link></p>
<Tabular format="sbook" v="180" r="440" />
<h4 id="eq-spellbook-songs_of_the_linnorm_kings-spells">Spells</h4>
<Block size="simple">
<Row><Cell>2nd</Cell><Cell><Link to="/spell/marching_chant">Marching chant</Link>, <Link to="/spell/path_of_glory">path of glory</Link>, <Link to="/spell/scare">scare</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/cure_light_wounds">Cure light wounds</Link>, <Link to="/spell/heightened_awareness">heightened awareness</Link>, <Link to="/spell/remove_fear">remove fear</Link></Cell></Row>
<Row><Cell>0 (at will)</Cell><Cell><Link to="/spell/dancing_lights">Dancing lights</Link>, <Link to="/spell/ghost_sound">ghost sound</Link>, <Link to="/spell/lullaby">lullaby</Link>, <Link to="/spell/mage_hand">mage hand</Link>, <Link to="/spell/mending">mending</Link>, <Link to="/spell/resistance">resistance</Link></Cell></Row></Block>
<h4 id="eq-spellbook-songs_of_the_linnorm_kings-ritual">Ritual</h4>
<Ability id="storied-spell-lore-su" icon={["magic"]}>
<Pair single id="storied-spell-lore-su">Storied Spell Lore (Su)</Pair>
<Pair title="Choice">When you use this meditation ritual, choose a spell of 2nd level or lower in this meditation book.</Pair>
<Pair title="Swift Action">Whenever you cast a bard or skald conjuration spell, you can spend this boon to add the chosen spell to your list of bard or skald spells known for 1 round.</Pair>
</Ability>
</>};
const _the_formulae_of_master_gebr = {title: "The Formulae of Master Gebr", jsx: <><div className="headerLike"><div>The Formulae of Master Gebr</div><div className="sub">(Level 20 Alchemist)</div></div>
<p><em>These four cloth-bound books are neatly printed - as with a printing press or some other form of mechanical transcription - with a title page, a table of contents, and a useful cross-referenced index. They have been treated well and are clearly reference works, rather than laboratory notes; the writer was obviously a most disciplined and focused inventor.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 127</Link></p>
<Tabular format="sbook" p={<>The cover is treated with <Link to="/eq-poison/tears_of_death">tears of death</Link> poison.</>} v="6615" r="11115" />
<h4 id="eq-spellbook-the_formulae_of_master_gebr-formulae">Formulae</h4>
<Block size="simple">
<Row><Cell>6th</Cell><Cell><Link to="/spell/elemental_body_iii">Elemental body III</Link>, <Link to="/spell/form_of_the_dragon_i">form of the dragon I</Link>, <Link to="/spell/heal">heal</Link>, <Link to="/spell/shadow_walk">shadow walk</Link>, <Link to="/spell/transformation">transformation</Link>, <Link to="/spell/twin_form">twin form</Link></Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/delayed_consumption">Delayed consumption</Link>, <Link to="/spell/dream">dream</Link>, <Link to="/spell/elude_time">elude time</Link>, <Link to="/spell/nightmare">nightmare</Link>, <Link to="/spell/overland_flight">overland flight</Link>, <Link to="/spell/resurgent_transformation">resurgent transformation</Link>, <Link to="/spell/spell_resistance">spell resistance</Link></Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/detonate">Detonate</Link>, <Link to="/spell/dragons_breath">dragon's breath</Link>, <Link to="/spell/fire_shield">fire shield</Link>, <Link to="/spell/fluid_form">fluid form</Link>, <Link to="/spell/greater_invisibility">greater invisibility</Link>, <Link to="/spell/neutralize_poison">neutralize poison</Link>, <Link to="/spell/stoneskin">stoneskin</Link>, <Link to="/spell/universal_formula">universal formula</Link></Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/absorbing_touch">Absorbing touch</Link>, <Link to="/spell/amplify_elixir">amplify elixir</Link>, <Link to="/spell/bloodhound">bloodhound</Link>, <Link to="/spell/displacement">displacement</Link>, <Link to="/spell/draconic_reservoir">draconic reservoir</Link>, <Link to="/spell/haste">haste</Link>, <Link to="/spell/heroism">heroism</Link>, <Link to="/spell/seek_thoughts">seek thoughts</Link>, <Link to="/spell/thorn_body">thorn body</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/alchemical_allocation">Alchemical allocation</Link>, <Link to="/spell/barkskin">barkskin</Link>, <Link to="/spell/bulls_strength">bull's strength</Link>, <Link to="/spell/cats_grace">cat's grace</Link>, <Link to="/spell/elemental_touch">elemental touch</Link>, <Link to="/spell/fire_breath">fire breath</Link>, <Link to="/spell/perceive_cues">perceive cues</Link>, <Link to="/spell/see_invisibility">see invisibility</Link>, <Link to="/spell/transmute_potion_to_poison">transmute potion to poison</Link>, <Link to="/spell/vomit_swarm">vomit swarm</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/bombers_eye">Bomber's eye</Link>, <Link to="/spell/comprehend_languages">comprehend languages</Link>, <Link to="/spell/crafters_fortune">crafter's fortune</Link>, <Link to="/spell/disguise_self">disguise self</Link>, <Link to="/spell/endure_elements">endure elements</Link>, <Link to="/spell/keen_senses">keen senses</Link>, <Link to="/spell/negate_aroma">negate aroma</Link>, <Link to="/spell/shield">shield</Link>, <Link to="/spell/stone_fist">stone fist</Link>, <Link to="/spell/touch_of_the_sea">touch of the sea</Link></Cell></Row></Block>
<h4 id="eq-spellbook-the_formulae_of_master_gebr-ritual">Ritual</h4>
<Ability id="spontaneous-bomb-su" icon={["power"]}>
<Pair single id="spontaneous-bomb-su" flavor="When it comes to bombs, you have a special trick up your sleeve.">Spontaneous Bomb (Su)</Pair>
<Pair title="Swift Action">Once per day, you can apply a <Link to="/ability/discovery">discovery</Link> that you qualify for (but do not already know) to a bomb. This does not allow you to stack non-stacking discoveries on a bomb.</Pair>
</Ability>
</>};
const _the_guides_analects = {title: "The Guide's Analects", jsx: <><div className="headerLike"><div>The Guide's Analects</div><div className="sub">(Level 6 Universalist)</div></div>
<p><em>This book's worn leather cover is emblazoned with a simplified winged eye superimposed on a map of Avistan.</em></p>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 6</Link></p>
<Tabular format="sbook" v="690" r="990" />
<h4 id="eq-spellbook-the_guides_analects-spells">Spells</h4>
<Block size="simple">
<Row><Cell>3rd</Cell><Cell><Link to="/spell/arodens_spellsword">Aroden's spellsword</Link>, <Link to="/spell/heroism">heroism</Link>, <Link to="/spell/lesser_guardian_monument">lesser guardian monument</Link>, <Link to="/spell/magic_circle_against_evil">magic circle against evil</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/arcane_disruption">Arcane disruption</Link>, <Link to="/spell/human_potential">human potential</Link>, <Link to="/spell/masterwork_transformation">masterwork transformation</Link>, <Link to="/spell/winged_sword">winged sword</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/detect_undead">Detect undead</Link>, <Link to="/spell/endure_elements">endure elements</Link>, <Link to="/spell/expeditious_construction">expeditious construction</Link>, <Link to="/spell/heightened_awareness">heightened awareness</Link>, <Link to="/spell/linked_legacy">linked legacy</Link>, <Link to="/spell/mage_armor">mage armor</Link></Cell></Row></Block>
<h4 id="eq-spellbook-the_guides_analects-ritual">Ritual</h4>
<Ability id="glorious-blade-su" icon={["boost"]}>
<Pair single id="glorious-blade-su">Glorious Blade (Su)</Pair>
<Pair title="Free Action">When you attack with a sword (including sword-like effects created by spells such as <Link to="/spell/spiritual_weapon">spiritual weapon</Link>, as long as they require attack rolls), you can expend a prepared spell or spell slot to spend this boon. If you do, you gain an insight bonus on the attack roll equal to the level of the prepared spell or spell slot expended.</Pair>
</Ability>
</>};
const _the_last_azlantis_analects = {title: "The Last Azlanti's Analects", jsx: <><div className="headerLike"><div>The Last Azlanti's Analects</div><div className="sub">(Level 15 Universalist)</div></div>
<p><em>This book's ancient leather cover is emblazoned with a simplified winged eye.</em></p>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 6</Link></p>
<Tabular format="sbook" p={<><Link to="/eq-misc/average_lock">Average lock</Link> with <Link to="/spell/arcane_lock">arcane lock</Link> (DC 35) and <Link to="/spell/explosive_runes">explosive runes</Link> (Reflex DC 16)</>} v="7030" r="10030" />
<h4 id="eq-spellbook-the_last_azlantis_analects-spells">Spells</h4>
<Block size="simple">
<Row><Cell>8th</Cell><Cell><Link to="/spell/dimensional_lock">Dimensional lock</Link>, <Link to="/spell/iron_body">iron body</Link></Cell></Row>
<Row><Cell>7th</Cell><Cell><Link to="/spell/arodens_magic_army">Aroden's magic army</Link>, <Link to="/spell/delayed_blast_fireball">delayed blast fireball</Link>, <Link to="/spell/instant_summons">instant summons</Link>, <Link to="/spell/limited_wish">limited wish</Link></Cell></Row>
<Row><Cell>6th</Cell><Cell><Link to="/spell/antimagic_field">Antimagic field</Link>, <Link to="/spell/last_azlantis_defending_sword">Last Azlanti's defending sword</Link>, <Link to="/spell/mass_human_potential">mass human potential</Link>, <Link to="/spell/transformation">transformation</Link></Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/banishing_blade">Banishing blade</Link>, <Link to="/spell/cone_of_cold">cone of cold</Link>, <Link to="/spell/fabricate">fabricate</Link>, <Link to="/spell/greater_guardian_monument">greater guardian monument</Link></Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/dimensional_anchor">Dimensional anchor</Link>, <Link to="/spell/fear">fear</Link>, <Link to="/spell/locate_creature">locate creature</Link>, <Link to="/spell/resilient_sphere">resilient sphere</Link></Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/daylight">Daylight</Link>, <Link to="/spell/dispel_magic">dispel magic</Link>, <Link to="/spell/fireball">fireball</Link>, <Link to="/spell/greater_magic_weapon">greater magic weapon</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/continual_flame">Continual flame</Link>, <Link to="/spell/false_life">false life</Link>, <Link to="/spell/human_potential">human potential</Link>, <Link to="/spell/whispering_wind">whispering wind</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/alarm">Alarm</Link>, <Link to="/spell/anticipate_peril">anticipate peril</Link>, <Link to="/spell/expeditious_construction">expeditious construction</Link>, <Link to="/spell/floating_disk">floating disk</Link>, <Link to="/spell/hold_portal">hold portal</Link>, <Link to="/spell/magic_missile">magic missile</Link>, <Link to="/spell/protection_from_chaos">protection from chaos</Link>, <Link to="/spell/unseen_servant">unseen servant</Link></Cell></Row></Block>
<h4 id="eq-spellbook-the_last_azlantis_analects-ritual">Ritual</h4>
<Ability id="efficient-creator-su" icon={["power"]}>
<Pair single id="efficient-creator-su">Efficient Creator (Su)</Pair>
<Pair title="Ability">You can spend this boon to use the magic item creation rules to create items with the <Link to="/skill/craft">Craft</Link> skill for one day. When doing this, your material costs are equal to half the final value of the item crafted (rather than the normal 1/3 of the cost for using the Craft skill).</Pair>
<Pair title="Special">You can craft items with a cost greater than 1,000 gp by expending this boon over successive days, in the same way magic items with a cost over 1,000 gp can be crafted over multiple days. You otherwise follow all the rules and options for magic item creations.</Pair>
</Ability>
</>};
const _the_prying_eye = {title: "The Prying Eye", jsx: <><div className="headerLike"><div>The Prying Eye</div><div className="sub">(Level 7 Universalist)</div></div>
<p><em>The front cover of this tome is as black as night, while the back cover is ivory white. An eye-shaped symbol graces both covers.</em></p>
<p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology pg. 5</Link></p>
<Tabular format="sbook" v="1940" r="2200" />
<h4 id="eq-spellbook-the_prying_eye-spells">Spells</h4>
<Block size="simple">
<Row><Cell>4th</Cell><Cell><Link to="/spell/arcane_eye">Arcane eye</Link>, <Link to="/spell/eyes_of_the_void">eyes of the void</Link>, <Link to="/spell/medusas_bane">medusa's bane</Link></Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/arcane_sight">Arcane sight</Link>, <Link to="/spell/channel_the_gift">channel the gift</Link>, <Link to="/spell/fractions_of_heal_and_harm">fractions of heal and harm</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/darkvision">Darkvision</Link>, <Link to="/spell/burning_gaze">burning gaze</Link>, <Link to="/spell/see_invisibility">see invisibility</Link>, <Link to="/spell/spell_gauge">spell gauge</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/countless_eyes">Countless eyes</Link>, <Link to="/spell/detect_secret_doors">detect secret doors</Link>, <Link to="/spell/identify">identify</Link>, <Link to="/spell/invisibility_alarm">invisibility alarm</Link>, <Link to="/spell/see_alignment">see alignment</Link>, <Link to="/spell/true_strike">true strike</Link></Cell></Row></Block>
<h4 id="eq-spellbook-the_prying_eye-ritual">Ritual</h4>
<Ability id="keen-perception-su" icon={["boost"]}>
<Pair single id="keen-perception-su">Keen Perception (Su)</Pair>
<Pair title="Ability">You can spend this boon to gain a +2 insight bonus on a single <Link to="/skill/perception">Perception</Link> or <Link to="/skill/sense_motive">Sense Motive</Link> check.</Pair>
</Ability>
</>};
const _the_swordsmans_analects = {title: "The Swordsman's Analects", jsx: <><div className="headerLike"><div>The Swordsman's Analects</div><div className="sub">(Level 3 Universalist)</div></div>
<p><em>This book's worn leather cover is emblazoned with a winged sword with an eye at its hilt.</em></p>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 6</Link></p>
<Tabular format="sbook" v="250" r="400" />
<h4 id="eq-spellbook-the_swordsmans_analects-spells">Spells</h4>
<Block size="simple">
<Row><Cell>2nd</Cell><Cell><Link to="/spell/force_sword">Force sword</Link>, <Link to="/spell/human_potential">human potential</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/expeditious_construction">Expeditious construction</Link>, <Link to="/spell/identify">identify</Link>, <Link to="/spell/magic_weapon">magic weapon</Link>, <Link to="/spell/mirror_strike">mirror strike</Link>, <Link to="/spell/protection_from_evil">protection from evil</Link>, <Link to="/spell/unerring_weapon">unerring weapon</Link></Cell></Row></Block>
<h4 id="eq-spellbook-the_swordsmans_analects-ritual">Ritual</h4>
<Ability id="shielding-weapon-su" icon={["def"]}>
<Pair single id="shielding-weapon-su" flavor="Your spells infuse a weapon with protective magic.">Shielding Weapon (Su)</Pair>
<Pair title="Immediate Action">Spend this boon whenever you cast an abjuration spell. When you do, a weapon you wield grants you a shield bonus to your AC equal to 1 + <Link to="/misc/half">half</Link> the spell's level for 1 round.</Pair>
</Ability>
</>};
const _tome_of_stone_wards = {title: "Tome of Stone Wards", className: "noBullet", jsx: <><div className="headerLike"><div>Tome of Stone Wards</div><div className="sub">(Level 17 Abjurer)</div></div>
<p><em>This heavy book is bound between a pair of thin stone tablets, its title carved in gold lettering. Scribed completely in the Dwarven tongue, the text contains numerous tips regarding the construction and upkeep of nearly every corridor, path, and tunnel in the Five Kings Mountains.</em></p>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 28</Link></p>
<Tabular format="sbook" o="Not provided" v="4385" r="8385" />
<h4 id="eq-spellbook-tome_of_stone_wards-spells">Spells</h4>
<Block size="simple">
<Row><Cell>9th</Cell><Cell><Link to="/spell/imprisonment">Imprisonment</Link>&#42;</Cell></Row>
<Row><Cell>8th</Cell><Cell><Link to="/spell/dimensional_lock">Dimensional lock</Link>&#42;, <Link to="/spell/protection_from_spells">protection from spells</Link>&#42;</Cell></Row>
<Row><Cell>7th</Cell><Cell><Link to="/spell/banishment">Banishment</Link>&#42;, <Link to="/spell/spell_turning">spell turning</Link>&#42;</Cell></Row>
<Row><Cell>6th</Cell><Cell><Link to="/spell/greater_make_whole">Greater make whole</Link>, <Link to="/spell/guards_and_wards">guards and wards</Link>&#42;, <Link to="/spell/move_earth">move earth</Link>, <Link to="/spell/symbol_of_sealing">symbol of sealing</Link>&#42;</Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/life_bubble">Life bubble</Link>&#42;, <Link to="/spell/major_creation">major creation</Link>, <Link to="/spell/passwall">passwall</Link>, <Link to="/spell/wall_of_stone">wall of stone</Link>, <Link to="/spell/wreath_of_blades">wreath of blades</Link>&#42;</Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/curse_of_magic_negation">Curse of magic negation</Link>&#42;, <Link to="/spell/make_whole">make whole</Link>, <Link to="/spell/stone_shape">stone shape</Link>, <Link to="/spell/stoneskin">stoneskin</Link>&#42;</Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/burrow">Burrow</Link>, <Link to="/spell/communal_spider_climb">communal spider climb</Link>, <Link to="/spell/dispel_magic">dispel magic</Link>&#42;, <Link to="/spell/explosive_runes">explosive runes</Link>&#42;, <Link to="/spell/shrink_item">shrink item</Link>, <Link to="/spell/spiked_pit">spiked pit</Link>, <Link to="/spell/stunning_barrier">stunning barrier</Link>&#42;</Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/arcane_lock">Arcane lock</Link>&#42;, <Link to="/spell/certain_grip">certain grip</Link>, <Link to="/spell/communal_ant_haul">communal ant haul</Link>, <Link to="/spell/create_pit">create pit</Link>, <Link to="/spell/knock">knock</Link>, <Link to="/spell/resist_energy">resist energy</Link>&#42;, <Link to="/spell/spider_climb">spider climb</Link>, <Link to="/spell/stone_call">stone call</Link>, <Link to="/spell/warding_weapon">warding weapon</Link>&#42;</Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/alarm">Alarm</Link>&#42;, <Link to="/spell/ant_haul">ant haul</Link>, <Link to="/spell/expeditious_excavation">expeditious excavation</Link>, <Link to="/spell/invisibility_alarm">invisibility alarm</Link>&#42;</Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.</li>
</ul>
<h4 id="eq-spellbook-tome_of_stone_wards-ritual">Ritual</h4>
<Ability id="keeper-of-stone-exsu" icon={["boost"]}>
<Pair single id="keeper-of-stone-exsu" flavor={<>The <em>Tome of Stone Wards</em> covers the geography of caves and mountains (especially the Five Kings Mountains) thoroughly, and gives eldritch insights into how such terrain is formed.</>}>Keeper of Stone (Ex/Su)</Pair>
<Pair title="Passive Ability"><p>This boon is not spent, but grants you a +1 insight bonus on <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, and <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> checks, as well as on <Link to="/skill/survival">Survival</Link> checks attempted in hills, mountains, and underground terrain.</p>
<p>In addition, whenever you cast <Link to="/spell/mending">mending</Link>, <em>make whole,</em> or <em>greater make whole</em> on an object made entirely from stone, add 1d6 to the number of hit points restored to the object.</p>
<p>These benefits last until you next regain spell slots or prepare spells.</p>
</Pair>
</Ability>
</>};
const _tome_of_the_transmuter = {title: "Tome of the Transmuter", className: "noBullet", jsx: <><div className="headerLike"><div>Tome of the Transmuter</div><div className="sub">(Level 8 Transmuter)</div></div>
<p><em>This simple book is bound in white leather with a silver clasp. Careful notes on economic theory in a crisp and precise hand occupy the last few written pages, after which there is a page stained with a dark reddish-brown smear. The rest of the pages are blank.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 123</Link></p>
<Tabular format="sbook" o="Illusion, necromancy" p={<><Link to="/eq-misc/good_lock">Good lock</Link> (DC 30), <em>explosive runes</em> (Reflex DC 16)</>} v="1835" r="2635" />
<h4 id="eq-spellbook-tome_of_the_transmuter-spells">Spells</h4>
<Block size="simple">
<Row><Cell>4th</Cell><Cell><Link to="/spell/beast_shape_ii">Beast shape II</Link>&#42;, <Link to="/spell/calcific_touch">calcific touch</Link>&#42;, <Link to="/spell/confusion">confusion</Link>, <Link to="/spell/dimension_door">dimension door</Link>, <Link to="/spell/stone_shape">stone shape</Link>&#42;</Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/arcane_sight">Arcane sight</Link>, <Link to="/spell/dispel_magic">dispel magic</Link>, <Link to="/spell/explosive_runes">explosive runes</Link>, <Link to="/spell/lightning_bolt">lightning bolt</Link>, <Link to="/spell/greater_magic_weapon">greater magic weapon</Link>&#42;, <Link to="/spell/slow">slow</Link>&#42;</Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/alter_self">Alter self</Link>&#42;, <Link to="/spell/flaming_sphere">flaming sphere</Link>, <Link to="/spell/knock">knock</Link>&#42;, <Link to="/spell/pyrotechnics">pyrotechnics</Link>&#42;, <Link to="/spell/resist_energy">resist energy</Link>, <Link to="/spell/see_invisibility">see invisibility</Link>, <Link to="/spell/whispering_wind">whispering wind</Link>&#42;</Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/animate_rope">Animate rope</Link>&#42;, <Link to="/spell/charm_person">charm person</Link>, <Link to="/spell/color_spray">color spray</Link>&dagger;, <Link to="/spell/erase">erase</Link>&#42;, <Link to="/spell/floating_disk">floating disk</Link>, <Link to="/spell/mage_armor">mage armor</Link>, <Link to="/spell/magic_missile">magic missile</Link>, <Link to="/spell/protection_from_chaos">protection from chaos</Link>, <Link to="/spell/unseen_servant">unseen servant</Link></Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.  </li>
<li><strong>&dagger;</strong> A spell from the spellbook creator's opposition school.</li>
</ul>
<blockquote>
<p><strong className="hl">Note:</strong> The original text also contains a 1st-level spell named "hush", but the spell was not included in the source book.</p>
</blockquote>
<h4 id="eq-spellbook-tome_of_the_transmuter-ritual">Ritual</h4>
<Ability id="defensive-transmutation-su" icon={["def"]}>
<Pair single id="defensive-transmutation-su" flavor="When taking another shape, you can increase your defenses.">Defensive Transmutation (Su)</Pair>
<Pair title="Free Action">Spend this boon's effect when you cast a transmutation spell with a range of personal. As long as you are affected by that spell, you gain a +2 natural armor bonus for the duration of the spell.</Pair>
</Ability>
</>};
const _travelers_tome = {title: "Traveler's Tome", className: "noBullet", jsx: <><div className="headerLike"><div>Traveler's Tome</div><div className="sub">(Level 4 Transmuter)</div></div>
<p><em>This small book, no larger than a pocket notebook, is bound between wooden covers, and is clearly a copy meant to withstand the rigors of adventuring. The arrowhead lodged in the cover can't be removed without magic.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 121</Link></p>
<Tabular format="sbook" o="Conjuration, enchantment" p={<><Link to="/eq-misc/simple_lock">Simple lock</Link> (DC 20)</>} v="365" />
<h4 id="eq-spellbook-travelers_tome-spells">Spells</h4>
<Block size="simple">
<Row><Cell>2nd</Cell><Cell><Link to="/spell/glide">Glide</Link>&#42;, <Link to="/spell/knock">knock</Link>&#42;, <Link to="/spell/levitate">levitate</Link>&#42;, <Link to="/spell/rope_trick">rope trick</Link>&#42;</Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/ant_haul">Ant haul</Link>&#42;, <Link to="/spell/enlarge_person">enlarge person</Link>&#42;, <Link to="/spell/erase">erase</Link>&#42;, <Link to="/spell/expeditious_retreat">expeditious retreat</Link>&#42;, <Link to="/spell/gravity_bow">gravity bow</Link>&#42;, <Link to="/spell/hold_portal">hold portal</Link>, <Link to="/spell/jump">jump</Link>&#42;, <Link to="/spell/magic_weapon">magic weapon</Link>&#42;, <Link to="/spell/shield">shield</Link></Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.</li>
</ul>
</>};
const _unnamed_journal = {title: "Unnamed Journal", jsx: <><div className="headerLike"><div>Unnamed Journal</div><div className="sub">(Level 3 Universalist)</div></div>
<p><em>This is a simple, unadorned spellbook. Notes on improving the efficiency of each spell crowd the margins, most of them hopelessly misguided.</em></p>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 121</Link></p>
<Tabular format="sbook" v="275" />
<h4 id="eq-spellbook-unnamed_journal-spells">Spells</h4>
<Block size="simple">
<Row><Cell>2nd</Cell><Cell><Link to="/spell/foxs_cunning">Fox's cunning</Link>, <Link to="/spell/scorching_ray">scorching ray</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/alarm">Alarm</Link>, <Link to="/spell/feather_fall">feather fall</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link>, <Link to="/spell/mount">mount</Link>, <Link to="/spell/shield">shield</Link>, <Link to="/spell/shocking_grasp">shocking grasp</Link>, <Link to="/spell/silent_image">silent image</Link>, <Link to="/spell/sleep">sleep</Link></Cell></Row></Block>
</>};
const _wisdom_of_jatembe_nine_warriors_edition = {title: "Wisdom of Jatembe (Nine Warriors Edition)", className: "noBullet", jsx: <><div className="headerLike"><div>Wisdom of Jatembe (Nine Warriors Edition)</div><div className="sub">(Level 17 Diviner)</div></div>
<p><em>The cover of this thick tome a patchwork of sections of different hides, whose colors and textures form a stylized depiction of an animal face.</em></p>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 13</Link></p>
<Tabular format="sbook" o="Not provided" v="13415" r="38415" />
<h4 id="eq-spellbook-wisdom_of_jatembe_nine_warriors_edition-spells">Spells</h4>
<Block size="simple">
<Row><Cell>9th</Cell><Cell><Link to="/spell/gate">Gate</Link>, <Link to="/spell/mages_disjunction">mage's disjunction</Link>, <Link to="/spell/meteor_swarm">meteor swarm</Link>, <Link to="/spell/time_stop">time stop</Link></Cell></Row>
<Row><Cell>8th</Cell><Cell><Link to="/spell/maze">Maze</Link>, <Link to="/spell/polymorph_any_object">polymorph any object</Link>, <Link to="/spell/power_word_stun">power word stun</Link>, <Link to="/spell/summon_monster_viii">summon monster VIII</Link></Cell></Row>
<Row><Cell>7th</Cell><Cell><Link to="/spell/forcecage">Forcecage</Link>, <Link to="/spell/mages_sword">mage's sword</Link>, <Link to="/spell/mass_invisibility">mass invisibility</Link>, <Link to="/spell/summon_monster_vii">summon monster VII</Link></Cell></Row>
<Row><Cell>6th</Cell><Cell><Link to="/spell/chain_lightning">Chain lightning</Link>, <Link to="/spell/globe_of_invulnerability">globe of invulnerability</Link>, <Link to="/spell/jatembes_ire">Jatembe's ire</Link>, <Link to="/spell/legend_lore">legend lore</Link>&#42;, <Link to="/spell/mislead">mislead</Link>, <Link to="/spell/summon_monster_vi">summon monster VI</Link>, <Link to="/spell/true_seeing">true seeing</Link>&#42;</Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/baleful_polymorph">Baleful polymorph</Link>, <Link to="/spell/cloudkill">cloudkill</Link>, <Link to="/spell/communal_stoneskin">communal stoneskin</Link>, <Link to="/spell/cone_of_cold">cone of cold</Link>, <Link to="/spell/mages_faithful_hound">mage's faithful hound</Link>, <Link to="/spell/overland_flight">overland flight</Link></Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/communal_protection_from_energy">Communal protection from energy</Link>, <Link to="/spell/dimension_door">dimension door</Link>, <Link to="/spell/enervation">enervation</Link>, <Link to="/spell/greater_celestial_healing">greater celestial healing</Link>, <Link to="/spell/mass_enlarge_person">mass enlarge person</Link>, <Link to="/spell/wall_of_fire">wall of fire</Link></Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/communal_resist_energy">Communal resist energy</Link>, <Link to="/spell/fireball">fireball</Link>, <Link to="/spell/haste">haste</Link>, <Link to="/spell/lightning_bolt">lightning bolt</Link>, <Link to="/spell/planar_inquiry">planar inquiry</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/blur">Blur</Link>, <Link to="/spell/communal_protection_from_evil">communal protection from evil</Link>, <Link to="/spell/glitterdust">glitterdust</Link>, <Link to="/spell/mirror_image">mirror image</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/celestial_healing">Celestial healing</Link>, <Link to="/spell/expeditious_retreat">expeditious retreat</Link>, <Link to="/spell/feather_fall">feather fall</Link>, <Link to="/spell/magic_missile">magic missile</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link>, <Link to="/spell/true_strike">true strike</Link>&#42;</Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.</li>
</ul>
<h4 id="eq-spellbook-wisdom_of_jatembe_nine_warriors_edition-ritual">Ritual</h4>
<Ability id="secrets-of-jatembe-su" icon={["learn"]}>
<Pair single id="secrets-of-jatembe-su" flavor="This edition of the Wisdom of Jatembe includes a number of unique rituals and philosophical notes supposedly written by the Old-Mage himself.">Secrets of Jatembe (Su)</Pair>
<Pair title="Ability">These secrets allow you to prepare one of the following spells as an arcane spell 1 level higher than its druid spell level: <Link to="/spell/barkskin">barkskin</Link>, <Link to="/spell/call_lightning">call lightning</Link>, <Link to="/spell/cyclic_reincarnation">cyclic reincarnation</Link>, <Link to="/spell/entangle">entangle</Link>, <Link to="/spell/forest_friend">forest friend</Link>, <Link to="/spell/lesser_restoration">lesser restoration</Link>, <Link to="/spell/plant_growth">plant growth</Link>, <Link to="/spell/speak_with_animals">speak with animals</Link>, and <Link to="/spell/speak_with_plants">speak with plants</Link>.</Pair>
<Pair title="Special">At the GM's discretion, additional spells of 6th level or lower from the druid spell list may be available through the preparation rituals of specific copies of this book (which increases the spellbook's price by twice the cost of adding a wizard spell of the same level to the spellbook).</Pair>
</Ability>
</>};
const _wisdom_of_jatembe_six_warriors_edition = {title: "Wisdom of Jatembe (Six Warriors Edition)", className: "noBullet", jsx: <><div className="headerLike"><div>Wisdom of Jatembe (Six Warriors Edition)</div><div className="sub">(Level 11 Diviner)</div></div>
<p><em>This book is bound in thick, rough rawhide. Several cloth ribbons are attached to the spine and used as bookmarks, each with a yellowed tooth tied to the loose end. Two silver plates are bound to the spine, each depicting the stylized face of a different beast. The spells and stories recorded throughout the book are each written in a different handwriting, ranging from neat block script to wild looping letters that are difficult to read at first glance.</em></p>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 12</Link></p>
<Tabular format="sbook" o="Not provided" v="4725" r="6025" />
<h4 id="eq-spellbook-wisdom_of_jatembe_six_warriors_edition-spells">Spells</h4>
<Block size="simple">
<Row><Cell>6th</Cell><Cell><Link to="/spell/chain_lightning">Chain lightning</Link>, <Link to="/spell/contagious_flame">contagious flame</Link>, <Link to="/spell/jatembes_ire">Jatembe's ire</Link>, <Link to="/spell/legend_lore">legend lore</Link>&#42;, <Link to="/spell/planar_binding">planar binding</Link></Cell></Row>
<Row><Cell>5th</Cell><Cell><Link to="/spell/dismissal">Dismissal</Link>, <Link to="/spell/lesser_planar_binding">lesser planar binding</Link>, <Link to="/spell/overland_flight">overland flight</Link>, <Link to="/spell/polymorph">polymorph</Link>, <Link to="/spell/sending">sending</Link>, <Link to="/spell/summon_monster_v">summon monster V</Link>, <Link to="/spell/telepathic_bond">telepathic bond</Link>&#42;</Cell></Row>
<Row><Cell>4th</Cell><Cell><Link to="/spell/black_tentacles">Black tentacles</Link>, <Link to="/spell/dimensional_anchor">dimensional anchor</Link>, <Link to="/spell/greater_celestial_healing">greater celestial healing</Link>, <Link to="/spell/wall_of_fire">wall of fire</Link></Cell></Row>
<Row><Cell>3rd</Cell><Cell><Link to="/spell/dispel_magic">Dispel magic</Link>, <Link to="/spell/haste">haste</Link>, <Link to="/spell/planar_inquiry">planar inquiry</Link>, <Link to="/spell/stinking_cloud">stinking cloud</Link></Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/blindness_deafness">Blindness/deafness</Link>, <Link to="/spell/mirror_image">mirror image</Link>, <Link to="/spell/spectral_hand">spectral hand</Link></Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/celestial_healing">Celestial healing</Link>, <Link to="/spell/magic_missile">magic missile</Link>, <Link to="/spell/shocking_grasp">shocking grasp</Link>, <Link to="/spell/true_strike">true strike</Link>&#42;</Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.</li>
</ul>
<h4 id="eq-spellbook-wisdom_of_jatembe_six_warriors_edition-ritual">Ritual</h4>
<Ability id="jatembes-vindication-su" icon={["boost"]}>
<Pair single id="jatembes-vindication-su" flavor="The Old-Mage's teachings are a call to arms for all good spellcasters, stressing the importance of using one's talents altruistically and philanthropically, and his teachings foster the power of good in even the most apathetic heart.">Jatembe's Vindication (Su)</Pair>
<Pair title="Ability">Expend this boon when you cast a spell that targets one or more creatures. The spell gains the good descriptor as well as a +2 sacred bonus on caster level checks to overcome the spell resistance of evil creatures.</Pair>
<Pair title="Special">An evil creature cannot use this preparation ritual.</Pair>
</Ability>
</>};
const _wisdom_of_jatembe_three_warriors_edition = {title: "Wisdom of Jatembe (Three Warriors Edition)", className: "noBullet", jsx: <><div className="headerLike"><div>Wisdom of Jatembe (Three Warriors Edition)</div><div className="sub">(Level 5 Diviner)</div></div>
<p><em>Well-tanned leather binds this sturdy spellbook, with a copper plate of a stylized animal head bolted to the front cover. A foreword filling the first several pages of this book is addressed to "young students of the <Link to="/rule/magaambya">Magaambya</Link>," and offers warnings about the unexpected consequences of using spells without careful consideration. The rest of the book contains spells, each proceeded and followed by one or more stories discussing situations with thematic links to the spell.</em></p>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 12</Link></p>
<Tabular format="sbook" o="Not provided" v="375" r="875" />
<h4 id="eq-spellbook-wisdom_of_jatembe_three_warriors_edition-spells">Spells</h4>
<Block size="simple">
<Row><Cell>3rd</Cell><Cell><Link to="/spell/beast_shape_i">Beast shape I</Link>, <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link>&#42;, <Link to="/spell/planar_inquiry">planar inquiry</Link>, <Link to="/spell/tongues">tongues</Link>&#42;</Cell></Row>
<Row><Cell>2nd</Cell><Cell><Link to="/spell/alter_self">Alter self</Link>, <Link to="/spell/detect_thoughts">detect thoughts</Link>&#42;, <Link to="/spell/locate_object">locate object</Link>&#42;, <Link to="/spell/obscure_object">obscure object</Link>, <Link to="/spell/see_invisibility">see invisibility</Link>&#42;</Cell></Row>
<Row><Cell>1st</Cell><Cell><Link to="/spell/celestial_healing">Celestial healing</Link>, <Link to="/spell/comprehend_languages">comprehend languages</Link>&#42;, <Link to="/spell/detect_undead">detect undead</Link>&#42;, <Link to="/spell/endure_elements">endure elements</Link>, <Link to="/spell/heightened_awareness">heightened awareness</Link>&#42;, <Link to="/spell/hydraulic_push">hydraulic push</Link>, <Link to="/spell/identify">identify</Link>&#42;, <Link to="/spell/obscuring_mist">obscuring mist</Link></Cell></Row></Block>
<ul>
<li><strong>&#42;</strong> A spell from the spellbook creator's specialty school.</li>
</ul>
<h4 id="eq-spellbook-wisdom_of_jatembe_three_warriors_edition-ritual">Ritual</h4>
<Ability id="eyes-of-jatembe-su" icon={["boost"]}>
<Pair single id="eyes-of-jatembe-su" flavor="Several of the stories within this spellbook suggest ways to take what information you have and use it to infer the answers to questions for which you don't have proven solutions.">Eyes of Jatembe (Su)</Pair>
<Pair title="Ability">Spend this boon when you cast a divination spell to increase the spell's caster level by +2.</Pair>
</Ability>
</>};
export default {not_found:_not_found,apprentice_chapbook_of_rul_thaven:_apprentice_chapbook_of_rul_thaven,arctic_call:_arctic_call,arrowsongs_sorrow:_arrowsongs_sorrow,book_of_harms:_book_of_harms,book_of_the_grave:_book_of_the_grave,calamaes_fragment:_calamaes_fragment,chymists_guidebook:_chymists_guidebook,cold_irony:_cold_irony,cyrusian_codex:_cyrusian_codex,defensive_primer:_defensive_primer,erages_journeymans_manual:_erages_journeymans_manual,galtan_cookbook:_galtan_cookbook,grandfathers_legacy:_grandfathers_legacy,grimoire_of_glittering_eyes:_grimoire_of_glittering_eyes,guardian_grimoire:_guardian_grimoire,insights_of_far_seeing_taernis:_insights_of_far_seeing_taernis,journal_of_the_beast_within:_journal_of_the_beast_within,journeyman_book_of_rul_thaven:_journeyman_book_of_rul_thaven,lab_journal_of_constance_inflix:_lab_journal_of_constance_inflix,library_of_the_dancer_of_skins:_library_of_the_dancer_of_skins,manual_of_binding:_manual_of_binding,manuscript_of_jack_were_son:_manuscript_of_jack_were_son,master_books_of_rul_thaven:_master_books_of_rul_thaven,mastery_of_word_and_thought:_mastery_of_word_and_thought,mysteries_of_shadow:_mysteries_of_shadow,nyzams_remedies:_nyzams_remedies,quest_eternal:_quest_eternal,runes_of_wealth:_runes_of_wealth,sarinis_workbook:_sarinis_workbook,songs_of_the_linnorm_kings:_songs_of_the_linnorm_kings,the_formulae_of_master_gebr:_the_formulae_of_master_gebr,the_guides_analects:_the_guides_analects,the_last_azlantis_analects:_the_last_azlantis_analects,the_prying_eye:_the_prying_eye,the_swordsmans_analects:_the_swordsmans_analects,tome_of_stone_wards:_tome_of_stone_wards,tome_of_the_transmuter:_tome_of_the_transmuter,travelers_tome:_travelers_tome,unnamed_journal:_unnamed_journal,wisdom_of_jatembe_nine_warriors_edition:_wisdom_of_jatembe_nine_warriors_edition,wisdom_of_jatembe_six_warriors_edition:_wisdom_of_jatembe_six_warriors_edition,wisdom_of_jatembe_three_warriors_edition:_wisdom_of_jatembe_three_warriors_edition}