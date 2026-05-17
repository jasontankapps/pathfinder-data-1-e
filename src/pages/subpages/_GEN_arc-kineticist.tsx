import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _aquakinetcist = {title: "Aquakinetcist", jsx: <><h2 id="arc-kineticist-aquakinetcist-aquakinetcist">Aquakinetcist</h2>
<p><strong>Sources</strong> <Link to="/source/aquatic_adventures">Aquatic Adventures pg. 50</Link><br/>While all hydrokineticists have the ability to control water, aquakineticists' powers are tied to their determination to explore the world beneath the waves.</p>
<Ability id="arc-kineticist-aquakinetcist-aquatic-focus" icon={["info"]}>
<Pair single id="arc-kineticist-aquakinetcist-aquatic-focus">Aquatic Focus</Pair>
<Pair hl title="Alters">Expanded element</Pair>
<Pair title="Info">An aquakineticist must choose water as her primary <Link to="/ability/elements">element</Link> and for both <em>expanded elements,</em> and must choose <Link to="/kinetic/water_blast">water blast</Link> as her first simple blast.</Pair>
</Ability>
<Ability id="arc-kineticist-aquakinetcist-basis-aquakinesis-sp" icon={["magic-swirl"]}>
<Pair single id="arc-kineticist-aquakinetcist-basis-aquakinesis-sp">Basis Aquakinesis (Sp)</Pair>
<Pair hl title="Replaces">Basic hydrokinesis</Pair>
<Pair hl title="Alters">Elemental focus</Pair>
<Pair title="Ability">An aquakineticist can create mild currents, as per <Link to="/kinetic/basic_hydrokinesis">basic hydrokinesis</Link>. Additionally, she can adjust her <Link to="/rule/buoyancy">buoyancy</Link> to whatever level she wishes as a <strong className="hl">standard action</strong>, lasting until she uses basic aquakinesis again.</Pair>
</Ability>
<Ability id="arc-kineticist-aquakinetcist-call-of-the-deep" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-aquakinetcist-call-of-the-deep">Call of the Deep</Pair>
<Pair hl title="Replaces">2nd and 6th level utility wild talents</Pair>
<Pair title="At 2nd Level">An aquakineticist gains <Link to="/kinetic/waterdancer">waterdancer</Link> as a bonus utility wild talent.</Pair>
<Pair title="At 6th Level">She gains <Link to="/kinetic/watersense">watersense</Link> as a bonus utility wild talent, and she can choose to ignore the effects of <Link to="/rule/currents">currents</Link> with speeds up to 60 feet while her <em>waterdancer</em> ability is active.</Pair>
</Ability>
<Ability id="arc-kineticist-aquakinetcist-oceans-caress-su" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-kineticist-aquakinetcist-oceans-caress-su">Ocean's Caress (Su)</Pair>
<Pair hl title="Replaces">Defense wild talent from elemental defense</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">An aquakineticist can breathe underwater as easily as she breathes air, and she gains <Link to="/kinetic/cold_adaptation">cold adaptation</Link> as a bonus utility wild talent, adding half her kineticist level to her cold <Link to="/umr/resistance">resistance</Link> from cold adaptation. By accepting 1 point of burn, she can increase her cold resistance by an additional 3, stacking with the resistance she gains from cold adaptation. If her total cold resistance from this ability would ever be 40 or higher, she gains cold <Link to="/umr/immunity">immunity</Link> instead. All cold resistance and immunity from this ability also applies to <Link to="/rule/pressure_damage">pressure damage</Link>, and she <Link to="/rule/pressure">adjusts to a new pressure</Link> all at once after making five Fortitude saves, rather than 100 feet at a time. Whenever she accepts burn while using a water wild talent, the water coalescing around her doubles her cold resistance for 1 round (which might trigger cold immunity). She can dismiss or restore this effect as an <strong className="hl">immediate action</strong>.</Pair>
</Ability>
<Ability id="arc-kineticist-aquakinetcist-ice-propagation-su" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-aquakinetcist-ice-propagation-su">Ice Propagation (Su)</Pair>
<Pair hl title="Alters">Cold simple blast</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">An aquakineticist's connection to the water around her allows her greater control over the ice formed by her cold attacks. When using her cold blast underwater (which <Link to="/rule/spells">freezes water into ice</Link> and deals half piercing damage), she can make the cold blast a physical blast and apply any form or substance infusions that she could apply to an ice composite blast. This still deals damage as per a simple physical blast, not a composite blast.</Pair>
</Ability>
</>};
const _arakineticist = {title: "Arakineticist", jsx: <><h2 id="arc-kineticist-arakineticist-arakineticist">Arakineticist</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven pg. 22</Link><br/>Those of strong will who live under a dark curse long enough might learn to control and channel the corrupt energy afflicting them. <Link to="/race/changeling">Changelings</Link> who resist the call of their hag mothers are especially given to the arts of the arakineticist.</p>
<Ability id="arc-kineticist-arakineticist-living-curse" icon={["info"]}>
<Pair single id="arc-kineticist-arakineticist-living-curse">Living Curse</Pair>
<Pair title="Info">An arakineticist's curse lives within her, granting her dark powers. She must choose void as her primary <Link to="/ability/elements">element</Link> and <Link to="/kinetic/negative_blast">negative blast</Link> as her first simple blast.</Pair>
</Ability>
<Ability id="arc-kineticist-arakineticist-accursed-shadow-sp" icon={["armor-upgrade"]}>
<Pair single id="arc-kineticist-arakineticist-accursed-shadow-sp">Accursed Shadow (Sp)</Pair>
<Pair hl title="Replaces">Utility wild talent gained at 4th level</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">An arakineticist's curse casts a dark shadow over her soul, shielding her from death magic. She gains a bonus on saving throws against necromancy spells and death effects. This bonus is equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of her kineticist level.</Pair>
</Ability>
<Ability id="arc-kineticist-arakineticist-curse-spinner-sp" icon={["magic-swirl"]}>
<Pair single id="arc-kineticist-arakineticist-curse-spinner-sp" flavor="An arakineticist learns to wield her living curse like a needle to weave and unravel curses.">Curse Spinner (Sp)</Pair>
<Pair hl title="Replaces">Utility wild talents gained at 6th and 8th levels</Pair>
<Pair title="At 6th Level">An arakineticist can accept 1 point of burn to cast <Link to="/spell/remove_curse">remove curse</Link> as a spell-like ability.</Pair>
<Pair title="At 8th Level">She can accept 1 point of burn to curse a target as <Link to="/spell/bestow_curse">bestow curse</Link> as spell-like ability.</Pair>
<Pair title="Special">Both of these abilities count as 4th-level utility wild talents.</Pair>
</Ability>
<Ability id="arc-kineticist-arakineticist-accursed-infusion-su" icon={["armor-downgrade"]}>
<Pair single id="arc-kineticist-arakineticist-accursed-infusion-su">Accursed Infusion (Su)</Pair>
<Pair hl title="Replaces">Utility wild talent gained at 13th level</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">An arakineticist's blasts can temporarily curse and bedevil her foe. On a failed Will save, the target takes a -4 penalty on ability checks, attack rolls, saving throws, and skills checks for 1 round as if it were affected by <em>bestow curse.</em> A single creature can't be affected by more than one curse from this infusion at a time.</Pair>
<Pair title="Special">This is a 6th-level substance infusion that costs 4 points of burn and can be used with <em>negative</em> and <em>void blasts.</em></Pair>
</Ability>
</>};
const _blightburner = {title: "Blightburner", jsx: <><h2 id="arc-kineticist-blightburner-blightburner">Blightburner</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands pg. 25</Link><br/>Darklands geokineticists sometimes exhibit supernatural powers associated with <Link to="/eq-material/blightburn">blightburn</Link> crystals. Blightburner kineticists harness this radioactivity in pyrotechnic displays, an unusual feat for those connected to the element of earth.</p>
<Ability id="arc-kineticist-blightburner-earth-focus" icon={["info"]}>
<Pair single id="arc-kineticist-blightburner-earth-focus">Earth Focus</Pair>
<Pair hl title="Alters">Elemental focus</Pair>
<Pair title="Info">A blightburner must choose earth as her <Link to="/ability/elements">elemental</Link> focus.</Pair>
</Ability>
<Ability id="arc-kineticist-blightburner-blightburn-manipulation-su" icon={["magic-swirl"]}>
<Pair single id="arc-kineticist-blightburner-blightburn-manipulation-su" flavor="A blightburner can harness radiation for nondestructive purposes.">Blightburn Manipulation (Su)</Pair>
<Pair hl title="Replaces"><em>Basic geokinesis</em> wild talent</Pair>
<Pair title="Standard Action">A blightburner can channel blightburn radiation, causing herself to glow like a <Link to="/eq-misc/torch">torch</Link>. This effect lasts until she dismisses it as another standard action. Additionally, she can generate small amounts of heat with her hands. This radiation can slowly heat unattended objects with a touch to a warm (but not painfully hot) temperature, or cook raw meat or vegetable matter at a rate of 1 pound per minute. If used on a living creature, this ability deals 1 point of nonlethal damage per minute of contact, which manifests as reddened and blistering skin.</Pair>
</Ability>
<Ability id="arc-kineticist-blightburner-radiation-absorption-su" icon={["armor-upgrade"]}>
<Pair single id="arc-kineticist-blightburner-radiation-absorption-su">Radiation Absorption (Su)</Pair>
<Pair hl title="Replaces">Utility wild talent gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">Whenever a blightburner would take <Link to="/rule/ability_damage">ability damage</Link> from radiation, she can accept 1 point of burn to reduce the ability damage by 4 points. Any remaining ability damage is applied normally.</Pair>
</Ability>
<Ability id="arc-kineticist-blightburner-blightburn-aura-su" icon={["stairs-goal","armor-upgrade","abstract-091"]}>
<Pair single id="arc-kineticist-blightburner-blightburn-aura-su">Blightburn Aura (Su)</Pair>
<Pair hl title="Replaces">Ability score boosts granted by elemental overflow, earth's elemental defense</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A blightburner's body surges with a greenish, radioactive glow whenever she accepts burn. This energy sheds light like a <Link to="/eq-misc/candle">candle</Link>. A creature that hits the blightburner with a natural attack, unarmed strike, or non-reach melee weapon attack while she's under the effect of her <em>blightburn aura</em> takes fire damage equal to her <em>elemental overflow</em> bonus (minimum 1). By accepting 2 points of burn, she can increase this damage by an amount equal to her <em>elemental overflow</em> bonus; she can increase the damage in this way up to four times. A blightburner can temporarily suppress the visual effects of a <em>blightburn aura</em> by concentrating for 1 full round, but doing so also suppresses all of this ability's other benefits. The next time she uses a wild talent, the visual effects and benefits return instantly.</Pair>
<Pair title="At 6th Level">Whenever the blightburner has at least 3 points of burn, the <em>blightburn aura</em> expands to fill all adjacent squares. In addition to damaging creatures that hit the blightburner with melee attacks, the aura also deals damage to other creatures that end their turns within the aura.</Pair>
<Pair title="At 11th Level">Whenever the kineticist has at least 5 points of burn, the <em>blightburn aura</em> expands to a 10-foot-radius aura, and any creature that takes damage from it must also succeed at a Fortitude save (DC = 10 + half the blightburner's level + her Constitution bonus) or be <Link to="/misc/sickened">sickened</Link> for 1 round. This ability is a poison effect.</Pair>
<Pair title="At 16th Level">Whenever a blightburner has at least 7 points of burn, any creature that takes damage from the <em>blightburn aura</em> and fails its Fortitude save also become <Link to="/misc/fatigued">fatigued</Link>.</Pair>
<Pair title="Special">The blightburner can still gain elemental defenses from other elements with <em>expanded defense.</em></Pair>
</Ability>
<Ability id="arc-kineticist-blightburner-radiation-resistance-su" icon={["armor-upgrade","upgrade","broken-shield"]}>
<Pair single id="arc-kineticist-blightburner-radiation-resistance-su">Radiation Resistance (Su)</Pair>
<Pair hl title="Alters">Gather power, internal buffer</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A blightburner becomes resistant to all forms of radiation, and can use the radiation's energy as gathered power. She gains a bonus on saving throws to resist the effects of radiation equal to her <em>elemental overflow</em> bonus. When she succeeds at a save against radiation, she can reduce the total burn cost of a blast wild talent used before the end of her next turn as if she had gathered power with a move action. Once she gains this benefit, she can't do so again for 1 minute, even if she's exposed to radiation again before that. She can't use this ability if she's immune to poison or radiation.</Pair>
<Pair title="At 11th Level">A blightburner gains an <em>internal buffer</em> at 11th level, and it has a capacity as if she were 5 levels lower.</Pair>
</Ability>
</>};
const _blighted_defiler = {title: "Blighted Defiler", jsx: <><h2 id="arc-kineticist-blighted_defiler-blighted-defiler">Blighted Defiler</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 62</Link><br/>A few kineticists have developed the ability to steal the life force from the surrounding land in order to infuse themselves with unnatural strength beyond their bodies' normal capabilities.</p>
<Ability id="arc-kineticist-blighted_defiler-alignment" icon={["hazard-sign"]}>
<Pair single id="arc-kineticist-blighted_defiler-alignment">Alignment</Pair>
<Pair hl title="Alters">Alignment</Pair>
<Pair title="Info">Blighted defilers must be evil in order to use <em>steal power,</em> since defiling the land and reaping the vulnerable for power is a particularly vile act. Nonevil blighted defilers can continue to gain kineticist levels and use their other abilities.</Pair>
</Ability>
<Ability id="arc-kineticist-blighted_defiler-steal-power-su" icon={["magic-swirl"]}>
<Pair single id="arc-kineticist-blighted_defiler-steal-power-su">Steal Power (Su)</Pair>
<Pair hl title="Alters">Gather power</Pair>
<Pair title="Usage">Strength modifier times/day</Pair>
<Pair title="Ability"><p>A blighted defiler can draw energy from the surrounding land to <em>gather power,</em> gaining one of the three following benefits.</p>
<ol>
<li>She can increase the burn reduction from <em>gather power</em> by 1 for a blast wild talent.</li>
<li>Alternatively, she can use <em>gather power</em> to reduce the cost of a defense, infusion, or utility wild talent by 1, regardless of whether she <em>gathers power</em> for longer or has abilities that increase the burn reduction from <em>gather power.</em></li>
<li>Finally, she can siphon the energy into healing herself, recovering 2 hit points per kineticist level.</li>
</ol>
<p>When a blighted defiler uses <em>steal power,</em> she afflicts the area within a radius of 250 feet per kineticist level (maximum 5,000 feet at 20th level) by stunting plants as the stunt growth option from <Link to="/spell/diminish_plants">diminish plants</Link>, weakening and killing minor wildlife (creatures too small or insignificant to themselves have statistics), and reducing the rate of live birth among the other surviving creatures in the area. If a blighted defiler uses <em>steal power</em> in an area that overlaps a previous use of her <em>steal power</em> within the same month, she expends a daily use and the remaining area is still blighted as above, but she doesn't gain any benefits. <em>Steal power</em> doesn't work in barren landscapes, the void of space, or other places without enough life to steal.</p>
</Pair>
</Ability>
<Ability id="arc-kineticist-blighted_defiler-elemental-might-ex" icon={["info","upgrade","broken-shield"]}>
<Pair single id="arc-kineticist-blighted_defiler-elemental-might-ex">Elemental Might (Ex)</Pair>
<Pair hl title="Alters">The key ability score of wild talents, elemental overflow</Pair>
<Pair title="Info"><p>A blighted defiler uses her Strength modifier instead of her Constitution modifier to determine her damage with wild talents, the DCs of Constitution-based wild talents, the durations of wild talents with Constitution-based durations, her bonus on <Link to="/rule/concentration">concentration</Link> checks for wild talents, and other Constitution-based effects of her wild talents. She can't use abilities to substitute her Strength modifier for another ability score when determining damage from wild talents.</p>
<p>A blighted defiler gains attack and damage bonuses from <em>elemental overflow</em> based on her current burn total + the number of times she successfully used <em>steal power</em> that day. For instance, a 9th-level blighted defiler who used <em>steal power</em> twice and had 1 point of burn would add a +3 bonus on attack rolls and a +6 bonus on damage rolls. A blighted defiler does not gain size bonuses to physical ability scores or a chance to ignore critical hits and sneak attacks from <em>elemental overflow.</em></p>
</Pair>
</Ability>
<Ability id="arc-kineticist-blighted_defiler-life-buffer-su" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-blighted_defiler-life-buffer-su">Life Buffer (Su)</Pair>
<Pair hl title="Replaces">Internal buffer</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A blighted defiler gains a <em>buffer</em> she can use to store life potential from healthy areas in order to use it later. She must use <em>steal power</em> on a healthy area and take none of the three usual benefits, and this doesn't count as a use of <em>steal power</em> for elemental might or stolen strength. This grants her <em>buffer</em> 1 life point. When using <em>steal power,</em> she can spend 1 life point to gain the benefits even in an area she already blighted that month. Life points remain in the <em>buffer</em> until she spends them.</Pair>
<Pair title="At 6th Level">The <em>buffer</em> can hold a maximum of 1 life point.</Pair>
<Pair title="At 11th Level">It can now hold 2 life points.</Pair>
<Pair title="At 16th Level">It can now hold 3 life points.</Pair>
</Ability>
<Ability id="arc-kineticist-blighted_defiler-stolen-strength-su" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-kineticist-blighted_defiler-stolen-strength-su">Stolen Strength (Su)</Pair>
<Pair hl title="Replaces">Elemental defense</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A blighted defiler gains the ability to collect unused portions of the life she's stolen throughout the day to bolster herself. After the third time she successfully uses <em>steal power</em> in a given day, she gains a +2 size bonus to Strength and to either Dexterity or Constitution until she recovers uses of <em>steal power.</em></Pair>
<Pair title="At 11th Level">After the fifth time the blighted defender successfully uses <em>steal power</em> in a day, she instead gains a +4 size bonus to Strength and a +2 size bonus to Dexterity and Constitution, and she can use the life energy to increase her size category by one (to a maximum of Large).</Pair>
<Pair title="At 16th Level">After the seventh time the blighted defender successfully uses <em>steal power</em> in a day, her size bonuses increase to +6 to Strength, +4 to either Dexterity or Constitution, and +2 to the remaining ability score, and she can also grow to Huge.</Pair>
<Pair title="At 20th Level">After the 9th time she successfully uses <em>steal power</em> in a day, she can also grow to Gargantuan.</Pair>
<Pair title="Special">All of these size increases function as <Link to="/kinetic/kinetic_form">kinetic form</Link>, meaning they don't change her ability scores in any way. A blighted defiler can never gain an elemental defense, even from <em>expanded defense.</em></Pair>
</Ability>
<Ability id="arc-kineticist-blighted_defiler-steal-life-su" icon={["smoking-finger"]}>
<Pair single id="arc-kineticist-blighted_defiler-steal-life-su">Steal Life (Su)</Pair>
<Pair hl title="Replaces">Omnikinesis</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A blighted defiler who successfully uses <em>steal power</em> when <em>gathering power</em> as a move action can use a <strong className="hl">standard action</strong> on the same turn and choose a living creature within 30 feet. The creature must succeed at a Fortitude save (DC = 20 + the blighted defiler's Strength modifier) or die; this is a death effect. If the creature dies and was CR 10 or higher, on the blighted defiler's next turn, she counts as if she had used a full round to <em>gather power</em> with <em>steal power.</em> If the target survives or was lower than CR 10, she loses all benefits from both her <em>gather power</em> and <em>steal power,</em> as normal at the end of her turn.</Pair>
</Ability>
</>};
const _blood_kineticist = {title: "Blood Kineticist", jsx: <><h2 id="arc-kineticist-blood_kineticist-blood-kineticist">Blood Kineticist</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 88</Link><br/>To a blood kineticist, the water in a creature's blood is just like any other sort, and she uses that knowledge to brutal ends.</p>
<Ability id="arc-kineticist-blood_kineticist-blood-focus-ex" icon={["info","hazard-sign"]}>
<Pair single id="arc-kineticist-blood_kineticist-blood-focus-ex">Blood Focus (Ex)</Pair>
<Pair title="Info">A blood kineticist must choose water as her primary <Link to="/ability/elements">element</Link> and must choose <Link to="/kinetic/water_blast">water blast</Link> as her first simple blast. All of her infusions granted by this archetype work only on targets with blood and automatically fail if the target is immune to <Link to="/rule/bleed">bleed</Link> damage.</Pair>
</Ability>
<Ability id="arc-kineticist-blood_kineticist-wrack-su" icon={["smoking-finger"]}>
<Pair single id="arc-kineticist-blood_kineticist-wrack-su">Wrack (Su)</Pair>
<Pair hl title="Replaces">The 1st-level infusion</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A blood kineticist can use her abilities to wrack a target within 30 feet, harming the target by manipulating its blood from the inside. The target takes half the normal damage of the blood kineticist's blast, and can attempt a Fortitude save to reduce that amount to 1/4 normal damage, but the damage is untyped and ignores damage reduction.</Pair>
<Pair title="Special">This is a 1st-level form infusion that costs 0 points of burn and can be used with water and blood blasts.</Pair>
</Ability>
<Ability id="arc-kineticist-blood_kineticist-bleeding-infusion-su" icon={["upgrade"]}>
<Pair single id="arc-kineticist-blood_kineticist-bleeding-infusion-su">Bleeding Infusion (Su)</Pair>
<Pair hl title="Replaces">The 5th-level infusion</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A blood kineticist can infuse her blasts with a vicious power that causes internal or external bleeding. On a failed Fortitude save, the target takes 1 point of bleed damage for every die of the blast's damage. A target that fails its saving throw against the wrack form infusion does not receive a saving throw to avoid the bleed damage from bleeding infusion on the same blast.</Pair>
<Pair title="Special">This is a 2nd-level substance infusion that costs 2 points of burn and can be used with water and blood blasts.</Pair>
</Ability>
<Ability id="arc-kineticist-blood_kineticist-blood-tell-sp" icon={["magic-swirl"]}>
<Pair single id="arc-kineticist-blood_kineticist-blood-tell-sp">Blood Tell (Sp)</Pair>
<Pair hl title="Replaces">The 6th-level utility wild talent</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A blood kineticist's connection to blood allows her to learn much from the blood of another. This works as <Link to="/spell/blood_biography">blood biography</Link>, except the blood kineticist suddenly knows the information, rather than having it appear on a parchment.</Pair>
<Pair title="Special">This is a 3rd-level utility wild talent and costs 0 points of burn. She can accept 1 point of burn to reduce the casting time to a <strong className="hl">standard action</strong> instead of 1 minute.</Pair>
</Ability>
<Ability id="arc-kineticist-blood_kineticist-blood-blast-su" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-blood_kineticist-blood-blast-su">Blood Blast (Su)</Pair>
<Pair hl title="Alters">Expanded element</Pair>
<Pair title="Info">The first time a blood kineticist selects water with <em>expanded element,</em> she doesn't gain the <Link to="/kinetic/cold_blast">cold simple blast</Link> or the <Link to="/kinetic/ice_blast">ice composite blast</Link>; instead, she gains the <em>blood composite blast,</em> which costs 2 points of burn. A <em>blood blast</em> is a physical blast that deals bludgeoning damage. It is associated with the same infusions as the <em>water blast.</em> If the blood kineticist selects water with <em>expanded element</em> a second time, she gains the <em>cold blast</em> and <em>ice blast</em> as normal.</Pair>
</Ability>
<Ability id="arc-kineticist-blood_kineticist-blood-throw-su" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-blood_kineticist-blood-throw-su">Blood Throw (Su)</Pair>
<Pair hl title="Replaces">The 8th-level utility wild talent</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A blood kineticist gains the <Link to="/kinetic/foe_throw">foe throw</Link> infusion as a bonus infusion, and can use it with the water element on water and blood blasts, in addition to its normal associated element and blast.</Pair>
</Ability>
<Ability id="arc-kineticist-blood_kineticist-gut-wrenching-infusion-su" icon={["armor-downgrade"]}>
<Pair single id="arc-kineticist-blood_kineticist-gut-wrenching-infusion-su">Gut-Wrenching Infusion (Su)</Pair>
<Pair hl title="Replaces">The 9th-level infusion</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A blood kineticist can infuse her blasts with the ability to manipulate her opponent's insides to the point of impairing their function. On a failed Fortitude save, the target is <Link to="/misc/sickened">sickened</Link> for 1 minute. A target that fails its saving throw against the wrack form infusion does not receive a saving throw to avoid the sickened condition from <em>gut-wrenching infusion</em> on the same blast.</Pair>
<Pair title="Special">This is a 4th-level substance infusion that costs 3 points of burn and can be used with water and blood blasts.</Pair>
</Ability>
<Ability id="arc-kineticist-blood_kineticist-vampiric-infusion-su" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-blood_kineticist-vampiric-infusion-su">Vampiric Infusion (Su)</Pair>
<Pair hl title="Replaces">The 11th-level infusion</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A blood kineticist can drain the vitality from her enemy's blood to restore her own. If her blast hits (or the enemy fails its saving throw against a blast without an attack roll) the blood kineticist can activate the <Link to="/kinetic/kinetic_healer">kinetic healer</Link> utility wild talent on herself by accepting its burn cost; she doesn't need to take an action to do so. If she doesn't possess the <em>kinetic healer</em> utility wild talent, she can still use this ability, but it heals only half as much.</Pair>
<Pair title="Special">This is a 5th-level substance infusion that costs 3 points of burn and can be used with water and blood blasts.</Pair>
</Ability>
<Ability id="arc-kineticist-blood_kineticist-blood-mastery-su" icon={["armor-upgrade"]}>
<Pair single id="arc-kineticist-blood_kineticist-blood-mastery-su">Blood Mastery (Su)</Pair>
<Pair hl title="Replaces">Omnikinesis</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">A blood kineticist no longer ages and can't be magically aged. She doesn't take penalties to her ability scores for <Link to="/rule/aging">aging</Link> and removes any such penalties she already possesses. She still accrues age bonuses as normal, but she doesn't die of old age when her time would be up. Because of her utter control over her own blood, she is immune to bleed, injected poisons, injury diseases, and the sickened and <Link to="/misc/nauseated">nauseated</Link> conditions unless she chooses to be affected.</Pair>
</Ability>
</>};
const _cinderlands_adept = {title: "Cinderlands Adept", jsx: <><h2 id="arc-kineticist-cinderlands_adept-cinderlands-adept">Cinderlands Adept</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 28</Link><br/>Among the Sun Clan's most noted champions are those who can tame the flames and bend them to their will. These kineticists are skilled riders, able to wield both weapons and fire with deadly skill.</p>
<Ability icon={["skills"]} id="arc-kineticist-cinderlands_adept-undefined">
<Pair id="arc-kineticist-cinderlands_adept-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/handle_animal">Handle Animal</Link> (CHA), <Link to="/skill/ride">Ride</Link> (DEX)</Pair>
<Pair title="Removed Skills">Stealth, Use Magic Device</Pair></Ability>
<Ability id="arc-kineticist-cinderlands_adept-fire-focus-su" icon={["info"]}>
<Pair single id="arc-kineticist-cinderlands_adept-fire-focus-su">Fire Focus (Su)</Pair>
<Pair hl title="Alters">Elemental focus, expanded element</Pair>
<Pair title="Info">When a Cinderlands adept gains <em>elemental focus,</em> she must select fire (pyrokinesis) as her chosen <Link to="/ability/elements">element</Link>. When she gains the <em>expanded element</em> class feature at 7th and 15th levels, she must select her primary element of fire and does not learn to use a new element.</Pair>
</Ability>
<Ability id="arc-kineticist-cinderlands_adept-galloping-siphon-su" icon={["stairs-goal","upgrade","armor-upgrade"]}>
<Pair single id="arc-kineticist-cinderlands_adept-galloping-siphon-su">Galloping Siphon (Su)</Pair>
<Pair hl title="Replaces">Infusion gained at 1st level</Pair>
<Pair hl title="Alters">Gather power</Pair>
<Pair title="Ability">A Cinderlands adept gains <Link to="/feat/mounted_combat">Mounted Combat</Link> as a bonus feat and a bonus on <Link to="/rule/concentration">concentration</Link> checks due to riding. This bonus is equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of her kineticist level.</Pair>
<Pair title="Passive Ability">When a Cinderlands adept <em>gathers power</em> while mounted, she and her mount gain fire <Link to="/umr/resistance">resistance</Link> 5 for a number of rounds equal to the total value of the burn cost she reduces. The Cinderlands adept and her mount lose this resistance if she dismounts before the duration ends.</Pair>
<Pair title="At 11th Level">The resistance granted increases to fire resistance 10.</Pair>
</Ability>
<Ability id="arc-kineticist-cinderlands_adept-mount" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-cinderlands_adept-mount">Mount</Pair>
<Pair hl title="Replaces">Utility wild talents gained at 4th, 8th, and 12th levels</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A Cinderlands adept gains a loyal mount. This ability functions like the <Link to="/class/druid">druid's</Link> <Link to="/sidekick/animal_companion">animal companion</Link> ability (as described in the <em>nature bond</em> class feature), except that the Cinderlands adept always gains a <Link to="/companion/horse">horse</Link> or <Link to="/companion/pony">pony</Link> (though she can gain additional options at the GM's discretion) and her effective druid level is equal to her cinterlands adept level - 3.</Pair>
</Ability>
</>};
const _dark_elementalist = {title: "Dark Elementalist", jsx: <><h2 id="arc-kineticist-dark_elementalist-dark-elementalist">Dark Elementalist</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 56</Link><br/>Some kineticists who are loathe to suffer the consequences of channeling their power study the darkest esoteric energies of the planes and use souls to fuel their occult might. The spiritual tortures these dark elementalists inflict upon their victims' souls are horrifically selfish acts on par with the actions of <Link to="/family/daemon">daemons</Link>.</p>
<Ability id="arc-kineticist-dark_elementalist-alignment" icon={["hazard-sign"]}>
<Pair single id="arc-kineticist-dark_elementalist-alignment">Alignment</Pair>
<Pair title="Info">Since harming souls is a wicked act, a dark elementalist must be of an evil alignment. If she becomes nonevil, she can't use any of her dark elementalist abilities other than <em>dark studies,</em> though she can still use her other kineticist class features.</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-kineticist-dark_elementalist-undefined">
<Pair id="arc-kineticist-dark_elementalist-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT)</Pair></Ability>
<Ability id="arc-kineticist-dark_elementalist-dark-studies" icon={["armor-upgrade","broken-shield","info"]}>
<Pair single id="arc-kineticist-dark_elementalist-dark-studies">Dark Studies</Pair>
<Pair hl title="Alters">Base saving throws, the key ability score of wild talents</Pair>
<Pair title="Passive Ability">A dark elementalist's base Will save bonus from the kineticist class is equal to 2 + 1/2 her kineticist level, and her base Reflex and Fortitude save bonuses are equal to <Link to="/misc/one_third">one-third</Link> of her kineticist level.</Pair>
<Pair title="Info">A dark elementalist uses her Intelligence modifier instead of her Constitution modifier to determine her damage with wild talents, the DCs of Constitution-based wild talents, the durations of wild talents with Constitution-based durations, her bonus on <Link to="/rule/concentration">concentration</Link> checks for wild talents, and any other Constitution-based effects of all her wild talents.</Pair>
</Ability>
<Ability id="arc-kineticist-dark_elementalist-soul-power" icon={["armor-upgrade","magic-swirl","upgrade","broken-shield"]}>
<Pair single id="arc-kineticist-dark_elementalist-soul-power">Soul Power</Pair>
<Pair hl title="Replaces">Internal buffer</Pair>
<Pair hl title="Alters">Burn, elemental overflow</Pair>
<Pair title="Ability"><p>A dark elementalist uses the souls of others to protect herself from the dangers of burn. She can't choose to accept burn if doing so would raise her total number of points of burn above 3. However, a number of times per day equal to her Intelligence modifier, as a <strong className="hl">full-round action</strong> she can gather up the soul of a sentient creature with a CR equal to or higher than her character level, as long as that creature died in the past minute. When she does, some of her existing burn is unloaded into the departing soul, racking it with unspeakable torment, but reducing her current burn total by 1 point. A soul used in this way cannot be brought back to life as if it died of a death effect. Using a soul like this doesn't heal the nonlethal damage from that point of burn immediately, but does enable the dark elementalist to heal the nonlethal damage from that point of burn normally.</p>
<p>A dark elementalist gains attack and damage bonuses from <em>elemental overflow</em> based on how many times that day she has used <em>soul power</em> to rack a soul, rather than based on her current burn total. For instance, a 9th-level dark elementalist who used <em>soul power</em> to rack three or more souls during the course of the day would add a +3 bonus on attack rolls and a +6 bonus on damage rolls. A dark elementalist does not gain size bonuses to physical ability scores or a chance to ignore critical hits and sneak attacks from <em>elemental overflow.</em></p>
</Pair>
<Pair title="At 6th Level">Racking a soul in this way forces anyone trying to bring the creature back to life to succeed at a caster level check (DC = 10 + the dark elementalist's kineticist level) or the attempt fails.</Pair>
<Pair title="At 11th Level">Even if the creature returns from the dead, its racked soul is so damaged by the agony that it takes 2d6 points of <Link to="/rule/wisdom_damage">Wisdom damage</Link> (or 3d10 points of sanity damage if using the <Link to="/rule/sanity">sanity system</Link>).</Pair>
<Pair title="At 16th Level">The racked soul is destroyed in the process, and the creature can be restored only by a <Link to="/spell/miracle">miracle</Link> or <Link to="/spell/wish">wish</Link>.</Pair>
</Ability>
</>};
const _elemental_annihilator = {title: "Elemental Annihilator", jsx: <><h2 id="arc-kineticist-elemental_annihilator-elemental-annihilator">Elemental Annihilator</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 89</Link><br/>For some kineticists, nothing in life is as sweet as destruction and pain. Elemental annihilators pursue only uses of their powers that harm others.</p>
<Ability id="arc-kineticist-elemental_annihilator-devastating-infusion-su" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-elemental_annihilator-devastating-infusion-su">Devastating Infusion (Su)</Pair>
<Pair hl title="Alters">1st-level infusion, the basic utility wild talent normally granted by selecting an <Link to="/ability/elements">element</Link></Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An elemental annihilator can either shoot her kinetic blast at a target within 30 feet or make a single melee attack as if she were using <Link to="/kinetic/kinetic_blade">kinetic blade</Link> as an attack action. For this attack, the elemental annihilator's base attack bonus from her kineticist levels is equal to her full kineticist level. A <em>devastating infusion</em> always deals an amount of damage equal to 1d8 + the elemental annihilator's Constitution modifier, regardless of the annihilator's class level or use of composite blasts. When making a melee attack with <em>devastating infusion,</em> the elemental annihilator doesn't provoke attacks of opportunity, and if she uses two hands, the attack's damage is equal to 1d8 + 1-1/2 times her Constitution modifier. This is a 1st-level form infusion that costs 0 points of burn and can be used with any physical blast (but not energy blasts). Unlike with <em>kinetic blade,</em> the elemental annihilator can use <Link to="/feat/vital_strike">Vital Strike</Link> with <em>devastating infusion.</em> The damage bonus from <em>elemental overflow</em> doesn't apply to <em>devastating infusion's</em> damage rolls.</Pair>
</Ability>
<Ability id="arc-kineticist-elemental_annihilator-dampened-versatility-ex" icon={["broken-shield"]}>
<Pair single id="arc-kineticist-elemental_annihilator-dampened-versatility-ex">Dampened Versatility (Ex)</Pair>
<Pair title="Info">An elemental annihilator can never gain utility wild talents.</Pair>
</Ability>
<Ability id="arc-kineticist-elemental_annihilator-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-elemental_annihilator-bonus-feats">Bonus Feats</Pair>
<Pair hl title="Replaces">2nd-, 8th-, 10th-, 14th-, and 18th-level utility wild talents</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">An elemental annihilator can select a bonus feat from the following list: <Link to="/feat/deadly_aim">Deadly Aim</Link>, <Link to="/feat/double_slice">Double Slice</Link>, <Link to="/feat/point_blank_shot">Point-Blank Shot</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/precise_shot">Precise Shot</Link>, <Link to="/feat/rapid_shot">Rapid Shot</Link>, <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link>, <Link to="/feat/weapon_finesse">Weapon Finesse</Link>, and <Link to="/feat/weapon_focus">Weapon Focus</Link>. Rapid Shot and Two-Weapon Fighting can be used with a kinetic blast only if the annihilator also possesses <em>flurry of devastation</em> (see below).</Pair>
<Pair title="At 8th Level">She gains an additional bonus feat. Her potential choices now include <Link to="/feat/improved_two_weapon_fighting">Improved Two-Weapon Fighting</Link> and <Link to="/feat/weapon_specialization">Weapon Specialization</Link>.</Pair>
<Pair title="At 10th Level">She gains an additional bonus feat. She can also select from <Link to="/feat/greater_weapon_focus">Greater Weapon Focus</Link>, <Link to="/feat/improved_critical">Improved Critical</Link>, <Link to="/feat/improved_precise_shot">Improved Precise Shot</Link>, and <Link to="/feat/two_weapon_rend">Two-Weapon Rend</Link>.</Pair>
<Pair title="At 14th Level">She gains an additional bonus feat.</Pair>
<Pair title="At 18th Level">She gains an additional bonus feat.</Pair>
<Pair title="Special">An elemental annihilator doesn't need to meet the prerequisites for these feats to select them as bonus feats.</Pair>
</Ability>
<Ability id="arc-kineticist-elemental_annihilator-increased-range-su" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-elemental_annihilator-increased-range-su">Increased Range (Su)</Pair>
<Pair hl title="Replaces">3rd- and 9th-level infusions</Pair>
<Pair title="At 3rd Level">An elemental annihilator gains the <Link to="/kinetic/extended_range">extended range</Link> infusion.</Pair>
<Pair title="At 9th Level">She gains the <Link to="/kinetic/extreme_range">extreme range</Link> infusion.</Pair>
</Ability>
<Ability id="arc-kineticist-elemental_annihilator-ever-present-threat-su" icon={["mailed-fist"]}>
<Pair single id="arc-kineticist-elemental_annihilator-ever-present-threat-su">Ever-Present Threat (Su)</Pair>
<Pair hl title="Replaces">4th-level utility wild talent</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">An elemental annihilator threatens all foes within her natural reach. If anyone provokes an attack of opportunity from her, she can form her melee <em>devastating infusion</em> and make the attack, after which the weapon disappears.</Pair>
</Ability>
<Ability id="arc-kineticist-elemental_annihilator-blast-training-ex" icon={["upgrade"]}>
<Pair single id="arc-kineticist-elemental_annihilator-blast-training-ex">Blast Training (Ex)</Pair>
<Pair hl title="Replaces">5th-level infusion</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">An elemental annihilator gains a +1 bonus on attack rolls and damage rolls with her <em>devastating infusion</em> form infusion.</Pair>
<Pair title="At 9th Level">This bonus becomes +2.</Pair>
<Pair title="At 13th Level">This bonus increases to +3.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-kineticist-elemental_annihilator-flurry-of-devastation-su" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-elemental_annihilator-flurry-of-devastation-su">Flurry of Devastation (Su)</Pair>
<Pair hl title="Replaces">6th-, 12th-, and 16th level utility wild talents</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">An elemental annihilator can make a full attack of <em>devastating infusions</em> against targets within 120 feet as a full-attack action. Each individual attack deals damage as a <em>devastating infusion.</em> This is a 3rd-level form infusion that costs 1 point of burn and can be used with the same blast types as <em>devastating infusion.</em> Abilities such as Rapid Shot and <Link to="/spell/haste">haste</Link> that grant additional attacks apply normally to this full attack. If she makes only melee attacks with her <em>flurry of devastation,</em> she can use the Two-Weapon Fighting feats (unlike with the <em>kinetic blade</em> wild talent), but ranged <em>devastating infusions</em> do not work with Two-Weapon Fighting. For the elemental annihilator's off-hand attacks with Two-Weapon Fighting, she adds half her Constitution modifier to the damage (increasing to her full Constitution modifier if she has Double Slice). Though she can normally mix melee and ranged attacks with her <em>flurry of devastation,</em> she can't do so when she uses Two-Weapon Fighting. She can never use <em>metakinesis</em> or substance infusions with <em>flurry of devastation.</em></Pair>
</Ability>
<Ability id="arc-kineticist-elemental_annihilator-omnicide-su" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-elemental_annihilator-omnicide-su">Omnicide (Su)</Pair>
<Pair hl title="Replaces">Omnikinesis, 20th-level utility wild talent</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">An elemental annihilator can unleash <em>omnicide,</em> a unique physical composite blast. <em>Omnicide</em> deals 10d6+10 points of bludgeoning damage, 10d6+10 points of cold damage, 10d6+10 points of electricity damage, 10d6+10 points of fire damage, and 10d6+10 points of force damage, and counts as a blast of all five elements.<sup><InnerLink showBacklink="backlink-arc-kineticist-elemental_annihilator-fake-fn-1" id="arc-kineticist-elemental_annihilator-fake-fn-1" data-hash-target to="arc-kineticist-elemental_annihilator-fake-fn-1-target">1</InnerLink></sup> <em>Omnicide</em> costs 4 points of burn, which can be reduced by <em>composite specialization</em> as normal.</Pair>
</Ability>
<section data-footnotes><h3 id="arc-kineticist-elemental_annihilator-label">Footnotes</h3><ol>
<li id="arc-kineticist-elemental_annihilator-fake-fn-1-target"><p>This archetype was published before the void and wood elements were created. consult your GM if you want to master those elements, too. <InnerLink aria-label="Back to reference 1" id="backlink-arc-kineticist-elemental_annihilator-fake-fn-1" data-hash-target to="arc-kineticist-elemental_annihilator-fake-fn-1">↩</InnerLink></p></li>
</ol></section></>};
const _elemental_ascetic = {title: "Elemental Ascetic", jsx: <><h2 id="arc-kineticist-elemental_ascetic-elemental-ascetic">Elemental Ascetic</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 90</Link><br/>Combining the elemental powers of a kineticist with the rigid physical discipline of a monk, an elemental ascetic channels his powers through his body to enhance himself in combat.</p>
<Ability id="arc-kineticist-elemental_ascetic-elemental-flurry-su" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-elemental_ascetic-elemental-flurry-su">Elemental Flurry (Su)</Pair>
<Pair hl title="Replaces">Elemental overflow</Pair>
<Pair hl title="Alters">Kinetic blast</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An elemental ascetic gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat. He gains the <Link to="/kinetic/kinetic_fist">kinetic fist</Link> form infusion and it costs 0 points of burn instead of 1 point of burn. When using the <em>kinetic fist</em> form infusion with a full attack, he can make a <em>flurry of blows</em> as the <Link to="/class/monk">monk</Link> class feature. He must use only his fists to make this flurry, no matter what other abilities he possesses. Like a monk, he can use this ability only when unarmored, not using a shield, and unencumbered. He can't use his kinetic blast without a form infusion, nor can he ever use his kinetic blast with the <Link to="/kinetic/chain">chain</Link>, <Link to="/kinetic/extended_range">extended range</Link>, <Link to="/kinetic/extreme_range">extreme range</Link>, <Link to="/kinetic/foe_throw">foe throw</Link>, <Link to="/kinetic/flurry_of_blasts">flurry of blasts</Link>, <Link to="/kinetic/many_throw">many throw</Link>, or <Link to="/kinetic/snake">snake</Link> form infusions, or with any other form infusion that requires a ranged attack roll or ranged touch attack roll.</Pair>
</Ability>
<Ability id="arc-kineticist-elemental_ascetic-elemental-wisdom-su" icon={["info"]}>
<Pair single id="arc-kineticist-elemental_ascetic-elemental-wisdom-su">Elemental Wisdom (Su)</Pair>
<Pair hl title="Alters">Key ability scores of wild talents</Pair>
<Pair title="Choice">An elemental ascetic can use his Wisdom modifier instead of his Constitution modifier to determine the DCs of Constitution-based wild talents, the duration of wild talents with a Constitution-based duration, and his bonus on <Link to="/rule/concentration">concentration</Link> checks for wild talents.</Pair>
</Ability>
<Ability id="arc-kineticist-elemental_ascetic-ac-bonus-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-kineticist-elemental_ascetic-ac-bonus-ex">AC Bonus (Ex)</Pair>
<Pair hl title="Replaces">Elemental defense</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">When unarmored, not using a shield, and unencumbered, an elemental ascetic adds his Wisdom bonus (if any) to his AC and his CMD. These bonuses to AC apply even against touch attacks or when the elemental ascetic is <Link to="/rule/flat_footed">flat-footed</Link>. He loses these bonuses when he is immobilized or helpless.</Pair>
<Pair title="Special">This bonus increases by 1 for every 4 kineticist levels the elemental ascetic possesses beyond 2nd. The elemental ascetic's kineticist levels stack with monk levels for the purpose of determining when the bonus increases. An elemental ascetic can never take the <Link to="/kinetic/expanded_defense">expanded defense</Link> utility wild talent.</Pair>
</Ability>
<Ability id="arc-kineticist-elemental_ascetic-powerful-fist-su" icon={["upgrade"]}>
<Pair single id="arc-kineticist-elemental_ascetic-powerful-fist-su">Powerful Fist (Su)</Pair>
<Pair hl title="Replaces">5th-, 9th-, and 13th-level infusions</Pair>
<Pair title="At 5th Level">An elemental ascetic can accept 2 additional points of burn when using <em>kinetic fist</em> to increase that infusion's damage dice from d6s to d8s.</Pair>
<Pair title="At 9th Level">He can instead accept 3 additional points of burn to increase the damage dice from d6s to d10s.</Pair>
<Pair title="At 13th Level">He can instead accept 4 additional points of burn to increase the damage dice from d6s to d12s.</Pair>
<Pair title="Special">All of these options count as burn from a form infusion and can thus be reduced by <em>infusion specialization.</em></Pair>
</Ability>
</>};
const _elemental_purist = {title: "Elemental Purist", jsx: <><h2 id="arc-kineticist-elemental_purist-elemental-purist">Elemental Purist</h2>
<p><strong>Sources</strong> <Link to="/source/planes_of_power">Planes of Power pg. 7</Link><br/>An elemental purist spurns all elements that are not her own, for utter devotion can allow one to accomplish even seemingly impossible heroics.</p>
<Ability id="arc-kineticist-elemental_purist-limited-buffer-su" icon={["broken-shield"]}>
<Pair single id="arc-kineticist-elemental_purist-limited-buffer-su">Limited Buffer (Su)</Pair>
<Pair title="Info">An elemental purist does not gain <em>internal buffer</em> at 6th level. She instead gains <em>internal buffer</em> at 11th level and treats her kineticist level as 5 lower for the purpose of the ability.</Pair>
</Ability>
<Ability id="arc-kineticist-elemental_purist-elemental-impossibility-su" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-elemental_purist-elemental-impossibility-su">Elemental Impossibility (Su)</Pair>
<Pair hl title="Replaces">Expanded element, 11th- and 19th-level infusions</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">An elemental purist learns one composite blast as if she had an <em>expanded element</em> that matched her primary <Link to="/ability/elements">element</Link>. In addition, she learns one "impossible infusion" - a form infusion or substance infusion that does not need to be associated with her primary element's type. If the infusion can be applied to her kinetic blasts normally, she can use it as normal. If the infusion is not an associated infusion, she can accept 1 point of burn as a <strong className="hl">free action</strong> to enter a state of <em>elemental impossibility</em> for one minute. This burn cannot be reduced in any way. While in this state, she can apply her <em>impossible infusions</em> to her kinetic blast, even if it is not an associated infusion for the blast type; however, if an infusion can be applied only to energy blasts or only to physical blasts, she can apply it only to a kinetic blast of that type.</Pair>
<Pair title="At 11th Level">The elemental purist learns one additional <em>impossible infusion.</em></Pair>
<Pair title="At 15th Level">The elemental purist learns one additional <em>impossible infusion.</em></Pair>
<Pair title="At 19th Level">The elemental purist learns one additional <em>impossible infusion.</em></Pair>
</Ability>
<Ability id="arc-kineticist-elemental_purist-elemental-apocalypse-su" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-elemental_purist-elemental-apocalypse-su">Elemental Apocalypse (Su)</Pair>
<Pair hl title="Replaces">Omnikinesis</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">An elemental purist learns the <em>apocalypse</em> universal form infusion (<strong>Level</strong> 9; <strong>Burn</strong> 5; <strong>Associated Blasts</strong> any; <strong>Saving Throw</strong> Reflex half) that she can use once per day. The <em>apocalypse</em> form infusion functions as the <Link to="/kinetic/explosion">explosion</Link> form infusion, except the elemental purist can center the spread anywhere she can see within 1 mile, and she can choose to set the radius anywhere between 5 feet and 360 feet.</Pair>
</Ability>
</>};
const _elysiokineticist = {title: "Elysiokineticist", jsx: <><h2 id="arc-kineticist-elysiokineticist-elysiokineticist">Elysiokineticist</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 18</Link><br/>Similar to how phytokineticists draw their power from the First World, elysiokineticists trace their abilities to the riotous wilderness of the plane known as Elysium. Many such kineticists vow to fight against evil planar intrusions into the Material Plane, particularly the Worldwound.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-kineticist-elysiokineticist--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Must be chaotic good</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-kineticist-elysiokineticist-elysiums-soul" icon={["abstract-091","info","hazard-sign"]}>
<Pair single id="arc-kineticist-elysiokineticist-elysiums-soul">Elysium's Soul</Pair>
<Pair hl title="Replaces">Expanded element</Pair>
<Pair hl title="Alters">Elemental focus</Pair>
<Pair title="Passive Ability">An elysiokineticist has alignment auras of chaotic and good as if she were a chaotic good <Link to="/type/outsider">outsider</Link> with a number of Hit Dice equal to her kineticist level.</Pair>
<Pair title="Info">She must choose wood as her primary <Link to="/ability/elements">element</Link> and <Link to="/kinetic/positive_blast">positive blast</Link> as her first simple blast.</Pair>
<Pair title="At 7th Level">She gains <Link to="/kinetic/verdant_blast">verdant blast</Link> and <Link to="/kinetic/wood_blast">wood blast</Link>, as well as a 3rd-level or lower wild talent of her choice.</Pair>
<Pair title="At 15th Level">She gains a 7th-level wild talent of her choice.</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-kineticist-elysiokineticist-undefined">
<Pair id="arc-kineticist-elysiokineticist-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/heal">Heal</Link> (WIS), <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT)</Pair>
<Pair title="Removed Skills">Handle Animal, Knowledge (nature)</Pair>
<Pair title="Info">These replacements alter the class skills granted by the wood element.</Pair></Ability>
<Ability id="arc-kineticist-elysiokineticist-basic-elysiokinesis-sp" icon={["magic-swirl"]}>
<Pair single id="arc-kineticist-elysiokineticist-basic-elysiokinesis-sp" flavor="An elysiokineticist can use the power of Elysium to assist others and bolster their vigor.">Basic Elysiokinesis (Sp)</Pair>
<Pair hl title="Replaces">Basic phytokinesis utility wild talent granted by the wood element</Pair>
<Pair title="Standard Action">She can cast <Link to="/spell/resistance">resistance</Link>, <Link to="/spell/stabilize">stabilize</Link>, or <Link to="/spell/virtue">virtue</Link> as a spell-like ability at will.</Pair>
</Ability>
<Ability id="arc-kineticist-elysiokineticist-elysian-infusion-su" icon={["upgrade"]}>
<Pair single id="arc-kineticist-elysiokineticist-elysian-infusion-su" flavor={<>An elysiokineticist can infuse her <em>positive blast</em> with the power of Elysium to battle evil.</>}>Elysian Infusion (Su)</Pair>
<Pair hl title="Replaces">Infusion gained at 1st level</Pair>
<Pair title="Ability">The infused <em>positive blast</em> damages evil outsiders as if they were undead and counts as both chaotic and good. This is a 1st-level substance infusion that costs 1 point of burn and can be used with <em>positive blast.</em></Pair>
</Ability>
<Ability id="arc-kineticist-elysiokineticist-elysian-aura-su" icon={["armor-upgrade"]}>
<Pair single id="arc-kineticist-elysiokineticist-elysian-aura-su">Elysian Aura (Su)</Pair>
<Pair hl title="Replaces"><em>Flesh of wood</em> defense wild talent granted by the wood element</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An elysiokineticist infuses herself with a holy aura, granting her protection against evil attacks. She gains a +1 deflection bonus to AC and a +1 resistance bonus on saving throws; both apply only against attacks from evil creatures. By accepting 1 point of burn, she can increase both bonuses by 1.</Pair>
<Pair title="At 5th Level">She can instead accept 2 points of burn to increase both bonuses by 2.</Pair>
<Pair title="At 8th Level">She can instead accept 3 points of burn to increase both bonuses by 3.</Pair>
<Pair title="At 11th Level">She can instead accept 4 points of burn to increase both bonuses by 4.</Pair>
<Pair title="At 14th Level">She can instead accept 5 points of burn to increase both bonuses by 5.</Pair>
<Pair title="At 17th Level">She can instead accept 6 points of burn to increase both bonuses by 6.</Pair>
<Pair title="Special">Whenever she accepts burn while using a wood wild talent, the energy causes her <em>elysian aura</em> bonuses to apply against all attacks for 1 round, and during that time she is protected from evil mental and possession effects, as per <Link to="/spell/protection_from_evil">protection from evil</Link>. She can dismiss or restore this effect as an <strong className="hl">immediate action</strong>.</Pair>
</Ability>
<Ability id="arc-kineticist-elysiokineticist-ghaelelight-blast-su" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-elysiokineticist-ghaelelight-blast-su">Ghaelelight Blast (Su)</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">An elysiokineticist gains the <em>ghaelelight composite blast,</em> which costs 2 points of burn. A <em>ghaelelight blast</em> is an energy blast that deals damage as a simple energy blast instead of a composite energy blast and deals chaotic and good damage. It is associated with the same infusions as <em>positive blast.</em></Pair>
</Ability>
</>};
const _ioun_kineticist = {title: "Ioun Kineticist", jsx: <><h2 id="arc-kineticist-ioun_kineticist-ioun-kineticist">Ioun Kineticist</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 12</Link><br/>Among the greatest technologies to come from Azlant are ioun stones, small crystalline minerals imbued with magical energies that modern scholars still struggle to dissect. Some kineticists dedicate themselves to unlocking ioun stones' cosmic secrets and seemingly limitless potential.</p>
<Ability id="arc-kineticist-ioun_kineticist-ioun-focus" icon={["info","broken-shield","stairs-goal"]}>
<Pair single id="arc-kineticist-ioun_kineticist-ioun-focus">Ioun Focus</Pair>
<Pair hl title="Alters">Elemental focus</Pair>
<Pair title="Info">An ioun kineticist must choose aether as her <Link to="/ability/elements">elemental focus</Link>. She cannot select <Link to="/kinetic/disintegrating_infusion">disintegrating infusion</Link>, <Link to="/kinetic/foe_throw">foe throw</Link>, or <Link to="/kinetic/force_hook">force hook</Link> as infusions, nor can she select <Link to="/kinetic/aether_puppet">aether puppet</Link>, <Link to="/kinetic/telekinetic_finesse">telekinetic finesse</Link>, <Link to="/kinetic/telekinetic_haul">telekinetic haul</Link>, or <Link to="/kinetic/telekinetic_invisibility">telekinetic invisibility</Link> as wild talents. She instead treats the following infusions and wild talents as though they were part of the aether element: <Link to="/kinetic/cyclone">cyclone</Link>, <Link to="/kinetic/fragmentation">fragmentation</Link>, <Link to="/kinetic/jagged_flesh">jagged flesh</Link>, and <Link to="/kinetic/rare_metal_infusion">rare-metal infusion</Link>. These infusions can be applied to the ioun kineticist's <Link to="/kinetic/telekinetic_blast">telekinetic blast</Link> and <em>Azlanti composite blast</em> (see below).</Pair>
<Pair title="Special">An ioun kineticist's telekinetic blast always sends one or more of her ioun stones to strike her foes and immediately return, and her wild talents typically manifest as her ioun stones moving or spinning to create fields of energy.</Pair>
</Ability>
<Ability id="arc-kineticist-ioun_kineticist-ioun-cloud-su" icon={["stairs-goal","shield-reflect"]}>
<Pair single id="arc-kineticist-ioun_kineticist-ioun-cloud-su">Ioun Cloud (Su)</Pair>
<Pair title="Ability">An ioun kineticist forms a powerful bond with three <Link to="/magic-ioun/dull_gray">dull gray ioun stones</Link>, referred to as her <em>ioun cloud.</em> She begins play with these stones at no cost. She also increases the AC of stones in her <em>ioun cloud</em> by an amount equal to her class level, and she increases the hardness of these stones by an amount equal to half her class level (minimum +0). An ioun kineticist cannot use her <em>gather power, ioun buffer, kinetic blast,</em> or <em>personal resonance</em> class abilities unless she has at least one bonded ioun stone orbiting her. She takes a cumulative -2 penalty on <Link to="/rule/concentration">concentration</Link> checks for each bonded ioun stone less than her possible maximum in her current <em>ioun cloud.</em> When she uses her <em>gather power</em> class ability, her <em>ioun cloud</em> buzzes, glows, spins rapidly, and traces eldritch symbols in the air.</Pair>
<Pair title="At 6th Level">She gains a bond with a 4th free dull gray ioun.</Pair>
<Pair title="At 12th Level">She gains a bond with a 5th free dull gray ioun.</Pair>
<Pair title="At 18th Level">She gains a bond with a 6th free dull gray ioun.</Pair>
<Pair title="Special">While the ioun kineticist can own additional ioun stones outside of this bond, only bonded ioun stones can be a part of her <em>ioun cloud.</em> An ioun kineticist can spend 1 hour meditating with an ioun stone to bond with it and add it to her <em>ioun cloud,</em> but doing so immediately unbonds and removes one ioun stone of her choice from her <em>ioun cloud</em> unless she is replacing an ioun stone that has been lost or destroyed.</Pair>
</Ability>
<Ability id="arc-kineticist-ioun_kineticist-basic-iounkinesis-su-or-sp" icon={["magic-swirl"]}>
<Pair single id="arc-kineticist-ioun_kineticist-basic-iounkinesis-su-or-sp" flavor="An ioun kineticist can manipulate ioun stones with ease and channel their magical fields to create simple effects.">Basic Iounkinesis (Su or Sp)</Pair>
<Pair hl title="Alters"><Link to="/kinetic/basic_telekinesis">Basic telekinesis</Link> utility wild talent granted by the aether element</Pair>
<Pair title="Ability">She can activate (making the stones orbit her) or stow a number of ioun stones equal to her class level in any combination as a <strong className="hl">move action</strong>, and she can activate or stow twice as many as a <strong className="hl">standard action</strong>. She can affect only ioun stones orbiting her and unattended ioun stones within 15 feet with this ability. This ability also allows her to cast <Link to="/spell/prestidigitation">prestidigitation</Link> at will as a spell-like ability.</Pair>
</Ability>
<Ability id="arc-kineticist-ioun_kineticist-ioun-buffer-su" icon={["magic-swirl"]}>
<Pair single id="arc-kineticist-ioun_kineticist-ioun-buffer-su">Ioun Buffer (Su)</Pair>
<Pair hl title="Alters">Internal buffer</Pair>
<Pair title="Ability">An ioun kineticist can store excess energy in her <em>ioun cloud.</em> This functions as the kineticist's <em>internal buffer</em> ability, except she stores each point of burn within a different ioun stone in her <em>ioun cloud.</em> She can access the burn stored in an ioun stone only if it is orbiting her. When expending an ioun stone's stored point of burn to reduce the cost of a blast wild talent, the ioun kineticist can expend all of that ioun stone's energy, permanently transforming it into a dull gray ioun stone. If the ioun stone's market price was at least 4,000 gp, this effect further reduces the burn cost of that wild talent by 2. If the ioun stone's market price was at least 10,000 gp, it instead further reduces the burn cost by 3. If the ioun stone's market price was more than 20,000 gp, it instead further reduces the burn cost by 4.</Pair>
</Ability>
<Ability id="arc-kineticist-ioun_kineticist-personal-resonance-su" icon={["magic-swirl"]}>
<Pair single id="arc-kineticist-ioun_kineticist-personal-resonance-su" flavor="An ioun kineticist can harmonize her body's energies with that of her ioun cloud.">Personal Resonance (Su)</Pair>
<Pair hl title="Replaces">The ability score boosts granted by <em>elemental overflow</em></Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">Whenever she has at least 3 points of burn, she gains the resonant powers of two ioun stones of her choice in her <em>ioun cloud;</em> she is treated as holding a <Link to="/magic-wondrous/wayfinder">wayfinder</Link> for the purpose of using any resonant powers. As a <strong className="hl">standard action</strong>, she can switch which two ioun stones are granting their resonance powers.</Pair>
<Pair title="Choice">In place of gaining the resonant power of a <Link to="/magic-ioun/deep_red_sphere">deep red sphere</Link>, <Link to="/magic-ioun/incandescent_blue_sphere">incandescent blue sphere</Link>, <Link to="/magic-ioun/pale_blue_rhomboid">pale blue rhomboid</Link>, <Link to="/magic-ioun/pink_and_green_sphere">pink and green sphere</Link>, <Link to="/magic-ioun/pink_rhomboid">pink rhomboid</Link>, or <Link to="/magic-ioun/scarlet_and_blue_sphere">scarlet and blue sphere</Link>, the ioun kineticist can instead increase the enhancement bonus it grants to an ability score to +4. An ioun kineticist can increase only one ioun stone's enhancement bonus in this way at a time.</Pair>
<Pair title="At 11th Level">Whenever she has at least 5 points of burn, she can gain the resonance powers of up to four ioun stones in her <em>ioun cloud,</em> and the bonus she can get from certain ioun stones becomes +5.</Pair>
<Pair title="At 16th Level">Whenever she has at least 7 points of burn, she gains the resonance powers of all of the ioun stones in her <em>ioun cloud,</em> and the bonus she can get from certain ioun stones becomes +6.</Pair>
</Ability>
<Ability id="arc-kineticist-ioun_kineticist-azlanti-blast-su" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-ioun_kineticist-azlanti-blast-su">Azlanti Blast (Su)</Pair>
<Pair title="Ability">An ioun kineticist who selects aether as her <em>expanded element</em> does not gain the <Link to="/kinetic/force_blast">force composite blast</Link>. She instead gains the <em>Azlanti composite blast,</em> which costs 2 points of burn. An <em>Azlanti blast</em> is a physical blast that deals bludgeoning, piercing, or slashing damage.</Pair>
</Ability>
</>};
const _kinetic_chirurgeon = {title: "Kinetic Chirurgeon", jsx: <><h2 id="arc-kineticist-kinetic_chirurgeon-kinetic-chirurgeon">Kinetic Chirurgeon</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 90</Link><br/>While any hydrokineticist or telekineticist can learn the rudiments of healing, some kineticists are virtuosos of the curative arts.</p>
<Ability id="arc-kineticist-kinetic_chirurgeon-kinetic-chirurgery-su" icon={["info","stairs-goal"]}>
<Pair single id="arc-kineticist-kinetic_chirurgeon-kinetic-chirurgery-su">Kinetic Chirurgery (Su)</Pair>
<Pair hl title="Replaces">Infusions</Pair>
<Pair title="Ability">A kinetic chirurgeon must select either aether or water as her primary <Link to="/ability/elements">element</Link>. She gains <Link to="/kinetic/kinetic_healer">kinetic healer</Link> as a bonus wild talent at 1st level.</Pair>
<Pair title="At 3rd Level">The kinetic chirurgeon can select any one <Link to="/class/paladin">paladin</Link> <Link to="/ability/mercy">mercy</Link> that a paladin of that level could select. Each time she uses <em>kinetic healer,</em> she can apply this mercy to the target of the healing.</Pair>
<Pair title="At 5th Level">She can select a 3rd mercy (of an appropriate level). She can apply only one of her chosen mercies when she uses <em>kinetic healer.</em></Pair>
<Pair title="At 7th Level">She can pick a 4th mercy (of an appropriate level).</Pair>
<Pair title="At 9th Level">She can choose a 5th mercy (of an appropriate level).</Pair>
<Pair title="At 11th Level">She can select a 6th mercy (of an appropriate level).</Pair>
<Pair title="At 13th Level">She can pick a 7th mercy (of an appropriate level).</Pair>
<Pair title="At 15th Level">She can choose a 8th mercy (of an appropriate level).</Pair>
<Pair title="At 17th Level">She can select a 9th mercy (of an appropriate level).</Pair>
<Pair title="At 19th Level">She can pick a 10th mercy (of an appropriate level).</Pair>
<Pair title="Special">A kinetic chirurgeon can never use infusions.</Pair>
</Ability>
<Ability id="arc-kineticist-kinetic_chirurgeon-metahealer-su" icon={["stairs-goal","upgrade","heart-plus"]}>
<Pair single id="arc-kineticist-kinetic_chirurgeon-metahealer-su">Metahealer (Su)</Pair>
<Pair hl title="Replaces">Metakinesis, infusion specialization</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A kinetic chirurgeon can apply any one of the following <em>metahealer</em> abilities to her <em>kinetic healer</em> wild talent instead of using her mercies.</Pair>
<Pair title="At 5th Level">She can choose to roll one additional die when using <em>kinetic healer.</em></Pair>
<Pair title="At 9th Level">She can choose to bring an ally who died within 1 round back from the dead; this functions similarly to the <Link to="/spell/breath_of_life">breath of life</Link> spell. The ally regains the normal number of hit points from <em>kinetic healer.</em> An ally revived in this way takes 1 additional point of burn, beyond the normal 1 point of burn that either the kinetic chirurgeon or the ally must accept as a cost of the <em>kinetic healer</em> wild talent.</Pair>
<Pair title="At 11th Level">She can choose to roll two additional dice when using <em>kinetic healer.</em></Pair>
<Pair title="At 13th Level">A kinetic chirurgeon can choose to use <em>kinetic healer</em> on herself as a <strong className="hl">swift action</strong>.</Pair>
<Pair title="At 17th Level">She can choose to roll three additional dice when using <em>kinetic healer.</em> Or, she can choose to heal both herself and another target with the same use of <em>kinetic healer,</em> although in that case, both she and her target must each accept 1 point of burn, instead of only one of them needing to do so as normal for <em>kinetic healer.</em></Pair>
<Pair title="Special">Regardless of her level, the kinetic chirurgeon can apply only one <em>metahealer</em> ability to a single use of <em>kinetic healer.</em> For instance, she could not bring back a dead ally and also roll extra dice for healing.</Pair>
</Ability>
<Ability id="arc-kineticist-kinetic_chirurgeon-healing-buffer-su" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-kineticist-kinetic_chirurgeon-healing-buffer-su">Healing Buffer (Su)</Pair>
<Pair hl title="Alters">Internal buffer</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A kinetic chirurgeon's <em>internal buffer</em> has double the usual maximum size, and she can use it only when she would accept points of burn for the <em>kinetic healer</em> wild talent.</Pair>
</Ability>
</>};
const _kinetic_knight = {title: "Kinetic Knight", jsx: <><h2 id="arc-kineticist-kinetic_knight-kinetic-knight">Kinetic Knight</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 25</Link><br/>A kinetic knight dons armor and wields a blade of elemental energy. The Phoenix Kindred counted many of these resolute warriors among their number, combining the Recursion Tablets' secrets with a warrior's ways. Today, most remaining Tian kinetic knights follow the philosophy of ichimeiyo. Kinetic knights are rarer in the Inner Sea region, but not unknown; many realize their elemental powers while training for battle.</p>
<Ability icon={["skills"]} id="arc-kineticist-kinetic_knight-undefined">
<Pair id="arc-kineticist-kinetic_knight-undefined" single>Courtly</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/sense_motive">Sense Motive</Link> (WIS)</Pair>
<Pair title="Removed Skills">Acrobatics, Stealth</Pair></Ability>
<Ability id="arc-kineticist-kinetic_knight-elemental-blade-su" icon={["stairs-goal","upgrade","broken-shield"]}>
<Pair single id="arc-kineticist-kinetic_knight-elemental-blade-su">Elemental Blade (Su)</Pair>
<Pair hl title="Replaces">Metakinesis, metakinetic master</Pair>
<Pair hl title="Alters">Kinetic blast, infusions</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A kinetic knight gains the <Link to="/kinetic/kinetic_blade">kinetic blade</Link> form infusion, and it costs 0 points of burn instead of 1 point. She can't use her kinetic blast without the <em>kinetic blade</em> form infusion or an infusion that lists <em>kinetic blade</em> as a prerequisite.</Pair>
<Pair title="At 3rd Level">The kinetic knight gains the <Link to="/kinetic/blade_rush">blade rush</Link> infusion.</Pair>
<Pair title="At 5th Level">She gains the <Link to="/kinetic/kinetic_whip">kinetic whip</Link> infusion. Her kinetic whip has the <Link to="/misc/disarm">disarm</Link>, <Link to="/misc/performance">performance</Link>, and <Link to="/misc/trip">trip</Link> weapon qualities.</Pair>
<Pair title="At 9th Level">She gains the <Link to="/kinetic/blade_whirlwind">blade whirlwind</Link> infusion.</Pair>
<Pair title="At 11th Level">She gains the <Link to="/kinetic/whip_hurricane">whip hurricane</Link> infusion.</Pair>
<Pair title="At 13th Level">As a <strong className="hl">swift action</strong>, she can accept 2 points of burn to unleash a kinetic blast with the <em>blade rush</em> infusion.</Pair>
</Ability>
<Ability id="arc-kineticist-kinetic_knight-kinetic-warrior-ex" icon={["upgrade"]}>
<Pair single id="arc-kineticist-kinetic_knight-kinetic-warrior-ex">Kinetic Warrior (Ex)</Pair>
<Pair title="Ability">The kinetic knight can use her Constitution score in place of her Intelligence score when qualifying for <Link to="/main/combat_feat">combat feats</Link>. This ability counts as having <Link to="/feat/combat_expertise">Combat Expertise</Link> for the purpose of feat prerequisites.</Pair>
</Ability>
<Ability id="arc-kineticist-kinetic_knight-elemental-bastion-ex" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-kineticist-kinetic_knight-elemental-bastion-ex">Elemental Bastion (Ex)</Pair>
<Pair hl title="Alters">Elemental defense</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">The kinetic knight becomes proficient with medium and heavy armor and shields (except tower shields). In addition, the kinetic knight can accept 1 point of burn to attune herself to a specific light or heavy shield until the next time her burn is removed. Wielding an attuned shield doesn't prevent the kinetic knight from <em>gathering power.</em></Pair>
<Pair title="At 4th Level">A kinetic knight gains the <em>elemental defense</em> ability at 4th level, rather than 2nd, and its benefits apply only while she is wearing heavy armor and wielding an attuned shield. If the kinetic knight selects the <em>expanded defense</em> talent, its benefits also apply only under these conditions.</Pair>
<Pair title="Special">If she has the <Link to="/kinetic/shroud_of_water">shroud of water</Link> defense wild talent, whenever its bonus would be increased by accepting burn, she instead increases the enhancement bonus of her armor or attuned shield by an equal amount (to a maximum of +5).</Pair>
</Ability>
<Ability id="arc-kineticist-kinetic_knight-knights-resolve-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-kinetic_knight-knights-resolve-ex">Knight's Resolve (Ex)</Pair>
<Pair hl title="Replaces">3rd-level infusion, supercharge</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The kinetic knight gains the <Link to="/class/samurai">samurai's</Link> <em>resolve</em> class feature, as a samurai of her kineticist level - 2.</Pair>
<Pair title="At 11th Level">She gains the samurai's <em>greater resolve</em> ability.</Pair>
<Pair title="Special">If she also has samurai levels, those levels stack with her kineticist levels to determine the benefits of this ability.</Pair>
</Ability>
<Ability id="arc-kineticist-kinetic_knight-resolve-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-kinetic_knight-resolve-ex" flavor="Text from the samurai class">Resolve (Ex)</Pair>
<Pair title="Usage">1 time/day + 1 per two samurai levels beyond 1st<ByLevelPop levels={[[1,1],[3,2],[5,3],[7,4],[9,5],[11,6],[13,7],[15,8],[17,9],[19,10]]} unit="time" postText="/day" /></Pair>
<Pair title="Passive Ability">You gain <em>resolve</em> that you can call upon to endure even the most devastating wounds and afflictions. Whenever you defeat the target of your challenge, you regain one daily use of your <em>resolve,</em> up to your maximum number of uses per day. Defeating the target of your challenge usually involves reducing the target to 0 hit points or fewer, but the GM might rule that an enemy who surrenders or flees the battle is also defeated. You can use this <em>resolve</em> in a number of ways.</Pair>
</Ability>
<Ability id="arc-kineticist-kinetic_knight-determined" extraClasses="subAbility" icon={["heart-plus"]}>
<Pair single id="arc-kineticist-kinetic_knight-determined" flavor="Text from the samurai class">Determined</Pair>
<Pair title="Standard Action">You can spend one use of your <em>resolve</em> to remove the <Link to="/misc/fatigued">fatigued</Link>, <Link to="/misc/shaken">shaken</Link>, or <Link to="/misc/sickened">sickened</Link> condition.</Pair>
<Pair title="At 8th Level">You can now remove the <Link to="/misc/exhausted">exhausted</Link>, <Link to="/misc/frightened">frightened</Link>, <Link to="/misc/nauseated">nauseated</Link>, or <Link to="/misc/staggered">staggered</Link> conditions, instead.</Pair>
<Pair title="Special">If the condition has a duration longer than 1 hour or is permanent, this ability removes the condition for 1 hour, at which time the condition returns.</Pair>
</Ability>
<Ability id="arc-kineticist-kinetic_knight-resolute" extraClasses="subAbility" icon={["rolling-dices"]}>
<Pair single id="arc-kineticist-kinetic_knight-resolute" flavor="Text from the samurai class">Resolute</Pair>
<Pair title="Immediate Action">Whenever you are required to make a Fortitude or Will save, you can spend one use of your <em>resolve</em> to roll twice and take the better result. You must decide to use this ability before you roll the saving throw.</Pair>
</Ability>
<Ability id="arc-kineticist-kinetic_knight-unstoppable" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-kineticist-kinetic_knight-unstoppable" flavor="Text from the samurai class">Unstoppable</Pair>
<Pair title="Immediate Action">When you are reduced to fewer than 0 hit points but not slain, you can spend one use of your <em>resolve</em> to instantly <Link to="/misc/stabilize">stabilize</Link> and remain conscious. You are staggered, but you do not fall unconscious and begin dying if you take a standard action. You do fall unconscious if you take additional damage from any source.</Pair>
</Ability>
<Ability id="arc-kineticist-kinetic_knight-greater-resolve-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-kineticist-kinetic_knight-greater-resolve-ex" flavor="Text from the samurai class">Greater Resolve (Ex)</Pair>
<Pair title="Immediate Action">After a critical hit is confirmed against you, you can spend one use of your <em>resolve</em> to treat that critical hit as a normal hit.</Pair>
<Pair title="Special">Effects that only trigger on a critical hit do not trigger when you use this ability.</Pair>
</Ability>
</>};
const _leshykineticist = {title: "Leshykineticist", jsx: <><h2 id="arc-kineticist-leshykineticist-leshykineticist">Leshykineticist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 23</Link><br/>Of all those who pursue the path of a kineticist, only leshykineticists are both made of plant matter and born of nature spirits. These curious creatures wield ancient powers unknown to any other kineticists.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-kineticist-leshykineticist--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/vine_leshy">Vine leshy</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-kineticist-leshykineticist-leshy-element" icon={["info"]}>
<Pair single id="arc-kineticist-leshykineticist-leshy-element">Leshy Element</Pair>
<Pair hl title="Replaces">6th- and 10th-level utility wild talents, maximize metakinesis</Pair>
<Pair hl title="Alters">Element, expanded element</Pair>
<Pair title="Info">A leshykineticist must select the wood <Link to="/ability/elements">element</Link> as her primary element and for both her <em>expanded elements.</em> She must choose <Link to="/kinetic/wood_blast">wood blast</Link> as her first simple blast and <Link to="/kinetic/positive_blast">positive blast</Link> as her second simple blast.</Pair>
<Pair title="At 6th Level">She gains <Link to="/kinetic/green_tongue">green tongue</Link> as a bonus utility wild talent, ignoring its prerequisites.</Pair>
<Pair title="At 7th Level">When she first gains <em>positive blast,</em> she gains <Link to="/kinetic/kinetic_healer">kinetic healer</Link> and the <Link to="/kinetic/photokinetic_infusion">photokinetic infusion</Link> instead of the extra wild talent of 3rd level or lower for expanding in the same element. Her <em>kinetic healer</em> wild talent restores 1 extra hit point per die when healing plant creatures.</Pair>
<Pair title="At 9th Level">She gains an extra wild talent of 3rd level or lower of her choice.</Pair>
<Pair title="At 10th Level">She gains <Link to="/kinetic/greater_green_tongue">greater green tongue</Link> as a bonus utility wild talent, ignoring its prerequisites.</Pair>
</Ability>
<Ability id="arc-kineticist-leshykineticist-basic-leshykinesis-su" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-leshykineticist-basic-leshykinesis-su">Basic Leshykinesis (Su)</Pair>
<Pair hl title="Alters">Basic phytokinesis</Pair>
<Pair title="Ability">A vine leshy leshykineticist can use her <em>basic phytokinesis</em> to move while in her alternate vine form, with a base speed of 10 feet and a climb speed of 10 feet. The vine counts as a prehensile appendage for the purpose of aiming kinetic blasts and <em>gathering power.</em></Pair>
<Pair title="Special">At the GM's discretion, this ability might apply to leshykineticists of other leshy varieties as long as their alternate forms aren't rooted to the ground (and even then, they might be able to use something like a branch to aim kinetic blasts).</Pair>
</Ability>
<Ability id="arc-kineticist-leshykineticist-photosynthetic-buffer" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-kineticist-leshykineticist-photosynthetic-buffer">Photosynthetic Buffer</Pair>
<Pair hl title="Alters">Internal buffer</Pair>
<Pair title="Ability">A leshykineticist fills her <em>buffer</em> with energy photosynthesized from sunlight, rather than from internal energy. Once per day, she can spend 1 hour motionless in her alternate plant form soaking in sunlight to fill her <em>internal buffer.</em> However, she can't fill her <em>internal buffer</em> by accepting burn, and her <em>internal buffer</em> becomes empty whenever her burn is removed.</Pair>
<Pair title="Special">She can't benefit from any abilities that increase the maximum burn her <em>buffer</em> can hold.</Pair>
</Ability>
<Ability id="arc-kineticist-leshykineticist-green-rebirth-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-kineticist-leshykineticist-green-rebirth-su">Green Rebirth (Su)</Pair>
<Pair hl title="Replaces">Omnikinesis</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A leshykineticist taps into the ancient power of the First World. When her <em>verdant burst</em> ability activates, it heals all allies and plant creatures in the area as if by a maximized version of her <em>kinetic healer</em> ability, rather than only 1d8 hit points. After 24 hours, one of the plants that grew in the area serves as a vessel for the leshykineticist's spirit again, allowing her to return to life without penalty. Killing all the new plants that grew from her <em>verdant burst</em> within 24 hours prevents her from reviving in this way.</Pair>
</Ability>
</>};
const _overwhelming_soul = {title: "Overwhelming Soul", jsx: <><h2 id="arc-kineticist-overwhelming_soul-overwhelming-soul">Overwhelming Soul</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 91</Link><br/>Some kineticists have such a powerful personality that they can seize control of their element with their minds alone, without endangering their bodies.</p>
<Ability id="arc-kineticist-overwhelming_soul-mind-over-matter-ex" icon={["upgrade"]}>
<Pair single id="arc-kineticist-overwhelming_soul-mind-over-matter-ex">Mind Over Matter (Ex)</Pair>
<Pair hl title="Alters">Key ability score of wild talents</Pair>
<Pair title="Ability">An overwhelming soul uses her Charisma modifier instead of her Constitution modifier to determine her damage with wild talents, the DCs of Constitution-based wild talents, the duration of wild talents with a Constitution-based duration, her bonus on <Link to="/rule/concentration">concentration</Link> checks for wild talents, and the other Constitution-based effects of all her wild talents.</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-kineticist-overwhelming_soul-undefined">
<Pair id="arc-kineticist-overwhelming_soul-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/diplomacy">Diplomacy</Link> (CHA)</Pair></Ability>
<Ability id="arc-kineticist-overwhelming_soul-mental-prowess-su" icon={["armor-upgrade","broken-shield"]}>
<Pair single id="arc-kineticist-overwhelming_soul-mental-prowess-su">Mental Prowess (Su)</Pair>
<Pair hl title="Replaces">Internal buffer</Pair>
<Pair hl title="Alters">Burn</Pair>
<Pair title="Ability">An overwhelming soul's mind is strong enough to protect her body from the stress of channeling the elements. However, in exchange, she is unable to push her limits quite as far as other kineticists. She can't choose to accept burn, though she can use wild talents with a burn cost if she can reduce that cost to 0 points with abilities such as <em>gather power</em> and <em>infusion specialization.</em> If she would be forced to accept burn against her will (for example, if she fails a concentration check), instead of taking burn she takes 1 temporary <Link to="/rule/negative_level">negative level</Link>, which never kills her and can't be removed with <Link to="/spell/restoration">restoration</Link> or <Link to="/spell/greater_restoration">greater restoration</Link>, but which disappears automatically after 24 hours.</Pair>
<Pair title="At 6th Level">Once per day, she can reduce the total burn cost of any wild talent by 1.</Pair>
<Pair title="At 10th Level">She can reduce the burn cost 2 times per day.</Pair>
<Pair title="At 14th Level">She can reduce the burn cost 3 times per day.</Pair>
<Pair title="At 18th Level">She can reduce the burn cost 4 times per day.</Pair>
</Ability>
<Ability id="arc-kineticist-overwhelming_soul-overwhelming-power-ex" icon={["upgrade"]}>
<Pair single id="arc-kineticist-overwhelming_soul-overwhelming-power-ex">Overwhelming Power (Ex)</Pair>
<Pair hl title="Replaces">Elemental overflow</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">An overwhelming soul gains a bonus on attack rolls and damage rolls with her kinetic blasts. This bonus is equal to <Link to="/misc/one_third">one-third</Link> of her kineticist level. The damage bonus doesn't apply to <Link to="/kinetic/kinetic_blade">kinetic blade</Link>, <Link to="/kinetic/kinetic_whip">kinetic whip</Link>, or other infusions that don't apply the damage bonus from <em>elemental overflow.</em></Pair>
</Ability>
</>};
const _psammokinetic = {title: "Psammokinetic", jsx: <><h2 id="arc-kineticist-psammokinetic-psammokinetic">Psammokinetic</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 6</Link><br/>Psammokinetics are ascetic kineticists who consider the harsh nature of the burning deserts of Osirion to be a tempering fire that can purify all their imperfections. Trained by the Pahmet dwarves, who also make up the majority of their numbers, these kineticists seek to master the powers of sand and wind while focusing on self-improvement.</p>
<Ability id="arc-kineticist-psammokinetic-alignment" icon={["hazard-sign"]}>
<Pair single id="arc-kineticist-psammokinetic-alignment">Alignment</Pair>
<Pair title="Info">A psammokinetic kineticist must be lawful in alignment. If the psammokinetic ever becomes nonlawful, she cannot gain any additional levels with this archetype and loses access to the <em>ki pool</em> class feature granted by this archetype.</Pair>
</Ability>
<Ability id="arc-kineticist-psammokinetic-burning-winds-su" icon={["info","stairs-goal","broken-shield"]}>
<Pair single id="arc-kineticist-psammokinetic-burning-winds-su">Burning Winds (Su)</Pair>
<Pair hl title="Alters">Elemental focus</Pair>
<Pair title="ability"><p>A psammokinetic must select air as her <Link to="/ability/elements">elemental focus</Link>. In place of the <Link to="/kinetic/air_blast">air blast</Link> and <Link to="/kinetic/electric_blast">electric blast</Link> normally granted to an aerokinetic, the psammokinetic gains a <em>sand blast</em> or <em>sirocco blast.</em> Except as noted below, <em>sand blast</em> functions as <em>air blast,</em> and <em>sirocco blast</em> functions as <em>electric blast</em> (including when determining what infusion wild talents the psammokinetic can use with each blast). The psammokinetic is also treated as having the fire element type for the purposes of meeting the prerequisites for the <Link to="/kinetic/cold_adaptation">cold adaptation</Link>, <Link to="/kinetic/flame_shield">flame shield</Link>, <Link to="/kinetic/heat_adaptation">heat adaptation</Link>, and <Link to="/kinetic/heat_wave">heat wave</Link> utility wild talents.</p>
<blockquote>
<p><strong className="hl">Sand Blast</strong><br/><strong>Element</strong> air; <strong>Type</strong> simple blast (Sp); <strong>Level</strong> -; <strong>Burn</strong> 0<br/><strong>Blast Type</strong> physical; <strong>Damage</strong> slashing<br/>You slice at a single foe with a stream of sand.</p>
<p><strong className="hl">Sirocco Blast</strong><br/><strong>Element</strong> air; <strong>Type</strong> simple blast (Sp); <strong>Level</strong> -; <strong>Burn</strong> 0<br/><strong>Blast Type</strong> energy; <strong>Damage</strong> fire<br/>You shoot a wave of superheated air to burn a single foe.</p>
</blockquote>
</Pair>
<Pair title="Special">A psammokinetic cannot take the <Link to="/kinetic/chain">chain</Link>, <Link to="/kinetic/magnetic_infusion">magnetic infusion</Link>, or <Link to="/kinetic/thundering_infusion">thundering infusion</Link> wild talents or the <Link to="/kinetic/aerial_adaptation">aerial adaptation</Link> or <Link to="/kinetic/celerity">celerity</Link> utility wild talents.</Pair>
</Ability>
<Ability id="arc-kineticist-psammokinetic-ki-pool-su" icon={["stairs-goal","upgrade","armor-upgrade"]}>
<Pair single id="arc-kineticist-psammokinetic-ki-pool-su">Ki Pool (Su)</Pair>
<Pair hl title="Replaces">Elemental overflow</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability"><p>A psammokinetic gains a pool of ki points, supernatural energy she can use to accomplish amazing feats. The number of points in a psammokinetic's <em>ki pool</em> is equal to <Link to="/misc/half">half</Link> her kineticist level plus her Constitution modifier. As long as she has at least 1 point in her <em>ki pool,</em> she gains a bonus on damage rolls with kinetic blasts. This bonus is equal to one-third of her kineticist level. The <em>kinetic blade</em> infusion does not add the bonus damage from this ability.</p>
<p>By spending 1 point from her <em>ki pool</em> as a <strong className="hl">swift action</strong>, a psammokinetic can do one of the following:</p>
<ul>
<li>Double her bonus (if any) on damage rolls for having at least 1 point in her <em>ki pool,</em> and gain a bonus on attack rolls with her kinetic blasts. This bonus is equal to one-third of her kineticist level. This effect remains for 1d4 rounds.</li>
<li>Gain a +2 dodge bonus to AC for 1 round.</li>
<li>Increase her base speed by 20 feet for 1 round.</li>
</ul>
<p>The <em>ki pool</em> is replenished each morning after 8 hours of rest or meditation; these hours do not need to be consecutive. If the psammokinetic has levels in another class that grants points to a pool of ki points, her psammokinetic levels stack with the levels of that class to determine the total number of ki points in the combined pool, but only one ability score modifier is added to the total. The choice of which score to use is made when the second class ability is gained, and once made, the choice cannot be changed. The psammokinetic can use ki points from this pool to power the abilities of every class she has that grants a <em>ki pool.</em></p>
</Pair>
<Pair title="At 7th Level">As long as she has at least 1 point in her <em>ki pool,</em> her <em>sand blast</em> is treated as cold iron for the purpose of overcoming damage reduction (regardless of what infusion it is used with).</Pair>
<Pair title="At 10th Level">Her <em>sand blast</em> is treated as a lawful weapon.</Pair>
<Pair title="At 16th Level">Her <em>sand blast</em> is treated as <Link to="/eq-material/adamantine">adamantine</Link> for the purpose of overcoming damage reduction and bypassing hardness.</Pair>
</Ability>
<Ability id="arc-kineticist-psammokinetic-sand-element-su" icon={["info","upgrade"]}>
<Pair single id="arc-kineticist-psammokinetic-sand-element-su">Sand Element (Su)</Pair>
<Pair hl title="Alters">Expanded element</Pair>
<Pair title="At 7th Level">A psammokinetic must select the earth element as her <em>expanded element.</em> She treats her kineticist level as 2 levels lower (rather than 4 levels lower) for the purpose of determining which wild talents she can learn from the earth element.</Pair>
<Pair title="At 15th Level">The psammokinetic must choose to expand her mastery of the air element as her <em>expanded element.</em></Pair>
</Ability>
</>};
const _psychokineticist = {title: "Psychokineticist", jsx: <><h2 id="arc-kineticist-psychokineticist-psychokineticist">Psychokineticist</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 56</Link><br/>While most kineticists channel elemental power through their bodies, rare kineticists, such as <em>elemental ascetics, overwhelming souls,</em> and <em>psychokineticists</em> channel such power through their minds. Psychokineticists lack an <em>overwhelming soul's</em> strong spirit, and so this energy ravages their minds but unleashes power locked in their ruptured emotions. Sometimes a psychokineticist inadvertently unleashes his power when he experiences an outburst of strong emotion, potentially making a psychokineticist an outcast or even an accidental killer.</p>
<Ability icon={["skills"]} id="arc-kineticist-psychokineticist-undefined">
<Pair id="arc-kineticist-psychokineticist-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/sense_motive">Sense Motive</Link> (WIS)</Pair></Ability>
<Ability id="arc-kineticist-psychokineticist-emotional-intensity-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-kineticist-psychokineticist-emotional-intensity-ex">Emotional Intensity (Ex)</Pair>
<Pair hl title="Alters">Class skills, key ability score of wild talents</Pair>
<Pair title="Ability">A psychokineticist uses his Wisdom modifier instead of his Constitution modifier to determine his damage with wild talents, the DCs of Constitution-based wild talents, the durations of wild talents with Constitution-based durations, his bonus on <Link to="/rule/concentration">concentration</Link> checks for wild talents, and other Constitution-based effects of all his wild talents.</Pair>
<Pair title="Info">He can't use any of his wild talents whenever he would be unable to use a spell with an <Link to="/rule/components_oa">emotion component</Link>, and if he ever gains immunity to charm, compulsion, emotion effects (even if such immunity extends only to a subcategory of these effects like fear effects or compulsion effects from creatures of certain alignments), he loses all his kineticist abilities. This includes effects that he previously activated that normally last until the next time his burn is removed, like <em>elemental defenses,</em> though he still keeps all his penalties from burn. He can always choose to ignore such immunities when he would normally gain them, even if they are granted by another class feature (such as the paladin's <em>aura of courage</em>), but once he decides whether or not to ignore an immunity he would have gained, the choice cannot be changed.</Pair>
<Pair title="Special">A psychokineticist gains <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-kineticist-psychokineticist-mind-burn-ex" icon={["broken-shield"]}>
<Pair single id="arc-kineticist-psychokineticist-mind-burn-ex" flavor="A psychokineticist's mind strains when he overtaxes himself.">Mind Burn (Ex)</Pair>
<Pair hl title="Alters">Burn</Pair>
<Pair title="Passive Ability">He takes a -2 penalty on Will saves, Wisdom checks, and Wisdom-based skill checks for each point of burn he has accepted, rather than taking nonlethal damage from burn. He can accept an amount of burn equal to his Wisdom modifier (rather than 3 + his Wisdom modifier). Otherwise, his burn works just like a normal kineticist's.</Pair>
</Ability>
<Ability id="arc-kineticist-psychokineticist-mental-overflow-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-kineticist-psychokineticist-mental-overflow-ex" flavor="A psychokineticist's elemental energy sends strange elemental humors and planar echoes through his brain instead of reshaping his body with matter from his element.">Mental Overflow (Ex)</Pair>
<Pair hl title="Alters">Elemental overflow</Pair>
<Pair title="Ability">Instead of gaining size bonuses to physical ability scores from <em>elemental overflow,</em> he gains alchemical bonuses to his mental ability scores in equal amounts (a +2 alchemical bonus to two mental ability scores at 6th level if he has at least 3 points of burn; a +4 alchemical bonus to one mental ability score and a +2 alchemical bonus to the other two at 11th level if he has at least 5 points of burn; and a +6 alchemical bonus to one mental ability score, a +4 alchemical bonus to another, and a +2 alchemical bonus to the last at 16th level if he has at least 7 points of burn).</Pair>
<Pair title="Special">A psychokineticist doesn't gain a chance to negate critical hits and sneak attacks based on his burn. Otherwise, his <em>elemental overflow</em> works just like a normal kineticist's.</Pair>
</Ability>
</>};
const _terrakineticist = {title: "Terrakineticist", jsx: <><h2 id="arc-kineticist-terrakineticist-terrakineticist">Terrakineticist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 63</Link><br/>Terrakineticists have a stunted ability that allows them to access the Elemental Planes, but they've learned how to turn this limited talent into an incredible strength by tapping into the ambient elemental nature of the land surrounding them.</p>
<Ability id="arc-kineticist-terrakineticist-terrakinesis" icon={["stairs-goal","upgrade","broken-shield"]}>
<Pair single id="arc-kineticist-terrakineticist-terrakinesis">Terrakinesis</Pair>
<Pair hl title="Alters">Elemental focus, kinetic blast</Pair>
<Pair title="Ability"><p>Whenever a terrakineticist gains a wild talent that isn't a universal talent, she chooses one wild talent of the appropriate level from each of the six <Link to="/ability/elements">elements</Link> (aether, air, fire, earth, water, and wood).<sup><InnerLink showBacklink="backlink-arc-kineticist-terrakineticist-fake-fn-1" id="arc-kineticist-terrakineticist-fake-fn-1" data-hash-target to="arc-kineticist-terrakineticist-fake-fn-1-target">1</InnerLink></sup> She can use wild talents of the same element that she chose in this way to meet prerequisites for these wild talents. Instead of gaining one kineticist blast, a terrakineticist chooses one simple blast from each element that has more than one simple blast.</p>
<p>When in a corresponding terrain, as determined by the ranger <Link to="/ability/favored_terrain">favored terrain</Link> categories, her element changes to the corresponding element (granting her class skills, basic utility wild talent, simple blast, and elemental defense as appropriate), and she gains all the wild talents she selected from the corresponding element.</p>
<ul>
<li>Aether corresponds to urban and the Ethereal Plane</li>
<li>Air corresponds to hill, mountain, plains, and the Plane of Air</li>
<li>Fire corresponds to desert and the Plane of Fire</li>
<li>Earth corresponds to underground and the Plane of Earth</li>
<li>Water corresponds to cold, swamp, water, and the Plane of Water</li>
<li>Wood corresponds to forest, jungle, the First World, and the Positive Energy Plane.</li>
</ul>
<p>In areas that might count as multiple types of terrain, the GM decides which element predominates, and in certain areas not covered by the ranger favored terrains (such as the upper atmosphere) or in those with strong elemental energy (like an underground temple of a fire cult), the corresponding element might differ. If the kineticist class gains additional elements, those elements also gain corresponding terrains at the GM's discretion, and the terrakineticist chooses wild talents from those elements. A terrakineticist should almost never be in a situation that doesn't correspond to any of these elements, but in such an unusual circumstance (for instance, the void of space given the standard six elements), she loses access to all her wild talents, even her universal wild talents.</p>
<p>When her element changes, she loses the benefits of all active wild talents from the previous element, even if it would usually last until the next time she recovers burn. However, time spent in other terrain still counts against the ability's duration; if she changes back again to the original element, the benefit returns only if it has any remaining duration.</p>
</Pair>
</Ability>
<Ability id="arc-kineticist-terrakineticist-terrakinetic-defense" icon={["info"]}>
<Pair single id="arc-kineticist-terrakineticist-terrakinetic-defense">Terrakinetic Defense</Pair>
<Pair hl title="Alters">Elemental defense</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Info">A terrakineticist's <em>elemental defense</em> wild talent changes with her corresponding element, just like her other wild talents. However, unlike her other wild talents, any burn she invests in one element's elemental defense carries over to her elemental defense when her element changes. For instance, if a 6th-level terrakineticist invested 2 points of burn in <Link to="/kinetic/flesh_of_stone">flesh of stone</Link> to gain 2 additional points of damage reduction and then entered a city and changed to aether, she would have 2 points of burn invested in <Link to="/kinetic/force_ward">force ward</Link> and increase the force ward's temporary hit points by 6.</Pair>
</Ability>
<Ability id="arc-kineticist-terrakineticist-expanded-terrakinesis" icon={["stairs-goal"]}>
<Pair single id="arc-kineticist-terrakineticist-expanded-terrakinesis">Expanded Terrakinesis</Pair>
<Pair hl title="Replaces">Expanded element</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A terrakineticist gains both simple blasts for the element corresponding to her current terrain, if that element has two, and the composite blast associated with expanding in that element (<Link to="/kinetic/force_blast">force blast</Link>, <Link to="/kinetic/thunderstorm_blast">thunderstorm blast</Link>, <Link to="/kinetic/blue_flame_blast">blue flame blast</Link>, <Link to="/kinetic/metal_blast">metal blast</Link>, <Link to="/kinetic/ice_blast">ice blast</Link>, and <Link to="/kinetic/verdant_blast">verdant blast</Link>). She also gains a universal infusion or utility talent for which she meets the prerequisites.</Pair>
<Pair title="At 15th Level">She gains one infusion or utility wild talent for which she meets the prerequisites.</Pair>
</Ability>
<Ability id="arc-kineticist-terrakineticist-omniterrakinesis-su" icon={["magic-swirl"]}>
<Pair single id="arc-kineticist-terrakineticist-omniterrakinesis-su">Omniterrakinesis (Su)</Pair>
<Pair hl title="Replaces">Omnikinesis</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A terrakineticist can accept 1 point of burn as a <strong className="hl">free action</strong> at the start of her turn to change her element without regard to the surrounding terrain until the beginning of her next turn.</Pair>
</Ability>
<section data-footnotes><h3 id="arc-kineticist-terrakineticist-label">Footnotes</h3><ol>
<li id="arc-kineticist-terrakineticist-fake-fn-1-target"><p>This archetype was introduced before the <em>void</em> element was created. Consult your GM if you wish to use that element, too. As a suggestion, consider terrains such as the lowest levels of the Darklands, outer space, the Shadow Plane, and the Negative Energy Plane. <InnerLink aria-label="Back to reference 1" id="backlink-arc-kineticist-terrakineticist-fake-fn-1" data-hash-target to="arc-kineticist-terrakineticist-fake-fn-1">↩</InnerLink></p></li>
</ol></section></>};
export default {aquakinetcist:_aquakinetcist,arakineticist:_arakineticist,blightburner:_blightburner,blighted_defiler:_blighted_defiler,blood_kineticist:_blood_kineticist,cinderlands_adept:_cinderlands_adept,dark_elementalist:_dark_elementalist,elemental_annihilator:_elemental_annihilator,elemental_ascetic:_elemental_ascetic,elemental_purist:_elemental_purist,elysiokineticist:_elysiokineticist,ioun_kineticist:_ioun_kineticist,kinetic_chirurgeon:_kinetic_chirurgeon,kinetic_knight:_kinetic_knight,leshykineticist:_leshykineticist,overwhelming_soul:_overwhelming_soul,psammokinetic:_psammokinetic,psychokineticist:_psychokineticist,terrakineticist:_terrakineticist}