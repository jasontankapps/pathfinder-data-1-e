import {IonIcon} from '@ionic/react';
import Header from '../../components/Header';
import Link, {ThLink} from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import Defense from '../../components/monsters/Defense';
import Info from '../../components/monsters/Info';
import Offense from '../../components/monsters/Offense';
import SpellBlock from '../../components/monsters/SpellBlock';
import Stats from '../../components/monsters/Stats';
import Ecology from '../../components/monsters/Ecology';
const _faceless_hulk_ugoroth = {title: "Faceless Hulk (Ugoroth)", jsx: <><p><em>This hairless, leathery giant has no discernible features aside from unsettling whorls across its skin and grotesque, slurping tongues where its face should be.</em></p>
<Header full><span>Faceless Hulk (Ugoroth)</span><span>CR 9</span></Header>
<div className="reduce">
<Info id="monster-faceless_hulk_ugoroth--info" source={[["Pathfinder #110: The Thrushmoor Terror",84]]} xp="6,400" ce large aberration subs={["shapechanger"]} init={0} dv={60} pcp={17} />
<Defense id="monster-faceless_hulk_ugoroth--defense" ac={[18,9,18]} mod="+9 natural, -1 size" hp={[119,"14d8+56"]} fort="+8" ref="+4" will="+11" rockCt dr="10/piercing or slashing" resist="cold 5, fire 5" />
<Offense id="monster-faceless_hulk_ugoroth--offense" sp={40} melee={<>mwk greataxe +18/+13 (3d6+12/&times;3) or 2 slams +17 (1d6+12 plus <Link to="/umr/grab">grab</Link>)</>} ranged="rock +10 (1d8+8)" space={"10"} reach={"10"} specAtt={[["explosive expansion","explosive expansion"]]} bDrain="1d2 Constitution" rockTh="120 ft." />
<SpellBlock id="monster-faceless_hulk_ugoroth--spells-monster-spellblock-1" sla={{"cl":8,"con":"+11","content":[{"constant":true,"content":<Link to="/spell/tongues">tongues</Link>}]}} />
<Stats id="monster-faceless_hulk_ugoroth--stats" atts={[26,11,19,16,11,16]} bab={10} cmb={19} cmbP="+21 bull rush" cmd={29} cmdP="31 vs. bull rush" feats={["Awesome Blow","Cleave","Deceitful","Improved Bull Rush","Iron Will","Power Attack","Throw Anything"]} skills={{"acro":{"b":3},"bluff":{"b":21},"climb":{"b":25}}} racial="+4 Disguise, +8 Escape Artist" lang={["Aq","C"]} sq={<><Link to="/umr/change_shape">change shape</Link> (Large humanoid; <Link to="/spell/alter_self">alter self</Link>), <Link to="/umr/compression">compression</Link>, faceless</>} />
<Ecology id="monster-faceless_hulk_ugoroth--eco-eco" env="any hills or mountains" org="solitary, pair, or tribe (3-12)" treasure={{"S":[["Mw","Wga"]],"final":"other treasure"}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Change Shape (Su)</strong> A faceless hulk can assume the form of a Large humanoid at will but requires 10 uninterrupted minutes to alter its body. Performing this transformation is somewhat painful, but the faceless hulk can maintain its new shape indefinitely once it has achieved that form. It can change back to its true form as a swift action, and it gains a +2 morale bonus on attack rolls, damage rolls, skill checks, and saving throws for 1 round after it does so. A faceless hulk retains its own innate abilities when it assumes its new form and does not gain any of the abilities of the creature it mimics. A faceless hulk gains a +10 bonus on Disguise checks when using this ability.</p>
<p><strong>Explosive Expansion (Su)</strong> In its natural form, a faceless hulk can expand rapidly as a full-round action. It grows one size category larger, pushing back any creature or object in its new space. The faceless hulk can choose which direction (or directions) it expands from its original space, and it can attempt a free <Link to="/rule/bull_rush">bull rush</Link> combat maneuver check against any creatures in these squares of sizes Large or smaller. The faceless hulk uses its increased size (usually Huge) to determine its <Link to="/rule/combat_maneuver_bonus">Combat Maneuver Bonus</Link> for these checks. At the end of its turn, it immediately returns to its original size, though it can choose which squares it occupies when it does so. This ability does not change the faceless hulk's weight.</p>
<p><strong>Faceless (Su)</strong> In its natural form, a faceless hulk has no discernible facial features. It gains a +4 bonus on saving throws made to resist attacks or effects that target the senses. This includes <Link to="/umr/gaze">gaze</Link> attacks, odor-based attacks, sonic attacks, and similar attacks. This bonus does not apply to illusions.</p>
<Header sub>Description</Header>
<p>Ugoroths are monstrous, sadistic beings created by <Link to="/monster/aboleth">aboleths</Link> in their long war against the surface world. Alongside their smaller cousins, the <Link to="/monster/faceless_stalker">faceless stalkers</Link>, they work to destabilize surface-dwelling civilizations from within. During the war, the destruction of the aboleth city Voshgurvaghol left them leaderless and without direction. Though they have long forgotten the beings that created them, faceless hulks continue their original mission, driven only by a hatred for humanity that was molded into their very bodies. Some believe that ugoroths still serve their veiled masters, even without their own knowledge.</p>
<p>Faceless hulks range in height from 10 to 14 feet and weigh anywhere from 1,200 to 1,700 pounds.</p>
<p>Ugoroths have flexible, boneless bodies that resist various forms of attack. While they prefer to forgo armor whenever possible, they typically use whatever weapons and equipment are most common among the race they are disguised as. Though they lack many of the special abilities that make each giant race unique, they have managed to adapt facsimiles of several, enough to pass the scrutiny of all but the most discerning of observers. Some older ugoroths acquire magical items and artifacts to bolster themselves with abilities they would normally lack.</p>
<p>They cannot digest solid food even when they assume the forms of creatures with mouths. Instead, they subsist on liquids, especially blood. In their natural forms, they have three hollow tongues, which they use to penetrate and lap blood from smaller humanoids.</p>
<p>Historians are unsure whether aboleths created the first faceless hulks as part of a larger plot to infiltrate the land-dwelling peoples of Golarion or whether the enlarged faceless stalkers simply evolved from their Medium-sized kin over time. Some scholars of ancient Azlant believe faceless hulks were crafted intentionally to infiltrate the <Link to="/monster/cyclopes">cyclopes</Link> the Azlanti enslaved (and the cyclopes of the long-extinct kingdom of Ghol-Gan). Others defend the theory of independent evolution, citing the existence of even larger, older ugoroths (ugoloroths, which are described below) as proof that the faceless hulks of today are simply the descendants of an exceptionally large strain of faceless stalkers. Despite their disagreements, sages recognize that faceless hulks and faceless stalkers now form two distinct species.</p>
<Header sub>Habitat</Header>
<p>Faceless hulks were originally created to sow discord and animosity between giants and other surface-dwelling races, to further weaken both during the war with the aboleths. Toward that end, ugoroths disguised themselves among the various giant races to attack and spread mayhem in humanoid society. A lone faceless hulk may take the form of a <Link to="/monster/fire_giant">fire</Link> or <Link to="/monster/frost_giant">frost giant</Link> before attacking a humanoid settlement. Others infiltrate giant tribes and raiding parties, living among them for months or years and manipulating them into causing great violence whenever possible. Greater faceless hulks, which prefer to take the shapes of <Link to="/monster/cloud_giant">cloud</Link> or <Link to="/monster/storm_giant">storm giants</Link>, spend decades in disguise, sparking conflicts that can span generations.</p>
<p>Unlike typical giants, faceless hulks leave very few casualties in the wake of their attacks. Instead, they favor mass destruction, taking special care to level centers of commerce and locations of political import. These attacks also give them the opportunity to take prisoners they may later feed on in private. Faceless hulks have been known to work together with faceless stalkers to great success. Their smaller kin ensure that humanoid settlements are unprepared for giant attacks, and they later whip the survivors into a frenzy, driving them to retaliate against the giants. By working together this way, the two races can transform minor conflicts into explosive wars.</p>
<p>Some ugoroths believe they are the divine creations of the god <Link to="/faith/ghlaunder">Ghlaunder</Link>, who reigns over parasites and stagnation, while others cleave to the atheistic nature of their true creators, the aboleths. A few have taken to worshiping chaotic evil giant deities. Strangely, many faceless hulks consider themselves kin to evil giants, favoring them over their own kind. In some rare cases, they willingly choose to spend their entire lives among giants, pretending to be hermits or wandering sages. This is a particularly dangerous lifestyle for an ugoroth - after generations of slavery, many giants are naturally distrustful of those they don't know. If they discover an ugoroth hiding among them, giants hunt it down without mercy.</p>
<Header sub>Greater Faceless Hulks</Header>
<p>Known as ugoloroths among their own kind, the largest and most ancient faceless hulks serve as spies and infiltrators within the societies of the largest races of giantkind, including cloud giants, storm giants, and <Link to="/monster/taiga_giant">taiga giants</Link>. An ugoloroth is a faceless hulk with the <Link to="/template/advanced">advanced</Link> and <Link to="/template/giant">giant</Link> creature simple templates. It gains <Link to="/feat/combat_reflexes">Combat Reflexes</Link> and <Link to="/feat/greater_bull_rush">Greater Bull Rush</Link> as bonus feats. It casts spell-like abilities as a 12th-level caster, and gains <Link to="/spell/levitate">levitate</Link> and <Link to="/spell/undetectable_alignment">undetectable alignment</Link> as at-will spell-like abilities. When using its change shape ability, an ugoloroth can take the shape of any Huge humanoid. More so than their ugoroth kin, ugoloroths often take levels in classes such as barbarian, fighter, ranger, sorcerer, and witch to more easily pass as members of various giant races.</p>
</>};
const _faceless_stalker = {title: "Faceless Stalker (Ugothol)", jsx: <><p><em>This hairless, leathery biped has a face dominated by grotesque and unsettling whorls and slits instead of actual features.</em></p>
<Header full><span>Faceless Stalker</span><span>CR 4</span></Header>
<div className="reduce">
<Info id="monster-faceless_stalker--info" source={[["Bestiary 2",122],["Pathfinder #2: The Skinsaw Murders",88]]} xp="1,200" ce medium aberration subs={["shapechanger"]} init={7} dv={60} pcp={2} />
<Defense id="monster-faceless_stalker--defense" ac={[17,13,14]} mod="+3 Dex, +4 natural" hp={[42,"5d8+20"]} fort="+5" ref="+4" will="+6" dr="5/piercing or slashing" />
<Offense id="monster-faceless_stalker--offense" sp={30} melee={<>mwk longsword +8 (1d8+4/19-20), slam +2 (1d6+2 plus <Link to="/umr/grab">grab</Link>)</>} space={"5"} reach={"10"} bDrain="1 Constitution" sneak="+2d6" />
<SpellBlock id="monster-faceless_stalker--spells-monster-spellblock-1" sla={{"cl":5,"con":"+8","content":[{"constant":true,"content":<Link to="/spell/tongues">tongues</Link>}]}} />
<Stats id="monster-faceless_stalker--stats" atts={[18,17,18,13,15,16]} bab={3} cmb={7} cmbP="+11 grapple" cmd={20} feats={["Combat Reflexes","Deceitful","Improved Initiative"]} skills={{"bluff":{"b":10},"dis":{"b":14,"x":"+24 when using change shape"},"ea":{"b":19},"soh":{"b":8},"stl":{"b":11}}} racial="+4 Disguise, +8 Escape Artist" lang={["Aq","C",";",[<em>tongues</em>]]} sq={<><Link to="/umr/change_shape">change shape</Link> (Medium humanoid; <Link to="/spell/alter_self">alter self</Link>), <Link to="/umr/compression">compression</Link>, faceless</>} />
<Ecology id="monster-faceless_stalker--eco-eco" env="any swamps or underground" org="solitary, pair, or gang (3-9)" treasure={{"S":[["Mw","Wls"]],"final":"other treasure"}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Change Shape (Su)</strong> A faceless stalker can assume the form of a Medium humanoid at will but requires 10 uninterrupted minutes to alter its body. Performing this transformation is somewhat painful, but the faceless stalker can maintain its new form indefinitely once it has achieved it. It can change back to its true form as a swift action and gains a +2 morale bonus on attack rolls, damage rolls, skill checks, and saving throws for 1 round after it does so. Faceless stalkers retain their own innate abilities when they assume their new form and do not gain any of those belonging to the creature they mimic. A faceless stalker gains a +10 bonus on Disguise checks when they are used in conjunction with this ability.</p>
<p><strong>Faceless (Su)</strong> In its natural form, a faceless stalker has no discernible facial features. It gains a +4 bonus on saving throws made to resist attacks or effects that target the senses. This includes <Link to="/umr/gaze">gaze</Link> attacks, odor-based attacks, sonic attacks and similar attacks. This bonus does not apply to illusions.</p>
<Header sub>Description</Header>
<p>Ugothols (as faceless stalkers call themselves) are one of the many tools created and then discarded by the <Link to="/monster/aboleth">aboleths</Link> in their long war against the surface dwellers. Scorned by their former masters when the scheme for which they were designed unraveled, the faceless stalkers fled into swamps, marshes, or any other dark, wet places they could find - the closest they could come to the aquatic cities they once considered home.</p>
<p>Originally designed to serve as spies that could walk uncontested among the air-breathing races, faceless stalkers adopt new forms by reshaping their skin and contorting their rubbery bodies. This painful process takes approximately 10 uninterrupted minutes - an ugothol typically seeks a private place to do it, avoiding even others of its own kind. The sensation of returning to its true form is quite exhilarating and results in a momentary burst of euphoria.</p>
<p>Faceless stalkers cannot digest solid food even when in the form of a creature with a mouth. Instead, they subsist on liquids, including blood. In their natural forms, they have three hollow tongues which they use to penetrate and lap blood from their victims. Since they have no particular skill at grappling foes, most ugothols wait until a victim is <Link to="/misc/helpless">helpless</Link> or asleep before attempting to drink its blood - although the best is when a victim is helpless but conscious during the process, so that the faceless stalker can "play with its food" by having grisly and cruel conversations with it.</p>
</>};
const _faceless_whale = {title: "Faceless Whale", jsx: <><p><em>A deep groan at the edge of hearing precedes the appearance of this sightless leviathan, whose pallid body breaks the surface of dark waters without as much as a ripple.</em></p>
<Header full><span>Faceless Whale</span><span>CR 15</span></Header>
<div className="reduce">
<Info id="monster-faceless_whale--info" source={[["Pathfinder #60: From Hell's Heart",82]]} xp="51,200" n colossal magicalBeast init={-2} blindsight={150} pcp={19} />
<Defense id="monster-faceless_whale--defense" ac={[30,0,30]} mod="-2 Dex, +30 natural, -8 size" hp={[248,"16d10+160"]} fort="+22" ref="+8" will="+7" immune="sonic, gaze attacks, sight-based attacks, visual effects and illusions" weak={["blind"]} />
<Offense id="monster-faceless_whale--offense" sw={40} melee="bite +25 (6d6+17), tail slap +20 (4d6+8)" space={"30"} reach={"30"} specAtt={[["resonant song","resonant song"]]} capsize swallow="4d6 acid damage, AC 25, 24 hp" />
<Stats id="monster-faceless_whale--stats" atts={[45,6,30,4,11,5]} bab={16} cmb={41} cmd={49} feats={["Awesome Blow","Diehard","Endurance","Great Fortitude","Improved Bull Rush","Improved Overrun","Iron Will","Power Attack"]} skills={{"per":{"b":19},"swim":{"b":25}}} lang={["AkX"]} sq={<>blind, <Link to="/umr/hold_breath">hold breath</Link></>} />
<Ecology id="monster-faceless_whale--eco-eco" env="any water" org="solitary, pair, or pod (3-16)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Blind (Ex)</strong> A faceless whale sees and senses exclusively through its blindsight ability, which is based on sound and movement - beyond 150 feet, the whale is considered <Link to="/misc/blind">blind</Link>. A <Link to="/misc/deafened">deafened</Link> faceless whale is effectively blinded as well. It is invulnerable to all sight-based effects and attacks, including <Link to="/umr/gaze">gaze</Link> attacks.</p>
<p><strong>Resonant Song (Su)</strong> As a standard action, a faceless whale can focus a 60-foot ray of sonic energy on a single target that deals 8d6 points of damage. This ray deals normal damage to objects, but is still subject to hardness. Alternatively, a faceless whale can blast this resonant energy in a 60-foot cone. Creatures in this area must succeed at a DC 28 Fortitude or be <Link to="/misc/stunned">stunned</Link> for 1d4 rounds. Any submerged creature <Link to="/misc/hold_its_breath">holding its breath</Link> must succeed at a second Fortitude saving throw at the same DC or it has its breath knocked out of it and instantly begins <Link to="/rule/drowning">drowning</Link>.</p>
<Header sub>Description</Header>
<p>Called "ansiktsloshvals" in Aklo, and sometimes called "Darklands whales," faceless whales are enigmatic predators of the Sightless Sea rarely encountered elsewhere on Golarion. Like cavefish, faceless whales lost their eyes and pigmentation from countless generations spent living and breeding in the lightless depths. The lack of pigmentation leaves the creatures' skin little more than a transparent, blubber-lined film, with pulsing veins and churning organs visible beneath the silvery membrane. Sailors' lore from the Sightless Sea claims a faceless whale's most recent meal shows through the taut skin of its belly.</p>
<p>It is unknown precisely how long faceless whales have inhabited the Sightless Sea. Some legends claim faceless whales began their lives as normal toothed whales that washed into the Darklands during the cataclysm of Earthfall, if not long before. Darker tales contend the faceless whales were driven into the realm of Orv by a coven of powerful <Link to="/monster/sea_hag">sea hags</Link>, who robbed the faceless whales of their sight when they refused to teach the hags their potent song.</p>
<p>An adult faceless whale is 70 feet long and weights 90,000 pounds, though some specimens stretch these averages and grow half again as large.</p>
<p>Faceless whales resemble the toothed whales common to the Arcadian Ocean in body structure, possessing a tapered mouth lined with stubby, conical teeth and a streamlined body. Lacking eyes, faceless whales depend totally upon their keen blindsight to navigate, seek prey, and avoid the predations of the Sightless Sea's most horrific inhabitants. Faceless whales prefer to hunt near the bottom of the Sightless Sea, where crushing pressures and freezing temperatures nurture large, sluggish organisms with few places to hide, and where the whales find safety from other menacing predators. Because of the unusual and outright alien composition of the creatures found within the lowest depths, faceless whales developed indiscriminate appetites. A hungry faceless whale consumes virtually any living thing it can gulp into its jaws, including the plentiful aquatic aberrations. Faceless whales can remain submerged for hours at a time, diving to depths of over 7,000 feet. Faceless whales that survive to adulthood in the harsh conditions of Orv live 80 years or longer.</p>
<p>As predators that spend the majority of their lives in the deepest waters, Darklands whales are rarely spotted. Those who sail upon the dark currents of the Sightless Sea and Lake Nirthran see these beasts only when the whales surface to breathe. When surfacing, a faceless whale breathes for minutes at a time, exhaling and inhaling massive volumes of air in great misty spouts.</p>
<p>When a faceless whale finds prey it can easily outswim, it plunges downward with its mouth agape, snapping up the morsel before it can react. When pursuing larger or faster prey, the faceless whale becomes a persistence hunter, hounding its quarry at a deceptively leisurely pace. After what often proves to be days of dogged pursuit, the whale's prey becomes too exhausted to swim further. Before the quarry can marshal the last of its strength to defend itself, the faceless whale renders it helpless with a resonant song. When the faceless whale is not in combat, it uses this sonic attack to break through rock and gain access to new hunting grounds within Orv and beyond.</p>
<Header sub>Habitat</Header>
<p>Faceless whales typically hunt and swim alone, except when prey is abundant. When hunting is favorable, faceless whales organize into pods led by the oldest (and typically largest) female. Pods are short lived, often forming only a handful of times within a faceless whale's lifetime. As such, males compete fiercely for breeding rights during these gatherings. Pods last only as long as prey sustains them. Once food becomes scarce, the pod disperses into the Sightless Sea, and individual whales brave the chill waters alone in search of richer hunting grounds.</p>
<p>Mated pairs of faceless whales remain together only long enough to raise their first calf. This period of nurturing typically lasts no longer than 5 years - just enough time for the parents to teach a calf basic hunting strategies and witness its first unassisted kill. Afterward, the parents part ways, leaving the calf to mature to adulthood or perish in the uncertain depths of the abyss.</p>
<p>A faceless whale spends the majority of its life in isolation, plumbing the depths of the Sightless Sea in search of prey, the occasional mate, and hunting grounds rich enough to support a temporary pod. When it makes such a discovery, a faceless whale circles the boundary of the new territory, calling out to its fellows with a groaning, dirge-like song that carries for leagues. Whalers who ply their trade upon the Sightless Sea listen for this dirge with fanatical obsession. Faceless whales provide numerous alchemical ingredients, and their bones and teeth make excellent weapons and armor. An adult faceless whale possesses enough of both to make a crew of whalers rich, provided they have the courage and skill to slay the creature.</p>
<p>Though faceless whales prefer larger meals, they eagerly prey upon humanoids when other food is scarce. A sailor fallen overboard makes an easy snack for an adult or a full meal for a juvenile. Conventional wisdom claims that faceless whales consider seagoing vessels indigestible, but <Link to="/monster/serpentfolk">serpentfolk</Link> hiss tales of faceless whales of exceptional cunning that capsize or fracture ships and feast upon the drowning crews, plucking them from among the flotsam.</p>
<p>On rare occasion, a faceless whale finds its way into the oceans of Golarion. Some believe the creatures possess an instinctive knowledge of hidden waterways linking the Sightless Sea to the world above (perhaps all that remains of the migratory instincts that once drove their cetacean ancestors). Those few faceless whales that venture beyond the Darklands typically do so only briefly, breaching the surface on moonless nights just long enough to take in a breath of air free from the fetid staleness of Orv.</p>
<p>Many sages postulate that the Sightless Sea is bottomless, its deepest trenches connecting to planes of primordial darkness where the pressure is capable of crushing living beings into stone. It is possible that the Sightless Sea is just one of many faceless whale hunting grounds. If this is the case, there is no telling what a faceless whale might bring up from the ebon depths.</p>
</>};
const _faerie_mount = {title: "Faerie Mount", jsx: <><p><em>Short legs and overlarge ears make this broad-chested canine seem almost comical.</em></p>
<Header full><span>Faerie Mount</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-faerie_mount--info" source={[["Pathfinder #119: Prisoners of the Blight",82]]} xp="400" n medium animal init={0} llv scent pcp={5} />
<Defense id="monster-faerie_mount--defense" ac={[11,10,11]} mod="+1 natural" hp={[15,"2d8+6"]} fort="+6" ref="+3" will="+1" def={[["stability","stability"]]} />
<Offense id="monster-faerie_mount--offense" sp={40} melee="bite +2 (1d6+1)" />
<Stats id="monster-faerie_mount--stats" atts={[13,10,17,2,13,12]} bab={1} cmb={2} cmd={12} cmdP="16 vs. bull rush, 20 vs. trip" feats={["Endurance",["Nimble Moves",<sup>B</sup>]]} skills={{"per":{"b":5}}} racial="+4 Survival when tracking by scent" sq="sure-footed" />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Ecology id="monster-faerie_mount--eco-eco" env="temperate forests, hills, or plains (First World)" org="solitary, pair, or wiggle (3-12)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Stability (Ex)</strong> While standing on the ground, faerie mounts gain a +4 racial bonus to their Combat Maneuver Defense against <Link to="/rule/bull_rush">bull rush</Link> and <Link to="/rule/trip">trip</Link> combat maneuvers.</p>
<p><strong>Sure-Footed (Ex)</strong> As long as it is carrying no more than a light load, a faerie mount gains Nimble Moves as a bonus feat.</p>
<Header sub>Description</Header>
<p>Also called the fey cur and the dwarf dog, the faerie mount is a cousin to the dog and the wolf that carries Tiny and Small riders well. The creatures' sturdy legs, low center of gravity, and muscular torsos are especially well-suited to navigating the twisting, hilly, greenerychoked landscape of the First World, making them the preferred mounts for scouts, messengers, and even knights small enough to ride the legendarily loyal creatures. While usually found in fey stables, bedecked in saddles and barding, small packs of fey curs sometimes form symbiotic relationships with herds of wild deer and goats, protecting the herbivores in exchange for milk and the first opportunity to scavenge fallen animals.</p>
<p>Faerie mounts grow up to 5 feet long and 3 feet tall, and weigh around 120 pounds.</p>
<p>Tales of the animals' legendary bravery and loyalty inspired Taldan dog breeders to create a breed of similar proportions. These canines make excellent herding dogs, and are found in the central highlands of Taldor, Isger, and Molthune. To reflect the Taldan corgi, use the statistics for a Small <Link to="/monster/dog">dog</Link>, remove its racial Acrobatics bonus to jump, and add the faerie mount's stability special ability.</p>
</>};
const _fallen = {title: "Fallen", jsx: <><p><em>This ghostly crusader floats just above the ground, yet despite its phantom-like appearance, its armor and weapons seem quite solid.</em></p>
<Header full><span>Fallen</span><span>CR 8</span></Header>
<div className="reduce">
<Info id="monster-fallen--info" source={[["Bestiary 6",126],["Pathfinder #75: Demon's Heresy",90]]} xp="4,800" le medium undead subs={["incorporeal"]} init={3} dv={60} blindsense={60} pcp={17} />
<Defense id="monster-fallen--defense" ac={[22,17,19]} mod="+4 armor, +4 deflection, +3 Dex, +1 shield" hp={[93,"11d8+44"]} fort="+7" ref="+6" will="+10" def={[["rejuvenation","rejuvenation"]]} chanRes="+4" incorp immune={<Link to="/umr/undead_traits">undead traits</Link>} resist="acid 5, fire 5" weak={[<Link to="/umr/light_sensitivity">light sensitivity</Link>]} />
<Offense id="monster-fallen--offense" fl={30} flP="good" melee="longsword +11/+6 (1d8 force/19-20 plus 2d6 negative energy and despair), light shield +13 (1d3 force plus 2d6 negative energy and despair)" ranged="longbow +11/+6 (1d8 force/&times;3 plus 2d6 negative energy and despair)" specAtt={[["agent of despair","agent of despair"],["curse of the unburied","curse of the unburied"],["phantom armaments","phantom armaments"],["touch of the grave","touch of the grave"]]} />
<SpellBlock id="monster-fallen--spells-monster-spellblock-1" sla={{"cl":12,"con":"+16","content":[{"day":3,"content":<><Link to="/spell/deeper_darkness">deeper darkness</Link>, <Link to="/spell/telekinesis">telekinesis</Link> (DC 19)</>}]}} />
<Stats id="monster-fallen--stats" atts={[0,16,0,13,17,18]} bab={8} cmb={15} cmd={25} feats={["Combat Expertise","Deadly Aim","Improved Shield Bash","Shield Slam","Two-Weapon Fighting",["Weapon Focus"," (longsword)"]]} skills={{"fly":{"b":15},"intm":{"b":18},"k":{"r":10},"per":{"b":17}}} sq="Common" />
<Ecology id="monster-fallen--eco-eco" env="any" org="solitary, squad (2-6), or platoon (7-16)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Agent of Despair (Su)</strong> A creature that takes damage from a fallen's attacks must succeed at a DC 19 Will save or take a -4 penalty on saving throws against fear. If a creature that has immunity to fear fails this saving throw, its immunity is temporarily suppressed. This effect lasts as long as a creature still has damage taken from a fallen's attacks. This is a curse effect. The save DC is Charisma-based.</p>
<p><strong>Curse of the Unburied (Su)</strong> Once per day, a fallen can curse a good-aligned cleric, paladin, or warpriest within 30 feet whose deity is opposed to the creation of undead to locate the fallen's remains and perform a funeral for it. The target must succeed at a DC 19 Will save or take a -2 penalty to each of its ability scores. Each day, the target can attempt a new saving throw; success keeps the target from accruing an additional -2 penalty to each of its ability scores. No ability score can be reduced below 1 by this effect. The ability score penalties are removed immediately upon completing funeral rites for the fallen. The target does not need to complete the rites personally, but it is responsible for seeing that they're carried out. The save DC is Charisma-based.</p>
<p><strong>Phantom Armaments (Su)</strong> A fallen's weapons and armor are formed of force, allowing the fallen to make physical attacks and wear protective armor. This gear cannot be disarmed or removed from the fallen. Arrows fired from the fallen's longbow vanish after dealing damage to their target. A fallen gains a bonus on attack rolls with melee weapons and on combat maneuver checks equal to its Charisma modifier.</p>
<p><strong>Rejuvenation (Su)</strong> A fallen is tied to the place where it died. A fallen is permanently destroyed and its soul is released when funeral rites lasting at least 1 minute are performed at the site where it perished or over its earthly remains. Otherwise, a fallen reforms 2d4 days after its destruction at the site where it first died.</p>
<p><strong>Touch of the Grave (Su)</strong> All of a fallen's melee and ranged attacks deal 2d6 additional points of negative energy damage to living targets (this does not heal undead targets struck).</p>
<Header sub>Description</Header>
<p>When a righteous crusader is denied the path to the afterlife in death, its spirit can rise as one of the fallen: undead driven to enact a crusade against all life in a frustrated corruption of their beliefs. The undead creature's fall in battle remains the greatest disappointment vexing its soul. Driven by hatred and shame, the fallen wander battlefields and wildlands in constant search of someone to end their misery by performing last rites.</p>
</>};
const _familiar_archaeopteryx = {title: "Archaeopteryx (Familiar)", jsx: <><Header full><span>Archaeopteryx</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_archaeopteryx--info" source={[["Bestiary 4",96]]} xp="100" n tiny animal init={2} llv pcp={1} />
<Defense id="monster-familiar_archaeopteryx--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[4,"1d8"]} fort="+2" ref="+4" will="+1" />
<Offense id="monster-familiar_archaeopteryx--offense" sp={40} cl={10} fl={40} flP="poor" melee="bite +4 (1d4-4)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_archaeopteryx--stats" atts={[3,15,10,2,12,7]} bab={0} cmb={0} cmd={6} feats={["Weapon Finesse"]} skills={{"climb":{"b":10}}} sq="weak flier" />
<Ecology id="monster-familiar_archaeopteryx--eco-eco" env="temperate or warm forests" org="single, pair, or nest (4-10)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Weak Flier (Ex)</strong> An archaeopteryx can't hover or fly up at an angle greater than 45 degrees while flying.</p>
<Header sub>Description</Header>
<p>Archaeopteryxes are primitive birds. Instead of beaks, they have lizard-like heads with serrated teeth.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_arctic_hare = {title: "Arctic Hare (Familiar)", jsx: <><p><em>With shorter ears and limbs than other rabbits, this white rabbit is hard to spot in the snow.</em></p>
<Header full><span>Arctic Hare</span><span>CR 1/6</span></Header>
<div className="reduce">
<Info id="monster-familiar_arctic_hare--info" source={[["Ultimate Wilderness",191],["Reign of Winter Player's Guide",10]]} xp="65" n tiny animal init={3} llv pcp={1} />
<Defense id="monster-familiar_arctic_hare--defense" ac={[15,15,12]} mod="+3 Dex, +2 size" hp={[3,"1d8-1"]} fort="+1" ref="+5" will="+1" />
<Offense id="monster-familiar_arctic_hare--offense" sp={50} melee="bite -2 (1d3-4)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_arctic_hare--stats" atts={[3,16,9,2,12,5]} bab={0} cmb={1} cmd={7} cmdP="11 vs. trip" feats={["Run"]} skills={{"stl":{"b":15,"x":"+19 in snow"}}} racial="+4 Stealth in snow" />
<Ecology id="monster-familiar_arctic_hare--eco-eco" env="cold forests and plains" org="solitary, pair, or down (3-16)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>An arctic hare has adapted to life in cold environments but fares well in warmer climes.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_arctic_tern = {title: "Arctic Tern (Familiar)", jsx: <><p><em>This white-and-gray bird has a reddish-orange beak.</em></p>
<Header full><span>Arctic Tern</span><span>CR 1/6</span></Header>
<div className="reduce">
<Info id="monster-familiar_arctic_tern--info" source={[["Ultimate Wilderness",192],["Reign of Winter Player's Guide",10]]} xp="65" n tiny animal init={2} llv pcp={6} />
<Defense id="monster-familiar_arctic_tern--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[2,"1d8-2"]} fort="+0" ref="+4" will="+2" />
<Offense id="monster-familiar_arctic_tern--offense" sp={10} fl={40} flP="average" melee="bite -2 (1d3-4)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_arctic_tern--stats" atts={[2,15,7,2,14,5]} bab={0} cmb={0} cmd={6} feats={[["Skill Focus"," (Fly)"]]} skills={{"fly":{"b":9},"per":{"b":6}}} />
<Ecology id="monster-familiar_arctic_tern--eco-eco" env="cold coastlines" org="solitary, pair, or flock (3-20)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>These migratory birds are agile and graceful flyers that hunt fish and marine invertebrates. Arctic terns mate for life and build their nests on the ground.</p>
<p>Arctic terns are about 1 foot long and weigh about half a pound.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_armadillo = {title: "Armadillo (Familiar)", jsx: <><p><em>This round, dust-colored creature's snout pokes out of its bony armor shell.</em></p>
<Header full><span>Armadillo</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_armadillo--info" source={[["Ultimate Wilderness",192],["Animal Archive",30]]} xp="100" n tiny animal init={2} scent pcp="+8 (+0 on sight-based Perception checks)" />
<Defense id="monster-familiar_armadillo--defense" ac={[16,14,14]} mod="+2 Dex, +2 natural, +2 size" hp={[4,"1d8"]} fort="+2" ref="+4" will="+1" def={[["protective ball","protective ball"]]} />
<Offense id="monster-familiar_armadillo--offense" sp={30} br={5} melee="claw -1 (1d2-3)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_armadillo--stats" atts={[4,15,11,2,12,9]} bab={0} cmb={0} cmd={7} cmdP="11 vs. trip" feats={[["Skill Focus"," (Perception)"]]} skills={{"per":{"b":8,"x":"+0 on sight-based checks"},"swim":{"b":1}}} racial="+4 Swim, -8 on sight-based Perception checks" sq="natural diver" />
<Ecology id="monster-familiar_armadillo--eco-eco" env="temperate or warm plains" org="solitary" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Natural Diver (Ex)</strong> An armadillo can <Link to="/misc/hold_its_breath">hold its breath</Link> underwater for up to 6 minutes.</p>
<p><strong>Protective Ball (Ex)</strong> An armadillo can roll up into a ball as a swift action, increasing its natural armor bonus to +3 but decreasing its speed to 0 feet. Unrolling is a move action.</p>
<Header sub>Description</Header>
<p>These squat-bodied mammals are easily recognizable thanks to their distinctive leathery shells, which provide them with natural protection against numerous dangers and predators in their native environs. Armadillos have very poor eyesight, perceiving the world largely through scent and touch. They are exceptional diggers, and they burrow both to find food and to make their dens. When an armadillo goes underwater, it swallows air to increase its buoyancy, inflating its stomach up to twice its normal size so it won't immediately sink.</p>
<p>An armadillo is 2-1/2 feet long and weighs roughly 10 pounds.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_bat = {title: "Bat (Familiar)", jsx: <><Header full><span>Bat</span><span>CR 1/8</span></Header>
<div className="reduce">
<Info id="monster-familiar_bat--info" source={[["Pathfinder RPG Bestiary",131]]} xp="50" n diminutive animal init={2} llv blindsense={20} pcp={6} />
<Defense id="monster-familiar_bat--defense" ac={[16,16,14]} mod="+2 Dex, +4 size" hp={[2,"1d8-2"]} fort="+0" ref="+4" will="+2" />
<Offense id="monster-familiar_bat--offense" sp={5} fl={40} flP="good" melee="bite +6 (1d3-5)" space={"1"} reach={"0"} />
<Stats id="monster-familiar_bat--stats" atts={[1,15,6,2,14,5]} bab={0} cmb={-2} cmd={3} feats={["Weapon Finesse"]} skills={{"fly":{"b":16},"per":{"b":6}}} racial="+4 Perception" />
<Ecology id="monster-familiar_bat--eco-eco" env="temperate and hot forests and deserts" org="colony (10-400)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Most bats are insectivores or fruit-eaters, but at least one species drinks blood.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_blue_ringed_octopus = {title: "Blue-Ringed Octopus (Familiar)", jsx: <><Header full><span>Blue-Ringed Octopus</span><span>CR 1/2</span></Header>
<div className="reduce">
<Info id="monster-familiar_blue_ringed_octopus--info" source={[["Ultimate Magic",117]]} xp="200" n tiny animal subs={["aquatic"]} init={5} llv pcp={1} />
<Defense id="monster-familiar_blue_ringed_octopus--defense" ac={[17,17,12]} mod="+5 Dex, +2 size" hp={[4,"1d8"]} fort="+2" ref="+7" will="+1" def={[["ink cloud 5-ft radius","ink cloud (5-ft. radius)"]]} />
<Offense id="monster-familiar_blue_ringed_octopus--offense" sp={20} br={undefined} sw={30} melee={<>bite +7 (1d2-1 plus poison), tentacles +5 (<Link to="/umr/grab">grab</Link>)</>} space={"2-1/2"} reach={"0"} specAtt={[["poison","poison"]]} />
<Stats id="monster-familiar_blue_ringed_octopus--stats" atts={[8,21,10,2,13,3]} bab={0} cmb={3} cmbP="+7 grapple" cmd={12} cmdP="can't be tripped" feats={[["Multiattack",<sup>B</sup>],"Weapon Finesse"]} skills={{"ea":{"b":15},"stl":{"b":25},"swim":{"b":13}}} racial="+10 Escape Artist, +8 Stealth" />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Ecology id="monster-familiar_blue_ringed_octopus--eco-eco" env="temperate or cold aquatic" org="solitary" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Ink Cloud (Ex)</strong> While within water, an octopus can emit a 5-foot-radius sphere of ink once per minute as a swift action. This ink provides total <Link to="/rule/concealment">concealment</Link> and persists for 1 minute.</p>
<p><strong>Jet (Ex)</strong> The octopus can jet 60 feet in a straight line as a full-round action. This does not provoke attacks of opportunity.</p>
<p><strong>Poison (Ex)</strong></p>
<div className="sideNoteWrap"><ScrollContainer id="monster-familiar_blue_ringed_octopus--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Bite-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/str_damage">Str damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><Header sub>Description</Header>
<p>Blue-ringed octopuses are aquatic animals capable of a surprising amount of cunning. They cannot survive out of water.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_butterfly_moth = {title: "Butterfly/Moth (Familiar)", jsx: <><p><em>This graceful winged insect is a riot of color that glides through the air like a flittering dream.</em></p>
<Header full><span>Butterfly/Moth</span><span>CR -</span></Header>
<div className="reduce">
<Info id="monster-familiar_butterfly_moth--info" source={[["Ultimate Wilderness",192]]} xp="0" n diminutive vermin init={1} dv={60} scent pcp={1} />
<Defense id="monster-familiar_butterfly_moth--defense" ac={[15,15,14]} mod="+1 Dex, +4 size" hp={[1,"1d8-3"]} fort="-1" ref="+1" will="+1" immune="mind-affecting effects" />
<Offense id="monster-familiar_butterfly_moth--offense" sp={5} fl={30} flP="average" space={"1"} reach={"0"} />
<Stats id="monster-familiar_butterfly_moth--stats" atts={[1,13,4,0,12,7]} bab={0} cmb={-3} cmd={2} cmdP="10 vs. trip" skills={{"fly":{"b":7}}} />
<Ecology id="monster-familiar_butterfly_moth--eco-eco" env="any temperate or warm" org="solitary, pair, or kaleidoscope (3-100)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Butterflies are delicate, brightly colored insects that feed on nectar and other sources of sugar. Moths have the same statistics as butterflies, though they tend to be active at night. The butterfly (or moth) presented here is a particularly large specimen with a wingspan of just over 6 inches, yet it is still completely harmless and awards no XP if slain.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_cat = {title: "Cat (Familiar)", jsx: <><Header full><span>Cat</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_cat--info" source={[["Pathfinder RPG Bestiary",131]]} xp="100" n tiny animal init={2} llv scent pcp={5} />
<Defense id="monster-familiar_cat--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[3,"1d8-1"]} fort="+1" ref="+4" will="+1" />
<Offense id="monster-familiar_cat--offense" sp={30} melee="2 claws +4 (1d2-4), bite +4 (1d3-4)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_cat--stats" atts={[3,15,8,2,12,7]} bab={0} cmb={0} cmd={6} cmdP="10 vs. trip" feats={["Weapon Finesse"]} skills={{"climb":{"b":6},"per":{"b":5},"stl":{"b":14}}} racial="+4 Climb, +4 Stealth" />
<Ecology id="monster-familiar_cat--eco-eco" env="temperate and hot plains or urban" org="solitary, pair, or pack (3-12)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Cats typically weigh 5-15 pounds when fully grown.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_chicken = {title: "Chicken (Familiar)", jsx: <><p><em>This fowl has a compact body, a short beak flanked by red wattles, and a crimson comb on the crown of its head.</em></p>
<Header full><span>Chicken</span><span>CR 1/6</span></Header>
<div className="reduce">
<Info id="monster-familiar_chicken--info" source={[["Ultimate Wilderness",193],["Familiar Folio",24],["Bestiary 5",112]]} xp="65" n tiny animal init={4} llv pcp={5} />
<Defense id="monster-familiar_chicken--defense" ac={[12,12,12]} mod="+2 size" hp={[5,"1d8+1"]} fort="+3" ref="+2" will="+1" />
<Offense id="monster-familiar_chicken--offense" sp={30} fl={20} flP="clumsy" spExtra="drift" melee="bite -2 (1d3-4)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_chicken--stats" atts={[3,11,12,2,12,13]} bab={0} cmb={-2} cmd={4} feats={["Improved Initiative"]} skills={{"fly":{"b":-4},"per":{"b":5}}} />
<Ecology id="monster-familiar_chicken--eco-eco" env="any temperate" org="solitary, pair, or flock (3-20)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Drift (Ex)</strong> A chicken flies in short bursts and can't use its fly speed to hover. When it flies, a chicken must end its move action by landing or perching on a solid surface.</p>
<Header sub>Description</Header>
<p>Chickens are prized for the hearty breakfast meals they provide if properly fed and cared for. Chickens are highly social creatures that raise their young communally. They're picky about the spots where they roost, and a hen rarely strays from a particular nest once she's laid her eggs there. A fertilized chicken egg hatches into a chick after roughly 3 weeks of incubation.</p>
<p>In addition to their quick reproductive cycles, chickens have the ability to thrive on simple foods, and they are valued in both rural farming communities and metropolitan areas for their delicious and nutrient-rich eggs and meat. A hen bred for laying eggs can produce up to one egg every 24 hours.</p>
<p>A chicken is about 1 foot tall and weighs 5 pounds.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_cockroach = {title: "Cockroach (Familiar)", jsx: <><p><em>This swift brown insect scampers up walls, its antennae flailing.</em></p>
<Header full><span>Cockroach</span><span>CR 1/8</span></Header>
<div className="reduce">
<Info id="monster-familiar_cockroach--info" source={[["Ultimate Wilderness",193]]} xp="50" n diminutive vermin init={2} dv={60} llv pcp={0} />
<Defense id="monster-familiar_cockroach--defense" ac={[16,16,14]} mod="+2 Dex, +4 size" hp={[6,"1d8+2"]} fort="+4" ref="+2" will="+0" immune="mind-affecting effects" weak={[<Link to="/umr/light_sensitivity">light sensitivity</Link>]} />
<Offense id="monster-familiar_cockroach--offense" sp={20} cl={20} fl={30} flP="poor" melee="bite -1 (1d2-5)" space={"1"} reach={"0"} />
<Stats id="monster-familiar_cockroach--stats" atts={[1,15,14,0,11,2]} bab={0} cmb={-2} cmd={3} cmdP="11 vs. trip" skills={{"climb":{"b":3}}} sq={<Link to="/umr/hold_breath">hold breath</Link>} />
<Ecology id="monster-familiar_cockroach--eco-eco" env="any" org="solitary, pair, or swarm (3-60)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Cockroaches are hardy insects commonly viewed as pests - especially for being attracted to warm buildings and unattended food in urban areas. They are famously skittish, fleeing from larger creatures and sources of light.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_creeper_ivy = {title: "Creeper Ivy (Familiar)", jsx: <><p><em>The creeping tendrils of this plant creature guide its way up tree trunks and walls.</em></p>
<Header full><span>Creeper Ivy</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_creeper_ivy--info" source={[["Ultimate Wilderness",194]]} xp="100" n tiny plant init={2} llv pcp={0} />
<Defense id="monster-familiar_creeper_ivy--defense" ac={[15,14,13]} mod="+2 Dex, +1 natural, +2 size" hp={[4,"1d8"]} fort="+2" ref="+2" will="+0" immune={<Link to="/umr/plant_traits">plant traits</Link>} />
<Offense id="monster-familiar_creeper_ivy--offense" sp={15} cl={15} melee="slam +0 (1d2-2 plus grab)" space={"2-1/2"} reach={"0"} constrict="1d3-2" grab="Medium" />
<Stats id="monster-familiar_creeper_ivy--stats" atts={[7,14,10,0,10,5]} bab={0} cmb={0} cmd={8} cmdP="can't be tripped" skills={{"climb":{"b":6}}} />
<Ecology id="monster-familiar_creeper_ivy--eco-eco" env="temperate forests and urban" org="solitary, pair, or tangle (3-10)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Climbing ivy thrives in dense forests and urban landscapes, where it can easily relocate to maximize its exposure to the sun. Surprisingly fast for a plant, creeper ivy is territorial and lashes out at creatures that threaten or shade it. It also scavenges when the opportunity presents itself, sometimes drawing nutrition from carrion or even unguarded eggs.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_dodo = {title: "Dodo (Familiar)", jsx: <><p><em>This plump, gray, flightless bird waddles about on ungainly legs, fearlessly bobbing its prodigious beak.</em></p>
<Header full><span>Dodo</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_dodo--info" source={[["Ultimate Wilderness",194],["Pathfinder #55: The Wormwood Mutiny",88],["Bestiary 4",96]]} xp="100" n small animal init={0} llv pcp={3} />
<Defense id="monster-familiar_dodo--defense" ac={[11,11,11]} mod="+1 size" hp={[6,"1d8+2"]} fort="+4" ref="+2" will="-1" />
<Offense id="monster-familiar_dodo--offense" sp={20} melee="bite +0 (1d3-2)" />
<Stats id="monster-familiar_dodo--stats" atts={[7,11,14,2,9,6]} bab={0} cmb={-3} cmd={7} feats={[["Weapon Focus"," (bite)"]]} skills={{"per":{"b":3}}} />
<Ecology id="monster-familiar_dodo--eco-eco" env="warm coastlines and plains" org="solitary, pair, or huddle (3-6)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>These flightless birds typically inhabit isolated tropical islands and coastlines that are devoid of predators and other creatures that might kill them to use as a resource. Dodos' size and unfamiliarity with natural dangers contribute to a kind of boldness in their species - or what some would call stupidity - causing them to bumble into precarious situations and making them easy targets for other creatures that are on the prowl for a tasty meal. The birds can all too easily be caught and slain, and while their meat has a most unpleasant taste, few starving, shipwrecked sailors would turn such a providential meal down.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_donkey_rat = {title: "Donkey Rat (Familiar)", jsx: <><Header full><span>Donkey Rat</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_donkey_rat--info" source={[["Ultimate Magic",117]]} xp="100" n small animal init={3} llv scent pcp={4} />
<Defense id="monster-familiar_donkey_rat--defense" ac={[14,14,11]} mod="+3 Dex, +1 size" hp={[5,"1d8+1"]} fort="+3" ref="+5" will="+1" />
<Offense id="monster-familiar_donkey_rat--offense" sp={30} sw={20} melee="bite +0 (1d3-2)" />
<Stats id="monster-familiar_donkey_rat--stats" atts={[6,17,13,2,13,4]} bab={0} cmb={1} cmd={9} cmdP="13 vs. trip" feats={[["Skill Focus"," (Perception)"]]} skills={{"per":{"b":4},"stl":{"b":15},"swim":{"b":11}}} />
<Ecology id="monster-familiar_donkey_rat--eco-eco" env="temperate coast or forest" org="solitary, pair, or nest (3-12)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Donkey rats are brown or snowy white rodents the size of small dogs, with long legs and short, furry tails. These statistics can also be used for capybaras.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_dwarf_caiman = {title: "Dwarf Caiman (Familiar)", jsx: <><p><em>This lithe, green-scaled reptile looks like a miniature crocodile with a stunted muzzle.</em></p>
<Header full><span>Dwarf Caiman</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_dwarf_caiman--info" source={[["Ultimate Wilderness",195],["Pathfinder #55: The Wormwood Mutiny",88]]} xp="135" n small animal init={0} llv pcp={0} />
<Defense id="monster-familiar_dwarf_caiman--defense" ac={[14,11,14]} mod="+3 natural, +1 size" hp={[6,"1d8+2"]} fort="+4" ref="+2" will="+0" />
<Offense id="monster-familiar_dwarf_caiman--offense" sp={10} sw={30} spExtra="sprint" melee="bite +1 (1d4)" />
<Stats id="monster-familiar_dwarf_caiman--stats" atts={[10,11,15,1,11,2]} bab={0} cmb={-1} cmd={9} cmdP="13 vs. trip" feats={[["Skill Focus"," (Stealth)"]]} skills={{"stl":{"b":11,"x":"+19 in water"},"swim":{"b":8}}} racial="+8 Stealth in water" />
<Ecology id="monster-familiar_dwarf_caiman--eco-eco" env="warm swamps and rivers" org="solitary, pair, or bask (3-12)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Sprint (Ex)</strong> Once per minute, a dwarf caiman can sprint, increasing its base speed to 30 feet for 1 round.</p>
<Header sub>Description</Header>
<p>Dwarf caimans are a small species of crocodilian predators that live amid the fast-running streams of tropical rainforests and swamps. These patient predators sometimes lie in awkward positions for hours before they strike their prey, their mottled scales disguising them as floating wood.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_dweomer_cap = {title: "Dweomer Cap (Familiar)", jsx: <><p><em>Undulating patterns of purple and orange luminescence play across this strange mushroom's gills.</em></p>
<Header full><span>Dweomer Cap</span><span>CR 1/8</span></Header>
<div className="reduce">
<Info id="monster-familiar_dweomer_cap--info" source={[["Ultimate Wilderness",195]]} xp="50" n tiny plant init={-1} dv={60} llv pcp={1} />
<Defense id="monster-familiar_dweomer_cap--defense" ac={[11,11,11]} mod="-1 Dex, +2 size" hp={[5,"1d8+1"]} fort="+3" ref="-1" will="+1; +2 vs. spells and spell-like abilities" def={[["arcanophage","arcanophage"]]} immune={<Link to="/umr/plant_traits">plant traits</Link>} />
<Offense id="monster-familiar_dweomer_cap--offense" sp={5} cl={5} space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_dweomer_cap--stats" atts={[1,8,12,0,12,2]} bab={0} cmb={-3} cmd={2} cmdP="can't be tripped" skills={{"climb":{"b":7}}} sq="aura luminescence" />
<Ecology id="monster-familiar_dweomer_cap--eco-eco" env="any underground" org="solitary, pair, or patch (3-5)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Arcanophage (Su)</strong> When a dweomer cap succeeds at a saving throw against a spell, but not a spell-like ability, it gains <Link to="/umr/fast_healing">fast healing</Link> 1 for a number of rounds equal to the spell's level.</p>
<p><strong>Aura Luminescence (Ex)</strong> A dweomer cap naturally emits <Link to="/rule/dim_light">dim light</Link> in a 10-foot radius. When in contact with a creature or object that has a faint or stronger magical aura, a dweomer cap's light shimmers perceptibly, changing its hue and pattern. A dweomer cap can suppress or resume its luminescence as a standard action, though it has reason to do so only when serving as a familiar and ordered by its master to do so.</p>
<Header sub>Description</Header>
<p>A dweomer cap is a black mushroom covered in wavy purple and orange patterns. It is typically found in regions of residual magical activity, such as abandoned arcane laboratories and sites of magical disasters. Although a dweomer cap can subsist on decaying organic material, it thrives and releases spores only when it can absorb trace magical energies. This makes these fungi an indicator that magical traps or treasures might be nearby. Spellcasters sometimes adopt dweomer caps as familiars, learning to read the fungi's scintillations to help identify nearby magical effects.</p>
<p>A typical dweomer cap is about 1 foot wide and weighs around 2 pounds.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_fire_salamander = {title: "Fire Salamander (Familiar)", jsx: <><p><em>Yellow spots and stripes run from this amphibian's wide snout to the tip of its tail.</em></p>
<Header full><span>Fire Salamander</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_fire_salamander--info" source={[["Ultimate Wilderness",196]]} xp="135" n diminutive animal init={2} llv scent pcp={-1} />
<Defense id="monster-familiar_fire_salamander--defense" ac={[16,16,14]} mod="+2 Dex, +4 size" hp={[3,"1d8-1"]} fort="+1" ref="+4" will="-1" def={[["skin secretions","skin secretions"]]} />
<Offense id="monster-familiar_fire_salamander--offense" sp={10} sw={20} melee="bite +6 (1d2-4)" space={"1"} reach={"0"} />
<Stats id="monster-familiar_fire_salamander--stats" atts={[2,14,8,1,8,6]} bab={0} cmb={-2} cmd={4} cmdP="8 vs. trip" feats={["Weapon Finesse"]} skills={{"ea":{"b":6},"stl":{"b":18},"swim":{"b":10}}} racial="+4 Escape Artist" />
<Ecology id="monster-familiar_fire_salamander--eco-eco" env="temperate forests" org="solitary, pair, or congress (3-10)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Skin Secretions (Ex)</strong> A creature that strikes a fire salamander with an unarmed strike or natural weapon exposes itself to the salamander's toxic skin and must immediately succeed at a DC 9 Fortitude save to resist being <Link to="/misc/sickened">sickened</Link> for 1 round. The secretions also make the salamander difficult to grab, giving it a +4 racial bonus on Escape Artist checks. The save DC is Constitution-based.</p>
<Header sub>Description</Header>
<p>Despite their name, fire salamanders have nothing to do with the evil outsiders known as <Link to="/monster/salamander">salamanders</Link>. These are Diminutive poisonous amphibians that can live more than 50 years. They are most active after dusk, eating earthworms, insects, slugs, and spiders. During the day, they hide amid fallen leaves or near mossy tree trunks.</p>
<p>Fire salamanders are 6 to 10 inches long and weigh only 2 ounces.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_flowering_lattice = {title: "Flowering Lattice (Familiar)", jsx: <><p><em>This scuttling patchwork plant features flowers of many different shapes and colors.</em></p>
<Header full><span>Flowering Lattice</span><span>CR 1/6</span></Header>
<div className="reduce">
<Info id="monster-familiar_flowering_lattice--info" source={[["Ultimate Wilderness",196]]} xp="65" n diminutive plant init={1} llv pcp={1} />
<Defense id="monster-familiar_flowering_lattice--defense" ac={[15,15,14]} mod="+1 Dex, +4 size" hp={[3,"1d8-1"]} fort="+1" ref="+1" will="+1" immune={<Link to="/umr/plant_traits">plant traits</Link>} />
<Offense id="monster-familiar_flowering_lattice--offense" sp={5} cl={5} space={"1"} reach={"0"} specAtt={[["pollen","pollen"]]} />
<Stats id="monster-familiar_flowering_lattice--stats" atts={[1,13,9,0,12,8]} bab={0} cmb={-3} cmd={2} skills={{"climb":{"b":3}}} sq="bountiful fruits" />
<Ecology id="monster-familiar_flowering_lattice--eco-eco" env="temperate or warm hills" org="solitary, pair, or bloom (3-5)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Bountiful Fruits (Ex)</strong> Once per week, a flowering lattice produces a handful of small fruits or berries that remain ripe for 1 week. Eating all of the fruit takes 1 minute and affects the eater as if she had consumed a berry affected by <Link to="/spell/goodberry">goodberry</Link>.</p>
<p><strong>Pollen (Ex)</strong> Once every 1d4 rounds, a flowering lattice can expel a cloud of pollen in a 10-foot cone. Creatures in the area are <Link to="/misc/dazzled">dazzled</Link> for 2 rounds (Fortitude DC 11 negates). If a creature currently dazzled by the pollen is affected again, it is <Link to="/misc/blinded">blinded</Link> for 1 round (Fortitude DC 11 negates). The save DC is Constitution-based and includes a +2 racial bonus.</p>
<Header sub>Description</Header>
<p>The result of centuries of plant husbandry, flowering lattices are delicate networks of vines that form blossoming nets about 1 square foot in size. As many as 12 varieties of flower grow from an individual flowering lattice, with each bloom opening at different times of the year and hours of the day to ensure a nearly constant array of colorful petals. This plant's enthusiasts often incorporate the organism into their fashion, draping them over the shoulders like a stole or over the head as a hood. These lattices require regular care, surviving on their own only in regions with rich soil and ample pollinators.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_flying_fox = {title: "Flying Fox (Familiar)", jsx: <><Header full><span>Flying Fox</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_flying_fox--info" source={[["Bestiary 5",112]]} xp="135" n tiny animal init={1} llv scent pcp={9} />
<Defense id="monster-familiar_flying_fox--defense" ac={[13,13,12]} mod="+1 Dex, +2 size" hp={[5,"1d8"]} fort="+3" ref="+3" will="+2; +4 vs. disease" />
<Offense id="monster-familiar_flying_fox--offense" sp={10} fl={60} flP="average" melee="bite +1 (1d3-1)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_flying_fox--stats" atts={[9,13,12,2,14,5]} bab={0} cmb={-1} cmd={8} feats={[["Skill Focus"," (Perception)"]]} skills={{"fly":{"b":5},"per":{"b":9}}} />
<Ecology id="monster-familiar_flying_fox--eco-eco" env="warm forests" org="solitary, pair, or colony (10-100)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>These large bats are herbivorous and lack the echolocation abilities of their smaller kin, but are resistant to disease.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_flying_squirrel = {title: "Flying Squirrel (Familiar)", jsx: <><Header full><span>Flying Squirrel</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_flying_squirrel--info" source={[["Bestiary 3",112]]} xp="135" n tiny animal init={2} llv pcp={1} />
<Defense id="monster-familiar_flying_squirrel--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[3,"1d8-1"]} fort="+1" ref="+4" will="+1" />
<Offense id="monster-familiar_flying_squirrel--offense" sp={20} fl={40} flP="clumsy" melee="bite +4 (1d3-4)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_flying_squirrel--stats" atts={[3,15,8,1,12,6]} bab={0} cmb={0} cmd={6} cmdP="10 vs. trip" feats={[["Acrobatic",<sup>B</sup>],"Weapon Finesse"]} skills={{"acro":{"b":16,"x":"+12 when jumping"},"climb":{"b":10}}} racial="+12 Acrobatics, +8 Climb" sq="glide" />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Ecology id="monster-familiar_flying_squirrel--eco-eco" env="temperate forests" org="solitary or pair" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Glide (Ex)</strong> A flying squirrel cannot use its fly speed to hover. When flying, a flying squirrel must end its movement at least 5 feet lower in elevation than where it started.</p>
<Header sub>Description</Header>
<p>Although not capable of actual flight, a flying squirrel possesses a furry membrane stretching between its wrists and ankles, allowing it to glide for long distances.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_fox = {title: "Fox (Familiar)", jsx: <><Header full><span>Fox</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_fox--info" source={[["Bestiary 3",112],["Ultimate Magic",117]]} xp="100" n tiny animal init={2} llv scent pcp={8} />
<Defense id="monster-familiar_fox--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[5,"1d8+1"]} fort="+3" ref="+4" will="+1" />
<Offense id="monster-familiar_fox--offense" sp={40} melee="bite +1 (1d3-1)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_fox--stats" atts={[9,15,13,2,12,6]} bab={0} cmb={0} cmd={9} cmdP="13 vs. trip" feats={[["Skill Focus"," (Perception)"]]} skills={{"acro":{"b":2,"x":"+10 when jumping"},"per":{"b":8}}} racial="+4 Acrobatics when jumping, +4 Survival when tracking by scent" />
<Ecology id="monster-familiar_fox--eco-eco" env="any" org="solitary, pair, or skulk (3-12)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>This cunning yet wary animal pounces on live prey.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_giant_isopod = {title: "Giant Isopod (Familiar)", jsx: <><p><em>This many-legged crustacean is the size of a sewer rat, its body protected by several thick shell-like plates.</em></p>
<Header full><span>Giant Isopod</span><span>CR 1/8</span></Header>
<div className="reduce">
<Info id="monster-familiar_giant_isopod--info" source={[["Ultimate Wilderness",198],["Pathfinder #55: The Wormwood Mutiny",89]]} xp="50" n tiny vermin subs={["aquatic"]} init={-1} dv={60} llv pcp={0} />
<Defense id="monster-familiar_giant_isopod--defense" ac={[14,11,14]} mod="-1 Dex, +3 natural, +2 size" hp={[6,"1d8+2"]} fort="+4" ref="-1" will="+0" def={[["curl","curl"]]} immune="mind-affecting effects" />
<Offense id="monster-familiar_giant_isopod--offense" sp={20} sw={10} melee="bite -1 (1d3-3)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_giant_isopod--stats" atts={[5,9,14,0,11,2]} bab={0} cmb={-3} cmd={4} cmdP="can't be tripped" skills={{"swim":{"b":5}}} />
<Ecology id="monster-familiar_giant_isopod--eco-eco" env="any ocean" org="solitary, pair, or scuttle (3-20)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Curl (Ex)</strong> As a standard action, a giant isopod can curl into a ball, increasing its natural armor bonus by +2 but preventing it from taking any move actions. Uncurling is also a standard action.</p>
<Header sub>Description</Header>
<p>Giant isopods are carnivorous scavengers that scour the ocean's floor. They vaguely resemble the common wood louse in appearance, though they can grow to be up to 2-1/2 feet long and weigh nearly 4 pounds. Their unusual size and insectile appearance cause many humanoids to be wary of them, despite their relative harmlessness.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_giant_tardigrade = {title: "Giant Tardigrade (Familiar)", jsx: <><p><em>This strange eight-legged creature looks vaguely like an insectile bear as it swims through the water.</em></p>
<Header full><span>Giant Tardigrade</span><span>CR 1/8</span></Header>
<div className="reduce">
<Info id="monster-familiar_giant_tardigrade--info" source={[["Ultimate Wilderness",208]]} xp="50" n diminutive vermin subs={["aquatic"]} init={1} dv={60} pcp={0} />
<Defense id="monster-familiar_giant_tardigrade--defense" ac={[16,15,15]} mod="+1 Dex, +1 natural, +4 size" hp={[7,"1d8+3"]} fort="+5" ref="+1" will="+0" def={[["hardy","hardy"]]} immune="mind-affecting effects" resist="acid 2, cold 2, fire 2" />
<Offense id="monster-familiar_giant_tardigrade--offense" sp={20} cl={20} sw={20} melee="bite +0 (1d2-4)" space={"1"} reach={"0"} />
<Stats id="monster-familiar_giant_tardigrade--stats" atts={[2,12,17,0,10,2]} bab={0} cmb={-3} cmd={3} cmdP="15 vs. trip" skills={{"climb":{"b":9}}} sq={<Link to="/umr/amphibious">amphibious</Link>} />
<Ecology id="monster-familiar_giant_tardigrade--eco-eco" env="any" org="solitary, pair, or colony (3-20)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Hardy (Ex)</strong> A giant tardigrade is able to endure extreme conditions for extended periods of time. It is unharmed by extreme cold, extreme heat, and less extreme temperatures. It takes no damage from decompression (such as in the vacuum of space) or high-pressure environments (such as in extremely deep water).</p>
<Header sub>Description</Header>
<p>Giant tardigrades, sometimes referred to as water bears, are miniscule, eight-legged creatures that live in water but can survive almost anywhere. The giant tardigrade grows as large as 1 foot in length and feeds on patches of bacteria, fungus, and plant matter.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_goat = {title: "Goat (Familiar)", jsx: <><Header full><span>Goat</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_goat--info" source={[["Bestiary 3",112],["Ultimate Magic",118]]} xp="135" n small animal init={1} llv pcp={0} />
<Defense id="monster-familiar_goat--defense" ac={[13,12,12]} mod="+1 Dex, +1 natural, +1 size" hp={[5,"1d8+1"]} fort="+3" ref="+3" will="+0" />
<Offense id="monster-familiar_goat--offense" sp={30} melee="gore +2 (1d4+1)" />
<Stats id="monster-familiar_goat--stats" atts={[12,13,12,2,11,5]} bab={0} cmb={0} cmd={11} cmdP="15 vs. trip" feats={["Nimble Moves"]} skills={{"acro":{"b":1,"x":"+5 when jumping"},"climb":{"b":5},"sur":{"b":0,"x":"+4 to find food"}}} racial="+4 Acrobatics when jumping, +4 Survival to find food" />
<Ecology id="monster-familiar_goat--eco-eco" env="any" org="solitary, pair, or herd (3-12)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Goats are often ill-tempered and stubborn, but they have an uncanny knack for finding food in the strangest of places and can digest almost anything.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_hawk = {title: "Hawk (Familiar)", jsx: <><Header full><span>Hawk</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_hawk--info" source={[["Pathfinder RPG Bestiary",131]]} xp="135" n tiny animal init={3} llv pcp={14} />
<Defense id="monster-familiar_hawk--defense" ac={[15,15,12]} mod="+3 Dex, +2 size" hp={[4,"1d8"]} fort="+2" ref="+5" will="+2" />
<Offense id="monster-familiar_hawk--offense" sp={10} fl={60} flP="average" melee="2 talons +5 (1d4-2)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_hawk--stats" atts={[6,17,11,2,14,7]} bab={0} cmb={1} cmd={9} feats={["Weapon Finesse"]} skills={{"fly":{"b":7},"per":{"b":14}}} racial="+8 Perception" />
<Ecology id="monster-familiar_hawk--eco-eco" env="temperate forests" org="solitary or pair" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Falconers prize these majestic birds as trained hunting companions if raised from chicks and properly instructed.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_hedgehog = {title: "Hedgehog (Familiar)", jsx: <><Header full><span>Hedgehog</span><span>CR 1/8</span></Header>
<div className="reduce">
<Info id="monster-familiar_hedgehog--info" source={[["Ultimate Magic",119]]} xp="50" n diminutive animal init={3} llv pcp={1} />
<Defense id="monster-familiar_hedgehog--defense" ac={[18,17,15]} mod="+3 Dex, +1 natural, +4 size" hp={[2,"1d8-2"]} fort="+0" ref="+5" will="+1" />
<Offense id="monster-familiar_hedgehog--offense" sp={20} space={"1"} reach={"0"} />
<Stats id="monster-familiar_hedgehog--stats" atts={[1,16,6,2,12,7]} bab={0} cmb={-1} cmd={4} cmdP="8 vs. trip" feats={["Athletic"]} skills={{"climb":{"b":5}}} />
<Ecology id="monster-familiar_hedgehog--eco-eco" env="tropical or temperate forests" org="solitary or pair" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Spiny Defense (Ex)</strong> As a move action, a hedgehog can roll itself up into a spiny ball. While rolled up, it gains a +1 enhancement bonus to its existing natural armor, and any creature attempting to <Link to="/rule/grapple">grapple</Link> the hedgehog takes 1d3 damage on making a grapple check. While rolled up, a hedgehog cannot take any action other than leaving this state. The hedgehog can leave this state as a move action.</p>
<Header sub>Description</Header>
<p>Hedgehogs are spiny, insectivorous mammals. When threatened, a hedgehog rolls up into a spiny ball as a defense mechanism.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_horned_lizard = {title: "Horned Lizard (Familiar)", jsx: <><p><em>The blunt snout of this lizard bears bony horns, and its flat, round body is adorned with many spines.</em></p>
<Header full><span>Horned Lizard</span><span>CR 1/6</span></Header>
<div className="reduce">
<Info id="monster-familiar_horned_lizard--info" source={[["Ultimate Wilderness",197]]} xp="65" n diminutive animal init={1} llv scent pcp={0} />
<Defense id="monster-familiar_horned_lizard--defense" ac={[16,15,15]} mod="+1 Dex, +1 natural, +4 size" hp={[3,"1d8-1"]} fort="+1" ref="+3" will="+0" />
<Offense id="monster-familiar_horned_lizard--offense" sp={20} melee="bite -1 (1d2-5)" ranged="blood squirt +5 touch (special)" space={"1"} reach={"0"} />
<Stats id="monster-familiar_horned_lizard--stats" atts={[1,12,8,1,10,3]} bab={0} cmb={-3} cmd={2} cmdP="6 vs. trip" feats={["Run"]} skills={{"stl":{"b":17}}} sq="camouflage, puff up" />
<Ecology id="monster-familiar_horned_lizard--eco-eco" env="warm desert" org="solitary, pair, or flock (3-12)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Blood Squirt (Ex)</strong> Once per day as a standard action that doesn't provoke attacks of opportunity, a horned lizard can squirt a 5-foot-long stream of blood from the corners of its eyes. The animal's blood contains noxious chemicals, and a creature hit by the blood must succeed at a DC 9 Fortitude save or be <Link to="/misc/sickened">sickened</Link> for 1d4 rounds. The save DC is Constitution-based.</p>
<p><strong>Camouflage (Ex)</strong> While in desert terrain, a horned lizard can use the Stealth skill to hide even if the terrain doesn't grant <Link to="/rule/cover">cover</Link> or <Link to="/rule/concealment">concealment</Link>.</p>
<p><strong>Puff Up (Ex)</strong> When taking the <Link to="/misc/total_defense">total defense</Link> action, a horned lizard puffs up its body, appearing larger and more horned and gaining an additional +4 bonus to CMD against <Link to="/rule/grapple">grapple</Link> attempts.</p>
<Header sub>Description</Header>
<p>Despite their sluggish, toad-like appearance, these creatures are reptiles with dry, spiny skin adapted to prevent water loss in their native desert environment. They are typically found sunning themselves on rocks during all but the hottest parts of the day, retreating beneath the shade of ridges or rocks when the sun is directly overhead. Their main method of defense is to avoid detection, but when their desert coloration fails to fool predators, they attempt to flee or use their other defensive methods, such as their unique ability to rupture blood vessels in their eyes so they can spray noxious blood at approaching predators. Due to their fierce defensive displays, horned lizards are often thought to be overly aggressive, though people who keep them as pets or familiars know that they can be affectionate creatures.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_house_centipede = {title: "House Centipede (Familiar)", jsx: <><Header full><span>House Centipede</span><span>CR 1/8</span></Header>
<div className="reduce">
<Info id="monster-familiar_house_centipede--info" source={[["Ultimate Magic",119]]} xp="50" n tiny vermin init={3} dv={60} pcp={4} />
<Defense id="monster-familiar_house_centipede--defense" ac={[17,15,14]} mod="+3 Dex, +2 natural, +2 size" hp={[4,"1d8"]} fort="+2" ref="+3" will="+0" immune="mind-affecting effects" />
<Offense id="monster-familiar_house_centipede--offense" sp={40} cl={40} melee="bite +5 (1d3-5 plus poison)" space={"2-1/2"} reach={"0"} specAtt={[["poison","poison"]]} />
<Stats id="monster-familiar_house_centipede--stats" atts={[1,17,10,0,10,2]} bab={0} cmb={1} cmd={6} cmdP="can't be tripped" feats={["Weapon Finesse"]} skills={{"climb":{"b":11},"per":{"b":4},"stl":{"b":19}}} racial="+4 Perception, +8 Stealth" />
<Ecology id="monster-familiar_house_centipede--eco-eco" env="temperate or warm forest or underground" org="solitary, pair, or colony (3-6)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Poison (Ex)</strong></p>
<div className="sideNoteWrap"><ScrollContainer id="monster-familiar_house_centipede--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Bite-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 2 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}><Link to="/misc/dazed">dazed</Link> 1 round</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><Header sub>Description</Header>
<p>Multi-legged house centipedes can be found almost anywhere, and can have from 20 to more than 300 legs. Their bites are poisonous, and can daze the unwary.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_ioun_wyrd = {title: "Ioun Wyrd (Familiar)", jsx: <><p><em>This strange creature appears as a floating swarm of gemstones surrounding a larger stone that pulses with dim light.</em></p>
<Header full><span>Ioun Wyrd</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_ioun_wyrd--info" source={[["Ultimate Wilderness",197],["Familiar Folio",30]]} xp="135" n tiny construct init={2} blindsight={30} pcp={2} />
<Defense id="monster-familiar_ioun_wyrd--defense" ac={[15,15,12]} mod="+2 Dex, +1 dodge, +2 size" hp={[5,"1d10"]} fort="+0" ref="+2" will="+2" immune={<Link to="/umr/construct_traits">construct traits</Link>} />
<Offense id="monster-familiar_ioun_wyrd--offense" fl={30} flP="average" melee="slam +0 (1d4-3)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_ioun_wyrd--stats" atts={[4,15,0,3,14,5]} bab={1} cmb={1} cmd={9} feats={["Dodge"]} skills={{"fly":{"b":10}}} lang={["CX"]} sq="ioun affinity, share iouns" />
<Ecology id="monster-familiar_ioun_wyrd--eco-eco" env="any" org="solitary" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Ioun Affinity (Su)</strong> An ioun wyrd can integrate a number of <Link to="/magic-wondrous/ioun_stone">ioun stones</Link> into its body equal to 1 + half its Hit Dice. Because an ioun wyrd sees all ioun stones as equal and gains no benefits from them, the wyrd's ioun stones can be swapped out by any creature the wyrd trusts.</p>
<p><strong>Share Iouns (Su)</strong> A character with an ioun wyrd familiar gains the benefit of the wyrd's ioun stones as long as the character is within 30 feet of the ioun wyrd.</p>
<Header sub>Description</Header>
<p>At first glance, these creatures appear to resemble some manner of <Link to="/monster/earth_elemental">earth elementals</Link>, but they're actually bizarre constructs created by spellcasters from certain types of minerals and gemstones. Ioun wyrds are occasionally found in the wild, typically near the haunts of spellcasters and arcane societies where the strange little creatures escaped their former masters.</p>
<p>A typical ioun wyrd is roughly 2 feet in diameter and weighs between 15 and 20 pounds.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
<Header sub>Construction</Header>
<p>An ioun wyrd is made of small gemstones, lodestones, and bits of granite, all coated with 500 gp worth of alchemical materials. A functional ioun stone must also be present at its construction, which the ioun wyrd takes as the first ioun stone to be integrated into its body with its ioun affinity.</p>
<p><strong>CL</strong> 5th; <strong>Price</strong> 1,500 gp plus ioun stone</p>
<p><strong>Requirements</strong> <Link to="/feat/craft_construct">Craft Construct</Link>, <Link to="/spell/animate_objects">animate objects</Link>, <Link to="/spell/lesser_geas">lesser geas</Link>; Skill Knowledge (arcana) DC 15; <strong>Cost</strong> 1,000 gp plus ioun stone</p>
</>};
const _familiar_jerboa = {title: "Jerboa (Familiar)", jsx: <><p><em>This small, sand-colored rodent has long hind legs and large ears. Its tufted tail is longer than the animal itself.</em></p>
<Header full><span>Jerboa</span><span>CR 1/6</span></Header>
<div className="reduce">
<Info id="monster-familiar_jerboa--info" source={[["Ultimate Wilderness",198]]} xp="65" n diminutive animal init={7} llv scent pcp={6} />
<Defense id="monster-familiar_jerboa--defense" ac={[17,17,14]} mod="+3 Dex, +4 size" hp={[3,"1d8-1"]} fort="+1" ref="+5" will="+2" />
<Offense id="monster-familiar_jerboa--offense" sp={20} melee="bite -1 (1d2-5)" space={"1"} reach={"0"} />
<Stats id="monster-familiar_jerboa--stats" atts={[1,16,8,2,15,3]} bab={0} cmb={-1} cmd={4} feats={["Improved Initiative"]} skills={{"acro":{"b":11},"per":{"b":6}}} racial="+4 Acrobatics, +4 Perception" />
<Ecology id="monster-familiar_jerboa--eco-eco" env="warm deserts" org="solitary, pair, or burrow (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Jerboas are desert rodents that live in burrows and hop around on long, thin legs. At night, they emerge from their burrows to eat plants and hunt insects under the light of the moon. Jerboas generally live to be around 6 years old.</p>
<p>A jerboa is 6 inches long, has a 1-foot-long tail, and weighs between 1 and 3 ounces.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_kakapo = {title: "Kakapo (Familiar)", jsx: <><p><em>This rotund parrot has vibrant green-and-black feathers, a short hooked beak, and an array of white whiskers.</em></p>
<Header full><span>Kakapo</span><span>CR 1/8</span></Header>
<div className="reduce">
<Info id="monster-familiar_kakapo--info" source={[["Ultimate Wilderness",198],["Familiar Folio",24]]} xp="50" n tiny animal init={1} llv pcp={3} />
<Defense id="monster-familiar_kakapo--defense" ac={[13,13,12]} mod="+1 Dex, +2 size" hp={[4,"1d8"]} fort="+2" ref="+5" will="-1" />
<Offense id="monster-familiar_kakapo--offense" sp={30} cl={10} spExtra="glide" melee="bite -2 (1d3-4)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_kakapo--stats" atts={[3,13,10,2,8,12]} bab={0} cmb={-1} cmd={5} feats={["Lightning Reflexes"]} skills={{"climb":{"b":4},"per":{"b":3}}} />
<Ecology id="monster-familiar_kakapo--eco-eco" env="warm jungles" org="solitary, pair, or family (3-4)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Glide (Ex)</strong> Though it cannot fly, a kakapo can spread its wings midfall to glide safely to the ground without taking damage. For every 10 feet it falls, a kakapo can move 5 feet horizontally in midair. For instance, a kakapo falling a vertical distance of 20 feet can move 10 feet horizontally.</p>
<Header sub>Description</Header>
<p>The kakapo is a small, flightless parrot native to tropical islands. Primarily nocturnal creatures, the birds come out at night to forage for fruits, nuts, plants, and seeds. Kakapos can live to be over 100 years old, breeding only two or three times per decade.</p>
<p>A kakapo is roughly 2 feet long from beak to tail tip and can weigh up to 9 pounds.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_king_crab = {title: "King Crab (Familiar)", jsx: <><Header full><span>King Crab</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_king_crab--info" source={[["Ultimate Magic",119]]} xp="100" n tiny vermin subs={["aquatic"]} init={2} dv={60} pcp={4} />
<Defense id="monster-familiar_king_crab--defense" ac={[18,14,16]} mod="+2 Dex, +4 natural, +2 size" hp={[5,"1d8+1"]} fort="+3" ref="+2" will="+0" immune="mind-affecting effects" />
<Offense id="monster-familiar_king_crab--offense" sp={30} sw={20} melee={<>2 claws +0 (1d2-2 plus <Link to="/umr/grab">grab</Link>)</>} space={"2-1/2"} reach={"0"} constrict="1d2-2" />
<Stats id="monster-familiar_king_crab--stats" atts={[7,15,12,0,10,2]} bab={0} cmb={0} cmbP="+4 grapple" cmd={8} cmdP="20 vs. trip" skills={{"per":{"b":4},"swim":{"b":10}}} racial="+4 Perception" sq="water dependency" />
<Ecology id="monster-familiar_king_crab--eco-eco" env="any aquatic" org="solitary or cast (2-12)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Water Dependency (Ex)</strong> Crabs can survive out of the water for 1 hour per point of Constitution. Beyond this limit, a crab runs the risk of suffocation, as if it were <Link to="/rule/drowning">drowning</Link>.</p>
<Header sub>Description</Header>
<p>King crabs are small crustaceans with eight legs and two pincers or claws. Aquatic scavengers, crabs can also survive on land for some time, but must return to the water or suffocate.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_koala = {title: "Koala (Familiar)", jsx: <><p><em>This wide-faced animal looks like a small, plump bear with a flat black nose, small round eyes, and white-tufted ears.</em></p>
<Header full><span>Koala</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_koala--info" source={[["Ultimate Wilderness",199],["Familiar Folio",26]]} xp="100" n small animal init={0} llv pcp={3} />
<Defense id="monster-familiar_koala--defense" ac={[11,11,11]} mod="+1 size" hp={[5,"1d8+1"]} fort="+5" ref="+2" will="-1" />
<Offense id="monster-familiar_koala--offense" sp={20} cl={20} melee="2 claws -1 (1d3-2)" />
<Stats id="monster-familiar_koala--stats" atts={[6,11,13,2,9,8]} bab={0} cmb={-3} cmd={7} cmdP="11 vs. trip" feats={["Great Fortitude"]} skills={{"climb":{"b":6},"per":{"b":3}}} />
<Ecology id="monster-familiar_koala--eco-eco" env="temperate and warm forests" org="solitary, pair, or group (3-5)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>The koala's cute appearance belies the tree-climbing marsupial's aggressive nature. Koalas subsist solely on the leaves of the eucalyptus tree, which are all but inedible to most other mammals. Because of their highly selective diet, most koalas see little reason to stray from eucalyptus trees at all, so they spend most of their lives hanging on to branches or moving from crook to crook by swinging between boughs. Due to this specialized diet, people who take a koala as a pet or familiar should secure a regular supply of eucalyptus leaves for the animal to eat, particularly if the person plans to go on a long journey in a place where those trees can't be easily found. When a koala walks (usually just to get from tree to tree), it does so on all fours.</p>
<p>A koala measures about 2-1/2 feet from tail to nose and can weigh up to 30 pounds.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_lamprey = {title: "Lamprey (Familiar)", jsx: <><p><em>This serpentine fish has a horrific circular mouth filled with hook-like teeth.</em></p>
<Header full><span>Lamprey</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_lamprey--info" source={[["Ultimate Wilderness",199]]} xp="135" n tiny animal subs={["aquatic"]} init={2} llv pcp={1} />
<Defense id="monster-familiar_lamprey--defense" ac={[15,14,13]} mod="+2 Dex, +1 natural, +2 size" hp={[6,"1d8+2"]} fort="+4" ref="+4" will="+1" />
<Offense id="monster-familiar_lamprey--offense" sw={30} melee="bite +4 (1d4-3 plus attach)" space={"2-1/2"} reach={"0"} bDrain="1 Str damage" />
<Stats id="monster-familiar_lamprey--stats" atts={[4,14,14,1,12,2]} bab={0} cmb={0} cmd={7} feats={["Weapon Finesse"]} skills={{"stl":{"b":14},"swim":{"b":5}}} />
<Ecology id="monster-familiar_lamprey--eco-eco" env="temperate oceans" org="solitary, pair, or school (3-12)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>A lamprey is a tiny jawless fish with a funnel-shaped sucking mouth that contains numerous razor-sharp teeth, which it uses to cut through skin and bore into the flesh of its victims to suck their blood. Lampreys are often found on larger fish in the ocean where they are engaged in symbiotic relationships.</p>
<p>Lampreys can reach a length of up to 4 feet and weigh up to 5 pounds.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_lemming = {title: "Lemming (Familiar)", jsx: <><p><em>This small, plump rodent has a calico mix of color and a short tail.</em></p>
<Header full><span>Lemming</span><span>CR 1/8</span></Header>
<div className="reduce">
<Info id="monster-familiar_lemming--info" source={[["Ultimate Wilderness",200],["Reign of Winter Player's Guide",10]]} xp="50" n diminutive animal init={1} llv pcp={1} />
<Defense id="monster-familiar_lemming--defense" ac={[15,15,14]} mod="+1 Dex, +4 size" hp={[2,"1d8-2"]} fort="+2" ref="+3" will="+1" />
<Offense id="monster-familiar_lemming--offense" sp={15} melee="bite -1 (1d2-5)" space={"1"} reach={"0"} />
<Stats id="monster-familiar_lemming--stats" atts={[1,12,6,2,13,4]} bab={0} cmb={-3} cmd={2} cmdP="6 vs. trip" feats={["Great Fortitude"]} skills={{"stl":{"b":17}}} />
<Ecology id="monster-familiar_lemming--eco-eco" env="cold plains" org="solitary, pair, or slice (3-30)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>These herbivores scurry about colder regions chewing on bulbs, grasses, roots, and shoots. They do not hibernate, but they do burrow for shelter and warmth.</p>
<p>Lemmings grow to be as large as 6 inches from their noses to their short tails.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_leopard_slug = {title: "Leopard Slug (Familiar)", jsx: <><p><em>This dark-yellow, hand-length slug is covered in a pattern of black spots and stripes.</em></p>
<Header full><span>Leopard Slug</span><span>CR -</span></Header>
<div className="reduce">
<Info id="monster-familiar_leopard_slug--info" source={[["Ultimate Wilderness",200],["Familiar Folio",30]]} xp="0" n diminutive vermin init={-3} dv={60} pcp={-2} />
<Defense id="monster-familiar_leopard_slug--defense" ac={[11,11,11]} mod="-3 Dex, +4 size" hp={[5,"1d8+1"]} fort="+3" ref="-3" will="-2" immune="mind-affecting effects" />
<Offense id="monster-familiar_leopard_slug--offense" sp={5} cl={5} space={"1"} reach={"0"} />
<Stats id="monster-familiar_leopard_slug--stats" atts={[1,4,12,0,7,9]} bab={0} cmb={-7} cmd={-2} cmdP="can't be tripped" skills={{"climb":{"b":3}}} sq={<><Link to="/umr/compression">compression</Link>, slime strand, suction</>} />
<Ecology id="monster-familiar_leopard_slug--eco-eco" env="temperate forests" org="solitary, pair, or cornucopia (3-12)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Slime Strand (Ex)</strong> A leopard slug can turn its mucus into a 30-foot-long strand, much like a spider's silk. It can hang from this strand indefinitely and lower itself safely at a rate of 5 feet per round. It can climb back up the strand at the same rate. Once the slug breaks contact with the strand, the mucus disintegrates in 1d4 rounds.</p>
<p><strong>Suction (Ex)</strong> A leopard slug secretes sticky mucus, which allows it to apply its climb speed to any surface, even sheer walls and ceilings. Once attached to a surface, it has no chance of falling off unless it's <Link to="/rule/grapple">grappled</Link> and actively peeled away.</p>
<Header sub>Description</Header>
<p>Leopard slugs are distinctive due to their unique spotted coloration, which calls to mind the pelt of a leopard. This characteristic pattern allows leopard slugs to blend in with foliage and stones in the forest environments they call home. Occasionally, one can find more colorful varieties of leopard slug (such as bright yellow, flaming red, or fluorescent orange), bred specifically as pets or familiars by the esoteric masters who prefer such creatures. Although many find them disgusting, leopard slugs are completely harmless and award no XP if slain.</p>
<p>Leopard slugs are about 6 inches long and weigh less than a pound.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_lizard = {title: "Lizard (Familiar)", jsx: <><Header full><span>Lizard</span><span>CR 1/6</span></Header>
<div className="reduce">
<Info id="monster-familiar_lizard--info" source={[["Pathfinder RPG Bestiary",131]]} xp="65" n tiny animal init={2} llv pcp={1} />
<Defense id="monster-familiar_lizard--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[3,"1d8-1"]} fort="+1" ref="+4" will="+1" />
<Offense id="monster-familiar_lizard--offense" sp={20} cl={20} melee="bite +4 (1d4-4)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_lizard--stats" atts={[3,15,8,1,12,2]} bab={0} cmb={0} cmd={6} cmdP="10 vs. trip" feats={["Weapon Finesse"]} skills={{"acro":{"b":10},"climb":{"b":10},"stl":{"b":14}}} racial="+8 Acrobatics" />
<Ecology id="monster-familiar_lizard--eco-eco" env="any temperate or warm" org="solitary, pair, or nest (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Lizards can be found in any temperate or tropical climate. When confronted with predators, a lizard flees and hides.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_margay_cat = {title: "Margay Cat (Familiar)", jsx: <><p><em>Black rosettes and streaks mark the brown fur of this slender feline.</em></p>
<Header full><span>Margay Cat</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_margay_cat--info" source={[["Ultimate Wilderness",193]]} xp="100" n tiny animal init={2} llv scent pcp={0} />
<Defense id="monster-familiar_margay_cat--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[4,"1d8"]} fort="+2" ref="+4" will="+0" />
<Offense id="monster-familiar_margay_cat--offense" sp={20} cl={20} melee="bite -1 (1d3-3), 2 claws -1 (1d2-3)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_margay_cat--stats" atts={[4,14,10,2,11,9]} bab={0} cmb={0} cmd={7} cmdP="11 vs. trip" feats={[["Skill Focus"," (Climb)"]]} skills={{"bluff":{"b":0,"x":"+4 when mimicking animal sounds"},"climb":{"b":8},"stl":{"b":14}}} racial="+4 Bluff to mimic animal sounds" sq="sound mimicry (animals)" />
<Ecology id="monster-familiar_margay_cat--eco-eco" env="warm forests" org="solitary or pair" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>The margay is a small cat that lives in dense tropical forests, preferring to spend most of its life in the trees. During the day, a margay lounges in liana tangles far above the ground, and at night it chases birds, frogs, lizards, and monkeys through the treetops. A margay can use its sound mimicry ability to imitate the sounds of any animal of its own size or one size category smaller, and it often does so to lure prey into an ambush.</p>
<p>A margay weighs around 8 pounds and may reach a length of 3-4 feet, nearly half of which is its tail.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_meerkat = {title: "Meerkat (Familiar)", jsx: <><p><em>This curious, sand-colored, weasel-like creature has dark bands around its inquisitive eyes.</em></p>
<Header full><span>Meerkat</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_meerkat--info" source={[["Ultimate Wilderness",200]]} xp="100" n tiny animal init={2} llv scent pcp={1} />
<Defense id="monster-familiar_meerkat--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[5,"1d8+1"]} fort="+3" ref="+4" will="+1" immune="scorpion venom" />
<Offense id="monster-familiar_meerkat--offense" sp={30} br={5} melee="bite +4 (1d3-3)" space={"2-1/2"} reach={"0"} specAtt={[["mob","mob"]]} />
<Stats id="monster-familiar_meerkat--stats" atts={[5,14,13,2,13,13]} bab={0} cmb={0} cmd={7} cmdP="11 vs. trip" feats={["Weapon Finesse"]} skills={{"stl":{"b":14}}} />
<Ecology id="monster-familiar_meerkat--eco-eco" env="warm plains" org="solitary, pair, mob (3-16), or clan (17-30)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Immunity to Scorpion Venom (Ex)</strong> Meerkats are immune to the poison of all scorpions.</p>
<p><strong>Mob (Ex)</strong> If two meerkats in the same square attack the same foe, they are considered to be <Link to="/rule/flanking">flanking</Link> that foe as if they were in two opposite squares.</p>
<Header sub>Description</Header>
<p>Meerkats are playful, highly social animals that hunt and forage during the day. They live in complex burrow systems consisting of numerous access holes, chambers, and tunnels. Their diet consists of eggs, fruit, insects, larvae, lizards, rodents, and scorpions. Using a wide range of sounds, they communicate and warn one another about threats, banding together in a mob when they need to defend themselves. Meerkats can live more than 10 years.</p>
<p>A meerkat weighs around 2 pounds and is about 1 foot tall when standing upright.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_mole_uw = {title: "Mole (UW) (Familiar)", jsx: <><p><em>This brown rodent has a furry, cylindrical body, a pointed snout, and large, thick paws that end in digging claws.</em></p>
<Header full><span>Mole (UW)</span><span>CR 1/8</span></Header>
<div className="reduce">
<Info id="monster-familiar_mole_uw--info" source={[["Ultimate Wilderness",201]]} xp="50" n diminutive animal init={0} llv tremorsense={15} pcp={0} />
<Defense id="monster-familiar_mole_uw--defense" ac={[14,14,14]} mod="+4 size" hp={[6,"1d8+2"]} fort="+4" ref="+2" will="+0" />
<Offense id="monster-familiar_mole_uw--offense" sp={20} br={5} melee="2 claws +0 (1-4)" space={"1"} reach={"0"} />
<Stats id="monster-familiar_mole_uw--stats" atts={[2,11,14,2,10,7]} bab={0} cmb={-4} cmd={2} cmdP="6 vs. trip" feats={[["Skill Focus"," (Stealth)"]]} skills={{"stl":{"b":19}}} sq={<Link to="/umr/hold_breath">hold breath</Link>} />
<Ecology id="monster-familiar_mole_uw--eco-eco" env="any land" org="solitary, pair, or labor (3-16)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Moles are small rodents that live primarily in burrows underground. While many varieties of moles exist, most share common features that include subterranean habitats, poor eyesight, and the ability to dig long distances with their powerful forelimbs.</p>
<p>The typical mole is 6 inches long and weighs less than a pound.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
<p><strong>Also see:</strong> <Link to="/monster/mole_ff">Mole (FF)</Link>, an alternate version of this creature.</p>
</>};
const _familiar_mole_ff = {title: "Mole (FF) (Familiar)", jsx: <><p><em>This brown, apparently eyeless rodent has a furry cylindrical body, a pointed snout, and large, thick paws that end in digging claws.</em></p>
<Header full><span>Mole (FF)</span><span>CR 1/6</span></Header>
<div className="reduce">
<Info id="monster-familiar_mole_ff--info" source={[["Familiar Folio",25]]} xp="65" n tiny animal init={0} llv pcp={7} />
<Defense id="monster-familiar_mole_ff--defense" ac={[12,12,12]} mod="+2 size" hp={[6,"1d8+2"]} fort="+4" ref="+2" will="+0" />
<Offense id="monster-familiar_mole_ff--offense" sp={20} br={10} melee="claw -1 (1d2-3)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_mole_ff--stats" atts={[5,11,14,2,10,7]} bab={0} cmb={-2} cmd={5} feats={[["Skill Focus"," (Perception)"]]} skills={{"per":{"b":7}}} sq={<Link to="/umr/hold_breath">hold breath</Link>} />
<Ecology id="monster-familiar_mole_ff--eco-eco" env="any land" org="solitary, pair, or labor (3-16)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Moles are small rodent mammals that live primarily in burrows underground. While many varieties of moles exist, most share common features that include subterranean habitats, poor eyesight, and the ability to dig long distances with their powerful forelimbs. The typical mole is 6 inches long and weighs less than a pound. These familiars are popular choices with <Link to="/race/ratfolk">ratfolk</Link>.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
<p><strong>Also see:</strong> <Link to="/monster/mole_uw">Mole (UW)</Link>, an alternate version of this creature.</p>
</>};
const _mole = {title: "Mole", notBookmarkable: true, jsx: <><p>Two seperate versions of the mole were published.</p>
<ul>
<li><Link to="/monster/mole_ff">Mole (FF)</Link> (Familiar Folio)</li>
<li><Link to="/monster/mole_uw">Mole (UW)</Link> (Ultimate Wilderness)</li>
</ul>
</>};
const _familiar_monkey = {title: "Monkey (Familiar)", jsx: <><Header full><span>Monkey</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_monkey--info" source={[["Pathfinder RPG Bestiary",132]]} xp="100" n tiny animal init={2} llv pcp={5} />
<Defense id="monster-familiar_monkey--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[4,"1d8"]} fort="+2" ref="+4" will="+1" />
<Offense id="monster-familiar_monkey--offense" sp={30} cl={30} melee="bite +4 melee (1d3-4)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_monkey--stats" atts={[3,15,10,2,12,5]} bab={0} cmb={0} cmd={6} feats={["Weapon Finesse"]} skills={{"acro":{"b":10},"climb":{"b":10},"per":{"b":5}}} racial="+8 Acrobatics" />
<Ecology id="monster-familiar_monkey--eco-eco" env="warm forests" org="solitary, pair, band (3-9), or troop (10-40)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Monkeys are highly social creatures. They spend the majority of their day searching for food.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_otter = {title: "Otter (Familiar)", jsx: <><Header full><span>Otter</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_otter--info" source={[["Bestiary 3",113]]} xp="100" n tiny animal init={3} llv pcp={1} />
<Defense id="monster-familiar_otter--defense" ac={[15,15,12]} mod="+3 Dex, +2 size" hp={[4,"1d8"]} fort="+2" ref="+5" will="+1" />
<Offense id="monster-familiar_otter--offense" sp={20} sw={30} melee="bite +5 (1d3-4)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_otter--stats" atts={[3,16,10,2,13,5]} bab={0} cmb={1} cmd={7} cmdP="11 vs. trip" feats={["Weapon Finesse"]} skills={{"ea":{"b":4},"swim":{"b":11}}} />
<Ecology id="monster-familiar_otter--eco-eco" env="any water" org="solitary or family (2-16)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Otters are curious and playful, and enjoy investigating new objects, sliding down wet rocks, and other simple games.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_owl = {title: "Owl (Familiar)", jsx: <><Header full><span>Owl</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_owl--info" source={[["Pathfinder RPG Bestiary",132]]} xp="135" n tiny animal init={3} llv pcp={10} />
<Defense id="monster-familiar_owl--defense" ac={[15,15,12]} mod="+3 Dex, +2 size" hp={[4,"1d8"]} fort="+2" ref="+5" will="+2" />
<Offense id="monster-familiar_owl--offense" sp={10} fl={60} flP="average" melee="2 talons +5 (1d4-2)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_owl--stats" atts={[6,17,11,2,15,6]} bab={0} cmb={1} cmd={9} feats={["Weapon Finesse"]} skills={{"fly":{"b":7},"per":{"b":10},"stl":{"b":15}}} racial="+4 Perception, +4 Stealth" />
<Ecology id="monster-familiar_owl--eco-eco" env="temperate forests" org="solitary or pair" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Owls are nocturnal, rodent-eating birds that make very little noise in flight.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_peafowl = {title: "Peafowl (Familiar)", jsx: <><p><em>This bird's royal-blue body is upstaged only by the magnificent array of feathers that radiate from its back.</em></p>
<Header full><span>Peafowl</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_peafowl--info" source={[["Familiar Folio",27],["Ultimate Wilderness",201]]} xp="100" n small animal init={1} llv pcp={-2} />
<Defense id="monster-familiar_peafowl--defense" ac={[12,12,11]} mod="+1 Dex, +1 size" hp={[4,"1d8"]} fort="+2" ref="+3" will="-2" />
<Offense id="monster-familiar_peafowl--offense" sp={20} fl={40} flP="clumsy" melee="2 talons +2 (1d3-2)" />
<Stats id="monster-familiar_peafowl--stats" atts={[7,12,10,1,6,13]} bab={0} cmb={-3} cmd={8} feats={["Weapon Finesse"]} skills={{"fly":{"b":-1}}} sq="drift" />
<Ecology id="monster-familiar_peafowl--eco-eco" env="temperate or warm forests" org="solitary, pair, or muster (3-10)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Drift (Ex)</strong> A peafowl flies in short bursts and can't use its fly speed to hover. When it flies, a peafowl must end its move action by landing or perching on a solid surface.</p>
<Header sub>Description</Header>
<p>Peafowls are a species of pheasant. Males, known as peacocks, boast brightly colored, iridescent plumage that is instantly recognizable. Their female counterparts, peahens, sport gray or brown feathers. Some cultures also breed peafowls with white plumage that may or may not have coloration on the rest of their bodies.</p>
<p>A peacock displays its brightly colored feathers to impress and court peahens as well as to scare off potential predators. The colorful "eye" patterns in the feathers also make them popular symbols and decorations among fortune-tellers and royalty.</p>
<p>While the male variety is more commonly recognized, all peafowl have identical statistics. A typical peafowl is 3-1/2 feet tall and weighs about 10 pounds.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_penguin = {title: "Penguin (Familiar)", jsx: <><p><em>This three-foot-tall, thick-set bird has black and white coloration, a long beak, and black flippers that lie flat against its sides instead of wings.</em></p>
<Header full><span>Penguin</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_penguin--info" source={[["Ultimate Wilderness",201],["Familiar Folio",27],["Bestiary 5",112]]} xp="135" n small animal init={-1} llv pcp={8} />
<Defense id="monster-familiar_penguin--defense" ac={[11,10,11]} mod="-1 Dex, +1 natural, +1 size" hp={[5,"1d8+1"]} fort="+3" ref="+1" will="+1" />
<Offense id="monster-familiar_penguin--offense" sp={10} sw={40} spOther="toboggan 30 ft." melee="bite +0 (1d3-1)" />
<Stats id="monster-familiar_penguin--stats" atts={[9,8,13,2,12,7]} bab={0} cmb={-2} cmd={7} feats={[["Skill Focus"," (Perception)"]]} skills={{"per":{"b":8},"swim":{"b":7}}} sq={<Link to="/umr/hold_breath">hold breath</Link>} />
<Ecology id="monster-familiar_penguin--eco-eco" env="cold plains" org="solitary, pair, or colony (3-30)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Toboggan (Ex)</strong> On snow- or ice-covered terrain, a penguin can move at a rate of 30 feet by sliding on its belly rather than walking.</p>
<Header sub>Description</Header>
<p>Many varieties of penguins exist, though most display similar characteristics. The penguin's most distinctive trait is the tuxedo-style coloration of its feathers, which acts as camouflage while the penguin hunts for fish underwater; the black back and flippers allow the penguin to blend in with the water when viewed from above, while its white belly matches the bright sky when seen from below.</p>
<p>A penguin of the most common variety stands roughly 3 feet tall and weighs 70 pounds. Larger species of penguin can grow to heights of 4 feet and weigh as much as 100 pounds.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_petrifern = {title: "Petrifern (Familiar)", jsx: <><p><em>This tiny, unassuming tree is shaped like a miniature person, with branches for arms and roots for feet.</em></p>
<Header full><span>Petrifern</span><span>CR 1/6</span></Header>
<div className="reduce">
<Info id="monster-familiar_petrifern--info" source={[["Ultimate Wilderness",202],["Familiar Folio",31]]} xp="65" n diminutive plant init={-1} blindsight={30} pcp={-2} />
<Defense id="monster-familiar_petrifern--defense" ac={[15,13,15]} mod="-1 Dex, +2 natural, +4 size" hp={[5,"1d8+1"]} fort="+3" ref="-1" will="-2" def={[["self-petrification","self-petrification"],["toxic secretion","toxic secretion"]]} immune={<Link to="/umr/plant_traits">plant traits</Link>} />
<Offense id="monster-familiar_petrifern--offense" sp={20} melee="slam +0 (1d2-4)" space={"1"} reach={"0"} />
<Stats id="monster-familiar_petrifern--stats" atts={[2,9,13,0,6,9]} bab={0} cmb={-5} cmd={1} />
<Ecology id="monster-familiar_petrifern--eco-eco" env="any forest" org="solitary, pair, or bundle (3-12)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Self-Petrification (Ex)</strong> A petrifern can petrify itself as a standard action in order to defend itself from predators. When it does so, the petrifern's natural armor bonus to AC increases by 5, it gains resistance 10 to cold and fire, and it can take 20 on Stealth checks to appear as a sprout or fallen tree branch. While petrified, the petrifern can't move or take any actions. A petrifern can remain petrified indefinitely, and it can cease its petrification as a standard action.</p>
<p><strong>Toxic Secretion (Ex)</strong> Petriferns secrete a bitter toxin meant to make them distasteful to predators. Once per day when a creature touches a petrifern, the plant can release its toxin, causing the attacker to become <Link to="/misc/sickened">sickened</Link> for 1d4 rounds if it fails a DC 11 Fortitude saving throw. The save DC is Constitution-based.</p>
<Header sub>Description</Header>
<p>The petrifern is an unusual plant creature that resembles a small, humanoid-shaped fern. It is able to walk about on its roots. A petrifern has the unusual ability to petrify itself at will, hardening its branches and leaves to resemble those of a plant that has been fossilized by natural means. Its chemical makeup not only allows it to petrify itself but also doubles as a toxin that the plant can emit from its foliage when it senses danger.</p>
<p>Like all plants, petriferns subsist on oxygen, sunlight, and water. But unlike most flora, they can relocate themselves to ensure they always receive an abundance of nutrients. Once rooted, a petrifern typically petrifies itself until either the nearby soil is depleted of nutrients or external factors cause it to seek sustenance elsewhere.</p>
<p>Petriferns reach a maximum height of 1 foot and weigh up to 3 pounds.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_pig = {title: "Pig (Familiar)", jsx: <><Header full><span>Pig</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_pig--info" source={[["Bestiary 3",113],["Ultimate Magic",119]]} xp="135" n small animal init={1} llv scent pcp={5} />
<Defense id="monster-familiar_pig--defense" ac={[13,12,12]} mod="+1 Dex, +1 natural, +1 size" hp={[6,"1d8+2"]} fort="+6" ref="+3" will="+1" />
<Offense id="monster-familiar_pig--offense" sp={30} melee="bite +1 (1d4)" />
<Stats id="monster-familiar_pig--stats" atts={[11,12,15,2,13,4]} bab={0} cmb={-1} cmd={10} cmdP="14 vs. trip" feats={["Great Fortitude"]} skills={{"per":{"b":5}}} />
<Ecology id="monster-familiar_pig--eco-eco" env="any" org="solitary, pair, or herd (3-12)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>This clever, sociable animal may be trained to do many tasks.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_platypus = {title: "Platypus (Familiar)", jsx: <><p><em>This creature is plump, brown, and covered in sleek fur, but it has a duck's bill, a flat tail, and webbed feet.</em></p>
<Header full><span>Platypus</span><span>CR 1/6</span></Header>
<div className="reduce">
<Info id="monster-familiar_platypus--info" source={[["Ultimate Wilderness",203],["Animal Archive",30],["Bestiary 4",96]]} xp="65" n tiny animal init={2} sen={["electrolocation 30 ft."]} llv pcp={1} />
<Defense id="monster-familiar_platypus--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[3,"1d8-1"]} fort="+1" ref="+4" will="+1" />
<Offense id="monster-familiar_platypus--offense" sp={10} sw={40} melee="spur +4 (1d3-4 plus poison)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_platypus--stats" atts={[2,14,8,2,13,11]} bab={0} cmb={0} cmd={6} cmdP="10 vs. trip" feats={["Weapon Finesse"]} skills={{"per":{"b":0,"x":"+4 underwater"},"swim":{"b":14}}} racial="+4 Perception underwater" sq={<Link to="/umr/hold_breath">hold breath</Link>} />
<Ecology id="monster-familiar_platypus--eco-eco" env="temperate or tropical rivers" org="solitary" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Electrolocation (Ex)</strong> While underwater, platypuses can sense the tiny electrical currents that trigger muscle movement. This allows them to locate living prey and distinguish it from inanimate objects. Treat electrolocation as <Link to="/umr/blindsight">blindsight</Link> 30 feet, but platypuses can sense only living creatures, and it functions only underwater.</p>
<p><strong>Poison (Ex)</strong></p>
<div className="sideNoteWrap"><ScrollContainer id="monster-familiar_platypus--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Spur-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 9</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 4 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 nonlethal damage</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><p><strong>Spur (Ex)</strong> A platypus's spur attack is a primary natural attack that deals piercing damage.</p>
<Header sub>Description</Header>
<p>Platypuses are members of an extremely unusual order of egg-laying mammals that live in riverside burrows where they hunt for larvae, shellfish, and worms. Platypuses also have a remarkable electrical sense they use in place of hearing, scent, and sight while hunting underwater.</p>
<p>The average platypus is roughly 1-1/2 feet long and weighs 3-1/2 pounds.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_popoto_dolphin = {title: "Popoto Dolphin (Familiar)", jsx: <><p><em>This sleek mammal has a short snout and black, white, and gray markings along its body.</em></p>
<Header full><span>Popoto Dolphin</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_popoto_dolphin--info" source={[["Ultimate Wilderness",194]]} xp="135" n small animal init={3} llv blindsense={30} pcp={5} />
<Defense id="monster-familiar_popoto_dolphin--defense" ac={[15,14,12]} mod="+3 Dex, +1 natural, +1 size" hp={[4,"1d8"]} fort="+2" ref="+5" will="+1" />
<Offense id="monster-familiar_popoto_dolphin--offense" sw={60} melee="slam +4 (1d3-1)" />
<Stats id="monster-familiar_popoto_dolphin--stats" atts={[8,17,11,2,13,6]} bab={0} cmb={-2} cmd={11} feats={["Weapon Finesse"]} skills={{"per":{"b":5},"swim":{"b":7}}} sq={<Link to="/umr/hold_breath">hold breath</Link>} />
<Ecology id="monster-familiar_popoto_dolphin--eco-eco" env="temperate oceans" org="solitary, pair, or pod (3-5)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Popotos are the smallest species of dolphin known, and they generally swim in shallow waters near shorelines. Sometimes they manage to swim miles upriver when they hunt for fish, using echolocation to navigate through smaller channels. They are social hunters and traveling in small groups called pods, which normally contain three to five popotos. Like larger dolphins, popotos are popular with seafarers, who consider the creatures to be good luck and tell hopeful tales of popotos leading lost swimmers to shore and pods fighting off sharks that are much larger than the popotos themselves.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_ptarmigan = {title: "Ptarmigan (Familiar)", jsx: <><p><em>This small bird has a mix of brown and white feathers and makes a loud croaking sound.</em></p>
<Header full><span>Ptarmigan</span><span>CR 1/6</span></Header>
<div className="reduce">
<Info id="monster-familiar_ptarmigan--info" source={[["Ultimate Wilderness",203],["Reign of Winter Player's Guide",10]]} xp="65" n tiny animal init={2} llv pcp={2} />
<Defense id="monster-familiar_ptarmigan--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[2,"1d8-2"]} fort="+0" ref="+4" will="+2" />
<Offense id="monster-familiar_ptarmigan--offense" sp={20} fl={40} flP="poor" melee="bite +4 (1d2-4)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_ptarmigan--stats" atts={[2,14,7,2,14,5]} bab={0} cmb={0} cmd={6} feats={["Weapon Finesse"]} skills={{"stl":{"b":14,"x":"+18 in snow"}}} racial="+4 Stealth in snow" />
<Ecology id="monster-familiar_ptarmigan--eco-eco" env="cold forests and plains" org="solitary, pair, or flock (3-12)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>These grouses molt through the seasons, appearing all white in the spring and shifting to a mix of brown and white in winter months.</p>
<p>Ptarmigans are roughly a foot long from beak to tail and have a wingspan of twice that.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_pufferfish = {title: "Pufferfish (Familiar)", jsx: <><p><em>This spotted fish has pronounced eyes, a wide mouth, and tiny, brightly colored spikes protruding from its body.</em></p>
<Header full><span>Pufferfish</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_pufferfish--info" source={[["Ultimate Wilderness",203],["Familiar Folio",25]]} xp="100" n tiny animal init={6} llv pcp={5} />
<Defense id="monster-familiar_pufferfish--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[6,"1d8+2"]} fort="+4" ref="+4" will="+1" def={[["spines","spines"]]} />
<Offense id="monster-familiar_pufferfish--offense" sw={20} space={"2-1/2"} reach={"0"} specAtt={[["poison","poison"]]} />
<Stats id="monster-familiar_pufferfish--stats" atts={[4,14,15,1,12,9]} bab={0} cmb={0} cmd={7} feats={["Improved Initiative"]} skills={{"per":{"b":5},"swim":{"b":5}}} />
<Ecology id="monster-familiar_pufferfish--eco-eco" env="warm oceans" org="solitary, pair, or school (3-12)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Poison (Ex)</strong></p>
<div className="sideNoteWrap"><ScrollContainer id="monster-familiar_pufferfish--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Spines-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 12</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>once</td></tr><tr></tr><tr><th scope="row">Cure</th><td colSpan={3}>2 consecutive saves</td></tr><tr><td colSpan={4} className="extra">If certain portions of the pufferfish's body are eaten, the poison's effect is instead 1d4 points of Constitution damage. The save DC is Constitution-based.</td></tr></tbody></table></ScrollContainer></div><p><strong>Spines (Ex)</strong> Pufferfish aren't equipped to attack other creatures, but foes that strike a pufferfish with an unarmed strike or a natural attack take 1 point of piercing damage from the fish's toxic spines, and must immediately attempt a saving throw against the pufferfish's poison.</p>
<Header sub>Description</Header>
<p>Pufferfish are a category of poisonous fish that dwell in warm coastal waters. Pufferfish have the ability to rapidly fill their stomachs with water or air, causing their bodies to balloon out and make the poisonous spikes on their skin more pronounced, while increasing their apparent size to frighten predators. While certain aquatic sharks and other animals have adapted to eat pufferfish, the puffer's tetrodotoxin (typically delivered via the spines on the fish's skin, though prevalent throughout its organs as well) remains highly poisonous to humans and most mammals who must be careful if they wish to eat one of these fish.</p>
<p>Pufferfish come in a variety of sizes and types, and most range from 6 inches to 2 feet in length and weigh between 5 and 30 pounds.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_puffin = {title: "Puffin (Familiar)", jsx: <><p><em>This squat, black-and-white bird has a bright red-and-black beak.</em></p>
<Header full><span>Puffin</span><span>CR 1/8</span></Header>
<div className="reduce">
<Info id="monster-familiar_puffin--info" source={[["Ultimate Wilderness",204],["Reign of Winter Player's Guide",11]]} xp="50" n diminutive animal init={2} llv pcp={6} />
<Defense id="monster-familiar_puffin--defense" ac={[16,16,14]} mod="+2 Dex, +4 size" hp={[2,"1d8-2"]} fort="+0" ref="+4" will="+2" />
<Offense id="monster-familiar_puffin--offense" sp={10} fl={30} flP="average" sw={30} melee="bite -1 (1d2-5)" space={"1"} reach={"0"} />
<Stats id="monster-familiar_puffin--stats" atts={[1,15,6,2,15,6]} bab={0} cmb={-2} cmd={3} feats={[["Skill Focus"," (Swim)"]]} skills={{"fly":{"b":8}}} />
<Ecology id="monster-familiar_puffin--eco-eco" env="cold coastlines" org="solitary, pair, or colony (3-20)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>These short-winged and short-tailed birds favor cold rocky islands. They dine primarily on fish. Their beak retains its color through the mating season, and then the color is shed off, revealing a smaller, muted beak.</p>
<p>Puffins are about a foot long and weigh close to 1 pound.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_rabbit = {title: "Rabbit (Familiar)", jsx: <><p><em>This small, furry creature has long ears and oversized feet.</em></p>
<Header full><span>Rabbit</span><span>CR 1/6</span></Header>
<div className="reduce">
<Info id="monster-familiar_rabbit--info" source={[["Ultimate Wilderness",204],["Animal Archive",31]]} xp="65" n tiny animal init={3} llv pcp={1} />
<Defense id="monster-familiar_rabbit--defense" ac={[15,15,12]} mod="+3 Dex, +2 size" hp={[3,"1d8-1"]} fort="+1" ref="+5" will="+1" />
<Offense id="monster-familiar_rabbit--offense" sp={50} melee="bite -2 (1d3-4)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_rabbit--stats" atts={[3,16,9,2,12,5]} bab={0} cmb={1} cmd={7} feats={["Run"]} skills={{"acro":{"b":0,"x":"+8 when jumping"},"stl":{"b":15}}} />
<Ecology id="monster-familiar_rabbit--eco-eco" env="temperate plains" org="solitary, pair, or down (3-16)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Rabbits are herbivores with short tails, long ears for sensing predators, and powerful hind legs that allow them to leap quickly to safety when threatened.</p>
<p>An average rabbit is between 8 and 20 inches long and weighs 1 to 4 pounds.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_raccoon = {title: "Raccoon (Familiar)", jsx: <><Header full><span>Raccoon</span><span>CR 1/2</span></Header>
<div className="reduce">
<Info id="monster-familiar_raccoon--info" source={[["Bestiary 3",113]]} xp="200" n tiny animal init={2} llv scent pcp={3} />
<Defense id="monster-familiar_raccoon--defense" ac={[15,14,13]} mod="+2 Dex, +1 natural, +2 size" hp={[4,"1d8"]} fort="+2" ref="+4" will="+3" />
<Offense id="monster-familiar_raccoon--offense" sp={20} cl={20} melee="bite +4 (1d3-1)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_raccoon--stats" atts={[8,15,11,2,16,5]} bab={0} cmb={0} cmd={9} cmdP="13 vs. trip" feats={["Weapon Finesse"]} skills={{"climb":{"b":10},"soh":{"b":3}}} />
<Ecology id="monster-familiar_raccoon--eco-eco" env="temperate forests" org="solitary or gaze (2-4)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Raccoons are inquisitive and cunning, and often have strangely humanoid mannerisms, like washing their food in streams.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_rat = {title: "Rat (Familiar)", jsx: <><Header full><span>Rat</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_rat--info" source={[["Pathfinder RPG Bestiary",132]]} xp="100" n tiny animal init={2} llv scent pcp={1} />
<Defense id="monster-familiar_rat--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[4,"1d8"]} fort="+2" ref="+4" will="+1" />
<Offense id="monster-familiar_rat--offense" sp={15} cl={15} sw={15} melee="bite +4 (1d3-4)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_rat--stats" atts={[2,15,11,2,13,2]} bab={0} cmb={0} cmd={6} cmdP="10 vs. trip" feats={["Weapon Finesse"]} skills={{"climb":{"b":10}}} racial="+4 Stealth" />
<Ecology id="monster-familiar_rat--eco-eco" env="any temperate" org="solitary, pair, nest (3-12), or plague (13-100)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Fecund and secretive, rats are omnivorous rodents that particularly thrive in urban areas.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
<Header sub>Mouse</Header>
<p>There are no published statistics for mice in Pathfinder, even though multiple published sources refer to them. As an unofficial suggestion to create a mouse, consider using the rat above with the <Link to="/template/young">young</Link> template.</p>
</>};
const _familiar_raven = {title: "Raven (Familiar)", jsx: <><Header full><span>Raven</span><span>CR 1/6</span></Header>
<div className="reduce">
<Info id="monster-familiar_raven--info" source={[["Pathfinder RPG Bestiary",133]]} xp="65" n tiny animal init={2} llv pcp={6} />
<Defense id="monster-familiar_raven--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[3,"1d8-1"]} fort="+1" ref="+4" will="+2" />
<Offense id="monster-familiar_raven--offense" sp={10} fl={40} flP="average" melee="bite +4 (1d3-4)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_raven--stats" atts={[2,15,8,2,15,7]} bab={0} cmb={0} cmd={6} feats={[["Skill Focus"," (Perception)"],"Weapon Finesse"]} skills={{"fly":{"b":6},"per":{"b":6}}} />
<Ecology id="monster-familiar_raven--eco-eco" env="any temperate" org="solitary, pair, flock (3-12), or unkindness (13-100)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>The raven is an omnivorous scavenger that eats carrion, insects, food waste, berries, and even small animals. A raven familiar can speak one language as a supernatural ability.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_ravenous_tumbleweed = {title: "Ravenous Tumbleweed (Familiar)", jsx: <><p><em>This tangle of dry-looking vegetation has grown into a spherical ball of thorny twigs and roots.</em></p>
<Header full><span>Ravenous Tumbleweed</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_ravenous_tumbleweed--info" source={[["Ultimate Wilderness",205]]} xp="135" n tiny plant init={1} llv pcp={0} />
<Defense id="monster-familiar_ravenous_tumbleweed--defense" ac={[14,13,13]} mod="+1 Dex, +1 natural, +2 size" hp={[5,"1d8+1"]} fort="+3" ref="+1" will="+0" immune={<Link to="/umr/plant_traits">plant traits</Link>} />
<Offense id="monster-familiar_ravenous_tumbleweed--offense" sp={30} melee="slam +0 (1d4-2)" space={"2-1/2"} reach={"0"} specAtt={[["hurtling charge","hurtling charge"]]} />
<Stats id="monster-familiar_ravenous_tumbleweed--stats" atts={[6,13,12,0,11,4]} bab={0} cmb={-1} cmd={7} cmdP="can't be tripped" sq="wind-borne" />
<Ecology id="monster-familiar_ravenous_tumbleweed--eco-eco" env="warm deserts or plains" org="solitary, pair, or drift (3-12)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Hurtling Charge (Ex)</strong> A ravenous tumbleweed that travels at least 20 feet as part of a <Link to="/rule/charge">charge</Link> action does not provoke an attack of opportunity when it enters an opponent's space to make a melee attack.</p>
<p><strong>Wind-Borne (Ex)</strong> While in an area of moderate wind (11-20 mph), a ravenous tumbleweed's speed increases by 10 feet when it moves in the direction of the wind. In an area of at least strong wind (21+ mph), its speed instead increases by 20 feet when it moves in the direction of the wind, and it gains a +2 dodge bonus to its AC against attacks of opportunity on any round in which it moves in that direction.</p>
<Header sub>Description</Header>
<p>Unlike its harmless counterpart, a ravenous tumbleweed uproots itself when nutrients are scarce in order to hunt down live prey. These seasonally carnivorous plants gather into imposing drifts that wait for periods of high winds before overwhelming birds, rabbits, and even deer.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_razor_fern = {title: "Razor Fern (Familiar)", jsx: <><p><em>This vaguely human-shaped plant slashes out with dangerous-looking barbed fronds.</em></p>
<Header full><span>Razor Fern</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_razor_fern--info" source={[["Ultimate Wilderness",205]]} xp="100" n tiny plant init={2} llv tremorsense={15} pcp={0} />
<Defense id="monster-familiar_razor_fern--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[4,"1d8"]} fort="+2" ref="+2" will="+0" def={[["shielding frond","shielding frond"]]} immune={<Link to="/umr/plant_traits">plant traits</Link>} />
<Offense id="monster-familiar_razor_fern--offense" sp={15} melee="2 fronds +4 (1d4-3)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_razor_fern--stats" atts={[5,15,11,0,10,6]} bab={0} cmb={0} cmd={7} feats={["Weapon Finesse"]} />
<Ecology id="monster-familiar_razor_fern--eco-eco" env="temperate forests" org="solitary, pair, or thicket (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Frond (Ex)</strong> A razor fern's fronds are primary natural attacks that deal slashing damage.</p>
<p><strong>Shielding Frond (Ex)</strong> A razor fern can deflect incoming attacks as a move action, gaining it a +2 shield bonus to its AC until the beginning of its next turn.</p>
<Header sub>Description</Header>
<p>Razor ferns are ambulatory ambush predators with rigid leaf structures that can open painful wounds. Although they prefer to prey on small forest creatures, a razor fern won't hesitate to slash at a larger target while that creature sleeps or is otherwise distracted.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_red_panda = {title: "Red Panda (Familiar)", jsx: <><Header full><span>Red Panda</span><span>CR 1/2</span></Header>
<div className="reduce">
<Info id="monster-familiar_red_panda--info" source={[["Bestiary 5",112]]} xp="200" n tiny animal init={3} llv scent pcp={5} />
<Defense id="monster-familiar_red_panda--defense" ac={[16,15,13]} mod="+3 Dex, +1 natural, +2 size" hp={[4,"1d8"]} fort="+2" ref="+5" will="+1" />
<Offense id="monster-familiar_red_panda--offense" sp={20} cl={20} melee="bite +5 (1d3-1)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_red_panda--stats" atts={[8,16,11,2,13,5]} bab={0} cmb={1} cmd={10} feats={["Weapon Finesse"]} skills={{"acro":{"b":9},"climb":{"b":15},"per":{"b":5}}} racial="+6 Acrobatics, +4 Climb" />
<Ecology id="monster-familiar_red_panda--eco-eco" env="temperate forests or mountains" org="solitary or mated pair" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Red pandas are small, short-legged arboreal mammals known for their red-brown fur and climbing abilities.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_rhamphorhynchus = {title: "Rhamphorhynchus (Familiar)", jsx: <><p><em>This creature looks like a cross between a bird and a reptile, sporting leathery wings, a beak filled with needle-like teeth, and a long tail ending in a diamond-shaped vane.</em></p>
<Header full><span>Rhamphorhynchus</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_rhamphorhynchus--info" source={[["Ultimate Wilderness",204],["Pathfinder #37: Souls for Smuggler's Shiv",82]]} xp="135" n tiny animal init={3} llv scent pcp={6} />
<Defense id="monster-familiar_rhamphorhynchus--defense" ac={[15,15,12]} mod="+3 Dex, +2 size" hp={[4,"1d8"]} fort="+2" ref="+7" will="+2" eva />
<Offense id="monster-familiar_rhamphorhynchus--offense" sp={10} fl={40} flP="good" melee="bite +0 (1d3-2)" space={"2-1/2"} reach={"0"} specAtt={[["sudden swoop","sudden swoop"]]} />
<Stats id="monster-familiar_rhamphorhynchus--stats" atts={[6,17,11,2,14,11]} bab={0} cmb={1} cmd={9} feats={["Lightning Reflexes"]} skills={{"fly":{"b":11},"per":{"b":6},"stl":{"b":11}}} />
<Ecology id="monster-familiar_rhamphorhynchus--eco-eco" env="warm coastlines or forests" org="solitary, pair, or flock (3-16)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Sudden Swoop (Ex)</strong> If a rhamphorhynchus makes a charge attack while flying, it does not provoke attacks of opportunity when it enters an opponent's space to make a melee attack. It also gains a +2 bonus on damage rolls with its bite attack when it makes a sudden swoop.</p>
<Header sub>Description</Header>
<p>Rhamphorhynchuses make excellent familiars for those spellcasters who are looking for quick and nimble minions. Although not <Link to="/family/dinosaur">dinosaurs</Link> themselves, these skittish pterosaurs are often found wheeling in the skies above dinosaur hunting grounds.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_sawleg_locust = {title: "Sawleg Locust (Familiar)", jsx: <><p><em>The cat-sized insect has a long, cigar-shaped body. Its spiny back legs are long and limber.</em></p>
<Header full><span>Sawleg Locust</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_sawleg_locust--info" source={[["Ultimate Wilderness",205]]} xp="100" n tiny vermin init={1} dv={60} pcp={0} />
<Defense id="monster-familiar_sawleg_locust--defense" ac={[14,13,13]} mod="+1 Dex, +1 natural, +2 size" hp={[4,"1d8"]} fort="+2" ref="+1" will="+0" immune="mind-affecting effects" />
<Offense id="monster-familiar_sawleg_locust--offense" sp={15} cl={15} fl={40} flP="average" melee="bite -1 (1d3-3)" space={"2-1/2"} reach={"0"} specAtt={[["voracious","voracious"]]} />
<Stats id="monster-familiar_sawleg_locust--stats" atts={[4,13,11,0,10,7]} bab={0} cmb={-1} cmd={6} cmdP="14 vs. trip" skills={{"acro":{"b":0,"x":"+8 when jumping"},"climb":{"b":9}}} racial="+8 Acrobatics (when jumping)" sq="leap" />
<Ecology id="monster-familiar_sawleg_locust--eco-eco" env="any desert or plains" org="solitary, pair, or flight (3-18)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Leap (Ex)</strong> A sawleg locust can take 10 on Acrobatics checks to jump even if distracted or in danger.</p>
<p><strong>Voracious (Ex)</strong> A sawleg locust's bite attack deals double damage to creatures with the plant subtype and to objects made of paper, wood, or other plant materials.</p>
<Header sub>Description</Header>
<p>A sawleg locust is a larger variety of grasshopper that grows as large as 2 feet in length and feeds on a variety of plants. Periods of drought sometimes cause these locusts to gather in large groups, either to migrate to better feeding grounds or rarely to overpower and consume small animals.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_seal = {title: "Seal (Familiar)", jsx: <><p><em>This sleek aquatic mammal has a pair of flippers, a powerful tail, and a muzzle full of small, sharp teeth.</em></p>
<Header full><span>Seal</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_seal--info" source={[["Ultimate Wilderness",206],["Pathfinder #55: The Wormwood Mutiny",89],["Bestiary 5",113]]} xp="135" n small animal init={1} llv pcp={5} />
<Defense id="monster-familiar_seal--defense" ac={[13,12,12]} mod="+1 Dex, +1 natural, +1 size" hp={[4,"1d8"]} fort="+2" ref="+3" will="+1" />
<Offense id="monster-familiar_seal--offense" sp={10} sw={60} melee="bite +0 (1d4-1)" />
<Stats id="monster-familiar_seal--stats" atts={[8,13,11,2,13,6]} bab={0} cmb={-2} cmd={9} cmdP="can't be tripped" feats={[["Skill Focus"," (Swim)"]]} skills={{"per":{"b":5},"swim":{"b":14}}} racial="+4 Perception" sq={<Link to="/umr/hold_breath">hold breath</Link>} />
<Ecology id="monster-familiar_seal--eco-eco" env="any oceans" org="solitary, pair, or rookery (3-22)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Sleek-bodied aquatic mammals, seals spend the majority of their lives in the water, whether in the harbors of tropical ports or amid wandering icebergs. They prefer rocky beaches, upon which they rest and raise their young, and from which they dive to hunt fish, sea birds, squid, and other small aquatic creatures. They are well known for their vocal communications consisting of barks, grunts, and flipper slaps - a trait that causes many humanoids to remark on their intelligence and the ease with which they can be trained.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_shimmerwing_dragonfly = {title: "Shimmerwing Dragonfly (Familiar)", jsx: <><p><em>This sizable insect has a slender body and two pairs of long, elegant, iridescent wings.</em></p>
<Header full><span>Shimmerwing Dragonfly</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_shimmerwing_dragonfly--info" source={[["Ultimate Wilderness",206]]} xp="100" n tiny vermin init={2} dv={60} pcp={1} />
<Defense id="monster-familiar_shimmerwing_dragonfly--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[4,"1d8"]} fort="+2" ref="+2" will="+1" immune="mind-affecting effects" />
<Offense id="monster-familiar_shimmerwing_dragonfly--offense" sp={10} fl={60} flP="perfect" melee="claw +0 (1d2-2)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_shimmerwing_dragonfly--stats" atts={[6,14,10,0,12,9]} bab={0} cmb={0} cmd={8} cmdP="16 vs. trip" feats={["Flyby Attack"]} skills={{"fly":{"b":14}}} />
<Ecology id="monster-familiar_shimmerwing_dragonfly--eco-eco" env="temperate or warm swamps" org="solitary, pair, or flight (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Shimmerwing dragonflies are agile flying insects that prey on other flying creatures. With a wingspan of nearly 3 feet, these dragonflies can even capture and eat small birds.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_sloth = {title: "Sloth (Familiar)", jsx: <><Header full><span>Sloth</span><span>CR 1/6</span></Header>
<div className="reduce">
<Info id="monster-familiar_sloth--info" source={[["Bestiary 4",97]]} xp="65" n tiny animal init={-2} llv scent pcp={1} />
<Defense id="monster-familiar_sloth--defense" ac={[11,10,11]} mod="-2 Dex, +1 natural, +2 size" hp={[5,"1d8+1"]} fort="+3" ref="+0" will="+1" />
<Offense id="monster-familiar_sloth--offense" sp={5} cl={5} melee="2 claws -1 (1d2-3)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_sloth--stats" atts={[5,7,12,2,12,7]} bab={0} cmb={-4} cmd={3} cmdP="7 vs. trip" feats={[["Skill Focus"," (Stealth)"]]} skills={{"climb":{"b":10}}} racial="+4 Climb, +4 Stealth, +4 Swim" />
<Ecology id="monster-familiar_sloth--eco-eco" env="warm forests" org="solitary or pair" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Sloths are tree-dwelling herbivores. They are known for their efficient metabolisms and slow movement.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_spiny_starfish = {title: "Spiny Starfish (Familiar)", jsx: <><p><em>This brightly colored, star-shaped creature has many spines growing from its five arms.</em></p>
<Header full><span>Spiny Starfish</span><span>CR 1/6</span></Header>
<div className="reduce">
<Info id="monster-familiar_spiny_starfish--info" source={[["Ultimate Wilderness",206]]} xp="65" n tiny vermin init={1} dv={60} tremorsense={20} pcp={0} />
<Defense id="monster-familiar_spiny_starfish--defense" ac={[15,13,14]} mod="+1 Dex, +2 natural, +2 size" hp={[6,"1d8+2"]} fort="+4" ref="+1" will="+0" def={[["rapid healing","rapid healing"]]} immune="mind-affecting effects" />
<Offense id="monster-familiar_spiny_starfish--offense" sp={5} cl={5} sw={5} melee="slam -1 (1d2-3 plus grab)" space={"2-1/2"} reach={"0"} grab="Small" />
<Stats id="monster-familiar_spiny_starfish--stats" atts={[4,13,14,0,11,3]} bab={0} cmb={-1} cmbP="+5 when grappling" cmd={6} cmdP="can't be tripped" skills={{"climb":{"b":5}}} sq="firm grip" />
<Ecology id="monster-familiar_spiny_starfish--eco-eco" env="any ocean" org="solitary, pair, or cluster (3-22)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Firm Grip (Ex)</strong> A spiny starfish excels at grappling prey, and it gains a +6 racial bonus on <Link to="/rule/grapple">grapple</Link> checks (rather than the standard +4 bonus most creatures gain as a result of having the grab ability).</p>
<p><strong>Rapid Healing (Ex)</strong> A spiny starfish heals very quickly, regaining a number of hit points each hour equal to its Hit Dice (1 hp per hour for the typical spiny starfish).</p>
<Header sub>Description</Header>
<p>Spiny starfish are marine invertebrates that wander the sea floor in search of mollusks and other slow-moving prey. Their tube feet afford them an excellent grip on their chosen food source, and they can famously expel their stomachs into subdued shellfish to digest their meals. An injured spiny starfish heals wounds quickly, even regrowing lost limbs over time.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_squirrel = {title: "Squirrel (Familiar)", jsx: <><p><em>A small, bright-eyed bundle of fur, this woodland creature has a bushy tail as big as the rest of its body.</em></p>
<Header full><span>Squirrel</span><span>CR 1/8</span></Header>
<div className="reduce">
<Info id="monster-familiar_squirrel--info" source={[["Ultimate Wilderness",207],["Animal Archive",31]]} xp="50" n diminutive animal init={4} llv pcp={1} />
<Defense id="monster-familiar_squirrel--defense" ac={[18,18,14]} mod="+4 Dex, +4 size" hp={[3,"1d8-1"]} fort="+1" ref="+6" will="+1" />
<Offense id="monster-familiar_squirrel--offense" sp={20} cl={20} melee="bite +8 (1d2-4)" space={"1"} reach={"0"} />
<Stats id="monster-familiar_squirrel--stats" atts={[2,19,9,2,12,9]} bab={0} cmb={0} cmd={6} cmdP="10 vs. trip" feats={["Weapon Finesse"]} skills={{"acro":{"b":8},"climb":{"b":12}}} />
<Ecology id="monster-familiar_squirrel--eco-eco" env="temperate forests" org="solitary, pair, or scurry (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Squirrels are surprisingly wily creatures. When they know they are being watched, they pretend to bury nuts, but instead sneak them into their mouths and take them away to hide elsewhere when no one is watching. They eat most things, occasionally even preying on small snakes and birds.</p>
<p>The average squirrel is roughly 1-1/2 feet long and weighs 1 pound.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_suture_vine = {title: "Suture Vine (Familiar)", jsx: <><p><em>This twitching, slithering coil of bright-green vines is covered with hooked thorns and tiny barbs.</em></p>
<Header full><span>Suture Vine</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_suture_vine--info" source={[["Ultimate Wilderness",207]]} xp="135" n tiny plant init={1} sen={["blood sense"]} llv pcp={1} />
<Defense id="monster-familiar_suture_vine--defense" ac={[13,13,12]} mod="+1 Dex, +2 size" hp={[4,"1d8"]} fort="+2" ref="+1" will="+1" immune={<Link to="/umr/plant_traits">plant traits</Link>} />
<Offense id="monster-familiar_suture_vine--offense" sp={15} cl={15} melee="vine +3 (1d2-4)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_suture_vine--stats" atts={[3,12,10,0,13,5]} bab={0} cmb={-1} cmd={5} feats={[["Weapon Finesse",<sup>B</sup>]]} skills={{"climb":{"b":4}}} sq="seal wound" />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Ecology id="monster-familiar_suture_vine--eco-eco" env="temperate forests" org="solitary, pair, or clinic (3-5)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Blood Sense (Ex)</strong> A suture vine can sense badly wounded creatures, including those at less than half their normal hit point total or suffering from <Link to="/rule/bleed">bleed</Link> damage, as if it had the <Link to="/umr/scent">scent</Link> ability.</p>
<p><strong>Seal Wound (Ex)</strong> A suture vine instinctively latches on to a creature that suffers from bleed damage or is at less than half its normal hit point total. When it attempts to seal wounds in this way, it must make a normal vine attack but gains <Link to="/umr/attach">attach</Link> as per the universal monster rule. If it successfully attaches to the target (dealing damage as normal), any bleed damage currently suffered by the target immediately ends. The suture vine remains attached for 24 hours, gaining nutrients from sipping at the victim's blood but never enough to cause any further damage. The vine drops off automatically once a target has no hit point damage or 24 hours have passed, whichever comes first. A suture vine can seal wounds in this manner only once per day.</p>
<p><strong>Vine (Ex)</strong> A suture vine's vine attack is a primary natural attack that deals piercing and slashing damage.</p>
<Header sub>Description</Header>
<p>Suture vines are thorny, symbiotic organisms that snag rides on wounded animals, seek out open wounds, and knit those injuries closed - all while absorbing fairly harmless amounts of blood. Local animals often recognize suture vines, both avoiding them as food and seeking them out when wounded. A suture vine that goes without feeding for a week or more sometimes resorts to ambushing small prey.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_tarsier = {title: "Tarsier (Familiar)", jsx: <><p><em>This small, furry creature has enormous glossy eyes, long legs, and elongated fingers.</em></p>
<Header full><span>Tarsier</span><span>CR 1/6</span></Header>
<div className="reduce">
<Info id="monster-familiar_tarsier--info" source={[["Ultimate Wilderness",208]]} xp="65" n diminutive animal init={3} llv pcp={5} />
<Defense id="monster-familiar_tarsier--defense" ac={[17,17,14]} mod="+3 Dex, +4 size" hp={[4,"1d8"]} fort="+2" ref="+5" will="+1" />
<Offense id="monster-familiar_tarsier--offense" sp={20} cl={20} melee="bite +7 (1d2-4)" space={"1"} reach={"0"} />
<Stats id="monster-familiar_tarsier--stats" atts={[3,16,10,2,13,7]} bab={0} cmb={-1} cmd={5} cmdP="9 vs. trip" feats={["Weapon Finesse"]} skills={{"acro":{"b":7},"climb":{"b":8},"per":{"b":5},"stl":{"b":19}}} racial="+4 Acrobatics, +4 Climb, +4 Perception" sq="tarsier's leap" />
<Ecology id="monster-familiar_tarsier--eco-eco" env="temperate or warm forests" org="solitary, pair, or family (3-6)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Tarsier's Leap (Ex)</strong> A tarsier's long hind limbs make it an excellent leaper. A tarsier attempts Acrobatics checks to jump as though it had a running start and doesn't take a penalty on Acrobatics checks to jump from having a slow base speed.</p>
<Header sub>Description</Header>
<p>The tarsier is a carnivorous tree-climbing primate. The animal's neck is flexible, allowing its head to swivel around 180 degrees. Tarsiers hunt at night, silently waiting for insects and other small animals to fly or crawl by so they can jump at the prey and catch it. These shy animals live up to 12 years.</p>
<p>The length of a tarsier from its head to the tip of its tail is about 1 to 1-1/2 feet, but when clinging to a tree, a tarsier appears to be about the size of a human's fist. A tarsier weighs about 4 ounces.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_thrush = {title: "Thrush (Familiar)", jsx: <><Header full><span>Thrush</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_thrush--info" source={[["Ultimate Magic",120]]} xp="135" n diminutive animal init={2} llv pcp={5} />
<Defense id="monster-familiar_thrush--defense" ac={[16,16,14]} mod="+2 Dex, +4 size" hp={[2,"1d8-2"]} fort="+0" ref="+4" will="+2" />
<Offense id="monster-familiar_thrush--offense" sp={10} fl={40} flP="average" melee="bite -1 (1d2-5)" space={"1"} reach={"0"} />
<Stats id="monster-familiar_thrush--stats" atts={[1,15,6,2,15,6]} bab={0} cmb={-2} cmd={3} feats={[["Skill Focus"," (Perception)"]]} skills={{"fly":{"b":12},"per":{"b":5}}} />
<Ecology id="monster-familiar_thrush--eco-eco" env="temperate forests" org="solitary, pair, or flock (3-12)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Thrushes are small, plump birds that eat fruit and insects. All thrushes are known for their beautiful songs, but thrush familiars are also capable of actual speech.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_toad = {title: "Toad (Familiar)", jsx: <><Header full><span>Toad</span><span>CR 1/8</span></Header>
<div className="reduce">
<Info id="monster-familiar_toad--info" source={[["Pathfinder RPG Bestiary",133]]} xp="50" n diminutive animal init={1} llv scent pcp={5} />
<Defense id="monster-familiar_toad--defense" ac={[15,15,14]} mod="+1 Dex, +4 size" hp={[2,"1d8-2"]} fort="+0" ref="+3" will="+2" />
<Offense id="monster-familiar_toad--offense" sp={5} space={"1"} reach={"0"} />
<Stats id="monster-familiar_toad--stats" atts={[1,12,6,1,15,4]} bab={0} cmb={-3} cmd={2} cmdP="6 vs. trip" feats={[["Skill Focus"," (Perception)"]]} skills={{"per":{"b":5},"stl":{"b":21}}} racial="+4 Stealth" />
<Ecology id="monster-familiar_toad--eco-eco" env="temperate and warm forests" org="solitary, pair, or knot (3-100)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Toads are harmless, rough-skinned amphibians.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_trilobite = {title: "Trilobite (Familiar)", jsx: <><Header full><span>Trilobite</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_trilobite--info" source={[["Bestiary 5",113]]} xp="100" n tiny vermin subs={["aquatic"]} init={2} dv={30} pcp={4} />
<Defense id="monster-familiar_trilobite--defense" ac={[15,14,13]} mod="+2 Dex, +1 natural, +2 size" hp={[5,"1d8+1"]} fort="+3" ref="+2" will="+0" immune="mind-affecting effects" />
<Offense id="monster-familiar_trilobite--offense" sp={20} sw={30} melee="bite +4 (1d3-2)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_trilobite--stats" atts={[7,15,12,0,11,2]} bab={0} cmb={0} cmd={8} feats={[["Weapon Finesse",<sup>B</sup>]]} skills={{"per":{"b":4},"swim":{"b":10}}} racial="+4 Perception" sq="curl, water dependency" />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Ecology id="monster-familiar_trilobite--eco-eco" env="any oceans" org="solitary, pair, group (2-12)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Curl (Ex)</strong> As a standard action, a trilobite can curl into a ball, increasing its natural armor bonus by 2 but preventing it from taking any move actions. Uncurling is a standard action.</p>
<Header sub>Description</Header>
<p>Ancient arthropods adapted to scavenging the ocean floor, trilobites have both resilient exteriors and keen senses honed for use in the lightless depths of the sea, and are known for curling into balls to protect themselves.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_tuatara = {title: "Tuatara (Familiar)", jsx: <><Header full><span>Tuatara</span><span>CR 1/4</span></Header>
<div className="reduce">
<Info id="monster-familiar_tuatara--info" source={[["Bestiary 4",97]]} xp="100" n tiny animal init={1} dv={60} llv pcp={4} />
<Defense id="monster-familiar_tuatara--defense" ac={[13,13,12]} mod="+1 Dex, +2 size" hp={[5,"1d8+1"]} fort="+3" ref="+3" will="+0" />
<Offense id="monster-familiar_tuatara--offense" sp={20} cl={20} melee="bite +3 (1d3-4 plus attach)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_tuatara--stats" atts={[2,13,12,1,10,5]} bab={0} cmb={-1} cmd={5} cmdP="9 vs. trip" feats={["Weapon Finesse"]} skills={{"acro":{"b":5,"x":"+1 when jumping"},"climb":{"b":9},"per":{"b":4}}} racial="-4 Acrobatics when jumping, +4 Perception, +4 Survival" />
<Ecology id="monster-familiar_tuatara--eco-eco" env="temperate islands" org="solitary or pair" />
</div>
<Header sub>Description</Header>
<p>Tuataras are cousins to true lizards. They mostly live on primordial islands where mammals have never established a foothold.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_vampire_squid = {title: "Vampire Squid (Familiar)", jsx: <><p><em>This eerie-looking squid has red eyes and webbing between its hook-lined tentacles.</em></p>
<Header full><span>Vampire Squid</span><span>CR 1/2</span></Header>
<div className="reduce">
<Info id="monster-familiar_vampire_squid--info" source={[["Ultimate Wilderness",208]]} xp="200" n tiny animal init={2} dv={60} llv pcp={1} />
<Defense id="monster-familiar_vampire_squid--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[5,"1d8+1"]} fort="+3" ref="+6" will="+1" def={[["pressure adaptation","pressure adaptation"]]} />
<Offense id="monster-familiar_vampire_squid--offense" sw={20} melee={<>bite +0 (1d3-2), tentacles +0 (<Link to="/umr/grab">grab</Link>)</>} space={"2-1/2"} reach={"0"} specAtt={[["photophores","photophores"]]} />
<Stats id="monster-familiar_vampire_squid--stats" atts={[6,15,12,2,13,3]} bab={0} cmb={0} cmd={8} feats={["Lightning Reflexes"]} skills={{"stl":{"b":14},"swim":{"b":10}}} />
<Ecology id="monster-familiar_vampire_squid--eco-eco" env="any oceans" org="solitary, pair, or school (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Photophores (Ex)</strong> Once per day as a standard action while underwater, the vampire squid can release a 15-foot cone of disorienting bioluminescent mucus from its photophores, illuminating the area with <Link to="/rule/dim_light">dim light</Link>. A creature within this shimmering cloud of blue light must succeed at a DC 11 Fortitude save or be <Link to="/misc/dazzled">dazzled</Link> for as long as it remains in the cloud and for 1 round thereafter. The cloud persists for 1d4+1 rounds. The save DC is Constitution-based.</p>
<p><strong>Pressure Adaptation (Ex)</strong> A vampire squid takes no <Link to="/rule/pressure_damage">pressure damage</Link> from changes in water depth.</p>
<p><strong>Tentacles (Ex)</strong> A vampire squid's tentacles all strike as a single primary attack but only to <Link to="/rule/grapple">grapple</Link>.</p>
<Header sub>Description</Header>
<p>The vampire squid - so called for its red eyes and cloak-like webbing - is a cephalopod from the lightless depths of the oceans. This eerie mollusk is covered in photophores, which it can use to create a defensive barrage of light when agitated.</p>
<p>A vampire squid can reach a total body length of up to 1 foot and weighs 1 pound.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_viper = {title: "Viper (Familiar)", jsx: <><Header full><span>Viper</span><span>CR 1/2</span></Header>
<div className="reduce">
<Info id="monster-familiar_viper--info" source={[["Pathfinder RPG Bestiary",133]]} xp="200" n tiny animal init={3} llv scent pcp={9} />
<Defense id="monster-familiar_viper--defense" ac={[16,15,13]} mod="+3 Dex, +1 natural, +2 size" hp={[3,"1d8-1"]} fort="+1" ref="+5" will="+1" />
<Offense id="monster-familiar_viper--offense" sp={20} cl={20} sw={20} melee="bite +5 (1d2-2 plus poison)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_viper--stats" atts={[4,17,8,1,13,2]} bab={0} cmb={1} cmd={8} cmdP="can't be tripped" feats={["Weapon Finesse"]} skills={{"climb":{"b":11}}} racial="+4 Perception, +4 Stealth" />
<Ecology id="monster-familiar_viper--eco-eco" env="any temperate and warm" org="solitary" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Poison (Ex)</strong></p>
<div className="sideNoteWrap"><ScrollContainer id="monster-familiar_viper--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Bite-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 9</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d2 <Link to="/rule/con_damage">Con damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><Header sub>Description</Header>
<p>Vipers are not particularly aggressive snakes, but their poisonous bite can be deadly.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_wallaby = {title: "Wallaby (Familiar)", jsx: <><p><em>This bipedal mammal has a long tail, short arms, and long, limber legs that afford a strange hopping gait.</em></p>
<Header full><span>Wallaby</span><span>CR 1/3</span></Header>
<div className="reduce">
<Info id="monster-familiar_wallaby--info" source={[["Ultimate Wilderness",209],["Familiar Folio",27]]} xp="135" n small animal init={2} llv pcp={4} />
<Defense id="monster-familiar_wallaby--defense" ac={[13,13,11]} mod="+2 Dex, +1 size" hp={[4,"1d8"]} fort="+2" ref="+4" will="+0" />
<Offense id="monster-familiar_wallaby--offense" sp={40} melee="slam +0 (1d3-1)" />
<Stats id="monster-familiar_wallaby--stats" atts={[8,14,11,2,10,4]} bab={0} cmb={-2} cmd={10} feats={[["Skill Focus"," (Acrobatics)"]]} skills={{"acro":{"b":5},"per":{"b":4}}} />
<Ecology id="monster-familiar_wallaby--eco-eco" env="temperate or warm forests" org="solitary, pair, or court (3-10)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Wallabies are squat mammals that are often mistakenly identified as small <Link to="/monster/kangaroo">kangaroos</Link>. Like all marsupials, wallabies carry their newborn young in pouches at the front of their bodies. The wallaby defends itself using its strong hind legs, which it can launch quickly from under its body to deliver a powerful kick that sends would-be predators reeling.</p>
<p>A wallaby stands about 2 feet tall and weighs 20-40 pounds.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _familiar_weasel = {title: "Weasel (Familiar)", jsx: <><Header full><span>Weasel</span><span>CR 1/2</span></Header>
<div className="reduce">
<Info id="monster-familiar_weasel--info" source={[["Pathfinder RPG Bestiary",133]]} xp="200" n tiny animal init={2} llv scent pcp={1} />
<Defense id="monster-familiar_weasel--defense" ac={[15,14,13]} mod="+2 Dex, +1 natural, +2 size" hp={[4,"1d8"]} fort="+2" ref="+4" will="+1" />
<Offense id="monster-familiar_weasel--offense" sp={20} cl={20} melee="bite +4 (1d3-4 plus attach)" space={"2-1/2"} reach={"0"} />
<Stats id="monster-familiar_weasel--stats" atts={[3,15,10,2,12,5]} bab={0} cmb={0} cmd={6} cmdP="10 vs. trip" feats={["Weapon Finesse"]} skills={{"acro":{"b":10},"climb":{"b":10},"ea":{"b":3},"stl":{"b":14}}} racial="+4 Stealth, +8 Acrobatics" />
<Ecology id="monster-familiar_weasel--eco-eco" env="temperate hills" org="solitary" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Attach (Ex)</strong> When a weasel hits with a bite attack, it automatically <Link to="/rule/grapple">grapples</Link> its foe, inflicting automatic bite damage each round.</p>
<Header sub>Description</Header>
<p>Weasels are predators content with raiding chicken coops or attacking pets when they encounter civilization.</p>
<p><strong>Family:</strong> <Link to="/family/familiar">Familiar</Link></p>
</>};
const _fantionette = {title: "Fantionette", jsx: <><p><em>What appears at first glance to be a child or halfling has skin more akin to cracked porcelain barely covering a black, insectile carapace, and it has spider-like legs where one would expect arms.</em></p>
<Header full><span>Fantionette</span><span>CR 4</span></Header>
<div className="reduce">
<Info id="monster-fantionette--info" source={[["Pathfinder #127: Crownfall",82]]} xp="1,200" ce small outsider subs={["chaotic","evil","extraplanar"]} init={8} dv={60} llv pcp={10} aura={"revelation (10 ft.)"} />
<Defense id="monster-fantionette--defense" ac={[17,15,13]} mod="+4 Dex, +2 natural, +1 size" hp={[37,"5d10+10"]} fort="+3" ref="+8" will="+6" dr="5/good" immune="poison" sr="15" />
<Offense id="monster-fantionette--offense" sp={30} cl={20} melee="bite +7 (1d4+1), 2 claws +7 (1d3+1)" rend="2 claws, 1d4+1" sneak="+1d6" />
<SpellBlock id="monster-fantionette--spells-monster-spellblock-1" sla={{"cl":5,"con":"+8","content":[{"will":true,"content":<><Link to="/spell/bleed">bleed</Link> (DC 14), <Link to="/spell/charm_person">charm person</Link> (DC 14), <Link to="/spell/dancing_lights">dancing lights</Link>, <Link to="/spell/ghost_sound">ghost sound</Link> (DC 14)</>},{"day":3,"content":<><Link to="/spell/darkness">darkness</Link>, <Link to="/spell/dimension_door">dimension door</Link>, <Link to="/spell/spiritual_weapon">spiritual weapon</Link></>},{"day":1,"content":<><Link to="/spell/glitterdust">glitterdust</Link> (DC 15), <Link to="/spell/scare">scare</Link> (DC 15)</>}]}} />
<Stats id="monster-fantionette--stats" atts={[12,19,14,13,15,16]} bab={5} cmb={5} cmd={19} feats={["Following Step","Improved Initiative","Step Up"]} skills={{"acro":{"b":12},"bluff":{"b":11},"climb":{"b":9},"k":{"l":9},"per":{"b":10},"sm":{"b":10},"stl":{"b":16}}} lang={["A","C","H","U"]} sq="puppet strings" />
<Ecology id="monster-fantionette--eco-eco" env={<>any (<Link to="/rule/the_abyss">the Abyss</Link> or <Link to="/rule/axis">Axis</Link>)</>} org="solitary, pair, or cast (3-12)" treasure={{"S":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Aura of Revelation (Su)</strong> A fantionette appears as an adult halfling or a human child (its choice) to all creatures outside of its aura. This is an illusion (glamer) effect that can be bypassed only by <Link to="/spell/true_seeing">true seeing</Link> or similar magic. A creature within a fantionette's aura that is studying or interacting with it can attempt a DC 15 Will save to perceive the outsider for what it truly is. A creature that succeeds at this save or that is attacked by a fantionette immediately sees the fantionette's true form for the next 24 hours, even while outside the aura. The save DC is Charisma-based.</p>
<p><strong>Puppet Strings (Su)</strong> Once per day as an immediate action, a fantionette can relinquish control of itself, letting a higher entity (presumably Thamir Gixx) gain control. When it does this, a fantionette can perform one of the following special actions.</p>
<ul>
<li>Make an extra attack as part of a standard action.</li>
<li>Move up to its speed. The fantionette loses its move action on its next turn.</li>
<li>Reroll a single roll after it was made, but before the results are determined.</li>
</ul>
<Header sub>Description</Header>
<p>A fantionette is a servitor outsider for the halfling deity <Link to="/faith/thamir_gixx">Thamir Gixx</Link>. It embodies the halfling god's association with assassination and opportunity, presenting itself to loyal followers of the Silent Blade both as a powerful assassin and as impressive support for established murderers. When left to its own devices on the Material Plane, a fantionette is a terrifying stalker of halflings and humans alike, positioning itself among large groups of human children or halflings and selecting adult targets to murder based entirely on whim and opportunity.</p>
<p>A fantionette stands between 3 and 4 feet high and weighs about 70 pounds.</p>
<p>Unlike other auras, a fantionette's aura of revelation serves as a weakness - a range at which creatures can see through its otherwise illusory guise. A fantionette combines its deceptive form with its ability to blend in to crowds, often positioning itself as part of a group of children or adult halflings. Sometimes a child sees through the fantionette's aura, only for the child to be scared away and attempt to warn her parents. The result is almost always the same: the warned parent glances over at the disguised fantionette, too far outside the aura to perceive its true form, and dismisses the child for being foolish. A fantionette thrives on the fear it generates from children - though it is clear from their patterns of attacks that these outsiders are either somehow forbidden from harming children, or simply prefer not to.</p>
<p>Once a fantionette is ready to strike, or when an unfortunate witness manages to pierce its illusory form, the fantionette attacks in a flurry of claws accented by vicious bites. In its true form, it has a pair of wicked claws, each made of black chitin and pieces of jagged porcelain. The fantionette also sports a similarly serrated bite; its mouth resembles disjointed spider mandibles with a second layer of chipped porcelain. Fantionettes often employ their claws to cruel effect, combining an uncanny knowledge of anatomy with savage rends that tear most opponents into a bloody mess within seconds. Even creatures attempting to flee an unrestrained fantionette soon discover the outsider is capable of instinctually following - in some cases relinquishing itself to its malignant puppet strings, letting an unseen force drag the fantionette to chase down the fleeing target.</p>
<p>A wide array of divinely granted powers assists the fantionette in its paired roles as assassin and deceiver. These gifts most often manifest in a variety of spell-like abilities, which the fantionette uses as means to overcome targets or as a way of deflecting scrutiny in social settings. The hand of Thamir Gixx is said to hover invisibly over every fantionette in service to the Silent Blade. While fantionettes are free-willed beings, they can temporarily suspend their independence and allow other forces to guide their malignant claws. Such lapses in control manifest in odd last-second movements, such as a claw destined to miss a foe suddenly jolting upward into a disemboweling strike. Other times, a fantionette moves in an oddly contorted manner; these jerks and jostles reveal that it's being guided by its hidden puppeteer.</p>
<Header sub>Habitat</Header>
<p>First and foremost, fantionettes are servants of Thamir Gixx. Whether directly delivered by their god or summoned to the Material Plane by eager spellcasters using spells such as <Link to="/spell/lesser_planar_ally">lesser planar ally</Link>, fantionettes seek only to spread the chaotic, murderous joy of their patron deity. Like their god, they also offer deference to the followers of <Link to="/faith/norgorber">Norgorber</Link>. Fantionettes are as likely to work alongside a worshiper of Thamir Gixx as they are to take on the role of plucky sidekick to a fanatical devotee of Norgorber. Of the divine servitor races, perhaps none are more closely aligned than fantionettes and their <Link to="/monster/karumzek">karumzek</Link> counterparts. Where fantionettes prefer the eventual chaos of revealing themselves to a target, karumzeks prefer to act entirely behind the scenes. The two outsiders complement each other well, as karumzeks provide alchemical tools and poisons to fantionettes operating in service to Norgorber as part of Thamir Gixx's service to that deity.</p>
<p>A fantionette's patron will inevitably grow weary of its murderous presence and either destroy the outsider or release it into the wild. On their own, fantionettes often assist thieves and murderers - and disenfranchised halflings in particular - establish a violent reputation by grafting their own long trails of murder and theft that lead to these apprentices. In this way, Thamir Gixx's favored servitors create new worshipers for their patron deity, both by taking on new murderous servants and by using their own murderous actions to remind halfling communities of the presence of the Silent Blade.</p>
<p>When not acting on the Material Plane, fantionettes are found in equal measure in <Link to="/rule/the_abyss">the Abyss</Link> and <Link to="/rule/axis">Axis</Link>. In the Abyss, they congregate around their deity's mysterious home, operating as guardians or entertainment, depending on the whims of their capricious master. In the lawful realm of Axis, fantionettes fall in line with the mysterious followers of Norgorber, acting in equal roles as assassins, entertainers, and messengers for the ascended deity in his hidden realm in Axis. Left to their own devices on either plane, fantionettes form horrific gaggles. These groups traverse the planes in search of new arrivals or otherwise weak prey, first presenting themselves as lost or stranded children or halflings. In the Abyss, this deception often surprises voracious <Link to="/family/demon">demons</Link>, who see nothing more than a buffet of innocent humanity and are torn apart shortly after realizing the truth of their would-be meal. In Axis, fantionettes are far more cautious in their attacks. They always relocate to another distant portion of the plane after venting their bloodlust, striving to stay one step ahead of the <Link to="/monster/axiomite">axiomites</Link> and their <Link to="/family/inevitable">inevitable</Link> enforcers.</p>
</>};
const _fastachee = {title: "Fastachee", jsx: <><p><em>This gaunt, two-foot-tall humanoid figure appears made of corn husks, and carries an oversized basket filled with corn.</em></p>
<Header full><span>Fastachee</span><span>CR 11</span></Header>
<div className="reduce">
<Info id="monster-fastachee--info" source={[["Bestiary 5",114]]} xp="12,800" ng tiny fey init={10} sen={["plant projection"]} llv pcp={27} />
<Defense id="monster-fastachee--defense" ac={[26,18,20]} mod="+6 Dex, +8 natural, +2 size" hp={[153,"18d6+90"]} fort="+12" ref="+17" will="+17" dr="10/cold iron" />
<Offense id="monster-fastachee--offense" sp={30} melee="2 vines +18 (1d8-2)" space={"2-1/2"} reach={"0"} reachP={"30 ft. with vines"} />
<SpellBlock id="monster-fastachee--spells-monster-spellblock-1" sla={{"cl":11,"con":"+15","content":[{"will":true,"content":<><Link to="/spell/plant_growth">plant growth</Link>, <Link to="/spell/speak_with_plants">speak with plants</Link>, <Link to="/spell/thorny_entanglement">thorny entanglement</Link> (DC 16), <Link to="/spell/transport_via_plants">transport via plants</Link></>}]}} />
<SpellBlock id="monster-fastachee--spells-monster-spellblock-2" sla={{"cl":11,"con":"+17","sla":"Domain","content":[{"day":9,"content":<><em>rebuke death</em> (1d4+5)</>}]}} />
<SpellBlock id="monster-fastachee--spells-monster-spellblock-3" prep={{"cl":11,"con":"+17","prep":"Druid","l6":<><Link to="/spell/greater_dispel_magic">greater dispel magic</Link>, <Link to="/spell/heal">heal</Link><sup>D,</sup> <Link to="/spell/mass_bears_endurance">mass bear's endurance</Link></>,"l5":<><Link to="/spell/baleful_polymorph">baleful polymorph</Link> (DC 21), <Link to="/spell/breath_of_life">breath of life</Link><sup>D,</sup> <Link to="/spell/commune_with_nature">commune with nature</Link>, <Link to="/spell/wall_of_thorns">wall of thorns</Link></>,"l4":<><Link to="/spell/command_plants">command plants</Link> (DC 20), <Link to="/spell/cure_critical_wounds">cure critical wounds</Link><sup>D,</sup> <Link to="/spell/flame_strike">flame strike</Link> (DC 20), <Link to="/spell/freedom_of_movement">freedom of movement</Link>, <Link to="/spell/spike_stones">spike stones</Link> (DC 20)</>,"l3":<><Link to="/spell/aqueous_orb">aqueous orb</Link> (DC 20), <Link to="/spell/call_lightning">call lightning</Link> (DC 19), <Link to="/spell/cure_serious_wounds">cure serious wounds</Link><sup>D,</sup> <Link to="/spell/protection_from_energy">protection from energy</Link>, <Link to="/spell/remove_disease">remove disease</Link>, <Link to="/spell/spike_growth">spike growth</Link> (DC 19)</>,"l2":<><Link to="/spell/barkskin">barkskin</Link>, <Link to="/spell/cats_grace">cat's grace</Link>, <Link to="/spell/cure_moderate_wounds">cure moderate wounds</Link><sup>D,</sup> <Link to="/spell/flaming_sphere">flaming sphere</Link> (DC 18), <Link to="/spell/lesser_restoration">lesser restoration</Link>, <Link to="/spell/soften_earth_and_stone">soften earth and stone</Link>, <Link to="/spell/tree_shape">tree shape</Link></>,"l1":<><Link to="/spell/ant_haul">ant haul</Link>, <Link to="/spell/cure_light_wounds">cure light wounds</Link><sup>D,</sup> <Link to="/spell/endure_elements">endure elements</Link>, <Link to="/spell/faerie_fire">faerie fire</Link>, <Link to="/spell/goodberry">goodberry</Link>, <Link to="/spell/longstrider">longstrider</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link></>,"l0":<><Link to="/spell/create_water">create water</Link>, <Link to="/spell/detect_magic">detect magic</Link>, <Link to="/spell/purify_food_and_drink">purify food and drink</Link>, <Link to="/spell/stabilize">stabilize</Link></>}} />
<SpellBlock id="monster-fastachee--spells-monster-spellblock-4" other={["Domain",[<><strong>Domain</strong> <Link to="/domain/healing">Healing</Link></>]]} />
<p className="spells indented"><sup><strong>D</strong></sup> Domain spell</p>
<Stats id="monster-fastachee--stats" atts={[6,23,18,19,22,17]} bab={9} cmb={13} cmd={21} feats={["Augment Summoning","Combat Casting","Great Fortitude","Improved Initiative",["Skill Focus"," (Heal)"],["Spell Focus"," (conjuration)"],"Toughness","Weapon Finesse",["Weapon Focus"," (vines)"]]} skills={{"acro":{"b":27},"craft":{"of":"alchemy","b":25},"ea":{"b":27},"heal":{"b":30},"k":{"a":22},"per":{"b":27}}} lang={["C","S"]} sq="bountiful basket, healer's blessing, sow corn" />
<Ecology id="monster-fastachee--eco-eco" env="any temperate land" org="solitary or court (1 plus 2-26 other good-aligned fey)" treasure={{"D":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Bountiful Basket (Su)</strong> A fastachee carries a basket full of corn. Once per minute as a standard action, a fastachee can refill its basket with 2d6+12 ears of corn.</p>
<p><strong>Plant Projection (Su)</strong> At will as a full-round action, a fastachee can project its senses through every non-creature plant within a radius of 1 mile per HD simultaneously. While projecting its senses in this way, the fastachee is <Link to="/rule/flat_footed">flat-footed</Link> and can take no other actions. Alternatively, a fastachee can project its senses through a single ear of corn within 1 mile per HD as a free action. It continues projecting in this way for 1 round. The fastachee can treat either the corn plant it's projecting through or its own body as the origin point for any of its spells or spell-like abilities.</p>
<p><strong>Sow Corn (Su)</strong> As a standard action, a fastachee can plant an ear of corn in the ground to cause a stand of 1d6 corn stalks to grow to full height and maturity in the span of 1 minute.</p>
<p><strong>Spells (Sp)</strong> A fastachee can cast spells as an 11th-level druid, and can spontaneously swap out any prepared druid spell for the summon nature's ally spell of the same level. A fastachee also gains access to all spells and powers of the healing domain as an 11th-level cleric.</p>
<Header sub>Description</Header>
<p>Fastachees are mysterious, wise, and generous fey who foster the growth of nearby plants. Many communities who interact with them revere them as bringers of food and medicine, as well as protectors of crops. These fey have a particularly strong connection to corn; they regularly project their senses through corn plants to monitor the health of the field and search the local area for threats. They prefer to avoid direct confrontation if possible, using their ability to originate their spells from corn plants to harass those they wish to chase away.</p>
</>};
const _faun = {title: "Faun", jsx: <><p><em>This capricious figure has the upper torso, arms, and head of a man, but goat-like legs, a tail, and curling horns on his head.</em></p>
<Header full><span>Faun</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-faun--info" source={[["Bestiary 3",114]]} xp="400" cg medium fey init={3} llv pcp={8} />
<Defense id="monster-faun--defense" ac={[16,13,13]} mod="+3 Dex, +3 natural" hp={[13,"3d6+3"]} fort="+2" ref="+6" will="+5" dr="2/cold iron" />
<Offense id="monster-faun--offense" sp={30} melee="dagger +4 (1d4+2/19-20)" ranged="shortbow +4 (1d6/&times;3)" specAtt={[["panpipes","panpipes"]]} />
<SpellBlock id="monster-faun--spells-monster-spellblock-1" sla={{"cl":3,"con":"+6","content":[{"will":true,"content":<><Link to="/spell/ghost_sound">ghost sound</Link> (DC 13)</>},{"day":1,"content":<><Link to="/spell/hideous_laughter">hideous laughter</Link> (DC 15), <Link to="/spell/sleep">sleep</Link> (DC 14)</>}]}} />
<Stats id="monster-faun--stats" atts={[14,16,13,11,14,17]} bab={1} cmb={3} cmd={16} feats={["Point-Blank Shot","Weapon Finesse"]} skills={{"acro":{"b":8},"bluff":{"b":9},"per":{"b":8}}} lang={["C","S"]} />
<Ecology id="monster-faun--eco-eco" env="temperate forests" org="solitary, pair, or band (3-8)" treasure={{"S":[["Wd"],["Wsb20"]],"final":"‹eq-misc/masterwork panpipes›, other treasure"}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Panpipes (Su)</strong> Three times per day, a faun can use its masterwork panpipes to augment its spell-like abilities. Doing so is a swift action that increases the DC of the next spell-like ability it uses on its turn by +2.</p>
<Header sub>Description</Header>
<p>Often mistaken for <Link to="/monster/satyr">satyrs</Link>, fauns are far more benevolent than their unpredictable cousins. Many people use the two names interchangeably, a fact that irritates both fauns and satyrs. The vast majority of fauns are male, although unlike satyrs, females of this species do exist - they're simply less common than male fauns.</p>
<p>While satyrs breeding with their seduced victims always produce full-blooded satyrs, fauns are the result of a willing pairing between satyrs and goodly fey or kindhearted humanoids such as humans or elves. Even in this case, the babies of such unions are usually stolen away and raised by their fey parent or some other sylvan foster family.</p>
<p>Like satyrs, fauns enjoy wine, music, dancing, nature, and carnal pleasures. Gentle hedonists, fauns also have a dedicated connection to the countryside, helping hardworking humanoids who make peace with the land and take little more than they need. They help these frontier folk by fighting off significant threats and keeping less savory fey creatures away from their settlements. While they prefer to go unnoticed, in dire times a band of fauns may present themselves to villagers to warn their neighbors of an upcoming threat.</p>
<p>Fauns find <Link to="/monster/nymph">nymphs</Link> exceptionally attractive, more so than all others who dare view them. Nymphs find beauty in fauns' good nature and steadfast dedication to the natural world, and often humor their advances before almost accidentally falling in love with them.</p>
<p>As tall as a human, a faun stands on stark white goat legs and has short horns protruding from its head. It also has a short tail that swishes playfully when it is excited or entertained, and its hair falls gracefully around its horns and ears. Its humanoid torso is always lithe but chiseled because of its constant activity and play - fauns rarely laze about too long. Fauns stand nearly 6 feet tall and weigh little more than 150 pounds.</p>
</>};
const _fear_eater = {title: "Fear Eater", jsx: <><p><em>A distressingly humanoid face and stubby arms grow from this maggot-like creature's body.</em></p>
<Header full><span>Fear Eater</span><span>CR 5</span></Header>
<div className="reduce">
<Info id="monster-fear_eater--info" source={[["Occult Bestiary",27]]} xp="1,600" ne medium fey init={10} dv={60} llv pcp={12} />
<Defense id="monster-fear_eater--defense" ac={[18,16,12]} mod="+6 Dex, +2 natural" hp={[52,"8d6+24"]} fort="+5" ref="+12" will="+7" dr="5/cold iron" immune="disease, fear" />
<Offense id="monster-fear_eater--offense" sp={30} cl={30} melee="2 claws +10 (1d6+2 plus anxiety spores)" specAtt={[["anxiety spores","anxiety spores"],["dread burst","dread burst"],["fungal snare","fungal snare"]]} />
<SpellBlock id="monster-fear_eater--spells-monster-spellblock-1" sla={{"cl":5,"con":"+7","content":[{"will":true,"content":<><Link to="/spell/cause_fear">cause fear</Link> (DC 13), <Link to="/spell/dancing_lights">dancing lights</Link></>},{"day":3,"content":<><Link to="/spell/faerie_fire">faerie fire</Link>, <Link to="/spell/paranoia">paranoia</Link> (DC 14)</>},{"day":1,"content":<><Link to="/spell/fear">fear</Link>, <Link to="/spell/feather_fall">feather fall</Link></>}]}} />
<Stats id="monster-fear_eater--stats" atts={[14,22,17,11,12,15]} bab={4} cmb={6} cmd={22} cmdP="can't be tripped" feats={["Combat Reflexes","Improved Initiative","Power Attack","Weapon Finesse"]} skills={{"acro":{"b":17},"climb":{"b":21},"intm":{"b":10},"per":{"b":12},"sm":{"b":12},"stl":{"b":17}}} racial="+8 Climb" lang={["Ak","U"]} />
<Ecology id="monster-fear_eater--eco-eco" env="any underground" org="solitary, pair, or band (3-6)" treasure={{"S":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Anxiety Spores (Ex)</strong> Any creature struck by the fear eater's claws must succeed at a DC 17 Fortitude saving throw or be infected with anxiety spores, which cause nervousness and muscle tremors.</p>
<div className="sideNoteWrap"><ScrollContainer id="monster-fear_eater--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/diseases"><IonIcon aria-label="Disease" icon="/icons/paramecia.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Disease-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 17</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>1 round</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/minute</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>Cumulative -1 penalty on saving throws against emotion-manipulating effects (maximum -5)</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>2 consecutive saves</td></tr></tbody></table></ScrollContainer></div><p><strong>Dread Burst (Su)</strong> As a standard action, a fear eater can cause mushrooms to erupt from any creature within 30 feet already infected with its anxiety spores. The targeted creature takes 1d6 points of <Link to="/rule/charisma_damage">Charisma damage</Link> (Fortitude DC 17 negates) as the growing spores siphon away her emotions. If the affected creature is currently <Link to="/misc/shaken">shaken</Link>, <Link to="/misc/frightened">frightened</Link>, or <Link to="/misc/panicked">panicked</Link>, any creature within 10 feet gains the same condition for 1d4 rounds (Will DC 17 negates). This is a mind-affecting fear effect. The save DCs are Charisma-based.</p>
<p><strong>Fungal Snare (Ex)</strong> Once every 1d4 rounds, a fear eater can spew a fungal mass up to 30 feet, which explodes and coats all creatures within a 10-foot-radius burst with sticky filaments. Creatures other than fear eaters are <Link to="/rule/entangled">entangled</Link> (Reflex DC 17 negates). An entangled creature can attempt to break free with a successful DC 14 Strength or Escape Artist check as a move action. The save DC is Charisma-based.</p>
<Header sub>Description</Header>
<p>These malicious fey prowl the darkest corners of the world, inspiring terror to fertilize the curious fungal fruits that sustain them. Fear eaters tend vast gardens of luminescent mushrooms that grow upon the bound, cringing bodies of their captives. The mushrooms drain emotions from the creatures fertilizing them, and their spores cause spikes of fear in their hosts, which spur the mushrooms to grow even larger. Many such gardens can be found in the stalactite-city known as the Court of Ether, for its dark fey inhabitants crave the piquant misery contained in the mushrooms and consider them a delicacy to be used in only the most bizarre culinary delights. Despite their role in production of these despair-laced luxuries, fear eaters are welcome only on the margins of most fey societies, and most fey rulers prefer to purchase their specialities through intermediaries rather than be seen associating with fear eaters directly.</p>
<p>Fear eaters are interested only in breeding the perfect mushrooms, and can be dangerous opponents when hunting new fertilizer or protecting their crops. The average fear eater is 8 feet long and weighs 400 pounds.</p>
</>};
const _feargaunt = {title: "Feargaunt", jsx: <><p><em>This hulking shadow exudes a palpable menace, its form twisting into the shapes of hooks, grasping hands, and writhing tentacles.</em></p>
<Header full><span>Feargaunt</span><span>CR 9</span></Header>
<div className="reduce">
<Info id="monster-feargaunt--info" source={[["Occult Bestiary",28]]} xp="6,400" ce large outsider subs={["extraplanar","incorporeal"]} init={9} dv={60} pcp={18} aura={"nightmare (60 ft., DC 20)"} />
<Defense id="monster-feargaunt--defense" ac={[23,23,17]} mod="+7 deflection, +5 Dex, +1 dodge, -1 size" hp={[102,"12d10+36"]} fort="+7" ref="+13" will="+11" incorp />
<Offense id="monster-feargaunt--offense" fl={40} flP="perfect" melee="tormenting touch +16 (6d6)" space={"10"} reach={"10"} specAtt={[["tormenting touch","tormenting touch"]]} />
<SpellBlock id="monster-feargaunt--spells-monster-spellblock-1" sla={{"cl":12,"con":"+16","content":[{"will":true,"content":<><Link to="/spell/fear">fear</Link> (DC 17), <Link to="/spell/ghost_sound">ghost sound</Link> (DC 14)</>},{"day":3,"content":<><Link to="/spell/confusion">confusion</Link> (DC 17), <Link to="/spell/nightmare">nightmare</Link> (DC 19), <Link to="/spell/phantasmal_killer">phantasmal killer</Link> (DC 18)</>}]}} />
<Stats id="monster-feargaunt--stats" atts={[0,21,17,12,16,19]} bab={12} cmb={18} cmd={37} feats={["Blind-Fight","Dodge","Flyby Attack","Improved Initiative","Lunge",["Skill Focus"," (Stealth)"]]} skills={{"bluff":{"b":19},"fly":{"b":26},"intm":{"b":19},"k":{"p":16},"per":{"b":18},"sm":{"b":18},"stl":{"b":22}}} lang={["CX",";",[<><Link to="/umr/telepathy">telepathy</Link> 100 ft.</>]]} sq="never far behind, prideful defense" />
<Ecology id="monster-feargaunt--eco-eco" env={<>any (<Link to="/rule/dimension_of_dreams">Dimension of Dreams</Link>)</>} org="solitary" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Never Far Behind (Su)</strong> A number of times per day equal to its Charisma modifier, a feargaunt can teleport to a square adjacent to a creature that is still shaken from the feargaunt's nightmare aura or damaged by its tormenting touch. This ability functions as <Link to="/spell/greater_teleport">greater teleport</Link>. This ability functions only if the feargaunt and the creature are both in the Dimension of Dreams.</p>
<p><strong>Nightmare Aura (Su)</strong> A feargaunt is cloaked in a 60-foot-radius aura of fear, which manifests as darkened shadows, subtle rot, and skewed perspective. The first time a creature ends its turn within the aura, it must succeed at a DC 20 Will save or be <Link to="/misc/shaken">shaken</Link> for as long as it stays within the aura and for 1d4 rounds thereafter. Creatures within the aura suffering from any fear effect automatically fail Charisma checks to attempt impossible feats in a <Link to="/rule/dreamscape">dreamscape</Link>. The feargaunt can suppress or reactivate this aura as a swift action. If the creature succeeds at the saving throw, it cannot be affected again by the aura for another 24 hours. This is a mind-affecting fear effect. The DC is Charisma-based.</p>
<p><strong>Prideful Defense (Su)</strong> A feargaunt gains a deflection bonus to its Armor Class equal to its Wisdom modifier, in addition to the deflection bonus an incorporeal creature normally receives based on its Charisma modifier.</p>
<p><strong>Tormenting Touch (Su)</strong> A feargaunt's touch is an incorporeal touch attack that deals 6d6 points of damage and bypasses damage reduction. A creature that is suffering from a fear effect and is struck by the feargaunt's tormenting touch also takes 1d2 points of <Link to="/rule/charisma_damage">Charisma bleed damage</Link>. This <Link to="/rule/bleed">bleed</Link> damage can be stopped as normal, but also stops when the subject is no longer suffering from a fear effect.</p>
<Header sub>Description</Header>
<p>Certain vivid nightmares endure beyond the sleeper's awakening, drawing substance from planar flotsam and deriving purpose from their creators' deepest fears. Shifting their form from moment to moment, these malicious creatures range the Dimension of Dreams, ambushing prey with soul-weakening strikes. Their presence turns dream elements that might otherwise be only frightening into agonizing experiences that can kill their victims. Feargaunts often allow victims to believe they have escaped, only to attack anew from an unexpected direction. The Dimension of Dreams is their home territory, and a feargaunt uses its knowledge of this realm to ensure that no matter how fast or how far victims flee, they can never truly leave the feargaunt behind.</p>
<p>Anywhere a feargaunt steps takes on a darker, more frightening cast. Shadows become impenetrable hiding places for things that lurk out of sight, familiar locations take on ominous twists that lead those who thought they knew their way astray, and comforting faces become masks for monstrous, sadistic enemies. The terror the feargaunt inspires eats away at the mental stability of its victims, ensuring that they can't navigate dreamscapes without tripping themselves up and letting their own imaginations hamper them.</p>
</>};
const _feeder_in_the_depths = {title: "Feeder in the Depths", jsx: <><p><em>An immense gray-and-white shark glides through the water, its piercing red eyes revealing a vicious intelligence.</em></p>
<Header full><span>Feeder in the Depths</span><span>CR 8</span></Header>
<div className="reduce">
<Info id="monster-feeder_in_the_depths--info" source={[["Monster Codex",196]]} xp="4,800" le huge magicalBeast init={2} dv={60} llv keenScent blindsense={30} pcp={20} aura={"blood feast (30 ft.)"} />
<Defense id="monster-feeder_in_the_depths--defense" ac={[20,10,18]} mod="+2 Dex, +10 natural, -2 size" hpRaw="105 (10d10+50); blood feast" fort="+12" ref="+9" will="+7" resist="cold 20" sr="19" />
<Offense id="monster-feeder_in_the_depths--offense" sw={80} melee="bite +15/+10 (2d6+10/19-20 plus deadly bleeding)" space={"15"} reach={"10"} specAtt={[["swift bite","swift bite"]]} />
<Stats id="monster-feeder_in_the_depths--stats" atts={[24,15,20,13,15,14]} bab={10} cmb={19} cmd={31} cmdP="can't be tripped" feats={["Combat Reflexes",["Improved Critical"," (bite)"],"Intimidating Prowess","Iron Will","Vital Strike"]} skills={{"intm":{"b":19},"k":{"r":11},"per":{"b":20},"swim":{"b":15}}} racial="+5 Perception" lang={["Ak","Aq","I"]} />
<Ecology id="monster-feeder_in_the_depths--eco-eco" env="any oceans" org="solitary" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Blood Feast (Su)</strong> When a creature within 30 feet of a feeder in the depths takes <Link to="/rule/bleed">bleed</Link> damage (including ongoing damage), the feeder heals an equal amount of damage.</p>
<p><strong>Deadly Bleeding (Su)</strong> A feeder in the depth's bite causes bleeding wounds that resist healing. The first bite that damages a creature deals 1d4 points of bleed damage, and each subsequent bite increases the amount of bleed by 1d4. Stopping the bleeding requires a successful DC 20 Heal check or the application of any magical healing. However, anyone attempting to cast a healing spell on a creature suffering from deadly bleeding must succeed at a DC 20 caster level check or the spell doesn't affect the bleeding creature. The save DC is Constitution-based.</p>
<p><strong>Keen Scent (Ex)</strong> A feeder in the depths can notice creatures by scent in a 180-foot radius underwater, and can detect blood in the water at a distance of up to 1 mile.</p>
<p><strong>Swift Bite (Ex)</strong> When making a full attack, a feeder in the depths can make a second bite attack at a -5 penalty.</p>
<Header sub>Description</Header>
<p>Feeders in the depths closely resemble ordinary sharks, but they are faster, stronger, and far more intelligent and malevolent. Feeders in the depths begin life as ordinary <Link to="/monster/shark">sharks</Link>, raised under the care of <Link to="/monster/sahuagin">sahuagin</Link> priestesses. A would-be feeder feasts on the flesh of merfolk, sea elves, and other aquatic humanoids. As it dines on these sacrifices, the priestess chants blasphemous rituals, infusing the shark with malign power and the stolen intelligence of its victims. Over the course of 13 feedings over 13 midwinters, a new feeder in the depths arises.</p>
<p>Feeders in the depths view themselves as equals to sahuagin, not as servants. They have no special affection for sharks, and can't communicate with them. Feeders act as loyal companions as long as they're respected and given the freedom to hunt. If not treated well, they rip their would-be masters apart and descend into the lightless depths of the ocean. Although able to breed, feeders in the depths give birth only to monstrosities or normal sharks, never to other feeders. A typical feeder in the depths is 24 feet long and weighs 5,500 pounds.</p>
</>};
const _fellsig = {title: "Fellsig", jsx: <><p><em>This squat figure's rough-hewn visage is frozen in a mask of pain, while the cracks in its dark stone body glow with a fiery inner heat.</em></p>
<Header full><span>Fellsig</span><span>CR 3</span></Header>
<div className="reduce">
<Info id="monster-fellsig--info" source={[["Andoran, Birthplace of Freedom",55]]} xp="800" ne medium undead subs={["fire"]} init={0} dv={60} tremorsense={30} pcp={9} />
<Defense id="monster-fellsig--defense" ac={[15,10,15]} mod="+5 natural" hp={[27,"5d8+5"]} fort="+2" ref="+1" will="+5" def={[["molten heart","molten heart"]]} immune={<>fire, <Link to="/umr/undead_traits">undead traits</Link></>} weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to cold</>]} />
<Offense id="monster-fellsig--offense" sp={20} melee="slam +6 (1d4+4 plus burn)" ranged="lava ball +3 ranged touch (1d6 fire plus burn)" specAtt={[["eruption","eruption"],["lava ball","lava ball"]]} burn="1d6, DC 13" />
<SpellBlock id="monster-fellsig--spells-monster-spellblock-1" sla={{"cl":5,"con":"+6","content":[{"day":5,"content":<Link to="/spell/pyrotechnics">pyrotechnics</Link>},{"day":3,"content":<><Link to="/spell/burning_hands">burning hands</Link> (DC 12)</>}]}} />
<Stats id="monster-fellsig--stats" atts={[16,10,0,8,13,12]} bab={3} cmb={6} cmbP="+8 bull rush" cmd={16} cmdP="18 vs. bull rush" feats={["Blind-Fight","Improved Bull Rush","Power Attack"]} skills={{"craft":{"of":"any","b":6},"intm":{"b":9},"per":{"b":9}}} lang={["Dw","Ig"]} />
<Ecology id="monster-fellsig--eco-eco" env="any mountains or underground" org="solitary, pair, or flow (3-8)" treasure={{"S":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Lava Ball (Su)</strong> As a full-round action, a fellsig can regurgitate a ball of lava into its fist and hurl it with a range increment of 30 feet. Any creature struck must succeed at a DC 13 Reflex save or <Link to="/rule/catch_fire">catch fire</Link> and take 1d6 points of fire damage at the start of its turn for an additional 1d4 rounds. The save DC is Charisma-based.</p>
<p><strong>Molten Heart (Ex)</strong> Beneath the slabs of igneous rock that compose a fellsig's body are organs of superheated rock and fumes. A creature that confirms a critical hit against a fellsig in melee is struck by a jet of flaming ash that deals 2d6 points of fire damage (Reflex DC 13 half).</p>
<Header sub>Description</Header>
<p>First created in catastrophic event known as the Rending, the molten undead known as fellsigs have wandered Darkmoon Vale for centuries. When Droskar's Crag erupted and buried entire dwarven settlements under choking ash, boiling mud, noxious fumes, and seething magma, the violence and suffering caused many of the volcano's victims to rise after death, cursed to visit their own fiery deaths upon the living. Fellsigs are made up of the very materials that took their lives, and their existence is a constant reminder of all that was lost in the fiery cataclysm of the Rending. Most fellsigs are morose creatures, bemoaning the destruction of their homeland and carrying on a shadowy imitation of their former lives amid the scorched ruins they inhabit. The sight of life and joy often enrages them with vindictive jealousy for those spared the fellsigs' own cruel fate.</p>
<p>Fellsigs have sympathy for those exhibiting obvious signs of burn damage, however, and using the Diplomacy skill can sometimes convince these stony, smoldering monsters to aid such creatures. Similarly, fellsigs hold no special hatred for creatures of the fire subtype, and on occasion they can be convinced to serve such creatures as guards or even artisans, though such alliances are tenuous at best.</p>
</>};
const _fen_mauler = {title: "Fen Mauler", jsx: <><p><em>This figure looms within the shadows. The bones and teeth of countless creatures clatter from tangles within its matted, reeking fur.</em></p>
<Header full><span>Fen Mauler</span><span>CR 10</span></Header>
<div className="reduce">
<Info id="monster-fen_mauler--info" source={[["Bestiary 6",127]]} xp="9,600" ne large monstrousHumanoid init={8} dv={60} llv scent pcp={17} aura={<><Link to="/umr/stench">stench</Link> (DC 15, 10 rounds)</>} />
<Defense id="monster-fen_mauler--defense" ac={[24,14,19]} mod="+4 Dex, +1 dodge, +10 natural, -1 size" hp={[136,"13d10+65"]} fort="+11" ref="+12" will="+11" def={[["shadowy pelt","shadowy pelt"]]} immune="disease" resist="cold 10" />
<Offense id="monster-fen_mauler--offense" sp={30} melee="bite +20 (1d8+8), 2 claws +20 (1d8+8)" space={"10"} reach={"10"} pounce rend="2 claws, 1d8+12" />
<Stats id="monster-fen_mauler--stats" atts={[27,18,20,7,17,8]} bab={13} cmb={22} cmd={37} feats={["Dodge","Great Fortitude","Improved Initiative","Intimidating Prowess","Mobility","Power Attack",["Skill Focus"," (Stealth)"]]} skills={{"intm":{"b":16},"per":{"b":17}}} racial="+4 Perception, +8 Stealth in swamps, +4 Survival" lang={[["Sasquatch"]]} sq="swamp stride, trophy hunter" />
<Ecology id="monster-fen_mauler--eco-eco" env="temperate swamps" org="solitary, pair, or party (3-7)" treasure={{"S":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Shadowy Pelt (Su)</strong> A fen mauler can swathe itself in shadows, allowing it to become nearly invisible while standing motionless. A fen mauler gains partial <Link to="/rule/concealment">concealment</Link> on any round it does not move from its current space.</p>
<p><strong>Swamp Stride (Ex)</strong> A fen mauler can move through any sort of undergrowth and <Link to="/rule/difficult_terrain">difficult terrain</Link> (such as briars, deep mud, and similar terrain) in swamps at normal speed and without taking damage or suffering any other impairment.</p>
<p><strong>Trophy Hunter (Su)</strong> As part of a 10-minute ritual, a fen mauler can harvest bones, teeth, flesh, or hide from an animal, humanoid, magical beast, or monstrous humanoid it has slain, creating a trophy. This trophy is a permanent magic item that functions only for the fen mauler that created it, granting some measure of the slain creature's power to the fen mauler while carried or worn on its body. The fen mauler chooses which of the following powers the trophy grants: <Link to="/umr/blindsense">blindsense</Link> 30 feet, climb 30 feet, <Link to="/ability/evasion">evasion</Link>, <Link to="/umr/ferocity">ferocity</Link>, <Link to="/umr/grab">grab</Link>, <Link to="/umr/pounce">pounce</Link>, <Link to="/ability/uncanny_dodge">uncanny dodge</Link>, or a single energy <Link to="/umr/immunity">immunity</Link>. Alternatively, a trophy can grant a +4 competence bonus to a single skill. The skill or ability modified must be one the trophy creature had in life, and a trophy imparting a skill bonus allows the fen mauler to attempt checks with that skill untrained. A fen mauler can maintain a number of trophies equal to its Wisdom modifier (3 for the standard fen mauler). The fen mauler presented here has not assigned any of its trophies.</p>
<Header sub>Description</Header>
<p>Long ago, in the wake of terrible calamity, some populations of <Link to="/monster/sasquatch">sasquatches</Link> embraced terrible rites and dark bargains to protect their homes, becoming fen maulers. While sasquatches only resort to violence when threatened, fen maulers revel in bloodshed and vindictive belligerence. All but invisible within their shadowy domains, fen maulers stalk victims for hours or days at a time, until they corner their lost and panicked prey and force a final, deadly confrontation.</p>
</>};
const _feranth = {title: "Feranth", jsx: <><p><em>A droning hum announces the presence of this enormous horned beast. Powerful muscles ripple just beneath its mottled black hide.</em></p>
<Header full><span>Feranth</span><span>CR 14</span></Header>
<div className="reduce">
<Info id="monster-feranth--info" source={[["Pathfinder #90: The Divinity Drive",82]]} xp="38,400" ce huge magicalBeast init={-2} dv={60} llv tremorsense={120} pcp={16} />
<Defense id="monster-feranth--defense" ac={[29,6,29]} mod="-2 Dex, +23 natural, -2 size" hp={[218,"19d10+114"]} fort="+16" ref="+9" will="+11" def={[["hardened body","hardened body"]]} ferocity dr="5/adamantine" />
<Offense id="monster-feranth--offense" sp={50} br={30} melee="bite +25 (2d6+8), 2 claws +25 (1d8+8), gore +25 (2d6+8 plus push)" space={"15"} reach={"15"} specAtt={[["ambush","ambush"],["burrowing charge","burrowing charge"],["quick strike","quick strike"],["skull-splitting roar","skull-splitting roar"]]} push="gore, 10 ft." />
<Stats id="monster-feranth--stats" atts={[26,7,20,4,17,7]} bab={19} cmb={29} cmbP="+31 bull rush" cmd={37} cmdP="39 vs. bull rush, 41 vs. trip" feats={["Awesome Blow","Cleave","Great Cleave","Improved Bull Rush","Improved Iron Will","Iron Will","Power Attack","Run","Stunning Assault","Toughness"]} skills={{"acro":{"b":10,"x":"+18 when jumping"},"climb":{"b":15},"per":{"b":16}}} racial="+8 Acrobatics when jumping, +4 Perception" />
<Ecology id="monster-feranth--eco-eco" env="warm deserts or mountains" org="solitary or pair" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Ambush (Ex)</strong> When a feranth <Link to="/rule/charge">charges</Link>, instead of making an attack at the end of the charge, it can instead use its skull-splitting roar ability, although the DC to resist this ability is 4 lower when the ability is used in this fashion.</p>
<p><strong>Burrowing Charge (Ex)</strong> A feranth can use the charge and <Link to="/rule/run">run</Link> actions while burrowing.</p>
<p><strong>Hardened Body (Ex)</strong> A feranth's natural attacks count as <Link to="/eq-material/adamantine">adamantine</Link> for the purpose of overcoming damage reduction and hardness.</p>
<p><strong>Quick Strike (Ex)</strong> Whenever a feranth successfully dazes a creature using its skull-splitting roar ability, it can make an attack of opportunity against that creature. A feranth can use this ability against only one target per round, no matter how many creatures it successfully dazes.</p>
<p><strong>Skull-Splitting Roar (Ex)</strong> As a standard action, a feranth can unleash a terrible roar, affecting all creatures in a 15-foot cone. Any creatures in the area of the cone must succeed at a DC 24 Fortitude save or be <Link to="/misc/dazed">dazed</Link> for 1 round and <Link to="/misc/deafened">deafened</Link> for 1 minute. A feranth can use this ability once every 1d4 rounds. This is a sonic effect, and the save DC is Constitution-based.</p>
<Header sub>Description</Header>
<p>A feranth uses its devastating sonic attack to incapacitate foes and follows up with its powerful bite, vicious claws, and sharp horns to tear its prey asunder. This massive ambush predator is covered with hardened ridges and mottled black skin. Its limbs end in powerful claws that it uses to dig through tough terrain. When burrowing, a feranth uses its rear legs to smash the sides of its burrow, collapsing the passage behind it. A feranth's head is adorned with two massive, forward-facing horns and four bulbous, constantly humming sacs that amplify its mighty roars. A feranth stands 25 feet tall and 40 feet long, and weighs between 9 and 11 tons.</p>
<Header sub>Ecology</Header>
<p>The feranths that now roam Numeria are the descendants of a group that were abducted from a far-off planet and brought to Golarion as part of an ill-fated voyage. They remained locked in their containment pods for many years after their arrival on Golarion, but the damage sustained by the pods eventually became too much: they finally failed, releasing the feranths into the unsuspecting world. Using their sharp claws, the creatures burrowed through the structurally weakened hull of the starship in which they were contained, emerging onto the surface of a strange new planet.</p>
<p>On their native planet, feranths were apex predators that devoured prey with endless appetite, and the few living on Golarion remain true to this behavior. Feranths move on to a new location only after exhausting most sources of available food. While feranths do eventually return to previous hunting grounds, they instinctively wait many years for food sources to replenish before terrorizing those regions once again.</p>
<p>Because of feranths' highly territorial nature, battles between two rivals are vicious affairs that can take hours or even days to resolve, and almost invariably end with one of the combatants bloodied, limping, and nearly dead. Yet deaths are surprisingly rare during these trials, despite the ferocity with which they are fought. It seems that feranths prefer to simply frighten and weaken their rivals rather than killing them outright.</p>
<p>When hunting prey, feranths tend to use ambush tactics. They often charge up through the ground once they have pinpointed their prey's location using tremorsense, and then unleash a mighty roar to further discombobulate their victims. Feranths often repeat this tactic many times during an encounter with prey, diving beneath the ground only to erupt back up a few seconds or even minutes later.</p>
<p>Fortunately for the inhabitants of Numeria, female feranths are rare on Golarion - a fact that keeps the beasts' numbers low. It's uncertain whether this same discrepancy in the ratio between the sexes exists on the feranths' home planet. Females are by far the most ferocious members of the species, especially in the few months following the hatching of their eggs. During this time, a female feranth can be identified by her mottled red-brown skin tone and vicious temperament. For 3 months after their eggs hatch, female feranths have the <Link to="/umr/blood_rage">blood rage</Link> universal monster ability. A female usually mates multiple times during her lifetime, laying two eggs each time. She cares for her offspring for 3 years before the juveniles abandon their mother, leaving in search of their own territories in which to hunt. Juvenile feranths that have just left their families are often about 12 feet tall and 20 feet long.</p>
<Header sub>Habitat</Header>
<p>Scholars believe that feranths' behavior on Golarion is much the same now as it was on their home planet, with one key difference: their range. Rather than roaming great swaths of territory like their ancestors did, feranths on Golarion remain primarily in Numeria. Some of these creatures have wandered into the Worldwound, however, and every now and then one rampages through the northern reaches of the River Kingdoms, across the southern border of Mendev, or along the eastern edge of Brevoy. For unknown reasons, feranths avoid treading into Ustalav.</p>
<p>Feranths prefer to carve their lairs out of hillsides where they can monitor the passage of potential prey, but they sometimes dig dens deep underground to protect themselves from ambush by rival feranths. It is most common for a feranth to construct its home underground when other feranths threaten its territory, but females of the species also dig underground lairs when they are ready to lay and hatch their eggs. Thus, the presence of an underground feranth lair is a sign of greater danger: either the nearby area is infested with other feranths, or the den belongs to a ferocious feranth mother.</p>
<p>Crafty Kellid tribes have learned some tricks, such as the use of earplugs or silencing magic, to counteract the beasts' advantages. They also bait feranths into traps or enclosed canyons using livestock or other large animals. The Kellids use these tactics not only to fight these alien beasts, but also to capture them - a few captive feranths have even been trained for combat by various tribes. Powerful alchemical concoctions are mixed and fed to a captive feranth, as it is necessary to cloud the creature's mind to tame it. In this state, the feranth becomes docile and seemingly forgets how to burrow, making it easy for the tribe to keep its prized beast nearby. Once the feranth's mind is clouded, blinders can be attached to limit the creature's field of vision, allowing a brave barbarian rider to guide it in battle. When the time comes for the feranth to fight, a second concoction is fed to the beast to give it a burst of energy, sending it into a rampage.</p>
<p>The Red Dog tribe in Numeria's Sellen Hills was renowned for many years for its control of a feranth, a feat that its leaders parleyed into an alliance between a number of nearby tribes. This alliance - and the entire Red Dog tribe - ended abruptly when the captive feranth eventually developed a tolerance to the alchemical concoctions used to keep it docile.</p>
</>};
const _festering_spirit = {title: "Festering Spirit", jsx: <><p><em>This ghost-like creature reeks of the grave and drips with putrescent goo.</em></p>
<Header full><span>Festering Spirit</span><span>CR 8</span></Header>
<div className="reduce">
<Info id="monster-festering_spirit--info" source={[["Bestiary 4",98]]} xp="4,800" ce medium undead subs={["incorporeal"]} init={9} dv={60} pcp={13} aura={<><Link to="/umr/stench">stench</Link> (DC 14, 10 rounds)</>} />
<Defense id="monster-festering_spirit--defense" ac={[18,18,12]} mod="+2 deflection, +5 Dex, +1 dodge" hp={[58,"9d8+18"]} fort="+5" ref="+8" will="+7" chanRes="+2" incorp immune={<Link to="/umr/undead_traits">undead traits</Link>} />
<Offense id="monster-festering_spirit--offense" fl={40} flP="good" melee={<>incorporeal touch +11 (1d4 <Link to="/rule/con_damage">Con damage</Link> plus slime)</>} specAtt={[["create spawn","create spawn"],["slime","slime"]]} trample="1 Con plus slime, DC 16" />
<Stats id="monster-festering_spirit--stats" atts={[0,20,0,6,12,15]} bab={6} cmb={11} cmd={24} feats={["Combat Reflexes","Dodge","Flyby Attack","Improved Initiative","Mobility"]} skills={{"fly":{"b":9},"per":{"b":13},"stl":{"b":17}}} sq="ghost touch" />
<Ecology id="monster-festering_spirit--eco-eco" env="any land or underground" org="solitary, pair, or gang (3-6)" treasure={{"I":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Create Spawn (Su)</strong> A humanoid creature killed by a festering spirit's Constitution damage becomes a festering spirit under the control of its killer in 1d4 days. Giving the corpse a proper burial (or cremation) prevents it from becoming a festering spirit.</p>
<p><strong>Ghost Touch (Su)</strong> A festering spirit can manipulate corporeal objects that weigh up to 25 pounds as if those objects had the <Link to="/magic-enh/ghost_touch">ghost touch</Link> special ability.</p>
<p><strong>Slime (Su)</strong> A festering spirit's slime resembles the putrefying sludge of decaying corpses. Any creature that is hit by the spirit's incorporeal touch attack, passes through its square, or hits it with a natural weapon or unarmed strike must attempt a DC 16 Fortitude save. On a failure, the creature is <Link to="/misc/nauseated">nauseated</Link> for 1d4 rounds, and on a success the creature is <Link to="/misc/staggered">staggered</Link> for 1 round. A festering spirit's slime persists on objects and creatures for 1d10 minutes but has no harmful effect after its initial contact. Creatures immune to poison or disease are immune to this ability. The save DC is Charisma-based.</p>
<p><strong>Trample (Ex)</strong> The DC of a festering spirit's trample is Charisma-based.</p>
<Header sub>Description</Header>
<p>A festering spirit arises when a vile person's corpse is put in a mass grave, or when such a person is buried, exhumed, and placed in a charnel house or ossuary. The lingering hatred and evil of the dead mixes with the worst remnants of dozens of other people, creating a frustrated incorporeal shade of sickness, hate, and rot. Powerful mortals might arise as multiple festering spirits, each spawned from a different aspect of the original creature's personality.</p>
<p>A festering spirit can't travel more than a mile from its remains. When left alone for long periods, a festering spirit usually wanders the halls and rooms near its burial site, destroying things, indulging in pranks, or trying to eat and drink anything it finds palatable (which falls through its incorporeal body to no effect). Its senses can barely detect these treats, though some adventurers report that strong alcohol and spicy foods can distract the spirit as it savors these sensations.</p>
</>};
const _festrog = {title: "Festrog", jsx: <><p><em>This hideously malformed, hairless, pustule-covered corpse moves and snarls more like an undead hound than an undead man.</em></p>
<Header full><span>Festrog</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-festrog--info" source={[["Bestiary 3",115],["Hungry are the Dead",30]]} xp="400" ne medium undead init={1} dv={60} scent pcp={6} />
<Defense id="monster-festrog--defense" ac={[14,11,13]} mod="+1 Dex, +3 natural" hp={[9,"2d8"]} fort="+0" ref="+1" will="+4" immune={<Link to="/umr/undead_traits">undead traits</Link>} />
<Offense id="monster-festrog--offense" sp={30} spExtra="four-footed run" melee="bite +4 (1d6+3 plus feed), 2 claws +5 (1d4+3)" specAtt={[["charging trip","charging trip"],["diseased pustules","diseased pustules"],["feed","feed"]]} />
<Stats id="monster-festrog--stats" atts={[17,13,0,10,12,11]} bab={1} cmb={4} cmd={15} cmdP="19 vs. trip" feats={[["Weapon Focus"," (claw)"]]} skills={{"climb":{"b":8},"per":{"b":6}}} lang={["C"]} />
<Ecology id="monster-festrog--eco-eco" env="any land" org="solitary, pair, gang (3-5), or pack (6-11)" treasure={{"S":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Charging Trip (Ex)</strong> A festrog that hits with its bite after making a charge attack on all fours can attempt to <Link to="/rule/trip">trip</Link> its opponent (+4 bonus). This trip does not provoke attacks of opportunity.</p>
<p><strong>Diseased Pustules (Ex)</strong> When a festrog takes damage from a piercing or slashing weapon, some of its boils rupture, squirting the attacker with pus-like fluids. The noxious secretions carry a potent contact disease that causes those infected to break out into painful necrotic boils.</p>
<div className="sideNoteWrap"><ScrollContainer id="monster-festrog--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/diseases"><IonIcon aria-label="Disease" icon="/icons/paramecia.svg" /></ThLink><th colSpan={4} scope="col" className="title">Necrotic Boils</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Disease-contact</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 11</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>1 day</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/day</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d4 <Link to="/rule/con_damage">Con damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><p><strong>Feed (Su)</strong> Every time a festrog makes a successful bite attack, it feeds on its opponent's flesh and gains 5 <Link to="/rule/temporary_hit_points">temporary hit points</Link>. The festrog cannot have more than 5 temporary hit points gained by this ability at one time.</p>
<p><strong>Four-Footed Run (Ex)</strong> A festrog can run on all fours at speed of 50 feet if it doesn't hold or carry anything in its hands. When running on all fours, it is treated as if it had the <Link to="/feat/run">Run</Link> feat.</p>
<Header sub>Description</Header>
<p>A festrog is an undead abomination spawned when a creature is killed by a massive release of negative energy (perhaps due to planar bleeding, the destruction of a potent artifact, or even certain magical attacks by powerful undead), and then mutilated by an outside force, such as the scavenging of wild animals. Sometimes called dog-ghouls for their ability to run on all fours, the name often causes opponents to misinterpret this creature's abilities and grossly underestimate its intelligence, for the festrog is in fact a rather canny monstrosity.</p>
<p>Festrogs inhabit remote areas near places where they were slain. It's not uncommon for a tribe of festrogs to share territories with <Link to="/monster/ghoul">ghouls</Link>. Most festrogs gather in small bands, based on whatever loose affiliations they might recall from when they were alive, and choose dwellings in sunless areas easily defended with group tactics. Like ghouls, they tend to skulk about graveyards, though they prefer ones with tombs and mausoleums so they can hide during the day. They hunt nocturnally in packs, preferring open areas like plains, farmlands, or open forests where they can track down prey with few places for it to run or hide. These packs wander semi-nomadically, often traveling miles beyond their dwellings in pursuit of mortal flesh.</p>
</>};
const _fetchling = {title: "Fetchling", jsx: <><p><em>This gaunt man appears drained of color, like a person viewed at twilight or in a dark alley.</em></p>
<Header full><span>Fetchling</span><span>CR 1/2</span></Header>
<div className="reduce">
<Info id="monster-fetchling-fetchling-classrogue-1-info" source={[["Bestiary 2",123]]} xp="200" text={<>Fetchling <Link to="/class/rogue">rogue</Link> 1</>} n medium outsider subs={["native"]} init={3} dv={60} llv pcp={3} />
<Defense id="monster-fetchling--defense" ac={[17,13,14]} mod="+4 armor, +3 Dex" hp={[10,"1d8+2"]} fort="+2" ref="+5" will="-1" def={[["shadow bending","shadow bending"]]} resist="cold 5, electricity 5" />
<Offense id="monster-fetchling--offense" sp={30} melee="dagger +3 (1d4+1/19-20)" sneak="+1d6" />
<SpellBlock id="monster-fetchling--spells-monster-spellblock-1" sla={{"cl":1,"con":"+3","content":[{"day":1,"content":<><Link to="/spell/disguise_self">disguise self</Link> (humanoid only)</>}]}} />
<Stats id="monster-fetchling--stats" atts={[13,17,14,8,8,14]} bab={0} cmb={1} cmd={14} feats={["Weapon Finesse"]} skills={{"app":{"b":3},"bluff":{"b":6},"diplo":{"b":6},"sm":{"b":3},"stl":{"b":7}}} racial="+2 Knowledge (planes), +2 Stealth" lang={["C"]} sq={<><Link to="/ability/trapfinding">trapfinding</Link> +1</>} />
<Ecology id="monster-fetchling--eco-eco" env="any (Plane of Shadow)" org="solitary, pair, guild (3-12), or enclave (13-30 plus 1-4 2nd-4th level rogue spies, 1-4 2nd-4th level sorcerers, and 1 3rd-6th level fighter/rogue leader)" treasure={{"N":[["Acs"],["Wd"]],"final":"other treasure"}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Shadow Blending (Su)</strong> Attacks against a fetchling in dim light have a 50% miss chance instead of the normal 20% miss chance. This ability does not grant total <Link to="/rule/concealment">concealment</Link>; it just increases the miss chance.</p>
<Header sub>Description</Header>
<p><Link to="/race/fetchling">Fetchlings</Link> are descended from generations of humans trapped on the Plane of Shadow. Infused with the essence of that plane, they are more and less than human, and often serve as middlemen in planar trade and politics. Other than their yellow eyes, their flesh has no color - it is either stark white, midnight black, or a shade of gray. On the Material Plane, they conceal themselves with heavy clothing or dim light so they can work without prejudice. The name "fetchling" is a human word; their own name for their race is kayal, meaning "fetchling"</p>
<p>A fetchling stands 6 feet tall, but is generally lithe and wiry of frame, weighing only 150 pounds. Fetchlings live as long as half-elves.</p>
</>};
const _fext = {title: "Fext", jsx: <><p><em>This creature's pallid skin and dead, vacant eyes belie its healthy, powerful physique. It is clad in fearsome armor.</em></p>
<Header full><span>Fext</span><span>CR 10</span></Header>
<div className="reduce">
<Info id="monster-fext--info" source={[["Bestiary 5",115],["Pathfinder #71: Rasputin Must Die!",88]]} xp="9,600" le medium undead init={4} dv={60} pcp={20} />
<Defense id="monster-fext--defense" ac={[25,12,23]} mod="+9 armor, +1 Dex, +1 dodge, +2 natural, +2 shield" hp={[127,"15d8+60"]} fort="+9" ref="+9" will="+11" dr="10/glass or obsidian" immune={<>cold, <Link to="/umr/undead_traits">undead traits</Link></>} resist="electricity 10, fire 10" sr="21" />
<Offense id="monster-fext--offense" sp={40} spP="30 ft. in armor" melee="+1 bastard sword +20/+15/+10 (1d10+8/17-20) or slam +18 (1d4+10 plus energy drain)" eDrain="1d4 levels, DC 21" />
<SpellBlock id="monster-fext--spells-monster-spellblock-1" sla={{"cl":15,"con":"+19","content":[{"will":true,"content":<><Link to="/spell/death_knell">death knell</Link> (DC 16), <Link to="/spell/protection_from_good">protection from good</Link>, <Link to="/spell/speak_with_dead">speak with dead</Link> (DC 17)</>},{"day":3,"content":<><Link to="/spell/bestow_curse">bestow curse</Link> (DC 17)</>}]}} />
<Stats id="monster-fext--stats" atts={[25,18,0,13,15,18]} bab={11} cmb={18} cmd={33} feats={["Cleave","Dodge","Great Cleave",["Improved Critical"," (bastard sword)"],"Mobility","Power Attack","Spring Attack",["Weapon Focus"," (bastard sword)"]]} skills={{"acro":{"b":4},"dis":{"b":15},"sm":{"b":9},"stl":{"b":11}}} lang={["C","I"]} sq="unkillable" />
<Ecology id="monster-fext--eco-eco" env="any" org="solitary" treasure={{"S":[["+1","Wbs"],["Afp"],["Ahss"]],"final":"other gear"}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Unkillable (Su)</strong> When reduced to 0 hit points by anything other than a <Link to="/eq-material/glass">glass</Link> weapon or an <Link to="/eq-material/obsidian">obsidian</Link> weapon, a fext is not destroyed, but instead becomes unconscious. Additionally, 1d4 minutes after falling unconscious, a fext gains <Link to="/umr/fast_healing">fast healing</Link> 1. To be completely destroyed, a fext must be reduced to 0 hit points by a glass or obsidian weapon, or once it is rendered unconscious, its head must be severed and anointed with <Link to="/eq-weapon/holy_water">holy water</Link>. Once destroyed, a fext dissolves into fine ash.</p>
<Header sub>Description</Header>
<p>Any good general forbids mention of fexts among his ranks, but such strictures do little to prevent soldiers from whispering tales of undying officers leading enemy units.</p>
<p>These supernatural officers almost never seem to fall in battle, and when they do, they return for the next clash unfazed. Soldiers whisper that these deathless commanders are vulnerable only to glass weapons. Stories of fexts, usually dismissed as camp folktales derived from soldiers' frustration at failed campaigns and lost battles, are most frighteningly true - a truth living officers keep from the normal rank and file, for it takes a truly callous leader to send his soldiers against an unkillable foe. While these abominations often serve corrupt monarchs or power-hungry and desperate tyrants, some fexts infiltrate good armies and act as double agents, defying their nation's ideals. They use politics and miscommunication to distort the truth of their battlefield atrocities and cow those under their command into obedience.</p>
<p>Though a fext normally acts as a commander on the battlefield, when engaged in combat, it favors its martial prowess, intermingling quick strikes and deadly blows with disruptive curses and its energy drain ability.</p>
</>};
const _fiend_bred_animal_chelish_hell_bred_dog = {title: "Chelish Hell-Bred Dog (Fiend-Bred Animal)", jsx: <><p><em>This reddish-brown canine has a square, athletic build. Its dripping saliva smells of sulfur.</em></p>
<Header full><span>Chelish Hell-Bred Dog</span><span>CR 2</span></Header>
<div className="reduce">
<Info id="monster-fiend_bred_animal_chelish_hell_bred_dog--info" source={[["Pathfinder #103: The Hellfire Compact",86]]} xp="600" n medium animal init={6} llv scent pcp={4} />
<Defense id="monster-fiend_bred_animal_chelish_hell_bred_dog--defense" ac={[15,12,13]} mod="+2 Dex, +3 natural" hp={[19,"3d8+6"]} fort="+5" ref="+5" will="+1" />
<Offense id="monster-fiend_bred_animal_chelish_hell_bred_dog--offense" sp={40} melee={<>bite +4 (1d6+3 plus <Link to="/umr/trip">trip</Link>)</>} specAtt={[["sulfurous spittle","sulfurous spittle"]]} />
<Stats id="monster-fiend_bred_animal_chelish_hell_bred_dog--stats" atts={[14,15,15,2,10,6]} bab={2} cmb={4} cmd={16} cmdP="20 vs. trip" feats={["Improved Initiative",["Skill Focus"," (Survival)"]]} skills={{"acro":{"b":6,"x":"+10 when jumping"},"per":{"b":4}}} racial="+4 Acrobatics when jumping, +4 Survival when tracking by scent" sq="hot climate adaptation" />
<Ecology id="monster-fiend_bred_animal_chelish_hell_bred_dog--eco-eco" env="temperate or warm forests or plains" org="solitary, pair, or pack (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Hot Climate Adaptation (Ex)</strong> A Chelish hell-bred dog gains a +8 racial bonus on Fortitude saves to avoid nonlethal damage from very <Link to="/rule/hot_environmental_conditions">hot environmental conditions</Link>.</p>
<p><strong>Sulfurous Spittle (Ex)</strong> Once per hour as a standard action, a Chelish hell-bred dog can spray a 10-foot cone of sulfurous liquid from its mouth. Any creature caught in the cone is <Link to="/misc/nauseated">nauseated</Link> for 1 round and then <Link to="/misc/sickened">sickened</Link> for 1d4 rounds. A successful DC 13 Fortitude save negates the nauseated effect and reduces the sickened effect to 1 round. A creature cannot use the scent ability as long as the sulfurous spray affects it. The save DC is Constitution-based.</p>
<Header sub>Description</Header>
<p>Chelish hell-bred dogs are descended from <Link to="/monster/hell_hound">hell hounds</Link> and many different breeds of domestic <Link to="/monster/dog">dogs</Link>, including mastiffs, retrievers, terriers, and shepherds. They are an athletic breed with long muzzles and a strong bites. Alert, loyal, and highly trainable, they make excellent guard dogs. They're best known for their ability to spray sulfuric liquid similar to skunk musk from their mouths.</p>
<p>A Chelish hell-bred dog measures 2-1/2 feet at the withers and weighs 95 pounds. A well-trained young hellbred dog is worth 600 gp.</p>
<p><strong>Family:</strong> <Link to="/family/fiend_bred_animal">Fiend Bred Animal</Link></p>
</>};
const _fiend_bred_animal_quillcat = {title: "Quillcat (Fiend-Bred Animal)", jsx: <><p><em>Dozens of long, sharp spines line the back and tail of this dark-gray cat.</em></p>
<Header full><span>Quillcat</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-fiend_bred_animal_quillcat--info" source={[["Pathfinder #103: The Hellfire Compact",87]]} xp="400" n small animal init={2} llv scent pcp={5} />
<Defense id="monster-fiend_bred_animal_quillcat--defense" ac={[13,13,11]} mod="+2 Dex, +1 size" hp={[14,"2d8+5"]} fort="+4" ref="+5" will="+1" def={[["quill defense","quill defense"]]} />
<Offense id="monster-fiend_bred_animal_quillcat--offense" sp={40} melee="bite +3 (1d4+1), tail slap +3 (1d4+1)" pounce />
<Stats id="monster-fiend_bred_animal_quillcat--stats" atts={[12,15,13,2,12,9]} bab={1} cmb={1} cmbP="+5 grapple" cmd={13} cmdP="17 vs. trip" feats={["Toughness"]} skills={{"acro":{"b":10,"x":"+14 when jumping"},"per":{"b":5},"stl":{"b":10}}} racial="+4 Acrobatics (+8 when jumping), +4 Stealth" sq="spiny tail" />
<Ecology id="monster-fiend_bred_animal_quillcat--eco-eco" env="any forest" org="solitary" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Quill Defense (Ex)</strong> Any creature that strikes a quillcat with an unarmed strike or natural weapon takes 1 point of piercing damage. A creature that grapples a quillcat takes 1d3 points of piercing damage each round that it does so.</p>
<p><strong>Spiny Tail (Ex)</strong> A quillcat's tail slap is a primary <Link to="/umr/natural_attack">natural attack</Link> that deals piercing damage.</p>
<Header sub>Description</Header>
<p>A guard animal bred by a cult of <Link to="/faith/lamashtu">Lamashtu</Link>, the quillcat was originally a cross between a <Link to="/monster/howler">howler</Link> and a cougar. Howler-cougar hybrids were smaller than either parent, and this allowed easy hybridization with smaller, longhaired breeds of cats that increased quill length and decreased the animal's size. A healthy young quillcat is worth 175 gp.</p>
<p>The spines normally lie flat against the quillcat's body, but when the creature is scared or surprised, they stand erect on its tail and back, nearly doubling the cat's apparent size. Instead of typical feline vocalizations, quillcats communicate by howling and yapping. Quillcats hate <Link to="/monster/hell_bred_dog">hell-bred dogs</Link> and fearlessly attack the larger creatures on sight.</p>
<p>Quillcats are 3 feet long and weigh 60 pounds.</p>
<p><strong>Family:</strong> <Link to="/family/fiend_bred_animal">Fiend Bred Animal</Link></p>
</>};
const _fiend_bred_animal_stygian_hot_blooded_horse = {title: "Stygian Hot-Blooded Horse (Fiend-Bred Animal)", jsx: <><p><em>This dark horse has striking coloring and a ferocious look in its bloodshot eyes.</em></p>
<Header full><span>Stygian Hot-Blooded Horse</span><span>CR 2</span></Header>
<div className="reduce">
<Info id="monster-fiend_bred_animal_stygian_hot_blooded_horse--info" source={[["Pathfinder #103: The Hellfire Compact",86]]} xp="600" n large animal init={2} llv scent pcp={5} />
<Defense id="monster-fiend_bred_animal_stygian_hot_blooded_horse--defense" ac={[14,11,12]} mod="+2 Dex, +3 natural, -1 size" hp={[22,"3d8+9"]} fort="+6" ref="+5" will="+2" def={[["shifting trot","shifting trot"]]} />
<Offense id="monster-fiend_bred_animal_stygian_hot_blooded_horse--offense" sp={50} melee="bite +4 (1d8+3), 2 hooves -1 (1d6+1)" space={"10"} reach={"5"} />
<Stats id="monster-fiend_bred_animal_stygian_hot_blooded_horse--stats" atts={[17,14,17,2,13,10]} bab={2} cmb={6} cmd={18} cmdP="22 vs. trip" feats={["Intimidating Prowess",["Run",<sup>B</sup>],["Skill Focus"," (Stealth)"]]} skills={{"intm":{"b":4},"per":{"b":5},"stl":{"b":5}}} sq="docile, smoke resistance" />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Ecology id="monster-fiend_bred_animal_stygian_hot_blooded_horse--eco-eco" env="temperate or warm plains" org="solitary" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Docile (Ex)</strong> Unless specifically trained for combat (see the <Link to="/skill/handle_animal">Handle Animal</Link> skill), a stygian hot-blooded horse's hooves are treated as secondary attacks.</p>
<p><strong>Shifting Trot (Ex)</strong> When taking the <Link to="/rule/withdraw">withdraw</Link> action, a stygian hot-blooded horse treats the first 2 squares it leaves as not threatened by any opponent it can see.</p>
<p><strong>Smoke Resistance (Ex)</strong> Nonmagical smoke doesn't impair a stygian hot-blood's sight (creatures in smoke do not gain <Link to="/rule/concealment">concealment</Link> from it), and it gains a +4 racial bonus on Fortitude saves to avoid coughing and choking because of nonmagical smoke.</p>
<Header sub>Description</Header>
<p>According to a tale, a Keleshite summoner named al-Aziz Bedaya made a deal with Savu, a nightmare lord hailing from the banks of the River Styx. In the deal, Savu allowed two of his bodyguards to each sire a colt with mortal Keleshite mares. The resulting hybrids - one coal-black with a blood-red mane and tail, the other dark gray with a fiery-orange mane and tail - became the legendary founding specimens of the two strains of the stygian hot-blooded horses. Combat-trained stygian hot-blooded horses fetch prices of up to 1,500 gp apiece.</p>
<p>Other than their unusual coloration, stygian hotblooded horses' most distinctive characteristics are arched necks, refined heads, and high-held tails. The horses' meat has the flavor of smoked chili peppers and is considered a delicacy in many cultures, although their Keleshite breeders consider it an abomination to consume such fare. Stygian hot-blooded horses are bred to be fast, spirited war horses. Quieter and more intelligent than most <Link to="/monster/horse">horses</Link>, they're also ideal for raids that require stealth.</p>
<p>Stygian hot-blooded horses stand 5 feet tall at the shoulder and weigh approximately 1,000 pounds.</p>
<p><strong>Family:</strong> <Link to="/family/fiend_bred_animal">Fiend Bred Animal</Link></p>
</>};
const _firbolg = {title: "Firbolg", jsx: <><p><em>This burly, eight-foot-tall humanoid, dressed in a bearskin and equipped with a massive axe, has long, red hair and a bushy beard.</em></p>
<Header full><span>Firbolg</span><span>CR 4</span></Header>
<div className="reduce">
<Info id="monster-firbolg--info" source={[["Bestiary 5",116]]} xp="1,200" n large humanoid subs={["giant"]} init={5} llv pcp={8} />
<Defense id="monster-firbolg--defense" ac={[17,10,17]} mod="+2 armor, +1 Dex, +5 natural, -1 size" hp={[39,"6d8+12"]} fort="+4" ref="+5" will="+6" />
<Offense id="monster-firbolg--offense" sp={40} melee="Huge greataxe +8 (3d8+7/&times;3)" ranged="rock +5 (2d6+10)" space={"10"} reach={"10"} specAtt={[["oversized weapons","oversized weapons"]]} rockTh="120 ft." />
<SpellBlock id="monster-firbolg--spells-monster-spellblock-1" sla={{"cl":6,"con":"+8","content":[{"will":true,"content":<><Link to="/spell/reduce_person">reduce person</Link> (DC 13)</>},{"day":1,"content":<><Link to="/spell/alter_self">alter self</Link>, <Link to="/spell/confusion">confusion</Link> (DC 16), <Link to="/spell/detect_magic">detect magic</Link>, <Link to="/spell/know_direction">know direction</Link></>}]}} />
<Stats id="monster-firbolg--stats" atts={[20,13,14,15,13,14]} bab={4} cmb={10} cmd={21} feats={["Deflect Arrows","Improved Initiative","Lightning Reflexes"]} skills={{"climb":{"b":12},"k":{"n":6},"per":{"b":8}}} lang={["C","G"]} />
<Ecology id="monster-firbolg--eco-eco" env="temperate hills or forests" org="solitary, pair, gang (3-8), clan (9-16), or enclave (10-40)" treasure={{"S":[["Al"],["Wga"]],"final":"‹eq-misc/sack› with other treasure"}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Oversized Weapons (Ex)</strong> A firbolg can wield <Link to="/misc/weapon_size">weapons sized</Link> as if the firbolg were one size category larger.</p>
<Header sub>Description</Header>
<p>Although they are giants, firbolgs are crafty, cautious, and reclusive. They have learned to distrust most other humanoids except elves, and dwell only in remote places far from civilization's encroaching grasp, amidst fey and spirits of nature. They live in small, close-knit clans that tend to occupy one large, wooden house surrounded by a field kept for harvest. To supplement the food they grow, they wander the surrounding territory in small gangs hunting and gathering.</p>
<p>Unlike most giants, firbolgs do not raid indiscriminately and do not solve all their problems with force and violence. If pressed into battle, they are cunning combatants who make good use of the terrain, and generally do not kill unless provoked. While they rarely raid, firbolgs love duping smaller creatures out of their food and treasure. Alone or in small groups, they disguise themselves as hapless mountain folk, comely youths, or foreign wanderers to engage in confidence schemes and practical jokes against humanoid neighbors. Firbolgs back up their trickery with their natural magic and incredible strength. Most who encounter a firbolg are never aware of the giant's true nature.</p>
<p>In their normal form, firbolgs look like oversized humans. They wear their hair long and free, and many decorate their skin with intricate designs picked out in blue woad.</p>
<p>Most firbolgs carry their possessions with them in great sacks. Typically, a firbolg's sack contain several throwing rocks, the firbolg's personal treasure, and a selection of mundane items stolen, bartered, or otherwise acquired from those the firbolg has recently encountered.</p>
</>};
const _fire_whale = {title: "Fire Whale", jsx: <><p><em>Waves of searing heat ripple from the stony, gem-encrusted hide of this enormous whale-like beast.</em></p>
<Header full><span>Fire Whale</span><span>CR 16</span></Header>
<div className="reduce">
<Info id="monster-fire_whale--info" source={[["Bestiary 6",128]]} xp="76,800" n colossal magicalBeast subs={["extraplanar"]} init={6} dv={60} llv blindsense={60} pcp={16} />
<Defense id="monster-fire_whale--defense" ac={[31,4,29]} mod="+2 Dex, +27 natural, -8 size" hp={[250,"20d10+140"]} fort="+19" ref="+14" will="+16" def={[["flaming body","flaming body"]]} dr="15/adamantine and piercing" immune="fire, paralysis, poison, sleep" resist="cold 15" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to sonic</>]} />
<Offense id="monster-fire_whale--offense" br={20} fl={20} flP="clumsy" sw={60} melee="bite +30 (4d10+18/19-20 plus 2d6 fire), tail slap +25 (6d6+9 plus 2d6 fire)" space={"30"} reach={"30"} specAtt={[["magma spray","magma spray"]]} capsize />
<SpellBlock id="monster-fire_whale--spells-monster-spellblock-1" sla={{"cl":20,"con":"+21","content":[{"day":1,"content":<><Link to="/spell/plane_shift">plane shift</Link> (Elemental Planes or Material Plane only)</>}]}} />
<Stats id="monster-fire_whale--stats" atts={[46,14,25,6,27,13]} bab={20} cmb={46} cmbP="+48 bull rush" cmd={58} cmdP="60 vs. bull rush" feats={["Awesome Blow","Critical Focus","Diehard","Endurance","Improved Bull Rush",["Improved Critical"," (bite)"],"Improved Initiative","Iron Will","Power Attack","Staggering Critical"]} skills={{"fly":{"b":-1}}} lang={["Aq","Au","Ig","TX"]} sq={<>elemental heart, <Link to="/umr/no_breath">no breath</Link></>} />
<Ecology id="monster-fire_whale--eco-eco" env={<>any (<Link to="/rule/plane_of_fire">Plane of Fire</Link>)</>} org="solitary, pair, or pod (3-8)" treasure={{"S":[],"final":"gems only"}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Elemental Heart (Su)</strong> A fire whale is empowered by a heart of pure elemental fire, granting it several elemental-like traits. A fire whale does not need to breathe, eat, or sleep, and it is immune to paralysis, poison, and sleep effects.</p>
<p><strong>Flaming Body (Su)</strong> A fire whale's molten-hot flesh generates incredible heat. Anyone striking a fire whale with a natural weapon or unarmed strike takes 2d6 points of fire damage. A creature that <Link to="/rule/grapple">grapples</Link> a fire whale or is grappled by one takes 6d6 points of fire damage each round the grapple persists.</p>
<p><strong>Magma Spray (Ex)</strong> Once every 1d4 rounds as a standard action, a fire whale can spew a burst of magma and scalding ash from its blowhole in either a 90-foot cone or a 30-foot radius around the fire whale. This blast of magma and ash deals 9d6 points of fire damage and 9d6 points of bludgeoning damage (Reflex DC 27 half). Rubble and debris from this blast transform the terrain in the affected area into difficult terrain for 1 minute. The save DC is Constitution-based.</p>
<Header sub>Description</Header>
<p>Fire whales are titanic beasts native to the Elemental Plane of Fire, but their natural ability to traverse the planes means they are seen across all the Elemental Planes and Material Plane. They travel in great pods, singing and feeding off whatever bits of metal and mineral catch their eyes, which their inner foundries refine into a glorious array of gems. The vast bounty of wealth their bellies contain has enticed the <Link to="/monster/efreeti">efreet</Link> to hunt fire whales for untold ages, and the enormous creatures return that antagonism by aggressively attacking <Link to="/family/genie">genies</Link> of all types on sight.</p>
<p>Though most at home in the searing heat of their native plane, fire whales can survive and even flourish on other planes. On the Material Plane, fire whales splash in the molten hearts of volcanoes, skim through the clouds, or cavort through deep ocean trenches as the whim strikes them. Their inner fires boil water, protecting them from the freezing cold of the ocean depths. The heat of their bodies even melts stone, allowing them to burrow through rock after a fashion.</p>
</>};
const _fish_dunkleosteus = {title: "Dunkleosteus (Fish)", jsx: <><p><em>This gigantic, prehistoric fish has a head like a snapping turtle, complete with sharp, tooth-like plates.</em></p>
<Header full><span>Dunkleosteus</span><span>CR 6</span></Header>
<div className="reduce">
<Info id="monster-fish_dunkleosteus--info" source={[["Bestiary 6",129],["Pathfinder #56: Raiders of the Fever Sea",83]]} xp="2,400" n huge animal subs={["aquatic"]} init={6} llv pcp={15} />
<Defense id="monster-fish_dunkleosteus--defense" ac={[19,10,17]} mod="+2 Dex, +9 natural, -2 size" hp={[75,"10d8+30"]} fort="+10" ref="+9" will="+6" />
<Offense id="monster-fish_dunkleosteus--offense" sw={60} melee={<>bite +16 (3d8+15/19-20 plus <Link to="/umr/grab">grab</Link>)</>} space={"15"} reach={"15"} specAtt={[["gulp","gulp"]]} swallow="1d10 bludgeoning damage, AC 14, 7 hp" />
<Stats id="monster-fish_dunkleosteus--stats" atts={[30,14,17,1,13,6]} bab={7} cmb={19} cmbP="+23 grab" cmd={31} feats={[["Improved Critical"," (bite)"],"Improved Initiative","Iron Will",["Skill Focus"," (Perception, Swim)"],["Weapon Focus"," (bite)"]]} skills={{"per":{"b":15},"swim":{"b":30}}} racial="+4 Perception" />
<Ecology id="monster-fish_dunkleosteus--eco-eco" env="any oceans" org="solitary" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Gulp (Ex)</strong> A dunkleosteus can open its giant mouth in a fraction of a second, creating a vortex that draws a target in. When underwater, a dunkleosteus gains an additional 5 feet of reach with its bite attack and a +2 bonus on combat maneuver checks when attempting to <Link to="/rule/grapple">grapple</Link>.</p>
<Header sub>Description</Header>
<p>A dunkleosteus is a massive fish with a bony head, armor plating, and a beak-like maw capable of creating a vortex that siphons in its prey. Despite growing to over 30 feet in length and weighing 8,000 pounds, dunkleosteuses are agile swimmers. These voracious predators think nothing of swimming into estuaries where the brine of the sea extends, lying in wait under piers or in the shallows along shorelines, patiently watching for a chance to lunge up and snap their jaws around unsuspecting prey that has come to the water's edge to fish or swim.</p>
</>};
const _fish_giant_blowfish = {title: "Giant Blowfish", jsx: <><p><em>A blowfish the size of a horse drifts through the water, its quills the size of spears.</em></p>
<Header full><span>Giant Blowfish</span><span>CR 5</span></Header>
<div className="reduce">
<Info id="monster-fish_giant_blowfish--info" source={[["Pathfinder #56: Raiders of the Fever Sea",83]]} xp="1,600" n large animal subs={["aquatic"]} init={5} llv pcp={5} />
<Defense id="monster-fish_giant_blowfish--defense" ac={[18,10,17]} mod="+8 armor, +1 Dex, -1 size" hp={[52,"7d8+21"]} fort="+10" ref="+6" will="+4" def={[["quills","quills"]]} />
<Offense id="monster-fish_giant_blowfish--offense" sp={30} sw={30} melee="1 slam +9 (1d8+4 plus poison)" space={"10"} reach={"10"} />
<Stats id="monster-fish_giant_blowfish--stats" atts={[18,13,17,1,14,12]} bab={5} cmb={10} cmd={21} cmdP="can't be tripped" feats={["Great Fortitude","Improved Initiative",["Skill Focus"," (Perception)"],["Weapon Focus"," (slam)"]]} skills={{"per":{"b":5},"swim":{"b":14}}} />
<Ecology id="monster-fish_giant_blowfish--eco-eco" env="warm oceans" org="solitary, pair, or school (3-9)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Poison (Ex)</strong> Giant blowfish venom causes violent seizing of the muscles. Any non-aquatic creature affected must immediately begin making Constitution checks to <Link to="/rule/suffocation">continue holding its breath</Link>. The save DC is Constitution-based.</p>
<div className="sideNoteWrap"><ScrollContainer id="monster-fish_giant_blowfish--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Slam and quills-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 16</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d6 <Link to="/rule/dex_damage">Dex damage</Link> and prevents breath holding</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><p><strong>Quills (Ex)</strong> Any creature attacking a giant blowfish with light or one-handed melee weapons, natural weapons, or an unarmed strike takes 1d8 points of piercing damage. A creature that <Link to="/rule/grapple">grapples</Link> a giant blowfish takes 2d6 points of piercing damage each round it does so. Creatures damaged by a giant blowfish's quills must also save or be poisoned.</p>
<Header sub>Description</Header>
<p>These gigantic cousins of common blowfish, covered in poisonous spear-like quills, can reach up to 10 feet in size, and nearly double that when fully inflated.</p>
</>};
const _fish_swordfish = {title: "Swordfish", jsx: <><p><em>A proud fin flares along the spine of this large, sleek fish, its head coming to a spear-like point.</em></p>
<Header full><span>Swordfish</span><span>CR 2</span></Header>
<div className="reduce">
<Info id="monster-fish_swordfish--info" source={[["Pathfinder #56: Raiders of the Fever Sea",82]]} xp="600" n large animal subs={["aquatic"]} init={2} llv pcp={10} />
<Defense id="monster-fish_swordfish--defense" ac={[14,11,12]} mod="+3 armor, +2 Dex, -1 size" hp={[22,"4d8+4"]} fort="+5" ref="+6" will="+2" />
<Offense id="monster-fish_swordfish--offense" sw={70} melee="gore +5 (1d8+3)" space={"10"} reach={"10"} specAtt={[["piercing rush","piercing rush"]]} />
<Stats id="monster-fish_swordfish--stats" atts={[15,14,13,1,12,2]} bab={3} cmb={6} cmd={18} feats={[["Skill Focus"," (Swim)"],["Weapon Focus"," (gore)"]]} skills={{"per":{"b":10},"swim":{"b":18}}} racial="+4 Perception" />
<Ecology id="monster-fish_swordfish--eco-eco" env="any ocean" org="solitary or pair" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Piercing Rush (Ex)</strong> When a swordfish uses its gore attack after swimming at least 10 feet, including on a <Link to="/rule/charge">charge</Link>, it adds two times its strength bonus on damage rolls.</p>
<Header sub>Description</Header>
<p>Swordfish are among the fastest and most efficient predators in the sea, and can grow to lengths of almost 15 feet and weigh up to 1,500 pounds.</p>
</>};
const _fish_tiger_fish = {title: "Tiger Fish", jsx: <><p><em>Deadly, wolf like teeth fill the mouth of this brawny fish.</em></p>
<Header full><span>Tiger Fish</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-fish_tiger_fish--info" source={[["Pathfinder #56: Raiders of the Fever Sea",82]]} xp="400" n medium animal subs={["aquatic"]} init={2} llv pcp={8} />
<Defense id="monster-fish_tiger_fish--defense" ac={[13,12,11]} mod="+2 Dex, +1 natural" hp={[16,"3d8+3"]} fort="+4" ref="+5" will="+2" />
<Offense id="monster-fish_tiger_fish--offense" sw={50} melee="bite +4 (1d6+3)" specAtt={[["interlocking bite","interlocking bite"]]} />
<Stats id="monster-fish_tiger_fish--stats" atts={[15,14,13,1,12,2]} bab={2} cmb={4} cmbP="+8 grapple" cmd={16} feats={[["Skill Focus"," (Perception)"],"Skill Focus (Swim)"]} skills={{"per":{"b":8},"stl":{"b":6},"swim":{"b":17}}} />
<Ecology id="monster-fish_tiger_fish--eco-eco" env="warm rivers or swamps" org="solitary, pair, group (3-5), or school (5-20)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Interlocking Bite (Ex)</strong> A tiger fish gains a +2 bonus on all <Link to="/rule/drag">drag</Link> combat maneuvers and can initiate a drag combat maneuver whenever it scores a successful bite attack against a target. A tiger fish does not provoke attacks of opportunity when initiating a drag maneuver.</p>
<Header sub>Description</Header>
<p>Tiger fish roam tropical waterways, their long, streamlined bodies built for speed. They can grow to lengths of up to 6 feet and weigh as much as 150 pounds.</p>
</>};
const _fish_varisian_hagfish = {title: "Varisian Hagfish", jsx: <><p><em>A mouth like a lamprey's gnashes curved teeth at one end of this slimy, eel-like fish.</em></p>
<Header full><span>Varisian Hagfish</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-fish_varisian_hagfish--info" source={[["Pathfinder #56: Raiders of the Fever Sea",82]]} xp="400" n tiny animal subs={["aquatic"]} init={2} llv pcp={1} />
<Defense id="monster-fish_varisian_hagfish--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[17,"2d8+8"]} fort="+7" ref="+7" will="+1" />
<Offense id="monster-fish_varisian_hagfish--offense" sp={30} sw={30} melee="bite +4 (1d3+1)" />
<Stats id="monster-fish_varisian_hagfish--stats" atts={[12,15,18,1,12,11]} bab={1} cmb={1} cmbP="+5 grapple" cmd={12} cmdP="can't be tripped" feats={["Lightning Reflexes"]} skills={{"ea":{"b":6},"swim":{"b":14}}} racial="+4 Escape Artist" sq="slime cloud" />
<Ecology id="monster-fish_varisian_hagfish--eco-eco" env="temperate water" org="solitary, pair, or group (3-5)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Slime Cloud (Ex)</strong> While underwater, as a free action, a Varisian hagfish can secrete slime that transforms a 5-foot cube of water into a transparent cloud of viscous slime. This slime is the aquatic equivalent of <Link to="/rule/difficult_terrain">rough terrain</Link>, and creatures swimming through it expend 2 squares of movement. The slime cloud remains for 10 rounds before dissipating. Hagfish are unaffected by these slime clouds. The slime also grants the hagfish a +4 bonus on <Link to="/rule/grapple">grapple</Link> checks.</p>
<Header sub>Description</Header>
<p>These cousins to normal hagfish most commonly appear in the Varisian Gulf. They can reach lengths of 4 feet and weigh up to 15 pounds.</p>
</>};
const _flail_snail = {title: "Flail Snail", jsx: <><p><em>This enormous snail has a brightly colored shell and four tentacles on its head, each tipped with a mace-like club.</em></p>
<Header full><span>Flail Snail</span><span>CR 4</span></Header>
<div className="reduce">
<Info id="monster-flail_snail--info" source={[["Bestiary 3",118],["Misfit Monsters Redeemed",33]]} xp="1,200" n large magicalBeast init={-1} dv={60} llv scent blindsense={30} tremorsense={60} pcp={5} />
<Defense id="monster-flail_snail--defense" ac={[18,8,18]} mod="-1 Dex, +10 natural, -1 size" hp={[30,"4d10+8"]} fort="+6" ref="+3" will="+2" def={[["retraction","retraction"],["warp magic","warp magic"]]} immune="poison" resist="fire 10" />
<Offense id="monster-flail_snail--offense" sp={10} cl={10} melee="4 slams +7 (1d4+3)" space={"10"} reach={"10"} />
<Stats id="monster-flail_snail--stats" atts={[16,8,14,5,12,8]} bab={4} cmb={8} cmd={17} cmdP="can't be tripped" feats={["Power Attack",["Weapon Focus"," (slam)"]]} skills={{"climb":{"b":15},"per":{"b":5},"stl":{"b":0}}} lang={[["Flail Snail (sign language, slime writing, can't speak)"]]} sq="mucus, slime rope, suction" />
<Ecology id="monster-flail_snail--eco-eco" env="underground" org="solitary, pair, or rout (3-30)" treasure={{"S":[],"final":"shell worth 800 gp, other treasure"}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Mucus (Ex)</strong> As a free action, a flail snail can excrete a trail of mucus that covers its space and lasts for 10 minutes. This mucus comes in two types: slimy and sticky. A character who attempts to move through an area covered in slippery mucus must make a DC 14 Reflex save each round or fall prone. Sticky mucus transforms squares into difficult terrain. Only one type of mucus can be in effect at a time in any one square. Flail snails can move through either type of slime with ease. A square of mucus exposed to a fire source dries and reverts to normal. The save DC is Constitution-based.</p>
<p><strong>Retraction (Ex)</strong> A flail snail can pull its fleshy parts into its shell as a swift action, increasing its natural armor bonus by +6, but it cannot move or attack while retracted. It can return to normal as a free action.</p>
<p><strong>Slime Rope (Ex)</strong> A flail snail can turn its mucus into a rope-like strand up to 60 feet long, and can use this rope to hang itself and up to 1,000 extra pounds from the ceiling indefinitely, or to lower itself safely at a speed of 20 feet per round. It can climb back up this rope at a speed of 10 feet per round. Once the snail breaks contact with the rope, the slime decomposes in 1d4 rounds. While the slime rope exists, other creatures can climb the rope with a DC 20 Climb check.</p>
<p><strong>Suction (Ex)</strong> A flail snail's foot adheres to surfaces so well that its 10-foot climb speed applies even to perfectly sheer surfaces and ceilings, with no chance of the flail snail falling off unless it is actively pinned and peeled away as part of a grapple.</p>
<p><strong>Warp Magic (Su)</strong> Anytime a spell targets a flail snail, there is an 80% chance that it produces a random effect instead of affecting the snail. Only spells that directly target the flail snail are warped; area effect spells are not affected. If a spell is warped, roll 1d10 and consult the following table.</p>
<ScrollContainer id="monster-flail_snail--table-0"><table>
<thead>
<tr>
<th>d10</th>
<th>Warp Effect</th>
</tr>
</thead>
<tbody><tr>
<td>1-3</td>
<td>Spell misfires. For the next 1d4 rounds, the caster must make a DC 15 <Link to="/rule/concentration">concentration</Link> check to successfully cast spells.</td>
</tr>
<tr>
<td>4-6</td>
<td>Spell misfires. The creature nearest the flail snail is affected as if the spell had been cast on it instead.</td>
</tr>
<tr>
<td>7-9</td>
<td>Spell fails. Nothing happens.</td>
</tr>
<tr>
<td>10</td>
<td>Spell rebounds on caster (as <Link to="/spell/spell_turning">spell turning</Link>).</td>
</tr>
</tbody></table></ScrollContainer>
<Header sub>Description</Header>
<p>Flail snails are intelligent gastropods that subsist on fungus, mold, and vermin, though they may attack larger creatures in self-defense. Known for their magic-warping shells and club-like tentacles, flail snails roam slowly through subterranean caverns writing great epics in their slime trails.</p>
</>};
const _flea_giant_flea = {title: "Giant Flea", jsx: <><p><em>A hideous, dog-sized flea leaps about on long, gangly legs. The sharp, jagged edges of its jaws greedily clatter for blood.</em></p>
<Header full><span>Giant Flea</span><span>CR 1/2</span></Header>
<div className="reduce">
<Info id="monster-flea_giant_flea--info" source={[["Bestiary 4",99]]} xp="200" n small vermin init={2} dv={60} pcp={0} />
<Defense id="monster-flea_giant_flea--defense" ac={[13,13,11]} mod="+2 Dex, +1 size" hp={[5,"1d8+1"]} fort="+3" ref="+2" will="+0" dr="5/slashing" immune="disease, mind-affecting effects" />
<Offense id="monster-flea_giant_flea--offense" sp={30} melee="bite +2 (1d4+1 plus disease)" specAtt={[["disease","disease"]]} />
<Stats id="monster-flea_giant_flea--stats" atts={[12,15,13,0,11,6]} bab={0} cmb={0} cmd={12} skills={{"acro":{"b":0,"x":"+20 when jumping"}}} racial="+20 Acrobatics when jumping" sq="uncanny leap" />
<Ecology id="monster-flea_giant_flea--eco-eco" env="any land or underground" org="solitary, cluster (2-6), or colony (7-12)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Disease (Ex)</strong></p>
<div className="sideNoteWrap"><ScrollContainer id="monster-flea_giant_flea--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/diseases"><IonIcon aria-label="Disease" icon="/icons/paramecia.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Bite-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 11</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>1d3 days</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/day</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/con_damage">Con damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr><tr><td colSpan={4} className="extra">The save DC is Constitution-based.</td></tr></tbody></table></ScrollContainer></div><p><strong>Uncanny Leap (Ex)</strong> As a full-round action, a giant flea can jump up to 120 feet. A flea can treat this jump as a <Link to="/rule/charge">charge</Link>, as long as the leap is made in a straight line.</p>
<Header sub>Description</Header>
<p>Much like their smaller cousins, giant fleas are hemophagous insects that live in any kind of environment where they can feed upon blood. These creatures possess surprising agility and strength. Able to leap great distances, they flit about mindlessly, looking for easy prey. A giant flea can go for several months without feeding, but then gorges after such a fast.</p>
<p>A <Link to="/class/witch">witch</Link> can take a giant flea as a familiar. Like all vermin, a giant flea gains 1 point of Intelligence when it becomes a familiar. A giant flea familiar grants its master a +3 bonus on Fortitude saves against disease.</p>
</>};
const _flea_mammoth_flea = {title: "Mammoth Flea", jsx: <><p><em>This mammoth flea is size of a horse. Its legs dangle awkwardly from its great, swollen body armored entirely in disfigured plates.</em></p>
<Header full><span>Mammoth Flea</span><span>CR 2</span></Header>
<div className="reduce">
<Info id="monster-flea_mammoth_flea--info" source={[["Bestiary 4",99]]} xp="600" n large vermin init={3} dv={60} pcp={0} />
<Defense id="monster-flea_mammoth_flea--defense" ac={[13,13,9]} mod="+3 Dex, +1 dodge, -1 size" hp={[22,"4d8+4"]} fort="+5" ref="+4" will="+1" dr="5/slashing" immune="disease, mind-affecting effects" />
<Offense id="monster-flea_mammoth_flea--offense" sp={30} melee="bite +4 (1d8+3 plus blood drain and disease)" space={"10"} reach={"10"} specAtt={[["disease","disease"]]} bDrain="1d2 Con" />
<Stats id="monster-flea_mammoth_flea--stats" atts={[13,17,13,0,11,6]} bab={3} cmb={6} cmd={19} feats={[["Dodge",<sup>B</sup>]]} skills={{"acro":{"b":0,"x":"+20 when jumping"}}} racial="+20 Acrobatics when jumping" sq={<>uncanny leap (see <Link to="/monster/giant_flea">giant flea</Link>)</>} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Ecology id="monster-flea_mammoth_flea--eco-eco" env="temperate forests, hills, mountains, or plains" org="solitary, pair, or cluster (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Disease (Ex)</strong></p>
<div className="sideNoteWrap"><ScrollContainer id="monster-flea_mammoth_flea--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/diseases"><IonIcon aria-label="Disease" icon="/icons/paramecia.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Bite-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 13</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>1d3 days</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1 day</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/con_damage">Con damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>2 consecutive saves</td></tr><tr><td colSpan={4} className="extra">The save DC is Constitution-based.</td></tr></tbody></table></ScrollContainer></div><Header sub>Description</Header>
<p>Mammoth fleas are fierce predators. They require vast amounts of blood to survive, though once full, they can survive for months before needing to feed again. For this reason, they seek larger prey like cows and horses, and plague agrarian communities that raise herd animals. A mammoth flea's bite is excruciatingly painful, and leaves behind a raised, ring-shaped scar.</p>
</>};
const _fleshdreg = {title: "Fleshdreg", jsx: <><p><em>Composed of half-formed body parts, this creature stands on two bizarre legs. Its mouth is full of jagged teeth and a slavering tongue.</em></p>
<Header full><span>Fleshdreg</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-fleshdreg--info" source={[["Bestiary 4",100],["Pathfinder #61: Shards of Sin",82]]} xp="400" ne small aberration init={1} sen={["sin-scent"]} dv={60} pcp={4} />
<Defense id="monster-fleshdreg--defense" ac={[14,12,13]} mod="+1 Dex, +2 natural, +1 size" hp={[13,"2d8+4"]} fort="+2" ref="+3" will="+3" immune="mind-affecting effects" sr="12" />
<Offense id="monster-fleshdreg--offense" sp={30} melee="bite +3 (1d6+1 plus sinful bite)" />
<Stats id="monster-fleshdreg--stats" atts={[12,13,15,6,11,12]} bab={1} cmb={1} cmd={12} feats={["Lightning Reflexes"]} skills={{"acro":{"b":5},"ea":{"b":5},"per":{"b":4},"stl":{"b":9}}} lang={["Ak"]} />
<Ecology id="monster-fleshdreg--eco-eco" env="any ruins" org="solitary, pair, or batch (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Sinful Bite (Su)</strong> Each fleshdreg possesses an additional attack depending on its sin type. The save DCs are Charisma-based.</p>
<ul>
<li><strong>Envy:</strong> An envy fleshdreg's bite attack can temporarily interfere with magic. If an envy fleshdreg deals damage with its bite attack to any creature under a magic effect, the fleshdreg attempts a <Link to="/spell/dispel">dispel</Link> check as if it were caster level 3rd against the spell effect with the highest caster level. If the dispel check is successful, the effect is suppressed for 1d4 rounds.</li>
<li><strong>Gluttony:</strong> A gluttony fleshdreg's bite attack can wither and weaken the body of the creature it attacks. Any creature that takes damage from a gluttony fleshdreg's bite attack must succeed at a DC 12 Fortitude save or become <Link to="/misc/fatigued">fatigued</Link>. Subsequent uses of this ability do not cause a bitten creature to become exhausted.</li>
<li><strong>Greed:</strong> A greed fleshdreg's bite can twist and warp the body of a creature it attacks. Any creature that takes damage from a greed fleshdreg's bite attack must succeed at a DC 12 Fortitude save or have its speed reduced by half and take a -2 penalty to Strength and Dexterity for 1d6 rounds.</li>
<li><strong>Lust:</strong> A lust fleshdreg's bite can addle the mind of the creature it attacks. Any creature that takes damage from a lust fleshdreg's bite attack must succeed at a DC 12 Will save or become <Link to="/misc/confused">confused</Link> for 1 round.</li>
<li><strong>Pride:</strong> A pride fleshdreg's bite floods the senses of the creature it attacks. Any creature that takes damage from a pride fleshdreg's bite attack must succeed at a DC 12 Will save or be <Link to="/misc/blinded">blinded</Link> for 1 round and <Link to="/misc/dazzled">dazzled</Link> for the next 1d4 rounds.</li>
<li><strong>Sloth:</strong> A sloth fleshdreg's bite conjures an amber crust that covers the target and restricts the target's movements. Any creature that takes damage from a sloth fleshdreg's bite attack must succeed at a DC 12 Reflex save or take a -2 penalty on attack rolls and Reflex saves for 1d4 rounds.</li>
<li><strong>Wrath:</strong> A wrath fleshdreg's bite delivers energy damage to creatures it attacks. Any creature that takes damage from a wrath fleshdreg's bite attack takes an additional 1d4 points of energy damage (fleshdreg's choice).</li>
</ul>
<p><strong>Sin-Scent (Su)</strong> Fleshdregs have <Link to="/umr/scent">scent</Link> against creatures whose nature reflects the fleshdreg's related sin. For example, a wrathful fleshdreg can scent creatures using rage effects. The GM should adjudicate what creatures a particular fleshdreg can scent.</p>
<Header sub>Description</Header>
<p>Fleshdregs are misshapen lumps of tissue, appendages, and biting mouths. These incomplete <Link to="/monster/sinspawn">sinspawn</Link> are practically immortal, require little food to sustain their unnatural physiology, and don't seem to mature past the point of creation. Fleshdregs follow true sinspawn around like pets or curious children. Sinspawn use these weaker creatures as slaves, troops, and hunting companions. Despite this treatment, fleshdregs still seek out the company of their larger, more advanced cousins.</p>
<p>Fleshdregs vary in appearance from one another depending on factors such as the sins that powered their creation. Wrathful fleshdregs develop a more predatory form than lustful fleshdregs do, and slothful fleshdregs are little more than bloated piles of flesh atop stubby legs. Most fleshdregs stand between 3 and 4 feet tall, and weigh about 60 pounds. Greed fleshdregs are the tallest of their kind, and sloth fleshdregs the heaviest.</p>
</>};
const _fleshdreg_swarm = {title: "Fleshdreg Swarm", jsx: <><p><em>Hundreds of wads of squirming flesh with flailing appendages move together in a cluster of teeth and claws.</em></p>
<Header full><span>Fleshdreg Swarm</span><span>CR 2</span></Header>
<div className="reduce">
<Info id="monster-fleshdreg_swarm--info" source={[["Pathfinder #61: Shards of Sin",83]]} xp="600" ne tiny aberration subs={["swarm"]} init={5} sen={["sin-scent"]} dv={60} pcp={5} />
<Defense id="monster-fleshdreg_swarm--defense" ac={[15,13,14]} mod="+1 Dex, +2 natural, +2 size" hp={[19,"3d8+6"]} fort="+3" ref="+4" will="+3" def={[["swarm traits","swarm traits"]]} immune="mind-affecting effects" sr="13" />
<Offense id="monster-fleshdreg_swarm--offense" sp={30} cl={10} melee="swarm (1d6 plus distraction)" space={"10"} reach={"0"} distraction={13} />
<Stats id="monster-fleshdreg_swarm--stats" atts={[2,13,15,2,11,2]} bab={2} cmb={null} cmd={null} feats={["Improved Initiative","Lightning Reflexes"]} skills={{"per":{"b":5},"stl":{"b":13}}} sq="arcane bite" />
<Ecology id="monster-fleshdreg_swarm--eco-eco" env="any ruins" org="solitary, pair, or infestation (3-5)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Arcane Bite (Su)</strong> A fleshdreg swarm's swarm damage is considered magical for the purposes of overcoming damage reduction.</p>
<p><strong>Sin-Scent (Su)</strong> Fleshdreg swarms have <Link to="/umr/scent">scent</Link> against creatures whose nature reflects the fleshdreg swarm's related sin. For example, a wrathful fleshdreg swarm can scent creatures using rage effects. The GM should adjudicate what creatures a particular fleshdreg swarm can scent.</p>
<Header sub>Description</Header>
<p><Link to="/monster/fleshdreg">Fleshdreg</Link> swarms form from scraps and leftovers of malformed fleshdregs and incomplete <Link to="/monster/sinspawn">sinspawn</Link>. These foul, misshapen creatures pour out of runewells by the hundreds, seeking sinful flesh to destroy. Little more than pests, these swarms attack indiscriminately. Some malfunctioning runewells and other fleshvats produce nothing more these days than swarm upon swarm of these pests.</p>
</>};
const _fluxwraith = {title: "Fluxwraith", jsx: <><p><em>This hovering, translucent humanoid appears to sleep serenely, even as shards of flickering energy encircle it, each fragment reflecting younger or older versions of itself.</em></p>
<Header full><span>Fluxwraith</span><span>CR 17</span></Header>
<div className="reduce">
<Info id="monster-fluxwraith--info" source={[["Pathfinder #126: Beyond the Veiled Past",86]]} xp="102,400" ne medium undead subs={["incorporeal"]} init={13} dv={60} lifesense pcp={37} aura={"slow aura (30 ft.)"} />
<Defense id="monster-fluxwraith--defense" ac={[26,26,16]} mod="+6 deflection, +9 Dex, +1 dodge" hp={[273,"26d8+156"]} fort="+14" ref="+17" will="+20" chanRes="+4" incorp immune={<Link to="/umr/undead_traits">undead traits</Link>} />
<Offense id="monster-fluxwraith--offense" fl={60} flP="perfect" melee="incorporeal touch +28 (15d6 plus time shift)" specAtt={[["temporal madness","temporal madness"],["time shift","time shift"]]} />
<SpellBlock id="monster-fluxwraith--spells-monster-spellblock-1" sla={{"cl":20,"con":"+26","content":[{"will":true,"content":<><Link to="/spell/arcane_sight">arcane sight</Link>, <Link to="/spell/deja_vu">deja vu</Link>, <Link to="/spell/haste">haste</Link></>},{"day":3,"content":<><Link to="/feat/quickened">quickened</Link> <em>deja vu</em>, <Link to="/spell/hold_monster">hold monster</Link> (DC 21), <Link to="/spell/mirror_image">mirror image</Link>, <Link to="/spell/temporal_stasis">temporal stasis</Link> (DC 24)</>},{"day":1,"content":<><Link to="/spell/time_stop">time stop</Link> (DC 25)</>}]}} />
<Stats id="monster-fluxwraith--stats" atts={[0,28,0,18,20,23]} bab={19} cmb={28} cmd={45} feats={[["Ability Focus"," (time shift)"],"Alertness","Combat Casting","Combat Expertise","Combat Reflexes","Dodge","Flyby Attack","Hover","Improved Initiative","Lunge","Mobility",["Quicken Spell-Like Ability"," (deja vu)"],"Stand Still"]} skills={{"acro":{"b":25},"diplo":{"b":25},"sm":{"b":37},"spc":{"b":23},"stl":{"b":20}}} lang={["AO","Az","C","Cy","Th"]} />
<Ecology id="monster-fluxwraith--eco-eco" env="any" org="solitary or cluster (2-4)" treasure={{"S":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Slow Aura (Su)</strong> Fluxwraiths constantly emit a 30-foot-radius aura of temporal distortion. Any creature within this aura is affected as if by <Link to="/spell/slow">slow</Link>, but it gets no saving throw. If a creature exits the radius, the effect ceases at the end of its turn. If the fluxwraith moves more than 30 feet away from an affected creature, the effect ends immediately for that creature. Creatures affected by <Link to="/spell/freedom">freedom</Link>, <Link to="/spell/freedom_of_movement">freedom of movement</Link>, or <em>haste</em> are unaffected by the slow aura.</p>
<p><strong>Temporal Madness (Su)</strong> As a ranged touch attack with a range increment of 30 feet, a fluxwraith can grant a target a mind-shattering glimpse of its own existence as it appears to a time-displaced entity. The attack deals 1d6 points of Wisdom drain, although this drain is reduced to 1 point if the target succeeds at a DC 29 Will saving throw. This is a mind-affecting effect. The save DC is Charisma-based.</p>
<p><strong>Time Shift (Su)</strong> A creature struck by the fluxwraith's touch attack must succeed at a DC 31 Will saving throw or be thrust forward in time, vanishing and then, 1d4 rounds later, reappearing in the same location. If the space has become occupied by an object or another creature, the affected creature is shunted to a random adjacent space, taking 6d6 points of damage. From the creature's perspective, the time shift is instantaneous. Any duration effects active upon the creature become suspended during the time shift, resuming when the creature reappears. Creatures that succeed at their saving throws cannot be affected by the same fluxwraith's time shift ability for 24 hours. The save DC is Charisma-based.</p>
<Header sub>Description</Header>
<p>A fluxwraith is an incorporeal undead with a host of extraordinary powers owing to its singular status as a time-displaced entity. Its serene appearance and dreamlike demeanor harken to its origins, for in life it slept away the centuries in a state of magical or technological stasis. Now, whether by accident or malign intent, the fluxwraith's soul lies scattered across the timestream. Demented by its paradoxical consciousness, it yearns to destroy any living being audacious enough to exist within a single point of time.</p>
<p>Because its appearance depends upon its state when it first entered suspended animation, viewers may sometimes be able to deduce clues about its former life, as well as its motivations for entering hibernation. Some seek interminable sleep while they are in the prime of life, aiming to awaken and embrace immortality as a perfect specimen, while others hope to defer a terminal diagnosis. However, the sleeper's motivations in life seldom define a fluxwraith's outlook, as the process of becoming undead erases all but the most deeply ingrained mortal traits.</p>
<p>The first hint of the fluxwraith's destructive nature manifests in the caul of energy that winks on and off around it. This ever-shifting network of temporal energy contains fragments of its consciousness, appearing as flickering aspects of itself as a youth, an adult, or a corpse. Scrutinizing these vignettes may provide further clues about the fluxwraith's former existence, although any creature that enters the fluxwraith's aura, or any creature affected by its attacks, may begin to see its own reflections appear within the shards as well. These disturbing images depict a creature not as it is, but as the fluxwraith perceives it in the past or future.</p>
<p>Fluxwraiths tend to speak ancient or dead languages, often murmuring incomplete or garbled statements that blend past and future tenses in unsettling ways.</p>
<p>While some sages seek to cheat mortality through necromancy, others use potent temporal magic or even cryogenic technology to survive the eons, aspiring to awaken in a future when death has been rendered obsolete. Yet temporal stasis carries many risks, and any damage to the sleeper's pod may kill its inhabitant, or worse. Some types of malfunctions kill the sleeper's physical body but scatter its awareness across the timestream, causing its consciousness to exist in every moment at once. This process shreds the sleeper's sanity but imbues its spirit with terrifying temporal powers, resulting in a fluxwraith.</p>
<p>The malfunction also causes most fluxwraiths to lose the skills and abilities they had in life. They do retain a sharp intellect, although they see the world through a distorted lens of madness, malice, and heightened temporal awareness. A fluxwraith perceives living creatures as knotted threads of time-bound energy begging to be untied and twisted into more pleasing patterns, and it revels in its capacity to shift victims through time or even freeze them for eternity.</p>
<p>Occasionally, a demented spellcaster may purposely create a fluxwraith seeking to harness temporal power for her own use. In such cases, the sleeper is usually tricked into entering its slumber with promises of immortality, after which its malice and fury are only increased by the betrayal. A fluxwraith does not remain subservient to any master, and it invariably overpowers its creator.</p>
<Header sub>Habitat</Header>
<p>Though no one knows why, fluxwraiths rarely drift far from the damaged sleeping chambers that spawned them. Some might harbor an unconscious hope that their pods might be repaired, enabling them to return to a more peaceful time-bound sleep; others might simply feel no need for physical movement, since their minds now roam unfettered through the timestream.</p>
<p>A fluxwraith may prefer solitude, attacking intruders on sight. Others relish the chance to toy with visitors before severing them from the timestream. An ambitious fluxwraith might employ underlings to kidnap living beings, providing it with a steady stream of organic "puzzles" to unravel. Occasionally, a system-wide malfunction results in the creation of several fluxwraiths at once. These clusters become monomaniacal, plotting to spread their influence far beyond their lair. Using tantalizing glimpses of the future, they entice evil mortals or lesser undead to scour the world for time-based artifacts in order to vastly boost the range of their innate abilities.</p>
</>};
export default {faceless_hulk_ugoroth:_faceless_hulk_ugoroth,faceless_stalker:_faceless_stalker,faceless_whale:_faceless_whale,faerie_mount:_faerie_mount,fallen:_fallen,familiar_archaeopteryx:_familiar_archaeopteryx,familiar_arctic_hare:_familiar_arctic_hare,familiar_arctic_tern:_familiar_arctic_tern,familiar_armadillo:_familiar_armadillo,familiar_bat:_familiar_bat,familiar_blue_ringed_octopus:_familiar_blue_ringed_octopus,familiar_butterfly_moth:_familiar_butterfly_moth,familiar_cat:_familiar_cat,familiar_chicken:_familiar_chicken,familiar_cockroach:_familiar_cockroach,familiar_creeper_ivy:_familiar_creeper_ivy,familiar_dodo:_familiar_dodo,familiar_donkey_rat:_familiar_donkey_rat,familiar_dwarf_caiman:_familiar_dwarf_caiman,familiar_dweomer_cap:_familiar_dweomer_cap,familiar_fire_salamander:_familiar_fire_salamander,familiar_flowering_lattice:_familiar_flowering_lattice,familiar_flying_fox:_familiar_flying_fox,familiar_flying_squirrel:_familiar_flying_squirrel,familiar_fox:_familiar_fox,familiar_giant_isopod:_familiar_giant_isopod,familiar_giant_tardigrade:_familiar_giant_tardigrade,familiar_goat:_familiar_goat,familiar_hawk:_familiar_hawk,familiar_hedgehog:_familiar_hedgehog,familiar_horned_lizard:_familiar_horned_lizard,familiar_house_centipede:_familiar_house_centipede,familiar_ioun_wyrd:_familiar_ioun_wyrd,familiar_jerboa:_familiar_jerboa,familiar_kakapo:_familiar_kakapo,familiar_king_crab:_familiar_king_crab,familiar_koala:_familiar_koala,familiar_lamprey:_familiar_lamprey,familiar_lemming:_familiar_lemming,familiar_leopard_slug:_familiar_leopard_slug,familiar_lizard:_familiar_lizard,familiar_margay_cat:_familiar_margay_cat,familiar_meerkat:_familiar_meerkat,familiar_mole_uw:_familiar_mole_uw,familiar_mole_ff:_familiar_mole_ff,mole:_mole,familiar_monkey:_familiar_monkey,familiar_otter:_familiar_otter,familiar_owl:_familiar_owl,familiar_peafowl:_familiar_peafowl,familiar_penguin:_familiar_penguin,familiar_petrifern:_familiar_petrifern,familiar_pig:_familiar_pig,familiar_platypus:_familiar_platypus,familiar_popoto_dolphin:_familiar_popoto_dolphin,familiar_ptarmigan:_familiar_ptarmigan,familiar_pufferfish:_familiar_pufferfish,familiar_puffin:_familiar_puffin,familiar_rabbit:_familiar_rabbit,familiar_raccoon:_familiar_raccoon,familiar_rat:_familiar_rat,familiar_raven:_familiar_raven,familiar_ravenous_tumbleweed:_familiar_ravenous_tumbleweed,familiar_razor_fern:_familiar_razor_fern,familiar_red_panda:_familiar_red_panda,familiar_rhamphorhynchus:_familiar_rhamphorhynchus,familiar_sawleg_locust:_familiar_sawleg_locust,familiar_seal:_familiar_seal,familiar_shimmerwing_dragonfly:_familiar_shimmerwing_dragonfly,familiar_sloth:_familiar_sloth,familiar_spiny_starfish:_familiar_spiny_starfish,familiar_squirrel:_familiar_squirrel,familiar_suture_vine:_familiar_suture_vine,familiar_tarsier:_familiar_tarsier,familiar_thrush:_familiar_thrush,familiar_toad:_familiar_toad,familiar_trilobite:_familiar_trilobite,familiar_tuatara:_familiar_tuatara,familiar_vampire_squid:_familiar_vampire_squid,familiar_viper:_familiar_viper,familiar_wallaby:_familiar_wallaby,familiar_weasel:_familiar_weasel,fantionette:_fantionette,fastachee:_fastachee,faun:_faun,fear_eater:_fear_eater,feargaunt:_feargaunt,feeder_in_the_depths:_feeder_in_the_depths,fellsig:_fellsig,fen_mauler:_fen_mauler,feranth:_feranth,festering_spirit:_festering_spirit,festrog:_festrog,fetchling:_fetchling,fext:_fext,fiend_bred_animal_chelish_hell_bred_dog:_fiend_bred_animal_chelish_hell_bred_dog,fiend_bred_animal_quillcat:_fiend_bred_animal_quillcat,fiend_bred_animal_stygian_hot_blooded_horse:_fiend_bred_animal_stygian_hot_blooded_horse,firbolg:_firbolg,fire_whale:_fire_whale,fish_dunkleosteus:_fish_dunkleosteus,fish_giant_blowfish:_fish_giant_blowfish,fish_swordfish:_fish_swordfish,fish_tiger_fish:_fish_tiger_fish,fish_varisian_hagfish:_fish_varisian_hagfish,flail_snail:_flail_snail,flea_giant_flea:_flea_giant_flea,flea_mammoth_flea:_flea_mammoth_flea,fleshdreg:_fleshdreg,fleshdreg_swarm:_fleshdreg_swarm,fluxwraith:_fluxwraith}