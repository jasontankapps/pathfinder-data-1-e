import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested phrenic amplification.</p>
</>};
const _biokinetic_healing = {title: "Biokinetic Healing", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 16</Link></p>
<Ability id="biokinetic-healing-su" icon={["remedy"]}>
<Pair single id="biokinetic-healing-su">Biokinetic Healing (Su)</Pair>
<Pair title="Ability">When the psychic casts a linked spell from the transmutation school, she can spend 1 point from her phrenic pool to regain 2 hit points per level of the linked spell.</Pair>
</Ability>
</>};
const _complex_countermeasures = {title: "Complex Countermeasures", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 60</Link></p>
<Ability id="complex-countermeasures-ex" icon={["upgrade"]}>
<Pair single id="complex-countermeasures-ex">Complex Countermeasures (Ex)</Pair>
<Pair title="Ability">The psychic can spend 1 point from her phrenic pool to increase by 2 the DCs of <Link to="/rule/concentration">concentration</Link> checks or caster level checks the linked spell requires enemies to attempt. For example, if the linked spell were <Link to="/spell/nondetection">nondetection</Link>, the DC of the caster level check for using a divination on the warded creature or item would increase. This increase also applies to checks to dispel, counterspell, or identify the linked spell.</Pair>
<Pair title="Special">The bonus applies while the spell is cast and lasts for the spell's duration (if appropriate), to a maximum of 24 hours. The psychic can choose to spend 2 points from her phrenic pool to instead increase the linked spell's DCs by 4.</Pair>
</Ability>
</>};
const _conjured_armor = {title: "Conjured Armor", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 61</Link></p>
<Ability id="conjured-armor-su" icon={["armor-upgrade"]}>
<Pair single id="conjured-armor-su">Conjured Armor (Su)</Pair>
<Pair title="Ability">By spending 1 point from her phrenic pool, the psychic grants any creature she conjures or summons with the linked spell a +2 deflection bonus to AC. This bonus lasts for 1 round per caster level or until the creature disappears, whichever comes first. This amplification can be linked only to conjuration (calling) or conjuration (summoning) spells.</Pair>
<Pair title="At 8th Level">The bonus becomes +3.</Pair>
<Pair title="At 15th Level">The bonus increases to +4.</Pair>
</Ability>
</>};
const _defensive_prognostication = {title: "Defensive Prognostication", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 61</Link></p>
<Ability id="defensive-prognostication-su" icon={["armor-upgrade"]}>
<Pair single id="defensive-prognostication-su" flavor="When casting a divination spell, the psychic sees a glimmer of her future.">Defensive Prognostication (Su)</Pair>
<Pair title="Ability">By spending 1 point from her phrenic pool as she casts a divination spell, she gains a +2 insight bonus to AC for a number of rounds equal to the linked spell's level. She can instead spend 2 points to increase the bonus to +4. This amplification can be linked only to divination spells.</Pair>
</Ability>
</>};
const _dragons_breath = {title: "Dragon's Breath", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 16</Link></p>
<Ability id="dragons-breath-su" icon={["tornado-discs"]}>
<Pair single id="dragons-breath-su">Dragon's Breath (Su)</Pair>
<Pair title="Ability">The psychic can spend 2 points from her phrenic pool to change a linked spell that has a line or burst area of effect into a 30-foot cone that emanates from the psychic's mouth as a breath weapon.</Pair>
</Ability>
</>};
const _focused_force = {title: "Focused Force", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 61</Link></p>
<Ability id="focused-force-su" icon={["upgrade"]}>
<Pair single id="focused-force-su">Focused Force (Su)</Pair>
<Pair title="Ability">When casting a <Link to="/spelldef/force">force</Link> spell, the psychic can increase the spell's damage by spending 1 point from her phrenic pool. Increase the die size for the spell's damage by one step (from 1d4 to 1d6, 1d6 to 1d8, 1d8 to 1d10, or 1d10 to 1d12). This increases the size of each die rolled, so a spell that dealt 4d6+3 points of force damage would deal 4d8+3 points of force damage instead.</Pair>
<Pair title="Special">This amplification can be linked only to spells that deal force damage, and only if that damage includes a die value. A spell that already uses d12s for damage can't be amplified in this way.</Pair>
</Ability>
</>};
const _intense_focus = {title: "Intense Focus", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 61</Link></p>
<Ability id="intense-focus-ex" icon={["upgrade"]}>
<Pair single id="intense-focus-ex">Intense Focus (Ex)</Pair>
<Pair title="Ability">The psychic can spend 1 point from her phrenic pool to gain a +2 bonus on any concentration check she attempts as part of casting the linked spell. She can choose to spend 2 points from her phrenic pool to instead gain a +4 bonus.</Pair>
</Ability>
</>};
const _minds_eye = {title: "Mind's Eye", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 13</Link></p>
<Ability id="minds-eye-su" icon={["upgrade"]}>
<Pair single id="minds-eye-su" flavor="Some psychics train their visual and psychic senses, binding them together into a unified focus to better guide their ranged spells and place them with uncanny precision.">Mind's Eye (Su)</Pair>
<Pair title="Ability">While casting a spell that requires a ranged attack roll, the psychic can spend 2 points from her phrenic pool and gain a +4 insight bonus on the attack roll.</Pair>
<Pair title="Special">The psychic can spend 1 additional point to ignore penalties from <Link to="/rule/cover">cover</Link> (but not total cover).</Pair>
</Ability>
</>};
const _mindshield = {title: "Mindshield", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 61</Link></p>
<Ability id="mindshield-su" icon={["armor-upgrade"]}>
<Pair single id="mindshield-su">Mindshield (Su)</Pair>
<Pair title="Ability">The psychic can spend 1 point from her phrenic pool to give one target of the linked spell a +2 morale bonus on Will saves for 1 round per psychic level (maximum 10 rounds). The psychic can instead spend 2 points to increase the bonus to +4. If the linked spell affects more than one creature, the psychic can spend the same number of points for each additional creature she wants to affect with this amplification.</Pair>
<Pair title="Special">She must choose to spend either 1 point for each creature or 2 points for each creature; she can't grant different bonuses to different targets.</Pair>
</Ability>
</>};
const _mindtouch = {title: "Mindtouch", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 61</Link></p>
<Ability id="mindtouch-su" icon={["magic-swirl"]}>
<Pair single id="mindtouch-su">Mindtouch (Su)</Pair>
<Pair title="Ability">The psychic can spend 1 point from her phrenic pool to probe one target's mind if that creature is affected by the linked spell. If the target of the linked spell fails its saving throw or is hit by the spell, the psychic detects its surface thoughts (as the 3rd-round effect of <Link to="/spell/detect_thoughts">detect thoughts</Link>). If the linked spell doesn't already require an attack roll or allow a saving throw, the target can attempt a Will saving throw to avoid the thought-detection effect only; the DC is calculated using the linked spell's level (and all other bonuses that would apply if the linked spell allowed a Will save).</Pair>
<Pair title="Special">This amplification can be linked only to spells that affect a target or an area. If the linked spell can affect more than one creature, the psychic can attempt to detect more than one target's thoughts by spending 1 additional point per creature beyond the first. She must select these targets when she casts the spell and spends the points. This is a mind-affecting effect.</Pair>
</Ability>
</>};
const _ongoing_defense = {title: "Ongoing Defense", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 61</Link></p>
<Ability id="ongoing-defense-su" icon={["armor-upgrade"]}>
<Pair single id="ongoing-defense-su">Ongoing Defense (Su)</Pair>
<Pair title="Ability">The psychic can increase the duration of spells that improve her psychic defenses. She can spend 1 point from her phrenic pool when she casts any <Link to="/spell/intellect_fortress_1">intellect fortress</Link>, <Link to="/spell/mental_barrier_1">mental barrier</Link>, <Link to="/spell/thought_shield_1">thought shield</Link>, or <Link to="/spell/tower_of_iron_will_1">tower of iron will</Link> spell to extend the spell's duration by 1 round.</Pair>
</Ability>
</>};
const _overpowering_mind = {title: "Overpowering Mind", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 62</Link></p>
<Ability id="overpowering-mind-ex" icon={["upgrade"]}>
<Pair single id="overpowering-mind-ex">Overpowering Mind (Ex)</Pair>
<Pair title="Ability">The psychic can spend 2 points from her phrenic pool to increase the Will save DC of the linked spell by 1.</Pair>
<Pair title="At 8th Level">She can choose to instead spend 4 points to increase the DC by 2.</Pair>
<Pair title="At 15th Level">She can choose to instead spend 6 points to increase the DC by 3.</Pair>
<Pair title="Special">This amplification can be linked only to spells that have the mind-affecting descriptor and require a Will saving throw.</Pair>
</Ability>
</>};
const _perfect_body = {title: "Perfect Body", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 13</Link></p>
<Ability id="perfect-body-ex" icon={["armor-upgrade"]}>
<Pair single id="perfect-body-ex" flavor="Some practitioners of psychic techniques extend their training to improve their bodies as well as their minds.">Perfect Body (Ex)</Pair>
<Pair title="Ability">When the psychic casts a linked transmutation spell, she can spend 1 point from her phrenic pool to gain a +2 bonus on her next Reflex or Fortitude save.</Pair>
</Ability>
</>};
const _phrenic_strike = {title: "Phrenic Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 16</Link></p>
<Ability id="phrenic-strike-su" icon={["mailed-fist","magic-swirl"]}>
<Pair single id="phrenic-strike-su">Phrenic Strike (Su)</Pair>
<Pair title="Ability">As long as the psychic has at least 1 point in her phrenic pool, she can attempt an unarmed strike in place of a touch attack as part of casting a spell with a range of touch. This unarmed attack still provokes attacks of opportunity as normal unless the psychic can otherwise make unarmed attacks without provoking attacks of opportunity.</Pair>
</Ability>
</>};
const _psychic_defense = {title: "Psychic Defense", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 13</Link></p>
<Ability id="psychic-defense-su" icon={["upgrade"]}>
<Pair single id="psychic-defense-su" flavor="Reading small, invisible cues allows the psychic to take advantage of social circumstances and subtly influence her target.">Psychic Defense (Su)</Pair>
<Pair title="Ability">Casting a linked spell during a social encounter and spending 1 point from her phrenic pool allows the psychic to add a +4 bonus on her next Bluff, Diplomacy, Intimidate, or Sense Motive check.</Pair>
</Ability>
</>};
const _psychofeedback = {title: "Psychofeedback", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 16</Link></p>
<Ability id="psychofeedback-su" icon={["upgrade"]}>
<Pair single id="psychofeedback-su">Psychofeedback (Su)</Pair>
<Pair title="Ability">The psychic can spend 2 points from her phrenic pool to sacrifice a linked spell of 2nd level or higher. Doing so grants the psychic a +1 enhancement bonus to Strength, Dexterity, or Constitution per level of the sacrificed spell. This bonus lasts for 1 minute per psychic level.</Pair>
</Ability>
</>};
const _relentless_casting = {title: "Relentless Casting", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 62</Link></p>
<Ability id="relentless-casting-su" icon={["rolling-dices","upgrade"]}>
<Pair single id="relentless-casting-su">Relentless Casting (Su)</Pair>
<Pair title="Ability">The psychic can spend 1 point from her phrenic pool to roll twice on any caster level checks to overcome spell resistance required for the linked spell and take the better result.</Pair>
<Pair title="Special">Because she must decide to spend points from her phrenic pool when she starts casting a spell, the psychic must decide to use this ability before the GM calls for the caster level check.</Pair>
</Ability>
</>};
const _telempathic_restoration = {title: "Telempathic Restoration", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 16</Link></p>
<Ability id="telempathic-restoration-su" icon={["remedy","broken-shield"]}>
<Pair single id="telempathic-restoration-su">Telempathic Restoration (Su)</Pair>
<Pair title="Ability">When the psychic casts <Link to="/spell/telepathic_bond">telepathic bond</Link>, she can spend 1 point from her phrenic pool to remove the <Link to="/misc/dazed">dazed</Link>, <Link to="/misc/frightened">frightened</Link>, <Link to="/misc/panicked">panicked</Link>, <Link to="/misc/shaken">shaken</Link>, or <Link to="/misc/stunned">stunned</Link> condition from one target of the bond. Doing so removes the status from the target of the linked spell, but applies it immediately (with any remaining duration) to the psychic.</Pair>
</Ability>
</>};
const _transfer_fear = {title: "Transfer Fear", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 16</Link></p>
<Ability id="transfer-fear-su" icon={["remedy"]}>
<Pair single id="transfer-fear-su">Transfer Fear (Su)</Pair>
<Pair title="Ability">When the psychic successfully affects a target with a fear effect, she can spend 1 point from her phrenic pool to remove a fear effect from herself or one ally with whom she is in telepathic contact.</Pair>
</Ability>
</>};
const _undercast_surge = {title: "Undercast Surge", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 62</Link></p>
<Ability id="undercast-surge-su" icon={["upgrade"]}>
<Pair single id="undercast-surge-su">Undercast Surge (Su)</Pair>
<Pair title="Ability">When the psychic <Link to="/rule/undercasting_spells">undercasts</Link> a spell, she can spend points from her phrenic pool to increase the spell's effective level, essentially using up a lower-level spell slot to cast a higher-level version of the spell. This costs 2 points per spell level increased.</Pair>
<Pair title="Special">She can't use this ability to cast a version higher than the version she knows. For instance, a psychic who knows <Link to="/spell/mind_thrust_iii">mind thrust III</Link> but not <Link to="/spell/mind_thrust_iv">mind thrust IV</Link> could cast <Link to="/spell/mind_thrust_ii">mind thrust II</Link> and spend 2 points to treat it as <em>mind thrust III,</em> but couldn't spend 4 points to treat it as <em>mind thrust IV.</em> This amplification can be linked only to spells that can be undercast.</Pair>
</Ability>
</>};
const _whisper_of_ancients = {title: "Whisper of Ancients", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 13</Link></p>
<Ability id="whisper-of-ancients-ex" icon={["upgrade"]}>
<Pair single id="whisper-of-ancients-ex" flavor="The psychic can send her consciousness into the Astral Plane for a glimpse of synchronous information.">Whisper of Ancients (Ex)</Pair>
<Pair title="Ability">While casting a linked divination spell, the psychic can spend 1 point from her phrenic pool to gain a +2 bonus on any associated skill check. She can spend 2 points from her phrenic pool to instead gain a +4 bonus.</Pair>
</Ability>
</>};
const _will_of_the_dead = {title: "Will of the Dead", jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 62</Link></p>
<Ability id="will-of-the-dead-su" icon={["upgrade"]}>
<Pair single id="will-of-the-dead-su" flavor="Even undead creatures can be affected by the psychic's mind-affecting spells.">Will of the Dead (Su)</Pair>
<Pair title="Ability">The psychic can spend 2 points from her phrenic pool to overcome an undead creature's immunity to mind-affecting effects for the purposes of the linked spell. This ability functions even on mindless undead, but has no effect on creatures that aren't undead.</Pair>
<Pair title="Special">This amplification can be linked only to spells that have the mind-affecting descriptor.</Pair>
</Ability>
</>};
const _deflection_field = {title: "Deflection Field", topLink: ["Major Phrenic Amplifications","ability/major_phrenic_amplifications"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 16</Link></p>
<Ability id="deflection-field-su" icon={["armor-upgrade"]}>
<Pair single id="deflection-field-su">Deflection Field (Su)</Pair>
<Pair title="Ability">Whenever the psychic casts a linked spell that grants her a deflection bonus to AC, she can spend 2 points from her phrenic pool to automatically reflect the first ranged attack that misses her (as long as the linked spell remains active) back at the attacker. This reflected attack uses the original attack roll plus a circumstance bonus equal to the psychic's caster level.</Pair>
</Ability>
</>};
const _dispelling_pulse = {title: "Dispelling Pulse", topLink: ["Major Phrenic Amplifications","ability/major_phrenic_amplifications"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 63</Link></p>
<Ability id="dispelling-pulse-su" icon={["armor-downgrade"]}>
<Pair single id="dispelling-pulse-su">Dispelling Pulse (Su)</Pair>
<Pair title="Ability"><p>The psychic can spend 3 points from her phrenic pool to entwine dispelling magic with a targeted spell. If the target is hit by the linked spell or fails its saving throw, it's affected as though the psychic had cast a targeted <Link to="/spell/dispel_magic">dispel magic</Link> spell on it. This effect can dispel only spells of the linked spell's level or lower.</p>
<p>If the linked spell doesn't already require an attack roll or allow a saving throw, the target can attempt a Will saving throw to avoid the dispelling effect only; the DC is calculated using the linked spell's level (and all other bonuses that would apply if the linked spell allowed a Will save).</p>
</Pair>
<Pair title="Special">This amplification can be linked only to a spell that targets one creature or object.</Pair>
</Ability>
</>};
const _dual_amplification = {title: "Dual Amplification", topLink: ["Major Phrenic Amplifications","ability/major_phrenic_amplifications"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 63</Link></p>
<Ability id="dual-amplification-ex" icon={["stairs-goal"]}>
<Pair single id="dual-amplification-ex">Dual Amplification (Ex)</Pair>
<Pair title="Ability">When the psychic uses this major amplification, she chooses two other <em>amplifications</em> or <em>major amplifications</em> she knows to apply to the same linked spell. She must spend 1 point from her phrenic pool to do so, plus the full cost of the two other amplifications.</Pair>
<Pair title="Special">She can't apply the same amplification to the linked spell more than once, even if she can use that amplification for multiple different effects.</Pair>
</Ability>
</>};
const _mimic_metamagic = {title: "Mimic Metamagic", topLink: ["Major Phrenic Amplifications","ability/major_phrenic_amplifications"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 63</Link></p>
<Ability id="mimic-metamagic-ex" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="mimic-metamagic-ex">Mimic Metamagic (Ex)</Pair>
<Pair title="Choice">When the psychic gains this amplification, she chooses two <Link to="/main/metamagic_feat">metamagic feats</Link>; she need not have these feats to select them.</Pair>
<Pair title="Ability">When she casts a spell, she can spend points from her phrenic pool to apply one of the chosen feats to the linked spell without increasing the spell's level or casting time. She must spend a number of points equal to double the number of levels by which the feat normally increases a spell's level (minimum 2 points). If the metamagic feat alters the spell's casting time in a different way than the <Link to="/rule/feats_basic">standard rules</Link> for a spontaneous caster using a metamagic feat (as in the case of <Link to="/feat/quicken_spell">Quicken Spell</Link>), it changes the casting time accordingly.</Pair>
<Pair title="Info"><p>The psychic can still apply metamagic feats she knows to the spell while using this amplification, increasing the casting time and spell level as normal.</p>
<p>This amplification can be applied only to a spell that the chosen metamagic feat could normally affect, and only if the spellcaster can cast spells of a high enough level that she would be able to apply the metamagic feat in question to the linked spell. For example, an 11th-level psychic could spend 8 points to <em>quicken</em> a 1st-level spell, but couldn't <em>quicken</em> a 2nd-level spell because she's unable to cast 6th-level spells. This ability doesn't require her to have any free spell slots in the relevant level, however, so the psychic in the example could <em>quicken</em> a 1st-level spell even if she had cast all her 5th-level spells for the day.</p>
</Pair>
<Pair title="Special">A psychic can select this amplification multiple times, adding two additional options to the list of metamagic feats she can apply using this amplification each time.</Pair>
</Ability>
</>};
const _space_rending_spell = {title: "Space-rending Spell", topLink: ["Major Phrenic Amplifications","ability/major_phrenic_amplifications"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 63</Link></p>
<Ability id="space-rending-spell-su" icon={["magic-swirl"]}>
<Pair single id="space-rending-spell-su" flavor="The psychic can warp space with her mind, teleporting herself as she casts her linked spell.">Space-rending Spell (Su)</Pair>
<Pair title="Ability">She teleports herself 10 feet per point she spends from her phrenic pool (as <Link to="/spell/dimension_door">dimension door</Link>). The maximum number of points she can spend in this way is equal to the linked spell's level.</Pair>
</Ability>
</>};
const _subordinate_spell = {title: "Subordinate Spell", topLink: ["Major Phrenic Amplifications","ability/major_phrenic_amplifications"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 64</Link></p>
<Ability id="subordinate-spell-ex" icon={["magic-swirl"]}>
<Pair single id="subordinate-spell-ex">Subordinate Spell (Ex)</Pair>
<Pair title="Ability"><p>The psychic can divide her mind to cast a less powerful spell upon herself alongside her linked spell. The linked spell can't be lower than 5th level and can't take less than a standard action to cast. This applies to the actual casting time, so the psychic can't add a <em>subordinate spell</em> to a <Link to="/feat/quickened">quickened</Link> spell.</p>
<p>The <em>subordinate spell's</em> casting time must be 1 standard action or less, and its level can be no higher than the linked spell's level - 5. The <em>subordinate spell</em> must target only the psychic (even if it could normally affect other or multiple targets).</p>
<p>The psychic must spend a number of points from her phrenic pool equal to 3 + double the <em>subordinate spell's</em> level. The <em>subordinate spell</em> acts as though it had been cast, and uses up one of the psychic's spells per day of its level. The effects of the two spells are separate, so each might require its own <Link to="/rule/concentration">concentration</Link> check.</p>
</Pair>
</Ability>
</>};
const _synaptic_shock = {title: "Synaptic Shock", topLink: ["Major Phrenic Amplifications","ability/major_phrenic_amplifications"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 64</Link></p>
<Ability id="synaptic-shock-su" icon={["armor-downgrade"]}>
<Pair single id="synaptic-shock-su" flavor="The psychic manipulates an enemy's mind with brute force, causing mental harm beyond that done by her linked spell.">Synaptic Shock (Su)</Pair>
<Pair title="Ability"><p>She can spend 1 point from her phrenic pool when casting a mind-affecting linked spell to select one of the spell's targets. If the target is affected by the linked spell, that target is <Link to="/misc/confused">confused</Link> for 1 round after the duration of the spell expires (or immediately, if the spell has an instantaneous duration). If the target succeeds at its save against the linked spell, it is instead confused for 1 round immediately.</p>
<p>For each additional point the psychic spends from her phrenic pool, she can confuse one additional target of the linked spell.</p>
</Pair>
<Pair title="Special">This amplification can be applied only to a mind-affecting spell that can affect a number of targets or that has an area. It has no effect on creatures that are immune to mind-affecting effects, unless the linked spell is able to affect such creatures (such as a spell that has both <Link to="/phrenicamp/will_of_the_dead">will of the dead</Link> and <em>synaptic shock</em> applied to it via <Link to="/phrenicamp/dual_amplification">dual amplification</Link>).</Pair>
</Ability>
</>};
const _telepathic_targeting = {title: "Telepathic Targeting", topLink: ["Major Phrenic Amplifications","ability/major_phrenic_amplifications"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 16</Link></p>
<Ability id="telepathic-targeting-su" icon={["magic-swirl","upgrade"]}>
<Pair single id="telepathic-targeting-su">Telepathic Targeting (Su)</Pair>
<Pair title="Ability">By spending 2 points from her phrenic pool, the psychic can target any creature with which she is in telepathic communication (whether via her <em>telepathic bond</em> ability, a creature's telepathy ability, or another effect) with the linked spell, even if the creature would normally be out of range. The linked spell must have the mind-affecting descriptor and must have a range of touch or greater.</Pair>
</Ability>
</>};
const _turning_shield = {title: "Turning Shield", topLink: ["Major Phrenic Amplifications","ability/major_phrenic_amplifications"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 64</Link></p>
<Ability id="turning-shield-su" icon={["armor-upgrade"]}>
<Pair single id="turning-shield-su" flavor="The psychic can turn her excess spell energy into a barrier that deflects weaker spells.">Turning Shield (Su)</Pair>
<Pair title="Ability">She can spend a number of points from her phrenic pool equal to the linked spell's level to gain the benefit of <Link to="/spell/spell_turning">spell turning</Link> for 1 round per psychic level. The number of spell levels she can turn is equal to the level of the linked spell.</Pair>
</Ability>
</>};
export default {not_found:_not_found,biokinetic_healing:_biokinetic_healing,complex_countermeasures:_complex_countermeasures,conjured_armor:_conjured_armor,defensive_prognostication:_defensive_prognostication,dragons_breath:_dragons_breath,focused_force:_focused_force,intense_focus:_intense_focus,minds_eye:_minds_eye,mindshield:_mindshield,mindtouch:_mindtouch,ongoing_defense:_ongoing_defense,overpowering_mind:_overpowering_mind,perfect_body:_perfect_body,phrenic_strike:_phrenic_strike,psychic_defense:_psychic_defense,psychofeedback:_psychofeedback,relentless_casting:_relentless_casting,telempathic_restoration:_telempathic_restoration,transfer_fear:_transfer_fear,undercast_surge:_undercast_surge,whisper_of_ancients:_whisper_of_ancients,will_of_the_dead:_will_of_the_dead,deflection_field:_deflection_field,dispelling_pulse:_dispelling_pulse,dual_amplification:_dual_amplification,mimic_metamagic:_mimic_metamagic,space_rending_spell:_space_rending_spell,subordinate_spell:_subordinate_spell,synaptic_shock:_synaptic_shock,telepathic_targeting:_telepathic_targeting,turning_shield:_turning_shield}