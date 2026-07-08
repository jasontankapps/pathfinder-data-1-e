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
<Ability id="feral-blessing" icon={["broken-shield"]}>
<Pair single id="feral-blessing">Feral Blessing</Pair>
<Pair hl title="Alters">Blessings</Pair>
<Pair title="Info">A feral champion must take the <Link to="/blessing/animal">Animal</Link> blessing and does not gain a second blessing.</Pair>
</Ability>
<Ability id="sacred-claws-su" icon={["mailed-fist"]}>
<Pair single id="sacred-claws-su">Sacred Claws (Su)</Pair>
<Pair hl title="Alters">Sacred weapon</Pair>
<Pair title="Ability">Rather than empowering a physical weapon, a feral champion grows claws as primary <Link to="/umr/natural_weapons">natural weapons</Link> on each hand. These claws deal damage as a warpriest's <em>sacred weapon</em> and can be enhanced as such.</Pair>
</Ability>
<Ability id="wild-shape-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Sacred armor</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four warpriest levels beyond 7th<ByLevelPop levels={[[7,1],[11,2],[15,3],[19,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A feral champion gains <em>wild shape,</em> as the <Link to="/class/druid">druid</Link> ability of the same name, and treats his warpriest level - 3 as his effective druid level for the purposes of this ability. However, a feral champion does not gain the ability to take on elemental or plant forms with wild shape.</Pair>
</Ability>
<Ability id="wild-shape-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="wild-shape-su" flavor="Text from the druid class ability.">Wild Shape (Su)</Pair>
<Pair title="Standard Action">You gain the ability to turn yourself into any Small or Medium animal and back again. Your options for new forms include all creatures with the <Link to="/main/monsters_animals">animal</Link> type. This ability functions like the <Link to="/spell/beast_shape_i">beast shape I</Link> spell, except as noted here. The effect lasts for 1 hour per druid level, or until you change back. The form chosen must be that of an animal with which you are familiar.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="At 6th Level">You can <em>wild shape</em> as <Link to="/spell/beast_shape_ii">beast shape II</Link>, and you can now change into a Large or Tiny animal.</Pair>
<Pair title="At 8th Level">You can <em>wild shape</em> as <Link to="/spell/beast_shape_iii">beast shape III</Link>, and you can now change into a Huge or Diminutive animal.</Pair>
<Pair title="Special">You lose your ability to speak while in animal form because you are limited to the sounds that a normal, untrained animal can make, but you can communicate normally with other animals of the same general grouping as your new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)</Pair>
</Ability>
</>};
const _fist_of_the_godclaw = {title: "Fist of the Godclaw", jsx: <><h2 id="arc-warpriest-fist_of_the_godclaw-fist-of-the-godclaw">Fist of the Godclaw</h2>
<p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 12</Link><br/>Devoted to the divine control of law above all else, these zealots seek to establish absolute order. Disciplined and precise, they lead their allies against the chaotic hordes.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-warpriest-fist_of_the_godclaw--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Must be of a lawful alignment (in addition to the normal alignment restrictions).</td></tr></tbody></table></ScrollContainer></div><Ability id="deity" icon={["info"]}>
<Pair single id="deity">Deity</Pair>
<Pair title="Info">A fist of the Godclaw must worship <Link to="/faith/abadar">Abadar</Link>, <Link to="/faith/asmodeus">Asmodeus</Link>, <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/irori">Irori</Link>, or <Link to="/faith/torag">Torag</Link>. Alternatively, the fist of the Godclaw must venerate the pantheon of these deities known as the Godclaw.</Pair>
</Ability>
<Ability id="blessings-of-the-godclaw-ex" icon={["broken-shield"]}>
<Pair single id="blessings-of-the-godclaw-ex">Blessings of the Godclaw (Ex)</Pair>
<Pair hl title="Alters">Blessings</Pair>
<Pair title="Info">A fist of the Godclaw must select the <Link to="/blessing/law">Law</Link> blessing and the <Link to="/blessing/godclaw">Godclaw</Link> blessing.</Pair>
</Ability>
<Ability id="detect-chaos-sp" icon={["magic-swirl"]}>
<Pair single id="detect-chaos-sp">Detect Chaos (Sp)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 3rd level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A fist of the Godclaw can cast <Link to="/spell/detect_chaos">detect chaos</Link> three times per day as a spell-like ability, using his warpriest level as his caster level. If the fist of the Godclaw already has, or later gains, the ability to cast <em>detect chaos,</em> then he can cast <em>detect chaos</em> at will as a spell-like ability.</Pair>
</Ability>
<Ability id="alignment-channel-su" icon={["stairs-goal"]}>
<Pair single id="alignment-channel-su">Alignment Channel (Su)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 6th level and 12th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A fist of the Godclaw gains <Link to="/feat/alignment_channel">Alignment Channel</Link> as a bonus feat. When he uses this feat and spends <em>fervor</em> to <em>channel energy,</em> he can harm only outsiders with the chaotic subtype. Additionally, when using this feat, he expends only one use of his <em>fervor</em> to <em>channel energy</em> and deals 1d6 points of damage for every 2 warpriest levels he has.</Pair>
<Pair title="At 12th Level">A fist of the Godclaw can expend an additional use of <em>fervor</em> to <em>channel energy</em> as a <strong className="hl">move action</strong>.</Pair>
</Ability>
<Ability id="aspect-of-law-ex" icon={["upgrade","armor-upgrade","rolling-dices"]}>
<Pair single id="aspect-of-law-ex" flavor="A fist of the Godclaw can channel an aspect of law, growing even more inflexible.">Aspect of Law (Ex)</Pair>
<Pair hl title="Replaces">Aspect of war</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Swift Action">Once per day, a warpriest can treat his level as his base attack bonus, gains DR 20/chaotic, and becomes immune to mind-affecting effects. In addition, he can take the average result on any die roll instead of rolling normally. This ability lasts for 1 minute.</Pair>
</Ability>
</>};
const _forgepriest = {title: "Forgepriest", jsx: <><h2 id="arc-warpriest-forgepriest-forgepriest">Forgepriest</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 130</Link><br/>Armorers of exquisite skill, forgepriests take inspiration from their deity to produce the most perfect weapons and armor they can, the better to equip the armies of the faithful.</p>
<Ability id="blessings" icon={["broken-shield"]}>
<Pair single id="blessings">Blessings</Pair>
<Pair hl title="Alters">Blessings</Pair>
<Pair title="Info">A forgepriest selects only one blessing.</Pair>
</Ability>
<Ability id="smiths-spells" icon={["spell-book"]}>
<Pair single id="smiths-spells">Smith's Spells</Pair>
<Pair title="Info">A forgepriest adds the following spells to his spell list at the listed spell level.</Pair>
<Pair plain title="1st"><Link to="/spell/jury_rig">Jury rig</Link>, <Link to="/spell/shield">shield</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/heat_metal">Heat metal</Link>, <Link to="/spell/shatter">shatter</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/keen_edge">Keen edge</Link>, <Link to="/spell/quench">quench</Link>, <Link to="/spell/versatile_weapon">versatile weapon</Link></Pair>
<Pair plain title="4th"><Link to="/spell/wreath_of_blades">Wreath of blades</Link></Pair>
<Pair plain title="5th"><Link to="/spell/fabricate">Fabricate</Link>, <Link to="/spell/major_creation">major creation</Link></Pair>
<Pair plain title="6th"><Link to="/spell/mages_sword">Mage's sword</Link></Pair>
</Ability>
<Ability id="forge-mastery-ex" icon={["upgrade"]}>
<Pair single id="forge-mastery-ex">Forge Mastery (Ex)</Pair>
<Pair hl title="Replaces">2nd blessing normally gained by a warpriest</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A forgepriest adds a bonus equal to half his level to all Craft checks to make metal items, armor, and weapons.</Pair>
</Ability>
<Ability id="bonus-feats" icon={["upgrade"]}>
<Pair single id="bonus-feats">Bonus Feats</Pair>
<Pair hl title="Alters">Bonus feats</Pair>
<Pair title="Info">A forgepriest can select <Link to="/main/item_creation_feat">item creation feats</Link> in addition to combat feats when he gains a bonus feat.</Pair>
</Ability>
<Ability id="craft-magic-arms-and-armor" icon={["stairs-goal"]}>
<Pair single id="craft-magic-arms-and-armor">Craft Magic Arms and Armor</Pair>
<Pair hl title="Replaces">Bonus feat gained at 3rd level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A forgepriest gains <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="creators-bond-su" icon={["upgrade"]}>
<Pair single id="creators-bond-su">Creator's Bond (Su)</Pair>
<Pair hl title="Replaces">Channel energy</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When a forgepriest uses his <em>sacred weapon</em> ability with an item he created personally, he can expend two uses of his <em>fervor</em> ability to increase the bonus granted by 1.</Pair>
<Pair title="Special">Once the forgepriest has the <em>sacred armor</em> ability, he can also use this ability in conjunction with that.</Pair>
</Ability>
<Ability id="heat-of-the-forge-su" icon={["armor-upgrade"]}>
<Pair single id="heat-of-the-forge-su">Heat of the Forge (Su)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 6th level</Pair>
<Pair title="At 6th Level">A forgepriest gains fire resistance 5.</Pair>
<Pair title="At 13th Level">This resistance increases to 10.</Pair>
</Ability>
</>};
const _jistkan_magistrate = {title: "Jistkan Magistrate", jsx: <><h2 id="arc-warpriest-jistkan_magistrate-jistkan-magistrate">Jistkan Magistrate</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 17</Link><br/>Some warpriests study the ancient magic that the Jistkan magistrates used to bind elementals and make pacts with genies. By tapping into the elementals' primal magic, these warpriests gain powers that help them in combat.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-warpriest-jistkan_magistrate--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Must worship a deity who grants the <Link to="/blessing/air">Air</Link>, <Link to="/blessing/earth">Earth</Link>, <Link to="/blessing/fire">Fire</Link>, or <Link to="/blessing/water">Water</Link> blessing</td></tr></tbody></table></ScrollContainer></div><Ability icon={["skills"]} id="undefined">
<Pair id="undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT)</Pair>
<Pair title="Removed Skills">Survival</Pair></Ability>
<Ability id="elemental-binder-su" icon={["broken-shield"]}>
<Pair single id="elemental-binder-su">Elemental Binder (Su)</Pair>
<Pair hl title="Alters">Blessings</Pair>
<Pair title="Info">A Jistkan magistrate must select the Air, Earth, Fire, or Water blessing. He does not gain a second blessing.</Pair>
</Ability>
<Ability id="spontaneous-summons" icon={["magic-swirl"]}>
<Pair single id="spontaneous-summons" flavor="A Jistkan magistrate is extremely flexible in channeling his stored spell energy.">Spontaneous Summons</Pair>
<Pair hl title="Alters">Spontaneous casting</Pair>
<Pair title="Ability">In addition to losing prepared spells to cast "cure" or "inflict" spells, he can also lose a prepared spell in order to cast any <Link to="/spell/summon_monster">summon monster</Link> spell of the same level or lower. He can use this ability only to summon an <Link to="/family/elemental">elemental</Link> whose subtype matches his blessing. He can expend one use of his <em>fervor</em> ability to decrease the spell's casting time to 1 <strong className="hl">standard action</strong> and to increase the spell's duration to 1 minute per level.</Pair>
</Ability>
<Ability id="bonus-languages" icon={["upgrade"]}>
<Pair single id="bonus-languages">Bonus Languages</Pair>
<Pair hl title="Alters">Bonus languages</Pair>
<Pair title="Passive Ability">A Jistkan magistrate's bonus language options include Aquan, Auran, Ignan, and Terran instead of Abyssal, Celestial, and Infernal. These choices are in addition to the bonus languages available to the character because of his race.</Pair>
</Ability>
<Ability id="channel-element-su" icon={["stairs-goal"]}>
<Pair single id="channel-element-su">Channel Element (Su)</Pair>
<Pair hl title="Alters">Channel</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability"><p>A Jistkan magistrate gains <Link to="/feat/elemental_channel">Elemental Channel</Link> as a bonus feat, choosing the elemental subtype that matches his blessing. He doesn't gain the ability to harm undead with channeled energy (if he channels positive energy) or heal undead (if he channels negative energy). Instead, he can channel a blast of elemental matter and energy that buffets his targets. The Jistkan artificer's blessing determines the damage type of this attack, as indicated by the table below. A successful Reflex save halves the damage.</p>
<ScrollContainer id="arc-warpriest-jistkan_magistrate--table-1"><table>
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
</Pair>
</Ability>
</>};
const _libertys_blade = {title: "Liberty's Blade", jsx: <><h2 id="arc-warpriest-libertys_blade-libertys-blade">Liberty's Blade</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 24</Link><br/>There are some who find in the call to freedom something primal and spiritual, even more so than other Andorens. These liberty's blades become warpriests of deities who spread freedom, and they head to lives of adventure as <Link to="/rule/eagle_knights">Eagle Knights</Link> or adventurers, championing liberty wherever they go.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-warpriest-libertys_blade--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Must worship a good deity who grants the Liberation blessing</td></tr></tbody></table></ScrollContainer></div><Ability id="freedoms-focus-su" icon={["broken-shield"]}>
<Pair single id="freedoms-focus-su">Freedom's Focus (Su)</Pair>
<Pair hl title="Alters">Blessings</Pair>
<Pair title="Info">A liberty's blade must select the <Link to="/blessing/liberation">Liberation</Link> blessing. He does not gain a second blessing.</Pair>
</Ability>
<Ability id="devilslayer-su" icon={["upgrade"]}>
<Pair single id="devilslayer-su">Devilslayer (Su)</Pair>
<Pair hl title="Alters">Sacred weapon</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A liberty's blade adds <Link to="/magic-enh/bane">devil bane</Link> to the list of enhancements he can add to his <em>sacred weapon.</em></Pair>
</Ability>
<Ability id="channel-liberty-su" icon={["broken-shield","upgrade"]}>
<Pair single id="channel-liberty-su">Channel Liberty (Su)</Pair>
<Pair hl title="Alters">Channel energy</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability"><p>When a liberty's blade channels energy to heal, the effects of his healing is halved, but all creatures affected by his healing instantly benefit as if from a <Link to="/spell/liberating_command">liberating command</Link> spell at the liberty's blade's caster level.</p>
<p>When channeling to harm, the liberty's blade harms devils as if using <Link to="/feat/alignment_channel">Alignment Channel</Link> instead of harming undead, and she deals double the normal amount of damage.</p>
</Pair>
</Ability>
<Ability id="shield-against-hellspawn-su" icon={["upgrade"]}>
<Pair single id="shield-against-hellspawn-su">Shield Against Hellspawn (Su)</Pair>
<Pair hl title="Alters">Sacred armor</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A liberty's blade adds <Link to="/magic-enh/defiant">devil defiant</Link> to the list of enhancements that he can add to his <em>sacred armor.</em></Pair>
</Ability>
</>};
const _mantis_zealot = {title: "Mantis Zealot", jsx: <><h2 id="arc-warpriest-mantis_zealot-mantis-zealot">Mantis Zealot</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 157</Link>, <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 25</Link><br/>Among the <Link to="/rule/red_mantis">Red Mantis</Link> worshipers of Achaekek, some hold such strong faith in their assassin god that they gain divine power. They forge themselves into perfect killers in honor of He Who Walks in Blood. These warpriests are a relatively recent addition to the Red Mantis arsenal, but in the few short decades they have served the assassins, they have quickly built a reputation for themselves as particularly fanatical devotees of the Mantis God. Their penchant for taking the faith's writings verbatim and for overwhelming and often destructive pedantry serves them well in matters of loyalty to Achaekek (and particularly when it comes to drafting contracts for assassinations that favor the organization in financial and tactical ways), but it offers little room for complex cases that would benefit from bending the rules, making them unsuitable for missions that require diplomatic finesse. In addition, the rising incidence of mantis zealots accusing fellow worshipers of Achaekek of heresy and blasphemy, resulting in internal accusations, exiles, and even fullblown assassinations, increasingly makes them objects of fear and distrust among even their own kind. Whether the rise of the mantis zealot presages a dramatic upcoming shift in the religion's hierarchy and methods, or whether the faction may be burning too bright for its own good and is hurtling toward self-annihilation, remains to be seen.</p>
<Ability id="mantis-sworn-ex" icon={["hazard-sign"]}>
<Pair single id="mantis-sworn-ex">Mantis Sworn (Ex)</Pair>
<Pair title="Info">A mantis zealot must choose <Link to="/faith/achaekek">Achaekek</Link> as his deity, and he must be lawful evil in alignment. If he ever changes his deity, he loses this archetype and becomes a normal warpriest.</Pair>
</Ability>
<Ability id="weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiencies</Pair>
<Pair title="Ability">Mantis zealots are proficient with simple and martial weapons, as well as with the <Link to="/eq-weapon/sawtooth_sabre">sawtooth sabre</Link>. They are proficient with light armor but not with shields.</Pair>
</Ability>
<Ability id="sneak-attack-ex" icon={["stairs-goal"]}>
<Pair single id="sneak-attack-ex">Sneak Attack (Ex)</Pair>
<Pair hl title="Replaces">Sacred weapon</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A mantis zealot can make a <Link to="/ability/sneak_attack">sneak attack</Link>. This ability functions as the rogue class feature of the same name, and his sneak attack damage is +1d6.</Pair>
<Pair title="At 8th Level">This damage becomes +2d6.</Pair>
<Pair title="At 12th Level">This damage increases to +3d6.</Pair>
<Pair title="At 16th Level">This damage becomes +4d6.</Pair>
<Pair title="At 20th Level">This damage increases to +5d6.</Pair>
<Pair title="Special">If the zealot gets a sneak attack bonus from another source, the bonuses stack.</Pair>
</Ability>
<Ability id="sacred-reflexes-su" icon={["armor-upgrade"]}>
<Pair single id="sacred-reflexes-su" flavor="A mantis zealot can emulate Achaekek's grace and move with a supernatural fluidity.">Sacred Reflexes (Su)</Pair>
<Pair hl title="Replaces">Sacred armor</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Usage">1 minute/day per warpriest level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Swift Action">As long as he is wearing light or no armor, he can gain <Link to="/ability/uncanny_dodge">uncanny dodge</Link> as per the rogue class feature. If he already has the uncanny dodge ability from another source, he instead gains <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> while this ability is active.</Pair>
<Pair title="At 10th Level">When he uses this ability, he also gains <Link to="/ability/evasion">evasion</Link> as per the <Link to="/class/monk">monk</Link> class feature (or <Link to="/ability/improved_evasion">improved evasion</Link> if he already has evasion from another source).</Pair>
<Pair title="At 13th Level">He gains <em>improved uncanny dodge</em> instead of <em>uncanny dodge.</em></Pair>
<Pair title="At 16th Level">He can activate this ability as part of making an initiative check, before rolling the die.</Pair>
<Pair title="At 19th Level">He gains <em>improved evasion</em> instead of <em>evasion.</em></Pair>
</Ability>
<Ability id="aspect-of-the-mantis-su" icon={["upgrade"]}>
<Pair single id="aspect-of-the-mantis-su">Aspect of the Mantis (Su)</Pair>
<Pair hl title="Alters">Aspect of war</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">When using <em>aspect of war,</em> instead of moving at full speed regardless of his armor or encumbrance, a mantis zealot deals a number of points of <Link to="/rule/bleed">bleed</Link> damage equal to his Dexterity modifier with each attack.</Pair>
</Ability>
</>};
const _molthuni_arsenal_chaplain = {title: "Molthuni Arsenal Chaplain", jsx: <><h2 id="arc-warpriest-molthuni_arsenal_chaplain-molthuni-arsenal-chaplain">Molthuni Arsenal Chaplain</h2>
<p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook pg. 6</Link><br/>Molthuni arsenal chaplains are warpriests trained in the Arsenal District in Korholm. They bolster their nation's military by focusing on the militant aspects of their gods.</p>
<Ability id="war-blessing-su" icon={["stairs-goal","broken-shield"]}>
<Pair single id="war-blessing-su">War Blessing (Su)</Pair>
<Pair hl title="Replaces">Sacred armor</Pair>
<Pair hl title="Alters">Blessing</Pair>
<Pair title="Ability">A Molthuni arsenal chaplain must choose <Link to="/blessing/war">War</Link> as his blessing, and can do so even if it is a domain not normally granted by his deity. He does not receive a second blessing.</Pair>
<Pair title="At 7th Level">A Molthuni arsenal chaplain gains <Link to="/feat/quicken_blessing">Quicken Blessing</Link> (War) as a bonus feat even if he does not meet the prerequisites, but cannot grant a War blessing to himself as a swift action with Quicken Blessing until he is at least 10th level.</Pair>
<Pair title="At 13th Level">A Molthuni arsenal chaplain can use the War blessing on an ally at a range of up to 30 feet by spending an additional use of the blessing ability.</Pair>
<Pair title="At 16th Level">A Molthuni arsenal chaplain can use the War blessing on a second target with a single use of the blessing ability.</Pair>
<Pair title="At 19th Level">A Molthuni arsenal chaplain can use the War blessing on any number of targets at once with a single use of the blessing ability.</Pair>
</Ability>
<Ability id="sacred-weapon-su" icon={["broken-shield"]}>
<Pair single id="sacred-weapon-su">Sacred Weapon (Su)</Pair>
<Pair hl title="Alters">Sacred weapon</Pair>
<Pair title="Info">The base damage of a Molthuni arsenal chaplain's <em>sacred weapon</em> does not increase above 1d6.</Pair>
</Ability>
<Ability id="weapon-training-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="weapon-training-ex">Weapon Training (Ex)</Pair>
<Pair hl title="Replaces">Channel energy</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A Molthuni arsenal chaplain gains <em>weapon training</em> as per the <Link to="/class/fighter">fighter</Link> class feature, but the benefits of this weapon training apply only to the his sacred weapons (weapons with which the warpriest has taken <Link to="/feat/weapon_focus">Weapon Focus</Link>).</Pair>
</Ability>
<Ability id="weapon-training-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="weapon-training-ex" flavor="Text from the fighter class ability.">Weapon Training (Ex)</Pair>
<Pair title="Passive Ability">Select one <Link to="/ability/weapon_groups">weapon group</Link>. Whenever you attack with a weapon from this group, you gain a +1 bonus on attack and damage rolls. You also add this bonus to any combat maneuver checks made with weapons from this group. This bonus also applies to your <Link to="/rule/cmd">CMD</Link> when defending against <Link to="/rule/disarm">disarm</Link> and <Link to="/rule/sunder">sunder</Link> attempts made against weapons from this group.</Pair>
<Pair title="At 9th Level">You select a new weapon group and gain the +1 bonus when using weapons from that group. Your previously selected group's bonus increases to +2.</Pair>
<Pair title="At 13th Level">You select a new weapon group and gain the +1 bonus when using weapons from that group. Your previously selected groups' bonuses increase to +2 and +3.</Pair>
<Pair title="At 17th Level">You select a new weapon group and gain the +1 bonus when using weapons from that group. Your previously selected groups' bonuses increase to +2, +3, and +4.</Pair>
<Pair title="Special">Bonuses granted from overlapping groups do not stack. Take the highest bonus granted for a weapon if it resides in two or more groups.</Pair>
</Ability>
</>};
const _proclaimer = {title: "Proclaimer", jsx: <><h2 id="arc-warpriest-proclaimer-proclaimer">Proclaimer</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 19</Link><br/>A proclaimer is the polar opposite of a <Link to="/arc-paladin/faithful_wanderer">faithful wanderer (paladin)</Link>, rushing into Abyss-twisted wastes with nothing but his weapon in his hand and his faith in his heart, shouting his deity's name to the skies. Most proclaimers don't survive their first day in a hostile environment, but those who do become the stuff of legend, bolstering the spirits of crusaders near and far.</p>
<Ability id="righteous-oath" icon={["info"]}>
<Pair single id="righteous-oath">Righteous Oath</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Info">A proclaimer cannot be evil or worship an evil deity, and he must choose <Link to="/main/cure_spells">cure spells</Link> for his spontaneous casting.</Pair>
</Ability>
<Ability id="cleanser-of-evil-su" icon={["aura","broken-shield"]}>
<Pair single id="cleanser-of-evil-su">Cleanser of Evil (Su)</Pair>
<Pair hl title="Replaces">Sacred armor</Pair>
<Pair hl title="Alters">Fervor</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Swift Action">A proclaimer can hold his weapon aloft and shout his deity's name, spending one use of <em>fervor</em> to deal 1d6 points of damage to all evil outsiders within 5 feet. This damage has the same alignment as the proclaimer's deity (for example, it counts as good and lawful for a worshiper of <Link to="/faith/ragathiel">Ragathiel</Link> who uses this ability).</Pair>
<Pair title="At 5th Level">This damage becomes 2d6.</Pair>
<Pair title="At 7th Level">The effect expands to include an area within 10 feet of the proclaimer.</Pair>
<Pair title="At 8th Level">This damage increases to 3d6.</Pair>
<Pair title="At 11th Level">This damage becomes 4d6.</Pair>
<Pair title="At 13th Level">The effect expands to 15 feet.</Pair>
<Pair title="At 14th Level">This damage increases to 5d6.</Pair>
<Pair title="At 17th Level">This damage becomes 6d6.</Pair>
<Pair title="At 19th Level">The effect expands to 20 feet.</Pair>
<Pair title="At 20th Level">This damage increases to 7d6.</Pair>
<Pair title="Special">A proclaimer can't use <em>fervor</em> to damage undead or to heal.</Pair>
</Ability>
<Ability id="zone-of-sanctification-su" icon={["aura"]}>
<Pair single id="zone-of-sanctification-su">Zone of Sanctification (Su)</Pair>
<Pair hl title="Replaces">Channel energy</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When a proclaimer uses <em>fervor</em> to damage evil outsiders with his <em>cleanser of evil</em> ability, he can spend one additional use of <em>fervor</em> as a <strong className="hl">move action</strong> to create a <em>zone of sanctification</em> in the same area for 1 round. All evil outsiders in the <em>zone</em> when it becomes active must succeed at a Will saving throw (DC 10 + half the proclaimer's level + his Wisdom modifier) or be pushed back until they are out of the area. Evil outsiders that end their turns in the area take damage as if affected by <em>cleanser of evil.</em></Pair>
</Ability>
</>};
const _proselytizer = {hasJL:true,title: "Proselytizer", jsx: <><div className="jumpList" id="arc-warpriest-proselytizer-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="arc-warpriest-proselytizer-converting-npcs">Converting NPCs</InnerLink></li><li><InnerLink toTop to="arc-warpriest-proselytizer-successful-conversion">Successful Conversion</InnerLink></li></ul></div><h2 id="arc-warpriest-proselytizer-proselytizer">Proselytizer</h2>
<p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 24</Link><br/>The proselytizer is the perfect militant missionary. He seeks to win the hearts and lay claim to the souls of those he meets, and - failing that - spreads the word of his deity at the edge of the sword.</p>
<Ability id="weapon-and-armor-proficiencies" icon={["broken-shield","stairs-goal"]}>
<Pair single id="weapon-and-armor-proficiencies">Weapon and Armor Proficiencies</Pair>
<Pair hl title="Alters">Weapon and armor proficiencies</Pair>
<Pair title="Info">A proselytizer does not gain proficiency with heavy armor or with all martial weapons, though he does gain proficiency in his deity's favored weapon. If his deity's favored weapon is unarmed strike, he gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="emotional-appeal" icon={["spell-book"]}>
<Pair single id="emotional-appeal" flavor="A proselytizer has great power over the emotions of others, wielding his voice like a weapon to pierce the heart of listeners and bring them closer to communion with his deity's power.">Emotional Appeal</Pair>
<Pair hl title="Replaces">Sacred armor, 3rd-level bonus feat</Pair>
<Pair title="Info">The warpriest adds the following spells to his warpriest spell list at the indicated spell levels. He casts these as divine warpriest spells.</Pair>
<Pair plain title="1st"><Link to="/spell/charm_person">Charm person</Link>, <Link to="/spell/rally_point">rally point</Link>, <Link to="/spell/wrath">wrath</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/castigate">Castigate</Link>, <Link to="/spell/heroism">heroism</Link>, <Link to="/spell/suggestion">suggestion</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/charm_monster">Charm monster</Link>, <Link to="/spell/lesser_geas">lesser geas</Link></Pair>
<Pair plain title="4th"><Link to="/spell/forced_repentance">Forced repentance</Link>, <Link to="/spell/serenity">serenity</Link></Pair>
<Pair plain title="5th"><Link to="/spell/mass_castigate">Mass castigate</Link>, <Link to="/spell/mass_suggestion">mass suggestion</Link></Pair>
<Pair plain title="6th"><Link to="/spell/antipathy">Antipathy</Link>, <Link to="/spell/sympathy">sympathy</Link></Pair>
</Ability>
<Ability id="sacred-subdual-su" icon={["broken-shield"]}>
<Pair single id="sacred-subdual-su">Sacred Subdual (Su)</Pair>
<Pair hl title="Alters">Sacred weapon</Pair>
<Pair title="Ability">When a proselytizer uses his <em>sacred weapon</em> damage in place of his normal weapon damage, all damage he deals with that weapon is nonlethal damage.</Pair>
</Ability>
<Ability id="blessing-of-conversion" icon={["info","broken-shield"]}>
<Pair single id="blessing-of-conversion">Blessing of Conversion</Pair>
<Pair hl title="Alters">Blessings</Pair>
<Pair title="Info">The proselytizer always gains the conversion bonus (see below) upon converting an NPC, rather than only the first time he does so each level. The bonuses overlap their durations, and do not stack.</Pair>
<Pair title="At 3rd Level">The proselytizer does not gain access to the minor blessings granted by his <em>blessing</em> class feature until 3rd level.</Pair>
</Ability>
<Ability id="voice-of-the-faithful-ex" icon={["stairs-goal"]}>
<Pair single id="voice-of-the-faithful-ex">Voice of the Faithful (Ex)</Pair>
<Pair hl title="Alters">Blessings (major)</Pair>
<Pair title="At 10th Level">A proselytizer of can expend a use of his major blessing to be able to speak to and understand any creature with a language for 1 hour.</Pair>
</Ability>
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
<Ability id="weapon-and-armor-proficiency" icon={["stairs-goal","broken-shield"]}>
<Pair single id="weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiency</Pair>
<Pair title="Info">Sacred fists are proficient with the <Link to="/eq-weapon/club">club</Link>, <Link to="/eq-weapon/light_crossbow">light crossbow</Link>, <Link to="/eq-weapon/heavy_crossbow">heavy crossbow</Link>, <Link to="/eq-weapon/dagger">dagger</Link>, <Link to="/eq-weapon/handaxe">handaxe</Link>, <Link to="/eq-weapon/javelin">javelin</Link>, <Link to="/eq-weapon/kama">kama</Link>, <Link to="/eq-weapon/nunchaku">nunchaku</Link>, <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>, <Link to="/eq-weapon/sai">sai</Link>, <Link to="/eq-weapon/shortspear">shortspear</Link>, <Link to="/eq-weapon/short_sword">short sword</Link>, <Link to="/eq-weapon/shuriken">shuriken</Link>, <Link to="/eq-weapon/siangham">siangham</Link>, <Link to="/eq-weapon/sling">sling</Link>, and <Link to="/eq-weapon/spear">spear</Link>. Sacred fists are not proficient with any armor or shields.</Pair>
<Pair title="Special">When wearing armor, using a shield, or carrying a medium or heavy load, a sacred fist loses his <em>AC bonus</em> and <em>flurry of blows.</em></Pair>
</Ability>
<Ability id="ac-bonus-su" icon={["armor-upgrade"]}>
<Pair single id="ac-bonus-su" flavor="A deity protects her sacred fist as long as he is unarmored and unencumbered.">AC Bonus (Su)</Pair>
<Pair title="Passive Ability">A sacred fist adds his Wisdom modifier (minimum 0) to his AC and his CMD.</Pair>
<Pair title="At 4th Level">A sacred fist gains a dodge bonus to AC and CMD. This bonus is equal to <Link to="/misc/one_fourth">one-fourth</Link> of his warpriest level.</Pair>
<Pair title="Special"><p>These bonuses to AC apply even against touch attacks or when the sacred fist is flat-footed. He loses these bonuses when he is immobilized or helpless, when he wears any armor, when he carries a shield, or when he carries a medium or heavy load.</p>
<p>This counts as the <Link to="/class/monk">monk</Link> ability of the same name, and the sacred fist's warpriest levels stack with monk levels for determining the benefits.</p>
</Pair>
</Ability>
<Ability id="flurry-of-blows-ex" extraClasses="hasSubs" icon={["mailed-fist"]}>
<Pair single id="flurry-of-blows-ex">Flurry of Blows (Ex)</Pair>
<Pair hl title="Replaces">Sacred weapon</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A sacred fist can make a flurry of blows attack as a full-attack action. This ability works like the monk ability of the same name, except the sacred fist's attack bonus from warpriest levels does not count as his warpriest level.</Pair>
</Ability>
<Ability id="flurry-of-blows-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="flurry-of-blows-ex" flavor="Text from the monk class ability.">Flurry of Blows (Ex)</Pair>
<Pair title="Ability"><p>You can make a flurry of blows as a full-attack action. When doing so you may make one additional attack using any combination of unarmed strikes or attacks with a special monk weapon (kama, nunchaku, quarterstaff, sai, shuriken, and siangham) as if using the <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link> feat (even if you do not meet the prerequisites for the feat). For the purpose of these attacks, your base attack bonus from your monk class levels is equal to your monk level. For all other purposes, such as qualifying for a feat or a prestige class, you use your normal base attack bonus.</p>
<p>You apply your full Strength bonus to your damage rolls for all successful attacks made with flurry of blows, whether the attacks are made with an off-hand or with a weapon wielded in both hands. You may substitute <Link to="/rule/disarm">disarm</Link>, <Link to="/rule/sunder">sunder</Link>, and <Link to="/rule/trip">trip</Link> combat maneuvers for unarmed attacks as part of a flurry of blows. You cannot use any weapon other than an unarmed strike or a special monk weapon as part of a flurry of blows. You cannot use natural weapons (if you have any) as part of a flurry of blows, nor can you make natural attacks in addition to your flurry of blows attacks.</p>
</Pair>
<Pair title="At 8th Level">You can make two additional attacks when you use flurry of blows, as if using <Link to="/feat/improved_two_weapon_fighting">Improved Two-Weapon Fighting</Link> (even if you do not meet the prerequisites for the feat).</Pair>
<Pair title="At 15th Level">You can make three additional attacks when you use flurry of blows, as if using <Link to="/feat/greater_two_weapon_fighting">Greater Two-Weapon Fighting</Link> (even if you do not meet the prerequisites for the feat).</Pair>
</Ability>
<Ability id="unarmed-strike" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="unarmed-strike">Unarmed Strike</Pair>
<Pair hl title="Replaces">Focus weapon</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A sacred fist gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat. He uses his warpriest levels as monk levels for determining the amount of damage dealt with an unarmed strike.</Pair>
</Ability>
<Ability id="unarmed-strike" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="unarmed-strike" flavor="Relevant text from the monk class.">Unarmed Strike</Pair>
<Pair title="Info">The amount of damage you deal depends on your size.</Pair>
<Pair title="At 1st Level">Your unarmed strike deals 1d4 (Small), 1d6 (Medium), or 1d8 (Large) damage.</Pair>
<Pair title="At 4th Level">Your unarmed strike now deals 1d6 (Small), 1d8 (Medium), or 2d6 (Large) damage.</Pair>
<Pair title="At 8th Level">Your unarmed strike now deals 1d8 (Small), 1d10 (Medium), or 2d8 (Large) damage.</Pair>
<Pair title="At 12th Level">Your unarmed strike now deals 1d10 (Small), 2d6 (Medium), or 3d6 (Large) damage.</Pair>
<Pair title="At 16th Level">Your unarmed strike now deals 2d6 (Small), 2d8 (Medium), or 3d8 (Large) damage.</Pair>
<Pair title="At 20th Level">Your unarmed strike now deals 2d8 (Small), 2d10 (Medium), or 4d8 (Large) damage.</Pair>
</Ability>
<Ability id="blessed-fortitude-su" icon={["armor-upgrade"]}>
<Pair single id="blessed-fortitude-su" flavor="A sacred fist can avoid even magical and unusual attacks with help from his deity.">Blessed Fortitude (Su)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 3rd level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">If he succeeds at a Fortitude saving throw against an attack that has a reduced effect on a successful save, he instead avoids the effect entirely.</Pair>
<Pair title="Special">A <Link to="/misc/helpless">helpless</Link> sacred fist does not gain the benefit of the blessed fortitude ability.</Pair>
</Ability>
<Ability id="bonus-style-feat" icon={["stairs-goal"]}>
<Pair single id="bonus-style-feat">Bonus Style Feat</Pair>
<Pair hl title="Replaces">Bonus feats gained at 6th, 12th, and 18th levels</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The sacred fist gains a <Link to="/main/style_feat">style feat</Link> as a bonus feat. The sacred fist must meet the style feat's prerequisites. He uses his warpriest levels as monk levels for the purposes of meeting the feat's prerequisites.</Pair>
<Pair title="At 12th Level">A sacred fist gains either another style feat or a feat that requires a style feat as a prerequisite.</Pair>
<Pair title="At 18th Level">A sacred fist gains either another style feat or a feat that requires a style feat as a prerequisite.</Pair>
</Ability>
<Ability id="ki-pool-su" extraClasses="hasSubs" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="ki-pool-su">Ki Pool (Su)</Pair>
<Pair hl title="Replaces">Sacred armor</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">The sacred fist gains a ki pool. This functions as the monk class feature, using the sacred fist's level - 3 as his monk level when determining the number of points in his pool and bonuses granted to his unarmed strike.</Pair>
<Pair title="Swift Action">Additionally, the sacred fist can spend 1 point from his ki pool to grant himself a +1 insight bonus to his AC for 1 minute. (This is in addition the normal ki ability to gain a dodge bonus to AC.) This insight bonus increases by 1 for every 3 levels above 7th (to a maximum of +5 at 19th level).</Pair>
</Ability>
<Ability id="ki-pool-su" extraClasses="subAbility" icon={["magic-swirl","mailed-fist"]}>
<Pair single id="ki-pool-su" flavor="Text from the monk class ability.">Ki Pool (Su)</Pair>
<Pair title="Ability">You gain a pool of ki points. The number of points in your ki pool is equal to 1/2 your monk level + your Wisdom modifier.</Pair>
<Pair title="Swift Action">By spending 1 point from your ki pool, you can make one additional unarmed strike at your highest attack bonus when making a flurry of blows attack. In addition, you can spend 1 point to increase your speed by 20 feet for 1 round. Finally, your can spend 1 point from your <em>ki</em> pool to give yourself a +4 dodge bonus to AC for 1 round.</Pair>
<Pair title="Passive Ability">As long as you have at least 1 point in your ki pool, you can make a <em>ki strike,</em> which allows your unarmed attacks to be treated as magic weapons for the purpose of overcoming <Link to="/rule/damage_reduction">damage reduction</Link>.</Pair>
<Pair title="At 7th Level">Your <em>ki strikes</em> are also treated as cold iron and silver for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 10th Level">Your <em>ki strikes</em> are also treated as lawful weapons for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 16th Level">Your <em>ki strikes</em> are treated as <Link to="/eq-material/adamantine">adamantine</Link> weapons for the purpose of overcoming damage reduction and bypassing <Link to="/rule/hardness">hardness</Link>.</Pair>
<Pair title="Special">The ki pool is replenished each morning after 8 hours of rest or meditation; these hours do not need to be consecutive.</Pair>
</Ability>
<Ability id="miraculous-fortitude-su" icon={["armor-upgrade"]}>
<Pair single id="miraculous-fortitude-su">Miraculous Fortitude (Su)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 9th level</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">The sacred fist's <em>blessed fortitude</em> ability improves. He still takes no damage or negative effect when he succeeds at a Fortitude save, but now when he fails a Fortitude saving throw against a spell or effect that deals damage (including <Link to="/rule/ability_damage_drain">ability damage and drain</Link>), he takes only half the amount of damage.</Pair>
<Pair title="Special">A <Link to="/misc/helpless">helpless</Link> sacred fist does not gain the benefit of <em>miraculous fortitude.</em></Pair>
</Ability>
</>};
const _shieldbearer = {title: "Shieldbearer", jsx: <><h2 id="arc-warpriest-shieldbearer-shieldbearer">Shieldbearer</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 7</Link><br/>Shieldbearers are divine warriors who stand on the front lines of battle, shoulder to shoulder with the soldiers of their people. The shieldbearer tradition has long been a strong legacy among the dwarves of the Five Kings Mountains, while many young women throughout the Lands of the Linnorm Kings and Realm of the Mammoth Lords become shieldbearers known as shield maidens. Shieldbearers among the Shoanti are often advisors as well as combatants, while in the Mwangi Expanse shieldbearers are known for defending entire villages from the Gorilla King's minions.</p>
<Ability id="shield-adept-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="shield-adept-ex">Shield Adept (Ex)</Pair>
<Pair hl title="Replaces">Focus weapon</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A shieldbearer receives <Link to="/feat/improved_shield_bash">Improved Shield Bash</Link> as a bonus feat. When carrying a shield, the shieldbearer adds his shield bonus on <Link to="/rule/concentration">concentration</Link> checks to cast defensively.</Pair>
</Ability>
<Ability id="sacred-weapon-su" icon={["info","broken-shield"]}>
<Pair single id="sacred-weapon-su">Sacred Weapon (Su)</Pair>
<Pair hl title="Alters">Sacred weapon, sacred armor</Pair>
<Pair title="Ability">A shieldbearer treats shields as <em>sacred weapons</em> (instead of his god's favored weapon), though the shieldbearer can still designate additional weapons as <em>sacred weapons</em> by selecting them with the <Link to="/feat/weapon_focus">Weapon Focus</Link> feat. The shieldbearer's <em>sacred weapon</em> damage applies only to attacks made with shields.</Pair>
<Pair title="At 7th Level">The shieldbearer does not gain the ability to enhance <em>sacred weapons</em> until 7th level.</Pair>
<Pair title="At 10th Level">The <em>sacred weapon</em> bonus becomes +2.</Pair>
<Pair title="At 13th Level">The <em>sacred weapon</em> bonus increases to +3.</Pair>
<Pair title="At 16th Level">The <em>sacred weapon</em> bonus becomes +4.</Pair>
<Pair title="At 19th Level">The <em>sacred weapon</em> bonus increases to +5.</Pair>
</Ability>
<Ability id="sacred-shield-su" icon={["armor-upgrade"]}>
<Pair single id="sacred-shield-su">Sacred Shield (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Swift Action">A shieldbearer gains the ability to enhance his shield with divine power. This ability functions as the <em>sacred armor</em> ability, except as follows. This power grants the shield an enhancement bonus equal to <Link to="/misc/one_fourth">one-fourth</Link> of his warpriest level (this bonus does not act as an attack or damage bonus when the shield is used in a shield bash).</Pair>
<Pair title="Special">The shieldbearer can enhance a shield with any of the following armor special abilities (instead of those listed for <em>sacred armor</em>): <Link to="/magic-enh/arrow_deflection">arrow deflection</Link>, <Link to="/magic-enh/blinding">blinding</Link>, <Link to="/magic-enh/fortification">fortification</Link> (heavy, light, or moderate), <Link to="/magic-enh/reflecting">reflecting</Link>, and <Link to="/magic-enh/spell_resistance">spell resistance</Link> (13, 15, 17, and 19).</Pair>
</Ability>
<Ability id="channel-energy-su" icon={["broken-shield","tornado-discs"]}>
<Pair single id="channel-energy-su">Channel Energy (Su)</Pair>
<Pair title="Info">The shieldbearer can *channel energy *only when carrying a shield, and the ability manifests as a 30-foot-cone <Link to="/misc/burst">burst</Link>, rather than as a radius.</Pair>
</Ability>
</>};
const _sixth_wing_bulwark = {title: "Sixth Wing Bulwark", jsx: <><h2 id="arc-warpriest-sixth_wing_bulwark-sixth-wing-bulwark">Sixth Wing Bulwark</h2>
<p><strong>Sources</strong> <Link to="/source/distant_realms">Distant Realms pg. 32</Link><br/>Many are the followers of Ragathiel who lead in battle. Far fewer, but no less crucial to a successful campaign, are those who hold the line and defend against the incursion of evil forces. The Sixth Wing bulwark trains to do just that: fortifying herself and her allies to stand strong in the face of any opposition, no matter how dire.</p>
<Ability id="sixth-wing-sworn" icon={["hazard-sign"]}>
<Pair single id="sixth-wing-sworn">Sixth Wing Sworn</Pair>
<Pair title="Info">A Sixth Wing bulwark must be a worshiper of <Link to="/faith/ragathiel">Ragathiel</Link>. If she ever changes her deity, she loses this archetype, cannot regain it, and becomes a normal warpriest.</Pair>
</Ability>
<Ability id="weapon-and-armor-proficiency" icon={["stairs-goal"]}>
<Pair single id="weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Weapon and armor proficiencies</Pair>
<Pair title="Ability">A Sixth Wing bulwark gains proficiency in <Link to="/eq-armor/tower_shield">tower shields</Link>.</Pair>
</Ability>
<Ability id="focus-shield" icon={["stairs-goal"]}>
<Pair single id="focus-shield">Focus Shield</Pair>
<Pair hl title="Replaces">Focus weapon</Pair>
<Pair title="Ability">A Sixth Wing bulwark gains <Link to="/feat/shield_focus">Shield Focus</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="sacred-shield-su" icon={["upgrade","armor-upgrade","shield-reflect"]}>
<Pair single id="sacred-shield-su">Sacred Shield (Su)</Pair>
<Pair hl title="Replaces">Sacred weapon</Pair>
<Pair title="Ability">Dedicated training and divine grace allow a Sixth Wing bulwark to lessen the burden of a shield's weight. As long as a Sixth Wing bulwark is wielding a shield, she reduces her total armor check penalty by an amount equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of her warpriest level.</Pair>
<Pair title="At 4th Level">A Sixth Wing bulwark can call upon Ragathiel's might to bless her shield as a <strong className="hl">swift action</strong>. As long as she is wielding a shield, she gains fire <Link to="/umr/resistance">resistance</Link> 5 and DR/- equal to one-fourth of her warpriest level (DR 1/- at 4th level, DR 2/- at 8th level, and so on). A Sixth Wing bulwark can use this ability a number of rounds per day equal to her warpriest level; these rounds need not be consecutive.</Pair>
<Pair title="At 8th Level">The fire resistance becomes 10.</Pair>
<Pair title="At 12th Level">The fire resistance increases to 15.</Pair>
<Pair title="At 16th Level">The fire resistance becomes 20.</Pair>
<Pair title="At 20th Level">The fire resistance becomes <Link to="/umr/immunity">immunity</Link> to fire.</Pair>
<Pair title="Special"><p>As a <strong className="hl">swift action</strong> while her shield is benefitting from Ragathiel's blessing (or as part of the action to activate the blessing), a Sixth Wing bulwark can direct her shield to protect an ally within 60 feet. The shield sprouts burning wings and flies to defend the ally, providing its shield bonus, damage reduction, and fire resistance to that ally instead of the Sixth Wing bulwark. Rounds in which she uses her shield in this manner count normally against the rounds per day in which she can use this ability.</p>
<p>As long as she has rounds of sacred shield remaining, she can recall her shield to her arm as a <strong className="hl">swift action</strong> and regain its benefits. A Sixth Wing bulwark must maintain one hand free to direct the shield; if she no longer has a hand free or if the duration of her sacred shield ability ends, the shield drops to the ground and ceases providing any benefit.</p>
</Pair>
</Ability>
<Ability id="shield-of-grace-su" icon={["upgrade"]}>
<Pair single id="shield-of-grace-su">Shield of Grace (Su)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">When a Sixth Wing bulwark uses her <em>sacred shield</em> to protect an ally, she can deliver <em>blessings,</em> healing from her <em>fervor</em> ability, and touch spells through the shield to the ally benefiting from the shield's protection.</Pair>
</Ability>
<Ability id="sacred-fortification-su" icon={["stairs-goal"]}>
<Pair single id="sacred-fortification-su">Sacred Fortification (Su)</Pair>
<Pair hl title="Alters">Sacred armor</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">When a Sixth Wing bulwark activates her sacred armor ability, she can expend one use of <em>fervor</em> to also activate her <em>sacred shield</em> ability.</Pair>
</Ability>
<Ability id="intercession-su" icon={["magic-swirl"]}>
<Pair single id="intercession-su">Intercession (Su)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 12th level</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Swift Action">By expending a use of <em>fervor,</em> a Sixth Wing bulwark can teleport to the location of a willing (or unconscious) ally and immediately teleport that ally to her own previous position, in effect switching places with the ally. A Sixth Wing bulwark must have line of effect to the target to use this ability.</Pair>
</Ability>
<Ability id="reflexive-fortification-su" icon={["stairs-goal"]}>
<Pair single id="reflexive-fortification-su">Reflexive Fortification (Su)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 18th level</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Ability">A Sixth Wing bulwark can use her <em>sacred shield</em> ability as an <strong className="hl">immediate action</strong> when she is attacked. Alternatively, she can use this ability as an <strong className="hl">immediate action</strong> when an ally within 30 feet is attacked to send her shield to protect that ally. She can use this ability even if she is surprised.</Pair>
</Ability>
</>};
export default {calamity_caller:_calamity_caller,champion_of_the_faith:_champion_of_the_faith,cult_leader:_cult_leader,disenchanter:_disenchanter,divine_champion:_divine_champion,divine_commander:_divine_commander,feral_champion:_feral_champion,fist_of_the_godclaw:_fist_of_the_godclaw,forgepriest:_forgepriest,jistkan_magistrate:_jistkan_magistrate,libertys_blade:_libertys_blade,mantis_zealot:_mantis_zealot,molthuni_arsenal_chaplain:_molthuni_arsenal_chaplain,proclaimer:_proclaimer,proselytizer:_proselytizer,sacred_fist:_sacred_fist,shieldbearer:_shieldbearer,sixth_wing_bulwark:_sixth_wing_bulwark}