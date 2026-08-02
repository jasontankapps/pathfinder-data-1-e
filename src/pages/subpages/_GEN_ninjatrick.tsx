import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import AffInfo from '../../components/AfflictionInfo';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested ninja trick.</p>
</>};
const _bleeding_attack = {title: "Bleeding Attack", addenda: ["ninjasneak"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="bleeding-attack-ex" icon={["upgrade"]}>
<Pair single id="bleeding-attack-ex">Bleeding Attack (Ex)</Pair>
<Pair title="Ability">A ninja with this trick can cause living opponents to <Link to="/rule/bleed">bleed</Link> by hitting them with a sneak attack. This attack causes the target to take 1 additional point of damage each round for each die of the ninja's sneak attack. Bleeding creatures take that amount of damage every round at the start of each of their turns. The bleeding can be stopped by a DC 15 Heal check or the application of any effect that heals hit point damage.</Pair>
<Pair title="Special">Bleed damage from this ability does not stack with itself. Bleed damage bypasses any DR the creature might possess.</Pair>
</Ability>
</>};
const _ki_block = {title: "Ki Block", addenda: ["ninjasneak"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="ki-block-su" icon={["armor-downgrade"]}>
<Pair single id="ki-block-su" flavor="A ninja with this trick can prevent a creature from using its ki pool.">Ki Block (Su)</Pair>
<Pair title="Ability">Whenever the ninja deals sneak attack damage, the target must make a Will save or be unable to spend any points from its ki pool for a number of rounds equal to the ninja's Charisma modifier. The DC of this save is 10 + 1/2 the ninja's level + the ninja's Charisma modifier.</Pair>
<Pair title="Special">The number of points in the target's ki pool is unaffected, and abilities that do not require the subject to spend ki still function.</Pair>
</Ability>
</>};
const _pressure_points = {title: "Pressure Points", addenda: ["ninjasneak"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="pressure-points-su" icon={["upgrade"]}>
<Pair single id="pressure-points-su" flavor={<>A ninja with this trick can strike at an opponent's vital <em>pressure points,</em> causing weakness and intense pain.</>}>Pressure Points (Su)</Pair>
<Pair title="Ability">Whenever the ninja deals sneak attack damage, she also deals 1 point of <Link to="/rule/dexterity_damage">Strength or Dexterity damage</Link>, decided by the ninja.</Pair>
<Pair title="Special">Unlike normal ability damage, this damage can be healed by a DC 15 Heal check. Each successful check heals 1 point of damage caused by this trick. A ninja with this trick receives a +10 insight bonus on this Heal check.</Pair>
</Ability>
</>};
const _slow_reactions = {title: "Slow Reactions", addenda: ["ninjasneak"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="slow-reactions-ex" icon={["armor-downgrade"]}>
<Pair single id="slow-reactions-ex">Slow Reactions (Ex)</Pair>
<Pair title="Ability">Opponents that are damaged by the ninja's sneak attack can't make attacks of opportunity for 1 round.</Pair>
</Ability>
</>};
const _deadly_range = {title: "Deadly Range", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="deadly-range-ex" icon={["upgrade","bowman"]}>
<Pair single id="deadly-range-ex">Deadly Range (Ex)</Pair>
<Pair title="Ability">A ninja with this ninja trick increases the range at which she can deal sneak attack damage by 10 feet.</Pair>
<Pair title="Special">A ninja can take this trick more than once. Its effects stack.</Pair>
</Ability>
</>};
const _acrobatic_master = {title: "Acrobatic Master", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="acrobatic-master-su" icon={["upgrade"]}>
<Pair single id="acrobatic-master-su">Acrobatic Master (Su)</Pair>
<Pair title="Swift Action">A ninja with this trick can focus her ki to grant her a +20 bonus on one Acrobatics check of her choice made before the start of her next turn.</Pair>
<Pair title="Special">Using this ability expends 1 ki point from her ki pool.</Pair>
</Ability>
</>};
const _high_jumper = {title: "High Jumper", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="high-jumper-ex" icon={["upgrade"]}>
<Pair single id="high-jumper-ex">High Jumper (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/acrobatic_master">Acrobatic master</Link></Pair>
<Pair title="Passive Ability">When a ninja with this trick makes a <Link to="/skill/acrobatics">high jump</Link>, the DC for that jump is half the normal DC.</Pair>
</Ability>
</>};
const _blood_debt = {title: "Blood Debt", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance</Link></p>
<Ability id="blood-debt-su" icon={["stairs-goal","shield-reflect","armor-upgrade"]}>
<Pair single id="blood-debt-su">Blood Debt (Su)</Pair>
<Pair title="Ability">A ninja with this ability gains <Link to="/feat/in_harms_way">In Harm's Way</Link> as a bonus feat, even if she doesn't meet the prerequisites.</Pair>
<Pair title="Ability">When the ninja intercepts an attack using this feat, she can spend 1 ki point to impose a <em>blood debt</em> on the aided ally. The ninja's ki pool is reduced by 1 until she ends this effect, which she may do as an <strong className="hl">immediate action</strong>. If the ninja ends the <em>blood debt</em> in response to a successful attack against her by a creature the indebted ally threatens, the ally (who must be willing) takes full damage from that attack and any associated effects instead of the ninja.</Pair>
</Ability>
</>};
const _breath_of_the_ancestors = {title: "Breath of the Ancestors", jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons</Link></p>
<Ability id="breath-of-the-ancestors-su" icon={["tornado-discs","barbed-arrow"]}>
<Pair single id="breath-of-the-ancestors-su">Breath of the Ancestors (Su)</Pair>
<Pair title="Choice">The ninja chooses one <Link to="/family/imperial_dragon">imperial dragon</Link> type (forest, sea, sky, sovereign, or underworld) when she gains this trick, and the choice can't be changed.</Pair>
<Pair title="Standard Action"><p>She can use supplies similar to those used for ninja <Link to="/ninjatrick/smoke_bomb">smoke bombs</Link> to produce an alchemical breath weapon that deals the same kind of damage as the selected dragon (piercing damage for forest dragons, fire for sea dragons, and so on).</p>
<p>The breath weapon deals the same amount of damage as the ninja's sneak attack, with a Reflex save allowed for half damage. The breath weapon is a 15-foot cone (or a 30-foot line if the underworld dragon is selected). The save DC is equal to 10 + 1/2 the ninja's class level + the ninja's Intelligence modifier.</p>
</Pair>
<Pair title="Special">Using this ability expends up 2 ki points, and once used it cannot be used again for 1d4 rounds.</Pair>
</Ability>
</>};
const _darkvision = {title: "Darkvision", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="darkvision-su" icon={["stairs-goal"]}>
<Pair single id="darkvision-su">Darkvision (Su)</Pair>
<Pair title="Ability">This trick allows the ninja to use her ki to enhance her sight, granting <em>darkvision</em> out to a range of 60 feet.</Pair>
<Pair title="Special">Using this trick is a <strong className="hl">standard action</strong> that costs 1 ki point. The enhanced senses last for 1 hour.</Pair>
</Ability>
</>};
const _feather_fall = {title: "Feather Fall", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="feather-fall-su" icon={["magic-swirl"]}>
<Pair single id="feather-fall-su">Feather Fall (Su)</Pair>
<Pair title="Immediate Action">The ninja can slow her descent as if using <Link to="/spell/feather_fall">feather fall</Link>. This ability uses her ninja level as the caster level.</Pair>
<Pair title="Special">Each use of this ability uses up 1 ki point.</Pair>
</Ability>
</>};
const _flurry_of_stars = {title: "Flurry of Stars", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="flurry-of-stars-ex" icon={["bowman","upgrade","broken-shield"]}>
<Pair single id="flurry-of-stars-ex">Flurry of Stars (Ex)</Pair>
<Pair title="Swift Action">A ninja with this ability can expend 1 ki point from her ki pool before she makes a full-attack attack with <Link to="/eq-weapon/shuriken">shuriken</Link>. During that attack, she can throw two additional shuriken at her highest attack bonus, but all of her shuriken attacks are made at a -2 penalty, including the two extra attacks.</Pair>
</Ability>
</>};
const _forgotten_trick = {title: "Forgotten Trick", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="forgotten-trick-ex" icon={["stairs-goal"]}>
<Pair single id="forgotten-trick-ex" flavor="A ninja with this ability can recall one trick taught to her by her ancient masters.">Forgotten Trick (Ex)</Pair>
<Pair title="Ability">When she uses this ability, she selects one ninja trick (not a <em>master trick</em> or <em>rogue talent</em>) that she does not know and can use that ninja trick for a number of rounds equal to her level. She must pay any ki costs associated with the trick as normal.</Pair>
<Pair title="Special">Using this ability expends 2 ki point from her ki pool, plus the ki cost of the trick she chooses.</Pair>
</Ability>
</>};
const _herbal_compound = {title: "Herbal Compound", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook</Link></p>
<Ability id="herbal-compound-ex" icon={["broken-shield","armor-upgrade"]}>
<Pair single id="herbal-compound-ex" flavor="A ninja with this trick can consume specially prepared herbs to strengthen her mind.">Herbal Compound (Ex)</Pair>
<Pair title="Move-Equivalent Action">The ninja can spend 1 ki point and smoke, eat, or inject an <em>herbal compound.</em> The ninja takes a -2 penalty to AC and on Reflex saves but gains a +4 alchemical bonus on Will saves for 10 minutes per ninja level.</Pair>
</Ability>
</>};
const _kamikaze = {title: "Kamikaze", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance</Link></p>
<Ability id="kamikaze-su" icon={["upgrade"]}>
<Pair single id="kamikaze-su" flavor="A ninja with this ability strikes without concern for her own well-being.">Kamikaze (Su)</Pair>
<Pair title="Ability">The ninja can spend 1 point from her ki pool to give her unarmed strikes and any weapons she wields the <Link to="/magic-enh/vicious">vicious</Link> weapon special ability for 1 round per level.</Pair>
<Pair title="Special">The ninja can spend 1 ki point to dismiss this effect.</Pair>
</Ability>
</>};
const _ki_charge = {title: "Ki Charge", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="ki-charge-su" icon={["bowman"]}>
<Pair single id="ki-charge-su">Ki Charge (Su)</Pair>
<Pair title="Standard Action"><p>A ninja with this trick can invest a portion of her ki into a single thrown weapon, such as a <Link to="/eq-weapon/shuriken">shuriken</Link>, and throw it. The thrown weapon explodes on impact in a 5-foot <Link to="/misc/burst">burst</Link>, dealing 1d6 points of fire damage. Creatures caught in the blast receive a Reflex save to halve the damage. The DC of this save is 10 + 1/2 the ninja's level + the ninja's Charisma modifier.</p>
<p>If the thrown weapon hits a creature, that creature takes a -2 penalty on the saving throw. If the thrown weapon misses, treat it as a <Link to="/rule/throw_splash_weapon">thrown splash weapon</Link>.</p>
</Pair>
<Pair title="At 6th Level">The fire damage becomes 2d6.</Pair>
<Pair title="At 10th Level">The fire damage increases to 3d6.</Pair>
<Pair title="At 14th Level">The fire damage becomes 4d6.</Pair>
<Pair title="At 18th Level">The fire damage increases to 5d6.</Pair>
<Pair title="Special">Using this ability expends 1 ki point from her ki pool.</Pair>
</Ability>
</>};
const _ki_venom = {title: "Ki Venom", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook</Link></p>
<Ability id="ki-venom-ex" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="ki-venom-ex" flavor="A ninja with this trick knows how to make poisons from innocuous herbs or minerals.">Ki Venom (Ex)</Pair>
<Pair title="Ability"><p>Creating <em>ki venom</em> is a <strong className="hl">full-round action</strong> that costs 1 ki point. The poison lasts for 24 hours before becoming inert. The poison deals either <Link to="/rule/dexterity_damage">Strength or Dexterity damage</Link>, chosen when the venom is created.</p>
<AffInfo type="Poison; injury" save="Fort 10 + 1/2 the ninja's level + her Cha modifier" freq="1/round for a number of rounds equal to the ninja's Charisma modifier" eff={<>1d4 <Link to="/rule/str_damage">Str damage</Link> or 1d4 Dex damage</>} cure1 icon="p">Ki Venom</AffInfo>
</Pair>
<Pair title="Special">The ninja can spend additional ki as part of the process of creating the <em>ki venom</em> to improve the venom in one or more of the following ways: spend 1 ki point to increase the damage die to a d6, spend 1 ki point to change the ability damage dealt to Intelligence, Wisdom, or Charisma damage, or spend 1 ki point to increase the number of saves required to cure the poison by 1.</Pair>
</Ability>
</>};
const _shadow_clone = {title: "Shadow Clone", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="shadow-clone-su" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="shadow-clone-su">Shadow Clone (Su)</Pair>
<Pair title="Standard Action">The ninja can create 1d4 shadowy duplicates of herself that conceal her true location. This ability functions as <Link to="/spell/mirror_image">mirror image</Link>, using the ninja's level as her caster level.</Pair>
<Pair title="Special">Using this ability costs 1 ki point.</Pair>
</Ability>
</>};
const _smoke_bomb = {title: "Smoke Bomb", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="smoke-bomb-ex" icon={["stairs-goal","smoking-finger"]}>
<Pair single id="smoke-bomb-ex">Smoke Bomb (Ex)</Pair>
<Pair title="Standard Action">This ability allows a ninja to throw a <em>smoke bomb</em> that creates a cloud of smoke with a 15-foot radius. This acts like the smoke from a <Link to="/eq-misc/smokestick">smokestick</Link>. The ninja can center this smoke on herself, or throw the bomb as a ranged touch attack with a range of 20 feet.</Pair>
<Pair title="Special">Each use of this ability uses up 1 ki point.</Pair>
</Ability>
</>};
const _poison_bomb = {title: "Poison Bomb", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="poison-bomb-ex" icon={["stairs-goal"]}>
<Pair single id="poison-bomb-ex">Poison Bomb (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/smoke_bomb">Smoke bomb</Link></Pair>
<Pair title="Ability">Whenever the ninja throws a <em>smoke bomb,</em> she can decide to include 1 dose of any inhaled poison she possesses. This poison affects all creatures in the smoke and lasts as long as the smoke lasts. She must pay for the poison normally.</Pair>
</Ability>
</>};
const _choking_bomb = {title: "Choking Bomb", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="choking-bomb-ex" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="choking-bomb-ex">Choking Bomb (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/poison_bomb">Poison bomb</Link></Pair>
<Pair title="Ability">Whenever a ninja throws a <em>smoke bomb,</em> all living creatures in the resulting cloud must make a Fortitude save or become <Link to="/misc/staggered">staggered</Link> by the choking black smoke for 1d4 rounds. The DC of this saving throw is equal to 10 + 1/2 the ninja's level + the ninja's Charisma modifier. The ninja can decide to create an ordinary <em>smoke bomb</em> or add poison to this <em>smoke bomb</em> as normal.</Pair>
</Ability>
</>};
const _strangler = {title: "Strangler", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook</Link></p>
<Ability id="strangler-ex" icon={["mailed-fist"]}>
<Pair single id="strangler-ex">Strangler (Ex)</Pair>
<Pair title="Ability">A ninja with this trick knows how to use a scarf, usually with a coin or large knot, as a lethal <Link to="/eq-weapon/garrote">garrote</Link>. The ninja takes no penalties when using a scarf as an improvised garrote.</Pair>
<Pair title="Free Action">In addition, when attempting a grapple combat maneuver check, the ninja can spend 1 ki point to gain the <Link to="/umr/constrict">constrict</Link> special attack on that maneuver with damage equal to half the ninja's sneak attack dice (minimum 1d6).</Pair>
</Ability>
</>};
const _sudden_disguise = {title: "Sudden Disguise", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="sudden-disguise-su" icon={["magic-swirl"]}>
<Pair single id="sudden-disguise-su">Sudden Disguise (Su)</Pair>
<Pair title="Swift Action">A ninja can change her appearance for 1 minute per level. This ability functions as <Link to="/spell/disguise_self">disguise self</Link>. Each use of this ability uses up 1 ki point.</Pair>
</Ability>
</>};
const _vanishing_trick = {title: "Vanishing Trick", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="vanishing-trick-su" icon={["magic-swirl"]}>
<Pair single id="vanishing-trick-su">Vanishing Trick (Su)</Pair>
<Pair title="Swift Action">The ninja can disappear for 1 round per level. This ability functions as <Link to="/spell/invisibility">invisibility</Link>. Using this ability uses up 1 ki point.</Pair>
</Ability>
</>};
const _ventriloquism = {title: "Ventriloquism", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="ventriloquism-su" icon={["magic-swirl"]}>
<Pair single id="ventriloquism-su">Ventriloquism (Su)</Pair>
<Pair title="Swift Action">The ninja can throw her voice as if using the spell <Link to="/spell/ventriloquism">ventriloquism</Link>. She can use this ability for 1 minute per ninja level. Each use of this ability uses up 1 ki point.</Pair>
</Ability>
</>};
const _arcane_backfire = {title: "Arcane Backfire", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe</Link></p>
<Ability id="arcane-backfire-su" icon={["armor-downgrade"]}>
<Pair single id="arcane-backfire-su">Arcane Backfire (Su)</Pair>
<Pair title="Ability">When a ninja with this trick successfully attacks a creature that is holding a magic item that has a number of charges or uses per day, she can attempt a <Link to="/skill/use_magic_device">Use Magic Device</Link> check (DC = 20 + the item's CL) to cause the item to lose either one daily use or a number of charges equal to the number of the ninja's sneak attack dice.</Pair>
</Ability>
</>};
const _combat_trick = {title: "Combat Trick", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="combat-trick-ex" icon={["stairs-goal"]}>
<Pair single id="combat-trick-ex">Combat Trick (Ex)</Pair>
<Pair title="Ability">A ninja who selects this trick gains a bonus <Link to="/main/combat_feat">combat feat</Link>.</Pair>
</Ability>
</>};
const _fast_stealth = {title: "Fast Stealth", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="fast-stealth-ex" icon={["upgrade"]}>
<Pair single id="fast-stealth-ex">Fast Stealth (Ex)</Pair>
<Pair title="Ability">A ninja with this trick can move at full speed using the Stealth skill without penalty.</Pair>
</Ability>
</>};
const _hidden_weapons = {title: "Hidden Weapons", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="hidden-weapons-ex" icon={["upgrade"]}>
<Pair single id="hidden-weapons-ex" flavor="A ninja with this ability can easily conceal weapons on her body.">Hidden Weapons (Ex)</Pair>
<Pair title="Ability">The ninja adds her level on opposed Sleight of Hand checks made to conceal a weapon. In addition, she can draw hidden weapons as a <strong className="hl">move action</strong>, instead of as a standard action.</Pair>
</Ability>
</>};
const _redirect_force = {title: "Redirect Force", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance</Link></p>
<Ability id="redirect-force-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="redirect-force-ex">Redirect Force (Ex)</Pair>
<Pair title="Ability">If the ninja has a feat that allows her to attempt a combat maneuver without provoking attacks of opportunity, she can choose to provoke them anyway when she performs that maneuver. If she does so and takes damage from the attack of opportunity, the ninja adds the damage as a bonus on her attack roll instead of as a penalty.</Pair>
</Ability>
</>};
const _rogue_talent = {title: "Rogue Talent", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="rogue-talent" icon={["stairs-goal"]}>
<Pair single id="rogue-talent">Rogue Talent</Pair>
<Pair title="Ability">The ninja can select a <Link to="/ability/rogue_talent">rogue talent</Link> in place of a ninja trick. The ninja cannot select a rogue talent that has the same name as a ninja trick.</Pair>
<Pair title="Special">The ninja can select this talent multiple times.</Pair>
</Ability>
</>};
const _slow_metabolism = {title: "Slow Metabolism", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="slow-metabolism-ex" icon={["armor-upgrade"]}>
<Pair single id="slow-metabolism-ex" flavor="The ninja has a slower-than-normal metabolism.">Slow Metabolism (Ex)</Pair>
<Pair title="Ability">She can <Link to="/misc/hold_her_breath">hold her breath</Link> for twice as long as normal before needing to make Constitution checks (four times her Constitution score).</Pair>
<Pair title="Passive Ability">In addition, whenever the ninja is poisoned, the time between saving throws (the poison's frequency) is doubled. Thus, a poison that has a frequency of <em>1/round for 6 rounds</em> would instead be <em>1/2 rounds for 12 rounds.</em></Pair>
</Ability>
</>};
const _style_master = {title: "Style Master", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="style-master" icon={["stairs-goal"]}>
<Pair single id="style-master">Style Master</Pair>
<Pair title="Ability">A ninja who selects this ninja trick gains a <Link to="/main/style_feat">style feat</Link> that she qualifies for as a bonus feat.</Pair>
</Ability>
</>};
const _swarming_attack = {title: "Swarming Attack", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe</Link></p>
<Ability id="swarming-attack" icon={["upgrade"]}>
<Pair single id="swarming-attack" flavor="Ratfolk ninjas use their large numbers to overwhelm their enemies with countless attacks.">Swarming Attack</Pair>
<Pair title="Prerequisites"><Link to="/race/ratfolk">Ratfolk</Link>, <em>swarming</em> racial trait</Pair>
<Pair title="Ability">While using the swarming racial trait to share a space with an ally, a ninja with this talent gains a bonus on damage roles equal to the number of sneak attack dice her ally has. For example, a ninja would gain +3 damage if her ally has sneak attack 3d6.</Pair>
</Ability>
</>};
const _swift_poisoner = {title: "Swift Poisoner", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook</Link></p>
<Ability id="swift-poisoner-ex" icon={["upgrade"]}>
<Pair single id="swift-poisoner-ex">Swift Poisoner (Ex)</Pair>
<Pair title="Ability">A ninja with this trick can apply a dose of poison to a weapon as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
</>};
const _unarmed_combat_training = {title: "Unarmed Combat Training", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="unarmed-combat-training-ex" icon={["stairs-goal","mailed-fist"]}>
<Pair single id="unarmed-combat-training-ex">Unarmed Combat Training (Ex)</Pair>
<Pair title="Ability">A ninja who selects this ninja trick gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _deflect_arrows = {title: "Deflect Arrows", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="deflect-arrows-ex" icon={["stairs-goal"]}>
<Pair single id="deflect-arrows-ex">Deflect Arrows (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> (whether from <Link to="/ninjatrick/unarmed_combat_training">unarmed combat training</Link> trick or not)</Pair>
<Pair title="Ability">A ninja who selects this ninja trick gains the <Link to="/feat/deflect_arrows">Deflect Arrows</Link> feat as a bonus feat.</Pair>
</Ability>
</>};
const _snatch_arrows = {title: "Snatch Arrows", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="snatch-arrows" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="snatch-arrows">Snatch Arrows</Pair>
<Pair title="Prerequisites"><Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> (whether from <Link to="/ninjatrick/unarmed_combat_training">unarmed combat training</Link> or not), <Link to="/feat/deflect_arrows">Deflect Arrows</Link> (whether from <Link to="/ninjatrick/deflect_arrows">deflect arrows</Link> trick or not)</Pair>
<Pair title="Ability">A ninja who selects this ninja trick gains the <Link to="/feat/snatch_arrows">Snatch Arrows</Link> feat as a bonus feat.</Pair>
</Ability>
</>};
const _undetected_sabotage = {title: "Undetected Sabotage", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="undetected-sabotage-ex" icon={["stairs-goal"]}>
<Pair single id="undetected-sabotage-ex">Undetected Sabotage (Ex)</Pair>
<Pair title="Ability">Whenever a ninja with this trick uses <Link to="/skill/disable_device">Disable Device</Link> to sabotage or disable a device, she can make a <Link to="/skill/stealth">Stealth</Link> check with a bonus equal to her level. Anyone who inspects the device does not notice the sabotage and assumes the object works unless he beats the ninja's check with an opposed <Link to="/skill/perception">Perception</Link> skill check.</Pair>
</Ability>
</>};
const _wall_climber = {title: "Wall Climber", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="wall-climber-su" icon={["stairs-goal"]}>
<Pair single id="wall-climber-su">Wall Climber (Su)</Pair>
<Pair title="Ability">A ninja with this ability gains a climb speed of 20 feet, but only on vertical surfaces. This ability cannot be used to scale perfectly smooth surfaces or to climb on the underside of horizontal surfaces.</Pair>
</Ability>
</>};
const _weapon_training = {title: "Weapon Training", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="weapon-training-ex" icon={["stairs-goal"]}>
<Pair single id="weapon-training-ex">Weapon Training (Ex)</Pair>
<Pair title="Ability">A ninja who selects this ninja trick gains <Link to="/feat/weapon_focus">Weapon Focus</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _assassinate = {title: "Assassinate", topLink: ["Master Ninja Tricks","ability/master_tricks"], addenda: ["ninjasneak"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="assassinate-ex" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="assassinate-ex" flavor="A ninja with this master trick can kill foes that are unable to defend themselves.">Assassinate (Ex)</Pair>
<Pair title="Ability"><p>To attempt to <em>assassinate</em> a target, the ninja must first study her target for 1 round as a <strong className="hl">standard action</strong>.</p>
<p>On the following round, if the ninja makes a sneak attack against the target and the target is denied its Dexterity bonus to AC, the sneak attack has the additional effect of possibly killing the target. This attempt automatically fails if the target recognizes the ninja as an enemy.</p>
<p>If the sneak attack is successful and the target of this attack fails a Fortitude save, it dies. The DC of this save is equal to 10 + 1/2 the ninja's level + the ninja's Charisma modifier.</p>
<p>If the save is successful, the target still takes the sneak attack damage as normal, but it is immune to that ninja's <em>assassinate</em> ability for 1 day.</p>
</Pair>
</Ability>
</>};
const _blinding_bomb = {title: "Blinding Bomb", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="blinding-bomb-ex" icon={["armor-downgrade"]}>
<Pair single id="blinding-bomb-ex">Blinding Bomb (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/choking_bomb">Choking bomb</Link></Pair>
<Pair title="Ability">Whenever the ninja throws a <Link to="/ninjatrick/smoke_bomb">smoke bomb</Link>, all living creatures in the cloud must make a Fortitude save or be <Link to="/misc/blinded">blinded</Link> by the black smoke for 1d4 rounds. The DC of this saving throw is equal to 10 + 1/2 the ninja's level + the ninja's Charisma modifier.</Pair>
<Pair title="Special">This trick cannot be combined with a <em>choking bomb,</em> but the ninja can combine a <em>blinding bomb</em> with a <Link to="/ninjatrick/poison_bomb">poison bomb</Link>.</Pair>
</Ability>
</>};
const _fractured_mirror = {title: "Fractured Mirror", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends</Link></p>
<Ability id="fractured-mirror-su" icon={["armor-upgrade","magic-swirl","upgrade"]}>
<Pair single id="fractured-mirror-su" flavor="By sending phantom selves across the battlefield, one may fight as many.">Fractured Mirror (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/shadow_clone">Shadow clone</Link></Pair>
<Pair title="Ability"><p>When a ninja with this trick uses the <em>shadow clone</em> ninja trick, she gains an additional clone for every 3 ninja levels she has, to a maximum of eight clones.</p>
<p>In addition, while she has <em>shadow clones</em> deployed, the ninja can cause any number of her clones to split from herself as part of a <strong className="hl">move action</strong>. The <em>shadow clones</em> move up to the ninja's speed at her will each time she uses a move action to move. <em>Shadow clones</em> separated in this way are not considered part of the <em>shadow clone</em> trick until they return to the ninja's square, though they can still be destroyed while separated.</p>
</Pair>
<Pair title="Special"><em>Shadow clones</em> separated from the ninja have an AC equal to the ninja's AC - 5 and cannot take any actions, though they can provide <Link to="/rule/flanking">flanking</Link>. <em>Shadow clones</em> do not occupy any space and a creature can freely enter a <em>shadow clone's</em> square.</Pair>
</Ability>
</>};
const _greater_ki_venom = {title: "Greater Ki Venom", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook</Link></p>
<Ability id="greater-ki-venom-ex" icon={["upgrade"]}>
<Pair single id="greater-ki-venom-ex">Greater Ki Venom (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/ki_venom">Ki venom</Link></Pair>
<Pair title="Ability">A ninja with this trick can further improve her <em>ki venom.</em> The ninja can spend 2 ki points to increase the damage die to a d8 or spend 2 ki points to change the ability damage dealt to <Link to="/rule/constitution_damage">Constitution damage</Link>.</Pair>
</Ability>
</>};
const _invisible_blade = {title: "Invisible Blade", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="invisible-blade-su" icon={["magic-swirl"]}>
<Pair single id="invisible-blade-su">Invisible Blade (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/vanishing_trick">Vanishing trick</Link></Pair>
<Pair title="Ability">Whenever a ninja uses the <em>vanishing trick</em> ninja trick, she is treated as if she were under the effects of <Link to="/spell/greater_invisibility">greater invisibility</Link>.</Pair>
</Ability>
</>};
const _master_disguise = {title: "Master Disguise", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="master-disguise-su" icon={["upgrade"]}>
<Pair single id="master-disguise-su" flavor="A ninja with this trick can take on the appearance of other creatures and individuals.">Master Disguise (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/sudden_disguise">Sudden disguise</Link></Pair>
<Pair title="Ability">Whenever the ninja uses the <em>sudden disguise</em> ninja trick, the duration increases to 10 minutes per level.</Pair>
<Pair title="Ability"><p>Alternatively, the ninja can use the <em>sudden disguise</em> ninja trick to take on the appearance of a specific individual that the ninja has seen before for 1 minute per level. Creatures that are familiar with the individual receive a Will saving throw to see through the illusion. The DC of this saving throw is 10 + 1/2 the ninja's level + the ninja's Charisma modifier.</p>
<p>This illusion also changes the ninja's speech, if she has heard the individual talk and can speak his language.</p>
</Pair>
</Ability>
</>};
const _shadow_split = {title: "Shadow Split", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="shadow-split-su" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="shadow-split-su">Shadow Split (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/shadow_clone">Shadow clone</Link></Pair>
<Pair title="Ability"><p>This trick allows the ninja to create an illusory double of herself that moves away from her, allowing the ninja to create a distraction. When she uses this ability, an illusory double appears and moves away from the ninja, heading in one direction.</p>
<p>The double climbs walls, jumps pits, or simply passes through obstacles, moving at twice the ninja's speed in the direction indicated by the ninja when the ability is used. Its course cannot be changed.</p>
<p>The double persists for 1 round per level of the ninja. Those who interact with the double receive a Will saving throw to recognize that it is fake. The DC of this save is 10 + 1/2 the ninja's level + the ninja's Charisma modifier.</p>
</Pair>
<Pair title="Special">Each use of this ability uses up 1 ki point.</Pair>
</Ability>
</>};
const _acceleration_of_form = {title: "Acceleration of Form", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends</Link></p>
<Ability id="acceleration-of-form-su" icon={["armor-upgrade","upgrade"]}>
<Pair single id="acceleration-of-form-su">Acceleration of Form (Su)</Pair>
<Pair title="Standard Action">A ninja with this trick can spend 1 ki point to gain the benefits of <Link to="/spell/displacement">displacement</Link> and <Link to="/spell/haste">haste</Link> for 1 round per 2 ninja levels.</Pair>
</Ability>
</>};
const _deep_cover = {title: "Deep Cover", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook</Link></p>
<Ability id="deep-cover-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="deep-cover-ex">Deep Cover (Ex)</Pair>
<Pair title="Ability">A ninja with this trick gains the <em>dual identity</em> and <em>seamless guise</em> class feature as a <Link to="/class/vigilante">vigilante</Link>, except that the ninja can spend 1 ki point to change identities as a <strong className="hl">move action</strong>. The ninja's identities are referred to as social and ninja, rather than social and vigilante.</Pair>
</Ability>
<Ability id="dual-identity-ex" extraClasses="subAbility" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="dual-identity-ex" flavor="Text from the vigilante class ability.">Dual Identity (Ex)</Pair>
<Pair title="Ability"><p>You hide your true identity, allowing you to move about social circles and nobility without carrying the stigma of your ruthless actions. In effect, you have two identities: one is a polite member of society while the other is a skilled and cunning warrior. To keep up this charade, you usually have two names: your true name, used in polite company, and your vigilante name, used to strike fear in the hearts of those who oppose you. Knowledge checks about one do not reveal information about the other, unless your true identity is revealed to the world at large.</p>
<p>You can start each day in either of your identities, referred to simply as <strong className="hl">social</strong> or <strong className="hl">vigilante</strong>. Changing from one identity to another takes 1 minute and must be done out of sight from other creatures to preserve your secret. Changing identities is more than just changing outfits and clothing (although that is certainly a part of it); the process often also involves applying make-up, altering your hair, and adjusting other personal effects. Furthermore, the change is as much a state of mind as of body, so items such as a <Link to="/magic-wondrous/hat_of_disguise">hat of disguise</Link> and similar spells and effects that change the user's appearance do not reduce the time required to change identities. Most <em>social talents</em> require you to be in your social identity, but a vigilante who uses <em>vigilante talents</em> in his social identity risks exposing his secret.</p>
<p>Despite being a single person, your dual nature allows you to have two alignments, one for each of your identities. When in an identity, you are treated as having that identity's alignment for all spells, magic items, and abilities that rely on alignment. For the purpose of meeting a qualification for a feat, class, or any ability, you are only eligible if both of your alignments meet the requirements. A vigilante's two alignments cannot be more than one step from each other on a single alignment axis. For example, a vigilante with a lawful neutral social identity could have a vigilante identity that is lawful good, lawful neutral, lawful evil, neutral, neutral good, or neutral evil. If you are the target of an effect that would change your alignment, it changes both of your alignments to the new alignment.</p>
<p>Any attempts to scry or otherwise locate you work only if you are currently in the identity the creature is attempting to locate (or if the creature knows that the two identities are the same individual). Otherwise, the spell or effect has no effect, revealing nothing but darkness, as if the target were invalid or did not exist.</p>
</Pair>
</Ability>
<Ability id="seamless-guise-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="seamless-guise-ex" flavor="Text from the vigilante class ability.">Seamless Guise (Ex)</Pair>
<Pair title="Ability">Should anyone suspect you of being anything other than what you appear to be while either in your social or vigilante identity, you can attempt a Disguise check with a +20 circumstance bonus to appear as your current identity, and not as your other identity.</Pair>
</Ability>
</>};
const _many_guises = {title: "Many Guises", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook</Link></p>
<Ability id="many-guises-ex" icon={["stairs-goal"]}>
<Pair single id="many-guises-ex">Many Guises (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ninjatrick/deep_cover">Deep cover</Link></Pair>
<Pair title="Ability">The ninja can take on any number of mundane guises. Whenever he changes his identity, he has a third option (instead of social or ninja): he can become mundane.</Pair>
<Pair title="Info">The mundane identity is not a specific individual. Each one is created at the moment it is assumed, and quickly forgotten as soon as it is removed. While in a mundane identity, the ninja does not gain the benefit of either his social or ninja identity, but instead appears as a member of his race, usually a common laborer, farmer, or peasant of any gender. His alignment is treated as neutral when he is in his mundane identity.</Pair>
<Pair title="Passive Ability">While in this identity, he receives a +20 circumstance bonus on Disguise checks to appear like an ordinary member of his race. Spells and abilities that are looking for the ninja in either of his other identities fail while he is in his mundane identity.</Pair>
<Pair title="Special">He must build the appearance for this identity using whatever clothing and tools he has at his disposal. While he can use magic (such as a <Link to="/magic-wondrous/hat_of_disguise">hat of disguise</Link>), his mundane identity can never be anything other than an ordinary member of a society or large group (subject to GM discretion).</Pair>
</Ability>
</>};
const _false_face = {title: "False Face", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends</Link></p>
<Ability id="false-face-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="false-face-su" flavor={<>Like <Link to="/family/oni">oni</Link> who take mortal shapes to infiltrate society, some ninjas can mold their flesh to pass unsuspected.</>}>False Face (Su)</Pair>
<Pair title="Ability">A ninja with this trick gains the <Link to="/umr/change_shape">change shape</Link> (any Small or Medium humanoid, <Link to="/spell/alter_self">alter self</Link>) universal monster rule as long as she has at least 1 ki point.</Pair>
</Ability>
</>};
const _ghost_step = {title: "Ghost Step", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="ghost-step-su" icon={["stairs-goal"]}>
<Pair single id="ghost-step-su" flavor="A ninja with this trick can pass through walls as if she were a ghost.">Ghost Step (Su)</Pair>
<Pair title="Swift Action">Until the end of her turn, she can pass through a wall or other surface that is up to 5 feet thick per level as if she were incorporeal. She must exit the solid material by the end of her turn.</Pair>
<Pair title="Special">Each use of this ability uses up 1 ki point.</Pair>
</Ability>
</>};
const _kami_warden = {title: "Kami Warden", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends</Link></p>
<Ability id="kami-warden-su" icon={["stairs-goal","shield-reflect","armor-upgrade"]}>
<Pair single id="kami-warden-su" flavor={<>Ninjas can act as bodyguards as well as assassins or spies; some mystically emulate the relationship between <Link to="/family/kami">kami</Link> and their wards when protecting their charges.</>}>Kami Warden (Su)</Pair>
<Pair title="Ability">A ninja with this trick gains <Link to="/feat/bodyguard">Bodyguard</Link> and <Link to="/feat/in_harms_way">In Harm's Way</Link> as bonus feats, ignoring their prerequisites.</Pair>
<Pair title="Special">When using In Harm's Way to intercept an attack, the ninja can spend 1 ki point to gains DR 10/cold iron and resistance 10 to acid, electricity, and fire for that attack.</Pair>
</Ability>
</>};
const _kawarimi = {title: "Kawarimi", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance</Link></p>
<Ability id="kawarimi-su" icon={["armor-upgrade"]}>
<Pair single id="kawarimi-su">Kawarimi (Su)</Pair>
<Pair title="Immediate Action"><p>Once per day when a successful attack is made against a ninja with this ability, she can spend 1 ki point to attempt a <Link to="/skill/stealth">Stealth</Link> check opposed by the attacker's <Link to="/skill/perception">Perception</Link> check. The ninja can attempt this check while being observed as long as she has <Link to="/rule/cover">cover</Link> or <Link to="/rule/concealment">concealment</Link> (or an ability that allows her to attempt Stealth checks without cover or concealment).</p>
<p>If she's successful, the opponent's attack hits an inanimate object that the attacker mistook for the ninja, and the ninja may move into an adjacent square and is hidden from the attacker.</p>
</Pair>
</Ability>
</>};
const _occulted_soul = {title: "Occulted Soul", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook</Link></p>
<Ability id="occulted-soul-su" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="occulted-soul-su" flavor="A ninja with this trick can still her mind to bypass magical detection.">Occulted Soul (Su)</Pair>
<Pair title="Ability">The ninja can spend 1 ki point to cast <Link to="/spell/nondetection">nondetection</Link> on herself as a spell-like ability, with a caster level equal to her ninja level.</Pair>
</Ability>
</>};
const _see_the_unseen = {title: "See the Unseen", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="see-the-unseen-su" icon={["magic-swirl"]}>
<Pair single id="see-the-unseen-su" flavor="A ninja with this trick learns how to see that which cannot be seen.">See the Unseen (Su)</Pair>
<Pair title="Swift Action">The ninja can cast <Link to="/spell/see_invisibility">see invisibility</Link>, using her level as the caster level. Each use of this ability uses up 1 ki point.</Pair>
</Ability>
</>};
const _unbound_steps = {title: "Unbound Steps", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="unbound-steps-su" icon={["stairs-goal"]}>
<Pair single id="unbound-steps-su" flavor="This trick allows a ninja to use her ki to walk through the air.">Unbound Steps (Su)</Pair>
<Pair title="Ability">Whenever the ninja uses the <em>light steps</em> class feature, she can walk on air, rising or descending as she desires. She must end her move on a solid surface.</Pair>
<Pair title="Special">Each use of this ability uses up 1 ki point.</Pair>
</Ability>
</>};
const _advanced_talent = {title: "Advanced Talent", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="advanced-talent" icon={["stairs-goal"]}>
<Pair single id="advanced-talent">Advanced Talent</Pair>
<Pair title="Ability">The ninja can select a <Link to="/ability/advanced_rogue_talent">rogue talent</Link> from the list of Advanced Talents in place of a ninja trick. The ninja cannot select a rogue talent that has the same name as a ninja trick.</Pair>
<Pair title="Special">The ninja cannot select <Link to="/talent/improved_evasion">improved evasion</Link> unless she has <Link to="/ability/evasion">evasion</Link> (either as a class feature or as a <Link to="/ninjatrick/evasion">ninja master trick</Link>).</Pair>
</Ability>
</>};
const _all_the_stars_in_the_sky = {title: "All the Stars in the Sky", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends</Link></p>
<Ability id="all-the-stars-in-the-sky-ex" icon={["stairs-goal"]}>
<Pair single id="all-the-stars-in-the-sky-ex" flavor="Certain master ninjas possess a seemingly limitless supply of their trusted weapons.">All the Stars in the Sky (Ex)</Pair>
<Pair title="Ability">Whenever a ninja with this trick buys a set of 50 identical magic <Link to="/eq-weapon/shuriken">shuriken</Link>, she thereafter replenishes them at no cost and never runs out. This stock of magical shuriken can be upgraded as though it were a normal magic weapon, and shuriken upgraded this way likewise never run out.</Pair>
</Ability>
</>};
const _deadly_shuriken = {title: "Deadly Shuriken", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="deadly-shuriken-ex" icon={["bowman","upgrade"]}>
<Pair single id="deadly-shuriken-ex">Deadly Shuriken (Ex)</Pair>
<Pair title="Full-Round Action">A ninja with this master trick can take careful aim and pool all of her attack potential into a single, deadly <Link to="/eq-weapon/shuriken">shuriken</Link> throw. When she does this, she throws a single shuriken at a single target, but makes as many attack rolls as she can, based on her base attack bonus. She makes the attack rolls in order from highest bonus to lowest, as if she were making a full attack. If any of the attack rolls hit the target, the attack hits. For each additional successful attack roll beyond the first, the ninja increases the damage by 1d6.</Pair>
<Pair title="Special"><p><Link to="/misc/precision_damage">Precision damage</Link> and extra damage from weapon special abilities (such as <Link to="/magic-enh/flaming">flaming</Link>) are added with damage modifiers and are not increased by this advanced talent.</p>
<p>If one or more rolls are critical threats, she confirms the critical once using her highest base attack bonus -5. For each critical threat beyond the first, she reduces this penalty by 1 (to a maximum of 0).</p>
</Pair>
</Ability>
</>};
const _evasion = {title: "Evasion", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="evasion-ex" icon={["armor-upgrade"]}>
<Pair single id="evasion-ex">Evasion (Ex)</Pair>
<Pair title="Ability">A ninja can avoid even magical and unusual attacks with great agility. If she makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, she instead takes no damage.</Pair>
<Pair title="Special"><Link to="/ability/evasion">Evasion</Link> can be used only if the ninja is wearing light armor or no armor. A helpless ninja does not gain the benefit of <em>evasion.</em></Pair>
</Ability>
</>};
const _feat = {title: "Feat", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="feat" icon={["stairs-goal"]}>
<Pair single id="feat">Feat</Pair>
<Pair title="Ability">A ninja may gain any feat that she qualifies for in place of a ninja trick.</Pair>
</Ability>
</>};
const _spiritual_companion = {title: "Spiritual Companion", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends</Link></p>
<Ability id="spiritual-companion-ex" icon={["stairs-goal"]}>
<Pair single id="spiritual-companion-ex" flavor="While ninjas are accustomed to solitude, some form pacts with magical beings to seek aid and advice.">Spiritual Companion (Ex)</Pair>
<Pair title="Ability">A ninja with this trick gains an <Link to="/feat/improved_familiar">improved familiar</Link>, treating her ninja level as her wizard level. The ninja can select any of the following as her familiar: <Link to="/monster/calligraphy_wyrm">calligraphy wyrm</Link>, <Link to="/monster/pipefox">pipefox</Link>, <Link to="/monster/shikigami">shikigami kami</Link>, or <Link to="/monster/spirit_oni">spirit oni</Link>. The ninja must have an alignment compatible with the chosen familiar.</Pair>
</Ability>
</>};
const _unarmed_combat_mastery = {title: "Unarmed Combat Mastery", topLink: ["Master Ninja Tricks","ability/master_tricks"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="unarmed-combat-mastery-ex" icon={["mailed-fist","upgrade"]}>
<Pair single id="unarmed-combat-mastery-ex">Unarmed Combat Mastery (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> (whether from <Link to="/ninjatrick/unarmed_combat_training">unarmed combat training</Link> or not)</Pair>
<Pair title="Ability">A ninja who selects this trick deals damage with her unarmed strikes as if she were a <Link to="/class/monk">monk</Link> of her ninja level - 4.</Pair>
<Pair title="Special">If the ninja has levels in monk, this ability stacks with monk levels to determine how much damage she can do with her unarmed strikes.</Pair>
</Ability>
</>};
export default {not_found:_not_found,bleeding_attack:_bleeding_attack,ki_block:_ki_block,pressure_points:_pressure_points,slow_reactions:_slow_reactions,deadly_range:_deadly_range,acrobatic_master:_acrobatic_master,high_jumper:_high_jumper,blood_debt:_blood_debt,breath_of_the_ancestors:_breath_of_the_ancestors,darkvision:_darkvision,feather_fall:_feather_fall,flurry_of_stars:_flurry_of_stars,forgotten_trick:_forgotten_trick,herbal_compound:_herbal_compound,kamikaze:_kamikaze,ki_charge:_ki_charge,ki_venom:_ki_venom,shadow_clone:_shadow_clone,smoke_bomb:_smoke_bomb,poison_bomb:_poison_bomb,choking_bomb:_choking_bomb,strangler:_strangler,sudden_disguise:_sudden_disguise,vanishing_trick:_vanishing_trick,ventriloquism:_ventriloquism,arcane_backfire:_arcane_backfire,combat_trick:_combat_trick,fast_stealth:_fast_stealth,hidden_weapons:_hidden_weapons,redirect_force:_redirect_force,rogue_talent:_rogue_talent,slow_metabolism:_slow_metabolism,style_master:_style_master,swarming_attack:_swarming_attack,swift_poisoner:_swift_poisoner,unarmed_combat_training:_unarmed_combat_training,deflect_arrows:_deflect_arrows,snatch_arrows:_snatch_arrows,undetected_sabotage:_undetected_sabotage,wall_climber:_wall_climber,weapon_training:_weapon_training,assassinate:_assassinate,blinding_bomb:_blinding_bomb,fractured_mirror:_fractured_mirror,greater_ki_venom:_greater_ki_venom,invisible_blade:_invisible_blade,master_disguise:_master_disguise,shadow_split:_shadow_split,acceleration_of_form:_acceleration_of_form,deep_cover:_deep_cover,many_guises:_many_guises,false_face:_false_face,ghost_step:_ghost_step,kami_warden:_kami_warden,kawarimi:_kawarimi,occulted_soul:_occulted_soul,see_the_unseen:_see_the_unseen,unbound_steps:_unbound_steps,advanced_talent:_advanced_talent,all_the_stars_in_the_sky:_all_the_stars_in_the_sky,deadly_shuriken:_deadly_shuriken,evasion:_evasion,feat:_feat,spiritual_companion:_spiritual_companion,unarmed_combat_mastery:_unarmed_combat_mastery}