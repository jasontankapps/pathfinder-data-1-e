import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import ByLevelPop from '../../components/ByLevelPop';
const _bloodline_familiars = {title: "Bloodline Familiars", jsx: <><h2 id="arc-sorcerer-bloodline_familiars-bloodline-familiars">Bloodline Familiars</h2>
<p><strong>Sources</strong> <Link to="/source/familiar_folio">Familiar Folio pg. 16</Link><br/>Those with an inherent connection to magic often attract creatures who feel a similar instinctive pull toward magical forces. At 1st level, a sorcerer, bloodrager, or any other character with one of the following bloodlines can choose to gain a bloodline familiar.</p>
<Ability id="arc-sorcerer-bloodline_familiars-familiar" extraClasses="hasSubs" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-sorcerer-bloodline_familiars-familiar">Familiar</Pair>
<Pair hl title="Replaces">1st-level bloodline power</Pair>
<Pair title="At 1st Level">The character gains a <Link to="/sidekick/familiar">familiar</Link> (as a wizard's <Link to="/ability/familiar">familiar</Link>), treating her class level as her wizard level for the purposes of this ability. This familiar has an additional ability listed below based on the master's bloodline.</Pair>
<Pair title="Special"><p>The character gains bonus spells from her bloodline one level later than she normally would. For example, a sorcerer with the <Link to="/sorcbloodline/aberrant">aberrant</Link> bloodline who takes a bloodline familiar would not gain the <em>acidic ray</em> bloodline power, and she would gain her first bonus spell at 4th level, her second bonus spell at 6th level, and so on.</p>
<p>GMs may use the following bloodline familiar abilities as written, or employ them as guidelines for devising bloodline familiar abilities for bloodlines not listed below.</p>
</Pair>
</Ability>
<Ability id="arc-sorcerer-bloodline_familiars-squeezer-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-sorcerer-bloodline_familiars-squeezer-ex">Squeezer (Ex):</Pair>
<Pair title="Prerequisites"><Link to="/sorcbloodline/aberrant">Aberrant</Link> bloodline</Pair>
<Pair title="Ability">The familiar gains the <Link to="/umr/compression">compression</Link> ability, allowing it to move through an area as small as one-quarter its space without <Link to="/misc/squeezing">squeezing</Link> or one-eighth its space when squeezing.</Pair>
</Ability>
<Ability id="arc-sorcerer-bloodline_familiars-grotesque-appendages-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-sorcerer-bloodline_familiars-grotesque-appendages-ex">Grotesque Appendages (Ex):</Pair>
<Pair title="Prerequisites"><Link to="/sorcbloodline/abyssal">Abyssal</Link> bloodline</Pair>
<Pair title="Ability">The damage dice of each of the familiar's natural attacks increases <Link to="/misc/by_one_step">by one die step</Link>.</Pair>
</Ability>
<Ability id="arc-sorcerer-bloodline_familiars-spell-catalyst-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-sorcerer-bloodline_familiars-spell-catalyst-su">Spell Catalyst (Su):</Pair>
<Pair title="Prerequisites"><Link to="/sorcbloodline/arcane">Arcane</Link> bloodline</Pair>
<Pair title="Ability">Spells you cast that target your familiar are treated as having a caster level 2 levels higher than your actual caster level.</Pair>
</Ability>
<Ability id="arc-sorcerer-bloodline_familiars-heavenly-touch-su" extraClasses="subAbility" icon={["remedy"]}>
<Pair single id="arc-sorcerer-bloodline_familiars-heavenly-touch-su">Heavenly Touch (Su):</Pair>
<Pair title="Prerequisites"><Link to="/sorcbloodline/celestial">Celestial</Link> bloodline</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Ability">Your familiar can grant <Link to="/umr/fast_healing">fast healing</Link> 1 to an allied creature it's touching. This effect lasts a number of rounds equal to your Charisma modifier (minimum 1) or until the familiar stops touching the creature, whichever comes first.</Pair>
<Pair title="At 10th Level">The familiar grants fast healing 2 instead.</Pair>
<Pair title="At 20th Level">The familiar grants fast healing 3 instead.</Pair>
</Ability>
<Ability id="arc-sorcerer-bloodline_familiars-foretold-touch-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-sorcerer-bloodline_familiars-foretold-touch-su">Foretold Touch (Su):</Pair>
<Pair title="Prerequisites"><Link to="/sorcbloodline/destined">Destined</Link> bloodline</Pair>
<Pair title="Ability">The familiar gains a +1 luck bonus on attack rolls to deliver touch spells, and the DC of touch spells delivered by the familiar increases by 1.</Pair>
<Pair title="At 10th Level">These benefits increase to +2.</Pair>
<Pair title="At 20th Level">These benefits increase again to +3.</Pair>
</Ability>
<Ability id="arc-sorcerer-bloodline_familiars-dragons-flight-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-sorcerer-bloodline_familiars-dragons-flight-ex">Dragon's Flight (Ex):</Pair>
<Pair title="Prerequisites"><Link to="/sorcbloodline/draconic">Draconic</Link> bloodline</Pair>
<Pair title="Usage">1 minute/day per two sorcerer levels (minimum 1); these minutes need not be consecutive, but they must be spent in 1-minute increments<ByLevelPop levels={[[1,1],[4,2],[6,3],[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} unit="minute" postText="/day" /></Pair>
<Pair title="Ability">The familiar can sprout draconic wings, granting it a fly speed of 30 feet with average maneuverability.</Pair>
<Pair title="At 10th Level">The familiar's fly speed increases to 60 feet with good maneuverability.</Pair>
<Pair title="At 20th Level">The familiar's fly speed increases to 90 feet.</Pair>
</Ability>
<Ability id="arc-sorcerer-bloodline_familiars-dualistic-energy-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-sorcerer-bloodline_familiars-dualistic-energy-su">Dualistic Energy (Su):</Pair>
<Pair title="Prerequisites"><Link to="/sorcbloodline/elemental">Elemental</Link> bloodline</Pair>
<Pair title="Ability">When your familiar delivers a touch spell that deals energy damage of a type other than your chosen energy type, your familiar can choose to alter the spell so that half of the energy damage dealt is of the spell's original type and the other half is of your chosen energy type.</Pair>
</Ability>
<Ability id="arc-sorcerer-bloodline_familiars-amusing-familiar-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-sorcerer-bloodline_familiars-amusing-familiar-su">Amusing Familiar (Su):</Pair>
<Pair title="Prerequisites"><Link to="/sorcbloodline/fey">Fey</Link> bloodline</Pair>
<Pair title="Ability">The familiar can fascinate other creatures as the <Link to="/performance/fascinate">fascinate</Link> bardic performance, treating your caster level as its bard level and using your Charisma modifier for the purpose of calculating the Will save DC. The familiar cannot perform any other actions while using this ability.</Pair>
</Ability>
<Ability id="arc-sorcerer-bloodline_familiars-hellish-aura-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-sorcerer-bloodline_familiars-hellish-aura-su">Hellish Aura (Su):</Pair>
<Pair title="Prerequisites"><Link to="/sorcbloodline/infernal">Infernal</Link> bloodline</Pair>
<Pair title="Ability">Animals don't willingly approach the familiar unless the animal's master succeeds at a DC 15 Handle Animal, Ride, or wild empathy check.</Pair>
<Pair title="At 10th Level">This DC<del>0</del>10<del>15</del>5</Pair>
<Pair title="Special">Animal companions, familiars and mounts are immune to this effect.</Pair>
</Ability>
<Ability id="arc-sorcerer-bloodline_familiars-unliving-physiology-su" extraClasses="subAbility" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-sorcerer-bloodline_familiars-unliving-physiology-su">Unliving Physiology (Su):</Pair>
<Pair title="Prerequisites"><Link to="/sorcbloodline/undead">Undead</Link> bloodline</Pair>
<Pair title="Ability">The familiar is alive, but is treated as undead for all effects that affect undead differently from living creatures, such as <Link to="/main/cure_spells">cure spells</Link> and <Link to="/ability/channel_energy">channeled energy</Link>.</Pair>
</Ability>
</>};
const _crossblooded = {title: "Crossblooded", jsx: <><h2 id="arc-sorcerer-crossblooded-crossblooded">Crossblooded</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 69</Link><br/>A crossblooded bloodline combines the powers of two distinct heritages. In most cases, sorcerers with this bloodline are the offspring of two sorcerers from different ancestries, but occasionally a crossblooded sorcerer arises from the conjunction of other powers. A draconic sorcerer who is also the culmination of a great destiny, an abyssal sorcerer from a family that dealt with devils, and an arcane sorcerer raised from birth by fey are all possible sources for crossblooded bloodlines.</p>
<p>The sorcerer may gain access to the skills, feats, and some of the powers of both bloodlines she is descended from, but at the cost of reduced mental clarity and choice (see <em>Drawbacks</em> below).</p>
<Ability id="arc-sorcerer-crossblooded-bloodlines" icon={["stairs-goal"]}>
<Pair single id="arc-sorcerer-crossblooded-bloodlines">Bloodlines</Pair>
<Pair title="Choice">A crossblooded sorcerer selects two different <Link to="/ability/sorcerer_bloodlines">sorcerer_bloodlines</Link>.</Pair>
</Ability>
<Ability id="arc-sorcerer-crossblooded-class-skill" icon={["skills"]}>
<Pair single id="arc-sorcerer-crossblooded-class-skill">Class Skill</Pair>
<Pair title="Info">A crossblooded sorcerer receives the bonus class skill from both of her bloodlines. If these are the same skill, this does not grant any additional benefit.</Pair>
</Ability>
<Ability id="arc-sorcerer-crossblooded-bonus-spells" icon={["spell-book"]}>
<Pair single id="arc-sorcerer-crossblooded-bonus-spells">Bonus Spells</Pair>
<Pair title="Info"><p>A crossblooded sorcerer may select her bonus spells from either of her bloodlines. The sorcerer also has the choice to learn a lower-level bonus spell she did not choose in place of the higher-level bonus spell she would normally gain. Lower-level bonus spells learned this way always use the spell level that they would be if the sorcerer had learned them with the appropriate bonus spell.</p>
<p>For example, a 3rd-level <Link to="/sorcbloodline/aberrant">aberrant</Link>/<Link to="/sorcbloodline/abyssal">abyssal</Link> crossblooded sorcerer has the choice of learning <Link to="/spell/cause_fear">cause fear</Link> or <Link to="/spell/enlarge_person">enlarge person</Link> as her bloodline bonus spell. If she selected <em>cause fear</em> as her 3rd-level bonus spell, at 5th level she could use her new bonus spell to learn <em>enlarge person</em> instead of <Link to="/spell/bulls_strength">bull's strength</Link> or <Link to="/spell/see_invisibility">see invisibility</Link>, and she would add it to her list of 1st-level spells known (just as if she had learned it as her 3rd-level bonus spell).</p>
</Pair>
</Ability>
<Ability id="arc-sorcerer-crossblooded-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-sorcerer-crossblooded-bonus-feat">Bonus Feat</Pair>
<Pair title="Info">A crossblooded sorcerer combines the bonus feat lists from both of her bloodlines and may select her bloodline bonus feats from this combined list.</Pair>
</Ability>
<Ability id="arc-sorcerer-crossblooded-bloodline-arcana" icon={["stairs-goal"]}>
<Pair single id="arc-sorcerer-crossblooded-bloodline-arcana">Bloodline Arcana</Pair>
<Pair title="Ability">A crossblooded sorcerer gains the bloodline arcana of both her bloodlines.</Pair>
</Ability>
<Ability id="arc-sorcerer-crossblooded-bloodline-powers" icon={["stairs-goal"]}>
<Pair single id="arc-sorcerer-crossblooded-bloodline-powers">Bloodline Powers</Pair>
<Pair title="At 1st Level">A crossblooded sorcerer gains one of the two new bloodline powers available to her at this level.</Pair>
<Pair title="At 3rd Level">A crossblooded sorcerer gains one of the two new bloodline powers available to her at this level.</Pair>
<Pair title="At 9th Level">A crossblooded sorcerer gains one of the two new bloodline powers available to her at this level.</Pair>
<Pair title="At 15th Level">A crossblooded sorcerer gains one of the two new bloodline powers available to her at this level.</Pair>
<Pair title="At 20th Level">A crossblooded sorcerer gains one of the two new bloodline powers available to her at this level.</Pair>
<Pair title="Special">At 3rd-level and above, when given the choice of a two new bloodline powers, she may instead select a lower-level bloodline power she did not previous choose.</Pair>
</Ability>
<Ability id="arc-sorcerer-crossblooded-drawbacks" icon={["broken-shield"]}>
<Pair single id="arc-sorcerer-crossblooded-drawbacks">Drawbacks</Pair>
<Pair title="Info">A crossblooded sorcerer has one fewer spell known at each level (including cantrips) than is presented on the sorcerer spells known table. Furthermore, the conflicting urges created by the divergent nature of the crossblooded sorcerer's dual heritage forces her to constantly take some mental effort just to remain focused on her current situation and needs. This leaves her with less mental resolve to deal with external threats. A crossblooded sorcerer always takes a -2 penalty on Will saves.</Pair>
</Ability>
</>};
const _dragon_drinker = {title: "Dragon Drinker", jsx: <><h2 id="arc-sorcerer-dragon_drinker-dragon-drinker">Dragon Drinker</h2>
<p><strong>Sources</strong> <Link to="/source/dragonslayers_handbook">Dragonslayer's Handbook pg. 22</Link><br/>The blood of dragons not only flows through a dragon drinker's veins, but also empowers her spells and magical abilities when consumed. Dragon drinkers have the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-sorcerer-dragon_drinker--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/sorcbloodline/draconic">Draconic</Link> bloodline</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-sorcerer-dragon_drinker-bleeding-spells-su" icon={["upgrade"]}>
<Pair single id="arc-sorcerer-dragon_drinker-bleeding-spells-su">Bleeding Spells (Su)</Pair>
<Pair hl title="Replaces">Bloodline arcana</Pair>
<Pair title="Ability">Whenever a dragon drinker casts a spell that deals damage, the spell deals 1 point of <Link to="/rule/bleed">bleed</Link> damage per spell level to any creatures of the dragon type damaged.</Pair>
</Ability>
<Ability id="arc-sorcerer-dragon_drinker-blood-drinking-su" icon={["stairs-goal","upgrade","remedy","armor-upgrade"]}>
<Pair single id="arc-sorcerer-dragon_drinker-blood-drinking-su">Blood Drinking (Su)</Pair>
<Pair hl title="Replaces">1st-level bloodline power</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A dragon drinker gains the ability to drink <Link to="/eq-misc/dragons_blood">dragon's blood</Link> to alter or augment her spellcasting abilities. For the purposes of harvesting dragon's blood, treat the dragon drinker as though she has <Link to="/feat/dragoncrafting">Dragoncrafting</Link> feat.</Pair>
<Pair title="At 5th Level">Drinking a vial of dragon's blood is a <strong className="hl">standard action</strong> that provides the dragon drinker with the normal benefits of the item, as well as a +1 bonus to her caster level for purposes of level-dependent spell effects on a single spell cast within 1 minute.</Pair>
<Pair title="At 7th Level">A consumed vial of dragon blood also heals 1d8 points of damage instead of the standard 1d4.</Pair>
<Pair title="At 11th Level">The alchemical bonus on Fortitude and Reflex saves granted by the blood increases to +2.</Pair>
<Pair title="Special">In the absence of true dragon's blood, the dragon drinker may tap into the draconic blood flowing through her veins to gain the temporary effects of having consumed dragon's blood. As a <strong className="hl">free action</strong>, she can activate this ability, healing 1d4 points of damage and gaining a +1 resistance bonus on Will and Fortitude saves for 1 round. This action may only be performed once per round, and can be performed a number of times per day equal to 3 + her Charisma modifier.</Pair>
</Ability>
<Ability id="arc-sorcerer-dragon_drinker-energy-assimilation-su" icon={["armor-upgrade"]}>
<Pair single id="arc-sorcerer-dragon_drinker-energy-assimilation-su">Energy Assimilation (Su)</Pair>
<Pair hl title="Replaces">7th-level bloodline feat</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">When the dragon drinker drinks true dragon's blood from a dragon with a breath weapon that deals a different type of energy damage than her chosen energy type, she may adopt the energy resistance of the blood's source dragon as if it were her selected bloodline. This effect lasts for 1 minute per dose of dragon's blood, after which the dragon drinker's energy resistance reverts back to her normal energy type.</Pair>
</Ability>
<Ability id="arc-sorcerer-dragon_drinker-breath-mimicry-su" icon={["tornado-discs","barbed-arrow"]}>
<Pair single id="arc-sorcerer-dragon_drinker-breath-mimicry-su">Breath Mimicry (Su)</Pair>
<Pair hl title="Replaces">13th-level bloodline feat</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">When the dragon drinker drinks true dragon's blood from a dragon with a breath weapon of a shape or energy type different from her own, she may use the shape and energy type of the blood's source dragon when she next uses her breath weapon.</Pair>
</Ability>
<Ability id="arc-sorcerer-dragon_drinker-blood-siphon-su" icon={["stairs-goal","remedy","armor-upgrade"]}>
<Pair single id="arc-sorcerer-dragon_drinker-blood-siphon-su">Blood Siphon (Su)</Pair>
<Pair hl title="Replaces">19th-level bloodline feat</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Swift Action">When the dragon drinker is within 60 feet of a creature of the dragon type that is suffering bleed damage, she can draw a dose of its blood into herself as though she had consumed it from a vial.</Pair>
<Pair title="Ability">Additionally, when she consumes dragon's blood, it heals 3d8 points of damage and provides a +3 resistance bonus on Fortitude and Will saves for 1 minute in place of its normal effects.</Pair>
</Ability>
</>};
const _eldritch_scrapper = {title: "Eldritch Scrapper", jsx: <><h2 id="arc-sorcerer-eldritch_scrapper-eldritch-scrapper">Eldritch Scrapper</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 122</Link><br/>An eldritch scrapper is usually spoiling for a fight, looking to prove that she's just as tough as a martial character. A veteran of many brawls against opponents who were suspicious of her manifesting magic, an eldritch scrapper has a thick skin and a fighting style that blends weapons with spells.</p>
<Ability id="arc-sorcerer-eldritch_scrapper-martial-flexibility-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-sorcerer-eldritch_scrapper-martial-flexibility-ex">Martial Flexibility (Ex)</Pair>
<Pair hl title="Replaces">Bloodline powers gained at 1st, 9th, and 15th level</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An eldritch scrapper gains the <Link to="/class/brawler">brawler's</Link> <em>martial flexibility</em> class feature, using her sorcerer level as her brawler level for the purposes of uses per day. The scrapper treats <Link to="/feat/arcane_strike">Arcane Strike</Link> and <Link to="/feat/combat_casting">Combat Casting</Link> as combat feats for the purpose of this ability.</Pair>
<Pair title="At 9th Level">An eldritch scrapper can use this ability to gain the benefit of two combat feats at the same time. She can select one feat as a <strong className="hl">move action</strong> or two feats as a <strong className="hl">standard action</strong>. She can use one of these feats to meet a prerequisite of the second feat; doing so means she cannot replace the feat that is currently fulfilling another feat's prerequisites without also replacing all feats that require it. Each individual feat selected counts toward her daily uses of this ability.</Pair>
<Pair title="At 15th Level">An eldritch scrapper can use this ability to gain the benefit of three combat feats at the same time. She can select one feat as a <strong className="hl">swift action</strong>, two feats as a <strong className="hl">move action</strong>, or three feats as a <strong className="hl">standard action</strong>. She can use one of the feats to meet a prerequisite of the second and third feats, and use the second feat to meet a prerequisite of the third feat. Each individual feat selected counts toward her daily uses of this ability.</Pair>
</Ability>
<Ability id="arc-sorcerer-eldritch_scrapper-martial-flexibility-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-sorcerer-eldritch_scrapper-martial-flexibility-ex" flavor="Text from the brawler class ability.">Martial Flexibility (Ex)</Pair>
<Pair title="Usage">3 times/day + 1 per two brawler levels<ByLevelPop levels={[[1,3],[2,4],[4,5],[6,6],[8,7],[10,8],[12,9],[14,10],[16,11],[18,12],[20,13]]} unit="time" postText="/day" /></Pair>
<Pair title="Move-Equivalent Action">You gain the benefit of a combat feat you don't possess. This effect lasts for 1 minute. You must meet all the feat's prerequisites.</Pair>
<Pair title="Special">You can use this ability again before the duration expires in order to replace the previous combat feat with another choice. If a combat feat has a daily use limitation (such as <Link to="/feat/stunning_fist">Stunning Fist</Link>), any uses of that combat feat while using this ability count toward that feat's daily limit.</Pair>
</Ability>
<Ability id="arc-sorcerer-eldritch_scrapper-bloodline-weapons" icon={["mailed-fist"]}>
<Pair single id="arc-sorcerer-eldritch_scrapper-bloodline-weapons">Bloodline Weapons</Pair>
<Pair title="At 3rd Level">If an eldritch scrapper's 1st-level bloodline power would normally grant her natural attacks (such as bite or claws), she can select that 1st-level bloodline power in place of her 3rd-level bloodline power.</Pair>
</Ability>
</>};
const _mongrel_mage = {title: "Mongrel Mage", jsx: <><h2 id="arc-sorcerer-mongrel_mage-mongrel-mage">Mongrel Mage</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 122</Link><br/>A mongrel mage is a sorcerer whose bloodline is so weak, or mixed with so many others, that her power isn't clearly associated with any bloodline source. A mongrel mage's bloodline powers can change on a daily basis, but always fall short of those of a full-blooded sorcerer's powers. A mongrel mage is a dabbler in all bloodlines but a master of none, and she is looked down upon by true sorcerers.</p>
<Ability id="arc-sorcerer-mongrel_mage-mongrel-reservoir-su" icon={["magic-swirl"]}>
<Pair single id="arc-sorcerer-mongrel_mage-mongrel-reservoir-su">Mongrel Reservoir (Su)</Pair>
<Pair hl title="Alters">Bloodline, bloodline powers, bloodline spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>A mongrel mage has an innate pool of magical energy, known as her mongrel reservoir, that she can draw upon to activate her weakened bloodline. Her mongrel reservoir can hold an amount of magical energy equal to 3 + her sorcerer level. Each day when refreshing her spell slots, her mongrel reservoir is restored to full. The mongrel reservoir can never hold more points that the total mentioned above; points gained in excess of this maximum are lost.</p>
<p>Each day when she refreshes her spell slots, the mongrel mage selects one <Link to="/ability/sorcerer_bloodlines">sorcerer bloodline</Link>. She must select an ordinary bloodline with this ability, not a wildblooded version or one altered by any other archetype. She gains this bloodline's 1st-level bloodline power for that day, using it as if she were only a 1st-level sorcerer. (If this ability is used to gain an <em>arcane bond</em> and the <em>bonded item</em> is selected, she can use the item only to cast a 1st-level spell known, as she counts as only a 1st-level sorcerer.) A mongrel mage can have only one bloodline selected at a time.</p>
<p>As a <strong className="hl">swift action</strong>, she can expend 1 point from her mongrel reservoir to activate that bloodline, allowing her to use its 1st-level bloodline powers as well as its bloodline arcana at her full sorcerer level, including using a <em>bonded item</em> from an <em>arcane bond.</em> This lasts for a number of rounds equal to her Charisma modifier (minimum 1).</p>
</Pair>
<Pair title="At 3rd Level">When activating her selected bloodline, a mongrel mage can instead spend 2 points from her mongrel reservoir to allow her to use the bloodline's 1st- and 3rd-level powers as well as its bloodline arcana at her full sorcerer level for a number of rounds equal to her Charisma modifier (minimum 1).</Pair>
<Pair title="At 7th Level">When a mongrel mage is activating her selected bloodline, the mongrel mage can instead spend 3 points from her mongrel reservoir, allowing her to use the bloodline's 1st-, 3rd-, and 7th-level powers as well as its bloodline arcana at her full sorcerer level for a number of rounds equal to her Charisma bonus.</Pair>
<Pair title="At 20th Level">When activating her selected bloodline, a mongrel mage can instead spend 5 points from her mongrel reservoir, allowing her to use all of the bloodline's powers as well as its bloodline arcana at her full sorcerer level for a number of rounds equal to her Charisma modifier (minimum 1).</Pair>
</Ability>
<Ability id="arc-sorcerer-mongrel_mage-bloodline-spells" icon={["spell-book"]}>
<Pair single id="arc-sorcerer-mongrel_mage-bloodline-spells">Bloodline Spells</Pair>
<Pair hl title="Replaces">Bloodline feats gained at 7th, 13th, and 19th level</Pair>
<Pair title="At 7th Level">Each day when she selects her bloodline, a mongrel mage adds the 1st-, 2nd-, and 3rd-level spells from her selected bloodline to her current list of spells known.</Pair>
<Pair title="At 13th Level">Each day when she selects her bloodline, a mongrel mage adds the 4th-, 5th-, and 6th-level spells from her selected bloodline to her current list of spells known.</Pair>
<Pair title="At 19th Level">Each day when she selects her bloodline, a mongrel mage adds the 7th-, 8th-, and 9th-level spells from her selected bloodline to her current list of spells known.</Pair>
</Ability>
</>};
const _nine_tailed_heir = {title: "Nine-Tailed Heir", jsx: <><h2 id="arc-sorcerer-nine_tailed_heir-nine-tailed-heir">Nine-Tailed Heir</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 13</Link><br/>Tian stories often tell of kitsune with multiple tails, but not many realize that fewer than one kitsune in every thousand has this potential, and those that do usually have a magical quirk in their blood or have been blessed by their race's deific matron, <Link to="/faith/daikitsu">Daikitsu</Link>. As a result, most that harness the mystic powers of their newfound tails often gain sorcerous powers, becoming nine-tailed heirs.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-sorcerer-nine_tailed_heir--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/kitsune">Kitsune</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-sorcerer-nine_tailed_heir-magical-tail" icon={["stairs-goal"]}>
<Pair single id="arc-sorcerer-nine_tailed_heir-magical-tail">Magical Tail</Pair>
<Pair hl title="Replaces">Bloodline spell</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A nine-tailed heir gains <Link to="/feat/magical_tail">Magical Tail</Link> as a bonus feat.</Pair>
<Pair title="At 7th Level">The sorcerer again gains Magical Tail as a bonus feat.</Pair>
<Pair title="At 11th Level">The sorcerer again gains Magical Tail as a bonus feat.</Pair>
<Pair title="At 15th Level">The sorcerer again gains Magical Tail as a bonus feat.</Pair>
<Pair title="At 19th Level">The sorcerer again gains Magical Tail as a bonus feat.</Pair>
<Pair title="Special">If the nine-tailed heir already has nine tails, each additional time the feat is taken, the sorcerer gains one additional daily use of the lowest level Magical Tail ability not already affected by this effect.</Pair>
</Ability>
</>};
const _razmiran_priest = {title: "Razmiran Priest", jsx: <><h2 id="arc-sorcerer-razmiran_priest-razmiran-priest">Razmiran Priest</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 38</Link><br/>The so-called "priests" of Razmir are magical charlatans - missionary servants of the Living God who spread his fervent devotion wherever they travel. Altered by Razmir's magic, he can perform feats impossible for other sorcerers. A Razmiran priest has the following class features.</p>
<Ability icon={["skills"]} id="arc-sorcerer-razmiran_priest-undefined">
<Pair id="arc-sorcerer-razmiran_priest-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT), <Link to="/skill/perform">Perform</Link> (CHA)</Pair>
<Pair title="Removed Skills">Appraise, Fly</Pair></Ability>
<Ability id="arc-sorcerer-razmiran_priest-false-piety-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-sorcerer-razmiran_priest-false-piety-ex">False Piety (Ex)</Pair>
<Pair hl title="Replaces">Eschew Materials bonus feat</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">He adds <Link to="/misc/half">half</Link> his sorcerer level to Use Magic Device checks to activate spell trigger and spell completion items that use divine spells.</Pair>
<Pair title="Ability">He gains <Link to="/feat/false_focus">False Focus</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-sorcerer-razmiran_priest-lay-healer-su" icon={["spell-book"]}>
<Pair single id="arc-sorcerer-razmiran_priest-lay-healer-su">Lay Healer (Su)</Pair>
<Pair hl title="Replaces">Bloodline spells gained at 3rd level and 5th level</Pair>
<Pair title="At 3rd Level">The Razmiran priest adds <Link to="/spell/aid">aid</Link> to his list of spells known as a 2nd-level spell.</Pair>
<Pair title="At 5th Level">He adds <Link to="/spell/remove_disease">remove disease</Link> to his list of spells known as a 3rd-level spell.</Pair>
</Ability>
<Ability id="arc-sorcerer-razmiran_priest-razmiran-channel-su" icon={["magic-swirl"]}>
<Pair single id="arc-sorcerer-razmiran_priest-razmiran-channel-su">Razmiran Channel (Su)</Pair>
<Pair hl title="Replaces">9th-level bloodline power</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">The Razmiran priest can use his own magic to power spell completion and spell trigger items that use divine spells. He expends a sorcerer spell slot that is at least 1 level higher than the level of the spell he's trying to activate, then makes a Use Magic Device check. If he succeeds, the item's spell occurs and the item or charge is not expended. If he fails, nothing happens. Whether he succeeds or fail, his spell slot is expended.</Pair>
</Ability>
</>};
const _seeker = {title: "Seeker", jsx: <><h2 id="arc-sorcerer-seeker-seeker">Seeker</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_society_field_guide">Pathfinder Society Field Guide pg. 29</Link><br/>Oracles and sorcerers gain their magical powers through strange and mysterious ways, be they chosen by fate or blood. While most might be content with their strange powers, some oracles and sorcerers join the <Link to="/rule/pathfinders">Pathfinders</Link> specifically to find out more about their mysteries and bloodlines and determine the genesis and history of their eldritch talents. These spellcasters are known among the Spells as seekers, after their obsession with researching ancient texts and obscure ruins for any clues they can find about their heritage and histories. A seeker has the following class features.</p>
<Ability icon={["skills"]} id="arc-sorcerer-seeker-undefined">
<Pair id="arc-sorcerer-seeker-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/disable_device">Disable Device</Link> (DEX)</Pair></Ability>
<Ability id="arc-sorcerer-seeker-tinkering-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-sorcerer-seeker-tinkering-ex">Tinkering (Ex)</Pair>
<Pair hl title="Replaces">Eschew Materials</Pair>
<Pair title="Passive Ability">A seeker adds <Link to="/misc/half">half</Link> his sorcerer level on Perception checks made to locate traps and on all Disable Device skill checks (minimum +1).</Pair>
<Pair title="Ability">A seeker can use Disable Device to disarm magical traps.</Pair>
<Pair title="Special">If the seeker also possesses levels in <Link to="/class/rogue">rogue</Link> or another class that provides the <Link to="/ability/trapfinding">trapfinding</Link> ability, those levels stack with his sorcerer levels for determining his overall bonus on these skill checks.</Pair>
</Ability>
<Ability id="arc-sorcerer-seeker-seeker-lore-ex" icon={["upgrade"]}>
<Pair single id="arc-sorcerer-seeker-seeker-lore-ex" flavor="A seeker has already learned much about his bloodline, and is more comfortable using the bonus spells gained by that bloodline.">Seeker Lore (Ex)</Pair>
<Pair hl title="Replaces">3rd-level bloodline power</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">He gains a +4 bonus on all <Link to="/rule/concentration">concentration</Link> checks, on caster level checks made to overcome spell resistance, and on all Knowledge (arcana) and Spellcraft checks made on topics associated with his bonus spells.</Pair>
</Ability>
<Ability id="arc-sorcerer-seeker-seeker-magic-su" icon={["upgrade"]}>
<Pair single id="arc-sorcerer-seeker-seeker-magic-su" flavor="A seeker becomes skilled at modifying his bloodline spells with metamagic.">Seeker Magic (Su)</Pair>
<Pair hl title="Replaces">15th-level bloodline power</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">When a seeker applies a metamagic feat to any bonus spells granted by his bloodline, he reduces the metamagic feat's spell level adjustment by 1. Thus, applying a Metamagic feat like <Link to="/feat/still_spell">Still Spell</Link> to a spell does not change its effective spell level at all, while applying <Link to="/feat/quicken_spell">Quicken Spell</Link> only increases the spell's effective spell level by 3 instead of by 4.</Pair>
<Pair title="Special">This reduction to the spell level adjustment for Metamagic feats does not stack with similar reductions from other abilities.</Pair>
</Ability>
</>};
const _sorcerer_of_sleep = {title: "Sorcerer of Sleep", jsx: <><h2 id="arc-sorcerer-sorcerer_of_sleep-sorcerer-of-sleep">Sorcerer of Sleep</h2>
<p><strong>Sources</strong> <Link to="/source/black_markets">Black Markets pg. 26</Link><br/>Some sorcerers have trouble accessing their innate gifts and must find another way to unlock them. For a sorcerer of sleep, the mind-altering drug <Link to="/drug/pesh">pesh</Link> is the key. The garbled visions the drug provides allow a sorcerer of sleep to reach an ideal state for channeling her arcane power. The <Link to="/sorcbloodline/arcane">arcane</Link> and <Link to="/sorcbloodline/dreamspun">dreamspun</Link> bloodlines are the sorcerer heritages most often associated with pesh, though a sorcerer of sleep might exhibit any bloodline; pesh is a tool to enhance her gifts, rather than their source.</p>
<Ability id="arc-sorcerer-sorcerer_of_sleep-pesh-expert" icon={["upgrade"]}>
<Pair single id="arc-sorcerer-sorcerer_of_sleep-pesh-expert">Pesh Expert</Pair>
<Pair hl title="Replaces">Bloodline arcana</Pair>
<Pair title="Passive Ability">A sorcerer of sleep adds 1/2 her sorcerer level (minimum 1) on Appraise, Craft (alchemy), Heal, and Knowledge (local) checks related to pesh and other drugs.</Pair>
</Ability>
<Ability id="arc-sorcerer-sorcerer_of_sleep-sahir-afiyun" icon={["stairs-goal"]}>
<Pair single id="arc-sorcerer-sorcerer_of_sleep-sahir-afiyun">Sahir-Afiyun</Pair>
<Pair hl title="Replaces">Eschew materials</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A sorcerer of sleep gains <Link to="/feat/sahir_afiyun">Sahir-Afiyun</Link> as a bonus feat, even if she does not meet the prerequisites.</Pair>
<Pair title="Info">A sorcerer of sleep adds <Link to="/feat/pesh_euphoria">Pesh Euphoria</Link>, <Link to="/feat/pesh_healing">Pesh Healing</Link>, <Link to="/feat/pesh_rejuvenation">Pesh Rejuvenation</Link>, and Sahir-Afiyun to her list of bloodline feats.</Pair>
</Ability>
<Ability id="arc-sorcerer-sorcerer_of_sleep-pesh-touch-su" icon={["magic-palm","upgrade","armor-downgrade"]}>
<Pair single id="arc-sorcerer-sorcerer_of_sleep-pesh-touch-su">Pesh Touch (Su)</Pair>
<Pair hl title="Replaces">1st-level bloodline power</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">A sorcerer of sleep can make a melee touch attack against a living creature to cause one of the following effects (sorcerer's choice): the target gains a +2 enhancement bonus to Strength, the target is <Link to="/misc/fatigued">fatigued</Link>, or the target takes a -2 penalty on saving throws against illusion and mind-affecting effects. The effects of pesh touch last a number of rounds equal to 1/2 the sorcerer of sleep's sorcerer level. The effects of pesh touch are not cumulative, and cannot make the target <Link to="/misc/exhausted">exhausted</Link>.</Pair>
</Ability>
</>};
const _stone_warder = {title: "Stone Warder", jsx: <><h2 id="arc-sorcerer-stone_warder-stone-warder">Stone Warder</h2>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 29</Link><br/>Stone warders have an innate ability to create runes that allow them to ward areas with magic traps built from their spells. These sorcerers are most common among dwarves, but have been known to appear among other races who have strong ties to earth, rock, stone, mountains, and the Darklands.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-sorcerer-stone_warder--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/sorcbloodline/deep_earth">deep earth</Link>, <Link to="/sorcbloodline/draconic">draconic</Link> (copper dragon only), <Link to="/sorcbloodline/elemental">elemental</Link> (earth only), <Link to="/sorcbloodline/orc">orc</Link>, or <Link to="/sorcbloodline/shaitan">shaitan</Link> bloodline</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-sorcerer-stone_warder-power-of-stone-su" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-sorcerer-stone_warder-power-of-stone-su" flavor="A stone warder draws power from natural rock.">Power of Stone (Su)</Pair>
<Pair title="Passive Ability">When in hills, mountains, or underground terrain, a stone warden gets a bonus to her caster level equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of her sorcerer level.</Pair>
<Pair title="Special">This strong elemental tie prevents a stone warder from casting spells that have the air, cold, electricity, fire, or water descriptor.</Pair>
</Ability>
<Ability id="arc-sorcerer-stone_warder-rune-of-warding-sp" icon={["magic-swirl"]}>
<Pair single id="arc-sorcerer-stone_warder-rune-of-warding-sp">Rune of Warding (Sp)</Pair>
<Pair hl title="Replaces">Eschew Materials, 3rd-level bloodline spell, 7th-level bloodline feat</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action"><p>A stone warder can create a <em>warding rune</em> in any adjacent square. The stone warder selects a sorcerer spell known that is at least 1 level lower than the highest-level spell she can cast, and casts it as part of creating the <em>rune of warding.</em> The spell must have a casting time of 1 standard action or less, and it must target one or more creatures. Rather than have its normal effect, the spell is stored in the <em>rune.</em> The first creature to enter the square triggers the <em>rune of warding,</em> and becomes the target of the selected spell. Regardless of the number of targets the spell can normally affect, it affects only the creature that triggers the <em>rune.</em></p>
<p>The <em>rune</em> is invisible and lasts a number of rounds equal to the stone warder's level or until discharged. If placed on a solid rock or stone surface, it instead lasts 1 minute per sorcerer level the stone warder has or until discharged.</p>
</Pair>
<Pair title="Special">The stone warder cannot create a <em>rune of warding</em> in a square occupied by an existing <em>rune of warding</em> or another creature. The <em>rune</em> counts as a spell of the same level as the spell stored within it for the purposes of dispelling. It is considered a magic trap and can be discovered with a successful Perception check (DC = 25 + the level of the stored spell) and disarmed with a successful Disable Device check (DC = 25 + the level of the stored spell).</Pair>
</Ability>
</>};
const _tattooed_sorcerer = {title: "Tattooed Sorcerer", jsx: <><h2 id="arc-sorcerer-tattooed_sorcerer-tattooed-sorcerer">Tattooed Sorcerer</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 40</Link><br/>The tattooed sorcerer has embraced the ancient traditions of Varisian spellcasting, and uses colorful and intricate tattoos to enhance her magical powers. A tattooed sorcerer has the following class features.</p>
<Ability id="arc-sorcerer-tattooed_sorcerer-familiar-tattoo-su" icon={["stairs-goal"]}>
<Pair single id="arc-sorcerer-tattooed_sorcerer-familiar-tattoo-su">Familiar Tattoo (Su)</Pair>
<Pair hl title="Replaces">1st-level bloodline power</Pair>
<Pair title="Ability">A tattooed sorcerer gains a <Link to="/sidekick/familiar">familiar</Link> as an <em>arcane bond,</em> as a <Link to="/class/wizard">wizard</Link> equal to her sorcerer level. Her sorcerer levels stack with any wizard or <Link to="/class/witch">witch</Link> levels she possesses when determining the powers of her <Link to="/ability/familiar">familiar</Link> - this ability does not allow her to have both a familiar and a bonded item.</Pair>
<Pair title="Ability">Unlike most familiars, her familiar can transform itself into a tattoo that she carries in her flesh. Transforming into a tattoo or back to normal familiar form is a <strong className="hl">move action</strong> for her familiar.</Pair>
<Pair title="Special">In tattoo form, the familiar looks like a stylized version of itself, but does not count as a creature separate from the tattooed sorcerer. In tattoo form it continues to grant its special familiar ability, but otherwise has no abilities and can take no actions except to transform from tattoo into creature. A familiar tattoo cannot be erased or dispelled.</Pair>
</Ability>
<Ability id="arc-sorcerer-tattooed_sorcerer-varisian-tattoo-ex" icon={["stairs-goal"]}>
<Pair single id="arc-sorcerer-tattooed_sorcerer-varisian-tattoo-ex">Varisian Tattoo (Ex)</Pair>
<Pair hl title="Replaces">Eschew Materials bonus feat</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The tattooed sorcerer gains <Link to="/feat/varisian_tattoo">Varisian Tattoo</Link> as a bonus feat. If she doesn't have <Link to="/feat/spell_focus">Spell Focus</Link>, she may choose which school of magic her Varisian Tattoo enhances.</Pair>
</Ability>
<Ability id="arc-sorcerer-tattooed_sorcerer-bloodline-tattoos-ex" icon={["magic-swirl"]}>
<Pair single id="arc-sorcerer-tattooed_sorcerer-bloodline-tattoos-ex">Bloodline Tattoos (Ex)</Pair>
<Pair title="Passive Ability">Whenever a tattooed sorcerer gains a bloodline spell, a new tattoo manifests on her body to represent this spell. Her bloodline spells are always enhanced by her Varisian Tattoo feat, even if they don't match the school to which her Varisian Tattoo belongs.</Pair>
</Ability>
<Ability id="arc-sorcerer-tattooed_sorcerer-create-spell-tattoo-su" icon={["magic-palm"]}>
<Pair single id="arc-sorcerer-tattooed_sorcerer-create-spell-tattoo-su">Create Spell Tattoo (Su)</Pair>
<Pair hl title="Replaces">7th-level bloodline feat</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Standard Action">A tattooed sorcerer can create a <Link to="/magic-tattoo/spell_tattoo">spell tattoo</Link> once per day with a single touch. The recipient of the spell tattoo must be willing to receive the spell tattoo.</Pair>
<Pair title="At 11th Level">She can use this ability twice per day.</Pair>
<Pair title="At 15th Level">She can use this ability three times per day.</Pair>
<Pair title="Special">If she gives the spell tattoo to herself, it does not count against the regular limit of magic tattoos she can have. The spell tattoo must be of a spell that she knows that has no material or focus component. She can maintain one spell tattoo created by this ability at a time - if she uses this ability again, the previous spell tattoo she created fades away. Spell tattoos she creates with <Link to="/feat/inscribe_magical_tattoo">Inscribe Magical Tattoo</Link> do not count against this limit.</Pair>
</Ability>
<Ability id="arc-sorcerer-tattooed_sorcerer-enhanced-varisian-tattoo-su" icon={["magic-swirl"]}>
<Pair single id="arc-sorcerer-tattooed_sorcerer-enhanced-varisian-tattoo-su">Enhanced Varisian Tattoo (Su)</Pair>
<Pair hl title="Replaces">9th-level bloodline power</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">The tattooed sorcerer can pick any one spell she knows for which she has a Varisian Tattoo feat. This spell must be one that lacks focus components and costly material components. She can now use that spell as a spell-like ability once per day. This spell-like ability is not enhanced by her Varisian Tattoo, but it functions at +2 caster levels above her sorcerer caster level.</Pair>
<Pair title="Special">Whenever she gains a bloodline power at a later date, she may change this spell-like ability to another qualifying spell.</Pair>
</Ability>
</>};
const _umbral_scion = {title: "Umbral Scion", jsx: <><h2 id="arc-sorcerer-umbral_scion-umbral-scion">Umbral Scion</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 19</Link><br/>Umbral scions are sorcerers who are able to expertly control their especially potent shadow heritage. The majority of umbral sorcerers hail from the Darklands.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-sorcerer-umbral_scion--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/sorcbloodline/shadow">Shadow</Link> bloodline</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-sorcerer-umbral_scion-diminished-spellcasting" icon={["broken-shield"]}>
<Pair single id="arc-sorcerer-umbral_scion-diminished-spellcasting">Diminished Spellcasting</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Info">An umbral scion can cast one fewer spell per day of each level than normal. If this reduces the number to 0, she can cast spells of that level only if her Charisma score grants her <Link to="/rule/bonus_spells">bonus spells</Link> of that level.</Pair>
</Ability>
<Ability id="arc-sorcerer-umbral_scion-shrouded-spells-su" icon={["upgrade"]}>
<Pair single id="arc-sorcerer-umbral_scion-shrouded-spells-su" flavor="An umbral scion is enveloped by wisps of shadow whenever she casts a spell.">Shrouded Spells (Su)</Pair>
<Pair title="Passive Ability">The DC to identify spells cast by an umbral scion increases by 2. If the spell is being cast within an area of <Link to="/rule/dim_light">dim light</Link> or darkness, the DC increases by 5 instead.</Pair>
</Ability>
<Ability id="arc-sorcerer-umbral_scion-encroaching-darkness-su" icon={["magic-swirl"]}>
<Pair single id="arc-sorcerer-umbral_scion-encroaching-darkness-su" flavor="An umbral scion is capable of influencing light around her.">Encroaching Darkness (Su)</Pair>
<Pair hl title="Replaces">1st-level bloodline power</Pair>
<Pair title="Usage">3 + Charisma modifier times/day</Pair>
<Pair title="Standard Action">She can produce a 10-foot-radius veil centered on a creature or object within 30 feet. This veil decreases the <Link to="/rule/light_level">light level</Link> by one step and remains for a number of rounds equal to the sorcerer's Charisma modifier.</Pair>
<Pair title="At 7th Level">The veil increases to a 30-foot radius.</Pair>
<Pair title="At 8th Level">The veil decreases the light level by two steps. If the light level is decreased past darkness, the veil is treated as <Link to="/spell/deeper_darkness">deeper darkness</Link>.</Pair>
<Pair title="At 14th Level">The veil increases to 60 feet and grants any creature within it <Link to="/rule/cover">cover</Link> (even against senses normally able to penetrate total darkness, such as the <Link to="/umr/see_in_darkness">see in darkness</Link> ability).</Pair>
</Ability>
<Ability id="arc-sorcerer-umbral_scion-potent-shadows-su" icon={["upgrade"]}>
<Pair single id="arc-sorcerer-umbral_scion-potent-shadows-su">Potent Shadows (Su)</Pair>
<Pair hl title="Replaces">7th-level bloodline feat</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">When an umbral scion casts a spell of the <Link to="/spelldef/shadow_subschool">shadow subschool</Link> or a spell with the <Link to="/spelldef/darkness">darkness</Link> or <Link to="/spelldef/shadow_descriptor">shadow descriptor</Link> within an area of dim light or darkness, she treats her caster level as 1 higher. Only the sorcerer herself needs to be in dim light or darkness.</Pair>
<Pair title="At 11th Level">This bonus becomes +2.</Pair>
<Pair title="At 15th Level">This bonus increases to +3.</Pair>
<Pair title="At 19th Level">This bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-sorcerer-umbral_scion-crippling-darkness-su" icon={["upgrade"]}>
<Pair single id="arc-sorcerer-umbral_scion-crippling-darkness-su">Crippling Darkness (Su)</Pair>
<Pair hl title="Replaces">13th-level bloodline feat</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">When an umbral scion targets a creature within an area of dim light or darkness with a spell of the shadow subschool or a spell with the darkness or shadow descriptor, the DC for the spell increases by 1.</Pair>
<Pair title="At 18th Level">This bonus increases by 1.</Pair>
</Ability>
</>};
const _wishcrafter = {title: "Wishcrafter", jsx: <><h2 id="arc-sorcerer-wishcrafter-wishcrafter">Wishcrafter</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 128</Link><br/>Wishcrafters are born with a talent for manipulating reality inherited from their efreeti ancestors. However, like the genies they are descended from, wishcrafters can only draw upon this power to fulfill the desires of others. A wishcrafter has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-sorcerer-wishcrafter--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/ifrit">Ifrit</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-sorcerer-wishcrafter-wishbound-arcana-su" icon={["magic-swirl","upgrade"]}>
<Pair single id="arc-sorcerer-wishcrafter-wishbound-arcana-su" flavor="The wishcrafter can use the wishes of non-genie creatures other than herself in place of the normal verbal components of her spells.">Wishbound Arcana (Su)</Pair>
<Pair hl title="Replaces">Bloodline arcana</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A creature can make a wish as a <strong className="hl">free action</strong> at any time, even during the wishcrafter's turn. The wishcrafter must be able to hear and understand a wish in order to use it as a spell component. A spell that doesn't normally have a verbal component gains one when cast using this ability. A wish doesn't need to mention the name of a specific spell, but must describe an outcome that can be accomplished by casting a spell the wishcrafter knows (for example, wishing to be bigger could supply the verbal component for <Link to="/spell/enlarge_person">enlarge person</Link>).</Pair>
<Pair title="Passive Ability">A wishcrafter gains a +1 bonus to her caster level when using a creature's wish as a verbal component in this manner, but cannot include herself as a target of such spells. She can be affected by such a spell if it affects an area rather than a target or targets.</Pair>
<Pair title="Special">A wishcrafter is under no compulsion to grant a creature's wish. Once the wishcrafter grants a creature's wish using this ability, she cannot use this ability to grant that creature any further wishes for 24 hours.</Pair>
</Ability>
<Ability id="arc-sorcerer-wishcrafter-expanded-wishcraft" icon={["spell-book"]}>
<Pair single id="arc-sorcerer-wishcrafter-expanded-wishcraft" flavor="The wishcrafter grows more adept at altering reality to fit the whims of others.">Expanded Wishcraft</Pair>
<Pair hl title="Replaces">All bloodline spells</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">She may add an additional spell selected from the <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/spells_wizard">wizard</Link> spell list to her list of spells known. This spell must be one level lower than the highest-level spell she can cast.</Pair>
<Pair title="At 5th Level">She may add another spell, following the restrictions above.</Pair>
<Pair title="At 7th Level">She may add another spell, following the restrictions above.</Pair>
<Pair title="At 9th Level">She may add another spell, following the restrictions above.</Pair>
<Pair title="At 11th Level">She may add another spell, following the restrictions above.</Pair>
<Pair title="At 13th Level">She may add another spell, following the restrictions above.</Pair>
<Pair title="At 15th Level">She may add another spell, following the restrictions above.</Pair>
<Pair title="At 17th Level">She may add another spell, following the restrictions above.</Pair>
<Pair title="At 19th Level">She may add another spell, following the restrictions above.</Pair>
<Pair title="Special">A wishcrafter can only use these spells in conjunction with her <em>wishbound arcana</em> ability. For example, if she used this ability to learn <Link to="/spell/cats_grace">cat's grace</Link>, she can only cast it when another creature wishes for it, and can't cast it on herself because it is a targeted spell. She cannot use these spells to craft or recharge magic items.</Pair>
</Ability>
<Ability id="arc-sorcerer-wishcrafter-hearts-desire-su" icon={["magic-swirl"]}>
<Pair single id="arc-sorcerer-wishcrafter-hearts-desire-su">Heart's Desire (Su)</Pair>
<Pair hl title="Replaces">7th-level bloodline feat</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Usage">Charisma modifier times/day</Pair>
<Pair title="Swift Action">A wishcrafter can force a single creature within 30 feet to confess its deepest desire. The target receives a Will save to negate this effect (DC 10 + 1/2 the wishcrafter's level + the wishcrafter's Charisma modifier). On a failed save, the creature must immediately wish aloud in a clear voice for something it truly desires, allowing the wishcrafter to activate her <em>wishbound arcana</em> ability if she knows a spell that can fulfill that wish.</Pair>
<Pair title="Special">This is a mind-affecting effect. Regardless of whether the save is successful, a creature cannot be the target of the same wishcrafter's heart's desire ability again for 24 hours.</Pair>
</Ability>
<Ability id="arc-sorcerer-wishcrafter-twisted-wish-su" icon={["armor-downgrade"]}>
<Pair single id="arc-sorcerer-wishcrafter-twisted-wish-su" flavor="A wishcrafter becomes adept at corrupting wishes to negatively affect the creature that wished them.">Twisted Wish (Su)</Pair>
<Pair hl title="Replaces">13th-level bloodline feat</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">When a wishcrafter affects a creature with a spell using its wish as a spell component, she may twist the wish, applying a -4 penalty to the creature's saving throws against the spell. The effects of wishes twisted this way are difficult to remove; the DC of caster level checks to dispel them increases by 5.</Pair>
</Ability>
<Ability id="arc-sorcerer-wishcrafter-perfect-wishcraft-su" icon={["magic-swirl"]}>
<Pair single id="arc-sorcerer-wishcrafter-perfect-wishcraft-su" flavor="The wishcrafter perfects her ability to manipulate reality.">Perfect Wishcraft (Su)</Pair>
<Pair hl title="Replaces">19th-level bloodline feat</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Ability">Once per day, she may cast any spell on the sorcerer/wizard spell list as if it were on her list of spells known. Using this ability otherwise has all of the benefits and limitations of the <em>wishbound arcana</em> ability.</Pair>
</Ability>
</>};
export default {bloodline_familiars:_bloodline_familiars,crossblooded:_crossblooded,dragon_drinker:_dragon_drinker,eldritch_scrapper:_eldritch_scrapper,mongrel_mage:_mongrel_mage,nine_tailed_heir:_nine_tailed_heir,razmiran_priest:_razmiran_priest,seeker:_seeker,sorcerer_of_sleep:_sorcerer_of_sleep,stone_warder:_stone_warder,tattooed_sorcerer:_tattooed_sorcerer,umbral_scion:_umbral_scion,wishcrafter:_wishcrafter}