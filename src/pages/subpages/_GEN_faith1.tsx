import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _not_found = {title: "Unknown", jsx: <><h2 id="faith-not_found-error">Error</h2>
<p>Unable to find the requested faith.</p>
</>};
const _abadar = {hasJL:true,title: "Abadar", jsx: <><div className="jumpList" id="faith-abadar-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-abadar-divine-gift">Divine Gift</InnerLink></li><li><InnerLink toTop to="faith-abadar-deific-obedience">Deific Obedience</InnerLink></li><li><InnerLink toTop to="faith-abadar-paladin-code">Paladin Code</InnerLink></li><li><InnerLink toTop to="faith-abadar-divine-fighting-technique">Divine Fighting Technique</InnerLink></li><li><InnerLink toTop to="faith-abadar-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-abadar-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Abadar</div><div className="sub">Master of the First Vault</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 12</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Abadar">Abadar</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-abadar-details">Details</h3>
<p><strong>Alignment</strong> LN<br/><strong>Pantheon</strong> Core Deities<br/><strong>Other Pantheons</strong> Deities of Tian Xia, Halfling Deities, Order of the God Claw Pantheon, Sandpoint Pantheon, Taldan Pantheon<br/><strong>Areas of Concern</strong> Cities, laws, merchants, wealth<br/><strong>Domains</strong> <Link to="/domain/earth">Earth</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/travel">Travel</Link><br/><strong>Subdomains</strong> <Link to="/domain/aristocracy">Aristocracy</Link>, <Link to="/domain/defense">Defense</Link>, <Link to="/domain/fortifications">Fortifications</Link>, <Link to="/domain/inevitable">Inevitable</Link>, <Link to="/domain/leadership">Leadership</Link>, <Link to="/domain/law">Legislation (Law)</Link>, <Link to="/domain/martyr">Martyr</Link>, <Link to="/domain/metal">Metal</Link>, <Link to="/domain/portal">Portal</Link><sup><InnerLink showBacklink="backlink-faith-abadar-ref-A-1" id="faith-abadar-ref-A-1" data-hash-target to="faith-abadar-A">1</InnerLink></sup> <Link to="/domain/trade">Trade</Link><br/><strong>Inquisitions</strong> <Link to="/inquisition/execution">Execution</Link>, <Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/imprisonment">Imprisonment</Link>, <Link to="/inquisition/order">Order</Link>, <Link to="/inquisition/politics">Politics</Link>, <Link to="/inquisition/recovery">Recovery</Link>, <Link to="/inquisition/true_death">True Death</Link><br/><strong>Realm</strong> Aktun, Axis<br/><strong>Allies</strong> <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/shelyn">Shelyn</Link>, <Link to="/faith/torag">Torag</Link><br/><strong>Enemies</strong> <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/rovagug">Rovagug</Link><br/><strong>Temples</strong> banks, cathedrals, courthouses<br/><strong>Holy Days</strong> Market's Door (blessing of the fall marketplace and the year's harvest trade, first day markets receive goods from the fall harvest), Taxfest (annual collection of city taxes followed by public feast with civic leaders, date varies by city)<br/><strong>Minions</strong> <Link to="/subtype/archon">archons</Link>, <Link to="/monster/axiomite">axiomites</Link>, <Link to="/subtype/inevitable">inevitables</Link><br/><strong>Herald</strong> <Link to="/monster/lawgiver">Lawgiver</Link> (a massive golden golem-like creature)<br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/light_crossbow">Light crossbow</Link><br/><strong>Symbol</strong> Golden key<br/><strong>Sacred Animal(s)</strong> Monkey<br/><strong>Sacred Color(s)</strong> Gold, silver</p>
<h3 id="faith-abadar-on-golarion">On Golarion</h3>
<p><strong>Centers of Worship</strong> Absalom, Andoran, Brevoy, Cheliax, Katapesh, Mana Wastes, Molthune, Nex, Osirion, Sargava, Taldor, Varisia<br/><strong>Nationality</strong> Taldan</p>
<h2 id="faith-abadar-divine-gift" data-hash-target><Link to="/rule/divine_gifts">Divine Gift</Link></h2>
<blockquote>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 74</Link><br/>The character gains the ability to cast <Link to="/spell/word_of_recall">word of recall</Link> as a spell-like ability (CL 20th). This version of <em>word of recall</em> can transport the caster across planar boundaries, but it still doesn't function in areas that bar teleportation effects. When a character gains this gift, the GM designates as the spell's sanctuary: a specific temple of Abadar located in a city of at least 1,000 inhabitants.</p>
</blockquote>
<h2 id="faith-abadar-deific-obedience" data-hash-target><Link to="/feat/deific_obedience">Deific Obedience</Link></h2>
<blockquote>
<p>Take a handful of mixed gems, coins, and keys. Include coins from three or more different currency systems (such as from three different kingdoms), as well as at least three different keys - one of which should be the key to a lockbox, vault, or other such storage item. Kneel before a scale and balance the items as perfectly as you can on it, removing and replacing items in order to create the most equitable balance of items. Randomize the items you select each time you perform this obedience, so as not to let your obedience become routine. Meditate on the teachings from The Order of Numbers. Gain a +4 sacred or profane bonus on saving throws against spells and effects generated by creatures with a chaotic alignment. The type of bonus depends on your alignment - if you're neither good nor evil, you must choose either sacred or profane the first time you perform your obedience. Once made, this choice can't be changed.</p>
<h3 id="faith-abadar-boons-evangelist">Boons: Evangelist</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 12</Link></p>
<ol>
<li><strong>Diplomat (Sp)</strong> <Link to="/spell/comprehend_languages">comprehend languages</Link> 3/day, <Link to="/spell/calm_emotions">calm emotions</Link> 2/day, or <Link to="/spell/glibness">glibness</Link> 1/day</li>
<li><strong>City Dweller (Ex)</strong> You never become lost in cities of more than 5,000 inhabitants - upon entering a city, even for the first time, you can always retrace your steps and intuit where particular districts must be. Furthermore, you pick up local accents and vernacular instantly, giving you the cant of a citizen. You also gain a +4 sacred or profane bonus on Disguise and Knowledge (local) checks while in the bounds of a city.</li>
<li><strong>Sneaky Bolt (Ex)</strong> Three times per day, you can <Link to="/skill/snipe">snipe</Link> with a crossbow while hidden, and have little chance of revealing your location. You must declare your use of this ability before you roll your attack. You can use this ability only if your target is within 30 feet of you and unaware of your presence or precise location. Once you roll your attack, immediately attempt a Stealth check for sniping without the normal -20 penalty.</li>
</ol>
<h3 id="faith-abadar-boons-exalted">Boons: Exalted</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 12</Link></p>
<ol>
<li><strong>Ordered Mien (Sp)</strong> <Link to="/spell/abadars_truthtelling">Abadar's truthtelling</Link> 3/day, <Link to="/spell/align_weapon">align weapon (lawful only)</Link> 2/day, or <Link to="/spell/magic_circle_against_chaos">magic circle against chaos</Link> 1/day</li>
<li><strong>Diplomatic Immunity (Ex)</strong> While within the bounds of a city of more than 5,000 inhabitants, you gain a +4 sacred or profane bonus on Bluff and Diplomacy checks. You also gain special status with the law. You're considered a person to be respected, and may obtain special treatment and assistance that ordinary citizens could not, such as information on political activity, criminal investigations, or threats against the city. Any bribes or fees that would normally be levied by the legal system are waived for you. City guards and officials with an initial starting attitude of unfriendly or hostile instead have an attitude of indifferent toward you. These benefits apply only when you identify yourself as an exalted of Abadar.</li>
<li><strong>Scales of Balance (Su)</strong> Once per day as a full-round action, you can pool and redistribute your current hit points and those of all willing allies within 30 feet of you. Total your current hit points and those of your willing allies, and then decide how you wish to redistribute them among the same individuals. You cannot give an ally more hit points than her maximum, nor can you leave an ally with 0 hit points.</li>
</ol>
<h3 id="faith-abadar-boons-sentinel">Boons: Sentinel</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 12</Link></p>
<ol>
<li><strong>Lawful Bulwark (Sp)</strong> <Link to="/spell/shield_of_faith">shield of faith</Link> 3/day, <Link to="/spell/shield_other">shield other</Link> 2/day, or <Link to="/spell/archons_aura">archon's aura</Link> 1/day</li>
<li><strong>Unflagging Ally (Sp)</strong> Once per day as a standard action, you can summon a <Link to="/monster/zelekhut">zelekhut inevitable</Link>. You gain telepathic communication with the zelekhut to a range of 100 feet, and the zelekhut follows your commands perfectly for 1 minute for each Hit Die you possess before vanishing back to its home. The zelekhut doesn't obey any command that would violate its lawful alignment - such commands are met with grim refusal, and could even prompt the zelekhut to attack you if the command is egregious enough.</li>
<li><strong>Dictum Blow (Su)</strong> Once per day, you can channel the effects of <Link to="/spell/dictum">dictum</Link> through your weapon, though you don't need to cast (or even know) the spell. You must declare your use of this ability before rolling your attack. On a hit, the target is affected as if caught in the area of dictum as cast by a cleric of a level equal to your Hit Dice (maximum 20). If the target is lawful or its Hit Dice exceeds yours, it is unaffected. If your attack misses or the creature is unaffected, the dictum effect is wasted.</li>
</ol>
</blockquote>
<h2 id="faith-abadar-paladin-code" data-hash-target>Paladin Code</h2>
<blockquote>
<p>Of all the neutral gods, only Abadar supports and promotes a holy order of paladins. As the god of civilization and order, Abadar recognizes the value of holy warriors in advancing society's aims. His paladins follow the standard paladin code of protecting the innocent, acting with honor and honesty, and respecting lawful authority. In addition, an Abadaran paladin upholds the following creed.</p>
<ul>
<li>I am a protector of the roadways and keep travelers from harm. No matter their destinations or goals, if they are peaceable and legitimate travelers who harm no others on the road, I will ensure that they pass safely.</li>
<li>Bandits are a plague. Under my will they come to justice. If they will not come willingly before the law, where they can protest for justice in the courts, they will come under the power of my sword.</li>
<li>Corruption in the courts is the greatest corruption of civilization. Without confidence in justice, citizens cannot believe in their countries, and civilization begins to disappear. I will root out corruption wherever I find it, and if a system is fundamentally flawed, I will work to aid citizens by reforming or replacing it.</li>
<li>I am an aid to the markets. I ensure equitable trade between merchants and citizens. Theft and deceit on either side are intolerable.</li>
<li>I make opportunities, and teach others to recognize them. When I aid others, I open the way for them, but will not carry them - they must take responsibility.</li>
</ul>
</blockquote>
<h2 id="faith-abadar-divine-fighting-technique" data-hash-target><Link to="/feat/divine_fighting_technique">Divine Fighting Technique</Link></h2>
<blockquote>
<h3 id="faith-abadar-abadars-crossbow">Abadar's Crossbow</h3>
<p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook</Link></p>
<p>Abadar teaches complex crossbow techniques.</p>
<p><strong>Initial Benefit:</strong> You can attempt a ranged <Link to="/rule/steal">steal</Link> combat maneuver check with a crossbow, using your Dexterity modifier in place of your Strength modifier to calculate your Combat Maneuver Bonus. If you succeed, the stolen item is knocked away by the bolt; if the bolt can pierce any part of the item and the item weighs 2 pounds or less, the bolt continues past the creature and carries the item up to one range increment away, pinning it to whatever surface it lands on.</p>
<p><strong>Advanced Prerequisite:</strong> <Link to="/feat/rapid_reload">Rapid Reload</Link>, Base Attack Bonus +10.</p>
<p><strong>Advanced Benefit:</strong> When fighting a foe adjacent to a firm surface, you can attempt a ranged <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver check with a crossbow, using your Dexterity modifier in place of your Strength modifier to calculate your Combat Maneuver Bonus. If you succeed, your bolt pins the target's clothing (or feathers, hide, or the like) to the surface, preventing the target from leaving that space until it breaks free by destroying the bolt or removing it with a successful Strength check (DC = the result of your combat maneuver check to pin it).</p>
</blockquote>
<h2 id="faith-abadar-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-abadar-archetypes">Archetypes</h3>
<ul>
<li><Link to="/arc-fighter/crossbowman">Crossbowman (Fighter)</Link></li>
<li><Link to="/arc-paladin/knight_of_coins">Knight of Coins (Paladin)</Link></li>
<li><Link to="/arc-druid/urban_druid">Urban Druid (Druid)</Link></li>
<li><Link to="/arc-ranger/urban_ranger">Urban Ranger (Ranger)</Link></li>
</ul>
<h3 id="faith-abadar-feats">Feats</h3>
<ul>
<li><Link to="/feat/crossbow_mastery">Crossbow Mastery</Link></li>
<li><Link to="/feat/divine_dignity">Divine Dignity</Link></li>
<li><Link to="/feat/measured_response">Measured Response</Link></li>
<li><Link to="/feat/perfect_casting">Perfect Casting</Link></li>
</ul>
<h3 id="faith-abadar-magic-items---altars">Magic Items - Altars</h3>
<ul>
<li><Link to="/magic-altar/altar_of_abadar">Altar of Abadar</Link></li>
</ul>
<h3 id="faith-abadar-magic-items---armor">Magic Items - Armor</h3>
<ul>
<li><Link to="/magic-armor/golden_judges_breastplate">Golden Judge's Breastplate</Link></li>
</ul>
<h3 id="faith-abadar-magic-items---rods">Magic Items - Rods</h3>
<ul>
<li><Link to="/magic-rod/rod_of_metal_and_mineral_detection">Rod of Metal and Mineral Detection</Link></li>
</ul>
<h3 id="faith-abadar-magic-items---weapons">Magic Items - Weapons</h3>
<ul>
<li><Link to="/magic-weapon/fugitive_finder">Fugitive Finder</Link></li>
<li><Link to="/magic-weapon/mace_of_keys">Mace of Keys</Link></li>
<li><Link to="/magic-weapon/vaultbow">Vaultbow</Link></li>
</ul>
<h3 id="faith-abadar-magic-items---wondrous-items">Magic Items - Wondrous Items</h3>
<ul>
<li><Link to="/magic-wondrous/elixir_of_truth">Elixir of Truth</Link></li>
<li><Link to="/magic-wondrous/key_cloak">Key Cloak</Link></li>
<li><Link to="/magic-wondrous/key_of_the_second_vault">Key of the Second Vault</Link></li>
<li><Link to="/magic-wondrous/lyre_of_building">Lyre of Building</Link></li>
<li><Link to="/magic-wondrous/meltdown_safe">Meltdown Safe</Link></li>
<li><Link to="/magic-wondrous/safecamp_wagon">Safecamp Wagon</Link></li>
<li><Link to="/magic-wondrous/secure_paypack">Secure Paypack</Link></li>
<li><Link to="/magic-wondrous/universal_lock">Universal Lock</Link></li>
</ul>
<h3 id="faith-abadar-monsters">Monsters</h3>
<ul>
<li><Link to="/monster/lawgiver">Lawgiver (Herald)</Link></li>
<li><Link to="/monster/orsheval">Orsheval</Link></li>
</ul>
<h3 id="faith-abadar-prestige-classes">Prestige Classes</h3>
<ul>
<li><Link to="/pclass/justicar">Justicar</Link></li>
</ul>
<h3 id="faith-abadar-spells">Spells</h3>
<ul>
<li><Link to="/spell/abadars_truthtelling">Abadar's Truthtelling</Link></li>
<li><Link to="/spell/blessing_of_the_watch">Blessing of the Watch</Link></li>
<li><Link to="/spell/dictum">Dictum</Link></li>
<li><Link to="/spell/fairness">Fairness</Link></li>
<li><Link to="/spell/orders_wrath">Order's Wrath</Link></li>
<li><Link to="/spell/soul_vault">Soul Vault</Link></li>
<li><Link to="/spell/true_appraisal">True Appraisal</Link></li>
</ul>
<h3 id="faith-abadar-traits">Traits</h3>
<ul>
<li><Link to="/trait/eye_for_quality">Eye for Quality</Link></li>
<li><Link to="/trait/eyes_and_ears_of_the_city">Eyes and Ears of the City</Link></li>
<li><Link to="/trait/honey_tongued">Honey-Tongued</Link></li>
<li><Link to="/trait/lover_of_the_law">Lover of the Law</Link></li>
<li><Link to="/trait/sense_of_order">Sense of Order</Link></li>
<li><Link to="/trait/the_city_protects">The City Protects</Link></li>
</ul>
<h3 id="faith-abadar-unique-spell-rules">Unique Spell Rules</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_temples">Inner Sea Temples pg. 33</Link></p>
<h4 id="faith-abadar-all-classes">All Classes</h4>
<ul>
<li><Link to="/spell/soul_vault">Soul Vault</Link> can be prepared as a 4th-level spell</li>
</ul>
<h4 id="faith-abadar-cleric-warpriest">Cleric, Warpriest</h4>
<ul>
<li><Link to="/spell/word_of_recall">Word of Recall</Link> can be prepared as a 5th-level spell <sup><InnerLink showBacklink="backlink-faith-abadar-ref-S-1" id="faith-abadar-ref-S-1" data-hash-target to="faith-abadar-S">2</InnerLink></sup></li>
</ul>
<h4 id="faith-abadar-paladin">Paladin</h4>
<ul>
<li><em>Word of Recall</em> can be prepared as a 4th-level spell <sup><InnerLink showBacklink="backlink-faith-abadar-ref-S-2" id="faith-abadar-ref-S-2" data-hash-target to="faith-abadar-S">2</InnerLink></sup></li>
</ul>
<h3 id="faith-abadar-unique-summon-rules">Unique Summon Rules</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_8_seven_days_to_the_grave">Pathfinder #8: Seven Days to the Grave pg. 67</Link></p>
<ul>
<li><strong className="hl"><Link to="/spell/summon_monster_ii">Summon Monster II:</Link></strong> <Link to="/template/celestial">Celestial</Link> <Link to="/monster/eagle">Two-Headed Eagle</Link> - LN [this creature has two heads; it gains a +2 racial bonus on Perception checks, but does not gain an extra bite attack]</li>
<li><strong className="hl"><Link to="/spell/summon_monster_iii">Summon Monster III:</Link></strong> Celestial <Link to="/monster/hippogriff">Hippogriff</Link> - LN</li>
<li><strong className="hl"><Link to="/spell/summon_monster_iv">Summon Monster IV:</Link></strong> <Link to="/monster/giant_eagle">Two-Headed Giant Eagle</Link> - LN [this creature has two heads; it gains a +2 racial bonus on Perception checks, but does not gain an extra bite attack]</li>
<li><strong className="hl"><Link to="/spell/summon_monster_v">Summon Monster V:</Link></strong> Celestial <Link to="/monster/griffon">Griffon</Link> - LN</li>
<li><strong className="hl"><Link to="/spell/summon_monster_ix">Summon Monster IX:</Link></strong> <Link to="/monster/kolyarut">Kolyarut</Link> - LN</li>
</ul>
</blockquote>
<h2 id="faith-abadar-description" data-hash-target>Description</h2>
<p>Abadar is a patient, calculating, and far-seeing deity who wishes to bring civilization to the frontiers, order to the wilds, and wealth to all who support the rule oflaw. His primary desire is to see the purifying spread of civilization, enlightening the dark corners of the world and revealing the clockwork perfection of the cosmos. His nature is not hasty, for the pace of society's reach is slow but relentless. He strikes a careful balance between good and evil, seeing benefits on both sides and refusing to endorse one or the other. His followers believe he is responsible for elevating the various humanoid races from simple tribes to beings capable of creating huge cities. He puts words of diplomacy in the mouths ofleaders, guides the pens of those who write laws, and steers coins into the hands of those who practice fair commerce.</p>
<p>Abadar is the master and guardian of the First Vault, a magical trove in his realm where a perfect version of every type of creature and object exists - a perfect sword, a perfect deer, a perfect wheel, and even a perfect law.</p>
<section data-footnotes>
<h3 id="faith-abadar-label">Footnotes</h3>
<ol>
<li id="faith-abadar-A">
<p>Requires the <Link to="/trait/acolyte_of_apocrypha">Acolyte of Apocrypha</Link> trait. <InnerLink id="backlink-faith-abadar-ref-A-1" data-hash-target to="faith-abadar-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="faith-abadar-S">
<p>Only usable if their designated sanctuaries are the temples of their home cities. <InnerLink id="backlink-faith-abadar-ref-S-1" data-hash-target to="faith-abadar-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink> <InnerLink id="backlink-faith-abadar-ref-S-2" data-hash-target to="faith-abadar-ref-S-2" aria-label="Back to reference S-2">↩<sup>2</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _abhoth = {hasJL:true,title: "Abhoth", jsx: <><div className="jumpList" id="faith-abhoth-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-abhoth-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-abhoth-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Abhoth</div><div className="sub">Source of Uncleanness</div></div>
<p><strong>Sources</strong> <Link to="/source/pathfinder_109_in_search_of_sanity">Pathfinder #109: In Search of Sanity pg. 64</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Abhoth">Abhoth</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-abhoth-details">Details</h3>
<p><strong>Alignment</strong> CN<br/><strong>Pantheon</strong> Outer Gods<br/><strong>Areas of Concern</strong> Disease, fercundity, oozes<br/><strong>Domains</strong> <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/strength">Strength</Link><br/><strong>Subdomains</strong> <Link to="/domain/caves">Caves</Link>, <Link to="/domain/ferocity">Ferocity</Link>, <Link to="/domain/insanity">Insanity</Link>, <Link to="/domain/night">Night</Link>, <Link to="/domain/nightmare">Nightmare</Link>, <Link to="/domain/resolve">Resolve</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/whip">Whip</Link><br/><strong>Symbol</strong> Tentacle coiled around a disemboided eye</p>
<h2 id="faith-abhoth-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-abhoth-feats">Feats</h3>
<ul>
<li><Link to="/feat/dreamed_secrets">Dreamed Secrets</Link></li>
</ul>
<h3 id="faith-abhoth-traits">Traits</h3>
<ul>
<li><Link to="/trait/unspeakable_bond">Unspeakable Bond</Link></li>
</ul>
</blockquote>
<h2 id="faith-abhoth-description" data-hash-target>Description</h2>
<p>In the deepest reaches of every world lie vast caverns that, in most cases, have been long forgotten or simply never discovered by that world's inhabitants in the first place. On Golarion, these deep pathways and hidden realms are known as the Darklands, but similar extensive networks exist on countless other worlds. It is in these forgotten midnight grottoes that Abhoth, the Source of Uncleanness, the Primal Clay of Life's First Lurch, seeps and clots and spews forth its aberrant spawn.</p>
<p>Abhoth has an otherworldly wisdom and a staggering intellect, yet it does not devote its mind to matters that mortals could comprehend. It's not so much trapped as it is cradled in a cavern lair connected to many worlds. The creatures it constantly spawns that manage to escape its ravenous gluttony and eternal hunger stagger upward through the nighted ways, growing stronger and larger the longer they survive. The greatest find paths through ancient portals in those caves to other worlds, where they may spawn entire societies and races of their own. Abhoth's cultists maintain that all life in the universe was spawned by the Unclean God, and that in our flesh and bones lie traces of its divine excretions.</p>
<p>Abhoth appears as a vast lake of seething, surging, protoplasmic ooze in which eyes and mouths and limbs and organs constantly form and are consumed. Those creations that drip from its bulk gain sentience of their own, and through them Abhoth can see and explore and infect any world they touch.</p>
</>};
const _abraxas = {hasJL:true,title: "Abraxas", jsx: <><div className="jumpList" id="faith-abraxas-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-abraxas-demonicfiendish-obedience">Demonic/Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-abraxas-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-abraxas-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Abraxas</div><div className="sub">Master of the Final Incantation</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 318</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Abraxas">Abraxas</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-abraxas-details">Details</h3>
<p><strong>Alignment</strong> CE<br/><strong>Pantheon</strong> Demon Lords<br/><strong>Areas of Concern</strong> Forbidden lore, magic, snakes<br/><strong>Domains</strong> <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/magic">Magic</Link><br/><strong>Subdomains</strong> <Link to="/domain/arcane">Arcane</Link>, <Link to="/domain/chaos">Demon (Chaos)</Link>, <Link to="/domain/evil">Demon (Evil)</Link>, <Link to="/domain/knowledge">Education (Knowledge)</Link>, <Link to="/domain/memory">Memory</Link>, <Link to="/domain/rites">Rites</Link><sup><InnerLink showBacklink="backlink-faith-abraxas-ref-A-1" id="faith-abraxas-ref-A-1" data-hash-target to="faith-abraxas-A">1</InnerLink></sup>, <Link to="/domain/thought">Thought</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/whip">Whip</Link><br/><strong>Symbol</strong> Demonic face and snakes<br/><strong>Sacred Animal(s)</strong> Snake<br/><strong>Sacred Color(s)</strong> Green, orange</p>
<h2 id="faith-abraxas-demonicfiendish-obedience" data-hash-target>Demonic/Fiendish Obedience</h2>
<blockquote>
<p><em><Link to="/feat/demonic_obedience">Demonic Obedience</Link> and <Link to="/feat/fiendish_obedience">Fiendish Obedience</Link> have the same obedience:</em><br/>Self-flagellate with a small whip or tree branch, punctuating each stroke with utterances of mystic words of power. Gain a +4 profane bonus on saves against charm effects and written magical effects.</p>
<h3 id="faith-abraxas-boons-evangelist">Boons: Evangelist</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 10</Link></p>
<ol>
<li><strong>Warped Arcana (Sp)</strong> <Link to="/spell/magic_aura">magic aura</Link> 3/day, <Link to="/spell/touch_of_idiocy">touch of idiocy</Link> 2/day, or <Link to="/spell/dispel_magic">dispel magic</Link> 1/day</li>
<li><strong>Poisoned Mysticism (Su)</strong> Your magic is imbued with the toxic lore of Abraxas. You add your Intelligence bonus on <Link to="/rule/concentration">concentration</Link> checks and on caster level checks to penetrate spell resistance or dispel ongoing magical effects; if you already add your Intelligence modifier on such a check, add your Wisdom bonus instead. In addition, whenever you poison a creature via any method, whether from a spell such as <Link to="/spell/poison">poison</Link> or <Link to="/spell/prismatic_spray">prismatic spray</Link>, from an envenomed weapon, or any other means, the saving throw DC of the poison effect is increased by 2. Curing this poison effect requires one additional successful save, and caster level checks to cure this poison effect (such as that required for neutralize poison) take a -4 penalty. You never risk accidentally poisoning yourself when you apply poison to a weapon. Finally, once per day, you can cast <em>poison</em> as a spell-like ability.</li>
<li><strong>Invert Magic (Sp)</strong> The Master of the Final Incantation grants you the power to turn magic back on its source. You gain spell resistance equal to 11 + your Hit Dice; if you already have spell resistance as a result of a racial ability, it instead increases by 5. Whenever you would be affected by a spell, you can allow it to bypass your spell resistance, even when it's not your turn. Once per day, as an immediate action when a spell that targets only you fails to penetrate your spell resistance, you can reflect that spell back on the original caster, as if you were under the effect of <Link to="/spell/spell_turning">spell turning</Link>.</li>
</ol>
<h3 id="faith-abraxas-boons-exalted-or-demonic-obedience">Boons: Exalted or Demonic Obedience</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 10</Link></p>
<ol>
<li><strong>Secret Lore (Sp)</strong> <Link to="/spell/identify">identify</Link> 3/day, <Link to="/spell/augury">augury</Link> 2/day, or <Link to="/spell/illusory_script">illusory script</Link> 1/day</li>
<li><strong>Heretical Revelation (Su)</strong> Three times per day as a standard action, you can whisper terrible secrets to an adjacent target. The target must succeed at a Will save (DC = 10 + half your Hit Dice + your Charisma modifier) or be <Link to="/misc/stunned">stunned</Link> for 1 round, then <Link to="/misc/confused">confused</Link> for 1d4 rounds, and then <Link to="/misc/nauseated">nauseated</Link> for 2d6 rounds. This is a mind-affecting effect.</li>
<li><strong>Penultimate Incantation (Sp)</strong> Three times per day, you can affect a single creature within 60 feet with a targeted <Link to="/spell/greater_dispel_magic">greater dispel magic</Link>. Each spell or effect so dispelled deals an amount of fire damage to the target equal to the result of your caster level check to dispel that effect.</li>
</ol>
<h3 id="faith-abraxas-boons-sentinel">Boons: Sentinel</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 10</Link></p>
<ol>
<li><strong>Serpent Knight (Sp)</strong> <Link to="/spell/blade_lash">blade lash</Link> 3/day, <Link to="/spell/extreme_flexibility">extreme flexibility</Link> 2/day, or <Link to="/spell/summon_monster_iii">summon monster III</Link> (1 fiendish constrictor snake or 1d4+1 fiendish vipers only) 1/day</li>
<li><strong>Fanged Lash (Su)</strong> Any whip you wield grows serpentine scales, and the tip of the whip becomes a biting snake's head. Damage with your whip deals lethal damage, and you can damage creatures wearing armor. The whip deals an additional 1d6 points of damage on a hit, and once per minute as a swift action as you strike a foe with a whip, you can cause the whip to poison the target with <Link to="/eq-poison/black_adder_venom">black adder venom</Link>. The saving throw DC of this venom is equal to 10 + half your Hit Dice + your Constitution modifier.</li>
<li><strong>Tools of the Master (Su)</strong> You can imbue your weapons with echoes of those wielded by Abraxas himself. When you perform your obedience, choose a single whip and a single light or heavy shield you have to become imbued. An imbued shield gains the <Link to="/magic-enh/animated">animated</Link> special ability. An imbued whip can siphon magical energy from spellcasting foes it strikes: up to three times per day as a swift action as you strike such a foe, you can attempt to drain magic. When you do so, the target must attempt a Will save (DC = 10 + half your Hit Dice + your Charisma modifier). If the target succeeds, it takes 1d4 points of ability damage to its Intelligence, Wisdom, or Charisma score (whichever is highest). If the target fails, the whip deals 1d6 points of ability drain to this ability score instead, and it absorbs one spell from the target. If the target is a spontaneous caster, one of its highest-level available spell slots is expended, and you regain a spell slot of an equal or lower level (your choice; if you don't have the ability to spontaneously cast spells, you receive no benefit from this). If the target is a prepared spellcaster, one of its highest-level spells (determined randomly) is lost as if cast, and that spell becomes stored in your whip (as per a <Link to="/magic-ring/major_ring_of_spell_storing">major ring of spell storing</Link>). Your whip can store only one spell at a time in this way; if you drain another spell while your whip already contains one, the contained spell is replaced by the new spell you drain.</li>
</ol>
</blockquote>
<h2 id="faith-abraxas-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-abraxas-feats">Feats</h3>
<ul>
<li><Link to="/feat/channel_discord">Channel Discord</Link></li>
</ul>
<h3 id="faith-abraxas-magic-items---wondrous-items">Magic Items - Wondrous Items</h3>
<ul>
<li><Link to="/magic-wondrous/dagons_eye">Dagon's Eye</Link></li>
</ul>
<h3 id="faith-abraxas-traits">Traits</h3>
<ul>
<li><Link to="/trait/demonic_persuasion">Demonic Persuasion</Link></li>
</ul>
</blockquote>
<h2 id="faith-abraxas-description" data-hash-target>Description</h2>
<blockquote>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 11</Link>, <Link to="/source/book_of_the_damned___volume_2_lords_of_chaos">Book of the Damned - Volume 2: Lords of Chaos pg. 9</Link><br/>Abraxas is a hideous creature with the head of a deformed and fanged bird and two writhing vipers in the place of legs. His torso is humanoid, and he wields a flail and shield, both of which have eerie and deadly powers: the flail can steal portions of a thinking creature's mind or its prepared spells and give them to Abraxas for his use, while the shield can animate and attack foes as it continues to defend Abraxas. Abraxas knows countless destructive secrets and eldritch magical formulas, particularly those that cause great devastation and pain. His greatest weapon is the dreaded "Final Incantation," a single potent word that can unmake magic.</p>
</blockquote>
<p>Although Abraxas's following is quite strong among the <Link to="/monster/drow">drow</Link> of Golarion, one can expect to find small cults of Abraxas in most large cities on the surface. His cult is particularly strong in Nex's capital city of Quantium, where it maintains a notorious library called Scrivenbough, a fortified stone structure with countless rare books in its holdings, and cultists who tattoo their greatest secrets on hidden parts of their bodies.</p>
<p>Abraxas dwells in the realm of Pleroma, a deceptive world of false paradise maintained by complex illusions and clever construction. A visitor to Pleroma may not even realize she wanders an Abyssal realm, as the nefarious region reshapes itself between blinks and around every corner into places the traveler might view as serene and beautiful. Abraxas himself rules Pleroma from the spiral city of Diovengia. Hypnotic in its beauty, Diovengia consists of thousands of library towers and fortified repositories of hidden knowledge. Populated by serpents, enslaved souls, and plenty of demons, Diovengia's libraries are sometimes visited by brave and curious seekers of knowledge - although one must be wary when bargaining with the custodians therein. The city itself is protected by a cabal of powerful <Link to="/monster/marilith">marilith</Link> demons, who are themselves ruled by one of Abraxas's favorite consorts and minions, the marilith Alistraxia (female marilith rogue 12).</p>
<section data-footnotes>
<h3 id="faith-abraxas-label">Footnotes</h3>
<ol>
<li id="faith-abraxas-A">
<p>Requires the <Link to="/trait/acolyte_of_apocrypha">Acolyte of Apocrypha</Link> trait. <InnerLink id="backlink-faith-abraxas-ref-A-1" data-hash-target to="faith-abraxas-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _acavna = {hasJL:true,title: "Acavna", jsx: <><div className="jumpList" id="faith-acavna-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-acavna-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Acavna</div><div className="sub">The Shield</div></div>
<p><strong>Sources</strong> <Link to="/source/pathfinder_123_the_flooded_cathedral">Pathfinder #123: The Flooded Cathedral pg. 66</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Acavna">Acavna</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-acavna-details">Details</h3>
<p><strong>Alignment</strong> CN<br/><strong>Pantheon</strong> Azlanti Pantheon<br/><strong>Areas of Concern</strong> Companionship, defensive battle, and the moon<br/><strong>Domains</strong> <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/war">War</Link><br/><strong>Subdomains</strong> <Link to="/domain/ancestors">Ancestors</Link>, <Link to="/domain/defense">Defense</Link>, <Link to="/domain/moon">Moon</Link>, <Link to="/domain/night">Night</Link>, <Link to="/domain/tactics">Tactics</Link>, <Link to="/domain/wards">Wards</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/spear">Spear</Link><br/><strong>Symbol</strong> Crossed spears over a full moon</p>
<h2 id="faith-acavna-description" data-hash-target>Description</h2>
<p>Kind and compassionate, Acavna regarded humanity, especially the Azlanti, as something to be protected and cherished. From rural militias to elite city guards, many in Azlant praised Acavna and prayed to her for protection in times of peace as well as in times of war. Acavna looked most favorably upon those who were besieged or outnumbered. An important story in her holy text tells of the siege of the city-state of Bilith-Vel. The invading army was approaching the city under cover of night, and while the besieged awaited attack, a lone guard prayed to Acavna for a revelation that she could use to save her city. As the army neared, the sliver of the crescent moon suddenly shone as bright as a full moon, revealing the attackers and giving the defending forces enough time to reposition and repel the invaders.</p>
<p>As Acavna was the goddess of the moon, some of her most powerful priests were among the first people from Golarion to explore its moon's surface. Later, toward the end of Azlant, a faction within the empire gained access to the moon and constructed a prison on its surface to house the empire's worst criminals. This outraged Acavna's worshipers, but although they fought against the plan as best they could, they ended up losing in the end.</p>
<p>Acavna fell for the studious <Link to="/faith/amaznen">Amaznen</Link>, with whom she partnered until the two sacrificed themselves to save Golarion - she moved the moon to take the brunt of the alghollthus' cosmic assault while Amaznen siphoned their dangerous magic from the debris. Acavna's actions led to her death but greatly lessened the blow to the planet, allowing many creatures to survive the assault.</p>
</>};
const _achaekek = {hasJL:true,title: "Achaekek", jsx: <><div className="jumpList" id="faith-achaekek-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-achaekek-deific-obedience">Deific Obedience</InnerLink></li><li><InnerLink toTop to="faith-achaekek-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-achaekek-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Achaekek</div><div className="sub">He Who Walks in Blood</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_faiths">Inner Sea Faiths pg. 5</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Achaekek">Achaekek</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-achaekek-details">Details</h3>
<p><strong>Alignment</strong> LE<br/><strong>Pantheon</strong> Other Deities<br/><strong>Areas of Concern</strong> Assassinations, divine punishment, the red mantis<br/><strong>Domains</strong> <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link>, <Link to="/domain/war">War</Link><br/><strong>Subdomains</strong> <Link to="/domain/blood">Blood</Link>, <Link to="/domain/deception">Deception</Link>, <Link to="/domain/evil">Devil (Evil)</Link>, <Link to="/domain/law">Devil (Law)</Link>, <Link to="/domain/insect">Insect</Link><sup><InnerLink showBacklink="backlink-faith-achaekek-ref-A-1" id="faith-achaekek-ref-A-1" data-hash-target to="faith-achaekek-A">1</InnerLink></sup>, <Link to="/domain/murder">Murder</Link>, <Link to="/domain/tactics">Tactics</Link>, <Link to="/domain/thievery">Thievery</Link><br/><strong>Inquisitions</strong> <Link to="/inquisition/clandestine">Clandestine</Link>, <Link to="/inquisition/execution">Execution</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/sawtooth_sabre">Sawtooth sabre</Link><br/><strong>Symbol</strong> Crossed mantis claws<br/><strong>Sacred Animal(s)</strong> Crimson mantis<br/><strong>Sacred Color(s)</strong> Red</p>
<h3 id="faith-achaekek-on-golarion">On Golarion</h3>
<p><strong>Centers of Worship</strong> Ilizmagorti<br/><strong>Nationality</strong> monster</p>
<h2 id="faith-achaekek-deific-obedience" data-hash-target><Link to="/feat/deific_obedience">Deific Obedience</Link></h2>
<blockquote>
<p>Meditate in a private place before a trophy or broken religious symbol taken from a target you have been contracted to kill. This trophy must be anointed with a single drop of your blood, drawn from your flesh by a sawtooth sabre, and the trophy must be destroyed at the end of your meditation. If you have yet to complete a contract, have no appropriate trophies at hand, or seek to serve the Mantis God in other ways than as the god's assassin, you must instead offer your own vital fluid to He Who Walks in Blood by cutting yourself along the right arm with a sawtooth sabre. Such self-mutilation deals 1d6 points of damage to you, which cannot be healed during the hour of meditation without disrupting the obedience; after the meditation ends, the wounds can be healed by any means available. You gain a +2 profane bonus to confirm critical hits while wielding a sawtooth sabre. As long as you have a sawtooth sabre in each hand, you can use those blades to complete the somatic component of any spell you cast, and you treat sawtooth sabres as your divine focus for the casting of divine spells.</p>
<h3 id="faith-achaekek-boons-exalted">Boons: Exalted</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_faiths">Inner Sea Faiths pg. 5</Link></p>
<ol>
<li><strong>Crimson Decree (Sp)</strong> <Link to="/spell/doom">doom</Link> 3/day, <Link to="/spell/death_knell">death knell</Link> 2/day, or <Link to="/spell/blood_biography">blood biography</Link> 1/day</li>
<li><strong>Blood Scent (Sp)</strong> To your heightened olfactory senses, the acrid scent of blood is as pleasing and distinctive as the sweetest perfume. Three times per day, you can cast <Link to="/spell/blood_scent">blood scent</Link> on yourself as a spell-like ability. This ability does not grant the spell's bonus on attack and damage rolls, even if you are an orc or have a rage ability.</li>
<li><strong>Focused Assassin (Su)</strong> Your combat skills are just as deadly when you have an assassination target as when you don't. When you perform your obedience for the day, if you are not contracted to kill a target, you can name a single target. You need not know the exact name of your target, but you must know a suitably detailed and correct description, such as "the thieves' guild's second in command." Against that target, you gain a +2 profane bonus on attack rolls and weapon damage rolls, and you deal an additional 2d6 points of damage. The save DCs of any spells you cast on the target increase by 2. If you are contracted to kill a target, these bonuses apply against that target; if you are contracted to kill multiple targets, you must choose one target against whom these bonuses apply when you perform your obedience.</li>
</ol>
<h3 id="faith-achaekek-boons-sentinel">Boons: Sentinel</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_faiths">Inner Sea Faiths pg. 5</Link></p>
<ol>
<li><strong>Blood Must Flow (Sp)</strong> <Link to="/spell/lead_blades">lead blades</Link> 3/day, <Link to="/spell/spiritual_weapon">spiritual weapon</Link> 2/day, or <Link to="/spell/keen_edge">keen edge</Link> 1/day</li>
<li><strong>Bleeding Wounds (Ex)</strong> All wounds you inflict with a sawtooth sabre are bleeding wounds, and deal 1d4 points of <Link to="/rule/bleed">bleed</Link> damage to the target. If you deal bleed damage via another source (such as the <Link to="/talent/bleeding_attack">bleeding attack</Link> rogue talent or by using a <Link to="/magic-enh/wounding">wounding</Link> sawtooth sabre), this ability does not deal additional bleed damage. You can also use <Link to="/spell/bleed">bleed</Link> as a quickened spell-like ability three times per day.</li>
<li><strong>Mantis Style Mastery (Ex)</strong> You take no penalties on attack rolls from two-weapon fighting when wielding two sawtooth sabres simultaneously, and you gain a +2 profane bonus on all damage rolls with sawtooth sabres. If you deal <Link to="/ability/sneak_attack">sneak attack</Link> damage with a sawtooth sabre, you deal 2 additional points of damage for each die rolled as part of your sneak attack damage. If you have levels in the <Link to="/pclass/red_mantis_assassin">Red Mantis assassin</Link> prestige class, the DC for the save against your prayer attack increases by 2.</li>
</ol>
</blockquote>
<h2 id="faith-achaekek-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-achaekek-archetypes">Archetypes</h3>
<ul>
<li><Link to="/arc-alchemist/crimson_chymist">Crimson Chymist (Alchemist)</Link></li>
<li><Link to="/arc-warpriest/mantis_zealot">Mantis Zealot (Warpriest)</Link></li>
</ul>
<h3 id="faith-achaekek-feats">Feats</h3>
<ul>
<li><Link to="/feat/bloody_sabres">Bloody Sabres</Link></li>
</ul>
<h3 id="faith-achaekek-magic-items---armor">Magic Items - Armor</h3>
<ul>
<li><Link to="/magic-armor/red_stalker_armor">Red Stalker Armor</Link></li>
</ul>
<h3 id="faith-achaekek-magic-items---weapons">Magic Items - Weapons</h3>
<ul>
<li><Link to="/magic-weapon/crimson_bluff">Crimson Bluff</Link></li>
<li><Link to="/magic-weapon/fuming_blood_sabre">Fuming Blood Sabre</Link></li>
</ul>
<h3 id="faith-achaekek-magic-items---wondrous-items">Magic Items - Wondrous Items</h3>
<ul>
<li><Link to="/magic-wondrous/eye_of_the_mantis">Eye of the Mantis</Link></li>
<li><Link to="/magic-wondrous/mantis_embrace">Mantis Embrace</Link></li>
<li><Link to="/magic-wondrous/mask_of_the_mantis">Mask of the Mantis</Link></li>
</ul>
<h3 id="faith-achaekek-monsters">Monsters</h3>
<ul>
<li><Link to="/monster/kaicharek">Kaicharek</Link></li>
</ul>
<h3 id="faith-achaekek-prestige-classes">Prestige Classes</h3>
<ul>
<li><Link to="/pclass/death_slayer">Death Slayer</Link></li>
<li><Link to="/pclass/red_mantis_assassin">Red Mantis Assassin</Link></li>
</ul>
<h3 id="faith-achaekek-traits">Traits</h3>
<ul>
<li><Link to="/trait/deep_wounding">Deep Wounding</Link></li>
<li><Link to="/trait/frightening_speed">Frightening Speed</Link></li>
</ul>
<h3 id="faith-achaekek-unique-spell-rules">Unique Spell Rules</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 175</Link></p>
<p><strong>Sources</strong> <Link to="/source/inner_sea_faiths">Inner Sea Faiths pg. 7</Link></p>
<h4 id="faith-achaekek-cleric-warpriest">Cleric, Warpriest</h4>
<ul>
<li><Link to="/spell/keen_senses">Keen Senses</Link> can be prepared as a 1st-level spell</li>
<li><Link to="/spell/negate_aroma">Negate Aroma</Link> can be prepared as a 1st-level spell</li>
<li><Link to="/spell/spider_climb">Spider Climb</Link> can be prepared as a 2nd-level spell</li>
</ul>
<h4 id="faith-achaekek-druid">Druid</h4>
<ul>
<li><Link to="/spell/murderous_command">Murderous Command</Link> can be prepared as a 1st-level spell</li>
</ul>
</blockquote>
<h2 id="faith-achaekek-description" data-hash-target>Description</h2>
<p>Many theologians, including those who worship the Mantis God, agree that another god, or perhaps a group of them, created Achaekek - yet who exactly is responsible for his genesis is unclear. Certainly, the churches of Asmodeus, Calistria, Lamashtu, Pharasma, Rovagug, and Zon-Kuthon have compelling arguments that point to their patrons as the source of the Mantis God. Even the faiths of Norgorber and Gorum have legends that He Who Walks in Blood was born of their deities, despite legends of Achaekek originating far before either of them came to be. The most cogent belief may well be the one that the church of Achaekek espouses: that the creator of their god is long dead, murdered by the Mantis God for daring to create something so monstrous as himself.</p>
<p>Although known to his worshipers as He Who Walks in Blood, and commonly attributed by the faithful to be a masculine entity, Achaekek exists beyond conceits of gender, race, or politics. This means his followers come from enormously diverse backgrounds - united only in their common exaltation of the act of murder.</p>
<p>In art, Achaekek is universally depicted as a towering crimson mantis with four killing arms and a savage spike at the end of his long, slender abdomen. His eyes are endless pools of night, and he leaves a trail of blood wherever he walks, said to be from those countless victims the god and his cult have slaughtered over the eons. Achaekek is said to possess the power to rend reality itself in order to instantly travel to any time or plane to carry out missions of murder.</p>
<section data-footnotes>
<h3 id="faith-achaekek-label">Footnotes</h3>
<ol>
<li id="faith-achaekek-A">
<p>Requires the <Link to="/trait/acolyte_of_apocrypha">Acolyte of Apocrypha</Link> trait. <InnerLink id="backlink-faith-achaekek-ref-A-1" data-hash-target to="faith-achaekek-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _aegirran = {hasJL:true,title: "Aegirran", jsx: <><div className="jumpList" id="faith-aegirran-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-aegirran-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Aegirran</div><div className="sub">The Sea Dreamer</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 324</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Aegirran">Aegirran</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-aegirran-details">Details</h3>
<p><strong>Alignment</strong> NG<br/><strong>Pantheon</strong> Giant Deities<br/><strong>Areas of Concern</strong> Dreams, sailing, voyages<br/><strong>Domains</strong> <Link to="/domain/good">Good</Link>, <Link to="/domain/travel">Travel</Link>, <Link to="/domain/water">Water</Link>, <Link to="/domain/weather">Weather</Link><br/><strong>Subdomains</strong> <Link to="/domain/exploration">Exploration</Link>, <Link to="/domain/oceans">Oceans</Link>, <Link to="/domain/seasons">Seasons</Link>, <Link to="/domain/storms">Storms</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/trident">Trident</Link><br/><strong>Symbol</strong> Spouting whale<br/><strong>Sacred Animal(s)</strong> Whale<br/><strong>Sacred Color(s)</strong> Blue, gray</p>
<h2 id="faith-aegirran-description" data-hash-target>Description</h2>
<p><strong>Sources</strong> <Link to="/source/giants_revisited">Giants Revisited pg. 54</Link><br/>The storm giant demigods Aegirran and <Link to="/faith/skode">Skode</Link> are said to be forever wed but forever apart, separated by land and sea. Skode the huntress stalks the land with their three sons, seeking trophies but also the destruction of sinister forces that stalk the night. Aegirran is sailmaster and seadreamer, leading their nine daughters on endless voyages across and below the sea with their shell-encrusted fleet. Only at the turnings of the season may Aegirran and Skode reunite upon the shore as their children mark the changing weather. The three sons are the deadly fangs of the north wind that bite most keenly the forces of evil, and their daughters the alternately gentle and wild east, west, and south winds, bringing sun and rain to nourish the coasts and inland fields alike.</p>
</>};
const _aerekostes = {hasJL:true,title: "Aerekostes", jsx: <><div className="jumpList" id="faith-aerekostes-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-aerekostes-other-rules">Other Rules</InnerLink></li><li><InnerLink toTop to="faith-aerekostes-description">Description</InnerLink></li></ul></div><div className="headerLike">Aerekostes</div>
<p><strong>Sources</strong> <Link to="/source/pathfinder_144_midwives_to_death">Pathfinder #144: Midwives to Death pg. 74</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Aerekostes">Aerekostes</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-aerekostes-details">Details</h3>
<p><strong>Alignment</strong> N<br/><strong>Pantheon</strong> Iblydan Hero-Gods<br/><strong>Areas of Concern</strong> Contingencies, intelligent items<br/><strong>Domains</strong> <Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/magic">Magic</Link><br/><strong>Subdomains</strong> <Link to="/domain/arcane">Arcane</Link>, <Link to="/domain/construct">Construct</Link>, <Link to="/domain/memory">Memory</Link>, <Link to="/domain/resurrection">Resurrection</Link><br/><strong>Favored Weapon</strong> none</p>
<h3 id="faith-aerekostes-on-golarion">On Golarion</h3>
<p><strong>Nationality</strong> Iblydan</p>
<h2 id="faith-aerekostes-other-rules" data-hash-target>Other Rules</h2>
<ul>
<li>Aerekostes can grant 9th-level spells</li>
</ul>
<h2 id="faith-aerekostes-description" data-hash-target>Description</h2>
<p>Believed to be either the hero-god Ximakter trapped in his own weapon or a blade that spontaneously manifested sapience and mythic power, this agender <Link to="/eq-weapon/falcata">falcata</Link> and hero-god of contingencies and intelligent items resides in its own temple and occasionally lends itself to aspiring heroes.</p>
</>};
const _aesdurath = {hasJL:true,title: "Aesdurath", jsx: <><div className="jumpList" id="faith-aesdurath-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-aesdurath-fiendish-obedience">Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-aesdurath-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Aesdurath</div><div className="sub">The Pale Dowager</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 318</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Aesdurath">Aesdurath</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-aesdurath-details">Details</h3>
<p><strong>Alignment</strong> NE<br/><strong>Pantheon</strong> Daemon Harbingers<br/><strong>Areas of Concern</strong> Immortality, liches, magical catastrophes<br/><strong>Domains</strong> <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/trickery">Trickery</Link><br/><strong>Subdomains</strong> <Link to="/domain/arcane">Arcane</Link>, <Link to="/domain/daemon">Daemon</Link>, <Link to="/domain/divine">Divine</Link>, <Link to="/domain/undead">Undead</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/dagger">Dagger</Link><br/><strong>Symbol</strong> Crystal skull<br/><strong>Sacred Animal(s)</strong> Crow<br/><strong>Sacred Color(s)</strong> Crystal, white</p>
<h2 id="faith-aesdurath-fiendish-obedience" data-hash-target><Link to="/feat/fiendish_obedience">Fiendish Obedience</Link></h2>
<blockquote>
<p>Eat a portion of a being killed by magic. Gain a +4 profane bonus on saving throws against death effects.</p>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 112</Link><br/>Abaddon's unique <Link to="/family/daemon">daemons</Link> take on a host of titles, customized to their methods and vanity. These harbingers enjoy sweeping influence among daemons as favored advisors, and they work to cultivate their own cults on Abaddon and beyond.</p>
<p>Daemon harbingers are neutral evil demigods that range in power from CR 21 to CR 25. The boons they grant are less complex than those granted by the Horsemen themselves, manifesting as spell-like abilities usable twice per day each.</p>
<ol>
<li><Link to="/spell/death_knell">death knell</Link></li>
<li><Link to="/spell/animate_dead">animate dead</Link></li>
<li><Link to="/spell/circle_of_death">circle of death</Link></li>
</ol>
</blockquote>
<h2 id="faith-aesdurath-description" data-hash-target>Description</h2>
<p>Aesdurath, the Pale Dowager, is a gaunt, almost skeletal figure covered in spontaneously manifesting bite marks.</p>
</>};
const _aesocar = {hasJL:true,title: "Aesocar", jsx: <><div className="jumpList" id="faith-aesocar-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-aesocar-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-aesocar-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Aesocar</div><div className="sub">The Healing Touch</div></div>
<p><strong>Sources</strong> <Link to="/source/pathfinder_123_the_flooded_cathedral">Pathfinder #123: The Flooded Cathedral pg. 67</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Aesocar">Aesocar</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-aesocar-details">Details</h3>
<p><strong>Alignment</strong> LG<br/><strong>Pantheon</strong> Azlanti Pantheon<br/><strong>Areas of Concern</strong> Creation of life, health, and medicine<br/><strong>Domains</strong> <Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link><br/><strong>Subdomains</strong> <Link to="/domain/good">Archon (Good)</Link>, <Link to="/domain/law">Archon (Law)</Link>, <Link to="/domain/construct">Construct</Link>, <Link to="/domain/loyalty">Loyalty</Link>, <Link to="/domain/purity">Purity</Link>, <Link to="/domain/restoration">Restoration</Link>, <Link to="/domain/resurrection">Resurrection</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/mancatcher">Mancatcher</Link><br/><strong>Symbol</strong> Enclosed six-pointed star</p>
<h2 id="faith-aesocar-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-aesocar-traits">Traits</h3>
<ul>
<li><Link to="/trait/clockwork_surgeon">Clockwork Surgeon</Link></li>
</ul>
</blockquote>
<h2 id="faith-aesocar-description" data-hash-target>Description</h2>
<p>Aesocar is the god of healing and human health. Even though Aesocar has a focused interest in humanity, his clergy provides healing to all in need, and during Azlanti times his clerics made great strides in curing and eradicating some of humankind's most troublesome maladies. They worked most of their wonders with divine magic, but the church was also a scholarly institution that trained lay priests how to diagnose illnesses, create medicines, and perform surgeries. The church of Aesocar was the first to perfect the use of prosthetics, and after working in sync with engineers from <Link to="/faith/amaznen">Amaznen's</Link> faithful, the two groups created clockwork prosthetics that changed the quality of life for thousands of Azlanti.</p>
<p>One sect of Aesocar's religion focused on the creation of life. Its members' work was considered controversial by some in the empire, but the sect gained more respect toward Azlant's final days. Not only did they create life-forms through magic alone, but they also learned how to create specific limbs and organs to help heal those broken in battle or ravaged by disease.</p>
<p>Temples to Aesocar existed throughout Azlant. The most grandiose temples were in the empire's great cities, but villages often had small chapels with attending priests. Some of these priests were part of an outreach program wherein, completing seminary, they would be assigned to some settlement in the empire to serve the local population. Aesocar got along with Amaznen, but while he appreciated his colleague's scientific acumen, Aesocar greatly wished for him to act with a greater sense of morality. With an interest in health, Aesocar is friendly with Jaidi for providing a bounty to all within the empire. Though not typically prone to anger or hatred, Aesocar despises Sicva and her vile penchant for spreading disease.</p>
</>};
const _ah_pook = {hasJL:true,title: "Ah Pook", jsx: <><div className="jumpList" id="faith-ah_pook-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-ah_pook-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Ah Pook</div><div className="sub">The Destroyer</div></div>
<p><strong>Sources</strong> <Link to="/source/pathfinder_143_borne_by_the_suns_grace">Pathfinder #143: Borne by the Sun's Grace pg. 72</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Ah%20Pook">Ah Pook</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-ah_pook-details">Details</h3>
<p><strong>Alignment</strong> NE<br/><strong>Pantheon</strong> Other Deities<br/><strong>Areas of Concern</strong> Death, destruction, and the moon<br/><strong>Domains</strong> <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/void">Void</Link><br/><strong>Subdomains</strong> <Link to="/domain/catastrophe">Catastrophe</Link>, <Link to="/domain/fear">Fear</Link>, <Link to="/domain/isolation">Isolation</Link>, <Link to="/domain/loss">Loss</Link>, <Link to="/domain/moon">Moon</Link>, <Link to="/domain/sahkil">Sahkil</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/terbutje">Terbutje</Link><br/><strong>Symbol</strong> a skull with a crescent eclipse<br/><strong>Sacred Animal(s)</strong> maggot</p>
<h2 id="faith-ah_pook-description" data-hash-target>Description</h2>
<p>Ah Pook is a vile god who preys on the fears of mortals, twisting their doubt and insecurity until they ultimately self-destruct. This self-destruction can be physical, psychological, or social, with many victims ruining the lives of others around them alongside their own. This process usually results in victims losing their loved ones, leaving them even more isolated and miserable, a result Ah Pook revels in. Ah Pook has many followers throughout Arcadia, each committed to corrupting the thoughts of others on their god's behalf. Many <Link to="/family/sahkil">sahkils</Link> also serve the Destroyer, as it allows them greater opportunities to further the fears of mortals. Arcadians are well aware of Ah Pook's machinations, and even less destructive fears are seen as the god's work. Common anxieties and worries are usually countered by small prayers to ward off Ah Pook, in hopes of relieving these thoughts. The commonality of such fears has earned Ah Pook several names throughout Arcadia, with those living near Xopatl and Innazpa referring to him as Ohachtsik.</p>
</>};
const _ahriman = {hasJL:true,title: "Ahriman", jsx: <><div className="jumpList" id="faith-ahriman-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-ahriman-fiendish-obedience">Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-ahriman-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Ahriman</div><div className="sub">Lord of All Divs</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 316</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Ahriman">Ahriman</a> <em>(link opens in outside browser)</em><br/><strong>Monster Link</strong> <Link to="/monster/ahriman">Ahriman</Link></p>
<h3 id="faith-ahriman-details">Details</h3>
<p><strong>Alignment</strong> NE<br/><strong>Pantheon</strong> Other Deities<br/><strong>Areas of Concern</strong> Destruction, div, nihilism<br/><strong>Domains</strong> <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link><br/><strong>Subdomains</strong> <Link to="/domain/catastrophe">Catastrophe</Link>, <Link to="/domain/fear">Fear</Link>, <Link to="/domain/loss">Loss</Link>, <Link to="/domain/rage">Rage</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/whip">Whip</Link><br/><strong>Symbol</strong> Black and silver eclipse<br/><strong>Sacred Animal(s)</strong> Snake<br/><strong>Sacred Color(s)</strong> Black, silver</p>
<h2 id="faith-ahriman-fiendish-obedience" data-hash-target><Link to="/feat/fiendish_obedience">Fiendish Obedience</Link></h2>
<blockquote>
<p>While praying to Ahriman, destroy something of monetary or sentimental value to another person, preferably in front of someone who feels a strong emotional connection toward it. Alternatively, voluntarily take 1 point of <Link to="/rule/constitution_damage">Constitution damage</Link> while chanting praises to Ahriman and flagellating yourself with a barbed lash. After performing this obedience, your true alignment is masked from detection. Each time you perform this obedience, you select an alignment that you wish to detect as. Once chosen, this alignment can't be changed until you perform this obedience again or 24 hours pass. The masked alignment can trick items and magic that require a particular alignment. For example, a neutral evil follower can make her alignment appear to be lawful good, which would allow her to safely pass beyond a glyph of warding keyed to lawful good.</p>
<h3 id="faith-ahriman-boons-evangelist">Boons: Evangelist</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 12</Link></p>
<ol>
<li><strong>Ahriman's Word (Sp)</strong> <Link to="/spell/command">command</Link> 3/day, <Link to="/spell/detect_thoughts">detect thoughts</Link> 2/day, or <Link to="/spell/suggestion">suggestion</Link> 1/day</li>
<li><strong>Unassailable Conviction (Su)</strong> You know existence is pointless and find little that can affect your outlook or sway your ultimate outcome in the bleak span of existence. Once per day when you fail a Will save, you can immediately roll again and use the second result as your actual saving throw result. If you succeed at this second save, you gain a +2 morale bonus on attack rolls and saving throws for 1 hour.</li>
<li><strong>Force the Lie (Su)</strong> Once per day, you can twist the intention of beneficial effects. As a standard action, you can create a wave of crackling black energy that fills a 30-foot-radius spread at any point within 90 feet of you. Creatures in this area other than yourself that are benefiting from a luck, morale, or sacred bonus instead treat that bonus as a penalty. You and other worshipers of Ahriman can see through this area of black energy with ease, but all other creatures treat the area as if it were under the effects of <Link to="/spell/obscuring_mist">obscuring mist</Link>. The black energy persists for 1 round per Hit Die you have, and cannot be dissipated by wind effects. An affected creature can negate this adjustment to bonuses with a successful Will save (DC = 10 + half your Hit Dice + your Charisma modifier), but this does not negate the obscuring effect.</li>
</ol>
<h3 id="faith-ahriman-boons-exalted">Boons: Exalted</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 12</Link></p>
<ol>
<li><strong>Hamper the Righteous (Sp)</strong> <Link to="/spell/protection_from_good">protection from good</Link> 3/day, <Link to="/spell/touch_of_idiocy">touch of idiocy</Link> 2/day, or <Link to="/spell/bestow_curse">bestow curse</Link> 1/day</li>
<li><strong>Pierce Obfuscation (Su)</strong> You can see the bleak truth despite means to hide your vision. You can see perfectly in darkness of any kind, including that created by <Link to="/spell/deeper_darkness">deeper darkness</Link>. Once per day, you can cast <Link to="/spell/true_seeing">true seeing</Link> as a spell-like ability.</li>
<li><strong>Call for Ruin (Sp)</strong> You can conjure some of Ahriman's armies for your own purposes. Once per day as a standard action, you can summon 1d4+1 <Link to="/monster/ghawwas">ghawwas</Link>, 1d3 <Link to="/monster/shira">shiras</Link>, or one <Link to="/monster/sepid">sepid</Link> as if with <Link to="/spell/summon_monster_ix">summon monster IX</Link>, and you gain <Link to="/umr/telepathy">telepathy</Link> with them to a range of 100 feet. The divs summoned in this way follow your commands perfectly for 1 round per Hit Die you have before vanishing back to their home in Abaddon. The summoned divs don't follow commands that would cause them to perform overly good acts or save mortal lives other than your own, and they immediately vanish if your orders contradict these restrictions.</li>
</ol>
<h3 id="faith-ahriman-boons-sentinel">Boons: Sentinel</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 12</Link></p>
<ol>
<li><strong>Break the Weak (Sp)</strong> <Link to="/spell/inflict_light_wounds">inflict light wounds</Link> 3/day, <Link to="/spell/death_knell">death knell</Link> 2/day, or <Link to="/spell/dispel_magic">dispel magic</Link> 1/day</li>
<li><strong>Serpentine Lash (Su)</strong> Any whip you wield becomes an extension of your embodiment of evil, lashing out against all those who fail to prostrate themselves before you and oblivion. You gain <Link to="/feat/weapon_specialization">Weapon Specialization</Link> (whip) and <Link to="/feat/whip_mastery">Whip Mastery</Link> as bonus feats, even if you do not meet the prerequisites. In addition, your whip takes on the illusory appearance of a serpent, and you gain a +2 profane bonus to combat maneuver checks to <Link to="/rule/trip">trip</Link> opponents. If you wield a whip with at least a +1 enhancement bonus, you can grant it the <Link to="/magic-enh/dancing">dancing</Link> weapon special ability for 6 rounds per day as a swift action. These rounds need not be consecutive.</li>
<li><strong>Crush Opposition (Su)</strong> Three times per day, you can target one corporeal enemy within 60 feet and call out a castigating challenge that causes the creature to painfully collapse in on itself in a crackle of black energy. The target takes 10 points of damage per Hit Dice you have. Creatures targeted by this ability can attempt a Fortitude save (DC = 10 + half your Hit Dice + your Charisma modifier) to reduce the damage by half. A creature slain by this effect is completely destroyed, and all items it was carrying or wearing at the time fall to the ground and become cursed for a number of hours equal to your Hit Dice. The curse on these items causes nonevil creatures who carry one of the items to take a -1 penalty on saving throws against fear and insanity effects; the penalties for carrying multiple items stack.</li>
</ol>
</blockquote>
<h2 id="faith-ahriman-description" data-hash-target>Description</h2>
<blockquote>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 12</Link><br/>Scholars say that when genies were brought to life, a shadow of destruction followed. This shadow cast itself across the world, countering light and creation where it fell. Over countless millennia, this spirit came to be known as Ahriman.</p>
</blockquote>
<p>Ahriman is a ruinous fiend who seeks to corrupt mortals' minds and works by spreading "wrong thought." He is a being of destruction, but that destruction does not need to be catastrophe or physical devastation alone. He delights in wrecking mortal governments, sowing schisms in religions, and breaking the bonds of family or clan by encouraging poor choices and self-destructive behavior.</p>
<p>Ahriman rules the <Link to="/family/div">divs</Link> from his throne in the realm of Ahermanabad, atop Mount Kaf on the edge of Abaddon. At least one permanent extraplanar portal connects this realm to the House of Oblivion in central Thuvia on Golarion; other portals may well link to additional monuments to Ahriman on other worlds. While Ahermanabad is a small realm, the <Link to="/family/daemon">daemons</Link> of Abaddon leave the divs and their lord to their own devices. However, clashes still sometimes occur between daemons and divs, often resulting in the divs' retreat so as not to anger any of the Four Horsemen.</p>
<p>Ahriman appears as a bestial fiend, his hands clawed like those of a tiger and feet taloned like those of a vulture. Oily snakes worm through his scarred black flesh, riddling their host and all near him with deadly venoms. Horns etched with ancient curses crown Ahriman's tigerlike face, and beyond a great maw filled with soul-rending fangs lies a gate to a realm of darkness rivaled only by oblivion.</p>
<p>Ahriman's ultimate goal is to spread such oblivion. To further his immortal plots, he has spawned innumerable blasphemies, but the corrupted genie spirits known as divs are his most numerous slaves. Ahriman and his minions delight in influencing mortals to abandon wisdom in favor of destructive decisions. As ageless and patient as he is vicious, this force of ancient evil seeks to ease the world toward dissolution, one failure at a time.</p>
</>};
const _ajids = {hasJL:true,title: "Ajids", jsx: <><div className="jumpList" id="faith-ajids-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-ajids-fiendish-obedience">Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-ajids-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Ajids</div><div className="sub">Father Flense</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 318</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Ajids">Ajids</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-ajids-details">Details</h3>
<p><strong>Alignment</strong> NE<br/><strong>Pantheon</strong> Daemon Harbingers<br/><strong>Areas of Concern</strong> Mutilation, skinning, trophy taking<br/><strong>Domains</strong> <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/war">War</Link><br/><strong>Subdomains</strong> <Link to="/domain/blood">Blood</Link>, <Link to="/domain/daemon">Daemon</Link>, <Link to="/domain/insanity">Insanity</Link>, <Link to="/domain/murder">Murder</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/war_razor">War razor</Link><br/><strong>Symbol</strong> Detached human face<br/><strong>Sacred Animal(s)</strong> Ape<br/><strong>Sacred Color(s)</strong> Brown, red</p>
<h2 id="faith-ajids-fiendish-obedience" data-hash-target><Link to="/feat/fiendish_obedience">Fiendish Obedience</Link></h2>
<blockquote>
<p>Mutilate the corpse of a defeated enemy. Gain a +4 profane bonus on saving throws against effects that cause fatigue or exhaustion.</p>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 115</Link><br/>Abaddon's unique <Link to="/family/daemon">daemons</Link> take on a host of titles, customized to their methods and vanity. These harbingers enjoy sweeping influence among daemons as favored advisors, and they work to cultivate their own cults on Abaddon and beyond.</p>
<p>Daemon harbingers are neutral evil demigods that range in power from CR 21 to CR 25. The boons they grant are less complex than those granted by the Horsemen themselves, manifesting as spell-like abilities usable twice per day each.</p>
<ol>
<li><Link to="/spell/blood_armor">blood armor</Link></li>
<li><Link to="/spell/hunger_for_flesh">hunger for flesh</Link></li>
<li><Link to="/spell/decapitate">decapitate</Link></li>
</ol>
</blockquote>
<h2 id="faith-ajids-description" data-hash-target>Description</h2>
<p>Ajids, or Father Flense, resembles a fleshless giant impaled by dozens of razor-edged blades.</p>
</>};
const _aksha = {hasJL:true,title: "Aksha", jsx: <><div className="jumpList" id="faith-aksha-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-aksha-fiendish-obedience">Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-aksha-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Aksha</div><div className="sub">Second Breath</div></div>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 130</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Aksha">Aksha</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-aksha-details">Details</h3>
<p><strong>Alignment</strong> LE<br/><strong>Pantheon</strong> Rakshasa Immortals<br/><strong>Areas of Concern</strong> N/A<br/><strong>Domains</strong> <Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/trickery">Trickery</Link><br/><strong>Subdomains</strong> <Link to="/domain/deception">Deception</Link>, <Link to="/domain/fear">Fear</Link>, <Link to="/domain/fur">Fur</Link>, <Link to="/domain/tyranny">Tyranny</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/kukri">Kukri</Link></p>
<h2 id="faith-aksha-fiendish-obedience" data-hash-target><Link to="/feat/fiendish_obedience">Fiendish Obedience</Link></h2>
<blockquote>
<p>Light a scented torch and meditate on its smoke. Gain a +4 profane bonus on saves against fire effects.</p>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 131</Link><br/>Once in a great while, a <Link to="/monster/rakshasa">rakshasa</Link> achieves a purity of evil that allows it to break free from the cycle of death and reincarnation and transcend its own mortality. The power of such rakshasas approaches that of the gods they think they are.</p>
<p>The rakshasa immortals do not present themselves as having traditional areas of concern, for each of these immortals is concerned primarily with its own glory and power. And while each rakshasa immortal has its own unique appearance and personality, they have little interest in diversification among their faithful. All rakshasa immortals are lawful evil and range in power from CR 21 to CR 25. The boons they grant are less complex than those granted by other fiendish demigods, manifesting as spell-like abilities usable twice per day each.</p>
<ol>
<li><Link to="/spell/scorching_ray">scorching ray</Link></li>
<li><Link to="/spell/fire_shield">fire shield</Link></li>
<li><Link to="/spell/sirocco">sirocco</Link></li>
</ol>
</blockquote>
<h2 id="faith-aksha-description" data-hash-target>Description</h2>
<p>Tales tell that the tiger-headed rakshasa immortal Aksha of the Second Breath was originally a reincarnation of a sorceress who traded her soul to <Link to="/faith/mephistopheles">Mephistopheles</Link> for the ability to breathe hellfire upon her enemies at will. Aksha has two mouths - one through which she can speak in sibilant, silken tones, and another through which she can breathe terrible cones of caustic fire.</p>
</>};
const _akuma = {hasJL:true,title: "Akuma", jsx: <><div className="jumpList" id="faith-akuma-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-akuma-fiendish-obedience">Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-akuma-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Akuma</div><div className="sub">Horned King</div></div>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 126</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Akuma">Akuma</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-akuma-details">Details</h3>
<p><strong>Alignment</strong> LE<br/><strong>Pantheon</strong> Oni Daimyo<br/><strong>Areas of Concern</strong> Battle, honor, martial arts<br/><strong>Domains</strong> <Link to="/domain/evil">Evil</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/war">War</Link><br/><strong>Subdomains</strong> <Link to="/domain/blood">Blood</Link>, <Link to="/domain/fear">Fear</Link>, <Link to="/domain/honor">Honor</Link>, <Link to="/domain/tactics">Tactics</Link><br/><strong>Favored Weapon</strong> <Link to="/rule/unarmed_strike">Unarmed strike</Link></p>
<h2 id="faith-akuma-fiendish-obedience" data-hash-target><Link to="/feat/fiendish_obedience">Fiendish Obedience</Link></h2>
<blockquote>
<p>Practice martial art stances and routines. Gain a +4 profane bonus to CMD.</p>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 127</Link><br/>The most powerful <Link to="/family/oni">oni</Link>, the oni daimyo, hold their domains in isolated regions of the Material Plane. While they have transcended their lesser incarnations to become something close to demigods in stature, they do not flaunt their power and prefer to dwell in remote corners of the massive land of Tian Xia.</p>
<p>Oni daimyo are always evil in alignment but can be chaotic, lawful, or neutral. They range in power from CR 21 to CR 25. The boons they grant are less complex than those granted by fiendish demigods, manifesting as spell-like abilities usable twice per day each.</p>
<ol>
<li><Link to="/spell/bears_endurance">bear's endurance</Link></li>
<li><Link to="/spell/divine_power">divine power</Link></li>
<li><Link to="/spell/transformation">transformation</Link></li>
</ol>
</blockquote>
<h2 id="faith-akuma-description" data-hash-target>Description</h2>
<p>The so-called Horned King dwells within the deep forests of northwestern Lingshen in a hidden pagoda. He appears as a wiry, three-eyed <Link to="/monster/ogre_mage">ogre mage</Link> with seven horns.</p>
</>};
const _alazhra = {hasJL:true,title: "Alazhra", jsx: <><div className="jumpList" id="faith-alazhra-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-alazhra-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Alazhra</div><div className="sub">The Dream Eater</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 316</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Alazhra">Alazhra</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-alazhra-details">Details</h3>
<p><strong>Alignment</strong> NE<br/><strong>Pantheon</strong> Other Deities<br/><strong>Areas of Concern</strong> Dreams, night hags, planar travel<br/><strong>Domains</strong> <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/repose">Repose</Link>, <Link to="/domain/travel">Travel</Link><br/><strong>Subdomains</strong> <Link to="/domain/daemon">Daemon</Link>, <Link to="/domain/loss">Loss</Link>, <Link to="/domain/night">Night</Link>, <Link to="/domain/souls">Souls</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/dagger">Dagger</Link><br/><strong>Symbol</strong> Jar containing a ghost<br/><strong>Sacred Animal(s)</strong> Black stallion<br/><strong>Sacred Color(s)</strong> Black, blue</p>
<h2 id="faith-alazhra-description" data-hash-target>Description</h2>
<p>Not much is known of Alazhra save that she is the patron deity of <Link to="/monster/night_hag">night hags</Link>. She appears to her followers in terrifying nightmares, and those who displease her run the risk of dying of fright in their sleep. Because of a foul, ancient bargain brokered between Alazhra and the Four Horsemen, night hags are allowed to trade stolen souls to <Link to="/family/daemon">daemons</Link> throughout Abaddon.</p>
</>};
const _aldinach = {hasJL:true,title: "Aldinach", jsx: <><div className="jumpList" id="faith-aldinach-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-aldinach-demonicfiendish-obedience">Demonic/Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-aldinach-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-aldinach-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Aldinach</div><div className="sub">She of the Six Venoms</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 318</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Aldinach">Aldinach</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-aldinach-details">Details</h3>
<p><strong>Alignment</strong> CE<br/><strong>Pantheon</strong> Demon Lords<br/><strong>Areas of Concern</strong> Sand, scorpions, thirst<br/><strong>Domains</strong> <Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/sun">Sun</Link><br/><strong>Subdomains</strong> <Link to="/domain/chaos">Demon (Chaos)</Link>, <Link to="/domain/evil">Demon (Evil)</Link>, <Link to="/domain/feather">Feather</Link>, <Link to="/domain/fur">Fur</Link>, <Link to="/domain/insect">Insect</Link><sup><InnerLink showBacklink="backlink-faith-aldinach-ref-A-1" id="faith-aldinach-ref-A-1" data-hash-target to="faith-aldinach-A">1</InnerLink></sup>, <Link to="/domain/light">Light</Link>, <Link to="/domain/thirst">Thirst</Link><sup><InnerLink showBacklink="backlink-faith-aldinach-ref-A-2" id="faith-aldinach-ref-A-2" data-hash-target to="faith-aldinach-A">1</InnerLink></sup><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/kukri">Kukri</Link><br/><strong>Symbol</strong> Sandy gold scorpion<br/><strong>Sacred Animal(s)</strong> Scorpion<br/><strong>Sacred Color(s)</strong> Gold, orange</p>
<h2 id="faith-aldinach-demonicfiendish-obedience" data-hash-target>Demonic/Fiendish Obedience</h2>
<blockquote>
<p><em><Link to="/feat/demonic_obedience">Demonic Obedience</Link> and <Link to="/feat/fiendish_obedience">Fiendish Obedience</Link> have the same obedience:</em><br/>Pray to Aldinach while lying prone on sand for an hour, during which time you must eat at least one live scorpion. Gain a +4 profane bonus on saves against poison from vermin and effects that cause fatigue or exhaustion.</p>
<h3 id="faith-aldinach-boons-evangelist">Boons: Evangelist</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 14</Link></p>
<ol>
<li><strong>Dominion Over the Sands (Sp)</strong> <Link to="/spell/entropic_shield">entropic shield</Link> 3/day, <Link to="/spell/gust_of_wind">gust of wind</Link> 2/day, or <Link to="/spell/ray_of_exhaustion">ray of exhaustion</Link> 1/day</li>
<li><strong>Living Sandstorm (Su)</strong> Three times per day, you can dissipate yourself and all of your gear into a swirling mass of wind-tossed sand for 5 minutes. While in this form, you gain DR 10/- and immunity to acid, critical hits, disease, fire, infestations, poison, and <Link to="/misc/precision_damage">precision damage</Link> (such as sneak attacks). You can speak, but you can't make physical attacks or manipulate objects, and you can't use somatic or material (including focus) spell components. You can fly at a speed of 10 feet and automatically succeed at Fly checks, and you can pass through small holes or narrow openings. You are treated as a Fine creature for the purpose of wind effects. While in sandstorm form, you can enter another creature's space once per round as part of a move action; this provokes an attack of opportunity as normal. When you enter a creature's space this way, that creature takes 3d6 points of slashing damage from abrading sands and is <Link to="/misc/blinded">blinded</Link> for 1d6 rounds; the target can halve the damage and negate the blindness with a successful Reflex save (DC = 10 + half your Hit Dice + your Constitution modifier). A creature can be affected in this way only once per round, even if you move into its space multiple times.</li>
<li><strong>Flensing Storm (Sp)</strong> Once per day, you can call out to Aldinach to conjure a deadly sandstorm from the Whispering Sands, which flenses those caught within down to nothing but bloody bones. This acts as an <Link to="/spell/incendiary_cloud">incendiary cloud</Link> spell, except that instead of fire damage it deals 6d6 points of slashing damage and 1d4 points of <Link to="/rule/constitution_damage">Constitution damage</Link>; this Constitution damage can be negated with a successful Reflex save (DC = 10 + half your Hit Dice + your Constitution modifier). As a move action, you can direct a flensing storm to move up to 60 feet in any direction; this need not be a straight line. You are immune to the effects of your flensing storms and can see through them without penalty.</li>
</ol>
<h3 id="faith-aldinach-boons-exalted-or-demonic-obedience">Boons: Exalted or Demonic Obedience</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 14</Link></p>
<ol>
<li><strong>Desert's Wrath (Sp)</strong> <Link to="/spell/endure_elements">endure elements</Link> 3/day, <Link to="/spell/glitterdust">glitterdust</Link> 2/day, or <Link to="/spell/searing_light">searing light</Link> 1/day</li>
<li><strong>Raise Scorpion (Su)</strong> Once per day, you can cause a dead body within 60 feet to transform into a <Link to="/template/fiendish">fiendish</Link> <Link to="/monster/giant_scorpion">giant scorpion</Link> under your mental control. This transformation lasts for 1 round per level, after which the scorpion returns to its original corpse form. This is a polymorph effect.</li>
<li><strong>Dehydrating Strike (Su)</strong> Once per day as a swift action, when you deal damage to a creature, that creature must attempt a Fortitude save (DC = 10 + half your Hit Dice + your Constitution modifier) to avoid becoming instantly and painfully dehydrated. If the victim fails this save, it takes 1d10 points of Strength damage, is <Link to="/misc/stunned">stunned</Link> for 1 round, and is then <Link to="/misc/staggered">staggered</Link> for 1d4 rounds. On a successful save, the victim is instead staggered for 1 round.</li>
</ol>
<h3 id="faith-aldinach-boons-sentinel">Boons: Sentinel</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 14</Link></p>
<ol>
<li><strong>Chitin and Sting (Sp)</strong> <Link to="/spell/nauseating_dart">nauseating dart</Link> 3/day, <Link to="/spell/barkskin">barkskin</Link> 2/day, or <Link to="/spell/cup_of_dust">cup of dust</Link> 1/day</li>
<li><strong>Hidden Strike (Ex)</strong> She of the Six Venoms grants you a scorpion's talent for striking rapidly from hiding. You gain a hidden strike, with which you deal an extra 2d8 points of <Link to="/misc/precision_damage">precision damage</Link> on melee attacks or ranged attacks from within 30 feet against foes who are unaware of your presence or who consider you an ally. You can also deal hidden strike damage to a target that you are flanking or that is denied its Dexterity bonus to AC, but in these cases, the damage is reduced to 2d4. You can deal hidden strike damage against targets with <Link to="/rule/concealment">concealment</Link> (but not total concealment). This stacks with other sources of hidden strike damage or sneak attack damage you already have. In addition, like a <Link to="/monster/deadfall_scorpion">deadfall scorpion</Link>, you are adept at taking advantage of your foes' surprise. During a surprise round, you can take a full round's worth of actions, rather than a single standard action.</li>
<li><strong>Sting of Aldinach (Su)</strong> Once per day as a swift action, you can grow a golden-hued scorpion's tail, complete with stinger. This sting is a primary natural attack that deals damage as appropriate for a creature of your size (1d6 points of damage for a Medium creature). The sting is poisonous (see below). Like that of the immense <Link to="/monster/black_scorpion">black scorpion</Link>, your stinger strikes with blinding speed; you can make an attack with your stinger as a swift action (in addition to any other attacks or actions taken during that round). Once activated, your stinger remains for a number of minutes equal to your Hit Dice.</li>
</ol>
<div className="sideNoteWrap"><ScrollContainer id="faith-aldinach--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison; injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 your character level + your Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d3 <Link to="/rule/str_damage">Str damage</Link> and 1d3 Con damage</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div></blockquote>
<h2 id="faith-aldinach-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-aldinach-archetypes">Archetypes</h3>
<ul>
<li><Link to="/arc-antipaladin/iron_tyrant">Iron Tyrant (Antipaladin)</Link></li>
</ul>
<h3 id="faith-aldinach-feats">Feats</h3>
<ul>
<li><Link to="/feat/channel_discord">Channel Discord</Link></li>
</ul>
<h3 id="faith-aldinach-magic-items---wondrous-items">Magic Items - Wondrous Items</h3>
<ul>
<li><Link to="/magic-wondrous/dagons_eye">Dagon's Eye</Link></li>
</ul>
<h3 id="faith-aldinach-traits">Traits</h3>
<ul>
<li><Link to="/trait/demonic_persuasion">Demonic Persuasion</Link></li>
</ul>
</blockquote>
<h2 id="faith-aldinach-description" data-hash-target>Description</h2>
<blockquote>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 15</Link>, <Link to="/source/book_of_the_damned___volume_2_lords_of_chaos">Book of the Damned - Volume 2: Lords of Chaos pg. 10</Link><br/>Aldinach appears as a Colossal golden scorpion. Her claws are made of living crimson crystal and have razor-sharp edges, and her face is hideously human, if unwholesomely colored. On her back swarm countless smaller scorpions, members of her endless brood that she can send out to do her bidding with but a thought. Her sting is particularly dangerous, for it injects six different horrific supernatural toxins with each attack and has been said to be able to envenom even those who normally count themselves as being immune to the effects of poison.</p>
</blockquote>
<p>Aldinach's cults are strongest in deserts, particularly in Osirion's wastelands and the remote reaches of Rahadoum, where her cultists work to seduce and corrupt that realm's godless citizens. Certain tribes of particularly violent <Link to="/monster/girtablilu">girtablilus</Link> venerate her in hive-cities in eastern Osirion, where their strange traditions mix worship of Aldinach and <Link to="/faith/rovagug">Rovagug</Link> into an unusual pantheon of arachnoid horror. In these cults, the leaders of her faithful are often <Link to="/template/half_fiend">half-fiend</Link> girtablilu clerics. Those who fall prey to one of these desert-dwelling cults can look forward to an agonizing and lingering death, for a favored method of living sacrifice involves a painful combination of death by long exposure to the elements and periodic torments where the lingering demise is lengthened by tantalizing sips of life-giving water. By extending a victim's periods of thirst to agonizing length, the suffering soul is made to taste all the sweeter in death. Her worship is relatively unknown outside of Garund's desert regions; when she is worshiped elsewhere, it is typically by a lone cultist or fanatic.</p>
<p>Just as the demon lord herself carries countless offspring atop her back, Aldinach is in turn one of <Link to="/faith/lamashtu">Lamashtu's</Link> countless daughters, although since Lamashtu's ascension to divinity, the two have not associated overmuch. The same cannot be said of her and her sister <Link to="/faith/areshkagal">Areshkagal</Link>, with whom Aldinach is locked in an eternal war. Ever since Aldinach stole the Abyssal realm known as the Sea of Whispering Sands from her sister, forcing Areshkagal into exile in the desolate Blood Clefts, Aldinach has been forced to defend her desert realm from her sister's constant, increasingly desperate attempts to reclaim her lost territory.</p>
<section data-footnotes>
<h3 id="faith-aldinach-label">Footnotes</h3>
<ol>
<li id="faith-aldinach-A">
<p>Requires the <Link to="/trait/acolyte_of_apocrypha">Acolyte of Apocrypha</Link> trait. <InnerLink id="backlink-faith-aldinach-ref-A-1" data-hash-target to="faith-aldinach-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink> <InnerLink id="backlink-faith-aldinach-ref-A-2" data-hash-target to="faith-aldinach-ref-A-2" aria-label="Back to reference A-2">↩<sup>2</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _alichino = {hasJL:true,title: "Alichino", jsx: <><div className="jumpList" id="faith-alichino-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-alichino-fiendish-obedience">Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-alichino-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-alichino-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Alichino</div><div className="sub">Jester Prince of the Cage</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 326</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Alichino">Alichino</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-alichino-details">Details</h3>
<p><strong>Alignment</strong> LE<br/><strong>Pantheon</strong> Malebranche<br/><strong>Areas of Concern</strong> Deception, madness, royalty<br/><strong>Domains</strong> <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/trickery">Trickery</Link><br/><strong>Subdomains</strong> <Link to="/domain/deception">Deception</Link>, <Link to="/domain/evil">Devil (Evil)</Link>, <Link to="/domain/law">Devil (Law)</Link>, <Link to="/domain/insanity">Insanity</Link>, <Link to="/domain/thievery">Thievery</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/dagger">Dagger</Link><br/><strong>Symbol</strong> Skull with jester cap<br/><strong>Sacred Animal(s)</strong> Magpie<br/><strong>Sacred Color(s)</strong> Black, white</p>
<h2 id="faith-alichino-fiendish-obedience" data-hash-target><Link to="/feat/fiendish_obedience">Fiendish Obedience</Link></h2>
<blockquote>
<p>Tell a joke with a sadistic punch line involving abject violence or cruelty, and laugh maniacally at it until you're out of breath. Gain a +4 bonus on saving throws against mind-affecting effects.</p>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 123</Link><br/>Malebranche are horned devils transformed so as to conquer a mortal world in Hell's name. Many malebranche exist in Hell's ranks, and they occupy a tier of power just below infernal dukes. All malebranche are lawful evil and range in power from CR 21 to CR 25. The boons they grant are less complex than those granted by archdevils, manifesting as spell-like abilities usable twice per day each.</p>
<ol>
<li><Link to="/spell/alter_self">alter self</Link></li>
<li><Link to="/spell/confusion">confusion</Link></li>
<li><Link to="/spell/mass_suggestion">mass suggestion</Link></li>
</ol>
</blockquote>
<h2 id="faith-alichino-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-alichino-feats">Feats</h3>
<ul>
<li><Link to="/feat/hellish_shackles">Hellish Shackles</Link></li>
</ul>
</blockquote>
<h2 id="faith-alichino-description" data-hash-target>Description</h2>
<p>The infamous Jester Prince of the Cage tempts mortals using masterful trickery and disguises. It's said that Alichino has a dozen different voices and a hundred different faces.</p>
</>};
const _alocer = {hasJL:true,title: "Alocer", jsx: <><div className="jumpList" id="faith-alocer-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-alocer-fiendish-obedience">Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-alocer-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-alocer-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Alocer</div><div className="sub">The Pack Lord</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 326</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Alocer">Alocer</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-alocer-details">Details</h3>
<p><strong>Alignment</strong> LE<br/><strong>Pantheon</strong> Infernal Dukes<br/><strong>Areas of Concern</strong> Beasts, hunters, tradition<br/><strong>Domains</strong> <Link to="/domain/animal">Animal</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/strength">Strength</Link><br/><strong>Subdomains</strong> <Link to="/domain/evil">Devil (Evil)</Link>, <Link to="/domain/law">Devil (Law)</Link>, <Link to="/domain/ferocity">Ferocity</Link>, <Link to="/domain/fur">Fur</Link>, <Link to="/domain/resolve">Resolve</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/shortbow">Shortbow</Link><br/><strong>Symbol</strong> Dragon-legged horse<br/><strong>Sacred Animal(s)</strong> Lion<br/><strong>Sacred Color(s)</strong> Black, red</p>
<h2 id="faith-alocer-fiendish-obedience" data-hash-target><Link to="/feat/fiendish_obedience">Fiendish Obedience</Link></h2>
<blockquote>
<p>Lure or chase any quarry, then kill it and pray over the corpse. Gain a +4 profane bonus to AC against attack rolls made to confirm a critical hit against you.</p>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 118</Link><br/>The Lords of Hell, the Dukes of Perdition, and the Princes of Damnation are all names for the infamous nobility of the Pit: the elite caste of devilkind known as the infernal dukes.</p>
<p>All infernal dukes are lawful evil and range in power from CR 26 to CR 27. The boons they grant are less complex than those granted by archdevils, manifesting as spell-like abilities usable once per day each.</p>
<ol>
<li><Link to="/spell/snare">snare</Link></li>
<li><Link to="/spell/true_seeing">true seeing</Link></li>
<li><Link to="/spell/summon_natures_ally_ix">summon nature's ally IX</Link></li>
</ol>
</blockquote>
<h2 id="faith-alocer-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-alocer-feats">Feats</h3>
<ul>
<li><Link to="/feat/hellish_shackles">Hellish Shackles</Link></li>
</ul>
</blockquote>
<h2 id="faith-alocer-description" data-hash-target>Description</h2>
<p>Alocer spent centuries in the forges of Malebolge, where he eventually became Hell's most obedient hunter.</p>
</>};
const _alseta = {hasJL:true,title: "Alseta", jsx: <><div className="jumpList" id="faith-alseta-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-alseta-deific-obedience">Deific Obedience</InnerLink></li><li><InnerLink toTop to="faith-alseta-paladin-code">Paladin Code</InnerLink></li><li><InnerLink toTop to="faith-alseta-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-alseta-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Alseta</div><div className="sub">The Welcomer</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_faiths">Inner Sea Faiths pg. 11</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Alseta">Alseta</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-alseta-details">Details</h3>
<p><strong>Alignment</strong> LN<br/><strong>Pantheon</strong> Other Deities<br/><strong>Areas of Concern</strong> Doors, transitions, years<br/><strong>Domains</strong> <Link to="/domain/community">Community</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/protection">Protection</Link><br/><strong>Subdomains</strong> <Link to="/domain/arcane">Arcane</Link>, <Link to="/domain/defense">Defense</Link>, <Link to="/domain/home">Home</Link>, <Link to="/domain/inevitable">Inevitable</Link>, <Link to="/domain/portal">Portal</Link><sup><InnerLink showBacklink="backlink-faith-alseta-ref-A-1" id="faith-alseta-ref-A-1" data-hash-target to="faith-alseta-A">1</InnerLink></sup><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/dagger">Dagger</Link><br/><strong>Symbol</strong> Two faces in profile<br/><strong>Sacred Animal(s)</strong> Tortoise<br/><strong>Sacred Color(s)</strong> Brown, gray</p>
<h3 id="faith-alseta-on-golarion">On Golarion</h3>
<p><strong>Centers of Worship</strong> Absalom, Brevoy, Lastwall, Taldor<br/><strong>Nationality</strong> Taldan</p>
<h2 id="faith-alseta-deific-obedience" data-hash-target><Link to="/feat/deific_obedience">Deific Obedience</Link></h2>
<blockquote>
<p>Find a physical boundary between two places, such as a doorway, a bridge, or even just a line drawn in the sand. Kneel with your back to this boundary and contemplate all the ways your life has changed during the previous day - this could be as simple as a new person you met in passing. Stand, turn, and step across the boundary while chanting a prayer to Alseta. On the other side, kneel and meditate on the transitions and changes that await you in the coming day. At the end of this meditation, out of respect for the transition to the new day, vow to perform a mundane task in a distinctly different manner during the coming day than you have done previously. You then gain a +4 sacred or profane bonus on Disable Device checks to unlock doors and a +4 sacred or profane bonus on Perception checks to detect secret doors. The type of bonus depends on your alignment - if you're neither good nor evil, you must choose either sacred or profane the first time you perform your obedience, and this choice can't be changed.</p>
<h3 id="faith-alseta-boons-evangelist">Boons: Evangelist</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_faiths">Inner Sea Faiths pg. 11</Link></p>
<ol>
<li><strong>Keeper of Keys (Sp)</strong> <Link to="/spell/hold_portal">hold portal</Link> 3/day, <Link to="/spell/knock">knock</Link> 2/day, or <Link to="/spell/glyph_of_warding">glyph of warding</Link> 1/day</li>
<li><strong>Safe Passage (Ex)</strong> Alseta smiles upon your attempts to clear away obstacles that would hinder travelers' passage. You do not risk triggering a trap while attempting Disable Device checks unless you fail your check by 10 or more, rather than by 5 or more as normal. If the trap is part of a door or archway, or is otherwise triggered by passing through a door or archway, you gain a +4 sacred or profane bonus (of the same type as that provided by your obedience) on your Disable Device check.</li>
<li><strong>Summon Door (Sp)</strong> You have an uncanny knack for acting as a holy gatekeeper against those who would stand against you. Three times per day, you can use <Link to="/spell/passwall">passwall</Link> as a spell-like ability. When using this ability, you also conjure a strong wooden door (hardness 10, hp 40, break DC 30) at one end of the passageway produced by the spell. The door has a lock requiring either a plain iron key (which magically appears in your possession) or a successful DC 30 Disable Device check to open. You can also conjure the door so it comes into being already unlocked and open.</li>
</ol>
<h3 id="faith-alseta-boons-exalted">Boons: Exalted</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_faiths">Inner Sea Faiths pg. 11</Link></p>
<ol>
<li><strong>Warden (Sp)</strong> <Link to="/spell/alarm">alarm</Link> 3/day, <Link to="/spell/arcane_lock">arcane lock</Link> 2/day, or <Link to="/spell/greater_stunning_barrier">greater stunning barrier</Link> 1/day</li>
<li><strong>Turning of the Seasons (Sp)</strong> You have a deep understanding of your goddess's connection to teleportation. Once per day, you can use <Link to="/spell/teleport">teleport</Link> as a spell-like ability. When you use this ability, increase your familiarity of your intended destination by one step (a place you've viewed once becomes a place you've seen casually, a place you've seen casually becomes a place you've studied carefully, etc.). Using this ability cannot result in a mishap; if you roll a mishap on the spell's table when determining how well the teleportation works, treat it as a result of a "similar area."</li>
<li><strong>Eviction (Sp)</strong> The Welcomer trusts your judgment enough to grant you powerful magic to keep your enemies at bay. Once per day as a standard action, you can bar all creatures from passing through a specific door or entrance within 30 feet of your position. This functions as the spell <Link to="/spell/antilife_shell">antilife shell</Link>, except that it functions on all creatures regardless of their type. This effect lasts a number of rounds equal to your Hit Dice. If a creature trying to penetrate the barrier has spell resistance, you must overcome that resistance in order to keep it out. You can use your Hit Dice in place of your caster level on this spell resistance check.</li>
</ol>
<h3 id="faith-alseta-boons-sentinel">Boons: Sentinel</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_faiths">Inner Sea Faiths pg. 11</Link></p>
<ol>
<li><strong>Watchful (Sp)</strong> <Link to="/spell/line_in_the_sand">line in the sand</Link> 3/day, <Link to="/spell/mirror_image">mirror image</Link> 2/day, or <Link to="/spell/countless_eyes">countless eyes</Link> 1/day</li>
<li><strong>Past and Future (Ex)</strong> You catch glimpses of the future that allow you to avoid your enemies' strikes. You gain <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> as a rogue of a level equal to your Hit Dice. If you already possess the improved uncanny dodge ability, or if you would gain it later, you instead gain a +2 sacred or profane bonus (of the same type as that provided by your obedience) on attack and damage rolls against creatures that are currently <Link to="/rule/flanking">flanking</Link> you.</li>
<li><strong>Portal to Safety (Sp)</strong> Once per day as a standard action, you can transform an open door or archway into a temporary one-way portal, connecting it to another open door or archway of your choice that you have seen or of which you have a reliable description. This portal functions as a <Link to="/spell/greater_teleport">greater teleport</Link> spell targeting any creature that passes through the first doorway until the end of your next turn. All creatures that pass through the doorway, up to the limit imposed by the spell and your Hit Dice, arrive at the same location, and the destination must include an open door or archway from which the targets exit.</li>
</ol>
</blockquote>
<h2 id="faith-alseta-paladin-code" data-hash-target>Paladin Code</h2>
<blockquote>
<p>As the intermediary between and servitor to the other civilized gods, Alseta prefers to remain neutral in conflicts among the gods. This impartiality naturally extends to her faithful, and thus followers of Alseta rarely become paladins.</p>
<p>The elves of Kyonin are a noteworthy exception to this trend. Elves who revere Alseta as the patron goddess of the aiudara (or "elf gates") swear oaths in her name to defend these sacred elven relics from those who would visit destruction upon them, including the fiendish Treerazer and his demonic forces. In addition to the normal paladin code, the tenets of these elven paladins of Alseta include the following affirmations.</p>
<ul>
<li>Doorways are sacred boundaries and should be respected. I will not transgress across the threshold of an occupied structure uninvited unless doing so serves the glory of Alseta or is necessary to prevent a great evil from taking place.</li>
<li>The Sovyrian Stone is a blessing from the goddess and is the beating heart of the elven people. I will defend it with my life.</li>
<li>The aiudara are sacred relics and should never be used lightly. It is my responsibility to preserve the knowledge of the keys to these gates, and ensure they do not fall into the wrong hands.</li>
</ul>
</blockquote>
<h2 id="faith-alseta-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-alseta-magic-items---wondrous-items">Magic Items - Wondrous Items</h3>
<ul>
<li><Link to="/magic-wondrous/stewards_iron_key">Steward's Iron Key</Link></li>
</ul>
<h3 id="faith-alseta-traits">Traits</h3>
<ul>
<li><Link to="/trait/opener_of_doors">Opener of Doors</Link></li>
</ul>
<h3 id="faith-alseta-unique-spell-rules">Unique Spell Rules</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 175</Link></p>
<h4 id="faith-alseta-cleric-warpriest">Cleric, Warpriest</h4>
<ul>
<li><Link to="/spell/open_close">Open/Close</Link> can be prepared as a 0-level spell</li>
<li><Link to="/spell/arcane_lock">Arcane Lock</Link> can be prepared as a 2nd-level spell</li>
<li><Link to="/spell/knock">Knock</Link> can be prepared as a 2nd-level spell</li>
</ul>
<p><strong>Sources</strong> <Link to="/source/inner_sea_faiths">Inner Sea Faiths pg. 14</Link></p>
<h4 id="faith-alseta-cleric-warpriest">Cleric, Warpriest</h4>
<ul>
<li><em>Open/Close</em> can be prepared as a 0-level spell</li>
<li><em>Arcane Lock</em> can be prepared as a 2nd-level spell</li>
<li><em>Knock</em> can be prepared as a 2nd-level spell</li>
</ul>
</blockquote>
<h2 id="faith-alseta-description" data-hash-target>Description</h2>
<p>Alseta acts as a guardian of boundaries. She strengthens city gates, shields guards from invaders' arrows, and turns away unwelcome visitors. Alseta is also a guardian of metaphorical boundaries, particularly those related to time and life. Those celebrating birthdays or marriages or embarking on new ventures often invoke Alseta's name. Expectant mothers and mourners of the dead alike often pray to Alseta in the same breath as <Link to="/faith/pharasma">Pharasma</Link>, and indeed, some consider the Welcomer and the Lady of Graves' faiths intrinsically linked.</p>
<p>Alseta appears as a kindly human woman dressed in simple gray clothing, and she wears a smiling mask on the back of her head. She is even-tempered and considers her words carefully; when she speaks, she does so with an authority and poise that soaks into the very bones of listeners. Alseta is, above all, courteous and treats all beings, from the humblest peasant to the mightiest of the gods, with respect and civility. In return, she expects the same from any who deal with her, and has little patience for those who do not practice such courtesies.</p>
<section data-footnotes>
<h3 id="faith-alseta-label">Footnotes</h3>
<ol>
<li id="faith-alseta-A">
<p>Requires the <Link to="/trait/acolyte_of_apocrypha">Acolyte of Apocrypha</Link> trait. <InnerLink id="backlink-faith-alseta-ref-A-1" data-hash-target to="faith-alseta-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _amaznen = {hasJL:true,title: "Amaznen", jsx: <><div className="jumpList" id="faith-amaznen-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-amaznen-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Amaznen</div><div className="sub">The Father of Invention</div></div>
<p><strong>Sources</strong> <Link to="/source/pathfinder_123_the_flooded_cathedral">Pathfinder #123: The Flooded Cathedral pg. 68</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Amaznen">Amaznen</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-amaznen-details">Details</h3>
<p><strong>Alignment</strong> LN<br/><strong>Pantheon</strong> Azlanti Pantheon<br/><strong>Areas of Concern</strong> Invention, magic, and secret knowledge<br/><strong>Domains</strong> <Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/protection">Protection</Link><br/><strong>Subdomains</strong> <Link to="/domain/arcane">Arcane</Link>, <Link to="/domain/construct">Construct</Link>, <Link to="/domain/defense">Defense</Link>, <Link to="/domain/divine">Divine</Link>, <Link to="/domain/inevitable">Inevitable</Link>, <Link to="/domain/thought">Thought</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/light_hammer">light hammer</Link><br/><strong>Symbol</strong> Gears that resemble an eye</p>
<h2 id="faith-amaznen-description" data-hash-target>Description</h2>
<p>Amaznen was the god of invention, magic, and secret knowledge. The latter aspect wasn't emphasized in public, so most knew of Amaznen's faith through the work that his priests did in developing wondrous devices that blended magic and technology. He counted several of his peers as friends and allies, the greatest of which was his lover, <Link to="/faith/acavna">Acavna</Link>. Many were puzzled at their relationship, feeling that the two were mismatched in their outlook and approach to life, but seemingly the secret of compatibility was just one piece of the hidden knowledge Amaznen had at his command. Amaznen also greatly appreciated <Link to="/faith/aesocar">Aesocar</Link> for his inventiveness and the wonders of medicine and technology he promoted. Amaznen saw <Link to="/faith/jaidi">Jaidi</Link> as a friend, and the two worked together to determine the best methods to guide humanity to improve their lot. Amaznen disliked <Link to="/faith/lissala">Lissala</Link>, however, for Amaznen taught that some knowledge should be kept secret, while Lissala championed that all knowledge should be freely shared.</p>
<p>Knowing that his lover was utterly determined to make a stand to defend her worshipers and Golarion as a whole from annihilation during Earthfall, Amaznen grudgingly contributed to the effort after it was clear nothing he could say would convince Acavna to stand down from her sacrifice. He siphoned the powerful alghollthu glyph magic from the interstellar debris, stepping over the edge of reality in the process and taking it all into himself before vanishing from existence.</p>
</>};
const _ananshea = {hasJL:true,title: "Ananshea", jsx: <><div className="jumpList" id="faith-ananshea-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-ananshea-fiendish-obedience">Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-ananshea-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Ananshea</div><div className="sub">The Skin That Walks on Teeth</div></div>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 132</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Ananshea">Ananshea</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-ananshea-details">Details</h3>
<p><strong>Alignment</strong> CE<br/><strong>Pantheon</strong> Sahkil Tormentors<br/><strong>Areas of Concern</strong> Brutality, torture, wild animals<br/><strong>Domains</strong> <Link to="/domain/animal">Animal</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/strength">Strength</Link><br/><strong>Subdomains</strong> <Link to="/domain/fear">Fear</Link>, <Link to="/domain/ferocity">Ferocity</Link>, <Link to="/domain/rage">Rage</Link>, <Link to="/domain/sahkil">Sahkil</Link>, <Link to="/domain/torture">Torture</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/kukri">Kukri</Link></p>
<h2 id="faith-ananshea-fiendish-obedience" data-hash-target><Link to="/feat/fiendish_obedience">Fiendish Obedience</Link></h2>
<blockquote>
<p>Rend your flesh, dealing 1d4 points of damage with one of your natural weapons or a knife. Gain a +3 profane bonus to AC against attacks from animals or vermin.</p>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 133</Link><br/><Link to="/family/sahkil">Sahkil</Link> tormentors hold dominion over mortal fears and suffering. All are chaotic evil and range in power from CR 21 to CR 25. Their boons are less complex than those of other demigods, manifesting as spell-like abilities usable twice per day each.</p>
<ol>
<li><Link to="/spell/bloodbath">bloodbath</Link></li>
<li><Link to="/spell/fear">fear</Link></li>
<li><Link to="/spell/blade_barrier">blade barrier</Link></li>
</ol>
</blockquote>
<h2 id="faith-ananshea-description" data-hash-target>Description</h2>
<p>Ananshea is rash when initially provoked, but calculated when it comes to planning the demise of a foe. Ananshea rules a walled portion of Xibalba filled with obscene traps and violent creatures utterly dedicated to The Skin That Walks on Teeth.</p>
</>};
const _andak = {hasJL:true,title: "Andak", jsx: <><div className="jumpList" id="faith-andak-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-andak-fiendish-obedience">Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-andak-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Andak</div><div className="sub">The Dismembered</div></div>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 110</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Andak">Andak</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-andak-details">Details</h3>
<p><strong>Alignment</strong> LE<br/><strong>Pantheon</strong> Asura Ranas<br/><strong>Areas of Concern</strong> Axes, dismemberment, torture<br/><strong>Domains</strong> <Link to="/domain/death">Death</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link><br/><strong>Subdomains</strong> <Link to="/domain/fear">Fear</Link>, <Link to="/domain/murder">Murder</Link>, <Link to="/domain/rage">Rage</Link>, <Link to="/domain/torture">Torture</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/battleaxe">Battleaxe</Link></p>
<h2 id="faith-andak-fiendish-obedience" data-hash-target><Link to="/feat/fiendish_obedience">Fiendish Obedience</Link></h2>
<blockquote>
<p>Ritualistically scrape painful scratches and welts along your limbs' joints. Gain DR 2/slashing.</p>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 111</Link><br/>Over time, the mightiest of the asuras complete enough cycles of reincarnation and build upon the atrocities committed over multiple lives to incarnate into the most powerful of their kind: the asura ranas.</p>
<p>Asura ranas are lawful evil demigods that range in power from CR 26 to CR 30. Each asura rana detailed below is given an obedience, but the boons they grant are less complex than those granted by archdevils, manifesting as spell-like abilities usable once per day each.</p>
<ol>
<li><Link to="/spell/keen_edge">keen edge</Link></li>
<li><Link to="/feat/quickened">quickened</Link> <Link to="/spell/inflict_serious_wounds">inflict serious wounds</Link></li>
<li><Link to="/spell/massacre">massacre</Link></li>
</ol>
</blockquote>
<h2 id="faith-andak-description" data-hash-target>Description</h2>
<p>Andak the Dismembered is a grisly sight - a tortured soul whose limbs have been hewn into multiple pieces and reattached awkwardly and randomly. His priests practice self-mutilation and seek to improve upon the physical form via surgery and magical but hideous regeneration.</p>
</>};
const _andirifkhu = {hasJL:true,title: "Andirifkhu", jsx: <><div className="jumpList" id="faith-andirifkhu-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-andirifkhu-demonicfiendish-obedience">Demonic/Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-andirifkhu-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-andirifkhu-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Andirifkhu</div><div className="sub">The Razor Princess</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 320</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Andirifkhu">Andirifkhu</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-andirifkhu-details">Details</h3>
<p><strong>Alignment</strong> CE<br/><strong>Pantheon</strong> Demon Lords<br/><strong>Other Pantheons</strong> Kobold Deities<br/><strong>Areas of Concern</strong> Knives, illusions, traps<br/><strong>Domains</strong> <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/trickery">Trickery</Link><br/><strong>Subdomains</strong> <Link to="/domain/curse">Curse</Link>, <Link to="/domain/deception">Deception</Link>, <Link to="/domain/chaos">Demon (Chaos)</Link>, <Link to="/domain/evil">Demon (Evil)</Link>, <Link to="/domain/thievery">Thievery</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/kukri">Kukri</Link><br/><strong>Symbol</strong> Skull pierced by six blades<br/><strong>Sacred Animal(s)</strong> Spider<br/><strong>Sacred Color(s)</strong> Green, red</p>
<h2 id="faith-andirifkhu-demonicfiendish-obedience" data-hash-target>Demonic/Fiendish Obedience</h2>
<blockquote>
<p><em><Link to="/feat/demonic_obedience">Demonic Obedience</Link> and <Link to="/feat/fiendish_obedience">Fiendish Obedience</Link> have the same obedience:</em><br/>Torture a living creature that is smaller than your size category on a mechanical device that utilizes blades or spikes, or torture a bound creature of any size with a knife. The creature must remain alive for the duration, and must die within 1 minute of the obedience's end. Gain a +4 profane bonus on saves against illusions and a +4 profane bonus to AC against traps that inflict slashing damage.</p>
<h3 id="faith-andirifkhu-boons-evangelist">Boons: Evangelist</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 16</Link></p>
<ol>
<li><strong>Alter Perception (Sp)</strong> <Link to="/spell/silent_image">silent image</Link> 3/day, <Link to="/spell/mirror_image">mirror image</Link> 2/day, or <Link to="/spell/invisibility_sphere">invisibility sphere</Link> 1/day</li>
<li><strong>Subtle Razor (Ex)</strong> You gain <Link to="/ability/sneak_attack">sneak attack</Link> +2d6; this stacks with any sneak attack damage you can already deal from class levels and other sources. In addition, whenever you deal sneak attack damage, you can have all damage dealt by the attack become nonlethal damage. If you deal nonlethal damage this way to a creature that is unaware of your presence, the creature is unaware it has been attacked or has taken damage (instead experiencing a sense of unexplained weariness or weakness).</li>
<li><strong>Unreal Legion (Su)</strong> Once per day, you can create three illusory copies of yourself. These copies are semi-real; each uses your saving throws, has an Armor Class equal to your touch AC, and has hit points equal to one-quarter your maximum hit points. The copies move as you mentally direct them (a free action) and can be instructed to attack, although they always miss (the copies can provide <Link to="/rule/flanking">flanking</Link>, however). When you cast a spell or use an ability, you can have the copies appear to cast that spell or use that ability simultaneously; if the effect has an obvious point of origin, you can have it appear to originate from all copies simultaneously. As an immediate action, you can switch places with one of the copies. If a copy is ever more than 60 feet from you, leaves your line of sight, or is reduced to 0 hit points, it immediately ceases to exist; otherwise, the copies last 24 hours or until you use this ability again, whichever comes first.</li>
</ol>
<h3 id="faith-andirifkhu-boons-exalted-or-demonic-obedience">Boons: Exalted or Demonic Obedience</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 16</Link></p>
<ol>
<li><strong>Sadist's Trick (Sp)</strong> <Link to="/spell/magic_weapon">magic weapon</Link> 3/day, <Link to="/spell/phantom_trap">phantom trap</Link> 2/day, or <Link to="/spell/snare">snare</Link> 1/day</li>
<li><strong>Deeper Cuts (Ex)</strong> When you damage a creature with a slashing weapon or an effect that deals slashing damage, you can also deal 5 points of <Link to="/rule/bleed">bleed</Link> damage.</li>
<li><strong>Andirifkhu's Kiss (Sp)</strong> Once per day, you can cast <Link to="/feat/empowered">empowered</Link> <Link to="/spell/blade_barrier">blade barrier</Link> as a spell-like ability. You are immune to the effects of this blade barrier.</li>
</ol>
<h3 id="faith-andirifkhu-boons-sentinel">Boons: Sentinel</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 16</Link></p>
<ol>
<li><strong>Princess's Blade (Sp)</strong> <Link to="/spell/unerring_weapon">unerring weapon</Link> 3/day, <Link to="/spell/spiritual_weapon">spiritual weapon</Link> 2/day, or <Link to="/spell/twilight_knife">twilight knife</Link> 1/day</li>
<li><strong>One of Ten Thousand Deaths (Sp)</strong> You can summon the murderous creations of Andirifkhu's realm to the mortal world. Three times per day as a full-round action, you can conjure a <Link to="/rule/sample_traps">trap</Link> into being in a square or squares within 30 feet. The trap must have a CR equal to or less than half your Hit Dice, and the environment must be able to support it (for example, a <Link to="/trap/falling_block_trap">falling block trap</Link> must have a ceiling to fall from). The appropriate triggers for the trap, such as pressure plates or divination spells, are added to the environment in the fashion of your choosing. A trap conjured this way vanishes after 24 hours, when it is disabled, or after it is triggered and its effects have been resolved.</li>
<li><strong>Killing Machine (Su)</strong> Once per day as a full-round action, you can transform yourself into a trap. The trap must have a CR equal to or less than your total Hit Dice (maximum CR 20), and the environment must be able to support your new form. When your trap form is triggered, or when a creature attempts to disable your trap form, you can instantaneously return to your normal form (appearing in the square or squares targeted by your trap form). This occurs after the trap has finished triggering and its effects are resolved (if appropriate), and it causes a surprise round in which only you and those who were aware of your true nature may act. This transformation otherwise lasts for 24 hours or until you dismiss it as a full-round action. This is a polymorph effect.</li>
</ol>
</blockquote>
<h2 id="faith-andirifkhu-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-andirifkhu-feats">Feats</h3>
<ul>
<li><Link to="/feat/channel_discord">Channel Discord</Link></li>
</ul>
<h3 id="faith-andirifkhu-magic-items---wondrous-items">Magic Items - Wondrous Items</h3>
<ul>
<li><Link to="/magic-wondrous/dagons_eye">Dagon's Eye</Link></li>
</ul>
<h3 id="faith-andirifkhu-traits">Traits</h3>
<ul>
<li><Link to="/trait/demonic_persuasion">Demonic Persuasion</Link></li>
</ul>
</blockquote>
<h2 id="faith-andirifkhu-description" data-hash-target>Description</h2>
<blockquote>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 16</Link>, <Link to="/source/book_of_the_damned___volume_2_lords_of_chaos">Book of the Damned - Volume 2: Lords of Chaos pg. 10</Link><br/>Andirifkhu is the favored patron of debased illusionists, cruel torturers, and sadistic inventors. Her cultists are fond of building trap-ridden dungeons and sending sacrifices inside to die on spikes, swinging blades, and spear tips within. In most cases, solving one of these trap-filled gauntlets only results in the victim being hobbled or otherwise crippled before being returned to the start of the maze and forced through again, so that death is often the only way to escape the ordeal. Typically, these dungeons include well-hidden networks of secret passages that allow the cultist or visiting allies to navigate the death trap-filled dungeon in relative safety so they may observe the effects of the traps and watch the progress of those placed within the murderous labyrinth.</p>
</blockquote>
<p>Andirifkhu herself appears as a towering, beautiful woman with green, scaled skin and long, crimson hair. She has ophidian eyes and six arms that all wield different blades, although her favorite weapons are kukris. She strikes in battle with astonishing speed, and is capable of making multiple attacks with all her weapons in a whirlwind of slashing fury that leaves all around her bleeding and staggered from the onslaught. Even her hair can flense flesh when she makes such whirling assaults. It is said that she can pluck strands of her hair to swiftly craft complex traps, often utilizing bladed weapons in the surrounding area (including those wielded by friend and foe alike). Some believe that in her temples, she can whisper and influence through the traps that fill those places of worship, and that those who fall prey to such fates have their souls cursed to wander her realm for an eternity.</p>
</>};
const _andoletta = {hasJL:true,title: "Andoletta", jsx: <><div className="jumpList" id="faith-andoletta-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-andoletta-celestial-obedience">Celestial Obedience</InnerLink></li><li><InnerLink toTop to="faith-andoletta-paladin-code">Paladin Code</InnerLink></li><li><InnerLink toTop to="faith-andoletta-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-andoletta-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Andoletta</div><div className="sub">Grandmother Crow</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 322</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Andoletta">Andoletta</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-andoletta-details">Details</h3>
<p><strong>Alignment</strong> LG<br/><strong>Pantheon</strong> Empyreal Lords<br/><strong>Areas of Concern</strong> Consolation, respect, security<br/><strong>Domains</strong> <Link to="/domain/good">Good</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link><br/><strong>Subdomains</strong> <Link to="/domain/good">Archon (Good)</Link>, <Link to="/domain/law">Archon (Law)</Link>, <Link to="/domain/defense">Defense</Link>, <Link to="/domain/knowledge">Education (Knowledge)</Link>, <Link to="/domain/memory">Memory</Link>, <Link to="/domain/purity">Purity</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/quarterstaff">Quarterstaff</Link><br/><strong>Symbol</strong> Hand with willow staff<br/><strong>Sacred Animal(s)</strong> Crow<br/><strong>Sacred Color(s)</strong> Black, green</p>
<h2 id="faith-andoletta-celestial-obedience" data-hash-target><Link to="/feat/celestial_obedience">Celestial Obedience</Link></h2>
<blockquote>
<p>Recite the Obeisance of Glorious Preservation from memory while weaving a small basket from willow branches and filling the basket with food, money, or other sources of comfort to give to the poor at your next opportunity. Gain a +4 sacred bonus on saving throws against spells that deal non-energy hit point damage.</p>
<h3 id="faith-andoletta-mystery-cultist">Mystery Cultist</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_the_righteous">Chronicle of the Righteous pg. 6</Link></p>
<ol>
<li><strong>Comfort of Faith (Sp)</strong> <Link to="/spell/sanctuary">sanctuary</Link> 3/day, <Link to="/spell/align_weapon">align weapon (law or good only)</Link> 2/day, or <Link to="/spell/magic_circle_against_chaos">magic circle against chaos or evil</Link> 1/day</li>
<li><strong>Demanding Presence (Sp)</strong> You can cast silenced dictum once per day.</li>
<li><strong>Divine Gaze (Su)</strong> Your eyes become the golden eyes of a crow. You gain darkvision out to a range of 60 feet (or, if you already have darkvision, extend your current range by 60 feet). Once per day as a standard action, you can shower yourself and any allies within 30 feet with divine light from your eyes, granting each affected target a +4 sacred bonus to AC, a +4 resistance bonus on all saving throws, and SR 25 for 1 round per HD you possess.</li>
</ol>
</blockquote>
<h2 id="faith-andoletta-paladin-code" data-hash-target>Paladin Code</h2>
<blockquote>
<p>Andoletta's paladins serve courts and other authorities. They seek to protect innocence and dispel foolishness. Their tenets include the following affirmations.</p>
<ul>
<li>Children must be nurtured lest their innocence become callousness or ignorance. I will never be cold or negligent to a child.</li>
<li>Virtue relies upon wisdom, and wisdom relies upon true awareness. I will never leave a falsehood unchallenged.</li>
<li>I will be firm with the ignorant, but not cruel. Ignorance can be corrected.</li>
<li>I will respect my elders' knowledge and wisdom, but won't abide the spreading of complacency or ignorance.</li>
</ul>
</blockquote>
<h2 id="faith-andoletta-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-andoletta-feats">Feats</h3>
<ul>
<li><Link to="/feat/heroic_interposition">Heroic Interposition</Link></li>
</ul>
<h3 id="faith-andoletta-traits">Traits</h3>
<ul>
<li><Link to="/trait/andolettas_consolation">Andoletta's Consolation</Link></li>
<li><Link to="/trait/empyreal_focus">Empyreal Focus</Link></li>
<li><Link to="/trait/enemy_of_delusion">Enemy of Delusion</Link></li>
</ul>
</blockquote>
<h2 id="faith-andoletta-description" data-hash-target>Description</h2>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_the_righteous">Chronicle of the Righteous pg. 6</Link><br/>In her mortal form, Andoletta stands 5 feet tall and has a stern, wrinkled face and kindly - but sharp - hazel eyes. Her gray hair is tucked into a sleek bun at the back of her head. She leans on a willow walking stick and wears a cape of glossy black crow feathers.</p>
<p>Innocence and guilt are always clear in Grandmother Crow's eyes. She offers not a drop of mercy to the irredeemably wicked, but at the slightest hint of doubt in an evildoer's soul, Andoletta is there to light the hard but worthy path back to virtue. Her image can be found in courts, where her stern gaze pierces the souls of even the most hardened criminals, and in morgues, where her kindly countenance offers solace to the bereaved. Of all those she watches over, Grandmother Crow particularly favors children, seeing in them an unadulterated potential for goodness.</p>
<p>Andoletta's cottage stands in the verdant Field of Opsimathy, near the summit of Heaven; feathers protrude from the plaster covering its walls, and it smells of fresh-baked bread. Visitors who show proper respect may see a garden of happy families and lost loved ones secreted behind the tidy cottage.</p>
</>};
const _angazhan = {hasJL:true,title: "Angazhan", jsx: <><div className="jumpList" id="faith-angazhan-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-angazhan-demonicfiendish-obedience">Demonic/Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-angazhan-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-angazhan-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Angazhan</div><div className="sub">The Ravenous King</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 320</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Angazhan">Angazhan</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-angazhan-details">Details</h3>
<p><strong>Alignment</strong> CE<br/><strong>Pantheon</strong> Demon Lords<br/><strong>Areas of Concern</strong> Apes, jungles, tyrants<br/><strong>Domains</strong> <Link to="/domain/animal">Animal</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/plant">Plant</Link><br/><strong>Subdomains</strong> <Link to="/domain/decay">Decay</Link>, <Link to="/domain/chaos">Demon (Chaos)</Link>, <Link to="/domain/evil">Demon (Evil)</Link>, <Link to="/domain/fur">Fur</Link>, <Link to="/domain/growth">Growth</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/spear">Spear</Link><br/><strong>Symbol</strong> Demonic ape face<br/><strong>Sacred Animal(s)</strong> Ape<br/><strong>Sacred Color(s)</strong> Black, red</p>
<h2 id="faith-angazhan-demonicfiendish-obedience" data-hash-target>Demonic/Fiendish Obedience</h2>
<blockquote>
<p>Ingest hallucinogenic jungle plants and then beat a complex rhythm on a large drum made of human skin and bones while chanting prayers to Angazhan. Gain a +4 profane bonus on saves against disease and poison caused by exposure to the jungle or creatures native to jungles.</p>
</blockquote>
<h3 id="faith-angazhan-boons-demonic-obedience">Boons: <Link to="/feat/demonic_obedience">Demonic Obedience</Link></h3>
<blockquote>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned___volume_2_lords_of_chaos">Book of the Damned - Volume 2: Lords of Chaos pg. 11</Link></p>
<ol>
<li><strong>Jungle's Wrath (Sp)</strong> <Link to="/spell/entangle">entangle</Link> 3/day, <Link to="/spell/bulls_strength">bull's strength</Link> 2/day, or <Link to="/spell/summon_monster_iii">summon monster III</Link> (fiendish ape only) 1/day</li>
<li><strong>Summon Child of Angazhan (Sp)</strong> Once per day as a swift action, you can summon an <Link to="/template/advanced">advanced</Link> <Link to="/template/fiendish">fiendish</Link> <Link to="/monster/girallon">girallon</Link>, 1d3 advanced fiendish <Link to="/monster/dire_ape">dire apes</Link>, or 1d4+1 advanced fiendish <Link to="/monster/ape">apes</Link> as if by casting <Link to="/spell/summon_monster_vi">summon monster VI</Link>.</li>
<li><strong>Jungle's Might (Su)</strong> You gain a +2 profane bonus to Strength and a +2 bonus on all Fortitude saving throws.</li>
</ol>
</blockquote>
<h3 id="faith-angazhan-boons-fiendish-obedience">Boons: <Link to="/feat/fiendish_obedience">Fiendish Obedience</Link></h3>
<blockquote>
<h4 id="faith-angazhan-boons-evangelist">Boons: Evangelist</h4>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 18</Link></p>
<ol>
<li><strong>The Jungle Consumes (Sp)</strong> <Link to="/spell/pass_without_trace">pass without trace</Link> 3/day, <Link to="/spell/tree_shape">tree shape</Link> 2/day, or <Link to="/spell/spike_growth">spike growth</Link> 1/day</li>
<li><strong>Canopy Crawler (Ex)</strong> Your feet become prehensile, making you adept at brachiating, and you can move unseen through the trees with ease. You gain a climb speed equal to your base speed + 10 feet, and you can attempt a Climb check in place of an Acrobatics check to leap or swing between branches or trees. As long as your feet are available (magical footwear reshapes to permit use, but mundane shoes do not), you can perform climbing-related activities without needing to use your hands, and you don't lose your Dexterity bonus to AC or your ability to use a shield while climbing. In addition, you can attempt a Climb check in place of a Stealth check while in the trees and can do so at full speed without taking penalties. You can also attempt a Climb check in place of a Stealth check while sniping from the trees, reducing the penalty for sniping by 10. You can execute somatic spell components and carry objects with your feet, though you can't wield weapons or shields with them.</li>
<li><strong>One With The Jungle (Su)</strong> You tap into the collective consciousness of the jungle's life, from mighty trees to tiny gnats, granting you perfect awareness of all that transpires in your vicinity. While in the jungle, you gain <Link to="/umr/blindsight">blindsight</Link> to a range of 60 feet, you gain a +2 insight bonus to AC and on saving throws, and you are never <Link to="/rule/flat_footed">flat-footed</Link> or surprised. You ignore <Link to="/rule/cover">cover</Link> and <Link to="/rule/concealment">concealment</Link> caused by natural features of the jungle, as the very plants and stones twist out of the path of your attacks and spells.</li>
</ol>
<h4 id="faith-angazhan-boons-exalted">Boons: Exalted</h4>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 18</Link></p>
<p>These boons are the same as those granted by Demonic Obedience.</p>
<h4 id="faith-angazhan-boons-sentinel">Boons: Sentinel</h4>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 18</Link></p>
<ol>
<li><strong>Tyrant's Roar (Sp)</strong> <Link to="/spell/command">command</Link> 3/day, <Link to="/spell/sound_burst">sound burst</Link> 2/day, or <Link to="/spell/suggestion">suggestion</Link> 1/day</li>
<li><strong>Reign of Terror (Ex)</strong> You are a master of overwhelming your foes and minions through fear and intimidation. You gain a bonus equal to your Strength modifier on <Link to="/skill/intimidate">Intimidate</Link> checks (this does not stack with the bonus provided by <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link> or similar effects). Once per minute, you can use Intimidate to demoralize a creature within 30 feet as a swift action, or all creatures within 10 feet as a move action. When using Intimidate to demoralize a creature in this way, if your result exceeds the DC by 5 or more, the creature is <Link to="/misc/frightened">frightened</Link> for 1 round and then <Link to="/misc/shaken">shaken</Link> for the normal duration; if your result exceeds the DC by 10 or more, the creature <Link to="/misc/cowering">cowers</Link> for 1 round, then is frightened for 1 round, and then is shaken for the normal duration. When you use Intimidate to demoralize an ally, instead of being shaken, that creature gains a +2 morale bonus on attack rolls for the appropriate duration.</li>
<li><strong>Unchallenged Tyrant (Su)</strong> You are attuned to the jungle mind, the primeval tangle of instinct that simmers below every sentient creature's consciousness; you can use it to forge your elite minions into a force of unequaled savagery, united by (and utterly subordinate to) your will. When you perform your obedience, designate a number of present and willing creatures equal to your Charisma modifier; these are your thralls. This designation lasts for 24 hours or until you next perform your obedience. Three times per day, you can infuse all thralls within 50 feet of you as a swift action, granting them a +4 bonus to their Strength and Constitution scores and a +2 bonus on initiative checks, and granting any teamwork feats you have as bonus feats. If a thrall dies within 50 feet of you at any time, you gain the effects of <Link to="/spell/death_ward">death ward</Link> (CL = half the thrall's Hit Dice, to a maximum of CL 20th).</li>
</ol>
</blockquote>
<h2 id="faith-angazhan-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-angazhan-archetypes">Archetypes</h3>
<ul>
<li><Link to="/arc-antipaladin/iron_tyrant">Iron Tyrant (Antipaladin)</Link></li>
</ul>
<h3 id="faith-angazhan-feats">Feats</h3>
<ul>
<li><Link to="/feat/channel_discord">Channel Discord</Link></li>
</ul>
<h3 id="faith-angazhan-magic-items---wondrous-items">Magic Items - Wondrous Items</h3>
<ul>
<li><Link to="/magic-wondrous/dagons_eye">Dagon's Eye</Link></li>
</ul>
<h3 id="faith-angazhan-traits">Traits</h3>
<ul>
<li><Link to="/trait/demonic_persuasion">Demonic Persuasion</Link></li>
</ul>
</blockquote>
<h2 id="faith-angazhan-description" data-hash-target>Description</h2>
<blockquote>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 18</Link><br/>Angazhan appears as a towering, blood-red ape with six long fingers on each hand, sharp fangs, twisted horns, and relatively small, bloodshot eyes. His worship is strongest in the jungles of the Mwangi Expanse, where his chattering brood, the simian <Link to="/monster/charau_ka">charau-ka</Link>, hold court in jungle-choked ruins and feast on the flesh of human chattel. Angazhan is also served by <Link to="/monster/nalfeshnee">nalfeshnee</Link> demons, and although most nalfeshnees are too proud and self-absorbed to admit that Angazhan is their lord, he is nonetheless served in his jungle realm of Ahvoth-Kor by hundreds, if not thousands, of their kind.</p>
</blockquote>
<p>The Ravenous King's domain of Ahvoth-Kor is an expansive Abyssal realm, a seemingly endless jungle that stretches along opposing faces of a vast Abyssal rift. Gravity in Ahvoth-Kor pulls toward the walls of this rift, so that someone standing in the jungle realm in an area where the canopy doesn't block the view above can "look up" to the opposite rift's jungle, although thick mists and clouds usually obscure the view. In places, immense trees and thick vines bridge the gulf between the twin jungles, allowing clambering denizens of one jungle to climb across to the opposing one. Both jungles are rife with dreadful simian life, <Link to="/template/fiendish">fiendish</Link> dinosaurs, and megalithic nalfeshnee-ruled cities populated by demons and other fiends. The point where the jungles meet lies tens of thousands of miles below at the bottom of the rift, and it is here that Angazhan's palace squats: an immense ziggurat of black stone straddling deeper rifts that lead into uncharted horrors of the Abyss, which often belch forth qlippoth monstrosities or other alien horrors.</p>
</>};
const _angradd = {hasJL:true,title: "Angradd", jsx: <><div className="jumpList" id="faith-angradd-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-angradd-deific-obedience">Deific Obedience</InnerLink></li><li><InnerLink toTop to="faith-angradd-paladin-code">Paladin Code</InnerLink></li><li><InnerLink toTop to="faith-angradd-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-angradd-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Angradd</div><div className="sub">The Forge-Fire</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 320</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Angradd">Angradd</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-angradd-details">Details</h3>
<p><strong>Alignment</strong> LG<br/><strong>Pantheon</strong> Dwarven Deities<br/><strong>Areas of Concern</strong> Fire, tradition, war<br/><strong>Domains</strong> <Link to="/domain/fire">Fire</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/war">War</Link><br/><strong>Subdomains</strong> <Link to="/domain/good">Archon (Good)</Link>, <Link to="/domain/law">Archon (Law)</Link>, <Link to="/domain/ash">Ash</Link>, <Link to="/domain/smoke">Smoke</Link>, <Link to="/domain/tactics">Tactics</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/greataxe">Greataxe</Link><br/><strong>Symbol</strong> Smoking forge<br/><strong>Sacred Animal(s)</strong> Boar<br/><strong>Sacred Color(s)</strong> Gray, red</p>
<h2 id="faith-angradd-deific-obedience" data-hash-target><Link to="/feat/deific_obedience">Deific Obedience</Link></h2>
<blockquote>
<p>Build a fire, preferably as part of a ritual that includes your closest allies and comrades. Use that fire's smoke to blacken the head of an axe while reciting battle litanies from Angradd's Tempering (or <Link to="/faith/torag">Torag's</Link> Hammer and Tongs, <Link to="/faith/magrim">Magrim's</Link> Measure, or Journey of the Last Breath if you also wish to show reverence for Angradd's respected elder brothers). Clean the ash from the axe with a cloth (traditionally a red cloth, often granted to you as a gift from a family member). Successful melee attacks made with that axe by a lawful good, lawful neutral, or neutral good creature deal an additional 1 point of fire damage. (This damage is not multiplied on a critical hit.)</p>
<h3 id="faith-angradd-boons-evangelist">Boons: Evangelist</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_144_midwives_to_death">Pathfinder #144: Midwives to Death pg. 66</Link></p>
<ol>
<li><strong>Smoke of Righteous Flame (Sp)</strong> <Link to="/spell/burning_hands">burning hands</Link> 3/day, <Link to="/spell/discovery_torch">discovery torch</Link> 2/day, or <Link to="/spell/ash_storm">ash storm</Link> 1/day</li>
<li><strong>Bulwark Against Evil (Su)</strong> You are a shining beacon against the forces of evil and have internalized much of Angradd's fury against those who are vile and cruel. You gain DR 5/-, which applies only against attacks from creatures with the evil subtype or attacks that can bypass DR/evil.</li>
<li><strong>General of the Just (Su)</strong> You are a mobile focus of the divine strategy of Angradd, able to turn the tide of battle by inspiring your allies to instinctively work together. Allies within 60 feet (not including yourself) gain a +2 morale bonus on initiative checks, on melee damage rolls while flanking, and to AC when adjacent to you or at least one other ally of yours.</li>
</ol>
<h3 id="faith-angradd-boons-exalted">Boons: Exalted</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_144_midwives_to_death">Pathfinder #144: Midwives to Death pg. 66</Link></p>
<ol>
<li><strong>Torch Against Evil (Sp)</strong> <Link to="/spell/weapons_against_evil">weapons against evil</Link> 3/day, <Link to="/spell/blistering_invective">blistering invective</Link> 2/day, or <Link to="/spell/flame_arrow">flame arrow</Link> 1/day</li>
<li><strong>Blazing Righteousness (Su)</strong> You can channel Angradd's divine flames to burn agents of malevolence. As a free action, you can wreathe yourself in flames, granting you resistance 20 against fire and causing any evil creature adjacent to you at the beginning of your turn to take 2d6 points of damage (half of which is fire damage). Dismissing this ability is also a free action. This ability lasts a number of rounds per day equal to 1 + 1 per 4 Hit Dice you have (maximum 6 rounds). The rounds don't need to be consecutive.</li>
<li><strong>Boon Companions (Sp)</strong> Three times per day, you can summon an ally to assist you in the fight against evil. This acts as a <Link to="/spell/summon_natures_ally">summon nature's ally</Link> or <Link to="/spell/summon_monster">summon monster</Link> spell with a spell level equal to half your Hit Dice (maximum spell level 9th). The summoned creatures must be lawful good, lawful neutral, or neutral good, and they gain the fire, good, and lawful subtypes. You can communicate with the summoned creatures as if you had a shared language.</li>
</ol>
<h3 id="faith-angradd-boons-sentinel">Boons: Sentinel</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_144_midwives_to_death">Pathfinder #144: Midwives to Death pg. 66</Link></p>
<ol>
<li><strong>Purifying Fire (Sp)</strong> <Link to="/spell/burning_hands">burning hands</Link> 3/day, <Link to="/spell/flames_of_the_faithful">flames of the faithful</Link> 2/day, or <Link to="/spell/fireball">fireball</Link> 1/day</li>
<li><strong>Cut Down to Size (Su)</strong> Any axe you wield shines with red and gold light, as the <Link to="/spell/light">light</Link> spell. You gain <Link to="/feat/cleave">Cleave</Link> as a bonus feat with any axe. If you already have Cleave, you gain the first feat from the following list that you don't already have when wielding an axe: <Link to="/feat/great_cleave">Great Cleave</Link>, <Link to="/feat/cleaving_finish">Cleaving Finish</Link>, <Link to="/feat/improved_cleaving_finish">Improved Cleaving Finish</Link>.</li>
<li><strong>Army of One (Sp)</strong> Once per day you can summon a small army of allies to aid you in combat. You can summon either one <Link to="/eq-weapon/greataxe">greataxe</Link> made of pure force per 4 Hit Dice you have (each as a <Link to="/spell/spiritual_weapon">spiritual weapon</Link> spell) or one dwarven warrior made of pure force per 8 Hit Dice you have (each as <Link to="/spell/spiritual_ally">spiritual ally</Link>). If you summon force weapons, you can direct all the summoned weapons with a single move action. If you summon force allies, you can direct all the summoned allies with a single swift action. This acts as a spell with a spell level equal to half your Hit Dice (maximum spell level 9th). If any of the force effects you summon with this ability are dispelled, they are all dispelled.</li>
</ol>
</blockquote>
<h2 id="faith-angradd-paladin-code" data-hash-target>Paladin Code</h2>
<blockquote>
<p>Paladins of Angradd see themselves as frontline soldiers in the war against evil. They seek to form coalitions not just to take down evils in the present, but to leave the world better prepared to oppose such evils in the future. Their tenets include the following affirmations.</p>
<ul>
<li>I oppose evil in all its forms. I do not accept a weak evil just because I must also oppose a mighty evil. To defeat evil, I must understand it and know its strengths and weaknesses. Any evil I cannot defeat now, or that by opposing I would allow greater evil to escape or develop, I must study and work against so that I may more fully defeat it when I am ready. I must share what I learn with others who will fight alongside me.</li>
<li>I am more than a warrior against the darkness-I am a symbol of all that is just and fair. I must serve as an example and as an inspiration, by being righteous in all my actions and showing others how benevolence and order can be used to create a more just, stable, and sustainable society.</li>
<li>It is not enough to stop evil actions - the source of evil must be found and decisively defeated. I am not satisfied to passively wait for wrongs to come to my sight; rather, I seek them out. I will be a torch in the darkness and expose evil to the sight of others who are also willing to oppose it.</li>
<li>I am open in my dealings. I do not lie or look away from actions I cannot support. My opinions and goals are open for all to see. I may use stealth and deceit as needed for tactical purposes, but will not promote untruths or fraud.</li>
</ul>
</blockquote>
<h2 id="faith-angradd-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-angradd-spells">Spells</h3>
<ul>
<li><Link to="/spell/planned_assault">Planned Assault</Link></li>
</ul>
<h3 id="faith-angradd-traits">Traits</h3>
<ul>
<li><Link to="/trait/angradds_flame">Angradd's Flame</Link></li>
<li><Link to="/trait/angradds_valor">Angradd's Valor</Link></li>
<li><Link to="/trait/battlefield_caster">Battlefield Caster</Link></li>
<li><Link to="/trait/well_prepared">Well-Prepared</Link></li>
</ul>
</blockquote>
<h2 id="faith-angradd-description" data-hash-target>Description</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_144_midwives_to_death">Pathfinder #144: Midwives to Death pg. 66</Link><br/>Angradd is the Forge-Fire, the righteous crusader of the dwarven deities and the dwarven god most likely to proactively seek out threats in order to neutralize them. The younger brother of <Link to="/faith/torag">Torag</Link> and <Link to="/faith/magrim">Magrim</Link>, Angradd is seen as rash by his elder brothers but as needlessly prudent by his aunt <Link to="/faith/dranngvit">Dranngvit</Link> the Debt Minder. All the dwarven gods agree, however, that Angradd is an effective and dedicated general in the fight against the pantheon's foes. In popular art, Angradd is depicted as a powerfully built dwarf with radiant blond hair and beard, armor trimmed in crimson and gold, and a mighty, often flaming greataxe.</p>
<p>Angradd's followers are encouraged to seek out and oppose evil wherever they can, and they often compare themselves to a purifying flame that moves from foe to foe, gaining strength as it consumes evil and serving as an illuminating torch in the night. Whenever a foe would overpower them in standard combat, Angradd's faithful study and plan tirelessly to form a strategy to defeat it, patiently building strength and alliances until victory is possible. Once a worshipper of Angradd can no longer endure the rigors of frontline combat, she turns to training and preparing others to carry on the good fight.</p>
</>};
const _anogetz = {hasJL:true,title: "Anogetz", jsx: <><div className="jumpList" id="faith-anogetz-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-anogetz-fiendish-obedience">Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-anogetz-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Anogetz</div><div className="sub">The Fated Fangs</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 318</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Anogetz">Anogetz</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-anogetz-details">Details</h3>
<p><strong>Alignment</strong> NE<br/><strong>Pantheon</strong> Daemon Harbingers<br/><strong>Areas of Concern</strong> Animal attacks, coups, revolution<br/><strong>Domains</strong> <Link to="/domain/animal">Animal</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/liberation">Liberation</Link><br/><strong>Subdomains</strong> <Link to="/domain/daemon">Daemon</Link>, <Link to="/domain/fur">Fur</Link>, <Link to="/domain/rage">Rage</Link>, <Link to="/domain/revolution">Revolution</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/spiked_gauntlet">Spiked gauntlet</Link><br/><strong>Symbol</strong> Animal fangs on a crown<br/><strong>Sacred Animal(s)</strong> All<br/><strong>Sacred Color(s)</strong> Gold, red</p>
<h2 id="faith-anogetz-fiendish-obedience" data-hash-target><Link to="/feat/fiendish_obedience">Fiendish Obedience</Link></h2>
<blockquote>
<p>Plot a revolution against a peaceful ruler. Gain a +4 profane bonus on checks associated with grappling.</p>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 115</Link><br/>Abaddon's unique <Link to="/family/daemon">daemons</Link> take on a host of titles, customized to their methods and vanity. These harbingers enjoy sweeping influence among daemons as favored advisors, and they work to cultivate their own cults on Abaddon and beyond.</p>
<p>Daemon harbingers are neutral evil demigods that range in power from CR 21 to CR 25. The boons they grant are less complex than those granted by the Horsemen themselves, manifesting as spell-like abilities usable twice per day each.</p>
<ol>
<li><Link to="/spell/animal_messenger">animal messenger</Link></li>
<li><Link to="/spell/scrying">scrying</Link></li>
<li><Link to="/spell/beast_shape_iv">beast shape IV</Link></li>
</ol>
</blockquote>
<h2 id="faith-anogetz-description" data-hash-target>Description</h2>
<p>Anogetz, the Fated Fangs, rules over a scarlet jungle atop an isolated plateau in <Link to="/faith/szuriel">Szuriel's</Link> domain.</p>
</>};
const _anubis = {hasJL:true,title: "Anubis", jsx: <><div className="jumpList" id="faith-anubis-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-anubis-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Anubis</div><div className="sub">Guardian of the Tomb</div></div>
<p><strong>Sources</strong> <Link to="/source/pathfinder_80_empty_graves">Pathfinder #80: Empty Graves pg. 66</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Anubis">Anubis</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-anubis-details">Details</h3>
<p><strong>Alignment</strong> LN<br/><strong>Pantheon</strong> Deities of Ancient Osirion<br/><strong>Areas of Concern</strong> Burial, the dead, funeral rites, mummification, tombs<br/><strong>Domains</strong> <Link to="/domain/death">Death</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/repose">Repose</Link><br/><strong>Subdomains</strong> <Link to="/domain/ancestors">Ancestors</Link>, <Link to="/domain/defense">Defense</Link>, <Link to="/domain/inevitable">Inevitable</Link>, <Link to="/domain/metal">Metal</Link>, <Link to="/domain/purity">Purity</Link>, <Link to="/domain/souls">Souls</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/light_flail">Flail</Link><br/><strong>Symbol</strong> Black jackal head<br/><strong>Sacred Animal(s)</strong> Jackal</p>
<h2 id="faith-anubis-description" data-hash-target>Description</h2>
<p>Virtually every Osirian tomb contains images of the jackal-headed god Anubis, the god of mummification and protector of tombs. He presides over funerals and embalming, and guides souls to <Link to="/faith/pharasma">Pharasma</Link> to await their judgment in the afterlife, punishing tomb robbers and defending the dead on their journeys to the Boneyard.</p>
<p>Anubis is the son of <Link to="/faith/osiris">Osiris</Link> and <Link to="/faith/nephthys">Nephthys</Link>, and assisted <Link to="/faith/isis">Isis</Link> with Osiris's mummification. Like his father, Anubis frequently comes into conflict with <Link to="/faith/set">Set</Link>, particularly regarding that god's association with undeath. As a guardian of the dead and their tombs, Anubis frequently works with Isis, <Link to="/faith/neith">Neith</Link>, Nephthys, and <Link to="/faith/selket">Selket</Link>, who protect the canopic jars containing the organs of the deceased. Anubis usually appears as a man with jet-black skin and the head of a jackal, though he sometimes takes the entire form of a jackal. Clerics and paladins of Anubis are dedicated to destroying undead creatures wherever they find them. Anubis is the patron of embalmers, and priests and embalmers typically wear jackal masks that cover their entire heads in honor of their god.</p>
</>};
const _apep = {hasJL:true,title: "Apep", jsx: <><div className="jumpList" id="faith-apep-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-apep-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-apep-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Apep</div><div className="sub">Devourer of the Dawn</div></div>
<p><strong>Sources</strong> <Link to="/source/pathfinder_80_empty_graves">Pathfinder #80: Empty Graves pg. 66</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Apep">Apep</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-apep-details">Details</h3>
<p><strong>Alignment</strong> CE<br/><strong>Pantheon</strong> Deities of Ancient Osirion<br/><strong>Areas of Concern</strong> Chaos, darkness, destruction, snakes<br/><strong>Domains</strong> <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/scalykind">Scalykind</Link><br/><strong>Subdomains</strong> <Link to="/domain/catastrophe">Catastrophe</Link>, <Link to="/domain/chaos">Demon (Chaos)</Link>, <Link to="/domain/evil">Demon (Evil)</Link>, <Link to="/domain/dragon">Dragon</Link>, <Link to="/domain/entropy">Entropy</Link>, <Link to="/domain/fear">Fear</Link>, <Link to="/domain/night">Night</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/dagger">Dagger</Link><br/><strong>Symbol</strong> Coiled serpent<br/><strong>Sacred Animal(s)</strong> Snake</p>
<h2 id="faith-apep-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-apep-traits">Traits</h3>
<ul>
<li><Link to="/trait/snake_handler">Snake Handler</Link></li>
</ul>
</blockquote>
<h2 id="faith-apep-description" data-hash-target>Description</h2>
<p>Born in the waters of primeval chaos before creation, the malevolent serpent Apep stands in sharp contrast to the more benevolent serpent goddess Wadjet. Apep is the personification of chaos and darkness, the hidden dangers that lurk just beneath the surface, the deadly whorls and eddies that drown and swallow, and the hungry river snakes that prey on those who venture too near the water's edge. Apep is the raging rapids, the boundless flood that inundates and sweeps away all that mortals seek to build. He is the darkness in the water's depths that swallows light and life, devouring the sun and plunging the world into eternal night.</p>
<p>Said to dwell in the Tenth Region of Night, Apep is the great enemy of the sun god <Link to="/faith/ra">Ra</Link>, and ancient Osirians believed each sunrise was but a temporary victory, for the Devourer of the Dawn always waits to seize and consume the sun again and again, until one day the sun shall rise no more and all shall be ended. Apep is a great golden serpent miles long, and his crushing coils encircle the world. He also appears as a fearsome dragon with night-black scales, and evil dragons of Osirion venerate him in this form.</p>
</>};
const _apollyon = {hasJL:true,title: "Apollyon", jsx: <><div className="jumpList" id="faith-apollyon-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-apollyon-fiendish-obedience">Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-apollyon-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-apollyon-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Apollyon</div><div className="sub">Prince of Locusts</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 326</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Apollyon">Apollyon</a> <em>(link opens in outside browser)</em><br/><strong>Monster Link</strong> <Link to="/monster/apollyon">Apollyon</Link></p>
<h3 id="faith-apollyon-details">Details</h3>
<p><strong>Alignment</strong> NE<br/><strong>Pantheon</strong> Horsemen<br/><strong>Areas of Concern</strong> Pestilence<br/><strong>Domains</strong> <Link to="/domain/air">Air</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/evil">Evil</Link><br/><strong>Subdomains</strong> <Link to="/domain/catastrophe">Catastrophe</Link>, <Link to="/domain/daemon">Daemon</Link>, <Link to="/domain/loss">Loss</Link>, <Link to="/domain/night">Night</Link>, <Link to="/domain/evil">Plague (Evil)</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/scythe">Scythe</Link><br/><strong>Symbol</strong> Diseased yellow scythe<br/><strong>Sacred Animal(s)</strong> Horse, rat<br/><strong>Sacred Color(s)</strong> White</p>
<h2 id="faith-apollyon-fiendish-obedience" data-hash-target><Link to="/feat/fiendish_obedience">Fiendish Obedience</Link></h2>
<blockquote>
<p>Induce the spread of disease into a population, either by befouling a well, encouraging the fecundity of disease-carrying pests, handing out contaminated clothing, or directly spreading a disease you carry to others. Gain a +4 profane bonus on saving throws against diseases and poisons.</p>
<h3 id="faith-apollyon-boons-evangelist">Boons: Evangelist</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 20</Link></p>
<ol>
<li><strong>Plague's Blessing (Sp)</strong> <Link to="/spell/ray_of_sickening">ray of sickening</Link> 3/day, <Link to="/spell/blindness_deafness">blindness/deafness</Link> 2/day, or <Link to="/spell/contagion">contagion</Link> 1/day</li>
<li><strong>Plague Breath (Sp)</strong> You can cast <Link to="/spell/plague_storm">plague storm</Link> twice per day as a spell-like ability.</li>
<li><strong>Fallow Flesh (Ex)</strong> Infused with Apollyon's grace, you are immune to the negative effects of disease, yet you can still carry diseases in your body and infect others with them. Disease effects you create take effect at once, with the first day of damage happening immediately; the disease then progresses as normal. The saving throw DCs of disease effects you generate increase by 1, and victims can't recover from those effects naturally through rest; only magic can cure the diseases you create (although those who contract a disease from someone you infect treat the disease as normal). Any creature that is immune to disease as a result of a class feature or a non-artifact magic item is not immune to disease effects you create, but it gains a +4 bonus on its saving throw to resist the disease. Any creature that is immune to disease via a racial feature or as a feature of its creature type remains immune to your diseases.</li>
</ol>
<h3 id="faith-apollyon-boons-exalted">Boons: Exalted</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 20</Link></p>
<ol>
<li><strong>Plague's Grace (Sp)</strong> <Link to="/spell/diagnose_disease">diagnose disease</Link> 3/day, <Link to="/spell/summon_swarm">summon swarm</Link> 2/day, or <Link to="/spell/vermin_shape_i">vermin shape I</Link> 1/day</li>
<li><strong>Breath of Flies (Su)</strong> Once per minute as a standard action (up to three times a day), you can exhale a cloud of biting, corpse-bloated black flies in a 20-foot cone. Creatures caught in the cone take 8d6 points of slashing damage. A victim can reduce this damage by half with a successful Reflex save (DC = 10 + half your Hit Dice + your Constitution modifier), but any creature that takes any damage at all from this effect is <Link to="/misc/sickened">sickened</Link> for 1 minute. The cloud of flies lingers for 1d4+1 rounds, congealing into a buzzing, 20-foot-square cloud centered on the cone's original point of origin. A creature that ends its turn in this cloud must succeed at a Reflex save or take 4d6 points of slashing damage and be sickened for 1 minute. Any area effect that deals damage or creates strong or stronger wind disperses this cloud. You are immune to the effects of these flies, as are all daemons.</li>
<li><strong>Flood of Vermin (Sp)</strong> You can cast <Link to="/feat/empowered">empowered</Link> <Link to="/spell/creeping_doom">creeping doom</Link> as a spell-like ability once per day. You are immune to swarm attacks.</li>
</ol>
<h3 id="faith-apollyon-boons-sentinel">Boons: Sentinel</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 20</Link></p>
<ol>
<li><strong>Plague's Crusader (Sp)</strong> <Link to="/spell/mount">mount</Link> 3/day, <Link to="/spell/wartrain_mount">wartrain mount</Link> 2/day, or <Link to="/spell/phantom_steed">phantom steed</Link> 1/day</li>
<li><strong>Contagious Strike (Sp)</strong> Up to three times per day as a swift action, you can cause a creature damaged by a ranged or melee weapon you wield to become affected by <Link to="/spell/contagion">contagion</Link>.</li>
<li><strong>Usher of Apollyon (Su)</strong> As a swift action, you can summon into your hands either a +4 <Link to="/magic-enh/unholy">unholy</Link> <Link to="/magic-enh/wounding">wounding</Link> scythe or a +4 <Link to="/magic-enh/adaptive">adaptive</Link> <Link to="/magic-enh/distance">distance</Link> unholy <Link to="/eq-weapon/longbow">longbow</Link>, lasting for a number of rounds equal to your Hit Dice + your Constitution modifier. This weapon vanishes if you release it, and the rounds of use need not be consecutive.</li>
</ol>
</blockquote>
<h2 id="faith-apollyon-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-apollyon-archetypes">Archetypes</h3>
<ul>
<li><Link to="/arc-spiritualist/grim_apostle">Grim Apostle (Spiritualist)</Link></li>
</ul>
<h3 id="faith-apollyon-feats">Feats</h3>
<ul>
<li><Link to="/feat/aura_of_succumbing">Aura of Succumbing</Link></li>
</ul>
<h3 id="faith-apollyon-magic-items---wondrous-items">Magic Items - Wondrous Items</h3>
<ul>
<li><Link to="/magic-wondrous/apollyon_clasp">Apollyon Clasp</Link></li>
</ul>
<h3 id="faith-apollyon-traits">Traits</h3>
<ul>
<li><Link to="/trait/covenant_of_abaddon">Covenant of Abaddon</Link></li>
</ul>
</blockquote>
<h2 id="faith-apollyon-description" data-hash-target>Description</h2>
<blockquote>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 20</Link><br/>Apollyon, the Prince of Plagues, takes the form of a pockmarked man with the head of a diseased, snarling ram. The Horseman of Pestilence wears a cloak tailored from the tanned, stitched-together skins of a dozen angels, each flayed alive after failed attempts to slay the Horseman and recover the souls imprisoned within his domain. Each angelic soul was half devoured by Apollyon, and he used the other portions to empower a series of bows - the Ushers of the Black Rain - granted to his greatest servitors as badges of their position, with the original Usher of the Black Rain kept by the Horseman himself.</p>
</blockquote>
<p>The <Link to="/monster/apocalypse_horse">apocalypse horse</Link> Septisaeus serves as Apollyon's mount, bearing a golden crown marked with its master's symbol and a neck punctured by a dozen barbed arrows. With a gleaming white coat, Septisaeus seems healthy at first glance but upon closer inspection bears the signs of horrific infection: sclera black with ocular bleeding, cracked gums and teeth, a frothing mouth, and purpuric blemishes marring its extremities.</p>
</>};
const _apsu = {hasJL:true,title: "Apsu", jsx: <><div className="jumpList" id="faith-apsu-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-apsu-deific-obedience">Deific Obedience</InnerLink></li><li><InnerLink toTop to="faith-apsu-paladin-code">Paladin Code</InnerLink></li><li><InnerLink toTop to="faith-apsu-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-apsu-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Apsu</div><div className="sub">The Waybringer</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_faiths">Inner Sea Faiths pg. 17</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Apsu">Apsu</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-apsu-details">Details</h3>
<p><strong>Alignment</strong> LG<br/><strong>Pantheon</strong> Other Deities<br/><strong>Other Pantheons</strong> Scalefolk Deities<br/><strong>Areas of Concern</strong> Good dragons, leadership, peace<br/><strong>Domains</strong> <Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/scalykind">Scalykind</Link>, <Link to="/domain/travel">Travel</Link><br/><strong>Subdomains</strong> <Link to="/domain/good">Archon (Good)</Link>, <Link to="/domain/law">Archon (Law)</Link>, <Link to="/domain/construct">Construct</Link>, <Link to="/domain/dragon">Dragon</Link>, <Link to="/domain/exploration">Exploration</Link>, <Link to="/domain/toil">Toil</Link>, <Link to="/domain/trade">Trade</Link><br/><strong>Favored Weapon</strong> Bite or <Link to="/eq-weapon/quarterstaff">quarterstaff</Link><br/><strong>Symbol</strong> Silver dragon above pool<br/><strong>Sacred Animal(s)</strong> None<br/><strong>Sacred Color(s)</strong> Metallic colors</p>
<h3 id="faith-apsu-on-golarion">On Golarion</h3>
<p><strong>Centers of Worship</strong> Absalom, Taldor, Triaxus<br/><strong>Nationality</strong> dragon</p>
<h2 id="faith-apsu-deific-obedience" data-hash-target><Link to="/feat/deific_obedience">Deific Obedience</Link></h2>
<blockquote>
<p>Pick a direction, and walk that way for the next 30 minutes. During this time, catalog all of the areas you pass and consider any tactical advantages that can be found in the terrain. After this, retrace your steps, but instead of plotting tactics, appreciate the beauty and scenery that you find along your way, and speak quiet prayers to or praises of the Waybringer, keeping in mind that none of what you've seen would exist were it not for Apsu. You then gain a +2 sacred bonus on Perception checks while you are traveling in this area, and a +4 sacred bonus on checks to notice enemies for the purpose of acting in a surprise round while you are traveling or camping there.</p>
<h3 id="faith-apsu-boons-evangelist">Boons: Evangelist</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_faiths">Inner Sea Faiths pg. 17</Link></p>
<ol>
<li><strong>Maker's Ways (Sp)</strong> <Link to="/spell/floating_disk">floating disk</Link> 3/day, <Link to="/spell/align_weapon">align weapon (law only)</Link> 2/day, or <Link to="/spell/tiny_hut">tiny hut</Link> 1/day</li>
<li><strong>Touch of the Artificer (Su)</strong> You have discovered divinely inspired lines of primordial energy - gifts from Apsu, you believe - that can imbue weapons with bursts of magic. Up to three times per day, as a standard action, you can touch a single weapon and grant it the <Link to="/magic-enh/dancing">dancing</Link> property for the next 3 rounds. A single weapon cannot be targeted by this effect more than once per day.</li>
<li><strong>Crafter's Pride (Sp)</strong> You have learned the intrinsic nature of what gives life to objects, and can pour your soul into the construction of a given creation to infuse it with a semblance of blessed life. Once per week, you can cast <Link to="/spell/animate_objects">animate objects</Link> on a single object that you've created. The effect does not have a duration; the animated object remains indefinitely as a companion, following your commands as best it can. You cannot animate a new companion while one is already serving you, though as a full-round action you can dismiss a companion, reducing it to lifelessness. If your companion is destroyed, you cannot use this ability again for another week. You cannot affect an object animated in this way with a <Link to="/spell/permanency">permanency</Link> spell.</li>
</ol>
<h3 id="faith-apsu-boons-exalted">Boons: Exalted</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_faiths">Inner Sea Faiths pg. 17</Link></p>
<ol>
<li><strong>Waybringer's Ingenuity (Sp)</strong> <Link to="/spell/blurred_movement">blurred movement</Link> 3/day, <Link to="/spell/levitate">levitate</Link> 2/day, or <Link to="/spell/haste">haste</Link> 1/day</li>
<li><strong>Eyes of the Pursued (Su)</strong> You adhere to Apsu's dictate of living to fight another day, and you've mastered the art of monitoring places you've left. Anytime you use a teleportation effect to move, you can place an invisible magic sensor in the area from which you just departed. As long as you are on the same plane as the sensor, you can see and hear everything occurring within 30 feet of the sensor as a swift action. The sensor lasts for a number of rounds equal to your Hit Dice. You can have a maximum number of active sensors equal to your number of Hit Dice.</li>
<li><strong>Homeward Bound (Su)</strong> As a follower of Apsu, you deeply understand the importance of having a safe place to which you can retreat; you've come to count on several safe homes, creating ties to them when necessary. Once per month, you can designate a location to be your refuge. Once per week as a full-round action that provokes attacks of opportunity, you can teleport yourself and any willing creatures within 30 feet of you to the safe home of your choice, regardless of distance, as long as it is on the same plane. You can have a maximum number of refuges equal to half your Hit Dice. As long as none of your allies are in a refuge, you can remove its designation as a safe home as a swift action, but if you do so, you can never again designate it as a safe home.</li>
</ol>
<h3 id="faith-apsu-boons-sentinel">Boons: Sentinel</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_faiths">Inner Sea Faiths pg. 17</Link></p>
<ol>
<li><strong>Exiled's Wrath (Sp)</strong> <Link to="/spell/color_spray">color spray</Link> 3/day, <Link to="/spell/scorching_ray">scorching ray</Link> 2/day, or <Link to="/spell/draconic_reservoir">draconic reservoir</Link> 1/day</li>
<li><strong>Apsu's Shroud (Su)</strong> Apsu smiles upon your martial prowess and protects you with a halo of divine energy from his distant realm. You gain a +1 sacred bonus to your Armor Class, which increases to +2 against attacks from evil-aligned creatures. This bonus increases to +3 if the attacker is an evil-aligned true dragon. If an evil-aligned true dragon confirms a critical hit against you, the creature must succeed at a Fortitude save (DC = 10 + 1/2 your Hit Dice + your Charisma modifier) or be <Link to="/misc/blinded">blinded</Link> for 1 round.</li>
<li><strong>Chromatic Scourge (Su)</strong> You channel the righteous and immortal fury of Apsu into your weapon, making it ready for the endless fight against <Link to="/faith/dahak">Dahak</Link> and his wicked allies. Once per day as a swift action, you can imbue your weapon with the hidden wrath of Apsu. If your target is evil, you gain a +20 profane bonus on your next single attack. If your opponent is an evil-aligned creature of the dragon type, treat your next single attack roll as both an automatic hit and a critical threat. You gain a +4 profane bonus to confirm the critical hit.</li>
</ol>
</blockquote>
<h2 id="faith-apsu-paladin-code" data-hash-target>Paladin Code</h2>
<blockquote>
<p>Paladins of Apsu valiantly follow the dragon god's tenets of holy vigilance against evil. Those following the rigid code of a paladin must sacrifice the sedentary lifestyle of living in a single place in exchange for continuous travel and hardship. The tenets of such paladins include the following maxims.</p>
<ul>
<li>I am the talon of Apsu's wrath. I strike where I am needed, but only when evil has been unmasked and there can be no doubt of my enemy's malice.</li>
<li>When my purpose is unclear, I will walk the roads of the world to find a fresh focus. Every road leads to a new beginning.</li>
<li>Nothing is worth sacrificing my life for, except protecting the lives of others. I will retreat when needed, and come back to vex my foes once again.</li>
<li>Mercy is offered, but only once. Should I be betrayed in my moment of kindness, I will not stop until I have put my enemy down.</li>
<li>It is not enough to slay evil and carry on. I will spend the time necessary to help those I've protected to fend for themselves.</li>
</ul>
</blockquote>
<h2 id="faith-apsu-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-apsu-feats">Feats</h3>
<ul>
<li><Link to="/feat/divine_barrier">Divine Barrier</Link></li>
</ul>
<h3 id="faith-apsu-magic-items---wondrous-items">Magic Items - Wondrous Items</h3>
<ul>
<li><Link to="/magic-wondrous/orb_of_the_waybringer">Orb of the Waybringer</Link></li>
</ul>
<h3 id="faith-apsu-traits">Traits</h3>
<ul>
<li><Link to="/trait/inspiring_leader">Inspiring Leader</Link></li>
<li><Link to="/trait/scaly_ally">Scaly Ally</Link></li>
</ul>
<h3 id="faith-apsu-unique-spell-rules">Unique Spell Rules</h3>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 28</Link></p>
<h4 id="faith-apsu-cleric-inquisitor-oracle-warpriest">Cleric, Inquisitor, Oracle, Warpriest</h4>
<ul>
<li><Link to="/spell/apsus_shining_scales">Apsu's Shining Scales</Link> can be prepared as a 3rd-level spell</li>
<li><Link to="/spell/draconic_ally">Draconic Ally</Link> can be prepared as a 3rd-level spell</li>
<li><Link to="/spell/tail_strike">Tail Strike</Link> can be prepared as a 4th-level spell</li>
</ul>
<h4 id="faith-apsu-paladin">Paladin</h4>
<ul>
<li><em>Apsu's Shining Scales</em> can be prepared as a 3rd-level spell</li>
</ul>
<h3 id="faith-apsu-other-rules">Other Rules</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_faiths">Inner Sea Faiths pg. 19</Link></p>
<ul>
<li>Apsu has no oracles, for he believes inflicting a curse on a living creature is a terrible crime against that being, even in exchange for divine power.</li>
</ul>
</blockquote>
<h2 id="faith-apsu-description" data-hash-target>Description</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_faiths">Inner Sea Faiths pg. 18</Link><br/>According to draconic lore, in the beginning of time there flowed two waters, fresh and salt, which became Apsu and his mate. The couple spawned the dragon-gods who created all the mortal world, but their first child, the destructive <Link to="/faith/dahak">Dahak</Link>, traveled to Hell to revel and rampage, turning it into a place of darkness and ever-burning fire. Dahak then struck out at his siblings, destroying each in turn; the shattered remains of these draconic gods formed the first metallic dragons, who were cast onto the Material Plane as mortals. This enraged the fresh water, who realized that he must take a name so he could descend upon the Material Plane to confront his son. The fresh water then declared the immortal words: "I shall then be Apsu, for I am the first."</p>
<p>Aiding Apsu in his quest against Dahak were the god's metallic dragon children. The ensuing battle eventually saw Dahak laid low, but at a terrible price, for many of the dragons had sustained dire injuries. Just as Apsu prepared to strike the killing blow against his son, Dahak called out to his mother, the great salt sea. Unwilling to see her first son perish, the still-nameless sea offered to heal the battle's brutalized survivors in exchange for their efforts to save Dahak's life. Weakened and suffering, some accepted, exchanging goodness for evil, and battle raged between the metallic and chromatic dragons.</p>
<p>Dahak escaped his father's claws, and though the metallic dragons were poised to pursue, Apsu bade them to save their rage for another day. He then asked his mate why she aided their treacherous son, but she merely named herself [redacted]<sup><InnerLink showBacklink="backlink-faith-apsu-ref-R-1" id="faith-apsu-ref-R-1" data-hash-target to="faith-apsu-R">1</InnerLink></sup>, mother of all - a name that still brings pain to all dragons - and held Apsu responsible for the deaths of her children. She then expelled him from their primordial realm, and Apsu vowed that, one day, he would make his stand against Dahak.</p>
<p>Apsu and Dahak's bitter enmity has since been the source of discord among the dragons of the cosmos. Apsu has accepted the inevitability of a final conflict with his son, choosing, for unknown reasons, the world of Golarion on which to make his last stand. Apsu's avatar is a dragon dwarfing the largest of the great wyrms, a regal and magnificent sight to behold. His silver scales sparkle with a pearlescent glow. When in this form, Apsu guides dragons and mortals alike, preparing all for the day his final battle with Dahak will commence.</p>
<section data-footnotes>
<h3 id="faith-apsu-label">Footnotes</h3>
<ol>
<li id="faith-apsu-R">
<p>All dragons on live in fear of her and refuse to even speak her name. <InnerLink id="backlink-faith-apsu-ref-R-1" data-hash-target to="faith-apsu-ref-R-1" aria-label="Back to reference R-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _arazni = {hasJL:true,title: "Arazni", jsx: <><div className="jumpList" id="faith-arazni-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-arazni-deific-obedience">Deific Obedience</InnerLink></li><li><InnerLink toTop to="faith-arazni-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-arazni-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Arazni</div><div className="sub">The Harlot Queen</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 316</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Arazni">Arazni</a> <em>(link opens in outside browser)</em><br/><strong>Monster Link</strong> <Link to="/monster/arazni">Arazni</Link></p>
<h3 id="faith-arazni-details">Details</h3>
<p><strong>Alignment</strong> NE<br/><strong>Pantheon</strong> Other Deities<br/><strong>Areas of Concern</strong> Command of undeath, lichdom<br/><strong>Domains</strong> <Link to="/domain/evil">Evil</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/protection">Protection</Link><br/><strong>Subdomains</strong> <Link to="/domain/defense">Defense</Link>, <Link to="/domain/leadership">Leadership</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/rapier">Rapier</Link><br/><strong>Symbol</strong> Rapier and lotus<br/><strong>Sacred Animal(s)</strong> Scarab beetle<br/><strong>Sacred Color(s)</strong> Gray, red</p>
<h2 id="faith-arazni-deific-obedience" data-hash-target><Link to="/feat/deific_obedience">Deific Obedience</Link></h2>
<blockquote>
<p>Spend an hour reliving or imagining terrible things that happened to you. This process is mentally strenuous, dealing 1d6 points of nonlethal damage. You cannot allow anyone else to know of your struggles: speaking of them, showing distress while considering them, or even asking for assistance in healing the nonlethal damage negates the benefits of this obedience. When you fail a saving throw against a creature's spell or spell-like ability, you gain a +4 profane bonus on saving throws against any of that creature's abilities for 1 minute.</p>
<h3 id="faith-arazni-boons-evangelist">Boons: Evangelist</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_140_eulogy_for_roslars_coffer">Pathfinder #140: Eulogy for Roslar's Coffer pg. 71</Link></p>
<ol>
<li><strong>Hidden Resolve (Sp)</strong> <Link to="/spell/disguise_self">disguise self</Link> 3/day, <Link to="/spell/obscure_object">obscure object</Link> 2/day, or <Link to="/spell/bestow_curse">bestow curse</Link> 1/day</li>
<li><strong>Unheralded Retribution (Su)</strong> You punish those foes who would use the arcane arts to infringe upon your autonomy and well-being. Whenever you succeed at a saving throw against a spell or spell-like ability cast or used by a creature, that creature becomes <Link to="/rule/flat_footed">flat-footed</Link> against your attacks until the end of your next turn. In addition, your attacks against that creature while it is flat-footed deal 1 additional point of <Link to="/rule/bleed">bleed</Link> damage; this bleed damage stacks with itself.</li>
<li><strong>Sovereign Constancy (Su)</strong> Much like Arazni herself, you prize the sanctuary of your own thoughts, and you have built defenses and protections lest others try to take away or taint this refuge. Once per day as an immediate action whenever you are affected by a mind-affecting effect, you can use <Link to="/spell/break_enchantment">break enchantment</Link> on yourself as a spell-like ability, with a caster level equal to your Hit Dice.</li>
</ol>
<h3 id="faith-arazni-boons-exalted">Boons: Exalted</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_140_eulogy_for_roslars_coffer">Pathfinder #140: Eulogy for Roslar's Coffer pg. 71</Link></p>
<ol>
<li><strong>Unyielding (Sp)</strong> <Link to="/spell/remove_fear">remove fear</Link> 3/day, <Link to="/spell/false_life">false life</Link> 2/day, or <Link to="/spell/nondetection">nondetection</Link> 1/day</li>
<li><strong>Strength in Bloodshed (Su)</strong> The Red Crusader knew well the value of fighting alongside allies - and the price to be paid when those allies fail. Rather than relying upon the assistance of fickle and fallible mortals, you can bring forth a construct gathered from the blood spilled by Arazni and her followers. Once per day as a standard action, you can summon a <Link to="/monster/blood_golem">blood golem</Link> to aid you. You gain telepathy with the golem to a range of 100 feet. The golem follows your commands perfectly for a number of minutes equal to your number of Hit Dice before vanishing back to its home.</li>
<li><strong>Shield of Scars (Sp)</strong> When you heal yourself with a <Link to="/main/inflict_spells">cure or inflict spell</Link> (as appropriate depending upon your physiology), scars form over your body. You gain a profane bonus to Armor Class equal to the spell's level for 1 minute.</li>
</ol>
<h3 id="faith-arazni-boons-sentinel">Boons: Sentinel</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_140_eulogy_for_roslars_coffer">Pathfinder #140: Eulogy for Roslar's Coffer pg. 71</Link></p>
<ol>
<li><strong>Red Queen's Rapier (Sp)</strong> <Link to="/spell/divine_favor">divine favor</Link> 3/day, <Link to="/spell/blood_armor">blood armor</Link> 2/day, or <Link to="/spell/rage">rage</Link> 1/day</li>
<li><strong>Subliminal Intransigence (Su)</strong> Through ceaseless conditioning, you have constructed insurmountable mental defenses that deny others the ability to sway your thoughts, whether for good or for ill. You gain immunity to charm and compulsion effects and a +4 bonus on saving throws against fear effects.</li>
<li><strong>Fallen Crusader's Retaliation (Su)</strong> The Red Queen's life is a painful example of the danger of falling prey to the arcane arts, and you have learned from this lesson. Ever wary of those who wield magic in battle, you hone your reflexes to strike when least expected. Creatures you threaten that fail their checks to cast spells defensively provoke attacks of opportunity from you.</li>
</ol>
</blockquote>
<h2 id="faith-arazni-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-arazni-magic-items---weapons">Magic Items - Weapons</h3>
<ul>
<li><Link to="/magic-weapon/red_crusaders_quill">Red Crusader's Quill</Link></li>
</ul>
<h3 id="faith-arazni-spells">Spells</h3>
<ul>
<li><Link to="/spell/bloodstone_mirror">Bloodstone Mirror</Link></li>
<li><Link to="/spell/litany_of_the_red_crusader">Litany of the Red Crusader</Link></li>
<li><Link to="/spell/unspoken_name">Unspoken Name</Link></li>
</ul>
<h3 id="faith-arazni-unique-spell-rules">Unique Spell Rules</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_140_eulogy_for_roslars_coffer">Pathfinder #140: Eulogy for Roslar's Coffer pg. 72</Link></p>
<h4 id="faith-arazni-antipaladin">Antipaladin</h4>
<ul>
<li><Link to="/spell/blood_armor">Blood Armor</Link> can be prepared as a 2nd-level spell</li>
<li><Link to="/spell/detect_scrying">Detect Scrying</Link> can be prepared as a 3rd-level spell</li>
</ul>
<h4 id="faith-arazni-cleric-warpriest">Cleric, Warpriest</h4>
<ul>
<li><Link to="/spell/anticipate_peril">Anticipate Peril</Link> can be prepared as a 1st-level spell</li>
<li><em>Detect Scrying</em> can be prepared as a 4th-level spell</li>
</ul>
<h4 id="faith-arazni-cleric">Cleric</h4>
<ul>
<li><Link to="/spell/mind_blank">Mind Blank</Link> can be prepared as a 8th-level spell</li>
</ul>
<h3 id="faith-arazni-unique-summon-rules">Unique Summon Rules</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_140_eulogy_for_roslars_coffer">Pathfinder #140: Eulogy for Roslar's Coffer pg. 73</Link></p>
<ul>
<li><strong className="hl"><Link to="/spell/summon_monster_iii">Summon Monster III:</Link></strong> Augur Kyton</li>
<li><strong className="hl"><Link to="/spell/summon_monster_vi">Summon Monster VI:</Link></strong> <Link to="/template/fiendish">Fiendish</Link> <Link to="/monster/giant_scarab">Giant Scarab</Link></li>
<li><strong className="hl"><Link to="/spell/summon_monster_viii">Summon Monster VIII:</Link></strong> Interlocutor Kyton</li>
</ul>
</blockquote>
<h2 id="faith-arazni-description" data-hash-target>Description</h2>
<p>Unlike many divinities, Arazni has a single, fixed form and a finite realm on the Material Plane. Due to the transformations Geb wrought upon her corpse, she is bound into the form of a <Link to="/template/lich">lich</Link>. She has become a gaunt and emaciated figure due to the torments she endured from <Link to="/monster/tar_baphon">Tar-Baphon</Link>, the theft of her organs - now the powerful but lost artifacts known as the <Link to="/magic-artifact/bloodstones_of_arazni">bloodstones of Arazni</Link> - and the decay of her flesh. Unlike most liches, she remains ignorant of the nature and location of her phylactery, an intentional strategy to keep her trapped under Geb's control. Despite it all, she maintains a formidable force of will, and few find themselves able to stand their ground when her wrath is kindled. Common rumor tells that Arazni has embraced her role as Geb's Harlot Queen, taking the <Link to="/template/graveknight">graveknights</Link> who stole her body as champions and making an undead harem of the reanimated knights sent to liberate her remains. Interestingly enough, those rumors are spoken most boldly not in Geb, but in Lastwall and in the remnants of the Taldan empire where she was first known as a crusader.</p>
<p>Arazni's realm is the nation of Geb, which she rules as the head of state from the Cinerarium, her great obsidian pyramid-palace in Mechitar. She serves as the face of Geb to the outside world and manages the political administration of the realm with a steady, dispassionate hand; most in the region credit the stability of the nation over the past 800 years to her leadership.</p>
<p>Arazni holds little regard for her worshippers, as she maintains a bitter resentment toward anyone who venerates what she has become. At the same time, she finds a spark of vicarious fulfillment in having followers, and so she tolerates them. She values her privacy above all, however, and any cleric who would use his powers to divine her or her secrets will find himself swiftly and utterly cut off from her power. Likewise, she detests the epithet "Harlot Queen," and use of the appellation is an equally swift path to excommunication; her worshippers instead refer to her as the Red Queen or, especially among those outside of Geb, the Unyielding.</p>
</>};
const _ardad_lili = {hasJL:true,title: "Ardad Lili", jsx: <><div className="jumpList" id="faith-ardad_lili-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-ardad_lili-fiendish-obedience">Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-ardad_lili-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-ardad_lili-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Ardad Lili</div><div className="sub">The End of Innocence</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 328</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Ardad%20Lili">Ardad Lili</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-ardad_lili-details">Details</h3>
<p><strong>Alignment</strong> LE<br/><strong>Pantheon</strong> Queens of the Night<br/><strong>Areas of Concern</strong> Seduction, snakes, women<br/><strong>Domains</strong> <Link to="/domain/charm">Charm</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/scalykind">Scalykind</Link><br/><strong>Subdomains</strong> <Link to="/domain/evil">Devil (Evil)</Link>, <Link to="/domain/law">Devil (Law)</Link>, <Link to="/domain/dragon">Dragon</Link>, <Link to="/domain/love">Love</Link>, <Link to="/domain/lust">Lust</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/dagger">Dagger</Link><br/><strong>Symbol</strong> Wings made of snake tails<br/><strong>Sacred Animal(s)</strong> Snake<br/><strong>Sacred Color(s)</strong> Black, green</p>
<h2 id="faith-ardad_lili-fiendish-obedience" data-hash-target><Link to="/feat/fiendish_obedience">Fiendish Obedience</Link></h2>
<blockquote>
<p>Spontaneously compose a song whose lyrics consist of a deliciously profane promise you do not intend to keep. If the promise is to another individual, you must perform the song so that person can hear it, but the intentionally disingenuous promise can instead be one you make to yourself (in which case you need not perform it for another). Gain a +4 bonus on saving throws against sonic effects and effects that deal sonic damage.</p>
<h3 id="faith-ardad_lili-boons-evangelist">Boons: Evangelist</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 22</Link></p>
<ol>
<li><strong>Darkest Muse (Sp)</strong> <Link to="/spell/disguise_self">disguise self</Link> 3/day, <Link to="/spell/adoration">adoration</Link> 2/day, or <Link to="/spell/reckless_infatuation">reckless infatuation</Link> 1/day</li>
<li><strong>Promises Insincere (Sp)</strong> Much like Ardad Lili can make mortals see in her presence their fondest desires, you can create an image of yourself to make promises you don't intend to keep or otherwise fool your enemies into doing your bidding. Once per day, you can cast <Link to="/spell/project_image">project image</Link> as a spell-like ability.</li>
<li><strong>Soul-Bound Caress (Sp)</strong> Like that of Ardad Lili, your touch results in a much different experience than you might promise. Once per day, you can cast <Link to="/spell/soul_bind">soul bind</Link> as a spell-like ability without paying the cost of the required material component. You must still touch the target corpse, however.</li>
</ol>
<h3 id="faith-ardad_lili-boons-exalted">Boons: Exalted</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 22</Link></p>
<ol>
<li><strong>Leveraged Wiles (Sp)</strong> <Link to="/spell/innocence">innocence</Link> 3/day, <Link to="/spell/calm_emotions">calm emotions</Link> 2/day, or <Link to="/spell/slow">slow</Link> 1/day</li>
<li><strong>False Innocence (Sp)</strong> You have learned much from the ways of this fallen angel, including how to leverage your charms to convince fools to believe almost anything you wish. Three times per day when you are accused of anything, you can use <Link to="/spell/mass_suggestion">mass suggestion</Link> as a spell-like ability. You can use this suggestion to persuade targets that you are innocent, that another is guilty, or that any other statement or insinuation is true. You or an ally must first be accused of some offense before you use this ability, however.</li>
<li><strong>From the Mouths of Fools (Sp)</strong> In the course of exacting pledges of adoration and fealty from the fools you have tricked in your dark goddess's name, you have amassed memories of begging, wheedling, and other pathetic pleas for your favor. Far from letting this energy go to waste, you can periodically release it in a mighty cacophonous scream. Once per day, you can cast <Link to="/spell/wail_of_the_banshee">wail of the banshee</Link> as a spell-like ability.</li>
</ol>
<h3 id="faith-ardad_lili-boons-sentinel">Boons: Sentinel</h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 22</Link></p>
<ol>
<li><strong>Selfish Scales (Sp)</strong> <Link to="/spell/lock_gaze">lock gaze</Link> 3/day, <Link to="/spell/chameleon_stride">chameleon stride</Link> 2/day, or <Link to="/spell/burst_of_nettles">burst of nettles</Link> 1/day</li>
<li><strong>Beware the Forked Tongue (Sp)</strong> Just like the Serpent Muse can drop her pretense of innocence when she decides she's had enough of an annoying mortal, you can lash out at your enemies with all the force of Ardad Lili's hatred and wrath. Once per day as a standard action, you can cast <Link to="/spell/mass_inflict_serious_wounds">mass inflict serious wounds</Link> as a spell-like ability.</li>
<li><strong>So Speaks the Serpent Muse (Su)</strong> When the fury of Ardad Lili is bared, it is an unholy and terrifying sight, and so is it when you display your full might to your foes. Once per day as a standard action, you can speak a profane prayer to your goddess. When you do, each enemy within 60 feet must succeed at a Fortitude saving throw (DC = 10 + half your Hit Dice + your Wisdom modifier) or its skin partially turns to scales. This painful process deals 1d6 points of damage for every 2 Hit Dice you have, and the target is subject to the effects of a <Link to="/spell/slow">slow</Link> spell for a number of rounds equal to your Hit Dice. On a successful saving throw, a target takes only half the damage and negates the slow effect. Creatures need not hear you to be affected, but you must be able to speak to use this ability. This is a polymorph effect.</li>
</ol>
</blockquote>
<h2 id="faith-ardad_lili-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-ardad_lili-unique-spell-rules">Unique Spell Rules</h3>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 31</Link></p>
<h4 id="faith-ardad_lili-cleric-inquisitor-oracle-warpriest">Cleric, Inquisitor, Oracle, Warpriest</h4>
<ul>
<li><Link to="/spell/tail_strike">Tail Strike</Link> can be prepared as a 4th-level spell</li>
</ul>
</blockquote>
<h2 id="faith-ardad_lili-description" data-hash-target>Description</h2>
<blockquote>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 22</Link><br/>A being who engenders deliberately coaxed fear and misunderstanding among mortals and mixed admiration and loathing among celestials, Ardad Lili is a plotter, an unparalleled manipulator, and a dark queen of unique ambition. Most mortals think of her as a seducer: a figure of feminine predation who can corrupt victims by her very touch. However, the specter of a lustful serpent-queen is a carefully cultivated, millennia-old campaign of Ardad Lili's aimed at bringing down her former celestial brethren. They never believed that she could become as powerful as she has, and now she shoves their noses in her glorious infamy.</p>
</blockquote>
<p>In the time when mortals were young, Ardad Lili was an angel from Nirvana tasked with visiting the Material Plane and inspiring nascent poets, sculptors, and songwriters on behalf of <Link to="/faith/shelyn">Shelyn</Link>, a then-minor deity. As time wore on, Ardad Lili became distinctly aware that many of her earthly assignments harbored feelings of lust toward her angelic form - particularly foolish youths, who clearly thought themselves worthy of her despite the fact that she was immortal and they were not. Ardad Lili grew to hate these smug mortals and soon burned with disgust for all mortals with their pathetic and shallow egos.</p>
<p>Over time, the jaded angel formulated a plan. She continued her work as a muse, but she began coaxing mortals into swearing fealty and their undying souls to her in exchange for what she called a "stainless caress." Usually, the pledge of allegiance came with Ardad Lili giving absolutely nothing in return, as she made long-term promises she never intended to keep, while prayers to her rose into Nirvana in droves. Those mortals who proved too virtuous to make the pledge or who bored her, she simply killed. As Ardad Lili grew in power, she shared her manipulative ways with other disgruntled angels of inspiration, and she plotted to overthrow Nirvana's lords and carve out her own place of absolute rulership in the realm.</p>
<p>Of the four Queens of the Night, Ardad Lili is the least monstrous and most human in appearance. She appears as a beautiful, dark-skinned woman, and she favors the colors green and white. Her only diabolic feature is her wings, which feature long, slithering snake tails instead of feathers. Despite this unsettling cosmetic feature, her wings allow her swift and graceful flight. She prefers to leave the grisly details of battle to her minions (of which she has countless), but if she's forced to fight, her slender ivory-bladed dagger is capable of inflicting unusually painful and deadly wounds. Of course, Ardad Lili prefers to turn would-be enemies into loyal allies via magic or her silver tongue.</p>
</>};
const _areshkagal = {hasJL:true,title: "Areshkagal", jsx: <><div className="jumpList" id="faith-areshkagal-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-areshkagal-demonicfiendish-obedience">Demonic/Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-areshkagal-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-areshkagal-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Areshkagal</div><div className="sub">The Faceless Sphinx</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 320</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Areshkagal">Areshkagal</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-areshkagal-details">Details</h3>
<p><strong>Alignment</strong> CE<br/><strong>Pantheon</strong> Demon Lords<br/><strong>Areas of Concern</strong> Greed, portals, riddles<br/><strong>Domains</strong> <Link to="/domain/air">Air</Link>, <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/trickery">Trickery</Link><br/><strong>Subdomains</strong> <Link to="/domain/deception">Deception</Link>, <Link to="/domain/chaos">Demon (Chaos)</Link>, <Link to="/domain/evil">Demon (Evil)</Link>, <Link to="/domain/thievery">Thievery</Link>, <Link to="/domain/wind">Wind</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/sickle">Sickle</Link><br/><strong>Symbol</strong> Faceless female pharaoh<br/><strong>Sacred Animal(s)</strong> Viper<br/><strong>Sacred Color(s)</strong> Blue, gold</p>
<h2 id="faith-areshkagal-demonicfiendish-obedience" data-hash-target>Demonic/Fiendish Obedience</h2>
<blockquote>
<p>Inscribe several of the 23 riddles of the flesh (an interlocked series of conundrums, the answer to which no mortal has achieved) on your own flesh with a tiny bone knife carved from a child's rib. Gain a +4 profane bonus on Will saving throws against sonic and language-dependant effects.</p>
</blockquote>
<h3 id="faith-areshkagal-boons-demonic-obedience">Boons: <Link to="/feat/demonic_obedience">Demonic Obedience</Link></h3>
<blockquote>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned___volume_2_lords_of_chaos">Book of the Damned - Volume 2: Lords of Chaos pg. 12</Link></p>
<ol>
<li><strong>Sphinx's Secret (Sp)</strong> <Link to="/spell/hold_portal">hold portal</Link> 3/day, <Link to="/spell/touch_of_idiocy">touch of idiocy</Link> 2/day, or <Link to="/spell/shrink_item">shrink item</Link> 1/day</li>
<li><strong>Portal Jump (Sp)</strong> Once per day as a swift action, you can step through one doorway, arch, or window and emerge from another at any point within 500 feet. This is a teleportation effect similar to <Link to="/spell/dimension_door">dimension door</Link>, but you do not become disoriented when you use this ability. This ability is the equivalent of a 7th-level spell.</li>
<li><strong>Create Portal (Sp)</strong> Once per day, you may use <Link to="/spell/gate">gate</Link> as a spell-like ability, but only to create a gate as a mode of planar travel, not as a method of calling creatures. This ability is the equivalent of a 9th-level spell.</li>
</ol>
</blockquote>
<h3 id="faith-areshkagal-boons-fiendish-obedience">Boons: <Link to="/feat/fiendish_obedience">Fiendish Obedience</Link></h3>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 24</Link></p>
<blockquote>
<h4 id="faith-areshkagal-boons-evangelist">Boons: Evangelist</h4>
<ol>
<li><strong>Twisted Riddles (Sp)</strong> <Link to="/spell/fumbletongue">fumbletongue</Link> 3/day, <Link to="/spell/foxs_cunning">fox's cunning</Link> 2/day, or <Link to="/spell/illusory_script">illusory script</Link> 1/day</li>
<li><strong>Maddening Enigma (Sp)</strong> Through your faith in the Faceless Sphinx, you are granted knowledge of three unsolvable riddles. Three times per day as a standard action, you can speak one of these riddles, though the riddles must be spoken in order. When spoken to a creature within 30 feet, the first unsolvable riddle you use in a day paralyzes the target as it searches for the answer; the creature must succeed at a Will save (DC = half your Hit Dice + your Charisma modifier) or be affected by <Link to="/spell/hold_monster">hold monster</Link>. The second unsolvable riddle is filled with subliminal messages; up to one creature for every 3 Hit Dice you have within 30 feet must succeed at a Will save (at the same DC as above) or be affected by a <Link to="/spell/suggestion">suggestion</Link> spell (with a suggestion of your choosing). The third unsolvable riddle uses such circuitous and warped logic that it shatters listeners' sanity; each creature within 60 feet must succeed at a Will save (using the same DC) or become <Link to="/misc/confused">confused</Link>. Worshipers of Areshkagal are immune to these effects.</li>
<li><strong>Faceless Mystery (Su)</strong> Areshkagal's form is the most sacred of shapes, and as one of her favored minions, you can adopt a similar form as your own. You gain the <Link to="/umr/change_shape">change shape</Link> universal monster ability, allowing you to assume the form of a <Link to="/family/sphinx">sphinx</Link> as per <Link to="/spell/beast_shape_iv">beast shape IV</Link>. In sphinx form, your face is eerily devoid of features (although they appear when you need them to eat, speak, make bite attacks, cast spells, and so on), and you gain <Link to="/umr/blindsight">blindsight</Link> to a range of 60 feet. You can activate this ability only once per day, but the new form lasts indefinitely. However, if you lose access to this boon by failing to perform your obedience, you cannot change forms or return to your true form until you perform the obedience again or the effect ends.</li>
</ol>
<h4 id="faith-areshkagal-boons-exalted">Boons: Exalted</h4>
<p>These boons are the same as those listed under Demonic Obedience.</p>
<h4 id="faith-areshkagal-boons-sentinel">Boons: Sentinel</h4>
<ol>
<li><strong>Gilded Arms (Sp)</strong> <Link to="/spell/magic_weapon">magic weapon</Link> 3/day, <Link to="/spell/spiritual_weapon">spiritual weapon</Link> 2/day, or <Link to="/spell/magic_vestment">magic vestment</Link> 1/day</li>
<li><strong>Auric Knight (Su)</strong> Your greed demands that you equip yourself with the purest form of wealth: gold. When you are wielding weapons or shields made purely of gold or wearing armor made purely of gold, that equipment is considered to have all the properties of <Link to="/eq-material/adamantine">adamantine</Link> instead of the properties of gold; weapons affected this way also count as both cold iron and silver for the purpose of bypassing damage reduction. While you wield a shield made purely of gold, any DR/- you gain from armor made purely of gold increases by 2. In addition, you gain a +2 bonus on attack and damage rolls with sickles made purely of gold.</li>
<li><strong>Avatars of Avarice (Sp)</strong> You can conjure the paragons of greed from the Blood Clefts to serve you... for a price. Once per day as a standard action, you can throw gold (as coins, bars, or another form) to the ground, whereupon it vanishes to Areshkagal's realm. For every 500 gp's worth of gold thrown down this way, a <Link to="/template/fiendish">fiendish</Link> <Link to="/monster/young_red_dragon">young red dragon</Link> appears to serve you, up to a maximum of three dragons per day. These dragons follow your commands perfectly for 1 minute per level before vanishing back to the Abyss.</li>
</ol>
</blockquote>
<h2 id="faith-areshkagal-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-areshkagal-feats">Feats</h3>
<ul>
<li><Link to="/feat/channel_discord">Channel Discord</Link></li>
</ul>
<h3 id="faith-areshkagal-magic-items---wondrous-items">Magic Items - Wondrous Items</h3>
<ul>
<li><Link to="/magic-wondrous/dagons_eye">Dagon's Eye</Link></li>
</ul>
<h3 id="faith-areshkagal-traits">Traits</h3>
<ul>
<li><Link to="/trait/demonic_persuasion">Demonic Persuasion</Link></li>
</ul>
</blockquote>
<h2 id="faith-areshkagal-description" data-hash-target>Description</h2>
<blockquote>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 25</Link><br/>Areshkagal appears as a faceless female sphinx with six legs, blue fur, and pale flesh the color of old ashes. Her wings are draconic and her tail is a hissing viper, from whose mouth she whispers her unfair riddles to those she captures. Rumors hold that her actual face is too hideous for even the Abyss to bear, but that for brief moments she can reveal its true appearance to drive viewers insane, strike them dead, or worse.</p>
</blockquote>
<p>Similarities between Areshkagal's form of a faceless sphinx and the appearance of one of the avatars of the Outer God <Link to="/faith/nyarlathotep_faceless_sphinx">Nyarlathotep</Link> have long intrigued scholars, and many have tried to discover whether an actual link exists between the demon lord and the Outer God. To date, no such connection has been discovered, yet scholars have not been dissuaded. The fact that both entities revel in trickery and deception cannot be ignored, and it may well be that Areshkagal, in her former mortal life, knew of or even worshiped Nyarlathotep and chose her form as a demon lord in a deliberate attempt to sow confusion or as an unusual display (for a demon lord) of admiration and reverence to the Outer God. Certainly, the cults of Areshkagal and Nyarlathotep seem to get along well when they meet, and trades of secret magical rites or strange rituals between the two are not unheard of. Their cults have always taken care to avoid claiming territory known to belong to the other - though whether this is out of mutual respect or unwillingness to tolerate each other's presence and influence is unclear.</p>
</>};
const _arlachramas = {hasJL:true,title: "Arlachramas", jsx: <><div className="jumpList" id="faith-arlachramas-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-arlachramas-fiendish-obedience">Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-arlachramas-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Arlachramas</div><div className="sub">The Silent Breath</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 318</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Arlachramas">Arlachramas</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-arlachramas-details">Details</h3>
<p><strong>Alignment</strong> NE<br/><strong>Pantheon</strong> Daemon Harbingers<br/><strong>Areas of Concern</strong> Dehumanization, disposal, euthanasia<br/><strong>Domains</strong> <Link to="/domain/community">Community</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/strength">Strength</Link><br/><strong>Subdomains</strong> <Link to="/domain/daemon">Daemon</Link>, <Link to="/domain/murder">Murder</Link>, <Link to="/domain/resolve">Resolve</Link>, <Link to="/domain/undead">Undead</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/warhammer">Warhammer</Link><br/><strong>Symbol</strong> Bloody empty cradle<br/><strong>Sacred Animal(s)</strong> None<br/><strong>Sacred Color(s)</strong> Blue, pink</p>
<h2 id="faith-arlachramas-fiendish-obedience" data-hash-target><Link to="/feat/fiendish_obedience">Fiendish Obedience</Link></h2>
<blockquote>
<p>Pray over the body of one who died of sickness. Gain a +4 profane bonus on saving throws against death effects.</p>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 115</Link><br/>Abaddon's unique <Link to="/family/daemon">daemons</Link> take on a host of titles, customized to their methods and vanity. These harbingers enjoy sweeping influence among daemons as favored advisors, and they work to cultivate their own cults on Abaddon and beyond.</p>
<p>Daemon harbingers are neutral evil demigods that range in power from CR 21 to CR 25. The boons they grant are less complex than those granted by the Horsemen themselves, manifesting as spell-like abilities usable twice per day each.</p>
<ol>
<li><Link to="/spell/death_knell">death knell</Link></li>
<li><Link to="/spell/crushing_despair">crushing despair</Link></li>
<li><Link to="/spell/harm">harm</Link></li>
</ol>
</blockquote>
<h2 id="faith-arlachramas-description" data-hash-target>Description</h2>
<p>Arlachramas, the Silent Breath, rules a domain surrounded by the River Styx. She takes the form of a humanoid composed of slowly condensing and evaporating blood and acid.</p>
</>};
const _aroden = {hasJL:true,title: "Aroden", jsx: <><div className="jumpList" id="faith-aroden-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-aroden-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-aroden-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Aroden</div><div className="sub">The Last Azlanti</div></div>
<p><strong>Sources</strong> <Link to="/source/pathfinder_100_a_song_of_silver">Pathfinder #100: A Song of Silver pg. 70</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Aroden">Aroden</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-aroden-details">Details</h3>
<p><strong>Alignment</strong> LN<br/><strong>Pantheon</strong> Dead Deities<br/><strong>Areas of Concern</strong> Humanity, innovation, history, culture, and fulfillment of destiny<br/><strong>Domains</strong> <Link to="/domain/community">Community</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link><br/><strong>Subdomains</strong> N/A<br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/longsword">Longsword</Link><br/><strong>Symbol</strong> An unblinking divine eye balanced between earth and the heavens</p>
<h3 id="faith-aroden-on-golarion">On Golarion</h3>
<p><strong>Centers of Worship</strong> Absalom, Cheliax, Taldor, Sargava, Molthune, Nirmathas, Lastwall, Varisia<br/><strong>Nationality</strong> Azlanti</p>
<h2 id="faith-aroden-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-aroden-magic-items---sets">Magic Items - Sets</h3>
<ul>
<li><Link to="/magic-set/arodens_array">Aroden's Array</Link></li>
</ul>
<h3 id="faith-aroden-traits">Traits</h3>
<ul>
<li><Link to="/trait/devotee_of_a_dead_god">Devotee of a Dead God</Link></li>
<li><Link to="/trait/faithful_arodenite">Faithful Arodenite</Link></li>
</ul>
</blockquote>
<h2 id="faith-aroden-description" data-hash-target>Description</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_100_a_song_of_silver">Pathfinder #100: A Song of Silver pg. 69</Link><br/>Twelve centuries after helping to create the nation of Taldor as a symbol of human ambition, Aroden achieved realization as the prophesied Last Azlanti by raising the Starstone from the depths of the Inner Sea. A single touch pulled Aroden into the alien artifact, wherein he experienced a series of phantasmagoric scenes that presented lethal martial trials and exhausting moral quandaries that challenged Aroden's physical, mental, and spiritual limits more than any of the arduous experiences he had survived thus far. Aroden emerged from this experience a living god, and upon the enormous island he had dredged up with the Starstone he founded the city of Absalom: a shining beacon to attract the greatest artists, poets, architects, and mystics from all of humanity's young kingdoms. At long last, Aroden's devoted followers were rewarded with fantastic abilities derived from the god's newfound divinity, and his cause became a full-fledged religion.</p>
<p>Some two thousand years later, Aroden was so far removed from the day-to-day events of the world that he chose not to intervene when Tar-Baphon returned as the undead <Link to="/monster/the_whispering_tyrant">Whispering Tyrant</Link>. Instead, he left the matter to his divine herald <Link to="/faith/arazni">Arazni</Link>, patroness of the Knights of Ozem, with disastrous results. By the time the mortal leader of the knights, <Link to="/faith/iomedae">Iomedae</Link>, took the Test of the Starstone and replaced Arazni as Aroden's herald, many of Aroden's faithful began to doubt that he would ever again walk upon Golarion in person. If the Whispering Tyrant could not draw Aroden back from his seclusion in the Great Beyond, what could?</p>
<p>Early in the Age of Enthronement's fifth millennium, Cheliax broke free from the increasingly decadent Taldor, taking the center of Aroden's faith with it. Chelish fanatics turned with increasing zeal to the ancient Starfall Doctrine, identifying the capital city of Westcrown as the likeliest place for Aroden's return to usher in the prophesied Age of Glory, which was to begin in 4606 AR. When Aroden returned to personally drive the demon lord Deskari into the Lake of Mists and Veils in 4433 AR, the zealots' conviction took on an air of inevitability, and Aroden's faith spread throughout the new empire, eclipsing every other human religion. When the appointed hour arrived, the Chelish emperor stood beside Aroden's patriarch at the heart of Westcrown, eager to greet their patron and celebrate his return and the birth of a new Age of Glory.</p>
<p>Instead, the skies darkened with violent storms that lasted weeks, plunging the whole world into tumult and throwing Cheliax into open revolution. By the time devil-worshipers finally quelled the fighting and took control of the empire, Aroden was well and truly slain, his clergy left powerless and confused. Even prophecy itself - the force that had defined Aroden's life and spurred his personal accomplishments and ambitions - no longer functioned as once it had. The future of humanity was again completely unknown, and the world found itself thrown into the uncertainty of the Age of Lost Omens.</p>
</>};
const _aroggus = {hasJL:true,title: "Aroggus", jsx: <><div className="jumpList" id="faith-aroggus-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-aroggus-fiendish-obedience">Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-aroggus-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Aroggus</div><div className="sub">The Abbey Maker</div></div>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 120</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Aroggus">Aroggus</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-aroggus-details">Details</h3>
<p><strong>Alignment</strong> LE<br/><strong>Pantheon</strong> Kyton Demagogues<br/><strong>Areas of Concern</strong> Possibility, revenge, sanctuary<br/><strong>Domains</strong> <Link to="/domain/evil">Evil</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/trickery">Trickery</Link><br/><strong>Subdomains</strong> <Link to="/domain/deception">Deception</Link>, <Link to="/domain/defense">Defense</Link>, <Link to="/domain/fear">Fear</Link>, <Link to="/domain/tyranny">Tyranny</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/warhammer">Warhammer</Link></p>
<h2 id="faith-aroggus-fiendish-obedience" data-hash-target><Link to="/feat/fiendish_obedience">Fiendish Obedience</Link></h2>
<blockquote>
<p>List the names of those who have wronged you until the writing covers a page, then consume the parchment. Gain a +4 profane bonus on saving throws to resist compulsion effects.</p>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 121</Link><br/>The principals of the <Link to="/family/kyton">kyton</Link> race number among the planes' most audacious explorers, artistes, and scientists. Constrained by neither morals nor taboos, kyton demagogues pursue perfection in myriad profane fields. Lost limbs and lives mean little to the kyton demagogue - only the next boundary to shatter and the promise of what could be. The kyton demagogues are legion, but nine of those best known to Golarion's cultic scholars are presented here.</p>
<p>Kyton demagogues are far less likely than other fiendish demigods to flaunt their power. All kyton demagogues are lawful evil and range in power from CR 26 to CR 30. The boons they grant are less complex than those granted by other fiendish demigods, manifesting as spell-like abilities each usable once per day.</p>
<ol>
<li><Link to="/spell/nondetection">nondetection</Link></li>
<li><Link to="/spell/forcecage">forcecage</Link></li>
<li><Link to="/spell/imprisonment">imprisonment</Link></li>
</ol>
</blockquote>
<h2 id="faith-aroggus-description" data-hash-target>Description</h2>
<p>Following <Link to="/faith/geryon">Geryon's</Link> betrayal, Aroggus was one of the elder kytons who led his people from Hell into the darkness of the Plane of Shadow. There he raised the Abbey of Nevers, a half-physical kaleidoscope of impossibilities where the kytons could hide forever if necessary. In the ages since, the Abbey Maker has become one with his refuge, indulging his victims, his followers, and himself in inescapable delusions of retribution, ever perfecting the one true revenge.</p>
</>};
const _arqueros = {hasJL:true,title: "Arqueros", jsx: <><div className="jumpList" id="faith-arqueros-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-arqueros-celestial-obedience">Celestial Obedience</InnerLink></li><li><InnerLink toTop to="faith-arqueros-paladin-code">Paladin Code</InnerLink></li><li><InnerLink toTop to="faith-arqueros-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-arqueros-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Arqueros</div><div className="sub">The Golden Bulwark</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 322</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Arqueros">Arqueros</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-arqueros-details">Details</h3>
<p><strong>Alignment</strong> LG<br/><strong>Pantheon</strong> Empyreal Lords<br/><strong>Areas of Concern</strong> Bodyguards, protection, watchfulness<br/><strong>Domains</strong> <Link to="/domain/good">Good</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/war">War</Link><br/><strong>Subdomains</strong> <Link to="/domain/good">Archon (Good)</Link>, <Link to="/domain/law">Archon (Law)</Link>, <Link to="/domain/cooperation">Cooperation</Link>, <Link to="/domain/defense">Defense</Link>, <Link to="/domain/fortifications">Fortifications</Link>, <Link to="/domain/tactics">Tactics</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/longspear">Longspear</Link><br/><strong>Symbol</strong> Gauntlet and briars<br/><strong>Sacred Animal(s)</strong> Golden eagle<br/><strong>Sacred Color(s)</strong> Gold, purple</p>
<h2 id="faith-arqueros-celestial-obedience" data-hash-target><Link to="/feat/celestial_obedience">Celestial Obedience</Link></h2>
<blockquote>
<p>Pray while holding a heavy shield over your head for an hour. Gain a +4 sacred bonus on Strength checks and Strength-based skill checks.</p>
<h3 id="faith-arqueros-mystery-cultist">Mystery Cultist</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_the_righteous">Chronicle of the Righteous pg. 6</Link></p>
<ol>
<li><strong>Divine Defense (Sp)</strong> <Link to="/spell/shield_of_faith">shield of faith</Link> 3/day, <Link to="/spell/shield_other">shield other</Link> 2/day, or <Link to="/spell/magic_vestment">magic vestment</Link> 1/day</li>
<li><strong>Greaves of Gold (Su)</strong> You gain a +10 sacred bonus to your CMD when an opponent attempts to <Link to="/rule/bull_rush">bull rush</Link> you. You may always attempt attacks of opportunity when a creature attempts to bull rush you, even if your opponent has the <Link to="/feat/improved_bull_rush">Improved Bull Rush</Link> feat or a similar ability. In addition, you may attempt an attack of opportunity whenever a charging opponent enters a space you threaten.</li>
<li><strong>Living Aurum (Sp)</strong> You can cast <Link to="/spell/iron_body">iron body</Link> once per day. Instead of iron, though, your body is transformed into living gold. In addition, you gain SR equal to 11 + your HD against spells cast by evil creatures while under the effect of this spell-like ability.</li>
</ol>
</blockquote>
<h2 id="faith-arqueros-paladin-code" data-hash-target>Paladin Code</h2>
<blockquote>
<p>The paladins of Arqueros are defense-oriented generals and bodyguards of virtuous public figures and honorable clients. Their tenets include the following affirmations.</p>
<ul>
<li>I will never abandon an innocent in need of protection.</li>
<li>The role of guardian is a sacred one. I will never neglect my duties when I agree to guard or protect others, even if they seem unworthy of my protection.</li>
<li>A guardian is only as effective as his weapons and armor. I will maintain mine in peak condition at all times, repairing and cleaning them as consistently as possible without neglecting my charge.</li>
</ul>
</blockquote>
<h2 id="faith-arqueros-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-arqueros-feats">Feats</h3>
<ul>
<li><Link to="/feat/heroic_interposition">Heroic Interposition</Link></li>
</ul>
<h3 id="faith-arqueros-traits">Traits</h3>
<ul>
<li><Link to="/trait/empyreal_focus">Empyreal Focus</Link></li>
<li><Link to="/trait/eye_of_arqueros">Eye of Arqueros</Link></li>
<li><Link to="/trait/living_bulwark">Living Bulwark</Link></li>
</ul>
</blockquote>
<h2 id="faith-arqueros-description" data-hash-target>Description</h2>
<p>Arqueros protects his charges against corruption and evil, providing a testament to what the stalwart can accomplish. He stands 12 feet tall, and even while completely stationary (as he often is while at rest) he is a spectacle to behold; clad in gleaming golden armor, one gauntleted hand always gripping a diamond-bladed longspear, the Golden Bulwark is a continual inspiration to the shield archons who serve him. The ground trembles where Arqueros treads and legend tells that not even <Link to="/faith/baphomet">Baphomet's</Link> charge could move the mighty empyreal lord.</p>
<p>Many seek the protection of the Golden Bulwark, but only a chosen few earn his measured attention. It's not always clear why the Golden Bulwark takes on a particular charge, but when he does, he protects this chosen individual with all the power at his disposal, sending legions of his celestial minions to the aid of those who cannot stand for themselves. Only rarely does Arqueros himself appear to protect these chosen devotees; his sacred duty prevents him from leaving the Prime Vallation among the lowest slopes of Heaven except under the direst of circumstances. Bodyguards, guards, and children's guardians - as well as soldiers and civic leaders during a time of war - frequently pay homage to Arqueros.</p>
</>};
const _arshea = {hasJL:true,title: "Arshea", jsx: <><div className="jumpList" id="faith-arshea-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-arshea-celestial-obedience">Celestial Obedience</InnerLink></li><li><InnerLink toTop to="faith-arshea-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-arshea-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Arshea</div><div className="sub">Spirit of Abandon</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 322</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Arshea">Arshea</a> <em>(link opens in outside browser)</em><br/><strong>Monster Link</strong> <Link to="/monster/arshea">Arshea</Link></p>
<h3 id="faith-arshea-details">Details</h3>
<p><strong>Alignment</strong> NG<br/><strong>Pantheon</strong> Empyreal Lords<br/><strong>Areas of Concern</strong> Freedom, physical beauty, sexuality<br/><strong>Domains</strong> <Link to="/domain/charm">Charm</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/strength">Strength</Link><br/><strong>Subdomains</strong> <Link to="/domain/agathion">Agathion</Link>, <Link to="/domain/freedom">Freedom</Link>, <Link to="/domain/love">Love</Link>, <Link to="/domain/lust">Lust</Link>, <Link to="/domain/liberation">Self-Realization (Liberation)</Link><sup><InnerLink showBacklink="backlink-faith-arshea-ref-A-1" id="faith-arshea-ref-A-1" data-hash-target to="faith-arshea-A">1</InnerLink></sup>, <Link to="/domain/strength">Self-Realization (Strength)</Link><sup><InnerLink showBacklink="backlink-faith-arshea-ref-A-2" id="faith-arshea-ref-A-2" data-hash-target to="faith-arshea-A">1</InnerLink></sup><br/><strong>Inquisitions</strong> <Link to="/inquisition/seduction">Seduction</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/light_flail">Flail</Link><br/><strong>Symbol</strong> Figure with colorful sashes<br/><strong>Sacred Animal(s)</strong> Swan<br/><strong>Sacred Color(s)</strong> Purple, white</p>
<h2 id="faith-arshea-celestial-obedience" data-hash-target><Link to="/feat/celestial_obedience">Celestial Obedience</Link></h2>
<blockquote>
<p>Achieve sexual release by yourself or with one or more partners. Praise the most beautiful aspects of yourself and any partners aloud, and offer a prayer to Arshea while still naked. Gain a +4 sacred bonus on Charisma checks and Charisma-based skill checks when interacting with an intelligent creature who could be sexually attracted to you.</p>
<h3 id="faith-arshea-mystery-cultist">Mystery Cultist</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_the_righteous">Chronicle of the Righteous pg. 7</Link></p>
<ol>
<li><strong>Arshea's Charmer (Sp)</strong> <Link to="/spell/disguise_self">disguise self</Link> 3/day, <Link to="/spell/mirror_image">mirror image</Link> 2/day, or <Link to="/spell/charm_monster">charm monster</Link> 1/day</li>
<li><strong>Flawless Form (Su)</strong> Gain an armor bonus equal to your Charisma modifier (minimum +1) whenever you wear revealing clothing and no armor.</li>
<li><strong>Liberation (Sp)</strong> You can cast <Link to="/spell/freedom">freedom</Link> once per day.</li>
</ol>
</blockquote>
<h2 id="faith-arshea-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-arshea-feats">Feats</h3>
<ul>
<li><Link to="/feat/heroic_interposition">Heroic Interposition</Link></li>
</ul>
<h3 id="faith-arshea-traits">Traits</h3>
<ul>
<li><Link to="/trait/empyreal_focus">Empyreal Focus</Link></li>
</ul>
</blockquote>
<h2 id="faith-arshea-description" data-hash-target>Description</h2>
<p>Arshea inspires passion and comforts the repressed, and perhaps no empyreal lord is rendered in art as often as the Spirit of Abandon.</p>
<p>Arshea's form suggests the best traits of both the masculine and the feminine. The empyreal lord's lithe body is physically ideal with a flawless combination of lean muscles and soft curves. The Spirit of Abandon's face is a study in perfection, and some claim that those who look directly on the being's countenance can never be satisfied with mortal beauty again. Gossamer clothes constantly swirl around Arshea's form, alternately hiding and revealing the empyreal lord's androgynous form, and Arshea's gray and blue wings flutter gracefully as though part of an eternal dance.</p>
<section data-footnotes>
<h3 id="faith-arshea-label">Footnotes</h3>
<ol>
<li id="faith-arshea-A">
<p>Requires the <Link to="/trait/acolyte_of_apocrypha">Acolyte of Apocrypha</Link> trait. <InnerLink id="backlink-faith-arshea-ref-A-1" data-hash-target to="faith-arshea-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink> <InnerLink id="backlink-faith-arshea-ref-A-2" data-hash-target to="faith-arshea-ref-A-2" aria-label="Back to reference A-2">↩<sup>2</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _ashava = {hasJL:true,title: "Ashava", jsx: <><div className="jumpList" id="faith-ashava-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-ashava-celestialdeific-obedience">Celestial/Deific Obedience</InnerLink></li><li><InnerLink toTop to="faith-ashava-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-ashava-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Ashava</div><div className="sub">True Spark</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 322</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Ashava">Ashava</a> <em>(link opens in outside browser)</em><br/><strong>Monster Link</strong> <Link to="/monster/ashava">Ashava</Link></p>
<h3 id="faith-ashava-details">Details</h3>
<p><strong>Alignment</strong> CG<br/><strong>Pantheon</strong> Empyreal Lords<br/><strong>Areas of Concern</strong> Dancers, lonely spirits, moonlight<br/><strong>Domains</strong> <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/good">Good</Link>, <Link to="/domain/repose">Repose</Link><br/><strong>Subdomains</strong> <Link to="/domain/ancestors">Ancestors</Link>, <Link to="/domain/chaos">Azata (Chaos)</Link>, <Link to="/domain/good">Azata (Good)</Link>, <Link to="/domain/moon">Moon</Link>, <Link to="/domain/revelry">Revelry</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/bladed_scarf">Bladed scarf</Link><br/><strong>Symbol</strong> Dancing woman and moon<br/><strong>Sacred Animal(s)</strong> Wolf<br/><strong>Sacred Color(s)</strong> Midnight blue, silver</p>
<h2 id="faith-ashava-celestialdeific-obedience" data-hash-target>Celestial/Deific Obedience</h2>
<blockquote>
<p>Dance in an isolated place under the light of the moon. If no moonlight is available or if someone witnesses your dance, pray for the spirits of the lonely dead and then leave a lighted lantern in a dark area. Gain a +4 sacred bonus on saving throws against spells and effects cast by undead.</p>
</blockquote>
<h3 id="faith-ashava-boons-celestial-obedience">Boons: <Link to="/feat/celestial_obedience">Celestial Obedience</Link></h3>
<blockquote>
<h4 id="faith-ashava-mystery-cultist">Mystery Cultist</h4>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_the_righteous">Chronicle of the Righteous pg. 8</Link></p>
<ol>
<li><strong>Lunar Dancer (Sp)</strong> <Link to="/spell/faerie_fire">faerie fire</Link> 3/day, <Link to="/spell/cats_grace">cat's grace</Link> 2/day, or <Link to="/spell/daylight">daylight</Link> 1/day (visible effect is moonlight)</li>
<li><strong>Moonlight (Sp)</strong> You can cast an <Link to="/feat/enlarged">enlarged</Link> <Link to="/spell/sunbeam">sunbeam</Link> once per day. The visible effect is a beam of brilliant silver moonlight, but the spell's effects are unchanged.</li>
<li><strong>Compelling Dance (Sp)</strong> You can cast <Link to="/spell/irresistible_dance">irresistible dance</Link> once per day. If you cast this spell-like ability on a willing creature, the target is affected normally by the spell but also gains a +4 sacred bonus on Dexterity checks, Dexterity-based skill checks, and Reflex saves for 24 hours after the effect's initial duration ends.</li>
</ol>
</blockquote>
<h3 id="faith-ashava-boons-deific-obedience">Boons: <Link to="/feat/deific_obedience">Deific Obedience</Link></h3>
<blockquote>
<h4 id="faith-ashava-boons-evangelist">Boons: Evangelist</h4>
<p><strong>Sources</strong> <Link to="/source/pathfinder_134_it_came_from_hollow_mountain">Pathfinder #134: It Came from Hollow Mountain pg. 73</Link></p>
<ol>
<li><strong>Celestial Guide (Sp)</strong> <Link to="/spell/bless">bless</Link> 3/day, <Link to="/spell/augury">augury</Link> 2/day, or <Link to="/spell/guiding_star">guiding star</Link> 1/day</li>
<li><strong>Touch of Freedom (Su)</strong> As a standard action, you can touch an ally to grant it the benefits of the <Link to="/spell/freedom_of_movement">freedom of movement</Link> spell until the beginning of your next turn. While under this effect, the target gains a +10-foot enhancement bonus to her base speed when taking the withdraw action and can, as an immediate action when she fails a saving throw against a charm or compulsion effect, reroll that saving throw. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.</li>
<li><strong>Navigator Wisp (Sp)</strong> Once per day, you can cast an <Link to="/feat/extended">extended</Link> <Link to="/spell/find_the_path">find the path</Link> on yourself with a caster level equal to your character level. The effect of the spell manifests as a mote of light that is visible to only you. If the route would take you through dangerous territory (such as a river with a very strong current or a hidden pit of acid), the wisp glows yellow. If the route would take you past hidden creatures, the wisp flashes red, giving you a +10 circumstance bonus on Perception checks to notice them.</li>
</ol>
<h4 id="faith-ashava-boons-exalted">Boons: Exalted</h4>
<p><strong>Sources</strong> <Link to="/source/pathfinder_134_it_came_from_hollow_mountain">Pathfinder #134: It Came from Hollow Mountain pg. 73</Link></p>
<ol>
<li><strong>Moonlight Caller (Sp)</strong> <Link to="/spell/faerie_fire">faerie fire</Link> 3/day, <Link to="/spell/glitterdust">glitterdust</Link> 2/day, or <Link to="/spell/daylight">daylight</Link> 1/day (visible effect is moonlight)</li>
<li><strong>Lunar Frenzy (Sp)</strong> Three times per day, you can cast <Link to="/spell/moonstruck">moonstruck</Link> with a caster level equal to your character level. You can choose to have the target affected by <Link to="/spell/haste">haste</Link> rather than <Link to="/spell/confusion">confusion</Link>; you make this choice each time you use this ability.</li>
<li><strong>Moon's Blessing (Sp)</strong> Once per day, you can cast <Link to="/spell/divine_vessel">divine vessel</Link> with a caster level equal to your character level. You can choose only the celestial aspect, and you take on the form of a large, winged wolf made of glowing moonlight. Instead of 2 slam attacks, you gain a bite attack dealing 2d6 points of damage.</li>
</ol>
<h4 id="faith-ashava-boons-sentinel">Boons: Sentinel</h4>
<p><strong>Sources</strong> <Link to="/source/pathfinder_134_it_came_from_hollow_mountain">Pathfinder #134: It Came from Hollow Mountain pg. 73</Link></p>
<ol>
<li><strong>Gravekeeper (Sp)</strong> <Link to="/spell/hide_from_undead">hide from undead</Link> 3/day, <Link to="/spell/calm_spirit">calm spirit</Link> 2/day, or <Link to="/spell/searing_light">searing light</Link> 1/day (the visible effect of the spell is a ray of moonlight)</li>
<li><strong>Choreography of the Night (Su)</strong> When the night sky is visible to you, you gain +4 sacred bonus on initiative checks, a +2 sacred bonus on Acrobatics and Escape Artist checks, and a +1 dodge bonus to Armor Class and on Reflex saving throws. In addition, you can take 5-foot steps in <Link to="/rule/difficult_terrain">difficult terrain</Link>. Finally, you gain <Link to="/ability/uncanny_dodge">uncanny dodge</Link> (as the rogue class feature). If you already have uncanny dodge, you gain <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> instead. If you already have improved uncanny dodge, the minimum rogue level required to flank you increases by 1 instead.</li>
<li><strong>The Dance in All Things (Sp)</strong> Once per day, you can cast <Link to="/spell/animate_objects">animate objects</Link> with a caster level equal to your character level. Objects you animate with this ability gain the benefits of a <em>haste</em> spell for as long as they are animated, and their natural attacks count as good and silver for the purpose of overcoming damage reduction.</li>
</ol>
</blockquote>
<h2 id="faith-ashava-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-ashava-feats">Feats</h3>
<ul>
<li><Link to="/feat/ghost_whisperer">Ghost Whisperer</Link></li>
<li><Link to="/feat/heroic_interposition">Heroic Interposition</Link></li>
</ul>
<h3 id="faith-ashava-magic-items---weapons">Magic Items - Weapons</h3>
<ul>
<li><Link to="/magic-weapon/channelers_scarf">Channeler's Scarf</Link></li>
</ul>
<h3 id="faith-ashava-prestige-classes">Prestige Classes</h3>
<ul>
<li><Link to="/pclass/ashavic_dancer">Ashavic Dancer</Link></li>
</ul>
<h3 id="faith-ashava-spells">Spells</h3>
<ul>
<li><Link to="/spell/alluring_light">Alluring Light</Link></li>
<li><Link to="/spell/moonrise_arrow">Moonrise Arrow</Link></li>
</ul>
<h3 id="faith-ashava-traits">Traits</h3>
<ul>
<li><Link to="/trait/empyreal_focus">Empyreal Focus</Link></li>
</ul>
<h3 id="faith-ashava-unique-spell-rules">Unique Spell Rules</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_134_it_came_from_hollow_mountain">Pathfinder #134: It Came from Hollow Mountain pg. 72</Link></p>
<h4 id="faith-ashava-cleric-warpriest">Cleric, Warpriest</h4>
<ul>
<li><Link to="/spell/dancing_lights">Dancing Lights</Link> can be prepared as a 0-level spell</li>
<li><Link to="/spell/flare_burst">Flare Burst</Link> can be prepared as a 1st-level spell</li>
<li><Link to="/spell/wandering_star_motes">Wandering Star Motes</Link> can be prepared as a 4th-level spell</li>
</ul>
<h3 id="faith-ashava-unique-summon-rules">Unique Summon Rules</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_134_it_came_from_hollow_mountain">Pathfinder #134: It Came from Hollow Mountain pg. 73</Link></p>
<ul>
<li><strong className="hl"><Link to="/spell/summon_monster_iv">Summon Monster IV:</Link></strong> <Link to="/template/celestial">Celestial</Link> <Link to="/monster/pegasus">Pegasus</Link></li>
<li><strong className="hl"><Link to="/spell/summon_monster_v">Summon Monster V:</Link></strong> <Link to="/monster/lunar_naga">Lunar Naga</Link></li>
</ul>
</blockquote>
<h2 id="faith-ashava-description" data-hash-target>Description</h2>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_the_righteous">Chronicle of the Righteous pg. 8</Link><br/>Legend tells that benevolent marsh lights, used for guiding lost travelers to safety, danced in Elysium for countless millennia before one night coalescing into the graceful form of Ashava. Now the empyreal lord known as the True Spark dances in dangerous wilderness and lonely graveyards alike, leading lost spirits home.</p>
<p>Ashava's every motion is light and unfettered; she moves like the wild wind across the plains. She stands 7 feet tall, and her olive skin holds a perpetual flush, as if she has been dancing outdoors for some time. Ashava's form is always obscured by shadows in the light; her features only shine clearly beneath the luminous moon. She wears a gown woven of starlight, and a wreath of colorful moss encircles her dark brow.</p>
<p>When individuals die violently or unexpectedly, their spirits can become lost. Lonely ghosts and confused spectres become hypnotized by Ashava's dance and follow her as she leads them to their peaceful graves. Those who watch over dangerous areas where travelers can lose their way pray to Ashava for the safety of their guests.</p>
<p>Ashava despises <Link to="/monster/will_o_wisp">will-o'-wisps</Link> and goes out of her way to destroy the foul creatures. When not guiding spirits, Ashava lives in the moonlight of the Sparkling Fens on Elysium, at the base of the Mountain of Lingering Soulsong.</p>
</>};
const _ashukharma = {hasJL:true,title: "Ashukharma", jsx: <><div className="jumpList" id="faith-ashukharma-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-ashukharma-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Ashukharma</div><div className="sub">The Divine Divide</div></div>
<p><strong>Sources</strong> <Link to="/source/distant_shores">Distant Shores pg. 42</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Ashukharma">Ashukharma</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-ashukharma-details">Details</h3>
<p><strong>Alignment</strong> CN<br/><strong>Pantheon</strong> Other Deities<br/><strong>Areas of Concern</strong> Canyons, cliffs, gorges, and ravines<br/><strong>Domains</strong> <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/strength">Strength</Link><br/><strong>Subdomains</strong> <Link to="/domain/caves">Caves</Link>, <Link to="/domain/defense">Defense</Link>, <Link to="/domain/entropy">Entropy</Link>, <Link to="/domain/resolve">Resolve</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/greatsword">Greatsword</Link><br/><strong>Symbol</strong> A deep, jagged gorge in dry earth<br/><strong>Sacred Animal(s)</strong> Goat</p>
<h3 id="faith-ashukharma-on-golarion">On Golarion</h3>
<p><strong>Centers of Worship</strong> Radripal<br/><strong>Nationality</strong> Vudra</p>
<h2 id="faith-ashukharma-description" data-hash-target>Description</h2>
<p>Ashukharma is the goddess of canyons, gorges, and ravines, and is often seen as a divisive force - her canyons hinder travel, form boundaries between nations, and pose serious threats to those who attempt to navigate their steep sides. At the same time, she's also a protector, for those same ravines can be used as natural defenses against enemies and dangerous beasts. Ashukharma's worshipers venerate both of the goddess's aspects, recognizing that they are not opposed, nor even two sides of the same coin, but simply the same principle used in different ways.</p>
<p>The Azvadeva Pujila tells of Ashukharma's battles with her former lover Dinehdal, god of mountain peaks. Spurned when he chose the trio of goddesses known as the Cloud Sisters over her, Ashukharma vowed to travel as far from Dinehdal as possible. Thus she walked the earth as a mortal, leaving a trail of crevasses in her wake, marring the very mountains atop which Dinehdal found his solace. When Ashukharma reached the bank of the mighty Matra River, she found the waterway's patron, <Link to="/faith/matravash">Matravash</Link>, beset by <Link to="/faith/gavidya">Gavidya</Link> the Numberless, an asura rana who took the form of a seemingly endless host of foul creatures. Overwhelmed by Gavidya's power, Matravash pled for aid from Ashukharma. The Divine Divide assented and formed steep walls around Matravash to protect her. Together the goddesses drove the asura rana back into Hell. In so doing, Ashukharma found the wounds on her heart healed, and she took the river as her new lover, thanking Matravash for showing her that Dinehdal's betrayal did not mean the end of love.</p>
<p>Scorned lovers, or those who feel a rift forming between themselves and friends or family, also commonly pray to the Divine Divide, in the hopes that they can safely weather the dangerous emotional terrain through which their life path leads them. Members of Matravash's cult also hold Ashukharma in particular reverence, even along the long stretches of the river that do not flow through a canyon. Prayers to Ashukharma often involve contemplation on the palms of the hand, as followers believe that the creases and lines therein hold signs from the goddess - miniature canyons formed through the toil of daily life yet capable of serving those who know how to read their meaning.</p>
</>};
const _asmodeus = {hasJL:true,title: "Asmodeus", jsx: <><div className="jumpList" id="faith-asmodeus-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-asmodeus-divine-gift">Divine Gift</InnerLink></li><li><InnerLink toTop to="faith-asmodeus-deificfiendish-obedience">Deific/Fiendish Obedience</InnerLink></li><li><InnerLink toTop to="faith-asmodeus-divine-fighting-technique">Divine Fighting Technique</InnerLink></li><li><InnerLink toTop to="faith-asmodeus-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-asmodeus-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Asmodeus</div><div className="sub">Prince of Darkness</div></div>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 20</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Asmodeus">Asmodeus</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-asmodeus-details">Details</h3>
<p><strong>Alignment</strong> LE<br/><strong>Pantheon</strong> Core Deities<br/><strong>Other Pantheons</strong> Archdevils, Kobold Deities, Order of the God Claw Pantheon<br/><strong>Areas of Concern</strong> Contracts, pride, slavery, tyranny<br/><strong>Domains</strong> <Link to="/domain/evil">Evil</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/trickery">Trickery</Link><br/><strong>Subdomains</strong> <Link to="/domain/arcane">Arcane</Link>, <Link to="/domain/ash">Ash</Link>, <Link to="/domain/corruption">Corruption</Link>, <Link to="/domain/deception">Deception</Link>, <Link to="/domain/evil">Devil (Evil)</Link>, <Link to="/domain/law">Devil (Law)</Link>, <Link to="/domain/divine">Divine</Link>, <Link to="/domain/greed">Greed</Link>, <Link to="/domain/law">Legislation (Law)</Link>, <Link to="/domain/rites">Rites</Link><sup><InnerLink showBacklink="backlink-faith-asmodeus-ref-A-1" id="faith-asmodeus-ref-A-1" data-hash-target to="faith-asmodeus-A">1</InnerLink></sup>, <Link to="/domain/smoke">Smoke</Link>, <Link to="/domain/sovereignty">Sovereignty</Link><br/><strong>Inquisitions</strong> <Link to="/inquisition/damnation">Damnation</Link>, <Link to="/inquisition/heresy">Heresy</Link>, <Link to="/inquisition/imprisonment">Imprisonment</Link>, <Link to="/inquisition/persistence">Persistence</Link>, <Link to="/inquisition/politics">Politics</Link>, <Link to="/inquisition/sin">Sin</Link>, <Link to="/inquisition/torture">Torture</Link><br/><strong>Realm</strong> Nessus, Hell<br/><strong>Allies</strong> <Link to="/faith/abadar">Abadar</Link><br/><strong>Enemies</strong> <Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/rovagug">Rovagug</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/shelyn">Shelyn</Link><br/><strong>Temples</strong> cathedrals, libraries<br/><strong>Holy Days</strong> none (but many worshipers celebrate on holidays sacred to good deities in ways intended to blaspheme)<br/><strong>Minions</strong> <Link to="/monster/cerberi">cerberi</Link>, <Link to="/subtype/devil">devils</Link> (including <Link to="/family/archdevil">archdevils</Link>), <Link to="/monster/hell_hound">hell hounds</Link><br/><strong>Herald</strong> <Link to="/monster/basileus">Basileus</Link> (a corrupted, angel-like creature)<br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/light_mace">Mace</Link><br/><strong>Symbol</strong> Red pentagram<br/><strong>Sacred Animal(s)</strong> Serpent<br/><strong>Sacred Color(s)</strong> Black, red</p>
<h3 id="faith-asmodeus-on-golarion">On Golarion</h3>
<p><strong>Centers of Worship</strong> Cheliax, Isger, Nidal<br/><strong>Nationality</strong> devil</p>
<h2 id="faith-asmodeus-divine-gift" data-hash-target><Link to="/rule/divine_gifts">Divine Gift</Link></h2>
<blockquote>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 74</Link><br/>Asmodeus grants the service of a <Link to="/family/devil">devil</Link> to aid in a specific task (which can last no longer than 9 nights). The type of devil is generally one whose CR is equal to the character's level (or in the case of an NPC, the character's CR).</p>
</blockquote>
<h2 id="faith-asmodeus-deificfiendish-obedience" data-hash-target>Deific/Fiendish Obedience</h2>
<blockquote>
<p><em><Link to="/feat/deific_obedience">Deific Obedience</Link> and <Link to="/feat/fiendish_obedience">Fiendish Obedience</Link> have the same obedience:</em><br/>Using a ruby-bladed knife, inscribe symmetrical cuts into the flesh of another creature - preferably an unwilling sentient being you own or hold dominion over. The blade may be solid ruby or forged of metal and edged with serrated ruby fragments. Devout priests of Asmodeus take pride in crafting elaborate daggers made entirely of ruby. Drain the victim's blood into a bowl of bone made from the skull of a sentient humanoid. The amount of blood drained is up to you; you don't have to drain so much that you make the creature weak or too useless to serve you. Use the bowl of blood to draw a large pentagram on the ground. Kneel within the pentagram and concentrate on the glory you will bring to the Prince of Darkness's name. Gain a +4 profane bonus on saving throws against fire effects.</p>
</blockquote>
<blockquote>
<h3 id="faith-asmodeus-boons-evangelist">Boons: Evangelist</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 20</Link>, <Link to="/source/book_of_the_damned">Book of the Damned pg. 26</Link></p>
<ol>
<li><strong>Pitiless Judgment (Sp)</strong> <Link to="/spell/wrath">wrath</Link> 3/day, <Link to="/spell/flames_of_the_faithful">flames of the faithful</Link> 2/day, or <Link to="/spell/bestow_curse">bestow curse</Link> 1/day</li>
<li><strong>Tireless Judgment (Ex)</strong> You gain <Link to="/feat/favored_judgment">Favored Judgment</Link> as a bonus feat, choosing chaotic outsider, good outsider, or a subtype of humanoid. If you don't have the judgment class feature, you instead gain a +4 profane bonus on Survival checks made to track a creature or individual. This boon doesn't grant you any ranks in the Survival skill; therefore, if you have no ranks, you still can follow tracks only if the DC of the task is 10 or lower.</li>
<li><strong>Resounding Judgment (Sp)</strong> Once per day, you can channel the effects of <Link to="/spell/resounding_blow">resounding blow</Link> through your weapon, though you don't need to cast (or even know) the spell. You must declare your use of this ability before you make the attack roll. On a hit, the target is affected as if you had cast resounding blow before your attack, and the surrounding area rings with the sound of vicious, booming laughter. You don't gain the stunning effect of the spell unless you have access to the judgment or smite ability. If your attack misses, the resounding blow effect is wasted.</li>
</ol>
<h3 id="faith-asmodeus-boons-exalted">Boons: Exalted</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 20</Link>, <Link to="/source/book_of_the_damned">Book of the Damned pg. 26</Link></p>
<ol>
<li><strong>Darkfire (Sp)</strong> <Link to="/spell/burning_hands">burning hands</Link> 3/day, <Link to="/spell/darkness">darkness</Link> 2/day, or <Link to="/spell/deeper_darkness">deeper darkness</Link> 1/day</li>
<li><strong>Embersight (Su)</strong> Your eyes take on the appearance of red-hot, glowing embers, granting you the ability to see in darkness much like devils. You gain darkvision to a range of 60 feet. If you chose either <em>darkness</em> or <em>deeper darkness</em> as the spell-like ability granted by your first boon, you can also see perfectly through both darkness and deeper darkness. If you already have darkvision to a range of 60 feet or more, instead increase the range of your darkvision by 10 feet. Your eyes make you extremely distinctive, causing you to take a -4 penalty on Disguise checks.</li>
<li><strong>Hellfire Blast (Sp)</strong> You can use <Link to="/spell/delayed_blast_fireball">delayed blast fireball</Link> once per day as a spell-like ability to throw a sphere of soul-scouring hellfire. The hellfire is a distinctive mixture of black and crimson flames in which screaming devilish faces can be seen twisting and writhing. Half the damage from this spell is fire, while the other half is unholy. This damage modification applies only to the delayed blast fireball you create through this boon, not to any other spells, effects, or attacks.</li>
</ol>
<h3 id="faith-asmodeus-boons-sentinel">Boons: Sentinel</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 20</Link>, <Link to="/source/book_of_the_damned">Book of the Damned pg. 26</Link></p>
<ol>
<li><strong>Unholy Warrior (Sp)</strong> <Link to="/spell/protection_from_good">protection from good</Link> 3/day, <Link to="/spell/death_knell">death knell</Link> 2/day, or <Link to="/spell/defile_armor">defile armor</Link> 1/day</li>
<li><strong>Deceitful Duelist (Ex)</strong> Your devotion to the Prince of Darkness has imbued you with some of his trickery. Three times per day, you can attempt a <Link to="/rule/feint">feint</Link> as a swift action. You gain a +4 profane bonus on your Bluff check when attempting to feint using this ability. If you successfully attack a creature that has lost its Dexterity bonus to AC as a result of your feint, you deal an additional 1d6 points of damage. This is in addition to any other <Link to="/misc/precision_damage">precision-based damage</Link> you deal - such as from a <Link to="/ability/sneak_attack">sneak attack</Link> - and isn't multiplied on a critical hit.</li>
<li><strong>Diabolical Resistances (Su)</strong> Your dark patron rewards your faith with a few drops of devilish blood in your veins, granting you a measure of the resilience enjoyed by devilkind. Your skin takes on a ruddy cast, and your teeth grow slightly sharper. To a casual observer you may look no different, but anyone who studies you closely notices these traits. You gain fire resistance 10 and a +4 profane bonus on saving throws against poison.</li>
</ol>
</blockquote>
<h2 id="faith-asmodeus-divine-fighting-technique" data-hash-target><Link to="/feat/divine_fighting_technique">Divine Fighting Technique</Link></h2>
<blockquote>
<h3 id="faith-asmodeus-asmodeuss-mandate">Asmodeus's Mandate</h3>
<p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology</Link></p>
<p>Although soldiers and mercenaries alike in Cheliax claim that the martial techniques detailed within Wrath and Punishment, the most well-known fighting manual of the Church of Asmodeus, are as old as time itself, martial experts across the Inner Sea region note that Wrath and Punishment is less than 3 decades old. Of course, few in Cheliax dare to publicly make such claims. Outside of Cheliax, copies of Wrath and Punishment tend to be found in <Link to="/rule/hellknights">Hellknight</Link> enclaves.</p>
<p><strong>Initial Benefit:</strong> Whenever you threaten a critical hit with a light mace or heavy mace on a foe, that foe becomes <Link to="/misc/sickened">sickened</Link> for 1 round. If you confirm the critical hit, the sickened effect lasts for 2 rounds. The duration of the sickened effect doesn't stack with multiple critical threats.</p>
<p><strong>Advanced Prerequisite:</strong> Intelligence 13, <Link to="/feat/combat_expertise">Combat Expertise</Link>, <Link to="/feat/divine_fighting_technique">Divine Fighting Technique</Link>, <Link to="/feat/improved_feint">Improved Feint</Link>, either Base Attack Bonus +10 or 10 ranks in <Link to="/skill/bluff">Bluff</Link>.</p>
<p><strong>Advanced Benefit:</strong> An opponent that you hit with a light mace or heavy mace who is denied his Dexterity bonus to AC is also hindered by the attack. You can attempt a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver check as a swift action that doesn't provoke an attack of opportunity immediately after damage from the attack is resolved.</p>
</blockquote>
<h2 id="faith-asmodeus-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-asmodeus-archetypes">Archetypes</h3>
<ul>
<li><Link to="/arc-bard/demagogue">Demagogue (Bard)</Link></li>
<li><Link to="/arc-monk/hamatulatsu_master">Hamatulatsu Master (Monk)</Link></li>
<li><Link to="/arc-monk/hungry_ghost_monk">Hungry Ghost Monk (Monk)</Link></li>
<li><Link to="/arc-inquisitor/infiltrator">Infiltrator (Inquisitor)</Link></li>
</ul>
<h3 id="faith-asmodeus-feats">Feats</h3>
<ul>
<li><Link to="/feat/conversion_channel">Conversion Channel</Link></li>
<li><Link to="/feat/devilish_pride">Devilish Pride</Link></li>
<li><Link to="/feat/diabolical_negotiator">Diabolical Negotiator</Link></li>
<li><Link to="/feat/hamatulatsu">Hamatulatsu</Link></li>
</ul>
<h3 id="faith-asmodeus-magic-items---altars">Magic Items - Altars</h3>
<ul>
<li><Link to="/magic-altar/altar_of_asmodeus">Altar of Asmodeus</Link></li>
</ul>
<h3 id="faith-asmodeus-magic-items---armor">Magic Items - Armor</h3>
<ul>
<li><Link to="/magic-armor/half_plate_of_the_dark_prince">Half-Plate of the Dark Prince</Link></li>
</ul>
<h3 id="faith-asmodeus-magic-items---rings">Magic Items - Rings</h3>
<ul>
<li><Link to="/magic-ring/profane_seal_signet">Profane Seal Signet</Link></li>
</ul>
<h3 id="faith-asmodeus-magic-items---weapons">Magic Items - Weapons</h3>
<ul>
<li><Link to="/magic-weapon/hells_eye">Hell's Eye</Link></li>
</ul>
<h3 id="faith-asmodeus-magic-items---wondrous-items">Magic Items - Wondrous Items</h3>
<ul>
<li><Link to="/magic-wondrous/barbed_pentacle_of_asmodeus">Barbed Pentacle of Asmodeus</Link></li>
<li><Link to="/magic-wondrous/circlet_of_persuasion">Circlet of Persuasion</Link></li>
<li><Link to="/magic-wondrous/diabolical_masquerade_mask">Diabolical Masquerade Mask</Link></li>
<li><Link to="/magic-wondrous/infernal_cord">Infernal Cord (Greater)</Link></li>
<li><Link to="/magic-wondrous/hamatulatsu_robe">Hamatulatsu Robe</Link></li>
<li><Link to="/magic-wondrous/infernal_cord">Infernal Cord (Normal)</Link></li>
<li><Link to="/magic-wondrous/pentacle_token">Pentacle Token</Link></li>
</ul>
<h3 id="faith-asmodeus-monsters">Monsters</h3>
<ul>
<li><Link to="/monster/accomplice_devil">Accomplice Devil (Hesperian)</Link></li>
<li><Link to="/monster/basileus">Basileus (Herald)</Link></li>
</ul>
<h3 id="faith-asmodeus-spells">Spells</h3>
<ul>
<li><Link to="/spell/beguiling_gift">Beguiling Gift</Link></li>
<li><Link to="/spell/burning_gaze">Burning Gaze</Link></li>
<li><Link to="/spell/infernal_healing">Infernal Healing</Link></li>
<li><Link to="/spell/infernal_healing_greater">Infernal Healing, Greater</Link></li>
<li><Link to="/spell/planar_binding">Planar Binding</Link></li>
<li><Link to="/spell/shared_sacrifice">Shared Sacrifice</Link></li>
<li><Link to="/spell/spellcasting_contract">Spellcasting Contract</Link></li>
<li><Link to="/spell/spellcasting_contract_greater">Spellcasting Contract, Greater</Link></li>
<li><Link to="/spell/spellcasting_contract_lesser">Spellcasting Contract, Lesser</Link></li>
<li><Link to="/spell/vision_of_hell">Vision of Hell</Link></li>
</ul>
<h3 id="faith-asmodeus-traits">Traits</h3>
<ul>
<li><Link to="/trait/contract_master">Contract Master</Link></li>
<li><Link to="/trait/demon_hunter">Demon Hunter</Link></li>
<li><Link to="/trait/fiendish_confidence">Fiendish Confidence</Link></li>
<li><Link to="/trait/liars_tongue">Liar's Tongue</Link></li>
</ul>
<h3 id="faith-asmodeus-unique-spell-rules">Unique Spell Rules</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_gods">Inner Sea Gods pg. 27</Link></p>
<h4 id="faith-asmodeus-cleric-warpriest">Cleric, Warpriest</h4>
<ul>
<li><Link to="/spell/geas_lesser">Geas, Lesser</Link> can be prepared as a 4th-level spell</li>
<li><Link to="/spell/geas_quest">Geas/Quest</Link> can be prepared as a 5th-level spell [variant, allows a Will saving throw]</li>
</ul>
<h3 id="faith-asmodeus-unique-summon-rules">Unique Summon Rules</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_29_mother_of_flies">Pathfinder #29: Mother of Flies pg. 67</Link></p>
<ul>
<li><strong className="hl"><Link to="/spell/summon_monster_ii">Summon Monster II:</Link></strong> <Link to="/monster/hell_hound">Hell Hound</Link> - LE</li>
<li><strong className="hl"><Link to="/spell/summon_monster_iv">Summon Monster IV:</Link></strong> <Link to="/monster/cerberi">Cerberi</Link> - LE</li>
<li><strong className="hl"><Link to="/spell/summon_monster_v">Summon Monster V:</Link></strong> <Link to="/monster/bearded_devil">Bearded Devil</Link> - LE</li>
</ul>
</blockquote>
<h2 id="faith-asmodeus-description" data-hash-target>Description</h2>
<blockquote>
<p><strong>Sources</strong> <Link to="/source/book_of_the_damned">Book of the Damned pg. 26</Link><br/>Asmodeus reigns as the unquestioned lord of Hell, the emperor and god of the damned. He is the most powerful entity to reside within the infernal realm, and even the other deities who make their home within the Pit do so at the Prince of Darkness's leave. All of Hell is his fortress, each layer serving as a nefarious rampart between Nessus, his sinister keep, and a multiverse that screams in want of order. He is the most dreaded enemy to the freedom and spirit of the multiverse's mortal inhabitants, yet the surest route to a grim but eternal peace.</p>
</blockquote>
<p>Asmodeus can take any form he chooses, yet in the depictions of his faith and visions of his worshipers, he appears as a tall, muscular man with red skin, dark hair, short black horns, arrogant features, and hoofed feet. Whether this is the Archfiend's true form or merely a guise he adopts so his mortal servants can conceive of him, none can say. Some legends tell that he has another form - one that bears a great, endlessly bleeding wound he received during his final battle with his brother Ihys - but if any souls have ever witnessed this shape, they have never been allowed to leave Nessus. He is rarely seen without his symbol of rule, the Archstar, an artifact forged before the diabolic Exodus from Heaven that bears his symbol and often takes the form of a burning ruby mace, rod, or staff.</p>
<p>Asmodeus is beyond arrogant, beyond confident, and beyond patient. He knows that, eventually, the tide of the multiverse will turn, the young deities that hold such appeal to the souls of the mortal world will perish or move on, and moralities will shift, elevating him to a place of righteousness. So it was, and so it will be once more. He is known for his devastating bouts of wrath, yet his ire is but a tool to inspire fear, for few events in the last millennia have truly enraged him. None know the face of the Prince of Darkness's true fury - his disciplined facade being impenetrable - but those who cross him come to know suffering in their lives and beyond like nothing imaginable.</p>
<section data-footnotes>
<h3 id="faith-asmodeus-label">Footnotes</h3>
<ol>
<li id="faith-asmodeus-A">
<p>Requires the <Link to="/trait/acolyte_of_apocrypha">Acolyte of Apocrypha</Link> trait. <InnerLink id="backlink-faith-asmodeus-ref-A-1" data-hash-target to="faith-asmodeus-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _atlach_nacha = {hasJL:true,title: "Atlach-Nacha", jsx: <><div className="jumpList" id="faith-atlach_nacha-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="faith-atlach_nacha-follower-options">Follower Options</InnerLink></li><li><InnerLink toTop to="faith-atlach_nacha-description">Description</InnerLink></li></ul></div><div className="headerLike"><div>Atlach-Nacha</div><div className="sub">The Void Weaver</div></div>
<p><strong>Sources</strong> <Link to="/source/pathfinder_109_in_search_of_sanity">Pathfinder #109: In Search of Sanity pg. 64</Link><br/><strong>Pathfinder Wiki</strong> <a href="https://www.pathfinderwiki.com/wiki/Atlach-Nacha">Atlach-Nacha</a> <em>(link opens in outside browser)</em></p>
<h3 id="faith-atlach_nacha-details">Details</h3>
<p><strong>Alignment</strong> NE<br/><strong>Pantheon</strong> Great Old Ones<br/><strong>Areas of Concern</strong> Construction, futility, spiders<br/><strong>Domains</strong> <Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/evil">Evil</Link>, <Link to="/domain/madness">Madness</Link>, <Link to="/domain/void">Void</Link><br/><strong>Subdomains</strong> <Link to="/domain/construct">Construct</Link>, <Link to="/domain/isolation">Isolation</Link>, <Link to="/domain/nightmare">Nightmare</Link>, <Link to="/domain/toil">Toil</Link><br/><strong>Favored Weapon</strong> <Link to="/eq-weapon/net">Net</Link><br/><strong>Symbol</strong> Spider perched at the center of a web</p>
<h2 id="faith-atlach_nacha-follower-options" data-hash-target>Follower Options</h2>
<blockquote>
<h3 id="faith-atlach_nacha-feats">Feats</h3>
<ul>
<li><Link to="/feat/dreamed_secrets">Dreamed Secrets</Link></li>
</ul>
<h3 id="faith-atlach_nacha-magic-items---wondrous-items">Magic Items - Wondrous Items</h3>
<ul>
<li><Link to="/magic-wondrous/preklikins_book_of_cults">Preklikin's Book of Cults</Link></li>
</ul>
<h3 id="faith-atlach_nacha-traits">Traits</h3>
<ul>
<li><Link to="/trait/unspeakable_bond">Unspeakable Bond</Link></li>
</ul>
</blockquote>
<h2 id="faith-atlach_nacha-description" data-hash-target>Description</h2>
<p>The Spider God Atlach-Nacha is of an indeterminate gender - in some tales, he is portrayed as male, but in others she is female. In truth, constructs as prosaic as gender are but afterthoughts to Atlach-Nacha. Dwelling in a vast underground cavern large enough to swallow entire nations, Atlach-Nacha weaves an impossibly complex web to span the gulf. Texts claim that on the day its vast bridge finally connects all sides of this complex canyon, a new age of madness will be unleashed, while others purport that Atlach-Nacha's web-bridges are to be used by the Outer God Abhoth to surge out of its deep cavern rather than sending forth only its spawn.</p>
<p>Those who venerate Atlach-Nacha see the divine in the spider's form. Many of its worshipers are arachnid creatures, such as <Link to="/monster/drider">driders</Link>, <Link to="/monster/ettercap">ettercaps</Link>, and <Link to="/monster/jorogumo">jorogumos</Link>. These latter beings have been known to take the name of Atlach-Nacha themselves when they invade human societies, although their goal in appropriating the god's name is unclear.</p>
<p>Atlach-Nacha appears as a huge black-and-red spider with a body the size of an elephant and long, spindly legs. Its face is vaguely humanoid, with hair-rimmed eyes, but in certain obscure sources it has also been depicted as having multiple arms and a woman's head and torso. Many of the spiders of Leng venerate it as their mother, and doubtless the tunnels below Leng eventually connect to Atlach-Nacha's web-strewn canyon lair.</p>
</>};
export default {not_found:_not_found,abadar:_abadar,abhoth:_abhoth,abraxas:_abraxas,acavna:_acavna,achaekek:_achaekek,aegirran:_aegirran,aerekostes:_aerekostes,aesdurath:_aesdurath,aesocar:_aesocar,ah_pook:_ah_pook,ahriman:_ahriman,ajids:_ajids,aksha:_aksha,akuma:_akuma,alazhra:_alazhra,aldinach:_aldinach,alichino:_alichino,alocer:_alocer,alseta:_alseta,amaznen:_amaznen,ananshea:_ananshea,andak:_andak,andirifkhu:_andirifkhu,andoletta:_andoletta,angazhan:_angazhan,angradd:_angradd,anogetz:_anogetz,anubis:_anubis,apep:_apep,apollyon:_apollyon,apsu:_apsu,arazni:_arazni,ardad_lili:_ardad_lili,areshkagal:_areshkagal,arlachramas:_arlachramas,aroden:_aroden,aroggus:_aroggus,arqueros:_arqueros,arshea:_arshea,ashava:_ashava,ashukharma:_ashukharma,asmodeus:_asmodeus,atlach_nacha:_atlach_nacha}