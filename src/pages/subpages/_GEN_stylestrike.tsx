import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested style strike.</p>
</>};
const _break = {title: "Break", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 7</Link></p>
<Ability id="break" icon={["mailed-fist"]}>
<Pair single id="break" flavor="The monk combines a writhing twist with a violent strike against a foe that is grappling him.">Break</Pair>
<Pair title="Ability">If the monk's attack is successful, he can attempt a <Link to="/rule/grapple">grapple</Link> combat maneuver check or <Link to="/skill/escape_artist">Escape Artist</Link> check as a <strong className="hl">free action</strong> to escape a grapple, adding the strike's damage as a bonus on his check.</Pair>
</Ability>
</>};
const _defensive_spin = {title: "Defensive Spin", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 18</Link></p>
<Ability id="defensive-spin" icon={["armor-upgrade"]}>
<Pair single id="defensive-spin" flavor="The monk spins about, confounding his foe.">Defensive Spin</Pair>
<Pair title="Ability">If the attack hits, the monk gains a +4 dodge bonus to AC against any attacks made by the target of the style strike until the start of his next turn. This bonus does not stack with itself.</Pair>
<Pair title="Special">The monk must attack with a fist to use this style strike.</Pair>
</Ability>
</>};
const _dirty_strikes = {title: "Dirty Strikes", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 31</Link></p>
<Ability id="dirty-strikes" icon={["mailed-fist"]}>
<Pair single id="dirty-strikes" flavor="The monk fights dirty with his style strike, attempting to strike in places where his attack will negatively impact his foes' performance in combat.">Dirty Strikes</Pair>
<Pair title="Ability">If the attack hits, the monk can perform a free <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver against the target of this strike (using the base attack bonus of the attack used to hit the foe) with a -5 penalty. This dirty trick combat maneuver does not provoke an attack of opportunity.</Pair>
</Ability>
</>};
const _elbow_smash = {title: "Elbow Smash", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 18</Link></p>
<Ability id="elbow-smash" icon={["mailed-fist"]}>
<Pair single id="elbow-smash" flavor="The monk follows up a punch with a strike from his elbow.">Elbow Smash</Pair>
<Pair title="Ability">If the attack hits, the monk can make an additional attack using the same attack bonus as the punch at a -5 penalty. If this second attack hits, it deals damage as normal, but all of the damage is nonlethal.</Pair>
<Pair title="Special">The monk must attack with a fist to use this style strike.</Pair>
</Ability>
</>};
const _flying_kick = {title: "Flying Kick", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 19</Link></p>
<Ability id="flying-kick" icon={["mailed-fist"]}>
<Pair single id="flying-kick" flavor="The monk leaps through the air to strike a foe with a kick.">Flying Kick</Pair>
<Pair title="Ability">Before the attack, the monk can move a distance equal to his <em>fast movement</em> bonus. This movement is made as part of the monk's <em>flurry of blows</em> attack and does not require an additional action. At the end of this movement, the monk must make an attack against an adjacent foe.</Pair>
<Pair title="Special">This movement may be between attacks. This movement provokes an attack of opportunity as normal. The attack made after the movement must be a kick.</Pair>
</Ability>
</>};
const _foot_stomp = {title: "Foot Stomp", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 19</Link></p>
<Ability id="foot-stomp" icon={["armor-downgrade"]}>
<Pair single id="foot-stomp" flavor="The monk stomps on a foe's foot, preventing the opponent from escaping.">Foot Stomp</Pair>
<Pair title="Ability">If the attack hits and the monk ends his turn adjacent to that foe, the foe's movement is restricted. Until the start of the monk's next turn, the target of this attack can move only in such a way that the space it occupies is adjacent to the monk. Alternatively, it can attempt a combat maneuver check (against the monk's CMD) as a <strong className="hl">standard action</strong> to break free.</Pair>
<Pair title="Special">This strike does not work against foes that cannot be tripped. The monk must attack with a kick to use this style strike.</Pair>
</Ability>
</>};
const _hammerblow = {title: "Hammerblow", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 19</Link></p>
<Ability id="hammerblow" icon={["upgrade"]}>
<Pair single id="hammerblow" flavor="The monk links his hands together, swinging both arms like a club and dealing tremendous damage.">Hammerblow</Pair>
<Pair title="Ability">If the attack hits, the monk rolls his unarmed strike damage twice, adding both rolls together before applying Strength and other modifiers to the damage. This bonus damage is not multiplied on a critical hit.</Pair>
<Pair title="Special">The monk must attack with a fist to use this style strike, but must have both hands free.</Pair>
</Ability>
</>};
const _head_butt = {title: "Head-Butt", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 19</Link></p>
<Ability id="head-butt" icon={["mailed-fist"]}>
<Pair single id="head-butt" flavor="The monk slams his head into his enemy's head, leaving his foe reeling.">Head-Butt</Pair>
<Pair title="Ability">If the attack hits and the foe is of the same size or one size smaller than the monk, the monk can make a free combat maneuver check against the target of this strike (using the base attack bonus of the attack used to hit the foe). If the foe is not of the same creature type as the monk, the monk takes a -8 penalty on this check. If the check is successful, the target is <Link to="/misc/staggered">staggered</Link> for 1 round.</Pair>
<Pair title="Special">Creatures without a discernible head are not affected by this style strike (subject to GM discretion). The monk must attack with a head-butt to use this style strike.</Pair>
</Ability>
</>};
const _knockback_kick = {title: "Knockback Kick", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 19</Link></p>
<Ability id="knockback-kick" icon={["mailed-fist"]}>
<Pair single id="knockback-kick" flavor="The monk attempts to knock his foe back with a powerful kick.">Knockback Kick</Pair>
<Pair title="Ability">If the attack hits, the monk can attempt a free combat maneuver check against the foe (using the base attack bonus of the attack used to hit the foe). If the check is successful, the foe is knocked 10 feet directly away from the monk. This distance increases by 10 feet for every 5 by which the check exceeds the foe's CMD, to a maximum distance equal to the monk's <em>fast movement</em> bonus. This movement does not provoke an attack of opportunity. The foe stops moving if it strikes another creature, barrier, or otherwise solid object. The creature is not knocked prone by this movement.</Pair>
<Pair title="Special">The monk must attack with a kick to use this style strike.</Pair>
</Ability>
</>};
const _leg_sweep = {title: "Leg Sweep", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 19</Link></p>
<Ability id="leg-sweep" icon={["mailed-fist"]}>
<Pair single id="leg-sweep" flavor="The monk attempts to sweep his foe's leg, knocking the opponent down.">Leg Sweep</Pair>
<Pair title="Ability">If the attack hits, the monk can make a free <Link to="/rule/trip">trip</Link> attempt against the target of this strike (using the base attack bonus of the attack used to hit the foe).</Pair>
<Pair title="Special">This trip attempt does not provoke an attack of opportunity. The monk must attack with a kick to use this style strike.</Pair>
</Ability>
</>};
const _overbearing_assault = {title: "Overbearing Assault", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 31</Link></p>
<Ability id="overbearing-assault" icon={["mailed-fist"]}>
<Pair single id="overbearing-assault" flavor="The monk attacks relentlessly, backing his foe into a corner.">Overbearing Assault</Pair>
<Pair title="Ability">If the attack hits, the monk can perform a free <Link to="/rule/reposition">reposition</Link> combat maneuver against the target of the strike (using the base attack bonus of the attack used to hit the foe) with a -5 penalty.</Pair>
<Pair title="Special">This reposition attempt does not provoke an attack of opportunity.</Pair>
</Ability>
</>};
const _rabbit_punch = {title: "Rabbit Punch", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 6</Link></p>
<Ability id="rabbit-punch" icon={["upgrade"]}>
<Pair single id="rabbit-punch" flavor="The monk gives a sharp blow to the back of a foe's head.">Rabbit Punch</Pair>
<Pair title="Ability">The critical threat range and critical multiplier of this strike increase by 1, and the monk gains a +2 bonus on attack rolls to confirm a critical hit with this strike.</Pair>
<Pair title="Special">This increase is not doubled by <Link to="/feat/improved_critical">Improved Critical</Link> or similar effects. Creatures without a discernible head are unaffected by this style strike (subject to GM discretion). The monk must attack with a fist to use this style strike.</Pair>
</Ability>
</>};
const _shattering_punch = {title: "Shattering Punch", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 19</Link></p>
<Ability id="shattering-punch" icon={["upgrade"]}>
<Pair single id="shattering-punch" flavor="The monk delivers a brutal punch that can penetrate defenses.">Shattering Punch</Pair>
<Pair title="Ability">If the attack hits, it bypasses any damage reduction or hardness possessed by the target of that attack.</Pair>
<Pair title="Special">The monk must attack with a fist to use this style strike.</Pair>
</Ability>
</>};
const _spin_kick = {title: "Spin Kick", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 19</Link></p>
<Ability id="spin-kick" icon={["upgrade"]}>
<Pair single id="spin-kick" flavor="The monk spins about, delivering a kick his foe did not expect.">Spin Kick</Pair>
<Pair title="Ability">The monk makes his attack against the foe's <Link to="/rule/flat_footed">flat-footed</Link> AC. Creatures with the <Link to="/ability/uncanny_dodge">uncanny dodge</Link> class feature or a similar effect cannot be caught flat-footed by this style strike.</Pair>
<Pair title="Special">The monk must attack with a kick to use this style strike.</Pair>
</Ability>
</>};
const _throat_crush = {title: "Throat Crush", jsx: <><p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 7</Link></p>
<Ability id="throat-crush" icon={["mailed-fist"]}>
<Pair single id="throat-crush">Throat Crush</Pair>
<Pair title="Ability">The monk gives a sharp blow to a foe's throat, hampering its ability to speak for 1 round as if it had the <Link to="/rule/minor_spellblights">caster croak spellblight</Link>.</Pair>
<Pair title="Special">Creatures without a discernible throat, or with multiple vocal organs, are unaffected (subject to GM discretion).</Pair>
</Ability>
</>};
export default {not_found:_not_found,break:_break,defensive_spin:_defensive_spin,dirty_strikes:_dirty_strikes,elbow_smash:_elbow_smash,flying_kick:_flying_kick,foot_stomp:_foot_stomp,hammerblow:_hammerblow,head_butt:_head_butt,knockback_kick:_knockback_kick,leg_sweep:_leg_sweep,overbearing_assault:_overbearing_assault,rabbit_punch:_rabbit_punch,shattering_punch:_shattering_punch,spin_kick:_spin_kick,throat_crush:_throat_crush}