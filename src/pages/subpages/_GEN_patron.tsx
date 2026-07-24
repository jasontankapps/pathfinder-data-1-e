import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested unchained eidolon subtype.</p>
</>};
const _agility = {title: "Agility", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 70</Link></p>
<Ability id="agility" icon={["spell-book"]}>
<Pair single id="agility">Agility</Pair>
<Pair title="Info">The Agility patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/jump">Jump</Link></Pair>
<Pair plain title="4th"><Link to="/spell/cats_grace">Cat's grace</Link></Pair>
<Pair plain title="6th"><Link to="/spell/haste">Haste</Link></Pair>
<Pair plain title="8th"><Link to="/spell/freedom_of_movement">Freedom of movement</Link></Pair>
<Pair plain title="10th"><Link to="/spell/polymorph">Polymorph</Link></Pair>
<Pair plain title="12th"><Link to="/spell/mass_cats_grace">Mass cat's grace</Link></Pair>
<Pair plain title="14th"><Link to="/spell/ethereal_jaunt">Ethereal jaunt</Link></Pair>
<Pair plain title="16th"><Link to="/spell/animal_shapes">Animal shapes</Link></Pair>
<Pair plain title="18th"><Link to="/spell/shapechange">Shapechange</Link></Pair>
</Ability>
</>};
const _ancestors = {title: "Ancestors", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 83</Link></p>
<Ability id="ancestors" icon={["spell-book"]}>
<Pair single id="ancestors">Ancestors</Pair>
<Pair title="Info">The Ancestors patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/bless">Bless</Link></Pair>
<Pair plain title="4th"><Link to="/spell/aid">Aid</Link></Pair>
<Pair plain title="6th"><Link to="/spell/prayer">Prayer</Link></Pair>
<Pair plain title="8th"><Link to="/spell/blessing_of_fervor">Blessing of fervor</Link></Pair>
<Pair plain title="10th"><Link to="/spell/commune">Commune</Link></Pair>
<Pair plain title="12th"><Link to="/spell/greater_heroism">Greater heroism</Link></Pair>
<Pair plain title="14th"><Link to="/spell/refuge">Refuge</Link></Pair>
<Pair plain title="16th"><Link to="/spell/euphoric_tranquility">Euphoric tranquility</Link></Pair>
<Pair plain title="18th"><Link to="/spell/weird">Weird</Link></Pair>
</Ability>
</>};
const _animals = {title: "Animals", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 70</Link></p>
<Ability id="animals" icon={["spell-book"]}>
<Pair single id="animals">Animals</Pair>
<Pair title="Info">The Animals patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/charm_animal">Charm animal</Link></Pair>
<Pair plain title="4th"><Link to="/spell/speak_with_animals">Speak with animals</Link></Pair>
<Pair plain title="6th"><Link to="/spell/dominate_animal">Dominate animal</Link></Pair>
<Pair plain title="8th"><Link to="/spell/summon_natures_ally_iv">Summon nature's ally IV</Link></Pair>
<Pair plain title="10th"><Link to="/spell/animal_growth">Animal growth</Link></Pair>
<Pair plain title="12th"><Link to="/spell/antilife_shell">Antilife shell</Link></Pair>
<Pair plain title="14th"><Link to="/spell/beast_shape_iv">Beast shape IV</Link></Pair>
<Pair plain title="16th"><Link to="/spell/animal_shapes">Animal shapes</Link></Pair>
<Pair plain title="18th"><Link to="/spell/summon_natures_ally_ix">Summon nature's ally IX</Link></Pair>
</Ability>
</>};
const _aurora = {title: "Aurora", jsx: <><p><strong>Sources</strong> <Link to="/source/paths_of_the_righteous">Paths of the Righteous pg. 31</Link></p>
<Ability id="aurora" icon={["spell-book"]}>
<Pair single id="aurora">Aurora</Pair>
<Pair title="Info">The Aurora patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/color_spray">Color spray</Link></Pair>
<Pair plain title="4th"><Link to="/spell/hypnotic_pattern">Hypnotic pattern</Link></Pair>
<Pair plain title="6th"><Link to="/spell/wall_of_nausea">Wall of nausea</Link></Pair>
<Pair plain title="8th"><Link to="/spell/rainbow_pattern">Rainbow pattern</Link></Pair>
<Pair plain title="10th"><Link to="/spell/blazing_rainbow">Blazing rainbow</Link></Pair>
<Pair plain title="12th"><Link to="/spell/programmed_image">Programmed image</Link></Pair>
<Pair plain title="14th"><Link to="/spell/prismatic_spray">Prismatic spray</Link></Pair>
<Pair plain title="16th"><Link to="/spell/prismatic_wall">Prismatic wall</Link></Pair>
<Pair plain title="18th"><Link to="/spell/polar_midnight">Polar midnight</Link></Pair>
</Ability>
</>};
const _autumn = {title: "Autumn", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 88</Link></p>
<Ability id="autumn" icon={["spell-book"]}>
<Pair single id="autumn">Autumn</Pair>
<Pair title="Info">The Autumn patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/ray_of_enfeeblement">Ray of enfeeblement</Link></Pair>
<Pair plain title="4th"><Link to="/spell/create_pit">Create pit</Link></Pair>
<Pair plain title="6th"><Link to="/spell/gentle_repose">Gentle repose</Link></Pair>
<Pair plain title="8th"><Link to="/spell/vitriolic_mist">Vitriolic mist</Link></Pair>
<Pair plain title="10th"><Link to="/spell/major_creation">Major creation</Link></Pair>
<Pair plain title="12th"><Link to="/spell/acid_fog">Acid fog</Link></Pair>
<Pair plain title="14th"><Link to="/spell/caustic_eruption">Caustic eruption</Link></Pair>
<Pair plain title="16th"><Link to="/spell/horrid_wilting">Horrid wilting</Link></Pair>
<Pair plain title="18th"><Link to="/spell/wail_of_the_banshee">Wail of the banshee</Link></Pair>
</Ability>
</>};
const _boundaries = {title: "Boundaries", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 27</Link></p>
<Ability id="boundaries" icon={["spell-book"]}>
<Pair single id="boundaries">Boundaries</Pair>
<Pair title="Info">The Boundaries patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/protection_from_evil">Protection from evil</Link></Pair>
<Pair plain title="4th"><Link to="/spell/see_invisibility">See invisibility</Link></Pair>
<Pair plain title="6th"><Link to="/spell/magic_circle_against_evil">Magic circle against evil</Link></Pair>
<Pair plain title="8th"><Link to="/spell/dimensional_anchor">Dimensional anchor</Link></Pair>
<Pair plain title="10th"><Link to="/spell/control_summoned_creature">Control summoned creature</Link></Pair>
<Pair plain title="12th"><Link to="/spell/banishment">Banishment</Link></Pair>
<Pair plain title="14th"><Link to="/spell/ethereal_jaunt">Ethereal jaunt</Link></Pair>
<Pair plain title="16th"><Link to="/spell/dimensional_lock">Dimensional lock</Link></Pair>
<Pair plain title="18th"><Link to="/spell/gate">Gate</Link></Pair>
</Ability>
</>};
const _conspiracies = {title: "Conspiracies", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 72</Link></p>
<Ability id="conspiracies" icon={["spell-book"]}>
<Pair single id="conspiracies">Conspiracies</Pair>
<Pair title="Info">The Conspiracies patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/lock_gaze">Lock gaze</Link></Pair>
<Pair plain title="4th"><Link to="/spell/disguise_other">Disguise other</Link></Pair>
<Pair plain title="6th"><Link to="/spell/tongues">Tongues</Link></Pair>
<Pair plain title="8th"><Link to="/spell/hypercognition">Hypercognition</Link></Pair>
<Pair plain title="10th"><Link to="/spell/dominate_person">Dominate person</Link></Pair>
<Pair plain title="12th"><Link to="/spell/symbol_of_persuasion">Symbol of persuasion</Link></Pair>
<Pair plain title="14th"><Link to="/spell/vision">Vision</Link></Pair>
<Pair plain title="16th"><Link to="/spell/frightful_aspect">Frightful aspect</Link></Pair>
<Pair plain title="18th"><Link to="/spell/overwhelming_presence">Overwhelming presence</Link></Pair>
</Ability>
</>};
const _death = {title: "Death", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 83</Link></p>
<Ability id="death" icon={["spell-book"]}>
<Pair single id="death">Death</Pair>
<Pair title="Info">The Death patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/deathwatch">Deathwatch</Link></Pair>
<Pair plain title="4th"><Link to="/spell/blessing_of_courage_and_life">Blessing of courage and life</Link></Pair>
<Pair plain title="6th"><Link to="/spell/speak_with_dead">Speak with dead</Link></Pair>
<Pair plain title="8th"><Link to="/spell/rest_eternal">Rest eternal</Link></Pair>
<Pair plain title="10th"><Link to="/spell/suffocation">Suffocation</Link></Pair>
<Pair plain title="12th"><Link to="/spell/circle_of_death">Circle of death</Link></Pair>
<Pair plain title="14th"><Link to="/spell/finger_of_death">Finger of death</Link></Pair>
<Pair plain title="16th"><Link to="/spell/symbol_of_death">Symbol of death</Link></Pair>
<Pair plain title="18th"><Link to="/spell/power_word_kill">Power word kill</Link></Pair>
</Ability>
</>};
const _decadence = {title: "Decadence", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 72</Link></p>
<Ability id="decadence" icon={["spell-book"]}>
<Pair single id="decadence">Decadence</Pair>
<Pair title="Info">The Decadence patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/negative_reaction">Negative reaction</Link></Pair>
<Pair plain title="4th"><Link to="/spell/demand_offering">Demand offering</Link></Pair>
<Pair plain title="6th"><Link to="/spell/sepia_snake_sigil">Sepia snake sigil</Link></Pair>
<Pair plain title="8th"><Link to="/spell/charm_monster">Charm monster</Link></Pair>
<Pair plain title="10th"><Link to="/spell/dream">Dream</Link></Pair>
<Pair plain title="12th"><Link to="/spell/envious_urge">Envious urge</Link></Pair>
<Pair plain title="14th"><Link to="/spell/waves_of_ecstasy">Waves of ecstasy</Link></Pair>
<Pair plain title="16th"><Link to="/spell/euphoric_tranquility">Euphoric tranquility</Link></Pair>
<Pair plain title="18th"><Link to="/spell/symbol_of_strife">Symbol of strife</Link></Pair>
</Ability>
</>};
const _deception = {title: "Deception", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 70</Link></p>
<Ability id="deception" icon={["spell-book"]}>
<Pair single id="deception">Deception</Pair>
<Pair title="Info">The Deception patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/ventriloquism">Ventriloquism</Link></Pair>
<Pair plain title="4th"><Link to="/spell/invisibility">Invisibility</Link></Pair>
<Pair plain title="6th"><Link to="/spell/blink">Blink</Link></Pair>
<Pair plain title="8th"><Link to="/spell/confusion">Confusion</Link></Pair>
<Pair plain title="10th"><Link to="/spell/passwall">Passwall</Link></Pair>
<Pair plain title="12th"><Link to="/spell/programmed_image">Programmed image</Link></Pair>
<Pair plain title="14th"><Link to="/spell/mass_invisibility">Mass invisibility</Link></Pair>
<Pair plain title="16th"><Link to="/spell/scintillating_pattern">Scintillating pattern</Link></Pair>
<Pair plain title="18th"><Link to="/spell/time_stop">Time stop</Link></Pair>
</Ability>
</>};
const _devotion = {title: "Devotion", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 27</Link></p>
<Ability id="devotion" icon={["spell-book"]}>
<Pair single id="devotion">Devotion</Pair>
<Pair title="Info">The Devotion patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/divine_favor">Divine favor</Link></Pair>
<Pair plain title="4th"><Link to="/spell/martyrs_bargain">Martyr's bargain</Link></Pair>
<Pair plain title="6th"><Link to="/spell/magic_vestment">Magic vestment</Link></Pair>
<Pair plain title="8th"><Link to="/spell/greater_magic_weapon">Greater magic weapon</Link></Pair>
<Pair plain title="10th"><Link to="/spell/flame_strike">Flame strike</Link></Pair>
<Pair plain title="12th"><Link to="/spell/mass_bulls_strength">Mass bull's strength</Link></Pair>
<Pair plain title="14th"><Link to="/spell/bestow_grace_of_the_champion">Bestow grace of the champion</Link></Pair>
<Pair plain title="16th"><Link to="/spell/holy_aura">Holy aura</Link></Pair>
<Pair plain title="18th"><Link to="/spell/mass_heal">Mass heal</Link></Pair>
</Ability>
</>};
const _elements = {title: "Elements", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 70</Link></p>
<Ability id="elements" icon={["spell-book"]}>
<Pair single id="elements">Elements</Pair>
<Pair title="Info">The Elements patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/shocking_grasp">Shocking grasp</Link></Pair>
<Pair plain title="4th"><Link to="/spell/flaming_sphere">Flaming sphere</Link></Pair>
<Pair plain title="6th"><Link to="/spell/fireball">Fireball</Link></Pair>
<Pair plain title="8th"><Link to="/spell/wall_of_ice">Wall of ice</Link></Pair>
<Pair plain title="10th"><Link to="/spell/flame_strike">Flame strike</Link></Pair>
<Pair plain title="12th"><Link to="/spell/freezing_sphere">Freezing sphere</Link></Pair>
<Pair plain title="14th"><Link to="/spell/vortex">Vortex</Link></Pair>
<Pair plain title="16th"><Link to="/spell/fire_storm">Fire storm</Link></Pair>
<Pair plain title="18th"><Link to="/spell/meteor_swarm">Meteor swarm</Link></Pair>
</Ability>
</>};
const _enchantment = {title: "Enchantment", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 83</Link></p>
<Ability id="enchantment" icon={["spell-book"]}>
<Pair single id="enchantment">Enchantment</Pair>
<Pair title="Info">The Enchantment patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/unnatural_lust">Unnatural lust</Link></Pair>
<Pair plain title="4th"><Link to="/spell/calm_emotions">Calm emotions</Link></Pair>
<Pair plain title="6th"><Link to="/spell/unadulterated_loathing">Unadulterated loathing</Link></Pair>
<Pair plain title="8th"><Link to="/spell/overwhelming_grief">Overwhelming grief</Link></Pair>
<Pair plain title="10th"><Link to="/spell/dominate_person">Dominate person</Link></Pair>
<Pair plain title="12th"><Link to="/spell/geas">Geas</Link></Pair>
<Pair plain title="14th"><Link to="/spell/euphoric_tranquility">Euphoric tranquility</Link></Pair>
<Pair plain title="16th"><Link to="/spell/demand">Demand</Link></Pair>
<Pair plain title="18th"><Link to="/spell/dominate_monster">Dominate monster</Link></Pair>
</Ability>
</>};
const _endurance = {title: "Endurance", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 70</Link></p>
<Ability id="endurance" icon={["spell-book"]}>
<Pair single id="endurance">Endurance</Pair>
<Pair title="Info">The Endurance patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/endure_elements">Endure elements</Link></Pair>
<Pair plain title="4th"><Link to="/spell/bears_endurance">Bear's endurance</Link></Pair>
<Pair plain title="6th"><Link to="/spell/protection_from_energy">Protection from energy</Link></Pair>
<Pair plain title="8th"><Link to="/spell/spell_immunity">Spell immunity</Link></Pair>
<Pair plain title="10th"><Link to="/spell/spell_resistance">Spell resistance</Link></Pair>
<Pair plain title="12th"><Link to="/spell/mass_bears_endurance">Mass bear's endurance</Link></Pair>
<Pair plain title="14th"><Link to="/spell/greater_restoration">Greater restoration</Link></Pair>
<Pair plain title="16th"><Link to="/spell/iron_body">Iron body</Link></Pair>
<Pair plain title="18th"><Link to="/spell/miracle">Miracle</Link></Pair>
</Ability>
</>};
const _entropy = {title: "Entropy", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 72</Link></p>
<Ability id="entropy" icon={["spell-book"]}>
<Pair single id="entropy">Entropy</Pair>
<Pair title="Info">The Entropy patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/lesser_confusion">Lesser confusion</Link></Pair>
<Pair plain title="4th"><Link to="/spell/plague_carrier">Plague carrier</Link></Pair>
<Pair plain title="6th"><Link to="/spell/babble">Babble</Link></Pair>
<Pair plain title="8th"><Link to="/spell/wandering_star_motes">Wandering star motes</Link></Pair>
<Pair plain title="10th"><Link to="/spell/feeblemind">Feeblemind</Link></Pair>
<Pair plain title="12th"><Link to="/spell/antimagic_field">Antimagic field</Link></Pair>
<Pair plain title="14th"><Link to="/spell/insanity">Insanity</Link></Pair>
<Pair plain title="16th"><Link to="/spell/symbol_of_insanity">Symbol of insanity</Link></Pair>
<Pair plain title="18th"><Link to="/spell/interplanetary_teleport">Interplanetary teleport</Link></Pair>
</Ability>
</>};
const _ethereal = {title: "Ethereal", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 125</Link></p>
<Ability id="ethereal" icon={["spell-book"]}>
<Pair single id="ethereal">Ethereal</Pair>
<Pair title="Info">The Ethereal patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/detect_undead">Detect undead</Link></Pair>
<Pair plain title="4th"><Link to="/spell/see_invisibility">See invisibility</Link></Pair>
<Pair plain title="6th"><Link to="/spell/ectoplasmic_snare">Ectoplasmic snare</Link></Pair>
<Pair plain title="8th"><Link to="/spell/condensed_ether">Condensed ether</Link></Pair>
<Pair plain title="10th"><Link to="/spell/ethereal_envelope">Ethereal envelope</Link></Pair>
<Pair plain title="12th"><Link to="/spell/ethereal_jaunt">Ethereal jaunt</Link></Pair>
<Pair plain title="14th"><Link to="/spell/ectoplasmic_eruption">Ectoplasmic eruption</Link></Pair>
<Pair plain title="16th"><Link to="/spell/ethereal_envelopment">Ethereal envelopment</Link></Pair>
<Pair plain title="18th"><Link to="/spell/etherealness">Etherealness</Link></Pair>
</Ability>
</>};
const _fate = {title: "Fate", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_72_the_witch_queens_revenge">Pathfinder #72: The Witch Queen's Revenge pg. 75</Link></p>
<Ability id="fate" icon={["spell-book"]}>
<Pair single id="fate">Fate</Pair>
<Pair title="Info">The Fate patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/doom">Doom</Link></Pair>
<Pair plain title="4th"><Link to="/spell/anticipate_peril">Anticipate peril</Link></Pair>
<Pair plain title="6th"><Link to="/spell/helping_hand">Helping hand</Link></Pair>
<Pair plain title="8th"><Link to="/spell/blessing_of_fervor">Blessing of fervor</Link></Pair>
<Pair plain title="10th"><Link to="/spell/greater_forbid_action">Greater forbid action</Link></Pair>
<Pair plain title="12th"><Link to="/spell/contingency">Contingency</Link></Pair>
<Pair plain title="14th"><Link to="/spell/jolting_portent">Jolting portent</Link></Pair>
<Pair plain title="16th"><Link to="/spell/maze">Maze</Link></Pair>
<Pair plain title="18th"><Link to="/spell/wish">Wish</Link></Pair>
</Ability>
</>};
const _healing = {title: "Healing", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 83</Link></p>
<Ability id="healing" icon={["spell-book"]}>
<Pair single id="healing">Healing</Pair>
<Pair title="Info">The Healing patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/remove_fear">Remove fear</Link></Pair>
<Pair plain title="4th"><Link to="/spell/lesser_restoration">Lesser restoration</Link></Pair>
<Pair plain title="6th"><Link to="/spell/remove_disease">Remove disease</Link></Pair>
<Pair plain title="8th"><Link to="/spell/restoration">Restoration</Link></Pair>
<Pair plain title="10th"><Link to="/spell/cleanse">Cleanse</Link></Pair>
<Pair plain title="12th"><Link to="/spell/pillar_of_life">Pillar of life</Link></Pair>
<Pair plain title="14th"><Link to="/spell/greater_restoration">Greater restoration</Link></Pair>
<Pair plain title="16th"><Link to="/spell/mass_cure_critical_wounds">Mass cure critical wounds</Link></Pair>
<Pair plain title="18th"><Link to="/spell/true_resurrection">True resurrection</Link></Pair>
</Ability>
</>};
const _insanity = {title: "Insanity", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 83</Link></p>
<Ability id="insanity" icon={["spell-book"]}>
<Pair single id="insanity">Insanity</Pair>
<Pair title="Info">The Insanity patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/memory_lapse">Memory lapse</Link></Pair>
<Pair plain title="4th"><Link to="/spell/hideous_laughter">Hideous laughter</Link></Pair>
<Pair plain title="6th"><Link to="/spell/distracting_cacophony">Distracting cacophony</Link></Pair>
<Pair plain title="8th"><Link to="/spell/confusion">Confusion</Link></Pair>
<Pair plain title="10th"><Link to="/spell/mind_fog">Mind fog</Link></Pair>
<Pair plain title="12th"><Link to="/spell/envious_urge">Envious urge</Link></Pair>
<Pair plain title="14th"><Link to="/spell/insanity">Insanity</Link></Pair>
<Pair plain title="16th"><Link to="/spell/symbol_of_insanity">Symbol of insanity</Link></Pair>
<Pair plain title="18th"><Link to="/spell/overwhelming_presence">Overwhelming presence</Link></Pair>
</Ability>
</>};
const _jynx = {title: "Jynx", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven pg. 17</Link></p>
<Ability id="jynx" icon={["spell-book"]}>
<Pair single id="jynx">Jynx</Pair>
<Pair title="Info">The Jynx patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/ill_omen">Ill omen</Link></Pair>
<Pair plain title="4th"><Link to="/spell/shatter">Shatter</Link></Pair>
<Pair plain title="6th"><Link to="/spell/bestow_curse">Bestow curse</Link></Pair>
<Pair plain title="8th"><Link to="/spell/retribution">Retribution</Link></Pair>
<Pair plain title="10th"><Link to="/spell/mark_of_justice">Mark of justice</Link></Pair>
<Pair plain title="12th"><Link to="/spell/eyebite">Eyebite</Link></Pair>
<Pair plain title="14th"><Link to="/spell/spell_turning">Spell turning</Link></Pair>
<Pair plain title="16th"><Link to="/spell/antipathy">Antipathy</Link></Pair>
<Pair plain title="18th"><Link to="/spell/energy_drain">Energy drain</Link></Pair>
</Ability>
</>};
const _light = {title: "Light", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 83</Link></p>
<Ability id="light" icon={["spell-book"]}>
<Pair single id="light">Light</Pair>
<Pair title="Info">The Light patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/dancing_lantern">Dancing lantern</Link></Pair>
<Pair plain title="4th"><Link to="/spell/continual_flame">Continual flame</Link></Pair>
<Pair plain title="6th"><Link to="/spell/daylight">Daylight</Link></Pair>
<Pair plain title="8th"><Link to="/spell/rainbow_pattern">Rainbow pattern</Link></Pair>
<Pair plain title="10th"><Link to="/spell/fire_snake">Fire snake</Link></Pair>
<Pair plain title="12th"><Link to="/spell/sirocco">Sirocco</Link></Pair>
<Pair plain title="14th"><Link to="/spell/sunbeam">Sunbeam</Link></Pair>
<Pair plain title="16th"><Link to="/spell/sunburst">Sunburst</Link></Pair>
<Pair plain title="18th"><Link to="/spell/fiery_body">Fiery body</Link></Pair>
</Ability>
</>};
const _mercy = {title: "Mercy", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven pg. 17</Link></p>
<Ability id="mercy" icon={["spell-book"]}>
<Pair single id="mercy">Mercy</Pair>
<Pair title="Info">The Mercy patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/cure_light_wounds">Cure light wounds</Link></Pair>
<Pair plain title="4th"><Link to="/spell/eagles_splendor">Eagle's splendor</Link></Pair>
<Pair plain title="6th"><Link to="/spell/remove_curse">Remove curse</Link></Pair>
<Pair plain title="8th"><Link to="/spell/restoration">Restoration</Link></Pair>
<Pair plain title="10th"><Link to="/spell/cleanse">Cleanse</Link></Pair>
<Pair plain title="12th"><Link to="/spell/heroes_feast">Heroes' feast</Link></Pair>
<Pair plain title="14th"><Link to="/spell/foe_to_friend">Foe to friend</Link></Pair>
<Pair plain title="16th"><Link to="/spell/euphoric_tranquility">Euphoric tranquility</Link></Pair>
<Pair plain title="18th"><Link to="/spell/true_resurrection">True resurrection</Link></Pair>
</Ability>
</>};
const _mind = {title: "Mind", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 125</Link></p>
<Ability id="mind" icon={["spell-book"]}>
<Pair single id="mind">Mind</Pair>
<Pair title="Info">The Mind patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/mindlink">Mindlink</Link></Pair>
<Pair plain title="4th"><Link to="/spell/mental_block">Mental block</Link></Pair>
<Pair plain title="6th"><Link to="/spell/mindscape_door">Mindscape door</Link></Pair>
<Pair plain title="8th"><Link to="/spell/create_mindscape">Create mindscape</Link></Pair>
<Pair plain title="10th"><Link to="/spell/psychic_asylum">Psychic asylum</Link></Pair>
<Pair plain title="12th"><Link to="/spell/greater_create_mindscape">Greater create mindscape</Link></Pair>
<Pair plain title="14th"><Link to="/spell/psychic_surgery">Psychic surgery</Link></Pair>
<Pair plain title="16th"><Link to="/spell/moment_of_prescience">Moment of prescience</Link></Pair>
<Pair plain title="18th"><Link to="/spell/microcosm">Microcosm</Link></Pair>
</Ability>
</>};
const _moon = {title: "Moon", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 83</Link></p>
<Ability id="moon" icon={["spell-book"]}>
<Pair single id="moon">Moon</Pair>
<Pair title="Info">The Moon patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/darkness">Darkness</Link></Pair>
<Pair plain title="4th"><Link to="/spell/darkvision">Darkvision</Link></Pair>
<Pair plain title="6th"><Link to="/spell/owls_wisdom">Owl's wisdom</Link></Pair>
<Pair plain title="8th"><Link to="/spell/moonstruck">Moonstruck</Link></Pair>
<Pair plain title="10th"><Link to="/spell/aspect_of_the_wolf">Aspect of the wolf</Link></Pair>
<Pair plain title="12th"><Link to="/spell/control_water">Control water</Link></Pair>
<Pair plain title="14th"><Link to="/spell/lunar_veil">Lunar veil</Link></Pair>
<Pair plain title="16th"><Link to="/spell/horrid_wilting">Horrid wilting</Link></Pair>
<Pair plain title="18th"><Link to="/spell/meteor_swarm">Meteor swarm</Link></Pair>
</Ability>
</>};
const _mountain = {title: "Mountain", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 13</Link></p>
<Ability id="mountain" icon={["spell-book"]}>
<Pair single id="mountain">Mountain</Pair>
<Pair title="Info">The Mountain patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/stone_fist">Stone fist</Link></Pair>
<Pair plain title="4th"><Link to="/spell/stone_call">Stone call</Link></Pair>
<Pair plain title="6th"><Link to="/spell/stone_shape">Stone shape</Link></Pair>
<Pair plain title="8th"><Link to="/spell/spike_stones">Spike stones</Link></Pair>
<Pair plain title="10th"><Link to="/spell/wall_of_stone">Wall of stone</Link></Pair>
<Pair plain title="12th"><Link to="/spell/flesh_to_stone">Flesh to stone</Link></Pair>
<Pair plain title="14th"><Link to="/spell/stone_tell">Stone tell</Link></Pair>
<Pair plain title="16th"><Link to="/spell/repel_metal_or_stone">Repel metal or stone</Link></Pair>
<Pair plain title="18th"><Link to="/spell/clashing_rocks">Clashing rocks</Link></Pair>
</Ability>
</>};
const _nightmares = {title: "Nightmares", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 72</Link></p>
<Ability id="nightmares" icon={["spell-book"]}>
<Pair single id="nightmares">Nightmares</Pair>
<Pair title="Info">The Nightmares patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/sleep">Sleep</Link></Pair>
<Pair plain title="4th"><Link to="/spell/detect_thoughts">Detect thoughts</Link></Pair>
<Pair plain title="6th"><Link to="/spell/oneiric_horror">Oneiric horror</Link></Pair>
<Pair plain title="8th"><Link to="/spell/phantasmal_killer">Phantasmal killer</Link></Pair>
<Pair plain title="10th"><Link to="/spell/nightmare">Nightmare</Link></Pair>
<Pair plain title="12th"><Link to="/spell/dream_travel">Dream travel</Link></Pair>
<Pair plain title="14th"><Link to="/spell/symbol_of_weakness">Symbol of weakness</Link></Pair>
<Pair plain title="16th"><Link to="/spell/demand">Demand</Link></Pair>
<Pair plain title="18th"><Link to="/spell/polar_midnight">Polar midnight</Link></Pair>
</Ability>
</>};
const _occult = {title: "Occult", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 83</Link></p>
<Ability id="occult" icon={["spell-book"]}>
<Pair single id="occult">Occult</Pair>
<Pair title="Info">The Occult patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/detect_undead">Detect undead</Link></Pair>
<Pair plain title="4th"><Link to="/spell/command_undead">Command undead</Link></Pair>
<Pair plain title="6th"><Link to="/spell/twilight_knife">Twilight knife</Link></Pair>
<Pair plain title="8th"><Link to="/spell/black_tentacles">Black tentacles</Link></Pair>
<Pair plain title="10th"><Link to="/spell/snake_staff">Snake staff</Link></Pair>
<Pair plain title="12th"><Link to="/spell/create_undead">Create undead</Link></Pair>
<Pair plain title="14th"><Link to="/spell/waves_of_exhaustion">Waves of exhaustion</Link></Pair>
<Pair plain title="16th"><Link to="/spell/trap_the_soul">Trap the soul</Link></Pair>
<Pair plain title="18th"><Link to="/spell/gate">Gate</Link></Pair>
</Ability>
</>};
const _peace = {title: "Peace", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 27</Link></p>
<Ability id="peace" icon={["spell-book"]}>
<Pair single id="peace">Peace</Pair>
<Pair title="Info">The Peace patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/sanctuary">Sanctuary</Link></Pair>
<Pair plain title="4th"><Link to="/spell/calm_emotions">Calm emotions</Link></Pair>
<Pair plain title="6th"><Link to="/spell/wind_wall">Wind wall</Link></Pair>
<Pair plain title="8th"><Link to="/spell/dismissal">Dismissal</Link></Pair>
<Pair plain title="10th"><Link to="/spell/serenity">Serenity</Link></Pair>
<Pair plain title="12th"><Link to="/spell/word_of_recall">Word of recall</Link></Pair>
<Pair plain title="14th"><Link to="/spell/forcecage">Forcecage</Link></Pair>
<Pair plain title="16th"><Link to="/spell/euphoric_tranquility">Euphoric tranquility</Link></Pair>
<Pair plain title="18th"><Link to="/spell/antipathy">Antipathy</Link></Pair>
</Ability>
</>};
const _plague = {title: "Plague", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 70</Link></p>
<Ability id="plague" icon={["spell-book"]}>
<Pair single id="plague">Plague</Pair>
<Pair title="Info">The Plague patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/detect_undead">Detect undead</Link></Pair>
<Pair plain title="4th"><Link to="/spell/command_undead">Command undead</Link></Pair>
<Pair plain title="6th"><Link to="/spell/contagion">Contagion</Link></Pair>
<Pair plain title="8th"><Link to="/spell/animate_dead">Animate dead</Link></Pair>
<Pair plain title="10th"><Link to="/spell/giant_vermin">Giant vermin</Link></Pair>
<Pair plain title="12th"><Link to="/spell/create_undead">Create undead</Link></Pair>
<Pair plain title="14th"><Link to="/spell/control_undead">Control undead</Link></Pair>
<Pair plain title="16th"><Link to="/spell/create_greater_undead">Create greater undead</Link></Pair>
<Pair plain title="18th"><Link to="/spell/energy_drain">Energy drain</Link></Pair>
</Ability>
</>};
const _plant = {title: "Plant", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 11</Link></p>
<Ability id="plant" icon={["spell-book"]}>
<Pair single id="plant">Plant</Pair>
<Pair title="Info">The Plant patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/entangle">Entangle</Link></Pair>
<Pair plain title="4th"><Link to="/spell/accelerate_poison">Accelerate poison</Link></Pair>
<Pair plain title="6th"><Link to="/spell/lily_pad_stride">Lily pad stride</Link></Pair>
<Pair plain title="8th"><Link to="/spell/grove_of_respite">Grove of respite</Link></Pair>
<Pair plain title="10th"><Link to="/spell/tree_stride">Tree stride</Link></Pair>
<Pair plain title="12th"><Link to="/spell/repel_wood">Repel wood</Link></Pair>
<Pair plain title="14th"><Link to="/spell/animate_plants">Animate plants</Link></Pair>
<Pair plain title="16th"><Link to="/spell/control_plants">Control plants</Link></Pair>
<Pair plain title="18th"><Link to="/spell/shambler">Shambler</Link></Pair>
</Ability>
</>};
const _portents = {title: "Portents", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 83</Link></p>
<Ability id="portents" icon={["spell-book"]}>
<Pair single id="portents">Portents</Pair>
<Pair title="Info">The Portents patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/ill_omen">Ill omen</Link></Pair>
<Pair plain title="4th"><Link to="/spell/locate_object">Locate object</Link></Pair>
<Pair plain title="6th"><Link to="/spell/blood_biography">Blood biography</Link></Pair>
<Pair plain title="8th"><Link to="/spell/divination">Divination</Link></Pair>
<Pair plain title="10th"><Link to="/spell/contact_other_plane">Contact other plane</Link></Pair>
<Pair plain title="12th"><Link to="/spell/legend_lore">Legend lore</Link></Pair>
<Pair plain title="14th"><Link to="/spell/vision">Vision</Link></Pair>
<Pair plain title="16th"><Link to="/spell/moment_of_prescience">Moment of prescience</Link></Pair>
<Pair plain title="18th"><Link to="/spell/foresight">Foresight</Link></Pair>
</Ability>
</>};
const _protection = {title: "Protection", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 9</Link></p>
<Ability id="protection" icon={["spell-book"]}>
<Pair single id="protection">Protection</Pair>
<Pair title="Info">The Protection patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/sanctuary">Sanctuary</Link></Pair>
<Pair plain title="4th"><Link to="/spell/resist_energy">Resist energy</Link></Pair>
<Pair plain title="6th"><Link to="/spell/wrathful_mantle">Wrathful mantle</Link></Pair>
<Pair plain title="8th"><Link to="/spell/stoneskin">Stoneskin</Link></Pair>
<Pair plain title="10th"><Link to="/spell/interposing_hand">Interposing hand</Link></Pair>
<Pair plain title="12th"><Link to="/spell/forbiddance">Forbiddance</Link></Pair>
<Pair plain title="14th"><Link to="/spell/greater_spell_immunity">Greater spell immunity</Link></Pair>
<Pair plain title="16th"><Link to="/spell/prismatic_wall">Prismatic wall</Link></Pair>
<Pair plain title="18th"><Link to="/spell/freedom">Freedom</Link></Pair>
</Ability>
</>};
const _recovery = {title: "Recovery", jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 16</Link></p>
<Ability id="recovery" icon={["spell-book"]}>
<Pair single id="recovery">Recovery</Pair>
<Pair title="Info">The Recovery patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/liberating_command">Liberating command</Link></Pair>
<Pair plain title="4th"><Link to="/spell/remove_paralysis">Remove paralysis</Link></Pair>
<Pair plain title="6th"><Link to="/spell/sacred_bond">Sacred bond</Link></Pair>
<Pair plain title="8th"><Link to="/spell/freedom_of_movement">Freedom of movement</Link></Pair>
<Pair plain title="10th"><Link to="/spell/cleanse">Cleanse</Link></Pair>
<Pair plain title="12th"><Link to="/spell/heroes_feast">Heroes' feast</Link></Pair>
<Pair plain title="14th"><Link to="/spell/joyful_rapture">Joyful rapture</Link></Pair>
<Pair plain title="16th"><Link to="/spell/protection_from_spells">Protection from spells</Link></Pair>
<Pair plain title="18th"><Link to="/spell/mass_heal">Mass heal</Link></Pair>
</Ability>
</>};
const _revenge = {title: "Revenge", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 72</Link></p>
<Ability id="revenge" icon={["spell-book"]}>
<Pair single id="revenge">Revenge</Pair>
<Pair title="Info">The Revenge patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/magic_fang">Magic fang</Link></Pair>
<Pair plain title="4th"><Link to="/spell/slipstream">Slipstream</Link></Pair>
<Pair plain title="6th"><Link to="/spell/rage">Rage</Link></Pair>
<Pair plain title="8th"><Link to="/spell/moonstruck">Moonstruck</Link></Pair>
<Pair plain title="10th"><Link to="/spell/beast_shape_iii">Beast shape III</Link></Pair>
<Pair plain title="12th"><Link to="/spell/vengeful_outrage">Vengeful outrage</Link></Pair>
<Pair plain title="14th"><Link to="/spell/phantasmal_revenge">Phantasmal revenge</Link></Pair>
<Pair plain title="16th"><Link to="/spell/seamantle">Seamantle</Link></Pair>
<Pair plain title="18th"><Link to="/spell/storm_of_vengeance">Storm of vengeance</Link></Pair>
</Ability>
</>};
const _rot = {title: "Rot", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven pg. 17</Link></p>
<Ability id="rot" icon={["spell-book"]}>
<Pair single id="rot">Rot</Pair>
<Pair title="Info">The Rot patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/decompose_corpse">Decompose corpse</Link></Pair>
<Pair plain title="4th"><Link to="/spell/warp_wood">Warp wood</Link></Pair>
<Pair plain title="6th"><Link to="/spell/fungal_infestation">Fungal infestation</Link></Pair>
<Pair plain title="8th"><Link to="/spell/fleshworm_infestation">Fleshworm infestation</Link></Pair>
<Pair plain title="10th"><Link to="/spell/plague_carrier">Plague carrier</Link></Pair>
<Pair plain title="12th"><Link to="/spell/epidemic">Epidemic</Link></Pair>
<Pair plain title="14th"><Link to="/spell/creeping_doom">Creeping doom</Link></Pair>
<Pair plain title="16th"><Link to="/spell/horrid_wilting">Horrid wilting</Link></Pair>
<Pair plain title="18th"><Link to="/spell/cursed_earth">Cursed earth</Link></Pair>
</Ability>
</>};
const _shadow = {title: "Shadow", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 70</Link></p>
<Ability id="shadow" icon={["spell-book"]}>
<Pair single id="shadow">Shadow</Pair>
<Pair title="Info">The Shadow patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/silent_image">Silent image</Link></Pair>
<Pair plain title="4th"><Link to="/spell/darkness">Darkness</Link></Pair>
<Pair plain title="6th"><Link to="/spell/deeper_darkness">Deeper darkness</Link></Pair>
<Pair plain title="8th"><Link to="/spell/shadow_conjuration">Shadow conjuration</Link></Pair>
<Pair plain title="10th"><Link to="/spell/shadow_evocation">Shadow evocation</Link></Pair>
<Pair plain title="12th"><Link to="/spell/shadow_walk">Shadow walk</Link></Pair>
<Pair plain title="14th"><Link to="/spell/greater_shadow_conjuration">Greater shadow conjuration</Link></Pair>
<Pair plain title="16th"><Link to="/spell/greater_shadow_evocation">Greater shadow evocation</Link></Pair>
<Pair plain title="18th"><Link to="/spell/shades">Shades</Link></Pair>
</Ability>
</>};
const _space = {title: "Space", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 72</Link></p>
<Ability id="space" icon={["spell-book"]}>
<Pair single id="space">Space</Pair>
<Pair title="Info">The Space patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/mirror_strike">Mirror strike</Link></Pair>
<Pair plain title="4th"><Link to="/spell/twisted_space">Twisted space</Link></Pair>
<Pair plain title="6th"><Link to="/spell/blink">Blink</Link></Pair>
<Pair plain title="8th"><Link to="/spell/dimension_door">Dimension door</Link></Pair>
<Pair plain title="10th"><Link to="/spell/hostile_juxtaposition">Hostile juxtaposition</Link></Pair>
<Pair plain title="12th"><Link to="/spell/repulsion">Repulsion</Link></Pair>
<Pair plain title="14th"><Link to="/spell/walk_through_space">Walk through space</Link></Pair>
<Pair plain title="16th"><Link to="/spell/bilocation">Bilocation</Link></Pair>
<Pair plain title="18th"><Link to="/spell/teleportation_circle">Teleportation circle</Link></Pair>
</Ability>
</>};
const _spirits = {title: "Spirits", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 83</Link></p>
<Ability id="spirits" icon={["spell-book"]}>
<Pair single id="spirits">Spirits</Pair>
<Pair title="Info">The Spirits patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/ghostbane_dirge">Ghostbane dirge</Link></Pair>
<Pair plain title="4th"><Link to="/spell/invisibility">Invisibility</Link></Pair>
<Pair plain title="6th"><Link to="/spell/speak_with_dead">Speak with dead</Link></Pair>
<Pair plain title="8th"><Link to="/spell/spiritual_ally">Spiritual ally</Link></Pair>
<Pair plain title="10th"><Link to="/spell/mass_ghostbane_dirge">Mass ghostbane dirge</Link></Pair>
<Pair plain title="12th"><Link to="/spell/shadow_walk">Shadow walk</Link></Pair>
<Pair plain title="14th"><Link to="/spell/ethereal_jaunt">Ethereal jaunt</Link></Pair>
<Pair plain title="16th"><Link to="/spell/planar_ally">Planar ally</Link></Pair>
<Pair plain title="18th"><Link to="/spell/etherealness">Etherealness</Link></Pair>
</Ability>
</>};
const _spring = {title: "Spring", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 88</Link></p>
<Ability id="spring" icon={["spell-book"]}>
<Pair single id="spring">Spring</Pair>
<Pair title="Info">The Spring patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/feather_fall">Feather fall</Link></Pair>
<Pair plain title="4th"><Link to="/spell/alter_self">Alter self</Link></Pair>
<Pair plain title="6th"><Link to="/spell/pup_shape">Pup shape</Link></Pair>
<Pair plain title="8th"><Link to="/spell/true_form">True form</Link></Pair>
<Pair plain title="10th"><Link to="/spell/lightning_arc">Lightning arc</Link></Pair>
<Pair plain title="12th"><Link to="/spell/chain_lightning">Chain lightning</Link></Pair>
<Pair plain title="14th"><Link to="/spell/control_weather">Control weather</Link></Pair>
<Pair plain title="16th"><Link to="/spell/stormbolts">Stormbolts</Link></Pair>
<Pair plain title="18th"><Link to="/spell/time_stop">Time stop</Link></Pair>
</Ability>
</>};
const _stars = {title: "Stars", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 83</Link></p>
<Ability id="stars" icon={["spell-book"]}>
<Pair single id="stars">Stars</Pair>
<Pair title="Info">The Stars patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/faerie_fire">Faerie fire</Link></Pair>
<Pair plain title="4th"><Link to="/spell/dust_of_twilight">Dust of twilight</Link></Pair>
<Pair plain title="6th"><Link to="/spell/guiding_star">Guiding star</Link></Pair>
<Pair plain title="8th"><Link to="/spell/wandering_star_motes">Wandering star motes</Link></Pair>
<Pair plain title="10th"><Link to="/spell/dream">Dream</Link></Pair>
<Pair plain title="12th"><Link to="/spell/cloak_of_dreams">Cloak of dreams</Link></Pair>
<Pair plain title="14th"><Link to="/spell/circle_of_clarity">Circle of clarity</Link></Pair>
<Pair plain title="16th"><Link to="/spell/euphoric_tranquility">Euphoric tranquility</Link></Pair>
<Pair plain title="18th"><Link to="/spell/astral_projection">Astral projection</Link></Pair>
</Ability>
</>};
const _storms = {title: "Storms", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 13</Link></p>
<Ability id="storms" icon={["spell-book"]}>
<Pair single id="storms">Storms</Pair>
<Pair title="Info">The Storms patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/obscuring_mist">Obscuring mist</Link></Pair>
<Pair plain title="4th"><Link to="/spell/fog_cloud">Fog cloud</Link></Pair>
<Pair plain title="6th"><Link to="/spell/call_lightning">Call lightning</Link></Pair>
<Pair plain title="8th"><Link to="/spell/ice_storm">Ice storm</Link></Pair>
<Pair plain title="10th"><Link to="/spell/call_lightning_storm">Call lightning storm</Link></Pair>
<Pair plain title="12th"><Link to="/spell/wind_walk">Wind walk</Link></Pair>
<Pair plain title="14th"><Link to="/spell/control_weather">Control weather</Link></Pair>
<Pair plain title="16th"><Link to="/spell/whirlwind">Whirlwind</Link></Pair>
<Pair plain title="18th"><Link to="/spell/storm_of_vengeance">Storm of vengeance</Link></Pair>
</Ability>
</>};
const _strength = {title: "Strength", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 70</Link></p>
<Ability id="strength" icon={["spell-book"]}>
<Pair single id="strength">Strength</Pair>
<Pair title="Info">The Strength patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/divine_favor">Divine favor</Link></Pair>
<Pair plain title="4th"><Link to="/spell/bulls_strength">Bull's strength</Link></Pair>
<Pair plain title="6th"><Link to="/spell/greater_magic_weapon">Greater magic weapon</Link></Pair>
<Pair plain title="8th"><Link to="/spell/divine_power">Divine power</Link></Pair>
<Pair plain title="10th"><Link to="/spell/righteous_might">Righteous might</Link></Pair>
<Pair plain title="12th"><Link to="/spell/mass_bulls_strength">Mass bull's strength</Link></Pair>
<Pair plain title="14th"><Link to="/spell/giant_form_i">Giant form I</Link></Pair>
<Pair plain title="16th"><Link to="/spell/giant_form_ii">Giant form II</Link></Pair>
<Pair plain title="18th"><Link to="/spell/shapechange">Shapechange</Link></Pair>
</Ability>
</>};
const _summer = {title: "Summer", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 13</Link>, <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 88</Link></p>
<Ability id="summer" icon={["spell-book"]}>
<Pair single id="summer">Summer</Pair>
<Pair title="Info">The Summer patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/goodberry">Goodberry</Link></Pair>
<Pair plain title="4th"><Link to="/spell/flaming_sphere">Flaming sphere</Link></Pair>
<Pair plain title="6th"><Link to="/spell/daylight">Daylight</Link></Pair>
<Pair plain title="8th"><Link to="/spell/greater_flaming_sphere">Greater flaming sphere</Link></Pair>
<Pair plain title="10th"><Link to="/spell/wall_of_fire">Wall of fire</Link></Pair>
<Pair plain title="12th"><Link to="/spell/sirocco">Sirocco</Link></Pair>
<Pair plain title="14th"><Link to="/spell/sunbeam">Sunbeam</Link></Pair>
<Pair plain title="16th"><Link to="/spell/sunburst">Sunburst</Link></Pair>
<Pair plain title="18th"><Link to="/spell/fiery_body">Fiery body</Link></Pair>
</Ability>
</>};
const _thorns = {title: "Thorns", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 13</Link>, <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 88</Link></p>
<Ability id="thorns" icon={["spell-book"]}>
<Pair single id="thorns">Thorns</Pair>
<Pair title="Info">The Thorns patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/thorn_javelin">Thorn javelin</Link></Pair>
<Pair plain title="4th"><Link to="/spell/wrath">Wrath</Link></Pair>
<Pair plain title="6th"><Link to="/spell/thorny_entanglement">Thorny entanglement</Link></Pair>
<Pair plain title="8th"><Link to="/spell/thorn_body">Thorn body</Link></Pair>
<Pair plain title="10th"><Link to="/spell/wall_of_thorns">Wall of thorns</Link></Pair>
<Pair plain title="12th"><Link to="/spell/blade_barrier">Blade barrier</Link></Pair>
<Pair plain title="14th"><Link to="/spell/repulsion">Repulsion</Link></Pair>
<Pair plain title="16th"><Link to="/spell/mages_sword">Mage's sword</Link></Pair>
<Pair plain title="18th"><Link to="/spell/wooden_phalanx">Wooden phalanx</Link></Pair>
</Ability>
</>};
const _time = {title: "Time", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 83</Link></p>
<Ability id="time" icon={["spell-book"]}>
<Pair single id="time">Time</Pair>
<Pair title="Info">The Time patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/ventriloquism">Ventriloquism</Link></Pair>
<Pair plain title="4th"><Link to="/spell/silence">Silence</Link></Pair>
<Pair plain title="6th"><Link to="/spell/haste">Haste</Link></Pair>
<Pair plain title="8th"><Link to="/spell/threefold_aspect">Threefold aspect</Link></Pair>
<Pair plain title="10th"><Link to="/spell/teleport">Teleport</Link></Pair>
<Pair plain title="12th"><Link to="/spell/disintegrate">Disintegrate</Link></Pair>
<Pair plain title="14th"><Link to="/spell/expend">Expend</Link></Pair>
<Pair plain title="16th"><Link to="/spell/temporal_stasis">Temporal stasis</Link></Pair>
<Pair plain title="18th"><Link to="/spell/time_stop">Time stop</Link></Pair>
</Ability>
</>};
const _transformation = {title: "Transformation", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 70</Link></p>
<Ability id="transformation" icon={["spell-book"]}>
<Pair single id="transformation">Transformation</Pair>
<Pair title="Info">The Transformation patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/jump">Jump</Link></Pair>
<Pair plain title="4th"><Link to="/spell/bears_endurance">Bear's endurance</Link></Pair>
<Pair plain title="6th"><Link to="/spell/beast_shape_i">Beast shape I</Link></Pair>
<Pair plain title="8th"><Link to="/spell/beast_shape_ii">Beast shape II</Link></Pair>
<Pair plain title="10th"><Link to="/spell/beast_shape_iii">Beast shape III</Link></Pair>
<Pair plain title="12th"><Link to="/spell/form_of_the_dragon_i">Form of the dragon I</Link></Pair>
<Pair plain title="14th"><Link to="/spell/form_of_the_dragon_ii">Form of the dragon II</Link></Pair>
<Pair plain title="16th"><Link to="/spell/form_of_the_dragon_iii">Form of the dragon III</Link></Pair>
<Pair plain title="18th"><Link to="/spell/shapechange">Shapechange</Link></Pair>
</Ability>
<aside><p>When a witch with a Transformation patron gains the ability to choose a major hex, they may learn an <Link to="/ability/annointings">annointing</Link> in place of a new hex.</p>
</aside></>};
const _trickery = {title: "Trickery", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 70</Link></p>
<Ability id="trickery" icon={["spell-book"]}>
<Pair single id="trickery">Trickery</Pair>
<Pair title="Info">The Trickery patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/animate_rope">Animate rope</Link></Pair>
<Pair plain title="4th"><Link to="/spell/mirror_image">Mirror image</Link></Pair>
<Pair plain title="6th"><Link to="/spell/major_image">Major image</Link></Pair>
<Pair plain title="8th"><Link to="/spell/hallucinatory_terrain">Hallucinatory terrain</Link></Pair>
<Pair plain title="10th"><Link to="/spell/mirage_arcana">Mirage arcana</Link></Pair>
<Pair plain title="12th"><Link to="/spell/mislead">Mislead</Link></Pair>
<Pair plain title="14th"><Link to="/spell/reverse_gravity">Reverse gravity</Link></Pair>
<Pair plain title="16th"><Link to="/spell/screen">Screen</Link></Pair>
<Pair plain title="18th"><Link to="/spell/time_stop">Time stop</Link></Pair>
</Ability>
</>};
const _vengeance = {title: "Vengeance", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 83</Link></p>
<Ability id="vengeance" icon={["spell-book"]}>
<Pair single id="vengeance">Vengeance</Pair>
<Pair title="Info">The Vengeance patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/burning_hands">Burning hands</Link></Pair>
<Pair plain title="4th"><Link to="/spell/burning_gaze">Burning gaze</Link></Pair>
<Pair plain title="6th"><Link to="/spell/pain_strike">Pain strike</Link></Pair>
<Pair plain title="8th"><Link to="/spell/shout">Shout</Link></Pair>
<Pair plain title="10th"><Link to="/spell/symbol_of_pain">Symbol of pain</Link></Pair>
<Pair plain title="12th"><Link to="/spell/mass_pain_strike">Mass pain strike</Link></Pair>
<Pair plain title="14th"><Link to="/spell/phantasmal_revenge">Phantasmal revenge</Link></Pair>
<Pair plain title="16th"><Link to="/spell/incendiary_cloud">Incendiary cloud</Link></Pair>
<Pair plain title="18th"><Link to="/spell/winds_of_vengeance">Winds of vengeance</Link></Pair>
</Ability>
</>};
const _water = {title: "Water", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 70</Link></p>
<Ability id="water" icon={["spell-book"]}>
<Pair single id="water">Water</Pair>
<Pair title="Info">The Water patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/bless_water">Bless water</Link> (or <Link to="/spell/curse_water">curse water</Link>)</Pair>
<Pair plain title="4th"><Link to="/spell/slipstream">Slipstream</Link></Pair>
<Pair plain title="6th"><Link to="/spell/water_breathing">Water breathing</Link></Pair>
<Pair plain title="8th"><Link to="/spell/control_water">Control water</Link></Pair>
<Pair plain title="10th"><Link to="/spell/geyser">Geyser</Link></Pair>
<Pair plain title="12th"><Link to="/spell/elemental_body_iii">Elemental body III</Link> (water only)</Pair>
<Pair plain title="14th"><Link to="/spell/elemental_body_iv">Elemental body IV</Link> (water only)</Pair>
<Pair plain title="16th"><Link to="/spell/seamantle">Seamantle</Link></Pair>
<Pair plain title="18th"><Link to="/spell/tsunami">Tsunami</Link></Pair>
</Ability>
</>};
const _winter = {title: "Winter", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 83</Link>, <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 88</Link></p>
<Ability id="winter" icon={["spell-book"]}>
<Pair single id="winter">Winter</Pair>
<Pair title="Info">The Winter patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/unshakable_chill">Unshakable chill</Link></Pair>
<Pair plain title="4th"><Link to="/spell/resist_energy">Resist energy</Link> (cold only)</Pair>
<Pair plain title="6th"><Link to="/spell/ice_storm">Ice storm</Link></Pair>
<Pair plain title="8th"><Link to="/spell/wall_of_ice">Wall of ice</Link></Pair>
<Pair plain title="10th"><Link to="/spell/cone_of_cold">Cone of cold</Link></Pair>
<Pair plain title="12th"><Link to="/spell/freezing_sphere">Freezing sphere</Link></Pair>
<Pair plain title="14th"><Link to="/spell/control_weather">Control weather</Link></Pair>
<Pair plain title="16th"><Link to="/spell/polar_ray">Polar ray</Link></Pair>
<Pair plain title="18th"><Link to="/spell/polar_midnight">Polar midnight</Link></Pair>
</Ability>
</>};
const _wisdom = {title: "Wisdom", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 70</Link></p>
<Ability id="wisdom" icon={["spell-book"]}>
<Pair single id="wisdom">Wisdom</Pair>
<Pair title="Info">The Wisdom patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/shield_of_faith">Shield of faith</Link></Pair>
<Pair plain title="4th"><Link to="/spell/owls_wisdom">Owl's wisdom</Link></Pair>
<Pair plain title="6th"><Link to="/spell/magic_vestment">Magic vestment</Link></Pair>
<Pair plain title="8th"><Link to="/spell/lesser_globe_of_invulnerability">Lesser globe of invulnerability</Link></Pair>
<Pair plain title="10th"><Link to="/spell/dream">Dream</Link></Pair>
<Pair plain title="12th"><Link to="/spell/globe_of_invulnerability">Globe of invulnerability</Link></Pair>
<Pair plain title="14th"><Link to="/spell/spell_turning">Spell turning</Link></Pair>
<Pair plain title="16th"><Link to="/spell/protection_from_spells">Protection from spells</Link></Pair>
<Pair plain title="18th"><Link to="/spell/mages_disjunction">Mage's disjunction</Link></Pair>
</Ability>
</>};
const _woodlands = {title: "Woodlands", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 89</Link></p>
<Ability id="woodlands" icon={["spell-book"]}>
<Pair single id="woodlands">Woodlands</Pair>
<Pair title="Info">The Woodlands patron grants the following spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/entangle">Entangle</Link></Pair>
<Pair plain title="4th"><Link to="/spell/accelerate_poison">Accelerate poison</Link></Pair>
<Pair plain title="6th"><Link to="/spell/lily_pad_stride">Lily pad stride</Link></Pair>
<Pair plain title="8th"><Link to="/spell/grove_of_respite">Grove of respite</Link></Pair>
<Pair plain title="10th"><Link to="/spell/tree_stride">Tree stride</Link></Pair>
<Pair plain title="12th"><Link to="/spell/repel_wood">Repel wood</Link></Pair>
<Pair plain title="14th"><Link to="/spell/animate_plants">Animate plants</Link></Pair>
<Pair plain title="16th"><Link to="/spell/control_plants">Control plants</Link></Pair>
<Pair plain title="18th"><Link to="/spell/shambler">Shambler</Link></Pair>
</Ability>
</>};
const _celestial_agenda = {title: "Celestial Agenda", addenda: ["uniquepatron"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven</Link></p>
<Ability id="celestial-agenda" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="celestial-agenda">Celestial Agenda</Pair>
<Pair title="Info">While good deities and empyreal lords have organized faiths to carry out their wills, powerfully ranked <Link to="/family/agathion">agathions</Link>, <Link to="/family/angel">angels</Link>, and <Link to="/family/archon">archons</Link> - and occasional intersectional councils of good outsiders - sometimes invest white witches with celestial might to defend the weak and heal the sick.</Pair>
<Pair title="Ability">You gain the <Link to="/hex/ward">ward</Link> hex at 1st level.</Pair>
<Pair title="Passive Ability">Your patron holds you to a higher standard: you must be of good alignment, and you take a -2 penalty on Bluff, Intimidate, Sleight of Hand, and other skill checks to deceive or threaten others.</Pair>
<Pair title="Available Patron Themes"><Link to="/patron/endurance">Endurance</Link>, <Link to="/patron/healing">Healing</Link>, <Link to="/patron/light">Light</Link>, <Link to="/patron/portents">Portents</Link></Pair>
<Pair title="Patron Spells">This unique patron grants these alternate spells at the listed witch levels.</Pair>
<Pair plain title="4th"><Link to="/spell/castigate">Castigate</Link></Pair>
<Pair plain title="10th"><Link to="/spell/rebuke">Rebuke</Link></Pair>
<Pair plain title="16th"><Link to="/spell/greater_planar_ally">Greater planar ally</Link> (good outsiders only)</Pair>
</Ability>
</>};
const _empath = {title: "Empath", addenda: ["uniquepatron"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven</Link></p>
<Ability id="empath" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="empath">Empath</Pair>
<Pair title="Info">Your patron is a manifestation of the collective living experience - mortal desire and purpose given direction by the beliefs of countless minds and hearts.</Pair>
<Pair title="Ability">You gain the <Link to="/hex/tongues">tongues</Link> hex at 1st level</Pair>
<Pair title="Passive Ability">You cannot help but feel the despair, pain, and other negative emotions in those around you, taking a -5 penalty on saving throws against emotion effects.</Pair>
<Pair title="Available Patron Themes"><Link to="/patron/ancestors">Ancestors</Link>, <Link to="/patron/mind">Mind</Link>, <Link to="/patron/spirits">Spirits</Link>, <Link to="/patron/wisdom">Wisdom</Link></Pair>
<Pair title="Patron Spells">This unique patron grants these alternate spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/burst_of_insight">Burst of insight</Link></Pair>
<Pair plain title="6th"><Link to="/spell/analyze_aura">Analyze aura</Link></Pair>
<Pair plain title="10th"><Link to="/spell/retrocognition">Retrocognition</Link></Pair>
</Ability>
</>};
const _fey_gifts = {title: "Fey Gifts", addenda: ["uniquepatron"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven</Link></p>
<Ability id="fey-gifts" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="fey-gifts">Fey Gifts</Pair>
<Pair title="Info">A powerful fey or other entity from the First World has offered you magic. You serve as an anchor and scrying focus in the Material Plane for your patron, but you also provide frequent amusement.</Pair>
<Pair title="Ability">You gain the <Link to="/hex/charm">charm</Link> hex at 1st level.</Pair>
<Pair title="Passive Ability">Your fey patron delights in your failure and injury and frequently jinxes you; once each day, the GM can demand you reroll a single ability check, attack roll, saving throw, or skill check and use the worse result.</Pair>
<Pair title="Available Patron Themes"><Link to="/patron/agility">Agility</Link>, <Link to="/patron/enchantment">Enchantment</Link>, <Link to="/patron/trickery">Trickery</Link>, <Link to="/patron/winter">Winter</Link></Pair>
<Pair title="Patron Spells">This unique patron grants these alternate spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/disguise_self">Disguise self</Link></Pair>
<Pair plain title="4th"><Link to="/spell/hideous_laughter">Hideous laughter</Link></Pair>
<Pair plain title="16th"><Link to="/spell/irresistible_dance">Irresistible dance</Link></Pair>
</Ability>
</>};
const _green_whispers = {title: "Green Whispers", addenda: ["uniquepatron"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven</Link></p>
<Ability id="green-whispers" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="green-whispers">Green Whispers</Pair>
<Pair title="Info">Your witch powers are a manifestation of the <Link to="/faith/green_faith">Green Faith</Link> or bestowed by a representative of natural forces, such as an ancient <Link to="/monster/treant">treant</Link> or nature spirit, who expects you to wield such gifts on its behalf.</Pair>
<Pair title="Ability">You gain the <Link to="/hex/feral_speech">feral speech</Link> hex at 1st level.</Pair>
<Pair title="Passive Ability">You cannot abide the touch of iron or steel; contact with either metal deals 1d3 points of damage each round, and wearing metal armor prevents you from casting spells until it is removed.</Pair>
<Pair title="Available Patron Themes"><Link to="/patron/animals">Animals</Link>, <Link to="/patron/endurance">Endurance</Link>, <Link to="/patron/moon">Moon</Link>, <Link to="/patron/transformation">Transformation</Link></Pair>
<Pair title="Patron Spells">This unique patron grants these alternate spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/entangle">Entangle</Link></Pair>
<Pair plain title="6th"><Link to="/spell/plant_growth">Plant growth</Link></Pair>
<Pair plain title="10th"><Link to="/spell/tree_stride">Tree stride</Link></Pair>
</Ability>
</>};
const _hags_calling = {title: "Hag's Calling", addenda: ["uniquepatron"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven</Link></p>
<Ability id="hags-calling" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="hags-calling">Hag's Calling</Pair>
<Pair title="Info">Hags of exceptional power - most often <Link to="/monster/mute_hag">mute hags</Link> and <Link to="/monster/dreamthief_hag">dreamthief hags</Link> - sometimes invest mortal agents with the same well of ancient power they have mastered. Hags most often invest their <Link to="/race/changeling">changeling</Link> daughters with such power, either once they have proven loyal or else to tempt them into wickedness.</Pair>
<Pair title="Ability">You gain the <Link to="/hex/coven">coven</Link> hex at 1st level.</Pair>
<Pair title="Passive Ability">You can neither use the <Link to="/rule/aid_another">aid another</Link> action nor receive benefits from others' aid another actions.</Pair>
<Pair title="Available Patron Themes"><Link to="/patron/moon">Moon</Link>, <Link to="/patron/plague">Plague</Link>, <Link to="/patron/shadow">Shadow</Link>, <Link to="/patron/vengeance">Vengeance</Link></Pair>
<Pair title="Patron Spells">This unique patron grants these alternate spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/disguise_self">Disguise self</Link></Pair>
<Pair plain title="8th"><Link to="/spell/sending">Sending</Link></Pair>
<Pair plain title="10th"><Link to="/spell/commune">Commune</Link> (hag/patron rather than deity)</Pair>
</Ability>
</>};
const _infernal_contract = {title: "Infernal Contract", addenda: ["uniquepatron"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven</Link></p>
<Ability id="infernal-contract" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="infernal-contract">Infernal Contract</Pair>
<Pair title="Info">Your power was brokered from a powerful <Link to="/family/daemon">daemon</Link>, <Link to="/family/demon">demon</Link>, or <Link to="/family/devil">devil</Link> to speed the corruption and moral decay of mortals. When you die, your soul goes to Abaddon, the Abyss, or Hell, and you can't be raised or resurrected except by extraordinary means - though bold service may earn you a favored position in damnation.</Pair>
<Pair title="Ability">You gain the <Link to="/hex/misfortune">misfortune</Link> hex at 1st level.</Pair>
<Pair title="Passive Ability">Your magic requires sacrifice; each day when you prepare spells, you must deal 1d6 points of damage to yourself as part of your infernal ritual, feeding the lost blood to your familiar.</Pair>
<Pair title="Available Patron Themes"><Link to="/patron/enchantment">Enchantment</Link>, <Link to="/patron/strength">Strength</Link>, <Link to="/patron/trickery">Trickery</Link>, <Link to="/patron/vengeance">Vengeance</Link></Pair>
<Pair title="Patron Spells">This unique patron grants these alternate spells at the listed witch levels.</Pair>
<Pair plain title="8th"><Link to="/spell/lesser_planar_ally">Lesser planar ally</Link></Pair>
<Pair plain title="12th"><Link to="/spell/planar_ally">Planar ally</Link></Pair>
<Pair plain title="16th"><Link to="/spell/greater_planar_ally">Greater planar ally</Link> (your bonus spells can be used to summon only the type of outsider your patron represents)</Pair>
<Pair title="At 5th Level">You must deal 2d6 damage to yourself to get your spells.</Pair>
<Pair title="At 10th Level">You must deal 3d6 damage to yourself to get your spells.</Pair>
<Pair title="At 15th Level">You must deal 4d6 damage to yourself to get your spells.</Pair>
<Pair title="At 20th Level">You must deal 5d6 damage to yourself to get your spells.</Pair>
</Ability>
</>};
const _shadowbound = {title: "Shadowbound", addenda: ["uniquepatron"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven</Link></p>
<Ability id="shadowbound" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="shadowbound">Shadowbound</Pair>
<Pair title="Info">Deep exposure to entities from the Plane of Shadow - <Link to="/family/kyton">kytons</Link>, <Link to="/family/nightshade">nightshades</Link>, <Link to="/monster/owb">owbs</Link>, and similar ethereal forces - has infused you with shadow.</Pair>
<Pair title="Ability">You gain the <Link to="/hex/disguise">disguise</Link> hex at 1st level.</Pair>
<Pair title="Passive Ability">You also gain <Link to="/umr/light_blindness">light blindness</Link>.</Pair>
<Pair title="Available Patron Themes"><Link to="/patron/death">Death</Link>, <Link to="/patron/deception">Deception</Link>, <Link to="/patron/ethereal">Ethereal</Link>, <Link to="/patron/shadow">Shadow</Link></Pair>
<Pair title="Patron Spells">This unique patron grants these alternate spells at the listed witch levels.</Pair>
<Pair plain title="8th"><Link to="/spell/shadow_conjuration">Shadow conjuration</Link></Pair>
<Pair plain title="12th"><Link to="/spell/shadow_walk">Shadow walk</Link></Pair>
<Pair plain title="16th"><Link to="/spell/greater_shadow_evocation">Greater shadow evocation</Link></Pair>
</Ability>
</>};
const _the_condition_of_all = {title: "The Condition of All", addenda: ["uniquepatron"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven</Link></p>
<Ability id="the-condition-of-all" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="the-condition-of-all">The Condition of All</Pair>
<Pair title="Info"><Link to="/family/aeon">Aeons</Link> are often patrons to witches, seeking out mortals who share their vested interest in some agenda that helps them promote the cosmic balance.</Pair>
<Pair title="Ability">You gain the <Link to="/hex/scar">scar</Link> hex at 1st level.</Pair>
<Pair title="Passive Ability">Your patron requires unwavering commitment to their cause, and you lose your spellcasting and hexes (but not your familiar) if your alignment changes after taking your first witch level; you regain your spellcasting and hexes once you revert to your original alignment.</Pair>
<Pair title="Available Patron Themes"><Link to="/patron/elements">Elements</Link>, <Link to="/patron/time">Time</Link>, <Link to="/patron/transformation">Transformation</Link>, <Link to="/patron/wisdom">Wisdom</Link></Pair>
<Pair title="Patron Spells">This unique patron grants these alternate spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/forbid_action">Forbid action</Link></Pair>
<Pair plain title="8th"><Link to="/spell/dismissal">Dismissal</Link></Pair>
<Pair plain title="12th"><Link to="/spell/geas_quest">Geas/quest</Link></Pair>
</Ability>
</>};
const _touched_by_the_outer_gods = {title: "Touched by the Outer Gods", addenda: ["uniquepatron"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven</Link></p>
<Ability id="touched-by-the-outer-gods" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="touched-by-the-outer-gods">Touched by the Outer Gods</Pair>
<Pair title="Info">Your powers hail from an incomprehensible being from beyond the stars, whose motivations and needs erode your psyche.</Pair>
<Pair title="Ability">You gain the <Link to="/hex/unnerve_beasts">unnerve beasts</Link> hex at 1st level.</Pair>
<Pair title="Passive Ability">You take a -2 penalty on saving throws against confusion and emotion effects and are affected by such effects for at least 1 round even on a successful saving throw.</Pair>
<Pair title="Available Patron Themes"><Link to="/patron/insanity">Insanity</Link>, <Link to="/patron/occult">Occult</Link>, <Link to="/patron/stars">Stars</Link>, <Link to="/patron/transformation">Transformation</Link></Pair>
<Pair title="Patron Spells">This unique patron grants these alternate spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/lesser_confusion">Lesser confusion</Link></Pair>
<Pair plain title="8th"><Link to="/spell/dreadscape">Dreadscape</Link></Pair>
<Pair plain title="10th"><Link to="/spell/compelling_rant">Compelling rant</Link></Pair>
</Ability>
</>};
export default {not_found:_not_found,agility:_agility,ancestors:_ancestors,animals:_animals,aurora:_aurora,autumn:_autumn,boundaries:_boundaries,conspiracies:_conspiracies,death:_death,decadence:_decadence,deception:_deception,devotion:_devotion,elements:_elements,enchantment:_enchantment,endurance:_endurance,entropy:_entropy,ethereal:_ethereal,fate:_fate,healing:_healing,insanity:_insanity,jynx:_jynx,light:_light,mercy:_mercy,mind:_mind,moon:_moon,mountain:_mountain,nightmares:_nightmares,occult:_occult,peace:_peace,plague:_plague,plant:_plant,portents:_portents,protection:_protection,recovery:_recovery,revenge:_revenge,rot:_rot,shadow:_shadow,space:_space,spirits:_spirits,spring:_spring,stars:_stars,storms:_storms,strength:_strength,summer:_summer,thorns:_thorns,time:_time,transformation:_transformation,trickery:_trickery,vengeance:_vengeance,water:_water,winter:_winter,wisdom:_wisdom,woodlands:_woodlands,celestial_agenda:_celestial_agenda,empath:_empath,fey_gifts:_fey_gifts,green_whispers:_green_whispers,hags_calling:_hags_calling,infernal_contract:_infernal_contract,shadowbound:_shadowbound,the_condition_of_all:_the_condition_of_all,touched_by_the_outer_gods:_touched_by_the_outer_gods}