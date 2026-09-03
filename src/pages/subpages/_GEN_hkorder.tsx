import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import {Block,Row,Cell} from '../../components/Block';
import InnerLink from '../../components/InnerLink';
import Message from '../../components/Message';
const _not_found = {title: "Unknown", jsx: <><h2 id="hkorder-not_found-error">Error</h2>
<p>Unable to find the requested order.</p>
</>};
const _order_of_the_chain = {title: "Order of the Chain", jsx: <><h2 id="hkorder-order_of_the_chain-order-of-the-chain">Order of the Chain</h2>
<p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 10</Link></p>
<Block size="minimal">
<Row><Cell>Symbol</Cell><Cell>Hand wrapped in chains</Cell></Row>
<Row><Cell>Headquarters</Cell><Cell>Citadel Gheradesca, near Corentyn</Cell></Row>
<Row><Cell>Leader</Cell><Cell>Lictor Uro Adom (LN male human fighter 5/Hellknight 7)</Cell></Row>
<Row><Cell>Members</Cell><Cell>Guards, sleuths, trackers, victims of outlaws</Cell></Row>
<Row><Cell>Armor Features</Cell><Cell>Lock-and-chain design, manacle-like gauntlets, helms reminiscent of iron prisoners' masks</Cell></Row>
<Row><Cell>Favored Weapon</Cell><Cell><Link to="/eq-weapon/flail">Flail</Link></Cell></Row></Block>
<Ability id="reckoning" icon={["upgrade"]}>
<Pair single id="reckoning">Reckoning</Pair>
<Pair title="Reckoning" hl>Crush your limbs with tightened chains.</Pair>
<Pair title="Benefit">Gain a +2 bonus on combat maneuver checks when attempting to <Link to="/rule/disarm">disarm</Link>, <Link to="/rule/grapple">grapple</Link>, or <Link to="/rule/trip">trip</Link> opponents.</Pair>
</Ability>
<p>Hellknights of the Chain value social order and responsibility, seeking to root out anarchists and fugitives. They have reputations as relentless hunters who drag lawbreakers away in chains. These Hellknights keep meticulous count of the number of criminals they've brought to justice; they never abandon the pursuit of a fugitive, and they believe everyone has a specific, crucial role to play in society.</p>
<h3 id="hkorder-order_of_the_chain-tenets">Tenets</h3>
<ul>
<li>I will remove those who create barriers to the people's future greatness.</li>
<li>My desires are secondary to the good of my order, my nation, and my people. They will not distract me from my tasks.</li>
<li>I will remove the foes of the people, both those who call themselves enemies and who call themselves friends.</li>
<li>My quarry and my captives are my charges. I am responsible for their deeds, their lives, and their deaths.</li>
<li>Those in my charge deserve neither mercy nor cruelty.</li>
<li>I will warden first and judge second. I will uphold the law, no matter the cost.</li>
</ul>
<h3 id="hkorder-order_of_the_chain-hellknight-obedience-boons"><Link to="/feat/hellknight_obedience">Hellknight Obedience</Link> Boons</h3>
<Ability id="1-taken-alive-ex" icon={["upgrade"]}>
<Pair single id="1-taken-alive-ex" flavor="You are an expert in hunting your quarry and capturing it alive.">1: Taken Alive (Ex)</Pair>
<Pair title="Passive Ability">You take no penalty on attack rolls for using a flail to deal nonlethal damage.</Pair>
<Pair title="Ability">Additionally, while performing your reckoning, you can focus on understanding one specific individual. For the next 24 hours, you gain a +4 bonus on <Link to="/skill/perception">Perception</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, and <Link to="/skill/survival">Survival</Link> checks that relate to noticing, seeing through the disguises of, interrogating others about the location of, or tracking that individual, or any activity directly related to doing so.</Pair>
</Ability>
<Ability id="2-pierce-disguise-sp" icon={["stairs-goal"]}>
<Pair single id="2-pierce-disguise-sp" flavor="You are suspicious of everyone, and your wariness grants you senses others do not have.">2: Pierce Disguise (Sp)</Pair>
<Pair title="Usage">1 minute/day per two character levels; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability">You can use <Link to="/spell/true_seeing">true seeing</Link> as a spell-like ability.</Pair>
</Ability>
<Ability id="3-true-identities-su" icon={["armor-upgrade"]}>
<Pair single id="3-true-identities-su" flavor="You are not easily fooled by those who would hide their true natures.">3: True Identities (Su)</Pair>
<Pair title="Passive Ability">You gain a +4 bonus on Will saving throws to disbelieve illusions.</Pair>
<Pair title="Free Action">Three times per day, when you successfully disbelieve an illusion that has a duration of longer than instantaneous (normally or using <em>true seeing</em>), you can attempt to dispel the illusion. Treat this as a targeted dispel, as per the spell <Link to="/spell/dispel_magic">dispel magic</Link>, but targeting only illusions and with your caster level equal to your character level.</Pair>
</Ability>
</>};
const _order_of_the_gate = {title: "Order of the Gate", jsx: <><h2 id="hkorder-order_of_the_gate-order-of-the-gate">Order of the Gate</h2>
<p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 16</Link></p>
<Block size="minimal">
<Row><Cell>Symbol</Cell><Cell>Infernal eye staring out from a swirling portal</Cell></Row>
<Row><Cell>Headquarters</Cell><Cell>Headquarters Citadel Enferac, east of Pezzack</Cell></Row>
<Row><Cell>Leader</Cell><Cell>Vicarius Girdano Torchia (LE male human wizard 11/Hellknight 2)</Cell></Row>
<Row><Cell>Members</Cell><Cell>Devil worshipers, intellectuals, planar-blooded outcasts, spellcasters</Cell></Row>
<Row><Cell>Armor Features</Cell><Cell>Helm with a vortex-like pattern, crimson robes</Cell></Row>
<Row><Cell>Favored Weapon</Cell><Cell><Link to="/eq-weapon/dagger">Dagger</Link></Cell></Row></Block>
<Ability id="reckoning" icon={["armor-upgrade"]}>
<Pair single id="reckoning">Reckoning</Pair>
<Pair title="Reckoning" hl>Etch complex symbols of penitence into your flesh with a dagger.</Pair>
<Pair title="Benefit">Gain a +4 bonus on Will saving throws to resist divination spells and spell-like abilities.</Pair>
</Ability>
<p>Order of the Gate Hellknights seek to curb and prevent lawlessness through magic and manipulation. They have reputations as mysterious, emotionless, and sometimes cruel magic-users. Many are convinced that the Order of the Gate's Hellknights are spying on them or already know their secrets. Sometimes this fear is true, as the order's members prefer preventing crime to punishing it and often use manipulation, information-gathering, and spying to further their agenda.</p>
<h3 id="hkorder-order_of_the_gate-tenets">Tenets</h3>
<ul>
<li>Lawlessness is a failing of the leaderless and unwatched. I will mind those who would go unnoticed.</li>
<li>My power is a gift, not to me, but to the world. It is my responsibility to use it to forge greatness.</li>
<li>I will pursue perfection, ever knowing that I will truly master nothing.</li>
<li>Knowledge is not the same as wisdom. I will hone my iron judgment upon the stones of experience and worldliness.</li>
<li>There is cleverness in chaos. There is deceit in ruin. I will never underestimate either.</li>
<li>My face must be forged of iron. It must never crack, regardless of the circumstance.</li>
</ul>
<h3 id="hkorder-order_of_the_gate-hellknight-obedience-boons"><Link to="/feat/hellknight_obedience">Hellknight Obedience</Link> Boons</h3>
<Ability id="1-focus-of-mind-su" icon={["stairs-goal"]}>
<Pair single id="1-focus-of-mind-su">1: Focus of Mind (Su)</Pair>
<Pair title="Ability">You gain one gaze ability from the list detailed as part of the <em>assiduous gaze</em> class feature of the <Link to="/pclass/hellknight_signifer">Hellknight signifer</Link> prestige class. You can choose only a gaze that a Hellknight signifer could choose at 4th level. If you already have the <em>assiduous gaze</em> ability, you can select one additional gaze.</Pair>
<Pair title="Special">Additionally, if you do not already have one, you receive the mask described in the prestige class's <em>signifer mask</em> class feature, as well as the benefits of the Hellknight signifer prestige class's <em>signifer mask</em> supernatural ability; you must be wearing a <Link to="/eq-misc/signifer_mask">signifer mask</Link> to use this ability.</Pair>
</Ability>
<Ability id="2-armored-spellcasting-ex" icon={["upgrade"]}>
<Pair single id="2-armored-spellcasting-ex" flavor="You have mastered the delicate and yet taxing art of casting spells in your Hellknight armor.">2: Armored Spellcasting (Ex)</Pair>
<Pair title="Passive Ability">You can ignore the spell failure chance of any armor with "Hellknight" in the name.</Pair>
</Ability>
<Ability id="3-unfathomable-gaze-sp" icon={["magic-swirl"]}>
<Pair single id="3-unfathomable-gaze-sp" flavor="You are able to focus your staunch Hellknight training into a spell-like ritual that allows you to glean information that could be vital to your mission of enforcing the law.">3: Unfathomable Gaze (Sp)</Pair>
<Pair title="Ability">Once per day, while wearing a signifer mask, you can use <Link to="/spell/vision">vision</Link> as a spell-like ability, treating your total character level as your caster level. Unlike casting the spell normally, you are not fatigued after this ability is complete, as your training allows you to shake off what might tire lesser individuals.</Pair>
</Ability>
</>};
const _order_of_the_godclaw = {title: "Order of the Godclaw", jsx: <><h2 id="hkorder-order_of_the_godclaw-order-of-the-godclaw">Order of the Godclaw</h2>
<p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 22</Link></p>
<Block size="minimal">
<Row><Cell>Symbol</Cell><Cell>Five-pointed iron star</Cell></Row>
<Row><Cell>Headquarters</Cell><Cell>Citadel Dinyar, in the Aspodell Mountains</Cell></Row>
<Row><Cell>Leader</Cell><Cell>Lictor Resarc Ountor (LN male fighter 4/cleric 2/Hellknight 6)</Cell></Row>
<Row><Cell>Members</Cell><Cell>Crusaders, religious zealots</Cell></Row>
<Row><Cell>Armor Features</Cell><Cell>Breastplate with claw-like vambraces, claw-like helm</Cell></Row>
<Row><Cell>Favored Weapon</Cell><Cell><Link to="/eq-weapon/morningstar">Morningstar</Link></Cell></Row></Block>
<Ability id="reckoning" icon={["remedy"]}>
<Pair single id="reckoning">Reckoning</Pair>
<Pair title="Reckoning" hl>Flagellate yourself with a five-tailed lash.</Pair>
<Pair title="Benefit">Whenever you are the target of a lawful divine caster's spell that heals hit point damage, you heal 1 additional point per die rolled.</Pair>
<Pair title="Special">Additionally, if you cast divine spells, you can use the holy symbols of Abadar, Asmodeus, Iomedae, Irori, and Torag interchangeably.</Pair>
</Ability>
<p>Order of the Godclaw Hellknights enforce law with a crusader's zeal, going where they're needed most in the fight against the forces of chaos. They know no bounds or borders in the quest for absolute order. To Hellknights of the Godclaw, the cause of order is a holy mandate for which they will travel far to battle chaos in lands that know little of civilization. To others, these Hellknights' faith is likely inexplicable - some believe the members of the order are experts in all five individual faiths or even that they are heretics.</p>
<h3 id="hkorder-order_of_the_godclaw-tenets">Tenets</h3>
<ul>
<li>I will eliminate chaos, whatever its form and wherever it exists, resting only when the world is right.</li>
<li>I will destroy those who root lawlessness in weak hearts and minds.</li>
<li>I will strive to be worthy of not one, but five.</li>
<li>I will seek the great principles behind life, the truths spoken through many voices.</li>
<li>I will be a paragon of order - an unassailable example that others might follow.</li>
<li>I will commit what I don't know or can't understand to the judgment of the five.</li>
</ul>
<h3 id="hkorder-order_of_the_godclaw-hellknight-obedience-boons"><Link to="/feat/hellknight_obedience">Hellknight Obedience</Link> Boons</h3>
<Ability id="1-pentamic-zeal-sp" icon={["magic-swirl"]}>
<Pair single id="1-pentamic-zeal-sp">1: Pentamic Zeal (Sp)</Pair>
<Pair title="Ability">You can cast <Link to="/spell/bane">bane</Link>, <Link to="/spell/bless">bless</Link>, <Link to="/spell/tireless_pursuit">tireless pursuit</Link>, or <Link to="/spell/wrath">wrath</Link> as a spell-like ability three times per day, with your effective caster level equal to your character level.</Pair>
</Ability>
<Ability id="2-tireless-judgment-su" icon={["upgrade"]}>
<Pair single id="2-tireless-judgment-su">2: Tireless Judgment (Su)</Pair>
<Pair title="Swift Action">Three times per day, you can gain a +3 sacred bonus on attack rolls, and a +6 sacred bonus to confirm critical hits. Otherwise, this functions as the <Link to="/class/inquisitor">inquisitor's</Link> <em>justice</em> judgment.</Pair>
<Pair title="At 20th Level">You can use this ability four times per day, and the bonuses increase to +4 and +8.</Pair>
<Pair title="Special">If you already have access to <Link to="/ability/judgments">judgments</Link>, you can use the <em>justice</em> judgment three times per day (four times at 20th level) without it counting toward your daily uses, or you can add the <em>justice</em> judgment's effects to another judgment without it counting as a second or third judgment.</Pair>
</Ability>
<Ability id="3-blessing-of-the-five-su" icon={["remedy"]}>
<Pair single id="3-blessing-of-the-five-su">3: Blessing of the Five (Su)</Pair>
<Pair title="Standard Action">Once per day, you can brandish a holy symbol to heal all living creatures in a 30-foot-radius <Link to="/misc/burst">burst</Link> centered on you. Creatures in the area heal 10d6 points of damage. You can choose up to three creatures in the area that are not healed. Additionally, if a creature in the area has died within 1 round and this brings its hit point total to a negative amount less than its Constitution score, the creature returns to life and <Link to="/misc/stabilize">stabilizes</Link>.</Pair>
<Pair title="Special">This ability can only revive one creature per use, and a revived creature gains a temporary <Link to="/rule/negative_level">negative level</Link> that lasts for 1 day. This ability cannot be modified using any feats or other abilities that affect channeled energy.</Pair>
</Ability>
</>};
const _order_of_the_nail = {title: "Order of the Nail", jsx: <><h2 id="hkorder-order_of_the_nail-order-of-the-nail">Order of the Nail</h2>
<p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 28</Link></p>
<Block size="minimal">
<Row><Cell>Symbol</Cell><Cell>Thick nails forming a sunburst</Cell></Row>
<Row><Cell>Headquarters</Cell><Cell>Citadel Vraid, near Korvosa</Cell></Row>
<Row><Cell>Leader</Cell><Cell>Lictor Severs "Boneclaw" DiViri (LE male fighter 4/rogue 2/Hellknight 4)</Cell></Row>
<Row><Cell>Members</Cell><Cell>Frontiersmen, settlers, victims of barbarian and monster attacks</Cell></Row>
<Row><Cell>Armor Features</Cell><Cell>Breastplate emblazoned with a fiendish face, horned helm</Cell></Row>
<Row><Cell>Favored Weapon</Cell><Cell><Link to="/eq-weapon/lance">Lance</Link> or <Link to="/eq-weapon/halberd">halberd</Link></Cell></Row></Block>
<Ability id="reckoning" icon={["armor-upgrade"]}>
<Pair single id="reckoning">Reckoning</Pair>
<Pair title="Reckoning" hl>Pierce your flesh with sharp metal.</Pair>
<Pair title="Benefit">Gain a +4 bonus on <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> checks. Additionally, if you are trained in Knowledge (geography), you automatically succeed at attempts to use that skill to identify a creature's ethnicity or accent, as long as you are familiar with that ethnicity or accent.</Pair>
</Ability>
<p>Order of the Nail Hellknights idealize the civilized society of southern Avistan and seek to unite all people in advancing that cultural baseline. In fact, the Order of the Nail's members preach that anyone who doesn't embrace Chelish culture is a criminal and heathen who must be destroyed. The order's members idealize the lifestyles and challenges of frontier settlers, no matter the displacement, indignation, or cruelty they might visit on those who were there before.</p>
<h3 id="hkorder-order_of_the_nail-tenets">Tenets</h3>
<ul>
<li>I will strike against civilization's foes, braving both thicket and darkness.</li>
<li>I will rid the world of threats to civilization and make it fit for the law to flourish.</li>
<li>I will fear no creature, though the enemies of order are terrible.</li>
<li>I will not be merciful, though the enemies of order may bear familiar guises - and may even be individuals I have considered dear.</li>
<li>I will seek allies and advantage, confounding luck with wisdom.</li>
<li>I will be the face that monsters dread: fierce, sharp, and unflinching.</li>
</ul>
<h3 id="hkorder-order_of_the_nail-hellknight-obedience-boons"><Link to="/feat/hellknight_obedience">Hellknight Obedience</Link> Boons</h3>
<Ability id="1-domination-ex" icon={["upgrade"]}>
<Pair single id="1-domination-ex">1: Domination (Ex)</Pair>
<Pair title="Ability">Select a creature type from the ranger <Link to="/ability/favored_enemies">favored enemies</Link> table. You treat that creature type as your favored enemy, as per the ranger ability. If you choose humanoid (human), you can select one of the following ethnicities Kellid, Mwangi, Shoanti, or Ulfen (or another clannish or tribal ethnicity, at the GM's discretion). If you choose an ethnicity, the bonuses on skill checks, weapon attack, and weapon damage rolls increase to +4, but you do not gain any bonuses against other humans. These bonuses stack with any favored enemy bonuses gained from other classes.</Pair>
</Ability>
<Ability id="2-identification-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="2-identification-su">2: Identification (Su)</Pair>
<Pair title="Swift Action">Three times per day, you can choose a living creature within sight and know its creature type, ethnicity (if any), and alignment. Additionally, for a number of hours equal to your character level, that creature is treated as though you had cast the spell <Link to="/spell/status">status</Link> upon it.</Pair>
<Pair title="Special">Though unaware of your probing, the target can attempt a Will saving throw to negate this ability (DC = 10 + 1/2 your Hit Dice + your Charisma modifier). Spells such as <Link to="/spell/undetectable_alignment">undetectable alignment</Link> may prevent a portion of this information from being gleaned, while spells such as <Link to="/spell/nondetection">nondetection</Link> stymie this effect entirely. This is a divination effect.</Pair>
</Ability>
<Ability id="3-end-superstition-sp" icon={["magic-swirl"]}>
<Pair single id="3-end-superstition-sp">3: End Superstition (Sp)</Pair>
<Pair title="Ability">Once per day, you can cast <Link to="/spell/mages_disjunction">mage's disjunction</Link>, using your character level as your caster level.</Pair>
</Ability>
</>};
const _order_of_the_pyre = {title: "Order of the Pyre", jsx: <><h2 id="hkorder-order_of_the_pyre-order-of-the-pyre">Order of the Pyre</h2>
<p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 34</Link></p>
<Block size="minimal">
<Row><Cell>Symbol</Cell><Cell>Tower rising from flames</Cell></Row>
<Row><Cell>Headquarters</Cell><Cell>Citadel Krane, near Ostenso</Cell></Row>
<Row><Cell>Leader</Cell><Cell>Lictor Rouen Stought (LN female human ranger 6/Hellknight 4)</Cell></Row>
<Row><Cell>Members</Cell><Cell>Atheists, former cultists, members of mainstream religions, victims of dangerous radicals</Cell></Row>
<Row><Cell>Armor Features</Cell><Cell>Bladed armor, horned and skull-like helm</Cell></Row>
<Row><Cell>Favored Weapon</Cell><Cell><Link to="/eq-weapon/glaive">Glaive</Link></Cell></Row></Block>
<Ability id="reckoning" icon={["armor-upgrade"]}>
<Pair single id="reckoning">Reckoning</Pair>
<Pair title="Reckoning" hl>Burn yourself over an open flame.</Pair>
<Pair title="Immediate Action">Once per day, you can gain fire <Link to="/umr/resistance">resistance</Link> 10 for 10 minutes. This does not stack with <em>resist energy</em> or any other abilities that provide fire resistance and overlaps with protection from energy.</Pair>
</Ability>
<p>Hellknights of the Order of the Pyre seek to combat outlandish faiths and beliefs, preventing them from gaining purchase in the Inner Sea region. They are cult hunters first and foremost, but also fight to repress other philosophies they deem dangerous. These Hellknights hate and vocally condemn cultists, priests of rare religions, and followers of mystical orders.</p>
<h3 id="hkorder-order_of_the_pyre-tenets">Tenets</h3>
<ul>
<li>I will not tolerate the weight of unfit gods upon mortal shoulders.</li>
<li>My fire will burn those thickets of philosophy that crowd the path of progress.</li>
<li>Blasphemy knows no borders - land or sea. I will pursue it where I must, and where I find it, I will be relentless.</li>
<li>Zealots walk the path of destruction, regardless of the names on their lips.</li>
<li>I will not mistake clever trickery for power or power for divinity.</li>
<li>Manipulators of divine magic and esoteric eldritch powers must prove their trustworthiness to me, for trust breeds dangerous complacency.</li>
<li>I will focus my iron scrutiny on any faith I find appealing. Whatever I worship must be worthy of me.</li>
</ul>
<h3 id="hkorder-order_of_the_pyre-hellknight-obedience-boons"><Link to="/feat/hellknight_obedience">Hellknight Obedience</Link> Boons</h3>
<Ability id="1-favored-cult-ex" icon={["upgrade"]}>
<Pair single id="1-favored-cult-ex" flavor="You can hone your skills to become a bane to those who worship a divinity you hate.">1: Favored Cult (Ex)</Pair>
<Pair title="Choice">Each day while performing your obedience, choose a <Link to="/main/faiths">divine power</Link> that grants four or fewer domains.</Pair>
<Pair title="Passive Ability">You gain +2 bonus on <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/knowledge">Knowledge</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, and <Link to="/skill/survival">Survival</Link> checks against those who worship that power. Additionally, you get a +1 bonus on weapon attack rolls and weapon damage rolls against the worshipers of that deity.</Pair>
</Ability>
<Ability id="2-immolation-sp" icon={["magic-swirl"]}>
<Pair single id="2-immolation-sp" flavor="You can channel your wrath into power that can scorch your foes.">2: Immolation (Sp)</Pair>
<Pair title="Ability">Once per day, you can cast <Link to="/spell/delayed_blast_fireball">delayed blast fireball</Link> using your character level as your caster level.</Pair>
</Ability>
<Ability id="3-quell-zealotry-su" icon={["armor-downgrade"]}>
<Pair single id="3-quell-zealotry-su" flavor="You can tear the divine power from the grasp of those who would use it to stand against you.">3: Quell Zealotry (Su)</Pair>
<Pair title="Standard Action"><p>Once per day, you can target a divine spellcaster within 100 feet. If your target fails a Will saving throw (DC = 10 + 1/2 your Hit Dice + your Charisma bonus), it loses access to any spellcasting and all the supernatural and spell-like abilities it gains from any of its divine spellcasting classes for a number of rounds equal to <Link to="/misc/half">half</Link> your character level.</p>
<p>When a creature under the effects of this ability tries to use an ability to which it no longer has access, instead of its god's favor, it feels only a profound, black emptiness, as if its deity no longer existed.</p>
</Pair>
</Ability>
</>};
const _order_of_the_rack = {title: "Order of the Rack", jsx: <><h2 id="hkorder-order_of_the_rack-order-of-the-rack">Order of the Rack</h2>
<p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 40</Link></p>
<Block size="minimal">
<Row><Cell>Symbol</Cell><Cell>A spiked wheel</Cell></Row>
<Row><Cell>Headquarters</Cell><Cell>Citadel Rivad, near Westcrown</Cell></Row>
<Row><Cell>Leader</Cell><Cell>Lictor Darcyne Wrens (LN female human sorcerer 10/Hellknight 1)</Cell></Row>
<Row><Cell>Members</Cell><Cell>Denigrators of art and poetry, patriots, technology-haters, traditionalists</Cell></Row>
<Row><Cell>Armor Features</Cell><Cell>Muscular design, sleek helm, flayed cloak</Cell></Row>
<Row><Cell>Favored Weapon</Cell><Cell><Link to="/eq-weapon/longsword">Longsword</Link> or <Link to="/eq-weapon/whip">whip</Link></Cell></Row></Block>
<Ability id="reckoning" icon={["armor-upgrade"]}>
<Pair single id="reckoning">Reckoning</Pair>
<Pair title="Reckoning" hl>Endure internal burns.</Pair>
<Pair title="Benefit">Gain a +4 bonus on Fortitude saving throws to resist poison. This increases to +6 against ingested poisons.</Pair>
</Ability>
<p>Order of the Rack Hellknights hate wastefulness of both thought and deed. They crush pointless dreams, end rebellions, and trample frivolous or dangerous inventions. They also closely observe individuals, seeking hints of destructive ambitions and wasteful vices, and are skilled at destroying seditious writing and strange inventions.</p>
<h3 id="hkorder-order_of_the_rack-tenets">Tenets</h3>
<ul>
<li>I will seek the chaos that manifests in common words and thoughts.</li>
<li>Those who lack direction will find guidance by my hand - whether the palm or the fist.</li>
<li>I will take the tools from the grasp of those who would craft their own dooms, whether they would do so intentionally or unintentionally.</li>
<li>Though the flag of no nation has my alliance, every rebel is my foe.</li>
<li>My discipline is the same as my honor. I will make myself worthy of our brethren's tradition of greatness.</li>
<li>My mere presence will represent the pinnacle of orderliness. I will save my words and deeds for when they are needed most.</li>
<li>I will not allow the shedding of tears to rust the wheels of progress.</li>
</ul>
<h3 id="hkorder-order_of_the_rack-hellknight-obedience-boons"><Link to="/feat/hellknight_obedience">Hellknight Obedience</Link> Boons</h3>
<Ability id="1-mute-su" icon={["armor-downgrade"]}>
<Pair single id="1-mute-su">1: Mute (Su)</Pair>
<Pair title="Standard Action">Three times per day, you can target a single creature within 100 feet. If the creature fails a Will saving throw (DC = 10 + 1/2 your Hit Dice + your Charisma modifier), the creature cannot make any sounds for a number of rounds equal to your character level. This prevents the target from speaking, otherwise making noise, casting spells with verbal components, and using similar abilities with auditory effects.</Pair>
<Pair title="Special">Each round on its turn, the target can attempt a new saving throw to end the effect. This effect is <Link to="/rule/dismissible">dismissible</Link>. It does not make the target immune to sonic or language-based attacks, spells, or effects.</Pair>
</Ability>
<Ability id="2-dismantle-su" icon={["magic-swirl"]}>
<Pair single id="2-dismantle-su">2: Dismantle (Su)</Pair>
<Pair title="Standard Action"><p>Once per day, you can cause a cloud of thick, brown fog to arise from a chosen point within 200 feet. This cloud functions as per <Link to="/spell/fog_cloud">fog cloud</Link>, using your character level as your caster level, except the fog <Link to="/misc/spread">spreads</Link> in a 10-foot radius, and every creature or object within is affected as per <Link to="/spell/rusting_grasp">rusting grasp</Link>, without any touch attacks required.</p>
<p>Attended metal objects, including weapons and armor, receive a Fortitude saving throw to negate this effect using their wielder's Fortitude saving throw bonus (DC = 10 + 1/2 your Hit Dice + your Charisma modifier). Creatures within the cloud are affected by the rusting effect only once, not every round, but creatures that move back into the area are exposed again.</p>
</Pair>
<Pair title="Special">You and your possessions can enter the cloud and not be affected. This effect is dismissible.</Pair>
</Ability>
<Ability id="3-ruin-sp" icon={["magic-swirl"]}>
<Pair single id="3-ruin-sp">3: Ruin (Sp)</Pair>
<Pair title="Standard Action">Once per day, you can use <Link to="/spell/greater_shout">greater shout</Link> as a spell-like ability (DC = 18 + your Charisma modifier).</Pair>
</Ability>
</>};
const _order_of_the_scourge = {title: "Order of the Scourge", jsx: <><h2 id="hkorder-order_of_the_scourge-order-of-the-scourge">Order of the Scourge</h2>
<p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 46</Link></p>
<Block size="minimal">
<Row><Cell>Symbol</Cell><Cell>Star of bleeding lashes</Cell></Row>
<Row><Cell>Headquarters</Cell><Cell>Citadel Demain, near Egorian</Cell></Row>
<Row><Cell>Leader</Cell><Cell>Lictor Toulon Vidoc (LN male human rogue 2/fighter 4/Hellknight 10)</Cell></Row>
<Row><Cell>Members</Cell><Cell>Constables, informants, the poor, victims of organized crime</Cell></Row>
<Row><Cell>Armor Features</Cell><Cell>Serrated breastplate, horned helm</Cell></Row>
<Row><Cell>Favored Weapon</Cell><Cell><Link to="/eq-weapon/heavy_mace">Heavy mace</Link>, scourge<sup><InnerLink showBacklink="backlink-hkorder-order_of_the_scourge-fake-fn-1" id="hkorder-order_of_the_scourge-fake-fn-1" data-hash-target to="hkorder-order_of_the_scourge-fake-fn-1-target">1</InnerLink></sup>, or <Link to="/eq-weapon/whip">whip</Link></Cell></Row></Block>
<Ability id="reckoning" icon={["armor-upgrade"]}>
<Pair single id="reckoning">Reckoning</Pair>
<Pair title="Reckoning" hl>Lash yourself with a scourge or whip.</Pair>
<Pair title="Benefit">Take 1 fewer point of bleed damage per round when you are affected by an ability or effect that causes <Link to="/rule/bleed">bleed</Link> damage and gain a +4 bonus on <Link to="/skill/heal">Heal</Link> checks to stop bleeding.</Pair>
</Ability>
<p>Hellknights of the Scourge seek out corruption within order and laws not fit for the lawful. They question and seek to determine the difference between what is legal and what is for the greater good - owing allegiance to no one nation or ruler. Their quests for order often take them places that other Hellknights cannot tread, both physically and philosophically. As a result, their commitment to the Measure and the Chain must be beyond reproach.</p>
<h3 id="hkorder-order_of_the_scourge-tenets">Tenets</h3>
<ul>
<li>I will hunt down those who pervert the law to serve selfish ends.</li>
<li>Laws are not lawful merely by virtue of being laws; they must be examined lest they be corrupted.</li>
<li>Those who don't fear justice will fear me.</li>
<li>A broken law is a broken vow, and penance must be paid in blood.</li>
<li>My fist will strike only the enemies of order, not their neighbors if they are innocents.</li>
<li>I will be mindful of danger, for every street and hall is a battlefield.</li>
<li>In my armor or without it, I am first and always a Hellknight.</li>
</ul>
<h3 id="hkorder-order_of_the_scourge-hellknight-obedience-boons"><Link to="/feat/hellknight_obedience">Hellknight Obedience</Link> Boons</h3>
<Ability id="1-spill-guilty-blood-sp" icon={["magic-swirl","upgrade"]}>
<Pair single id="1-spill-guilty-blood-sp" flavor="The end of a lawbreaker invigorates you like nothing else.">1: Spill Guilty Blood (Sp)</Pair>
<Pair title="Ability">Twice per day, you can cast <Link to="/spell/death_knell">death knell</Link> as a spell-like ability, using your character level as your caster level (DC = 12 + your Charisma modifier).</Pair>
<Pair title="Special">If you do not have a caster level, instead of a +1 increase in effective caster level, this ability provides you a +1 bonus on attack and damage rolls for 10 minutes per Hit Die of the target. If you have a caster level, you can choose to gain this bonus on attack and damage rolls instead of to your effective caster level.</Pair>
</Ability>
<Ability id="2-terrible-justice-sp" icon={["armor-downgrade"]}>
<Pair single id="2-terrible-justice-sp" flavor="You end a foe's life with a brutal display of force.">2: Terrible Justice (Sp)</Pair>
<Pair title="Ability">Three times per day, when you perform a <em>coup de grace,</em> all foes within 30 feet must succeed at a Will saving throw or be affected as per the spell <Link to="/spell/fear">fear</Link> (DC = 14 + your Charisma modifier).</Pair>
</Ability>
<Ability id="3-reason-to-fear-su" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="3-reason-to-fear-su" flavor="You fear nothing, as you know you are a source of nightmares.">3: Reason to Fear (Su)</Pair>
<Pair title="Passive Ability">You are immune to fear (magical or otherwise).</Pair>
<Pair title="Free Action"><p>Three times per day, when you are the target of a fear effect or within a fear effect's area, you can target the creature from which the fear effect originated with a <Link to="/spell/phantasmal_killer">phantasmal killer</Link> spell effect (DC = 14 + your Charisma modifier) when you strike it with a weapon. You must deal at least 1 point of damage to use this ability.</p>
<p>This functions in all other ways as if your weapon were a <Link to="/magic-enh/spell_storing">spell storing</Link> weapon with a <em>phantasmal killer</em> spell stored within.</p>
</Pair>
</Ability>
<section data-footnotes><h3 id="hkorder-order_of_the_scourge-label">Footnotes</h3><ol>
<li id="hkorder-order_of_the_scourge-fake-fn-1-target"><p>There are no official stats for a scourge, but the <Link to="/npc/duergar_slaver">Duergar Slaver</Link> describes a scourge as "a <Link to="/eq-weapon/cat_o_nine_tails">cat-o'-nine-tails</Link> that deals lethal damage." &mdash; <em><Link to="/source/inner_sea_npc_codex">Inner Sea NPC Codex pg. 20</Link></em> <InnerLink aria-label="Back to reference 1" id="backlink-hkorder-order_of_the_scourge-fake-fn-1" data-hash-target to="hkorder-order_of_the_scourge-fake-fn-1">↩</InnerLink></p></li></ol></section></>};
const _order_of_the_coil_minor_order = {title: "Order of the Coil (Minor Order)", jsx: <><h2 id="hkorder-order_of_the_coil_minor_order-order-of-the-coil-minor-order">Order of the Coil (Minor Order)</h2>
<p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 52</Link></p>
<Block size="minimal">
<Row><Cell>Symbol</Cell><Cell>Headless snake circling three drops of poison</Cell></Row>
<Row><Cell>Headquarters</Cell><Cell>New Krane, west of Eleder</Cell></Row>
<Row><Cell>Leader</Cell><Cell>Lictor Vitova Racnhe (NE female human ranger 7, Hellknight 3)</Cell></Row>
<Row><Cell>Members</Cell><Cell>Colonialists, imperialists, racists</Cell></Row>
<Row><Cell>Armor Features</Cell><Cell>Fanged helmet, snake-like visage on breastplate</Cell></Row>
<Row><Cell>Favored Weapon</Cell><Cell><Link to="/eq-weapon/greataxe">Greataxe</Link></Cell></Row>
<Row><Cell>Reckoning</Cell><Cell>Bite your own flesh</Cell></Row>
<Row><Cell>Analagous Order</Cell><Cell><Link to="/hkorder/order_of_the_nail">Order of the Nail</Link></Cell></Row></Block>
<p>Among the smallest Hellknight factions, the Order of the Coil maintains holdings near the Sargavan city of Eleder, from where they viciously seek to tame the tribal natives of the country and put an end to their backward pollution of the outside world. Seeing the efforts of scholars and adventurers - particularly Pathfinders - as spreading a disease of savagery by carrying curios from the jungles into the world beyond, the Coil hunts down and destroys such explorers and artifacts, notorious for ending these perceived corruptions with poison and flames.</p>
<Message lesserOrders /></>};
const _order_of_the_crux_minor_order = {title: "Order of the Crux (Minor Order)", jsx: <><h2 id="hkorder-order_of_the_crux_minor_order-order-of-the-crux-minor-order">Order of the Crux (Minor Order)</h2>
<p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 53</Link></p>
<Block size="minimal">
<Row><Cell>Symbol</Cell><Cell>Three shattered femurs with a starburst of bone shards</Cell></Row>
<Row><Cell>Headquarters</Cell><Cell>Citadel Gheisteno, in the Menador Mountains along the Chelish-Nidalese border</Cell></Row>
<Row><Cell>Leader</Cell><Cell>Lictor Enwar Shokneir (LE male human graveknight fighter 5/Hellknight 10)</Cell></Row>
<Row><Cell>Members</Cell><Cell>Undead Hellknights</Cell></Row>
<Row><Cell>Armor Features</Cell><Cell>Spiked helm, horned fiend-skull breastplate</Cell></Row>
<Row><Cell>Favored Weapon</Cell><Cell><Link to="/eq-weapon/heavy_flail">Heavy flail</Link></Cell></Row>
<Row><Cell>Reckoning</Cell><Cell>Strike your femur repeatedly</Cell></Row>
<Row><Cell>Analagous Order</Cell><Cell>None</Cell></Row></Block>
<p>One of several bands of mercenaries dubbed Hellknights during the Chelish civil war, the skull-clad Order of the Crux refused to disband after the revolution. Hunted down and destroyed by the <Link to="/hkorder/order_of_the_scourge">Order of the Scourge</Link> in 4663, the butchers were slaughtered and their fortress, Citadel Gheisteno, put to the torch. However, 25 years later, three <Link to="/template/graveknight">graveknights</Link> clad in scarred Hellknight armor rose from the ruin. Calling themselves the Order of the Crux and led by the venomous Lictor Shokneir, the undead triune lurks upon the border of Nidal and Molthune, seemingly biding their time.</p>
<Message lesserOrders /></>};
const _order_of_the_glyph_minor_order = {title: "Order of the Glyph (Minor Order)", jsx: <><h2 id="hkorder-order_of_the_glyph_minor_order-order-of-the-glyph-minor-order">Order of the Glyph (Minor Order)</h2>
<p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 53</Link></p>
<Block size="minimal">
<Row><Cell>Symbol</Cell><Cell>Runed padlock encircled by a chain</Cell></Row>
<Row><Cell>Headquarters</Cell><Cell>Archives of Redacted Histories, Warlock Island</Cell></Row>
<Row><Cell>Leader</Cell><Cell>Lictor Maritas Clandegar (LE male human fighter 9/Hellknight 6)</Cell></Row>
<Row><Cell>Members</Cell><Cell>Agents of House Thrune, archivists, Geryon cultists</Cell></Row>
<Row><Cell>Armor Features</Cell><Cell>Serpentine designs and tower shields</Cell></Row>
<Row><Cell>Favored Weapon</Cell><Cell><Link to="/eq-weapon/battleaxe">Battleaxe</Link></Cell></Row>
<Row><Cell>Reckoning</Cell><Cell>Ingest smoldering ashes</Cell></Row>
<Row><Cell>Analagous Order</Cell><Cell><Link to="/hkorder/order_of_the_pyre">Order of the Pyre</Link></Cell></Row></Block>
<p>Unofficial Hellknights unsanctioned by the Council of Lictors, the Order of the Glyph was formed in the aftermath of the Chelish civil war by House Thrune. The order was created in order to safeguard the true history of Cheliax, unaugmented by propaganda and the manipulation of fact. Originally a cult of <Link to="/faith/geryon">Geryon</Link> worshipers, the Order of the Glyph has served to both protect Cheliax's histories and further House Thrune's lies ever since.</p>
<Message lesserOrders /></>};
const _order_of_the_pike_minor_order = {title: "Order of the Pike (Minor Order)", jsx: <><h2 id="hkorder-order_of_the_pike_minor_order-order-of-the-pike-minor-order">Order of the Pike (Minor Order)</h2>
<p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 54</Link></p>
<Block size="minimal">
<Row><Cell>Symbol</Cell><Cell>Dragon-like creature pierced by three black spears</Cell></Row>
<Row><Cell>Headquarters</Cell><Cell>Tower of Ordeial, in Senara</Cell></Row>
<Row><Cell>Leader</Cell><Cell>Lictor Lesheir "The Spear" Remsaine (LG female human cavalier 5/Hellknight 8)</Cell></Row>
<Row><Cell>Members</Cell><Cell>Frontier dwellers, monster hunters, victims of monsters</Cell></Row>
<Row><Cell>Armor Features</Cell><Cell>Bestial bone-and-skull designs</Cell></Row>
<Row><Cell>Favored Weapon</Cell><Cell><Link to="/eq-weapon/longspear">Longspear</Link></Cell></Row>
<Row><Cell>Reckoning</Cell><Cell>Run a bone knife over your skin</Cell></Row>
<Row><Cell>Analagous Order</Cell><Cell><Link to="/hkorder/order_of_the_scourge">Order of the Scourge</Link></Cell></Row></Block>
<p>This small order of Hellknights operates out of the tower of Citadel Ordeial in northeastern Cheliax, where it organizes expeditions to seek out and slay a variety of monsters. The order was disbanded after the Chelish Civil War, but it was officially reinstated 30 years ago thanks to its members' continued efforts to weed out monsters in the Whisperwood and beyond.</p>
<Message lesserOrders /></>};
const _order_of_the_scar_minor_order = {title: "Order of the Scar (Minor Order)", jsx: <><h2 id="hkorder-order_of_the_scar_minor_order-order-of-the-scar-minor-order">Order of the Scar (Minor Order)</h2>
<p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 54</Link></p>
<Block size="minimal">
<Row><Cell>Symbol</Cell><Cell>Red eye centered on a black palm with a red dagger at the wrist</Cell></Row>
<Row><Cell>Headquarters</Cell><Cell>Bastion Saintbor, outside Cassomir</Cell></Row>
<Row><Cell>Leader</Cell><Cell>Lictor Cettorsein Vastilir (LN female human slayer 8/Hellknight 4)</Cell></Row>
<Row><Cell>Members</Cell><Cell>Bodyguards, failed constables, former assassins</Cell></Row>
<Row><Cell>Armor Features</Cell><Cell>Helmet with a scar-crossed visor, armor etched with stylized, scar-like markings</Cell></Row>
<Row><Cell>Favored Weapon</Cell><Cell><Link to="/eq-weapon/rapier">Rapier</Link></Cell></Row>
<Row><Cell>Reckoning</Cell><Cell>Shallowly cut your palm or wrist</Cell></Row>
<Row><Cell>Analagous Order</Cell><Cell><Link to="/hkorder/order_of_the_chain">Order of the Chain</Link></Cell></Row></Block>
<p>Created during the Chelish civil war, the Order of the Scar was originally formed to protect King Gaspodar from assassins. After more than 40 prevented assassinations, the order nearly dissolved after a successful attempt. Resurfacing in Taldor, the order now has a reputation as mercenary assassin-hunters skilled at creating safe houses and tracking and slaying assassins, snipers, and poisoners.</p>
<Message lesserOrders /></>};
const _order_of_the_torrent_minor_order = {title: "Order of the Torrent (Minor Order)", jsx: <><h2 id="hkorder-order_of_the_torrent_minor_order-order-of-the-torrent-minor-order">Order of the Torrent (Minor Order)</h2>
<p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 55</Link>, <Link to="/source/pathfinder_98_turn_of_the_torrent">Pathfinder #98: Turn of the Torrent pg. 67</Link></p>
<Block size="minimal">
<Row><Cell>Symbol</Cell><Cell>Twisted, armored eel</Cell></Row>
<Row><Cell>Headquarters</Cell><Cell>Citadel Vaull, Kintargo</Cell></Row>
<Row><Cell>Leader</Cell><Cell>Lictor Octavio Sabinus (LG male human fighter 5/Hellknight 3)</Cell></Row>
<Row><Cell>Members</Cell><Cell>Constables, detectives, negotiators</Cell></Row>
<Row><Cell>Armor Features</Cell><Cell>Aquatic themes with fin-shaped flourishes</Cell></Row>
<Row><Cell>Favored Weapon</Cell><Cell><Link to="/eq-weapon/halberd">Halberd</Link> or <Link to="/eq-weapon/longbow">longbow</Link></Cell></Row>
<Row><Cell>Reckoning</Cell><Cell>Suffer simulated drowning or extreme holding of the breath</Cell></Row>
<Row><Cell>Analagous Order</Cell><Cell><Link to="/hkorder/order_of_the_scourge">Order of the Scourge</Link></Cell></Row></Block>
<p>The Hellknights of the Order of the Torrent were mandated in the wake of the Chelish Civil War after the order's founder, Reya Naulvaneti, rescued the abducted son of Kintargo's then lord-mayor. In honor of this accomplishment, the Order of the Torrent has focused itself on rescuing the abducted. The Order of the Torrent appeals to lawful good Hellknights - they have never knowingly had an evil member among their ranks. The order has diminished in recent years to a historic low of 23 members. Most of them are spread throughout Avistan, where they search for the lost and taken throughout the Inner Sea region, but they also often serve as mercenaries aboard ships in waters sailed by slavers.</p>
<Message lesserOrders /></>};
const _order_of_the_wall_minor_order = {title: "Order of the Wall (Minor Order)", jsx: <><h2 id="hkorder-order_of_the_wall_minor_order-order-of-the-wall-minor-order">Order of the Wall (Minor Order)</h2>
<p><strong>Sources</strong> <Link to="/source/path_of_the_hellknight">Path of the Hellknight pg. 55</Link></p>
<Block size="minimal">
<Row><Cell>Symbol</Cell><Cell>Crenellated skull</Cell></Row>
<Row><Cell>Headquarters</Cell><Cell>The Gnashing Wall, south of Khari</Cell></Row>
<Row><Cell>Leader</Cell><Cell>Master of Blades Atlan Essebar (LN male human fighter 8/Hellknight 5)</Cell></Row>
<Row><Cell>Members</Cell><Cell>Chelaxians born in Rahadoum, soldiers</Cell></Row>
<Row><Cell>Armor Features</Cell><Cell>Angular mantle, cylindrical, castle-like helm</Cell></Row>
<Row><Cell>Favored Weapon</Cell><Cell><Link to="/eq-weapon/lucerne_hammer">Lucerne hammer</Link></Cell></Row>
<Row><Cell>Reckoning</Cell><Cell>Repeatedly strike bricks or stone</Cell></Row>
<Row><Cell>Analagous Order</Cell><Cell><Link to="/hkorder/order_of_the_rack">Order of the Rack</Link></Cell></Row></Block>
<p>During the Chelish civil war, border troops were withdrawn to defend the warring heartlands. Rather than let the southern edge of Cheliax fall to Rahadoumi, 300 Hellknights of the Chain took over the posts and held the border for 30 years. At the civil wars conclusion, a number of the Hellknights stayed on to protect the border, and now the Order of the Wall is charged with defending the boundaries of civilization.</p>
<Message lesserOrders /></>};
export default {not_found:_not_found,order_of_the_chain:_order_of_the_chain,order_of_the_gate:_order_of_the_gate,order_of_the_godclaw:_order_of_the_godclaw,order_of_the_nail:_order_of_the_nail,order_of_the_pyre:_order_of_the_pyre,order_of_the_rack:_order_of_the_rack,order_of_the_scourge:_order_of_the_scourge,order_of_the_coil_minor_order:_order_of_the_coil_minor_order,order_of_the_crux_minor_order:_order_of_the_crux_minor_order,order_of_the_glyph_minor_order:_order_of_the_glyph_minor_order,order_of_the_pike_minor_order:_order_of_the_pike_minor_order,order_of_the_scar_minor_order:_order_of_the_scar_minor_order,order_of_the_torrent_minor_order:_order_of_the_torrent_minor_order,order_of_the_wall_minor_order:_order_of_the_wall_minor_order}