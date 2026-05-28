import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _naga_aspirant = {title: "Naga Aspirant", jsx: <><h2 id="arc-druid-naga_aspirant-naga-aspirant">Naga Aspirant</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 196</Link><br/>The naga aspirant follows the ancient beliefs and engages in the rituals of a druidic sect dedicated to the transcendence of her nagaji form through absolute devotion to nagas and naga gods. Through acting as a herald to the naga deities, the aspirant is rewarded with the ability to unlock her ultimate spirit form and become a true naga. A naga aspirant has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-druid-naga_aspirant--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/nagaji">Nagaji</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-druid-naga_aspirant-aspirants-bond-ex" icon={["spell-book"]}>
<Pair single id="arc-druid-naga_aspirant-aspirants-bond-ex" flavor="A naga aspirant gains a spiritual connection to the serpentine deities worshiped by the nagas.">Aspirant's Bond (Ex)</Pair>
<Pair hl title="Replaces">Spontaneous casting</Pair>
<Pair title="Passive Ability">At 1st level, and <strong className="hl">each time she gains a druid level</strong>, she may add one of the following spells to her druid spell list.</Pair>
<Pair plain title="0"><Link to="/spell/acid_splash">Acid splash</Link>, <Link to="/spell/bleed">bleed</Link>, <Link to="/spell/daze">daze</Link>, <Link to="/spell/mage_hand">mage hand</Link>, <Link to="/spell/open_close">open/close</Link>, <Link to="/spell/ray_of_frost">ray of frost</Link></Pair>
<Pair plain title="1st"><Link to="/spell/charm_person">Charm person</Link>, <Link to="/spell/divine_favor">divine favor</Link>, <Link to="/spell/expeditious_retreat">expeditious retreat</Link>, <Link to="/spell/mage_armor">mage armor</Link>, <Link to="/spell/magic_missile">magic missile</Link>, <Link to="/spell/ray_of_enfeeblement">ray of enfeeblement</Link>, <Link to="/spell/shield">shield</Link>, <Link to="/spell/shield_of_faith">shield of faith</Link>, <Link to="/spell/silent_image">silent image</Link>, <Link to="/spell/true_strike">true strike</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/acid_arrow">Acid arrow</Link>, <Link to="/spell/detect_thoughts">detect thoughts</Link>, <Link to="/spell/invisibility">invisibility</Link>, <Link to="/spell/mirror_image">mirror image</Link>, <Link to="/spell/scorching_ray">scorching ray</Link>, <Link to="/spell/see_invisibility">see invisibility</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/dispel_magic">Dispel magic</Link>, <Link to="/spell/displacement">displacement</Link>, <Link to="/spell/fireball">fireball</Link>, <Link to="/spell/lightning_bolt">lightning bolt</Link>, <Link to="/spell/suggestion">suggestion</Link></Pair>
<Pair plain title="4th"><Link to="/spell/divine_power">Divine power</Link>, <Link to="/spell/greater_invisibility">greater invisibility</Link></Pair>
</Ability>
<Ability id="arc-druid-naga_aspirant-aspirants-enlightenment-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-naga_aspirant-aspirants-enlightenment-ex">Aspirant's Enlightenment (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A naga aspirant gains a +4 bonus on saving throws against the spell-like abilities, supernatural abilities, and poison of <Link to="/family/naga">nagas</Link>.</Pair>
</Ability>
<Ability id="arc-druid-naga_aspirant-naga-shape-su" icon={["upgrade"]}>
<Pair single id="arc-druid-naga_aspirant-naga-shape-su">Naga Shape (Su)</Pair>
<Pair hl title="Replaces">Wild Shape</Pair>
<Pair title="At 4th Level">The naga aspirant gains the <em>wild shape</em> ability, as a normal druid.</Pair>
<Pair title="At 6th Level">The naga aspirant can use her <em>wild shape</em> ability to assume the form of a true naga. This effect functions in a similar manner to a <Link to="/spell/shapechange">shapechange</Link> spell with the following exception. The druid's true naga form is unique, representing her personal evolution. When taking naga form, the nagaji's body transforms into that of a large serpent, though she keeps her own head. The naga aspirant loses her limbs and her size increases by one category, granting her a +4 size bonus to Strength and Constitution, a -2 penalty to Dexterity, and a +2 enhancement bonus to her natural armor bonus. She gains a +10 enhancement bonus to land speed and a <Link to="/umr/bite_attack">bite attack</Link> that deals 1d6 points of damage. She can cast verbal spells in this form, but cannot cast spells with other components without metamagic or feats such as <Link to="/feat/natural_spell">Natural Spell</Link>. This otherwise works like and replaces <em>wild shape.</em></Pair>
</Ability>
<Ability id="arc-druid-naga_aspirant-augmented-form-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-druid-naga_aspirant-augmented-form-su">Augmented Form (Su)</Pair>
<Pair hl title="Replaces">Venom immunity, a thousand faces, timeless body</Pair>
<Pair title="At 9th Level">A naga aspirant can choose one of the following abilities to enhance her naga form. Once chosen, this augmentation cannot be changed and always applies to her naga form. The caster level for these abilities is equal to her druid level, and unless otherwise stated, the DC is equal to 10 + <Link to="/misc/half">half</Link> the druid's class level + the druid's Charisma bonus.</Pair>
<Pair title="At 13th Level">The aspirant gains another ability from the list below.</Pair>
<Pair title="At 17th Level">The aspirant gains a third ability from the list below.</Pair>
</Ability>
<Ability id="arc-druid-naga_aspirant-charming-gaze-sp" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="arc-druid-naga_aspirant-charming-gaze-sp">Charming Gaze (Sp)</Pair>
<Pair title="Ability">The druid gains a <Link to="/umr/gaze">gaze</Link> attack that affects creatures within 30 feet as a <Link to="/spell/charm_person">charm person</Link> spell.</Pair>
</Ability>
<Ability id="arc-druid-naga_aspirant-darkvision-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-druid-naga_aspirant-darkvision-su">Darkvision (Su)</Pair>
<Pair title="Passive Ability">The druid gains darkvision with a range of 60 feet.</Pair>
</Ability>
<Ability id="arc-druid-naga_aspirant-detect-thoughts-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-druid-naga_aspirant-detect-thoughts-su">Detect Thoughts (Su)</Pair>
<Pair title="Ability">The druid can use <em>detect thoughts</em> at will.</Pair>
</Ability>
<Ability id="arc-druid-naga_aspirant-guarded-thoughts-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-naga_aspirant-guarded-thoughts-ex">Guarded Thoughts (Ex)</Pair>
<Pair title="Passive Ability">The druid gains a +2 racial bonus on saves against charm effects and immunity to any form of mind reading (such as <em>detect thoughts</em>).</Pair>
</Ability>
<Ability id="arc-druid-naga_aspirant-poison-immunity-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-naga_aspirant-poison-immunity-ex">Poison Immunity (Ex)</Pair>
<Pair title="Prerequisites">The druid's naga form must have at least one poison-based natural attack.</Pair>
<Pair title="Passive Ability">The druid gains immunity to all poisons.</Pair>
</Ability>
<Ability id="arc-druid-naga_aspirant-poisonous-sting-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-druid-naga_aspirant-poisonous-sting-ex">Poisonous Sting (Ex)</Pair>
<Pair title="Prerequisites">The naga form's tail must have a <em>sting.</em></Pair>
<Pair title="Passive Ability"><p>The druid's stinger becomes venomous.</p>
<div className="sideNoteWrap"><ScrollContainer id="arc-druid-naga_aspirant--table-1"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Sting-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the druid's level + her Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1 round</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>sleep for 2d4 minutes</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div></Pair>
</Ability>
<Ability id="arc-druid-naga_aspirant-spit-venom-ex" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="arc-druid-naga_aspirant-spit-venom-ex">Spit Venom (Ex)</Pair>
<Pair title="Prerequisites">The naga form must have a <em>venomous bite.</em></Pair>
<Pair title="Standard Action">The naga form can spit her venom up to 30 feet. This is a ranged touch attack with no range increment. Any opponent hit by this attack must make a successful save (see Venemous Bite poison below) to avoid the effect.</Pair>
</Ability>
<Ability id="arc-druid-naga_aspirant-sting-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-druid-naga_aspirant-sting-ex">Sting (Ex)</Pair>
<Pair title="Passive Ability">The naga form grows a stinger on the end of her tail, granting her a sting natural attack that deals 1d6 points of piercing damage.</Pair>
</Ability>
<Ability id="arc-druid-naga_aspirant-swim-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-druid-naga_aspirant-swim-ex">Swim (Ex)</Pair>
<Pair title="Passive Ability">The naga form gains a swim speed equal to her base speed.</Pair>
</Ability>
<Ability id="arc-druid-naga_aspirant-tough-scales-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-naga_aspirant-tough-scales-ex">Tough Scales (Ex)</Pair>
<Pair title="Passive Ability">The druid's enhancement bonus to her natural armor increases by +2.</Pair>
<Pair title="Special">The druid may select this ability more than once. Its effects stack.</Pair>
</Ability>
<Ability id="arc-druid-naga_aspirant-venomous-bite-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-druid-naga_aspirant-venomous-bite-ex">Venomous Bite (Ex)</Pair>
<Pair title="Passive Ability"><p>The naga form's bite attack becomes poisonous.</p>
<div className="sideNoteWrap"><ScrollContainer id="arc-druid-naga_aspirant--table-2"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Bite-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the druid's level + her Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/con_damage">Con damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div></Pair>
</Ability>
<Ability id="arc-druid-naga_aspirant-true-naga-su" icon={["magic-swirl"]}>
<Pair single id="arc-druid-naga_aspirant-true-naga-su">True Naga (Su)</Pair>
<Pair hl title="Replaces">Wildshape (at will)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A naga aspirant metamorphoses into a unique naga. Her <em>wild shape</em> form becomes her natural form, though she can transform into her original nagaji shape at will. Her creature type permanently changes to aberration.</Pair>
</Ability>
</>};
const _nature_fang = {title: "Nature Fang", jsx: <><h2 id="arc-druid-nature_fang-nature-fang">Nature Fang</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 92</Link><br/>A nature fang is a druid who stalks and slays those who despoil nature, kill scarce animals, or introduce diseases to unprotected habitats. She gives up a close empathic connection with the natural world to become its deadly champion and avenger.</p>
<Ability id="arc-druid-nature_fang-studied-target-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-druid-nature_fang-studied-target-ex">Studied Target (Ex)</Pair>
<Pair hl title="Replaces">Nature sense, wild empathy, woodland stride</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A nature fang gains the <Link to="/class/slayer">slayer's</Link> <em>studied target</em> class feature. Unlike a slayer, a nature fang does not gain the ability to maintain more than one studied target at the same time.</Pair>
</Ability>
<Ability id="arc-druid-nature_fang-studied-target-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-druid-nature_fang-studied-target-ex" flavor="Text from the slayer class">Studied Target (Ex)</Pair>
<Pair title="Move-Equivalent Action">You can study an opponent you can see. You then gain a bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks attempted against that opponent, and a bonus on weapon attack and damage rolls against it; these bonuses are equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of your slayer level. The DCs of slayer class abilities against that opponent increase by 1 + one-fifth of your slayer level. These bonuses remain in effect until either the opponent is dead or you study a new target.</Pair>
<Pair title="Immediate Action">If you deal sneak attack damage to a target, you can study that target immediately, allowing you to apply your studied target bonuses against that target (including to the normal weapon damage roll).</Pair>
<Pair title="Free Action">You can discard this connection to a studied target, allowing you to study another target in its place.</Pair>
</Ability>
<Ability id="arc-druid-nature_fang-slayer-talent" icon={["stairs-goal"]}>
<Pair single id="arc-druid-nature_fang-slayer-talent">Slayer Talent</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Choice">A nature fang selects a <Link to="/ability/slayer_talents">slayer talent</Link>. At every even-numbered level (6th, 8th, 10th, and so on), she gains a new slayer talent. She uses her druid level as her slayer level to determine what talents she can select.</Pair>
<Pair title="At 12th Level">She can select an <Link to="/ability/advanced_slayer_talents">advanced slayer talent</Link> in place of a slayer talent.</Pair>
<Pair title="Special">The following slayer talents complement the nature fang archetype: <Link to="/slayertalent/foil_scrutiny">foil scrutiny</Link>, <Link to="/slayertalent/poison_use">poison use</Link>, <Link to="/slayertalent/ranger_combat_style">ranger combat style</Link>. Additionally, the following <Link to="/ability/rogue_talent">rogue talents</Link>, which are also available to slayers, complement the archetype: <Link to="/talent/bleeding_attack">bleeding attack</Link>, <Link to="/talent/camouflage">camouflage</Link>, <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/finesse_rogue">finesse rogue</Link>, <Link to="/talent/lasting_poison">lasting poison</Link>, <Link to="/talent/rogue_crawl">rogue crawl</Link>, <Link to="/talent/slow_reactions">slow reactions</Link>, <Link to="/talent/surprise_attack">surprise attack</Link>, <Link to="/talent/swift_poison">swift poison</Link>, <Link to="/talent/terrain_mastery">terrain mastery</Link>. The following advanced talents complement the nature fang archetype: <Link to="/slayertalent/assassinate">assassinate</Link>, <Link to="/slayertalent/slayer_camouflage">slayer camouflage</Link>, <Link to="/slayertalent/woodland_stride">woodland stride</Link>. The advanced rogue talent <Link to="/talent/master_of_disguise">master of disguise</Link> also fits the archetype.</Pair>
</Ability>
<Ability id="arc-druid-nature_fang-sneak-attack-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-nature_fang-sneak-attack-ex">Sneak Attack (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A nature fang gains <Link to="/ability/sneak_attack">sneak attack</Link> +1d6. This functions as the <Link to="/class/rogue">rogue</Link> sneak attack ability. If the nature fang gets a sneak attack bonus from another source, the bonuses on damage stack.</Pair>
</Ability>
<Ability id="arc-druid-nature_fang-swift-studied-target" icon={["upgrade"]}>
<Pair single id="arc-druid-nature_fang-swift-studied-target">Swift Studied Target</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A nature fang can study an opponent as a <strong className="hl">move</strong> or <strong className="hl">swift action</strong>.</Pair>
</Ability>
</>};
const _nature_priest = {title: "Nature Priest", jsx: <><h2 id="arc-druid-nature_priest-nature-priest">Nature Priest</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 23</Link><br/>Nature priests serve two masters: their deities and nature itself, and can call upon the power of both to fuel their divine abilities.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-druid-nature_priest--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Like a cleric, a nature priest must worship a deity and her alignment must be within one step of her deity's.</td></tr></tbody></table></ScrollContainer></div><Ability icon={["skills"]} id="arc-druid-nature_priest-undefined">
<Pair id="arc-druid-nature_priest-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (geography)</Pair></Ability>
<Ability id="arc-druid-nature_priest-weapon-proficiencies" icon={["stairs-goal"]}>
<Pair single id="arc-druid-nature_priest-weapon-proficiencies">Weapon Proficiencies</Pair>
<Pair hl title="Alters">Weapon proficiencies</Pair>
<Pair title="Info">A nature priest is proficient with her deity's favored weapon in addition to a druid's typical weapon proficiencies.</Pair>
</Ability>
<Ability id="arc-druid-nature_priest-studious-piety-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-nature_priest-studious-piety-ex">Studious Piety (Ex)</Pair>
<Pair hl title="Replaces">Nature sense</Pair>
<Pair title="Passive Ability">A nature priest gains a +1 bonus on Knowledge (religion) checks. This bonus increases to +2 when attempting checks that involve knowledge of her deity or her faith.</Pair>
</Ability>
<Ability id="arc-druid-nature_priest-chosen-druid-ex" icon={["info"]}>
<Pair single id="arc-druid-nature_priest-chosen-druid-ex">Chosen Druid (Ex)</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">If a nature priest chooses a domain for her <em>nature bond,</em> she must choose one of her deity's domains (or subdomains) in place of those typically available to a druid.</Pair>
</Ability>
<Ability id="arc-druid-nature_priest-shepherd-of-the-faithful-su" icon={["armor-upgrade","aura"]}>
<Pair single id="arc-druid-nature_priest-shepherd-of-the-faithful-su">Shepherd of the Faithful (Su)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A nature priest and all allies within 60 feet that can see or hear her gain a +2 insight bonus on skill checks to notice or avoid natural hazards, difficult terrain, and rough winds or water, as well as on saving throws against natural hazards. This ability offers no protection against the abilities of creatures or the effects of spells or items.</Pair>
</Ability>
<Ability id="arc-druid-nature_priest-divine-servants-su" icon={["spell-book","upgrade"]}>
<Pair single id="arc-druid-nature_priest-divine-servants-su">Divine Servants (Su)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A nature priest adds the spells <Link to="/spell/lesser_planar_ally">lesser planar ally</Link>, <Link to="/spell/planar_ally">planar ally</Link>, and <Link to="/spell/greater_planar_ally">greater planar ally</Link> to her druid spell list at their cleric spell levels. When she casts these spells, the planar allies summoned require half the payment described in those spells.</Pair>
</Ability>
</>};
const _nithveil_adept = {title: "Nithveil Adept", jsx: <><h2 id="arc-druid-nithveil_adept-nithveil-adept">Nithveil Adept</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 44</Link><br/>Nithveil adepts learn the secret magic of the First World fey in the moving, reality-phasing city of Nithveil, which appears on the new moon at seemingly random locations in the Grungir Forest in the Lands of the Linnorm Kings. The most common deities worshiped by these druids are the Green Mother and the Lantern King, Eldest patrons of intrigue and trickery.</p>
<Ability icon={["skills"]} id="arc-druid-nithveil_adept-undefined">
<Pair id="arc-druid-nithveil_adept-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/disguise">Disguise</Link> (CHA), <Link to="/skill/sense_motive">Sense Motive</Link> (WIS), <Link to="/skill/perform">Perform</Link> (CHA), <Link to="/skill/stealth">Stealth</Link> (DEX)</Pair>
<Pair title="Info">This also replaces the Nature Sense ability</Pair></Ability>
<Ability id="arc-druid-nithveil_adept-nature-bond-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-nithveil_adept-nature-bond-su">Nature Bond (Su)</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">A Nithveil adept cannot select an animal companion, and can take only a domain. If she worships an <Link to="/rule/eldest">Eldest</Link>, the Nithveil trickster can choose any of the domains or subdomains granted by that Eldest in addition to those normally available to druids.</Pair>
</Ability>
<Ability id="arc-druid-nithveil_adept-animal-speech-su" icon={["magic-swirl"]}>
<Pair single id="arc-druid-nithveil_adept-animal-speech-su" flavor="A Nithveil adept can imbue normal animals with the ability to speak for a brief period.">Animal Speech (Su)</Pair>
<Pair hl title="Replaces">Spontaneous casting</Pair>
<Pair title="Usage">A number of times per day equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of her druid level.</Pair>
<Pair title="Standard Action">The Nithveil adept can touch an animal to grant it the ability to speak any language the druid knows for 1 minute per druid level. This does not increase the animal's Intelligence or improve its attitude, and the animal behaves as though communicating with someone under the effects of a <Link to="/spell/speak_with_animals">speak with animals</Link> spell, save that it can speak with anyone who understands the language the Nithveil adept grants it.</Pair>
</Ability>
<Ability id="arc-druid-nithveil_adept-resist-fey-influence-ex" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="arc-druid-nithveil_adept-resist-fey-influence-ex">Resist Fey Influence (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A Nithveil adept gains a +4 bonus on saving throws against the spell-like and supernatural abilities of fey.</Pair>
<Pair title="Ability">Once per day before attempting such a saving throw, the Nithveil adept can choose to roll two dice and take the better result, applying the +4 bonus as normal.</Pair>
</Ability>
<Ability id="arc-druid-nithveil_adept-locate-nithveil-sp" icon={["magic-swirl"]}>
<Pair single id="arc-druid-nithveil_adept-locate-nithveil-sp">Locate Nithveil (Sp)</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Usage">This ability can be used only once per month, during the new moon.</Pair>
<Pair title="Ability">A Nithveil adept can cast <Link to="/spell/find_the_path">find the path</Link> as a spell-like ability, but only to locate Nithveil. The spell's duration is extended until the druid reaches her destination or until Nithveil recedes from the Material Plane at the end of the new moon.</Pair>
</Ability>
</>};
const _pack_lord = {title: "Pack Lord", jsx: <><h2 id="arc-druid-pack_lord-pack-lord">Pack Lord</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 38</Link><br/>Some druids bond with many animal companions rather than just one, achieving a level of communion rare even in druidic circles and leading their pack brothers and pack sisters with total authority.</p>
<Ability id="arc-druid-pack_lord-pack-bond-ex" icon={["broken-shield"]}>
<Pair single id="arc-druid-pack_lord-pack-bond-ex">Pack Bond (Ex)</Pair>
<Pair hl title="Replaces">Nature bond</Pair>
<Pair title="Choice">A pack lord druid may not select a domain and must choose an animal companion.</Pair>
<Pair title="Passive Ability">The druid gains a +2 bonus on <em>wild empathy</em> and Handle Animal checks made regarding her animal companion.</Pair>
<Pair title="Special"><p>The pack lord may have more than one animal companion, but she must divide up her effective druid level between her companions to determine the abilities of each companion. For example, a 4th-level pack lord can have one 4th-level companion, two 2nd-level companions, or one 1st-level and one 3rd-level companion.</p>
<p>Each time a pack lord's druid level increases, she must decide how to allocate the increase among her animal companions (including the option of adding a new 1st-level companion). Once a druid level is allocated to a particular companion, it cannot be redistributed while that companion is in the pack lord's service (she must release the companion or wait until the companion dies to allocate its levels to another companion, which she can do the next time she prepares spells). The <em>share spells</em> animal companion ability only applies to one animal companion at a time - the pack lord cannot use it to cast a one-target spell and have it affect all of her animal companions.</p>
</Pair>
</Ability>
<Ability id="arc-druid-pack_lord-improved-empathic-link-su" icon={["stairs-goal"]}>
<Pair single id="arc-druid-pack_lord-improved-empathic-link-su">Improved Empathic Link (Su)</Pair>
<Pair hl title="Replaces">The 6th-level additional use of <em>wild shape</em></Pair>
<Pair title="Ability">The pack lord gains an <em>empathic link</em> with all of her animal companions. This functions like an empathic link with a <Link to="/sidekick/familiar">familiar</Link>.</Pair>
<Pair title="Swift Action">The pack lord can shift her perception to one of her companions, allowing her to experience what it sees, hears, and so on. She can maintain this connection as long as she likes (as long as the companion is within 1 mile) and end it as a <strong className="hl">free action</strong>. The druid can only use this ability on one companion at a time, and cannot see, hear, or smell with her own body while maintaining this connection.</Pair>
</Ability>
</>};
const _plains_druid = {title: "Plains Druid", jsx: <><h2 id="arc-druid-plains_druid-plains-druid">Plains Druid</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 100</Link><br/>Out upon the wide and rolling prairies and savannahs, plains druids stand guard over the grasslands. These druids range far and wide, watching over nomadic tribes and wandering herds and preserving the sometimes fragile ecosystem of the wide open spaces.</p>
<Ability id="arc-druid-plains_druid-plains-traveler-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-druid-plains_druid-plains-traveler-ex">Plains Traveler (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A plains druid gains a bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival checks equal to <Link to="/misc/half">half</Link> her druid level in plains terrain, and she cannot be tracked in such an environment.</Pair>
</Ability>
<Ability id="arc-druid-plains_druid-run-like-the-wind-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-druid-plains_druid-run-like-the-wind-ex">Run Like the Wind (Ex)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A plains druid gains +10 feet to her land speed when wearing light or no armor and carrying a light load.</Pair>
<Pair title="Ability">Once per hour, she may <Link to="/rule/run">run</Link> or <Link to="/rule/charge">charge</Link> at double the normal speed for 1 round.</Pair>
<Pair title="Special">If riding her animal companion, it gains this ability instead.</Pair>
</Ability>
<Ability id="arc-druid-plains_druid-savanna-ambush-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-plains_druid-savanna-ambush-ex">Savanna Ambush (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A plains druid gains <Link to="/rule/concealment">concealment</Link> whenever she is <Link to="/rule/prone">prone</Link> in natural surroundings, and can make Stealth checks at no penalty when prone and not moving or at -5 when crawling.</Pair>
<Pair title="Immediate Action">A plains druid can stand up from prone during a surprise round.</Pair>
</Ability>
<Ability id="arc-druid-plains_druid-wild-shape-su" icon={["broken-shield"]}>
<Pair single id="arc-druid-plains_druid-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A plains druid gains <em>wild shape,</em> except that her effective druid level for this ability is equal to her druid level - 2.</Pair>
</Ability>
<Ability id="arc-druid-plains_druid-canny-charger-ex" icon={["stairs-goal","armor-upgrade","upgrade"]}>
<Pair single id="arc-druid-plains_druid-canny-charger-ex">Canny Charger (Ex)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A plains druid can charge through allies' squares without difficulty (whether mounted or afoot) and can turn up to 90 degrees once during a charge, provided the last 10 feet toward the target are in a straight line.</Pair>
<Pair title="Passive Ability">She also gains a +4 dodge bonus to AC against enemy charge attacks and a +4 bonus to damage with a <Link to="/rule/readied_action">readied action</Link> against a charging foe.</Pair>
</Ability>
<Ability id="arc-druid-plains_druid-evasion-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-plains_druid-evasion-ex">Evasion (Ex)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">A plains druid gains <Link to="/ability/evasion">evasion</Link> when wearing light or no armor and carrying a light load. This functions as the <Link to="/class/rogue">rogue</Link> ability of the same name.</Pair>
</Ability>
</>};
const _planar_extremist = {title: "Planar Extremist", jsx: <><h2 id="arc-druid-planar_extremist-planar-extremist">Planar Extremist</h2>
<p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 13</Link><br/>Through determined interest or repeated exposure to those places where the borders between planes are weaker, some druids lose their neutral stance and find themselves gravitating toward one of the four most extreme alignments: chaotic evil, chaotic good, lawful evil, or lawful good. While no longer able to harness the forces of nature like their neutral kin, these planar extremists find that their powers have shifted to reflect the Outer Plane most closely associated with their alignment. This is an ex-class archetype and can be taken by a character immediately upon becoming an ex-druid.</p>
<p><strong className="hl">The following archetype can be taken by an ex-druid immediately upon becoming an ex-druid, regardless of character level, replacing some or all of the lost class abilities.</strong> If another archetype the character had before she became an ex-druid replaces the same ability as the ex-class archetype, she loses the old archetype in favor of the new one; otherwise, she can retain both archetypes as normal. Planar extremixts can gain further levels in the druid class, even though becoming an ex-druid normally prohibits further advancement in the class. While an ex-member of a class can recant her failings and atone for her fall from her original class (typically involving an <Link to="/spell/atonement">atonement</Link> spell), her acceptance of her ex-class archetype means she must atone both for her initial fall and for further straying from the path. As a result, such a character must be the target of two atonement spells or a similar effect to regain her lost class features. Upon doing so, she immediately loses this archetype and regains her original class (and archetype, if she had one).</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-druid-planar_extremist--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Must have an alignment of chaotic evil, chaotic good, lawful evil, or lawful good.</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-druid-planar_extremist-aura-ex" icon={["aura"]}>
<Pair single id="arc-druid-planar_extremist-aura-ex">Aura (Ex)</Pair>
<Pair title="Passive Ability">The planar extremist radiates an aura matching her alignment as if she were a <Link to="/class/cleric">cleric</Link> of her druid level.</Pair>
</Ability>
<Ability id="arc-druid-planar_extremist-spells" icon={["broken-shield"]}>
<Pair single id="arc-druid-planar_extremist-spells">Spells</Pair>
<Pair hl title="Alters">Spells</Pair>
<Pair title="Ability">A planar extremist gains one fewer spell slot per spell level than normal in which to prepare spells. The planar extremist removes all <em>summon nature's ally</em> spells from her spell list and replaces them with the <Link to="/spell/summon_monster">summon monster</Link> spells of the same levels. The druid can otherwise cast spells as normal for a druid of her level.</Pair>
</Ability>
<Ability id="arc-druid-planar_extremist-planar-bond" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-druid-planar_extremist-planar-bond">Planar Bond</Pair>
<Pair hl title="Replaces">Nature's bond</Pair>
<Pair title="Choice">A planar extremist forms a bond with a manifestation of the Outer Plane with which she is aligned. This bond can take one of two forms.</Pair>
</Ability>
<Ability id="arc-druid-planar_extremist-domain-option" extraClasses="subAbility numbered" icon={["magic-swirl"]}>
<Pair single id="arc-druid-planar_extremist-domain-option">Domain Option</Pair>
<Pair title="Ability">The first is a close tie to the plane to which she is aligned, granting the planar extremist one of the domains of her alignment (for example, a lawful good planar extremist could take either the <Link to="/domain/law">Law</Link> or <Link to="/domain/good">Good</Link> domain). This option otherwise functions as a druid's <em>nature bond</em> if she chose a close tie to the natural world.</Pair>
</Ability>
<Ability id="arc-druid-planar_extremist-outsider-option" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="arc-druid-planar_extremist-outsider-option">Outsider Option</Pair>
<Pair title="Ability"><p>The second option is to form a close bond with an outsider from an Outer Plane. The abilities of this outsider companion are determined using the rules for <Link to="/sidekick/unchained_eidolon">eidolons</Link> for the <Link to="/class/unchained_summoner">unchained summoner</Link> class, as if the planar extremist were a summoner of her druid level, except the outsider companion gains no additional evolution pool (only the evolutions from its base form and base evolutions for its subtype), and it must be of a <Link to="/ability/unchained_eidolon_subtypes">subtype</Link> whose alignment exactly matches the alignment of the planar extremist. The planar extremist can summon her outsider companion with the same 1-minute ritual a summoner normally uses to do so, but she can't cast <em>summon monster</em> spells if she currently has her outsider companion summoned, and she can't summon her companion if she already has a creature summoned through other means.</p>
<p>As the planar ally gains class levels, her eidolon's base statistics and base evolutions increase as if her druid level were her summoner level. The eidolon gains the <em>darkvision, link, share spells, evasion, ability score increase, devotion, multiattack,</em> and <em>improved evasion</em> abilities at the appropriate levels, but never gains an evolution pool. Abilities and spells that grant additional evolution points to eidolons do not function for her outsider companion, though any abilities that would grant evolution points to an animal companion do work. The planar extremist does not gain life link or any other class features a summoner gains in relation to her eidolon.</p>
</Pair>
</Ability>
<Ability id="arc-druid-planar_extremist-spontaneous-casting" icon={["magic-swirl"]}>
<Pair single id="arc-druid-planar_extremist-spontaneous-casting">Spontaneous Casting</Pair>
<Pair hl title="Alters">A druid's spontaneous casting</Pair>
<Pair title="Ability">A planar extremist can channel stored spell energy into summoning spells that she hasn't prepared ahead of time. She can lose a prepared spell in order to cast a <em>summon monster</em> spell of the same level or lower, but only to summon creatures whose alignment matches hers.</Pair>
</Ability>
<Ability id="arc-druid-planar_extremist-resist-the-opposite-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-planar_extremist-resist-the-opposite-ex">Resist the Opposite (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A planar extremist gains a +2 bonus on saving throws against the spell-like and supernatural abilities of creatures whose alignment is diametrically opposed to her own.</Pair>
</Ability>
<Ability id="arc-druid-planar_extremist-planar-aspect-su" icon={["stairs-goal"]}>
<Pair single id="arc-druid-planar_extremist-planar-aspect-su">Planar Aspect (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Standard Action">Once per day, a planar extremist can gain the benefits of the bloodrager bloodline associated with her alignment (choosing from <Link to="/blrgbloodline/abyssal">Abyssal</Link>, <Link to="/blrgbloodline/celestial">Celestial</Link>, or <Link to="/blrgbloodline/infernal">Infernal</Link>), as if she were a <Link to="/class/bloodrager">bloodrager</Link> of her druid level. She can gain these benefits for 1 minute per druid level as if she were bloodraging (but she gains no other benefits or penalties of bloodrage) or until she dismisses it as a <strong className="hl">swift action</strong>; this duration need not be used consecutively but must be spent in 1-minute increments.</Pair>
<Pair title="At 6th Level">She can use this ability twice a day.</Pair>
<Pair title="At 10th Level">She can use this three times a day.</Pair>
<Pair title="At 14th Level">She can use this four times a day.</Pair>
<Pair title="At 18th Level">She can use this five times a day.</Pair>
<Pair title="At 20th Level">A planar extremist can use <em>planar aspect</em> at will.</Pair>
</Ability>
</>};
const _progenitor = {title: "Progenitor", jsx: <><h2 id="arc-druid-progenitor-progenitor">Progenitor</h2>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 19</Link><br/>Some druids forge powerful bonds with the raw, natural power of the First World. Progenitors are druids who tap into the vibrant power of the First World to propagate natural and supernatural wonders.</p>
<Ability id="arc-druid-progenitor-infused-summoning-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-progenitor-infused-summoning-ex">Infused Summoning (Ex)</Pair>
<Pair hl title="Alters">Spontaneous casting</Pair>
<Pair title="Passive Ability">When a progenitor casts <em>summon nature's ally</em> to summon a creature, the summoned creature gains <Link to="/umr/fast_healing">fast healing</Link> equal to the progenitor's level (maximum equal to the progenitor's Wisdom modifier).</Pair>
</Ability>
<Ability id="arc-druid-progenitor-primal-bond-ex" extraClasses="hasSubs" icon={["magic-swirl"]}>
<Pair single id="arc-druid-progenitor-primal-bond-ex">Primal Bond (Ex)</Pair>
<Pair hl title="Replaces">Nature bond</Pair>
<Pair title="Choice">A progenitor infuses herself with fey magic so that she is treated as either her original creature type or the fey type for the purposes of spells or effects that target a creature by type, whichever is more beneficial to her. Additionally, the progenitor chooses one of two forms through which this bond expresses itself: magic or nature.</Pair>
</Ability>
<Ability id="arc-druid-progenitor-magic" extraClasses="subAbility numbered" icon={["magic-swirl"]}>
<Pair single id="arc-druid-progenitor-magic">Magic</Pair>
<Pair title="Info">A progenitor who chooses magic as her primal bond can draw upon wild magic to attempt to cast a prepared spell without losing that spell from its spell slot.</Pair>
<Pair title="Swift Action">To use this ability, she casts the spell as she would normally, but as the spell's effects take place, she must use a <strong className="hl">swift action</strong> to attempt a <Link to="/rule/concentration">concentration</Link> check (DC = 20 + twice the spell's level). If she fails, she expends the spell normally as if she had cast it, but its effects are replaced by <Link to="/rule/magic_traits_pa">a wild magic effect</Link> with a CR equal to her caster level and she is <Link to="/misc/staggered">staggered</Link> until the end of her next turn. If she succeeds, she casts the spell normally and it is not expended from her prepared spell slot, allowing her to cast that spell again at a later point.</Pair>
<Pair title="Usage">A number of times/day equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> her druid level</Pair>
</Ability>
<Ability id="arc-druid-progenitor-nature" extraClasses="subAbility numbered" icon={["magic-swirl","armor-upgrade","armor-downgrade"]}>
<Pair single id="arc-druid-progenitor-nature">Nature</Pair>
<Pair title="Info">A progenitor who chooses nature as her primal bond can create plants.</Pair>
<Pair title="Full-Round Action">At the start of her next turn, so long as she is touching a solid surface underfoot, a 5-foot radius of mobile undergrowth springs to life around the progenitor for a number of rounds equal to 3 plus the progenitor's Wisdom bonus. Upon activating this ability, the progenitor chooses whether the undergrowth provides <Link to="/rule/cover">cover</Link> or <Link to="/rule/difficult_terrain">difficult terrain</Link>. If the progenitor chooses cover, her undergrowth provides a cover bonus to AC to the progenitor and allies within the radius. If she chooses difficult terrain, enemies who enter the radius of undergrowth treat it as difficult terrain. A progenitor's undergrowth is treated as forest terrain if it provides cover and plains terrain if it provides difficult terrain. This radius increases by 5 feet at 5th level and every 5 levels thereafter.</Pair>
<Pair title="Usage">A number of times/day equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> her druid level</Pair>
</Ability>
<Ability id="arc-druid-progenitor-fey-shape-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-progenitor-fey-shape-su">Fey Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Info">A progenitor never gains the ability to use <em>wild shape</em> to transform into an elemental.</Pair>
<Pair title="At 6th Level">A progenitor can use <em>wild shape</em> to change into a Small or Medium fey. When doing so, her <em>wild shape</em> functions as <Link to="/spell/fey_form_i">fey form I</Link>.</Pair>
<Pair title="At 8th Level">A progenitor can use <em>wild shape</em> to change into a Tiny or Large fey. When she does so, her <em>wild shape</em> functions as <Link to="/spell/fey_form_ii">fey form II</Link>.</Pair>
<Pair title="At 10th Level">A progenitor can use <em>wild shape</em> to change into a Diminutive or Huge fey. When she does so, her <em>wild shape</em> functions as <Link to="/spell/fey_form_iii">fey form III</Link>.</Pair>
<Pair title="At 14th Level">When a progenitor uses <em>wild shape</em> to assume a fey form, her <em>wild shape</em> functions as <Link to="/spell/fey_form_iv">fey form IV</Link>.</Pair>
</Ability>
</>};
const _reincarnated_druid = {title: "Reincarnated Druid", jsx: <><h2 id="arc-druid-reincarnated_druid-reincarnated-druid">Reincarnated Druid</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 39</Link><br/>Spun off into the endless circle of life, an incarnate druid is an embodiment of nature's eternal renewal. She lives many lives and wanders the world devoid of attachments, a stranger to all yet one with all life.</p>
<Ability id="arc-druid-reincarnated_druid-mysterious-stranger-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-reincarnated_druid-mysterious-stranger-ex">Mysterious Stranger (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A reincarnated druids adds <Link to="/misc/half">half</Link> her druid level to the DC of Sense Motive, Diplomacy, and Knowledge checks to learn about her.</Pair>
</Ability>
<Ability id="arc-druid-reincarnated_druid-resist-deaths-touch-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-reincarnated_druid-resist-deaths-touch-ex">Resist Death's Touch (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A reincarnated druid gains a +4 bonus on saving throws against death effects, energy drain, and necromancy effects, and on stabilization checks when dying.</Pair>
</Ability>
<Ability id="arc-druid-reincarnated_druid-many-lives-ex" icon={["magic-swirl"]}>
<Pair single id="arc-druid-reincarnated_druid-many-lives-ex">Many Lives (Ex)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">If a reincarnated druid is killed, she may automatically <Link to="/spell/reincarnate">reincarnate</Link> (as the spell) 1 day later. The reincarnated druid appears in a safe location within 1 mile of her previous body. At will for the next 7 days, she can sense the presence of her remains as if using <Link to="/spell/locate_object">locate object</Link> as a spell-like ability. If she is killed during these 7 days, she remains dead and does not reincarnate.</Pair>
<Pair title="Special">The many lives ability does not function if the reincarnated druid is slain by a death effect. A reincarnated druid cannot be <Link to="/spell/raise_dead">raised from the dead</Link> or <Link to="/spell/resurrection">resurrected</Link>, though she can be reincarnated.</Pair>
</Ability>
<Ability id="arc-druid-reincarnated_druid-wild-shape-su" icon={["broken-shield"]}>
<Pair single id="arc-druid-reincarnated_druid-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A reincarnated druid gains <em>wild shape,</em> but it functions at her druid level - 2.</Pair>
</Ability>
<Ability id="arc-druid-reincarnated_druid-cheat-death-ex" icon={["rolling-dices"]}>
<Pair single id="arc-druid-reincarnated_druid-cheat-death-ex">Cheat Death (Ex)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">Once per day, a reincarnated druid may reroll a save against a death effect, energy drain, or necromancy effect before the result of the roll is revealed, or reroll a failed stabilization check while dying. She must take the result of the second roll, even if it is worse than the original roll.</Pair>
</Ability>
<Ability id="arc-druid-reincarnated_druid-tongue-of-the-sun-and-moon-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-reincarnated_druid-tongue-of-the-sun-and-moon-ex">Tongue of the Sun and Moon (Ex)</Pair>
<Pair hl title="Replaces">Timeless body</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A reincarnated druid can speak with any living creature.</Pair>
</Ability>
</>};
const _restorer = {title: "Restorer", jsx: <><h2 id="arc-druid-restorer-restorer">Restorer</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 22</Link><br/>Restorers carefully tend to the health of both the environment and creatures in it. Restorers in the most remote places often choose druidic herbalism as their nature bond option.</p>
<Ability id="arc-druid-restorer-healing-touch-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-restorer-healing-touch-ex">Healing Touch (Ex)</Pair>
<Pair hl title="Replaces">Nature sense</Pair>
<Pair title="Passive Ability">A restorer gains a +2 bonus on Heal checks. When a restorer uses Heal to provide first aid, the bonus increases to +3.</Pair>
</Ability>
<Ability id="arc-druid-restorer-natural-medic" icon={["magic-swirl"]}>
<Pair single id="arc-druid-restorer-natural-medic">Natural Medic</Pair>
<Pair hl title="Replaces">Spontaneous casting</Pair>
<Pair title="Ability">A restorer can channel stored spell energy into healing spells that she did not prepare ahead of time. The restorer can "lose" any prepared spell in order to cast any <Link to="/main/cure_spells">cure spell</Link> she can cast of the same spell level or lower (a <em>cure</em> spell is any spell with "cure" in its name).</Pair>
</Ability>
<Ability id="arc-druid-restorer-enemy-of-blight-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-restorer-enemy-of-blight-ex">Enemy of Blight (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">She can ignore these effects for a number of rounds per day equal to double her Wisdom bonus. These rounds don't have to be used consecutively.</Pair>
<Pair title="Ability">A restorer can ignore the effects of an overgrown area that has been magically manipulated to impede motion.</Pair>
</Ability>
<Ability id="arc-druid-restorer-guide-across-lifetimes-sp" icon={["magic-swirl"]}>
<Pair single id="arc-druid-restorer-guide-across-lifetimes-sp">Guide across Lifetimes (Sp)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Full-Round Action">Once per day, a restorer can cast <Link to="/spell/reincarnate">reincarnate</Link> without a material component.</Pair>
</Ability>
</>};
const _river_druid = {title: "River Druid", jsx: <><h2 id="arc-druid-river_druid-river-druid">River Druid</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 48</Link>, <Link to="/source/people_of_the_river">People of the River pg. 14</Link><br/>These druids are the guardians of rivers and the creatures that depend on them. Just as rivers pour from mountains to seas, river druids adapt to many environments and cultures. They can be found wherever water flows, even among underground rivers or sewer systems.</p>
<Ability id="arc-druid-river_druid-ferrier-ex" icon={["skills","upgrade"]}>
<Pair single id="arc-druid-river_druid-ferrier-ex">Ferrier (Ex)</Pair>
<Pair hl title="Replaces">Nature sense</Pair>
<Pair hl title="Alters">Class skills</Pair>
<Pair title="Info">A river druid adds <Link to="/skill/diplomacy">Diplomacy</Link> (CHA) to her list of class skills and gains a +2 bonus on Diplomacy and Knowledge (nature) skill checks.</Pair>
</Ability>
<Ability id="arc-druid-river_druid-read-the-currents-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-river_druid-read-the-currents-ex">Read the Currents (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A river druid gains a bonus equal to <Link to="/misc/half">half</Link> her druid level on initiative checks and Acrobatics, Knowledge (geography), Perception, Stealth, Survival, and Swim checks when she is in, on, or adjacent to flowing water.</Pair>
</Ability>
<Ability id="arc-druid-river_druid-countercurrent-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-river_druid-countercurrent-ex">Countercurrent (Ex)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A river druid takes no penalty to speed or on Acrobatics or Stealth checks in shallow water up to 2 feet deep (1 foot deep for Small characters) such as shallow bogs, shorelines, streams, and partially flooded areas. A river druid (and any vehicle she pilots) isn't moved by flowing water unless she allows it. Water that has been magically manipulated to impede or boost motion still affects her.</Pair>
</Ability>
<Ability id="arc-druid-river_druid-deep-breath-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-river_druid-deep-breath-ex">Deep Breath (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A river druid can <Link to="/misc/hold_her_breath">hold her breath</Link> for a number of minutes equal to her Constitution score (after this, she must begin attempting Constitution checks to avoid suffocation as normal).</Pair>
</Ability>
<Ability id="arc-druid-river_druid-wild-shape-su" icon={["broken-shield"]}>
<Pair single id="arc-druid-river_druid-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A river druid gains <em>wild shape,</em> except her effective druid level for the ability is equal to her druid level - 2.</Pair>
</Ability>
<Ability id="arc-druid-river_druid-tongue-of-the-sun-and-moon-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-river_druid-tongue-of-the-sun-and-moon-ex">Tongue of the Sun and Moon (Ex)</Pair>
<Pair hl title="Replaces">Timeless body</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Passive Ability">A river druid can speak with any living creature.</Pair>
</Ability>
</>};
const _road_keeper = {title: "Road Keeper", jsx: <><h2 id="arc-druid-road_keeper-road-keeper">Road Keeper</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 48</Link><br/>Guardians of the lonely paths between cities, road keepers protect the wild from travelers, and travelers from the wild.</p>
<Ability id="arc-druid-road_keeper-one-with-the-road-su" icon={["upgrade"]}>
<Pair single id="arc-druid-road_keeper-one-with-the-road-su">One with the Road (Su)</Pair>
<Pair hl title="Replaces">Spontaneous casting</Pair>
<Pair title="Info">A road keeper casts the following spells as though her caster level were 1 higher.</Pair>
<Pair plain title="1st"><Link to="/spell/longstrider">Longstrider</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/scent_trail">Scent trail</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/natures_exile">Nature's exile</Link></Pair>
<Pair plain title="4th"><Link to="/spell/freedom_of_movement">Freedom of movement</Link></Pair>
<Pair plain title="5th"><Link to="/spell/tree_stride">Tree stride</Link></Pair>
<Pair plain title="6th"><Link to="/spell/find_the_path">Find the path</Link></Pair>
<Pair plain title="7th"><Link to="/spell/wind_walk">Wind walk</Link></Pair>
<Pair plain title="8th"><Link to="/spell/word_of_recall">Word of recall</Link></Pair>
<Pair plain title="9th"><Link to="/spell/world_wave">World wave</Link></Pair>
<Pair title="At 9th Level">The bonus to her caster level for these spells increases to +2.</Pair>
</Ability>
<Ability id="arc-druid-road_keeper-road-bond-ex" icon={["info"]}>
<Pair single id="arc-druid-road_keeper-road-bond-ex">Road Bond (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">If the road keeper chooses a cleric domain as her nature bond, she must choose from the <Link to="/domain/community">Community</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/travel">Travel</Link>, or <Link to="/domain/weather">Weather</Link> domains. The road keeper can also choose any subdomain associated with these domains.</Pair>
</Ability>
<Ability id="arc-druid-road_keeper-take-the-high-road-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-road_keeper-take-the-high-road-ex">Take the High Road (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A road keeper travels over roads and paths at an accelerated rate. She and her allies can <Link to="/rule/hustle">hustle</Link> for 2 hours without taking nonlethal damage, instead of 1, provided they travel along a road or path. Additionally, as long as they travel on a road or path, the road keeper and her allies count as traveling along a highway regardless of the quality of the road or path on which they travel. Allies must remain within 30 feet of the road keeper to benefit from this ability.</Pair>
</Ability>
<Ability id="arc-druid-road_keeper-trodden-path-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-druid-road_keeper-trodden-path-ex">Trodden Path (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A road keeper gains a +4 bonus on Survival checks to follow or identify tracks. She also gains this bonus on saving throws against severe weather effects.</Pair>
</Ability>
<Ability id="arc-druid-road_keeper-road-less-traveled-su" icon={["armor-downgrade"]}>
<Pair single id="arc-druid-road_keeper-road-less-traveled-su" flavor="A road keeper can discourage creatures from entering or exiting the wild.">Road Less Traveled (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Standard Action">Once per day, she can target a creature within 30 feet and curse it with clumsiness and disorientation. The road keeper chooses whether to punish her target for entering the wild from a road or building, or vice versa. If her target is entering the wild, it treats every square of wilderness not on a road or in a building as <Link to="/rule/difficult_terrain">difficult terrain</Link>. If her target is exiting the wild, it treats every square on a road or inside a building as difficult terrain. In either case, the ground feels uneven and the target suffers extreme vertigo during movement. The victim of this curse can attempt a Will saving throw (DC = 10 + <Link to="/misc/half">half</Link> the road keeper's level + her Wisdom modifier) at the beginning of its turn each round to end the effect. The effect lasts until the target successfully saves or for a number of minutes equal to the road keeper's level.</Pair>
<Pair title="At 6th Level">The road keeper can target 2 creatures per day with this ability. She can target more than one creature with a single use of this ability or the same target more than once in the same day (though its effects do not stack), but her total number of targets per day cannot exceed this daily maximum.</Pair>
<Pair title="At 8th Level">The road keeper can target 3 creatures per day.</Pair>
<Pair title="At 10th Level">The road keeper can target 4 creatures per day.</Pair>
<Pair title="At 12th Level">The road keeper can target 5 creatures per day.</Pair>
<Pair title="At 14th Level">The road keeper can target 6 creatures per day.</Pair>
<Pair title="At 16th Level">The road keeper can target 7 creatures per day.</Pair>
<Pair title="At 18th Level">The road keeper can target 8 creatures per day.</Pair>
<Pair title="At 20th Level">The road keeper can target 9 creatures per day.</Pair>
<Pair title="Special">If she targets more than one creature at one time, each target must be within 30 feet of the road keeper. A creature's movement isn't affected if it is burrowing, climbing, earth gliding, flying, or swimming. This is a mind-affecting curse effect.</Pair>
</Ability>
</>};
const _rot_warden = {title: "Rot Warden", jsx: <><h2 id="arc-druid-rot_warden-rot-warden">Rot Warden</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 49</Link><br/>Harbingers of decay, rot wardens live in damp lands where insects and rot break down the dead to feed the living. They see in the process of rot the beauty of nature's capacity to recycle and repurpose material into something wondrous and new.</p>
<Ability id="arc-druid-rot_warden-invoke-decay-su" icon={["magic-swirl"]}>
<Pair single id="arc-druid-rot_warden-invoke-decay-su">Invoke Decay (Su)</Pair>
<Pair hl title="Alters">Spontaneous casting</Pair>
<Pair title="Ability">A rot warden can channel stored spell energy into specific spells he hasn't prepared ahead of time. He can "lose" a prepared spell in order to cast the following spells at the indicated spell levels.</Pair>
<Pair plain title="1st"><Link to="/spell/decompose_corpse">Decompose corpse</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/warp_wood">Warp wood</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/fungal_infestation">Fungal infestation</Link></Pair>
<Pair plain title="4th"><Link to="/spell/explosion_of_rot">Explosion of rot</Link></Pair>
<Pair plain title="5th"><Link to="/spell/insect_plague">Insect plague</Link></Pair>
<Pair plain title="6th"><Link to="/spell/swarm_skin">Swarm skin</Link></Pair>
<Pair plain title="7th"><Link to="/spell/creeping_doom">Creeping doom</Link></Pair>
<Pair plain title="8th"><Link to="/spell/horrid_wilting">Horrid wilting</Link></Pair>
<Pair plain title="9th"><Link to="/spell/massacre">Massacre</Link></Pair>
</Ability>
<Ability id="arc-druid-rot_warden-nature-bond" icon={["info"]}>
<Pair single id="arc-druid-rot_warden-nature-bond">Nature Bond</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">A rot warden who chooses a cleric domain as his nature bond must choose from the <Link to="/domain/destruction">Destruction</Link>, <Link to="/druiddomain/erosion">Erosion</Link>, <Link to="/domain/repose">Repose</Link>, or <Link to="/druiddomain/vermin">Vermin</Link> domains.</Pair>
</Ability>
<Ability id="arc-druid-rot_warden-vermin-empathy-su" icon={["stairs-goal"]}>
<Pair single id="arc-druid-rot_warden-vermin-empathy-su">Vermin Empathy (Su)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Ability">A rot warden can improve the attitude of vermin as a normal druid can with animals. Vermin have a starting attitude of unfriendly. The rot warden can also improve the attitude of vermin swarms, but he takes a -4 penalty on the check unless the swarm consists of the same kind of vermin as his vermin companion or his current <em>wild shape.</em></Pair>
</Ability>
<Ability id="arc-druid-rot_warden-swarmcaller-sp" icon={["magic-swirl"]}>
<Pair single id="arc-druid-rot_warden-swarmcaller-sp">Swarmcaller (Sp)</Pair>
<Pair hl title="Replaces">Trackless step, venom immunity</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Standard Action">A rot warden can summon a swarm of vermin once per day. This functions like <Link to="/spell/summon_swarm">summon swarm</Link>, except the swarm the rot warden summons must be a <Link to="/monster/cockroach_swarm">cockroach</Link>, <Link to="/monster/locust_swarm">locust</Link>, or <Link to="/monster/spider_swarm">spider swarm</Link>. If he uses this ability during the surprise round of combat, nearby animals and vermin become hushed until the first round of combat ends; during this surprise round and first round of combat, <Link to="/rule/flat_footed">flat-footed</Link> creatures also gain the <Link to="/misc/shaken">shaken</Link> condition (this doesn't stack with other fear effects).</Pair>
<Pair title="At 9th Level">He adds <Link to="/monster/army_ant_swarm">army ant</Link>, <Link to="/monster/centipede_swarm">centipede</Link>, and <Link to="/monster/wasp_swarm">wasp swarms</Link> to the list of swarms he can call with this ability.</Pair>
</Ability>
<Ability id="arc-druid-rot_warden-enduring-druid-su" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-rot_warden-enduring-druid-su">Enduring Druid (Su)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A rot warden gains a +4 bonus on saving throws against attacks and special abilities of vermin and swarms with the vermin type. This bonus also applies on saving throws against effects that would age or decay the rot warden or his equipment.</Pair>
</Ability>
<Ability id="arc-druid-rot_warden-wild-shape" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-rot_warden-wild-shape">Wild Shape</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A rot warden gains <em>wild shape,</em> except his effective druid level is his druid level - 2. He cannot take the form of an elemental.</Pair>
<Pair title="At 8th Level">A rot warden can assume the form of a Small or Medium vermin as if using <Link to="/spell/vermin_shape_i">vermin shape I</Link>.</Pair>
<Pair title="At 10th Level">The rot warden can assume the shape of a Tiny or Large vermin as if using <Link to="/spell/vermin_shape_ii">vermin shape II</Link>.</Pair>
<Pair title="At 12th Level">He can take the form of a Huge vermin as if using vermin shape III.<sup><InnerLink showBacklink="backlink-arc-druid-rot_warden-fake-fn-1" id="arc-druid-rot_warden-fake-fn-1" data-hash-target to="arc-druid-rot_warden-fake-fn-1-target">1</InnerLink></sup></Pair>
</Ability>
<section data-footnotes><h3 id="arc-druid-rot_warden-label">Footnotes</h3><ol>
<li id="arc-druid-rot_warden-fake-fn-1-target"><p>No such spell was ever published. A similar spell could be made based on <Link to="/spell/beast_shape_iii">beast shape III</Link> and <em>vermin shape II</em> - consult your GM. <InnerLink aria-label="Back to reference 1" id="backlink-arc-druid-rot_warden-fake-fn-1" data-hash-target to="arc-druid-rot_warden-fake-fn-1">↩</InnerLink></p></li>
</ol></section></>};
const _saurian_shaman = {title: "Saurian Shaman", jsx: <><h2 id="arc-druid-saurian_shaman-saurian-shaman">Saurian Shaman</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 39</Link><br/>A shaman with this focus calls upon the primeval dinosaur, the archaic terror that lingers as a hungering, atavistic stranger at the fringes of the ecosystem, a destroyer and despoiler whose coming other animals dread.</p>
<Ability id="arc-druid-saurian_shaman-nature-bond" icon={["info"]}>
<Pair single id="arc-druid-saurian_shaman-nature-bond">Nature Bond</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">A saurian shaman who chooses an animal companion must select a dinosaur. If choosing a domain, a saurian shaman must choose from the <Link to="/domain/animal">Animal</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/strength">Strength</Link>, and <Link to="/domain/war">War</Link> domains.</Pair>
</Ability>
<Ability id="arc-druid-saurian_shaman-wild-empathy-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-saurian_shaman-wild-empathy-ex">Wild Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Ability">A saurian shaman can use <em>wild empathy</em> with dinosaurs and reptiles as a <strong className="hl">full-round action</strong> with a +4 bonus.</Pair>
</Ability>
<Ability id="arc-druid-saurian_shaman-totem-transformation-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-druid-saurian_shaman-totem-transformation-su">Totem Transformation (Su)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 minute/day per druid level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action"><p>A saurian shaman may adopt an aspect of the saurian while retaining her normal form. The druid may select from the following bonuses:</p>
<ul>
<li><strong>Movement</strong> (+10 enhancement bonus to land speed)</li>
<li><strong>Scales</strong> (+2 natural armor bonus to AC)</li>
<li><strong>Senses</strong> (low-light vision, <Link to="/umr/scent">scent</Link>)</li>
<li><strong><Link to="/umr/natural_weapons">Natural weapons</Link></strong> (bite [1d6], 2 claws [1d4] for a Medium druid, rake, +2 CMB to grapple)</li>
</ul>
<p>While using <em>totem transformation,</em> a saurian shaman may speak normally and can cast <Link to="/spell/speak_with_animals">speak with animals</Link> (reptiles and dinosaurs only) at will.</p>
</Pair>
<Pair title="At 7th Level">This becomes a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 12th Level">This becomes a <strong className="hl">swift action</strong>.</Pair>
<Pair title="Special">This is a polymorph effect and cannot be used while the druid is using another polymorph effect, such as <em>wild shape.</em></Pair>
</Ability>
<Ability id="arc-druid-saurian_shaman-totemic-summons-su" icon={["upgrade"]}>
<Pair single id="arc-druid-saurian_shaman-totemic-summons-su">Totemic Summons (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">A saurian shaman may cast <Link to="/spell/summon_natures_ally">summon nature's ally</Link> to summon reptiles and dinosaurs, and these summoned creatures gain <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to her druid level. She can apply the <Link to="/template/young">young</Link> template to such summons to reduce the level of the summoning spell required by one. She can also increase the level of summoning required by one in order to apply either the <Link to="/template/advanced">advanced</Link> or the <Link to="/template/giant">giant</Link> template, or increase it by two to apply both the advanced and giant templates.</Pair>
</Ability>
<Ability id="arc-druid-saurian_shaman-wild-shape-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-saurian_shaman-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A saurian shaman gains <em>wild shape,</em> but the ability functions at her druid level - 2. If she takes on the form of a reptile or a dinosaur, she instead uses her druid level +2.</Pair>
</Ability>
<Ability id="arc-druid-saurian_shaman-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-druid-saurian_shaman-bonus-feat">Bonus Feat</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A saurian shaman gains one of the following bonus feats: <Link to="/feat/improved_overrun">Improved Overrun</Link>, <Link to="/feat/nimble_moves">Nimble Moves</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/skill_focus">Skill Focus</Link> (Intimidate), or <Link to="/feat/vital_strike">Vital Strike</Link>.</Pair>
<Pair title="At 13th Level">The druid gains another feat from the list above.</Pair>
<Pair title="At 17th Level">The druid gains a third bonus feat from the list above.</Pair>
<Pair title="Special">She must meet the prerequisites for these bonus feats.</Pair>
</Ability>
</>};
const _season_keeper = {title: "Season Keeper", jsx: <><h2 id="arc-druid-season_keeper-season-keeper">Season Keeper</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_stars">People of the Stars pg. 13</Link><br/>Imbued with the primeval potency of their planet's seasons, those druids known as season keepers guide Triaxian communities through the stark transition from summer to winter (and vice versa). The nature spirits that season keepers allow to possess their animal companions inspire both awe and dread in onlookers, but all value the gifts of the seasons that the season keepers bestow on their communities.</p>
<p>This archetype is available to <Link to="/race/triaxian">Triaxian</Link> druids, as well as druids of other races with the GM's permission.</p>
<Ability id="arc-druid-season_keeper-nature-bond-ex" icon={["info"]}>
<Pair single id="arc-druid-season_keeper-nature-bond-ex">Nature Bond (Ex)</Pair>
<Pair title="Choice">A season keeper must select an animal companion for her nature bond.</Pair>
</Ability>
<Ability id="arc-druid-season_keeper-seasonal-spirits-su" extraClasses="hasSubs" icon={["magic-swirl"]}>
<Pair single id="arc-druid-season_keeper-seasonal-spirits-su">Seasonal Spirits (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Each day when she prepares spells, a season keeper can imbue her animal companion with the spirit of summer or the spirit of winter.</Pair>
</Ability>
<Ability id="arc-druid-season_keeper-spirit-of-summer" extraClasses="subAbility" icon={["aura","upgrade"]}>
<Pair single id="arc-druid-season_keeper-spirit-of-summer">Spirit of Summer</Pair>
<Pair title="Passive Ability">The season keeper's animal companion projects a 15-foot-radius aura of cooling and vigor. Allies in the aura can exist comfortably in hot conditions as if they each had the <em>seasoned</em> racial ability of a Summerborn Triaxian.</Pair>
<Pair title="At 3rd Level">The aura increases the power of the season keeper's healing magic - whenever the season keeper targets an ally with a spell that has the healing descriptor, the target also gains <Link to="/umr/fast_healing">fast healing</Link> 2 for a number of rounds equal to the spell's level.</Pair>
<Pair title="At 9th Level">Allies within the aura leave no trails in natural grassy or forest environments, thus can't be tracked in such terrain.</Pair>
<Pair title="At 15th Level">The duration of the fast healing effect increases to 2 rounds per spell level and affected allies can ignore <Link to="/rule/difficult_terrain">difficult terrain</Link> caused by natural undergrowth such as nonmagical thorns, briars, overgrowth, and similar terrain.</Pair>
</Ability>
<Ability id="arc-druid-season_keeper-spirit-of-winter" extraClasses="subAbility" icon={["aura","armor-upgrade"]}>
<Pair single id="arc-druid-season_keeper-spirit-of-winter">Spirit of Winter</Pair>
<Pair hl title="Replaces">Trackless step, venom immunity, timeless body</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Passive Ability">The season keeper's animal companion projects a 15-foot-radius aura of warmth and calm. This aura allows allies to exist comfortably in cold conditions as if they each had the <em>seasoned</em> racial ability of a Winterborn Triaxian.</Pair>
<Pair title="At 3rd Level">Allies gain <Link to="/umr/resistance">resistance</Link> 10 to cold as long as they remain within the aura.</Pair>
<Pair title="At 9th Level">Affected allies leave no trails in natural snow or ice, thus can't be tracked in such terrain.</Pair>
<Pair title="At 15th Level">Affected allies gain resistance 20 to cold and can ignore difficult terrain caused by ice or snow.</Pair>
</Ability>
<Ability id="arc-druid-season_keeper-wild-shape-su" icon={["broken-shield"]}>
<Pair single id="arc-druid-season_keeper-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A season keeper gains <em>wild shape,</em> except that her effective druid level for the ability is equal to her druid level - 2. If she has imbued her animal companion with the <em>spirit of winter,</em> she uses her full druid level when taking on the form of an ice elemental. If she has imbued her companion with the <em>spirit of summer,</em> she uses her full druid level when taking on the form of a plant.</Pair>
<Pair title="Special">A season keeper cannot use <em>wild shape</em> to assume the form of an elemental except an ice elemental, and can assume that shape only if her animal companion has the <em>spirit of winter.</em> Similarly, she can assume a plant form only if her animal companion has the <em>spirit of summer.</em></Pair>
</Ability>
</>};
const _season_sage = {title: "Season Sage", jsx: <><h2 id="arc-druid-season_sage-season-sage">Season Sage</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 11</Link><br/>Season sages wander as the seasons change, turning the leaves and transforming nature as they pass and taking pleasure in the transition between seasons.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-druid-season_sage--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/gathlain">Gathlain</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-druid-season_sage-seasons-touch-su" extraClasses="hasSubs" icon={["magic-palm"]}>
<Pair single id="arc-druid-season_sage-seasons-touch-su">Season's Touch (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A season sage can infuse living things with the essence of a season with a touch, causing them to manifest the changes associated with that season - for example, a touch of winter can make some animals grow a thick winter coat, while a touch of summer can make them shed. A touch of autumn would make a deciduous tree's leaves change colors, a touch of winter would make its leaves fall, and a touch of spring would make it put forth new leaves.</Pair>
<Pair title="Info">In addition, a season sage can use the following abilities (in any combination) a total number of times per day equal to 1 + his Wisdom modifier.</Pair>
</Ability>
<Ability id="arc-druid-season_sage-vernal-growth" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-druid-season_sage-vernal-growth">Vernal Growth</Pair>
<Pair title="Ability">A touched living creature gains the effects of <Link to="/spell/enlarge_person">enlarge person</Link> (even if it is not a humanoid) for 1 minute per druid level. A touched non-creature plant likewise doubles in all dimensions for the same duration.</Pair>
</Ability>
<Ability id="arc-druid-season_sage-summer-might" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-druid-season_sage-summer-might">Summer Might</Pair>
<Pair title="Ability">A touched creature gains a +4 enhancement bonus to Constitution for 1 minute per druid level.</Pair>
</Ability>
<Ability id="arc-druid-season_sage-autumn-rot" extraClasses="subAbility" icon={["magic-palm"]}>
<Pair single id="arc-druid-season_sage-autumn-rot">Autumn Rot</Pair>
<Pair title="Ability">A touched creature or object made of plant matter takes 1d6 points of acid damage per 2 druid levels.</Pair>
</Ability>
<Ability id="arc-druid-season_sage-winter-frost" extraClasses="subAbility" icon={["magic-palm"]}>
<Pair single id="arc-druid-season_sage-winter-frost">Winter Frost</Pair>
<Pair title="Ability">A touched creature or object takes 1d6 points of cold damage per 2 druid levels.</Pair>
</Ability>
<Ability id="arc-druid-season_sage-seasons-veil-su" extraClasses="hasSubs" icon={["aura"]}>
<Pair single id="arc-druid-season_sage-seasons-veil-su">Season's Veil (Su)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Usage">1 time/day + 1 per two druid levels beyond 6th<ByLevelPop levels={[[6,1],[8,2],[10,3],[12,4],[14,5],[16,6],[18,7],[20,8]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">A season sage can radiate an aura of seasonal power. This affects a 20-foot-radius <Link to="/misc/burst">burst</Link> centered on the season sage and lasts in that area for 10 minutes, regardless of where the season sage moves afterward.</Pair>
<Pair title="At 10th Level">The radius increases to 40 feet.</Pair>
</Ability>
<Ability id="arc-druid-season_sage-vernal-bloom" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-druid-season_sage-vernal-bloom">Vernal Bloom</Pair>
<Pair title="Ability">The area surges with life. Plants form vibrant, <Link to="/rule/forest_terrain">heavy undergrowth</Link> while in the aura. If the area can support plants, a circle of minor plants lingers afterward.</Pair>
<Pair title="At 8th Level">The season sage can affect the area with <Link to="/spell/plant_growth">plant growth</Link> as a <strong className="hl">swift action</strong> at will, which can linger after the aura passes.</Pair>
</Ability>
<Ability id="arc-druid-season_sage-summer-heat" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-druid-season_sage-summer-heat">Summer Heat</Pair>
<Pair title="Ability">The area of effect is treated as if it were under the effects of <Link to="/rule/heat_dangers">extreme heat</Link>.</Pair>
<Pair title="At 8th Level">As a <strong className="hl">swift action</strong> the season sage can have the area deal 1d6 points of fire damage each round to other creatures in the area.</Pair>
</Ability>
<Ability id="arc-druid-season_sage-autumn-squall" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-druid-season_sage-autumn-squall">Autumn Squall</Pair>
<Pair title="Ability">The area is filled with fog, rain, and blown leaves. All creatures in the area gain <Link to="/rule/concealment">concealment</Link> (abilities to specifically see through fog or rain don't apply).</Pair>
<Pair title="At 8th Level">The season sage can affect the area with <Link to="/spell/diminish_plants">diminish plants</Link> as a <strong className="hl">swift action</strong> at will, which also lingers after the aura passes.</Pair>
</Ability>
<Ability id="arc-druid-season_sage-winter-chill" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-druid-season_sage-winter-chill">Winter Chill</Pair>
<Pair title="Ability">The area of effect is treated as if it were under the effects of <Link to="/rule/cold_dangers">extreme cold</Link>.</Pair>
<Pair title="At 8th Level">As a <strong className="hl">swift action</strong> the season sage can have the area deal 1d6 points of cold damage each round to other creatures in the area.</Pair>
</Ability>
<Ability id="arc-druid-season_sage-season-mastery-sp" icon={["magic-swirl"]}>
<Pair single id="arc-druid-season_sage-season-mastery-sp">Season Mastery (Sp)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">A season sage can cast <Link to="/spell/control_weather">control weather</Link> as a spell-like ability once per day; his choice of effects is not limited by the season.</Pair>
</Ability>
</>};
const _serpent_shaman = {title: "Serpent Shaman", jsx: <><h2 id="arc-druid-serpent_shaman-serpent-shaman">Serpent Shaman</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 103</Link><br/>A shaman with this totem calls upon the cunning serpent, the stealthy deceiver who draws the weak minded in and strikes while they are unaware. Some hate its treacherous nature, while others praise its thoughtful pragmatism.</p>
<Ability id="arc-druid-serpent_shaman-nature-bond" icon={["info"]}>
<Pair single id="arc-druid-serpent_shaman-nature-bond">Nature Bond</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">A serpent shaman who chooses an animal companion must select a snake. If choosing a domain, the serpent shaman must choose from the <Link to="/domain/animal">Animal</Link>, <Link to="/domain/charm">Charm</Link>, <Link to="/domain/trickery">Trickery</Link>, and <Link to="/domain/water">Water</Link> domains.</Pair>
</Ability>
<Ability id="arc-druid-serpent_shaman-wild-empathy-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-serpent_shaman-wild-empathy-ex">Wild Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Ability">A serpent shaman can use <em>wild empathy</em> with reptiles as a <strong className="hl">full-round action</strong> with a +4 bonus.</Pair>
</Ability>
<Ability id="arc-druid-serpent_shaman-totem-transformation-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-druid-serpent_shaman-totem-transformation-su">Totem Transformation (Su)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 minute/day per druid level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action"><p>A serpent shaman may adopt an aspect of the snake while retaining her normal form. The druid may select from the following bonuses:</p>
<ul>
<li><strong>Movement</strong> (climb speed 20 feet, swim speed 20 feet)</li>
<li><strong>Scales</strong> (+2 natural armor bonus to AC)</li>
<li><strong>Senses</strong> (low-light vision, <Link to="/umr/scent">scent</Link>)</li>
<li><strong><Link to="/umr/natural_weapons">Natural weapons</Link></strong> (bite [1d4] and poison for a Medium druid, +2 CMB to grapple)</li>
</ul>
<div className="sideNoteWrap"><ScrollContainer id="arc-druid-serpent_shaman--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th colSpan={4} scope="col" className="title">Serpent Shaman Venom</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the druid's level + her Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/con_damage">Con damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><p>While using <em>totem transformation,</em> the serpent shaman may speak normally and can cast <Link to="/spell/speak_with_animals">speak with animals</Link> (reptiles only) at will.</p>
</Pair>
<Pair title="At 7th Level">This becomes a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 12th Level">This becomes a <strong className="hl">swift action</strong>.</Pair>
<Pair title="Special">This is a polymorph effect and cannot be used while the druid is using another polymorph effect, such as <em>wild shape.</em></Pair>
</Ability>
<Ability id="arc-druid-serpent_shaman-totemic-summons-su" icon={["upgrade"]}>
<Pair single id="arc-druid-serpent_shaman-totemic-summons-su">Totemic Summons (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">A serpent shaman may cast <Link to="/spell/summon_natures_ally">summon nature's ally</Link> to summon snakes, and these summoned creatures gain <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to her druid level. She can apply the <Link to="/template/young">young</Link> template to any snake to reduce the level of the summoning spell required by one. She can also increase the level of summoning required by one in order to apply either the <Link to="/template/advanced">advanced</Link> or the <Link to="/template/giant">giant</Link> template, or increase it by two to apply both the advanced and giant templates.</Pair>
</Ability>
<Ability id="arc-druid-serpent_shaman-wild-shape-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-serpent_shaman-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A serpent shaman gains <em>wild shape,</em> but the ability functions at her druid level - 2. If she takes on the form of a snake, she instead uses her druid level + 2.</Pair>
</Ability>
<Ability id="arc-druid-serpent_shaman-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-druid-serpent_shaman-bonus-feat">Bonus Feat</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A serpent shaman gains one of the following bonus feats: <Link to="/feat/combat_expertise">Combat Expertise</Link>, <Link to="/feat/improved_feint">Improved Feint</Link>, <Link to="/feat/skill_focus">Skill Focus</Link> (Bluff), <Link to="/feat/stealthy">Stealthy</Link>, or <Link to="/feat/strike_back">Strike Back</Link>.</Pair>
<Pair title="At 13th Level">The druid gains another feat from the list above.</Pair>
<Pair title="At 17th Level">The druid gains a third bonus feat from the list above.</Pair>
<Pair title="Special">She must meet the prerequisites for these bonus feats.</Pair>
</Ability>
</>};
const _shark_shaman = {title: "Shark Shaman", jsx: <><h2 id="arc-druid-shark_shaman-shark-shaman">Shark Shaman</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 40</Link><br/>Some druids emulate the deadly shark, a remorseless hunter that marine dwellers dread. Like a true shark, a shark shaman leaves blood and fear in her wake.</p>
<Ability id="arc-druid-shark_shaman-nature-bond" icon={["info"]}>
<Pair single id="arc-druid-shark_shaman-nature-bond">Nature Bond</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">A shark shaman who chooses an animal companion must select a <Link to="/companion/shark">shark</Link>. If choosing a domain, a shark shaman may choose the <Link to="/domain/animal">Animal</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/war">War</Link>, or <Link to="/domain/water">Water</Link> domain.</Pair>
</Ability>
<Ability id="arc-druid-shark_shaman-wild-empathy-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-shark_shaman-wild-empathy-ex">Wild Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Ability">A shark shaman can use <em>wild empathy</em> with fish as a <strong className="hl">full-round action</strong> with a +4 bonus.</Pair>
</Ability>
<Ability id="arc-druid-shark_shaman-totem-transformation-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-druid-shark_shaman-totem-transformation-su">Totem Transformation (Su)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 minute/day per druid level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action"><p>A shark shaman may adopt an aspect of the shark while retaining her normal form. The druid may select from the following bonuses:</p>
<ul>
<li><strong>Movement</strong> (can breathe water, swim speed 30 feet)</li>
<li><strong>Senses</strong> (<Link to="/umr/scent">scent</Link> 30 feet, scent 90 feet in water)</li>
<li><strong><Link to="/umr/natural_weapons">Natural weapons</Link></strong> (bite 1d6 for a Medium shaman)</li>
<li><strong>Shark skin</strong> (+2 natural armor, creatures grappling the shaman take 1 point of slashing damage per round of grapple)</li>
</ul>
<p>While using <em>totem transformation,</em> the shark shaman may speak normally and can cast <Link to="/spell/speak_with_animals">speak with animals</Link> (fish only) at will.</p>
</Pair>
<Pair title="At 7th Level">This becomes a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 12th Level">This becomes a <strong className="hl">swift action</strong>.</Pair>
<Pair title="Special">This is a polymorph effect and cannot be used while the druid is using another polymorph effect, such as <em>wild shape.</em></Pair>
</Ability>
<Ability id="arc-druid-shark_shaman-totemic-summons-su" icon={["upgrade"]}>
<Pair single id="arc-druid-shark_shaman-totemic-summons-su">Totemic Summons (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">A shark shaman may cast <Link to="/spell/summon_natures_ally_i">summon nature's ally I</Link> to summon a <Link to="/monster/stingray">stingray</Link> and <Link to="/spell/summon_natures_ally_ii">summon nature's ally II</Link> to summon a <Link to="/monster/manta_ray">manta ray</Link>. Summoned rays and sharks gain a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to her druid level. She can apply the <Link to="/template/young">young</Link> template to any such summon to reduce the level of the summoning spell required by one. She can also increase the level of summoning required by one in order to apply either the <Link to="/template/advanced">advanced</Link> or the <Link to="/template/giant">giant</Link> template, or increase it by two to apply both the advanced and giant templates.</Pair>
</Ability>
<Ability id="arc-druid-shark_shaman-wild-shape-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-shark_shaman-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A shark shaman gains <em>wild shape,</em> but the ability functions at her druid level - 2. If she takes on the form of a shark, she instead uses her druid level +2.</Pair>
</Ability>
<Ability id="arc-druid-shark_shaman-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-druid-shark_shaman-bonus-feat">Bonus Feat</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A shark shaman gains one of the following bonus feats: <Link to="/feat/bleeding_critical">Bleeding Critical</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/self_sufficient">Self-Sufficient</Link>, or <Link to="/feat/skill_focus">Skill Focus</Link> (Swim).</Pair>
<Pair title="At 13th Level">The druid gains another feat from the list above.</Pair>
<Pair title="At 17th Level">The druid gains a third bonus feat from the list above.</Pair>
<Pair title="Special">She must meet prerequisites for these bonus feats.</Pair>
</Ability>
</>};
const _skinshaper = {title: "Skinshaper", jsx: <><h2 id="arc-druid-skinshaper-skinshaper">Skinshaper</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 26</Link><br/>Using the same primal energy with which other druids assume animal forms, skinshapers can imitate some of the most dangerous beasts of all: humans and other humanoids. Rather than merely copying humanoids' shapes and abilities, skinshapers unlock brutal energies that push their borrowed bodies far beyond the capabilities of normal humanoid creatures. Their connection to humanoids bring skinshapers into settlements more often than typical druids, and their penchant for disguise allows them to excel at intrigue.</p>
<Ability icon={["skills"]} id="arc-druid-skinshaper-undefined">
<Pair id="arc-druid-skinshaper-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/disguise">Disguise</Link> (CHA)</Pair>
<Pair title="Removed Skills">Ride</Pair></Ability>
<Ability id="arc-druid-skinshaper-skinshaping-su" extraClasses="hasSubs" icon={["magic-swirl"]}>
<Pair single id="arc-druid-skinshaper-skinshaping-su">Skinshaping (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">1 time/day + 1 per two druid levels beyond 4th<ByLevelPop levels={[[4,1],[6,2],[8,3],[10,4],[12,5],[14,6],[16,7],[18,8],[20,9]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A skinshaper gains the ability to turn herself into any Small or Medium humanoid and back again once per day. This ability functions as per <Link to="/spell/alter_self">alter self</Link>, except as noted here. The effect lasts for 1 hour per druid level, or until the skinshaper changes back. Changing form is a <strong className="hl">standard action</strong> and doesn't provoke an attack of opportunity. The skinshaper must be familiar with the form she has chosen.</Pair>
<Pair title="At 20th Level">She can use <em>skinshaping</em> at will.</Pair>
<Pair title="Special">She also gains other benefits while <em>skinshaping,</em> as described below.</Pair>
</Ability>
<Ability id="arc-druid-skinshaper-unarmed-strike" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-druid-skinshaper-unarmed-strike">Unarmed Strike</Pair>
<Pair title="At 4th Level">The skinshaper learns to intuitively use her body as a weapon. While <em>skinshaping,</em> she gains the benefit of the <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> feat, and her unarmed strike deals damage as if she were a <Link to="/class/monk">monk</Link> with a monk level equal to her druid level - 3.</Pair>
</Ability>
<Ability id="arc-druid-skinshaper-enhancement-bonus" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-druid-skinshaper-enhancement-bonus">Enhancement Bonus</Pair>
<Pair title="At 6th Level">A skinshaper gains the ability to channel the versatile nature of humanoids to enhance her body and mind. Whenever she uses <em>skinshaping</em> to assume a humanoid shape other than her own, she gains a +2 enhancement bonus to any one ability score. The bonus persists as long as she remains in that form.</Pair>
<Pair title="At 10th Level">She gains an additional +2 enhancement bonus to one ability score, or can stack them as a +4 bonus to one score.</Pair>
<Pair title="At 14th Level">She gains a third +2 enhancement bonus to one ability score. She can distribute these bonuses as she wishes in increments of +2, but the enhancement bonus on any single ability score cannot exceed +4.</Pair>
<Pair title="At 18th Level">She gains a fourth +2 enhancement bonus to one ability score, with the same restrictions as above.</Pair>
</Ability>
<Ability id="arc-druid-skinshaper-advanced-form" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-druid-skinshaper-advanced-form">Advanced Form</Pair>
<Pair title="At 8th Level">A skinshaper can imitate humanoid creatures even more accurately. She gains any of the following abilities that the form she assumes has: darkvision 90 feet, low-light vision, <Link to="/umr/scent">scent</Link>, climb 60 feet, fly 60 feet (good maneuverability), swim 60 feet, <Link to="/umr/ferocity">ferocity</Link>, <Link to="/race/half_orc">orc ferocity</Link>, and <Link to="/umr/hold_breath">hold breath</Link>. If the form she assumes has the <Link to="/subtype/aquatic">aquatic</Link> subtype, she gains the aquatic subtype and the <Link to="/umr/amphibious">amphibious</Link> special quality.</Pair>
</Ability>
<Ability id="arc-druid-skinshaper-racial-memory" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-druid-skinshaper-racial-memory">Racial Memory</Pair>
<Pair title="At 12th Level">A skinshaper can access the racial memory of the humanoid she is imitating. If the form she assumes has any of the following racial abilities, she gains those abilities: defensive training, hatred, <Link to="/ability/poison_use">poison use</Link>, <Link to="/ability/sneak_attack">sneak attack</Link> +2d6, stability, and weapon familiarity. Additionally, she can speak any racial languages of the chosen form.</Pair>
</Ability>
<Ability id="arc-druid-skinshaper-skill-bonuses" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-druid-skinshaper-skill-bonuses">Skill Bonuses</Pair>
<Pair title="At 16th Level">A skinshaper gains the racial skill bonuses of the imitated humanoid, to a maximum of a +4 bonus on a given skill. The skinshaper cannot benefit from any variable racial skill bonuses associated with the chosen form (such as gnomes' racial bonus on any one Craft or Profession skill).</Pair>
</Ability>
<Ability id="arc-druid-skinshaper-flashmorph-su" icon={["upgrade"]}>
<Pair single id="arc-druid-skinshaper-flashmorph-su">Flashmorph (Su)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Info">A skinshaper learns to change her shape extremely quickly. She can use skinshaping as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
</>};
const _sky_druid = {title: "Sky Druid", jsx: <><h2 id="arc-druid-sky_druid-sky-druid">Sky Druid</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 158</Link><br/>Some druids develop ties not to a particular landscape, but instead to the endless blue expanse of the skies. Such are the sky druids, who are more at home soaring through air than standing on the ground. A sky druid has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-druid-sky_druid--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/sylph">Sylph</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-druid-sky_druid-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-druid-sky_druid-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair title="Info">A sky druid loses medium armor proficiency.</Pair>
</Ability>
<Ability id="arc-druid-sky_druid-nature-bond-ex" icon={["info"]}>
<Pair single id="arc-druid-sky_druid-nature-bond-ex">Nature Bond (Ex)</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A sky druid who chooses an animal companion must select one with a fly speed. If choosing a domain, the sky druid must choose from the <Link to="/domain/air">Air</Link>, <Link to="/domain/animal">Animal</Link>, <Link to="/domain/liberation">Liberation</Link>, and <Link to="/domain/weather">Weather</Link> domains, or subdomains appropriate to those domains.</Pair>
</Ability>
<Ability id="arc-druid-sky_druid-skys-embrace-su" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="arc-druid-sky_druid-skys-embrace-su">Sky's Embrace (Su)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A sky druid no longer takes falling damage, as though she were constantly under the effect of <Link to="/spell/feather_fall">feather fall</Link>.</Pair>
<Pair title="Ability">Additionally, she may take ranks in the Fly skill regardless of whether she has a natural fly speed, and may use her Fly skill in place of Acrobatics when making jump checks.</Pair>
</Ability>
<Ability id="arc-druid-sky_druid-resist-storm-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-sky_druid-resist-storm-ex">Resist Storm (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A sky druid gains a +4 bonus on saving throws against spells with the air or electricity descriptors and against effects that control or modify the weather (such as <Link to="/spell/sleet_storm">sleet storm</Link>).</Pair>
</Ability>
<Ability id="arc-druid-sky_druid-skymaster-su" icon={["magic-swirl"]}>
<Pair single id="arc-druid-sky_druid-skymaster-su">Skymaster (Su)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A sky druid can use the <Link to="/spell/fly">fly</Link> spell (self only) for a number of minutes per day equal to her druid level. These minutes do not need to be consecutive.</Pair>
</Ability>
<Ability id="arc-druid-sky_druid-wild-shape-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-druid-sky_druid-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A sky druid gains the ability to use <em>wild shape.</em> When a sky druid takes the form of a creature with a fly speed, this ability functions at her class level + 1. For all other forms, her effective druid level for the ability is equal to her actual sky druid level. This ability otherwise functions as <em>wild shape.</em></Pair>
</Ability>
<Ability id="arc-druid-sky_druid-soaring-form-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-sky_druid-soaring-form-ex">Soaring Form (Ex)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A sky druid is no longer affected by <Link to="/rule/altitude_sickness">altitude sickness</Link> or natural or magical wind.</Pair>
</Ability>
<Ability id="arc-druid-sky_druid-into-the-wild-blue-su" icon={["stairs-goal"]}>
<Pair single id="arc-druid-sky_druid-into-the-wild-blue-su">Into the Wild Blue (Su)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">A sky druid gains a fly speed equal to twice her base land speed (good maneuverability).</Pair>
</Ability>
</>};
const _storm_druid = {title: "Storm Druid", jsx: <><h2 id="arc-druid-storm_druid-storm-druid">Storm Druid</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 40</Link><br/>While most druids focus their attention upon the rich earth and the bounty of nature that springs forth from it, the storm druid's eyes have ever been cast to the skies and the endless expanse of blue, channeling the most raw and untamed aspects of nature.</p>
<Ability id="arc-druid-storm_druid-spontaneous-domain-casting" icon={["magic-swirl"]}>
<Pair single id="arc-druid-storm_druid-spontaneous-domain-casting">Spontaneous Domain Casting</Pair>
<Pair hl title="Replaces">Spontaneous casting</Pair>
<Pair title="Ability">A storm druid can channel stored spell energy into domain spells that she has not prepared ahead of time. She can "lose" a prepared spell in order to cast any domain spell of the same level or lower.</Pair>
</Ability>
<Ability id="arc-druid-storm_druid-nature-bond-ex" icon={["broken-shield"]}>
<Pair single id="arc-druid-storm_druid-nature-bond-ex">Nature Bond (Ex)</Pair>
<Pair title="Choice">A storm druid may not choose an animal companion. A storm druid must choose the <Link to="/domain/air">Air</Link> or <Link to="/domain/weather">Weather</Link> domain, or the Cloud, Storm, or Wind subdomain.</Pair>
</Ability>
<Ability id="arc-druid-storm_druid-windwalker-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-storm_druid-windwalker-ex">Windwalker (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">The penalties from natural or magical wind effects are treated as one step less severe for a storm druid.</Pair>
</Ability>
<Ability id="arc-druid-storm_druid-stormvoice-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-storm_druid-stormvoice-ex">Stormvoice (Ex)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A storm druid's voice can magically carry over howling winds and peals of thunder. Whenever a Perception check is needed to hear the druid's voice, the DC is reduced by an amount equal to the druid's level.</Pair>
</Ability>
<Ability id="arc-druid-storm_druid-eyes-of-the-storm-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-storm_druid-eyes-of-the-storm-ex">Eyes of the Storm (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A storm druid can see through 10 feet of magical fog, mist, gas, wind, rain, or similar inclement weather conditions, ignoring any concealment it might grant.</Pair>
<Pair title="At 8th Level">Her sight can penetrate 15 feet.</Pair>
<Pair title="At 12th Level">Her sight increases to 20 feet.</Pair>
<Pair title="At 16th Level">Her sight can penetrate 25 feet.</Pair>
<Pair title="At 20th Level">Her sight increases to 30 feet.</Pair>
</Ability>
<Ability id="arc-druid-storm_druid-windlord" icon={["stairs-goal"]}>
<Pair single id="arc-druid-storm_druid-windlord">Windlord</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Choice">A storm druid can select another domain or subdomain from those available to her through her nature bond.</Pair>
</Ability>
<Ability id="arc-druid-storm_druid-storm-lord-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-storm_druid-storm-lord-ex">Storm Lord (Ex)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">A storm druid is unaffected by natural and magical wind effects. She also becomes immune to deafness and gains +2 bonus on saving throws against sonic effects.</Pair>
</Ability>
</>};
const _sunrider = {title: "Sunrider", jsx: <><h2 id="arc-druid-sunrider-sunrider">Sunrider</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 13</Link><br/>Sunriders help their allies, be they fellow tribe members or fellow adventurers, to survive in harsh desert terrain, while simultaneously making it even harsher for their foes. They seem to share a single mind with their loyal steeds, and companions who ride with them become an eerily well-coordinated cavalry unit that traverses the treacherous desert sands with ease to wreak havoc upon invaders. Sunriders almost never leave their tribal homelands; those found outside Al-Zabrit are usually either exiles or emissaries sent to deal with issues that can't be addressed from their holds.</p>
<Ability icon={["skills"]} id="arc-druid-sunrider-undefined">
<Pair id="arc-druid-sunrider-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT)</Pair>
<Pair title="Removed Skills">Profession</Pair></Ability>
<Ability id="arc-druid-sunrider-weapon-and-armor-proficiencies" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-druid-sunrider-weapon-and-armor-proficiencies">Weapon and Armor Proficiencies</Pair>
<Pair hl title="Alters">Weapon and armor proficiencies</Pair>
<Pair title="Ability">A sunrider gains proficiency with the <Link to="/eq-weapon/shortbow">shortbow</Link>, but not with the scythe, sickle, or quarterstaff.</Pair>
</Ability>
<Ability id="arc-druid-sunrider-nature-bond-ex" icon={["broken-shield"]}>
<Pair single id="arc-druid-sunrider-nature-bond-ex">Nature Bond (Ex)</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">A sunrider must use this ability to bond with a <Link to="/companion/horse">horse</Link> or a <Link to="/companion/pony">pony</Link> as an animal companion; she cannot choose a different animal or choose a domain instead of an animal companion.</Pair>
</Ability>
<Ability id="arc-druid-sunrider-born-to-the-saddle-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-sunrider-born-to-the-saddle-ex">Born to the Saddle (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">While wearing light or no armor, a sunrider does not need to attempt Ride checks for any task listed in the Ride skill with a DC of 15 or lower. She does not take an armor check penalty on Ride checks while riding her mount.</Pair>
</Ability>
<Ability id="arc-druid-sunrider-mounted-advantage-su" icon={["upgrade","aura"]}>
<Pair single id="arc-druid-sunrider-mounted-advantage-su">Mounted Advantage (Su)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">Any allied mount within 30 feet of a sunrider can ignore the effects of rocky or sandy <Link to="/rule/difficult_terrain">difficult terrain</Link>.</Pair>
</Ability>
<Ability id="arc-druid-sunrider-desert-born-ex" icon={["upgrade","aura"]}>
<Pair single id="arc-druid-sunrider-desert-born-ex" flavor="A sunrider is at home in the desert.">Desert Born (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">She gains a +2 bonus on initiative checks and on Knowledge (geography), Perception, Stealth, and Survival checks while she is in desert terrain. Mounted allies traveling with her likewise gain a +1 bonus on initiative checks and Perception and Survival checks while in desert terrain, as long as they are within 30 feet of the sunrider.</Pair>
</Ability>
<Ability id="arc-druid-sunrider-concerted-effort-ex" icon={["stairs-goal","aura","armor-upgrade","upgrade"]}>
<Pair single id="arc-druid-sunrider-concerted-effort-ex" flavor="A sunrider can extend the bond she shares with her horse to other nearby mounted companions, forming them into a fighting force that seems to share a single mind.">Concerted Effort (Ex)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">Allied mounts within 60 feet of the sunrider gain <Link to="/ability/evasion">evasion</Link> as per the <Link to="/sidekick/animal_companion">animal companion</Link> special ability.</Pair>
<Pair title="At 6th Level">The range expands to 90 feet and allied mounts gain a +10-foot enhancement bonus to their speed.</Pair>
<Pair title="At 8th Level">The range expands to 120 feet and allied mounts gain <em>devotion</em> as per the animal companion special ability.</Pair>
<Pair title="At 10th Level">Allied mounts gain <em>multiattack</em> as per the animal companion special ability.</Pair>
<Pair title="At 12th Level">Allied mounts gain a +2 bonus on saving throws.</Pair>
<Pair title="At 14th Level">Allied mounts gain a +20-foot enhancement bonus to their speed.</Pair>
<Pair title="At 16th Level">Allied mounts gain <Link to="/ability/improved_evasion">improved evasion</Link> as per the animal companion special ability.</Pair>
<Pair title="At 18th Level">Allied mounts gain a dodge bonus to their Armor Class and a +2 bonus on attack rolls.</Pair>
<Pair title="At 20th Level">Allied mounts gain DR 5/- and energy resistance 10 to acid, cold, electricity, fire, and sonic damage.</Pair>
<Pair title="Special">These abilities function only while allied mounts are within range of the sunrider (her own mount always counts as an ally).</Pair>
</Ability>
</>};
const _supernaturalist = {hasJL:true,title: "Supernaturalist", jsx: <><div className="jumpList" id="arc-druid-supernaturalist-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arc-druid-supernaturalist-optional-abilities">Optional Abilities</InnerLink></li></ul></div><h2 id="arc-druid-supernaturalist-supernaturalist">Supernaturalist</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 21</Link><br/>Supernaturalists wholly embrace paranormal phenomena as extensions of nature.</p>
<Ability id="arc-druid-supernaturalist-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-druid-supernaturalist-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Weapon and armor proficiencies</Pair>
<Pair title="Info">A supernaturalist is not proficient with any type of armor.</Pair>
</Ability>
<Ability id="arc-druid-supernaturalist-eldritch-botanist-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-supernaturalist-eldritch-botanist-ex">Eldritch Botanist (Ex)</Pair>
<Pair title="Ability">A supernaturalist can affect plants with mind-affecting effects she creates and with spells that normally affect animals. Any such spell that allows a Will save can instead be negated by the target plant with a successful Fortitude save at the same DC.</Pair>
</Ability>
<Ability id="arc-druid-supernaturalist-paranormal-scholar-ex" icon={["stairs-goal","skills","spell-book"]}>
<Pair single id="arc-druid-supernaturalist-paranormal-scholar-ex">Paranormal Scholar (Ex)</Pair>
<Pair hl title="Replaces">Nature sense, trackless step, resist nature's lure</Pair>
<Pair title="Ability">A supernaturalist gains <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> as a bonus feat and adds <Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), and <Link to="/skill/sense_motive">Sense Motive</Link> (WIS) as class skills.</Pair>
<Pair title="Special">At 3rd level and every 3 levels thereafter, she can select a spell from the <Link to="/main/spells_psychic">psychic class's spell list</Link> and add it to her druid spell list, and is able to prepare and cast it as a druid spell.</Pair>
</Ability>
<Ability id="arc-druid-supernaturalist-animal-spirit-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-druid-supernaturalist-animal-spirit-su">Animal Spirit (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A supernaturalist can perform a seance to call an animal spirit of any animal with which she is familiar to serve as her companion and guide. The supernaturalist gains <em>spirit, spirit bonus, spirit surge,</em> and <em>taboo</em> abilities as a <Link to="/class/medium">medium</Link> 3 levels lower than her druid level. The supernaturalist's allies cannot participate in this seance.</Pair>
<Pair title="Special">The spirit abilities of the animal spirit are given below.</Pair>
</Ability>
<Ability id="arc-druid-supernaturalist-spirit-bonus" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-druid-supernaturalist-spirit-bonus">Spirit Bonus</Pair>
<Pair title="Info">Your spirit bonus applies on attack and damage rolls with natural weapons and on skill checks relating to animals and plants.</Pair>
</Ability>
<Ability id="arc-druid-supernaturalist-seance-boon" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-supernaturalist-seance-boon">Seance Boon</Pair>
<Pair title="Passive Ability">Your natural armor bonus to AC increases by 1.</Pair>
</Ability>
<Ability id="arc-druid-supernaturalist-favored-location" extraClasses="subAbility" icon={["info"]}>
<Pair single id="arc-druid-supernaturalist-favored-location">Favored Location</Pair>
<Pair title="Info">Native terrain of the animal type being invoked.</Pair>
</Ability>
<Ability id="arc-druid-supernaturalist-influence-penalty" extraClasses="subAbility" icon={["broken-shield"]}>
<Pair single id="arc-druid-supernaturalist-influence-penalty">Influence Penalty</Pair>
<Pair title="Passive Ability">You become wild and savage, taking a penalty equal to your spirit bonus on caster level checks, Charisma- and Intelligence-based ability checks, and skill checks.</Pair>
</Ability>
<Ability id="arc-druid-supernaturalist-taboos" extraClasses="subAbility" icon={["broken-shield"]}>
<Pair single id="arc-druid-supernaturalist-taboos">Taboos</Pair>
<Pair title="Choice"><p>Choose one:</p>
<ul>
<li>You must not speak (except with animals and plants)</li>
<li>You must not wield manufactured weapons</li>
<li>You must not eat anything you did not kill or harvest yourself</li>
</ul>
</Pair>
</Ability>
<Ability id="arc-druid-supernaturalist-totem-transformation-lesser-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-druid-supernaturalist-totem-transformation-lesser-su">Totem Transformation (Lesser, Su)</Pair>
<Pair title="Ability"><p>You gain any of the following abilities possessed by the animal you select as your animal spirit:</p>
<ul>
<li><Link to="/umr/natural_weapons">Bite</Link> (1d6 for a Medium druid)</li>
<li>2 claws (1d4 for a Medium druid)</li>
<li>Darkvision</li>
<li>Improved land movement speed (up to a +20-foot enhancement bonus to the druid's base land movement speed)</li>
<li>Low-light vision</li>
<li><Link to="/umr/scent">Scent</Link></li>
<li>Swim (up to 30 feet).</li>
</ul>
</Pair>
</Ability>
<Ability id="arc-druid-supernaturalist-pack-leader-intermediate-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-druid-supernaturalist-pack-leader-intermediate-su">Pack Leader (Intermediate, Su)</Pair>
<Pair title="Passive Ability">When you summon animals that match your animal spirit, they gain a +2 bonus on attack rolls, damage rolls, and saving throws.</Pair>
</Ability>
<Ability id="arc-druid-supernaturalist-wildstrike-greater-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-druid-supernaturalist-wildstrike-greater-su">Wildstrike (Greater, Su)</Pair>
<Pair title="Swift Action">You can allow your animal spirit to gain 1 point of influence over you to allow an animal or plant (including your companion) within 30 feet that can see or hear you to immediately take an additional standard action.</Pair>
</Ability>
<Ability id="arc-druid-supernaturalist-wild-heart-supreme-ex" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="arc-druid-supernaturalist-wild-heart-supreme-ex">Wild Heart (Supreme, Ex)</Pair>
<Pair title="Passive Ability">You gain a +4 bonus on saves against enchantment and mind-affecting effects, and immunity to effects that affect only humanoids.</Pair>
<Pair title="Ability">Once per day, you can cast any <Link to="/spell/summon_natures_ally">summon nature's ally</Link> spell you can cast spontaneously as a <strong className="hl">standard action</strong> without expending a spell slot.</Pair>
</Ability>
<h3 id="arc-druid-supernaturalist-optional-abilities" data-hash-target>Optional Abilities</h3>
<p>A supernaturalist can choose <em>plant bond</em> and <em>green empathy</em> in place of <em>nature bond</em> and <em>wild empathy.</em> This choice must be made when the druid takes this archetype.</p>
<Ability id="arc-druid-supernaturalist-plant-bond-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-druid-supernaturalist-plant-bond-ex">Plant Bond (Ex)</Pair>
<Pair hl title="Replaces">Nature bond</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A supernaturalist forms a mystic bond with plant life. This bond can take one of two forms.</Pair>
</Ability>
<Ability id="arc-druid-supernaturalist-domain" extraClasses="subAbility numbered" icon={["spell-book","magic-swirl"]}>
<Pair single id="arc-druid-supernaturalist-domain">Domain</Pair>
<Pair title="Ability">This grants the supernaturalist one of the following domains: <Link to="/domain/plant">Plant</Link>, <Link to="/domain/growth">Growth</Link>, <Link to="/druiddomain/jungle">Jungle</Link>, <Link to="/druiddomain/swamp">Swamp</Link>. When determining the powers and bonus spells granted by this domain, the supernaturalist's effective cleric level is equal to her druid level. A supernaturalist who selects this option also receives additional domain spell slots, just like a cleric. She must prepare the spell from her domain in this slot, and this spell cannot be used to cast a spell spontaneously.</Pair>
</Ability>
<Ability id="arc-druid-supernaturalist-plant-companion" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="arc-druid-supernaturalist-plant-companion">Plant companion</Pair>
<Pair title="Ability">A supernaturalist can form a close bond with a plant companion. A supernaturalist may begin play with any of the plants listed under <strong>Plant Companions</strong> in the <Link to="/arc-druid/treesinger">treesinger</Link> archetype. This plant is a loyal companion that accompanies the supernaturalist on her adventures. Except for the companion being a creature of the plant type, drawn from the list of plant companions, this ability otherwise works like the standard druid's animal companion ability.</Pair>
</Ability>
<Ability id="arc-druid-supernaturalist-green-empathy-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-supernaturalist-green-empathy-ex">Green Empathy (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>A supernaturalist can improve the attitude of a plant creature. This ability functions just like a Diplomacy check made to improve the attitude of a person. The supernaturalist rolls 1d20 and adds her druid level and her Charisma modifier to determine the <em>green empathy</em> check result. The typical wild plant creature has a starting attitude of indifferent.</p>
<p>To use <em>green empathy,</em> the supernaturalist and the plant creature must be within 30 feet of one another under normal conditions. Generally, influencing a plant creature in this way takes 1 minute but, as with influencing people, it might take more or less time.</p>
<p>A supernaturalist can also use this ability to influence an animal, but she takes a -4 penalty on the check.</p>
</Pair>
</Ability>
</>};
const _survivor = {title: "Survivor", jsx: <><h2 id="arc-druid-survivor-survivor">Survivor</h2>
<p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance pg. 24</Link><br/>The survivor embodies the neutral aspect of the natural world and eschews druidic magic in favor of more pragmatic and worldly survival methods.</p>
<Ability icon={["skills"]} id="arc-druid-survivor-undefined">
<Pair id="arc-druid-survivor-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/stealth">Stealth</Link> (DEX)</Pair></Ability>
<Ability id="arc-druid-survivor-weapon-proficiencies" icon={["stairs-goal"]}>
<Pair single id="arc-druid-survivor-weapon-proficiencies">Weapon Proficiencies</Pair>
<Pair title="Ability">In addition to the normal druid weapon proficiencies, a survivor is proficient with the <Link to="/eq-weapon/shortbow">shortbow</Link> and <Link to="/eq-weapon/longbow">longbow</Link>.</Pair>
</Ability>
<Ability id="arc-druid-survivor-diminished-spellcasting" icon={["broken-shield"]}>
<Pair single id="arc-druid-survivor-diminished-spellcasting">Diminished Spellcasting</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Info">A survivor's number of spells per day for each spell level is one less than normal (for example, a 4th-level survivor can cast three cantrips, two 2nd-level spells, and one 1st-level spell per day). If this reduces the number of spells for a level to 0, she gains only the bonus spells for that level she would be entitled to based on her Wisdom score.</Pair>
</Ability>
<Ability id="arc-druid-survivor-nature-bond-ex" icon={["broken-shield"]}>
<Pair single id="arc-druid-survivor-nature-bond-ex">Nature Bond (Ex)</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A survivor must select an animal companion as her <em>nature bond.</em></Pair>
</Ability>
<Ability id="arc-druid-survivor-element-of-surprise-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-druid-survivor-element-of-surprise-ex">Element of Surprise (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">If a survivor makes a successful attack during a surprise round against a target that is unaware of her, her victim takes a penalty on its initiative check during the following round equal to half the damage dealt by the survivor's attack (minimum 0, maximum equal to the survivor's class level). This cannot reduce an initiative result below 1.</Pair>
</Ability>
<Ability id="arc-druid-survivor-trap" icon={["stairs-goal"]}>
<Pair single id="arc-druid-survivor-trap">Trap</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A survivor learns how to create a snare trap and one other <Link to="/ability/ranger_traps">ranger trap</Link> of her choice. At 6th level and every 2 levels thereafter, she learns another trap. The survivor can use these traps a total number of times per day equal to <Link to="/misc/half">half</Link> her druid level + her Wisdom modifier. Once a trap is learned, it can't be unlearned and replaced with a different type of trap. The survivor cannot select an individual trap more than once.</Pair>
</Ability>
<Ability id="arc-druid-survivor-launch-trap" icon={["bowman"]}>
<Pair single id="arc-druid-survivor-launch-trap">Launch Trap</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A survivor can affix a magical ranger trap to an arrow or thrown weapon, allowing her to set the trap remotely or use it as a direct attack. Attaching the trap to the projectile is part of the <strong className="hl">full-round action</strong> of creating a new trap. The trapped projectile is fired or thrown in the normal manner. If the projectile is fired at a square, the trap is treated as if the survivor had set the trap in that square, except the DC is 5 lower than normal. If the projectile is fired at a creature, the target takes damage from the ranged weapon and is treated as if it had triggered the trap (saving throw applies, if any).</Pair>
<Pair title="Special">The attack has a maximum range of 60 feet, and range increments apply to the attack roll. The duration of the trapped projectile starts from when it is created, not from when it is used.</Pair>
</Ability>
</>};
const _swamp_druid = {title: "Swamp Druid", jsx: <><h2 id="arc-druid-swamp_druid-swamp-druid">Swamp Druid</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 100</Link><br/>Some druids eschew pleasant glades and groves and instead seek out dank marshes, misty bogs and heaths, and trackless swamps as the place they call home and watch over with care, finding beauty and life in abundance in places few others would willingly enter.</p>
<Ability id="arc-druid-swamp_druid-marshwight-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-druid-swamp_druid-marshwight-ex">Marshwight (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A swamp druid gains a bonus on Initiative checks and Knowledge (geography), Perception, Stealth, Swim, and Survival checks equal to <Link to="/misc/half">half</Link> her druid level in swamp terrain, and she cannot be tracked in such an environment.</Pair>
</Ability>
<Ability id="arc-druid-swamp_druid-swamp-strider-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-swamp_druid-swamp-strider-ex">Swamp Strider (Ex)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A swamp druid suffers no penalty to speed or on Acrobatics or Stealth checks in bogs and undergrowth.</Pair>
</Ability>
<Ability id="arc-druid-swamp_druid-pond-scum-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-swamp_druid-pond-scum-ex">Pond Scum (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A swamp druid gains a +4 bonus on saves against disease and the exceptional, supernatural, and spell-like abilities of monstrous humanoids. A swamp druid also gains DR/- equal to half her druid level against attacks by swarms. If this damage resistance prevents damage, the druid is unaffected by distraction or other special attacks of the swarm.</Pair>
</Ability>
<Ability id="arc-druid-swamp_druid-wild-shape-su" icon={["broken-shield"]}>
<Pair single id="arc-druid-swamp_druid-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A swamp druid gains <em>wild shape,</em> except that her effective druid level for this ability is equal to her druid level - 2.</Pair>
</Ability>
<Ability id="arc-druid-swamp_druid-slippery-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-druid-swamp_druid-slippery-ex">Slippery (Ex)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">A swamp druid gains continuous <Link to="/spell/freedom_of_movement">freedom of movement</Link>.</Pair>
</Ability>
</>};
const _swarm_monger = {title: "Swarm Monger", jsx: <><h2 id="arc-druid-swarm_monger-swarm-monger">Swarm Monger</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 21</Link><br/>Swarm mongers are unparalleled survivors, thriving on the filthy fringes of society. Whereas other druids commune with nature or even the spirit of a city, swarm mongers find beauty and strength in decay, and they draw their power from fungus, disease, and their own singular will to survive.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-druid-swarm_monger--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/ratfolk">Ratfolk</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-druid-swarm_monger-fecund-familiar-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-swarm_monger-fecund-familiar-ex">Fecund Familiar (Ex)</Pair>
<Pair hl title="Replaces">Nature bond</Pair>
<Pair title="Choice">A swarm monger bonds with an urban <Link to="/sidekick/familiar">familiar</Link>, treating her druid level as her <Link to="/class/wizard">wizard</Link> level for the purposes of determining her familiar's abilities. The swarm monger must select her familiar from the <Link to="/ability/familiars">following options</Link>: cat, house centipede, rat, raven, or scarlet spider.</Pair>
<Pair title="Passive Ability">The fecund familiar gains the benefits of its master's <em>child of pollution, shadowy opportunist,</em> and <em>venom immunity</em> class abilities.</Pair>
<Pair title="Standard Action">A swarm monger can cause her familiar to burst forth into a full swarm of identical creatures, filling four contiguous 5-foot squares and gaining <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to <Link to="/misc/half">half</Link> its master's maximum hit points. While in swarm form, the familiar loses the <em>improved evasion, share spells, deliver touch attack,</em> and <em>scry on familiar</em> special abilities. It uses its normal AC, saving throws, and skill bonuses, and it gains the <Link to="/subtype/swarm">swarm</Link> subtype and the ability to make swarm attacks (dealing 1d6 points of damage at 1st level and using the swarm monger's druid level as the swarm's Hit Dice to determine damage increases as per the swarm subtype).</Pair>
<Pair title="Usage">A swarm monger can transform her familiar into a swarm a number of times each day equal to her Wisdom modifier (minimum 1), and the transformation lasts for 1 minute per druid level, or until the swarm monger reverts her familiar back to a singular form as a <strong className="hl">standard action</strong>.</Pair>
<Pair title="At 5th Level">Any creature damaged by a fecund familiar's swarm attack must succeed at a Fortitude saving throw (DC = 10 + 1/2 the swarm monger's druid level + the swarm monger's Wisdom modifier) or be <Link to="/misc/sickened">sickened</Link> for 1d6 rounds.</Pair>
<Pair title="At 12th Level">Creatures that fail their Fortitude saving throws instead become <Link to="/misc/nauseated">nauseated</Link>.</Pair>
<Pair title="Special">The swarm monger is immune to her own familiar's swarm attack. A fecund familiar cannot be reduced in size to Diminutive or smaller when in swarm form.</Pair>
</Ability>
<Ability id="arc-druid-swarm_monger-low-friends-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-swarm_monger-low-friends-ex">Low Friends (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A swarm monger gains <Link to="/feat/vermin_heart">Vermin Heart</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-druid-swarm_monger-shadowy-opportunist-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-swarm_monger-shadowy-opportunist-ex">Shadowy Opportunist (Ex)</Pair>
<Pair hl title="Replaces">Nature sense</Pair>
<Pair title="Passive Ability">A swarm monger gains a +2 bonus on Knowledge (local) and Stealth checks.</Pair>
</Ability>
<Ability id="arc-druid-swarm_monger-child-of-pollution-su" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-druid-swarm_monger-child-of-pollution-su">Child of Pollution (Su)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A swarm monger gains a +4 bonus on saving throws against disease and poisons, and she can eat spoiled or rotting food and drink without ill effect.</Pair>
<Pair title="Standard Action">A swarm monger can devour a handful of rotting food to gain a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to 1d8 + her druid level that last for 1 hour. She can use this ability a number of times a day equal to one-fourth of her druid level.</Pair>
</Ability>
<Ability id="arc-druid-swarm_monger-swarm-shape-su" icon={["stairs-goal"]}>
<Pair single id="arc-druid-swarm_monger-swarm-shape-su">Swarm Shape (Su)</Pair>
<Pair hl title="Replaces">The normal <em>wild shape</em> options gained at 12th level</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">A swarm monger can use <em>wild shape</em> to transform into a swarm of vermin, functioning as <Link to="/spell/swarm_skin">swarm skin</Link>, but not allowing her to split into more than one contiguous swarm. She doesn't leave her gear behind when she uses this ability, and she can revert to her mundane form normally.</Pair>
</Ability>
</>};
const _tempest_druid = {title: "Tempest Druid", jsx: <><h2 id="arc-druid-tempest_druid-tempest-druid">Tempest Druid</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 183</Link>, <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 41</Link><br/>Many of the druids who train under the aegis of the <Link to="/rule/storm_kindlers">Storm Kindlers</Link> focus on different areas of nature than those classically paid homage to by their kind. These so-called tempest druids see the personification of nature in the fury of the storm alone and to some extent eschew the veneration of plant or animal life, and the nature of their powers shifts accordingly. They still understand the place of plants and animals in the natural order, however; they simply view such entities - and indeed, all forms of life - as subservient to the true power found in the storms that lash the world.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-druid-tempest_druid--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>The beliefs held by tempest druids are inherently more chaotic than those held by most druids, and as a result, tempest druids must be chaotic neutral.</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-druid-tempest_druid-armor-and-weapon-proficiencies" icon={["stairs-goal"]}>
<Pair single id="arc-druid-tempest_druid-armor-and-weapon-proficiencies">Armor and Weapon Proficiencies</Pair>
<Pair hl title="Alters">Armor and weapon proficiencies</Pair>
<Pair title="Ability">A tempest druid is proficient with the <Link to="/eq-weapon/trident">trident</Link>, in addition to the druid's normal armor and weapon proficiencies.</Pair>
</Ability>
<Ability id="arc-druid-tempest_druid-spontaneous-domain-casting" icon={["magic-swirl"]}>
<Pair single id="arc-druid-tempest_druid-spontaneous-domain-casting">Spontaneous Domain Casting</Pair>
<Pair hl title="Replaces">Spontaneous casting</Pair>
<Pair title="Ability">A tempest druid can channel stored spell energy into domain spells that he has not prepared ahead of time. He can "lose" a prepared spell to cast any domain spell of the same level or lower.</Pair>
</Ability>
<Ability id="arc-druid-tempest_druid-nature-bond-ex" icon={["broken-shield"]}>
<Pair single id="arc-druid-tempest_druid-nature-bond-ex" flavor="As a result of his beliefs, a tempest druid has little connection to the spirituality of animals or plants.">Nature Bond (Ex)</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">He can't choose an animal companion, and must instead select a domain or subdomain from the following list when he gains the <em>nature bond</em> ability: <Link to="/domain/air">Air</Link>, <Link to="/druiddomain/aquatic">Aquatic</Link>, <Link to="/domain/cloud">Cloud</Link>, <Link to="/domain/storms">Storms</Link>, <Link to="/druiddomain/swamp">Swamp</Link>, <Link to="/domain/weather">Weather</Link>, or <Link to="/domain/wind">Wind</Link>.</Pair>
</Ability>
<Ability id="arc-druid-tempest_druid-sodden-shore-sense-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-tempest_druid-sodden-shore-sense-ex">Sodden Shore Sense (Ex)</Pair>
<Pair hl title="Replaces">Nature sense</Pair>
<Pair title="Passive Ability">A tempest druid gains a +4 bonus on Knowledge (nature) and Survival checks in coastal or marshy lands.</Pair>
</Ability>
<Ability id="arc-druid-tempest_druid-electrical-resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-tempest_druid-electrical-resistance-ex">Electrical Resistance (Ex)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A tempest druid gains electricity resistance 5.</Pair>
<Pair title="Standard Action">He can transfer this resistance to another creature for 1 hour, after which time it reverts to him.</Pair>
</Ability>
<Ability id="arc-druid-tempest_druid-eyes-of-the-storm-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-tempest_druid-eyes-of-the-storm-ex">Eyes of the Storm (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A tempest druid can see through 10 feet of magical fog, mist, rain, wind, or similar inclement weather conditions, ignoring any concealment such conditions might grant.</Pair>
<Pair title="At 8th Level">His sight increases to 15 feet.</Pair>
<Pair title="At 12th Level">His sight increases to 20 feet.</Pair>
<Pair title="At 16th Level">His sight increases to 25 feet.</Pair>
<Pair title="At 20th Level">His sight increases to 30 feet.</Pair>
</Ability>
<Ability id="arc-druid-tempest_druid-bend-bolt-su" icon={["stairs-goal"]}>
<Pair single id="arc-druid-tempest_druid-bend-bolt-su" flavor="A tempest druid can redirect nearby electrical attacks.">Bend Bolt (Su)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Usage">Wis modifier times/day</Pair>
<Pair title="Immediate Action">The druid can shift the area or target of an electricity attack by 5 feet in any direction. If the electricity affects an area, the druid selects one square to be unaffected and an adjacent square to be affected. If the adjacent square is already in the area, this has no additional effect in that square. If the electricity affects a target, the druid selects an adjacent target. For example, if he were in the line of a wizard's lightning bolt, he could have the spell skip his square and instead affect an adjacent square, even if this meant the spell did not form a continuous line. If another druid attacked him with <Link to="/spell/call_lightning">call lightning</Link>, he could shift the called bolt to an adjacent square, affecting a creature in that square (if any).</Pair>
<Pair title="Special">He can't redirect electricity damage conducted to him by physical contact with an object or creature (such as a <Link to="/spell/shocking_grasp">shocking grasp</Link> or a <Link to="/magic-enh/shock">shock</Link> weapon).</Pair>
</Ability>
</>};
const _tempest_tamer = {title: "Tempest Tamer", jsx: <><h2 id="arc-druid-tempest_tamer-tempest-tamer">Tempest Tamer</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea pg. 25</Link><br/>Druids draw upon the fiercest powers of nature, and tsunamis, typhoons, and whirlpools are among the most powerful forces in the ocean. Tempest tamers are at one with the water and gain the ability to soothe these dangerous phenomena. Tempest tamers can be found in many of Golarion's oceans, but all avoid the spectacular Eye of Abendego - they are all keenly aware of the supernatural origin of that massive hurricane, and they know they cannot quell its fury without first acquiring extraordinary power.</p>
<Ability id="arc-druid-tempest_tamer-speech-of-the-sea" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-druid-tempest_tamer-speech-of-the-sea">Speech of the Sea</Pair>
<Pair hl title="Alters">Bonus languages</Pair>
<Pair title="Info">A tempest tamer's bonus language options include Aquan and Auran, in addition to the bonus languages available to the character from her race. However, the tempest tamer does not gain Sylvan as a bonus language option.</Pair>
</Ability>
<Ability id="arc-druid-tempest_tamer-whirlpool-walker-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-tempest_tamer-whirlpool-walker-ex" flavor="A tempest tamer can resist winds and the unnatural powers of sea creatures.">Whirlpool Walker (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">The tempest tamer gains a +4 bonus on saving throws against spells with the air or water descriptor and the spell-like and supernatural abilities of creatures with the air, aquatic, or water subtype. This bonus also applies to saving throws to avoid damage from a vortex, whirlpool, or similar effects, as well as to saving throws to prevent being pulled into or moved by such effects.</Pair>
</Ability>
<Ability id="arc-druid-tempest_tamer-tempest-wild-shape-su" icon={["magic-swirl"]}>
<Pair single id="arc-druid-tempest_tamer-tempest-wild-shape-su">Tempest Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">1 time/day + 1 per two druid levels beyond 4th<ByLevelPop levels={[[4,1],[6,2],[8,3],[10,4],[12,5],[14,6],[16,7],[18,8],[20,9]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A tempest tamer gains the ability to turn herself into a Small water elemental. This ability functions as per the <Link to="/spell/elemental_body_i">elemental body I</Link> spell except as noted here. The effect lasts for 1 hour per druid level or until she changes back. Changing form (to an elemental or back) is a <strong className="hl">standard action</strong> and doesn't provoke attacks of opportunity.</Pair>
<Pair title="At 6th Level">A tempest tamer can use <em>tempest wild shape</em> to change into a Small air elemental.</Pair>
<Pair title="At 8th Level">A tempest tamer can use <em>tempest wild shape</em> to change into a Medium air or water elemental, as per <Link to="/spell/elemental_body_ii">elemental body II</Link>.</Pair>
<Pair title="At 10th Level">A tempest tamer can use <em>tempest wild shape</em> to change into a Large air or water elemental, as per <Link to="/spell/elemental_body_iii">elemental body III</Link>.</Pair>
<Pair title="At 12th Level">A tempest tamer can use <em>tempest wild shape</em> to change into a Huge air or water elemental, as per <Link to="/spell/elemental_body_iv">elemental body IV</Link>.</Pair>
<Pair title="At 20th Level">She can use <em>tempest wild shape</em> at will.</Pair>
</Ability>
</>};
const _toxicologist = {title: "Toxicologist", jsx: <><h2 id="arc-druid-toxicologist-toxicologist">Toxicologist</h2>
<p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 23</Link><br/>Druids protect the natural environs of the world, and sometimes that requires forcibly expelling those who would pollute, despoil, or otherwise harm such areas. Single battles may not be enough to win the war, so some druids specialize in the stealthy application of insidious poisons to their targets. In the verdant depths of the Mwangi Expanse or the Valashmai Jungle of Tian Xia, many druids work to root out their enemies by means of powerful toxins, believing word of their foes' horrifying deaths will deter others from attempting similar desecrations of the natural world.</p>
<Ability id="arc-druid-toxicologist-expanded-repertoire-ex" icon={["broken-shield","spell-book"]}>
<Pair single id="arc-druid-toxicologist-expanded-repertoire-ex">Expanded Repertoire (Ex)</Pair>
<Pair hl title="Replaces">Spontaneous casting</Pair>
<Pair hl title="Alters">Spells</Pair>
<Pair title="Ability">A toxicologist can channel stored spell energy only into summoning spells she has prepared ahead of time.</Pair>
<Pair title="Info">A toxicologist adds the following extracts and spells to her druid spell list as druid spells of the listed spell level.</Pair>
<Pair plain title="1st"><Link to="/spell/poisoned_egg">Poisoned egg</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/transmute_potion_to_poison">Transmute potion to poison</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/stinking_cloud">Stinking cloud</Link></Pair>
<Pair plain title="4th"><Link to="/spell/toxic_gift">Toxic gift</Link></Pair>
<Pair plain title="5th"><Link to="/spell/cloudkill">Cloudkill</Link></Pair>
</Ability>
<Ability id="arc-druid-toxicologist-natural-poison-lore-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-toxicologist-natural-poison-lore-ex" flavor="A toxicologist has a deep understanding of and appreciation for poisons.">Natural Poison Lore (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy, woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">She cannot accidentally poison herself when applying poison to a weapon and cannot accidentally poison an animal companion or summoned creature when applying poison to its claws (though poison obviously should not be applied to a creature's bite).</Pair>
</Ability>
<Ability id="arc-druid-toxicologist-expert-poisoner-su" icon={["upgrade"]}>
<Pair single id="arc-druid-toxicologist-expert-poisoner-su">Expert Poisoner (Su)</Pair>
<Pair hl title="Replaces">Trackless step, resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A toxicologist increases the DCs of any spells she casts with the poison descriptor by 1.</Pair>
</Ability>
<Ability id="arc-druid-toxicologist-toxic-shaper-su" icon={["broken-shield"]}>
<Pair single id="arc-druid-toxicologist-toxic-shaper-su">Toxic Shaper (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A toxicologist never gains the ability to use <em>wild shape</em> to transform into an elemental or plant.</Pair>
<Pair title="At 8th Level">A toxicologist can transform into a Small or Medium vermin. When she takes this form, her <em>wild shape</em> functions as <Link to="/spell/vermin_shape_i">vermin shape I</Link>.</Pair>
<Pair title="At 10th Level">A toxicologist can transform into a tiny or large vermin. When she takes this form, her <em>wild shape</em> functions as <Link to="/spell/vermin_shape_ii">vermin shape II</Link>.</Pair>
</Ability>
</>};
const _treesinger = {title: "Treesinger", jsx: <><h2 id="arc-druid-treesinger-treesinger">Treesinger</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 25</Link><br/>Elves live far longer than other common races, and a single elf may see whole empires rise and fall. Given the impermanence of the cultures around them, it's small wonder that some elves turn to the timeless growth of nature for solace, finding allies among the great trees themselves, and even leading the forest's plants into combat. A treesinger has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-druid-treesinger--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/elf">Elf</Link> or <Link to="/race/vine_leshy">Vine Leshy</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-druid-treesinger-plant-bond-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-druid-treesinger-plant-bond-ex">Plant Bond (Ex)</Pair>
<Pair hl title="Replaces">Nature bond</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A treesinger forms a mystic bond with plant life. This bond can take one of two forms.</Pair>
</Ability>
<Ability id="arc-druid-treesinger-domain" extraClasses="subAbility numbered" icon={["spell-book","magic-swirl"]}>
<Pair single id="arc-druid-treesinger-domain">Domain</Pair>
<Pair title="Ability">This grants the treesinger one of the following domains: <Link to="/domain/plant">Plant</Link>, <Link to="/domain/growth">Growth</Link>, <Link to="/druiddomain/jungle">Jungle</Link>, <Link to="/druiddomain/swamp">Swamp</Link>. When determining the powers and bonus spells granted by this domain, the treesinger's effective cleric level is equal to her druid level. A treesinger who selects this option also receives additional domain spell slots, just like a cleric. She must prepare the spell from her domain in this slot, and this spell cannot be used to cast a spell spontaneously.</Pair>
</Ability>
<Ability id="arc-druid-treesinger-plant-companion" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="arc-druid-treesinger-plant-companion">Plant companion</Pair>
<Pair title="Ability">A treesinger can form a close bond with a plant companion. A treesinger may begin play with any of the plants listed below in <InnerLink toTop to="arc-druid-treesinger-plant-companions">Plant Companions</InnerLink>. This plant is a loyal companion that accompanies the treesinger on her adventures. Except for the companion being a creature of the plant type, drawn from the list of plant companions, this ability otherwise works like the standard druid's animal companion ability.</Pair>
</Ability>
<Ability id="arc-druid-treesinger-green-empathy-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-treesinger-green-empathy-ex">Green Empathy (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>A treesinger can improve the attitude of a plant creature. This ability functions just like a Diplomacy check made to improve the attitude of a person. The treesinger rolls 1d20 and adds her druid level and her Charisma modifier to determine the <em>green empathy</em> check result. The typical wild plant creature has a starting attitude of indifferent.</p>
<p>To use <em>green empathy,</em> the treesinger and the plant creature must be within 30 feet of one another under normal conditions. Generally, influencing a plant creature in this way takes 1 minute but, as with influencing people, it might take more or less time.</p>
<p>A treesinger can also use this ability to influence an animal, but she takes a -4 penalty on the check.</p>
</Pair>
</Ability>
<Ability id="arc-druid-treesinger-wild-shape-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-treesinger-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A treesinger gains the ability to <em>wild shape.</em> This ability functions at her actual druid level. A treesinger cannot use <em>wild shape</em> to adopt an animal or elemental form. Instead, she can assume the form of a Small or Medium plant. This functions as <Link to="/spell/plant_shape_i">plant shape I</Link>, except the treesinger does not yet gain access to the constrict or poison abilities of the plant form assumed.</Pair>
<Pair title="At 8th Level">The treesinger's <em>wild shape</em> gains the full range of abilities available from plant shape I.</Pair>
<Pair title="At 10th Level">A treesinger can assume the form of a Large or Tiny plant. Her <em>wild shape</em> ability now functions like <Link to="/spell/plant_shape_ii">plant shape II</Link>.</Pair>
<Pair title="At 12th Level">A treesinger can assume the form of a Huge plant. Her <em>wild shape</em> ability now functions like <Link to="/spell/plant_shape_iii">plant shape III</Link>.</Pair>
<Pair title="Special">This ability otherwise functions like the normal druid <em>wild shape</em> ability.</Pair>
</Ability>
<h3 id="arc-druid-treesinger-plant-companions" data-hash-target>Plant Companions</h3>
<p>Each plant companion has different starting sizes, speed, attacks, ability scores, and special qualities. All plant attacks are made using the creature's full base attack bonus unless otherwise noted. Plant attacks add the plant's Strength modifier on the damage roll, unless it has only one attack, in which case it adds 1-1/2 times its Strength modifier. Some plant companions have special abilities, such as <Link to="/umr/scent">scent</Link>. Plant companions cannot gain armor or weapon proficiency feats, even as they advance in hit dice, and cannot use manufactured weapons at all unless their description says otherwise.</p>
<p>As you gain levels, your plant companion grows in power as well. It gains the same bonuses that are gained by animal companions. Each plant companion gains an additional bonus, usually at 4th or 7th level, as listed with each plant choice. Instead of taking the listed benefit at 4th level, you can instead choose to increase the companion's Strength and Constitution by 2.</p>
<h4 id="arc-druid-treesinger-original-plant-companions">Original Plant Companions</h4>
<p>The treesinger was introduced with four plant companions. No information was given about them other than their stat blocks.</p>
<ul>
<li><Link to="/companion/carnivorous_flower">Carnivorous Flower</Link></li>
<li><Link to="/companion/crawling_vine">Crawling Vine</Link></li>
<li><Link to="/companion/puffball">Puffball (Floating Fungus)</Link></li>
<li><Link to="/companion/sapling_treant">Sapling Treant</Link></li>
</ul>
<h4 id="arc-druid-treesinger-later-plant-companions">Later Plant Companions</h4>
<p>Later books introduced other plant companions, specifically noting that they can be used by the treesinger and similar archetypes.</p>
<ul>
<li><Link to="/companion/corpse_eater_fungus">Corpse-Eater Fungus</Link> - This pale mass of fungal matter looks something like a spider with a thorny, acidic mouth in place of a body.</li>
<li><Link to="/companion/creeping_puffball">Creeping Puffball</Link> - This surprisingly mobile, multicolored ball of fungus crawls around on a nest of dozens of little filament-like "legs." Its poisonous spores cause those affected to endure bright, dazzling spots of color.</li>
<li><Link to="/companion/gulper_plant">Gulper Plant</Link> - This bulbous green plant can climb or crawl via a network of vines. Its central reservoir can gulp down foes to digest them in an internal well of acid, holding them tight while they struggle.</li>
<li><Link to="/companion/hunting_cactus">Hunting Cactus</Link> - Able to crawl swiftly on five root-like legs, the hunting cactus has long arms it can slam foes with - arms covered with hundreds of thin, sharp needles.</li>
<li><Link to="/companion/rash_creeper">Rash Creeper</Link> - This mass of creeping vines and leaves slithers almost like a snake. Contact with this predatory plant causes a sickening and sometimes debilitating rash.</li>
<li><Link to="/companion/slithering_sundew">Slithering Sundew</Link> - Looking something like a two-headed serpent, this slithering plant strikes with two sticky, constricting slams.</li>
<li><Link to="/companion/snapping_flytrap">Snapping Flytrap</Link> - This mobile flytrap features two spiky jaws and scuttles about on a tangle of roots.</li>
<li><Link to="/companion/sniper_cactus">Sniper Cactus</Link> - This single-stalked cactus sports dozens of long, thin needles. Capable of crawling on three stalk-like roots, the sniper cactus can fire its thorns with deadly accuracy.</li>
</ul>
</>};
const _troll_fury = {title: "Troll Fury", jsx: <><h2 id="arc-druid-troll_fury-troll-fury">Troll Fury</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 224</Link><br/>Troll furies combine a druid's love of natural balance with a single-minded devotion to the welfare of the <Link to="/family/troll">troll</Link> tribe. Trolls require a lot of prey to keep fed, and if their hunting grounds are upset by incursions of other monsters, civilized deforestation, or careless trolls who eat more than they need, a troll tribe can find itself without a sustainable food source.</p>
<p>Troll furies take the long view on sustainability, protecting the trolls' territory from gluttonous trolls and outsiders alike, and even hunting down tribal enemies when necessary. Holding themselves aloof from the rest of troll society, troll furies command great respect and can rally a region's trolls quickly to deal with threats to their existence and the health of their environment.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-druid-troll_fury--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/monster/troll">Troll</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-druid-troll_fury-inspire-fervor-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-troll_fury-inspire-fervor-ex">Inspire Fervor (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Standard Action">Once per day, a troll fury can chant over another troll within 30 feet, bolstering it against fear and improving its combat abilities. This works like the <Link to="/performance/inspire_courage">inspire courage</Link> bard ability, but affects only one troll and lasts 1 minute. The troll fury uses her druid level as her bard level to determine the effects of this ability.</Pair>
</Ability>
<Ability id="arc-druid-troll_fury-chosen-prey-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-troll_fury-chosen-prey-ex">Chosen Prey (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Choice">A troll fury can select one creature type from the ranger's <Link to="/ability/favored_enemy">favored enemy</Link> list and gains a favored enemy bonus against that creature type with an effective ranger level equal to her druid level. This ability never grants the troll fury favored enemy bonuses against a second favored enemy creature type.</Pair>
<Pair title="Ability">A troll fury can change her favored enemy type once per week by performing a ritual that takes 1 hour to perform.</Pair>
<Pair title="Special">If a troll fury already has a favored enemy from another class, the levels from the classes that grant favored enemies stack with this one to determine the favored enemy bonuses, and in this case she can gain other favored enemy creature types.</Pair>
</Ability>
<Ability id="arc-druid-troll_fury-troll-furys-mark-su" icon={["upgrade"]}>
<Pair single id="arc-druid-troll_fury-troll-furys-mark-su">Troll Fury's Mark (Su)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">Each time a troll fury or her animal companion damages a creature with a natural attack, the troll fury gains a +10 insight bonus on Survival checks to track that creature for 24 hours. The duration of this ability does not stack with itself. Each time the troll fury or her animal companion hits the target, this ability lasts for the next 24 hours.</Pair>
</Ability>
</>};
const _undine_adept = {title: "Undine Adept", jsx: <><h2 id="arc-druid-undine_adept-undine-adept">Undine Adept</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 176</Link><br/>An undine adept dedicates herself to preserving the knowledge of the first undines and ensuring her people's ancient connections to the natural world remain undisturbed. They serve as the keepers of the roots of the undine people and as their protectors. An undine adept has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-druid-undine_adept--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/undine">Undine</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-druid-undine_adept-domains" icon={["info"]}>
<Pair single id="arc-druid-undine_adept-domains">Domains</Pair>
<Pair title="Choice">An undine adept who chooses a domain must choose the <Link to="/domain/community">Community</Link> or <Link to="/domain/water">Water</Link> domain, or any subdomain of those domains.</Pair>
</Ability>
<Ability id="arc-druid-undine_adept-amphibious-su" icon={["stairs-goal"]}>
<Pair single id="arc-druid-undine_adept-amphibious-su">Amphibious (Su)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">The undine adept gains the <Link to="/subtype/aquatic">aquatic</Link> subtype and the <Link to="/umr/amphibious">amphibious</Link> universal monster ability, allowing her to breathe water or air.</Pair>
</Ability>
<Ability id="arc-druid-undine_adept-augment-summoning-su" icon={["upgrade"]}>
<Pair single id="arc-druid-undine_adept-augment-summoning-su">Augment Summoning (Su)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">Any creature with the water subtype the undine adept summons with either <Link to="/spell/summon_monster">summon monster</Link> or <Link to="/spell/summon_natures_ally">summon nature's ally</Link> gains the benefits of the <Link to="/feat/augment_summoning">Augment Summoning</Link> feat.</Pair>
</Ability>
<Ability id="arc-druid-undine_adept-resist-waters-call-su" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-undine_adept-resist-waters-call-su">Resist Water's Call (Su)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">An undine adept gains a +4 bonus on saving throws against the spell-like and supernatural abilities of outsiders with the aquatic or water subtype, fey with the aquatic or water subtype, and spells and effects with the water descriptor.</Pair>
</Ability>
<Ability id="arc-druid-undine_adept-wild-shape-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-druid-undine_adept-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">An undine adept gains the ability to use <em>wild shape.</em> When an undine takes the form of a creature with the aquatic or water subtype, this ability functions at her class level + 1. For all other forms, her effective druid level for the ability is equal to her actual undine adept level. This ability otherwise functions as <em>wild shape.</em></Pair>
</Ability>
<Ability id="arc-druid-undine_adept-commune-with-water-spirits" icon={["spell-book"]}>
<Pair single id="arc-druid-undine_adept-commune-with-water-spirits">Commune with Water Spirits</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">An undine adept adds <Link to="/spell/commune">commune</Link> to her druid spell list. She may use this spell whether she worships a deity or elemental forces.</Pair>
</Ability>
</>};
const _urban_druid = {title: "Urban Druid", jsx: <><h2 id="arc-druid-urban_druid-urban-druid">Urban Druid</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 101</Link><br/>While many druids keep to the wilderness, some make their way within settlements, communing with the animals and vermin who live there and speaking for the nature that runs rampant in civilization's very cradle.</p>
<Ability id="arc-druid-urban_druid-spontaneous-casting" icon={["stairs-goal"]}>
<Pair single id="arc-druid-urban_druid-spontaneous-casting">Spontaneous Casting</Pair>
<Pair hl title="Replaces">Spontaneous casting</Pair>
<Pair title="Ability">An urban druid can channel stored spell energy into domain spells that she has not prepared ahead of time. She can "lose" a prepared spell in order to cast any domain spell of the same level or lower.</Pair>
</Ability>
<Ability id="arc-druid-urban_druid-nature-bond-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-urban_druid-nature-bond-ex">Nature Bond (Ex)</Pair>
<Pair title="Choice">An urban druid may not select an animal companion. Instead, she must choose from the following domains, rather than those usually available to druids: <Link to="/domain/charm">Charm</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/rune">Rune</Link>, or <Link to="/domain/weather">Weather</Link>.</Pair>
</Ability>
<Ability id="arc-druid-urban_druid-lorekeeper-ex" icon={["skills","upgrade"]}>
<Pair single id="arc-druid-urban_druid-lorekeeper-ex">Lorekeeper (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride, trackless step</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An urban druid adds <Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), and <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT) skills to her list of class skills. She also receives a +2 bonus on these skill checks.</Pair>
</Ability>
<Ability id="arc-druid-urban_druid-resist-temptation-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-urban_druid-resist-temptation-ex">Resist Temptation (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">An urban druid gains a +2 bonus on saves vs. divinations and enchantments.</Pair>
</Ability>
<Ability id="arc-druid-urban_druid-a-thousand-faces-su" icon={["upgrade"]}>
<Pair single id="arc-druid-urban_druid-a-thousand-faces-su">A Thousand Faces (Su)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">An urban druid gains this ability now instead of at 13th level.</Pair>
</Ability>
<Ability id="arc-druid-urban_druid-wild-shape-su" icon={["broken-shield"]}>
<Pair single id="arc-druid-urban_druid-wild-shape-su">Wild Shape (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">An urban druid gains <em>wild shape,</em> except that her effective druid level for the ability is equal to her druid level - 4.</Pair>
</Ability>
<Ability id="arc-druid-urban_druid-mental-strength-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-urban_druid-mental-strength-ex">Mental Strength (Ex)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">An urban druid gains immunity to charm and compulsion effects.</Pair>
</Ability>
</>};
const _urushiol = {title: "Urushiol", jsx: <><h2 id="arc-druid-urushiol-urushiol">Urushiol</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 27</Link><br/>When an urushiol druid forms a bond with nature, it takes a vastly different form than for most druids. His body becomes increasingly toxic, allowing him to secrete a deadly poison through his pores.</p>
<Ability id="arc-druid-urushiol-toxic-secretions-su" icon={["stairs-goal"]}>
<Pair single id="arc-druid-urushiol-toxic-secretions-su">Toxic Secretions (Su)</Pair>
<Pair hl title="Replaces">Nature bond, resist nature's lure</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>An urushiol's body becomes capable of producing a single dose of poison per day. The urushiol is immune to his own poison and cannot accidentally poison himself when applying his own poison or attacking with a weapon coated with it. Regardless of the delivery method he chooses, his poison has the following base statistics.</p>
<div className="sideNoteWrap"><ScrollContainer id="arc-druid-urushiol--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th colSpan={4} scope="col" className="title">Urushiol Venom</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Poison</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the urushiol's level + his Wis modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 2 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d3 <Link to="/rule/str_damage">Str damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div></Pair>
<Pair title="At 1st Level">An urushiol can secrete this poison as a numbing injury poison on a natural weapon, unarmed strike, or manufactured weapon by spending 1 of his daily doses as a <strong className="hl">standard action</strong>. He must choose a natural weapon, unarmed strike, or manufactured weapon in his hand that deals piercing or slashing damage and that is not already poisoned or poisonous. The weapon remains poisoned until the urushiol scores a hit with it, the weapon leaves his possession for more than 1 round, or the poison is wiped away.</Pair>
<Pair title="At 3rd Level">The urushiol can produce 2 doses of poison per day.</Pair>
<Pair title="At 4th Level">An urushiol's body becomes so saturated with poison that even his flesh is poisonous. Whenever a creature damages the urushiol with a bite or <Link to="/umr/swallow_whole">swallow whole</Link> attack, the urushiol can release ingested poison into the creature by spending 1 of his daily doses as an <strong className="hl">immediate action</strong>.</Pair>
<Pair title="At 5th Level">The urushiol can produce 3 doses of poison per day.</Pair>
<Pair title="At 7th Level">The urushiol can produce 4 doses of poison per day. He can spend 2 daily doses of his poison as a <strong className="hl">standard action</strong> to secrete a contact poison and coat one of his limbs with the secreted poison. The urushiol can deliver the poison by making a successful touch attack as a <strong className="hl">standard action</strong>, which can be part of the same standard action he used to secrete the poison. If the attack misses, the poison persists upon his limb throughout the subsequent rounds until he hits a target or touches something else with his poisoned limb.</Pair>
<Pair title="At 9th Level">The urushiol can produce 5 doses of poison per day.</Pair>
<Pair title="At 11th Level">The urushiol can produce 6 doses of poison per day. He can spend 3 daily doses of his poison as a <strong className="hl">standard action</strong> to release a 20-foot-radius cloud of inhaled poison centered around him that lasts for 1 round.</Pair>
<Pair title="At 13th Level">The urushiol can produce 7 doses of poison per day.</Pair>
<Pair title="At 14th Level">An urushiol's venom changes in frequency to <strong>1/round for 4 rounds.</strong> In addition, when using his urushiol venom, an urushiol can spend an extra dose of his poison to change the damage type of the poison to <strong>Dexterity damage</strong> or <strong>Constitution damage.</strong> He can use this alteration in combination with any of the other abilities. For example, he could spend a total of 3 doses to create a cloud of inhaled poison that deals Constitution damage.</Pair>
<Pair title="At 15th Level">The urushiol can produce 8 doses of poison per day.</Pair>
<Pair title="At 17th Level">The urushiol can produce 9 doses of poison per day.</Pair>
<Pair title="At 19th Level">The urushiol can produce 10 doses of poison per day.</Pair>
<Pair title="Special">The urushiol's daily doses are replenished when he regains his spells, but any of his weapons that are still poisoned with urushiol venom count against his daily limit.</Pair>
</Ability>
<Ability id="arc-druid-urushiol-venom-immunity-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-urushiol-venom-immunity-ex">Venom Immunity (Ex)</Pair>
<Pair hl title="Alters">Venom immunity</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">An urushiol gains <em>venom immunity</em> now, instead of at 9th level.</Pair>
</Ability>
</>};
const _wild_whisperer = {title: "Wild Whisperer", jsx: <><h2 id="arc-druid-wild_whisperer-wild-whisperer">Wild Whisperer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 92</Link><br/>A wild whisperer is an expert at studying, predicting, and explaining animal behavior. She is less interested in plants, fey, and other aspects of the natural world, and uses her gifts to tame or relocate dangerous beasts and soothe the hurts of wounded and sickly creatures.</p>
<Ability id="arc-druid-wild_whisperer-inspiration-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-wild_whisperer-inspiration-ex">Inspiration (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride, trackless step, resist nature's lure</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A wild whisperer gains an inspiration pool as the <Link to="/class/investigator">investigator</Link> class ability. A wild whisperer uses her druid level as her investigator level when determining the effects of this ability. Instead of free uses of inspiration on Knowledge, Linguistics, or Spellcraft skill checks, the wild whisperer can use inspiration on Handle Animal, Heal, Knowledge (geography), Knowledge (nature), Ride, Sense Motive, and Survival skill checks without expending a use of inspiration, provided she's trained in the relevant skill. She can also use inspiration on any <em>wild empathy</em> check without expending a use of inspiration. A wild whisperer's inspiration pool refreshes each day when she prepares spells.</Pair>
</Ability>
<Ability id="arc-druid-wild_whisperer-wild-shape-ex" icon={["broken-shield"]}>
<Pair single id="arc-druid-wild_whisperer-wild-shape-ex">Wild Shape (Ex)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A wild whisperer gains the <em>wild shape</em> ability, but she never gains access to any forms beyond Small and Medium animal forms, as <Link to="/spell/beast_shape_i">beast shape I</Link>.</Pair>
</Ability>
<Ability id="arc-druid-wild_whisperer-natural-expertise-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-wild_whisperer-natural-expertise-ex">Natural Expertise (Ex)</Pair>
<Pair hl title="Replaces">The additional use of <em>wild shape</em> at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A wild whisperer's powers of observation give her an advantage when she's fighting natural creatures. When using inspiration on an attack roll against an animal or a vermin or on a saving throw against an effect from an animal or a vermin, a wild whisperer has to expend only one use of inspiration instead of two.</Pair>
</Ability>
<Ability id="arc-druid-wild_whisperer-investigator-talent" icon={["stairs-goal"]}>
<Pair single id="arc-druid-wild_whisperer-investigator-talent">Investigator Talent</Pair>
<Pair hl title="Replaces">The additional use of <em>wild shape</em> at 8th level</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Choice">Wild whisperer selects an <Link to="/ability/investigator_talents">investigator talent</Link>.</Pair>
<Pair title="Special">The following investigator talents complement the wild whisperer archetype: <Link to="/invtalent/amazing_inspiration">amazing inspiration</Link>, <Link to="/invtalent/effortless_aid">effortless aid</Link>, <Link to="/invtalent/eidetic_recollection">eidetic recollection</Link>, <Link to="/invtalent/empathy">empathy</Link>, <Link to="/invtalent/inspirational_expertise">inspirational expertise</Link>, <Link to="/invtalent/inspired_alertness">inspired alertness</Link>, <Link to="/invtalent/inspired_intimidator">inspired intimidator</Link>, <Link to="/invtalent/perceptive_tracking">perceptive tracking</Link>, and <Link to="/invtalent/tenacious_inspiration">tenacious inspiration</Link>.</Pair>
</Ability>
</>};
const _wolf_shaman = {title: "Wolf Shaman", jsx: <><h2 id="arc-druid-wolf_shaman-wolf-shaman">Wolf Shaman</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 103</Link><br/>A shaman with this totem calls upon the clever wolf, capable of roaming alone yet wise enough to run with a pack when facing dangers too great for one alone.</p>
<Ability id="arc-druid-wolf_shaman-nature-bond" icon={["info"]}>
<Pair single id="arc-druid-wolf_shaman-nature-bond">Nature Bond</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">A wolf shaman who chooses an animal companion must select a <Link to="/companion/wolf">wolf</Link>. If choosing a domain, the wolf shaman must choose from the <Link to="/domain/animal">Animal</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/liberation">Liberation</Link>, and <Link to="/domain/travel">Travel</Link> domains.</Pair>
</Ability>
<Ability id="arc-druid-wolf_shaman-wild-empathy-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-wolf_shaman-wild-empathy-ex">Wild Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Ability">A wolf shaman can use <em>wild empathy</em> with canines as a <strong className="hl">full-round action</strong> with a +4 bonus.</Pair>
</Ability>
<Ability id="arc-druid-wolf_shaman-totem-transformation-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-druid-wolf_shaman-totem-transformation-su">Totem Transformation (Su)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 minute/day per druid level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action"><p>A wolf shaman may adopt an aspect of the wolf while retaining her normal form. The druid may select from the following bonuses:</p>
<ul>
<li><strong>Movement</strong> (+20 enhancement bonus to land speed)</li>
<li><strong>Senses</strong> (low-light vision, <Link to="/umr/scent">scent</Link>, +4 racial bonus to Survival when tracking by scent)</li>
<li><strong><Link to="/umr/natural_weapons">Natural weapons</Link></strong> (bite [1d4 plus trip] for a Medium druid, +2 CMB to trip)</li>
</ul>
<p>While using <em>totem transformation,</em> the wolf shaman may speak normally and can cast <Link to="/spell/speak_with_animals">speak with animals</Link> (canines only) at will.</p>
</Pair>
<Pair title="At 7th Level">This becomes a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 12th Level">This becomes a <strong className="hl">swift action</strong>.</Pair>
<Pair title="Special">This is a polymorph effect and cannot be used while the druid is using another polymorph effect, such as <em>wild shape.</em></Pair>
</Ability>
<Ability id="arc-druid-wolf_shaman-totemic-summons-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-druid-wolf_shaman-totemic-summons-su">Totemic Summons (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">A wolf shaman may cast <Link to="/spell/summon_natures_ally">summon nature's ally</Link> to summon canines, and these summoned creatures gain <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to her druid level. She can apply the <Link to="/template/young">young</Link> template to any canine to reduce the level of the summoning spell required by one. She can also increase the level of summoning required by one in order to apply either the <Link to="/template/advanced">advanced</Link> or the <Link to="/template/giant">giant</Link> template, or increase it by two to apply both the advanced and giant templates.</Pair>
</Ability>
<Ability id="arc-druid-wolf_shaman-wild-shape-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-wolf_shaman-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A wolf shaman gains <em>wild shape,</em> but the ability functions at her druid level - 2. If she takes on the form of a canine, she instead uses her druid level + 2.</Pair>
</Ability>
<Ability id="arc-druid-wolf_shaman-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-druid-wolf_shaman-bonus-feat">Bonus Feat</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A wolf shaman gains one of the following bonus feats: <Link to="/feat/greater_trip">Greater Trip</Link>, <Link to="/feat/improved_trip">Improved Trip</Link>, <Link to="/feat/mobility">Mobility</Link>, <Link to="/feat/skill_focus">Skill Focus</Link> (Stealth), or <Link to="/feat/spring_attack">Spring Attack</Link>.</Pair>
<Pair title="At 13th Level">The druid gains another feat from the list above.</Pair>
<Pair title="At 17th Level">The druid gains a third bonus feat from the list above.</Pair>
<Pair title="Special">She must meet the prerequisites for these bonus feats.</Pair>
</Ability>
</>};
const _world_walker = {title: "World Walker", jsx: <><h2 id="arc-druid-world_walker-world-walker">World Walker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 43</Link><br/>While all druids traverse the wilderness with ease, the world walkers take it upon themselves to travel the entire world. Some act as messengers and scouts for druidic circles, while others have a seemingly unquenchable wanderlust; each new land provides new mysteries to discover and new wisdom to be gained from mastering those mysteries.</p>
<Ability id="arc-druid-world_walker-favored-terrain-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-world_walker-favored-terrain-ex">Favored Terrain (Ex)</Pair>
<Pair hl title="Replaces">Trackless step, resist nature's lure</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The world walker gains the ranger's <Link to="/ability/favored_terrain">favored terrain</Link> ability. She treats her druid level as her ranger level for this ability. If she has levels in both classes, both class's levels stack for determining the effect of this ability.</Pair>
</Ability>
<Ability id="arc-druid-world_walker-path-of-trees-su" icon={["magic-swirl"]}>
<Pair single id="arc-druid-world_walker-path-of-trees-su">Path of Trees (Su)</Pair>
<Pair hl title="Replaces">Venom immunity, timeless body</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">Once a day, a wanderer can step within a tree and then teleport from that tree to another one in a manner similar to the <Link to="/spell/tree_stride">tree stride</Link> spell.</Pair>
<Pair title="At 12th Level">She can do this twice a day.</Pair>
<Pair title="At 13th Level">She can use this ability to teleport to any other tree of its type up to 100 miles away.</Pair>
<Pair title="At 15th Level">She can do this three times a day.</Pair>
</Ability>
</>};
export default {naga_aspirant:_naga_aspirant,nature_fang:_nature_fang,nature_priest:_nature_priest,nithveil_adept:_nithveil_adept,pack_lord:_pack_lord,plains_druid:_plains_druid,planar_extremist:_planar_extremist,progenitor:_progenitor,reincarnated_druid:_reincarnated_druid,restorer:_restorer,river_druid:_river_druid,road_keeper:_road_keeper,rot_warden:_rot_warden,saurian_shaman:_saurian_shaman,season_keeper:_season_keeper,season_sage:_season_sage,serpent_shaman:_serpent_shaman,shark_shaman:_shark_shaman,skinshaper:_skinshaper,sky_druid:_sky_druid,storm_druid:_storm_druid,sunrider:_sunrider,supernaturalist:_supernaturalist,survivor:_survivor,swamp_druid:_swamp_druid,swarm_monger:_swarm_monger,tempest_druid:_tempest_druid,tempest_tamer:_tempest_tamer,toxicologist:_toxicologist,treesinger:_treesinger,troll_fury:_troll_fury,undine_adept:_undine_adept,urban_druid:_urban_druid,urushiol:_urushiol,wild_whisperer:_wild_whisperer,wolf_shaman:_wolf_shaman,world_walker:_world_walker}