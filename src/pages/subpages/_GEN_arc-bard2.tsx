import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _geisha = {title: "Geisha", jsx: <><h2 id="arc-bard-geisha-geisha">Geisha</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 27</Link><br/>In some cultures, the professional entertainer is a prestigious role. Specially trained entertainers called geisha are praised for their appearance and skill at conversation, music, dancing, singing, poetry, and calligraphy. A geisha provides social intimacy and status but not physical intimacy.</p>
<Ability id="arc-bard-geisha-weapon-and-armor-proficiency" icon={["broken-shield","magic-swirl"]}>
<Pair single id="arc-bard-geisha-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Armor and weapon proficiencies</Pair>
<Pair title="Info">Geisha are proficient in all simple weapons and one <Link to="/class/monk">monk</Link> weapon. Geisha are not proficient in any armor or shield; unlike bards, geisha are subject to arcane spell failure even when casting in light armor or when using a shield.</Pair>
</Ability>
<Ability id="arc-bard-geisha-tea-ceremony-su" icon={["upgrade"]}>
<Pair single id="arc-bard-geisha-tea-ceremony-su">Tea Ceremony (Su)</Pair>
<Pair title="Ability">By spending 10 minutes preparing an elaborate tea ceremony, a geisha may affect her allies with <em>inspire courage, inspire competence, inspire greatness,</em> or <em>inspire heroics.</em> The ceremony's effects last 10 minutes. The geisha must spend 4 rounds of bardic performance for each creature to be affected.</Pair>
</Ability>
<Ability id="arc-bard-geisha-geisha-knowledge" icon={["upgrade"]}>
<Pair single id="arc-bard-geisha-geisha-knowledge">Geisha Knowledge</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A geisha adds <Link to="/misc/half">half</Link> her class level (minimum 1) on Craft (calligraphy) checks, Diplomacy checks, Knowledge (nobility) checks, and one type of Perform check (act, dance, oratory, percussion, string, or sing); she may make checks with these skills untrained.</Pair>
</Ability>
<Ability id="arc-bard-geisha-scribe-scroll" icon={["stairs-goal"]}>
<Pair single id="arc-bard-geisha-scribe-scroll">Scribe Scroll</Pair>
<Pair title="Ability">A geisha gains <Link to="/feat/scribe_scroll">Scribe Scroll</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _hatharat_agent = {title: "Hatharat Agent", jsx: <><h2 id="arc-bard-hatharat_agent-hatharat-agent">Hatharat Agent</h2>
<p><strong>Sources</strong> <Link to="/source/qadira_jewel_of_the_east">Qadira, Jewel of the East pg. 47</Link><br/>Although the Hatharat employs all manner of specialists, bards who take up the role of agent are among its most infamous and widespread.</p>
<Ability id="arc-bard-hatharat_agent-called-favor-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-hatharat_agent-called-favor-ex">Called Favor (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>A Hatharat agent can use his contacts to ask for a favor from various individuals who have benefited from Hatharat aid in the past. The agent must spend 1d4 hours in an urban area with a population of at least 200 people to use this ability, and must succeed at a DC 20 Diplomacy check to secure the favor. Once an attempt to call in a favor has been made, whether or not the Diplomacy check was successful, the Hatharat agent must wait 2d6 days before attempting to call in a new favor, so as to not overtax the favors owed the society as a whole.</p>
<p>The Hatharat agent can use a successful called favor to secure an introduction to an important NPC, either to learn an important piece of information (something that would otherwise require a successful DC 20 Knowledge check to know) or to secure a pardon for a minor crime of which an ally has been convicted. Similar favors could be granted at the GM's discretion.</p>
</Pair>
<Pair title="At 7th Level">An agent need only wait 1d6 days between uses of called favors. In addition to the favors above, he can now ask for a favor that supplies the aid of a single 5th-level specialist for 24 hours. This specialist is treated as a short-term <Link to="/feat/leadership">cohort</Link> for the agent, but should remain under the control of the GM. The exact statistics for the specialist (who can be of any class) should also be calculated by the GM.</Pair>
<Pair title="At 9th Level">The specialist can now be 6th-level.</Pair>
<Pair title="At 11th Level">The specialist can now be 7th-level.</Pair>
<Pair title="At 13th Level">The specialist can now be 8th-level.</Pair>
<Pair title="At 15th Level">The specialist can now be 9th-level.</Pair>
<Pair title="At 17th Level">The specialist can now be 10th-level.</Pair>
<Pair title="At 18th Level">The specialist can now be 11th-level.</Pair>
<Pair title="Special">You can find numerous pregenerated NPCs via the links at the bottom of the <Link to="/main/monsters">Monsters and NPCs page</Link>.</Pair>
</Ability>
<Ability id="arc-bard-hatharat_agent-informed-persuasion-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-hatharat_agent-informed-persuasion-ex" flavor="A Hatharat agent uses his knowledge of a target to increase his persuasiveness.">Informed Persuasion (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">If he has at least 1 rank in an associated Knowledge skill, he applies his Intelligence modifier (in addition to his Charisma modifier, as normal) to Bluff, Diplomacy, and Intimidate checks against that Knowledge skill's associated category of targets.</Pair>
<Pair title="Special">The types of Knowledge and their associated groups are arcana (spellcasters), geography (tribal citizens), local (urban citizens), nobility (politicians and nobles), and religion (worshipers of a recognized faith).</Pair>
</Ability>
<Ability id="arc-bard-hatharat_agent-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-hatharat_agent-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A Hatharat agent gains the bardic performance listed below.</Pair>
</Ability>
<Ability id="arc-bard-hatharat_agent-master-of-manipulation-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-hatharat_agent-master-of-manipulation-su" flavor="A Hatharat agent gains a reputation of being able to sense lies.">Master of Manipulation (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">When using bardic performance, his very presence can often draw the truth out of others. This ability affects all creatures selected by the bard within a 20-foot-radius <Link to="/misc/emanation">emanation</Link> from the bard. Any affected creature can't speak any deliberate or intentional lies, but is aware of the effect and can choose to avoid answering a question to which it would normally respond with a lie, or may be evasive as long as it remains within the boundaries of the truth.</Pair>
<Pair title="Special">This is a mind-affecting compulsion effect.</Pair>
</Ability>
</>};
const _hoaxer = {title: "Hoaxer", jsx: <><h2 id="arc-bard-hoaxer-hoaxer">Hoaxer</h2>
<p><strong>Sources</strong> <Link to="/source/black_markets">Black Markets pg. 29</Link><br/>Hoaxers specialize in creating valuable-looking counterfeits and infusing these false treasures with dangerous magic to make their marks more vulnerable to future swindles.</p>
<Ability id="arc-bard-hoaxer-counterfeiter-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-hoaxer-counterfeiter-ex">Counterfeiter (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Ability">A hoaxer adds <Link to="/misc/half">half</Link> his bard level (minimum 1) on all Appraise, Bluff, and Sleight of Hand checks, as well as on Craft, Knowledge, Linguistics, Perception, and Profession checks to create or detect a counterfeit or forgery. He can attempt such skill checks untrained.</Pair>
</Ability>
<Ability id="arc-bard-hoaxer-bardic-performance-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-hoaxer-bardic-performance-su">Bardic Performance (Su)</Pair>
<Pair title="Info">A hoaxer dedicates his arcane energies to deceiving others rather than to entertaining them, granting him the following unique performances.</Pair>
</Ability>
<Ability id="arc-bard-hoaxer-bad-deal-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-hoaxer-bad-deal-su" flavor="A hoaxer can use his performance to coax a bit of luck (good or bad) into a valuable-seeming object.">Bad Deal (Su)</Pair>
<Pair hl title="Replaces">Inspire courage, inspire competence, and inspire greatness</Pair>
<Pair title="Standard Action">The hoaxer can use 1 round of bardic performance to invest a single object in his possession with a hex he knows. This object must be light enough to hold in one hand, and cannot already have any magical properties. The object remains hexed as long as the hoaxer continues to spend 1 round of bardic performance each round as a <strong className="hl">swift action</strong> to maintain it, until the hoaxer drops the item, or until triggered. The hex triggers immediately upon being willingly accepted by another creature, targeting its new owner.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>Yes</Pair>
<Pair title="At 1st Level">The hoaxer knows one <Link to="/ability/hexes">witch hex</Link> from the following list: <Link to="/hex/blight">blight</Link>, <Link to="/hex/charm">charm</Link>, <Link to="/hex/evil_eye">evil eye</Link>, <Link to="/hex/fortune">fortune</Link>, <Link to="/hex/healing">healing</Link>, <Link to="/hex/misfortune">misfortune</Link>, <Link to="/hex/slumber">slumber</Link>, or <Link to="/hex/unnerve_beasts">unnerve beasts</Link>.</Pair>
<Pair title="At 3rd Level">He can learn one additional hex.</Pair>
<Pair title="At 6th Level">He can learn one additional hex.</Pair>
<Pair title="At 9th Level">He can learn one additional hex.</Pair>
<Pair title="At 12th Level">He can learn one additional hex, and the list of hexes grows to include <Link to="/hex/agony">agony</Link>, <Link to="/hex/hoarfrost">hoarfrost</Link>, <Link to="/hex/ice_tomb">ice tomb</Link>, <Link to="/hex/infected_wounds">infected wounds</Link>, <Link to="/hex/nightmares">nightmares</Link>, <Link to="/hex/retribution">retribution</Link>, and <Link to="/hex/speak_in_dreams">speak in dreams</Link>.</Pair>
<Pair title="At 15th Level">He can learn one additional hex.</Pair>
<Pair title="At 18th Level">He can learn one additional hex.</Pair>
<Pair title="Special">A bad deal cannot be forced on a creature or slipped into its possession without its knowledge, but a hoaxer can lie or cheat to convince his mark to accept the object, or use spells like <em>beguiling gift.</em> The save DC for a hoaxer's hexes is equal to 10 + 1/2 the hoaxer's bard level + his Charisma modifier. These hexes function identically to witch hexes, except they can only target single creatures, and the hoaxer can only use his hexes by investing them into objects. If the hoaxer learns hexes from any other source (such as the <Link to="/class/witch">witch</Link> class), he cannot invoke them into an object.</Pair>
</Ability>
<Ability id="arc-bard-hoaxer-buyer-beware-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-hoaxer-buyer-beware-su">Buyer Beware (Su)</Pair>
<Pair hl title="Replaces">Countersong</Pair>
<Pair title="Standard Action">A hoaxer can convince someone to accept a gift or trade as per <Link to="/spell/beguiling_gift">beguiling gift</Link> (DC = 10 + 1/2 the hoaxer's bard level + his Charisma modifier) by spending 1 round of bardic performance on a supernatural sales pitch. The hoaxer can use this ability to convince a creature to accept a hexed object created with his bad deal performance.</Pair>
</Ability>
<Ability id="arc-bard-hoaxer-personal-guarantee-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-hoaxer-personal-guarantee-su">Personal Guarantee (Su)</Pair>
<Pair hl title="Replaces">Distraction</Pair>
<Pair title="Ability">A hoaxer can prevent his hexed wares from afflicting a target until he is safely out of sight. He can spend up to 1 round of bardic performance per bard level while hexing an object. For every round expended, the object's hex is delayed for 1 minute before triggering and hexing its current owner.</Pair>
</Ability>
<Ability id="arc-bard-hoaxer-curse-breaker-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-hoaxer-curse-breaker-su">Curse Breaker (Su)</Pair>
<Pair hl title="Replaces">Inspire greatness</Pair>
<Pair title="At 12th Level">A hoaxer can use performance to create an effect equal to <Link to="/spell/break_enchantment">break enchantment</Link>. This otherwise functions as <Link to="/performance/soothing_performance">soothing performance</Link>.</Pair>
</Ability>
<Ability id="arc-bard-hoaxer-misery-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-hoaxer-misery-ex" flavor="A hoaxer learns to take joy in the misfortune of others.">Misery (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">He gains a +1 morale bonus on attack rolls and damage rolls against creatures suffering from a curse, hex, or harmful mind-affecting effect, as well as a +1 morale bonus on Will saving throws against spells from such creatures.</Pair>
<Pair title="At 5th Level">These bonuses become +2.</Pair>
<Pair title="At 11th Level">These bonuses increase to +3.</Pair>
<Pair title="At 17th Level">These bonuses become +4.</Pair>
</Ability>
<Ability id="arc-bard-hoaxer-versed-in-curses-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-hoaxer-versed-in-curses-ex">Versed in Curses (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A hoaxer gains a +4 bonus on saving throws against curses, hexes, and language-dependent effects.</Pair>
</Ability>
<Ability id="arc-bard-hoaxer-curse-crafter-ex" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-bard-hoaxer-curse-crafter-ex">Curse Crafter (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A hoaxer learns how to craft cursed items. He gains one <Link to="/main/item_creation_feat">item creation feat</Link> as a bonus feat.</Pair>
<Pair title="At 11th Level">He gains another bonus item creation feat.</Pair>
<Pair title="At 17th Level">He gains another bonus item creation feat.</Pair>
<Pair title="Special">He can use these feats only to craft cursed items. In addition, he can craft items that appear magical but have no true magical properties - as if permanently affected by the <Link to="/spell/magic_aura">magic aura</Link> spell - for 50 gp.</Pair>
</Ability>
</>};
const _impervious_messenger = {title: "Impervious Messenger", jsx: <><h2 id="arc-bard-impervious_messenger-impervious-messenger">Impervious Messenger</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 20</Link><br/>The impervious messenger is capable of harnessing the unique qualities of bardic magic to keep, transport, and communicate the most precious of secrets and messages, even when subject to the most vigorous forms of observation, be they magical or mundane.</p>
<Ability id="arc-bard-impervious_messenger-bardic-performance-su" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-bard-impervious_messenger-bardic-performance-su">Bardic Performance (Su)</Pair>
<Pair title="Info">An impervious messenger gains the following types of bardic performances.</Pair>
</Ability>
<Ability id="arc-bard-impervious_messenger-chant-of-perfect-recall-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-impervious_messenger-chant-of-perfect-recall-su">Chant of Perfect Recall (Su)</Pair>
<Pair hl title="Replaces">Fascinate</Pair>
<Pair title="Ability">An impervious messenger can spend 1 round of his bardic performance to commit something to memory. This ability functions exactly as per <Link to="/spell/memorize_page">memorize page</Link>, but the impervious messenger is the only recipient and he requires only 1 round to commit a single page to memory. An impervious messenger can commit additional pages worth of material to memory by using additional rounds of his bardic performance, but he can never memorize more than half his total bard level in pages (minimum 1).</Pair>
</Ability>
<Ability id="arc-bard-impervious_messenger-song-of-subterfuge-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-impervious_messenger-song-of-subterfuge-su">Song of Subterfuge (Su)</Pair>
<Pair hl title="Replaces">Suggestion, mass suggestion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">An impervious messenger learns to use his performances to project various thoughts into his own mind to disrupt divination attempts. This acts similarly to <Link to="/performance/distraction">distraction</Link>, except it only affects the impervious messenger and allows him to use the result of his Perform check in place of saving throws against attempts to read his mind, such as <Link to="/spell/detect_thoughts">detect thoughts</Link>.</Pair>
<Pair title="At 18th Level">If the impervious messenger succeeds on a saving throw while using <em>song of subterfuge,</em> the character who attempted the divination effect must succeed on a Will save (DC = 20 + the impervious messenger's Charisma modifier) or else the impervious messenger instantly learns the nature of the effect and can allow the effect to continue, but provide whatever information he chooses to the divining character rather than the true results of the divination effect.</Pair>
</Ability>
<Ability id="arc-bard-impervious_messenger-unbroken-stride-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-impervious_messenger-unbroken-stride-su">Unbroken Stride (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom, frightening tune</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">An impervious messenger draws upon his bardic abilities to imbue himself with grace and speed. While using this bardic performance, an impervious messenger gains an insight bonus equal to <Link to="/misc/half">half</Link> his bard level on all Acrobatics, Climb, Fly, and Ride checks. In addition, while maintaining this performance, he gains the benefits of the ranger's <Link to="/ability/woodland_stride">woodland stride</Link> ability and a +10-foot enhancement bonus to his base land speed.</Pair>
<Pair title="At 12th Level">An impervious messenger using his <em>unbroken stride</em> bardic performance also acts as if under the effect of <Link to="/spell/freedom_of_movement">freedom of movement</Link>. In addition, the enhancement bonus to his base land speed increases to +30 feet.</Pair>
</Ability>
<Ability id="arc-bard-impervious_messenger-cryptic-whisper-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-bard-impervious_messenger-cryptic-whisper-ex" flavor="The impervious messenger internalizes his understanding of language and ciphers, and filters them through his bardic abilities.">Cryptic Whisper (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge, well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">He adds half his bard level to all Linguistics checks and Bluff checks to deliver secret messages, and he gains a +4 bonus on saving throws against <Link to="/main/symbol_spells">glyph spells, symbol spells,</Link> and language-dependent effects.</Pair>
</Ability>
</>};
const _juggler = {title: "Juggler", jsx: <><h2 id="arc-bard-juggler-juggler">Juggler</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 7</Link><br/>Jugglers are masters of manipulating objects, most famously by keeping multiple objects in the air simultaneously. They often incorporate this talent into acting, comedy, or dance. Adventuring jugglers find their abilities translate well into the use of thrown weapons.</p>
<Ability id="arc-bard-juggler-weapon-and-armor-proficiencies" icon={["info"]}>
<Pair single id="arc-bard-juggler-weapon-and-armor-proficiencies">Weapon and Armor Proficiencies</Pair>
<Pair hl title="Alters">Weapon and armor proficiencies</Pair>
<Pair title="Info">A juggler is proficient with all simple weapons, plus martial thrown weapons. A juggler is not proficient with shields.</Pair>
</Ability>
<Ability id="arc-bard-juggler-fast-reactions-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-juggler-fast-reactions-ex">Fast Reactions (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge, lore master</Pair>
<Pair title="At 1st Level">A juggler gains <Link to="/feat/deflect_arrows">Deflect Arrows</Link> as a bonus feat.</Pair>
<Pair title="At 5th Level">He gains <Link to="/feat/snatch_arrows">Snatch Arrows</Link> as a bonus feat.</Pair>
<Pair title="At 11th Level">The juggler can use the ability granted by these feats an additional time each round (with a -5 penalty on his second attack roll).</Pair>
<Pair title="At 17th Level">The juggler gains another use of these feats (with a -10 penalty on his third attack roll).</Pair>
<Pair title="Special">The juggler doesn't need to meet the prerequisites for these feats.</Pair>
</Ability>
<Ability id="arc-bard-juggler-combat-juggling-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-juggler-combat-juggling-ex">Combat Juggling (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A juggler can hold and wield (in other words, "juggle") up to three items or weapons in his hands. The juggler must be able to hold and wield an object in one hand in order to juggle it. This ability doesn't grant the juggler additional attacks, though it does allow him to use different weapons as part of a <Link to="/rule/full_attack">full attack</Link>. As long as he is juggling fewer than three objects, the juggler is considered to have a free hand (for the purposes of drawing a weapon, using somatic components, using Deflect Arrows, and so on).</Pair>
<Pair title="At 6th Level">The juggler can juggle four items or weapons at once.</Pair>
<Pair title="At 10th Level">The juggler can juggle five items or weapons at once.</Pair>
<Pair title="At 14th Level">The juggler can juggle six items or weapons at once.</Pair>
<Pair title="At 18th Level">The juggler can juggle seven items or weapons at once.</Pair>
<Pair title="Special">If the juggler is affected by any action or condition that would require a <Link to="/rule/concentration">concentration</Link> check while he is juggling, he must attempt a Sleight of Hand check to continue juggling and avoid losing concentration. The check's DC is the same as a concentration check, treating the spell level as twice the number of objects being juggled. If the juggler fails his Sleight of Hand check, he drops all juggled objects but one, determined randomly.</Pair>
</Ability>
<Ability id="arc-bard-juggler-evasion-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-juggler-evasion-ex">Evasion (Ex)</Pair>
<Pair hl title="Replaces">Well-versed, soothing performance</Pair>
<Pair title="At 2nd Level">A juggler gains <Link to="/ability/evasion">evasion</Link>, as the <Link to="/class/rogue">rogue</Link> class feature of the same name.</Pair>
<Pair title="At 12th Level">He gains <Link to="/talent/improved_evasion">improved evasion</Link>, as the advanced rogue talent.</Pair>
</Ability>
</>};
const _lotus_geisha = {title: "Lotus Geisha", jsx: <><h2 id="arc-bard-lotus_geisha-lotus-geisha">Lotus Geisha</h2>
<p><strong>Sources</strong> <Link to="/source/dragon_empires_primer">Dragon Empires Primer pg. 22</Link><br/>The lotus geisha of Minkai are renowned for their powers of seduction, and tales tell of lotus geisha disarming foes and bolstering allies. The lotus geisha is an archetype of the bard class.</p>
<Ability id="arc-bard-lotus_geisha-weapon-proficiency" icon={["info"]}>
<Pair single id="arc-bard-lotus_geisha-weapon-proficiency">Weapon Proficiency</Pair>
<Pair hl title="Alters">Weapon proficiencies</Pair>
<Pair title="Info">A lotus geisha is proficient with all simple weapons, plus the <Link to="/eq-weapon/butterfly_sword">butterfly sword</Link>, <Link to="/eq-weapon/fighting_fan">fighting fan</Link>, <Link to="/eq-weapon/iron_brush">iron brush</Link>, <Link to="/eq-weapon/sai">sai</Link>, <Link to="/eq-weapon/shortbow">shortbow</Link>, and <Link to="/eq-weapon/shuriken">shuriken</Link>.</Pair>
</Ability>
<Ability id="arc-bard-lotus_geisha-enrapturing-performance-su" icon={["stairs-goal"]}>
<Pair single id="arc-bard-lotus_geisha-enrapturing-performance-su">Enrapturing Performance (Su)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability"><p>A lotus geisha gains the ability to execute an <em>enrapturing performance</em> in addition to her bardic performance ability. An <em>enrapturing performance</em> is exactly like a bardic performance with the following exceptions.</p>
<p>A lotus geisha can use an <em>enrapturing performance</em> to recreate the effects of any of her known bardic performances, but she focuses the performance on only a single target within range. While other creatures see and hear a lotus geisha's <em>enrapturing performance,</em> only the target of this ability is affected by it. A lotus geisha cannot have a bardic performance and an <em>enrapturing performance</em> in effect at the same time. Every round spent engaged in an <em>enrapturing performance</em> counts against the total number of rounds per day she can use her bardic performance, and she cannot use this ability if she does not have any more rounds of bardic performance left for that day. Starting an <em>enrapturing performance</em> is a <strong className="hl">standard action</strong>.</p>
<p>A lotus geisha adds a +2 bonus to the DC of Will saves made to resist the effects of her <em>fascinate, frightening tune,</em> and <em>suggestion enrapturing performances.</em> When a lotus geisha uses her <em>enrapturing performance</em> ability to emulate <em>inspire competence, inspire courage, inspire greatness,</em> or <em>inspire heroics,</em> any bonuses to AC or on ability checks, attack rolls, damage rolls, saving throws, and skill checks increase by +1. For example, a lotus geisha using <Link to="/performance/inspire_heroics">inspire heroics</Link> as an <em>enrapturing performance</em> would grant her target a +5 morale bonus on saving throws and a +5 dodge bonus to AC, instead of the usual +4 bonuses.</p>
</Pair>
<Pair title="At 7th Level">This becomes a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 13th Level">This becomes a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-bard-lotus_geisha-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-bard-lotus_geisha-bonus-feats">Bonus Feats</Pair>
<Pair hl title="Replaces">Bardic knowledge, lore master</Pair>
<Pair title="At 1st Level">A lotus geisha gains <Link to="/feat/spell_focus">Spell Focus</Link> (enchantment) as a bonus feat.</Pair>
<Pair title="At 5th Level">She gains <Link to="/feat/greater_spell_focus">Greater Spell Focus</Link> (enchantment) as a bonus feat.</Pair>
</Ability>
</>};
const _luring_piper = {title: "Luring Piper", jsx: <><h2 id="arc-bard-luring_piper-luring-piper">Luring Piper</h2>
<p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook pg. 11</Link><br/>Some bards have an exceptional ability to use their musical performances to entrance the world's wilder creatures. These performers are so focused that they create melodies capable of leading animals and fey to their unwilling death.</p>
<Ability icon={["skills"]} id="arc-bard-luring_piper-undefined">
<Pair id="arc-bard-luring_piper-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="arc-bard-luring_piper-fey-secrets" icon={["upgrade"]}>
<Pair single id="arc-bard-luring_piper-fey-secrets">Fey Secrets</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A luring piper adds <Link to="/misc/half">half</Link> his class level (minimum 1) on Bluff, Knowledge (nature), Perception, Sense Motive, and Survival checks when interacting with fey.</Pair>
</Ability>
<Ability id="arc-bard-luring_piper-luring-presentation-ex" icon={["armor-downgrade","broken-shield"]}>
<Pair single id="arc-bard-luring_piper-luring-presentation-ex">Luring Presentation (Ex)</Pair>
<Pair hl title="Alters">Bardic performance</Pair>
<Pair title="Passive Ability">Creatures that have the animal or fey type take a -2 penalty on saving throws imposed by a luring piper's bardic performances. Creatures with any other type gain a +2 bonus on saving throws against a luring piper's bardic performances.</Pair>
</Ability>
<Ability id="arc-bard-luring_piper-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-luring_piper-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">The luring piper gains the following types of bardic performances that can only be made when using Perform (wind) and a when employing a wind instrument.</Pair>
</Ability>
<Ability id="arc-bard-luring_piper-charming-melody-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-luring_piper-charming-melody-su">Charming Melody (Su)</Pair>
<Pair hl title="Alters">Fascinate</Pair>
<Pair title="Ability">While using the <Link to="/performance/fascinate">fascinate</Link> bardic performance, the luring piper can play a song that compels animals and fey to follow him wherever he goes. Instead of sitting peacefully and merely observing the luring piper, creatures with the animal or fey type instead quietly and calmly walk toward the luring piper, stopping once they are adjacent to the luring piper and following him if he moves.</Pair>
</Ability>
<Ability id="arc-bard-luring_piper-deadly-lure-sp" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-luring_piper-deadly-lure-sp">Deadly Lure (Sp)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">The luring piper can use his <Link to="/performance/suggestion">suggestion</Link> bardic performance on targeted animals and fey to make them take actions that result in their own injury or death, such as leaping off a cliff or into a river. The targeted creature is allowed a second saving throw to shake off the effect before completing any self-harming actions.</Pair>
</Ability>
<Ability id="arc-bard-luring_piper-fey-wounding-song-sp" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-luring_piper-fey-wounding-song-sp">Fey-Wounding Song (Sp)</Pair>
<Pair hl title="Replaces">Soothing performance</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Full-Round Action">The luring piper can expend 3 rounds of bardic performance to play a song that causes fey tremendous pain. Treat this as equivalent to <Link to="/spell/mass_inflict_serious_wounds">mass inflict serious wounds</Link>, but affecting only fey targets and using the lurid piper's bard level as his caster level.</Pair>
</Ability>
<Ability id="arc-bard-luring_piper-pipers-attention-ex" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="arc-bard-luring_piper-pipers-attention-ex">Piper's Attention (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">Whenever a luring piper is actively using Perform (wind) as part of a bardic performance, he gains a +4 bonus on saving throws against language-dependent, mind-affecting, and sonic effects. If this effect is caused by a fey creature, the luring piper can also roll the saving throw twice and take the better result.</Pair>
</Ability>
</>};
const _magician = {title: "Magician", jsx: <><h2 id="arc-bard-magician-magician">Magician</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 82</Link><br/>A magician dabbles in performance, but sees it as a means to tap into universal energies and channel them.</p>
<Ability id="arc-bard-magician-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-magician-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A magician gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-magician-dweomercraft-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-magician-dweomercraft-su">Dweomercraft (Su)</Pair>
<Pair hl title="Replaces">Inspire courage</Pair>
<Pair title="Ability">A magician can use performance to manipulate magical energies. Allies of the magician gain a +1 bonus on caster level checks, <Link to="/rule/concentration">concentration</Link> checks, and attack rolls with spells and spell-like abilities.</Pair>
<Pair title="At 5th Level">This bonus becomes +2.</Pair>
<Pair title="At 11th Level">This bonus increases to +3.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
<Pair title="Special">This ability relies on visual and audible components.</Pair>
</Ability>
<Ability id="arc-bard-magician-spell-suppression-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-magician-spell-suppression-su" flavor="A magician can use performance to counter the spells of his foes.">Spell Suppression (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Once the bard begins using this performance, he tracks the number of rounds it has been in use. While performing, as an <strong className="hl">immediate action</strong>, he can attempt to counter any spell that he can identify using Spellcraft, so long as that spell's level is equal or less than the total number of rounds he has been performing spell suppression. The attempt to counter the spell is made as if using <Link to="/spell/dispel_magic">dispel magic</Link>, using the bard's level as the caster level. If successful, the bardic performance immediately ends.</Pair>
<Pair title="Special">This ability requires audible components.</Pair>
</Ability>
<Ability id="arc-bard-magician-metamagic-mastery-ex" extraClasses="subAbility" icon={["magic-swirl","upgrade"]}>
<Pair single id="arc-bard-magician-metamagic-mastery-ex">Metamagic Mastery (Ex)</Pair>
<Pair hl title="Replaces">Frightening tune</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">A magician can use performance to apply a <Link to="/main/metamagic_feat">metamagic feat</Link> to a spell he is about to cast without increasing the casting time. The bard must still expend a higher-level slot to cast this spell. This causes the performance to immediately end.</Pair>
<Pair title="Special">This ability requires audible components.</Pair>
</Ability>
<Ability id="arc-bard-magician-magical-talent-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-magician-magical-talent-ex">Magical Talent (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A magician gains a bonus equal to <Link to="/misc/half">half</Link> his level on Knowledge (arcana), Spellcraft, and Use Magic Device checks.</Pair>
</Ability>
<Ability id="arc-bard-magician-improved-counterspell" icon={["stairs-goal"]}>
<Pair single id="arc-bard-magician-improved-counterspell">Improved Counterspell</Pair>
<Pair hl title="Replaces">Countersong</Pair>
<Pair title="Ability">A magician gains <Link to="/feat/improved_counterspell">Improved Counterspell</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-bard-magician-extended-performance-su" icon={["upgrade"]}>
<Pair single id="arc-bard-magician-extended-performance-su">Extended Performance (Su)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Swift Action">A magician can extend the duration of bardic performance after he stops concentrating by sacrificing a spell slot. The performance effect lingers for 1 extra round per level of the spell.</Pair>
<Pair title="Special">Only one spell may be sacrificed per performance, and performance types that take affect after a specific number of rounds cannot be extended.</Pair>
</Ability>
<Ability id="arc-bard-magician-expanded-repertoire-ex" icon={["spell-book"]}>
<Pair single id="arc-bard-magician-expanded-repertoire-ex">Expanded Repertoire (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="At 2nd Level">A magician can add one spell to his spells known from the spell list of any arcane spellcasting class. The spell must be of a level he can cast.</Pair>
<Pair title="At 6th Level">He can add another spell, following the same limitations.</Pair>
<Pair title="At 10th Level">He can add another spell, following the same limitations.</Pair>
<Pair title="At 14th Level">He can add another spell, following the same limitations.</Pair>
<Pair title="At 18th Level">He can add another spell, following the same limitations.</Pair>
</Ability>
<Ability id="arc-bard-magician-arcane-bond-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-magician-arcane-bond-ex">Arcane Bond (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A magician gains the <em>arcane bond</em> ability as a <Link to="/class/wizard">wizard</Link>. He may not choose a familiar or a weapon as a bonded item.</Pair>
</Ability>
<Ability id="arc-bard-magician-wand-mastery-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-magician-wand-mastery-ex">Wand Mastery (Ex)</Pair>
<Pair hl title="Replaces">Jack of all trades</Pair>
<Pair title="At 10th Level">When a magician uses a wand containing a spell on his spell list, he uses his Charisma bonus to set the wand's savel</Pair>
<Pair title="At 16th Level">When using such a wand, he uses his caster level in place of the wand's caster level.</Pair>
</Ability>
</>};
const _masked_performer = {title: "Masked Performer", jsx: <><h2 id="arc-bard-masked_performer-masked-performer">Masked Performer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 20</Link><br/>Not merely an entertainer in a disguise, the masked performer takes on the persona represented by the likeness she wears. Her alter ego might be a theatrical archetype, a legendary hero, or a revered spirit. Masked performers are often the stars of religious plays and festivals, and aficionados easily recognize them and associate them with their most famous role.</p>
<Ability id="arc-bard-masked_performer-dual-identity-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-masked_performer-dual-identity-ex">Dual Identity (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Ability">This ability acts as the <Link to="/class/vigilante">vigilante</Link> ability of the same name, except as follows. The masked performer's identities are referred to as social and masked, rather than social and vigilante. Unlike a vigilante, most people who know of the masked performer actually know that the masked performer's identities are one and the same. Nonetheless, the dual identity ability is valuable to the masked performer due to offering her two perspectives on any problem and two different alignments.</Pair>
</Ability>
<Ability id="arc-bard-masked_performer-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-masked_performer-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A masked performer gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-masked_performer-seamless-guise-ex" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-bard-masked_performer-seamless-guise-ex">Seamless Guise (Ex)</Pair>
<Pair hl title="Replaces">Countersong</Pair>
<Pair title="Ability">A masked performer learns to behave in a way that appears perfectly proper and normal for her current role, on stage or off. She can maintain this performance for 1 hour for every 3 rounds of bardic performance she spends. While this performance is active, she receives a +10 bonus on Disguise and Perform (act) checks to remain in character after she has already established her character. For instance, this bonus does not apply against the initial Perception check when meeting a creature paying attention to her but does apply on the automatic additional Perception check each hour of interacting.</Pair>
</Ability>
<Ability id="arc-bard-masked_performer-exaggerated-pose-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-masked_performer-exaggerated-pose-su">Exaggerated Pose (Su)</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A masked performer can enhance her own physical and social abilities by simply altering her posture. When she starts this performance, the masked performer chooses a Strength-, Dexterity-, or Charisma-based skill and gains a +2 competence bonus on checks with that skill as long as she maintains this performance.</Pair>
<Pair title="Swift Action">The masked performer can change the chosen skill.</Pair>
<Pair title="At 7th Level">The bonus becomes +3.</Pair>
<Pair title="At 11th Level">The bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus becomes +5.</Pair>
<Pair title="At 19th Level">The bonus becomes +6.</Pair>
<Pair title="Special"><em>Exaggerated pose</em> is an emotion effect and relies on visual components.</Pair>
</Ability>
<Ability id="arc-bard-masked_performer-stage-combat-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-masked_performer-stage-combat-su">Stage Combat (Su)</Pair>
<Pair hl title="Replaces">Suggestion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A masked performer gains the benefit of a <Link to="/main/combat_feat">combat feat</Link> she doesn't have as long as she maintains this performance. The masked performer chooses the feat when she starts this performance. The masked performer must meet all the feat's prerequisites.</Pair>
<Pair title="Special">As usual when temporarily gaining a feat, if the feat she chooses has any limitations on uses, such as <Link to="/feat/stunning_fist">Stunning Fist's</Link> daily uses, all uses of that combat feat while maintaining <em>stage combat</em> count toward that feat's limit. In the case of Stunning Fist, if the masked performer gained that feat again later the same day, the expended uses would remain expended. <em>Stage combat</em> relies on visual components.</Pair>
</Ability>
<Ability id="arc-bard-masked_performer-multiplicity-of-masks-su" extraClasses="subAbility" icon={["magic-swirl","abstract-091"]}>
<Pair single id="arc-bard-masked_performer-multiplicity-of-masks-su">Multiplicity of Masks (Su)</Pair>
<Pair hl title="Replaces">Mass suggestion</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Ability">A masked performer can cause any number of her allies to appear as herself or as another ally within 60 feet. To be affected, an ally must be within 60 feet of the masker performer and able to see her. As long as the masked performer maintains this performance, enemies perceive all affected allies as the chosen character. If an affected ally is a different size or creature type than the chosen character, enemies can attempt a Will save (DC = 10 + <Link to="/misc/half">half</Link> the masked performer's bard level + her Charisma modifier) to disbelieve. Otherwise, there is no saving throw, but a successful attack against a disguised ally automatically reveals the ally's true form.</Pair>
<Pair title="Special">If an ally moves out of range, that ally reverts to his original form, and the entire effect ends if the ally providing his appearance to the others moves out of range. <em>Multiplicity of masks</em> is an illusion (glamer) effect that relies on visual components.</Pair>
</Ability>
<Ability id="arc-bard-masked_performer-social-grace-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-masked_performer-social-grace-ex">Social Grace (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A masked performer gains the <Link to="/soctalent/social_grace">social grace</Link> vigilante social talent.</Pair>
<Pair title="Special">She gains an additional skill with <em>social grace</em> 1 level later than a vigilante (at 6th level, 10th level, 14th level, and 18th level).</Pair>
</Ability>
<Ability id="arc-bard-masked_performer-masked-talents" icon={["stairs-goal"]}>
<Pair single id="arc-bard-masked_performer-masked-talents">Masked Talents</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="At 5th Level">A masked performer gains a rogue talent from the following list: <Link to="/talent/expert_leaper">expert leaper</Link>, <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/ledge_walker">ledge walker</Link>, <Link to="/talent/rogue_crawl">rogue crawl</Link>, <Link to="/talent/rope_master">rope master</Link>, <Link to="/talent/stand_up">stand up</Link>, and <Link to="/talent/wall_scramble">wall scramble</Link>.</Pair>
<Pair title="At 17th Level">A masked performer can choose any of the above talents or an advanced rogue talent from the following list: <Link to="/talent/defensive_roll">defensive roll</Link>, <Link to="/talent/fast_tumble">fast tumble</Link>, <Link to="/talent/hide_in_plain_sight">hide in plain sight</Link>, and <Link to="/talent/skill_mastery">skill mastery</Link>.</Pair>
<Pair title="Special">This ability does not qualify her for the <Link to="/feat/extra_rogue_talent">Extra Rogue Talent</Link> feat.</Pair>
</Ability>
</>};
const _mute_musician = {title: "Mute Musician", jsx: <><h2 id="arc-bard-mute_musician-mute-musician">Mute Musician</h2>
<p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms pg. 9</Link><br/>A mute musician forswears speech for the unnatural songs and thunderous silences of the depths of space. She learns to blend light and sound in seemingly impossible ways. Some mute musicians look to the darker aspects of <Link to="/faith/desna">Desna</Link> as their inspiration for these performances, but most mute musicians find their muse in the alien sounds of the Elder Mythos and the entities that orbit the blind idiot god <Link to="/faith/azathoth">Azathoth</Link>, who floats in the heart of the Dark Tapestry.</p>
<Ability id="arc-bard-mute_musician-mute-ex" icon={["broken-shield"]}>
<Pair single id="arc-bard-mute_musician-mute-ex">Mute (Ex)</Pair>
<Pair title="Ability">A mute musician has a disability or injury (possibly self-inflicted or even psychological) that prevents her from speaking or vocalizing. Language-dependent effects (including Perform [oratory]) require the bard to be able to use telepathy, nonverbal languages, or writing to communicate. She cannot use Perform (sing) or speak languages, though she can still create audible bardic performances by means of a musical instrument. A mute musician can provide verbal and somatic components for spells she casts via any musical instrument in which she has ranks in the appropriate Perform skill.</Pair>
</Ability>
<Ability id="arc-bard-mute_musician-eschew-materials-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-mute_musician-eschew-materials-ex">Eschew Materials (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Ability">A mute musician gains <Link to="/feat/eschew_materials">Eschew Materials</Link> as a bonus feat at 1st level.</Pair>
</Ability>
<Ability id="arc-bard-mute_musician-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-mute_musician-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A mute musician gains the following bardic performances.</Pair>
</Ability>
<Ability id="arc-bard-mute_musician-symphony-of-silence-su" extraClasses="subAbility" icon={["abstract-091","shield-reflect"]}>
<Pair single id="arc-bard-mute_musician-symphony-of-silence-su">Symphony of Silence (Su)</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The mute musician's music muffles all other sounds within a 30-foot radius. All creatures in the area of effect gain a +2 bonus on all saving throws made against sonic attacks or language-dependent effects.</Pair>
<Pair title="At 7th Level">The bonus becomes +3.</Pair>
<Pair title="At 11th Level">The bonus becomes +4.</Pair>
<Pair title="At 15th Level">The bonus becomes +5.</Pair>
<Pair title="At 19th Level">The bonus becomes +6.</Pair>
<Pair title="Special">Symphony of silence relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-mute_musician-maddening-harmonics-su" extraClasses="subAbility" icon={["abstract-091","armor-downgrade"]}>
<Pair single id="arc-bard-mute_musician-maddening-harmonics-su">Maddening Harmonics (Su)</Pair>
<Pair hl title="Replaces">Frightening tune</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">The mute musician can create a performance so baffling and discordant that it usurps all thought within a 30-foot radius with chaos and entropy. The mute musician can select which creatures in this area are affected by the maddening harmonics and which are not. All targeted creatures within this area must succeed at a Will saving throw (DC = 10 + <Link to="/misc/half">half</Link> the bard's level + the bard's Charisma modifier) or be confused for as long as they can hear the performance.</Pair>
<Pair title="Special">If the creature succeeds at its saving throw, it is immune to this ability for 24 hours. This performance relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-mute_musician-ceaseless-performance-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-mute_musician-ceaseless-performance-su">Ceaseless Performance (Su)</Pair>
<Pair hl title="Replaces">Inspire heroics</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">The mute musician can continue taking the <strong className="hl">free action</strong> to maintain a bardic performance even while confused, cowering in fear, dazed, nauseated, panicked, paralyzed, petrified, silenced, staggered, stunned, or unconscious. Even if the mute musician is killed, she can continue to take the free action to maintain her performance as long as she has rounds remaining. Only the utter destruction of the mute musician's body (such as via <Link to="/spell/destruction">destruction</Link> or <Link to="/spell/disintegrate">disintegrate</Link>, or by reducing the bard to a negative hit point total equal to 10 &times; her Constitution score) causes the performance to end.</Pair>
</Ability>
<Ability id="arc-bard-mute_musician-song-of-the-conjunction-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-mute_musician-song-of-the-conjunction-su">Song of the Conjunction (Su)</Pair>
<Pair hl title="Replaces">Mass suggestion</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Ability">The mute musician can harmonize with the alien chorus beyond the music of the spheres, creating a portentous cosmic alignment. This effect duplicates a <Link to="/spell/gate">gate</Link> used to travel, save that the destination point must be on the same plane as the bard, but it is not otherwise limited by distance.</Pair>
</Ability>
<Ability id="arc-bard-mute_musician-insights-from-beyond-ex" icon={["spell-book"]}>
<Pair single id="arc-bard-mute_musician-insights-from-beyond-ex">Insights from Beyond (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Choice">A mute musician adds two abjuration, conjuration (calling), conjuration (summoning), or conjuration (teleportation) spells from the <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/spells_wizard">wizard</Link> spell list to her list of bard spells known.</Pair>
<Pair title="At 6th Level">The bard can choose two more spells to add to her spells known.</Pair>
<Pair title="At 10th Level">The bard can choose two more spells to know.</Pair>
<Pair title="At 14th Level">The bard can choose two more spells to know.</Pair>
<Pair title="At 18th Level">The bard can choose two more spells to know.</Pair>
</Ability>
<Ability id="arc-bard-mute_musician-dulled-horror-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-mute_musician-dulled-horror-ex">Dulled Horror (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">At 2nd level, a mute musician gains a +4 bonus on saves against confusion, fear, insanity effects, and the supernatural abilities of aberrations.</Pair>
</Ability>
<Ability id="arc-bard-mute_musician-eldritch-caesura-su" icon={["upgrade"]}>
<Pair single id="arc-bard-mute_musician-eldritch-caesura-su">Eldritch Caesura (Su)</Pair>
<Pair hl title="Replaces">Jack-of-all-trades</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">A mute musician can insert unsettling silences into her otherworldly music by spending an additional 1 round of bardic performance per round. This supernatural technique impossibly blurs the line between music and light, transmitting audible performances and sonic bard spells through most barriers save lead. This allows the music and sonic spells to affect creatures across planar boundaries (including on the <Link to="/rule/ethereal_plane">Ethereal</Link> or <Link to="/rule/shadow_plane">Shadow Planes</Link>), vacuums, and areas of magical silence.</Pair>
</Ability>
<Ability id="arc-bard-mute_musician-ex-mute-musicians" icon={["hazard-sign"]}>
<Pair single id="arc-bard-mute_musician-ex-mute-musicians">Ex-Mute Musicians</Pair>
<Pair title="Info">A mute musician who regains the ability to speak or chooses to speak aloud loses all abilities granted by this archetype. She can regain the archetype's abilities by spending 24 hours without speaking.</Pair>
</Ability>
</>};
const _negotiator = {title: "Negotiator", jsx: <><h2 id="arc-bard-negotiator-negotiator">Negotiator</h2>
<p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance pg. 18</Link><br/>Bards are experts at manipulating the emotions and perceptions of others. Negotiators are those bards who take the skills of a performer and apply them to the realms of business and law.</p>
<Ability id="arc-bard-negotiator-hard-bargainer" icon={["upgrade"]}>
<Pair single id="arc-bard-negotiator-hard-bargainer">Hard Bargainer</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A negotiator adds <Link to="/misc/half">half</Link> his class level (minimum 1) on Bluff, Diplomacy, Intimidate, Knowledge (local), and Sense Motive checks.</Pair>
</Ability>
<Ability id="arc-bard-negotiator-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-negotiator-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A negotiator gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-negotiator-counterargument-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-negotiator-counterargument-su">Counterargument (Su)</Pair>
<Pair title="Ability">This performance acts as <Link to="/performance/countersong">countersong</Link>, except a negotiator can use only Perform (act, comedy, oratory, or sing) to perform a counterargument.</Pair>
</Ability>
<Ability id="arc-bard-negotiator-fast-talk-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-negotiator-fast-talk-su">Fast Talk (Su)</Pair>
<Pair hl title="Replaces">Inspire courage</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A negotiator can use performance to affect the perceptions of any number of targets that can hear him. While the negotiator performs, these targets take a -1 penalty on saving throws against enchantment (charm) and illusion (figment, glamer, or shadow) effects, as well as a penalty on Appraise checks equal to half the negotiator's level (minimum -1). A target that fails its Appraise check believes that the object in question is worth 10% more or less (negotiator's choice) than its actual value.</Pair>
<Pair title="At 5th Level">The penalty on saving throws becomes -2 and the percentage becomes 20%.</Pair>
<Pair title="At 11th Level">These become -3 and 30%.</Pair>
<Pair title="At 17th Level">These become -4 and 40%.</Pair>
<Pair title="Special">Fast talk is a language-dependent, mind-affecting ability that uses audible components.</Pair>
</Ability>
<Ability id="arc-bard-negotiator-binding-contract-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-negotiator-binding-contract-sp">Binding Contract (Sp)</Pair>
<Pair hl title="Replaces">Inspire greatness</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">The negotiator can bind another creature's promise to the negotiator with a geas. This acts as <Link to="/spell/lesser_geas">lesser geas</Link>, except the creature must have Hit Dice equal to or less than the negotiator's level. The target can negate this effect with a successful Will save (DC = 10 + 1/2 the negotiator's level + the negotiator's Charisma modifier). The geas is discharged if the negotiator breaks his end of the bargain. Using this ability requires 3 rounds of continuous performance, and the target must be able to see and hear the bard throughout the performance.</Pair>
<Pair title="At 18th Level">This effect acts as <Link to="/spell/geas_quest">geas/quest</Link> (no HD limit, and the target cannot attempt a saving throw).</Pair>
<Pair title="Special">Binding contract is an enchantment (compulsion), mind-affecting, language-dependent ability that relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-negotiator-rogue-talents" icon={["stairs-goal"]}>
<Pair single id="arc-bard-negotiator-rogue-talents">Rogue Talents</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="At 2nd Level">A negotiator gains a <Link to="/ability/rogue_talent">rogue talent</Link>, as the rogue class feature of the same name.</Pair>
<Pair title="At 6th Level">The negotiator gains another talent.</Pair>
<Pair title="At 10th Level">The negotiator gains another talent.</Pair>
<Pair title="At 14th Level">The negotiator gains another talent.</Pair>
<Pair title="At 18th Level">The negotiator gains another talent.</Pair>
<Pair title="Special">A negotiator cannot select a rogue talent that modifies the sneak attack ability.</Pair>
</Ability>
<Ability id="arc-bard-negotiator-master-of-rhetoric-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-negotiator-master-of-rhetoric-ex">Master of Rhetoric (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">The negotiator can take 10 on any Bluff, Diplomacy, Intimidate, Knowledge (local), or Sense Motive check if he has ranks in that skill. A negotiator can choose not to take 10 and can instead roll normally. In addition, once per day, the negotiator can take 20 on one of those skill checks (without spending any additional time).</Pair>
<Pair title="At 11th Level">He can take 20 twice a day.</Pair>
<Pair title="At 17th Level">He can take 20 three times a day.</Pair>
</Ability>
<Ability id="arc-bard-negotiator-advanced-talents" icon={["upgrade"]}>
<Pair single id="arc-bard-negotiator-advanced-talents">Advanced Talents</Pair>
<Pair title="At 10th Level">A negotiator can now select an <Link to="/ability/advanced_rogue_talent">advanced rogue talent</Link> in place of a rogue talent. This also applies to the talents gained at 14th and 18th levels.</Pair>
<Pair title="Special">A negotiator cannot select an advanced talent that modifies the sneak attack ability.</Pair>
</Ability>
</>};
const _phrenologist = {title: "Phrenologist", jsx: <><h2 id="arc-bard-phrenologist-phrenologist">Phrenologist</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 114</Link><br/>The phrenologist is an expert at reading creatures' skulls, and he learns to use this knowledge to his benefit.</p>
<Ability id="arc-bard-phrenologist-phrenological-knowledge-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-bard-phrenologist-phrenological-knowledge-ex">Phrenological Knowledge (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Ability">A phrenologist is an expert at reading creatures' skulls. He gains <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> as a bonus feat, and he can use the phrenology skill unlock even if he is untrained in <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>.</Pair>
<Pair title="Passive Ability">He adds <Link to="/misc/half">half</Link> his class level (minimum 1) on all Knowledge (arcana) checks for the phrenology occult skill unlock.</Pair>
</Ability>
<Ability id="arc-bard-phrenologist-skull-versed-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-phrenologist-skull-versed-ex">Skull-Versed (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A phrenologist can use knowledge gleaned from a creature's skull to tailor a performance. All creatures on which the phrenologist has successfully used his phrenology skill unlock take a -2 penalty on all saving throws against the phrenologist's bardic performances.</Pair>
</Ability>
<Ability id="arc-bard-phrenologist-phrenological-savant" icon={["upgrade"]}>
<Pair single id="arc-bard-phrenologist-phrenological-savant">Phrenological Savant</Pair>
<Pair hl title="Replaces">Jack-of-all-trades</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">A phrenologist gains either <Link to="/feat/psychic_maestro">Psychic Maestro</Link> or <Link to="/feat/psychic_virtuoso">Psychic Virtuoso</Link> as a bonus feat. If he chooses Psychic Maestro, he must select phrenology as one of his two skill unlocks to use an additional time.</Pair>
</Ability>
<Ability id="arc-bard-phrenologist-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-phrenologist-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A phrenologist gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-phrenologist-skull-sonata-su" extraClasses="subAbility" icon={["abstract-091"]}>
<Pair single id="arc-bard-phrenologist-skull-sonata-su">Skull Sonata (Su)</Pair>
<Pair hl title="Replaces">Inspire courage</Pair>
<Pair title="Ability">A phrenologist learns to use the resonance of other creatures' skulls to increase sonic damage. All enemies within 30 feet of the phrenologist that have skulls take an amount of additional sonic damage equal to half the phrenologist's bard level (minimum 1) each time they take sonic damage.</Pair>
<Pair title="Special"><em>Skull sonata</em> relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-phrenologist-in-your-head-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-phrenologist-in-your-head-sp">In Your Head (Sp)</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="At 3rd Level">A phrenologist can use his performance to send his own senses into another's skull, as the spell <Link to="/spell/witness">witness</Link> (DC = 10 + 1/2 the phrenologist's class level + his Charisma modifier).</Pair>
<Pair title="At 11th Level">This performance's duration increases to 10 minutes per bard level.</Pair>
<Pair title="At 19th Level">The duration increases to 1 hour per bard level.</Pair>
<Pair title="Special"><em>In your head</em> relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-phrenologist-fingers-of-fascination-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-phrenologist-fingers-of-fascination-su">Fingers of Fascination (Su)</Pair>
<Pair hl title="Alters">Fascinate</Pair>
<Pair title="Ability">When a phrenologist uses the <Link to="/performance/fascinate">fascinate</Link> bardic performance, he can send forth psychic fingers along with his performance, allowing him to study one of the fascinated creatures with his phrenology skill unlock without touching its head physically and without it being helpless, willing, or paralyzed. This does not spend his daily use of the phrenology skill unlock.</Pair>
</Ability>
</>};
const _pitax_academy_of_grand_arts = {title: "Pitax: Academy of Grand Arts", jsx: <><h2 id="arc-bard-pitax_academy_of_grand_arts-pitax-academy-of-grand-arts">Pitax: Academy of Grand Arts</h2>
<p><strong>Sources</strong> <Link to="/source/guide_to_the_river_kingdoms">Guide to the River Kingdoms pg. 40</Link><br/>Bards who have successfully mastered the strict curriculum of Pitax's Academy of Grand Arts to graduate are more adept in their assigned field of performance, at the expense of versatility in other areas. Such bards have the <em>focused performance</em> alternate class ability, which replaces <em>versatile performance.</em></p>
<Ability id="arc-bard-pitax_academy_of_grand_arts-focused-performance-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-pitax_academy_of_grand_arts-focused-performance-ex">Focused Performance (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Choice">A bard must choose one type of Perform skill.</Pair>
<Pair title="Ability">The bard gains <Link to="/feat/extra_performance">Extra Performance</Link> as a bonus feat, usable only with the chosen category of the Perform skill.</Pair>
<Pair title="At 8th Level">The bard gains Extra Performance as an additional bonus feat.</Pair>
<Pair title="At 14th Level">The bard gains Extra Performance again as an additional bonus feat.</Pair>
<Pair title="At 20th Level">The bard again gains Extra Performance as an additional bonus feat.</Pair>
<Pair title="Special">The additional uses of bardic performance gained from the bonus feats cannot be used with any category of the Performance skill other than the one chosen at 2nd level.</Pair>
</Ability>
</>};
const _plant_speaker = {title: "Plant Speaker", jsx: <><h2 id="arc-bard-plant_speaker-plant-speaker-vine-leshy-only">Plant Speaker (Vine Leshy only)</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 22</Link><br/>Plant speakers build upon their racial <em>plantspeech</em> ability and their storytelling tendencies to create an art form full of deep metaphors and allegory rather than specific details and facts.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-bard-plant_speaker--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/vine_leshy">Vine leshy</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-bard-plant_speaker-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-plant_speaker-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">Plant speakers gain the following bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-plant_speaker-leshy-speaker-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-plant_speaker-leshy-speaker-su">Leshy Speaker (Su)</Pair>
<Pair hl title="Replaces">Inspire greatness</Pair>
<Pair title="At 9th Level">The plant speaker can speak to its disembodied brethren, the spirits of nature that become leshys. He performs for 10 minutes and spends 7 rounds of bardic performance to gain the effects of <Link to="/spell/commune_with_nature">commune with nature</Link>.</Pair>
</Ability>
<Ability id="arc-bard-plant_speaker-plant-speech" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-bard-plant_speaker-plant-speech">Plant Speech</Pair>
<Pair hl title="Replaces">Bardic knowledge, well-versed</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A plant speaker's mind-affecting bard spells and class abilities also affect plants, ignoring plants' immunity to mind-affecting effects.</Pair>
<Pair title="At 2nd Level">A plant speaker's racial plantspeech allows him to communicate with all plants, not just plants that match his alternate form.</Pair>
</Ability>
<Ability id="arc-bard-plant_speaker-mystical-allegory-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-bard-plant_speaker-mystical-allegory-su">Mystical Allegory (Su)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="At 5th Level">The plant speaker can tell a story that matches some of the themes of the current situation in order to gain insight, gaining the effects of <Link to="/spell/augury">augury</Link> by performing for 1 minute and spending 4 rounds of bardic performance.</Pair>
<Pair title="At 11th Level">He can perform for 10 minutes and spend 7 rounds of bardic performance to gain the effects of <Link to="/spell/divination">divination</Link>.</Pair>
<Pair title="At 17th Level">He can perform for 1 hour and spend 10 rounds of bardic performance to gain the effects of <Link to="/spell/legend_lore">legend lore</Link>, but the information is always vague and incomplete.</Pair>
</Ability>
</>};
const _prankster = {title: "Prankster", jsx: <><h2 id="arc-bard-prankster-prankster">Prankster</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 35</Link><br/>The prankster sees humor as the highest form or art, and pranks as the highest form of humor. In addition to setting friends up for light-hearted pranks, the prankster can use his quick wit and cruel sense of humor to enrage foes before incapacitating them with a clever turn of phrase.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-bard-prankster--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/gnome">Gnome</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-bard-prankster-bardic-performance" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-bard-prankster-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A prankster's bardic performance functions like a bard's, but some of its performances are exchanged for those listed below.</Pair>
</Ability>
<Ability id="arc-bard-prankster-mock-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-prankster-mock-su">Mock (Su)</Pair>
<Pair hl title="Replaces">Fascinate</Pair>
<Pair title="At 1st Level">The prankster can use his performance to cause one creature to become furious with him. The creature to be mocked must be within 90 feet, able to see, hear, and understand the prankster, and capable of paying attention to him. The prankster must also be able to see the creature affected. A creature within range receives a Will save (DC 10 + <Link to="/misc/half">half</Link> the prankster's level + the prankster's Charisma modifier) to negate the effect. If a creature's saving throw succeeds, the prankster cannot successfully mock that creature for 24 hours. If its saving throw fails, the creature is angered by the performance and seeks to harm the prankster. While the prankster maintains the mocking, the target takes a -2 penalty on all attack rolls and skill checks until it has successfully attacked the prankster with a melee or ranged attack, or has harmed the creature with a spell that deals damage.</Pair>
<Pair title="At 4th Level">He can mock two people at once.</Pair>
<Pair title="At 7th Level">He can mock three creatures at once.</Pair>
<Pair title="At 10th Level">He can mock four at once.</Pair>
<Pair title="At 13th Level">He can mock five creatures at once.</Pair>
<Pair title="At 16th Level">He can mock six at once.</Pair>
<Pair title="At 19th Level">He can mock seven people at once.</Pair>
<Pair title="Special">Mock is an enchantment (compulsion) mind-affecting ability. Mock relies on audible and visual components in order to function.</Pair>
</Ability>
<Ability id="arc-bard-prankster-punchline-sp" extraClasses="subAbility" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-bard-prankster-punchline-sp">Punchline (Sp)</Pair>
<Pair hl title="Replaces">Suggestion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The prankster can use his performance to tell a punchline to amuse a creature he has already <em>mocked</em> (see above), goading it into <Link to="/spell/hideous_laughter">hideous laughter</Link> (as the spell). Using this ability does not disrupt the <em>mock</em> effect, but it does require a <strong className="hl">standard action</strong> to activate (in addition to the <strong className="hl">free action</strong> to continue the <em>mock</em> effect). This ability affects only a single creature. A prankster can use this ability more than once against an individual creature during an individual performance.</Pair>
<Pair title="Special">Telling a punchline does not count against a prankster's daily use of bardic performance. A Will saving throw (DC 10 + 1/2 the bard's level + the bard's Charisma modifier) negates the effect. Punchline is an enchantment (compulsion), mind affecting, language-dependent ability and relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-prankster-mass-punchline-sp" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-prankster-mass-punchline-sp">Mass Punchline (Sp)</Pair>
<Pair hl title="Replaces">Mass suggestion</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Ability">This ability functions just like <em>punchline,</em> but allows a prankster of 18th level or higher to use <em>hideous laughter</em> simultaneously against any number of creatures that he has mocked.</Pair>
</Ability>
<Ability id="arc-bard-prankster-swap-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-prankster-swap-ex">Swap (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Ability">A prankster can steal an object from a creature and replace it with another object of the same size or smaller that the prankster has in his hand. This functions as the <Link to="/rule/steal">steal</Link> combat maneuver, but the prankster does not provoke an attack of opportunity, and may use his Sleight of Hand check in place of his combat maneuver check. If the prankster's check exceeds the target's CMD by 10 or more, the target is unaware the swap has been made until it tries to use the swapped object or the end of its next turn (whichever happens first).</Pair>
</Ability>
</>};
const _provocateur = {title: "Provocateur", jsx: <><h2 id="arc-bard-provocateur-provocateur">Provocateur</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 45</Link><br/>Provocateurs are bards who use their art to make controversial political statements, undermine enemies' reputations, and upset the status quo on a large scale. They can be found most often in areas of political unrest such as the unruly Chelish city of Kintargo, throughout rebellion-fraught Galt, and among the backstabbing upper classes of Absalom, Brevoy, and Taldor.</p>
<Ability id="arc-bard-provocateur-provocateur-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-provocateur-provocateur-ex">Provocateur (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A provocateur adds <Link to="/misc/half">half</Link> his bard level on skill checks to reduce a target's <Link to="/rule/influence">influence</Link> and on skill checks to reduce a target's attitude toward another creature or organization.</Pair>
</Ability>
<Ability id="arc-bard-provocateur-calumny-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-provocateur-calumny-ex">Calumny (Ex)</Pair>
<Pair hl title="Replaces">The versatile performance gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A provocateur can use his Perform (comedy, oratory, or sing) modifier in place of his Bluff and Diplomacy modifier on checks to <Link to="/rule/spread_a_rumor">spread a rumor</Link> and in place of his Intimidate modifier on checks to demoralize foes.</Pair>
</Ability>
<Ability id="arc-bard-provocateur-damning-performance-su" icon={["stairs-goal"]}>
<Pair single id="arc-bard-provocateur-damning-performance-su">Damning Performance (Su)</Pair>
<Pair hl title="Replaces">Suggestion, mass suggestion</Pair>
<Pair title="At 4th Level">A provocateur can cause all observers fascinated by her <Link to="/performance/fascinate">fascinate</Link> performance to become less friendly to a target creature or group of her choice for 10 minutes per bard level. Affected observers' attitudes toward the target, the target's influence with affected observers, and affected observers' trust level as <Link to="/rule/contacts">contacts</Link> for the target are all reduced by one step. If she reveals information during the performance that would reduce those creatures' attitudes anyway, those attitudes worsen by an additional step for the duration. If the provocateur engages in a <Link to="/rule/verbal_duels">verbal duel</Link> against the target with an audience affected by damning performance, she automatically gains two edges.</Pair>
<Pair title="At 18th Level">The duration increases to 1 day per bard level.</Pair>
</Ability>
</>};
const _ringleader_ag = {title: "Ringleader (AG)", jsx: <><h2 id="arc-bard-ringleader_ag-ringleader-ag">Ringleader (AG)</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 33</Link><br/>The <Link to="/rule/aspis_consortium">Aspis Consortium's</Link> global operations are too extensive to conduct without relying on contractors and hirelings. Ringleaders are specialists who oversee large operations in which trouble could strike at any moment and any place.</p>
<Ability id="arc-bard-ringleader_ag-cunning-plan-su" icon={["upgrade"]}>
<Pair single id="arc-bard-ringleader_ag-cunning-plan-su">Cunning Plan (Su)</Pair>
<Pair hl title="Alters">Bardic performance</Pair>
<Pair title="Ability">By spending 1 minute laying out a plan, a ringleader can impart inspiring instructions to a number of allies equal to her bard level + her Charisma bonus. Upon concluding the plan, the ringleader chooses one of her bardic performances and expends a number of rounds of bardic performance equal to up to double her bard level. Thereafter, as a <strong className="hl">move action</strong>, the ringleader or any of the instructed allies can trigger the implanted instructions, causing that creature to immediately gain the benefits of the ringleader's implanted bardic performance (each creature can trigger the instructions for itself separately). This effect lasts for a number of rounds equal to the rounds of bardic performance the ringleader expended while creating the plan, though the effect also ends if the ringleader dismisses it as a <strong className="hl">free action</strong> or activates a different plan or bardic performance.</Pair>
<Pair title="Info">A ringleader is less capable of improvising, and when she uses bardic performance without creating a cunning plan, she must expend 1 additional round of bardic performance to begin the performance.</Pair>
<Pair title="At 7th Level">The ringleader (but not an ally) can trigger a cunning plan as a <strong className="hl">swift action</strong> instead of as a move action.</Pair>
<Pair title="At 13th Level">The ringleader can trigger a cunning plan as an <strong className="hl">immediate action</strong>.</Pair>
<Pair title="Special">For the purpose of this ability, the ringleader attempts any skill checks associated with the bardic performance once a creature triggers the plan. A ringleader's cunning plans all expire each time she regains her daily spell slots or after 24 hours (whichever comes first).</Pair>
</Ability>
<Ability id="arc-bard-ringleader_ag-never-lose-face-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-ringleader_ag-never-lose-face-ex">Never Lose Face (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A ringleader is never outdone by her minions. She gains a +2 bonus on saving throws against effects that also target one or more of her allies.</Pair>
</Ability>
<Ability id="arc-bard-ringleader_ag-sinister-mien-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-bard-ringleader_ag-sinister-mien-ex">Sinister Mien (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="At 2nd Level">A ringleader can use her Intimidate bonus in place of her Perform bonus when using her bardic performance class ability. When the ringleader uses Intimidate to improve a creature's attitude, the creature's attitude remains friendly for 10 additional minutes per point by which the ringleader exceeded the check's DC.</Pair>
<Pair title="At 6th Level">The ringleader gains <Link to="/feat/dazzling_display">Dazzling Display</Link> as a bonus feat and does not need a weapon in her hand to use the feat.</Pair>
<Pair title="At 10th Level">The ringleader can activate Dazzling Display as a <strong className="hl">standard action</strong>.</Pair>
<Pair title="At 14th Level">She can affect all enemies within 60 feet with Dazzling Display.</Pair>
<Pair title="At 18th Level">The range increases to 120 feet.</Pair>
</Ability>
<Ability id="arc-bard-ringleader_ag-countless-contingencies-su" icon={["stairs-goal"]}>
<Pair single id="arc-bard-ringleader_ag-countless-contingencies-su">Countless Contingencies (Su)</Pair>
<Pair hl title="Replaces">Suggestion, mass suggestion, soothing performance</Pair>
<Pair title="At 6th Level">Whenever a ringleader creates a plan using her cunning plan ability, she can choose two different bardic performances. When she triggers the plan, she chooses which of the two performances takes effect.</Pair>
<Pair title="At 12th Level">A ringleader can spend a <strong className="hl">standard action</strong> and 2 rounds of bardic performance to extend the duration of a triggered plan by 1d4 rounds.</Pair>
<Pair title="At 18th Level">The ringleader can choose three different bardic performances when using her cunning plan ability.</Pair>
</Ability>
</>};
const _ringleader_ui = {title: "Ringleader (UI)", jsx: <><h2 id="arc-bard-ringleader_ui-ringleader-ui">Ringleader (UI)</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 21</Link><br/>Ringleaders are adept in getting the most out of their allies, and they excel at planning for unexpected complications in advance. Often the masterminds behind elaborate heists and infiltrations, ringleaders use their organizational abilities to make sure the plan goes without a hitch, even when the team is split up and unable to communicate with each other on the spot.</p>
<Ability id="arc-bard-ringleader_ui-inspire-competence-su" icon={["upgrade"]}>
<Pair single id="arc-bard-ringleader_ui-inspire-competence-su">Inspire Competence (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom, frightening tune</Pair>
<Pair hl title="Alters">Inspire competence</Pair>
<Pair title="At 3rd Level">A ringleader can use his performance to help an ally succeed at a task. This ability acts as the <Link to="/performance/inspire_competence">inspire competence</Link> bardic performance with the following additions.</Pair>
<Pair title="At 8th Level">The ringleader's ally gains a competence bonus on an additional skill (for a total of two skills). In addition, he can end the effect to reroll a check with one of the affected skills (the reroll still applies the bonus from inspire competence). Each ally can only use this latter ability once per day, regardless of the number of skills affected and the number of times they are affected by inspire competence.</Pair>
<Pair title="At 14th Level">The ringleader's ally gains a competence bonus on an additional skill (for a total of three skills). In addition, he can take 10 on the affected skills when stressed or distracted.</Pair>
</Ability>
<Ability id="arc-bard-ringleader_ui-inspired-plan-su" icon={["upgrade"]}>
<Pair single id="arc-bard-ringleader_ui-inspired-plan-su">Inspired Plan (Su)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability"><p>A ringleader can alter his performance so it affects a single ally at a later time. The ringleader must explain his plan to that ally for a number of minutes equal to the number of bardic performance rounds he expends on the effect, and use audible and/or visual components according to the performance altered. This costs the ringleader the chosen number of rounds of bardic performance.</p>
<p>At any time before the ringleader recovers bardic performance rounds for the day, the inspired character can activate the performance as a <strong className="hl">standard action</strong> wherever she is. When activated, the altered performance affects only the inspired ally and has no audible or visible components. If the performance could normally affect any number of allies, its effects last 2 rounds for each round the ringleader spent on the performance. Otherwise, the effects last 1 round for each round the ringleader spent on the performance.</p>
<p>A ringleader can alter only the <em>countersong, distraction, inspire courage, inspire competence, inspire greatness,</em> and <em>inspire heroics</em> performances in this way. The ringleader makes any necessary choices when establishing the performance, though in the case of <em>countersong</em> and <em>distraction,</em> the ringleader attempts Perform checks once his ally triggers the plan, ignoring any temporary bonuses or penalties, no matter whether they applied when he explained the plan or when the ally triggers it.</p>
<p>A character can be subject to only one inspired plan at a time and cannot be subject to a ringleader's inspired plan and any of the ringleader's normal performances at the same time, but she can benefit from other bardic performances in the interim. The ringleader cannot use inspired plan on himself, but he can have dormant plans ready to trigger on as many different allies as he can afford to affect at once.</p>
</Pair>
</Ability>
<Ability id="arc-bard-ringleader_ui-hidden-plans-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-ringleader_ui-hidden-plans-ex">Hidden Plans (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A ringleader becomes a master of discretion. The ringleader gains a +4 bonus on saving throws against effects that would read his thoughts or compel him to tell the truth.</Pair>
</Ability>
<Ability id="arc-bard-ringleader_ui-prepared-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-ringleader_ui-prepared-ex">Prepared (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 time/day per five bard levels<ByLevelPop levels={[[5,1],[10,2],[15,3],[20,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A ringleader expects the unexpected. When the ringleader is in a situation where he could use a particular piece of nonmagical gear, the ringleader can attempt a Knowledge check appropriate to his current situation to have purchased that item in advance. The DC of the check is equal to the item's cost in gp. If he succeeds, he deducts the appropriate cost of the item from his current gp total and now has the item in question on his person. He cannot use this ability to retroactively gain an item that would change his encumbrance to a different load category, though in this case, he can attempt to retrieve such objects from a pack mule, extradimensional storage space, or other location that would not affect his encumbrance.</Pair>
</Ability>
</>};
const _sandman = {title: "Sandman", jsx: <><h2 id="arc-bard-sandman-sandman">Sandman</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 82</Link><br/>Combining performance with stealth, trickery, and guile, the sandman uses cleverness to keep others off-balance.</p>
<Ability id="arc-bard-sandman-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-sandman-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A sandman gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-sandman-stealspell-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-sandman-stealspell-su">Stealspell (Su)</Pair>
<Pair hl title="Replaces">Inspire courage</Pair>
<Pair title="Ability">A sandman can use performance to steal spells from his foes and add them to his list of spells known. Once the performance is started, the bard can steal a prepared spell or a spell known from another creature with a touch attack as a standard action. The target receives a Will save (DC 10 + <Link to="/misc/half">half</Link> the bard's level + the bard's Cha bonus) to negate the effect. The sandman may choose a spell to steal, but if the target does not possess the spell, the bardic performance immediately ends. Otherwise the spell stolen is random, but it is always of the highest level that the bard can cast, if possible. The target loses the prepared spell or spell known and the sandman adds it to his list of spells known for as long as the performance continues, after which it reverts to the original recipient.</Pair>
<Pair title="Info">While stolen, the bard can cast the spell using his available spell slots. This use does not consume the stolen spell. If the bard steals another spell while a spell is stolen, the previous spell immediately reverts to its original owner.</Pair>
<Pair title="Special">This ability requires visual components.</Pair>
</Ability>
<Ability id="arc-bard-sandman-slumber-song-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-sandman-slumber-song-sp">Slumber Song (Sp)</Pair>
<Pair hl title="Replaces">Suggestion</Pair>
<Pair title="At 6th Level">A sandman can use his performance to cause a creature he has already <em>fascinated</em> to fall asleep (as <Link to="/spell/deep_slumber">deep slumber</Link>, but with no HD limit). Otherwise, this ability functions like <Link to="/performance/suggestion">suggestion</Link>.</Pair>
</Ability>
<Ability id="arc-bard-sandman-dramatic-subtext-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-sandman-dramatic-subtext-su">Dramatic Subtext (Su)</Pair>
<Pair hl title="Replaces">Inspire greatness</Pair>
<Pair title="At 9th Level">A sandman can use bardic performance to cast spells without obvious visual or audible components while retaining the spell's normal effects. Observers must succeed at a Perception check opposed by a sandman's Sleight of Hand check to notice that the sandman is the source of the spellcasting (though spellcasting still provokes attacks of opportunity).</Pair>
<Pair title="Special">The bard must use this performance for at least 2 rounds before casting a spell; otherwise he is automatically detected and the performance ends.</Pair>
</Ability>
<Ability id="arc-bard-sandman-greater-stealspell-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-sandman-greater-stealspell-su">Greater Stealspell (Su)</Pair>
<Pair hl title="Replaces">Inspire heroics</Pair>
<Pair title="At 15th Level">A sandman's <em>stealspell</em> power improves. When a target fails a save against his <em>stealspell</em> performance, the sandman discovers its spell resistance (if any) and all spells it has prepared or knows. He can then choose which spell to steal. The sandman may forgo stealing a spell and instead reduce the target's SR by an amount equal to half his bard level and gain that amount of spell resistance for as long as he continues performing.</Pair>
<Pair title="Special">If he steals additional spell resistance, it stacks with previously stolen SR. If he steals a spell or ceases performing, the spell resistance immediately reverts back to its owner.</Pair>
</Ability>
<Ability id="arc-bard-sandman-mass-slumber-song-sp" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-sandman-mass-slumber-song-sp">Mass Slumber Song (Sp)</Pair>
<Pair hl title="Replaces">Mass suggestion</Pair>
<Pair title="At 18th Level">A sandman can use <em>slumber song</em> to affect any number of <em>fascinated</em> creatures within 30 feet. Otherwise, this ability functions like <Link to="/performance/mass_suggestion">mass suggestion</Link>.</Pair>
</Ability>
<Ability id="arc-bard-sandman-spell-catching-su" extraClasses="subAbility" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="arc-bard-sandman-spell-catching-su">Spell Catching (Su)</Pair>
<Pair hl title="Replaces">Deadly performance</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Immediate Action">A sandman who saves against a spell or spell-like ability that targets only him (not including area spells) may respond with his bardic performance. He must attempt a caster level check (DC 10 + the spell's original caster level). If it succeeds, the sandman can absorb the spell effect without harm and immediately recast that spell (using the original caster's level and save DC) or any spell he knows of that level or lower.</Pair>
<Pair title="Special">Using this ability consumes a number of rounds of bardic performance equal to the spell's level, even if the check fails.</Pair>
</Ability>
<Ability id="arc-bard-sandman-master-of-deception-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-bard-sandman-master-of-deception-ex">Master of Deception (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A sandman gains a bonus equal to half his level on Bluff, Sleight of Hand, and Stealth checks.</Pair>
<Pair title="Ability">He may also disarm magical traps with Disable Device as a rogue's <Link to="/ability/trapfinding">trapfinding</Link> ability.</Pair>
</Ability>
<Ability id="arc-bard-sandman-sneakspell-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-sandman-sneakspell-ex">Sneakspell (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="At 2nd Level">A sandman adds +1 to the save DC of spells and bardic performance against opponents who are denied their Dex bonus.</Pair>
<Pair title="At 6th Level">He gains a +2 bonus on caster level checks to overcome spell resistance against such foes.</Pair>
<Pair title="At 10th Level">The save DC now increases by +2.</Pair>
<Pair title="At 14th Level">The bonus on caster level checks becomes +4.</Pair>
<Pair title="At 18th Level">The save DC now increases by +3.</Pair>
</Ability>
<Ability id="arc-bard-sandman-trap-sense-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-sandman-trap-sense-ex">Trap Sense (Ex)</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A sandman gains a bonus on Reflex saves against traps and a dodge bonus to AC against traps. These bonuses are equal to one-third his bard level.</Pair>
</Ability>
<Ability id="arc-bard-sandman-sneak-attack-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-sandman-sneak-attack-ex">Sneak Attack (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Ability">A sandman inflicts extra damage against targets within 30 feet that he flanks or that are denied their Dex bonus to AC against him. This damage is equal to +1d6 points for every five bard levels he has (e.g, a 15th-level sandman would deal +3d6 extra damage).</Pair>
</Ability>
</>};
const _savage_skald = {title: "Savage Skald", jsx: <><h2 id="arc-bard-savage_skald-savage-skald">Savage Skald</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 84</Link><br/>Far from civilization, furious tribes have their own war-singers, work-chanters, and lore-keepers, savaging enemies with song and sword alike.</p>
<Ability id="arc-bard-savage_skald-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-savage_skald-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A savage skald gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-savage_skald-inspiring-blow-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-savage_skald-inspiring-blow-su" flavor="A savage skald roars his war-cries with each telling blow.">Inspiring Blow (Su)</Pair>
<Pair hl title="Replaces">Fascinate</Pair>
<Pair title="Immediate Action">When he confirms a critical hit, he can start this performance (ending any other performances). He gains <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to his Charisma modifier (if positive), and all allies within 30 feet gain a +1 morale bonus on their next attack roll prior to the start of his next turn. These temporary hit points remain until the bard ends his performance.</Pair>
</Ability>
<Ability id="arc-bard-savage_skald-incite-rage-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-savage_skald-incite-rage-su">Incite Rage (Su)</Pair>
<Pair hl title="Replaces">Suggestion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A savage skald can induce a furious rage in one creature within 30 feet. This effect functions as a <Link to="/spell/rage">rage</Link> spell that lasts as long as the target can hear the bard's performance; however, unwilling creatures can be affected if they fail a Will save (DC 10 + <Link to="/misc/half">half</Link> the bard's level + the bard's Cha modifier). Success renders the target immune to this power for 24 hours. The bard cannot target himself with this ability.</Pair>
<Pair title="Special">If the target has the rage class feature, it can instead immediately rage and stay in this rage without consuming rounds of rage per day as long as the bard continues performing. This mind-affecting effect requires audible components.</Pair>
</Ability>
<Ability id="arc-bard-savage_skald-song-of-the-fallen-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-savage_skald-song-of-the-fallen-sp">Song of the Fallen (Sp)</Pair>
<Pair hl title="Replaces">Jack of all trades</Pair>
<Pair title="At 10th Level">A savage skald can duplicate the effect of a <Link to="/magic-wondrous/horn_of_valhalla">horn of Valhalla</Link>. This effect requires 10 continuous rounds of performance. This summons barbarians as a silver horn.</Pair>
<Pair title="At 13th Level">This summons barbarians as a brass horn.</Pair>
<Pair title="At 16th Level">This now summons as a bronze horn.</Pair>
<Pair title="At 19th Level">This now summons as an iron horn.</Pair>
<Pair title="Special">The warriors remain only as long as the bard continues his performance. This ability requires audible components.</Pair>
</Ability>
<Ability id="arc-bard-savage_skald-berserkergang-ex" extraClasses="subAbility" icon={["shield-reflect"]}>
<Pair single id="arc-bard-savage_skald-berserkergang-ex">Berserkergang (Ex)</Pair>
<Pair hl title="Replaces">Soothing performance</Pair>
<Pair title="At 12th Level">A savage skald can inspire a rapturous battle trance that suppresses pain, stunning, and fear effects for one creature.</Pair>
<Pair title="At 15th Level">This affects two creatures at once.</Pair>
<Pair title="At 18th Level">This now affects three creatures at once.</Pair>
<Pair title="Special">Affected creatures also gain DR 5/- (DR 10/- against nonlethal damage); this benefit stacks with the damage reduction class ability of barbarians. This mind-affecting ability requires audible components.</Pair>
</Ability>
<Ability id="arc-bard-savage_skald-battle-song-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-savage_skald-battle-song-su">Battle Song (Su)</Pair>
<Pair hl title="Replaces">Mass suggestion</Pair>
<Pair title="At 18th Level">A savage skald can affect all allies within 30 feet when using performance to <em>incite rage.</em></Pair>
</Ability>
</>};
const _sea_singer = {title: "Sea Singer", jsx: <><h2 id="arc-bard-sea_singer-sea-singer">Sea Singer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 84</Link><br/>The sea singer calls the blue waters his home, and is much in demand among sea captains wishing good fortune for their crew and hull as they ply the tradewinds far and wide.</p>
<Ability id="arc-bard-sea_singer-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-sea_singer-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A sea singer gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-sea_singer-sea-shanty-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-sea_singer-sea-shanty-su">Sea Shanty (Su)</Pair>
<Pair hl title="Replaces">Countersong</Pair>
<Pair title="Ability">A sea singer learns to counter seasickness and exhaustion during long sea voyages. Each round of a sea shanty, he makes a Perform skill check. Allies within 30 feet (including the sea singer) may use his Perform check in place of a saving throw against becoming exhausted, fatigued, nauseated, or sickened; if already under such an effect, a new save is allowed each round of the sea shanty, using the bard's Perform check for the save.</Pair>
<Pair title="Special">A sea shanty has no effect on instantaneous effects or effects that do not allow saves. This ability requires audible components.</Pair>
</Ability>
<Ability id="arc-bard-sea_singer-still-water-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-sea_singer-still-water-su">Still Water (Su)</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="At 3rd Level">A sea singer can use performance to calm rough waters within 30 feet, reducing the DC for Profession (sailor) and Swim checks, as well as for Acrobatics and Climb checks aboard ship, by an amount equal to the bard's level (to a minimum of DC 10) for as long he continues to perform. He can extend this duration to 1 hour by playing for 10 consecutive rounds.</Pair>
<Pair title="Special">This ability requires audible components.</Pair>
</Ability>
<Ability id="arc-bard-sea_singer-whistle-the-wind-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-sea_singer-whistle-the-wind-su">Whistle the Wind (Su)</Pair>
<Pair hl title="Replaces">Suggestion</Pair>
<Pair title="At 6th Level">A sea singer can use performance to create a <Link to="/spell/gust_of_wind">gust of wind</Link>. This wind lasts for as long as he continues his performance. He can extend this duration to 1 minute by playing for 5 consecutive rounds.</Pair>
</Ability>
<Ability id="arc-bard-sea_singer-call-the-storm-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-sea_singer-call-the-storm-su">Call the Storm (Su)</Pair>
<Pair hl title="Replaces">Mass suggestion</Pair>
<Pair title="At 18th Level">A sea singer can use performance to duplicate <Link to="/spell/control_water">control water</Link>, <Link to="/spell/control_weather">control weather</Link>, <Link to="/spell/control_winds">control winds</Link>, or <Link to="/spell/storm_of_vengeance">storm of vengeance</Link>, using his bard level as the caster level. Using this ability requires 1 round of continuous performance per level of the spell (as if he were a <Link to="/class/druid">druid</Link>). These effects continue for as long as the bard continues performing (the effects of <em>control weather</em> happen immediately), but not longer than the spell's normal duration.</Pair>
</Ability>
<Ability id="arc-bard-sea_singer-world-traveler-ex" icon={["upgrade","rolling-dices"]}>
<Pair single id="arc-bard-sea_singer-world-traveler-ex">World Traveler (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A sea singer gains a bonus equal to <Link to="/misc/half">half</Link> his bard level on Knowledge (geography), Knowledge (local), Knowledge (nature), and Linguistics checks.</Pair>
<Pair title="Ability">He can reroll a check against one of these skills, but must take the result of the second roll even if it is worse.</Pair>
<Pair title="Usage">1 time/day + 1 per five bard levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
</Ability>
<Ability id="arc-bard-sea_singer-familiar" icon={["stairs-goal"]}>
<Pair single id="arc-bard-sea_singer-familiar">Familiar</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A sea singer acquires an exotic pet - a <Link to="/monster/monkey">monkey</Link> or parrot (treat as <Link to="/monster/raven">raven</Link>) - that gains abilities as a wizard's <Link to="/ability/familiar">familiar</Link>, using the sea singer's bard level as his wizard level.</Pair>
</Ability>
<Ability id="arc-bard-sea_singer-sea-legs-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-sea_singer-sea-legs-ex">Sea Legs (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A sea singer gains a +4 bonus on saving throws against air and water effects and effects that would cause the sea singer to slip, trip, or otherwise be knocked <Link to="/rule/prone">prone</Link>. He gains a +2 bonus to CMD against grapple, overrun, and trip.</Pair>
</Ability>
</>};
const _shadow_puppeteer = {title: "Shadow Puppeteer", jsx: <><h2 id="arc-bard-shadow_puppeteer-shadow-puppeteer">Shadow Puppeteer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 210</Link><br/>A shadow puppeteer invokes amazing and terrifying shadow puppet shows, producing supernatural effects by creating and manipulating shadow. A shadow puppeteer has the following class feature.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-bard-shadow_puppeteer--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/wayang">Wayang</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-bard-shadow_puppeteer-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-shadow_puppeteer-bardic-performance">Bardic Performance</Pair>
<Pair hl title="Replaces">Inspire courage, inspire competence</Pair>
<Pair title="Info">A shadow puppeteer gains the following types of bardic performance. The character must be able to perform shadow puppetry in order to activate any of these abilities. Shadow puppetry uses Perform (act), and requires a light source.</Pair>
</Ability>
<Ability id="arc-bard-shadow_puppeteer-shadow-servant-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-shadow_puppeteer-shadow-servant-sp">Shadow Servant (Sp)</Pair>
<Pair title="Ability">The puppeteer can create a shadow servant to perform simple tasks. The shadow servant is identical to an <Link to="/spell/unseen_servant">unseen servant</Link> (caster level equal to the shadow puppeteer's bard level), except it appears as a formless shadow.</Pair>
<Pair title="Special">Shadow servant relies on visual components.</Pair>
</Ability>
<Ability id="arc-bard-shadow_puppeteer-shadow-puppets-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-shadow_puppeteer-shadow-puppets-sp">Shadow Puppets (Sp)</Pair>
<Pair title="Ability">A shadow puppeteer can use bardic performance to create one quasi-real shadowy creature resembling a monster from the <Link to="/spell/summon_monster_i">summon monster I</Link> list. These shadowy creatures otherwise work like <Link to="/spell/shadow_conjuration">shadow conjuration</Link>, and targets interacting with them get a Will saving throw (DC 10 + <Link to="/misc/half">half</Link> their bard level + their Charisma bonus) to treat them as only 20% real.</Pair>
<Pair title="At 4th Level">This ability acts like <Link to="/spell/summon_monster_ii">summon monster II</Link>.</Pair>
<Pair title="At 7th Level">This ability acts like <Link to="/spell/summon_monster_iii">summon monster III</Link>.</Pair>
<Pair title="At 10th Level">This ability acts like <Link to="/spell/summon_monster_iv">summon monster IV</Link>.</Pair>
<Pair title="At 13th Level">This ability acts like <Link to="/spell/summon_monster_v">summon monster V</Link>.</Pair>
<Pair title="At 16th Level">This ability acts like <Link to="/spell/summon_monster_vi">summon monster VI</Link>.</Pair>
<Pair title="At 19th Level">This ability acts like <Link to="/spell/summon_monster_vii">summon monster VII</Link>.</Pair>
</Ability>
</>};
const _silver_balladeer = {title: "Silver Balladeer", jsx: <><h2 id="arc-bard-silver_balladeer-silver-balladeer">Silver Balladeer</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 115</Link><br/>The bright purity of silver makes beautiful music, and its vibrations are also anathema to unnatural creatures. Some bards use a mixture of silver-stringed instruments and esoteric knowledge to battle the dark forces of the world.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-bard-silver_balladeer--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>A silver balladeer must have a good alignment.</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-bard-silver_balladeer-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-silver_balladeer-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A silver balladeer gains the bardic performances listed below. These bardic performances all require the use of a silver or silver-stringed instrument, which costs twice as much as a normal <Link to="/eq-misc/masterwork_musical_instrument">masterwork instrument</Link>.</Pair>
</Ability>
<Ability id="arc-bard-silver_balladeer-break-curse-su" extraClasses="subAbility" icon={["shield-reflect"]}>
<Pair single id="arc-bard-silver_balladeer-break-curse-su">Break Curse (Su)</Pair>
<Pair hl title="Replaces">Suggestion</Pair>
<Pair title="At 6th Level">A silver balladeer can suppress a single curse affecting an ally within 30 feet that is able to see and hear her. Each round the silver balladeer uses <em>break curse,</em> she attempts a Perform check against the original DC of the curse. If successful, she suppresses the curse for 1 round. After she has suppressed the curse for 4 consecutive rounds, she can attempt a caster level check to remove the curse as if she had cast <Link to="/spell/remove_curse">remove curse</Link>.</Pair>
</Ability>
<Ability id="arc-bard-silver_balladeer-holy-vibration-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-silver_balladeer-holy-vibration-su">Holy Vibration (Su)</Pair>
<Pair hl title="Replaces">Inspire greatness</Pair>
<Pair title="At 9th Level">A silver balladeer can spend a round of bardic performance to make a single door or a window within 30 feet resonate with a holy vibration. Undead and creatures with the evil subtype are unable to open a door or window affected in this way (as <Link to="/spell/arcane_lock">arcane lock</Link>) for 10 minutes per bard level. If such a creature has the incorporeal subtype, it is unable to move through the affected door or window, or through any walls, floors, or ceilings within 20 feet of it.</Pair>
<Pair title="Special">Incorporeal creatures can attempt Charisma checks to break through areas warded by holy vibration, using the same break DC as for the object the creature is trying to move through.</Pair>
</Ability>
<Ability id="arc-bard-silver_balladeer-mass-break-curse-su" extraClasses="subAbility" icon={["shield-reflect"]}>
<Pair single id="arc-bard-silver_balladeer-mass-break-curse-su">Mass Break Curse (Su)</Pair>
<Pair hl title="Replaces">Mass suggestion</Pair>
<Pair title="At 18th Level">A silver balladeer can suppress all curses among any number of allies within 30 feet when using <em>break curse.</em> Every 4 consecutive rounds of using this performance, the silver balladeer can attempt a caster level check to remove a single curse on a single ally affected by this performance, as if she had cast <em>remove curse.</em></Pair>
</Ability>
<Ability id="arc-bard-silver_balladeer-pure-heart-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-silver_balladeer-pure-heart-ex">Pure Heart (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A silver balladeer gains a +4 bonus on saving throws against curses, hexes, and charm effects.</Pair>
</Ability>
<Ability id="arc-bard-silver_balladeer-silver-mastery-su" icon={["upgrade"]}>
<Pair single id="arc-bard-silver_balladeer-silver-mastery-su">Silver Mastery (Su)</Pair>
<Pair hl title="Replaces">The 2nd-level versatile performance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A silver balladeer treats silver weapons as if they were also <Link to="/eq-material/cold_iron">cold iron</Link> for the purpose of overcoming damage reduction. Also, <Link to="/eq-material/alchemical_silver">alchemical silver</Link> weapons do not impose a penalty on damage rolls when wielded by a silver balladeer, and a silver balladeer gains a +1 bonus on attack rolls made with <Link to="/eq-material/mithral">mithral</Link> weapons.</Pair>
</Ability>
</>};
const _solacer = {title: "Solacer", jsx: <><h2 id="arc-bard-solacer-solacer">Solacer</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 18</Link><br/>Solacers are experts in the healing arts as well as creators of performances that console the distraught, rally the stricken, raise spirits, and vanquish sorrow.</p>
<Ability icon={["skills"]} id="arc-bard-solacer-undefined">
<Pair id="arc-bard-solacer-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/heal">Heal</Link> (WIS)</Pair>
<Pair title="Removed Skills">Appraise</Pair></Ability>
<Ability id="arc-bard-solacer-learned-physician-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-bard-solacer-learned-physician-ex">Learned Physician (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge, lore master</Pair>
<Pair title="At 1st Level">A solacer adds <Link to="/misc/half">half</Link> his class level (minimum 1) on Heal checks and can attempt Knowledge checks untrained.</Pair>
<Pair title="At 5th Level">A solacer can take 10 on checks with any Knowledge skill he has ranks in. The solacer can choose not to take 10 and can instead roll normally. In addition, once per day, the solacer can take 20 on any Heal check, though this does not affect the time it takes to perform the task attempted.</Pair>
<Pair title="At 11th Level">He can Take 20 twice a day.</Pair>
<Pair title="At 17th Level">He can Take 20 three times a day.</Pair>
</Ability>
<Ability id="arc-bard-solacer-inspire-tenacity-su" icon={["shield-reflect"]}>
<Pair single id="arc-bard-solacer-inspire-tenacity-su">Inspire Tenacity (Su)</Pair>
<Pair hl title="Replaces">Countersong</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A solacer can use his bardic performances to bolster his allies' mental endurance when they need it most. All allies within 30 feet automatically stabilize if they are <Link to="/misc/dying">dying</Link> and gain a +2 morale bonus on saving throws against mind-affecting effects, poisons, and disease.</Pair>
<Pair title="Special">This performance relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-solacer-creative-treatment-su" icon={["rolling-dices","stairs-goal"]}>
<Pair single id="arc-bard-solacer-creative-treatment-su">Creative Treatment (Su)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 time/day + 1 per four bard levels beyond 2nd<ByLevelPop levels={[[2,1],[6,2],[10,3],[14,4],[18,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">When a solacer attempts a Heal check and fails, he can immediately reroll the check and take the better result.</Pair>
<Pair title="Special">Additionally, when acting as a confidante (or any other type of advisor) to <Link to="/rule/reducing_sanity_damage">reduce sanity damage with rest</Link>, the solacer can attempt a Charisma check instead of an Intelligence or Wisdom check and add his Charisma modifier to the amount of sanity damage removed instead of his Intelligence or Wisdom modifier. When acting as a confidante (or any other type of advisor) to reduce a <Link to="/rule/madness">madness's</Link> DC with rest, the solacer can attempt a Charisma check instead of an Intelligence or Wisdom check and reduce the madness's DC by 1/2 his Charisma modifier instead of 1/2 his Intelligence or Wisdom modifier.</Pair>
</Ability>
<Ability id="arc-bard-solacer-invigorating-artistry-su" icon={["shield-reflect"]}>
<Pair single id="arc-bard-solacer-invigorating-artistry-su" flavor="A solacer can use his performances to protect and heal a target's soul.">Invigorating Artistry (Su)</Pair>
<Pair hl title="Replaces">Jack-of-all-trades</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">The solacer can perform for 1 hour (this requires no skill check) and grant several benefits for 24 hours to the creatures that can hear or see his performance, or both, depending on whether the performance has audible or visual components. Affected creatures gain a +3 bonus on saving throws against curses, possession spells and effects (such as <Link to="/spell/magic_jar">magic jar</Link>), and domination and mind control spells and effects (such as <Link to="/spell/dominate_person">dominate person</Link>). If the target is suffering any or multiple such effects, it immediately can attempt a new saving throw against each; the effect ends if the saving throw is successful. Only one such extra saving throw can be granted against each condition in any 24-hour period. If a creature benefits from the daily performance between saving throws against a <Link to="/rule/corruption">corruption</Link>, it gains a +3 bonus on the next saving throw against that corruption.</Pair>
<Pair title="At 16th Level">This bonus increases to +4.</Pair>
<Pair title="At 19th Level">This bonus increases to +5.</Pair>
</Ability>
</>};
const _songhealer = {title: "Songhealer", jsx: <><h2 id="arc-bard-songhealer-songhealer">Songhealer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 27</Link><br/>Words can harm, but they also heal. The songhealer brings peace and surcease of pain, calming wild emotions and providing a balm for the wounded body.</p>
<Ability id="arc-bard-songhealer-enhance-healing-su" icon={["upgrade"]}>
<Pair single id="arc-bard-songhealer-enhance-healing-su">Enhance Healing (Su)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Usage">Cha modifier times/day</Pair>
<Pair title="Ability">A songhealer can cause any healing effect from a spell completion or spell trigger item to function at a caster level equal to his class level.</Pair>
</Ability>
<Ability id="arc-bard-songhealer-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-songhealer-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A songhealer gains the following type of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-songhealer-healing-performance-su" extraClasses="subAbility" icon={["magic-swirl","heart-plus"]}>
<Pair single id="arc-bard-songhealer-healing-performance-su">Healing Performance (Su)</Pair>
<Pair hl title="Replaces">Frightening tune</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">A songhealer can use his performance to create an effect equivalent to <Link to="/spell/heal">heal</Link> on a living target (or <Link to="/spell/harm">harm</Link> on an undead target), using the bard's level as the caster level. Using this ability requires 5 rounds of continuous performance, and the target must be able to see and hear the bard throughout the performance.</Pair>
<Pair title="Special">The <em>healing performance</em> relies on audible and visual components.</Pair>
</Ability>
<Ability id="arc-bard-songhealer-funereal-ballad-su" extraClasses="subAbility" icon={["magic-swirl","heart-plus"]}>
<Pair single id="arc-bard-songhealer-funereal-ballad-su">Funereal Ballad (Su)</Pair>
<Pair hl title="Replaces">Deadly performance</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A songhealer can use his performance to create an effect equivalent to <Link to="/spell/resurrection">resurrection</Link> on a dead creature, using the bard's level as the caster level. Using this ability requires 20 rounds of continuous performance, and the target must be within 10 feet of the bard for the entire performance.</Pair>
<Pair title="Special"><em>Funereal ballad</em> relies on audible and visual components.</Pair>
</Ability>
</>};
const _sorrowsoul = {title: "Sorrowsoul", jsx: <><h2 id="arc-bard-sorrowsoul-sorrowsoul">Sorrowsoul</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 22</Link><br/>It isn't uncommon for a bard to, on occasion, sing mournful tunes or craft elegies that depict the deepest sadness or the most profound suffering. But while most bards who do so create such performances for fame or wealth, the sorrowsoul has known tragedy and loss on a level so intimate, he has bound it to his soul.</p>
<Ability id="arc-bard-sorrowsoul-lyric-sorrow-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-sorrowsoul-lyric-sorrow-su">Lyric Sorrow (Su)</Pair>
<Pair hl title="Replaces">Soothing performance, versatile performance</Pair>
<Pair hl title="Alters">Bardic performance</Pair>
<Pair title="Info">A sorrowsoul draws upon grief, rage, and tragedy to fuel his bardic performances. When a sorrowsoul begins a bardic performance, he can choose to alter its effects with <em>lyric sorrow.</em> If he does so, he uses twice the number of rounds of his bardic performance ability as normal, and even if the sorrowsoul has the <Link to="/feat/lingering_performance">Lingering Performance</Link> feat, the performance's effects do not last for any additional rounds.</Pair>
</Ability>
<Ability id="arc-bard-sorrowsoul-inspire-courage" extraClasses="subAbility" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-bard-sorrowsoul-inspire-courage">Inspire Courage</Pair>
<Pair title="At 1st Level">A sorrowsoul can use his lyric sorrow in conjunction with <Link to="/performance/inspire_courage">inspire courage</Link>. When he chooses to do so, he increases his bonuses on saving throws and on weapon attack and damage rolls from +1 to +2, but his other allies receive no benefit.</Pair>
<Pair title="At 5th Level">His bonuses become +4.</Pair>
<Pair title="At 11th Level">His bonuses become +6.</Pair>
<Pair title="At 17th Level">His bonuses become +8.</Pair>
</Ability>
<Ability id="arc-bard-sorrowsoul-inspire-greatness" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-bard-sorrowsoul-inspire-greatness">Inspire Greatness</Pair>
<Pair title="At 12th Level">A sorrowsoul can use his lyric sorrow ability in conjunction with <Link to="/performance/inspire_greatness">inspire greatness</Link> to grant himself 3 bonus Hit Dice, a +3 competence bonus on attack rolls, and a +2 competence bonus on Fortitude saves; if he does so, <em>inspire greatness</em> only affects him, not any other allies.</Pair>
</Ability>
<Ability id="arc-bard-sorrowsoul-inspire-heroics" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-sorrowsoul-inspire-heroics">Inspire Heroics</Pair>
<Pair title="At 15th Level">When a sorrowsoul uses his lyric sorrow ability in conjunction with the <Link to="/performance/inspire_heroics">inspire heroics</Link> bardic performance, he gains <Link to="/umr/fast_healing">fast healing</Link> 5 and benefits from a 50% miss chance, as if under the effects of <Link to="/spell/displacement">displacement</Link>, in addition to the standard bonuses conferred by this bardic performance. But if he does so, <em>inspire heroics</em> only affects him, not any other allies.</Pair>
</Ability>
<Ability id="arc-bard-sorrowsoul-darkness-denied-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-sorrowsoul-darkness-denied-ex">Darkness Denied (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A sorrowsoul gains a +4 bonus on saving throws against negative energy and death effects.</Pair>
</Ability>
<Ability id="arc-bard-sorrowsoul-spurn-harm-su" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-sorrowsoul-spurn-harm-su" flavor="A sorrowsoul can funnel his bardic powers to persevere in the face of seemingly certain death.">Spurn Harm (Su)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Immediate Action">A sorrowsoul can spend 3 rounds of his daily bardic performance to gain a +2 insight bonus on all saving throws for 1 round.</Pair>
<Pair title="At 11th Level">A sorrowsoul also gains spell resistance equal to 11 + his bard level when using this ability.</Pair>
<Pair title="At 17th Level">He also gains DR 10/- when using this ability.</Pair>
</Ability>
</>};
const _sound_striker = {title: "Sound Striker", jsx: <><h2 id="arc-bard-sound_striker-sound-striker">Sound Striker</h2>
<p><strong>Source</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 27</Link>, <a href="https://paizo.com/paizo/faq/v5748nruor1fz#v5748eaic9t4f">errata</a></p>
<p>They say that words can cut deeper than any blade, and the sound striker proves this true. Using music and words as a weapon, he can focus his performances into a deadly delivery.</p>
<Ability id="arc-bard-sound_striker-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-sound_striker-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A sound striker gains the following types of bardic performance. Neither performance can be performed more quickly than a standard action.</Pair>
</Ability>
<Ability id="arc-bard-sound_striker-wordstrike-su" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="arc-bard-sound_striker-wordstrike-su">Wordstrike (Su)</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Standard Action">The sound striker bard can spend 1 round of bardic performance to direct a burst of sonically charged words at a creature or object. This performance deals 1d4 points of damage plus the bard's level to an object, or half this damage to a living creature.</Pair>
</Ability>
<Ability id="arc-bard-sound_striker-weird-words-su" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="arc-bard-sound_striker-weird-words-su">Weird Words (Su)</Pair>
<Pair hl title="Replaces">Suggestion</Pair>
<Pair title="At 6th Level">The bard can start a performance that is always a <strong className="hl">standard action</strong> to speak up to one word per 4 bard levels laden with sonic energy. Each word deals 4d6 points of sonic damage as a ranged touch attack with a range of 30 feet. The bard adds his charisma modifier on damage rolls with weird words. Multiple words that strike the same target stack into a single powerful attack, applying energy resistance and bonuses on damage rolls only once. The bard can target all words at the same or different targets, but he unleashes all words simultaneously. Each word costs 1 round of bardic performance.</Pair>
</Ability>
</>};
const _speaker_of_the_palatine_eye = {title: "Speaker of the Palatine Eye", jsx: <><h2 id="arc-bard-speaker_of_the_palatine_eye-speaker-of-the-palatine-eye">Speaker of the Palatine Eye</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 8</Link><br/>Working from the shadows of Ustalav's high society, the Esoteric Order of the Palatine Eye<sup><InnerLink showBacklink="backlink-arc-bard-speaker_of_the_palatine_eye-ref-NoSource-1" id="arc-bard-speaker_of_the_palatine_eye-ref-NoSource-1" data-hash-target to="arc-bard-speaker_of_the_palatine_eye-NoSource">1</InnerLink></sup> is a mystical cult built around the quest for immortality. Founded by a count who claimed to have been enlightened by angels, the Order follows a strict hierarchy, and membership is open only to the elite. The more money a member provides the Order, the more secrets he learns to aid his path toward angelic ascension.</p>
<p>A speaker of the Palatine Eye influences others using his occult knowledge rather than the boisterous enthusiasm of most bards.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-bard-speaker_of_the_palatine_eye--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>He must be a worshipper of <Link to="/faith/pharasma">Pharasma</Link>, but he may worship additional deities as well.</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-bard-speaker_of_the_palatine_eye-angelic-grace-ex" icon={["skills","stairs-goal"]}>
<Pair single id="arc-bard-speaker_of_the_palatine_eye-angelic-grace-ex">Angelic Grace (Ex)</Pair>
<Pair hl title="Alters">The bard's class skills</Pair>
<Pair title="Ability">Members of the Order of the Palatine Eye carry themselves with the austerity and import their heavenly aspirations demand. A speaker of the Palatine Eye does not have Acrobatics or Escape Artist as class skills, but he gains Celestial as a bonus language. This does not count toward the number of languages he is otherwise able to learn.</Pair>
</Ability>
<Ability id="arc-bard-speaker_of_the_palatine_eye-spells" icon={["magic-swirl"]}>
<Pair single id="arc-bard-speaker_of_the_palatine_eye-spells">Spells</Pair>
<Pair hl title="Alters">Spells</Pair>
<Pair title="Info">A speaker of the Palatine Eye draws his powers from the mysterious rites of the Esoteric Order of the Palatine Eye. He casts psychic spells from the <Link to="/main/spells_mesmerist">mesmerist list</Link> instead of arcane spells from the bard spell list. He otherwise casts spells, learns spells, and determines his spell allotment and spell DCs as a bard.</Pair>
</Ability>
<Ability id="arc-bard-speaker_of_the_palatine_eye-corpse-speaker-su" icon={["magic-swirl"]}>
<Pair single id="arc-bard-speaker_of_the_palatine_eye-corpse-speaker-su">Corpse Speaker (Su)</Pair>
<Pair hl title="Replaces">Countersong</Pair>
<Pair title="Ability">A speaker of the Palatine Eye can make it appear as if a corpse is speaking, similar to <Link to="/spell/ventriloquism">ventriloquism</Link>. A creature must succeed at a Will saving throw (DC = 10 + <Link to="/misc/half">half</Link> the bard's level + the bard's Charisma modifier) to see through the ruse. A creature that fails the saving throw is convinced that the corpse is speaking of its own volition.</Pair>
</Ability>
<Ability id="arc-bard-speaker_of_the_palatine_eye-keen-ritualist-ex" icon={["magic-swirl","upgrade"]}>
<Pair single id="arc-bard-speaker_of_the_palatine_eye-keen-ritualist-ex">Keen Ritualist (Ex)</Pair>
<Pair hl title="Replaces">Jack-of-all-trades</Pair>
<Pair title="At 10th Level">A speaker of the Palatine Eye reduces the number of secondary casters required to cast a <Link to="/rule/occult_rituals">ritual</Link> by 2.</Pair>
<Pair title="At 16th Level">The DCs of skill checks the speaker of the Palatine Eye attempts during a ritual are reduced by 2.</Pair>
<Pair title="At 19th Level">A speaker of the Palatine Eye can perform any ritual by himself without needing to satisfy any secondary caster requirements. The DCs of skill checks he attempts during a ritual are reduced by an additional 2, for a maximum DC reduction of 4.</Pair>
</Ability>
<section data-footnotes>
<h3 id="arc-bard-speaker_of_the_palatine_eye-label">Footnotes</h3>
<ol>
<li id="arc-bard-speaker_of_the_palatine_eye-NoSource">
<p>More information on the Esoteric Order of the Palatine Eye can be found in <Link to="/source/pathfinder_44_trial_of_the_beast">Pathfinder Adventure Path #44: Trial of the Beast</Link>. <InnerLink id="backlink-arc-bard-speaker_of_the_palatine_eye-ref-NoSource-1" data-hash-target to="arc-bard-speaker_of_the_palatine_eye-ref-NoSource-1" aria-label="Back to reference NoSource-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _stonesinger = {title: "Stonesinger", jsx: <><h2 id="arc-bard-stonesinger-stonesinger">Stonesinger</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands pg. 11</Link><br/>Once practiced by the dwarves in their Quest for Sky, the traditions of the stonesinger bards changed when the dwarves arrived on the surface. The tradition still hearkens back to its subterranean origins, however, and is practiced as a form of meditation or worship by many dwarves. Stonesingers are rare bards capable of vocalizing their bardic performances through subsonic harmonies, allowing their performances to carry as subtle vibrations through stone, rather than through the air. They command considerable power underground.</p>
<Ability id="arc-bard-stonesinger-earth-magic" icon={["stairs-goal","spell-book"]}>
<Pair single id="arc-bard-stonesinger-earth-magic">Earth Magic</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Passive Ability">A stonesinger is treated as having the <Link to="/feat/eschew_materials">Eschew Materials</Link> feat so long as he is touching natural or manufactured stone. Additionally, a stonesinger adds the following spells to the bard spell list at the listed spell level.</Pair>
<Pair plain title="1st"><Link to="/spell/magic_stone">Magic stone</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/stone_shield">Stone shield</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/stone_shape">Stone shape</Link></Pair>
<Pair plain title="4th"><Link to="/spell/earth_glide">Earth glide</Link></Pair>
<Pair plain title="5th"><Link to="/spell/stoneskin">Stoneskin</Link></Pair>
<Pair plain title="6th"><Link to="/spell/stone_tell">Stone tell</Link></Pair>
</Ability>
<Ability id="arc-bard-stonesinger-stone-song-su" icon={["stairs-goal"]}>
<Pair single id="arc-bard-stonesinger-stone-song-su">Stone Song (Su)</Pair>
<Pair hl title="Alters">Bardic performance</Pair>
<Pair title="Ability">A stonesinger's bardic performance is a subsonic vibration that resonates from his body and travels through solid rock. This vibration is subtle enough to not be heard, though creatures with the <Link to="/umr/tremorsense">tremorsense</Link> universal monster ability can distinctly hear the stone song out to a range of 100 feet per bard level. All allies within 30 feet of the stonesinger benefit from stone song, perceiving the effect due to proximity. An allied creature with tremorsense benefits from stone song as long as it's within the extended range, provided that there is an unobstructed path of solid earth between the creature and stonesinger. Natural and manufactured stone does not inhibit stone song's range.</Pair>
<Pair title="Special">A stonesinger must use Perform (sing) or Perform (oratory) for this bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-stonesinger-tremor-su" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="arc-bard-stonesinger-tremor-su">Tremor (Su)</Pair>
<Pair hl title="Replaces">Countersong</Pair>
<Pair title="Ability">As part of another bardic performance, a stonesinger can cause the ground within 30 feet to tremble, throwing enemies off balance and causing them to take a -1 circumstance penalty to AC as long as the stonesinger continues performing.</Pair>
<Pair title="At 5th Level">The penalty becomes -2.</Pair>
<Pair title="At 11th Level">The penalty becomes -3.</Pair>
<Pair title="At 17th Level">The penalty becomes -4.</Pair>
<Pair title="Special">Creatures levitating or flying above the ground are unaffected by this ability.</Pair>
</Ability>
<Ability id="arc-bard-stonesinger-quake-su" icon={["abstract-091"]}>
<Pair single id="arc-bard-stonesinger-quake-su">Quake (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="At 8th Level">A stonesinger causes the ground to shudder and buckle with his song. All enemies within 30 feet of the stonesinger must succeed at a Reflex save (DC = 10 + <Link to="/misc/half">half</Link> the stonesinger's level + his Charisma bonus) when he begins a bardic performance or be knocked <Link to="/rule/prone">prone</Link>.</Pair>
<Pair title="Special">Prone and flying creatures, as well as creatures with the <Link to="/umr/earth_glide">earth glide</Link> universal monster ability, are unaffected by this performance.</Pair>
</Ability>
</>};
const _street_performer = {title: "Street Performer", jsx: <><h2 id="arc-bard-street_performer-street-performer">Street Performer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 85</Link><br/>Whether acrobat, troubadour, or thespian, the street performer mixes with the masses, singing for his supper.</p>
<Ability id="arc-bard-street_performer-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-street_performer-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A street performer gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-street_performer-disappearing-act-su" extraClasses="subAbility" icon={["stairs-goal","abstract-091"]}>
<Pair single id="arc-bard-street_performer-disappearing-act-su">Disappearing Act (Su)</Pair>
<Pair hl title="Replaces">Inspire courage</Pair>
<Pair title="At 1st Level">A street performer can use performance to divert attention from an ally. All creatures within 30 feet that fail a Will save (DC 10 + <Link to="/misc/half">half</Link> the bard's level + the bard's Cha modifier) treat one creature chosen by the bard as if it were <Link to="/rule/invisible">invisible</Link>.</Pair>
<Pair title="At 5th Level">This performance now affects two allies.</Pair>
<Pair title="At 11th Level">The bard can render three allies invisible.</Pair>
<Pair title="At 17th Level">The bard can now affect four allies.</Pair>
<Pair title="Special">If the targets take any action that would cause them to become visible, they become visible to everyone. The bard cannot use this ability on himself. This ability is a mind-affecting effect that requires visual components.</Pair>
</Ability>
<Ability id="arc-bard-street_performer-harmless-performer-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-street_performer-harmless-performer-su">Harmless Performer (Su)</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="At 3rd Level">A street performer can use performance to appear meek and unworthy of being attacked. While using this performance, whenever an enemy targets the street performer, the enemy must succeed at a Will save (DC 10 + 1/2 the bard's level + the bard's Cha bonus) or be unable to attack the bard this round, as per <Link to="/spell/sanctuary">sanctuary</Link>. The enemy loses the attack that targeted the bard, but may spend additional attacks targeting other creatures. If the opponent was targeting the street performer with a spell, it must succeed at a <Link to="/rule/concentration">concentration</Link> check at the same DC or lose the spell. If this check succeeds, it may target another creature with the spell instead.</Pair>
<Pair title="Special">This mind-affecting ability requires audible or visual components.</Pair>
</Ability>
<Ability id="arc-bard-street_performer-madcap-prank-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-street_performer-madcap-prank-su">Madcap Prank (Su)</Pair>
<Pair hl title="Replaces">Inspire greatness</Pair>
<Pair title="At 9th Level">A street performer can use performance to discomfit a target within 30 feet, causing its clothing to become tangled, its headgear to fall down over its eyes, or even causing it to slip and fall or otherwise be made to appear a fool. The target must make a Reflex save (DC 10 + 1/2 the bard's level + the bard's Cha modifier) each round that it hears or sees the performance, or it takes one of the following random effects each round: 1-<Link to="/misc/blinded">blinded</Link>, 2-<Link to="/misc/dazzled">dazzled</Link>, 3-<Link to="/misc/deafened">deafened</Link>, 4-<Link to="/rule/entangled">entangled</Link>, 5-fall <Link to="/rule/prone">prone</Link>, 6-<Link to="/misc/nauseated">nauseated</Link>. Each effect lasts 1 round.</Pair>
</Ability>
<Ability id="arc-bard-street_performer-slip-through-the-crowd-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-street_performer-slip-through-the-crowd-su">Slip through the Crowd (Su)</Pair>
<Pair hl title="Replaces">Inspire heroics</Pair>
<Pair title="At 15th Level">A street performer's disappearing act enables affected creatures to move through crowd squares and enemy-occupied squares without impediment. Affected creatures are treated as if having <Link to="/spell/greater_invisibility">greater invisibility</Link>, but enemies gain a new saving throw to notice them each time they are attacked.</Pair>
</Ability>
<Ability id="arc-bard-street_performer-gladhanding" icon={["upgrade"]}>
<Pair single id="arc-bard-street_performer-gladhanding">Gladhanding</Pair>
<Pair hl title="Replaces">Countersong</Pair>
<Pair title="Ability">A street performer earns double the normal amount of money from <Link to="/skill/perform">Perform</Link> checks.</Pair>
<Pair title="Standard Action">He may use a Bluff check in place of a Diplomacy check to improve a creature's attitude for 1 minute, after which its attitude becomes one step worse than originally.</Pair>
</Ability>
<Ability id="arc-bard-street_performer-streetwise" icon={["upgrade"]}>
<Pair single id="arc-bard-street_performer-streetwise">Streetwise</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A street performer gains a bonus equal to half his level on Bluff, Disguise, Knowledge (local), and Sleight of Hand checks, Diplomacy or Intimidate checks made to influence crowds, and Diplomacy checks to gather information (minimum +1).</Pair>
</Ability>
<Ability id="arc-bard-street_performer-quick-change-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-street_performer-quick-change-ex">Quick Change (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">A street performer can don a disguise by taking a -5 penalty on his check.</Pair>
<Pair title="Swift Action">He can take 10 on Bluff and Disguise checks and use Bluff to create a diversion to hide.</Pair>
<Pair title="Ability">He can Take 20 on a Bluff or Disguise check once per day.</Pair>
<Pair title="At 11th Level">He can Take 20 twice a day.</Pair>
<Pair title="At 17th Level">He can Take 20 three times a day.</Pair>
</Ability>
</>};
const _studious_librarian = {title: "Studious Librarian", jsx: <><h2 id="arc-bard-studious_librarian-studious-librarian">Studious Librarian</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 46</Link><br/>Studious librarians are bards that have studied long in great libraries of the Inner Sea region, such as Taldor's <Link to="/rule/kitharodian_academy">Kitharodian Academy</Link> in Oppara, Forae Logos and the <Link to="/rule/pathfinder_society">Pathfinder Society's</Link> Skyreach in Absalom, and the Grand Library of Eto in Osirion.</p>
<Ability id="arc-bard-studious_librarian-scribe-scroll" icon={["upgrade"]}>
<Pair single id="arc-bard-studious_librarian-scribe-scroll">Scribe Scroll</Pair>
<Pair hl title="Replaces">Distraction</Pair>
<Pair title="Ability">A studious librarian gains <Link to="/feat/scribe_scroll">Scribe Scroll</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-bard-studious_librarian-comparative-arcane-studies-su" icon={["magic-swirl"]}>
<Pair single id="arc-bard-studious_librarian-comparative-arcane-studies-su" flavor="The studious librarian is exposed to a wide variety of magical writing, and can use his own magic to duplicate spells from other classes' spell lists.">Comparative Arcane Studies (Su)</Pair>
<Pair hl title="Replaces">Suggestion, jack-of-all-trades</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A studious librarian can cast any spell from the <Link to="/main/spells_bard">bard</Link>, <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/spells_wizard">wizard</Link>, or <Link to="/main/spells_witch">witch</Link> spell lists from a scroll or spellbook in hand as if it were one of his bard spells known, expending a bard spell slot of the same spell level to cast the desired spell. Casting a spell from a scroll this way does not cause the spell to vanish from the scroll. A spell cast in this way cannot be modified by metamagic.</Pair>
<Pair title="Usage">1 time/day + 1 per four bard levels beyond 6th<ByLevelPop levels={[[6,1],[10,2],[14,3],[18,4]]} unit="time" postText="/day" /></Pair>
</Ability>
<Ability id="arc-bard-studious_librarian-critical-research-focus-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-studious_librarian-critical-research-focus-ex">Critical Research Focus (Ex)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="At 8th Level">The studious librarian threatens a critical hit on <Link to="/rule/research">a Research check</Link> with a roll of 18, 19, or 20. He gains a +4 bonus on Research checks to confirm a critical hit.</Pair>
</Ability>
<Ability id="arc-bard-studious_librarian-perfect-recollection-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-studious_librarian-perfect-recollection-ex">Perfect Recollection (Ex)</Pair>
<Pair hl title="Replaces">Mass suggestion</Pair>
<Pair title="At 19th Level">The studious librarian can always take 20 on Knowledge checks.</Pair>
</Ability>
<Ability id="arc-bard-studious_librarian-one-with-the-library-ex" icon={["spell-book"]}>
<Pair single id="arc-bard-studious_librarian-one-with-the-library-ex">One with the Library (Ex)</Pair>
<Pair hl title="Replaces">Deadly performance</Pair>
<Pair title="At 20th Level">The studious librarian can replace one of her spells known with any bard spell from a scroll once per day by studying the scroll for 1 hour. Doing so erases the spell from the scroll.</Pair>
</Ability>
</>};
const _thundercaller = {title: "Thundercaller", jsx: <><h2 id="arc-bard-thundercaller-thundercaller">Thundercaller</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 41</Link>, <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends pg. 11</Link><br/>Thundercallers bear the knowledge of the ancients, wielding it like a weapon to protect the land for which they care so deeply. Their voices ring like thunder, calling the sky's wrath down upon their enemies and summoning furious rage to bolster their allies.</p>
<Ability id="arc-bard-thundercaller-bound-to-the-land-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-thundercaller-bound-to-the-land-ex">Bound to the Land (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A thundercaller gains a bonus equal to <Link to="/misc/half">half</Link> her level on Handle Animal checks, Knowledge (nature) checks, and Survival checks.</Pair>
</Ability>
<Ability id="arc-bard-thundercaller-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-thundercaller-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A thundercaller gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-thundercaller-thunder-call-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-thundercaller-thunder-call-su">Thunder Call (Su)</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="At 3rd Level">The thundercaller can start a performance to unleash a deafening peal of thunder. This allows the thundercaller to spend a round of performance to create an effect similar to the spell <Link to="/spell/sound_burst">sound burst</Link> (having the same range and area and allowing the same saving throw).</Pair>
<Pair title="At 7th Level">The sonic damage dealt by this blast of sound increases to 3d8.</Pair>
<Pair title="At 11th Level">The damage becomes 5d8.</Pair>
<Pair title="At 15th Level">The damage becomes 7d8.</Pair>
<Pair title="At 19th Level">The damage becomes 9d8.</Pair>
<Pair title="Special">A creature that succeeds at its saving throw against thunder call is immune to the stunning effect but still takes sonic damage. Beginning this performance is always a <strong className="hl">standard action</strong>.</Pair>
</Ability>
<Ability id="arc-bard-thundercaller-incite-rage-su" extraClasses="subAbility" icon={["magic-swirl","abstract-091"]}>
<Pair single id="arc-bard-thundercaller-incite-rage-su">Incite Rage (Su)</Pair>
<Pair hl title="Replaces">Suggestion, mass suggestion</Pair>
<Pair title="At 6th Level">The thundercaller can induce a furious rage in one creature within 30 feet. This effect functions as the <Link to="/spell/rage">rage</Link> spell and lasts as long as the target can hear the thundercaller's performance. Any unwilling creature targeted is affected if it fails a Will saving throw (DC = 10 + half the thundercaller's level + the thundercaller's Charisma modifier). A target that succeeds at its saving throw is immune to this power for 24 hours. The thundercaller cannot target herself with this ability.</Pair>
<Pair title="Special">If the target has the rage class feature, it can instead immediately rage and stay in this rage without consuming rounds of rage per day as long as the thundercaller continues performing. This performance is a mind-affecting effect and relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-thundercaller-call-lightning-su" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="arc-bard-thundercaller-call-lightning-su">Call Lightning (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="At 8th Level">The thundercaller can use her performance to summon bolts of lightning, as per the spell <Link to="/spell/call_lightning">call lightning</Link>. The lightning storm lasts for as long as she continues her performance, calling down one bolt of lightning per round as a <strong className="hl">standard action</strong>. The damage of these lightning bolts can be increased in stormy areas or can be limited as <em>call lightning</em> describes.</Pair>
</Ability>
<Ability id="arc-bard-thundercaller-call-lightning-storm-su" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="arc-bard-thundercaller-call-lightning-storm-su">Call Lightning Storm (Su)</Pair>
<Pair hl title="Replaces">Frightening tune</Pair>
<Pair title="At 14th Level">The thundercaller can use her performance to summon bolts of lightning, as per the spell <Link to="/spell/call_lightning_storm">call lightning storm</Link>. The lightning storm lasts for as long as she continues her performance, calling down one bolt of lightning per round as a <strong className="hl">standard action</strong>. The damage of these lightning bolts can be increased in stormy areas or can be limited as <em>call lightning</em> describes.</Pair>
</Ability>
</>};
const _voice_of_brigh = {title: "Voice of Brigh", jsx: <><h2 id="arc-bard-voice_of_brigh-voice-of-brigh">Voice of Brigh</h2>
<p><strong>Sources</strong> <Link to="/source/construct_handbook">Construct Handbook pg. 14</Link><br/>The <Link to="/faith/brigh">Whisper in Bronze</Link> sometimes sends inspiration to her favorite followers in the form of music. These songs hold the notes of creation and unmaking that allow her followers to affect constructs. The bards who learn these songs take on the title of Voice of Brigh and typically play custom-made instruments that are themselves marvels of engineering and invention.</p>
<Ability id="arc-bard-voice_of_brigh-brighs-knowledge-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-bard-voice_of_brigh-brighs-knowledge-ex">Brigh's Knowledge (Ex)</Pair>
<Pair title="Passive Ability">A bard adds <Link to="/misc/half">half</Link> his class level (minimum 1) as a bonus on Knowledge (arcana), Knowledge (dungeoneering), Knowledge (engineering), and Knowledge (religion) checks and can attempt these skill checks untrained. In addition, a Voice of Brigh can affect constructs with his bardic performance, even if they would normally be immune to or unaffected by his performance.</Pair>
</Ability>
<Ability id="arc-bard-voice_of_brigh-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-voice_of_brigh-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A Voice of Brigh gains the following bardic performances.</Pair>
</Ability>
<Ability id="arc-bard-voice_of_brigh-brighs-soothing-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-voice_of_brigh-brighs-soothing-su">Brigh's Soothing (Su)</Pair>
<Pair hl title="Replaces">Fascinate</Pair>
<Pair title="Ability">A Voice of Brigh can use Brigh's calming voice to pacify constructs. This functions as the <Link to="/performance/fascinate">fascinate</Link> bardic performance, except it can target only constructs.</Pair>
</Ability>
<Ability id="arc-bard-voice_of_brigh-brighs-anger-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-voice_of_brigh-brighs-anger-su">Brigh's Anger (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="At 8th Level">A Voice of Brigh can use Brigh's enraged voice to instill constructs with a sense of dread. This functions as the <Link to="/performance/dirge_of_doom">dirge of doom</Link> bardic performance, except it can target only constructs.</Pair>
</Ability>
<Ability id="arc-bard-voice_of_brigh-brighs-spark-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-voice_of_brigh-brighs-spark-su">Brigh's Spark (Su)</Pair>
<Pair hl title="Replaces">Soothing performance</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">A Voice of Brigh can use Brigh's animating spark to reanimate a destroyed construct. The Voice of Brigh selects a destroyed construct within 60 feet and expends 1 round of bardic performance to reanimate the chosen construct. The construct reanimates with a number of hit points equal to the Voice of Brigh's level, but it is <Link to="/misc/staggered">staggered</Link>. The affected construct follows the Voice of Brigh's orders while reanimated.</Pair>
<Pair title="Info">Each round, the bard can expend another round of bardic performance to keep that construct reanimated for another round. The construct regains a number of hit points equal to the Voice of Brigh's level for every round it remains reanimated. If the construct recovers all of its hit points in this way, it becomes fully reanimated and no longer requires bardic performance to remain animated. A construct fully reanimated in this way follows the orders of the Voice of Brigh that reanimated it, as if the Voice of Brigh were its original creator, for 24 hours. Afterwards, the construct reverts to its original programming.</Pair>
<Pair title="Special">The construct is completely destroyed if the Voice of Brigh ends this performance before the construct regains its full hit points, is interrupted, or is reduced to 0 hit points. A completely destroyed construct cannot be repowered or reanimated, even by another Voice of Brigh. The Voice of Brigh can reanimate multiple constructs with this ability (either at the same time or over successive rounds) but must expend 1 round of bardic performance per reanimated construct per round to maintain the effect.</Pair>
</Ability>
<Ability id="arc-bard-voice_of_brigh-brighs-wrath-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-voice_of_brigh-brighs-wrath-su">Brigh's Wrath (Su)</Pair>
<Pair hl title="Replaces">Frightening tune</Pair>
<Pair title="At 14th Level">A Voice of Brigh can use Brigh's furious voice to instill in constructs a fear of destruction. This functions as the <Link to="/performance/frightening_tune">frightening tune</Link> bardic performance, except it can target only constructs.</Pair>
</Ability>
</>};
const _voice_of_the_wild = {title: "Voice of the Wild", jsx: <><h2 id="arc-bard-voice_of_the_wild-voice-of-the-wild">Voice of the Wild</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 81</Link><br/>Most bards are inspired by the art of civilization, yet the voice of the wild's muse is the grandeur and beauty of nature. The voice of the wild has discovered some of nature's magical secrets, and can use his performance to bring out the bestial side in his allies.</p>
<Ability id="arc-bard-voice_of_the_wild-wild-knowledge-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-bard-voice_of_the_wild-wild-knowledge-ex">Wild Knowledge (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A voice of the wild adds <Link to="/misc/half">half</Link> his level (minimum 1) to all Knowledge (nature) checks. He can use Knowledge (geography) and Knowledge (nature) untrained.</Pair>
</Ability>
<Ability id="arc-bard-voice_of_the_wild-nature-magic" icon={["spell-book"]}>
<Pair single id="arc-bard-voice_of_the_wild-nature-magic">Nature Magic</Pair>
<Pair hl title="Replaces">Countersong, versatile performance, jack-of-all-trades</Pair>
<Pair title="At 1st Level">A voice of the wild can select a 1st-level <Link to="/main/spells_druid">druid</Link> or <Link to="/main/spells_ranger">ranger</Link> spell as a bard spell known instead of a spell from the bard spell list.</Pair>
<Pair title="At 4th Level">The voice of the wild can select another druid or ranger spell (of any bard spell level he can cast).</Pair>
<Pair title="At 7th Level">He can choose another such spell.</Pair>
<Pair title="At 10th Level">He can choose another such spell.</Pair>
<Pair title="At 13th Level">He can choose another such spell.</Pair>
<Pair title="At 16th Level">He can choose another such spell.</Pair>
<Pair title="Special">If he chooses to learn a new spell in place of an old one, he can exchange a druid or ranger spell for another.</Pair>
</Ability>
<Ability id="arc-bard-voice_of_the_wild-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-voice_of_the_wild-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">Voices of the wild gain the following bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-voice_of_the_wild-song-of-the-wild-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-voice_of_the_wild-song-of-the-wild-su">Song of the Wild (Su)</Pair>
<Pair hl title="Replaces">Inspire competence, dirge of doom, inspire heroics</Pair>
<Pair title="At 3rd Level">The voice of the wild can use bardic performance to grant an animal aspect to an ally, as if using the hunter's <Link to="/ability/animal_focus">animal focus</Link> class feature. The ally must be able to hear or see the performance. The voice of the wild uses his bard level as his hunter level for determining the effect of the animal aspect.</Pair>
<Pair title="At 10th Level">The bard can affect a second ally with this performance.</Pair>
<Pair title="At 17th Level">The bard can affect a third ally.</Pair>
<Pair title="Special">Song of the wild relies on audible or visual components.</Pair>
</Ability>
</>};
const _wasteland_chronicler = {title: "Wasteland Chronicler", jsx: <><h2 id="arc-bard-wasteland_chronicler-wasteland-chronicler">Wasteland Chronicler</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 25</Link><br/>Some explore the farthest reaches of desolate wastelands, seeking to unlock the mysteries found there and meet the inhabitants of such regions, and chronicle their findings. The wasteland chronicler has discovered a connection to the wastelands and can use his performance to guide himself and others through these regions safely.</p>
<Ability id="arc-bard-wasteland_chronicler-wasteland-knowledge-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-wasteland_chronicler-wasteland-knowledge-ex">Wasteland Knowledge (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A wasteland chronicler adds <Link to="/misc/half">half</Link> his level (minimum 1) as a bonus on Knowledge (geography), Knowledge (local), Knowledge (nature), Knowledge (planes), and Survival checks.</Pair>
</Ability>
<Ability id="arc-bard-wasteland_chronicler-wasteland-specialist-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-wasteland_chronicler-wasteland-specialist-ex">Wasteland Specialist (Ex)</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="At 3rd Level">The wasteland chronicler gains the benefits of the <Link to="/ability/favored_terrain">favored terrain</Link> ranger class feature, but the wasteland chronicler can choose only cold, desert, mountain, or swamp from the ranger's favored terrain list. In addition, the wasteland chronicler adds half his level (minimum 1) as a bonus on Diplomacy checks to influence the attitude of wasteland dwellers.</Pair>
<Pair title="At 8th Level">He gains another favored terrain.</Pair>
<Pair title="At 13th Level">He gains another favored terrain.</Pair>
<Pair title="At 18th Level">He gains the final favored terrain.</Pair>
<Pair title="Special">If the wasteland chronicler has the favored terrain ability from any other classes, the levels from these different sources stack for the purposes of improving the bonuses of selected favored terrains and choosing new favored terrains.</Pair>
</Ability>
</>};
const _watersinger = {title: "Watersinger", jsx: <><h2 id="arc-bard-watersinger-watersinger">Watersinger</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 176</Link><br/>The watersinger's song reaches from the depths of his soul into the elemental waters from which life first sprang. His voice commands water, bending and shaping it to his desire.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-bard-watersinger--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/undine">Undine</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-bard-watersinger-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-watersinger-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A watersinger has some unique bardic performances, which replace some of the standard bardic performances as listed in each entry. These bardic performances follow all the general rules and restrictions of a bard's bardic performances.</Pair>
</Ability>
<Ability id="arc-bard-watersinger-watersong-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-watersinger-watersong-su">Watersong (Su)</Pair>
<Pair hl title="Replaces">Fascinate, suggestion, mass suggestion</Pair>
<Pair title="At 1st Level">A watersinger can use bardic performance to manipulate and control the shape of water within 30 feet. A successful Perform check allows the bard to animate and control a 5-foot-cube of water. The watersinger can command the water to take various forms, bend, rise, fall, or sustain a shape, and can make it support weight as if it were solid ice. For example, the watersinger could create a pillar of water (to provide cover), ladder, channel, bridge, stairs, slide, and so on. The manipulated water is as slippery as normal ice. This ability cannot create forms more fragile or complex than what could be carved in normal ice. While under the bard's control, the water has hardness 0 and 3 hit points per inch of thickness.</Pair>
<Pair title="At 3rd Level">The manipulated water gains hardness equal to <Link to="/misc/one_third">one-third</Link> the bard's level.</Pair>
<Pair title="At 5th Level">The volume affected increases by an additional 5-foot cube for every five bard levels the watersinger has. (These cubes must be adjacent to each other.)</Pair>
<Pair title="Special">The manipulated water retains its shape for 1 round after the bard stops spending bardic performance rounds to maintain it.</Pair>
</Ability>
<Ability id="arc-bard-watersinger-waterstrike-su" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-bard-watersinger-waterstrike-su">Waterstrike (Su)</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="At 3rd Level">The watersinger can spend 1 round of bardic performance to command any water he is currently manipulating with his watersong performance to lash out and strike an opponent with a slam attack. The watersinger uses his base attack bonus and Charisma bonus to make this attack, and deals 1d6 points of bludgeoning damage plus his Charisma bonus. The attack can originate from any square of water the bard is manipulating, and the water can get a flanking bonus or help a combatant get one, but cannot make attacks of opportunity. The water can make multiple attacks per round if your base attack bonus allows you to do so.</Pair>
<Pair title="At 10th Level">The water's slam damage increases to 1d8 points and the water gains a reach of 10 feet.</Pair>
<Pair title="At 15th Level">The water's slam damage increases to 2d6 points.</Pair>
<Pair title="At 20th Level">The water's slam damage increases to 2d8 points.</Pair>
</Ability>
<Ability id="arc-bard-watersinger-lifewater-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-watersinger-lifewater-su">Lifewater (Su)</Pair>
<Pair hl title="Replaces">The use of <em>lore master</em> gained at 5th level</Pair>
<Pair title="At 5th Level">The watersinger can spend 1 round of bardic performance as a standard action to manipulate the water, blood, and other fluids within a creature's body, causing the target to become <Link to="/misc/sickened">sickened</Link> for 1d4 rounds. Alternatively, he may use this ability to attempt a <Link to="/rule/reposition">reposition</Link> combat maneuver, using his base attack bonus and his Charisma modifier as his CMB. This ability has a range of 30 feet, only works on creatures whose bodies contain fluid, and does not affect creatures that are immune to critical hits.</Pair>
<Pair title="Special">A watersinger still gains the use of <em>lore master</em> once per day at 11th level and twice per day at 17th.</Pair>
</Ability>
<Ability id="arc-bard-watersinger-watersinger-spells" icon={["spell-book"]}>
<Pair single id="arc-bard-watersinger-watersinger-spells">Watersinger Spells</Pair>
<Pair title="Info">A watersinger adds certain water-themed spells to his spell list. He adds these abilities to his spell list as soon as his bard level allows him to cast spells of that spell level.</Pair>
<Pair plain title="0"><Link to="/spell/create_water">Create water</Link></Pair>
<Pair plain title="1st"><Link to="/spell/hydraulic_push">Hydraulic push</Link>, <Link to="/spell/slipstream">slipstream</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/aqueous_orb">Aqueous orb</Link>, <Link to="/spell/hydraulic_torrent">hydraulic torrent</Link>, <Link to="/spell/water_walk">water walk</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/fluid_form">Fluid form</Link>, <Link to="/spell/ride_the_waves">ride the waves</Link></Pair>
<Pair plain title="4th"><Link to="/spell/control_water">Control water</Link>, <Link to="/spell/communal_water_walk">communal water walk</Link></Pair>
<Pair plain title="5th"><Link to="/spell/vortex">Vortex</Link></Pair>
<Pair plain title="6th"><Link to="/spell/seamantle">Seamantle</Link></Pair>
</Ability>
</>};
const _wit = {title: "Wit", jsx: <><h2 id="arc-bard-wit-wit">Wit</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 23</Link><br/>The wit is a master of clever repartee and verbal dueling, moving through noble courts like a fish through water.</p>
<Ability id="arc-bard-wit-way-with-words-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-wit-way-with-words-ex">Way with Words (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A wit gains a bonus on Bluff, Diplomacy, Intimidate, Linguistics, and Sense Motive checks. This bonus is equal to 1 + one-fourth his bard level. He also gains a number of edges at the beginning of any <Link to="/rule/verbal_duels">verbal duel</Link> equal to this bonus.</Pair>
</Ability>
<Ability id="arc-bard-wit-counterargument" icon={["broken-shield"]}>
<Pair single id="arc-bard-wit-counterargument">Counterargument</Pair>
<Pair hl title="Alters">Countersong</Pair>
<Pair title="Ability">A wit can use only Perform (act, comedy, or oratory) to perform a countersong.</Pair>
</Ability>
<Ability id="arc-bard-wit-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-wit-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A wit gains the following bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-wit-cutting-remark-su" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="arc-bard-wit-cutting-remark-su">Cutting Remark (Su)</Pair>
<Pair hl title="Replaces">Inspire competence, dirge of doom, frightening tune</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Standard Action">A wit can wound with his words. The wit can spend 1 round of bardic performance to deal 1d4 points of nonlethal damage + the wit's bard level to a creature within 30 feet. Damage reduction applies to this damage.</Pair>
<Pair title="At 8th Level">A target who takes damage from cutting remark is also <Link to="/misc/sickened">sickened</Link> for as long as it remains within 30 feet of the wit and for 1 round thereafter. Additionally, the nonlethal damage counts as magic for purposes such as overcoming damage reduction.</Pair>
<Pair title="At 14th Level">A target who takes damage from cutting remark must also succeed at a Will save (DC = 10 + <Link to="/misc/half">half</Link> the wit's bard level + his Charisma modifier) or be <Link to="/misc/dazed">dazed</Link> for 1 round. A creature that makes a successful save is immune to the dazing effect of the wit's cutting remark for 24 hours.</Pair>
<Pair title="Special">Cutting remark is a mind-affecting, language-dependent effect, and relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-wit-quick-witted-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-bard-wit-quick-witted-ex">Quick Witted (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="At 2nd Level">A wit can always act in a surprise round (though he remains <Link to="/rule/flat_footed">flat-footed</Link> until he acts). In addition, the wit adds half his bard level on initiative checks.</Pair>
</Ability>
<Ability id="arc-bard-wit-on-the-ball-ex" icon={["rolling-dices"]}>
<Pair single id="arc-bard-wit-on-the-ball-ex">On the Ball (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="At 5th Level">Rather than roll for initiative, the wit can treat his roll as if it was a 10 (adding any modifiers as usual).</Pair>
<Pair title="At 20th Level">When the wit uses this ability, he can instead treat his roll as if it was a 20.</Pair>
<Pair title="Usage">1 time/day + 1 per six bard levels beyond 5th<ByLevelPop levels={[[5,1],[11,2],[17,3]]} unit="time" postText="/day" /></Pair>
</Ability>
<Ability id="arc-bard-wit-duel-master-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-wit-duel-master-ex">Duel Master (Ex)</Pair>
<Pair hl title="Replaces">Jack-of-all-trades</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Passive Ability">The wit does not lose any edges for being at an extreme disadvantage in a verbal duel and can either ask about one additional bias when successfully using Sense Motive to determine an audience's biases or automatically seed one of the biases that he discovered.</Pair>
<Pair title="Ability">Once during a verbal duel, he can reassign an appropriate skill from one tactic to another tactic in which he didn't assign any skills. The original tactic is treated as being unprepared for the rest of the duel.</Pair>
</Ability>
</>};
export default {geisha:_geisha,hatharat_agent:_hatharat_agent,hoaxer:_hoaxer,impervious_messenger:_impervious_messenger,juggler:_juggler,lotus_geisha:_lotus_geisha,luring_piper:_luring_piper,magician:_magician,masked_performer:_masked_performer,mute_musician:_mute_musician,negotiator:_negotiator,phrenologist:_phrenologist,pitax_academy_of_grand_arts:_pitax_academy_of_grand_arts,plant_speaker:_plant_speaker,prankster:_prankster,provocateur:_provocateur,ringleader_ag:_ringleader_ag,ringleader_ui:_ringleader_ui,sandman:_sandman,savage_skald:_savage_skald,sea_singer:_sea_singer,shadow_puppeteer:_shadow_puppeteer,silver_balladeer:_silver_balladeer,solacer:_solacer,songhealer:_songhealer,sorrowsoul:_sorrowsoul,sound_striker:_sound_striker,speaker_of_the_palatine_eye:_speaker_of_the_palatine_eye,stonesinger:_stonesinger,street_performer:_street_performer,studious_librarian:_studious_librarian,thundercaller:_thundercaller,voice_of_brigh:_voice_of_brigh,voice_of_the_wild:_voice_of_the_wild,wasteland_chronicler:_wasteland_chronicler,watersinger:_watersinger,wit:_wit}