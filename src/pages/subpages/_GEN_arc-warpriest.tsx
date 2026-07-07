import {IonRippleEffect,IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _calamity_caller = {title: "Calamity Caller", jsx: <><h2 id="arc-warpriest-calamity_caller-calamity-caller">Calamity Caller</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 12</Link><br/>While all elves feel a deep connection to nature, some elven priests take this bond further, using their link to call down the wrath of nature upon their enemies. Ekujae are most inclined to harness this connection, but any elf can wield their bond to nature in this way.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-warpriest-calamity_caller--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/elf">Elf</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="catastrophic-blessing" icon={["info"]}>
<Pair single id="catastrophic-blessing">Catastrophic Blessing</Pair>
<Pair hl title="Alters">Blessings</Pair>
<Pair title="Ability">A calamity caller must select a disaster blessing (<Link to="/blessing/earthquake">Earthquake</Link>, <Link to="/blessing/flood">Flood</Link>, <Link to="/blessing/tornado">Tornado</Link>, or <Link to="/blessing/wildfire">Wildfire</Link>) as one of his two blessings, even if the calamity caller's deity does not grant the disaster blessing's associated domain.</Pair>
</Ability>
<Ability id="calamity-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="calamity-su">Calamity (Su)</Pair>
<Pair hl title="Replaces">Focus weapon, sacred weapon, bonus feats</Pair>
<Pair title="Standard Action">A calamity caller can cause a 5-foot square within 30 feet to suffer a calamity. A calamity deals 1d6 damage to creatures within that square. The type of calamity determines what type of damage the calamity deals (see below). An affected creature can attempt a saving throw to reduce this damage by half (DC = 10 + half the calamity caller's warpriest level + the calamity caller's Wisdom modifier); the type of save is determined by the calamity. The calamity caller can use this ability at will.</Pair>
<Pair title="At 3rd Level">The amount of damage becomes 2d6.</Pair>
<Pair title="At 4th Level">A calamity caller can create an enhanced calamity when he uses this ability. An enhanced calamity deals twice the calamity's normal damage; in addition, a creature that fails its save suffers an additional effect (see below). A creature must take damage from the calamity to suffer these additional effects. The calamity caller can create an <em>enhanced calamity</em> once per day for every 2 warpriest levels he has.</Pair>
<Pair title="At 5th Level">The amount of damage increases to 3d6.</Pair>
<Pair title="At 7th Level">The amount of damage becomes 4d6.</Pair>
<Pair title="At 8th Level">Effects created by an <em>enhanced calamity</em> that last for 1 or more rounds persist for 1 additional round.</Pair>
<Pair title="At 9th Level">The amount of damage increases to 5d6.</Pair>
<Pair title="At 11th Level">The amount of damage becomes 6d6.</Pair>
<Pair title="At 12th Level">Enhanced effects now persist for 2 additional rounds.</Pair>
<Pair title="At 13th Level">The amount of damage increases to 7d6.</Pair>
<Pair title="At 15th Level">The amount of damage becomes 8d6.</Pair>
<Pair title="At 16th Level">Enhanced effects now persist for 3 additional rounds.</Pair>
<Pair title="At 17th Level">The amount of damage increases to 9d6.</Pair>
<Pair title="At 19th Level">The amount of damage becomes 10d6.</Pair>
<Pair title="Special">The calamities available to calamity callers, the type of damage they deal, the saving throw to resist the damage, and the secondary effect they cause when enhanced, are listed below.</Pair>
</Ability>
<Ability id="acid-rain" extraClasses="subAbility" icon={["bowman"]}>
<Pair single id="acid-rain">Acid Rain</Pair>
<Pair title="Ability">A brief rain shower deals acid damage to the target square, with a Fortitude save for half damage. A creature that fails its save against <em>enhanced</em> acid rain continues to dissolve for 1 round, automatically taking half the original damage.</Pair>
</Ability>
<Ability id="blizzard" extraClasses="subAbility" icon={["bowman"]}>
<Pair single id="blizzard">Blizzard</Pair>
<Pair title="Ability">Hail deals cold damage to the target square, with a Fortitude save for half damage. A creature that fails its save against an <em>enhanced</em> blizzard is <Link to="/misc/blinded">blinded</Link> for 1 round.</Pair>
</Ability>
<Ability id="deadfall" extraClasses="subAbility" icon={["bowman"]}>
<Pair single id="deadfall">Deadfall</Pair>
<Pair title="Ability">A tree branch, stone boulder, or other heavy object falls on the target square. A deadfall deals bludgeoning damage, with a Reflex save for half damage. A creature that fails its save against an <em>enhanced</em> deadfall is knocked <Link to="/rule/prone">prone</Link>.</Pair>
<Pair title="At 12th Level">The target is also <Link to="/misc/confused">confused</Link> for 1 round.</Pair>
</Ability>
<Ability id="flash-flood" extraClasses="subAbility" icon={["bowman"]}>
<Pair single id="flash-flood">Flash Flood</Pair>
<Pair title="Ability">A brief surge of stormy water deals bludgeoning damage to the target square, with a Reflex save for half damage. An <em>enhanced</em> flash flood does not cause additional effects; instead, an <em>enhanced</em> flash flood targets creatures in a 5-foot radius.</Pair>
<Pair title="At 12th Level">The area increases to a 10-foot radius.</Pair>
<Pair title="At 16th Level">The area increases to a 15-foot radius.</Pair>
</Ability>
<Ability id="lightning-strike" extraClasses="subAbility" icon={["bowman"]}>
<Pair single id="lightning-strike">Lightning Strike</Pair>
<Pair title="Ability">A bolt of lightning deals electricity damage to the target square, with a Reflex save for half damage. A creature that fails its save against an <em>enhanced</em> lightning strike is <Link to="/misc/staggered">staggered</Link> for 1 round by electrical impulses.</Pair>
</Ability>
<Ability id="thorny-vines" extraClasses="subAbility" icon={["bowman"]}>
<Pair single id="thorny-vines">Thorny Vines</Pair>
<Pair title="Ability">Vines covered with thick thorns wrap around the target square. The thorny vines deal piercing damage, with a Reflex save for half damage. A creature that fails its save against <em>enhanced</em> thorny vines is <Link to="/rule/entangled">entangled</Link> for 1 round.</Pair>
</Ability>
<Ability id="volcanic-rift" extraClasses="subAbility" icon={["bowman"]}>
<Pair single id="volcanic-rift">Volcanic Rift</Pair>
<Pair title="Ability">A magmatic rift emits a plume of fire into the air, dealing fire damage to the target square, with a Fortitude save for half damage. An <em>enhanced</em> volcanic rift also emits poisonous and corrosive gases; a creature that fails its save against the <em>enhanced</em> volcanic rift is <Link to="/rule/sickened">sickened</Link> for 1 round.</Pair>
</Ability>
<Ability id="aspect-of-disaster-su" icon={["armor-downgrade"]}>
<Pair single id="aspect-of-disaster-su">Aspect of Disaster (Su)</Pair>
<Pair hl title="Replaces">Aspect of war</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">A creature affected by a calamity caller's <em>enhanced calamity</em> does not receive a save to reduce the damage or avoid the calamity's effects.</Pair>
</Ability>
</>};
const _champion_of_the_faith = {title: "Champion of the Faith", jsx: <><h2 id="arc-warpriest-champion_of_the_faith-champion-of-the-faith">Champion of the Faith</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 128</Link><br/>Champions of the faith are crusaders who use the power of their divine patron to annihilate the faith's enemies.</p>
<Ability id="chosen-alignment" icon={["info"]}>
<Pair single id="chosen-alignment">Chosen Alignment</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice"><p>A champion of the faith must select one of the following as his chosen alignment: chaos, evil, good, or law. This choice must be one of the alignments shared by the champion of the faith and his deity. Champions of the faith who are neutral with no other alignment components (or whose deity is) can choose any of the above alignments for this purpose. Additionally, a champion of the faith must select the blessing corresponding to his chosen alignment, even if it's not on his deity's list of domains.</p>
<p>His chosen alignment's opposite is referred to as his opposed alignment. Good and evil oppose one another, just as law and chaos oppose one another.</p>
</Pair>
</Ability>
<Ability id="sacred-weapon-su" icon={["broken-shield","upgrade"]}>
<Pair single id="sacred-weapon-su">Sacred Weapon (Su)</Pair>
<Pair hl title="Alters">Sacred weapon</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Info">A champion of the faith gains the <em>sacred weapon</em> class feature as normal. However, this ability does not grant the 4th-level ability to enhance the champion of the faith's weapon with divine power, nor does it grant any subsequent increases to that ability.</Pair>
<Pair title="At 4th Level">Any <em>sacred weapon</em> wielded by a champion of the faith counts as having his chosen alignment for the purposes of overcoming damage reduction.</Pair>
<Pair title="At 12th Level">Once per day as a <strong className="hl">swift action</strong>, a champion of the faith can enhance any one <em>sacred weapon</em> with a weapon special ability based on his chosen alignment (<Link to="/magic-enh/anarchic">anarchic</Link> for chaos, <Link to="/magic-enh/unholy">unholy</Link> for evil, <Link to="/magic-enh/holy">holy</Link> for good, and <Link to="/magic-enh/axiomatic">axiomatic</Link> for law). This effect lasts for 1 minute.</Pair>
<Pair title="At 16th Level">He can use this ability twice a day.</Pair>
<Pair title="At 20th Level">He can use this three times a day.</Pair>
</Ability>
<Ability id="detect-alignment-sp" icon={["magic-swirl"]}>
<Pair single id="detect-alignment-sp" flavor="A champion of the faith can detect his opposed alignment.">Detect Alignment (Sp)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 3rd level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Move-Equivalent Action">The champion of the faith can focus on a single item or creature within 60 feet and determine whether it possesses his opposed alignment, as <Link to="/spell/detect_evil">detect chaos/evil/good/law</Link>, learning the strength of the aura as if he had studied it for 3 rounds. The champion of the faith does not detect alignment in any other object or creature when using this ability in this way.</Pair>
</Ability>
<Ability id="smite-su" icon={["armor-downgrade","armor-upgrade"]}>
<Pair single id="smite-su" flavor="A champion of the faith can focus his powers against his chosen foes.">Smite (Su)</Pair>
<Pair hl title="Replaces">Channel energy</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">1 time/day per four warpriest levels<ByLevelPop levels={[[4,1],[8,2],[12,3],[16,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action"><p>The champion of the faith chooses one target within sight to <em>smite.</em> If this target is of his opposed alignment, the champion of the faith adds his Charisma bonus (if any) to his attack rolls and adds his warpriest level to all damage rolls made against the target of his <em>smite.</em> If the target of his <em>smite</em> is an <Link to="/type/outsider">outsider</Link> with the subtype corresponding to his opposed alignment, the bonus to damage on the first successful attack increases to 2 points of damage per warpriest level the champion of the faith possesses. Regardless of the target, <em>smite</em> attacks automatically bypass any DR the target possesses.</p>
<p>In addition, while <em>smite</em> is in effect, the champion of the faith gains a deflection bonus equal to his Charisma modifier (if any) to his AC against attacks made by the target of the <em>smite.</em> If the <em>smite</em> targets a creature that's not of the champion of the faith's opposed alignment, the <em>smite</em> is wasted with no effect.</p>
<p>The <em>smite</em> effect remains until the target of the <em>smite</em> is dead or the next time the champion of the faith regains spells.</p>
</Pair>
<Pair title="Special">Using this ability consumes two uses of his <em>fervor</em> ability.</Pair>
</Ability>
</>};
const _cult_leader = {title: "Cult Leader", jsx: <><h2 id="arc-warpriest-cult_leader-cult-leader">Cult Leader</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 128</Link><br/>Referred to as fanatics, lunatics, or obsessives, cultists see themselves as genuine devotees of their deity. And the hierarchs of those devotees, the cult leaders, are the most fanatical of them all. Cult leaders are known for turning reasonable hearts toward corrupted teachings and striking at those that get in the way of their agenda.</p>
<Ability icon={["skills"]} id="undefined">
<Pair id="undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/disguise">Disguise</Link> (CHA), <Link to="/skill/escape_artist">Escape Artist</Link> (DEX), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> (DEX), <Link to="/skill/stealth">Stealth</Link> (DEX)</Pair>
<Pair title="Removed Skills">Handle Animal, Knowledge (engineering), Ride, Survival, Swim</Pair></Ability>
<Ability id="skill-ranks-per-level" icon={["upgrade"]}>
<Pair single id="skill-ranks-per-level">Skill Ranks per Level</Pair>
<Pair title="Info">4 + Int modifier.</Pair>
</Ability>
<Ability id="weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiencies</Pair>
<Pair title="Info">Cult leaders are proficient with all simple weapons, plus the <Link to="/eq-weapon/hand_crossbow">hand crossbow</Link>, <Link to="/eq-weapon/rapier">rapier</Link>, <Link to="/eq-weapon/sap">sap</Link>, <Link to="/eq-weapon/shortbow">shortbow</Link>, and <Link to="/eq-weapon/short_sword">short sword</Link>, as well as the favored weapon of their deity. They are proficient with light armor and light shields. The cult leader does not gain <Link to="/feat/weapon_focus">Weapon Focus</Link> as a bonus feat as a warpriest normally would.</Pair>
</Ability>
<Ability id="well-hidden-ex" icon={["upgrade"]}>
<Pair single id="well-hidden-ex">Well-Hidden (Ex)</Pair>
<Pair hl title="Replaces">Focus weapon</Pair>
<Pair title="Passive Ability">A cult leader gains a +2 bonus on Disguise and Stealth checks.</Pair>
</Ability>
<Ability id="sneak-attack-ex" icon={["stairs-goal"]}>
<Pair single id="sneak-attack-ex">Sneak Attack (Ex)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 3rd, 9th, and 15th levels</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A cult leader gains the <Link to="/ability/sneak_attack">sneak attack</Link> ability, as the rogue class feature. If he already has sneak attack from another class, the extra damage from the classes that grant sneak attack stack for the purpose of determining the sneak attack's extra damage dice. This extra damage is 1d6.</Pair>
<Pair title="At 6th Level">The damage becomes 2d6.</Pair>
<Pair title="At 9th Level">The damage increases to 3d6.</Pair>
<Pair title="At 12th Level">The damage becomes 4d6.</Pair>
<Pair title="At 15th Level">The damage increases to 5d6.</Pair>
<Pair title="At 18th Level">The damage becomes 6d6.</Pair>
</Ability>
<Ability id="enthrall-sp" icon={["magic-swirl"]}>
<Pair single id="enthrall-sp">Enthrall (Sp)</Pair>
<Pair hl title="Replaces">Channel energy</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A cult leader can cast <Link to="/spell/enthrall">enthrall</Link>. Using this ability consumes two uses of his <em>fervor</em> ability.</Pair>
</Ability>
<Ability id="hide-in-plain-sight-su" icon={["stairs-goal"]}>
<Pair single id="hide-in-plain-sight-su">Hide in Plain Sight (Su)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 12th level</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">A cult leader can use the Stealth skill even while being observed. As long as he is within 10 feet of an area of <Link to="/rule/dim_light">dim light</Link>, a cult leader can hide himself from view in the open without anything to actually hide behind. He cannot, however, hide in his own shadow.</Pair>
</Ability>
</>};
const _disenchanter = {title: "Disenchanter", jsx: <><h2 id="arc-warpriest-disenchanter-disenchanter">Disenchanter</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 129</Link><br/>While many warpriests focus on threats to the body, the disenchanter focuses on dangers to the mind and the soul. Using the power of his patron, the disenchanter seeks to keep the powers of magic in check.</p>
<Ability id="bonus-feats-ex" icon={["info"]}>
<Pair single id="bonus-feats-ex">Bonus Feats (Ex)</Pair>
<Pair hl title="Alters">Bonus feats</Pair>
<Pair title="Info">Whenever a disenchanter gains a bonus feat, he must choose from the following list: <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_counterspell">Improved Counterspell</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/skill_focus">Skill Focus</Link> (Spellcraft), or <Link to="/feat/spell_focus">Spell Focus</Link> (abjuration).</Pair>
<Pair title="At 6th Level">He adds the following feats to this list: <Link to="/feat/dispel_synergy">Dispel Synergy</Link>, <Link to="/feat/improved_great_fortitude">Improved Great Fortitude</Link>, <Link to="/feat/improved_iron_will">Improved Iron Will</Link>, and <Link to="/feat/improved_lightning_reflexes">Improved Lightning Reflexes</Link>.</Pair>
<Pair title="At 12th Level">He adds the following feats to this list: <Link to="/feat/destructive_dispel">Destructive Dispel</Link>, <Link to="/feat/dispelling_critical">Dispelling Critical</Link>, <Link to="/feat/parry_spell">Parry Spell</Link>, and <Link to="/feat/ray_shield">Ray Shield</Link>.</Pair>
<Pair title="Special">He need not meet the prerequisites for these feats.</Pair>
</Ability>
<Ability id="mystic-interference-su" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="mystic-interference-su">Mystic Interference (Su)</Pair>
<Pair hl title="Replaces">Channel energy</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A disenchanter can channel a <Link to="/misc/burst">burst</Link> of pure abjuration magic to grant protection to himself and all allies with 30 feet. Affected creatures receive a bonus on saving throws against spells and spell-like abilities for a number of rounds equal to his warpriest level. The bonus is equal to <Link to="/misc/one_fourth">one-fourth</Link> of his warpriest level. This is a sacred bonus if the warpriest is good-aligned or able to spontaneously cast <em>cure</em> spells, and a profane bonus if the warpriest is evil-aligned or able to spontaneously cast <em>inflict</em> spells. Using this ability consumes two uses of his <em>fervor</em> ability.</Pair>
</Ability>
<Ability id="banish-enchantment-su" icon={["magic-swirl"]}>
<Pair single id="banish-enchantment-su" flavor="A disenchanter learns to focus his mystic interference.">Banish Enchantment (Su)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Standard Action">He can consume two uses of his <em>fervor</em> ability to target a single creature within 30 feet with a targeted <Link to="/spell/dispel_magic">dispel magic</Link>.</Pair>
</Ability>
</>};
const _divine_champion = {title: "Divine Champion", jsx: <><h2 id="arc-warpriest-divine_champion-divine-champion">Divine Champion</h2>
<p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology pg. 14</Link><br/>Divine champions are unswervingly devoted to their causes, and specialize in bringing battle to the enemies of their faiths. They are similar to divine paragons in many ways, but tend to focus more on their deity's combat prowess rather than seeking to become a physical manifestation of the deity's will.</p>
<Ability id="devotion" icon={["info"]}>
<Pair single id="devotion">Devotion</Pair>
<Pair title="Info">A divine champion's power comes from his close connection to his deity. He must worship a deity, and must maintain the same alignment as that deity.</Pair>
</Ability>
<Ability id="obedient-champion" icon={["stairs-goal"]}>
<Pair single id="obedient-champion">Obedient Champion</Pair>
<Pair hl title="Replaces">Bonus feat gained at 3rd level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The divine champion gains <Link to="/feat/deific_obedience">Deific Obedience</Link> as a bonus feat, even if he doesn't meet the feat's prerequisites. When a divine champion gains boons from this feat, he gains the appropriate <strong>sentinel</strong> boon offered by his deity, rather than gaining the <strong>exalted</strong> boon.</Pair>
</Ability>
<Ability id="know-the-infidel-ex" icon={["upgrade"]}>
<Pair single id="know-the-infidel-ex" flavor="The divine champion becomes an expert at combating enemies of his faith.">Know the Infidel (Ex)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 6th, 12th, and 18th levels</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Choice"><p>He must choose a deity whose alignment is opposed to his own deity's alignment in at least one way (good versus evil or law versus chaos); preferably, he should choose a <Link to="/main/faiths_alignments">deity whose alignment</Link> diametrically opposes that of his own deity. If the divine champion worships a deity whose alignment is neutral, he must instead select a deity whose alignment is chaotic evil, chaotic good, lawful evil, or lawful good.</p>
<p>The choice of this enemy deity is subject to GM approval. At the GM's discretion, the divine champion may be allowed to choose a philosophy or religious organization that's not affiliated with a deity, such as the <Link to="/faith/green_faith">Green Faith</Link>, the <Link to="/trait/pure_legion_recruit">Pure Legion</Link>, or the <Link to="/rule/whispering_way">Whispering Way</Link>, but only if that philosophy or religious organization is an enemy of the divine champion's deity.</p>
</Pair>
<Pair title="Ability">The divine champion gains a +2 bonus on Bluff, Intimidate, Knowledge, Perception, and Sense Motive checks against followers of the enemy faith, as well as a +2 bonus on weapon attack and damage rolls made against them. Additionally, he can attempt Knowledge skill checks relating to the deity and its church untrained, even if the DC is higher than 10.</Pair>
<Pair title="At 12th Level">The divine champion can select an additional deity to oppose. In addition, the bonus against the followers of any one deity he selected previously (including the one just selected, if so desired) increases by +2.</Pair>
<Pair title="At 18th Level">The divine champion can select an additional deity to oppose. In addition, the bonus against the followers of any one deity he selected previously (including the one just selected, if so desired) increases by +2.</Pair>
</Ability>
<Ability id="fervent-boon-sp" icon={["magic-swirl"]}>
<Pair single id="fervent-boon-sp" flavor="A divine champion can call upon his deity for minor boons.">Fervent Boon (Sp)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 9th level</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability"><p>By spending <em>fervor,</em> he can cast one of the spell-like abilities included in his deity's first <strong>sentinel</strong> boon.</p>
<p>By expending one use of <em>fervor,</em> he can cast the spell-like ability that the boon normally grants three uses of per day; by expending two uses of <em>fervor</em> he can cast the spell-like ability that the boon normally grants twice per day; and by expending three uses of <em>fervor,</em> he can cast the spell-like ability that the boon normally grants once per day. These uses don't count against any uses granted by the boon.</p>
</Pair>
</Ability>
</>};
const _divine_commander = {title: "Divine Commander", jsx: <><h2 id="arc-warpriest-divine_commander-divine-commander">Divine Commander</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 129</Link><br/>Some warpriests are called to lead great armies and face legions of foes. These divine commanders live for war and fight for glory. Their hearts quicken at battle cries, and they charge forth with their deity's symbol held high. These leaders of armies do so to promote the agenda of their faith, and lead armies of devoted followers willing to give their lives for the cause. (Several of the divine commander's abilities reference and interact with the <Link to="/rule/mass_combat">mass combat rules</Link>.)</p>
<Ability id="mount-ex" icon={["stairs-goal"]}>
<Pair single id="mount-ex">Mount (Ex)</Pair>
<Pair hl title="Replaces">Blessings</Pair>
<Pair title="Ability"><p>A divine commander gains the service of a loyal and trusty steed to carry her into battle. This mount functions as a druid's <Link to="/sidekick/animal_companion">animal companion</Link>, using the divine commander's level as her effective druid level. The creature must be one that she is capable of riding and must be suitable as a mount.</p>
<p>A Medium divine commander can select a <Link to="/companion/camel">camel</Link> or a <Link to="/companion/horse">horse</Link>. A Small divine commander can select a <Link to="/companion/pony">pony</Link> or <Link to="/companion/wolf">wolf</Link>, but can also select a <Link to="/companion/boar">boar</Link> or a <Link to="/companion/dog">dog</Link> if she is at least 4th level. (The GM might approve other animals as suitable mounts.)</p>
<p>A divine commander does not take an armor check penalty on Ride checks while riding this mount. The mount is always considered combat trained, and begins play with <Link to="/feat/light_armor_proficiency">Light Armor Proficiency</Link> as a bonus feat. A divine commander's mount does not gain the <em>share spells</em> special ability. Should a divine commander's mount die, she can find another mount to serve her after 1 week of mourning. This new mount does not gain the <em>link, evasion, devotion,</em> or <em>improved evasion</em> special abilities until the next time the divine commander gains a level.</p>
</Pair>
</Ability>
<Ability id="battle-tactician-ex" icon={["stairs-goal"]}>
<Pair single id="battle-tactician-ex">Battle Tactician (Ex)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 3rd level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A divine commander gains a <Link to="/main/teamwork_feat">teamwork feat</Link> as a bonus feat. She must meet the prerequisites for this feat.</Pair>
<Pair title="Standard Action">The divine commander can grant this feat to all allies within 30 feet who can see and hear her. Allies retain the use of this bonus feat for 4 rounds. Allies do not need to meet the prerequisites of this bonus feat.</Pair>
<Pair title="Usage">1 time/day + 1 per six warpriest levels beyond 3rd<ByLevelPop levels={[[3,1],[9,2],[15,3]]} unit="time" postText="/day" /></Pair>
<Pair title="At 5th Level">The amount of time allies gain this feat becomes 5 rounds.</Pair>
<Pair title="At 7th Level">The amount of time allies gain this feat increases to 6 rounds.</Pair>
<Pair title="At 9th Level">The amount of time allies gain this feat becomes 7 rounds.</Pair>
<Pair title="At 11th Level">The amount of time allies gain this feat increases to 8 rounds.</Pair>
<Pair title="At 13th Level">The amount of time allies gain this feat becomes 9 rounds.</Pair>
<Pair title="At 15th Level">The amount of time allies gain this feat increases to 10 rounds.</Pair>
<Pair title="At 17th Level">The amount of time allies gain this feat becomes 11 rounds.</Pair>
<Pair title="At 19th Level">The amount of time allies gain this feat increases to 12 rounds.</Pair>
</Ability>
<Ability id="blessed-mount-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="blessed-mount-su">Blessed Mount (Su)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability"><p>A divine commander's mount becomes a creature blessed by his deity. The divine commander's mount gains either the <Link to="/template/celestial">celestial</Link>, <Link to="/template/entropic">entropic</Link>, <Link to="/template/fiendish">fiendish</Link>, or <Link to="/template/resolute">resolute</Link> template, matching the alignment of the warpriest's deity (celestial for good, entropic for chaotic, fiendish for evil, and resolute for lawful). If the deity matches more than one alignment, the divine commander can select which of the two templates the mount receives. Once the type of template is selected, it cannot be changed.</p>
<p>If the divine commander's deity is neutral with no other alignment components, the mount receives spell resistance equal to the divine commander's level + 5, as well as resistance 10 against two types of energy damage of the divine commander's choice.</p>
<p>If a divine commander's mount dies and the divine commander finds another mount, the new mount becomes a <em>blessed mount</em> the next time the divine commander gains a level.</p>
</Pair>
</Ability>
<Ability id="greater-battle-tactician-ex" icon={["stairs-goal"]}>
<Pair single id="greater-battle-tactician-ex">Greater Battle Tactician (Ex)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 12th level</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability"><p>The divine commander gains an additional teamwork feat as a bonus feat. She must meet the prerequisites for this feat. The divine commander can grant this feat to her allies using the <em>battle tactician</em> ability.</p>
<p>Additionally, using the <em>battle tactician</em> ability is now a <strong className="hl">swift action</strong>.</p>
</Pair>
</Ability>
<Ability id="bless-army-su" icon={["upgrade","shield-reflect"]}>
<Pair single id="bless-army-su">Bless Army (Su)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 15th level</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A divine commander can raise her holy symbol high and give a blessing to the army she is leading. The divine commander's army gains a +1 bonus to the army's <Link to="/rule/om_and_dv">OM and DV</Link>. This is a sacred bonus if the warpriest is good-aligned or able to spontaneously cast <em>cure</em> spells, and it is a profane bonus if the warpriest is evil-aligned or able to spontaneously cast <em>inflict</em> spells.</Pair>
<Pair title="Special">Using this ability requires the divine commander to expend two uses of her <em>fervor</em> ability. This bonus lasts for 1 battle, and it must be performed during the <em>tactics</em> phase of the battle. If this is performed when a mass combat is not imminent, the fervor is spent without granting any bonus.</Pair>
</Ability>
</>};
const _feral_champion = {title: "Feral Champion", jsx: <><h2 id="arc-warpriest-feral_champion-feral-champion">Feral Champion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 97</Link><br/>When a warpriest devotes himself to a god of the natural world, he is sometimes blessed with supernatural powers that allow him to evoke animalistic power and fury.</p>
<p><strong>Feral Blessing:</strong> A feral champion must take the <Link to="/blessing/animal">Animal</Link> blessing and does not gain a second blessing.</p>
<p>This alters <strong className="hl">blessings</strong>.</p>
<p><strong>Sacred Claws (Su):</strong> Rather than empowering a physical weapon, a feral champion grows claws as primary <Link to="/umr/natural_weapons">natural weapons</Link> on each hand. These claws deal damage as a warpriest's sacred weapon and can be enhanced as such.</p>
<p>This alters <strong className="hl">sacred weapon</strong>.</p>
<p><strong>Wild Shape (Su):</strong> At 7th level, a feral champion gains wild shape, as the <Link to="/class/druid">druid</Link> ability of the same name, and treats his warpriest level - 3 as his effective druid level for the purposes of this ability. However, a feral champion does not gain the ability to take on elemental or plant forms with wild shape. A feral champion can use wild shape once per day at 7th level and one additional time per day every 4 levels thereafter, for a total of four times per day at 19th level.</p>
<p>This replaces <strong className="hl">sacred armor</strong>.</p>
</>};
const _fist_of_the_godclaw = {title: "Fist of the Godclaw", jsx: <><h2 id="arc-warpriest-fist_of_the_godclaw-fist-of-the-godclaw">Fist of the Godclaw</h2>
<p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 12</Link><br/>Devoted to the divine control of law above all else, these zealots seek to establish absolute order. Disciplined and precise, they lead their allies against the chaotic hordes.</p>
<p><strong>Alignment:</strong> A fist of the Godclaw must be of a lawful alignment.</p>
<p>This alters the warpriest's <strong className="hl">alignment restriction</strong>.</p>
<p><strong>Deity:</strong> A fist of the Godclaw must worship <Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/irori">Irori</Link>, or <Link to="/faith/torag">Torag</Link>. Alternatively, the fist of the Godclaw must venerate the pantheon of these deities known as the Godclaw.</p>
<p><strong>Blessings of the Godclaw (Ex):</strong> A fist of the Godclaw must select the <Link to="/blessing/law">Law</Link> blessing and the <Link to="/blessing/godclaw">Godclaw</Link> blessing.</p>
<p>This alters <strong className="hl">blessings</strong>.</p>
<p><strong>Detect Chaos (Sp):</strong> At 3rd level, a fist of the Godclaw can cast <Link to="/spell/detect_chaos">detect chaos</Link> three times per day as a spell-like ability, using his warpriest level as his caster level. If the fist of the Godclaw already has, or later gains, the ability to cast detect chaos, then he can cast detect chaos at will as a spell-like ability.</p>
<p>This replaces the <strong className="hl">bonus feat</strong> gained at 3rd level.</p>
<p><strong>Alignment Channel (Su):</strong> At 6th level, a fist of the Godclaw gains <Link to="/feat/alignment_channel">Alignment Channel</Link> as a bonus feat. When he uses this feat and spends fervor to channel energy, he can harm only outsiders with the chaotic subtype. Additionally, when using this feat, he expends only one use of his fervor to channel energy and deals 1d6 points of damage for every 2 warpriest levels he has. At 12th level, a fist of the Godclaw can expend an additional use of fervor to channel energy as a move action.</p>
<p>This replaces the <strong className="hl">bonus feats</strong> gained at 6th level and 12th level.</p>
<p><strong>Aspect of Law (Ex):</strong> At 20th level, a fist of the Godclaw can channel an aspect of law, growing even more inflexible. Once per day as a swift action, a warpriest can treat his level as his base attack bonus, gains DR 20/chaotic, and becomes immune to mind-affecting effects. In addition, he can take the average result on any die roll instead of rolling normally. This ability lasts for 1 minute.</p>
<p>This replaces <strong className="hl">aspect of war</strong>.</p>
</>};
const _forgepriest = {title: "Forgepriest", jsx: <><h2 id="arc-warpriest-forgepriest-forgepriest">Forgepriest</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 130</Link><br/>Armorers of exquisite skill, forgepriests take inspiration from their deity to produce the most perfect weapons and armor they can, the better to equip the armies of the faithful.</p>
<p><strong>Blessings:</strong> A forgepriest selects only one blessing.</p>
<p>This alters the <strong className="hl">blessings</strong> class feature.</p>
<p><strong>Smith's Spells:</strong> A forgepriest adds the following spells to his spell list: 1st-<Link to="/spell/jury_rig">jury rig</Link>, <Link to="/spell/shield">shield</Link>; 2nd-<Link to="/spell/heat_metal">heat metal</Link>, <Link to="/spell/shatter">shatter</Link>; 3rd-<Link to="/spell/keen_edge">keen edge</Link>, <Link to="/spell/quench">quench</Link>, <Link to="/spell/versatile_weapon">versatile weapon</Link>; 4th-<Link to="/spell/wreath_of_blades">wreath of blades</Link>; 5th-<Link to="/spell/fabricate">fabricate</Link>, <Link to="/spell/major_creation">major creation</Link>; 6th-<Link to="/spell/mages_sword">mage's sword</Link>.</p>
<p><strong>Forge Mastery (Ex):</strong> A 2nd level, the forgepriest adds a bonus equal to half his level to all Craft checks to make metal items, armor, and weapons. (This benefit is gained from the altered version of blessings, above.)</p>
<p><strong>Bonus Feats:</strong> A forgepriest can select <Link to="/main/item_creation_feat">item creation feats</Link> in addition to combat feats when he gains a bonus feat.</p>
<p>This ability alters <strong className="hl">bonus feats</strong>.</p>
<p><strong>Craft Magic Arms and Armor:</strong> At 3rd level, a forgepriest gains <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link> as a bonus feat.</p>
<p>This ability replaces the <strong className="hl">bonus feat</strong> gained at 3rd level.</p>
<p><strong>Creator's Bond (Su):</strong> At 4th level, when a forgepriest uses his sacred weapon ability with an item he created personally, he can expend two uses of his fervor ability to increase the bonus granted by 1. Once the forgepriest has the sacred armor ability, he can also use this ability in conjunction with that.</p>
<p>This ability replaces <strong className="hl">channel energy</strong>.</p>
<p><strong>Heat of the Forge (Su):</strong> At 6th level, a forgepriest gains fire resistance 5. At 13th level, this resistance increases to 10.</p>
<p>This ability replaces the <strong className="hl">bonus feat</strong> gained at 6th level.</p>
</>};
const _jistkan_magistrate = {title: "Jistkan Magistrate", jsx: <><h2 id="arc-warpriest-jistkan_magistrate-jistkan-magistrate">Jistkan Magistrate</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 17</Link><br/>Some warpriests study the ancient magic that the Jistkan magistrates used to bind elementals and make pacts with genies. By tapping into the elementals' primal magic, these warpriests gain powers that help them in combat.</p>
<Ability icon={["skills"]} id="undefined">
<Pair id="undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT)</Pair>
<Pair title="Removed Skills">Survival</Pair></Ability>
<p><strong>Elemental Binder (Su):</strong> A Jistkan magistrate must worship a deity who grants the <Link to="/blessing/air">Air</Link>, <Link to="/blessing/earth">Earth</Link>, <Link to="/blessing/fire">Fire</Link>, or <Link to="/blessing/water">Water</Link> blessing, and he must select one of these blessings. He does not gain a second blessing.</p>
<p>This alters the warpriest's <strong className="hl">blessings</strong>.</p>
<p><strong>Spontaneous Summons:</strong> A Jistkan magistrate is extremely flexible in channeling his stored spell energy. In addition to losing prepared spells to cast "cure" or "inflict" spells, he can also lose a prepared spell in order to cast any <Link to="/spell/summon_monster">summon monster</Link> spell of the same level or lower. He can use this ability only to summon an <Link to="/family/elemental">elemental</Link> whose subtype matches his blessing. He can expend one use of his fervor ability to decrease the spell's casting time to 1 standard action and to increase the spell's duration to 1 minute per level.</p>
<p>This alters <strong className="hl">spontaneous casting</strong>.</p>
<p><strong>Bonus Languages:</strong> A Jistkan magistrate's bonus language options include Aquan, Auran, Ignan, and Terran instead of Abyssal, Celestial, and Infernal. These choices are in addition to the bonus languages available to the character because of his race.</p>
<p>This alters the warpriest's <strong className="hl">bonus languages</strong>.</p>
<p><strong>Channel Element (Su):</strong> At 4th level, a Jistkan magistrate gains <Link to="/feat/elemental_channel">Elemental Channel</Link> as a bonus feat, choosing the elemental subtype that matches his blessing. He doesn't gain the ability to harm undead with channeled energy (if he channels positive energy) or heal undead (if he channels negative energy). Instead, he can channel a blast of elemental matter and energy that buffets his targets. The Jistkan artificer's blessing determines the damage type of this attack, as indicated by the table below. A successful Reflex save halves the damage.</p>
<p>This alters <strong className="hl">channel</strong>.</p>
<h3 id="arc-warpriest-jistkan_magistrate-channel-element-damage">Channel Element Damage</h3>
<ScrollContainer id="arc-warpriest-jistkan_magistrate--table-0"><table>
<thead>
<tr>
<th>Blessing</th>
<th>Damage type</th>
</tr>
</thead>
<tbody><tr>
<td>Air</td>
<td>Electricity</td>
</tr>
<tr>
<td>Earth</td>
<td>Acid</td>
</tr>
<tr>
<td>Fire</td>
<td>Fire</td>
</tr>
<tr>
<td>Water</td>
<td>Cold</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _libertys_blade = {title: "Liberty's Blade", jsx: <><h2 id="arc-warpriest-libertys_blade-libertys-blade">Liberty's Blade</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 24</Link><br/>There are some who find in the call to freedom something primal and spiritual, even more so than other Andorens. These liberty's blades become warpriests of deities who spread freedom, and they head to lives of adventure as <Link to="/rule/eagle_knights">Eagle Knights</Link> or adventurers, championing liberty wherever they go.</p>
<p><strong>Freedom's Focus (Su):</strong> A liberty's blade must worship a good deity who grants the <Link to="/blessing/liberation">Liberation</Link> blessing, and he must select the Liberation blessing. He does not gain a second blessing.</p>
<p>This ability alters <strong className="hl">blessings</strong>.</p>
<p><strong>Devilslayer (Su):</strong> At 4th level, a liberty's blade adds <Link to="/magic-enh/bane">devil bane</Link> to the list of enhancements he can add to his sacred weapon.</p>
<p>This ability alters <strong className="hl">sacred weapon</strong>.</p>
<p><strong>Channel Liberty (Su):</strong> At 4th level, when a liberty's blade channels energy to heal, the effects of his healing is halved, but all creatures affected by his healing instantly benefit as if from a <Link to="/spell/liberating_command">liberating command</Link> spell at the liberty's blade's caster level. When channeling to harm, the liberty's blade harms devils as if using <Link to="/feat/alignment_channel">Alignment Channel</Link> instead of harming undead, and she deals double the normal amount of damage.</p>
<p>This ability alters <strong className="hl">channel energy</strong>.</p>
<p><strong>Shield Against Hellspawn (Su):</strong> At 7th level, a liberty's blade adds <Link to="/magic-enh/defiant">devil defiant</Link> to the list of enhancements that he can add to his sacred armor.</p>
<p>This ability alters <strong className="hl">sacred armor</strong>.</p>
</>};
const _mantis_zealot = {title: "Mantis Zealot", jsx: <><h2 id="arc-warpriest-mantis_zealot-mantis-zealot">Mantis Zealot</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 157</Link>, <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 25</Link><br/>Among the <Link to="/rule/red_mantis">Red Mantis</Link> worshipers of Achaekek, some hold such strong faith in their assassin god that they gain divine power. They forge themselves into perfect killers in honor of He Who Walks in Blood. These warpriests are a relatively recent addition to the Red Mantis arsenal, but in the few short decades they have served the assassins, they have quickly built a reputation for themselves as particularly fanatical devotees of the Mantis God. Their penchant for taking the faith's writings verbatim and for overwhelming and often destructive pedantry serves them well in matters of loyalty to Achaekek (and particularly when it comes to drafting contracts for assassinations that favor the organization in financial and tactical ways), but it offers little room for complex cases that would benefit from bending the rules, making them unsuitable for missions that require diplomatic finesse. In addition, the rising incidence of mantis zealots accusing fellow worshipers of Achaekek of heresy and blasphemy, resulting in internal accusations, exiles, and even fullblown assassinations, increasingly makes them objects of fear and distrust among even their own kind. Whether the rise of the mantis zealot presages a dramatic upcoming shift in the religion's hierarchy and methods, or whether the faction may be burning too bright for its own good and is hurtling toward self-annihilation, remains to be seen.</p>
<p><strong>Mantis Sworn (Ex):</strong> A mantis zealot must choose <Link to="/faith/achaekek">Achaekek</Link> as his deity, and he must be lawful evil in alignment. If he ever changes his deity, he loses this archetype and becomes a normal warpriest.</p>
<p><strong>Weapon and Armor Proficiency:</strong> Mantis zealots are proficient with simple and martial weapons, as well as with the <Link to="/eq-weapon/sawtooth_sabre">sawtooth sabre</Link>. They are proficient with light armor but not with shields.</p>
<p>This replaces the warpriest's <strong className="hl">weapon and armor proficiencies</strong>.</p>
<p><strong>Sneak Attack (Ex):</strong> At 4th level, a mantis zealot can make a <Link to="/ability/sneak_attack">sneak attack</Link>. This ability functions as the rogue class feature of the same name. At 4th level, his sneak attack damage is +1d6. This damage increases by 1d6 at 8th level and every 4 warpriest levels thereafter. If the zealot gets a sneak attack bonus from another source, the bonuses stack.</p>
<p>This ability replaces <strong className="hl">sacred weapon</strong>.</p>
<p><strong>Sacred Reflexes (Su):</strong> At 7th level, a mantis zealot can emulate Achaekek's grace and move with a supernatural fluidity. As long as he is wearing light or no armor, as a swift action he can gain <Link to="/ability/uncanny_dodge">uncanny dodge</Link> as per the rogue class feature. He can use this ability for a number of minutes per day equal to his warpriest level. This duration does not need to be consecutive, but it must be spent in 1-minute increments. If he already has the uncanny dodge ability from another source, he instead gains <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> while this ability is active. At 10th level, when he uses this ability, he also gains <Link to="/ability/evasion">evasion</Link> as per the <Link to="/class/monk">monk</Link> class feature (or <Link to="/ability/improved_evasion">improved evasion</Link> if he already has evasion from another source). At 13th level, he gains improved uncanny dodge instead of uncanny dodge. At 16th level, he can activate this ability as part of making an initiative check, before rolling the die. At 19th level, he gains improved evasion instead of evasion.</p>
<p>This ability replaces <strong className="hl">sacred armor</strong>.</p>
<p><strong>Aspect of the Mantis (Su):</strong> At 20th level, when using aspect of war, instead of moving at full speed regardless of his armor or encumbrance, a mantis zealot deals a number of points of bleed damage equal to his Dexterity modifier with each attack.</p>
<p>This ability alters <strong className="hl">aspect of war</strong>.</p>
</>};
const _molthuni_arsenal_chaplain = {title: "Molthuni Arsenal Chaplain", jsx: <><h2 id="arc-warpriest-molthuni_arsenal_chaplain-molthuni-arsenal-chaplain">Molthuni Arsenal Chaplain</h2>
<p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook pg. 6</Link><br/>Molthuni arsenal chaplains are warpriests trained in the Arsenal District in Korholm. They bolster their nation's military by focusing on the militant aspects of their gods.</p>
<p><strong>War Blessing (Su):</strong> A Molthuni arsenal chaplain must choose <Link to="/blessing/war">War</Link> as his blessing, and can do so even if it is a domain not normally granted by his deity. He does not receive a second blessing.</p>
<p>At 7th level, a Molthuni arsenal chaplain gains <Link to="/feat/quicken_blessing">Quicken Blessing</Link> (War) as a bonus feat even if he does not meet the prerequisites, but cannot grant a War blessing to himself as a swift action with Quicken Blessing until he is at least 10th level.</p>
<p>At 13th level, a Molthuni arsenal chaplain can use the War blessing on an ally at a range of up to 30 feet by spending an additional use of the blessing ability.</p>
<p>At 16th level, a Molthuni arsenal chaplain can use the War blessing on a second target with a single use of the blessing ability.</p>
<p>At 19th level, a Molthuni arsenal chaplain can use the War blessing on any number of targets at once with a single use of the blessing ability.</p>
<p>This ability alters <strong className="hl">blessing</strong> and replaces <strong className="hl">sacred armor</strong>.</p>
<p><strong>Sacred Weapon (Su):</strong> The base damage of a Molthuni arsenal chaplain's sacred weapon does not increase above 1d6.</p>
<p>This alters <strong className="hl">sacred weapon</strong>.</p>
<p><strong>Weapon Training (Ex):</strong> At 5th level, a Molthuni arsenal chaplain gains weapon training as per the <Link to="/class/fighter">fighter</Link> class feature, but the benefits of this weapon training apply only to the his sacred weapons (weapons with which the warpriest has taken <Link to="/feat/weapon_focus">Weapon Focus</Link>).</p>
<p>This ability replaces <strong className="hl">channel energy</strong>.</p>
</>};
const _proclaimer = {title: "Proclaimer", jsx: <><h2 id="arc-warpriest-proclaimer-proclaimer">Proclaimer</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 19</Link><br/>A proclaimer is the polar opposite of a <Link to="/arc-paladin/faithful_wanderer">faithful wanderer (paladin)</Link>, rushing into Abyss-twisted wastes with nothing but his weapon in his hand and his faith in his heart, shouting his deity's name to the skies. Most proclaimers don't survive their first day in a hostile environment, but those who do become the stuff of legend, bolstering the spirits of crusaders near and far.</p>
<p><strong>Righteous Oath:</strong> A proclaimer cannot be evil or worship an evil deity, and he must choose <Link to="/main/cure_spells">cure spells</Link> for his spontaneous casting.</p>
<p>This alters the warpriest's <strong className="hl">spellcasting</strong>.</p>
<p><strong>Cleanser of Evil (Su):</strong> At 2nd level, a proclaimer can hold his weapon aloft and shout his deity's name as a swift action, spending one use of fervor to deal 1d6 points of damage to all evil outsiders within 5 feet. At 5th level and every 3 levels thereafter, this damage increases by an additional 1d6. This damage has the same alignment as the proclaimer's deity (for example, it counts as good and lawful for a worshiper of Ragathiel who uses this ability). At 7th level, the effect expands to include an area within 10 feet of the proclaimer, and it expands by 5 feet every 6 levels thereafter. A proclaimer can't use fervor to damage undead or to heal.</p>
<p>This alters <strong className="hl">fervor</strong> and replaces <strong className="hl">sacred armor</strong>.</p>
<p><strong>Zone of Sanctification (Su):</strong> At 4th level, when a proclaimer uses fervor to damage evil outsiders with his cleanser of evil ability, he can spend one additional use of fervor as a move action to create a zone of sanctification in the same area for 1 round. All evil outsiders in the zone when it becomes active must succeed at a Will saving throw (DC 10 + half the proclaimer's level + his Wisdom modifier) or be pushed back until they are out of the area. Evil outsiders that end their turns in the area take damage as if affected by cleanser of evil.</p>
<p>This replaces <strong className="hl">channel energy</strong>.</p>
</>};
const _proselytizer = {hasJL:true,title: "Proselytizer", jsx: <><div className="jumpList" id="arc-warpriest-proselytizer-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arc-warpriest-proselytizer-converting-npcs">Converting NPCs</InnerLink></li><li><InnerLink toTop to="arc-warpriest-proselytizer-successful-conversion">Successful Conversion</InnerLink></li></ul></div><h2 id="arc-warpriest-proselytizer-proselytizer">Proselytizer</h2>
<p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 24</Link><br/>The proselytizer is the perfect militant missionary. He seeks to win the hearts and lay claim to the souls of those he meets, and - failing that - spreads the word of his deity at the edge of the sword.</p>
<p><strong>Weapon and Armor Proficiencies:</strong> A proselytizer does not gain proficiency with heavy armor or with all martial weapons, though he does gain proficiency in his deity's favored weapon. If his deity's favored weapon is unarmed strike, he gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat.</p>
<p>This ability alters the warpriest's <strong className="hl">weapon and armor proficiencies</strong>.</p>
<p><strong>Emotional Appeal:</strong> A proselytizer has great power over the emotions of others, wielding his voice like a weapon to pierce the heart of listeners and bring them closer to communion with his deity's power. The warpriest adds the following spells to his warpriest spell list at the indicated levels. He casts these as divine warpriest spells: 1st-<Link to="/spell/charm_person">charm person</Link>, <Link to="/spell/rally_point">rally point</Link>, <Link to="/spell/wrath">wrath</Link>; 2nd-<Link to="/spell/castigate">castigate</Link>, <Link to="/spell/heroism">heroism</Link>, <Link to="/spell/suggestion">suggestion</Link>; 3rd-<Link to="/spell/charm_monster">charm monster</Link>, <Link to="/spell/lesser_geas">lesser geas</Link>; 4th-<Link to="/spell/forced_repentance">forced repentance</Link>, <Link to="/spell/serenity">serenity</Link>; 5th-<Link to="/spell/mass_castigate">mass castigate</Link>, <Link to="/spell/mass_suggestion">mass suggestion</Link>; 6th-<Link to="/spell/antipathy">antipathy</Link>, <Link to="/spell/sympathy">sympathy</Link>.</p>
<p>This ability replaces <strong className="hl">sacred armor</strong> and the <strong className="hl">bonus feat</strong> gained at 3rd level.</p>
<p><strong>Sacred Subdual (Su):</strong> When a proselytizer uses his sacred weapon damage in place of his normal weapon damage, all damage he deals with that weapon is nonlethal damage. This ability modifies sacred weapon.</p>
<p><strong>Blessing of Conversion:</strong> The proselytizer always gains the conversion bonus upon converting an NPC, rather than only the first time he does so each level. The bonuses overlap their durations, and do not stack. The proselytizer does not gain access to the minor blessings granted by his blessing class feature until 3rd level. This ability modifies blessings.</p>
<p><strong>Voice of the Faithful (Ex):</strong> A proselytizer of 10th level or higher can expend a use of his major blessing to be able to speak to and understand any creature with a language for 1 hour. This ability modifies blessings (major).</p>
<h3 id="arc-warpriest-proselytizer-converting-npcs" data-hash-target>Converting NPCs</h3>
<p>Cohorts and their masters often share alignment, but a common religion can be just as important. A cohort may share a leader's faith when first recruited, or a PC may seek to convert a cohort as their relationship develops.</p>
<p>While PCs may choose to change alignment, such changes for NPCs may require magical assistance (see the <Link to="/spell/atonement">atonement</Link> spell). Alternatively, you can proselytize for your patron deity, using your powers of persuasion and social influence to indoctrinate an NPC in the dogma of the faith while inspiring their fealty.</p>
<p>Converting an NPC to your faith is similar to modifying their reaction with Diplomacy. You can only attempt to convert NPCs who are at least indifferent toward you, though you can take time to make a hostile or unfriendly NPC indifferent, and then begin the process of conversion. The DC of a conversion depends on how many conversion steps away from your faith an NPC is, starting at one conversion step for an NPC with no significant faith who matches your faith's alignment. For each step the NPC's alignment differs from the alignment of your faith, add one conversion step. If the NPC already holds a significant religious belief, add an additional conversion step. Note that servants of other faiths - including divine spellcasters who worship a deity and agents in the employ of a formal religion - normally can never be converted to a new faith. The GM has final discretion over whether an NPC will ever convert to your beliefs.</p>
<p>If the GM rules that an NPC can be converted, the DC to convert that NPC is 10 + the NPC's Hit Dice + the NPC's Wisdom or Charisma modifier (whichever is higher) + 5 per conversion step. For example, a 5th level warrior with a Wisdom of 12 and no existing significant faith and who is the same alignment as your deity has a conversion DC of 21. Each conversion attempt requires at least an hour of proselytizing, and you can attempt no more than one conversion check per week. For your conversion attempt, roll a Diplomacy check and a Knowledge (religion) check at the DC determined above. If you succeed at both checks, decrease the number of conversion steps for that NPC by one. If you fail either check, you reinforce the NPC's existing faith and add one to the number of conversion steps for that NPC. If you fail three checks over the course of a conversion effort, the NPC rejects your faith and you cannot attempt another conversion for a year. However, if the number of conversion steps ever reaches 0, you convince the NPC to adopt your religion. Note that this does not necessarily change the NPC's alignment, so you could manage to convince a chaotic evil harpy to worship her own very odd form of Shelyn.</p>
<p>While proselytizing is a reasonable activity for a religious adventurer, it should be handled with sensitivity, both in character and at the gaming table. Having a PC repeatedly attempt to convert NPCs who aren't interested is likely to result in worsening their attitude toward the character, and significant effort may be required to restore those relationships. Some players may be uncomfortable with too much time being spent on religious talk, in which case a GM is free to simply treat the conversion as a skill check, without actually roleplaying the talks that allow the conversion check to take place.</p>
<h3 id="arc-warpriest-proselytizer-successful-conversion" data-hash-target>Successful Conversion</h3>
<p>Characters that successfully convert others to their faith can gain divine blessings for adding new members to their religion. The first time at each character level a PC converts an NPC, they gain a conversion bonus for a number of days equal to the level of the NPC converted. Typical conversion bonuses for various faiths, and examples of classes likely to be interested in converting, are listed on the following page. In the case of Neutral deities, the bonus may be a sacred or profane bonus as most appropriate for the PC who gains it.</p>
<ScrollContainer id="arc-warpriest-proselytizer--table-0"><table>
<thead>
<tr>
<th>Deity</th>
<th>Alignment</th>
<th>Classes</th>
<th>Bonus</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/faith/abadar">Abadar<IonRippleEffect /></Link></td>
<td>LN</td>
<td>Alchemist, cleric, investigator</td>
<td>Leader gains +2 sacred/profane bonus on Appraise checks</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/asmodeus">Asmodeus<IonRippleEffect /></Link></td>
<td>LE</td>
<td>Inquisitor, investigator, slayer</td>
<td>Leader gains +2 profane bonus on Intimidate checks</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/calistria">Calistria<IonRippleEffect /></Link></td>
<td>CN</td>
<td>Bard, slayer, witch</td>
<td>Leader gains +2 sacred/profane bonus on Bluff checks to feint</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/cayden_cailean">Cayden Cailean<IonRippleEffect /></Link></td>
<td>CG</td>
<td>Brawler, skald, swashbuckler</td>
<td>Leader gains +2 sacred bonus on saves vs. fear and ingested poison</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/desna">Desna<IonRippleEffect /></Link></td>
<td>CG</td>
<td>Bard, oracle, witch</td>
<td>Leader gains a +2 sacred bonus on saves vs. curses, divinations, and sleep effects</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/erastil">Erastil<IonRippleEffect /></Link></td>
<td>LG</td>
<td>Hunter, ranger, shaman</td>
<td>Leader gains a +1 sacred bonus on damage rolls with a longbow</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/gorum">Gorum<IonRippleEffect /></Link></td>
<td>CN</td>
<td>Bloodrager, fighter, warpriest</td>
<td>Leader gains a +1 sacred bonus on damage rolls with a greatsword</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/gozreh">Gozreh<IonRippleEffect /></Link></td>
<td>N</td>
<td>Druid, ranger, shaman</td>
<td>Leader gains +2 sacred/profane bonus on Profession and Survival checks</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/iomedae">Iomedae<IonRippleEffect /></Link></td>
<td>LG</td>
<td>Cavalier, paladin, warpriest</td>
<td>Leader gains +2 sacred bonus on Diplomacy checks</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/irori">Irori<IonRippleEffect /></Link></td>
<td>LN</td>
<td>Alchemist, brawler, monk</td>
<td>Leader gains a +1 sacred bonus on damage rolls with unarmed strikes</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/lamashtu">Lamashtu<IonRippleEffect /></Link></td>
<td>CE</td>
<td>Antipaladin, bloodrager, summoner</td>
<td>Leader gains a +1 bonus on damage rolls with natural weapons</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/nethys">Nethys<IonRippleEffect /></Link></td>
<td>N</td>
<td>Arcanist, sorcerer, wizard</td>
<td>Leader gains a +2 sacred/profane bonus on Spellcraft checks</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/norgorber">Norgorber<IonRippleEffect /></Link></td>
<td>NE</td>
<td>Alchemist, rogue, slayer</td>
<td>Leader gains a +2 sacred bonus on Stealth checks</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/pharasma">Pharasma<IonRippleEffect /></Link></td>
<td>N</td>
<td>Arcanist, cleric, oracle</td>
<td>Leader gains a +2 sacred/profane bonus on Knowledge (religion) checks</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/rovagug">Rovagug<IonRippleEffect /></Link></td>
<td>CE</td>
<td>Barbarian, brawler, fighter</td>
<td>Leader gains a +1 profane bonus on sunder combat maneuvers and attack and damage rolls and Strength checks against objects</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/sarenrae">Sarenrae<IonRippleEffect /></Link></td>
<td>NG</td>
<td>Bard, cleric, swashbuckler</td>
<td>Leader gains a +1 sacred bonus to caster level for conjuration (healing) spells and spells with the light descriptor</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/shelyn">Shelyn<IonRippleEffect /></Link></td>
<td>NG</td>
<td>Bard, skald, sorcerer</td>
<td>Leader gains a +1 sacred bonus to caster level for effects with the emotion descriptor (except fear effects)</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/torag">Torag<IonRippleEffect /></Link></td>
<td>LG</td>
<td>Cavalier, fighter, paladin</td>
<td>Leader gains a +2 sacred bonus on Craft checks dealing with metal and on Profession (soldier) checks</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/urgathoa">Urgathoa<IonRippleEffect /></Link></td>
<td>NE</td>
<td>Cleric, witch, wizard</td>
<td>Leader gains a +1 profane bonus to caster level for disease and death effects</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/faith/zon_kuthon">Zon-Kuthon<IonRippleEffect /></Link></td>
<td>LE</td>
<td>Alchemist, inquisitor, magus</td>
<td>Leader gains a +1 profane bonus to caster level for effects with the darkness or pain descriptor</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _sacred_fist = {title: "Sacred Fist", jsx: <><h2 id="arc-warpriest-sacred_fist-sacred-fist">Sacred Fist</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 130</Link><br/>Unlike many warpriests, sacred fists leave behind armor and shield and instead rely on their fists and whatever protection their deity bestows on them.</p>
<Ability icon={["skills"]} id="undefined">
<Pair id="undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/escape_artist">Escape Artist</Link> (DEX), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/stealth">Stealth</Link> (DEX)</Pair>
<Pair title="Removed Skills">Handle Animal, Knowledge (engineering), Survival</Pair></Ability>
<p><strong>Weapon and Armor Proficiency:</strong> Sacred fists are proficient with the <Link to="/eq-weapon/club">club</Link>, <Link to="/eq-weapon/light_crossbow">light crossbow</Link>, <Link to="/eq-weapon/heavy_crossbow">heavy crossbow</Link>, <Link to="/eq-weapon/dagger">dagger</Link>, <Link to="/eq-weapon/handaxe">handaxe</Link>, <Link to="/eq-weapon/javelin">javelin</Link>, <Link to="/eq-weapon/kama">kama</Link>, <Link to="/eq-weapon/nunchaku">nunchaku</Link>, <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>, <Link to="/eq-weapon/sai">sai</Link>, <Link to="/eq-weapon/shortspear">shortspear</Link>, <Link to="/eq-weapon/short_sword">short sword</Link>, <Link to="/eq-weapon/shuriken">shuriken</Link>, <Link to="/eq-weapon/siangham">siangham</Link>, <Link to="/eq-weapon/sling">sling</Link>, and <Link to="/eq-weapon/spear">spear</Link>. Sacred fists are not proficient with any armor or shields. When wearing armor, using a shield, or carrying a medium or heavy load, a sacred fist loses his AC bonus and flurry of blows.</p>
<p>This replaces the warpriest's <strong className="hl">weapon and armor proficiency</strong>.</p>
<p><strong>AC Bonus (Su):</strong> A deity protects her sacred fist as long as he is unarmored and unencumbered. A sacred fist adds his Wisdom modifier (minimum 0) to his AC and his CMD. In addition, a sacred fist gains a +1 dodge bonus to AC and CMD at 4th level. This bonus increases by 1 for every 4 levels thereafter (to a maximum of +5 at 20th level).</p>
<p>These bonuses to AC apply even against touch attacks or when the sacred fist is flat-footed. He loses these bonuses when he is immobilized or helpless, when he wears any armor, when he carries a shield, or when he carries a medium or heavy load. This counts as the <Link to="/class/monk">monk</Link> ability of the same name, and the sacred fist's warpriest levels stack with monk levels for determining the benefits.</p>
<p><strong>Flurry of Blows (Ex):</strong> At 1st level, a sacred fist can make a flurry of blows attack as a full-attack action. This ability works like the monk ability of the same name, except the sacred fist's attack bonus from warpriest levels does not count as his warpriest level.</p>
<p>This ability replaces <strong className="hl">sacred weapon</strong>.</p>
<p><strong>Unarmed Strike:</strong> At 1st level, a sacred fist gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat. He uses his warpriest levels as monk levels for determining the amount of damage dealt with an unarmed strike.</p>
<p>This ability replaces <strong className="hl">focus weapon</strong>.</p>
<p><strong>Blessed Fortitude (Su):</strong> At 3rd level, a sacred fist can avoid even magical and unusual attacks with help from his deity. If he succeeds at a Fortitude saving throw against an attack that has a reduced effect on a successful save, he instead avoids the effect entirely. A helpless sacred fist does not gain the benefit of the blessed fortitude ability.</p>
<p>This ability replaces the <strong className="hl">bonus feat</strong> gained at 3rd level.</p>
<p><strong>Bonus Style Feat:</strong> At 6th level, the sacred fist gains a <Link to="/main/style_feat">style feat</Link> as a bonus feat. The sacred fist must meet the style feat's prerequisites. He uses his warpriest levels as monk levels for the purposes of meeting the feat's prerequisites. At 12th and 18th levels, a sacred fist gains either another style feat or a feat that requires a style feat as a prerequisite.</p>
<p>This ability replaces the <strong className="hl">bonus feats</strong> gained at 6th, 12th, and 18th levels.</p>
<p><strong>Ki Pool (Su):</strong> At 7th level, the sacred fist gains a ki pool. This functions as the monk class feature, using the sacred fist's level - 3 as his monk level when determining the number of points in his pool and bonuses granted to his unarmed strike. Additionally, the sacred fist can as a swift action spend 1 point from his ki pool to grant himself a +1 insight bonus to his AC for 1 minute. (This is in addition the normal ki ability to gain a dodge bonus to AC.) This insight bonus increases by 1 for every 3 levels above 7th (to a maximum of +5 at 19th level).</p>
<p>This ability replaces <strong className="hl">sacred armor</strong>.</p>
<p><strong>Miraculous Fortitude (Su):</strong> At 9th level, the sacred fist's blessed fortitude ability improves. He still takes no damage or negative effect when he succeeds at a Fortitude save, but now when he fails a Fortitude saving throw against a spell or effect that deals damage (including ability damage and drain), he takes only half the amount of damage. A helpless sacred fist does not gain the benefit of miraculous fortitude.</p>
<p>This ability replaces the <strong className="hl">bonus feat</strong> gained at 9th level.</p>
</>};
const _shieldbearer = {title: "Shieldbearer", jsx: <><h2 id="arc-warpriest-shieldbearer-shieldbearer">Shieldbearer</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 7</Link><br/>Shieldbearers are divine warriors who stand on the front lines of battle, shoulder to shoulder with the soldiers of their people. The shieldbearer tradition has long been a strong legacy among the dwarves of the Five Kings Mountains, while many young women throughout the Lands of the Linnorm Kings and Realm of the Mammoth Lords become shieldbearers known as shield maidens. Shieldbearers among the Shoanti are often advisors as well as combatants, while in the Mwangi Expanse shieldbearers are known for defending entire villages from the Gorilla King's minions.</p>
<p><strong>Shield Adept (Ex):</strong> At 1st level, a shieldbearer receives <Link to="/feat/improved_shield_bash">Improved Shield Bash</Link> as a bonus feat. When carrying a shield, the shieldbearer adds his shield bonus on <Link to="/rule/concentration">concentration</Link> checks to cast defensively.</p>
<p>This ability replaces <strong className="hl">focus weapon</strong>.</p>
<p><strong>Sacred Weapon (Su):</strong> A shieldbearer treats shields as sacred weapons (instead of his god's favored weapon), though the shieldbearer can still designate additional weapons as sacred weapons by selecting them with the <Link to="/feat/weapon_focus">Weapon Focus</Link> feat. The shieldbearer's sacred weapon damage applies only to attacks made with shields. The shieldbearer does not gain the ability to enhance sacred weapons until 7th level. For every 3 warpriest levels beyond 7th, this bonus increases by 1 (to a maximum of +5 at 19th level).</p>
<p>This ability alters <strong className="hl">sacred weapon</strong> and also replaces <strong className="hl">sacred armor</strong>.</p>
<p><strong>Sacred Shield (Su):</strong> At 4th level, a shieldbearer gains the ability to enhance his shield with divine power as a swift action. This ability functions as the sacred armor ability, except as follows. This power grants the shield a +1 enhancement bonus (this bonus does not act as an attack or damage bonus when the shield is used in a shield bash). For every 4 warpriest levels beyond 4th, this bonus increases by 1 (to a maximum of +5 at 20th level). The shieldbearer can enhance a shield with any of the following armor special abilities (instead of those listed for sacred armor): <Link to="/magic-enh/arrow_deflection">arrow deflection</Link>, <Link to="/magic-enh/blinding">blinding</Link>, <Link to="/magic-enh/fortification">fortification</Link> (heavy, light, or moderate), <Link to="/magic-enh/reflecting">reflecting</Link>, and <Link to="/magic-enh/spell_resistance">spell resistance</Link> (13, 15, 17, and 19).</p>
<p><strong>Channel Energy (Su):</strong> The shieldbearer can channel energy only when carrying a shield, and the ability manifests as a 30-foot-cone <Link to="/misc/burst">burst</Link>, rather than as a radius.</p>
</>};
const _sixth_wing_bulwark = {title: "Sixth Wing Bulwark", jsx: <><h2 id="arc-warpriest-sixth_wing_bulwark-sixth-wing-bulwark">Sixth Wing Bulwark</h2>
<p><strong>Sources</strong> <Link to="/source/distant_realms">Distant Realms pg. 32</Link><br/>Many are the followers of Ragathiel who lead in battle. Far fewer, but no less crucial to a successful campaign, are those who hold the line and defend against the incursion of evil forces. The Sixth Wing bulwark trains to do just that: fortifying herself and her allies to stand strong in the face of any opposition, no matter how dire.</p>
<p><strong>Sixth Wing Sworn:</strong> A Sixth Wing bulwark must be a worshiper of <Link to="/faith/ragathiel">Ragathiel</Link>. If she ever changes her deity, she loses this archetype, cannot regain it, and becomes a normal warpriest.</p>
<p><strong>Weapon and Armor Proficiency:</strong> A Sixth Wing bulwark gains proficiency in tower shields.</p>
<p>This alters the warpriest's <strong className="hl">weapon and armor proficiencies</strong>.</p>
<p><strong>Focus Shield:</strong> A Sixth Wing bulwark gains <Link to="/feat/shield_focus">Shield Focus</Link> as a bonus feat.</p>
<p>This replaces <strong className="hl">focus weapon</strong>.</p>
<p><strong>Sacred Shield (Su):</strong> Dedicated training and divine grace allow a Sixth Wing bulwark to lessen the burden of a shield's weight. As long as a Sixth Wing bulwark is wielding a shield, she reduces her total armor check penalty by 1. This reduction improves by 1 for every 5 warpriest levels she has, to a maximum reduction of 5 at 20th level.</p>
<p>At 4th level, a Sixth Wing bulwark can call upon Ragathiel's might to bless her shield as a swift action. As long as she is wielding a shield, she gains DR 1/- and fire resistance 5. For every 4 levels beyond 4th, this DR increases by 1 (to a maximum of DR 5/- at 20th level) and her fire resistance increases by 5 (becoming immunity to fire at 20th level). A Sixth Wing bulwark can use this ability a number of rounds per day equal to her warpriest level; these rounds need not be consecutive.</p>
<p>As a swift action while her shield is benefitting from Ragathiel's blessing (or as part of the action to activate the blessing), a Sixth Wing bulwark can direct her shield to protect an ally within 60 feet. The shield sprouts burning wings and flies to defend the ally, providing its shield bonus, damage reduction, and fire resistance to that ally instead of the Sixth Wing bulwark. Rounds in which she uses her shield in this manner count normally against the rounds per day in which she can use this ability. As long as she has rounds of sacred shield remaining, she can recall her shield to her arm as a swift action and regain its benefits. A Sixth Wing bulwark must maintain one hand free to direct the shield; if she no longer has a hand free or if the duration of her sacred shield ability ends, the shield drops to the ground and ceases providing any benefit.</p>
<p>This replaces <strong className="hl">sacred weapon</strong>.</p>
<p><strong>Shield of Grace (Su):</strong> At 6th level, when a Sixth Wing bulwark uses her sacred shield to protect an ally, she can deliver blessings, healing from her fervor ability, and touch spells through the shield to the ally benefiting from the shield's protection.</p>
<p>This replaces the <strong className="hl">bonus feat</strong> gained at 6th level.</p>
<p><strong>Sacred Fortification (Su):</strong> At 7th level, when a Sixth Wing bulwark activates her sacred armor ability, she can expend one use of fervor to also activate her sacred shield ability.</p>
<p>This alters <strong className="hl">sacred armor</strong>.</p>
<p><strong>Intercession (Su):</strong> At 12th level, by expending a use of fervor as a swift action, a Sixth Wing bulwark can teleport to the location of a willing (or unconscious) ally and immediately teleport that ally to her own previous position, in effect switching places with the ally. A Sixth Wing bulwark must have line of effect to the target to use this ability.</p>
<p>This replaces the <strong className="hl">bonus feat</strong> gained at 12th level.</p>
<p><strong>Reflexive Fortification (Su):</strong> At 18th level, a Sixth Wing bulwark can use her sacred shield ability as an immediate action when she is attacked. Alternatively, she can use this ability as an immediate action when an ally within 30 feet is attacked to send her shield to protect that ally. She can use this ability even if she is surprised.</p>
<p>This replaces the <strong className="hl">bonus feat</strong> gained at 18th level.</p>
</>};
export default {calamity_caller:_calamity_caller,champion_of_the_faith:_champion_of_the_faith,cult_leader:_cult_leader,disenchanter:_disenchanter,divine_champion:_divine_champion,divine_commander:_divine_commander,feral_champion:_feral_champion,fist_of_the_godclaw:_fist_of_the_godclaw,forgepriest:_forgepriest,jistkan_magistrate:_jistkan_magistrate,libertys_blade:_libertys_blade,mantis_zealot:_mantis_zealot,molthuni_arsenal_chaplain:_molthuni_arsenal_chaplain,proclaimer:_proclaimer,proselytizer:_proselytizer,sacred_fist:_sacred_fist,shieldbearer:_shieldbearer,sixth_wing_bulwark:_sixth_wing_bulwark}