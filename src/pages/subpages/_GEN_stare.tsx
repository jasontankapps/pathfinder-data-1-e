import Link from '../../components/Link';
const _not_found = {title: "Unknown", jsx: <><h2 id="stare-not_found-unknown">Unknown</h2>
<p>Unable to find the requested mesmerist stare.</p>
</>};
const _allure = {title: "Allure", jsx: <><h2 id="stare-allure-allure">Allure</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 42</Link><br/>The hypnotic stare penalty also applies on initiative checks and Perception checks.</p>
</>};
const _devilbane_binding = {title: "Devilbane Binding", addenda: ["devilbane"], jsx: <><h2 id="stare-devilbane_binding-devilbane-binding">Devilbane Binding</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 13</Link><br/>The hypnotic stare penalty also applies to all Charisma checks to escape <Link to="/spell/planar_binding">planar binding</Link> spells, and applies to the target's spell resistance against a planar binding spell.</p>
</>};
const _devilbane_dampening = {title: "Devilbane Dampening", addenda: ["devilbane"], jsx: <><h2 id="stare-devilbane_dampening-devilbane-dampening">Devilbane Dampening</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 13</Link><br/>The hypnotic stare penalty also applies to the target's resistance to a single form of energy, chosen by the mesmerist when he initiates the stare. If the mesmerist targets a form of energy to which his target has no resistance, this improvement has no effect.</p>
</>};
const _devilbane_dismissal = {title: "Devilbane Dismissal", addenda: ["devilbane"], jsx: <><h2 id="stare-devilbane_dismissal-devilbane-dismissal">Devilbane Dismissal</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 13</Link><br/>The hypnotic stare reduces the duration of any conjuration (summoning) spells the target casts, or that are currently affecting the target, by half.</p>
</>};
const _devilbane_impediment = {title: "Devilbane Impediment", addenda: ["devilbane"], jsx: <><h2 id="stare-devilbane_impediment-devilbane-impediment">Devilbane Impediment</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 13</Link><br/>The target of your hypnotic stare must succeed at a <Link to="/rule/concentration">concentration</Link> check (DC = 15 + the level of the spell) to activate any of its spell-like abilities (but not standard spellcasting). If the target fails the check, the spell-like ability doesn't function but is still expended.</p>
</>};
const _devilbane_mundanity = {title: "Devilbane Mundanity", addenda: ["devilbane"], jsx: <><h2 id="stare-devilbane_mundanity-devilbane-mundanity">Devilbane Mundanity</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 13</Link><br/>The hypnotic stare penalty also applies to the target's spell resistance. This ability doesn't stack with the <Link to="/stare/sapped_magic">sapped magic</Link> bold stare improvement.</p>
</>};
const _devilbane_withering = {title: "Devilbane Withering", addenda: ["devilbane"], jsx: <><h2 id="stare-devilbane_withering-devilbane-withering">Devilbane Withering</h2>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 13</Link><br/>The hypnotic stare penalty also applies to attack rolls and damage rolls, but only if the target is an outsider. Unlike most devilbane gazes, this gaze has no effect on creatures not of the outsider type, and effect's penalty isn't doubled when it targets outsiders.</p>
</>};
const _disorientation = {title: "Disorientation", jsx: <><h2 id="stare-disorientation-disorientation">Disorientation</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 42</Link><br/>The hypnotic stare penalty also applies on attack rolls.</p>
</>};
const _disquiet = {title: "Disquiet", jsx: <><h2 id="stare-disquiet-disquiet">Disquiet</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link><br/>The target of the hypnotic stare is <Link to="/misc/shaken">shaken</Link> while in areas of total darkness.</p>
</>};
const _distracted = {title: "Distracted", jsx: <><h2 id="stare-distracted-distracted">Distracted</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 9</Link><br/>The hypnotic stare penalty also applies to <Link to="/rule/concentration">concentration</Link> checks.</p>
</>};
const _infiltration = {title: "Infiltration", jsx: <><h2 id="stare-infiltration-infiltration">Infiltration</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link><br/>The hypnotic stare penalty also applies to the target's Perception checks and CMD.</p>
</>};
const _lethality = {title: "Lethality", jsx: <><h2 id="stare-lethality-lethality">Lethality</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link><br/>The hypnotic stare penalty also applies to the target's Fortitude saves versus poison and diseases.</p>
</>};
const _nightblindness = {title: "Nightblindness", jsx: <><h2 id="stare-nightblindness-nightblindness">Nightblindness</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link><br/>The darkvision range of the hypnotic stare's target decreases by 10 feet.</p>
</>};
const _nightmare = {title: "Nightmare", jsx: <><h2 id="stare-nightmare-nightmare">Nightmare</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link><br/>The target of the hypnotic stare rolls twice on all Will saves versus fear, taking the lower result.</p>
</>};
const _oscillation = {title: "Oscillation", jsx: <><h2 id="stare-oscillation-oscillation">Oscillation</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link><br/>The target of the hypnotic stare treats all enemies beyond 30 feet (except the mesmerist) as having <Link to="/rule/concealment">concealment</Link> (20% miss chance).</p>
</>};
const _psychic_inception = {title: "Psychic Inception", jsx: <><h2 id="stare-psychic_inception-psychic-inception">Psychic Inception</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 43</Link><br/>The hypnotic stare and its penalty can affect creatures that are mindless or immune to mind-affecting effects (such as an undead or vermin). The mesmerist can also partially affect such a creature with his mind-affecting spells and abilities if it's under the effect of his hypnotic stare; it gains a +2 bonus on its saving throw (if any), and if affected, it still has a 50% chance each round of ignoring the effect. Ignoring the effect doesn't end the effect, but does allow the creature to act normally for that round.</p>
</>};
const _restriction = {title: "Restriction", jsx: <><h2 id="stare-restriction-restriction">Restriction</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link><br/>The target of the hypnotic stare treats all areas of <Link to="/rule/dim_light">dim light</Link> or darker as <Link to="/rule/difficult_terrain">difficult terrain</Link>.</p>
</>};
const _sabotage = {title: "Sabotage", jsx: <><h2 id="stare-sabotage-sabotage">Sabotage</h2>
<p><strong>Sources</strong> <Link to="/source/occult_realms">Occult Realms pg. 16</Link><br/>The hypnotic stare penalty also applies to Diplomacy and Intimidate checks.</p>
</>};
const _sapped_magic = {title: "Sapped Magic", jsx: <><h2 id="stare-sapped_magic-sapped-magic">Sapped Magic</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 43</Link><br/>The hypnotic stare penalty also applies to the DCs of spells and spell-like abilities used by the target, and to the target's spell resistance (if any).</p>
</>};
const _sensed = {title: "Sensed", jsx: <><h2 id="stare-sensed-sensed">Sensed</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 9</Link><br/>The hypnotic stare penalty also applies to Stealth checks.</p>
</>};
const _sluggishness = {title: "Sluggishness", jsx: <><h2 id="stare-sluggishness-sluggishness">Sluggishness</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 43</Link><br/>The target of the hypnotic stare has all of its speeds reduced by 5 feet (to a minimum of 5 feet), and the hypnotic stare penalty also applies to the target's Reflex saving throws.</p>
</>};
const _susceptibility = {title: "Susceptibility", jsx: <><h2 id="stare-susceptibility-susceptibility">Susceptibility</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 43</Link><br/>The hypnotic stare penalty also applies to the target's Sense Motive checks to oppose Bluff checks, and to the DCs of Diplomacy and Intimidate checks made against the target.</p>
</>};
const _timidity = {title: "Timidity", jsx: <><h2 id="stare-timidity-timidity">Timidity</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 43</Link><br/>The hypnotic stare penalty also applies to damage rolls.</p>
</>};
const _unaided = {title: "Unaided", jsx: <><h2 id="stare-unaided-unaided">Unaided</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 9</Link><br/>The target of the hypnotic stare is not able to grant or receive <Link to="/rule/flanking">flanking</Link> bonuses.</p>
</>};
export default {not_found:_not_found,allure:_allure,devilbane_binding:_devilbane_binding,devilbane_dampening:_devilbane_dampening,devilbane_dismissal:_devilbane_dismissal,devilbane_impediment:_devilbane_impediment,devilbane_mundanity:_devilbane_mundanity,devilbane_withering:_devilbane_withering,disorientation:_disorientation,disquiet:_disquiet,distracted:_distracted,infiltration:_infiltration,lethality:_lethality,nightblindness:_nightblindness,nightmare:_nightmare,oscillation:_oscillation,psychic_inception:_psychic_inception,restriction:_restriction,sabotage:_sabotage,sapped_magic:_sapped_magic,sensed:_sensed,sluggishness:_sluggishness,susceptibility:_susceptibility,timidity:_timidity,unaided:_unaided}