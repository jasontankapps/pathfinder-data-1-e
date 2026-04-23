import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
const _fiend_keeper = {title: "Fiend Keeper", jsx: <><h2 id="arc-medium-fiend_keeper-fiend-keeper">Fiend Keeper</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 8</Link><br/>Among the most sacred roles a grippli can play is that of fiend keeper, a vessel to contain one of the world's evil spirits so that it cannot inflict further harm. As the host performs goodly acts, he slowly cleanses the spirit, continuing this process over many generations, until the entity's vileness is no more. In turn, the spirit tempts the fiend keeper with blasphemous power that a cautious medium can direct toward righteous ends. Many tribes boast a resident fiend keeper who bears this local burden and trains replacements who might take over when their mentor dies.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-medium-fiend_keeper--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><ul><li><Link to="/race/grippli">Grippli</Link></li><li>Alignment must be nonevil</li></ul></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-medium-fiend_keeper-evil-spirit-su" icon={["stairs-goal","broken-shield","abstract-091"]}>
<Pair single id="arc-medium-fiend_keeper-evil-spirit-su">Evil Spirit (Su)</Pair>
<Pair hl title="Alters">Spirit</Pair>
<Pair title="Ability">A fiend keeper serves as the vessel for a powerful evil spirit that fights and bargains for dominance. The legends a fiend keeper channels are all aspects of this evil presence. Willingly performing an evil act automatically grants the evil spirit 1 point of influence over him. <Link to="/spell/protection_from_evil">Protection from evil</Link> temporarily suppresses all the spirit's benefits while the fiend keeper is under the spell's effects. When the spirit gains at least 3 points of influence over the fiend keeper, in addition to the penalties associated with each legend, he gains an evil aura as per a <Link to="/class/cleric">cleric</Link> of his level and treats his alignment as evil for the purposes of resisting or being vulnerable to spells and abilities (such as <Link to="/spell/unholy_blight">unholy blight</Link> or a paladin's <em>smite evil</em> class ability).</Pair>
</Ability>
<Ability id="arc-medium-fiend_keeper-dark-communion-su" extraClasses="hasSubs" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-medium-fiend_keeper-dark-communion-su">Dark Communion (Su)</Pair>
<Pair hl title="Replaces">Haunt channeler, location channel, connection channel, ask the spirits</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Full-Round Action"><p>A fiend keeper can entice the evil spirit to lend him its knowledge or its power a number of times per day equal to his class level.</p>
<p>If the fiend keeper seeks <strong className="hl">knowledge</strong>, this behaves as <Link to="/spell/contact_other_plane">contact other plane</Link> using his medium level as his caster level, but if he fails the Intelligence or Charisma check, his spirit gains 1 point of influence over him instead of reducing his ability scores. Treat the spirit as an entity from the Astral Plane for this ability.</p>
<p>If the fiend keeper requests <strong className="hl">power</strong>, he must instead succeed at an Intelligence or Charisma check (DC 10), or his spirit gains 1 point of influence over him. Regardless of the outcome, he gains one of the powers below for 1 minute.</p>
</Pair>
<Pair title="At 5th Level">The fiend's knowledge becomes that of a demigod. When requesting power, the fiend keeper also gains a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to his medium level for 1 minute.</Pair>
<Pair title="At 7th Level">The fiend's knowledge becomes equivalent to a lesser deity. The DC of the "request power" option becomes 12, and the fiend keeper can now select two powers from the list below.</Pair>
<Pair title="At 13th Level">The fiend's knowledge becomes equivalent to an intermediate deity. The DC of the "request power" option becomes 14.</Pair>
</Ability>
<Ability id="arc-medium-fiend_keeper-dark-power" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-medium-fiend_keeper-dark-power">Dark Power</Pair>
<Pair title="Passive Ability">The fiend keeper gains a +1 profane bonus on attack and damage rolls, and a +1 profane bonus to AC.</Pair>
<Pair title="At 13th Level">These bonuses increase to +2.</Pair>
</Ability>
<Ability id="arc-medium-fiend_keeper-fiendish-form" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-medium-fiend_keeper-fiendish-form">Fiendish Form</Pair>
<Pair title="Ability">The fiend keeper gains darkvision 60 feet.</Pair>
<Pair title="At 7th Level">He grows fiendish wings and gains a fly speed equal to his base speed (average maneuverability).</Pair>
<Pair title="At 13th Level">His fly speed instead equals double his base speed (good maneuverability).</Pair>
</Ability>
<Ability id="arc-medium-fiend_keeper-natural-attacks" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-medium-fiend_keeper-natural-attacks">Natural Attacks</Pair>
<Pair title="Ability">The fiend keeper gains two claw attacks and a bite attack. These are <Link to="/umr/primary_attack">primary attacks</Link> that each deal 1d4 points of damage (1d6 if the fiend keeper is Medium).</Pair>
<Pair title="At 13th Level">The damage increases to 1d6 (1d8 if Medium).</Pair>
</Ability>
<Ability id="arc-medium-fiend_keeper-spirit-power" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-medium-fiend_keeper-spirit-power">Spirit Power</Pair>
<Pair title="Passive Ability">The fiend keeper's spirit bonus increases by 1.</Pair>
<Pair title="At 13th Level">The spirit bonus instead increases by 2.</Pair>
</Ability>
<Ability id="arc-medium-fiend_keeper-unholy-resilience" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-medium-fiend_keeper-unholy-resilience">Unholy Resilience</Pair>
<Pair title="Passive Ability">The fiend keeper gains <Link to="/umr/resistance">resistance</Link> 5 to two of the following energy types: acid, cold, electricity, fire, or sonic.</Pair>
<Pair title="At 7th Level">The resistance becomes 10.</Pair>
<Pair title="At 13th Level">The resistance increases to 20.</Pair>
</Ability>
<Ability id="arc-medium-fiend_keeper-ex-fiend-keepers" icon={["hazard-sign"]}>
<Pair single id="arc-medium-fiend_keeper-ex-fiend-keepers">Ex-Fiend Keepers</Pair>
<Pair title="Info">A fiend keeper who becomes permanently evil loses control of the spirit after 1d4+1 days, at which point he becomes an NPC under the GM's full control. Seeking an <Link to="/spell/atonement">atonement</Link> spell before then can change the medium's alignment. This effect also can be undone with a <Link to="/spell/limited_wish">limited wish</Link>, <Link to="/spell/miracle">miracle</Link>, or <Link to="/spell/wish">wish</Link> spell.</Pair>
</Ability>
</>};
const _kami_medium = {title: "Kami Medium", jsx: <><h2 id="arc-medium-kami_medium-kami-medium">Kami Medium</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 92</Link><br/>Some mediums channel the power of nature spirits called <Link to="/family/kami">kami</Link> rather than the spirits of legend.</p>
<Ability id="arc-medium-kami_medium-kami-channeler-su" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-medium-kami_medium-kami-channeler-su">Kami Channeler (Su)</Pair>
<Pair hl title="Alters">Spirit</Pair>
<Pair title="Ability">A kami medium channels the kami at locations different from where a normal medium channels his spirits. The kami medium channels the <Link to="/monster/dosojin">dosojin</Link> (which acts as the <Link to="/spirit/trickster">trickster</Link>) at crossroads and other major roadway milestones; the <Link to="/monster/fukujin">fukujin</Link> (which acts as the <Link to="/spirit/marshal">marshal</Link>) at ornamental shrubs and bonsai trees; the <Link to="/monster/kaminari">kaminari</Link> (which acts as the <Link to="/spirit/champion">champion</Link>) in the midst of storms; the <Link to="/monster/suijin">suijin</Link> (which acts as the <Link to="/spirit/hierophant">hierophant</Link>) at pure lakes, ponds, springs, and wells; and the <Link to="/monster/zuishin">zuishin</Link> (which acts as the <Link to="/spirit/guardian">guardian</Link>) at significant gates, doorways, and torii. The kami medium does not have access to the <em>archmage</em> legend.</Pair>
</Ability>
<Ability id="arc-medium-kami_medium-natural-taboo-ex" icon={["stairs-goal"]}>
<Pair single id="arc-medium-kami_medium-natural-taboo-ex">Natural Taboo (Ex)</Pair>
<Pair hl title="Alters">Taboo</Pair>
<Pair title="Ability">A kami medium gains the <em>taboo</em> ability at 1st level.</Pair>
<Pair title="Special">Regardless of which kami he channels, each day he must accept the <em>hierophant taboo</em> to strongly revere nature and avoid metal armor. The kami medium gains two free uses of <em>spirit surge</em> from accepting this <em>taboo,</em> as normal.</Pair>
</Ability>
<Ability id="arc-medium-kami_medium-ofuda-su" icon={["magic-swirl"]}>
<Pair single id="arc-medium-kami_medium-ofuda-su">Ofuda (Su)</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Ability"><p>A kami medium uses ofudas - psychically charged prayer scrolls - to focus his spells. Each of his spells gains an ofuda as an additional inexpensive material component, and the ofuda replaces the divine focus for spells the kami medium gains via the <em>divine surge</em> spirit power. Unless the spell involves a touch attack or ranged touch attack, the kami medium doesn't need to attempt an attack roll to place an ofuda on an unwilling target; the ofuda simply appears on affected targets. For instantaneous spells, the ofuda is consumed during the casting, but for spells with any other duration, the ofuda remains on the target or targets throughout the duration and then disintegrates when the duration expires.</p>
<p>A kami medium's spells can't be dispelled by <Link to="/spell/dispel_magic">dispel magic</Link> or <Link to="/spell/greater_dispel_magic">greater dispel magic</Link>, but removing or destroying the ofuda ends the duration immediately. An ofuda must be displayed prominently and can't be hidden (though a creature bearing an ofuda can hide normally). A successful <Link to="/rule/steal">steal</Link> or <Link to="/rule/grapple">grapple</Link> combat maneuver check to remove an item is sufficient to remove an ofuda from an unwilling target, and a <strong className="hl">standard action</strong> automatically removes it from a willing target. An ofuda counts as an object made of paper with 5 hit points per medium level. The target of the spell can't see, harm, or remove the ofuda attached to her, though her allies can do so. If the spell is harmless, the target can see her ofuda.</p>
</Pair>
</Ability>
<Ability id="arc-medium-kami_medium-shikigami-ex" icon={["magic-swirl"]}>
<Pair single id="arc-medium-kami_medium-shikigami-ex">Shikigami (Ex)</Pair>
<Pair hl title="Replaces">Haunt channeler, location channel, connection channel</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A kami medium learns to fold an origami animal to serve as a temporary ward for a minor <Link to="/monster/shikigami">shikigami</Link>. Initially, the merged minor shikigami can't leave the paper body and acts in all ways as an ordinary animal <Link to="/sidekick/familiar">familiar</Link> of the origami animal's type, although it still appears to be made of paper.</Pair>
<Pair title="At 5th Level">It gains the abilities of a shikigami <Link to="/ability/improved_familiars">improved familiar</Link>, even if the kami medium doesn't meet the prerequisites for having a shikigami as a familiar. The shikigami treats the kami medium as its ward. Additionally, it gains the ability to use <em>change shape</em> to change between its full shikigami form and its origami form at will (as <Link to="/spell/beast_shape_ii">beast shape II</Link>).</Pair>
</Ability>
<Ability id="arc-medium-kami_medium-ask-the-kami-su" icon={["magic-swirl"]}>
<Pair single id="arc-medium-kami_medium-ask-the-kami-su">Ask the Kami (Su)</Pair>
<Pair hl title="Replaces">Ask the spirits</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">A kami medium can ask the local kami for information, as <Link to="/spell/commune_with_nature">commune with nature</Link>. While he can do so any number of times per day, he can ask questions of the kami in any particular area only once per day. Afterward, he must move to a non-overlapping area to use this ability again.</Pair>
</Ability>
<Ability id="arc-medium-kami_medium-ward-su" icon={["magic-swirl"]}>
<Pair single id="arc-medium-kami_medium-ward-su">Ward (Su)</Pair>
<Pair hl title="Replaces">Astral journey</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">A kami medium can declare an area or object that's an appropriate place to contact his channeled kami as his ward. This grants the kami medium the <em>ward</em> and <em>merge with ward</em> abilities of the <Link to="/subtype/kami">kami</Link> subtype. For large areas such as lakes or storms, a kami medium's ward encompasses a radius of up to 5 feet per medium level.</Pair>
</Ability>
</>};
const _medium_of_the_master = {title: "Medium of the Master", jsx: <><h2 id="arc-medium-medium_of_the_master-medium-of-the-master">Medium of the Master</h2>
<p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 5</Link><br/>A medium of the master forgoes a connection with most spirits to form a bond with the spirits of great martial artists.</p>
<Ability icon={["skills"]} id="arc-medium-medium_of_the_master-undefined">
<Pair id="arc-medium-medium_of_the_master-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX)</Pair>
<Pair title="Removed Skills">Use Magic Device</Pair></Ability>
<Ability id="arc-medium-medium_of_the_master-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-medium-medium_of_the_master-armor-proficiency">Armor Proficiency</Pair>
<Pair hl title="Alters">Armor proficiency</Pair>
<Pair title="Info">A medium of the master is proficient with only light armor.</Pair>
</Ability>
<Ability id="arc-medium-medium_of_the_master-unarmed-strike" icon={["stairs-goal"]}>
<Pair single id="arc-medium-medium_of_the_master-unarmed-strike">Unarmed Strike</Pair>
<Pair title="Ability">A medium of the master gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-medium-medium_of_the_master-dedicated-spirit-su" icon={["broken-shield"]}>
<Pair single id="arc-medium-medium_of_the_master-dedicated-spirit-su">Dedicated Spirit (Su)</Pair>
<Pair hl title="Alters">Spirit</Pair>
<Pair title="Ability">A medium of the master can channel only a <Link to="/spirit/champion">champion</Link> spirit. A medium of the master can channel that spirit in places of quiet introspection, such as a Darklands grotto, peaceful glade, or windswept peak, in addition to a champion spirit's favored locations.</Pair>
</Ability>
<Ability id="arc-medium-medium_of_the_master-dedicated-surge-su" icon={["upgrade"]}>
<Pair single id="arc-medium-medium_of_the_master-dedicated-surge-su">Dedicated Surge (Su)</Pair>
<Pair hl title="Alters">Spirit surge</Pair>
<Pair title="Ability">A medium of the master can use her <em>spirit surge</em> ability twice per day without incurring any influence (this stacks with any additional uses she gains from accepting a <em>taboo,</em> starting at 2nd level). In addition, when she uses <em>spirit surge,</em> the die she rolls is one step larger (1d8 at 1st level, 1d10 at 10th level, and 2d6 at 20th level).</Pair>
</Ability>
<Ability id="arc-medium-medium_of_the_master-spirit-call-su" icon={["stairs-goal"]}>
<Pair single id="arc-medium-medium_of_the_master-spirit-call-su" flavor={["The medium of the master's unique bond allows her to briefly call on a champion spirit without performing a ",{"tag":"em","content":"seance.","props":{}}]}>Spirit Call (Su)</Pair>
<Pair title="Standard Action">She can allow a spirit to gain 1 point of influence over her to channel it for a number of minutes equal to her level. This influence remains for 24 hours, stacking with any influence the medium gains by using this ability multiple times or by channeling a spirit in a <em>seance</em> during that time.</Pair>
</Ability>
<Ability id="arc-medium-medium_of_the_master-masters-power-su" icon={["mailed-fist"]}>
<Pair single id="arc-medium-medium_of_the_master-masters-power-su">Master's Power (Su)</Pair>
<Pair hl title="Alters">Spirit power (lesser)</Pair>
<Pair title="Ability">When a medium of the master channels a champion spirit, she treats her unarmed strike damage as that of a <Link to="/class/monk">monk</Link> of her level. For the purpose of determining damage, these levels stack with levels from any other class that grants increased damage to unarmed strikes.</Pair>
</Ability>
<Ability id="arc-medium-medium_of_the_master-shared-prowess-su" icon={["armor-upgrade"]}>
<Pair single id="arc-medium-medium_of_the_master-shared-prowess-su" flavor="A medium of the master's spirit endows her with greater martial expertise.">Shared Prowess (Su)</Pair>
<Pair hl title="Replaces">Shared seance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">She gains a dodge bonus to AC equal to her spirit bonus as long as she is wearing light or no armor.</Pair>
</Ability>
<Ability id="arc-medium-medium_of_the_master-masters-strike-su" icon={["stairs-goal"]}>
<Pair single id="arc-medium-medium_of_the_master-masters-strike-su">Master's Strike (Su)</Pair>
<Pair hl title="Alters">Spirit power (intermediate)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">When a medium of the master gains the intermediate power granted by her champion spirit, she also learns one type of <Link to="/ability/style_strikes">style strike</Link>. Whenever she gains an additional attack from <em>sudden attack,</em> she can designate one of the blows as a style strike as long as she makes it with an unarmed strike. She can select a different style strike each time she channels a champion spirit.</Pair>
</Ability>
<Ability id="arc-medium-medium_of_the_master-ki-contact-su" icon={["stairs-goal"]}>
<Pair single id="arc-medium-medium_of_the_master-ki-contact-su">Ki Contact (Su)</Pair>
<Pair hl title="Replaces">Trance of three</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Swift Action">A medium of the master can allow her spirit to gain 1 point of influence over her in order to gain a <Link to="/ability/ki_powers">ki power</Link> and a number of ki points equal to her Charisma modifier (minimum 1) until the spirit leaves her body. She uses her medium levels as monk levels for the purposes of meeting the ki power's prerequisites and any level-dependent benefits of the power. Multiple uses of this ability stack, allowing her to select one power to serve as a prerequisite for another.</Pair>
</Ability>
<Ability id="arc-medium-medium_of_the_master-masters-style-su" icon={["stairs-goal"]}>
<Pair single id="arc-medium-medium_of_the_master-masters-style-su">Master's Style (Su)</Pair>
<Pair hl title="Alters">Spirit power (supreme)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">When a medium of the master channels a champion spirit, she gains a bonus <Link to="/main/style_feat">style feat</Link> and the two feats in that style's feat path. She does not have to meet the prerequisites for these feats.</Pair>
</Ability>
</>};
const _nexian_channeler = {title: "Nexian Channeler", jsx: <><h2 id="arc-medium-nexian_channeler-nexian-channeler">Nexian Channeler</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 10</Link><br/>Normally, storied figures who simply disappear don't form legendary spirits, but the archmage Nex long ago created an astral reflection of himself from which he can draw additional power. This echo now serves as an appropriate spirit for well-trained mediums to channel. Nex's legendary spirit is more powerful and willful than most legendary spirits, however; it embraces only mediums who visit distinct locations and master opening their <em>third eyes.</em></p>
<Ability id="arc-medium-nexian_channeler-legend-of-nex-su" icon={["info"]}>
<Pair single id="arc-medium-nexian_channeler-legend-of-nex-su">Legend of Nex (Su)</Pair>
<Pair hl title="Alters">Spirit</Pair>
<Pair title="Info">A Nexian channeler gains access to the <Link to="/spirit/nex">Nex</Link> legendary spirit instead of an archmage spirit.</Pair>
</Ability>
<Ability id="arc-medium-nexian_channeler-third-eye-sp-su" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-medium-nexian_channeler-third-eye-sp-su">Third Eye (Sp, Su)</Pair>
<Pair hl title="Alters">Knacks, taboo</Pair>
<Pair title="Info">A Nexian channeler knows one fewer knack than his level would normally indicate, but he gains <Link to="/feat/third_eye">Third Eye</Link> as a bonus feat.</Pair>
<Pair title="At 2nd Level">When he selects a <em>taboo,</em> the Nexian channeler can use his <em>third eye</em> for 2 minutes per character level each day, instead of gaining free uses of <em>spirit surge.</em></Pair>
</Ability>
<Ability id="arc-medium-nexian_channeler-impossible-eye-su" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-medium-nexian_channeler-impossible-eye-su" flavor="A Nexian channeler gains additional powers from his third eye.">Impossible Eye (Su)</Pair>
<Pair hl title="Replaces">Haunt channeler, location channel, connection channel, propitiation, ask the spirits, astral journey, trance of three, spacious soul</Pair>
<Pair title="At 3rd Level">While his <em>third eye</em> is open, his caster level for divination spells increases by 1 and he gains darkvision with a range of 60 feet.</Pair>
<Pair title="At 5th Level">While his <em>third eye</em> is open, he gains constant <Link to="/spell/detect_magic">detect magic</Link>.</Pair>
<Pair title="At 7th Level">While his <em>third eye</em> is open, he gains constant <Link to="/spell/arcane_sight">arcane sight</Link> instead of <em>detect magic.</em></Pair>
<Pair title="At 9th Level">While his <em>third eye</em> is open, his bonus on Perception checks against invisible creatures improves to <Link to="/spell/see_invisibility">see invisibility</Link>.</Pair>
<Pair title="At 13th Level">He can concentrate for 1 minute to send his <em>third eye</em> from his body, as per <Link to="/spell/arcane_eye">arcane eye</Link> (this duration counts against the daily duration for which he can open his <em>third eye,</em> and if the <em>arcane eye</em> is destroyed, he loses all remaining minutes of his <em>third eye</em> ability for that day).</Pair>
<Pair title="At 14th Level">As a <strong className="hl">standard action</strong> while his <em>third eye</em> is open, he can spend 1 minute of the duration he can open his <em>third eye</em> to use <Link to="/spell/analyze_dweomer">analyze dweomer</Link> on a single target.</Pair>
<Pair title="At 15th Level">While his <em>third eye</em> is open, he gains <Link to="/spell/true_seeing">true seeing</Link>.</Pair>
<Pair title="At 18th Level">While his <em>third eye</em> is open, his <em>arcane sight</em> improves to <Link to="/spell/greater_arcane_sight">greater arcane sight</Link>.</Pair>
</Ability>
<Ability id="arc-medium-nexian_channeler-third-eye-mastery-su" icon={["upgrade"]}>
<Pair single id="arc-medium-nexian_channeler-third-eye-mastery-su" flavor={["A Nexian channeler can open his ",{"tag":"em","content":"third eye","props":{}}," for longer than normal."]}>Third Eye Mastery (Su)</Pair>
<Pair hl title="Replaces">Spirit mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Ability">He can open his <em>third eye</em> for 5 minutes per medium level (increasing to 10 minutes per medium level if he selects a <em>taboo</em>); this duration must be used in 5-minute increments. Uses of <em>analyze dweomer</em> cost him 5-minute increments instead of 1-minute increments, and he can use the <Link to="/skill/read_aura">read aura</Link> occult skill unlock with his <em>third eye</em> multiple times per day; each use takes only 1 minute but costs 5 minutes of the duration he can keep his <em>third eye</em> open.</Pair>
</Ability>
<Ability id="arc-medium-nexian_channeler-living-third-eye-su" icon={["upgrade"]}>
<Pair single id="arc-medium-nexian_channeler-living-third-eye-su" flavor={["A Nexian channeler is as one with his ",{"tag":"em","content":"third eye.","props":{}}]}>Living Third Eye (Su)</Pair>
<Pair hl title="Replaces">Astral beacon</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">His <em>third eye</em> is open at all times, he can use <em>analyze dweomer</em> and the <em>read aura</em> occult skill unlock at will, and the destruction of his <em>arcane eye</em> does not adversely affect him.</Pair>
</Ability>
</>};
const _outer_channeler = {title: "Outer Channeler", jsx: <><h2 id="arc-medium-outer_channeler-outer-channeler">Outer Channeler</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 12</Link><br/>Rather than invite strange entities and departed souls into their bodies, outer channelers invite extraplanar entities to inhabit them, allowing the likes of angels and demons to use them as vessels in exchange for power. However, this bond always comes with a cost.</p>
<Ability id="arc-medium-outer_channeler-outsider-invocation-su" icon={["stairs-goal"]}>
<Pair single id="arc-medium-outer_channeler-outsider-invocation-su">Outsider Invocation (Su)</Pair>
<Pair hl title="Alters">Spirit, spirit power (intermediate)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>An outer channeler chooses one outsider subtype from among those listed below. His alignment must be within one step of the outsider's alignment in order to choose it, and once chosen it cannot be changed. Instead of channeling spirits, an outer channeler invokes outsiders of his chosen subtype during his <em>seance.</em></p>
<p>An outer channeler can invoke creatures from the following outsider subtypes: <Link to="/spirit/aeon">aeon</Link>, <Link to="/spirit/agathion">agathion</Link>, <Link to="/spirit/angel">angel</Link>, <Link to="/spirit/archon">archon</Link>, <Link to="/spirit/azata">azata</Link>, <Link to="/spirit/daemon">daemon</Link>, <Link to="/spirit/demon">demon</Link>, <Link to="/spirit/devil">devil</Link>, and <Link to="/spirit/psychopomp">psychopomp</Link>. The outsiders associated with each spirit provide no mechanical benefit and are merely suggestions based on the themes and interests of each creature. At the GM's discretion, he can swap which outsiders are associated with each spirit and can even use outsiders of the indicated subtype that aren't listed, though outsiders capable of serving as an <Link to="/ability/improved_familiars">improved familiar</Link> and outsiders of CR 20 or higher typically do not answer an outer channeler's calls.</p>
<p>Each subtype lists six outsiders that, when invoked, provide the outer channeler with the same benefits as the outsider's associated spirit. For example, an outer channeler with angel as his chosen subtype can invoke the astral deva, balisse, empyrean, movanic deva, planetar, and solar outsiders, which function like the trickster, hierophant, archmage, champion, marshal, and guardian spirits, respectively.</p>
<p>An outer channeler doesn't gain the intermediate power normally granted by his invoked outsider's associated spirit. Instead, he gains the intermediate power noted in his invoked outsider's subtype, regardless of which spirit that invoked outsider is associated with. Furthermore, the outer channeler gains a gift at 13th level, as noted in his invoked outsider subtype.</p>
</Pair>
<Pair title="Special">An invoked outsider acts as a spirit for all other effects, including the <em>trance of three</em> and <em>astral beacon</em> class features.</Pair>
</Ability>
<Ability id="arc-medium-outer_channeler-taboo-ex" icon={["broken-shield","hazard-sign"]}>
<Pair single id="arc-medium-outer_channeler-taboo-ex">Taboo (Ex)</Pair>
<Pair hl title="Alters">Taboo</Pair>
<Pair title="Ability">Whenever he invokes an outsider, an outer channeler must accept one <em>taboo</em> from among those listed by his chosen outsider's subtype before the outsider will enter his body. Accepting this <em>taboo</em> provides the outer channeler with no benefits other than those gained from channeling a spirit; if he wishes to gain additional uses of his <em>spirit purge</em> ability as described by the <em>taboo</em> class feature, he must accept a second <em>taboo</em> from among those listed by the legend that his chosen outsider subtype functions as. If the outer channeler breaks this mandatory <em>taboo,</em> the outsider immediately leaves and the outer channeler can't invoke a new outsider until he atones (as per <Link to="/spell/atonement">atonement</Link>).</Pair>
</Ability>
<Ability id="arc-medium-outer_channeler-shared-seance-su" icon={["broken-shield"]}>
<Pair single id="arc-medium-outer_channeler-shared-seance-su">Shared Seance (Su)</Pair>
<Pair hl title="Alters">Shared seance</Pair>
<Pair title="Info">An outer channeler's ally cannot gain the <em>seance</em> boon from an outer channeler's outsider spirit if that ally's alignment is more than one step away from the outsider's alignment.</Pair>
</Ability>
<Ability id="arc-medium-outer_channeler-servitor-ex" icon={["stairs-goal"]}>
<Pair single id="arc-medium-outer_channeler-servitor-ex">Servitor (Ex)</Pair>
<Pair hl title="Replaces">Haunt channeler, connection channel</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">An outer channeler can summon the spirit of an outsider of his chosen subtype and house it within the body of an ordinary animal. The outsider takes the form of this animal and acts in all ways as an ordinary <Link to="/sidekick/familiar">familiar</Link> of that type.</Pair>
<Pair title="At 7th Level">The animal transforms into an outsider, taking the form of an <Link to="/ability/improved_familiars">improved familiar</Link> with the outer channeler's chosen outsider subtype (such as a <Link to="/monster/cassisian">cassisian</Link> for an angel-invoking medium). The outer channeler doesn't need to meet the prerequisites to gain this improved familiar, and the improved familiar gains the ability to <em>change shape</em> between its outsider form and its animal form at will (as per <Link to="/spell/beast_shape_ii">beast shape II</Link>).</Pair>
</Ability>
<Ability id="arc-medium-outer_channeler-site-channeling-su" icon={["info"]}>
<Pair single id="arc-medium-outer_channeler-site-channeling-su">Site Channeling (Su)</Pair>
<Pair hl title="Replaces">Location channel</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Info">An outer channeler can invoke outsiders from any site tied to any of the following: creatures of his chosen subtype, deities that grant his chosen subtype as a cleric subdomain, or planes that creatures of his chosen subtype are native to. This is in addition to the usual list of sites from which he can channel his outsiders.</Pair>
</Ability>
<Ability id="arc-medium-outer_channeler-ask-the-planes-sp" icon={["stairs-goal"]}>
<Pair single id="arc-medium-outer_channeler-ask-the-planes-sp">Ask the Planes (Sp)</Pair>
<Pair hl title="Replaces">Astral journey</Pair>
<Pair hl title="Alters">Ask the spirits</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">An outer channeler gains the <em>ask the spirits</em> ability of the standard medium, except he sends his consciousness to a native plane of his chosen outsider subtype (<Link to="/rule/heaven">Heaven</Link> for archons, <Link to="/rule/hell">Hell</Link> for devils, any good-aligned plane for angels, and so on).</Pair>
</Ability>
</>};
const _reanimated_medium = {title: "Reanimated Medium", jsx: <><h2 id="arc-medium-reanimated_medium-reanimated-medium">Reanimated Medium</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 93</Link><br/>Sometimes a departed soul destined for legend gains a second chance at life by possessing his own revived body.</p>
<Ability id="arc-medium-reanimated_medium-channel-self-su" icon={["info","stairs-goal","broken-shield"]}>
<Pair single id="arc-medium-reanimated_medium-channel-self-su">Channel Self (Su)</Pair>
<Pair hl title="Alters">Spirit</Pair>
<Pair title="Info">A reanimated medium is essentially a bodiless spirit using influence to possess his own spiritless body. "The reanimated medium" refers to this spirit. Unlike a normal medium, a reanimated medium becomes more powerful the more influence it has over its body.</Pair>
<Pair title="Ability">Each day, the reanimated medium can perform a <em>seance</em> at a location as normal to focus on one of his potential future legends. He channels that legendary potential as strongly as possible into his body. The spirit gains 3 points of influence over his body, to a maximum of 6 points. Since he is his own possessing spirit, he doesn't lose control at 5 or more points of influence, though he still suffers the legend's influence penalty as normal at 3 or more points of influence. All effects and abilities that normally increase or decrease influence (such as <em>spirit surge</em> and spirit powers) have the opposite effect on a reanimated medium (for instance, <em>propitiation</em> increases influence by 1 point and <em>spirit surge</em> reduces influence by 1 point); this does not apply to the new abilities from the reanimated medium archetype. A reanimated medium can't choose to channel a weaker spirit to avoid losing influence from using <em>spirit surge.</em> The body of a reanimated medium who reaches 0 points of influence enters a deathlike coma and is helpless for 24 hours, after which the reanimated medium reverts to 1 point of influence if the body is still alive, but can't perform a <em>seance</em> for another 24 hours.</Pair>
<Pair title="Special">A character who selects the reanimated medium archetype after 1st level can do so only after dying; at the GM's discretion, a dead character of another class with an intact body who has earned enough experience points to level up can take a level in medium and gain the reanimated medium archetype, and a dead medium might be able to gain this archetype. In any case, being revived from gaining the reanimated medium archetype does not impart any <Link to="/rule/negative_levels">negative levels</Link> or other ill effects.</Pair>
</Ability>
<Ability id="arc-medium-reanimated_medium-nothing-is-taboo-ex" icon={["broken-shield"]}>
<Pair single id="arc-medium-reanimated_medium-nothing-is-taboo-ex">Nothing Is Taboo (Ex)</Pair>
<Pair title="Info">A reanimated medium doesn't gain the <em>taboo</em> class feature.</Pair>
</Ability>
<Ability id="arc-medium-reanimated_medium-ease-passage-su" icon={["upgrade"]}>
<Pair single id="arc-medium-reanimated_medium-ease-passage-su">Ease Passage (Su)</Pair>
<Pair hl title="Replaces">Haunt channeler</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">As long as a reanimated medium's body is intact, it's easy for him to return to it. He takes only 1 negative level instead of 2 from <Link to="/spell/raise_dead">raise dead</Link>.</Pair>
</Ability>
<Ability id="arc-medium-reanimated_medium-lingering-spirit-su" icon={["armor-upgrade"]}>
<Pair single id="arc-medium-reanimated_medium-lingering-spirit-su">Lingering Spirit (Su)</Pair>
<Pair hl title="Replaces">Location channel</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A reanimated medium's spirit lingers for up to 1 round after death before departing if the medium spends 1 point of influence. If the reanimated medium died of hit point damage, healing works on his body during the intervening round and can bring him back to life. Once the spirit departs, the <Link to="/spell/breath_of_life">breath of life</Link> spell continues to work for 1 additional round, even though the reanimated medium has been dead for more than 1 round.</Pair>
</Ability>
<Ability id="arc-medium-reanimated_medium-spirit-warding-su" icon={["armor-upgrade"]}>
<Pair single id="arc-medium-reanimated_medium-spirit-warding-su" flavor="The reanimated medium can ward himself from other spirits and the grave's call.">Spirit Warding (Su)</Pair>
<Pair hl title="Replaces">Connection channel, spacious soul</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">He gains a +4 bonus on saving throws against possession, death effects, and negative energy. This stacks with the bonus to resist possession that mediums gain from having high influence.</Pair>
<Pair title="At 18th Level">He becomes immune to possession, death effects, and negative energy.</Pair>
</Ability>
<Ability id="arc-medium-reanimated_medium-living-legend-su" icon={["stairs-goal"]}>
<Pair single id="arc-medium-reanimated_medium-living-legend-su">Living Legend (Su)</Pair>
<Pair hl title="Replaces">Astral beacon</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">The reanimated medium reaches the legendary potential from which he borrowed so long ago and becomes a living embodiment of his legend. Any ally in the reanimated medium's presence can perform a <em>seance</em> to channel the reanimated medium (the <em>seance</em> takes 1 hour and is subject to the other rules for a medium's <em>seance</em>). Each ally can do this only once per day. At the end of the <em>seance,</em> the reanimated medium can choose to reduce his influence by 1 point. If the reanimated medium does so, some of his spirit seeps into that ally, which can then spend that 1 point of influence to use any of the reanimated medium's abilities that decrease influence.</Pair>
</Ability>
</>};
const _relic_channeler = {title: "Relic Channeler", jsx: <><h2 id="arc-medium-relic_channeler-relic-channeler">Relic Channeler</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 93</Link><br/>A relic channeler carries relics of legend around with her. She need not rely on locating the specific spirits that she seeks, but the relics limit the number of unique spirits she can channel.</p>
<Ability id="arc-medium-relic_channeler-relics-su" icon={["stairs-goal"]}>
<Pair single id="arc-medium-relic_channeler-relics-su">Relics (Su)</Pair>
<Pair hl title="Alters">Spirit</Pair>
<Pair title="Ability">A relic channeler begins with one relic for each of the six spirit legends. Each relic corresponds to a specific spirit, and could be any type of psychically resonant item: from a runestone with a symbol related to that spirit to a bone remnant from a legendary hero. Once a relic channeler selects a choice for <em>taboos</em> and spirit powers (such as <em>archmage arcana</em> and <em>legendary champion</em>), those choices remain in effect every time she channels that legend; unlike normal mediums, she can't select a different option each time. A relic channeler can't choose to channel a weaker spirit to reduce her influence from <em>spirit surge.</em> She doesn't need to find an appropriate location to channel her spirits, since she can simply use her relics. If she loses one of her relics, she is incapable of channeling that legend until she recovers the relic.</Pair>
<Pair title="Special">If the relic is destroyed, the relic channeler can use her strong bond with the spirit of that relic to forge a new relic for that spirit from her own essence. The process takes 1 week of intense <em>seances</em> and 500 gp per medium level she possesses.</Pair>
</Ability>
<Ability id="arc-medium-relic_channeler-powerful-bond-su" icon={["stairs-goal"]}>
<Pair single id="arc-medium-relic_channeler-powerful-bond-su">Powerful Bond (Su)</Pair>
<Pair hl title="Alters">Spirit</Pair>
<Pair title="Passive Ability">Because of habitually channeling the same spirits and possessing physical links to the spirits' former lives and legends, a relic channeler possesses a strong bond with her spirits. She receives the benefit of the <Link to="/feat/alertness">Alertness</Link> feat whenever she is suffering a spirit's influence penalty.</Pair>
<Pair title="Ability">She chooses two spells of each level with the <em>archmage arcana</em> and <em>divine surge</em> spirit powers instead of one, two exotic weapon proficiencies with <em>champion's prowess</em> instead of one, three combat feats with <em>legendary champion</em> instead of two, and three skills with <em>trickster's edge</em> instead of two.</Pair>
</Ability>
<Ability id="arc-medium-relic_channeler-object-reading-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-medium-relic_channeler-object-reading-su">Object Reading (Su)</Pair>
<Pair hl title="Replaces">Haunt channeler</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A relic channeler gains the <Link to="/class/occultist">occultist's</Link> <em>object reading</em> ability, substituting her medium level for her occultist level for this ability.</Pair>
</Ability>
<Ability id="arc-medium-relic_channeler-object-reading-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-medium-relic_channeler-object-reading-su" flavor="Text from the occultist class">Object Reading (Su)</Pair>
<Pair title="Ability">You learn how to read information from items you examine. Examining an item in this way requires you to spend 1 minute handling the item. If the item is a magic item, you learn its properties and command word as if you had successfully examined the item using <Link to="/spell/detect_magic">detect magic</Link> and succeeded at a Spellcraft check. This ability does not reveal whether the item is cursed unless your class level is equal to or greater than the caster level of the item. If the item has any historical significance, you learn one piece of information about its past (as determined by the GM). Finally, if the item was last used no longer than 1 day ago per your class level, you learn one piece of information about the last creature to use the item. This information might be a glimpse of the creature's appearance, a brief vision of what it saw while using the item, or perhaps its emotional state when it last used the item. The GM determines what information is gained in this way. This functions like the <Link to="/skill/psychometry">psychometry occult skill unlock</Link>, but doesn't require a skill check and can be used at will.</Pair>
</Ability>
<Ability id="arc-medium-relic_channeler-apport-relic-su" icon={["magic-swirl"]}>
<Pair single id="arc-medium-relic_channeler-apport-relic-su">Apport Relic (Su)</Pair>
<Pair hl title="Replaces">Location channel</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A relic channeler can call one of her relics to her once per day as though she had cast <Link to="/spell/apport_object">apport object</Link> on it and was mentally completing the spell. Furthermore, if the relic channeler gains the <em>apport object</em> spell, she can use it to receive her relics without casting it on them in advance in the same way. The range at which the relic channeler can apport her relics (both with this ability and the spell) increases by an additional 5 feet for every 2 levels she possesses beyond 5th.</Pair>
</Ability>
<Ability id="arc-medium-relic_channeler-connection-specialty-sp" icon={["stairs-goal"]}>
<Pair single id="arc-medium-relic_channeler-connection-specialty-sp">Connection Specialty (Sp)</Pair>
<Pair hl title="Alters">Connection channel</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A relic channeler gains <em>connection channel</em> and can use that ability as a normal medium, despite not possessing <em>location channel.</em> She requires familiarity to use this ability, even if she is in an appropriate location.</Pair>
</Ability>
</>};
const _rivethun_spirit_channeler = {title: "Rivethun Spirit Channeler", jsx: <><h2 id="arc-medium-rivethun_spirit_channeler-rivethun-spirit-channeler">Rivethun Spirit Channeler</h2>
<p><strong>Sources</strong> <Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook pg. 21</Link><br/><Link to="/rule/rivethun">Rivethun</Link> spirit channelers are mediums who practice the ancient dwarven philosophy of the rivethun, which teaches that power lies in the connection between physical bodies and immaterial souls. Most rivethun spirit channelers are dwarven adherents of this ancient philosophy, but mediums of other races are accepted with equal fervor, for the rivethun teachings state that discord and heterogeneousness are the most surefire way to open one's senses to the spiritual world. Rivethun spirit channelers act as ambassadors and negotiators between the denizens of the natural and supernatural worlds.</p>
<Ability id="arc-medium-rivethun_spirit_channeler-mind-and-soul-ex" icon={["info","broken-shield"]}>
<Pair single id="arc-medium-rivethun_spirit_channeler-mind-and-soul-ex">Mind and Soul (Ex)</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A rivethun spirit channeler chooses whether she uses her Wisdom or Charisma score to determine the effects of her medium class abilities (including this archetype's abilities). This includes (but is not limited to) the minimum ability score needed to learn or cast a medium spell, the save DC of her medium spells, the number of <Link to="/rule/bonus_spells">bonus spells</Link> (if any) she receives for having a high ability score, the number of times per day she can use her medium abilities, and the effects of her spirit's abilities. This choice is made at 1st level, and once made, it can't be changed.</Pair>
<Pair title="Info">Compared to a regular medium, a rivethun spirit channeler knows one fewer spell of each spell level that she can cast.</Pair>
</Ability>
<Ability id="arc-medium-rivethun_spirit_channeler-spiritual-invocation-su" extraClasses="hasSubs" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-medium-rivethun_spirit_channeler-spiritual-invocation-su">Spiritual Invocation (Su)</Pair>
<Pair hl title="Replaces">Spirit bonus, spirit surge</Pair>
<Pair hl title="Alters">Spirit</Pair>
<Pair title="Ability">Rather than channel the legend of a single spirit for 24 hours, a rivethun spirit channeler can invite a nearby local spirit into her body for 24 hours. This functions exactly like the <em>spirit dance</em> ability of the <Link to="/arc-medium/spirit_dancer">spirit dancer</Link> medium archetype, except the rivethun spirit channeler doesn't need to find an appropriate location to channel her spirits since she invites nearby spirits into her body instead of channeling a legend.</Pair>
</Ability>
<Ability id="arc-medium-rivethun_spirit_channeler-text-from-the-spirit-dancer-ability" extraClasses="subAbility" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-medium-rivethun_spirit_channeler-text-from-the-spirit-dancer-ability">Text from the Spirit Dancer ability</Pair>
<Pair title="Ability"><p>Each day during his <em>seance,</em> a spirit dancer makes all his spirit power choices as if he were channeling one spirit of each of the six legends. He can't choose to channel a weaker spirit to reduce his influence from <em>spirit surge.</em> He does not always possess the <em>seance</em> boon, spirit bonus, spirit powers, or <em>spirit surge</em> ability from any of these six spirits.</p>
<p>Instead, he can enter a spirit dance as a <strong className="hl">free action</strong> to gain the aforementioned abilities from one of the six spirits he prepared during his <em>seance</em> for the duration of his spirit dance. He can spirit dance for a total number of rounds per day equal to his Charisma modifier + double his medium level; these rounds don't need to be consecutive.</p>
<p>After his spirit dance ends, the spirit dancer takes a -2 penalty on attack rolls, saving throws, and skill checks for 1 minute and can't enter a spirit dance again during that time. He also can't enter a spirit dance while <Link to="/misc/shaken">shaken</Link>, <Link to="/misc/frightened">frightened</Link>, or <Link to="/misc/panicked">panicked</Link>.</p>
<p>He combines all influence incurred during spirit dances into a single pool. At 3 points of influence or higher, he takes a -2 penalty on initiative checks even when he's not in a spirit dance, and at 5 points of influence or higher, his current spirit takes control as it would for a normal medium (this control is not limited by rounds of spirit dance). A spirit dancer can accept 1 point of influence to recover 4 rounds of spirit dance, up to his normal daily maximum.</p>
<p>A spirit dancer continues to track daily uses of abilities from each of his spirits even while he is not in a spirit dance. A spirit dancer with the <em>supreme spirit power</em> ability can use only one once-per-day ability from the <em>supreme spirit power</em> each day; he can't use any other spirit's once-per-day <em>supreme spirit power</em> until after his next <em>seance.</em></p>
</Pair>
</Ability>
<Ability id="arc-medium-rivethun_spirit_channeler-spiritual-parley-ex" icon={["upgrade"]}>
<Pair single id="arc-medium-rivethun_spirit_channeler-spiritual-parley-ex">Spiritual Parley (Ex)</Pair>
<Pair hl title="Replaces">Taboo</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A rivethun spirit channeler adds 1/2 her medium level to Diplomacy checks attempted against fey, elementals, outsiders (except native outsiders), and undead creatures, as well as on Diplomacy checks attempted as part of the <em>wrangle condition</em> ability (see below).</Pair>
</Ability>
<Ability id="arc-medium-rivethun_spirit_channeler-wrangle-condition-su" extraClasses="hasSubs" icon={["heart-plus"]}>
<Pair single id="arc-medium-rivethun_spirit_channeler-wrangle-condition-su">Wrangle Condition (Su)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A rivethun spirit channeler can interact directly with unwholesome spirits of the ills that trouble her or her allies. This functions like the <Link to="/arc-shaman/animist">animist shaman's</Link> <em>wrangle condition</em> ability.</Pair>
</Ability>
<Ability id="arc-medium-rivethun_spirit_channeler-text-from-the-animist-ability" extraClasses="subAbility" icon={["heart-plus"]}>
<Pair single id="arc-medium-rivethun_spirit_channeler-text-from-the-animist-ability">Text from the Animist ability</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability"><p>The animist interacts directly with unwholesome spirits of the ills that trouble him or his people. To the animist, negative conditions manifest as anthropomorphic spirits or are caused by such spirits (visited upon the creature by bad magic). Either way, the animist can attempt to persuade the spirit to leave its victim alone, thus performing a miraculous healing. As the animist grows in power, he can simply inform these spirits that they are unwelcome and command them to depart.</p>
<p>The animist can attempt a Diplomacy check to persuade the condition's spirit to leave. Conditions the animist can affect are ranked from minor to dire, with each category having an accompanying Diplomacy DC (see below). The animist cannot take 10 or 20 on the check or receive aid from any creature except another shaman. Failure by 5 or less means the condition spirit is willing to leave the target and transfer to the animist for the rest of the duration or until cured; this happens only if the animist is willing. Failure by 10 or more means that not only is the target inflicted with the condition, but the animist is as well (whether or not he is willing) for the remaining duration or until cured.</p>
<ul>
<li><strong>Minor Conditions (DC 15):</strong> Fatigued, shaken, and sickened.</li>
<li><strong>Major Conditions (DC 20):</strong> Dazed and staggered.</li>
<li><strong>Severe Conditions (DC 25):</strong> Exhausted, frightened, and nauseated.</li>
<li><strong>Dire Conditions (DC 30):</strong> Blinded, deafened, paralyzed, and stunned.</li>
</ul>
<p>The animist can use this ability a number of times per day equal to half his shaman level + his Wisdom modifier. Using this ability is a <strong className="hl">standard action</strong> that requires no contact or shared language with the target, but it relies on audible components and the target must be within 30 feet. If a target is afflicted with multiple conditions, the animist targets one condition at a time (of her choosing). The animist cannot use this ability on himself.</p>
</Pair>
<Pair title="At 5th Level">The animist can use this ability to exorcise minor conditions without needing to attempt a Diplomacy check.</Pair>
<Pair title="At 9th Level">He can dispatch major conditions without a roll.</Pair>
<Pair title="At 13th Level">He can remove severe conditions without rolling.</Pair>
<Pair title="At 17th Level">He can dispatch dire conditions automatically.</Pair>
<Pair title="Special">Even if he doesn't need to roll, removing a condition still requires one use of this ability per condition.</Pair>
</Ability>
<Ability id="arc-medium-rivethun_spirit_channeler-haunt-channeler" icon={["broken-shield"]}>
<Pair single id="arc-medium-rivethun_spirit_channeler-haunt-channeler">Haunt Channeler</Pair>
<Pair hl title="Replaces">Connection channel</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A rivethun spirit channeler receives this ability at 7th level instead of at 3rd level.</Pair>
</Ability>
</>};
const _spirit_dancer = {title: "Spirit Dancer", jsx: <><h2 id="arc-medium-spirit_dancer-spirit-dancer">Spirit Dancer</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 94</Link><br/>A spirit dancer enacts an exuberant dance to the spirits, accepting many roles in the shifting dance and changing dance partners quickly.</p>
<Ability id="arc-medium-spirit_dancer-spirit-dance-su" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-medium-spirit_dancer-spirit-dance-su">Spirit Dance (Su)</Pair>
<Pair hl title="Replaces">Spirit bonus, spirit surge</Pair>
<Pair hl title="Alters">Spirit</Pair>
<Pair title="Ability"><p>Each day during his <em>seance,</em> a spirit dancer makes all his spirit power choices as if he were channeling one spirit of each of the six legends. He can't choose to channel a weaker spirit to reduce his influence from <em>spirit surge.</em> He does not always possess the <em>seance</em> boon, spirit bonus, spirit powers, or <em>spirit surge</em> ability from any of these six spirits.</p>
<p>Instead, he can enter a spirit dance as a <strong className="hl">free action</strong> to gain the aforementioned abilities from one of the six spirits he prepared during his <em>seance</em> for the duration of his spirit dance. He can spirit dance for a total number of rounds per day equal to his Charisma modifier + double his medium level; these rounds don't need to be consecutive.</p>
<p>After his spirit dance ends, the spirit dancer takes a -2 penalty on attack rolls, saving throws, and skill checks for 1 minute and can't enter a spirit dance again during that time. He also can't enter a spirit dance while <Link to="/misc/shaken">shaken</Link>, <Link to="/misc/frightened">frightened</Link>, or <Link to="/misc/panicked">panicked</Link>.</p>
<p>He combines all influence incurred during spirit dances into a single pool. At 3 points of influence or higher, he takes a -2 penalty on initiative checks even when he's not in a spirit dance, and at 5 points of influence or higher, his current spirit takes control as it would for a normal medium (this control is not limited by rounds of spirit dance). A spirit dancer can accept 1 point of influence to recover 4 rounds of spirit dance, up to his normal daily maximum.</p>
<p>A spirit dancer continues to track daily uses of abilities from each of his spirits even while he is not in a spirit dance. A spirit dancer with the <em>supreme spirit power</em> ability can use only one once-per-day ability from the <em>supreme spirit power</em> each day; he can't use any other spirit's once-per-day <em>supreme spirit power</em> until after his next <em>seance.</em></p>
</Pair>
</Ability>
<Ability id="arc-medium-spirit_dancer-nothing-is-taboo-ex" icon={["broken-shield"]}>
<Pair single id="arc-medium-spirit_dancer-nothing-is-taboo-ex">Nothing Is Taboo (Ex)</Pair>
<Pair title="Ability">A spirit dancer doesn't gain the <em>taboo</em> class feature.</Pair>
</Ability>
<Ability id="arc-medium-spirit_dancer-spirit-aura-su" icon={["abstract-091","upgrade"]}>
<Pair single id="arc-medium-spirit_dancer-spirit-aura-su">Spirit Aura (Su)</Pair>
<Pair hl title="Replaces">Shared seance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A spirit dancer's weaving forms create an aura that grants his current <em>seance</em> boon to all allies within 30 feet.</Pair>
<Pair title="Special">When he grants a <em>seance</em> boon that requires a decision, each ally makes the appropriate decision the first time that ally receives that spirit's aura each day. That decision remains in effect if the ally is affected by that spirit's aura again later that day.</Pair>
</Ability>
<Ability id="arc-medium-spirit_dancer-spirit-troika-su" icon={["upgrade"]}>
<Pair single id="arc-medium-spirit_dancer-spirit-troika-su">Spirit Troika (Su)</Pair>
<Pair hl title="Replaces">Trance of three</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A spirit dancer learns to dance with two partners. When using <em>spirit dance,</em> he can choose to spend 3 rounds of spirit dance each round to gain access to the abilities of any two of the six spirits he prepared during his <em>seance</em> for 1 round.</Pair>
</Ability>
<Ability id="arc-medium-spirit_dancer-attacca-su" icon={["upgrade"]}>
<Pair single id="arc-medium-spirit_dancer-attacca-su">Attacca (Su)</Pair>
<Pair hl title="Replaces">Spacious soul</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Ability">A spirit dancer learns how to shift rapidly into the next movement of his dance. He no longer takes a penalty after his <em>spirit dance</em> ends and can enter another <em>spirit dance</em> immediately.</Pair>
</Ability>
<Ability id="arc-medium-spirit_dancer-dance-of-infinite-forms-su" icon={["upgrade"]}>
<Pair single id="arc-medium-spirit_dancer-dance-of-infinite-forms-su">Dance of Infinite Forms (Su)</Pair>
<Pair hl title="Replaces">Astral beacon</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A spirit dancer has perfected his dance. He can now use each of his <em>supreme spirit powers'</em> once-per-day abilities one time each day, instead of just one ability. He can use his <em>spirit troika</em> by spending 2 rounds of <em>spirit dance</em> instead of 3. Finally, he can enter a <em>spirit dance</em> with all six of his prepared spirits at once by spending 4 rounds of <em>spirit dance</em> each round.</Pair>
</Ability>
</>};
const _spirit_eater = {title: "Spirit Eater", jsx: <><h2 id="arc-medium-spirit_eater-spirit-eater">Spirit Eater</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 24</Link><br/>Shenmen is a ghost-haunted nation trapped in the shadow of the Gossamer Mountains and held beneath the yoke of jorogumo witches. The mediums of Shenmen face brazen yokai that hunger for the living, and these mediums have learned to devour them instead. Guardians of their communities, spirit eaters absorb the dead to channel their power and serve as a line of defense against all manner of incorporeal yokai.</p>
<Ability id="arc-medium-spirit_eater-ectoplasmic-strikes-su" icon={["upgrade"]}>
<Pair single id="arc-medium-spirit_eater-ectoplasmic-strikes-su">Ectoplasmic Strikes (Su)</Pair>
<Pair hl title="Replaces">Haunt channeler</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A spirit eater medium treats his attacks as if they had the <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon property.</Pair>
</Ability>
<Ability id="arc-medium-spirit_eater-consume-spirit-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-medium-spirit_eater-consume-spirit-su">Consume Spirit (Su)</Pair>
<Pair hl title="Replaces">Location channel, connection channel</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability"><p>A spirit eater can attempt to consume an incorporeal creature and house it within his body. If he reduces an incorporeal creature to 0 hit points or fewer, he can instead leave the creature at 1 hit point and consume the creature as an <strong className="hl">immediate action</strong>. A consumed creature is contained in the spirit eater's body and grants him a +1 bonus on either attack rolls, saving throws, or skill checks, chosen by the spirit eater, and a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to the consumed creature's Hit Dice.</p>
<p>A spirit eater's body can hold a number of creatures equal to his spirit bonus. If he attempts to consume another creature after this point, he releases the creature that has been contained in his body longest. He can release a consumed creature as a <strong className="hl">free action</strong>. A consumed creature attempts to escape after 24 hours. The spirit eater can attempt to keep a consumed creature in his body by attempting a Will save (DC = 10 + half the spirit eater's level + twice the number of the creatures he has contained in his body). If he succeeds, the consumed creatures remain, but they grant the spirit eater's channeled spirit 1 point of influence over him. A released creature is destroyed as if it were reduced to 0 hit points and can reconstitute again later, if able.</p>
</Pair>
</Ability>
</>};
const _storm_dreamer = {title: "Storm Dreamer", jsx: <><h2 id="arc-medium-storm_dreamer-storm-dreamer">Storm Dreamer</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 182</Link><br/>Storm dreamers serve the <Link to="/rule/storm_kindlers">Storm Kindlers</Link> by communing with their mystical predecessors. They serve as spiritual advisors for the organization, and are valued for the lore and wisdom they gain during their trances. During such a trance, a single storm dreamer can easily protect and defend a temple - or at the very least, provide suitably threatening defensive displays.</p>
<p>Mediums who become storm dreamers select their spirits normally, but the spirits with which they bond are supernatural remnants of the first Storm Kindlers - those reckless explorers who established the tradition but succumbed to their own arrogance and were consumed by the Eye of Abendego.</p>
<p>Some storm dreamers, though, become incapable of retaining their own personality and values, and transform into unpredictable forces of nature. Storm dreamers refer to this condition as being "stormcursed" and view these lost brothers and sisters with a mix of pity and horror. The stormcursed do not maintain ties with the Storm Kindlers, and in many cases their departure from the organization is violent and destructive. They are not viewed as heretics of <Link to="/faith/gozreh">Gozreh</Link> by the Storm Kindlers, but neither are they sought after as allies. They are typically treated as dangerous and unpredictable agents of the storm and allowed to dwell in relative peace in the remote locations where the stormcursed dreamers choose to dwell in. The exact cause of this condition is hotly debated among the storm dreamers themselves, for it seems to afflict their members almost randomly. Some believe these storm dreamers brushed too close to the "slumbering mind" of the Eye of Abendego, while others theorize that the mediums' souls simply got pulled away and replaced with some of the half-mad fragments the dreamers speak to in trance. The truth, whatever it is, may never be fully understood.</p>
<Ability id="arc-medium-storm_dreamer-gozrehs-domain-su" icon={["stairs-goal","spell-book"]}>
<Pair single id="arc-medium-storm_dreamer-gozrehs-domain-su">Gozreh's Domain (Su)</Pair>
<Pair hl title="Replaces">Spirit surge</Pair>
<Pair title="Ability">All storm dreamers are deeply religious and select one of the domains granted by Gozreh: <Link to="/domain/air">Air</Link>, <Link to="/domain/animal">Animal</Link>, <Link to="/domain/plant">Plant</Link>, <Link to="/domain/water">Water</Link>, or <Link to="/domain/weather">Weather</Link>. The storm dreamer gains the 1st-level granted power from her chosen domain, but never gains the second power at higher level. When determining the effect of the granted power, the storm dreamer's effective cleric level is equal to her storm dreamer level.</Pair>
<Pair title="Special">The 1st- through 6th-level bonus spells from this domain are added to her spell list. Despite her faith, these spells are cast normally, as psychic spells, by the medium.</Pair>
</Ability>
<Ability id="arc-medium-storm_dreamer-storm-trance-su" icon={["armor-upgrade"]}>
<Pair single id="arc-medium-storm_dreamer-storm-trance-su">Storm Trance (Su)</Pair>
<Pair hl title="Replaces">Haunt channeler</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A storm dreamer can enter a meditative trance during which she fuses her mind to the Eye of Abendego, mentally becoming one with the great storm. Entering the <em>trance</em> is a <strong className="hl">full-round action</strong> that doesn't provoke attacks of opportunity, but once in a <em>storm trance,</em> the storm dreamer can maintain the <em>trance</em> as a <strong className="hl">free action</strong> for a number of minutes per day equal to her storm dreamer class level + her Charisma modifier. These minutes need not be consecutive, but they must be spent in 1-minute increments.</Pair>
<Pair title="Special">While in a <em>storm trance,</em> the storm dreamer gains energy <Link to="/umr/resistance">resistance</Link> 5 against cold and electricity, treats <Link to="/rule/wind">wind</Link> as one step less severe, and gains a bonus equal to her Charisma modifier on all saving throws against wind effects, spells with the air or electricity descriptors, and effects that deal electricity damage.</Pair>
</Ability>
<Ability id="arc-medium-storm_dreamer-dream-storm-sp" icon={["magic-swirl"]}>
<Pair single id="arc-medium-storm_dreamer-dream-storm-sp">Dream Storm (Sp)</Pair>
<Pair hl title="Replaces">Location channel</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A storm dreamer's thoughts can cause magical weather effects to manifest. While in a <em>storm trance,</em> she can cast <Link to="/spell/call_lightning">call lightning</Link>, <Link to="/spell/sleet_storm">sleet storm</Link>, and <Link to="/spell/wind_wall">wind wall</Link> as spell-like abilities (CL = her character level). Each time she casts one of these spell-like abilities, she reduces the number of remaining minutes for her <em>storm trance</em> by 1 minute; she can't use these spell-like abilities if she has less than 1 minute remaining for the day to use her <em>storm trance.</em></Pair>
</Ability>
<Ability id="arc-medium-storm_dreamer-storm-seer-su" icon={["stairs-goal"]}>
<Pair single id="arc-medium-storm_dreamer-storm-seer-su">Storm Seer (Su)</Pair>
<Pair hl title="Replaces">Connection channel</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A storm dreamer gains a supernatural link to the weather and can sense her surroundings more clearly. While in her <em>storm trance,</em> she gains <Link to="/umr/blindsense">blindsense</Link> 10 feet and cannot be <Link to="/rule/flanked">flanked</Link>. If the weather conditions are stormy, these senses become <Link to="/umr/blindsight">blindsight</Link> with a range of 30 feet.</Pair>
</Ability>
</>};
const _storyteller = {title: "Storyteller", jsx: <><h2 id="arc-medium-storyteller-storyteller">Storyteller</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 95</Link><br/>While all mediums connect to legendary spirits, storyteller mediums take their obsession with legends to the extreme, suffusing their lives with epic tales at the cost of some of their spiritual power.</p>
<Ability id="arc-medium-storyteller-diminished-spirits-ex" icon={["broken-shield"]}>
<Pair single id="arc-medium-storyteller-diminished-spirits-ex">Diminished Spirits (Ex)</Pair>
<Pair hl title="Alters">Spirit</Pair>
<Pair title="Info">A storyteller does not receive his spirit's <em>seance</em> boon. He can't choose to channel a weaker spirit to reduce his influence from <em>spirit surge.</em> Because of his obsession with legends, he begins with 2 points of influence after a <em>seance</em> rather than 1.</Pair>
</Ability>
<Ability id="arc-medium-storyteller-knowledge-of-tales-ex" icon={["upgrade"]}>
<Pair single id="arc-medium-storyteller-knowledge-of-tales-ex">Knowledge of Tales (Ex)</Pair>
<Pair hl title="Replaces">Spirit bonus</Pair>
<Pair title="Passive Ability">A storyteller gains a bonus on all Knowledge skill checks with Knowledge skills in which he's trained. This bonus is equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of his medium level.</Pair>
</Ability>
<Ability id="arc-medium-storyteller-versatile-surge-su" icon={["stairs-goal"]}>
<Pair single id="arc-medium-storyteller-versatile-surge-su">Versatile Surge (Su)</Pair>
<Pair hl title="Alters">Spirit surge</Pair>
<Pair title="Ability">A storyteller's <em>spirit surge</em> can be used after the storyteller fails any ability check, skill check, or saving throw.</Pair>
</Ability>
<Ability id="arc-medium-storyteller-storytellers-performance-su" icon={["stairs-goal"]}>
<Pair single id="arc-medium-storyteller-storytellers-performance-su">Storyteller's Performance (Su)</Pair>
<Pair hl title="Replaces">Shared seance, taboo, haunt channeler, propitiation, trance of three</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A storyteller gains the ability to recall snippets of tales that are relevant to the current situation. This ability is similar in all respects to <Link to="/ability/bardic_performance">bardic performance</Link> as used by a bard of the storyteller's medium level (including interactions with feats, spells, and other abilities), and uses Perform (act), Perform (comedy), or Perform (oratory) as the storyteller's performance skill. However, a storyteller gains only the following types of bardic performance: <Link to="/performance/inspire_courage">inspire courage</Link> (2nd level), <Link to="/performance/inspire_competence">inspire competence</Link> (3rd level), <Link to="/performance/inspire_greatness">inspire greatness</Link> (9th level), and <Link to="/performance/inspire_heroics">inspire heroics</Link> (15th level).</Pair>
</Ability>
<Ability id="arc-medium-storyteller-learn-the-story-sp" icon={["magic-swirl"]}>
<Pair single id="arc-medium-storyteller-learn-the-story-sp">Learn the Story (Sp)</Pair>
<Pair hl title="Replaces">Connection channel, spirit mastery</Pair>
<Pair title="At 7th Level">A storyteller becomes a master at learning a place's tales. He can perform for a full minute, spending 10 rounds of <em>storyteller's performance,</em> to gain the effects of <Link to="/spell/retrocognition">retrocognition</Link>.</Pair>
<Pair title="At 10th Level">He can spend 1d4 &times; 10 minutes and 10 rounds of <em>storyteller's performance</em> to gain the effects of <Link to="/spell/legend_lore">legend lore</Link>. The subject must be at hand for the *legend lore *to function.</Pair>
<Pair title="At 19th Level">The storyteller can spend a <strong className="hl">standard action</strong> and 1 round of <em>storyteller's performance</em> to gain the effects of <Link to="/spell/vision">vision</Link> on any subject.</Pair>
</Ability>
<Ability id="arc-medium-storyteller-living-story-sp" icon={["magic-swirl"]}>
<Pair single id="arc-medium-storyteller-living-story-sp">Living Story (Sp)</Pair>
<Pair hl title="Replaces">Astral beacon</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A storyteller gains the ability to sweep others away into a story of his own making. He must perform for 1 full round, telling a tale to set the snare for his <em>living story</em> and spending 1 round of his <em>storyteller's performance.</em> At the end of that round, he can affect up to 30 Hit Dice of listeners within range with <Link to="/spell/microcosm">microcosm</Link>. Unlike with a normal <em>microcosm,</em> this is also a sonic and language-dependent ability, and a creature with 16 or more Hit Dice that succeeds at its save is immune to the storyteller's <em>living story</em> ability for 24 hours.</Pair>
</Ability>
</>};
const _uda_wendo = {title: "Uda Wendo", jsx: <><h2 id="arc-medium-uda_wendo-uda-wendo">Uda Wendo</h2>
<p><strong>Sources</strong> <Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook pg. 23</Link><br/>Primarily found among the various tribes of the Mwangi Expanse, uda wendo are powerful mediums who are sensitive to the presence and desires of the wendo, powerful and mysterious entities that walk Golarion while shaping fate and guiding destiny. Rather than simply communing with the wendo like some oracles do, an uda wendo invites the wendo to use his body as a vessel, gaining fantastic powers even while struggling to maintain control of his body against the crushing might of the wendo's presence.</p>
<Ability icon={["skills"]} id="arc-medium-uda_wendo-undefined">
<Pair id="arc-medium-uda_wendo-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT)</Pair>
<Pair title="Removed Skills">Perform</Pair></Ability>
<Ability id="arc-medium-uda_wendo-wendo-su" icon={["stairs-goal","spell-book","broken-shield","hazard-sign"]}>
<Pair single id="arc-medium-uda_wendo-wendo-su">Wendo (Su)</Pair>
<Pair hl title="Alters">Spirit</Pair>
<Pair title="Ability"><p>Rather than channeling spirits, an uda wendo channels the <Link to="/faith/wendo">wendo</Link>, otherworldly entities that walk among mortals. This functions like channeling a spirit, except instead of requiring a favored location to channel a wendo, an uda wendo must offer the wendo a sacrifice worth at least 50 gp per Hit Die the uda wendo has. Alternatively, the uda wendo can instead accept 1 point of burn, as per the <Link to="/class/kineticist">kineticist</Link> class ability, instead of sacrificing material wealth.</p>
<p>While channeling a wendo, the uda wendo gains the 1st-level domain power of one <Link to="/ability/druid_domains">druid animal or terrain domain</Link>, or the 1st-level domain power of one of the following cleric domains: <Link to="/domain/air">Air</Link>, <Link to="/domain/animal">Animal</Link>, <Link to="/domain/community">Community</Link>, <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/death">Death</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/rune">Rune</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/sun">Sun</Link>, <Link to="/domain/trickery">Trickery</Link>, <Link to="/domain/war">War</Link>, <Link to="/domain/water">Water</Link>, or <Link to="/domain/weather">Weather</Link>. The uda wendo has an effective cleric or druid level equal to 1/2 his medium level (minimum 1st) for the purpose of this ability. In addition, he adds all spells from his chosen domain that are of a spell level he can cast (including modifications to the uda wendo's spellcasting from the <em>archmage arcana</em> or <em>divine surge</em> lesser spirit powers) to his medium spell list and medium spells known as medium spells of their domain spell level.</p>
</Pair>
<Pair title="Special">An uda wendo cannot invite allies to a <em>seance</em> to summon a wendo, and by channeling a wendo, the uda wendo allows the entity to gain 2 points of influence over him. If any sentient creature that doesn't practice juju witnesses the uda wendo's <em>seance,</em> both creatures become permanently cursed with a -2 penalty on all d20 rolls and checks (as per <Link to="/spell/bestow_curse">bestow curse</Link>) and the attempt fails.</Pair>
</Ability>
<Ability id="arc-medium-uda_wendo-wendos-secrets-ex" icon={["upgrade"]}>
<Pair single id="arc-medium-uda_wendo-wendos-secrets-ex">Wendo's Secrets (Ex)</Pair>
<Pair hl title="Replaces">Shared seance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An uda wendo learns most of his information through tales and secrets whispered to him by the wendo. He adds his Charisma bonus (if any) to all Knowledge checks that he attempts in addition to his Intelligence modifier.</Pair>
</Ability>
<Ability id="arc-medium-uda_wendo-wendo-tongue-su" icon={["stairs-goal"]}>
<Pair single id="arc-medium-uda_wendo-wendo-tongue-su">Wendo Tongue (Su)</Pair>
<Pair hl title="Replaces">Haunt channeler, location channel, connection channel</Pair>
<Pair title="At 3rd Level">An uda wendo can invoke the wendo to commune with nearby spirits. The uda wendo can use this ability to speak with corpses (as per <Link to="/spell/speak_with_dead">speak with dead</Link>).</Pair>
<Pair title="At 5th Level">The uda wendo can speak with animals and plants (as per <Link to="/spell/speak_with_animals">speak with animals</Link> or <Link to="/spell/speak_with_plants">speak with plants</Link>).</Pair>
<Pair title="At 7th Level">The uda wendo can speak with humanoids (as per <Link to="/spell/tongues">tongues</Link>).</Pair>
<Pair title="Usage">1 minute/day per medium level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
</Ability>
</>};
const _vessel_of_the_failed = {title: "Vessel of the Failed", jsx: <><h2 id="arc-medium-vessel_of_the_failed-vessel-of-the-failed">Vessel of the Failed</h2>
<p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 7</Link><br/>A vessel of the failed channels the spirits of those who attempted the Test of the Starstone but failed; these spirits grant the medium abilities wrought from the spirits' ultimate shortcomings. A vessel of the failed intimately understands the shaky line between success and failure and embraces walking that line to gain power from the spirits he calls.</p>
<Ability id="arc-medium-vessel_of_the_failed-will-of-the-failed-su" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-medium-vessel_of_the_failed-will-of-the-failed-su">Will of the Failed (Su)</Pair>
<Pair hl title="Alters">Spirit, spirit mastery</Pair>
<Pair title="Ability"><p>A vessel of the failed is intimately familiar with the supernatural stubbornness of the brash heroes who have met their demise pursuing the Test of the Starstone, and he can tap into this strength when he needs it the most.</p>
<p>When a spirit attains 5 or more points of influence over the vessel of the failed, the vessel can attempt a Will saving throw (DC = 15 + half the vessel's class level) to avoid completely losing control to the spirit. The first time in a single 24-hour <em>seance</em> period that the vessel succeeds at this saving throw, he is <Link to="/misc/deafened">deafened</Link> until he awakens the next day with the spirit gone. The second time the vessel succeeds at this saving throw during that period, he is also <Link to="/misc/blinded">blinded</Link>. The third time, he is also <Link to="/misc/staggered">staggered</Link>. These conditions are unavoidable and cannot be removed through magic or any other method. (If he wishes, the vessel of the failed can choose to forgo this saving throw and lose control to the spirit as normal.)</p>
<p>The fourth time in a single <em>seance</em> period that a spirit gains 5 or more influence points over the vessel of the failed, the vessel must succeed at a Will save or he loses control to the spirit and effectively becomes an NPC under the GM's control until after he awakens the next day with the spirit gone.</p>
<p>If a spirit ever attains 7 or more points of influence over the vessel, the vessel automatically loses control to the spirit and effectively becomes an NPC under the GM's control until after he awakens the next day with the spirit gone.</p>
</Pair>
<Pair title="Special">A vessel of the failed cannot channel a weaker spirit.</Pair>
</Ability>
<Ability id="arc-medium-vessel_of_the_failed-reckless-surge-su" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-medium-vessel_of_the_failed-reckless-surge-su">Reckless Surge (Su)</Pair>
<Pair hl title="Alters">Spirit surge</Pair>
<Pair title="Ability">A vessel of the failed can attempt to tap into his spirit's bravado - though harnessing such moxie is never guaranteed. If the vessel allows his spirit to gain 2 additional points of influence over him after failing a d20 roll that was modified by his spirit bonus, there is a 75% chance (1-75 on a d%) that he can add 3d6 to the check's result without taking an action. (At 10th level, these dice increase to 3d8, and at 20th level, they increase to 3d10.) However, there is a 25% chance (76-100 on a d%) that the vessel instead gains no bonus from this ability. The vessel of the failed must allow his spirit to gain the 2 points of influence over him before determining whether he receives any bonus.</Pair>
<Pair title="At 10th Level">Instead of 3d6, the medium can add 3d8.</Pair>
<Pair title="At 20th Level">Instead of 3d8, the medium can add 3d10.</Pair>
<Pair title="Special">The vessel of the failed can use the <em>spirit surge</em> ability as normal. However, using <em>reckless surge</em> in the way described above always requires the vessel to allow his spirit to gain 2 additional points of influence over him, regardless of abilities that allow him to otherwise use <em>spirit surge</em> without incurring influence (such as <em>taboo</em> or <em>spirit mastery</em>).</Pair>
</Ability>
<Ability id="arc-medium-vessel_of_the_failed-heroic-exceptions-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-medium-vessel_of_the_failed-heroic-exceptions-ex">Heroic Exceptions (Ex)</Pair>
<Pair hl title="Alters">Taboo</Pair>
<Pair title="Ability">Each time a vessel of the failed breaks a <em>taboo</em> he has accepted, he can allow his spirit to gain 1 additional point of influence over him. When he does so, the penalty he takes on attack rolls, damage rolls, ability checks, skill checks, and saving throws changes from -2 to -1. This influence is in addition to the influence the spirit normally gains for breaking the <em>taboo</em> in the first place.</Pair>
<Pair title="Special">If the vessel continues violating the <em>taboo</em> while taking a reduced penalty, the duration of the reduced penalty extends, but the spirit doesn't gain additional influence over the vessel.</Pair>
</Ability>
<Ability id="arc-medium-vessel_of_the_failed-spiritual-swan-song-sp" icon={["magic-swirl"]}>
<Pair single id="arc-medium-vessel_of_the_failed-spiritual-swan-song-sp" flavor="When the circumstances are right, the vessel of the failed can become a conduit for his spirit's brush with divinity.">Spiritual Swan Song (Sp)</Pair>
<Pair hl title="Replaces">Trance of three</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability"><p>Whenever the vessel makes a successful saving throw via the <em>will of the failed</em> ability to avoid completely losing control to his spirit, the vessel gains one use of a spell-like ability tied to the spirit's legend, as noted below.</p>
<p>When he gains a use of a spell-like ability, the vessel of the failed can expend it anytime before his next <em>seance.</em> (A vessel might gain multiple uses of these spell-like abilities, depending on how many times he successfully saves to avoid losing control to a spirit.) However, if he loses contact with a spirit during that time, he also loses all uses of the spell-like ability gained from avoiding losing control to that spirit. If the vessel does not expend his uses of these abilities, they disappear when he loses contact with that spirit or when he starts a new <em>seance,</em> whichever comes first.</p>
</Pair>
</Ability>
<Ability id="arc-medium-vessel_of_the_failed-archmage" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-medium-vessel_of_the_failed-archmage">Archmage</Pair>
<Pair title="Ability">The vessel of the failed can cast <Link to="/spell/chain_lightning">chain lightning</Link>, <Link to="/spell/freezing_sphere">freezing sphere</Link>, or <Link to="/spell/sirocco">sirocco</Link> as a spell-like ability. The vessel must choose which one when he gains a use of this ability. If he gains multiple uses of this ability in a single <em>seance</em> period, the vessel of the failed can make a different choice each time.</Pair>
</Ability>
<Ability id="arc-medium-vessel_of_the_failed-champion" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-medium-vessel_of_the_failed-champion">Champion</Pair>
<Pair title="Ability">The vessel of the failed can cast <Link to="/spell/blade_barrier">blade barrier</Link> as a spell-like ability.</Pair>
</Ability>
<Ability id="arc-medium-vessel_of_the_failed-guardian" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-medium-vessel_of_the_failed-guardian">Guardian</Pair>
<Pair title="Ability">The vessel of the failed can cast <Link to="/spell/antimagic_field">antimagic field</Link> as a spell-like ability.</Pair>
</Ability>
<Ability id="arc-medium-vessel_of_the_failed-hierophant" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-medium-vessel_of_the_failed-hierophant">Hierophant</Pair>
<Pair title="Ability">The vessel of the failed can cast <Link to="/spell/mass_cure_moderate_wounds">mass cure moderate wounds</Link> or <Link to="/spell/mass_inflict_moderate_wounds">mass inflict moderate wounds</Link> as a spell-like ability. The vessel must choose which of these two he can use when he gains a use of this ability. If the vessel of the failed gains multiple uses of this ability in a single <em>seance</em> period, he can choose a difference spell-like ability each time.</Pair>
</Ability>
<Ability id="arc-medium-vessel_of_the_failed-marshal" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-medium-vessel_of_the_failed-marshal">Marshal</Pair>
<Pair title="Ability">The vessel of the failed can cast <Link to="/spell/greater_heroism">greater heroism</Link> as a spell-like ability.</Pair>
</Ability>
<Ability id="arc-medium-vessel_of_the_failed-trickster" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-medium-vessel_of_the_failed-trickster">Trickster</Pair>
<Pair title="Ability">The vessel of the failed can cast <Link to="/spell/true_seeing">true seeing</Link> as a spell-like ability.</Pair>
</Ability>
</>};
const _voice_of_the_void = {title: "Voice of the Void", jsx: <><h2 id="arc-medium-voice_of_the_void-voice-of-the-void">Voice of the Void</h2>
<p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex pg. 212</Link><br/>Some mediums delve deeply into the spirit world and make contact with entities that exist outside the boundaries of the sane multiverse. Ageless and forever waiting, these beings offer immense power, but the risks are also great.</p>
<Ability id="arc-medium-voice_of_the_void-emissary-su" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-medium-voice_of_the_void-emissary-su">Emissary (Su)</Pair>
<Pair hl title="Alters">Spirit</Pair>
<Pair title="Ability">A voice of the void channels entities called emissaries, which emulate the six legends but possess a different kind of inscrutable, alien power. They originate in a place that no mortal mind can comprehend, and their power merely passes through the astral realm to reach the medium. For each point of influence an emissary gains over a medium, the medium takes a -1 penalty on Will saves, Wisdom checks, and Wisdom-based skill checks, in addition to the other penalties imposed by the emissary's influence. If an emissary gains enough influence to take control of him, when the medium awakens, in addition to performing the bidding of the alien entity, he retains faint memories of horrible things in dark places and takes 2d4 points of <Link to="/rule/wisdom_damage">Wisdom damage</Link>.</Pair>
</Ability>
<Ability id="arc-medium-voice_of_the_void-surge-of-the-void-su" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-medium-voice_of_the_void-surge-of-the-void-su">Surge of the Void (Su)</Pair>
<Pair hl title="Alters">Spirit surge</Pair>
<Pair title="Ability">The voice of the void can use <em>spirit surge</em> additional times per day without incurring influence, but each time he does, he is <Link to="/misc/confused">confused</Link> for 1 round. If this confusion would cause him to babble, he can instead act normally, but his emissary gains 1 point of influence over him. The voice of the void can't use this ability if he is immune to confusion, but he can remove the confused condition when he is affected by it.</Pair>
<Pair title="Special">This temporary confusion clearly indicates the voice of the void isn't fully in control, so if he uses this power on a Diplomacy check in a negotiation, for example, it might prejudice the other party against him regardless of his check result.</Pair>
</Ability>
<Ability id="arc-medium-voice_of_the_void-blasphemy-ex" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-medium-voice_of_the_void-blasphemy-ex">Blasphemy (Ex)</Pair>
<Pair hl title="Alters">Taboo</Pair>
<Pair title="Ability">Emissaries demand that a medium perform acts appealing to their alien whims. These work just like <em>taboos</em> for an ordinary medium, but in addition to the base <em>taboo,</em> they require bizarre and alien acts that distance the voice of the void from his own humanity. These blasphemies cause the medium to take a -1 penalty on Charisma checks and Charisma-based skill checks whenever he accepts a <em>taboo.</em> The increased devotion required to maintain a <em>blasphemy</em> reaps a greater reward, however. If the voice of the void is under a <em>blasphemy,</em> the die for his <em>spirit surge</em> changes from 1d6 to 1d8.</Pair>
<Pair title="At 10th Level">The <em>surge</em> die becomes 1d10.</Pair>
<Pair title="At 20th Level">The <em>surge</em> die becomes 1d12.</Pair>
</Ability>
<Ability id="arc-medium-voice_of_the_void-void-channeler-su" icon={["abstract-091"]}>
<Pair single id="arc-medium-voice_of_the_void-void-channeler-su" flavor="The voice of the void can funnel energy from the emissaries' realm through himself.">Void Channeler (Su)</Pair>
<Pair hl title="Replaces">Haunt channeler</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
<Pair title="Ability">The medium can unleash a <Link to="/misc/burst">burst</Link> of energy that damages all other creatures except aberrations within 30 feet of him. The burst deals 1d6 points of damage. Creatures receive a Will save to halve the damage (DC = 10 + 1/2 the medium's level + the medium's Charisma modifier). Creatures with fewer HD than half the medium's level who fail the Will save are also confused for 1d4 rounds.</Pair>
<Pair title="At 5th Level">The damage becomes 2d6.</Pair>
<Pair title="At 7th Level">The damage increases to 3d6.</Pair>
<Pair title="At 9th Level">The damage becomes 4d6.</Pair>
<Pair title="At 11th Level">The damage increases to 5d6.</Pair>
<Pair title="At 13th Level">The damage becomes 6d6.</Pair>
<Pair title="At 15th Level">The damage increases to 7d6.</Pair>
<Pair title="At 17th Level">The damage becomes 8d6.</Pair>
<Pair title="At 19th Level">The damage increases to 9d6.</Pair>
</Ability>
</>};
export default {fiend_keeper:_fiend_keeper,kami_medium:_kami_medium,medium_of_the_master:_medium_of_the_master,nexian_channeler:_nexian_channeler,outer_channeler:_outer_channeler,reanimated_medium:_reanimated_medium,relic_channeler:_relic_channeler,rivethun_spirit_channeler:_rivethun_spirit_channeler,spirit_dancer:_spirit_dancer,spirit_eater:_spirit_eater,storm_dreamer:_storm_dreamer,storyteller:_storyteller,uda_wendo:_uda_wendo,vessel_of_the_failed:_vessel_of_the_failed,voice_of_the_void:_voice_of_the_void}