import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested mesmerist stare.</p>
</>};
const _allure = {title: "Allure", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 42</Link></p>
<Ability id="allure" icon={["armor-downgrade"]}>
<Pair single id="allure">Allure</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies on initiative checks and Perception checks.</Pair>
</Ability>
</>};
const _devilbane_binding = {title: "Devilbane Binding", addenda: ["devilbane"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 13</Link></p>
<Ability id="devilbane-binding" icon={["armor-downgrade"]}>
<Pair single id="devilbane-binding">Devilbane Binding</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to all Charisma checks to escape <Link to="/spell/planar_binding">planar binding</Link> spells, and applies to the target's spell resistance against a planar binding spell.</Pair>
</Ability>
</>};
const _devilbane_dampening = {title: "Devilbane Dampening", addenda: ["devilbane"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 13</Link></p>
<Ability id="devilbane-dampening" icon={["armor-downgrade"]}>
<Pair single id="devilbane-dampening">Devilbane Dampening</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to the target's resistance to a single form of energy, chosen by the mesmerist when he initiates the stare. If the mesmerist targets a form of energy to which his target has no resistance, this improvement has no effect.</Pair>
</Ability>
</>};
const _devilbane_dismissal = {title: "Devilbane Dismissal", addenda: ["devilbane"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 13</Link></p>
<Ability id="devilbane-dismissal" icon={["armor-downgrade"]}>
<Pair single id="devilbane-dismissal">Devilbane Dismissal</Pair>
<Pair title="Info">The <em>hypnotic stare</em> reduces the duration of any conjuration (summoning) spells the target casts, or that are currently affecting the target, by half.</Pair>
</Ability>
</>};
const _devilbane_impediment = {title: "Devilbane Impediment", addenda: ["devilbane"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 13</Link></p>
<Ability id="devilbane-impediment" icon={["armor-downgrade"]}>
<Pair single id="devilbane-impediment">Devilbane Impediment</Pair>
<Pair title="Info">The target of your <em>hypnotic stare</em> must succeed at a <Link to="/rule/concentration">concentration</Link> check (DC = 15 + the level of the spell) to activate any of its spell-like abilities (but not standard spellcasting). If the target fails the check, the spell-like ability doesn't function but is still expended.</Pair>
</Ability>
</>};
const _devilbane_mundanity = {title: "Devilbane Mundanity", addenda: ["devilbane"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 13</Link></p>
<Ability id="devilbane-mundanity" icon={["armor-downgrade"]}>
<Pair single id="devilbane-mundanity">Devilbane Mundanity</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to the target's spell resistance. This ability doesn't stack with the <Link to="/stare/sapped_magic">sapped magic</Link> bold stare improvement.</Pair>
</Ability>
</>};
const _devilbane_withering = {title: "Devilbane Withering", addenda: ["devilbane"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 13</Link></p>
<Ability id="devilbane-withering" icon={["armor-downgrade"]}>
<Pair single id="devilbane-withering">Devilbane Withering</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to attack rolls and damage rolls, but only if the target is an outsider.</Pair>
<Pair title="Special">Unlike most devilbane gazes, this gaze has no effect on creatures not of the outsider type, and effect's penalty isn't doubled when it targets outsiders.</Pair>
</Ability>
</>};
const _disorientation = {title: "Disorientation", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 42</Link></p>
<Ability id="disorientation" icon={["armor-downgrade"]}>
<Pair single id="disorientation">Disorientation</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies on attack rolls.</Pair>
</Ability>
</>};
const _disquiet = {title: "Disquiet", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link></p>
<Ability id="disquiet" icon={["armor-downgrade"]}>
<Pair single id="disquiet">Disquiet</Pair>
<Pair title="Info">The target of the <em>hypnotic stare</em> is <Link to="/misc/shaken">shaken</Link> while in areas of total darkness.</Pair>
</Ability>
</>};
const _distracted = {title: "Distracted", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 9</Link></p>
<Ability id="distracted" icon={["armor-downgrade"]}>
<Pair single id="distracted">Distracted</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to <Link to="/rule/concentration">concentration</Link> checks.</Pair>
</Ability>
</>};
const _infiltration = {title: "Infiltration", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link></p>
<Ability id="infiltration" icon={["armor-downgrade"]}>
<Pair single id="infiltration">Infiltration</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to the target's Perception checks and CMD.</Pair>
</Ability>
</>};
const _lethality = {title: "Lethality", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link></p>
<Ability id="lethality" icon={["armor-downgrade"]}>
<Pair single id="lethality">Lethality</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to the target's Fortitude saves versus poison and diseases.</Pair>
</Ability>
</>};
const _nightblindness = {title: "Nightblindness", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link></p>
<Ability id="nightblindness" icon={["armor-downgrade"]}>
<Pair single id="nightblindness">Nightblindness</Pair>
<Pair title="Info">The darkvision range of the *hypnotic stare'*s target decreases by 10 feet.</Pair>
</Ability>
</>};
const _nightmare = {title: "Nightmare", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link></p>
<Ability id="nightmare" icon={["armor-downgrade","rolling-dices"]}>
<Pair single id="nightmare">Nightmare</Pair>
<Pair title="Info">The target of the <em>hypnotic stare</em> rolls twice on all Will saves versus fear, taking the lower result.</Pair>
</Ability>
</>};
const _oscillation = {title: "Oscillation", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link></p>
<Ability id="oscillation" icon={["armor-downgrade"]}>
<Pair single id="oscillation">Oscillation</Pair>
<Pair title="Info">The target of the <em>hypnotic stare</em> treats all enemies beyond 30 feet (except the mesmerist) as having <Link to="/rule/concealment">concealment</Link> (20% miss chance).</Pair>
</Ability>
</>};
const _psychic_inception = {title: "Psychic Inception", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 43</Link></p>
<Ability id="psychic-inception" icon={["upgrade"]}>
<Pair single id="psychic-inception">Psychic Inception</Pair>
<Pair title="Info">The <em>hypnotic stare</em> and its penalty can affect creatures that are mindless or immune to mind-affecting effects (such as an undead or vermin). The mesmerist can also partially affect such a creature with his mind-affecting spells and abilities if it's under the effect of his <em>hypnotic stare;</em> it gains a +2 bonus on its saving throw (if any), and if affected, it still has a 50% chance each round of ignoring the effect. Ignoring the effect doesn't end the effect, but does allow the creature to act normally for that round.</Pair>
</Ability>
</>};
const _restriction = {title: "Restriction", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link></p>
<Ability id="restriction" icon={["armor-downgrade"]}>
<Pair single id="restriction">Restriction</Pair>
<Pair title="Info">The target of the <em>hypnotic stare</em> treats all areas of <Link to="/rule/dim_light">dim light</Link> or darker as <Link to="/rule/difficult_terrain">difficult terrain</Link>.</Pair>
</Ability>
</>};
const _sabotage = {title: "Sabotage", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link></p>
<Ability id="sabotage" icon={["armor-downgrade"]}>
<Pair single id="sabotage">Sabotage</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to Diplomacy and Intimidate checks.</Pair>
</Ability>
</>};
const _sapped_magic = {title: "Sapped Magic", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 43</Link></p>
<Ability id="sapped-magic" icon={["armor-downgrade"]}>
<Pair single id="sapped-magic">Sapped Magic</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to the DCs of spells and spell-like abilities used by the target, and to the target's spell resistance (if any).</Pair>
</Ability>
</>};
const _sensed = {title: "Sensed", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 9</Link></p>
<Ability id="sensed" icon={["armor-downgrade"]}>
<Pair single id="sensed">Sensed</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to Stealth checks.</Pair>
</Ability>
</>};
const _sluggishness = {title: "Sluggishness", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 43</Link></p>
<Ability id="sluggishness" icon={["armor-downgrade"]}>
<Pair single id="sluggishness">Sluggishness</Pair>
<Pair title="Info">The target of the <em>hypnotic stare</em> has all of its speeds reduced by 5 feet (to a minimum of 5 feet), and the <em>hypnotic stare</em> penalty also applies to the target's Reflex saving throws.</Pair>
</Ability>
</>};
const _susceptibility = {title: "Susceptibility", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 43</Link></p>
<Ability id="susceptibility" icon={["armor-downgrade"]}>
<Pair single id="susceptibility">Susceptibility</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to the target's Sense Motive checks to oppose Bluff checks, and to the DCs of Diplomacy and Intimidate checks made against the target.</Pair>
</Ability>
</>};
const _timidity = {title: "Timidity", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 43</Link></p>
<Ability id="timidity" icon={["armor-downgrade"]}>
<Pair single id="timidity">Timidity</Pair>
<Pair title="Info">The <em>hypnotic stare</em> penalty also applies to damage rolls.</Pair>
</Ability>
</>};
const _unaided = {title: "Unaided", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 9</Link></p>
<Ability id="unaided" icon={["armor-downgrade"]}>
<Pair single id="unaided">Unaided</Pair>
<Pair title="Info">The target of the <em>hypnotic stare</em> is not able to grant or receive <Link to="/rule/flanking">flanking</Link> bonuses.</Pair>
</Ability>
</>};
export default {not_found:_not_found,allure:_allure,devilbane_binding:_devilbane_binding,devilbane_dampening:_devilbane_dampening,devilbane_dismissal:_devilbane_dismissal,devilbane_impediment:_devilbane_impediment,devilbane_mundanity:_devilbane_mundanity,devilbane_withering:_devilbane_withering,disorientation:_disorientation,disquiet:_disquiet,distracted:_distracted,infiltration:_infiltration,lethality:_lethality,nightblindness:_nightblindness,nightmare:_nightmare,oscillation:_oscillation,psychic_inception:_psychic_inception,restriction:_restriction,sabotage:_sabotage,sapped_magic:_sapped_magic,sensed:_sensed,sluggishness:_sluggishness,susceptibility:_susceptibility,timidity:_timidity,unaided:_unaided}