import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested shaman hex.</p>
</>};
const _chant = {title: "Chant", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 36</Link></p>
<Ability id="chant-su" icon={["upgrade"]}>
<Pair single id="chant-su">Chant (Su)</Pair>
<Pair title="Ability">A shaman can chant as a <strong className="hl">move action</strong>. Any creature that is within 30 feet that is under the effects of the shaman's <Link to="/shamanhex/charm">charm</Link>, <Link to="/shamanhex/evil_eye">evil eye</Link>, <Link to="/shamanhex/fortune">fortune</Link>, <Link to="/shamanhex/fury">fury</Link>, or <Link to="/shamanhex/misfortune">misfortune</Link> hex has that effect's duration extended by 1 round.</Pair>
<Pair title="Special">A shaman cannot select both this hex and the witch's <Link to="/hex/cackle">cackle</Link> hex.</Pair>
</Ability>
</>};
const _charm = {title: "Charm", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 36</Link></p>
<Ability id="charm-su" icon={["magic-swirl"]}>
<Pair single id="charm-su">Charm (Su)</Pair>
<Pair title="Ability">A shaman charms an animal or humanoid creature within 30 feet by beckoning and speaking soothing words. This improves the attitude of an animal or humanoid creature by 1 step, as if the shaman had successfully used the <Link to="/skill/diplomacy">Diplomacy</Link> skill. The effect lasts for a number of rounds equal to the shaman's Wisdom modifier (minimum 1). A successful Will saving throw negates this effect.</Pair>
<Pair title="At 8th Level">This effect improves the attitude of the creature by 2 steps. </Pair>
<Pair title="Special">Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours.This is a mind-affecting charm effect.</Pair>
</Ability>
</>};
const _draconic_resilience = {title: "Draconic Resilience", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 8</Link></p>
<Ability id="draconic-resilience-ex" icon={["shield-reflect"]}>
<Pair single id="draconic-resilience-ex">Draconic Resilience (Ex)</Pair>
<Pair title="Ability">The shaman grants a creature she touches some of the magically resilient nature of dragons, causing the creature to be immune to magical sleep effects for a number of rounds equal to the shaman's level.</Pair>
<Pair title="At 7th Level">The creature is also immune to paralysis for this duration.</Pair>
<Pair title="Special">Once a creature has benefited from the draconic resilience hex, it cannot benefit from this hex again for 24 hours.</Pair>
</Ability>
</>};
const _evil_eye = {title: "Evil Eye", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 36</Link></p>
<Ability id="evil-eye-su" icon={["armor-downgrade"]}>
<Pair single id="evil-eye-su">Evil Eye (Su)</Pair>
<Pair title="Ability">The shaman causes doubt to creep into the mind of a foe within 30 feet that she can see. The target takes a -2 penalty on one of the following (shaman's choice): ability checks, AC, attack rolls, saving throws, or skill checks. This hex lasts a number of rounds equal to 3 + the shaman's Wisdom modifier. A successful Will saving throw reduces this to just 1 round.</Pair>
<Pair title="At 8th Level">The penalty increases to -4.</Pair>
<Pair title="Special">This is a mind-affecting effect.</Pair>
</Ability>
</>};
const _fetish = {title: "Fetish", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 36</Link></p>
<Ability id="fetish-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="fetish-ex">Fetish (Ex)</Pair>
<Pair title="Ability">The shaman receives <Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link> as a bonus feat and gains a +4 insight bonus on <Link to="/skill/spellcraft">Spellcraft</Link> checks to identify magic items permanently.</Pair>
</Ability>
</>};
const _fortune = {title: "Fortune", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 36</Link></p>
<Ability id="fortune-su" icon={["rolling-dices"]}>
<Pair single id="fortune-su">Fortune (Su)</Pair>
<Pair title="Ability">The shaman grants a creature within 30 feet a bit of good luck for 1 round. The target can call upon this good luck once per round, allowing it to reroll any ability check, attack roll, saving throw, or skill check, taking the better result. The target creature must to decide to use this ability before the first roll is made.</Pair>
<Pair title="At 8th Level">The duration of this hex becomes 2 rounds.</Pair>
<Pair title="At 16th Level">The duration of this hex increases to 3 rounds.</Pair>
<Pair title="Special">Once a creature has benefited from the <em>fortune</em> hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
</>};
const _fury = {title: "Fury", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 36</Link></p>
<Ability id="fury-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="fury-su">Fury (Su)</Pair>
<Pair title="Ability">A shaman incites a creature within 30 feet into a primal fury. The target receives a +2 morale bonus on attack rolls and a +2 resistance bonus on saving throws against fear for a number of rounds equal to the shaman's Wisdom modifier.</Pair>
<Pair title="At 8th Level">These bonuses become +3.</Pair>
<Pair title="At 16th Level">These bonuses increase to +4.</Pair>
<Pair title="Special">Once a creature has benefited from the <em>fury</em> hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
</>};
const _healing = {title: "Healing", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 37</Link></p>
<Ability id="healing-su" icon={["remedy"]}>
<Pair single id="healing-su">Healing (Su)</Pair>
<Pair title="Ability">A shaman soothes the wounds of those she touches. This acts as <Link to="/spell/cure_light_wounds">cure light wounds</Link>, using the shaman's caster level.</Pair>
<Pair title="At 5th Level">This acts as <Link to="/spell/cure_moderate_wounds">cure moderate wounds</Link>.</Pair>
<Pair title="Special">Once a creature has benefited from the <em>healing</em> hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
</>};
const _intimidating_display = {title: "Intimidating Display", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 8</Link></p>
<Ability id="intimidating-display-ex" icon={["stairs-goal"]}>
<Pair single id="intimidating-display-ex">Intimidating Display (Ex)</Pair>
<Pair title="Ability">The shaman can call upon some of the majesty and power of dragons to cow her enemies. The shaman gains <Link to="/feat/dazzling_display">Dazzling Display</Link> as a bonus feat, even if she does not meet the prerequisites, and she can use it even when not wielding a weapon.</Pair>
</Ability>
</>};
const _misfortune = {title: "Misfortune", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 37</Link></p>
<Ability id="misfortune-su" icon={["rolling-dices","armor-downgrade"]}>
<Pair single id="misfortune-su">Misfortune (Su)</Pair>
<Pair title="Ability">The shaman causes a creature within 30 feet to suffer grave misfortune for 1 round. Anytime the creature makes an ability check, attack roll, saving throw, or skill check, it must roll twice and take the worse result. A successful Will saving throw negates this hex.</Pair>
<Pair title="At 8th Level">The duration of this hex becomes 2 rounds.</Pair>
<Pair title="At 16th Level">The duration of this hex increases to 3 rounds.</Pair>
<Pair title="Special">This hex affects all rolls the target must make while it lasts. Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours.</Pair>
</Ability>
</>};
const _secret = {title: "Secret", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 37</Link></p>
<Ability id="secret-ex" icon={["stairs-goal"]}>
<Pair single id="secret-ex">Secret (Ex)</Pair>
<Pair title="Ability">The shaman receives one <Link to="/main/metamagic_feat">metamagic feat</Link> as a bonus feat. The shaman must meet the prerequisites for the feat.</Pair>
</Ability>
</>};
const _shapeshift = {title: "Shapeshift", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 37</Link></p>
<Ability id="shapeshift-su" icon={["magic-swirl"]}>
<Pair single id="shapeshift-su">Shapeshift (Su)</Pair>
<Pair title="Ability">The shaman transforms herself into another form for a number of minutes per day equal to her level, as <Link to="/spell/alter_self">alter self</Link>. This duration does not need to be consecutive, but must be spent in 1-minute increments. Changing form (including changing back) is a <strong className="hl">standard action</strong> that doesn't provoke an attack of opportunity.</Pair>
<Pair title="At 8th Level">This ability works as <Link to="/spell/beast_shape_i">beast shape I</Link>.</Pair>
<Pair title="At 12th Level">This ability works as <Link to="/spell/beast_shape_ii">beast shape II</Link>.</Pair>
<Pair title="At 16th Level">This ability works as <Link to="/spell/beast_shape_iii">beast shape III</Link>.</Pair>
<Pair title="At 20th Level">This ability works as <Link to="/spell/beast_shape_iv">beast shape IV</Link>.</Pair>
</Ability>
</>};
const _silkstring_snare = {title: "Silkstring Snare", jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 17</Link></p>
<Ability id="silkstring-snare-su" icon={["armor-downgrade"]}>
<Pair single id="silkstring-snare-su">Silkstring Snare (Su)</Pair>
<Pair title="Ability"><p>The shaman causes ribbons of spider silk to erupt from the ground beneath a single creature. The target must succeed at a Reflex save or be <Link to="/rule/entangled">entangled</Link> and anchored in place. The foe can escape the silk as a <strong className="hl">standard action</strong> with a successful <Link to="/skill/escape_artist">Escape Artist</Link> or Strength check at the same DC, or by dealing an amount of damage to the silk equal to double the shaman's class level (the silk has hardness 0).</p>
<p>This hex lasts a number of rounds equal to 3 + the shaman's Wisdom modifier.</p>
</Pair>
<Pair title="Special">A creature affected by this hex cannot be affected by it again for 24 hours.</Pair>
</Ability>
</>};
const _tongues = {title: "Tongues", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 37</Link></p>
<Ability id="tongues-su" icon={["stairs-goal"]}>
<Pair single id="tongues-su">Tongues (Su)</Pair>
<Pair title="Ability">The shaman understands any spoken language for a number of minutes per day equal to her level, as <Link to="/spell/comprehend_languages">comprehend languages</Link>. This duration does not need to be consecutive, but it must be spent in 1-minute increments.</Pair>
<Pair title="At 5th Level">A shaman can use this ability to speak any language, as <Link to="/spell/tongues">tongues</Link>.</Pair>
</Ability>
</>};
const _ward = {title: "Ward", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 37</Link></p>
<Ability id="ward-su" icon={["shield-reflect"]}>
<Pair single id="ward-su">Ward (Su)</Pair>
<Pair title="Ability">The shaman places a protective ward over one creature. The <em>warded</em> creature receives a +2 deflection bonus to AC and a +2 resistance bonus on saving throws. This effect lasts until the <em>warded</em> creature is hit or fails a saving throw.</Pair>
<Pair title="At 8th Level">These bonuses become +3.</Pair>
<Pair title="At 16th Level">These bonuses increase to +4.</Pair>
<Pair title="Special">A shaman knows when a <em>warded</em> creature is no longer protected. A shaman can have only one <em>ward</em> active at a time. If the shaman uses this hex while a previous <em>ward</em> is still active, that previous <em>ward</em> immediately ends. A shaman cannot use this ability on herself.</Pair>
</Ability>
</>};
const _wings = {title: "Wings", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 8</Link></p>
<Ability id="wings-su" icon={["stairs-goal"]}>
<Pair single id="wings-su">Wings (Su)</Pair>
<Pair title="Ability"><p>The shaman can grow a pair of wings for a number of minutes per day equal to her level. These minutes do not need to be consecutive, but they must be spent in 1-minute increments.</p>
<p>Initially, these wings lack the power to allow the shaman to fly, but the shaman can use them as a secondary <Link to="/umr/natural_attack">natural attack</Link> that deals 1d3 points of damage (1d2 for a Small shaman).</p>
</Pair>
<Pair title="At 3rd Level">She can use the wings to safely descend any distance, as if using the <Link to="/spell/feather_fall">feather fall</Link> spell.</Pair>
<Pair title="At 7th Level">She can use the wings to fly with poor maneuverability and a fly speed of 30 feet, but the shaman must land at the end of each turn or fall.</Pair>
<Pair title="Special">A shaman of 8th level or higher can select the wings hex a second time. This doubles the number of minutes per day the shaman can use her wings (2 minutes per level), and allows her to fly with average maneuverability and a fly speed of 30 feet while the wings are active.</Pair>
</Ability>
</>};
const _witch_hex = {title: "Witch Hex", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 37</Link></p>
<Ability id="witch-hex" icon={["stairs-goal"]}>
<Pair single id="witch-hex">Witch Hex</Pair>
<Pair title="Ability">The shaman selects <Link to="/ability/hexes">any one hex</Link> normally available through the <Link to="/class/witch">witch's</Link> <em>hex</em> class feature. She treats her shaman level as her witch level when determining the powers and abilities of the hex. She uses her Wisdom modifier in place of her Intelligence modifier for the hex.</Pair>
<Pair title="Special">She cannot select major hexes or grand hexes using this ability. The shaman cannot select a witch hex that has the same name as a shaman hex.</Pair>
</Ability>
</>};
export default {not_found:_not_found,chant:_chant,charm:_charm,draconic_resilience:_draconic_resilience,evil_eye:_evil_eye,fetish:_fetish,fortune:_fortune,fury:_fury,healing:_healing,intimidating_display:_intimidating_display,misfortune:_misfortune,secret:_secret,shapeshift:_shapeshift,silkstring_snare:_silkstring_snare,tongues:_tongues,ward:_ward,wings:_wings,witch_hex:_witch_hex}