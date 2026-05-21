import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _beast_rider = {title: "Beast Rider", jsx: <><h2 id="arc-cavalier-beast_rider-beast-rider">Beast Rider</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 36</Link><br/>The cavalier is defined not only by his dedication to his order or his skill on the battlefield, but also by the special relationship he maintains with his mount. Where some cavaliers are simply skilled with horses or well-trained knights, the beast rider spends his life in constant pursuit of the most perfect mount, forming bonds with greater, more powerful, and more exotic creatures.</p>
<Ability id="arc-cavalier-beast_rider-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-cavalier-beast_rider-armor-proficiency">Armor Proficiency</Pair>
<Pair title="Info">A beast rider is proficient with light and medium armor, and with shields (with the exception of tower shields).</Pair>
</Ability>
<Ability id="arc-cavalier-beast_rider-exotic-mount-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-beast_rider-exotic-mount-ex">Exotic Mount (Ex)</Pair>
<Pair hl title="Replaces">Mount, expert trainer</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>A beast rider forms a bond with a strong, loyal companion that permits him to ride it as a mount. This mount functions as a druid's <Link to="/sidekick/animal_companion">animal companion</Link>, using the beast rider's level as his effective druid level. The animal chosen as a mount must be large enough to carry the beast rider (Medium or Large for a Small character; Large or Huge for a Medium character).</p>
<p>The beast rider does not take an armor check penalty on <Link to="/skill/ride">Ride</Link> checks while riding his mount. The mount is always considered combat trained, and begins play with <Link to="/feat/endurance">Endurance</Link> as a bonus feat. A beast rider's mount does not gain the <em>share spells</em> special ability.</p>
<p>Each time the beast rider increases in level, he can choose to select a new, more impressive mount better suited to his increased power.</p>
<p>Anytime a feat or ability allows a mount to make a hoof attack, it can make a claw, slam, or other analogous attack instead.</p>
</Pair>
</Ability>
<Ability id="arc-cavalier-beast_rider-small-size" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-beast_rider-small-size">Small Size</Pair>
<Pair title="At 1st Level">Small-sized beast riders can choose a <Link to="/companion/pony">pony</Link> or <Link to="/companion/wolf">wolf</Link> mount.</Pair>
<Pair title="At 4th Level">A Small beast rider can also choose an <Link to="/companion/allosaurus">allosaurus</Link>, <Link to="/companion/ankylosaurus">ankylosaurus</Link>, <Link to="/companion/arsinoitherium">arsinoitherium</Link>, <Link to="/companion/aurochs">aurochs</Link>, <Link to="/companion/bison">bison</Link>, <Link to="/companion/boar">boar</Link>, <Link to="/companion/brachiosaurus">brachiosaurus</Link>, <Link to="/companion/elephant">elephant</Link>, <Link to="/companion/glyptodon">glyptodon</Link>, <Link to="/companion/hippopotamus">hippopotamus</Link>, <Link to="/companion/mastodon">mastodon</Link>, <Link to="/companion/megaloceros">megaloceros</Link>, <Link to="/companion/dog">riding dog</Link>, <Link to="/companion/giant_snapping_turtle">giant snapping turtle</Link>, <Link to="/companion/triceratops">triceratops</Link>, or <Link to="/companion/tyrannosaurus">tyrannosaurus</Link>.</Pair>
<Pair title="At 7th Level">He can also choose a dinosaur (<Link to="/companion/deinonychus">deinonychus</Link> or <Link to="/companion/velociraptor">velociraptor</Link>).</Pair>
</Ability>
<Ability id="arc-cavalier-beast_rider-medium-size" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-beast_rider-medium-size">Medium Size</Pair>
<Pair title="At 1st Level">Medium beast riders can choose a <Link to="/companion/camel">camel</Link> or <Link to="/companion/horse">horse</Link>.</Pair>
<Pair title="At 4th Level">A Medium beast rider can also choose an allosaurus, ankylosaurus, arsinoitherium, aurochs, bison, brachiosaurus, elephant, glyptodon, hippopotamus, <Link to="/companion/lion">lion</Link>, mastodon, megaloceros, giant snapping turtle, <Link to="/companion/tiger">tiger</Link>, triceratops, or tyrannosaurus as his mount. Additional mounts might be available with GM approval.</Pair>
<Pair title="At 7th Level">A Medium beast rider can select any creature whose natural size is Large or Huge, provided that creature is normally available as a Medium-sized animal companion at 7th level (like a <Link to="/companion/bear">bear</Link>). To generate statistics for such a mount, apply the following modifications: <strong>Size</strong> Large; <strong>Ability Scores</strong> Str +2, Dex -2, Con +2. Increase the damage of each of the mount's natural attacks <Link to="/misc/by_one_die">by one die size</Link>.</Pair>
<Pair title="Special">A beast rider cannot choose a mount that is not capable of bearing his weight, that has fewer than four legs, or that has a fly speed (although the GM may allow mounts with a swim speed in certain environments).</Pair>
</Ability>
</>};
const _castellan = {title: "Castellan", jsx: <><h2 id="arc-cavalier-castellan-castellan">Castellan</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 9</Link><br/>A castellan is a cavalier who dedicates himself to the defense of a castle or walled city. Though not as celebrated as the cavaliers who ride forth to take on distant foes, the castellan is no less brave or important, for the castellan and his allies are the last line of defense for those who depend on the fortification for protection.</p>
<Ability id="arc-cavalier-castellan-castle-defender" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-cavalier-castellan-castle-defender">Castle Defender</Pair>
<Pair hl title="Replaces">Mount</Pair>
<Pair title="At 1st Level">A castellan gains a +1 bonus to Armor Class and an additional +1 bonus on attack rolls when he is on <Link to="/rule/higher_ground">higher ground</Link>. He also gains an additional +1 bonus to Armor Class and on Reflex saves when he has <Link to="/rule/cover">cover</Link> other than soft cover from other creatures.</Pair>
<Pair title="At 6th Level">A castellan gains <Link to="/ability/evasion">evasion</Link> (as a rogue) when he has cover (but not soft cover) against the source of the attack.</Pair>
<Pair title="At 11th Level">These bonuses increase by 1.</Pair>
<Pair title="At 16th Level">He gains <Link to="/talent/improved_evasion">improved evasion</Link> instead of evasion.</Pair>
<Pair title="Special">Both the evasion and improved evasion abilities work even when the castellan wears medium or heavy armor.</Pair>
</Ability>
<Ability id="arc-cavalier-castellan-castle-lore" icon={["upgrade"]}>
<Pair single id="arc-cavalier-castellan-castle-lore">Castle Lore</Pair>
<Pair hl title="Replaces">Cavalier's charge</Pair>
<Pair title="At 3rd Level">The castellan gains a +2 bonus on initiative checks and Knowledge (engineering), Knowledge (local), Knowledge (nobility), Perception, and Stealth checks when he is in urban terrain, including fortifications. A castellan in an urban environment can always act in a surprise round, though he remains <Link to="/rule/flat_footed">flat-footed</Link> until he acts.</Pair>
<Pair title="At 8th Level">The bonuses increase to +4.</Pair>
<Pair title="At 13th Level">The bonuses increase to +6.</Pair>
<Pair title="At 18th Level">The bonuses increase to +8.</Pair>
</Ability>
<Ability id="arc-cavalier-castellan-guard-companion" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-castellan-guard-companion">Guard Companion</Pair>
<Pair hl title="Replaces">Expert trainer</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">The castellan forms a bond with an <Link to="/sidekick/animal_companion">animal companion</Link> that serves as a guard. While most castellans select birds or canines, the castellan can choose any animal companions available to <Link to="/class/ranger">rangers</Link>. This ability functions like the <Link to="/class/druid">druid</Link> <em>nature bond</em> ability, except that the castellan's effective druid level is equal to his cavalier level - 3 and his animal companion doesn't gain the <em>share spells</em> special ability.</Pair>
</Ability>
<Ability id="arc-cavalier-castellan-ranger-animal-companions" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-castellan-ranger-animal-companions">Ranger Animal Companions</Pair>
<Pair title="Choice"><div className="columnar">
<ul>
<li><Link to="/companion/antelope">Antelope</Link></li>
<li><Link to="/companion/armorfish">Armorfish</Link></li>
<li><Link to="/companion/baboon">Baboon</Link></li>
<li><Link to="/companion/badger">Badger</Link></li>
<li><Link to="/companion/bird">Bird (Eagle, Hawk, or Owl)</Link></li>
<li><Link to="/companion/bustard">Bustard</Link></li>
<li><Link to="/companion/camel">Camel</Link></li>
<li><Link to="/companion/capybara">Capybara</Link></li>
<li><Link to="/companion/cheetah">Cheetah</Link></li>
<li><Link to="/companion/constrictor_snake">Constrictor Snake</Link></li>
<li><Link to="/companion/dire_rat">Dire Rat</Link></li>
<li><Link to="/companion/dog">Dog</Link></li>
<li><Link to="/companion/elk">Elk</Link></li>
<li><Link to="/companion/falcon">Falcon</Link></li>
<li><Link to="/companion/giant_gecko">Giant Gecko</Link></li>
<li><Link to="/companion/hobbe_hound">Hobbe Hound</Link></li>
<li><Link to="/companion/horse">Horse</Link></li>
<li><Link to="/companion/kangaroo">Kangaroo</Link></li>
<li><Link to="/companion/leopard">Leopard</Link></li>
<li><Link to="/companion/marsupial_devil">Marsupial Devil</Link></li>
<li><Link to="/companion/pony">Pony</Link></li>
<li><Link to="/companion/ram">Ram</Link></li>
<li><Link to="/companion/reef_snake">Reef Snake</Link></li>
<li><Link to="/companion/reindeer">Reindeer</Link></li>
<li><Link to="/companion/shark">Shark</Link></li>
<li><Link to="/companion/spitting_cobra">Spitting Cobra</Link></li>
<li><Link to="/companion/stag">Stag</Link></li>
<li><Link to="/companion/stingray">Stingray</Link></li>
<li><Link to="/companion/trumpeter_swan">Swan, Trumpeter</Link></li>
<li><Link to="/companion/thylacine">Thylacine</Link></li>
<li><Link to="/companion/viper">Viper</Link></li>
<li><Link to="/companion/wolf">Wolf</Link></li>
<li><Link to="/companion/wolfdog">Wolfdog</Link></li>
<li><Link to="/companion/yak">Yak</Link></li>
<li><Link to="/companion/zebra">Zebra</Link></li>
</ul>
</div>
<p>If the campaign takes place wholly or partly in an aquatic environment, you may choose from this list instead: <Link to="/companion/armorfish">Armorfish</Link>, <Link to="/companion/reef_snake">Reef Snake</Link>, <Link to="/companion/shark">Shark</Link>, <Link to="/companion/stingray">Stingray</Link>.</p>
</Pair>
</Ability>
<Ability id="arc-cavalier-castellan-mighty-defense" icon={["upgrade","mailed-fist"]}>
<Pair single id="arc-cavalier-castellan-mighty-defense">Mighty Defense</Pair>
<Pair hl title="Replaces">Mighty charge</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">When the castellan <Link to="/rule/readies_an_action">readies an action</Link> to make a melee attack against a creature that is not yet adjacent to him, he doubles the threat range of any melee weapons wielded during the attack. This increase doesn't stack with other effects that increase the threat range of his weapons. In addition, the cavalier can attempt a free <Link to="/rule/dirty_trick">dirty trick</Link>, <Link to="/rule/disarm">disarm</Link>, <Link to="/rule/sunder">sunder</Link>, or <Link to="/rule/trip">trip</Link> combat maneuver if his readied attack is successful. This free combat maneuver doesn't provoke an attack of opportunity.</Pair>
</Ability>
<Ability id="arc-cavalier-castellan-defending-challenge" icon={["armor-upgrade"]}>
<Pair single id="arc-cavalier-castellan-defending-challenge">Defending Challenge</Pair>
<Pair hl title="Replaces">Demanding challenge</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">The castellan takes no penalty to Armor Class when using his challenge ability.</Pair>
</Ability>
<Ability id="arc-cavalier-castellan-supreme-defense" icon={["upgrade","mailed-fist"]}>
<Pair single id="arc-cavalier-castellan-supreme-defense">Supreme Defense</Pair>
<Pair hl title="Replaces">Supreme charge</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">Whenever the castellan readies an action to make a melee attack against a creature that is not yet adjacent to him, his readied attack deals double the normal amount of damage (or triple the damage if using a <Link to="/misc/brace">brace</Link> weapon against a charge). In addition, if the cavalier confirms a critical hit on the readied attack, the target is <Link to="/misc/stunned">stunned</Link> for 1d4 rounds. A successful Will save (DC = 10 + the cavalier's class level + the cavalier's Strength modifier) reduces this to being <Link to="/misc/staggered">staggered</Link> for 1d4 rounds.</Pair>
</Ability>
</>};
const _charger = {title: "Charger", jsx: <><h2 id="arc-cavalier-charger-charger">Charger</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_monster_codex">Inner Sea Monster Codex pg. 5</Link><br/>No warrior better epitomizes the centaur's devastating martial power than the charger. Born to the swiftest and most powerful of their kind, these natural cavaliers can achieve unparalleled feats of equestrian combat. Chargers rush headlong into the heart of any conflict to swiftly close on and smash into their enemies, channeling their power into their lances.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-cavalier-charger--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/monster/centaur">Centaur</Link> (or any tauric creature at the GM's discretion).</td></tr></tbody></table></ScrollContainer></div><Ability icon={["skills"]} id="arc-cavalier-charger-undefined">
<Pair id="arc-cavalier-charger-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Climb, Handle Animal, Ride</Pair></Ability>
<Ability id="arc-cavalier-charger-weapon-and-armor-proficiency" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-cavalier-charger-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiencies</Pair>
<Pair title="Info">A charger is proficient with all simple and martial weapons, with light and medium armor, and with shields (except tower shields).</Pair>
<Pair title="Special">A charger's cavalier levels stack with any fighter levels he possesses for the purpose of meeting the level prerequisite for feats that can specify a <Link to="/eq-weapon/lance">lance</Link>, such as <Link to="/feat/weapon_specialization">Weapon Specialization</Link>.</Pair>
</Ability>
<Ability id="arc-cavalier-charger-natural-mount-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-charger-natural-mount-ex">Natural Mount (Ex)</Pair>
<Pair hl title="Replaces">Mount</Pair>
<Pair title="Ability">A charger counts as having the <Link to="/feat/mounted_combat">Mounted Combat</Link> feat only for the purpose of meeting feat prerequisites, and substitutes the Acrobatics skill for any Ride skill prerequisites when acquiring feats that have Mounted Combat as a prerequisite. Because of his equine form, a charger can wield a lance one-handed as if mounted and deals double damage with a lance while charging. A charger can never gain the benefit of the Mounted Combat feat (or other similar feats or effects, such as <Link to="/feat/trick_riding">Trick Riding</Link>) if ridden by another creature.</Pair>
</Ability>
<Ability id="arc-cavalier-charger-thundering-hooves-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-charger-thundering-hooves-ex">Thundering Hooves (Ex)</Pair>
<Pair hl title="Replaces">Cavalier's charge</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A charger's hoof attack deals an additional 1d6 points of damage and its critical threat range increases to 19-20. This effect doesn't stack with any other effect that expands the critical threat range of a weapon.</Pair>
<Pair title="Ability">Whenever he performs a <Link to="/rule/charge">charge</Link>, the charger can make an additional hoof attack against his target with a -5 penalty on his attack roll.</Pair>
</Ability>
<Ability id="arc-cavalier-charger-courser-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-charger-courser-ex">Courser (Ex)</Pair>
<Pair hl title="Replaces">Expert trainer</Pair>
<Pair title="Passive Ability">A charger's constant training increases his land speed by 10 feet. A charger can also move through up to 10 feet of <Link to="/rule/difficult_terrain">difficult terrain</Link> each round as if it were normal terrain.</Pair>
<Pair title="Special">These benefits apply only when he is wearing no armor, light armor, or medium armor, and not carrying a heavy load. Apply this bonus before modifying the charger's speed because of any load carried or armor worn. These bonuses stack with any other bonuses to the charger's land speed or ability to ignore difficult terrain.</Pair>
</Ability>
<Ability id="arc-cavalier-charger-ride-down-ex" icon={["mailed-fist"]}>
<Pair single id="arc-cavalier-charger-ride-down-ex">Ride Down (Ex)</Pair>
<Pair hl title="Replaces">Mighty charge</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Free Action">A charger can attempt to <Link to="/rule/overrun">overrun</Link> any number of targets in the path of his charge. For each successful overrun combat maneuver check, the charger automatically deals an amount of damage to the overrun target equal to that of his hoof attack and can continue with his charge. If any overrun attempt fails during the charge, the charger's progress ends in the space directly in front of the target where the maneuver failed.</Pair>
<Pair title="Special">These overrun attempts do not provoke attacks of opportunity. For each target in the path of his charge, the charger incurs a cumulative -2 penalty on his overrun combat maneuver checks.</Pair>
</Ability>
</>};
const _circuit_judge = {title: "Circuit Judge", jsx: <><h2 id="arc-cavalier-circuit_judge-circuit-judge">Circuit Judge</h2>
<p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 32</Link><br/>A circuit judge claims a specific region, becoming an expert in the local laws and, perhaps, becoming a fearsome executioner.</p>
<Ability id="arc-cavalier-circuit_judge-circuit-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-circuit_judge-circuit-ex">Circuit (Ex)</Pair>
<Pair hl title="Replaces">Tactician, greater tactician, master tactician</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A circuit judge chooses a single community. While in that community or within 25 miles of it, she adds <Link to="/misc/half">half</Link> her cavalier level (minimum 1) on Intimidate, Knowledge (local), and Sense Motive skill checks (as well as any other law-related skill checks, at the GM's discretion).</Pair>
<Pair title="Passive Ability">Whenever she advances in level, the range within which she gains this bonus expands by another 25 miles-50 miles at 2nd level, 75 miles at 3rd level, and so forth. This bonus on Intimidate checks increases by 2 when she enters a community within this area that she hasn't visited for 1 week or more.</Pair>
<Pair title="At 9th Level">The circuit judge can select another community within the range in which she gains this ability's bonus. She can measure from that community (as well as previous communities) to determine whether she gains this ability's bonus on the relevant skill checks.</Pair>
<Pair title="At 17th Level">The circuit judge can select a third community within the range, following the above restrictions and gaining the above's benefits.</Pair>
</Ability>
<Ability id="arc-cavalier-circuit_judge-sentence-ex" icon={["stairs-goal","upgrade","broken-shield"]}>
<Pair single id="arc-cavalier-circuit_judge-sentence-ex">Sentence (Ex)</Pair>
<Pair hl title="Replaces">Challenge</Pair>
<Pair title="Usage">Twice per day at 1st level, plus two additional times per day for every 3 cavalier levels beyond 1st, to a maximum of 14 times per day at 19th level.</Pair>
<Pair title="Swift Action"><p>The circuit judge can choose one target within sight to <em>sentence.</em><sup><InnerLink showBacklink="backlink-arc-cavalier-circuit_judge-fake-fn-1" id="arc-cavalier-circuit_judge-fake-fn-1" data-hash-target to="arc-cavalier-circuit_judge-fake-fn-1-target">1</InnerLink></sup> The circuit judge gains the potential for a variety of bonuses related to that target. The circuit judge chooses the form of these benefits from the following list of inquisitor <Link to="/ability/judgments">judgments</Link>: destruction, justice, protection, purity, or smiting.</p>
<p>The benefits of these judgments apply only to the circuit judge and the target - the protection judgment's bonus to Armor Class, for example, applies only to attacks made by the <em>sentenced</em> target (not any creature who attacks the circuit judge while the judgment is active). Treat the circuit judge's level as her inquisitor level for the purposes of determining how these judgments increase in power. She can switch her <em>sentence</em> as a <strong className="hl">swift action</strong>, but doing so expends an additional daily use of this ability.</p>
<p><em>Sentencing</em> a foe requires much of the circuit judge's concentration. The circuit judge takes a -2 penalty to her Armor Class, except against attacks made by the target of her <em>sentence.</em></p>
<p>The <em>sentence</em> remains in effect either until the target is dead or unconscious or until the combat ends. <em>Sentences</em> are considered <em>challenges</em> for the purposes of the effects listed in the challenge section describing the cavalier's <Link to="/ability/orders">order</Link>.</p>
</Pair>
</Ability>
<Ability id="arc-cavalier-circuit_judge-double-jeopardy-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-circuit_judge-double-jeopardy-ex">Double Jeopardy (Ex)</Pair>
<Pair hl title="Replaces">Demanding challenge</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">Whenever a circuit judge <em>sentences</em> a foe, she can gain the benefits of two inquisitor judgments against the foe instead of one. Using this ability does not expend a daily use of <em>sentence.</em></Pair>
</Ability>
<section data-footnotes><h3 id="arc-cavalier-circuit_judge-label">Footnotes</h3><ol>
<li id="arc-cavalier-circuit_judge-fake-fn-1-target"><p>The original text starts this ability with "Once per day as a swift action..." but later contradicts itself by saying "The circuit judge can use this ability twice per day at 1st level, plus..." This app takes the position that the second line overrides the first line. As always, consult your GM. <InnerLink aria-label="Back to reference 1" id="backlink-arc-cavalier-circuit_judge-fake-fn-1" data-hash-target to="arc-cavalier-circuit_judge-fake-fn-1">↩</InnerLink></p></li>
</ol></section></>};
const _constable = {title: "Constable", jsx: <><h2 id="arc-cavalier-constable-constable">Constable</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets pg. 17</Link><br/>Constables keep order in the narrow streets and dark alleys of settlements.</p>
<Ability icon={["skills"]} id="arc-cavalier-constable-undefined">
<Pair id="arc-cavalier-constable-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/perception">Perception</Link> (WIS)</Pair></Ability>
<Ability id="arc-cavalier-constable-apprehend-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-cavalier-constable-apprehend-ex">Apprehend (Ex)</Pair>
<Pair hl title="Replaces">Mount</Pair>
<Pair title="At 1st Level">A constable gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat and can attempt a <Link to="/rule/grapple">grapple</Link> combat maneuver check in place of the attack at the end of a <Link to="/rule/charge">charge</Link>.</Pair>
<Pair title="At 2nd Level">The constable receives a +1 bonus on Perception checks and combat maneuver checks to <Link to="/rule/disarm">disarm</Link>, grapple, or <Link to="/rule/trip">trip</Link> opponents.</Pair>
<Pair title="At 4th Level">The constable does not treat <Link to="/rule/crowds">crowds</Link> as difficult terrain.</Pair>
<Pair title="At 7th Level">The bonus becomes +2.</Pair>
<Pair title="At 12th Level">The bonus increases to +3.</Pair>
<Pair title="At 17th Level">The bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-cavalier-constable-squad-commander-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-constable-squad-commander-ex">Squad Commander (Ex)</Pair>
<Pair hl title="Replaces">Cavalier's charge</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A constable can spend 1 minute laying out a plan to activate the <em>tactician</em> ability without having it count against his number of uses per day.</Pair>
<Pair title="Special">The ability must be triggered within 1 hour of the plan being made, and the benefits last for 1 minute per cavalier level he has. The constable can have only one plan at a time, and if a new plan is made, any old plan is lost.</Pair>
</Ability>
<Ability id="arc-cavalier-constable-quick-interrogator-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-constable-quick-interrogator-ex">Quick Interrogator (Ex)</Pair>
<Pair hl title="Replaces">Expert trainer</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A constable can attempt a Diplomacy check to gather information in 1d6 &times; 5 minutes and attempt a <Link to="/skill/diplomacy">Diplomacy</Link> or <Link to="/skill/intimidate">Intimidate</Link> check to change someone's attitude in 5 rounds.</Pair>
</Ability>
<Ability id="arc-cavalier-constable-badge-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-cavalier-constable-badge-ex">Badge (Ex)</Pair>
<Pair hl title="Replaces">Banner</Pair>
<Pair title="At 5th Level">A constable's badge becomes a powerful symbol of rules and authority. As long as he wears his badge, allies within 30 feet who can see him gain a +2 morale bonus on saving throws against charm, compulsion, and fear effects and a +1 morale bonus on attack rolls against targets the constable has challenged.</Pair>
<Pair title="At 10th Level">These bonuses become +3 and +2, respectively.</Pair>
<Pair title="At 15th Level">These bonuses become +4 and +3.</Pair>
<Pair title="At 20th Level">These bonuses increase to +5 and +4.</Pair>
</Ability>
<Ability id="arc-cavalier-constable-instant-order-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-constable-instant-order-ex">Instant Order (Ex)</Pair>
<Pair hl title="Replaces">Mighty charge, supreme charge</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Standard Action">A constable can bark an order to an ally within 30 feet. That ally can instantly take a single <strong>move</strong> or <strong>standard</strong> action to comply with the order. Taking the action <Link to="/misc/daze">dazes</Link> the ally for 1 round afterward.</Pair>
<Pair title="At 20th Level">The constable can use this ability as a <strong className="hl">move action</strong>, but no more than once per round.</Pair>
</Ability>
<Ability id="arc-cavalier-constable-greater-badge-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-cavalier-constable-greater-badge-ex">Greater Badge (Ex)</Pair>
<Pair hl title="Replaces">Greater banner</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Standard Action">A constable can hold his badge aloft to inspire his allies to be steadfast. All allies within 30 feet gain a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to twice the constable's cavalier level for 10 minutes.</Pair>
<Pair title="Special">A given ally can benefit from this ability only once per day.</Pair>
</Ability>
</>};
const _courtly_knight = {title: "Courtly Knight", jsx: <><h2 id="arc-cavalier-courtly_knight-courtly-knight">Courtly Knight</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 24</Link><br/>Some cavaliers strive to be just as effective at the court of a local lord as on the field of battle. These courtly knights are equally at home in a duel with words or swords.</p>
<Ability id="arc-cavalier-courtly_knight-social-presence-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-courtly_knight-social-presence-ex">Social Presence (Ex)</Pair>
<Pair hl title="Replaces">Tactician</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A courtly knight gains a bonus on all Bluff, Diplomacy, Intimidate, and Sense Motive checks. This bonus is equal to 1 + one-fourth of her cavalier level. A courtly knight starts any <Link to="/rule/verbal_duels">verbal duel</Link> with an extra edge she can use for only the <em>presence</em> tactic unless she is at a significant or extreme disadvantage in the duel.</Pair>
</Ability>
<Ability id="arc-cavalier-courtly_knight-imperious-attitude-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-courtly_knight-imperious-attitude-ex" flavor="A courtly knight develops a commanding demeanor, and the strength of her conviction is often enough to get others to do as she asks, merely because she expects it to be done.">Imperious Attitude (Ex)</Pair>
<Pair hl title="Replaces">Greater tactician</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">In a social setting, the courtly knight can attempt Diplomacy checks to make a request of a creature whose attitude toward her is unfriendly, provided that creature does not intend to harm or oppose the courtly knight or her allies in the immediate future. Further, whenever she attempts a Diplomacy check to make a request, a courtly knight can first attempt an Intimidate check (DC = 20 + the creature's Charisma modifier). If she succeeds, she gains a +5 bonus on the subsequent Diplomacy check. Neither aspect of imperious attitude applies if the requested creature considers itself to be of an equal or higher social rank than the courtly knight, which includes creatures that don't understand or value the concept of social ranks.</Pair>
</Ability>
<Ability id="arc-cavalier-courtly_knight-grand-boast-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-courtly_knight-grand-boast-ex">Grand Boast (Ex)</Pair>
<Pair hl title="Replaces">Master tactician</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">Whenever a courtly knight uses her <em>challenge</em> class feature against an opponent who is at full health and under no negative afflictions, conditions, spells, or other effects, she can make a grand boast, declaring that she can defeat her foe with ease. She does not gain the benefits of her <em>challenge</em> (including any additional benefits granted by her <em>order</em>) when making a grand boast. If she successfully defeats the target of her <em>challenge</em> within 1 minute, however, she is vindicated in her boast and gains the benefits of her <em>challenge</em> against all allies of the defeated enemy who witnessed her grand boast and who are of the same or lower CR as the defeated enemy.</Pair>
<Pair title="Special">If any of the courtly knight's allies attack the initial target of the <em>challenge</em> or assist the courtly knight after the boast, this ability has no effect.</Pair>
</Ability>
</>};
const _daring_champion = {title: "Daring Champion", jsx: <><h2 id="arc-cavalier-daring_champion-daring-champion">Daring Champion</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 90</Link><br/>While many cavaliers are the champions of old fighting forms, some younger, more daring cavaliers mix a martial style influenced by the lighter armored and more flamboyant swashbuckler forms with the dedication of cavalier orders.</p>
<Ability id="arc-cavalier-daring_champion-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-cavalier-daring_champion-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiencies</Pair>
<Pair title="Info">Daring champions are proficient with all simple and martial weapons, light and medium armor, and bucklers.</Pair>
</Ability>
<Ability id="arc-cavalier-daring_champion-champions-finesse-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-daring_champion-champions-finesse-ex">Champion's Finesse (Ex)</Pair>
<Pair hl title="Replaces">Mount</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A daring champion gains the benefits of the <Link to="/feat/weapon_finesse">Weapon Finesse</Link> feat with light or one-handed piercing melee weapons, and he can use Charisma in place of Intelligence for the purpose of combat feats prerequisites. A daring champion also counts as having the Weapon Finesse feat for the purpose of meeting feat requirements.</Pair>
</Ability>
<Ability id="arc-cavalier-daring_champion-nimble-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-cavalier-daring_champion-nimble-ex">Nimble (Ex)</Pair>
<Pair hl title="Replaces">Cavalier's charge</Pair>
<Pair title="At 3rd Level">A daring champion gains a +1 dodge bonus to AC when wearing light or no armor and carrying no more than a light load. Anything that causes the daring champion to lose his Dexterity bonus to AC also causes him to lose this dodge bonus.</Pair>
<Pair title="At 7th Level">The bonus becomes +2.</Pair>
<Pair title="At 11th Level">The bonus becomes +3.</Pair>
<Pair title="At 15th Level">The bonus is now +4.</Pair>
<Pair title="At 19th Level">The bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-cavalier-daring_champion-panache-and-deeds-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-daring_champion-panache-and-deeds-ex">Panache and Deeds (Ex)</Pair>
<Pair hl title="Replaces">Expert trainer</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A daring champion gains the <Link to="/class/swashbuckler">swashbuckler's</Link> <em>panache</em> class feature, along with the following swashbuckler deeds: <Link to="/swashdeed/dodging_panache">dodging panache</Link>, <Link to="/swashdeed/precise_strike">precise strike</Link>, and <Link to="/swashdeed/swashbuckler_initiative">swashbuckler initiative</Link>.</Pair>
</Ability>
<Ability id="arc-cavalier-daring_champion-panache-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-daring_champion-panache-ex" flavor="Text from the swashbuckler class">Panache (Ex)</Pair>
<Pair title="Ability"><p>You spend panache to accomplish deeds, and regain panache in the following ways.</p>
<p>Each time you confirm a critical hit with a light or one-handed piercing melee weapon, you regain 1 panache point. Confirming a critical hit on a <Link to="/misc/helpless">helpless</Link> or unaware creature or a creature that has fewer Hit Dice than <Link to="/misc/half">half</Link> your character level doesn't restore panache.</p>
<p>When you reduce a creature to 0 or fewer hit points with a light or one-handed piercing melee weapon attack while in combat, you regain 1 panache point. Destroying an unattended object, reducing a helpless or unaware creature to 0 or fewer hit points, or reducing a creature that has fewer Hit Dice than half your character level to 0 or fewer hit points doesn't restore any panache.</p>
</Pair>
</Ability>
<Ability id="arc-cavalier-daring_champion-advanced-deeds-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-daring_champion-advanced-deeds-ex">Advanced Deeds (Ex)</Pair>
<Pair hl title="Replaces">Mighty charge</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A daring champion gains the following swashbuckler deeds: <Link to="/swashdeed/superior_feint">superior feint</Link>, <Link to="/swashdeed/targeted_strike">targeted strike</Link>, <Link to="/swashdeed/subtle_blade">subtle blade</Link>, and <Link to="/swashdeed/dizzying_defense">dizzying defense</Link>.</Pair>
</Ability>
<Ability id="arc-cavalier-daring_champion-champions-weapon-mastery-ex" icon={["mailed-fist","upgrade"]}>
<Pair single id="arc-cavalier-daring_champion-champions-weapon-mastery-ex">Champion's Weapon Mastery (Ex)</Pair>
<Pair hl title="Replaces">Supreme charge</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">When a daring champion threatens a critical hit with a light or one-handed piercing melee weapon, that critical is automatically confirmed. Furthermore, the critical modifier of those weapons increases by 1 (&times;2 becomes &times;3, for example).</Pair>
</Ability>
</>};
const _daring_general = {title: "Daring General", jsx: <><h2 id="arc-cavalier-daring_general-daring-general">Daring General</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 24</Link><br/>Most cavaliers are great tacticians, but some stand above the rest for their ability to lead troops under their command, and inspire them to great accomplishments. Those cavaliers most gifted at command often become daring generals.</p>
<Ability id="arc-cavalier-daring_general-aides-de-camp-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-daring_general-aides-de-camp-ex">Aides-de-Camp (Ex)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 6th, 12th, and 18th levels</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability"><p>A daring general gains a modified version of the <Link to="/feat/leadership">Leadership</Link> feat, even if he doesn't meet the prerequisites. All followers that the daring general gains as a result of this version of the Leadership feat can only have levels in the <Link to="/npcclass/warrior">warrior</Link> class.</p>
<p>Additionally, the daring general can grant special roles to his cohorts, as outlined below. Unless otherwise stated, only one cohort can fill any given role at any given time. Designating a cohort as filling a special role requires a 24-hour ceremonial ritual.</p>
<p>Beyond the rules noted above, if the daring general uses his followers to create an army using the <Link to="/rule/mass_combat">mass combat</Link> rules, that army starts with one extra <Link to="/rule/army_tactics">tactic</Link> of the daring general's choice and a +2 bonus to its morale score.</p>
<p>The daring general can assign each of his followers individually to serve as either footmen or honor guards (described below). He does not need to assign either role to a given follower, if he prefers. He can change the role of a follower at any time, but it takes 1 day per level for the follower to change her tactics to suit her new role. Followers with a particular role must group together with other followers with the same role to form an army in mass combat.</p>
</Pair>
<Pair title="At 12th Level">The daring general gains an additional cohort (though see Special below) and a number of additional followers equal to the number of followers he gained from the Leadership feat (doubling his followers).</Pair>
<Pair title="At 18th Level">The daring general gains a third cohort (though see Special below) and a number of additional followers equal to the number of followers he gained from the Leadership feat (ending up with triple the number of followers normally granted by Leadership).</Pair>
<Pair title="Special">All cohorts that the daring general gains from this ability must have levels only in classes that grant a full base attack bonus (such as barbarian, fighter, paladin, or ranger), and must be at least 4 levels lower than the daring general himself. When determining the kinds of cohorts the daring general can attract, he treats his Leadership score as 3 lower for each subsequent cohort (effectively taking a -3 penalty for the second cohort and a -6 penalty for the third cohort).</Pair>
</Ability>
<Ability id="arc-cavalier-daring_general-groom-cohort-role" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-cavalier-daring_general-groom-cohort-role">Groom (Cohort Role)</Pair>
<Pair title="Ability">The groom cares for the daring general's mount. She does not take an armor check penalty on Ride checks while riding the cavalier's mount. Additionally, once per day, the groom can spend 10 minutes preparing the daring general's mount for battle. If she does, the mount's speed increases by 10 feet and its Dexterity score increases by 2. These benefits last for 1 hour.</Pair>
</Ability>
<Ability id="arc-cavalier-daring_general-squire-cohort-role" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-cavalier-daring_general-squire-cohort-role">Squire (Cohort Role)</Pair>
<Pair title="Ability">The squire's main task is to care for the daring general's arms and armor. If the squire aids the daring general in donning his armor, it takes <Link to="/misc/half">half</Link> as much time to don as it would if someone else aided the daring general. Additionally, when the squire is adjacent to the daring general, as a <strong className="hl">standard action</strong>, she can grant a +2 bonus to the daring general's AC against the first attack made against the daring general before the squire's next turn. This counts as an application of the <Link to="/rule/aid_another_2">aid another</Link> action, but the squire does not need to threaten the attacker in question.</Pair>
</Ability>
<Ability id="arc-cavalier-daring_general-standard-bearer-cohort-role" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-daring_general-standard-bearer-cohort-role">Standard Bearer (Cohort Role)</Pair>
<Pair title="Ability">The daring general's standard bearer can carry his banner in his stead, granting the benefits of his <em>banner</em> ability (and later, his <em>greater banner</em> ability) to all allies within 60 feet of the standard bearer. If the standard bearer becomes unconscious or dead, she ceases to grant these benefits.</Pair>
</Ability>
<Ability id="arc-cavalier-daring_general-footman-follower-role" extraClasses="subAbility" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-cavalier-daring_general-footman-follower-role">Footman (Follower Role)</Pair>
<Pair title="Passive Ability">Each follower gains a +2 bonus on attack and damage rolls, but takes a -2 penalty to her AC and on saving throws. A footman unit gains a +2 bonus to its OM and takes a -2 penalty to its DV in mass combat.</Pair>
</Ability>
<Ability id="arc-cavalier-daring_general-honor-guard-follower-role" extraClasses="subAbility" icon={["armor-upgrade","broken-shield"]}>
<Pair single id="arc-cavalier-daring_general-honor-guard-follower-role">Honor Guard (Follower Role)</Pair>
<Pair title="Passive Ability">The follower gains a +2 bonus to her AC and on saving throws, but takes a -2 penalty on attack and damage rolls. An honor guard unit gains a +2 bonus to its DV and takes a -2 penalty to its OM in mass combat.</Pair>
</Ability>
<Ability id="arc-cavalier-daring_general-shared-challenge-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-cavalier-daring_general-shared-challenge-ex">Shared Challenge (Ex)</Pair>
<Pair hl title="Replaces">Demanding challenge</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">When a daring general issues a <em>challenge,</em> his followers and cohorts take up that <em>challenge</em> alongside him. Whenever the daring general uses his <em>challenge</em> class feature, as long as the <em>challenge</em> remains in effect, each of the daring general's followers and cohorts that are within 30 feet of him gain a +4 morale bonus on attack rolls made against the target of his <em>challenge.</em></Pair>
</Ability>
<Ability id="arc-cavalier-daring_general-supreme-tactician-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-daring_general-supreme-tactician-ex">Supreme Tactician (Ex)</Pair>
<Pair hl title="Replaces">Supreme charge</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">At 20th level, whenever the daring general uses his <em>tactician</em> ability, he can grant any number of teamwork feats that he knows to his allies, and when he uses his <em>tactician</em> ability as a <strong className="hl">standard action</strong> in combat, it does not count against his daily uses of <em>tactician.</em></Pair>
</Ability>
</>};
const _disciple_of_the_pike = {title: "Disciple of the Pike", jsx: <><h2 id="arc-cavalier-disciple_of_the_pike-disciple-of-the-pike">Disciple of the Pike</h2>
<p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook pg. 13</Link><br/>The <Link to="/rule/hellknights">Hellknight</Link> <Link to="/hkorder/order_of_the_pike">Order of the Pike</Link> are renowned monster hunters, taking on large game using ancient weapon arts combined with modern equipment.</p>
<Ability id="arc-cavalier-disciple_of_the_pike-bigger-they-are-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-cavalier-disciple_of_the_pike-bigger-they-are-ex">Bigger They Are (Ex)</Pair>
<Pair hl title="Replaces">Mount</Pair>
<Pair title="Passive Ability">A disciple of the pike gains a +1 dodge bonus to AC against creatures larger than he is. This bonus increases by 1 if the creature is two size categories larger.</Pair>
<Pair title="At 6th Level">The bonus increases to +3 against a creature three size categories larger.</Pair>
<Pair title="At 12th Level">The bonus increases to +4 against creatures four size categories larger.</Pair>
</Ability>
<Ability id="arc-cavalier-disciple_of_the_pike-pike-charge-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-cavalier-disciple_of_the_pike-pike-charge-ex">Pike Charge (Ex)</Pair>
<Pair hl title="Replaces">Cavalier's charge</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A disciple of the pike learns to make more accurate <Link to="/rule/charge">charge</Link> attacks with weapons from the polearms or spears <Link to="/ability/weapon_groups">fighter weapon group</Link>. He receives a +4 bonus on melee attacks when charging with a polearm or spear (instead of the normal +2). In addition, the disciple of the pike takes no penalty to his AC after making a charge attack with a polearm or spear.</Pair>
</Ability>
<Ability id="arc-cavalier-disciple_of_the_pike-monster-hunter-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-disciple_of_the_pike-monster-hunter-ex">Monster Hunter (Ex)</Pair>
<Pair hl title="Replaces">Expert trainer</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A disciple of the pike has an uncanny ability to identify monsters. He can attempt Knowledge checks untrained to identify monsters and their weaknesses, and gains a bonus equal to <Link to="/misc/half">half</Link> of his cavalier level on Knowledge checks to identify monsters.</Pair>
</Ability>
<Ability id="arc-cavalier-disciple_of_the_pike-weapon-training-ex" extraClasses="hasSubs" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-cavalier-disciple_of_the_pike-weapon-training-ex">Weapon Training (Ex)</Pair>
<Pair hl title="Replaces">Banner, greater banner</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A disciple of the pike gains weapon training, just like a <Link to="/class/fighter">fighter</Link>. He must select polearms or spears as his weapon group, and never gains another weapon group. His bonuses with the selected group otherwise progress as though his fighter level were equal to his cavalier level.</Pair>
</Ability>
<Ability id="arc-cavalier-disciple_of_the_pike-weapon-training-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-cavalier-disciple_of_the_pike-weapon-training-ex" flavor="Text from the fighter class ability.">Weapon Training (Ex)</Pair>
<Pair title="At 5th Level">Select one <Link to="/ability/weapon_groups">weapon group</Link>. Whenever you attack with a weapon from this group, you gain a +1 bonus on attack and damage rolls. You also add this bonus to any combat maneuver checks made with weapons from this group. This bonus also applies to your <Link to="/rule/cmd">CMD</Link> when defending against <Link to="/rule/disarm">disarm</Link> and <Link to="/rule/sunder">sunder</Link> attempts made against weapons from this group.</Pair>
<Pair title="At 9th Level">Your previously selected group's bonus increases to +2.</Pair>
<Pair title="At 13th Level">Your previously selected group's bonus increases to +3.</Pair>
<Pair title="At 17th Level">Your previously selected group's bonus increases to +4.</Pair>
</Ability>
<Ability id="arc-cavalier-disciple_of_the_pike-agile-charger-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-disciple_of_the_pike-agile-charger-ex">Agile Charger (Ex)</Pair>
<Pair hl title="Replaces">Mighty charge</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">A disciple of the pike takes no penalties caused by <Link to="/rule/difficult_terrain">difficult terrain</Link> while charging. His movement is still hampered by obstacles, poor visibility, and other conditions. This ability doesn't allow him to move through impassible terrain.</Pair>
</Ability>
<Ability id="arc-cavalier-disciple_of_the_pike-deadly-charge-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-disciple_of_the_pike-deadly-charge-ex">Deadly Charge (Ex)</Pair>
<Pair hl title="Replaces">Supreme charge</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Whenever a disciple of the pike makes a charge attack with a polearm or spear, he deals double the normal amount of damage. In addition, if he confirms a critical hit on a deadly charge, the target is <Link to="/misc/stunned">stunned</Link> for 1d4 rounds. If the target succeeds at a Will save (DC = 10 + the cavalier's base attack bonus), it is instead <Link to="/misc/staggered">staggered</Link> for 1d4 rounds.</Pair>
</Ability>
</>};
const _drakerider = {title: "Drakerider", jsx: <><h2 id="arc-cavalier-drakerider-drakerider">Drakerider</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 24</Link><br/>While many cavaliers dream of riding a dragon into battle, drakeriders come to learn that the reality involves far more effort than they had expected. Unlike other cavaliers, drakeriders must train their mounts from hatchlings, fighting and toiling alongside their drakes for years through countless struggles before the proud dragons are willing to accept them as riders. Some residents of Triaxus, envious of the close connection between dragonriders and dragons, attempt to emulate this relationship by raising drake hatchlings. These efforts aren't always successful, sometimes leaving the would-be drakeriders dead or maimed.</p>
<Ability id="arc-cavalier-drakerider-drake-mount" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-cavalier-drakerider-drake-mount">Drake Mount</Pair>
<Pair hl title="Replaces">Mount, tactician, expert trainer, banner, greater tactician, greater banner, master tactician</Pair>
<Pair hl title="Alters">Cavalier's charge</Pair>
<Pair title="Ability">A drakerider gains a <Link to="/sidekick/drake">drake companion</Link> instead of a mount. She gains cavalier's charge at 9th level instead of 3rd.</Pair>
</Ability>
<Ability id="arc-cavalier-drakerider-approved-order" icon={["info"]}>
<Pair single id="arc-cavalier-drakerider-approved-order">Approved Order</Pair>
<Pair title="Info">A drakerider can join only an order approved by its mount. Suitable orders include <Link to="/order/order_of_the_beast_isc">order of the beast (ISC)</Link>, <Link to="/order/order_of_the_cockatrice">order of the cockatrice</Link>, and <Link to="/order/order_of_the_dragon">order of the dragon</Link>, as well as other fitting orders at the GM's discretion.</Pair>
</Ability>
</>};
const _emissary = {title: "Emissary", jsx: <><h2 id="arc-cavalier-emissary-emissary">Emissary</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 36</Link><br/>Cavaliers serve many roles on the battlefield, from bold leaders and shock troops to dashing knights and mounted juggernauts. Some cavaliers, however, focus more on speed and mobility than they do on the raw power of the mounted charge. On foot or in the saddle, the emissary is usually first to meet the enemy, with a pointed lance, a drawn sword, or terms for surrender.</p>
<Ability id="arc-cavalier-emissary-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-cavalier-emissary-armor-proficiency">Armor Proficiency</Pair>
<Pair title="Info">An emissary does not gain proficiency with heavy armor.</Pair>
</Ability>
<Ability id="arc-cavalier-emissary-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-emissary-bonus-feats">Bonus Feats</Pair>
<Pair title="Passive Ability">An emissary can select <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/fleet">Fleet</Link>, or <Link to="/feat/run">Run</Link> in addition to the list of combat feats whenever he gains a bonus feat.</Pair>
</Ability>
<Ability id="arc-cavalier-emissary-in-or-out-of-the-saddle-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-cavalier-emissary-in-or-out-of-the-saddle-ex">In or Out of the Saddle (Ex)</Pair>
<Pair hl title="Replaces">Tactician</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An emissary gains <Link to="/feat/mounted_combat">Mounted Combat</Link> as a bonus feat. In addition, he can move at normal speed when wearing medium armor.</Pair>
</Ability>
<Ability id="arc-cavalier-emissary-battlefield-agility-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-emissary-battlefield-agility-ex">Battlefield Agility (Ex)</Pair>
<Pair hl title="Replaces">Banner</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">An emissary learns to be more aware of the threats that surround him in combat, and shares this awareness with his loyal steed. Both the emissary and his mount gain <Link to="/feat/mobility">Mobility</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-cavalier-emissary-mounted-acrobatics-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-emissary-mounted-acrobatics-ex">Mounted Acrobatics (Ex)</Pair>
<Pair hl title="Replaces">Greater tactician</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">An emissary is even more adept at hopping on and off his steed, and even dropping alongside its flanks mid-gallop. He gains <Link to="/feat/trick_riding">Trick Riding</Link> as a bonus feat, even if he does not meet the prerequisites. The emissary can employ this feat even when wearing medium armor.</Pair>
</Ability>
<Ability id="arc-cavalier-emissary-mounted-dervish-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-cavalier-emissary-mounted-dervish-ex">Mounted Dervish (Ex)</Pair>
<Pair hl title="Replaces">Greater banner</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">An emissary becomes a fearsome, mobile foe on the battlefield. He gains <Link to="/feat/mounted_skirmisher">Mounted Skirmisher</Link> as a bonus feat, even if he does not meet the prerequisites. In addition, whenever the emissary is mounted and takes the <Link to="/rule/charge">charge</Link> action, he adds 10 feet to his mount's speed.</Pair>
</Ability>
<Ability id="arc-cavalier-emissary-erratic-charge-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-emissary-erratic-charge-ex">Erratic Charge (Ex)</Pair>
<Pair hl title="Replaces">Supreme charge</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">An emissary learns to ride through the thick of combat, striking and then moving away with blinding speed. Whenever the emissary is mounted and takes the <Link to="/rule/charge">charge</Link> action, he can first move 10 feet and make a melee attack. This first attack is not a charge, but a regular melee attack, and the movement counts toward the total allowed movement for the round. After making this attack, the emissary must still move in a straight line to reach the target of his charge, and he takes a -5 penalty on the attack roll for the attack at the end of his charge.</Pair>
</Ability>
</>};
const _esquire = {title: "Esquire", jsx: <><h2 id="arc-cavalier-esquire-esquire">Esquire</h2>
<p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 30</Link><br/>The esquire is a roving knight who acquires the services of a faithful follower - an aide-de-camp-who serves as the esquire's assistant, spear carrier, and guard.</p>
<Ability id="arc-cavalier-esquire-aide-de-camp-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-esquire-aide-de-camp-ex">Aide-de-Camp (Ex)</Pair>
<Pair hl title="Replaces">Mount</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability"><p>An esquire acquires the services of a loyal aide-de-camp. This NPC functions similarly to a cohort (as the <Link to="/feat/leadership">Leadership</Link> feat), though the aide-de-camp must advance in a class that grants proficiency with all martial weapons and cannot multiclass until the esquire reaches 7th level (though the aide-de-camp can select an archetype). If the aide-de-camp is a cavalier, he must follow the same order as the esquire.</p>
<p>The aide-de-camp gains <Link to="/feat/swift_aid">Swift Aid</Link> as a bonus feat, and provides a +2 (rather than +1) bonus when using this feat to aid the esquire. As a <strong className="hl">move action,</strong> the aide-de-camp can retrieve a stored item or an item on the ground and hand it to the esquire. The esquire does not have to take an action to receive the item, though he must be conscious and have a free hand. This action does not provoke attacks of opportunity for the aide-de-camp or esquire.</p>
<p>If the aide-de-camp dies performing an act that directly supports the edicts of the esquire's order (GM's discretion), the esquire does not take a penalty to his Leadership score. If an aide-de-camp dies, or is released from the esquire's service, the esquire may gain a new aide-de-camp by scouting for potential candidates in a city or large town. This requires 1 day per 5 levels of the aide-de-camp to be recruited.</p>
</Pair>
</Ability>
<Ability id="arc-cavalier-esquire-teamwork-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-esquire-teamwork-ex">Teamwork (Ex)</Pair>
<Pair hl title="Replaces">Cavalier's charge</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">As long as an esquire and his aide-de-camp are adjacent, the aide-de-camp is treated as having any <Link to="/main/teamwork_feat">teamwork feats</Link> the esquire has. They also share any teamwork feats that function when two or more allies threaten the same target, as long as they both threaten the same target.</Pair>
</Ability>
<Ability id="arc-cavalier-esquire-shared-challenge-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-esquire-shared-challenge-ex">Shared Challenge (Ex)</Pair>
<Pair hl title="Replaces">Expert trainer</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">Whenever an esquire challenges an opponent when his aide-de-camp is within 30 feet, he may grant his aide-de-camp bonuses equal to one-half of the bonuses he gains from <em>challenge,</em> including bonuses derived from the cavalier's order. If the aide-de-camp is also a cavalier and challenges the same target, these bonuses do not stack. Like the esquire, his aide-decamp takes a -2 penalty to Armor Class against attacks from creatures other than the challenged opponent.</Pair>
</Ability>
<Ability id="arc-cavalier-esquire-banner-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-cavalier-esquire-banner-ex">Banner (Ex)</Pair>
<Pair hl title="Alters">Banner</Pair>
<Pair title="Passive Ability">An aide-de-camp can carry an esquire's banner for him and still grant allies within range the banner's bonuses. While doing so the aide-de-camp gains double the normal morale bonuses provided by the banner.</Pair>
</Ability>
<Ability id="arc-cavalier-esquire-avenge-me-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-esquire-avenge-me-ex">Avenge Me (Ex)</Pair>
<Pair hl title="Replaces">Mighty charge</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">Whenever the esquire is killed, dying, stunned, dazed, or otherwise unable to take actions, his aide-de-camp gains the full benefits of the esquire's <em>challenge</em> and <em>order</em> abilities against all creatures that attacked the esquire in the previous round. If the aide-de-camp is also a cavalier and challenges the same target, these bonuses do not stack. These benefits last until the esquire regains the ability to take actions, or until the aide-de-camp or the triggering opponents are killed.</Pair>
<Pair title="Special">If his aide-de-camp is killed, dying, or otherwise unable to take actions the esquire may declare one creature of his choice that attacked the aide-de-camp in the past round as his <em>quarry;</em> this functions identically to the <Link to="/class/ranger">ranger</Link> class ability. These bonuses last until the aide-de-camp recovers or until the cavalier or the triggering opponents are killed.</Pair>
</Ability>
<Ability id="arc-cavalier-esquire-fight-as-one-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-esquire-fight-as-one-ex">Fight As One (Ex)</Pair>
<Pair hl title="Replaces">Supreme charge</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">The <em>shared challenge</em> ability increases in power, granting the aide-de-camp full benefit of the esquire's <em>challenge.</em> In addition, if the esquire and aide-de-camp both confirm a critical hit against the same target within the same round, the target must make a Fortitude save (DC 10 + <Link to="/misc/half">half</Link> the esquire's cavalier level + the esquire's Charisma bonus) or be <Link to="/misc/staggered">staggered</Link> for 1d4 rounds.</Pair>
</Ability>
</>};
const _fell_rider = {title: "Fell Rider", jsx: <><h2 id="arc-cavalier-fell_rider-fell-rider">Fell Rider</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 122</Link><br/>The fell rider rides a bestial steed, a mount mastered by him alone. He tramples his enemies down, leaving twisted bodies in his wake, and fear rides with him.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-cavalier-fell_rider--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/hobgoblin">Hobgoblin</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-cavalier-fell_rider-brute-steed-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-cavalier-fell_rider-brute-steed-ex">Brute Steed (Ex)</Pair>
<Pair hl title="Alters">Mount</Pair>
<Pair title="Passive Ability">A fell rider's mount is unusually large and fierce. It gains a +2 bonus to Strength, but takes a -2 penalty to Dexterity.</Pair>
</Ability>
<Ability id="arc-cavalier-fell_rider-rampage-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-cavalier-fell_rider-rampage-ex">Rampage (Ex)</Pair>
<Pair hl title="Replaces">Cavalier's charge</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A fell rider gains <Link to="/feat/trample">Trample</Link> as a bonus feat. The fell rider receives a +2 bonus on <Link to="/rule/overrun">overrun</Link> attempts made while mounted. In addition, his mount gains a +2 bonus on damage rolls when making hoof attacks or using the <Link to="/umr/trample">trample</Link> monster ability, even when not overrunning.</Pair>
</Ability>
<Ability id="arc-cavalier-fell_rider-dread-rider-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-cavalier-fell_rider-dread-rider-ex">Dread Rider (Ex)</Pair>
<Pair hl title="Replaces">Expert trainer</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A fell rider gains a bonus equal to <Link to="/misc/half">half</Link> his level on Intimidate checks made while mounted.</Pair>
<Pair title="Free Action">Once per round, he can make an Intimidate check to demoralize a foe he has trampled or charged while mounted.</Pair>
</Ability>
<Ability id="arc-cavalier-fell_rider-fell-presence-ex" icon={["armor-downgrade","abstract-091"]}>
<Pair single id="arc-cavalier-fell_rider-fell-presence-ex">Fell Presence (Ex)</Pair>
<Pair hl title="Replaces">Banner</Pair>
<Pair title="At 5th Level">A fell rider inspires dread while mounted. As long as the fell rider is mounted, all enemies within 60 feet receive a -2 penalty on savings throws against fear.</Pair>
<Pair title="At 10th Level">The penalty becomes -3.</Pair>
<Pair title="At 15th Level">The penalty becomes -4.</Pair>
<Pair title="At 20th Level">The penalty becomes -5.</Pair>
</Ability>
<Ability id="arc-cavalier-fell_rider-deadly-rampage-ex" icon={["armor-upgrade","mailed-fist"]}>
<Pair single id="arc-cavalier-fell_rider-deadly-rampage-ex">Deadly Rampage (Ex)</Pair>
<Pair hl title="Replaces">Mighty charge</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A mounted fell rider no longer provokes attacks of opportunity when he attempts to overrun a creature. He can make a single melee attack against the creature as a <strong className="hl">free action</strong> if the overrun attempt succeeds.</Pair>
</Ability>
<Ability id="arc-cavalier-fell_rider-terror-ex" icon={["armor-downgrade","abstract-091"]}>
<Pair single id="arc-cavalier-fell_rider-terror-ex">Terror (Ex)</Pair>
<Pair hl title="Replaces">Greater banner</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Standard Action">A fell rider can rear up his mount, spreading terror among his enemies. Enemies within 60 feet who can see the fell rider must succeed at a Will save (DC 10 + 1/2 the fell rider's level + the fell rider's Charisma modifier) or be <Link to="/misc/shaken">shaken</Link> for 1 round per level the fell rider possesses. Creatures with half or fewer Hit Dice than the fell rider become <Link to="/misc/frightened">frightened</Link> instead. An opponent that succeeds at the saving throw is immune to that fell rider's terror ability for 24 hours.</Pair>
<Pair title="Special">This ability is a mind-affecting fear effect.</Pair>
</Ability>
<Ability id="arc-cavalier-fell_rider-unstoppable-rampage-ex" icon={["stairs-goal","mailed-fist","upgrade"]}>
<Pair single id="arc-cavalier-fell_rider-unstoppable-rampage-ex">Unstoppable Rampage (Ex)</Pair>
<Pair hl title="Replaces">Supreme charge</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A mounted fell rider can overrun up to four creatures as part of a single overrun combat maneuver. Each attempt made against a creature after the first receives a cumulative -5 penalty (for example, the fourth overrun attempt would be at a -15 penalty). If any overrun attempt fails, the fell rider cannot make further overrun attempts that round. Attacks made by the fell rider or his mount as part of the overrun, such as those provided by the Trample feat or the <em>deadly rampage</em> ability, receive a +4 bonus to hit, and any critical threats from these attacks automatically confirm.</Pair>
</Ability>
</>};
const _first_mothers_fang = {title: "First Mother's Fang", jsx: <><h2 id="arc-cavalier-first_mothers_fang-first-mothers-fang">First Mother's Fang</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 17</Link><br/>Nagajor legend states that when <Link to="/faith/nalinivati">Nalinivati</Link> created the first <Link to="/race/nagaji">nagaji</Link>, she chose a paragon of their kind to instruct in the use of exotic weapons, lore, and words so the creature could best serve her as a bodyguard and emissary: the original first mother's fang. Whether or not these paragons descend from a single nagaji, first mother's fangs of Nagajor have expanded their numbers over the generations, and they no longer speak with the full authority of the First Mother. In modern times, a first mother's fang acts as a servant of his nation, a skilled general and tactician in times of war and a noble governor during times of peace.</p>
<Ability icon={["skills"]} id="arc-cavalier-first_mothers_fang-undefined">
<Pair id="arc-cavalier-first_mothers_fang-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT)</Pair></Ability>
<Ability id="arc-cavalier-first_mothers_fang-weapon-and-armor-proficiency" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-cavalier-first_mothers_fang-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">The cavalier's weapon proficiencies</Pair>
<Pair title="Info">A first mother's fang is proficient with all simple and martial weapons. Additionally, a first mother's fang is proficient in one exotic melee weapon of his choice and one exotic ranged weapon of his choice.</Pair>
</Ability>
<Ability id="arc-cavalier-first_mothers_fang-serpent-mount-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-first_mothers_fang-serpent-mount-ex">Serpent Mount (Ex)</Pair>
<Pair hl title="Alters">Mount</Pair>
<Pair title="At 1st Level">Instead of the usual choices for a cavalier's mount, first mother's fangs ride on giant riding constrictors. These use the statistics of the <Link to="/companion/constrictor_snake">constrictor snake</Link> druid animal companion, except that they are suitable mounts and begin as size Large at 1st level with no other adjustments to their abilities or statistics based on this size change. A serpent mount is considered to be a quadruped for the purpose of determining its <Link to="/rule/carrying_capacity">carrying capacity</Link>, and its base land speed is 40 feet (other speeds are unaffected).</Pair>
<Pair title="At 4th Level">A giant riding constrictor doesn't increase in size again, but it does receive all the other usual 4th-level benefits.</Pair>
</Ability>
<Ability id="arc-cavalier-first_mothers_fang-honored-warrior-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-cavalier-first_mothers_fang-honored-warrior-ex">Honored Warrior (Ex)</Pair>
<Pair hl title="Replaces">Order</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A first mother's fang is expected to act as a military leader in wartime and a governor in peace time, and as a result, he must be versed both in the martial and political arts. He gains <Link to="/feat/combat_expertise">Combat Expertise</Link> as a bonus feat, and if his Intelligence score is less than 13, it counts as 13 for the sole purpose of meeting the prerequisites of combat feats that require Combat Expertise as a prerequisite.</Pair>
<Pair title="At 2nd Level">The first mother's fang gains a <Link to="/class/vigilante">vigilante</Link> social talent and a bonus <Link to="/main/combat_feat">combat feat</Link>. When selecting his vigilante social talent, a first mother's fang can select <Link to="/soctalent/celebrity_discount">celebrity discount</Link>, <Link to="/soctalent/celebrity_perks">celebrity perks</Link>, <Link to="/soctalent/great_renown">great renown</Link>, <Link to="/soctalent/incredible_renown">incredible renown</Link>, <Link to="/soctalent/instant_recognition">instant recognition</Link>, <Link to="/soctalent/loyal_aid">loyal aid</Link>, <Link to="/soctalent/renown">renown</Link>, <Link to="/soctalent/social_grace">social grace</Link>, or <Link to="/soctalent/triumphant_return">triumphant return</Link>. He treats his cavalier level as his effective vigilante level when determining whether he meets a talent's prerequisites, as well as its effects. He gains the improved attitude and Intimidate bonuses from <em>renown</em> as if he were in both social and vigilante identities. When selecting skills with <em>social grace,</em> he must choose from the following list: Appraise, Bluff, Diplomacy, Intimidate, Knowledge (geography, history, local, or nobility), Perform, Profession (soldier), or Sense Motive. He is always considered to be in his social identity for the purpose of <em>social grace</em> (though he continues to receive the benefits for both identities from <em>renown</em>). When selecting his bonus combat feat, he can choose from only combat feats that list Combat Expertise as a prerequisite.</Pair>
<Pair title="At 8th Level">He gains a new social talent and combat feat, following the same restrictions.</Pair>
<Pair title="At 15th Level">He gains a new social talent and combat feat, following the same restrictions.</Pair>
</Ability>
</>};
const _gallant = {title: "Gallant", jsx: <><h2 id="arc-cavalier-gallant-gallant">Gallant</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 12</Link><br/>Gallants embody the virtues of honor, generosity, and civility. Their personal symbol serves as an inspiration to others in a courtly setting as much as on a battlefield.</p>
<Ability id="arc-cavalier-gallant-code-of-gallantry" icon={["info","hazard-sign"]}>
<Pair single id="arc-cavalier-gallant-code-of-gallantry">Code of Gallantry</Pair>
<Pair hl title="Alters">The cavalier's order</Pair>
<Pair title="Info">A gallant must belong to either the <Link to="/order/order_of_the_blue_rose">order of the blue rose</Link>, the <Link to="/order/order_of_the_guard">order of the guard</Link>, the <Link to="/order/order_of_the_lion">order of the lion</Link>, or the <Link to="/order/order_of_the_sword">order of the sword</Link>. A gallant must also be of lawful good or neutral good alignment. A gallant who ceases to be lawful good or neutral good, or who violates his order's edicts, loses all class features except armor and weapon proficiencies until he restores his alignment or atones for his violation (see the <Link to="/spell/atonement">atonement</Link> spell), as appropriate.</Pair>
</Ability>
<Ability id="arc-cavalier-gallant-symbol-of-inspiration-ex" icon={["armor-upgrade","abstract-091"]}>
<Pair single id="arc-cavalier-gallant-symbol-of-inspiration-ex" flavor="The gallant's personal crest becomes an inspirational symbol of his chivalrous ideals.">Symbol of Inspiration (Ex)</Pair>
<Pair hl title="Replaces">Banner</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">As long as he displays his crest on his tabard, banner, or similar item, allies within 60 feet who can see him gain a morale bonus on saving throws against charm, compulsion, and fear effects, and a bonus on damage rolls to deal nonlethal damage. Both of these bonuses are equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of his cavalier level.</Pair>
</Ability>
<Ability id="arc-cavalier-gallant-symbol-of-resilience-su" icon={["armor-upgrade"]}>
<Pair single id="arc-cavalier-gallant-symbol-of-resilience-su" flavor="The gallant's personal crest empowers his allies to stand firm against evil.">Symbol of Resilience (Su)</Pair>
<Pair hl title="Replaces">Greater banner</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Standard Action">While his personal crest is displayed, the gallant can bolster his allies' resilience. All allies within 60 feet of the gallant gain DR 5/evil for 1 minute. An ally cannot benefit from this ability more than once per day.</Pair>
</Ability>
</>};
const _gendarme = {title: "Gendarme", jsx: <><h2 id="arc-cavalier-gendarme-gendarme">Gendarme</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 37</Link><br/>The gendarme cares less for the finer points of tactical precision than he does for the exhilaration of the charge: the rush of wind through the visor of his helmet, the feel of his couched lance, the satisfying shriek of armor giving way before his weapon's force as the point drives past metal into his foes.</p>
<Ability id="arc-cavalier-gendarme-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-gendarme-bonus-feats">Bonus Feats</Pair>
<Pair hl title="Replaces">Tactician, greater tactician, master tactician, cavalier bonus feats</Pair>
<Pair title="Ability">A gendarme trains to be a mounted terror, almost to the exclusion of all other abilities. He gains bonus feats at 1st level, 5th level, and then every three levels thereafter, but must select these bonus feats from the following list: <Link to="/feat/improved_bull_rush">Improved Bull Rush</Link>, <Link to="/feat/mounted_combat">Mounted Combat</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/ride_by_attack">Ride-By Attack</Link>, <Link to="/feat/spirited_charge">Spirited Charge</Link>, <Link to="/feat/spring_attack">Spring Attack</Link>, and <Link to="/feat/unseat">Unseat</Link>.</Pair>
<Pair title="Special">If the gendarme has already selected all of the listed feats, then he may select his bonus feats from those feats listed as <Link to="/main/combat_feat">combat feats</Link>.</Pair>
</Ability>
<Ability id="arc-cavalier-gendarme-transfixing-charge-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-gendarme-transfixing-charge-ex">Transfixing Charge (Ex)</Pair>
<Pair hl title="Replaces">Supreme charge</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">A gendarme represents the epitome of mounted combat. Whenever he makes a <Link to="/rule/charge">charge</Link> attack while mounted, he deals triple the normal damage (quadruple if using a <Link to="/eq-weapon/lance">lance</Link>); this damage includes all increases from the Spirited Charge feat and from the use of a lance. In addition, if the gendarme confirms a critical hit on a charge attack while mounted, the attack deals maximum damage for the weapon wielded. Additional damage from weapon properties, magic effects, precision-based bonuses, or other increases are rolled normally.</Pair>
</Ability>
</>};
const _ghost_rider = {title: "Ghost Rider", jsx: <><h2 id="arc-cavalier-ghost_rider-ghost-rider">Ghost Rider</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 117</Link><br/>Ghost riders are conflicted warriors who use the powers of the phantasmal dead even while seeking out and banishing the corruption of undeath from plagued communities. Their strange abilities mark them as outsiders and stoic loners, and they stay in one place only long enough to help the afflicted before riding off to unknown destinations.</p>
<Ability id="arc-cavalier-ghost_rider-ghost-mount-su" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-ghost_rider-ghost-mount-su">Ghost Mount (Su)</Pair>
<Pair hl title="Replaces">Mount</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>A ghost rider gains the ability to manifest a special mount of conjured ectoplasm rather than one of flesh and bone. This spectral companion functions like a spiritualist's <Link to="/sidekick/phantom">phantom</Link> companion, using the ghost rider's cavalier level as her effective <Link to="/class/spiritualist">spiritualist</Link> level. The phantom takes the form of a ghostly creature analogous to one of a cavalier's normal mount options for her size and class level, such as a Large horse for a Medium ghost rider or a wolf for a Small ghost rider. A ghost rider must choose a mount that is capable of bearing her weight, that has four or more legs, and that lacks a fly speed (although the GM may allow mounts with a swim speed in certain environments). The GM might approve other animals as suitable mounts.</p>
<p>The ghost rider can manifest her ghost mount only in ectoplasmic form, and she gains the spiritualist's <em>etheric tether</em> class feature, applied to her ghost mount. The mount shares the cavalier's alignment. Though the mount cannot speak, it understands its master's verbal commands and gains the phantom's <em>link</em> ability. The ghost mount has <Link to="/misc/good_saves">good Fortitude and Reflex saves</Link>, and can have ranks in any of the following skills: Acrobatics (Dex), Climb (Str), Escape Artist (Dex), Fly (Dex), Intimidate (Cha), Perception (Wis), Stealth (Dex), Survival (Wis), and Swim (Str). The ghost rider's ghost mount does not gain the <em>share spells, deliver touch spells,</em> or <em>incorporeal flight</em> abilities. Ghost mounts do not gain emotional focus abilities.</p>
<p>The ghost rider does not take an armor check penalty on Ride checks while riding her mount. The mount is always considered combat trained, and begins play with <Link to="/feat/endurance">Endurance</Link> as a bonus feat.</p>
<p><strong className="hl">Ghost Mount Starting Statistics:</strong> <strong>Type</strong> animal (phantom); <strong>Size</strong> one size category larger than the ghost rider; <strong>Speed</strong> 50 ft.; <strong>AC</strong> +4 natural armor; <strong>Attack</strong> bite (1d4), 2 hooves (1d6; this is a secondary natural attack); <strong>Ability Scores</strong> Str 16, Dex 13, Con 15, Int 2, Wis 12, Cha 6.</p>
</Pair>
</Ability>
<Ability id="arc-cavalier-ghost_rider-frightful-gaze-su" icon={["smoking-finger"]}>
<Pair single id="arc-cavalier-ghost_rider-frightful-gaze-su">Frightful Gaze (Su)</Pair>
<Pair hl title="Replaces">Tactician, greater tactician, master tactician</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">Cha modifier times/day</Pair>
<Pair title="Standard Action">A ghost rider can use this ability on opponents within 30 feet, which acts as a <Link to="/umr/gaze">gaze</Link> attack until the ghost rider's next turn. Creatures within range that meet the ghost rider's gaze must succeed at a Will saving throw (DC = 10 + <Link to="/misc/half">half</Link> the ghost rider's class level + the ghost rider's Charisma modifier) or stand <Link to="/rule/paralyzed">paralyzed</Link> in fear for 1 round. This is a mind-affecting fear effect. Creatures that successfully save against that ghost rider's frightful gaze are immune to it for 24 hours.</Pair>
<Pair title="At 9th Level">This ability can affect creatures that are mindless or immune to mind-affecting effects, though it still counts as a fear effect.</Pair>
</Ability>
<Ability id="arc-cavalier-ghost_rider-fearless-su" icon={["armor-upgrade"]}>
<Pair single id="arc-cavalier-ghost_rider-fearless-su">Fearless (Su)</Pair>
<Pair hl title="Replaces">Cavalier's charge</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A ghost rider becomes immune to fear. Each ally within 10 feet of the ghost rider gains a +4 morale bonus on saving throws against fear effects. This ability functions only while the ghost rider is conscious, not if she is unconscious or dead.</Pair>
</Ability>
<Ability id="arc-cavalier-ghost_rider-spirited-mount-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-cavalier-ghost_rider-spirited-mount-su">Spirited Mount (Su)</Pair>
<Pair hl title="Replaces">Expert trainer, banner</Pair>
<Pair title="At 5th Level">The ghost rider's mount ignores <Link to="/rule/difficult_terrain">difficult terrain</Link>.</Pair>
<Pair title="At 8th Level">It gains the ability to use <Link to="/spell/water_walk">water walk</Link> at will.</Pair>
</Ability>
<Ability id="arc-cavalier-ghost_rider-ghost-wind-su" icon={["magic-swirl","stairs-goal"]}>
<Pair single id="arc-cavalier-ghost_rider-ghost-wind-su">Ghost Wind (Su)</Pair>
<Pair hl title="Replaces">Mighty charge, greater banner</Pair>
<Pair title="At 11th Level">The ghost rider's ghost mount can use <Link to="/spell/air_walk">air walk</Link> (as the spell, no action required) at will for up to 1 round at a time, after which it falls to the ground.</Pair>
<Pair title="At 14th Level">The mount can fly at its speed with a bonus on Fly skill checks equal to the ghost rider's class level.</Pair>
</Ability>
</>};
const _green_knight = {title: "Green Knight", jsx: <><h2 id="arc-cavalier-green_knight-green-knight">Green Knight</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 44</Link><br/>Some knights serve nature itself and can be found protecting unspoiled natural places or serving fey beings.</p>
<Ability id="arc-cavalier-green_knight-beast-tongue-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-green_knight-beast-tongue-ex">Beast Tongue (Ex)</Pair>
<Pair hl title="Replaces">Tactician</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A green knight can use Diplomacy to improve an animal's attitude. <em>Beast tongue</em> otherwise functions like the druid's <Link to="/ability/wild_empathy">wild empathy</Link> ability, using the green knight's Diplomacy modifier and using her cavalier level as her effective druid level, and it counts as that ability for the purpose of other effects (such as feat prerequisites or effects that alter or improve <em>wild empathy</em>).</Pair>
</Ability>
<Ability id="arc-cavalier-green_knight-implacable-knight-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-green_knight-implacable-knight-ex">Implacable Knight (Ex)</Pair>
<Pair hl title="Replaces">Mount</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A green knight gains <Link to="/feat/endurance">Endurance</Link> and <Link to="/feat/diehard">Diehard</Link> as bonus feats.</Pair>
</Ability>
<Ability id="arc-cavalier-green_knight-natures-servant-ex" icon={["info"]}>
<Pair single id="arc-cavalier-green_knight-natures-servant-ex">Nature's Servant (Ex)</Pair>
<Pair hl title="Alters">Order</Pair>
<Pair title="Info">A green knight must select the <Link to="/order/order_of_the_green">order of the Green</Link>.</Pair>
</Ability>
<Ability id="arc-cavalier-green_knight-ferocious-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-cavalier-green_knight-ferocious-ex">Ferocious (Ex)</Pair>
<Pair hl title="Replaces">Cavalier's charge</Pair>
<Pair title="At 3rd Level">A green knight is not staggered when below 0 hit points.</Pair>
<Pair title="At 9th Level">Taking actions when below 0 hit points does not cause her to lose hit points.</Pair>
</Ability>
<Ability id="arc-cavalier-green_knight-woodland-stride-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-green_knight-woodland-stride-ex">Woodland Stride (Ex)</Pair>
<Pair hl title="Replaces">Expert trainer, banner</Pair>
<Pair title="At 4th Level">A green knight gains the druid's <Link to="/ability/woodland_stride">woodland stride</Link> ability.</Pair>
</Ability>
<Ability id="arc-cavalier-green_knight-stalwart-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-cavalier-green_knight-stalwart-ex">Stalwart (Ex)</Pair>
<Pair hl title="Replaces">Greater tactician</Pair>
<Pair title="At 9th Level">Whenever a green knight succeeds at a Fortitude or Will save against an effect that has a reduced effect on a successful save, she instead negates the effect.</Pair>
</Ability>
<Ability id="arc-cavalier-green_knight-oaken-vitality-su" icon={["armor-upgrade"]}>
<Pair single id="arc-cavalier-green_knight-oaken-vitality-su" flavor="Nature protects a green knight from many afflictions.">Oaken Vitality (Su)</Pair>
<Pair hl title="Replaces">Mighty charge, greater banner</Pair>
<Pair title="At 11th Level">The green knight becomes immune to disease, <Link to="/rule/infestations">infestations</Link>, and poison.</Pair>
</Ability>
<Ability id="arc-cavalier-green_knight-take-their-heads-su" icon={["upgrade"]}>
<Pair single id="arc-cavalier-green_knight-take-their-heads-su" flavor="A green knight's blade is blessed by mighty fey powers and unerringly seeks out foes' necks.">Take Their Heads (Su)</Pair>
<Pair hl title="Replaces">Master tactician</Pair>
<Pair title="At 17th Level">Any slashing weapon a green knight wields gains the <Link to="/magic-enh/vorpal">vorpal</Link> weapon special ability.</Pair>
</Ability>
<Ability id="arc-cavalier-green_knight-indestructible-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-cavalier-green_knight-indestructible-su">Indestructible (Su)</Pair>
<Pair hl title="Replaces">Supreme charge</Pair>
<Pair title="At 20th Level">A green knight is virtually impervious to death. She gains a +6 bonus to her Constitution score. In addition, the green knight becomes immune to death effects and to effects that would kill her without reducing her to 0 hit points, unless the effect involves decapitation. If she is decapitated, the green knight can continue to act normally. Reattachment requires the head and body to be joined and the application of any effect that restores hit points.</Pair>
</Ability>
</>};
const _herald_squire = {title: "Herald Squire", jsx: <><h2 id="arc-cavalier-herald_squire-herald-squire">Herald Squire</h2>
<p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea pg. 21</Link><br/>The herald squire is the eyes and ears of a traveling knight, often arriving ahead of her liege to bring word of his arrival, find lodgings, and get the lay of the land.</p>
<Ability id="arc-cavalier-herald_squire-introduction-ex" icon={["rolling-dices","stairs-goal"]}>
<Pair single id="arc-cavalier-herald_squire-introduction-ex">Introduction (Ex)</Pair>
<Pair hl title="Replaces">Tactician</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Whenever a herald squire tries to influence a creature's attitude with the Diplomacy skill for the first time, she may roll her Diplomacy check twice and take the best result. In addition, any improvement of a creature's attitude toward the herald squire also applies to her knight.</Pair>
</Ability>
<Ability id="arc-cavalier-herald_squire-fleet-of-foot-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-cavalier-herald_squire-fleet-of-foot-ex">Fleet of Foot (Ex)</Pair>
<Pair hl title="Replaces">The 2nd-level order ability</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A herald squire gains <em>fast movement,</em> as the <Link to="/class/barbarian">barbarian</Link> class feature of the same name. If the herald squire gains <em>fast movement</em> from another class, the bonuses to her speed do not stack. Whenever she makes long <Link to="/rule/overland_movement">overland journeys</Link> alone or with only her mount, the distance a herald squire can travel each day increases by 20%.</Pair>
</Ability>
<Ability id="arc-cavalier-herald_squire-transcend-language-sp" icon={["magic-swirl"]}>
<Pair single id="arc-cavalier-herald_squire-transcend-language-sp">Transcend Language (Sp)</Pair>
<Pair hl title="Replaces">Cavalier's charge</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">Three times/day.</Pair>
<Pair title="Ability">A herald squire can cast <Link to="/spell/tongues">tongues</Link> on herself, using her herald squire level as her caster level. The effects of this ability last for a number of rounds equal to her herald squire level.</Pair>
</Ability>
</>};
const _honor_guard = {title: "Honor Guard", jsx: <><h2 id="arc-cavalier-honor_guard-honor-guard">Honor Guard</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 37</Link><br/>Certain cavaliers are trained not as advance combatants, but as loyal guards, standing as firm defenders in the face of threats to their chosen charge. These honor guards are sometimes merely ornamental, performing their functions on a ceremonial basis, but a surprising number are capable, deadly opponents, able to take down a threat long before their liege knows of the danger. To be an honor guard is to constantly place one's self in harm's way, and to always be willing to lay down one's life at a moment's notice.</p>
<Ability id="arc-cavalier-honor_guard-sworn-defense-ex" icon={["broken-shield","armor-upgrade"]}>
<Pair single id="arc-cavalier-honor_guard-sworn-defense-ex">Sworn Defense (Ex)</Pair>
<Pair hl title="Alters">Challenge</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Whenever an honor guard issues a challenge, he can select one ally as his ward for the duration of the challenge. Whenever the honor guard is adjacent to his ward, he takes a -1 penalty to Armor Class, and the ward receives a +1 dodge bonus to AC.</Pair>
</Ability>
<Ability id="arc-cavalier-honor_guard-intercept-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-cavalier-honor_guard-intercept-ex">Intercept (Ex)</Pair>
<Pair hl title="Replaces">Cavalier's charge</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">An honor guard learns to better disrupt the attacks of his enemies. He gains <Link to="/feat/bodyguard">Bodyguard</Link> as a bonus feat, even if he does not meet the prerequisite. In addition, whenever the honor guard uses the <Link to="/rule/aid_another_2">aid another</Link> action to increase an ally's Armor Class, the bonus to Armor Class granted by the aid another action increases by +1.</Pair>
</Ability>
<Ability id="arc-cavalier-honor_guard-warding-charge-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-cavalier-honor_guard-warding-charge-ex" flavor="An honor guard can flash across the battlefield to protect his ward against the target of his challenge.">Warding Charge (Ex)</Pair>
<Pair hl title="Replaces">Mighty charge</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Immediate Action">Whenever the target of the honor guard's challenge makes an attack against his ward, the honor guard can move up to his speed and make a single melee attack against the target of his challenge. This movement and attack can be made as a <Link to="/rule/charge">charge</Link> if the movement qualifies.</Pair>
</Ability>
<Ability id="arc-cavalier-honor_guard-defensive-challenge-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-cavalier-honor_guard-defensive-challenge-ex">Defensive Challenge (Ex)</Pair>
<Pair hl title="Replaces">Demanding challenge</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">Whenever an honor guard declares a challenge, his target must pay particular attention to him and his ability to intercept attacks. As long as the target is within the threatened area of the cavalier, it takes a -2 penalty on attack rolls against anyone other than the honor guard.</Pair>
</Ability>
</>};
const _hooded_knight = {title: "Hooded Knight", jsx: <><h2 id="arc-cavalier-hooded_knight-hooded-knight">Hooded Knight</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 26</Link><br/>Some cavaliers wander the lonely roads of the world - any world, including the First World - protecting travelers and acting as their honor guard. Like the <Link to="/rule/eldest">Eldest</Link> they usually venerate, they wear heavy hoods and rarely show their faces. Hooded knights are usually members of the <Link to="/order/order_of_the_blossom">order of the blossom</Link>, the <Link to="/order/order_of_the_shield">order of the shield</Link>, or the <Link to="/order/order_of_the_sword">order of the sword</Link>.</p>
<Ability icon={["skills"]} id="arc-cavalier-hooded_knight-undefined">
<Pair id="arc-cavalier-hooded_knight-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Climb, Swim</Pair></Ability>
<Ability id="arc-cavalier-hooded_knight-feytouched-mount" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-hooded_knight-feytouched-mount">Feytouched Mount</Pair>
<Pair hl title="Alters">The cavalier's mount</Pair>
<Pair title="Info">A hooded knight's mount has the <Link to="/template/fey_touched">fey-touched</Link> simple template when he is riding it, but it cannot use its <em>change shape</em> ability while being ridden.</Pair>
</Ability>
<Ability id="arc-cavalier-hooded_knight-hero-of-the-roads-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-hooded_knight-hero-of-the-roads-ex">Hero of the Roads (Ex)</Pair>
<Pair hl title="Replaces">Tactician</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">When on a road, a hooded knight gains a +2 bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival checks. A hooded knight and his mount can <Link to="/rule/hustle">hustle</Link> while traveling on a road without taking damage for 2 hours each day.</Pair>
<Pair title="At 5th Level">He can now hustle for 4 hours without taking damage.</Pair>
<Pair title="At 9th Level">His bonuses increase from +2 to +4. In addition, the speed of any mount a hooded knight rides is increased by 10 feet. By spending 1 minute coaxing his allies' mounts and expending one use of his challenge ability, a hooded knight can grant the same speed increase to the mounts ridden by all allies within 30 feet who can see and hear him. This speed increase to his allies' mounts lasts for 1 hour.</Pair>
<Pair title="At 10th Level">He can now hustle for 6 hours without taking damage.</Pair>
<Pair title="At 15th Level">He can now hustle for 8 hours without taking damage.</Pair>
<Pair title="At 17th Level">His bonuses increase from +4 to +6. In addition, the hooded knight's mount's speed is now increased by 20 feet, and he can give this increased speed to his allies' mounts, as above.</Pair>
<Pair title="At 20th Level">He can now hustle for 10 hours without taking damage.</Pair>
</Ability>
<Ability id="arc-cavalier-hooded_knight-champion-of-the-roads-sp" icon={["magic-swirl"]}>
<Pair single id="arc-cavalier-hooded_knight-champion-of-the-roads-sp">Champion of the Roads (Sp)</Pair>
<Pair hl title="Replaces">Greater tactician</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four cavalier levels beyond 9th<ByLevelPop levels={[[9,1],[13,2],[17,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A hooded knight gains <Link to="/spell/dimension_door">dimension door</Link> as a spell-like ability with a caster level equal to his cavalier level. If the hooded knight is riding a mount, his mount does not count against the number of creatures he brings along with this ability. If the destination is not a road, the hooded knight is shunted to the nearest open space on a road, taking damage as described in the <em>dimension door</em> spell.</Pair>
</Ability>
<Ability id="arc-cavalier-hooded_knight-paragon-of-the-roads-sp" icon={["upgrade"]}>
<Pair single id="arc-cavalier-hooded_knight-paragon-of-the-roads-sp">Paragon of the Roads (Sp)</Pair>
<Pair hl title="Replaces">Master tactician</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">When hooded knight uses his <em>champion of the roads</em> ability, he can treat the ability as <Link to="/spell/greater_teleport">greater teleport</Link> rather than <em>dimension door.</em> The hooded knight's mount and the mounts ridden by any creatures he brings along do not count against the number of teleported creatures.</Pair>
</Ability>
</>};
const _huntmaster = {title: "Huntmaster", jsx: <><h2 id="arc-cavalier-huntmaster-huntmaster">Huntmaster</h2>
<p><strong>Sources</strong> <Link to="/source/animal_archive">Animal Archive pg. 6</Link><br/>Huntmasters train the beasts favored by lordly castes into swift and deadly trackers.</p>
<Ability icon={["skills"]} id="arc-cavalier-huntmaster-undefined">
<Pair id="arc-cavalier-huntmaster-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/stealth">Stealth</Link> (DEX), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="arc-cavalier-huntmaster-weapon-and-armor-proficiency" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-cavalier-huntmaster-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair title="Info">A huntmaster is not proficient with heavy armor. Huntmasters are proficient with all simple and martial weapons, plus the <Link to="/eq-weapon/net">net</Link> and <Link to="/eq-weapon/whip">whip</Link>.</Pair>
</Ability>
<Ability id="arc-cavalier-huntmaster-hunting-pack-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-cavalier-huntmaster-hunting-pack-ex">Hunting Pack (Ex)</Pair>
<Pair hl title="Replaces">Mount</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>A huntmaster forms a close bond with an animal companion. This animal companion functions as a druid's <Link to="/ability/animal_companion">animal companion</Link>, using the cavalier's level as his effective druid level. He can choose either a <Link to="/companion/bird">bird</Link> or a <Link to="/companion/dog">dog</Link> when selecting his animal companion.</p>
<p>The huntmaster can have more than one <Link to="/sidekick/animal_companion">animal companion</Link>, but he must divide up his effective druid level between his companions to determine the abilities of each companion. Each time a huntmaster's effective druid level increases, he must decide how to allocate the increase among his animal companions (including the option of adding a new 1st-level companion). Once an effective druid level is allocated to a particular companion, it cannot be redistributed while that companion is in the huntmaster's service (he must release a companion or wait until a companion dies to allocate its levels to another companion). The <em>share spells</em> animal companion ability does not give the huntmaster the ability to cast a single spell so that it affects all of his animal companions.</p>
</Pair>
<Pair title="Passive Ability">A huntmaster's animal companions gain a bonus on Survival checks to follow tracks equal to <Link to="/misc/half">half</Link> the cavalier's class level (minimum 1).</Pair>
</Ability>
<Ability id="arc-cavalier-huntmaster-bestial-challenge-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-cavalier-huntmaster-bestial-challenge-ex">Bestial Challenge (Ex)</Pair>
<Pair hl title="Alters">Challenge</Pair>
<Pair title="Passive Ability">Whenever a huntmaster issues a challenge, both he and his <em>hunting pack</em> gain the bonuses and penalties associated with his challenge.</Pair>
</Ability>
<Ability id="arc-cavalier-huntmaster-tactician-ex" icon={["info"]}>
<Pair single id="arc-cavalier-huntmaster-tactician-ex">Tactician (Ex)</Pair>
<Pair hl title="Alters">Tactician, greater tactician, master tactician</Pair>
<Pair title="Info">A huntmaster's tactician ability affects only his <em>hunting pack,</em> not other allies.</Pair>
</Ability>
<Ability id="arc-cavalier-huntmaster-takedown-ex" icon={["mailed-fist"]}>
<Pair single id="arc-cavalier-huntmaster-takedown-ex">Takedown (Ex)</Pair>
<Pair hl title="Replaces">Cavalier's charge</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A huntmaster's dog can make a free <Link to="/rule/trip">trip</Link> or <Link to="/rule/dirty_trick">dirty trick</Link> (<Link to="/rule/entangled">entangled</Link>) combat maneuver after a successful melee attack. A huntmaster's bird can make a free dirty trick (<Link to="/misc/dazzled">dazzled</Link> or <Link to="/misc/deafened">deafened</Link>) combat maneuver after a successful melee attack; if the target is already dazzled, the bird can choose dirty trick (<Link to="/misc/blinded">blinded</Link>) instead. These combat maneuvers do not provoke attacks of opportunity.</Pair>
</Ability>
<Ability id="arc-cavalier-huntmaster-animal-trainer-ex" icon={["info"]}>
<Pair single id="arc-cavalier-huntmaster-animal-trainer-ex">Animal Trainer (Ex)</Pair>
<Pair hl title="Alters">Expert trainer</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A huntmaster's <em>expert trainer</em> ability applies to birds and dogs rather than mounts.</Pair>
</Ability>
<Ability id="arc-cavalier-huntmaster-swift-tracker-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-huntmaster-swift-tracker-ex">Swift Tracker (Ex)</Pair>
<Pair hl title="Replaces">Banner</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A huntmaster gains the swift tracker ability, as the <Link to="/class/ranger">ranger</Link> ability of the same name.</Pair>
</Ability>
<Ability id="arc-cavalier-huntmaster-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-huntmaster-bonus-feats">Bonus Feats</Pair>
<Pair hl title="Replaces">Cavalier bonus feats</Pair>
<Pair title="At 6th Level">A huntmaster and all members of his <em>hunting pack</em> gain <Link to="/feat/step_up">Step Up</Link> as a bonus feat.</Pair>
<Pair title="At 12th Level">They gain <Link to="/feat/following_step">Following Step</Link>.</Pair>
<Pair title="At 18th Level">They gain <Link to="/feat/step_up_and_strike">Step Up and Strike</Link>.</Pair>
</Ability>
<Ability id="arc-cavalier-huntmaster-pack-attack-ex" icon={["mailed-fist","upgrade"]}>
<Pair single id="arc-cavalier-huntmaster-pack-attack-ex">Pack Attack (Ex)</Pair>
<Pair hl title="Replaces">Mighty charge</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">Whenever a huntmaster and any of his <em>hunting pack</em> or multiple animals in his <em>hunting pack</em> are adjacent and attack the same target in melee, they are treated as <Link to="/rule/flanking">flanking</Link>. In addition, they can flank a creature with <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> if the huntmaster has at least 4 more levels than the target.</Pair>
</Ability>
<Ability id="arc-cavalier-huntmaster-quarry-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-huntmaster-quarry-ex">Quarry (Ex)</Pair>
<Pair hl title="Replaces">Greater banner</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">A huntmaster gains <em>quarry,</em> as the ranger ability of the same name. The benefits of this ability also apply to his hunting pack.</Pair>
</Ability>
<Ability id="arc-cavalier-huntmaster-improved-quarry-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-huntmaster-improved-quarry-ex">Improved Quarry (Ex)</Pair>
<Pair hl title="Replaces">Supreme charge</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A huntmaster gains <em>improved quarry,</em> as the ranger ability of the same name. The benefits of this ability also apply to his hunting pack.</Pair>
</Ability>
</>};
const _hussar = {title: "Hussar", jsx: <><h2 id="arc-cavalier-hussar-hussar">Hussar</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 25</Link><br/>Agile and maneuverable cavalry, hussars make up for their relatively light armor with their speed and cunning. They are known for doggedly pursuing their foes even in tight spaces, across rooftops, and in other places that mounted cavalry could normally never reach.</p>
<Ability id="arc-cavalier-hussar-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-cavalier-hussar-armor-proficiency">Armor Proficiency</Pair>
<Pair hl title="Replaces">The cavalier's normal armor proficiencies</Pair>
<Pair title="Info">A hussar is proficient with light armor, but not with medium or heavy armor or with shields.</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-cavalier-hussar-undefined">
<Pair id="arc-cavalier-hussar-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/escape_artist">Escape Artist</Link> (DEX), <Link to="/skill/stealth">Stealth</Link> (DEX), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="arc-cavalier-hussar-fast-mount-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-hussar-fast-mount-ex" flavor="A hussar is able to spur on any mount that he rides to faster speeds than other riders.">Fast Mount (Ex)</Pair>
<Pair hl title="Replaces">Tactician, banner, greater banner</Pair>
<Pair title="Passive Ability">The base speed of any creature that the hussar is riding increases by 10 feet, plus an additional 5 feet for every five cavalier levels he possesses. This applies to all forms of movement that the mount possesses.</Pair>
</Ability>
<Ability id="arc-cavalier-hussar-skillful-rider-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-hussar-skillful-rider-ex" flavor="A hussar and his mount work in tandem to achieve amazing accomplishments of dexterity while riding.">Skillful Rider (Ex)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 6th, 12th, and 18th levels</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">As long as the hussar is mounted, whenever he or his mount is required to attempt an Acrobatics, Climb, Escape Artist, Fly, Stealth, or Swim check, he can use his own modifier or his mount's, whichever is higher. Additionally, regardless of whose bonus is used, the hussar gains an additional +2 bonus on all skill checks to overcome obstacles as part of a chase.</Pair>
<Pair title="At 12th Level">The bonus increases to +4.</Pair>
<Pair title="At 18th Level">The bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-cavalier-hussar-maneuverable-mount-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-cavalier-hussar-maneuverable-mount-ex" flavor="A hussar is able to maneuver his mount with exceptional grace and poise, even in areas that would normally be a difficult fit for such a creature.">Maneuverable Mount (Ex)</Pair>
<Pair hl title="Replaces">Greater tactician</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">Any creature that the hussar is riding can <Link to="/misc/squeeze">squeeze</Link> into a space that is at least half as wide as its normal space without taking the normal penalties on attack rolls and AC for doing so, though it still moves at half speed.</Pair>
<Pair title="Special">If the mount attempts to squeeze into a space less than half its space's width, it must use the Escape Artist skill to do so, and takes the normal penalties.</Pair>
</Ability>
<Ability id="arc-cavalier-hussar-sudden-swerve-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-hussar-sudden-swerve-ex" flavor="A hussar's control over his mount is advanced enough to allow the mount to turn on the spot, even when charging forward at full speed.">Sudden Swerve (Ex)</Pair>
<Pair hl title="Replaces">Master tactician</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">Whenever the hussar makes the <Link to="/rule/charge">charge</Link> or <Link to="/rule/run">run</Link> action while mounted, he can make a single turn of up to 90 degrees at any one point during this movement.</Pair>
</Ability>
</>};
const _knight_of_arnisant = {title: "Knight of Arnisant", jsx: <><h2 id="arc-cavalier-knight_of_arnisant-knight-of-arnisant">Knight of Arnisant</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 5</Link><br/>The cavaliers known as knights of Arnisant revere the famous general who was crucial in the defeat of <Link to="/monster/the_whispering_tyrant">the Whispering Tyrant</Link>, the powerful wizard-king. Knights of Arnisant call upon Arnisant to grant them protection from evil magic, just as the Shield of Aroden protected him. Many of these cavaliers further emulate him by joining the <Link to="/order/order_of_the_shield">order of the shield</Link>. Most knights of Arnisant serve at Lastwall, where the movement originated, but they can be found everywhere from the general's homeland of Taldor to the front lines of the Worldwound.</p>
<Ability id="arc-cavalier-knight_of_arnisant-shield-expertise" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-knight_of_arnisant-shield-expertise">Shield Expertise</Pair>
<Pair hl title="Replaces">Tactician</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A knight of Arnisant gains the <Link to="/feat/shield_focus">Shield Focus</Link> feat as a bonus feat. His cavalier levels count as fighter levels for the purpose of qualifying for all feats that list the Shield Focus feat as a prerequisite.</Pair>
</Ability>
<Ability id="arc-cavalier-knight_of_arnisant-deflective-shield-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-cavalier-knight_of_arnisant-deflective-shield-ex" flavor="A knight of Arnisant specializes in using his shield to deflect attacks.">Deflective Shield (Ex)</Pair>
<Pair hl title="Replaces">Expert trainer</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">He adds a bonus equal to his shield bonus to AC to his touch AC and his CMD, up to a maximum of <Link to="/misc/half">half</Link> his cavalier level. He does not include any enhancement bonus he has from a magic shield in this calculation.</Pair>
</Ability>
<Ability id="arc-cavalier-knight_of_arnisant-heraldic-banner-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-knight_of_arnisant-heraldic-banner-ex">Heraldic Banner (Ex)</Pair>
<Pair hl title="Alters">Banner</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A knight of Arnisant uses his shield as a <em>banner,</em> though its benefits apply only to allies within 30 feet.</Pair>
</Ability>
<Ability id="arc-cavalier-knight_of_arnisant-soul-shield-su" icon={["armor-upgrade"]}>
<Pair single id="arc-cavalier-knight_of_arnisant-soul-shield-su">Soul Shield (Su)</Pair>
<Pair hl title="Replaces">Greater tactician</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">When carrying a shield, a knight of Arnisant adds a bonus equal to his shield bonus to AC on all saving throws against curse spells and effects, up to a maximum of half his cavalier level. He does not include any enhancement bonus from a magic shield in this calculation.</Pair>
</Ability>
<Ability id="arc-cavalier-knight_of_arnisant-defensive-challenge-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-cavalier-knight_of_arnisant-defensive-challenge-ex">Defensive Challenge (Ex)</Pair>
<Pair hl title="Replaces">Demanding challenge</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">Whenever a knight of Arnisant declares a <em>challenge,</em> his target must pay particular attention to him. As long as the target is within the threatened area of the cavalier, it takes a -2 penalty on attack rolls against anyone other than the knight of Arnisant.</Pair>
</Ability>
<Ability id="arc-cavalier-knight_of_arnisant-heart-shield-su" icon={["armor-upgrade"]}>
<Pair single id="arc-cavalier-knight_of_arnisant-heart-shield-su">Heart Shield (Su)</Pair>
<Pair hl title="Replaces">Greater tactician</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">When carrying a shield, a knight of Arnisant adds a bonus equal to his shield bonus to AC on saving throws against death spells and magical death effects, up to a maximum of half his cavalier level. He does not include any enhancement bonus from a magic shield in this calculation.</Pair>
</Ability>
</>};
const _luring_cavalier = {title: "Luring Cavalier", jsx: <><h2 id="arc-cavalier-luring_cavalier-luring-cavalier">Luring Cavalier</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 38</Link><br/>Those who study the perfection of strategy and tactics know that picking the battlefield can grant advantages that only overwhelming numbers of allies can eclipse. The luring cavalier is a special type of cavalier that helps accomplish that goal. Typically, he uses a bow or other ranged weapon to lure opponents toward him, and then makes strategic retreats to position his enemies exactly where he wants them.</p>
<Ability id="arc-cavalier-luring_cavalier-far-challenge-ex" icon={["bowman","upgrade","broken-shield"]}>
<Pair single id="arc-cavalier-luring_cavalier-far-challenge-ex">Far Challenge (Ex)</Pair>
<Pair hl title="Replaces">Challenge</Pair>
<Pair title="Usage">1 time/day + 1 per three cavalier levels beyond 1st<ByLevelPop levels={[[1,1],[4,2],[7,3],[10,4],[13,5],[16,6],[19,7]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action">A luring cavalier can use his <em>far challenge</em> ability. When he does, the luring cavalier chooses one target within sight to <em>challenge.</em> The luring cavalier's ranged attacks deal extra damage whenever the attacks are made against the target of his challenge. This extra damage is equal to the luring cavalier's level.</Pair>
<Pair title="Ability">Additionally, once per day, the luring cavalier may spend a use of his <em>far challenge</em> ability to double the potential extra damage of his ranged attack. Before making the attack roll, he can choose to spend a use of his <em>challenge</em> to deal twice his cavalier level in extra damage on a successful hit instead of just his cavalier level in extra damage. If the attack misses, the use of the <em>challenge</em> is wasted.</Pair>
<Pair title="Passive Ability">Challenging a foe requires subtle deceits and strategies. The cavalier must make it look like he is a soft target. The subject of the far challenge gains a +4 bonus on attack rolls made against him.</Pair>
<Pair title="Special">This challenge remains in effect until the target is dead or unconscious, until the target hits the luring cavalier with a melee attack, or until the combat ends. If this challenge ends because the target hits the luring cavalier with a melee attack, this challenge changes to the effects of the normal cavalier <em>challenge,</em> and gains any <em>order</em> benefit the luring cavalier has.</Pair>
</Ability>
<Ability id="arc-cavalier-luring_cavalier-careful-aim" icon={["bowman","upgrade"]}>
<Pair single id="arc-cavalier-luring_cavalier-careful-aim">Careful Aim</Pair>
<Pair hl title="Replaces">Cavalier's charge</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">When a luring cavalier makes a ranged attack with his highest base attack bonus, he can ignore the penalties for firing up to three range increments away. If he is using a firearm, he can target touch AC up to two range increments away.</Pair>
<Pair title="Special">This effect stacks with effects that allow the cavalier to make ranged attacks farther without penalty or that allow him to target touch AC with a firearm beyond the first range increment.</Pair>
</Ability>
<Ability id="arc-cavalier-luring_cavalier-infuriating-aim-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-cavalier-luring_cavalier-infuriating-aim-ex">Infuriating Aim (Ex)</Pair>
<Pair hl title="Replaces">Mighty charge</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">When a luring cavalier confirms a critical hit with a ranged attack made at his highest base attack bonus against the target of a <em>far challenge,</em> the target becomes infuriated for 1 round. While infuriated, the target must spend its turn moving closer to the cavalier, making move, <Link to="/rule/run">run</Link>, or <Link to="/rule/charge">charge</Link> actions only (challenged creature's choice).</Pair>
<Pair title="Special">This is a mind-affecting effect.</Pair>
</Ability>
<Ability id="arc-cavalier-luring_cavalier-versatile-challenge-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-luring_cavalier-versatile-challenge-ex">Versatile Challenge (Ex)</Pair>
<Pair hl title="Replaces">Demanding challenge</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">A luring cavalier can expend a use of his <em>challenge</em> to gain the benefit of <em>far challenge</em> or the normal cavalier <em>challenge.</em> He can even change the type of <em>challenge</em> an opponent is under the effects of as a <strong className="hl">swift action</strong>, as long as the target of the <em>challenge</em> is within line of sight.</Pair>
</Ability>
<Ability id="arc-cavalier-luring_cavalier-supreme-aim-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-luring_cavalier-supreme-aim-ex">Supreme Aim (Ex)</Pair>
<Pair hl title="Replaces">Supreme charge</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">The luring cavalier gains the <em>careful aim</em> bonus and the effect of <em>infuriating aim</em> on all ranged attacks.</Pair>
</Ability>
</>};
const _musketeer = {title: "Musketeer", jsx: <><h2 id="arc-cavalier-musketeer-musketeer">Musketeer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 38</Link><br/>Some cavaliers are entrusted by their masters with the care and use of expensive and powerful oddities: firearms. Capable of inflicting shocking amounts of destruction without the aid of magic, these musketeers lead the advance of their troops, firing devastating fusillades long before the enemy can prepare for the armed charge that follows.</p>
<Ability id="arc-cavalier-musketeer-weapon-and-armor-proficiency" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-cavalier-musketeer-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair title="Info">A musketeer does not gain proficiency in heavy armor. Musketeers are proficient with all simple and martial weapons, and with firearms. A cavalier's levels stack with any fighter levels he possesses for the purpose of meeting the level prerequisite for feats that specifically select a firearm, such as <Link to="/feat/weapon_specialization">Weapon Specialization</Link>.</Pair>
</Ability>
<Ability id="arc-cavalier-musketeer-gifted-firearm-ex" icon={["stairs-goal","bowman","hazard-sign"]}>
<Pair single id="arc-cavalier-musketeer-gifted-firearm-ex">Gifted Firearm (Ex)</Pair>
<Pair hl title="Replaces">Mount</Pair>
<Pair title="At 1st Level">At 1st level, a musketeer is gifted by his order with a firearm (either a <Link to="/eq-weapon/pistol">pistol</Link> or a <Link to="/eq-weapon/musket">musket</Link>). This weapon is both a symbol of the cavalier's duty and a focus for much of his talent. He cannot sell this weapon. He also gains the <Link to="/feat/gunsmithing">Gunsmithing</Link> feat.</Pair>
<Pair title="At 8th Level">When wielding his gifted weapon, as a <strong className="hl">standard action</strong>, the mustketeer can focus himself to gain a number of benefits for 1 minute per cavalier level. The musketeer can use this ability twice per day, plus one additional time per day for every four levels beyond 8th. Starting out, the musketeer gains the benefit of the <Link to="/feat/improved_critical">Improved Critical</Link> feat.</Pair>
<Pair title="At 11th Level">While focused, he can reduce the misfire chance of his weapon by 1 (to a minimum of 1). This doesn't stack with the similar benefits of <Link to="/magic-enh/reliable">reliable</Link> magic weapon special ability.</Pair>
<Pair title="At 17th Level">While focused, the musketeer can double the range increment of his weapon. This doesn't stack with the <Link to="/magic-enh/distance">distance</Link> magical ability.</Pair>
<Pair title="At 20th Level">During a period of such focus, the musketeer can engage in a flurry of gunfire. The cavalier can expend one of his daily <em>challenges</em> to make a <Link to="/rule/full_attack">full attack</Link> with his firearm. The musketeer ignores the normal load times for his weapon, but must still expend enough doses of powder and enough bullets to complete each attack.</Pair>
<Pair title="Special">If the musketeer's gifted firearm is destroyed, the cavalier loses this ability for 30 days while a replacement weapon is crafted for him. During this 30-day period, the musketeer takes a -1 penalty on weapon and damage rolls.</Pair>
</Ability>
<Ability id="arc-cavalier-musketeer-swift-powder-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-musketeer-swift-powder-ex">Swift Powder (Ex)</Pair>
<Pair hl title="Replaces">Expert trainer</Pair>
<Pair title="At 4th Level">The musketeer gains <Link to="/feat/rapid_reload">Rapid Reload</Link> (musket) or Rapid Reload (pistol) as a bonus feat.</Pair>
<Pair title="At 14th Level">Each time the musketeer issues a <em>challenge,</em> he may reload a wielded firearm as a <strong className="hl">free action</strong>.</Pair>
</Ability>
</>};
const _oceanrider = {title: "Oceanrider", jsx: <><h2 id="arc-cavalier-oceanrider-oceanrider">Oceanrider</h2>
<p><strong>Sources</strong> <Link to="/source/aquatic_adventures">Aquatic Adventures pg. 53</Link><br/>Oceanriders are underwater cavaliers who ride dolphins, orcas, or seahorses.</p>
<Ability id="arc-cavalier-oceanrider-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-cavalier-oceanrider-armor-proficiency">Armor Proficiency</Pair>
<Pair hl title="Alters">Armor proficiency</Pair>
<Pair title="Info">An oceanrider is proficient with light and medium armor, and with shields (but not tower shields).</Pair>
</Ability>
<Ability id="arc-cavalier-oceanrider-aquatic-mount" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-oceanrider-aquatic-mount">Aquatic Mount</Pair>
<Pair hl title="Replaces">Expert trainer</Pair>
<Pair hl title="Alters">Mount</Pair>
<Pair title="Info">A Medium oceanrider can ride either a <Link to="/companion/giant_seahorse">giant seahorse</Link> or an <Link to="/companion/orca">orca</Link> (unlike most orcas, this one starts at size Large with none of the other level 7 abilities until level 7) instead of the normal options, while a Small oceanrider can ride a <Link to="/companion/dolphin">dolphin</Link>.</Pair>
</Ability>
</>};
const _qabarat_outrider = {title: "Qabarat Outrider", jsx: <><h2 id="arc-cavalier-qabarat_outrider-qabarat-outrider">Qabarat Outrider</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_stars">People of the Stars pg. 11</Link><br/>The war colleges of the Castrovelian city-state of Qabarat produce a distinctive breed of cavalier known as the Qabarat outrider. In defense of the lashunta city-states, outriders lead small units of regular troops, the members of which can link minds with one another to form bonds in battle few can match.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-cavalier-qabarat_outrider--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/lashunta">Lashunta</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-cavalier-qabarat_outrider-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-cavalier-qabarat_outrider-armor-proficiency">Armor Proficiency</Pair>
<Pair title="Info">A Qabarat outrider does not gain proficiency with heavy armor.</Pair>
</Ability>
<Ability id="arc-cavalier-qabarat_outrider-combat-expertise" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-qabarat_outrider-combat-expertise">Combat Expertise</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A Qabarat outrider gains <Link to="/feat/combat_expertise">Combat Expertise</Link> as a bonus feat, even if he does not meet the prerequisites.</Pair>
</Ability>
<Ability id="arc-cavalier-qabarat_outrider-maneuver-tactics-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-qabarat_outrider-maneuver-tactics-ex">Maneuver Tactics (Ex)</Pair>
<Pair hl title="Replaces">Tactician, greater tactician, master tactician</Pair>
<Pair title="Usage">1 time/day + 1 per five cavalier levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="At 1st Level">A Qabarat outrider receives an Improved combat maneuver feat (such as <Link to="/feat/improved_feint">Improved Feint</Link>) as a bonus feat. He must meet the prerequisites for this feat. As a <strong className="hl">standard action</strong>, a Qabarat outrider can grant this feat to all allies within 30 feet, regardless of whether they can see or hear him or they meet the feat's prerequisites. Allies retain this bonus feat for 3 rounds, plus 1 round for every 2 levels the Qabarat outrider possesses.</Pair>
<Pair title="At 9th Level">A Qabarat outrider gains an Improved or Greater combat maneuver feat (such as <Link to="/feat/greater_overrun">Greater Overrun</Link>) for which he meets the prerequisites as a bonus feat. The outrider can grant this feat to his allies using the <em>maneuver tactics</em> ability. Using the maneuver tactics ability becomes a <strong className="hl">swift action</strong>.</Pair>
<Pair title="At 17th Level">A Qabarat outrider gains an Improved, Greater, or Strike combat maneuver feat (such as <Link to="/feat/tripping_strike">Tripping Strike</Link>) as a bonus feat. He must meet the prerequisites for this feat. An outrider can grant this feat to his allies using the <em>maneuver tactics</em> ability.</Pair>
<Pair title="Special">A list of "Improved", "Greater" and "Strike" feats is provided below.</Pair>
</Ability>
<h3 id="arc-cavalier-qabarat_outrider-improved-feats">"Improved" Feats</h3>
<div className="columnar">
<ul>
<li><Link to="/feat/improved_bull_rush">Improved Bull Rush</Link></li>
<li><Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link></li>
<li><Link to="/feat/improved_disarm">Improved Disarm</Link></li>
<li><Link to="/feat/improved_drag">Improved Drag</Link></li>
<li><Link to="/feat/improved_feint">Improved Feint</Link></li>
<li><Link to="/feat/improved_grapple">Improved Grapple</Link></li>
<li><Link to="/feat/improved_overrun">Improved Overrun</Link></li>
<li><Link to="/feat/improved_reposition">Improved Reposition</Link></li>
<li><Link to="/feat/improved_steal">Improved Steal</Link></li>
<li><Link to="/feat/improved_sunder">Improved Sunder</Link></li>
<li><Link to="/feat/improved_trip">Improved Trip</Link></li>
</ul>
</div>
<h3 id="arc-cavalier-qabarat_outrider-greater-feats">"Greater" Feats</h3>
<div className="columnar">
<ul>
<li><Link to="/feat/greater_bull_rush">Greater Bull Rush</Link></li>
<li><Link to="/feat/greater_dirty_trick">Greater Dirty Trick</Link></li>
<li><Link to="/feat/greater_disarm">Greater Disarm</Link></li>
<li><Link to="/feat/greater_drag">Greater Drag</Link></li>
<li><Link to="/feat/greater_feint">Greater Feint</Link></li>
<li><Link to="/feat/greater_grapple">Greater Grapple</Link></li>
<li><Link to="/feat/greater_overrun">Greater Overrun</Link></li>
<li><Link to="/feat/greater_reposition">Greater Reposition</Link></li>
<li><Link to="/feat/greater_steal">Greater Steal</Link></li>
<li><Link to="/feat/greater_sunder">Greater Sunder</Link></li>
<li><Link to="/feat/greater_trip">Greater Trip</Link></li>
</ul>
</div>
<h3 id="arc-cavalier-qabarat_outrider-strike-feats">"Strike" Feats</h3>
<div className="columnar">
<ul>
<li><Link to="/feat/bull_rush_strike">Bull Rush Strike</Link></li>
<li><Link to="/feat/disarming_strike">Disarming Strike</Link></li>
<li><Link to="/feat/repositioning_strike">Repositioning Strike</Link></li>
<li><Link to="/feat/sundering_strike">Sundering Strike</Link></li>
<li><Link to="/feat/tripping_strike">Tripping Strike</Link></li>
</ul>
</div>
<Ability id="arc-cavalier-qabarat_outrider-mindlink-su" icon={["armor-upgrade","mailed-fist"]}>
<Pair single id="arc-cavalier-qabarat_outrider-mindlink-su">Mindlink (Su)</Pair>
<Pair hl title="Replaces">Banner</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A Qabarat outrider's innate telepathy develops into a mindlink, allowing contact between himself and his allies and companions. As long as the Qabarat outrider is conscious, all allies within range of his limited telepathy racial ability (30 feet for most Qabarat outriders) receive a morale bonus (equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> his cavalier level) on saving throws against charm and compulsion effects and a morale bonus (equal to one-fifth his cavalier level) on attack rolls made while <Link to="/rule/flanking">flanking</Link>.</Pair>
</Ability>
<Ability id="arc-cavalier-qabarat_outrider-mindlink-pulse-su" icon={["upgrade"]}>
<Pair single id="arc-cavalier-qabarat_outrider-mindlink-pulse-su">Mindlink Pulse (Su)</Pair>
<Pair hl title="Replaces">Greater banner</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Standard Action">A Qabarat outrider can send a pulse of psychic energy through the minds of allies within range of his limited telepathy. If he does so during a surprise round, any allies not normally able to act in the surprise round can act. If an ally would normally be denied the ability to act in the surprise round, that ally's initiative is equal to her initiative roll, or to the initiative of the outrider - 1, whichever is lower. Whether or not it is a surprise round, when the outrider uses this ability, allies within range are no longer <Link to="/rule/flat_footed">flat-footed</Link> (assuming they were to begin with).</Pair>
</Ability>
</>};
const _qadiran_horselord = {title: "Qadiran Horselord", jsx: <><h2 id="arc-cavalier-qadiran_horselord-qadiran-horselord">Qadiran Horselord</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 12</Link>, <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 42</Link><br/>The traditions of the Qadiran horselords are now spread throughout Qadira and the lands beyond in the Inner Sea region, but they originated among the horse-breeders and mounted-combat specialists of the <Link to="/rule/al_zabriti">Al-Zabriti</Link>; the name "horselord" was applied by outlanders. Qadiran horselords pride themselves on their mobility and endurance - qualities also found in the breed of horses they ride. While they don't command the same presence as a host of Lastwall cavalry, Qadiran horselords can get to a battleground in half the time and on a third of the rations. In battle, they are skirmishers, ducking in and out of combat with brutal, precise slashes of their scimitars.</p>
<Ability id="arc-cavalier-qadiran_horselord-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-cavalier-qadiran_horselord-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiencies</Pair>
<Pair title="Info">A Qadiran horselord is proficient with all simple and martial weapons, with light and medium armor, and with shields (except tower shields).</Pair>
</Ability>
<Ability id="arc-cavalier-qadiran_horselord-mount-ex" icon={["info"]}>
<Pair single id="arc-cavalier-qadiran_horselord-mount-ex">Mount (Ex)</Pair>
<Pair hl title="Alters">Mount</Pair>
<Pair title="Info">A Qadiran horselord must select a <Link to="/companion/horse">horse</Link> or <Link to="/companion/pony">pony</Link> as his mount. At the GM's discretion, a different mount can be selected.</Pair>
</Ability>
<Ability id="arc-cavalier-qadiran_horselord-desert-wind-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-qadiran_horselord-desert-wind-ex">Desert Wind (Ex)</Pair>
<Pair hl title="Replaces">Tactician</Pair>
<Pair title="Passive Ability">The speed of a Qadiran horselord's mount increases by 5 feet, plus an additional 5 feet for every 5 cavalier levels he possesses.</Pair>
</Ability>
<Ability id="arc-cavalier-qadiran_horselord-desert-mastery-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-qadiran_horselord-desert-mastery-ex">Desert Mastery (Ex)</Pair>
<Pair hl title="Replaces">Cavalier's charge</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A Qadiran horselord gains <Link to="/ability/favored_terrain">favored terrain</Link> (desert) as per the <Link to="/class/ranger">ranger</Link> ability of the same name.</Pair>
<Pair title="Passive Ability">His mount gains all the benefits of the favored terrain ability.</Pair>
<Pair title="At 8th Level">The bonus on initiative and skill checks increases by 2, but the Qadiran horselord never selects additional favored terrains.</Pair>
<Pair title="At 13th Level">The bonuses increase by 2 again.</Pair>
<Pair title="At 18th Level">The bonuses increase by 2 once again.</Pair>
</Ability>
<Ability id="arc-cavalier-qadiran_horselord-sand-storm-ex" icon={["stairs-goal","upgrade","mailed-fist"]}>
<Pair single id="arc-cavalier-qadiran_horselord-sand-storm-ex">Sand Storm (Ex)</Pair>
<Pair hl title="Replaces">The bonus feat gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A Qadiran horselord gains the benefits of the <Link to="/feat/mobility">Mobility</Link> feat so long as he is mounted. Additionally, he deals double damage while using a one-handed slashing weapon from the back of a charging mount, as though using a <Link to="/eq-weapon/lance">lance</Link>.</Pair>
</Ability>
<Ability id="arc-cavalier-qadiran_horselord-as-one-ex" icon={["stairs-goal","upgrade","mailed-fist"]}>
<Pair single id="arc-cavalier-qadiran_horselord-as-one-ex">As One (Ex)</Pair>
<Pair hl title="Replaces">Greater tactician</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A Qadiran horselord gains the benefits of the <Link to="/feat/spring_attack">Spring Attack</Link> feat so long as he is mounted. He uses his mount's movement for this action, and neither he nor his mount provokes attacks of opportunity from the target. When he makes a single attack with a one-handed slashing weapon in this way, the attack deals 1d6 additional points of damage.</Pair>
<Pair title="At 17th Level">The bonus damage increases to 3d6.</Pair>
<Pair title="Special">This ability counts as the Spring Attack feat for the purpose of meeting feat prerequisites, but only while the Qadiran horselord is mounted.</Pair>
</Ability>
<Ability id="arc-cavalier-qadiran_horselord-sand-scourge-ex" icon={["stairs-goal","mailed-fist"]}>
<Pair single id="arc-cavalier-qadiran_horselord-sand-scourge-ex">Sand Scourge (Ex)</Pair>
<Pair hl title="Replaces">Master tactician</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Full-Round Action">A Qadiran horselord and his mount can make a tactical rush through enemy ranks. His mount can move up to twice its normal speed in a straight line. The Qadiran horselord can make a single attack against each creature he threatens during his mount's movement, up to his normal number of attacks per round. These attacks use his full base attack bonus and take a -2 penalty; this is not a charge, and these attacks deal normal damage. The Qadiran horselord provokes attacks of opportunity during this movement, but his mount does not.</Pair>
</Ability>
</>};
const _saurian_champion = {title: "Saurian Champion", jsx: <><h2 id="arc-cavalier-saurian_champion-saurian-champion">Saurian Champion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 45</Link><br/>These primeval cavaliers idolize dinosaurs as apex predators and value them as powerful, oversized mounts.</p>
<Ability icon={["skills"]} id="arc-cavalier-saurian_champion-undefined">
<Pair id="arc-cavalier-saurian_champion-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="arc-cavalier-saurian_champion-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-cavalier-saurian_champion-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Weapon and armor proficiencies</Pair>
<Pair title="Info">A saurian champion does not gain proficiency with medium or heavy armor.</Pair>
</Ability>
<Ability id="arc-cavalier-saurian_champion-savage-combatant-ex" icon={["broken-shield"]}>
<Pair single id="arc-cavalier-saurian_champion-savage-combatant-ex">Savage Combatant (Ex)</Pair>
<Pair title="Info">A saurian champion does not rely on lethal charges or firing from afar as more "civilized" cavaliers do, preferring to rampage among his foes instead. Saurian champions do not deal double damage when <Link to="/rule/charging">charging</Link> with a <Link to="/eq-weapon/lance">lance</Link> (or similar weapon) while mounted. While mounted, a saurian champion cannot attack with ranged weapons other than thrown weapons.</Pair>
</Ability>
<Ability id="arc-cavalier-saurian_champion-titanic-challenge-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-cavalier-saurian_champion-titanic-challenge-ex">Titanic Challenge (Ex)</Pair>
<Pair hl title="Alters">Challenge</Pair>
<Pair title="Ability">A saurian champion considers only the largest creatures a true challenge. His <em>titanic challenge</em> adds only <Link to="/misc/half">half</Link> his level on damage rolls against Medium or smaller creatures, but he adds a +1 bonus on attack rolls against a target of his <em>challenge</em> that is at least two size categories larger than himself (Huge for Medium saurian champions) and a +2 bonus on attack rolls against a Colossal target of his <em>challenge.</em></Pair>
</Ability>
<Ability id="arc-cavalier-saurian_champion-wild-warrior-ex" icon={["broken-shield"]}>
<Pair single id="arc-cavalier-saurian_champion-wild-warrior-ex">Wild Warrior (Ex)</Pair>
<Pair hl title="Replaces">Order</Pair>
<Pair title="Info">A saurian champion hails from primeval lands where the civilized orders hold little sway. He does not select an <em>order</em> or gain any <em>order</em>-related benefits.</Pair>
</Ability>
<Ability id="arc-cavalier-saurian_champion-dinosaur-mount-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-saurian_champion-dinosaur-mount-ex">Dinosaur Mount (Ex)</Pair>
<Pair hl title="Replaces">Tactician, greater tactician, master tactician</Pair>
<Pair hl title="Alters">Mount</Pair>
<Pair title="Ability"><p>A saurian champion bonds with a dinosaur companion that willingly serves as his mount. This mount functions as a cavalier's normal mount with the following adjustments:</p>
<ul>
<li>The saurian champion's mount must be a dinosaur (see <Link to="/ability/druid_companions">druid companions</Link> for all the available options).</li>
<li>The saurian champion can ride mounts of his size category and larger, rather than only those of a larger size.</li>
<li>Increase the mount's Strength score by 8 for the purpose of determining its carrying capacity.</li>
<li>Whenever an ability or feat allows the saurian champion's mount to make a hoof attack, the mount can make a claw or bite attack instead.</li>
</ul>
</Pair>
</Ability>
<Ability id="arc-cavalier-saurian_champion-nimble-rider-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-cavalier-saurian_champion-nimble-rider-ex">Nimble Rider (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A saurian champion gains a +1 dodge bonus to AC when mounted. Anything that causes the saurian champion to lose his Dexterity bonus to AC also causes him to lose this dodge bonus.</Pair>
<Pair title="At 8th Level">The bonus becomes +2.</Pair>
<Pair title="At 14th Level">The bonus increases to +3.</Pair>
<Pair title="At 20th Level">The bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-cavalier-saurian_champion-fierce-devotion-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-saurian_champion-fierce-devotion-ex">Fierce Devotion (Ex)</Pair>
<Pair hl title="Replaces">Banner</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A saurian champion's mount gains the <em>devotion</em> ability (instead of at 6th level), and its effects also apply against emotion and fear effects. The mount is immune to the effects of <Link to="/umr/unnatural_aura">unnatural aura</Link>.</Pair>
</Ability>
<Ability id="arc-cavalier-saurian_champion-quick-rider-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-saurian_champion-quick-rider-ex">Quick Rider (Ex)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A saurian champion can attempt <Link to="/skill/ride">Ride</Link> checks to fast mount or fast dismount his mount even if it's more than one size category larger than himself.</Pair>
</Ability>
<Ability id="arc-cavalier-saurian_champion-titanic-mount-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-saurian_champion-titanic-mount-ex">Titanic Mount (Ex)</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Passive Ability">A saurian champion's mount increases in size by one category (even if the base creature normally does not reach that size). The creature receives the appropriate size penalty on attack rolls and to AC (-1 if growing to Large or -2 if growing to Huge) and a -2 penalty to Dexterity (to a minimum Dexterity score of 1), its base damage increases by <Link to="/misc/one_size_category">one size category</Link>, and its reach increases to 10 feet (if it wasn't already). It also gains a +2 size bonus to its Strength and Constitution score.</Pair>
<Pair title="At 12th Level">The bonus to Strength becomes +4 and his mount's natural armor bonus increases by +1.</Pair>
<Pair title="At 14th Level">The Strength bonus becomes +6, the Constitution bonus becomes +4, and the natural armor now increases by +2.</Pair>
<Pair title="At 15th Level">The mount's reach increases to 15 feet.</Pair>
<Pair title="At 16th Level">The Strength bonus becomes +8, and the natural armor now increases by +3.</Pair>
<Pair title="At 18th Level">The Strength bonus becomes +10, the Constitution bonus becomes +6, and the natural armor now increases by +4.</Pair>
</Ability>
<Ability id="arc-cavalier-saurian_champion-primeval-devotion-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-cavalier-saurian_champion-primeval-devotion-ex">Primeval Devotion (Ex)</Pair>
<Pair hl title="Replaces">Greater banner</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">The bonus on saving throws provided by the mount's <em>devotion</em> ability increases by 2. In addition, the mount adds half this bonus to other saving throws.</Pair>
</Ability>
</>};
const _sister_in_arms = {title: "Sister-in-Arms", jsx: <><h2 id="arc-cavalier-sister_in_arms-sister-in-arms">Sister-in-Arms</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 83</Link><br/>Some of the most charismatic <Link to="/rule/gray_maidens">Gray Maidens</Link> combine their devotion to their sisters with the intense tactical training they received, learning to perfectly direct their companions and inspiring them to survive and emerge victorious. Known as sisters-in-arms, these scarred soldiers are highly respected by their fellow Maidens for their dedication.</p>
<p>In the aftermath of Ileosa's fall, groups of Maidens forged a tight-knit family from their fellow survivors, knowing that nobody else truly understood the horrors they had endured - or had been forced to commit. Even after being accepted back into Korvosan society or fleeing the reach of the city's justice, the Gray Maidens' sisterhood has endured.</p>
<p>Sisters-in-arms are almost never neutral on the subject of Queen Ileosa; some still hold true to the cruel queen's ideals and lead bands of like-minded veterans, while others have forsaken Ileosa in favor of total devotion to their fellow survivors. Of the latter, the majority support the Scarlet Rose, whether as social and emotional support for their recovering sisters, as field commanders for military endeavors, or as private adventurers with ties to the order. Loyalist sisters-in-arms, by contrast, are almost always plotting to reclaim Korvosa.</p>
<Ability id="arc-cavalier-sister_in_arms-half-hearted-challenge-ex" icon={["broken-shield"]}>
<Pair single id="arc-cavalier-sister_in_arms-half-hearted-challenge-ex">Half-hearted Challenge (Ex)</Pair>
<Pair hl title="Alters">Challenge</Pair>
<Pair title="Info">Sisters-in-arms vigilantly protect their allies, weakening their focus on their challenged foe. A sister-in-arms adds only <Link to="/misc/half">half</Link> her cavalier level (minimum 1) to damage rolls against her <em>challenge</em> target.</Pair>
</Ability>
<Ability id="arc-cavalier-sister_in_arms-maidens-order-ex" icon={["info","stairs-goal"]}>
<Pair single id="arc-cavalier-sister_in_arms-maidens-order-ex">Maiden's Order (Ex)</Pair>
<Pair hl title="Replaces">Mount</Pair>
<Pair hl title="Alters">Order</Pair>
<Pair title="Ability"><p>All sisters-in-arms share a talent for aiding and inspiring their fellow Gray Maidens, strengthened by training and the bond of sisterhood. Generally, those loyal to Queen Ileosa refer to their pledge as the <em>order of the fanged crown,</em> while those who have forsaken the cruel queen call it the <em>order of the scarlet rose.</em> In either case, the benefits are the same.</p>
<p>A sister-in-arms does not choose an <em>order.</em> Instead, she is considered to belong to both the <Link to="/order/order_of_the_dragon">order of the dragon</Link> and the <Link to="/order/order_of_the_lion">order of the lion</Link>, and she gains all of the benefits of both orders (including additional class skills and conditional skill bonuses, additional <em>challenge</em> benefits, and order abilities) at the appropriate levels.</p>
</Pair>
<Pair title="Choice">A sister-in-arms chooses which order's edicts she must follow; generally, those of the fanged crown choose the order of the lion's edicts, while those of the scarlet rose choose the order of the dragon's edicts.</Pair>
</Ability>
<Ability id="arc-cavalier-sister_in_arms-devoted-defender-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-sister_in_arms-devoted-defender-ex" flavor="Sisters-in-arms cling to their fellow Gray Maidens as closely as family and protect them with intense devotion.">Devoted Defender (Ex)</Pair>
<Pair hl title="Replaces">Cavalier's charge</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A sister-in-arms gains <Link to="/feat/bodyguard">Bodyguard</Link> as a bonus feat (she does not need to meet the feat's prerequisite).</Pair>
</Ability>
<Ability id="arc-cavalier-sister_in_arms-maidens-loyalty-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-cavalier-sister_in_arms-maidens-loyalty-ex" flavor="The loyalty of a sister-in-arms is absolute.">Maiden's Loyalty (Ex)</Pair>
<Pair hl title="Replaces">Expert trainer</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A sister-in-arms gains a bonus on Will saves against any effect that would compel her to attack or betray her allies. This bonus is equal to 1 + one-fourth her cavalier level.</Pair>
</Ability>
<Ability id="arc-cavalier-sister_in_arms-dedicated-commander-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-sister_in_arms-dedicated-commander-ex" flavor="A sister-in-arms can inspire and direct allies with great efficiency.">Dedicated Commander (Ex)</Pair>
<Pair hl title="Replaces">Mighty charge, supreme charge</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">The sister-in-arms can use <em>lion's call</em> (lion) or <em>strategy order</em> (dragon) as a <strong className="hl">move action</strong>, rather than as a standard action.</Pair>
<Pair title="At 20th Level">She can use <em>act as one</em> (dragon), <em>lion's call</em> (lion), or <em>strategy order</em> (dragon) as a <strong className="hl">swift</strong> or <strong className="hl">move action</strong>.</Pair>
</Ability>
</>};
const _spellscar_drifter = {title: "Spellscar Drifter", jsx: <><h2 id="arc-cavalier-spellscar_drifter-spellscar-drifter">Spellscar Drifter</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 45</Link><br/>The Spellscar Desert is a dangerous wasteland into which few venture without a guide. Spellscar drifters have made themselves at home in these badlands. When not scouring the desert for forgotten treasures or magic hidden by the region's shifting magic-dead zones, a Spellscar drifter might hire himself out as a guide, bodyguard, or assassin. There are even a few Spellscar drifters who are temporarily deputized by the Grand Duchy of Alkenstar to perform law enforcement tasks beyond the reach of the city's normal constabulary. Spellscar drifters are self-reliant and always keep their firearms loaded - in the Spellscar Desert, a rider with a slow draw doesn't live long.</p>
<Ability id="arc-cavalier-spellscar_drifter-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-cavalier-spellscar_drifter-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiencies</Pair>
<Pair title="Info">Spellscar drifters are proficient with all simple and martial weapons, the <Link to="/eq-weapon/whip">whip</Link>, and with all <Link to="/main/equipment_firearms">firearms</Link>. They are proficient with all light armor.</Pair>
</Ability>
<Ability id="arc-cavalier-spellscar_drifter-have-gun" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-spellscar_drifter-have-gun">Have Gun</Pair>
<Pair hl title="Replaces">Tactician</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The Spellscar drifter gains <Link to="/feat/amateur_gunslinger">Amateur Gunslinger</Link> and <Link to="/feat/gunsmithing">Gunsmithing</Link> as bonus feats. The Spellscar drifter uses his Charisma modifier (minimum 1) in place of his Wisdom modifier when determining his maximum grit points and for any other abilities which use grit. Additionally, he also gains a battered gun identical to the one gained by the <Link to="/class/gunslinger">gunslinger</Link>.</Pair>
</Ability>
<Ability id="arc-cavalier-spellscar_drifter-daring-deeds-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-spellscar_drifter-daring-deeds-ex">Daring Deeds (Ex)</Pair>
<Pair hl title="Replaces">Cavalier's charge</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Choice">A Spellscar drifter gains <Link to="/feat/rapid_reload">Rapid Reload</Link> as a bonus feat. The Spellscar drifter must choose a firearm to associate with this feat. Additionally, the Spellscar drifter can select one additional <Link to="/ability/gunslinger_deeds">1st-level gunslinger deed</Link> which he can use with his Amateur Gunslinger feat.</Pair>
</Ability>
<Ability id="arc-cavalier-spellscar_drifter-worn-banner-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-spellscar_drifter-worn-banner-ex">Worn Banner (Ex)</Pair>
<Pair hl title="Alters">Banner</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A Spellscar drifter can choose to use his hat as his banner. If the drifter does not wear a hat, another iconic accessory - such as an eyemask, bandana, or distinguishing coat - can instead serve as his banner. In all other ways, this ability functions as the <em>banner</em> cavalier ability.</Pair>
</Ability>
<Ability id="arc-cavalier-spellscar_drifter-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-spellscar_drifter-bonus-feats">Bonus Feats</Pair>
<Pair hl title="Replaces">The cavalier's normal bonus feats</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A Spellscar drifter gains a bonus feat in addition to those gained from normal advancement. This bonus feat must be either a <Link to="/main/combat_feat">combat feat</Link> or a <Link to="/main/grit_feat">grit feat</Link>, and the Spellscar drifter must meet the prerequisites as normal.</Pair>
<Pair title="At 12th Level">The cavalier gains another bonus feat, following the restrictions above.</Pair>
<Pair title="At 18th Level">The Spellscar drifter gains a third such feat.</Pair>
</Ability>
<Ability id="arc-cavalier-spellscar_drifter-notorious-deeds-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-spellscar_drifter-notorious-deeds-ex">Notorious Deeds (Ex)</Pair>
<Pair hl title="Replaces">Greater tactician</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Choice">A Spellscar drifter can select two additional gunslinger deeds which he can use with his Amateur Gunslinger feat. The Spellscar drifter can choose one deed from the list of deeds available to 3rd-level gunslingers and one from the list available to 7th-level gunslingers.</Pair>
</Ability>
<Ability id="arc-cavalier-spellscar_drifter-old-reliable-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-spellscar_drifter-old-reliable-ex">Old Reliable (Ex)</Pair>
<Pair hl title="Replaces">Mighty charge</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">Whenever a Spellscar drifter declares a <em>challenge,</em> the threat range of the Spellscar drifter's firearm is doubled against the target of his <em>challenge.</em> This increase only affects one weapon and does not stack with other effects that increase the threat range of the weapon.</Pair>
<Pair title="Ability">If the Spellscar drifter rolls a misfire during his <em>challenge,</em> the Spellscar drifter can spend 1 grit point to reroll the attack roll. The Spellscar drifter must accept the results of the second roll, even if it is worse.</Pair>
</Ability>
<Ability id="arc-cavalier-spellscar_drifter-spell-severed-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-cavalier-spellscar_drifter-spell-severed-ex">Spell Severed (Ex)</Pair>
<Pair hl title="Replaces">Demanding challenge</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">A Spellscar drifter becomes permanently marked by long exposure to the Spellscar Desert. The Spellscar drifter gains spell resistance equal to 10 + his character level.</Pair>
<Pair title="Ability">The Spellscar drifter can drop this spell resistance for 1 round as a <strong className="hl">standard action</strong>, or he can spend 1 grit point to drop it as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-cavalier-spellscar_drifter-infamous-deeds-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-spellscar_drifter-infamous-deeds-ex">Infamous Deeds (Ex)</Pair>
<Pair hl title="Replaces">Master tactician</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Choice">A Spellscar drifter can select two additional gunslinger deeds which he can use with his Amateur Gunslinger feat. The Spellscar drifter can choose one deed from the list of deeds available to 7th-level gunslingers and one from the list available to 11th-level gunslingers.</Pair>
</Ability>
<Ability id="arc-cavalier-spellscar_drifter-tough-as-nails-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-cavalier-spellscar_drifter-tough-as-nails-ex">Tough as Nails (Ex)</Pair>
<Pair hl title="Replaces">Supreme charge</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Choice">A Spellscar drifter is able to select three additional deeds for use with his Amateur Gunslinger feat - two from the list of deeds available to 15th-level gunslingers, and one from the list available to 19th-level gunslingers.</Pair>
<Pair title="Passive Ability">If the Spellscar drifter confirms a critical hit on an attack made with a firearm, the target is <Link to="/misc/stunned">stunned</Link> for 1d4 rounds. A successful Will saving throw (DC = 10 + the Spellscar drifter's base attack bonus) reduces this effect to <Link to="/misc/staggered">staggered</Link> instead of stunned.</Pair>
</Ability>
</>};
const _standard_bearer = {title: "Standard Bearer", jsx: <><h2 id="arc-cavalier-standard_bearer-standard-bearer">Standard Bearer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 39</Link><br/>Not all cavaliers are content to ride at the head of a charge, leading from the front and facing down their enemies directly. Some prefer to stand away from the fray, their banners a beacon shining brightly over the battlefield, rallying their troops to victory. The standard bearer employs the banner of his order, his lord, or his own house to raise the spirits of his allies and warns enemies of impending doom.</p>
<Ability id="arc-cavalier-standard_bearer-banner-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-standard_bearer-banner-ex">Banner (Ex)</Pair>
<Pair hl title="Replaces">Mount</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A standard bearer gains the <em>banner</em> ability. This ability is identical to the standard cavalier's <em>banner</em> ability, except that the morale bonus on saving throws against fear effects is equal to 2 + <Link to="/misc/one_fifth">one-fifth</Link> your cavalier level, and the morale bonus on attack rolls made as part of a charge is equal to 1 + one-fifth your cavalier level.</Pair>
</Ability>
<Ability id="arc-cavalier-standard_bearer-mount-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-standard_bearer-mount-ex">Mount (Ex)</Pair>
<Pair hl title="Replaces">Banner</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A standard bearer gains the service of a loyal and trusted mount. This mount is identical in all ways to the standard cavalier's mount.</Pair>
</Ability>
<Ability id="arc-cavalier-standard_bearer-banner-of-solace-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-cavalier-standard_bearer-banner-of-solace-ex" flavor="A standard bearer's banner becomes an even more potent symbol of protection and inspiration to those around him.">Banner of Solace (Ex)</Pair>
<Pair hl title="Replaces">Mighty charge</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Full-Round Action">Once per day, while his banner is displayed, the standard bearer can wave it through the air, granting all allies within 60 feet <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to 1/2 his cavalier level, and a +2 morale bonus on their next damage rolls. The temporary hit points last for 10 minutes or until depleted, whichever occurs first.</Pair>
<Pair title="At 15th Level">The morale bonus becomes +3.</Pair>
<Pair title="At 19th Level">The morale bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-cavalier-standard_bearer-awesome-pennon-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-cavalier-standard_bearer-awesome-pennon-ex" flavor="A standard bearer's banner has become a powerful rallying point to his allies, and a bane to his foes.">Awesome Pennon (Ex)</Pair>
<Pair hl title="Replaces">Supreme charge</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Whenever his banner is visible, allies of the standard bearer within 60 feet gain a +1 morale bonus on attack rolls, immunity to fear effects, and a +3 morale bonus on saving throws against mind-affecting effects.</Pair>
</Ability>
</>};
const _strategist = {title: "Strategist", jsx: <><h2 id="arc-cavalier-strategist-strategist">Strategist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 39</Link><br/>Some cavaliers make a lifelong mission out of their exceptional ability to direct troops on the battlefield, combining tactical insight with a preternatural skill at improving the teamwork of their allies in order to win the day. Such strategists are masters at learning the strengths and weaknesses of those they fight alongside, and at employing those observations at the most opportune moments. The best of them are also skilled at determining the strengths and weaknesses of their enemies, as well as at countering some of those strengths with their own formidable abilities.</p>
<Ability id="arc-cavalier-strategist-tactician-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-strategist-tactician-ex">Tactician (Ex)</Pair>
<Pair hl title="Alters">Tactician</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">As the cavalier class feature, except that a strategist can use this ability once per day, plus one additional time for every four levels after 1st (to a maximum of five times per day at 17th level).</Pair>
</Ability>
<Ability id="arc-cavalier-strategist-drill-instructor-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-strategist-drill-instructor-ex">Drill Instructor (Ex)</Pair>
<Pair hl title="Replaces">Expert trainer</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A strategist learns to train his fellow adventurers in the nuances of squad combat. By spending 10 minutes and expending 1 use of his <em>challenge</em> ability, the strategist can grant the use of a <Link to="/main/teamwork_feat">teamwork feat</Link> that he knows to up to four of his allies, similar to the <em>tactician</em> ability. As with <em>tactician,</em> allies need not meet the prerequisites of the granted feat, but they retain the use of this feat for 10 minutes plus 1 minute for every two levels the cavalier possesses, as long as the cavalier is visible and can be heard by his allies.</Pair>
<Pair title="Special">If the cavalier falls unconscious or cannot be both seen and heard, his allies lose the benefit of the granted feat until the condition is remedied.</Pair>
</Ability>
<Ability id="arc-cavalier-strategist-tactical-advantage-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-strategist-tactical-advantage-ex">Tactical Advantage (Ex)</Pair>
<Pair hl title="Replaces">Greater banner</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Free Action">Whenever a strategist uses his <em>tactician</em> ability to grant the use of a teamwork feat to his allies, he can move up to his speed either before or after granting the feat. This movement provokes attacks of opportunity normally.</Pair>
</Ability>
<Ability id="arc-cavalier-strategist-strategic-supremacy-ex" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="arc-cavalier-strategist-strategic-supremacy-ex">Strategic Supremacy (Ex)</Pair>
<Pair hl title="Replaces">The cavalier's 18th-level bonus feat</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Ability">A strategist gains the ability not only to improve his allies' abilities, but also to disrupt the teamwork of his enemies. Whenever the strategist uses the <em>tactician</em> ability, he can choose to cancel out the effects of one teamwork feat employed by any of his opponents within 30 feet instead of granting the use of a teamwork feat to his allies.</Pair>
</Ability>
</>};
const _verdivant = {title: "Verdivant", jsx: <><h2 id="arc-cavalier-verdivant-verdivant">Verdivant</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 15</Link><br/>Some <Link to="/race/vine_leshy">vine leshy</Link> spirits are vibrant enough to project this animus beyond their own bodies. Called verdivants, these leshys explore the world atop unique companions formed from the leshy's vines and animated by their nearly boundless energy. Both mount and rider brim with new growth, sporting bright flowers, whipping tendrils, clouds of pollen, and other manifestations charged with nature's power. This archetype is typically available only to vine leshys, but with the GM's permission, other races can take it as well.</p>
<Ability id="arc-cavalier-verdivant-plant-mount-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-verdivant-plant-mount-ex">Plant Mount (Ex)</Pair>
<Pair hl title="Replaces">Expert trainer</Pair>
<Pair hl title="Alters">Mount</Pair>
<Pair title="Ability"><p>A verdivant buds off and cultivates his vines into an animal form, imbuing them with limited intelligence. The verdivant selects a mount appropriate for his size as normal, but this mount is a plant with the <Link to="/subtype/leshy">leshy</Link> subtype and has the same immunities as a vine leshy.</p>
<p>A verdivant can absorb and regrow his plant mount. This can either replace a slain mount or change a mount's form; the new form must still be a suitable mount the verdivant is capable of riding. Either function takes 1 week, after which the newly regrown mount immediately benefits from its special abilities.</p>
</Pair>
<Pair title="At 4th Level">Regrowing a mount takes only 24 hours.</Pair>
</Ability>
<Ability id="arc-cavalier-verdivant-effloresce" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-verdivant-effloresce">Effloresce</Pair>
<Pair hl title="Replaces">Tactician, banner, greater tactician, greater banner, master tactician, bonus feats</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">3 times/day + 1 per four cavalier levels beyond 2nd<ByLevelPop levels={[[2,3],[6,4],[10,5],[14,6],[18,7]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">A verdivant can create <em>efflorescences,</em> explosive growths fed by his animating spirit. A verdivant can apply <em>effloresces</em> to himself, or his plant mount if it is adjacent. <em>Efflorescences</em> last for 1 round per cavalier level, and a verdivant can have at most two <em>efflorescences</em> in effect at a time. A verdivant must meet the level requirement to use one of these abilities.</Pair>
<Pair title="Free Action">A verdivant can end an <em>efflorescence</em> during his turn.</Pair>
<Pair title="At 6th Level">A verdivant can effloresce as a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 12th Level">A verdivant can effloresce as a <strong className="hl">swift action</strong>, and he can have two <em>efflorescences</em> in effect simultaneously.</Pair>
<Pair title="At 17th Level">A verdivant can effloresce twice as part of the same action.</Pair>
</Ability>
<Ability id="arc-cavalier-verdivant-shieldvines-ex" extraClasses="subAbility" icon={["armor-upgrade","abstract-091"]}>
<Pair single id="arc-cavalier-verdivant-shieldvines-ex">Shieldvines (Ex)</Pair>
<Pair title="At 2nd Level">Allies within 10 feet do not provoke attacks of opportunity when leaving threatened squares.</Pair>
<Pair title="At 9th Level">This increases to 20 feet.</Pair>
</Ability>
<Ability id="arc-cavalier-verdivant-floatflower-ex" extraClasses="subAbility" icon={["upgrade","abstract-091"]}>
<Pair single id="arc-cavalier-verdivant-floatflower-ex">Floatflower (Ex)</Pair>
<Pair title="At 2nd Level">Allies within 10 feet ignore the effects of nonmagical <Link to="/rule/difficult_terrain">difficult terrain</Link>.</Pair>
<Pair title="At 9th Level">They also gain the effects of <Link to="/spell/air_walk">air walk</Link> while within 10 feet of the verdivant.</Pair>
</Ability>
<Ability id="arc-cavalier-verdivant-innervating-pollen-ex" extraClasses="subAbility" icon={["upgrade","armor-upgrade","abstract-091"]}>
<Pair single id="arc-cavalier-verdivant-innervating-pollen-ex">Innervating Pollen (Ex)</Pair>
<Pair title="At 5th Level">The verdivant and his allies within 30 feet gain a competence bonus either on attack rolls or to saving throws (the verdivant's choice; all allies gain the same benefit) equal to <Link to="/misc/one_third">one-third</Link> the verdivant's cavalier level.</Pair>
</Ability>
<Ability id="arc-cavalier-verdivant-bolsterbloom-su" extraClasses="subAbility" icon={["heart-plus","abstract-091"]}>
<Pair single id="arc-cavalier-verdivant-bolsterbloom-su">Bolsterbloom (Su)</Pair>
<Pair title="At 5th Level">The verdivant and his allies within 30 feet gain fast healing 1.</Pair>
<Pair title="At 14th Level">This becomes fast healing 3.</Pair>
<Pair title="At 17th Level">This becomes fast healing 4.</Pair>
<Pair title="At 9th Level">This becomes fast healing 2.</Pair>
</Ability>
<Ability id="arc-cavalier-verdivant-charged-blossoms-su" extraClasses="subAbility" icon={["armor-upgrade","abstract-091"]}>
<Pair single id="arc-cavalier-verdivant-charged-blossoms-su">Charged Blossoms (Su)</Pair>
<Pair title="At 9th Level">Choose an energy type: acid, cold, electricity, or fire. The verdivant and his allies within 10 feet gain energy resistance 10 to the chosen energy type.</Pair>
<Pair title="At 14th Level">This affects allies within 20 feet, and the energy resistance increases to 20.</Pair>
</Ability>
<Ability id="arc-cavalier-verdivant-slipstrands-su" extraClasses="subAbility" icon={["upgrade","abstract-091"]}>
<Pair single id="arc-cavalier-verdivant-slipstrands-su">Slipstrands (Su)</Pair>
<Pair title="At 9th Level">The verdivant and his allies within 10 feet are affected by <Link to="/spell/freedom_of_movement">freedom of movement</Link>.</Pair>
<Pair title="At 17th Level">This increases to 20 feet.</Pair>
</Ability>
<Ability id="arc-cavalier-verdivant-ambrosia-su" extraClasses="subAbility" icon={["armor-upgrade","abstract-091"]}>
<Pair single id="arc-cavalier-verdivant-ambrosia-su">Ambrosia (Su)</Pair>
<Pair title="At 14th Level">The <em>efflorescence</em> temporarily suppresses enchantments, transmutations, and curses on the verdivant and his allies within 30 feet, as <Link to="/spell/break_enchantment">break enchantment</Link> with a caster level equal to the verdivant's cavalier level. Affected creatures ignore the effects of such conditions for the duration of the <em>efflorescence,</em> after which the conditions' full effects resume. The duration of suppressed conditions continues to elapse while the condition is suppressed.</Pair>
</Ability>
<Ability id="arc-cavalier-verdivant-luckleaf-su" extraClasses="subAbility" icon={["rolling-dices","abstract-091"]}>
<Pair single id="arc-cavalier-verdivant-luckleaf-su">Luckleaf (Su)</Pair>
<Pair title="At 14th Level">When attempting a d20 roll, allies of the verdivant within 30 feet of him can roll twice and use the better result; each ally can benefit from this ability only once per <em>efflorescence.</em></Pair>
<Pair title="Special">Luckleaf can be activated once per minute.</Pair>
</Ability>
<Ability id="arc-cavalier-verdivant-sinuous-steps-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-cavalier-verdivant-sinuous-steps-ex">Sinuous Steps (Ex)</Pair>
<Pair hl title="Alters">Cavalier's charge</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A verdivant and his plant mount gain the <Link to="/ability/woodland_stride">woodland stride</Link> druid class feature. In addition, they do not take any penalty to AC after making a charge attack.</Pair>
</Ability>
</>};
const _vermin_tamer = {title: "Vermin Tamer", jsx: <><h2 id="arc-cavalier-vermin_tamer-vermin-tamer">Vermin Tamer</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands pg. 17</Link><br/>Due to the strange terrain, the lack of sunlight, and numerous other hazards, keeping a traditional mount in the Darklands can prove difficult. Cavaliers native to or traveling the region may choose to tame local creatures instead. Those who can overcome their revulsion and distrust of Sekamina's strange fauna often find that such partnerships with native creatures serve both rider and mount well. While these mounts may be harder to handle than typical mounts, their versatility and adaptations prove indispensable.</p>
<Ability id="arc-cavalier-vermin_tamer-darklands-mount-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-vermin_tamer-darklands-mount-ex">Darklands Mount (Ex)</Pair>
<Pair hl title="Alters">Mount</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>A vermin tamer chooses a creature native to the Darklands as his mount. This functions as a cavalier's mount. He can choose a <Link to="/companion/giant_beetle">giant beetle</Link>, <Link to="/companion/giant_centipede">giant centipede</Link>, <Link to="/companion/giant_gecko">giant gecko</Link>, <Link to="/companion/giant_slug">giant slug</Link>, or <Link to="/companion/giant_spider">giant spider</Link> as his mount. These mounts (except the giant gecko) and the rules for vermin companions are detailed <Link to="/ability/druid_companions">here, under Vermin Companions</Link>.</p>
<p>The selected mount is combat trained. The vermin trainer does not take an armor check penalty on Ride checks while riding his mount. If the vermin tamer's starting mount is large enough to act as a mount, it gains <Link to="/feat/light_armor_proficiency">Light Armor Proficiency</Link> as a bonus feat. If the selected animal companion is too small to act as a proper mount, then the vermin tamer gains <Link to="/feat/undersized_mount">Undersized Mount</Link> as a bonus feat.</p>
</Pair>
</Ability>
<Ability id="arc-cavalier-vermin_tamer-stuck-in-the-saddle-ex" icon={["upgrade"]}>
<Pair single id="arc-cavalier-vermin_tamer-stuck-in-the-saddle-ex" flavor="A practiced vermin tamer can remain steady in the saddle even in unconventional situations.">Stuck in the Saddle (Ex)</Pair>
<Pair hl title="Replaces">Expert training</Pair>
<Pair title="At 4th Level">He gains a +4 circumstance bonus on any checks to stay in the saddle when his mount is climbing walls or flying.</Pair>
<Pair title="At 8th Level">This bonus increases to +8, and he never falls off his mount when he is rendered unconscious.</Pair>
</Ability>
<Ability id="arc-cavalier-vermin_tamer-disorienting-challenge-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-cavalier-vermin_tamer-disorienting-challenge-ex">Disorienting Challenge (Ex)</Pair>
<Pair hl title="Replaces">Demanding challenge</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">Whenever a vermin tamer declares a <em>challenge,</em> he can confound his target with the erratic movements of his mount. As long as the vermin tamer begins his turn mounted, with his mount climbing or flying at a higher location than his target, the target of his <em>challenge</em> takes a -2 penalty to its AC.</Pair>
</Ability>
</>};
const _wave_rider = {title: "Wave Rider", jsx: <><h2 id="arc-cavalier-wave_rider-wave-rider">Wave Rider</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 47</Link><br/>Throughout the Inner Sea region, wave riders patrol harbors, keeping them safe from dangerous sea creatures and watching for smugglers. The most famous of these is the hippocampus-riding Sea Cavalry of Absalom.</p>
<Ability id="arc-cavalier-wave_rider-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-cavalier-wave_rider-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiencies</Pair>
<Pair title="Info">Wave riders are proficient with all simple and martial weapons and with light and medium armor, but not with shields.</Pair>
</Ability>
<Ability id="arc-cavalier-wave_rider-seafaring-companion" icon={["stairs-goal"]}>
<Pair single id="arc-cavalier-wave_rider-seafaring-companion">Seafaring Companion</Pair>
<Pair hl title="Alters">Mount</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A wave rider gains <Link to="/feat/monstrous_mount">Monstrous Mount</Link> as a bonus feat. The wave rider can use this feat only to select a <Link to="/companion/hippocampus">hippocampus mount</Link>. Otherwise, this ability functions identically to the cavalier's <em>mount</em> ability.</Pair>
</Ability>
</>};
export default {beast_rider:_beast_rider,castellan:_castellan,charger:_charger,circuit_judge:_circuit_judge,constable:_constable,courtly_knight:_courtly_knight,daring_champion:_daring_champion,daring_general:_daring_general,disciple_of_the_pike:_disciple_of_the_pike,drakerider:_drakerider,emissary:_emissary,esquire:_esquire,fell_rider:_fell_rider,first_mothers_fang:_first_mothers_fang,gallant:_gallant,gendarme:_gendarme,ghost_rider:_ghost_rider,green_knight:_green_knight,herald_squire:_herald_squire,honor_guard:_honor_guard,hooded_knight:_hooded_knight,huntmaster:_huntmaster,hussar:_hussar,knight_of_arnisant:_knight_of_arnisant,luring_cavalier:_luring_cavalier,musketeer:_musketeer,oceanrider:_oceanrider,qabarat_outrider:_qabarat_outrider,qadiran_horselord:_qadiran_horselord,saurian_champion:_saurian_champion,sister_in_arms:_sister_in_arms,spellscar_drifter:_spellscar_drifter,standard_bearer:_standard_bearer,strategist:_strategist,verdivant:_verdivant,vermin_tamer:_vermin_tamer,wave_rider:_wave_rider}