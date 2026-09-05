import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import {Block,Row,Cell} from '../../components/Block';
const _not_found = {title: "Unknown", jsx: <><h2 id="inquisition-not_found-error">Error</h2>
<p>Unable to find the requested inquisition.</p>
</>};
const _anger = {title: "Anger", jsx: <><h2 id="inquisition-anger-anger">Anger</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 41</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/rovagug">Rovagug</Link></Cell></Row></Block>
<h3 id="inquisition-anger-granted-powers">Granted Powers</h3>
<p>Holy (or unholy) rage, granted by your patron deity, ensures that when you fight, the battle ends with a bloody victory.</p>
<Ability id="hateful-resort-ex" icon={["mailed-fist"]}>
<Pair single id="hateful-resort-ex">Hateful Resort (Ex)</Pair>
<Pair title="Immediate Action">Once per day, after you have been hit with a melee attack, you can make a melee attack against the creature that hit you. This melee attack is at your highest attack bonus, even if you've already attacked in the round.</Pair>
</Ability>
<Ability id="divine-anger-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="divine-anger-ex">Divine Anger (Ex)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability"><p>You gain the ability to <em>rage</em> like a <Link to="/class/barbarian">barbarian</Link>. Your effective barbarian level for this ability is your inquisitor level - 3. If you have levels in barbarian, these levels stack when determining the effect of your <em>rage.</em></p>
<p>You do not gain any rage powers from this granted power, though if you have rage powers from another class, you may use them with these rages.</p>
</Pair>
<Pair title="Usage">You can <em>rage</em> a number of rounds per day equal to your Wisdom bonus, plus 1 round for every inquisitor level above 4th.</Pair>
</Ability>
<Ability id="rage-ex" extraClasses="subAbility" icon={["upgrade","broken-shield"]}>
<Pair single id="rage-ex" flavor="Text from the barbarian class.">Rage (Ex)</Pair>
<Pair title="Free Action">You can enter (or end) a <em>rage.</em> You gain a +4 morale bonus to your Strength and Constitution, as well as a +2 morale bonus on Will saves. The increase to Constitution grants you 2 hit points per Hit Dice, but these disappear when the <em>rage</em> ends and are not lost first like <Link to="/rule/temporary_hit_points">temporary hit points</Link>.</Pair>
<Pair title="Passive Ability">While in <em>rage,</em> you take a -2 penalty to Armor Class, and you cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except Acrobatics, Fly, Intimidate, and Ride) or any ability that requires patience or concentration. You are <Link to="/misc/fatigued">fatigued</Link> after <em>rage</em> for a number of rounds equal to 2 times the number of rounds spent in the <em>rage.</em> You cannot enter a new <em>rage</em> while fatigued or <Link to="/misc/exhausted">exhausted</Link> but can otherwise enter <em>rage</em> multiple times during a single encounter or combat. If you fall unconscious, your <em>rage</em> immediately ends, placing you in peril of death.</Pair>
<Pair title="Special">Temporary increases to Constitution, such as those gained from <em>rage</em> and spells like <Link to="/spell/bears_endurance">bear's endurance</Link>, do not increase the total number of rounds that a barbarian can <em>rage</em> per day. The total number of rounds of <em>rage</em> per day is renewed after resting for 8 hours, although these hours do not need to be consecutive.</Pair>
</Ability>
</>};
const _banishment = {title: "Banishment", jsx: <><h2 id="inquisition-banishment-banishment">Banishment</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_angels">Blood of Angels pg. 26</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/torag">Torag</Link></Cell></Row></Block>
<h3 id="inquisition-banishment-granted-powers">Granted Powers</h3>
<p>Your devotion to your deity is matched only by your hatred for fiends. You know the rites to cast evil outsiders back to the realms from which they hail.</p>
<Ability id="righteous-awe-su" icon={["magic-palm","armor-downgrade"]}>
<Pair single id="righteous-awe-su">Righteous Awe (Su)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Ability">Whenever you make an unarmed touch attack against an evil creature, it must succeed at a Will save (DC 10 + 1/2 your inquisitor level + your Wisdom modifier) or become <Link to="/misc/shaken">shaken</Link> for 1d4 rounds. If the creature touched is an evil outsider, it becomes <Link to="/misc/frightened">frightened</Link> instead of shaken.</Pair>
</Ability>
<Ability id="dismissive-touch-sp" icon={["magic-palm","magic-swirl"]}>
<Pair single id="dismissive-touch-sp">Dismissive Touch (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">You can cast <Link to="/spell/dismissal">dismissal</Link> once per day as a spell-like ability (caster level equal to your inquisitor level) upon making a successful unarmed touch attack against an evil outsider. The DC to save against this ability increases by 2.</Pair>
</Ability>
</>};
const _black_powder = {title: "Black Powder", jsx: <><h2 id="inquisition-black_powder-black-powder">Black Powder</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 52</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell>Any (with GM approval)</Cell></Row></Block>
<Ability id="granted-powers" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="granted-powers">Granted Powers</Pair>
<Pair title="Ability"><p>You gain <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (firearms) and <Link to="/feat/gunsmithing">Gunsmithing</Link> as bonus feats.</p>
<p>When you hit an arcane spellcaster or a creature that uses spell-like abilities with a firearm attack, that creature must succeed at a Fortitude saving throw. If the spellcaster fails, he takes a -4 penalty on <Link to="/rule/concentration">concentration</Link> checks for 1 round.</p>
</Pair>
</Ability>
</>};
const _chivalry = {title: "Chivalry", jsx: <><h2 id="inquisition-chivalry-chivalry">Chivalry</h2>
<p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 10</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/torag">Torag</Link></Cell></Row></Block>
<h3 id="inquisition-chivalry-granted-powers">Granted Powers</h3>
<p>You embrace the spirit of chivalry, guarding your honor and training a noble mount.</p>
<Ability id="mount-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="mount-ex">Mount (Ex)</Pair>
<Pair title="Ability">This ability acts as the <Link to="/class/cavalier">cavalier</Link> ability of the same name.</Pair>
</Ability>
<Ability id="mount-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="mount-ex">Mount (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>You gain the service of a loyal and trusty steed to carry you into battle. This mount functions as a druid's <Link to="/sidekick/animal_companion">animal companion</Link>, using your level as your effective druid level. The creature must be one that you are capable of riding and is suitable as a mount. This mount may come from the following list:</p>
<p><strong>Medium Cavaliers:</strong> <Link to="/companion/axe_beak">Axe Beak</Link>, <Link to="/companion/camel">Camel</Link>, <Link to="/companion/elk">Elk</Link>, <Link to="/companion/giraffe">Giraffe</Link>, <Link to="/companion/horse">Horse</Link>, <Link to="/companion/giant_seahorse">Giant Seahorse</Link>, <Link to="/companion/giant_tortoise">Giant Tortoise</Link>, <Link to="/companion/zebra">Zebra</Link>; <strong>Small Cavaliers:</strong> <Link to="/companion/antelope">Antelope</Link>, <Link to="/companion/boar">Boar</Link> (requires 4th level), <Link to="/companion/capybara">Capybara</Link>, <Link to="/companion/dog">Dog</Link> (requires 4th level), <Link to="/companion/kangaroo">Kangaroo</Link>, <Link to="/companion/giant_gecko">Giant Gecko</Link>, <Link to="/companion/pony">Pony</Link>, <Link to="/companion/ram">Ram</Link>, Reindeer (uses elk statistics), <Link to="/companion/stag">Stag</Link>, <Link to="/companion/giant_weasel">Giant Weasel</Link>, <Link to="/companion/wolf">Wolf</Link>, <Link to="/companion/wolfdog">Wolfdog</Link></p>
<p>The GM might approve other animals as suitable mounts.</p>
<p>You do not take an armor check penalty on <Link to="/skill/ride">Ride</Link> checks while riding your mount. The mount is always considered combat trained and begins play with <Link to="/feat/light_armor_proficiency">Light Armor Proficiency</Link> as a bonus feat. Your mount does not gain the <em>share spells</em> special ability.</p>
</Pair>
<Pair title="Special">Your bond with your mount is strong, with the two of you learning to anticipate each other's moods and moves. Should your mount die, you may find another mount to serve you after 1 week of mourning. This new mount does not gain the <em>link, evasion, devotion,</em> or <em>improved evasion</em> special abilities until the next time you gain a level.</Pair>
</Ability>
<Ability id="faithful-steed-su" icon={["stairs-goal"]}>
<Pair single id="faithful-steed-su">Faithful Steed (Su)</Pair>
<Pair title="At 8th Level">When you use your <em>judgment</em> ability, your mount gains the benefit of one of your selected <em>judgments.</em></Pair>
<Pair title="At 16th Level">Your mount gains the benefits of two of your selected <em>judgments.</em></Pair>
</Ability>
</>};
const _clandestine = {title: "Clandestine", jsx: <><h2 id="inquisition-clandestine-clandestine">Clandestine</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 30</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/achaekek">Achaekek</Link>, <Link to="/faith/desna">Desna</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/milani">Milani</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/shelyn">Shelyn</Link>, <Link to="/faith/sivanah">Sivanah</Link></Cell></Row></Block>
<h3 id="inquisition-clandestine-granted-powers">Granted Powers</h3>
<p>Secrecy is required of the faithful in lands where your deity's worshipers are hunted.</p>
<Ability icon={["skills"]} id="class-skills">
<Pair id="class-skills" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/sleight_of_hand">Sleight of Hand</Link> (DEX)</Pair></Ability>
<Ability id="disappear-sp" icon={["armor-upgrade"]}>
<Pair single id="disappear-sp">Disappear (Sp)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Standard Action">You can become invisible as per <Link to="/spell/invisibility">the spell</Link>. The invisibility lasts for 1 round per inquisitor level or until you attack.</Pair>
</Ability>
<Ability id="blessed-secrecy-su" icon={["rolling-dices"]}>
<Pair single id="blessed-secrecy-su">Blessed Secrecy (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">Wisdom modifier times/day</Pair>
<Pair title="Passive Ability">When you attempt a <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/disguise">Disguise</Link>, Sleight of Hand, or <Link to="/skill/stealth">Stealth</Link> skill check, you can roll twice and take the more favorable result.</Pair>
</Ability>
<Ability id="delayed-spells-su" icon={["magic-swirl"]}>
<Pair single id="delayed-spells-su">Delayed Spells (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four inquisitor levels beyond 8th</Pair>
<Pair title="Ability">You can delay the effects of a spell you cast by up to 1 round per inquisitor level. You choose the duration of the delay when you cast the spell and can cause the spell to take effect immediately during the period of delay by concentrating as a <strong className="hl">standard action</strong>.</Pair>
</Ability>
</>};
const _conversion = {title: "Conversion", jsx: <><h2 id="inquisition-conversion-conversion">Conversion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 41</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell>Any deity</Cell></Row></Block>
<h3 id="inquisition-conversion-granted-powers">Granted Powers</h3>
<p>You are a powerful persuader. A honeyed tongue empowered by divine argumentation sways the indifferent and adversarial to your side.</p>
<Ability id="charm-of-wisdom-ex" icon={["upgrade"]}>
<Pair single id="charm-of-wisdom-ex">Charm of Wisdom (Ex)</Pair>
<Pair title="Ability">You use your Wisdom modifier instead of your Charisma modifier when making <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, and <Link to="/skill/intimidate">Intimidate</Link> checks.</Pair>
</Ability>
<Ability id="swaying-word-sp" icon={["magic-swirl"]}>
<Pair single id="swaying-word-sp">Swaying Word (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Once per day you may speak a word of divinely inspired wisdom that causes a single creature to switch its alliance to you. The target must be within line of sight and able to hear you. If he fails his Will save, he is affected by <Link to="/spell/dominate_person">dominate person</Link>, except the duration is only 1 minute.</Pair>
</Ability>
</>};
const _crime = {title: "Crime", jsx: <><h2 id="inquisition-crime-crime">Crime</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 28</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/norgorber">Norgorber</Link></Cell></Row></Block>
<h3 id="inquisition-crime-granted-powers">Granted Powers</h3>
<p>Your connections to the criminal underworld run deeper than the physical, and your spiritual criminality grants you underhanded powers.</p>
<Ability id="criminal-minds-sp" icon={["magic-palm"]}>
<Pair single id="criminal-minds-sp">Criminal Minds (Sp)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day (minimum 1)</Pair>
<Pair title="Ability">You can touch a creature and fill its mind with criminal impulses. This otherwise functions as per <Link to="/spell/crime_of_opportunity">crime of opportunity</Link>, though a target that fails its saving throw and acts on an impulse gets those desires out of its system and becomes immune to the effects of your <em>criminal minds</em> ability for 24 hours.</Pair>
</Ability>
<Ability id="thiefs-soul-ex" icon={["stairs-goal"]}>
<Pair single id="thiefs-soul-ex">Thief's Soul (Ex)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">You gain <Link to="/feat/improved_steal">Improved Steal</Link>, <Link to="/feat/greater_steal">Greater Steal</Link>, and <Link to="/feat/quick_steal">Quick Steal</Link> as bonus feats, even if you don't meet the prerequisites.</Pair>
</Ability>
</>};
const _damnation = {title: "Damnation", jsx: <><h2 id="inquisition-damnation-damnation">Damnation</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_fiends">Blood of Fiends pg. 27</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></Cell></Row></Block>
<h3 id="inquisition-damnation-granted-powers">Granted Powers</h3>
<p>The prospect of an afterlife filled with torment can cause even the most stalwart to blanch - at least for a moment.</p>
<Ability id="fear-the-flames-su" icon={["magic-swirl"]}>
<Pair single id="fear-the-flames-su">Fear the Flames (Su)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Ability">You can give a creature you can see within 60 feet one chance to avoid an eternity of suffering by ordering it to carry out any one simple action that would take no more than 1 round to complete. Good and neutral creatures that refuse become <Link to="/misc/shaken">shaken</Link> for 1 round (Will negates), while evil creatures that obey gain a +2 morale bonus on all rolls and checks made for 1 round.</Pair>
<Pair title="Special">This is a language-dependent, mind-affecting effect.</Pair>
</Ability>
<Ability id="collector-of-souls-sp" icon={["magic-swirl"]}>
<Pair single id="collector-of-souls-sp">Collector of Souls (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Standard Action">Once per day you call forth an illusory fiend and order it to temporarily drag a living and sentient creature into an afterlife of pain and misery. This otherwise acts identically to <Link to="/spell/phantasmal_killer">phantasmal killer</Link>, except targets that fail their Fortitude saving throws become <Link to="/rule/paralyzed">paralyzed</Link> for a number of rounds equal to 1d4 + your inquisitor level instead of dying.</Pair>
</Ability>
</>};
const _excommunication = {title: "Excommunication", jsx: <><h2 id="inquisition-excommunication-excommunication">Excommunication</h2>
<p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies pg. 23</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell>Any</Cell></Row></Block>
<p>Marked by your deity for your impressive will, you are among the few with the wherewithal to carry out the necessary work of removing dangerous influences from your church.</p>
<h3 id="inquisition-excommunication-granted-powers">Granted Powers</h3>
<p>You can repulse the influence of confused divine servants.</p>
<Ability id="touch-of-silence-su" icon={["magic-palm"]}>
<Pair single id="touch-of-silence-su">Touch of Silence (Su)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Ability">With a melee touch attack, you render a target silent (as the spell <Link to="/spell/silence">silence</Link>, but only affecting the target) for 1 round.</Pair>
</Ability>
<Ability id="excommunicate-su" icon={["armor-downgrade"]}>
<Pair single id="excommunicate-su">Excommunicate (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Standard Action">Once per day, you can silence a creature within 30 feet. A Will save against DC = 10 + 1/2 your inquisitor level + your Wisdom modifier negates the effect. A creature that fails its save gets a second save 1 round later. If it fails the second save, the target cannot speak, provide verbal components for spells, make use of language-dependent effects, write, pantomime, or take any other action meant to communicate anything more complex than a simple affirmative or negative for 1 day.</Pair>
</Ability>
</>};
const _execution = {title: "Execution", jsx: <><h2 id="inquisition-execution-execution">Execution</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 30</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/achaekek">Achaekek</Link>, <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/pharasma">Pharasma</Link></Cell></Row></Block>
<h3 id="inquisition-execution-granted-powers">Granted Powers</h3>
<p>Your deity guides you when you deliver death to your chosen targets.</p>
<Ability id="chosen-victim-sp" icon={["upgrade"]}>
<Pair single id="chosen-victim-sp">Chosen Victim (Sp)</Pair>
<Pair title="Ability">Once per day, you can designate a creature as your <em>chosen victim.</em> You gain a +2 bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to gather information about your target, on <Link to="/skill/bluff">Bluff</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks against your target, and on <Link to="/skill/survival">Survival</Link> checks to track your target. The benefits of your <em>destruction, piercing, purity,</em> and <em>smiting judgments</em> against your <em>chosen victim</em> increase as if your inquisitor level were 3 higher.</Pair>
</Ability>
<Ability id="executioners-strike-su" icon={["upgrade"]}>
<Pair single id="executioners-strike-su" flavor="Your precision in combat has become incredible, and you can strike a lethal blow if your target cannot defend itself properly.">Executioner's Strike (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Standard Action">Once per day, you can make an attack against your <em>chosen victim.</em> If the attack hits and the victim is denied its Dexterity bonus to AC against you, any critical threats are automatically confirmed.</Pair>
</Ability>
</>};
const _fate = {title: "Fate", jsx: <><h2 id="inquisition-fate-fate">Fate</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 41</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/pharasma">Pharasma</Link></Cell></Row></Block>
<h3 id="inquisition-fate-granted-powers">Granted Powers</h3>
<p>Fate is a powerful tool for those who dole out justice for their deity. You can read the strands of fate, and those strands guide your endeavors.</p>
<Ability id="augury-sp" icon={["magic-swirl"]}>
<Pair single id="augury-sp">Augury (Sp)</Pair>
<Pair title="Ability">Once per day, you can use <Link to="/spell/augury">augury</Link> as a spell-like ability.</Pair>
</Ability>
<Ability id="agent-of-fate-su" icon={["remedy","upgrade","armor-upgrade"]}>
<Pair single id="agent-of-fate-su">Agent of Fate (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">When you use your <em>augury</em> spell-like ability, you gain a benefit that lasts until the end of your next combat. If the result was "weal," all curing effects used on you cure an additional +1d10 hit points. If the result was "woe," your melee attacks deal an additional +1d6 points of damage. If the result is "weal and woe" or "nothing," you gain a +2 insight bonus to your Armor Class.</Pair>
</Ability>
</>};
const _fervor = {title: "Fervor", jsx: <><h2 id="inquisition-fervor-fervor">Fervor</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 42</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/shelyn">Shelyn</Link></Cell></Row></Block>
<h3 id="inquisition-fervor-granted-powers">Granted Powers</h3>
<p>Only a passionate and righteous will such as yours can ensure that justice will be properly done.</p>
<Ability id="fire-of-belief-sp" icon={["smoking-finger"]}>
<Pair single id="fire-of-belief-sp">Fire of Belief (Sp)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Ability"><p>You can unleash a gout of holy or unholy flame that sears one target within 30 feet as a ranged touch attack. The target takes 1d6 points of fire damage plus <Link to="/misc/half">half</Link> your inquisitor level (minimum +1).</p>
<p>If you are good, the flames only harm nongood targets. If you are evil, the flames only harm nonevil targets. If you are neither good nor evil, when you gain this ability you must decide whether the flames harm only nongood or nonevil targets; once you make this decision, it cannot be changed (though if your alignment changes, the effect of the flames changes appropriately)</p>
</Pair>
</Ability>
<Ability id="fervent-action-ex" icon={["stairs-goal"]}>
<Pair single id="fervent-action-ex">Fervent Action (Ex)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Swift Action">Once per day you can make a single melee attack at your highest attack bonus, move up to your speed, or cast a prepared inquisitor spell (of a spell level up to one lower than the highest level spell you can cast) as per <Link to="/feat/quicken_spell">Quicken Spell</Link>.</Pair>
</Ability>
</>};
const _final_rest = {title: "Final Rest", jsx: <><h2 id="inquisition-final_rest-final-rest">Final Rest</h2>
<p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 22</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></Cell></Row></Block>
<h3 id="inquisition-final_rest-granted-powers">Granted Powers</h3>
<p>The dead have paid their dues; there is no need, and no excuse, for them to walk. You protect their rest personally.</p>
<Ability id="disrupt-animation-sp" icon={["magic-swirl"]}>
<Pair single id="disrupt-animation-sp">Disrupt Animation (Sp)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Ability">You can use <Link to="/spell/disrupt_undead">disrupt undead</Link> as a spell-like ability, adding your wisdom modifier to the damage.</Pair>
</Ability>
<Ability id="unravel-animation-su" icon={["upgrade"]}>
<Pair single id="unravel-animation-su">Unravel Animation (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">When you activate your <em>bane</em> ability with undead as the creature type, you can choose for your weapon to instead gain the <Link to="/magic-enh/disruption">disruption</Link> weapon special ability. The DC to resist this effect is equal to 10 + 1/2 your inquisitor level + your Wisdom modifier.</Pair>
</Ability>
</>};
const _heresy = {title: "Heresy", jsx: <><h2 id="inquisition-heresy-heresy">Heresy</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 42</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/desna">Desna</Link>, <Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/rovagug">Rovagug</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/shelyn">Shelyn</Link>, <Link to="/faith/torag">Torag</Link>, <Link to="/faith/urgathoa">Urgathoa</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></Cell></Row></Block>
<h3 id="inquisition-heresy-granted-powers">Granted Powers</h3>
<p>Often it is hard to tell heretics from the faithful. You use duplicity, stealth, and the heretics' own arguments to root them out and bring them to justice.</p>
<Ability id="righteous-infiltration-ex" icon={["upgrade"]}>
<Pair single id="righteous-infiltration-ex">Righteous Infiltration (Ex)</Pair>
<Pair title="Ability">You use your Wisdom modifier instead of your Charisma modifier when making <Link to="/skill/bluff">Bluff</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks.</Pair>
</Ability>
<Ability id="blessed-infiltration-ex" icon={["rolling-dices"]}>
<Pair single id="blessed-infiltration-ex">Blessed Infiltration (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">Wisdom modifier times/day</Pair>
<Pair title="Ability">When you make a Bluff, <Link to="/skill/diplomacy">Diplomacy</Link>, or <Link to="/skill/stealth">Stealth</Link> check, you may roll twice and take the more favorable result.</Pair>
</Ability>
<Ability id="word-of-anathema-sp" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="word-of-anathema-sp">Word of Anathema (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Once per day, you can speak a <em>word of anathema</em> against a single creature within 60 feet (Will negates). This acts as <Link to="/spell/bestow_curse">bestow curse</Link> and lasts for 1 minute, giving the target a -4 penalty on attack rolls, saves, ability checks, and skill checks.</Pair>
</Ability>
</>};
const _illumination = {title: "Illumination", jsx: <><h2 id="inquisition-illumination-illumination">Illumination</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 43</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/desna">Desna</Link>, <Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></Cell></Row></Block>
<h3 id="inquisition-illumination-granted-powers">Granted Powers</h3>
<p>Many times an inquisitor's greatest weapon is pure and unflinching illumination; errors are often illuminated by light and wisdom.</p>
<Ability id="illuminating-touch-sp" icon={["shield-reflect","upgrade"]}>
<Pair single id="illuminating-touch-sp">Illuminating Touch (Sp)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Standard Action">You cause your hand to shimmer with divine radiance, allowing you to touch a creature and give it a bonus equal to 1/2 your inquisitor level on a single Will saving throw, <Link to="/skill/knowledge">Knowledge</Link> check, <Link to="/skill/perception">Perception</Link> check, or <Link to="/skill/sense_motive">Sense Motive</Link> check. This ability lasts for 1 hour or until the creature chooses to apply the bonus to a roll.</Pair>
</Ability>
<Ability id="aura-of-enlightenment-su" icon={["aura","upgrade"]}>
<Pair single id="aura-of-enlightenment-su">Aura of Enlightenment (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">1 round/day per inquisitor level; these rounds need not be consecutive</Pair>
<Pair title="Ability">You can create a 30-foot-radius aura of normal light. Allies in this <em>aura</em> gain a +2 insight bonus on skill checks. This counts as a 2nd-level <Link to="/spelldef/light">light</Link> effect for the purpose of countering or dispelling darkness effects.</Pair>
</Ability>
</>};
const _imprisonment = {title: "Imprisonment", jsx: <><h2 id="inquisition-imprisonment-imprisonment">Imprisonment</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 42</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/torag">Torag</Link></Cell></Row></Block>
<h3 id="inquisition-imprisonment-granted-powers">Granted Powers</h3>
<p>Sometimes it is better to capture foes than to kill them - whether your intention is to punish them for their crimes or to torture them for information.</p>
<Ability id="caging-strike-su" icon={["armor-downgrade"]}>
<Pair single id="caging-strike-su" flavor="With a devastating weapon strike, spectral chains wrap around your target for a short period of time.">Caging Strike (Su)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Ability">Whenever you confirm a critical hit with a melee or ranged weapon attack (including spells that require attack rolls), you can choose to also <Link to="/rule/entangled">entangle</Link> that target for 1d4 rounds (Fortitude negates).</Pair>
</Ability>
<Ability id="divine-prison" icon={["magic-swirl"]}>
<Pair single id="divine-prison">Divine Prison</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Once per day upon making a successful melee attack, you can affect your target with <Link to="/spell/hold_monster">hold monster</Link> (Will negates).</Pair>
</Ability>
</>};
const _justice = {title: "Justice", jsx: <><h2 id="inquisition-justice-justice">Justice</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 43</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/pharasma">Pharasma</Link></Cell></Row></Block>
<h3 id="inquisition-justice-granted-powers">Granted Powers</h3>
<p>Some must learn that to submit to one's fate often means submitting to your form of justice.</p>
<Ability id="judicious-force-su" icon={["upgrade"]}>
<Pair single id="judicious-force-su">Judicious Force (Su)</Pair>
<Pair title="Usage">Wisdom modifier times/day</Pair>
<Pair title="Immediate Action">If you or an ally within 10 feet makes a critical threat with a melee or ranged attack, you may add +4 to the confirmation roll. This does not stack with the <Link to="/feat/critical_focus">Critical Focus</Link> feat.</Pair>
</Ability>
<Ability id="chains-of-justice-su" icon={["armor-downgrade","broken-shield"]}>
<Pair single id="chains-of-justice-su">Chains of Justice (Su)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">Once per day, you can bind an opponent within 60 feet to you with spectral chains (Will negates). When you take damage from an enemy, the bound target takes this damage as well. Whenever the bound target takes damage from you or one of your allies, you take this damage as well. You and the target are not physically bound to each other, and either can end the connection by breaking the line of effect or exceeding the ability's range. You may dismiss the chains as a <strong className="hl">standard action</strong>.</Pair>
</Ability>
</>};
const _oblivion = {title: "Oblivion", jsx: <><h2 id="inquisition-oblivion-oblivion">Oblivion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 43</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/desna">Desna</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></Cell></Row></Block>
<h3 id="inquisition-oblivion-granted-powers">Granted Powers</h3>
<p>Some inquisitors believe that without faith there is only oblivion. But there are some divine servants who know enough about the darkness that lies beyond faith to use it as a tool- and a weapon.</p>
<Ability id="life-anchor-su" icon={["aura","remedy"]}>
<Pair single id="life-anchor-su">Life Anchor (Su)</Pair>
<Pair title="Ability">You gain a 10-foot-radius aura that helps dying creatures cling to life. Within this aura, a dying creature (including yourself) adds your Wisdom bonus to its <Link to="/misc/stabilization">stabilization checks</Link> (in addition to any other modifiers to stabilization checks).</Pair>
</Ability>
<Ability id="stare-of-oblivion-sp" icon={["smoking-finger"]}>
<Pair single id="stare-of-oblivion-sp">Stare of Oblivion (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four inquisitor levels beyond 8th</Pair>
<Pair title="Ability">You can use <Link to="/spell/feeblemind">feeblemind</Link> as a <Link to="/umr/gaze">gaze</Link> attack against one creature (Will negates). This effect lasts 1d4 rounds.</Pair>
</Ability>
</>};
const _order = {title: "Order", jsx: <><h2 id="inquisition-order-order">Order</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 43</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell>Abadar, Iomedae, Sarenrae</Cell></Row></Block>
<h3 id="inquisition-order-granted-powers">Granted Powers</h3>
<p>Most inquisitors fight insane aberrations and demonic creatures as well as the chaos of heresy. They use the dictum and the mantles of law in order to aid their struggle.</p>
<Ability id="mantle-against-chaos-sp" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="mantle-against-chaos-sp">Mantle against Chaos (Sp)</Pair>
<Pair title="Usage">1 minute/day per inquisitor level (minimum 1); these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability">You can use <Link to="/spell/protection_from_chaos">protection from chaos</Link> on yourself or another creature as a spell-like ability.</Pair>
</Ability>
<Ability id="commanding-order-sp" icon={["magic-swirl"]}>
<Pair single id="commanding-order-sp">Commanding Order (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Ability">You can use <Link to="/spell/greater_command">greater command</Link>, except it only affects a single target.</Pair>
</Ability>
</>};
const _persistence = {title: "Persistence", jsx: <><h2 id="inquisition-persistence-persistence">Persistence</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 43</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/urgathoa">Urgathoa</Link></Cell></Row></Block>
<h3 id="inquisition-persistence-granted-powers">Granted Powers</h3>
<p>Your deity chose you for your persistence. You have vowed to pursue the enemies of the faith to the world's end if necessary.</p>
<Ability id="step-up" icon={["stairs-goal"]}>
<Pair single id="step-up">Step Up</Pair>
<Pair title="Ability">You receive <Link to="/feat/step_up">Step Up</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="relentless-footing-ex" icon={["upgrade"]}>
<Pair single id="relentless-footing-ex">Relentless Footing (Ex)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day (minimum 1)</Pair>
<Pair title="Swift Action">You can add 10 feet to your land speed. This increase counts as an enhancement bonus, and it affects your <Link to="/skill/acrobatics">jumping</Link> distance as normal for increased speed.</Pair>
</Ability>
<Ability id="inner-strength-su" icon={["remedy"]}>
<Pair single id="inner-strength-su">Inner Strength (Su)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Swift Action">Once per day, you may heal yourself for 3d6 hit points. When you use this ability, you can also remove one of the following conditions from yourself: blinded, confused, dazzled, deafened, frightened, nauseated, shaken, sickened, or staggered.</Pair>
<Pair title="At 8th Level">The amount you heal becomes 4d6.</Pair>
<Pair title="At 10th Level">The amount you heal increases to 5d6.</Pair>
<Pair title="At 12th Level">The amount you heal becomes 6d6.</Pair>
<Pair title="At 14th Level">The amount you heal increases to 7d6.</Pair>
<Pair title="At 16th Level">The amount you heal becomes 8d6.</Pair>
<Pair title="At 18th Level">The amount you heal increases to 9d6.</Pair>
<Pair title="At 20th Level">The amount you heal becomes 10d6.</Pair>
</Ability>
</>};
const _politics = {title: "Politics", jsx: <><h2 id="inquisition-politics-politics">Politics</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 30</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/norgorber">Norgorber</Link></Cell></Row></Block>
<h3 id="inquisition-politics-granted-powers">Granted Powers</h3>
<p>Your divine guidance twists agreements, laws, and policies to suit the interests of the faith.</p>
<Ability id="labyrinthine-words-ex" icon={["upgrade"]}>
<Pair single id="labyrinthine-words-ex">Labyrinthine Words (Ex)</Pair>
<Pair title="Passive Ability">You add your Wisdom modifier in addition to your Charisma modifier on <Link to="/skill/bluff">Bluff</Link> checks to lie and <Link to="/skill/diplomacy">Diplomacy</Link> checks to influence other creatures.</Pair>
</Ability>
<Ability id="hearts-desire-sp" icon={["magic-swirl"]}>
<Pair single id="hearts-desire-sp" flavor="You receive divine guidance on the goals of your political allies and rivals.">Heart's Desire (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Once per day, you can use <Link to="/spell/commune">commune</Link> as a spell-like ability using your inquisitor level as your caster level, but only to ask questions about others' goals.</Pair>
</Ability>
</>};
const _possession = {title: "Possession", jsx: <><h2 id="inquisition-possession-possession">Possession</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_fiends">Blood of Fiends pg. 27</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/urgathoa">Urgathoa</Link></Cell></Row></Block>
<h3 id="inquisition-possession-granted-powers">Granted Powers</h3>
<p>You can invade the bodies of lesser beings and command them to bend to your will.</p>
<Ability id="self-control-ex" icon={["armor-upgrade"]}>
<Pair single id="self-control-ex">Self-Control (Ex)</Pair>
<Pair title="Ability">You possess remarkable control over your own body, and gain a +2 competence bonus on saving throws made against enchantment spells of the charm or compulsion subschool.</Pair>
</Ability>
<Ability id="beast-ride-su" icon={["magic-swirl"]}>
<Pair single id="beast-ride-su">Beast Ride (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Standard Action"><p>Once per day you can vacate your body and inhabit that of any creature belonging to the animal type within 30 feet for a number of rounds up to your inquisitor level.</p>
<p>While you are possessing an animal in this way, your own body becomes helpless and unaware. You can travel any distance from your body so long as you remain on the same plane, and can return to your own body as a <strong className="hl">free action</strong> at any time.</p>
<p>If the animal or your body takes damage, or you attempt to make the animal attack or do anything out of character, the effect immediately ends and you return to your own body.</p>
</Pair>
</Ability>
<Ability id="body-snatch-sp" icon={["magic-swirl"]}>
<Pair single id="body-snatch-sp">Body Snatch (Sp)</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Immediate Action"><p>Once per day upon falling unconscious because of dropping below 0 hit points, you can cast your soul from your body and attempt to occupy the body of another creature within 30 feet. This ability otherwise functions identically to <Link to="/spell/magic_jar">magic jar</Link> except that your actual body serves as the receptacle and you suppress the consciousness of your target rather than casting it out.</p>
<p>Your body continues to <Link to="/misc/dying">bleed as normal</Link> unless it is somehow stabilized, and if its hit points drop to a negative number equal to your Constitution score, the <em>magic jar</em> effect prematurely ends and you die as normal.</p>
</Pair>
</Ability>
</>};
const _recovery = {title: "Recovery", jsx: <><h2 id="inquisition-recovery-recovery">Recovery</h2>
<p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 22</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/nivi_rhombodazzle">Nivi Rhombodazzle</Link>, <Link to="/faith/shelyn">Shelyn</Link></Cell></Row></Block>
<h3 id="inquisition-recovery-granted-powers">Granted Powers</h3>
<p>Some hunt down secrets, but you focus on the search for more tangible items.</p>
<Ability id="focused-search-ex" icon={["upgrade"]}>
<Pair single id="focused-search-ex">Focused Search (Ex)</Pair>
<Pair title="Ability">Once per day, you may designate a person or object as your <em>focus.</em> This takes 1 minute of concentration, during which time you must either picture this item or person if familiar to you, or meditate on the item's or person's description if not. Until you choose a new <em>focus,</em> you gain a bonus equal to half your inquisitor level on <Link to="/skill/perception">Perception</Link> checks to see or hear your <em>focus,</em> or when using <Link to="/skill/survival">Survival</Link> to track your <em>focus</em> or a creature with your <em>focus</em> in its possession.</Pair>
<Pair title="Special">This bonus stacks with that gained from the <em>track</em> special ability.</Pair>
</Ability>
<Ability id="locate-focus-sp" icon={["magic-swirl"]}>
<Pair single id="locate-focus-sp">Locate Focus (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Once per day you may use either <Link to="/spell/locate_creature">locate creature</Link> or <Link to="/spell/locate_object">locate object</Link> as a spell-like ability using your current <em>focus</em> as the target. The range of this effect is 1 mile per level.</Pair>
</Ability>
</>};
const _redemption = {title: "Redemption", jsx: <><h2 id="inquisition-redemption-redemption">Redemption</h2>
<p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies pg. 23</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell>Any</Cell></Row></Block>
<p>Your deity inspires you with hope that wayward members of your faith can be brought back into the fold.</p>
<h3 id="inquisition-redemption-granted-powers">Granted Powers</h3>
<p>You reach out to your misguided fellows and give them every chance to turn back from conflict with the true faith, even if your differences come to violence.</p>
<Ability id="patient-sensibility-su" icon={["upgrade"]}>
<Pair single id="patient-sensibility-su">Patient Sensibility (Su)</Pair>
<Pair title="Passive Ability">You gain a +2 bonus on <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/perception">Perception</Link>, and <Link to="/skill/sense_motive">Sense Motive</Link> checks.</Pair>
</Ability>
<Ability id="redeemers-mercy-su" icon={["upgrade"]}>
<Pair single id="redeemers-mercy-su">Redeemer's Mercy (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">Any weapon you wield gains the <Link to="/magic-enh/merciful">merciful</Link> magic weapon special ability. The weapon immediately reverts to its original abilities when you cease to wield it.</Pair>
</Ability>
<Ability id="second-chance-sp" icon={["magic-swirl","remedy"]}>
<Pair single id="second-chance-sp" flavor="You can give an enemy a second chance to correct the error of its ways.">Second Chance (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Standard Action"><p>Once per day, you can cast <Link to="/spell/atonement">atonement</Link> as a spell-like ability, targeting a creature that has violated the tenets of a religion you both share or that freely desires to convert to your alignment. If costly material components are required for the <em>atonement,</em> you may choose to accept a permanent <Link to="/rule/negative_level">negative level</Link> as a sacrifice in place of those components.</p>
<p>The target of this effect also receives the benefits of a <Link to="/spell/cure_serious_wounds">cure serious wounds</Link> spell as part of the effects of the <em>atonement.</em></p>
</Pair>
</Ability>
</>};
const _reformation = {title: "Reformation", jsx: <><h2 id="inquisition-reformation-reformation">Reformation</h2>
<p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies pg. 23</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell>Any</Cell></Row></Block>
<p>Moved by divine disapproval of your church's mistakes, you seek to correct them however you can.</p>
<h3 id="inquisition-reformation-granted-powers">Granted Powers</h3>
<p>You can speak with divine persuasiveness.</p>
<Ability id="inspired-rhetoric-ex" icon={["upgrade","skills"]}>
<Pair single id="inspired-rhetoric-ex">Inspired Rhetoric (Ex)</Pair>
<Pair title="Ability">You use your Wisdom modifier in place of your Charisma modifier when making <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/intimidate">Intimidate</Link>, and <Link to="/skill/perform">Perform</Link> (oratory) checks. Perform (oratory) is an inquisitor class skill for you.</Pair>
</Ability>
<Ability id="blessed-correction-ex" icon={["rolling-dices"]}>
<Pair single id="blessed-correction-ex">Blessed Correction (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">Wisdom modifier times/day</Pair>
<Pair title="Passive Ability">When you make a Diplomacy, Intimidate, or Perform (oratory) check, you may roll twice and take the more favorable result.</Pair>
</Ability>
<Ability id="awaken-discontent-su" icon={["magic-swirl"]}>
<Pair single id="awaken-discontent-su">Awaken Discontent (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">Wisdom modifier times/day</Pair>
<Pair title="Ability">You can deliver a stirring speech condemning the mistakes of those in power and calling for reform, causing the target of your rhetoric to be affected by <Link to="/spell/charm_person">charm person</Link> with a caster level equal to your inquisitor level and a save DC of 10 + 1/2 your inquisitor level + your Wisdom modifier.</Pair>
</Ability>
</>};
const _restoration = {title: "Restoration", jsx: <><h2 id="inquisition-restoration-restoration">Restoration</h2>
<p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 10</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/desna">Desna</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/shelyn">Shelyn</Link></Cell></Row></Block>
<h3 id="inquisition-restoration-granted-powers">Granted Powers</h3>
<p>You are a healer, not just of people but also of sacred sites tainted by enemies of your faith.</p>
<Ability id="mend-the-broken-su" icon={["remedy"]}>
<Pair single id="mend-the-broken-su">Mend the Broken (Su)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Standard Action">You can touch an object or creature healing it of 1d4 points of damage + 1 for every 2 inquisitor levels you possess. You can use this ability only on a broken object or a creature with fewer than half its maximum hit points.</Pair>
</Ability>
<Ability id="cleanse-impunity-su" icon={["upgrade"]}>
<Pair single id="cleanse-impunity-su">Cleanse Impunity (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Choice">Choose an alignment (chaotic, evil, good, or lawful) that is opposite to one axis of your own. Once chosen, this cannot be changed.</Pair>
<Pair title="Ability">Add your Wisdom bonus on caster level checks to overcome the spell resistance of creatures with the chosen alignment subtype; dispel effects with the chosen alignment descriptor; and remove curses, diseases, and poisons.</Pair>
<Pair title="Special">A neutral inquisitor gains only the bonus on caster level checks to remove curses, diseases, and poisons.</Pair>
</Ability>
</>};
const _revelation = {title: "Revelation", jsx: <><h2 id="inquisition-revelation-revelation">Revelation</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_angels">Blood of Angels pg. 27</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/desna">Desna</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/shelyn">Shelyn</Link></Cell></Row></Block>
<h3 id="inquisition-revelation-granted-powers">Granted Powers</h3>
<p>Evil often hides itself behind a mask of good. You are an expert at ferreting out those who are not what they seem, and use your powers to reveal the true forms of the unworthy.</p>
<Ability id="burn-shroud-su" icon={["magic-palm"]}>
<Pair single id="burn-shroud-su">Burn Shroud (Su)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Standard Action"><p>You can make an unarmed touch attack against a creature. The target takes 1d4 points of fire damage + <Link to="/misc/half">half</Link> your inquisitor level (minimum 1).</p>
<p>If the target is currently the subject of a polymorph effect that changes its appearance (such as by <Link to="/spell/alter_self">alter self</Link>, <Link to="/spell/shapechange">shapechange</Link>, or an innate shapechanging ability such as that possessed by <Link to="/monster/doppelganger">doppelgangers</Link>), it instead takes 1d6 points of fire damage + half your inquisitor level (minimum 1).</p>
</Pair>
</Ability>
<Ability id="reveal-form-su" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="reveal-form-su">Reveal Form (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Standard Action">Once per day you can invoke the name of your deity and order one shapechanged target within 30 feet to reveal its true form. The target must succeed at a Will save (DC 10 + 1/2 your inquisitor level + your Wisdom modifier) or be forced on its next turn to dispel any ongoing polymorph effects or innate shapechanging abilities to assume its natural form.</Pair>
<Pair title="Special">If a creature affected by this ability fails its save and is for some reason unable to dispel any ongoing polymorph effects or innate shapechanging abilities, it is instead <Link to="/misc/staggered">staggered</Link> for 1 round. This is a mind-affecting compulsion effect.</Pair>
</Ability>
</>};
const _secrets = {title: "Secrets", jsx: <><h2 id="inquisition-secrets-secrets">Secrets</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 28</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/norgorber">Norgorber</Link></Cell></Row></Block>
<h3 id="inquisition-secrets-granted-powers">Granted Powers</h3>
<p>You have learned to keep your own secrets close, and your enemies' secrets closer.</p>
<Ability id="detect-secrets-su" icon={["magic-swirl"]}>
<Pair single id="detect-secrets-su" flavor="You have learned how to detect any of a creature's secrets, not just its thoughts.">Detect Secrets (Su)</Pair>
<Pair title="Ability">Whenever you cast <Link to="/spell/detect_anxieties">detect anxieties</Link>, <Link to="/spell/detect_desires">detect desires</Link>, or <Link to="/spell/detect_thoughts">detect thoughts</Link> or use any of those spells as a spell-like ability, you can choose to gain the effects of one of the other two spells instead. You are never overwhelmed by a target of these spells that has a high ability score.</Pair>
</Ability>
<Ability id="closed-book-sp" icon={["armor-upgrade"]}>
<Pair single id="closed-book-sp" flavor="It becomes difficult for your foes to unveil your secrets.">Closed Book (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You are constantly under the effect of <Link to="/spell/nondetection">nondetection</Link>, as if you cast the spell on yourself.</Pair>
</Ability>
</>};
const _sedition = {title: "Sedition", jsx: <><h2 id="inquisition-sedition-sedition">Sedition</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 30</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/desna">Desna</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/milani">Milani</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/sarenrae">Sarenrae</Link>, <Link to="/faith/shelyn">Shelyn</Link></Cell></Row></Block>
<h3 id="inquisition-sedition-granted-powers">Granted Powers</h3>
<p>Your deity calls you to cast down a hostile government. Stealth is a class skill for you.</p>
<Ability id="undermine-authority-sp" icon={["magic-swirl"]}>
<Pair single id="undermine-authority-sp">Undermine Authority (Sp)</Pair>
<Pair title="Usage">Wisdom modifier times/day</Pair>
<Pair title="Ability">You can worsen the attitude of a character toward any governmental officer or leader acting against your religion. This likewise reduces that officer's or leader's influence with that character. The persuasion requires enough conversation to attempt a <Link to="/skill/diplomacy">Diplomacy</Link> check (usually 1 minute) and you attempt a Diplomacy check as normal to influence the target's attitude. However, if you fail the check, the target is subject to a mind-affecting compulsion that alters its attitude for a number of days equal to your inquisitor level. The target can resist the compulsion with a successful Will saving throw (DC = 10 + 1/2 your inquisitor level + your Wisdom modifier). If the target is under a mind-affecting effect from that officer or leader, the effect is automatically suppressed for 1 minute.</Pair>
</Ability>
<Ability id="rebel-leader-ex" icon={["stairs-goal"]}>
<Pair single id="rebel-leader-ex">Rebel Leader (Ex)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">You gain <Link to="/feat/leadership">Leadership</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _seduction = {title: "Seduction", jsx: <><h2 id="inquisition-seduction-seduction">Seduction</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 30</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/arshea">Arshea</Link>, <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/shelyn">Shelyn</Link></Cell></Row></Block>
<h3 id="inquisition-seduction-granted-powers">Granted Powers</h3>
<p>Your deity blesses your attempts to use sex and love for a higher purpose.</p>
<Ability id="disarming-flirtation-sp" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="disarming-flirtation-sp">Disarming Flirtation (Sp)</Pair>
<Pair title="Ability"><p>You can attempt a Charisma check to entice a target that could be sexually attracted to you into letting you speak for up to 1 minute when it would otherwise be unwilling to consider your words. The DC of this Charisma check is equal to 10 + the target's Wisdom modifier.</p>
<p>If successfully used in combat, this ability instead functions as a successful <Link to="/skill/feint">feint</Link> and the target cannot take any actions that would attack you as long as it is denied its Dexterity bonus against you.</p>
</Pair>
</Ability>
<Ability id="inspire-devotion-ex" icon={["stairs-goal"]}>
<Pair single id="inspire-devotion-ex">Inspire Devotion (Ex)</Pair>
<Pair title="Ability">By spending at least 1 hour engaged in acts of physical pleasure with a willing partner, you can attempt a <Link to="/skill/diplomacy">Diplomacy</Link> check to improve that partner's attitude or increase your influence with that partner (or reduce a rival's influence with that partner) with no maximum on the number of steps by which you can change that partner's attitude or disposition.</Pair>
</Ability>
</>};
const _sin = {title: "Sin", jsx: <><h2 id="inquisition-sin-sin">Sin</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_fiends">Blood of Fiends pg. 27</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/rovagug">Rovagug</Link>, <Link to="/faith/urgathoa">Urgathoa</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></Cell></Row></Block>
<h3 id="inquisition-sin-granted-powers">Granted Powers</h3>
<p>You know how to stoke the seven sins in others (envy, gluttony, greed, lust, pride, sloth, and wrath), and twist their dark desires to suit your own purposes.</p>
<Ability id="sin-sense-su" icon={["upgrade"]}>
<Pair single id="sin-sense-su">Sin Sense (Su)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Full-Round Action">You can determine which sin most strongly influences a target by quickly reading its mind. Once you learn this fact, you gain a +4 bonus on your next Charisma-based skill check made against the target as long as it somehow incorporates a temptation that relates to that sin.</Pair>
<Pair title="Special">This is a mind-affecting effect.</Pair>
</Ability>
<Ability id="indulge-su" icon={["armor-downgrade"]}>
<Pair single id="indulge-su">Indulge (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Standard Action"><p>Once per day you can awaken a creature's vice and overwhelm its senses with urgency. You must decide to use this ability before using your <em>sin sense</em> ability on a creature, and the target receives a Will save to negate the effect.</p>
<p>If the creature fails its saving throw, for the next 24 hours, whenever the affected creature is given an opportunity to indulge in its favored sin, that creature must yield to the impulse or make a second Will saving throw to avoid becoming <Link to="/misc/sickened">sickened</Link> for 1 minute.</p>
</Pair>
<Pair title="Special">This is a mind-affecting effect.</Pair>
</Ability>
</>};
const _spellkiller = {title: "Spellkiller", jsx: <><h2 id="inquisition-spellkiller-spellkiller">Spellkiller</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 52</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell>Any (with GM approval)</Cell></Row></Block>
<Ability id="granted-powers" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="granted-powers">Granted Powers</Pair>
<Pair title="Ability"><p>You gain the <Link to="/feat/disruptive">Disruptive</Link> feat as a bonus feat (even if you do not meet the prerequisites).</p>
<p>When you defeat an enemy (whether by reducing it to 0 or fewer hit points, taking the enemy captive, or accepting a truce), you gain a +2 sacred or profane bonus to AC for 1 minute per level. You gain a sacred bonus if you are good, profane if you are evil; if you are neutral, you choose either sacred or profane when you select this inquisition. After you choose which type of bonus you gain, you cannot change the bonus type.</p>
<p>When you hit a creature with levels of <Link to="/class/alchemist">alchemist</Link> or any arcane spellcasting class, or that uses spell-like abilities, you can end this effect to <Link to="/misc/staggered">stagger</Link> that creature. The creature gets a Fortitude saving throw against this effect on each of its turns (including the turn in which it gained the effect). A successful save ends the staggered condition.</p>
</Pair>
</Ability>
</>};
const _tactics = {title: "Tactics", jsx: <><h2 id="inquisition-tactics-tactics">Tactics</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 43</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/gorum">Gorum</Link>, <Link to="/faith/irori">Irori</Link>, <Link to="/faith/torag">Torag</Link></Cell></Row></Block>
<h3 id="inquisition-tactics-granted-powers">Granted Powers</h3>
<p>It is the cold and tactical mind that often wins the day. A proper, carefully considered sacrifice can inspire one's allies to serve your cause.</p>
<Ability id="inquisitors-direction-su" icon={["broken-shield","upgrade"]}>
<Pair single id="inquisitors-direction-su">Inquisitor's Direction (Su)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day (minimum 1)</Pair>
<Pair title="Ability">At the start of your turn, you can choose to enter a tranquil, reflective state and forgo all actions (standard, move, swift, immediate, and free actions, including attacks of opportunity) for that round; one ally of your choice within 30 feet gains the benefit of <Link to="/spell/haste">haste</Link> for 1 round.</Pair>
</Ability>
<Ability id="grant-the-initiative-ex" icon={["upgrade"]}>
<Pair single id="grant-the-initiative-ex">Grant the Initiative (Ex)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You and all allies within 30 feet may add your Wisdom bonus to your initiative checks.</Pair>
</Ability>
</>};
const _torture = {title: "Torture", jsx: <><h2 id="inquisition-torture-torture">Torture</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 44</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/zon_kuthon">Zon-Kuthon</Link></Cell></Row></Block>
<h3 id="inquisition-torture-granted-powers">Granted Powers</h3>
<p>Only through pain can truth and justice come to the surface. And if that doesn't work, at least you've enacted divine vengeance.</p>
<Ability id="torturers-presence-ex" icon={["upgrade"]}>
<Pair single id="torturers-presence-ex">Torturer's Presence (Ex)</Pair>
<Pair title="Passive Ability">You gain a +2 bonus when using the <Link to="/skill/intimidate">Intimidate</Link> skill. This is in addition to your bonus for <em>Stern Gaze.</em></Pair>
</Ability>
<Ability id="torturers-touch-sp" icon={["magic-swirl","magic-palm"]}>
<Pair single id="torturers-touch-sp">Torturer's Touch (Sp)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Ability">You may use <Link to="/spell/touch_of_fatigue">touch of fatigue</Link> as a spell-like ability. Creatures that are immune to pain effects are immune to this touch.</Pair>
</Ability>
<Ability id="critical-precision-ex" icon={["upgrade"]}>
<Pair single id="critical-precision-ex">Critical Precision (Ex)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">When you roll a critical threat, you may expend one use of your <em>torturer's touch</em> ability to add +4 on your critical confirmation roll. This does not stack with <Link to="/feat/critical_focus">Critical Focus</Link>.</Pair>
</Ability>
</>};
const _true_death = {title: "True Death", jsx: <><h2 id="inquisition-true_death-true-death">True Death</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_angels">Blood of Angels pg. 27</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/pharasma">Pharasma</Link></Cell></Row></Block>
<h3 id="inquisition-true_death-granted-powers">Granted Powers</h3>
<p>You see undead as a perversion of the natural order, a misuse of magic, or an unjust enslavement of a departed spirit's body, and are sworn to destroying such beings.</p>
<Ability id="back-to-the-graves-su" icon={["upgrade"]}>
<Pair single id="back-to-the-graves-su">Back to the Graves (Su)</Pair>
<Pair title="Ability">When you cast cure spells (any spells with <Link to="/main/spell_groupings">"cure"</Link> in their name) to deal damage to undead creatures, you add +2 points of damage per caster level instead of +1 point of damage per caster level. The maximum damage for each spell remains unchanged.</Pair>
</Ability>
<Ability id="hallowed-rite-su" icon={["shield-reflect"]}>
<Pair single id="hallowed-rite-su">Hallowed Rite (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">You gain the ability to conduct a sacred funeral rite. This rite takes 1 day, during which you perform the necessary chants and prayers and burn incense. At the end of the rite you must oversee the burial of the corpse. The burial must take place within 24 hours of the preparation or the ritual fails. Once the body is interred, it cannot be turned into an undead creature, as if it were under the effect of a <Link to="/spell/hallow">hallow</Link> spell (caster level equal to your inquisitor level).</Pair>
</Ability>
</>};
const _truth = {title: "Truth", jsx: <><h2 id="inquisition-truth-truth">Truth</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 44</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/pharasma">Pharasma</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></Cell></Row></Block>
<h3 id="inquisition-truth-granted-powers">Granted Powers</h3>
<p>To find truth, one has to wring honesty from others - whether in a friendly or hostile manner.</p>
<Ability id="justices-true-path-sp" icon={["upgrade"]}>
<Pair single id="justices-true-path-sp">Justice's True Path (Sp)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Standard Action">You can touch a creature, granting an insight bonus on one attack roll, skill check, ability check, or saving throw before your next turn; this bonus is equal to half your inquisitor level (minimum 1) and lasts for 1 round.</Pair>
</Ability>
<Ability id="grasp-of-honesty-su" icon={["armor-downgrade"]}>
<Pair single id="grasp-of-honesty-su">Grasp of Honesty (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 round/day per inquisitor level; these rounds need not be consecutive</Pair>
<Pair title="Ability">Any creature you are grappling or pinning is affected by <Link to="/spell/zone_of_truth">zone of truth</Link> (Will negates). Outside of combat, you may use this ability by touching a target with both hands.</Pair>
<Pair title="Special">The effect ends if you stop grappling, pinning, or touching the target.</Pair>
</Ability>
</>};
const _valor = {title: "Valor", jsx: <><h2 id="inquisition-valor-valor">Valor</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 44</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/cayden_cailean">Cayden Cailean</Link>, <Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/sarenrae">Sarenrae</Link></Cell></Row></Block>
<h3 id="inquisition-valor-granted-powers">Granted Powers</h3>
<p>It takes courage to confront the enemies of your faith.</p>
<Ability id="touch-of-resolve-sp" icon={["remedy"]}>
<Pair single id="touch-of-resolve-sp">Touch of Resolve (Sp)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Ability">You may use <Link to="/spell/remove_fear">remove fear</Link> on a single creature.</Pair>
</Ability>
<Ability id="fearless-su" icon={["armor-upgrade"]}>
<Pair single id="fearless-su">Fearless (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You become immune to fear.</Pair>
</Ability>
</>};
const _vengeance = {title: "Vengeance", jsx: <><h2 id="inquisition-vengeance-vengeance">Vengeance</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 44</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/calistria">Calistria</Link>, <Link to="/faith/lamashtu">Lamashtu</Link>, <Link to="/faith/norgorber">Norgorber</Link>, <Link to="/faith/rovagug">Rovagug</Link>, <Link to="/faith/urgathoa">Urgathoa</Link></Cell></Row></Block>
<h3 id="inquisition-vengeance-granted-powers">Granted Powers</h3>
<p>Vengeance is justice naked of pretense. On your oath, you will deliver justice so unbounded.</p>
<Ability id="divine-retribution-sp" icon={["magic-swirl"]}>
<Pair single id="divine-retribution-sp">Divine Retribution (Sp)</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="Standard Action">You can point at one creature within 30 feet to indicate that it is the target of divine wrath. A mishap or an accident appropriate to the environment occurs, such as a branch falling on the creature, rocks falling from the ceiling, or some other nonmagical misfortune; regardless of the cause, the mishap deals damage equal to 1d6 + <Link to="/misc/half">half</Link> your inquisitor level (Reflex half).</Pair>
<Pair title="Special">The GM decides whether this damage is bludgeoning, piercing, or slashing damage.</Pair>
</Ability>
<Ability id="final-vengeance-su" icon={["mailed-fist"]}>
<Pair single id="final-vengeance-su">Final Vengeance (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Once per day, you can make one melee attack against an opponent within reach in response to an attack that would reduce you to negative hit points. Once your attack is resolved, you suffer the normal effect of the attack that provoked this ability.</Pair>
<Pair title="Special">Effects that kill you or do not reduce you to negative hit points (such as <Link to="/rule/ability_damage_drain">ability damage or drain</Link>, <Link to="/rule/negative_level">negative levels</Link>, and <Link to="/spell/disintegrate">disintegrate</Link>) do not trigger this ability.</Pair>
</Ability>
</>};
const _zeal = {title: "Zeal", jsx: <><h2 id="inquisition-zeal-zeal">Zeal</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 44</Link></p>
<Block size="simple">
<Row><Cell>Associated Deities</Cell><Cell><Link to="/faith/erastil">Erastil</Link>, <Link to="/faith/nethys">Nethys</Link></Cell></Row></Block>
<h3 id="inquisition-zeal-granted-powers">Granted Powers</h3>
<p>An inquisitor needs unyielding zeal in order to make sure her deity's work is done.</p>
<Ability id="zealous-surge-sp" icon={["armor-upgrade"]}>
<Pair single id="zealous-surge-sp">Zealous Surge (Sp)</Pair>
<Pair title="Passive Ability">Once per day, when you are reduced to 0 or fewer hit points, you heal a number of hit points equal to your inquisitor level + your Wisdom modifier.</Pair>
</Ability>
<Ability id="scourge-of-the-enemy-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="scourge-of-the-enemy-ex">Scourge of the Enemy (Ex)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Select one religion that is a rival or opponent of your religion. You treat members of this religion as if they were your <Link to="/ability/favored_enemy">favored enemy</Link> (as the ranger class ability), gaining a +2 bonus on the appropriate rolls.</Pair>
<Pair title="At 13th Level">These bonuses become +4.</Pair>
<Pair title="At 18th Level">These bonuses increase to +6.</Pair>
<Pair title="Special">These bonuses do not stack with other favored enemy bonuses (use the highest bonus that applies).</Pair>
</Ability>
</>};
export default {not_found:_not_found,anger:_anger,banishment:_banishment,black_powder:_black_powder,chivalry:_chivalry,clandestine:_clandestine,conversion:_conversion,crime:_crime,damnation:_damnation,excommunication:_excommunication,execution:_execution,fate:_fate,fervor:_fervor,final_rest:_final_rest,heresy:_heresy,illumination:_illumination,imprisonment:_imprisonment,justice:_justice,oblivion:_oblivion,order:_order,persistence:_persistence,politics:_politics,possession:_possession,recovery:_recovery,redemption:_redemption,reformation:_reformation,restoration:_restoration,revelation:_revelation,secrets:_secrets,sedition:_sedition,seduction:_seduction,sin:_sin,spellkiller:_spellkiller,tactics:_tactics,torture:_torture,true_death:_true_death,truth:_truth,valor:_valor,vengeance:_vengeance,zeal:_zeal}