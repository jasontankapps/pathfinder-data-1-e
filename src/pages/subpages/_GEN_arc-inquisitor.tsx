import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _abolisher = {title: "Abolisher", jsx: <><h2 id="arc-inquisitor-abolisher-abolisher">Abolisher</h2>
<p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook pg. 7</Link><br/>Abolishers are incorruptible inquisitors who weed out creatures of alien, unnatural origins, finding and exposing aberrations for what they are.</p>
<Ability id="arc-inquisitor-abolisher-sworn-to-purity-ex" icon={["hazard-sign"]}>
<Pair single id="arc-inquisitor-abolisher-sworn-to-purity-ex">Sworn to Purity (Ex)</Pair>
<Pair hl title="Alters">Domains</Pair>
<Pair title="Choice">An abolisher must select one of the following domains: <Link to="/domain/air">Air</Link>, <Link to="/domain/animal">Animal</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/plant">Plant</Link>, <Link to="/domain/water">Water</Link>, or <Link to="/domain/weather">Weather</Link>. If she ever changes her deity to one that has none of the listed domains, she loses this archetype and becomes a normal inquisitor or ex-inquisitor.</Pair>
</Ability>
<Ability id="arc-inquisitor-abolisher-revealing-gaze-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-abolisher-revealing-gaze-ex">Revealing Gaze (Ex)</Pair>
<Pair hl title="Replaces">Stern gaze</Pair>
<Pair title="Passive Ability">An abolisher receives a morale bonus on opposed Perception checks against other creatures' Disguise and Stealth checks equal to <Link to="/misc/half">half</Link> her inquisitor level (minimum +1). She grants this bonus to all adjacent allies.</Pair>
</Ability>
<Ability id="arc-inquisitor-abolisher-expose-aberration-sp" icon={["magic-swirl","stairs-goal"]}>
<Pair single id="arc-inquisitor-abolisher-expose-aberration-sp">Expose Aberration (Sp)</Pair>
<Pair hl title="Replaces">Detect alignment</Pair>
<Pair hl title="Alters">Bane</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">An abolisher can use <Link to="/spell/detect_aberration">detect aberration</Link> at will. When she hits a creature with a weapon attack, she automatically knows if the creature is an aberration or not.</Pair>
<Pair title="At 5th Level">She can activate her <em>bane</em> ability as an <strong className="hl">immediate action</strong> after she hits an aberration but before damage is rolled.</Pair>
</Ability>
<Ability id="arc-inquisitor-abolisher-escape-corruptions-grasp-sp" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-abolisher-escape-corruptions-grasp-sp" flavor="An abolisher is divinely protected against the grasping tentacles and paralyzing secretions of aberrations.">Escape Corruption's Grasp (Sp)</Pair>
<Pair hl title="Replaces">Discern lies</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 round/day per inquisitor level; these rounds need not be consecutive</Pair>
<Pair title="Immediate Action">She can ignore impediments to movement, as per <Link to="/spell/freedom_of_movement">freedom of movement</Link>.</Pair>
</Ability>
</>};
const _cloaked_wolf = {title: "Cloaked Wolf", jsx: <><h2 id="arc-inquisitor-cloaked_wolf-cloaked-wolf">Cloaked Wolf</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 28</Link><br/>Some inquisitors are adept at appearing harmless until they throw off their unassuming facades and take their enemies by surprise.</p>
<Ability icon={["skills"]} id="arc-inquisitor-cloaked_wolf-undefined">
<Pair id="arc-inquisitor-cloaked_wolf-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/sleight_of_hand">Sleight of Hand</Link> (DEX)</Pair>
<Pair title="Removed Skills">Intimidate</Pair></Ability>
<Ability id="arc-inquisitor-cloaked_wolf-lure-prey-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-cloaked_wolf-lure-prey-ex" flavor="Cloaked wolves are skilled at maintaining a harmless guise even while they silently prepare to strike against their enemies.">Lure Prey (Ex)</Pair>
<Pair hl title="Replaces">Stern gaze</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A cloaked wolf receives a morale bonus on all Disguise and Sleight of Hand checks equal to <Link to="/misc/half">half</Link> her inquisitor level (minimum +1). When a cloaked wolf uses Sleight of Hand to draw a hidden weapon, this bonus doubles.</Pair>
</Ability>
<Ability id="arc-inquisitor-cloaked_wolf-always-wary-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-inquisitor-cloaked_wolf-always-wary-ex" flavor="A cloaked wolf is always ready for betrayal and subterfuge.">Always Wary (Ex)</Pair>
<Pair hl title="Replaces">Monster lore</Pair>
<Pair hl title="Alters">Cunning initiative</Pair>
<Pair title="At 1st Level">Whenever she attempts a Sense Motive check to avoid being surprised by a foe using Bluff to conceal the attack, the cloaked wolf can always act during the surprise round, regardless of the result of the check.</Pair>
<Pair title="At 2nd Level">She adds her Wisdom modifier (in addition to her Dexterity modifier) to her initiative checks during any such encounter.</Pair>
</Ability>
<Ability id="arc-inquisitor-cloaked_wolf-unleashed-fury-ex" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-cloaked_wolf-unleashed-fury-ex">Unleashed Fury (Ex)</Pair>
<Pair hl title="Replaces">Solo tactics, teamwork feats</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A cloaked wolf can transition between parley and combat in the blink of an eye. She gains <Link to="/feat/quick_draw">Quick Draw</Link> as a bonus feat.</Pair>
<Pair title="At 6th Level"><p>She gains a bonus feat from the following list: <Link to="/feat/alertness">Alertness</Link>, <Link to="/feat/catch_off_guard">Catch Off-Guard</Link>, <Link to="/feat/deceitful">Deceitful</Link>, <Link to="/feat/deft_hands">Deft Hands</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link>, <Link to="/feat/improvised_weapon_mastery">Improvised Weapon Mastery</Link>, <Link to="/feat/lookout">Lookout</Link>, <Link to="/feat/mobility">Mobility</Link>, <Link to="/feat/spring_attack">Spring Attack</Link>, <Link to="/feat/stunning_fist">Stunning Fist</Link>, and <Link to="/feat/throw_anything">Throw Anything</Link>.</p>
<p>As a <strong className="hl">standard action</strong>, a cloaked wolf can choose to learn a new bonus feat from the above list in place of the most recent bonus feat she has already learned. In effect, the cloaked wolf loses the bonus feat in exchange for the new one. She can only change the most recent bonus feat gained. Whenever she gains a new bonus feat, the previous bonus feat becomes set and cannot be changed again.</p>
<p>A cloaked wolf can change her most recent bonus feat a number of times per day equal to her Wisdom modifier (minimum 1).</p>
</Pair>
<Pair title="At 9th Level">The inquisitor gains a 2nd bonus feat from the list above.</Pair>
<Pair title="At 12th Level">The cloaked wolf chooses a 3rd bonus feat from the list above.</Pair>
<Pair title="At 15th Level">The inquisitor gains a 4th bonus feat from the list above.</Pair>
<Pair title="At 18th Level">The cloaked wolf chooses a 5th bonus feat from the list above.</Pair>
<Pair title="Special">She must meet the prerequisites of any bonus feat she selects.</Pair>
</Ability>
</>};
const _cold_iron_warden = {title: "Cold Iron Warden", jsx: <><h2 id="arc-inquisitor-cold_iron_warden-cold-iron-warden">Cold Iron Warden</h2>
<p><strong>Sources</strong> <Link to="/source/demon_hunters_handbook">Demon Hunter's Handbook pg. 15</Link><br/>The natural enemies of <Link to="/pclass/demoniac">demoniacs</Link> and other cultists of fiendish forces, cold iron wardens are inquisitors who dedicate their lives to eradicating the taint of <Link to="/family/demon">demonkind</Link> from Golarion.</p>
<Ability id="arc-inquisitor-cold_iron_warden-track-teleportation-su" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-cold_iron_warden-track-teleportation-su" flavor="A cold iron warden may acquire clues about a teleporting creature's destination by closely examining the place it once stood.">Track Teleportation (Su)</Pair>
<Pair hl title="Replaces">Track, teamwork feats gained at 12th and 18th level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 time/day + 1 per four inquisitor levels beyond 2nd<ByLevelPop levels={[[2,1],[6,2],[10,3],[14,4],[18,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Full-Round Action">While standing in a square that a creature occupied when it cast a conjuration (teleportation) spell or spell-like ability, the cold iron warden may attempt a Survival check (DC 10 + the teleportation spell's caster level) to sense the direction of the creature's destination as well as whether the destination lies within 25 feet, 100 feet, 1,000 feet, or more than 1,000 feet of her. She must use this ability within a number of rounds after the creature's teleportation equal to 1/2 her inquisitor level, after which the trail goes cold.</Pair>
<Pair title="At 12th Level">If the cold iron warden exceeds the Survival check DC by 5 or more, she can also sense the creature's location as if using the <Link to="/spell/locate_creature">locate creature</Link> spell, using her inquisitor level as the caster level.</Pair>
<Pair title="At 18th Level">If the cold iron warden exceeds the Survival check DC by 10 or more, she can also sense the creature's location as if she had cast <Link to="/spell/discern_location">discern location</Link>.</Pair>
</Ability>
<Ability id="arc-inquisitor-cold_iron_warden-abyssal-scourge-su" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="arc-inquisitor-cold_iron_warden-abyssal-scourge-su">Abyssal Scourge (Su)</Pair>
<Pair hl title="Replaces">Solo tactics, teamwork feats gained at 6th and 15th level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Choice">A cold iron warden gains <Link to="/feat/alignment_channel">Alignment Channel</Link> as a bonus feat and must choose either chaotic or evil outsiders.</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability">She can <Link to="/ability/channel_energy">channel energy</Link> as a cleric of her inquisitor level - 2, but only to use Alignment Channel to damage outsiders. The DC of the Will save to halve the damage is equal to 10 + 1/2 the inquisitor's level + the inquisitor's Charisma modifier.</Pair>
<Pair title="At 6th Level">The energy lingers in the affected area for 1 round as a shimmering, barely perceptible, mist that disrupts Abyssal magic. A creature in the mist that casts a conjuration (summoning) spell or spell-like ability with the selected alignment subtype must succeed at a <Link to="/rule/concentration">concentration</Link> check (DC 15 + double the level of the conjuration spell) or lose the spell.</Pair>
<Pair title="At 15th Level">Any chaotic or evil creature that casts a conjuration (teleportation) spell or spell-like ability while in the mist must succeed at a concentration check (same DC as above) or lose the spell.</Pair>
<Pair title="Special">A cold iron warden can take other feats to add to this ability such as <Link to="/feat/improved_channel">Improved Channel</Link>, but not feats that alter this ability, such as <Link to="/feat/command_undead">Command Undead</Link>.</Pair>
</Ability>
<Ability id="arc-inquisitor-cold_iron_warden-favored-judgment" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-cold_iron_warden-favored-judgment">Favored Judgment</Pair>
<Pair hl title="Replaces">Teamwork feats gained at 3rd and 9th level</Pair>
<Pair title="At 3rd Level">The inquisitor gains <Link to="/feat/favored_judgment">Favored Judgment</Link> as a bonus feat but must choose either outsider (chaotic) or outsider (evil).</Pair>
<Pair title="At 9th Level">She gains Favored Judgment as a bonus feat a second time and must choose either outsider (chaotic) or outsider (evil).</Pair>
</Ability>
<Ability id="arc-inquisitor-cold_iron_warden-bane-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-inquisitor-cold_iron_warden-bane-su">Bane (Su)</Pair>
<Pair hl title="Alters">Bane</Pair>
<Pair title="Passive Ability">A cold iron warden reduces the amount of bonus damage dealt when using her bane ability against creatures that are not outsiders with the chaotic or evil subtype by 1d6. She increases the amount of bonus damage by 1d6 when she selects outsiders with the chaotic or evil subtype.</Pair>
</Ability>
<Ability id="arc-inquisitor-cold_iron_warden-translate-telepathy-su" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-cold_iron_warden-translate-telepathy-su">Translate Telepathy (Su)</Pair>
<Pair hl title="Replaces">Discern lies</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">An inquisitor can sense when a creature within 5 feet of her receives or sends a telepathic message.</Pair>
<Pair title="Immediate Action">By making a Perception check (DC 15 + the highest CR of the creatures using telepathy), she may listen to all telepathic messages sent to and by creatures in this area for a number of rounds per day equal to her inquisitor level. These rounds do not need to be consecutive.</Pair>
<Pair title="At 10th Level">The distance at which she can detect telepathic messages becomes 10 feet.</Pair>
<Pair title="At 15th Level">The distance at which she can detect telepathic messages increases to 15 feet.</Pair>
<Pair title="At 20th Level">The distance at which she can detect telepathic messages becomes 20 feet.</Pair>
</Ability>
</>};
const _exarch = {title: "Exarch", jsx: <><h2 id="arc-inquisitor-exarch-exarch">Exarch</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 13</Link><br/>The gruff traditionalism of most dwarves finds its apex in those who adhere to a strict orthodoxy rooted in ancient principles and practices and who are not amenable whatsoever to change or innovation.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-inquisitor-exarch--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/dwarf">Dwarf</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-inquisitor-exarch-spells" icon={["broken-shield"]}>
<Pair single id="arc-inquisitor-exarch-spells">Spells</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Info">Exarchs cannot cast spells with the chaotic descriptor.</Pair>
</Ability>
<Ability id="arc-inquisitor-exarch-inflexible-will-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-inquisitor-exarch-inflexible-will-ex">Inflexible Will (Ex)</Pair>
<Pair hl title="Replaces">Monster lore</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">An exarch gains a +2 bonus on saving throws against <Link to="/spell/confusion">confusion</Link> and <Link to="/spell/insanity">insanity</Link> effects and effects with the chaotic descriptor.</Pair>
</Ability>
<Ability id="arc-inquisitor-exarch-detect-chaos-sp" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-exarch-detect-chaos-sp">Detect Chaos (Sp)</Pair>
<Pair hl title="Replaces">Detect alignment</Pair>
<Pair title="Ability">At will, an exarch can use <Link to="/spell/detect_chaos">detect chaos</Link>.</Pair>
</Ability>
<Ability id="arc-inquisitor-exarch-fearsome-jurist-su" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-exarch-fearsome-jurist-su">Fearsome Jurist (Su)</Pair>
<Pair hl title="Replaces">Bane</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Swift Action">An exarch can imbue one of her weapons with the <Link to="/magic-enh/jurist">jurist</Link> or <Link to="/magic-enh/menacing">menacing</Link> weapon special ability, and may switch between these properties as another swift action. When using either special ability, her weapon's critical threat range doubles against chaotic creatures. This does not stack with <Link to="/spell/keen_edge">keen edge</Link>, <Link to="/feat/improved_critical">Improved Critical</Link>, or similar effects. This ability otherwise functions as <em>bane.</em></Pair>
</Ability>
<Ability id="arc-inquisitor-exarch-aura-of-repetition-su" icon={["aura"]}>
<Pair single id="arc-inquisitor-exarch-aura-of-repetition-su">Aura of Repetition (Su)</Pair>
<Pair hl title="Replaces">Second judgment</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Standard Action">Once per day while using her judgment, an exarch can project an <em>aura of repetition,</em> as the <Link to="/domain/toil">Toil</Link> subdomain power.</Pair>
<Pair title="Special">If the exarch takes Artifice (Toil) as her domain, the save DC of her aura increases by 2 but its duration does not increase.</Pair>
</Ability>
<Ability id="arc-inquisitor-exarch-double-jeopardy-su" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-exarch-double-jeopardy-su">Double Jeopardy (Su)</Pair>
<Pair hl title="Replaces">Greater bane</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">Whenever an exarch uses her <em>fearsome jurist</em> ability, she may choose to affect two weapons, with one gaining the <em>jurist</em> weapon special ability and the other the <em>menacing</em> special ability as above. Both special abilities may be combined in a single weapon, whose critical threat range doubles. This does not stack with <em>keen edge,</em> Improved Critical, or similar effects.</Pair>
</Ability>
<Ability id="arc-inquisitor-exarch-aura-of-reversion-su" icon={["aura","armor-downgrade"]}>
<Pair single id="arc-inquisitor-exarch-aura-of-reversion-su">Aura of Reversion (Su)</Pair>
<Pair hl title="Replaces">Third judgment</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">While using her judgment, an exarch can project a 30-foot-radius <Link to="/misc/emanation">emanation</Link> for a number of rounds per day equal to her inquisitor level. Any creature other than the exarch that is using a transmutation effect within this aura at the beginning of its turn becomes <Link to="/misc/sickened">sickened</Link>, or sickened and <Link to="/misc/nauseated">nauseated</Link> if using a polymorph effect, including the <Link to="/umr/change_shape">change shape</Link> ability (Fortitude negates; DC 10 + 1/2 the exarch's level + her Wisdom modifier). Continuous effects from permanent magical items do not cause this effect. Within the aura, <Link to="/spell/dispel">dispel</Link> checks against transmutation effects gain a +4 bonus. This ability cannot be used simultaneously with <em>aura of repetition.</em></Pair>
</Ability>
</>};
const _exorcist = {title: "Exorcist", jsx: <><h2 id="arc-inquisitor-exorcist-exorcist">Exorcist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 44</Link><br/>Some inquisitors, as they learn more about the threat of possession and the machinations of the planes, task themselves to expel possessing spirits and conniving outsiders from the world whenever possible. Eventually they learn the secret of the <em>verdicts of exorcism, exile,</em> and <em>anathema.</em></p>
<Ability id="arc-inquisitor-exorcist-verdict-of-exorcism-su" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-exorcist-verdict-of-exorcism-su">Verdict of Exorcism (Su)</Pair>
<Pair hl title="Replaces">Second judgment</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">An inquisitor using <em>judgment</em> can unleash the <em>verdict of exorcism</em> on a creature. When she does, her judgment ends, but the creature is <Link to="/misc/dazed">dazed</Link> for 1 round (Will negates); if the creature is possessed, the possessing entity must succeed at a Will saving throw (DC 10 + 1/2 inquisitor level + inquisitor's Wisdom bonus), or be exorcised and never again allowed in that same body.</Pair>
</Ability>
<Ability id="arc-inquisitor-exorcist-verdict-of-exile-su" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-exorcist-verdict-of-exile-su">Verdict of Exile (Su)</Pair>
<Pair hl title="Replaces">Third judgment</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">An inquisitor using <em>judgment</em> can unleash the <em>verdict of exile</em> on a creature. When she does, her judgment ends, but the creature subject to that judgment is dazed for 1 round (Will negates, DC of 10 + 1/2 inquisitor level + Wisdom bonus). If the creature is possessed or an outsider, the possessing entity or the outsider is affected by <Link to="/spell/dismissal">dismissal</Link> (Will negates).</Pair>
</Ability>
<Ability id="arc-inquisitor-exorcist-closed-mind-su" icon={["armor-upgrade"]}>
<Pair single id="arc-inquisitor-exorcist-closed-mind-su" flavor="An exorcist inquisitor must close off her mind to deny her enemies even a foothold.">Closed Mind (Su)</Pair>
<Pair hl title="Replaces">Slayer</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">The inquisitor becomes immune to compulsion effects and possession attempts (including <Link to="/spell/magic_jar">magic jar</Link>).</Pair>
</Ability>
<Ability id="arc-inquisitor-exorcist-verdict-of-anathema-su" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-exorcist-verdict-of-anathema-su">Verdict of Anathema (Su)</Pair>
<Pair hl title="Replaces">True judgment</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">An inquisitor using <em>judgment</em> can unleash the <em>verdict of anathema</em> on her enemies. When she does, her judgment ends, and all enemy creatures within 10 feet are affected by her <em>verdict of exorcism.</em></Pair>
</Ability>
</>};
const _expulsionist = {title: "Expulsionist", jsx: <><h2 id="arc-inquisitor-expulsionist-expulsionist">Expulsionist</h2>
<p><strong>Sources</strong> <Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook pg. 14</Link><br/>Most common among <Link to="/faith/pharasma">Pharasmins</Link> but found within any faith that loathes undead or evil spirits, expulsionists are inquisitors who seek to rid the material world of the corrupting influences of wicked spirits that twist mortals to their own ends.</p>
<Ability id="arc-inquisitor-expulsionist-expel-spirit-su" icon={["stairs-goal","aura","magic-palm"]}>
<Pair single id="arc-inquisitor-expulsionist-expel-spirit-su">Expel Spirit (Su)</Pair>
<Pair hl title="Replaces">Domain</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">An expulsionist receives <Link to="/feat/alignment_channel">Alignment Channel</Link> and <Link to="/feat/turn_undead">Turn Undead</Link> as bonus feats.</Pair>
<Pair title="Ability">She can <Link to="/ability/channel_energy">channel energy</Link> a number of times per day equal to 3 + her Charisma modifier as per a cleric with an effective level equal to her inquisitor level, but only to harm or turn evil outsiders or undead (treating all evil outsiders as undead creatures for the purpose of determining whether they can be affected by Turn Undead). The DC to save against this ability is equal to 10 + 1/2 the expulsionist's inquisitor level + her Charisma modifier.</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="At 8th Level">An expulsionist can expend one use of her channel energy ability to attempt to force a possessing creature from its host body. The expulsionist must make a melee touch attack against the possessed creature; if successful, the expulsionist deals damage to the possessing creature as if it were targeted by the expulsionist's channel energy ability (regardless of the possessing creature's creature type), and the possession effect ceases as the possessing creature is ejected from the host body. A successful Will save (DC = the expulsionist's channel energy DC) halves the damage taken and negates the expulsion.</Pair>
<Pair title="Special">She can take other feats that add to this ability, such as <Link to="/feat/extra_channel">Extra Channel</Link> or <Link to="/feat/improved_channel">Improved Channel</Link>, but not other feats that fundamentally alter this ability, such as <Link to="/feat/elemental_channel">Elemental Channel</Link>, and she cannot select Alignment Channel multiple times.</Pair>
</Ability>
<Ability id="arc-inquisitor-expulsionist-expulsionist-lore-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-expulsionist-expulsionist-lore-ex">Expulsionist Lore (Ex)</Pair>
<Pair hl title="Replaces">Monster lore</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">An expulsionist gains a bonus equal to 1/2 her inquisitor level (minimum +1) on skill checks to notice <Link to="/rule/haunts">haunts</Link> and incorporeal creatures; on Knowledge (religion) checks to identify the abilities and weaknesses of haunts and incorporeal creatures; and on Sense Motive checks to determine whether a creature is possessed, under the effects of an enchantment or curse, or otherwise magically controlled.</Pair>
</Ability>
<Ability id="arc-inquisitor-expulsionist-spirit-sleuth-ex" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-expulsionist-spirit-sleuth-ex">Spirit Sleuth (Ex)</Pair>
<Pair hl title="Replaces">Discern lies</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Free Action">Upon interacting with a rejuvenating undead (such as a <Link to="/template/ghost">ghost</Link>) or haunt for the first time (such as by attacking the ghost or channeling energy to damage the haunt), an expulsionist can attempt a Sense Motive check to determine the specific course of action required to permanently neutralize the spirit of haunt (DC = 20 + the target's CR).</Pair>
</Ability>
</>};
const _faith_hunter = {title: "Faith Hunter", jsx: <><h2 id="arc-inquisitor-faith_hunter-faith-hunter">Faith Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 28</Link><br/>Certain relentless inquisitors burn with special hatred for an enemy of specific convictions, and they stop at nothing when obsessively hunting these foes down.</p>
<Ability id="arc-inquisitor-faith_hunter-sworn-enemy-sp-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-inquisitor-faith_hunter-sworn-enemy-sp-su">Sworn Enemy (Sp, Su)</Pair>
<Pair hl title="Replaces">Domain, justice and destruction judgments</Pair>
<Pair hl title="Alters">Judgment</Pair>
<Pair title="Choice">A faith hunter chooses a single alignment (such as chaotic evil, rather than simply chaotic or evil) that directly opposes her own along either the law/chaos axis or the good/evil axis (so a lawful good faith hunter can choose chaotic good, chaotic neutral, chaotic evil, neutral evil, or lawful evil, whereas a neutral good faith hunter can only choose chaotic evil, neutral evil, or lawful evil). Creatures of this alignment are her <strong>sworn enemies.</strong></Pair>
<Pair title="Ability">She can detect creatures of the chosen alignment at will, functioning as <Link to="/spell/detect_evil">detect evil</Link>, except this ability works only on creatures and detects the specific alignment.</Pair>
<Pair title="At 6th Level">Once per day as a <strong className="hl">swift action</strong>, a faith hunter can smite one foe she can see. If the foe is of the faith hunter's <em>sworn enemy</em> alignment, the faith hunter gains a +4 sacred bonus on attack rolls against that foe and a sacred bonus equal to half her inquisitor level on damage rolls made against the foe. Smites against targets of the faith hunter's <em>sworn enemy</em> alignment automatically bypass any DR the creature might possess. If the faith hunter targets a creature that is not of her <em>sworn enemy</em> alignment, the smite is wasted with no effect.</Pair>
<Pair title="At 10th Level">A faith hunter can now smite 2 times a day.</Pair>
<Pair title="At 14th Level">A faith hunter can now smite 3 times a day.</Pair>
<Pair title="At 18th Level">A faith hunter can now smite 4 times a day.</Pair>
<Pair title="Special">The smite effect remains until the foe is dead or the next time the faith hunter rests and regains her uses of this ability. At 10th level and every 4 inquisitor levels thereafter, a faith hunter can smite her enemies one additional time per day, to a maximum of four times per day at 18th level. A faith hunter does not gain the justice or destruction judgments.</Pair>
</Ability>
<Ability id="arc-inquisitor-faith_hunter-enemy-revealed-su" icon={["armor-downgrade"]}>
<Pair single id="arc-inquisitor-faith_hunter-enemy-revealed-su">Enemy Revealed (Su)</Pair>
<Pair hl title="Replaces">Detect alignment</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">Wisdom modifier times/day (minimum 1)</Pair>
<Pair title="Ability">When a faith hunter uses her <em>sworn enemy</em> ability to identify a creature's alignment (typically on the third round of concentrating on an area including the creature), she can reveal that creature's alignment aura, causing it to glow for 1 round per inquisitor level so that even creatures with regular vision can see the aura. This not only allows others to recognize the creature's alignment, potentially exposing its true nature, it also allows them to track its location easily by the glow. Even if such a creature is invisible, the telltale glow pinpoints the creature's square or squares.</Pair>
<Pair title="Special">This doesn't take any extra action on her part; this ability is part of the same action as concentrating on her <em>sworn enemy</em> detect ability.</Pair>
</Ability>
<Ability id="arc-inquisitor-faith_hunter-hateful-bane-su" icon={["broken-shield"]}>
<Pair single id="arc-inquisitor-faith_hunter-hateful-bane-su">Hateful Bane (Su)</Pair>
<Pair hl title="Alters">Bane</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A faith hunter's <em>bane</em> ability functions only against creatures that are both the selected creature type and her <em>sworn enemy</em> alignment.</Pair>
</Ability>
</>};
const _green_faith_marshal = {title: "Green Faith Marshal", jsx: <><h2 id="arc-inquisitor-green_faith_marshal-green-faith-marshal">Green Faith Marshal</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 141</Link>, <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 24</Link><br/>The <Link to="/faith/green_faith">Green Faith</Link> marshal serves as a literal force of nature, hunting down and punishing those who have committed sins against nature through enslavement and mistreatment of animals or destruction of wild places.</p>
<Ability id="arc-inquisitor-green_faith_marshal-power-of-nature" icon={["stairs-goal","spell-book"]}>
<Pair single id="arc-inquisitor-green_faith_marshal-power-of-nature">Power of Nature</Pair>
<Pair hl title="Replaces">Stern gaze</Pair>
<Pair hl title="Alters">Domain</Pair>
<Pair title="Ability">A Green Faith marshal gains one domain selected from the <Link to="/ability/druid_domains">animal and terrain domains</Link>. The 1st- through 6th-level bonus spells from this domain are added to the Green Faith marshal's spell list.</Pair>
</Ability>
<Ability id="arc-inquisitor-green_faith_marshal-wild-lore-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-green_faith_marshal-wild-lore-ex">Wild Lore (Ex)</Pair>
<Pair hl title="Replaces">Monster lore</Pair>
<Pair title="Passive Ability">A Green Faith marshal adds her Wisdom modifier to her Knowledge (nature) skill checks, in addition to her Intelligence modifier.</Pair>
</Ability>
<Ability id="arc-inquisitor-green_faith_marshal-natures-ally-sp" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-green_faith_marshal-natures-ally-sp">Nature's Ally (Sp)</Pair>
<Pair hl title="Replaces">Discern lies</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A Green Faith marshal gains the ability to cast <Link to="/spell/commune_with_nature">commune with nature</Link> once per week.</Pair>
</Ability>
<Ability id="arc-inquisitor-green_faith_marshal-wild-step-ex" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-green_faith_marshal-wild-step-ex">Wild Step (Ex)</Pair>
<Pair hl title="Replaces">Stalwart</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">A Green Faith marshal can move through any sort of naturally occurring <Link to="/rule/difficult_terrain">difficult terrain</Link> (such as natural thorns, briars, overgrown areas, and similar terrain) at her normal speed without taking damage or suffering any other impairment. Terrain that is enchanted or magically manipulated to impede motion still affects her.</Pair>
</Ability>
</>};
const _heretic = {title: "Heretic", jsx: <><h2 id="arc-inquisitor-heretic-heretic">Heretic</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 45</Link><br/>While all inquisitors hunt the enemies of the faith, sometimes, either through political maneuvering by her enemies or an unyielding tenacity that breaks her faith's basic tenets, an inquisitor can find herself a heretic. Still unyielding in her cause, these heretics are accustomed to using guile and deception to hide themselves and their activities while they continue to hunt their enemies.</p>
<Ability id="arc-inquisitor-heretic-judgment-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-heretic-judgment-su">Judgment (Su)</Pair>
<Pair title="Ability">A heretic gains the following judgment in addition to the normal list of inquisitor judgments.</Pair>
</Ability>
<Ability id="arc-inquisitor-heretic-escape-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-inquisitor-heretic-escape-su">Escape (Su)</Pair>
<Pair title="Ability">Each time the inquisitor using this judgment hits an opponent with a melee or ranged attack, she can use a <strong className="hl">move action</strong> attempt to create a diversion to hide (see the <Link to="/skill/stealth">Stealth</Link> skill).</Pair>
</Ability>
<Ability id="arc-inquisitor-heretic-lore-of-escape-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-heretic-lore-of-escape-ex" flavor="The heretic uses every trick she knows to escape those now pursuing her.">Lore of Escape (Ex)</Pair>
<Pair hl title="Replaces">Monster lore</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">She adds her Wisdom modifier on Bluff and Stealth skill checks in addition to the normal ability score modifiers.</Pair>
</Ability>
<Ability id="arc-inquisitor-heretic-hide-tracks-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-inquisitor-heretic-hide-tracks-ex" flavor="A heretical inquisitor is adept at hiding her tracks.">Hide Tracks (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Creatures attempting to track her take a -5 penalty on rolls to find or follow her tracks.</Pair>
</Ability>
<h3 id="arc-inquisitor-heretic-ex-inquisitors">Ex-Inquisitors</h3>
<p>An inquisitor who becomes an ex-inquisitor can, with the GM's permission, take the heretic archetype, replacing her class abilities with the appropriate archetype abilities. If the character atones or joins a different faith, she loses her heretic abilities and regains her previous inquisitor class abilities.</p>
</>};
const _hexenhammer = {title: "Hexenhammer", jsx: <><h2 id="arc-inquisitor-hexenhammer-hexenhammer">Hexenhammer</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 52</Link><br/>Some inquisitors embrace the dark powers of their traditional foes, turning such powers toward their own ends in order to pronounce judgment on those who oppose them. These inquisitors learn to use the hexes and some spells of witches, but must pay the price for dealing with supernatural powers, as they slip ever closer to the evil they seek to destroy.</p>
<Ability id="arc-inquisitor-hexenhammer-withering-gaze-su" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-hexenhammer-withering-gaze-su" flavor="Hexenhammers study the effects of a witch's evil eye, and can use this dark magic to steel their gaze in a similar manner.">Withering Gaze (Su)</Pair>
<Pair hl title="Replaces">Monster lore, stern gaze</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Whenever a hexenhammer successfully demoralizes a creature as a standard action, instead of applying the <Link to="/misc/shaken">shaken</Link> condition, she can apply the effects of the witch <Link to="/hex/evil_eye">evil eye</Link> hex as if she were a 1st-level witch (save DC = 10 + 1/2 the hexenhammer's inquisitor level + her Wisdom modifier).</Pair>
</Ability>
<Ability id="arc-inquisitor-hexenhammer-pride-and-penance-ex" icon={["broken-shield"]}>
<Pair single id="arc-inquisitor-hexenhammer-pride-and-penance-ex" flavor="Hexenhammers are deeply conflicted about their dealings with dark powers.">Pride and Penance (Ex)</Pair>
<Pair hl title="Alters">Domain</Pair>
<Pair title="Info">If a hexenhammer uses a hex or casts a spell gained from the <Link to="/main/witch_spell">witch class spell list</Link>, she temporarily loses access to her domain abilities and her <em>cunning mind</em> bonus until she undergoes a brief period of penance and atonement that takes 1 minute of quiet prayer and contemplation; this atonement doesn't require any additional cost, and it automatically restores the lost abilities, regardless of how many times the hexenhammer uses her dark powers. If the hexenhammer uses her <em>dark trade</em> ability (see below) to trade uses of judgment for hexes, she loses access to her domain abilities and <em>cunning mind</em> bonus until the next time she regains her spell slots for the day.</Pair>
</Ability>
<Ability id="arc-inquisitor-hexenhammer-cunning-mind-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-inquisitor-hexenhammer-cunning-mind-ex">Cunning Mind (Ex)</Pair>
<Pair hl title="Replaces">Cunning initiative</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A hexenhammer gains a +2 bonus on saving throws against hexes, curses, spells of the necromancy school, and spells with the evil descriptor.</Pair>
</Ability>
<Ability id="arc-inquisitor-hexenhammer-hexcrafter-su" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-hexenhammer-hexcrafter-su" flavor="A hexenhammer learns to turn some powers of witches to her own advantage.">Hexcrafter (Su)</Pair>
<Pair hl title="Replaces">Teamwork feats</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">She learns either the <Link to="/hex/blight">blight</Link>, the <Link to="/hex/misfortune">misfortune</Link>, or the <Link to="/hex/slumber">slumber</Link> hex from the witch's hex list, and can use that hex once per day as a <strong className="hl">standard action</strong>, using her inquisitor level in place of a witch level. If the hex allows a saving throw, the save DC to resist the hex is equal to 10 + 1/2 the inquisitor's level + the inquisitor's Wisdom modifier.</Pair>
<Pair title="At 6th Level">The hexenhammer learns a 2nd hex from her list of available hexes.</Pair>
<Pair title="At 9th Level">The hexenhammer can use any one of her hexes one additional time per day.</Pair>
<Pair title="At 12th Level">The hexenhammer gains a 3rd hex from her list of available hexes. The hexenhammer adds the <Link to="/hex/agony">agony</Link>, <Link to="/hex/nightmares">nightmares</Link>, and <Link to="/hex/retribution">retribution</Link> major hexes to that list.</Pair>
<Pair title="At 15th Level">The hexenhammer learns a 4th hex from her list of available hexes.</Pair>
<Pair title="At 18th Level">She can use any one of her hexes an additional time per day.</Pair>
</Ability>
<Ability id="arc-inquisitor-hexenhammer-dark-trade-su" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-hexenhammer-dark-trade-su" flavor="A hexenhammer can forgo the power of her judgments and succumb to the temptation of darker powers.">Dark Trade (Su)</Pair>
<Pair hl title="Replaces">Solo tactics</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">She can trade a daily use of judgment to instead gain an additional use of one of her hexes.</Pair>
</Ability>
<Ability id="arc-inquisitor-hexenhammer-witchcraft-ex" icon={["spell-book"]}>
<Pair single id="arc-inquisitor-hexenhammer-witchcraft-ex">Witchcraft (Ex)</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">And at every 3 inquisitor levels thereafter, a hexenhammer can learn a witch spell in place of a spell she already knows. In effect, she loses an old spell in exchange for a new one selected from the <Link to="/main/spells_witch">witch</Link> class spell list. The new spell's level must be the same as that of the spell being exchanged, and it must be at least 1 level lower than the highest-level inquisitor spell she can cast.</Pair>
<Pair title="At 8th Level">She can learn a 2nd spell, as above.</Pair>
<Pair title="At 11th Level">She can learn a 3rd spell, as above.</Pair>
<Pair title="At 14th Level">She can learn a 4th spell, as above.</Pair>
<Pair title="At 17th Level">She can learn a 5th spell, as above.</Pair>
<Pair title="At 20th Level">She can learn a 6th spell, as above.</Pair>
<Pair title="Special">The hexenhammer can swap out only a single spell at any given level and must choose whether or not to swap the spell at the same time she gains new spells known for the level.</Pair>
</Ability>
</>};
const _iconoclast = {title: "Iconoclast", jsx: <><h2 id="arc-inquisitor-iconoclast-iconoclast">Iconoclast</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 52</Link><br/>Some magic items are heretical by nature, enabling the unfaithful to spread wickedness. Iconoclasts seek out and remove such crutches, cleansing the taint these items exude.</p>
<Ability id="arc-inquisitor-iconoclast-shake-effects-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-inquisitor-iconoclast-shake-effects-ex">Shake Effects (Ex)</Pair>
<Pair hl title="Replaces">Monster lore</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">An iconoclast gains a +2 bonus on all saving throws against effects that come from a magic item.</Pair>
</Ability>
<Ability id="arc-inquisitor-iconoclast-detect-magic-sp" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-iconoclast-detect-magic-sp">Detect Magic (Sp)</Pair>
<Pair hl title="Replaces">Detect alignment</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">An iconoclast gains the ability to <Link to="/spell/detect_magic">detect magic</Link> at will.</Pair>
</Ability>
<Ability id="arc-inquisitor-iconoclast-dispelling-attack-sp" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-iconoclast-dispelling-attack-sp">Dispelling Attack (Sp)</Pair>
<Pair hl title="Replaces">Discern lies</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">Once per day, an iconoclast can make a melee or ranged attack against an opponent, and if she hits, she can affect that opponent as if she had cast <Link to="/spell/dispel_magic">dispel magic</Link>, using the targeted dispel option. If she misses, this ability is wasted. Use her inquisitor level as the caster level of the dispel magic effect.</Pair>
</Ability>
<Ability id="arc-inquisitor-iconoclast-negating-critical-sp" icon={["armor-downgrade"]}>
<Pair single id="arc-inquisitor-iconoclast-negating-critical-sp">Negating Critical (Sp)</Pair>
<Pair hl title="Replaces">Exploit weakness</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">When an iconoclast confirms a critical hit, the creature she hit must succeed at a Fortitude save at DC 10 + 1/2 the iconoclast's caster level + the iconoclast's Wisdom modifier for each non-artifact magic item the target is wearing or carrying. On a failed saving throw, the target of the critical hit can neither use nor gain benefit from any <Link to="/misc/minor_magic_item">minor magic item</Link> for 1d4 rounds. This ability can be used in conjunction with critical feats.</Pair>
</Ability>
<Ability id="arc-inquisitor-iconoclast-destroy-artifact-sp" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-iconoclast-destroy-artifact-sp">Destroy Artifact (Sp)</Pair>
<Pair hl title="Replaces">True judgment</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">An iconoclast has the ability to destroy minor <Link to="/rule/artifacts">artifacts</Link>. The iconoclast must have possession of the minor artifact for at least a week, which she must spend in uninterrupted contemplation of the nature of the artifact. At the end of that week, she makes a DC 30 Spellcraft check to unweave the fabric of the item, and if she is successful, the artifact is destroyed. If the iconoclast fails, she cannot try to destroy the artifact again with this ability, but another iconoclast can.</Pair>
</Ability>
</>};
const _immolator = {title: "Immolator", jsx: <><h2 id="arc-inquisitor-immolator-immolator">Immolator</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 128</Link><br/>The immolator puts her pyromaniacal urges to work in the service of a deity. She brings burning retribution down upon the enemies of her faith, consigning their souls to the sacrificial flames. An immolator has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-inquisitor-immolator--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><ul><li><Link to="/race/ifrit">Ifrit</Link></li><li>Must worship a deity whose portfolio includes the <Link to="/domain/fire">Fire</Link> domain</li></ul></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-inquisitor-immolator-servant-of-the-flame" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-immolator-servant-of-the-flame">Servant of the Flame</Pair>
<Pair title="Passive Ability">An immolator who selects the Fire domain (or one of its associated subdomains, if available) uses her domain powers at +1 caster level (this stacks with the ifrit's fire affinity racial trait).</Pair>
</Ability>
<Ability id="arc-inquisitor-immolator-judgment-su" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-inquisitor-immolator-judgment-su">Judgment (Su)</Pair>
<Pair hl title="Replaces">Smiting judgment</Pair>
<Pair title="Info">An immolator gains the following judgment.</Pair>
</Ability>
<Ability id="arc-inquisitor-immolator-immolation" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-inquisitor-immolator-immolation" flavor="The immolator channels purifying flame to consume her enemies.">Immolation</Pair>
<Pair title="Passive Ability">When dealing fire damage to an opponent, she treats the target's fire resistance as 5 lower than normal (minimum 0).</Pair>
<Pair title="At 6th Level">She treats the target's resistance as 10 lower than normal.</Pair>
<Pair title="At 11th Level">She treats the target's resistance as 15 lower than normal.</Pair>
<Pair title="At 16th Level">She treats the target's resistance as 20 lower than normal.</Pair>
</Ability>
<Ability id="arc-inquisitor-immolator-burnt-offering-su" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-immolator-burnt-offering-su">Burnt Offering (Su)</Pair>
<Pair hl title="Replaces">Bane, greater bane</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 round/day per inquisitor level; these rounds need not be consecutive</Pair>
<Pair title="Swift Action">An immolator can imbue one of her weapons with the <Link to="/magic-enh/flaming">flaming</Link> weapon special ability. Any creature slain by this weapon burns with magical flame; its body turns to ash, though its equipment is not harmed. This special ability only functions while the immolator wields the weapon.</Pair>
<Pair title="At 12th Level">This ability gives the immolator's weapon the <Link to="/magic-enh/flaming_burst">flaming burst</Link> weapon special ability.</Pair>
</Ability>
<Ability id="arc-inquisitor-immolator-judgment-by-fire-su" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-immolator-judgment-by-fire-su" flavor="An immolator can call fiery judgment down upon a foe during combat.">Judgment by Fire (Su)</Pair>
<Pair hl title="Alters">True judgment</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Swift Action">Whenever an immolator uses her judgment ability, she can invoke a judgment by fire on a foe. Once declared, the immolator can make a single melee (or ranged attack, if the foe is within 30 feet) against the target. If the attack hits, the attack deals fire damage instead of weapon damage, and the target must make a successful Fortitude save or die (creatures immune to fire do not have to save). The DC of this save is equal to 10 + 1/2 the immolator's level + the immolator's Wisdom modifier. Regardless of whether the save is successful, the target creature is immune to the immolator's judgment by fire ability for 24 hours.</Pair>
<Pair title="Special">Creatures killed in this manner explode in a burst of fire, dealing 10d6 points of fire damage to every creature within 5 feet (Reflex save for half damage, DC 10 + 1/2 the immolator's level + the immolator's Wisdom modifier). Once this ability has been used, it cannot be used again for 1d4 rounds. This ability otherwise functions as <em>true judgment.</em></Pair>
</Ability>
</>};
const _infiltrator = {title: "Infiltrator", jsx: <><h2 id="arc-inquisitor-infiltrator-infiltrator">Infiltrator</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 45</Link><br/>This inquisitor uses guile and deception to blend in among the enemies of the faith rather than confronting them head-on.</p>
<Ability id="arc-inquisitor-infiltrator-misdirection-sp" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-infiltrator-misdirection-sp">Misdirection (Sp)</Pair>
<Pair hl title="Alters">Stern gaze</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Each day when the infiltrator prepares spells, she may choose an alignment. She detects as that alignment as if she had used <Link to="/spell/misdirection">misdirection</Link> on a creature with that alignment (this does not change any divination results about her other than her alignment).</Pair>
</Ability>
<Ability id="arc-inquisitor-infiltrator-guileful-lore-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-infiltrator-guileful-lore-ex" flavor="The infiltrator's will is bent toward subterfuge and deception.">Guileful Lore (Ex)</Pair>
<Pair hl title="Replaces">Monster lore</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">She adds her Wisdom modifier on Bluff and Diplomacy skill checks in addition to the normal ability score modifiers.</Pair>
</Ability>
<Ability id="arc-inquisitor-infiltrator-forbidden-lore-ex" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-infiltrator-forbidden-lore-ex" flavor="While other inquisitors learned to track unbelievers, an infiltrator learns how to cast their spells.">Forbidden Lore (Ex)</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair title="Ability">An infiltrator can cast spells of an alignment opposed to her or her deity (ignoring the restriction in the Chaotic, Evil, Good, and Lawful Spells class ability).</Pair>
</Ability>
<Ability id="arc-inquisitor-infiltrator-necessary-lies-su" icon={["armor-upgrade"]}>
<Pair single id="arc-inquisitor-infiltrator-necessary-lies-su">Necessary Lies (Su)</Pair>
<Pair hl title="Replaces">Discern lies</Pair>
<Pair title="Passive Ability">An infiltrator adds her class level on saving throws against abilities that detect lies or reveal or force the truth, such as <Link to="/spell/discern_lies">discern lies</Link> and <Link to="/spell/zone_of_truth">zone of truth</Link>.</Pair>
</Ability>
</>};
const _keeper_of_construct = {title: "Keeper of Construct", jsx: <><h2 id="arc-inquisitor-keeper_of_construct-keeper-of-construct">Keeper of Construct</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 27</Link><br/>Some of Brigh's inquisitors, and occasionally those who follow Torag, track down malicious construct crafters and fight renegade constructs with unrivaled expertise.</p>
<Ability id="arc-inquisitor-keeper_of_construct-penetrating-blows-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-keeper_of_construct-penetrating-blows-ex" flavor="A keeper of constructs' attacks are divinely guided to pierce the defenses of constructs.">Penetrating Blows (Ex)</Pair>
<Pair hl title="Replaces">Domain</Pair>
<Pair title="Passive Ability">The keeper of constructs treats her weapons as <Link to="/eq-material/adamantine">adamantine</Link> for the purpose of overcoming damage reduction when attacking constructs.</Pair>
<Pair title="At 8th Level">She ignores the first 5 points of DR or hardness when attacking constructs.</Pair>
<Pair title="At 16th Level">She ignores the first 10 points of DR or hardness when attacking constructs.</Pair>
</Ability>
<Ability id="arc-inquisitor-keeper_of_construct-construct-influence-ex" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-keeper_of_construct-construct-influence-ex" flavor="A keeper of constructs' knowledge of constructs' inner workings allows her to gain an upper hand over constructs.">Construct Influence (Ex)</Pair>
<Pair hl title="Replaces">Stern gaze</Pair>
<Pair title="Ability">She can use the <Link to="/skill/intimidate">Intimidate</Link> skill to demoralize constructs, and when she attempts to do so, she gains a bonus on the check equal to half her inquisitor level (minimum 1).</Pair>
</Ability>
<Ability id="arc-inquisitor-keeper_of_construct-construct-lore-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-keeper_of_construct-construct-lore-ex">Construct Lore (Ex)</Pair>
<Pair hl title="Replaces">Monster lore</Pair>
<Pair title="Passive Ability">A keeper of constructs adds twice her Wisdom modifier plus her Intelligence modifier as a bonus when attempting Knowledge checks to identify the abilities and weaknesses of constructs.</Pair>
</Ability>
<Ability id="arc-inquisitor-keeper_of_construct-wrest-control-sp" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-keeper_of_construct-wrest-control-sp">Wrest Control (Sp)</Pair>
<Pair hl title="Replaces">Exploit weakness</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Usage">Three times per day</Pair>
<Pair title="Standard Action">The keeper of constructs can issue a command to a construct. This functions as a <Link to="/spell/suggestion">suggestion</Link> spell that is <Link to="/misc/dismissible">dismissible</Link>, affects the construct despite its normal immunity to mind-affecting effects, and has a caster level equal to the keeper of constructs' inquisitor level. The construct can resist the command with a successful Will saving throw (DC = 10 + half the keeper of constructs' inquisitor level + her Wisdom modifier). A construct that successfully saves is immune to this ability for the following 24 hours. This effect immediately ends if the construct is attacked while under its influence.</Pair>
<Pair title="Special">If an affected construct was being controlled by a creature, that individual can regain control of the construct with a successful Charisma check (attempting this check requires a standard action) opposed by the inquisitor's Charisma check. On a success, the original creature regains full control of the construct and this effect ends.</Pair>
</Ability>
</>};
const _keeper_of_the_current = {title: "Keeper of the Current", jsx: <><h2 id="arc-inquisitor-keeper_of_the_current-keeper-of-the-current">Keeper of the Current</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea pg. 24</Link><br/>Aquatic creatures worship many different deities and powers based on their alignment, their community, and their culture, including <Link to="/faith/gozreh">Gozreh</Link>, <Link to="/faith/hei_feng">Hei Feng</Link>, <Link to="/faith/kelizandri">Kelizandri</Link>, and the fearsome demon lord <Link to="/faith/dagon">Dagon</Link>. These deities all have organized churches beneath the waves that engage zealous followers to hunt down apostates and enemies. Regardless of their faith, these undersea zealots are known as keepers of the current.</p>
<Ability id="arc-inquisitor-keeper_of_the_current-underwater-hunter-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-keeper_of_the_current-underwater-hunter-ex" flavor="Tracking creatures underwater is particularly challenging, but a keeper of the current can read traces of eddies in the water to follow her prey.">Underwater Hunter (Ex)</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair title="Passive Ability">A keeper of the current adds her level as a bonus on Survival checks to follow creatures underwater. She gains no bonus when finding or following tracks out of the water.</Pair>
</Ability>
<Ability id="arc-inquisitor-keeper_of_the_current-marine-magic" icon={["spell-book"]}>
<Pair single id="arc-inquisitor-keeper_of_the_current-marine-magic">Marine Magic</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A keeper of the current can learn a spell with the water descriptor from the <Link to="/main/spells_cleric">cleric</Link>, <Link to="/main/spells_druid">druid</Link>, inquisitor, or <Link to="/main/wizard_spell">wizard spell list</Link> in place of a spell she already knows. In effect, she loses an old spell in exchange for a new one. The new spell's level must be the same as that of the spell being exchanged, and it must be at least 1 level lower than the highest-level inquisitor spell she can cast.</Pair>
<Pair title="At 8th Level">She can swap out a 2nd spell, following the resrictions above.</Pair>
<Pair title="At 11th Level">She can learn a 3rd spell, following the resrictions above.</Pair>
<Pair title="At 14th Level">She can swap out a 4th spell, following the resrictions above.</Pair>
<Pair title="At 17th Level">She can learn a 5th spell, following the resrictions above.</Pair>
<Pair title="At 20th Level">She can swap out a 6th spell, following the resrictions above.</Pair>
<Pair title="Special">The keeper of the current can swap out only a single spell at any given level and must choose whether to swap the spell at the same time she gains new spells known for the level.</Pair>
</Ability>
<Ability id="arc-inquisitor-keeper_of_the_current-rudderless-attack-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-inquisitor-keeper_of_the_current-rudderless-attack-ex">Rudderless Attack (Ex)</Pair>
<Pair hl title="Replaces">Discern lies</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">An opponent that takes extra damage from the keeper of the current's <em>bane</em> or <em>greater bane</em> ability has its swim speed halved for 1d4 rounds. A successful Fortitude saving throw (DC = 10 + half the inquisitor's level + her Wisdom modifier) negates this effect. If the keeper of the current targets a creature already affected by this ability, its swim speed is not further reduced but the duration of the effect is extended by 1d4 rounds.</Pair>
</Ability>
</>};
const _kinslayer = {title: "Kinslayer", jsx: <><h2 id="arc-inquisitor-kinslayer-kinslayer">Kinslayer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 98</Link><br/>Appalled and guilt-ridden by the horrific circumstances of her birth, a kinslayer dedicates herself to eradicating the very creatures whose blood flows within her veins. She spends her life hunting and slaying those vampiric monsters for whom humans have become prey. A kinslayer has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-inquisitor-kinslayer--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/dhampir">Dhampir</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-inquisitor-kinslayer-judgment-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-kinslayer-judgment-su">Judgment (Su)</Pair>
<Pair hl title="Replaces"><em>Destruction</em> judgment</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Info">A kinslayer gains the following judgment.</Pair>
</Ability>
<Ability id="arc-inquisitor-kinslayer-slayers-brand-su" extraClasses="subAbility" icon={["magic-palm","magic-swirl"]}>
<Pair single id="arc-inquisitor-kinslayer-slayers-brand-su">Slayer's Brand (Su)</Pair>
<Pair title="Ability">When using this judgment, the kinslayer gains the ability to brand undead creatures with positive energy. To do so, she must make a successful melee touch attack against the undead creature. This attack deals an amount of positive energy damage equal to 1d6 + the kinslayer's Charisma modifier, and burns her personal symbol into the undead creature's flesh, bone, or even its incorporeal form. From that point onward, the kinslayer can sense the existence of the branded creature as if it were the target of a <Link to="/spell/locate_creature">locate creature</Link> spell (caster level equal to 1/2 the kinslayer's inquisitor level).</Pair>
<Pair title="Special">A <em>slayer's brand</em> lasts until the undead creature is destroyed or until the kinslayer uses this ability on another creature.</Pair>
</Ability>
<Ability id="arc-inquisitor-kinslayer-greater-brand-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-kinslayer-greater-brand-su" flavor={<>A kinslayer learns to modify her <em>slayer's brand</em> judgment as she gains levels.</>}>Greater Brand (Su)</Pair>
<Pair hl title="Alters">Teamwork feats</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Whenever she gains the ability to learn a teamwork feat, she can instead opt to learn one of the following modifications to her <em>slayer's brand</em> judgment.</Pair>
<Pair title="Special">Each time the kinslayer opts to take a greater brand, it replaces her ability to gain a teamwork feat at that level.</Pair>
</Ability>
<Ability id="arc-inquisitor-kinslayer-branding-ray" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="arc-inquisitor-kinslayer-branding-ray">Branding Ray</Pair>
<Pair title="Ability">The <em>slayer's brand</em> judgment can be used as a ranged touch attack with a range of 20 feet.</Pair>
<Pair title="Special">A kinslayer can take this modification more than once. Whenever she does, she increases the range of her <em>brand</em> by 20 feet.</Pair>
</Ability>
<Ability id="arc-inquisitor-kinslayer-debilitating-brand" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-inquisitor-kinslayer-debilitating-brand">Debilitating Brand</Pair>
<Pair title="Passive Ability">A creature currently affected by the <em>slayer's brand</em> judgment takes a -2 penalty on attack rolls against the kinslayer who placed the <em>brand.</em></Pair>
</Ability>
<Ability id="arc-inquisitor-kinslayer-devastating-brand" extraClasses="subAbility" icon={["armor-downgrade","upgrade"]}>
<Pair single id="arc-inquisitor-kinslayer-devastating-brand">Devastating Brand</Pair>
<Pair title="Ability">When the kinslayer attacks a creature that she has branded with her <em>slayer's brand,</em> she threatens a critical hit on a roll of 19-20. If the kinslayer is good, she also gains a +2 sacred bonus on all rolls to confirm critical hits on a branded creature.</Pair>
</Ability>
<Ability id="arc-inquisitor-kinslayer-dual-brand" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-kinslayer-dual-brand">Dual Brand</Pair>
<Pair title="Ability">The kinslayer can have up to two creatures branded at a time.</Pair>
</Ability>
<Ability id="arc-inquisitor-kinslayer-holy-brand" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-kinslayer-holy-brand">Holy Brand</Pair>
<Pair title="Ability">The kinslayer can use her <em>brand</em> on creatures with the evil subtype as well as undead.</Pair>
</Ability>
<Ability id="arc-inquisitor-kinslayer-searing-brand" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-kinslayer-searing-brand">Searing Brand</Pair>
<Pair title="Prerequisites">6th-Level Inquisitor</Pair>
<Pair title="Ability">The kinslayer's <em>slayer's brand</em> deals an additional 1d6 points of damage for every five inquisitor levels she has. If the creature hit with the <em>slayer's brand</em> is particularly vulnerable to bright light, the damage dice of her <em>slayer's brand</em> increases to d8s.</Pair>
</Ability>
<Ability id="arc-inquisitor-kinslayer-silver-brand" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-kinslayer-silver-brand">Silver Brand</Pair>
<Pair title="Ability">The kinslayer can use her <em>brand</em> on lycanthropes and creatures with vulnerability to silver as well as undead.</Pair>
</Ability>
<Ability id="arc-inquisitor-kinslayer-undead-sense-sp" icon={["magic-swirl","upgrade"]}>
<Pair single id="arc-inquisitor-kinslayer-undead-sense-sp">Undead Sense (Sp)</Pair>
<Pair hl title="Replaces">Detect alignment</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A kinslayer gains the ability to use <Link to="/spell/detect_undead">detect undead</Link> as a spell-like ability (caster level equal to the kinslayer's inquisitor level) at will. If she detects the presence of undead, she can use her <em>monster lore</em> ability to attempt to determine the type of undead detected as well as to reveal any strengths or weaknesses the undead might have. If any of the detected undead are vampires, she gains a bonus on the check equal to her inquisitor level to immediately identify them as such.</Pair>
</Ability>
</>};
const _living_grimoire = {title: "Living Grimoire", jsx: <><h2 id="arc-inquisitor-living_grimoire-living-grimoire">Living Grimoire</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 53</Link><br/>The living grimoire literally wields the sacred word of his deity, using his holy tome to smite the foes of his god with divine might. Unlike most inquisitors, a living grimoire focuses on careful study of divine scripture, valuing knowledge over intuition.</p>
<Ability id="arc-inquisitor-living_grimoire-holy-book-su" icon={["mailed-fist","magic-swirl"]}>
<Pair single id="arc-inquisitor-living_grimoire-holy-book-su" flavor="A living grimoire forms a supernatural bond with a large ironbound tome containing the holy text of his deity and learns to use it as a weapon.">Holy Book (Su)</Pair>
<Pair hl title="Replaces">Monster lore</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">When wielding the <em>holy book</em> as a weapon, he deals base damage as if it were a <Link to="/eq-material/cold_iron">cold iron</Link> <Link to="/eq-weapon/light_mace">light mace</Link> (but see <em>Sacred Word</em> below), is considered proficient with the book, takes no <Link to="/misc/improvised_weapon">improvised weapon</Link> penalty, and gains a +1 bonus on attack rolls with the book. The tome serves as his holy symbol and divine focus, and can be enchanted as a magic weapon. He can replace his bonded tome with another book at any time, though he must perform a 24-hour binding ritual to attune himself to the new book.</Pair>
</Ability>
<Ability id="arc-inquisitor-living_grimoire-spells" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-living_grimoire-spells">Spells</Pair>
<Pair hl title="Replaces">Cunning initiative</Pair>
<Pair hl title="Alters">Orisons, spellcasting</Pair>
<Pair title="Ability"><p>A living grimoire must prepare his spells ahead of time, and can know any number of inquisitor spells. He uses Intelligence instead of Wisdom as his key spellcasting ability score (to determine his spell DCs, <Link to="/rule/bonus_spells">bonus spells</Link> per day, modifier on concentration checks, and so on), and to determine the effects and number of uses of his domain powers.</p>
<p>The living grimoire receives the same number of spell slots per day as a <Link to="/class/warpriest">warpriest</Link> of his inquisitor level, and receives bonus spells per day if he has a high Intelligence score. He must choose and prepare his spells ahead of time by choosing a time each day for 1 hour of quiet contemplation while he studies his <em>holy book.</em></p>
<p>At 1st level, the living grimoire's <em>holy book</em> contains all 0-level inquisitor spells plus three 1st-level inquisitor spells of his choice. He also selects a number of additional 1st-level inquisitor spells equal to his Intelligence modifier to add to his <em>holy book.</em> At each new inquisitor level, he gains two new inquisitor spells of any spell levels he can cast (based on his new inquisitor level) for his <em>holy book.</em> At any time, he can learn inquisitor spells from scrolls or other written sources and add inquisitor spells he finds to his <em>holy book.</em></p>
</Pair>
</Ability>
<Ability id="arc-inquisitor-living_grimoire-sacred-word-su" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-living_grimoire-sacred-word-su">Sacred Word (Su)</Pair>
<Pair hl title="Replaces">Judgment</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">1 round/day per inquisitor level; these rounds need not be consecutive</Pair>
<Pair title="Ability">A living grimoire learns to charge his <em>holy book</em> with the power of his faith. The inquisitor gains the benefits of the warpriest's <em>sacred weapon</em> class ability, but the benefits apply only to his bonded <em>holy book.</em> Like a warpriest's <em>sacred weapon,</em> the living grimoire's <em>book</em> deals damage based on the inquisitor's level, not the <em>book's</em> base damage (unless the inquisitor chooses to use the <em>book's</em> base damage).</Pair>
<Pair title="At 4th Level">The living grimoire gains the ability to enhance his <em>holy book</em> with divine power as a <strong className="hl">swift action</strong>. This ability grants the <em>holy book</em> an enhancement bonus equal to <Link to="/misc/one_fourth">one-fourth</Link> of her inquisitor level. This bonus stack with any existing bonuses the <em>holy book</em> might have, to a maximum of +5. The living grimoire can enhance his <em>holy book</em> to have any of the special abilities listed in the warpriest's <em>sacred weapon</em> ability, subject to the same alignment restrictions, but adds <Link to="/magic-enh/bane">bane</Link> to the general special ability list. Adding any of these special abilities to the <em>holy book</em> consumes an amount of enhancement bonus equal to the special ability's base price modifier. The <em>holy book</em> must have at least a +1 enhancement bonus before the living grimoire can add any special abilities to it.</Pair>
<Pair title="Special">As with the warpriest <em>sacred weapon</em> ability, he determines the enhancement bonus and special abilities the first time he uses the ability each day, and they cannot be changed until the next day.</Pair>
</Ability>
<Ability id="arc-inquisitor-living_grimoire-blessed-script-su" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-living_grimoire-blessed-script-su">Blessed Script (Su)</Pair>
<Pair hl title="Replaces">Bane, greater bane, second judgment, third judgment</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A living grimoire can permanently tattoo one spell of 2nd level or lower from his <em>holy book</em> onto his body. The tattooed spell cannot have an expensive material component or focus. The living grimoire can prepare any tattooed spell without needing his <em>holy book,</em> and can cast his tattooed spells as a spell-like ability once per day.</Pair>
<Pair title="At 8th Level">The living grimoire can tattoo one additional spell of 3rd level or lower upon himself.</Pair>
<Pair title="At 12th Level">He can tattoo one additional spell of 4th level or lower upon himself.</Pair>
<Pair title="At 16th Level">He can tattoo a final additional spell of any level upon himself.</Pair>
<Pair title="Special">When the living grimoire uses these spell-like abilities, the tattooed holy script associated with the spell-like ability glows as per <Link to="/spell/light">light</Link> for a number of rounds equal to the spell's level.</Pair>
</Ability>
<Ability id="arc-inquisitor-living_grimoire-word-of-god-su" icon={["mailed-fist"]}>
<Pair single id="arc-inquisitor-living_grimoire-word-of-god-su" flavor="A living grimoire can smite his foes with the holy word of his deity.">Word of God (Su)</Pair>
<Pair hl title="Replaces">True judgment</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Usage">Up to seven times per day.</Pair>
<Pair title="Ability">The inquisitor can make a single melee attack with his <em>holy book</em> against a target. If the attack hits, it deals damage normally and the target must succeed at a Fortitude save or die (DC = 10 + 1/2 the living grimoire's inquisitor level + his Intelligence modifier). Regardless of whether the save is successful, the target creature is immune to the living grimoire's word of god ability for 24 hours.</Pair>
<Pair title="Special">Once the living grimoire uses this ability, he can't use it again for 1d4 rounds.</Pair>
</Ability>
</>};
const _monster_tactician = {title: "Monster Tactician", jsx: <><h2 id="arc-inquisitor-monster_tactician-monster-tactician">Monster Tactician</h2>
<p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook pg. 7</Link><br/>While most inquisitors have learned to take advantage of the movements of their opponents and allies in combat, some instead summon creatures as a means of claiming strategic advantage, exploiting the mystic connection between themselves and their summoned creatures to impart a bit of their own tactical knowledge.</p>
<Ability id="arc-inquisitor-monster_tactician-summon-monster-sp" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-monster_tactician-summon-monster-sp">Summon Monster (Sp)</Pair>
<Pair hl title="Replaces">Judgment</Pair>
<Pair title="At 1st Level">A monster tactician can cast <Link to="/spell/summon_monster_i">summon monster I</Link> as a spell-like ability. She can cast this spell as a <strong className="hl">standard action</strong>, and the creatures remain for 1 minute per level (instead of 1 round per level). <strong>At 3rd level</strong> and <strong>every 2</strong> inquisitor levels thereafter, the power of this ability increases by 1 spell level, allowing her to summon more powerful creatures (to a maximum of <Link to="/spell/summon_monster_ix">summon monster IX</Link> at 17th level).</Pair>
<Pair title="Usage">3 + Wisdom modifier times/day</Pair>
<Pair title="At 2nd Level">Beginning at <strong>2nd level</strong> and <strong>each level</strong> thereafter, the monster tactician can add one monster from the <Link to="/feat/expanded_summon_monster">Expanded Summon Monster</Link> list to her list of available summoned creatures. She can add a new option to any <em>summon monster</em> spell she can cast at the time she chooses the monster; once made, these choices cannot be changed.</Pair>
<Pair title="Special">A monster tactician cannot have more than one <em>summon monster</em> spell active in this way at a time; if she uses another, any existing <em>summon monster</em> immediately ends. These <em>summon monster</em> spells are considered to be part of the monster tactician's spell list for the purposes of spell trigger and spell completion items. In addition, she can expend uses of this ability to fulfill the construction requirements of any magic items she creates, so long as she can use this ability to cast the required spells</Pair>
</Ability>
<Ability id="arc-inquisitor-monster_tactician-summon-tactics-su" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-monster_tactician-summon-tactics-su">Summon Tactics (Su)</Pair>
<Pair hl title="Replaces">Discern lies, second judgment, third judgment, slayer, true judgment</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">Every time a monster tactician casts a summoning spell, she can choose any one teamwork feat she knows. All creatures summoned by the spell are treated as if they had the chosen feat for all purposes, without needing to meet any prerequisites.</Pair>
<Pair title="At 8th Level">She can choose two different teamwork feats.</Pair>
<Pair title="At 16th Level">She can choose three teamwork feats. She cannot choose the same feat twice.</Pair>
<Pair title="At 20th Level">All creatures summoned by the spell are treated as if they knew all of the monster tactician's teamwork feats.</Pair>
</Ability>
</>};
const _oathkeeper = {title: "Oathkeeper", jsx: <><h2 id="arc-inquisitor-oathkeeper-oathkeeper">Oathkeeper</h2>
<p><strong>Sources</strong> <Link to="/source/merchants_manifest">Merchant's Manifest pg. 30</Link><br/>Servants of gods who hold oaths to be sacrosanct, oathkeepers formally oversee the creation of bargains and personally hunt down those who dare to violate them. Many of these inquisitors previously oversaw religious vows in more formal settings, though more pursue more lucrative contracts. Wronged merchants or cheated customers often seek out oathkeepers to bring justice when local authorities fail.</p>
<Ability id="arc-inquisitor-oathkeeper-alignment" icon={["hazard-sign"]}>
<Pair single id="arc-inquisitor-oathkeeper-alignment">Alignment</Pair>
<Pair hl title="Alters">Alignment requirements</Pair>
<Pair title="Info">An oathkeeper must be of a lawful alignment, and her alignment must be within one step of her deity's.</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-inquisitor-oathkeeper-undefined">
<Pair id="arc-inquisitor-oathkeeper-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/appraise">Appraise</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (nature)</Pair></Ability>
<Ability id="arc-inquisitor-oathkeeper-divine-witness-su" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-oathkeeper-divine-witness-su">Divine Witness (Su)</Pair>
<Pair hl title="Replaces">Monster lore</Pair>
<Pair title="Ability"><p>Every oathkeeper inquisitor develops a unique personal symbol, which she can use to seal an agreement between two or more willing parties. The agreement, whether it's a trade contract, a truce, or a political marriage, must be as detailed as possible and then signed in the oathkeeper's presence by every creature involved. Creatures must sign of their own free will - any magical or physical coercion will cause the contract to crumble into ash when the oathkeeper attempts to place her seal upon it. So long as no mystic or physical force is influencing any participating creature, the oathkeeper can mystically seal the arrangement with her personal symbol, binding all signing parties into upholding their ends of the bargain for the length of time spelled out in the agreement.</p>
<p>Should any oathbound creature break the exact wording of the contract, the agreement is dissolved and the offending creature is cursed, taking a penalty on all d20 rolls equal to the oathkeeper's Wisdom modifier for a number of weeks equal to the oathkeeper's inquisitor level. Furthermore, the inquisitor's symbol appears as a mystic symbol on the offending creature's throat and hands, allowing the oathkeeper to know the creature's location at all times, as per the <Link to="/spell/discern_location">discern location</Link> spell.</p>
<p>If a creature is forced into breaking the agreement by magic or overwhelming physical force (for example, breaking an agreement not to harm via a <Link to="/spelldef/compulsion">compulsion</Link> spell or by physically hurling an oathbound creature to deal damage to another), then the agreement dissipates harmlessly. The oathkeeper's curse is a curse effect, but it can be removed only with a <Link to="/spell/miracle">miracle</Link> or <Link to="/spell/wish">wish</Link> spell.</p>
</Pair>
</Ability>
<Ability id="arc-inquisitor-oathkeeper-oathbreakers-scourge-su" icon={["upgrade","hazard-sign"]}>
<Pair single id="arc-inquisitor-oathkeeper-oathbreakers-scourge-su">Oathbreaker's Scourge (Su)</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">If an oathkeeper is given physical evidence of a broken agreement and asked to hunt down the contract's breaker by the offended party, the oathkeeper gains a +4 sacred or profane bonus on Diplomacy and Survival skill checks to gather information about and track the target. The inquisitor is also treated as being 3 levels higher for the purpose of one judgment she uses against the deal breaker, so long as she keeps possession of the evidence.</Pair>
<Pair title="Special">If the oathkeeper uses oathbreaker's scourge when attacking someone who is actually innocent of fraud - due to forgery, hasty judgments, or other deceptions - she loses access to all of her oathkeeper archetype abilities for 1 month or until she is the target of an <Link to="/spell/atonement">atonement</Link> spell.</Pair>
</Ability>
</>};
const _preacher = {title: "Preacher", jsx: <><h2 id="arc-inquisitor-preacher-preacher">Preacher</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 46</Link><br/>Some inquisitors wander the land to spread the true word of their faith. Often they come into conflict with those hostile to their teachings or to the preacher's need to help those who cannot help themselves. The leaders of evil or aggressive religions send these preachers into new territories to win converts and hopefully allies. Often, they start uprisings against powers hostile to their religion, or defend a group of honest believers from the depredations of the unfaithful.</p>
<Ability id="arc-inquisitor-preacher-determination-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-preacher-determination-ex" flavor="The preacher is a person of few words on the battlefield, but those words hold great power and authority.">Determination (Ex)</Pair>
<Pair hl title="Replaces">Solo tactics</Pair>
<Pair hl title="Alters">Teamwork feats</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">Once per day, the inquisitor can use this ability to create one of the effects below.</Pair>
<Pair title="At 6th Level">Instead of selecting a bonus teamwork feat, you may increase the number of uses per day of this ability by one.</Pair>
<Pair title="At 9th Level">Instead of selecting a bonus teamwork feat, you may increase the number of uses per day of this ability by one.</Pair>
<Pair title="At 12th Level">Instead of selecting a bonus teamwork feat, you may increase the number of uses per day of this ability by one.</Pair>
<Pair title="At 15th Level">Instead of selecting a bonus teamwork feat, you may increase the number of uses per day of this ability by one.</Pair>
<Pair title="At 18th Level">Instead of selecting a bonus teamwork feat, you may increase the number of uses per day of this ability by one.</Pair>
</Ability>
<Ability id="arc-inquisitor-preacher-aggression" extraClasses="subAbility" icon={["rolling-dices"]}>
<Pair single id="arc-inquisitor-preacher-aggression">Aggression</Pair>
<Pair title="Free Action">The preacher may reroll an attack roll that she just made before the results of the roll are revealed. She must take the result of the reroll, even if it's worse than the original roll.</Pair>
</Ability>
<Ability id="arc-inquisitor-preacher-defense" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-inquisitor-preacher-defense">Defense</Pair>
<Pair title="Immediate Action">When the inquisitor would be hit by a melee or ranged attack, she may add a +4 insight bonus to her Armor Class against that attack, and if this makes the inquisitor's AC higher than the opponent's attack roll, the attack misses.</Pair>
</Ability>
<Ability id="arc-inquisitor-preacher-warning" extraClasses="subAbility" icon={["shield-reflect","rolling-dices"]}>
<Pair single id="arc-inquisitor-preacher-warning">Warning</Pair>
<Pair title="Free Action">When a preacher's ally within line of sight would be hit by a melee or ranged attack, she may call out a warning to that ally, and the attacker must reroll the attack and use the results of the second roll. The ally must be able to hear the preacher and must not be <Link to="/misc/helpless">helpless</Link> for this ability to have any effect.</Pair>
</Ability>
</>};
const _ravener_hunter = {title: "Ravener Hunter", jsx: <><h2 id="arc-inquisitor-ravener_hunter-ravener-hunter">Ravener Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 4</Link><br/>Throughout the Mwangi Expanse, cults of <Link to="/faith/angazhan">Angazhan</Link> pollute the pristine jungle with demonic influence and wanton bloodshed. For generations, the <Link to="/race/catfolk">catfolk</Link> of Murraseth have viewed such faiths with loathing and hatred, and they believe it is their sacred duty to hunt down the followers of the Ravener King and expel them from the Material Plane.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-inquisitor-ravener_hunter--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><ul><li><Link to="/race/catfolk">Catfolk</Link></li><li>Alignment must be nonevil</li></ul></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-inquisitor-ravener_hunter-charged-by-nature" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-ravener_hunter-charged-by-nature" flavor="Rather than having a deity patron, a ravener hunter is charged by the spirits of the Mwangi to eradicate evil wherever it appears.">Charged by Nature</Pair>
<Pair hl title="Replaces">Domain</Pair>
<Pair title="Choice">A ravener hunter chooses an oracle <Link to="/ability/mystery">mystery</Link> from the following list: <Link to="/mystery/ancestor">ancestor</Link>, <Link to="/mystery/battle">battle</Link>, <Link to="/mystery/flame">flame</Link>, <Link to="/mystery/heavens">heavens</Link>, <Link to="/mystery/life">life</Link>, <Link to="/mystery/lunar">lunar</Link>, <Link to="/mystery/nature">nature</Link>, <Link to="/mystery/solar">solar</Link>, <Link to="/mystery/stone">stone</Link>, <Link to="/mystery/time">time</Link>, <Link to="/mystery/volcano">volcano</Link>, <Link to="/mystery/waves">waves</Link>, <Link to="/mystery/wind">wind</Link>, or <Link to="/mystery/wood">wood</Link>.</Pair>
<Pair title="Ability">She gains one revelation from her chosen mystery. She must meet the revelation's prerequisites, using her inquisitor level as her effective <Link to="/class/oracle">oracle</Link> level to determine the revelation's effects, and she never qualifies for the <Link to="/feat/extra_revelation">Extra Revelation</Link> feat.</Pair>
<Pair title="At 8th Level">The ravener hunter gains a second revelation from her chosen mystery.</Pair>
</Ability>
<Ability id="arc-inquisitor-ravener_hunter-holy-magic" icon={["spell-book"]}>
<Pair single id="arc-inquisitor-ravener_hunter-holy-magic">Holy Magic</Pair>
<Pair hl title="Alters">Spells</Pair>
<Pair title="Info">A ravener hunter adds all spells of 6th-level and lower on the <Link to="/main/cleric_spell">cleric spell list</Link> with the good descriptor to her inquisitor spell list as inquisitor spells of the same level. If a spell appears on both the cleric and inquisitor spell lists, the ravener hunter uses the lower of the two spell levels listed for the spell. She cannot cast spells<sup><InnerLink showBacklink="backlink-arc-inquisitor-ravener_hunter-fake-fn-1" id="arc-inquisitor-ravener_hunter-fake-fn-1" data-hash-target to="arc-inquisitor-ravener_hunter-fake-fn-1-target">1</InnerLink></sup> with the chaotic, evil, or lawful descriptors, even from spell trigger or spell completion items.</Pair>
</Ability>
<Ability id="arc-inquisitor-ravener_hunter-demon-hunter" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-inquisitor-ravener_hunter-demon-hunter">Demon Hunter</Pair>
<Pair hl title="Replaces">Teamwork feat gained at 3rd level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A ravener hunter gains <Link to="/feat/demon_hunter">Demon Hunter</Link> as a bonus feat, ignoring its prerequisites.</Pair>
<Pair title="Passive Ability">She also gains a +2 bonus on Knowledge (religion) checks to recognize the worshipers of any deity with the Demon subdomain, as well as a +2 morale bonus on attack rolls and caster level checks to overcome spell resistance of creatures that she recognizes as followers of such a deity.</Pair>
</Ability>
<Ability id="arc-inquisitor-ravener_hunter-solo-tactics-ex" icon={["info"]}>
<Pair single id="arc-inquisitor-ravener_hunter-solo-tactics-ex">Solo Tactics (Ex)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Info">A ravener hunter gains this ability at 6th level instead of 3rd level.</Pair>
</Ability>
<section data-footnotes><h3 id="arc-inquisitor-ravener_hunter-label">Footnotes</h3><ol>
<li id="arc-inquisitor-ravener_hunter-fake-fn-1-target"><p>Edited; the original text reads: "She cannot cast <strong>2</strong> with the chaotic..." <InnerLink aria-label="Back to reference 1" id="backlink-arc-inquisitor-ravener_hunter-fake-fn-1" data-hash-target to="arc-inquisitor-ravener_hunter-fake-fn-1">↩</InnerLink></p></li>
</ol></section></>};
const _reaper_of_secrets = {title: "Reaper of Secrets", jsx: <><h2 id="arc-inquisitor-reaper_of_secrets-reaper-of-secrets">Reaper of Secrets</h2>
<p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox pg. 17</Link><br/>Masters of mind tricks and deception, these divine assassins track down and kill anyone who has forbidden knowledge about their faiths.</p>
<Ability id="arc-inquisitor-reaper_of_secrets-bound-by-secrecy-ex" icon={["hazard-sign"]}>
<Pair single id="arc-inquisitor-reaper_of_secrets-bound-by-secrecy-ex">Bound by Secrecy (Ex)</Pair>
<Pair title="Info">A reaper of secrets must choose <Link to="/faith/norgorber">Norgorber</Link> as her deity. If she ever changes her deity, she loses this archetype and becomes a normal inquisitor.</Pair>
</Ability>
<Ability id="arc-inquisitor-reaper_of_secrets-deceitful-lore-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-reaper_of_secrets-deceitful-lore-ex">Deceitful Lore (Ex)</Pair>
<Pair hl title="Replaces">Monster lore</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A reaper of secrets adds her Wisdom modifier on Bluff and Disguise skill checks in addition to her Charisma modifier.</Pair>
</Ability>
<Ability id="arc-inquisitor-reaper_of_secrets-soul-piercing-gaze-su" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-reaper_of_secrets-soul-piercing-gaze-su">Soul-Piercing Gaze (Su)</Pair>
<Pair hl title="Replaces">Stern gaze</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Swift Action">A reaper of secrets can focus on a single creature she can see. She then gains an insight bonus on Perception and Sense Motive checks against that creature equal to 1/2 her level (minimum +1). The effect ends if she focuses on a new target.</Pair>
</Ability>
<Ability id="arc-inquisitor-reaper_of_secrets-mind-game-tactics-su" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-reaper_of_secrets-mind-game-tactics-su" flavor="A reaper of secrets can read other creatures so well she can use their reactions to gain a tactical advantage.">Mind-Game Tactics (Su)</Pair>
<Pair hl title="Replaces">Solo tactics</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">She treats any creature targeted by her <em>soul-piercing gaze</em> as if it were her ally and possessed the same teamwork feats as she does for the purposes of positioning and threatening when she determines whether she receives a benefit from her teamwork feats. She cannot use this ability to benefit from any teamwork feats that require particular actions from allies, such as <Link to="/feat/swap_places">Swap Places</Link>.</Pair>
<Pair title="Special">For example, a reaper of secrets with the <Link to="/feat/precise_strike">Precise Strike</Link> feat gains the bonus from that feat if she and the target of her <em>soul-piercing gaze</em> occupy flanking positions relative to the creature she attacks.</Pair>
</Ability>
</>};
const _relic_hunter = {title: "Relic Hunter", jsx: <><h2 id="arc-inquisitor-relic_hunter-relic-hunter">Relic Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 119</Link><br/>Some inquisitors specialize in the use and recovery of long-lost relics of their faiths, drawing forth divine might from the recovered items in order to restore their sanctity and wield these artifacts against the enemies of their gods.</p>
<Ability id="arc-inquisitor-relic_hunter-spells" icon={["spell-book","magic-swirl"]}>
<Pair single id="arc-inquisitor-relic_hunter-spells">Spells</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Info">A relic hunter casts divine spells drawn from the inquisitor spell list, but her chosen relic schools (see <em>Relics</em> below) limit her to schools she knows, similar in function to an occultist's <em>implements.</em> Any spell or orison gained by the relic hunter has a relic component (see <em>Relics</em> below), and is not considered to be on the relic hunter's spell list until she selects its school though the relics alternate class feature. Once she chooses a school, all spells and orisons of that school are considered to be on the relic hunter's class spell list, allowing her to use spell trigger and spell completion magic items of those spells.</Pair>
<Pair title="Special">A relic hunter's spells per day, daily spell allotment, Difficulty Class, and minimum Wisdom score requirements remain unchanged from the inquisitor's normal spellcasting class feature.</Pair>
</Ability>
<Ability id="arc-inquisitor-relic_hunter-relics-su" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-relic_hunter-relics-su">Relics (Su)</Pair>
<Pair hl title="Replaces">Judgment</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A relic hunter gains the <Link to="/class/occultist">occultist's</Link> <em>implements</em> class feature and learns to use two occultist <Link to="/ability/implements">implement schools</Link> as relic schools.</Pair>
<Pair title="At 4th Level">The relic hunter learns to use one additional relic school drawn from the same source, gaining access to that school's resonant power and base focus power and opening up that school's focus powers for her to select. Like an occultist, a relic hunter can select the same school twice, but it is far less useful for her to do so.</Pair>
<Pair title="At 7th Level">She can learn a new relic school.</Pair>
<Pair title="At 10th Level">She can learn a new relic school.</Pair>
<Pair title="At 13th Level">She can learn a new relic school.</Pair>
<Pair title="At 16th Level">She can learn a new relic school.</Pair>
<Pair title="At 19th Level">She can learn a new relic school.</Pair>
<Pair title="Special">Relics do not need to be magic items, and nonmagical relics do not take up a magic item slot. Relics that are not magic items are often of some religious significance to the relic hunter or her church, such as the battered shield of a saint, a bishop's robe, or the finger bone of a church martyr.</Pair>
</Ability>
<Ability id="arc-inquisitor-relic_hunter-deific-focus-su" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-relic_hunter-deific-focus-su">Deific Focus (Su)</Pair>
<Pair hl title="Replaces">Domain, bane, greater bane, second judgment, third judgment</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>A relic hunter learns to invest divine power into her chosen relics. This acts like the occultist's <em>focus powers</em> and <em>mental focus</em> class features, with the following adjustments.</p>
<p>Each day, a relic hunter has a number of points of <em>deific focus</em> equal to her inquisitor level + her Wisdom modifier, and she must spend 1 hour in prayer with her relics to invest them with divine power. These points refresh at the start of each day.</p>
<p>The relic hunter learns the two base focus powers from her chosen relic schools and can select one more focus power from the list of those made available by her chosen schools. Whenever she gains a new relic school, she gains the base focus power of that school. She can use these focus powers only by expending points of <em>deific focus.</em></p>
</Pair>
<Pair title="At 4th Level">She learns a new focus power selected from all of the powers granted by all of the relic schools she knows.</Pair>
<Pair title="At 8th Level">She learns a new focus power selected from all of the powers granted by all of the relic schools she knows.</Pair>
<Pair title="At 12th Level">She learns a new focus power selected from all of the powers granted by all of the relic schools she knows.</Pair>
<Pair title="At 16th Level">She learns a new focus power selected from all of the powers granted by all of the relic schools she knows.</Pair>
<Pair title="At 20th Level">She learns a new focus power selected from all of the powers granted by all of the relic schools she knows.</Pair>
<Pair title="Special">Unless otherwise noted, the DC for any saving throws against a focus power is equal to 10 + 1/2 the inquisitor's class level + the inquisitor's Wisdom modifier. She cannot select a focus power more than once. She uses her inquisitor level in place of an occultist level to qualify for focus powers.</Pair>
</Ability>
</>};
const _royal_accuser = {title: "Royal Accuser", jsx: <><h2 id="arc-inquisitor-royal_accuser-royal-accuser">Royal Accuser</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 45</Link><br/>Royal accusers serve the prince of Ustalav, cutting through the nation's baroque politics and quietly facing its many threats.</p>
<Ability icon={["skills"]} id="arc-inquisitor-royal_accuser-undefined">
<Pair id="arc-inquisitor-royal_accuser-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (nature)</Pair></Ability>
<Ability id="arc-inquisitor-royal_accuser-meticulous-inspection-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-royal_accuser-meticulous-inspection-ex">Meticulous Inspection (Ex)</Pair>
<Pair hl title="Replaces">Stern gaze</Pair>
<Pair title="Passive Ability">A royal accuser gains a morale bonus equal to 1/2 his inquisitor level on all Perception checks (minimum +1).</Pair>
</Ability>
<Ability id="arc-inquisitor-royal_accuser-detect-monsters-and-secrets-sp" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-royal_accuser-detect-monsters-and-secrets-sp">Detect Monsters and Secrets (Sp)</Pair>
<Pair hl title="Replaces">Detect alignment</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A royal accuser can use <Link to="/spell/detect_aberration">detect aberration</Link>, <Link to="/spell/detect_secret_doors">detect secret doors</Link>, and <Link to="/spell/detect_undead">detect undead</Link> at will. He can only use one of these at any given time.</Pair>
</Ability>
<Ability id="arc-inquisitor-royal_accuser-favored-enemy-ex" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-royal_accuser-favored-enemy-ex">Favored Enemy (Ex)</Pair>
<Pair hl title="Replaces">Solo tactics, teamwork feats gained at 3rd, 9th, and 15th levels</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A royal accuser gains <Link to="/ability/favored_enemy">favored enemy</Link>, as the <Link to="/class/ranger">ranger</Link> class feature. He must choose his favored enemy from the following list: aberration, dragon, humanoid (orc), humanoid (shapechanger), and undead.</Pair>
<Pair title="At 9th Level">He gains a 2nd favored enemy.</Pair>
<Pair title="At 15th Level">He gains a 3rd favored enemy.</Pair>
</Ability>
<Ability id="arc-inquisitor-royal_accuser-informed-hunch-su" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-royal_accuser-informed-hunch-su">Informed Hunch (Su)</Pair>
<Pair hl title="Replaces">Teamwork feat granted at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability"><p>Once per day, a royal accuser can contemplate an ongoing investigation he is involved in and potentially know whether his hunches are on the right track. This functions as <Link to="/spell/augury">augury</Link>, except if it succeeds, the royal accuser gets one of the following results in place of weal, woe, or weal and woe. The royal accuser treats his inquisitor level as his caster level.</p>
<ul>
<li><strong>Correct</strong> (if the hunch is the exact truth, such as if a particular individual is responsible for a crime, or if a particular organization is behind a series of events).</li>
<li><strong>Incorrect</strong> (if the hunch is entirely off base, such as if a suspected individual had nothing to do with a crime, or a suspected organization had no interest or hand in a series of events).</li>
<li><strong>On the right track</strong> (if the hunch is partially correct, such as if a suspected individual participated in a criminal conspiracy or had foreknowledge of the crime in question, or if a suspected organization directly profited from and knew about but did not entirely orchestrate a series of events).</li>
</ul>
</Pair>
</Ability>
<Ability id="arc-inquisitor-royal_accuser-greater-detect-magic-sp" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-royal_accuser-greater-detect-magic-sp">Greater Detect Magic (Sp)</Pair>
<Pair hl title="Replaces">Teamwork feat granted at 12th</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">A royal accuser can use <Link to="/spell/greater_detect_magic">greater detect magic</Link> at will.</Pair>
</Ability>
<Ability id="arc-inquisitor-royal_accuser-final-sway-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-royal_accuser-final-sway-ex" flavor="A royal accuser's word and intuition are greatly trusted and valued.">Final Sway (Ex)</Pair>
<Pair hl title="Replaces">Teamwork feat granted at 18th level</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Ability">Once per day, when using the <Link to="/rule/influence">influence system</Link> and interacting with an individual or organization with whom he has at least minor sway or is respected (rank 2), the royal accuser can treat his influence as two steps higher for the purposes of making a single request of that individual or organization. Alternatively, he can treat an individual's attitude toward him as up to two steps higher for the purpose of such a request.</Pair>
</Ability>
</>};
const _sacred_huntsmaster = {title: "Sacred Huntsmaster", jsx: <><h2 id="arc-inquisitor-sacred_huntsmaster-sacred-huntsmaster">Sacred Huntsmaster</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 99</Link><br/>Some inquisitors create a strong bond with an animal companion, and they hunt and punish threats to the faith as an awe-inspiring duo. When they work together as one, there are few that dare to stand in their way.</p>
<Ability id="arc-inquisitor-sacred_huntsmaster-animal-companion-ex" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-sacred_huntsmaster-animal-companion-ex">Animal Companion (Ex)</Pair>
<Pair hl title="Replaces">Judgment 1/day</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A sacred huntsmaster forms a bond with an <Link to="/sidekick/animal_companion">animal companion</Link>. This ability works as the <Link to="/class/hunter">hunter</Link> class feature of the same name, using her inquisitor level as her hunter level.</Pair>
</Ability>
<Ability id="arc-inquisitor-sacred_huntsmaster-hunter-tactics-ex" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-sacred_huntsmaster-hunter-tactics-ex">Hunter Tactics (Ex)</Pair>
<Pair hl title="Replaces">Solo tactics</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A sacred huntsmaster automatically grants her teamwork feats to her animal companion. The companion doesn't need to meet the prerequisites of these teamwork feats.</Pair>
</Ability>
<Ability id="arc-inquisitor-sacred_huntsmaster-animal-focus-su" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-sacred_huntsmaster-animal-focus-su">Animal Focus (Su)</Pair>
<Pair hl title="Replaces">Later iterations of the judgment ability</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Swift Action">A sacred huntsmaster can take on the aspects of an animal. This ability works as the hunter's <Link to="/ability/animal_focus">animal focus</Link> class feature, with her inquisitor level serving as her hunter level.</Pair>
</Ability>
<Ability id="arc-inquisitor-sacred_huntsmaster-improved-empathic-link-su" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-sacred_huntsmaster-improved-empathic-link-su">Improved Empathic Link (Su)</Pair>
<Pair hl title="Replaces">Second judgment</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">The sacred huntsmaster gains an empathic link with her animal companion. This functions like an empathic link with a <Link to="/sidekick/familiar">familiar</Link>, except the sacred huntsmaster can also see through a companion's eyes as a <strong className="hl">swift action</strong>, maintaining this connection as long as she likes (as long as the companion is within 1 mile) and ending it as a <strong className="hl">free action</strong>.</Pair>
<Pair title="Special">The sacred huntsmaster is <Link to="/misc/blinded">blinded</Link> while maintaining this connection.</Pair>
</Ability>
<Ability id="arc-inquisitor-sacred_huntsmaster-raise-animal-companion-sp" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-sacred_huntsmaster-raise-animal-companion-sp">Raise Animal Companion (Sp)</Pair>
<Pair hl title="Replaces">Third judgment</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">A sacred huntsmaster gains <Link to="/spell/raise_animal_companion">raise animal companion</Link> as a spell-like ability (not restricted to her own animal companion). Using this ability gives the sacred huntsmaster a <Link to="/rule/negative_level">negative level</Link> that cannot be overcome in any way (including by <Link to="/spell/restoration">restoration</Link>), but automatically ends after 24 hours.</Pair>
<Pair title="At 16th Level">This functions as <Link to="/spell/resurrection">resurrection</Link> instead of <Link to="/spell/raise_dead">raise dead</Link>, but otherwise operates as normal.</Pair>
</Ability>
<Ability id="arc-inquisitor-sacred_huntsmaster-second-animal-focus-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-sacred_huntsmaster-second-animal-focus-ex">Second Animal Focus (Ex)</Pair>
<Pair hl title="Replaces">Slayer</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">Whenever a sacred huntsmaster uses her <em>animal focus</em> ability, she selects two different animal aspects for herself instead of one, and can assign two aspects to her companion instead of one. As with the companion's previous aspect, the second one does not count against the minutes per day a sacred huntsmaster can take on an aspect. If her animal companion is dead and the sacred huntsmaster has applied that aspect to herself, that aspect counts toward her maximum of two aspects at once. The sacred huntsmaster can still only apply one of her dead companion's to herself, not both.</Pair>
</Ability>
<Ability id="arc-inquisitor-sacred_huntsmaster-greater-empathic-link-su" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-inquisitor-sacred_huntsmaster-greater-empathic-link-su">Greater Empathic Link (Su)</Pair>
<Pair hl title="Replaces">True judgment</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">The range of a sacred huntsmaster's empathic link with her animal companion increases to 10 miles. If the animal companion is within 1 mile, it and the sacred huntsmaster can communicate telepathically.</Pair>
</Ability>
</>};
const _sanctified_slayer = {title: "Sanctified Slayer", jsx: <><h2 id="arc-inquisitor-sanctified_slayer-sanctified-slayer">Sanctified Slayer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 99</Link><br/>While all inquisitors root out enemies of the faith, in many orders and churches there's a select group of these religious hunters devoted to one goal, and one goal alone - to terminate the enemies of the faith wherever they can be found. Sometimes these sanctified slayers are given special dispensation to commit ruthless murders for the faith's greater good. Other times, they're simply willing to take the initiative to revel in the zeal of such grisly work.</p>
<Ability id="arc-inquisitor-sanctified_slayer-studied-target-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-sanctified_slayer-studied-target-ex">Studied Target (Ex)</Pair>
<Pair hl title="Replaces">Judgment 1/day</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A sanctified slayer gains the <Link to="/class/slayer">slayer's</Link> <em>studied target</em> class feature. She uses her inquisitor level as her effective slayer level to determine the effects of <em>studied target.</em></Pair>
</Ability>
<Ability id="arc-inquisitor-sanctified_slayer-studied-target-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-sanctified_slayer-studied-target-ex" flavor="Text from the slayer class">Studied Target (Ex)</Pair>
<Pair title="Move-Equivalent Action">You can study an opponent you can see. You then gain a bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks attempted against that opponent, and a bonus on weapon attack and damage rolls against it; these bonuses are equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of your slayer level. The DCs of slayer class abilities against that opponent increase by 1 + one-fifth of your slayer level. You can only maintain these bonuses against a certain number of opponents at a time (equal to 1 + one-fifth of your slayer level); these bonuses remain in effect until either the opponent is dead or you study a new target.</Pair>
<Pair title="Immediate Action">If you deal sneak attack damage to a target, you can study that target immediately, allowing you to apply your studied target bonuses against that target (including to the normal weapon damage roll).</Pair>
<Pair title="Free Action">You can discard this connection to a studied target, allowing you to study another target in its place.</Pair>
<Pair title="At 7th Level">You can now choose to study a target as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-inquisitor-sanctified_slayer-sneak-attack-ex" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-sanctified_slayer-sneak-attack-ex">Sneak Attack (Ex)</Pair>
<Pair hl title="Replaces">Later iterations of the <em>judgment</em> ability</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability"><p>If a sanctified slayer catches an opponent unable to defend itself effectively from her attack, she can strike a vital spot to deal extra damage. The sanctified slayer's attack deals 1d6 additional damage anytime her target would be denied a Dexterity bonus to AC (whether or not the target actually has a Dexterity bonus), or when the sanctified slayer <Link to="/rule/flanks">flanks</Link> her target. Should a sanctified slayer score a critical hit with the sneak attack, this extra damage is not multiplied. Ranged attacks can count as sneak attacks only if the target is within 30 feet.</p>
<p>With a weapon that deals nonlethal damage (such as a sap, whip, or an unarmed strike), a sanctified slayer can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, even with the usual -4 penalty.</p>
<p>A sanctified slayer must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A sanctified slayer cannot use sneak attack while striking a creature with <Link to="/rule/concealment">concealment</Link>.</p>
</Pair>
<Pair title="At 7th Level">The additional damage becomes 2d6.</Pair>
<Pair title="At 10th Level">The additional damage increases to 3d6.</Pair>
<Pair title="At 13th Level">The additional damage becomes 4d6.</Pair>
<Pair title="At 16th Level">The additional damage increases to 5d6.</Pair>
<Pair title="At 19th Level">The additional damage becomes 6d6.</Pair>
</Ability>
<Ability id="arc-inquisitor-sanctified_slayer-talented-slayer-ex" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-sanctified_slayer-talented-slayer-ex">Talented Slayer (Ex)</Pair>
<Pair hl title="Replaces">Second judgment, third judgment, slayer, true judgment</Pair>
<Pair title="At 8th Level">A sanctified slayer can gain a single <Link to="/ability/slayer_talents">slayer talent</Link>, including those from the list of rogue talents that a slayer can take, but not an advanced slayer talent.</Pair>
<Pair title="At 16th Level">She can gain another slayer talent, as above.</Pair>
<Pair title="At 17th Level">She can gain another slayer talent, as above.</Pair>
<Pair title="At 20th Level">She can gain another slayer talent, as above.</Pair>
</Ability>
</>};
const _secret_seeker = {title: "Secret Seeker", jsx: <><h2 id="arc-inquisitor-secret_seeker-secret-seeker">Secret Seeker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 29</Link><br/>Secret seekers are trained in the art of extracting answers from intransigent foes. Recognizing that torture is a poor method of securing truthful intelligence, secret seekers instead prefer magical means of inquiry.</p>
<Ability id="arc-inquisitor-secret_seeker-occult-lore-su" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-secret_seeker-occult-lore-su">Occult Lore (Su)</Pair>
<Pair hl title="Replaces">Monster lore</Pair>
<Pair title="Ability">A secret seeker gains access to the <Link to="/skill/prognostication">prognostication</Link> and <Link to="/skill/read_aura">read aura</Link> occult skill unlocks, but not the other occult skill unlocks.</Pair>
<Pair title="Special">If she ever chooses to gain the <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> feat or otherwise gains access to all occult skill unlocks, she receives <Link to="/feat/psychic_maestro">Psychic Maestro</Link> as a bonus feat, with prognostication and read aura as the two occult skill unlocks selected.</Pair>
</Ability>
<Ability id="arc-inquisitor-secret_seeker-detect-mind-sp" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-secret_seeker-detect-mind-sp">Detect Mind (Sp)</Pair>
<Pair hl title="Replaces">Bane, greater bane</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A secret seeker can <Link to="/spell/detect_anxieties">detect anxieties</Link>, <Link to="/spell/detect_desires">detect desires</Link>, or <Link to="/spell/detect_thoughts">detect thoughts</Link>, as per the spells, for a number of rounds per day equal to twice her inquisitor level. These rounds need not be consecutive. A creature that succeeds at a saving throw against this ability is immune to that secret seeker's detect mind ability for 24 hours. If the secret seeker has the <Link to="/inquisition/secrets">secrets</Link> inquisition, she doubles the number of rounds per day that she can use this ability.</Pair>
<Pair title="At 12th Level">A secret seeker can use her <em>detect mind</em> ability for a number of minutes per day equal to twice her inquisitor level, rather than rounds. These minutes need not be consecutive but must be spent in 1-minute increments. If the secret seeker has the <em>secrets</em> inquisition, she doubles the number of minutes per day she can use this ability.</Pair>
</Ability>
<Ability id="arc-inquisitor-secret_seeker-seek-mind-sp" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-secret_seeker-seek-mind-sp">Seek Mind (Sp)</Pair>
<Pair hl title="Replaces">Exploit weakness</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">A secret seeker can use her <em>detect mind</em> ability to seek out people with particular anxieties, desires, or thoughts. This functions as per <Link to="/spell/seek_thoughts">seek thoughts</Link> except that it works with any of the three types of mental output the secret seeker can detect with detect mind.</Pair>
</Ability>
</>};
const _sin_eater = {title: "Sin Eater", jsx: <><h2 id="arc-inquisitor-sin_eater-sin-eater">Sin Eater</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 46</Link><br/>There is a sect of inquisitors in some religions that believes it is not enough to hunt the enemies of the church - one must also devour those enemies' sins. More benign versions of the practice believe that sin, or evil, is taken out of the world when a sin is devoured, denying the enemy's soul to the enemy's god and purifying the world of its taint. Followers of malevolent churches believe that consuming the sins of good folk not only corrupts the enemy soul to keep it from the celestial planes, but also taints the souls of those who witness the sin-eating or the corpse of its victim. Consuming sins empowers the sin eater, at least for a time.</p>
<Ability id="arc-inquisitor-sin_eater-eat-sin-sp" icon={["stairs-goal","remedy"]}>
<Pair single id="arc-inquisitor-sin_eater-eat-sin-sp">Eat Sin (Sp)</Pair>
<Pair hl title="Replaces">Domain</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Free Action">When the sin eater inquisitor kills an enemy, she may eat the sins of that enemy by spending 1 minute adjacent to its corpse. This provokes attacks of opportunity.</Pair>
<Pair title="Full-Round Action">The inquisitor can rush this ritual, performing it as a full-round action that provokes attacks of opportunity, but she only gains half the normal benefit (see below).</Pair>
<Pair title="Info">Eating the enemy's sins heals the inquisitor of a number of hit points of damage equal to 1d8 + her inquisitor level (maximum +5). The enemy must have been killed by the sin eater within the last hour, and it must have had at least as many Hit Dice as half the inquisitor's level. The inquisitor can use this ability once for each enemy she kills. This ability has no effect on mindless creatures or those with Intelligence 2 or less.</Pair>
<Pair title="At 5th Level">The healing increases to 2d8 plus her inquisitor level (maximum +10).</Pair>
<Pair title="At 8th Level">When a sin eater eats the sins of a creature that would rise as an undead (such as someone slain by a <Link to="/monster/shadow">shadow</Link>, <Link to="/monster/spectre">spectre</Link>, or <Link to="/template/vampire">vampire</Link>), the sin eater may choose to accept 1 temporary <Link to="/rule/negative_level">negative level</Link> to absorb the taint in the corpse, preventing it from rising as an undead. This negative level can be removed with the appropriate magic, though it automatically expires after 24 hours, and never becomes a permanent negative level. At the GM's discretion, this ability may prevent a <Link to="/template/ghost">ghost</Link> from using its rejuvenation ability.</Pair>
<Pair title="At 9th Level">The healing increases to 3d8 + her inquisitor level (maximum +15).</Pair>
<Pair title="At 13th Level">It increases to 4d8 + her inquisitor level (maximum +20).</Pair>
<Pair title="Special">In some faiths, this "eating" is a purely symbolic act, while in others, the inquisitor must eat a small amount of food and water as part of the ritual. A few extreme faiths actually require the inquisitor to eat some of the body of the slain enemy.</Pair>
</Ability>
<Ability id="arc-inquisitor-sin_eater-speak-with-dead-sp" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-sin_eater-speak-with-dead-sp">Speak with Dead (Sp)</Pair>
<Pair hl title="Replaces">Teamwork feat gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">When the inquisitor eats an enemy's sins, within 10 minutes of doing so, she can ask the remnants of the enemy's soul questions as if using <Link to="/spell/speak_with_dead">speak with dead</Link>, with a caster level equal to her inquisitor level. She does not need the enemy's corpse to use this ability (she can eat sin, move away from the corpse, then use <em>speak with dead</em>), though the soul gets a saving throw just as a corpse would.</Pair>
</Ability>
<Ability id="arc-inquisitor-sin_eater-burden-of-sin-sp" icon={["shield-reflect"]}>
<Pair single id="arc-inquisitor-sin_eater-burden-of-sin-sp">Burden of Sin (Sp)</Pair>
<Pair hl title="Replaces">Exploit weakness</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Full-Round Action">A sin eater may transfer one harmful affliction, condition, or spell effect from another creature to herself (this includes curses, possessions, and permanent effects such as petrification, or any condition that <Link to="/spell/break_enchantment">break enchantment</Link> can end or reverse). The effect to be transferred is chosen by the sin eater and affects her as if she were the original target, continuing its duration (if any) and preventing any further effect on the original bearer. For example, the inquisitor could transfer a lethal disease to herself, or petrify herself to restore a petrified comrade. The sin eater can use this ability as often as desired, even using it multiple times on the same creature.</Pair>
</Ability>
</>};
const _spellbreaker = {title: "Spellbreaker", jsx: <><h2 id="arc-inquisitor-spellbreaker-spellbreaker">Spellbreaker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 52</Link><br/>The world is full of dangerous magic, and many recoil in the face of such power. The spellbreaker, by contrast, learns to recognize and resist certain types of magic, wading through waves of magic to reach her foes.</p>
<Ability id="arc-inquisitor-spellbreaker-strong-willed-ex" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="arc-inquisitor-spellbreaker-strong-willed-ex" flavor="A spellbreaker is able to stand strong against magical effects that seek to control, compel, or persuade her.">Strong-Willed (Ex)</Pair>
<Pair hl title="Replaces">Monster lore</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">The spellbreaker rolls twice and takes the best result when making a Will saving throw against a mind-affecting effect.</Pair>
</Ability>
<Ability id="arc-inquisitor-spellbreaker-defense-against-magic-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-inquisitor-spellbreaker-defense-against-magic-ex">Defense against Magic (Ex)</Pair>
<Pair hl title="Replaces">Teamwork feats</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A spellbreaker picks a single <Link to="/ability/arcane_schools">wizard school</Link>. She gains a +1 bonus on saving throws against arcane spells of that school.</Pair>
<Pair title="At 7th Level">The spellbreaker picks a 2nd school and gains this bonus against arcane spells of that school.</Pair>
<Pair title="At 11th Level">The spellbreaker picks a 3rd school and gains this bonus against arcane spells of that school.</Pair>
<Pair title="At 15th Level">The spellbreaker picks a 4th school and gains this bonus against arcane spells of that school.</Pair>
<Pair title="At 19th Level">The spellbreaker picks a 5th school and gains this bonus against arcane spells of that school.</Pair>
<Pair title="Special">Each time the spellbreaker picks a new school, the bonuses for the schools she has already chosen increase by 1.</Pair>
</Ability>
<Ability id="arc-inquisitor-spellbreaker-foil-casting-su" icon={["armor-downgrade"]}>
<Pair single id="arc-inquisitor-spellbreaker-foil-casting-su">Foil Casting (Su)</Pair>
<Pair hl title="Replaces">Solo tactics</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">When an opponent tries to cast an arcane spell within a spellbreaker's threatened area, the DC for that caster to cast defensively increases by 2. This increase stacks with the effects of the <Link to="/feat/disruptive">Disruptive</Link> feat.</Pair>
<Pair title="Ability">Furthermore, the spellbreaker knows where to hit foes to foil casting from a distance. Each time she hits an arcane spellcaster or a creature that uses spell-like abilities with a ranged weapon attack, the DC of any <Link to="/rule/concentration">concentration</Link> checks the caster makes increases by 2 for 1 round.</Pair>
</Ability>
<Ability id="arc-inquisitor-spellbreaker-impervious-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-inquisitor-spellbreaker-impervious-ex">Impervious (Ex)</Pair>
<Pair hl title="Replaces">True judgment</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">A spellbreaker becomes immune to the effects of a single school of arcane magic. That school of magic must be the first one she picked for <em>defense against magic</em> (see above). Neither harmful nor helpful arcane spells of that school have an effect on the spellbreaker. If a spell of that school is an area of effect spell, the spell goes off as normal, but the spellbreaker is untouched by its effects.</Pair>
<Pair title="Swift Action">Once per day, the spellbreaker can grant this imperviousness to all allies in a 60-foot <Link to="/misc/burst">burst</Link> for 1 minute.</Pair>
</Ability>
</>};
const _suit_seeker = {title: "Suit Seeker", jsx: <><h2 id="arc-inquisitor-suit_seeker-suit-seeker">Suit Seeker</h2>
<p><strong>Sources</strong> <Link to="/source/the_harrow_handbook">The Harrow Handbook pg. 22</Link><br/>Though surrounded by meaning and tradition revered by most harrowers, the harrow is a tool that could be abused. Those inquisitors known as suit seekers take grave offense at the misuse of this ancient power, and dedicate their considerable skills to hunting and eliminating any who would abuse the harrow's magic and the heritage it represents. No two suit seekers seem to share the same vision, though, and so most of these harrow-wielding inquisitors end up at odds with other diviners throughout Avistan and even one another.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-inquisitor-suit_seeker--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>A suit seeker's alignment must be neutral on the good-evil axis, the lawful-chaotic axis, or both.</td></tr></tbody></table></ScrollContainer></div><Ability icon={["skills"]} id="arc-inquisitor-suit_seeker-undefined">
<Pair id="arc-inquisitor-suit_seeker-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/use_magic_device">Use Magic Device</Link> (CHA)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering), Ride, Survival</Pair></Ability>
<Ability id="arc-inquisitor-suit_seeker-domain" icon={["info"]}>
<Pair single id="arc-inquisitor-suit_seeker-domain">Domain</Pair>
<Pair title="Choice">A suit seeker must select the <Link to="/domain/knowledge">Knowledge</Link> or <Link to="/domain/luck">Luck</Link> domain; the Memory or Fate subdomain; or the <Link to="/inquisition/fate">Fate</Link>, <Link to="/inquisition/fervor">Fervor</Link>, or <Link to="/inquisition/illumination">Illumination</Link> inquisition.</Pair>
</Ability>
<Ability id="arc-inquisitor-suit_seeker-improvised-array-su" extraClasses="hasSubs" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-inquisitor-suit_seeker-improvised-array-su">Improvised Array (Su)</Pair>
<Pair hl title="Alters">Judgment, second judgment, third judgment</Pair>
<Pair title="At 1st Level">The suit seeker can call upon the harrow to help her choose an appropriate judgment and bolster her effectiveness with that judgment. As part of activating her <em>judgment</em> ability, the suit seeker can draw an impromptu array of two cards from a complete <Link to="/eq-misc/harrow_deck">harrow deck</Link> she owns. Once drawn, the array remains the same until the <em>judgment</em> effect ends, though the inquisitor can change her <em>judgment</em> at any time as a <strong className="hl">swift action</strong>, as normal. The act of drawing an <em>improvised array</em> requires a free hand, though the suit seeker can keep a drawn array in her belt or otherwise on her person to perform actions with both hands while still maintaining the cards' benefits.</Pair>
<Pair title="At 8th Level">When a suit seeker gains her <em>second judgment,</em> she can forgo pronouncing a second <em>judgment</em> and instead draw four cards for her <em>improvised array.</em></Pair>
<Pair title="At 16th Level">She can forgo pronouncing a second and third <em>judgment</em> and instead draw up to six cards for her <em>improvised array,</em> or she can forgo only her third <em>judgment</em> and draw an array of four cards.</Pair>
<Pair title="Special"><p>As long as the suit seeker has at least one card in her <em>improvised array</em> that matches her current <em>judgment,</em> she increases her effective inquisitor level by a number of levels equal to the number of matching cards for the purpose of determining that <em>judgment's</em> effects.</p>
<p>In addition to increasing her effective inquisitor level for the purpose of the corresponding <em>judgment,</em> a suit seeker with three or more cards of the same suit in her <em>improvised array</em> gains immunity to <Link to="/rule/ability_damage">ability damage</Link> to the corresponding ability score. A suit seeker with five or more cards of the same suit in her <em>improvised array</em> gains a +4 enhancement bonus to the corresponding ability score. These benefits last until the suit seeker's <em>judgment</em> effect ends.</p>
<ScrollContainer id="arc-inquisitor-suit_seeker--table-1"><table>
<thead>
<tr>
<th>Suit</th>
<th>Judgment</th>
<th>Ability</th>
</tr>
</thead>
<tbody><tr>
<td>Books</td>
<td>Piercing</td>
<td>Intelligence</td>
</tr>
<tr>
<td>Crowns</td>
<td>Smiting</td>
<td>Charisma</td>
</tr>
<tr>
<td>Hammers</td>
<td>Destruction</td>
<td>Strength</td>
</tr>
<tr>
<td>Keys</td>
<td>Protection</td>
<td>Dexterity</td>
</tr>
<tr>
<td>Shields</td>
<td>Resiliency</td>
<td>Constitution</td>
</tr>
<tr>
<td>Stars</td>
<td>Healing</td>
<td>Wisdom</td>
</tr>
</tbody></table></ScrollContainer>
<p>A suit seeker does not gain access to and cannot use the <em>justice, resistance,</em> or <em>purity</em> judgments. A suit seeker makes the following adjustments to her judgments.</p>
</Pair>
</Ability>
<Ability id="arc-inquisitor-suit_seeker-smiting" extraClasses="subAbility" icon={["broken-shield"]}>
<Pair single id="arc-inquisitor-suit_seeker-smiting">Smiting</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Info">While the suit seeker has her smiting <em>judgment</em> active, her weapons can only count as an alignment type (chaotic, evil, good, or lawful) for the purpose of bypassing damage reduction if the selected alignment is represented on one of the suit seeker's cards in her current <em>improvised array.</em> If multiple alignments are represented in the <em>improvised array,</em> the suit seeker must select one. If the array contains only neutral cards, the suit seeker cannot benefit from this <em>judgment.</em> She can change the alignment of her <em>judgment</em> to another alignment represented in the array as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-inquisitor-suit_seeker-resiliency" extraClasses="subAbility" icon={["broken-shield"]}>
<Pair single id="arc-inquisitor-suit_seeker-resiliency">Resiliency</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Info">The DR provided by this <em>judgment</em> can change from magic to an alignment type (chaotic, evil, good, or lawful) only if the selected alignment is represented on one of the suit seeker's cards in her current <em>improvised array.</em> If multiple alignments are represented in the <em>improvised array,</em> the suit seeker must select one. If the array contains only neutral cards, the suit seeker cannot benefit from this <em>judgment.</em> She can change the alignment of this <em>judgment</em> to another alignment represented in the array as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-inquisitor-suit_seeker-eye-of-the-harrow-su" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-suit_seeker-eye-of-the-harrow-su" flavor={<>A suit seeker can use the magic of her <em>improvised array</em> to hone her attacks against targets that match the cards' alignment.</>}>Eye of the Harrow (Su)</Pair>
<Pair hl title="Replaces">Detect alignment</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">If any of the cards in her <em>improvised array</em> matches the alignment of an enemy creature within 60 feet on either the good-evil axis or the lawful-chaotic axis, the card glows faintly and the inquisitor gains a +1 sacred bonus on attack rolls against enemies of the matching alignment as long as the card is in her array. If a card matches the alignment of an enemy within 60 feet on both alignment axes, the card glows brightly and the inquisitor gains a +1 sacred bonus on attack rolls and damage rolls against enemies of the matching alignment.</Pair>
</Ability>
<Ability id="arc-inquisitor-suit_seeker-unravel-array-su" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-suit_seeker-unravel-array-su">Unravel Array (Su)</Pair>
<Pair hl title="Replaces">True judgment</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A suit seeker can tear apart a target's place in destiny, rendering the creature immobile or possibly dead. As long as she has an <em>improvised array</em> drawn, the suit seeker can destroy one of the cards in her array and designate a single creature within 30 feet as the target of the harrow's magic. The designated creature must succeed at a Will save (DC 10 + 1/2 the inquisitor's level + the inquisitor's Wisdom modifier) or one of its ability scores is immediately reduced to 0, which can immobilize, render unconscious, or kill the creature. The ability score reduced corresponds to the ability score of the card destroyed.</Pair>
<Pair title="Special">Regardless of whether or not the target succeeds at its save, it becomes immune to the inquisitor's unravel array ability for 24 hours. Once this ability has been used, it cannot be used again for 1d4 rounds. The destroyed harrow card is removed from the harrow deck. The suit seeker can continue to use the reduced deck for the purpose of her suit seeker powers as long as she wants, though she has no chance of drawing the destroyed card until she purchases a new harrow deck.</Pair>
</Ability>
</>};
const _sworn_of_the_eldest = {title: "Sworn of the Eldest", jsx: <><h2 id="arc-inquisitor-sworn_of_the_eldest-sworn-of-the-eldest">Sworn of the Eldest</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 11</Link><br/>Sworn of the Eldest are gathlains who have pledged their loyalty to one of <Link to="/rule/the_eldest">Eldest of the First World</Link>. Although the Eldest rarely have adherents as other deities do, they still occasionally require mortal agents to advance their aims. Sworn of the Eldest consider their chosen Eldest to be akin to powerful patrons or fey royalty and serve them faithfully.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-inquisitor-sworn_of_the_eldest--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><ul><li><Link to="/race/gathlain">Gathlain</Link></li><li>Must worship one of the Eldest</li></ul></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-inquisitor-sworn_of_the_eldest-whimsical-worship-ex" icon={["info"]}>
<Pair single id="arc-inquisitor-sworn_of_the_eldest-whimsical-worship-ex">Whimsical Worship (Ex)</Pair>
<Pair title="Info">A sworn of the Eldest uses her Charisma modifier, rather than her Wisdom modifier, to determine all class features and effects relating to her inquisitor class, including her spells, <em>cunning initiative,</em> and <em>true judgment</em> abilities.</Pair>
</Ability>
<Ability id="arc-inquisitor-sworn_of_the_eldest-deity" icon={["info"]}>
<Pair single id="arc-inquisitor-sworn_of_the_eldest-deity">Deity</Pair>
<Pair hl title="Alters">Domain</Pair>
<Pair title="Info">A sworn of the Eldest must select a domain or subdomain of her chosen Eldest for her domain ability; she cannot be devoted to an ideal or philosophy.</Pair>
</Ability>
<Ability id="arc-inquisitor-sworn_of_the_eldest-disarming-discernment-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-sworn_of_the_eldest-disarming-discernment-ex">Disarming Discernment (Ex)</Pair>
<Pair hl title="Replaces">Monster lore</Pair>
<Pair title="Passive Ability">A sworn of the Eldest adds her Charisma modifier on Sense Motive skill checks, in addition to her Wisdom modifier.</Pair>
</Ability>
<Ability id="arc-inquisitor-sworn_of_the_eldest-feytongue-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-sworn_of_the_eldest-feytongue-ex">Feytongue (Ex)</Pair>
<Pair hl title="Replaces">Stern gaze</Pair>
<Pair title="Passive Ability">A sworn of the Eldest receives a morale bonus equal to half her inquisitor level (minimum +1) on Bluff and Diplomacy checks.</Pair>
</Ability>
<Ability id="arc-inquisitor-sworn_of_the_eldest-feywatcher-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-inquisitor-sworn_of_the_eldest-feywatcher-ex">Feywatcher (Ex)</Pair>
<Pair hl title="Replaces">Solo tactics</Pair>
<Pair title="Passive Ability">Resistant to the tricky ways of other fey, a sworn of the Eldest gains the <Link to="/ability/resist_natures_lure">resist nature's lure</Link> druid class feature.</Pair>
</Ability>
<Ability id="arc-inquisitor-sworn_of_the_eldest-magic-of-the-eldest" icon={["spell-book"]}>
<Pair single id="arc-inquisitor-sworn_of_the_eldest-magic-of-the-eldest">Magic of the Eldest</Pair>
<Pair hl title="Replaces">All teamwork feats</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A sworn of the Eldest gains a bonus 1st-level spell slot, and she learns the corresponding spell listed for her domain as a bonus spell known.</Pair>
<Pair title="At 6th Level">She gains a bonus 2nd-level spell slot and learns the corresponding domain spell.</Pair>
<Pair title="At 9th Level">She gains a bonus 3rd-level spell slot and learns the corresponding domain spell.</Pair>
<Pair title="At 12th Level">She gains a bonus 4th-level spell slot and learns the corresponding domain spell.</Pair>
<Pair title="At 15th Level">She gains a bonus 5th-level spell slot and learns the corresponding domain spell.</Pair>
<Pair title="At 18th Level">She gains a bonus 6th-level spell slot and learns the corresponding domain spell.</Pair>
<Pair title="Special">She can use these bonus spell slots only to cast the domain spell of that level.</Pair>
</Ability>
</>};
const _tactical_leader = {title: "Tactical Leader", jsx: <><h2 id="arc-inquisitor-tactical_leader-tactical-leader">Tactical Leader</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 29</Link><br/>Rather than pursuing their holy missions alone, some inquisitors see the inherent value of working with like-minded allies to accomplish mutual goals.</p>
<Ability id="arc-inquisitor-tactical_leader-leaders-words-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-tactical_leader-leaders-words-ex" flavor="Tactical leaders are skilled at speaking soothing words that keep the peace and bolster allies' resolve.">Leader's Words (Ex)</Pair>
<Pair hl title="Replaces">Stern gaze</Pair>
<Pair title="Passive Ability">A tactical leader receives a morale bonus on all Diplomacy checks equal to half his inquisitor level (minimum +1).</Pair>
</Ability>
<Ability id="arc-inquisitor-tactical_leader-tactician-ex" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-tactical_leader-tactician-ex">Tactician (Ex)</Pair>
<Pair hl title="Replaces">Solo tactics, teamwork feats</Pair>
<Pair title="At 3rd Level">A tactical leader gains a teamwork feat as a bonus feat. He must meet the prerequisites for this feat.</Pair>
<Pair title="At 9th Level">He gains another teamwork feat, as above.</Pair>
<Pair title="At 18th Level">He gains a third teamwork feat, as above.</Pair>
<Pair title="Standard Action">The tactical leader can grant one of these feats to all allies within 30 feet who can see and hear him. Allies retain the use of this bonus feat for 3 rounds plus 1 round for every 2 inquisitor levels the tactical leader has. Allies do not need to meet the prerequisites of these bonus feats.</Pair>
<Pair title="Usage">1 time/day per three inquisitor levels<ByLevelPop levels={[[3,1],[6,2],[9,3],[12,4],[15,5],[18,6]]} unit="time" postText="/day" /></Pair>
<Pair title="At 12th Level">A tactical leader can use the <em>tactician</em> ability as a <strong className="hl">swift action</strong>.</Pair>
<Pair title="At 18th Level">Whenever the tactical leader uses this ability, he grants any two teamwork feats that he knows. He can select from any of his teamwork feats, not just his bonus feats.</Pair>
<Pair title="Special">If the tactical leader also has <Link to="/class/cavalier">cavalier</Link> levels, these levels stack for determining the number of uses of this ability per day.</Pair>
</Ability>
<Ability id="arc-inquisitor-tactical_leader-battle-acumen-ex" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-tactical_leader-battle-acumen-ex">Battle Acumen (Ex)</Pair>
<Pair hl title="Replaces">Exploit weakness</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Usage">Wis modifier times/day (minimum 1)</Pair>
<Pair title="Immediate Action">A tactical leader can grant his <em>judgment</em> benefits to a single other ally within 30 feet who can see and hear the tactical leader. These benefits last until the beginning of the tactical leader's next turn. A tactical leader must have a <em>judgment</em> active to use this ability and the benefits granted are the same as those selected by his <em>judgment.</em></Pair>
</Ability>
</>};
const _traceless_operative = {title: "Traceless Operative", jsx: <><h2 id="arc-inquisitor-traceless_operative-traceless-operative">Traceless Operative</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 30</Link><br/>Traceless operatives practice subterfuge and careful preparation in order to accomplish their divine mandates.</p>
<Ability id="arc-inquisitor-traceless_operative-conceal-evidence-ex" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-traceless_operative-conceal-evidence-ex">Conceal Evidence (Ex)</Pair>
<Pair hl title="Replaces">Monster lore, stern gaze</Pair>
<Pair title="Ability">A traceless operative knows how to clean up and obscure the evidence of foul play. It takes her 1d3 &times; 10 minutes to conceal or alter evidence in a 10-foot-by-10-foot area. She uses Disguise to alter evidence or Stealth to conceal it, though bonuses and penalties based on her abilities or effects that disguise or hide her own body (such as from <Link to="/spell/disguise_self">disguise self</Link>, a <Link to="/magic-wondrous/cloak_of_elvenkind">cloak of elvenkind</Link>, or the size modifier on Stealth checks) do not apply.</Pair>
<Pair title="Special">A creature attempting to investigate the scene using Perception must succeed at the original Perception DC or a DC equal to the traceless operative's check, whichever is higher, in order to discover the true evidence. A creature who fails against a traceless operative's Disguise check potentially also derives the false evidence planted by the traceless operative.</Pair>
</Ability>
<Ability id="arc-inquisitor-traceless_operative-trackless-sp" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-traceless_operative-trackless-sp" flavor="A traceless operative's deity helps obscure her path from others.">Trackless (Sp)</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">The DC to track the traceless operative (or a group including her) increases by <Link to="/misc/half">half</Link> her inquisitor level. This does not stack with similar abilities, such as a <Link to="/arc-ranger/transporter">transporter's</Link> <em>trailbreaker</em> ability.</Pair>
</Ability>
<Ability id="arc-inquisitor-traceless_operative-uncanny-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-inquisitor-traceless_operative-uncanny-dodge-ex">Uncanny Dodge (Ex)</Pair>
<Pair hl title="Replaces">Bane</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A traceless operative can react to danger before her senses would normally allow her to do so. She cannot be caught <Link to="/rule/flat_footed">flat-footed</Link>, nor does she lose her Dexterity bonus to AC if the attacker is invisible. She still loses her Dexterity bonus to AC if immobilized. A traceless operative with this ability can still lose her Dexterity bonus to AC if an opponent successfully uses the feint action against her. If the traceless operative already possesses <Link to="/ability/uncanny_dodge">uncanny dodge</Link> from a different class, she automatically gains <em>improved uncanny dodge</em> instead.</Pair>
</Ability>
<Ability id="arc-inquisitor-traceless_operative-improved-uncanny-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-inquisitor-traceless_operative-improved-uncanny-dodge-ex">Improved Uncanny Dodge (Ex)</Pair>
<Pair hl title="Replaces">Greater bane</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">A traceless operative can no longer be <Link to="/rule/flanked">flanked</Link>. This defense denies <Link to="/class/rogue">rogues</Link> (or other classes with the <Link to="/ability/sneak_attack">sneak attack</Link> ability) the ability to <em>sneak attack</em> the traceless operative by flanking her, unless the attacker has at least 4 more rogue levels (or levels in a class that grants the <em>sneak attack</em> class ability) than the traceless operative has inquisitor levels. If the traceless operative already has <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> from another class, the levels from the classes that grant <em>improved uncanny dodge</em> stack when determining the minimum rogue level (or level in another class with the <em>sneak attack</em> ability) required to flank the character.</Pair>
</Ability>
</>};
const _umbral_stalker = {title: "Umbral Stalker", jsx: <><h2 id="arc-inquisitor-umbral_stalker-umbral-stalker">Umbral Stalker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 31</Link><br/>As a consummate lurker in the shadows, an umbral stalker observes the enemies of her faith and strikes before the unfortunate victims even know she is skulking nearby.</p>
<Ability icon={["skills"]} id="arc-inquisitor-umbral_stalker-undefined">
<Pair id="arc-inquisitor-umbral_stalker-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX)</Pair>
<Pair title="Removed Skills">Diplomacy</Pair></Ability>
<Ability id="arc-inquisitor-umbral_stalker-dark-descent-su" icon={["info"]}>
<Pair single id="arc-inquisitor-umbral_stalker-dark-descent-su">Dark Descent (Su)</Pair>
<Pair hl title="Alters">Domain</Pair>
<Pair title="Info">An umbral stalker gains the <Link to="/domain/darkness">Darkness</Link> domain with the Night subdomain, even if her deity normally doesn't offer it.</Pair>
</Ability>
<Ability id="arc-inquisitor-umbral_stalker-judgment" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-umbral_stalker-judgment">Judgment</Pair>
<Pair title="Ability">Umbral stalkers are most effective when they get the drop on an opponent. An umbral stalker gains access to the following judgment.</Pair>
</Ability>
<Ability id="arc-inquisitor-umbral_stalker-stalking" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-umbral_stalker-stalking">Stalking</Pair>
<Pair hl title="Replaces">Justice judgment</Pair>
<Pair title="Passive Ability">The umbral stalker gains a +2 sacred bonus on attack rolls against creatures that are unaware of her presence (typically because she is invisible or using Stealth).</Pair>
<Pair title="At 5th Level">This bonus becomes +4.</Pair>
<Pair title="At 10th Level">This bonus increases to +6.</Pair>
<Pair title="At 15th Level">This bonus becomes +8.</Pair>
<Pair title="At 20th Level">This bonus increases to +10.</Pair>
</Ability>
<Ability id="arc-inquisitor-umbral_stalker-swift-and-silent-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-umbral_stalker-swift-and-silent-ex" flavor="Umbral stalkers often descend upon their prey with deadly grace and efficiency.">Swift and Silent (Ex)</Pair>
<Pair hl title="Replaces">Stern gaze</Pair>
<Pair title="Passive Ability">An umbral stalker gains a morale bonus on all Acrobatics and Stealth checks equal to <Link to="/misc/half">half</Link> her inquisitor level (minimum +1).</Pair>
</Ability>
<Ability id="arc-inquisitor-umbral_stalker-deadly-efficiency-ex" icon={["armor-downgrade","upgrade"]}>
<Pair single id="arc-inquisitor-umbral_stalker-deadly-efficiency-ex" flavor="An umbral stalker becomes even deadlier against enemies who haven't yet noticed her in the shadows.">Deadly Efficiency (Ex)</Pair>
<Pair hl title="Alters">Exploit weakness</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">Whenever she confirms a critical hit against a foe that is unaware of her presence, she ignores any damage reduction the target might have and adds her Wisdom bonus to her damage roll (this multiplies on the critical hit as normal); in addition, if the target has <Link to="/umr/regeneration">regeneration</Link>, the creature loses regeneration on the round following the critical hit and can die normally during that round. Creatures whose regeneration always functions are immune to this ability.</Pair>
<Pair title="Special">If the umbral stalker deals energy damage to a creature unaware of her presence with vulnerability to that energy type, she deals 2 extra points of damage per die rolled.</Pair>
</Ability>
</>};
const _urban_infiltrator = {title: "Urban Infiltrator", jsx: <><h2 id="arc-inquisitor-urban_infiltrator-urban-infiltrator">Urban Infiltrator</h2>
<p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 18</Link><br/>Masters of secretly gathering information to further their faith's ends, urban infiltrators excel at operating within an unfriendly society or infiltrating an enemy cult. This archetype is popular among Cult of the <Link to="/faith/sarenrae">Dawnflower</Link> inquisitors operating in Taldor, but it is available to any inquisitor who prefers subtle investigation to forthright zeal.</p>
<Ability icon={["skills"]} id="arc-inquisitor-urban_infiltrator-undefined">
<Pair id="arc-inquisitor-urban_infiltrator-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/disable_device">Disable Device</Link> (DEX), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering), Knowledge (nature)</Pair></Ability>
<Ability id="arc-inquisitor-urban_infiltrator-gifted-detective-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-urban_infiltrator-gifted-detective-ex">Gifted Detective (Ex)</Pair>
<Pair hl title="Replaces">Monster lore</Pair>
<Pair title="Passive Ability">An urban infiltrator adds her Wisdom modifier as well as her Charisma modifier on Bluff and Disguise skill checks and on Diplomacy checks to gather information. Attempting a Diplomacy check to gather information never takes an urban infiltrator more than 1 hour.</Pair>
</Ability>
<Ability id="arc-inquisitor-urban_infiltrator-a-thousand-faces-su" icon={["magic-swirl"]}>
<Pair single id="arc-inquisitor-urban_infiltrator-a-thousand-faces-su">A Thousand Faces (Su)</Pair>
<Pair hl title="Replaces">Stalwart</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">An urban inquisitor gains the ability to change her appearance at will, as if using the <Link to="/spell/alter_self">alter self</Link> spell.</Pair>
</Ability>
</>};
const _vampire_hunter = {title: "Vampire Hunter", jsx: <><h2 id="arc-inquisitor-vampire_hunter-vampire-hunter">Vampire Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 41</Link><br/>Undead are a scourge upon the living. The vampire hunter believes that the worst of the undead are the ones with unnatural appetites for flesh and blood - things that should persist without feeding, but consume anyway. <Link to="/template/vampire">Vampires</Link> and <Link to="/monster/ghoul">ghouls</Link> are especially dangerous because they turn their victims into more of their kind, and just one reckless night-feeder can turn an entire city into a den of undead.</p>
<p>Vampire hunters use their skills and magic to track and slay the hungry dead, walking a fine line between the purity of good magic and the tempting evil of turning dark necromancy against the unliving. Rare even in grim Ustalav, and slain on sight in Nidal and Geb, vampire hunters lead lonely existences under the constant threat of becoming that which they live to destroy. A vampire hunter has the following class features.</p>
<Ability id="arc-inquisitor-vampire_hunter-judgment" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-inquisitor-vampire_hunter-judgment">Judgment</Pair>
<Pair hl title="Alters">Purity and Smiting judgments</Pair>
<Pair title="Info">The following vampire hunter judgments work differently than those of a standard inquisitor.</Pair>
</Ability>
<Ability id="arc-inquisitor-vampire_hunter-purity" extraClasses="subAbility" icon={["info"]}>
<Pair single id="arc-inquisitor-vampire_hunter-purity">Purity</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Info">The judgment bonus is doubled against diseases and energy drain saving throws, but not curses or poisons.</Pair>
</Ability>
<Ability id="arc-inquisitor-vampire_hunter-smiting" extraClasses="subAbility" icon={["info"]}>
<Pair single id="arc-inquisitor-vampire_hunter-smiting">Smiting</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Info">The vampire hunter's weapons count as silver instead of an alignment type.</Pair>
</Ability>
<Ability id="arc-inquisitor-vampire_hunter-silversmith" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-vampire_hunter-silversmith">Silversmith</Pair>
<Pair hl title="Replaces">Detect alignment</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A vampire hunter learns the secrets of crafting silver into dangerous weapons. She adds a bonus equal to her class level on any Craft or Spellcraft check made to create a silver item that bypasses DR/silver, such as <Link to="/eq-material/alchemical_silver">alchemical silver</Link>, <Link to="/magic-wondrous/silversheen">silversheen</Link>, or <Link to="/eq-misc/weapon_blanch_silver">silver weapon blanch</Link>.</Pair>
</Ability>
<Ability id="arc-inquisitor-vampire_hunter-bane-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-inquisitor-vampire_hunter-bane-su">Bane (Su)</Pair>
<Pair hl title="Alters">Bane</Pair>
<Pair title="Ability">A vampire hunter can only imbue her weapons with the undead-bane ability, but it persists even when she isn't holding the weapon.</Pair>
</Ability>
<Ability id="arc-inquisitor-vampire_hunter-sun-strike-su" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-vampire_hunter-sun-strike-su">Sun Strike (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 round/day per inquisitor level; these rounds need not be consecutive</Pair>
<Pair title="Swift Action">A vampire hunter can infuse a single weapon she wields with the purifying light of the sun. While a weapon is infused with the sun, it deals +1d6 points of damage to any creature that is susceptible or vulnerable to sunlight, including many types of undead (particularly <Link to="/monster/spectre">spectres</Link>, vampires, and <Link to="/monster/wraith">wraiths</Link>). This additional damage also applies to oozes and fungus-based monsters. A weapon infused with sun strike sheds illumination as if it were a <Link to="/eq-misc/sunrod">sunrod</Link>.</Pair>
</Ability>
</>};
const _vigilant_defender = {title: "Vigilant Defender", jsx: <><h2 id="arc-inquisitor-vigilant_defender-vigilant-defender">Vigilant Defender</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 31</Link><br/>Some inquisitors focus more on protecting those who share their faiths and their ideals than on actively hunting their enemies. These vigilant defenders often work alongside traveling clerics and paladins.</p>
<Ability id="arc-inquisitor-vigilant_defender-shared-judgments-su" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-vigilant_defender-shared-judgments-su">Shared Judgments (Su)</Pair>
<Pair hl title="Alters">Judgment</Pair>
<Pair title="Swift Action">Whenever a vigilant defender has pronounced judgment on her foes, she can grant all of her allies the bonus or special ability that the judgment bestows. If she has multiple active judgments, they all affect her allies. When she does this, the judgments no longer affect her, and their effects only last for 1 round, after which that daily use of judgment ends immediately, even if the combat is not over. The vigilant defender cannot change any of these judgments to another type during this round.</Pair>
</Ability>
<Ability id="arc-inquisitor-vigilant_defender-protect-the-faithful-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-vigilant_defender-protect-the-faithful-ex">Protect the Faithful (Ex)</Pair>
<Pair hl title="Replaces">Stern gaze</Pair>
<Pair title="Info">A vigilant defender can spend 1 minute coaching and teaching a group of allies how best to avoid scrutiny from those who wish them harm. The vigilant defender and her allies cannot be in combat or threatened during this coaching, and allies must be able to see and hear the vigilant defender to benefit from this ability. This ability provides no benefits against enemies that have heard or seen the coaching.</Pair>
<Pair title="Usage">1 time/day + 1 per four inquisitor levels<ByLevelPop levels={[[1,1],[4,2],[8,3],[12,4],[16,5],[20,6]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">Affected allies receive a morale bonus equal to <Link to="/misc/one_fourth">one-fourth</Link> of the vigilant defender's inquisitor level (minimum +1) on all Bluff, Disguise, Perception, and Stealth checks outside of combat made to avoid, deceive, or notice other creatures. This bonus lasts for 10 minutes, and the vigilant defender can affect herself and a number of allies equal to her Wisdom modifier (minimum 1).</Pair>
</Ability>
<Ability id="arc-inquisitor-vigilant_defender-bolster-the-wounded-ex" icon={["shield-reflect"]}>
<Pair single id="arc-inquisitor-vigilant_defender-bolster-the-wounded-ex" flavor="A vigilant defender can preternaturally sense when her allies are in grave peril and can form a mystical conduit to protect them from the full effects of grievous wounds.">Bolster the Wounded (Ex)</Pair>
<Pair hl title="Replaces">Exploit weakness</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Immediate Action">Whenever an enemy confirms a critical hit against an ally within 30 feet, the vigilant defender can choose to accept half the damage. If she does so, similar to the <Link to="/spell/shield_other">shield other</Link> spell, any of her damage reduction, resistances, or immunities do not apply to the damage she takes.</Pair>
</Ability>
<Ability id="arc-inquisitor-vigilant_defender-true-vengeance-su" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-inquisitor-vigilant_defender-true-vengeance-su">True Vengeance (Su)</Pair>
<Pair hl title="Alters">True judgment</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">When a vigilant defender calls <em>true judgment</em> down upon a foe, if the foe has killed one of the vigilant defender's allies (permanent sentient allies, such as fellow party members or cohorts, not summoned monsters, animal companions, pets, or the like), the DC of the target's Fortitude save to avoid death is 2 higher. If the foe has not damaged any of the vigilant defender's allies, the DC to avoid death is instead 2 lower.</Pair>
</Ability>
</>};
const _witch_hunter = {title: "Witch Hunter", jsx: <><h2 id="arc-inquisitor-witch_hunter-witch-hunter">Witch Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 53</Link><br/>When pursuing justice for their faith, inquisitors sometimes hunt sorcerers, witches, wizards, and other practitioners of arcane magic - but especially witches, since their devotion to a patron is often seen as suspect by many religions.</p>
<Ability id="arc-inquisitor-witch_hunter-spell-sage-ex" icon={["upgrade"]}>
<Pair single id="arc-inquisitor-witch_hunter-spell-sage-ex">Spell Sage (Ex)</Pair>
<Pair hl title="Replaces">Monster lore</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A witch hunter adds her Wisdom modifier on Spellcraft checks in addition to her Intelligence modifier when attempting to identify a spell as it is being cast, to identify the properties of a magic item using <Link to="/spell/detect_magic">detect magic</Link>, or to decipher a scroll.</Pair>
</Ability>
<Ability id="arc-inquisitor-witch_hunter-knowledgeable-defense" icon={["armor-upgrade"]}>
<Pair single id="arc-inquisitor-witch_hunter-knowledgeable-defense">Knowledgeable Defense</Pair>
<Pair hl title="Replaces">Detect alignment, discern lies, true judgment</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A witch hunter who identifies a spell with Spellcraft gains a bonus against its effects, either a +1 bonus on saving throws or a +1 dodge bonus to AC against this spell.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
<Pair title="At 20th Level">Once per day as a <strong className="hl">swift action</strong>, she can grant this bonus to all her allies within 60 feet, for 1 minute. The allies gain the bonus when the witch hunter identifies the spell, and those among the allies who have at least 1 rank in Spellcraft can aid the witch hunter's next Spellcraft check as a <strong className="hl">swift action</strong> while under the effect of this ability.</Pair>
</Ability>
<Ability id="arc-inquisitor-witch_hunter-spell-scent" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-witch_hunter-spell-scent" flavor="The witch hunter learns how to sense unique spell signatures, and can follow the trail of a cast spell or spell effect cast back to its source.">Spell Scent</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Full-Round Action">Once per day, when the witch hunter comes into contact with or is exposed to a spell effect or a magic item, she can examine the spell effect or magic item, and then gains the effect of a <Link to="/spell/locate_creature">locate creature</Link> spell. She can do this even if the spell effect was instantaneous, but must start her examination within 1 round after she experienced the spell's effect. Instead of locating a known creature, the witch hunter locates the caster of the spell effect or magic item she examined. Doing so does not allow the witch hunter to gain any intelligence about the spellcaster other than its location.</Pair>
</Ability>
<Ability id="arc-inquisitor-witch_hunter-witchs-bane-judgment-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-inquisitor-witch_hunter-witchs-bane-judgment-ex">Witch's Bane Judgment (Ex)</Pair>
<Pair hl title="Replaces">Exploit weakness</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">A witch hunter gains the following judgment.</Pair>
</Ability>
<Ability id="arc-inquisitor-witch_hunter-witchs-bane" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-inquisitor-witch_hunter-witchs-bane">Witch's Bane</Pair>
<Pair title="Passive Ability">Any creature that casts an arcane spell within 30 feet of the witch hunter takes a -2 penalty to AC against her attacks and a -2 penalty on saving throws against her spells while this judgment remains in effect.</Pair>
</Ability>
</>};
export default {abolisher:_abolisher,cloaked_wolf:_cloaked_wolf,cold_iron_warden:_cold_iron_warden,exarch:_exarch,exorcist:_exorcist,expulsionist:_expulsionist,faith_hunter:_faith_hunter,green_faith_marshal:_green_faith_marshal,heretic:_heretic,hexenhammer:_hexenhammer,iconoclast:_iconoclast,immolator:_immolator,infiltrator:_infiltrator,keeper_of_construct:_keeper_of_construct,keeper_of_the_current:_keeper_of_the_current,kinslayer:_kinslayer,living_grimoire:_living_grimoire,monster_tactician:_monster_tactician,oathkeeper:_oathkeeper,preacher:_preacher,ravener_hunter:_ravener_hunter,reaper_of_secrets:_reaper_of_secrets,relic_hunter:_relic_hunter,royal_accuser:_royal_accuser,sacred_huntsmaster:_sacred_huntsmaster,sanctified_slayer:_sanctified_slayer,secret_seeker:_secret_seeker,sin_eater:_sin_eater,spellbreaker:_spellbreaker,suit_seeker:_suit_seeker,sworn_of_the_eldest:_sworn_of_the_eldest,tactical_leader:_tactical_leader,traceless_operative:_traceless_operative,umbral_stalker:_umbral_stalker,urban_infiltrator:_urban_infiltrator,vampire_hunter:_vampire_hunter,vigilant_defender:_vigilant_defender,witch_hunter:_witch_hunter}