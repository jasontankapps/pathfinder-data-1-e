import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import {Block,Row,Cell} from '../../components/Block';
const _not_found = {title: "Unknown", jsx: <><h2 id="implement-not_found-error">Error</h2>
<p>Unable to find the requested implement.</p>
</>};
const _abjuration = {title: "Abjuration", jsx: <><h2 id="implement-abjuration-abjuration">Abjuration</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 50</Link><br/>Abjuration implements are objects associated with protection and wards.</p>
<Block size="minimal">
<Row><Cell>Implements</Cell><Cell>Amulet, armor, bell, bracers, brooch, cloak, holy symbol, shield.</Cell></Row></Block>
<h3 id="implement-abjuration-resonant-power">Resonant Power</h3>
<Ability id="warding-talisman-su" icon={["armor-upgrade"]}>
<Pair single id="warding-talisman-su" flavor="The implement wards against adverse effects.">Warding Talisman (Su)</Pair>
<Pair title="Passive Ability">Whoever wears (or holds, for bells) the implement gains a +1 resistance bonus on saving throws for every 2 points of mental focus invested in the implement, to a maximum bonus of 1 + <Link to="/misc/one_fourth">one-fourth</Link> of your occultist level</Pair>
</Ability>
<h3 id="implement-abjuration-base-focus-power">Base Focus Power</h3>
<Ability id="mind-barrier-sp" icon={["armor-upgrade"]}>
<Pair single id="mind-barrier-sp">Mind Barrier (Sp)</Pair>
<Pair title="Swift Action"><p>You can expend 1 point of mental focus to create a shield of mental energy around you that protects you from harm. The shield prevents a total of 2 points of damage per occultist level you possess. It lasts until the start of your next turn or until exhausted.</p>
<p>For example, if you are 5th level, the mind barrier protects you from 10 points of damage; if you are hit by an attack that would deal 12 points of damage, the mind barrier is exhausted and you take 2 points of damage.</p>
</Pair>
<Pair title="Special">You can activate this ability as an <strong className="hl">immediate action</strong>, but doing so costs 2 points of mental focus instead of 1.</Pair>
</Ability>
<h3 id="implement-abjuration-focus-powers">Focus Powers</h3>
<Ability id="aegis-su" icon={["armor-upgrade"]}>
<Pair single id="aegis-su">Aegis (Su)</Pair>
<Pair title="Standard Action"><p>You can expend 1 point of mental focus and touch a suit of armor or a shield to grant it an enhancement bonus. This bonus is equal to 1 + <Link to="/misc/one_sixth">one-sixth</Link> of your occultist level. Enhancement bonuses gained via this ability stack with those of the armor or shield, to a maximum total enhancement bonus of +5.</p>
<p>You can also imbue the armor or shield with any one armor or shield <Link to="/main/magic_enhancements">special ability</Link> that has an equivalent enhancement bonus less than or equal to your maximum bonus granted by this ability by reducing the granted enhancement bonus by the appropriate amount. The item must have an enhancement bonus of at least +1 (from the item itself or from <em>aegis</em>) to gain an armor or shield special ability. In either case, these bonuses last for 1 minute.</p>
</Pair>
</Ability>
<Ability id="energy-shield-sp" icon={["armor-upgrade"]}>
<Pair single id="energy-shield-sp">Energy Shield (Sp)</Pair>
<Pair title="Prerequisites">3rd-level occultist</Pair>
<Pair title="Swift Action"><p>You can expend 1 point of mental focus to surround yourself with a shield that protects you from energy damage. Whenever you take acid, cold, electricity, or fire damage, the shield absorbs the damage (as <Link to="/spell/protection_from_energy">protection from energy</Link>). The energy shield can absorb up to 5 points of energy damage per occultist level you possess.</p>
<p>This shield lasts for 1 minute or until its power is exhausted. Its effect doesn't stack with itself, with <em>protection from energy,</em> or with <Link to="/spell/resist_energy">resist energy</Link>.</p>
</Pair>
<Pair title="Special">You can activate the energy shield as an <strong className="hl">immediate action</strong> by expending 2 points of mental focus instead of 1.</Pair>
</Ability>
<Ability id="globe-of-negation-sp" icon={["armor-upgrade"]}>
<Pair single id="globe-of-negation-sp">Globe of Negation (Sp)</Pair>
<Pair title="Prerequisites">11th-level occultist</Pair>
<Pair title="Standard Action"><p>You can expend 3 points of mental focus to create a stationary <em>globe of negation.</em> This <em>globe</em> is 10 feet in diameter and cancels any spell effect that is cast into or through its area. This functions as <Link to="/spell/globe_of_invulnerability">globe of invulnerability</Link>, but it affects spells of any level.</p>
<p>The <em>globe</em> can negate a total number of spell levels equal to your occultist level, after which the <em>globe</em> collapses. Spells that exceed the number of remaining levels remove all remaining levels, but are weakened; any creatures targeted by such spells receive a +4 circumstance bonus on any saving throws against the spells' effects.</p>
<p>The <em>globe</em> lasts for a number of rounds equal to your occultist level. It has no effect on spells originating within the <em>globe</em> - only on those that enter its area as or after they are cast.</p>
</Pair>
</Ability>
<Ability id="loci-sentry-sp" icon={["magic-swirl"]}>
<Pair single id="loci-sentry-sp">Loci Sentry (Sp)</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to set a ward about an area. This area has a maximum radius of 10 feet + 5 feet per occultist level you possess. Whenever a creature enters the area, a sentry manifested by your psyche appears and strikes out at the intruder. The affected creature must succeed at a Will save or be <Link to="/misc/dazed">dazed</Link> for 1 round. You are immediately aware of the sentry's activation.</Pair>
<Pair title="Special">The sentry lasts for up to 1 hour per occultist level you possess, or until triggered. When you set the sentry, you can set any number of specific creatures to be immune to the sentry and thus avoid triggering it.</Pair>
</Ability>
<Ability id="planar-ward-sp" icon={["armor-upgrade"]}>
<Pair single id="planar-ward-sp">Planar Ward (Sp)</Pair>
<Pair title="Standard Action">You can expend 2 points of mental focus to surround yourself with a planar ward. Creatures not native to the plane that you are currently on take a -4 penalty on attacks against you, and you receive a +4 circumstance bonus on saving throws against the spells, spell-like abilities, and supernatural abilities of such creatures. This ward lasts for 1 minute.</Pair>
</Ability>
<Ability id="unraveling-sp" icon={["magic-swirl"]}>
<Pair single id="unraveling-sp">Unraveling (Sp)</Pair>
<Pair title="Prerequisites">5th-level occultist</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to unravel a magical effect. This functions as a targeted <Link to="/spell/dispel_magic">dispel magic</Link> spell, but you must be adjacent to the effect to unravel it.</Pair>
<Pair title="Special">If the effect is created by psychic magic, you receive a +5 bonus on your caster level check to unravel it. If the effect targets an object in your possession, you automatically succeed at the check.</Pair>
</Ability>
<h3 id="implement-abjuration-sacred-implement">Sacred Implement</h3>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 15</Link></p>
<Block size="simple">
<Row><Cell>Deity</Cell><Cell><Link to="/faith/pharasma">Pharasma</Link></Cell></Row>
<Row><Cell>Implement</Cell><Cell>brooch</Cell></Row>
<Row><Cell>Opposition School</Cell><Cell>necromancy</Cell></Row></Block>
<Ability id="grandmothers-ward-su" icon={["armor-upgrade"]}>
<Pair single id="grandmothers-ward-su">Grandmother's Ward (Su)</Pair>
<Pair title="Standard Action">You can expend 3 points of psychic focus to create a 5-foot-radius ward centered on you for 1 round per occultist level. This ward burns undead creatures, dealing 1d4 damage when the undead enter the ward and each round they begin their turns within this area of effect.</Pair>
<Pair title="At 2nd Level">The damage becomes 2d4.</Pair>
<Pair title="At 4th Level">The damage increases to 3d4.</Pair>
<Pair title="At 6th Level">The damage becomes 4d4.</Pair>
<Pair title="At 8th Level">The damage increases to 5d4.</Pair>
<Pair title="At 10th Level">The damage becomes 6d4.</Pair>
<Pair title="At 12th Level">The damage increases to 7d4.</Pair>
<Pair title="At 14th Level">The damage becomes 8d4.</Pair>
<Pair title="At 16th Level">The damage increases to 9d4.</Pair>
<Pair title="At 18th Level">The damage becomes 10d4.</Pair>
<Pair title="At 20th Level">The damage increases to 11d4.</Pair>
<Pair title="Special">The warded area moves with you and can be used only defensively. Any attempt to force the ward against an undead creature immediately ends the effect.</Pair>
</Ability>
</>};
const _conjuration = {title: "Conjuration", jsx: <><h2 id="implement-conjuration-conjuration">Conjuration</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 51</Link><br/>Implements used in conjuration allow the occultist to perform magic that transports or calls creatures.</p>
<Block size="minimal">
<Row><Cell>Implements</Cell><Cell>Bowl, brazier, compass, figurine, lantern, mirror.</Cell></Row></Block>
<h3 id="implement-conjuration-resonant-power">Resonant Power</h3>
<Ability id="casting-focus-su" icon={["upgrade"]}>
<Pair single id="casting-focus-su" flavor="The implement empowers the bearer's ties to the worlds beyond, allowing his spells to maintain their power for a longer period of time.">Casting Focus (Su)</Pair>
<Pair title="Ability">The bearer can add the implement as an additional focus component to any conjuration spell he casts that has a duration measured in rounds per level. If he does so, he adds 1 to his caster level for every 2 points of mental focus stored in the implement (to a maximum bonus equal to your occultist level).</Pair>
<Pair title="Special">This increase applies only when determining the duration of the spell. Apply this increase after other effects that adjust a spell's duration, such as <Link to="/feat/extend_spell">Extend Spell</Link>.</Pair>
</Ability>
<h3 id="implement-conjuration-base-focus-power">Base Focus Power</h3>
<Ability id="servitor-sp" icon={["magic-swirl"]}>
<Pair single id="servitor-sp">Servitor (Sp)</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to summon a servitor. This ability functions as <Link to="/spell/summon_monster_i">summon monster I</Link>, but you can use it only to summon a single creature, and the effect lasts for 1 minute.</Pair>
<Pair title="At 4th Level">This now behaves as <Link to="/spell/summon_monster_ii">summon monster II</Link>.</Pair>
<Pair title="At 7th Level">This now behaves as <Link to="/spell/summon_monster_iii">summon monster III</Link>.</Pair>
<Pair title="At 10th Level">This now behaves as <Link to="/spell/summon_monster_iv">summon monster IV</Link>.</Pair>
<Pair title="At 13th Level">This now behaves as <Link to="/spell/summon_monster_v">summon monster V</Link>.</Pair>
<Pair title="At 16th Level">This now behaves as <Link to="/spell/summon_monster_vi">summon monster VI</Link>.</Pair>
<Pair title="At 19th Level">This now behaves as <Link to="/spell/summon_monster_vii">summon monster VII</Link>.</Pair>
<Pair title="Special">You can't have more than one servitor in effect at a time. At any time, you can expend 1 point of mental focus as a <strong className="hl">free action</strong> to extend the duration of an active servitor by 1 minute.</Pair>
</Ability>
<h3 id="implement-conjuration-focus-powers">Focus Powers</h3>
<Ability id="conjure-implement-sp" icon={["magic-swirl"]}>
<Pair single id="conjure-implement-sp">Conjure Implement (Sp)</Pair>
<Pair title="Ability">You can expend 1 point of mental focus to conjure any item that qualifies as an implement that you know how to use. This implement can be used as the item in question, functioning as a masterwork version of that item, and can also be used to cast your psychic spells, even though you did not select it at the beginning of the day.</Pair>
<Pair title="Special">If you have more than one implement for the same school, decide which set of spells the conjured implement will grant when you first conjure it. The implement can't be used to store mental focus or create any effects that require mental focus. The implement lasts for 10 minutes per occultist level you possess.</Pair>
</Ability>
<Ability id="flesh-mend-sp" icon={["remedy"]}>
<Pair single id="flesh-mend-sp">Flesh Mend (Sp)</Pair>
<Pair title="Prerequisites">3rd-level occultist</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to heal a living creature with a touch. The creature is healed an amount of damage equal to 1d8 + your occultist level. This has no effect on undead creatures.</Pair>
<Pair title="At 7th Level">The healing becomes 2d8 + your occultist level.</Pair>
<Pair title="At 11th Level">The healing increases to 3d8 + your occultist level.</Pair>
<Pair title="At 15th Level">The healing becomes 4d8 + your occultist level.</Pair>
<Pair title="At 19th Level">The healing increases to 5d8 + your occultist level.</Pair>
</Ability>
<Ability id="mind-steed-sp" icon={["magic-swirl"]}>
<Pair single id="mind-steed-sp">Mind Steed (Sp)</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to conjure a spectral horse. This horse can be either Medium or Large, but it otherwise functions as <Link to="/spell/mount">mount</Link>. The horse lasts for 10 minutes per occultist level you possess.</Pair>
<Pair title="At 5th Level">The mount's base land speed increases by 20 feet.</Pair>
<Pair title="At 9th Level">If you expend 1 additional point of mental focus, the mount can fly at a speed of 60 feet with good maneuverability, but doing so reduces the mount's duration to 1 minute per occultist level you possess.</Pair>
</Ability>
<Ability id="psychic-fog-sp" icon={["magic-swirl"]}>
<Pair single id="psychic-fog-sp">Psychic Fog (Sp)</Pair>
<Pair title="Prerequisites">3rd-level occultist</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to create a cloud of fog. This fog lasts for 1 minute per occultist level you possess. It functions as <Link to="/spell/fog_cloud">fog cloud</Link>, except it can't be dispersed by wind.</Pair>
<Pair title="At 7th Level"><p>You can expend 1 additional point of mental focus when creating this fog, causing it to become more tangible and function as <Link to="/spell/solid_fog">solid fog</Link>, except it doesn't slow down any creature that has psychic powers or that can cast psychic spells.</p>
<p>When you create a solid fog in this way, its duration is reduced to 1 round per occultist level you possess.</p>
</Pair>
</Ability>
<Ability id="purge-corruption-sp" icon={["remedy"]}>
<Pair single id="purge-corruption-sp">Purge Corruption (Sp)</Pair>
<Pair title="Prerequisites">5th-level occultist</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to draw out the corruption from a creature. You must touch the target with your implement to use this power. This ability functions as either <Link to="/spell/neutralize_poison">neutralize poison</Link> or <Link to="/spell/remove_disease">remove disease</Link>, using your occultist level as the caster level. Each use of this ability can cure only one poison or one disease.</Pair>
</Ability>
<Ability id="side-step-sp" icon={["magic-swirl"]}>
<Pair single id="side-step-sp">Side Step (Sp)</Pair>
<Pair title="Prerequisites">7th-level occultist</Pair>
<Pair title="Ability"><p>You can create a temporary fissure in space by expending 1 point of mental focus. You can use this ability as part of a <strong className="hl">move action</strong> taken to move. The fissure begins in any square you designate and allows you to teleport to any other square you can see within 10 feet per occultist level.</p>
<p>Stepping between these locations requires you to expend 5 feet of movement, and the movement through the rift does not provoke attacks of opportunity. This otherwise functions as <Link to="/spell/teleport">teleport</Link>.</p>
</Pair>
</Ability>
<h3 id="implement-conjuration-sacred-implement">Sacred Implement</h3>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 15</Link></p>
<Block size="simple">
<Row><Cell>Deity</Cell><Cell><Link to="/faith/asmodeus">Asmodeus</Link></Cell></Row>
<Row><Cell>Implement</Cell><Cell>bowl</Cell></Row>
<Row><Cell>Opposition School</Cell><Cell>transmutation</Cell></Row></Block>
<Ability id="amber-prison-su" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="amber-prison-su">Amber Prison (Su)</Pair>
<Pair title="Ability">You can expend 3 points of mental focus to entomb a creature within 40 feet in an amber-like prison, rendering it <Link to="/rule/paralyzed">paralyzed</Link> and <Link to="/misc/unconscious">unconscious</Link> for 1 minute per occultist level you have. The amber prison has 20 hit points; destroying the prison frees the creature.</Pair>
<Pair title="Special">A successful Reflex save negates this entombment. Whether or not the saving throw is successful, the creature can't be the target of this focus power again for 1 day.</Pair>
</Ability>
</>};
const _divination = {title: "Divination", jsx: <><h2 id="implement-divination-divination">Divination</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 52</Link><br/>Implements of the divination school grant powers related to foresight and remote viewing.</p>
<Block size="minimal">
<Row><Cell>Implements</Cell><Cell>Book, crystal ball, goggles, harrow deck, headband, lenses, planchette.</Cell></Row></Block>
<h3 id="implement-divination-resonant-power">Resonant Power</h3>
<Ability id="third-eye-su" icon={["upgrade","stairs-goal"]}>
<Pair single id="third-eye-su" flavor="The implement allows its bearer to notice that which can't easily be seen.">Third Eye (Su)</Pair>
<Pair title="Passive Ability">The implement grants a +1 insight bonus on <Link to="/skill/perception">Perception</Link> checks per 2 points of mental focus stored in it, to a maximum bonus equal to the occultist's level.</Pair>
<Pair title="At 3rd Level">If the occultist stores at least 3 points of mental focus in it, the implement also grants low-light vision.</Pair>
<Pair title="At 5th Level">If the occultist stores at least 6 points of mental focus in it, the implement also grants darkvision 60 feet. (If the bearer already has darkvision, the implement increases the range of the darkvision by 30 feet.)</Pair>
<Pair title="At 7th Level">If the occultist stores at least 9 points of mental focus in it, the implement also grants the effects of <Link to="/spell/see_invisibility">see invisibility</Link>.</Pair>
<Pair title="At 13th Level">If the occultist stores at least 12 points of mental focus in it, the implement also grants <Link to="/umr/blindsense">blindsense</Link> 60 feet.</Pair>
<Pair title="At 19th Level">If the occultist stores at least 15 points of mental focus in it, the implement also grants <Link to="/umr/blindsight">blindsight</Link> 30 feet.</Pair>
</Ability>
<h3 id="implement-divination-base-focus-power">Base Focus Power</h3>
<Ability id="sudden-insight-sp" icon={["upgrade"]}>
<Pair single id="sudden-insight-sp">Sudden Insight (Sp)</Pair>
<Pair title="Swift Action">You can expend 1 point of mental focus to gain an insight into your immediate future. You can use this foreknowledge as a <strong className="hl">free action</strong> before you roll any ability check, attack roll, or skill check to gain an insight bonus on that roll equal to <Link to="/misc/half">half</Link> your occultist level (minimum +1).</Pair>
<Pair title="Special">You can use your foreknowledge only once per turn, and if it's not used by the end of your turn, the insight fades and you gain no benefit.</Pair>
</Ability>
<h3 id="implement-divination-focus-powers">Focus Powers</h3>
<Ability id="danger-sight-sp" icon={["armor-upgrade"]}>
<Pair single id="danger-sight-sp">Danger Sight (Sp)</Pair>
<Pair title="Prerequisites">3rd-level occultist</Pair>
<Pair title="Immediate Action">You can protect yourself from harm by expending 1 point of mental focus. You can use this ability whenever you are the target of an attack or are required to attempt a saving throw against a special ability, spell, or trap. Doing so grants you an insight bonus to your AC or on your saving throw equal to <Link to="/misc/half">half</Link> your occultist level. This bonus applies only to the next attack against you or saving throw you attempt, and if not applied by the end of the round, the protection fades and you gain no benefit.</Pair>
</Ability>
<Ability id="future-gaze-sp" icon={["magic-swirl"]}>
<Pair single id="future-gaze-sp">Future Gaze (Sp)</Pair>
<Pair title="Standard Action">You can gain an insight into the future by expending 1 point of mental focus. This functions as <Link to="/spell/augury">augury</Link>, using your occultist level as the caster level.</Pair>
</Ability>
<Ability id="mind-eye-sp" icon={["magic-swirl"]}>
<Pair single id="mind-eye-sp">Mind Eye (Sp)</Pair>
<Pair title="Prerequisites">5th-level occultist</Pair>
<Pair title="Standard Action"><p>You can expend 1 point of mental focus to create a <em>mind eye</em> - a magical sensor through which you can see and hear. The <em>mind eye</em> is invisible and its size is Fine, giving it an AC of 18. Any amount of damage to the <em>eye</em> destroys it, but it can be harmed by only spells or magic weapons.</p>
<p>The <em>eye</em> moves with a fly speed of 60 feet with perfect maneuverability and can travel up to 1 mile away from you. You must concentrate as a <strong className="hl">standard action</strong> to direct the <em>eye</em> and receive sensory images through it.</p>
<p>The <em>mind eye</em> sees as your eyes see, including any additional senses you possess (such as darkvision or <Link to="/spell/see_invisibility">see invisibility</Link>). The <em>mind eye</em> lasts for 1 minute per occultist level you possess.</p>
</Pair>
</Ability>
<Ability id="object-seer-sp" icon={["magic-swirl"]}>
<Pair single id="object-seer-sp">Object Seer (Sp)</Pair>
<Pair title="Prerequisites">7th-level occultist</Pair>
<Pair title="Full-Round Action">You can expend 1 point of mental focus to gain insight into an object in your possession. You can ask one question, but that question must be tied in some way to the object, such as the nature of its power, the identity of the creature that last possessed it, or even where the object was when a certain event took place. You always receive an answer from the psychic impressions imprinted upon the item, but they are sometimes cryptic or misleading. This ability otherwise functions as <Link to="/spell/commune">commune</Link>.</Pair>
</Ability>
<Ability id="powerful-connection-su" icon={["upgrade"]}>
<Pair single id="powerful-connection-su">Powerful Connection (Su)</Pair>
<Pair title="Ability"><p>When casting a divination spell (such as <Link to="/spell/scrying">scrying</Link>) that imposes a penalty on saving throws based on the physical connection you have to the target, you can expend 1 point of mental focus to double the penalty from a possession, garment, or body part.</p>
<p>In addition, when casting any other divination spell that allows a saving throw, you can increase the DC of that save by 2 by adding an object, garment, or body part that belonged to the target as a focus component for the spell and expending 1 point of mental focus.</p>
</Pair>
</Ability>
<Ability id="watchful-eye-sp" icon={["magic-swirl"]}>
<Pair single id="watchful-eye-sp">Watchful Eye (Sp)</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to create an invisible sensor within 30 feet that watches a 5-foot-square area. Whenever any creature enters that square, you receive a mental image of the creature as long as you are on the same plane as the sensor. The sensor remains active for 10 minutes per occultist level you possess. You can expend additional points of mental focus when creating the eye to increase the size of the square by 5 feet per additional point spent (to 10 feet square, 15 feet square, and so on).</Pair>
<Pair title="Special">The image will not wake you from slumber, although you do receive all of the images the sensor collected once you wake up. The sensor can be deceived by <Link to="/spell/invisibility">invisibility</Link> and similar magic.</Pair>
</Ability>
</>};
const _enchantment = {title: "Enchantment", jsx: <><h2 id="implement-enchantment-enchantment">Enchantment</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 53</Link><br/>Enchantment implements allow the occultist to befuddle the mind and charm his foes.</p>
<Block size="minimal">
<Row><Cell>Implements</Cell><Cell>Censer, crown, helm, musical instrument, necklace.</Cell></Row></Block>
<h3 id="implement-enchantment-resonant-power">Resonant Power</h3>
<Ability id="glorious-presence-su" icon={["upgrade"]}>
<Pair single id="glorious-presence-su" flavor="The implement invokes the presence of those who have worn it in the past.">Glorious Presence (Su)</Pair>
<Pair title="Passive Ability">The implement's wearer gains a +1 competence bonus on all Charisma-based skill checks and ability checks for every 2 points of mental focus invested in the implement, to a maximum bonus of 1 + <Link to="/misc/one_fourth">one-fourth</Link> of your occultist level.</Pair>
</Ability>
<h3 id="implement-enchantment-base-focus-power">Base Focus Power</h3>
<Ability id="cloud-mind-su" icon={["armor-downgrade"]}>
<Pair single id="cloud-mind-su">Cloud Mind (Su)</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to cloud the mind of one foe within 30 feet. That foe is <Link to="/misc/dazed">dazed</Link> for 1 round if the number of Hit Dice it possesses is less than or equal to or your occultist level. If it has more Hit Dice than your occultist level, it is <Link to="/misc/staggered">staggered</Link> for 1 round instead.</Pair>
<Pair title="Special">The foe can attempt a Will saving throw to negate the effect. Whether or not it succeeds at the save, the target is then immune to this effect for 1 day. This is a mind-affecting effect.</Pair>
</Ability>
<h3 id="implement-enchantment-focus-powers">Focus Powers</h3>
<Ability id="binding-pattern-sp" icon={["armor-downgrade"]}>
<Pair single id="binding-pattern-sp">Binding Pattern (Sp)</Pair>
<Pair title="Prerequisites">7th-level occultist</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to create a binding pattern of psychic energy that causes a living creature to become <Link to="/rule/paralyzed">paralyzed</Link>. The target must be within 30 feet of you, and it can attempt a Will saving throw to negate the effect. If it fails the save, it is paralyzed for 1 round for every 2 occultist levels you possess.</Pair>
<Pair title="Special">At the end of each of its turns, it can attempt another Will save to end the paralyzed effect and instead be staggered for the remaining duration. This is a mind-affecting compulsion effect.</Pair>
</Ability>
<Ability id="forced-alliance-sp" icon={["magic-swirl"]}>
<Pair single id="forced-alliance-sp">Forced Alliance (Sp)</Pair>
<Pair title="Prerequisites">5th-level occultist</Pair>
<Pair title="Standard Action"><p>You can alter a living creature's mind, causing it to see you as a friend and ally. If the creature is the same creature type as you, this power requires you to expend 1 point of mental focus; if it's is not, you must expend 2 points instead. The creature can attempt a Will save to negate this effect. If it fails the saving throw, the creature treats you as an ally and doesn't attempt to harm you (although your allies are not protected).</p>
<p>You can call on the creature to aid you directly, but while doing so the creature can attempt a new Will save at the end of each round to end the effect. This effect otherwise lasts 1 round per occultist level you possess.</p>
</Pair>
<Pair title="Special">This is a mind-affecting charm effect.</Pair>
</Ability>
<Ability id="inspired-assault-sp" icon={["upgrade","armor-upgrade"]}>
<Pair single id="inspired-assault-sp">Inspired Assault (Sp)</Pair>
<Pair title="Standard Action">You can inspire a living creature with a touch by expending 1 point of mental focus. The creature receives a morale bonus on attack rolls. This bonus is equal to 1 + <Link to="/misc/one_sixth">one-sixth</Link> of your occultist level. This bonus also applies on saving throws against fear effects. This bonus lasts for 1 minute.</Pair>
</Ability>
<Ability id="mental-discord-sp" icon={["armor-downgrade"]}>
<Pair single id="mental-discord-sp">Mental Discord (Sp)</Pair>
<Pair title="Standard Action"><p>You can expend 1 point of mental focus to disrupt the mind of one living creature within 30 feet. The creature can attempt a Will saving throw to negate the effect. If it fails the save, the creature can't concentrate on any spell effects and must succeed at a <Link to="/rule/concentration">concentration</Link> check to cast any spell (DC = 15 + double the spell level). The affected creature takes a -4 penalty on this check if the spell includes a thought component.</p>
<p>The creature takes a -2 penalty on all Will saving throws while under this effect. This effect lasts for 1 round per occultist level you possess.</p>
</Pair>
</Ability>
<Ability id="mind-slumber-sp" icon={["armor-downgrade"]}>
<Pair single id="mind-slumber-sp">Mind Slumber (Sp)</Pair>
<Pair title="Prerequisites">3rd-level occultist</Pair>
<Pair title="Standard Action"><p>By expending 1 point of mental focus, you can lull a living creature into a deep mental slumber, forcing it to view the world as a dream. The target must be within 30 feet of you, and it can attempt a Will saving throw to negate the effect. If it fails the save, the creature falls asleep, although it still perceives the world around it as a dream. This doesn't cause the creature to fall <Link to="/rule/prone">prone</Link>, but it does drop whatever it is holding. The creature can't take any actions while in this state, but it isn't <Link to="/misc/helpless">helpless</Link> - it perceives danger as part of its dream.</p>
<p>The creature remains asleep for a number of rounds equal to your occultist level or until it takes any amount of damage, which immediately wakes it. At the end of each of its turns, it receives another Will saving throw to end the effect. The creature can be manipulated or examined without waking it, but it can't be moved from its square without waking it.</p>
</Pair>
<Pair title="Special">This is a mind-affecting compulsion effect. Regardless of whether it succeeds at the save, the target is then immune to this effect for 24 hours.</Pair>
</Ability>
<Ability id="obey-sp" icon={["magic-swirl"]}>
<Pair single id="obey-sp">Obey (Sp)</Pair>
<Pair title="Standard Action">You can issue a command to one living creature by expending 1 point of mental focus. This functions as <Link to="/spell/command">command</Link>. The target must be within 30 feet and capable of understanding your order. The target can attempt a Will save to negate this effect. If the creature is the same creature type as you, it takes a -2 penalty on this saving throw.</Pair>
</Ability>
<h3 id="implement-enchantment-sacred-implement">Sacred Implement</h3>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 15</Link></p>
<Block size="simple">
<Row><Cell>Deity</Cell><Cell><Link to="/faith/aroden">Aroden</Link></Cell></Row>
<Row><Cell>Implement</Cell><Cell>necklace</Cell></Row>
<Row><Cell>Opposition School</Cell><Cell>illusion</Cell></Row></Block>
<Ability id="forgotten-sp" icon={["magic-swirl"]}>
<Pair single id="forgotten-sp">Forgotten (Sp)</Pair>
<Pair title="Standard Action">You can expend 3 points of mental focus to target a single creature within 30 feet using <Link to="/spell/modify_memory">modify memory</Link>. This ability can be used only to cause the target to forget the last 5 minutes of interaction with you.</Pair>
</Ability>
</>};
const _evocation = {title: "Evocation", jsx: <><h2 id="implement-evocation-evocation">Evocation</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 54</Link><br/>Implements focused on evocation grant the ability to create and direct energy to protect and to destroy.</p>
<Block size="minimal">
<Row><Cell>Implements</Cell><Cell>Gloves, rod, staff, wand.</Cell></Row></Block>
<h3 id="implement-evocation-resonant-power">Resonant Power</h3>
<Ability id="intense-focus-su" icon={["upgrade"]}>
<Pair single id="intense-focus-su" flavor="The implement channels and enhances the effects of damaging evocations.">Intense Focus (Su)</Pair>
<Pair title="Ability">A spellcaster who bears the implement can add the implement as an additional focus component for any of his damaging evocation spells that have an instantaneous duration or focus powers with an instantaneous duration. If he does so, the spell or focus power deals 1 additional point of damage of the same type to each creature for every 2 points of mental focus invested in the implement, to a maximum of 1 + 1 for every 2 occultist levels you possess.</Pair>
</Ability>
<h3 id="implement-evocation-base-focus-power">Base Focus Power</h3>
<Ability id="energy-ray-sp" icon={["smoking-finger"]}>
<Pair single id="energy-ray-sp">Energy Ray (Sp)</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to unleash a ray of pure energy as a ranged touch attack. This ray has a range of 30 feet. The ray deals an amount of energy damage equal to 1d6 points. When you unleash an <em>energy ray,</em> you must decide what type of damage it deals (acid, cold, electricity, or fire).</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>Yes</Pair>
<Pair title="At 3rd Level">The damage becomes 2d6.</Pair>
<Pair title="At 5th Level">The damage increases to 3d6.</Pair>
<Pair title="At 7th Level">The damage becomes 4d6.</Pair>
<Pair title="At 9th Level">The damage increases to 5d6.</Pair>
<Pair title="At 11th Level">The damage becomes 6d6.</Pair>
<Pair title="At 13th Level">The damage increases to 7d6.</Pair>
<Pair title="At 15th Level">The damage becomes 8d6.</Pair>
<Pair title="At 17th Level">The damage increases to 9d6.</Pair>
<Pair title="At 19th Level">The damage becomes 10d6.</Pair>
</Ability>
<h3 id="implement-evocation-focus-powers">Focus Powers</h3>
<Ability id="energy-blast-sp" icon={["magic-swirl"]}>
<Pair single id="energy-blast-sp">Energy Blast (Sp)</Pair>
<Pair title="Prerequisites">5th-level occultist</Pair>
<Pair title="Standard Action">You can expend 2 points of mental focus to unleash a blast of energy. This blast has a range of 100 feet, and deals 5d6 points of energy damage. The blast deals damage to each creature in a 20-foot-radius <Link to="/misc/burst">burst</Link>, but each affected creature can attempt a Reflex save to halve the damage. When you unleash an <em>energy blast,</em> you must decide what type of damage it deals (acid, cold, electricity, or fire).</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>Yes</Pair>
<Pair title="At 7th Level">The damage becomes 6d6.</Pair>
<Pair title="At 9th Level">The damage increases to 7d6.</Pair>
<Pair title="At 11th Level">The damage becomes 8d6.</Pair>
<Pair title="At 13th Level">The damage increases to 9d6.</Pair>
<Pair title="At 15th Level">The damage becomes 10d6.</Pair>
<Pair title="At 17th Level">The damage increases to 11d6.</Pair>
<Pair title="At 19th Level">The damage becomes 12d6.</Pair>
</Ability>
<Ability id="energy-ward-sp" icon={["armor-upgrade"]}>
<Pair single id="energy-ward-sp">Energy Ward (Sp)</Pair>
<Pair title="Prerequisites">7th-level occultist</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to surround yourself in a swirling ward of energy. When you activate this power, you must select acid, cold, electricity, or fire. You gain <Link to="/umr/resistance">resistance</Link> 10 against that energy type, and whenever a creature hits you with a melee weapon or natural weapon, that creature takes 1d6 points of energy damage of the chosen type. Attacks made with melee weapons with reach don't cause the attacker to take this damage. The <em>energy ward</em> lasts for 1 round per occultist level.</Pair>
<Pair title="At 13th Level">The resistance becomes 15.</Pair>
<Pair title="At 19th Level">The resistance increases to 20.</Pair>
</Ability>
<Ability id="light-matrix-sp" icon={["magic-swirl","magic-palm"]}>
<Pair single id="light-matrix-sp">Light Matrix (Sp)</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to create a glowing orb of swirling lights that obeys your commands. This orb illuminates the area like the <Link to="/spell/light">light</Link> spell. The orb can be commanded to hover over your shoulder, moving with you.</Pair>
<Pair title="Move-Equivalent Action">You can direct it to move up to 30 feet away from you. If the <em>light matrix</em> is ever more than 30 feet away from you, it returns to hover over your shoulder.</Pair>
<Pair title="At 5th Level">You can direct the <em>light matrix</em> to make a melee touch attack against one foe within 30 feet. If the attack hits, the target must succeed at a Fortitude save or be <Link to="/misc/blinded">blinded</Link> for 1d4 rounds by a flash of light. If the attack hits, regardless of whether the target succeeds at the save, the <em>light matrix</em> immediately ends.</Pair>
<Pair title="Special">Unless ended early, the <em>light matrix</em> has a duration of 1 hour per occultist level you possess. You can't have more than one <em>light matrix</em> in existence at one time. If you use this power again, any previous <em>light matrices</em> immediately end.</Pair>
</Ability>
<Ability id="radiance-sp" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="radiance-sp">Radiance (Sp)</Pair>
<Pair title="Standard Action"><p>You can touch a weapon to cause it to glow with light by expending 1 point of mental focus. The weapon produces light like a <Link to="/eq-misc/torch">torch</Link>. For the purpose of <Link to="/spelldef/darkness">darkness</Link> spells and abilities, this effect counts as a light spell of a level equal to <Link to="/misc/half">half</Link> of your occultist level. This light lasts for 1 minute per occultist level you possess.</p>
<p>In addition, whenever the weapon scores a critical hit against a foe, the wielder can choose to end the effect, causing the foe to be surrounded by the <em>radiance</em> for 1d4 rounds. While illuminated in this way, the target can't benefit from <Link to="/rule/concealment">concealment</Link> or <Link to="/spell/invisibility">invisibility</Link>, nor can it attempt Stealth checks to avoid being seen. All attack rolls made against an illuminated foe receive a +2 circumstance bonus.</p>
</Pair>
</Ability>
<Ability id="shape-mastery-su" icon={["upgrade"]}>
<Pair single id="shape-mastery-su">Shape Mastery (Su)</Pair>
<Pair title="Ability">As part of casting an evocation spell with an area of effect, you can expend a number of points of mental focus up to your Intelligence modifier to exclude an equal number of squares from the area.</Pair>
</Ability>
<Ability id="wall-of-power-sp" icon={["magic-swirl"]}>
<Pair single id="wall-of-power-sp">Wall of Power (Sp)</Pair>
<Pair title="Prerequisites">9th-level occultist</Pair>
<Pair title="Standard Action"><p>By expending 1 point of mental focus, you can create a wall of pure energy with a length of up to 5 feet per occultist level you possess. This wall is 10 feet high and 1 foot thick. It doesn't block passage, line of sight, or line of effect, but does deal damage to anyone passing through it.</p>
<p>The wall deals 2d6 points of energy damage + 1 point of energy damage per occultist level you possess. You must select acid, cold, electricity, or fire when you create the wall to determine the type of damage it deals. The wall must be straight, and can't pass through a creature's space when created. The wall lasts for 1 round per occultist level you possess.</p>
</Pair>
</Ability>
<h3 id="implement-evocation-sacred-implement">Sacred Implement</h3>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 15</Link></p>
<Block size="simple">
<Row><Cell>Deity</Cell><Cell><Link to="/faith/rovagug">Rovagug</Link></Cell></Row>
<Row><Cell>Implement</Cell><Cell>figurine</Cell></Row>
<Row><Cell>Opposition School</Cell><Cell>abjuration</Cell></Row></Block>
<Ability id="footsteps-of-the-rough-beast-su" icon={["magic-swirl"]}>
<Pair single id="footsteps-of-the-rough-beast-su">Footsteps of the Rough Beast (Su)</Pair>
<Pair title="Move-Equivalent Action">You can expend 1 point of mental focus to cause the ground in a 5-foot-radius <Link to="/misc/burst">burst</Link> centered on you to crumble and rupture, becoming <Link to="/rule/difficult_terrain">difficult terrain</Link>. If you remain stationary, in subsequent rounds you can <Link to="/rule/concentration">concentrate</Link> on this area as though concentrating on a spell by expending 1 additional mental focus each round. As long as you maintain concentration, the radius of the difficult terrain increases by 5 feet (maximum 30-foot radius) each round.</Pair>
<Pair title="Special">You immediately cease concentrating if you move from your originating location. Difficult terrain created this way remains for 24 hours before returning to its original state.</Pair>
</Ability>
</>};
const _illusion = {title: "Illusion", jsx: <><h2 id="implement-illusion-illusion">Illusion</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 55</Link><br/>Illusion implements allow the occultist to distort the senses and cloak creatures from sight.</p>
<Block size="minimal">
<Row><Cell>Implements</Cell><Cell>Crystal, hat, mask, prism, ring.</Cell></Row></Block>
<h3 id="implement-illusion-resonant-power">Resonant Power</h3>
<Ability id="distortion-sp" icon={["armor-upgrade"]}>
<Pair single id="distortion-sp" flavor="The implement allows its bearer to distort his form and location, protecting him from harm.">Distortion (Sp)</Pair>
<Pair title="Standard Action">The bearer can gain a <Link to="/rule/concealment">concealment</Link> miss chance equal to 5% for every point of mental focus invested in the implement (to a maximum of 5%) until the next time the bearer makes an attack. If this miss chance reaches 50%, it doesn't increase further, but the bearer gains all the benefits of <Link to="/spell/invisibility">invisibility</Link>.</Pair>
<Pair title="At 2nd Level">The miss chance maximum becomes 10%.</Pair>
<Pair title="At 4th Level">The miss chance maximum increases to 15%.</Pair>
<Pair title="At 6th Level">The miss chance maximum becomes 20%.</Pair>
<Pair title="At 8th Level">The miss chance maximum increases to 25%.</Pair>
<Pair title="At 10th Level">The miss chance maximum becomes 30%.</Pair>
<Pair title="At 12th Level">The miss chance maximum increases to 35%.</Pair>
<Pair title="At 14th Level">The miss chance maximum becomes 40%.</Pair>
<Pair title="At 16th Level">The miss chance maximum increases to 45%.</Pair>
<Pair title="At 18th Level">The miss chance maximum becomes 50%.</Pair>
<Pair title="Special">Creatures with <Link to="/spell/see_invisibility">see invisibility</Link>, <Link to="/spell/true_seeing">true seeing</Link>, or similar abilities ignore the miss chance from this ability.</Pair>
</Ability>
<h3 id="implement-illusion-base-focus-power">Base Focus Power</h3>
<Ability id="minor-figment-sp" icon={["magic-swirl"]}>
<Pair single id="minor-figment-sp">Minor Figment (Sp)</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to create a minor figment. This can function as either <Link to="/spell/ghost_sound">ghost sound</Link> or <Link to="/spell/minor_image">minor image</Link>. In either case, the effect lasts for a number of rounds equal to your occultist level.</Pair>
<Pair title="At 7th Level">The figment lasts for a number of minutes equal to your occultist level, and you can cause the figment to change once during its duration when a specified condition occurs.</Pair>
</Ability>
<h3 id="implement-illusion-focus-powers">Focus Powers</h3>
<Ability id="cloak-image-sp" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="cloak-image-sp">Cloak Image (Sp)</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to hide your appearance behind an illusion, as <Link to="/spell/disguise_self">disguise self</Link>. The effect lasts for 1 minute per occultist level you possess.</Pair>
<Pair title="At 5th Level">You can instead expend 2 points of mental focus to appear as a creature of a different type, but you must remain the same size.</Pair>
<Pair title="At 7th Level">You can expend 1 additional point of mental focus to target a willing creature other than yourself with this ability.</Pair>
</Ability>
<Ability id="color-beam-sp" icon={["smoking-finger"]}>
<Pair single id="color-beam-sp">Color Beam (Sp)</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to unleash a beam of cascading colors at any one target within 30 feet. Doing so requires a ranged touch attack. If the beam hits, the target is <Link to="/misc/blinded">blinded</Link> for 1 round if it has a number of Hit Dice equal to or lower than your occultist level. A foe with a number of Hit Dice greater than your occultist level is instead <Link to="/misc/dazzled">dazzled</Link> for 1 round. The foe can attempt a Will save to negate the effect.</Pair>
<Pair title="Special">Regardless of whether it succeeds at its save, the target is then immune to this effect for 1 day. This is a mind-affecting illusion effect.</Pair>
</Ability>
<Ability id="masquerade-sp" icon={["magic-swirl"]}>
<Pair single id="masquerade-sp">Masquerade (Sp)</Pair>
<Pair title="Prerequisites">7th-level occultist</Pair>
<Pair title="Standard Action"><p>You can expend 1 point of mental focus to take on the appearance of another creature that you touch. If the creature is not friendly to you, this requires a melee touch attack, but the target doesn't receive a saving throw to negate the effect. You gain a circumstance bonus on <Link to="/skill/disguise">Disguise</Link> checks equal to your occultist level + 10, but only to look like the creature touched. This bonus doesn't stack with the bonuses from polymorph spells or spells like <em>disguise self.</em></p>
<p>While using this ability, you can change your disguise as a <strong className="hl">standard action</strong> by touching a different creature and assuming its appearance. You can end this effect at any time. This effect lasts for 10 minutes per occultist level you possess, but you can renew the duration at any time by expending 1 additional point of mental focus.</p>
</Pair>
</Ability>
<Ability id="mirage-sp" icon={["magic-swirl"]}>
<Pair single id="mirage-sp">Mirage (Sp)</Pair>
<Pair title="Prerequisites">5th-level occultist</Pair>
<Pair title="Standard Action"><p>You can expend 1 point of mental focus to cloak an area in illusion, allowing you to change the area's appearance. You can affect up to one 5-foot-cube area for every occultist level you posses, changing the appearance in a way that seems natural to the surroundings, subject to GM discretion. You could, for example, hide a door or passageway, make a table appear to be covered in food, or even create the illusion of a pit. You can't make creatures or objects invisible with this power, but you can change the appearance of an object or create an illusion for creatures to hide behind.</p>
<p>This functions as <Link to="/spell/major_image">major image</Link>, and creatures that physically interact with the illusion in any way can attempt a Will save to see through the <em>mirage.</em></p>
</Pair>
</Ability>
<Ability id="shadow-beast-sp" icon={["magic-swirl"]}>
<Pair single id="shadow-beast-sp">Shadow Beast (Sp)</Pair>
<Pair title="Prerequisites">9th-level occultist</Pair>
<Pair title="Standard Action"><p>You can call forth one or more beasts made of shadow by expending 1 point of mental focus. This functions as <Link to="/spell/shadow_conjuration">shadow conjuration</Link>, but it can be used to duplicate only the effects of <em>summon monster</em> spells. Creatures created with this spell deal 50% of the normal damage to those that disbelieve the illusion, and their non-damaging effects have only a 50% chance of affecting disbelieving targets.</p>
<p>This can be used to duplicate any summon monster spell up to <Link to="/spell/summon_monster_v">summon monster V</Link>. Regardless of the spell duplicated, the creatures remain for 1 round per occultist level you possess.</p>
</Pair>
<Pair title="At 11th Level">This can now duplicate <Link to="/spell/summon_monster_vi">summon monster VI</Link>.</Pair>
<Pair title="At 13th Level">This can now duplicate <Link to="/spell/summon_monster_vii">summon monster VII</Link>.</Pair>
<Pair title="At 15th Level">This can now duplicate <Link to="/spell/summon_monster_viii">summon monster VIII</Link>.</Pair>
<Pair title="At 17th Level">This can now duplicate <Link to="/spell/summon_monster_ix">summon monster IX</Link>.</Pair>
</Ability>
<Ability id="unseen-sp" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="unseen-sp">Unseen (Sp)</Pair>
<Pair title="Prerequisites">3rd-level occultist</Pair>
<Pair title="Standard Action"><p>You can expend 1 point of mental focus to become invisible, as <em>invisibility.</em> This effect lasts for 1 minute per occultist level you possess.</p>
<p>You can expend 2 points of mental focus instead of 1 to use this power on a willing adjacent creature instead of yourself. You can still see creatures you make invisible with this power.</p>
</Pair>
<Pair title="Special">If the invisible creature makes an attack or otherwise takes an action that would cause the invisibility to end, you can immediately expend 1 additional point of mental focus to allow the creature to remain invisible if the creature is within 30 feet of you.</Pair>
</Ability>
<h3 id="implement-illusion-sacred-implement">Sacred Implement</h3>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 15</Link></p>
<Block size="simple">
<Row><Cell>Deity</Cell><Cell><Link to="/faith/norgorber">Norgorber</Link></Cell></Row>
<Row><Cell>Implement</Cell><Cell>mask</Cell></Row>
<Row><Cell>Opposition School</Cell><Cell>conjuration</Cell></Row></Block>
<Ability id="psychic-mirage-sp" icon={["armor-upgrade"]}>
<Pair single id="psychic-mirage-sp">Psychic Mirage (Sp)</Pair>
<Pair title="Ability">You can expend 1 point of mental focus to become invisible to a single target within 30 feet, as per <em>invisibility,</em> and remain so for 1 minute per occultist level you have. This invisibility doesn't affect other creatures. While within 30 feet of the target, you can expend 1 point of mental focus to read the target's surface thoughts as per <Link to="/spell/detect_thoughts">detect thoughts</Link>.</Pair>
</Ability>
</>};
const _necromancy = {title: "Necromancy", jsx: <><h2 id="implement-necromancy-necromancy">Necromancy</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 56</Link><br/>Implements that draw power from necromancy can control undead and harm the living.</p>
<Block size="minimal">
<Row><Cell>Implements</Cell><Cell>Bone, coin, doll, drum, robe, skull.</Cell></Row></Block>
<h3 id="implement-necromancy-resonant-power">Resonant Power</h3>
<Ability id="necromantic-focus-su" icon={["upgrade","armor-downgrade"]}>
<Pair single id="necromantic-focus-su" flavor="The implement grants its possessor greater power over the undead.">Necromantic Focus (Su)</Pair>
<Pair title="Ability"><p>Whoever possesses the implement can control an additional 2 Hit Dice of undead for every point of mental focus invested in the item (to a maximum number of Hit Dice equal to 4 &times; your occultist level). Any spellcaster who bears the implement can add it as an additional focus component for a necromancy spell he casts to create undead. If he does so, he can create an additional number of HD of undead equal to the additional HD the implement allows him to control (apply this effect after doubling the HD of undead for <Link to="/spell/desecrate">desecrate</Link>, if applicable).</p>
<p>Undead creatures take a -1 penalty on saving throws against spells cast by the bearer of this implement for every 4 points of mental focus invested in this implement.</p>
</Pair>
</Ability>
<h3 id="implement-necromancy-base-focus-power">Base Focus Power</h3>
<Ability id="mind-fear-sp" icon={["armor-downgrade"]}>
<Pair single id="mind-fear-sp">Mind Fear (Sp)</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to cause a living creature to succumb to fear. The target must be within 30 feet of you, and it can attempt a Will saving throw to negate the effect. If the target fails the save and has a number of Hit Dice less than or equal to yours, it is <Link to="/misc/frightened">frightened</Link> for 1d4 rounds. If the target fails the saving throw and has a number of Hit Dice greater than yours, it is instead <Link to="/misc/shaken">shaken</Link> for 1d4 rounds.</Pair>
<Pair title="Special">This is a mind-affecting fear effect.</Pair>
</Ability>
<h3 id="implement-necromancy-focus-powers">Focus Powers</h3>
<Ability id="flesh-rot-sp" icon={["magic-palm"]}>
<Pair single id="flesh-rot-sp">Flesh Rot (Sp)</Pair>
<Pair title="Prerequisites">3rd-level occultist</Pair>
<Pair title="Standard Action">You can make a melee touch attack and expend 1 point of mental focus to cause the flesh of a living creature to rot and wither. If the attack hits, the target takes 1d8 points of damage + 1 point per occultist level you possess. If you miss with the melee touch attack, this power is wasted with no effect.</Pair>
<Pair title="At 7th Level">The damage becomes 2d8 + your occultist level.</Pair>
<Pair title="At 11th Level">The damage increases to 3d8 + your occultist level.</Pair>
<Pair title="At 15th Level">The damage becomes 4d8 + your occultist level.</Pair>
<Pair title="At 19th Level">The damage increases to 5d8 + your occultist level.</Pair>
</Ability>
<Ability id="necromantic-servant-sp" icon={["magic-swirl"]}>
<Pair single id="necromantic-servant-sp">Necromantic Servant (Sp)</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to raise a single human <Link to="/template/skeleton">skeleton</Link> or human <Link to="/template/zombie">zombie</Link> from the ground to serve you for 10 minutes per occultist level you possess or until it is destroyed, whichever comes first. This servant has a number of hit points equal to <Link to="/misc/half">half</Link> your maximum hit point total (not adjusted for temporary hit points or other temporary increases). It also uses your base attack bonus and gains a bonus on damage rolls equal to 1/2 your occultist level.</Pair>
<Pair title="At 5th Level">Whenever the necromantic servant would be destroyed, if you are within medium range (100 feet + 10 feet per level) of the servant, you can expend 1 point of mental focus as an <strong className="hl">immediate action</strong> to cause the servant to return to full hit points.</Pair>
<Pair title="At 9th Level">You can choose to give the servant the <em>bloody</em> or <em>burning</em> simple template (if it's a skeleton) or the <em>fast</em> simple template (if it's a zombie).</Pair>
<Pair title="At 13th Level">When you take an immediate action to restore your servant, it splits into two servants. You can have a maximum number of servants in existence equal to 1/2 your occultist level.</Pair>
<Pair title="At 17th Level">The servant gains a <Link to="/main/teamwork_feat">teamwork feat</Link> of your choice.</Pair>
</Ability>
<Ability id="pain-wave-sp" icon={["armor-downgrade"]}>
<Pair single id="pain-wave-sp">Pain Wave (Sp)</Pair>
<Pair title="Prerequisites">7th-level occultist</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to unleash a wave of pain. This wave hits all creatures other than you in a 20-foot-radius <Link to="/misc/burst">burst</Link> centered on a point that you designate within 100 feet. All living creatures in this area are wracked with pain, gaining the <Link to="/misc/sickened">sickened</Link> condition for 1 round per occultist level you possess. Affected creatures can attempt a Will save to reduce the duration to just 1 round.</Pair>
<Pair title="Special">This is a mind-affecting pain effect.</Pair>
</Ability>
<Ability id="psychic-curse-sp" icon={["armor-downgrade"]}>
<Pair single id="psychic-curse-sp">Psychic Curse (Sp)</Pair>
<Pair title="Prerequisites">5th-level occultist</Pair>
<Pair title="Standard Action"><p>You can expend 1 point of mental focus to curse a living creature within 30 feet with your psychic magic. You can choose one of the following effects: <strong>memory lapse, mental block,</strong> or <strong>pain confusion.</strong></p>
<p>If you choose <strong>memory lapse,</strong> the target loses its memory of the past 1 hour per occultist level you possess.</p>
<p>If you choose <strong>mental block,</strong> you can proscribe one specific action, such as attacking with a type of weapon, casting a specific spell, or something else suitably specific (subject to the GM's discretion). The target can't take that action without first succeeding at a Will save. If it fails, it can take other actions instead. If it attempts the prohibited action again on subsequent rounds, it gains a cumulative +2 bonus on the save until it succeeds.</p>
<p>If you select <strong>pain confusion,</strong> the creature is <Link to="/misc/confused">confused</Link> for 1d4 rounds whenever it is damaged by a critical hit. The target can attempt a Will save to negate this effect. This effect lasts for 1 day per occultist level you possess.</p>
</Pair>
<Pair title="Special">A creature can't be under the effects of more than one <em>psychic curse</em> at a time. This is a mind-affecting curse effect.</Pair>
</Ability>
<Ability id="soulbound-puppet-su" icon={["stairs-goal"]}>
<Pair single id="soulbound-puppet-su">Soulbound Puppet (Su)</Pair>
<Pair title="Full-Round Action"><p>You can expend 1 point of mental focus to create a <em>soulbound puppet</em> from a bone, doll, or skull. If you use a bone or a skull, your power builds a Tiny or Small flesh puppet around it that vaguely resembles the original creature from which the bones were taken. If the implement is a doll, the doll comes to life.</p>
<p>Treat this as a <Link to="/sidekick/familiar">familiar</Link>, using your occultist level as your wizard level to determine its powers and abilities. By using a bone or skull from the appropriate creature or a doll shaped like that creature, you can select any of the <Link to="/ability/familiar">familiar</Link> choices available to a wizard. You can instead use a humanoid bone, doll, or skull, to give the <em>puppet</em> the base statistics of a <Link to="/monster/homunculus">homunculus</Link>, but without a fly speed or the poison bite or telepathic link abilities.</p>
<p>No matter the form, this creature is a construct with an alignment matching your own. You can have no more than one <em>soulbound puppet</em> active at any given time. The <em>soulbound puppet</em> remains animated for 10 minutes per occultist level you possess.</p>
</Pair>
</Ability>
<Ability id="spirit-shroud-su" icon={["armor-upgrade"]}>
<Pair single id="spirit-shroud-su">Spirit Shroud (Su)</Pair>
<Pair title="Prerequisites">3rd-level occultist</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to surround yourself with a shroud of spirit energy. You gain a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to 1d6 + your occultist level. This <em>shroud</em> lasts for 1 minute per occultist level or until the temporary hit points are expended, whichever comes first. These temporary hit points stack with those from other sources, but not with those gained through multiple uses of this ability.</Pair>
<Pair title="At 4th Level">As long as the <em>shroud</em> remains, you also gain a resistance bonus on all saving throws against death effects, fear effects, and any spells or effects that bestow <Link to="/rule/negative_levels">negative levels</Link> or deal negative energy damage (if the spells or effects allow a save). This bonus is equal to <Link to="/misc/one_fourth">one-fourth</Link> of your occultist level.</Pair>
</Ability>
<h3 id="implement-necromancy-sacred-implement">Sacred Implement</h3>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 15</Link></p>
<Block size="simple">
<Row><Cell>Deity</Cell><Cell><Link to="/faith/urgathoa">Urgathoa</Link></Cell></Row>
<Row><Cell>Implement</Cell><Cell>coin</Cell></Row>
<Row><Cell>Opposition School</Cell><Cell>evocation</Cell></Row></Block>
<Ability id="wake-su" icon={["upgrade","armor-downgrade"]}>
<Pair single id="wake-su">Wake (Su)</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to inspire fits of grief in a single creature within 30 feet that can see and hear you. You fill the target with haunting visions of the deaths of loved ones and the brevity of life, and for 1 minute, the target's emotional vulnerability grants you a circumstance bonus equal to your occultist level on <Link to="/skill/diplomacy">Diplomacy</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks attempted against the target. If this implement is used in combat, these emotions instead distract your target, leaving it <Link to="/misc/dazzled">dazzled</Link> for 1 round per occultist level you have.</Pair>
</Ability>
</>};
const _transmutation = {title: "Transmutation", jsx: <><h2 id="implement-transmutation-transmutation">Transmutation</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 57</Link><br/>Transmutation implements can alter the properties of both objects and creatures.</p>
<Block size="minimal">
<Row><Cell>Implements</Cell><Cell>Belt, boots, sandals, vest, weapon.</Cell></Row></Block>
<h3 id="implement-transmutation-resonant-power">Resonant Power</h3>
<Ability id="physical-enhancement-su" icon={["upgrade"]}>
<Pair single id="physical-enhancement-su" flavor="The implement enhances its bearer's body.">Physical Enhancement (Su)</Pair>
<Pair title="Passive Ability">When you invest mental focus in the implement, select a physical ability score. The implement grants a +2 temporary enhancement bonus to that physical ability score for every 3 points of mental focus invested in the implement (to a maximum of +2).</Pair>
<Pair title="At 6th Level">The maximum bonus becomes +4.</Pair>
<Pair title="At 12th Level">The maximum bonus increases to +6.</Pair>
<Pair title="At 18th Level">The maximum bonus becomes +8.</Pair>
</Ability>
<h3 id="implement-transmutation-base-focus-power">Base Focus Power</h3>
<Ability id="legacy-weapon-su" icon={["upgrade"]}>
<Pair single id="legacy-weapon-su">Legacy Weapon (Su)</Pair>
<Pair title="Standard Action"><p>You can expend 1 point of mental focus and touch a weapon to grant it an enhancement bonus. This bonus is equal to 1 + <Link to="/misc/one_sixth">one-sixth</Link> of your occultist level. Enhancement bonuses gained by this ability stack with those of the weapon, to a maximum of +5.</p>
<p>You can also imbue the weapon with any one weapon <Link to="/main/magic_enhancements">special ability</Link> with an equivalent enhancement bonus less than or equal to your maximum bonus by reducing the granted enhancement bonus by the appropriate amount. The item must have an enhancement bonus of at least +1 (from the item itself or from legacy weapon) to gain a weapon special ability.</p>
<p>In either case, these bonuses last for 1 minute.</p>
</Pair>
</Ability>
<h3 id="implement-transmutation-focus-powers">Focus Powers</h3>
<Ability id="mind-over-gravity-sp" icon={["stairs-goal"]}>
<Pair single id="mind-over-gravity-sp">Mind Over Gravity (Sp)</Pair>
<Pair title="Prerequisites">7th-level occultist</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to give yourself a fly speed of 60 feet with perfect maneuverability. This effect lasts for 1 minute per occultist level you possess.</Pair>
</Ability>
<Ability id="philosophers-touch-su" icon={["upgrade"]}>
<Pair single id="philosophers-touch-su">Philosopher's Touch (Su)</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus and touch a weapon, causing it to gain the properties of a special material. You can cause the weapon to be treated as cold iron or silver for the purposes of overcoming damage reduction for 1 minute per occultist level you possess.</Pair>
<Pair title="At 4th Level">You can touch an additional weapon as part of using this ability to grant that weapon the same benefit (still expending only 1 point of mental focus).</Pair>
<Pair title="At 8th Level">You can now grant benefits to 3 weapons.</Pair>
<Pair title="At 11th Level">You can cause any weapon affected by this ability to act as if it were <Link to="/eq-material/adamantine">adamantine</Link> instead (but only for the purposes of overcoming damage reduction, not for overcoming hardness).</Pair>
<Pair title="At 12th Level">You can now grant benefits to 4 weapons.</Pair>
<Pair title="At 16th Level">You can now grant benefits to 5 weapons.</Pair>
<Pair title="At 20th Level">You can now grant benefits to 6 weapons.</Pair>
</Ability>
<Ability id="quickness-sp" icon={["upgrade"]}>
<Pair single id="quickness-sp">Quickness (Sp)</Pair>
<Pair title="Prerequisites">5th-level occultist</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to grant supernatural quickness and reflexes to yourself or a willing living creature you touch. This functions as <Link to="/spell/haste">haste</Link>, but the bonus to AC and on Reflex saving throws increases to +2. This effect lasts for 1 round per occultist level you possess.</Pair>
</Ability>
<Ability id="size-alteration-sp" icon={["magic-swirl","broken-shield","magic-palm"]}>
<Pair single id="size-alteration-sp">Size Alteration (Sp)</Pair>
<Pair title="Standard Action"><p>You can expend 1 point of mental focus and touch a creature to alter its size. You can increase or decrease the creature's size by one step, as <Link to="/spell/enlarge_person">enlarge person</Link> or <Link to="/spell/reduce_person">reduce person</Link> but not limited by the creature's type.</p>
<p>If the creature is hostile toward you, using this ability requires a successful melee touch attack, and the creature can attempt a Fortitude save to negate the effect.</p>
<p>This effect lasts for 1 round per occultist level you possess. You can't use this ability on a creature that is already subject to an effect that alters its size.</p>
</Pair>
</Ability>
<Ability id="sudden-speed-sp" icon={["upgrade"]}>
<Pair single id="sudden-speed-sp">Sudden Speed (Sp)</Pair>
<Pair title="Swift Action">You can expend 1 point of mental focus to grant yourself a burst of speed. This increases your land speed by 30 feet for 1 minute. This ability does not stack with itself.</Pair>
</Ability>
<Ability id="telekinetic-mastery-sp" icon={["magic-swirl"]}>
<Pair single id="telekinetic-mastery-sp">Telekinetic Mastery (Sp)</Pair>
<Pair title="Prerequisites">9th-level occultist</Pair>
<Pair title="Standard Action">You can expend 1 point of mental focus to grant yourself telekinetic power. This functions as <Link to="/spell/telekinesis">telekinesis</Link>, except you don't need to concentrate on the effect to maintain it, and using any one of its effects is a <strong className="hl">standard action</strong>. This effect lasts for 1 round per occultist level you possess.</Pair>
</Ability>
<h3 id="implement-transmutation-sacred-implement">Sacred Implement</h3>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 15</Link></p>
<Block size="simple">
<Row><Cell>Deity</Cell><Cell><Link to="/faith/nethys">Nethys</Link></Cell></Row>
<Row><Cell>Implement</Cell><Cell>vest</Cell></Row>
<Row><Cell>Opposition School</Cell><Cell>divination</Cell></Row></Block>
<Ability id="parity-su" icon={["magic-swirl"]}>
<Pair single id="parity-su">Parity (Su)</Pair>
<Pair title="Immediate Action"><p>While casting a transmutation spell that provides you an enhancement bonus to a single mental or physical attribute, you can expend 1 point of mental focus to divide the bonus the spell provides, granting <Link to="/misc/half">half</Link> to the original attribute affected by the spell and half to a corresponding attribute. Strength corresponds with Intelligence, Dexterity corresponds with Wisdom, and Constitution corresponds with Charisma.</p>
<p>You can also use this ability to divide an ability score bonus granted by a magic item, but you must immediately expend 1 point of mental focus each day when you allocate mental focus to your implements to maintain the parity, or else the bonus immediately reverts to normal.</p>
</Pair>
</Ability>
</>};
const _mages_paraphernalia = {title: "Mage's Paraphernalia (Panoply)", jsx: <><h2 id="implement-mages_paraphernalia-mages-paraphernalia">Mage's Paraphernalia</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 26</Link><br/>This panoply is associated with the arcane arts and the masters of manipulating magic.</p>
<Block size="minimal">
<Row><Cell>Implements</Cell><Cell>Crystal ball (<Link to="/implement/divination">divination</Link>), robe (<Link to="/implement/necromancy">necromancy</Link>), and wand (<Link to="/implement/evocation">evocation</Link>).</Cell></Row></Block>
<h3 id="implement-mages_paraphernalia-resonant-power">Resonant Power</h3>
<Ability id="scholarly-knowledge-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="scholarly-knowledge-su">Scholarly Knowledge (Su)</Pair>
<Pair title="Passive Ability">The panoply grants a bonus on all <Link to="/skill/knowledge">Knowledge</Link> checks equal to <Link to="/misc/one_fourth">one-fourth</Link> of the total amount of points of mental focus invested in all of the associated implements, to a maximum bonus equal to half the occultist's level. Additionally, the bearer is treated as being trained in all Knowledge checks for the purpose of determining whether or not he can succeed at Knowledge checks with a DC higher than 10.</Pair>
<Pair title="At 5th Level">The panoply's bearer can cast <Link to="/spell/augury">augury</Link> as a spell-like ability a total number of times per day equal to the greatest number of points of mental focus stored in any one of the associated implements.</Pair>
</Ability>
<h3 id="implement-mages_paraphernalia-base-focus-power">Base Focus Power</h3>
<Ability id="arcane-inspiration-sp" icon={["spell-book"]}>
<Pair single id="arcane-inspiration-sp">Arcane Inspiration (Sp)</Pair>
<Pair title="Ability"><p>By consulting a spellbook for 15 minutes, you can expend 1 or more points of mental focus to prepare a divination, evocation, or necromancy spell from the <Link to="/main/spells_wizard">sorcerer/wizard spell list</Link> that is contained in that spellbook. You must choose an unused spell slot for the prepared spell to occupy, and the chosen spell must be of a spell level equal to or lower than that spell slot.</p>
<p>The number of points of mental focus you must expend is equal to the level of the spell slot used. You can apply metamagic effects to the prepared spell, if desired, and they increase the level of the spell slot the spell occupies as normal.</p>
<p>Once the spell is prepared, you can cast it normally, using the prepared spell slot (you cannot use any of your other spell slots to cast it, restricting you to casting it only once per use of this ability). The spell is treated as a psychic spell.</p>
</Pair>
</Ability>
<h3 id="implement-mages_paraphernalia-focus-powers">Focus Powers</h3>
<Ability id="metamagic-knowledge-su" icon={["stairs-goal"]}>
<Pair single id="metamagic-knowledge-su">Metamagic Knowledge (Su)</Pair>
<Pair title="Standard Action">You can expend 3 points of mental focus and choose a single metamagic feat you qualify for but do not know. You gain that metamagic feat until the next time you refresh your mental focus.</Pair>
</Ability>
<Ability id="metamagic-master-su" icon={["upgrade"]}>
<Pair single id="metamagic-master-su">Metamagic Master (Su)</Pair>
<Pair title="Free Action">While casting a spell, you can expend 1 or more points of mental focus to apply a metamagic feat you know to that spell without increasing the spell's casting time or the spell level of the spell slot it occupies. The number of points of mental focus you must expend to use this power is equal to the increase in spell levels the metamagic feat would normally require (minimum 1).</Pair>
</Ability>
<Ability id="spell-power-su" icon={["upgrade"]}>
<Pair single id="spell-power-su">Spell Power (Su)</Pair>
<Pair title="Free Action">While casting a spell, you can expend 2 points of mental focus to increase that spell's caster level by 2.</Pair>
<Pair title="At 12th Level">You can now spend 3 points to increase the caster level by 3.</Pair>
<Pair title="At 18th Level">You can spend 4 points to increase the caster level by 4.</Pair>
</Ability>
</>};
const _performers_accoutrements = {title: "Performer's Accoutrements (Panoply)", jsx: <><h2 id="implement-performers_accoutrements-performers-accoutrements">Performer's Accoutrements</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 27</Link><br/>This panoply is associated with those who deceive as well as those who entertain.</p>
<Block size="minimal">
<Row><Cell>Implements</Cell><Cell>Mask (<Link to="/implement/illusion">illusion</Link>) and musical instrument (<Link to="/implement/enchantment">enchantment</Link>).</Cell></Row></Block>
<h3 id="implement-performers_accoutrements-resonant-power">Resonant Power</h3>
<Ability id="actors-skill-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="actors-skill-su">Actor's Skill (Su)</Pair>
<Pair title="Passive Ability">The panoply grants a bonus on <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/disguise">Disguise</Link>, and <Link to="/skill/perform">Perform</Link> checks equal to <Link to="/misc/one_third">one-third</Link> of the total amount of points of mental focus invested in all of the associated implements, to a maximum bonus equal to half the occultist's level. The panoply also grants an equal bonus on saving throws against divination effects.</Pair>
</Ability>
<h3 id="implement-performers_accoutrements-base-focus-power">Base Focus Power</h3>
<Ability id="false-persona-su" icon={["armor-upgrade"]}>
<Pair single id="false-persona-su">False Persona (Su)</Pair>
<Pair title="Ability"><p>By spending 1 minute in meditation and expending 2 points of mental focus, you can create a psychic mask that obscures your identity. When you create this <em>false persona,</em> you choose the nature of the persona's alignment and magical auras, and can create a simple background of up to four basic facts about the persona.</p>
<p>All divination spells that reveal information about you instead reveal information based on the <em>false persona's</em> background and aura information. Additionally, attempts to scry or magically locate you work only if the creature making such attempts knows that you and your current <em>false persona</em> are the same individual. Otherwise, the spell has no effect, revealing nothing but darkness, as if you did not exist.</p>
<p>This effect lasts up to 24 hours or until you next refresh your mental focus (whichever occurs first), though you can dismiss this <em>false persona</em> at any time before then as a <strong className="hl">full-round action</strong>.</p>
</Pair>
<Pair title="Special">This effect fools only magical attempts to discern your identity or background, and has no effect on mundane means of gathering information about you.</Pair>
</Ability>
<h3 id="implement-performers_accoutrements-focus-powers">Focus Powers</h3>
<Ability id="false-confidence-sp" icon={["upgrade","armor-upgrade","armor-downgrade"]}>
<Pair single id="false-confidence-sp">False Confidence (Sp)</Pair>
<Pair title="Standard Action">By expending 1 point of mental focus, you can instill incredible, boundless confidence in a single living creature with an Intelligence score of 3 or higher within 60 feet, granting that creature a +2 morale bonus on ability checks, attack rolls, saving throws, and skill checks for 10 minutes.</Pair>
<Pair title="Move-Equivalent Action">You can shatter the feeling of confidence, leaving the target feeling hopeless and distraught. If you do, the target can immediately attempt a Will save to negate the effect, with a cumulative -1 penalty for every 2 minutes the creature benefited from the morale bonus. If the target fails this save, it takes a -2 penalty on ability checks, attack rolls, saving throws, and skill checks for the remainder of the effect's duration. If the creature then fails an ability check, attack roll, saving throw, or skill check by 10 or more while subject to this penalty, the penalty changes to -4.</Pair>
</Ability>
<Ability id="hypnotic-gaze-sp" icon={["magic-swirl"]}>
<Pair single id="hypnotic-gaze-sp">Hypnotic Gaze (Sp)</Pair>
<Pair title="Standard Action"><p>By expending 1 point of mental focus, you can hypnotize a single creature within 60 feet that can see you. The target must succeed at a Will save or become <Link to="/misc/fascinated">fascinated</Link> for as long as you maintain the effect (a move action), plus 1 additional round. Fascinated creatures take a -1 penalty on Will saving throws. For every 3 rounds that you maintain the effect, this penalty increases by 1 to a maximum penalty of -4. Anything that ends the fascination effect also ends the penalty.</p>
<p>A creature that succeeds at its saving throw to resist this effect is immune to that occultist's <em>hypnotic gaze</em> for 24 hours.</p>
</Pair>
</Ability>
<Ability id="puppet-master-sp" icon={["magic-swirl"]}>
<Pair single id="puppet-master-sp">Puppet Master (Sp)</Pair>
<Pair title="Standard Action">By expending 2 points of mental focus, you can implant a hypnotic suggestion in a creature. This functions as per <Link to="/spell/suggestion">suggestion</Link> (using your occultist level as the caster level), except that the saving throw DC is equal to 10 + <Link to="/misc/half">half</Link> your occultist level + your Intelligence modifier, and if the target fails its saving throw, you can choose to have it forget everything that occurs while it is under the spell's effects, as well as any recollection of you using this ability on it. Memories forgotten in this way can be recovered with restoration or spells or effects that can restore lost memories (such as <Link to="/spell/modify_memory">modify memory</Link>).</Pair>
</Ability>
</>};
const _saints_holy_regalia = {title: "Saint's Holy Regalia (Panoply)", jsx: <><h2 id="implement-saints_holy_regalia-saints-holy-regalia">Saint's Holy Regalia</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 27</Link><br/>This panoply is associated with devoted members of a good-aligned faith and the power of belief.</p>
<Block size="minimal">
<Row><Cell>Implements</Cell><Cell>Censer (<Link to="/implement/conjuration">conjuration</Link>) and holy symbol (<Link to="/implement/abjuration">abjuration</Link>).</Cell></Row></Block>
<h3 id="implement-saints_holy_regalia-resonant-power">Resonant Power</h3>
<Ability id="font-of-healing-su" icon={["remedy"]}>
<Pair single id="font-of-healing-su" flavor="The panoply grants you mastery over healing magic.">Font of Healing (Su)</Pair>
<Pair title="Ability">When you cast a <Link to="/main/cure_spells">cure spell</Link> (a spell with "cure" in its name), you restore 1 additional hit point for every 3 points of total mental focus invested in all of the associated implements, to a maximum bonus equal to half the occultist's level. This doesn't apply to damage dealt to undead with the spell.</Pair>
</Ability>
<h3 id="implement-saints_holy_regalia-base-focus-power">Base Focus Power</h3>
<Ability id="restoring-touch-sp" icon={["remedy"]}>
<Pair single id="restoring-touch-sp">Restoring Touch (Sp)</Pair>
<Pair title="Standard Action">You can expend 2 points of mental focus to cure a living creature you touch of temporary <Link to="/rule/ability_damage">ability damage</Link>. You cure an amount of temporary ability damage to a single ability score equal to <Link to="/misc/one_third">one-third</Link> of you occultist level.</Pair>
<Pair title="At 10th Level">You can expend an additional point of mental focus to instead restore the same amount of permanent ability drain.</Pair>
</Ability>
<h3 id="implement-saints_holy_regalia-focus-powers">Focus Powers</h3>
<Ability id="guardian-aura-sp" icon={["aura","armor-upgrade","shield-reflect","broken-shield"]}>
<Pair single id="guardian-aura-sp">Guardian Aura (Sp)</Pair>
<Pair title="Full-Round Action">You can expend 3 points of mental focus to emit a 20-foot-radius aura of protection that lasts for 1 minute. You and your allies within the aura gain a sacred bonus to AC equal to <Link to="/misc/one_fourth">one-fourth</Link> of your occultist level (minimum +1). Your speed is reduced to 10 feet while this power is active, but you can dismiss it as a <strong className="hl">free action</strong>.</Pair>
</Ability>
<Ability id="martyrs-benediction-sp" icon={["remedy"]}>
<Pair single id="martyrs-benediction-sp">Martyr's Benediction (Sp)</Pair>
<Pair title="Immediate Action"><p>When you would be reduced to fewer than 0 hit points or killed (including by effects that kill without dealing damage, such as <Link to="/spell/phantasmal_killer">phantasmal killer</Link> and <Link to="/spell/power_word_kill">power word kill</Link>), you can expend 1 point of mental focus to restore a number of hit points equal to 1d8 + your occultist level to all allies (other than you) within 30 feet.</p>
<p>In addition, if any healed ally is under a fear effect, she can immediately attempt a new saving throw to end it.</p>
</Pair>
</Ability>
<Ability id="rebuke-anathema-sp" icon={["armor-upgrade"]}>
<Pair single id="rebuke-anathema-sp">Rebuke Anathema (Sp)</Pair>
<Pair title="Standard Action">You can present the holy symbol used as the panoply's associated implement and expend 2 points of mental focus to keep a single creature at bay. Your alignment must be within one step of that of the holy symbol's deity, and the creature's alignment must be more than one step away from both your alignment and the deity's alignment. If neither is the case, this power is ineffective and the spent mental focus is wasted. If the target creature fails a Will save, it can't move toward you for a number of rounds equal to your occultist level.</Pair>
</Ability>
</>};
const _trappings_of_the_warrior = {title: "Trappings of the Warrior (Panoply)", jsx: <><h2 id="implement-trappings_of_the_warrior-trappings-of-the-warrior">Trappings of the Warrior</h2>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 28</Link><br/>This panoply is associated with brave and stalwart warriors, martial skill, and the defense of one's allies.</p>
<Block size="minimal">
<Row><Cell>Implements</Cell><Cell>Shield (<Link to="/implement/abjuration">abjuration</Link>) and weapon (<Link to="/implement/transmutation">transmutation</Link>).</Cell></Row></Block>
<h3 id="implement-trappings_of_the_warrior-resonant-power">Resonant Power</h3>
<Ability id="martial-skill-ex" icon={["upgrade"]}>
<Pair single id="martial-skill-ex">Martial Skill (Ex)</Pair>
<Pair title="Passive Ability">When wielding the weapon used as the panoply's associated implement, you treat your base attack bonus as though it were 1 point higher for every 4 points of total mental focus invested in all of the associated implements, to a maximum base attack bonus equal to your occultist level.</Pair>
<Pair title="Special">This increase can grant you additional attacks when using the full attack action (for example, a 12th-level occultist with 12 points of mental focus invested among the associated implements would be treated as having a base attack bonus of +11, with iterative attacks at a base attack bonus of +6 and +1).</Pair>
</Ability>
<h3 id="implement-trappings_of_the_warrior-base-focus-power">Base Focus Power</h3>
<Ability id="combat-trick-ex" icon={["stairs-goal"]}>
<Pair single id="combat-trick-ex">Combat Trick (Ex)</Pair>
<Pair title="Move-Equivalent Action">You can expend 3 points of mental focus to gain a single <Link to="/main/combat_feat">combat feat</Link> for which you qualify. This benefit lasts for 1 minute.</Pair>
</Ability>
<h3 id="implement-trappings_of_the_warrior-focus-powers">Focus Powers</h3>
<Ability id="counterstrike-ex" icon={["mailed-fist"]}>
<Pair single id="counterstrike-ex">Counterstrike (Ex)</Pair>
<Pair title="Immediate Action">When you are damaged by a melee attack, you can expend 1 point of mental focus to immediately make a single attack at your highest base attack bonus against the creature that hit you, provided that you threaten that creature. If the attack hits, you gain a bonus on the damage roll equal to 1/3 your occultist level (rounded down, minimum +1). This attack counts as an attack of opportunity.</Pair>
</Ability>
<Ability id="shield-ally-ex" icon={["shield-reflect"]}>
<Pair single id="shield-ally-ex">Shield Ally (Ex)</Pair>
<Pair title="Immediate Action">When an adjacent ally is the target of a spell or attack, you can expend 2 points of mental focus to redirect that spell or attack to yourself instead. You must declare that you are using this ability before the result of any attack roll is known or before any saving throws are attempted.</Pair>
</Ability>
<Ability id="warriors-resilience-su" icon={["remedy"]}>
<Pair single id="warriors-resilience-su">Warrior's Resilience (Su)</Pair>
<Pair title="Immediate Action">When you would be reduced to fewer than 0 hit points, you can expend 1 or more points of mental focus to remain at 0 hit points instead. Using this focus power costs 1 point of mental focus for every 5 points of damage below 0 that you would otherwise be reduced to (rounded up, minimum 1 point of mental focus). This has no effect on anything that would kill you without reducing your hit points below 0, such as a failed saving throw against a death effect.</Pair>
</Ability>
</>};
export default {not_found:_not_found,abjuration:_abjuration,conjuration:_conjuration,divination:_divination,enchantment:_enchantment,evocation:_evocation,illusion:_illusion,necromancy:_necromancy,transmutation:_transmutation,mages_paraphernalia:_mages_paraphernalia,performers_accoutrements:_performers_accoutrements,saints_holy_regalia:_saints_holy_regalia,trappings_of_the_warrior:_trappings_of_the_warrior}