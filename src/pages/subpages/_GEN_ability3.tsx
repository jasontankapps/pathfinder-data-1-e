import {IonRippleEffect,IonIcon} from '@ionic/react';
import DisplayTable from '../../components/DisplayTable';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _patrons = {hasJL:true,title: "Witch Patrons", topLink: ["Witch","class/witch"], jsx: <div className="compilation"><div className="jumpList" id="ability-patrons-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-patrons-unique-patrons">Unique Patrons</InnerLink></li></ul></div><h2 id="ability-patrons-witch-patrons">Witch Patrons</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link><br/>At 1st level, when a witch gains her familiar, she must also select a patron. This patron is a vague and mysterious force, granting the witch power for reasons that she might not entirely understand. While these forces need not be named, they typically hold influence over one of the following forces. At 2nd level, and every two levels thereafter, a witch's patron adds new spells to a witch's list of spells known. These spells are also automatically added to the list of spells stored by the familiar. The spells gained depend upon the patron chosen. Each patron is listed by its theme. Its actual name is up to the GM and the witch to decide.</p>
<blockquote className="hanging">
<Ability id="patronagility-agility-fn1" icon={["spell-book"]}>
<Pair single id="patronagility-agility-fn1"><Link to="/patron/agility">⮞</Link> Agility <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-1" id="ability-patrons-fake-fn-1" data-hash-target to="ability-patrons-fake-fn-1-target">1</InnerLink></sup></Pair>
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
<Ability id="patronancestors-ancestors-fn2" icon={["spell-book"]}>
<Pair single id="patronancestors-ancestors-fn2"><Link to="/patron/ancestors">⮞</Link> Ancestors <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-2" id="ability-patrons-fake-fn-2" data-hash-target to="ability-patrons-fake-fn-2-target">2</InnerLink></sup></Pair>
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
<Ability id="patronanimals-animals-fn1-2" icon={["spell-book"]}>
<Pair single id="patronanimals-animals-fn1-2"><Link to="/patron/animals">⮞</Link> Animals <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-1.2" id="ability-patrons-fake-fn-1.2" data-hash-target to="ability-patrons-fake-fn-1-target">1</InnerLink></sup></Pair>
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
<Ability id="patronaurora-aurora-fn3" icon={["spell-book"]}>
<Pair single id="patronaurora-aurora-fn3"><Link to="/patron/aurora">⮞</Link> Aurora <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-3" id="ability-patrons-fake-fn-3" data-hash-target to="ability-patrons-fake-fn-3-target">3</InnerLink></sup></Pair>
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
<Ability id="patronautumn-autumn-fn4" icon={["spell-book"]}>
<Pair single id="patronautumn-autumn-fn4"><Link to="/patron/autumn">⮞</Link> Autumn <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-4" id="ability-patrons-fake-fn-4" data-hash-target to="ability-patrons-fake-fn-4-target">4</InnerLink></sup></Pair>
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
<Ability id="patronboundaries-boundaries-fn5" icon={["spell-book"]}>
<Pair single id="patronboundaries-boundaries-fn5"><Link to="/patron/boundaries">⮞</Link> Boundaries <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-5" id="ability-patrons-fake-fn-5" data-hash-target to="ability-patrons-fake-fn-5-target">5</InnerLink></sup></Pair>
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
<Ability id="patronconspiracies-conspiracies-fn6" icon={["spell-book"]}>
<Pair single id="patronconspiracies-conspiracies-fn6"><Link to="/patron/conspiracies">⮞</Link> Conspiracies <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-6" id="ability-patrons-fake-fn-6" data-hash-target to="ability-patrons-fake-fn-6-target">6</InnerLink></sup></Pair>
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
<Ability id="patrondeath-death-fn2-2" icon={["spell-book"]}>
<Pair single id="patrondeath-death-fn2-2"><Link to="/patron/death">⮞</Link> Death <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-2.2" id="ability-patrons-fake-fn-2.2" data-hash-target to="ability-patrons-fake-fn-2-target">2</InnerLink></sup></Pair>
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
<Ability id="patrondecadence-decadence-fn6-2" icon={["spell-book"]}>
<Pair single id="patrondecadence-decadence-fn6-2"><Link to="/patron/decadence">⮞</Link> Decadence <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-6.2" id="ability-patrons-fake-fn-6.2" data-hash-target to="ability-patrons-fake-fn-6-target">6</InnerLink></sup></Pair>
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
<Ability id="patrondeception-deception-fn1-3" icon={["spell-book"]}>
<Pair single id="patrondeception-deception-fn1-3"><Link to="/patron/deception">⮞</Link> Deception <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-1.3" id="ability-patrons-fake-fn-1.3" data-hash-target to="ability-patrons-fake-fn-1-target">1</InnerLink></sup></Pair>
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
<Ability id="patrondevotion-devotion-fn5-2" icon={["spell-book"]}>
<Pair single id="patrondevotion-devotion-fn5-2"><Link to="/patron/devotion">⮞</Link> Devotion <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-5.2" id="ability-patrons-fake-fn-5.2" data-hash-target to="ability-patrons-fake-fn-5-target">5</InnerLink></sup></Pair>
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
<Ability id="patronelements-elements-fn1-4" icon={["spell-book"]}>
<Pair single id="patronelements-elements-fn1-4"><Link to="/patron/elements">⮞</Link> Elements <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-1.4" id="ability-patrons-fake-fn-1.4" data-hash-target to="ability-patrons-fake-fn-1-target">1</InnerLink></sup></Pair>
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
<Ability id="patronenchantment-enchantment-fn2-3" icon={["spell-book"]}>
<Pair single id="patronenchantment-enchantment-fn2-3"><Link to="/patron/enchantment">⮞</Link> Enchantment <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-2.3" id="ability-patrons-fake-fn-2.3" data-hash-target to="ability-patrons-fake-fn-2-target">2</InnerLink></sup></Pair>
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
<Ability id="patronendurance-endurance-fn1-5" icon={["spell-book"]}>
<Pair single id="patronendurance-endurance-fn1-5"><Link to="/patron/endurance">⮞</Link> Endurance <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-1.5" id="ability-patrons-fake-fn-1.5" data-hash-target to="ability-patrons-fake-fn-1-target">1</InnerLink></sup></Pair>
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
<Ability id="patronentropy-entropy-fn6-3" icon={["spell-book"]}>
<Pair single id="patronentropy-entropy-fn6-3"><Link to="/patron/entropy">⮞</Link> Entropy <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-6.3" id="ability-patrons-fake-fn-6.3" data-hash-target to="ability-patrons-fake-fn-6-target">6</InnerLink></sup></Pair>
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
<Ability id="patronethereal-ethereal-fn7" icon={["spell-book"]}>
<Pair single id="patronethereal-ethereal-fn7"><Link to="/patron/ethereal">⮞</Link> Ethereal <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-7" id="ability-patrons-fake-fn-7" data-hash-target to="ability-patrons-fake-fn-7-target">7</InnerLink></sup></Pair>
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
<Ability id="patronfate-fate-fn8" icon={["spell-book"]}>
<Pair single id="patronfate-fate-fn8"><Link to="/patron/fate">⮞</Link> Fate <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-8" id="ability-patrons-fake-fn-8" data-hash-target to="ability-patrons-fake-fn-8-target">8</InnerLink></sup></Pair>
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
<Ability id="patronhealing-healing-fn2-4" icon={["spell-book"]}>
<Pair single id="patronhealing-healing-fn2-4"><Link to="/patron/healing">⮞</Link> Healing <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-2.4" id="ability-patrons-fake-fn-2.4" data-hash-target to="ability-patrons-fake-fn-2-target">2</InnerLink></sup></Pair>
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
<Ability id="patroninsanity-insanity-fn2-5" icon={["spell-book"]}>
<Pair single id="patroninsanity-insanity-fn2-5"><Link to="/patron/insanity">⮞</Link> Insanity <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-2.5" id="ability-patrons-fake-fn-2.5" data-hash-target to="ability-patrons-fake-fn-2-target">2</InnerLink></sup></Pair>
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
<Ability id="patronjynx-jynx-fn9" icon={["spell-book"]}>
<Pair single id="patronjynx-jynx-fn9"><Link to="/patron/jynx">⮞</Link> Jynx <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-9" id="ability-patrons-fake-fn-9" data-hash-target to="ability-patrons-fake-fn-9-target">9</InnerLink></sup></Pair>
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
<Ability id="patronlight-light-fn2-6" icon={["spell-book"]}>
<Pair single id="patronlight-light-fn2-6"><Link to="/patron/light">⮞</Link> Light <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-2.6" id="ability-patrons-fake-fn-2.6" data-hash-target to="ability-patrons-fake-fn-2-target">2</InnerLink></sup></Pair>
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
<Ability id="patronmercy-mercy-fn9-2" icon={["spell-book"]}>
<Pair single id="patronmercy-mercy-fn9-2"><Link to="/patron/mercy">⮞</Link> Mercy <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-9.2" id="ability-patrons-fake-fn-9.2" data-hash-target to="ability-patrons-fake-fn-9-target">9</InnerLink></sup></Pair>
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
<Ability id="patronmind-mind-fn7-2" icon={["spell-book"]}>
<Pair single id="patronmind-mind-fn7-2"><Link to="/patron/mind">⮞</Link> Mind <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-7.2" id="ability-patrons-fake-fn-7.2" data-hash-target to="ability-patrons-fake-fn-7-target">7</InnerLink></sup></Pair>
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
<Ability id="patronmoon-moon-fn2-7" icon={["spell-book"]}>
<Pair single id="patronmoon-moon-fn2-7"><Link to="/patron/moon">⮞</Link> Moon <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-2.7" id="ability-patrons-fake-fn-2.7" data-hash-target to="ability-patrons-fake-fn-2-target">2</InnerLink></sup></Pair>
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
<Ability id="patronmountain-mountain-fn10" icon={["spell-book"]}>
<Pair single id="patronmountain-mountain-fn10"><Link to="/patron/mountain">⮞</Link> Mountain <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-10" id="ability-patrons-fake-fn-10" data-hash-target to="ability-patrons-fake-fn-10-target">10</InnerLink></sup></Pair>
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
<Ability id="patronnightmares-nightmares-fn6-4" icon={["spell-book"]}>
<Pair single id="patronnightmares-nightmares-fn6-4"><Link to="/patron/nightmares">⮞</Link> Nightmares <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-6.4" id="ability-patrons-fake-fn-6.4" data-hash-target to="ability-patrons-fake-fn-6-target">6</InnerLink></sup></Pair>
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
<Ability id="patronoccult-occult-fn2-8" icon={["spell-book"]}>
<Pair single id="patronoccult-occult-fn2-8"><Link to="/patron/occult">⮞</Link> Occult <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-2.8" id="ability-patrons-fake-fn-2.8" data-hash-target to="ability-patrons-fake-fn-2-target">2</InnerLink></sup></Pair>
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
<Ability id="patronpeace-peace-fn5-3" icon={["spell-book"]}>
<Pair single id="patronpeace-peace-fn5-3"><Link to="/patron/peace">⮞</Link> Peace <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-5.3" id="ability-patrons-fake-fn-5.3" data-hash-target to="ability-patrons-fake-fn-5-target">5</InnerLink></sup></Pair>
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
<Ability id="patronplague-plague-fn1-6" icon={["spell-book"]}>
<Pair single id="patronplague-plague-fn1-6"><Link to="/patron/plague">⮞</Link> Plague <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-1.6" id="ability-patrons-fake-fn-1.6" data-hash-target to="ability-patrons-fake-fn-1-target">1</InnerLink></sup></Pair>
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
<Ability id="patronplant-plant-fn11" icon={["spell-book"]}>
<Pair single id="patronplant-plant-fn11"><Link to="/patron/plant">⮞</Link> Plant <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-11" id="ability-patrons-fake-fn-11" data-hash-target to="ability-patrons-fake-fn-11-target">11</InnerLink></sup></Pair>
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
<Ability id="patronportents-portents-fn2-9" icon={["spell-book"]}>
<Pair single id="patronportents-portents-fn2-9"><Link to="/patron/portents">⮞</Link> Portents <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-2.9" id="ability-patrons-fake-fn-2.9" data-hash-target to="ability-patrons-fake-fn-2-target">2</InnerLink></sup></Pair>
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
<Ability id="patronprotection-protection-fn12" icon={["spell-book"]}>
<Pair single id="patronprotection-protection-fn12"><Link to="/patron/protection">⮞</Link> Protection <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-12" id="ability-patrons-fake-fn-12" data-hash-target to="ability-patrons-fake-fn-12-target">12</InnerLink></sup></Pair>
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
<Ability id="patronrecovery-recovery-fn13" icon={["spell-book"]}>
<Pair single id="patronrecovery-recovery-fn13"><Link to="/patron/recovery">⮞</Link> Recovery <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-13" id="ability-patrons-fake-fn-13" data-hash-target to="ability-patrons-fake-fn-13-target">13</InnerLink></sup></Pair>
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
<Ability id="patronrevenge-revenge-fn6-5" icon={["spell-book"]}>
<Pair single id="patronrevenge-revenge-fn6-5"><Link to="/patron/revenge">⮞</Link> Revenge <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-6.5" id="ability-patrons-fake-fn-6.5" data-hash-target to="ability-patrons-fake-fn-6-target">6</InnerLink></sup></Pair>
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
<Ability id="patronrot-rot-fn9-3" icon={["spell-book"]}>
<Pair single id="patronrot-rot-fn9-3"><Link to="/patron/rot">⮞</Link> Rot <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-9.3" id="ability-patrons-fake-fn-9.3" data-hash-target to="ability-patrons-fake-fn-9-target">9</InnerLink></sup></Pair>
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
<Ability id="patronshadow-shadow-fn1-7" icon={["spell-book"]}>
<Pair single id="patronshadow-shadow-fn1-7"><Link to="/patron/shadow">⮞</Link> Shadow <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-1.7" id="ability-patrons-fake-fn-1.7" data-hash-target to="ability-patrons-fake-fn-1-target">1</InnerLink></sup></Pair>
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
<Ability id="patronspace-space-fn6-6" icon={["spell-book"]}>
<Pair single id="patronspace-space-fn6-6"><Link to="/patron/space">⮞</Link> Space <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-6.6" id="ability-patrons-fake-fn-6.6" data-hash-target to="ability-patrons-fake-fn-6-target">6</InnerLink></sup></Pair>
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
<Ability id="patronspirits-spirits-fn2-10" icon={["spell-book"]}>
<Pair single id="patronspirits-spirits-fn2-10"><Link to="/patron/spirits">⮞</Link> Spirits <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-2.10" id="ability-patrons-fake-fn-2.10" data-hash-target to="ability-patrons-fake-fn-2-target">2</InnerLink></sup></Pair>
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
<Ability id="patronspring-spring-fn4-2" icon={["spell-book"]}>
<Pair single id="patronspring-spring-fn4-2"><Link to="/patron/spring">⮞</Link> Spring <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-4.2" id="ability-patrons-fake-fn-4.2" data-hash-target to="ability-patrons-fake-fn-4-target">4</InnerLink></sup></Pair>
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
<Ability id="patronstars-stars-fn2-11" icon={["spell-book"]}>
<Pair single id="patronstars-stars-fn2-11"><Link to="/patron/stars">⮞</Link> Stars <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-2.11" id="ability-patrons-fake-fn-2.11" data-hash-target to="ability-patrons-fake-fn-2-target">2</InnerLink></sup></Pair>
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
<Ability id="patronstorms-storms-fn10-2" icon={["spell-book"]}>
<Pair single id="patronstorms-storms-fn10-2"><Link to="/patron/storms">⮞</Link> Storms <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-10.2" id="ability-patrons-fake-fn-10.2" data-hash-target to="ability-patrons-fake-fn-10-target">10</InnerLink></sup></Pair>
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
<Ability id="patronstrength-strength-fn1-8" icon={["spell-book"]}>
<Pair single id="patronstrength-strength-fn1-8"><Link to="/patron/strength">⮞</Link> Strength <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-1.8" id="ability-patrons-fake-fn-1.8" data-hash-target to="ability-patrons-fake-fn-1-target">1</InnerLink></sup></Pair>
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
<Ability id="patronsummer-summer-fn10-3-fn4-3" icon={["spell-book"]}>
<Pair single id="patronsummer-summer-fn10-3-fn4-3"><Link to="/patron/summer">⮞</Link> Summer <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-10.3" id="ability-patrons-fake-fn-10.3" data-hash-target to="ability-patrons-fake-fn-10-target">10</InnerLink></sup> <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-4.3" id="ability-patrons-fake-fn-4.3" data-hash-target to="ability-patrons-fake-fn-4-target">4</InnerLink></sup></Pair>
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
<Ability id="patronthorns-thorns-fn10-4-fn4-4" icon={["spell-book"]}>
<Pair single id="patronthorns-thorns-fn10-4-fn4-4"><Link to="/patron/thorns">⮞</Link> Thorns <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-10.4" id="ability-patrons-fake-fn-10.4" data-hash-target to="ability-patrons-fake-fn-10-target">10</InnerLink></sup> <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-4.4" id="ability-patrons-fake-fn-4.4" data-hash-target to="ability-patrons-fake-fn-4-target">4</InnerLink></sup></Pair>
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
<Ability id="patrontime-time-fn2-12" icon={["spell-book"]}>
<Pair single id="patrontime-time-fn2-12"><Link to="/patron/time">⮞</Link> Time <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-2.12" id="ability-patrons-fake-fn-2.12" data-hash-target to="ability-patrons-fake-fn-2-target">2</InnerLink></sup></Pair>
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
<Ability id="patrontransformation-transformation-fn1-9" icon={["spell-book"]}>
<Pair single id="patrontransformation-transformation-fn1-9"><Link to="/patron/transformation">⮞</Link> Transformation <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-1.9" id="ability-patrons-fake-fn-1.9" data-hash-target to="ability-patrons-fake-fn-1-target">1</InnerLink></sup></Pair>
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
<Pair title="Special">When a witch with a Transformation patron gains the ability to choose a major hex, they may learn an <Link to="/ability/annointings">annointing</Link> in place of a new hex.</Pair>
</Ability>
<Ability id="patrontrickery-trickery-fn1-10" icon={["spell-book"]}>
<Pair single id="patrontrickery-trickery-fn1-10"><Link to="/patron/trickery">⮞</Link> Trickery <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-1.10" id="ability-patrons-fake-fn-1.10" data-hash-target to="ability-patrons-fake-fn-1-target">1</InnerLink></sup></Pair>
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
<Ability id="patronvengeance-vengeance-fn2-13" icon={["spell-book"]}>
<Pair single id="patronvengeance-vengeance-fn2-13"><Link to="/patron/vengeance">⮞</Link> Vengeance <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-2.13" id="ability-patrons-fake-fn-2.13" data-hash-target to="ability-patrons-fake-fn-2-target">2</InnerLink></sup></Pair>
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
<Ability id="patronwater-water-fn1-11" icon={["spell-book"]}>
<Pair single id="patronwater-water-fn1-11"><Link to="/patron/water">⮞</Link> Water <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-1.11" id="ability-patrons-fake-fn-1.11" data-hash-target to="ability-patrons-fake-fn-1-target">1</InnerLink></sup></Pair>
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
<Ability id="patronwinter-winter-fn2-14-fn4-5" icon={["spell-book"]}>
<Pair single id="patronwinter-winter-fn2-14-fn4-5"><Link to="/patron/winter">⮞</Link> Winter <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-2.14" id="ability-patrons-fake-fn-2.14" data-hash-target to="ability-patrons-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-4.5" id="ability-patrons-fake-fn-4.5" data-hash-target to="ability-patrons-fake-fn-4-target">4</InnerLink></sup></Pair>
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
<Ability id="patronwisdom-wisdom-fn1-12" icon={["spell-book"]}>
<Pair single id="patronwisdom-wisdom-fn1-12"><Link to="/patron/wisdom">⮞</Link> Wisdom <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-1.12" id="ability-patrons-fake-fn-1.12" data-hash-target to="ability-patrons-fake-fn-1-target">1</InnerLink></sup></Pair>
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
<Ability id="patronwoodlands-woodlands-fn14" icon={["spell-book"]}>
<Pair single id="patronwoodlands-woodlands-fn14"><Link to="/patron/woodlands">⮞</Link> Woodlands <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-14" id="ability-patrons-fake-fn-14" data-hash-target to="ability-patrons-fake-fn-14-target">14</InnerLink></sup></Pair>
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
</blockquote>
<h3 id="ability-patrons-unique-patrons" data-hash-target>Unique Patrons</h3>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven</Link><br/>Witch patrons are enigmatic entities, sometimes fair minded and other times malevolent. Some are demigods or powerful spirits, such as those that grant shamans their spellcasting. Others are manifestations of cosmic forces, created by the certainty of mortals and the fundamental need for balance in much the same way aeons manifest. While kindly patrons are rare - attracting worshipers more readily than agents - the majority are high-minded and neutral figures. They dispense arcane power to those whose interests and mindsets align with their needs, and once a witch drifts from the cause or refuses to pay the price for such power, her patron divests the spellcaster of her powers and departs. Wicked patrons enjoy longer-lasting relationships, however, manipulating the witches' minds and punishing disobedience in a manner far more personal than an evil god. The familiar of a wicked patron becomes equal parts power source and prison guard, forever studying its charge for disobedience.</p>
<p>The various published witch patron themes present a wide array of concepts and priorities to align with a large variety of supernatural beings. Some specific patrons, however, might offer variations within the spells they grant. Special patrons swap out the spells normally provided by a patron theme at specific levels, and grant a specific <Link to="/ability/hexes">hex</Link> and drawback at 1st level. Once a specific patron has been selected, a witch cannot change her patron or raise a hand against that entity without losing her spellcasting, hexes, and familiar. These categories are limited in the patron themes they can provide; their witches must select from one of the four listed for each entry. These patrons are extraordinary examples of their kind, often invested with unique or mythic powers and pursuing long-term agendas measured in centuries or eons.</p>
<Ability id="patroncelestialagenda-celestial-agenda-fn15" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="patroncelestialagenda-celestial-agenda-fn15"><Link to="/patron/celestial_agenda">⮞</Link> Celestial Agenda <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-15" id="ability-patrons-fake-fn-15" data-hash-target to="ability-patrons-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Info">While good deities and empyreal lords have organized faiths to carry out their wills, powerfully ranked <Link to="/family/agathion">agathions</Link>, <Link to="/family/angel">angels</Link>, and <Link to="/family/archon">archons</Link> - and occasional intersectional councils of good outsiders - sometimes invest white witches with celestial might to defend the weak and heal the sick.</Pair>
<Pair title="Ability">You gain the <Link to="/hex/ward">ward</Link> hex at 1st level.</Pair>
<Pair title="Passive Ability">Your patron holds you to a higher standard: you must be of good alignment, and you take a -2 penalty on Bluff, Intimidate, Sleight of Hand, and other skill checks to deceive or threaten others.</Pair>
<Pair title="Available Patron Themes"><Link to="/patron/endurance">Endurance</Link>, <Link to="/patron/healing">Healing</Link>, <Link to="/patron/light">Light</Link>, <Link to="/patron/portents">Portents</Link></Pair>
<Pair title="Patron Spells">This unique patron grants these alternate spells at the listed witch levels.</Pair>
<Pair plain title="4th"><Link to="/spell/castigate">Castigate</Link></Pair>
<Pair plain title="10th"><Link to="/spell/rebuke">Rebuke</Link></Pair>
<Pair plain title="16th"><Link to="/spell/greater_planar_ally">Greater planar ally</Link> (good outsiders only)</Pair>
</Ability>
<Ability id="patronempath-empath-fn15-2" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="patronempath-empath-fn15-2"><Link to="/patron/empath">⮞</Link> Empath <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-15.2" id="ability-patrons-fake-fn-15.2" data-hash-target to="ability-patrons-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Info">Your patron is a manifestation of the collective living experience - mortal desire and purpose given direction by the beliefs of countless minds and hearts.</Pair>
<Pair title="Ability">You gain the <Link to="/hex/tongues">tongues</Link> hex at 1st level</Pair>
<Pair title="Passive Ability">You cannot help but feel the despair, pain, and other negative emotions in those around you, taking a -5 penalty on saving throws against emotion effects.</Pair>
<Pair title="Available Patron Themes"><Link to="/patron/ancestors">Ancestors</Link>, <Link to="/patron/mind">Mind</Link>, <Link to="/patron/spirits">Spirits</Link>, <Link to="/patron/wisdom">Wisdom</Link></Pair>
<Pair title="Patron Spells">This unique patron grants these alternate spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/burst_of_insight">Burst of insight</Link></Pair>
<Pair plain title="6th"><Link to="/spell/analyze_aura">Analyze aura</Link></Pair>
<Pair plain title="10th"><Link to="/spell/retrocognition">Retrocognition</Link></Pair>
</Ability>
<Ability id="patronfeygifts-fey-gifts-fn15-3" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="patronfeygifts-fey-gifts-fn15-3"><Link to="/patron/fey_gifts">⮞</Link> Fey Gifts <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-15.3" id="ability-patrons-fake-fn-15.3" data-hash-target to="ability-patrons-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Info">A powerful fey or other entity from the First World has offered you magic. You serve as an anchor and scrying focus in the Material Plane for your patron, but you also provide frequent amusement.</Pair>
<Pair title="Ability">You gain the <Link to="/hex/charm">charm</Link> hex at 1st level.</Pair>
<Pair title="Passive Ability">Your fey patron delights in your failure and injury and frequently jinxes you; once each day, the GM can demand you reroll a single ability check, attack roll, saving throw, or skill check and use the worse result.</Pair>
<Pair title="Available Patron Themes"><Link to="/patron/agility">Agility</Link>, <Link to="/patron/enchantment">Enchantment</Link>, <Link to="/patron/trickery">Trickery</Link>, <Link to="/patron/winter">Winter</Link></Pair>
<Pair title="Patron Spells">This unique patron grants these alternate spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/disguise_self">Disguise self</Link></Pair>
<Pair plain title="4th"><Link to="/spell/hideous_laughter">Hideous laughter</Link></Pair>
<Pair plain title="16th"><Link to="/spell/irresistible_dance">Irresistible dance</Link></Pair>
</Ability>
<Ability id="patrongreenwhispers-green-whispers-fn15-4" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="patrongreenwhispers-green-whispers-fn15-4"><Link to="/patron/green_whispers">⮞</Link> Green Whispers <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-15.4" id="ability-patrons-fake-fn-15.4" data-hash-target to="ability-patrons-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Info">Your witch powers are a manifestation of the <Link to="/faith/green_faith">Green Faith</Link> or bestowed by a representative of natural forces, such as an ancient <Link to="/monster/treant">treant</Link> or nature spirit, who expects you to wield such gifts on its behalf.</Pair>
<Pair title="Ability">You gain the <Link to="/hex/feral_speech">feral speech</Link> hex at 1st level.</Pair>
<Pair title="Passive Ability">You cannot abide the touch of iron or steel; contact with either metal deals 1d3 points of damage each round, and wearing metal armor prevents you from casting spells until it is removed.</Pair>
<Pair title="Available Patron Themes"><Link to="/patron/animals">Animals</Link>, <Link to="/patron/endurance">Endurance</Link>, <Link to="/patron/moon">Moon</Link>, <Link to="/patron/transformation">Transformation</Link></Pair>
<Pair title="Patron Spells">This unique patron grants these alternate spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/entangle">Entangle</Link></Pair>
<Pair plain title="6th"><Link to="/spell/plant_growth">Plant growth</Link></Pair>
<Pair plain title="10th"><Link to="/spell/tree_stride">Tree stride</Link></Pair>
</Ability>
<Ability id="patronhagscalling-hags-calling-fn15-5" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="patronhagscalling-hags-calling-fn15-5"><Link to="/patron/hags_calling">⮞</Link> Hag's Calling <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-15.5" id="ability-patrons-fake-fn-15.5" data-hash-target to="ability-patrons-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Info">Hags of exceptional power - most often <Link to="/monster/mute_hag">mute hags</Link> and <Link to="/monster/dreamthief_hag">dreamthief hags</Link> - sometimes invest mortal agents with the same well of ancient power they have mastered. Hags most often invest their <Link to="/race/changeling">changeling</Link> daughters with such power, either once they have proven loyal or else to tempt them into wickedness.</Pair>
<Pair title="Ability">You gain the <Link to="/hex/coven">coven</Link> hex at 1st level.</Pair>
<Pair title="Passive Ability">You can neither use the <Link to="/rule/aid_another">aid another</Link> action nor receive benefits from others' aid another actions.</Pair>
<Pair title="Available Patron Themes"><Link to="/patron/moon">Moon</Link>, <Link to="/patron/plague">Plague</Link>, <Link to="/patron/shadow">Shadow</Link>, <Link to="/patron/vengeance">Vengeance</Link></Pair>
<Pair title="Patron Spells">This unique patron grants these alternate spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/disguise_self">Disguise self</Link></Pair>
<Pair plain title="8th"><Link to="/spell/sending">Sending</Link></Pair>
<Pair plain title="10th"><Link to="/spell/commune">Commune</Link> (hag/patron rather than deity)</Pair>
</Ability>
<Ability id="patroninfernalcontract-infernal-contract-fn15-6" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="patroninfernalcontract-infernal-contract-fn15-6"><Link to="/patron/infernal_contract">⮞</Link> Infernal Contract <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-15.6" id="ability-patrons-fake-fn-15.6" data-hash-target to="ability-patrons-fake-fn-15-target">15</InnerLink></sup></Pair>
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
<Ability id="patronshadowbound-shadowbound-fn15-7" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="patronshadowbound-shadowbound-fn15-7"><Link to="/patron/shadowbound">⮞</Link> Shadowbound <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-15.7" id="ability-patrons-fake-fn-15.7" data-hash-target to="ability-patrons-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Info">Deep exposure to entities from the Plane of Shadow - <Link to="/family/kyton">kytons</Link>, <Link to="/family/nightshade">nightshades</Link>, <Link to="/monster/owb">owbs</Link>, and similar ethereal forces - has infused you with shadow.</Pair>
<Pair title="Ability">You gain the <Link to="/hex/disguise">disguise</Link> hex at 1st level.</Pair>
<Pair title="Passive Ability">You also gain <Link to="/umr/light_blindness">light blindness</Link>.</Pair>
<Pair title="Available Patron Themes"><Link to="/patron/death">Death</Link>, <Link to="/patron/deception">Deception</Link>, <Link to="/patron/ethereal">Ethereal</Link>, <Link to="/patron/shadow">Shadow</Link></Pair>
<Pair title="Patron Spells">This unique patron grants these alternate spells at the listed witch levels.</Pair>
<Pair plain title="8th"><Link to="/spell/shadow_conjuration">Shadow conjuration</Link></Pair>
<Pair plain title="12th"><Link to="/spell/shadow_walk">Shadow walk</Link></Pair>
<Pair plain title="16th"><Link to="/spell/greater_shadow_evocation">Greater shadow evocation</Link></Pair>
</Ability>
<Ability id="patrontheconditionofall-the-condition-of-all-fn15-8" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="patrontheconditionofall-the-condition-of-all-fn15-8"><Link to="/patron/the_condition_of_all">⮞</Link> The Condition of All <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-15.8" id="ability-patrons-fake-fn-15.8" data-hash-target to="ability-patrons-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Info"><Link to="/family/aeon">Aeons</Link> are often patrons to witches, seeking out mortals who share their vested interest in some agenda that helps them promote the cosmic balance.</Pair>
<Pair title="Ability">You gain the <Link to="/hex/scar">scar</Link> hex at 1st level.</Pair>
<Pair title="Passive Ability">Your patron requires unwavering commitment to their cause, and you lose your spellcasting and hexes (but not your familiar) if your alignment changes after taking your first witch level; you regain your spellcasting and hexes once you revert to your original alignment.</Pair>
<Pair title="Available Patron Themes"><Link to="/patron/elements">Elements</Link>, <Link to="/patron/time">Time</Link>, <Link to="/patron/transformation">Transformation</Link>, <Link to="/patron/wisdom">Wisdom</Link></Pair>
<Pair title="Patron Spells">This unique patron grants these alternate spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/forbid_action">Forbid action</Link></Pair>
<Pair plain title="8th"><Link to="/spell/dismissal">Dismissal</Link></Pair>
<Pair plain title="12th"><Link to="/spell/geas_quest">Geas/quest</Link></Pair>
</Ability>
<Ability id="patrontouchedbytheoutergods-touched-by-the-outer-gods-fn15-9" icon={["stairs-goal","broken-shield","spell-book"]}>
<Pair single id="patrontouchedbytheoutergods-touched-by-the-outer-gods-fn15-9"><Link to="/patron/touched_by_the_outer_gods">⮞</Link> Touched by the Outer Gods <sup><InnerLink showBacklink="backlink-ability-patrons-fake-fn-15.9" id="ability-patrons-fake-fn-15.9" data-hash-target to="ability-patrons-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Info">Your powers hail from an incomprehensible being from beyond the stars, whose motivations and needs erode your psyche.</Pair>
<Pair title="Ability">You gain the <Link to="/hex/unnerve_beasts">unnerve beasts</Link> hex at 1st level.</Pair>
<Pair title="Passive Ability">You take a -2 penalty on saving throws against confusion and emotion effects and are affected by such effects for at least 1 round even on a successful saving throw.</Pair>
<Pair title="Available Patron Themes"><Link to="/patron/insanity">Insanity</Link>, <Link to="/patron/occult">Occult</Link>, <Link to="/patron/stars">Stars</Link>, <Link to="/patron/transformation">Transformation</Link></Pair>
<Pair title="Patron Spells">This unique patron grants these alternate spells at the listed witch levels.</Pair>
<Pair plain title="2nd"><Link to="/spell/lesser_confusion">Lesser confusion</Link></Pair>
<Pair plain title="8th"><Link to="/spell/dreadscape">Dreadscape</Link></Pair>
<Pair plain title="10th"><Link to="/spell/compelling_rant">Compelling rant</Link></Pair>
</Ability>
<section data-footnotes><h3 id="ability-patrons-label">Footnotes</h3><ol>
<li id="ability-patrons-fake-fn-1-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> pg. 70 <InnerLink aria-label="Back to reference 1" id="backlink-ability-patrons-fake-fn-1" data-hash-target to="ability-patrons-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-patrons-fake-fn-1.2" data-hash-target to="ability-patrons-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-patrons-fake-fn-1.3" data-hash-target to="ability-patrons-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-patrons-fake-fn-1.4" data-hash-target to="ability-patrons-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-patrons-fake-fn-1.5" data-hash-target to="ability-patrons-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-patrons-fake-fn-1.6" data-hash-target to="ability-patrons-fake-fn-1.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-patrons-fake-fn-1.7" data-hash-target to="ability-patrons-fake-fn-1.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-patrons-fake-fn-1.8" data-hash-target to="ability-patrons-fake-fn-1.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-patrons-fake-fn-1.9" data-hash-target to="ability-patrons-fake-fn-1.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-patrons-fake-fn-1.10" data-hash-target to="ability-patrons-fake-fn-1.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-patrons-fake-fn-1.11" data-hash-target to="ability-patrons-fake-fn-1.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-patrons-fake-fn-1.12" data-hash-target to="ability-patrons-fake-fn-1.12">↩<sup>12</sup></InnerLink></p></li>
<li id="ability-patrons-fake-fn-2-target"><p><Link to="/source/ultimate_magic">Ultimate Magic</Link> pg. 83 <InnerLink aria-label="Back to reference 2" id="backlink-ability-patrons-fake-fn-2" data-hash-target to="ability-patrons-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-patrons-fake-fn-2.2" data-hash-target to="ability-patrons-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-patrons-fake-fn-2.3" data-hash-target to="ability-patrons-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-patrons-fake-fn-2.4" data-hash-target to="ability-patrons-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-patrons-fake-fn-2.5" data-hash-target to="ability-patrons-fake-fn-2.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-patrons-fake-fn-2.6" data-hash-target to="ability-patrons-fake-fn-2.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-patrons-fake-fn-2.7" data-hash-target to="ability-patrons-fake-fn-2.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-patrons-fake-fn-2.8" data-hash-target to="ability-patrons-fake-fn-2.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-patrons-fake-fn-2.9" data-hash-target to="ability-patrons-fake-fn-2.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-patrons-fake-fn-2.10" data-hash-target to="ability-patrons-fake-fn-2.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-patrons-fake-fn-2.11" data-hash-target to="ability-patrons-fake-fn-2.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-patrons-fake-fn-2.12" data-hash-target to="ability-patrons-fake-fn-2.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-patrons-fake-fn-2.13" data-hash-target to="ability-patrons-fake-fn-2.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-patrons-fake-fn-2.14" data-hash-target to="ability-patrons-fake-fn-2.14">↩<sup>14</sup></InnerLink></p></li>
<li id="ability-patrons-fake-fn-3-target"><p><Link to="/source/paths_of_the_righteous">Paths of the Righteous</Link> pg. 31 <InnerLink aria-label="Back to reference 3" id="backlink-ability-patrons-fake-fn-3" data-hash-target to="ability-patrons-fake-fn-3">↩</InnerLink></p></li>
<li id="ability-patrons-fake-fn-4-target"><p><Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link> pg. 88 <InnerLink aria-label="Back to reference 4" id="backlink-ability-patrons-fake-fn-4" data-hash-target to="ability-patrons-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-patrons-fake-fn-4.2" data-hash-target to="ability-patrons-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-patrons-fake-fn-4.3" data-hash-target to="ability-patrons-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-patrons-fake-fn-4.4" data-hash-target to="ability-patrons-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-patrons-fake-fn-4.5" data-hash-target to="ability-patrons-fake-fn-4.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-patrons-fake-fn-5-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> pg. 27 <InnerLink aria-label="Back to reference 5" id="backlink-ability-patrons-fake-fn-5" data-hash-target to="ability-patrons-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-patrons-fake-fn-5.2" data-hash-target to="ability-patrons-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-patrons-fake-fn-5.3" data-hash-target to="ability-patrons-fake-fn-5.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-patrons-fake-fn-6-target"><p><Link to="/source/horror_adventures">Horror Adventures</Link> pg. 72 <InnerLink aria-label="Back to reference 6" id="backlink-ability-patrons-fake-fn-6" data-hash-target to="ability-patrons-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-patrons-fake-fn-6.2" data-hash-target to="ability-patrons-fake-fn-6.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-patrons-fake-fn-6.3" data-hash-target to="ability-patrons-fake-fn-6.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-patrons-fake-fn-6.4" data-hash-target to="ability-patrons-fake-fn-6.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-patrons-fake-fn-6.5" data-hash-target to="ability-patrons-fake-fn-6.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-patrons-fake-fn-6.6" data-hash-target to="ability-patrons-fake-fn-6.6">↩<sup>6</sup></InnerLink></p></li>
<li id="ability-patrons-fake-fn-7-target"><p><Link to="/source/occult_adventures">Occult Adventures</Link> pg. 125 <InnerLink aria-label="Back to reference 7" id="backlink-ability-patrons-fake-fn-7" data-hash-target to="ability-patrons-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-patrons-fake-fn-7.2" data-hash-target to="ability-patrons-fake-fn-7.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-patrons-fake-fn-8-target"><p><Link to="/source/pathfinder_72_the_witch_queens_revenge">Pathfinder #72: The Witch Queen's Revenge</Link> pg. 75 <InnerLink aria-label="Back to reference 8" id="backlink-ability-patrons-fake-fn-8" data-hash-target to="ability-patrons-fake-fn-8">↩</InnerLink></p></li>
<li id="ability-patrons-fake-fn-9-target"><p><Link to="/source/blood_of_the_coven">Blood of the Coven</Link> pg. 17 <InnerLink aria-label="Back to reference 9" id="backlink-ability-patrons-fake-fn-9" data-hash-target to="ability-patrons-fake-fn-9">↩</InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-patrons-fake-fn-9.2" data-hash-target to="ability-patrons-fake-fn-9.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-patrons-fake-fn-9.3" data-hash-target to="ability-patrons-fake-fn-9.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-patrons-fake-fn-10-target"><p><Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link> pg. 13 <InnerLink aria-label="Back to reference 10" id="backlink-ability-patrons-fake-fn-10" data-hash-target to="ability-patrons-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-patrons-fake-fn-10.2" data-hash-target to="ability-patrons-fake-fn-10.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-patrons-fake-fn-10.3" data-hash-target to="ability-patrons-fake-fn-10.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-patrons-fake-fn-10.4" data-hash-target to="ability-patrons-fake-fn-10.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-patrons-fake-fn-11-target"><p>Heroes of the Wild pg. 11 <InnerLink aria-label="Back to reference 11" id="backlink-ability-patrons-fake-fn-11" data-hash-target to="ability-patrons-fake-fn-11">↩</InnerLink></p></li>
<li id="ability-patrons-fake-fn-12-target"><p><Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link> pg. 9 <InnerLink aria-label="Back to reference 12" id="backlink-ability-patrons-fake-fn-12" data-hash-target to="ability-patrons-fake-fn-12">↩</InnerLink></p></li>
<li id="ability-patrons-fake-fn-13-target"><p><Link to="/source/healers_handbook">Healer's Handbook</Link> pg. 16 <InnerLink aria-label="Back to reference 13" id="backlink-ability-patrons-fake-fn-13" data-hash-target to="ability-patrons-fake-fn-13">↩</InnerLink></p></li>
<li id="ability-patrons-fake-fn-14-target"><p>Ultimate Wilderness pg. 89 <InnerLink aria-label="Back to reference 14" id="backlink-ability-patrons-fake-fn-14" data-hash-target to="ability-patrons-fake-fn-14">↩</InnerLink></p></li>
<li id="ability-patrons-fake-fn-15-target"><p>Blood of the Coven <InnerLink aria-label="Back to reference 15" id="backlink-ability-patrons-fake-fn-15" data-hash-target to="ability-patrons-fake-fn-15">↩</InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-patrons-fake-fn-15.2" data-hash-target to="ability-patrons-fake-fn-15.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-patrons-fake-fn-15.3" data-hash-target to="ability-patrons-fake-fn-15.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-patrons-fake-fn-15.4" data-hash-target to="ability-patrons-fake-fn-15.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-patrons-fake-fn-15.5" data-hash-target to="ability-patrons-fake-fn-15.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-patrons-fake-fn-15.6" data-hash-target to="ability-patrons-fake-fn-15.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-patrons-fake-fn-15.7" data-hash-target to="ability-patrons-fake-fn-15.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-patrons-fake-fn-15.8" data-hash-target to="ability-patrons-fake-fn-15.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-patrons-fake-fn-15.9" data-hash-target to="ability-patrons-fake-fn-15.9">↩<sup>9</sup></InnerLink></p></li>
</ol></section></div>};
const _psi_tech = {hasJL:true,title: "Psi-Tech Discoveries", topLink: ["Psychic","class/psychic"], jsx: <><div className="jumpList" id="ability-psi_tech-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-psi_tech-artificial-ascension">Artificial Ascension</InnerLink></li><li><InnerLink toTop to="ability-psi_tech-disease-transference-su">Disease Transference (Su)</InnerLink></li><li><InnerLink toTop to="ability-psi_tech-force-field-su">Force Field (Su)</InnerLink></li><li><InnerLink toTop to="ability-psi_tech-kinetic-enhancement">Kinetic Enhancement</InnerLink></li><li><InnerLink toTop to="ability-psi_tech-laser-blast-su">Laser Blast (Su)</InnerLink></li><li><InnerLink toTop to="ability-psi_tech-mind-over-augmentation">Mind Over Augmentation</InnerLink></li><li><InnerLink toTop to="ability-psi_tech-psychic-battery-su">Psychic Battery (Su)</InnerLink></li><li><InnerLink toTop to="ability-psi_tech-radiation-resistance">Radiation Resistance</InnerLink></li><li><InnerLink toTop to="ability-psi_tech-techsmith">Techsmith</InnerLink></li></ul></div><h2 id="ability-psi_tech-psi-tech-discoveries">Psi-Tech Discoveries</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 12</Link><br/>A psychic can learn a psi-tech discovery in place of a phrenic amplification or a feat. Many of these discoveries use the rules for <Link to="/rule/technological_equipment">advanced technology</Link>.</p>
<hr/>
<Ability id="artificial-ascension" icon={["stairs-goal"]}>
<Pair single id="artificial-ascension">Artificial Ascension</Pair>
<Pair title="Prerequisites">20th-level psychic</Pair>
<Pair title="Ability"><p>You can upload your consciousness into a robot, becoming an artificial intelligence. Performing this ascension requires uninterrupted access to a construct with the robot subtype and at least 10 Hit Dice for 24 hours, during which time you cannot perform other tasks. Any interruptions cause the upload to fail. At the end of the 24 hours your consciousness is successfully uploaded into the robot. If the robot is not willing, it must attempt a Will save (DC = 1/2 your psychic level + your Intelligence modifier). If it is successful, the robot rejects your consciousness, rendering you <Link to="/misc/staggered">staggered</Link> for 24 hours and unable to perform the ritual again during this time.</p>
<p>If your consciousness is successfully uploaded, the robot's consciousness is destroyed and your physical body immediately dies and can't be raised, resurrected, or otherwise brought back to life. Your creature type changes to <Link to="/rule/artificial_intelligence">artificial intelligence</Link>, and your robot body gains the <Link to="/template/aggregate">aggregate</Link> template, with all the adjustments made in the template's description.</p>
</Pair>
<Pair title="Full-Round Action"><p>You can attempt to upload your consciousness to any other robot within 30 feet that has 10 Hit Dice or more. If the robot is not willing to serve as your vessel, it receives a Will save as above, except if it succeeds, your current robot body is staggered for only 1 minute. If it fails, you move from your current body to the new host body, granting it the aggregate template. Your previous robot body is immediately destroyed by the transference.</p>
<p>If the robot you inhabit is destroyed, you are destroyed along with it. You cannot be brought back to life by any means.</p>
</Pair>
</Ability>
<Ability id="disease-transference-su" icon={["magic-swirl","remedy"]}>
<Pair single id="disease-transference-su" flavor="You are able to psychically control and manipulate all manner of diseases.">Disease Transference (Su)</Pair>
<Pair title="Prerequisites">7th-level psychic</Pair>
<Pair title="Ability">You can cast <Link to="/spell/diagnose_disease">diagnose disease</Link> as a spell-like ability at will.</Pair>
<Pair title="Standard Action">You can touch a creature afflicted with a disease and draw the disease into yourself, or transfer it to another willing living creature that is susceptible to diseases and that you (or the afflicted creature) are also touching. Attempt a caster level check against a DC equal to 10 + the disease's Fortitude save DC. If you are successful, the afflicted creature is no longer affected by the disease. If you move the disease into yourself or another creature you (or the afflicted) are touching, the target receiving the disease must immediately attempt a Fortitude save as if it were initially exposed to the disease. If the target fails, the disease affects it immediately with no onset time.</Pair>
<Pair title="Usage">3 + Intelligence modifier times/day</Pair>
</Ability>
<Ability id="force-field-su" icon={["armor-upgrade"]}>
<Pair single id="force-field-su">Force Field (Su)</Pair>
<Pair title="Prerequisites">3rd-level psychic</Pair>
<Pair title="Swift Action"><p>You can spend 1 point from your phrenic pool to activate a <Link to="/tech-misc/force_field">force field</Link> of raw psychic energy that provides you with a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to 5 + your psychic level (maximum 10 temporary hit points).</p>
<p>If you spend 2 points from your phrenic pool, the force field provides a number of temporary hit points equal to 10 + your psychic level (maximum 20 temporary hit points). The force field lasts for a number of minutes equal to your psychic level.</p>
<p>If you spend 3 points from your phrenic pool, the force field lasts for twice as long, and it provides <Link to="/umr/fast_healing">fast healing</Link> 2.</p>
</Pair>
<Pair title="Special">Once the temporary hit points are depleted, the force field disappears and you cannot reinstate it for 24 hours.</Pair>
</Ability>
<Ability id="kinetic-enhancement" icon={["upgrade","armor-upgrade"]}>
<Pair single id="kinetic-enhancement" flavor="You can generate kinetic energy to aid yourself in close-quarters scrapes.">Kinetic Enhancement</Pair>
<Pair title="Passive Ability">You can add your Intelligence modifier as a bonus on combat maneuver checks and to your CMD. You can also add your Intelligence modifier as a bonus on Strength checks to break or lift objects.</Pair>
</Ability>
<Ability id="laser-blast-su" icon={["smoking-finger"]}>
<Pair single id="laser-blast-su" flavor="You can generate laser blasts powered by your psychic energy.">Laser Blast (Su)</Pair>
<Pair title="Prerequisites">11th-level psychic</Pair>
<Pair title="Standard Action">You can sacrifice an unused spell slot of 1st level or higher and transform it into a ray of laser energy, targeting any foe within 30 feet as a ranged touch attack. This attack deals 2d6 points of fire damage plus an additional 1d6 points of fire damage for every level of the spell slot you sacrificed. You can't sacrifice 0-level spells in this manner.</Pair>
</Ability>
<Ability id="mind-over-augmentation" icon={["upgrade"]}>
<Pair single id="mind-over-augmentation">Mind Over Augmentation</Pair>
<Pair title="Ability">When you're determining how many cybernetic implants you can have, the total implantation values of all <Link to="/rule/cybertech">cybertech</Link> implanted in you can't exceed your Intelligence score + 4 (ignoring your Constitution score).</Pair>
</Ability>
<Ability id="psychic-battery-su" icon={["upgrade"]}>
<Pair single id="psychic-battery-su">Psychic Battery (Su)</Pair>
<Pair title="Prerequisites">7th-level psychic</Pair>
<Pair title="Swift Action">You can expend an unused spell slot or a number of points from your phrenic pool to power a technological device you are touching. Each spell level expended in this way grants the device 1 charge, and every 2 points from your phrenic pool spent grant 1 charge. Any charges unused at the end of the round are lost, and any charges used by the device that round that aren't provided by you must come from the device's own power reserves.</Pair>
<Pair title="Special">You cannot use this ability to power <Link to="/rule/timeworn_technology">timeworn technology</Link>. You can power only devices that use charges.</Pair>
</Ability>
<Ability id="radiation-resistance" icon={["armor-upgrade"]}>
<Pair single id="radiation-resistance">Radiation Resistance</Pair>
<Pair title="Ability">You apply your Intelligence modifier as a bonus on all Fortitude saves versus the effects of radiation.</Pair>
</Ability>
<Ability id="techsmith" icon={["upgrade"]}>
<Pair single id="techsmith">Techsmith</Pair>
<Pair title="Ability">Select one type of technological item (<Link to="/main/tech_armor">armor</Link>, <Link to="/main/tech_cybertech">cybertech</Link>, <Link to="/main/tech_pharmaceuticals">pharmaceuticals</Link>, <Link to="/main/tech_misc">technological gear</Link>, or <Link to="/main/tech_weapons">weapons</Link>). You can create items of this type 25% faster than normal, and you gain a +4 bonus on Craft (mechanical) checks (or other checks, as appropriate) to craft items of this type.</Pair>
<Pair title="Special">You can select this discovery multiple times; its effects do not stack. Instead, each time you select this discovery, it applies to a single different type of technological item.</Pair>
</Ability>
</>};
const _rogue_talents = {hasJL:true,title: "Rogue Talents", topLink: ["Rogue","class/rogue"], jsx: <div className="compilation"><div className="jumpList" id="ability-rogue_talents-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-rogue_talents-primary-sneak-attack-talents">Primary Sneak Attack Talents</InnerLink></li><li><InnerLink toTop to="ability-rogue_talents-other-sneak-attack-talents">Other Sneak Attack Talents</InnerLink></li><li><InnerLink toTop to="ability-rogue_talents-poison-talents">Poison Talents</InnerLink></li><li><InnerLink toTop to="ability-rogue_talents-catfolk-talents">Catfolk Talents</InnerLink></li><li><InnerLink toTop to="ability-rogue_talents-spellcasting-talents">Spellcasting Talents</InnerLink></li><li><InnerLink toTop to="ability-rogue_talents-use-magic-device-talents">Use Magic Device Talents</InnerLink></li><li><InnerLink toTop to="ability-rogue_talents-other-magic-related-talents">Other Magic-Related Talents</InnerLink></li><li><InnerLink toTop to="ability-rogue_talents-ally-related-talents">Ally-Related Talents</InnerLink></li><li><InnerLink toTop to="ability-rogue_talents-combat-talents">Combat Talents</InnerLink></li><li><InnerLink toTop to="ability-rogue_talents-trap-talents">Trap Talents</InnerLink></li><li><InnerLink toTop to="ability-rogue_talents-disable-device-talents">Disable Device Talents</InnerLink></li><li><InnerLink toTop to="ability-rogue_talents-deception-talents">Deception Talents</InnerLink></li><li><InnerLink toTop to="ability-rogue_talents-other-talents">Other Talents</InnerLink></li></ul></div><h2 id="ability-rogue_talents-rogue-talents">Rogue Talents</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link><br/>As a rogue gains experience, she learns a number of talents that aid her and confound her foes. Starting at 2nd level, a rogue gains one rogue talent. She gains an additional rogue talent for every 2 levels of rogue attained after 2nd level. A rogue cannot select an individual talent more than once.</p>
<p>Also see: <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link>, available starting at 10th level.</p>
<h3 id="ability-rogue_talents-primary-sneak-attack-talents" data-hash-target>Primary Sneak Attack Talents</h3>
<p>These talents add effects to a rogue's <Link to="/ability/sneak_attack">sneak attack</Link>. Only one of these talents can be applied to an individual attack and the decision must be made before the attack roll is made.</p>
<Ability id="talentarmorpiercer-armor-piercer-ex-fn1" icon={["armor-downgrade"]}>
<Pair single id="talentarmorpiercer-armor-piercer-ex-fn1" flavor="A rogue with this talent can cause her sneak attacks to pierce through natural armor."><Link to="/talent/armor_piercer">⮞</Link> Armor Piercer (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-1" id="ability-rogue_talents-fake-fn-1" data-hash-target to="ability-rogue_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">When she hits with an attack that deals sneak attack damage, she can forgo one or more of her sneak attack dice to reduce the target's natural armor bonus by that amount (minimum natural armor bonus of +0) until the end of her next turn. A creature cannot be affected by this ability again for 1 minute.</Pair>
</Ability>
<Ability id="talentbefuddlingstrike-befuddling-strike-ex-fn2" icon={["armor-downgrade"]}>
<Pair single id="talentbefuddlingstrike-befuddling-strike-ex-fn2"><Link to="/talent/befuddling_strike">⮞</Link> Befuddling Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-2" id="ability-rogue_talents-fake-fn-2" data-hash-target to="ability-rogue_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Passive Ability">When the rogue deals sneak attack damage against an opponent, that opponent takes a -2 penalty on attack rolls against the rogue for 1d4 rounds.</Pair>
</Ability>
<Ability id="talentbleedingattack-bleeding-attack-ex-fn3" icon={["upgrade"]}>
<Pair single id="talentbleedingattack-bleeding-attack-ex-fn3"><Link to="/talent/bleeding_attack">⮞</Link> Bleeding Attack (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-3" id="ability-rogue_talents-fake-fn-3" data-hash-target to="ability-rogue_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this ability can cause living opponents to bleed by hitting them with a sneak attack. This attack causes the target to take 1 additional point of damage each round for each die of the rogue's sneak attack (e.g., 4d6 equals 4 points of <Link to="/rule/bleed">bleed</Link>). Bleeding creatures take that amount of damage every round at the start of each of their turns. The bleeding can be stopped by a DC 15 Heal check or the application of any effect that heals hit point damage. Bleeding damage from this ability does not stack with itself. Bleeding damage bypasses any damage reduction the creature might possess.</Pair>
</Ability>
<Ability id="talentdistractingattack-distracting-attack-ex-fn2-2" icon={["armor-downgrade"]}>
<Pair single id="talentdistractingattack-distracting-attack-ex-fn2-2" flavor="A rogue with this talent can make sneak attacks with subtle flourishes that disorient and distract her enemy."><Link to="/talent/distracting_attack">⮞</Link> Distracting Attack (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-2.2" id="ability-rogue_talents-fake-fn-2.2" data-hash-target to="ability-rogue_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">When she hits a creature with a melee attack that deals sneak attack damage, she can forgo the additional damage to cause the creature to become <Link to="/rule/flat_footed">flat-footed</Link> against one target of her choosing until the beginning of her next turn. The rogue cannot designate herself as the creature gaining the benefit of this talent.</Pair>
<Pair title="Special">Creatures with <Link to="/ability/uncanny_dodge">uncanny dodge</Link> are immune to distracting attack.</Pair>
</Ability>
<Ability id="talentemboldeningstrike-emboldening-strike-ex-fn4" icon={["armor-upgrade"]}>
<Pair single id="talentemboldeningstrike-emboldening-strike-ex-fn4"><Link to="/talent/emboldening_strike">⮞</Link> Emboldening Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-4" id="ability-rogue_talents-fake-fn-4" data-hash-target to="ability-rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">When a rogue with this talent hits a creature with a melee attack that deals sneak attack damage, she gains a +1 circumstance bonus on saving throws for every 2 sneak attack dice rolled (minimum +1) for 1 round.</Pair>
</Ability>
<Ability id="talentextinguishingstrike-extinguishing-strike-ex-fn4-2" icon={["magic-swirl"]}>
<Pair single id="talentextinguishingstrike-extinguishing-strike-ex-fn4-2"><Link to="/talent/extinguishing_strike">⮞</Link> Extinguishing Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-4.2" id="ability-rogue_talents-fake-fn-4.2" data-hash-target to="ability-rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">When a rogue with this talent hits a creature with a melee attack that deals sneak attack damage, any nonmagical light sources worn or carried by the creature (such as lit torches, lanterns, or sunrods) are automatically extinguished.</Pair>
<Pair title="Ability">Once per day, the rogue can use this ability to also attempt a dispel check (as per <Link to="/spell/dispel_magic">dispel magic</Link>) against any magical sources of light a target carries, using her rogue level as the caster level.</Pair>
</Ability>
<Ability id="talentfocusingattack-focusing-attack-ex-fn4-3" icon={["armor-upgrade"]}>
<Pair single id="talentfocusingattack-focusing-attack-ex-fn4-3"><Link to="/talent/focusing_attack">⮞</Link> Focusing Attack (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-4.3" id="ability-rogue_talents-fake-fn-4.3" data-hash-target to="ability-rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">When a rogue selects this talent, she must choose the <Link to="/misc/confused">confused</Link>, <Link to="/misc/shaken">shaken</Link>, or <Link to="/misc/sickened">sickened</Link> condition. When the rogue has the selected condition and hits a creature with a melee attack that deals sneak attack damage, the rogue no longer has that condition.</Pair>
<Pair title="Special">A rogue can take this talent up to three times. Each time, she must select a different condition that she is able to remove from herself with a melee attack that deals sneak attack damage. Even if the rogue has taken this talent multiple times, she can remove only a single effect on herself with each melee attack that deals sneak attack damage.</Pair>
</Ability>
<Ability id="talentobscuringblow-obscuring-blow-ex-fn4-4" icon={["armor-downgrade"]}>
<Pair single id="talentobscuringblow-obscuring-blow-ex-fn4-4"><Link to="/talent/obscuring_blow">⮞</Link> Obscuring Blow (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-4.4" id="ability-rogue_talents-fake-fn-4.4" data-hash-target to="ability-rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability"><p>Once per day, the rogue can forgo her potential to deal sneak attack damage to attempt to cloud an opponent's vision. She must declare the use of <em>obscuring blow</em> before she makes the attack.</p>
<p>If the attack hits, it does normal damage but, instead of dealing sneak attack damage (and any effect that triggers when the rogue deals sneak attack damage), the target treats all other creatures as if they had <Link to="/rule/concealment">concealment</Link>, suffering a 20% miss chance on all attack rolls for a number of rounds equal to half the rogue's level. A successful Fortitude saving throw reduces this effect to 1 round. The DC of this saving throw is equal to 10 + 1/2 the rogue's level + the rogue's Intelligence modifier.</p>
</Pair>
</Ability>
<Ability id="talentoffensivedefense-offensive-defense-ex-fn2-3" icon={["armor-upgrade"]}>
<Pair single id="talentoffensivedefense-offensive-defense-ex-fn2-3"><Link to="/talent/offensive_defense">⮞</Link> Offensive Defense (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-2.3" id="ability-rogue_talents-fake-fn-2.3" data-hash-target to="ability-rogue_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">When a rogue with this talent hits a creature with a melee attack that deals sneak attack damage, the rogue gains a +1 dodge bonus to AC for each sneak attack die rolled for 1 round.</Pair>
</Ability>
<Ability id="talentpowerfulsneak-powerful-sneak-ex-fn5" icon={["broken-shield","upgrade"]}>
<Pair single id="talentpowerfulsneak-powerful-sneak-ex-fn5"><Link to="/talent/powerful_sneak">⮞</Link> Powerful Sneak (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-5" id="ability-rogue_talents-fake-fn-5" data-hash-target to="ability-rogue_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">Whenever a rogue with this talent takes a full attack action, she can elect to take a -2 penalty on all attack rolls until the start of her next turn. If an attack during this time is a sneak attack, she treats all 1s on the sneak attack damage dice as 2s.</Pair>
</Ability>
<Ability id="talentsacredsneakattack-sacred-sneak-attack-su-fn6" icon={["upgrade"]}>
<Pair single id="talentsacredsneakattack-sacred-sneak-attack-su-fn6"><Link to="/talent/sacred_sneak_attack">⮞</Link> Sacred Sneak Attack (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-6" id="ability-rogue_talents-fake-fn-6" data-hash-target to="ability-rogue_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">Good alignment</Pair>
<Pair title="Passive Ability">When making a sneak attack against an undead creature or evil outsider, the rogue's sneak attack damage is considered good-aligned for the purpose of overcoming damage reduction. Normal weapon damage is unaffected for this attack.</Pair>
</Ability>
<Ability id="talentseveralignment-sever-alignment-su-fn7" icon={["armor-downgrade"]}>
<Pair single id="talentseveralignment-sever-alignment-su-fn7"><Link to="/talent/sever_alignment">⮞</Link> Sever Alignment (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-7" id="ability-rogue_talents-fake-fn-7" data-hash-target to="ability-rogue_talents-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/talent/aligned_sneak_attack">Aligned sneak attack</Link></Pair>
<Pair title="Ability">When making a sneak attack against an opponent with an alignment subtype, a rogue with this talent can forgo her sneak attack damage to scramble the creature's metaphysical nature. If the attack succeeds, the rogue deals weapon damage as normal, and the target must succeed at a Fortitude save (DC = 10 + half the rogue's level + the rogue's Intelligence modifier) or lose all damage reduction overcome by aligned weapons (such as DR 10/good), lose all <Link to="/umr/regeneration">regeneration</Link> overcome by aligned sources (such as regeneration 10 [good]).</Pair>
</Ability>
<Ability id="talentshadowschill-shadows-chill-su-fn4-5" icon={["upgrade"]}>
<Pair single id="talentshadowschill-shadows-chill-su-fn4-5"><Link to="/talent/shadows_chill">⮞</Link> Shadow's Chill (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-4.5" id="ability-rogue_talents-fake-fn-4.5" data-hash-target to="ability-rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">Cold <Link to="/umr/resistance">resistance</Link> from a racial trait</Pair>
<Pair title="Ability">When a rogue with this talent hits a creature with a melee weapon that deals sneak attack damage, a number of points of the damage dealt equal to the number of sneak attack dice rolled is cold damage. The remainder of the sneak attack damage and the normal weapon damage are unaffected.</Pair>
</Ability>
<Ability id="talentsilencingstrike-silencing-strike-su-fn8" icon={["armor-downgrade"]}>
<Pair single id="talentsilencingstrike-silencing-strike-su-fn8" flavor={<>Using magic stolen from the <Link to="/rule/hellknights">Hellknights</Link>, Council agents can render foes silent.</>}><Link to="/talent/silencing_strike">⮞</Link> Silencing Strike (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-8" id="ability-rogue_talents-fake-fn-8" data-hash-target to="ability-rogue_talents-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Usage">1 time/day per two rogue levels<ByLevelPop levels={[[2,1],[4,2],[6,3],[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">When a creature is damaged by the rogue's sneak attack, the rogue magically renders the creature mute for 1 round unless it succeeds at a Will save (DC = 10 + half the rogue's level + the rogue's Charisma modifier).</Pair>
</Ability>
<Ability id="talentslowreactions-slow-reactions-ex-fn3-2" icon={["armor-downgrade"]}>
<Pair single id="talentslowreactions-slow-reactions-ex-fn3-2"><Link to="/talent/slow_reactions">⮞</Link> Slow Reactions (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-3.2" id="ability-rogue_talents-fake-fn-3.2" data-hash-target to="ability-rogue_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">Opponents damaged by the rogue's sneak attack can't make attacks of opportunity for 1 round.</Pair>
</Ability>
<Ability id="talentsneakymaneuver-sneaky-maneuver-ex-fn9" icon={["mailed-fist"]}>
<Pair single id="talentsneakymaneuver-sneaky-maneuver-ex-fn9"><Link to="/talent/sneaky_maneuver">⮞</Link> Sneaky Maneuver (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-9" id="ability-rogue_talents-fake-fn-9" data-hash-target to="ability-rogue_talents-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Ability">Anytime a rogue with this talent could hit an opponent with a melee sneak attack on her turn, she may take a -2 penalty on her attack roll and attempt a <Link to="/rule/dirty_trick">dirty trick</Link>, <Link to="/rule/disarm">disarm</Link>, <Link to="/rule/steal">steal</Link>, <Link to="/rule/sunder">sunder</Link>, or <Link to="/rule/trip">trip</Link> combat maneuver instead of dealing sneak attack damage. If the attack succeeds, the rogue deals weapon damage as normal and then attempts a combat maneuver check as a <strong className="hl">swift action</strong> (the -2 penalty only applies to the initial attack roll, not the combat maneuver check). This combat maneuver still provokes attacks of opportunity unless the rogue has a feat or ability that allows her to perform it without provoking attacks of opportunity.</Pair>
</Ability>
<Ability id="talentstemtheflow-stem-the-flow-su-fn6-2" icon={["armor-downgrade"]}>
<Pair single id="talentstemtheflow-stem-the-flow-su-fn6-2"><Link to="/talent/stem_the_flow">⮞</Link> Stem the Flow (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-6.2" id="ability-rogue_talents-fake-fn-6.2" data-hash-target to="ability-rogue_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Ability">When making a successful sneak attack against a creature with the ability to <Link to="/ability/channel_energy">channel energy</Link>, the rogue may forgo 3d6 points of sneak attack damage to instead prevent the target from channeling energy for a number of rounds equal to half her rogue level.</Pair>
</Ability>
<Ability id="talentunderhanded-underhanded-ex-fn10" icon={["upgrade"]}>
<Pair single id="talentunderhanded-underhanded-ex-fn10"><Link to="/talent/underhanded">⮞</Link> Underhanded (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-10" id="ability-rogue_talents-fake-fn-10" data-hash-target to="ability-rogue_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Passive Ability">A rogue with this talent gains a +4 circumstance bonus on all <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks made to conceal a weapon.</Pair>
<Pair title="Ability">Furthermore, if she makes a sneak attack during the surprise round using a concealed weapon that her opponent didn't know about, she does not have to roll sneak attack damage, and the sneak attack deals maximum damage.</Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
</Ability>
<h3 id="ability-rogue_talents-other-sneak-attack-talents" data-hash-target>Other Sneak Attack Talents</h3>
<p>These talents interact with the sneak attact mechanic but do not have the limitation of the Primary talents above.</p>
<Ability id="talentalignedsneakattack-aligned-sneak-attack-su-fn7-2" icon={["armor-downgrade"]}>
<Pair single id="talentalignedsneakattack-aligned-sneak-attack-su-fn7-2"><Link to="/talent/aligned_sneak_attack">⮞</Link> Aligned Sneak Attack (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-7.2" id="ability-rogue_talents-fake-fn-7.2" data-hash-target to="ability-rogue_talents-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability">When making a sneak attack against a creature that has damage reduction that can be overcome by weapons of a particular alignment (such as DR 5/good), the rogue's attack reduces that damage reduction by an amount equal to the number of sneak attack dice rolled until the end of the rogue's turn.</Pair>
</Ability>
<Ability id="talentcarefulstab-careful-stab-ex-fn8-2" icon={["stairs-goal"]}>
<Pair single id="talentcarefulstab-careful-stab-ex-fn8-2"><Link to="/talent/careful_stab">⮞</Link> Careful Stab (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-8.2" id="ability-rogue_talents-fake-fn-8.2" data-hash-target to="ability-rogue_talents-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability">When a rogue with this talent reduces a creature to fewer than 0 hp with <Link to="/misc/precision_damage">precision damage</Link>, she can choose to leave that creature at -1 hp and <Link to="/misc/stable">stable</Link>.</Pair>
</Ability>
<Ability id="talentdemandattention-demand-attention-ex-fn11" icon={["armor-downgrade"]}>
<Pair single id="talentdemandattention-demand-attention-ex-fn11"><Link to="/talent/demand_attention">⮞</Link> Demand Attention (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-11" id="ability-rogue_talents-fake-fn-11" data-hash-target to="ability-rogue_talents-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Ability"><p>The first time each round that you deal sneak attack damage to an opponent, you can forgo sneak attack damage to distract the creature. The target must succeed at a Will save (DC = 10 + the number of sneak attack dice sacrificed + your Charisma modifier) or become distracted until the start of your next turn.</p>
<p>Distracted opponents are entirely focused on you, and pay little attention to their surroundings; they are not considered to be observing other characters within 30 feet, allowing them to attempt Stealth checks to hide. A distracted opponent automatically fails Perception checks against creatures more than 30 feet away.</p>
</Pair>
</Ability>
<Ability id="talentdisablingstunt-disabling-stunt-ex-fn12" icon={["upgrade"]}>
<Pair single id="talentdisablingstunt-disabling-stunt-ex-fn12"><Link to="/talent/disabling_stunt">⮞</Link> Disabling Stunt (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-12" id="ability-rogue_talents-fake-fn-12" data-hash-target to="ability-rogue_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/disable_device">Disable Device</Link></Pair>
<Pair title="Standard Action">A rogue with this talent can attempt a Disable Device check against a construct's CMD. If the check is successful, the rogue can ignore the construct's damage reduction when dealing sneak attack damage for 1 minute.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="Special">The normal penalties apply to this check if the rogue attempts it without using <Link to="/eq-misc/thieves_tools">thieves' tools</Link>.</Pair>
</Ability>
<Ability id="talentfastgetaway-fast-getaway-ex-fn2-4" icon={["stairs-goal"]}>
<Pair single id="talentfastgetaway-fast-getaway-ex-fn2-4"><Link to="/talent/fast_getaway">⮞</Link> Fast Getaway (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-2.4" id="ability-rogue_talents-fake-fn-2.4" data-hash-target to="ability-rogue_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">After successfully making a sneak attack or <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check, a rogue with this talent can spend a <strong className="hl">move action</strong> to take the <Link to="/rule/withdraw">withdraw</Link> action. She can move no more than her speed during this movement.</Pair>
</Ability>
<Ability id="talentsetup-set-up-ex-fn11-2" icon={["armor-downgrade"]}>
<Pair single id="talentsetup-set-up-ex-fn11-2"><Link to="/talent/set_up">⮞</Link> Set-Up (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-11.2" id="ability-rogue_talents-fake-fn-11.2" data-hash-target to="ability-rogue_talents-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Ability">When you successfully hit a target with a sneak attack in melee, you can choose to forgo your additional sneak attack damage to make the target more vulnerable to one of your allies adjacent to it. The first melee attack that ally makes against the target before the beginning of your next turn treats the target as <Link to="/rule/flanked">flanked</Link>, even if your ally is not flanking the target. This has no effect on creatures you could not flank with that ally, even if the ally was properly positioned.</Pair>
</Ability>
<Ability id="talentsneaktraining-sneak-training-ex-fn13" icon={["upgrade"]}>
<Pair single id="talentsneaktraining-sneak-training-ex-fn13"><Link to="/talent/sneak_training">⮞</Link> Sneak Training (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-13" id="ability-rogue_talents-fake-fn-13" data-hash-target to="ability-rogue_talents-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Passive Ability">The rogue counts as having the sneak attack class feature of a rogue of her level for the purpose of meeting prestige class requirements, although this talent doesn't improve the rogue's existing sneak attack ability or grant her the sneak attack class feature if she doesn't already have it. This talent is most useful for rogues that lack the sneak attack class feature, such as those with the <Link to="/arc-rogue/phantom_thief">phantom thief</Link> archetype.</Pair>
</Ability>
<Ability id="talentsniperseye-snipers-eye-ex-fn5-2" icon={["upgrade"]}>
<Pair single id="talentsniperseye-snipers-eye-ex-fn5-2"><Link to="/talent/snipers_eye">⮞</Link> Sniper's Eye (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-5.2" id="ability-rogue_talents-fake-fn-5.2" data-hash-target to="ability-rogue_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can apply her sneak attack damage on ranged attacks targeting foes within 30 feet that benefit from <Link to="/rule/concealment">concealment</Link>. Foes with total concealment are still immune.</Pair>
</Ability>
<Ability id="talentsurpriseattack-surprise-attack-ex-fn14" icon={["armor-downgrade"]}>
<Pair single id="talentsurpriseattack-surprise-attack-ex-fn14"><Link to="/talent/surprise_attack">⮞</Link> Surprise Attack (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-14" id="ability-rogue_talents-fake-fn-14" data-hash-target to="ability-rogue_talents-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Passive Ability">During the surprise round, opponents are always considered <Link to="/rule/flat_footed">flat-footed</Link> to a rogue with this ability, even if they have already acted.</Pair>
</Ability>
<Ability id="talentswimmingstunt-swimming-stunt-ex-fn12-2" icon={["armor-downgrade"]}>
<Pair single id="talentswimmingstunt-swimming-stunt-ex-fn12-2"><Link to="/talent/swimming_stunt">⮞</Link> Swimming Stunt (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-12.2" id="ability-rogue_talents-fake-fn-12.2" data-hash-target to="ability-rogue_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/swim">Swim</Link></Pair>
<Pair title="Ability">Once per round, when making an attack against an opponent underwater that qualifies for sneak attack damage, a rogue with this talent can attempt a Swim check as a <strong className="hl">free action</strong> against her opponent's CMD. If the attack and Swim check are both successful, and the attack deals sneak attack damage, the rogue can choose to forgo one or more of her sneak attack dice to reduce the number of total rounds her opponent can <Link to="/misc/hold_its_breath">hold its breath</Link> by 1 round per die.</Pair>
</Ability>
<h3 id="ability-rogue_talents-poison-talents" data-hash-target>Poison Talents</h3>
<Ability id="talentaccuratepoisoner-accurate-poisoner-ex-fn15" icon={["upgrade"]}>
<Pair single id="talentaccuratepoisoner-accurate-poisoner-ex-fn15" flavor="A rogue with this talent delivers poisons with deadly precision."><Link to="/talent/accurate_poisoner">⮞</Link> Accurate Poisoner (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-15" id="ability-rogue_talents-fake-fn-15" data-hash-target to="ability-rogue_talents-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Ability">When the rogue successfully hits an opponent with a poisoned weapon and would deal sneak attack damage, she can forgo the sneak attack damage and increase the poison's potency. If she does, the poison's duration increases by 2 (for example, <Link to="/eq-poison/large_scorpion_venom">large scorpion venom</Link> lasts for 8 rounds instead of 6 rounds, and <Link to="/eq-poison/drow_poison">drow poison</Link> lasts for 4 minutes instead of 2 minutes).</Pair>
</Ability>
<Ability id="talentdevelopedpoisonimmunity-developed-poison-immunity-ex-fn16" icon={["armor-upgrade"]}>
<Pair single id="talentdevelopedpoisonimmunity-developed-poison-immunity-ex-fn16"><Link to="/talent/developed_poison_immunity">⮞</Link> Developed Poison Immunity (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-16" id="ability-rogue_talents-fake-fn-16" data-hash-target to="ability-rogue_talents-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Choice">When this talent is taken, select a single animal or plant poison that the rogue has been poisoned with but survived.</Pair>
<Pair title="Passive Ability">The rogue automatically succeeds at all Fortitude saves against exposure to the selected poison.</Pair>
</Ability>
<Ability id="talentironguts-iron-guts-ex-fn17" icon={["armor-upgrade"]}>
<Pair single id="talentironguts-iron-guts-ex-fn17"><Link to="/talent/iron_guts">⮞</Link> Iron Guts (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-17" id="ability-rogue_talents-fake-fn-17" data-hash-target to="ability-rogue_talents-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Passive Ability">A rogue with this talent has a cast-iron stomach or has trained herself to withstand poisons, especially ingested ones. She gains a +1 bonus on all saves against ingested poisons as well as a +4 bonus on saves against all spells and effects that cause the rogue to be <Link to="/misc/nauseated">nauseated</Link> or <Link to="/misc/sickened">sickened</Link>.</Pair>
</Ability>
<Ability id="talentknockoutqueen-knockout-queen-ex-fn8-3" icon={["stairs-goal"]}>
<Pair single id="talentknockoutqueen-knockout-queen-ex-fn8-3" flavor="Sabriune has passed on the secret of swiftly manufacturing drow poison."><Link to="/talent/knockout_queen">⮞</Link> Knockout Queen (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-8.3" id="ability-rogue_talents-fake-fn-8.3" data-hash-target to="ability-rogue_talents-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability">Once per day, the rogue can create 1 or more doses of <Link to="/eq-poison/drow_poison">drow poison</Link> by spending 25 gp per dose; this process takes 30 minutes of work, regardless of the number of doses she creates. She can create no more than 1 dose for every 3 rogue levels she has (minimum 1 dose). Creating drow poison in this way does not require a skill check, but the created poison spoils if not used within 24 hours. (This spoilage means that selling doses of this poison for a profit to unsuspecting merchants might well result in unwanted repercussions and reprisals!)</Pair>
</Ability>
<Ability id="talentlastingpoison-lasting-poison-ex-fn5-3" icon={["upgrade","broken-shield"]}>
<Pair single id="talentlastingpoison-lasting-poison-ex-fn5-3"><Link to="/talent/lasting_poison">⮞</Link> Lasting Poison (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-5.3" id="ability-rogue_talents-fake-fn-5.3" data-hash-target to="ability-rogue_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can apply poison to a weapon in such a way that it is effective for two successful attacks instead of one. The poison has a reduced effect, however, and saves made against the poison receive a +2 circumstance bonus. Applying poison in this way requires a <strong className="hl">full-round action</strong>, or a <strong className="hl">standard action</strong> if the rogue has the <Link to="/talent/swift_poison">swift poison</Link> talent.</Pair>
</Ability>
<Ability id="talentlingeringpoison-lingering-poison-ex-fn15-2" icon={["stairs-goal"]}>
<Pair single id="talentlingeringpoison-lingering-poison-ex-fn15-2"><Link to="/talent/lingering_poison">⮞</Link> Lingering Poison (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-15.2" id="ability-rogue_talents-fake-fn-15.2" data-hash-target to="ability-rogue_talents-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can have a poison remain inert until a later time. When she delivers a contact or injury poison, instead of the poison's normal onset time, the rogue can delay the poison's effects until up to 1 day from when it is delivered (minimum 1 round). The delayed poison can be detected as normal by spells such as <Link to="/spell/detect_poison">detect poison</Link> and similar abilities.</Pair>
</Ability>
<Ability id="talentpoisonuse-poison-use-ex-fn4-6" icon={["armor-upgrade"]}>
<Pair single id="talentpoisonuse-poison-use-ex-fn4-6"><Link to="/talent/poison_use">⮞</Link> Poison Use (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-4.6" id="ability-rogue_talents-fake-fn-4.6" data-hash-target to="ability-rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The rogue is trained in the use of poison, and can't accidentally poison herself when applying poison to a weapon.</Pair>
</Ability>
<Ability id="talentsignaturepoison-signature-poison-ex-fn15-3" icon={["upgrade"]}>
<Pair single id="talentsignaturepoison-signature-poison-ex-fn15-3"><Link to="/talent/signature_poison">⮞</Link> Signature Poison (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-15.3" id="ability-rogue_talents-fake-fn-15.3" data-hash-target to="ability-rogue_talents-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Choice">A rogue with this talent chooses one poison (such as <Link to="/eq-poison/bloodroot">bloodroot</Link> or <Link to="/eq-poison/oil_of_taggit">oil of taggit</Link>) as her signature poison.</Pair>
<Pair title="Ability">When she uses the chosen poison, the poison's saving throw DC increases by +2.</Pair>
<Pair title="Special">A rogue can take this talent multiple times, each time applying it to a new poison.</Pair>
</Ability>
<Ability id="talentsuppresspoison-suppress-poison-ex-fn15-4" icon={["armor-upgrade"]}>
<Pair single id="talentsuppresspoison-suppress-poison-ex-fn15-4" flavor="A rogue with this talent can stave off the effects of a poison."><Link to="/talent/suppress_poison">⮞</Link> Suppress Poison (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-15.4" id="ability-rogue_talents-fake-fn-15.4" data-hash-target to="ability-rogue_talents-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Immediate Action">When she fails a saving throw against a poison, the rogue can attempt the saving throw a second time. If she succeeds at this second saving throw, the poison does not affect her for a number of rounds equal to her Constitution modifier (minimum 1 round), but this time it counts against the poison's duration. This talent has no effect on poisons with an onset longer than immediate.</Pair>
</Ability>
<Ability id="talentswiftpoison-swift-poison-ex-fn5-4" icon={["upgrade"]}>
<Pair single id="talentswiftpoison-swift-poison-ex-fn5-4"><Link to="/talent/swift_poison">⮞</Link> Swift Poison (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-5.4" id="ability-rogue_talents-fake-fn-5.4" data-hash-target to="ability-rogue_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can apply poison to a weapon as a <strong className="hl">move action</strong>, instead of a <strong className="hl">standard action</strong>.</Pair>
</Ability>
<Ability id="talenttoxicregurgitation-toxic-regurgitation-ex-fn15-5" icon={["smoking-finger"]}>
<Pair single id="talenttoxicregurgitation-toxic-regurgitation-ex-fn15-5"><Link to="/talent/toxic_regurgitation">⮞</Link> Toxic Regurgitation (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-15.5" id="ability-rogue_talents-fake-fn-15.5" data-hash-target to="ability-rogue_talents-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Standard Action">A rogue with this talent can drink a non-inhaled poison and suspend it within her body. She is not affected by the poison while it is suspended within her, and she doesn't need to attempt saving throws against it. She can suspend a poison within herself in this way for a number of hours equal to her Constitution modifier (minimum 1), after which she must immediately expel the poison or be affected by it as normal.</Pair>
<Pair title="Ability">At any time while the poison is suspended within her, the rogue can spit up the poison as a ranged touch attack at any creature within 10 feet. This does not provoke attacks of opportunity. On a successful hit, the struck creature is exposed to the poison as if it were a contact poison.</Pair>
<Pair title="Special">The rogue can maintain only a single suspended poison at a time. If she suspends a new poison, any older suspended poison immediately affects her as normal.</Pair>
</Ability>
<h3 id="ability-rogue_talents-catfolk-talents" data-hash-target>Catfolk Talents</h3>
<Ability id="talentdeadlyscratch-deadly-scratch-ex-fn18" icon={["stairs-goal"]}>
<Pair single id="talentdeadlyscratch-deadly-scratch-ex-fn18"><Link to="/talent/deadly_scratch">⮞</Link> Deadly Scratch (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-18" id="ability-rogue_talents-fake-fn-18" data-hash-target to="ability-rogue_talents-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/race/catfolk">Catfolk</Link>, <em>cat's claws</em> racial trait, <Link to="/ability/poison_use">poison use</Link> class feature</Pair>
<Pair title="Ability">A catfolk rogue with this talent can apply poison to her claws without accidentally poisoning herself.</Pair>
</Ability>
<Ability id="talentdisarmingluck-disarming-luck-ex-fn18-2" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="talentdisarmingluck-disarming-luck-ex-fn18-2"><Link to="/talent/disarming_luck">⮞</Link> Disarming Luck (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-18.2" id="ability-rogue_talents-fake-fn-18.2" data-hash-target to="ability-rogue_talents-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/race/catfolk">Catfolk</Link></Pair>
<Pair title="Ability">Once per day, when a catfolk rogue attempts to disable a device and fails by 5 or more, she can reroll the check as a <strong className="hl">free action</strong>. She must take the result of the reroll, even if it's worse than the original roll.</Pair>
</Ability>
<Ability id="talentgracefulfaller-graceful-faller-ex-fn18-3" icon={["stairs-goal"]}>
<Pair single id="talentgracefulfaller-graceful-faller-ex-fn18-3"><Link to="/talent/graceful_faller">⮞</Link> Graceful Faller (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-18.3" id="ability-rogue_talents-fake-fn-18.3" data-hash-target to="ability-rogue_talents-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/race/catfolk">Catfolk</Link></Pair>
<Pair title="Ability">A catfolk rogue with this talent lands on her feet even when she takes lethal damage from a fall.</Pair>
<Pair title="Special">If the catfolk rogue also has the <em>nimble faller</em> racial trait, she takes damage from any fall as if it were 20 feet shorter than it actually is.</Pair>
</Ability>
<Ability id="talentnimbleclimbercatfolk-nimble-climber-ex-fn18-4" icon={["upgrade"]}>
<Pair single id="talentnimbleclimbercatfolk-nimble-climber-ex-fn18-4"><Link to="/talent/nimble_climber_catfolk">⮞</Link> Nimble Climber (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-18.4" id="ability-rogue_talents-fake-fn-18.4" data-hash-target to="ability-rogue_talents-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/race/catfolk">Catfolk</Link></Pair>
<Pair title="Passive Ability">A catfolk rogue with this talent gains a +4 bonus on Climb checks.</Pair>
<Pair title="Special">If she has the <em>climber racial</em> trait, she can take 10 on her Climb checks even when in immediate danger or distracted.</Pair>
</Ability>
<Ability id="talentsinglemindedappraiser-single-minded-appraiser-ex-fn18-5" icon={["stairs-goal"]}>
<Pair single id="talentsinglemindedappraiser-single-minded-appraiser-ex-fn18-5"><Link to="/talent/single_minded_appraiser">⮞</Link> Single-Minded Appraiser (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-18.5" id="ability-rogue_talents-fake-fn-18.5" data-hash-target to="ability-rogue_talents-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/race/catfolk">Catfolk</Link></Pair>
<Pair title="Ability">A catfolk rogue with this talent is skilled at determining the value of sparkly things. She can always take 10 when appraising gems and jewelry.</Pair>
</Ability>
<Ability id="talentviciousclaws-vicious-claws-ex-fn18-6" icon={["upgrade"]}>
<Pair single id="talentviciousclaws-vicious-claws-ex-fn18-6"><Link to="/talent/vicious_claws">⮞</Link> Vicious Claws (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-18.6" id="ability-rogue_talents-fake-fn-18.6" data-hash-target to="ability-rogue_talents-fake-fn-18-target">18</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/race/catfolk">Catfolk</Link>, <em>cat's claws</em> racial trait</Pair>
<Pair title="Ability">A catfolk with this talent uses d8s to roll sneak attack damage instead of d6s, but only when she uses her claws to make the sneak attack.</Pair>
</Ability>
<h3 id="ability-rogue_talents-spellcasting-talents" data-hash-target>Spellcasting Talents</h3>
<Ability id="talentcloyingshades-cloying-shades-su-fn19" icon={["armor-downgrade"]}>
<Pair single id="talentcloyingshades-cloying-shades-su-fn19"><Link to="/talent/cloying_shades">⮞</Link> Cloying Shades (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-19" id="ability-rogue_talents-fake-fn-19" data-hash-target to="ability-rogue_talents-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Prerequisites">Has <em>dimension door</em> as a spell or spell-like ability (including the <em>abundant step</em> or <em>shadow jump</em> class feature)</Pair>
<Pair title="Ability">When a rogue with this talent uses <Link to="/spell/dimension_door">dimension door</Link> as a spell or spell-like ability, including the <em>abundant step</em> or <em>shadow jump</em> class feature, then all creatures adjacent to the rogue at the start and end of her teleportation are <Link to="/rule/entangled">entangled</Link> by grasping shadows for 1 round (although the creatures are not anchored in place). A successful Reflex saving throw negates this effect. The DC of this saving throw is equal to 10 + 1/2 the rogue's level + the rogue's Intelligence or Charisma modifier (whichever is higher).</Pair>
</Ability>
<Ability id="talentextraearthcraft-extra-earthcraft-fn20" icon={["upgrade"]}>
<Pair single id="talentextraearthcraft-extra-earthcraft-fn20"><Link to="/talent/extra_earthcraft">⮞</Link> Extra Earthcraft <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-20" id="ability-rogue_talents-fake-fn-20" data-hash-target to="ability-rogue_talents-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Prerequisites">The <Link to="/arc-rogue/earthshadow">earthcraft</Link> ability</Pair>
<Pair title="Passive Ability">The rogue gains 2 additional earthcraft points each day.</Pair>
</Ability>
<Ability id="talentminormagic-minor-magic-sp-fn3-3" icon={["magic-swirl"]}>
<Pair single id="talentminormagic-minor-magic-sp-fn3-3"><Link to="/talent/minor_magic">⮞</Link> Minor Magic (Sp) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-3.3" id="ability-rogue_talents-fake-fn-3.3" data-hash-target to="ability-rogue_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">Intelligence 10+</Pair>
<Pair title="Ability">A rogue with this talent gains the ability to cast a 0-level spell from the <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/spells_wizard">wizard</Link> spell list. This spell can be cast three times a day as a spell-like ability. The caster level for this ability is equal to the rogue's level. The save DC for this spell is 10 + the rogue's Intelligence modifier.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="talentdemonlantern-demon-lantern-sp-fn21" icon={["magic-swirl"]}>
<Pair single id="talentdemonlantern-demon-lantern-sp-fn21"><Link to="/talent/demon_lantern">⮞</Link> Demon Lantern (Sp) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-21" id="ability-rogue_talents-fake-fn-21" data-hash-target to="ability-rogue_talents-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Prerequisites">Intelligence 11+, <Link to="/talent/minor_magic">minor magic</Link> (<em>dancing lights</em>) or otherwise able to cast <em>dancing lights</em></Pair>
<Pair title="Ability">Once per day when she casts <Link to="/spell/dancing_lights">dancing lights</Link>, the rogue can conjure a single <em>demon's lantern</em> instead of the usual four lights. A <em>demon lantern</em> acts in all ways as a <Link to="/spell/hypnotic_pattern">hypnotic pattern</Link> spell cast by a wizard, except it also casts light as a <Link to="/eq-misc/torch">torch</Link> and it <Link to="/misc/fascinate">fascinates</Link> only a single target whose Hit Dice do not exceed the rogue's class level. The save DC of this effect is equal to 11 + the rogue's Intelligence modifier.</Pair>
</Ability>
<Ability id="talentgloommagic-gloom-magic-sp-fn4-7" icon={["magic-swirl"]}>
<Pair single id="talentgloommagic-gloom-magic-sp-fn4-7"><Link to="/talent/gloom_magic">⮞</Link> Gloom Magic (Sp) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-4.7" id="ability-rogue_talents-fake-fn-4.7" data-hash-target to="ability-rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">Intelligence 12+, <Link to="/talent/minor_magic">minor magic</Link></Pair>
<Pair title="Ability">A rogue with this talent gains the ability to cast <Link to="/spell/darkness">darkness</Link> two times per day as a spell-like ability. The darkness created by this ability does not impair the rogue's vision. The caster level for this ability is equal to the rogue's level.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="talentgreatergloommagic-greater-gloom-magic-sp-fn4-8" icon={["magic-swirl"]}>
<Pair single id="talentgreatergloommagic-greater-gloom-magic-sp-fn4-8"><Link to="/talent/greater_gloom_magic">⮞</Link> Greater Gloom Magic (Sp) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-4.8" id="ability-rogue_talents-fake-fn-4.8" data-hash-target to="ability-rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">Intelligence 13+, <Link to="/talent/gloom_magic">gloom magic</Link>, <Link to="/talent/minor_magic">minor magic</Link></Pair>
<Pair title="Ability">A rogue with this talent gains the ability to cast <Link to="/spell/deeper_darkness">deeper darkness</Link> once each day as a spell-like ability. The darkness created by this ability does not impair the rogue's vision. The caster level for this ability is equal to the rogue's level.</Pair>
</Ability>
</div>
<Ability id="talentinnocentfacade-innocent-facade-sp-fn22" icon={["magic-swirl"]}>
<Pair single id="talentinnocentfacade-innocent-facade-sp-fn22"><Link to="/talent/innocent_facade">⮞</Link> Innocent Facade (Sp) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-22" id="ability-rogue_talents-fake-fn-22" data-hash-target to="ability-rogue_talents-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/talent/minor_magic">Minor magic</Link></Pair>
<Pair title="Ability">Once per day, a rogue with this talent can use <Link to="/spell/innocence">innocence</Link> as a spell-like ability, using her rogue level as the spell's caster level.</Pair>
</Ability>
<Ability id="talentmajormagic-major-magic-sp-fn3-4" icon={["magic-swirl"]}>
<Pair single id="talentmajormagic-major-magic-sp-fn3-4"><Link to="/talent/major_magic">⮞</Link> Major Magic (Sp) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-3.4" id="ability-rogue_talents-fake-fn-3.4" data-hash-target to="ability-rogue_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">Intelligence 11+, <Link to="/talent/minor_magic">minor magic</Link></Pair>
<Pair title="Ability">A rogue with this talent gains the ability to cast a 1st-level spell from the <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/spells_wizard">wizard</Link> spell list two times a day as a spell-like ability. The caster level for this ability is equal to the rogue's level. The save DC for this spell is 11 + the rogue's Intelligence modifier.</Pair>
</Ability>
</div>
<Ability id="talentoneofthosefaces-one-of-those-faces-sp-fn23" icon={["magic-swirl"]}>
<Pair single id="talentoneofthosefaces-one-of-those-faces-sp-fn23"><Link to="/talent/one_of_those_faces">⮞</Link> One of Those Faces (Sp) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-23" id="ability-rogue_talents-fake-fn-23" data-hash-target to="ability-rogue_talents-fake-fn-23-target">23</InnerLink></sup></Pair>
<Pair title="Ability">Each day, you can use <Link to="/spell/disguise_self">disguise self</Link> as a spell-like ability for up to 10 minutes per character level. This duration need not be continuous, but it must be used in 10-minute increments.</Pair>
<Pair title="Special">Once you have used this ability, whenever you use it for the next 24 hours you must take the same alternate appearance.</Pair>
</Ability>
<Ability id="talentshadowduplicate-shadow-duplicate-sp-fn4-9" icon={["armor-upgrade"]}>
<Pair single id="talentshadowduplicate-shadow-duplicate-sp-fn4-9"><Link to="/talent/shadow_duplicate">⮞</Link> Shadow Duplicate (Sp) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-4.9" id="ability-rogue_talents-fake-fn-4.9" data-hash-target to="ability-rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Immediate Action">When the rogue is hit, the rogue can create a single shadow duplicate of herself, as per <Link to="/spell/mirror_image">mirror image</Link>. The GM randomly determines whether the attack hit the rogue or the shadow duplicate. The shadow duplicate lasts for a number of rounds equal to the rogue's level, or until the shadow duplicate is dispelled or destroyed. This ability does not stack with the <em>mirror image</em> spell. The caster level for this ability is equal to the rogue's level.</Pair>
</Ability>
<Ability id="talentwildmagic-wild-magic-sp-fn16-2" icon={["magic-swirl"]}>
<Pair single id="talentwildmagic-wild-magic-sp-fn16-2"><Link to="/talent/wild_magic">⮞</Link> Wild Magic (Sp) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-16.2" id="ability-rogue_talents-fake-fn-16.2" data-hash-target to="ability-rogue_talents-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Prerequisites">Wisdom 10+</Pair>
<Pair title="Ability">A rogue with this talent gains the ability to cast a 0-level spell from the <Link to="/main/druid_spell">druid spell list</Link>. This spell can be cast three times per day as a spell-like ability. The caster level for this ability is equal to the rogue's level. The save DC for this spell is 10 + the rogue's Wisdom modifier.</Pair>
</Ability>
<h3 id="ability-rogue_talents-use-magic-device-talents" data-hash-target>Use Magic Device Talents</h3>
<Ability id="talentexpertcypher-expert-cypher-ex-fn24" icon={["upgrade"]}>
<Pair single id="talentexpertcypher-expert-cypher-ex-fn24"><Link to="/talent/expert_cypher">⮞</Link> Expert Cypher (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-24" id="ability-rogue_talents-fake-fn-24" data-hash-target to="ability-rogue_talents-fake-fn-24-target">24</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this ability can attempt a Linguistics check to decipher a single page of text as a <strong className="hl">full-round action</strong> instead of taking 1 minute as normal.</Pair>
<Pair title="Passive Ability">When the rogue attempts a <Link to="/skill/use_magic_device">Use Magic Device</Link> check to cast a spell from a scroll, she is treated as though she had the minimum score in the appropriate ability score to cast that spell.</Pair>
<Pair title="Ability">The rogue can choose to add her Intelligence modifier to her Use Magic Device skill checks instead of her Charisma modifier.</Pair>
</Ability>
<Ability id="talentoccultdungeoneer-occult-dungeoneer-su-fn25" icon={["magic-swirl","upgrade"]}>
<Pair single id="talentoccultdungeoneer-occult-dungeoneer-su-fn25" flavor="Street thieves in Absalom expect wares to be securely locked, and sometimes it takes high-quality tools and magic training to ensure there's a meal at the end of the day."><Link to="/talent/occult_dungeoneer">⮞</Link> Occult Dungeoneer (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-25" id="ability-rogue_talents-fake-fn-25" data-hash-target to="ability-rogue_talents-fake-fn-25-target">25</InnerLink></sup></Pair>
<Pair title="Ability"><p>A rogue with this ability can use <Link to="/misc/spell_trigger">spell trigger</Link> and <Link to="/misc/spell_completion">spell completion</Link> items as if the following spells were on a spell list to which he has access: <Link to="/spell/detect_secret_doors">detect secret doors</Link>, <Link to="/spell/detect_snares_and_pits">detect snares and pits</Link>, <Link to="/spell/knock">knock</Link>, <Link to="/spell/locate_object">locate object</Link>, and <Link to="/spell/obscure_object">obscure object</Link>.</p>
<p>If the spell-trigger device allows a wielder to apply his own caster level (such as with a staff), the rogue may use his class level as his caster level.</p>
</Pair>
<Pair title="Ability">The rogue may also use <em>knock</em> as a supernatural ability once per day, using his rogue level as his caster level.</Pair>
</Ability>
<Ability id="talentspellstoring-spell-storing-su-fn25-2" icon={["magic-swirl"]}>
<Pair single id="talentspellstoring-spell-storing-su-fn25-2"><Link to="/talent/spell_storing">⮞</Link> Spell Storing (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-25.2" id="ability-rogue_talents-fake-fn-25.2" data-hash-target to="ability-rogue_talents-fake-fn-25-target">25</InnerLink></sup></Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/use_magic_device">Use Magic Device</Link></Pair>
<Pair title="Ability">The rogue can store within himself a single targeted harmless spell of up to 2nd level. The spell must have a casting time of 1 standard action. Anytime a spell that meets these conditions is cast on the rogue, and he does not already have a spell stored, he can choose to store it rather than have it take effect immediately. Anytime afterward, as a <strong className="hl">standard action</strong>, the rogue can have the spell take effect (acting in all ways as if it had just been cast on him).</Pair>
</Ability>
<Ability id="talentthewholetime-the-whole-time-su-fn25-3" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="talentthewholetime-the-whole-time-su-fn25-3" flavor={<>Mercenaries in the employ of the <Link to="/rule/aspis_consortium">Aspis Consortium</Link> often use <em>wands of invisibility</em> to attack protected targets, then blend into the crowd to escape or disguise the source of the next attack.</>}><Link to="/talent/the_whole_time">⮞</Link> The Whole Time (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-25.3" id="ability-rogue_talents-fake-fn-25.3" data-hash-target to="ability-rogue_talents-fake-fn-25-target">25</InnerLink></sup></Pair>
<Pair title="Ability"><p>A rogue with this ability is practiced at attacking from magical concealment. He can use <Link to="/misc/spell_trigger">spell trigger</Link> and <Link to="/misc/spell_completion">spell completion</Link> items as if the following spells were on a spell list to which he has access: <Link to="/spell/greater_invisibility">greater invisibility</Link>, <Link to="/spell/invisibility">invisibility</Link>, and <Link to="/spell/vanish">vanish</Link>.</p>
<p>Additionally, if the rogue becomes visible as a result of a weapon or spell attack, he can sheathe his weapon as a <strong className="hl">free action</strong> and instantly adopt a neutral posture. With a successful Bluff or Disguise check (opposed by witnesses' Sense Motive or Perception checks, whichever is higher), there is no obvious sign that the rogue is the source of the attack (though a lack of any other reasonable candidate can still lead observers to draw the correct conclusion).</p>
</Pair>
</Ability>
<h3 id="ability-rogue_talents-other-magic-related-talents" data-hash-target>Other Magic-Related Talents</h3>
<Ability id="talentaspexiasmysticism-aspexias-mysticism-ex-fn8-4" icon={["stairs-goal"]}>
<Pair single id="talentaspexiasmysticism-aspexias-mysticism-ex-fn8-4"><Link to="/talent/aspexias_mysticism">⮞</Link> Aspexia's Mysticism (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-8.4" id="ability-rogue_talents-fake-fn-8.4" data-hash-target to="ability-rogue_talents-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability">The rogue has been trained in a minor occult technique. The rogue gains <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="talentblackmarketconnections-black-market-connection-ex-fn17-2" icon={["upgrade"]}>
<Pair single id="talentblackmarketconnections-black-market-connection-ex-fn17-2"><Link to="/talent/black_market_connections">⮞</Link> Black Market Connection (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-17.2" id="ability-rogue_talents-fake-fn-17.2" data-hash-target to="ability-rogue_talents-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Ability"><p>A rogue with this talent gains better access to magic items from black market connections. She treats every <Link to="/rule/settlements_and_districts">settlement</Link> as one size greater for the purpose of determining the gp limit of the base value of items for sale, as well as the number of minor, medium, and major magic items for sale in the settlement. If the settlement is already a metropolis, all minor and medium magic items are for sale, as well as 3d8 major magic items.</p>
<p>With a successful Diplomacy check, the rogue can treat the settlement as two sizes larger. If the settlement is already a metropolis and she succeeds at the check, all magic items are for sale. If the settlement is already a large city and she succeeds at the check, all minor and medium magic items are for sale, as well as 3d8 major magic items.</p>
<p>With a successful check, the rogue can also sell stolen items on the black market. If the check fails by 5 or more, the rogue does something to spook the market, and treats the city as normal for 1 week. Furthermore, those in control of the black market may alert the authorities to the rogue's presence in an act of reprisal for spooking the market or to divert attention away from their illicit activities. The DCs of the checks are by settlement size and are given in the table below.</p>
<ScrollContainer id="ability-rogue_talents--table-0"><table>
<thead>
<tr>
<th>Community Size</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Thorp</td>
<td>10</td>
</tr>
<tr>
<td>Hamlet</td>
<td>12</td>
</tr>
<tr>
<td>Village</td>
<td>15</td>
</tr>
<tr>
<td>Small town</td>
<td>18</td>
</tr>
<tr>
<td>Large town</td>
<td>20</td>
</tr>
<tr>
<td>Small city</td>
<td>25</td>
</tr>
<tr>
<td>Large city</td>
<td>30</td>
</tr>
<tr>
<td>Metropolis</td>
<td>35</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
</Ability>
<Ability id="talentbomber-bomber-su-fn26" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="talentbomber-bomber-su-fn26"><Link to="/talent/bomber">⮞</Link> Bomber (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-26" id="ability-rogue_talents-fake-fn-26" data-hash-target to="ability-rogue_talents-fake-fn-26-target">26</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can make a number of bombs per day equal to her Intelligence modifier (minimum 1). These bombs act as <Link to="/class/alchemist">alchemist's</Link> bombs, except they deal damage equal to the damage dealt by the rogue's <Link to="/ability/sneak_attack">sneak attack</Link> (the rogue doesn't add her Intelligence modifier to this damage).</Pair>
</Ability>
<Ability id="bomb-su" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="bomb-su" flavor="Relevant text from the alchemist class ability.">Bomb (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Standard Action">You can make and throw bombs. Drawing the components of, creating, and throwing a bomb is a single action. Thrown bombs have a range of 20 feet and use the <Link to="/rule/throw_splash_weapon">Throw Splash Weapon special attack</Link>. On a direct hit, your bomb inflicts 1d6 points of fire damage.</Pair>
<Pair title="Info"><p>In addition to magical extracts, alchemists are adept at swiftly mixing various volatile chemicals and infusing them with their magical reserves to create powerful bombs that they can hurl at their enemies. Bombs are unstable, and if not used in the round they are created, they degrade and become inert - their method of creation prevents large volumes of explosive material from being created and stored.</p>
<p>Bombs are considered weapons and can be selected using feats such as <Link to="/feat/point_blank_shot">Point-Blank Shot</Link> and <Link to="/feat/weapon_focus">Weapon Focus</Link>.</p>
</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>Yes</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="talentbombersdiscovery-bombers-discovery-su-fn26-2" icon={["stairs-goal"]}>
<Pair single id="talentbombersdiscovery-bombers-discovery-su-fn26-2"><Link to="/talent/bombers_discovery">⮞</Link> Bomber's Discovery (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-26.2" id="ability-rogue_talents-fake-fn-26.2" data-hash-target to="ability-rogue_talents-fake-fn-26-target">26</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/talent/bomber">Bomber</Link></Pair>
<Pair title="Ability">A rogue with this talent gains an alchemist's <Link to="/ability/discovery">discovery</Link> that modifies a bomb.</Pair>
</Ability>
</div>
<Ability id="talenteldritchconduit-eldritch-conduit-su-fn25-4" icon={["magic-swirl"]}>
<Pair single id="talenteldritchconduit-eldritch-conduit-su-fn25-4" flavor="Survival in the Mana Wastes between the nations of Nex and Geb can depend heavily on locating sufficient magical equipment, which sometimes involves stealing power from a wand or scroll to power a more necessary one."><Link to="/talent/eldritch_conduit">⮞</Link> Eldritch Conduit (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-25.4" id="ability-rogue_talents-fake-fn-25.4" data-hash-target to="ability-rogue_talents-fake-fn-25-target">25</InnerLink></sup></Pair>
<Pair title="Full-Round Action">A rogue with this talent can use two potions, two wands, or two scrolls. Each item is expended or loses a charge as if used normally. The rogue chooses to gain the magical effect of one, but calculates its effects using the caster level of the other. The rogue must still succeed at a <Link to="/skill/use_magic_device">Use Magic Device</Link> check to operate scrolls or wands unless some other ability allows him to do so, but makes only one skill check to operate both items.</Pair>
</Ability>
<Ability id="talentfollowalong-follow-along-ex-fn27" icon={["armor-downgrade"]}>
<Pair single id="talentfollowalong-follow-along-ex-fn27" flavor="A rogue with this talent is familiar enough with enchantment magic to fool it, using spellcasters' complacency to set them up for a surprise attack."><Link to="/talent/follow_along">⮞</Link> Follow Along (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-27" id="ability-rogue_talents-fake-fn-27" data-hash-target to="ability-rogue_talents-fake-fn-27-target">27</InnerLink></sup></Pair>
<Pair title="Ability"><p>Whenever she succeeds at a saving throw against an enchantment effect, the rogue learns the spell's effect on a failed save, allowing her to play along and pretend to have failed her save. If she does so, the spellcaster does not learn that she succeeded at her saving throw, even if she was the only target, though she must succeed at an opposed Bluff check against a spellcaster's Sense Motive check to determine whether she is under the enchantment's effects.</p>
<p>While this ruse is in place, the spellcaster is <Link to="/rule/flat_footed">flat-footed</Link> against the rogue's first attack. If the spellcaster sees the rogue perform (or fail to perform) an action that would be impossible if she were under the enchantment's effect, he automatically discovers her ruse.</p>
</Pair>
</Ability>
<Ability id="talentgrigjig-grig-jig-su-fn21-2" icon={["magic-swirl"]}>
<Pair single id="talentgrigjig-grig-jig-su-fn21-2"><Link to="/talent/grig_jig">⮞</Link> Grig Jig (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-21.2" id="ability-rogue_talents-fake-fn-21.2" data-hash-target to="ability-rogue_talents-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Prerequisites">Intelligence 12+</Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability"><p>The rogue can weave a bit of old Varisian magic into her footwork, dancing with an infectious passion that compels another nearby to join in. The rogue can target one humanoid within 30 feet and attempt a <Link to="/skill/perform">Perform</Link> (dance) check as a <strong className="hl">full-round action</strong> that does not provoke an attack of opportunity. Her target must succeed at a Will save (DC equal to the rogue's Perform [dance]) or it begins to dance uncontrollably.</p>
<p>So long as the rogue continues to spend a full-round action dancing each round, the affected target does so as well. If the target is attacked or otherwise in immediate danger while dancing, the effect ends.</p>
<p>Each round on its turn, the target can attempt an <Link to="/skill/acrobatics">Acrobatics</Link> or Perform (dance) check or a Will save (target's choice) against the rogue's Perform (dance) check to end the effect.</p>
</Pair>
<Pair title="Special">A target who resists the <em>jig</em> can not be affected by the same rogue's <em>jig</em> for 24 hours. The <em>grig jig</em> is a mind-affecting effect.</Pair>
</Ability>
<Ability id="talentscryslip-scry-slip-su-fn22-2" icon={["armor-upgrade"]}>
<Pair single id="talentscryslip-scry-slip-su-fn22-2"><Link to="/talent/scry_slip">⮞</Link> Scry Slip (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-22.2" id="ability-rogue_talents-fake-fn-22.2" data-hash-target to="ability-rogue_talents-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Passive Ability">Whenever a rogue with this talent is targeted by a scrying effect that allows a Will save, the caster of the divination must succeed at a caster level check (DC = 15 + the rogue's class level). This talent wards the rogue and any objects she is holding or carrying.</Pair>
</Ability>
<Ability id="talentscryingfamiliarity-scrying-familiarity-ex-fn28" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="talentscryingfamiliarity-scrying-familiarity-ex-fn28" flavor="You are well acquainted with scrying sensors."><Link to="/talent/scrying_familiarity">⮞</Link> Scrying Familiarity (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-28" id="ability-rogue_talents-fake-fn-28" data-hash-target to="ability-rogue_talents-fake-fn-28-target">28</InnerLink></sup></Pair>
<Pair title="Ability"><p>You can roll twice and take the better result on saving throws against <Link to="/spelldef/scrying">divination (scrying)</Link> spells and effects, on <Link to="/skill/perception">Perception</Link> checks to notice scrying sensors, and on caster level checks to overcome spell resistance when you use a scrying spell or effect.</p>
<p>If you notice a magical sensor, you can attempt a <Link to="/skill/stealth">Stealth</Link> check opposed by the caster's caster level check to avoid being detected by the sensor.</p>
</Pair>
</Ability>
<Ability id="talentshadesofgray-shades-of-gray-ex-fn27-2" icon={["armor-upgrade"]}>
<Pair single id="talentshadesofgray-shades-of-gray-ex-fn27-2"><Link to="/talent/shades_of_gray">⮞</Link> Shades of Gray (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-27.2" id="ability-rogue_talents-fake-fn-27.2" data-hash-target to="ability-rogue_talents-fake-fn-27-target">27</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent uses mental and emotional tricks to protect herself from attempts to discern her alignment. This offers her the benefits of <Link to="/spell/undetectable_alignment">undetectable alignment</Link> whenever she chooses, though she must be conscious to maintain the effect.</Pair>
</Ability>
<Ability id="talentumbralgear-umbral-gear-su-fn4-10" icon={["magic-swirl"]}>
<Pair single id="talentumbralgear-umbral-gear-su-fn4-10"><Link to="/talent/umbral_gear">⮞</Link> Umbral Gear (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-4.10" id="ability-rogue_talents-fake-fn-4.10" data-hash-target to="ability-rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Standard Action"><p>While in an area of <Link to="/rule/dim_light">dim light</Link> or darkness, a rogue with this talent can coalesce wisps of shadow into a quasi-real, functional item. The rogue must choose whether to make a <Link to="/eq-misc/crowbar">crowbar</Link>, 50 feet of <Link to="/eq-misc/silk_rope">silk rope</Link>, a <Link to="/eq-misc/glass_cutter">glass cutter</Link>, a <Link to="/main/equipment_weapons_light">light</Link> melee weapon with which she is proficient, a <Link to="/eq-misc/reversible_cloak">reversible cloak</Link>, <Link to="/eq-misc/thieves_tools">thieves' tools</Link>, or a <Link to="/eq-misc/wire_saw">wire saw</Link>; the GM may allow other similar items. The rogue can use such items for a number of minutes per day equal to 10 plus her rogue level. This duration does not need to be consecutive, but it must be used in 1-minute increments.</p>
<p>An item created with this ability remains until the rogue is no longer touching it, or until the rogue runs out of duration for this talent, at which time it dissolves.</p>
</Pair>
<Pair title="Special">A rogue can select this talent more than once, gaining an additional 10 minutes of duration each time this talent is selected. If a rogue has selected this talent at least twice, she adds 50 feet of silk rope with a <Link to="/eq-misc/grappling_hook">grappling hook</Link>, a <Link to="/rule/masterwork_a">masterwork</Link> light melee weapon with which she is proficient, and <Link to="/eq-misc/masterwork_thieves_tools">masterwork thieves' tools</Link> to the list of things she can create.</Pair>
</Ability>
<h3 id="ability-rogue_talents-ally-related-talents" data-hash-target>Ally-Related Talents</h3>
<Ability id="talentacrobaticassist-acrobatic-assist-ex-fn11-3" icon={["upgrade","shield-reflect"]}>
<Pair single id="talentacrobaticassist-acrobatic-assist-ex-fn11-3"><Link to="/talent/acrobatic_assist">⮞</Link> Acrobatic Assist (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-11.3" id="ability-rogue_talents-fake-fn-11.3" data-hash-target to="ability-rogue_talents-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Ability"><p>You can expend an attack of opportunity to perform an <Link to="/rule/aid_another">aid another</Link> action to assist an adjacent ally's Acrobatics check, so long as he makes the check as part of movement that passes through your space or an adjacent space.</p>
<p>Additionally, whenever you use the aid another action to assist an ally in making an Acrobatics check and you succeed, your ally gains a +1 dodge bonus to AC against attacks of opportunity caused when he moves out of or within a threatened area, until the end of his turn.</p>
</Pair>
</Ability>
<Ability id="talentassaultleader-assault-leader-ex-fn2-5" icon={["mailed-fist"]}>
<Pair single id="talentassaultleader-assault-leader-ex-fn2-5"><Link to="/talent/assault_leader">⮞</Link> Assault Leader (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-2.5" id="ability-rogue_talents-fake-fn-2.5" data-hash-target to="ability-rogue_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">Once per day, when the rogue misses with an attack on a flanked opponent, she can designate a single ally who is also <Link to="/rule/flanking">flanking</Link> the target that her attack missed. That ally can make a single melee attack against the opponent as an immediate action.</Pair>
</Ability>
<Ability id="talentgotyourback-got-your-back-ex-fn11-4" icon={["upgrade"]}>
<Pair single id="talentgotyourback-got-your-back-ex-fn11-4"><Link to="/talent/got_your_back">⮞</Link> Got Your Back (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-11.4" id="ability-rogue_talents-fake-fn-11.4" data-hash-target to="ability-rogue_talents-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Immediate Action">Once per round, you may expend an attack of opportunity to attempt an <Link to="/rule/aid_another_2">aid another</Link> check to improve an ally's attack. You and your ally must both be <Link to="/rule/flanking">flanking</Link> the same opponent. This counts as an attack of opportunity.</Pair>
</Ability>
<Ability id="talentheadsup-heads-up-ex-fn11-5" icon={["upgrade"]}>
<Pair single id="talentheadsup-heads-up-ex-fn11-5"><Link to="/talent/heads_up">⮞</Link> Heads Up (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-11.5" id="ability-rogue_talents-fake-fn-11.5" data-hash-target to="ability-rogue_talents-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Ability">When you make a <Link to="/skill/perception">Perception</Link> check, as an <strong className="hl">immediate</strong> or <strong className="hl">swift action</strong> you can allow one adjacent ally to act as if they had also made a Perception check with the same result.</Pair>
</Ability>
<Ability id="talentsacrificeself-sacrifice-self-ex-fn6-3" icon={["shield-reflect"]}>
<Pair single id="talentsacrificeself-sacrifice-self-ex-fn6-3"><Link to="/talent/sacrifice_self">⮞</Link> Sacrifice Self (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-6.3" id="ability-rogue_talents-fake-fn-6.3" data-hash-target to="ability-rogue_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites"><em>Evasion</em></Pair>
<Pair title="Ability"><p>A rogue who makes a successful Reflex save against an area effect can ignore the benefits of her <Link to="/ability/evasion">evasion</Link> ability to shield an adjacent ally against the effect, essentially halving the damage that ally would normally take.</p>
<p>A rogue with <Link to="/talent/improved_evasion">improved evasion</Link> can attempt a secondary save against her ally's damage. If the save is successful, neither she nor her ally takes any damage.</p>
</Pair>
</Ability>
<Ability id="talentshoveaside-shove-aside-ex-fn11-6" icon={["shield-reflect"]}>
<Pair single id="talentshoveaside-shove-aside-ex-fn11-6"><Link to="/talent/shove_aside">⮞</Link> Shove Aside (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-11.6" id="ability-rogue_talents-fake-fn-11.6" data-hash-target to="ability-rogue_talents-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Prerequisites"><em>Evasion</em></Pair>
<Pair title="Ability">When you and an adjacent ally are both in the area of an attack that requires a saving throw, you can take a -4 penalty on your saving throw to grant your ally a +4 bonus on his saving throw. You lose the <Link to="/ability/evasion">evasion</Link> ability against this attack. If you have <Link to="/talent/improved_evasion">improved evasion</Link>, it is reduced to evasion for this attack instead.</Pair>
</Ability>
<h3 id="ability-rogue_talents-combat-talents" data-hash-target>Combat Talents</h3>
<Ability id="talentacrobaticstunt-acrobatic-stunt-ex-fn12-3" icon={["armor-upgrade","broken-shield"]}>
<Pair single id="talentacrobaticstunt-acrobatic-stunt-ex-fn12-3"><Link to="/talent/acrobatic_stunt">⮞</Link> Acrobatic Stunt (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-12.3" id="ability-rogue_talents-fake-fn-12.3" data-hash-target to="ability-rogue_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/acrobatics">Acrobatics</Link></Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Immediate Action">When flanked by at least two opponents, a rogue with this talent can, when any of the threatening opponents attacks her, attempt an Acrobatics check against the highest CMD of the threatening creatures plus 2 per threatening creature beyond the second. If successful, the rogue may take a 5-foot step in any direction, so long as she remains within the reach of the attacker triggering the movement. The rogue's final position is used to determine whether the attacker benefits from <Link to="/rule/flanking">flanking</Link>. On a failed check, the rogue falls <Link to="/rule/prone">prone</Link> in her original position and the attack resolves as normal (the opponent gains a +4 bonus for attacking a prone target).</Pair>
</Ability>
<Ability id="talentambuscadinggrapple-ambuscading-grapple-ex-fn1-2" icon={["mailed-fist"]}>
<Pair single id="talentambuscadinggrapple-ambuscading-grapple-ex-fn1-2"><Link to="/talent/ambuscading_grapple">⮞</Link> Ambuscading Grapple (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-1.2" id="ability-rogue_talents-fake-fn-1.2" data-hash-target to="ability-rogue_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">When a rogue with this talent succeeds at a combat maneuver check to grapple an unaware opponent, she can immediately deal her sneak attack damage to the target. This counts as having hit with a sneak attack for the purpose of other abilities and talents.</Pair>
</Ability>
<Ability id="talentcardsharp-card-sharp-su-fn21-3" icon={["stairs-goal","bowman"]}>
<Pair single id="talentcardsharp-card-sharp-su-fn21-3"><Link to="/talent/card_sharp">⮞</Link> Card Sharp (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-21.3" id="ability-rogue_talents-fake-fn-21.3" data-hash-target to="ability-rogue_talents-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Ability">The rogue gains <Link to="/feat/deadly_dealer">Deadly Dealer</Link> as a bonus feat, even if she does not meet the prerequisites. Thrown cards are treated as <Link to="/eq-weapon/dart">darts</Link>, but the rogue cannot imbue cards with additional power unless she has the <Link to="/feat/arcane_strike">Arcane Strike</Link> feat. This talent otherwise functions as the Deadly Dealer feat.</Pair>
</Ability>
<Ability id="talentcastling-castling-ex-fn20-2" icon={["armor-upgrade"]}>
<Pair single id="talentcastling-castling-ex-fn20-2"><Link to="/talent/castling">⮞</Link> Castling (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-20.2" id="ability-rogue_talents-fake-fn-20.2" data-hash-target to="ability-rogue_talents-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Passive Ability">The rogue treats soft cover granted by creatures of her size or larger as though it were <Link to="/rule/cover">cover</Link> instead. Cover the rogue gains from this talent does not allow her to attempt Stealth checks.</Pair>
</Ability>
<Ability id="talentcombatswipe-combat-swipe-fn2-6-fn29" icon={["stairs-goal"]}>
<Pair single id="talentcombatswipe-combat-swipe-fn2-6-fn29"><Link to="/talent/combat_swipe">⮞</Link> Combat Swipe <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-2.6" id="ability-rogue_talents-fake-fn-2.6" data-hash-target to="ability-rogue_talents-fake-fn-2-target">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-29" id="ability-rogue_talents-fake-fn-29" data-hash-target to="ability-rogue_talents-fake-fn-29-target">29</InnerLink></sup></Pair>
<Pair title="Ability">A rogue who selects this talent gains <Link to="/feat/improved_steal">Improved Steal</Link> as a bonus feat.</Pair>
</Ability>
<div className="sideNoteWrap singular optional elephant"><ScrollContainer id="ability-rogue_talents--table-1"><table><tbody><tr><ThLink scope="row" to="/rule/the_elephant_in_the_room"><IonIcon aria-label="The Elephant in the Room" icon="/icons/elephant.svg" /></ThLink><td><p>This talent does not exist.</p>
</td></tr></tbody></table></ScrollContainer></div><Ability id="talentcombattrick-combat-trick-fn3-5" icon={["stairs-goal"]}>
<Pair single id="talentcombattrick-combat-trick-fn3-5"><Link to="/talent/combat_trick">⮞</Link> Combat Trick <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-3.5" id="ability-rogue_talents-fake-fn-3.5" data-hash-target to="ability-rogue_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">A rogue that selects this talent gains a bonus <Link to="/main/combat_feat">combat feat</Link>.</Pair>
</Ability>
<Ability id="talentdeftpalm-deft-palm-ex-fn17-3" icon={["stairs-goal"]}>
<Pair single id="talentdeftpalm-deft-palm-ex-fn17-3"><Link to="/talent/deft_palm">⮞</Link> Deft Palm (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-17.3" id="ability-rogue_talents-fake-fn-17.3" data-hash-target to="ability-rogue_talents-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can make a <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check to conceal a weapon while holding it in plain sight, even while she is being observed.</Pair>
</Ability>
<Ability id="talentdiseaseuse-disease-use-fn30" icon={["stairs-goal","mailed-fist"]}>
<Pair single id="talentdiseaseuse-disease-use-fn30"><Link to="/talent/disease_use">⮞</Link> Disease Use <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-30" id="ability-rogue_talents-fake-fn-30" data-hash-target to="ability-rogue_talents-fake-fn-30-target">30</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can apply filth from garbage, a sewer, a city street, a polluted area, or long-unwashed clothing or fur to a weapon as a <strong className="hl">standard action</strong>. Doing so causes the weapon to inflict <Link to="/disease/filth_fever">filth fever</Link> on its next strike. The rogue does not risk exposure to this disease unless she is damaged by the weapon.</Pair>
<Pair title="Special">After a successful attack with the weapon, the filth is dispersed and must be reapplied.</Pair>
</Ability>
<Ability id="talenteeriedisappearance-eerie-disappearance-ex-fn31" icon={["stairs-goal"]}>
<Pair single id="talenteeriedisappearance-eerie-disappearance-ex-fn31"><Link to="/talent/eerie_disappearance">⮞</Link> Eerie Disappearance (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-31" id="ability-rogue_talents-fake-fn-31" data-hash-target to="ability-rogue_talents-fake-fn-31-target">31</InnerLink></sup></Pair>
<Pair title="Prerequisites">6th-level rogue</Pair>
<Pair title="Full-Round Action"><p>The rogue can move up to her speed. If she successfully reaches a location that offers her <Link to="/rule/cover">cover</Link> or <Link to="/rule/concealment">concealment</Link>, any creature observing her must attempt a Perception check opposed by the rogue's Stealth check. On a failed check, the observer loses track of the rogue and fails to note where she moved to. The rogue does not take a penalty on this Stealth check for moving up to her speed.</p>
<p>At the end of her movement, the rogue can attempt an Intimidate check to demoralize all foes within 60 feet who were aware of her at any point during her movement and are unaware of her current location. She rolls the Intimidate check only once and compares her result to the DC for each opponent.</p>
</Pair>
</Ability>
<Ability id="talentescapingstunt-escaping-stunt-ex-fn12-4" icon={["armor-upgrade"]}>
<Pair single id="talentescapingstunt-escaping-stunt-ex-fn12-4"><Link to="/talent/escaping_stunt">⮞</Link> Escaping Stunt (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-12.4" id="ability-rogue_talents-fake-fn-12.4" data-hash-target to="ability-rogue_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/escape_artist">Escape Artist</Link></Pair>
<Pair title="Immediate Action">A rogue with this talent can attempt an Escape Artist check in place of a Reflex saving throw against any effect that would impose the <Link to="/rule/entangled">entangled</Link> condition on her.</Pair>
<Pair title="Ability">When she is the target of a grapple combat maneuver, a rogue with this talent can attempt an Escape Artist check as an <strong className="hl">immediate action</strong>, using the result of the skill check in place of her CMD against that combat maneuver attempt.</Pair>
<Pair title="Usage">1 grapple/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
</Ability>
<Ability id="talentfalseattacker-false-attacker-ex-fn31-2" icon={["stairs-goal"]}>
<Pair single id="talentfalseattacker-false-attacker-ex-fn31-2"><Link to="/talent/false_attacker">⮞</Link> False Attacker (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-31.2" id="ability-rogue_talents-fake-fn-31.2" data-hash-target to="ability-rogue_talents-fake-fn-31-target">31</InnerLink></sup></Pair>
<Pair title="Immediate Action">Whenever the rogue strikes a foe from hiding, she can attempt a <Link to="/skill/bluff">Bluff</Link> check (opposed by the target's Sense Motive or Perception check, whichever has a higher bonus) before rolling damage to convince the foe that another creature was the attacker. This Bluff check applies the normal modifiers for convincing a creature of a falsehood, but can be accomplished with just physical trickery (a shared language is not required).</Pair>
<Pair title="Special">If the Bluff is successful, and the rogue maintains concealment or cover, the rogue's stealth does not end.</Pair>
</Ability>
<Ability id="talentfeintfromshadows-feint-from-shadows-ex-fn4-11" icon={["armor-downgrade"]}>
<Pair single id="talentfeintfromshadows-feint-from-shadows-ex-fn4-11"><Link to="/talent/feint_from_shadows">⮞</Link> Feint from Shadows (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-4.11" id="ability-rogue_talents-fake-fn-4.11" data-hash-target to="ability-rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can <Link to="/skill/feint">feint</Link> in combat using a ranged weapon against a target within 30 feet and cause the opponent to lose his Dexterity modifier against her next melee or ranged attack. The rogue must have <Link to="/rule/concealment">concealment</Link> (but not full concealment) from the target of the feint.</Pair>
</Ability>
<Ability id="talentfinesserogue-finesse-rogue-fn3-6" icon={["stairs-goal"]}>
<Pair single id="talentfinesserogue-finesse-rogue-fn3-6"><Link to="/talent/finesse_rogue">⮞</Link> Finesse Rogue <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-3.6" id="ability-rogue_talents-fake-fn-3.6" data-hash-target to="ability-rogue_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">A rogue that selects this talent gains <Link to="/feat/weapon_finesse">Weapon Finesse</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="talentfirearmtraining-firearm-training-ex-fn17-4" icon={["stairs-goal"]}>
<Pair single id="talentfirearmtraining-firearm-training-ex-fn17-4"><Link to="/talent/firearm_training">⮞</Link> Firearm Training (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-17.4" id="ability-rogue_talents-fake-fn-17.4" data-hash-target to="ability-rogue_talents-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent gains <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (firearms).</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="talentgrit-grit-ex-fn17-5" icon={["stairs-goal"]}>
<Pair single id="talentgrit-grit-ex-fn17-5"><Link to="/talent/grit">⮞</Link> Grit (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-17.5" id="ability-rogue_talents-fake-fn-17.5" data-hash-target to="ability-rogue_talents-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/talent/firearm_training">Firearm training</Link></Pair>
<Pair title="Ability">A rogue with this talent gains the <Link to="/feat/amateur_gunslinger">Amateur Gunslinger</Link> feat and one <Link to="/main/grit_feat">grit feat</Link> of her choice. She must fulfill the prerequisites of the grit feat in order to choose it.</Pair>
</Ability>
</div>
<Ability id="talentflyingstunt-flying-stunt-ex-fn12-5" icon={["upgrade"]}>
<Pair single id="talentflyingstunt-flying-stunt-ex-fn12-5"><Link to="/talent/flying_stunt">⮞</Link> Flying Stunt (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-12.5" id="ability-rogue_talents-fake-fn-12.5" data-hash-target to="ability-rogue_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/fly">Fly</Link></Pair>
<Pair title="Swift Action">A rogue with this talent can attempt a Fly check against a target's CMD when <Link to="/rule/charging">charging</Link> from above that target. Success allows the rogue to add an amount damage equal to her Dexterity modifier to the attack's damage.</Pair>
<Pair title="Special">This additional damage is <Link to="/misc/precision_damage">precision damage</Link> and is not multiplied on a critical hit. A creature immune to sneak attacks is immune to this additional damage.</Pair>
</Ability>
<Ability id="talentfortifiedposition-fortified-position-ex-fn20-3" icon={["armor-upgrade"]}>
<Pair single id="talentfortifiedposition-fortified-position-ex-fn20-3"><Link to="/talent/fortified_position">⮞</Link> Fortified Position (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-20.3" id="ability-rogue_talents-fake-fn-20.3" data-hash-target to="ability-rogue_talents-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Passive Ability">Whenever the rogue gains a bonus on Reflex saves due to <Link to="/rule/cover">cover</Link>, she gains an equal bonus on Fortitude saves.</Pair>
</Ability>
<Ability id="talentmaneuveringdodge-maneuvering-dodge-ex-fn32" icon={["upgrade"]}>
<Pair single id="talentmaneuveringdodge-maneuvering-dodge-ex-fn32"><Link to="/talent/maneuvering_dodge">⮞</Link> Maneuvering Dodge (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-32" id="ability-rogue_talents-fake-fn-32" data-hash-target to="ability-rogue_talents-fake-fn-32-target">32</InnerLink></sup></Pair>
<Pair title="Passive Ability">Whenever a foe of the rogue's size or larger misses the rogue with a melee attack, the rogue gains a +2 bonus on any Acrobatics, Climb, Fly, and Swim checks she attempts for 1 round.</Pair>
<Pair title="At 8th Level">This bonus increases to +4.</Pair>
</Ability>
<Ability id="talentmienofdespair-mien-of-despair-su-fn4-12" icon={["armor-downgrade"]}>
<Pair single id="talentmienofdespair-mien-of-despair-su-fn4-12"><Link to="/talent/mien_of_despair">⮞</Link> Mien of Despair (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-4.12" id="ability-rogue_talents-fake-fn-4.12" data-hash-target to="ability-rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">When a rogue with this talent successfully demoralizes an opponent using the <Link to="/skill/intimidate">Intimidate</Link> skill or performs a successful <Link to="/rule/feint">feint</Link> against an opponent, the opponent loses any morale bonuses and cannot benefit from any morale bonuses for 1d4+1 rounds.</Pair>
</Ability>
<Ability id="talentpositioningattack-positioning-attack-ex-fn5-5" icon={["mailed-fist"]}>
<Pair single id="talentpositioningattack-positioning-attack-ex-fn5-5"><Link to="/talent/positioning_attack">⮞</Link> Positioning Attack (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-5.5" id="ability-rogue_talents-fake-fn-5.5" data-hash-target to="ability-rogue_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">Once per day, when a rogue with this talent hits a creature with a melee attack, she can move up to 30 feet without provoking attacks of opportunity. The movement must end in a space adjacent to the creature hit with the melee attack.</Pair>
</Ability>
<Ability id="talentresiliency-resiliency-ex-fn3-7" icon={["remedy"]}>
<Pair single id="talentresiliency-resiliency-ex-fn3-7"><Link to="/talent/resiliency">⮞</Link> Resiliency (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-3.7" id="ability-rogue_talents-fake-fn-3.7" data-hash-target to="ability-rogue_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Immediate Action">Once per day, a rogue with this ability can gain a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to the rogue's level. Activating this ability can only be performed when she is brought to below 0 hit points. This ability can be used to prevent her from dying.</Pair>
<Pair title="Special">These temporary hit points last for 1 minute. If the rogue's hit points drop below 0 due to the loss of these temporary hit points, she falls <Link to="/misc/unconscious">unconscious</Link> and is <Link to="/misc/dying">dying</Link> as normal.</Pair>
</Ability>
<Ability id="talentroguecrawl-rogue-crawl-ex-fn3-8" icon={["stairs-goal"]}>
<Pair single id="talentroguecrawl-rogue-crawl-ex-fn3-8"><Link to="/talent/rogue_crawl">⮞</Link> Rogue Crawl (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-3.8" id="ability-rogue_talents-fake-fn-3.8" data-hash-target to="ability-rogue_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">While <Link to="/rule/prone">prone</Link>, a rogue with this ability can move at half speed. This movement provokes attacks of opportunity as normal. A rogue with this talent can take a 5-foot step while crawling.</Pair>
</Ability>
<Ability id="talentsleightofhandstunt-sleight-of-hand-stunt-ex-fn12-6" icon={["stairs-goal"]}>
<Pair single id="talentsleightofhandstunt-sleight-of-hand-stunt-ex-fn12-6"><Link to="/talent/sleight_of_hand_stunt">⮞</Link> Sleight of Hand Stunt (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-12.6" id="ability-rogue_talents-fake-fn-12.6" data-hash-target to="ability-rogue_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/sleight_of_hand">Sleight of Hand</Link></Pair>
<Pair title="Ability">In place of an attack of opportunity, a rogue with this talent can attempt a <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check against the CMD of an opponent that provokes an attack of opportunity by firing a projectile weapon while threatened. If successful, the rogue plucks the ammunition from the provoking weapon, negating the attack.</Pair>
<Pair title="Special">The rogue may use this ability as many times in a round as she could make attacks of opportunity. At the GM's discretion, certain projectile weapons may not be susceptible to this ability, such as siege engines or firearms.</Pair>
</Ability>
<Ability id="talentsnapshot-snap-shot-ex-fn5-6" icon={["bowman"]}>
<Pair single id="talentsnapshot-snap-shot-ex-fn5-6"><Link to="/talent/snap_shot">⮞</Link> Snap Shot (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-5.6" id="ability-rogue_talents-fake-fn-5.6" data-hash-target to="ability-rogue_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent may treat her intitiative roll as a 20 for a surprise round, regardless of her initiative, but she may only take an attack action with a ranged weapon. Her normal initiative roll is used in subsequent rounds.</Pair>
<Pair title="Special">If two or more rogues possess this talent, their initiative determines the order in which they act, but they all go before any other creature. If a rogue is prevented from acting in the surprise round, this talent has no effect.</Pair>
</Ability>
<Ability id="talentstandup-stand-up-ex-fn3-9" icon={["stairs-goal"]}>
<Pair single id="talentstandup-stand-up-ex-fn3-9"><Link to="/talent/stand_up">⮞</Link> Stand Up (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-3.9" id="ability-rogue_talents-fake-fn-3.9" data-hash-target to="ability-rogue_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this ability can stand up from a <Link to="/rule/prone">prone</Link> position as a <strong className="hl">free action</strong>. This still provokes attacks of opportunity for standing up while threatened by a foe.</Pair>
</Ability>
<Ability id="talentstealthstunt-stealth-stunt-ex-fn12-7" icon={["armor-downgrade"]}>
<Pair single id="talentstealthstunt-stealth-stunt-ex-fn12-7"><Link to="/talent/stealth_stunt">⮞</Link> Stealth Stunt (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-12.7" id="ability-rogue_talents-fake-fn-12.7" data-hash-target to="ability-rogue_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/stealth">Stealth</Link></Pair>
<Pair title="Ability">When benefiting from <Link to="/rule/concealment">concealment</Link>, a rogue with this talent can forgo an attack of opportunity to attempt a <Link to="/skill/stealth">Stealth</Link> check against the provoking opponent's CMD. Success allows the rogue to treat her opponent as <Link to="/rule/flat_footed">flat-footed</Link> against the rogue's first melee attack before the end of her next turn. Using this ability does not count against the rogue's available attacks of opportunity for the round.</Pair>
</Ability>
<Ability id="talentsuperiorsniper-superior-sniper-fn22-3" icon={["stairs-goal"]}>
<Pair single id="talentsuperiorsniper-superior-sniper-fn22-3"><Link to="/talent/superior_sniper">⮞</Link> Superior Sniper <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-22.3" id="ability-rogue_talents-fake-fn-22.3" data-hash-target to="ability-rogue_talents-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Ability">A rogue who selects this talent gains <Link to="/feat/expert_sniper">Expert Sniper</Link> as a bonus feat. If she already has this feat, she can instead select any feat that lists Expert Sniper as a prerequisite, as long as she meets the feat's prerequisites.</Pair>
</Ability>
<Ability id="talentunbalancingtrick-unbalancing-trick-ex-fn20-4" icon={["stairs-goal"]}>
<Pair single id="talentunbalancingtrick-unbalancing-trick-ex-fn20-4"><Link to="/talent/unbalancing_trick">⮞</Link> Unbalancing Trick (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-20.4" id="ability-rogue_talents-fake-fn-20.4" data-hash-target to="ability-rogue_talents-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Ability">The rogue gains <Link to="/feat/improved_trip">Improved Trip</Link> as a bonus feat, even if she does not meet the prerequisites.</Pair>
<Pair title="At 6th Level">She is treated as if she meets all the prerequisites of <Link to="/feat/greater_trip">Greater Trip</Link> (although she must take the feat as normal to gain its benefits).</Pair>
</Ability>
<Ability id="talentunderhandedtrick-underhanded-trick-fn4-13" icon={["stairs-goal"]}>
<Pair single id="talentunderhandedtrick-underhanded-trick-fn4-13"><Link to="/talent/underhanded_trick">⮞</Link> Underhanded Trick <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-4.13" id="ability-rogue_talents-fake-fn-4.13" data-hash-target to="ability-rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">A rogue who selects this talent gains <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link> as a bonus feat, even if she does not meet the prerequisites.</Pair>
<Pair title="At 6th Level">She is treated as if she meets all the prerequisites for <Link to="/feat/greater_dirty_trick">Greater Dirty Trick</Link> (although she must take the feat as normal).</Pair>
<Pair title="Special">If she succeeds in giving her target the <Link to="/misc/blinded">blinded</Link> condition, the target cannot remove the condition during the first round of blindness.</Pair>
</Ability>
<Ability id="talentweapontraining-weapon-training-fn14-2" icon={["stairs-goal"]}>
<Pair single id="talentweapontraining-weapon-training-fn14-2"><Link to="/talent/weapon_training">⮞</Link> Weapon Training <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-14.2" id="ability-rogue_talents-fake-fn-14.2" data-hash-target to="ability-rogue_talents-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Ability">A rogue that selects this talent gains <Link to="/feat/weapon_focus">Weapon Focus</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="talentwithoutatrace-without-a-trace-ex-fn26-3" icon={["armor-upgrade"]}>
<Pair single id="talentwithoutatrace-without-a-trace-ex-fn26-3"><Link to="/talent/without_a_trace">⮞</Link> Without a Trace (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-26.3" id="ability-rogue_talents-fake-fn-26.3" data-hash-target to="ability-rogue_talents-fake-fn-26-target">26</InnerLink></sup></Pair>
<Pair title="Immediate Action">When the rogue successfully uses <Link to="/ability/evasion">evasion</Link> or <Link to="/talent/improved_evasion">improved evasion</Link> to avoid taking damage, she can attempt to hide. The rogue attempts a Stealth check with a -20 penalty, but gains a +1 bonus on her check for every die of damage the avoided attack would have dealt. The rogue can attempt this check even while being observed, as long as she has <Link to="/rule/cover">cover</Link> or <Link to="/rule/concealment">concealment</Link> or an ability that allows her to use the Stealth skill while being observed without cover or concealment.</Pair>
</Ability>
<h3 id="ability-rogue_talents-trap-talents" data-hash-target>Trap Talents</h3>
<Ability id="talentcannyobserver-canny-observer-ex-fn2-7" icon={["upgrade"]}>
<Pair single id="talentcannyobserver-canny-observer-ex-fn2-7"><Link to="/talent/canny_observer">⮞</Link> Canny Observer (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-2.7" id="ability-rogue_talents-fake-fn-2.7" data-hash-target to="ability-rogue_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Passive Ability">When a rogue with this talent makes a Perception check to hear the details of a conversation or to find concealed or secret objects (including doors and traps), she gains a +4 bonus.</Pair>
</Ability>
<Ability id="talentcunningtrigger-cunning-trigger-ex-fn2-8" icon={["stairs-goal"]}>
<Pair single id="talentcunningtrigger-cunning-trigger-ex-fn2-8"><Link to="/talent/cunning_trigger">⮞</Link> Cunning Trigger (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-2.8" id="ability-rogue_talents-fake-fn-2.8" data-hash-target to="ability-rogue_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Swift Action">A rogue with this talent can set off any trap within 30 feet that she constructed.</Pair>
</Ability>
<Ability id="talentquicktrapsmith-quick-trapsmith-ex-fn5-7" icon={["stairs-goal"]}>
<Pair single id="talentquicktrapsmith-quick-trapsmith-ex-fn5-7"><Link to="/talent/quick_trapsmith">⮞</Link> Quick Trapsmith (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-5.7" id="ability-rogue_talents-fake-fn-5.7" data-hash-target to="ability-rogue_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Full-Round Action">A rogue with this talent can set a simple trap with a CR no greater than 1/2 her rogue level. To do this, she must purchase the components, spend the required time constructing the trap in advance, and have its components at hand. The type of trap that can be constructed in this way is subject to GM discretion.</Pair>
</Ability>
<Ability id="talenttrapspotter-trap-spotter-ex-fn14-3" icon={["stairs-goal"]}>
<Pair single id="talenttrapspotter-trap-spotter-ex-fn14-3"><Link to="/talent/trap_spotter">⮞</Link> Trap Spotter (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-14.3" id="ability-rogue_talents-fake-fn-14.3" data-hash-target to="ability-rogue_talents-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Passive Ability">Whenever a rogue with this talent comes within 10 feet of a trap, she receives an immediate Perception skill check to notice the trap. This check should be made in secret by the GM.</Pair>
</Ability>
<h3 id="ability-rogue_talents-disable-device-talents" data-hash-target>Disable Device Talents</h3>
<Ability id="talentfastpicks-fast-picks-ex-fn2-9" icon={["upgrade"]}>
<Pair single id="talentfastpicks-fast-picks-ex-fn2-9"><Link to="/talent/fast_picks">⮞</Link> Fast Picks (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-2.9" id="ability-rogue_talents-fake-fn-2.9" data-hash-target to="ability-rogue_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can use the <Link to="/skill/disable_device">Disable Device</Link> skill to attempt to open a lock as a <strong className="hl">standard action</strong> instead of a <strong className="hl">full-round action</strong>.</Pair>
</Ability>
<Ability id="talenthairpintrick-hairpin-trick-ex-fn8-5" icon={["upgrade"]}>
<Pair single id="talenthairpintrick-hairpin-trick-ex-fn8-5"><Link to="/talent/hairpin_trick">⮞</Link> Hairpin Trick (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-8.5" id="ability-rogue_talents-fake-fn-8.5" data-hash-target to="ability-rogue_talents-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability">The rogue is skilled at making do with anything she can find. She takes no penalty on <Link to="/skill/disable_device">Disable Device</Link> checks for using improvised tools, and can attempt such checks without any tools at a -4 penalty. She treats all non-improvised <Link to="/eq-misc/thieves_tools">thieves' tools</Link> as masterwork and doubles the bonus she gets from <Link to="/eq-misc/masterwork_thieves_tools">masterwork thieves' tools</Link> from +2 to +4.</Pair>
</Ability>
<Ability id="talentlastditcheffort-last-ditch-effort-fn33" icon={["armor-upgrade"]}>
<Pair single id="talentlastditcheffort-last-ditch-effort-fn33"><Link to="/talent/last_ditch_effort">⮞</Link> Last Ditch Effort <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-33" id="ability-rogue_talents-fake-fn-33" data-hash-target to="ability-rogue_talents-fake-fn-33-target">33</InnerLink></sup></Pair>
<Pair title="Ability">Once per day, a rogue with this ability who accidentally activates a trap while attempting to disarm it may immediately attempt another Disable Device check to disarm it, albeit at a -5 penalty. The result of the second check is taken even if the result is lower.</Pair>
</Ability>
<Ability id="talentpapercrafttools-papercraft-tools-ex-fn34" icon={["stairs-goal"]}>
<Pair single id="talentpapercrafttools-papercraft-tools-ex-fn34" flavor="Traditional thieves' tools might be suspicious, but no guard looks twice at a common deck of cards."><Link to="/talent/papercraft_tools">⮞</Link> Papercraft Tools (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-34" id="ability-rogue_talents-fake-fn-34" data-hash-target to="ability-rogue_talents-fake-fn-34-target">34</InnerLink></sup></Pair>
<Pair title="Ability">So long has the rogue has access to a <Link to="/eq-misc/deck_of_cards">deck of cards</Link>, she can destroy one card to attempt a single <Link to="/skill/disable_device">Disable Device</Link> check as if she had a set of <Link to="/eq-misc/thieves_tools">thieves tools</Link>. If she uses a <Link to="/eq-misc/harrow_deck">harrow card</Link> for this purpose, she can treat the card as a set of <Link to="/eq-misc/masterwork_thieves_tools">masterwork thieves' tools</Link> (granting her a +2 circumstance bonus on the Disable Device check), though the card is still destroyed after use.</Pair>
</Ability>
<Ability id="talentquickdisable-quick-disable-ex-fn3-10" icon={["upgrade"]}>
<Pair single id="talentquickdisable-quick-disable-ex-fn3-10"><Link to="/talent/quick_disable">⮞</Link> Quick Disable (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-3.10" id="ability-rogue_talents-fake-fn-3.10" data-hash-target to="ability-rogue_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Passive Ability">It takes a rogue with this ability half the normal amount of time to disable a trap using the <Link to="/skill/disable_device">Disable Device</Link> skill (minimum 1 round).</Pair>
</Ability>
<h3 id="ability-rogue_talents-deception-talents" data-hash-target>Deception Talents</h3>
<Ability id="talentcamouflage-camouflage-ex-fn2-10" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="talentcamouflage-camouflage-ex-fn2-10"><Link to="/talent/camouflage">⮞</Link> Camouflage (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-2.10" id="ability-rogue_talents-fake-fn-2.10" data-hash-target to="ability-rogue_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">Once per day, a rogue with this talent can craft simple but effective camouflage from the surrounding foliage. The rogue needs 1 minute to prepare the camouflage, but once she does, it is good for the rest of the day or until the rogue fails a saving throw against an area effect spell that deals fire, cold, or acid damage, whichever comes first. The rogue gains a +4 bonus on Stealth checks while within terrain that matches the foliage used to make the camouflage. This ability cannot be used in areas without natural foliage.</Pair>
</Ability>
<Ability id="talentcharmer-charmer-ex-fn2-11" icon={["rolling-dices"]}>
<Pair single id="talentcharmer-charmer-ex-fn2-11"><Link to="/talent/charmer">⮞</Link> Charmer (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-2.11" id="ability-rogue_talents-fake-fn-2.11" data-hash-target to="ability-rogue_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">The rogue can roll two dice while making a Diplomacy check, and take the better result. She must choose to use this talent before making the Diplomacy check.</Pair>
</Ability>
<Ability id="talentcoaxinformation-coax-information-ex-fn35" icon={["upgrade"]}>
<Pair single id="talentcoaxinformation-coax-information-ex-fn35"><Link to="/talent/coax_information">⮞</Link> Coax Information (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-35" id="ability-rogue_talents-fake-fn-35" data-hash-target to="ability-rogue_talents-fake-fn-35-target">35</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can use <Link to="/skill/bluff">Bluff</Link> or <Link to="/skill/diplomacy">Diplomacy</Link> in place of <Link to="/skill/intimidate">Intimidate</Link> to force an opponent to act friendly toward her.</Pair>
</Ability>
<Ability id="talentconvincinglie-convincing-lie-ex-fn17-6" icon={["upgrade"]}>
<Pair single id="talentconvincinglie-convincing-lie-ex-fn17-6" flavor="When a rogue with this talent lies, she creates fabrications so convincing that others treat them as truth."><Link to="/talent/convincing_lie">⮞</Link> Convincing Lie (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-17.6" id="ability-rogue_talents-fake-fn-17.6" data-hash-target to="ability-rogue_talents-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Ability">When a rogue with this talent successfully uses the <Link to="/skill/bluff">Bluff</Link> skill to convince someone that what she is saying is true, if that individual is questioned later about the statement or story, that person uses the rogue's Bluff skill modifier to convince the questioner, rather than his own. If his Bluff skill modifier is better than the rogue's, the individual can use his own modifier and gain a +2 bonus on any check to convince others of the lie.</Pair>
<Pair title="Special">This effect lasts for a number of days equal to 1/2 the rogue's level + the rogue's Charisma modifier.</Pair>
</Ability>
<Ability id="talentdampenpresence-dampen-presence-fn22-4" icon={["stairs-goal"]}>
<Pair single id="talentdampenpresence-dampen-presence-fn22-4"><Link to="/talent/dampen_presence">⮞</Link> Dampen Presence <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-22.4" id="ability-rogue_talents-fake-fn-22.4" data-hash-target to="ability-rogue_talents-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Ability">A rogue who selects this talent gains <Link to="/feat/dampen_presence">Dampen Presence</Link> as a bonus feat. The rogue does not need to meet the feat's prerequisites. The rogue is also considered to have the <Link to="/feat/skill_focus">Skill Focus</Link> (Stealth) feat for the purpose of satisfying the prerequisites of any feat that lists Dampen Presence as a prerequisite.</Pair>
</Ability>
<Ability id="talentfaceinthecrowd-face-in-the-crowd-fn30-2" icon={["upgrade"]}>
<Pair single id="talentfaceinthecrowd-face-in-the-crowd-fn30-2"><Link to="/talent/face_in_the_crowd">⮞</Link> Face in the Crowd <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-30.2" id="ability-rogue_talents-fake-fn-30.2" data-hash-target to="ability-rogue_talents-fake-fn-30-target">30</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can blend into groups easily. Opposed <Link to="/skill/perception">Perception</Link> and <Link to="/skill/sense_motive">Sense Motive</Link> checks take a -2 penalty when made against the rogue's <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>, or <Link to="/skill/stealth">Stealth</Link> checks if she's within 30 feet of at least two non-hostile characters of her apparent creature type. This penalty increases to -4 if she's within 30 feet of at least eight such creatures or is currently in a square occupied by a crowd.</Pair>
</Ability>
<Ability id="talentfalsefriend-false-friend-ex-fn36" icon={["upgrade"]}>
<Pair single id="talentfalsefriend-false-friend-ex-fn36"><Link to="/talent/false_friend">⮞</Link> False Friend (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-36" id="ability-rogue_talents-fake-fn-36" data-hash-target to="ability-rogue_talents-fake-fn-36-target">36</InnerLink></sup></Pair>
<Pair title="Passive Ability">A rogue with this talent gains a +4 bonus when making Bluff checks to convince someone she has never met or who doesn't know her well that they are previously acquainted or know each other well.</Pair>
</Ability>
<Ability id="talentfastfingers-fast-fingers-ex-fn2-12" icon={["rolling-dices"]}>
<Pair single id="talentfastfingers-fast-fingers-ex-fn2-12"><Link to="/talent/fast_fingers">⮞</Link> Fast Fingers (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-2.12" id="ability-rogue_talents-fake-fn-2.12" data-hash-target to="ability-rogue_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A rogue with this talent can roll two dice while making a <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check and take the better result. She must choose to use this talent before making the Sleight of Hand check.</Pair>
</Ability>
<Ability id="talentfaststealth-fast-stealth-ex-fn3-11" icon={["upgrade"]}>
<Pair single id="talentfaststealth-fast-stealth-ex-fn3-11"><Link to="/talent/fast_stealth">⮞</Link> Fast Stealth (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-3.11" id="ability-rogue_talents-fake-fn-3.11" data-hash-target to="ability-rogue_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">This ability allows a rogue to move at full speed using the <Link to="/skill/stealth">Stealth</Link> skill without penalty.</Pair>
</Ability>
<Ability id="talenthoneyedwords-honeyed-words-ex-fn5-8" icon={["rolling-dices"]}>
<Pair single id="talenthoneyedwords-honeyed-words-ex-fn5-8"><Link to="/talent/honeyed_words">⮞</Link> Honeyed Words (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-5.8" id="ability-rogue_talents-fake-fn-5.8" data-hash-target to="ability-rogue_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">The rogue can roll two dice while making a Bluff check, and take the better result. She must choose to use this talent before making the Bluff check.</Pair>
</Ability>
<Ability id="talentinnocuousservant-innocuous-servant-ex-fn32-2" icon={["upgrade"]}>
<Pair single id="talentinnocuousservant-innocuous-servant-ex-fn32-2" flavor="The rogue is an expert at appearing to be an unimportant servant, be it an attach&eacute;, bodyguard, driver, maid, kitchen assistant, or similar staff member."><Link to="/talent/innocuous_servant">⮞</Link> Innocuous Servant (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-32.2" id="ability-rogue_talents-fake-fn-32.2" data-hash-target to="ability-rogue_talents-fake-fn-32-target">32</InnerLink></sup></Pair>
<Pair title="Passive Ability"><p>The rogue gains a +2 bonus on <Link to="/skill/disguise">Disguise</Link> checks to appear to be a servant, but not to impersonate a particular servant. She also gains a +2 bonus on <Link to="/skill/bluff">Bluff</Link> checks to lie to maintain this guise.</p>
<p>While disguised as a servant, she gains a +2 bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to gather information among servants. Because she is easily overlooked as a servant, she can gather information from those she serves without asking them questions directly or alerting them to her interest. Doing so takes 1d4 days and requires a successful Bluff check instead of a Diplomacy check.</p>
</Pair>
<Pair title="At 8th Level">The bonuses granted by this talent increase to +4.</Pair>
</Ability>
<Ability id="talentjustafaceinthecrowd-just-a-face-in-the-crowd-su-fn25-5" icon={["upgrade"]}>
<Pair single id="talentjustafaceinthecrowd-just-a-face-in-the-crowd-su-fn25-5" flavor="The rabble-rousers of Galt can blend into a crowd and are able to hide and spot others who appear to be hiding."><Link to="/talent/just_a_face_in_the_crowd">⮞</Link> Just a Face in the Crowd (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-25.5" id="ability-rogue_talents-fake-fn-25.5" data-hash-target to="ability-rogue_talents-fake-fn-25-target">25</InnerLink></sup></Pair>
<Pair title="Passive Ability">The rogue gains a bonus equal to <Link to="/misc/half">half</Link> his class level on Disguise and Perception checks when 10 or more creatures of his size are within 30 feet of him.</Pair>
</Ability>
<Ability id="talentobfuscatestory-obfuscate-story-ex-fn36-2" icon={["armor-downgrade"]}>
<Pair single id="talentobfuscatestory-obfuscate-story-ex-fn36-2"><Link to="/talent/obfuscate_story">⮞</Link> Obfuscate Story (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-36.2" id="ability-rogue_talents-fake-fn-36.2" data-hash-target to="ability-rogue_talents-fake-fn-36-target">36</InnerLink></sup></Pair>
<Pair title="Ability">While another individual attempts to give an account of an event, the rogue makes an opposed <Link to="/skill/diplomacy">Diplomacy</Link> check to deftly interject comments or statements over the course of the storytelling that cause the individual to muddle his ability to recall accurate or specific details. If the rogue succeeds, her target remains unaware that the rogue's interjections caused the confusion. However, if she fails, the target is allowed a <Link to="/skill/sense_motive">Sense Motive</Link> check (DC equal to the rogue's failed Diplomacy check) to figure out that she made deliberate attempts to confuse the story.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="talentstealthestory-steal-the-story-ex-fn36-3" icon={["armor-downgrade"]}>
<Pair single id="talentstealthestory-steal-the-story-ex-fn36-3"><Link to="/talent/steal_the_story">⮞</Link> Steal the Story (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-36.3" id="ability-rogue_talents-fake-fn-36.3" data-hash-target to="ability-rogue_talents-fake-fn-36-target">36</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/talent/obfuscate_story">Obfuscate story</Link></Pair>
<Pair title="Ability">After muddling another's account using <em>obfuscate story,</em> the rogue may make another opposed <Link to="/skill/diplomacy">Diplomacy</Link> check to alter the details further in order to discredit, insult, or humiliate the target. If the check succeeds, the target takes a penalty on Diplomacy and Intimidate checks against anyone who heard the altered story. This penalty is equal to the rogue's Intelligence, Wisdom, or Charisma bonus (whichever is highest), and lasts until the target is able to repair his reputation or discredit the rogue.</Pair>
</Ability>
</div>
<Ability id="talentquickdisguise-quick-disguise-ex-fn5-9" icon={["upgrade"]}>
<Pair single id="talentquickdisguise-quick-disguise-ex-fn5-9"><Link to="/talent/quick_disguise">⮞</Link> Quick Disguise (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-5.9" id="ability-rogue_talents-fake-fn-5.9" data-hash-target to="ability-rogue_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability"><p>A rogue with this talent can use the items at hand and seemingly innocuous material hidden on her person to create startlingly effective disguises, reducing the amount of time it takes to create a disguise using the <Link to="/skill/disguise">Disguise</Link> skill.</p>
<p>The time needed for the rogue to alter her appearance in this manner is based on the complexity of the disguise, as noted on the following table. The times are cumulative, so if a female rogue wants to disguise herself as a male of a different race, that takes 2 minutes.</p>
<ScrollContainer id="ability-rogue_talents--table-2"><table>
<thead>
<tr>
<th>Disguise</th>
<th>Time</th>
</tr>
</thead>
<tbody><tr>
<td>Minor details only</td>
<td>1 full-round action</td>
</tr>
<tr>
<td>Disguise as a different gender</td>
<td>1 minute</td>
</tr>
<tr>
<td>Disguise as a different race</td>
<td>1 minute</td>
</tr>
<tr>
<td>Disguise as a different age category</td>
<td>1 minute</td>
</tr>
<tr>
<td>Disguise as a different size category</td>
<td>1 minute</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
</Ability>
<Ability id="talentrapidboost-rapid-boost-ex-fn34-2" icon={["rolling-dices"]}>
<Pair single id="talentrapidboost-rapid-boost-ex-fn34-2"><Link to="/talent/rapid_boost">⮞</Link> Rapid Boost (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-34.2" id="ability-rogue_talents-fake-fn-34.2" data-hash-target to="ability-rogue_talents-fake-fn-34-target">34</InnerLink></sup></Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">The rogue can roll two dice while attempting a <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check and take the better result. She must choose to use this talent before attempting the Sleight of Hand check.</Pair>
</Ability>
<Ability id="talentsczarnismuggler-sczarni-smuggler-ex-fn32-3" icon={["stairs-goal","upgrade"]}>
<Pair single id="talentsczarnismuggler-sczarni-smuggler-ex-fn32-3" flavor="The rogue has picked up Sczarni tricks for making masterful forgeries and using bribery to evade trade rules."><Link to="/talent/sczarni_smuggler">⮞</Link> Sczarni Smuggler (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-32.3" id="ability-rogue_talents-fake-fn-32.3" data-hash-target to="ability-rogue_talents-fake-fn-32-target">32</InnerLink></sup></Pair>
<Pair title="Ability"><p>The rogue needs to learn only the approximate appearance of a document that doesn't require a particular person's signature to accurately forge the document with <Link to="/skill/linguistics">Linguistics</Link> (gaining a +8 bonus on the check to create the forgery, as if she had seen a similar document before). The rogue needs only a small sample of a person's handwriting to make a convincing forgery of great length in that person's handwriting.</p>
<p>The rogue can always take 10 on <Link to="/skill/diplomacy">Diplomacy</Link> checks to offer bribes. In addition, the rogue automatically gains an extra advantage at the start of a <Link to="/rule/pursuit">pursuit</Link> in an urban environment.</p>
</Pair>
</Ability>
<Ability id="talentscavenger-scavenger-fn30-3" icon={["stairs-goal","upgrade"]}>
<Pair single id="talentscavenger-scavenger-fn30-3"><Link to="/talent/scavenger">⮞</Link> Scavenger <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-30.3" id="ability-rogue_talents-fake-fn-30.3" data-hash-target to="ability-rogue_talents-fake-fn-30-target">30</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can pick up and stow an object as a <strong className="hl">swift action</strong> instead of two separate move actions. She gains a +2 bonus on <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks to pick the pockets of creatures that are <Link to="/misc/stunned">stunned</Link> or <Link to="/misc/disabled">disabled</Link>.</Pair>
</Ability>
<Ability id="talentterrainmastery-terrain-mastery-ex-fn10-2" icon={["stairs-goal"]}>
<Pair single id="talentterrainmastery-terrain-mastery-ex-fn10-2"><Link to="/talent/terrain_mastery">⮞</Link> Terrain Mastery (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-10.2" id="ability-rogue_talents-fake-fn-10.2" data-hash-target to="ability-rogue_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent gains a <Link to="/ability/favored_terrain">favored terrain</Link> as the ranger ability of the same name, though the favored terrain ability does not increase with her level as the ranger's ability does.</Pair>
<Pair title="Special">A rogue can take this ability multiple times, each time applying it to a new terrain.</Pair>
</Ability>
<h3 id="ability-rogue_talents-other-talents" data-hash-target>Other Talents</h3>
<Ability id="talentbardicpretender-bardic-pretender-ex-fn13-2" icon={["stairs-goal"]}>
<Pair single id="talentbardicpretender-bardic-pretender-ex-fn13-2"><Link to="/talent/bardic_pretender">⮞</Link> Bardic Pretender (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-13.2" id="ability-rogue_talents-fake-fn-13.2" data-hash-target to="ability-rogue_talents-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Ability">The rogue knows enough about music and performance to survive in a bardic college and can fake what she doesn't know. The rogue qualifies as having the <Link to="/performance/inspire_competence">inspire competence</Link> bardic performance class feature for the purpose of meeting prestige class requirements, although this talent doesn't grant her the <em>bardic performance</em> ability.</Pair>
</Ability>
<Ability id="talentclaimedturf-claimed-turf-ex-fn32-4" icon={["stairs-goal"]}>
<Pair single id="talentclaimedturf-claimed-turf-ex-fn32-4"><Link to="/talent/claimed_turf">⮞</Link> Claimed Turf (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-32.4" id="ability-rogue_talents-fake-fn-32.4" data-hash-target to="ability-rogue_talents-fake-fn-32-target">32</InnerLink></sup></Pair>
<Pair title="Ability"><p>The rogue is well known in a specific community in which she gains the benefits of <em>renown.</em> She gains the <Link to="/soctalent/renown">renown</Link> vigilante social talent. This community can be an entire settlement or portions of a settlement (such as a particular district or neighborhood), depending on the population as allowed by the <em>renown</em> social talent.</p>
<p>Anytime she could select another rogue talent, the rogue can also select from the following list of social talents, using her rogue level as her vigilante level for the purpose meeting of prerequisites: <Link to="/soctalent/celebrity_discount">celebrity discount</Link>, <Link to="/soctalent/celebrity_perks">celebrity perks</Link>, <Link to="/soctalent/gossip_collector">gossip collector</Link>, <Link to="/soctalent/great_renown">great renown</Link>, <Link to="/soctalent/incredible_renown">incredible renown</Link>, <Link to="/soctalent/loyal_aid">loyal aid</Link>, and <Link to="/soctalent/safe_house">safe house</Link>.</p>
</Pair>
<Pair title="Special">For the purposes of vigilante social talents, the rogue does not have a vigilante identity and is always considered to be in her social identity.</Pair>
</Ability>
<Ability id="talentclimbingstunt-climbing-stunt-ex-fn12-8" icon={["stairs-goal"]}>
<Pair single id="talentclimbingstunt-climbing-stunt-ex-fn12-8"><Link to="/talent/climbing_stunt">⮞</Link> Climbing Stunt (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-12.8" id="ability-rogue_talents-fake-fn-12.8" data-hash-target to="ability-rogue_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/climb">Climb</Link></Pair>
<Pair title="Ability">A rogue with this talent can take a -10 penalty on a Climb check to move at full speed while climbing.</Pair>
</Ability>
<Ability id="talentesotericscholar-esoteric-scholar-ex-fn17-7" icon={["stairs-goal"]}>
<Pair single id="talentesotericscholar-esoteric-scholar-ex-fn17-7"><Link to="/talent/esoteric_scholar">⮞</Link> Esoteric Scholar (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-17.7" id="ability-rogue_talents-fake-fn-17.7" data-hash-target to="ability-rogue_talents-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Ability">Once a day, a rogue with this talent may attempt a <Link to="/skill/knowledge">Knowledge</Link> check, even when she is not trained in that Knowledge skill.</Pair>
</Ability>
<Ability id="talentexpertleaper-expert-leaper-ex-fn2-13" icon={["upgrade","armor-upgrade"]}>
<Pair single id="talentexpertleaper-expert-leaper-ex-fn2-13"><Link to="/talent/expert_leaper">⮞</Link> Expert Leaper (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-2.13" id="ability-rogue_talents-fake-fn-2.13" data-hash-target to="ability-rogue_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Passive Ability">When making jump checks, the rogue is always considered to have a running start. Also, when the rogue deliberately falls, a DC 15 Acrobatics check allows her to ignore the first 20 feet fallen, instead of the first 10 feet.</Pair>
</Ability>
<Ability id="talentfavoredterrain-favored-terrain-ex-fn16-3" icon={["stairs-goal"]}>
<Pair single id="talentfavoredterrain-favored-terrain-ex-fn16-3"><Link to="/talent/favored_terrain">⮞</Link> Favored Terrain (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-16.3" id="ability-rogue_talents-fake-fn-16.3" data-hash-target to="ability-rogue_talents-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level rogue</Pair>
<Pair title="Ability">The rogue selects one terrain from the ranger's <Link to="/ability/favored_terrain">favored terrain</Link> list; she gains this as a <em>favored terrain,</em> as the ranger class feature.</Pair>
<Pair title="Special">If the rogue also has or later takes the <Link to="/talent/hide_in_plain_sight">hide in plain sight</Link> advanced rogue talent, her <em>favored terrain</em> must match a terrain she has selected for that advanced talent. If the rogue has ranger levels, her effective ranger level is equal to her ranger level + 5 for purposes of improving the bonuses from this <em>favored terrain</em> and gaining new <em>favored terrains.</em></Pair>
</Ability>
<Ability id="talentfollowclues-follow-clues-ex-fn2-14" icon={["upgrade"]}>
<Pair single id="talentfollowclues-follow-clues-ex-fn2-14"><Link to="/talent/follow_clues">⮞</Link> Follow Clues (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-2.14" id="ability-rogue_talents-fake-fn-2.14" data-hash-target to="ability-rogue_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can use <Link to="/skill/perception">Perception</Link> to follow tracks as per the <Link to="/skill/survival">Survival</Link> skill.</Pair>
</Ability>
<Ability id="talentgetawayartist-getaway-artist-ex-fn17-8" icon={["skills","upgrade"]}>
<Pair single id="talentgetawayartist-getaway-artist-ex-fn17-8"><Link to="/talent/getaway_artist">⮞</Link> Getaway Artist (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-17.8" id="ability-rogue_talents-fake-fn-17.8" data-hash-target to="ability-rogue_talents-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Passive Ability">A rogue with this talent adds <Link to="/skill/fly">Fly</Link>, <Link to="/skill/handle_animal">Handle Animal</Link>, and <Link to="/skill/ride">Ride</Link> to her list of class skills, and gains a +2 bonus on all <Link to="/rule/driving_check">driving checks</Link>.</Pair>
</Ability>
<Ability id="talentgracefulathlete-graceful-athlete-fn37" icon={["stairs-goal"]}>
<Pair single id="talentgracefulathlete-graceful-athlete-fn37"><Link to="/talent/graceful_athlete">⮞</Link> Graceful Athlete <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-37" id="ability-rogue_talents-fake-fn-37" data-hash-target to="ability-rogue_talents-fake-fn-37-target">37</InnerLink></sup></Pair>
<Pair title="Ability">Gain <Link to="/feat/graceful_athlete">Graceful Athlete</Link> as a bonus feat. You must meet the prerequisites for the feat.</Pair>
</Ability>
<Ability id="talentgreentongue-green-tongue-ex-fn16-4" icon={["stairs-goal"]}>
<Pair single id="talentgreentongue-green-tongue-ex-fn16-4"><Link to="/talent/green_tongue">⮞</Link> Green Tongue (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-16.4" id="ability-rogue_talents-fake-fn-16.4" data-hash-target to="ability-rogue_talents-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Ability">The rogue gains Aklo, Aquan, Auran, Giant, Ignan, Sylvan, or Terran as a bonus language. In addition, the rogue can attempt a DC 15 <Link to="/skill/linguistics">Linguistics</Link> check to communicate basic concepts with magical beasts and monstrous humanoids with which she does not share a common language.</Pair>
</Ability>
<Ability id="talentguilefulpolyglot-guileful-polyglot-ex-fn2-15" icon={["stairs-goal"]}>
<Pair single id="talentguilefulpolyglot-guileful-polyglot-ex-fn2-15"><Link to="/talent/guileful_polyglot">⮞</Link> Guileful Polyglot (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-2.15" id="ability-rogue_talents-fake-fn-2.15" data-hash-target to="ability-rogue_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent who has at least one rank in <Link to="/skill/linguistics">Linguistics</Link> gains four additional <Link to="/misc/languages">languages</Link>.</Pair>
<Pair title="Special">A rogue with this talent who does not have any ranks in Linguistics gains two additional languages. If the rogue later gains ranks in Linguistics, she gains two additional languages, to a total of four additional languages above those granted by the Linguistics skill itself.</Pair>
</Ability>
<Ability id="talenthardtofool-hard-to-fool-ex-fn2-16" icon={["rolling-dices"]}>
<Pair single id="talenthardtofool-hard-to-fool-ex-fn2-16"><Link to="/talent/hard_to_fool">⮞</Link> Hard to Fool (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-2.16" id="ability-rogue_talents-fake-fn-2.16" data-hash-target to="ability-rogue_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A rogue with this talent can roll two dice while making a <Link to="/skill/sense_motive">Sense Motive</Link> check, and take the better result. She must choose to use this talent before making the Sense Motive check.</Pair>
</Ability>
<Ability id="talentholdbreath-hold-breath-ex-fn17-9" icon={["upgrade"]}>
<Pair single id="talentholdbreath-hold-breath-ex-fn17-9"><Link to="/talent/hold_breath">⮞</Link> Hold Breath (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-17.9" id="ability-rogue_talents-fake-fn-17.9" data-hash-target to="ability-rogue_talents-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Passive Ability">A rogue with this talent increases the number of rounds she can <Link to="/misc/hold_her_breath">hold her breath</Link> by 2.</Pair>
<Pair title="Special">She can take this talent multiple times.</Pair>
</Ability>
<Ability id="talentkipool-ki-pool-ex-fn17-10" icon={["stairs-goal","upgrade"]}>
<Pair single id="talentkipool-ki-pool-ex-fn17-10"><Link to="/talent/ki_pool">⮞</Link> Ki Pool (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-17.10" id="ability-rogue_talents-fake-fn-17.10" data-hash-target to="ability-rogue_talents-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent gains a small ki pool. This ki pool is similar to a <Link to="/class/ninja">ninja's</Link> ki pool, but the rogue's ki pool does not grant any extra attacks. The rogue gains a number of ki points equal to her Wisdom modifier (minimum 1). These ki points replenish at the start of each day.</Pair>
<Pair title="Ability">She can spend a ki point to gain a +10-foot bonus to movement until the end of her turn.</Pair>
<Pair title="Special">If she already has a ki pool, or gains a ki pool later, she gains half her Wisdom bonus (minimum 1) as bonus ki points to her ki pool.</Pair>
</Ability>
<Ability id="talentledgewalker-ledge-walker-ex-fn3-12" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="talentledgewalker-ledge-walker-ex-fn3-12"><Link to="/talent/ledge_walker">⮞</Link> Ledge Walker (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-3.12" id="ability-rogue_talents-fake-fn-3.12" data-hash-target to="ability-rogue_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The rogue can move along narrow surfaces at full speed using the Acrobatics skill without penalty. In addition, a rogue with this talent is not <Link to="/rule/flat_footed">flat-footed</Link> when using Acrobatics to move along narrow surfaces.</Pair>
</Ability>
<Ability id="talentninjatrick-ninja-trick-ex-fn10-3" icon={["stairs-goal"]}>
<Pair single id="talentninjatrick-ninja-trick-ex-fn10-3"><Link to="/talent/ninja_trick">⮞</Link> Ninja Trick (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-10.3" id="ability-rogue_talents-fake-fn-10.3" data-hash-target to="ability-rogue_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can choose a trick from the <Link to="/ability/ninja_tricks">ninja trick</Link> list. The rogue cannot choose a ninja trick with the same name as a rogue talent.</Pair>
<Pair title="Special">The rogue can choose but cannot use talents that require ki points, unless she has a ki pool. A rogue can pick this talent more than once.</Pair>
</Ability>
<Ability id="talentpeerlessmaneuver-peerless-maneuver-ex-fn5-10" icon={["rolling-dices"]}>
<Pair single id="talentpeerlessmaneuver-peerless-maneuver-ex-fn5-10"><Link to="/talent/peerless_maneuver">⮞</Link> Peerless Maneuver (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-5.10" id="ability-rogue_talents-fake-fn-5.10" data-hash-target to="ability-rogue_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A rogue with this talent can roll two dice while making an <Link to="/skill/acrobatics">Acrobatics</Link> check, and take the better result. She must choose to use this talent before making the Acrobatics check.</Pair>
</Ability>
<Ability id="talentphilologist-philologist-fn33-2" icon={["rolling-dices","upgrade"]}>
<Pair single id="talentphilologist-philologist-fn33-2"><Link to="/talent/philologist">⮞</Link> Philologist <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-33.2" id="ability-rogue_talents-fake-fn-33.2" data-hash-target to="ability-rogue_talents-fake-fn-33-target">33</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can reroll any <Link to="/skill/linguistics">Linguistics</Link> skill check made to decipher writing in an unfamiliar language, and never risks drawing a false conclusion from a failed Wisdom check after a failed Linguistics check.</Pair>
<Pair title="Special">A rogue with this talent is allowed only one reroll per inscription, message, or text encountered.</Pair>
</Ability>
<Ability id="talentquickscrounge-quick-scrounge-fn30-4" icon={["upgrade"]}>
<Pair single id="talentquickscrounge-quick-scrounge-fn30-4"><Link to="/talent/quick_scrounge">⮞</Link> Quick Scrounge <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-30.4" id="ability-rogue_talents-fake-fn-30.4" data-hash-target to="ability-rogue_talents-fake-fn-30-target">30</InnerLink></sup></Pair>
<Pair title="Ability">The rogue can search a creature, object, or area in half as much time as normal. If her <Link to="/skill/perception">Perception</Link> check would normally require a full-round action or less, it becomes one step shorter along the following progression: <strong className="hl">full-round action</strong>, <strong className="hl">standard action</strong>, <strong className="hl">move action</strong>, <strong className="hl">swift action</strong>, <strong className="hl">immediate action</strong>.</Pair>
<Pair title="Special">This talent has no effect on Perception checks that are attempted as free actions or Perception checks that don't require an action.</Pair>
</Ability>
<Ability id="talentrapidperception-rapid-perception-su-fn22-5" icon={["upgrade"]}>
<Pair single id="talentrapidperception-rapid-perception-su-fn22-5"><Link to="/talent/rapid_perception">⮞</Link> Rapid Perception (Su) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-22.5" id="ability-rogue_talents-fake-fn-22.5" data-hash-target to="ability-rogue_talents-fake-fn-22-target">22</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can attempt a <Link to="/skill/perception">Perception</Link> check to intentionally search for a specific item or creature as a <strong className="hl">swift action</strong> instead of a move action. If she is intentionally searching for an invisible creature, the creature's bonus on its Stealth check from its invisibility is halved.</Pair>
</Ability>
<Ability id="talentridingstunt-riding-stunt-ex-fn12-9" icon={["upgrade"]}>
<Pair single id="talentridingstunt-riding-stunt-ex-fn12-9"><Link to="/talent/riding_stunt">⮞</Link> Riding Stunt (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-12.9" id="ability-rogue_talents-fake-fn-12.9" data-hash-target to="ability-rogue_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/ride">Ride</Link></Pair>
<Pair title="Ability"><p>A rogue with this talent takes only a -2 penalty on <Link to="/skill/ride">Ride</Link> checks when riding a mount bareback instead of the normal -5 penalty.</p>
<p>When using the Ride skill to make a mount leap, a rogue with this talent can use her Ride modifier or her mount's jump modifier, whichever is higher, instead of using the lower of the two.</p>
<p>A rogue with this talent gains a +5 competence bonus when using the Ride skill to soften a fall from her mount or to perform a fast mount or dismount.</p>
<p>Finally, a rogue with this talent can attempt a DC 15 Ride check to recover from a position of cover as a <strong className="hl">free action</strong> instead of as a move action. Failing this check results in the recovery requiring a move action as normal.</p>
</Pair>
</Ability>
<Ability id="talentropemaster-rope-master-ex-fn10-4" icon={["upgrade"]}>
<Pair single id="talentropemaster-rope-master-ex-fn10-4"><Link to="/talent/rope_master">⮞</Link> Rope Master (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-10.4" id="ability-rogue_talents-fake-fn-10.4" data-hash-target to="ability-rogue_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this ability can move at her normal speed when using rope on a <Link to="/skill/climb">Climb</Link> check, can take 10 when using <Link to="/skill/acrobatics">Acrobatics</Link> to move over narrow surfaces even when in danger or distracted, and gains a +4 bonus when determining the DC to escape bonds when she ties up a creature.</Pair>
</Ability>
<Ability id="talentstrongimpression-strong-impression-fn5-11" icon={["stairs-goal"]}>
<Pair single id="talentstrongimpression-strong-impression-fn5-11"><Link to="/talent/strong_impression">⮞</Link> Strong Impression <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-5.11" id="ability-rogue_talents-fake-fn-5.11" data-hash-target to="ability-rogue_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">A rogue who selects this talent gains <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="talentstrongstroke-strong-stroke-ex-fn10-5" icon={["rolling-dices","upgrade"]}>
<Pair single id="talentstrongstroke-strong-stroke-ex-fn10-5"><Link to="/talent/strong_stroke">⮞</Link> Strong Stroke (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-10.5" id="ability-rogue_talents-fake-fn-10.5" data-hash-target to="ability-rogue_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent rolls twice when making <Link to="/skill/swim">Swim</Link> checks and takes the better result. If she already rolls twice while making a Swim check because of another ability or effect, she gains a +2 insight bonus on both of those rolls instead. If the rogue is under the effect of a spell or ability that forces her to roll two dice and take the worse result, she only needs to roll 1d20 while making Swim checks.</Pair>
</Ability>
<Ability id="talentsurvivalist-survivalist-fn5-12" icon={["skills"]}>
<Pair single id="talentsurvivalist-survivalist-fn5-12"><Link to="/talent/survivalist">⮞</Link> Survivalist <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-5.12" id="ability-rogue_talents-fake-fn-5.12" data-hash-target to="ability-rogue_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Info">A rogue with this talent adds <Link to="/skill/heal">Heal</Link> and <Link to="/skill/survival">Survival</Link> to her list of class skills.</Pair>
</Ability>
<Ability id="talentswifttracker-swift-tracker-ex-fn16-5" icon={["upgrade"]}>
<Pair single id="talentswifttracker-swift-tracker-ex-fn16-5"><Link to="/talent/swift_tracker">⮞</Link> Swift Tracker (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-16.5" id="ability-rogue_talents-fake-fn-16.5" data-hash-target to="ability-rogue_talents-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Ability">While following tracks, the rogue can move at her normal speed without penalty while using the <Link to="/skill/survival">Survival</Link> skill. In addition, the penalty for moving at up to twice her normal speed while following tracks is reduced to -10.</Pair>
</Ability>
<Ability id="talentthrillofthechase-thrill-of-the-chase-ex-fn32-5" icon={["rolling-dices","stairs-goal"]}>
<Pair single id="talentthrillofthechase-thrill-of-the-chase-ex-fn32-5" flavor="The rogue revels in the thrill and adrenaline rush of a challenging chase."><Link to="/talent/thrill_of_the_chase">⮞</Link> Thrill of the Chase (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-32.5" id="ability-rogue_talents-fake-fn-32.5" data-hash-target to="ability-rogue_talents-fake-fn-32-target">32</InnerLink></sup></Pair>
<Pair title="Ability"><p>When engaged in <Link to="/rule/chases">a chase</Link> or <Link to="/rule/pursuit">pursuit</Link>, the rogue gains one d20 reroll which she can use at any time after the original roll is made but before the results of the roll are revealed; she must take the second result, even if it is lower.</p>
<p>She can use this reroll once per chase or once per day during a pursuit.</p>
</Pair>
<Pair title="Ability">Additionally, she gains <Link to="/feat/run">Run</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="talentwallscramble-wall-scramble-ex-fn10-6" icon={["rolling-dices","upgrade"]}>
<Pair single id="talentwallscramble-wall-scramble-ex-fn10-6"><Link to="/talent/wall_scramble">⮞</Link> Wall Scramble (Ex) <sup><InnerLink showBacklink="backlink-ability-rogue_talents-fake-fn-10.6" id="ability-rogue_talents-fake-fn-10.6" data-hash-target to="ability-rogue_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent rolls twice when making <Link to="/skill/climb">Climb</Link> checks and takes the better of the two rolls. If she already rolls twice while making a Climb check because of another ability or effect, she gains a +2 insight bonus on both of those rolls instead. If the rogue is under the effect of a spell or ability that forces her to roll two dice and take the worse result, she only needs to roll 1d20 while making Climb checks.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-rogue_talents-label">Footnotes</h3><ol>
<li id="ability-rogue_talents-fake-fn-1-target"><p><Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook</Link> pg. 9 <InnerLink aria-label="Back to reference 1" id="backlink-ability-rogue_talents-fake-fn-1" data-hash-target to="ability-rogue_talents-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-rogue_talents-fake-fn-1.2" data-hash-target to="ability-rogue_talents-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-2-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> pg. 130 <InnerLink aria-label="Back to reference 2" id="backlink-ability-rogue_talents-fake-fn-2" data-hash-target to="ability-rogue_talents-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-rogue_talents-fake-fn-2.2" data-hash-target to="ability-rogue_talents-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-rogue_talents-fake-fn-2.3" data-hash-target to="ability-rogue_talents-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-rogue_talents-fake-fn-2.4" data-hash-target to="ability-rogue_talents-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-rogue_talents-fake-fn-2.5" data-hash-target to="ability-rogue_talents-fake-fn-2.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-rogue_talents-fake-fn-2.6" data-hash-target to="ability-rogue_talents-fake-fn-2.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-rogue_talents-fake-fn-2.7" data-hash-target to="ability-rogue_talents-fake-fn-2.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-rogue_talents-fake-fn-2.8" data-hash-target to="ability-rogue_talents-fake-fn-2.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-rogue_talents-fake-fn-2.9" data-hash-target to="ability-rogue_talents-fake-fn-2.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-rogue_talents-fake-fn-2.10" data-hash-target to="ability-rogue_talents-fake-fn-2.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-rogue_talents-fake-fn-2.11" data-hash-target to="ability-rogue_talents-fake-fn-2.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-rogue_talents-fake-fn-2.12" data-hash-target to="ability-rogue_talents-fake-fn-2.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-rogue_talents-fake-fn-2.13" data-hash-target to="ability-rogue_talents-fake-fn-2.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-rogue_talents-fake-fn-2.14" data-hash-target to="ability-rogue_talents-fake-fn-2.14">↩<sup>14</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-rogue_talents-fake-fn-2.15" data-hash-target to="ability-rogue_talents-fake-fn-2.15">↩<sup>15</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-rogue_talents-fake-fn-2.16" data-hash-target to="ability-rogue_talents-fake-fn-2.16">↩<sup>16</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-3-target"><p><Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link> pg. 68 <InnerLink aria-label="Back to reference 3" id="backlink-ability-rogue_talents-fake-fn-3" data-hash-target to="ability-rogue_talents-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-rogue_talents-fake-fn-3.2" data-hash-target to="ability-rogue_talents-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-rogue_talents-fake-fn-3.3" data-hash-target to="ability-rogue_talents-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-rogue_talents-fake-fn-3.4" data-hash-target to="ability-rogue_talents-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-rogue_talents-fake-fn-3.5" data-hash-target to="ability-rogue_talents-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-rogue_talents-fake-fn-3.6" data-hash-target to="ability-rogue_talents-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-rogue_talents-fake-fn-3.7" data-hash-target to="ability-rogue_talents-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-rogue_talents-fake-fn-3.8" data-hash-target to="ability-rogue_talents-fake-fn-3.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-rogue_talents-fake-fn-3.9" data-hash-target to="ability-rogue_talents-fake-fn-3.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-rogue_talents-fake-fn-3.10" data-hash-target to="ability-rogue_talents-fake-fn-3.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-rogue_talents-fake-fn-3.11" data-hash-target to="ability-rogue_talents-fake-fn-3.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-rogue_talents-fake-fn-3.12" data-hash-target to="ability-rogue_talents-fake-fn-3.12">↩<sup>12</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-4-target"><p><Link to="/source/blood_of_shadows">Blood of Shadows</Link> pg. 8 <InnerLink aria-label="Back to reference 4" id="backlink-ability-rogue_talents-fake-fn-4" data-hash-target to="ability-rogue_talents-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-rogue_talents-fake-fn-4.2" data-hash-target to="ability-rogue_talents-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-rogue_talents-fake-fn-4.3" data-hash-target to="ability-rogue_talents-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-rogue_talents-fake-fn-4.4" data-hash-target to="ability-rogue_talents-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-rogue_talents-fake-fn-4.5" data-hash-target to="ability-rogue_talents-fake-fn-4.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-rogue_talents-fake-fn-4.6" data-hash-target to="ability-rogue_talents-fake-fn-4.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-rogue_talents-fake-fn-4.7" data-hash-target to="ability-rogue_talents-fake-fn-4.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-rogue_talents-fake-fn-4.8" data-hash-target to="ability-rogue_talents-fake-fn-4.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-rogue_talents-fake-fn-4.9" data-hash-target to="ability-rogue_talents-fake-fn-4.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-rogue_talents-fake-fn-4.10" data-hash-target to="ability-rogue_talents-fake-fn-4.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-rogue_talents-fake-fn-4.11" data-hash-target to="ability-rogue_talents-fake-fn-4.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-rogue_talents-fake-fn-4.12" data-hash-target to="ability-rogue_talents-fake-fn-4.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-rogue_talents-fake-fn-4.13" data-hash-target to="ability-rogue_talents-fake-fn-4.13">↩<sup>13</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-5-target"><p>Advanced Player's Guide pg. 131 <InnerLink aria-label="Back to reference 5" id="backlink-ability-rogue_talents-fake-fn-5" data-hash-target to="ability-rogue_talents-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-rogue_talents-fake-fn-5.2" data-hash-target to="ability-rogue_talents-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-rogue_talents-fake-fn-5.3" data-hash-target to="ability-rogue_talents-fake-fn-5.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-rogue_talents-fake-fn-5.4" data-hash-target to="ability-rogue_talents-fake-fn-5.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-rogue_talents-fake-fn-5.5" data-hash-target to="ability-rogue_talents-fake-fn-5.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-rogue_talents-fake-fn-5.6" data-hash-target to="ability-rogue_talents-fake-fn-5.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-rogue_talents-fake-fn-5.7" data-hash-target to="ability-rogue_talents-fake-fn-5.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-rogue_talents-fake-fn-5.8" data-hash-target to="ability-rogue_talents-fake-fn-5.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-rogue_talents-fake-fn-5.9" data-hash-target to="ability-rogue_talents-fake-fn-5.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-rogue_talents-fake-fn-5.10" data-hash-target to="ability-rogue_talents-fake-fn-5.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-rogue_talents-fake-fn-5.11" data-hash-target to="ability-rogue_talents-fake-fn-5.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-rogue_talents-fake-fn-5.12" data-hash-target to="ability-rogue_talents-fake-fn-5.12">↩<sup>12</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-6-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> pg. 25 <InnerLink aria-label="Back to reference 6" id="backlink-ability-rogue_talents-fake-fn-6" data-hash-target to="ability-rogue_talents-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-rogue_talents-fake-fn-6.2" data-hash-target to="ability-rogue_talents-fake-fn-6.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-rogue_talents-fake-fn-6.3" data-hash-target to="ability-rogue_talents-fake-fn-6.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-7-target"><p><Link to="/source/distant_realms">Distant Realms</Link> pg. 13 <InnerLink aria-label="Back to reference 7" id="backlink-ability-rogue_talents-fake-fn-7" data-hash-target to="ability-rogue_talents-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-rogue_talents-fake-fn-7.2" data-hash-target to="ability-rogue_talents-fake-fn-7.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-8-target"><p><Link to="/source/adventurers_guide">Adventurer's Guide</Link> pg. 53 <InnerLink aria-label="Back to reference 8" id="backlink-ability-rogue_talents-fake-fn-8" data-hash-target to="ability-rogue_talents-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-rogue_talents-fake-fn-8.2" data-hash-target to="ability-rogue_talents-fake-fn-8.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-rogue_talents-fake-fn-8.3" data-hash-target to="ability-rogue_talents-fake-fn-8.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-rogue_talents-fake-fn-8.4" data-hash-target to="ability-rogue_talents-fake-fn-8.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-rogue_talents-fake-fn-8.5" data-hash-target to="ability-rogue_talents-fake-fn-8.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-9-target"><p><Link to="/source/magical_marketplace">Magical Marketplace</Link> pg. 26 <InnerLink aria-label="Back to reference 9" id="backlink-ability-rogue_talents-fake-fn-9" data-hash-target to="ability-rogue_talents-fake-fn-9">↩</InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-10-target"><p><Link to="/source/ultimate_combat">Ultimate Combat</Link> pg. 70 <InnerLink aria-label="Back to reference 10" id="backlink-ability-rogue_talents-fake-fn-10" data-hash-target to="ability-rogue_talents-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-rogue_talents-fake-fn-10.2" data-hash-target to="ability-rogue_talents-fake-fn-10.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-rogue_talents-fake-fn-10.3" data-hash-target to="ability-rogue_talents-fake-fn-10.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-rogue_talents-fake-fn-10.4" data-hash-target to="ability-rogue_talents-fake-fn-10.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-rogue_talents-fake-fn-10.5" data-hash-target to="ability-rogue_talents-fake-fn-10.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-rogue_talents-fake-fn-10.6" data-hash-target to="ability-rogue_talents-fake-fn-10.6">↩<sup>6</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-11-target"><p><Link to="/source/cohorts_and_companions">Cohorts and Companions</Link> pg. 27 <InnerLink aria-label="Back to reference 11" id="backlink-ability-rogue_talents-fake-fn-11" data-hash-target to="ability-rogue_talents-fake-fn-11">↩</InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-rogue_talents-fake-fn-11.2" data-hash-target to="ability-rogue_talents-fake-fn-11.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-rogue_talents-fake-fn-11.3" data-hash-target to="ability-rogue_talents-fake-fn-11.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-rogue_talents-fake-fn-11.4" data-hash-target to="ability-rogue_talents-fake-fn-11.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-rogue_talents-fake-fn-11.5" data-hash-target to="ability-rogue_talents-fake-fn-11.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-rogue_talents-fake-fn-11.6" data-hash-target to="ability-rogue_talents-fake-fn-11.6">↩<sup>6</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-12-target"><p><Link to="/source/inner_sea_combat">Inner Sea Combat</Link> pg. 16 <InnerLink aria-label="Back to reference 12" id="backlink-ability-rogue_talents-fake-fn-12" data-hash-target to="ability-rogue_talents-fake-fn-12">↩</InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-rogue_talents-fake-fn-12.2" data-hash-target to="ability-rogue_talents-fake-fn-12.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-rogue_talents-fake-fn-12.3" data-hash-target to="ability-rogue_talents-fake-fn-12.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-rogue_talents-fake-fn-12.4" data-hash-target to="ability-rogue_talents-fake-fn-12.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-rogue_talents-fake-fn-12.5" data-hash-target to="ability-rogue_talents-fake-fn-12.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-rogue_talents-fake-fn-12.6" data-hash-target to="ability-rogue_talents-fake-fn-12.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-rogue_talents-fake-fn-12.7" data-hash-target to="ability-rogue_talents-fake-fn-12.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-rogue_talents-fake-fn-12.8" data-hash-target to="ability-rogue_talents-fake-fn-12.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-rogue_talents-fake-fn-12.9" data-hash-target to="ability-rogue_talents-fake-fn-12.9">↩<sup>9</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-13-target"><p><Link to="/source/pathfinder_130_city_in_the_lions_eye">Pathfinder #130: City in the Lion's Eye</Link> pg. 76 <InnerLink aria-label="Back to reference 13" id="backlink-ability-rogue_talents-fake-fn-13" data-hash-target to="ability-rogue_talents-fake-fn-13">↩</InnerLink> <InnerLink aria-label="Back to reference 13" id="backlink-ability-rogue_talents-fake-fn-13.2" data-hash-target to="ability-rogue_talents-fake-fn-13.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-14-target"><p>PRPG Core Rulebook pg. 69 <InnerLink aria-label="Back to reference 14" id="backlink-ability-rogue_talents-fake-fn-14" data-hash-target to="ability-rogue_talents-fake-fn-14">↩</InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-ability-rogue_talents-fake-fn-14.2" data-hash-target to="ability-rogue_talents-fake-fn-14.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-ability-rogue_talents-fake-fn-14.3" data-hash-target to="ability-rogue_talents-fake-fn-14.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-15-target"><p><Link to="/source/potions_and_poisons">Potions and Poisons</Link> pg. 13 <InnerLink aria-label="Back to reference 15" id="backlink-ability-rogue_talents-fake-fn-15" data-hash-target to="ability-rogue_talents-fake-fn-15">↩</InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-rogue_talents-fake-fn-15.2" data-hash-target to="ability-rogue_talents-fake-fn-15.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-rogue_talents-fake-fn-15.3" data-hash-target to="ability-rogue_talents-fake-fn-15.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-rogue_talents-fake-fn-15.4" data-hash-target to="ability-rogue_talents-fake-fn-15.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-rogue_talents-fake-fn-15.5" data-hash-target to="ability-rogue_talents-fake-fn-15.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-16-target"><p><Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link> pg. 21 <InnerLink aria-label="Back to reference 16" id="backlink-ability-rogue_talents-fake-fn-16" data-hash-target to="ability-rogue_talents-fake-fn-16">↩</InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-ability-rogue_talents-fake-fn-16.2" data-hash-target to="ability-rogue_talents-fake-fn-16.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-ability-rogue_talents-fake-fn-16.3" data-hash-target to="ability-rogue_talents-fake-fn-16.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-ability-rogue_talents-fake-fn-16.4" data-hash-target to="ability-rogue_talents-fake-fn-16.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-ability-rogue_talents-fake-fn-16.5" data-hash-target to="ability-rogue_talents-fake-fn-16.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-17-target"><p>Ultimate Combat pg. 69 <InnerLink aria-label="Back to reference 17" id="backlink-ability-rogue_talents-fake-fn-17" data-hash-target to="ability-rogue_talents-fake-fn-17">↩</InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-ability-rogue_talents-fake-fn-17.2" data-hash-target to="ability-rogue_talents-fake-fn-17.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-ability-rogue_talents-fake-fn-17.3" data-hash-target to="ability-rogue_talents-fake-fn-17.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-ability-rogue_talents-fake-fn-17.4" data-hash-target to="ability-rogue_talents-fake-fn-17.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-ability-rogue_talents-fake-fn-17.5" data-hash-target to="ability-rogue_talents-fake-fn-17.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-ability-rogue_talents-fake-fn-17.6" data-hash-target to="ability-rogue_talents-fake-fn-17.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-ability-rogue_talents-fake-fn-17.7" data-hash-target to="ability-rogue_talents-fake-fn-17.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-ability-rogue_talents-fake-fn-17.8" data-hash-target to="ability-rogue_talents-fake-fn-17.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-ability-rogue_talents-fake-fn-17.9" data-hash-target to="ability-rogue_talents-fake-fn-17.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-ability-rogue_talents-fake-fn-17.10" data-hash-target to="ability-rogue_talents-fake-fn-17.10">↩<sup>10</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-18-target"><p><Link to="/source/advanced_race_guide">Advanced Race Guide</Link> pg. 92 <InnerLink aria-label="Back to reference 18" id="backlink-ability-rogue_talents-fake-fn-18" data-hash-target to="ability-rogue_talents-fake-fn-18">↩</InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-ability-rogue_talents-fake-fn-18.2" data-hash-target to="ability-rogue_talents-fake-fn-18.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-ability-rogue_talents-fake-fn-18.3" data-hash-target to="ability-rogue_talents-fake-fn-18.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-ability-rogue_talents-fake-fn-18.4" data-hash-target to="ability-rogue_talents-fake-fn-18.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-ability-rogue_talents-fake-fn-18.5" data-hash-target to="ability-rogue_talents-fake-fn-18.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 18" id="backlink-ability-rogue_talents-fake-fn-18.6" data-hash-target to="ability-rogue_talents-fake-fn-18.6">↩<sup>6</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-19-target"><p>Blood of Shadows pg. 7 <InnerLink aria-label="Back to reference 19" id="backlink-ability-rogue_talents-fake-fn-19" data-hash-target to="ability-rogue_talents-fake-fn-19">↩</InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-20-target"><p><Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link> pg. 9 <InnerLink aria-label="Back to reference 20" id="backlink-ability-rogue_talents-fake-fn-20" data-hash-target to="ability-rogue_talents-fake-fn-20">↩</InnerLink> <InnerLink aria-label="Back to reference 20" id="backlink-ability-rogue_talents-fake-fn-20.2" data-hash-target to="ability-rogue_talents-fake-fn-20.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 20" id="backlink-ability-rogue_talents-fake-fn-20.3" data-hash-target to="ability-rogue_talents-fake-fn-20.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 20" id="backlink-ability-rogue_talents-fake-fn-20.4" data-hash-target to="ability-rogue_talents-fake-fn-20.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-21-target"><p><Link to="/source/the_harrow_handbook">The Harrow Handbook</Link> pg. 20 <InnerLink aria-label="Back to reference 21" id="backlink-ability-rogue_talents-fake-fn-21" data-hash-target to="ability-rogue_talents-fake-fn-21">↩</InnerLink> <InnerLink aria-label="Back to reference 21" id="backlink-ability-rogue_talents-fake-fn-21.2" data-hash-target to="ability-rogue_talents-fake-fn-21.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 21" id="backlink-ability-rogue_talents-fake-fn-21.3" data-hash-target to="ability-rogue_talents-fake-fn-21.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-22-target"><p><Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox</Link> pg. 27 <InnerLink aria-label="Back to reference 22" id="backlink-ability-rogue_talents-fake-fn-22" data-hash-target to="ability-rogue_talents-fake-fn-22">↩</InnerLink> <InnerLink aria-label="Back to reference 22" id="backlink-ability-rogue_talents-fake-fn-22.2" data-hash-target to="ability-rogue_talents-fake-fn-22.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 22" id="backlink-ability-rogue_talents-fake-fn-22.3" data-hash-target to="ability-rogue_talents-fake-fn-22.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 22" id="backlink-ability-rogue_talents-fake-fn-22.4" data-hash-target to="ability-rogue_talents-fake-fn-22.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 22" id="backlink-ability-rogue_talents-fake-fn-22.5" data-hash-target to="ability-rogue_talents-fake-fn-22.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-23-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> pg. 21 <InnerLink aria-label="Back to reference 23" id="backlink-ability-rogue_talents-fake-fn-23" data-hash-target to="ability-rogue_talents-fake-fn-23">↩</InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-24-target"><p><Link to="/source/divine_anthology">Divine Anthology</Link> pg. 7 <InnerLink aria-label="Back to reference 24" id="backlink-ability-rogue_talents-fake-fn-24" data-hash-target to="ability-rogue_talents-fake-fn-24">↩</InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-25-target"><p>Magic Tactics Toolbox pg. 7 <InnerLink aria-label="Back to reference 25" id="backlink-ability-rogue_talents-fake-fn-25" data-hash-target to="ability-rogue_talents-fake-fn-25">↩</InnerLink> <InnerLink aria-label="Back to reference 25" id="backlink-ability-rogue_talents-fake-fn-25.2" data-hash-target to="ability-rogue_talents-fake-fn-25.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 25" id="backlink-ability-rogue_talents-fake-fn-25.3" data-hash-target to="ability-rogue_talents-fake-fn-25.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 25" id="backlink-ability-rogue_talents-fake-fn-25.4" data-hash-target to="ability-rogue_talents-fake-fn-25.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 25" id="backlink-ability-rogue_talents-fake-fn-25.5" data-hash-target to="ability-rogue_talents-fake-fn-25.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-26-target"><p><Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox</Link> pg. 7 <InnerLink aria-label="Back to reference 26" id="backlink-ability-rogue_talents-fake-fn-26" data-hash-target to="ability-rogue_talents-fake-fn-26">↩</InnerLink> <InnerLink aria-label="Back to reference 26" id="backlink-ability-rogue_talents-fake-fn-26.2" data-hash-target to="ability-rogue_talents-fake-fn-26.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 26" id="backlink-ability-rogue_talents-fake-fn-26.3" data-hash-target to="ability-rogue_talents-fake-fn-26.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-27-target"><p><Link to="/source/ultimate_intrigue">Ultimate Intrigue</Link> pg. 44 <InnerLink aria-label="Back to reference 27" id="backlink-ability-rogue_talents-fake-fn-27" data-hash-target to="ability-rogue_talents-fake-fn-27">↩</InnerLink> <InnerLink aria-label="Back to reference 27" id="backlink-ability-rogue_talents-fake-fn-27.2" data-hash-target to="ability-rogue_talents-fake-fn-27.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-28-target"><p>Spymaster's Handbook pg. 22 <InnerLink aria-label="Back to reference 28" id="backlink-ability-rogue_talents-fake-fn-28" data-hash-target to="ability-rogue_talents-fake-fn-28">↩</InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-29-target"><p><Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link> <InnerLink aria-label="Back to reference 29" id="backlink-ability-rogue_talents-fake-fn-29" data-hash-target to="ability-rogue_talents-fake-fn-29">↩</InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-30-target"><p><Link to="/source/blood_of_the_moon">Blood of the Moon</Link> pg. 19 <InnerLink aria-label="Back to reference 30" id="backlink-ability-rogue_talents-fake-fn-30" data-hash-target to="ability-rogue_talents-fake-fn-30">↩</InnerLink> <InnerLink aria-label="Back to reference 30" id="backlink-ability-rogue_talents-fake-fn-30.2" data-hash-target to="ability-rogue_talents-fake-fn-30.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 30" id="backlink-ability-rogue_talents-fake-fn-30.3" data-hash-target to="ability-rogue_talents-fake-fn-30.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 30" id="backlink-ability-rogue_talents-fake-fn-30.4" data-hash-target to="ability-rogue_talents-fake-fn-30.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-31-target"><p><Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link> pg. 26 <InnerLink aria-label="Back to reference 31" id="backlink-ability-rogue_talents-fake-fn-31" data-hash-target to="ability-rogue_talents-fake-fn-31">↩</InnerLink> <InnerLink aria-label="Back to reference 31" id="backlink-ability-rogue_talents-fake-fn-31.2" data-hash-target to="ability-rogue_talents-fake-fn-31.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-32-target"><p><Link to="/source/inner_sea_intrigue">Inner Sea Intrigue</Link> pg. 32 <InnerLink aria-label="Back to reference 32" id="backlink-ability-rogue_talents-fake-fn-32" data-hash-target to="ability-rogue_talents-fake-fn-32">↩</InnerLink> <InnerLink aria-label="Back to reference 32" id="backlink-ability-rogue_talents-fake-fn-32.2" data-hash-target to="ability-rogue_talents-fake-fn-32.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 32" id="backlink-ability-rogue_talents-fake-fn-32.3" data-hash-target to="ability-rogue_talents-fake-fn-32.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 32" id="backlink-ability-rogue_talents-fake-fn-32.4" data-hash-target to="ability-rogue_talents-fake-fn-32.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 32" id="backlink-ability-rogue_talents-fake-fn-32.5" data-hash-target to="ability-rogue_talents-fake-fn-32.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-33-target"><p><Link to="/source/people_of_the_sands">People of the Sands</Link> pg. 19 <InnerLink aria-label="Back to reference 33" id="backlink-ability-rogue_talents-fake-fn-33" data-hash-target to="ability-rogue_talents-fake-fn-33">↩</InnerLink> <InnerLink aria-label="Back to reference 33" id="backlink-ability-rogue_talents-fake-fn-33.2" data-hash-target to="ability-rogue_talents-fake-fn-33.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-34-target"><p>The Harrow Handbook pg. 2 <InnerLink aria-label="Back to reference 34" id="backlink-ability-rogue_talents-fake-fn-34" data-hash-target to="ability-rogue_talents-fake-fn-34">↩</InnerLink> <InnerLink aria-label="Back to reference 34" id="backlink-ability-rogue_talents-fake-fn-34.2" data-hash-target to="ability-rogue_talents-fake-fn-34.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-35-target"><p>Advanced Player's Guide pg. 1 <InnerLink aria-label="Back to reference 35" id="backlink-ability-rogue_talents-fake-fn-35" data-hash-target to="ability-rogue_talents-fake-fn-35">↩</InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-36-target"><p>Advanced Race Guide pg. 193 <InnerLink aria-label="Back to reference 36" id="backlink-ability-rogue_talents-fake-fn-36" data-hash-target to="ability-rogue_talents-fake-fn-36">↩</InnerLink> <InnerLink aria-label="Back to reference 36" id="backlink-ability-rogue_talents-fake-fn-36.2" data-hash-target to="ability-rogue_talents-fake-fn-36.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 36" id="backlink-ability-rogue_talents-fake-fn-36.3" data-hash-target to="ability-rogue_talents-fake-fn-36.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-rogue_talents-fake-fn-37-target"><p><Link to="/source/blood_of_the_beast">Blood of the Beast</Link> pg. 6 <InnerLink aria-label="Back to reference 37" id="backlink-ability-rogue_talents-fake-fn-37" data-hash-target to="ability-rogue_talents-fake-fn-37">↩</InnerLink></p></li>
</ol></section></div>};
const _shaman_hexes = {title: "Shaman Hexes", topLink: ["Shaman","class/shaman"], jsx: <div className="compilation"><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link><br/>A shaman learns a number of magical tricks, called hexes, which grant her powers or weaken foes. At 2nd level, a shaman learns one hex. At 4th, 8th, 10th, 12th, 16th, 18th, and 20th level, the shaman learns new hexes. A shaman can select from any of the following hexes or from any of the hexes listed in the description of her chosen spirit. A shaman cannot select a hex more than once unless noted otherwise.</p>
<p>Using a hex is a <strong className="hl">standard action</strong> that doesn't provoke an attack of opportunity unless otherwise noted. The saving throw DC to resist a hex is equal to 10 + 1/2 the shaman's level + the shaman's Wisdom modifier.</p>
<hr/>
<Ability id="shamanhexchant-chant-su-fn1" icon={["upgrade"]}>
<Pair single id="shamanhexchant-chant-su-fn1"><Link to="/shamanhex/chant">⮞</Link> Chant (Su) <sup><InnerLink showBacklink="backlink-ability-shaman_hexes-fake-fn-1" id="ability-shaman_hexes-fake-fn-1" data-hash-target to="ability-shaman_hexes-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">A shaman can chant as a <strong className="hl">move action</strong>. Any creature that is within 30 feet that is under the effects of the shaman's <Link to="/shamanhex/charm">charm</Link>, <Link to="/shamanhex/evil_eye">evil eye</Link>, <Link to="/shamanhex/fortune">fortune</Link>, <Link to="/shamanhex/fury">fury</Link>, or <Link to="/shamanhex/misfortune">misfortune</Link> hex has that effect's duration extended by 1 round.</Pair>
<Pair title="Special">A shaman cannot select both this hex and the witch's <Link to="/hex/cackle">cackle</Link> hex.</Pair>
</Ability>
<Ability id="shamanhexcharm-charm-su-fn1-2" icon={["magic-swirl"]}>
<Pair single id="shamanhexcharm-charm-su-fn1-2"><Link to="/shamanhex/charm">⮞</Link> Charm (Su) <sup><InnerLink showBacklink="backlink-ability-shaman_hexes-fake-fn-1.2" id="ability-shaman_hexes-fake-fn-1.2" data-hash-target to="ability-shaman_hexes-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">A shaman charms an animal or humanoid creature within 30 feet by beckoning and speaking soothing words. This improves the attitude of an animal or humanoid creature by 1 step, as if the shaman had successfully used the <Link to="/skill/diplomacy">Diplomacy</Link> skill. The effect lasts for a number of rounds equal to the shaman's Wisdom modifier (minimum 1). A successful Will saving throw negates this effect.</Pair>
<Pair title="At 8th Level">This effect improves the attitude of the creature by 2 steps. </Pair>
<Pair title="Special">Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours.This is a mind-affecting charm effect.</Pair>
</Ability>
<Ability id="shamanhexdraconicresilience-draconic-resilience-ex-fn2" icon={["shield-reflect"]}>
<Pair single id="shamanhexdraconicresilience-draconic-resilience-ex-fn2"><Link to="/shamanhex/draconic_resilience">⮞</Link> Draconic Resilience (Ex) <sup><InnerLink showBacklink="backlink-ability-shaman_hexes-fake-fn-2" id="ability-shaman_hexes-fake-fn-2" data-hash-target to="ability-shaman_hexes-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">The shaman grants a creature she touches some of the magically resilient nature of dragons, causing the creature to be immune to magical sleep effects for a number of rounds equal to the shaman's level.</Pair>
<Pair title="At 7th Level">The creature is also immune to paralysis for this duration.</Pair>
<Pair title="Special">Once a creature has benefited from the draconic resilience hex, it cannot benefit from this hex again for 24 hours.</Pair>
</Ability>
<Ability id="shamanhexevileye-evil-eye-su-fn1-3" icon={["armor-downgrade"]}>
<Pair single id="shamanhexevileye-evil-eye-su-fn1-3"><Link to="/shamanhex/evil_eye">⮞</Link> Evil Eye (Su) <sup><InnerLink showBacklink="backlink-ability-shaman_hexes-fake-fn-1.3" id="ability-shaman_hexes-fake-fn-1.3" data-hash-target to="ability-shaman_hexes-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The shaman causes doubt to creep into the mind of a foe within 30 feet that she can see. The target takes a -2 penalty on one of the following (shaman's choice): ability checks, AC, attack rolls, saving throws, or skill checks. This hex lasts a number of rounds equal to 3 + the shaman's Wisdom modifier. A successful Will saving throw reduces this to just 1 round.</Pair>
<Pair title="At 8th Level">The penalty increases to -4.</Pair>
<Pair title="Special">This is a mind-affecting effect.</Pair>
</Ability>
<Ability id="shamanhexfetish-fetish-ex-fn1-4" icon={["stairs-goal","upgrade"]}>
<Pair single id="shamanhexfetish-fetish-ex-fn1-4"><Link to="/shamanhex/fetish">⮞</Link> Fetish (Ex) <sup><InnerLink showBacklink="backlink-ability-shaman_hexes-fake-fn-1.4" id="ability-shaman_hexes-fake-fn-1.4" data-hash-target to="ability-shaman_hexes-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The shaman receives <Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link> as a bonus feat and gains a +4 insight bonus on <Link to="/skill/spellcraft">Spellcraft</Link> checks to identify magic items permanently.</Pair>
</Ability>
<Ability id="shamanhexfortune-fortune-su-fn1-5" icon={["rolling-dices"]}>
<Pair single id="shamanhexfortune-fortune-su-fn1-5"><Link to="/shamanhex/fortune">⮞</Link> Fortune (Su) <sup><InnerLink showBacklink="backlink-ability-shaman_hexes-fake-fn-1.5" id="ability-shaman_hexes-fake-fn-1.5" data-hash-target to="ability-shaman_hexes-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The shaman grants a creature within 30 feet a bit of good luck for 1 round. The target can call upon this good luck once per round, allowing it to reroll any ability check, attack roll, saving throw, or skill check, taking the better result. The target creature must to decide to use this ability before the first roll is made.</Pair>
<Pair title="At 8th Level">The duration of this hex becomes 2 rounds.</Pair>
<Pair title="At 16th Level">The duration of this hex increases to 3 rounds.</Pair>
<Pair title="Special">Once a creature has benefited from the <em>fortune</em> hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
<Ability id="shamanhexfury-fury-su-fn1-6" icon={["upgrade","armor-upgrade"]}>
<Pair single id="shamanhexfury-fury-su-fn1-6"><Link to="/shamanhex/fury">⮞</Link> Fury (Su) <sup><InnerLink showBacklink="backlink-ability-shaman_hexes-fake-fn-1.6" id="ability-shaman_hexes-fake-fn-1.6" data-hash-target to="ability-shaman_hexes-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">A shaman incites a creature within 30 feet into a primal fury. The target receives a +2 morale bonus on attack rolls and a +2 resistance bonus on saving throws against fear for a number of rounds equal to the shaman's Wisdom modifier.</Pair>
<Pair title="At 8th Level">These bonuses become +3.</Pair>
<Pair title="At 16th Level">These bonuses increase to +4.</Pair>
<Pair title="Special">Once a creature has benefited from the <em>fury</em> hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
<Ability id="shamanhexhealing-healing-su-fn3" icon={["remedy"]}>
<Pair single id="shamanhexhealing-healing-su-fn3"><Link to="/shamanhex/healing">⮞</Link> Healing (Su) <sup><InnerLink showBacklink="backlink-ability-shaman_hexes-fake-fn-3" id="ability-shaman_hexes-fake-fn-3" data-hash-target to="ability-shaman_hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">A shaman soothes the wounds of those she touches. This acts as <Link to="/spell/cure_light_wounds">cure light wounds</Link>, using the shaman's caster level.</Pair>
<Pair title="At 5th Level">This acts as <Link to="/spell/cure_moderate_wounds">cure moderate wounds</Link>.</Pair>
<Pair title="Special">Once a creature has benefited from the <em>healing</em> hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
<Ability id="shamanhexintimidatingdisplay-intimidating-display-ex-fn2-2" icon={["stairs-goal"]}>
<Pair single id="shamanhexintimidatingdisplay-intimidating-display-ex-fn2-2"><Link to="/shamanhex/intimidating_display">⮞</Link> Intimidating Display (Ex) <sup><InnerLink showBacklink="backlink-ability-shaman_hexes-fake-fn-2.2" id="ability-shaman_hexes-fake-fn-2.2" data-hash-target to="ability-shaman_hexes-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">The shaman can call upon some of the majesty and power of dragons to cow her enemies. The shaman gains <Link to="/feat/dazzling_display">Dazzling Display</Link> as a bonus feat, even if she does not meet the prerequisites, and she can use it even when not wielding a weapon.</Pair>
</Ability>
<Ability id="shamanhexmisfortune-misfortune-su-fn3-2" icon={["rolling-dices","armor-downgrade"]}>
<Pair single id="shamanhexmisfortune-misfortune-su-fn3-2"><Link to="/shamanhex/misfortune">⮞</Link> Misfortune (Su) <sup><InnerLink showBacklink="backlink-ability-shaman_hexes-fake-fn-3.2" id="ability-shaman_hexes-fake-fn-3.2" data-hash-target to="ability-shaman_hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The shaman causes a creature within 30 feet to suffer grave misfortune for 1 round. Anytime the creature makes an ability check, attack roll, saving throw, or skill check, it must roll twice and take the worse result. A successful Will saving throw negates this hex.</Pair>
<Pair title="At 8th Level">The duration of this hex becomes 2 rounds.</Pair>
<Pair title="At 16th Level">The duration of this hex increases to 3 rounds.</Pair>
<Pair title="Special">This hex affects all rolls the target must make while it lasts. Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
<Ability id="shamanhexsecret-secret-ex-fn3-3" icon={["stairs-goal"]}>
<Pair single id="shamanhexsecret-secret-ex-fn3-3"><Link to="/shamanhex/secret">⮞</Link> Secret (Ex) <sup><InnerLink showBacklink="backlink-ability-shaman_hexes-fake-fn-3.3" id="ability-shaman_hexes-fake-fn-3.3" data-hash-target to="ability-shaman_hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The shaman receives one <Link to="/main/metamagic_feat">metamagic feat</Link> as a bonus feat. The shaman must meet the prerequisites for the feat.</Pair>
</Ability>
<Ability id="shamanhexshapeshift-shapeshift-su-fn3-4" icon={["magic-swirl"]}>
<Pair single id="shamanhexshapeshift-shapeshift-su-fn3-4"><Link to="/shamanhex/shapeshift">⮞</Link> Shapeshift (Su) <sup><InnerLink showBacklink="backlink-ability-shaman_hexes-fake-fn-3.4" id="ability-shaman_hexes-fake-fn-3.4" data-hash-target to="ability-shaman_hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The shaman transforms herself into another form for a number of minutes per day equal to her level, as <Link to="/spell/alter_self">alter self</Link>. This duration does not need to be consecutive, but must be spent in 1-minute increments. Changing form (including changing back) is a <strong className="hl">standard action</strong> that doesn't provoke an attack of opportunity.</Pair>
<Pair title="At 8th Level">This ability works as <Link to="/spell/beast_shape_i">beast shape I</Link>.</Pair>
<Pair title="At 12th Level">This ability works as <Link to="/spell/beast_shape_ii">beast shape II</Link>.</Pair>
<Pair title="At 16th Level">This ability works as <Link to="/spell/beast_shape_iii">beast shape III</Link>.</Pair>
<Pair title="At 20th Level">This ability works as <Link to="/spell/beast_shape_iv">beast shape IV</Link>.</Pair>
</Ability>
<Ability id="shamanhexsilkstringsnare-silkstring-snare-su-fn4" icon={["armor-downgrade"]}>
<Pair single id="shamanhexsilkstringsnare-silkstring-snare-su-fn4"><Link to="/shamanhex/silkstring_snare">⮞</Link> Silkstring Snare (Su) <sup><InnerLink showBacklink="backlink-ability-shaman_hexes-fake-fn-4" id="ability-shaman_hexes-fake-fn-4" data-hash-target to="ability-shaman_hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability"><p>The shaman causes ribbons of spider silk to erupt from the ground beneath a single creature. The target must succeed at a Reflex save or be <Link to="/rule/entangled">entangled</Link> and anchored in place. The foe can escape the silk as a <strong className="hl">standard action</strong> with a successful <Link to="/skill/escape_artist">Escape Artist</Link> or Strength check at the same DC, or by dealing an amount of damage to the silk equal to double the shaman's class level (the silk has hardness 0).</p>
<p>This hex lasts a number of rounds equal to 3 + the shaman's Wisdom modifier.</p>
</Pair>
<Pair title="Special">A creature affected by this hex cannot be affected by it again for 24 hours.</Pair>
</Ability>
<Ability id="shamanhextongues-tongues-su-fn3-5" icon={["stairs-goal"]}>
<Pair single id="shamanhextongues-tongues-su-fn3-5"><Link to="/shamanhex/tongues">⮞</Link> Tongues (Su) <sup><InnerLink showBacklink="backlink-ability-shaman_hexes-fake-fn-3.5" id="ability-shaman_hexes-fake-fn-3.5" data-hash-target to="ability-shaman_hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The shaman understands any spoken language for a number of minutes per day equal to her level, as <Link to="/spell/comprehend_languages">comprehend languages</Link>. This duration does not need to be consecutive, but it must be spent in 1-minute increments.</Pair>
<Pair title="At 5th Level">A shaman can use this ability to speak any language, as <Link to="/spell/tongues">tongues</Link>.</Pair>
</Ability>
<Ability id="shamanhexward-ward-su-fn3-6" icon={["shield-reflect"]}>
<Pair single id="shamanhexward-ward-su-fn3-6"><Link to="/shamanhex/ward">⮞</Link> Ward (Su) <sup><InnerLink showBacklink="backlink-ability-shaman_hexes-fake-fn-3.6" id="ability-shaman_hexes-fake-fn-3.6" data-hash-target to="ability-shaman_hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The shaman places a protective ward over one creature. The <em>warded</em> creature receives a +2 deflection bonus to AC and a +2 resistance bonus on saving throws. This effect lasts until the <em>warded</em> creature is hit or fails a saving throw.</Pair>
<Pair title="At 8th Level">These bonuses become +3.</Pair>
<Pair title="At 16th Level">These bonuses increase to +4.</Pair>
<Pair title="Special">A shaman knows when a <em>warded</em> creature is no longer protected. A shaman can have only one <em>ward</em> active at a time. If the shaman uses this hex while a previous <em>ward</em> is still active, that previous <em>ward</em> immediately ends. A shaman cannot use this ability on herself.</Pair>
</Ability>
<Ability id="shamanhexwings-wings-su-fn2-3" icon={["stairs-goal"]}>
<Pair single id="shamanhexwings-wings-su-fn2-3"><Link to="/shamanhex/wings">⮞</Link> Wings (Su) <sup><InnerLink showBacklink="backlink-ability-shaman_hexes-fake-fn-2.3" id="ability-shaman_hexes-fake-fn-2.3" data-hash-target to="ability-shaman_hexes-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability"><p>The shaman can grow a pair of wings for a number of minutes per day equal to her level. These minutes do not need to be consecutive, but they must be spent in 1-minute increments.</p>
<p>Initially, these wings lack the power to allow the shaman to fly, but the shaman can use them as a secondary <Link to="/umr/natural_attack">natural attack</Link> that deals 1d3 points of damage (1d2 for a Small shaman).</p>
</Pair>
<Pair title="At 3rd Level">She can use the wings to safely descend any distance, as if using the <Link to="/spell/feather_fall">feather fall</Link> spell.</Pair>
<Pair title="At 7th Level">She can use the wings to fly with poor maneuverability and a fly speed of 30 feet, but the shaman must land at the end of each turn or fall.</Pair>
<Pair title="Special">A shaman of 8th level or higher can select the wings hex a second time. This doubles the number of minutes per day the shaman can use her wings (2 minutes per level), and allows her to fly with average maneuverability and a fly speed of 30 feet while the wings are active.</Pair>
</Ability>
<Ability id="shamanhexwitchhex-witch-hex-fn3-7" icon={["stairs-goal"]}>
<Pair single id="shamanhexwitchhex-witch-hex-fn3-7"><Link to="/shamanhex/witch_hex">⮞</Link> Witch Hex <sup><InnerLink showBacklink="backlink-ability-shaman_hexes-fake-fn-3.7" id="ability-shaman_hexes-fake-fn-3.7" data-hash-target to="ability-shaman_hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The shaman selects <Link to="/ability/hexes">any one hex</Link> normally available through the <Link to="/class/witch">witch's</Link> <em>hex</em> class feature. She treats her shaman level as her witch level when determining the powers and abilities of the hex. She uses her Wisdom modifier in place of her Intelligence modifier for the hex.</Pair>
<Pair title="Special">She cannot select major hexes or grand hexes using this ability. The shaman cannot select a witch hex that has the same name as a shaman hex.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-shaman_hexes-label">Footnotes</h3><ol>
<li id="ability-shaman_hexes-fake-fn-1-target"><p><Link to="/source/advanced_class_guide">Advanced Class Guide</Link> pg. 36 <InnerLink aria-label="Back to reference 1" id="backlink-ability-shaman_hexes-fake-fn-1" data-hash-target to="ability-shaman_hexes-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-shaman_hexes-fake-fn-1.2" data-hash-target to="ability-shaman_hexes-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-shaman_hexes-fake-fn-1.3" data-hash-target to="ability-shaman_hexes-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-shaman_hexes-fake-fn-1.4" data-hash-target to="ability-shaman_hexes-fake-fn-1.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-shaman_hexes-fake-fn-1.5" data-hash-target to="ability-shaman_hexes-fake-fn-1.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-shaman_hexes-fake-fn-1.6" data-hash-target to="ability-shaman_hexes-fake-fn-1.6">↩<sup>6</sup></InnerLink></p></li>
<li id="ability-shaman_hexes-fake-fn-2-target"><p><Link to="/source/heroes_from_the_fringe">Heroes from the Fringe</Link> pg. 8 <InnerLink aria-label="Back to reference 2" id="backlink-ability-shaman_hexes-fake-fn-2" data-hash-target to="ability-shaman_hexes-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-shaman_hexes-fake-fn-2.2" data-hash-target to="ability-shaman_hexes-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-shaman_hexes-fake-fn-2.3" data-hash-target to="ability-shaman_hexes-fake-fn-2.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-shaman_hexes-fake-fn-3-target"><p>Advanced Class Guide pg. 37 <InnerLink aria-label="Back to reference 3" id="backlink-ability-shaman_hexes-fake-fn-3" data-hash-target to="ability-shaman_hexes-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-shaman_hexes-fake-fn-3.2" data-hash-target to="ability-shaman_hexes-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-shaman_hexes-fake-fn-3.3" data-hash-target to="ability-shaman_hexes-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-shaman_hexes-fake-fn-3.4" data-hash-target to="ability-shaman_hexes-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-shaman_hexes-fake-fn-3.5" data-hash-target to="ability-shaman_hexes-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-shaman_hexes-fake-fn-3.6" data-hash-target to="ability-shaman_hexes-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-shaman_hexes-fake-fn-3.7" data-hash-target to="ability-shaman_hexes-fake-fn-3.7">↩<sup>7</sup></InnerLink></p></li>
<li id="ability-shaman_hexes-fake-fn-4-target"><p><Link to="/source/legacy_of_the_first_world">Legacy of the First World</Link> pg. 17 <InnerLink aria-label="Back to reference 4" id="backlink-ability-shaman_hexes-fake-fn-4" data-hash-target to="ability-shaman_hexes-fake-fn-4">↩</InnerLink></p></li>
</ol></section></div>};
const _shaman_spirits = {title: "Shaman Spirits", topLink: ["Shaman","class/shaman"], jsx: <><h2 id="ability-shaman_spirits-shaman-spirits">Shaman Spirits</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 37</Link><br/>Each shaman must select from the following spirits. Unless otherwise noted, the DC to save against the special abilities granted by a spirit is equal to 10 + 1/2 the shaman's level + the shaman's Wisdom modifier.</p>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 27</Link><br/><strong>Spirit specializations</strong> are more specific focuses for shaman spirits that allow shamans greater flexibility in customizing their characters and building character backstories. The <strong>Restoration</strong> spirit is listed below, specializing the <strong>Life</strong> spirit, but it is far from the only spirit specialization that exists.</p>
<p>Each spirit specialization replaces one or more hexes that the shaman can gain, as well as one or more of the spirit's abilities and a number of the spells in the spirit's spirit magic spell list. A spirit specialization never replaces all of the spirit's hexes or all of the spirit's abilities.</p>
<p>A spirit specialization is always treated as equivalent to its associated spirit for any effect or prerequisite that is based on spirits. A shaman cannot select a spirit specialization as a wandering spirit, nor can she form a bond with a spirit and a spirit specialization that is associated with it simultaneously - for instance, a shaman with the life spirit cannot form a temporary bond with the restoration spirit specialization.</p>
<p>If a spirit specialization hex or ability calls for a saving throw, the DC of the save is equal to 10 + 1/2 the shaman's level + her Wisdom modifier.</p>
<ScrollContainer id="ability-shaman_spirits--table-0"><table>
<thead>
<tr>
<th>Spirit</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/shamanspirit/ancestors">Ancestors<IonRippleEffect /></Link></td>
<td>A shaman that selects the ancestors spirit has wise eyes and thick white or silver hair. Fine wrinkles line the shaman's face, becoming more obvious when she smiles or glowers. When she calls upon one of this spirit's abilities, her hair glows as though lit from within, rustling of its own accord.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/battle">Battle<IonRippleEffect /></Link></td>
<td>A shaman who selects the battle spirit gains scars from every wound she takes, and the grit of battle always seems to cling on her body.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/bones">Bones<IonRippleEffect /></Link></td>
<td>A shaman who selects the bones spirit is cadaverously thin, with sunken eye sockets and dead eyes that stare off into the distance.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/dark_tapestry">Dark Tapestry<IonRippleEffect /></Link></td>
<td>A shaman who selects the Dark Tapestry spirit is often a misanthropic loner.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/flame">Flame<IonRippleEffect /></Link></td>
<td>A shaman who selects the flame spirit has a radiant light behind her eyes and the faint smell of smoke about her.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/frost">Frost<IonRippleEffect /></Link></td>
<td>A shaman who selects the frost spirit has coarse white hair and always feels cold to the touch.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/heavens">Heavens<IonRippleEffect /></Link></td>
<td>A shaman who selects the heavens spirit has eyes that sparkle like starlight, exuding an aura of otherworldliness to those she is around.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/life">Life<IonRippleEffect /></Link></td>
<td>A shaman who selects the life spirit appears more vibrant than most mortals.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/lore">Lore<IonRippleEffect /></Link></td>
<td>A shaman who selects the lore spirit appears far wiser and knowing that her age would suggest.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/mammoth">Mammoth<IonRippleEffect /></Link></td>
<td>A shaman who selects the mammoth spirit is abnormally tall and stocky, with thick shaggy hair</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/nature">Nature<IonRippleEffect /></Link></td>
<td>A shaman who selects the nature spirit takes on an appearance that reflects the aspect of the natural world she has the closest connection to.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/restoration">Restoration<IonRippleEffect /></Link></td>
<td>The Restoration spirit is a specialization of the Life spirit.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/slums">Slums<IonRippleEffect /></Link></td>
<td>A shaman who selects the slums spirit gains the city's alleys and avenues as steadfast allies.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/stone">Stone<IonRippleEffect /></Link></td>
<td>The skin of a shaman who selects the stone spirit takes on a rough, stony appearance.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/tribe">Tribe<IonRippleEffect /></Link></td>
<td>A shaman who selects the tribe spirit strives to protect her allies, whether they be a traditional tribal unit or a chosen group of adventuring companions.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/waves">Waves<IonRippleEffect /></Link></td>
<td>A shaman who selects the waves spirit has a fluid grace that exhibits itself whenever she moves.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/wind">Wind<IonRippleEffect /></Link></td>
<td>A shaman who selects the wind spirit appears windswept, and her movements seem lithe and carefree.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/shamanspirit/wood">Wood<IonRippleEffect /></Link></td>
<td>A shaman who selects the wood spirit has a skin tone similar to the coloration of trees in her home region. Her vibrant hair is fragrant and resembles leaves and blossoms.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _simple_kinetic_blasts = {title: "Simple Blasts", topLink: ["Kineticist","class/kineticist"], jsx: <><h2 id="ability-simple_kinetic_blasts-simple-kinetic-blasts">Simple Kinetic Blasts</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 15</Link><br/>A kineticist gains a simple blast from her primary element at 1st level. Some elements offer more than one option. When a kineticist gains a new element via the expanded element class feature, she gains a simple blast from that element as well. Each simple blast is either a physical blast or an energy blast. Physical blasts are ranged attacks that deal an amount of damage equal to 1d6+1 + the kineticist's Constitution modifier, increasing by 1d6+1 for every 2 kineticist levels beyond 1st. Spell resistance doesn't apply against physical blasts. Energy blasts are ranged touch attacks that deal an amount of damage equal to 1d6 + 1/2 the kineticist's Constitution modifier, increasing by 1d6 for every 2 kineticist levels beyond 1st.</p>
<DisplayTable table={{"id":"simple kinetic blasts","columns":[{"header":"Simple Blast","align":"start","link":"kinetic"},{"header":"Elements"},{"header":"Burn","type":"num"},{"header":"Blast Type"},{"header":"Damage Type","align":"start"}],"data":[[["Air Blast (Sp)","air_blast"],"air",0,"physical","bludgeoning"],[["Cold Blast (Sp)","cold_blast"],"water",0,"energy","cold"],[["Earth Blast (Sp)","earth_blast"],"earth",0,"physical","bludgeoning, piercing, or slashing"],[["Electric Blast (Sp)","electric_blast"],"air",0,"energy","electricity"],[["Fire Blast (Sp)","fire_blast"],"fire",0,"energy","fire"],[["Gravity Blast (Sp)","gravity_blast"],"void",0,"physical","bludgeoning"],[["Negative Blast (Sp)","negative_blast"],"void",0,"energy","negative energy"],[["Positive Blast (Sp)","positive_blast"],"wood",0,"energy","positive energy"],[["Telekinetic Blast (Sp)","telekinetic_blast"],"aether",0,"physical","bludgeoning, piercing, or slashing"],[["Water Blast (Sp)","water_blast"],"water",0,"physical","bludgeoning"],[["Wood Blast (Sp)","wood_blast"],"wood",0,"physical","bludgeoning, piercing, or slashing"]],"initialColumn":0}} />
</>};
const _social_talents = {title: "Social Talents", topLink: ["Vigilante","class/vigilante"], jsx: <div className="compilation"><h2 id="ability-social_talents-social-talents">Social Talents</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue</Link><br/>Starting at 1st level, and every 2 levels thereafter, a vigilante gains a social talent. Unless otherwise noted, a talent can be selected only once. Some talents require the vigilante to meet other prerequisites before they can be chosen, such as having another social talent or attaining a minimum vigilante level. Once a talent has been chosen, it cannot be changed.</p>
<hr/>
<Ability id="soctalentalwaysprepared-always-prepared-ex-fn1" icon={["stairs-goal"]}>
<Pair single id="soctalentalwaysprepared-always-prepared-ex-fn1" flavor="The vigilante can set aside resources to plan for future contingencies."><Link to="/soctalent/always_prepared">⮞</Link> Always Prepared (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-1" id="ability-social_talents-fake-fn-1" data-hash-target to="ability-social_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability"><p>The vigilante gains the <Link to="/feat/brilliant_planner">Brilliant Planner</Link> feat except he can spend up to 100 gp per character level for his brilliant plan fund and only requires 1 minute to enact his brilliant plan.</p>
<p>In addition, while in a settlement for at least 1 week, he can spend 24 hours and up to 500 gp per character level to create a stash somewhere within the settlement. Once per day, the vigilante can take 1 hour to retrieve a stash, retrieving any number of items that would have been available in a settlement he visited at the time of making the stash, regardless of the weight of the items. Once he retrieves a stash in this way, he subtracts the price of the items from the stash's value and the stash is exhausted and lost, regardless if he used the full value of the stash.</p>
</Pair>
<Pair title="Special">The vigilante can maintain any number of stashes, but a stash is lost if he does not spend 1 hour to maintain the stash at least once per month. A vigilante's stash is well-hidden and only the vigilante knows the location of a stash he creates.</Pair>
</Ability>
<Ability id="soctalentancestralenlightenment-ancestral-enlightenment-ex-fn2" icon={["upgrade"]}>
<Pair single id="soctalentancestralenlightenment-ancestral-enlightenment-ex-fn2"><Link to="/soctalent/ancestral_enlightenment">⮞</Link> Ancestral Enlightenment (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-2" id="ability-social_talents-fake-fn-2" data-hash-target to="ability-social_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level vigilante</Pair>
<Pair title="Ability">The vigilante can attempt any <Link to="/skill/knowledge">Knowledge</Link> check untrained. If he already has ranks in a particular Knowledge skill, he gains a +4 bonus on checks with that skill.</Pair>
</Ability>
<Ability id="soctalentbeginnersluck-beginners-luck-ex-fn3" icon={["upgrade"]}>
<Pair single id="soctalentbeginnersluck-beginners-luck-ex-fn3" flavor="The vigilante appears so harmless and innocent that onlookers dismiss his incredible abilities as nothing more than beginner's luck."><Link to="/soctalent/beginners_luck">⮞</Link> Beginner's Luck (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-3" id="ability-social_talents-fake-fn-3" data-hash-target to="ability-social_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">When the vigilante uses a vigilante talent while in his social identity, he can add the +20 circumstance bonus from <em>seamless guise</em> to his <Link to="/skill/disguise">Disguise</Link> check to fool onlookers, so long as the number of onlookers witnessing him is no greater than his vigilante level. The vigilante's PC allies do not count as onlookers (and at the GM's discretion, a closely allied NPC might not count as an onlooker, either).</Pair>
<Pair title="Special">He loses this bonus against onlookers who have already witnessed him using a vigilante talent in his social identity within the last week.</Pair>
</Ability>
<Ability id="soctalentbellflowerinnuendo-bellflower-innuendo-ex-fn4" icon={["stairs-goal","upgrade"]}>
<Pair single id="soctalentbellflowerinnuendo-bellflower-innuendo-ex-fn4" flavor={<>A vigilante with this talent has learned to pass secret messages more efficiently by observing the coded messages of the <Link to="/rule/bellflower_network">Bellflower Network</Link> or another secret organization.</>}><Link to="/soctalent/bellflower_innuendo">⮞</Link> Bellflower Innuendo (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-4" id="ability-social_talents-fake-fn-4" data-hash-target to="ability-social_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">He can pass a secret message with <Link to="/skill/bluff">Bluff</Link> in the same amount of time it would normally take to convey the message without encryption. The words and meaning of his secret messages cannot be gleaned from him or those he directly delivered the message to by divinations unless the caster succeeds at a caster level check (DC = 15 + the vigilante's level).</Pair>
</Ability>
<Ability id="soctalentcasethejoint-case-the-joint-ex-fn5" icon={["stairs-goal","rolling-dices"]}>
<Pair single id="soctalentcasethejoint-case-the-joint-ex-fn5" flavor="The vigilante can use his social identity to learn important facts about a location before returning later in his vigilante identity."><Link to="/soctalent/case_the_joint">⮞</Link> Case the Joint (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-5" id="ability-social_talents-fake-fn-5" data-hash-target to="ability-social_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">If he spends at least 1 hour in a location while in his social identity, he can attempt a DC 20 Knowledge (engineering) check. If he succeeds, he gains the ability to later reroll any one failed skill check involving the location's layout (such as a Stealth check to sneak into the location, a Disable Device check to disable an alarm, or a Sleight of Hand check to snatch an object from a pedestal). For every 10 by which the check exceeds 20, the vigilante gains an additional reroll.</Pair>
<Pair title="Special">If the vigilante fails to return to the location within 1 week, the situation changes too much and he cannot use the rerolls. A vigilante can't <em>case</em> the same <em>joint</em> more than once a week.</Pair>
</Ability>
<Ability id="soctalentcompaniontothelonely-companion-to-the-lonely-ex-fn4-2" icon={["stairs-goal","rolling-dices","upgrade","armor-upgrade"]}>
<Pair single id="soctalentcompaniontothelonely-companion-to-the-lonely-ex-fn4-2" flavor={<>Whether religiously motivated, as are followers of <Link to="/faith/arshea">Arshea</Link>, <Link to="/faith/calistria">Calistria</Link>, or <Link to="/faith/shelyn">Shelyn</Link>, or for purely carnal reasons, physical intimacy helps the vigilante cope with the loneliness of his double life.</>}><Link to="/soctalent/companion_to_the_lonely">⮞</Link> Companion to the Lonely (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-4.2" id="ability-social_talents-fake-fn-4.2" data-hash-target to="ability-social_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">Once per day, the vigilante can spend at least 1 hour engaged in acts of physical pleasure with a willing partner to gain a pool of morale points equal to his Charisma bonus or his partner's Charisma bonus, whichever is higher. For the next 24 hours, the vigilante can spend a morale point as an <strong className="hl">immediate action</strong> to roll a Charisma-based skill check or a Will saving throw again after rolling the die but before learning the consequences; he must take the second result even if it is lower.</Pair>
</Ability>
<Ability id="soctalentconflictedidentity-conflicted-identity-ex-fn3-2" icon={["armor-upgrade"]}>
<Pair single id="soctalentconflictedidentity-conflicted-identity-ex-fn3-2" flavor="The vigilante's mind is in a constant state of turmoil, which makes him even more ethically and morally fluid than other vigilantes."><Link to="/soctalent/conflicted_identity">⮞</Link> Conflicted Identity (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-3.2" id="ability-social_talents-fake-fn-3.2" data-hash-target to="ability-social_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Passive Ability">When targeted by a harmful spell or effect that would affect the vigilante in his current identity but not his other identity (or when he would suffer a lesser effect in his other identity), he has a 50% chance of being affected as though he were in his other identity.</Pair>
<Pair title="Special">This chance is rolled when the spell or effect is cast or triggered and before any spell resistance roll, if applicable. For example, if a vigilante has a lawful-neutral social identity and a neutral vigilante identity, he has a 50% chance of taking only half damage from a <Link to="/spell/chaos_hammer">chaos hammer</Link> spell while in his social identity, since he would always take only half damage from a <em>chaos hammer</em> spell when in his vigilante identity.</Pair>
</Ability>
<Ability id="soctalentdoubletime-double-time-ex-fn6" icon={["upgrade"]}>
<Pair single id="soctalentdoubletime-double-time-ex-fn6"><Link to="/soctalent/double_time">⮞</Link> Double Time (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-6" id="ability-social_talents-fake-fn-6" data-hash-target to="ability-social_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">Must have a social identity appropriate to the chosen skill</Pair>
<Pair title="Ability"><p>The vigilante's social identity is that of a skilled and respected artisan or professional, rather than a merchant or noble. In order to complete his day's work while still continuing his vigilante activities, he has learned to work faster than normal, hiding his progress so it seems like he is working full shifts at his day job rather than spending some of that time on other pursuits.</p>
<p>The vigilante needs to spend only 6 hours each day for mundane uses of the Craft or Profession skill, rather than 8 hours. If he has the <Link to="/soctalent/social_grace">social grace</Link> social talent, he needs to spend only 4 hours for any skill he's chosen with social grace.</p>
</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="soctalentinvogue-in-vogue-ex-fn6-2" icon={["upgrade"]}>
<Pair single id="soctalentinvogue-in-vogue-ex-fn6-2" flavor="The vigilante's crafting or professional business is always at the height of the local trends, allowing the vigilante to gain more profits than usual."><Link to="/soctalent/in_vogue">⮞</Link> In Vogue (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-6.2" id="ability-social_talents-fake-fn-6.2" data-hash-target to="ability-social_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level vigilante, <Link to="/soctalent/double_time">double time</Link>, <Link to="/soctalent/social_grace">social grace</Link></Pair>
<Pair title="Passive Ability">Goods he crafts with a <Link to="/skill/craft">Craft</Link> skill he chose with <em>social grace</em> are worth 1/3 more gp than normal due to his celebrity, without increasing the cost to create. Whenever he uses a <Link to="/skill/profession">Profession</Link> skill he chose with <em>social grace</em> to make money, he makes twice as much money.</Pair>
</Ability>
</div>
<Ability id="soctalententrepreneur-entrepreneur-ex-fn7" icon={["stairs-goal","upgrade"]}>
<Pair single id="soctalententrepreneur-entrepreneur-ex-fn7"><Link to="/soctalent/entrepreneur">⮞</Link> Entrepreneur (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-7" id="ability-social_talents-fake-fn-7" data-hash-target to="ability-social_talents-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Choice">Select any one Intelligence-, Wisdom-, or Charisma-based skill other than Perception or Use Magic Device.</Pair>
<Pair title="Ability">The vigilante can use the selected skill to earn money as if he were using a Profession skill. If he selects Perform or Profession, the vigilante instead gains the skill unlock powers for those skills as appropriate for his number of ranks in that skill.</Pair>
<Pair title="Special">If he has the <Link to="/soctalent/social_grace">social grace</Link> social talent, he can apply this benefit to all skills selected with the <em>social grace</em> talent.</Pair>
</Ability>
<Ability id="soctalentgossipcollector-gossip-collector-ex-fn6-3" icon={["stairs-goal","upgrade"]}>
<Pair single id="soctalentgossipcollector-gossip-collector-ex-fn6-3" flavor="The vigilante sits at the center of a web of gossip, granting him access to the latest scuttlebutt with baffling speed."><Link to="/soctalent/gossip_collector">⮞</Link> Gossip Collector (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-6.3" id="ability-social_talents-fake-fn-6.3" data-hash-target to="ability-social_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Ability">Whenever the vigilante is presented with a topic about which he would normally need to spend 1d4 hours to gather information, he must spend only 1d2 hours instead. If he has the <Link to="/soctalent/renown">renown</Link> social talent and gathers the information in his area of renown, he must instead spend only 1d4 &times; 10 minutes, and if he beats the DC to gather a piece of information by 20 or more, he knows that piece of information without spending any time at all; he has simply already heard that gossip.</Pair>
<Pair title="Special">This ability doesn't allow him to gather information that isn't available in the locale he is canvassing, even if that locale is his area of renown.</Pair>
</Ability>
<Ability id="soctalentguiseoflife-guise-of-life-su-fn7-2" icon={["stairs-goal"]}>
<Pair single id="soctalentguiseoflife-guise-of-life-su-fn7-2"><Link to="/soctalent/guise_of_life">⮞</Link> Guise of Life (Su) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-7.2" id="ability-social_talents-fake-fn-7.2" data-hash-target to="ability-social_talents-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">The vigilante must be a corporeal undead creature, or else have the <em>negative energy affinity</em> racial trait (see Special below)</Pair>
<Pair title="Ability">An undead vigilante with this talent gains an additional social identity in the form of one living creature identical to the vigilante's appearance in life. Successful Knowledge checks reveal information about the vigilante as if he were a living creature, and he counts as living for the purpose of divination spells and effects. He gains no other benefit from appearing to be a living creature, and remains vulnerable to positive energy and spells that effect undead.</Pair>
<Pair title="Special">Humanoid vigilantes with the <em>negative energy affinity</em> racial trait can also select this talent, gaining a human social identity.</Pair>
</Ability>
<Ability id="soctalentguiseofunlife-guise-of-unlife-su-fn7-3" icon={["stairs-goal"]}>
<Pair single id="soctalentguiseofunlife-guise-of-unlife-su-fn7-3"><Link to="/soctalent/guise_of_unlife">⮞</Link> Guise of Unlife (Su) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-7.3" id="ability-social_talents-fake-fn-7.3" data-hash-target to="ability-social_talents-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">The vigilante must be a living creature</Pair>
<Pair title="Ability">A vigilante with this talent gains an additional social identity in the form of an undead version of one of his existing social identities, such as a <Link to="/monster/ghoul">ghoul</Link>, <Link to="/template/vampire">vampire</Link>, or <Link to="/template/zombie">zombie</Link>. Successful Knowledge checks reveal information about the vigilante as if he were undead, and he counts as undead for the purpose of divination spells and effects. He gains no other benefit from appearing to be an undead creature, and remains vulnerable to negative energy and spells that effect the living.</Pair>
</Ability>
<Ability id="soctalenthiddenmagic-hidden-magic-ex-fn3-3" icon={["armor-upgrade"]}>
<Pair single id="soctalenthiddenmagic-hidden-magic-ex-fn3-3"><Link to="/soctalent/hidden_magic">⮞</Link> Hidden Magic (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-3.3" id="ability-social_talents-fake-fn-3.3" data-hash-target to="ability-social_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level vigilante</Pair>
<Pair title="Passive Ability">The auras of magic items the vigilante is carrying are hidden (as per <Link to="/spell/magic_aura">magic aura</Link>). The vigilante can suppress or reactivate this effect as a <strong className="hl">standard action</strong>.</Pair>
<Pair title="At 11th Level">The vigilante and any magic items he is carrying appear to be nonmagical (as if he had cast <Link to="/spell/greater_magic_aura">greater magic aura</Link>).</Pair>
</Ability>
<Ability id="soctalentintriguefeats-intrigue-feats-ex-fn8" icon={["stairs-goal"]}>
<Pair single id="soctalentintriguefeats-intrigue-feats-ex-fn8"><Link to="/soctalent/intrigue_feats">⮞</Link> Intrigue Feats (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-8" id="ability-social_talents-fake-fn-8" data-hash-target to="ability-social_talents-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains one of the following feats as a bonus feat: <Link to="/feat/blustering_bluff">Blustering Bluff</Link>, <Link to="/feat/but_a_scratch">But a Scratch</Link>, <Link to="/feat/call_truce">Call Truce</Link>, <Link to="/feat/confabulist">Confabulist</Link>, <Link to="/feat/criminal_reputation">Criminal Reputation</Link>, <Link to="/feat/cutting_humiliation">Cutting Humiliation</Link>, <Link to="/feat/esoteric_linguistics">Esoteric Linguistics</Link>, <Link to="/feat/intoxicating_flattery">Intoxicating Flattery</Link>, <Link to="/feat/ironclad_logic">Ironclad Logic</Link>, <Link to="/feat/nerve_racking_negotiator">Nerve-Racking Negotiator</Link>, <Link to="/feat/orator">Orator</Link>, <Link to="/feat/persuasive_bribery">Persuasive Bribery</Link>, <Link to="/feat/play_to_the_crowd">Play to the Crowd</Link>, <Link to="/feat/quick_favor">Quick Favor</Link>, <Link to="/feat/rhetorical_flourish">Rhetorical Flourish</Link>, <Link to="/feat/sense_assumptions">Sense Assumptions</Link>, <Link to="/feat/sense_relationships">Sense Relationships</Link>, or <Link to="/feat/street_smarts">Street Smarts</Link>. He must meet the feat's prerequisites.</Pair>
<Pair title="Special">This talent can be selected multiple times; each time, the vigilante gains a new feat from the above list.</Pair>
</Ability>
<Ability id="soctalentkalistocratsacumen-kalistocrats-acumen-ex-fn4-3" icon={["hazard-sign","upgrade"]}>
<Pair single id="soctalentkalistocratsacumen-kalistocrats-acumen-ex-fn4-3"><Link to="/soctalent/kalistocrats_acumen">⮞</Link> Kalistocrat's Acumen (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-4.3" id="ability-social_talents-fake-fn-4.3" data-hash-target to="ability-social_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Info">A vigilante with this talent must follow the dietary and sexual prohibitions of <Link to="/eq-misc/the_prophecies_of_kalistrade">the Prophecies of Kalistrade</Link> in his social identity or he loses the talent's benefit until he <Link to="/spell/atonement">atones</Link>.</Pair>
<Pair title="Passive Ability">He can treat <Link to="/rule/the_settlement_stat_block">settlements</Link> as one size category larger when determining their base values and purchase limits.</Pair>
<Pair title="At 9th Level">The vigilante can treat settlements as two size categories larger for the above purposes.</Pair>
<Pair title="At 15th Level">The vigilante can treat settlements as four size categories larger for the above purposes.</Pair>
</Ability>
<Ability id="soctalentmanyguises-many-guises-ex-fn9" icon={["stairs-goal"]}>
<Pair single id="soctalentmanyguises-many-guises-ex-fn9"><Link to="/soctalent/many_guises">⮞</Link> Many Guises (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-9" id="ability-social_talents-fake-fn-9" data-hash-target to="ability-social_talents-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level vigilante</Pair>
<Pair title="Ability">The vigilante can take on any number of mundane guises. Whenever he changes his identity, he has a third option (instead of social or vigilante): he can become mundane.</Pair>
<Pair title="Info">The mundane identity is not a specific individual. Each one is created at the moment it is assumed, and quickly forgotten as soon as it is removed. While in a mundane identity, the vigilante does not gain the benefit of either his social or vigilante identity, but instead appears as a member of his race, usually a common laborer, farmer, or peasant of any gender. His alignment is treated as neutral when he is in his mundane identity.</Pair>
<Pair title="Passive Ability">While in this identity, he receives a +20 circumstance bonus on Disguise checks to appear like an ordinary member of his race. Spells and abilities that are looking for the vigilante in either of his other identities fail while he is in his mundane identity.</Pair>
<Pair title="Special">He must build the appearance for this identity using whatever clothing and tools he has at his disposal. While he can use magic (such as a <Link to="/magic-wondrous/hat_of_disguise">hat of disguise</Link>), his mundane identity can never be anything other than an ordinary member of a society or large group (subject to GM discretion).</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="soctalenteveryman-everyman-ex-fn6-4" icon={["stairs-goal","upgrade"]}>
<Pair single id="soctalenteveryman-everyman-ex-fn6-4"><Link to="/soctalent/everyman">⮞</Link> Everyman (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-6.4" id="ability-social_talents-fake-fn-6.4" data-hash-target to="ability-social_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level vigilante, <Link to="/soctalent/many_guises">many guises</Link></Pair>
<Pair title="Ability">The vigilante can take on the appearance of a specific individual whenever he assumes a mundane guise using his <em>many guises</em> social talent. The individual must be a farmer, laborer, or peasant. While disguised as this individual, the vigilante receives a +20 circumstance bonus on Disguise checks to appear as that individual. Any spell or ability designed to locate the individual has a 50% chance of finding the vigilante instead of the actual individual, and divination spells and abilities used on the vigilante give results as if he were the actual individual.</Pair>
<Pair title="Special">Although this doesn't grant the vigilante any special knowledge of the individual, the vigilante's training grants him a +10 circumstance bonus on Bluff checks to properly play the part of the individual.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="soctalentanyguise-any-guise-su-fn5-2" icon={["stairs-goal"]}>
<Pair single id="soctalentanyguise-any-guise-su-fn5-2"><Link to="/soctalent/any_guise">⮞</Link> Any Guise (Su) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-5.2" id="ability-social_talents-fake-fn-5.2" data-hash-target to="ability-social_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites">17th-level vigilante, <Link to="/soctalent/everyman">everyman</Link></Pair>
<Pair title="Ability">A vigilante can use his <em>everyman</em> social talent to disguise himself as any specific person, even a king or high priest. Furthermore, if the actual individual wouldn't normally be able to be found via magic (such as by being dead or protected from divinations designed to locate the individual), such divinations always find the vigilante instead.</Pair>
</Ability>
</div>
</div>
<Ability id="soctalentmockingbird-mockingbird-ex-fn9-2" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="soctalentmockingbird-mockingbird-ex-fn9-2"><Link to="/soctalent/mockingbird">⮞</Link> Mockingbird (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-9.2" id="ability-social_talents-fake-fn-9.2" data-hash-target to="ability-social_talents-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level vigilante</Pair>
<Pair title="Ability">The vigilante can mimic almost any sort of voice, or even animal calls and sound effects, and he can throw his voice at a distance.</Pair>
<Pair title="Special">This functions similarly to a combination of the <Link to="/spell/ghost_sound">ghost sound</Link>, <Link to="/spell/ventriloquism">ventriloquism</Link>, and <Link to="/spell/vocal_alteration">vocal alteration</Link> spells.</Pair>
</Ability>
<Ability id="soctalentmorphicmask-morphic-mask-su-fn1-2" icon={["stairs-goal","upgrade"]}>
<Pair single id="soctalentmorphicmask-morphic-mask-su-fn1-2"><Link to="/soctalent/morphic_mask">⮞</Link> Morphic Mask (Su) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-1.2" id="ability-social_talents-fake-fn-1.2" data-hash-target to="ability-social_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante's physical form in his vigilante identity can differ significantly from that of his social identity, within the norms for his race &mdash; this can include changes to the vigilante's proportions, coloration, gender characteristics, and other physical characteristics. This increases the vigilante's bonus from <em>seamless guise</em> by 2 for every significant change, as per the <Link to="/skill/disguise">Disguise</Link> skill.</Pair>
<Pair title="Special">The vigilante always assumes the same form when using this ability. A vigilante with multiple natural forms, such as a <Link to="/race/kitsune">kitsune</Link>, can alter each of his forms using this talent.</Pair>
</Ability>
<Ability id="soctalentnotoriousfool-notorious-fool-ex-fn3-4" icon={["armor-upgrade"]}>
<Pair single id="soctalentnotoriousfool-notorious-fool-ex-fn3-4" flavor="While in his social identity, the vigilante can feign absentmindedness, clumsiness, drunkenness, or eccentricity very convincingly."><Link to="/soctalent/notorious_fool">⮞</Link> Notorious Fool (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-3.4" id="ability-social_talents-fake-fn-3.4" data-hash-target to="ability-social_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">When he fails an opposed <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> or <Link to="/skill/stealth">Stealth</Link> check while in his social identity, he can immediately attempt a <Link to="/skill/bluff">Bluff</Link> check opposed by the onlookers' <Link to="/skill/sense_motive">Sense Motive</Link> checks to appear as though he had only blundered or stumbled in a spectacular fashion. If he succeeds at this Bluff check, the onlookers do not realize the vigilante was attempting the action that prompted him to attempt a Sleight of Hand or Stealth check, although being in the wrong place or behaving in an inappropriate manner may still have negative consequences.</Pair>
<Pair title="Special">This talent is ineffective against any onlooker who has already witnessed the vigilante faking a blunder within the last 24 hours.</Pair>
</Ability>
<Ability id="soctalentobscurity-obscurity-ex-fn10" icon={["armor-upgrade"]}>
<Pair single id="soctalentobscurity-obscurity-ex-fn10" flavor="The vigilante is relatively unknown socially. In fact, he makes a point of keeping the life of his social identity as ordinary as possible."><Link to="/soctalent/obscurity">⮞</Link> Obscurity (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-10" id="ability-social_talents-fake-fn-10" data-hash-target to="ability-social_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Ability">This social talent functions exactly as the <Link to="/soctalent/renown">renown</Link> social talent, but instead of improving the starting attitude of all NPCs within the community, it empowers the vigilante so that he no longer needs to succeed at Disguise checks to appear as his social identity while assuming that identity within his area of <em>obscurity.</em></Pair>
<Pair title="Special">He still has to attempt Disguise checks when NPCs within this settlement are confronted with indisputable proof that the vigilante could be more than he appears to be, such as when he uses a vigilante talent while in his social identity. This social talent counts as <em>renown</em> for the purpose of meeting the prerequisites of social talents that list <em>renown</em> as a prerequisite and can be improved by such talents. A vigilante with this talent cannot select <em>renown,</em> nor can he select any social talent that requires him to be famous (such as <Link to="/soctalent/celebrity_discount">celebrity discount</Link> or <Link to="/soctalent/celebrity_perks">celebrity perks</Link>).</Pair>
</Ability>
<Ability id="soctalentowlssight-owls-sight-ex-fn11" icon={["stairs-goal","upgrade"]}>
<Pair single id="soctalentowlssight-owls-sight-ex-fn11"><Link to="/soctalent/owls_sight">⮞</Link> Owl's Sight (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-11" id="ability-social_talents-fake-fn-11" data-hash-target to="ability-social_talents-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains low-light vision. If he already has low-light vision, he gains a +4 competence bonus on <Link to="/skill/perception">Perception</Link> checks in low light. The vigilante also gains a +2 competence bonus on <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> and <Link to="/skill/stealth">Stealth</Link> checks at night.</Pair>
</Ability>
<Ability id="soctalentquickchange-quick-change-ex-fn9-3" icon={["upgrade","armor-upgrade"]}>
<Pair single id="soctalentquickchange-quick-change-ex-fn9-3" flavor="The vigilante learns to shift between his identities with ease."><Link to="/soctalent/quick_change">⮞</Link> Quick Change (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-9.3" id="ability-social_talents-fake-fn-9.3" data-hash-target to="ability-social_talents-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level vigilante</Pair>
<Pair title="Ability">Instead of needing 1 minute to change his identity, he can now do so as a <strong className="hl">full-round action</strong>.</Pair>
<Pair title="Special">If, after a quick change, he encounters any creature familiar with both of his identities, he must attempt a <Link to="/skill/disguise">Disguise</Link> check to avoid the creature seeing through his hastily donned disguise and realizing that the identities are, in fact, the same person. The vigilante can spend 1 additional round adjusting and perfecting his appearance and persona to negate the need for this check.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="soctalentimmediatechange-immediate-change-ex-fn6-5" icon={["upgrade"]}>
<Pair single id="soctalentimmediatechange-immediate-change-ex-fn6-5"><Link to="/soctalent/immediate_change">⮞</Link> Immediate Change (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-6.5" id="ability-social_talents-fake-fn-6.5" data-hash-target to="ability-social_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">13th-level vigilante, <Link to="/soctalent/quick_change">quick change</Link></Pair>
<Pair title="Ability">The vigilante can change identities as a <strong className="hl">move action</strong>, and he no longer needs to spend extra time to adjust his appearance and persona.</Pair>
</Ability>
</div>
<Ability id="renown-ex" icon={["upgrade"]}>
<Pair single id="renown-ex" flavor={<>The vigilante becomes known for deeds and abilities regardless of his current identity. This <em>renown</em> grants him favorable treatment in civilized company and lends him an air of menace while facing down his enemies.</>}>Renown (Ex)</Pair>
<Pair title="Ability"><p>While he is in his social identity, a vigilante can spend 1 week gaining <em>renown</em> among the locals of any community of no more than about 200 individuals (<Link to="/rule/the_shape_of_civilization">a village</Link>). This could be the entire community or a smaller neighborhood in a larger settlement. He must spend at least 4 hours each day socializing and making contacts. After spending 1 week doing this, whenever he is in his social identity, all NPCs in the community have a starting attitude toward him that is one category better, as long as each person's <Link to="/skill/attitude">initial attitude</Link> would have at least been indifferent. While he gains <em>renown</em> in an area using his social identity, he also spreads rumors and tales about his vigilante identity.</p>
<p>Once he has gained <em>renown</em> in a community, he gains a +4 circumstance bonus on Intimidate checks whenever he is in his vigilante identity. This bonus applies only while he is near the community in which he has gained <em>renown;</em> he must be within a number of miles equal to his vigilante level.</p>
</Pair>
<Pair title="Special">A vigilante can hold <em>renown</em> in a limited number of communities (normally one, with other social talents allowing two). If he gains <em>renown</em> in a new community, he must decide which one of his previous communities to lose. These effects are subject to GM approval. For example, the GM might rule that an NPC or monster has not heard any tales about the vigilante. Or, a foe may have a starting attitude toward him that's one category worse, rather than one category better.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="soctalentcelebritydiscount-celebrity-discount-ex-fn5-3" icon={["upgrade"]}>
<Pair single id="soctalentcelebritydiscount-celebrity-discount-ex-fn5-3" flavor="The vigilante's social identity is popular enough to receive discounts in his area of renown."><Link to="/soctalent/celebrity_discount">⮞</Link> Celebrity Discount (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-5.3" id="ability-social_talents-fake-fn-5.3" data-hash-target to="ability-social_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites">3rd-level vigilante, <Link to="/soctalent/renown">renown</Link></Pair>
<Pair title="Ability">Whenever he buys an item in his area of <em>renown</em> that costs 500 gp or less, he can buy it at 90% of the market price, rather than the full price.</Pair>
<Pair title="Special">If he has the <Link to="/soctalent/great_renown">great renown</Link> social talent, the gp limit increases to 2,000 gp, and if he possesses the <Link to="/soctalent/incredible_renown">incredible renown</Link> social talent, the gp limit increases to 8,000 gp.</Pair>
</Ability>
<Ability id="soctalentcelebrityperks-celebrity-perks-ex-fn6-6" icon={["upgrade"]}>
<Pair single id="soctalentcelebrityperks-celebrity-perks-ex-fn6-6" flavor={<>The vigilante is a celebrity in his area of <em>renown,</em> and adoring fans are all too eager to shower him with the fundamental necessities.</>}><Link to="/soctalent/celebrity_perks">⮞</Link> Celebrity Perks (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-6.6" id="ability-social_talents-fake-fn-6.6" data-hash-target to="ability-social_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level vigilante, <Link to="/soctalent/renown">renown</Link></Pair>
<Pair title="Passive Ability"><p>While within his area of <em>renown,</em> he can always receive common meals or lodging (worth up to 1 gp per meal or night) for free, and can avoid paying taxes or bribes of 1 gp or less.</p>
<p>If he wants a particular nonmagical item worth 1 gp or less, he can spend 1d10 minutes interacting with people in his area of <em>renown</em> to receive the item from a fan (if he ever sells such a gift from a fan, he loses this social talent permanently).</p>
</Pair>
<Pair title="Special"><p>If he has the <Link to="/soctalent/great_renown">great renown</Link> social talent, he can receive gifts of up to 5 gp, receive fine food and lodgings (worth up to 10 gp per meal or night) for free, and avoid paying taxes or bribes of 10 gp or less.</p>
<p>If he has <Link to="/soctalent/incredible_renown">incredible renown</Link>, he can receive gifts of up to 25 gp, receive exquisite food and lodgings (worth up to 100 gp per meal or night) for free, and avoid paying taxes or bribes of 100 gp or less.</p>
</Pair>
</Ability>
<Ability id="soctalentdiscreetinquiries-discreet-inquiries-ex-fn4-4" icon={["armor-upgrade"]}>
<Pair single id="soctalentdiscreetinquiries-discreet-inquiries-ex-fn4-4"><Link to="/soctalent/discreet_inquiries">⮞</Link> Discreet Inquiries (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-4.4" id="ability-social_talents-fake-fn-4.4" data-hash-target to="ability-social_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/soctalent/renown">Renown</Link></Pair>
<Pair title="Ability">The vigilante can attempt Diplomacy checks to gather information without being obvious he is seeking any, whether by buying the silence of informants or by talking foes into revealing information without realizing they are doing so. While the vigilante is in his area of <Link to="/soctalent/renown">renown</Link>, gathering information in this way takes 2d4 hours and costs 2d4 gp. Anyone who might take notice of the information gathering does not notice unless she succeeds at a Sense Motive check opposed by the vigilante's Bluff check. The vigilante gains a +4 bonus on this Bluff check.</Pair>
</Ability>
<Ability id="soctalentfeigninnocence-feign-innocence-ex-fn6-7" icon={["armor-upgrade"]}>
<Pair single id="soctalentfeigninnocence-feign-innocence-ex-fn6-7" flavor="The vigilante's social identity seems so innocent that it is hard to believe he was involved in wrongdoing."><Link to="/soctalent/feign_innocence">⮞</Link> Feign Innocence (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-6.7" id="ability-social_talents-fake-fn-6.7" data-hash-target to="ability-social_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level vigilante, <Link to="/soctalent/renown">renown</Link></Pair>
<Pair title="Passive Ability">Within his area of <em>renown,</em> this provides a nonmagical effect identical to the <Link to="/spell/innocence">innocence</Link> spell.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="soctalentsubjectivetruth-subjective-truth-ex-fn12" icon={["armor-upgrade"]}>
<Pair single id="soctalentsubjectivetruth-subjective-truth-ex-fn12" flavor="The vigilante's disparate identities allow him to defeat magic that detects lies."><Link to="/soctalent/subjective_truth">⮞</Link> Subjective Truth (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-12" id="ability-social_talents-fake-fn-12" data-hash-target to="ability-social_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level vigilante, <Link to="/soctalent/feign_innocence">feign innocence</Link></Pair>
<Pair title="Passive Ability">As long as what he says is true from the point of view of his current identity, it detects as true to effects such as <Link to="/spell/discern_lies">discern lies</Link>, and he can say it in effects such as <Link to="/spell/zone_of_truth">zone of truth</Link> that force him to speak the truth.</Pair>
</Ability>
</div>
<Ability id="soctalentgreatrenown-great-renown-ex-fn6-8" icon={["upgrade"]}>
<Pair single id="soctalentgreatrenown-great-renown-ex-fn6-8" flavor="The vigilante is known on a broader scale."><Link to="/soctalent/great_renown">⮞</Link> Great Renown (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-6.8" id="ability-social_talents-fake-fn-6.8" data-hash-target to="ability-social_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level vigilante, <Link to="/soctalent/renown">renown</Link></Pair>
<Pair title="Ability">He can gain <em>renown</em> in a single community of up to 5,000 individuals (a <Link to="/rule/the_shape_of_civilization">large town</Link>) or up to two communities of no more than 2,000 individuals each (two small towns). The bonus while he is in his social identity remains unchanged, but the circumstance bonus on <Link to="/skill/intimidate">Intimidate</Link> checks from his <em>renown</em> social talent while he is in his vigilante identity increases to +6.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="soctalentincrediblerenown-incredible-renown-ex-fn6-9" icon={["upgrade"]}>
<Pair single id="soctalentincrediblerenown-incredible-renown-ex-fn6-9" flavor="The vigilante is incredibly famous in both identities."><Link to="/soctalent/incredible_renown">⮞</Link> Incredible Renown (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-6.9" id="ability-social_talents-fake-fn-6.9" data-hash-target to="ability-social_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level vigilante, <Link to="/soctalent/great_renown">great renown</Link></Pair>
<Pair title="Ability">He can gain <em>renown</em> in a single community of up to 25,000 individuals (a <Link to="/rule/the_shape_of_civilization">large city</Link>) or up to two smaller cities of no more than 10,000 individuals each (two small cities). The bonus while he is in his social identity remains unchanged, but the circumstance bonus to <Link to="/skill/intimidate">Intimidate</Link> from his <em>great renown</em> social talent while in he is in his vigilante identity increases to +8.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="soctalentinstantrecognition-instant-recognition-ex-fn6-10" icon={["upgrade"]}>
<Pair single id="soctalentinstantrecognition-instant-recognition-ex-fn6-10" flavor="The vigilante is so well known that his name precedes him, even to other communities."><Link to="/soctalent/instant_recognition">⮞</Link> Instant Recognition (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-6.10" id="ability-social_talents-fake-fn-6.10" data-hash-target to="ability-social_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">13th-level vigilante, <Link to="/soctalent/incredible_renown">incredible renown</Link>, <Link to="/soctalent/triumphant_return">triumphant return</Link></Pair>
<Pair title="Ability">It only takes 4 hours of effort to get the word out to transfer his <em>renown</em> benefits to a new community.</Pair>
</Ability>
</div>
</div>
<Ability id="loyal-aid-ex" icon={["stairs-goal","upgrade","armor-upgrade"]}>
<Pair single id="loyal-aid-ex">Loyal Aid (Ex)</Pair>
<Pair title="Prerequisites">3rd-level vigilante, <Link to="/soctalent/renown">renown</Link></Pair>
<Pair title="Ability"><p>The vigilante gains the service of a number of loyal allies who can help him gather information, cover for his two identities, or perform minor tasks. Inside his area of <em>renown,</em> a vigilante with this talent gains a bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to gather information equal to half his vigilante level.</p>
<p>In addition, if the vigilante wants, he can task his friends to help cover for him by spreading false tales of his location and activities to others. This has the effect of increasing the DC of Diplomacy checks to gather information about the vigilante and Survival checks to track him by an amount equal to his level. This lasts for 1 day, and can be used only once per week.</p>
<p>Finally, once per day, the vigilante can ask his allies to perform a minor task for him. This usually involves delivering a message, purchasing a piece of mundane gear worth 100 gp or less (which the vigilante must pay for), or retrieving an object owned by the vigilante (that would be easily accessible by the ally). This task might take other forms as well, subject to GM discretion, but can never involve combat or danger.</p>
</Pair>
</Ability>
<Ability id="soctalenttriumphantreturn-triumphant-return-ex-fn12-2" icon={["upgrade"]}>
<Pair single id="soctalenttriumphantreturn-triumphant-return-ex-fn12-2" flavor={<>The vigilante's tales are never truly forgotten. This makes it easier to establish his <em>renown</em> in a place he has established it before.</>}><Link to="/soctalent/triumphant_return">⮞</Link> Triumphant Return (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-12.2" id="ability-social_talents-fake-fn-12.2" data-hash-target to="ability-social_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Prerequisites">3rd-level vigilante, <Link to="/soctalent/renown">renown</Link></Pair>
<Pair title="Ability">In any settlement where the vigilante previously gained <em>renown,</em> it takes only 3 days, rather than 1 week, to gain <em>renown</em> again.</Pair>
</Ability>
</div>
<Ability id="soctalentsafehouse-safe-house-ex-fn9-5" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="soctalentsafehouse-safe-house-ex-fn9-5"><Link to="/soctalent/safe_house">⮞</Link> Safe House (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-9.5" id="ability-social_talents-fake-fn-9.5" data-hash-target to="ability-social_talents-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante can establish a safe house in his area of <em>renown,</em> and he can change it every time he changes his area of <em>renown.</em> If he doesn't have the <Link to="/soctalent/renown">renown</Link> talent, he can still select this talent and place the safe house in a single location to which he has access, but he can never move the safe house from its initial location until he gains the <em>renown</em> talent.</Pair>
<Pair title="Info">This safe house must be an area no larger in volume than a cube that is a number of feet per side equal to 10 feet per vigilante level. The safe house can be arranged any way he likes and it can be part of a larger building, like a secret room or an underground cave. Objects within this safe house can't be located by any effect that is less powerful than a <Link to="/spell/discern_location">discern location</Link> spell.</Pair>
<Pair title="At 7th Level">The protection from being located also applies to creatures in the safe house.</Pair>
<Pair title="At 13th Level">The entire area is protected from scrying effects (though not mundane snooping) like a <Link to="/spell/mages_private_sanctum">mage's private sanctum</Link>.</Pair>
</Ability>
<Ability id="soctalentseemlessshapechanger-seemless-shapechanger-ex-fn10-2" icon={["armor-upgrade"]}>
<Pair single id="soctalentseemlessshapechanger-seemless-shapechanger-ex-fn10-2" flavor="The vigilante seamlessly adopts any persona he assumes with magic."><Link to="/soctalent/seemless_shapechanger">⮞</Link> Seemless Shapechanger (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-10.2" id="ability-social_talents-fake-fn-10.2" data-hash-target to="ability-social_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Prerequisites">Must have the <Link to="/subtype/shapechanger">shapechanger</Link> subtype</Pair>
<Pair title="Passive Ability">The vigilante adds his <em>seamless guise</em> bonus to the bonus on <Link to="/skill/disguise">Disguise</Link> checks that he gains to assume the shape of another creature with a <Link to="/spelldef/polymorph">polymorph</Link> spell or effect.</Pair>
</Ability>
<Ability id="soctalentskillfamiliarity-skill-familiarity-ex-fn2-2" icon={["stairs-goal","upgrade"]}>
<Pair single id="soctalentskillfamiliarity-skill-familiarity-ex-fn2-2"><Link to="/soctalent/skill_familiarity">⮞</Link> Skill Familiarity (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-2.2" id="ability-social_talents-fake-fn-2.2" data-hash-target to="ability-social_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level vigilante</Pair>
<Pair title="Choice">The vigilante choses four skills when he gains this talent.</Pair>
<Pair title="Ability">He can take 10 on checks with his chosen skills even when distracted or threatened. If he takes 10 on checks with these skills while not distracted or threatened, he gains a bonus on the check equal to <Link to="/misc/one_quarter">one-quarter</Link> of his vigilante level (minimum +2).</Pair>
</Ability>
<Ability id="soctalentsocialgrace-social-grace-ex-fn9-6" icon={["upgrade"]}>
<Pair single id="soctalentsocialgrace-social-grace-ex-fn9-6"><Link to="/soctalent/social_grace">⮞</Link> Social Grace (Ex) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-9.6" id="ability-social_talents-fake-fn-9.6" data-hash-target to="ability-social_talents-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Choice">The vigilante selects any one Intelligence-, Wisdom-, or Charisma-based skill other than Perception or Use Magic Device.</Pair>
<Pair title="Passive Ability">Whenever the vigilante is in his social identity, he receives a +4 circumstance bonus on checks with the selected skill.</Pair>
<Pair title="At 5th Level">He can select another skill (with the same restrictions) to gain this bonus.</Pair>
<Pair title="At 9th Level">He can select another skill (with the same restrictions) to gain this bonus.</Pair>
<Pair title="At 13th Level">He can select another skill (with the same restrictions) to gain this bonus.</Pair>
<Pair title="At 17th Level">He can select another skill (with the same restrictions) to gain this bonus.</Pair>
</Ability>
<Ability id="soctalentsongbird-songbird-su-fn11-2" icon={["magic-swirl","skills"]}>
<Pair single id="soctalentsongbird-songbird-su-fn11-2"><Link to="/soctalent/songbird">⮞</Link> Songbird (Su) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-11.2" id="ability-social_talents-fake-fn-11.2" data-hash-target to="ability-social_talents-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Ability">The vigilante gains the use of <Link to="/spell/animal_messenger">animal messenger</Link> once per day as a spell-like ability, with a caster level equal to his character level.</Pair>
<Pair title="Info">He also gains <Link to="/skill/handle_animal">Handle Animal</Link> as a class skill.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="soctalentbeastfriend-beast-friend-su-fn11-3" icon={["magic-swirl"]}>
<Pair single id="soctalentbeastfriend-beast-friend-su-fn11-3"><Link to="/soctalent/beast_friend">⮞</Link> Beast Friend (Su) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-11.3" id="ability-social_talents-fake-fn-11.3" data-hash-target to="ability-social_talents-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/soctalent/songbird">Songbird</Link></Pair>
<Pair title="Ability">The vigilante can cast <Link to="/spell/charm_animal">charm animal</Link> once per day as a spell-like ability, with a caster level equal to his level.</Pair>
</Ability>
<Ability id="soctalentbeastspeech-beast-speech-su-fn11-4" icon={["magic-swirl"]}>
<Pair single id="soctalentbeastspeech-beast-speech-su-fn11-4"><Link to="/soctalent/beast_speech">⮞</Link> Beast Speech (Su) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-11.4" id="ability-social_talents-fake-fn-11.4" data-hash-target to="ability-social_talents-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/soctalent/songbird">Songbird</Link></Pair>
<Pair title="Ability">The vigilante can cast <Link to="/spell/speak_with_animals">speak with animals</Link> once per day as a spell-like ability, with a caster level equal to his character level.</Pair>
</Ability>
</div>
<Ability id="soctalenttransformationsequence-transformation-sequence-su-fn10-3" icon={["upgrade","broken-shield"]}>
<Pair single id="soctalenttransformationsequence-transformation-sequence-su-fn10-3" flavor="The vigilante's transformation between identities is assisted by magic. This makes it faster than usual, but also more noticeable."><Link to="/soctalent/transformation_sequence">⮞</Link> Transformation Sequence (Su) <sup><InnerLink showBacklink="backlink-ability-social_talents-fake-fn-10.3" id="ability-social_talents-fake-fn-10.3" data-hash-target to="ability-social_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Prerequisites">Able to cast spells or spell-like abilities</Pair>
<Pair title="Ability">The vigilante can complete the switch between his identities in 5 rounds, improving to a <strong className="hl">standard action</strong> if he has the <Link to="/soctalent/quick_change">quick change</Link> social talent, and to a <strong className="hl">swift action</strong> if he has the <Link to="/soctalent/immediate_change">immediate change</Link> social talent. However, the transformation causes quite a spectacle, involving loud sounds or music, brilliant colorful energies, and swift motions.</Pair>
<Pair title="Special">A vigilante with the <Link to="/arc-vigilante/magical_child">magical child</Link> archetype effectively gets this social talent for free at 1st level.</Pair>
</Ability>
<Ability id="well-known-expert-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="well-known-expert-ex">Well-Known Expert (Ex)</Pair>
<Pair title="Ability"><p>The vigilante's social identity is known as an expert in numerous fields, including areas and topics the vigilante hasn't actually taken the time to study. As a result the vigilante is skilled at encouraging others to discover solutions to difficult problems themselves by asking probing questions, while appearing to give the information himself.</p>
<p>In his social identity, the vigilante can take 10 when attempting to <Link to="/rule/aid_another">aid another</Link> on <Link to="/skill/appraise">Appraise</Link>, <Link to="/skill/craft">Craft</Link>, and <Link to="/skill/knowledge">Knowledge</Link> checks. He also gains a bonus equal to <Link to="/misc/half">half</Link> his class level (minimum +1) on Bluff checks to appear knowledgeable in Appraise, Craft (all), and Knowledge (all). If he has the <Link to="/soctalent/renown">renown</Link> social talent, he grants a +3 bonus when he successfully aids another on these skill checks, rather than +2.</p>
<p>In his area of <em>renown,</em> the vigilante's social identity is so trusted as an expert that scholars are inspired to make amazing deductions and intuitive leaps in discussions with him. A creature that has already failed a Knowledge check on a specific subject can attempt one additional check to gain information on the same topic if it receives an aid another bonus from the vigilante when doing so.</p>
</Pair>
</Ability>
<section data-footnotes><h3 id="ability-social_talents-label">Footnotes</h3><ol>
<li id="ability-social_talents-fake-fn-1-target"><p><Link to="/source/chronicle_of_legends">Chronicle of Legends</Link> pg. 7 <InnerLink aria-label="Back to reference 1" id="backlink-ability-social_talents-fake-fn-1" data-hash-target to="ability-social_talents-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-social_talents-fake-fn-1.2" data-hash-target to="ability-social_talents-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-social_talents-fake-fn-2-target"><p><Link to="/source/disciples_doctrine">Disciple's Doctrine</Link> pg. 23 <InnerLink aria-label="Back to reference 2" id="backlink-ability-social_talents-fake-fn-2" data-hash-target to="ability-social_talents-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-social_talents-fake-fn-2.2" data-hash-target to="ability-social_talents-fake-fn-2.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-social_talents-fake-fn-3-target"><p><Link to="/source/antiheros_handbook">Antihero's Handbook</Link> pg. 16 <InnerLink aria-label="Back to reference 3" id="backlink-ability-social_talents-fake-fn-3" data-hash-target to="ability-social_talents-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-social_talents-fake-fn-3.2" data-hash-target to="ability-social_talents-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-social_talents-fake-fn-3.3" data-hash-target to="ability-social_talents-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-social_talents-fake-fn-3.4" data-hash-target to="ability-social_talents-fake-fn-3.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-social_talents-fake-fn-4-target"><p><Link to="/source/inner_sea_intrigue">Inner Sea Intrigue</Link> pg. 33 <InnerLink aria-label="Back to reference 4" id="backlink-ability-social_talents-fake-fn-4" data-hash-target to="ability-social_talents-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-social_talents-fake-fn-4.2" data-hash-target to="ability-social_talents-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-social_talents-fake-fn-4.3" data-hash-target to="ability-social_talents-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-social_talents-fake-fn-4.4" data-hash-target to="ability-social_talents-fake-fn-4.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-social_talents-fake-fn-5-target"><p><Link to="/source/ultimate_intrigue">Ultimate Intrigue</Link> pg. 10 <InnerLink aria-label="Back to reference 5" id="backlink-ability-social_talents-fake-fn-5" data-hash-target to="ability-social_talents-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-social_talents-fake-fn-5.2" data-hash-target to="ability-social_talents-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-social_talents-fake-fn-5.3" data-hash-target to="ability-social_talents-fake-fn-5.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-social_talents-fake-fn-6-target"><p>Ultimate Intrigue pg. 11 <InnerLink aria-label="Back to reference 6" id="backlink-ability-social_talents-fake-fn-6" data-hash-target to="ability-social_talents-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-social_talents-fake-fn-6.2" data-hash-target to="ability-social_talents-fake-fn-6.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-social_talents-fake-fn-6.3" data-hash-target to="ability-social_talents-fake-fn-6.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-social_talents-fake-fn-6.4" data-hash-target to="ability-social_talents-fake-fn-6.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-social_talents-fake-fn-6.5" data-hash-target to="ability-social_talents-fake-fn-6.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-social_talents-fake-fn-6.6" data-hash-target to="ability-social_talents-fake-fn-6.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-social_talents-fake-fn-6.7" data-hash-target to="ability-social_talents-fake-fn-6.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-social_talents-fake-fn-6.8" data-hash-target to="ability-social_talents-fake-fn-6.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-social_talents-fake-fn-6.9" data-hash-target to="ability-social_talents-fake-fn-6.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-social_talents-fake-fn-6.10" data-hash-target to="ability-social_talents-fake-fn-6.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-social_talents-fake-fn-6.11" data-hash-target to="ability-social_talents-fake-fn-6.11">↩<sup>11</sup></InnerLink></p></li>
<li id="ability-social_talents-fake-fn-7-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> pg. 26 <InnerLink aria-label="Back to reference 7" id="backlink-ability-social_talents-fake-fn-7" data-hash-target to="ability-social_talents-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-social_talents-fake-fn-7.2" data-hash-target to="ability-social_talents-fake-fn-7.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-social_talents-fake-fn-7.3" data-hash-target to="ability-social_talents-fake-fn-7.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-social_talents-fake-fn-8-target"><p>Spymaster's Handbook pg. 2 <InnerLink aria-label="Back to reference 8" id="backlink-ability-social_talents-fake-fn-8" data-hash-target to="ability-social_talents-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-social_talents-fake-fn-8.2" data-hash-target to="ability-social_talents-fake-fn-8.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-social_talents-fake-fn-9-target"><p>Ultimate Intrigue pg. 12 <InnerLink aria-label="Back to reference 9" id="backlink-ability-social_talents-fake-fn-9" data-hash-target to="ability-social_talents-fake-fn-9">↩</InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-social_talents-fake-fn-9.2" data-hash-target to="ability-social_talents-fake-fn-9.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-social_talents-fake-fn-9.3" data-hash-target to="ability-social_talents-fake-fn-9.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-social_talents-fake-fn-9.4" data-hash-target to="ability-social_talents-fake-fn-9.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-social_talents-fake-fn-9.5" data-hash-target to="ability-social_talents-fake-fn-9.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-social_talents-fake-fn-9.6" data-hash-target to="ability-social_talents-fake-fn-9.6">↩<sup>6</sup></InnerLink></p></li>
<li id="ability-social_talents-fake-fn-10-target"><p><Link to="/source/blood_of_the_beast">Blood of the Beast</Link> pg. 15 <InnerLink aria-label="Back to reference 10" id="backlink-ability-social_talents-fake-fn-10" data-hash-target to="ability-social_talents-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-social_talents-fake-fn-10.2" data-hash-target to="ability-social_talents-fake-fn-10.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-social_talents-fake-fn-10.3" data-hash-target to="ability-social_talents-fake-fn-10.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-social_talents-fake-fn-11-target"><p><Link to="/source/heroes_of_golarion">Heroes of Golarion</Link> pg. 19 <InnerLink aria-label="Back to reference 11" id="backlink-ability-social_talents-fake-fn-11" data-hash-target to="ability-social_talents-fake-fn-11">↩</InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-social_talents-fake-fn-11.2" data-hash-target to="ability-social_talents-fake-fn-11.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-social_talents-fake-fn-11.3" data-hash-target to="ability-social_talents-fake-fn-11.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-social_talents-fake-fn-11.4" data-hash-target to="ability-social_talents-fake-fn-11.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-social_talents-fake-fn-12-target"><p>Ultimate Intrigue pg. 13 <InnerLink aria-label="Back to reference 12" id="backlink-ability-social_talents-fake-fn-12" data-hash-target to="ability-social_talents-fake-fn-12">↩</InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-social_talents-fake-fn-12.2" data-hash-target to="ability-social_talents-fake-fn-12.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></div>};
const _stance_rage_powers = {title: "Stance Rage Powers (Unchained Barbarian)", topLink: ["Unchained Barbarian","class/unchained_barbarian"], jsx: <><h2 id="ability-stance_rage_powers-stance-rage-powers">Stance Rage Powers</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link></p>
<p><strong>Stance rage powers</strong> are available to unchained barbarians. Activating a stance rage power is a move action. A barbarian can't have more than one stance rage power active at a time. If she activates a stance rage power while another one is active, the current stance immediately ends. The stance can be intentionally ended at the beginning of the barbarian's turn as a free action; otherwise, it lasts until the rage ends.</p>
<p>An unchained barbarian can also choose from other <Link to="/ability/rage_powers">rage powers</Link>.</p>
<ScrollContainer id="ability-stance_rage_powers--table-0"><table>
<thead>
<tr>
<th>Stance Power</th>
<th>Minimum Level</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/ragepower/accurate_stance">Accurate Stance (Ex)<IonRippleEffect /></Link></td>
<td>2nd</td>
<td>Improve your melee and thrown weapon attacks.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/ragepower/calm_stance">Calm Stance (Ex)<IonRippleEffect /></Link></td>
<td>2nd</td>
<td>Supress rage benefits and penalties, except for the temporary hit points.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/ragepower/elemental_stance">Elemental Stance (Su)<IonRippleEffect /></Link></td>
<td>4th</td>
<td>Deal extra elemental damage with your melee attacks.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/ragepower/guarded_stance_stance">Guarded Stance (Ex)<IonRippleEffect /></Link></td>
<td>2nd</td>
<td>Gain a dodge bonus to your AC.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/ragepower/knockdown_stance">Knockdown Stance (Ex)<IonRippleEffect /></Link></td>
<td>2nd</td>
<td>You can freely trip foes in lieu of attacking them.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/ragepower/powerful_stance">Powerful Stance (Ex)<IonRippleEffect /></Link></td>
<td>2nd</td>
<td>Increase your melee and thrown weapon damage.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/ragepower/reckless_stance">Reckless Stance (Ex)<IonRippleEffect /></Link></td>
<td>2nd</td>
<td>Increase your attack at the expense of your defense.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/ragepower/regenerative_stance">Regenerative Stance (Ex)<IonRippleEffect /></Link></td>
<td>4th</td>
<td>Regain temporary hit points every round.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/ragepower/strength_stance">Strength Stance (Ex)<IonRippleEffect /></Link></td>
<td>2nd</td>
<td>Gain a bonus to combat maneuvers and some Strength checks.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/ragepower/taunting_stance">Taunting Stance (Ex)<IonRippleEffect /></Link></td>
<td>12th</td>
<td>Leave yourself open to attack, but counterattack with impunity.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
export default {patrons:_patrons,psi_tech:_psi_tech,rogue_talents:_rogue_talents,shaman_hexes:_shaman_hexes,shaman_spirits:_shaman_spirits,simple_kinetic_blasts:_simple_kinetic_blasts,social_talents:_social_talents,stance_rage_powers:_stance_rage_powers}