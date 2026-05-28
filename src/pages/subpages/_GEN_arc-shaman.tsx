import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _animist = {title: "Animist", jsx: <><h2 id="arc-shaman-animist-animist">Animist</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 110</Link><br/>Even among mystical practitioners, the animist has a strange perspective and even stranger magic. The animist perceives that all things have a spirit, including objects, constructs, illnesses, buildings, and the environment.</p>
<Ability id="arc-shaman-animist-animist-spirit-magic" icon={["spell-book"]}>
<Pair single id="arc-shaman-animist-animist-spirit-magic">Animist Spirit Magic</Pair>
<Pair hl title="Replaces">Spirit magic spells gained from the shaman's spirit</Pair>
<Pair title="Info">The animist adds the following spells to the list of spells he can cast using <em>spirit magic</em> at the given spell levels:</Pair>
<Pair plain title="1st"><Link to="/spell/speak_with_animals">Speak with animals</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/skinsend">Skinsend</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/speak_with_plants">Speak with plants</Link></Pair>
<Pair plain title="4th"><Link to="/spell/malfunction">Malfunction</Link></Pair>
<Pair plain title="5th"><Link to="/spell/dream">Dream</Link></Pair>
<Pair plain title="6th"><Link to="/spell/stone_tell">Stone tell</Link></Pair>
<Pair plain title="7th"><Link to="/spell/control_construct">Control construct</Link></Pair>
<Pair plain title="8th"><Link to="/spell/trap_the_soul">Trap the soul</Link></Pair>
<Pair plain title="9th"><Link to="/spell/soul_bind">Soul bind</Link></Pair>
</Ability>
<Ability id="arc-shaman-animist-wrangle-condition" icon={["remedy"]}>
<Pair single id="arc-shaman-animist-wrangle-condition">Wrangle Condition</Pair>
<Pair hl title="Replaces">2nd-level hex</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability"><p>The animist interacts directly with unwholesome spirits of the ills that trouble him or his people. To the animist, negative conditions manifest as anthropomorphic spirits or are caused by such spirits (visited upon the creature by bad magic). Either way, the animist can attempt to persuade the spirit to leave its victim alone, thus performing a miraculous healing. As the animist grows in power, he can simply inform these spirits that they are unwelcome and command them to depart.</p>
<p>The animist can attempt a Diplomacy check to persuade the condition's spirit to leave. Conditions the animist can affect are ranked from minor to dire, with each category having an accompanying Diplomacy DC (see below). The animist cannot take 10 or 20 on the check or receive aid from any creature except another shaman. Failure by 5 or less means the condition spirit is willing to leave the target and transfer to the animist for the rest of the duration or until cured; this happens only if the animist is willing. Failure by 10 or more means that not only is the target inflicted with the condition, but the animist is as well (whether or not he is willing) for the remaining duration or until cured.</p>
<ul>
<li><strong>Minor Conditions (DC 15):</strong> Fatigued, shaken, and sickened.</li>
<li><strong>Major Conditions (DC 20):</strong> Dazed and staggered.</li>
<li><strong>Severe Conditions (DC 25):</strong> Exhausted, frightened, and nauseated.</li>
<li><strong>Dire Conditions (DC 30):</strong> Blinded, deafened, paralyzed, and stunned.</li>
</ul>
<p>The animist can use this ability a number of times per day equal to half his shaman level + his Wisdom modifier. Using this ability is a <strong className="hl">standard action</strong> that requires no contact or shared language with the target, but it relies on audible components and the target must be within 30 feet. If a target is afflicted with multiple conditions, the animist targets one condition at a time (of her choosing). The animist cannot use this ability on himself.</p>
</Pair>
<Pair title="At 5th Level">The animist can use this ability to exorcise minor conditions without needing to attempt a Diplomacy check.</Pair>
<Pair title="At 9th Level">He can dispatch major conditions without a roll.</Pair>
<Pair title="At 13th Level">He can remove severe conditions without rolling.</Pair>
<Pair title="At 17th Level">He can dispatch dire conditions automatically.</Pair>
<Pair title="Special">Even if he doesn't need to roll, removing a condition still requires one use of this ability per condition.</Pair>
</Ability>
<Ability id="arc-shaman-animist-exorcism-su" icon={["shield-reflect"]}>
<Pair single id="arc-shaman-animist-exorcism-su">Exorcism (Su)</Pair>
<Pair hl title="Replaces">Hex gained at 8th level</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Full-Round Action">The animist can attempt to end effects that control a creature or object, such as <Link to="/spell/magic_jar">magic jar</Link>, <Link to="/spell/possess_object">possess object</Link>, <Link to="/spell/dominate_person">dominate person</Link>, and <Link to="/spell/dominate_monster">dominate monster</Link>, or possessing entities such as <Link to="/template/ghost">ghosts</Link>. This requires the animist to touch the target. The possessing or dominating creature must attempt a Will save with a DC equal to 10 + 1/2 the shaman level + her Wisdom modifier. Failure means that the controlling effect ends or the entity is immediately cast out of the target, as appropriate.</Pair>
<Pair title="Special">If the possessing entity is exorcised, it cannot attempt to dominate or possess that target again for 24 hours. The animist can exorcise the same entity out of different targets, but once the entity successfully saves against the animist's exorcism, it cannot be affected by this ability again for 24 hours.</Pair>
</Ability>
<Ability id="arc-shaman-animist-dominate-spirit-sp" icon={["magic-swirl"]}>
<Pair single id="arc-shaman-animist-dominate-spirit-sp">Dominate Spirit (Sp)</Pair>
<Pair hl title="Replaces">Hex gained at 10th level</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four shaman levels beyond 10th<ByLevelPop levels={[[10,1],[14,2],[18,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">The animist can attempt to possess creatures or objects as <em>magic jar</em> or <em>possess object.</em> When the animist is attempting to possess the creature, his familiar acts as the jar and must be within 10 feet when the animist attempts to possess a creature. The animist's soul can perceive his surroundings through the familiar's senses, clearly evaluate potential targets for possession, and communicate with his familiar telepathically. The familiar retains its autonomy while acting as the jar, and is not harmed by being used as a vessel for the animist's soul.</Pair>
</Ability>
<Ability id="arc-shaman-animist-contact-with-the-spirit-world-su" icon={["mailed-fist"]}>
<Pair single id="arc-shaman-animist-contact-with-the-spirit-world-su">Contact with the Spirit World (Su)</Pair>
<Pair hl title="Replaces">Hex gained at 12th level</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Usage">1 round/day per shaman level; these rounds need not be consecutive</Pair>
<Pair title="Ability">The shaman can interact with incorporeal entities as if his unarmed strikes and melee weapons had the <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon special ability. While using this ability, he can also see nearby ethereal entities and likewise strike at them as if they were incorporeal.</Pair>
</Ability>
<Ability id="arc-shaman-animist-etherealness-sp" icon={["magic-swirl"]}>
<Pair single id="arc-shaman-animist-etherealness-sp">Etherealness (Sp)</Pair>
<Pair hl title="Replaces">Hex gained at 18th level</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Ability">The animist can cast <Link to="/spell/etherealness">etherealness</Link> once per day as a spell-like ability.</Pair>
</Ability>
<Ability id="arc-shaman-animist-spirit-shaman-sp" icon={["magic-swirl"]}>
<Pair single id="arc-shaman-animist-spirit-shaman-sp">Spirit Shaman (Sp)</Pair>
<Pair hl title="Replaces">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">The animist can use <Link to="/spell/ethereal_jaunt">ethereal jaunt</Link> as at will as a spell-like ability, and cast <Link to="/spell/astral_projection">astral projection</Link> once per day as a spell-like ability.</Pair>
</Ability>
</>};
const _benefactor = {title: "Benefactor", jsx: <><h2 id="arc-shaman-benefactor-benefactor">Benefactor</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 26</Link><br/>Though most shamans dole out banes and boons equally, a benefactor seeks to improve the lives of others by primarily offering powerful supportive abilities and magic to her allies and others she deems worthy.</p>
<Ability id="arc-shaman-benefactor-benefactor-ethos" icon={["broken-shield"]}>
<Pair single id="arc-shaman-benefactor-benefactor-ethos">Benefactor Ethos</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Info">Benefactors cannot cast shaman spells with the curse descriptor; for the benefactor's purpose, they are considered not on the shaman spell list. A benefactor can't use spell completion or spell trigger magic items that use shaman spells with the curse descriptor unless she succeeds at a Use Magic Device check.</Pair>
</Ability>
<Ability id="arc-shaman-benefactor-benefactor-hexes" extraClasses="hasSubs" icon={["magic-swirl","broken-shield"]}>
<Pair single id="arc-shaman-benefactor-benefactor-hexes">Benefactor Hexes</Pair>
<Pair hl title="Alters">Hexes</Pair>
<Pair title="Ability">A benefactor adds the following hexes to the list of shaman hexes she can choose from whenever she gains a new <em>hex</em> or a <em>wandering hex.</em></Pair>
<Pair title="Special">A benefactor cannot gain a <em>hex</em> that is a curse effect or that has the word "curse" in its name as a <em>hex</em> or a <em>wandering hex.</em></Pair>
</Ability>
<Ability id="arc-shaman-benefactor-boon-reservoir-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-shaman-benefactor-boon-reservoir-su">Boon Reservoir (Su)</Pair>
<Pair title="Ability">Once per day, a benefactor can perform a 10-minute ritual with one of her allies, plus one additional ally for every 3 shaman levels she has. All creatures that participate in the ritual (including the benefactor) gain a boon reservoir with a number of points equal to 1/2 the benefactor's shaman level (minimum 1) for 24 hours.</Pair>
<Pair title="Immediate Action">A creature can spend 1 point from its boon reservoir to gain a +2 insight bonus on all saving throws it attempts until the start of its next turn.</Pair>
<Pair title="Special">Boon reservoir points that are not spent within 24 hours are wasted.</Pair>
</Ability>
<Ability id="arc-shaman-benefactor-expanded-boon-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-shaman-benefactor-expanded-boon-su">Expanded Boon (Su)</Pair>
<Pair title="Prerequisites"><em>Boon reservoir</em> hex</Pair>
<Pair title="Choice">When a benefactor gains this hex, she chooses one of the following: ability checks, attack rolls, or skill checks. Instead of gaining an insight bonus on saving throws, any creature with a boon reservoir granted by the benefactor can spend 1 point as an <strong className="hl">immediate action</strong> to gain a +2 insight bonus on rolls or checks of the chosen kind until the start of its next turn.</Pair>
<Pair title="Special">This hex can be chosen multiple times. Each time, it applies to a different roll or check.</Pair>
</Ability>
<Ability id="arc-shaman-benefactor-suppress-curse-sp" extraClasses="subAbility" icon={["remedy"]}>
<Pair single id="arc-shaman-benefactor-suppress-curse-sp">Suppress Curse (Sp)</Pair>
<Pair title="Standard Action">A benefactor can attempt to suppress one curse effect that is affecting a creature or object with a touch. This functions as per <Link to="/spell/remove_curse">remove curse</Link>, except the curse's effects are suppressed for 1 hour, even if it is a cursed shield, weapon, or suit of armor. This allows a creature afflicted with any such cursed item to remove or get rid of it.</Pair>
<Pair title="Special">The benefactor uses her shaman level as her caster level for the purpose of this hex.</Pair>
</Ability>
</>};
const _crystal_tender = {title: "Crystal Tender", jsx: <><h2 id="arc-shaman-crystal_tender-crystal-tender">Crystal Tender</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands pg. 22</Link><br/>Crystal tenders are most often found among subterranean races and races bearing a strong connection to the earth. A crystal tender focuses on the spirits of metal and stone, using crystals as a means to focus the power of the spirits she venerates. Many crystal tenders take it upon themselves to guard rich gem veins and other mineral treasures from those who would mine them out of greed, much in the way that surface-dwelling druids might defend a sacred grove from woodcutters.</p>
<p>The crystal tenders of Orv meditate within the Crystal Womb, often near the churning vortex that makes up the heart of the Vault. They learn to focus the cavern's energies through ley lines in the stone, and they study the birth of crystals within the Womb in order to mimic the process.</p>
<Ability id="arc-shaman-crystal_tender-scion-of-the-stones-ex" icon={["info","armor-upgrade","broken-shield"]}>
<Pair single id="arc-shaman-crystal_tender-scion-of-the-stones-ex" flavor="A crystal tender forms a mystic connection with the precious stones and gems she has sworn to protect.">Scion of the Stones (Ex)</Pair>
<Pair hl title="Alters">Spirit animal</Pair>
<Pair title="Info">Her spirit animal always appears to be composed of a crystalline substance and gains a +2 bonus to its natural armor. Her spirit animal is treated as an outsider with both the earth and native subtypes, and counts as a crystalline creature for the purposes of spells and abilities. The unique nature of her spirit animal increases the cost of replacing it to 750 gp per shaman level.</Pair>
</Ability>
<Ability id="arc-shaman-crystal_tender-reciprocal-resonance-su" icon={["armor-upgrade"]}>
<Pair single id="arc-shaman-crystal_tender-reciprocal-resonance-su" flavor="A crystal tender learns to form a temporary bond with a spirit of crystal.">Reciprocal Resonance (Su)</Pair>
<Pair hl title="Alters">Wandering spirit</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When selecting her <em>wandering spirit,</em> she can forgo gaining a spirit ability to instead grant herself and her spirit animal DR 1/adamantine as long as they're within 10 feet of one another. While benefiting from this ability, the crystal tender's skin takes on a crystalline sheen.</Pair>
<Pair title="At 8th Level">The DR gained from this ability increases to <Link to="/misc/one_fourth">one-fourth</Link> of her shaman level.</Pair>
</Ability>
<Ability id="arc-shaman-crystal_tender-invoke-latent-facets-su" icon={["upgrade"]}>
<Pair single id="arc-shaman-crystal_tender-invoke-latent-facets-su">Invoke Latent Facets (Su)</Pair>
<Pair hl title="Replaces">Shaman hex gained at 8th level</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Both a crystal tender and her spirit animal gain all of the benefits of any <Link to="/magic-wondrous/ioun_stone">ioun stones</Link> worn by one another, as long as they're within 100 feet of each other. The crystal tender's spirit animal can also embed a number of ioun stones equal to the crystal tender's Charisma modifier into its crystalline form. Embedded ioun stones don't gain any additional abilities, save that they don't orbit the spirit animal and can't be separately targeted. A slain or unconscious spirit animal immediately loses all embedded ioun stones, which tumble to the ground beside its body.</Pair>
</Ability>
<Ability id="arc-shaman-crystal_tender-cabochon-form-sp" icon={["armor-upgrade"]}>
<Pair single id="arc-shaman-crystal_tender-cabochon-form-sp">Cabochon Form (Sp)</Pair>
<Pair hl title="Replaces">Manifestation</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Usage">Once a day</Pair>
<Pair title="Standard Action">A crystal tender can transform her body into a living gemstone as per <Link to="/spell/iron_body">iron body</Link> with a duration of 12 hours. Instead of being vulnerable to effects that can harm an iron golem while in this form, she is vulnerable to effects that can harm a crystalline creature (such as <Link to="/spell/shatter">shatter</Link>).</Pair>
</Ability>
</>};
const _deep_shaman = {title: "Deep Shaman", jsx: <><h2 id="arc-shaman-deep_shaman-deep-shaman">Deep Shaman</h2>
<p><strong>Sources</strong> <Link to="/source/aquatic_adventures">Aquatic Adventures pg. 51</Link><br/>While most shamans of the <em>waves</em> spirit have powers associated with surface waters, deep shamans are tied to spirits from the depths. Some say that the first deep shamans served <Link to="/faith/besmara">Besmara</Link> back when she was a water spirit, before she achieved full godhood.</p>
<Ability id="arc-shaman-deep_shaman-deep-spirit" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-shaman-deep_shaman-deep-spirit">Deep Spirit</Pair>
<Pair hl title="Alters">Spirit, spirit animal</Pair>
<Pair title="Info">A deep shaman must choose the <Link to="/shamanspirit/waves">waves</Link> spirit. The deep shaman must choose a spirit animal with the <Link to="/subtype/aquatic">aquatic</Link> subtype, and it gains the <Link to="/umr/amphibious">amphibious</Link> special quality instead of gaining the ability to breathe in water.</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-shaman-deep_shaman-undefined">
<Pair id="arc-shaman-deep_shaman-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/swim">Swim</Link> (STR)</Pair></Ability>
<Ability id="arc-shaman-deep_shaman-aquatic-hexes-su" extraClasses="hasSubs" icon={["armor-downgrade"]}>
<Pair single id="arc-shaman-deep_shaman-aquatic-hexes-su">Aquatic Hexes (Su)</Pair>
<Pair hl title="Alters">Hexes</Pair>
<Pair title="Ability">When a deep shaman uses <em>beckoning chill</em> on a creature in the water, that creature becomes <Link to="/misc/fatigued">fatigued</Link> due to hypothermia for the duration, and it also becomes <Link to="/rule/entangled">entangled</Link> if the creature takes damage from the deep shaman's spirit abilities and from spells and abilities with the water descriptor.</Pair>
<Pair title="Ability">Her <em>crashing waves</em> hex applies to her spirit abilities that deal damage as if they were spells with the water descriptor, raising her effective shaman level for those abilities.</Pair>
<Pair title="Special">Instead of <em>mist's shroud</em> and <em>watersight,</em> she can select the two hexes below.</Pair>
</Ability>
<Ability id="arc-shaman-deep_shaman-buoyancy-control-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-shaman-deep_shaman-buoyancy-control-sp">Buoyancy Control (Sp)</Pair>
<Pair title="Ability">The deep shaman touches a willing creature and changes its <Link to="/rule/buoyancy">buoyancy</Link> to whichever of the five states she wishes for 1 minute. A creature affected by this hex can't be affected by it again for 24 hours.</Pair>
<Pair title="Passive Ability">The deep shaman has neutral buoyancy, regardless of what her normal buoyancy would be, though she can end or resume the effect as a <strong className="hl">standard action</strong>.</Pair>
</Ability>
<Ability id="arc-shaman-deep_shaman-deep-heart-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-shaman-deep_shaman-deep-heart-su">Deep Heart (Su)</Pair>
<Pair title="Ability">The deep shaman gains the ability to breathe underwater and gains a swim speed equal to her unmodified base land speed.</Pair>
<Pair title="At 8th Level">She takes only half the normal amount of <Link to="/rule/pressure_damage">pressure damage</Link> and she <Link to="/rule/oceanic_zones">adjusts to a new pressure</Link> all at once after succeeding at five Fortitude saves, rather than 100 feet at a time.</Pair>
</Ability>
<Ability id="arc-shaman-deep_shaman-aquatic-spirit-abilities-su" icon={["upgrade"]}>
<Pair single id="arc-shaman-deep_shaman-aquatic-spirit-abilities-su">Aquatic Spirit Abilities (Su)</Pair>
<Pair hl title="Alters">Spirit ability, greater spirit ability</Pair>
<Pair title="Ability">When used underwater, a deep shaman's <em>wave strike</em> deals lethal bludgeoning damage and pushes the target away 5 feet + an additional 5 feet for every 6 shaman levels she has.</Pair>
<Pair title="At 11th Level">Whenever the deep shaman is underwater, all weapons she holds are treated as if they had the <Link to="/magic-enh/impact">impact</Link> special ability instead of <Link to="/magic-enh/quenching">quenching</Link>. Instead of a swim speed and the ability to breathe underwater, <em>fluid mastery</em> provides <Link to="/umr/tremorsense">tremorsense</Link> with a range of 30 feet while in the water, and when underwater, <em>fluid mastery's</em> torrent deals 1d6 points of damage per shaman level in a 30-foot cone.</Pair>
</Ability>
<Ability id="arc-shaman-deep_shaman-brine-dragon-form-su" icon={["magic-swirl"]}>
<Pair single id="arc-shaman-deep_shaman-brine-dragon-form-su">Brine Dragon Form (Su)</Pair>
<Pair hl title="Replaces">Elemental form of the true spirit ability</Pair>
<Pair title="Usage">She can use this ability for 1 hour per shaman level each day, divided any way she chooses in 1 hour increments, though the spell's breath weapon limit applies across the whole day. Time she spends underwater doesn't count against this limit, but every minute (or fraction thereof) that she spends flying expends 1 hour of her daily uses.</Pair>
<Pair title="Ability">When a deep shaman gains access to the <em>true</em> version of the waves spirit, she can assume the form of a Large (or smaller) <Link to="/family/brine_dragon">brine dragon</Link> as per <Link to="/spell/form_of_the_dragon_ii">form of the dragon II</Link>, with a line of acid breath weapon, acid resistance 20, and a swim speed of 60 feet.</Pair>
<Pair title="At 18th Level">She can assume the form of a Huge or smaller brine dragon as per <Link to="/spell/form_of_the_dragon_iii">form of the dragon III</Link> instead.</Pair>
</Ability>
</>};
const _draconic_shaman = {title: "Draconic Shaman", jsx: <><h2 id="arc-shaman-draconic_shaman-draconic-shaman">Draconic Shaman</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 24</Link><br/>In some regions of Tian Xia, shamans are unusually common, and may have strong ties to dragon gods and imperial dragons who act as mentors. Some of these shamans draw their powers from the might of dragons, rather than from spirits. These shamans each gain a powerful drake as an ally, and view caring for that drake as a sacred duty.</p>
<Ability id="arc-shaman-draconic_shaman-drake-companion" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-shaman-draconic_shaman-drake-companion">Drake Companion</Pair>
<Pair hl title="Replaces">Spirit, spirit animal, hexes gained at 4th and 10th levels</Pair>
<Pair hl title="Alters">Spirit magic</Pair>
<Pair title="Info">A draconic shaman gains a <Link to="/sidekick/drake">drake companion</Link> instead of a spirit animal, and she communes with the drake to prepare her spells just as other shamans commune with their spirit animals. She doesn't gain a primary spirit, but she still gains <em>wandering spirit</em> at 4th level. She must select all her hexes (other than her wandering hexes) from the list of <Link to="/ability/shaman_hexes">shaman hexes</Link>, and she can't select the <em>witch hex</em> shaman hex. She doesn't gain <em>spirit magic</em> slots until 4th level when she gains her <em>wandering spirit.</em> Any ability granted by a <em>wandering spirit</em> that would normally affect a spirit animal (such as <Link to="/shamanspirit/nature">nature's</Link> <em>true spirit ability</em>) has no effect for a draconic shaman.</Pair>
</Ability>
</>};
const _grasping_vine = {title: "Grasping Vine", jsx: <><h2 id="arc-shaman-grasping_vine-grasping-vine">Grasping Vine</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 16</Link><br/>Grasping vine shamans are typically adherents of one of several scattered sects dedicated to the Green Mother. They revere plant life in all its forms, with a special fondness for poisonous or carnivorous plants. Unlike most shamans, a grasping vine is guided by a plant-like creature rather than a spirit animal.</p>
<Ability id="arc-shaman-grasping_vine-spirit" icon={["info"]}>
<Pair single id="arc-shaman-grasping_vine-spirit">Spirit</Pair>
<Pair title="Info">Though a grasping vine is not limited to a particular choice of spirit, common selections are <Link to="/shamanspirit/life">Life</Link>, <Link to="/shamanspirit/nature">Nature</Link>, or <Link to="/shamanspirit/wood">Wood</Link>.</Pair>
</Ability>
<Ability id="arc-shaman-grasping_vine-plant-spirit-ex" icon={["stairs-goal"]}>
<Pair single id="arc-shaman-grasping_vine-plant-spirit-ex">Plant Spirit (Ex)</Pair>
<Pair hl title="Alters">Spirit animal</Pair>
<Pair title="Ability">A shaman's spirit animal is made of leaves and thorny vines. This plant spirit has the statistics and abilities as a shaman's spirit animal, but it is treated as a creature of the <Link to="/type/plant">plant</Link> type rather than a native outsider.</Pair>
</Ability>
<Ability id="arc-shaman-grasping_vine-verdant-magic" icon={["spell-book"]}>
<Pair single id="arc-shaman-grasping_vine-verdant-magic">Verdant Magic</Pair>
<Pair hl title="Replaces">Spirit magic spells granted by the shaman's spirit</Pair>
<Pair title="Info">A grasping vine adds the following spells to the list of spells she can cast using <em>spirit magic</em> at the listed spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/entangle">Entangle</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/barkskin">Barkskin</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/thorny_entanglement">Thorny entanglement</Link></Pair>
<Pair plain title="4th"><Link to="/spell/command_plants">Command plants</Link></Pair>
<Pair plain title="5th"><Link to="/spell/wall_of_thorns">Wall of thorns</Link></Pair>
<Pair plain title="6th"><Link to="/spell/fire_seeds">Fire seeds</Link></Pair>
<Pair plain title="7th"><Link to="/spell/animate_plants">Animate plants</Link></Pair>
<Pair plain title="8th"><Link to="/spell/horrid_wilting">Horrid wilting</Link></Pair>
<Pair plain title="9th"><Link to="/spell/shambler">Shambler</Link></Pair>
</Ability>
<Ability id="arc-shaman-grasping_vine-greentongue-sp" icon={["magic-swirl"]}>
<Pair single id="arc-shaman-grasping_vine-greentongue-sp">Greentongue (Sp)</Pair>
<Pair hl title="Replaces">Shaman's hex gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 time/day per two shaman levels<ByLevelPop levels={[[2,1],[4,2],[6,3],[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">A grasping vine can use <Link to="/spell/speak_with_plants">speak with plants</Link> as a spell-like ability.</Pair>
<Pair title="Ability">In addition, while under the effects of <em>speak with plants,</em> the grasping vine can deliver a <Link to="/spell/suggestion">suggestion</Link> (as per the spell) to a single plant creature within 30 feet, ignoring the plant's immunity to mind-affecting effects. The grasping vine can use this second ability once per day at 2nd level.</Pair>
<Pair title="At 6th Level">The <em>suggestion</em> can be used times 2 per day.</Pair>
<Pair title="At 10th Level">The <em>suggestion</em> can be used times 3 per day.</Pair>
<Pair title="At 14th Level">The <em>suggestion</em> can be used times 4 per day.</Pair>
<Pair title="At 18th Level">The <em>suggestion</em> can be used times 5 per day.</Pair>
</Ability>
<Ability id="arc-shaman-grasping_vine-flowers-form-sp" icon={["magic-swirl"]}>
<Pair single id="arc-shaman-grasping_vine-flowers-form-sp">Flower's Form (Sp)</Pair>
<Pair hl title="Replaces">Shaman's hex gained at 8th level</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 minute/day per shaman level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action">A grasping vine can assume the form of a Small or Medium plant creature, as per <Link to="/spell/plant_shape_i">plant shape I</Link>.</Pair>
<Pair title="At 12th Level">This ability functions as <Link to="/spell/plant_shape_ii">plant shape II</Link>.</Pair>
<Pair title="At 16th Level">This ability functions as <Link to="/spell/plant_shape_iii">plant shape III</Link>.</Pair>
</Ability>
</>};
const _name_keeper = {title: "Name-Keeper", jsx: <><h2 id="arc-shaman-name_keeper-name-keeper">Name-Keeper</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 145</Link><br/>Pathfinders who perish in the pursuit of greater knowledge are commemorated on the Wall of Names, a curving monument of black glass at the Grand Lodge. Originally started as a humble memorial, the Wall of Names is now a moving testament to all those who have given their lives to further the cause of the <Link to="/rule/pathfinder_society">Pathfinder Society</Link>, and for many agents, an expedition to Absalom is as much a chance to visit the Wall of Names and seek out a vanished loved one, relation, or departed friend as it is an opportunity to visit the place where it all began.</p>
<p>A decade ago, a small cadre of agents began studying the fallen names, correlating these adventurers with the quests they were on when they perished or went missing, and then took it upon themselves to finish these incomplete missions - but in so doing these agents made an unexpected discovery. In delving into the storied histories etched into the Wall of Names, these agents have discovered how to commune with the departed spirits of those whose names are memorialized on the monument. These mystical agents soon became known as name-keepers, and they pride themselves on helping their predecessors find peace while preventing other Pathfinders' names from being added to the wall.</p>
<Ability icon={["skills"]} id="arc-shaman-name_keeper-undefined">
<Pair id="arc-shaman-name_keeper-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/linguistics">Linguistics</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (nature), Knowledge (planes), Survival</Pair></Ability>
<Ability id="arc-shaman-name_keeper-inherited-wayfinder-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-shaman-name_keeper-inherited-wayfinder-su">Inherited Wayfinder (Su)</Pair>
<Pair hl title="Replaces">Spirit animal</Pair>
<Pair title="Ability">A name-keeper forms a powerful bond with a damaged <Link to="/magic-wondrous/wayfinder">wayfinder</Link> inherited from another Pathfinder. It functions for her alone. This functions as a <Link to="/class/wizard">wizard's</Link> bonded object except it can be used to cast shaman spells (instead of wizard spells).</Pair>
</Ability>
<Ability id="arc-shaman-name_keeper-bonded-object" extraClasses="subAbility numbered" icon={["magic-swirl"]}>
<Pair single id="arc-shaman-name_keeper-bonded-object" flavor="Text from the wizard ability.">Bonded Object</Pair>
<Pair title="Ability"><p>If you attempt to cast a spell without your bonded object worn or in hand, you must make a <Link to="/rule/concentration">concentration</Link> check or lose the spell. The DC for this check is equal to 20 + the spell's level.</p>
<p>A bonded object can be used once per day to cast any one spell that you have in your spellbook and are capable of casting, even if the spell is not prepared. This spell is treated like any other spell cast by you, including casting time, duration, and other effects dependent on your level. This spell cannot be modified by metamagic feats or other abilities. The bonded object cannot be used to cast spells from your opposition schools.</p>
<p>You can add additional magic abilities to your bonded object as if you have the required item creation feats and if you meet the level prerequisites of the feat. For example, a wizard with a bonded dagger must be at least 5th level to add magic abilities to the dagger (see <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>). If the bonded object is a wand, it loses its wand abilities when its last charge is consumed, but it is not destroyed and it retains all of its bonded object properties and can be used to craft a new wand. The magic properties of a bonded object, including any magic abilities added to the object, only function for the wizard who owns it. If a bonded object's owner dies, or the item is replaced, the object reverts to being an ordinary item of the appropriate type.</p>
<p>If a bonded object is damaged, it is restored to full hit points the next time you prepare your spells. If the object of an arcane bond is lost or destroyed, it can be replaced after 1 week in a special ritual that costs 200 gp per wizard level plus the cost of the masterwork item. This ritual takes 8 hours to complete. Items replaced in this way do not possess any of the additional enchantments of the previous bonded item.</p>
</Pair>
</Ability>
<Ability id="arc-shaman-name_keeper-keeper-spirit-magic" icon={["spell-book"]}>
<Pair single id="arc-shaman-name_keeper-keeper-spirit-magic">Keeper Spirit Magic</Pair>
<Pair hl title="Replaces">Spirit magic spells gained from the shaman's spirit</Pair>
<Pair title="Info">The namekeeper adds the following spells to the list of spells she can cast using <em>spirit magic</em> at the listed spell level:</Pair>
<Pair plain title="1st"><Link to="/spell/stone_shield">Stone shield</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/object_reading">Object reading</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/speak_with_dead">Speak with dead</Link></Pair>
<Pair plain title="4th"><Link to="/spell/wall_of_stone">Wall of stone</Link></Pair>
<Pair plain title="5th"><Link to="/spell/breath_of_life">Breath of life</Link></Pair>
<Pair plain title="6th"><Link to="/spell/stone_tell">Stone tell</Link></Pair>
<Pair plain title="7th"><Link to="/spell/vision">Vision</Link></Pair>
<Pair plain title="8th"><Link to="/spell/word_of_recall">Word of recall</Link></Pair>
<Pair plain title="9th"><Link to="/spell/true_resurrection">True resurrection</Link></Pair>
</Ability>
<Ability id="arc-shaman-name_keeper-pathfinders-past-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-shaman-name_keeper-pathfinders-past-su">Pathfinders Past (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A name-keeper can form a temporary bond with a deceased Pathfinder who is commemorated on the Wall of Names. The namekeeper must make this selection each day when preparing her spells. While this feature is active, she gains one or more benefits tied to the Pathfinder's former focus in the Society: Scrolls, Spells, or Swords. Each allows her to select one or more options (such as a weapon or shaman spirit), and she can choose different options each time she forms this bond.</Pair>
</Ability>
<Ability id="arc-shaman-name_keeper-scrolls" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-shaman-name_keeper-scrolls">Scrolls</Pair>
<Pair title="Ability">The name-keeper selects an oracle <Link to="/ability/mystery">mystery</Link>. She can use any of the mystery's associated skills untrained, and she treats them as class skills. For any of those skills that were already class skills, she instead gains a +2 sacred bonus on those checks.</Pair>
<Pair title="At 12th Level">She gains <Link to="/feat/skill_focus">Skill Focus</Link> for one of the associated skills as a bonus feat.</Pair>
<Pair title="At 20th Level">She gains Skill Focus a second time as a bonus feat, and she always counts as having at least 10 ranks in those skills for calculating these temporary feats' benefits.</Pair>
</Ability>
<Ability id="arc-shaman-name_keeper-spells" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-shaman-name_keeper-spells">Spells</Pair>
<Pair title="Ability">The name-keeper selects a second shaman spirit and adds the spells granted by that spirit to her list of spells that she can cast using <em>spirit magic.</em> She gains one additional <em>spirit magic</em> spell slot of her highest spell level.</Pair>
<Pair title="At 12th Level">She selects two shaman spirits and adds both their granted spells to the list of spells she can cast using <em>spirit magic.</em></Pair>
<Pair title="At 20th Level">Her number of <em>spirit magic</em> spell slots at each spell level increases to two.</Pair>
</Ability>
<Ability id="arc-shaman-name_keeper-swords" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-shaman-name_keeper-swords">Swords</Pair>
<Pair hl title="Replaces">Wandering spirit</Pair>
<Pair title="Ability">The name-keeper gains proficiency in all martial weapons and one exotic weapon of her choice.</Pair>
<Pair title="At 12th Level">Whenever she makes a full attack, she gains one additional attack at her highest base attack bonus; this ability stacks with the extra attack from <Link to="/spell/haste">haste</Link>, but it doesn't stack with other abilities that grant extra attacks.</Pair>
<Pair title="At 20th Level">She gains two combat feats for which she qualifies.</Pair>
</Ability>
<Ability id="arc-shaman-name_keeper-versatile-hex-su" icon={["stairs-goal"]}>
<Pair single id="arc-shaman-name_keeper-versatile-hex-su">Versatile Hex (Su)</Pair>
<Pair hl title="Replaces">Wandering hex</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A namekeeper can temporarily gain a shaman hex or one of the hexes that her spirit has when she prepares her spells, lasting until the next time she prepares spells.</Pair>
<Pair title="At 14th Level">She can select two such hexes each day.</Pair>
</Ability>
</>};
const _overseer = {title: "Overseer", jsx: <><h2 id="arc-shaman-overseer-overseer">Overseer</h2>
<p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 23</Link><br/>While all shamans use their connection to the spirits of the world to draw upon otherworldly magic powers, the shamans of the Lands of the Linnorm Kings have a unique tradition in which they use the power of patron spirits to directly control their enemies. Such overseers may assume roles as religious leaders and protectors of their tribes, turning foes into short-term allies for the tribe's greater good. Other overseers become tyrants who enforce their will upon the weak for personal gain. In combat, an overseer manages the battlefield by debilitating foes using her hexes and specialized spells.</p>
<Ability id="arc-shaman-overseer-controlling-magic-su" icon={["spell-book"]}>
<Pair single id="arc-shaman-overseer-controlling-magic-su">Controlling Magic (Su)</Pair>
<Pair hl title="Replaces">Spirit magic spells gained from the shaman's spirit</Pair>
<Pair title="Info">The overseer adds the following spells to the list of spells she can cast using <em>spirit magic</em> at the given spell level:</Pair>
<Pair plain title="1st"><Link to="/spell/charm_person">Charm person</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/hideous_laughter">Hideous laughter</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/hold_person">Hold person</Link></Pair>
<Pair plain title="4th"><Link to="/spell/crushing_despair">Crushing despair</Link></Pair>
<Pair plain title="5th"><Link to="/spell/feeblemind">Feeblemind</Link></Pair>
<Pair plain title="6th"><Link to="/spell/mass_suggestion">Mass suggestion</Link></Pair>
<Pair plain title="7th"><Link to="/spell/power_word_blind">Power word blind</Link></Pair>
<Pair plain title="8th"><Link to="/spell/irresistible_dance">Irresistible dance</Link></Pair>
<Pair plain title="9th"><Link to="/spell/dominate_monster">Dominate monster</Link></Pair>
</Ability>
<Ability id="arc-shaman-overseer-spirit-surge-ex" icon={["magic-swirl","upgrade"]}>
<Pair single id="arc-shaman-overseer-spirit-surge-ex">Spirit Surge (Ex)</Pair>
<Pair hl title="Alters">Deliver touch spells spirit animal ability</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">An overseer gains the ability to cast any of her mind-affecting spells that target a single creature through her spirit animal. When she's using this ability, the selected spell's range becomes touch, and she must deliver the spell through the spirit animal via the spirit animal's <em>deliver touch spells</em> supernatural ability. The shaman's effective caster level for these spells is 2 higher than her normal caster level. The overseer can deliver any other spells via the <em>deliver touch spells</em> spirit animal ability.</Pair>
</Ability>
</>};
const _possessed_shaman = {title: "Possessed Shaman", jsx: <><h2 id="arc-shaman-possessed_shaman-possessed-shaman">Possessed Shaman</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 111</Link><br/>For a possessed shaman, merely communing with the spirit world is insufficient. Instead, she invites the spirits to share her body, granting them the chance to experience corporeal existence. In return, they grant her their skills and protect her from otherworldly influence.</p>
<Ability id="arc-shaman-possessed_shaman-shared-skill-su" icon={["upgrade"]}>
<Pair single id="arc-shaman-possessed_shaman-shared-skill-su">Shared Skill (Su)</Pair>
<Pair hl title="Replaces">Spirit magic</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A possessed shaman selects two skills. Both of these skills must use the same ability score. The possessed shaman treats these skills as if she had a number of ranks in them equal to her shaman level, and uses her Wisdom modifier in place of the ability modifier the skills would normally use.</Pair>
<Pair title="Special">If either of the skills are class skills, she receives the usual +3 bonus on those skill checks for having ranks in those skills. These ranks do not stack with her other skill ranks (only the higher number of ranks applies).</Pair>
</Ability>
<Ability id="arc-shaman-possessed_shaman-crowded-vessel-su" icon={["armor-upgrade"]}>
<Pair single id="arc-shaman-possessed_shaman-crowded-vessel-su">Crowded Vessel (Su)</Pair>
<Pair hl title="Replaces">Hex gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">Whenever a possessed shaman fails a saving throw against a charm or compulsion spell or effect, she can attempt a new saving throw (using the original DC) at the end of her next turn as the spirits inside her attempt to regain control. If the saving throw is successful, the charm or compulsion effect ends. If the saving throw fails, she is affected as normal for the remainder of the duration.</Pair>
</Ability>
<Ability id="arc-shaman-possessed_shaman-wandering-skills-su" icon={["upgrade"]}>
<Pair single id="arc-shaman-possessed_shaman-wandering-skills-su" flavor="A possessed shaman is able to make room for another spirit.">Wandering Skills (Su)</Pair>
<Pair hl title="Replaces">Wandering hex gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">When choosing her <em>wandering spirit</em> for the day, the possessed shaman chooses one skill. The possessed shaman treats this skill as if she had a number of ranks in it equal to her shaman level, and uses her Wisdom modifier in place of the ability modifier the skill would normally use. If the skill is a class skill, she receives the usual +3 bonus on skill checks for having ranks in that skill.</Pair>
<Pair title="Special">Each time the possessed shaman changes her <em>wandering spirit,</em> she can also change the skill gained through this ability. These ranks do not stack with her other skill ranks (only the higher number of ranks applies).</Pair>
</Ability>
</>};
const _primal_warden = {title: "Primal Warden", jsx: <><h2 id="arc-shaman-primal_warden-primal-warden">Primal Warden</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 7</Link><br/>The influence of <Link to="/rule/primal_magic">primal magic</Link> extends beyond what is visible and material. Spirits that linger in areas where primal magic reigns can become warped, losing touch with their former selves and experiencing random surges of power. A shaman who communes with such spirits learns to stabilize these erratic energies and draw upon them to her benefit. Such shamans gradually learn to guide their spirits toward coherence and lucidity, and in the process learn to bend chance and fortune in their favor.</p>
<Ability id="arc-shaman-primal_warden-spirit-animal" icon={["armor-upgrade"]}>
<Pair single id="arc-shaman-primal_warden-spirit-animal">Spirit Animal</Pair>
<Pair hl title="Replaces">Abilities the spirit animal gains from the shaman's chosen spirit</Pair>
<Pair title="Info">A primal warden's spirit animal exhibits unusual physical features for a creature of its type, such as unnatural colorations and extra or missing appendages.</Pair>
<Pair title="Passive Ability">Each day, the spirit animal gains resistance 10 against a random element. Roll 1d4 to determine the type of resistance (1 = acid, 2 = cold, 3 = electricity, 4 = fire).</Pair>
</Ability>
<Ability id="arc-shaman-primal_warden-unstable-spellcasting" icon={["magic-swirl"]}>
<Pair single id="arc-shaman-primal_warden-unstable-spellcasting" flavor="A primal warden's spirit is ever shifting, and the spells it grants the primal warden change from moment to moment.">Unstable Spellcasting</Pair>
<Pair hl title="Replaces">Hex gained at 8th level</Pair>
<Pair hl title="Alters">Spirit magic</Pair>
<Pair title="Ability">When the primal warden would spontaneously cast a 1st- through 8th-level spell using the <em>spirit magic</em> class feature, she produces a random spell from the <Link to="/main/spells_shaman">list of shaman spells</Link> of 1 spell level higher than the spell slot expended; use an appropriate die or another randomization method to determine the spell. When she would spontaneously cast a 9th-level spell using <em>spirit magic,</em> she instead casts a random 9th-level spell from the shaman spell list, treating her caster level as 2 higher. There is no way to predict the spell before the shaman begins casting it using <em>spirit magic,</em> and she cannot enhance the spell using metamagic feats. The spell uses the shaman's caster level, even if that caster level would normally be too low to cast the spell.</Pair>
<Pair title="At 8th Level">After determining the spell that she would cast using <em>spirit magic,</em> once per day as a <strong className="hl">free action</strong>, the primal warden shaman can choose to randomly select another spell instead, using the same method of randomization as she used before (if she obtains the same result a second time, she must keep that result).</Pair>
<Pair title="At 12th Level">She can choose to randomly select a different <em>spirit magic</em> spell 2 times per day. She cannot use this ability more than once in the same round.</Pair>
<Pair title="At 16th Level">She can choose to randomly select a different <em>spirit magic</em> spell 3 times per day.</Pair>
<Pair title="At 20th Level">She can choose to randomly select a different <em>spirit magic</em> spell 4 times per day.</Pair>
<Pair title="Special">There are 126 potential 2nd-level spells, 111 potential 3rd-level spells, 102 potential 4th-level spells, 71 potential 5th-level spells, 50 potential 6th-level spells, 40 potential 7th-level spells, 28 potential 8th-level spells, and 20 potential 9th-level spells.<sup><InnerLink showBacklink="backlink-arc-shaman-primal_warden-fake-fn-1" id="arc-shaman-primal_warden-fake-fn-1" data-hash-target to="arc-shaman-primal_warden-fake-fn-1-target">1</InnerLink></sup></Pair>
</Ability>
<Ability id="arc-shaman-primal_warden-hexes" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-shaman-primal_warden-hexes">Hexes</Pair>
<Pair hl title="Replaces">Hexes gained at 4th and 12th levels</Pair>
<Pair hl title="Alters">Hexes</Pair>
<Pair title="Ability">A primal warden shaman gains the hexes below at the specified levels. A primal warden shaman cannot select the <em>chant</em> hex, the <em>evil eye</em> hex, the <em>misfortune</em> hex, or any witch hexes.</Pair>
</Ability>
<Ability id="arc-shaman-primal_warden-primal-blessing-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-shaman-primal_warden-primal-blessing-su">Primal Blessing (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">The shaman gains the ability to channel primal magic into a target within 30 feet. Roll 1d4 to determine the effect. <strong>On a result of 1,</strong> the target takes a -2 penalty on attack rolls, saving throws, and skill checks. <strong>On a result of 2,</strong> the target's size is enlarged or reduced, as per <Link to="/spell/enlarge_person">enlarge person</Link> or <Link to="/spell/reduce_person">reduce person</Link>, and the effect functions even if the target is not a humanoid; roll randomly to determine the effect. <strong>On a result of 3,</strong> the target gains a +20-foot enhancement bonus to her base speed. <strong>On a result of 4,</strong> all attacks against the target suffer a 20% miss chance.</Pair>
<Pair title="Special">The effects of this hex last for 1 minute. A creature affected by this hex cannot be affected by it again for 24 hours.</Pair>
</Ability>
<Ability id="arc-shaman-primal_warden-greater-primal-blessing-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-shaman-primal_warden-greater-primal-blessing-su">Greater Primal Blessing (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">The shaman's <em>primal blessing</em> hex improves. This functions as the <em>primal blessing</em> hex in all ways, except that the shaman has a chance to bestow greater benefits upon her targets. Roll 1d6 to determine the effect. On a result of 1-4, refer to the primal blessing ability to determine the effect. <strong>On a roll of 5,</strong> the target gains a luck bonus on attack rolls and saving throws and to her Armor Class. <strong>On a roll of 6,</strong> the target gains the benefit of the <Link to="/spell/haste">haste</Link> spell, using the primal warden's shaman level as her caster level.</Pair>
</Ability>
<section data-footnotes><h3 id="arc-shaman-primal_warden-label">Footnotes</h3><ol>
<li id="arc-shaman-primal_warden-fake-fn-1-target"><p>As a suggestion: <strong>2nd level:</strong> Roll a d8, rerolling any 8s. Subtract 1 from that number, then multiply it by 20 and add 1d20. Reroll for results over 126. <strong>3rd level:</strong> Roll a d6 and subtract 1 from the result, then multiply it by 20 and add 1d20. Reroll for results higher than 111. <strong>4th level:</strong> Use the 3rd-level process, or roll a d10, rerolling any 10s. Subtract 1 from that number, then multiply it by 12 and add 1d12. Reroll for numbers higher than 102. <strong>5th level:</strong> Roll a d6 and subtract 1 from the result, then multiply it by 12 and add 1d12. Reroll if the result is 72. <strong>6th level:</strong> Roll 1d100, then divide the result by 2, rounding up. <strong>7th level:</strong> Roll a d4, subtract 1 from the result, then multiply it by 10 and add 1d10. <strong>8th level:</strong> Roll a d8, rerolling any 8s. Subtract 1 from that number, then multiply it by 4 and add 1d4. <strong>9th level:</strong> Roll 1d20. <InnerLink aria-label="Back to reference 1" id="backlink-arc-shaman-primal_warden-fake-fn-1" data-hash-target to="arc-shaman-primal_warden-fake-fn-1">↩</InnerLink></p></li>
</ol></section></>};
const _serendipity_shaman = {title: "Serendipity Shaman", jsx: <><h2 id="arc-shaman-serendipity_shaman-serendipity-shaman">Serendipity Shaman</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 5</Link><br/>Although some <Link to="/race/catfolk">catfolk</Link> venerate elven and human deities, the traditional worship of the so-called "spirits of creation" is by far the most prevalent religion among their kind, especially in the catfolk nation of Murraseth. The serendipitous, shamanistic rites associated with this faith focus upon attracting good fortune and banishing ill fortune in the name of these spirits. Although the ancient practices of the serendipity shaman were once exclusive to the mysterious catfolk nation, the catfolk's curiosity and willingness to travel have spread them across Golarion, where today many with a tendency toward good fortune embrace the faith.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-shaman-serendipity_shaman--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>A shaman must have a racial trait with "luck" in its name to select this archetype, such as cat's luck or <Link to="/race/halfling">halfling</Link> luck. A character with the <Link to="/feat/defiant_luck">Defiant Luck</Link> feat also qualifies for this archetype.</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-shaman-serendipity_shaman-luck-magic" icon={["spell-book"]}>
<Pair single id="arc-shaman-serendipity_shaman-luck-magic">Luck Magic</Pair>
<Pair hl title="Alters">Spirit</Pair>
<Pair title="Info">A serendipity shaman adds the domain spells from the <Link to="/domain/luck">Luck</Link> cleric domain to the list of spells she can cast with the <em>spirit magic</em> ability instead of her spirit's <em>spirit magic</em> spells.</Pair>
</Ability>
<Ability id="arc-shaman-serendipity_shaman-luck-hexes" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-shaman-serendipity_shaman-luck-hexes">Luck Hexes</Pair>
<Pair title="Ability">A serendipity shaman can select from any of the following hexes, in addition to general shaman hexes and the hexes granted by her spirit. When she gains the <em>wandering spirit</em> class feature, she can select one of these hexes in place of a <em>wandering hex.</em></Pair>
</Ability>
<Ability id="arc-shaman-serendipity_shaman-channel-luck-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-shaman-serendipity_shaman-channel-luck-su">Channel Luck (Su)</Pair>
<Pair title="Prerequisites">8th-level shaman</Pair>
<Pair title="Ability">A serendipity shaman gains the ability to channel luck, as the cleric <Link to="/ability/variant_channeling">variant channeling</Link> ability of the same name, using her shaman level to determine her effective cleric level for the purpose of her <Link to="/ability/channel_energy">channel energy</Link> ability.</Pair>
<Pair title="Special">She does not count as having the channel energy ability for the purpose of meeting feat prerequisites or prestige class requirements with the exception of <Link to="/feat/selective_channeling">Selective Channeling</Link>, which the shaman can take as normal.</Pair>
</Ability>
<Ability id="arc-shaman-serendipity_shaman-fortune-ex" extraClasses="subAbility" icon={["rolling-dices"]}>
<Pair single id="arc-shaman-serendipity_shaman-fortune-ex">Fortune (Ex)</Pair>
<Pair title="Prerequisites">5th-level shaman<sup><InnerLink showBacklink="backlink-arc-shaman-serendipity_shaman-fake-fn-1" id="arc-shaman-serendipity_shaman-fake-fn-1" data-hash-target to="arc-shaman-serendipity_shaman-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Usage">1 time/day + 1 per six shaman levels beyond 5th<ByLevelPop levels={[[5,1],[11,2],[17,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Immediate Action">You can reroll any one d20 roll that you have just made before the results of the roll are revealed. You must take the result of the reroll, even if it's worse than the original roll.</Pair>
</Ability>
<Ability id="arc-shaman-serendipity_shaman-misfortune-ex" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-shaman-serendipity_shaman-misfortune-ex">Misfortune (Ex)</Pair>
<Pair title="Standard Action">A serendipity shaman can afflict one target within 30 feet with misfortune, causing it to take a -2 penalty on all saving throws against the shaman's spells. The effect lasts for 1 minute or until the target hits the shaman with an attack.</Pair>
</Ability>
<Ability id="arc-shaman-serendipity_shaman-spirit-magic" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-shaman-serendipity_shaman-spirit-magic">Spirit Magic</Pair>
<Pair title="Ability">A serendipity shaman adds both her spirit's <em>spirit magic</em> spells and the domain spells from the Luck cleric domain to the list of spells she can cast with the <em>spirit magic</em> ability.</Pair>
<Pair title="Special">This hex cannot be taken as a <em>wandering hex.</em></Pair>
</Ability>
<Ability id="arc-shaman-serendipity_shaman-tweak-the-odds-su" extraClasses="subAbility" icon={["rolling-dices"]}>
<Pair single id="arc-shaman-serendipity_shaman-tweak-the-odds-su">Tweak the Odds (Su)</Pair>
<Pair title="Usage">1 time/day per shaman level</Pair>
<Pair title="Immediate Action">Whenever the serendipity shaman or one of her allies within 30 feet rolls an ability check, attack roll, saving throw, or skill check, the shaman can use this ability to tweak the odds in her favor, increasing the result of the die roll or check by 1. This can turn a normal hit into a critical threat, but it cannot make an attack roll an automatic hit (this bonus does not stack with effects that increase a weapon's critical threat range, such as <Link to="/feat/improved_critical">Improved Critical</Link> or keen edge).</Pair>
<Pair title="At 4th Level">She can spend additional uses of this ability, up to <Link to="/misc/one_fourth">one-fourth</Link> of her shaman level, to further increase the die result of the target's roll by an additional 1. For example, a 12th-level shaman can spend up to three uses of this ability to increase an ally's roll by 1 per use expended.</Pair>
</Ability>
<section data-footnotes><h3 id="arc-shaman-serendipity_shaman-label">Footnotes</h3><ol>
<li id="arc-shaman-serendipity_shaman-fake-fn-1-target"><p>Original text reads: <em>"This hex functions as the <Link to="/arc-oracle/dual_cursed_oracle">dual-cursed oracle</Link> revelation of the same name, using the shaman's class level as her effective oracle level."</em> The prerequisite comes from the revelation. <InnerLink aria-label="Back to reference 1" id="backlink-arc-shaman-serendipity_shaman-fake-fn-1" data-hash-target to="arc-shaman-serendipity_shaman-fake-fn-1">↩</InnerLink></p></li>
</ol></section></>};
const _speaker_for_the_past = {title: "Speaker for the Past", jsx: <><h2 id="arc-shaman-speaker_for_the_past-speaker-for-the-past">Speaker for the Past</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 111</Link><br/>A speaker for the past is a shaman who specifically serves as the voice for spirits from her people's history. A speaker for the past is often an advocate of the ancestors of a specific group, the voice of experience, and a powerful resource that allows the past to aid the present.</p>
<Ability icon={["skills"]} id="arc-shaman-speaker_for_the_past-undefined">
<Pair id="arc-shaman-speaker_for_the_past-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/linguistics">Linguistics</Link> (INT), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/use_magic_device">Use Magic Device</Link> (CHA)</Pair></Ability>
<Ability id="arc-shaman-speaker_for_the_past-mysteries-of-the-past" icon={["spell-book"]}>
<Pair single id="arc-shaman-speaker_for_the_past-mysteries-of-the-past">Mysteries of the Past</Pair>
<Pair hl title="Replaces">Familiar</Pair>
<Pair title="Info">A speaker for the past adds the spells from the <Link to="/mystery/ancestor">ancestor</Link> and <Link to="/mystery/time">time</Link> oracle mysteries to her class spell list (at the oracle level for those spells).</Pair>
<Pair title="Choice">The speaker for the past must choose a time when she must spend 1 hour each day in quiet contemplation to regain her daily allotment of spells, but does not need to commune with a familiar during this time.</Pair>
<Pair title="Special">Because she has no familiar, she does not gain a <em>spirit familiar</em> feature from any spirit she bonds with.</Pair>
</Ability>
<Ability id="arc-shaman-speaker_for_the_past-revelations-of-the-past" icon={["stairs-goal"]}>
<Pair single id="arc-shaman-speaker_for_the_past-revelations-of-the-past">Revelations of the Past</Pair>
<Pair hl title="Replaces">Wandering spirit, wandering hex</Pair>
<Pair title="At 4th Level">The speaker for the past can select a revelation from the ancestor or time mysteries.</Pair>
<Pair title="At 6th Level">She selects another such revelation.</Pair>
<Pair title="At 12th Level">She selects another such revelation.</Pair>
<Pair title="At 14th Level">She selects another such revelation.</Pair>
<Pair title="At 20th Level">She selects another such revelation.</Pair>
<Pair title="Special">She uses her shaman level as her oracle level for these revelations, and uses her Wisdom modifier in place of her Charisma modifier for the purposes of the revelation.</Pair>
</Ability>
</>};
const _spirit_warden = {title: "Spirit Warden", jsx: <><h2 id="arc-shaman-spirit_warden-spirit-warden">Spirit Warden</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 112</Link><br/>Not all spirits deserve reverence and respect. Some are twisted and despicable. It's a spirit warden's duty to end these spirits' existence.</p>
<Ability icon={["skills"]} id="arc-shaman-spirit_warden-undefined">
<Pair id="arc-shaman-spirit_warden-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/intimidate">Intimidate</Link> (CHA)</Pair>
<Pair title="Removed Skills">Diplomacy, Handle Animal</Pair></Ability>
<Ability id="arc-shaman-spirit_warden-unnatural-mien-ex" icon={["upgrade"]}>
<Pair single id="arc-shaman-spirit_warden-unnatural-mien-ex" flavor="The spirit warden's dealings with the spirit world give her an unsettling demeanor.">Unnatural Mien (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">She gains a +2 bonus on Intimidate checks to demoralize a foe.</Pair>
</Ability>
<Ability id="arc-shaman-spirit_warden-restless-magic-su" icon={["spell-book"]}>
<Pair single id="arc-shaman-spirit_warden-restless-magic-su">Restless Magic (Su)</Pair>
<Pair hl title="Replaces">Spirit magic spells gained from the shaman's spirit</Pair>
<Pair title="Info">The spirit warden adds the following spells to the list of spells she can cast using <em>spirit magic</em> at the listed spell level:</Pair>
<Pair plain title="1st"><Link to="/spell/detect_undead">Detect undead</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/command_undead">Command undead</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/halt_undead">Halt undead</Link></Pair>
<Pair plain title="4th"><Link to="/spell/death_ward">Death ward</Link></Pair>
<Pair plain title="5th"><Link to="/spell/possess_object">Possess object</Link></Pair>
<Pair plain title="6th"><Link to="/spell/undeath_to_death">Undeath to death</Link></Pair>
<Pair plain title="7th"><Link to="/spell/ethereal_jaunt">Ethereal jaunt</Link></Pair>
<Pair plain title="8th"><Link to="/spell/control_undead">Control undead</Link></Pair>
<Pair plain title="9th"><Link to="/spell/foresight">Foresight</Link></Pair>
</Ability>
<Ability id="arc-shaman-spirit_warden-rebuke-spirits-su" icon={["aura"]}>
<Pair single id="arc-shaman-spirit_warden-rebuke-spirits-su">Rebuke Spirits (Su)</Pair>
<Pair hl title="Replaces">Hex gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability">The spirit warden gains the ability to <Link to="/ability/channel_positive_energy">channel positive energy</Link> as a cleric of her level. Regardless of her alignment, she can only use this ability to harm undead creatures.</Pair>
</Ability>
<Ability id="arc-shaman-spirit_warden-laugh-at-death-su" icon={["armor-upgrade"]}>
<Pair single id="arc-shaman-spirit_warden-laugh-at-death-su" flavor="The spirit warden's familiarity with the dead has filled her with contempt for death itself.">Laugh at Death (Su)</Pair>
<Pair hl title="Replaces">Hex gained at 10th level</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Passive Ability">She gains a +4 insight bonus on saving throws against death effects and to avoid or remove negative levels.</Pair>
</Ability>
</>};
const _true_silvered_throne = {title: "True Silvered Throne", jsx: <><h2 id="arc-shaman-true_silvered_throne-true-silvered-throne">True Silvered Throne</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 23</Link><br/>Members in good standing who have risen to a prestigious rank within the Esoteric Order of the Palatine Eye, true silvered thrones have managed to discover rituals and occult secrets within the lore of their order. They are scholars of ancient mysteries and keepers of forbidden secrets who go beyond simply learning eldritch traditions to make the occult a part of their very souls.</p>
<Ability icon={["skills"]} id="arc-shaman-true_silvered_throne-undefined">
<Pair id="arc-shaman-true_silvered_throne-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT), <Link to="/skill/linguistics">Linguistics</Link> (INT), <Link to="/skill/sense_motive">Sense Motive</Link> (WIS)</Pair>
<Pair title="Removed Skills">Handle Animal, Survival</Pair></Ability>
<Ability id="arc-shaman-true_silvered_throne-occult-grimoire-ex" icon={["spell-book","hazard-sign"]}>
<Pair single id="arc-shaman-true_silvered_throne-occult-grimoire-ex">Occult Grimoire (Ex)</Pair>
<Pair hl title="Replaces">Spirit animal</Pair>
<Pair title="Ability">A true silvered throne's divine magic arises from communion with spirits alongside study of archaic lore compiled into a personal <em>occult grimoire.</em> Unlike a wizard's spellbook, this <em>grimoire</em> doesn't contain specific spells. By studying his <em>grimoire,</em> a true silvered throne can prepare any spell on the shaman spell list or provided by his spirit.</Pair>
<Pair title="Special">If this <em>grimoire</em> is lost or destroyed, he cannot prepare new spells or use his <em>spirit magic</em> class feature until it is replaced, which requires 1 week of work.</Pair>
</Ability>
<Ability id="arc-shaman-true_silvered_throne-ritual-hex" icon={["stairs-goal"]}>
<Pair single id="arc-shaman-true_silvered_throne-ritual-hex">Ritual Hex</Pair>
<Pair title="Ability">A true silvered throne gains <Link to="/feat/ritual_hex">Ritual Hex</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-shaman-true_silvered_throne-scarab-of-the-second-throne-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-shaman-true_silvered_throne-scarab-of-the-second-throne-ex">Scarab of the Second Throne (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A true silvered throne successfully constructs a golden scarab that is infused with some of his occult potential. Treat this construct as a <Link to="/monster/clockwork_spy">clockwork spy</Link>, except it has half its master's total hit points regardless of its Hit Dice and can write and take dictation rather than record audio.</Pair>
<Pair title="Passive Ability">If worn in the true silvered throne's amulet slot, the golden scarab provides a +4 bonus to AC against sneak attacks and attacks of opportunity, as the scarab animates and moves to intercept attacks.</Pair>
<Pair title="Special">If lost or destroyed, the golden scarab can be replaced in a week-long ritual costing 250 gp.</Pair>
</Ability>
<Ability id="arc-shaman-true_silvered_throne-wandering-ritual-su" icon={["stairs-goal"]}>
<Pair single id="arc-shaman-true_silvered_throne-wandering-ritual-su">Wandering Ritual (Su)</Pair>
<Pair hl title="Replaces">Wandering spirit, wandering hex</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A true silvered throne can attempt to coax a nearby spirit into service with a 1-minute-long ritual once per day, gaining that spirit's <em>spirit</em> ability and adding its list of spells to those he can cast using his <em>spirit magic.</em> The silvered throne can maintain this bond for 1 hour, or until he dismisses the spirit as a <strong className="hl">free action</strong>.</Pair>
<Pair title="At 8th Level">He can perform a <em>wandering ritual</em> 2 times/day.</Pair>
<Pair title="At 12th Level">He also gains this spirit's <em>greater spirit power</em> while bonded.</Pair>
<Pair title="At 14th Level">He can perform a <em>wandering ritual</em> 3 times/day.</Pair>
<Pair title="At 20th Level">He gains its <em>true spirit power</em> as well.</Pair>
</Ability>
<Ability id="arc-shaman-true_silvered_throne-esoteric-rites-ex" icon={["upgrade"]}>
<Pair single id="arc-shaman-true_silvered_throne-esoteric-rites-ex">Esoteric Rites (Ex)</Pair>
<Pair hl title="Replaces">8th-level hex</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A true silvered throne gains a +1 insight bonus on skill checks attempted as part of an <Link to="/rule/occult_rituals">occult ritual</Link>. This bonus increases by 1 for every 4 shaman levels beyond 8th (to a maximum of +5 at 20th level).<sup><InnerLink showBacklink="backlink-arc-shaman-true_silvered_throne-fake-fn-1" id="arc-shaman-true_silvered_throne-fake-fn-1" data-hash-target to="arc-shaman-true_silvered_throne-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Special">If the true silvered throne is the ritual's primary caster, he also adds this bonus to the caster level of the ritual's effect.</Pair>
</Ability>
<section data-footnotes><h3 id="arc-shaman-true_silvered_throne-label">Footnotes</h3><ol>
<li id="arc-shaman-true_silvered_throne-fake-fn-1-target"><p>This math doesn't add up. Following the written rules, you would only get a +4 bonus at 20th level. This only makes sense if the starting bonus is +2. Consult your GM if you wish to interpret the ability this way. <InnerLink aria-label="Back to reference 1" id="backlink-arc-shaman-true_silvered_throne-fake-fn-1" data-hash-target to="arc-shaman-true_silvered_throne-fake-fn-1">↩</InnerLink></p></li>
</ol></section></>};
const _unsworn_shaman = {title: "Unsworn Shaman", jsx: <><h2 id="arc-shaman-unsworn_shaman-unsworn-shaman">Unsworn Shaman</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 112</Link><br/>An unsworn shaman never binds herself to one specific spirit, always making new deals as she deems necessary for the circumstances that she finds herself in. While this weakens the powers she can access from any one spirit, it gives her access to a broader overall range of abilities.</p>
<Ability id="arc-shaman-unsworn_shaman-minor-spirit-su" icon={["stairs-goal"]}>
<Pair single id="arc-shaman-unsworn_shaman-minor-spirit-su">Minor Spirit (Su)</Pair>
<Pair hl title="Replaces">Spirit</Pair>
<Pair hl title="Alters">Hex</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The unsworn shaman forms a temporary bond with a minor spirit each day, granting her access to a <Link to="/ability/shaman_hexes">shaman</Link> or <Link to="/ability/hexes">witch hex</Link> of her choosing, but not a <em>major hex</em> or a <em>grand hex.</em> She must make this selection each day when she prepares her spells for the day. Until she changes the minor spirit, she continues to have access to the shaman or witch hex.</Pair>
<Pair title="At 2nd Level">She can instead select a hex from one of her wandering spirits selected for that day. If she selects a witch hex, she treats her shaman level as her witch level, and uses her Wisdom in place of her Intelligence for the purpose of that hex.</Pair>
<Pair title="At 4th Level">She can make temporary bonds with 2 minor spirits (thus gaining 2 hexes).</Pair>
<Pair title="At 8th Level">She can make temporary bonds with 3 minor spirits (thus gaining 3 hexes).</Pair>
<Pair title="At 12th Level">She can make temporary bonds with 4 minor spirits (thus gaining 4 hexes).</Pair>
<Pair title="At 16th Level">She can make temporary bonds with 5 minor spirits (thus gaining 5 hexes).</Pair>
<Pair title="At 20th Level">She can make temporary bonds with 6 minor spirits (thus gaining 6 hexes).</Pair>
</Ability>
<Ability id="arc-shaman-unsworn_shaman-spirit-animal" icon={["upgrade"]}>
<Pair single id="arc-shaman-unsworn_shaman-spirit-animal">Spirit Animal</Pair>
<Pair hl title="Alters">Spirit animal</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">An unsworn shaman's spirit animal gains the spirit animal bonus from one of her <em>wandering spirits</em> (see below). This bonus can be changed each day when the shaman prepares spells, but it must correspond to one of the shaman's wandering spirits.</Pair>
</Ability>
<Ability id="arc-shaman-unsworn_shaman-wandering-spirit-su" icon={["stairs-goal"]}>
<Pair single id="arc-shaman-unsworn_shaman-wandering-spirit-su">Wandering Spirit (Su)</Pair>
<Pair hl title="Replaces">Wandering hex</Pair>
<Pair hl title="Alters">Wandering spirit</Pair>
<Pair title="At 2nd Level">The unsworn shaman gains access to the <em>wandering spirit</em> class feature.</Pair>
<Pair title="At 6th Level">She also gains a second <em>wandering spirit.</em></Pair>
<Pair title="At 10th Level">She gains the abilities listed in the <em>greater</em> version of her <em>wandering spirit.</em></Pair>
<Pair title="At 14th Level">She gains the abilities listed in the <em>greater</em> version of her second <em>wandering spirit.</em></Pair>
<Pair title="At 18th Level">She gains the abilities listed in the <em>true</em> version of her <em>wandering spirit.</em></Pair>
<Pair title="At 20th Level">She gains the abilities listed in the <em>true</em> version of her second <em>wandering spirit.</em></Pair>
</Ability>
<Ability id="arc-shaman-unsworn_shaman-spirit-magic-sp" icon={["broken-shield"]}>
<Pair single id="arc-shaman-unsworn_shaman-spirit-magic-sp">Spirit Magic (Sp)</Pair>
<Pair hl title="Alters">Spirit magic</Pair>
<Pair title="Info">The unsworn shaman gains this ability at 2nd level rather than at 1st.</Pair>
</Ability>
</>};
const _visionary = {title: "Visionary", jsx: <><h2 id="arc-shaman-visionary-visionary">Visionary</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 112</Link><br/>The visionary is a master at divination, drawing upon her intimate relationship with the spirit world to ferret out all manner of secrets and insights about the world around her and beyond.</p>
<Ability id="arc-shaman-visionary-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-shaman-visionary-bonus-feat">Bonus Feat</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">The visionary gains <Link to="/feat/diviners_delving">Diviner's Delving</Link> as a bonus feat, even if she does not meet the prerequisites.</Pair>
</Ability>
<Ability id="arc-shaman-visionary-discern-magical-expertise-ex" icon={["stairs-goal"]}>
<Pair single id="arc-shaman-visionary-discern-magical-expertise-ex">Discern Magical Expertise (Ex)</Pair>
<Pair hl title="Replaces">Wandering spirit gained at 4th level</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">The shaman can determine what type of spellcasting expertise a creature possesses by studying the creature for 2 rounds with <Link to="/spell/detect_magic">detect magic</Link> or any of the following spells: <Link to="/spell/detect_chaos">detect chaos</Link>, <Link to="/spell/detect_evil">detect evil</Link>, <Link to="/spell/detect_good">detect good</Link>, or <Link to="/spell/detect_law">detect law</Link> (if the creature belongs to the alignment). This ability tells the visionary what bloodlines, domains, hexes, schools, or mysteries (if any) the creature possesses. A successful Will saving throw negates this effect (DC = 10 + 1/2 the shaman's level + the shaman's Wisdom modifier).</Pair>
<Pair title="Special">A creature affected by this ability cannot be affected by it again for 24 hours. This ability functions through magical sensors as with <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link> and <Link to="/spell/scrying">scrying</Link>.</Pair>
</Ability>
<Ability id="arc-shaman-visionary-vision-spirit-magic" icon={["spell-book"]}>
<Pair single id="arc-shaman-visionary-vision-spirit-magic">Vision Spirit Magic</Pair>
<Pair hl title="Replaces">Spirit magic spells gained from the shaman's wandering spirit</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Info">The visionary adds the following spells to the list of spells she can cast using <em>spirit magic</em> at the listed spell level:</Pair>
<Pair plain title="1st"><Link to="/spell/see_alignment">See alignment</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/see_invisibility">See invisibility</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/clairaudience_clairvoyance">Clairaudience/clairvoyance</Link></Pair>
<Pair plain title="4th"><Link to="/spell/detect_scrying">Detect scrying</Link></Pair>
<Pair plain title="5th"><Link to="/spell/prying_eyes">Prying eyes</Link></Pair>
<Pair plain title="6th"><Link to="/spell/legend_lore">Legend lore</Link></Pair>
<Pair plain title="7th"><Link to="/spell/vision">Vision</Link></Pair>
<Pair plain title="8th"><Link to="/spell/moment_of_prescience">Moment of prescience</Link></Pair>
<Pair plain title="9th"><Link to="/spell/foresight">Foresight</Link></Pair>
</Ability>
<Ability id="arc-shaman-visionary-improved-divination-su" icon={["upgrade","spell-book"]}>
<Pair single id="arc-shaman-visionary-improved-divination-su">Improved Divination (Su)</Pair>
<Pair hl title="Replaces">Wandering hex gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The visionary becomes more adept at divination magic. When she casts the <Link to="/spell/augury">augury</Link> spell, her chance for an accurate answer is automatically the maximum of 90%. Likewise, when she casts <Link to="/spell/divination">divination</Link>, she has the maximum 90% chance of an accurate answer.</Pair>
<Pair title="Ability">The visionary can prepare <em>scrying</em> as a 4th-level spell, and it requires only 1 minute to cast. The visionary also has a 10% chance per caster level to cast the spells listed in the <em>scrying</em> spell description, instead of 5% per caster level (to a maximum of 100%). The visionary must still prepare these spells to receive these benefits.</Pair>
</Ability>
<Ability id="arc-shaman-visionary-wandering-spirit-su" icon={["stairs-goal"]}>
<Pair single id="arc-shaman-visionary-wandering-spirit-su">Wandering Spirit (Su)</Pair>
<Pair hl title="Replaces">Greater version of wandering spirit gained at 12th level, true version of wandering spirit gained at 20th level</Pair>
<Pair title="At 12th Level">The visionary forms a temporary bond with another spirit (other than the one she selected using her <em>spirit</em> class feature). This is identical to the 4th-level shaman class feature. This adds the <em>wandering spirit magic</em> spells to the list of spells she can cast using <em>spirit magic,</em> along with <em>vision spirit magic</em> and her original spirit.</Pair>
<Pair title="At 20th Level">She gains the abilities listed in the <em>greater</em> version of her wandering spirit.</Pair>
</Ability>
</>};
const _witch_doctor = {title: "Witch Doctor", jsx: <><h2 id="arc-shaman-witch_doctor-witch-doctor">Witch Doctor</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 113</Link><br/>The witch doctor is a healer who specializes in afflictions of the soul. Often misunderstood, she protects her tribe with healing powers, powerful defensive magic, and her own divine "witchcraft."</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-shaman-witch_doctor--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Nonevil alignment</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-shaman-witch_doctor-channel-energy-su" icon={["aura"]}>
<Pair single id="arc-shaman-witch_doctor-channel-energy-su">Channel Energy (Su)</Pair>
<Pair hl title="Replaces">Hexes gained at 4th and 12th levels</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability">The witch doctor can draw transcendental energies to her location, flooding it with positive energy as the cleric class feature. The witch doctor uses her shaman level - 3 as her effective cleric level. This is a separate pool of <em>channel energy</em> that does not stack with the <Link to="/shamanspirit/life">life</Link> spirit's <em>channel spirit</em> ability.</Pair>
</Ability>
<Ability id="arc-shaman-witch_doctor-counter-curse-su" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-shaman-witch_doctor-counter-curse-su">Counter Curse (Su)</Pair>
<Pair hl title="Replaces">Hex gained at 8th level</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">The witch doctor can choose to lose any prepared <em>spirit magic</em> spell that is 3rd level or higher in order to spontaneously cast <Link to="/spell/dispel_magic">dispel magic</Link> or <Link to="/spell/remove_curse">remove curse</Link>. This ability can only target a spell effect that is on an ally (including herself).</Pair>
<Pair title="Special">If she forfeits a <em>spirit magic</em> spell higher than 3rd level, she gains a +2 sacred bonus on her caster level check to dispel the spell or to remove the curse for every spell level higher than 3rd that she sacrifices.</Pair>
</Ability>
<Ability id="arc-shaman-witch_doctor-countering-hex-su" icon={["armor-upgrade"]}>
<Pair single id="arc-shaman-witch_doctor-countering-hex-su">Countering Hex (Su)</Pair>
<Pair hl title="Replaces">Hex gained at 10th level</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">The witch doctor can use her hex magic to <Link to="/rule/counterspells">counterspell</Link> as a <Link to="/rule/readied_action">readied action</Link> as dispel magic instead. She must succeed at a dispel check (1d20 + her shaman level) with a DC equal to 11 + the spell's caster level. If <em>countering hex</em> succeeds, the spell fizzles away and is lost. Failure means the spell is not countered. In either case, the witch doctor cannot attempt to use this hex against any of that caster's spells again for 24 hours.</Pair>
<Pair title="Special">The witch doctor cannot use <em>countering hex</em> on an ongoing effect, a magic item, or a hex.</Pair>
</Ability>
</>};
export default {animist:_animist,benefactor:_benefactor,crystal_tender:_crystal_tender,deep_shaman:_deep_shaman,draconic_shaman:_draconic_shaman,grasping_vine:_grasping_vine,name_keeper:_name_keeper,overseer:_overseer,possessed_shaman:_possessed_shaman,primal_warden:_primal_warden,serendipity_shaman:_serendipity_shaman,speaker_for_the_past:_speaker_for_the_past,spirit_warden:_spirit_warden,true_silvered_throne:_true_silvered_throne,unsworn_shaman:_unsworn_shaman,visionary:_visionary,witch_doctor:_witch_doctor}