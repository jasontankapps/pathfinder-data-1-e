import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
const _amnesiac = {title: "Amnesiac", jsx: <><h2 id="arc-psychic-amnesiac-amnesiac">Amnesiac</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 104</Link><br/>The amnesiac once possessed great psychic power, but mental blocks - resulting from either a traumatic event or intentional implantation - have caused her to forget what she knew before. The amnesiac's struggle to control her psychic magic leads to wild and unpredictable results.</p>
<Ability id="arc-psychic-amnesiac-repressed-memories" icon={["info","hazard-sign"]}>
<Pair single id="arc-psychic-amnesiac-repressed-memories">Repressed Memories</Pair>
<Pair title="Info">All the amnesiac's older memories have been deeply hidden, as though she had been affected by multiple <Link to="/spell/repress_memory">repress memory</Link> spells. She isn't prevented from remembering things that happen over the course of a game, but might be forgetful. If the amnesiac's memories are ever restored, she loses this archetype and reverts to a standard psychic.</Pair>
</Ability>
<Ability id="arc-psychic-amnesiac-spells" icon={["magic-swirl","info"]}>
<Pair single id="arc-psychic-amnesiac-spells">Spells</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Ability"><p>An amnesiac's ability to cast psychic spells is the same as that of the psychic class, with the following exceptions.</p>
<p>An amnesiac's faulty memory makes remembering and casting spells difficult, but the increased flexibility can be a great benefit. Instead of choosing a number of spells known from the <Link to="/class/psychic">psychic's</Link> Spells Known table, an amnesiac accesses spells she knew the previous day from the recesses of her mind. This requires 1 hour of meditation. Each day, for each spell level the amnesiac can cast, she retains a number of spells known equal to half the number listed on the Spells Known table, rounded up. These spells must be selected from spells the amnesiac knew the previous day (including any spells she remembered using <em>spell recollection;</em> see below). The remainder of her spells known (half that of a normal psychic, rounded down) become amnesia slots, which the amnesiac can use with her <em>spell recollection</em> ability. To determine the spells she knows on the day when she first takes this archetype, the amnesiac picks any one 1st-level spell from the psychic spell list.</p>
<p>This change to spells doesn't apply to knacks (0-level spells) or discipline spells, which function the same way they do for a normal psychic. When the amnesiac gains access to 3rd-level spells, she gains full recall of her 1st-level spells and no longer gains 1st-level amnesia slots, instead gaining the full number of 1st-level spells known from the Spells Known table and casting them as a normal psychic. When this happens, the amnesiac can select any level-appropriate spells from the psychic spell list as her spells known, even if they were never among the spells she prepared or recalled; once selected, these spells can no longer be changed, as with a normal psychic. Each time the psychic gains access to a new level of spells, she gains full memory of spells 2 levels lower in the same way (gaining full memory and permanently selecting her 2nd-level spells when she gains access to 4th-level spells, and so on).</p>
</Pair>
</Ability>
<Ability id="arc-psychic-amnesiac-spell-recollection-ex" icon={["spell-book"]}>
<Pair single id="arc-psychic-amnesiac-spell-recollection-ex">Spell Recollection (Ex)</Pair>
<Pair title="Usage">Once per hour</Pair>
<Pair title="Swift Action"><p>An amnesiac can attempt to remember any spell from the psychic spell list of her choice from either of the 2 highest spell levels she can cast. When she does, she rolls on the table below to determine the result. Because the mental stress of combat brings memories to the surface more easily, the amnesiac adds 1d10 to this roll's result if she's in combat when she attempts to recall a spell. Regardless of the result, the amnesiac expends an amnesia slot of the appropriate level for the spell she is attempting to remember; she must cast the spell remembered (if any) using that amnesia slot during the same round, or the spell slot is lost without effect. Once a spell has been remembered in this way, the amnesiac can cast it as one of her spells known for the rest of the day (even if she failed to cast the spell during the round in which she remembered it), unless <em>spell recollection</em> allowed her to cast a spell of a higher level than she would normally be able to cast.</p>
<ScrollContainer id="arc-psychic-amnesiac--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Result</th>
</tr>
</thead>
<tbody><tr>
<td>01-10</td>
<td>The amnesiac is unable to cast spells this round.</td>
</tr>
<tr>
<td>11-35</td>
<td>The amnesiac can't remember the new spell (but can still cast spells this round).</td>
</tr>
<tr>
<td>36-95</td>
<td>The amnesiac remembers and can cast the new spell.</td>
</tr>
<tr>
<td>96+</td>
<td>The amnesiac can choose to treat this result as 36-95. Alternatively, once per day, she can instead temporarily recall any spell from the psychic spell list that's 1 level higher than the spell she's attempting to remember. When she does, her caster level counts as the minimum caster level required to cast the higher-level spell, and she forgets the spell after it's cast.</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
</Ability>
</>};
const _esoteric_starseeker = {title: "Esoteric Starseeker", jsx: <><h2 id="arc-psychic-esoteric_starseeker-esoteric-starseeker">Esoteric Starseeker</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 30</Link><br/>The celestial bodies travel through the sky in fixed patterns, and knowledgeable astrologers rely on these stellar constants to make accurate predictions, but the constellations can also be a source of power. An esoteric starseeker is a psychic who focuses her studies on uncovering the secrets of the sky and the constellations of the Cosmic Caravan, able to read the stars as well as she can read minds.</p>
<Ability id="arc-psychic-esoteric_starseeker-written-in-the-stars" extraClasses="hasSubs" icon={["spell-book","broken-shield"]}>
<Pair single id="arc-psychic-esoteric_starseeker-written-in-the-stars">Written in the Stars</Pair>
<Pair hl title="Replaces">Discipline spells, 1st- and 11th-level phrenic amplifications</Pair>
<Pair title="Ability">An esoteric starseeker can spend 1 hour each night in quiet contemplation of the stars to attune herself to a constellation of the Cosmic Caravan, gaining knowledge of new spells from it. She gains one bonus constellation spell slot for each spell level she can cast, and she can prepare a spell associated with her attuned constellation into that slot.</Pair>
<Pair title="Info">Whenever she attunes herself to a constellation, the esoteric starseeker must also weaken her connection to one school of magic of her choice, increasing the casting time for all spells of that school to a full-round action or an additional full-round action, as though she were using a <Link to="/rule/metamagic_feats">metamagic feat</Link>.</Pair>
<Pair title="At 11th Level">She can attune herself to two constellations, choosing between the spells offered by both constellations when she prepares her constellation spells.</Pair>
<Pair title="Special">She can change her attuned constellations and her weakened school each day when she prepares her constellation spells. The Cosmic Caravan and their associated spells (listed by spell level) are listed below.</Pair>
</Ability>
<Ability id="arc-psychic-esoteric_starseeker-the-thrush" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-psychic-esoteric_starseeker-the-thrush">The Thrush</Pair>
<Pair plain title="1st"><Link to="/spell/comprehend_languages">Comprehend languages</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/magic_mouth">Magic mouth</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/tiny_hut">Tiny hut</Link></Pair>
<Pair plain title="4th"><Link to="/spell/dream">Dream</Link></Pair>
<Pair plain title="5th"><Link to="/spell/remote_viewing">Remote viewing</Link></Pair>
<Pair plain title="6th"><Link to="/spell/battlemind_link">Battlemind link</Link></Pair>
<Pair plain title="7th"><Link to="/spell/phase_door">Phase door</Link></Pair>
<Pair plain title="8th"><Link to="/spell/discern_location">Discern location</Link></Pair>
<Pair plain title="9th"><Link to="/spell/wish">Wish</Link></Pair>
</Ability>
<Ability id="arc-psychic-esoteric_starseeker-the-lantern-bearer" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-psychic-esoteric_starseeker-the-lantern-bearer">The Lantern Bearer</Pair>
<Pair plain title="1st"><Link to="/spell/liberating_command">Liberating command</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/glitterdust">Glitterdust</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/guiding_star">Guiding star</Link></Pair>
<Pair plain title="4th"><Link to="/spell/wandering_star_motes">Wandering star motes</Link></Pair>
<Pair plain title="5th"><Link to="/spell/true_seeing">True seeing</Link></Pair>
<Pair plain title="6th"><Link to="/spell/sonic_form">Sonic form</Link></Pair>
<Pair plain title="7th"><Link to="/spell/prismatic_spray">Prismatic spray</Link></Pair>
<Pair plain title="8th"><Link to="/spell/sunburst">Sunburst</Link></Pair>
<Pair plain title="9th"><Link to="/spell/meteor_swarm">Meteor swarm</Link></Pair>
</Ability>
<Ability id="arc-psychic-esoteric_starseeker-the-newlyweds" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-psychic-esoteric_starseeker-the-newlyweds">The Newlyweds</Pair>
<Pair plain title="1st"><Link to="/spell/charm_person">Charm person</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/enthrall">Enthrall</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/synesthesia">Synesthesia</Link></Pair>
<Pair plain title="4th"><Link to="/spell/break_enchantment">Break enchantment</Link></Pair>
<Pair plain title="5th"><Link to="/spell/reincarnate">Reincarnate</Link></Pair>
<Pair plain title="6th"><Link to="/spell/joyful_rapture">Joyful rapture</Link></Pair>
<Pair plain title="7th"><Link to="/spell/mass_synesthesia">Mass synesthesia</Link></Pair>
<Pair plain title="8th"><Link to="/spell/bilocation">Bilocation</Link></Pair>
<Pair plain title="9th"><Link to="/spell/overwhelming_presence">Overwhelming presence</Link></Pair>
</Ability>
<Ability id="arc-psychic-esoteric_starseeker-the-bridge" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-psychic-esoteric_starseeker-the-bridge">The Bridge</Pair>
<Pair plain title="1st"><Link to="/spell/endure_elements">Endure elements</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/resist_energy">Resist energy</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/daylight">Daylight</Link></Pair>
<Pair plain title="4th"><Link to="/spell/fire_shield">Fire shield</Link></Pair>
<Pair plain title="5th"><Link to="/spell/wall_of_force">Wall of force</Link></Pair>
<Pair plain title="6th"><Link to="/spell/contagious_flame">Contagious flame</Link></Pair>
<Pair plain title="7th"><Link to="/spell/reverse_gravity">Reverse gravity</Link></Pair>
<Pair plain title="8th"><Link to="/spell/create_demiplane">Create demiplane</Link></Pair>
<Pair plain title="9th"><Link to="/spell/world_wave">World wave</Link></Pair>
</Ability>
<Ability id="arc-psychic-esoteric_starseeker-the-daughter" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-psychic-esoteric_starseeker-the-daughter">The Daughter</Pair>
<Pair plain title="1st"><Link to="/spell/bless">Bless</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/hypnotic_pattern">Hypnotic pattern</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/heroism">Heroism</Link></Pair>
<Pair plain title="4th"><Link to="/spell/freedom_of_movement">Freedom of movement</Link></Pair>
<Pair plain title="5th"><Link to="/spell/hostile_juxtaposition">Hostile juxtaposition</Link></Pair>
<Pair plain title="6th"><Link to="/spell/cloak_of_dreams">Cloak of dreams</Link></Pair>
<Pair plain title="7th"><Link to="/spell/greater_hostile_juxtaposition">Greater hostile juxtaposition</Link></Pair>
<Pair plain title="8th"><Link to="/spell/irresistible_dance">Irresistible dance</Link></Pair>
<Pair plain title="9th"><Link to="/spell/freedom">Freedom</Link></Pair>
</Ability>
<Ability id="arc-psychic-esoteric_starseeker-the-rider" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-psychic-esoteric_starseeker-the-rider">The Rider</Pair>
<Pair plain title="1st"><Link to="/spell/anticipate_peril">Anticipate peril</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/acute_senses">Acute senses</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/ablative_barrier">Ablative barrier</Link></Pair>
<Pair plain title="4th"><Link to="/spell/dimensional_anchor">Dimensional anchor</Link></Pair>
<Pair plain title="5th"><Link to="/spell/echolocation">Echolocation</Link></Pair>
<Pair plain title="6th"><Link to="/spell/blade_barrier">Blade barrier</Link></Pair>
<Pair plain title="7th"><Link to="/spell/grasping_hand">Grasping hand</Link></Pair>
<Pair plain title="8th"><Link to="/spell/frightful_aspect">Frightful aspect</Link></Pair>
<Pair plain title="9th"><Link to="/spell/ride_the_lightning">Ride the lightning</Link></Pair>
</Ability>
<Ability id="arc-psychic-esoteric_starseeker-the-patriarch" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-psychic-esoteric_starseeker-the-patriarch">The Patriarch</Pair>
<Pair plain title="1st"><Link to="/spell/command">Command</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/spiritual_weapon">Spiritual weapon</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/dispel_magic">Dispel magic</Link></Pair>
<Pair plain title="4th"><Link to="/spell/telekinetic_charge">Telekinetic charge</Link></Pair>
<Pair plain title="5th"><Link to="/spell/contact_other_plane">Contact other plane</Link></Pair>
<Pair plain title="6th"><Link to="/spell/find_the_path">Find the path</Link></Pair>
<Pair plain title="7th"><Link to="/spell/mages_sword">Mage's sword</Link></Pair>
<Pair plain title="8th"><Link to="/spell/brilliant_inspiration">Brilliant inspiration</Link></Pair>
<Pair plain title="9th"><Link to="/spell/gate">Gate</Link></Pair>
</Ability>
<Ability id="arc-psychic-esoteric_starseeker-the-wagon" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-psychic-esoteric_starseeker-the-wagon">The Wagon</Pair>
<Pair plain title="1st"><Link to="/spell/expeditious_retreat">Expeditious retreat</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/twisted_space">Twisted space</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/haste">Haste</Link></Pair>
<Pair plain title="4th"><Link to="/spell/mirror_transport">Mirror transport</Link></Pair>
<Pair plain title="5th"><Link to="/spell/teleport">Teleport</Link></Pair>
<Pair plain title="6th"><Link to="/spell/fluid_form">Fluid form</Link></Pair>
<Pair plain title="7th"><Link to="/spell/walk_through_space">Walk through space</Link></Pair>
<Pair plain title="8th"><Link to="/spell/etherealness">Etherealness</Link></Pair>
<Pair plain title="9th"><Link to="/spell/time_stop">Time stop</Link></Pair>
</Ability>
<Ability id="arc-psychic-esoteric_starseeker-the-pack" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-psychic-esoteric_starseeker-the-pack">The Pack</Pair>
<Pair plain title="1st"><Link to="/spell/calm_animals">Calm animals</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/animal_aspect">Animal aspect</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/rage">Rage</Link></Pair>
<Pair plain title="4th"><Link to="/spell/greater_animal_aspect">Greater animal aspect</Link></Pair>
<Pair plain title="5th"><Link to="/spell/summon_monster_v">Summon monster V</Link></Pair>
<Pair plain title="6th"><Link to="/spell/mass_bears_endurance">Mass bear's endurance</Link></Pair>
<Pair plain title="7th"><Link to="/spell/summon_monster_vii">Summon monster VII</Link></Pair>
<Pair plain title="8th"><Link to="/spell/animal_shapes">Animal shapes</Link></Pair>
<Pair plain title="9th"><Link to="/spell/shapechange">Shapechange</Link></Pair>
</Ability>
<Ability id="arc-psychic-esoteric_starseeker-the-mother" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-psychic-esoteric_starseeker-the-mother">The Mother</Pair>
<Pair plain title="1st"><Link to="/spell/identify">Identify</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/aid">Aid</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/invisibility_purge">Invisibility purge</Link></Pair>
<Pair plain title="4th"><Link to="/spell/stoneskin">Stoneskin</Link></Pair>
<Pair plain title="5th"><Link to="/spell/spell_resistance">Spell resistance</Link></Pair>
<Pair plain title="6th"><Link to="/spell/contingency">Contingency</Link></Pair>
<Pair plain title="7th"><Link to="/spell/mind_blank">Mind blank</Link></Pair>
<Pair plain title="8th"><Link to="/spell/refuge">Refuge</Link></Pair>
<Pair plain title="9th"><Link to="/spell/wall_of_suppression">Wall of suppression</Link></Pair>
</Ability>
<Ability id="arc-psychic-esoteric_starseeker-the-stargazer" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-psychic-esoteric_starseeker-the-stargazer">The Stargazer</Pair>
<Pair plain title="1st"><Link to="/spell/know_the_enemy">Know the enemy</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/augury">Augury</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/arcane_sight">Arcane sight</Link></Pair>
<Pair plain title="4th"><Link to="/spell/locate_creature">Locate creature</Link></Pair>
<Pair plain title="5th"><Link to="/spell/feeblemind">Feeblemind</Link></Pair>
<Pair plain title="6th"><Link to="/spell/geas_quest">Geas/quest</Link></Pair>
<Pair plain title="7th"><Link to="/spell/greater_arcane_sight">Greater arcane sight</Link></Pair>
<Pair plain title="8th"><Link to="/spell/moment_of_prescience">Moment of prescience</Link></Pair>
<Pair plain title="9th"><Link to="/spell/dream_voyage">Dream voyage</Link></Pair>
</Ability>
<Ability id="arc-psychic-esoteric_starseeker-the-stranger" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-psychic-esoteric_starseeker-the-stranger">The Stranger</Pair>
<Pair plain title="1st"><Link to="/spell/disguise_self">Disguise self</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/invisibility">Invisibility</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/displacement">Displacement</Link></Pair>
<Pair plain title="4th"><Link to="/spell/riding_possession">Riding possession</Link></Pair>
<Pair plain title="5th"><Link to="/spell/prying_eyes">Prying eyes</Link></Pair>
<Pair plain title="6th"><Link to="/spell/veil">Veil</Link></Pair>
<Pair plain title="7th"><Link to="/spell/project_image">Project image</Link></Pair>
<Pair plain title="8th"><Link to="/spell/maze">Maze</Link></Pair>
<Pair plain title="9th"><Link to="/spell/divide_mind">Divide mind</Link></Pair>
</Ability>
<Ability id="arc-psychic-esoteric_starseeker-the-follower" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-psychic-esoteric_starseeker-the-follower">The Follower</Pair>
<Pair plain title="1st"><Link to="/spell/forced_quiet">Forced quiet</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/darkness">Darkness</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/vision_of_hell">Vision of hell</Link></Pair>
<Pair plain title="4th"><Link to="/spell/enervation">Enervation</Link></Pair>
<Pair plain title="5th"><Link to="/spell/waves_of_fatigue">Waves of fatigue</Link></Pair>
<Pair plain title="6th"><Link to="/spell/shadow_walk">Shadow walk</Link></Pair>
<Pair plain title="7th"><Link to="/spell/simulacrum">Simulacrum</Link></Pair>
<Pair plain title="8th"><Link to="/spell/destruction">Destruction</Link></Pair>
<Pair plain title="9th"><Link to="/spell/energy_drain">Energy drain</Link></Pair>
</Ability>
<Ability id="arc-psychic-esoteric_starseeker-major-amplifications" icon={["broken-shield"]}>
<Pair single id="arc-psychic-esoteric_starseeker-major-amplifications">Major Amplifications</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">An esoteric starseeker gains this ability at 15th level.</Pair>
</Ability>
</>};
const _formless_adept = {title: "Formless Adept", jsx: <><h2 id="arc-psychic-formless_adept-formless-adept">Formless Adept</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 104</Link><br/>Formless adepts master their psychic powers to unshackle themselves from the confines of the flesh and empower their spellcasting. They learn to assume increasingly insubstantial forms until they become like living ghosts.</p>
<Ability id="arc-psychic-formless_adept-phrenic-charisma" icon={["info"]}>
<Pair single id="arc-psychic-formless_adept-phrenic-charisma">Phrenic Charisma</Pair>
<Pair hl title="Alters">Phrenic pool</Pair>
<Pair title="Info">A formless adept uses his Charisma modifier to determine the number of points in his phrenic pool.</Pair>
</Ability>
<Ability id="arc-psychic-formless_adept-formless-body" extraClasses="hasSubs" icon={["magic-swirl"]}>
<Pair single id="arc-psychic-formless_adept-formless-body" flavor="A formless adept gradually sheds his body, taking on increasingly nebulous forms.">Formless Body</Pair>
<Pair hl title="Replaces">Psychic discipline, discipline powers</Pair>
<Pair title="Usage">3 + Charisma modifier rounds/day; these rounds need not be consecutive, but they must be spent in 1-round increments</Pair>
<Pair title="Standard Action">A formless adept can assume a <em>formless body.</em> Resuming his physical form takes another standard action; otherwise, the formless adept continues spending rounds of <em>formless body</em> until he runs out of them. The formless adept must return to his physical form before assuming a different <em>formless body.</em></Pair>
<Pair title="Special">The types of <em>formless body</em> are listed below.</Pair>
</Ability>
<Ability id="arc-psychic-formless_adept-blurred-body-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-psychic-formless_adept-blurred-body-su">Blurred Body (Su)</Pair>
<Pair title="Prerequisites">1st level psychic</Pair>
<Pair title="Ability">A formless adept can act under the effect of a <Link to="/spell/blur">blur</Link> spell.</Pair>
<Pair title="At 5th Level">The formless adept can use this ability for a number of minutes per day instead of rounds per day. These minutes don't have to be used consecutively, but must be used in 1-minute increments.</Pair>
</Ability>
<Ability id="arc-psychic-formless_adept-gaseous-body-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-psychic-formless_adept-gaseous-body-su">Gaseous Body (Su)</Pair>
<Pair title="Prerequisites">5th level psychic</Pair>
<Pair title="Ability">A formless adept can become gaseous as <Link to="/spell/gaseous_form">gaseous form</Link>.</Pair>
<Pair title="At 13th Level">The formless adept can use this ability for a number of minutes per day instead of rounds per day. These minutes don't have to be used consecutively, but must be used in 1-minute increments.</Pair>
</Ability>
<Ability id="arc-psychic-formless_adept-incorporeal-body-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-psychic-formless_adept-incorporeal-body-su">Incorporeal Body (Su)</Pair>
<Pair title="Prerequisites">13th level psychic</Pair>
<Pair title="Ability">A formless adept can become <Link to="/umr/incorporeal">incorporeal</Link>.</Pair>
</Ability>
<Ability id="arc-psychic-formless_adept-formless-spell" icon={["magic-swirl"]}>
<Pair single id="arc-psychic-formless_adept-formless-spell">Formless Spell</Pair>
<Pair hl title="Replaces">1st-level phrenic amplification</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">This is a phrenic amplification. The formless adept can spend 1 point from his phrenic pool to cast a spell with a standard-action casting time as part of the action he uses to assume his <em>formless body,</em> expending the spell slot as normal.</Pair>
</Ability>
<Ability id="arc-psychic-formless_adept-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-psychic-formless_adept-bonus-spells">Bonus Spells</Pair>
<Pair hl title="Replaces">Discipline spells</Pair>
<Pair title="Ability">The formless adept adds extra spells to his list of spells known while he's in a <em>formless body</em> (including when he uses the <em>formless spell</em> phrenic amplification). Spells with a duration last for their full duration, even if the psychic reverts to his physical form. The formless adept gains the following spells below at the given psychic level.</Pair>
<Pair plain title="1st"><Link to="/spell/chill_touch">Chill touch</Link>, <Link to="/spell/expeditious_retreat">expeditious retreat</Link></Pair>
<Pair plain title="4th"><Link to="/spell/levitate">Levitate</Link>, <Link to="/spell/stricken_heart">stricken heart</Link></Pair>
<Pair plain title="6th"><Link to="/spell/gaseous_form">Gaseous form</Link>, <Link to="/spell/vampiric_touch">vampiric touch</Link></Pair>
<Pair plain title="8th"><Link to="/spell/shadow_step">Shadow step</Link>, <Link to="/spell/telekinesis">telekinesis</Link></Pair>
<Pair plain title="10th"><Link to="/spell/dominate_person">Dominate person</Link>, <Link to="/spell/synapse_overload">synapse overload</Link></Pair>
<Pair plain title="12th"><Link to="/spell/disintegrate">Disintegrate</Link>, <Link to="/spell/enemy_hammer">enemy hammer</Link></Pair>
<Pair plain title="14th"><Link to="/spell/finger_of_death">Finger of death</Link>, <Link to="/spell/telekinetic_sphere">telekinetic sphere</Link></Pair>
<Pair plain title="16th"><Link to="/spell/etherealness">Etherealness</Link>, <Link to="/spell/power_word_stun">power word stun</Link></Pair>
<Pair plain title="18th"><Link to="/spell/dominate_monster">Dominate monster</Link>, <Link to="/spell/telekinetic_storm">telekinetic storm</Link></Pair>
<Pair title="Special">For feats and other abilities that require these spells as prerequisites, the psychic counts as knowing the spells but can benefit from the feats and abilities only while in a <em>formless body.</em></Pair>
</Ability>
<Ability id="arc-psychic-formless_adept-psychic-possession-su" icon={["magic-swirl"]}>
<Pair single id="arc-psychic-formless_adept-psychic-possession-su">Psychic Possession (Su)</Pair>
<Pair hl title="Replaces">15th-level phrenic amplification</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">While using his <em>incorporeal body</em> ability, a formless adept can attempt to psychically possess another living creature. To use this ability, the formless adept must be adjacent to the target. This effect works as the <Link to="/spell/greater_possession">greater possession</Link> spell and can be maintained only as long as the formless adept maintains his <em>incorporeal body</em> form.</Pair>
<Pair title="Special">The target can attempt a Will save with a DC equal to 10 + 1/2 the formless adept's class level + the formless adept's Intelligence modifier to resist the effect. A creature that successfully saves is immune to the formless adept's psychic possession for 24 hours.</Pair>
</Ability>
<Ability id="arc-psychic-formless_adept-formless-master-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-psychic-formless_adept-formless-master-su">Formless Master (Su)</Pair>
<Pair hl title="Replaces">Remade self</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A formless adept can assume any <em>formless body</em> as a <strong className="hl">swift action</strong> and change between <em>formless body</em> types as a <strong className="hl">standard action</strong> (without returning to his physical form first). He can use the <em>formless spell</em> phrenic amplification to cast any spell with a swift-action casting time when assuming a <em>formless body</em> or any spell with a standard-action casting time while switching between formless bodies.</Pair>
<Pair title="Passive Ability">The formless adept also adds his Charisma bonus as a deflection bonus to his AC while in a <em>formless body.</em> A formless adept can attempt a saving throw to bypass any spells that prevent entry of incorporeal creatures (such as <Link to="/spell/anti_incorporeal_shell">anti-incorporeal shell</Link>), even if the spells don't normally allow one.</Pair>
</Ability>
</>};
const _magaambyan_telepath = {title: "Magaambyan Telepath", jsx: <><h2 id="arc-psychic-magaambyan_telepath-magaambyan-telepath">Magaambyan Telepath</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 27</Link><br/>While most students of the <Link to="/rule/magaambya">Magaambya</Link> in the Mwangi Expanse focus on the blending of arcane and divine magic, followers of Old-Mage Jatembe's more esoteric wisdom instead focus on the occult connection between all living creatures and the resonance between the natural and supernatural world. These Magaambyan telepaths hone their mental abilities to detect such spiritual and eldritch bonds, and attempt to commune with the mind of the jungle or the hearts of its wild inhabitants. Whether seeking information that only nature knows or attempting to impose their will upon the natural world, these psychics employ techniques that few outside of the Magaambya understand.</p>
<Ability id="arc-psychic-magaambyan_telepath-primal-spells" icon={["spell-book"]}>
<Pair single id="arc-psychic-magaambyan_telepath-primal-spells">Primal Spells</Pair>
<Pair hl title="Replaces">Discipline spells</Pair>
<Pair title="Ability">A Magaambyan telepath adds one 1st-level spell from the <Link to="/main/druid_spell">druid spell list</Link> to the psychic spell list and her spells known. Each time a Magaambyan telepath gains the ability to cast a new level of spell, she can add one spell of that level from the druid spell list to both the psychic spell list and her spells known. She casts these spells as psychic spells, and once the spells are selected these choices cannot be changed.</Pair>
</Ability>
<Ability id="arc-psychic-magaambyan_telepath-natures-command-ex" icon={["upgrade"]}>
<Pair single id="arc-psychic-magaambyan_telepath-natures-command-ex" flavor="The Magaambyan telepath's mind-affecting spells can affect even plant creatures.">Nature's Command (Ex)</Pair>
<Pair hl title="Replaces">1st- and 11th-level phrenic amplifications</Pair>
<Pair title="Ability">When she casts a mind-affecting spell, the Magaambyan telepath can spend 2 points from her phrenic pool to overcome a plant creature's immunity to mind-affecting effects for the purposes of that spell. This ability functions even on mindless plant creatures, but it has no effect on creatures that aren't plants.</Pair>
<Pair title="At 11th Level">When the Magaambyan telepath casts a mind-affecting or language-dependent spell, the psychic can spend 2 points from her phrenic pool to cause the spell to affect creatures of the plant and animal types as if they were humanoids that understood her language.</Pair>
</Ability>
<Ability id="arc-psychic-magaambyan_telepath-know-the-land-sp" icon={["magic-swirl"]}>
<Pair single id="arc-psychic-magaambyan_telepath-know-the-land-sp">Know the Land (Sp)</Pair>
<Pair hl title="Replaces">Telepathic bond</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">The Magaambyan telepath can cast <Link to="/spell/commune_with_nature">commune with nature</Link> as a spell-like ability once per day, using her psychic level as her caster level. She can also expend any unused spell slot of 5th level or higher to cast <em>commune with nature.</em></Pair>
</Ability>
<Ability id="arc-psychic-magaambyan_telepath-wild-mind-su" icon={["upgrade"]}>
<Pair single id="arc-psychic-magaambyan_telepath-wild-mind-su">Wild Mind (Su)</Pair>
<Pair hl title="Alters">Telepathy</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">When the Magaambyan telepath gains the <em>telepathy</em> ability, she can also mentally communicate with any animal or plant creature as if it had a language.</Pair>
</Ability>
</>};
const _mutation_mind = {title: "Mutation Mind", jsx: <><h2 id="arc-psychic-mutation_mind-mutation-mind">Mutation Mind</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 105</Link><br/>Exposure to unintended spell effects, curses, or sources of radiation cause some to manifest psychic powers. When a mutation mind uses her psychic abilities, her physical body changes under the stress, and she risks losing control if she pushes too far.</p>
<Ability id="arc-psychic-mutation_mind-physical-mutation-su" icon={["upgrade"]}>
<Pair single id="arc-psychic-mutation_mind-physical-mutation-su">Physical Mutation (Su)</Pair>
<Pair hl title="Replaces">1st-level phrenic amplification</Pair>
<Pair title="Swift Action">A mutation mind's psychic powers warp her body, allowing her to physically mutate herself, which grants her a +4 enhancement bonus to Strength and a -2 penalty to Intelligence.</Pair>
<Pair title="Usage">1 minute/day per psychic level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability">When the duration runs out, the mutation mind can spend 1 point from her phrenic pool to extend the duration by 1 round. She can continue extending it in this way until she runs out of points.</Pair>
<Pair title="At 12th Level">The bonus to Strength increases to +6.</Pair>
<Pair title="Special">After the mutation ends, the mutation mind is fatigued and can't activate a <em>physical mutation</em> again for 1 round. Turning back to normal before the end of a 1-minute increment takes a <strong className="hl">standard action</strong>.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-bodily-mutations" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-psychic-mutation_mind-bodily-mutations">Bodily Mutations</Pair>
<Pair hl title="Alters">Phrenic amplifications</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">Whenever a mutation mind gains a phrenic amplification, she can select either a phrenic amplification or a <em>bodily mutation.</em> A <em>bodily mutation</em> grants its benefit only when the mutation mind is affected by her <em>physical mutation.</em> Each time she activates her <em>physical mutation,</em> she can activate any number of <em>bodily mutations</em> she possesses.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-adhesive-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-psychic-mutation_mind-adhesive-ex">Adhesive (Ex)</Pair>
<Pair title="Passive Ability">The mutation mind's skin becomes sticky, granting her a +4 bonus on <Link to="/rule/disarm">disarm</Link> and <Link to="/rule/grapple">grapple</Link> combat maneuver checks.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-bite-attack-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-psychic-mutation_mind-bite-attack-ex">Bite Attack (Ex)</Pair>
<Pair title="Ability">The mutation mind's mouth fills with sharp teeth, allowing her to make a <Link to="/umr/bite_attack">bite attack</Link> as part of a full-attack action at her highest base attack bonus. This attack deals 1d4 points of damage (1d3 if Small) and counts as a primary attack unless combined with manufactured weapon attacks, as normal.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-bulging-eyes-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-psychic-mutation_mind-bulging-eyes-ex">Bulging Eyes (Ex)</Pair>
<Pair title="Ability">The mutation mind's eyes grow large and round, granting her darkvision with a range of 60 feet.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-claws-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-psychic-mutation_mind-claws-ex">Claws (Ex)</Pair>
<Pair title="Ability">The mutation mind's hands turn into claws, allowing her to make two claw attacks as a full-attack action at her highest base attack bonus. Each of these attacks deals 1d4 points of damage (1d3 if Small) and counts as a primary attack unless combined with manufactured weapon attacks, as normal.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-elongated-fingers-ex" extraClasses="subAbility" icon={["upgrade","magic-palm"]}>
<Pair single id="arc-psychic-mutation_mind-elongated-fingers-ex">Elongated Fingers (Ex)</Pair>
<Pair title="Ability">The mutation mind's fingers grow long and supple, increasing her reach by 5 feet when she's making melee touch attacks.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-elongated-legs-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-psychic-mutation_mind-elongated-legs-ex">Elongated Legs (Ex)</Pair>
<Pair title="Ability">The mutation mind's legs become long and spindly, increasing her base movement by 10 feet.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-energy-resistance-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-psychic-mutation_mind-energy-resistance-ex">Energy Resistance (Ex)</Pair>
<Pair title="Passive Ability">The mutation mind's body changes in color and texture, and gains energy resistance 5 to one energy type (acid, cold, electricity, fire, or sonic), chosen when this mutation is selected.</Pair>
<Pair title="Special">This mutation can be selected multiple times. Each time it is selected, the mutation mind either chooses an additional energy type to gain energy resistance 5 against or increases the resistance granted to one existing type by 5.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-enlarged-torso-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-psychic-mutation_mind-enlarged-torso-ex">Enlarged Torso (Ex)</Pair>
<Pair title="Passive Ability">The mutation mind's torso enlarges disproportionately with the rest of her body, granting her a +2 natural armor bonus to AC.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-rubbery-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-psychic-mutation_mind-rubbery-ex">Rubbery (Ex)</Pair>
<Pair title="Passive Ability">The mutation mind's body becomes soft and rubbery, granting her DR 2/-.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-slimy-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-psychic-mutation_mind-slimy-ex">Slimy (Ex)</Pair>
<Pair title="Passive Ability">The mutation mind exudes a thin layer of oily slime over her body, granting her a +4 bonus to CMD.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-phrenic-empowerment-su" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-psychic-mutation_mind-phrenic-empowerment-su" flavor={["A mutation mind's phrenic amplifications empower her ",{"tag":"em","content":"physical mutation.","props":{}}]}>Phrenic Empowerment (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">Whenever a mutation mind modifies a spell with a phrenic amplification while affected by her <em>physical mutation,</em> she can increase the bonus to her Strength score from her <em>physical mutation</em> by 2 for a number of rounds equal to the level of the spell she cast. This bonus doesn't stack; if the mutation mind activates it again, she uses the longer duration but doesn't increase the bonus.</Pair>
<Pair title="Special">While under the effect of phrenic empowerment, whenever the mutation mind takes damage, she risks losing control of her powers. At the end of each turn that she takes hit point damage, the mutation mind must succeed at a Will save (DC = 15 + 1/2 her character level) or take a -2 penalty on Will saving throws and to Intelligence. These penalties last for 1 hour after the <em>physical mutation</em> ends and stack with themselves. If the penalty lowers her Intelligence score to 0, the mutation mind is comatose until 1 hour after <em>physical mutation</em> ends.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-improved-bodily-mutations" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-psychic-mutation_mind-improved-bodily-mutations">Improved Bodily Mutations</Pair>
<Pair hl title="Alters">Major amplifications</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A mutation mind can select one of the following <em>improved bodily mutations</em> instead of a phrenic amplification.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-aquatic-form-ex" extraClasses="subAbility" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-psychic-mutation_mind-aquatic-form-ex">Aquatic Form (Ex)</Pair>
<Pair title="Ability">The mutation mind's legs fuse into a tail and fins to sprout from her back and side, granting her a swim speed of 30 feet, <Link to="/umr/tremorsense">tremorsense</Link> with a range of 30 feet (affecting other creatures in contact with the same body of water), and the <Link to="/subtype/aquatic">aquatic</Link> subtype. Her base land speed is reduced to 10 feet.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-enlarged-body-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-psychic-mutation_mind-enlarged-body-ex">Enlarged Body (Ex)</Pair>
<Pair title="Passive Ability">The mutation mind's body swells and stretches, enlarging her as the <Link to="/spell/enlarge_person">enlarge person</Link> spell but up to two size categories larger (maximum Huge).</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-multiple-eyes-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-psychic-mutation_mind-multiple-eyes-ex">Multiple Eyes (Ex)</Pair>
<Pair title="Passive Ability">Multiple eyes erupt all over the mutation mind's body. She can't be <Link to="/rule/flanked">flanked</Link> and gains a +4 bonus on Perception checks.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-recuperation-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-psychic-mutation_mind-recuperation-ex">Recuperation (Ex)</Pair>
<Pair title="Passive Ability">The mutation mind heals quickly from physical wounds, gaining <Link to="/umr/fast_healing">fast healing</Link> 5.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-toppling-fists-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-psychic-mutation_mind-toppling-fists-ex">Toppling Fists (Ex)</Pair>
<Pair title="Ability">The mutation mind's fists become large masses of flesh, allowing her to attempt a <Link to="/rule/bull_rush">bull rush</Link> combat maneuver check against one creature within 10 feet of her as a <strong className="hl">standard action</strong>.</Pair>
</Ability>
<Ability id="arc-psychic-mutation_mind-wings-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-psychic-mutation_mind-wings-ex">Wings (Ex)</Pair>
<Pair title="Ability">The mutation mind sprouts a pair of fleshy, bat-like wings, giving her a fly speed of 60 feet with average maneuverability.</Pair>
</Ability>
</>};
const _psychic_duelist = {title: "Psychic Duelist", jsx: <><h2 id="arc-psychic-psychic_duelist-psychic-duelist">Psychic Duelist</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 107</Link><br/>Psychic duelists hone their mental powers for combat, much as warriors do with their blades. They specialize in <Link to="/rule/psychic_duels">psychic duels</Link>, perfecting their thought-form creatures into mighty weapons.</p>
<Ability id="arc-psychic-psychic_duelist-psychic-duel-acumen-ex" icon={["spell-book","magic-swirl","upgrade"]}>
<Pair single id="arc-psychic-psychic_duelist-psychic-duel-acumen-ex">Psychic Duel Acumen (Ex)</Pair>
<Pair hl title="Replaces">4th-level discipline spell</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A psychic duelist adds <Link to="/spell/instigate_psychic_duel">instigate psychic duel</Link> to her list of spells known, and the save DC of any <em>instigate psychic duel</em> spell she casts increases by 1.</Pair>
<Pair title="At 6th Level">She can also expend any unused psychic spell slot of 3rd level or higher to cast <em>instigate psychic duel.</em> If she does so, she uses the level of the spell slot expended to determine the Will save DC.</Pair>
<Pair title="At 7th Level">When the psychic duelist sacrifices points from her phrenic pool to generate <em>manifestation points</em> (see below) for an offensive manifestation, she uses d8s for damage dice instead of d4s.</Pair>
</Ability>
<Ability id="arc-psychic-psychic_duelist-manifestation-amplifications" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-psychic-psychic_duelist-manifestation-amplifications">Manifestation Amplifications</Pair>
<Pair hl title="Replaces">7th-level phrenic amplification</Pair>
<Pair hl title="Alters">Phrenic amplifications</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A psychic duelist gains a <em>manifestation amplification</em> instead of a phrenic amplification; thereafter, whenever the psychic duelist gains a phrenic amplification, she can select either a phrenic amplification or a <em>manifestation amplification.</em></Pair>
<Pair title="Info">A <em>manifestation amplification</em> functions for a manifestation as a phrenic amplification does for a spell, with the same restrictions. The manifestation being amplified is called the linked manifestation. Phrenic pool points spent toward <em>manifestation amplifications</em> are separate from points sacrificed to generate <em>manifestation points.</em> For example, a psychic duelist capable of casting 4th-level spells (with a maximum of 4 <em>MP</em> per manifestation) could turn 4 points from her phrenic pool into <em>MP</em> and spend 2 points on a <em>manifestation amplification,</em> expending a total of 6 points from her phrenic pool.</Pair>
</Ability>
<Ability id="arc-psychic-psychic_duelist-extended-effect-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-psychic-psychic_duelist-extended-effect-ex">Extended Effect (Ex)</Pair>
<Pair title="Ability">The psychic duelist can spend points from her phrenic pool to increase the duration of a condition by 1 round per point spent. She can spend a maximum of 1 phrenic pool point in this way.</Pair>
<Pair title="At 11th Level">This maximum becomes 2.</Pair>
<Pair title="At 15th Level">This maximum increases to 3.</Pair>
<Pair title="At 19th Level">This maximum becomes 4.</Pair>
<Pair title="Special">If the target succeeds at its saving throw, this amplification has no effect (though the points are still lost). This amplification can be linked only to offensive manifestations that impose conditions.</Pair>
</Ability>
<Ability id="arc-psychic-psychic_duelist-faithful-creature-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-psychic-psychic_duelist-faithful-creature-ex">Faithful Creature (Ex)</Pair>
<Pair title="Ability">When she manifests a thought-form creature, the psychic duelist can spend 1 point from her phrenic pool to give that creature the ability to persist even if it doesn't attack. She can concentrate to maintain the creature as a <strong className="hl">swift action</strong> instead of as a full-round action, but the creature can attack only if the psychic duelist concentrates as a <strong className="hl">full-round action</strong>. In addition, the psychic backlash damage from that thought-form creature is halved.</Pair>
<Pair title="Special">This amplification can be linked only to thought-form creature manifestations.</Pair>
</Ability>
<Ability id="arc-psychic-psychic_duelist-punishing-thought-form-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-psychic-psychic_duelist-punishing-thought-form-ex">Punishing Thought-form (Ex)</Pair>
<Pair title="Ability">The psychic duelist can spend 1 point from her phrenic pool to increase the damage die size of an offensive manifestation by one step (d4 to d6, d6 to d8, or d8 to d10).</Pair>
<Pair title="Special">This amplification can be linked only to offensive manifestations.</Pair>
</Ability>
<Ability id="arc-psychic-psychic_duelist-reciprocal-defense-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-psychic-psychic_duelist-reciprocal-defense-su">Reciprocal Defense (Su)</Pair>
<Pair title="Ability">The psychic duelist can spend 1 point from her phrenic pool when using a defensive manifestation to improve her defenses in the real world as well. Her physical body gains a +2 insight bonus to AC for the number of rounds the defensive manifestation lasts, or for 1 round if the manifestation doesn't have a duration.</Pair>
<Pair title="At 11th Level">This bonus becomes +3.</Pair>
<Pair title="At 15th Level">This bonus increases to +4.</Pair>
<Pair title="Special">This amplification can be linked only to defensive manifestations.</Pair>
</Ability>
<Ability id="arc-psychic-psychic_duelist-thought-made-real-su" icon={["stairs-goal"]}>
<Pair single id="arc-psychic-psychic_duelist-thought-made-real-su">Thought Made Real (Su)</Pair>
<Pair hl title="Replaces">Telepathic bond</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A psychic duelist can bring offensive manifestations directly into her foes' minds, attacking with them without entering a psychic duel. When doing so, she can generate <em>manifestation points</em> only by sacrificing a spell, not through any other methods. Using an offensive manifestation in this way functions as casting a spell with a <strong className="hl">full-round action</strong> casting time. Conditions imposed by these offensive manifestations last for their full duration, even though the target isn't in a psychic duel. The psychic duelist can use <em>manifestation amplifications</em> on offensive manifestations created this way. Such offensive manifestations can't affect thought-form creatures.</Pair>
<Pair title="Special">This is a mind-affecting illusion (phantasm) effect. A thought-form creature manifested in this way is visible only to its target.</Pair>
</Ability>
<Ability id="arc-psychic-psychic_duelist-expert-manifester-ex" icon={["upgrade"]}>
<Pair single id="arc-psychic-psychic_duelist-expert-manifester-ex">Expert Manifester (Ex)</Pair>
<Pair hl title="Replaces">Telepathy</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">A psychic duelist doesn't have to expend as many resources to create manifestations. She gains 1 additional <em>MP</em> each time she creates a psychic manifestation, in addition to the <em>MP</em> she gains by sacrificing resources. This doesn't increase the maximum number of points she can spend per manifestation, but does allow her to create a manifestation costing 1 <em>MP</em> without sacrificing any resources.</Pair>
</Ability>
</>};
const _psychic_marauder = {title: "Psychic Marauder", jsx: <><h2 id="arc-psychic-psychic_marauder-psychic-marauder">Psychic Marauder</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands pg. 22</Link><br/>When one encounters aberrant creatures, it can unlock psychic potential within a person, though this experience is traumatic for those who endure it. The psychic marauder's powers come hand in hand with madness, either from exposure to alien psyches or from terrifying glimpses into the cosmos that the psychic can't suppress. But she does not crumble under the strain of this insanity; instead, she cordons it off to use as a shield against other psychic intrusions and harnesses it to unleash it upon the world around her.</p>
<p>Psychic marauders in Orv have often been corrupted by the influence of <Link to="/monster/aboleth">aboleths</Link> or <Link to="/monster/neothelid">neothelids</Link>.</p>
<Ability id="arc-psychic-psychic_marauder-alignment" icon={["hazard-sign"]}>
<Pair single id="arc-psychic-psychic_marauder-alignment">Alignment</Pair>
<Pair title="Info">A psychic marauder must be of nonlawful alignment. A psychic marauder that becomes lawful loses her <em>aura of insanity.</em> However, she retains all other benefits of this archetype.</Pair>
</Ability>
<Ability id="arc-psychic-psychic_marauder-skewed-mentality-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-psychic-psychic_marauder-skewed-mentality-ex">Skewed Mentality (Ex)</Pair>
<Pair hl title="Replaces">Detect thoughts</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A psychic marauder becomes alienated from reality as others perceive it. The psychic marauder uses her Charisma modifier on Will saves instead of her Wisdom modifier.</Pair>
</Ability>
<Ability id="arc-psychic-psychic_marauder-aura-of-insanity-su" icon={["abstract-091","armor-downgrade","rolling-dices"]}>
<Pair single id="arc-psychic-psychic_marauder-aura-of-insanity-su" flavor="A psychic marauder's madness begins to leak out.">Aura of Insanity (Su)</Pair>
<Pair hl title="Replaces">3rd-, 11th-, and 19th-level phrenic amplifications</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Standard Action">The psychic marauder can spend 1 point from her phrenic pool to manifest an <em>aura of insanity,</em> letting bits of her psyche penetrate the minds of those around her. The <em>aura</em> is centered on the psychic marauder and has a radius of 10 feet. Any creature starting its turn within the <em>aura</em> must succeed at a Will save (DC = 10 + half the psychic marauder's level + the psychic marauder's Charisma modifier) or be <Link to="/misc/confused">confused</Link> for 1 round. The psychic marauder can exclude one target inside the radius, shielding them from her madness.</Pair>
<Pair title="At 6th Level">The <em>aura's</em> radius increases to 15 feet, and the psychic marauder can now exclude 2 targets from it.</Pair>
<Pair title="At 9th Level">The <em>aura's</em> radius increases to 20 feet, and the psychic marauder can now exclude 3 targets from it.</Pair>
<Pair title="At 11th Level">When a creature rolls to determine the effects of a confusion effect while within the <em>aura of insanity,</em> the psychic marauder can spend 1 point from her phrenic pool to force the affected creature to roll twice. The psychic marauder selects which result is used.</Pair>
<Pair title="At 12th Level">The <em>aura's</em> radius increases to 25 feet, and the psychic marauder can now exclude 4 targets from it.</Pair>
<Pair title="At 15th Level">The <em>aura's</em> radius increases to 30 feet, and the psychic marauder can now exclude 5 targets from it.</Pair>
<Pair title="At 18th Level">The <em>aura's</em> radius increases to 35 feet, and the psychic marauder can now exclude 6 targets from it.</Pair>
<Pair title="At 19th Level">When a creature would roll to determine the effects of a confusion effect while within the <em>aura of insanity,</em> the psychic marauder can spend 2 points from her phrenic pool to select the result of the affected creature's confused condition without rolling. This does not allow the psychic marauder to control how that result is applied.</Pair>
<Pair title="Special">The <em>aura of insanity</em> lasts for a number of rounds equal to the psychic marauder's Charisma modifier. This is a mind-affecting effect.</Pair>
</Ability>
<Ability id="arc-psychic-psychic_marauder-cracked-perspectives-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-psychic-psychic_marauder-cracked-perspectives-ex">Cracked Perspectives (Ex)</Pair>
<Pair hl title="Replaces">Telepathic bond</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A psychic marauder's growing madness renders her immune to confusion and insanity effects.</Pair>
</Ability>
<Ability id="arc-psychic-psychic_marauder-unreal-understanding-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-psychic-psychic_marauder-unreal-understanding-ex">Unreal Understanding (Ex)</Pair>
<Pair hl title="Replaces">Remade self</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">A psychic marauder's mindset becomes completely aberrant, to the point that no outside force can penetrate her psyche. Because of this, the psychic marauder becomes immune to all mind-affecting effects.</Pair>
</Ability>
</>};
const _terror_weaver = {title: "Terror Weaver", jsx: <><h2 id="arc-psychic-terror_weaver-terror-weaver">Terror Weaver</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 26</Link><br/>A number of exceptional Darklands half-orcs have developed potent psychic abilities, unlocked by generations of exposure to a specific combination of mind-altering fungi and radiation. Powerful half-orc manipulators often rule smaller Darklands tribes from the shadows, but with few orcs able to match their mental acuity, their only limit is their own ambition.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-psychic-terror_weaver--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/half_orc">Half-orc (Gloomkin)</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-psychic-terror_weaver-manipulation-sp" icon={["magic-swirl","spell-book"]}>
<Pair single id="arc-psychic-terror_weaver-manipulation-sp">Manipulation (Sp)</Pair>
<Pair hl title="Replaces">Detect thoughts</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A terror weaver can cast <Link to="/spell/charm_person">charm person</Link> once per day as a spell-like ability. He can also expend any unused spell slot of 1st level or higher to cast <em>charm person.</em> If he does so, he uses the level of the spell slot expended to determine the save DC.</Pair>
<Pair title="Special">When a terror weaver gains this ability, if he already knows <em>charm person,</em> he can learn a different 1st-level spell in place of <em>charm person,</em> losing the old spell in exchange for the new one.</Pair>
</Ability>
<Ability id="arc-psychic-terror_weaver-aura-of-intimidation-sp" icon={["magic-swirl"]}>
<Pair single id="arc-psychic-terror_weaver-aura-of-intimidation-sp" flavor="Because he lacks the physical prowess of most orcs, a terror weaver seeks to end fights before they start.">Aura of Intimidation (Sp)</Pair>
<Pair hl title="Replaces">Telepathic bond, 11th- and 19th-level phrenic amplifications</Pair>
<Pair title="At 9th Level">He can cast <Link to="/spell/aura_of_doom">aura of doom</Link> as a spell-like ability once per day. He can also expend any unused spell slot of 4th level or higher to cast <em>aura of doom.</em> Casting the spell using a higher-level spell slot gives no benefit on its own, but the terror weaver can apply metamagic feats that would increase the spell level to the appropriate level.</Pair>
<Pair title="At 11th Level">A terror weaver's <em>aura of doom</em> causes enemies to become <Link to="/misc/frightened">frightened</Link> instead of <Link to="/misc/shaken">shaken</Link>.</Pair>
<Pair title="At 19th Level">It causes enemies to become <Link to="/misc/panicked">panicked</Link>.</Pair>
</Ability>
<Ability id="arc-psychic-terror_weaver-persistent-nightmare-sp" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="arc-psychic-terror_weaver-persistent-nightmare-sp" flavor="Gloomkin often suffer from lifetimes of cruelty and abuse, and a terror weaver repays that suffering back onto his tormentors.">Persistent Nightmare (Sp)</Pair>
<Pair hl title="Replaces">15th-level phrenic amplification</Pair>
<Pair title="At 15th Level">When he successfully casts a mind-affecting spell on a target, he can spend 2 points from his phrenic pool to afflict the target with a <Link to="/spell/nightmare">nightmare</Link> spell the next time it goes to sleep. The day after <em>nightmare</em> has taken effect, regardless of the victim's saving throw, the target takes a -2 penalty on Will saves against the terror weaver's mind-affecting spells and abilities for 24 hours.</Pair>
</Ability>
</>};
export default {amnesiac:_amnesiac,esoteric_starseeker:_esoteric_starseeker,formless_adept:_formless_adept,magaambyan_telepath:_magaambyan_telepath,mutation_mind:_mutation_mind,psychic_duelist:_psychic_duelist,psychic_marauder:_psychic_marauder,terror_weaver:_terror_weaver}