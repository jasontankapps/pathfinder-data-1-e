import Header from '../../components/Header';
import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import Defense from '../../components/monsters/Defense';
import Info from '../../components/monsters/Info';
import Offense from '../../components/monsters/Offense';
import SpellBlock from '../../components/monsters/SpellBlock';
import Stats from '../../components/monsters/Stats';
import Ecology from '../../components/monsters/Ecology';
const _dweomercat = {title: "Dweomercat", jsx: <><Header full><span>Dweomercat</span><span>CR 7</span></Header>
<div className="reduce">
<Info id="monster-dweomercat--info" source={[["Pathfinder #36: Sound of a Thousand Screams",82]]} xp="3,200" cn medium magicalBeast init={10} dv={60} scent pcp={16} />
<Defense id="monster-dweomercat--defense" ac={[23,17,16]} mod="+6 Dex, +1 dodge, +6 natural" hp={[85,"10d10+30"]} fort="+10" ref="+13" will="+6" dr="5/magic" sr="19" />
<Offense id="monster-dweomercat--offense" sp={40} melee="2 claws +16 (1d4+2), bite +16 (1d6+2)" specAtt={[["dweomer leap","dweomer leap"]]} pounce rake="2 claws +11, 1d4+2" />
<SpellBlock id="monster-dweomercat--spells-monster-spellblock-1" sla={{"cl":10,"content":[{"constant":true,"content":<Link to="/spell/detect_magic">detect magic</Link>},{"will":true,"content":<><Link to="/spell/lesser_globe_of_invulnerability">lesser globe of invulnerability</Link>, <Link to="/spell/dispel_magic">dispel magic</Link></>},{"day":3,"content":<><Link to="/spell/dimension_door">dimension door</Link> (self only), <Link to="/spell/antimagic_field">antimagic field</Link></>}]}} />
<Stats id="monster-dweomercat--stats" atts={[15,23,16,13,16,16]} bab={10} cmb={12} cmd={29} cmdP="33 vs. trip" feats={["Dodge","Improved Initiative","Mobility","Spring Attack","Weapon Finesse"]} skills={{"climb":{"b":6},"k":{"a":11},"per":{"b":16},"stl":{"b":19}}} racial="+4 Climb" lang={["C","S"]} sq="spell link" />
<Ecology id="monster-dweomercat--eco-eco" env="any forest (First World)" org={<>solitary, hunt (2-3), ambush (1-3 dweomercats and 2-12 <Link to="/monster/dweomercat_cub">dweomercat cubs</Link>)</>} treasure={{"S":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Dweomer Leap (Su)</strong> When a dweomercat is targeted by a spell or within the area of effect of a spell, it can, as a swift action, choose to teleport to a square adjacent to the spell's caster, effectively appearing mid-leap and aimed toward the caster. This ability takes effect regardless of whether or not the spell overcomes the dweomercat's spell resistance. If it chooses, the dweomercat can immediately make a full attack against the spell's caster as though pouncing. Using this ability does not provoke an attack of opportunity. If there is no safe space adjacent to the caster - or if the dweomercat chooses - the dweomercat can forgo using this ability.</p>
<p><strong>Spell Link (Su)</strong> When a dweomercat is targeted by a spell or within the area of effect of a spell, it can, as a swift action, forgo its dweomer leap ability to gain an effect related to the school of the spell targeting it. This effect activates before the dweomercat is affected by the spell targeting it and regardless of whether or not the spell overcomes its spell resistance. Each power lasts for 1 minute per level of the spell targeting the dweomercat, until the dweomercat uses this ability again, or until the dweomercat chooses to dismiss the effect as a free action, whichever duration is shortest. This ability does not prevent the spell affecting the dweomercat from taking effect; it only provides an additional benefit.</p>
<ul>
<li><strong>Abjuration:</strong> Gains acid, cold, fire, electricity, or sonic resistance equal to 2 per spell level.</li>
<li><strong>Conjuration:</strong> Gains a deflection bonus to AC equal to +1 for every 5 levels of the spell.</li>
<li><strong>Divination:</strong> Gains the effects of <Link to="/spell/detect_chaos_evil_good_law">detect chaos, evil, good, or law</Link>.</li>
<li><strong>Enchantment:</strong> Grants the effects of the spell <Link to="/spell/heroism">heroism</Link>.</li>
<li><strong>Evocation:</strong> Inflicts an amount of damage equal to the spell's level upon the spell's caster.</li>
<li><strong>Illusion:</strong> Grants the effects of <Link to="/spell/invisibility">invisibility</Link>. This effect ends as per the spell.</li>
<li><strong>Necromancy:</strong> Gains the effects of <Link to="/spell/false_life">false life</Link>, as if cast by the opposing spell's caster.</li>
<li><strong>Transmutation:</strong> Gains an enhancement bonus on its natural weapons equal to +1 for every 5 levels of the spell.</li>
</ul>
<Header sub>Description</Header>
<p>Powerful and regal, dweomercats stalk the First World, preying upon lesser creatures, but more voraciously hunting new and ever stranger sources of magic. Beings as much composed of sculpted arcane eddies as of flesh and blood, these capricious felines flourish along the intangible ley lines of their home realm, drinking in its weird powers as a plant thrives on light. Yet even more potent than their thirst for magic and the euphoria they draw from being in proximity to the reshaping of reality is dweomercats' racial curiosity, which leads them endlessly across the First World - and often beyond.</p>
<p>The average adult dweomercat is about 4 feet tall and 7 feet long, weighing over 250 pounds, while their cubs are approximately 1 foot tall and weigh no more than 15 pounds.</p>
</>};
const _dweomercat_dweomercat_cub = {title: "Dweomercat Cub", jsx: <><p><em>Its coat shining vividly, this majestic tiger looks exotic and otherworldly. It gazes with piercing yellow eyes and stands calmly, as though fearless.</em></p>
<Header full><span>Dweomercat Cub</span><span>CR 2</span></Header>
<div className="reduce">
<Info id="monster-dweomercat_dweomercat_cub--info" source={[["Pathfinder #36: Sound of a Thousand Screams",82]]} xp="600" cn tiny magicalBeast init={2} dv={60} scent pcp={5} />
<Defense id="monster-dweomercat_dweomercat_cub--defense" ac={[16,15,13]} mod="+2 Dex, +1 dodge, +1 natural, +2 size" hp={[16,"3d10"]} fort="+3" ref="+5" will="+2" dr="5/magic" sr="14" />
<Offense id="monster-dweomercat_dweomercat_cub--offense" sp={20} melee="2 claws +7 (1d2-1), bite +7 (1d3-1)" specAtt={[["dweomer leap","dweomer leap"]]} pounce rake="2 claws +6, 1d2-1" />
<SpellBlock id="monster-dweomercat_dweomercat_cub--spells-monster-spellblock-1" sla={{"cl":4,"content":[{"constant":true,"content":<Link to="/spell/detect_magic">detect magic</Link>},{"per":"week","content":<><Link to="/spell/dimension_door">dimension door</Link> (self only)</>}]}} />
<Stats id="monster-dweomercat_dweomercat_cub--stats" atts={[9,15,10,9,12,14]} bab={3} cmb={3} cmd={13} cmdP="17 vs. trip" feats={["Dodge","Weapon Finesse"]} skills={{"climb":{"b":3},"k":{"a":0},"per":{"b":5},"stl":{"b":4}}} racial="+4 Climb" lang={["C","S"]} />
<Ecology id="monster-dweomercat_dweomercat_cub--eco-eco" env="any forest" org={<>solitary or ambush (1-3 <Link to="/monster/dweomercat">dweomercats</Link> and 2-12 dweomercat cubs)</>} treasure={{"S":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Dweomer Leap (Su)</strong> When a dweomercat is targeted by a spell or within the area of effect of a spell, it can, as a swift action, choose to teleport to a square adjacent to the spell's caster, effectively appearing mid-leap and aimed toward the caster. This ability takes effect regardless of whether or not the spell overcomes the dweomercat's spell resistance. If it chooses, the dweomercat can immediately make a full attack against the spell's caster as though pouncing. Using this ability does not provoke an attack of opportunity. If there is no safe space adjacent to the caster - or if the dweomercat chooses - the dweomercat can forgo using this ability.</p>
<Header sub>Description</Header>
<p>Powerful and regal, dweomercats stalk the First World, preying upon lesser creatures, but more voraciously hunting new and ever stranger sources of magic. Beings as much composed of sculpted arcane eddies as of flesh and blood, these capricious felines flourish along the intangible ley lines of their home realm, drinking in its weird powers as a plant thrives on light. Yet even more potent than their thirst for magic and the euphoria they draw from being in proximity to the reshaping of reality is dweomercats' racial curiosity, which leads them endlessly across the First World - and often beyond.</p>
<p>The average adult dweomercat is about 4 feet tall and 7 feet long, weighing over 250 pounds, while their cubs are approximately 1 foot tall and weigh no more than 15 pounds.</p>
<Header sub>Dweomercat Cubs as Familiars</Header>
<p>Attracted to flashy displays of magic and the strange powers inherent in a bond between a magic-user and her familiar, a dweomercat cub that's wandered from the First World might find its taste for magic and adventure satisfied in the service of a particularly whimsical or ostentatious arcane spellcaster. A spellcaster with the <Link to="/feat/improved_familiar">Improved Familiar</Link> feat can acquire a chaotic neutral dweomercat cub at 7th level or higher. Should the spellcaster settle into a life of research and predictability for a span of months, the dweomercat cub familiar might take to wandering off and, eventually, might not return - deliberately severing the master-familiar bond and freeing the spellcaster to summon a new familiar.</p>
</>};
const _dwiergeth = {title: "Dwiergeth", jsx: <><p><em>This beast's bulbous body perches atop four sucker-ended, multijointed legs, and possesses two gnashing, ophidian maws.</em></p>
<Header full><span>Dwiergeth</span><span>CR 13</span></Header>
<div className="reduce">
<Info id="monster-dwiergeth--info" source={[["Bestiary 5",102],["The Worldwound",54]]} xp="25,600" ce large aberration subs={["extraplanar"]} init={11} dv={60} pcp={16} />
<Defense id="monster-dwiergeth--defense" ac={[28,17,20]} mod="+7 Dex, +1 dodge, +11 natural, -1 size" hp={[175,"13d8+117"]} fort="+13" ref="+11" will="+15" aav dr="10/lawful" immune="blindness, dazzling, poison, visual effects" resist="cold 20, fire 20" sr="24" />
<Offense id="monster-dwiergeth--offense" sp={60} cl={60} melee={<>2 bites +19 (4d6+11/19-20 plus <Link to="/umr/grab">grab</Link>)</>} space={"10"} reach={"10"} specAtt={[["forever gullet","forever gullet"]]} fSwallow swallow="8d6 slashing damage, AC 15, 17 hp" />
<SpellBlock id="monster-dwiergeth--spells-monster-spellblock-1" sla={{"cl":13,"con":"+16","content":[{"constant":true,"content":<Link to="/spell/feather_fall">feather fall</Link>},{"will":true,"content":<><Link to="/spell/gust_of_wind">gust of wind</Link> (DC 15)</>},{"day":1,"content":<><Link to="/spell/control_winds">control winds</Link> (DC 18), <Link to="/spell/wind_wall">wind wall</Link></>}]}} />
<Stats id="monster-dwiergeth--stats" atts={[32,25,28,5,24,17]} bab={9} cmb={21} cmbP="+25 grapple" cmd={39} cmdP="43 vs. trip" feats={["Combat Reflexes","Dodge",["Improved Critical"," (bite)"],"Improved Initiative","Mobility","Spring Attack","Wind Stance"]} skills={{"climb":{"b":29},"per":{"b":16}}} lang={["A"]} />
<Ecology id="monster-dwiergeth--eco-eco" env={<>cold mountains (Material Plane or <Link to="/rule/the_abyss">the Abyss</Link>)</>} org="solitary, pair, or pack (3-6)" treasure={{"I":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Forever Gullet (Su)</strong> When a dwiergeth swallows a creature whole, the act shunts the victim through extradimensional orifices within the creature's body and into a seemingly endless maze of tooth-lined entrails that exist outside of reality, similar to the labyrinth created by a <Link to="/spell/maze">maze</Link> spell but horribly organic and hungry. If a swallowed creature successfully cuts its way out of a dwiergeth, it must attempt a DC 15 Intelligence check as it crawls out of the hole. If the victim is successful, it escapes the creature, but on a failure, the victim merely crawls from one extradimensional intestine to another and must endure another round of being swallowed whole. A dwiergeth can continue to use swallow whole even after a creature cuts its way out. A creature casting any teleportation spell or spell-like ability while within 5 feet of a dwiergeth must succeed at a DC 21 Will save or the effect instead sends the target into the dwiergeth's forever gullet. When a dwiergeth is under the effects of <Link to="/spell/dimensional_anchor">dimensional anchor</Link> or in an area that prohibits extradimensional travel, it loses the abilities of its forever gullet, but its swallow whole ability functions normally. If a dwiergeth dies, the extradimensional space contracts, disgorging any swallowed creature into the corpse's space. The save DC is Charisma-based, and includes a +2 racial bonus.</p>
<Header sub>Description</Header>
<p>Dwiergeths hunt Abyssal rift valleys, digesting prey in a gnawing process of transdimensional rumination. Surefooted dwiergeths leap and sprint along vertical surfaces with disturbing ease, and often cling to cliff sides for hours or even days, waiting for prey to approach from either above or below. They have a supernatural mastery over the wind as well, and make use of their spell-like abilities to cause climbers to fall from cliffs or flying creatures to be dashed against rocky walls - it's easier to eat bleeding, broken meat, after all.</p>
<p>A dwiergeth's anatomy is often difficult for humanoids to comprehend. Trembling bristles protruding from the creature's flesh act as eyes, allowing it to see in all directions at once. Although dissection of a slain dwiergeth reveals a single coiling digestive tract winding from one of its mouths through its bulbous body to the other mouth, the entrails of a living dwiergeth actually extend into other strange dimensions generated by the monster's Abyssal heritage.</p>
</>};
const _dybbuk = {title: "Dybbuk", jsx: <><p><em>This grinning spectre has mad eyes and blood-red hands that twitch and jerk like a puppeteer's.</em></p>
<Header full><span>Dybbuk</span><span>CR 15</span></Header>
<div className="reduce">
<Info id="monster-dybbuk--info" source={[["Bestiary 3",108]]} xp="51,200" ne medium undead subs={["incorporeal"]} init={15} dv={60} pcp={29} />
<Defense id="monster-dybbuk--defense" ac={[28,28,17]} mod="+7 deflection, +11 Dex" hp={[207,"18d8+126"]} fort="+13" ref="+17" will="+17" chanRes="+4" incorp dr="10/good" immune={<Link to="/umr/undead_traits">undead traits</Link>} sr="26" />
<Offense id="monster-dybbuk--offense" fl={60} flP="perfect" melee="pain touch +25 touch (7d6)" specAtt={[["malevolence","malevolence"]]} />
<SpellBlock id="monster-dybbuk--spells-monster-spellblock-1" sla={{"cl":18,"con":"+25","content":[{"will":true,"content":<><Link to="/spell/detect_thoughts">detect thoughts</Link> (DC 19), <Link to="/spell/telekinesis">telekinesis</Link> (DC 22)</>},{"day":3,"content":<><Link to="/spell/dominate_monster">dominate monster</Link> (DC 26), <Link to="/spell/feeblemind">feeblemind</Link> (DC 22), <Link to="/spell/inflict_serious_wounds">inflict serious wounds</Link> (DC 20)</>},{"day":1,"content":<><Link to="/spell/greater_heroism">greater heroism</Link>, <Link to="/spell/modify_memory">modify memory</Link> (DC 21), <Link to="/spell/tongues">tongues</Link></>}]}} />
<Stats id="monster-dybbuk--stats" atts={[0,32,0,15,18,25]} bab={13} cmb={24} cmd={41} feats={["Alertness","Blind-Fight","Combat Reflexes","Flyby Attack","Improved Initiative","Iron Will","Lunge","Step Up",["Weapon Focus"," (pain touch)"]]} skills={{"bluff":{"b":25},"diplo":{"b":25},"sm":{"b":29},"stl":{"b":32}}} lang={["A","Ce","C"]} />
<Ecology id="monster-dybbuk--eco-eco" env="any" org="solitary" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Malevolence (Su)</strong> Once per round, a dybbuk can merge itself with a creature on the Material Plane. This ability is similar to a <Link to="/spell/magic_jar">magic jar</Link> spell (caster level 18th), except that it does not require a receptacle. To use this ability, the dybbuk must be adjacent to the target. The target can resist the attack with a successful DC 26 Will save. A creature that successfully saves is immune to that same dybbuk's malevolence for 24 hours. The save DC is Charisma-based.</p>
<p><strong>Pain Touch (Su)</strong> With a successful touch attack, a dybbuk causes painful spasms throughout the target's body, dealing 7d6 points of damage. Creatures that are immune to pain take no damage from this touch.</p>
<p><strong>Possess Object (Su)</strong> A dybbuk can use its malevolence ability to possess a Large or smaller unattended object, animating it as if using <Link to="/spell/animate_objects">animate objects</Link>, except the dybbuk merges with and controls the object as if it were a living creature. The dybbuk cannot speak or use its other special abilities while possessing the object.</p>
<Header sub>Description</Header>
<p>A dybbuk is a misplaced soul who has eluded judgment because of a some great transgression or a pitiful suicide. Like a <Link to="/template/ghost">ghost</Link>, it lingers on in the mortal world, either trying to fulfill an insane need to right some great failure that has marked its soul for eternity or merely to spread the torment it is condemned to face for eternity. Bodiless and left to wander, dybbuks grow increasingly bitter and resentful over the loss of their bodies and endlessly seek mortal or even inanimate forms to steal and use to sow suffering. Vile manipulators, they seek bodies that have the greatest potential to cause pain in those closest to their victims, taking pleasure in shifting a leader's agenda toward the destruction of her followers or torturing an innocent from within. Dybbuks also often animate unliving things to spread fear, reveling in the chaos resulting from manipulating corpses to confuse and terrify. Most also realize they have all of eternity to torment their chosen victims, and might lurk quietly near a living target for weeks or months, waiting for the right moment to act and begin their terrors anew.</p>
</>};
const _eagle = {title: "Eagle", jsx: <><p><em>This magnificent bird of prey has dark feathers save for those on its head, which are pure white.</em></p>
<Header full><span>Eagle</span><span>CR 1/2</span></Header>
<div className="reduce">
<Info id="monster-eagle--info" source={[["Pathfinder RPG Bestiary",118]]} xp="200" n small animal init={2} llv pcp={10} />
<Defense id="monster-eagle--defense" ac={[14,13,12]} mod="+2 Dex, +1 natural, +1 size" hp={[5,"1d8+1"]} fort="+3" ref="+4" will="+2" />
<Offense id="monster-eagle--offense" sp={10} fl={80} flP="average" melee="2 talons +3 (1d4), bite +3 (1d4)" />
<Stats id="monster-eagle--stats" atts={[10,15,12,2,15,7]} bab={0} cmb={-1} cmd={11} feats={["Weapon Finesse"]} skills={{"fly":{"b":8},"per":{"b":10}}} racial="+8 Perception" />
<Ecology id="monster-eagle--eco-eco" env="temperate mountains" org="solitary or pair" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Among the most majestic of raptors, these predatory birds pluck fish from streams and lakes, drop down on rodents and small mammals in alpine meadows, and have even been known to pull young mountain goats from the assumed safety of their cliffs.</p>
<p>These creatures, like all birds of prey, have powerful clawed talons and sharp, hooked beaks perfect for tearing flesh. Their enhanced eyesight allows them to spot prey from great distances, and they typically hunt in wide circling patterns high above the ground.</p>
<p>Eagles typically build their massive nests in the tops of tall trees or among the rocky crags of steep cliffs. During breeding season, an eagle lays two eggs, but only one chick normally survives, as the stronger of the two usually kills and eats the weaker.</p>
<p>Eagles generally weigh between 8 and 15 pounds, with a wingspan of up to 7 feet, depending on the species.</p>
</>};
const _eagle_giant_eagle = {title: "Giant Eagle", jsx: <><p><em>This immense eagle's feathers are golden brown and shimmer in the light. Its sharp beak and curved talons are dark yellow.</em></p>
<Header full><span>Giant Eagle</span><span>CR 3</span></Header>
<div className="reduce">
<Info id="monster-eagle_giant_eagle--info" source={[["Pathfinder RPG Bestiary",118]]} xp="800" ng large magicalBeast init={3} llv pcp={15} />
<Defense id="monster-eagle_giant_eagle--defense" ac={[15,12,12]} mod="+3 Dex, +3 natural, -1 size" hp={[26,"4d10+4"]} fort="+5" ref="+7" will="+3" eva />
<Offense id="monster-eagle_giant_eagle--offense" sp={10} fl={80} flP="average" melee="2 claws +7 (1d8+4), bite +7 (1d6+4)" space={"10"} reach={"5"} />
<Stats id="monster-eagle_giant_eagle--stats" atts={[18,17,12,10,15,11]} bab={4} cmb={9} cmd={22} feats={["Alertness","Flyby Attack"]} skills={{"fly":{"b":8},"per":{"b":15},"sm":{"b":4}}} racial="+4 Perception" lang={["AuX"]} />
<Ecology id="monster-eagle_giant_eagle--eco-eco" env="temperate mountains" org="solitary, pair, or eyrie (3-12)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>A typical giant eagle stands about 15 feet tall, has a wingspan of up to 30 feet, and resembles its smaller cousins in nearly every way except size. It weighs 500 pounds.</p>
<p>Giant eagles are far more than animals - they possess a supernatural intellect and view themselves as guardians and protectors of their mountain territories. They form lasting friendships with those who respect them and their mountaintop domains.</p>
</>};
const _eaisge = {title: "Eaisge", jsx: <><p><em>Water gushes from the mouth and nose of this bloated creature. Broken wood and jagged nails jut from its half-rotted flesh.</em></p>
<Header full><span>Eaisge</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-eaisge--info" source={[["Ire of the Storm",62]]} xp="400" ne medium undead subs={["aquatic"]} init={0} dv={60} pcp={3} />
<Defense id="monster-eaisge--defense" ac={[12,10,12]} mod="+2 natural" hp={[16,"3d8+3"]} fort="+2" ref="+1" will="+4" dr="5/piercing or slashing" immune={<Link to="/umr/undead_traits">undead traits</Link>} resist="cold 5, fire 5" />
<Offense id="monster-eaisge--offense" sp={30} melee="slam +4 (1d8+3)" ranged={<>gush +2 (1d4+2 plus <Link to="/umr/trip">trip</Link>)</>} specAtt={[["create spawn","create spawn"],["embedded debris","embedded debris"],["gush","gush"]]} />
<Stats id="monster-eaisge--stats" atts={[15,10,0,6,8,13]} bab={2} cmb={4} cmd={14} feats={["Blind-Fight","Iron Will"]} skills={{"intm":{"b":6},"per":{"b":3},"stl":{"b":5,"x":"+9 underwater"},"swim":{"b":6}}} racial="+4 Stealth underwater" lang={["Aq"]} />
<Ecology id="monster-eaisge--eco-eco" env="any swamp or water" org="solitary, pair, or wreck (3-15)" treasure={{"S":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Create Spawn (Su)</strong> As a full-round action, an eaisge can expel water from its mouth onto a creature it has killed in the past minute. A humanoid creature with fewer than 3 Hit Dice bathed in these putrid waters rises as a <Link to="/template/zombie">zombie</Link> 1d4 rounds later. A humanoid with 3 Hit Dice or more rises as a new eaisge, though these newly formed eaisge lack the embedded debris special ability for the first 24 hours. An eaisge has no ability to control the undead it creates.</p>
<p><strong>Embedded Debris (Ex)</strong> Large chunks of flotsam are embedded in an eaisge's body, increasing the undead's slam damage. This debris can be <Link to="/rule/sunder">sundered</Link> as if it were a held weapon (hardness 5, 10 hp), but not <Link to="/rule/disarm">disarmed</Link>. If an eaisge's debris is destroyed, the eaisge's slam damage is reduced to 1d4 + its Strength modifier for 24 hours while its body recollects debris.</p>
<p><strong>Gush (Ex)</strong> An eaisge can spew a gout of putrid water from its mouth as a standard action, targeting a single creature within 30 feet with this ranged touch attack. If this attack hits, it deals damage as a thrown weapon (as indicated above), and the eaisge can attempt to <Link to="/rule/trip">trip</Link> its target as a free action that does not provoke an attack of opportunity. If the attempt fails by 10 or more, the eaisge isn't knocked prone.</p>
<Header sub>Description</Header>
<p>Eaisges form in the aftermath of torrential storms linked to the Elemental Planes, especially the <Link to="/rule/plane_of_water">Plane of Water</Link>. Extraplanar energies warp and twist the mortal souls of those claimed in these disasters, and this eventually animates their bloated corpses as horrid mockeries of life. Eaisges resemble their living forms, but with bloated bodies that drip rancid water and their skin pruned into repulsive folds. They weigh twice what they did in life thanks to this saturation.</p>
<p>These horrible creatures may lie dormant and harmless for months or years before suddenly exploding with terrible purpose. Eaisges naturally attract bits of flotsam and debris. Their bodies absorb this refuse, wrapping their limbs around driftwood and rubble: this causes the constant pain that inspires their outrage and bursts of violence.</p>
</>};
const _ebon_acolytus = {title: "Ebon Acolytus", jsx: <><p><em>A chilling statue strands behind a dark altar, both smeared with evidence of grisly sacrifices. The monstrous statue, sculpted as a perverse amalgam of both man and beast, raises a wickedly curved sacrificial dagger above its head, its bejeweled eyes seeming to glint with murderous zeal.</em></p>
<Header full><span>Ebon Acolytus</span><span>CR 7</span></Header>
<div className="reduce">
<Info id="monster-ebon_acolytus--info" source={[["Pathfinder #30: The Twice-Damned Prince",82]]} xp="3,200" n large construct init={-1} dv={60} llv pcp={0} />
<Defense id="monster-ebon_acolytus--defense" ac={[20,8,20]} mod="-1 Dex, +12 natural, -1 size" hp={[79,"9d10+30"]} fort="+3" ref="+2" will="+3" immune={<Link to="/umr/construct_traits">construct traits</Link>} />
<Offense id="monster-ebon_acolytus--offense" sp={30} melee="dagger +14 (1d6+9/19-20) or 2 slams +14 (1d6+6)" space={"10"} reach={"10"} specAtt={[["prostration","prostration"],["sacrifice","sacrifice"]]} />
<Stats id="monster-ebon_acolytus--stats" atts={[22,8,10,10,11,1]} bab={9} cmb={16} cmd={25} />
<Ecology id="monster-ebon_acolytus--eco-eco" env="any" org="solitary" treasure={{"I":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Prostration (Ex)</strong> As a standard action, an ebon acolytus can attempt to force any creature it is currently <Link to="/rule/grappling">grappling</Link> into a sacrificial position. The construct must make an additional combat maneuver check against its target to reposition it into an advantageous position. If it succeeds, and the victim remains grappled at the beginning of the construct's next round, the ebon acolytus may make use of its sacrifice ability. An ebon acolytus gains a +2 bonus on its CMB for the purposes of making this check if it is adjacent to an altar or similar site of ceremonial bloodletting.</p>
<p><strong>Sacrifice (Su)</strong> As a full-round action, an ebon acolytus may make a <Link to="/misc/coup_de_grace">coup de grace</Link> attack with its dagger against any target currently grappled into place using its prostration ability. The target is affected by the <em>coup de grace</em> attack and must make a Fortitude saving throw (DC 10 + damage dealt) or die as normal. If the target is killed by this attack, his soul is sent straight to the plane of the being to which the altar is dedicated, regardless of alignment, and cannot be raised from the dead except by a cleric sworn to the same deity or by a <Link to="/spell/miracle">miracle</Link> or <Link to="/spell/wish">wish</Link> spell. A creature under the effects of a <Link to="/spell/protection_from_evil">protection from evil</Link> spell - or similar spell that opposes the alignment of the god the ebon acolytus is crafted to serve - may be resurrected as normal.</p>
<Header sub>Description</Header>
<p>Dedicated to dark gods, fiends hungry for the souls of innocents, and even more monstrous beings, ebon acolyti - sometimes called altar golems - are terrifying constructs, for they are not designed merely to kill, but to aid in the often bloody work required in the service of foul divinities. Carved from a single block of stone or other sturdy material, these constructs resemble towering statues, crafted to appear as servants of specific deities and often etched with icons sacred to their worship. In addition to its fearful body, an ebon acolytus is typically crafted with a companion altar, upon which it might aid its master or an unholy congregation in dark rites and ritual bloodletting.</p>
<p>The exact height and weight of an ebon acolytus varies, largely depending on the shape of its body and the quality of the stone used in its creation, though most rise to around 14 feet tall and weigh around 2,500 pounds. Some carry Large sacrificial weapons other than daggers, but these prove rare and vary between faiths.</p>
<Header sub>Construction</Header>
<p>An ebon acolytus is chiseled from a single block of dark stone, often black granite or marble, jade, or some other lustrous material, and weighing at least 4,000 pounds. The stone must be of exceptional quality and costs at least 6,000 gp.</p>
<h3 id="monster-ebon_acolytus-ebon-acolytus">Ebon Acolytus</h3>
<p><strong>CL</strong> 11th; <strong>Price</strong> 24,000 gp<br/><strong>Requirements</strong> <Link to="/feat/craft_construct">Craft Construct</Link>, <Link to="/spell/animate_objects">animate objects</Link>, <Link to="/spell/desecrate">desecrate</Link>, <Link to="/spell/trap_the_soul">trap the soul</Link>, creator must be caster level 11th; <strong>Skill</strong> Craft (sculpting) or Craft (stonemasonry) DC 16; <strong>Cost</strong> 12,000 gp</p>
</>};
const _echeneis = {title: "Echeneis", jsx: <><p><em>This thin, colorful fish has a broad, segmented sucker above its narrow mouth. A line of spines runs down its back.</em></p>
<Header full><span>Echeneis</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-echeneis--info" source={[["Bestiary 5",103]]} xp="400" n small magicalBeast subs={["aquatic"]} init={4} dv={60} llv pcp={5} />
<Defense id="monster-echeneis--defense" ac={[13,11,13]} mod="+2 natural, +1 size" hp={[19,"3d10+3"]} fort="+4" ref="+5" will="+1" />
<Offense id="monster-echeneis--offense" sp={5} sw={20} melee="bite +5 (1d4+1 plus attach), tail slap +0 (1d4) or sucker +5 touch (attach), tail slap +0 (1d4)" specAtt={[["sap speed","sap speed"]]} attach />
<Stats id="monster-echeneis--stats" atts={[12,11,13,2,10,13]} bab={3} cmb={3} cmbP="+11 grapple while attached" cmd={13} cmdP="17 vs. grapple while attached" feats={["Improved Initiative","Lightning Reflexes"]} skills={{"per":{"b":5},"stl":{"b":8},"swim":{"b":9}}} />
<Ecology id="monster-echeneis--eco-eco" env="warm or temperate water" org="solitary, pair, or school (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Attach (Ex)</strong> An echeneis that hits with its bite or sucker attack automatically initiates a <Link to="/rule/grapple">grapple</Link> against its target. While attached to a creature or vehicle, the echeneis gains a +8 bonus on combat maneuver checks to grapple and +4 bonus to its CMD against grapple attempts but loses any Dexterity bonus or dodge bonus to Armor Class. An echeneis that successfully maintains a grapple can make a free tail slap attack against any target except the one to which it is attached.</p>
<p><strong>Sap Speed (Su)</strong> Whenever an echeneis ends its turn attached to a creature or vehicle, it steals fragments of time from its host and gains the benefits of <Link to="/spell/haste">haste</Link> for as long as it is attached and for an equal amount of time thereafter (maximum 3 hours). A creature with an attached echeneis takes a cumulative -1 penalty to Dexterity each round (which stacks with multiple echeneises) and must succeed at a DC 12 Will save or be affected as if by a <Link to="/spell/slow">slow</Link> spell until the end of the echeneis's next turn. The penalty to Dexterity ends at the end of the echeneis's turn if it is no longer attached to the creature. A vehicle with an attached echeneis has its speed reduced by half until the end of the echeneis's next turn. A creature or vehicle <em>slowed</em> by a second echeneis is reduced to one-quarter speed. A creature or vehicle <em>slowed</em> by three or more echeneises is reduced to a speed of 0 feet. The save DC is Charisma-based.</p>
<Header sub>Description</Header>
<p>The echeneis is a magical fish known to sailors in many parts of the world as a major pest due to its theft of speed from boats and large, swimming creatures alike. It ranges across large stretches of water, stopping every few hours to feed and sap velocity from large boats, sharks, whales, and other hosts that might overlook it. Although native to warm waters, echeneises sometimes follow trade vessels elsewhere. Because echeneises prefer murky shallows, sailors rarely notice one before it begins to slow a vessel. The sharp and sturdy spines atop the creatures' backs scrape the hulls of ships to which they are attached, so sailors lament both the short-term inconvenience and the long-term damage caused by these pests. Old boats with hundreds of scrape marks on their bottoms garner reputations as cursed, and their captains face a serious stigma when trying to recruit crews. It is true that some ships draw echeneises more than others, but apart from the ship's size there is no indication as to what else might attract the creatures.</p>
<p>Like the remoras they resemble, echeneises are scavengers. However, they are aggressive and often retaliate when knocked off of creatures or vessels. In combat, echeneises attach themselves to enemies to slow them down while flailing with their tails against anyone attempting to remove them. If badly injured while attached, an echeneis releases its victim and uses the speed it has stolen to quickly escape.</p>
<p>An echeneis averages over 3 feet in length and weighs at least 12 pounds.</p>
</>};
const _ecorche = {title: "Ecorche", jsx: <><p><em>This brawny creature has had its skin completely flensed from its form, revealing the violent pulsing of its massive, exposed muscles.</em></p>
<Header full><span>Ecorche</span><span>CR 16</span></Header>
<div className="reduce">
<Info id="monster-ecorche--info" source={[["Bestiary 3",109]]} xp="76,800" ce large undead init={9} dv={60} pcp={25} aura={<><Link to="/umr/frightful_presence">frightful presence</Link> (60 ft., DC 26)</>} />
<Defense id="monster-ecorche--defense" ac={[30,14,25]} mod="+5 Dex, +16 natural, -1 size" hp={[209,"22d8+110"]} fh="5" fort="+12" ref="+12" will="+15" chanRes="+2" dr="15/good and silver" immune={<>acid, <Link to="/umr/undead_traits">undead traits</Link></>} />
<Offense id="monster-ecorche--offense" sp={30} melee="2 claws +27 (3d6+11/19-20)" space={"10"} reach={"10"} bleed="1 Con drain" rend="2 claws, 3d6+11 plus bleed and seize skin" />
<Stats id="monster-ecorche--stats" atts={[32,20,0,9,11,21]} bab={16} cmb={28} cmd={43} feats={["Awesome Blow","Blinding Critical","Combat Reflexes","Critical Focus","Improved Bull Rush",["Improved Critical"," (claw)"],"Improved Initiative","Iron Will","Power Attack","Stand Still",["Weapon Focus"," (claw)"]]} skills={{"dis":{"b":30},"stl":{"b":26}}} lang={["C"]} sq="wear skin" />
<Ecology id="monster-ecorche--eco-eco" env="any land" org="solitary or gang (2-4)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Seize Skin (Su)</strong> Whenever an ecorche damages a target with its rend ability, the target must succeed at a DC 25 Fortitude save to resist being skinned alive. Those who fail the save become <Link to="/misc/staggered">staggered</Link> and take 1 point of Constitution drain per round. Both of these effects are permanent but can be removed with a <Link to="/spell/regenerate">regenerate</Link> or <Link to="/spell/heal">heal</Link> spell (or 1 round of <Link to="/umr/regeneration">regeneration</Link>). The ecorche can use its wear skin ability to don a skin stolen in this way as a full-round action. The save DC is Dexterity-based.</p>
<p><strong>Wear Skin (Su)</strong> An ecorche can steal the skin of a dead Small, Medium, or Large humanoid and wear it as its own. When it does this, the ecorche takes on the creature's size and appearance and gains a +10 bonus on Disguise checks made to impersonate the victim. While wearing a stolen skin, an ecorche cannot use its frightful presence. This stolen skin is preserved while the ecorche wears it, but is destroyed if the ecorche takes more than 10 points of damage or if the ecorche chooses to destroy the skin as a standard action. Those within 60 feet who see an ecorche's stolen skin destroyed are immediately subjected to its frightful presence and take a -5 penalty on the related Will save. An ecorche reverts to its normal size if its stolen skin is destroyed.</p>
<Header sub>Description</Header>
<p>The bodyguards and spies of undead masterminds, ecorches appear as gory giants with musculatures overdeveloped by infusions of necromantic toxins and grafts of reanimated sinew. Although its natural form possesses no skin, an ecorche can steal the flesh of another creature, flaying its victim in mere seconds and leaving it in unimaginable shock and pain with only moments to seek aid before perishing. Yet this gruesome act of violence is only the first stage of the chaos an ecorche spreads with its violence. An ecorche possesses incredible control over its gruesome form, allowing it to compress its body into the skin of a much smaller creature. Wearing such grisly garb, these terrors walk among the living, doing the bidding of their terrible masters or searching for more influential individuals to murder, skin, and impersonate. If an ecorche's unholy nature is revealed, the monster is quick to dispose of its now-useless disguise, bursting from the suit of flesh and exposing its terrible form to the unprepared, few of whom can withstand such unabashed gore.</p>
<p>An ecorche stands approximately 8-1/2 feet tall and weighs upward of 600 pounds.</p>
</>};
const _eel_electric_eel = {title: "Electric Eel", jsx: <><p><em>This six-foot-long, snake-like fish moves slowly. A strange popping and snapping sound occasionally emits from the creature's body.</em></p>
<Header full><span>Electric Eel</span><span>CR 2</span></Header>
<div className="reduce">
<Info id="monster-eel_electric_eel--info" source={[["Pathfinder RPG Bestiary",119]]} xp="600" n small animal init={6} llv pcp={4} />
<Defense id="monster-eel_electric_eel--defense" ac={[15,13,13]} mod="+2 Dex, +2 natural, +1 size" hp={[17,"2d8+8"]} fort="+7" ref="+5" will="+0" resist="electricity 10" />
<Offense id="monster-eel_electric_eel--offense" sp={5} sw={30} melee="bite +3 (1d6+1) and tail -2 touch (1d6 electricity)" />
<Stats id="monster-eel_electric_eel--stats" atts={[13,14,19,1,10,6]} bab={1} cmb={1} cmd={13} cmdP="can't be tripped" feats={["Improved Initiative"]} skills={{"ea":{"b":10},"per":{"b":4},"stl":{"b":10},"swim":{"b":9}}} racial="+8 Escape Artist" />
<Ecology id="monster-eel_electric_eel--eco-eco" env="warm fresh water" org="solitary" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Electricity (Ex)</strong> An electric eel can produce a powerful jolt of electricity from its tail, delivering the jolt with a successful touch attack. On a critical hit, the creature struck must make a DC 15 Fortitude save or be <Link to="/misc/stunned">stunned</Link> for 1d4 rounds. The save DC is Constitution-based.</p>
<Header sub>Description</Header>
<p>The electric eel is a curious fish that breathes air instead of water, yet certainly its most unusual characteristic is its ability to generate powerful jolts of electricity. An electric eel is 6 feet long and weighs 45 pounds.</p>
</>};
const _eel_giant_moray_eel = {title: "Giant Moray Eel", jsx: <><p><em>This sixteen-foot-long eel slithers through the water with uncanny grace, mouth open to display large teeth and a second set of jaws.</em></p>
<Header full><span>Giant Moray Eel</span><span>CR 5</span></Header>
<div className="reduce">
<Info id="monster-eel_giant_moray_eel--info" source={[["Pathfinder RPG Bestiary",119]]} xp="1,600" n large animal subs={["aquatic"]} init={6} llv scent pcp={7} />
<Defense id="monster-eel_giant_moray_eel--defense" ac={[19,11,17]} mod="+2 Dex, +8 natural, -1 size" hp={[52,"7d8+21"]} fort="+8" ref="+9" will="+3" />
<Offense id="monster-eel_giant_moray_eel--offense" sw={30} melee={<>bite +11 (2d6+9 plus <Link to="/umr/grab">grab</Link>)</>} space={"10"} reach={"10"} specAtt={[["gnaw","gnaw"]]} />
<Stats id="monster-eel_giant_moray_eel--stats" atts={[22,14,16,1,12,8]} bab={5} cmb={12} cmbP="+16 grapple" cmd={24} cmdP="can't be tripped" feats={["Improved Initiative","Lightning Reflexes",["Skill Focus"," (Stealth)"],["Weapon Focus"," (bite)"]]} skills={{"ea":{"b":10},"per":{"b":7},"stl":{"b":8},"swim":{"b":14}}} racial="+8 Escape Artist" />
<Ecology id="monster-eel_giant_moray_eel--eco-eco" env="warm oceans" org="solitary, pair, or nest (3-6)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Gnaw (Ex)</strong> If a giant moray begins a round with a grabbed foe, it inflicts automatic bite damage (2d6+9 points of damage). A giant moray eel possesses a second set of jaws in its throat that aid in swallowing - it can make a second bite attack (+11 attack, 1d6+3) against a foe it has already grabbed.</p>
<Header sub>Description</Header>
<p>The moray eel is a ferocious predator, capable of holding prey in its primary jaws while a smaller set of jaws inside its throat chews away bite-sized portions.</p>
</>};
const _egophage = {title: "Egophage", jsx: <><p><em>Eight tentacles ending in claws grow from the base of this glistening and gruesome floating brain.</em></p>
<Header full><span>Egophage</span><span>CR 10</span></Header>
<div className="reduce">
<Info id="monster-egophage--info" source={[["Occult Bestiary",26]]} xp="9,600" ce small aberration init={11} sen={["analyze aura"]} dv={60} pcp={23} />
<Defense id="monster-egophage--defense" ac={[25,19,17]} mod="+7 Dex, +1 dodge, +6 natural, +1 size" hp={[123,"13d8+65"]} fort="+9" ref="+11" will="+12" dr="10/adamantine and magic" immune="fire, mind-affecting effects" resist="cold 20, electricity 20, sonic 20" sr="25" weak={[<>vulnerable to <em>protection from evil</em></>]} />
<Offense id="monster-egophage--offense" sp={10} fl={50} flP="perfect" melee="8 claws +18 (1d4+2 plus attach [once per round if two or more claws hit the same creature])" specAtt={[["body thief","body thief"]]} />
<SpellBlock id="monster-egophage--spells-monster-spellblock-1" sla={{"cl":10,"content":[{"constant":true,"content":<Link to="/spell/analyze_aura">analyze aura</Link>},{"will":true,"content":<><Link to="/spell/invisibility">invisibility</Link>, <em>reduce size</em>|as <Link to="/spell/reduce_person">reduce person</Link> but self only and affects aberrations</>}]}} />
<SpellBlock id="monster-egophage--spells-monster-spellblock-2" psy={{"pe":24,"cl":10,"content":<><Link to="/spell/anticipate_thoughts">anticipate thoughts</Link> (2 PE, DC 16), <Link to="/spell/ego_whip_iv">ego whip IV</Link> (6 PE, DC 20), <Link to="/spell/globe_of_invulnerability">globe of invulnerability</Link> (4 PE), <Link to="/spell/id_insinuation_iii">id insinuation III</Link> (4 PE, DC 17)</>,"con":"+14"}} />
<Stats id="monster-egophage--stats" atts={[15,25,21,16,14,18]} bab={9} cmb={15} cmd={28} feats={["Agile Maneuvers","Dodge","Improved Initiative","Iron Will","Mobility","Weapon Finesse",["Weapon Focus"," (claw)"]]} skills={{"bluff":{"b":25},"diplo":{"b":24},"dis":{"b":25},"sm":{"b":15},"stl":{"b":35}}} racial="+8 Bluff, +8 Perception, +8 Stealth" lang={["AkX","CX","UX",";",[<><Link to="/umr/telepathy">telepathy</Link> 100 ft.</>]]} />
<Ecology id="monster-egophage--eco-eco" env="any underground" org="solitary, brood (4-8), or tribe (10-30)" treasure={{"D":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Body Thief (Su)</strong> As a full-round action that provokes attacks of opportunity, an egophage can attempt to psychically force its way into a <Link to="/misc/helpless">helpless</Link>, <Link to="/misc/dead">dead</Link>, or <Link to="/rule/grappled">grappled</Link> creature. If successful, it attempts a psychically channeled <Link to="/misc/coup_de_grace">coup de grace</Link> that inflicts 16d4+16 points of damage. If the victim is slain (or already dead), the egophage usurps control of the body as per <Link to="/spell/greater_possession">greater possession</Link> cast on a living body, with an unlimited duration. A host body may not have been dead for longer than 1 day for this ability to function, and even successfully inhabited bodies decay to uselessness in 7 days (unless this time is extended via a <Link to="/spell/gentle_repose">gentle repose</Link> spell). As long as the egophage occupies the body, it knows and can speak any language known by the victim, and also knows basic information about the victim's identity and personality, though it has none of the victim's specific memories or knowledge. Once possessed, the host regains its full hit points - despite the fact that it's technically a corpse, it appears, detects, and acts as a living creature of its type. Damage done to a host does not harm the egophage, and if the host body is slain, the egophage emerges and is <Link to="/misc/dazed">dazed</Link> for 1 round. <Link to="/spell/raise_dead">Raise dead</Link> cannot restore a victim of body theft, but <Link to="/spell/resurrection">resurrection</Link> or more powerful magic can.</p>
<p><strong>Vulnerable to Protection from Evil (Ex)</strong> An egophage is treated as a summoned creature for the purpose of determining how it is affected by a <Link to="/spell/protection_from_evil">protection from evil</Link> spell.</p>
<Header sub>Description</Header>
<p>When an <Link to="/monster/intellect_devourer">intellect devourer</Link> gorges heavily on <Link to="/drug/midnight_milk">midnight milk</Link>, it sometimes develops increased psychic abilities, including the ability to fly, and has its stubby clawed legs stretch into tentacles. These sinister aberrations are called egophages, and delight in wearing other creatures like suits to fulfill their demented whims and schemes.</p>
</>};
const _egregore = {title: "Egregore", jsx: <><p><em>Within a swirl of light, a clump of brains wrapped in arcs of light pulses and throbs. The impression of an open eye floats before it.</em></p>
<Header full><span>Egregore</span><span>CR 10</span></Header>
<div className="reduce">
<Info id="monster-egregore--info" source={[["Bestiary 5",104]]} xp="9,600" n large aberration init={7} dv={60} lifesense pcp={21} aura={<><Link to="/umr/mental_static">mental static</Link> (30 ft., DC 22)</>} />
<Defense id="monster-egregore--defense" ac={[27,13,23]} mod="+4 armor, +3 Dex, +1 dodge, +6 natural, +4 shield, -1 size" hp={[123,"13d8+65"]} fh="5" fort="+10" ref="+9" will="+15" amorph dr="5/-" sr="21" />
<Offense id="monster-egregore--offense" sp={30} fl={40} flP="perfect" melee="4 light tentacles +14 (1d8+6)" space={"10"} reach={"10"} specAtt={[["hypnotic oscillation","hypnotic oscillation"],["light tentacles","light tentacles"]]} />
<SpellBlock id="monster-egregore--spells-monster-spellblock-1" sla={{"cl":13,"con":"+19","content":[{"constant":true,"content":<><Link to="/spell/mage_armor">mage armor</Link>, <Link to="/spell/mental_barrier_i">mental barrier I</Link></>},{"will":true,"content":<Link to="/spell/cure_moderate_wounds">cure moderate wounds</Link>}]}} />
<SpellBlock id="monster-egregore--spells-monster-spellblock-2" psy={{"pe":24,"cl":13,"content":<><Link to="/spell/heal">heal</Link> (6 PE), <Link to="/spell/mass_bears_endurance">mass bear's endurance</Link> (6 PE), <Link to="/spell/mass_bulls_strength">mass bull's strength</Link> (6 PE)</>,"con":"+19"}} />
<Stats id="monster-egregore--stats" atts={[22,17,18,19,20,23]} bab={9} cmb={16} cmd={30} feats={["Combat Reflexes","Dodge","Great Fortitude","Improved Initiative","Iron Will","Lightning Reflexes","Toughness"]} skills={{"bluff":{"b":19},"ea":{"b":19},"fly":{"b":25},"intm":{"b":22},"k":{"a":20},"per":{"b":21},"sm":{"b":18},"spc":{"b":20}}} lang={["A","Ce","C","I",";",[<><Link to="/umr/telepathy">telepathy</Link> 100 ft.</>]]} sq="cult mind, psychic conduit" />
<Ecology id="monster-egregore--eco-eco" env="any" org="cult (1 plus 13-20 cultists)" treasure={{"S":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Cult Mind (Su)</strong> An egregore is created by the combined will of a number of cult members equal to its Hit Dice (minimum 13), and can have a maximum number of members in its cult mind equal to its Hit Dice. Each member must be an intelligent, living creature. These cultists pour their collective psychic consciousness into the collaborative creation of the egregore, granting each member a number of advantages. Creating an egregore involves a ritual lasting 1 day and costing 1,000 gp per Hit Die of the egregore. New creatures can be added to the cult mind only if previous members die or depart (see below). Adding a new member to the cult mind requires a ritual lasting 1 day and costing 1,000 gp. All the other members who are still a part of the cult mind must be present during this ritual or it fails.</p>
<p>As long as a member of the cult mind is within 1 mile of the egregore, the egregore can use any of its spell-like abilities on that member, regardless of the spell's range. If a member of the cult mind is targeted by a mind-affecting spell, the egregore can attempt a Will save as well, and the cult member uses the better of the two results. If the cult member still fails, another member of the cult mind can choose to be affected instead.</p>
<p>In addition, the members of the cult mind share a limited form of telepathy: they are able to send and receive simple messages and emotions, much like the empathic link between a wizard and his <Link to="/ability/familiar">familiar</Link>.</p>
<p>If a member of the cult mind is slain or travels more than 1 mile from the egregore, its link to the cult mind is severed, and every other member must succeed at a DC 20 Will save or be <Link to="/misc/sickened">sickened</Link> for 1 round. If the number of members in the cult mind drops below half of the number of Hit Dice possessed by the egregore, the egregore must succeed at a DC 20 Will save or suffer from <Link to="/misc/confusion">confusion</Link>. The egregore can attempt a new save at the start of each round to regain its senses. As long as the remaining number of members is less than half the egregore's Hit Dice, the egregore must attempt a new save each time a member of its cult mind is slain or leaves the cult mind. If the last member of the cult is slain or leaves the cult mind, the egregore dissipates harmlessly in 1d4 rounds.</p>
<p><strong>Hypnotic Oscillation (Sp)</strong> As a standard action, an egregore can weave a <Link to="/spell/hypnotic_pattern">hypnotic pattern</Link> using its bands of light in a 10-foot radius around itself. Members of its cult mind are immune and don't count towards the spell's Hit Die limit, but otherwise this ability functions as the spell.</p>
<p><strong>Light Tentacles (Su)</strong> An egregore produces bands of light powered by its concentrated mental energy. It can cause these bands to become solid and lash out as <Link to="/umr/tentacle_attack">tentacles</Link>. These tentacles follow all the normal rules for tentacles, except that they function as though they had the <Link to="/magic-enh/brilliant_energy">brilliant energy</Link> weapon special ability.</p>
<p><strong>Psychic Conduit (Ex)</strong> Any member of a cult mind can channel any psychic spells it casts through the egregore, as long as the cultist is within 30 feet of the egregore. If a cultist casts spells in this way, treat the egregore as if it were the spellcaster for purposes of the spell's range, point of origin, and other functions that depend on the caster's location. The creature casting the spell still provokes any attacks of opportunity or other negative consequences of casting a spell. The egregore takes 1d6 points of slashing damage per level of spell cast through it in this way as the energy cuts its way out of the creature, though its damage reduction applies. (A 0-level spell channeled through the egregore deals no damage to it.)</p>
<Header sub>Description</Header>
<p>When an especially powerful psychic leads a community of like-minded individuals, that group can pool its collective will together to create an egregore. The egregore is a powerful defender and a focal point for the psychic talents of every member of the group, granting them access to additional magical powers and a communal link.</p>
<p>Though egregores' appearances vary, they typically have a core that resembles a mass of brains, discernible by practitioners of phrenology as bearing characteristics of the brains of those who make up its cult mind. This core projects an image that reflects the ideals for which the egregore was formed - an unblinking eye to represent vigilance, a heraldic shield for protection, or some other stylized emblem to reflect the goals of the group. From this bizarre hovering mass emerges a number of pulsating arcs of light that move in a strange unison, forming an almost mesmerizing pattern with their cadence.</p>
<p>The synchronized synaptic pulses that emit from the egregore's cranial core manifest as elegant arcs of light leaping from one brain-shape to another in a rhythmic dance. The egregore can divert an arc outward, transforming it into a semi-solid band of light it can use to strike its foes. These bands normally pass through objects, but by concentrating more fully, the egregore can transform an arc into an even more solid form capable of manipulating objects.</p>
<p>Typically, the sort of cult that creates an egregore is formed of a small association of individuals under the guidance of a strong-willed psychic leader, who directs the weaker-minded followers in a ritual that combines their latent psychic energy into the creation of a powerful entity to support the goals of the organization.</p>
<p>The egregore itself is a totally separate creature, akin to the eidolons of <Link to="/class/summoner">summoners</Link>, though it seems to be a genuine living being of the Material Plane and not a true outsider. Creating an egregore requires a cult of 13 - one leader and a dozen followers. Larger cults are capable of creating more powerful egregores, with stories circulating of doomsday cults with hundreds of members working together to create an abomination, but subsequently losing control and facing annihilation from their own creation. The egregore exists only as long as the cult that created it, fading back into the psychic ether from which it spawned once the cult is no more.</p>
<p>An egregore is 12 feet across, though the bands of light that extend out from it cause it to fluctuate between an effective size of 13 feet to 15 feet. It weighs only 300 pounds despite its vast size. The brains that make up the egregore's body aren't constructed like human brains, and are far less dense; they seem to take the form of brains only because of the conceptual link they represent. Likewise, the egregore's staring eye and bands of light are more metaphorical than physical.</p>
<Header sub>Egregore Master</Header>
<p>When a larger cult creates an egregore, it is often considerably more dangerous than standard egregores. Use the following guidelines when creating an egregore master. An egregore master is created by combining the will of a powerful cult leader and his followers. While the minimum number of cultists required for the creation of a normal egregore is 13, the more members willing to surrender to the cult mind and the stronger their belief in the ideals of the leader, the more powerful the resultant being.</p>
<p><strong>Hit Dice:</strong> An egregore master always has more Hit Dice than a normal egregore, though after 13 Hit Dice, increasing its Hit Dice by 1 typically requires adding two or more cult members. An egregore master can have a cult of any size (minimum 15).</p>
<p><strong>Challenge Rating:</strong> For every 2 Hit Dice over 13 an egregore master possesses, increase its CR by 1.</p>
<p><strong>Size:</strong> Once an egregore master reaches 15 Hit Dice, its size increases to Huge; at 20 Hit Dice it becomes Gargantuan, and at 25 or more Hit Dice it becomes Colossal.</p>
<p><strong>Armor Class:</strong> An egregore master has a natural armor bonus equal to half its Hit Dice.</p>
<p><strong>Attacks:</strong> For every 3 Hit Dice the egregore master possesses beyond 13, it gains one additional light tentacle attack.</p>
<p><strong>Caster Level:</strong> An egregore master has a caster level equal to its HD or the caster level of the cult leader, whichever is lower.</p>
<p><strong>Psychic Magic:</strong> For every 2 Hit Dice the egregore master possesses above 13, it adds one spell to those it can cast using psychic magic, and its maximum PE increases by an amount equal to the spell's level. An egregore master can choose a spell from any spell list, but it can't choose a spell with a level equal to more than half its Hit Dice. Egregore masters typically choose spells that enhance the powers of their cult minds or protect their members. It is very rare for an egregore master to choose offensive spells.</p>
</>};
const _eidolon_unfettered = {title: "Unfettered Eidolon", jsx: <><p><em>This bizarre amalgam of monstrous parts rampages forth, an eldritch rune seared upon its forehead.</em></p>
<Header full><span>Unfettered Eidolon</span><span>CR 8</span></Header>
<div className="reduce">
<Info id="monster-eidolon_unfettered--info" source={[["Bestiary 3",110]]} xp="4,800" cn medium outsider subs={["extraplanar"]} init={4} dv={60} pcp={13} />
<Defense id="monster-eidolon_unfettered--defense" ac={[26,14,22]} mod="+4 Dex, +12 natural" hp={[85,"10d10+30"]} fort="+7" ref="+11" will="+9" impEva />
<Offense id="monster-eidolon_unfettered--offense" sp={20} cl={20} fl={40} flP="good" melee="bite +14 (1d6+3 plus 1d6 electricity), gore +14 (1d6+3 plus 1d6 electricity), tail slap +12 (1d6+1 plus 1d6 electricity)" space={"5"} reach={"5"} reachP={"10 ft. with bite"} />
<Stats id="monster-eidolon_unfettered--stats" atts={[16,19,14,7,10,11]} bab={10} cmb={13} cmd={27} cmdP="can't be tripped" feats={["Combat Reflexes","Great Fortitude","Iron Will","Multiattack","Toughness","Weapon Finesse"]} skills={{"bluff":{"b":13},"climb":{"b":11},"k":{"p":6},"per":{"b":13},"sm":{"b":8},"stl":{"b":12}}} lang={["C"]} sq="evolution points (bite, climb, energy attacks, flight [2], gore, improved evasion, improved natural armor [2], reach [bite], tail, tail slap)" />
<Ecology id="monster-eidolon_unfettered--eco-eco" env="any" org="solitary" treasure={{"S":false}} />
</div>
<Header sub>Description</Header>
<p>An <Link to="/sidekick/eidolon">eidolon</Link> is usually tied to a <Link to="/class/summoner">summoner</Link> who forges an unbreakable link with a being not of his world, calling upon it and sending it back to its otherworldly home as he needs. When a summoner dies, this link is destroyed and the eidolon is banished back from whence it came. Occasionally, however, this link between eidolon and summoner is unnaturally severed, usually as a result of powerful magic or some bizarre death, freeing the eidolon upon the world. Few can predict what specific events might cause an eidolon to become unfettered, but those that do become stranded on a plane alien to them, released to act as they please. An eidolon that loses its link to its summoner loses its link to its home realm, and many unfettered eidolons go mad, the glowing runes that once represented their bonds burning painful scars onto their bodies. Unfettered eidolons are not quite as powerful as normal eidolons, but without their evolutions tied to their summoners' whims, these bizarre and varied creatures continue to evolve and advance on their own.</p>
<p>Unfettered eidolons can take on many shapes and sizes. The stats presented here are for a Medium unfettered eidolon with the serpentine base form and 17 evolution points, but an eidolon can take almost any form. An unfettered eidolon has one of four base forms: aquatic, biped, quadruped, or serpentine. Each base form determines an eidolon's speed, <Link to="/misc/bad_saves">good and bad saves</Link>, and ability scores, and allots 5 of its starting 8 evolution points to starting <Link to="/ability/evolutions">evolutions</Link> (the bonuses from these starting evolutions are already factored into the starting statistics). Each base form starts at Medium size. An unfettered eidolon can increase to Large size or larger by spending additional evolution points (see below).</p>
<p><strong>Aquatic Base Form:</strong> Speed 20 ft., swim 40 ft.; <strong>Saves</strong> Fort (good), Ref (good), Will (bad); <strong>Ability Scores</strong> Str 16, Dex 12, Con 13, Int 7, Wis 10, Cha 11; <strong>Starting Evolutions</strong> bite, gills, improved natural armor, swim (2).</p>
<p><strong>Biped Base Form:</strong> Speed 30 ft.; <strong>Saves</strong> Fort (good), Ref (bad), Will (good); <strong>Ability Scores</strong> Str 16, Dex 12, Con 13, Int 7, Wis 10, Cha 11; <strong>Starting Evolutions</strong> arms, claws, legs.</p>
<p><strong>Quadruped Base Form:</strong> Speed 40 ft.; <strong>Saves</strong> Fort (good), Ref (good), Will (bad); <strong>Ability Scores</strong> Str 14, Dex 14, Con 13, Int 7, Wis 10, Cha 11; <strong>Starting Evolutions</strong> bite, legs (2).</p>
<p><strong>Serpentine Base Form:</strong> Speed 20 ft., climb 20 ft.; <strong>Saves</strong> Fort (bad), Ref (good), Will (good); <strong>Ability Scores</strong> Str 12, Dex 16, Con 13, Int 7, Wis 10, Cha 11; <strong>Starting Evolutions</strong> bite, climb, reach (bite), tail, tail slap.</p>
<p>An unfettered eidolon begins with 1 Hit Die, a +2 natural armor bonus, and the <Link to="/ability/evasion">evasion</Link> ability. As an unfettered eidolon's Hit Dice increase (see Evolution Points, below), it gains additional bonuses and abilities. At 2 Hit Dice, and every 3 HD thereafter, an unfettered eidolon's base armor bonus increases by +2. This bonus may be split between an armor bonus and a natural armor bonus. Also at 2 Hit Dice, and every 3 HD thereafter, an unfettered eidolon adds +1 to both its Strength and Dexterity scores. At 5 Hit Dice, and every 4 HD thereafter, an unfettered eidolon adds +1 to any one of its ability scores. At 7 Hit Dice, an unfettered eidolon gains <Link to="/feat/multiattack">Multiattack</Link> as a bonus feat.</p>
<Header sub>Evolution Points</Header>
<p>Unfettered eidolons have a number of evolution points (EP) you can use to purchase abilities and defenses in addition to those presented above. An unfettered eidolon starts with 8 EP, regardless of its base form. For each additional EP spent beyond 8, an unfettered eidolon's Hit Dice increase by 1. An unfettered eidolon's CR increases with its Hit Dice using the "outsider" line. Many of these abilities are <Link to="/main/umr">universal monster rules</Link>.</p>
<p><strong>Arms (Ex, 2 EP):</strong> Grows an additional pair of arms and hands. The eidolon must have the Weapon Training evolution in order to use weapons.</p>
<p><strong>Bite (Ex, 1 EP):</strong> Gains a bite attack (1d6 damage).</p>
<p><strong>Burrow (Ex, 3 EP):</strong> Gains a burrow speed equal to 1/2 its base speed. The eidolon must have at least 7 Hit Dice to select this evolution.</p>
<p><strong>Claw (Ex, 1 EP):</strong> Gains two claw attacks (1d4 damage). The eidolon must have arms or legs to take this evolution.</p>
<p><strong>Climb (Ex, 1 EP):</strong> Gains a climb speed equal to its base speed. For each additional EP spent on this evolution, this speed increases by 20 feet.</p>
<p><strong>Energy Attacks (Su, 2 EP):</strong> Choose one energy type (acid, cold, electricity, or fire). All of the eidolon's natural attacks deal +1d6 points of damage of this energy type. The eidolon must have at least 4 Hit Dice to select this evolution.</p>
<p><strong>Flight (Ex, 2 EP):</strong> Grows wings, gaining a fly speed equal to its base speed (good maneuverability). For each additional EP spent, the fly speed increases by 20 feet. The eidolon must have at least 4 Hit Dice to select this evolution.</p>
<p><strong>Gills (Ex, 1 EP):</strong> Can breathe underwater indefinitely in addition to air.</p>
<p><strong>Gore (Ex, 2 EP):</strong> Gains a gore attack (1d6 damage).</p>
<p><strong>Huge (Ex, 6 EP):</strong> Grows to Huge size (adjusting its Strength, Constitution, Dexterity, natural armor bonus, and size modifier to attacks and AC as detailed <Link to="/rule/adding_racial_hit_dice">here</Link>, and increasing the damage of all of its attacks as detailed <Link to="/umr/natural_attacks">here</Link>). If the eidolon has the biped base form, its reach increases to 15 feet (10 feet for all other base forms). The eidolon must have the Large evolution and at least 10 Hit Dice to select this evolution.</p>
<p><strong>Improved Evasion (Ex, 3 EP):</strong> Gains <Link to="/ability/improved_evasion">improved evasion</Link>.</p>
<p><strong>Improved Natural Armor (Ex, 1 EP):</strong> Gains a +2 bonus to its natural armor. This evolution can be taken once if it has 3 or fewer Hit Dice, and one additional time for every 4 additional Hit Dice the eidolon has.</p>
<p><strong>Large (Ex, 4 EP):</strong> Grows to Large size (adjusting its Strength, Constitution, Dexterity, natural armor bonus, and size modifier to attacks and AC as detailed <Link to="/rule/adding_racial_hit_dice">here</Link>, and increasing the damage of all of its attacks as detailed <Link to="/umr/natural_attacks">here</Link>). If the eidolon has the biped base form, it also gains 10-foot reach. The eidolon must have at least 6 Hit Dice to select this evolution.</p>
<p><strong>Legs (Ex, 2 EP):</strong> Grows an additional pair of legs. Each pair of legs increases the eidolon's base speed by 10 feet.</p>
<p><strong>Magical Flight (Su, 4 EP):</strong> Flies by means of magic, gaining a fly speed equal to its base speed (perfect maneuverability). For each additional EP spent, this speed increases by 20 feet. The eidolon must have at least 4 Hit Dice before selecting this evolution.</p>
<p><strong>Reach (Ex, 1 EP):</strong> The reach of one of the eidolon's attacks increases by 5 feet.</p>
<p><strong>Resistance (Ex, 1 EP):</strong> Gains <Link to="/umr/resistance">resistance</Link> 5 against one energy type (acid, cold, electricity, fire, or sonic).</p>
<p><strong>Slam (Ex, 1 EP):</strong> Gains a slam attack (1d8 damage). The eidolon must have arms to take this evolution.</p>
<p><strong>Sting (Ex, 1 EP):</strong> Gains a sting attack (1d4 damage). The eidolon must have a tail to take this evolution.</p>
<p><strong>Swim (Ex, 1 EP):</strong> Gains a swim speed equal to its base speed. For each additional EP spent, this speed increases by 20 feet.</p>
<p><strong>Tail (Ex, 1 EP):</strong> Grows a long, powerful tail, gaining a +2 racial bonus on Acrobatics checks made to balance on a surface.</p>
<p><strong>Tail Slap (Ex, 1 EP):</strong> Gains a tail slap attack (1d6 damage). The eidolon must have a tail to take this evolution.</p>
<p><strong>Weapon Training (Ex, 2 or 4 EP):</strong> Gains <Link to="/feat/simple_weapon_proficiency">Simple Weapon Proficiency</Link> as a bonus feat. For 2 additional EP, it gains proficiency with all martial weapons as well.</p>
<Header sub>Small Eidolons</Header>
<p>The standard eidolon starts as Medium-sized, but Small eidolons are also possible. Compared to a Medium eidolon, a Small eidolon gains +2 to its Dexterity, -4 to its Strength, and -2 to its Constitution. It also gains a +1 size bonus to its AC and on attack rolls, a -1 size penalty on its CMB and to its CMD score, and a +4 size bonus on Stealth skill checks. If it can fly, it gains a +2 size bonus on Fly skill checks. Reduce the damage of all of its attacks by one step.</p>
</>};
const _einherji = {title: "Einherji", jsx: <><p><em>Holding a massive battleaxe and shield, this tall, helmed warrior is grim and fierce.</em></p>
<Header full><span>Einherji</span><span>CR 10</span></Header>
<div className="reduce">
<Info id="monster-einherji--info" source={[["Bestiary 4",84]]} xp="9,600" cn medium outsider subs={["extraplanar"]} init={7} senSpell={["deathwatch"]} dv={60} pcp={18} />
<Defense id="monster-einherji--defense" ac={[24,13,21]} mod="+7 armor, +3 Dex, +4 shield" hp={[123,"13d10+52"]} fh="5" fort="+12" ref="+11" will="+8" def={[["freedom of movement",<em>freedom of movement</em>]]} dr="10/cold iron and lawful" immune="cold, disease, fear, poison" resist="acid 10, electricity 10, fire 10" sr="21" />
<Offense id="monster-einherji--offense" sp={30} melee="+2 battleaxe +19/+14/+9 (1d8+6/&times;3)" ranged="mwk throwing axe +17 (1d6+4)" specAtt={[["challenge of single combat","challenge of single combat"]]} />
<SpellBlock id="monster-einherji--spells-monster-spellblock-1" sla={{"cl":10,"con":"+10","content":[{"constant":true,"content":<><Link to="/spell/deathwatch">deathwatch</Link>, <Link to="/spell/freedom_of_movement">freedom of movement</Link></>},{"will":true,"content":<Link to="/spell/rage">rage</Link>},{"day":3,"content":<Link to="/spell/divine_power">divine power</Link>},{"day":1,"content":<Link to="/spell/heroes_feast">heroes' feast</Link>}]}} />
<Stats id="monster-einherji--stats" atts={[19,16,19,10,14,11]} bab={13} cmb={17} cmd={30} feats={["Combat Reflexes","Improved Initiative",["Improved Iron Will",<sup>B</sup>],"Iron Will","Power Attack","Stand Still","Step Up","Strike Back"]} skills={{"intm":{"b":16},"k":{"e":16},"per":{"b":18}}} lang={["Ce","C"]} sq="battle-trained, thirst for battle" />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Ecology id="monster-einherji--eco-eco" env="any" org="solitary, squad (3-6), or warband (7-16)" treasure={{"T":[["+2","Asm"],["+2","Ahws"],["+2","Wba"],["Mw","W-throwing axe"]]}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Battle-Trained (Ex)</strong> An einherji is proficient with all armor. Armor never impacts an einherji's speed, nor does an einherji take armor check penalties on Ride checks.</p>
<p><strong>Challenge of Single Combat (Ex)</strong> As a standard action, an einherji can choose a single target within sight to challenge by attempting an Intimidate check to demoralize that creature. If the check succeeds, the target is <Link to="/misc/shaken">shaken</Link> and the einherji gains a +2 bonus on attack rolls and damage rolls against that target. For the duration of the challenge, the einherji must attack that target, and takes a -2 penalty to its AC, except against attacks made by the target. The challenge (and the shaken condition) remains in effect until the target successfully attacks the einherji in melee combat, the target is dead or unconscious, or the combat ends.</p>
<p><strong>Thirst for Battle (Su)</strong> As long as an einherji is in battle (i.e., each round it makes an attack roll), it gains <Link to="/umr/fast_healing">fast healing</Link> 5. An einherji loses this ability outside of combat or if knocked unconscious.</p>
<Header sub>Description</Header>
<p>Some warriors who die glorious deaths in battle find that there is a call for their skill and prowess even after death. Chosen by <Link to="/monster/valkyrie">valkyries</Link> from among the slain on the battlefield, they become einherjar, outsiders who fight for the gods and other powerful extraplanar beings in battles across the multiverse.</p>
<p>Like valkyries, einherjar can serve a variety of deities, not just gods of war, conflict, and valor, but also those of love, beauty, life, and others not thought of as combative. Einherjar pride themselves on prowess in battle, and forever seek to prove themselves by challenging worthy foes.</p>
<p>Einherjar can be either male or female, and normally appear as muscled, battle-hardened humans, dwarves, or elves. A typical einherji stands 7 feet tall and weighs around 300 pounds.</p>
</>};
const _ekekeh = {title: "Ekekeh", jsx: <><p><em>This creature looks like a gilled dolphin with a row of spiral horns down its back, arcs of electricity crackling between them.</em></p>
<Header full><span>Ekekeh</span><span>CR 4</span></Header>
<div className="reduce">
<Info id="monster-ekekeh--info" source={[["The First World, Realm of the Fey",60]]} xp="1,200" ng large fey subs={["aquatic"]} init={7} dv={60} llv lifesense pcp={9} />
<Defense id="monster-ekekeh--defense" ac={[15,12,12]} mod="+3 Dex, +3 natural, -1 size" hp={[33,"6d6+12"]} fort="+4" ref="+8" will="+5" def={[["bioelectric shield","bioelectric shield"]]} dr="5/cold iron" immune="electricity" resist="cold 5" />
<Offense id="monster-ekekeh--offense" sw={80} spExtra="telekinetic levitation" melee="bite +6 (1d8+1 plus 3d6 electricity)" space={"10"} reach={"5"} />
<SpellBlock id="monster-ekekeh--spells-monster-spellblock-1" sla={{"cl":5,"con":"+6","content":[{"constant":true,"content":<Link to="/spell/mage_hand">mage hand</Link>},{"day":3,"content":<><Link to="/spell/lightning_bolt">lightning bolt</Link> (DC 14)</>}]}} />
<Stats id="monster-ekekeh--stats" atts={[12,16,15,12,11,13]} bab={3} cmb={5} cmd={18} cmdP="can't be tripped" feats={["Improved Initiative","Weapon Finesse",["Weapon Focus"," (BIte)"]]} skills={{"acro":{"b":12},"diplo":{"b":10},"stl":{"b":8},"swim":{"b":18},"umd":{"b":8}}} lang={["Aq",["Ekekeh"],["First Speech"]]} />
<Ecology id="monster-ekekeh--eco-eco" env="any oceans (First World)" org="solitary, pair, family (3-6), or pod (7-18)" treasure={{"S":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Bioelectric Shield (Ex)</strong> At will, an ekekeh can activate an electrical field generated by its body as a swift action. While the bioelectric shield is active, any creature attacking the ekekeh with a melee or natural weapon takes 3d6 points of electricity damage (Reflex DC 15 half). This ability can remain active indefinitely, but most ekekehs employ it only when they feel endangered; deactivating the field is a free action. The save DC is Constitution-based.</p>
<p><strong>Telekinetic Levitation (Su)</strong> An ekekeh has the ability to float in the air, moving itself along with pure thought. This functions as <Link to="/spell/air_walk">air walk</Link>, but the ekekeh can move at only a quarter of its swim speed (normally 20 feet), and can never rise more than 10 feet above the ground or a structure capable of supporting its weight. It cannot climb vertical surfaces or float over water.</p>
<Header sub>Description</Header>
<p>Ekekehs are intelligent aquatic creatures similar to <Link to="/monster/dolphin">dolphins</Link>, with a row of horns that runs down their backs. Filled with organic metal deposits, these horns both sense the electrical fields of living creatures and channel the ekekehs' own energy into devastating attacks. Contemplative and fun-loving, ekekehs hold themselves up as proof that humanoids don't have a monopoly on civilization. While at home in the open ocean, ekekehs also build grand underwater cities, working magic and employing tools via the same limited telekinetic abilities that allow them to float over dry land, where their gills process air as well as water. The slow speed and limited maneuverability of this flight strikes most ekekehs as terribly boring, if not downright embarrassing, yet it is still common for residents of coastal cities to see ekekehs floating slowly through the marketplace, their belongings stuffed into specially fitted packs or dangling from broad leather utility belts.</p>
<p>An average ekekeh is 10 feet long and weighs 1,000 pounds.</p>
</>};
const _elder_thing = {title: "Elder Thing", jsx: <><p><em>This strange being has a star-shaped head and numerous writhing appendages arranged radially around its barrel-shaped body.</em></p>
<Header full><span>Elder Thing</span><span>CR 5</span></Header>
<div className="reduce">
<Info id="monster-elder_thing--info" source={[["Bestiary 4",85],["Pathfinder #46: Wake of the Watcher",82]]} xp="1,600" ln medium aberration subs={["aquatic"]} init={2} dv={60} aav pcp={13} />
<Defense id="monster-elder_thing--defense" ac={[18,12,16]} mod="+2 Dex, +6 natural" hp={[59,"7d8+28"]} fort="+8" ref="+4" will="+8" immune="cold" resist="fire 10" />
<Offense id="monster-elder_thing--offense" sp={30} fl={20} flP="clumsy" sw={40} melee={<>5 tentacles +7 (1d4+2 plus <Link to="/umr/grab">grab</Link>)</>} constrict="1d4+2" />
<Stats id="monster-elder_thing--stats" atts={[15,14,19,20,16,17]} bab={5} cmb={7} cmbP="+11 grapple" cmd={19} cmdP="can't be tripped" feats={["Combat Expertise","Combat Reflexes","Endurance","Great Fortitude"]} skills={{"dd":{"b":9},"fly":{"b":4},"heal":{"b":10},"umd":{"b":10}}} lang={[["Elder Thing"]]} sq={<><Link to="/umr/amphibious">amphibious</Link>, hibernation, limited starflight, <Link to="/umr/no_breath">no breath</Link></>} />
<Ecology id="monster-elder_thing--eco-eco" env="any" org="solitary, pair, pod (3-8), or expedition (9-16)" treasure={{"S":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Hibernation (Ex)</strong> An elder thing can enter a state of hibernation at will; doing so takes 1 minute. While in this state, it can take no actions and is effectively <Link to="/misc/helpless">helpless</Link>, as if it were in a deep sleep. An elder thing can remain in hibernation for as long as it wishes - while in this state, it does not need to eat or drink, nor does it age. Time effectively stands still for a hibernating elder thing. If it is jostled or damaged while hibernating, an elder thing can attempt a DC 20 Will save. If it succeeds, it awakens in 2d4 rounds. Otherwise, it takes 1d4 days to awaken from hibernation. An elder thing can set the length of its hibernation when it first enters this state, so that it can awaken after a set amount of time has passed. When awakening at a set time in this manner, an elder thing needs only 1d3 rounds to rouse itself, with no Will saving throw necessary.</p>
<p><strong>Limited Starflight (Ex)</strong> An elder thing can survive in the void of outer space, and its wings allow it to use its fly speed in that environment despite the lack of air. Unlike creatures with full starflight, an elder thing's ability to fly in outer space does not allow it to reach unusually high speeds - an elder thing that wishes to travel from one planet to another typically calculates the distance and then hibernates for the majority of the journey, relying on its momentum and inertia to carry it to its destination while it slumbers along the way.</p>
<Header sub>Description</Header>
<p>Known by various names on various worlds, but most often as "elder things" or "old ones," these alien creatures are interested in creating lasting works of art, architecture, and even life (such as the dreaded <Link to="/monster/shoggoth">shoggoths</Link>). They possess a boundless capacity for war and egotism.</p>
<p>A typical elder thing is 6 feet tall from head to foot, with a 7-foot wingspan. Surprisingly heavy for its size, an elder thing generally weighs about 450 pounds.</p>
</>};
const _elder_wyrm = {title: "Elder Wyrm", jsx: <><p><em>This mighty, two-headed dragon has a six-legged serpentine body that ends in a writhing, whip-like tail.</em></p>
<Header full><span>Elder Wyrm</span><span>CR 24</span></Header>
<div className="reduce">
<Info id="monster-elder_wyrm--info" source={[["Bestiary 6",108]]} xp="1,228,800" n colossal dragon init={16} senSpell={["true seeing"]} dv={300} llv scent pcp={49} aura={<><Link to="/umr/frightful_presence">frightful presence</Link> (300 ft., DC 33)</>} />
<Defense id="monster-elder_wyrm--defense" ac={[42,14,30]} mod="+12 Dex, +28 natural, -8 size" hp={[528,"32d12+320"]} fh="20" fort="+28" ref="+30" will="+24" dr="20/epic" immune="acid, charm, curses, electricity, fear, paralysis, petrification, sleep" resist="cold 30, fire 30, sonic 30" sr="35" />
<Offense id="monster-elder_wyrm--offense" sp={50} cl={50} fl={250} flP="poor" sw={50} melee="2 bites +40 (4d8+16/19-20 plus myth-drinker), 2 claws +40 (2d8+16), 2 tail slaps +35 (4d6+8/19-20)" space={"30"} reach={"30"} specAtt={[["breath weapon","breath weapon"],["godslayer","godslayer"],["swift tail","swift tail"],["synchronized strike","synchronized strike"],["tail snap","tail snap"]]} rend="2 bites, 4d8+16 plus myth-drinker" />
<SpellBlock id="monster-elder_wyrm--spells-monster-spellblock-1" sla={{"cl":20,"con":"+27","content":[{"constant":true,"content":<Link to="/spell/true_seeing">true seeing</Link>},{"per":"month","content":<Link to="/spell/miracle">miracle</Link>}]}} />
<SpellBlock id="monster-elder_wyrm--spells-monster-spellblock-2" known={{"cl":20,"con":"+27","known":"Sorcerer","l9":[6,<><Link to="/spell/dominate_monster">dominate monster</Link> (DC 26), <Link to="/spell/foresight">foresight</Link>, <Link to="/spell/time_stop">time stop</Link></>],"l8":[6,<><Link to="/spell/greater_prying_eyes">greater prying eyes</Link>, <Link to="/spell/maze">maze</Link>, <Link to="/spell/sunburst">sunburst</Link> (DC 25)</>],"l7":[7,<><Link to="/spell/greater_arcane_sight">greater arcane sight</Link>, <Link to="/spell/greater_scrying">greater scrying</Link> (DC 24), <Link to="/spell/greater_teleport">greater teleport</Link></>],"l6":[7,<><Link to="/spell/disintegrate">disintegrate</Link> (DC 23), <Link to="/spell/mass_suggestion">mass suggestion</Link> (DC 23), <Link to="/spell/shadow_walk">shadow walk</Link> (DC 23)</>],"l5":[7,<><Link to="/spell/cone_of_cold">cone of cold</Link> (DC 22), <Link to="/spell/feeblemind">feeblemind</Link> (DC 22), <Link to="/spell/hold_monster">hold monster</Link> (DC 22), <Link to="/spell/wall_of_force">wall of force</Link></>],"l4":[7,<><Link to="/spell/arcane_eye">arcane eye</Link>, <Link to="/spell/bestow_curse">bestow curse</Link> (DC 21), <Link to="/spell/dimension_door">dimension door</Link>, <Link to="/spell/stone_shape">stone shape</Link></>],"l3":[8,<><Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link>, <Link to="/spell/dispel_magic">dispel magic</Link>, <Link to="/spell/haste">haste</Link>, <Link to="/spell/ray_of_exhaustion">ray of exhaustion</Link> (DC 20)</>],"l2":[8,<><Link to="/spell/blur">blur</Link>, <Link to="/spell/glitterdust">glitterdust</Link> (DC 19), <Link to="/spell/invisibility">invisibility</Link>, <Link to="/spell/mirror_image">mirror image</Link>, <Link to="/spell/whispering_wind">whispering wind</Link></>],"l1":[8,<><Link to="/spell/alarm">alarm</Link>, <Link to="/spell/comprehend_languages">comprehend languages</Link>, <Link to="/spell/expeditious_retreat">expeditious retreat</Link>, <Link to="/spell/shield">shield</Link>, <Link to="/spell/unseen_servant">unseen servant</Link></>],"l0":[0,<><Link to="/spell/arcane_mark">arcane mark</Link>, <Link to="/spell/bleed">bleed</Link> (DC 17), <Link to="/spell/dancing_lights">dancing lights</Link>, <Link to="/spell/detect_magic">detect magic</Link>, <Link to="/spell/ghost_sound">ghost sound</Link> (DC 17), <Link to="/spell/mage_hand">mage hand</Link>, <Link to="/spell/message">message</Link>, <Link to="/spell/prestidigitation">prestidigitation</Link>, <Link to="/spell/read_magic">read magic</Link></>]}} />
<Stats id="monster-elder_wyrm--stats" atts={[43,34,30,17,22,25]} bab={32} cmb={56} cmd={78} cmdP="86 vs. trip" feats={["Alertness","Arcane Strike","Combat Reflexes","Empower Spell","Flyby Attack","Greater Spell Penetration","Greater Vital Strike","Hover",["Improved Critical"," (bite, tail slap)"],"Improved Initiative","Improved Vital Strike","Lunge","Power Attack","Quicken Spell","Vital Strike"]} skills={{"acro":{"b":44},"bluff":{"b":42},"climb":{"b":24},"diplo":{"b":42},"fly":{"b":0},"umd":{"b":42}}} racial="+4 Perception" lang={["A","Ak","Ce","C","D","I","U"]} sq="impossible coordination" />
<Ecology id="monster-elder_wyrm--eco-eco" env="any" org="solitary" treasure={{"T":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Breath Weapon (Su)</strong> Each of an elder wyrm's heads can expel a <Link to="/umr/breath_weapon">breath weapon</Link>, each of which can be used once every 1d4 rounds. The first breath weapon is a 500-foot line of lighting that deals 20d10 points of electricity damage (Reflex DC 36 half). The second is a 250-foot cone of caustic gas that deals 20d10 points of acid damage (Fortitude DC 36 half). If an elder wyrm uses both breath weapons simultaneously - such as by readying an action with its impossible coordination ability - the electrical charge causes the gas to explode; rather than dealing acid or electricity damage, the explosion instead deals 40d10 points of fire damage to all creatures in a 250-foot cone (Reflex DC 36 half) and causes damaged creatures to <Link to="/rule/catch_fire">catch fire</Link>, taking 6d10 points of fire damage each round for 1d4 rounds, unless they succeed at a second DC 36 Reflex save. The save DCs are Constitution-based.</p>
<p><strong>Godslayer (Ex)</strong> An elder wyrm's natural attacks overcome damage reduction and regeneration as per epic and magic weapons. As a swift action, the elder wyrm can grant its natural weapons one alignment property and one material property for this purpose. These secondary properties last for 1 hour or until the elder wyrm uses this ability again to select new properties.</p>
<p><strong>Impossible Coordination (Ex)</strong> An elder wyrm can plan and execute a vast number of schemes in a short time. When an encounter starts, an elder wyrm rolls twice for initiative. Once per minute, it can act on both initiative counts and can use the <Link to="/rule/delay">delay</Link> or <Link to="/rule/ready">ready</Link> actions independently at each initiative. On other rounds, it uses the higher initiative count.</p>
<p><strong>Myth-Drinker (Su)</strong> An elder wyrm's bite and rend attacks deal an additional 2d6 points of damage to creatures with mythic tiers or the mythic subtype. When an elder wyrm confirms a critical hit with its bite attack against such a target, the target loses 1d4 uses of mythic power. For each use of mythic power lost, the elder wyrm either regains 2d10 hit points or can attempt a saving throw against one ongoing effect; on a successful save, the effect ends immediately. At the GM's discretion, this ability could apply to mighty albeit non-mythic divine creations, such as <Link to="/family/behemoth">behemoths</Link>, <Link to="/family/demodand">demodands</Link>, <Link to="/family/titan">titans</Link>, and outsiders whose CR is 20 or higher; in this case the elder wyrm benefits as though the target had lost two uses of mythic power.</p>
<p><strong>Spells (Sp)</strong> An elder wyrm casts spells as per a 20th-level sorcerer.</p>
<p><strong>Swift Tail (Ex)</strong> An elder worm can strike twice in a round with its tail slap when it makes a full attack.</p>
<p><strong>Synchronized Strike (Ex)</strong> An elder wyrm's two heads work in perfect concert when making attacks, snaking apart to strike targets from opposite directions. Once per round, the elder wyrm can perform two bite attacks as an attack action, such as when performing a <Link to="/rule/charge">charge</Link> or making an attack or opportunity. When an elder wyrm uses both bite attacks against a creature that is at least one size category smaller than it is, the elder wyrm is treated as if both heads were <Link to="/rule/flanking">flanking</Link> the target for the purposes of resolving the attacks.</p>
<p><strong>Tail Snap (Su)</strong> As a full-round action, an elder wyrm can make two tail slap attacks against a single creature it can reach. If one tail slap hits, the target must also succeed at a DC 36 Fortitude save or be <Link to="/misc/stunned">stunned</Link> for 1 round. If both hit, the tail's impact causes a 10-foot-radius <Link to="/misc/burst">burst</Link> of concussive force centered on the target, dealing 10d10 points of sonic damage to all creatures in the area and stunning them for 1 round (Fortitude DC 36 negates the stunned effect). The elder wyrm is unharmed by this effect. The save DC is Constitution-based</p>
<Header sub>Description</Header>
<p>Over the eons, gods and would-be divinities have unleashed countless monstrosities on the multiverse in vain attempts to create worshipers or punish oath breakers, or just out of spite. Many such beasts outlive their usefulness and run amok, defying their creators' commands to stand down.</p>
<p>Elder wyrms were once divine avengers, granted life in order to seek and destroy rogue agents of the gods and other such abominations. After annihilating several condemned species, the dragons broke free from the gods' control. Despite this, elder wyrms have a flexible but insistent sense of justice instilled in them by their divine mandate, and acting as the judge, jury, and executioner of mighty foes scratches an existential itch. The few elder wyrms that live on a given planet spend much of their time dozing in secluded places, waking occasionally to hunt or seek out injustices to punish based on their individual interests and moods. This cycle of inactivity leaves most elder wyrms woefully ill-informed of current events, though once they have cause to pay attention, their keen intellects and powerful divinations allow them to gather and process several centuries of news in short order.</p>
<p>Because they wake so rarely, elder wyrms often become centerpieces of local legends and cautionary tales. Especially convincing or foolhardy heroes might even seek out an elder wyrm in order to direct its vengeful wrath against a specific target, though the wyrm is just as likely to determine that the heroes are more worthy of destruction than their targets. Having two heads does, after all, make elder wyrms better equipped to see both sides of an issue and render judgment. Each head can think independently and seamlessly share control of the body, allowing the dragon to perform dizzying acts of synchronicity. Often the two heads' personalities diverge, leading to good-natured bickering and debate between the two, much to the dread of anxious onlookers.</p>
<p>An elder wyrm is 100 feet long and weighs 25,000 pounds.</p>
</>};
const _aether_elemental = {hasJL:true,title: "Aether Elemental", jsx: <><div className="jumpList" id="monster-aether_elemental-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="monster-aether_elemental-medium-aether-elemental">Medium Aether Elemental</InnerLink></li><li><InnerLink toTop to="monster-aether_elemental-large-aether-elemental">Large Aether Elemental</InnerLink></li><li><InnerLink toTop to="monster-aether_elemental-huge-aether-elemental">Huge Aether Elemental</InnerLink></li><li><InnerLink toTop to="monster-aether_elemental-greater-aether-elemental">Greater Aether Elemental</InnerLink></li><li><InnerLink toTop to="monster-aether_elemental-elder-aether-elemental">Elder Aether Elemental</InnerLink></li></ul></div><p><em>This strange entity is formed from interwoven, translucent threads of an unusual multicolored material.</em></p>
<div style={{clear:"both"}}></div><Header full><span>Small Aether Elemental</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-aether_elemental--info" source={[["Bestiary 5",106]]} xp="400" n small outsider subs={["aether","elemental","extraplanar"]} init={6} dv={60} blindsense={60} pcp={5} />
<Defense id="monster-aether_elemental--defense" ac={[14,14,12]} mod="+1 deflection, +2 Dex, +1 size" hp={[13,"2d10+2"]} fort="+4" ref="+5" will="+0" def={[["telekinetic deflection","telekinetic deflection"]]} immune={<><Link to="/subtype/elemental">elemental</Link> traits, force</>} />
<Offense id="monster-aether_elemental--offense" fl={60} flP="good" melee="slam +4 (1d4+1)" ranged="telekinetic throw +5 (1d8+2)" specAtt={[["telekinetic maneuver","telekinetic maneuver"],["telekinetic throw DC 12","telekinetic throw (DC 12)"]]} />
<Stats id="monster-aether_elemental--stats" atts={[12,15,12,4,11,11]} bab={2} cmb={2} cmd={15} feats={[["Improved Initiative",<sup>B</sup>],"Point-Blank Shot"]} skills={{"acro":{"b":6},"fly":{"b":12},"per":{"b":5},"stl":{"b":11}}} lang={["Aq","Au","Ig","T"]} sq="telekinetic invisibility" />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Ecology id="monster-aether_elemental--eco-eco" env={<>any (<Link to="/rule/ethereal_plane">Ethereal Plane</Link>)</>} org="solitary, pair, or gang (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Telekinetic Invisibility (Ex)</strong> An aether elemental's body bends light and dampens sound waves. This works as the kineticist utility wild talent <Link to="/kinetic/telekinetic_invisibility">telekinetic invisibility</Link>, except that it is constant and doesn't end when the elemental attacks. As this ability is inherent, it is not subject to effects such as <Link to="/spell/invisibility_purge">invisibility purge</Link>.</p>
<p><strong>Telekinetic Throw (Ex)</strong> An aether elemental can fling a creature or object (with a maximum range of 480 feet). A creature receives a Fortitude save to avoid being thrown (the save DC is Constitution-based). The telekinetic throw deals the listed damage to both the thrown creature or object and the target. The aether elemental can throw a creature or object that weighs at most 50 pounds per Hit Die the elemental possesses.</p>
<p><strong>Telekinetic Deflection (Su)</strong> An aether elemental gains a deflection bonus to its AC equal to its Constitution modifier.</p>
<p><strong>Telekinetic Maneuver (Su)</strong> An aether elemental can attempt a ranged combat maneuver check, as per <Link to="/spell/telekinesis">telekinesis</Link>, with a CMB equal to its Hit Dice + its Dexterity modifier.</p>
<Header sub>Description</Header>
<p>Aether elementals are made of living aether, the rare fifth element that arises on the Ethereal Plane near the borders of the Elemental Planes.</p>
<p><strong>Family:</strong> <Link to="/family/elemental">Elemental</Link></p>
<Header full id="monster-aether_elemental-medium-aether-elemental"><span>Medium Aether Elemental</span><span>CR 3</span></Header>
<div className="reduce">
<Info id="monster-aether_elemental--info" source={[["Bestiary 5",106]]} xp="800" n medium outsider subs={["aether","elemental","extraplanar"]} init={8} dv={60} blindsense={60} pcp={7} />
<Defense id="monster-aether_elemental--defense" ac={[17,17,13]} mod="+3 deflection, +4 Dex" hp={[34,"4d10+12"]} fort="+7" ref="+8" will="+3" def={[["telekinetic deflection","telekinetic deflection"]]} immune={<><Link to="/subtype/elemental">elemental</Link> traits, force</>} />
<Offense id="monster-aether_elemental--offense" fl={60} flP="good" melee="slam +6 (1d6+3)" ranged="telekinetic throw +8 (2d6+2)" specAtt={[["telekinetic maneuver","telekinetic maneuver"],["telekinetic throw DC 16","telekinetic throw (DC 16)"]]} />
<Stats id="monster-aether_elemental--stats" atts={[14,19,16,4,11,11]} bab={4} cmb={6} cmd={23} feats={[["Improved Initiative",<sup>B</sup>],"Iron Will","Point-Blank Shot"]} skills={{"acro":{"b":9},"fly":{"b":13},"per":{"b":7},"stl":{"b":11}}} lang={["Aq","Au","Ig","T"]} sq="telekinetic invisibility" />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-aether_elemental-large-aether-elemental"><span>Large Aether Elemental</span><span>CR 5</span></Header>
<Info id="monster-aether_elemental--info" source={[["Bestiary 5",106]]} xp="1,600" n large outsider subs={["aether","elemental","extraplanar"]} init={11} dv={60} blindsense={60} pcp={11} />
<Defense id="monster-aether_elemental--defense" ac={[20,20,13]} mod="+4 deflection, +7 Dex, -1 size" hp={[76,"8d10+32"]} fort="+10" ref="+13" will="+4" def={[["telekinetic deflection","telekinetic deflection"]]} dr="5/-" immune={<><Link to="/subtype/elemental">elemental</Link> traits, force</>} />
<Offense id="monster-aether_elemental--offense" fl={60} flP="good" melee="2 slams +10 (1d8+3)" ranged="telekinetic throw +14 (4d6+6)" space={"10"} reach={"10"} specAtt={[["telekinetic maneuver","telekinetic maneuver"],["telekinetic throw DC 16","telekinetic throw (DC 16)"]]} />
<Stats id="monster-aether_elemental--stats" atts={[16,25,18,6,11,11]} bab={8} cmb={12} cmd={33} feats={[["Improved Initiative",<sup>B</sup>],"Improved Iron Will","Iron Will","Point-Blank Shot","Precise Shot"]} skills={{"acro":{"b":18},"fly":{"b":20},"per":{"b":11},"stl":{"b":14}}} lang={["Aq","Au","Ig","T"]} sq="telekinetic invisibility" />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-aether_elemental-huge-aether-elemental"><span>Huge Aether Elemental</span><span>CR 7</span></Header>
<Info id="monster-aether_elemental--info" source={[["Bestiary 5",106]]} xp="3,200" n huge outsider subs={["aether","elemental","extraplanar"]} init={13} dv={60} blindsense={60} pcp={13} />
<Defense id="monster-aether_elemental--defense" ac={[22,22,13]} mod="+5 deflection, +9 Dex, -2 size" hp={[105,"10d10+50"]} fort="+12" ref="+16" will="+5" def={[["telekinetic deflection","telekinetic deflection"]]} dr="5/-" immune={<><Link to="/subtype/elemental">elemental</Link> traits, force</>} />
<Offense id="monster-aether_elemental--offense" fl={60} flP="good" melee="2 slams +12 (2d6+4)" ranged="telekinetic throw +17 (6d6+7/19-20)" space={"15"} reach={"15"} specAtt={[["telekinetic maneuver","telekinetic maneuver"],["telekinetic throw DC 17","telekinetic throw (DC 17)"]]} />
<Stats id="monster-aether_elemental--stats" atts={[18,29,20,6,11,11]} bab={10} cmb={16} cmd={40} feats={[["Improved Critical"," (telekinetic throw)"],["Improved Initiative",<sup>B</sup>],"Improved Iron Will","Iron Will","Point-Blank Shot","Precise Shot"]} skills={{"acro":{"b":22},"fly":{"b":22},"per":{"b":13},"stl":{"b":14}}} lang={["Aq","Au","Ig","T"]} sq="telekinetic invisibility" />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-aether_elemental-greater-aether-elemental"><span>Greater Aether Elemental</span><span>CR 9</span></Header>
<Info id="monster-aether_elemental--info" source={[["Bestiary 5",107]]} xp="6,400" n huge outsider subs={["aether","elemental","extraplanar"]} init={14} dv={60} blindsense={60} pcp={16} />
<Defense id="monster-aether_elemental--defense" ac={[24,24,14]} mod="+6 deflection, +10 Dex, -2 size" hp={[149,"13d10+78"]} fort="+14" ref="+18" will="+6" def={[["telekinetic deflection","telekinetic deflection"]]} dr="10/-" immune={<><Link to="/subtype/elemental">elemental</Link> traits, force</>} />
<Offense id="monster-aether_elemental--offense" fl={60} flP="good" melee="2 slams +16 (2d8+5)" ranged="telekinetic throw +21 (8d6+7/19-20)" space={"15"} reach={"15"} specAtt={[["telekinetic maneuver","telekinetic maneuver"],["telekinetic throw DC 18","telekinetic throw (DC 18)"]]} />
<Stats id="monster-aether_elemental--stats" atts={[20,31,22,8,11,11]} bab={13} cmb={20} cmd={46} feats={["Deadly Aim",["Improved Critical"," (telekinetic throw)"],["Improved Initiative",<sup>B</sup>],"Improved Iron Will","Improved Precise Shot","Iron Will","Point-Blank Shot","Precise Shot"]} skills={{"acro":{"b":26},"fly":{"b":26},"k":{"p":15},"per":{"b":16},"stl":{"b":18}}} lang={["Aq","Au","Ig","T"]} sq="telekinetic invisibility" />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-aether_elemental-elder-aether-elemental"><span>Elder Aether Elemental</span><span>CR 11</span></Header>
<Info id="monster-aether_elemental--info" source={[["Bestiary 5",107]]} xp="12,800" n huge outsider subs={["aether","elemental","extraplanar"]} init={15} dv={60} blindsense={60} pcp={19} />
<Defense id="monster-aether_elemental--defense" ac={[26,26,15]} mod="+7 deflection, +11 Dex, -2 size" hp={[200,"16d10+112"]} fort="+17" ref="+21" will="+7" def={[["telekinetic deflection","telekinetic deflection"]]} dr="10/-" immune={<><Link to="/subtype/elemental">elemental</Link> traits, force</>} />
<Offense id="monster-aether_elemental--offense" fl={60} flP="good" melee="2 slams +20 (2d8+6)" ranged="telekinetic throw +25 (10d6+7/19-20)" space={"15"} reach={"15"} specAtt={[["telekinetic maneuver","telekinetic maneuver"],["telekinetic throw DC 19","telekinetic throw (DC 19)"]]} />
<Stats id="monster-aether_elemental--stats" atts={[22,33,24,10,11,11]} bab={16} cmb={24} cmd={51} feats={["Combat Reflexes","Deadly Aim",["Improved Critical"," (telekinetic throw)"],["Improved Initiative",<sup>B</sup>],"Improved Iron Will","Improved Precise Shot","Iron Will","Point-Blank Shot","Precise Shot"]} skills={{"acro":{"b":30},"ea":{"b":30},"fly":{"b":30},"k":{"p":19},"per":{"b":19},"stl":{"b":22}}} lang={["Aq","Au","Ig","T"]} sq="telekinetic invisibility" />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
</div>
</>};
const _air_elemental = {hasJL:true,title: "Air Elemental", jsx: <><div className="jumpList" id="monster-air_elemental-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="monster-air_elemental-small-air-elemental">Small Air Elemental</InnerLink></li><li><InnerLink toTop to="monster-air_elemental-medium-air-elemental">Medium Air Elemental</InnerLink></li><li><InnerLink toTop to="monster-air_elemental-large-air-elemental">Large Air Elemental</InnerLink></li><li><InnerLink toTop to="monster-air_elemental-huge-air-elemental">Huge Air Elemental</InnerLink></li><li><InnerLink toTop to="monster-air_elemental-greater-air-elemental">Greater Air Elemental</InnerLink></li><li><InnerLink toTop to="monster-air_elemental-elder-air-elemental">Elder Air Elemental</InnerLink></li></ul></div><p><em>This cloud-like creature has dark hollows reminiscent of eyes and a mouth, and a howling wind whips it into ominous shapes.</em></p>
<Header full><span>Small Air Elemental</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-air_elemental--info" source={[["Pathfinder RPG Bestiary",120]]} xp="400" n small outsider subs={["air","elemental","extraplanar"]} init={7} dv={60} pcp={4} />
<Defense id="monster-air_elemental--defense" ac={[17,14,14]} mod="+3 Dex, +3 natural, +1 size" hp={[13,"2d10+2"]} fort="+4" ref="+6" will="+0" def={[["air mastery","air mastery"]]} immune={<><Link to="/subtype/elemental">elemental</Link> traits</>} />
<Offense id="monster-air_elemental--offense" fl={100} flP="perfect" melee="slam +6 (1d4+1)" whirlwind="DC 12" />
<Stats id="monster-air_elemental--stats" atts={[12,17,12,4,11,11]} bab={2} cmb={2} cmd={15} feats={["Flyby Attack",["Improved Initiative",<sup>B</sup>],["Weapon Finesse",<sup>B</sup>]]} skills={{"acro":{"b":7},"ea":{"b":7},"fly":{"b":17},"k":{"p":1},"per":{"b":4},"stl":{"b":11}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Ecology id="monster-air_elemental--eco-eco" env={<Link to="/rule/plane_of_air">Plane of Air</Link>} org="solitary, pair, or gang (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Air Mastery (Ex)</strong> Airborne creatures take a -1 penalty on attack and damage rolls against an air elemental.</p>
<Header sub>Description</Header>
<p>Air elementals are fast, flying creatures made of living air. Primitive and territorial, they resent being summoned or doing the bidding of mortals, and much prefer to spend their time on the <Link to="/rule/plane_of_air">Plane of Air</Link>, swooping and racing through the endless skies.</p>
<p>Although all air elementals of a similar size have identical statistics, the exact appearance of an air elemental can vary wildly between individuals. One might be an animated vortex of wind and smoke, while another might be a smoky bird-like creature with glowing eyes and wind for wings.</p>
<p>An air elemental prefers to attack flying or otherwise airbone targets, not only because its mastery over flight gives it a slight advantage, but also because it detests the thought of having to touch the ground. An air elemental can move underwater, and although it is an elemental and thus runs no risk of drowning, it has no ranks in <Link to="/skill/swim">Swim</Link> and loses much of its speed and mobility when underwater.</p>
<ScrollContainer id="monster-air_elemental--table-0"><table>
<thead>
<tr>
<th>Elemental</th>
<th>Height</th>
<th>Weight</th>
<th>Whirlwind/Vortex Save DC</th>
<th>Whirlwind/Vortex Height</th>
</tr>
</thead>
<tbody><tr>
<td>Small</td>
<td>4 ft.</td>
<td>1 lb.</td>
<td>12</td>
<td>10-20 ft.</td>
</tr>
<tr>
<td>Medium</td>
<td>8 ft.</td>
<td>2 lbs.</td>
<td>14</td>
<td>10-30 ft.</td>
</tr>
<tr>
<td>Large</td>
<td>16 ft.</td>
<td>4 lbs.</td>
<td>18</td>
<td>10-40 ft.</td>
</tr>
<tr>
<td>Huge</td>
<td>32 ft.</td>
<td>8 lbs.</td>
<td>22</td>
<td>10-50 ft.</td>
</tr>
<tr>
<td>Greater</td>
<td>36 ft.</td>
<td>10 lbs.</td>
<td>23</td>
<td>10-60 ft.</td>
</tr>
<tr>
<td>Elder</td>
<td>40 ft.</td>
<td>12 lbs.</td>
<td>27</td>
<td>10-60 ft.</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Family:</strong> <Link to="/family/elemental">Elemental</Link></p>
<Header full id="monster-air_elemental-small-air-elemental"><span>Small Air Elemental</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-air_elemental--info" source={[["Pathfinder RPG Bestiary",120]]} xp="400" n small outsider subs={["air","elemental","extraplanar"]} init={7} dv={60} pcp={4} />
<Defense id="monster-air_elemental--defense" ac={[17,14,14]} mod="+3 Dex, +3 natural, +1 size" hp={[13,"2d10+2"]} fort="+4" ref="+6" will="+0" def={[["air mastery","air mastery"]]} immune={<><Link to="/subtype/elemental">elemental</Link> traits</>} />
<Offense id="monster-air_elemental--offense" fl={100} flP="perfect" melee="slam +6 (1d4+1)" whirlwind="DC 12" />
<Stats id="monster-air_elemental--stats" atts={[12,17,12,4,11,11]} bab={2} cmb={2} cmd={15} feats={["Flyby Attack",["Improved Initiative",<sup>B</sup>],["Weapon Finesse",<sup>B</sup>]]} skills={{"acro":{"b":7},"ea":{"b":7},"fly":{"b":17},"k":{"p":1},"per":{"b":4},"stl":{"b":11}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-air_elemental-medium-air-elemental"><span>Medium Air Elemental</span><span>CR 3</span></Header>
<Info id="monster-air_elemental--info" source={[["Pathfinder RPG Bestiary",120]]} xp="800" n medium outsider subs={["air","elemental","extraplanar"]} init={9} dv={60} pcp={7} />
<Defense id="monster-air_elemental--defense" ac={[19,16,13]} mod="+5 Dex, +1 dodge, +3 natural" hp={[30,"4d10+8"]} fort="+6" ref="+9" will="+1" def={[["air mastery","air mastery"]]} immune={<><Link to="/subtype/elemental">elemental</Link> traits</>} />
<Offense id="monster-air_elemental--offense" fl={100} flP="perfect" melee="slam +9 (1d6+3)" whirlwind="DC 14" />
<Stats id="monster-air_elemental--stats" atts={[14,21,14,4,11,11]} bab={4} cmb={6} cmd={22} feats={["Dodge","Flyby Attack",["Improved Initiative",<sup>B</sup>],["Weapon Finesse",<sup>B</sup>]]} skills={{"acro":{"b":11},"ea":{"b":9},"fly":{"b":17},"k":{"p":1},"per":{"b":7},"stl":{"b":10}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-air_elemental-large-air-elemental"><span>Large Air Elemental</span><span>CR 5</span></Header>
<Info id="monster-air_elemental--info" source={[["Pathfinder RPG Bestiary",120]]} xp="1,600" n large outsider subs={["air","elemental","extraplanar"]} init={11} dv={60} pcp={11} />
<Defense id="monster-air_elemental--defense" ac={[21,17,13]} mod="+7 Dex, +1 dodge, +4 natural, -1 size" hp={[68,"8d10+24"]} fort="+9" ref="+13" will="+2" def={[["air mastery","air mastery"]]} dr="5/-" immune={<><Link to="/subtype/elemental">elemental</Link> traits</>} />
<Offense id="monster-air_elemental--offense" fl={100} flP="perfect" melee="2 slams +14 (1d8+4)" space={"10"} reach={"10"} whirlwind="DC 18" />
<Stats id="monster-air_elemental--stats" atts={[18,25,16,6,11,11]} bab={8} cmb={13} cmd={31} feats={["Combat Reflexes","Dodge","Flyby Attack",["Improved Initiative",<sup>B</sup>],"Mobility",["Weapon Finesse",<sup>B</sup>]]} skills={{"acro":{"b":15},"ea":{"b":15},"fly":{"b":21},"k":{"p":5},"per":{"b":11},"stl":{"b":11}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-air_elemental-huge-air-elemental"><span>Huge Air Elemental</span><span>CR 7</span></Header>
<Info id="monster-air_elemental--info" source={[["Pathfinder RPG Bestiary",120]]} xp="3,200" n huge outsider subs={["air","elemental","extraplanar"]} init={13} dv={60} pcp={13} />
<Defense id="monster-air_elemental--defense" ac={[22,18,12]} mod="+9 Dex, +1 dodge, +4 natural, -2 size" hp={[95,"10d10+40"]} fort="+11" ref="+16" will="+5" def={[["air mastery","air mastery"]]} dr="5/-" immune={<><Link to="/subtype/elemental">elemental</Link> traits</>} />
<Offense id="monster-air_elemental--offense" fl={100} flP="perfect" melee="2 slams +17 (2d6+6)" space={"15"} reach={"15"} whirlwind="DC 21" />
<Stats id="monster-air_elemental--stats" atts={[22,29,18,6,11,11]} bab={10} cmb={18} cmd={38} feats={["Combat Reflexes","Dodge","Flyby Attack",["Improved Initiative",<sup>B</sup>],"Iron Will","Mobility",["Weapon Finesse",<sup>B</sup>]]} skills={{"acro":{"b":18},"ea":{"b":18},"fly":{"b":23},"k":{"p":7},"per":{"b":13},"stl":{"b":9}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-air_elemental-greater-air-elemental"><span>Greater Air Elemental</span><span>CR 9</span></Header>
<Info id="monster-air_elemental--info" source={[["Pathfinder RPG Bestiary",120]]} xp="6,400" n huge outsider subs={["air","elemental","extraplanar"]} init={14} dv={60} pcp={16} />
<Defense id="monster-air_elemental--defense" ac={[25,19,14]} mod="+10 Dex, +1 dodge, +6 natural, -2 size" hp={[123,"13d10+52"]} fort="+12" ref="+18" will="+6" def={[["air mastery","air mastery"]]} dr="10/-" immune={<><Link to="/subtype/elemental">elemental</Link> traits</>} />
<Offense id="monster-air_elemental--offense" fl={100} flP="perfect" melee="2 slams +21 (2d8+7)" space={"15"} reach={"15"} whirlwind="DC 23" />
<Stats id="monster-air_elemental--stats" atts={[24,31,18,8,11,11]} bab={13} cmb={22} cmd={43} feats={["Blind-Fight","Combat Reflexes","Dodge","Flyby Attack",["Improved Initiative",<sup>B</sup>],"Iron Will","Mobility","Power Attack",["Weapon Finesse",<sup>B</sup>]]} skills={{"acro":{"b":25},"ea":{"b":23},"fly":{"b":27},"k":{"p":12},"per":{"b":16},"stl":{"b":15}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-air_elemental-elder-air-elemental"><span>Elder Air Elemental</span><span>CR 11</span></Header>
<Info id="monster-air_elemental--info" source={[["Pathfinder RPG Bestiary",121]]} xp="12,800" n huge outsider subs={["air","elemental","extraplanar"]} init={15} dv={60} pcp={19} />
<Defense id="monster-air_elemental--defense" ac={[28,20,16]} mod="+11 Dex, +1 dodge, +8 natural, -2 size" hp={[152,"16d10+64"]} fort="+14" ref="+21" will="+7" def={[["air mastery","air mastery"]]} dr="10/-" immune={<><Link to="/subtype/elemental">elemental</Link> traits</>} />
<Offense id="monster-air_elemental--offense" fl={100} flP="perfect" melee="2 slams +25 (2d8+9)" space={"15"} reach={"15"} whirlwind="DC 27" />
<Stats id="monster-air_elemental--stats" atts={[28,33,18,10,11,11]} bab={16} cmb={27} cmd={49} feats={["Blind-Fight","Cleave","Combat Reflexes","Dodge","Flyby Attack",["Improved Initiative",<sup>B</sup>],"Iron Will","Mobility","Power Attack",["Weapon Finesse",<sup>B</sup>]]} skills={{"acro":{"b":30},"ea":{"b":30},"fly":{"b":34},"k":{"p":19},"per":{"b":19},"stl":{"b":22}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
</div>
</>};
const _earth_elemental = {hasJL:true,title: "Earth Elemental", jsx: <><div className="jumpList" id="monster-earth_elemental-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="monster-earth_elemental-medium-earth-elemental">Medium Earth Elemental</InnerLink></li><li><InnerLink toTop to="monster-earth_elemental-large-earth-elemental">Large Earth Elemental</InnerLink></li><li><InnerLink toTop to="monster-earth_elemental-huge-earth-elemental">Huge Earth Elemental</InnerLink></li><li><InnerLink toTop to="monster-earth_elemental-greater-earth-elemental">Greater Earth Elemental</InnerLink></li><li><InnerLink toTop to="monster-earth_elemental-elder-earth-elemental">Elder Earth Elemental</InnerLink></li></ul></div><p><em>This hulking, roughly humanoid creature of dirt and stone explodes up from the earth, faceless save for two glowing gemstone eyes.</em></p>
<Header full><span>Small Earth Elemental</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-earth_elemental--info" source={[["Pathfinder RPG Bestiary",122]]} xp="400" n small outsider subs={["earth","elemental","extraplanar"]} init={-1} dv={60} tremorsense={60} pcp={4} />
<Defense id="monster-earth_elemental--defense" ac={[17,10,17]} mod="-1 Dex, +7 natural, +1 size" hp={[13,"2d10+2"]} fort="+4" ref="-1" will="+3" immune="elemental traits" />
<Offense id="monster-earth_elemental--offense" sp={20} br={20} spExtra="earth glide" melee="slam +6 (1d6+4)" specAtt={[["earth mastery","earth mastery"]]} />
<Stats id="monster-earth_elemental--stats" atts={[16,8,13,4,11,11]} bab={2} cmb={4} cmd={13} feats={[["Improved Bull Rush",<sup>B</sup>],"Power Attack"]} skills={{"app":{"b":1},"climb":{"b":7},"k":{"d":1},"per":{"b":4},"stl":{"b":7}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Ecology id="monster-earth_elemental--eco-eco" env={<>any (<Link to="/rule/plane_of_earth">Plane of Earth</Link>)</>} org="solitary, pair, or gang (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Earth Glide (Ex)</strong> A burrowing earth elemental can pass through stone, dirt, or almost any other sort of earth except metal as easily as a fish swims through water. If protected against fire damage, it can even glide through lava. Its burrowing leaves behind no tunnel or hole, nor does it create any ripple or other sign of its presence. A move earth spell cast on an area containing a burrowing earth elemental flings the elemental back 30 feet, stunning the creature for 1 round unless it succeeds on a DC 15 Fortitude save.</p>
<p><strong>Earth Mastery (Ex)</strong> An earth elemental gains a +1 bonus on attack and damage rolls if both it and its foe are touching the ground. If an opponent is airborne or waterborne, the elemental takes a -4 penalty on attack and damage rolls. These modifiers apply to bull rush and overrun maneuvers, whether the elemental is initiating or resisting these kinds of attacks. (These modifiers are not included in the statistics block.)</p>
<Header sub>Description</Header>
<p>Earth elementals are plodding, stubborn creatures made of living stone or earth. When utterly still, they resemble a heap of stone or a small hill.</p>
<p>When an earth elemental lumbers into action, its actual appearance can vary, although its statistics remain identical to other elementals of its size. Most earth elementals look like terrestrial animals made out of rock, earth, or even crystal, with glowing gemstones for eyes. Larger earth elementals often have a stony humanoid appearance. Bits of vegetation frequently grow in the soil that makes up parts of an earth elemental's body.</p>
<ScrollContainer id="monster-earth_elemental--table-0"><table>
<thead>
<tr>
<th>Elemental</th>
<th>Height</th>
<th>Weight</th>
</tr>
</thead>
<tbody><tr>
<td>Small</td>
<td>4 ft.</td>
<td>80 lbs.</td>
</tr>
<tr>
<td>Medium</td>
<td>8 ft.</td>
<td>750 lbs.</td>
</tr>
<tr>
<td>Large</td>
<td>16 ft.</td>
<td>6,000 lbs.</td>
</tr>
<tr>
<td>Huge</td>
<td>32 ft.</td>
<td>48,000 lbs.</td>
</tr>
<tr>
<td>Greater</td>
<td>36 ft.</td>
<td>54,000 lbs.</td>
</tr>
<tr>
<td>Elder</td>
<td>40 ft.</td>
<td>60,000 lbs.</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Family:</strong> <Link to="/family/elemental">Elemental</Link></p>
<Header full id="monster-earth_elemental-medium-earth-elemental"><span>Medium Earth Elemental</span><span>CR 3</span></Header>
<div className="reduce">
<Info id="monster-earth_elemental--info" source={[["Pathfinder RPG Bestiary",122]]} xp="800" n medium outsider subs={["earth","elemental","extraplanar"]} init={-1} dv={60} tremorsense={60} pcp={7} />
<Defense id="monster-earth_elemental--defense" ac={[18,9,18]} mod="-1 Dex, +9 natural" hp={[34,"4d10+12"]} fort="+7" ref="+0" will="+4" immune="elemental traits" />
<Offense id="monster-earth_elemental--offense" sp={20} br={20} spExtra="earth glide" melee="slam +9 (1d8+7)" specAtt={[["earth mastery","earth mastery"]]} />
<Stats id="monster-earth_elemental--stats" atts={[20,8,17,4,11,11]} bab={4} cmb={9} cmd={18} feats={["Cleave",["Improved Bull Rush",<sup>B</sup>],"Power Attack"]} skills={{"app":{"b":1},"climb":{"b":10},"k":{"d":2},"per":{"b":7},"stl":{"b":3}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-earth_elemental-large-earth-elemental"><span>Large Earth Elemental</span><span>CR 5</span></Header>
<Info id="monster-earth_elemental--info" source={[["Pathfinder RPG Bestiary",122]]} xp="1,600" n large outsider subs={["earth","elemental","extraplanar"]} init={-1} dv={60} tremorsense={60} pcp={11} />
<Defense id="monster-earth_elemental--defense" ac={[18,8,18]} mod="-1 Dex, +10 natural, -1 size" hp={[68,"8d10+24"]} fort="+9" ref="+1" will="+6" dr="5/-" immune="elemental traits" />
<Offense id="monster-earth_elemental--offense" sp={20} br={20} spExtra="earth glide" melee="2 slams +14 (2d6+7)" space={"10"} reach={"10"} specAtt={[["earth mastery","earth mastery"]]} />
<Stats id="monster-earth_elemental--stats" atts={[24,8,17,6,11,11]} bab={8} cmb={16} cmd={25} feats={["Cleave","Greater Bull Rush",["Improved Bull Rush",<sup>B</sup>],"Improved Overrun","Power Attack"]} skills={{"app":{"b":6},"climb":{"b":15},"k":{"d":3},"per":{"b":11},"stl":{"b":5}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-earth_elemental-huge-earth-elemental"><span>Huge Earth Elemental</span><span>CR 7</span></Header>
<Info id="monster-earth_elemental--info" source={[["Pathfinder RPG Bestiary",122]]} xp="3,200" n huge outsider subs={["earth","elemental","extraplanar"]} init={-1} dv={60} tremorsense={60} pcp={13} />
<Defense id="monster-earth_elemental--defense" ac={[19,7,19]} mod="-1 Dex, +12 natural, -2 size" hp={[95,"10d10+40"]} fort="+11" ref="+2" will="+7" dr="5/-" immune="elemental traits" />
<Offense id="monster-earth_elemental--offense" sp={20} br={20} spExtra="earth glide" melee="2 slams +17 (2d8+9)" space={"15"} reach={"15"} specAtt={[["earth mastery","earth mastery"]]} />
<Stats id="monster-earth_elemental--stats" atts={[28,8,19,6,11,11]} bab={10} cmb={21} cmd={30} feats={["Awesome Blow","Cleave","Greater Bull Rush",["Improved Bull Rush",<sup>B</sup>],"Improved Overrun","Power Attack"]} skills={{"app":{"b":6},"climb":{"b":18},"k":{"d":4},"per":{"b":13},"stl":{"b":4}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-earth_elemental-greater-earth-elemental"><span>Greater Earth Elemental</span><span>CR 9</span></Header>
<Info id="monster-earth_elemental--info" source={[["Pathfinder RPG Bestiary",123]]} xp="6,400" n huge outsider subs={["earth","elemental","extraplanar"]} init={-1} dv={60} tremorsense={60} pcp={16} />
<Defense id="monster-earth_elemental--defense" ac={[21,7,21]} mod="-1 Dex, +14 natural, -2 size" hp={[136,"13d10+65"]} fort="+13" ref="+3" will="+8" dr="10/-" immune="elemental traits" />
<Offense id="monster-earth_elemental--offense" sp={20} br={20} spExtra="earth glide" melee="2 slams +21 (2d10+10)" space={"15"} reach={"15"} specAtt={[["earth mastery","earth mastery"]]} />
<Stats id="monster-earth_elemental--stats" atts={[30,8,21,8,11,11]} bab={13} cmb={25} cmd={34} feats={["Awesome Blow","Cleave","Greater Bull Rush","Greater Overrun",["Improved Bull Rush",<sup>B</sup>],"Improved Overrun","Improved Sunder","Power Attack"]} skills={{"app":{"b":10},"climb":{"b":25},"k":{"d":10},"per":{"b":16},"stl":{"b":7}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-earth_elemental-elder-earth-elemental"><span>Elder Earth Elemental</span><span>CR 11</span></Header>
<Info id="monster-earth_elemental--info" source={[["Pathfinder RPG Bestiary",123]]} xp="12,800" n huge outsider subs={["earth","elemental","extraplanar"]} init={-1} dv={60} tremorsense={60} pcp={19} />
<Defense id="monster-earth_elemental--defense" ac={[23,7,23]} mod="-1 Dex, +16 natural, -2 size" hp={[168,"16d10+80"]} fort="+15" ref="+4" will="+10" dr="10/-" immune="elemental traits" />
<Offense id="monster-earth_elemental--offense" sp={20} br={20} spExtra="earth glide" melee="2 slams +26 (2d10+12/19-20)" space={"15"} reach={"15"} specAtt={[["earth mastery","earth mastery"]]} />
<Stats id="monster-earth_elemental--stats" atts={[34,8,21,10,11,11]} bab={16} cmb={30} cmd={39} feats={["Awesome Blow","Cleave","Greater Bull Rush","Greater Overrun",["Improved Bull Rush",<sup>B</sup>],["Improved Critical"," (slam)"],"Improved Overrun","Improved Sunder","Power Attack"]} skills={{"app":{"b":19},"climb":{"b":31},"k":{"d":19},"per":{"b":19},"stl":{"b":10}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
</div>
</>};
const _fire_elemental = {hasJL:true,title: "Fire Elemental", jsx: <><div className="jumpList" id="monster-fire_elemental-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="monster-fire_elemental-medium-fire-elemental">Medium Fire Elemental</InnerLink></li><li><InnerLink toTop to="monster-fire_elemental-large-fire-elemental">Large Fire Elemental</InnerLink></li><li><InnerLink toTop to="monster-fire_elemental-huge-fire-elemental">Huge Fire Elemental</InnerLink></li><li><InnerLink toTop to="monster-fire_elemental-greater-fire-elemental">Greater Fire Elemental</InnerLink></li><li><InnerLink toTop to="monster-fire_elemental-elder-fire-elemental">Elder Fire Elemental</InnerLink></li></ul></div><p><em>This creature looks like a living, mobile bonfire, tongues of flame reaching out in search of things to burn.</em></p>
<Header full><span>Small Fire Elemental</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-fire_elemental--info" source={[["Pathfinder RPG Bestiary",124]]} xp="400" n small outsider subs={["elemental","extraplanar","fire"]} init={5} dv={60} pcp={4} />
<Defense id="monster-fire_elemental--defense" ac={[16,13,14]} mod="+1 Dex, +1 dodge, +3 natural, +1 size" hp={[11,"2d10"]} fort="+3" ref="+4" will="+0" immune="elemental traits, fire" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to cold</>]} />
<Offense id="monster-fire_elemental--offense" sp={50} melee="slam +4 (1d4 plus burn)" burn="1d4, DC 11" />
<Stats id="monster-fire_elemental--stats" atts={[10,13,10,4,11,11]} bab={2} cmb={1} cmd={13} feats={["Dodge",["Improved Initiative",<sup>B</sup>],["Weapon Finesse",<sup>B</sup>]]} skills={{"acro":{"b":5},"climb":{"b":4},"ea":{"b":5},"intm":{"b":4},"k":{"p":1},"per":{"b":4}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Ecology id="monster-fire_elemental--eco-eco" env={<>any (<Link to="/rule/plane_of_fire">Plane of Fire</Link>)</>} org="solitary, pair, or gang (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Description</Header>
<p>Fire elementals are quick, cruel creatures of living flame. They enjoy frightening beings weaker than themselves, and terrorizing any creature they can set on fire.</p>
<p>A fire elemental cannot enter water or any other non-flammable liquid. A body of water is an impassible barrier unless the fire elemental can step or jump over it or the water is covered with a flammable material (such as a layer of oil).</p>
<p>Fire elementals vary in appearance - they usually manifest as coiling serpentine forms made of smoke and flame, but some fire elementals take on shapes more akin to humans, demons, or other monsters in order to increase the terror of their sudden appearance. Features on a fire elemental's body are made by darker bits of flame or patches of semi-stable smoke, ash, and cinders.</p>
<ScrollContainer id="monster-fire_elemental--table-0"><table>
<thead>
<tr>
<th>Elemental</th>
<th>Height</th>
<th>Weight</th>
</tr>
</thead>
<tbody><tr>
<td>Small</td>
<td>4 ft.</td>
<td>1 lb.</td>
</tr>
<tr>
<td>Medium</td>
<td>8 ft.</td>
<td>2 lbs.</td>
</tr>
<tr>
<td>Large</td>
<td>16 ft.</td>
<td>4 lbs.</td>
</tr>
<tr>
<td>Huge</td>
<td>32 ft.</td>
<td>8 lbs.</td>
</tr>
<tr>
<td>Greater</td>
<td>36 ft.</td>
<td>10 lbs.</td>
</tr>
<tr>
<td>Elder</td>
<td>40 ft.</td>
<td>12 lbs.</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Family:</strong> <Link to="/family/elemental">Elemental</Link></p>
<Header full id="monster-fire_elemental-medium-fire-elemental"><span>Medium Fire Elemental</span><span>CR 3</span></Header>
<div className="reduce">
<Info id="monster-fire_elemental--info" source={[["Pathfinder RPG Bestiary",124]]} xp="800" n medium outsider subs={["elemental","extraplanar","fire"]} init={7} dv={60} pcp={7} />
<Defense id="monster-fire_elemental--defense" ac={[17,14,13]} mod="+3 Dex, +1 dodge, +3 natural" hp={[30,"4d10+8"]} fort="+6" ref="+7" will="+1" immune="elemental traits, fire" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to cold</>]} />
<Offense id="monster-fire_elemental--offense" sp={50} melee="slam +7 (1d6+1 plus burn)" burn="1d6, DC 14" />
<Stats id="monster-fire_elemental--stats" atts={[12,17,14,4,11,11]} bab={4} cmb={5} cmd={19} feats={["Dodge",["Improved Initiative",<sup>B</sup>],"Mobility",["Weapon Finesse",<sup>B</sup>]]} skills={{"acro":{"b":8},"climb":{"b":5},"ea":{"b":8},"intm":{"b":5},"k":{"p":1},"per":{"b":7}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-fire_elemental-large-fire-elemental"><span>Large Fire Elemental</span><span>CR 5</span></Header>
<Info id="monster-fire_elemental--info" source={[["Pathfinder RPG Bestiary",124]]} xp="1,600" n large outsider subs={["elemental","extraplanar","fire"]} init={9} dv={60} pcp={11} />
<Defense id="monster-fire_elemental--defense" ac={[19,15,13]} mod="+5 Dex, +1 dodge, +4 natural, -1 size" hp={[60,"8d10+16"]} fort="+8" ref="+11" will="+4" dr="5/-" immune="elemental traits, fire" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to cold</>]} />
<Offense id="monster-fire_elemental--offense" sp={50} melee="2 slams +12 (1d8+2 plus burn)" space={"10"} reach={"10"} burn="1d8, DC 16" />
<Stats id="monster-fire_elemental--stats" atts={[14,21,14,6,11,11]} bab={8} cmb={11} cmd={27} feats={["Dodge",["Improved Initiative",<sup>B</sup>],"Iron Will","Mobility","Spring Attack",["Weapon Finesse",<sup>B</sup>]]} skills={{"acro":{"b":14},"climb":{"b":9},"ea":{"b":12},"intm":{"b":9},"k":{"p":5},"per":{"b":11}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-fire_elemental-huge-fire-elemental"><span>Huge Fire Elemental</span><span>CR 7</span></Header>
<Info id="monster-fire_elemental--info" source={[["Pathfinder RPG Bestiary",124]]} xp="3,200" n huge outsider subs={["elemental","extraplanar","fire"]} init={11} dv={60} pcp={13} />
<Defense id="monster-fire_elemental--defense" ac={[21,16,13]} mod="+7 Dex, +1 dodge, +5 natural, -2 size" hp={[85,"10d10+30"]} fort="+10" ref="+14" will="+5" dr="5/-" immune="elemental traits, fire" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to cold</>]} />
<Offense id="monster-fire_elemental--offense" sp={60} melee="2 slams +15 (2d6+4 plus burn)" space={"15"} reach={"15"} burn="2d6, DC 18" />
<Stats id="monster-fire_elemental--stats" atts={[18,25,16,6,11,11]} bab={10} cmb={16} cmd={34} feats={["Combat Reflexes","Dodge",["Improved Initiative",<sup>B</sup>],"Iron Will","Mobility","Spring Attack",["Weapon Finesse",<sup>B</sup>]]} skills={{"acro":{"b":16},"climb":{"b":13},"ea":{"b":16},"intm":{"b":9},"k":{"p":7},"per":{"b":13}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-fire_elemental-greater-fire-elemental"><span>Greater Fire Elemental</span><span>CR 9</span></Header>
<Info id="monster-fire_elemental--info" source={[["Pathfinder RPG Bestiary",124]]} xp="6,400" n huge outsider subs={["elemental","extraplanar","fire"]} init={12} dv={60} pcp={16} />
<Defense id="monster-fire_elemental--defense" ac={[23,17,14]} mod="+8 Dex, +1 dodge, +6 natural, -2 size" hp={[123,"13d10+52"]} fort="+12" ref="+16" will="+6" dr="10/-" immune="elemental traits, fire" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to cold</>]} />
<Offense id="monster-fire_elemental--offense" sp={60} melee="2 slams +19 (2d8+7 plus burn)" space={"15"} reach={"15"} burn="2d8, DC 20" />
<Stats id="monster-fire_elemental--stats" atts={[24,27,18,8,11,11]} bab={13} cmb={22} cmd={41} feats={["Blind-Fight","Combat Reflexes","Dodge",["Improved Initiative",<sup>B</sup>],"Iron Will","Mobility","Spring Attack",["Weapon Finesse",<sup>B</sup>],"Wind Stance"]} skills={{"acro":{"b":23},"climb":{"b":20},"ea":{"b":21},"intm":{"b":15},"k":{"p":10},"per":{"b":16}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-fire_elemental-elder-fire-elemental"><span>Elder Fire Elemental</span><span>CR 11</span></Header>
<Info id="monster-fire_elemental--info" source={[["Pathfinder RPG Bestiary",125]]} xp="12,800" n huge outsider subs={["elemental","extraplanar","fire"]} init={13} dv={60} pcp={19} />
<Defense id="monster-fire_elemental--defense" ac={[26,18,16]} mod="+9 Dex, +1 dodge, +8 natural, -2 size" hp={[152,"16d10+64"]} fort="+14" ref="+19" will="+7" dr="10/-" immune="elemental traits, fire" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to cold</>]} />
<Offense id="monster-fire_elemental--offense" sp={60} melee="2 slams +23 (2d8+8 plus burn)" space={"15"} reach={"15"} burn="2d10, DC 22" />
<Stats id="monster-fire_elemental--stats" atts={[26,29,18,10,11,11]} bab={16} cmb={26} cmd={46} feats={["Blind-Fight","Combat Reflexes","Dodge",["Improved Initiative",<sup>B</sup>],"Iron Will","Lightning Stance","Mobility","Spring Attack",["Weapon Finesse",<sup>B</sup>],"Wind Stance"]} skills={{"acro":{"b":28},"climb":{"b":27},"ea":{"b":28},"intm":{"b":19},"k":{"p":19},"per":{"b":19}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
</div>
</>};
const _ice_elemental = {hasJL:true,title: "Ice Elemental", jsx: <><div className="jumpList" id="monster-ice_elemental-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="monster-ice_elemental-medium-ice-elemental">Medium Ice Elemental</InnerLink></li><li><InnerLink toTop to="monster-ice_elemental-large-ice-elemental">Large Ice Elemental</InnerLink></li><li><InnerLink toTop to="monster-ice_elemental-huge-ice-elemental">Huge Ice Elemental</InnerLink></li><li><InnerLink toTop to="monster-ice_elemental-greater-ice-elemental">Greater Ice Elemental</InnerLink></li><li><InnerLink toTop to="monster-ice_elemental-elder-ice-elemental">Elder Ice Elemental</InnerLink></li></ul></div><p><em>From the waist up, this icy creature's features are humanoid, but below its body is a snake-like, slithering tail.</em></p>
<Header full><span>Small Ice Elemental</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-ice_elemental--info" source={[["Bestiary 2",114]]} xp="400" n small outsider subs={["air","cold","elemental","extraplanar","water"]} init={-1} sen={["snow vision"]} dv={60} pcp={5} />
<Defense id="monster-ice_elemental--defense" ac={[16,10,16]} mod="-1 Dex, +6 natural, +1 size" hp={[13,"2d10+2"]} fort="+4" ref="+2" will="+0" immune="cold, elemental traits" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to fire</>]} />
<Offense id="monster-ice_elemental--offense" sp={20} br={20} brP="ice and snow only" sw={60} melee="slam +4 (1d4+1 plus 1d3 cold)" specAtt={[["numbing cold DC 12","numbing cold (DC 12)"]]} />
<Stats id="monster-ice_elemental--stats" atts={[12,8,13,4,11,11]} bab={2} cmb={2} cmd={11} cmdP="can't be tripped" feats={["Power Attack"]} skills={{"k":{"p":2},"per":{"b":5},"stl":{"b":8},"swim":{"b":9}}} sq="ice glide, icewalking" />
<Ecology id="monster-ice_elemental--eco-eco" env={<>any land or water (<Link to="/rule/plane_of_water">Plane of Water</Link>)</>} org="solitary, pair, or gang (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Ice Glide (Su)</strong> A burrowing ice elemental can pass through nonmagical ice and snow as easily as a fish swims through water. Its burrowing leaves behind no tunnel or hole, nor does it create any ripple or other sign of its presence. A <Link to="/spell/control_water">control water</Link> spell cast on an area containing a burrowing ice elemental flings the elemental back 30 feet, <Link to="/misc/stun">stunning</Link> the creature for 1 round unless it succeeds on a DC 15 Fortitude save.</p>
<p><strong>Icewalking (Ex)</strong> This ability works like the <Link to="/spell/spider_climb">spider climb</Link> spell, but the surfaces the elemental climbs must be icy. The elemental can move across icy surfaces without penalty and does not need to make <Link to="/skill/acrobatics">Acrobatics</Link> checks to run or charge on ice.</p>
<p><strong>Numbing Cold (Su)</strong> When an ice elemental deals cold damage to a creature, that creature must succeed on a Fortitude save or be <Link to="/misc/staggered">staggered</Link> for 1 round. The save DC is listed in the elemental's stat block and is Constitution-based.</p>
<p><strong>Snow Vision (Ex)</strong> An ice elemental can see perfectly well in snowy conditions and does not take any penalties on <Link to="/skill/perception">Perception</Link> checks while in snow.</p>
<Header sub>Description</Header>
<p>Ice elementals are creatures made of animated snow and ice. They form in especially cold parts of the <Link to="/rule/plane_of_water">Plane of Water</Link> and along its border with the <Link to="/rule/plane_of_air">Plane of Air</Link>, where giant icebergs careen off of world-high waterfalls into the open sky. Ice elementals vary in their exact appearance.</p>
<p><strong>Family:</strong> <Link to="/family/elemental">Elemental</Link></p>
<Header full id="monster-ice_elemental-medium-ice-elemental"><span>Medium Ice Elemental</span><span>CR 3</span></Header>
<div className="reduce">
<Info id="monster-ice_elemental--info" source={[["Bestiary 2",114]]} xp="800" n medium outsider subs={["air","cold","elemental","extraplanar","water"]} init={0} sen={["snow vision"]} dv={60} pcp={7} />
<Defense id="monster-ice_elemental--defense" ac={[16,10,16]} mod="+6 natural" hp={[30,"4d10+8"]} fort="+6" ref="+4" will="+1" immune="cold, elemental traits" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to fire</>]} />
<Offense id="monster-ice_elemental--offense" sp={20} br={20} brP="ice and snow only" sw={60} melee="slam +7 (1d6+4 plus 1d4 cold)" specAtt={[["numbing cold DC 14","numbing cold (DC 14)"]]} />
<Stats id="monster-ice_elemental--stats" atts={[16,10,15,4,11,11]} bab={4} cmb={7} cmd={17} cmdP="can't be tripped" feats={["Cleave","Power Attack"]} skills={{"k":{"p":4},"per":{"b":7},"stl":{"b":7},"swim":{"b":11}}} sq="ice glide, icewalking" />
<Header full id="monster-ice_elemental-large-ice-elemental"><span>Large Ice Elemental</span><span>CR 5</span></Header>
<Info id="monster-ice_elemental--info" source={[["Bestiary 2",114]]} xp="1,600" n large outsider subs={["air","cold","elemental","extraplanar","water"]} init={5} sen={["snow vision"]} dv={60} pcp={11} />
<Defense id="monster-ice_elemental--defense" ac={[17,10,16]} mod="+1 Dex, +7 natural, -1 size" hp={[68,"8d10+24"]} fort="+9" ref="+7" will="+2" dr="5/-" immune="cold, elemental traits" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to fire</>]} />
<Offense id="monster-ice_elemental--offense" sp={20} br={20} brP="ice and snow only" sw={60} melee="2 slams +12 (1d8+5 plus 1d6 cold)" space={"10"} reach={"10"} specAtt={[["numbing cold DC 17","numbing cold (DC 17)"]]} />
<Stats id="monster-ice_elemental--stats" atts={[20,12,17,6,11,11]} bab={8} cmb={14} cmd={25} cmdP="can't be tripped" feats={["Cleave","Great Cleave","Improved Initiative","Power Attack"]} skills={{"intm":{"b":11},"k":{"p":9},"per":{"b":11},"stl":{"b":8},"swim":{"b":13}}} sq="ice glide, icewalking" />
<Header full id="monster-ice_elemental-huge-ice-elemental"><span>Huge Ice Elemental</span><span>CR 7</span></Header>
<Info id="monster-ice_elemental--info" source={[["Bestiary 2",114]]} xp="3,200" n huge outsider subs={["air","cold","elemental","extraplanar","water"]} init={7} sen={["snow vision"]} dv={60} pcp={13} />
<Defense id="monster-ice_elemental--defense" ac={[20,12,16]} mod="+3 Dex, +1 dodge, +8 natural, -2 size" hp={[95,"10d10+40"]} fort="+11" ref="+10" will="+3" dr="5/-" immune="cold, elemental traits" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to fire</>]} />
<Offense id="monster-ice_elemental--offense" sp={20} br={20} brP="ice and snow only" sw={60} melee="2 slams +15 (2d6+7 plus 1d8 cold)" space={"15"} reach={"15"} specAtt={[["numbing cold DC 19","numbing cold (DC 19)"]]} />
<Stats id="monster-ice_elemental--stats" atts={[24,16,19,6,11,11]} bab={10} cmb={19} cmd={33} cmdP="can't be tripped" feats={["Cleave","Dodge","Great Cleave","Improved Initiative","Power Attack"]} skills={{"intm":{"b":13},"k":{"p":11},"per":{"b":13},"stl":{"b":8},"swim":{"b":15}}} sq="ice glide, icewalking" />
<Header full id="monster-ice_elemental-greater-ice-elemental"><span>Greater Ice Elemental</span><span>CR 9</span></Header>
<Info id="monster-ice_elemental--info" source={[["Bestiary 2",115]]} xp="6,400" n huge outsider subs={["air","cold","elemental","extraplanar","water"]} init={8} sen={["snow vision"]} dv={60} pcp={16} />
<Defense id="monster-ice_elemental--defense" ac={[23,13,18]} mod="+4 Dex, +1 dodge, +10 natural, -2 size" hp={[123,"13d10+52"]} fort="+12" ref="+14" will="+4" dr="10/-" immune="cold, elemental traits" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to fire</>]} />
<Offense id="monster-ice_elemental--offense" sp={20} br={20} brP="ice and snow only" sw={60} melee="2 slams +20 (2d8+9 plus 2d6 cold)" space={"15"} reach={"15"} specAtt={[["numbing cold DC 20","numbing cold (DC 20)"]]} />
<Stats id="monster-ice_elemental--stats" atts={[28,18,19,8,11,11]} bab={13} cmb={24} cmd={39} cmdP="can't be tripped" feats={["Cleave","Combat Reflexes","Dodge","Improved Initiative","Lightning Reflexes","Power Attack","Vital Strike"]} skills={{"ea":{"b":20},"intm":{"b":16},"k":{"p":15},"per":{"b":16},"stl":{"b":12},"swim":{"b":17}}} sq="ice glide, icewalking" />
<Header full id="monster-ice_elemental-elder-ice-elemental"><span>Elder Ice Elemental</span><span>CR 11</span></Header>
<Info id="monster-ice_elemental--info" source={[["Bestiary 2",115]]} xp="12,800" n huge outsider subs={["air","cold","elemental","extraplanar","water"]} init={9} sen={["snow vision"]} dv={60} pcp={19} />
<Defense id="monster-ice_elemental--defense" ac={[24,14,18]} mod="+5 Dex, +1 dodge, +10 natural, -2 size" hp={[152,"16d10+64"]} fort="+14" ref="+17" will="+5" dr="10/-" immune="cold, elemental traits" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to fire</>]} />
<Offense id="monster-ice_elemental--offense" sp={20} br={20} brP="ice and snow only" sw={60} melee="2 slams +24 (2d10+10/19-20 plus 2d8 cold)" space={"15"} reach={"15"} specAtt={[["numbing cold DC 22","numbing cold (DC 22)"]]} />
<Stats id="monster-ice_elemental--stats" atts={[30,20,19,10,11,11]} bab={16} cmb={28} cmd={44} cmdP="can't be tripped" feats={["Cleave","Combat Reflexes","Dodge",["Improved Critical"," (slam)"],"Improved Initiative","Lightning Reflexes","Power Attack","Vital Strike"]} skills={{"ea":{"b":24},"intm":{"b":19},"k":{"p":19},"per":{"b":19},"stl":{"b":16},"swim":{"b":37}}} sq="ice glide, icewalking" />
</div>
</>};
const _lightning_elemental = {hasJL:true,title: "Lightning Elemental", jsx: <><div className="jumpList" id="monster-lightning_elemental-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="monster-lightning_elemental-medium-lightning-elemental">Medium Lightning Elemental</InnerLink></li><li><InnerLink toTop to="monster-lightning_elemental-large-lightning-elemental">Large Lightning Elemental</InnerLink></li><li><InnerLink toTop to="monster-lightning_elemental-huge-lightning-elemental">Huge Lightning Elemental</InnerLink></li><li><InnerLink toTop to="monster-lightning_elemental-greater-lightning-elemental">Greater Lightning Elemental</InnerLink></li><li><InnerLink toTop to="monster-lightning_elemental-elder-lightning-elemental">Elder Lightning Elemental</InnerLink></li></ul></div><p><em>This creature looks like a dark storm cloud, with sparks suggesting eyes and long sweeping arms charged with bolts of lightning.</em></p>
<Header full><span>Small Lightning Elemental</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-lightning_elemental--info" source={[["Bestiary 2",116]]} xp="400" n small outsider subs={["air","elemental","extraplanar"]} init={6} dv={60} pcp={5} />
<Defense id="monster-lightning_elemental--defense" ac={[14,13,12]} mod="+2 Dex, +1 natural, +1 size" hp={[11,"2d10"]} fort="+3" ref="+5" will="+0" immune="electricity, elemental traits" />
<Offense id="monster-lightning_elemental--offense" fl={100} flP="perfect" melee="slam +5 (1d4 plus 1d3 electricity)" specAtt={[["metal mastery","metal mastery"],["spark leap","spark leap"]]} />
<Stats id="monster-lightning_elemental--stats" atts={[10,15,10,4,11,11]} bab={2} cmb={1} cmd={13} feats={["Improved Initiative",["Weapon Finesse",<sup>B</sup>]]} skills={{"acro":{"b":7},"ea":{"b":6},"fly":{"b":12},"k":{"p":1},"per":{"b":5}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Ecology id="monster-lightning_elemental--eco-eco" env={<>any (<Link to="/rule/plane_of_air">Plane of Air</Link>)</>} org="solitary, pair, or gang (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Metal Mastery (Ex)</strong> A lightning elemental gains a +3 bonus on attack rolls if its opponent is wearing metal armor, is wielding a metal weapon, or is made of metal (such as an <Link to="/monster/iron_golem">iron golem</Link>).</p>
<p><strong>Spark Leap (Ex)</strong> A lightning elemental gains a +10 bonus on <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/disarm">disarm</Link>, <Link to="/rule/overrun">overrun</Link>, and <Link to="/rule/trip">trip</Link> attacks when it charges a creature against whom its metal mastery ability applies.</p>
<Header sub>Description</Header>
<p>Though most think of the <Link to="/rule/plane_of_air">Plane of Air</Link> as a vast expanse of clear sky, that plane also holds the power of the storm, including monstrous hurricanes larger than entire worlds and thunderstorms whose peals and claps can shatter stone. Whether lightning elementals are the byproduct of common air elementals spending too much time near these electrically charged storms or are merely calved off like forgotten flurries, they are aggressive and almost suicidal in their willingness to leap into battle. They particularly enjoy attacking creatures that are made of metal and creatures that wear metal armor or wield metal weapons.</p>
<p>Many lightning elementals have a roughly humanoid shape, but some prefer animalistic shapes (particularly birds and dragons), and a few appear to be nothing more than large disembodied heads made of dark clouds with flickering lightning tongues. Regardless of the shape a lightning elemental takes, the air around the creature hums and throbs with the promise of electrocution and the tangy stink of ozone.</p>
<p><strong>Family:</strong> <Link to="/family/elemental">Elemental</Link></p>
<Header full id="monster-lightning_elemental-medium-lightning-elemental"><span>Medium Lightning Elemental</span><span>CR 3</span></Header>
<div className="reduce">
<Info id="monster-lightning_elemental--info" source={[["Bestiary 2",116]]} xp="800" n medium outsider subs={["air","elemental","extraplanar"]} init={8} dv={60} pcp={7} />
<Defense id="monster-lightning_elemental--defense" ac={[16,15,11]} mod="+4 Dex, +1 dodge, +1 natural" hp={[26,"4d10+4"]} fort="+5" ref="+8" will="+1" immune="electricity, elemental traits" />
<Offense id="monster-lightning_elemental--offense" fl={100} flP="perfect" melee="slam +8 (1d6+3 plus 1d4 electricity)" specAtt={[["metal mastery","metal mastery"],["spark leap","spark leap"]]} />
<Stats id="monster-lightning_elemental--stats" atts={[14,19,12,4,11,11]} bab={4} cmb={6} cmd={21} feats={["Dodge","Improved Initiative",["Weapon Finesse",<sup>B</sup>]]} skills={{"acro":{"b":11},"ea":{"b":9},"fly":{"b":12},"k":{"p":2},"per":{"b":7}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-lightning_elemental-large-lightning-elemental"><span>Large Lightning Elemental</span><span>CR 5</span></Header>
<Info id="monster-lightning_elemental--info" source={[["Bestiary 2",116]]} xp="1,600" n large outsider subs={["air","elemental","extraplanar"]} init={10} dv={60} pcp={11} />
<Defense id="monster-lightning_elemental--defense" ac={[18,16,11]} mod="+6 Dex, +1 dodge, +2 natural, -1 size" hp={[60,"8d10+16"]} fort="+8" ref="+12" will="+2" dr="5/-" immune="electricity, elemental traits" />
<Offense id="monster-lightning_elemental--offense" fl={100} flP="perfect" melee="2 slams +13 (1d8+3 plus 1d6 electricity)" space={"10"} reach={"10"} specAtt={[["metal mastery","metal mastery"],["spark leap","spark leap"]]} />
<Stats id="monster-lightning_elemental--stats" atts={[16,23,14,6,11,11]} bab={8} cmb={12} cmd={29} feats={["Dodge","Flyby Attack","Improved Initiative","Mobility",["Weapon Finesse",<sup>B</sup>]]} skills={{"acro":{"b":17},"ea":{"b":17},"fly":{"b":12},"k":{"p":9},"per":{"b":11}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-lightning_elemental-huge-lightning-elemental"><span>Huge Lightning Elemental</span><span>CR 7</span></Header>
<Info id="monster-lightning_elemental--info" source={[["Bestiary 2",116]]} xp="3,200" n huge outsider subs={["air","elemental","extraplanar"]} init={12} dv={60} pcp={13} />
<Defense id="monster-lightning_elemental--defense" ac={[19,17,10]} mod="+8 Dex, +1 dodge, +2 natural, -2 size" hp={[85,"10d10+30"]} fort="+10" ref="+15" will="+5" dr="5/-" immune="electricity, elemental traits" />
<Offense id="monster-lightning_elemental--offense" fl={100} flP="perfect" melee="2 slams +16 (2d6+5 plus 1d8 electricity)" space={"15"} reach={"15"} specAtt={[["metal mastery","metal mastery"],["spark leap","spark leap"]]} />
<Stats id="monster-lightning_elemental--stats" atts={[20,27,16,6,11,11]} bab={10} cmb={17} cmd={36} feats={["Dodge","Flyby Attack","Improved Initiative","Iron Will","Mobility",["Weapon Finesse",<sup>B</sup>]]} skills={{"acro":{"b":21},"ea":{"b":21},"fly":{"b":12},"k":{"p":11},"per":{"b":13}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-lightning_elemental-greater-lightning-elemental"><span>Greater Lightning Elemental</span><span>CR 9</span></Header>
<Info id="monster-lightning_elemental--info" source={[["Bestiary 2",117]]} xp="6,400" n huge outsider subs={["air","elemental","extraplanar"]} init={13} dv={60} pcp={16} />
<Defense id="monster-lightning_elemental--defense" ac={[22,18,12]} mod="+9 Dex, +1 dodge, +4 natural, -2 size" hp={[110,"13d10+39"]} fort="+11" ref="+17" will="+6" dr="10/-" immune="electricity, elemental traits" />
<Offense id="monster-lightning_elemental--offense" fl={100} flP="perfect" melee="2 slams +20 (2d8+6 plus 2d6 electricity)" space={"15"} reach={"15"} specAtt={[["metal mastery","metal mastery"],["spark leap","spark leap"]]} />
<Stats id="monster-lightning_elemental--stats" atts={[22,29,16,8,11,11]} bab={13} cmb={21} cmd={41} feats={["Blind-Fight","Dodge","Flyby Attack","Improved Initiative","Iron Will","Mobility","Power Attack",["Weapon Finesse",<sup>B</sup>]]} skills={{"acro":{"b":25},"ea":{"b":25},"fly":{"b":13},"intm":{"b":16},"k":{"p":15},"per":{"b":16}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Header full id="monster-lightning_elemental-elder-lightning-elemental"><span>Elder Lightning Elemental</span><span>CR 11</span></Header>
<Info id="monster-lightning_elemental--info" source={[["Bestiary 2",117]]} xp="12,800" n huge outsider subs={["air","elemental","extraplanar"]} init={14} dv={60} pcp={19} />
<Defense id="monster-lightning_elemental--defense" ac={[25,19,14]} mod="+10 Dex, +1 dodge, +6 natural, -2 size" hp={[136,"16d10+48"]} fort="+13" ref="+20" will="+7" dr="10/-" immune="electricity, elemental traits" />
<Offense id="monster-lightning_elemental--offense" fl={100} flP="perfect" melee="2 slams +24 (2d8+8 plus 2d8 electricity)" space={"15"} reach={"15"} specAtt={[["metal mastery","metal mastery"],["spark leap","spark leap"]]} />
<Stats id="monster-lightning_elemental--stats" atts={[26,31,16,10,11,11]} bab={16} cmb={26} cmd={47} feats={["Blind-Fight","Combat Reflexes","Dodge","Flyby Attack","Improved Initiative","Iron Will","Mobility","Power Attack",["Weapon Finesse",<sup>B</sup>]]} skills={{"acro":{"b":29},"ea":{"b":29},"fly":{"b":14},"intm":{"b":19},"k":{"p":19},"per":{"b":19},"stl":{"b":21}}} />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
</div>
</>};
const _magma_elemental = {hasJL:true,title: "Magma Elemental", jsx: <><div className="jumpList" id="monster-magma_elemental-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="monster-magma_elemental-medium-magma-elemental">Medium Magma Elemental</InnerLink></li><li><InnerLink toTop to="monster-magma_elemental-large-magma-elemental">Large Magma Elemental</InnerLink></li><li><InnerLink toTop to="monster-magma_elemental-huge-magma-elemental">Huge Magma Elemental</InnerLink></li><li><InnerLink toTop to="monster-magma_elemental-greater-magma-elemental">Greater Magma Elemental</InnerLink></li><li><InnerLink toTop to="monster-magma_elemental-elder-magma-elemental">Elder Magma Elemental</InnerLink></li></ul></div><p><em>This rocky monster glows with an internal heat. Red light spills from its eyes and mouth, as well as fractures in its outer surface.</em></p>
<Header full><span>Small Magma Elemental</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-magma_elemental--info" source={[["Bestiary 2",118]]} xp="400" n small outsider subs={["earth","elemental","extraplanar","fire"]} init={3} dv={60} pcp={5} />
<Defense id="monster-magma_elemental--defense" ac={[15,10,15]} mod="-1 Dex, +5 natural, +1 size" hp={[11,"2d10"]} fort="+3" ref="+2" will="+0" immune="fire, elemental traits" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to cold</>]} />
<Offense id="monster-magma_elemental--offense" sp={20} br={20} spExtra="earth glide" melee="slam +3 (1d3 plus burn)" specAtt={[["lava puddle","lava puddle"]]} burn="1d4, DC 9" />
<Stats id="monster-magma_elemental--stats" atts={[10,8,11,4,11,11]} bab={2} cmb={1} cmd={10} feats={["Improved Initiative"]} skills={{"k":{"d":2},"per":{"b":5},"stl":{"b":8}}} sq="earth glide" />
<Ecology id="monster-magma_elemental--eco-eco" env={<>any (<Link to="/rule/plane_of_fire">Plane of Fire</Link>)</>} org="solitary, pair, or gang (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Burn (Ex)</strong> A magma elemental's <Link to="/umr/burn">burn</Link> DC includes a -2 racial penalty, as their fires don't burn quite as hot as true elemental flames.</p>
<p><strong>Earth Glide (Ex)</strong> A burrowing magma elemental can pass through stone, dirt, lava, or almost any other sort of earth except metal as easily as a fish swims through water. Its burrowing leaves behind no tunnel or hole, nor does it create any ripple, though the area it passes through feels warm for 1 round afterward and often retains a strangely smooth texture, as if the stone had been polished. A <Link to="/spell/move_earth">move earth</Link> spell cast on an area containing a burrowing magma elemental flings the elemental back 30 feet, <Link to="/misc/stun">stunning</Link> the creature for 1 round unless it succeeds on a DC 15 Fortitude save.</p>
<p><strong>Lava Puddle (Su)</strong> Once per day as a full-round action, a magma elemental can vomit forth a puddle of lava that fills its space to a depth of 2-3 inches and counts as <Link to="/rule/difficult_terrain">difficult terrain</Link>. Any creature that moves through this puddle of lava takes 2d6 points of fire damage. This damage continues for 1d3 rounds after the creature leaves the lava pool, although then it only inflicts 1d6 points of fire damage per round. The lava puddle solidifies and is safe to touch after a number of rounds equal to the elemental's Hit Dice. At the GM's discretion, this puddle of lava could start secondary fires.</p>
<Header sub>Description</Header>
<p>In the border areas between the <Link to="/rule/plane_of_earth">Plane of Earth</Link> and <Link to="/rule/plane_of_fire">Plane of Fire</Link>, volcanoes and continent-sized lava flows are commonplace. Elementals in this area tend to have aspects of both planes, and the typical sort is the magma elemental, an earth elemental with a core of liquid fire. Magma elementals generally have a somewhat feral or bestial appearance.</p>
<p><strong>Family:</strong> <Link to="/family/elemental">Elemental</Link></p>
<Header full id="monster-magma_elemental-medium-magma-elemental"><span>Medium Magma Elemental</span><span>CR 3</span></Header>
<div className="reduce">
<Info id="monster-magma_elemental--info" source={[["Bestiary 2",118]]} xp="800" n medium outsider subs={["earth","elemental","extraplanar","fire"]} init={3} dv={60} pcp={7} />
<Defense id="monster-magma_elemental--defense" ac={[16,9,16]} mod="-1 Dex, +7 natural" hp={[30,"4d10+8"]} fort="+6" ref="+3" will="+1" immune="fire, elemental traits" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to cold</>]} />
<Offense id="monster-magma_elemental--offense" sp={20} br={20} spExtra="earth glide" melee="slam +6 (1d6+3 plus burn)" specAtt={[["lava puddle","lava puddle"]]} burn="1d4, DC 12" />
<Stats id="monster-magma_elemental--stats" atts={[14,8,15,4,11,11]} bab={4} cmb={6} cmd={15} feats={["Improved Initiative","Power Attack"]} skills={{"k":{"d":4},"per":{"b":7},"stl":{"b":6}}} sq="earth glide" />
<Header full id="monster-magma_elemental-large-magma-elemental"><span>Large Magma Elemental</span><span>CR 5</span></Header>
<Info id="monster-magma_elemental--info" source={[["Bestiary 2",118]]} xp="1,600" n large outsider subs={["earth","elemental","extraplanar","fire"]} init={3} dv={60} pcp={11} />
<Defense id="monster-magma_elemental--defense" ac={[16,8,16]} mod="-1 Dex, +8 natural, -1 size" hp={[60,"8d10+16"]} fort="+8" ref="+5" will="+2" dr="5/-" immune="fire, elemental traits" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to cold</>]} />
<Offense id="monster-magma_elemental--offense" sp={20} br={20} spExtra="earth glide" melee="2 slams +11 (1d8+4 plus burn)" space={"10"} reach={"10"} specAtt={[["lava puddle","lava puddle"]]} burn="1d6, DC 14" />
<Stats id="monster-magma_elemental--stats" atts={[18,8,15,6,11,11]} bab={8} cmb={13} cmd={22} feats={["Cleave","Improved Bull Rush","Improved Initiative","Power Attack"]} skills={{"climb":{"b":15},"k":{"d":9},"per":{"b":11},"stl":{"b":6}}} sq="earth glide" />
<Header full id="monster-magma_elemental-huge-magma-elemental"><span>Huge Magma Elemental</span><span>CR 7</span></Header>
<Info id="monster-magma_elemental--info" source={[["Bestiary 2",118]]} xp="3,200" n huge outsider subs={["earth","elemental","extraplanar","fire"]} init={3} dv={60} pcp={13} />
<Defense id="monster-magma_elemental--defense" ac={[17,7,17]} mod="-1 Dex, +10 natural, -2 size" hp={[85,"10d10+30"]} fort="+10" ref="+6" will="+3" dr="5/-" immune="fire, elemental traits" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to cold</>]} />
<Offense id="monster-magma_elemental--offense" sp={20} br={20} spExtra="earth glide" melee="2 slams +14 (2d6+6 plus burn)" space={"15"} reach={"15"} specAtt={[["lava puddle","lava puddle"]]} burn="1d8, DC 16" />
<Stats id="monster-magma_elemental--stats" atts={[22,8,17,6,11,11]} bab={10} cmb={18} cmd={27} feats={["Cleave","Greater Bull Rush","Improved Bull Rush","Improved Initiative","Power Attack"]} skills={{"climb":{"b":19},"k":{"d":11},"per":{"b":13},"stl":{"b":4}}} sq="earth glide" />
<Header full id="monster-magma_elemental-greater-magma-elemental"><span>Greater Magma Elemental</span><span>CR 9</span></Header>
<Info id="monster-magma_elemental--info" source={[["Bestiary 2",119]]} xp="6,400" n huge outsider subs={["earth","elemental","extraplanar","fire"]} init={3} dv={60} pcp={16} />
<Defense id="monster-magma_elemental--defense" ac={[19,7,19]} mod="-1 Dex, +12 natural, -2 size" hp={[123,"13d10+52"]} fort="+12" ref="+7" will="+4" dr="10/-" immune="fire, elemental traits" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to cold</>]} />
<Offense id="monster-magma_elemental--offense" sp={20} br={20} spExtra="earth glide" melee="2 slams +18 (2d8+7 plus burn)" space={"15"} reach={"15"} specAtt={[["lava puddle","lava puddle"]]} burn="2d6, DC 18" />
<Stats id="monster-magma_elemental--stats" atts={[24,8,19,8,11,11]} bab={13} cmb={22} cmd={31} feats={["Cleave","Greater Bull Rush","Greater Overrun","Improved Bull Rush","Improved Initiative","Improved Overrun","Power Attack"]} skills={{"climb":{"b":23},"intm":{"b":16},"k":{"d":15},"per":{"b":16},"stl":{"b":7}}} sq="earth glide" />
<Header full id="monster-magma_elemental-elder-magma-elemental"><span>Elder Magma Elemental</span><span>CR 11</span></Header>
<Info id="monster-magma_elemental--info" source={[["Bestiary 2",119]]} xp="12,800" n huge outsider subs={["earth","elemental","extraplanar","fire"]} init={3} dv={60} pcp={19} />
<Defense id="monster-magma_elemental--defense" ac={[25,7,25]} mod="-1 Dex, +18 natural, -2 size" hp={[152,"16d10+64"]} fort="+14" ref="+9" will="+5" dr="10/-" immune="fire, elemental traits" weak={[<><Link to="/umr/vulnerable">vulnerable</Link> to cold</>]} />
<Offense id="monster-magma_elemental--offense" sp={20} br={20} spExtra="earth glide" melee="2 slams +22 (3d6+8 plus burn)" space={"15"} reach={"15"} specAtt={[["lava puddle","lava puddle"]]} burn="3d6, DC 20" />
<Stats id="monster-magma_elemental--stats" atts={[26,8,19,10,11,11]} bab={16} cmb={26} cmd={35} feats={["Cleave","Greater Bull Rush","Greater Overrun","Improved Bull Rush","Improved Initiative","Improved Overrun","Power Attack","Vital Strike"]} skills={{"climb":{"b":27},"intm":{"b":19},"k":{"d":19},"per":{"b":19},"stl":{"b":10}}} sq="earth glide" />
</div>
</>};
const _mud_elemental = {hasJL:true,title: "Mud Elemental", jsx: <><div className="jumpList" id="monster-mud_elemental-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="monster-mud_elemental-medium-mud-elemental">Medium Mud Elemental</InnerLink></li><li><InnerLink toTop to="monster-mud_elemental-large-mud-elemental">Large Mud Elemental</InnerLink></li><li><InnerLink toTop to="monster-mud_elemental-huge-mud-elemental">Huge Mud Elemental</InnerLink></li><li><InnerLink toTop to="monster-mud_elemental-greater-mud-elemental">Greater Mud Elemental</InnerLink></li><li><InnerLink toTop to="monster-mud_elemental-elder-mud-elemental">Elder Mud Elemental</InnerLink></li></ul></div><p><em>This animate pile of mud seems barely able to maintain the semblance of a humanoid form made of dripping sludge.</em></p>
<Header full><span>Small Mud Elemental</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-mud_elemental--info" source={[["Bestiary 2",120]]} xp="400" n small outsider subs={["earth","elemental","extraplanar","water"]} init={-1} dv={60} tremorsense={30} pcp={5} />
<Defense id="monster-mud_elemental--defense" ac={[16,10,16]} mod="-1 Dex, +6 natural, +1 size" hp={[13,"2d10+2"]} fort="+4" ref="+2" will="+0" immune="acid, elemental traits" />
<Offense id="monster-mud_elemental--offense" sp={20} br={10} sw={30} spExtra="earth glide" melee="slam +5 (1d4+3 plus entrap)" entrap="DC 12, 10 minutes, hardness 5, hp 5" />
<Stats id="monster-mud_elemental--stats" atts={[14,8,13,4,11,11]} bab={2} cmb={3} cmd={12} feats={["Improved Bull Rush","Power Attack"]} skills={{"climb":{"b":6}}} />
<Ecology id="monster-mud_elemental--eco-eco" env={<>any land or water (<Link to="/rule/plane_of_earth">Plane of Earth</Link>)</>} org="solitary, pair, or gang (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Earth Glide (Ex)</strong> A burrowing mud elemental can pass through dirt, gravel, or other loose or porous solid matter as easily as a fish swims through water. It cannot use this ability to pass through a solid barrier such as a stone or brick wall. Its burrowing leaves behind no tunnel or hole, nor does it create any ripple or other sign of its presence. A <Link to="/spell/move_earth">move earth</Link> spell cast on an area containing a burrowing mud elemental flings the elemental back 30 feet, <Link to="/misc/stun">stunning</Link> the creature for 1 round unless it succeeds on a DC 15 Fortitude save.</p>
<p><strong>Entrap (Ex)</strong> The mud from an elemental's <Link to="/umr/entrap">entrap</Link> ability can be washed away in 1d3 rounds of immersion in water.</p>
<Header sub>Description</Header>
<p>Where the <Link to="/rule/plane_of_earth">Plane of Earth</Link> borders the <Link to="/rule/plane_of_water">Plane of Water</Link>, a mixing of the fundamental elements occurs - it is in this borderland that the mud elementals dwell. Scorned by earth and water elementals, mud elementals usually look like vaguely recognizable blobs of mud in the shape of a Material Plane creature, whether a humanoid, an animal, or even an immense insect. The exact density of their muddy bodies varies - some might be composed of silty water, while others are thick, like river clay. Large and powerful mud elementals tend to have worm-like, reptilian, or frog-like forms.</p>
<p><strong>Family:</strong> <Link to="/family/elemental">Elemental</Link></p>
<Header full id="monster-mud_elemental-medium-mud-elemental"><span>Medium Mud Elemental</span><span>CR 3</span></Header>
<div className="reduce">
<Info id="monster-mud_elemental--info" source={[["Bestiary 2",120]]} xp="800" n medium outsider subs={["earth","elemental","extraplanar","water"]} init={0} dv={60} tremorsense={30} pcp={7} />
<Defense id="monster-mud_elemental--defense" ac={[16,10,16]} mod="+6 natural" hp={[30,"4d10+8"]} fort="+6" ref="+4" will="+1" immune="acid, elemental traits" />
<Offense id="monster-mud_elemental--offense" sp={20} br={10} sw={30} spExtra="earth glide" melee="slam +7 (1d6+4 plus entrap)" entrap="DC 14, 10 minutes, hardness 5, hp 5" />
<Stats id="monster-mud_elemental--stats" atts={[16,10,15,4,11,11]} bab={4} cmb={7} cmd={17} feats={["Cleave","Improved Bull Rush","Power Attack"]} skills={{"climb":{"b":8}}} />
<Header full id="monster-mud_elemental-large-mud-elemental"><span>Large Mud Elemental</span><span>CR 5</span></Header>
<Info id="monster-mud_elemental--info" source={[["Bestiary 2",120]]} xp="1,600" n large outsider subs={["earth","elemental","extraplanar","water"]} init={1} dv={60} tremorsense={30} pcp={11} />
<Defense id="monster-mud_elemental--defense" ac={[17,10,16]} mod="+1 Dex, +7 natural, -1 size" hp={[68,"8d10+24"]} fort="+9" ref="+7" will="+2" dr="5/-" immune="acid, elemental traits" />
<Offense id="monster-mud_elemental--offense" sp={20} br={10} sw={30} spExtra="earth glide" melee="2 slams +12 (1d8+5 plus entrap)" space={"10"} reach={"10"} entrap="DC 17, 10 minutes, hardness 10, hp 10" />
<Stats id="monster-mud_elemental--stats" atts={[20,12,17,4,11,11]} bab={8} cmb={14} cmd={25} feats={["Cleave","Great Cleave","Greater Bull Rush","Improved Bull Rush","Power Attack"]} skills={{"climb":{"b":12}}} />
<Header full id="monster-mud_elemental-huge-mud-elemental"><span>Huge Mud Elemental</span><span>CR 7</span></Header>
<Info id="monster-mud_elemental--info" source={[["Bestiary 2",120]]} xp="3,200" n huge outsider subs={["earth","elemental","extraplanar","water"]} init={3} dv={60} tremorsense={30} pcp={13} />
<Defense id="monster-mud_elemental--defense" ac={[20,12,16]} mod="+3 Dex, +1 dodge, +8 natural, -2 size" hp={[95,"10d10+40"]} fort="+11" ref="+10" will="+3" dr="5/-" immune="acid, elemental traits" />
<Offense id="monster-mud_elemental--offense" sp={20} br={10} sw={30} spExtra="earth glide" melee="2 slams +15 (2d6+7 plus entrap)" space={"15"} reach={"15"} entrap="DC 19, 10 minutes, hardness 5, hp 15" />
<Stats id="monster-mud_elemental--stats" atts={[24,16,19,6,11,11]} bab={10} cmb={19} cmd={33} feats={["Cleave","Dodge","Great Cleave","Greater Bull Rush","Improved Bull Rush","Power Attack"]} skills={{"climb":{"b":17}}} />
<Header full id="monster-mud_elemental-greater-mud-elemental"><span>Greater Mud Elemental</span><span>CR 9</span></Header>
<Info id="monster-mud_elemental--info" source={[["Bestiary 2",121]]} xp="6,400" n huge outsider subs={["earth","elemental","extraplanar","water"]} init={4} dv={60} tremorsense={30} pcp={16} />
<Defense id="monster-mud_elemental--defense" ac={[22,13,17]} mod="+4 Dex, +1 dodge, +9 natural, -2 size" hp={[123,"13d10+52"]} fort="+12" ref="+14" will="+4" dr="10/-" immune="acid, elemental traits" />
<Offense id="monster-mud_elemental--offense" sp={20} br={10} sw={30} spExtra="earth glide" melee="2 slams +20 (2d8+9 plus entrap)" space={"15"} reach={"15"} entrap="DC 20, 10 minutes, hardness 10, hp 15" />
<Stats id="monster-mud_elemental--stats" atts={[28,18,19,8,11,11]} bab={13} cmb={24} cmd={39} feats={["Awesome Blow","Cleave","Dodge","Great Cleave","Greater Bull Rush","Improved Bull Rush","Lightning Reflexes","Power Attack"]} skills={{"climb":{"b":25}}} />
<Header full id="monster-mud_elemental-elder-mud-elemental"><span>Elder Mud Elemental</span><span>CR 11</span></Header>
<Info id="monster-mud_elemental--info" source={[["Bestiary 2",121]]} xp="12,800" n huge outsider subs={["earth","elemental","extraplanar","water"]} init={5} dv={60} tremorsense={30} pcp={19} />
<Defense id="monster-mud_elemental--defense" ac={[23,14,17]} mod="+5 Dex, +1 dodge, +9 natural, -2 size" hp={[152,"16d10+64"]} fort="+14" ref="+17" will="+5" dr="10/-" immune="acid, elemental traits" />
<Offense id="monster-mud_elemental--offense" sp={20} br={10} sw={30} spExtra="earth glide" melee="2 slams +24 (2d10+10/19-20 plus entrap)" space={"15"} reach={"15"} entrap="DC 22, 10 minutes, hardness 5, hp 15" />
<Stats id="monster-mud_elemental--stats" atts={[30,20,19,10,11,11]} bab={16} cmb={28} cmd={44} feats={["Awesome Blow","Cleave","Dodge","Great Cleave","Greater Bull Rush","Improved Bull Rush",["Improved Critical"," (slams)"],"Lightning Reflexes","Power Attack"]} skills={{"climb":{"b":29}}} />
</div>
</>};
const _water_elemental = {hasJL:true,title: "Water Elemental", jsx: <><div className="jumpList" id="monster-water_elemental-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="monster-water_elemental-medium-water-elemental">Medium Water Elemental</InnerLink></li><li><InnerLink toTop to="monster-water_elemental-large-water-elemental">Large Water Elemental</InnerLink></li><li><InnerLink toTop to="monster-water_elemental-huge-water-elemental">Huge Water Elemental</InnerLink></li><li><InnerLink toTop to="monster-water_elemental-greater-water-elemental">Greater Water Elemental</InnerLink></li><li><InnerLink toTop to="monster-water_elemental-elder-water-elemental">Elder Water Elemental</InnerLink></li></ul></div><p><em>This translucent creature's shape shifts between a spinning column of water and a crashing wave.</em></p>
<Header full><span>Small Water Elemental</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-water_elemental--info" source={[["Pathfinder RPG Bestiary",126]]} xp="400" n small outsider subs={["elemental","extraplanar","water"]} init={0} dv={60} pcp={4} />
<Defense id="monster-water_elemental--defense" ac={[17,11,17]} mod="+6 natural, +1 size" hp={[13,"2d10+2"]} fort="+4" ref="+3" will="+0" immune="elemental traits" />
<Offense id="monster-water_elemental--offense" sp={20} sw={90} melee="slam +5 (1d6+3)" specAtt={[["drench","drench"],["vortex DC 13","vortex (DC 13)"],["water mastery","water mastery"]]} />
<Stats id="monster-water_elemental--stats" atts={[14,10,13,4,11,11]} bab={2} cmb={3} cmd={13} feats={["Power Attack"]} skills={{"acro":{"b":4},"ea":{"b":4},"k":{"p":1},"per":{"b":4},"stl":{"b":8},"swim":{"b":14}}} />
<Ecology id="monster-water_elemental--eco-eco" env={<>any (<Link to="/rule/plane_of_water">Plane of Water</Link>)</>} org="solitary, pair, or gang (3-8)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Drench (Ex)</strong> The elemental's touch puts out nonmagical flames of Large size or smaller. The creature can dispel magical fire it touches as <Link to="/spell/dispel_magic">dispel magic</Link> (caster level equals elemental's HD).</p>
<p><strong>Vortex (Su)</strong> A water elemental can create a whirlpool as a standard action, at will. This ability functions identically to the <Link to="/umr/whirlwind">whirlwind</Link> special attack, but can only form underwater and cannot leave the water.</p>
<p><strong>Water Mastery (Ex)</strong> A water elemental gains a +1 bonus on attack and damage rolls if both it and its opponent are touching water. If the opponent or the elemental is touching the ground, the elemental takes a -4 penalty on attack and damage rolls. These modifiers apply to <Link to="/rule/bull_rush">bull rush</Link> and <Link to="/rule/overrun">overrun</Link> maneuvers, whether the elemental is initiating or resisting these kinds of attacks.</p>
<Header sub>Description</Header>
<p>Water elementals are patient, relentless creatures made of living fresh or salt water. They prefer to hide or drag their opponents into the water to gain an advantage.</p>
<p>As with other elementals, all water elementals have their own unique shapes and appearances. Most appear as wave-like creatures with vaguely humanoid faces and smaller wave "arms" to either side. Another common form is that of any aquatic creature, such as a shark or octopus, but made entirely out of water.</p>
<ScrollContainer id="monster-water_elemental--table-0"><table>
<thead>
<tr>
<th>Elemental</th>
<th>Height</th>
<th>Weight</th>
<th>Vortex Save DC</th>
<th>Vortex Height</th>
</tr>
</thead>
<tbody><tr>
<td>Small</td>
<td>4 ft.</td>
<td>34 lb.</td>
<td>13</td>
<td>10-20 ft.</td>
</tr>
<tr>
<td>Medium</td>
<td>8 ft.</td>
<td>280 lbs.</td>
<td>15</td>
<td>10-30 ft.</td>
</tr>
<tr>
<td>Large</td>
<td>16 ft.</td>
<td>2,250 lbs.</td>
<td>19</td>
<td>10-40 ft.</td>
</tr>
<tr>
<td>Huge</td>
<td>32 ft.</td>
<td>18,000 lbs.</td>
<td>22</td>
<td>10-50 ft.</td>
</tr>
<tr>
<td>Greater</td>
<td>36 ft.</td>
<td>21,000 lbs.</td>
<td>25</td>
<td>10-60 ft.</td>
</tr>
<tr>
<td>Elder</td>
<td>40 ft.</td>
<td>24,000 lbs.</td>
<td>28</td>
<td>10-60 ft.</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Family:</strong> <Link to="/family/elemental">Elemental</Link></p>
<Header full id="monster-water_elemental-medium-water-elemental"><span>Medium Water Elemental</span><span>CR 3</span></Header>
<div className="reduce">
<Info id="monster-water_elemental--info" source={[["Pathfinder RPG Bestiary",126]]} xp="800" n medium outsider subs={["elemental","extraplanar","water"]} init={1} dv={60} pcp={5} />
<Defense id="monster-water_elemental--defense" ac={[17,11,16]} mod="+1 Dex, +6 natural" hp={[30,"4d10+8"]} fort="+6" ref="+5" will="+1" immune="elemental traits" />
<Offense id="monster-water_elemental--offense" sp={20} sw={90} melee="slam +7 (1d8+4)" specAtt={[["drench","drench"],["vortex DC 15","vortex (DC 15)"],["water mastery","water mastery"]]} />
<Stats id="monster-water_elemental--stats" atts={[16,12,15,4,11,11]} bab={4} cmb={7} cmd={18} feats={["Cleave","Power Attack"]} skills={{"acro":{"b":6},"ea":{"b":6},"k":{"p":2},"per":{"b":5},"stl":{"b":6},"swim":{"b":16}}} />
<Header full id="monster-water_elemental-large-water-elemental"><span>Large Water Elemental</span><span>CR 5</span></Header>
<Info id="monster-water_elemental--info" source={[["Pathfinder RPG Bestiary",126]]} xp="1,600" n large outsider subs={["elemental","extraplanar","water"]} init={2} dv={60} pcp={9} />
<Defense id="monster-water_elemental--defense" ac={[18,12,15]} mod="+2 Dex, +1 dodge, +6 natural, -1 size" hp={[68,"8d10+24"]} fort="+9" ref="+8" will="+2" dr="5/-" immune="elemental traits" />
<Offense id="monster-water_elemental--offense" sp={20} sw={90} melee="2 slams +12 (1d8+5)" space={"10"} reach={"10"} specAtt={[["drench","drench"],["vortex DC 19","vortex (DC 19)"],["water mastery","water mastery"]]} />
<Stats id="monster-water_elemental--stats" atts={[20,14,17,6,11,11]} bab={8} cmb={14} cmd={27} feats={["Cleave","Dodge","Great Cleave","Power Attack"]} skills={{"acro":{"b":9},"ea":{"b":11},"k":{"p":5},"per":{"b":9},"stl":{"b":5},"swim":{"b":24}}} />
<Header full id="monster-water_elemental-huge-water-elemental"><span>Huge Water Elemental</span><span>CR 7</span></Header>
<Info id="monster-water_elemental--info" source={[["Pathfinder RPG Bestiary",126]]} xp="3,200" n huge outsider subs={["elemental","extraplanar","water"]} init={4} dv={60} pcp={13} />
<Defense id="monster-water_elemental--defense" ac={[21,13,16]} mod="+4 Dex, +1 dodge, +8 natural, -2 size" hp={[95,"10d10+40"]} fort="+11" ref="+11" will="+3" dr="5/-" immune="elemental traits" />
<Offense id="monster-water_elemental--offense" sp={20} sw={90} melee="2 slams +15 (2d6+7)" space={"15"} reach={"15"} specAtt={[["drench","drench"],["vortex DC 22","vortex (DC 22)"],["water mastery","water mastery"]]} />
<Stats id="monster-water_elemental--stats" atts={[24,18,19,6,11,11]} bab={10} cmb={19} cmd={34} feats={["Cleave","Dodge","Great Cleave","Improved Bull Rush","Power Attack"]} skills={{"acro":{"b":11},"ea":{"b":15},"k":{"p":7},"per":{"b":13},"stl":{"b":3},"swim":{"b":26}}} />
<Header full id="monster-water_elemental-greater-water-elemental"><span>Greater Water Elemental</span><span>CR 9</span></Header>
<Info id="monster-water_elemental--info" source={[["Pathfinder RPG Bestiary",127]]} xp="6,400" n huge outsider subs={["elemental","extraplanar","water"]} init={5} dv={60} pcp={16} />
<Defense id="monster-water_elemental--defense" ac={[23,14,17]} mod="+5 Dex, +1 dodge, +9 natural, -2 size" hp={[123,"13d10+52"]} fort="+12" ref="+15" will="+4" dr="10/-" immune="elemental traits" />
<Offense id="monster-water_elemental--offense" sp={20} sw={90} melee="2 slams +20 (2d8+9)" space={"15"} reach={"15"} specAtt={[["drench","drench"],["vortex DC 25","vortex (DC 25)"],["water mastery","water mastery"]]} />
<Stats id="monster-water_elemental--stats" atts={[28,20,19,8,11,11]} bab={13} cmb={24} cmd={40} feats={["Cleave","Dodge","Great Cleave","Improved Bull Rush","Improved Sunder","Lightning Reflexes","Power Attack"]} skills={{"acro":{"b":18},"ea":{"b":20},"k":{"p":12},"per":{"b":16},"stl":{"b":10},"swim":{"b":30}}} />
<Header full id="monster-water_elemental-elder-water-elemental"><span>Elder Water Elemental</span><span>CR 11</span></Header>
<Info id="monster-water_elemental--info" source={[["Pathfinder RPG Bestiary",127]]} xp="12,800" n huge outsider subs={["elemental","extraplanar","water"]} init={6} dv={60} pcp={19} />
<Defense id="monster-water_elemental--defense" ac={[24,15,17]} mod="+6 Dex, +1 dodge, +9 natural, -2 size" hp={[152,"16d10+64"]} fort="+14" ref="+18" will="+5" dr="10/-" immune="elemental traits" />
<Offense id="monster-water_elemental--offense" sp={20} sw={90} melee="2 slams +24 (2d10+10/19-20)" space={"15"} reach={"15"} specAtt={[["drench","drench"],["vortex DC 28","vortex (DC 28)"],["water mastery","water mastery"]]} />
<Stats id="monster-water_elemental--stats" atts={[30,22,19,10,11,11]} bab={16} cmb={28} cmd={45} feats={["Cleave","Dodge","Great Cleave","Improved Bull Rush",["Improved Critical"," (slam)"],"Improved Sunder","Lightning Reflexes","Power Attack"]} skills={{"acro":{"b":25},"ea":{"b":25},"k":{"p":19},"per":{"b":19},"stl":{"b":17},"swim":{"b":37}}} />
</div>
</>};
const _shadow_rat = {title: "Shadow Rat", jsx: <><p><em>This creature appears as a rat with rotting flesh, torn and matted fur, and reddish blazing eyes. Its semi-translucent skin shows discolored bones and muscles.</em></p>
<Header full><span>Shadow Rat</span><span>CR 1/2</span></Header>
<div className="reduce">
<Info id="monster-shadow_rat--info" source={[["Pathfinder #91: Battle of Bloodmarch Hills",31],["Tome of Horrors Complete (PF)",504]]} xp="200" n tiny undead init={2} dv={60} scent pcp={8} />
<Defense id="monster-shadow_rat--defense" ac={[14,14,13]} mod="+2 Dex, +1 natural, +2 size" hp={[5,"1d8+1"]} fort="+1" ref="+2" will="+3" def={[["incorporeal form","incorporeal form"],["shadow blend","shadow blend"]]} immune={<Link to="/umr/undead_traits">undead traits</Link>} />
<Offense id="monster-shadow_rat--offense" sp={40} cl={15} melee={<>bite +4 (1d3-2 plus 1d2 <Link to="/rule/strength_damage">Strength damage</Link> and disease)</>} space={"2-1/2"} reach={"0"} />
<Stats id="monster-shadow_rat--stats" atts={[6,15,0,2,12,13]} bab={0} cmb={0} cmd={8} cmdP="12 vs. trip" feats={[["Skill Focus"," (Perception)"],["Weapon Finesse",<sup>B</sup>]]} skills={{"climb":{"b":10},"per":{"b":8},"stl":{"b":14}}} racial="+4 Stealth; uses Dex to modify Climb" />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Ecology id="monster-shadow_rat--eco-eco" env="underground" org="pack (6-11) or swarm (12-20)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Disease (Ex)</strong> <Link to="/disease/filth_fever">Filth fever</Link>, but the save DC is 11. The save DC is Charisma-based.</p>
<p><strong>Incorporeal Form (Su)</strong> As a standard action a shadow rat can assume an incorporeal form. It can maintain this form for up to 1 hour per day. In this form, the shadow rat gains the <Link to="/subtype/incorporeal">incorporeal</Link> subtype and has AC 15, touch 15, flat-footed 13 (+1 deflection, +2 Dex, +2 size). The shadow rat can still bite corporeal opponents while in its incorporeal form, but its attack deals only Strength damage and doesn't cause hit point damage or disease.</p>
<p><strong>Shadow Blend (Ex)</strong> In any condition of illumination other than bright light, a shadow rat can disappear into the shadows as a move action, giving it total <Link to="/rule/concealment">concealment</Link> (50% miss chance). Artificial illumination, even a <Link to="/spell/light">light</Link> or <Link to="/spell/continual_flame">continual flame</Link> spell, does not negate this ability; a <Link to="/spell/daylight">daylight</Link> spell, however, does.</p>
<p><strong>Strength Damage (Su)</strong> A shadow rat deals Strength damage to living foes it bites. A creature reduced to 0 Strength does not die but cannot move and is <Link to="/misc/unconscious">unconscious</Link>.</p>
<Header sub>Description</Header>
<p>Shadow rats are undead rats that can assume an incorporeal form. Other than their semi-translucent form (which they maintain regardless of their incorporeality or not), they resemble their earthly counterparts in all respects.</p>
<p>Shadow rats attack relentlessly with their bite attack. Unlike normal shadows, shadow rats do not create spawn.</p>
</>};
const _dire_shadow_rat = {title: "Dire Shadow Rat", jsx: <><p><em>This creature appears as a rat with rotting flesh, torn and matted fur, and reddish blazing eyes. Its semi-translucent skin shows discolored bones and muscles.</em></p>
<Header full><span>Dire Shadow Rat</span><span>CR 1</span></Header>
<div className="reduce">
<Info id="monster-dire_shadow_rat--info" source={[["Pathfinder #91: Battle of Bloodmarch Hills",54],["Tome of Horrors Complete (PF)",504]]} xp="400" n small undead init={3} dv={60} scent pcp={8} />
<Defense id="monster-dire_shadow_rat--defense" ac={[14,14,11]} mod="+3 Dex, +1 size" hp={[11,"2d8+2"]} fort="+1" ref="+3" will="+4" def={[["incorporeal form","incorporeal form"],["shadow blend","shadow blend"]]} immune={<Link to="/umr/undead_traits">undead traits</Link>} />
<Offense id="monster-dire_shadow_rat--offense" sp={40} cl={20} melee={<>bite +5 (1d4 plus 1d3 <Link to="/rule/strength_damage">Strength damage</Link> and disease)</>} />
<Stats id="monster-dire_shadow_rat--stats" atts={[10,17,0,2,12,13]} bab={1} cmb={0} cmd={13} cmdP="17 vs. trip" feats={[["Skill Focus"," (Perception)"],["Weapon Finesse",<sup>B</sup>]]} skills={{"climb":{"b":11},"per":{"b":8},"stl":{"b":15}}} racial="+4 Stealth; uses Dex to modify Climb" />
<p className="spells indented"><sup><strong>B</strong></sup> Bonus feat.</p>
<Ecology id="monster-dire_shadow_rat--eco-eco" env="underground" org="solitary or pack (6-11)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Disease (Ex)</strong> <Link to="/disease/filth_fever">Filth fever</Link>.</p>
<p><strong>Incorporeal Form (Su)</strong> See <Link to="/monster/shadow_rat">shadow rat</Link>, except AC 15, touch 15, flat-footed 12 (+1 deflection, +3 Dex, +1 size)</p>
<p><strong>Shadow Blend (Ex)</strong> See shadow rat.</p>
<p><strong>Strength Damage (Su)</strong> See shadow rat.</p>
<Header sub>Description</Header>
<p>Dire shadow rats are larger versions of the shadow rat and have the same special abilities.</p>
</>};
const _shadow_rat_swarm = {title: "Shadow Rat Swarm", jsx: <><p><em>A squirming and squeaky mass of rats with rotting flesh, torn and matted fur, and reddish blazing eyes moves toward you. Their semi-translucent skin shows discolored bones and muscle.</em></p>
<Header full><span>Shadow Rat Swarm</span><span>CR 4</span></Header>
<div className="reduce">
<Info id="monster-shadow_rat_swarm--info" source={[["Pathfinder #91: Battle of Bloodmarch Hills",52],["Tome of Horrors Complete (PF)",586]]} xp="1,200" ne tiny undead subs={["swarm"]} init={6} dv={60} scent pcp={10} />
<Defense id="monster-shadow_rat_swarm--defense" ac={[14,14,12]} mod="+2 Dex, +2 size" hp={[39,"6d8+12"]} fort="+4" ref="+6" will="+6" def={[["half damage from piercing and slashing","half damage from piercing and slashing"],["incorporeal form","incorporeal form"],["shadow blend","shadow blend"],["swarm traits","swarm traits"]]} immune={<Link to="/umr/undead_traits">undead traits</Link>} />
<Offense id="monster-shadow_rat_swarm--offense" sp={40} cl={15} melee={<>swarm (2d6 plus 1d4 <Link to="/rule/strength_damage">Strength damage</Link> and disease)</>} space={"10"} reach={"0"} distraction={15} />
<Stats id="monster-shadow_rat_swarm--stats" atts={[6,15,0,2,12,15]} bab={4} cmb={null} cmd={null} feats={["Improved Initiative","Lightning Reflexes",["Skill Focus"," (Perception)"]]} skills={{"climb":{"b":10},"per":{"b":10},"stl":{"b":20}}} racial="+4 Stealth; uses Dex to modify Climb" />
<Ecology id="monster-shadow_rat_swarm--eco-eco" env="underground" org="solitary, pack (2-4 swarms), or nest (5-8 swarms)" treasure={{"X":false}} />
</div>
<Header sub>Special Abilities</Header>
<p><strong>Disease (Ex)</strong> <Link to="/disease/filth_fever">Filth fever</Link>, but the save DC is 15.</p>
<p><strong>Incorporeal Form (Su)</strong> As the <Link to="/monster/shadow_rat">shadow rat</Link>, except AC 16, touch 16, flat-footed 14 (+2 deflection, +2 Dex, +2 size)</p>
<p><strong>Shadow Blend (Ex)</strong> See shadow rat.</p>
<p><strong>Strength Damage (Su)</strong> See shadow rat.</p>
<Header sub>Description</Header>
<p>Shadow rats are essentially undead rats that can assume an incorporeal form. Other than their semi-translucent form, they resemble their earthly counterparts in all respects. A shadow rat swarm is simply a massive number of shadow rats that have cluttered or banded together for survival or food.</p>
<p>Shadow rat swarms can be found just about anywhere, but are most commonly encountered near graveyards, ruined temples, and haunted sewers.</p>
</>};
export default {dweomercat:_dweomercat,dweomercat_dweomercat_cub:_dweomercat_dweomercat_cub,dwiergeth:_dwiergeth,dybbuk:_dybbuk,eagle:_eagle,eagle_giant_eagle:_eagle_giant_eagle,eaisge:_eaisge,ebon_acolytus:_ebon_acolytus,echeneis:_echeneis,ecorche:_ecorche,eel_electric_eel:_eel_electric_eel,eel_giant_moray_eel:_eel_giant_moray_eel,egophage:_egophage,egregore:_egregore,eidolon_unfettered:_eidolon_unfettered,einherji:_einherji,ekekeh:_ekekeh,elder_thing:_elder_thing,elder_wyrm:_elder_wyrm,aether_elemental:_aether_elemental,air_elemental:_air_elemental,earth_elemental:_earth_elemental,fire_elemental:_fire_elemental,ice_elemental:_ice_elemental,lightning_elemental:_lightning_elemental,magma_elemental:_magma_elemental,mud_elemental:_mud_elemental,water_elemental:_water_elemental,shadow_rat:_shadow_rat,dire_shadow_rat:_dire_shadow_rat,shadow_rat_swarm:_shadow_rat_swarm}