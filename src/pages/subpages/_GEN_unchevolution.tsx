import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import AffInfo from '../../components/AfflictionInfo';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested unchained eidolon evolution.</p>
</>};
const _basic_psychic_magic = {title: "Basic Psychic Magic", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms pg. 18</Link></p>
<Ability id="basic-psychic-magic" icon={["magic-swirl"]}>
<Pair single id="basic-psychic-magic">Basic Psychic Magic</Pair>
<Pair title="Prerequisites"><Link to="/eidolon/aberrant">Aberrant</Link> subtype, Charisma 10</Pair>
<Pair title="Choice">Select one spell from the following list: <Link to="/spell/dancing_lights">dancing lights</Link>, <Link to="/spell/detect_magic">detect magic</Link>, <Link to="/spell/ghost_sound">ghost sound</Link>, <Link to="/spell/grave_words">grave words</Link>, <Link to="/spell/know_direction">know direction</Link>, <Link to="/spell/lullaby">lullaby</Link>, <Link to="/spell/mage_hand">mage hand</Link>, <Link to="/spell/open_close">open/close</Link>, or <Link to="/spell/telekinetic_projectile">telekinetic projectile</Link>.</Pair>
<Pair title="Ability">The eidolon can cast the chosen spell as a psychic spell at will. The spell requires thought and emotion components as normal for <Link to="/rule/psychic_magic">psychic magic</Link>. The eidolon's caster level is equal to the eidolon's Hit Dice - 2 (minimum CL 1st). The save DC equals 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier.</Pair>
<Pair title="Special">This evolution can be selected more than once, selecting a different spell each time.</Pair>
</Ability>
</>};
const _bite = {title: "Bite", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 35</Link></p>
<Ability id="bite-ex" icon={["mailed-fist"]}>
<Pair single id="bite-ex">Bite (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/eidolon/agathion">Agathion</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/div">div</Link>, <Link to="/eidolon/elemental">elemental</Link>, <Link to="/eidolon/protean">protean</Link>, or <Link to="/eidolon/psychopomp">psychopomp</Link> subtype</Pair>
<Pair title="Ability"><p>The eidolon's maw is full of razor-sharp teeth, giving it a <Link to="/umr/bite_attack">bite attack</Link>. This attack is a primary attack. The bite deals 1d6 points of damage (1d8 if Large, 2d6 if Huge).</p>
<p>If the eidolon already has a bite attack, this evolution allows it to deal 1-1/2 times its Strength modifier on damage rolls made with its bite.</p>
</Pair>
</Ability>
</>};
const _claws = {title: "Claws", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 35</Link></p>
<Ability id="claws-ex" icon={["mailed-fist"]}>
<Pair single id="claws-ex">Claws (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/eidolon/agathion">Agathion</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/div">div</Link>, <Link to="/eidolon/elemental">elemental</Link>, <Link to="/eidolon/protean">protean</Link>, or <Link to="/eidolon/psychopomp">psychopomp</Link> subtype; <Link to="/unchevolution/limbs">limbs</Link> evolution</Pair>
<Pair title="Ability">The eidolon has a pair of vicious claws at the ends of its limbs, giving it two <Link to="/umr/claw_attack">claw attacks</Link>. These attacks are primary attacks. The claws deal 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once, up to the number of <em>limbs</em> evolutions the eidolon possesses. This evolution can be applied to any number of <em>limbs (arms)</em> evolutions, but no more than one <em>limbs (legs)</em> evolution.</Pair>
</Ability>
</>};
const _climb = {title: "Climb", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 35</Link></p>
<Ability id="climb-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="climb-ex">Climb (Ex)</Pair>
<Pair title="Ability">The eidolon becomes a skilled climber, gaining a climb speed equal to its base speed.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each additional time it is selected, increase the eidolon's climb speed by 20 feet.</Pair>
</Ability>
</>};
const _gills = {title: "Gills", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 35</Link></p>
<Ability id="gills-ex" icon={["stairs-goal"]}>
<Pair single id="gills-ex">Gills (Ex)</Pair>
<Pair title="Ability">The eidolon has gills and can breathe underwater indefinitely.</Pair>
</Ability>
</>};
const _improved_damage = {title: "Improved Damage", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 35</Link></p>
<Ability id="improved-damage-ex" icon={["upgrade"]}>
<Pair single id="improved-damage-ex" flavor="One of the eidolon's natural attacks is particularly deadly.">Improved Damage (Ex)</Pair>
<Pair title="Ability">Select one natural attack form and <Link to="/misc/increase_the_damage_die">increase the damage die</Link> by one step.</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time the eidolon selects this evolution, it applies to a different natural attack.</Pair>
</Ability>
</>};
const _improved_natural_armor = {title: "Improved Natural Armor", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 35</Link></p>
<Ability id="improved-natural-armor-ex" icon={["armor-upgrade"]}>
<Pair single id="improved-natural-armor-ex">Improved Natural Armor (Ex)</Pair>
<Pair title="Passive Ability">The eidolon's hide grows thick fur, rigid scales, or bony plates, giving it a +2 bonus to its natural armor.</Pair>
<Pair title="Special">This evolution can be taken once, plus one additional time for every 5 levels the summoner possesses. Each additional time it's taken, the bonus increases by 2.</Pair>
</Ability>
</>};
const _magic_attacks = {title: "Magic Attacks", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 35</Link></p>
<Ability id="magic-attacks-su" icon={["upgrade"]}>
<Pair single id="magic-attacks-su">Magic Attacks (Su)</Pair>
<Pair title="Passive Ability">The eidolon is infused with magic, allowing it to treat all of its natural attacks as if they were magic for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 10th Level">All of the eidolon's natural attacks are treated as the alignment of the eidolon for the purpose of overcoming damage reduction.</Pair>
</Ability>
</>};
const _mount = {title: "Mount", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 35</Link></p>
<Ability id="mount-ex" icon={["stairs-goal"]}>
<Pair single id="mount-ex">Mount (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/eidolon/daemon">Daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/elemental">elemental</Link>, or <Link to="/eidolon/protean">protean</Link> subtype; quadruped or serpentine base form; must be at least one size category larger than its rider</Pair>
<Pair title="Ability">The eidolon is properly skilled and formed to serve as a <Link to="/rule/combat_trained">combat-trained</Link> mount.</Pair>
</Ability>
</>};
const _pincers = {title: "Pincers", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 35</Link></p>
<Ability id="pincers-ex" icon={["mailed-fist"]}>
<Pair single id="pincers-ex">Pincers (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/eidolon/agathion">Agathion</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/div">div</Link>, <Link to="/eidolon/elemental">elemental</Link>, <Link to="/eidolon/protean">protean</Link>, or <Link to="/eidolon/psychopomp">psychopomp</Link> subtype; <Link to="/unchevolution/limbs">limbs</Link> (arms) evolution, or its base form has <Link to="/unchevolution/claws">claws</Link> (this evolution replaces the claws)</Pair>
<Pair title="Ability"><p>An eidolon grows large pincers at the ends of one pair of its limbs, giving it two <Link to="/umr/pincer_attack">pincer attacks</Link>. These attacks are secondary attacks. The pincers deal 1d6 points of damage (1d8 if Large, 2d6 if Huge).</p>
<p>Eidolons with the <Link to="/unchevolution/grab">grab</Link> evolution linked to their pincers gain a +2 bonus on combat maneuver checks to grapple.</p>
</Pair>
<Pair title="Special">This evolution can be selected more than once, up to the number of <em>limbs (arms)</em> evolutions the eidolon possesses.</Pair>
</Ability>
</>};
const _pull = {title: "Pull", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 35</Link></p>
<Ability id="pull-ex" icon={["mailed-fist"]}>
<Pair single id="pull-ex" flavor="The eidolon gains the ability to pull creatures closer with a successful attack.">Pull (Ex)</Pair>
<Pair title="Prerequisites">Eidolon has reach of 10 feet or more</Pair>
<Pair title="Ability"><p>Select one type of natural attack. Whenever the eidolon makes a successful attack of the selected type, it can attempt a free combat maneuver check. If the eidolon succeeds at this check, it pulls the target of the attack 5 feet closer to it.</p>
<p>This ability works only on creatures of a size category equal to or smaller than the eidolon. Creatures pulled in this way do not provoke attacks of opportunity.</p>
</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time an eidolon selects this evolution, it applies to a different natural attack.</Pair>
</Ability>
</>};
const _push = {title: "Push", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 35</Link></p>
<Ability id="push-ex" icon={["mailed-fist"]}>
<Pair single id="push-ex" flavor="The eidolon gains the ability to push creatures away with a successful attack.">Push (Ex)</Pair>
<Pair title="Ability"><p>Select one type of natural attack. Whenever the eidolon makes a successful attack of the selected type, it can attempt a free combat maneuver check. If the eidolon succeeds at this check, it pushes the target of the attack 5 feet directly away from it.</p>
<p>This ability works only on creatures of a size category equal to or smaller than the eidolon. Creatures pushed in this way do not provoke attacks of opportunity.</p>
</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time an eidolon selects this evolution, it applies to a different natural attack.</Pair>
</Ability>
</>};
const _reach = {title: "Reach", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 36</Link></p>
<Ability id="reach-ex" icon={["upgrade"]}>
<Pair single id="reach-ex" flavor="One of the eidolon's attacks is capable of striking foes at a distance.">Reach (Ex)</Pair>
<Pair title="Ability">Select one attack. The eidolon's reach with that attack increases by 5 feet.</Pair>
</Ability>
</>};
const _resistance = {title: "Resistance", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 36</Link></p>
<Ability id="resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="resistance-ex">Resistance (Ex)</Pair>
<Pair title="Passive Ability"><p>An eidolon's form takes on a resiliency to one particular energy type, which is usually reflected in its physical body (ashen hide for fire, icy breath for cold, and so on).</p>
<p>Pick one energy type (acid, cold, electricity, fire, or sonic). The eidolon gains <Link to="/umr/resistance">resistance</Link> 5 against that energy type.</p>
</Pair>
<Pair title="At 5th Level">The resistance becomes 10.</Pair>
<Pair title="At 10th Level">The resistance becomes 15.</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time an eidolon selects this evolution, it applies to a different energy type.</Pair>
</Ability>
</>};
const _scent = {title: "Scent", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 36</Link></p>
<Ability id="scent-ex" icon={["stairs-goal"]}>
<Pair single id="scent-ex" flavor="The eidolon's sense of smell becomes quite acute.">Scent (Ex)</Pair>
<Pair title="Ability"><p>The eidolon gains the <Link to="/umr/scent">scent</Link> special quality, allowing it to detect opponents within 30 feet by sense of smell. If the opponent is upwind, the range increases to 60 feet; if the opponent is downwind, the range drops to 15 feet. Strong scents can be detected at twice the normal range.</p>
<p><em>Scent</em> does not allow the eidolon to precisely locate the creature, only to detect its presence. It can detect the direction as a <strong className="hl">move action</strong>. The eidolon can pinpoint the creature's location if it is within 5 feet. The eidolon can use <em>scent</em> to track creatures.</p>
</Pair>
</Ability>
</>};
const _shared_evolution = {title: "Shared Evolution", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 19</Link></p>
<Ability id="shared-evolution-su" icon={["stairs-goal"]}>
<Pair single id="shared-evolution-su">Shared Evolution (Su)</Pair>
<Pair title="Prerequisites"><Link to="/eidolon/twinned">Twinned</Link> eidolon</Pair>
<Pair title="Choice">Select a 1-point or 2-point evolution the eidolon has.</Pair>
<Pair title="Standard Action">The eidolon can touch the summoner and transfer the selected evolution to him. This functions as the <Link to="/class/unchained_summoner">summoner's aspect</Link> ability, and the same limitations apply.</Pair>
<Pair title="Special">The summoner can touch the eidolon as a <strong className="hl">standard action</strong> to return the evolution. The evolution returns to the eidolon automatically if the eidolon is dismissed by the summoner or sent back to its home plane.</Pair>
</Ability>
</>};
const _skilled = {title: "Skilled", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 36</Link></p>
<Ability id="skilled-ex" icon={["upgrade"]}>
<Pair single id="skilled-ex">Skilled (Ex)</Pair>
<Pair title="Passive Ability">The eidolon becomes especially adept at a specific skill, gaining a +8 racial bonus on that skill.</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time the eidolon selects this evolution, it applies to a different skill.</Pair>
</Ability>
</>};
const _slam = {title: "Slam", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 36</Link></p>
<Ability id="slam-ex" icon={["mailed-fist"]}>
<Pair single id="slam-ex">Slam (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/unchevolution/limbs">Limbs</Link> (arms), or its base form has <Link to="/unchevolution/claws">claws</Link> (this evolution replaces the claws)</Pair>
<Pair title="Ability">The eidolon can deliver a devastating <Link to="/umr/slam_attack">slam attack</Link>. This attack is a primary attack. The slam deals 1d8 points of damage (2d6 if Large, 2d8 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once, up to the number of the eidolon's <em>limbs (arms)</em> evolutions.</Pair>
</Ability>
</>};
const _sting = {title: "Sting", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 36</Link></p>
<Ability id="sting-ex" icon={["mailed-fist"]}>
<Pair single id="sting-ex">Sting (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/eidolon/agathion">Agathion</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/div">div</Link>, <Link to="/eidolon/elemental">elemental</Link>, <Link to="/eidolon/protean">protean</Link>, or <Link to="/eidolon/psychopomp">psychopomp</Link> subtype; <Link to="/unchevolution/tail">tail</Link> evolution</Pair>
<Pair title="Ability">The eidolon possesses a long, barbed stinger at the end of its tail, granting it a <Link to="/umr/sting_attack">sting attack</Link>. This attack is a primary attack. The sting deals 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once, up to the number of <em>tail</em> evolutions the eidolon possesses.</Pair>
</Ability>
</>};
const _swim = {title: "Swim", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 36</Link></p>
<Ability id="swim-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="swim-ex">Swim (Ex)</Pair>
<Pair title="Ability">The eidolon gains webbed hands, webbed feet, or powerful flippers, giving it a swim speed equal to its base speed. This evolution does not give the eidolon the ability to breathe underwater.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each additional time it is selected, increase the eidolon's swim speed by 20 feet.</Pair>
</Ability>
</>};
const _tail = {title: "Tail", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 36</Link></p>
<Ability id="tail-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="tail-ex">Tail (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/eidolon/agathion">Agathion</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/div">div</Link>, <Link to="/eidolon/elemental">elemental</Link>, <Link to="/eidolon/protean">protean</Link>, or <Link to="/eidolon/psychopomp">psychopomp</Link> subtype</Pair>
<Pair title="Ability">The eidolon grows a long, powerful tail. This grants it a +2 racial bonus on Acrobatics checks to balance on a surface.</Pair>
<Pair title="Special">This evolution can be selected more than once.</Pair>
</Ability>
</>};
const _tail_slap = {title: "Tail Slap", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 36</Link></p>
<Ability id="tail-slap-ex" icon={["mailed-fist"]}>
<Pair single id="tail-slap-ex">Tail Slap (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/eidolon/agathion">Agathion</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/div">div</Link>, <Link to="/eidolon/elemental">elemental</Link>, <Link to="/eidolon/protean">protean</Link>, or <Link to="/eidolon/psychopomp">psychopomp</Link> subtype; <Link to="/unchevolution/tail">tail</Link> evolution</Pair>
<Pair title="Ability">The eidolon can use its tail to bash nearby foes, granting it a <Link to="/umr/tail_slap_attack">tail slap attack</Link>. This attack is a secondary attack. The tail slap deals 1d6 points of damage (1d8 if Large, 2d6 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once, up to the number of <em>tail</em> evolutions the eidolon possesses.</Pair>
</Ability>
</>};
const _tentacle = {title: "Tentacle", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 36</Link></p>
<Ability id="tentacle-ex" icon={["mailed-fist"]}>
<Pair single id="tentacle-ex">Tentacle (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/eidolon/daemon">Daemon</Link>, <Link to="/eidolon/demon">demon</Link>, or <Link to="/eidolon/protean">protean</Link> subtype</Pair>
<Pair title="Ability">The eidolon possesses a long, sinuous tentacle, granting it a <Link to="/umr/tentacle_attack">tentacle attack</Link>. This attack is a secondary attack. The tentacle attack deals 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once.</Pair>
</Ability>
</>};
const _tentacle_mass = {title: "Tentacle Mass", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms pg. 18</Link></p>
<Ability id="tentacle-mass-ex" icon={["mailed-fist"]}>
<Pair single id="tentacle-mass-ex">Tentacle Mass (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/eidolon/aberrant">Aberrant</Link> subtype eidolon</Pair>
<Pair title="Ability">The eidolon grows a thick mass of tentacles that can be used as a primary <Link to="/umr/natural_weapon">natural weapon</Link>. The tentacles deal 1d8 points of damage if the eidolon is Medium.</Pair>
<Pair title="Special">Eidolons with the <Link to="/unchevolution/grab">grab</Link> evolution that is linked to a <em>tentacle mass</em> can use that ability to <Link to="/rule/grapple">grapple</Link> foes of up to the eidolon's size, and they can also use this evolution in place of the serpentine base form to qualify for the <Link to="/unchevolution/constrict">constrict</Link> evolution.</Pair>
</Ability>
</>};
const _wing_buffet = {title: "Wing Buffet", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 36</Link></p>
<Ability id="wing-buffet-ex" icon={["mailed-fist"]}>
<Pair single id="wing-buffet-ex">Wing Buffet (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/unchevolution/flight">Flight</Link> (wings) evolution</Pair>
<Pair title="Ability">The eidolon learns to use its wings to batter foes, granting it two <Link to="/umr/wing_buffet_attack">wing buffet attacks</Link>. These attacks are secondary attacks. The wing buffets deal 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
</Ability>
</>};
const _ability_increase = {title: "Ability Increase", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 36</Link></p>
<Ability id="ability-increase-ex" icon={["upgrade"]}>
<Pair single id="ability-increase-ex">Ability Increase (Ex)</Pair>
<Pair title="Passive Ability">The eidolon grows larger muscles, gains faster reflexes, achieves greater intelligence, or acquires another increase to one of its abilities. Increase one of the eidolon's ability scores by 2.</Pair>
<Pair title="Special">This evolution can be selected more than once. It can be applied only once to an individual ability score, plus one additional time for every 6 levels the summoner possesses.</Pair>
</Ability>
</>};
const _blood_frenzy = {title: "Blood Frenzy", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms pg. 19</Link></p>
<Ability id="blood-frenzy-ex" icon={["upgrade"]}>
<Pair single id="blood-frenzy-ex">Blood Frenzy (Ex)</Pair>
<Pair title="Prerequisites">7th-level unchained summoner; <Link to="/eidolon/aberrant">aberrant</Link>, <Link to="/eidolon/daemon">daemon</Link>, or <Link to="/eidolon/demon">demon</Link> subtype</Pair>
<Pair title="Ability">When the eidolon is dealt damage, it enters a blood frenzy. It gains a +2 morale bonus on attack rolls and weapon damage rolls and attacks the nearest creature each round, friend or foe, although it ceases attacking its summoner after hitting once. The frenzy lasts for 5 rounds or until the eidolon can perceive no creatures.</Pair>
<Pair title="Special">At the end of that time, the eidolon is <Link to="/misc/fatigued">fatigued</Link> for 1 minute. It cannot enter a blood frenzy while fatigued.</Pair>
</Ability>
</>};
const _constrict = {title: "Constrict", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 36</Link></p>
<Ability id="constrict-ex" icon={["upgrade"]}>
<Pair single id="constrict-ex" flavor="The eidolon gains powerful muscles that allow it to crush those it grapples.">Constrict (Ex)</Pair>
<Pair title="Prerequisites">Serpentine base form, <Link to="/unchevolution/grab">grab</Link></Pair>
<Pair title="Passive Ability">Whenever the eidolon successfully grapples a foe using the <em>grab</em> evolution, it deals additional damage equal to the amount of damage dealt by the attack the <em>grab</em> evolution is tied to.</Pair>
</Ability>
</>};
const _energy_attacks = {title: "Energy Attacks", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 36</Link></p>
<Ability id="energy-attacks-su" icon={["upgrade"]}>
<Pair single id="energy-attacks-su" flavor="The eidolon's attacks become charged with energy.">Energy Attacks (Su)</Pair>
<Pair title="Prerequisites">5th-level unchained summoner</Pair>
<Pair title="Choice">Select one energy type: acid, cold, electricity, or fire.</Pair>
<Pair title="Ability">All of the eidolon's natural attacks deal 1d6 points of energy damage of the chosen type on a successful hit.</Pair>
</Ability>
</>};
const _extra_feat = {title: "Extra Feat", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 19</Link></p>
<Ability id="extra-feat-ex" icon={["stairs-goal"]}>
<Pair single id="extra-feat-ex">Extra Feat (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/eidolon/twinned">Twinned</Link> eidolon</Pair>
<Pair title="Ability">The eidolon gains an extra feat. It must meet the prerequisites of the feat.</Pair>
</Ability>
</>};
const _flight = {title: "Flight", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 37</Link></p>
<Ability id="flight-ex-or-su" icon={["stairs-goal"]}>
<Pair single id="flight-ex-or-su">Flight (Ex or Su)</Pair>
<Pair title="Prerequisites">5th-level unchained summoner</Pair>
<Pair title="Ability">The eidolon grows large wings, like those of a bat, bird, insect, or dragon, gaining the ability to fly. The eidolon gains a fly speed equal to its base speed. The eidolon's maneuverability depends on its size. Medium or smaller eidolons have good maneuverability. Large eidolons have average maneuverability, while Huge eidolons have poor maneuverability.</Pair>
<Pair title="Ability">For 2 additional evolution points, the eidolon flies by means of magic. It loses its wings, but its maneuverability increases to perfect. If the eidolon flies by magic, this is a supernatural ability.</Pair>
<Pair title="Special">The eidolon can increase its fly speed by spending additional evolution points, gaining a 20-foot increase to its fly speed for each additional point spent.</Pair>
</Ability>
</>};
const _gore = {title: "Gore", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 37</Link></p>
<Ability id="gore-ex" icon={["mailed-fist"]}>
<Pair single id="gore-ex">Gore (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/eidolon/agathion">Agathion</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/div">div</Link>, <Link to="/eidolon/elemental">elemental</Link>, <Link to="/eidolon/protean">protean</Link>, or <Link to="/eidolon/psychopomp">psychopomp</Link> subtype</Pair>
<Pair title="Ability">The eidolon grows a number of horns on its head, giving it a <Link to="/umr/gore_attack">gore attack</Link>. This attack is a primary attack. The gore deals 1d6 points of damage (1d8 if Large, 2d6 if Huge).</Pair>
</Ability>
</>};
const _grab = {title: "Grab", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 37</Link></p>
<Ability id="grab-ex" icon={["mailed-fist","upgrade"]}>
<Pair single id="grab-ex">Grab (Ex)</Pair>
<Pair title="Ability">The eidolon becomes adept at grappling foes, gaining the <Link to="/umr/grab">grab</Link> ability. Select one of the following attacks: <Link to="/unchevolution/bite">bite</Link>, <Link to="/unchevolution/claws">claws</Link>, <Link to="/unchevolution/pincers">pincers</Link>, <Link to="/unchevolution/slam">slam</Link>, <Link to="/unchevolution/tail_slap">tail slap</Link>, or <Link to="/unchevolution/tentacle">tentacle</Link>. Whenever the eidolon makes a successful attack of the selected type, it can attempt a free combat maneuver check. If successful, the eidolon <Link to="/rule/grapple">grapples</Link> the target. This ability works only on creatures at least one size category smaller than the eidolon. Eidolons with this evolution gain a +4 bonus on combat maneuver checks to grapple.</Pair>
</Ability>
</>};
const _immunity = {title: "Immunity", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 37</Link></p>
<Ability id="immunity-su" icon={["armor-upgrade"]}>
<Pair single id="immunity-su" flavor="The eidolon's body becomes extremely resilient to one energy type.">Immunity (Su)</Pair>
<Pair title="Prerequisites">7th-level unchained summoner</Pair>
<Pair title="Passive Ability">Select one energy type: acid, cold, electricity, fire, or sonic. The eidolon gains immunity to that energy type.</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time it applies to a different energy type.</Pair>
</Ability>
</>};
const _intermediate_psychic_magic = {title: "Intermediate Psychic Magic", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms pg. 19</Link></p>
<Ability id="intermediate-psychic-magic" icon={["magic-swirl"]}>
<Pair single id="intermediate-psychic-magic">Intermediate Psychic Magic</Pair>
<Pair title="Prerequisites">5th-level unchained summoner, <Link to="/eidolon/aberrant">aberrant</Link> subtype, <Link to="/unchevolution/basic_psychic_magic">basic psychic magic</Link>, Charisma 11+</Pair>
<Pair title="Ability">The eidolon gains 2 points of psychic energy that it can spend each day.</Pair>
<Pair title="Choice">Select one spell from the following list: <Link to="/spell/compel_hostility">compel hostility</Link>, <Link to="/spell/lesser_confusion">lesser confusion</Link>, <Link to="/spell/hypnotism">hypnotism</Link>, <Link to="/spell/mind_thrust_i">mind thrust I</Link>, or <Link to="/spell/vanish">vanish</Link>. The eidolon can use that spell thereafter as a psychic spell by spending 1 point of psychic energy. The caster level and save DC are the same as for <em>basic psychic magic.</em></Pair>
<Pair title="Special">This evolution can be selected more than once, selecting a different spell each time. The eidolon's amount of psychic energy available to spend each day does not stack - it uses only the highest number of points granted by its most powerful <em>psychic magic</em> evolution.</Pair>
</Ability>
</>};
const _limbs = {title: "Limbs", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 37</Link></p>
<Ability id="limbs-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="limbs-ex">Limbs (Ex)</Pair>
<Pair title="Ability"><p>The eidolon grows an additional pair of limbs. These limbs can take one of two forms.</p>
<p>They can be made into legs, complete with feet. Each pair of legs increases the eidolon's base speed by 10 feet.</p>
<p>Alternatively, they can be made into arms, complete with hands. The eidolon does not gain any additional natural attacks for an additional pair of arms, but it can take other evolutions that add additional attacks (such as <Link to="/unchevolution/claws">claws</Link> or <Link to="/unchevolution/slam">slam</Link>). Arms that have hands can be used to wield weapons, if the eidolon is proficient.</p>
</Pair>
<Pair title="Special">This evolution can be selected more than once.</Pair>
</Ability>
</>};
const _poison = {title: "Poison", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 37</Link></p>
<Ability id="poison-ex" icon={["upgrade"]}>
<Pair single id="poison-ex" flavor="The eidolon secretes toxic venom, gaining a poison attack.">Poison (Ex)</Pair>
<Pair title="Prerequisites">7th-level unchained summoner; <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/elemental">elemental</Link>, or <Link to="/eidolon/protean">protean</Link> subtype; <Link to="/unchevolution/bite">bite</Link> or <Link to="/unchevolution/sting">sting</Link></Pair>
<Pair title="Ability"><p>Select one bite or sting attack. Whenever the selected attack hits, the target is poisoned.</p>
<AffInfo type="Injury" save="Fort 10 + 1/2 the eidolon's HD + its Con modifier" freq="1/round for 4 rounds" eff={<>1d4 <Link to="/rule/str_damage">Str damage</Link></>} cure1 icon="p">Eidolon Poison</AffInfo>
<p>The save DC is equal to 10 + 1/2 the eidolon's Hit Dice + the eidolon's Constitution modifier.</p>
</Pair>
<Pair title="Special">For 2 additional evolution points, this poison deals Constitution damage instead. This poison can be used no more than once per round.</Pair>
</Ability>
</>};
const _rake = {title: "Rake", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 37</Link></p>
<Ability id="rake-ex" icon={["mailed-fist"]}>
<Pair single id="rake-ex">Rake (Ex)</Pair>
<Pair title="Prerequisites">4th-level unchained summoner; quadruped base form</Pair>
<Pair title="Ability">The eidolon grows dangerous claws on its feet, allowing it to make two <Link to="/umr/rake">rake</Link> attacks against foes it is grappling. These attacks are <Link to="/umr/primary_attack">primary attacks</Link>. The eidolon can make these additional attacks each time it succeeds at a <Link to="/rule/grapple">grapple</Link> check against the target. These rake attacks deal 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution counts as one natural attack toward the eidolon's maximum.</Pair>
</Ability>
</>};
const _rend = {title: "Rend", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 37</Link></p>
<Ability id="rend-ex" icon={["upgrade"]}>
<Pair single id="rend-ex" flavor={<>The eidolon learns to rip and tear the flesh of those it attacks with its claws, gaining the <Link to="/umr/rend">rend</Link> ability.</>}>Rend (Ex)</Pair>
<Pair title="Prerequisites">6th-level unchained summoner, <Link to="/unchevolution/claws">claws</Link></Pair>
<Pair title="Ability">Whenever the eidolon makes two successful claw attacks against the same target in 1 round, its claws latch on to the flesh and deal extra damage. This damage is equal to the damage dealt by one claw attack plus 1-1/2 times the eidolon's Strength modifier.</Pair>
</Ability>
</>};
const _shared_slot = {title: "Shared Slot", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 19</Link></p>
<Ability id="shared-slot-su" icon={["stairs-goal"]}>
<Pair single id="shared-slot-su">Shared Slot (Su)</Pair>
<Pair title="Prerequisites"><Link to="/eidolon/twinned">Twinned</Link> eidolon</Pair>
<Pair title="Choice">Select a magic item slot. A magic item worn by the eidolon in that slot remains active even if the summoner is also wearing a magic item in that slot.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each time an eidolon selects this evolution, it applies to a new slot.</Pair>
</Ability>
</>};
const _trample = {title: "Trample", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 37</Link></p>
<Ability id="trample-ex" icon={["mailed-fist","armor-upgrade"]}>
<Pair single id="trample-ex" flavor={<>The eidolon gains the ability to crush its foes underfoot, gaining the <Link to="/umr/trample">trample</Link> ability.</>}>Trample (Ex)</Pair>
<Pair title="Prerequisites">Biped or quadruped base form</Pair>
<Pair title="Full-Round Action"><p>The eidolon can overrun any creature that is at least one size category smaller than itself. This works like the <Link to="/rule/overrun">overrun</Link> combat maneuver, but the eidolon does not need to attempt a check; it merely has to move over opponents in its path. The creatures take 1d6 points of damage (1d8 if Large, 2d6 if Huge), plus 1-1/2 times the eidolon's Strength modifier.</p>
<p>Targets of the trample can make attacks of opportunity at a -4 penalty. If a target forgoes this attack of opportunity, it can attempt a Reflex save for half damage. The DC of this save is 10 + 1/2 the eidolon's Hit Dice + the eidolon's Strength modifier.</p>
</Pair>
<Pair title="Special">A trampling eidolon can deal trampling damage to a specific creature only once per round.</Pair>
</Ability>
</>};
const _tremorsense = {title: "Tremorsense", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 37</Link></p>
<Ability id="tremorsense-ex" icon={["stairs-goal"]}>
<Pair single id="tremorsense-ex">Tremorsense (Ex)</Pair>
<Pair title="Prerequisites">7th-level unchained summoner</Pair>
<Pair title="Ability">The eidolon becomes attuned to vibrations in the ground, gaining <Link to="/umr/tremorsense">tremorsense</Link> with a range of 30 feet. This works like the <Link to="/unchevolution/blindsense">blindsense</Link> evolution, but only if both the eidolon and the creature to be pinpointed are in contact with the ground.</Pair>
</Ability>
</>};
const _trip = {title: "Trip", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 37</Link></p>
<Ability id="trip-ex" icon={["mailed-fist"]}>
<Pair single id="trip-ex" flavor={<>The eidolon becomes adept at knocking foes to the ground with its bite, granting it a <Link to="/umr/trip">trip</Link> attack.</>}>Trip (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/eidolon/daemon">Daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/elemental">elemental</Link>, or <Link to="/eidolon/protean">protean</Link> subtype; <Link to="/unchevolution/bite">bite</Link></Pair>
<Pair title="Ability">Whenever the eidolon makes a successful bite attack, it can attempt a free combat maneuver check. If the eidolon succeeds at this check, the target is knocked <Link to="/rule/prone">prone</Link>. If the eidolon fails, it is not tripped in return.</Pair>
<Pair title="Special">This ability works only on creatures of a size category equal to or smaller than the eidolon.</Pair>
</Ability>
</>};
const _weapon_training = {title: "Weapon Training", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 37</Link></p>
<Ability id="weapon-training-ex" icon={["stairs-goal"]}>
<Pair single id="weapon-training-ex">Weapon Training (Ex)</Pair>
<Pair title="Ability">The eidolon learns to use a weapon, gaining <Link to="/feat/simple_weapon_proficiency">Simple Weapon Proficiency</Link> as a bonus feat.</Pair>
<Pair title="Special">If 2 additional evolution points are spent, it gains proficiency with all martial weapons as well.</Pair>
</Ability>
</>};
const _advanced_psychic_magic = {title: "Advanced Psychic Magic", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms pg. 19</Link></p>
<Ability id="advanced-psychic-magic" icon={["magic-swirl"]}>
<Pair single id="advanced-psychic-magic">Advanced Psychic Magic</Pair>
<Pair title="Prerequisites">7th-level unchained summoner, <Link to="/eidolon/aberrant">aberrant</Link> subtype, <Link to="/unchevolution/intermediate_psychic_magic">intermediate psychic magic</Link>, Charisma 12+</Pair>
<Pair title="Ability">The eidolon gains 5 points of psychic energy that it can spend each day.</Pair>
<Pair title="Choice">Select one spell from the following list: <Link to="/spell/darkness">darkness</Link>, <Link to="/spell/detect_thoughts">detect thoughts</Link>, <Link to="/spell/disfiguring_touch">disfiguring touch</Link>, <Link to="/spell/id_insinuation_i">id insinuation I</Link>, <Link to="/spell/mind_thrust_ii">mind thrust II</Link>, or <Link to="/spell/touch_of_idiocy">touch of idiocy</Link>. The eidolon can cast that spell as a psychic spell by spending 2 points of psychic energy. The caster level and save DC are the same as for <Link to="/unchevolution/basic_psychic_magic">basic psychic magic</Link>.</Pair>
<Pair title="Special">This evolution can be selected more than once, selecting a different spell each time. The eidolon's amount of psychic energy available to spend each day does not stack - it uses only the highest number of points granted by its most powerful <em>psychic magic</em> evolution.</Pair>
</Ability>
</>};
const _alien_consciousness = {title: "Alien Consciousness", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms pg. 19</Link></p>
<Ability id="alien-consciousness-ex" icon={["armor-upgrade"]}>
<Pair single id="alien-consciousness-ex" flavor="The eidolon's mind is dangerously incomprehensible to mortals who contact it.">Alien Consciousness (Ex)</Pair>
<Pair title="Prerequisites">9th-level unchained summoner; <Link to="/eidolon/aberrant">aberrant</Link> or <Link to="/eidolon/protean">protean</Link> subtype</Pair>
<Pair title="Passive Ability"><p>Non-aberrations that read the eidolon's mind or make mental contact with it take 1d4 points of <Link to="/rule/wisdom_damage">Wisdom damage</Link> (or 1d8 points of sanity damage, if you use the <Link to="/rule/sanity">sanity rules</Link>).</p>
<p>This contact also includes communication via telepathy - an eidolon that has telepathic capability must initiate this particular contact as a <strong className="hl">swift action</strong> against a single target in order to force its alien consciousness on another creature. A successful Will saving throw (DC = 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier) halves the damage.</p>
</Pair>
<Pair title="Special">Once a creature has been subjected to the eidolon's alien consciousness, it is immune to further damage from that eidolon's alien consciousness for 24 hours. The eidolon's summoner is immune to his own eidolon's alien consciousness, but he can still be affected by other eidolons' alien consciousnesses. This is a mind-affecting effect.</Pair>
</Ability>
</>};
const _blindsense = {title: "Blindsense", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 38</Link></p>
<Ability id="blindsense-ex" icon={["stairs-goal"]}>
<Pair single id="blindsense-ex">Blindsense (Ex)</Pair>
<Pair title="Prerequisites">9th-level unchained summoner</Pair>
<Pair title="Ability">The eidolon's senses become incredibly acute, giving it <Link to="/umr/blindsense">blindsense</Link> with a range of 30 feet. This ability allows the eidolon to pinpoint the location of creatures that it can't see without having to attempt a Perception check, but such creatures still have total <Link to="/rule/concealment">concealment</Link> from the eidolon. Visibility still affects the eidolon's movement, and it is still denied its Dexterity bonus to Armor Class against attacks from creatures it cannot see.</Pair>
</Ability>
</>};
const _burrow = {title: "Burrow", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 38</Link></p>
<Ability id="burrow-ex" icon={["stairs-goal"]}>
<Pair single id="burrow-ex" flavor="The eidolon grows thick and gnarled claws, allowing it to move through the earth.">Burrow (Ex)</Pair>
<Pair title="Prerequisites">9th-level unchained summoner</Pair>
<Pair title="Ability">The eidolon gains a burrow speed equal to 1/2 its base speed. It can use this speed to move through clay, dirt, earth, and sand. It does not leave a hole behind, nor is its passage marked on the surface.</Pair>
</Ability>
</>};
const _damage_reduction = {title: "Damage Reduction", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 38</Link></p>
<Ability id="damage-reduction-su" icon={["armor-upgrade"]}>
<Pair single id="damage-reduction-su" flavor="The eidolon's body becomes more resistant to harm.">Damage Reduction (Su)</Pair>
<Pair title="Prerequisites">15th-level unchained summoner, damage reduction granted by the eidolon's subtype</Pair>
<Pair title="Passive Ability">Increase the damage reduction granted by the eidolon's subtype by 5.</Pair>
</Ability>
</>};
const _frightful_presence = {title: "Frightful Presence", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 38</Link></p>
<Ability id="frightful-presence-ex" icon={["armor-downgrade"]}>
<Pair single id="frightful-presence-ex">Frightful Presence (Ex)</Pair>
<Pair title="Prerequisites">11th-level unchained summoner</Pair>
<Pair title="Ability"><p>The eidolon becomes unsettling to its foes, gaining the <Link to="/umr/frightful_presence">frightful presence</Link> ability. The eidolon can activate this ability as part of an offensive action, such as a <Link to="/rule/charge">charge</Link> or attack.</p>
<p>Opponents within 30 feet of the eidolon must succeed at a Will save or become <Link to="/misc/shaken">shaken</Link> for 3d6 rounds. The DC of this save is equal to 10 + 1/2 the eidolon's Hit Dice + the eidolon's Charisma modifier.</p>
<p>If the eidolon has at least 4 more Hit Dice than an opponent that fails this save, that opponent becomes <Link to="/misc/frightened">frightened</Link> instead.</p>
</Pair>
<Pair title="Special">Foes with more Hit Dice than the eidolon are immune to this effect.</Pair>
</Ability>
</>};
const _pounce = {title: "Pounce", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 38</Link></p>
<Ability id="pounce-ex" icon={["mailed-fist"]}>
<Pair single id="pounce-ex">Pounce (Ex)</Pair>
<Pair title="Prerequisites">7th-level unchained summoner, quadruped base form</Pair>
<Pair title="Ability">The eidolon gains quick reflexes, allowing it to make a full attack after a <Link to="/rule/charge">charge</Link>.</Pair>
</Ability>
</>};
const _swallow_whole = {title: "Swallow Whole", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 38</Link></p>
<Ability id="swallow-whole-ex" icon={["mailed-fist"]}>
<Pair single id="swallow-whole-ex">Swallow Whole (Ex)</Pair>
<Pair title="Prerequisites">9th-level unchained summoner; <Link to="/eidolon/agathion">agathion</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/div">div</Link>, <Link to="/eidolon/elemental">elemental</Link>, <Link to="/eidolon/protean">protean</Link>, or <Link to="/eidolon/psychopomp">psychopomp</Link> subtype; <Link to="/unchevolution/grab">grab</Link> (bite)</Pair>
<Pair title="Ability"><p>The eidolon gains the <Link to="/umr/swallow_whole">swallow whole</Link> ability, giving it the ability to consume its foes. If the eidolon begins its turn with a creature grappled using its <em>bite</em> attack (see the <em>grab</em> evolution), it can attempt a combat maneuver check to swallow the creature. The creature must be at least one size category smaller than the eidolon.</p>
<p>Swallowed creatures take an amount of bludgeoning damage equal to the eidolon's bite damage each round + 1d6 points of damage. A swallowed creature keeps the <Link to="/rule/grappled">grappled</Link> condition, but can attempt to cut its way free with a light piercing or slashing weapon. The amount of damage needed to cut free is equal to 1/10 the eidolon's total hit points. The eidolon's AC against these attacks is equal to 10 + 1/2 its natural armor bonus. If a swallowed creature cuts its way out, the eidolon loses this ability until it heals this damage.</p>
<p>Alternatively, the swallowed creature can attempt to escape the grapple as normal. Success indicates that it has returned to the eidolon's mouth, where it can attempt to escape or can be swallowed again.</p>
</Pair>
</Ability>
</>};
const _web = {title: "Web", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 38</Link></p>
<Ability id="web-ex" icon={["stairs-goal","smoking-finger"]}>
<Pair single id="web-ex">Web (Ex)</Pair>
<Pair title="Prerequisites">7th-level unchained summoner; <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, or <Link to="/eidolon/protean">protean</Link> subtype; <Link to="/unchevolution/climb">climb</Link></Pair>
<Pair title="Ability">The eidolon gains a pair of spinnerets, giving it the ability to spin webs. The eidolon can use these webs to support itself plus one creature of up to the same size.</Pair>
<Pair title="Ability"><p>It can throw webbing as a ranged touch attack up to eight times per day, entangling a creature up to one size larger than the eidolon. The webbing has a range of 50 feet and a 10-foot range increment.</p>
<p>Creatures <Link to="/rule/entangled">entangled</Link> by the web can escape with a successful Escape Artist check, or with a Strength check at a -4 penalty. The DC of these checks is equal to 10 + 1/2 the eidolon's Hit Dice + the eidolon's Constitution modifier. The webs have a hardness of 0 and a number of hits points equal to the eidolon's total Hit Dice.</p>
</Pair>
<Pair title="Special">The eidolon can climb its own webs at its climb speed and can pinpoint the location of any creature touching its webs.</Pair>
</Ability>
</>};
const _amorphous = {title: "Amorphous", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms pg. 19</Link></p>
<Ability id="amorphous-ex" icon={["armor-upgrade"]}>
<Pair single id="amorphous-ex">Amorphous (Ex)</Pair>
<Pair title="Prerequisites">9th-level unchained summoner, <Link to="/eidolon/aberrant">aberrant</Link> or <Link to="/eidolon/elemental">elemental</Link> subtype</Pair>
<Pair title="Passive Ability">The eidolon's biology lacks discernible weak points. It is not subject to critical hits and sneak attacks.</Pair>
</Ability>
</>};
const _blindsight = {title: "Blindsight", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 38</Link></p>
<Ability id="blindsight-ex" icon={["stairs-goal"]}>
<Pair single id="blindsight-ex">Blindsight (Ex)</Pair>
<Pair title="Prerequisites">11th-level unchained summoner, <Link to="/unchevolution/blindsense">blindsense</Link></Pair>
<Pair title="Ability">The eidolon's senses sharpen even further, granting it <Link to="/umr/blindsight">blindsight</Link> with a range of 30 feet. The eidolon can maneuver and attack as normal, ignoring darkness, invisibility, and most forms of <Link to="/rule/concealment">concealment</Link> as long as it has line of effect to the target.</Pair>
</Ability>
</>};
const _breath_weapon = {title: "Breath Weapon", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 38</Link></p>
<Ability id="breath-weapon-su" icon={["tornado-discs","barbed-arrow"]}>
<Pair single id="breath-weapon-su" flavor="The eidolon learns to exhale a cone or line of magical energy, gaining a breath weapon.">Breath Weapon (Su)</Pair>
<Pair title="Prerequisites">9th-level unchained summoner</Pair>
<Pair title="Choice">Select acid, cold, electricity, or fire.</Pair>
<Pair title="Ability">The eidolon can breathe a 30-foot cone (or 60-foot line) that deals 1d6 points of damage of the selected type per Hit Dice it possesses. Those caught in the breath weapon can attempt a Reflex save for half damage. The DC is equal to 10 + 1/2 the eidolon's Hit Dice + the eidolon's Constitution modifier.</Pair>
<Pair title="Special">The eidolon can use this ability once per day. The eidolon can gain additional uses of this ability per day by spending 1 evolution point per additional use (to a maximum of three total uses per day).</Pair>
</Ability>
</>};
const _disease = {title: "Disease", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms pg. 19</Link></p>
<Ability id="disease" icon={["upgrade"]}>
<Pair single id="disease">Disease</Pair>
<Pair title="Prerequisites">7th-level unchained summoner; <Link to="/eidolon/aberrant">aberrant</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, or <Link to="/eidolon/devil">devil</Link> subtype</Pair>
<Pair title="Ability">One of the eidolon's natural weapons carries a disease chosen from the following list: <Link to="/disease/bubonic_plague">bubonic plague</Link>, <Link to="/disease/filth_fever">filth fever</Link>, <Link to="/disease/leprosy">leprosy</Link>, <Link to="/disease/red_ache">red ache</Link>, or <Link to="/disease/shakes">shakes</Link>. Each hit forces a saving throw against the disease's normal effects. The disease has no onset, however. The save DC equals 10 + 1/2 the eidolon's Hit Dice + the eidolon's Constitution modifier. The eidolon can expose a creature to its disease no more than once per round.</Pair>
<Pair title="Special">By spending 2 additional evolution points, you can instead choose the following additional diseases: <Link to="/disease/demon_fever">demon fever</Link> (only if the eidolon has the <em>demon</em> subtype), <Link to="/disease/devil_chills">devil chills</Link> (only if the eidolon has the <em>devil</em> subtype), or <Link to="/disease/slimy_doom">slimy doom</Link>.</Pair>
</Ability>
</>};
const _fast_healing = {title: "Fast Healing", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 38</Link></p>
<Ability id="fast-healing-su" icon={["armor-upgrade"]}>
<Pair single id="fast-healing-su">Fast Healing (Su)</Pair>
<Pair title="Prerequisites">11th-level unchained summoner</Pair>
<Pair title="Passive Ability"><p>The eidolon's body gains the ability to heal wounds very quickly, giving it <Link to="/umr/fast_healing">fast healing</Link> 1. The eidolon heals 1 point of damage per round, just like via natural healing.</p>
<p><em>Fast healing</em> does not restore hit points lost due to starvation, thirst, or suffocation, nor does it allow the eidolon to regrow lost body parts (or to reattach severed parts).</p>
<p><em>Fast healing</em> functions as long as the eidolon is alive. This <em>fast healing</em> does not function when the eidolon is not on the same plane as its summoner.</p>
</Pair>
<Pair title="Special">This healing can be increased by 1 point per round for every 2 additional evolution points spent (to a maximum of 5 points per round).</Pair>
</Ability>
</>};
const _large = {title: "Large", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 39</Link></p>
<Ability id="large-ex" icon={["upgrade","armor-upgrade","broken-shield"]}>
<Pair single id="large-ex">Large (Ex)</Pair>
<Pair title="Prerequisites">8th-level unchained summoner, Medium size</Pair>
<Pair title="Ability">The eidolon grows in size, becoming Large. The eidolon gains a +4 bonus to Strength, a +2 bonus to Constitution, and a +2 bonus to its natural armor. It takes a -2 penalty to Dexterity. This size change also gives the creature a -1 size penalty to AC and on attack rolls, a +1 bonus on combat maneuver checks and to CMD, a -2 penalty on Fly checks, and a -4 penalty on Stealth checks. If the eidolon has the biped base form, it also gains a reach of 10 feet. Any <Link to="/unchevolution/reach">reach</Link> evolutions the eidolon possesses are added to this total.</Pair>
<Pair title="At 13th Level"><p>If 6 additional evolution points are spent, the eidolon instead becomes Huge. The eidolon gains a +8 bonus to Strength, a +4 bonus to Constitution, and a +5 bonus to its natural armor. It takes a -4 penalty to Dexterity. This size change also gives the creature a -2 size penalty to AC and on attack rolls, a +2 bonus on combat maneuver checks and to CMD, a 10-foot reach, a -4 penalty on Fly checks, and a -8 penalty on Stealth checks. If the eidolon has the biped base form, its reach increases to 15 feet instead of 10 feet. Any <em>reach</em> evolutions the eidolon possesses are added to this total.</p>
<p>These bonuses and penalties replace, and do not stack with, those gained from becoming Large.</p>
</Pair>
<Pair title="Special">The <Link to="/unchevolution/ability_increase">ability increase</Link> evolution costs twice as much (4 evolution points) when adding to the Strength or Constitution scores of a Large or Huge eidolon.</Pair>
</Ability>
</>};
const _spell_resistance = {title: "Spell Resistance", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 39</Link></p>
<Ability id="spell-resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="spell-resistance-ex" flavor="The eidolon is protected against magic, gaining spell resistance.">Spell Resistance (Ex)</Pair>
<Pair title="Prerequisites">9th-level unchained summoner</Pair>
<Pair title="Passive Ability">The eidolon's spell resistance is equal to 11 + the summoner's level. This spell resistance does not apply to spells cast by the summoner.</Pair>
</Ability>
</>};
const _superior_psychic_magic = {title: "Superior Psychic Magic", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms pg. 19</Link></p>
<Ability id="superior-psychic-magic" icon={["magic-swirl"]}>
<Pair single id="superior-psychic-magic">Superior Psychic Magic</Pair>
<Pair title="Prerequisites">11th-level unchained summoner, <Link to="/eidolon/aberrant">aberrant</Link> subtype, <Link to="/unchevolution/advanced_psychic_magic">advanced psychic magic</Link>, Charisma 13+</Pair>
<Pair title="Ability">The eidolon has 7 points of psychic magic to spend each day.</Pair>
<Pair title="Choice">Select one spell from the following list: <Link to="/spell/confusion">confusion</Link>, <Link to="/spell/deeper_darkness">deeper darkness</Link>, <Link to="/spell/displacement">displacement</Link>, <Link to="/spell/jesters_jaunt">jester's jaunt</Link>, <Link to="/spell/id_insinuation_ii">id insinuation II</Link>, or <Link to="/spell/mind_thrust_iii">mind thrust III</Link>. The eidolon can cast that spell as a psychic spell by spending 3 points of psychic energy. The caster level and save DC are the same as for <Link to="/unchevolution/basic_psychic_magic">basic psychic magic</Link>.</Pair>
<Pair title="Special">This evolution can be selected more than once, selecting a different spell each time. The eidolon's amount of psychic energy available to spend each day does not stack; it uses only the highest number of points granted by its most powerful <em>psychic magic</em> evolution.</Pair>
</Ability>
</>};
export default {not_found:_not_found,basic_psychic_magic:_basic_psychic_magic,bite:_bite,claws:_claws,climb:_climb,gills:_gills,improved_damage:_improved_damage,improved_natural_armor:_improved_natural_armor,magic_attacks:_magic_attacks,mount:_mount,pincers:_pincers,pull:_pull,push:_push,reach:_reach,resistance:_resistance,scent:_scent,shared_evolution:_shared_evolution,skilled:_skilled,slam:_slam,sting:_sting,swim:_swim,tail:_tail,tail_slap:_tail_slap,tentacle:_tentacle,tentacle_mass:_tentacle_mass,wing_buffet:_wing_buffet,ability_increase:_ability_increase,blood_frenzy:_blood_frenzy,constrict:_constrict,energy_attacks:_energy_attacks,extra_feat:_extra_feat,flight:_flight,gore:_gore,grab:_grab,immunity:_immunity,intermediate_psychic_magic:_intermediate_psychic_magic,limbs:_limbs,poison:_poison,rake:_rake,rend:_rend,shared_slot:_shared_slot,trample:_trample,tremorsense:_tremorsense,trip:_trip,weapon_training:_weapon_training,advanced_psychic_magic:_advanced_psychic_magic,alien_consciousness:_alien_consciousness,blindsense:_blindsense,burrow:_burrow,damage_reduction:_damage_reduction,frightful_presence:_frightful_presence,pounce:_pounce,swallow_whole:_swallow_whole,web:_web,amorphous:_amorphous,blindsight:_blindsight,breath_weapon:_breath_weapon,disease:_disease,fast_healing:_fast_healing,large:_large,spell_resistance:_spell_resistance,superior_psychic_magic:_superior_psychic_magic}