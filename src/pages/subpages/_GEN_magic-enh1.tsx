import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
const _not_found = {title: "Unknown", jsx: <><h2 id="magic-enh-not_found-error">Error</h2>
<p>Unable to find the requested magic enhancement.</p>
</>};
const _advancing_armor = {title: "Advancing (armor)", jsx: <><h2 id="magic-enh-advancing_armor-advancing">Advancing</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 28</Link><br/><strong>Aura</strong> faint necromancy; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A suit of armor with the advancing special ability allows its wearer to move through fallen enemies to the forefront of any conflict. Once per round when the wearer of a suit of advancing armor reduces an opponent to 0 hit points or fewer with a melee attack, she can immediately move up to 10 feet as a free action. This movement does not provoke attacks of opportunity. If this armor is created as <Link to="/eq-armor/barding">barding</Link>, the effect is triggered if either the mount or its rider reduces an opponent to 0 hit points or fewer, and allows the mount to move up to 10 feet. The advancing special ability can be applied only to heavy armor.</p>
<h3 id="magic-enh-advancing_armor-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/deadly_juggernaut">deadly juggernaut</Link>; <strong>Price</strong> +1 bonus</p>
<blockquote>
<p><em>See also: <Link to="/magic-enh/advancing_weapon">advancing weapon enhancement</Link></em></p>
</blockquote>
</>};
const _balanced = {title: "Balanced", jsx: <><h2 id="magic-enh-balanced-balanced">Balanced</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 26</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 115</Link><br/><strong>Aura</strong> faint evocation; <strong>CL</strong> 3rd<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>As an immediate action, the wearer of a suit of balanced armor can reduce the enhancement bonus of the armor to gain an equal enhancement bonus on one type of saving throw (Fortitude, Reflex, or Will) designated when the armor is created. This effect lasts until the beginning of the wearer's next turn. This ability can be applied only to medium armor.</p>
<h3 id="magic-enh-balanced-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/resistance">resistance</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _benevolent_armor = {title: "Benevolent (armor)", jsx: <><h2 id="magic-enh-benevolent_armor-benevolent">Benevolent</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 115</Link><br/><strong>Aura</strong> faint enchantment; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This suit of armor best serves a wearer who focuses on assisting and protecting his allies. Benevolent armor is usually decorated with motifs of prosperity, plenty, and generosity, such as helping hands, cornucopias, and flourishing plants. When the wearer of a suit of benevolent armor uses the <Link to="/rule/aid_another_2">aid another</Link> action to give an ally a bonus to AC against an opponent's next attack, he also adds the benevolent armor's enhancement bonus to the ally's AC.</p>
<h3 id="magic-enh-benevolent_armor-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/aid">aid</Link>; <strong>Price</strong> +1 bonus</p>
<blockquote>
<p><em>See also: <Link to="/magic-enh/benevolent_weapon">benevolent weapon enhancement</Link></em></p>
</blockquote>
</>};
const _billowing = {title: "Billowing", jsx: <><h2 id="magic-enh-billowing-billowing">Billowing</h2>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 46</Link><br/><strong>Aura</strong> faint conjuration; <strong>CL</strong> 3rd<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Billowing armor constantly creates a cushion of elemental air around the wearer. The wearer is immune to additional damage from constriction and damage from being buried, although he gains no protection from <Link to="/rule/suffocation">suffocation</Link>. When the wearer falls more than 20 feet, he can attempt a DC 15 <Link to="/skill/fly">Fly</Link> skill check as an immediate action to reduce his falling damage by half.</p>
<h3 id="magic-enh-billowing-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/cushioning_bands">cushioning bands</Link>, <Link to="/spell/feather_fall">feather fall</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _bitter = {title: "Bitter", jsx: <><h2 id="magic-enh-bitter-bitter">Bitter</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 115</Link>, <Link to="/source/pathfinder_society_field_guide">Pathfinder Society Field Guide pg. 50</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This armor exudes an exceptionally vile and bitter taste whenever something bites or swallows a creature that is wearing it. Any creature that <Link to="/rule/grapple">grapples</Link> the wearer with a bite attack (or any other attack using the mouth) must succeed at a DC 14 Fortitude save to avoid immediately ending the grapple.</p>
<p>If the wearer is <Link to="/umr/swallow_whole">swallowed whole</Link>, the swallowing creature must succeed at a DC 14 Fortitude save at the start of each turn that the armored victim remains alive inside of the creature or become <Link to="/misc/nauseated">nauseated</Link> for 1 round. The creature may vomit up the victim as a standard action. This is a poison effect.</p>
<h3 id="magic-enh-bitter-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/stinking_cloud">stinking cloud</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _bolstering = {title: "Bolstering", jsx: <><h2 id="magic-enh-bolstering-bolstering">Bolstering</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 116</Link><br/><strong>Aura</strong> faint enchantment; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Anytime the wearer of bolstering armor damages a creature with a melee or ranged attack, he gains a +2 competence bonus on saving throws against that creature's abilities until the start of his next turn. The bolstering ability can be applied to medium armor, heavy armor, light shields, heavy shields, and tower shields, but not light armor or bucklers.</p>
<h3 id="magic-enh-bolstering-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/heroism">heroism</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _calming = {title: "Calming", jsx: <><h2 id="magic-enh-calming-calming">Calming</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 209</Link><br/><strong>Aura</strong> faint enchantment; <strong>CL</strong> 5th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Calming armor is dyed or stained a soothing color, usually blue. As a swift action, the wearer can create a 5-foot aura around her that quiets the emotions of any agitated opponent threatening her. A creature that is raging or under an emotion effect must succeed at a DC 15 Will saving throw or those effects are suppressed (but not dispelled) for as long as the aura persists. The aura can be used up to 10 rounds each day, though the rounds don't need to be consecutive. Ending the aura is a swift action.</p>
<h3 id="magic-enh-calming-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/calm_emotions">calm emotions</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _champion = {title: "Champion", jsx: <><h2 id="magic-enh-champion-champion">Champion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 116</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 283</Link><br/><strong>Aura</strong> faint abjuration; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This armor special ability works only for good creatures with the challenge ability (such as <Link to="/class/cavalier">cavaliers</Link>) or the smite evil ability (such as <Link to="/class/paladin">paladins</Link>, <Link to="/template/half_celestial">half-celestials</Link>, and creatures with the <Link to="/template/celestial">celestial</Link> creature template). A wearer with one of these abilities gains a +2 sacred bonus to AC against attacks from the chosen opponent.</p>
<h3 id="magic-enh-champion-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/protection_from_evil">protection from evil</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _cocooning = {title: "Cocooning", jsx: <><h2 id="magic-enh-cocooning-cocooning">Cocooning</h2>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 46</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 9th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Cocooning armor protects the wearer against planar hazards when she is defenseless, enveloping her in a thin, protective membrane. If the wearer falls unconscious on a plane other than her native plane, the armor grants her immunity to the harmful environmental effects of that plane, including toxicity, extreme temperatures, negative energy, and lack of air. This immunity lasts for as long as she remains unconscious.</p>
<h3 id="magic-enh-cocooning-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/planar_adaptation">planar adaptation</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _crusading = {title: "Crusading", jsx: <><h2 id="magic-enh-crusading-crusading">Crusading</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 28</Link><br/><strong>Aura</strong> faint abjuration; <strong>CL</strong> 5th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Armor with this enhancement is specially designed for the holy warriors of <Link to="/faith/iomedae">Iomedae</Link>. As a swift action, a <Link to="/class/paladin">paladin</Link> or good <Link to="/class/warpriest">warpriest</Link> wearing this armor can expend one use of the <Link to="/ability/lay_on_hands">lay on hands</Link> or <Link to="/class/fervor">fervor</Link> ability to activate the armor's protective aura for 1 minute. This protective aura grants the wearer a +2 sacred bonus to AC. This bonus increases to +3 against evil dragons, evil outsiders, and undead.</p>
<h3 id="magic-enh-crusading-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/protection_from_evil">protection from evil</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _dastard = {title: "Dastard", jsx: <><h2 id="magic-enh-dastard-dastard">Dastard</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 116</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 283</Link><br/><strong>Aura</strong> faint abjuration; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This armor special ability works only for evil creatures with the challenge ability (such as <Link to="/class/cavalier">cavaliers</Link>) or the smite good ability (such as <Link to="/class/antipaladin">antipaladins</Link>, <Link to="/template/half_fiend">half-fiends</Link>, and creatures with the <Link to="/template/fiendish">fiendish</Link> creature template). A wearer with one of these abilities gains a +2 profane bonus to AC against attacks from the chosen opponent.</p>
<h3 id="magic-enh-dastard-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/protection_from_good">protection from good</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _deathless = {title: "Deathless", jsx: <><h2 id="magic-enh-deathless-deathless">Deathless</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 116</Link><br/><strong>Aura</strong> moderate abjuration; <strong>CL</strong> 7th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This armor protects its wearer from harmful negative and positive energy, including <Link to="/ability/channel_energy">channeled energy</Link>. The armor absorbs the first 10 points of positive or negative energy damage per attack that the wearer would normally take. The wearer has a 25% chance to ignore <Link to="/rule/negative_levels">negative levels</Link> from any attack. Deathless armor does not block healing of any kind and does not protect against positive or negative energy effects that do not deal damage or bestow negative levels. The deathless ability can be applied to armor of any sort, but not shields.</p>
<h3 id="magic-enh-deathless-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/death_ward">death ward</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _defiant = {title: "Defiant (armor, shield)", jsx: <><h2 id="magic-enh-defiant-defiant">Defiant</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 116</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 8th<br/><strong>Slot</strong> armor/shield quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Armor and shields with this special ability excel at blocking the attacks of certain types of creatures, similar to a <Link to="/magic-enh/bane">bane</Link> weapon's excelling against certain foes. Against the designated foe, the item's enhancement bonus to AC is +2 better than its actual bonus and provides DR 2/- against attacks from that foe. This increase in enhancement bonus applies only to the armor or shield's enhancement bonus, not to temporary bonuses (such as the <Link to="/spell/magic_vestment">magic vestment</Link> spell). To randomly determine the armor or shield's designated foe, use the table for the <em>bane</em> weapon special ability.</p>
<h3 id="magic-enh-defiant-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/summon_monster_i">summon monster I</Link>; <strong>Price</strong> +1 bonus</p>
<blockquote>
<p><em>See also: <Link to="/magic-enh/defiant_weapon">defiant weapon enhancement</Link></em></p>
</blockquote>
</>};
const _evolving = {title: "Evolving", jsx: <><h2 id="magic-enh-evolving-evolving">Evolving</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 26</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 7th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Armor with this special ability often has revolting fleshy protrusions that periodically quiver and twitch. Once per day on command, the armor fuses with the flesh of the wearer for 30 minutes or until <Link to="/misc/dismiss">dismissed</Link>. The armor doesn't grant any armor bonus to AC during this time, though the wearer still gains any of the armor's magic abilities. While fused with the armor, the wearer can manifest two of the following evolutions from the summoner list of eidolon evolutions: <Link to="/evolution/gills">gills</Link>, <Link to="/evolution/improved_natural_armor">improved natural armor</Link>, <Link to="/evolution/resistance">resistance</Link>, <Link to="/evolution/scent">scent</Link>, <Link to="/evolution/slam">slam</Link>, and <Link to="/evolution/swim">swim</Link>. The wearer can't wear another suit of armor while fused with evolving armor.</p>
<h3 id="magic-enh-evolving-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/evolution_surge">evolution surge</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _fortification = {title: "Fortification", jsx: <><h2 id="magic-enh-fortification-fortification">Fortification</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 118</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> strong abjuration; <strong>CL</strong> 13th<br/><strong>Slot</strong> armor/shield quality; <strong>Price</strong> light (+1 bonus), moderate (+3 bonus), heavy (+5 bonus); <strong>Weight</strong> -</p>
<p>This suit of armor or shield produces a magical force that protects vital areas of the wearer more effectively. When a critical hit or <Link to="/ability/sneak_attack">sneak attack</Link> is scored on the wearer, there is a chance that the critical hit or sneak attack is negated and damage is instead rolled normally. The chance is 25% for light fortification, 50% for moderate fortification, and 75% for heavy fortification.</p>
<h3 id="magic-enh-fortification-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/limited_wish">limited wish</Link> or <Link to="/spell/miracle">miracle</Link>; <strong>Price</strong> varies</p>
</>};
const _grinding = {title: "Grinding", jsx: <><h2 id="magic-enh-grinding-grinding">Grinding</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 119</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor/shield quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A shield or suit of armor with this special ability is covered with jagged burrs and razor-sharp serrations that saw and grind whenever the wearer is <Link to="/rule/grappled">grappled</Link> or <Link to="/rule/entangled">entangled</Link>. Any creature succeeding at a <Link to="/rule/grapple">grapple</Link> combat maneuver check against the wearer takes damage equal to the armor or shield's enhancement bonus (with each successful check) as the barbs and blades bite into it. This special ability counts as <Link to="/eq-armorenh/armor_spikes">armor spikes</Link> for the purpose of making attacks on the wearer's turn.</p>
<h3 id="magic-enh-grinding-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/keen_edge">keen edge</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _impervious_armor = {title: "Impervious (armor, shield)", jsx: <><h2 id="magic-enh-impervious_armor-impervious">Impervious</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 119</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 7th<br/><strong>Slot</strong> armor/shield quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A shield or suit of armor with this special ability is especially hardy. It gains double its enhancement bonus to hardness and hit points (instead of just the enhancement bonus), its break DC increases by double its enhancement bonus, and it gains a bonus on saving throws against direct attacks (such as a <Link to="/monster/rust_monster">rust monster's</Link> rust ability) equal to its enhancement bonus.</p>
<h3 id="magic-enh-impervious_armor-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/fabricate">fabricate</Link>, <Link to="/spell/make_whole">make whole</Link>; <strong>Price</strong> +1 bonus</p>
<blockquote>
<p><em>See also: <Link to="/magic-enh/impervious_weapon">impervious weapon enhancement</Link></em></p>
</blockquote>
</>};
const _mirrored = {title: "Mirrored", jsx: <><h2 id="magic-enh-mirrored-mirrored">Mirrored</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 120</Link><br/><strong>Aura</strong> moderate abjuration; <strong>CL</strong> 8th<br/><strong>Slot</strong> armor/shield quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>The polished surface of a mirrored shield or armor gleams and shines, and can be used as an ordinary mirror. Furthermore, it aids in battling creatures with <Link to="/umr/gaze">gaze</Link> attacks. If the wearer averts his eyes, he can roll the miss chance twice, selecting the better result. The wearer can deal <Link to="/ability/sneak_attack">sneak attack</Link> or other <Link to="/misc/precision_damage">precision-based damage</Link> to the target even though it has <Link to="/rule/concealment">concealment</Link> against him. This provides no benefit if the wearer closes his eyes, wears a blindfold, or otherwise can't see the target at all. The mirrored armor or shield also adds its enhancement bonus to the wearer's touch AC against rays. it. This special ability may only be added to metallic armor or shields.</p>
<h3 id="magic-enh-mirrored-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/spell_turning">spell turning</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _poisoning = {title: "Poisoning", jsx: <><h2 id="magic-enh-poisoning-poisoning">Poisoning</h2>
<p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 27</Link><br/><strong>Aura</strong> moderate necromancy; <strong>CL</strong> 7th<br/><strong>Slot</strong> armor; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A suit of armor with this ability becomes poisonous to the touch. The user must slip a vial of 1 dose of the injury or ingested poison to be used into a hidden slot along the armor's inner thigh. Three rounds afterward, the entire suit of armor becomes infused with the poison; any creature that <Link to="/rule/grapple">grapples</Link> with the wearer (if an injury poison is used) or that successfully hits the wearer with a bite attack (if an ingested poison is used) is immediately exposed to the poison and must save accordingly. Whether or not the victim successfully saves, the poison is discharged from the armor and the wearer must load a new vial into the armor to recharge this ability.</p>
<h3 id="magic-enh-poisoning-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/poison">poison</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _resonating = {title: "Resonating", jsx: <><h2 id="magic-enh-resonating-resonating">Resonating</h2>
<p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 142</Link><br/><strong>Aura</strong> moderate abjuration; <strong>CL</strong> 7th<br/><strong>Slot</strong> armor; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Three times per day, when the wearer expends at least one use of mythic power on his turn, this armor surges with sympathetic power. Its enhancement bonus increases by 2, and any damage reduction the wearer has increases by 5. This lasts for a number of rounds equal to the wearer's tier, and doesn't stack with itself.</p>
<h3 id="magic-enh-resonating-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/feat/mythic_crafter">Mythic Crafter</Link>, <Link to="/rule/marshal_2">lend power</Link> ability; <strong>Price</strong> +1 bonus</p>
</>};
const _spell_storing_armor = {title: "Spell Storing (armor)", jsx: <><h2 id="magic-enh-spell_storing_armor-spell-storing">Spell Storing</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 122</Link><br/><strong>Aura</strong> strong evocation; <strong>CL</strong> 12th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This armor allows a spellcaster to store a single touch spell of up to 3rd level in it. Anytime a creature hits the wearer with a melee attack or melee touch attack, the armor can cast the spell on that creature as an immediate action if the wearer desires. Once the spell has been cast from the armor, a spellcaster can cast any other targeted touch spell of up to 3rd level into it. The armor magically imparts to the wielder the name of the spell currently stored within it. A randomly rolled suit of spell storing armor has a 50% chance to have a spell stored in it already. Spell storing armor emits a strong aura of the evocation school, plus the aura of the stored spell.</p>
<h3 id="magic-enh-spell_storing_armor-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, creator must be a caster of at least 12th level; <strong>Price</strong> +1 bonus</p>
<blockquote>
<p><em>See also: <Link to="/magic-enh/spell_storing_weapon">spell storing weapon enhancement</Link></em></p>
</blockquote>
</>};
const _spellsink = {title: "Spellsink", jsx: <><h2 id="magic-enh-spellsink-spellsink">Spellsink</h2>
<p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox pg. 24</Link><br/><strong>Aura</strong> moderate abjuration; <strong>CL</strong> 6th<br/><strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A suit of armor or a shield with this ability can absorb and neutralize magical effects, albeit on a limited basis. Once per day as an immediate action, the bearer can command the armor or shield to absorb a spell, spell-like ability, or magical ability created by a magic item that specifically targets only her. It cannot absorb spells, spell-like abilities, or item effects that target an area or multiple targets. The attacker creating the magical effect to be absorbed must succeed at a DC 14 Will saving throw or the shield or armor absorbs and neutralizes the effect.</p>
<h3 id="magic-enh-spellsink-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/dispel_magic">dispel magic</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _stanching = {title: "Stanching", jsx: <><h2 id="magic-enh-stanching-stanching">Stanching</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 122</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 7th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A stanching suit of armor helps stop the flow of blood from the wearer's wounds, automatically tightening like a tourniquet in the appropriate places while also magically reducing the severity of the wound. Stanching armor reduces hit point damage, <Link to="/rule/ability_damage">ability damage, or ability drain</Link> by an amount equal to its enhancement bonus if the damage or drain was from a <Link to="/rule/bleed">bleed</Link> effect. The wearer also adds the armor's enhancement bonus to Constitution checks to become <Link to="/misc/stable">stable</Link>.</p>
<h3 id="magic-enh-stanching-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/stabilize">stabilize</Link>, <Link to="/spell/cure_critical_wounds">cure critical wounds</Link> or <Link to="/spell/lesser_restoration">lesser restoration</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _terrain_striding = {title: "Terrain-Striding", jsx: <><h2 id="magic-enh-terrain_striding-terrain-striding">Terrain-Striding</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 27</Link><br/><strong>Aura</strong> strong enchantment; <strong>CL</strong> 13th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Armor with the terrain-striding special ability is attuned to a specific terrain when the armor is created, selected from rangers' <Link to="/ability/favored_terrain">favored terrains</Link>. The wearer of armor gains a 10-foot enhancement bonus to her speed while in the associated terrain, and the armor's armor check penalty does not apply to Acrobatics, Climb, and Stealth checks attempted in that terrain. The terrain-striding special ability can be applied only to medium armor.</p>
<h3 id="magic-enh-terrain_striding-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/resistance">resistance</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _trapwarding = {title: "Trapwarding", jsx: <><h2 id="magic-enh-trapwarding-trapwarding">Trapwarding</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_society_field_guide">Pathfinder Society Field Guide pg. 50</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A suit of trapwarding armor helps to protect the wearer against all manner of traps. The wearer of a suit of trapwarding armor gains a luck bonus on all saving throws against traps equal to the armor's enhancement bonus.</p>
<h3 id="magic-enh-trapwarding-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/find_traps">find traps</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _vouchsafing = {title: "Vouchsafing", jsx: <><h2 id="magic-enh-vouchsafing-vouchsafing">Vouchsafing</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 210</Link><br/><strong>Aura</strong> moderate abjuration; <strong>CL</strong> 9th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Vouchsafing armor grants its wearer DR 5/- while she is <Link to="/misc/unconscious">unconscious</Link>, <Link to="/misc/nauseated">nauseated</Link>, <Link to="/misc/stunned">stunned</Link>, or <Link to="/rule/pinned">pinned</Link>. This DR stacks with any other DR the wearer already has. If the wearer is somehow able to take standard actions while unconscious, nauseated, or stunned, or is able to make attacks while pinned, the armor does not grant its DR.</p>
<h3 id="magic-enh-vouchsafing-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/stoneskin">stoneskin</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _warding = {title: "Warding", jsx: <><h2 id="magic-enh-warding-warding">Warding</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 123</Link><br/><strong>Aura</strong> strong abjuration; <strong>CL</strong> 12th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Once per day as an immediate action, the wearer of warding armor can activate it to end all active challenge, judgment, and smite abilities affecting her. This does not prevent opponents from selecting her as a target for these abilities in the future. As a swift action, the wearer can expend one of her own challenge, judgment, or smite abilities to refresh the armor's ability to end these attacks.</p>
<h3 id="magic-enh-warding-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/atonement">atonement</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _withstanding = {title: "Withstanding", jsx: <><h2 id="magic-enh-withstanding-withstanding">Withstanding</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 27</Link><br/><strong>Aura</strong> moderate enchantment; <strong>CL</strong> 10th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A suit of withstanding armor is inscribed with eldritch runes across its surface and decorated with the snarling countenances of specific creatures. Each suit of withstanding armor is tailored to a specific type of creature, chosen from the same list as the options for <Link to="/magic-enh/bane">bane</Link> weapons. The wearer of this armor gains a +2 enhancement bonus on Knowledge checks related to the chosen type of creature, and when the wearer is struck by a <Link to="/ability/sneak_attack">sneak attack</Link> or a confirmed critical hit by creatures of the chosen type, there is a 50% chance that the critical hit or sneak attack is negated and damage is instead rolled normally. This does not stack with any other form of critical hit negation, such as that imposed by the <Link to="/magic-enh/fortification">fortification</Link> special ability. Only medium armor can be enchanted with the withstanding special ability.</p>
<h3 id="magic-enh-withstanding-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/crushing_despair">crushing despair</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _bouyant = {title: "Buoyant", jsx: <><h2 id="magic-enh-bouyant-buoyant">Buoyant</h2>
<p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 9</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor; <strong>Price</strong> light armor (+1,000 gp), shield (+1,000 gp), medium/heavy armor (+2,000 gp); <strong>Weight</strong> -</p>
<p>Buoyant armor and shields bestow no armor check penalty on Swim checks attempted by the wearer. All other armor check penalties apply as normal.</p>
<h3 id="magic-enh-bouyant-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/water_walk">water walk</Link>; <strong>Price</strong> 500 gp (light armor or shield), 1,000 gp (medium or heavy armor)</p>
</>};
const _cushioned = {title: "Cushioned", jsx: <><h2 id="magic-enh-cushioned-cushioned">Cushioned</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 24</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 1st<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +1,000 gp; <strong>Weight</strong> -</p>
<p>Armor with this special ability reduces the damage its wearer takes from falling as if the distance were 20 feet less. The cushioned special ability can be applied only to armor made primarily from cloth and padding, such as <Link to="/eq-armor/padded">padded</Link>, <Link to="/eq-armor/quilted_cloth">quilted cloth</Link>, and <Link to="/eq-armor/silken_ceremonial">silken ceremonial</Link> armor.</p>
<h3 id="magic-enh-cushioned-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/feather_fall">feather fall</Link>; <strong>Price</strong> 500 gp</p>
</>};
const _fitting = {title: "Fitting", jsx: <><h2 id="magic-enh-fitting-fitting">Fitting</h2>
<p><strong>Sources</strong> <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook pg. 33</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> none; <strong>Price</strong> +2,000 gp; <strong>Weight</strong> -</p>
<p>A fitting shield or suit of armor instantly shrinks or grows to suit the size of any creature that picks it up unless it is currently worn by another creature. It reverts to its original size 1 round after it leaves that creature's possession.</p>
<h3 id="magic-enh-fitting-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/resize_item">resize item</Link>; <strong>Price</strong> 1,000 gp</p>
</>};
const _poison_resistant = {title: "Poison-Resistant", jsx: <><h2 id="magic-enh-poison_resistant-poison-resistant">Poison-Resistant</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 121</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 7th<br/><strong>Slot</strong> armor/shield quality; <strong>Price</strong> +2,250 gp; <strong>Weight</strong> -</p>
<p>A suit of armor or shield with this special ability grants the wearer a +3 resistance bonus on saving throws against poison.</p>
<h3 id="magic-enh-poison_resistant-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/neutralize_poison">neutralize poison</Link>; <strong>Price</strong> +1,125 gp</p>
</>};
const _glamered = {title: "Glamered (armor)", jsx: <><h2 id="magic-enh-glamered-glamered">Glamered</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 119</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> moderate illusion; <strong>CL</strong> 10th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +2,700 gp; <strong>Weight</strong> -</p>
<p>Upon command, a suit of glamered armor changes shape and appearance to assume the form of a normal set of clothing. The armor retains all its properties (including weight) when it is so disguised. Only a <Link to="/spell/true_seeing">true seeing</Link> spell or similar magic reveals the true nature of the armor when it is disguised.</p>
<h3 id="magic-enh-glamered-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/disguise_self">disguise self</Link>; <strong>Price</strong> +1,350 gp</p>
<blockquote>
<p><em>See also: <Link to="/magic-enh/glamered_weapon">glamered weapon enhancement</Link></em></p>
</blockquote>
</>};
const _mental_focus = {title: "Mental Focus", jsx: <><h2 id="magic-enh-mental_focus-mental-focus">Mental Focus</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 26</Link><br/><strong>Aura</strong> evocation; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +3,000 gp; <strong>Weight</strong> -</p>
<p>Armor enhanced with the mental focus special ability grants its wearer a +2 enhancement bonus on <Link to="/rule/concentration">concentration</Link> checks. If the wearer has the mental focus <Link to="/class/occultist">occultist</Link> class feature, once per day he can also spend 1 hour attuning himself to the armor to gain 1 additional point of mental focus. This point of mental focus is lost if the armor is removed. The mental focus special ability can be applied only to medium armor.</p>
<h3 id="magic-enh-mental_focus-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/talismanic_implement">talismanic implement</Link>; <strong>Price</strong> 1,500 gp</p>
</>};
const _aquadynamic = {title: "Aquadynamic", jsx: <><h2 id="magic-enh-aquadynamic-aquadynamic">Aquadynamic</h2>
<p><strong>Sources</strong> <Link to="/source/aquatic_adventures">Aquatic Adventures pg. 62</Link><br/><strong>Aura</strong> varies; <strong>CL</strong> 5th<br/><strong>Slot</strong> none; <strong>Price</strong> (+3,750 gp), Improved (+15,000 gp), Greater (+33,750 gp); <strong>Weight</strong> -</p>
<p>This sleek and mobile armor is magically streamlined to assist in swimming rather than making swimming more difficult, granting the wearer a +5 competence bonus on <Link to="/skill/swim">Swim</Link> checks for aquadynamic armor, a +10 competence bonus on Swim checks for improved aquadynamic armor, and a +15 competence bonus on Swim checks for greater aquadynamic armor.</p>
<h3 id="magic-enh-aquadynamic-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/freedom_of_movement">freedom of movement</Link>; <strong>Price</strong> 1,875 gp (aquadynamic), 7,500 gp (improved aquadynamic), 16,875 gp (greater aquadynamic)</p>
</>};
const _jousting = {title: "Jousting", jsx: <><h2 id="magic-enh-jousting-jousting">Jousting</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 120</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 283</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +3,750 gp; <strong>Weight</strong> -</p>
<p>This suit of armor helps its wearer remain mounted and in control of his mount. The wearer gains a +5 competence bonus on <Link to="/skill/ride">Ride</Link> skill checks.</p>
<h3 id="magic-enh-jousting-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, creator must have 5 ranks in Ride; <strong>Price</strong> +1,875 gp</p>
</>};
const _shadow = {title: "Shadow", jsx: <><h2 id="magic-enh-shadow-shadow">Shadow</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 121</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> faint illusion; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +3,750 gp; <strong>Weight</strong> -</p>
<p>This armor blurs the wearer whenever she tries to hide, while also dampening the sound around her, granting a +5 competence bonus on Stealth checks. The armor's armor check penalty still applies normally.</p>
<h3 id="magic-enh-shadow-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/invisibility">invisibility</Link>, <Link to="/spell/silence">silence</Link>; <strong>Price</strong> +1,875 gp</p>
</>};
const _slick = {title: "Slick", jsx: <><h2 id="magic-enh-slick-slick">Slick</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 122</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> faint conjuration; <strong>CL</strong> 4th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +3,750 gp; <strong>Weight</strong> -</p>
<p>Slick armor seems coated at all times with a slightly greasy oil. It provides a +5 competence bonus on its wearer's Escape Artist checks. The armor's armor check penalty still applies normally.</p>
<h3 id="magic-enh-slick-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/grease">grease</Link>; <strong>Price</strong> +1,875 gp</p>
</>};
const _adamant = {title: "Adamant", jsx: <><h2 id="magic-enh-adamant-adamant">Adamant</h2>
<p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox pg. 24</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 9th<br/><strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>Once per day as a swift action, the wearer can harden armor possessing this special ability to the strength of <Link to="/eq-material/adamantine">adamantine</Link>, giving it DR 3/- for 9 rounds. The adamant special ability can be placed on only heavy armor.</p>
<h3 id="magic-enh-adamant-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/mage_armor">mage armor</Link>, <Link to="/spell/major_creation">major creation</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _bloodthirsty = {title: "Bloodthirsty", jsx: <><h2 id="magic-enh-bloodthirsty-bloodthirsty">Bloodthirsty</h2>
<p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil pg. 26</Link><br/><strong>Aura</strong> moderate enchantment; <strong>CL</strong> 7th<br/><strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>Jagged designs of lightning, fangs, or weaponry adorn any bloodthirsty armor, which bolsters its wearer's confidence and presence with each wound the wearer inflicts. Only light or medium armor can be enchanted with the bloodthirsty special ability. Such a set of armor promotes wanton bloodshed, as its enhancement bonus to AC increases by 1 for 1 round after its wearer deals damage with a natural attack or melee weapon. If the wearer of a suit of bloodthirsty armor is raging, the armor's enhancement bonus increases by 3 instead.</p>
<h3 id="magic-enh-bloodthirsty-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/rage">rage</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _frosted = {title: "Frosted", jsx: <><h2 id="magic-enh-frosted-frosted">Frosted</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 26</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 3rd<br/><strong>Slot</strong> none; <strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>Armor and shields with the frosted ability are coated in a thin layer of frost, making the armor or shield shimmer faintly and take on a bluish-white hue. The wearer gains a +4 bonus to CMD against <Link to="/rule/grapple">grapple</Link> combat maneuvers. Additionally, the armor deals 1d8 points of cold damage every round to opponents that <Link to="/umr/constrict">constrict</Link> or <Link to="/rule/pin">pin</Link> the wearer or <Link to="/umr/swallow_whole">swallow the wearer whole</Link>.</p>
<h3 id="magic-enh-frosted-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/chill_metal">chill metal</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _ghost_spike = {title: "Ghost Spike", jsx: <><h2 id="magic-enh-ghost_spike-ghost-spike">Ghost Spike</h2>
<p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox pg. 24</Link><br/><strong>Aura</strong> moderate evocation; <strong>CL</strong> 10th<br/><strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>Once per day as a standard action, the wearer of ghost spike armor can command armor spikes made of shimmering force to erupt from the armor for up to 10 rounds. Treat these spikes as +1 <Link to="/magic-enh/ghost_touch_a">ghost touch</Link> <Link to="/eq-armorenh/armor_spikes">armor spikes</Link> with which the wearer is proficient. While the spikes are active, the wearer can attempt to grapple incorporeal creatures with a -4 penalty on his combat maneuver checks to <Link to="/rule/grapple">grapple</Link>. The wearer can dismiss the spikes as a free action. The ghost spike ability cannot be placed on spiked armor or on a shield.</p>
<h3 id="magic-enh-ghost_spike-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/spiritual_weapon">spiritual weapon</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _jarring = {title: "Jarring", jsx: <><h2 id="magic-enh-jarring-jarring">Jarring</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 210</Link><br/><strong>Aura</strong> moderate evocation; <strong>CL</strong> 6th<br/><strong>Slot</strong> none; <strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>A shield or set of armor with this ability causes unpleasant resonant vibrations in weapons that strike its wearer. As an immediate action up to three times per day, when the wearer is hit by a melee attack made with a weapon, he can activate the armor or shield to send jarring vibrations back through the weapon. The attacker must succeed at a DC 16 Fortitude saving throw or become <Link to="/misc/dazed">dazed</Link> for 1 round.</p>
<h3 id="magic-enh-jarring-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/shatter">shatter</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _mind_buttressing = {title: "Mind Buttressing", jsx: <><h2 id="magic-enh-mind_buttressing-mind-buttressing">Mind Buttressing</h2>
<p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 7</Link><br/><strong>Aura</strong> faint abjuration; <strong>CL</strong> 12th<br/><strong>Slot</strong> armor; <strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>Mind buttressing armor grants the wearer a +2 resistance bonus on Will saves and renders her immune to possession and mental control (including charm and compulsion effects like <Link to="/spell/command">command</Link> and <Link to="/spell/charm_person">charm person</Link>). If it's donned by a creature already under the influence of such an effect, the creature immediately receives another saving throw (if one was allowed to begin with) against the spell or effect. If the check is successful, the effects are suppressed until the creature removes the armor, after which they resume. This ability can be applied only to medium or heavy armor.</p>
<h3 id="magic-enh-mind_buttressing-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/protection_from_chaos_evil_good_law">protection from chaos/evil/good/law</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _phantasmal = {title: "Phantasmal", jsx: <><h2 id="magic-enh-phantasmal-phantasmal">Phantasmal</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 24</Link><br/><strong>Aura</strong> moderate illusion; <strong>CL</strong> 7th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>Three times per day, the wearer of a suit of phantasmal armor can leave an illusory afterimage of herself in a square she occupied as part of a move action. This double is created through illusion magic from the <Link to="/spelldef/shadow_subschool">shadow subschool</Link> and is partly real. The illusory double cannot move from its designated square but otherwise reacts and maneuvers as directed by the wearer of a suit of phantasmal armor. The double cannot attack, but it can menace opponents and distract them, and thus counts as an ally for the purpose of determining <Link to="/rule/flanking">flanking</Link>. The illusory double has an AC equal to 12 + the enhancement bonus of the phantasmal armor. A successful melee or ranged attack against the illusory double (or any damage from an area effect attack) dismisses the effect. The phantasmal special ability can be applied only to light armor.</p>
<h3 id="magic-enh-phantasmal-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/shadow_projection">shadow projection</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _rampaging = {title: "Rampaging", jsx: <><h2 id="magic-enh-rampaging-rampaging">Rampaging</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 28</Link><br/><strong>Aura</strong> faint conjuration and transmutation; <strong>CL</strong> 3rd<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>When the wearer of a suit of rampaging armor <Link to="/rule/charge">charges</Link> or attempts a <Link to="/rule/bull_rush">bull rush</Link> combat maneuver check, he can ignore <Link to="/rule/difficult_terrain">difficult terrain</Link>. Once per day as a swift action, when the wearer of a suit of rampaging armor charges or performs a bull rush combat maneuver, he can turn each square he moves through into difficult terrain as he demolishes everything in his path. This change of terrain remains for 1 minute. The rampaging special ability can be applied only to heavy armor.</p>
<h3 id="magic-enh-rampaging-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/feather_step">feather step</Link>, <Link to="/spell/stone_call">stone call</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _shadow_blending = {title: "Shadow Blending", jsx: <><h2 id="magic-enh-shadow_blending-shadow-blending">Shadow Blending</h2>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 46</Link><br/><strong>Aura</strong> moderate illusion; <strong>CL</strong> 11th<br/><strong>Slot</strong> none; <strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>Shadow blending armor is drab and mutes any colors in its wearer's attire into dull grays. Attacks against the wearer in <Link to="/rule/dim_light">dim light</Link> have a 40% miss chance instead of the normal 20%. This ability does not grant <Link to="/rule/concealment">total concealment</Link>; it only increases the miss chance. If the armor also has the <Link to="/magic-enh/shadow">shadow</Link>, <Link to="/magic-enh/improved_shadow">improved shadow</Link>, or <Link to="/magic-enh/greater_shadow">greater shadow</Link> armor special ability, the miss chance increases to 50%.</p>
<h3 id="magic-enh-shadow_blending-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/shadow_walk">shadow walk</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _spell_dodging = {title: "Spell Dodging", jsx: <><h2 id="magic-enh-spell_dodging-spell-dodging">Spell Dodging</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 210</Link><br/><strong>Aura</strong> faint abjuration; <strong>CL</strong> 4th<br/><strong>Slot</strong> none; <strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>A suit of spell dodging armor makes it more difficult for attacks from spells and spell-like abilities to hit its wearer, often physically pulling and pushing its wearer out of the way of incoming magical attacks. The wearer gains a +4 dodge bonus to AC against attack rolls from spells and spell-like abilities (including touch attacks) and the attacks of summoned creatures.</p>
<h3 id="magic-enh-spell_dodging-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/mage_armor">mage armor</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _spell_resistance = {title: "Spell Resistance", jsx: <><h2 id="magic-enh-spell_resistance-spell-resistance">Spell Resistance</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 122</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> strong abjuration; <strong>CL</strong> 15th<br/><strong>Slot</strong> armor/shield quality; <strong>Price</strong> 13 (+2 bonus), 15 (+3 bonus), 17 (+4 bonus), 19 (+5 bonus); <strong>Weight</strong> -</p>
<p>This special ability grants the armor or shield's wearer spell resistance while the armor or shield is worn.</p>
<h3 id="magic-enh-spell_resistance-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/spell_resistance">spell resistance</Link>; <strong>Price</strong> varies</p>
</>};
const _steaming = {title: "Steaming", jsx: <><h2 id="magic-enh-steaming-steaming">Steaming</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 57</Link><br/><strong>Aura</strong> faint evocation; <strong>CL</strong> 3rd<br/><strong>Slot</strong> none; <strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>A suit of steaming armor features numerous sliding plates and movable pieces to aid in ventilation. Three times per day, the wearer of steaming armor can speak a command word that causes the armor to emit a cloud of scorching steam. The steam lasts for 5 rounds or until the wearer dismisses it by speaking a second command word.</p>
<p>When the wearer speaks the command word and at the start of the wearer's turn during subsequent rounds, the steam deals 1d6 points of fire damage to any creature <Link to="/rule/grappling">grappling</Link> the wearer or occupying the wearer's square (though not to the wearer) and 1 point of damage to any creature within a 5-foot-radius <Link to="/misc/burst">burst</Link> of the wearer (except for those that have already taken damage because they are grappling the wearer). While the steaming ability is active, a creature that is within 5 feet of the wearer that makes a melee attack or attempts a combat maneuver against the wearer must succeed at a DC 14 Reflex saving throw or take 1d6 points of fire damage.</p>
<p>The steaming armor special ability can be applied only to medium and heavy armors.</p>
<h3 id="magic-enh-steaming-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/elemental_aura">elemental aura</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _volcanic = {title: "Volcanic", jsx: <><h2 id="magic-enh-volcanic-volcanic">Volcanic</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 26</Link><br/><strong>Aura</strong> strong evocation; <strong>CL</strong> 14th<br/><strong>Slot</strong> none; <strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>This special ability can be placed only on heavy armor. Volcanic armor is often stony in appearance and gives off a soft red glow. Once per day, the wearer can command the armor to erupt, causing a cloud of smoke and hot molten liquid to shoot forth from the armor in a 5-foot radius centered on the wearer. The smoke provides <Link to="/rule/concealment">concealment</Link>, and the liquid deals 1d6 points of fire damage and ignites flammable substances. One round after the armor erupts, the smoke clears and the liquid cools and solidifies, creating <Link to="/rule/difficult_terrain">difficult terrain</Link>. The wearer of this armor isn't affected by the smoke, fire damage, or difficult terrain created by this armor.</p>
<h3 id="magic-enh-volcanic-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/incendiary_cloud">incendiary cloud</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _burdenless = {title: "Burdenless", jsx: <><h2 id="magic-enh-burdenless-burdenless">Burdenless</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 209</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> none; <strong>Price</strong> +4,000 gp; <strong>Weight</strong> -</p>
<p>Burdenless armor distributes the weight of the wearer's load more efficiently, allowing her to carry more without suffering the effects of encumbrance. The wearer's <Link to="/rule/carrying_capacity">carrying capacity</Link> is increased by 50% across each load (light, medium and heavy).</p>
<h3 id="magic-enh-burdenless-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/effortless_armor">effortless armor</Link>; <strong>Price</strong> 2,000 gp</p>
</>};
const _expeditious = {title: "Expeditious", jsx: <><h2 id="magic-enh-expeditious-expeditious">Expeditious</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 118</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +4,000 gp; <strong>Weight</strong> -</p>
<p>Three times per day as a swift action, the wearer of expeditious armor can summon a burst of speed and gain a +10-foot enhancement bonus on all modes of movement for 1 round. This ability can be applied to any kind of armor, but not shields.</p>
<h3 id="magic-enh-expeditious-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/expeditious_retreat">expeditious retreat</Link>; <strong>Price</strong> +2,000 gp</p>
</>};
const _amorphous = {title: "Amorphous", jsx: <><h2 id="magic-enh-amorphous-amorphous">Amorphous</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 209</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 8th<br/><strong>Slot</strong> none; <strong>Price</strong> +4,500 gp; <strong>Weight</strong> -</p>
<p>Armor with this special ability grants its wearer a +5 competence bonus on Escape Artist checks and to CMD against <Link to="/rule/grapple">grapple</Link> combat maneuvers. Additionally, once per day on command, the wearer (along with any gear she is wearing) can take the form of viscous liquid that can pass through any space through which thick mud could reasonably flow. While using this ability, the wearer's speed is reduced by 10 feet, and she can take only move actions. The wearer can take this form for 1 minute or until she spends a move action to return to her normal form. Amorphous armor must be made primarily of leather, fabric, or another flexible, organic material.</p>
<h3 id="magic-enh-amorphous-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/fluid_form">fluid form</Link>; <strong>Price</strong> 2,250 gp</p>
</>};
const _restful = {title: "Restful", jsx: <><h2 id="magic-enh-restful-restful">Restful</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 210</Link><br/><strong>Aura</strong> faint necromancy; <strong>CL</strong> 5th<br/><strong>Slot</strong> none; <strong>Price</strong> +4,500 gp; <strong>Weight</strong> -</p>
<p>A suit of restful armor permits the wearer to reduce the amount of uninterrupted sleep or rest she needs from 8 hours to 2 hours, and the wearer does not become <Link to="/misc/fatigued">fatigued</Link> by sleeping in this armor. She <Link to="/rule/recover_hit_points">recovers hit points</Link> and ability damage and endures diseases, poisons, or other afflictions as if she had slept through the night in a comfortable bed, awakening refreshed. Additional rest time in this armor does not confer extra healing (as would be gained with complete bed rest), nor can the wearer benefit from the armor's effect more than once per day.</p>
<h3 id="magic-enh-restful-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/nap_stack">nap stack</Link>; <strong>Price</strong> 2,250 gp</p>
</>};
const _cloudburst = {title: "Cloudburst", jsx: <><h2 id="magic-enh-cloudburst-cloudburst">Cloudburst</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 160</Link><br/><strong>Aura</strong> faint abjuration and evocation; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +5,000 gp; <strong>Weight</strong> -</p>
<p>This armor is usually decorated with engravings of storm clouds and lightning bolts. If an attack strikes the wearer and deals at least 10 points of electricity damage, the armor becomes visibly charged with electricity for 1 round. As a swift action on the wearer's next turn that does not provoke an attack of opportunity, she may use <em>shocking grasp</em> as a spell-like ability, dealing 1d6 points of electricity damage for every 10 points of damage dealt to the wearer since her last turn (maximum 5d6 for 50 or more points of electrical damage taken). Determine the effect of the <em>shocking grasp</em> based on how much damage the triggering electrical attack would have dealt the wearer before any applicable resistances or immunities.</p>
<h3 id="magic-enh-cloudburst-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/resist_energy">resist energy</Link>, <Link to="/spell/shocking_grasp">shocking grasp</Link>; <strong>Price</strong> +5,000 gp</p>
</>};
const _comfort = {title: "Comfort", jsx: <><h2 id="magic-enh-comfort-comfort">Comfort</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_society_field_guide">Pathfinder Society Field Guide pg. 50</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +5,000 gp; <strong>Weight</strong> -</p>
<p>Armor of comfort sheds dirt and sweat as they accumulate, and remains as comfortable as weather-appropriate clothing regardless of environmental conditions. A suit of armor with this enhancement always looks immaculately clean, can be slept in as though it were light armor, and does not cause a penalty to the wearer's saving throws to resist the effects of extreme heat. In cold weather, it counts as cold-weather clothing. In addition, the armor's armor check penalty is reduced by 1 (to a minimum of 0).</p>
<h3 id="magic-enh-comfort-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/endure_elements">endure elements</Link>, <Link to="/spell/prestidigitation">prestidigitation</Link>; <strong>Price</strong> +2,500 gp</p>
</>};
const _corsair = {title: "Corsair", jsx: <><h2 id="magic-enh-corsair-corsair">Corsair</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 28</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> none; <strong>Price</strong> +5,000 gp; <strong>Weight</strong> -</p>
<p>Armor with this special ability is designed to enhance mobility in combat. The armor grants a +5 competence bonus on Acrobatics checks. Any time the wearer regains a grit or panache point, the armor's bonus on Acrobatics checks doubles until the beginning of her next turn.</p>
<h3 id="magic-enh-corsair-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/spell/cats_grace">cat's grace</Link>; <strong>Price</strong> 2,500 gp</p>
</>};
const _creeping = {title: "Creeping", jsx: <><h2 id="magic-enh-creeping-creeping">Creeping</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 116</Link><br/><strong>Aura</strong> moderate illusion and transmutation; <strong>CL</strong> 7th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +5,000 gp; <strong>Weight</strong> -</p>
<p>A suit of creeping armor is made to keep the wearer's movement covert. The armor's armor check penalty does not apply to the wearer's Stealth checks. Once per day, the wearer can speak a command word to grant himself a bonus on Stealth checks equal to the armor's enhancement bonus for 1 minute.</p>
<h3 id="magic-enh-creeping-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/cats_grace">cat's grace</Link>, <Link to="/spell/invisibility">invisibility</Link>; <strong>Price</strong> +2,500 gp</p>
</>};
const _deceiving = {title: "Deceiving", jsx: <><h2 id="magic-enh-deceiving-deceiving">Deceiving</h2>
<p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil pg. 26</Link><br/><strong>Aura</strong> moderate evocation; <strong>CL</strong> 7th<br/><strong>Price</strong> +5,000 gp; <strong>Weight</strong> -</p>
<p>A suit of armor with this special ability alters the perceived aura of the wearer for the purpose of divination spells that reveal auras (such as <Link to="/spell/detect_evil">detect evil</Link>) to an aura decided when the armor is enchanted. The wearer always radiates this alternate alignment aura while wearing a suit of deceiving armor, and cannot suppress this effect. The wearer does not count as having this modified alignment for effects other than detection, such as smite, access to class abilities, and spells that have alternative effects based on a target's alignment. If the wearer is struck by an attack or effect that is more effective against evil-aligned creatures (such as smite, <Link to="/spell/holy_word">holy word</Link>, etc.), the attacker perceives the strike as being far more effective than it actually is. However, with a successful DC 20 Sense Motive check, the attacker realizes something is amiss with the attack.</p>
<h3 id="magic-enh-deceiving-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/nondetection">nondetection</Link>, <Link to="/spell/unholy_blight">unholy blight</Link>; <strong>Price</strong> +2,500 gp</p>
</>};
const _malevolent = {title: "Malevolent", jsx: <><h2 id="magic-enh-malevolent-malevolent">Malevolent</h2>
<p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil pg. 26</Link><br/><strong>Aura</strong> moderate evocation; <strong>CL</strong> 7th<br/><strong>Price</strong> +5,000 gp; <strong>Weight</strong> -</p>
<p>Malevolent armor is usually decorated with motifs of conflict, such as enraged faces, clashing swords, and dueling outsiders. The wearer of a suit of malevolent armor applies a +2 competence bonus to all Bluff and Intimidate checks attempted during violent conflict. The wearer can also apply the enhancement bonus of the armor to attack rolls made against <Link to="/rule/flat_footed">flat-footed</Link> or <Link to="/rule/prone">prone</Link> enemies.</p>
<h3 id="magic-enh-malevolent-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/desecrate">desecrate</Link>, <Link to="/spell/doom">doom</Link>; <strong>Price</strong> +2,500 gp</p>
</>};
const _rallying = {title: "Rallying", jsx: <><h2 id="magic-enh-rallying-rallying">Rallying</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 121</Link><br/><strong>Aura</strong> faint abjuration; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor/shield quality; <strong>Price</strong> +5,000 gp; <strong>Weight</strong> -</p>
<p>This armor or shield is brightly polished, and its mirror-bright surface is magically endowed with the ability to bring comfort to the wearer's companions. Allies within 30 feet of the wearer gain a +4 morale bonus on saving throws against fear effects. If the wearer has an ability that grants a morale bonus on saving throws against fear (such as a <Link to="/class/paladin">paladin's</Link> aura of courage, a bard's <Link to="/performance/countersong">countersong</Link>, or a <Link to="/class/cavalier">cavalier's</Link> banner ability), the morale bonus increases to +6.</p>
<h3 id="magic-enh-rallying-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/remove_fear">remove fear</Link>; <strong>Price</strong> +2,500 gp</p>
</>};
const _spirit_bonded = {title: "Spirit-bonded", jsx: <><h2 id="magic-enh-spirit_bonded-spirit-bonded">Spirit-bonded</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 26</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 9th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +6,000 gp; <strong>Weight</strong> -</p>
<p>The wearer of armor with the spirit-bonded special ability gains a +1 bonus on saving throws to resist psychic spells and effects originating from incorporeal creatures. Additionally, if the wearer of the armor has the spirit bonus <Link to="/class/medium">medium</Link> class feature, his spirit bonus increases by 1. The spirit-bonded special ability can be applied only to medium armor.</p>
<h3 id="magic-enh-spirit_bonded-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/call_spirit">call spirit</Link>; <strong>Price</strong> 3,000 gp</p>
</>};
const _locksmith = {title: "Locksmith", jsx: <><h2 id="magic-enh-locksmith-locksmith">Locksmith</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 24</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 3rd<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +6,500 gp; <strong>Weight</strong> -</p>
<p>A suit of locksmith armor does not apply its armor check penalty to its wearer's Disable Device checks. At will, the wearer of locksmith armor can extend from her fingertips small, delicate wires that function as <Link to="/eq-misc/masterwork_thieves_tools">masterwork thieves' tools</Link>. There is no evidence of the existence of these tools when they're not in use, and a PC attempting a Spellcraft check to identify the properties of locksmith armor must exceed the normal DC by 15 or this property is not revealed (though the other functions of the armor are identified normally). Additionally, locksmith armor allows the wearer to transfer some or all of the armor's enhancement bonus to the wearer's Disable Device checks as an enhancement bonus. As a free action, the wearer chooses how to allocate the armor's enhancement bonus at the start of his turn, and the reduction to the armor's enhancement bonus and the bonus on Disable Device checks last until his next turn. The locksmith special ability can be applied only to light armor.</p>
<h3 id="magic-enh-locksmith-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/knock">knock</Link>; <strong>Price</strong> 3,250 gp</p>
</>};
const _adhesive = {title: "Adhesive", jsx: <><h2 id="magic-enh-adhesive-adhesive">Adhesive</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 114</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 10th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +7,000 gp; <strong>Weight</strong> -</p>
<p>On command, the hands and feet of this armor's wearer become incredibly sticky, granting her a climb speed of 20 feet. The stickiness grants the wearer a +2 enhancement bonus on combat maneuver checks made to <Link to="/rule/disarm">disarm</Link>, <Link to="/rule/grapple">grapple</Link>, <Link to="/rule/reposition">reposition</Link>, <Link to="/rule/steal">steal</Link>, or <Link to="/rule/trip">trip</Link> when the wearer is using a natural weapon or unarmed strike to attempt the maneuver. The wearer can gain these benefits for 10 rounds per day. These rounds need not be consecutive, but they must be spent in 1-round intervals. Ending the effect is a free action. Adhesive cannot be placed on armor with any version of the <Link to="/magic-enh/slick">slick</Link> special ability.</p>
<h3 id="magic-enh-adhesive-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/bulls_strength">bull's strength</Link>, <Link to="/spell/spider_climb">spider climb</Link>; <strong>Price</strong> +3,500 gp</p>
</>};
const _spiteful = {title: "Spiteful", jsx: <><h2 id="magic-enh-spiteful-spiteful">Spiteful</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 210</Link><br/><strong>Aura</strong> moderate enchantment; <strong>CL</strong> 7th<br/><strong>Slot</strong> none; <strong>Price</strong> +7,000 gp; <strong>Weight</strong> -</p>
<p>This armor's ability functions only if its wearer has the panache class feature. When a melee attack made by an enemy within the wearer's melee reach would reduce the wearer to fewer than 0 hit points, the wearer can spend 1 panache point as an immediate action. This allows her to make a single melee attack against the creature that reduced her to 0 hit points or fewer. This occurs prior to the wearer falling unconscious or dead.</p>
<h3 id="magic-enh-spiteful-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/haste">haste</Link>; <strong>Price</strong> 3,500 gp</p>
</>};
const _hosteling = {title: "Hosteling", jsx: <><h2 id="magic-enh-hosteling-hosteling">Hosteling</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 119</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 9th<br/><strong>Slot</strong> armor/shield quality; <strong>Price</strong> +7,500 gp; <strong>Weight</strong> -</p>
<p>A suit of armor or shield with this special ability hides living animals within its iconography to keep it safe. The wearer can speak a command word to magically store an animal to which he is bonded, such as an animal companion, a familiar, or mount. The stored animal appears as a symbol emblazoned upon the armor or shield, either one that mimics the appearance of the animal or that is more symbolic and abstract.</p>
<p>While stored, the animal is sleeping and provides the wearer no benefit (such as a familiar's skill bonus). The size of animal that can be stored depends on the type of armor or shield. A suit of light armor, medium armor, or a light shield or heavy shield can store one animal up to the wearer's size. A suit of heavy armor or a <Link to="/eq-armor/tower_shield">tower shield</Link> can store one animal up to one size category larger than the wearer. A second command word releases the stored animal from the hosteling armor or shield. A released animal immediately awakens, appears in a space adjacent to the wearer, and can take actions on the round it appears.</p>
<p>Because the stored animal is sleeping rather than in suspended animation (or even hibernating), it ages and gets hungry at the normal rate while stored. A hosteling armor or shield automatically releases a stored animal 24 hours after it was stored inside.</p>
<p>This armor special ability still works on bonded magical beasts that were once animals, but not outsiders, oozes, or other exotic companion creatures.</p>
<h3 id="magic-enh-hosteling-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/secret_chest">secret chest</Link>; <strong>Price</strong> +3,750 gp</p>
</>};
const _radiant = {title: "Radiant", jsx: <><h2 id="magic-enh-radiant-radiant">Radiant</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 121</Link><br/><strong>Aura</strong> moderate evocation; <strong>CL</strong> 6th<br/><strong>Slot</strong> armor/shield quality; <strong>Price</strong> +7,500 gp; <strong>Weight</strong> -</p>
<p>Armor and shields with the radiant special ability shine as brightly as a <Link to="/eq-misc/torch">torch</Link> when worn. This radiance can be suppressed or resumed on command. Designs usually feature bright colors and a brilliant sheen even when not illuminated. Once per day, the wearer can command the armor or shield to brighten to the strength of a <em>daylight</em> spell for 1 hour or until commanded to dim.</p>
<h3 id="magic-enh-radiant-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/daylight">daylight</Link>; <strong>Price</strong> +3,750 gp</p>
</>};
const _trackless = {title: "Trackless", jsx: <><h2 id="magic-enh-trackless-trackless">Trackless</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 210</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> none; <strong>Price</strong> +7,500 gp; <strong>Weight</strong> -</p>
<p>Trackless armor lightens the wearer's step and camouflages his appearance. Survival checks to track the wearer take a -5 penalty, and the wearer gains a +5 competence bonus on Stealth checks. Only <Link to="/eq-armor/leather_armor">leather armor</Link> or <Link to="/eq-armor/hide_armor">hide armor</Link> can be trackless.</p>
<h3 id="magic-enh-trackless-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/pass_without_trace">pass without trace</Link>; <strong>Price</strong> 3,750 gp</p>
</>};
const _arrow_collecting = {title: "Arrow-collecting", jsx: <><h2 id="magic-enh-arrow_collecting-arrow-collecting">Arrow-collecting</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 26</Link><br/><strong>Aura</strong> moderate abjuration and evocation; <strong>CL</strong> 11th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +3 bonus; <strong>Weight</strong> -</p>
<p>Armor with the arrow-collecting special ability grants the wearer a 20% miss chance against ranged projectile attacks (but not thrown weapon attacks, ranged spell effects such as rays, or massive ranged projectiles such as those fired from siege weapons). When a projectile misses the wearer of arrow-collecting armor because of this miss chance, the projectile begins to orbit the wearer. Arrow-collecting armor can hold up to 5 pieces of ammunition in this fashion. Any projectiles that would be collected beyond that limit drop at the wearer's feet. As a standard action, the wearer of arrow-collecting armor can shoot all collected projectiles currently floating around the armor at a single target within 30 feet. Make a separate attack roll for each projectile, using the wearer's ranged attack modifier and any enhancement bonus the projectile might have. If the projectiles are not used in this way within 5 minutes, or if anyone tries to grab or move them, they break and become useless. The arrow-collecting special ability can be applied only to medium armor.</p>
<h3 id="magic-enh-arrow_collecting-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/entropic_shield">entropic shield</Link>, <Link to="/spell/telekinesis">telekinesis</Link>; <strong>Price</strong> +3 bonus</p>
</>};
const _brawling = {title: "Brawling (armor)", jsx: <><h2 id="magic-enh-brawling-brawling">Brawling</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 116</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +3 bonus; <strong>Weight</strong> -</p>
<p>The wearer of brawling armor gains a +2 bonus on unarmed attack and damage rolls, including combat maneuver checks made to <Link to="/rule/grapple">grapple</Link>. Her unarmed strikes count as magic weapons for the purpose of bypassing damage reduction. These bonuses do not apply to natural weapons. This special ability does not prevent the wearer's unarmed strikes from provoking attacks of opportunity or make the wearer's unarmed strikes count as armed attacks. The brawling ability can be applied only to light armor.</p>
<h3 id="magic-enh-brawling-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/bulls_strength">bull's strength</Link>; <strong>Price</strong> +3 bonus</p>
<blockquote>
<p><em>See also: <Link to="/magic-enh/brawling_weapon">brawling weapon enhancement</Link></em></p>
</blockquote>
</>};
const _cotraveling = {title: "Cotraveling", jsx: <><h2 id="magic-enh-cotraveling-cotraveling">Cotraveling</h2>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 46</Link><br/><strong>Aura</strong> strong conjuration; <strong>CL</strong> 14th<br/><strong>Slot</strong> none; <strong>Price</strong> +3 bonus; <strong>Weight</strong> -</p>
<p>Cotraveling armor is decorated with the embroidered image of a five-armed spiral. While the armor is worn, the wearer can touch a willing creature and attune that creature to one of the five arms; once an arm is attuned, it glows faintly with what appears to be starlight. Once per day as a free action (even if it is not the wearer's turn) when the wearer is sent to another plane by a spell or effect, he can activate the armor to allow all creatures attuned to it to accompany him, provided the attuned creature is within 30 feet. If an attuned creature is willing, it travels along with the character, arriving with that character on the destination plane at the same relative distance from the wearer as when the wearer used this ability (or as close to it as possible, given the nature of the new plane). Once used, all five arms of the spiral deactivate, even if not all of the attuned characters were willing or able to accompany the traveler to the new destination, and the wearer must wait 24 hours before attuning new creatures to the spiral.</p>
<h3 id="magic-enh-cotraveling-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/plane_shift">plane shift</Link>; <strong>Price</strong> +3 bonus</p>
</>};
const _ghost_touch_armor = {title: "Ghost Touch (armor, shield)", jsx: <><h2 id="magic-enh-ghost_touch_armor-ghost-touch">Ghost Touch</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 119</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> strong transmutation; <strong>CL</strong> 15th<br/><strong>Slot</strong> armor/shield quality; <strong>Price</strong> +3 bonus; <strong>Weight</strong> -</p>
<p>This armor or shield seems almost translucent. Both its enhancement bonus and its armor bonus count against the attacks of corporeal and incorporeal creatures. It can be picked up, moved, and worn by corporeal and incorporeal creatures alike. Incorporeal creatures gain the armor's or shield's enhancement bonus against both corporeal and incorporeal attacks, and they can still pass freely through solid objects.</p>
<h3 id="magic-enh-ghost_touch_armor-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/etherealness">etherealness</Link>; <strong>Price</strong> +3 bonus</p>
<blockquote>
<p><em>See also: <Link to="/magic-enh/ghost_touch_weapon">ghost touch weapon enhancement</Link></em></p>
</blockquote>
</>};
const _invulnerability = {title: "Invulnerability", jsx: <><h2 id="magic-enh-invulnerability-invulnerability">Invulnerability</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 120</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> strong varies; <strong>CL</strong> 18th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +3 bonus; <strong>Weight</strong> -</p>
<p>This suit of armor grants the wearer damage reduction 5/magic. Invulnerable armor emits a strong aura of abjuration (and evocation if <em>miracle</em> is used).</p>
<h3 id="magic-enh-invulnerability-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/stoneskin">stoneskin</Link>, <Link to="/spell/wish">wish</Link> or <Link to="/spell/miracle">miracle</Link>; <strong>Price</strong> +3 bonus</p>
</>};
const _sensing = {title: "Sensing", jsx: <><h2 id="magic-enh-sensing-sensing">Sensing</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 210</Link><br/><strong>Aura</strong> strong divination; <strong>CL</strong> 14th<br/><strong>Slot</strong> none; <strong>Price</strong> +3 bonus; <strong>Weight</strong> -</p>
<p>A set of sensing armor compensates when its wearer has been <Link to="/misc/blinded">blinded</Link>, is in total darkness (as long as the wearer doesn't have darkvision or the <Link to="/umr/see_in_darkness">see in darkness</Link> ability), or is in magical darkness (as long as the wearer doesn't have the see in darkness ability). When one of these conditions affects the wearer, sensing armor immediately grants its wearer <Link to="/umr/blindsight">blindsight</Link> with a 5-foot range and <Link to="/umr/blindsense">blindsense</Link> with a 60-foot range. As soon as the wearer can see, the additional senses end. The wearer can't gain these abilities by closing her eyes.</p>
<h3 id="magic-enh-sensing-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/true_seeing">true seeing</Link>; <strong>Price</strong> +3 bonus</p>
</>};
const _titanic = {title: "Titanic", jsx: <><h2 id="magic-enh-titanic-titanic">Titanic</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 122</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 7th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +3 bonus; <strong>Weight</strong> -</p>
<p>A suit of armor with the titanic ability is almost comically oversized, though the effect is superficial and the interior fits a creature normally, with no adjustments necessary. A creature wearing titanic armor is considered one size category larger for the purpose of using or being affected by special attacks that depend on size, such as <Link to="/umr/swallow_whole">swallow whole</Link> and <Link to="/umr/trample">trample</Link>. Once per day on command, the wearer can increase her size as if using <em>enlarge person</em> (even if the wearer is not humanoid) for 1 minute. In addition, once per minute as a free action the wearer can add the armor's enhancement bonus to a single Strength check or combat maneuver check, or to her CMD against a single combat maneuver. Because of its great bulk, the armor check penalty of titanic armor is increased by an amount equal to its enhancement bonus.</p>
<h3 id="magic-enh-titanic-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/enlarge_person">enlarge person</Link>; <strong>Price</strong> +3 bonus</p>
</>};
const _wild = {title: "Wild", jsx: <><h2 id="magic-enh-wild-wild">Wild</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 123</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 9th<br/><strong>Slot</strong> armor/shield quality; <strong>Price</strong> +3 bonus; <strong>Weight</strong> -</p>
<p>Armor with this special ability usually appears to be made from magically hardened animal pelt. The wearer of a suit of armor or a shield with this ability preserves his armor bonus (and any enhancement bonus) while in a wild shape. Armor and shields with this ability usually appear to be covered in leaf patterns. While the wearer is in a wild shape, the armor cannot be seen.</p>
<h3 id="magic-enh-wild-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/baleful_polymorph">baleful polymorph</Link>; <strong>Price</strong> +3 bonus</p>
</>};
const _phase_lurching = {title: "Phase Lurching", jsx: <><h2 id="magic-enh-phase_lurching-phase-lurching">Phase Lurching</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 24</Link><br/><strong>Aura</strong> strong conjuration; <strong>CL</strong> 13th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +9,100 gp; <strong>Weight</strong> -</p>
<p>Phase lurching armor takes on a shifting and immaterial appearance and radiates ghostly clouds of ectoplasm. The wearer of phase lurching armor has the ability to pass through walls or material obstacles once per day as a move action. The wall or obstacle can be up to 5 feet thick, and the wearer moves through it as if it were ethereal. The wearer is not considered ethereal for any other purpose, and can't move through corporeal creatures or through force effects (such as a <Link to="/spell/wall_of_force">wall of force</Link>) using this ability. Any surface the character moves through is coated with a thin, silvery mucus that lingers for 1 minute. The phase lurching special ability can be applied only to light armor.</p>
<h3 id="magic-enh-phase_lurching-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/phase_door">phase door</Link>; <strong>Price</strong> 4,550 gp</p>
</>};
const _delving = {title: "Delving", jsx: <><h2 id="magic-enh-delving-delving">Delving</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 117</Link>, <Link to="/source/dungeon_denizens_revisited">Dungeon Denizens Revisited pg. 7</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +10,000 gp; <strong>Weight</strong> -</p>
<p>Armor with this special ability grants the wearer a burrow speed of 10 feet. This speed allows the wearer to tunnel through any type of soil, including rocky soil, but not actual solid stone. This special ability does not give the wearer the ability to breathe underground, so he must <Link to="/misc/hold_his_breath">hold his breath</Link> or use other magic that provides air or allows him to breathe. The wearer gains a +4 bonus on all saving throws against <Link to="/rule/avalanches">landslides, avalanches</Link>, tunnel collapses, and similar effects.</p>
<h3 id="magic-enh-delving-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/soften_earth_and_stone">soften earth and stone</Link>; <strong>Price</strong> +5,000 gp</p>
</>};
const _putrid = {title: "Putrid", jsx: <><h2 id="magic-enh-putrid-putrid">Putrid</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 121</Link><br/><strong>Aura</strong> faint conjuration; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +10,000 gp; <strong>Weight</strong> -</p>
<p>Putrid armor gives off a revolting, stomach-twisting stench. Each living creatures within 10 feet of the wearer must succeed at a DC 14 Fortitude save or be <Link to="/misc/sickened">sickened</Link> for 5 rounds. This is a poison effect. Creatures that successfully save cannot be affected by the same armor's stench for 24 hours. Creatures with the <Link to="/umr/stench">stench</Link> universal monster ability or immunity to poison are unaffected. The wearer of putrid armor is immune to his own stench, but not to stench-based effects from other sources. The stench can be suppressed or resumed on command, but it takes 1 minute for an active stench to dissipate. Dissipation time increases to 10 minutes in a closed area or if no wind is blowing, and decreases to 3 rounds in moderate wind or 1 round in strong wind.</p>
<h3 id="magic-enh-putrid-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/stinking_cloud">stinking cloud</Link>; <strong>Price</strong> +5,000 gp</p>
</>};
const _harmonizing = {title: "Harmonizing", jsx: <><h2 id="magic-enh-harmonizing-harmonizing">Harmonizing</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 119</Link><br/><strong>Aura</strong> moderate illusion; <strong>CL</strong> 7th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +15,000 gp; <strong>Weight</strong> -</p>
<p>Every step taken in harmonizing armor produces a symphony of sounds. The armor harmonizes with music played, lyrics sung, and words spoken by its wearer, creating a pleasant counter-melody. Its wearer gains a +5 competence bonus on Perform checks, but takes a -5 penalty on Stealth checks. The wearer can be silent only if he takes no physical actions. The armor also amplifies harmful sounds, and the wearer gains vulnerability to sonic energy damage (sonic energy attacks deal an additional 50% damage to the wearer).</p>
<p>If the wearer has the <Link to="/ability/bardic_performance">bardic performance</Link> class feature, the harmonizing armor causes bonuses and penalties from performances that have an audible component to continue for 1 round after the wearer ceases performing. Beginning a new bardic performance ends the effects of the previous performance immediately. This ability does not stack with the Lingering Performance feat.</p>
<p>The harmonizing ability can be applied to any armor, but not shields.</p>
<h3 id="magic-enh-harmonizing-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/major_image">major image</Link> or bardic performance; <strong>Price</strong> +7,500 gp</p>
</>};
const _radiant_flight = {title: "Radiant Flight", jsx: <><h2 id="magic-enh-radiant_flight-radiant-flight">Radiant Flight</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 28</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 10th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +15,000 gp; <strong>Weight</strong> -</p>
<p>On command, the wearer of a suit of radiant flight armor can conjure a pair of bat-like wings from her back that shed light like a <Link to="/eq-misc/torch">torch</Link>. These wings grant a fly speed of 30 (poor maneuverability) for 10 minutes per day. This duration need not be used consecutively, but must be used in 1-minute increments. The radiant flight special ability can be applied only to heavy armor.</p>
<h3 id="magic-enh-radiant_flight-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/fly">fly</Link>; <strong>Price</strong> 7,500 gp</p>
</>};
const _shadow_improved = {title: "Improved Shadow", jsx: <><h2 id="magic-enh-shadow_improved-improved-shadow">Improved Shadow</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 122</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> moderate illusion; <strong>CL</strong> 10th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +15,000 gp; <strong>Weight</strong> -</p>
<p>As <Link to="/magic-enh/shadow">shadow</Link>, except it grants a +10 competence bonus on Stealth checks.</p>
<h3 id="magic-enh-shadow_improved-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/invisibility">invisibility</Link>, <Link to="/spell/silence">silence</Link>; <strong>Price</strong> +7,500 gp</p>
</>};
const _slick_improved = {title: "Improved Slick", jsx: <><h2 id="magic-enh-slick_improved-improved-slick">Improved Slick</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 122</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 10th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +15,000 gp; <strong>Weight</strong> -</p>
<p>As <Link to="/magic-enh/slick">slick</Link>, except it grants a +10 competence bonus on Escape Artist checks.</p>
<h3 id="magic-enh-slick_improved-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/grease">grease</Link>; <strong>Price</strong> +7,500 gp</p>
</>};
const _venom_eating = {title: "Venom-eating", jsx: <><h2 id="magic-enh-venom_eating-venom-eating">Venom-eating</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 24</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +15,000 gp; <strong>Weight</strong> -</p>
<p>Venom-eating armor allows its wearer to store poisons from venomous creatures for later use. Whenever the wearer of venom-eating armor is subjected to a poison attack and succeeds at a saving throw to resist the initial exposure, the venom-eating armor absorbs 1 dose of the poison. At any time after absorbing a dose of poison, the wearer of venom-eating armor can envenom a held weapon with the stored poison as a standard action without risk of poisoning himself. Venom-eating armor can hold a maximum number of poison doses equal to the total enhancement bonus of the venom-eating armor, but all doses must be the same type of poison. If the wearer of a suit of venom-eating armor succeeds at a saving throw against a new type of poison, that poison is stored in the armor and all doses of the old poison are lost. The venom-eating special ability can be applied only to armor made primarily from leather, such as leather, studded leather, and armor made of dragonhide.</p>
<h3 id="magic-enh-venom_eating-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/delay_poison">delay poison</Link>, <Link to="/spell/poison">poison</Link>; <strong>Price</strong> 7,500 gp</p>
</>};
const _denying = {title: "Denying", jsx: <><h2 id="magic-enh-denying-denying">Denying</h2>
<p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 142</Link><br/><strong>Aura</strong> strong abjuration; <strong>CL</strong> 13th<br/><strong>Slot</strong> armor; <strong>Price</strong> +4 bonus; <strong>Weight</strong> -</p>
<p>Once per day, when this armor's wearer is subject to either a critical hit or a <Link to="/ability/sneak_attack">sneak attack</Link> made with a melee weapon, she can automatically negate that critical or sneak attack and make it a normal attack. If the attack is both a sneak attack and a critical hit, the wearer must decide which of those she wants to negate before the damage is rolled. One use of this special ability doesn't negate both. A mythic wearer can expend two uses of mythic power to use this ability an additional time per day, and can even expend two more uses of mythic power to negate both a critical hit and sneak attack from the same attack. This ability can be applied only to heavy armors.</p>
<h3 id="magic-enh-denying-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/feat/mythic_crafter">Mythic Crafter</Link>, <Link to="/spell/limited_wish">limited wish</Link> or <Link to="/spell/miracle">miracle</Link>; <strong>Price</strong> +4 bonus</p>
</>};
const _energy_resistance = {title: "Energy Resistance", jsx: <><h2 id="magic-enh-energy_resistance-energy-resistance">Energy Resistance</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 117</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> faint abjuration; <strong>CL</strong> 3rd<br/><strong>Slot</strong> armor/shield quality; <strong>Price</strong> +18,000 gp; <strong>Weight</strong> -</p>
<p>A suit of armor or a shield with this special ability protects against one type of energy (acid, cold, electricity, fire, or sonic) and is designed with patterns depicting the element it protects against. The armor absorbs the first 10 points of energy damage per attack that the wearer would normally take (similar to the <em>resist energy</em> spell).</p>
<h3 id="magic-enh-energy_resistance-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/resist_energy">resist energy</Link>; <strong>Price</strong> +9,000 gp</p>
</>};
const _martyring = {title: "Martyring", jsx: <><h2 id="magic-enh-martyring-martyring">Martyring</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 120</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 9th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +18,000 gp; <strong>Weight</strong> -</p>
<p>This armor allows the wearer to capitalize on her own injuries to heal her allies. Once per day as an immediate action, when an enemy confirms a critical hit against someone wearing martyring armor, the wearer can heal up to nine allies within 30 feet as if using the <em>mass cure light wounds</em> spell (1d8+9 hit points each). This special ability cannot be placed on armor that possesses an ability that reduces the chance of or negates a critical hit (such as the <Link to="/magic-enh/fortification">fortification</Link> special ability).</p>
<h3 id="magic-enh-martyring-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/mass_cure_light_wounds">mass cure light wounds</Link>; <strong>Price</strong> +9,000 gp</p>
</>};
const _dread_wing = {title: "Dread Wing", jsx: <><h2 id="magic-enh-dread_wing-dread-wing">Dread Wing</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 28</Link><br/><strong>Aura</strong> strong transmutation; <strong>CL</strong> 15th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +5 bonus; <strong>Weight</strong> -</p>
<p>As an immediate action, the wearer of a suit of dread wing armor can order it to disassemble and reconfigure itself as a pair of immense dragon's wings. These wings grant the armor's wearer a fly speed of 60 feet (average maneuverability) and can be used as secondary natural weapons. These bladed wings each deal 1d6 points of damage for a Medium wearer (1d4 points of damage for a Small wearer). The wings are treated as the same kind of material as the base armor for the purpose of penetrating damage reduction. While the wings are unfurled, a suit of dread wing armor's total armor bonus decreases by half. The dread wing special ability can be applied only to <Link to="/eq-armor/full_plate">full-plate</Link> armor or Hellknight armor.</p>
<h3 id="magic-enh-dread_wing-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/fly">fly</Link>, <Link to="/spell/iron_body">iron body</Link>; <strong>Price</strong> +5 bonus</p>
</>};
const _unbowed = {title: "Unbowed", jsx: <><h2 id="magic-enh-unbowed-unbowed">Unbowed</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 28</Link><br/><strong>Aura</strong> moderate conjuration and evocation; <strong>CL</strong> 9th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +5 bonus; <strong>Weight</strong> -</p>
<p>When the wearer of unbowed armor would be reduced to 0 hit points or fewer by an attack that deals hit point damage, the wearer can negate all of that attack's damage as an immediate action. Using this effect permanently destroys the unbowed armor and causes it to explode in a shower of metal shrapnel, dealing 1d6 points of piercing damage per point of armor bonus to AC granted by the armor. This damage affects all creatures within 10 feet of the wearer (but not the wearer herself). A successful DC 20 Reflex save halves this damage. The unbowed special ability can be applied only to heavy armor.</p>
<h3 id="magic-enh-unbowed-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/breath_of_life">breath of life</Link>, <Link to="/spell/shatter">shatter</Link>; <strong>Price</strong> +5 bonus</p>
</>};
const _righteous = {title: "Righteous", jsx: <><h2 id="magic-enh-righteous-righteous-unrighteous-unbound-vigilant">Righteous, Unrighteous, Unbound, Vigilant</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 121, 123</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 283</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 10th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +27,000 gp; <strong>Weight</strong> -</p>
<p>Righteous armor is often engraved or enameled with religious symbols. Once per day on command, the wearer can invoke an effect, as per the spell <em>righteous might,</em> lasting for 10 rounds. Righteous armor is always aligned toward good (positive energy), for the effects of <em>righteous might.</em> Righteous armor bestows one permanent <Link to="/rule/negative_level">negative level</Link> on any evil creature attempting to wear it. The negative level remains as long as the armor is worn and disappears when it is removed. This negative level cannot be overcome in any way (including by <Link to="/spell/restoration">restoration</Link> spells) while the armor is worn.</p>
<p>Unrighteous armor is often sculpted with unholy symbols, and works the same as righteous armor, except the effect is aligned toward evil (negative energy), and bestows a negative level on good creatures that wear it.</p>
<p>Unbound armor is often engraved or enameled with chaotic religious symbols, and works the same as righteous or unrighteous armor, except the wearer gains DR 5/lawful instead of DR/evil or DR/good, and it bestows a negative level on chaotic creatures that wear it.</p>
<p>Vigilant armor is often engraved or enameled with lawful religious symbols, and works as unbound armor, except it grants DR 5/chaotic, and it bestows a negative level on lawful creatures that wear it.</p>
<h3 id="magic-enh-righteous-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/righteous_might">righteous might</Link>, creator must be lawful (vigilant armor only) or chaotic (unbound armor only); <strong>Price</strong> +13,500 gp</p>
</>};
const _determination = {title: "Determination", jsx: <><h2 id="magic-enh-determination-determination">Determination</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 117</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 283</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 10th<br/><strong>Slot</strong> armor/shield quality; <strong>Price</strong> +30,000 gp; <strong>Weight</strong> -</p>
<p>A shield or armor with the determination special ability provides the ability to fight on even in the face of seemingly impossible odds. Once per day, when the owner reaches 0 or fewer hit points, the item automatically provides a <em>breath of life</em> spell.</p>
<h3 id="magic-enh-determination-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/breath_of_life">breath of life</Link>; <strong>Price</strong> +15,000 gp</p>
</>};
const _shadow_greater = {title: "Greater Shadow", jsx: <><h2 id="magic-enh-shadow_greater-greater-shadow">Greater Shadow</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 122</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> strong illusion; <strong>CL</strong> 15th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +33,750 gp; <strong>Weight</strong> -</p>
<p>As <Link to="/magic-enh/shadow">shadow</Link>, except it grants a +15 competence bonus on Stealth checks.</p>
<h3 id="magic-enh-shadow_greater-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/invisibility">invisibility</Link>, <Link to="/spell/silence">silence</Link>; <strong>Price</strong> +16,875 gp</p>
</>};
const _slick_greater = {title: "Greater Slick", jsx: <><h2 id="magic-enh-slick_greater-greater-slick">Greater Slick</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 122</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> strong conjuration; <strong>CL</strong> 15th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +33,750 gp; <strong>Weight</strong> -</p>
<p>As <Link to="/magic-enh/slick">slick</Link>, except it grants a +15 competence bonus on Escape Artist checks.</p>
<h3 id="magic-enh-slick_greater-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/grease">grease</Link>; <strong>Price</strong> +16,875 gp</p>
</>};
const _energy_resistance_improved = {title: "Improved Energy Resistance", jsx: <><h2 id="magic-enh-energy_resistance_improved-improved-energy-resistance">Improved Energy Resistance</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 117</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> moderate abjuration; <strong>CL</strong> 7th<br/><strong>Slot</strong> armor/shield quality; <strong>Price</strong> +42,000 gp; <strong>Weight</strong> -</p>
<p>As <Link to="/magic-enh/energy_resistance">energy resistance</Link>, except it absorbs the first 20 points of energy damage per attack.</p>
<h3 id="magic-enh-energy_resistance_improved-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/resist_energy">resist energy</Link>; <strong>Price</strong> +21,000 gp</p>
</>};
const _etherealness = {title: "Etherealness", jsx: <><h2 id="magic-enh-etherealness-etherealness">Etherealness</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 118</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> strong transmutation; <strong>CL</strong> 13th<br/><strong>Slot</strong> armor quality; <strong>Price</strong> +49,000 gp; <strong>Weight</strong> -</p>
<p>On command, this ability allows the wearer of the armor to become ethereal (as the <em>ethereal jaunt</em> spell) once per day. The character can remain ethereal for as long as desired, but once he returns to normal, he cannot become ethereal again that day.</p>
<h3 id="magic-enh-etherealness-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/ethereal_jaunt">ethereal jaunt</Link>; <strong>Price</strong> +24,500 gp</p>
</>};
const _undead_controlling = {title: "Undead Controlling", jsx: <><h2 id="magic-enh-undead_controlling-undead-controlling">Undead Controlling</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 123</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> strong necromancy; <strong>CL</strong> 13th<br/><strong>Slot</strong> armor/shield quality; <strong>Price</strong> +49,000 gp; <strong>Weight</strong> -</p>
<p>Undead controlling armor and shields often have skeletal or other grisly decorations or flourishes to their decor. They let the user control up to 26 Hit Dice of undead per day, as the <em>control undead</em> spell. At dawn each day, the wearer loses control of any undead still under his sway. Armor or a shield with this ability appears to be made of bone; this feature is entirely decorative and has no other effect on the armor.</p>
<h3 id="magic-enh-undead_controlling-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/control_undead">control undead</Link>; <strong>Price</strong> +24,500 gp</p>
</>};
const _energy_resistance_greater = {title: "Greater Energy Resistance", jsx: <><h2 id="magic-enh-energy_resistance_greater-greater-energy-resistance">Greater Energy Resistance</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 117</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> moderate abjuration; <strong>CL</strong> 11th<br/><strong>Slot</strong> armor/shield quality; <strong>Price</strong> +66,000 gp; <strong>Weight</strong> -</p>
<p>As <Link to="/magic-enh/energy_resistance">energy resistance</Link>, except it absorbs the first 30 points of energy damage per attack.</p>
<h3 id="magic-enh-energy_resistance_greater-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/resist_energy">resist energy</Link>; <strong>Price</strong> +33,000 gp</p>
</>};
const _arrow_catching = {title: "Arrow Catching", jsx: <><h2 id="magic-enh-arrow_catching-arrow-catching">Arrow Catching</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 115</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> moderate abjuration; <strong>CL</strong> 8th<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A shield with this ability attracts ranged weapon attacks to it. It has a deflection bonus of +1 against ranged weapons because projectiles and thrown weapons veer toward it. Additionally, any projectile or thrown weapon aimed at a target within 5 feet of the shield's wearer diverts from its original target and targets the shield's bearer instead. If the wielder has total cover relative to the attacker, the projectile or thrown weapon is not diverted. Additionally, those attacking the wearer with ranged weapons ignore any miss chances that would normally apply. Projectiles and thrown weapons that have an enhancement bonus higher than the shield's base AC bonus are not diverted to the wearer (but the shield's deflection bonus still applies against these weapons). The wielder can activate or deactivate this ability with a command word.</p>
<h3 id="magic-enh-arrow_catching-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/entropic_shield">entropic shield</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _assiduous = {title: "Assiduous", jsx: <><h2 id="magic-enh-assiduous-assiduous">Assiduous</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 30</Link><br/><strong>Aura</strong> faint enchantment and conjuration; <strong>CL</strong> 1st<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>When the wielder of an assiduous shield <Link to="/misc/fights_defensively">fights defensively</Link> or uses the <Link to="/misc/total_defense">total defense</Link> action, the shield's mirrored surface provides protection against <Link to="/umr/gaze">gaze</Link> attacks, rendering the wielder immune to their effects. During any round in which the wielder is directly targeted with a gaze attack and is forced to attempt a saving throw, if she succeeds at the save by 5 or more, she can reflect the gaze back on the attacker. The attacker must attempt a saving throw against its own gaze even if it is normally immune, though the attacker receives a +5 bonus if it is normally immune to its own gaze.</p>
<h3 id="magic-enh-assiduous-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/lock_gaze">lock gaze</Link>, <Link to="/spell/mirror_polish">mirror polish</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _bashing = {title: "Bashing", jsx: <><h2 id="magic-enh-bashing-bashing">Bashing</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 115</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 8th<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A shield with this special ability is designed to perform a <Link to="/misc/shield_bash">shield bash</Link>. A bashing shield deals damage as if it were a weapon of <Link to="/misc/two_size_categories_larger">two size categories larger</Link> (a Medium light shield thus deals 1d6 points of damage and a Medium heavy shield deals 1d8 points of damage). The shield acts as a +1 weapon when used to bash. Only light and heavy shields can have this ability.</p>
<h3 id="magic-enh-bashing-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/bulls_strength">bull's strength</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _blinding = {title: "Blinding", jsx: <><h2 id="magic-enh-blinding-blinding">Blinding</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 116</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> moderate evocation; <strong>CL</strong> 7th<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A shield with this ability flashes with a brilliant light up to twice per day upon command of the wielder. Except for the wielder, anyone within 20 feet must make a successful DC 14 Reflex save or be <Link to="/misc/blinded">blinded</Link> for 1d4 rounds.</p>
<h3 id="magic-enh-blinding-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/searing_light">searing light</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _clangorous = {title: "Clangorous", jsx: <><h2 id="magic-enh-clangorous-clangorous">Clangorous</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 116</Link><br/><strong>Aura</strong> moderate evocation; <strong>CL</strong> 7th<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A shield with this ability rings loudly when struck in combat. As an immediate action when the wearer is hit by an attack, the wearer can activate the shield to create a deafening bang equivalent to a <Link to="/eq-weapon/thunderstone">thunderstone</Link>. If the attack is a critical hit, the wearer can instead create a <em>sound burst</em> (Fortitude DC 13 partial). The wearer decides the area for either effect, but must include the attacker in the area. Neither ability affects the wearer.</p>
<h3 id="magic-enh-clangorous-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/blindness_deafness">deafness</Link>, <Link to="/spell/sound_burst">sound burst</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _folding = {title: "Folding", jsx: <><h2 id="magic-enh-folding-folding">Folding</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 30</Link><br/><strong>Aura</strong> strong conjuration and transmutation; <strong>CL</strong> 13th<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>On command, a folding shield transforms to take on the form of another shield. As a move action, the wearer of a folding shield can change the shield from its current form into a <Link to="/eq-armor/buckler">buckler</Link>, <Link to="/eq-armor/heavy_shield">heavy shield</Link>, or <Link to="/eq-armor/tower_shield">tower shield</Link>. The wearer of a folding shield must be proficient with the type of shield into which he wishes to transform the folding shield.</p>
<h3 id="magic-enh-folding-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/instant_summons">instant summons</Link>, <Link to="/spell/masterwork_transformation">masterwork transformation</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _guarding = {title: "Guarding", jsx: <><h2 id="magic-enh-guarding-guarding">Guarding</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 148</Link><br/><strong>Aura</strong> moderate abjuration; <strong>CL</strong> 8th<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A guarding shield allows the wearer to transfer some or all of the shield's enhancement bonus to an adjacent creature's AC (this bonus stacks with all others). As a free action at the start of her turn before using any of the shield's other abilities, the wearer may choose an adjacent target and how much of the shield's enhancement bonus to allocate at the start of her turn. The target's AC bonus lasts until the wearer's next turn or until the wearer and the target are ever more than 5 feet apart, at which point the target's bonus ends and the shield's enhancement bonus works normally for the wearer. This ability only affects a shield's enhancement bonus to Armor Class, not its enhancement bonus on attack rolls (if any) or any other shield abilities.</p>
<h3 id="magic-enh-guarding-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/shield_other">shield other</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _heraldric = {title: "Heraldric", jsx: <><h2 id="magic-enh-heraldric-heraldric">Heraldric</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 30</Link><br/><strong>Aura</strong> strong enchantment; <strong>CL</strong> 13th<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A shield with the heraldic special ability counts as a banner for the purposes of a <Link to="/class/cavalier">cavalier's</Link> banner class feature, and as a holy symbol for any creature that worships a deity. This special ability can be applied only to heavy shields and <Link to="/eq-armor/tower_shield">tower shields</Link>.</p>
<h3 id="magic-enh-heraldric-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/heroism">heroism</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _ramming = {title: "Ramming", jsx: <><h2 id="magic-enh-ramming-ramming">Ramming</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 121</Link><br/><strong>Aura</strong> faint evocation; <strong>CL</strong> 5th<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>These shields are sturdily built and often bear the device of a ram or bull. When the wielder of a ramming shield makes a <Link to="/misc/shield_bash">shield bash</Link> attack as part of a <Link to="/rule/charge">charge</Link>, the shield's enhancement bonus to Armor Class applies to the attack and damage rolls. This doesn't stack with any existing enhancement the shield has. If the attack hits, as a swift action the wielder can attempt a <Link to="/rule/bull_rush">bull rush</Link> combat maneuver against that target, adding the +2 bonus for charging and the shield's enhancement bonus to the combat maneuver check. Only shields that can make a shield bash attack can have the ramming ability.</p>
<h3 id="magic-enh-ramming-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/force_punch">force punch</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _rebounding = {title: "Rebounding", jsx: <><h2 id="magic-enh-rebounding-rebounding">Rebounding</h2>
<p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 21</Link><br/><strong>Aura</strong> faint abjuration; <strong>CL</strong> 5th<br/><strong>Slot</strong> shield; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A rebounding shield provides an additional +2 enhancement bonus to AC against thrown weapons, and it adds its total enhancement bonus to the wielder's touch AC against splash weapons. If an opponent targets the wielder of a rebounding shield with a splash weapon and misses, the wielder may choose the <Link to="/rule/throw_splash_weapon">misdirection</Link> of the splash weapon.</p>
<h3 id="magic-enh-rebounding-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/shield">shield</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _singing = {title: "Singing", jsx: <><h2 id="magic-enh-singing-singing">Singing</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 26</Link><br/><strong>Aura</strong> moderate evocation; <strong>CL</strong> 10th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This special ability can be placed only on a shield. Once per day, a singing shield's bearer can command the shield to sing for 10 rounds to counter magical effects that depend on sound (as the bard's <Link to="/performance/countersong">countersong</Link> ability). Once per round during this time, the shield's bearer can roll 1d20+10, treating that as the result of the shield's Perform check for countersong.</p>
<h3 id="magic-enh-singing-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/sound_burst">sound burst</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _spellrending = {title: "Spellrending", jsx: <><h2 id="magic-enh-spellrending-spellrending">Spellrending</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 31</Link><br/><strong>Aura</strong> moderate abjuration; <strong>CL</strong> 9th<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>If a spellrending shield successfully protects its wearer from a spell effect, the shield stores the spell's energy and glows as bright as a <Link to="/eq-misc/torch">torch</Link> for 1 round per level of the spell negated. If the wearer of the spellrending shield successfully performs a <Link to="/misc/shield_bash">shield bash</Link> during this time, the spell's energy is discharged and the wearer gains a bonus on attack and damage rolls for the shield bash equal to the level of the absorbed spell effect. Only a shield with a <Link to="/magic-enh/spell_resistance">spell resistance</Link> special ability can have the spellrending special ability.</p>
<h3 id="magic-enh-spellrending-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/spell_absorption">spell absorption</Link>; <strong>Price</strong> +1 bonus</p>
</>};
const _animated = {title: "Animated", jsx: <><h2 id="magic-enh-animated-animated">Animated</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 114</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> strong transmutation; <strong>CL</strong> 12th<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>As a move action, an animated shield can be loosed to defend its wielder on its own. For the following 4 rounds, the shield grants its bonus to the one who loosed it and then drops. While animated, the shield provides its shield bonus and the bonuses from all of the other shield special abilities it possesses, but it cannot take actions on its own, such as those provided by the <Link to="/magic-enh/bashing">bashing</Link> and <Link to="/magic-enh/blinding">blinding</Link> abilities. It can, however, use special abilities that do not require an action to function, such as <Link to="/magic-enh/arrow_deflection">arrow deflection</Link> and <Link to="/magic-enh/reflecting">reflecting</Link>. While animated, a shield shares the same space as the activating character and accompanies the character who activated it, even if the character moves by magical means. A character with an animated shield still takes any penalties associated with shield use, such as armor check penalty, arcane spell failure chance, and nonproficiency. If the wielder who loosed it has an unoccupied hand, she can grasp it to end its animation as a free action. Once a shield has been retrieved, it cannot be animated again for at least 4 rounds. This special ability cannot be added to a <Link to="/eq-armor/tower_shield">tower shield</Link>.</p>
<h3 id="magic-enh-animated-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/animate_objects">animate objects</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _arrow_deflection = {title: "Arrow Deflection", jsx: <><h2 id="magic-enh-arrow_deflection-arrow-deflection">Arrow Deflection</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 115</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> faint abjuration; <strong>CL</strong> 5th<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>This shield protects the wielder as if he had the <Link to="/feat/deflect_arrows">Deflect Arrows</Link> feat. Once per round when he would normally be struck by a ranged weapon, he can make a DC 20 Reflex save. If the ranged weapon (or piece of ammunition) has an enhancement bonus, the DC increases by that amount. If he succeeds, the shield deflects the weapon. He must be aware of the attack and not <Link to="/rule/flat_footed">flat-footed</Link>. Attempting to deflect a ranged weapon doesn't count as an action. Exceptional ranged weapons, such as boulders hurled by giants or <Link to="/spell/acid_arrow">acid arrows</Link>, can't be deflected.</p>
<h3 id="magic-enh-arrow_deflection-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/shield">shield</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _guarding_greater = {title: "Greater Guarding", jsx: <><h2 id="magic-enh-guarding_greater-greater-guarding">Greater Guarding</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 148</Link><br/><strong>Aura</strong> strong abjuration; <strong>CL</strong> 12th<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>As the <Link to="/magic-enh/guarding">guarding</Link> property, except as a free action, the wearer selects any number of adjacent allies to receive the shield's bonus. All selected allies receive the same bonus. If a shielded target is ever more than 5 feet from the wearer, the effect ends for that target but not for any other targets.</p>
<h3 id="magic-enh-guarding_greater-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/shield_other">shield other</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _jawbreaker = {title: "Jawbreaker", jsx: <><h2 id="magic-enh-jawbreaker-jawbreaker">Jawbreaker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 246</Link><br/><strong>Aura</strong> moderate necromancy; <strong>CL</strong> 9th<br/><strong>Slot</strong> none; <strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>The rugged surface of a jawbreaker shield is always scratched and gouged, as if gnawed by enormous jaws. Attacking the wielder with a bite attack provokes an attack of opportunity from the wielder, which is resolved before the bite attack. This attack of opportunity must be a <Link to="/misc/shield_bash">shield bash</Link> attack with the jawbreaker shield; making this attack does not cause the wielder to forfeit the shield's bonus to AC. If the wielder confirms a critical hit with this shield bash attack, the attacker's jaws are injured, causing it to take a -2 penalty on attack and damage rolls with its bite attack for 24 hours. The save DC of exceptional or supernatural abilities that use the target's mouth, including breath weapons, is likewise reduced by 2 for the same amount of time. A <Link to="/spell/regenerate">regenerate</Link> spell ends this penalty, and a creature with <Link to="/umr/regeneration">regeneration</Link> recovers from these effects after 1 minute.</p>
<p>The wielder adds the jawbreaker shield's total shield bonus to AC (including its enhancement bonus) to his CMD against combat maneuver checks to grapple him with a bite attack, including attempts to <Link to="/umr/swallow_whole">swallow him whole</Link>.</p>
<p>This special ability can be placed only on shields, but it cannot be placed on bucklers or tower shields.</p>
<h3 id="magic-enh-jawbreaker-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/inflict_critical_wounds">inflict critical wounds</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _mastering = {title: "Mastering", jsx: <><h2 id="magic-enh-mastering-mastering">Mastering</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 30</Link><br/><strong>Aura</strong> strong conjuration and transmutation; <strong>CL</strong> 13th<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>A character with the weapon training class feature who wields a mastering shield applies his highest weapon training bonus on attack rolls and damage rolls for <Link to="/misc/shield_bash">shield bashes</Link> made with the shield. If the character already has weapon training with the close weapon group as his highest weapon mastery, he instead applies any of the following feats he has for other weapons to attacks performed with the shield: <Link to="/feat/greater_weapon_focus">Greater Weapon Focus</Link>, <Link to="/feat/greater_weapon_specialization">Greater Weapon Specialization</Link>, <Link to="/feat/weapon_focus">Weapon Focus</Link>, and <Link to="/feat/weapon_specialization">Weapon Specialization</Link>. A character with the weapon mastery class feature applies weapon mastery to attacks with a mastering shield. A character without weapon training gains no benefit.</p>
<h3 id="magic-enh-mastering-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/transformation">transformation</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _merging = {title: "Merging", jsx: <><h2 id="magic-enh-merging-merging">Merging</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 120</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 10th<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>A merging shield can meld with a held one-handed or light weapon. The wearer chooses each round whether to attack with the weapon or defend with the shield. Melding or freeing the shield requires a command word. The shield must be worn to merge it with a weapon; reversing the melding means the shield is being worn again. While the shield is melded, the wearer can use that hand only to attack with the weapon or defend with the shield (and not to cast spells or manipulate objects, for example). Attack rolls with the weapon take a -2 penalty while merged with a light shield or a -4 penalty while merged with a heavy shield. If the wearer attacks with the merged weapon, she loses the shield's bonus to AC until the start of her next turn. A merged shield can't be used to <Link to="/misc/shield_bash">shield bash</Link>. Only light and heavy shields can be merging shields.</p>
<h3 id="magic-enh-merging-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/versatile_weapon">versatile weapon</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _weeping = {title: "Weeping", jsx: <><h2 id="magic-enh-weeping-weeping">Weeping</h2>
<p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil pg. 26</Link><br/><strong>Aura</strong> moderate enchantment; <strong>CL</strong> 10th<br/><strong>Price</strong> +2 bonus; <strong>Weight</strong> -</p>
<p>The weeping special quality can be applied only to a shield. As a move action, a wielder can cause a weeping shield to emit continual sobbing and wailing. While this effect is active, each good-aligned creature within 10 feet of the wielder takes a -1 penalty on attack rolls, saving throws, ability checks, skill checks, and weapon damage rolls. Nongood creatures and those immune to mind-affecting effects are immune to this effect. The wailing lasts for 10 minutes or until ended as a move action.</p>
<h3 id="magic-enh-weeping-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/crushing_despair">crushing despair</Link>; <strong>Price</strong> +2 bonus</p>
</>};
const _wyrmsbreath = {title: "Wyrmsbreath", jsx: <><h2 id="magic-enh-wyrmsbreath-wyrmsbreath">Wyrmsbreath</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 123</Link><br/><strong>Aura</strong> faint evocation; <strong>CL</strong> 5th<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +5,000 gp; <strong>Weight</strong> -</p>
<p>A shield with this special ability is usually crafted with an open dragon's mouth on the front. A shield with the wyrmsbreath special ability is keyed to one type of energy (acid, cold, electricity, or fire). The shield gains 1 charge for every 5 points of damage from the keyed energy type the wearer takes. On command, the bearer can expend 1 to 5 charges from the shield to have it create a breath weapon in a 15 foot cone dealing 1d4 points of energy damage per charge expended (Reflex DC 11 half). This damage is the same type as the shield's keyed energy type. A shield can store up to 5 charges at a time, and stored charges expire harmlessly after 24 hours. A shield cannot have more than one wyrmsbreath ability.</p>
<h3 id="magic-enh-wyrmsbreath-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/burning_hands">burning hands</Link>; <strong>Price</strong> +2,500 gp</p>
</>};
const _deflecting = {title: "Deflecting", jsx: <><h2 id="magic-enh-deflecting-deflecting">Deflecting</h2>
<p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 142</Link><br/><strong>Aura</strong> strong abjuration; <strong>CL</strong> 13th<br/><strong>Slot</strong> shield; <strong>Price</strong> +3 bonus; <strong>Weight</strong> -</p>
<p>Three times per day, the wearer of a shield with this ability can cause a group of two dozen small, shiny metal plates to dislodge from the shield and orbit his immediate area. These metal plates protect the wearer and his allies from attacks, granting him and all allies within 10 feet a deflection bonus to AC. This bonus is equal to the shield's enhancement bonus. This ability lasts for 1 minute or until dismissed as a free action. A mythic wearer can expend one use of mythic power when using this ability to increase the deflection bonus granted by the shield by half his mythic tier (minimum 1). This ability can be applied only to steel shields.</p>
<h3 id="magic-enh-deflecting-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/feat/mythic_crafter">Mythic Crafter</Link>, <Link to="/spell/deflection">deflection</Link>; <strong>Price</strong> +3 bonus</p>
</>};
const _bastion = {title: "Bastion", jsx: <><h2 id="magic-enh-bastion-bastion">Bastion</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 30</Link><br/><strong>Aura</strong> strong abjuration; <strong>CL</strong> 15th<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +4 bonus; <strong>Weight</strong> -</p>
<p>A bastion shield grants its wielder the ability to shrug off mind-affecting effects for a limited time. Whenever the wielder of a bastion shield fails a Will saving throw against a mind-affecting effect, the shield suppresses this effect for a number of rounds equal to its enhancement bonus. During this time, the bastion shield loses its enhancement bonus. If the wearer of a bastion shield drops or loses it, any suppressed mind-affecting effect immediately takes effect. The bastion special ability can be applied only to heavy shields and <Link to="/eq-armor/tower_shield">tower shields</Link>.</p>
<h3 id="magic-enh-bastion-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/mind_blank">mind blank</Link>; <strong>Price</strong> +4 bonus</p>
</>};
const _channeling = {title: "Channeling", jsx: <><h2 id="magic-enh-channeling-channeling">Channeling</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 26</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 8th<br/><strong>Slot</strong> none; <strong>Price</strong> +18,000 gp; <strong>Weight</strong> -</p>
<p>A shield with this special ability is crafted to resemble an angel or other outsider holding a basin of some sort, and is engraved with holy symbols. The shield is keyed to either positive or negative energy when it is crafted. If the bearer can <Link to="/ability/channel_energy">channel energy</Link> of the keyed type, three times per day he can increase the total number of dice of channeled energy by 1. The wearer also reduces any damage taken from energy of the type opposed to the keyed type by 10 points.</p>
<h3 id="magic-enh-channeling-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/cure_moderate_wounds">cure</Link>/<Link to="/spell/inflict_moderate_wounds">inflict moderate wounds</Link>, creator must be able to channel energy; <strong>Price</strong> +9,000 gp</p>
</>};
const _reflecting = {title: "Reflecting", jsx: <><h2 id="magic-enh-reflecting-reflecting">Reflecting</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 121</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 463</Link><br/><strong>Aura</strong> strong abjuration; <strong>CL</strong> 14th<br/><strong>Slot</strong> shield quality; <strong>Price</strong> +5 bonus; <strong>Weight</strong> -</p>
<p>This shield is as highly polished as a mirror, and its surface is completely reflective. Once per day, it can be called on to reflect a spell back at its caster exactly like the <em>spell turning</em> spell.</p>
<h3 id="magic-enh-reflecting-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/spell_turning">spell turning</Link>; <strong>Price</strong> +5 bonus</p>
</>};
const _shrinking = {title: "Shrinking", jsx: <><h2 id="magic-enh-shrinking-shrinking">Shrinking</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 27</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> none; <strong>Price</strong> +1,000 gp; <strong>Weight</strong> -</p>
<p>This special ability can be placed only on melee weapons. When the wielder issues the command word, a shrinking weapon shrinks to the size of a standard <Link to="/eq-weapon/dagger">dagger</Link>. While in this state, the weapon deals 1d4 points of damage but is more easily concealable. When the command word is spoken again, the weapon returns to its original state.</p>
<h3 id="magic-enh-shrinking-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/shrink_item">shrink item</Link>; <strong>Price</strong> +500 gp</p>
</>};
const _agile = {title: "Agile", jsx: <><h2 id="magic-enh-agile-agile">Agile</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_100_a_song_of_silver">Pathfinder #100: A Song of Silver pg. 21</Link>, <Link to="/source/pathfinder_society_field_guide">Pathfinder Society Field Guide pg. 50</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 7th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A character with <Link to="/feat/weapon_finesse">Weapon Finesse</Link> can apply her Dexterity modifier to damage rolls with an agile weapon in place of her Strength modifier. This modifier to damage is not increased for two-handed weapons, but is still reduced for off-hand weapons. This weapon special ability can be placed only on melee weapons usable with Weapon Finesse.</p>
<h3 id="magic-enh-agile-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/cats_grace">cat's grace</Link>; <strong>Price</strong> -</p>
<div className="sideNoteWrap singular optional elephant"><ScrollContainer id="magic-enh-agile--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/the_elephant_in_the_room"><IonIcon aria-label="The Elephant in the Room" icon="/icons/elephant.svg" /></ThLink><td><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link><br/>You can apply your Dexterity modifier instead of your Strength modifier to attack rolls when wielding an agile weapon sized for you, even though it isn't a <Link to="/rule/finesse">finesse</Link> weapon.</p>
<p>This is a weapon quality, rather than a magical enhancement.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _allying = {title: "Allying", jsx: <><h2 id="magic-enh-allying-allying">Allying</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 135</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 286</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>An allying weapon allows the wielder to transfer some or all of the weapon's enhancement bonus to one weapon being used by an ally of the wielder. The wielder must have line of sight to the intended ally. As a free action, at the start of her turn before using her weapon, the wielder chooses how to allocate her weapon's enhancement bonus. The bonus to the ally's weapon lasts until the allying weapon's wielder's next turn. The enhancement bonus from the allying weapon does not stack with the enhancement bonus on the ally's weapon (if any).</p>
<h3 id="magic-enh-allying-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/magic_weapon">magic weapon</Link>; <strong>Price</strong> -</p>
</>};
const _answering = {title: "Answering", jsx: <><h2 id="magic-enh-answering-answering">Answering</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 212</Link><br/><strong>Aura</strong> moderate enchantment; <strong>CL</strong> 7th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This ability can be placed only on melee weapons. For the purpose of the <Link to="/swashdeed/opportune_parry_and_riposte">opportune parry and riposte</Link> deed, the weapon's enhancement bonus increases by 4 (to a maximum of +5).</p>
<h3 id="magic-enh-answering-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/good_hope">good hope</Link>, creator must have the opportune parry and riposte deed; <strong>Price</strong> -</p>
</>};
const _bane = {title: "Bane", jsx: <><h2 id="magic-enh-bane-bane">Bane</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 136</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 469</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 8th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A bane weapon excels against certain foes. Against a designated foe, the weapon's enhancement bonus is +2 better than its actual bonus. It also deals an extra 2d6 points of damage against such foes. To randomly determine a weapon's designated foe, roll on the following table.</p>
<ScrollContainer id="magic-enh-bane--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Designated Foe</th>
</tr>
</thead>
<tbody><tr>
<td>01-05</td>
<td>Aberrations</td>
</tr>
<tr>
<td>06-09</td>
<td>Animals</td>
</tr>
<tr>
<td>10-16</td>
<td>Constructs</td>
</tr>
<tr>
<td>17-22</td>
<td>Dragons</td>
</tr>
<tr>
<td>23-27</td>
<td>Fey</td>
</tr>
<tr>
<td>28-60</td>
<td>Humanoids (pick one subtype)</td>
</tr>
<tr>
<td>61-65</td>
<td>Magical beasts</td>
</tr>
<tr>
<td>66-70</td>
<td>Monstrous humanoids</td>
</tr>
<tr>
<td>71-72</td>
<td>Oozes</td>
</tr>
<tr>
<td>73-88</td>
<td>Outsiders (pick one subtype)</td>
</tr>
<tr>
<td>89-90</td>
<td>Plants</td>
</tr>
<tr>
<td>91-98</td>
<td>Undead</td>
</tr>
<tr>
<td>99-100</td>
<td>Vermin</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="magic-enh-bane-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/summon_monster_i">summon monster I</Link>; <strong>Price</strong> -</p>
</>};
const _benevolent = {title: "Benevolent (weapon)", jsx: <><h2 id="magic-enh-benevolent-benevolent">Benevolent</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 136</Link><br/><strong>Aura</strong> faint enchantment; <strong>CL</strong> 5th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This ability can only be placed on a melee weapon. When the wielder of a benevolent weapon uses the <Link to="/rule/aid_another_2">aid another</Link> action to grant an ally a bonus on attack rolls, he increases the aid another bonus by the enhancement bonus of the weapon.</p>
<h3 id="magic-enh-benevolent-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/aid">aid</Link>; <strong>Price</strong> -</p>
<blockquote>
<p><em>See also: <Link to="/magic-enh/benevolent_armor">benevolent armor enhancement</Link></em></p>
</blockquote>
</>};
const _bewildering = {title: "Bewildering", jsx: <><h2 id="magic-enh-bewildering-bewildering">Bewildering</h2>
<p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox pg. 24</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 7th<br/><strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Three times per day, when the wielder of a bewildering weapon makes a successful attack with this weapon, in addition to dealing the weapon's normal damage, the wielder can inflict the <Link to="/misc/confused">confused</Link> condition on that enemy for 1d6 rounds. The target can attempt a DC 17 Will saving throw each round to end this effect.</p>
<h3 id="magic-enh-bewildering-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/confusion">confusion</Link>; <strong>Price</strong> -</p>
</>};
const _blood_hunting = {title: "Blood-Hunting", jsx: <><h2 id="magic-enh-blood_hunting-blood-hunting">Blood-Hunting</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 212</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 8th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A blood-hunting weapon excels against enemies with the bloodline class feature. Against a designated foe, the weapon's enhancement bonus is 2 better than its actual bonus. It also deals an additional 2d6 points of damage against such foes. When combined with abilities like <Link to="/magic-enh/bane">bane</Link> or <Link to="/magic-enh/spirit_hunting">spirit-hunting</Link>, the enhancement bonus increases granted by these abilities don't stack, but an extra 1d6 points of damage are added to the additional damage for each special ability beyond the first. (For example, a bane blood-hunting weapon would deal 3d6 additional points of damage, and a bane blood-hunting spirit-hunting weapon would deal 4d6 additional points of damage.) To randomly determine a weapon's designated foe, roll on the following table. Other designated foes are possible, but most of these weapons are tuned against creatures with the following bloodlines.</p>
<ScrollContainer id="magic-enh-blood_hunting--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Designated Foe</th>
</tr>
</thead>
<tbody><tr>
<td>01-05</td>
<td>Aberrant</td>
</tr>
<tr>
<td>06-15</td>
<td>Abyssal</td>
</tr>
<tr>
<td>16-30</td>
<td>Arcane</td>
</tr>
<tr>
<td>31-35</td>
<td>Celestial</td>
</tr>
<tr>
<td>36-40</td>
<td>Destined</td>
</tr>
<tr>
<td>41-50</td>
<td>Draconic</td>
</tr>
<tr>
<td>51-60</td>
<td>Elemental</td>
</tr>
<tr>
<td>61-70</td>
<td>Fey</td>
</tr>
<tr>
<td>71-80</td>
<td>Infernal</td>
</tr>
<tr>
<td>81-90</td>
<td>Undead</td>
</tr>
<tr>
<td>91-100</td>
<td>Other</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="magic-enh-blood_hunting-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/summon_monster_i">summon monster I</Link>; <strong>Price</strong> -</p>
</>};
const _bloodsong = {title: "Bloodsong", jsx: <><h2 id="magic-enh-bloodsong-bloodsong">Bloodsong</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 212</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 6th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This special ability can be placed only on slashing or piercing melee weapons. While the wielder benefits from a <Link to="/ability/raging_song">raging song</Link> performance (whether her own or from an ally), this weapon gains the <Link to="/magic-enh/keen">keen</Link> weapon special ability. If the wearer confirms a critical hit while under the effects of a raging song, she gains 1d10 <Link to="/rule/temporary_hit_points">temporary hit points</Link> that last until they're reduced to 0 or the raging song ends, whichever comes first. If the weapon's critical multiplier is &times;3, add 2d10 temporary hit points instead; if the multiplier is &times;4, add 3d10 temporary hit points instead. While its powers are active, the weapon vibrates and makes a barely audible hum that rises to a shriek of triumph when it confirms a critical hit.</p>
<h3 id="magic-enh-bloodsong-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/keen_edge">keen edge</Link>, creator must have the raging song class feature; <strong>Price</strong> -</p>
</>};
const _brawling_weapon = {title: "Brawling (weapon)", jsx: <><h2 id="magic-enh-brawling_weapon-brawling">Brawling</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 212</Link><br/><strong>Aura</strong> moderate enchantment; <strong>CL</strong> 7th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This weapon special ability can be applied only to <Link to="/eq-weapon/brass_knuckles">brass knuckles</Link>, a <Link to="/eq-weapon/cestus">cestus</Link>, a <Link to="/eq-weapon/sap">sap</Link>, or a light bludgeoning weapon. The wielder of this weapon gains an enhancement bonus on combat maneuver checks equal to the enhancement bonus of the weapon.</p>
<h3 id="magic-enh-brawling_weapon-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/feat/improved_trip">Improved Trip</Link>, <Link to="/spell/guidance">guidance</Link>; <strong>Price</strong> -</p>
<blockquote>
<p><em>See also: <Link to="/magic-enh/brawling_armor">brawling armor enhancement</Link></em></p>
</blockquote>
</>};
const _breaking = {title: "Breaking", jsx: <><h2 id="magic-enh-breaking-breaking">Breaking</h2>
<p><strong>Sources</strong> <Link to="/source/dungeoneers_handbook">Dungeoneer's Handbook pg. 28</Link><br/><strong>Aura</strong> faint evocation; <strong>CL</strong> 5th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Upon command, a breaking weapon deals an extra 2d6 points of damage against inanimate objects and crystalline creatures on a successful hit and ignores the hardness of objects with a hardness of 5 or lower. When used against a crystalline creature, the damage from this effect does not stack with <Link to="/magic-enh/bane">bane</Link> or similar weapon special abilities. This effect remains until another command is given.</p>
<h3 id="magic-enh-breaking-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/break">break</Link> or <Link to="/spell/shatter">shatter</Link>; <strong>Price</strong> -</p>
</>};
const _called = {title: "Called", jsx: <><h2 id="magic-enh-called-called">Called</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 137</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 9th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A called weapon can be teleported to the wielder's hand as a swift action that does not provoke attacks of opportunity, even if the weapon is in the possession of another creature. This ability has a maximum range of 100 feet, and effects that block teleportation prevent the return of a called weapon. A called weapon must be in a creature's possession for at least 24 hours for this ability to function.</p>
<h3 id="magic-enh-called-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/teleport">teleport</Link>; <strong>Price</strong> -</p>
</>};
const _catalytic = {title: "Catalytic", jsx: <><h2 id="magic-enh-catalytic-catalytic">Catalytic</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 177</Link><br/><strong>Aura</strong> strong evocation; <strong>CL</strong> 12th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This ability can be placed only on a <Link to="/magic-enh/corrosive">corrosive</Link> or <Link to="/magic-enh/corrosive_burst">corrosive burst</Link> weapon. When the wielder of a catalytic weapon hits a creature, the weapon triggers a devastating chemical reaction that burns the struck creature. The creature struck must succeed at a DC 15 Fortitude save, or take 1d6 points of acid damage at the start of its turn for 1d4 rounds. Successive hits with the catalytic weapon increase the duration but don't add to the damage. The creature can attempt to neutralize the reaction as a full-round action as if it were <Link to="/rule/catch_on_fire">on fire</Link> (including bonuses for dropping and rolling on the ground or jumping into water). Anyone who hits a creature subject to this chemical reaction with a natural weapon or unarmed strike takes 1d6 points of acid damage.</p>
<h3 id="magic-enh-catalytic-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/acid_arrow">acid arrow</Link>; <strong>Price</strong> -</p>
</>};
const _compassionate = {title: "Compassionate", jsx: <><h2 id="magic-enh-compassionate-compassionate">Compassionate</h2>
<p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 30</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 7th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A compassionate weapon has the power to save a foe from the brink of death. When a successful hit from a compassionate weapon would bring a creature to -1 or fewer hit points, that creature is automatically <Link to="/misc/stabilize">stabilized</Link>. This ability can be suppressed at will as a free action.</p>
<h3 id="magic-enh-compassionate-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/stabilize">stabilize</Link>; <strong>Price</strong> -</p>
</>};
const _conductive = {title: "Conductive", jsx: <><h2 id="magic-enh-conductive-conductive">Conductive</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 137</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 286</Link><br/><strong>Aura</strong> moderate necromancy; <strong>CL</strong> 8th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A conductive weapon is able to channel the energy of a spell-like or supernatural ability that relies on a melee or ranged touch attack to hit its target (such as from a cleric's domain granted power, sorcerer's bloodline power, oracle's mystery revelation, or wizard's arcane school power). When the wielder makes a successful attack of the appropriate type, he may choose to expend two uses of his magical ability to channel it through the weapon to the struck opponent, which suffers the effects of both the weapon attack and the special ability. (If the wielder has unlimited uses of a special ability, she may channel through the weapon every round.) For example, a paladin who strikes an undead opponent with her conductive greatsword can expend two uses of her <Link to="/ability/lay_on_hands">lay on hands</Link> ability (a supernatural melee touch attack) to deal both greatsword damage and damage from one use of lay on hands. A given character can use this weapon special ability only once per round (even if she has several conductive weapons), and the power works only with magical abilities of the same type as the weapon (melee or ranged).</p>
<h3 id="magic-enh-conductive-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/spectral_hand">spectral hand</Link>; <strong>Price</strong> -</p>
</>};
const _confounding = {title: "Confounding", jsx: <><h2 id="magic-enh-confounding-confounding">Confounding</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 212</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>When the wielder confirms a critical hit with a confounding weapon, she can spend 1 panache point to attempt a combat maneuver to <Link to="/rule/disarm">disarm</Link>, <Link to="/rule/reposition">reposition</Link>, <Link to="/rule/sunder">sunder</Link>, or <Link to="/rule/trip">trip</Link> the target as an immediate action, gaining an enhancement bonus on the combat maneuver check equal to the enhancement bonus of the confounding weapon. This combat maneuver does not provoke an attack of opportunity. The wielder can't use panache gained by confirming the critical hit to activate this ability.</p>
<h3 id="magic-enh-confounding-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/eagles_splendor">eagle's splendor</Link>; <strong>Price</strong> -</p>
</>};
const _corrosive = {title: "Corrosive", jsx: <><h2 id="magic-enh-corrosive-corrosive">Corrosive</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 138</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 287</Link><br/><strong>Aura</strong> moderate evocation; <strong>CL</strong> 10th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Upon command, a corrosive weapon becomes slick with acid that deals an extra 1d6 points of acid damage on a successful hit. The acid does not harm the wielder. The effect remains until another command is given.</p>
<h3 id="magic-enh-corrosive-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/acid_arrow">acid arrow</Link>; <strong>Price</strong> -</p>
</>};
const _countering = {title: "Countering", jsx: <><h2 id="magic-enh-countering-countering">Countering</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 138</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A countering weapon gives its wielder a +2 bonus to his combat maneuver defense against combat maneuvers made to <Link to="/rule/disarm">disarm</Link> or <Link to="/rule/sunder">sunder</Link> this weapon. If the attempt fails, the wielder can immediately attempt the same maneuver against the opponent without provoking attacks of opportunity. The wielder never risks dropping his weapon with a failed disarm combat maneuver when counterattacking in this manner. This ability can be used even if the attacker is not within the wielder's reach. Countering can only be placed on melee weapons.</p>
<h3 id="magic-enh-countering-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/cats_grace">cat's grace</Link>; <strong>Price</strong> -</p>
</>};
const _courageous = {title: "Courageous", jsx: <><h2 id="magic-enh-courageous-courageous">Courageous</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 138</Link><br/><strong>Aura</strong> faint enchantment; <strong>CL</strong> 3rd<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This special ability can only be added to a melee weapon. A courageous weapon fortifies the wielder's courage and morale in battle. The wielder gains a morale bonus on saving throws against fear equal to the weapon's enhancement bonus. In addition, any morale bonus on saving throws against fear the wielder gains from any other source is increased by half the weapon's enhancement bonus (minimum 1).</p>
<h3 id="magic-enh-courageous-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/heroism">heroism</Link>, <Link to="/spell/remove_fear">remove fear</Link>; <strong>Price</strong> -</p>
</>};
const _cruel = {title: "Cruel", jsx: <><h2 id="magic-enh-cruel-cruel">Cruel</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 138</Link>, <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 124</Link><br/><strong>Aura</strong> faint necromancy; <strong>CL</strong> 5th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>When the wielder strikes a creature that is <Link to="/misc/frightened">frightened</Link>, <Link to="/misc/shaken">shaken</Link>, or <Link to="/misc/panicked">panicked</Link> with a cruel weapon, that creature becomes <Link to="/misc/sickened">sickened</Link> for 1 round. When the wielder uses the weapon to knock unconscious or kill a creature, he gains 5 <Link to="/rule/temporary_hit_points">temporary hit points</Link> that last for 10 minutes.</p>
<h3 id="magic-enh-cruel-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/cause_fear">cause fear</Link>, <Link to="/spell/death_knell">death knell</Link>; <strong>Price</strong> -</p>
</>};
const _cunning = {title: "Cunning", jsx: <><h2 id="magic-enh-cunning-cunning">Cunning</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 138</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 287</Link><br/><strong>Aura</strong> moderate divination; <strong>CL</strong> 6th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This special ability allows a weapon to find chinks in a foe's defenses using the wielder's knowledge of the target. Whenever the weapon's attack is a critical threat, the wielder gains a +4 bonus on the confirmation roll if she has 5 or more ranks in a Knowledge skill that would be used to identify the creature's type, or a +6 bonus instead if she has 15 or more ranks.</p>
<h3 id="magic-enh-cunning-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/true_strike">true strike</Link>; <strong>Price</strong> -</p>
</>};
const _dazzling_radiance = {title: "Dazzling Radiance", jsx: <><h2 id="magic-enh-dazzling_radiance-dazzling-radiance">Dazzling Radiance</h2>
<p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox pg. 24</Link><br/><strong>Aura</strong> moderate illusion; <strong>CL</strong> 7th<br/><strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This special weapon ability can be placed on only melee weapons. When a character wielding a dazzling radiance weapon uses the <Link to="/feat/dazzling_display">Dazzling Display</Link> feat, the weapon flashes in a burst of bright color. All creatures within 15 feet of the wielder who can see the display must attempt a DC 17 Fortitude save. Those who fail are <Link to="/misc/blinded">blinded</Link> for 2 rounds and <Link to="/misc/dazzled">dazzled</Link> for an additional 1d4 rounds; those who succeed are instead dazzled for 1d4 rounds.</p>
<h3 id="magic-enh-dazzling_radiance-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/color_spray">color spray</Link>; <strong>Price</strong> -</p>
</>};
const _deadly = {title: "Deadly", jsx: <><h2 id="magic-enh-deadly-deadly">Deadly</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 139</Link>, <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 124</Link><br/><strong>Aura</strong> faint necromancy; <strong>CL</strong> 5th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This special ability can only be placed on melee weapons that normally deal nonlethal damage, such as <Link to="/eq-weapon/whip">whips</Link> and <Link to="/eq-weapon/sap">saps</Link>. All damage a deadly weapon deals is normal (lethal) damage. A whip (or similar weapon that is not normally able to damage creatures with armor or natural armor bonuses) with this special ability deals damage even to creatures with armor or natural armor. On command, the weapon suppresses this ability until the wielder commands it to resume.</p>
<h3 id="magic-enh-deadly-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/inflict_light_wounds">inflict light wounds</Link>; <strong>Price</strong> -</p>
</>};
const _debilitating = {title: "Debilitating", jsx: <><h2 id="magic-enh-debilitating-debilitating">Debilitating</h2>
<p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 30</Link><br/><strong>Aura</strong> moderate necromancy; <strong>CL</strong> 7th<br/><strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A debilitating weapon has wicked ridges and gleams maliciously in any amount of light. Whenever a debilitating weapon is used to attack an opponent that is denied its Dexterity bonus to AC and hits, that opponent takes a -1 penalty on attack rolls or to its AC for 1 round (wielder's choice). Any creature that is immune to <Link to="/ability/sneak_attack">sneak attacks</Link> is immune to this penalty, and any item or ability that protects a creature from critical hits also protects a creature from the penalties imposed by a debilitating weapon. Multiple hits from multiple debilitating weapons in the same round do not increase the penalty or its duration.</p>
<p>If the wielder has the debilitating injury class ability, this special ability increases the penalty applied by the bewildered or disoriented effects by 1.</p>
<h3 id="magic-enh-debilitating-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/bestow_curse">bestow curse</Link>, creator must have 5 ranks in Heal; <strong>Price</strong> -</p>
</>};
const _deceptive = {title: "Deceptive", jsx: <><h2 id="magic-enh-deceptive-deceptive">Deceptive</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_society_primer">Pathfinder Society Primer pg. 14</Link><br/><strong>Aura</strong> moderate illusion; <strong>CL</strong> 9th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A deceptive weapon's shape blurs and appears to bend unpredictably. When the weapon is in hand, the wielder gains a bonus on Bluff checks to <Link to="/rule/feint">feint</Link> equal to the enhancement bonus of the weapon. In addition, when the wielder successfully confirms a critical hit with a deceptive weapon against an opponent, she can attempt to feint against that opponent as an immediate action.</p>
<h3 id="magic-enh-deceptive-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/dazzling_blade">dazzling blade</Link>; <strong>Price</strong> -</p>
</>};
const _defending = {title: "Defending", jsx: <><h2 id="magic-enh-defending-defending">Defending</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 139</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 469</Link><br/><strong>Aura</strong> moderate abjuration; <strong>CL</strong> 8th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A defending weapon allows the wielder to transfer some or all of the weapon's enhancement bonus to his AC as a bonus that stacks with all others. As a free action, the wielder chooses how to allocate the weapon's enhancement bonus at the start of his turn before using the weapon, and the bonus to AC lasts until his next turn. This ability can only be placed on melee weapons.</p>
<h3 id="magic-enh-defending-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/shield">shield</Link> or <Link to="/spell/shield_of_faith">shield of faith</Link>; <strong>Price</strong> -</p>
</>};
const _disjoining = {title: "Disjoining", jsx: <><h2 id="magic-enh-disjoining-disjoining">Disjoining</h2>
<p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 143</Link><br/><strong>Aura</strong> moderate necromancy; <strong>CL</strong> 7th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>These weapons were first created by deities and given to mortals so that they could combat mythic foes. When the wielder confirms a critical hit against a mythic creature with a disjoining weapon, the target loses the ability to expend its mythic power for 1d4 rounds. A mythic creature wielding a disjoining weapon loses the ability to expend uses of mythic power for as long as he wields the weapon. Only melee weapons can have this ability.</p>
<h3 id="magic-enh-disjoining-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/feat/mythic_crafter">Mythic Crafter</Link>, <Link to="/spell/mythic_severance">mythic severance</Link>; <strong>Price</strong> -</p>
</>};
const _dispelling = {title: "Dispelling", jsx: <><h2 id="magic-enh-dispelling-dispelling">Dispelling</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 140</Link><br/><strong>Aura</strong> strong abjuration; <strong>CL</strong> 10th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A dispelling weapon functions like a <Link to="/magic-enh/spell_storing">spell-storing</Link> weapon, but it may only store <em>dispel magic;</em> however, the caster level check to dispel gains an additional bonus equal to the weapon's enhancement bonus. This bonus also applies to a magus's <Link to="/arcana/dispelling_strike">dispelling strike</Link> arcana or a barbarian's <Link to="/ragepower/spell_sunder">spell sunder</Link> or <Link to="/ragepower/sunder_enchantment">sunder enchantment</Link> combat maneuver check.</p>
<h3 id="magic-enh-dispelling-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/dispel_magic">dispel magic</Link>, creator must be a caster of at least 10th level; <strong>Price</strong> -</p>
</>};
const _distracting = {title: "Distracting", jsx: <><h2 id="magic-enh-distracting-distracting">Distracting</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 213</Link><br/><strong>Aura</strong> faint enchantment; <strong>CL</strong> 5th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Weapons with this special ability cause foes struck by them to have difficulty controlling their magic. Any time a creature that has been struck by a distracting weapon would have to succeed at a <Link to="/rule/concentration">concentration</Link> check to complete a spell or use a special ability or item, the DC of that check increases by 5. This distraction lasts for 1 minute. Once a distracting weapon affects a creature in this way, that creature can't be affected by a distracting effect for 24 hours, though it can be affected by a greater distracting effect.</p>
<h3 id="magic-enh-distracting-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/qualm">qualm</Link>; <strong>Price</strong> -</p>
</>};
const _drowscourge = {title: "Drowscourge", jsx: <><h2 id="magic-enh-drowscourge-drowscourge">Drowscourge</h2>
<p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 59</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 8th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Invented by the <Link to="/rule/lantern_bearers">Lantern Bearers</Link>, this enhancement can be added to a magic weapon with at least a +1 bonus. Against <Link to="/monster/drider">driders</Link> and creatures with the drow subtype, the weapon's enhancement bonus is +1 better. The bearer is able to detect drow once per day (similar to <Link to="/spell/detect_animals_or_plants">detect animals or plants</Link>) and gain darkvision (as the spell) once per day.</p>
<h3 id="magic-enh-drowscourge-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/darkvision">darkvision</Link>, <Link to="/spell/detect_evil">detect evil</Link>, <Link to="/spell/summon_monster_i">summon monster I</Link>; <strong>Price</strong> -</p>
</>};
const _dueling_psfg = {title: "Dueling (PSFG)", jsx: <><h2 id="magic-enh-dueling_psfg-dueling-psfg">Dueling (PSFG)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_society_field_guide">Pathfinder Society Field Guide pg. 50</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 7th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A dueling weapon bears magical enhancements that makes it particularly effective at performing certain combat maneuvers. When a dueling weapon is used to perform a combat maneuver that utilizes the weapon only, it grants a luck bonus equal to twice its enhancement bonus on the CMB check made to carry out the maneuver. The dueling weapon also grants this same luck bonus to the wielder's CMD score against these types of combat maneuvers. These combat maneuvers include <Link to="/rule/disarm">disarm</Link> and <Link to="/rule/trip">trip</Link> maneuvers, but not <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/grapple">grapple</Link>, or <Link to="/rule/overrun">overrun</Link> maneuvers. If you're using the additional combat maneuvers, this also includes any <Link to="/rule/dirty_trick">dirty trick</Link> maneuvers that utilize the weapon, as well as <Link to="/rule/reposition">reposition</Link> combat maneuvers, but not <Link to="/rule/drag">drag</Link> or <Link to="/rule/steal">steal</Link> combat maneuvers. Note that this luck bonus stacks with the weapon's enhancement bonus, which in and of itself adds to CMB checks normally.</p>
<h3 id="magic-enh-dueling_psfg-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/cats_grace">cat's grace</Link>; <strong>Price</strong> -</p>
<blockquote>
<p><em>See also: <Link to="/magic-enh/dueling">dueling enhancement</Link></em></p>
</blockquote>
</>};
const _fate_stealing = {title: "Fate-Stealing", jsx: <><h2 id="magic-enh-fate_stealing-fate-stealing">Fate-Stealing</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 214</Link><br/><strong>Aura</strong> faint necromancy; <strong>CL</strong> 5th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This special ability can be placed only on melee weapons. When a fate-stealing weapon strikes a creature that possesses either grit or panache, the wielder can steal 1 grit point or panache point as a swift action. When the wielder steals a grit or panache point, she can regain 1 grit point or 1 panache point (if the wielder has any). The wielder can use a foe's grit to restore her own panache, or use a foe's panache to restore her own grit.</p>
<p>If the wielder attempts to use this ability against a foe that isn't a grit or panache user, or that currently has no points of grit or panache remaining, the wielder doesn't expend an action, and the attempt fails.</p>
<h3 id="magic-enh-fate_stealing-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/vampiric_touch">vampiric touch</Link>; <strong>Price</strong> -</p>
</>};
const _fervent = {title: "Fervent", jsx: <><h2 id="magic-enh-fervent-fervent">Fervent</h2>
<p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns pg. 30</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 8th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A fervent weapon thrums with the divine power of a specific deity or set of deities. If the wielder is an adherent of the deity or deities, she gains several benefits. First, the wielder gains a +4 insight bonus on Bluff, Disguise, and Sleight of Hand checks to conceal the weapon from members of other religions. On a successful hit against a <Link to="/rule/flat_footed">flat-footed</Link> target of a different religion, the target must succeed at DC 13 Will save or be <Link to="/misc/shaken">shaken</Link> for 1 minute. Finally, the wielder receives a +2 bonus to confirm critical hits against members of other religions.</p>
<p>The creator of a fervent weapon must be within one step of the religion to be attuned to the weapon, along either the lawful/chaotic axis or the good/evil axis. The target religion must be determined at the weapon's creation and cannot be altered.</p>
<h3 id="magic-enh-fervent-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/align_weapon">align weapon</Link>; <strong>Price</strong> -</p>
</>};
const _flamboyant = {title: "Flamboyant", jsx: <><h2 id="magic-enh-flamboyant-flamboyant">Flamboyant</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 214</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 8th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This special ability can be placed only on one-handed or light piercing melee weapons. A flamboyant weapon has its own magical reservoir of panache that its wielder can spend to use her deeds. Usually this panache is stored within a jewel or other adornment. This reservoir holds 1 panache point, which is refreshed at the start of each day.</p>
<p>Whether or not the wielder of a flamboyant weapon has any deeds, she can always spend 1 panache point from the flamboyant weapon to reroll an attack made with it that missed due to rolling a natural 1. When the wielder does so, she must take the second result, even if it also misses.</p>
<h3 id="magic-enh-flamboyant-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/heroism">heroism</Link>, creator must be a panache user; <strong>Price</strong> -</p>
</>};
const _flaming = {title: "Flaming", jsx: <><h2 id="magic-enh-flaming-flaming">Flaming</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 141</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 469</Link><br/><strong>Aura</strong> moderate evocation; <strong>CL</strong> 10th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Upon command, a flaming weapon is sheathed in fire that deals an extra 1d6 points of fire damage on a successful hit. The fire does not harm the wielder. The effect remains until another command is given.</p>
<h3 id="magic-enh-flaming-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link> and <Link to="/spell/fireball">fireball</Link>, <Link to="/spell/flame_blade">flame blade</Link>, or <Link to="/spell/flame_strike">flame strike</Link>; <strong>Price</strong> -</p>
</>};
const _fortuitous = {title: "Fortuitous", jsx: <><h2 id="magic-enh-fortuitous-fortuitous">Fortuitous</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 214</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 8th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This special ability can be placed only on melee weapons. A fortuitous weapon grants the wielder more attacks of opportunity. Once per round, when the wielder of a fortuitous weapon hits with an attack of opportunity, he can make a second attack of opportunity with this weapon against that foe at a -5 penalty.</p>
<h3 id="magic-enh-fortuitous-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/haste">haste</Link>; <strong>Price</strong> -</p>
</>};
const _frost = {title: "Frost", jsx: <><h2 id="magic-enh-frost-frost">Frost</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 142</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 469</Link><br/><strong>Aura</strong> moderate evocation; <strong>CL</strong> 8th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Upon command, a frost weapon is sheathed in a terrible, icy cold that deals an extra 1d6 points of cold damage on a successful hit. The cold does not harm the wielder. The effect remains until another command is given.</p>
<h3 id="magic-enh-frost-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/chill_metal">chill metal</Link> or <Link to="/spell/ice_storm">ice storm</Link>; <strong>Price</strong> -</p>
</>};
const _furious = {title: "Furious", jsx: <><h2 id="magic-enh-furious-furious">Furious</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 142</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 288</Link><br/><strong>Aura</strong> moderate enchantment; <strong>CL</strong> 8th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This special ability can only be placed on melee weapons. A furious weapon serves as a focus for its wielder's anger. When the wielder is raging or under the effect of a <em>rage</em> spell, the weapon's enhancement bonus is +2 better than normal. If the wielder has a rage power that gives a skill bonus while raging (such as <Link to="/ragepower/raging_climber">raging climber</Link>, <Link to="/ragepower/raging_leaper">raging leaper</Link>, or <Link to="/ragepower/raging_swimmer">raging swimmer</Link>), the wielder gains an enhancement bonus to that skill whenever the weapon is wielded or held in her hand, even when she is not raging. This bonus is equal to the enhancement bonus of the weapon (and also includes the +2 if the wielder is raging).</p>
<h3 id="magic-enh-furious-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/rage">rage</Link>; <strong>Price</strong> -</p>
</>};
const _ghost_touch_weapon = {title: "Ghost Touch (weapon)", jsx: <><h2 id="magic-enh-ghost_touch_weapon-ghost-touch">Ghost Touch</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 142</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 469</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 9th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A ghost touch weapon deals damage normally against incorporeal creatures, regardless of its bonus. An incorporeal creature's 50% reduction in damage from corporeal sources does not apply to attacks made against it with ghost touch weapons. The weapon can be picked up and moved by an incorporeal creature at any time. A manifesting ghost can wield the weapon against corporeal foes. Essentially, a ghost touch weapon counts as both corporeal or incorporeal. This special ability can only be placed on melee weapons and ammunition.</p>
<h3 id="magic-enh-ghost_touch_weapon-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/plane_shift">plane shift</Link>; <strong>Price</strong> -</p>
<p>See also: <Link to="/magic-enh/ghost_touch_armor">ghost touch armor enhancement</Link></p>
</>};
const _grayflame = {title: "Grayflame", jsx: <><h2 id="magic-enh-grayflame-grayflame">Grayflame</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 142</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 288</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 6th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This weapon responds to <Link to="/ability/channel_energy">channeled positive and negative energy</Link>. When the wielder spends a swift action to channel energy through the weapon, it ignites with a strange gray flame that sheds light as a <Link to="/eq-misc/torch">torch</Link>, increases the weapon's enhancement bonus by +1, and deals +1d6 damage (as the divine power from <Link to="/spell/flame_strike">flame strike</Link>) to creatures struck by the weapon. This flame lasts for 1 round for every d6 of damage or healing the channeling normally provides. When charged with positive energy, the flame is a silvery gray, good creatures are immune to the weapon's extra damage, and the weapon counts as a good and silver weapon for the purpose of bypassing damage reduction. When charged with negative energy, the flame is an ashen gray, evil creatures are immune to the weapon's extra damage, and the weapon counts as an evil and cold iron weapon for the purpose of bypassing damage reduction. This special ability can only be placed on melee weapons.</p>
<h3 id="magic-enh-grayflame-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/feat/channel_smite">Channel Smite</Link>, <Link to="/spell/align_weapon">align weapon</Link>; <strong>Price</strong> -</p>
</>};
const _grounding = {title: "Grounding", jsx: <><h2 id="magic-enh-grounding-grounding">Grounding</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 143</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 5th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This special ability can only be placed on melee weapons. A grounding weapon can safely touch electrically charged surfaces without harm to its wielder. When used against a creature of the air subtype, it deals an extra 1d6 points of damage. The wielder of a grounding weapon receives a +2 competence bonus on saving throws against air- and electricity-based effects, and the weapon itself is immune to electricity damage.</p>
<h3 id="magic-enh-grounding-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/shocking_grasp">shocking grasp</Link>; <strong>Price</strong> -</p>
</>};
const _growing = {title: "Growing", jsx: <><h2 id="magic-enh-growing-growing">Growing</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 26</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 6th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This special ability can be placed only on melee weapons. Once per day, a growing weapon is able to grow by <Link to="/misc/one_size_category">one size category</Link>, dealing damage as appropriate for its new size and allowing its wielder to affect creatures one size larger than normal with combat maneuvers limited by size. The wielder is able to use the weapon normally without penalty despite its increased size. The weapon remains at its increased size for 10 minutes.</p>
<h3 id="magic-enh-growing-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/enlarge_person">enlarge person</Link>; <strong>Price</strong> -</p>
</>};
const _guardian = {title: "Guardian", jsx: <><h2 id="magic-enh-guardian-guardian">Guardian</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 143</Link>, <Link to="/source/pathfinder_society_field_guide">Pathfinder Society Field Guide pg. 51</Link><br/><strong>Aura</strong> moderate abjuration; <strong>CL</strong> 8th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This special ability can only be placed on melee weapons. A guardian weapon allows the wielder to transfer some or all of the weapon's enhancement bonus to his saving throws as a bonus that stacks with all others. As a free action, the wielder chooses how to allocate the weapon's enhancement bonus at the start of his turn before using the weapon. The bonus on saving throws lasts until his next turn. Only the weapon's own enhancement bonus can be sacrificed, not any enhancement bonus provided by other effects such as a <Link to="/spell/greater_magic_weapon">greater magic weapon</Link> spell. However, the total of such effects is still diminished by the amount allocated to improving saving throws.</p>
<p>If a weapon has both the <Link to="/magic-enh/defending">defending</Link> and guardian abilities, allocating a single point of enhancement bonus increases either AC or saving throws, but not both.</p>
<h3 id="magic-enh-guardian-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/resistance">resistance</Link>; <strong>Price</strong> -</p>
</>};
const _guided = {title: "Guided", jsx: <><h2 id="magic-enh-guided-guided">Guided</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_10_a_history_of_ashes">Pathfinder #10: A History of Ashes pg. 22</Link><br/><strong>Aura</strong> moderate evocation; <strong>CL</strong> 7th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A weapon with the guided property allows its wielder to use his instinct when striking blows with it. Attacks from a guided weapon generally don't strike hard, but they strike at precisely the right moment to maximize damage if in the hands of a particularly wise wielder. A character who attacks with a guided weapon modifies his attack rolls and weapon damage rolls with his Wisdom modifier, not his Strength modifier. This modifier to damage is not adjusted for two-handed weapons or off-hand weapons - it always remains equal to the wielder's Wisdom modifier. A guided weapon may be wielded as a normal weapon, using Strength to modify attack and damage rolls, but this goes against the weapon's nature and imparts a -2 penalty on all attack rolls made in this manner.</p>
<h3 id="magic-enh-guided-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/spiritual_weapon">spiritual weapon</Link>; <strong>Price</strong> -</p>
</>};
const _heartseeker = {title: "Heartseeker", jsx: <><h2 id="magic-enh-heartseeker-heartseeker">Heartseeker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 143</Link><br/><strong>Aura</strong> moderate necromancy; <strong>CL</strong> 7th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This special ability can only be placed on melee weapons. A heartseeker weapon is drawn unerringly toward beating hearts. A heartseeker weapon ignores the miss chance for <Link to="/rule/concealment">concealment</Link> against most living targets, though the attack must still target the proper square. This special ability does not apply against aberrations, oozes, plants, outsiders with the elemental subtype, or any creature specifically noted to lack a heart.</p>
<h3 id="magic-enh-heartseeker-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/death_knell">death knell</Link>; <strong>Price</strong> -</p>
</>};
const _huntsman = {title: "Huntsman", jsx: <><h2 id="magic-enh-huntsman-huntsman">Huntsman</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 143</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 288</Link><br/><strong>Aura</strong> moderate divination; <strong>CL</strong> 7th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A huntsman weapon helps its wielder locate and capture quarry. When the weapon is held in hand, the wielder gains the weapon's enhancement bonus on Survival checks made to track any creature the weapon has damaged in the past day. It also deals +1d6 points of damage to creatures the wielder has tracked with Survival in the past day.</p>
<h3 id="magic-enh-huntsman-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/detect_animals_or_plants">detect animals or plants</Link>; <strong>Price</strong> -</p>
</>};
const _injecting = {title: "Injecting", jsx: <><h2 id="magic-enh-injecting-injecting">Injecting</h2>
<p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil pg. 26</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 5th<br/><strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>Injecting weapons feature bulbous pommels and small grooves along their blades, allowing them to store and deliver poison. An injecting weapon can hold up to 3 doses of injury poison. As a swift action, the wielder of an injecting weapon can coat the weapon with 1 dose of one of the inserted poisons. Only bladed weapons can be made into injecting weapons. Adding a dose of poison to the reservoir is a full-round action.</p>
<h3 id="magic-enh-injecting-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/delay_poison">delay poison</Link>; <strong>Price</strong> -</p>
</>};
const _inspired = {title: "Inspired", jsx: <><h2 id="magic-enh-inspired-inspired">Inspired</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 214</Link><br/><strong>Aura</strong> moderate enchantment; <strong>CL</strong> 7th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This special ability can be placed only on simple weapons, <Link to="/eq-weapon/hand_crossbow">hand crossbows</Link>, <Link to="/eq-weapon/rapier">rapiers</Link>, <Link to="/eq-weapon/shortbow">shortbows</Link>, <Link to="/eq-weapon/short_sword">short swords</Link>, and <Link to="/eq-weapon/sword_cane">sword canes</Link>. In the hands of an <Link to="/class/investigator">investigator</Link>, an inspired weapon reduces the cost of using inspiration on attack rolls made with the weapon. The weapon's wielder needs to expend only one use of inspiration to augment his attack rolls with this weapon, as with the <Link to="/invtalent/combat_inspiration">combat inspiration</Link> investigator talent. If the wielder already has the combat inspiration talent, the wielder must still expend one use of inspiration, but in addition to adding the result of the inspiration roll to the attack roll, the investigator adds twice the result of the inspiration roll to the weapon's damage roll.</p>
<h3 id="magic-enh-inspired-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/good_hope">good hope</Link>; <strong>Price</strong> -</p>
</>};
const _jurist = {title: "Jurist", jsx: <><h2 id="magic-enh-jurist-jurist">Jurist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 144</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 288</Link><br/><strong>Aura</strong> faint transmutation; <strong>CL</strong> 4th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>When an <Link to="/class/inquisitor">inquisitor</Link> wielder uses her judgment class ability while wielding a jurist weapon, it grants her an enhancement bonus on her Perception checks and to CMD. The bonus is +1 on the first round of her judgment, and increases by +1 each round, to a maximum of +3 on the third and following rounds.</p>
<h3 id="magic-enh-jurist-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/owls_wisdom">owl's wisdom</Link>; <strong>Price</strong> -</p>
</>};
const _keen = {title: "Keen", jsx: <><h2 id="magic-enh-keen-keen">Keen</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 144</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 469</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 10th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This ability doubles the threat range of a weapon. Only piercing or slashing melee weapons can be keen. If you roll this special ability randomly for an inappropriate weapon, reroll. This benefit doesn't stack with any other effects that expand the threat range of a weapon (such as the <em>keen edge</em> spell or the <Link to="/feat/improved_critical">Improved Critical</Link> feat).</p>
<h3 id="magic-enh-keen-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/keen_edge">keen edge</Link>; <strong>Price</strong> -</p>
</>};
const _ki_focus = {title: "Ki Focus", jsx: <><h2 id="magic-enh-ki_focus-ki-focus">Ki Focus</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 144</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 469</Link><br/><strong>Aura</strong> moderate transmutation; <strong>CL</strong> 8th<br/><strong>Slot</strong> weapon quality; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>This special ability can be placed only on melee weapons. The magic weapon serves as a channel for the wielder's ki, allowing her to use her special ki attacks through the weapon as if they were unarmed attacks. These attacks include the monk's ki strike, quivering palm, and the <Link to="/feat/stunning_fist">Stunning Fist</Link> feat (including any condition that the monk can apply using this feat).</p>
<h3 id="magic-enh-ki_focus-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, creator must be a monk; <strong>Price</strong> -</p>
</>};
const _kinslayer = {title: "Kinslayer", jsx: <><h2 id="magic-enh-kinslayer-kinslayer">Kinslayer</h2>
<p><strong>Sources</strong> <Link to="/source/quests_and_campaigns">Quests and Campaigns pg. 30</Link><br/><strong>Aura</strong> moderate conjuration; <strong>CL</strong> 8th<br/><strong>Slot</strong> none; <strong>Price</strong> +1 bonus; <strong>Weight</strong> -</p>
<p>A kinslayer weapon is enhanced with enmity against all those born into the wielder's familial line. Against creatures related to the wielder, this weapon's enhancement bonus is +2 better than its actual bonus. It also deals an extra 2d6 points of damage against such creatures. This extra damage is not multiplied on a critical hit.</p>
<h3 id="magic-enh-kinslayer-construction">Construction</h3>
<p><strong>Requirements</strong> <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/spell/detect_relations">detect relations</Link>; <strong>Price</strong> -</p>
</>};
const _fortification_light = {..._fortification, title: "Fortification (light)"};
const _buoyant_light_armor = {..._bouyant, title: "Buoyant (light armor)"};
const _buoyant_medium_heavy_armor = {..._bouyant, title: "Buoyant (medium/heavy armor)"};
const _spell_resistance_13 = {..._spell_resistance, title: "Spell Resistance (13)"};
const _fortification_moderate = {..._fortification_light, title: "Fortification (moderate)"};
const _spell_resistance_15 = {..._spell_resistance, title: "Spell Resistance (15)"};
const _improved_aquadynamic = {..._aquadynamic, title: "Improved Aquadynamic"};
const _spell_resistance_17 = {..._spell_resistance, title: "Spell Resistance (17)"};
const _fortification_heavy = {..._fortification_light, title: "Fortification (heavy)"};
const _spell_resistance_19 = {..._spell_resistance, title: "Spell Resistance (19)"};
const _unbound = {..._righteous, title: "Unbound"};
const _unrighteous = {..._righteous, title: "Unrighteous"};
const _vigilant = {..._righteous, title: "Vigilant"};
const _greater_aquadynamic = {..._aquadynamic, title: "Greater Aquadynamic"};
const _buoyant_shield = {..._bouyant, title: "Buoyant (shield)"};
export default {not_found:_not_found,advancing_armor:_advancing_armor,balanced:_balanced,benevolent_armor:_benevolent_armor,billowing:_billowing,bitter:_bitter,bolstering:_bolstering,calming:_calming,champion:_champion,cocooning:_cocooning,crusading:_crusading,dastard:_dastard,deathless:_deathless,defiant:_defiant,evolving:_evolving,fortification:_fortification,grinding:_grinding,impervious_armor:_impervious_armor,mirrored:_mirrored,poisoning:_poisoning,resonating:_resonating,spell_storing_armor:_spell_storing_armor,spellsink:_spellsink,stanching:_stanching,terrain_striding:_terrain_striding,trapwarding:_trapwarding,vouchsafing:_vouchsafing,warding:_warding,withstanding:_withstanding,bouyant:_bouyant,cushioned:_cushioned,fitting:_fitting,poison_resistant:_poison_resistant,glamered:_glamered,mental_focus:_mental_focus,aquadynamic:_aquadynamic,jousting:_jousting,shadow:_shadow,slick:_slick,adamant:_adamant,bloodthirsty:_bloodthirsty,frosted:_frosted,ghost_spike:_ghost_spike,jarring:_jarring,mind_buttressing:_mind_buttressing,phantasmal:_phantasmal,rampaging:_rampaging,shadow_blending:_shadow_blending,spell_dodging:_spell_dodging,spell_resistance:_spell_resistance,steaming:_steaming,volcanic:_volcanic,burdenless:_burdenless,expeditious:_expeditious,amorphous:_amorphous,restful:_restful,cloudburst:_cloudburst,comfort:_comfort,corsair:_corsair,creeping:_creeping,deceiving:_deceiving,malevolent:_malevolent,rallying:_rallying,spirit_bonded:_spirit_bonded,locksmith:_locksmith,adhesive:_adhesive,spiteful:_spiteful,hosteling:_hosteling,radiant:_radiant,trackless:_trackless,arrow_collecting:_arrow_collecting,brawling:_brawling,cotraveling:_cotraveling,ghost_touch_armor:_ghost_touch_armor,invulnerability:_invulnerability,sensing:_sensing,titanic:_titanic,wild:_wild,phase_lurching:_phase_lurching,delving:_delving,putrid:_putrid,harmonizing:_harmonizing,radiant_flight:_radiant_flight,shadow_improved:_shadow_improved,slick_improved:_slick_improved,venom_eating:_venom_eating,denying:_denying,energy_resistance:_energy_resistance,martyring:_martyring,dread_wing:_dread_wing,unbowed:_unbowed,righteous:_righteous,determination:_determination,shadow_greater:_shadow_greater,slick_greater:_slick_greater,energy_resistance_improved:_energy_resistance_improved,etherealness:_etherealness,undead_controlling:_undead_controlling,energy_resistance_greater:_energy_resistance_greater,arrow_catching:_arrow_catching,assiduous:_assiduous,bashing:_bashing,blinding:_blinding,clangorous:_clangorous,folding:_folding,guarding:_guarding,heraldric:_heraldric,ramming:_ramming,rebounding:_rebounding,singing:_singing,spellrending:_spellrending,animated:_animated,arrow_deflection:_arrow_deflection,guarding_greater:_guarding_greater,jawbreaker:_jawbreaker,mastering:_mastering,merging:_merging,weeping:_weeping,wyrmsbreath:_wyrmsbreath,deflecting:_deflecting,bastion:_bastion,channeling:_channeling,reflecting:_reflecting,shrinking:_shrinking,agile:_agile,allying:_allying,answering:_answering,bane:_bane,benevolent:_benevolent,bewildering:_bewildering,blood_hunting:_blood_hunting,bloodsong:_bloodsong,brawling_weapon:_brawling_weapon,breaking:_breaking,called:_called,catalytic:_catalytic,compassionate:_compassionate,conductive:_conductive,confounding:_confounding,corrosive:_corrosive,countering:_countering,courageous:_courageous,cruel:_cruel,cunning:_cunning,dazzling_radiance:_dazzling_radiance,deadly:_deadly,debilitating:_debilitating,deceptive:_deceptive,defending:_defending,disjoining:_disjoining,dispelling:_dispelling,distracting:_distracting,drowscourge:_drowscourge,dueling_psfg:_dueling_psfg,fate_stealing:_fate_stealing,fervent:_fervent,flamboyant:_flamboyant,flaming:_flaming,fortuitous:_fortuitous,frost:_frost,furious:_furious,ghost_touch_weapon:_ghost_touch_weapon,grayflame:_grayflame,grounding:_grounding,growing:_growing,guardian:_guardian,guided:_guided,heartseeker:_heartseeker,huntsman:_huntsman,injecting:_injecting,inspired:_inspired,jurist:_jurist,keen:_keen,ki_focus:_ki_focus,kinslayer:_kinslayer,fortification_light:_fortification_light,buoyant_light_armor:_buoyant_light_armor,buoyant_medium_heavy_armor:_buoyant_medium_heavy_armor,spell_resistance_13:_spell_resistance_13,fortification_moderate:_fortification_moderate,spell_resistance_15:_spell_resistance_15,improved_aquadynamic:_improved_aquadynamic,spell_resistance_17:_spell_resistance_17,fortification_heavy:_fortification_heavy,spell_resistance_19:_spell_resistance_19,unbound:_unbound,unrighteous:_unrighteous,vigilant:_vigilant,greater_aquadynamic:_greater_aquadynamic,buoyant_shield:_buoyant_shield}