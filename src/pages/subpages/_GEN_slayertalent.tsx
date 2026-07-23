import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ByLevelPop from '../../components/ByLevelPop';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested slayer talent.</p>
</>};
const _sever_alignment = {title: "Sever Alignment", addenda: ["slayersneak"], jsx: <><p><strong>Sources</strong> <Link to="/source/distant_realms">Distant Realms pg. 13</Link></p>
<Ability id="sever-alignment-su" icon={["armor-downgrade"]}>
<Pair single id="sever-alignment-su">Sever Alignment (Su)</Pair>
<Pair title="Prerequisites"><Link to="/slayertalent/aligned_sneak_attack">Aligned sneak attack</Link></Pair>
<Pair title="Ability">When making a sneak attack against an opponent with an alignment subtype, a slayer with this talent can forgo her sneak attack damage to scramble the creature's metaphysical nature. If the attack succeeds, the slayer deals weapon damage as normal, and the target must succeed at a Fortitude save (DC = 10 + half the slayer's level + the slayer's Intelligence modifier) or lose all damage reduction overcome by aligned weapons (such as DR 10/good), lose all <Link to="/umr/regeneration">regeneration</Link> overcome by aligned sources (such as regeneration 10 [good]).</Pair>
</Ability>
</>};
const _slowing_strike = {title: "Slowing Strike", addenda: ["slayersneak"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 53</Link></p>
<Ability id="slowing-strike-ex" icon={["armor-downgrade"]}>
<Pair single id="slowing-strike-ex">Slowing Strike (Ex)</Pair>
<Pair title="Ability"><p>An opponent damaged by the slayer's sneak attack has its speed halved for 1d4 rounds. A successful Fortitude saving throw negates this effect (DC = 10 + 1/2 of the slayer's level + the slayer's Intelligence modifier).</p>
<p>Against creatures with multiple types of movement, the slayer must choose which movement type to affect. If the slayer affects a creature's flight movement, its maneuverability is reduced by one step; if it's airborne at the time, it falls unless it succeeds at a DC 10 Fly check.</p>
<p>If the slayer targets a creature already affected by this ability, its speed and maneuverability are not further reduced; the slayer may either extend the duration of that effect by 1d4 rounds or choose another movement type to affect (keeping track of the duration of each affected movement separately).</p>
</Pair>
</Ability>
</>};
const _aligned_sneak_attack = {title: "Aligned Sneak Attack", jsx: <><p><strong>Sources</strong> <Link to="/source/distant_realms">Distant Realms pg. 13</Link></p>
<Ability id="aligned-sneak-attack-su" icon={["armor-downgrade"]}>
<Pair single id="aligned-sneak-attack-su">Aligned Sneak Attack (Su)</Pair>
<Pair title="Ability">When making a sneak attack against a creature that has damage reduction that can be overcome by weapons of a particular alignment (such as DR 5/good), the slayer's attack reduces that damage reduction by an amount equal to the number of sneak attack dice rolled until the end of the slayer's turn.</Pair>
</Ability>
</>};
const _deadly_range = {title: "Deadly Range", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 53</Link></p>
<Ability id="deadly-range-ex" icon={["upgrade"]}>
<Pair single id="deadly-range-ex">Deadly Range (Ex)</Pair>
<Pair title="Prerequisites">4th-level slayer</Pair>
<Pair title="Passive Ability">A slayer with this talent increases the range at which he can deal sneak attack damage by 10 feet.</Pair>
<Pair title="Special">A slayer can select this talent more than once; its effects stack.</Pair>
</Ability>
</>};
const _blood_reader = {title: "Blood Reader", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 21</Link></p>
<Ability id="blood-reader-ex" icon={["stairs-goal"]}>
<Pair single id="blood-reader-ex">Blood Reader (Ex)</Pair>
<Pair title="Ability">While able to see a <em>studied target,</em> a slayer with this talent knows exactly how many hit points his opponent has remaining. This only works against living targets.</Pair>
</Ability>
</>};
const _eternal_opposition = {title: "Eternal Opposition", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 18</Link></p>
<Ability id="eternal-opposition-ex" icon={["armor-upgrade"]}>
<Pair single id="eternal-opposition-ex">Eternal Opposition (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/race/samsaran">Samsaran</Link></Pair>
<Pair title="Passive Ability">While most imperial dragons, undead, and other long-enduring foes can count on outlasting their mortal adversaries, the samsaran slayer has pledged to oppose their machinations across all his lifetimes. When his <em>studied target</em> is of the dragon, fey, outsider, or undead type, the slayer gains a +2 insight bonus to his AC against its attacks and on saving throws against its abilities.</Pair>
</Ability>
</>};
const _jaguars_grace = {title: "Jaguar's Grace", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 4</Link></p>
<Ability id="jaguars-grace-ex" icon={["upgrade"]}>
<Pair single id="jaguars-grace-ex">Jaguar's Grace (Ex)</Pair>
<Pair title="Prerequisites">4th-level slayer</Pair>
<Pair title="Passive Ability">A slayer with this talent does not take the normal -4 penalty when dealing nonlethal damage using a weapon that normally deals lethal damage. Attacks made this way can apply nonlethal sneak attack damage.</Pair>
</Ability>
</>};
const _jaguars_pounce = {title: "Jaguar's Pounce", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 4</Link></p>
<Ability id="jaguars-pounce-ex" icon={["mailed-fist"]}>
<Pair single id="jaguars-pounce-ex">Jaguar's Pounce (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/slayertalent/jaguars_grace">Jaguar's grace</Link></Pair>
<Pair title="Immediate Action">When a slayer with this talent deals sneak attack damage, he can attempt a <Link to="/rule/disarm">disarm</Link> or <Link to="/rule/trip">trip</Link> combat maneuver as if the target were <Link to="/rule/flat_footed">flat-footed</Link> (losing its Dexterity bonus to CMD). This combat maneuver does not provoke attacks of opportunity.</Pair>
</Ability>
</>};
const _jaguars_protection = {title: "Jaguar's Protection", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 4</Link></p>
<Ability id="jaguars-protection-ex" icon={["shield-reflect"]}>
<Pair single id="jaguars-protection-ex">Jaguar's Protection (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/slayertalent/jaguars_pounce">Jaguar's pounce</Link></Pair>
<Pair title="Ability">When a slayer with this talent deals sneak attack damage, he draws the target's attention away from his allies. The affected enemy takes a -2 penalty on attack rolls made against anyone other than the slayer for 1 minute.</Pair>
</Ability>
</>};
const _mountainside_ambush = {title: "Mountainside Ambush", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 18</Link></p>
<Ability id="mountainside-ambush-ex" icon={["upgrade"]}>
<Pair single id="mountainside-ambush-ex" flavor="Fighting in the mountains of Zi Ha has trained samsaran slayers to strike the unwary with deadly attacks from above.">Mountainside Ambush (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/race/samsaran">Samsaran</Link></Pair>
<Pair title="Ability">If a slayer deals sneak attack damage to a creature that is unaware of his presence while he is standing on higher ground than his target, he does not have to roll sneak attack damage; instead, the sneak attack deals maximum damage. The samsaran must be standing on solid ground to use this ability.</Pair>
</Ability>
</>};
const _studied_ally = {title: "Studied Ally", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 21</Link></p>
<Ability id="studied-ally-ex" icon={["upgrade","shield-reflect"]}>
<Pair single id="studied-ally-ex">Studied Ally (Ex)</Pair>
<Pair title="Move-Equivalent Action">The slayer can study an ally or friendly creature he can see. The slayer gains a +1 bonus on checks and attack rolls to use the <Link to="/rule/aid_another_2">aid another</Link> action to help with that ally's skill checks, attacks, or AC. This bonus increases at the same rate as a slayer's <em>studied target</em> bonus.</Pair>
<Pair title="At 7th Level">A slayer can study an ally as a move or <strong className="hl">swift action</strong>.</Pair>
<Pair title="Special">A slayer's <em>studied ally</em> counts against the number of <em>studied targets</em> he can have active at once.</Pair>
</Ability>
</>};
const _castling = {title: "Castling", jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 9</Link></p>
<Ability id="castling-ex" icon={["armor-upgrade"]}>
<Pair single id="castling-ex">Castling (Ex)</Pair>
<Pair title="Passive Ability">The slayer treats soft cover granted by creatures of her size or larger as though it were <Link to="/rule/cover">cover</Link> instead. Cover the slayer gains from this talent does not allow her to attempt Stealth checks.</Pair>
</Ability>
</>};
const _catfolk_rogue_talent = {title: "Catfolk Rogue Talent", jsx: <><p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox pg. 22</Link></p>
<Ability id="catfolk-rogue-talent" icon={["stairs-goal"]}>
<Pair single id="catfolk-rogue-talent">Catfolk Rogue Talent</Pair>
<Pair title="Prerequisites"><Link to="/race/catfolk">Catfolk</Link></Pair>
<Pair title="Ability">A catfolk slayer can select one of the following catfolk <Link to="/ability/rogue_talents">rogue talents</Link> in place of a slayer talent: <Link to="/talent/deadly_scratch">deadly scratch</Link>, <Link to="/talent/graceful_faller">graceful faller</Link>, <Link to="/talent/nimble_climber">nimble climber</Link>, or <Link to="/talent/vicious_claws">vicious claws</Link>. Any talent effects based on rogue level use the slayer's class level. The slayer must fulfill any prerequisites.</Pair>
</Ability>
</>};
const _experience_across_ages = {title: "Experience Across Ages", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 18</Link></p>
<Ability id="experience-across-ages-ex" icon={["stairs-goal"]}>
<Pair single id="experience-across-ages-ex" flavor="A samsaran slayer can draw upon insights from his previous lifetimes to help identify a foe or recall a key piece of information.">Experience Across Ages (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/race/samsaran">Samsaran</Link></Pair>
<Pair title="Usage">1 time/day + 1 per five slayer levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action">The slayer can attempt a <Link to="/skill/knowledge">Knowledge</Link> check as if he had a number of ranks in the appropriate Knowledge skill equal to his slayer level.</Pair>
</Ability>
</>};
const _extra_earthcraft = {title: "Extra Earthcraft", jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 9</Link></p>
<Ability id="extra-earthcraft" icon={["upgrade"]}>
<Pair single id="extra-earthcraft">Extra Earthcraft</Pair>
<Pair title="Prerequisites"><Link to="/arc-rogue/earthshadow">Earthcraft</Link> ability</Pair>
<Pair title="Ability">The slayer gains 2 additional earthcraft points each day.</Pair>
</Ability>
</>};
const _foil_scrutiny = {title: "Foil Scrutiny", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 53</Link></p>
<Ability id="foil-scrutiny" icon={["upgrade","armor-upgrade"]}>
<Pair single id="foil-scrutiny">Foil Scrutiny</Pair>
<Pair title="Passive Ability">A slayer with this talent is able to obscure his thoughts and intentions. He gains a +2 bonus on all Bluff and Disguise checks, as well as on Will saving throws to resist mind-reading spells and effects (such as <Link to="/spell/detect_thoughts">detect thoughts</Link> and <Link to="/spell/discern_lies">discern lies</Link>).</Pair>
</Ability>
</>};
const _fortified_position = {title: "Fortified Position", jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 9</Link></p>
<Ability id="fortified-position-ex" icon={["armor-upgrade"]}>
<Pair single id="fortified-position-ex">Fortified Position (Ex)</Pair>
<Pair title="Passive Ability">Whenever the slayer gains a bonus on Reflex saves due to cover, she gains an equal bonus on Fortitude saves.</Pair>
</Ability>
</>};
const _graceful_athlete = {title: "Graceful Athlete", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 6</Link></p>
<Ability id="graceful-athlete" icon={["stairs-goal"]}>
<Pair single id="graceful-athlete">Graceful Athlete</Pair>
<Pair title="Ability">Gain <Link to="/feat/graceful_athlete">Graceful Athlete</Link> as a bonus feat. You must meet the prerequisites for the feat.</Pair>
</Ability>
</>};
const _inured_to_terror = {title: "Inured to Terror", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 18</Link></p>
<Ability id="inured-to-terror-ex" icon={["armor-upgrade"]}>
<Pair single id="inured-to-terror-ex" flavor="With their knowledge of the cyclical nature of existence, there are few experiences that can daunt samsaran slayers for long.">Inured to Terror (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/race/samsaran">Samsaran</Link></Pair>
<Pair title="Immediate Action">When a slayer fails a saving throw against a fear effect, he can attempt the saving throw a second time to reduce the severity of the effect from <Link to="/misc/panicked">panicked</Link> to <Link to="/misc/frightened">frightened</Link>, frightened to <Link to="/misc/shaken">shaken</Link>, or shaken to unaffected. Additionally, the DC of Intimidate checks to demoralize him increases by 2.</Pair>
</Ability>
</>};
const _mystic_veil = {title: "Mystic Veil", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 18</Link></p>
<Ability id="mystic-veil-sp" icon={["magic-swirl"]}>
<Pair single id="mystic-veil-sp" flavor="Samsaran slayers are adept at obscuring the passes of their mountain homes from intruders.">Mystic Veil (Sp)</Pair>
<Pair title="Prerequisites"><Link to="/race/samsaran">Samsaran</Link>, Intelligence 11+</Pair>
<Pair title="Usage">1 time/day per two slayer levels<ByLevelPop levels={[[2,1],[4,2],[6,3],[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">The slayer can cast <Link to="/spell/silent_image">silent image</Link> as a spell-like ability, using his slayer level as his caster level. The slayer uses his Intelligence modifier on <Link to="/rule/concentration">concentration</Link> checks when using this ability, and the DC to disbelieve the illusion is equal to 11 + the slayer's Intelligence modifier.</Pair>
</Ability>
</>};
const _one_of_those_faces = {title: "One of Those Faces", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 21</Link></p>
<Ability id="one-of-those-faces-sp" icon={["magic-swirl"]}>
<Pair single id="one-of-those-faces-sp">One of Those Faces (Sp)</Pair>
<Pair title="Ability">Each day, you can use <Link to="/spell/disguise_self">disguise self</Link> as a spell-like ability for up to 10 minutes per character level. This duration need not be continuous, but it must be used in 10-minute increments.</Pair>
<Pair title="Special">Once you have used this ability, whenever you use it for the next 24 hours you must take the same alternate appearance.</Pair>
</Ability>
</>};
const _poison_use = {title: "Poison Use", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 8</Link></p>
<Ability id="poison-use-ex" icon={["armor-upgrade"]}>
<Pair single id="poison-use-ex">Poison Use (Ex)</Pair>
<Pair title="Ability">The slayer is trained in the use of poison, and can't accidentally poison herself when applying poison to a weapon.</Pair>
</Ability>
</>};
const _toxin_training = {title: "Toxin Training", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 86</Link></p>
<Ability id="toxin-training-ex" icon={["armor-upgrade"]}>
<Pair single id="toxin-training-ex">Toxin Training (Ex)</Pair>
<Pair title="Prerequisites">4th-level slayer, <Link to="/slayertalent/poison_use">poison use</Link></Pair>
<Pair title="Passive Ability">The slayer builds resistance to certain poisons over time. Each time he chooses this talent, he chooses one ability score. He gains a +4 bonus on saving throws against poisons that deal damage to the chosen ability score.</Pair>
<Pair title="Special">The slayer can choose this talent multiple times. Each time he does, he chooses a new ability score and gains the bonus on saves against poisons that target that ability.</Pair>
</Ability>
</>};
const _focused_poison = {title: "Focused Poison", jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 13</Link></p>
<Ability id="focused-poison-ex" icon={["upgrade"]}>
<Pair single id="focused-poison-ex" flavor={<>The slayer can focus his poison delivery to be especially deadly to his <em>studied target.</em></>}>Focused Poison (Ex)</Pair>
<Pair title="Prerequisites">6th-level slayer, <Link to="/slayertalent/poison_use">poison use</Link></Pair>
<Pair title="Ability">When the slayer studies a target, he can immediately reduce the number of additional <em>studied targets</em> he can maintain. Reducing this number does not require an action. For each target reduced in this way, the DC of poisons used against his <em>studied target</em> increases by 1.</Pair>
</Ability>
</>};
const _ranger_combat_style = {title: "Ranger Combat Style", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 53</Link></p>
<Ability id="ranger-combat-style-ex" icon={["stairs-goal"]}>
<Pair single id="ranger-combat-style-ex">Ranger Combat Style (Ex)</Pair>
<Pair title="Ability">The slayer selects a ranger <Link to="/ability/combat_styles">combat style</Link> (such as archery or two-weapon combat) and gains a combat feat from the first feat list of that style. He can choose feats from his selected combat style, even if he does not have the normal prerequisites.</Pair>
<Pair title="At 6th Level">He may select this talent again and add the 6th-level ranger combat feats from his chosen style to the list.</Pair>
<Pair title="At 10th Level">He may select this talent again and add the 10th-level ranger combat feats from his chosen style to the list.</Pair>
</Ability>
</>};
const _recall_training = {title: "Recall Training", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 18</Link></p>
<Ability id="recall-training-ex" icon={["stairs-goal"]}>
<Pair single id="recall-training-ex" flavor="By calling on the memories of previous incarnations, a samsaran slayer can use martial techniques that transcend his usual capabilities.">Recall Training (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/race/samsaran">Samsaran</Link></Pair>
<Pair title="Move-Equivalent Action">Once per day, the slayer can gain the benefit of a <Link to="/main/combat_feat">combat feat</Link> he doesn't have. This effect lasts for 1 minute per slayer level he has. The slayer must meet all the feat's prerequisites.</Pair>
</Ability>
</>};
const _redirect_poison = {title: "Redirect Poison", jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 13</Link></p>
<Ability id="redirect-poison-ex" icon={["armor-upgrade","mailed-fist"]}>
<Pair single id="redirect-poison-ex" flavor="The slayer can divert poisoned attacks against him.">Redirect Poison (Ex)</Pair>
<Pair title="Immediate Action">When a creature unsuccessfully attacks the slayer with a poisoned weapon or a natural weapon that would poison him, the slayer can attempt to redirect the attack to a creature within his reach (including, possibly, the creature that unsuccessfully attacked the slayer). The slayer can make an attack roll against the creature to which he would redirect the poison. On a success, the poison is redirected to the target, and the target must attempt a saving throw against the poison as normal.</Pair>
<Pair title="Special">This attack only redirects the poison and does not otherwise damage the targeted creature. This ability cannot affect a creature that attacked the slayer with a poisoned natural weapon, but it can affect a creature that attacked him with a poisoned manufactured weapon.</Pair>
</Ability>
</>};
const _rogue_talent = {title: "Rogue Talent", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 53</Link></p>
<Ability id="rogue-talent" icon={["stairs-goal"]}>
<Pair single id="rogue-talent">Rogue Talent</Pair>
<Pair title="Ability"><p>A slayer can select one of the following <Link to="/ability/rogue_talents">rogue talents</Link> in place of a slayer talent: <Link to="/talent/bleeding_attack">bleeding attack</Link>&#42;, <Link to="/talent/camouflage">camouflage</Link>, <Link to="/talent/cloying_shades">cloying shades</Link>, <Link to="/talent/combat_trick">combat trick</Link>, <Link to="/talent/demand_attention">demand attention</Link>, <Link to="/talent/emboldening_strike">emboldening strike</Link>, <Link to="/talent/extinguishing_strike">extinguishing strike</Link>, <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/feint_from_shadows">feint from shadows</Link>, <Link to="/talent/finesse_rogue">finesse rogue</Link>, <Link to="/talent/firearm_training">firearm training</Link>, <Link to="/talent/focusing_attack">focusing attack</Link>, <Link to="/talent/gloom_magic">gloom magic</Link>, <Link to="/talent/greater_gloom_magic">greater gloom magic</Link>, <Link to="/talent/grit">grit</Link>, <Link to="/talent/hard_to_fool">hard to fool</Link>, <Link to="/talent/lasting_poison">lasting poison</Link>, <Link to="/talent/mien_of_despair">mien of despair</Link>, <Link to="/talent/obscuring_blow">obscuring blow</Link>, <Link to="/talent/poison_use">poison use</Link>, <Link to="/talent/powerful_sneak">powerful sneak</Link>, <Link to="/talent/rogue_crawl">rogue crawl</Link>, <Link to="/talent/shadow_duplicate">shadow duplicate</Link>, <Link to="/talent/shadows_chill">shadow's chill</Link>, <Link to="/talent/slow_reactions">slow reactions</Link>&#42;, <Link to="/talent/snap_shot">snap shot</Link>, <Link to="/talent/snipers_eye">sniper's eye</Link>, <Link to="/talent/surprise_attack">surprise attack</Link>, <Link to="/talent/swift_poison">swift poison</Link>, <Link to="/talent/terrain_mastery">terrain mastery</Link>, <Link to="/talent/trap_spotter">trap spotter</Link>, <Link to="/talent/umbral_gear">umbral gear</Link>, <Link to="/talent/underhanded_trick">underhanded trick</Link>, <Link to="/talent/unwitting_ally">unwitting ally</Link>, or <Link to="/talent/weapon_training">weapon training</Link>.</p>
<p>Any talent effects based on rogue level use the slayer's class level. If the rogue talent has a prerequisite, the slayer must meet the prerequisite before taking that rogue talent.</p>
<p>If the talent is marked with an asterisk (&#42;), the talent is considered a Primary Sneak Attack Talent (only one Primary Sneak Attack Talent can be applied to an individual attack, and the decision must be made before the attack roll is made).</p>
</Pair>
<Pair title="Special">This talent can be selected multiple times; each time, it grants the slayer a new rogue talent.</Pair>
</Ability>
</>};
const _scrying_familiarity = {title: "Scrying Familiarity", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 23</Link></p>
<Ability id="scrying-familiarity-ex" icon={["armor-upgrade","upgrade","rolling-dices"]}>
<Pair single id="scrying-familiarity-ex" flavor="You are well acquainted with scrying sensors.">Scrying Familiarity (Ex)</Pair>
<Pair title="Passive Ability">You can roll twice and take the better result on saving throws against divination (scrying) spells and effects, on Perception checks to notice scrying sensors, and on caster level checks to overcome spell resistance when you use a scrying spell or effect.</Pair>
<Pair title="Ability">If you notice a magical sensor, you can attempt a Stealth check opposed by the caster's caster level check to avoid being detected by the sensor.</Pair>
</Ability>
</>};
const _sticks_and_stones = {title: "Sticks and Stones", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 86</Link></p>
<Ability id="sticks-and-stones-ex" icon={["stairs-goal"]}>
<Pair single id="sticks-and-stones-ex">Sticks and Stones (Ex)</Pair>
<Pair title="Ability">The slayer gains <Link to="/feat/catch_off_guard">Catch Off-Guard</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _sunlight_strike = {title: "Sunlight Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 86</Link></p>
<Ability id="sunlight-strike-ex" icon={["armor-downgrade"]}>
<Pair single id="sunlight-strike-ex">Sunlight Strike (Ex)</Pair>
<Pair title="Swift Action">The slayer can reflect sunlight (or other sources of bright light) into the eyes of an adjacent target, causing it to gain the <Link to="/misc/dazzled">dazzled</Link> condition for 1 round.</Pair>
</Ability>
</>};
const _sure_footing = {title: "Sure Footing", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 86</Link></p>
<Ability id="sure-footing-ex" icon={["upgrade"]}>
<Pair single id="sure-footing-ex">Sure Footing (Ex)</Pair>
<Pair title="Passive Ability">The slayer gains a +5 bonus on Acrobatics checks to move on narrow surfaces and loose or uneven ground.</Pair>
</Ability>
</>};
const _trapfinding = {title: "Trapfinding", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 54</Link></p>
<Ability id="trapfinding" icon={["skills","stairs-goal"]}>
<Pair single id="trapfinding">Trapfinding</Pair>
<Pair title="Info">The slayer gains <Link to="/skill/disable_device">Disable Device</Link> as a class skill.</Pair>
<Pair title="Ability">The slayer also gains the <Link to="/ability/trapfinding">trapfinding</Link> and <Link to="/ability/trap_sense">trap sense</Link> <Link to="/class/rogue">rogue</Link> abilities, using his slayer level as his effective rogue level.</Pair>
</Ability>
</>};
const _unbalancing_trick = {title: "Unbalancing Trick", jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 9</Link></p>
<Ability id="unbalancing-trick-ex" icon={["stairs-goal"]}>
<Pair single id="unbalancing-trick-ex">Unbalancing Trick (Ex)</Pair>
<Pair title="Ability">The slayer gains <Link to="/feat/improved_trip">Improved Trip</Link> as a bonus feat, even if she does not meet the prerequisites.</Pair>
<Pair title="At 6th Level">She is treated as if she meets all the prerequisites of <Link to="/feat/greater_trip">Greater Trip</Link> (although she must take the feat as normal to gain its benefits).</Pair>
</Ability>
</>};
const _armored_marauder = {title: "Armored Marauder", topLink: ["Advanced Slayer Talents","ability/advanced_slayer_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 6</Link></p>
<Ability id="armored-marauder-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="armored-marauder-ex" flavor="Some elite slayers exchange leather and chain for plate when stalking prey.">Armored Marauder (Ex)</Pair>
<Pair title="Ability">A slayer with this talent gains proficiency with heavy armor. In addition, the armor check penalty of any heavy armor the slayer wears is reduced by 1 for every 6 class levels he has.</Pair>
</Ability>
</>};
const _armored_swiftness = {title: "Armored Swiftness", topLink: ["Advanced Slayer Talents","ability/advanced_slayer_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 6</Link></p>
<Ability id="armored-swiftness-ex" icon={["upgrade"]}>
<Pair single id="armored-swiftness-ex" flavor="In time, the heaviest armor can become like a second skin.">Armored Swiftness (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/slayertalent/armored_marauder">Armored marauder</Link></Pair>
<Pair title="Ability">A slayer with this talent can move at full speed in heavy armor. In addition, the maximum Dexterity bonus of heavy armor the slayer wears increases by 1 for every 6 class levels he has.</Pair>
</Ability>
</>};
const _assassinate = {title: "Assassinate", topLink: ["Advanced Slayer Talents","ability/advanced_slayer_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 54</Link></p>
<Ability id="assassinate-ex" icon={["stairs-goal"]}>
<Pair single id="assassinate-ex" flavor="A slayer with this advanced talent can kill foes that are unable to defend themselves.">Assassinate (Ex)</Pair>
<Pair title="Ability"><p>To attempt to assassinate a target, the slayer must first study his target for 1 round as a <strong className="hl">standard action</strong>. On the following round, if the slayer makes a sneak attack against the target and that target is denied its Dexterity bonus to AC, the sneak attack has the additional effect of possibly killing the target. This attempt automatically fails if the target recognizes the slayer as an enemy.</p>
<p>If the sneak attack is successful, the target must attempt a Fortitude saving throw with a DC equal to 10 + 1/2 the slayer's level + the slayer's Intelligence modifier. If the target fails this save, it dies; otherwise, the target takes the sneak attack damage as normal and is then immune to that slayer's <em>assassinate</em> ability for 24 hours.</p>
</Pair>
</Ability>
</>};
const _marksmans_shot = {title: "Marksman's Shot", topLink: ["Advanced Slayer Talents","ability/advanced_slayer_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 6</Link></p>
<Ability id="marksmans-shot-ex" icon={["upgrade"]}>
<Pair single id="marksmans-shot-ex" flavor="Those who seek to slay with a single shot must have keen eyes and perfect poise.">Marksman's Shot (Ex)</Pair>
<Pair title="Ability">As an attack action, the slayer makes a single ranged attack at his highest attack bonus with a ranged weapon he wields. The target of the attack must be the slayer's <em>studied target.</em> On a successful hit, the slayer doubles the number of sneak attack dice applied to the attack; if the attack was not a sneak attack, this benefit does not apply.</Pair>
</Ability>
</>};
const _reaping_stalker = {title: "Reaping Stalker", topLink: ["Advanced Slayer Talents","ability/advanced_slayer_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 7</Link></p>
<Ability id="reaping-stalker-ex" icon={["upgrade"]}>
<Pair single id="reaping-stalker-ex" flavor="Some slayers prefer weapons with grim symbolism of lives cut short and can wield such weapons with unparalleled lethality.">Reaping Stalker (Ex)</Pair>
<Pair title="Passive Ability">A slayer with this talent treats any <Link to="/eq-weapon/sickle">sickle</Link> or <Link to="/eq-weapon/scythe">scythe</Link> he wields as though it were <Link to="/misc/one_size_category_larger">one size category larger</Link> for the purpose of determining its damage dice. In addition, the slayer increases the critical threat range of any sickle or scythe he wields by 1; this does not stack with other effects that alter a weapon's threat range.</Pair>
</Ability>
</>};
const _rogue_and_ninja_advanced_talents = {title: "Rogue and Ninja Advanced Talents", topLink: ["Advanced Slayer Talents","ability/advanced_slayer_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 53</Link></p>
<Ability id="rogue-and-ninja-advanced-talents" icon={["stairs-goal"]}>
<Pair single id="rogue-and-ninja-advanced-talents">Rogue and Ninja Advanced Talents</Pair>
<Pair title="Ability"><p>A slayer can select one of the following rogue <em>advanced talents</em> or ninja <em>master tricks</em> in place of a slayer advanced talent.</p>
<p><strong className="hl">Advanced rogue talents:</strong> <Link to="/talent/aligned_disguise">aligned disguise</Link>, <Link to="/talent/blinding_strike">blinding strike</Link>, <Link to="/talent/dance_of_disorienting_shadows">dance of disorienting shadows</Link>, <Link to="/talent/deadly_sneak">deadly sneak</Link>, <Link to="/talent/feat">feat</Link>, <Link to="/talent/hunters_surprise">hunter's surprise</Link>, <Link to="/talent/improved_shadows_chill">improved shadow's chill</Link>, <Link to="/talent/knock_out_blow">knock-out blow</Link>, <Link to="/talent/master_of_disguise">master of disguise</Link>, <Link to="/talent/opportunist">opportunist</Link>, <Link to="/talent/reflexive_shadow_shield">reflexive shadow shield</Link>, <Link to="/talent/see_in_darkness">see in darkness</Link>, <Link to="/talent/stealthy_sniper">stealthy sniper</Link>.</p>
<blockquote>
</blockquote>
<p><strong className="hl">Master Tricks:</strong> <Link to="/ninjatrick/evasion">evasion</Link>, <Link to="/ninjatrick/feat">feat</Link>.</p>
</Pair>
<Pair title="Special">A slayer can select multiple rogue advanced talents or ninja master tricks by taking this slayer advanced talent multiple times, but can't select the same one more than once.</Pair>
</Ability>
</>};
const _slayer_camouflage = {title: "Slayer Camouflage", topLink: ["Advanced Slayer Talents","ability/advanced_slayer_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 55</Link></p>
<Ability id="slayer-camouflage-ex" icon={["armor-upgrade"]}>
<Pair single id="slayer-camouflage-ex">Slayer Camouflage (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/talent/terrain_mastery">Terrain mastery</Link> (rogue talent)</Pair>
<Pair title="Ability">A slayer can use the Stealth skill to hide in any of his <Link to="/ability/favored_terrain">favored terrains</Link>, even if the terrain doesn't grant cover or concealment.</Pair>
</Ability>
</>};
const _swallow_reversal = {title: "Swallow Reversal", topLink: ["Advanced Slayer Talents","ability/advanced_slayer_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 7</Link></p>
<Ability id="swallow-reversal-ex" icon={["mailed-fist","rolling-dices"]}>
<Pair single id="swallow-reversal-ex" flavor="This technique, a creation of a legendary Minkaian duelist, mimics the movement of a bird in flight to pierce an opponent's defenses.">Swallow Reversal (Ex)</Pair>
<Pair title="Ability">As an attack action, the slayer can make a single melee attack against his <em>studied target</em> at his highest base attack bonus. When attempting a <em>swallow reversal,</em> the slayer rolls two attack rolls and uses the highest result. If the attack is a critical threat, the slayer attempts to confirm the critical hit as normal.</Pair>
<Pair title="Special">The slayer can use <em>swallow reversal</em> at will, but it can only be used against a given target once per day.</Pair>
</Ability>
</>};
const _woodland_stride = {title: "Woodland Stride", topLink: ["Advanced Slayer Talents","ability/advanced_slayer_talents"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 55</Link></p>
<Ability id="woodland-stride-ex" icon={["stairs-goal"]}>
<Pair single id="woodland-stride-ex">Woodland Stride (Ex)</Pair>
<Pair title="Ability">A slayer with this talent may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at his normal speed and without taking damage or suffering any other impairment. Terrain that is enchanted or magically manipulated to impede motion still affects the slayer as normal.</Pair>
</Ability>
</>};
export default {not_found:_not_found,sever_alignment:_sever_alignment,slowing_strike:_slowing_strike,aligned_sneak_attack:_aligned_sneak_attack,deadly_range:_deadly_range,blood_reader:_blood_reader,eternal_opposition:_eternal_opposition,jaguars_grace:_jaguars_grace,jaguars_pounce:_jaguars_pounce,jaguars_protection:_jaguars_protection,mountainside_ambush:_mountainside_ambush,studied_ally:_studied_ally,castling:_castling,catfolk_rogue_talent:_catfolk_rogue_talent,experience_across_ages:_experience_across_ages,extra_earthcraft:_extra_earthcraft,foil_scrutiny:_foil_scrutiny,fortified_position:_fortified_position,graceful_athlete:_graceful_athlete,inured_to_terror:_inured_to_terror,mystic_veil:_mystic_veil,one_of_those_faces:_one_of_those_faces,poison_use:_poison_use,toxin_training:_toxin_training,focused_poison:_focused_poison,ranger_combat_style:_ranger_combat_style,recall_training:_recall_training,redirect_poison:_redirect_poison,rogue_talent:_rogue_talent,scrying_familiarity:_scrying_familiarity,sticks_and_stones:_sticks_and_stones,sunlight_strike:_sunlight_strike,sure_footing:_sure_footing,trapfinding:_trapfinding,unbalancing_trick:_unbalancing_trick,armored_marauder:_armored_marauder,armored_swiftness:_armored_swiftness,assassinate:_assassinate,marksmans_shot:_marksmans_shot,reaping_stalker:_reaping_stalker,rogue_and_ninja_advanced_talents:_rogue_and_ninja_advanced_talents,slayer_camouflage:_slayer_camouflage,swallow_reversal:_swallow_reversal,woodland_stride:_woodland_stride}