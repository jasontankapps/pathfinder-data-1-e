import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import ByLevelPop from '../../components/ByLevelPop';
const _angelfire_apostle = {title: "Angelfire Apostle", jsx: <><h2 id="arc-cleric-angelfire_apostle-angelfire-apostle">Angelfire Apostle</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 7</Link><br/>Angelfire apostles use the powers of good to avoid violence when possible and cleanse both maladies and evil creatures with blinding flames. Angelfire apostles typically follow <Link to="/faith/sarenrae">Sarenrae</Link>, but a few serve empyreal lords such as <Link to="/faith/ragathiel">Ragathiel</Link>.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-cleric-angelfire_apostle--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>An angelfire apostle must be of good or neutral alignment.</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-cleric-angelfire_apostle-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-cleric-angelfire_apostle-armor-proficiency">Armor Proficiency</Pair>
<Pair hl title="Alters">The cleric's armor proficiency</Pair>
<Pair title="Info">Angelfire apostles are not proficient with medium armor.</Pair>
</Ability>
<Ability id="arc-cleric-angelfire_apostle-diminished-spellcasting" icon={["broken-shield"]}>
<Pair single id="arc-cleric-angelfire_apostle-diminished-spellcasting" flavor="An angelfire apostle is less concerned with the traditional divine magic that many religious adherents receive.">Diminished Spellcasting</Pair>
<Pair hl title="Alters">The cleric's spellcasting</Pair>
<Pair title="Info">The angelfire apostle receives one fewer spell slot at each spell level. When an angelfire apostle gets no spells per day at a spell level, he can cast domain spells of that level normally, but can only cast non-domain spells of that level if he gets them as <Link to="/rule/bonus_spells">bonus spells</Link>.</Pair>
</Ability>
<Ability id="arc-cleric-angelfire_apostle-extra-channel" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-angelfire_apostle-extra-channel">Extra Channel</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The angelfire apostle gains <Link to="/feat/extra_channel">Extra Channel</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-cleric-angelfire_apostle-channel-angelfire-su" icon={["info","upgrade"]}>
<Pair single id="arc-cleric-angelfire_apostle-channel-angelfire-su">Channel Angelfire (Su)</Pair>
<Pair hl title="Alters">Channel energy</Pair>
<Pair title="Info">An angelfire apostle must choose to <Link to="/ability/channel_positive_energy">channel positive energy</Link>, even if his deity is neutral or if he is not devoted to a particular deity.</Pair>
<Pair title="Passive Ability">When an angelfire apostle channels positive energy, affected nongood creatures are <Link to="/misc/dazzled">dazzled</Link> for 1 round, with no saving throw for this effect, in addition to experiencing the normal effects of channel energy.</Pair>
</Ability>
<Ability id="arc-cleric-angelfire_apostle-versatile-healing-channel-sp" icon={["magic-swirl"]}>
<Pair single id="arc-cleric-angelfire_apostle-versatile-healing-channel-sp">Versatile Healing Channel (Sp)</Pair>
<Pair title="At 5th Level">The angelfire apostle can spend two uses of his channel energy ability to cast <Link to="/spell/remove_blindness_deafness">remove blindness/deafness</Link> or <Link to="/spell/lesser_restoration">lesser restoration</Link> as a spell-like ability.</Pair>
<Pair title="At 7th Level">He can choose <Link to="/spell/remove_disease">remove disease</Link> or <Link to="/spell/remove_paralysis">remove paralysis</Link>.</Pair>
<Pair title="At 9th Level">He can choose <Link to="/spell/neutralize_poison">neutralize poison</Link>.</Pair>
<Pair title="At 11th Level">He can choose <Link to="/spell/breath_of_life">breath of life</Link>.</Pair>
<Pair title="At 13th Level">He can choose <Link to="/spell/heal">heal</Link>.</Pair>
<Pair title="At 15th Level">He can choose <Link to="/spell/regenerate">regenerate</Link>.</Pair>
<Pair title="At 17th Level">He can choose <Link to="/spell/restoration">restoration</Link> but cannot affect permanent negative levels.</Pair>
<Pair title="At 19th Level">He can choose <Link to="/spell/resurrection">resurrection</Link> but can affect only a target that has been dead no more than 1 round per his cleric level.</Pair>
</Ability>
<Ability id="arc-cleric-angelfire_apostle-cleansing-flames-su" icon={["magic-swirl"]}>
<Pair single id="arc-cleric-angelfire_apostle-cleansing-flames-su" flavor="The angelfire apostle becomes a direct conduit for the righteous power of his deity.">Cleansing Flames (Su)</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Usage">Cha modifier times/day</Pair>
<Pair title="Swift Action">Whenever the angelfire apostle casts a spell that belongs to the healing subschool that is a lower spell level than the highest spell he can cast, he can unleash a blast of flames by expending one use of his channel energy ability. The flames last for 1 round and fill a contiguous area equal to one 10-foot cube per level of the healing spell cast (at least one side of the cube must be adjacent to the angelfire apostle's space). The flames deal 1d4 points of damage per spell level. Half of the damage is fire damage, and half is raw divine power not subject to fire resistance or immunity. Any creature in the area can halve the damage with a successful Reflex saving throw against the spell's DC.</Pair>
</Ability>
</>};
const _appeaser = {title: "Appeaser", jsx: <><h2 id="arc-cleric-appeaser-appeaser">Appeaser</h2>
<p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil pg. 15</Link><br/>A rare few seek the power of dark forces for brighter ends by focusing on the utilitarian aspects of a god's portfolio, appeasing their deities through high praise and glorifying their chosen gods' unaligned aspects.</p>
<Ability id="arc-cleric-appeaser-aura-ex" icon={["info"]}>
<Pair single id="arc-cleric-appeaser-aura-ex">Aura (Ex)</Pair>
<Pair hl title="Alters">Aura</Pair>
<Pair title="Info">An appeaser always has an evil aura regardless of his actual alignment.</Pair>
</Ability>
<Ability id="arc-cleric-appeaser-channel-utility-su" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-appeaser-channel-utility-su">Channel Utility (Su)</Pair>
<Pair hl title="Alters">Channel energy</Pair>
<Pair title="Info">An appeaser channels negative energy, but also gains limited access to positive energy.</Pair>
<Pair title="At 5th Level">An appeaser can channel positive energy as a <strong className="hl">full-round action</strong>, but he treats his cleric level as if it were 4 lower when determining the amount of damage he can deal to undead and the amount of hit points he can restore to living creatures.</Pair>
</Ability>
<Ability id="arc-cleric-appeaser-divine-apologist-ex" icon={["info","broken-shield"]}>
<Pair single id="arc-cleric-appeaser-divine-apologist-ex">Divine Apologist (Ex)</Pair>
<Pair hl title="Alters">Alignment, spells</Pair>
<Pair title="Info">An appeaser must worship an evil god. His alignment must be within one step of his deity's, but he himself cannot have an evil alignment. An appeaser cannot cast any spells with the good or evil descriptor.</Pair>
</Ability>
<Ability id="arc-cleric-appeaser-mollified-domain-su" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-cleric-appeaser-mollified-domain-su">Mollified Domain (Su)</Pair>
<Pair hl title="Alters">Domains</Pair>
<Pair title="Info">An appeaser gains no domain or domain bonus spells.</Pair>
<Pair title="Usage">1 time/day + 1 per three cleric levels beyond 1st<ByLevelPop levels={[[1,1],[4,2],[7,3],[10,4],[13,5],[16,6],[19,7]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">He can sacrifice his own force of will to gain divine providence. Doing so deals 1d3 points of <Link to="/rule/charisma_damage">Charisma damage</Link> to the appeaser, and allows him to select a single domain offered by his deity (except the Evil domain or its subdomains). The appeaser gains access to any granted powers offered by the domain he would otherwise qualify for, and can sacrifice a prepared spell to cast a domain spell from that domain just as if he were spontaneously casting a <em>cure</em> or <em>inflict</em> spell. He retains access to this domain for a number of minutes equal to <Link to="/misc/half">half</Link> the appeaser's cleric level + plus his Wisdom modifier. Any domain abilities that can be used a limited number of times per day can be used only once each time that particular domain is invoked.</Pair>
<Pair title="Special">An appeaser can invoke only a single mollified domain at a time.</Pair>
</Ability>
</>};
const _asmodean_advocate = {title: "Asmodean Advocate", jsx: <><h2 id="arc-cleric-asmodean_advocate-asmodean-advocate">Asmodean Advocate</h2>
<p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox pg. 16</Link><br/>For the faithful of <Link to="/faith/asmodeus">Asmodeus</Link>, the words used in a negotiation or contract matter more than their intent. The word of the law is to be respected, but loopholes and vague wording are part of every law. Asmodean advocates are master wordsmiths who ally themselves with creatures that - much like their words - seem insignificant but are treacherous.</p>
<Ability id="arc-cleric-asmodean_advocate-pact-bound-ex" icon={["info","broken-shield","hazard-sign"]}>
<Pair single id="arc-cleric-asmodean_advocate-pact-bound-ex">Pact-Bound (Ex)</Pair>
<Pair hl title="Alters">Domains</Pair>
<Pair title="Info">An Asmodean advocate must choose Asmodeus as her deity and select the <Link to="/domain/trickery">Trickery</Link> domain. She does not gain a second domain. If she ever changes her deity, she loses this archetype and becomes a normal ex-cleric.</Pair>
</Ability>
<Ability id="arc-cleric-asmodean_advocate-serpent-su" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-asmodean_advocate-serpent-su">Serpent (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An Asmodean advocate gains a <Link to="/ability/familiar">familiar</Link> as the <em>arcane bond</em> class feature, using her cleric level as her <Link to="/class/wizard">wizard</Link> level. She must choose a <Link to="/monster/viper">viper</Link> familiar. The viper speaks one language of the Asmodean advocate's choice as a supernatural ability.</Pair>
</Ability>
<Ability id="arc-cleric-asmodean_advocate-devil-in-the-details-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-cleric-asmodean_advocate-devil-in-the-details-ex">Devil in the Details (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An Asmodean advocate learns to choose her words so carefully that even when she says something designed to deceive listeners, the words are phrased to be technically true. She can use her Profession (barrister) skill for Bluff and Diplomacy checks. This benefit also extends to her familiar. The Asmodean advocate gains an insight bonus equal to <Link to="/misc/half">half</Link> her cleric level (minimum +1) on Linguistics checks related to forgeries and on all Profession (barrister) checks.</Pair>
</Ability>
<Ability id="arc-cleric-asmodean_advocate-shoulder-devil-su" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-asmodean_advocate-shoulder-devil-su">Shoulder Devil (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">An Asmodean advocate can choose an <Link to="/monster/imp">imp</Link> familiar as though she had the <Link to="/feat/improved_familiar">Improved Familiar</Link> feat.</Pair>
</Ability>
</>};
const _blossoming_light = {title: "Blossoming Light", jsx: <><h2 id="arc-cleric-blossoming_light-blossoming-light">Blossoming Light</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 112</Link><br/>There are some clerics who take their pursuit of purity and light to extremes. These clerics are known as blossoming lights, and forsake armor and weaponry in favor of opening their hearts to pure goodness. Many are peace-loving or even pacifistic, and nearly every blossoming light favors redemption over righteous wrath.</p>
<p>Blossoming lights are primarily found among the <Link to="/rule/lantern_bearers">Lantern Bearers</Link>, as their powers are a great boon against the organization's foes. Despite this, their ways did not originate with elvenkind. Legend tells that <Link to="/faith/sarenrae">Sarenrae</Link>, horrified by the consequences of the destruction of Gormuz, reached out to one of that city's survivors. She granted the frightened woman divine powers to guide her fellow survivors, both to safety and to goodness, and humbly asked her to spread the message of redemption and forgiveness. While this priestess's identity has been lost to history, the Dawnflower's imparted wisdom has not.</p>
<p>Within the Lantern Bearers, given their growing alliance with Sarenrae's faith, the traditions of the blossoming light have found the perfect place to flourish. These clerics are increasingly at the vanguard of the organization's efforts to redeem the fallen, particularly drow who seek to escape their society's strictures.</p>
<Ability id="arc-cleric-blossoming_light-promise-of-faith" icon={["broken-shield"]}>
<Pair single id="arc-cleric-blossoming_light-promise-of-faith">Promise of Faith</Pair>
<Pair hl title="Alters">The cleric's armor proficiencies</Pair>
<Pair title="Info">A blossoming light vows to trust in her deity's protection over arms and armor. She is not proficient with any armor or shields. The blossoming light cannot use or benefit from any of her class features (including spellcasting) while wearing armor or using a shield, or for 1 minute thereafter.</Pair>
</Ability>
<Ability id="arc-cleric-blossoming_light-promise-of-purity" icon={["info","hazard-sign"]}>
<Pair single id="arc-cleric-blossoming_light-promise-of-purity">Promise of Purity</Pair>
<Pair hl title="Alters">Alignment</Pair>
<Pair title="Info">A blossoming light must be truly pure of heart. She must be good-aligned and worship a nonevil deity. If the blossoming light willfully commits an evil act, she loses all class features (including spellcasting) until she <Link to="/spell/atonement">atones</Link>.</Pair>
</Ability>
<Ability id="arc-cleric-blossoming_light-luminous-font-su" icon={["broken-shield","upgrade","magic-swirl"]}>
<Pair single id="arc-cleric-blossoming_light-luminous-font-su" flavor="A blossoming light forsakes her deity's deeper mysteries to focus on benevolence, healing, and bringing light to darkness.">Luminous Font (Su)</Pair>
<Pair hl title="Alters">Channel energy, domains</Pair>
<Pair title="Info">A blossoming light still selects domains and retains access to domain powers, but does not gain domain spell slots.</Pair>
<Pair title="Passive Ability">Blossoming lights are beacons of goodness, guiding others to follow their own best natures. A blossoming light adds <Link to="/misc/half">half</Link> her level on Diplomacy checks against good creatures or to convince an evil creature to take an action against its evil nature.</Pair>
<Pair title="At 3rd Level">When a blossoming light channels energy to harm undead, her channeled energy also harms chaotic evil outsiders, worshipers of chaotic evil deities, and evil creatures with <Link to="/umr/light_sensitivity">light sensitivity</Link> or <Link to="/umr/light_blindness">light blindness</Link> as if they were undead.</Pair>
<Pair title="At 7th Level">When a blossoming light channels energy, she can expend an additional use to fill the affected area with bright light (as per <Link to="/spell/daylight">daylight</Link>) for a number of rounds equal to her cleric level.</Pair>
<Pair title="At 10th Level">A blossoming light can use <Link to="/spell/atonement">atonement</Link> once per day as a spell-like ability, but only to offer redemption to others (as per the spell). Using the spell in this way does not require a focus or material component.</Pair>
<Pair title="Special">A blossoming light's <em>channel energy</em> is usable a number of times per day equal to 5 + her Charisma modifier + half her level.</Pair>
</Ability>
</>};
const _cardinal = {title: "Cardinal", jsx: <><h2 id="arc-cleric-cardinal-cardinal">Cardinal</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 64</Link><br/>While a cleric's faith is her highest priority, her church may wield significant political power in some regions. In these cases, cardinals arise from the ranks of the clergy, engaging in the game of intrigue on behalf of their churches. While some cardinals manage to join the world of politics and retain the purity of their faith, many cardinals find that they must compromise some part of their beliefs in pursuit of their church's political power, and some cardinals even fall prey to the corrupting influence of their power.</p>
<Ability id="arc-cleric-cardinal-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-cleric-cardinal-armor-proficiency">Armor Proficiency</Pair>
<Pair hl title="Replaces">Armor proficiencies</Pair>
<Pair title="Info">A cardinal is proficient in light armor, but not shields.</Pair>
</Ability>
<Ability id="arc-cleric-cardinal-political-skill" icon={["skills","upgrade","broken-shield"]}>
<Pair single id="arc-cleric-cardinal-political-skill">Political Skill</Pair>
<Pair hl title="Replaces">Spontaneous casting ability</Pair>
<Pair hl title="Alters">Domains, class skills, skill ranks per level, base attack bonus</Pair>
<Pair title="Info">A cardinal adds <Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/intimidate">Intimidate</Link> (CHA), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), and <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT) to her list of class skills.</Pair>
<Pair title="Passive Ability">She gains a number of skill ranks equal to 6 + her Intelligence modifier at each level, instead of the normal 2 + her Intelligence modifier. However, she gains only one domain, and her base attack bonus from cleric levels is equal to <Link to="/misc/half">half</Link> her class level (which is the same as for a sorcerer or wizard).</Pair>
</Ability>
</>};
const _channeler_of_the_unknown = {title: "Channeler of the Unknown", jsx: <><h2 id="arc-cleric-channeler_of_the_unknown-channeler-of-the-unknown">Channeler of the Unknown</h2>
<p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 12</Link><br/>While most clerics who fall out of favor with their deities simply lose their divine connection and the powers it granted, a few continue to go through the motions of prayer and obedience, persisting in the habits of faith even when their faith itself has faded. Among these, an even smaller number find that while their original deity no longer answers their prayers, something else does: an unknown entity or force of the universe channeling its power through a trained and practicing vessel.</p>
<p><strong className="hl">This is an ex-class archetype and can be taken by a character immediately upon becoming an ex-cleric.</strong></p>
<p>The following archetype can be taken by an ex-cleric immediately upon becoming an ex-cleric, regardless of character level, replacing some or all of the lost class abilities. If another archetype the character had before she became an ex-cleric replaces the same ability as the ex-class archetype, she loses the old archetype in favor of the new one; otherwise, she can retain both archetypes as normal. Channelers of the unknown can gain further levels in the cleric class, even though becoming an ex-cleric normally prohibits further advancement in the class. While an ex-member of a class can recant her failings and atone for her fall from her original class (typically involving an <Link to="/spell/atonement">atonement</Link> spell), her acceptance of her ex-class archetype means she must atone both for her initial fall and for further straying from the path. As a result, such a character must be the target of two <em>atonement</em> spells or a similar effect to regain her lost class features. Upon doing so, she immediately loses this archetype and regains her original class (and archetype, if she had one).</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-cleric-channeler_of_the_unknown--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Ex-cleric</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-cleric-channeler_of_the_unknown-weaponarmor-proficiency" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-cleric-channeler_of_the_unknown-weaponarmor-proficiency">Weapon/Armor Proficiency</Pair>
<Pair hl title="Alters">Weapon and armor proficiency</Pair>
<Pair title="Choice">A channeler of the unknown loses proficiency with her deity's favored weapon. She instead gains proficiency with one martial or exotic weapon, chosen when she first takes this archetype, which thereafter effectively functions as her holy or unholy symbol for the purposes of class abilities and spellcasting. The weapon chosen cannot be one associated with her former deity. Once she makes this choice, she can't later change it.</Pair>
</Ability>
<Ability id="arc-cleric-channeler_of_the_unknown-spells" icon={["broken-shield","spell-book"]}>
<Pair single id="arc-cleric-channeler_of_the_unknown-spells">Spells</Pair>
<Pair hl title="Alters">Spells</Pair>
<Pair title="Info">A channeler of the unknown has one fewer spell slot per spell level in which she can prepare spells than normal. She is no longer restricted by alignment descriptors, and she gains access to all spells on the cleric spell list, even spells her alignment would normally prohibit.</Pair>
</Ability>
<Ability id="arc-cleric-channeler_of_the_unknown-unknown-aura-su" icon={["armor-upgrade"]}>
<Pair single id="arc-cleric-channeler_of_the_unknown-unknown-aura-su">Unknown Aura (Su)</Pair>
<Pair hl title="Replaces">Aura</Pair>
<Pair title="Passive Ability">A channeler of the unknown never radiates an alignment aura, as if under the effect of a permanent <Link to="/spell/undetectable_alignment">undetectable alignment</Link> spell.</Pair>
</Ability>
<Ability id="arc-cleric-channeler_of_the_unknown-channel-entropy-su" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-channeler_of_the_unknown-channel-entropy-su">Channel Entropy (Su)</Pair>
<Pair hl title="Alters">Channel energy</Pair>
<Pair title="Ability">A channeler of the unknown can <em>channel entropy</em> as a cleric channels negative or positive energy, releasing a wave of twisting void that harms creatures in the area of effect. The amount of damage dealt is equal to that an evil cleric of her level would deal by <Link to="/ability/channel_negative_energy">channeling negative energy</Link>, except it affects living, unliving, and undead creatures alike. This functions in all other ways as a cleric's <em>channel energy</em> class feature, including benefiting from feats that affect <em>channel energy</em> (such as <Link to="/feat/selective_channeling">Selective Channeling</Link>).</Pair>
</Ability>
<Ability id="arc-cleric-channeler_of_the_unknown-power-of-the-unknown" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-cleric-channeler_of_the_unknown-power-of-the-unknown">Power of the Unknown</Pair>
<Pair hl title="Alters">Domains</Pair>
<Pair title="Ability">A channeler of the unknown has lost the benefit of the domains granted by her deity, but the unknown entity that answers her supplications instead grants her the benefits of one domain from the following list: <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/madness">Madness</Link>, or <Link to="/domain/void">Void</Link>. Instead of a single domain spell slot, the channeler of the unknown gains two domain spell slots per spell level she can cast. A channeler of the unknown cannot select a subdomain in place of the domain available to her.</Pair>
</Ability>
<Ability id="arc-cleric-channeler_of_the_unknown-spontaneous-casting" icon={["broken-shield","magic-swirl"]}>
<Pair single id="arc-cleric-channeler_of_the_unknown-spontaneous-casting">Spontaneous Casting</Pair>
<Pair hl title="Alters">Spontaneous casting</Pair>
<Pair title="Ability">Instead of converting prepared spells into <em>cure</em> or <em>inflict</em> spells, a channeler of the unknown can channel stored spell energy into her domain spells. She can lose a prepared spell, including a domain spell, to spontaneously cast a domain spell of the same spell level or lower.</Pair>
</Ability>
</>};
const _cloistered_cleric = {title: "Cloistered Cleric", jsx: <><h2 id="arc-cleric-cloistered_cleric-cloistered-cleric">Cloistered Cleric</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 31</Link><br/>Cloistered clerics typically live in a temple and rarely interact with the outside world. They are bookish and well learned in the lore of the faith, paying less attention to its magical and martial aspects. A cloistered cleric has the following class features.</p>
<Ability id="arc-cleric-cloistered_cleric-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-cleric-cloistered_cleric-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair title="Info">Cloistered clerics are proficient with light armor and with the following weapons: <Link to="/eq-weapon/club">club</Link>, <Link to="/eq-weapon/heavy_mace">heavy mace</Link>, <Link to="/eq-weapon/light_mace">light mace</Link>, <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>, and <Link to="/eq-weapon/sling">sling</Link>. They are not proficient with shields.</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-cleric-cloistered_cleric-undefined">
<Pair id="arc-cleric-cloistered_cleric-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT)</Pair>
<Pair title="Info">She gains 4 + Int modifier skill ranks per level.</Pair></Ability>
<Ability id="arc-cleric-cloistered_cleric-diminished-spellcasting" icon={["broken-shield"]}>
<Pair single id="arc-cleric-cloistered_cleric-diminished-spellcasting">Diminished Spellcasting</Pair>
<Pair title="Info">A cloistered cleric chooses only one domain from her deity's list of domains, and her number of non-domain spells per day for each spell level is one less than normal (for example, a 4th-level cloistered cleric has three cantrips, two 1st-level spells, one 1st-level domain spell, one 2nd-level spell, and one 2nd-level domain spell). If this reduces the number of spells per day for that level to 0, she gains only the bonus spells she would be entitled to based on her Wisdom score for that level, plus her domain spell for that level.</Pair>
</Ability>
<Ability id="arc-cleric-cloistered_cleric-breadth-of-knowledge" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-cleric-cloistered_cleric-breadth-of-knowledge">Breadth of Knowledge</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A cloistered cleric gains a bonus on Knowledge skill checks equal to <Link to="/misc/half">half</Link> her class level (minimum +1) and can make Knowledge skill checks untrained.</Pair>
</Ability>
<Ability id="arc-cleric-cloistered_cleric-well-read-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-cleric-cloistered_cleric-well-read-ex">Well-Read (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A cloistered cleric gains a +2 bonus on skill checks, caster level checks, and saving throws if such rolls pertain to mundane or magical glyphs, runes, scrolls, symbols, and other writings.</Pair>
</Ability>
<Ability id="arc-cleric-cloistered_cleric-verbal-instruction-ex" icon={["upgrade"]}>
<Pair single id="arc-cleric-cloistered_cleric-verbal-instruction-ex">Verbal Instruction (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A cloistered cleric can use the <Link to="/rule/aid_another">aid another</Link> action to assist an ally (or multiple allies) within 30 feet on a skill or ability check. She can instruct a number of allies equal to one-third of her cleric level with the same action. The allies must be able to hear and understand the cleric's instructions. If all allies are not engaged in the same task, using this ability is a <strong className="hl">full-round action</strong> rather than a <strong className="hl">standard action</strong>.</Pair>
</Ability>
<Ability id="arc-cleric-cloistered_cleric-scribe-scroll-su" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-cloistered_cleric-scribe-scroll-su">Scribe Scroll (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A cloistered cleric gains <Link to="/feat/scribe_scroll">Scribe Scroll</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _crashing_wave = {title: "Crashing Wave", jsx: <><h2 id="arc-cleric-crashing_wave-crashing-wave">Crashing Wave</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea pg. 23</Link><br/>Clerics of Gozreh revere their deity as the embodiment of nature and the incarnation of wind and waves. Clerics who live in or near the sea sometimes embrace the watery aspect of <Link to="/faith/gozreh">Gozreh</Link> over the deity's other dimensions and take the title of crashing wave. In aquatic communities, a crashing wave is often a healer and spiritual leader. Such clerics understand the tempestuousness and cruelty of the sea, but also its generosity and bounty.</p>
<p>Among aquatic creatures, cecaelias, locathahs, and merfolk are the most likely to walk the path of the crashing wave. Gnomes, halflings, and humans living on coastlines or working aboard ships may also answer the call to become crashing waves.</p>
<Ability id="arc-cleric-crashing_wave-sworn-to-the-sea" icon={["info"]}>
<Pair single id="arc-cleric-crashing_wave-sworn-to-the-sea">Sworn to the Sea</Pair>
<Pair title="Info">A crashing wave must select Gozreh as her deity.</Pair>
</Ability>
<Ability id="arc-cleric-crashing_wave-speech-of-the-sea" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-cleric-crashing_wave-speech-of-the-sea">Speech of the Sea</Pair>
<Pair hl title="Alters">Bonus languages</Pair>
<Pair title="Info">A crashing wave's bonus language options include Aquan in addition to the bonus languages available to the character from her race. The crashing wave does not gain Abyssal, Celestial, or Infernal as bonus language options.</Pair>
</Ability>
<Ability id="arc-cleric-crashing_wave-balanced-channel-su" icon={["aura","smoking-finger","remedy"]}>
<Pair single id="arc-cleric-crashing_wave-balanced-channel-su" flavor="A crashing wave can channel the pure balance of the ocean - its wildness, its calm, its cruelty, and its gentleness.">Balanced Channel (Su)</Pair>
<Pair hl title="Replaces">Channel energy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Cha modifier times/day</Pair>
<Pair title="Standard"><p>This energy can be used to harm or heal creatures, as the crashing wave chooses. Channeling this energy causes a 30-foot-radius <Link to="/misc/burst">burst</Link> centered on the cleric. A crashing wave can choose whether to include herself in the effect.</p>
<p>If the crashing wave chooses to harm, creatures within the burst that are chaotic good, chaotic evil, lawful good, or lawful evil take 1d6 points of damage plus 1d6 points of damage for every 2 levels the cleric has beyond 1st (2d6 at 3rd, 3d6 at 5th, and so on). Creatures with a neutral alignment component are unaffected by this energy. Creatures that take damage from the channeled energy can attempt a Fortitude save (DC = 10 + <Link to="/misc/half">half</Link> the crashing wave's level + her Charisma modifier) for half damage. This damage is neither negative nor positive energy, so a creature's resistance to positive or negative energy does not reduce this damage. (However, resistance to channeled energy in particular, such as that provided by <Link to="/umr/channel_resistance">channel resistance</Link>, applies normally.)</p>
<p>If the crashing wave chooses to heal, creatures within the burst that have any neutral alignment component are healed 1d6 points of damage plus 1d6 points of damage for every 2 levels the cleric has beyond 1st (2d6 at 3rd, 3d6 at 5th, and so on). This healing does not affect creatures that are chaotic good, chaotic evil, lawful good, or lawful evil. This healing is positive energy, so any creatures not healed by positive energy (such as undead) receive no healing from this effect, even if they have a neutral alignment.</p>
</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="Special">The cleric must be able to present her holy symbol to use this ability.</Pair>
</Ability>
<Ability id="arc-cleric-crashing_wave-spontaneous-casting" icon={["broken-shield","spell-book"]}>
<Pair single id="arc-cleric-crashing_wave-spontaneous-casting">Spontaneous Casting</Pair>
<Pair hl title="Alters">Spontaneous casting</Pair>
<Pair title="Ability">A crashing wave does not gain the ability to spontaneously cast <em>cure</em> or <em>inflict</em> spells by sacrificing prepared spells. However, a crashing wave can spontaneously cast the following spells by sacrificing a prepared spell of the noted level or higher.</Pair>
<Pair plain title="1st"><Link to="/spell/bless_water">Bless water</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/slipstream">Slipstream</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/water_breathing">Water breathing</Link></Pair>
<Pair plain title="4th"><Link to="/spell/control_water">Control water</Link></Pair>
<Pair plain title="5th"><Link to="/spell/geyser">Geyser</Link></Pair>
<Pair plain title="6th"><Link to="/spell/fluid_form">Fluid form</Link></Pair>
<Pair plain title="7th"><Link to="/spell/elemental_body_iv">Elemental body IV</Link> (water only)</Pair>
<Pair plain title="8th"><Link to="/spell/seamantle">Seamantle</Link></Pair>
<Pair plain title="9th"><Link to="/spell/elemental_swarm">Elemental swarm</Link> (water only)</Pair>
</Ability>
</>};
const _crusader = {title: "Crusader", jsx: <><h2 id="arc-cleric-crusader-crusader">Crusader</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 40</Link><br/>Crusaders serve the militant arm of a church, ready to stand guard over the religion's holy places and to be its swift, avenging arm against those who resist its truth.</p>
<Ability id="arc-cleric-crusader-diminished-spellcasting" icon={["broken-shield"]}>
<Pair single id="arc-cleric-crusader-diminished-spellcasting">Diminished Spellcasting</Pair>
<Pair hl title="Alters">Domain, spellcasting</Pair>
<Pair title="Info">A crusader chooses only one domain and gains one fewer spell of each level than normal. If this reduces the number to 0, she may cast spells of that level only if they are domain spells or if her Wisdom allows <Link to="/rule/bonus_spells">bonus spells</Link> of that level.</Pair>
</Ability>
<Ability id="arc-cleric-crusader-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-crusader-bonus-feat">Bonus Feat</Pair>
<Pair title="At 1st Level">A crusader gains a bonus feat from the following list: <Link to="/feat/heavy_armor_proficiency">Heavy Armor Proficiency</Link>, <Link to="/feat/improved_shield_bash">Improved Shield Bash</Link>, <Link to="/feat/martial_weapon_proficiency">Martial Weapon Proficiency</Link>, <Link to="/feat/saving_shield">Saving Shield</Link>, <Link to="/feat/shield_focus">Shield Focus</Link>, <Link to="/feat/tower_shield_proficiency">Tower Shield Proficiency</Link>, and <Link to="/feat/weapon_focus">Weapon Focus</Link>&#42;.</Pair>
<Pair title="At 5th Level">A crusader gains another feat from the list above.</Pair>
<Pair title="At 10th Level">A crusader gains another bonus feat, and may also choose from the following feats: <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link>, <Link to="/feat/greater_shield_focus">Greater Shield Focus</Link>, <Link to="/feat/greater_weapon_focus">Greater Weapon Focus</Link>&#42;, <Link to="/feat/improved_critical">Improved Critical</Link>&#42;, <Link to="/feat/shield_slam">Shield Slam</Link>, <Link to="/feat/shield_specialization">Shield Specialization</Link>, and <Link to="/feat/weapon_specialization">Weapon Specialization</Link>&#42;.</Pair>
<Pair title="At 15th Level">A crusader gains another bonus feat from either list.</Pair>
<Pair title="At 20th Level">A crusader gets a fifth bonus feat from either of the lists above, or either <Link to="/feat/greater_shield_specialization">Greater Shield Specialization</Link> or <Link to="/feat/greater_weapon_specialization">Greater Weapon Specialization</Link>&#42;.</Pair>
<Pair title="Info">Bonus feats marked with an asterisk (&#42;) must be applied to the favored weapon of the crusader's deity.</Pair>
<Pair title="Special">A crusader need not meet the normal class- or level-based prerequisites for these bonus feats.</Pair>
</Ability>
<Ability id="arc-cleric-crusader-legions-blessing-su" icon={["magic-swirl","stairs-goal"]}>
<Pair single id="arc-cleric-crusader-legions-blessing-su" flavor="A crusader gains the ability to confer beneficial spells quickly to a large group of allies.">Legion's Blessing (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Full-Round Action">The crusader may confer the effects of a single harmless spell with a range of touch to a number of creatures equal to <Link to="/misc/half">half</Link> her cleric level. The spell's range remains touch, so all intended recipients must be within the crusader's reach when the spell is cast. Using the <em>legion's blessing</em> expends the prepared spell, but it also requires the crusader to sacrifice another prepared spell three levels higher, as when spontaneously using a <em>cure</em> or <em>inflict</em> spell. The higher-level spell is not cast but is simply lost, its magical energy used to power the legion's blessing.</Pair>
</Ability>
</>};
const _demonic_apostle = {title: "Demonic Apostle", jsx: <><h2 id="arc-cleric-demonic_apostle-demonic-apostle">Demonic Apostle</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 104</Link><br/>In order to survive, the drow threw in their lot with demon lords. Thus, demon worship is common among the drow, and so are ranks of demonic apostles, who gain magical insight from their dark lords and crush their chaotic masters' enemies by channeling demonic energy. A demonic apostle has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-cleric-demonic_apostle--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/drow">Drow</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-cleric-demonic_apostle-demonic-magic" icon={["info","broken-shield"]}>
<Pair single id="arc-cleric-demonic_apostle-demonic-magic">Demonic Magic</Pair>
<Pair title="Info">A demonic apostle must choose to channel negative energy, and must select either the <Link to="/domain/chaos">Chaos</Link> or <Link to="/domain/evil">Evil</Link> domain or the <Link to="/domain/demon">Demon</Link> subdomain as her sole domain.</Pair>
</Ability>
<Ability id="arc-cleric-demonic_apostle-demonic-familiar" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-demonic_apostle-demonic-familiar">Demonic Familiar</Pair>
<Pair title="At 1st Level">A demonic apostle gains a <Link to="/ability/familiar">familiar</Link> as a wizard equal to her cleric level, or if she already has a familiar, her cleric levels stack to determine the familiar's abilities.</Pair>
<Pair title="At 3rd Level">Her familiar gains the <Link to="/template/fiendish">fiendish</Link> template.</Pair>
<Pair title="At 7th Level">The demonic apostle exchanges her familiar for a <Link to="/monster/quasit">quasit</Link> without the need to take the <Link to="/feat/improved_familiar">Improved Familiar</Link> feat.</Pair>
</Ability>
<Ability id="arc-cleric-demonic_apostle-demonic-channel-su" icon={["stairs-goal","aura"]}>
<Pair single id="arc-cleric-demonic_apostle-demonic-channel-su">Demonic Channel (Su)</Pair>
<Pair hl title="Replaces">Channel energy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Standard Action">A demonic apostle can channel demonic energy to damage creatures of lawful and good alignment, or, at higher levels, bolster the abilities of chaotic evil allies. Channeling this energy causes a 30-foot-radius <Link to="/misc/burst">burst</Link> centered on the cleric. Creatures within the burst that are lawful or good take 1d6 points of damage, plus 1d6 points of damage for every two levels the cleric possesses beyond 1st (2d6 at 3rd, 3d6 at 5th, and so on).</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="At 5th Level">Chaotic evil allies within the burst are affected as if targeted by a <Link to="/spell/rage">rage</Link> spell with a duration of 1 round.</Pair>
<Pair title="At 9th Level">Lawful or good enemies are also <Link to="/misc/sickened">sickened</Link> for 1d6 rounds if they fail their saving throw against the demonic channel.</Pair>
<Pair title="Special">Creatures that take damage from the channeled demonic energy receive a Fortitude save to halve the damage. The DC of this save is equal to 10 + <Link to="/misc/half">half</Link> the demonic apostle's level + the demonic apostle's Charisma modifier. Lawful good creatures take a -2 penalty on this saving throw.</Pair>
</Ability>
</>};
const _divine_paragon = {title: "Divine Paragon", jsx: <><h2 id="arc-cleric-divine_paragon-divine-paragon">Divine Paragon</h2>
<p><strong>Sources</strong> <Link to="/source/divine_anthology">Divine Anthology pg. 15</Link><br/>Divine paragons strive to emulate their god's ideals as closely as possible. They might see themselves as an incarnation of their deity in the flesh, or they could simply seek to embody the physical and spiritual ideals set forth by their deity. Many divine paragons go as far as to alter their appearance, as best as possible, to look similar to their chosen deity, but such a level of devotion is not required by the archetype.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-cleric-divine_paragon--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>A divine paragon is intensely devoted to a single deity, and her alignment must be identical to her deity's alignment.</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-cleric-divine_paragon-devoted-domain" icon={["stairs-goal","upgrade","hazard-sign"]}>
<Pair single id="arc-cleric-divine_paragon-devoted-domain">Devoted Domain</Pair>
<Pair hl title="Alters">Domains</Pair>
<Pair title="Ability"><p>A divine paragon gains <Link to="/feat/deific_obedience">Deific Obedience</Link> as a bonus feat, even if she doesn't meet the feat's prerequisites. She gains access to her boons at an accelerated rate (see below) rather than the standard HD-based rate granted by Deific Obedience (and as such cannot benefit from the accelerated rate granted by the <Link to="/feat/diverse_obedience">Diverse Obedience</Link> feat).</p>
<p>When the divine paragon selects her domains, she must designate one of the two domains she gains as her devoted domain. She gains all of this domain's granted powers and domain spells normally. For her other domain, she gains only its domain spells - she does not gain any of the granted powers of that domain. Instead, she must choose from the evangelist, exalted, or sentinel boons granted by her deity.</p>
</Pair>
<Pair title="At 5th Level">She gains access to the first boon granted by her deity.</Pair>
<Pair title="At 11th Level">She gains access to the second boon.</Pair>
<Pair title="At 14th Level">She gains access to the third boon.</Pair>
<Pair title="Special">In order to retain access to her domain spells, the domain powers of her devoted domain, and the boons granted by Deific Obedience, the divine paragon must perform her obedience daily. If she fails to do so, she loses access to these abilities until she next performs her obedience (but she can still cast spells, channel energy, and perform other abilities granted by her cleric levels).</Pair>
</Ability>
<Ability id="arc-cleric-divine_paragon-divine-brand-ex" icon={["stairs-goal","aura"]}>
<Pair single id="arc-cleric-divine_paragon-divine-brand-ex">Divine Brand (Ex)</Pair>
<Pair hl title="Alters">Aura</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A mark appears somewhere on the divine paragon's body. The mark's location varies by individual and faith, but takes the form of the deity's holy symbol and generally appears in a location easy to display, such as on the hand, forearm, chest, or face. An uncovered divine brand functions as a holy (or unholy) symbol and as a divine focus for spellcasting. The divine paragon's aura is even more powerful than a typical cleric's as a result of her devotion, and her cleric level is treated as 1 higher for the purpose of determining the strength of her aura when it is viewed by spells like <Link to="/spell/detect_good">detect good</Link>.</Pair>
</Ability>
</>};
const _divine_scourge = {title: "Divine Scourge", jsx: <><h2 id="arc-cleric-divine_scourge-divine-scourge">Divine Scourge</h2>
<p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 23</Link><br/>Some divine servants take on the role of dealing out unique punishments on behalf of their deities, taking pleasure in carrying out their sacrosanct duties. Such divine scourges are most common among worshipers of <Link to="/faith/abadar">Abadar</Link> (meting out punishment to lawbreakers in concert with local courts), <Link to="/faith/calistria">Calistria</Link> (punishing those truly deserving of vengeance), and <Link to="/faith/zon_kuthon">Zon-Kuthon</Link> (seeing punishment as an applied form of pain and suffering). Divine scourges make a point of inflicting long-lasting maladies and curses on those deserving of such fates under the tenets of the scourges' religions.</p>
<Ability id="arc-cleric-divine_scourge-curser-ex" icon={["info","broken-shield"]}>
<Pair single id="arc-cleric-divine_scourge-curser-ex">Curser (Ex)</Pair>
<Pair hl title="Alters">Domains</Pair>
<Pair title="Ability">A divine scourge must take the <Link to="/domain/curse">Curse</Link> subdomain as a domain, regardless of the actual domains offered by her deity. The divine scourge does not receive a second domain.</Pair>
</Ability>
<Ability id="arc-cleric-divine_scourge-divine-hexes" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-divine_scourge-divine-hexes">Divine Hexes</Pair>
<Pair hl title="Replaces">Channel energy</Pair>
<Pair title="At 3rd Level">A divine scourge can select one of the following hexes from the witch class hex list: <Link to="/hex/blight">blight</Link>, <Link to="/hex/cursed_wound">cursed wound</Link>, <Link to="/hex/evil_eye">evil eye</Link>, <Link to="/hex/misfortune">misfortune</Link>, <Link to="/hex/scar">scar</Link>, <Link to="/hex/slumber">slumber</Link>, and <Link to="/hex/unnerve_beasts">unnerve beasts</Link>.</Pair>
<Pair title="At 7th Level">She selects a second hex from the list above.</Pair>
<Pair title="At 11th Level">She can select a hex from the list above, or instead select from the following list of major hexes: <Link to="/hex/agony">agony</Link>, <Link to="/hex/hoarfrost">hoarfrost</Link>, <Link to="/hex/infected_wounds">infected wounds</Link>, <Link to="/hex/nightmares">nightmares</Link>, and <Link to="/hex/retribution">retribution</Link>.</Pair>
<Pair title="At 15th Level">She selects another hex or major hex.</Pair>
<Pair title="At 19th Level">She selects a fifth hex or major hex.</Pair>
<Pair title="Special">The divine scourge uses her Wisdom modifier instead of her Intelligence modifier to determine the save DCs of her hexes. Any hex that refers to using her Intelligence modifier to determine its duration or effect instead uses her Charisma modifier for that purpose.</Pair>
</Ability>
</>};
const _divine_strategist = {title: "Divine Strategist", jsx: <><h2 id="arc-cleric-divine_strategist-divine-strategist">Divine Strategist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 40</Link><br/>The divine strategist leads the armies of the faithful, not from the front lines but through her clever strategy and tactical acumen.</p>
<Ability id="arc-cleric-divine_strategist-domains" icon={["broken-shield"]}>
<Pair single id="arc-cleric-divine_strategist-domains">Domains</Pair>
<Pair title="Info">A divine strategist gains only a single domain.</Pair>
</Ability>
<Ability id="arc-cleric-divine_strategist-master-tactician-ex" icon={["stairs-goal","upgrade","rolling-dices"]}>
<Pair single id="arc-cleric-divine_strategist-master-tactician-ex">Master Tactician (Ex)</Pair>
<Pair hl title="Replaces">Channel energy</Pair>
<Pair title="Ability">A divine strategist can always act in a surprise round even if she fails to make a Perception check to notice enemies, though she is considered <Link to="/rule/flat_footed">flat-footed</Link> until she acts.</Pair>
<Pair title="Passive Ability">The divine strategist gains a bonus on initiative checks equal to <Link to="/misc/half">half</Link> her cleric level. Allies able to see and hear the divine strategist gain a bonus on initiative checks equal to 1/4 the divine strategist's level. This is a language-dependent ability.</Pair>
<Pair title="At 20th Level">A divine strategist's initiative roll is automatically a natural 20.</Pair>
</Ability>
<Ability id="arc-cleric-divine_strategist-caster-support-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-cleric-divine_strategist-caster-support-su">Caster Support (Su)</Pair>
<Pair title="Ability">A divine strategist can use the <Link to="/rule/aid_another_2">aid another</Link> action to assist another divine spellcaster, granting a circumstance bonus on caster level checks and <Link to="/rule/concentration">concentration</Link> checks until the beginning of the divine strategist's next turn. This bonus is equal to 2 + one-fourth of her cleric level.</Pair>
<Pair title="Special">The allied caster must remain adjacent to the divine strategist to gain this benefit. Caster support can be used to assist arcane spellcasters or characters using magical items, but they gain only half the normal bonus.</Pair>
</Ability>
<Ability id="arc-cleric-divine_strategist-tactical-expertise-ex" icon={["upgrade"]}>
<Pair single id="arc-cleric-divine_strategist-tactical-expertise-ex" flavor="A divine strategist knows how to take best advantage of tactical opportunities.">Tactical Expertise (Ex)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">Whenever she is <Link to="/rule/flanking">flanking</Link> or makes an attack of opportunity, she may add her Intelligence bonus (if any) as a bonus on the attack roll.</Pair>
<Pair title="Swift Action">Once per day she may add her Intelligence modifier as a bonus on any single d20 roll made as part of a <Link to="/rule/readied_action">readied action</Link>. She can use this ability one additional time per day for every two levels after 8th.</Pair>
</Ability>
</>};
const _ecclesitheurge = {title: "Ecclesitheurge", jsx: <><h2 id="arc-cleric-ecclesitheurge-ecclesitheurge">Ecclesitheurge</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 91</Link><br/>Eschewing physical armor for protection via the strength of his faith, an ecclesitheurge focuses on the miracles his deity bestows and the breadth of that deity's dominion.</p>
<Ability id="arc-cleric-ecclesitheurge-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-cleric-ecclesitheurge-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiencies</Pair>
<Pair title="Info">An ecclesitheurge is proficient with the <Link to="/eq-weapon/club">club</Link>, <Link to="/eq-weapon/dagger">dagger</Link>, <Link to="/eq-weapon/heavy_crossbow">heavy crossbow</Link>, <Link to="/eq-weapon/light_crossbow">light crossbow</Link>, and <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>, but he's not proficient with any type of armor or shield.</Pair>
</Ability>
<Ability id="arc-cleric-ecclesitheurge-ecclesitheurges-vow" icon={["info"]}>
<Pair single id="arc-cleric-ecclesitheurge-ecclesitheurges-vow">Ecclesitheurge's Vow</Pair>
<Pair title="At 1st Level">An ecclesitheurge makes a vow to his deity to be protected solely by his faith, not by armor or shields. An ecclesitheurge who wears armor or uses a shield is unable to use his <em>blessing of the faithful</em> ability, use cleric domain powers, or cast cleric spells.</Pair>
</Ability>
<Ability id="arc-cleric-ecclesitheurge-blessing-of-the-faithful-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-cleric-ecclesitheurge-blessing-of-the-faithful-su">Blessing of the Faithful (Su)</Pair>
<Pair title="Standard Action">The ecclesitheurge can bless one ally within close range (25 ft. + 5 ft./2 levels). A blessed ally gains a +2 sacred or profane bonus (depending on whether the ecclesitheurge channels positive or negative energy) on attack rolls, skill checks, ability checks, or saving throws or to AC until the ecclesitheurge's next turn. The ecclesitheurge can expend 1 use of <em>channel energy</em> when activating this ability to increase the duration to a number of rounds equal to the number of dice of his channel energy.</Pair>
</Ability>
<Ability id="arc-cleric-ecclesitheurge-domain-mastery" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-cleric-ecclesitheurge-domain-mastery">Domain Mastery</Pair>
<Pair hl title="Alters">The normal domain ability</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>When an ecclesitheurge first chooses his cleric domains, he designates one as his primary domain and the other as his secondary domain. An ecclesitheurge can use his non-domain spell slots to prepare spells from his primary domain's spell list.</p>
<p>Each day when he prepares spells, an ecclesitheurge can select a different domain granted by his deity to gain access to that domain's spell list instead of his secondary domain spell list. He does not lose access to his actual secondary domain's granted powers or gain access to the other domain's granted powers. For example, an ecclesitheurge of <Link to="/faith/sarenrae">Sarenrae</Link> with <Link to="/domain/glory">Glory</Link> as his primary domain and <Link to="/domain/good">Good</Link> as his secondary domain can choose to gain access to the <Link to="/domain/healing">Healing</Link> domain; until the next time he prepares spells, he uses the Healing domain spell list as his secondary domain spell list instead of the Good domain spell list, but still keeps the granted powers of the Good domain and does not gain the granted powers of the Healing domain.</p>
</Pair>
</Ability>
<Ability id="arc-cleric-ecclesitheurge-bonded-holy-symbol-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-ecclesitheurge-bonded-holy-symbol-su">Bonded Holy Symbol (Su)</Pair>
<Pair hl title="Replaces">The increase to channel energy gained at 3rd level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability"><p>An ecclesitheurge forms a powerful bond with a holy symbol of his deity, which functions identically to a <Link to="/class/wizard">wizard's</Link> <em>bonded object</em> except it can be used to cast cleric and domain spells (instead of wizard spells) and the ecclesitheurge can grant his <em>bonded holy symbol</em> only magic abilities appropriate for a holy symbol or a <Link to="/rule/neck_slot">neck slot</Link> item.</p>
<p>As with a wizard's <em>bonded item,</em> an ecclesitheurge can add additional magic abilities to his <em>bonded holy symbol</em> as if he had the required item creation feat (typically <Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>), provided he meets the feat's level prerequisites. For example, an ecclesitheurge with a <em>bonded holy symbol</em> who wants to add a wondrous amulet ability, like <Link to="/magic-wondrous/amulet_of_natural_armor">amulet of natural armor</Link>, to his <em>bonded holy symbol</em> must be at least 3rd level to do so. The magic properties of a <em>bonded holy symbol,</em> including any magic abilities the ecclesitheurge added to the object, function for only the ecclesitheurge. If a <em>bonded holy symbol's</em> owner dies or the item is replaced, the object loses all enhancements the ecclesitheurge added using this ability.</p>
</Pair>
</Ability>
<Ability id="arc-cleric-ecclesitheurge-bonded-object" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-cleric-ecclesitheurge-bonded-object" flavor="Text from the wizard class">Bonded Object</Pair>
<Pair title="Ability"><p>If you select a bonded object, you begin play with one at no cost. These objects are always masterwork quality. If you attempt to cast a spell without your bonded object worn or in hand, you must make a <Link to="/rule/concentration">concentration</Link> check or lose the spell. The DC for this check is equal to 20 + the spell's level.</p>
<p>A bonded object can be used once per day to cast any one spell that you have in your spellbook and are capable of casting, even if the spell is not prepared. This spell is treated like any other spell cast by you, including casting time, duration, and other effects dependent on your level. This spell cannot be modified by metamagic feats or other abilities.</p>
<p>If a bonded object is damaged, it is restored to full hit points the next time you prepare your spells. If the object of an arcane bond is lost or destroyed, it can be replaced after 1 week in a special ritual that costs 200 gp per wizard level plus the cost of the masterwork item. This ritual takes 8 hours to complete. Items replaced in this way do not possess any of the additional enchantments of the previous bonded item. You can designate an existing magic item as your bonded item. This functions in the same way as replacing a lost or destroyed item except that the new magic item retains its abilities while gaining the benefits and drawbacks of becoming a bonded item.</p>
</Pair>
</Ability>
</>};
const _elder_mythos_cultist = {title: "Elder Mythos Cultist", jsx: <><h2 id="arc-cleric-elder_mythos_cultist-elder-mythos-cultist">Elder Mythos Cultist</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 48</Link><br/>Typically grasping, secretive, and thoroughly mad, Elder Mythos cultists open their bodies and minds to horrifying realities not meant for the sane as they strive to prepare the world for the eventual return of their alien masters.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-cleric-elder_mythos_cultist--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Must worship an <Link to="/main/faiths_pantheons">Outer God or Great Old One</Link>.</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-cleric-elder_mythos_cultist-alignment" icon={["info"]}>
<Pair single id="arc-cleric-elder_mythos_cultist-alignment">Alignment</Pair>
<Pair hl title="Alters">Alignment</Pair>
<Pair title="Info">An Elder Mythos cultist must be chaotic evil or chaotic neutral.</Pair>
</Ability>
<Ability id="arc-cleric-elder_mythos_cultist-domain" icon={["info","broken-shield"]}>
<Pair single id="arc-cleric-elder_mythos_cultist-domain">Domain</Pair>
<Pair hl title="Alters">Domains</Pair>
<Pair title="Info">An Elder Mythos cultist receives only a single domain, chosen from the following list: <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/madness">Madness</Link>, or <Link to="/domain/void">Void</Link>. He can choose any subdomain of those domains offered by an Outer God or Great Old One he worships.</Pair>
</Ability>
<Ability id="arc-cleric-elder_mythos_cultist-forbidden-knowledge-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-cleric-elder_mythos_cultist-forbidden-knowledge-ex">Forbidden Knowledge (Ex)</Pair>
<Pair title="Passive Ability">An Elder Mythos cultist gains a +2 profane bonus on all Knowledge (arcana), Knowledge (dungeoneering), Knowledge (history), Knowledge (planes), and Knowledge (religion) checks, and can attempt these checks untrained. This bonus doubles if the check is related to the Elder Mythos.</Pair>
</Ability>
<Ability id="arc-cleric-elder_mythos_cultist-unhinged-mind-ex" icon={["magic-swirl","broken-shield"]}>
<Pair single id="arc-cleric-elder_mythos_cultist-unhinged-mind-ex" flavor="Bartering sanity for unspeakable knowledge, an Elder Mythos cultist props up his crumbling sanity with a darkly enigmatic personality.">Unhinged Mind (Ex)</Pair>
<Pair title="Info">An Elder Mythos cultist uses Charisma instead of Wisdom as his key spellcasting ability score (to determine his spell DCs, <Link to="/rule/bonus_spells">bonus spells</Link> per day, bonus on concentration checks, and so on), to determine the effects and umber of uses of his domain powers, and to modify his Will saving throws.</Pair>
<Pair title="Passive Ability">Because of the fragile state of his mind, the Elder Mythos cultist takes a -2 penalty on Will saves to resist mind-affecting effects. An Elder Mythos cultist automatically fails any save to resist the effects of <Link to="/spell/confusion">confusion</Link>, <Link to="/spell/insanity">insanity</Link>, and <Link to="/spell/nightmare">nightmare</Link>, and other similar effects so long as the effect's caster level is higher than his character level.</Pair>
</Ability>
<Ability id="arc-cleric-elder_mythos_cultist-channel-the-void-su" icon={["aura"]}>
<Pair single id="arc-cleric-elder_mythos_cultist-channel-the-void-su">Channel the Void (Su)</Pair>
<Pair hl title="Replaces">Spontaneous casting</Pair>
<Pair hl title="Alters">Channel energy</Pair>
<Pair title="Ability">When an Elder Mythos cultist channels energy, he taps into the unthinkable void between the stars. This is similar to channeling negative energy, but instead of healing undead, this blast of energy harms and devours living beings, corporeal non-skeletal undead, and constructs crafted from flesh (such as <Link to="/monster/flesh_golem">flesh golems</Link>). This is not negative energy damage; instead, the damage manifests in the form of wounds from supernatural deterioration and rot.</Pair>
<Pair title="Info">A creature that would take damage from this energy can attempt a Fortitude save to halve the damage, rather than a Will save.</Pair>
<Pair title="At 8th Level">A creature that both fails the Fortitude save and would be killed or destroyed by this effect is entirely disintegrated, leaving behind only a trace of fine dust. A disintegrated creature's equipment is unaffected.</Pair>
<Pair title="Special">This ability still counts as channel energy, but it counts as neither positive nor negative energy specifically (for example, the Elder Mythos cultist couldn't take the <Link to="/feat/turn_undead">Turn Undead</Link> or <Link to="/feat/command_undead">Command Undead</Link> feat). For the purposes of feats that require channel energy but refer to what happens if the character channels positive or negative energy, this ability alters the listed effect for negative energy. For instance, an Elder Mythos cultist could use <Link to="/feat/channel_smite">Channel Smite</Link> to damage living or fleshy creatures with his melee attack.</Pair>
</Ability>
<Ability id="arc-cleric-elder_mythos_cultist-maddening-gaze-su" icon={["smoking-finger"]}>
<Pair single id="arc-cleric-elder_mythos_cultist-maddening-gaze-su">Maddening Gaze (Su)</Pair>
<Pair hl title="Replaces">Increases to channel energy gained at 5th, 11th, and 19th levels</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 time/day + 1 per three cleric levels beyond 5th<ByLevelPop levels={[[5,1],[8,2],[11,3],[14,4],[17,5],[20,6]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">An Elder Mythos cultist can focus his gaze on a single living creature within 30 feet and inundate the creature's mind with visions of alien horror. The target takes 2 points of <Link to="/rule/wisdom_damage">Wisdom damage</Link> and becomes <Link to="/misc/confused">confused</Link> and <Link to="/misc/sickened">sickened</Link> for 1d4 rounds. A successful Will save (DC = 10 + <Link to="/misc/half">half</Link> the Elder Mythos cultist's cleric level + his Charisma modifier) negates the Wisdom damage and the confusion effect, though the target is sickened for 1 round. This gaze attack is a mind-affecting effect.</Pair>
<Pair title="At 11th Level">The target takes 1d6+1 points of Wisdom damage and is confused and sickened for 2d4 rounds. A successful Will save reduces the Wisdom damage to 1 point, and the target is instead sickened for 1d6 rounds.</Pair>
<Pair title="At 19th Level">The target takes 2d6 points of Wisdom damage and is rendered permanently confused and sickened. Only <Link to="/spell/greater_restoration">greater restoration</Link>, <Link to="/spell/heal">heal</Link>, <Link to="/spell/limited_wish">limited wish</Link>, <Link to="/spell/miracle">miracle</Link>, or <Link to="/spell/wish">wish</Link> can remove the confused and sickened conditions. A successful Will save halves the Wisdom damage, and the target is instead sickened for 2d6 rounds.</Pair>
</Ability>
</>};
const _evangelist = {title: "Evangelist", jsx: <><h2 id="arc-cleric-evangelist-evangelist">Evangelist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 40</Link><br/>The evangelist is the voice of her religion in the world. Where others nurture the faith among believers, an evangelist proclaims the coming glory of her deific patron and issues the clarion call to all around to heed the truth, or obey the call to war and crusade against the enemies of the church.</p>
<Ability id="arc-cleric-evangelist-single-minded" icon={["broken-shield"]}>
<Pair single id="arc-cleric-evangelist-single-minded">Single-Minded</Pair>
<Pair title="Info">An evangelist focuses her skills and learning on proclamation rather than the fine details of the church's deeper mysteries or martial training. Thus, she may select only one domain and does not gain Medium Armor Proficiency or Shield Proficiency.</Pair>
</Ability>
<Ability id="arc-cleric-evangelist-public-speaker" icon={["skills","upgrade"]}>
<Pair single id="arc-cleric-evangelist-public-speaker">Public Speaker</Pair>
<Pair title="Passive Ability">An evangelist gains <Link to="/skill/perform">Perform</Link> (CHA) as a class skill. In addition, she is trained to project her voice with great skill and effect; the DC to hear her speak in difficult conditions is reduced by an amount equal to her class level plus her Charisma modifier (minimum 0).</Pair>
</Ability>
<Ability id="arc-cleric-evangelist-sermonic-performance" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-evangelist-sermonic-performance">Sermonic Performance</Pair>
<Pair hl title="Replaces">The 1st-, 9th-, and 15th-level channel energy abilities</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An evangelist gains the ability to deliver a select number of supernatural and spell-like performances through the force and power of her divinely inspired preaching and exhortation. This ability is similar in all respects to <Link to="/ability/bardic_performance">bardic performance</Link> as used by a bard of the same level (including interactions with feats, spells, and prestige classes), using Perform (oratory) as the evangelist's performance skill. However, an evangelist gains only the following types of bardic performance: <Link to="/performance/countersong">countersong</Link>, <Link to="/performance/fascinate">fascinate</Link>, and <Link to="/performance/inspire_courage">inspire courage</Link>.</Pair>
<Pair title="At 9th Level">The evangelist learns the <Link to="/performance/inspire_greatness">inspire greatness</Link> performance.</Pair>
<Pair title="At 15th Level">The evangelist learns the <Link to="/performance/inspire_heroics">inspire heroics</Link> performance.</Pair>
<Pair title="Special">Due to what this replaces, the cleric does not get <em>channel energy</em> until 3rd level, and her damage maxes out at 7d6 points at 19th level.</Pair>
</Ability>
<Ability id="arc-cleric-evangelist-spontaneous-casting" icon={["magic-swirl"]}>
<Pair single id="arc-cleric-evangelist-spontaneous-casting">Spontaneous Casting</Pair>
<Pair hl title="Alters">Spontaneous casting</Pair>
<Pair title="Info">An evangelist does not gain the ability to spontaneously cast <em>cure</em> or <em>inflict</em> spells by sacrificing prepared spells. However, an evangelist can spontaneously cast the following spells by sacrificing a prepared spell of the noted level or above.</Pair>
<Pair plain title="1st"><Link to="/spell/command">Command</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/enthrall">Enthrall</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/tongues">Tongues</Link></Pair>
<Pair plain title="4th"><Link to="/spell/suggestion">Suggestion</Link></Pair>
<Pair plain title="5th"><Link to="/spell/greater_command">Greater command</Link></Pair>
<Pair plain title="6th"><Link to="/spell/geas_quest">Geas/quest</Link></Pair>
<Pair plain title="7th"><Link to="/spell/mass_suggestion">Mass suggestion</Link></Pair>
<Pair plain title="8th"><Link to="/spell/sympathy">Sympathy</Link></Pair>
<Pair plain title="9th"><Link to="/spell/demand">Demand</Link></Pair>
</Ability>
</>};
const _fiendish_vessel = {title: "Fiendish Vessel", jsx: <><h2 id="arc-cleric-fiendish_vessel-fiendish-vessel">Fiendish Vessel</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 170</Link><br/>Many clerics pray to or make evil bargains with fiendish powers, devoting body and soul to the insane plans and wicked aims of their despicable patrons. But these mortal clerics are often just shallow beings searching for quick power or the caress of true and final oblivion - few truly grasp the full scope of the entities they worship. Fiendish vessels, through their fiendish heritage, share an innate connection with their patron, and that connection grants them understanding and power. A fiendish vessel has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-cleric-fiendish_vessel--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><ul><li><Link to="/race/tiefling">Tiefling</Link></li><li>Alignment must match patron's</li></ul></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-cleric-fiendish_vessel-domains" icon={["info"]}>
<Pair single id="arc-cleric-fiendish_vessel-domains">Domains</Pair>
<Pair title="Usage">3 + Cha modifier times/day</Pair>
<Pair title="Info">A fiendish vessel must select the <Link to="/domain/daemon">Daemon</Link>, <Link to="/domain/demon">Demon</Link>, or <Link to="/domain/devil">Devil</Link> subdomain as one of her domain choices, based on the fiendish patron she chooses to serve.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
</Ability>
<Ability id="arc-cleric-fiendish_vessel-channel-evil-su" icon={["aura"]}>
<Pair single id="arc-cleric-fiendish_vessel-channel-evil-su">Channel Evil (Su)</Pair>
<Pair hl title="Replaces">Channel energy</Pair>
<Pair title="Standard Action"><p>A fiendish vessel, rather than channeling positive or negative energy, instead channels the pure evil power of her fiendish patron. This ability is similar to channeling negative energy, but instead of healing undead and dealing damage to living creatures, this blast of evil energy automatically heals evil creatures and debilitates good creatures within its burst.</p>
<p>Channeling this evil causes a <Link to="/misc/burst">burst</Link> that affects all creatures in a 30-foot radius centered on the fiendish vessel. In the case of evil creatures, the amount of damage healed is equal to 1d4 points of damage and increases by 1d4 at every two levels beyond 1st (to a maximum of 10d4 at 19th level). Good creatures in the burst receive a Will saving throw to negate this damage. Good creatures that fail their saving throws are <Link to="/misc/sickened">sickened</Link> for 1d4 rounds. Good creatures with a number of Hit Dice less than or equal to the fiendish vessel's class level - 5 that fail their saving throws are <Link to="/misc/nauseated">nauseated</Link> for 1 round and then sickened for 1d4 rounds instead. The DC of this save is equal to 10 + <Link to="/misc/half">half</Link> the fiendish vessel's level + the fiendish vessel's Charisma bonus. Neutral creatures are unaffected by this burst of evil energy.</p>
<p>A fiendish vessel can choose whether or not to include herself in this effect. A fiendish vessel must present her unholy symbol or use her familiar as the divine focus for this ability.</p>
</Pair>
<Pair title="Special">For the purposes of feats that affect channel energy, this ability counts as channeling negative energy. If the feat changes the way the fiendish vessel channels or deals damage with her channeling, use the amount of damage this ability heals evil creatures to determine the damage-dealing potential of the affected ability. For instance, if a 5th-level fiendish vessel takes the <Link to="/feat/channel_smite">Channel Smite</Link> feat, her channeling deals an additional 3d4 points of damage to living creatures on a successful hit (though they may save to negate the damage).</Pair>
</Ability>
<Ability id="arc-cleric-fiendish_vessel-fiendish-familiar" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-fiendish_vessel-fiendish-familiar">Fiendish Familiar</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability"><p>A fiendish vessel's patron rewards her with a fiendish servant. The fiendish vessel gains an <Link to="/monster/imp">imp</Link>, <Link to="/monster/quasit">quasit</Link>, or <Link to="/monster/cacodaemon">cacodaemon</Link> <Link to="/ability/familiar">familiar</Link> based on the patron she worships. This ability is identical to the <Link to="/class/wizard">wizard's</Link> arcane bond with a familiar and the <Link to="/feat/improved_familiar">Improved Familiar</Link> feat, using the fiendish vessel's character level in place of the wizard level.</p>
<p>This tiny fiend acts like a perverse, manifest moral compass. Furthermore, this familiar can act as a living divine focus and unholy symbol for her spellcasting if the fiendish vessel so desires, which means that when she uses her <em>channel evil</em> ability, its burst can be centered on the familiar instead, as long as that familiar is within 30 feet and line of sight. A fiendish vessel's familiar tends to be fawning and subservient to the fiendish vessel. Should her familiar die, the fiendish vessel's patron replaces the familiar with an identical one within 1 week, without the need for a special ritual. Furthermore, the fiendish familiar gains the following special abilities beyond the standard familiar special abilities.</p>
</Pair>
</Ability>
<Ability id="arc-cleric-fiendish_vessel-fiendish-augury-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-cleric-fiendish_vessel-fiendish-augury-sp">Fiendish Augury (Sp)</Pair>
<Pair title="At 3rd Level">The fiendish vessel can ask the familiar whether a particular course of action will bring good or bad results for her in the immediate future. This ability acts like the <Link to="/spell/augury">augury</Link> spell, with a caster level equal to the fiendish vessel's level, with the familiar acting as the mouthpiece for the spell.</Pair>
<Pair title="Usage">Once a day</Pair>
</Ability>
<Ability id="arc-cleric-fiendish_vessel-fiendish-divination-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-cleric-fiendish_vessel-fiendish-divination-sp">Fiendish Divination (Sp)</Pair>
<Pair title="At 9th Level">The fiendish vessel can use a more powerful form of divination to gain intelligence from her patron through her fiendish familiar. This ability acts like the <Link to="/spell/divination">divination</Link> spell, with a caster level equal to the fiendish vessel's level; the familiar acts as the mouthpiece for the spell.</Pair>
<Pair title="Usage">Once a day</Pair>
</Ability>
<Ability id="arc-cleric-fiendish_vessel-extra-divination-sp" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-cleric-fiendish_vessel-extra-divination-sp">Extra Divination (Sp)</Pair>
<Pair title="At 13th Level">The fiendish vessel can gain intelligence from her patron more often each day. She can use <em>fiendish divination</em> up to 3 times per day.</Pair>
</Ability>
<Ability id="arc-cleric-fiendish_vessel-fiendish-summoning" icon={["broken-shield"]}>
<Pair single id="arc-cleric-fiendish_vessel-fiendish-summoning">Fiendish Summoning</Pair>
<Pair title="Passive Ability">When casting <em>summon monster</em> spells, a fiendish vessel is limited to summoning <Link to="/template/fiendish">fiendish</Link> creatures and evil outsiders of the same alignment as her patron.</Pair>
</Ability>
</>};
const _forgemaster = {title: "Forgemaster", jsx: <><h2 id="arc-cleric-forgemaster-forgemaster">Forgemaster</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 15</Link><br/>Forgemasters are priestly dwarves who are ritual casters and expert enchanters, able to produce their rune-graven armaments with astonishing speed.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-cleric-forgemaster--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><ul><li><Link to="/race/dwarf">Dwarf</Link></li><li>Worships a deity that grants the <Link to="/domain/artifice">Artifice</Link> domain</li></ul></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-cleric-forgemaster-artificer" icon={["broken-shield"]}>
<Pair single id="arc-cleric-forgemaster-artificer">Artificer</Pair>
<Pair title="Info">A forgemaster gains only one domain, which must be the Artifice domain (not including subdomains).</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-steel-spells" icon={["spell-book"]}>
<Pair single id="arc-cleric-forgemaster-steel-spells">Steel Spells</Pair>
<Pair title="Info">A forgemaster adds the following spells to her spell list at the listed spell level.</Pair>
<Pair plain title="1st"><Link to="/spell/crafters_curse">Crafter's curse</Link>, <Link to="/spell/crafters_fortune">crafter's fortune</Link>, <Link to="/spell/lead_blades">lead blades</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/chill_metal">Chill metal</Link>, <Link to="/spell/heat_metal">heat metal</Link>, <Link to="/spell/shatter">shatter</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/keen_edge">Keen edge</Link>, <Link to="/spell/versatile_weapon">versatile weapon</Link></Pair>
<Pair plain title="8th"><Link to="/spell/iron_body">Iron body</Link>, <Link to="/spell/repel_metal_or_stone">repel metal or stone</Link></Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-divine-smith-su" icon={["upgrade"]}>
<Pair single id="arc-cleric-forgemaster-divine-smith-su">Divine Smith (Su)</Pair>
<Pair title="Passive Ability">Whenever a forgemaster casts a spell that targets a weapon, shield, or armor, the spell takes effect at +1 caster level. If the spell has one or more metamagic feats applied, she reduces the total level adjustment to the spell by 1 (minimum 0).</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-runeforger-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-forgemaster-runeforger-su">Runeforger (Su)</Pair>
<Pair hl title="Replaces">Channel energy</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Full-Round Action">A forgemaster may inscribe mystical runes upon a suit of armor, shield, or weapon. These runes last 1 round per cleric level, but inscribing the same rune twice on an item increases this duration to 1 minute per level, three times to 10 minutes per level, and four times to 1 hour per level.</Pair>
<Pair title="Special"><Link to="/spell/erase">Erase</Link> affects runes as magical writing. A forgemaster learns <em>forgemaster's blessing</em> at 1st level and may learn one additional rune at 2nd level and every 2 levels thereafter. Only one type of rune marked with an asterisk (&#42;) may be placed on an item at any given time.</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-ancient-splendor" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-cleric-forgemaster-ancient-splendor">Ancient Splendor</Pair>
<Pair title="Passive Ability">The inscribed weapon, armor, or shield grants a +2 circumstance bonus on Diplomacy and Intimidate checks (+4 when interacting with dwarves).</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-bloodthirst42" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-cleric-forgemaster-bloodthirst42">Bloodthirst&#42;</Pair>
<Pair title="Prerequisites">4th-level cleric</Pair>
<Pair title="Passive Ability">The inscribed piercing or slashing weapon functions as if it had the <Link to="/magic-enh/wounding">wounding</Link> special ability, even if nonmagical.</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-deathstrike" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-cleric-forgemaster-deathstrike">Deathstrike</Pair>
<Pair title="Prerequisites">4th-level cleric</Pair>
<Pair title="Passive Ability">The inscribed weapon stores a <Link to="/spell/death_knell">death knell</Link> spell that triggers immediately if a blow from the weapon reduces a target to negative hit points. This expends all deathstrike runes on the weapon.</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-durability" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-cleric-forgemaster-durability">Durability</Pair>
<Pair title="Passive Ability">The inscribed item's hardness increases by an amount equal to the forgemaster's Wisdom modifier, and its hit points increase by an amount equal to twice her level.</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-featherlight" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-cleric-forgemaster-featherlight">Featherlight</Pair>
<Pair title="Passive Ability">The inscribed item's weight is halved; a metal item's weight is reduced to 1/4 normal. If inscribed on a suit of armor, its armor check penalty for Acrobatics and Climb checks is halved.</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-forgemasters-blessing" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-cleric-forgemaster-forgemasters-blessing">Forgemaster's Blessing</Pair>
<Pair title="Passive Ability">The inscribed nonmagical item functions as a masterwork item.</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-ghostglyph42" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-cleric-forgemaster-ghostglyph42">Ghostglyph&#42;</Pair>
<Pair title="Prerequisites">4th-level cleric</Pair>
<Pair title="Passive Ability">The inscribed weapon, shield, or armor gains the ghost touch (<Link to="/magic-enh/ghost_touch_armor">armor</Link> or <Link to="/magic-enh/ghost_touch_weapon">weapon</Link>) special ability.</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-glowglyph" extraClasses="subAbility" icon={["stairs-goal","aura"]}>
<Pair single id="arc-cleric-forgemaster-glowglyph">Glowglyph</Pair>
<Pair title="Passive Ability">The inscribed item sheds light as a <Link to="/eq-misc/torch">torch</Link>.</Pair>
<Pair title="Standard Action">The bearer can command the rune to erupt in a burst of light as a shield with the <Link to="/magic-enh/blinding">blinding</Link> special ability with a <Link to="/misc/burst">burst</Link> radius of 5 feet per glowglyph rune inscribed on the item. This expends all glowglyph runes on the item.</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-invulnerability42" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-cleric-forgemaster-invulnerability42">Invulnerability&#42;</Pair>
<Pair title="Prerequisites">8th-level cleric</Pair>
<Pair title="Passive Ability">The inscribed armor grants its wearer DR/magic equal to <Link to="/misc/half">half</Link> her cleric level.</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-powerstrike42" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-cleric-forgemaster-powerstrike42">Powerstrike&#42;</Pair>
<Pair title="Prerequisites">6th-level cleric</Pair>
<Pair title="Passive Ability">The inscribed weapon's critical threat range doubles. This does not stack with <em>keen edge,</em> <Link to="/feat/improved_critical">Improved Critical</Link>, or similar effects.</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-return42" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-cleric-forgemaster-return42">Return&#42;</Pair>
<Pair title="Prerequisites">4th-level cleric</Pair>
<Pair title="Passive Ability">The inscribed weapon gains the <Link to="/magic-enh/returning">returning</Link> weapon special ability.</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-spellguard" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-cleric-forgemaster-spellguard">Spellguard</Pair>
<Pair title="Passive Ability">The inscribed item gains spell resistance equal to 11 + her cleric level. This applies only to effects targeting the item itself.</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-spellglyph42" extraClasses="subAbility" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="arc-cleric-forgemaster-spellglyph42">Spellglyph&#42;</Pair>
<Pair title="Prerequisites">4th-level cleric</Pair>
<Pair title="Passive Ability">The inscribed weapon gains the <Link to="/magic-enh/spell_storing">spell storing</Link> special ability.</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-thief-curse" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-cleric-forgemaster-thief-curse">Thief-Curse</Pair>
<Pair title="Prerequisites">6th-level cleric</Pair>
<Pair title="Passive Ability">The forgemaster designates one creature as the rightful owner of an item. Any other creature that intentionally grasps the item is cursed (as <Link to="/spell/bestow_curse">bestow curse</Link>) for the duration of the rune.</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-tracer" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-cleric-forgemaster-tracer">Tracer</Pair>
<Pair title="Standard Action">For as long as the rune lasts, the cleric may sense its location at will, as if using <Link to="/spell/locate_object">locate object</Link>.</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-craft-magic-arms-and-armor" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-forgemaster-craft-magic-arms-and-armor">Craft Magic Arms and Armor</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The forgemaster <Link to="/feat/craft_magic_arms_and_armor">gains this</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-cleric-forgemaster-master-smith-ex" icon={["upgrade"]}>
<Pair single id="arc-cleric-forgemaster-master-smith-ex">Master Smith (Ex)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A forgemaster can craft mundane metal items quickly, using half their gp value to determine progress, and can craft magical metal items in half the normal amount of time.</Pair>
</Ability>
</>};
const _foundation_of_faith = {title: "Foundation of Faith", jsx: <><h2 id="arc-cleric-foundation_of_faith-foundation-of-faith">Foundation of Faith</h2>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 8</Link><br/>Whether aiding the faithful or defending against the depredations of unbelievers, a foundation of faith is unshakable in her convictions. These clerics are most common among worshipers of deities of earth or protection, such as <Link to="/faith/abadar">Abadar</Link> or <Link to="/faith/torag">Torag</Link>, but any religion might count foundations of faith among its priests.</p>
<Ability id="arc-cleric-foundation_of_faith-channel-energy" icon={["broken-shield"]}>
<Pair single id="arc-cleric-foundation_of_faith-channel-energy">Channel Energy</Pair>
<Pair title="Info">A foundation of faith does not gain the <em>channel energy</em> ability.</Pair>
</Ability>
<Ability id="arc-cleric-foundation_of_faith-bastion-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-cleric-foundation_of_faith-bastion-ex" flavor="A foundation of faith is an unbreakable obstacle, unmoved by threats and violence alike.">Bastion (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">The foundation of faith adds her Constitution bonus to her CMD and to the DC of attempts to use the Intimidate skill against her.</Pair>
</Ability>
<Ability id="arc-cleric-foundation_of_faith-granite-focus-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-cleric-foundation_of_faith-granite-focus-ex" flavor="A foundation of faith's focus is truly impressive.">Granite Focus (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Move-Equivalent Action">The foundation of faith centers herself, allowing her to add her Constitution modifier to any <Link to="/rule/concentration">concentration</Link> checks attempted as part of casting cleric spells until the end of her turn.</Pair>
</Ability>
<Ability id="arc-cleric-foundation_of_faith-rooted-vitality-su" icon={["remedy"]}>
<Pair single id="arc-cleric-foundation_of_faith-rooted-vitality-su" flavor="A foundation of faith draws healing from the earth.">Rooted Vitality (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 time/day per five cleric levels<ByLevelPop levels={[[5,1],[10,2],[15,3],[20,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action">While standing on natural or worked stone, the foundation of faith can gain <Link to="/umr/fast_healing">fast healing</Link> 1. This effect lasts for a number of rounds equal to the foundation of faith's Constitution modifier or until the foundation of faith loses contact with the natural or worked stone.</Pair>
<Pair title="Standard Action">Instead of gaining this fast healing herself, a foundation of faith can expend a use of this ability to instead touch up to six other creatures to grant each creature <Link to="/misc/half">half</Link> of the fast healing that the foundation of faith would receive (minimum fast healing 1). A recipient must be standing on natural or worked stone to receive this fast healing, and the fast healing lasts for a number of rounds equal to the foundation of faith's Constitution modifier or until the recipient leaves contact with natural or worked stone. If one recipient loses this fast healing early, it does not affect the duration for the other targets.</Pair>
<Pair title="At 7th Level">This ability increases to fast healing 2.</Pair>
<Pair title="At 9th Level">This becomes fast healing 3.</Pair>
<Pair title="At 11th Level">This becomes fast healing 4.</Pair>
<Pair title="At 13th Level">This becomes fast healing 5.</Pair>
<Pair title="At 15th Level">This becomes fast healing 6.</Pair>
<Pair title="At 17th Level">This becomes fast healing 7.</Pair>
<Pair title="At 19th Level">This becomes fast healing 8.</Pair>
</Ability>
</>};
const _herald_caller = {title: "Herald Caller", jsx: <><h2 id="arc-cleric-herald_caller-herald-caller">Herald Caller</h2>
<p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook pg. 7</Link><br/>Unlike warpriests or paladins, who charge headlong into battle in the name of their patron deities, herald callers are adept at calling powerful outsiders to aid their brethren in battle.</p>
<Ability id="arc-cleric-herald_caller-skill-ranks-per-level" icon={["skills"]}>
<Pair single id="arc-cleric-herald_caller-skill-ranks-per-level">Skill Ranks per Level</Pair>
<Pair hl title="Alters">Class skills</Pair>
<Pair title="Info">4 + Int modifier.</Pair>
</Ability>
<Ability id="arc-cleric-herald_caller-dedicated-summoner" icon={["broken-shield"]}>
<Pair single id="arc-cleric-herald_caller-dedicated-summoner">Dedicated Summoner</Pair>
<Pair hl title="Alters">Domains, armor proficiencies</Pair>
<Pair title="Info">A herald caller depends on summoned allies to overcome her foes, which affords her little experience with the martial pursuits typical of other clerics and a narrower spiritual focus. A herald caller can choose only one domain from her deity's list of domains, rather than the normal two domains, and she doesn't gain proficiency with medium armor or shields.</Pair>
</Ability>
<Ability id="arc-cleric-herald_caller-call-heralds-su" icon={["stairs-goal","magic-swirl","armor-upgrade"]}>
<Pair single id="arc-cleric-herald_caller-call-heralds-su" flavor="A herald caller can channel stored spell energy into summoning spells that she hasn't prepared ahead of time.">Call Heralds (Su)</Pair>
<Pair title="Ability">She can lose a prepared spell in order to cast any <Link to="/spell/summon_monster">summon monster</Link> spell of the same level or lower. She gains a bonus on <Link to="/rule/concentration">concentration</Link> checks to cast a <em>summon monster</em> spell defensively. This bonus is equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> her cleric level.</Pair>
</Ability>
<Ability id="arc-cleric-herald_caller-divine-heralds-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-cleric-herald_caller-divine-heralds-su">Divine Heralds (Su)</Pair>
<Pair title="Ability"><p>A herald caller can use <em>summon monster</em> spells only to summon creatures particularly appropriate to her deity. This includes all creatures listed as <em>summon monster</em> options for priests of her deity, creatures whose alignment matches at least one aspect of her deity's alignment, and creatures of an elemental subtype that matches a domain granted by the deity (if any). When summoning a creature that is normally summoned with the <Link to="/template/celestial">celestial</Link> or <Link to="/template/fiendish">fiendish</Link> template, a herald caller of a chaotic deity can instead summon it with the <Link to="/template/entropic">entropic</Link> template, and a herald caller of a lawful deity can instead summon it with the <Link to="/template/resolute">resolute</Link> template.</p>
<p>Because of these summoned monsters' strong ties to the herald caller's deity, the herald caller also gains specific benefits with creatures she summons with <em>summon monster</em> spells gained from her cleric spell list. The herald caller and her summoned monsters can understand each other's spoken words as if they shared a common language (though this doesn't give summoned monsters the ability to speak if they normally lack it). Whenever the herald caller uses <em>channel energy</em> to heal, she can include all of her summoned monsters, even if they are out of her normal <em>channel energy</em> radius or of a creature type that would not normally be affected. If she <em>channels energy</em> to deal damage, she can exclude any of her summoned monsters that would normally be affected.</p>
</Pair>
</Ability>
<Ability id="arc-cleric-herald_caller-mighty-heralds" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-herald_caller-mighty-heralds">Mighty Heralds</Pair>
<Pair title="At 4th Level">A herald caller receives <Link to="/feat/augment_summoning">Augment Summoning</Link> as a bonus feat, and is considered to have <Link to="/feat/spell_focus">Spell Focus</Link> (conjuration) for the purposes of prerequisites for feats that have Augment Summoning as a prerequisite (such as <Link to="/feat/evolved_summoned_monster">Evolved Summoned Monster</Link>).</Pair>
<Pair title="At 8th Level">She gains <Link to="/feat/superior_summoning">Superior Summoning</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _hidden_priest = {title: "Hidden Priest", jsx: <><h2 id="arc-cleric-hidden_priest-hidden-priest">Hidden Priest</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 35</Link><br/>Practicing one's religion is not always legal. For example, most lands outlaw worshiping fiends. Taldor has banned the faith of <Link to="/faith/sarenrae">Sarenrae</Link> from being openly worshiped. Rahadoum flat-out forbids all religions within its borders. But as time has shown again and again, mere laws are poor deterrents to the worship of dedicated members of such faiths, whether the zealous wish to subvert authority, free the spirits of the oppressed, or merely enjoy the right to practice their beliefs. Clerics in these circumstances must conceal their true natures, practice their magic in secret, and always be on guard for betrayal and discovery. A hidden priest has the following class features.</p>
<Ability id="arc-cleric-hidden_priest-false-arcanist-ex" icon={["upgrade"]}>
<Pair single id="arc-cleric-hidden_priest-false-arcanist-ex">False Arcanist (Ex)</Pair>
<Pair hl title="Replaces">One of the cleric's two 1st-level domain powers (her choice)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>A hidden priest is able to disguise his cleric spellcasting, presenting it as arcane magic of some kind. Typically, this is as alchemist, bard, sorcerer, or wizard magic, and the cleric disguises the words and gestures of the cleric spell with accoutrements appropriate to his apparent profession. He must make a skill check (DC 10 + twice the level of the spell) to disguise his casting and successfully cast the spell. The type of skill check depends on the type of caster he pretends to be: Craft (alchemy) for alchemist, Perform for bard, Knowledge (arcana) for sorcerer or wizard. Using Spellcraft to identify the spell works normally, though unless the observer beats the DC by 10 or more, she doesn't suspect the source of the magic is divine.</p>
<p>For example, a hidden priest pretending to be an alchemist wants to cast <Link to="/spell/cure_light_wounds">cure light wounds</Link> on a wounded townsperson. If he makes a DC 12 Craft (alchemy) check, he disguises his spellcasting as the mixing of an alchemical extract or potion (perhaps with the words disguised as reciting an obscure formula or talking herself through the list of ingredients), which he gives to the target. An observer making a DC 16 Spellcraft check can identify his spell as <em>cure light wounds,</em> but doesn't realize his "alchemical" methods are a sham unless her check result is 26 or higher.</p>
<p>When the hidden priest uses this ability, he must still provide any divine focus components for the spells he casts. However, the divine focus doesn't need to be an obvious symbol of his faith. It could be a small coin, tattoo, or garment bearing the symbol, whether presented openly, disguised, or hidden within a larger picture. For example, a hidden priest of Sarenrae may use a coin with an ankh or sunburst, a complex tattoo or scar that has an ankh shape hidden within it, a glove with an ankh stitched on the inside of the palm, and so on. He must use this replacement divine focus just as he would his true one (for example, he couldn't leave the coin in his shoe). If a spell requires a divine focus with a specific or minimum cost, the replacement divine focus must be of similar value to be used as the divine focus.</p>
</Pair>
<Pair title="Passive Ability">A hidden priest adds <Link to="/misc/half">half</Link> his class level (minimum +1) on all Bluff skill checks to send secret messages about religious matters, and on all Sense Motive checks to recognize similar messages. He also adds this bonus on Perception and Sense Motive checks relating to agents of the laws against his religion (including city guards in lands where these laws are in effect).</Pair>
</Ability>
<Ability id="arc-cleric-hidden_priest-unseen-devotion-su" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-hidden_priest-unseen-devotion-su">Unseen Devotion (Su)</Pair>
<Pair hl title="Replaces">One of the cleric's two 8th-level domain powers (his choice)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four cleric levels beyond 8th<ByLevelPop levels={[[8,1],[12,2],[16,3],[20,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A hidden priest can apply the <Link to="/feat/silent_spell">Silent Spell</Link> and <Link to="/feat/still_spell">Still Spell</Link> feats to a spell he is about to cast. This does not alter the level of the spell or the casting time.</Pair>
<Pair title="Special">Even though this ability does not modify the spell's actual level, he cannot use this ability to cast a spell whose modified spell level would be above the level of the highest-level spell that he is capable of casting. This ability always applies both feats (the cleric cannot use it to just apply one or the other).</Pair>
</Ability>
</>};
const _idealist = {title: "Idealist", jsx: <><h2 id="arc-cleric-idealist-idealist">Idealist</h2>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 15</Link><br/>In the Great Beyond, belief is power. Idealist clerics are personifications of this power, each embracing the purest ideal of his deity's realm. In doing so an idealist becomes a powerful conduit, gaining the power to channel the essence of his deity's plane.</p>
<Ability id="arc-cleric-idealist-planar-bond-su" extraClasses="hasSubs" icon={["magic-swirl"]}>
<Pair single id="arc-cleric-idealist-planar-bond-su">Planar Bond (Su)</Pair>
<Pair hl title="Alters">Spontaneous casting</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">An idealist must choose one plane as his planar bond. This plane must be his deity's home plane.</Pair>
<Pair title="Ability">An idealist can spontaneously cast the 1st-, 4th-, and 7th-level spells listed below for his chosen plane (provided he can cast spells of that level), in addition to <em>cure</em> or <em>inflict</em> spells.</Pair>
</Ability>
<Ability id="arc-cleric-idealist-abaddon" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-abaddon">Abaddon</Pair>
<Pair plain title="1st"><Link to="/spell/protection_from_good">Protection from good</Link></Pair>
<Pair plain title="4th"><Link to="/spell/unholy_blight">Unholy blight</Link></Pair>
<Pair plain title="7th"><Link to="/spell/blasphemy">Blasphemy</Link></Pair>
</Ability>
<Ability id="arc-cleric-idealist-abyss" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-abyss">Abyss</Pair>
<Pair plain title="1st"><Link to="/spell/doom">Doom</Link></Pair>
<Pair plain title="4th"><Link to="/spell/unholy_blight">Unholy blight</Link></Pair>
<Pair plain title="7th"><Link to="/spell/blasphemy">Blasphemy</Link></Pair>
</Ability>
<Ability id="arc-cleric-idealist-astral" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-astral">Astral</Pair>
<Pair plain title="1st"><Link to="/spell/summon_monster_i">Summon monster I</Link></Pair>
<Pair plain title="4th"><Link to="/spell/dismissal">Dismissal</Link></Pair>
<Pair plain title="7th"><Link to="/spell/lesser_create_demiplane">Lesser create demiplane</Link></Pair>
</Ability>
<Ability id="arc-cleric-idealist-axis" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-axis">Axis</Pair>
<Pair plain title="1st"><Link to="/spell/protection_from_chaos">Protection from chaos</Link></Pair>
<Pair plain title="4th"><Link to="/spell/orders_wrath">Order's wrath</Link></Pair>
<Pair plain title="7th"><Link to="/spell/dictum">Dictum</Link></Pair>
</Ability>
<Ability id="arc-cleric-idealist-boneyard" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-boneyard">Boneyard</Pair>
<Pair plain title="1st"><Link to="/spell/deathwatch">Deathwatch</Link></Pair>
<Pair plain title="4th"><Link to="/spell/death_ward">Death ward</Link></Pair>
<Pair plain title="7th"><Link to="/spell/arbitrament">Arbitrament</Link></Pair>
</Ability>
<Ability id="arc-cleric-idealist-elysium" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-elysium">Elysium</Pair>
<Pair plain title="1st"><Link to="/spell/remove_fear">Remove fear</Link></Pair>
<Pair plain title="4th"><Link to="/spell/freedom_of_movement">Freedom of movement</Link></Pair>
<Pair plain title="7th"><Link to="/spell/word_of_chaos">Word of chaos</Link></Pair>
</Ability>
<Ability id="arc-cleric-idealist-ethereal" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-ethereal">Ethereal</Pair>
<Pair plain title="1st"><Link to="/spell/obscuring_mist">Obscuring mist</Link></Pair>
<Pair plain title="4th"><Link to="/spell/sending">Sending</Link></Pair>
<Pair plain title="7th"><Link to="/spell/ethereal_jaunt">Ethereal jaunt</Link></Pair>
</Ability>
<Ability id="arc-cleric-idealist-first-world" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-first-world">First World</Pair>
<Pair plain title="1st"><Link to="/spell/entropic_shield">Entropic shield</Link></Pair>
<Pair plain title="4th"><Link to="/spell/giant_vermin">Giant vermin</Link></Pair>
<Pair plain title="7th"><Link to="/spell/regenerate">Regenerate</Link></Pair>
</Ability>
<Ability id="arc-cleric-idealist-heaven" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-heaven">Heaven</Pair>
<Pair plain title="1st"><Link to="/spell/sanctuary">Sanctuary</Link></Pair>
<Pair plain title="4th"><Link to="/spell/discern_lies">Discern lies</Link></Pair>
<Pair plain title="7th"><Link to="/spell/holy_word">Holy word</Link></Pair>
</Ability>
<Ability id="arc-cleric-idealist-hell" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-hell">Hell</Pair>
<Pair plain title="1st"><Link to="/spell/command">Command</Link></Pair>
<Pair plain title="4th"><Link to="/spell/tongues">Tongues</Link></Pair>
<Pair plain title="7th"><Link to="/spell/dictum">Dictum</Link></Pair>
</Ability>
<Ability id="arc-cleric-idealist-maelstrom" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-maelstrom">Maelstrom</Pair>
<Pair plain title="1st"><Link to="/spell/protection_from_law">Protection from law</Link></Pair>
<Pair plain title="4th"><Link to="/spell/chaos_hammer">Chaos hammer</Link></Pair>
<Pair plain title="7th"><Link to="/spell/word_of_chaos">Word of chaos</Link></Pair>
</Ability>
<Ability id="arc-cleric-idealist-nirvana" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-nirvana">Nirvana</Pair>
<Pair plain title="1st"><Link to="/spell/protection_from_evil">Protection from evil</Link></Pair>
<Pair plain title="4th"><Link to="/spell/holy_smite">Holy smite</Link></Pair>
<Pair plain title="7th"><Link to="/spell/holy_word">Holy word</Link></Pair>
</Ability>
<Ability id="arc-cleric-idealist-plane-of-air" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-plane-of-air">Plane of Air</Pair>
<Pair plain title="1st"><Link to="/spell/alter_winds">Alter winds</Link></Pair>
<Pair plain title="4th"><Link to="/spell/air_walk">Air walk</Link></Pair>
<Pair plain title="7th"><Link to="/spell/control_weather">Control weather</Link></Pair>
</Ability>
<Ability id="arc-cleric-idealist-plane-of-earth" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-plane-of-earth">Plane of Earth</Pair>
<Pair plain title="1st"><Link to="/spell/magic_stone">Magic stone</Link></Pair>
<Pair plain title="4th"><Link to="/spell/stoneskin">Stoneskin</Link></Pair>
<Pair plain title="7th"><Link to="/spell/statue">Statue</Link></Pair>
</Ability>
<Ability id="arc-cleric-idealist-plane-of-fire" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-plane-of-fire">Plane of Fire</Pair>
<Pair plain title="1st"><Link to="/spell/produce_flame">Produce flame</Link></Pair>
<Pair plain title="4th"><Link to="/spell/wall_of_fire">Wall of fire</Link></Pair>
<Pair plain title="7th"><Link to="/spell/delayed_blast_fireball">Delayed blast fireball</Link></Pair>
</Ability>
<Ability id="arc-cleric-idealist-plane-of-water" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-plane-of-water">Plane of Water</Pair>
<Pair plain title="1st"><Link to="/spell/hydraulic_push">Hydraulic push</Link></Pair>
<Pair plain title="4th"><Link to="/spell/control_water">Control water</Link></Pair>
<Pair plain title="7th"><Link to="/spell/vortex">Vortex</Link></Pair>
</Ability>
<Ability id="arc-cleric-idealist-shadow-plane" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-shadow-plane">Shadow Plane</Pair>
<Pair plain title="1st"><Link to="/spell/cause_fear">Cause fear</Link></Pair>
<Pair plain title="4th"><Link to="/spell/shadow_conjuration">Shadow conjuration</Link></Pair>
<Pair plain title="7th"><Link to="/spell/destruction">Destruction</Link></Pair>
</Ability>
<Ability id="arc-cleric-idealist-other" extraClasses="subAbility" icon={["spell-book"]}>
<Pair single id="arc-cleric-idealist-other">Other</Pair>
<Pair title="Info">This includes Positive and Negative Energy Planes, Material Plane or a Demiplane.</Pair>
<Pair title="Special">Work with your GM to select three spells that match the themes of the deity you worship.</Pair>
</Ability>
<Ability id="arc-cleric-idealist-invoke-realm-su" icon={["magic-swirl"]}>
<Pair single id="arc-cleric-idealist-invoke-realm-su">Invoke Realm (Su)</Pair>
<Pair hl title="Alters">Channel energy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>When an idealist <em>channels energy,</em> she channels raw essence rather than positive or negative energy, superimposing a portion of her deity's planar realm over her location. This effect extends out to a radius of 10 feet, plus 5 feet for every 2 cleric levels she has beyond 1st, to a maximum radius of 55 feet at 19th level. This effect lasts for 1 round plus 1 round per point of the idealist's Charisma bonus. While this effect is active, the idealist gains a +1 bonus on Diplomacy checks against creatures who worship her deity and a bonus on Intimidate checks against creatures who do not. This bonus is equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> her cleric level.</p>
<p>This channeled energy imposes itself over the current terrain, changing its visual appearance to more thematically suit the energy's associated planar realm, but cannot hide obvious hazards or otherwise allow for a creature to hide any more effectively than the normal terrain would. This is an illusion (glamer) effect with a caster level equal to the idealist's level.</p>
<p>Within the radius of the idealist's channeling, all alignment and magic <Link to="/rule/planar_traits">planar traits</Link> are suppressed and replaced with the traits of the plane that matches the idealist's planar bond. This includes alignment, gravity, and magic traits. In the case of the Astral Plane, since the time trait remains unaltered, your spellcasting only feels fast - you gain a +4 bonus on all <Link to="/rule/concentration">concentration</Link> checks rather than the ability to apply Quickened Spell effects.</p>
</Pair>
<Pair title="Special">This ability is considered <em>channel energy</em> for purposes of feats that grant additional uses of <em>channel energy</em> or allow the cleric to exclude creatures from <em>channel energy's</em> effects.</Pair>
</Ability>
</>};
const _iron_priest = {title: "Iron Priest", jsx: <><h2 id="arc-cleric-iron_priest-iron-priest">Iron Priest</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 12</Link><br/>Iron priests preach of the messengers from beyond the stars, envoys of the divine brought to Golarion in a falling star. Iron priests can affect robots and other unliving constructs with channeled energy, but lack power over the undead. Appropriate deities for an Iron Priest include <Link to="/faith/brigh">Brigh</Link>, <Link to="/faith/nethys">Nethys</Link>, <Link to="/faith/gorum">Gorum</Link>, and <Link to="/faith/haagenti">Haagenti</Link>. An iron priest has the following class features.</p>
<Ability icon={["skills"]} id="arc-cleric-iron_priest-undefined">
<Pair id="arc-cleric-iron_priest-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/disable_device">Disable Device</Link> (DEX), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Knowledge (arcana), Knowledge (nobility), Knowledge (planes), Sense Motive</Pair></Ability>
<Ability id="arc-cleric-iron_priest-channel-energy-su" icon={["magic-swirl"]}>
<Pair single id="arc-cleric-iron_priest-channel-energy-su">Channel Energy (Su)</Pair>
<Pair hl title="Alters">Channel energy</Pair>
<Pair title="Ability">When an iron priest <em>channels energy</em> to heal or harm living creatures, she heals or harms constructs with the clockwork or robot subtypes as well. Constructs without those subtypes are also affected, but gain only half the normal amount of healing or take only half the normal amount of damage, as appropriate. An iron priest cannot harm or heal undead with <em>channel energy.</em></Pair>
</Ability>
<Ability id="arc-cleric-iron_priest-spontaneous-casting" icon={["magic-swirl"]}>
<Pair single id="arc-cleric-iron_priest-spontaneous-casting">Spontaneous Casting</Pair>
<Pair hl title="Alters">Casting</Pair>
<Pair title="Ability">An iron priest can spontaneously cast <Link to="/spell/make_whole">make whole</Link> and <Link to="/spell/greater_make_whole">greater make whole</Link> in place of <em>cure/inflict moderate wounds</em> and <em>cure/inflict critical wounds,</em> regardless of whether she channels positive or negative energy.</Pair>
</Ability>
</>};
const _lawspeaker = {title: "Lawspeaker", jsx: <><h2 id="arc-cleric-lawspeaker-lawspeaker">Lawspeaker</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 11</Link><br/>The Umani priest-judges presided over justice in ancient Yamasa, driven by a zeal for discovering the truth. After the fall of Yamasa and the rise of hostile Koboto tribes in its place, the surviving Umani spread their philosophy of certain and unwavering justice throughout the Inner Sea region.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-cleric-lawspeaker--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Lawful alignment</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-cleric-lawspeaker-divine-judgment" icon={["broken-shield"]}>
<Pair single id="arc-cleric-lawspeaker-divine-judgment">Divine Judgment</Pair>
<Pair hl title="Alters">Domains</Pair>
<Pair title="Info">A lawspeaker must select the <Link to="/domain/law">Law</Link> domain or any subdomain of Law offered by her deity. She does not gain a second domain.</Pair>
</Ability>
<Ability id="arc-cleric-lawspeaker-circumvent-obfuscation-sp" icon={["magic-swirl"]}>
<Pair single id="arc-cleric-lawspeaker-circumvent-obfuscation-sp">Circumvent Obfuscation (Sp)</Pair>
<Pair title="Standard Action">A lawspeaker can expend two uses of <em>channel energy</em> to expose truths and banish falsehoods. The energy manifests as a spell-like ability, and this action does not count as channeling for the purposes of abilities and feats. Unless listed otherwise, the resulting abilities use the lawspeaker's cleric level as her caster level and have the same range and required components as the corresponding spell. The spell-like abilities available are cumulative and are listed below at the level at which the lawspeaker can first access them.</Pair>
<Pair plain title="1st"><Link to="/spell/calm_emotions">Calm emotions</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/zone_of_truth">Zone of truth</Link></Pair>
<Pair plain title="5th"><Link to="/spell/invisibility_purge">Invisibility purge</Link></Pair>
<Pair plain title="7th"><Link to="/spell/discern_lies">Discern lies</Link></Pair>
<Pair plain title="9th"><Link to="/spell/true_seeing">True seeing</Link> (self only)</Pair>
<Pair plain title="11th"><Link to="/spell/greater_dispel_magic">Greater dispel magic</Link> (30-foot <Link to="/misc/burst">burst</Link>; targets only illusion spells, polymorph effects, and spells granting a bonus on Bluff and Disguise checks)</Pair>
<Pair plain title="13th"><Link to="/spell/communal_tongues">Communal tongues</Link></Pair>
<Pair plain title="15th"><Link to="/spell/discern_location">Discern location</Link></Pair>
<Pair plain title="17th"><Link to="/spell/antimagic_field">Antimagic field</Link> (30-foot radius)</Pair>
</Ability>
</>};
const _mendevian_priest = {title: "Mendevian Priest", jsx: <><h2 id="arc-cleric-mendevian_priest-mendevian-priest">Mendevian Priest</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 36</Link><br/>People of high and low character flock to Mendev for glory, plunder, or the desire to slay demons from the Worldwound. Crusade-minded clerics of <Link to="/faith/iomedae">Iomedae</Link>, <Link to="/faith/gorum">Gorum</Link>, and other churches come to Mendev, learn battlefield tactics and the weaknesses of demons, and strike out to make a name for themselves. A Mendevian priest has the following class features.</p>
<Ability id="arc-cleric-mendevian_priest-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-cleric-mendevian_priest-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair title="Info">A Mendevian priest is proficient with all simple weapons, light armor, medium armor, heavy armor, shields (except tower shields), and the favored weapon of her deity.</Pair>
</Ability>
<Ability id="arc-cleric-mendevian_priest-diminished-spellcasting" icon={["broken-shield"]}>
<Pair single id="arc-cleric-mendevian_priest-diminished-spellcasting">Diminished Spellcasting</Pair>
<Pair hl title="Replaces">Domain</Pair>
<Pair title="Info">A Mendevian priest chooses only one domain from her deity's list of domains rather than the normal two domains. In all other respects, this works like and replaces the standard cleric domain ability.</Pair>
</Ability>
<Ability id="arc-cleric-mendevian_priest-demonic-knowledge-ex" icon={["upgrade"]}>
<Pair single id="arc-cleric-mendevian_priest-demonic-knowledge-ex">Demonic Knowledge (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">When making Knowledge (planes) checks regarding demons, demonic cults, and their magic, a Mendevian priest gains a bonus on the check equal to <Link to="/misc/half">half</Link> her class level (minimum +1) and can make these Knowledge skill checks untrained.</Pair>
</Ability>
<Ability id="arc-cleric-mendevian_priest-teamwork-feat" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-mendevian_priest-teamwork-feat">Teamwork Feat</Pair>
<Pair title="At 4th Level">The Mendevian priest gains a bonus feat. This must be a <Link to="/main/teamwork_feat">teamwork feat</Link>, <Link to="/feat/alignment_channel">Alignment Channel</Link>, <Link to="/feat/greater_spell_penetration">Greater Spell Penetration</Link>, <Link to="/feat/leadership">Leadership</Link>, or <Link to="/feat/spell_penetration">Spell Penetration</Link>. The cleric must meet the prerequisites of the selected bonus feat.</Pair>
<Pair title="At 8th Level">The cleric gains another bonus feat, following the same restrictions as above.</Pair>
</Ability>
</>};
const _merciful_healer = {title: "Merciful Healer", jsx: <><h2 id="arc-cleric-merciful_healer-merciful-healer">Merciful Healer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 41</Link><br/>The merciful healer is a master of battlefield revivification, sustaining and restoring allies to keep them in the fight.</p>
<Ability id="arc-cleric-merciful_healer-willing-healer" icon={["broken-shield"]}>
<Pair single id="arc-cleric-merciful_healer-willing-healer">Willing Healer</Pair>
<Pair title="Info">A merciful healer must choose the <Link to="/domain/healing">Healing</Link> domain. She does not gain a second domain. If the cleric worships a deity, that deity must be one that grants the Healing domain.</Pair>
</Ability>
<Ability id="arc-cleric-merciful_healer-channel-energy-su" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-merciful_healer-channel-energy-su">Channel Energy (Su)</Pair>
<Pair hl title="Replaces">Channel energy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">As the cleric ability, save that a merciful healer must channel positive energy, and when she does, she cannot choose to target undead. This ability is otherwise identical to the cleric ability of the same name.</Pair>
</Ability>
<Ability id="arc-cleric-merciful_healer-combat-medic-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-cleric-merciful_healer-combat-medic-ex">Combat Medic (Ex)</Pair>
<Pair title="Passive Ability">A merciful healer does not provoke attacks of opportunity when using the Heal skill to stabilize another creature or casting healing spells.</Pair>
</Ability>
<Ability id="arc-cleric-merciful_healer-merciful-healing-su" icon={["stairs-goal","remedy"]}>
<Pair single id="arc-cleric-merciful_healer-merciful-healing-su">Merciful Healing (Su)</Pair>
<Pair title="At 3rd Level">A merciful healer can channel positive energy to relieve one or more harmful conditions. The merciful healer chooses one of the following harmful conditions: <Link to="/misc/fatigued">fatigued</Link>, <Link to="/misc/shaken">shaken</Link>, or <Link to="/misc/sickened">sickened</Link>. When the merciful healer channels energy she can remove the chosen condition from one living creature that she heals within her channel energy burst.</Pair>
<Pair title="At 6th Level">She can choose another condition. It can be one of those she didn't choose at 3rd level, or one of the following conditions: <Link to="/misc/dazed">dazed</Link>, diseased, or <Link to="/misc/staggered">staggered</Link>. She can remove either selected condition from up to two creatures within her channel energy burst.</Pair>
<Pair title="At 9th Level">She gains another condition, and can choose an above condition or one of the following conditions: cursed, <Link to="/misc/exhausted">exhausted</Link>, <Link to="/misc/frightened">frightened</Link>, <Link to="/misc/nauseated">nauseated</Link>, or poisoned. She can remove that condition, or a condition she previously chose, from one or two creatures within the burst.</Pair>
<Pair title="At 12th Level">She can choose a lower-level condition or one of the following conditions: <Link to="/misc/blinded">blinded</Link>, <Link to="/misc/deafened">deafened</Link>, <Link to="/rule/paralyzed">paralyzed</Link>, or <Link to="/misc/stunned">stunned</Link>. She can remove that condition or one she previously chose from one, two, or three creatures within her channel energy burst.</Pair>
<Pair title="Special">Feats and effects that affect a paladin's <Link to="/ability/mercy">mercy</Link> also affect this ability.</Pair>
</Ability>
<Ability id="arc-cleric-merciful_healer-true-healer-su" icon={["stairs-goal","rolling-dices"]}>
<Pair single id="arc-cleric-merciful_healer-true-healer-su">True Healer (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">When a merciful healer channels holy energy, she can choose to apply the benefits of <em>merciful healing</em> or to reroll any 1s when determining how much damage she heals with the holy energy. She must choose which benefit to take before she rolls to see how much damage she heals.</Pair>
</Ability>
</>};
const _roaming_exorcist = {title: "Roaming Exorcist", jsx: <><h2 id="arc-cleric-roaming_exorcist-roaming-exorcist">Roaming Exorcist</h2>
<p><strong>Sources</strong> <Link to="/source/undead_slayers_handbook">Undead Slayer's Handbook pg. 18</Link><br/>The roaming exorcist travels far and wide to root out possessions, hauntings, and hidden evils. The roaming exorcist extracts unruly spirits from not only victims of possession, but also haunted sites and accursed items.</p>
<Ability id="arc-cleric-roaming_exorcist-skill-ranks-per-level" icon={["skills"]}>
<Pair single id="arc-cleric-roaming_exorcist-skill-ranks-per-level">Skill Ranks per Level</Pair>
<Pair title="Info">4 + Int modifier.</Pair>
</Ability>
<Ability id="arc-cleric-roaming_exorcist-dedicated-wanderer" icon={["broken-shield"]}>
<Pair single id="arc-cleric-roaming_exorcist-dedicated-wanderer" flavor="A roaming exorcist is dedicated to her cause and affords no time to other pursuits typical of clerics.">Dedicated Wanderer</Pair>
<Pair hl title="Alters">Domains, channel energy, armor proficiency</Pair>
<Pair title="Info">A roaming exorcist must choose to channel positive energy. She may choose only one domain from her deity's list of domains, rather than the normal two domains, and she does not gain Medium Armor Proficiency or Shield Proficiency.</Pair>
</Ability>
<Ability id="arc-cleric-roaming_exorcist-unseen-revealed-ex" icon={["upgrade"]}>
<Pair single id="arc-cleric-roaming_exorcist-unseen-revealed-ex">Unseen Revealed (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A roaming exorcist gains a bonus equal to <Link to="/misc/half">half</Link> her cleric level (minimum +1) on Perception checks to detect haunts and incorporeal creatures and on Sense Motive checks to determine whether a creature is possessed, under the effects of an enchantment or curse, or otherwise magically controlled.</Pair>
</Ability>
<Ability id="arc-cleric-roaming_exorcist-spirit-sleuth-ex" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-roaming_exorcist-spirit-sleuth-ex">Spirit Sleuth (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Free Action">Upon interacting with a rejuvenating spirit or haunt for the first time (such as by attacking the spirit or channeling energy to damage the haunt), a roaming exorcist can attempt a Sense Motive check to determine the specific course of action required to permanently neutralize the spirit or haunt (DC = 10 + the undead creature's Hit Dice or the haunt's CR).</Pair>
</Ability>
<Ability id="arc-cleric-roaming_exorcist-curse-seeker-su" icon={["upgrade"]}>
<Pair single id="arc-cleric-roaming_exorcist-curse-seeker-su" flavor="A roaming exorcist can more readily identify cursed items.">Curse Seeker (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">When identifying a magic item, the roaming exorcist needs to exceed the item's DC by only 5 (instead of by 10) in order to determine whether the item is cursed.</Pair>
</Ability>
<Ability id="arc-cleric-roaming_exorcist-dispossession-su" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-roaming_exorcist-dispossession-su">Dispossession (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A roaming exorcist can expend one use of her <em>channel energy</em> ability to force a possessing creature from its host body. The exorcist must make a melee touch attack against the possessed creature; if successful, the roaming exorcist deals damage to the possessing creature as if it were targeted by the roaming exorcist's <em>channel energy</em> ability (regardless of the possessing creature's creature type), and the possession effect ceases as the possessing creature is ejected from the host body. A successful Will save (DC = the roaming exorcist's <em>channel energy</em> DC) halves the damage taken, and the possessing creature resists being ejected from its host.</Pair>
</Ability>
<Ability id="arc-cleric-roaming_exorcist-curse-eater-su" icon={["stairs-goal","upgrade","armor-upgrade"]}>
<Pair single id="arc-cleric-roaming_exorcist-curse-eater-su">Curse Eater (Su)</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A roaming exorcist gains <Link to="/feat/improved_disarm">Improved Disarm</Link> as a bonus feat, regardless of whether she meets the feat's prerequisites.</Pair>
<Pair title="Passive Ability">The roaming exorcist gains a +2 bonus on combat maneuver checks to disarm a creature of a magic item she knows to be cursed.</Pair>
<Pair title="Special">If the roaming exorcist successfully disarms a creature of a cursed item without using a weapon, she may automatically pick up the disarmed cursed item without immediately succumbing to the item's curse. She may wield or hold this cursed item for a number of rounds equal to her Charisma modifier (minimum 1 round) - during which time she may use the item normally, as if it were not cursed - before the item's curse manifests again.</Pair>
</Ability>
</>};
const _sacred_attendant = {title: "Sacred Attendant", jsx: <><h2 id="arc-cleric-sacred_attendant-sacred-attendant">Sacred Attendant</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 4</Link><br/>Sacred attendants bring out the varied beauty in everyone they help, and they typically worship deities of beauty, love, and sex.</p>
<Ability id="arc-cleric-sacred_attendant-channel-beauty-su" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-sacred_attendant-channel-beauty-su">Channel Beauty (Su)</Pair>
<Pair hl title="Alters">Channel energy</Pair>
<Pair title="Ability">Whenever a sacred attendant channels energy to heal, she can opt to reduce the number of dice she rolls by 1 or more. For every die the sacred attendant subtracts, each of the targets of the channeled energy is healed of 1 point of <Link to="/rule/charisma_damage">Charisma damage</Link>.</Pair>
</Ability>
<Ability id="arc-cleric-sacred_attendant-domains" icon={["broken-shield"]}>
<Pair single id="arc-cleric-sacred_attendant-domains">Domains</Pair>
<Pair hl title="Alters">Domains</Pair>
<Pair title="Info">The sacred attendant can choose only one domain from those belonging to her deity.</Pair>
</Ability>
<Ability id="arc-cleric-sacred_attendant-nimble-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-cleric-sacred_attendant-nimble-ex">Nimble (Ex)</Pair>
<Pair hl title="Replaces">Proficiency with light and medium armor</Pair>
<Pair title="At 1st Level">The sacred attendant gains a +1 dodge bonus to AC and CMD when unarmored, unencumbered, and not denied her Dexterity bonus to AC (regardless of whether she has a Dexterity bonus).</Pair>
<Pair title="At 2nd Level">The dodge bonus becomes +2.</Pair>
<Pair title="At 6th Level">The dodge bonus becomes +3.</Pair>
<Pair title="At 10th Level">The dodge bonus becomes +4.</Pair>
<Pair title="At 14th Level">The dodge bonus becomes +5.</Pair>
<Pair title="At 18th Level">The dodge bonus becomes +6.</Pair>
</Ability>
<Ability id="arc-cleric-sacred_attendant-nurture-grace-su" icon={["upgrade"]}>
<Pair single id="arc-cleric-sacred_attendant-nurture-grace-su">Nurture Grace (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Wis modifier times/day</Pair>
<Pair title="Standard Action">The sacred attendant can coax forth the charm and beauty within a willing, touched creature. For 1 round, the subject gains an enhancement bonus equal to <Link to="/misc/half">half</Link> the sacred attendant's cleric level (minimum +1) on Charisma checks and Charisma-based skill checks. The sacred attendant can spend two uses of this ability to instead counsel a subject for 10 minutes; in this case, the ability's duration lasts for 1 day.</Pair>
</Ability>
<Ability id="arc-cleric-sacred_attendant-inspiring-camaraderie-sp" icon={["upgrade"]}>
<Pair single id="arc-cleric-sacred_attendant-inspiring-camaraderie-sp">Inspiring Camaraderie (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four cleric levels beyond 8th<ByLevelPop levels={[[8,1],[12,2],[16,3],[20,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action">Whenever a sacred attendant casts a <Link to="/main/cure_spells">cure spell</Link> that targets a single ally, the sacred attendant can infuse that ally with inspired vigor. For a number of rounds equal to 1/2 the sacred attendant's cleric level, the ally's attack rolls gain a competence bonus equal to the sacred attendant's cleric level. These rounds begin as soon as the sacred attendant uses this ability and elapse consecutively.</Pair>
</Ability>
</>};
const _scroll_scholar = {title: "Scroll Scholar", jsx: <><h2 id="arc-cleric-scroll_scholar-scroll-scholar">Scroll Scholar</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_society_field_guide">Pathfinder Society Field Guide pg. 26</Link><br/>A scroll scholar values knowledge and learning as much as her other abilities, trading a portion of her potential in her chosen class for greater breadth of skill at deciphering old texts, piecing together strange fragments of esoteric lore, and deciphering the hidden qualities of strange and unusual magical items. The scroll scholar archetype can be taken by either clerics or wizards - they give up <Link to="/arc-wizard/scroll_scholar">different class abilities</Link> for the new abilities granted by this archetype. A scroll scholar has the following class features.</p>
<Ability id="arc-cleric-scroll_scholar-diligent-student-ex" icon={["skills","upgrade"]}>
<Pair single id="arc-cleric-scroll_scholar-diligent-student-ex">Diligent Student (Ex)</Pair>
<Pair hl title="Replaces">One of the 1st-level granted powers from her domains - the character gets to choose which of her two 1st-level granted powers it replaces</Pair>
<Pair title="At 1st Level">A scroll scholar chooses one <Link to="/skill/knowledge">Knowledge</Link> (INT) skill. This becomes a class skill if it is not already one. The scroll scholar adds <Link to="/misc/half">half</Link> her class level to all Knowledge checks of this type (minimum 1).</Pair>
<Pair title="At 5th Level">A scroll scholar chooses 1 additional Knowledge skill to receive this bonus.</Pair>
<Pair title="At 10th Level">A scroll scholar chooses a third additional Knowledge skill to receive this bonus.</Pair>
<Pair title="At 15th Level">A scroll scholar chooses a fourth Knowledge skill to receive this bonus.</Pair>
<Pair title="At 20th Level">A scroll scholar chooses a fifth Knowledge skill to receive this bonus.</Pair>
</Ability>
<Ability id="arc-cleric-scroll_scholar-secrets-revealed-sp" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-cleric-scroll_scholar-secrets-revealed-sp">Secrets Revealed (Sp)</Pair>
<Pair hl title="Replaces">Channel energy damage boost at 5th level</Pair>
<Pair title="At 5th Level">A scroll scholar gains the ability to cast <Link to="/spell/comprehend_languages">comprehend languages</Link> and <Link to="/spell/identify">identify</Link> as spell-like abilities. Her caster level is equal to her character level in whatever class she took the scroll scholar archetype for. She can cast these spells once per day.</Pair>
<Pair title="At 7th Level">She can now cast these spells twice per day each.</Pair>
<Pair title="At 9th Level">She can now cast these spells three times per day each.</Pair>
<Pair title="At 11th Level">One of these spell-like abilities (scholar's choice) becomes a constant spell-like ability.</Pair>
<Pair title="At 13th Level">The second one becomes a constant spell-like ability.</Pair>
<Pair title="Special">Her <em>channel energy</em> damage increases to 3d6 at 7th level, and for the rest of her career as a cleric lags 1d6 behind normal.</Pair>
</Ability>
<Ability id="arc-cleric-scroll_scholar-flash-of-insight-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-cleric-scroll_scholar-flash-of-insight-su">Flash of Insight (Su)</Pair>
<Pair hl title="Replaces">The normal addition of a new 4th-level spell slot to the character's spells per day</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Immediate Action">Once per day, a scroll scholar can gain a +5 bonus on a single attack roll, caster level check, or saving throw. This decision must be made before the results of the roll are known, but can be made after the die is rolled.</Pair>
<Pair title="At 15th Level">You can use this ability twice a day.</Pair>
<Pair title="At 20th Level">You can do this three times a day.</Pair>
<Pair title="Special">From this point on, the cleric has one fewer 4th-level spell slot than other clerics.</Pair>
</Ability>
</>};
const _separatist = {title: "Separatist", jsx: <><h2 id="arc-cleric-separatist-separatist">Separatist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 32</Link><br/>A radical cleric, unsatisfied with the orthodoxy of her deity's teachings, forges her own path of defiant divine expression. Though most members of her faith would call her a separatist or heretic, she continues to receive spells from her deity. Charismatic separatists may develop a large following of like-minded believers and eventually found a splinter church of their deity - and they are just as likely to be the cause of a holy civil war as the branches of the religion fight to determine which is the true faith.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-cleric-separatist--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Must worship a deity.</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-cleric-separatist-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-cleric-separatist-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair title="Info">Separatists do not gain proficiency in their deity's favored weapon (though they are not prohibited from using it or learning its use).</Pair>
</Ability>
<Ability id="arc-cleric-separatist-forbidden-rites" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-cleric-separatist-forbidden-rites">Forbidden Rites</Pair>
<Pair hl title="Replaces">Domains</Pair>
<Pair title="Choice">A separatist selects one domain from her deity's domain list, and a second domain that is not on her deity's domain list. This second domain cannot be an alignment domain that doesn't match the cleric's or her deity's alignment. For example, a lawful good separatist cleric of a neutral good deity cannot choose the <Link to="/domain/chaos">Chaos</Link> or <Link to="/domain/evil">Evil</Link> domain with this ability, but can select the <Link to="/domain/law">Law</Link> domain even though her deity isn't lawful.</Pair>
<Pair title="Passive Ability">Granted powers from the cleric's second domain function as if the cleric's level, Wisdom, and Charisma were 2 lower than normal (minimum level 1) in terms of effect, DC, and uses per day. This also means the separatist doesn't gain the domain's higher-level ability until 2 levels later than normal. If the second domain grants additional class skills, the separatist gains these as normal. In all other respects, this ability works like the standard cleric's domain ability.</Pair>
</Ability>
</>};
const _stoic_caregiver = {title: "Stoic Caregiver", jsx: <><h2 id="arc-cleric-stoic_caregiver-stoic-caregiver">Stoic Caregiver</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 6</Link><br/>Stoic caregivers are champions of life in defiance of untimely death as well as undeath. Stoic caregivers are sent to protect and help those who find themselves in dangerous situations, especially children and expectant mothers, and they provide aid and comfort to individuals acting to fulfill prophecy.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-cleric-stoic_caregiver--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Cannot worship a deity who is evil.</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-cleric-stoic_caregiver-positive-channeler-su" icon={["info"]}>
<Pair single id="arc-cleric-stoic_caregiver-positive-channeler-su">Positive Channeler (Su)</Pair>
<Pair hl title="Alters">Channel energy</Pair>
<Pair title="Info">A stoic caregiver must choose to channel positive energy, even if she worships a deity who is neutral or if she is not devoted to a particular deity.</Pair>
</Ability>
<Ability id="arc-cleric-stoic_caregiver-domains" icon={["broken-shield"]}>
<Pair single id="arc-cleric-stoic_caregiver-domains">Domains</Pair>
<Pair hl title="Alters">Domains</Pair>
<Pair title="Info">A stoic caregiver chooses only one domain.</Pair>
</Ability>
<Ability id="arc-cleric-stoic_caregiver-midwife-training-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-cleric-stoic_caregiver-midwife-training-su" flavor="A stoic caregiver is an expert at caring for lives that are in the process of being formed as well as the bodies of those who expect to usher new life into the world.">Midwife Training (Su)</Pair>
<Pair title="Ability"><p>The stoic caregiver gains a +2 bonus on Heal checks to treat expectant mothers and children. Any Heal check by the stoic caregiver that deals damage to the patient always deals the minimum amount of damage.</p>
<p>Whenever a stoic caregiver stops bleeding with the Heal skill or magical healing, or restores hit points with a healing spell or channeled positive energy, the healed creature gains partial resistance to bleed damage and negative energy for a number of minutes equal to <Link to="/misc/half">half</Link> the stoic caregiver's cleric level. Any bleed damage a target takes during that time is halved. Additionally, when protected creatures take negative energy damage (such as from an evil cleric's or an antipaladin's negative channeled energy, or spells such as <Link to="/spell/inflict_light_wounds">inflict light wounds</Link>), the amount of that damage is reduced by 5.</p>
</Pair>
</Ability>
<Ability id="arc-cleric-stoic_caregiver-fated-cures-su" icon={["armor-downgrade","rolling-dices"]}>
<Pair single id="arc-cleric-stoic_caregiver-fated-cures-su">Fated Cures (Su)</Pair>
<Pair title="Passive Ability">Creatures must roll twice and take the lower result when they make any saving throws against a stoic caregiver's spells of the healing subschool.</Pair>
</Ability>
<Ability id="arc-cleric-stoic_caregiver-three-aspect-channel-su" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-stoic_caregiver-three-aspect-channel-su">Three-Aspect Channel (Su)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A stoic caregiver can channel positive energy to heal and harm simultaneously. When she does so, she restores only 1/2 the usual amount of hit points and deals only 1/2 the usual number of points of damage (or 1/4 on a successful saving throw).</Pair>
</Ability>
</>};
const _theologian = {title: "Theologian", jsx: <><h2 id="arc-cleric-theologian-theologian">Theologian</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 32</Link><br/>A theologian is an expert on one particular area of her religion. She is so focused on that area that she eschews the broader sweep of her deity's dogma and focuses intensely upon that aspect of it, embodying its power in all she does. Theologians tend to be more zealous than other clerics, and many crusades are started by theologians. A theologian has the following class features.</p>
<Ability id="arc-cleric-theologian-focused-domain" icon={["broken-shield","upgrade","magic-swirl"]}>
<Pair single id="arc-cleric-theologian-focused-domain">Focused Domain</Pair>
<Pair hl title="Replaces">Domains</Pair>
<Pair title="Ability"><p>A theologian chooses only one domain from her deity's portfolio rather than the normal two domains. All level-dependent effects of the granted powers from the theologian's domain function as if she were two cleric levels higher than her actual cleric level. This does not allow her to gain domain-granted powers earlier than normal.</p>
<p>A theologian can prepare domain spells using her non-domain slots. She cannot use her spontaneous casting ability on domain spells, even if they are prepared in non-domain slots. In all other respects, this works like and replaces the standard cleric domain ability.</p>
</Pair>
</Ability>
<Ability id="arc-cleric-theologian-domain-secret-ex" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-cleric-theologian-domain-secret-ex">Domain Secret (Ex)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Choice">The theologian chooses one domain spell. That spell becomes permanently modified with one of the following metamagic feats: <Link to="/feat/bouncing_spell">Bouncing Spell</Link>, <Link to="/feat/disruptive_spell">Disruptive Spell</Link>, <Link to="/feat/ectoplasmic_spell">Ectoplasmic Spell</Link>, <Link to="/feat/enlarge_spell">Enlarge Spell</Link>, <Link to="/feat/extend_spell">Extend Spell</Link>, <Link to="/feat/focused_spell">Focused Spell</Link>, <Link to="/feat/intensified_spell">Intensified Spell</Link>, <Link to="/feat/silent_spell">Silent Spell</Link>, <Link to="/feat/still_spell">Still Spell</Link>. This metamagic feat does not increase the level of the spell. Once chosen, this modification cannot be changed. The domain specialist need not have the metamagic feat to apply it to a spell using this ability.</Pair>
<Pair title="At 10th Level">The domain specialist may choose an additional domain spell to modify in this way. She cannot modify the same spell more than once.</Pair>
<Pair title="At 15th Level">The domain specialist may choose an additional domain spell to modify in this way, following the restrictions above.</Pair>
<Pair title="At 20th Level">The domain specialist may choose an additional domain spell to modify in this way, following the restrictions above.</Pair>
</Ability>
</>};
const _triadic_priest = {title: "Triadic Priest", jsx: <><h2 id="arc-cleric-triadic_priest-triadic-priest">Triadic Priest</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven pg. 19</Link><br/>Power comes not just from communion with one's deity, but also from the formation of divine triumvirates. At the head of these groups are triadic priests. Although witch covens and changelings are the most likely to pursue this tradition, the practice sometimes appears among other faiths.</p>
<Ability id="arc-cleric-triadic_priest-triadic-bond-su" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-triadic_priest-triadic-bond-su">Triadic Bond (Su)</Pair>
<Pair title="Ability"><p>A triadic priest can perform a 10-minute ritual with exactly two allies in order to create an enduring bond between them that lasts until the triadic priest either dissolves the bond (a process that takes 1 minute of concentration) or creates a new bond. When performing the bonding ritual, the triadic priest can also include any of her allies' familiars or spirit animals; these creatures gain the benefits of the <em>bonded channeler</em> ability and the drawbacks of being in the bond, but they are not treated as bonded allies for the purpose of the triadic priest's <em>bonded domain.</em> Only intelligent and fully independent creatures can serve as her two bonded companions. Animal companions, eidolons, familiars, phantoms, and similar nonsentient or dependent creatures are not suitable.</p>
<p>The bonded allies gain numerous benefits and can help empower the triadic priest's spellcasting, as noted in the abilities below. However, if a bonded ally dies, the other members of the bond must each succeed at a Fortitude save (DC = 10 + the triadic priest's class level) or gain 1 permanent <Link to="/rule/negative_level">negative level</Link>.</p>
</Pair>
</Ability>
<Ability id="arc-cleric-triadic_priest-bonded-channeler-su" icon={["aura"]}>
<Pair single id="arc-cleric-triadic_priest-bonded-channeler-su">Bonded Channeler (Su)</Pair>
<Pair title="Choice">When a triadic priest uses her channel energy ability, she must choose to affect either only her bonded allies or everyone except her bonded allies.</Pair>
</Ability>
<Ability id="arc-cleric-triadic_priest-bonded-domain-su" extraClasses="hasSubs" icon={["broken-shield"]}>
<Pair single id="arc-cleric-triadic_priest-bonded-domain-su">Bonded Domain (Su)</Pair>
<Pair hl title="Alters">Domains</Pair>
<Pair title="Ability">A triadic priest selects only one domain granted by her deity. However, while she is within 10 feet of least one of her bonded allies, she gains the following benefits.</Pair>
</Ability>
<Ability id="arc-cleric-triadic_priest-bonded-power-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-triadic_priest-bonded-power-su">Bonded Power (Su)</Pair>
<Pair title="Ability">A triadic priest gains either a witch's <Link to="/hex/coven">coven</Link> hex or the <Link to="/feat/allied_spellcaster">Allied Spellcaster</Link> feat as a bonus feat.</Pair>
</Ability>
<Ability id="arc-cleric-triadic_priest-bonded-unity-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-triadic_priest-bonded-unity-su">Bonded Unity (Su)</Pair>
<Pair title="Usage">3 + Wis modifier times/day</Pair>
<Pair title="Move-Equivalent Action">A triadic priest can share one <Link to="/main/teamwork_feat">teamwork feat</Link> she has with up to two bonded companions that are within 10 feet of her. Her bonded companions do not need to meet the feat's prerequisites and gain the benefits of the feat for 1 round plus 1 additional round for every 5 class levels the triadic priest has. A bonded companion can gain only one teamwork feat in this way at a time.</Pair>
</Ability>
<Ability id="arc-cleric-triadic_priest-bonded-ritual" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-cleric-triadic_priest-bonded-ritual">Bonded Ritual</Pair>
<Pair title="At 1st Level">A triadic priest can prepare any of the spells below as though they were domain spells, though she can cast these domain spells only while she is within 10 feet of one of her bonded allies.</Pair>
<Pair title="At 8th Level">Once per day while within 10 feet of both her bonded allies, a triadic priest can cast any one of her domain spells of a spell level she can cast, whether she has prepared the spell or not, without expending a spell slot. If one of these domain spells has a casting time of more than one standard action, the triadic priest must succeed at a <Link to="/rule/concentration">concentration</Link> check (DC = 20 + double the spell's level) or lose the spell if at any point during the casting she does not have a bonded ally within 10 feet.</Pair>
<Pair title="Info">The spells below are listed by spell level.</Pair>
<Pair plain title="1st"><Link to="/spell/ill_omen">Ill omen</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/blindness_deafness">Blindness/deafness</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/bestow_curse">Bestow curse</Link></Pair>
<Pair plain title="4th"><Link to="/spell/charm_monster">Charm monster</Link></Pair>
<Pair plain title="5th"><Link to="/spell/baleful_polymorph">Baleful polymorph</Link></Pair>
<Pair plain title="6th"><Link to="/spell/control_weather">Control weather</Link></Pair>
<Pair plain title="7th"><Link to="/spell/forcecage">Forcecage</Link></Pair>
<Pair plain title="8th"><Link to="/spell/mind_blank">Mind blank</Link></Pair>
<Pair plain title="9th"><Link to="/spell/astral_projection">Astral projection</Link></Pair>
</Ability>
</>};
const _undead_lord = {title: "Undead Lord", jsx: <><h2 id="arc-cleric-undead_lord-undead-lord">Undead Lord</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 32</Link><br/>An undead lord is a cleric focused on using necromancy to control undead. Her flock is the walking dead and her choir the keening spirits of the damned. This unliving congregation is the manifestation of her unceasing love affair with death.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-cleric-undead_lord--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Deity's portfolio must include the Death domain, or a similar domain that promotes undeath.</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-cleric-undead_lord-death-magic" icon={["broken-shield"]}>
<Pair single id="arc-cleric-undead_lord-death-magic">Death Magic</Pair>
<Pair hl title="Replaces">Domains</Pair>
<Pair title="Info">An undead lord must select the <Link to="/domain/death">Death</Link> domain (and the <Link to="/domain/undead">Undead</Link> subdomain, if available in the campaign). She does not gain a second domain. In all other respects, this works like the standard cleric's domain ability.</Pair>
</Ability>
<Ability id="arc-cleric-undead_lord-corpse-companion-su" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-undead_lord-corpse-companion-su">Corpse Companion (Su)</Pair>
<Pair title="Ability">With a ritual requiring 8 hours, an undead lord can animate a single <Link to="/template/skeleton">skeleton</Link> or <Link to="/template/zombie">zombie</Link> whose Hit Dice do not exceed her cleric level. This corpse companion automatically follows her commands and does not need to be controlled by her. She cannot have more than one corpse companion at a time. It does not count against the number of Hit Dice of undead controlled by other methods. She can use this ability to create a variant skeleton such as a bloody or burning skeleton, but its Hit Dice cannot exceed <Link to="/misc/half">half</Link> her cleric level. She can dismiss her companion as a <strong className="hl">standard action</strong>, which destroys it.</Pair>
</Ability>
<Ability id="arc-cleric-undead_lord-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-undead_lord-bonus-feats">Bonus Feats</Pair>
<Pair title="At 1st Level">All undead lords gain <Link to="/feat/command_undead">Command Undead</Link> as a bonus feat.</Pair>
<Pair title="At 10th Level">She may select one of the following as a bonus feat: <Link to="/feat/channel_smite">Channel Smite</Link>, <Link to="/feat/extra_channel">Extra Channel</Link>, <Link to="/feat/improved_channel">Improved Channel</Link>, <Link to="/feat/quick_channel">Quick Channel</Link>, <Link to="/feat/skeleton_summoner">Skeleton Summoner</Link>, <Link to="/feat/undead_master">Undead Master</Link>.</Pair>
</Ability>
<Ability id="arc-cleric-undead_lord-unlife-healer-su" icon={["remedy"]}>
<Pair single id="arc-cleric-undead_lord-unlife-healer-su">Unlife Healer (Su)</Pair>
<Pair title="At 8th Level">The undead lord's spells, spell-like abilities, and supernatural abilities used to heal undead heal an extra 50% damage.</Pair>
<Pair title="At 16th Level">These effects automatically heal the maximum possible damage for the effect + the extra 50%. This does not stack with abilities or feats such as <Link to="/feat/empower_spell">Empower Spell</Link> or <Link to="/feat/maximize_spell">Maximize Spell</Link>.</Pair>
</Ability>
</>};
const _varisian_pilgrim = {title: "Varisian Pilgrim", jsx: <><h2 id="arc-cleric-varisian_pilgrim-varisian-pilgrim">Varisian Pilgrim</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 42</Link><br/>While most clerics are associated with a particular temple, adventuring clerics spend much of their time away from their favored place of worship, and there are those who worship primarily on the road and during the journey. These clerics see the act of travel and the arrival at sites sacred to their religion as valuable, and perhaps more so than time spent sequestered inside a church. Relatively common in Varisia, these pilgrims love to travel, typically on foot or with caravans. While the archetype is called the "Varisian pilgrim," this archetype can be selected by any cleric who prefers to worship while on the move. Whether or not they are Varisian, these clerics learn a little about fortune-telling and a lot about people.</p>
<p>A Varisian pilgrim has the following class features.</p>
<Ability id="arc-cleric-varisian_pilgrim-fortunate-road" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-varisian_pilgrim-fortunate-road">Fortunate Road</Pair>
<Pair hl title="Replaces">Domains</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A Varisian pilgrim must select the <Link to="/domain/chaos">Chaos</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/liberation">Liberation</Link>, <Link to="/domain/luck">Luck</Link>, <Link to="/domain/travel">Travel</Link>, or <Link to="/domain/weather">Weather</Link> domain (or the <Link to="/domain/exploration">Exploration</Link>, <Link to="/domain/fate">Fate</Link>, <Link to="/domain/freedom">Freedom</Link>, <Link to="/domain/trade">Trade</Link>, or <Link to="/domain/seasons">Seasons</Link> subdomains, if available in the campaign) as one of her domains. If the cleric worships a deity that doesn't normally grant one of these domains, she gains access to this domain but can only pick this one domain - she effectively loses the option to pick a second domain. As a result, very few clerics who worship deities who don't grant access to one of the domains or subdomains listed above opt to become Varisian pilgrims. In all other respects, this works like the standard cleric's domain ability.</Pair>
</Ability>
<Ability id="arc-cleric-varisian_pilgrim-caravan-bond-su" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-varisian_pilgrim-caravan-bond-su">Caravan Bond (Su)</Pair>
<Pair hl title="Replaces">Proficiency with medium armor and shields - she retains proficiency with light armor only</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">By leading a group prayer for 1 minute, a Varisian pilgrim can select a number of traveling companions equal to her cleric level + her Wisdom bonus. She may use her domain-granted powers on any of these traveling companions as if they were her. She can use these abilities on her traveling companions at a range of up to 30 feet, even if the ability normally requires her touch.</Pair>
</Ability>
<Ability id="arc-cleric-varisian_pilgrim-blessing-of-the-harrow-su" icon={["stairs-goal"]}>
<Pair single id="arc-cleric-varisian_pilgrim-blessing-of-the-harrow-su">Blessing of the Harrow (Su)</Pair>
<Pair hl title="Replaces">An 8th-level domain power of the Varisian pilgrim's choice</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Once per day the pilgrim may perform a harrowing for herself or another creature. This is otherwise identical to the <em>blessing of the harrow</em> from the <Link to="/pclass/harrower">harrower prestige class</Link>.</Pair>
</Ability>
</>};
export default {angelfire_apostle:_angelfire_apostle,appeaser:_appeaser,asmodean_advocate:_asmodean_advocate,blossoming_light:_blossoming_light,cardinal:_cardinal,channeler_of_the_unknown:_channeler_of_the_unknown,cloistered_cleric:_cloistered_cleric,crashing_wave:_crashing_wave,crusader:_crusader,demonic_apostle:_demonic_apostle,divine_paragon:_divine_paragon,divine_scourge:_divine_scourge,divine_strategist:_divine_strategist,ecclesitheurge:_ecclesitheurge,elder_mythos_cultist:_elder_mythos_cultist,evangelist:_evangelist,fiendish_vessel:_fiendish_vessel,forgemaster:_forgemaster,foundation_of_faith:_foundation_of_faith,herald_caller:_herald_caller,hidden_priest:_hidden_priest,idealist:_idealist,iron_priest:_iron_priest,lawspeaker:_lawspeaker,mendevian_priest:_mendevian_priest,merciful_healer:_merciful_healer,roaming_exorcist:_roaming_exorcist,sacred_attendant:_sacred_attendant,scroll_scholar:_scroll_scholar,separatist:_separatist,stoic_caregiver:_stoic_caregiver,theologian:_theologian,triadic_priest:_triadic_priest,undead_lord:_undead_lord,varisian_pilgrim:_varisian_pilgrim}