import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested vigilante social talent.</p>
</>};
const _always_prepared = {title: "Always Prepared", jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 7</Link></p>
<Ability id="always-prepared-ex" icon={["stairs-goal"]}>
<Pair single id="always-prepared-ex" flavor="The vigilante can set aside resources to plan for future contingencies.">Always Prepared (Ex)</Pair>
<Pair title="Ability"><p>The vigilante gains the <Link to="/feat/brilliant_planner">Brilliant Planner</Link> feat except he can spend up to 100 gp per character level for his brilliant plan fund and only requires 1 minute to enact his brilliant plan.</p>
<p>In addition, while in a settlement for at least 1 week, he can spend 24 hours and up to 500 gp per character level to create a stash somewhere within the settlement. Once per day, the vigilante can take 1 hour to retrieve a stash, retrieving any number of items that would have been available in a settlement he visited at the time of making the stash, regardless of the weight of the items. Once he retrieves a stash in this way, he subtracts the price of the items from the stash's value and the stash is exhausted and lost, regardless if he used the full value of the stash.</p>
</Pair>
<Pair title="Special">The vigilante can maintain any number of stashes, but a stash is lost if he does not spend 1 hour to maintain the stash at least once per month. A vigilante's stash is well-hidden and only the vigilante knows the location of a stash he creates.</Pair>
</Ability>
</>};
const _ancestral_enlightenment = {title: "Ancestral Enlightenment", jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 23</Link></p>
<Ability id="ancestral-enlightenment-ex" icon={["upgrade"]}>
<Pair single id="ancestral-enlightenment-ex">Ancestral Enlightenment (Ex)</Pair>
<Pair title="Prerequisites">5th-level vigilante</Pair>
<Pair title="Ability">The vigilante can attempt any <Link to="/skill/knowledge">Knowledge</Link> check untrained. If he already has ranks in a particular Knowledge skill, he gains a +4 bonus on checks with that skill.</Pair>
</Ability>
</>};
const _beginners_luck = {title: "Beginner's Luck", jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 16</Link></p>
<Ability id="beginners-luck-ex" icon={["upgrade"]}>
<Pair single id="beginners-luck-ex" flavor="The vigilante appears so harmless and innocent that onlookers dismiss his incredible abilities as nothing more than beginner's luck.">Beginner's Luck (Ex)</Pair>
<Pair title="Ability">When the vigilante uses a vigilante talent while in his social identity, he can add the +20 circumstance bonus from <em>seamless guise</em> to his <Link to="/skill/disguise">Disguise</Link> check to fool onlookers, so long as the number of onlookers witnessing him is no greater than his vigilante level. The vigilante's PC allies do not count as onlookers (and at the GM's discretion, a closely allied NPC might not count as an onlooker, either).</Pair>
<Pair title="Special">He loses this bonus against onlookers who have already witnessed him using a vigilante talent in his social identity within the last week.</Pair>
</Ability>
</>};
const _bellflower_innuendo = {title: "Bellflower Innuendo", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 33</Link></p>
<Ability id="bellflower-innuendo-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="bellflower-innuendo-ex" flavor={<>A vigilante with this talent has learned to pass secret messages more efficiently by observing the coded messages of the <Link to="/rule/bellflower_network">Bellflower Network</Link> or another secret organization.</>}>Bellflower Innuendo (Ex)</Pair>
<Pair title="Ability">He can pass a secret message with <Link to="/skill/bluff">Bluff</Link> in the same amount of time it would normally take to convey the message without encryption. The words and meaning of his secret messages cannot be gleaned from him or those he directly delivered the message to by divinations unless the caster succeeds at a caster level check (DC = 15 + the vigilante's level).</Pair>
</Ability>
</>};
const _case_the_joint = {title: "Case the Joint", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 10</Link></p>
<Ability id="case-the-joint-ex" icon={["stairs-goal","rolling-dices"]}>
<Pair single id="case-the-joint-ex" flavor="The vigilante can use his social identity to learn important facts about a location before returning later in his vigilante identity.">Case the Joint (Ex)</Pair>
<Pair title="Ability">If he spends at least 1 hour in a location while in his social identity, he can attempt a DC 20 Knowledge (engineering) check. If he succeeds, he gains the ability to later reroll any one failed skill check involving the location's layout (such as a Stealth check to sneak into the location, a Disable Device check to disable an alarm, or a Sleight of Hand check to snatch an object from a pedestal). For every 10 by which the check exceeds 20, the vigilante gains an additional reroll.</Pair>
<Pair title="Special">If the vigilante fails to return to the location within 1 week, the situation changes too much and he cannot use the rerolls. A vigilante can't <em>case</em> the same <em>joint</em> more than once a week.</Pair>
</Ability>
</>};
const _companion_to_the_lonely = {title: "Companion to the Lonely", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 33</Link></p>
<Ability id="companion-to-the-lonely-ex" icon={["stairs-goal","rolling-dices","upgrade","armor-upgrade"]}>
<Pair single id="companion-to-the-lonely-ex" flavor={<>Whether religiously motivated, as are followers of <Link to="/faith/arshea">Arshea</Link>, <Link to="/faith/calistria">Calistria</Link>, or <Link to="/faith/shelyn">Shelyn</Link>, or for purely carnal reasons, physical intimacy helps the vigilante cope with the loneliness of his double life.</>}>Companion to the Lonely (Ex)</Pair>
<Pair title="Ability">Once per day, the vigilante can spend at least 1 hour engaged in acts of physical pleasure with a willing partner to gain a pool of morale points equal to his Charisma bonus or his partner's Charisma bonus, whichever is higher. For the next 24 hours, the vigilante can spend a morale point as an <strong className="hl">immediate action</strong> to roll a Charisma-based skill check or a Will saving throw again after rolling the die but before learning the consequences; he must take the second result even if it is lower.</Pair>
</Ability>
</>};
const _conflicted_identity = {title: "Conflicted Identity", jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 16</Link></p>
<Ability id="conflicted-identity-ex" icon={["armor-upgrade"]}>
<Pair single id="conflicted-identity-ex" flavor="The vigilante's mind is in a constant state of turmoil, which makes him even more ethically and morally fluid than other vigilantes.">Conflicted Identity (Ex)</Pair>
<Pair title="Passive Ability">When targeted by a harmful spell or effect that would affect the vigilante in his current identity but not his other identity (or when he would suffer a lesser effect in his other identity), he has a 50% chance of being affected as though he were in his other identity.</Pair>
<Pair title="Special">This chance is rolled when the spell or effect is cast or triggered and before any spell resistance roll, if applicable. For example, if a vigilante has a lawful-neutral social identity and a neutral vigilante identity, he has a 50% chance of taking only half damage from a <Link to="/spell/chaos_hammer">chaos hammer</Link> spell while in his social identity, since he would always take only half damage from a <em>chaos hammer</em> spell when in his vigilante identity.</Pair>
</Ability>
</>};
const _double_time = {title: "Double Time", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 11</Link></p>
<Ability id="double-time-ex" icon={["upgrade"]}>
<Pair single id="double-time-ex">Double Time (Ex)</Pair>
<Pair title="Prerequisites">Must have a social identity appropriate to the chosen skill</Pair>
<Pair title="Ability"><p>The vigilante's social identity is that of a skilled and respected artisan or professional, rather than a merchant or noble. In order to complete his day's work while still continuing his vigilante activities, he has learned to work faster than normal, hiding his progress so it seems like he is working full shifts at his day job rather than spending some of that time on other pursuits.</p>
<p>The vigilante needs to spend only 6 hours each day for mundane uses of the Craft or Profession skill, rather than 8 hours. If he has the <Link to="/soctalent/social_grace">social grace</Link> social talent, he needs to spend only 4 hours for any skill he's chosen with social grace.</p>
</Pair>
</Ability>
</>};
const _in_vogue = {title: "In Vogue", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 11</Link></p>
<Ability id="in-vogue-ex" icon={["upgrade"]}>
<Pair single id="in-vogue-ex" flavor="The vigilante's crafting or professional business is always at the height of the local trends, allowing the vigilante to gain more profits than usual.">In Vogue (Ex)</Pair>
<Pair title="Prerequisites">5th-level vigilante, <Link to="/soctalent/double_time">double time</Link>, <Link to="/soctalent/social_grace">social grace</Link></Pair>
<Pair title="Passive Ability">Goods he crafts with a <Link to="/skill/craft">Craft</Link> skill he chose with <em>social grace</em> are worth 1/3 more gp than normal due to his celebrity, without increasing the cost to create. Whenever he uses a <Link to="/skill/profession">Profession</Link> skill he chose with <em>social grace</em> to make money, he makes twice as much money.</Pair>
</Ability>
</>};
const _entrepreneur = {title: "Entrepreneur", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 26</Link></p>
<Ability id="entrepreneur-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="entrepreneur-ex">Entrepreneur (Ex)</Pair>
<Pair title="Choice">Select any one Intelligence-, Wisdom-, or Charisma-based skill other than Perception or Use Magic Device.</Pair>
<Pair title="Ability">The vigilante can use the selected skill to earn money as if he were using a Profession skill. If he selects Perform or Profession, the vigilante instead gains the skill unlock powers for those skills as appropriate for his number of ranks in that skill.</Pair>
<Pair title="Special">If he has the <Link to="/soctalent/social_grace">social grace</Link> social talent, he can apply this benefit to all skills selected with the <em>social grace</em> talent.</Pair>
</Ability>
</>};
const _gossip_collector = {title: "Gossip Collector", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 11</Link></p>
<Ability id="gossip-collector-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="gossip-collector-ex" flavor="The vigilante sits at the center of a web of gossip, granting him access to the latest scuttlebutt with baffling speed.">Gossip Collector (Ex)</Pair>
<Pair title="Ability">Whenever the vigilante is presented with a topic about which he would normally need to spend 1d4 hours to gather information, he must spend only 1d2 hours instead. If he has the <Link to="/soctalent/renown">renown</Link> social talent and gathers the information in his area of renown, he must instead spend only 1d4 &times; 10 minutes, and if he beats the DC to gather a piece of information by 20 or more, he knows that piece of information without spending any time at all; he has simply already heard that gossip.</Pair>
<Pair title="Special">This ability doesn't allow him to gather information that isn't available in the locale he is canvassing, even if that locale is his area of renown.</Pair>
</Ability>
</>};
const _guise_of_life = {title: "Guise of Life", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 26</Link></p>
<Ability id="guise-of-life-su" icon={["stairs-goal"]}>
<Pair single id="guise-of-life-su">Guise of Life (Su)</Pair>
<Pair title="Prerequisites">The vigilante must be a corporeal undead creature, or else have the <em>negative energy affinity</em> racial trait (see Special below)</Pair>
<Pair title="Ability">An undead vigilante with this talent gains an additional social identity in the form of one living creature identical to the vigilante's appearance in life. Successful Knowledge checks reveal information about the vigilante as if he were a living creature, and he counts as living for the purpose of divination spells and effects. He gains no other benefit from appearing to be a living creature, and remains vulnerable to positive energy and spells that effect undead.</Pair>
<Pair title="Special">Humanoid vigilantes with the <em>negative energy affinity</em> racial trait can also select this talent, gaining a human social identity.</Pair>
</Ability>
</>};
const _guise_of_unlife = {title: "Guise of Unlife", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 26</Link></p>
<Ability id="guise-of-unlife-su" icon={["stairs-goal"]}>
<Pair single id="guise-of-unlife-su">Guise of Unlife (Su)</Pair>
<Pair title="Prerequisites">The vigilante must be a living creature</Pair>
<Pair title="Ability">A vigilante with this talent gains an additional social identity in the form of an undead version of one of his existing social identities, such as a <Link to="/monster/ghoul">ghoul</Link>, <Link to="/template/vampire">vampire</Link>, or <Link to="/template/zombie">zombie</Link>. Successful Knowledge checks reveal information about the vigilante as if he were undead, and he counts as undead for the purpose of divination spells and effects. He gains no other benefit from appearing to be an undead creature, and remains vulnerable to negative energy and spells that effect the living.</Pair>
</Ability>
</>};
const _hidden_magic = {title: "Hidden Magic", jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 16</Link></p>
<Ability id="hidden-magic-ex" icon={["armor-upgrade"]}>
<Pair single id="hidden-magic-ex">Hidden Magic (Ex)</Pair>
<Pair title="Prerequisites">5th-level vigilante</Pair>
<Pair title="Passive Ability">The auras of magic items the vigilante is carrying are hidden (as per <Link to="/spell/magic_aura">magic aura</Link>). The vigilante can suppress or reactivate this effect as a <strong className="hl">standard action</strong>.</Pair>
<Pair title="At 11th Level">The vigilante and any magic items he is carrying appear to be nonmagical (as if he had cast <Link to="/spell/greater_magic_aura">greater magic aura</Link>).</Pair>
</Ability>
</>};
const _intrigue_feats = {title: "Intrigue Feats", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 2</Link></p>
<Ability id="intrigue-feats-ex" icon={["stairs-goal"]}>
<Pair single id="intrigue-feats-ex">Intrigue Feats (Ex)</Pair>
<Pair title="Ability">The vigilante gains one of the following feats as a bonus feat: <Link to="/feat/blustering_bluff">Blustering Bluff</Link>, <Link to="/feat/but_a_scratch">But a Scratch</Link>, <Link to="/feat/call_truce">Call Truce</Link>, <Link to="/feat/confabulist">Confabulist</Link>, <Link to="/feat/criminal_reputation">Criminal Reputation</Link>, <Link to="/feat/cutting_humiliation">Cutting Humiliation</Link>, <Link to="/feat/esoteric_linguistics">Esoteric Linguistics</Link>, <Link to="/feat/intoxicating_flattery">Intoxicating Flattery</Link>, <Link to="/feat/ironclad_logic">Ironclad Logic</Link>, <Link to="/feat/nerve_racking_negotiator">Nerve-Racking Negotiator</Link>, <Link to="/feat/orator">Orator</Link>, <Link to="/feat/persuasive_bribery">Persuasive Bribery</Link>, <Link to="/feat/play_to_the_crowd">Play to the Crowd</Link>, <Link to="/feat/quick_favor">Quick Favor</Link>, <Link to="/feat/rhetorical_flourish">Rhetorical Flourish</Link>, <Link to="/feat/sense_assumptions">Sense Assumptions</Link>, <Link to="/feat/sense_relationships">Sense Relationships</Link>, or <Link to="/feat/street_smarts">Street Smarts</Link>. He must meet the feat's prerequisites.</Pair>
<Pair title="Special">This talent can be selected multiple times; each time, the vigilante gains a new feat from the above list.</Pair>
</Ability>
</>};
const _kalistocrats_acumen = {title: "Kalistocrat's Acumen", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 33</Link></p>
<Ability id="kalistocrats-acumen-ex" icon={["hazard-sign","upgrade"]}>
<Pair single id="kalistocrats-acumen-ex">Kalistocrat's Acumen (Ex)</Pair>
<Pair title="Info">A vigilante with this talent must follow the dietary and sexual prohibitions of <Link to="/eq-misc/the_prophecies_of_kalistrade">the Prophecies of Kalistrade</Link> in his social identity or he loses the talent's benefit until he <Link to="/spell/atonement">atones</Link>.</Pair>
<Pair title="Passive Ability">He can treat <Link to="/rule/the_settlement_stat_block">settlements</Link> as one size category larger when determining their base values and purchase limits.</Pair>
<Pair title="At 9th Level">The vigilante can treat settlements as two size categories larger for the above purposes.</Pair>
<Pair title="At 15th Level">The vigilante can treat settlements as four size categories larger for the above purposes.</Pair>
</Ability>
</>};
const _many_guises = {title: "Many Guises", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 12</Link></p>
<Ability id="many-guises-ex" icon={["stairs-goal"]}>
<Pair single id="many-guises-ex">Many Guises (Ex)</Pair>
<Pair title="Prerequisites">5th-level vigilante</Pair>
<Pair title="Ability">The vigilante can take on any number of mundane guises. Whenever he changes his identity, he has a third option (instead of social or vigilante): he can become mundane.</Pair>
<Pair title="Info">The mundane identity is not a specific individual. Each one is created at the moment it is assumed, and quickly forgotten as soon as it is removed. While in a mundane identity, the vigilante does not gain the benefit of either his social or vigilante identity, but instead appears as a member of his race, usually a common laborer, farmer, or peasant of any gender. His alignment is treated as neutral when he is in his mundane identity.</Pair>
<Pair title="Passive Ability">While in this identity, he receives a +20 circumstance bonus on Disguise checks to appear like an ordinary member of his race. Spells and abilities that are looking for the vigilante in either of his other identities fail while he is in his mundane identity.</Pair>
<Pair title="Special">He must build the appearance for this identity using whatever clothing and tools he has at his disposal. While he can use magic (such as a <Link to="/magic-wondrous/hat_of_disguise">hat of disguise</Link>), his mundane identity can never be anything other than an ordinary member of a society or large group (subject to GM discretion).</Pair>
</Ability>
</>};
const _everyman = {title: "Everyman", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 11</Link></p>
<Ability id="everyman-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="everyman-ex">Everyman (Ex)</Pair>
<Pair title="Prerequisites">11th-level vigilante, <Link to="/soctalent/many_guises">many guises</Link></Pair>
<Pair title="Ability">The vigilante can take on the appearance of a specific individual whenever he assumes a mundane guise using his <em>many guises</em> social talent. The individual must be a farmer, laborer, or peasant. While disguised as this individual, the vigilante receives a +20 circumstance bonus on Disguise checks to appear as that individual. Any spell or ability designed to locate the individual has a 50% chance of finding the vigilante instead of the actual individual, and divination spells and abilities used on the vigilante give results as if he were the actual individual.</Pair>
<Pair title="Special">Although this doesn't grant the vigilante any special knowledge of the individual, the vigilante's training grants him a +10 circumstance bonus on Bluff checks to properly play the part of the individual.</Pair>
</Ability>
</>};
const _any_guise = {title: "Any Guise", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 10</Link></p>
<Ability id="any-guise-su" icon={["stairs-goal"]}>
<Pair single id="any-guise-su">Any Guise (Su)</Pair>
<Pair title="Prerequisites">17th-level vigilante, <Link to="/soctalent/everyman">everyman</Link></Pair>
<Pair title="Ability">A vigilante can use his <em>everyman</em> social talent to disguise himself as any specific person, even a king or high priest. Furthermore, if the actual individual wouldn't normally be able to be found via magic (such as by being dead or protected from divinations designed to locate the individual), such divinations always find the vigilante instead.</Pair>
</Ability>
</>};
const _mockingbird = {title: "Mockingbird", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 12</Link></p>
<Ability id="mockingbird-ex" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="mockingbird-ex">Mockingbird (Ex)</Pair>
<Pair title="Prerequisites">5th-level vigilante</Pair>
<Pair title="Ability">The vigilante can mimic almost any sort of voice, or even animal calls and sound effects, and he can throw his voice at a distance.</Pair>
<Pair title="Special">This functions similarly to a combination of the <Link to="/spell/ghost_sound">ghost sound</Link>, <Link to="/spell/ventriloquism">ventriloquism</Link>, and <Link to="/spell/vocal_alteration">vocal alteration</Link> spells.</Pair>
</Ability>
</>};
const _morphic_mask = {title: "Morphic Mask", jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 7</Link></p>
<Ability id="morphic-mask-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="morphic-mask-su">Morphic Mask (Su)</Pair>
<Pair title="Ability">The vigilante's physical form in his vigilante identity can differ significantly from that of his social identity, within the norms for his race &mdash; this can include changes to the vigilante's proportions, coloration, gender characteristics, and other physical characteristics. This increases the vigilante's bonus from <em>seamless guise</em> by 2 for every significant change, as per the <Link to="/skill/disguise">Disguise</Link> skill.</Pair>
<Pair title="Special">The vigilante always assumes the same form when using this ability. A vigilante with multiple natural forms, such as a <Link to="/race/kitsune">kitsune</Link>, can alter each of his forms using this talent.</Pair>
</Ability>
</>};
const _notorious_fool = {title: "Notorious Fool", jsx: <><p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 16</Link></p>
<Ability id="notorious-fool-ex" icon={["armor-upgrade"]}>
<Pair single id="notorious-fool-ex" flavor="While in his social identity, the vigilante can feign absentmindedness, clumsiness, drunkenness, or eccentricity very convincingly.">Notorious Fool (Ex)</Pair>
<Pair title="Ability">When he fails an opposed <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> or <Link to="/skill/stealth">Stealth</Link> check while in his social identity, he can immediately attempt a <Link to="/skill/bluff">Bluff</Link> check opposed by the onlookers' <Link to="/skill/sense_motive">Sense Motive</Link> checks to appear as though he had only blundered or stumbled in a spectacular fashion. If he succeeds at this Bluff check, the onlookers do not realize the vigilante was attempting the action that prompted him to attempt a Sleight of Hand or Stealth check, although being in the wrong place or behaving in an inappropriate manner may still have negative consequences.</Pair>
<Pair title="Special">This talent is ineffective against any onlooker who has already witnessed the vigilante faking a blunder within the last 24 hours.</Pair>
</Ability>
</>};
const _obscurity = {title: "Obscurity", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 15</Link></p>
<Ability id="obscurity-ex" icon={["armor-upgrade"]}>
<Pair single id="obscurity-ex" flavor="The vigilante is relatively unknown socially. In fact, he makes a point of keeping the life of his social identity as ordinary as possible.">Obscurity (Ex)</Pair>
<Pair title="Ability">This social talent functions exactly as the <Link to="/soctalent/renown">renown</Link> social talent, but instead of improving the starting attitude of all NPCs within the community, it empowers the vigilante so that he no longer needs to succeed at Disguise checks to appear as his social identity while assuming that identity within his area of <em>obscurity.</em></Pair>
<Pair title="Special">He still has to attempt Disguise checks when NPCs within this settlement are confronted with indisputable proof that the vigilante could be more than he appears to be, such as when he uses a vigilante talent while in his social identity. This social talent counts as <em>renown</em> for the purpose of meeting the prerequisites of social talents that list <em>renown</em> as a prerequisite and can be improved by such talents. A vigilante with this talent cannot select <em>renown,</em> nor can he select any social talent that requires him to be famous (such as <Link to="/soctalent/celebrity_discount">celebrity discount</Link> or <Link to="/soctalent/celebrity_perks">celebrity perks</Link>).</Pair>
</Ability>
</>};
const _owls_sight = {title: "Owl's Sight", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 19</Link></p>
<Ability id="owls-sight-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="owls-sight-ex">Owl's Sight (Ex)</Pair>
<Pair title="Ability">The vigilante gains low-light vision. If he already has low-light vision, he gains a +4 competence bonus on <Link to="/skill/perception">Perception</Link> checks in low light. The vigilante also gains a +2 competence bonus on <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> and <Link to="/skill/stealth">Stealth</Link> checks at night.</Pair>
</Ability>
</>};
const _quick_change = {title: "Quick Change", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 12</Link></p>
<Ability id="quick-change-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="quick-change-ex" flavor="The vigilante learns to shift between his identities with ease.">Quick Change (Ex)</Pair>
<Pair title="Prerequisites">7th-level vigilante</Pair>
<Pair title="Ability">Instead of needing 1 minute to change his identity, he can now do so as a <strong className="hl">full-round action</strong>.</Pair>
<Pair title="Special">If, after a quick change, he encounters any creature familiar with both of his identities, he must attempt a <Link to="/skill/disguise">Disguise</Link> check to avoid the creature seeing through his hastily donned disguise and realizing that the identities are, in fact, the same person. The vigilante can spend 1 additional round adjusting and perfecting his appearance and persona to negate the need for this check.</Pair>
</Ability>
</>};
const _immediate_change = {title: "Immediate Change", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 11</Link></p>
<Ability id="immediate-change-ex" icon={["upgrade"]}>
<Pair single id="immediate-change-ex">Immediate Change (Ex)</Pair>
<Pair title="Prerequisites">13th-level vigilante, <Link to="/soctalent/quick_change">quick change</Link></Pair>
<Pair title="Ability">The vigilante can change identities as a <strong className="hl">move action</strong>, and he no longer needs to spend extra time to adjust his appearance and persona.</Pair>
</Ability>
</>};
const _renown = {title: "Renown", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 12</Link></p>
<Ability id="renown-ex" icon={["upgrade"]}>
<Pair single id="renown-ex" flavor={<>The vigilante becomes known for deeds and abilities regardless of his current identity. This <em>renown</em> grants him favorable treatment in civilized company and lends him an air of menace while facing down his enemies.</>}>Renown (Ex)</Pair>
<Pair title="Ability"><p>While he is in his social identity, a vigilante can spend 1 week gaining <em>renown</em> among the locals of any community of no more than about 200 individuals (<Link to="/rule/the_shape_of_civilization">a village</Link>). This could be the entire community or a smaller neighborhood in a larger settlement. He must spend at least 4 hours each day socializing and making contacts. After spending 1 week doing this, whenever he is in his social identity, all NPCs in the community have a starting attitude toward him that is one category better, as long as each person's <Link to="/skill/attitude">initial attitude</Link> would have at least been indifferent. While he gains <em>renown</em> in an area using his social identity, he also spreads rumors and tales about his vigilante identity.</p>
<p>Once he has gained <em>renown</em> in a community, he gains a +4 circumstance bonus on Intimidate checks whenever he is in his vigilante identity. This bonus applies only while he is near the community in which he has gained <em>renown;</em> he must be within a number of miles equal to his vigilante level.</p>
</Pair>
<Pair title="Special">A vigilante can hold <em>renown</em> in a limited number of communities (normally one, with other social talents allowing two). If he gains <em>renown</em> in a new community, he must decide which one of his previous communities to lose. These effects are subject to GM approval. For example, the GM might rule that an NPC or monster has not heard any tales about the vigilante. Or, a foe may have a starting attitude toward him that's one category worse, rather than one category better.</Pair>
</Ability>
</>};
const _celebrity_discount = {title: "Celebrity Discount", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 10</Link></p>
<Ability id="celebrity-discount-ex" icon={["upgrade"]}>
<Pair single id="celebrity-discount-ex" flavor="The vigilante's social identity is popular enough to receive discounts in his area of renown.">Celebrity Discount (Ex)</Pair>
<Pair title="Prerequisites">3rd-level vigilante, <Link to="/soctalent/renown">renown</Link></Pair>
<Pair title="Ability">Whenever he buys an item in his area of <em>renown</em> that costs 500 gp or less, he can buy it at 90% of the market price, rather than the full price.</Pair>
<Pair title="Special">If he has the <Link to="/soctalent/great_renown">great renown</Link> social talent, the gp limit increases to 2,000 gp, and if he possesses the <Link to="/soctalent/incredible_renown">incredible renown</Link> social talent, the gp limit increases to 8,000 gp.</Pair>
</Ability>
</>};
const _celebrity_perks = {title: "Celebrity Perks", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 11</Link></p>
<Ability id="celebrity-perks-ex" icon={["upgrade"]}>
<Pair single id="celebrity-perks-ex" flavor={<>The vigilante is a celebrity in his area of <em>renown,</em> and adoring fans are all too eager to shower him with the fundamental necessities.</>}>Celebrity Perks (Ex)</Pair>
<Pair title="Prerequisites">5th-level vigilante, <Link to="/soctalent/renown">renown</Link></Pair>
<Pair title="Passive Ability"><p>While within his area of <em>renown,</em> he can always receive common meals or lodging (worth up to 1 gp per meal or night) for free, and can avoid paying taxes or bribes of 1 gp or less.</p>
<p>If he wants a particular nonmagical item worth 1 gp or less, he can spend 1d10 minutes interacting with people in his area of <em>renown</em> to receive the item from a fan (if he ever sells such a gift from a fan, he loses this social talent permanently).</p>
</Pair>
<Pair title="Special"><p>If he has the <Link to="/soctalent/great_renown">great renown</Link> social talent, he can receive gifts of up to 5 gp, receive fine food and lodgings (worth up to 10 gp per meal or night) for free, and avoid paying taxes or bribes of 10 gp or less.</p>
<p>If he has <Link to="/soctalent/incredible_renown">incredible renown</Link>, he can receive gifts of up to 25 gp, receive exquisite food and lodgings (worth up to 100 gp per meal or night) for free, and avoid paying taxes or bribes of 100 gp or less.</p>
</Pair>
</Ability>
</>};
const _discreet_inquiries = {title: "Discreet Inquiries", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 33</Link></p>
<Ability id="discreet-inquiries-ex" icon={["armor-upgrade"]}>
<Pair single id="discreet-inquiries-ex">Discreet Inquiries (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/soctalent/renown">Renown</Link></Pair>
<Pair title="Ability">The vigilante can attempt Diplomacy checks to gather information without being obvious he is seeking any, whether by buying the silence of informants or by talking foes into revealing information without realizing they are doing so. While the vigilante is in his area of <Link to="/soctalent/renown">renown</Link>, gathering information in this way takes 2d4 hours and costs 2d4 gp. Anyone who might take notice of the information gathering does not notice unless she succeeds at a Sense Motive check opposed by the vigilante's Bluff check. The vigilante gains a +4 bonus on this Bluff check.</Pair>
</Ability>
</>};
const _feign_innocence = {title: "Feign Innocence", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 11</Link></p>
<Ability id="feign-innocence-ex" icon={["armor-upgrade"]}>
<Pair single id="feign-innocence-ex" flavor="The vigilante's social identity seems so innocent that it is hard to believe he was involved in wrongdoing.">Feign Innocence (Ex)</Pair>
<Pair title="Prerequisites">5th-level vigilante, <Link to="/soctalent/renown">renown</Link></Pair>
<Pair title="Passive Ability">Within his area of <em>renown,</em> this provides a nonmagical effect identical to the <Link to="/spell/innocence">innocence</Link> spell.</Pair>
</Ability>
</>};
const _subjective_truth = {title: "Subjective Truth", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 13</Link></p>
<Ability id="subjective-truth-ex" icon={["armor-upgrade"]}>
<Pair single id="subjective-truth-ex" flavor="The vigilante's disparate identities allow him to defeat magic that detects lies.">Subjective Truth (Ex)</Pair>
<Pair title="Prerequisites">9th-level vigilante, <Link to="/soctalent/feign_innocence">feign innocence</Link></Pair>
<Pair title="Passive Ability">As long as what he says is true from the point of view of his current identity, it detects as true to effects such as <Link to="/spell/discern_lies">discern lies</Link>, and he can say it in effects such as <Link to="/spell/zone_of_truth">zone of truth</Link> that force him to speak the truth.</Pair>
</Ability>
</>};
const _great_renown = {title: "Great Renown", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 11</Link></p>
<Ability id="great-renown-ex" icon={["upgrade"]}>
<Pair single id="great-renown-ex" flavor="The vigilante is known on a broader scale.">Great Renown (Ex)</Pair>
<Pair title="Prerequisites">7th-level vigilante, <Link to="/soctalent/renown">renown</Link></Pair>
<Pair title="Ability">He can gain <em>renown</em> in a single community of up to 5,000 individuals (a <Link to="/rule/the_shape_of_civilization">large town</Link>) or up to two communities of no more than 2,000 individuals each (two small towns). The bonus while he is in his social identity remains unchanged, but the circumstance bonus on <Link to="/skill/intimidate">Intimidate</Link> checks from his <em>renown</em> social talent while he is in his vigilante identity increases to +6.</Pair>
</Ability>
</>};
const _incredible_renown = {title: "Incredible Renown", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 11</Link></p>
<Ability id="incredible-renown-ex" icon={["upgrade"]}>
<Pair single id="incredible-renown-ex" flavor="The vigilante is incredibly famous in both identities.">Incredible Renown (Ex)</Pair>
<Pair title="Prerequisites">11th-level vigilante, <Link to="/soctalent/great_renown">great renown</Link></Pair>
<Pair title="Ability">He can gain <em>renown</em> in a single community of up to 25,000 individuals (a <Link to="/rule/the_shape_of_civilization">large city</Link>) or up to two smaller cities of no more than 10,000 individuals each (two small cities). The bonus while he is in his social identity remains unchanged, but the circumstance bonus to <Link to="/skill/intimidate">Intimidate</Link> from his <em>great renown</em> social talent while in he is in his vigilante identity increases to +8.</Pair>
</Ability>
</>};
const _instant_recognition = {title: "Instant Recognition", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 11</Link></p>
<Ability id="instant-recognition-ex" icon={["upgrade"]}>
<Pair single id="instant-recognition-ex" flavor="The vigilante is so well known that his name precedes him, even to other communities.">Instant Recognition (Ex)</Pair>
<Pair title="Prerequisites">13th-level vigilante, <Link to="/soctalent/incredible_renown">incredible renown</Link>, <Link to="/soctalent/triumphant_return">triumphant return</Link></Pair>
<Pair title="Ability">It only takes 4 hours of effort to get the word out to transfer his <em>renown</em> benefits to a new community.</Pair>
</Ability>
</>};
const _loyal_aid = {title: "Loyal Aid", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 11</Link></p>
<Ability id="loyal-aid-ex" icon={["stairs-goal","upgrade","armor-upgrade"]}>
<Pair single id="loyal-aid-ex">Loyal Aid (Ex)</Pair>
<Pair title="Prerequisites">3rd-level vigilante, <Link to="/soctalent/renown">renown</Link></Pair>
<Pair title="Ability"><p>The vigilante gains the service of a number of loyal allies who can help him gather information, cover for his two identities, or perform minor tasks. Inside his area of <em>renown,</em> a vigilante with this talent gains a bonus on <Link to="/skill/diplomacy">Diplomacy</Link> checks to gather information equal to half his vigilante level.</p>
<p>In addition, if the vigilante wants, he can task his friends to help cover for him by spreading false tales of his location and activities to others. This has the effect of increasing the DC of Diplomacy checks to gather information about the vigilante and Survival checks to track him by an amount equal to his level. This lasts for 1 day, and can be used only once per week.</p>
<p>Finally, once per day, the vigilante can ask his allies to perform a minor task for him. This usually involves delivering a message, purchasing a piece of mundane gear worth 100 gp or less (which the vigilante must pay for), or retrieving an object owned by the vigilante (that would be easily accessible by the ally). This task might take other forms as well, subject to GM discretion, but can never involve combat or danger.</p>
</Pair>
</Ability>
</>};
const _triumphant_return = {title: "Triumphant Return", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 13</Link></p>
<Ability id="triumphant-return-ex" icon={["upgrade"]}>
<Pair single id="triumphant-return-ex" flavor={<>The vigilante's tales are never truly forgotten. This makes it easier to establish his <em>renown</em> in a place he has established it before.</>}>Triumphant Return (Ex)</Pair>
<Pair title="Prerequisites">3rd-level vigilante, <Link to="/soctalent/renown">renown</Link></Pair>
<Pair title="Ability">In any settlement where the vigilante previously gained <em>renown,</em> it takes only 3 days, rather than 1 week, to gain <em>renown</em> again.</Pair>
</Ability>
</>};
const _safe_house = {title: "Safe House", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 12</Link></p>
<Ability id="safe-house-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="safe-house-ex">Safe House (Ex)</Pair>
<Pair title="Ability">The vigilante can establish a safe house in his area of <em>renown,</em> and he can change it every time he changes his area of <em>renown.</em> If he doesn't have the <Link to="/soctalent/renown">renown</Link> talent, he can still select this talent and place the safe house in a single location to which he has access, but he can never move the safe house from its initial location until he gains the <em>renown</em> talent.</Pair>
<Pair title="Info">This safe house must be an area no larger in volume than a cube that is a number of feet per side equal to 10 feet per vigilante level. The safe house can be arranged any way he likes and it can be part of a larger building, like a secret room or an underground cave. Objects within this safe house can't be located by any effect that is less powerful than a <Link to="/spell/discern_location">discern location</Link> spell.</Pair>
<Pair title="At 7th Level">The protection from being located also applies to creatures in the safe house.</Pair>
<Pair title="At 13th Level">The entire area is protected from scrying effects (though not mundane snooping) like a <Link to="/spell/mages_private_sanctum">mage's private sanctum</Link>.</Pair>
</Ability>
</>};
const _seemless_shapechanger = {title: "Seemless Shapechanger", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 15</Link></p>
<Ability id="seemless-shapechanger-ex" icon={["armor-upgrade"]}>
<Pair single id="seemless-shapechanger-ex" flavor="The vigilante seamlessly adopts any persona he assumes with magic.">Seemless Shapechanger (Ex)</Pair>
<Pair title="Prerequisites">Must have the <Link to="/subtype/shapechanger">shapechanger</Link> subtype</Pair>
<Pair title="Passive Ability">The vigilante adds his <em>seamless guise</em> bonus to the bonus on <Link to="/skill/disguise">Disguise</Link> checks that he gains to assume the shape of another creature with a <Link to="/spelldef/polymorph">polymorph</Link> spell or effect.</Pair>
</Ability>
</>};
const _skill_familiarity = {title: "Skill Familiarity", jsx: <><p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 23</Link></p>
<Ability id="skill-familiarity-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="skill-familiarity-ex">Skill Familiarity (Ex)</Pair>
<Pair title="Prerequisites">9th-level vigilante</Pair>
<Pair title="Choice">The vigilante choses four skills when he gains this talent.</Pair>
<Pair title="Ability">He can take 10 on checks with his chosen skills even when distracted or threatened. If he takes 10 on checks with these skills while not distracted or threatened, he gains a bonus on the check equal to <Link to="/misc/one_quarter">one-quarter</Link> of his vigilante level (minimum +2).</Pair>
</Ability>
</>};
const _social_grace = {title: "Social Grace", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 12</Link></p>
<Ability id="social-grace-ex" icon={["upgrade"]}>
<Pair single id="social-grace-ex">Social Grace (Ex)</Pair>
<Pair title="Choice">The vigilante selects any one Intelligence-, Wisdom-, or Charisma-based skill other than Perception or Use Magic Device.</Pair>
<Pair title="Passive Ability">Whenever the vigilante is in his social identity, he receives a +4 circumstance bonus on checks with the selected skill.</Pair>
<Pair title="At 5th Level">He can select another skill (with the same restrictions) to gain this bonus.</Pair>
<Pair title="At 9th Level">He can select another skill (with the same restrictions) to gain this bonus.</Pair>
<Pair title="At 13th Level">He can select another skill (with the same restrictions) to gain this bonus.</Pair>
<Pair title="At 17th Level">He can select another skill (with the same restrictions) to gain this bonus.</Pair>
</Ability>
</>};
const _songbird = {title: "Songbird", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 19</Link></p>
<Ability id="songbird-su" icon={["magic-swirl","skills"]}>
<Pair single id="songbird-su">Songbird (Su)</Pair>
<Pair title="Ability">The vigilante gains the use of <Link to="/spell/animal_messenger">animal messenger</Link> once per day as a spell-like ability, with a caster level equal to his character level.</Pair>
<Pair title="Info">He also gains <Link to="/skill/handle_animal">Handle Animal</Link> as a class skill.</Pair>
</Ability>
</>};
const _beast_friend = {title: "Beast Friend", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 19</Link></p>
<Ability id="beast-friend-su" icon={["magic-swirl"]}>
<Pair single id="beast-friend-su">Beast Friend (Su)</Pair>
<Pair title="Prerequisites"><Link to="/soctalent/songbird">Songbird</Link></Pair>
<Pair title="Ability">The vigilante can cast <Link to="/spell/charm_animal">charm animal</Link> once per day as a spell-like ability, with a caster level equal to his level.</Pair>
</Ability>
</>};
const _beast_speech = {title: "Beast Speech", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 19</Link></p>
<Ability id="beast-speech-su" icon={["magic-swirl"]}>
<Pair single id="beast-speech-su">Beast Speech (Su)</Pair>
<Pair title="Prerequisites"><Link to="/soctalent/songbird">Songbird</Link></Pair>
<Pair title="Ability">The vigilante can cast <Link to="/spell/speak_with_animals">speak with animals</Link> once per day as a spell-like ability, with a caster level equal to his character level.</Pair>
</Ability>
</>};
const _transformation_sequence = {title: "Transformation Sequence", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 15</Link></p>
<Ability id="transformation-sequence-su" icon={["upgrade","broken-shield"]}>
<Pair single id="transformation-sequence-su" flavor="The vigilante's transformation between identities is assisted by magic. This makes it faster than usual, but also more noticeable.">Transformation Sequence (Su)</Pair>
<Pair title="Prerequisites">Able to cast spells or spell-like abilities</Pair>
<Pair title="Ability">The vigilante can complete the switch between his identities in 5 rounds, improving to a <strong className="hl">standard action</strong> if he has the <Link to="/soctalent/quick_change">quick change</Link> social talent, and to a <strong className="hl">swift action</strong> if he has the <Link to="/soctalent/immediate_change">immediate change</Link> social talent. However, the transformation causes quite a spectacle, involving loud sounds or music, brilliant colorful energies, and swift motions.</Pair>
<Pair title="Special">A vigilante with the <Link to="/arc-vigilante/magical_child">magical child</Link> archetype effectively gets this social talent for free at 1st level.</Pair>
</Ability>
</>};
const _well_known_expert = {title: "Well-Known Expert", jsx: <><p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 2</Link></p>
<Ability id="well-known-expert-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="well-known-expert-ex">Well-Known Expert (Ex)</Pair>
<Pair title="Ability"><p>The vigilante's social identity is known as an expert in numerous fields, including areas and topics the vigilante hasn't actually taken the time to study. As a result the vigilante is skilled at encouraging others to discover solutions to difficult problems themselves by asking probing questions, while appearing to give the information himself.</p>
<p>In his social identity, the vigilante can take 10 when attempting to <Link to="/rule/aid_another">aid another</Link> on <Link to="/skill/appraise">Appraise</Link>, <Link to="/skill/craft">Craft</Link>, and <Link to="/skill/knowledge">Knowledge</Link> checks. He also gains a bonus equal to <Link to="/misc/half">half</Link> his class level (minimum +1) on Bluff checks to appear knowledgeable in Appraise, Craft (all), and Knowledge (all). If he has the <Link to="/soctalent/renown">renown</Link> social talent, he grants a +3 bonus when he successfully aids another on these skill checks, rather than +2.</p>
<p>In his area of <em>renown,</em> the vigilante's social identity is so trusted as an expert that scholars are inspired to make amazing deductions and intuitive leaps in discussions with him. A creature that has already failed a Knowledge check on a specific subject can attempt one additional check to gain information on the same topic if it receives an aid another bonus from the vigilante when doing so.</p>
</Pair>
</Ability>
</>};
export default {not_found:_not_found,always_prepared:_always_prepared,ancestral_enlightenment:_ancestral_enlightenment,beginners_luck:_beginners_luck,bellflower_innuendo:_bellflower_innuendo,case_the_joint:_case_the_joint,companion_to_the_lonely:_companion_to_the_lonely,conflicted_identity:_conflicted_identity,double_time:_double_time,in_vogue:_in_vogue,entrepreneur:_entrepreneur,gossip_collector:_gossip_collector,guise_of_life:_guise_of_life,guise_of_unlife:_guise_of_unlife,hidden_magic:_hidden_magic,intrigue_feats:_intrigue_feats,kalistocrats_acumen:_kalistocrats_acumen,many_guises:_many_guises,everyman:_everyman,any_guise:_any_guise,mockingbird:_mockingbird,morphic_mask:_morphic_mask,notorious_fool:_notorious_fool,obscurity:_obscurity,owls_sight:_owls_sight,quick_change:_quick_change,immediate_change:_immediate_change,renown:_renown,celebrity_discount:_celebrity_discount,celebrity_perks:_celebrity_perks,discreet_inquiries:_discreet_inquiries,feign_innocence:_feign_innocence,subjective_truth:_subjective_truth,great_renown:_great_renown,incredible_renown:_incredible_renown,instant_recognition:_instant_recognition,loyal_aid:_loyal_aid,triumphant_return:_triumphant_return,safe_house:_safe_house,seemless_shapechanger:_seemless_shapechanger,skill_familiarity:_skill_familiarity,social_grace:_social_grace,songbird:_songbird,beast_friend:_beast_friend,beast_speech:_beast_speech,transformation_sequence:_transformation_sequence,well_known_expert:_well_known_expert}