import {IonRippleEffect,IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import SpellInfo from '../../components/SpellInfo';
const _stunning_barrier = {title: "Stunning Barrier", jsx: <><h2 id="spell-stunning_barrier-stunning-barrier">Stunning Barrier</h2>
<SpellInfo id="1" source="Advanced Class Guide/194" school="abjur" arc={1} clr={1} inq={1} orc={1} pal={1} psy={1} sor={1} war={1} wiz={1} ct="1 standard action" comp="V, S" rPers target="you" dur="1 round/level or until discharged" save="none and Will negates (see text)" resist="no and yes (see text)" />
<p>You are closely surrounded by a barely visible magical field. The field provides a +1 deflection bonus to AC and a +1 resistance bonus on saves. Any creature that strikes you with a melee attack is stunned for 1 round (Will negates). Once the field has stunned an opponent, the spell is discharged.</p>
<h3 id="spell-stunning_barrier-greater-stunning-barrier">Greater Stunning Barrier</h3>
<SpellInfo id="2" source="Advanced Class Guide/195" school="abjur" arc={3} clr={3} inq={3} orc={3} pal={3} psy={3} sor={3} war={3} wiz={3} ct="1 standard action" comp="V, S" rPers target="you" dur="1 round/level or until discharged" save="none and Will negates (see text)" resist="no and yes (see text)" />
<p>This spell functions as stunning barrier, except as noted above, and it provides a +2 bonus to AC and on saving throws. It is not discharged until it has stunned a number of creatures equal to your caster level.</p>
</>};
const _stunning_finale = {title: "Stunning Finale", jsx: <><h2 id="spell-stunning_finale-stunning-finale">Stunning Finale</h2>
<SpellInfo id="1" source="Advanced Player's Guide/247" school="ench" subschools={["comp"]} descriptors={["mind"]} brd={5} skd={5} ct="1 standard action" comp="V, S" rClose targets="up to 3 creatures, no two of which can be more than 30 ft. apart" dur="1 round" save="Fortitude partial, see text" resist="yes" />
<p>You must have a bardic performance in effect to cast this spell. With a flourish, you immediately end your bardic performance, assaulting the senses of the targets with your finale. Each target is stunned for 1 round. On a successful saving throw, a target is staggered for 1 round.</p>
</>};
const _sturdy_tree_fort = {title: "Sturdy Tree Fort", jsx: <><h2 id="spell-sturdy_tree_fort-sturdy-tree-fort">Sturdy Tree Fort</h2>
<SpellInfo id="1" source="Ultimate Wilderness/236" school="trans" drd={5} hnt={4} rgr={4} ct="1 minute" comp="V, S, F (a nail, a rope, and a short wooden plank)" rTouch effect="one large tree and a sturdy wooden house" dur="1 hour/level (D)" save="none" resist="no" />
<p>You cause a large tree to grow in the 5-foot square you touch. The tree has 1 foot of thickness for every 4 caster levels you have, and it can grow to any height you designate, up to 5 feet high per caster level you have. If there is a ceiling or other barrier overhead, the maximum height of the tree cannot exceed the space available. At any point along the tree's height, you can create a sturdy wooden building that fills one 10-foot cube for every 4 caster levels you have. All portions of the structure must be adjacent to the trunk of the tree (or can have the tree trunk extend up through their spaces), but otherwise these cubes need not be contiguous. If you place the cubes so that they are contiguous, the buildings merge together, complete with ladders connecting different vertical levels. The fort is magically supported, but if the tree it is attached to is destroyed, the structure is destroyed as well (the tree has hardness 5 and 20 hp per caster level you have).</p>
<p>Each building you create has shuttered arrow slits on its walls and in the floor, granting those within the structure improved cover against attacks from outside while the arrow slits are open and total cover when they are closed. Each cube within the fort is equivalent to a secure shelter, other than the size and its wooded construction material (hardness 5). When you cast sturdy tree fort, you can designate a number of creatures equal to your caster level. Designated creatures gain a +10 bonus on Climb checks and are not denied their Dexterity bonuses while climbing on the fort's structure, as they find handholds and stable footholds easily on the tree and its buildings.</p>
<p>You cannot cast this spell in an area of worked stone, though you can cast it in natural surroundings that would not normally support the growth of a large tree, such as a cavern, desert, or glacier. If you cast this spell in a forest, jungle, or similar heavily treed terrain, the fort is camouflaged as long as its doors and windows remain closed (or even if they are open, as long as those within remain quiet and take no violent actions), requiring a successful DC 25 Perception check or Survival check to notice its presence.</p>
</>};
const _subjective_reality = {title: "Subjective Reality", jsx: <><h2 id="spell-subjective_reality-subjective-reality">Subjective Reality</h2>
<SpellInfo id="1" source="Occult Origins/29" school="ill" subschools={["phan"]} descriptors={["mind"]} arc={7} brd={6} med={5} mes={5} psy={6} skd={6} sor={7} wiz={7} ct="1 standard action" comp="V" rPers target="you" dur="1 round/level (D)" save="none" resist="no" />
<p>Choose one object, creature, or force you can see within long range (400 ft. + 40 ft./level). You alter your perceptions to become convinced the target is an illusion. For you, the target becomes transparent and does not create sound or smell. Until the spell ends, you can move through the target unimpeded and the target can move through you. The target's nonmagical attacks cannot harm you, and the target's magical attacks deal half damage to you. The target's non-damaging magical abilities have a 50% chance not to affect you, and you are immune to all its sonic, language-dependent, and scent-based attacks. However, your attacks deal no damage to the target, and your magical abilities do not affect the target at all. You or the target can affect each other normally through intermediaries. For instance, while the target would be immune to the direct effects of your earthquake spell, if the spell caused a room's ceiling to collapse, the target would not be immune to the effects of the collapse.</p>
</>};
const _submerge_ship = {title: "Submerge Ship", jsx: <><h2 id="spell-submerge_ship-submerge-ship">Submerge Ship</h2>
<SpellInfo id="1" source="Pathfinder #56: Raiders of the Fever Sea/70" school="trans" arc={7} clr={7} orc={7} sor={7} wiz={7} ct="1 minute" comp="V, S, M/DF (a glass marble or piece of soap)" rTouch target="1 sailing vessel" dur="10 minutes/level" save="Will negates (harmless)" resist="no" />
<p>When this spell is cast upon a vessel, the ship is surrounded by a protective bubble of constantly replenishing, breathable air and sinks beneath the waves. For the duration of the spell, the ship can travel beneath the water as easily as it did above. While under the effects of this spell, the ship has magical propulsion that gives it a maximum speed of 120 feet and an acceleration of 30 feet (see <Link to="/rule/ship_to_ship_combat">ship-to-ship combat</Link> for details). The ship's pilot uses the normal sailing skill to control the ship while under this spell's effects, and can command it to dive and ascend as part of the vessel's normal movement. Despite the magical propulsion, the ship still requires its crew to perform its normal functions.</p>
<p>The spell protects the ship and all aboard from the dangers of drowning and pressure, but not from damage from outside obstacles or creatures. The bubble cannot be used offensively and prevents an affected ship from rising into a space that won't accommodate it (like a sea cave too small to contain it or under another vessel). Creatures can enter or leave the bubble at will, but those outside the sphere cannot be forced inside against their will, the sphere proving substantial enough that such creatures may choose whether to enter or to slip away along its sides. At the end of the spell's duration the bubble pops, causing a ship still underwater at that time to gain the sinking condition. This spell has no effect if cast upon a ship in water that cannot cover the vessel entirely.</p>
<p>Although largely beneficial, this spell can be cast on a ship whose pilot does not want to submerge her vessel. The ship itself uses its Will saving throw to resist this effect.</p>
</>};
const _substitute_trail = {title: "Substitute Trail", jsx: <><h2 id="spell-substitute_trail-substitute-trail">Substitute Trail</h2>
<SpellInfo id="1" source="Inner Sea Intrigue/62" school="trans" drd={4} hnt={4} rgr={4} ct="1 standard action" comp="V, S" r="unlimited" target="1 creature/level; see text" dur="1 day/level (D)" save="none" resist="no" />
<p>This spell can affect any creatures with which you interacted in the last 24 hours. You alter the trails left by the chosen creatures, making it appear that another creature with which you are familiar left the trail instead (you must have met the creature with which you are familiar). If a tracker exceeds the DC of the skill check to follow the trail by an amount equal to your caster level, the tracker recognizes that the trail has been manipulated by this spell, although it cannot see the trail's true nature unless it uses magical means, such as true seeing.</p>
</>};
const _suffocation = {title: "Suffocation", jsx: <><h2 id="spell-suffocation-suffocation">Suffocation</h2>
<SpellInfo id="1" source="Advanced Player's Guide/248" school="necro" arc={5} occ={5} psy={5} sor={5} spr={5} wit={5} wiz={5} ct="1 standard action" comp="V, S, M (a vial containing a bit of the caster's breath)" rClose target="one living creature" dur="3 rounds" save="Fortitude partial" resist="yes" />
<p>This spell extracts the air from the target's lungs, causing swift suffocation. The target can attempt to resist this spell's effects with a Fortitude save - if he succeeds, he is merely staggered for 1 round as he gasps for breath. If the target fails, he immediately begins to suffocate. On the target's next turn, he falls unconscious and is reduced to 0 hit points. One round later, the target drops to -1 hit points and is dying. One round after that, the target dies. Each round, the target can delay that round's effects from occurring by making a successful Fortitude save, but the spell effect continues for 3 rounds, and each time a target fails his Fortitude save, he moves one step further along the track to suffocation. This spell only affects living creatures that must breathe. It is impossible to defeat the effects of this spell by simply holding one's breath - if the victim fails the initial saving throw, the air in his lungs is extracted.</p>
<h3 id="spell-suffocation-mass-suffocation">Mass Suffocation</h3>
<SpellInfo id="2" source="Advanced Player's Guide/248" school="necro" arc={9} psy={9} sor={9} wit={9} wiz={9} ct="1 standard action" comp="V, S, M (a vial containing a bit of the caster's breath)" rClose targets="one living creature/2 levels (no two of which may be more than 30 feet apart)" dur="1 round/level" save="Fortitude partial" resist="yes" />
<p>This spell functions as suffocation except as noted above. Note that the duration of this spell is much longer, forcing those suffering from the effect to make far more Fortitude saves to stave off eventual suffocation.</p>
</>};
const _suggestion = {hasJL:true,title: "Suggestion", jsx: <><div className="jumpList" id="spell-suggestion-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="spell-suggestion-mythic_suggestion">Mythic Suggestion</InnerLink></li><li><InnerLink toTop to="spell-suggestion-contagious-suggestion">Contagious Suggestion</InnerLink></li><li><InnerLink toTop to="spell-suggestion-mass-suggestion">Mass Suggestion</InnerLink></li><li><InnerLink toTop to="spell-suggestion-triggered-suggestion">Triggered Suggestion</InnerLink></li></ul></div><h2 id="spell-suggestion-suggestion">Suggestion</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/350" school="ench" subschools={["comp"]} descriptors={["lang","mind"]} arc={3} brd={2} med={2} mes={2} occ={3} psy={2} skd={2} sor={3} wit={3} wiz={3} ct="1 standard action" comp="V, M (a snake's tongue and a honeycomb)" rClose target="one living creature" dur="1 hour/level or until completed" save="Will negates" resist="yes" />
<p>You influence the actions of the target creature by suggesting a course of activity (limited to a sentence or two). The suggestion must be worded in such a manner as to make the activity sound reasonable. Asking the creature to do some obviously harmful act automatically negates the effect of the spell.</p>
<p>The suggested course of activity can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do. You can instead specify conditions that will trigger a special activity during the duration. If the condition is not met before the spell duration expires, the activity is not performed.</p>
<p>A very reasonable suggestion causes the save to be made with a penalty (such as -1 or -2).</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-suggestion--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col" id="spell-suggestion-mythic_suggestion" data-hash-target>Mythic Suggestion</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 109</Link></p>
<p>Mythic suggestion loses the language-dependent descriptor, and can target one or more living creatures in a 10-foot-radius burst.</p>
</td></tr></tbody></table></ScrollContainer></div><h3 id="spell-suggestion-contagious-suggestion" data-hash-target>Contagious Suggestion</h3>
<SpellInfo id="2" source="Blood of the Beast/14" school="ench" subschools={["comp"]} descriptors={["lang","mind"]} arc={5} brd={4} med={4} mes={4} occ={5} psy={5} skd={4} sor={5} wit={5} wiz={5} ct="1 standard action" comp="V, S" rClose target="one living creature" dur="1 hour/level or until completed" />
<p>This spell functions as per suggestion, except the target can pass on the enchantment to other targets. The target is compelled to communicate your suggestion to another creature, forcing the new target to attempt a saving throw as if it were the initial target. If a secondary target successfully saves, the suggestion effect on the initial target isn't negated. If a secondary target fails, it is placed under the same compulsion as the initial target and can further spread the suggestion. This spell can affect a total number of Hit Dice of creatures equal to your caster level. Creatures that save against this spell cannot be affected by that particular casting of contagious suggestion for 24 hours.</p>
<h3 id="spell-suggestion-mass-suggestion" data-hash-target>Mass Suggestion</h3>
<SpellInfo id="3" source="PRPG Core Rulebook/350" school="ench" subschools={["comp"]} descriptors={["lang","mind"]} arc={6} brd={5} mes={5} occ={5} psy={5} skd={5} sor={6} wit={6} wiz={6} ct="1 standard action" comp="V, M (a snake's tongue and a honeycomb)" rMed targets="one creature/level, no two of which can be more than 30 ft. apart" dur="1 hour/level or until completed" save="Will negates" resist="yes" />
<p>This spell functions like suggestion, except that it can affect more creatures. The same suggestion applies to all these creatures.</p>
<h3 id="spell-suggestion-triggered-suggestion" data-hash-target>Triggered Suggestion</h3>
<SpellInfo id="4" source="Advanced Class Guide/197" school="ench" subschools={["comp"]} descriptors={["lang","mind"]} arc={4} brd={3} mes={3} psy={4} skd={3} sor={4} wit={4} wiz={4} ct="1 standard action" comp="V, M (a snake's tongue and a honeycomb)" rClose target="one living creature" dur="1 day/level or until completed" save="Will negates" resist="yes" />
<p>This spell functions as suggestion, except you can use it only to specify a condition that triggers a special activity, and the subject does not remember that you made the suggestion. For example, you could use triggered suggestion on a palace guard to make him attack the king the next time he and the king are alone, and the guard would not remember the suggestion to do so until the trigger occurred.</p>
</>};
const _summon_accuser = {title: "Summon Accuser", jsx: <><h2 id="spell-summon_accuser-summon-accuser">Summon Accuser</h2>
<SpellInfo id="1" source="Rival Guide/59" school="conj" subschools={["sum"]} descriptors={["evil","lawful"]} arc={4} brd={4} clr={4} orc={4} skd={4} sor={4} sum={4} usm={4} war={4} wit={4} wiz={4} ct="1 round" comp="V, S, F/DF (chunk of rotten meat)" rClose effect="1 accuser devil" dur="10 minutes/level" save="none" resist="no" />
<p>This spell summons a single <Link to="/monster/accuser_devil">accuser devil</Link> from Hell to do the spellcaster's bidding, similar to how summon monster spells function. Accuser devils, known to diabolists as zebubs, are hideous flying creatures with the torso of a plump human infant and the body and wings of an enormous fly. They make excellent spies, for they have the ability to grant visions of what they have witnessed to others - the Queen's Hands sometimes use summoned zebubs to observe suspects from afar.</p>
</>};
const _summon_ancestral_guardian = {title: "Summon Ancestral Guardian", jsx: <><h2 id="spell-summon_ancestral_guardian-summon-ancestral-guardian">Summon Ancestral Guardian</h2>
<SpellInfo id="1" source="Dwarves of Golarion/24" school="conj" subschools={["sum"]} brd={3} clr={3} orc={3} skd={3} war={3} ct="1 standard action" comp="V, S, F/DF (stone or metal image of your ancestor)" rMed effect="two summoned ancestor spirits" dur="1 round/level (D)" save="none" resist="yes" />
<p>You call the spirits of two ancestors to manifest in the mortal world and attack your enemies. Each appears as a transparent image of a powerful, wise dwarf armed with a traditional dwarven weapon of your choice. These spirits move and attack at your direction, each having the abilities of a spiritual weapon, except they can attack different targets and deal physical damage (bludgeoning, piercing, or slashing, according to the weapon the spirit wields) instead of force damage. Like creatures conjured with a summon monster spell, your ancestors are not harmed if these manifestations are destroyed.</p>
</>};
const _summon_barghest_1 = {title: "Summon Barghest I", jsx: <><h2 id="spell-summon_barghest_1-summon-barghest-i">Summon Barghest I</h2>
<SpellInfo id="1" source="Pathfinder Comics #10/26" school="conj" subschools={["sum"]} descriptors={["evil"]} clr={4} orc={4} war={4} ct="1 round" comp="V, S, DF" rClose effect="one summoned barghest" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell summons a barghest from the Abyssal realm of Basalfeyst to serve the caster, functioning similarly to summon monster save that it may only be used to summon a single barghest. Although the summoned barghest does not have the feed ability, if you are at least caster level 9th the summoned barghest appears with 2 growth points (and with it the appropriate bonuses to its attacks, CMB, saves, skill checks, hit points, and caster level).</p>
<h3 id="spell-summon_barghest_1-summon-barghest-ii">Summon Barghest II</h3>
<SpellInfo id="2" source="Pathfinder Comics #10/27" school="conj" subschools={["sum"]} clr={6} orc={6} war={6} ct="1 round" comp="V, S, DF" rClose effect="one summoned greater barghest or 1d3 summoned barghest" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon barghest I, save that it can summon 1 greater barghest or 1d3 normal barghests with 2 growth points each.</p>
</>};
const _summon_cacodaemon = {title: "Summon Cacodaemon", jsx: <><h2 id="spell-summon_cacodaemon-summon-cacodaemon">Summon Cacodaemon</h2>
<SpellInfo id="1" source="Book of the Damned - Volume 3: Horsemen of the Apocalypse/39" school="conj" subschools={["sum"]} descriptors={["evil"]} arc={2} clr={2} orc={2} sor={2} sum={2} usm={2} war={2} wit={2} wiz={2} ct="1 round" comp="V, S, F (a silver hook)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster, except it summons a single cacodaemon.</p>
<h3 id="spell-summon_cacodaemon-greater-summon-cacodaemon">Greater Summon Cacodaemon</h3>
<SpellInfo id="2" source="Book of the Damned - Volume 3: Horsemen of the Apocalypse/39" school="conj" subschools={["sum"]} descriptors={["evil"]} arc={4} clr={4} orc={4} sor={4} sum={3} usm={3} war={4} wit={4} wiz={4} ct="1 round" comp="V, S, F (a silver hook)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon cacodaemon, except that it summons 1d4+1 cacodaemons.</p>
</>};
const _summon_ceustodaemon = {title: "Summon Ceustodaemon", jsx: <><h2 id="spell-summon_ceustodaemon-summon-ceustodaemon">Summon Ceustodaemon</h2>
<SpellInfo id="1" source="Book of the Damned - Volume 3: Horsemen of the Apocalypse/39" school="conj" subschools={["sum"]} descriptors={["evil"]} arc={5} clr={5} orc={5} sor={5} sum={4} usm={4} war={5} wit={5} wiz={5} ct="1 round" comp="V, S, F (ashes of a dead animal)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster, except it summons a single ceustodaemon.</p>
</>};
const _summon_derghodaemon = {title: "Summon Derghodaemon", jsx: <><h2 id="spell-summon_derghodaemon-summon-derghodaemon">Summon Derghodaemon</h2>
<SpellInfo id="1" source="Book of the Damned - Volume 3: Horsemen of the Apocalypse/39" school="conj" subschools={["sum"]} descriptors={["evil"]} arc={9} clr={9} orc={9} sor={9} wit={9} wiz={9} ct="1 round" comp="V, S, F (a handful of bug carapaces)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster, except it summons a single derghodaemon.</p>
</>};
const _summon_eidolon = {title: "Summon Eidolon", jsx: <><h2 id="spell-summon_eidolon-summon-eidolon">Summon Eidolon</h2>
<SpellInfo id="1" source="Advanced Player's Guide/248" school="conj" subschools={["sum"]} sum={2} usm={2} ct="1 round" comp="V, S, M (a silver coin)" rClose target="one eidolon" dur="1 minute/level (D)" save="none" resist="no" />
<p>You open a rift between dimensions that summons your eidolon. Treat this as if you had summoned your eidolon normally, except that it only remains with you for the duration of this spell. While summoned in this way, your eidolon cannot touch any creature warded by <Link to="/spell/protection_from_evil">protection from evil</Link> or a similar effect and your eidolon can be sent back to its home plane by <Link to="/spell/dispel_magic">dispel magic</Link>.</p>
<p>If you cast this spell while your eidolon is already on your plane, this spell has no effect. This spell allows you to summon your eidolon even if it has been returned to its home plane due to damage.</p>
</>};
const _summon_elder_worm = {title: "Summon Elder Worm", jsx: <><h2 id="spell-summon_elder_worm-summon-elder-worm">Summon Elder Worm</h2>
<SpellInfo id="1" source="Ultimate Magic/240" school="conj" subschools={["sum"]} drd={9} ct="1 round" comp="V, S" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions as <Link to="/spell/summon_natures_ally_viii">summon nature's ally VIII</Link>, except you summon a purple worm with the giant creature simple template.</p>
</>};
const _summon_elemental_steed = {title: "Summon Elemental Steed", jsx: <><h2 id="spell-summon_elemental_steed-summon-elemental-steed">Summon Elemental Steed</h2>
<SpellInfo id="1" source="Faction Guide/61" school={<><Link to="/spelldef/conjuration">conjuration</Link> (<Link to="/spelldef/summoning">summoning</Link>) [see text]</>} drd={9} ct="10 minutes" comp="V, S, DF" rClose effect="one chariot" dur="10 minutes/level (D)" save="none" resist="no" />
<p>You summon a greater elemental (air, earth, fire, or water) bound in the form of a mighty chariot that moves at your command and can carry up to nine Medium creatures. Passengers inside are not harmed by the elemental, and can see, breathe, and act normally, suffering no environmental damage even when the elemental chariot is flying, underwater, burrowing, or using earth glide. Passengers are not otherwise protected, though the elemental chariot does provide cover like a normal chariot.</p>
<p>The elemental keeps all of its statistics and abilities, except it loses its slam attacks and gains a trample attack.</p>
<p>When you use a summoning spell to summon an air, earth, fire, or water creature, it is a spell of that type.</p>
<p>This spell is almost exclusively used by the Green Faith.</p>
</>};
const _summon_erodaemon = {title: "Summon Erodaemon", jsx: <><h2 id="spell-summon_erodaemon-summon-erodaemon">Summon Erodaemon</h2>
<SpellInfo id="1" source="Book of the Damned - Volume 3: Horsemen of the Apocalypse/39" school="conj" subschools={["sum"]} descriptors={["evil"]} arc={8} clr={8} orc={8} sor={8} sum={6} usm={6} wit={8} wiz={8} ct="1 round" comp="V, S, F (a bent or tarnished wedding band)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster, except it summons a single erodaemon.</p>
</>};
const _summon_flight_of_eagles = {title: "Summon Flight of Eagles", jsx: <><h2 id="spell-summon_flight_of_eagles-summon-flight-of-eagles">Summon Flight of Eagles</h2>
<SpellInfo id="1" source="Adventurer's Guide/77;Andoran, Spirit of Liberty/27" school="conj" subschools={["sum"]} arc={6} bld={4} drd={6} hnt={4} rgr={4} sha={6} sor={6} sum={6} usm={6} wit={6} wiz={6} ct="1 round" comp="V, S, F (a gold feather worth 100 gp)" rClose effect="1d4+1 summoned creatures" dur="10 minutes/level" save="none" resist="no" />
<p>You summon 1d4+1 giant eagles to serve as you designate. The summoned birds can fight if you wish, but can also serve as mounts.</p>
</>};
const _summon_froghemoth = {title: "Summon Froghemoth", jsx: <><h2 id="spell-summon_froghemoth-summon-froghemoth">Summon Froghemoth</h2>
<SpellInfo id="1" source="Ultimate Magic/240" school="conj" subschools={["sum"]} drd={9} ct="1 round" comp="V, S" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions as <Link to="/spell/summon_natures_ally_ix">summon nature's ally IX</Link>, except you summon a froghemoth.</p>
</>};
const _summon_genie_lesser = {hasJL:true,title: "Lesser Summon Genie", jsx: <><div className="jumpList" id="spell-summon_genie_lesser-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="spell-summon_genie_lesser-summon-genie">Summon Genie</InnerLink></li><li><InnerLink toTop to="spell-summon_genie_lesser-greater-summon-genie">Greater Summon Genie</InnerLink></li></ul></div><h2 id="spell-summon_genie_lesser-lesser-summon-genie">Lesser Summon Genie</h2>
<SpellInfo id="1" source="People of the Sands/11" school="conj" subschools={["sum"]} arc={4} clr={4} orc={4} sor={4} sum={3} usm={3} war={4} wit={4} wiz={4} ct="1 round" comp="V, S, F/DF (an oil lamp worth at least 50 gp)" rClose effect="one summoned genie" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like <Link to="/spell/summon_monster_i">summon monster I</Link>, except you can summon one janni.</p>
<h3 id="spell-summon_genie_lesser-summon-genie" data-hash-target>Summon Genie</h3>
<SpellInfo id="2" source="People of the Sands/11" school="conj" subschools={["sum"]} arc={5} clr={5} orc={5} sor={5} sum={4} usm={4} war={5} wit={5} wiz={5} ct="1 round" comp="V, S, F/DF (an oil lamp worth at least 50 gp)" rClose effect="one summoned genie" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like lesser summon genie, except you can summon one djnni or 1d3 jann.</p>
<h3 id="spell-summon_genie_lesser-greater-summon-genie" data-hash-target>Greater Summon Genie</h3>
<SpellInfo id="3" source="People of the Sands/11" school="conj" subschools={["sum"]} arc={6} clr={6} orc={6} sor={6} sum={5} usm={5} war={6} wit={6} wiz={6} ct="1 round" comp="V, S, F/DF (an oil lamp worth at least 50 gp)" rClose effect="one summoned genie" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like lesser summon genie, except you can summon one shaitan, 1d3 djnn or 1d4+1 jann.</p>
</>};
const _summon_giant_ally_1 = {hasJL:true,title: "Summon Giant Ally I", jsx: <><div className="jumpList" id="spell-summon_giant_ally_1-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="spell-summon_giant_ally_1-summon-giant-ally-ii">Summon Giant Ally II</InnerLink></li><li><InnerLink toTop to="spell-summon_giant_ally_1-summon-giant-ally-iii">Summon Giant Ally III</InnerLink></li></ul></div><h2 id="spell-summon_giant_ally_1-summon-giant-ally-i">Summon Giant Ally I</h2>
<SpellInfo id="1" source="Inner Sea Races/223" school={<><Link to="/spelldef/conjuration">conjuration</Link> (<Link to="/spelldef/summoning">summoning</Link>) [see text]</>} drd={6} hnt={6} ct="1 standard action" comp="V, S, F/DF (bit of cloth from a giant's bag)" rClose effect="one or more giants" dur="1 round/level (D)" save="none" resist="no" />
<blockquote>
<p><em>The following spells are available to the indicated race or ethnicity: Kellid</em></p>
</blockquote>
<p>This spell functions as <Link to="/spell/summon_natures_ally_vi">summon nature's ally VI</Link>, except its casting time is shorter and you can summon one cave, hill, marsh, river, slag, stone, or wood giant.</p>
<h3 id="spell-summon_giant_ally_1-summon-giant-ally-ii" data-hash-target>Summon Giant Ally II</h3>
<SpellInfo id="2" source="Inner Sea Races/223" school={<><Link to="/spelldef/conjuration">conjuration</Link> (<Link to="/spelldef/summoning">summoning</Link>) [see text]</>} drd={7} ct="1 standard action" comp="V, S, F/DF (bit of cloth from a giant's bag)" rClose effect="one or more giants" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions as summon giant ally I, except you can summon one desert, fire, frost, or jungle giant or 1d3 cave, hill, marsh, river, slag, stone, or wood giants.</p>
<h3 id="spell-summon_giant_ally_1-summon-giant-ally-iii" data-hash-target>Summon Giant Ally III</h3>
<SpellInfo id="3" source="Inner Sea Races/223" school={<><Link to="/spelldef/conjuration">conjuration</Link> (<Link to="/spelldef/summoning">summoning</Link>) [see text]</>} drd={8} ct="1 standard action" comp="V, S, F/DF (bit of cloth from a giant's bag)" rClose effect="one or more giants" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions as summon giant ally I, except you can summon one ash or cloud giant; 1d3 desert, fire, frost, or jungle giants; or 1d4+1 cave, hill, marsh, river, slag, stone, or wood giants.</p>
</>};
const _summon_greater_demon = {title: "Summon Greater Demon", jsx: <><h2 id="spell-summon_greater_demon-summon-greater-demon">Summon Greater Demon</h2>
<SpellInfo id="1" source="Pathfinder #74: Sword of Valor/75" school="conj" subschools={["sum"]} descriptors={["chaotic","evil"]} arc={9} clr={9} orc={9} sor={9} wit={9} wiz={9} ct="1 round" comp="V, S, F/DF (a tiny bag and a small candle)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster, except it allows you to summon a single coloxus, an omox demon, or 1d3 kalavakus demons.</p>
</>};
const _summon_infernal_host = {title: "Summon Infernal Host", jsx: <><h2 id="spell-summon_infernal_host-summon-infernal-host">Summon Infernal Host</h2>
<SpellInfo id="1" source="Rival Guide/59" school="conj" subschools={["sum"]} descriptors={["evil","lawful"]} arc={5} brd={5} clr={5} orc={5} skd={5} sor={5} sum={5} usm={5} war={5} wit={5} wiz={5} ct="1 round" comp="V, S, F/DF (strip of rune-inscribed parchment)" rClose effect="1d4+1 lesser host devils or 1 greater host devil" dur="1 round/level" save="none" resist="no" />
<p>This spell functions as <Link to="/spell/summon_monster_v">summon monster V</Link>, save that it can only be used to summon host devils, noxious flying devils, known also as <Link to="/monster/lesser_host_devil">gaavs</Link> and <Link to="/monster/greater_host_devil">magaavs</Link>.</p>
</>};
const _summon_instrument = {title: "Summon Instrument", jsx: <><h2 id="spell-summon_instrument-summon-instrument">Summon Instrument</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/350" school="conj" subschools={["sum"]} brd={0} skd={0} ct="1 round" comp="V, S" rFt={0} effect="one summoned handheld musical instrument" dur="1 minute/level (D)" save="none" resist="no" />
<p>This spell summons one handheld musical instrument of your choice. This instrument appears in your hands or at your feet (your choice). The instrument is typical for its type. Only one instrument appears per casting, and it will play only for you. You can't summon an instrument too large to be held in two hands. The summoned instrument disappears at the end of this spell.</p>
</>};
const _summon_laborers = {title: "Summon Laborers", jsx: <><h2 id="spell-summon_laborers-summon-laborers">Summon Laborers</h2>
<SpellInfo id="1" source="Monster Summoner's Handbook/23" school="conj" subschools={["sum"]} clr={6} orc={6} sha={6} sum={6} war={6} wit={6} ct="10 minutes" comp="V, S, F/DF (a strip of rune-inscribed parchment)" rClose effect="one summoned petitioner/caster level" dur="8 hours (D)" save="none" resist="no" />
<p>Summon laborers summons one humanoid petitioner per caster level. These petitioners hail from one plane of your choice and perform tasks at your direction. The petitioners cannot fight or travel to dangerous lands, but do assist your downtime activities within a settlement, increasing the effect of Influence or Labor you spend by 50%, to a maximum of 1 additional point of Influence or Labor for every 2 caster levels you possess. This stacks with any increase to the effect of Influence or Labor that you receive from your followers within the settlement where the downtime activity takes place (if any). Summon laborers is a spell of the same alignment type as the plane from which the summoned petitioners hail (chaotic and evil for the Abyss, lawful and good for Heaven, and so on). Effects that increase the number of creatures summoned by a spell (such as Superior Summoning) do not affect summon laborers.</p>
</>};
const _summon_lesser_demon = {title: "Summon Lesser Demon", jsx: <><h2 id="spell-summon_lesser_demon-summon-lesser-demon">Summon Lesser Demon</h2>
<SpellInfo id="1" source="Pathfinder #74: Sword of Valor/75" school="conj" subschools={["sum"]} descriptors={["chaotic","evil"]} arc={5} clr={5} orc={5} sor={5} sum={4} usm={4} war={5} wit={5} wiz={5} ct="1 round" comp="V, S, F/DF (a tiny bag and a small candle)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster, except it allows you to summon a single brimorak, one incubus, one thoxel demon, 1d3 schir demons, or 1d4+1 vermlek demons.</p>
</>};
const _summon_lesser_psychopomp = {title: "Summon Lesser Psychopomp", jsx: <><h2 id="spell-summon_lesser_psychopomp-summon-lesser-psychopomp">Summon Lesser Psychopomp</h2>
<SpellInfo id="1" source="Pathfinder #80: Empty Graves/28" school="conj" subschools={["sum"]} arc={5} clr={5} orc={5} sor={5} sum={4} usm={4} war={5} wit={5} wiz={5} ct="1 round" comp="V, S, F/DF (a crocodile skull funerary mask)" rClose effect="one or more summoned psychopomps (see text)" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster, except that it summons 1d3 <Link to="/monster/esobok">esobok psychopomps</Link> or 1d4+1 <Link to="/monster/nosoi">nosoi psychopomps</Link>.</p>
</>};
const _summon_meladaemon = {title: "Summon Meladaemon", jsx: <><h2 id="spell-summon_meladaemon-summon-meladaemon">Summon Meladaemon</h2>
<SpellInfo id="1" source="Book of the Damned - Volume 3: Horsemen of the Apocalypse/39" school="conj" subschools={["sum"]} descriptors={["evil"]} arc={8} clr={8} orc={8} sor={8} sum={6} usm={6} wit={8} wiz={8} ct="1 round" comp="V, S, F (an empty wooden bowl)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster, except it summons a single meladaemon.</p>
</>};
const _summon_minor_ally = {title: "Summon Minor Ally", jsx: <><h2 id="spell-summon_minor_ally-summon-minor-ally">Summon Minor Ally</h2>
<SpellInfo id="1" source="Ultimate Magic/241" school="conj" subschools={["sum"]} drd={1} hnt={1} rgr={1} ct="1 round" comp="V, S, DF" rClose effect="1d3 summoned creatures" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions as <Link to="/spell/summon_natures_ally_i">summon nature's ally I</Link>, except you can summon 1d3 Tiny or smaller animals, such as bats, lizards, monkeys, rats, ravens, toads, or weasels. The summoned animals must all be the same type of creature.</p>
</>};
const _summon_minor_monster = {title: "Summon Minor Monster", jsx: <><h2 id="spell-summon_minor_monster-summon-minor-monster">Summon Minor Monster</h2>
<SpellInfo id="1" source="Ultimate Magic/241" school="conj" subschools={["sum"]} ant={1} arc={1} brd={1} clr={1} med={1} orc={1} psy={1} skd={1} sor={1} sum={1} usm={1} war={1} wit={1} wiz={1} ct="1 round" comp="V, S, F/DF (a tiny bag and a small candle)" rClose effect="1d3 summoned creatures" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions as <Link to="/spell/summon_monster_i">summon monster I</Link>, except you can summon 1d3 Tiny or smaller animals, such as bats, lizards, monkeys, rats, ravens, toads, or weasels. The summoned animals must all be the same type of creature. As with animals summoned with summon monster I, you may apply one alignment-appropriate template to these animals.</p>
</>};
const _summon_monster = {hasJL:true,title: "Summon Monster", jsx: <><div className="jumpList" id="spell-summon_monster-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="spell-summon_monster-summon-monster-ii">Summon Monster II</InnerLink></li><li><InnerLink toTop to="spell-summon_monster-summon-monster-iii">Summon Monster III</InnerLink></li><li><InnerLink toTop to="spell-summon_monster-summon-monster-iv">Summon Monster IV</InnerLink></li><li><InnerLink toTop to="spell-summon_monster-summon-monster-v">Summon Monster V</InnerLink></li><li><InnerLink toTop to="spell-summon_monster-summon-monster-vi">Summon Monster VI</InnerLink></li><li><InnerLink toTop to="spell-summon_monster-summon-monster-vii">Summon Monster VII</InnerLink></li><li><InnerLink toTop to="spell-summon_monster-summon-monster-viii">Summon Monster VIII</InnerLink></li><li><InnerLink toTop to="spell-summon_monster-summon-monster-ix">Summon Monster IX</InnerLink></li></ul></div><h2 id="spell-summon_monster-summon-monster-i">Summon Monster I</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/350;Monster Summoner's Handbook/18" school={<><Link to="/spelldef/conjuration">conjuration</Link> (<Link to="/spelldef/summoning">summoning</Link>) [see text]</>} ant={1} arc={1} brd={1} clr={1} med={1} orc={1} psy={1} skd={1} sor={1} spr={1} sum={1} usm={1} war={1} wit={1} wiz={1} ct="1 round" comp="V, S, F/DF (a tiny bag and a small candle)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell summons an extraplanar creature (typically an outsider, elemental, or magical beast native to another plane). It appears where you designate and acts immediately, on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it not to attack, to attack particular enemies, or to perform other actions. The spell conjures one of the creatures from the 1st Level list on Table 10-1. You choose which kind of creature to summon, and you can choose a different one each time you cast the spell.</p>
<p>A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells with expensive material components (such as wish).</p>
<p>When you use a summoning spell to summon a creature with an alignment or elemental subtype, it is a spell of that type. Creatures on Table 10-1 marked with an asterisk (*) are summoned with a template that matches your alignment.<sup><InnerLink showBacklink="backlink-spell-summon_monster-ref-1-1" id="spell-summon_monster-ref-1-1" data-hash-target to="spell-summon_monster-1">1</InnerLink></sup> If you are neutral, you may choose which template (if any) to apply to the creature.<sup><InnerLink showBacklink="backlink-spell-summon_monster-ref-2-1" id="spell-summon_monster-ref-2-1" data-hash-target to="spell-summon_monster-2">2</InnerLink></sup> Those creatures always have an alignment that matches yours, regardless of their usual alignment. Summoning these creatures makes the summoning spell's type match your alignment.</p>
<ScrollContainer id="spell-summon_monster--table-0"><table>
<thead>
<tr>
<th>Alignment</th>
<th>Template</th>
</tr>
</thead>
<tbody><tr>
<td>Good</td>
<td className="ion-activatable"><Link to="/template/celestial">Celestial<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>Evil</td>
<td className="ion-activatable"><Link to="/template/fiendish">Fiendish<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>Lawful</td>
<td className="ion-activatable"><Link to="/template/resolute">Resolute<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>Chaotic</td>
<td className="ion-activatable"><Link to="/template/entropic">Entropic<IonRippleEffect /></Link></td>
</tr>
</tbody></table></ScrollContainer>
<h4 id="spell-summon_monster-table-10-1">Table 10-1</h4>
<ScrollContainer id="spell-summon_monster--table-1"><table>
<thead>
<tr>
<th>Level</th>
<th>Creature</th>
<th>Subtype</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>Dire rat*</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>Dolphin*</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>Dog*</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>Eagle*</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>Fire beetle*</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>Poisonous frog*</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>Pony (horse)*</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>Viper (snake)*</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Ant, giant (worker)*</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Elemental (Small)</td>
<td>Elemental</td>
</tr>
<tr>
<td>2</td>
<td>Giant centipede*</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Giant frog*</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Giant spider*</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Goblin dog*</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Horse*</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Hyena*</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Lemure (devil)</td>
<td>Evil, Lawful</td>
</tr>
<tr>
<td>2</td>
<td>Octopus*</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Squid*</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Wolf*</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Ant, giant (soldier)*</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Ape*</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Aurochs (herd animal)*</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Boar*</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Cheetah*</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Constrictor snake*</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Crocodile*</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Dire bat*</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Dretch (demon)</td>
<td>Chaotic, Evil</td>
</tr>
<tr>
<td>3</td>
<td>Electric eel*</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Lantern archon</td>
<td>Good, Lawful</td>
</tr>
<tr>
<td>3</td>
<td>Leopard (cat)*</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Monitor lizard*</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Shark*</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Wolverine*</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Ant, giant (drone)*</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Bison (herd animal)*</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Deinonychus (dinosaur)*</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Dire ape*</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Dire boar*</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Dire wolf*</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Elemental (Medium)</td>
<td>Elemental</td>
</tr>
<tr>
<td>4</td>
<td>Giant scorpion*</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Giant wasp*</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Grizzly bear*</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Hell hound</td>
<td>Evil, Lawful</td>
</tr>
<tr>
<td>4</td>
<td>Hound archon</td>
<td>Good, Lawful</td>
</tr>
<tr>
<td>4</td>
<td>Lion*</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Mephit (any)</td>
<td>Elemental</td>
</tr>
<tr>
<td>4</td>
<td>Pteranodon (dinosaur)*</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Rhinoceros*</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>Agrawgh</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>Ankylosaurus (dinosaur)*</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>Babau (demon)</td>
<td>Chaotic, Evil</td>
</tr>
<tr>
<td>5</td>
<td>Bearded devil</td>
<td>Evil, Lawful</td>
</tr>
<tr>
<td>5</td>
<td>Bralani azata</td>
<td>Chaotic, Good</td>
</tr>
<tr>
<td>5</td>
<td>Dire lion*</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>Elemental (Large)</td>
<td>Elemental</td>
</tr>
<tr>
<td>5</td>
<td>Giant moray eel*</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>Kyton</td>
<td>Evil, Lawful</td>
</tr>
<tr>
<td>5</td>
<td>Orca (dolphin)*</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>Salamander</td>
<td>Evil</td>
</tr>
<tr>
<td>5</td>
<td>Woolly rhinoceros*</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>Xill</td>
<td>Evil, Lawful</td>
</tr>
<tr>
<td>6</td>
<td>Dire bear*</td>
<td>-</td>
</tr>
<tr>
<td>6</td>
<td>Dire tiger*</td>
<td>-</td>
</tr>
<tr>
<td>6</td>
<td>Elasmosaurus (dinosaur)*</td>
<td>-</td>
</tr>
<tr>
<td>6</td>
<td>Elemental (Huge)</td>
<td>Elemental</td>
</tr>
<tr>
<td>6</td>
<td>Elephant*</td>
<td>-</td>
</tr>
<tr>
<td>6</td>
<td>Erinyes (devil)</td>
<td>Evil, Lawful</td>
</tr>
<tr>
<td>6</td>
<td>Giant octopus*</td>
<td>-</td>
</tr>
<tr>
<td>6</td>
<td>Invisible stalker</td>
<td>Air</td>
</tr>
<tr>
<td>6</td>
<td>Lillend azata</td>
<td>Chaotic, Good</td>
</tr>
<tr>
<td>6</td>
<td>Shadow demon</td>
<td>Chaotic, Evil</td>
</tr>
<tr>
<td>6</td>
<td>Succubus (demon)</td>
<td>Chaotic, Evil</td>
</tr>
<tr>
<td>6</td>
<td>Triceratops (dinosaur)*</td>
<td>-</td>
</tr>
<tr>
<td>7</td>
<td>Bebelith</td>
<td>Chaotic, Evil</td>
</tr>
<tr>
<td>7</td>
<td>Bone devil</td>
<td>Evil, Lawful</td>
</tr>
<tr>
<td>7</td>
<td>Brachiosaurus (dinosaur)*</td>
<td>-</td>
</tr>
<tr>
<td>7</td>
<td>Dire crocodile*</td>
<td>-</td>
</tr>
<tr>
<td>7</td>
<td>Dire shark*</td>
<td>-</td>
</tr>
<tr>
<td>7</td>
<td>Elemental (greater)</td>
<td>Elemental</td>
</tr>
<tr>
<td>7</td>
<td>Giant squid*</td>
<td>-</td>
</tr>
<tr>
<td>7</td>
<td>Mastadon (elephant)*</td>
<td>-</td>
</tr>
<tr>
<td>7</td>
<td>Roc*</td>
<td>-</td>
</tr>
<tr>
<td>7</td>
<td>Tyrannosaurus (dinosaur)*</td>
<td>-</td>
</tr>
<tr>
<td>7</td>
<td>Vrock (demon)</td>
<td>Chaotic, Evil</td>
</tr>
<tr>
<td>8</td>
<td>Barbed devil</td>
<td>Evil, Lawful</td>
</tr>
<tr>
<td>8</td>
<td>Elemental (elder)</td>
<td>Elemental</td>
</tr>
<tr>
<td>8</td>
<td>Hezrou (demon)</td>
<td>Chaotic, Evil</td>
</tr>
<tr>
<td>9</td>
<td>Astral Deva (angel)</td>
<td>Good</td>
</tr>
<tr>
<td>9</td>
<td>Ghaele azata</td>
<td>Chaotic, Good</td>
</tr>
<tr>
<td>9</td>
<td>Glabrezu (demon)</td>
<td>Chaotic, Evil</td>
</tr>
<tr>
<td>9</td>
<td>Ice devil</td>
<td>Evil, Lawful</td>
</tr>
<tr>
<td>9</td>
<td>Nalfeshnee (demon)</td>
<td>Chaotic, Evil</td>
</tr>
<tr>
<td>9</td>
<td>Trumpet archon</td>
<td>Good, Lawful</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="spell-summon_monster-summon-monster-ii" data-hash-target>Summon Monster II</h3>
<SpellInfo id="2" source="PRPG Core Rulebook/352" school={<><Link to="/spelldef/conjuration">conjuration</Link> (<Link to="/spelldef/summoning">summoning</Link>) [see text]</>} ant={2} arc={2} brd={2} clr={2} med={2} orc={2} psy={2} skd={2} sor={2} spr={2} sum={2} usm={2} war={2} wit={2} wiz={2} ct="1 round" comp="V, S, F/DF (a tiny bag and a small candle)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster I, except that you can summon one creature from the 2nd-level list or 1d3 creatures of the same kind from the 1st-level list.</p>
<h3 id="spell-summon_monster-summon-monster-iii" data-hash-target>Summon Monster III</h3>
<SpellInfo id="3" source="PRPG Core Rulebook/352" school={<><Link to="/spelldef/conjuration">conjuration</Link> (<Link to="/spelldef/summoning">summoning</Link>) [see text]</>} ant={3} arc={3} brd={3} clr={3} orc={3} psy={3} skd={3} sor={3} spr={3} war={3} wit={3} wiz={3} ct="1 round" comp="V, S, F/DF (a tiny bag and a small candle)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster I, except that you can summon one creature from the 3rd-level list, 1d3 creatures of the same kind from the 2nd-level list, or 1d4+1 creatures of the same kind from the 1st-level list.</p>
<h3 id="spell-summon_monster-summon-monster-iv" data-hash-target>Summon Monster IV</h3>
<SpellInfo id="4" source="PRPG Core Rulebook/352" school={<><Link to="/spelldef/conjuration">conjuration</Link> (<Link to="/spelldef/summoning">summoning</Link>) [see text]</>} ant={4} arc={4} brd={4} clr={4} med={3} orc={4} psy={4} skd={4} sor={4} spr={4} sum={3} usm={3} war={4} wit={4} wiz={4} ct="1 round" comp="V, S, F/DF (a tiny bag and a small candle)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster I, except that you can summon one creature from the 4th-level list, 1d3 creatures of the same kind from the 3rd-level list, or 1d4+1 creatures of the same kind from a lower-level list.</p>
<h3 id="spell-summon_monster-summon-monster-v" data-hash-target>Summon Monster V</h3>
<SpellInfo id="5" source="PRPG Core Rulebook/352" school={<><Link to="/spelldef/conjuration">conjuration</Link> (<Link to="/spelldef/summoning">summoning</Link>) [see text]</>} arc={5} brd={5} clr={5} med={4} orc={5} psy={5} skd={5} sor={5} spr={5} sum={4} usm={4} war={5} wit={5} wiz={5} ct="1 round" comp="V, S, F/DF (a tiny bag and a small candle)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster I, except that you can summon one creature from the 5th-level list, 1d3 creatures of the same kind from the 4th-level list, or 1d4+1 creatures of the same kind from a lower-level list.</p>
<h3 id="spell-summon_monster-summon-monster-vi" data-hash-target>Summon Monster VI</h3>
<SpellInfo id="6" source="PRPG Core Rulebook/352" school={<><Link to="/spelldef/conjuration">conjuration</Link> (<Link to="/spelldef/summoning">summoning</Link>) [see text]</>} arc={6} brd={6} clr={6} orc={6} psy={6} skd={6} sor={6} spr={6} usm={5} war={6} wit={6} wiz={6} ct="1 round" comp="V, S, F/DF (a tiny bag and a small candle)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster I, except you can summon one creature from the 6th-level list, 1d3 creatures of the same kind from the 5th-level list, or 1d4+1 creatures of the same kind from a lower-level list.</p>
<h3 id="spell-summon_monster-summon-monster-vii" data-hash-target>Summon Monster VII</h3>
<SpellInfo id="7" source="PRPG Core Rulebook/352" school={<><Link to="/spelldef/conjuration">conjuration</Link> (<Link to="/spelldef/summoning">summoning</Link>) [see text]</>} arc={7} clr={7} orc={7} psy={7} sor={7} sum={5} usm={6} wit={7} wiz={7} ct="1 round" comp="V, S, F/DF (a tiny bag and a small candle)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster I, except that you can summon one creature from the 7th-level list, 1d3 creatures of the same kind from the 6th-level list, or 1d4+1 creatures of the same kind from a lower-level list.</p>
<h3 id="spell-summon_monster-summon-monster-viii" data-hash-target>Summon Monster VIII</h3>
<SpellInfo id="8" source="PRPG Core Rulebook/352" school={<><Link to="/spelldef/conjuration">conjuration</Link> (<Link to="/spelldef/summoning">summoning</Link>) [see text]</>} arc={8} clr={8} orc={8} psy={8} sor={8} sum={6} wit={8} wiz={8} ct="1 round" comp="V, S, F/DF (a tiny bag and a small candle)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster I, except that you can summon one creature from the 8th-level list, 1d3 creatures of the same kind from the 7th-level list, or 1d4+1 creatures of the same kind from a lower-level list.</p>
<h3 id="spell-summon_monster-summon-monster-ix" data-hash-target>Summon Monster IX</h3>
<SpellInfo id="9" source="PRPG Core Rulebook/352" school={<><Link to="/spelldef/conjuration">conjuration</Link> (<Link to="/spelldef/summoning">summoning</Link>) [see text]</>} arc={9} clr={9} orc={9} psy={9} sor={9} wit={9} wiz={9} ct="1 round" comp="V, S, F/DF (a tiny bag and a small candle)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster I, except that you can summon one creature from the 9th-level list, 1d3 creatures of the same kind from the 8th-level list, or 1d4+1 creatures of the same kind from a lower-level list.</p>
<section data-footnotes>
<h3 id="spell-summon_monster-label">Footnotes</h3>
<ol>
<li id="spell-summon_monster-1">
<p>By a strict rules-as-written interpretation, regular casters can only apply the celestial or fiendish templates, since this spell was written before the resolute and entropic templates existed. <em>Bestiary 2</em> introduced the resolute and entropic templates and said they could apply to summons, but left no specifics. <em>Monster Summoner's Handbook</em> added archetypes that could use the resolute and entropic templates. However, Paizo's official open-content website cites <em>MSH</em> and notes "summon monster can be used to summon creatures with the entropic or resolute templates instead of the celestial or fiendish template". In any event, only one template may be applied automatically to a summoned creature: lawful good casters could choose celestial or resolute, but not both. Consult your GM. <InnerLink id="backlink-spell-summon_monster-ref-1-1" data-hash-target to="spell-summon_monster-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="spell-summon_monster-2">
<p>The original text was written before the entropic and resolute templates were created (see footnote above), so the text generally refers to neutral on the good-evil axis only. However, a neutral good caster could theoretically pick either resolute or entropic instead of the default celestial. Consult your GM. <InnerLink id="backlink-spell-summon_monster-ref-2-1" data-hash-target to="spell-summon_monster-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _summon_natures_ally = {hasJL:true,title: "Summon Nature's Ally", jsx: <><div className="jumpList" id="spell-summon_natures_ally-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="spell-summon_natures_ally-summon-kami">Summon Kami</InnerLink></li><li><InnerLink toTop to="spell-summon_natures_ally-summon-natures-ally-ii">Summon Nature's Ally II</InnerLink></li><li><InnerLink toTop to="spell-summon_natures_ally-summon-natures-ally-iii">Summon Nature's Ally III</InnerLink></li><li><InnerLink toTop to="spell-summon_natures_ally-summon-natures-ally-iv">Summon Nature's Ally IV</InnerLink></li><li><InnerLink toTop to="spell-summon_natures_ally-summon-natures-ally-v">Summon Nature's Ally V</InnerLink></li><li><InnerLink toTop to="spell-summon_natures_ally-summon-natures-ally-vi">Summon Nature's Ally VI</InnerLink></li><li><InnerLink toTop to="spell-summon_natures_ally-summon-natures-ally-vii">Summon Nature's Ally VII</InnerLink></li><li><InnerLink toTop to="spell-summon_natures_ally-summon-natures-ally-viii">Summon Nature's Ally VIII</InnerLink></li><li><InnerLink toTop to="spell-summon_natures_ally-summon-natures-ally-ix">Summon Nature's Ally IX</InnerLink></li></ul></div><h2 id="spell-summon_natures_ally-summon-natures-ally-i">Summon Nature's Ally I</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/354" school="conj" subschools={["sum"]} drd={1} hnt={1} rgr={1} sha={1} ct="1 round" comp="V, S, DF" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell summons to your side a natural creature (typically an animal, fey, magical beast, outsider with the elemental subtype, or a giant). The summoned ally appears where you designate and acts immediately, on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it not to attack, to attack particular enemies, or to perform other actions as you command.</p>
<p>A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. Creatures summoned using this spell cannot use spells or spell-like abilities that duplicate spells that have expensive material components (such as wish).</p>
<p>The spell conjures one of the creatures from the 1st Level list on Table 10-2. You choose which kind of creature to summon, and you can change that choice each time you cast the spell. All the creatures on the table are neutral unless otherwise noted.</p>
<p>When you use a summoning spell to summon a creature with an alignment or elemental subtype, it is a spell of that type. All creatures summoned with this spell without alignment subtypes have an alignment that matches yours, regardless of their usual alignment. Summoning these creatures makes the summoning spell's type match your alignment.</p>
<h4 id="spell-summon_natures_ally-table-10-2">Table 10-2</h4>
<ScrollContainer id="spell-summon_natures_ally--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Creature</th>
<th>Subtype</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>Dire rat</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>Dog</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>Dolphin</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>Eagle</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>Giant centipede</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>Fire beetle</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>Mite (gremlin)</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>Poisonous frog</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>Pony (horse)</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>Stirge</td>
<td>-</td>
</tr>
<tr>
<td>1</td>
<td>Viper (snake)</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Ant, giant (worker)</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Elemental (Small)</td>
<td>Elemental</td>
</tr>
<tr>
<td>2</td>
<td>Giant frog</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Giant spider</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Goblin Dog</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Horse</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Hyena</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Octopus</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Squid</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>Wolf</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Ant, giant (soldier)</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Ape</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Aurochs (herd animal)</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Boar</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Cheetah</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Constrictor snake</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Crocodile</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Dire bat</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Electric Eel</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Giant crab</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Leopard (cat)</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Monitor lizard</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Shark</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>Wolverine</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Anhana</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Ant, giant (drone)</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Bison (herd animal)</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Deinonychus (dinosaur)</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Dire ape</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Dire boar</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Dire wolf</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Elemental (Medium)</td>
<td>Elemental</td>
</tr>
<tr>
<td>4</td>
<td>Giant scorpion</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Giant stag beetle</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Giant wasp</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Griffon</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Grizzly bear</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Lion</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Mephit (any)</td>
<td>Elemental</td>
</tr>
<tr>
<td>4</td>
<td>Owlbear</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Pteranodon (dinosaur)</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Rhinoceros</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Satyr</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>Tiger</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>Ankylosaurus (dinosaur)</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>Cyclops</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>Dire lion</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>Dolphin (orca)</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>Elemental (Large)</td>
<td>Elemental</td>
</tr>
<tr>
<td>5</td>
<td>Ettin</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>Giant moray eel</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>Girallon</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>Manticore</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>Woolly rhinoceros</td>
<td>-</td>
</tr>
<tr>
<td>6</td>
<td>Bulette</td>
<td>-</td>
</tr>
<tr>
<td>6</td>
<td>Dire bear</td>
<td>-</td>
</tr>
<tr>
<td>6</td>
<td>Dire tiger</td>
<td>-</td>
</tr>
<tr>
<td>6</td>
<td>Elasmosaurus (dinosaur)</td>
<td>-</td>
</tr>
<tr>
<td>6</td>
<td>Elemental (Huge)</td>
<td>Elemental</td>
</tr>
<tr>
<td>6</td>
<td>Elephant</td>
<td>-</td>
</tr>
<tr>
<td>6</td>
<td>Giant octopus</td>
<td>-</td>
</tr>
<tr>
<td>6</td>
<td>Hill giant</td>
<td>-</td>
</tr>
<tr>
<td>6</td>
<td>Stegosaurus (dinosaur)</td>
<td>-</td>
</tr>
<tr>
<td>6</td>
<td>Stone giant</td>
<td>Earth</td>
</tr>
<tr>
<td>6</td>
<td>Triceratops (dinosaur)</td>
<td>-</td>
</tr>
<tr>
<td>7</td>
<td>Brachiosaurus (dinosaur)</td>
<td>-</td>
</tr>
<tr>
<td>7</td>
<td>Dire crocodile</td>
<td>-</td>
</tr>
<tr>
<td>7</td>
<td>Dire shark</td>
<td>-</td>
</tr>
<tr>
<td>7</td>
<td>Elemental (greater)</td>
<td>Elemental</td>
</tr>
<tr>
<td>7</td>
<td>Fire giant</td>
<td>Fire</td>
</tr>
<tr>
<td>7</td>
<td>Frost giant</td>
<td>Cold</td>
</tr>
<tr>
<td>7</td>
<td>Giant squid</td>
<td>-</td>
</tr>
<tr>
<td>7</td>
<td>Mastadon (elephant)</td>
<td>-</td>
</tr>
<tr>
<td>7</td>
<td>Roc</td>
<td>-</td>
</tr>
<tr>
<td>7</td>
<td>Tyrannosaurus (dinosaur)</td>
<td>-</td>
</tr>
<tr>
<td>8</td>
<td>Cloud giant</td>
<td>Air</td>
</tr>
<tr>
<td>8</td>
<td>Elemental (elder)</td>
<td>Elemental</td>
</tr>
<tr>
<td>8</td>
<td>Purple worm</td>
<td>-</td>
</tr>
<tr>
<td>9</td>
<td>Pixie (w/irresistible dance and sleep arrows)</td>
<td>-</td>
</tr>
<tr>
<td>9</td>
<td>Storm giant</td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="spell-summon_natures_ally-summon-kami" data-hash-target>Summon Kami</h3>
<SpellInfo id="2" source="Inner Sea Races/223" school="conj" subschools={["sum"]} drd={5} hnt={5} sha={5} ct="1 round" comp="V, S, DF" rClose effect="one or more kami" dur="1 round/level (D)" save="none" resist="no" />
<blockquote>
<p><em>The following spell is available to the indicated race or ethnicity: Tian</em></p>
</blockquote>
<p>This spell functions as summon nature's ally V, except you can summon one kodama, 1d3 fukujin, or 1d4+1 shikigami.</p>
<h3 id="spell-summon_natures_ally-summon-natures-ally-ii" data-hash-target>Summon Nature's Ally II</h3>
<SpellInfo id="3" source="PRPG Core Rulebook/354" school="conj" subschools={["sum"]} drd={2} hnt={2} rgr={2} sha={2} ct="1 round" comp="V, S, DF" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions as summon nature's ally I, except that you summon one 2nd-level creature or 1d3 1st-level creatures of the same kind.</p>
<h3 id="spell-summon_natures_ally-summon-natures-ally-iii" data-hash-target>Summon Nature's Ally III</h3>
<SpellInfo id="4" source="PRPG Core Rulebook/354" school="conj" subschools={["sum"]} drd={3} hnt={3} rgr={3} sha={3} ct="1 round" comp="V, S, DF" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon nature's ally I, except that you can summon one 3rd-level creature, 1d3 2nd-level creatures of the same kind, or 1d4+1 1st-level creatures of the same kind.</p>
<h3 id="spell-summon_natures_ally-summon-natures-ally-iv" data-hash-target>Summon Nature's Ally IV</h3>
<SpellInfo id="5" source="PRPG Core Rulebook/354" school="conj" subschools={["sum"]} drd={4} hnt={4} rgr={4} sha={4} ct="1 round" comp="V, S, DF" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon nature's ally I, except that you can summon one 4th-level creature, 1d3 3rd-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.</p>
<h3 id="spell-summon_natures_ally-summon-natures-ally-v" data-hash-target>Summon Nature's Ally V</h3>
<SpellInfo id="6" source="PRPG Core Rulebook/354" school="conj" subschools={["sum"]} drd={5} hnt={5} sha={5} ct="1 round" comp="V, S, DF" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon nature's ally I, except that you can summon one 5th-level creature, 1d3 4th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.</p>
<h3 id="spell-summon_natures_ally-summon-natures-ally-vi" data-hash-target>Summon Nature's Ally VI</h3>
<SpellInfo id="7" source="PRPG Core Rulebook/354" school="conj" subschools={["sum"]} drd={6} hnt={6} sha={6} ct="1 round" comp="V, S, DF" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon nature's ally I, except that you can summon one 6th-level creature, 1d3 5th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.</p>
<h3 id="spell-summon_natures_ally-summon-natures-ally-vii" data-hash-target>Summon Nature's Ally VII</h3>
<SpellInfo id="8" source="PRPG Core Rulebook/354" school="conj" subschools={["sum"]} drd={7} sha={7} ct="1 round" comp="V, S, DF" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon nature's ally I, except that you can summon one 7th-level creature, 1d3 6th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.</p>
<h3 id="spell-summon_natures_ally-summon-natures-ally-viii" data-hash-target>Summon Nature's Ally VIII</h3>
<SpellInfo id="9" source="PRPG Core Rulebook/354" school="conj" subschools={["sum"]} drd={8} sha={8} ct="1 round" comp="V, S, DF" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon nature's ally I, except that you can summon one 8th-level creature, 1d3 7th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.</p>
<h3 id="spell-summon_natures_ally-summon-natures-ally-ix" data-hash-target>Summon Nature's Ally IX</h3>
<SpellInfo id="10" source="PRPG Core Rulebook/354" school="conj" subschools={["sum"]} drd={9} sha={9} ct="1 round" comp="V, S, DF" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon nature's ally I, except that you can summon one 9th-level creature, 1d3 8th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.</p>
</>};
const _summon_ship = {title: "Summon Ship", jsx: <><h2 id="spell-summon_ship-summon-ship">Summon Ship</h2>
<SpellInfo id="1" source="Blood of the Ancients/19" school="conj" subschools={["creat"]} arc={4} brd={4} clr={4} occ={3} orc={4} psy={4} skd={4} sor={4} sum={3} usm={3} war={4} wiz={4} ct="10 minutes" comp="V, S, F (a miniature ship; see text)" rClose effect="One conjured ship" dur="1 day/level" save="none" resist="no" />
<p>When you cast this spell, you must hold out a miniature model of the ship you intend to create. The spell assembles a ship from raw materials conjured from other planes, taking a shape similar to the miniature ship in your hand. The miniature ship must be elaborately carved and worth 10% of the price of the type of ship it represents. The ship comes with all equipment necessary for sailing or rowing the ship but provides no crew or cargo. If you attempt to conjure the ship into a location where there isn't a sufficient amount of water to keep the ship afloat, the spell fails. The ship displaces all water and Medium or smaller aquatic animals within its space when it appears, but the location must be otherwise unoccupied at the time of casting the spell. You can cast this spell again to extend the duration of the conjured ship, replacing the remaining duration with the new spell's duration. When the spell's duration ends or the spell is dismissed, the ship instantly stops moving and then falls apart over the course of a minute.</p>
<p>The largest type of ship that you can summon depends on your caster level, as indicated by the table below.</p>
<ScrollContainer id="spell-summon_ship--table-0"><table>
<thead>
<tr>
<th>Caster Level</th>
<th>Ship Type</th>
<th>Focus Cost</th>
</tr>
</thead>
<tbody><tr>
<td>7th</td>
<td>Keelboat</td>
<td>300 gp</td>
</tr>
<tr>
<td>11th</td>
<td>Longship or sailing ship</td>
<td>1,000 gp</td>
</tr>
<tr>
<td>13th</td>
<td>Junk</td>
<td>1,500 gp</td>
</tr>
<tr>
<td>15th</td>
<td>Warship</td>
<td>2,500 gp</td>
</tr>
<tr>
<td>17th</td>
<td>Galley</td>
<td>3,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _summon_stampede = {title: "Summon Stampede", jsx: <><h2 id="spell-summon_stampede-summon-stampede">Summon Stampede</h2>
<SpellInfo id="1" source="Chronicle of the Righteous/51" school="conj" subschools={["sum"]} clr={6} drd={6} hnt={6} orc={6} sum={4} usm={4} war={6} ct="1 round" comp="V, S, M (piece of fur from a herd animal)" rMed effect="20-ft.-radius herd of animals" dur="1 round/level" save="Reflex halves (see text)" resist="no" />
<p>You conjure a herd of aurochs or similar herd animal that immediately stampedes in the direction you indicate. The herd takes up a 20-foot-radius space and moves at a rate of 120 feet per round in a straight line. Any creatures caught in the herd's path take 4d6+9 points of damage that round as they are trampled beneath dozens of animals' hooves. A successful Reflex save halves this damage.</p>
<p>If the stampede's path would put it in an obviously dangerous area (such as over a cliff or through a fire) or force it to move through a solid barrier, the herd stops at the obstacle and moves in a new randomly determined direction until it reaches another obstacle or the spell's duration ends.</p>
</>};
const _summon_swarm = {hasJL:true,title: "Summon Swarm", jsx: <><div className="jumpList" id="spell-summon_swarm-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="spell-summon_swarm-mythic_summon_swarm">Mythic Summon Swarm</InnerLink></li><li><InnerLink toTop to="spell-summon_swarm-rain-of-frogs">Rain of Frogs</InnerLink></li></ul></div><h2 id="spell-summon_swarm-summon-swarm">Summon Swarm</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/354" school="conj" subschools={["sum"]} arc={2} brd={2} drd={2} hnt={2} sha={2} skd={2} sor={2} sum={2} usm={2} wit={2} wiz={2} ct="1 round" comp="V, S, M/DF (a square of red cloth)" rClose effect="one swarm of bats, rats, or spiders" dur="concentration+ 2 rounds" save="none" resist="no" />
<p>You summon a swarm of <Link to="/monster/bat_swarm">bats</Link>, <Link to="/monster/rat_swarm">rats</Link>, or <Link to="/monster/spider_swarm">spiders</Link> (your choice), which attacks all other creatures within its area. (You may summon the swarm so that it shares the area of other creatures.) If no living creatures are within its area, the swarm attacks or pursues the nearest creature as best it can. The caster has no control over its target or direction of travel.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-summon_swarm--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col" id="spell-summon_swarm-mythic_summon_swarm" data-hash-target>Mythic Summon Swarm</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 109</Link></p>
<p>The swarm has the advanced simple template. A swarm of rats or spiders leaves behind a trail of filth or ichor when it moves, which has the effects of a <Link to="/spell/grease">grease</Link> spell for 1 round after the swarm passes through an area. Any creature that moves through the affected area is also subject to the swarm's disease or poison, as if attacked by the swarm. A prone creature in the affected area takes a -4 penalty on its saving throw against this affliction. A bat swarm leaves behind a similar trail that lasts for 2 rounds but doesn't have a disease or poison effect.</p>
</td></tr></tbody></table></ScrollContainer></div><h3 id="spell-summon_swarm-rain-of-frogs" data-hash-target>Rain of Frogs</h3>
<SpellInfo id="2" source="Ultimate Magic/233" school="conj" subschools={["sum"]} arc={3} brd={3} drd={3} hnt={3} psy={3} sha={4} skd={3} sor={3} sum={3} usm={3} wit={3} wiz={3} ct="1 round" comp="V, S, M/DF (a square of red cloth)" rClose effect="one swarm of poisonous frogs" dur="concentration+ 2 rounds" save="none" resist="no" />
<p>This spell functions as summon swarm, except you summon a swarm of poisonous frogs. This swarm has the statistics of a <Link to="/monster/centipede_swarm">centipede swarm</Link>, except it has the animal type and its poison deals Constitution damage instead of Dexterity damage.</p>
</>};
const _summon_thanadaemon = {title: "Summon Thanadaemon", jsx: <><h2 id="spell-summon_thanadaemon-summon-thanadaemon">Summon Thanadaemon</h2>
<SpellInfo id="1" source="Book of the Damned - Volume 3: Horsemen of the Apocalypse/39" school="conj" subschools={["sum"]} descriptors={["evil"]} arc={9} clr={9} orc={9} sor={9} wit={9} wiz={9} ct="1 round" comp="V, S, F (two silver coins)" rClose effect="one summoned creature" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster, except it summons a single thanadaemon. You can only use this spell in an area with enough open water to accommodate the daemon's skiff, or when on the Astral Plane or Ethereal Plane.</p>
</>};
const _summon_totem_creature = {title: "Summon Totem Creature", jsx: <><h2 id="spell-summon_totem_creature-summon-totem-creature">Summon Totem Creature</h2>
<SpellInfo id="1" source="Humans of Golarion/29" school="conj" subschools={["sum"]} arc={3} clr={3} drd={3} hnt={3} orc={3} rgr={3} sor={3} sum={3} usm={3} war={3} wiz={3} ct="10 minutes" comp="V, S, M/DF (a piece of bone from any one of your totem animals)" rClose effect="one summoned creature" dur="1 hour (D)" save="none" resist="no" />
<p>The Shoanti revere more than the deities of distant planes, but also the animals and natural forces of the rugged lands they call home. Shoanti spellcasters have learned ways to call upon the might of their quahs' totem creatures in times of need. A character must have been raised by the Shoanti and be considered part of a quah to be able to cast this spell. Characters with access to this spell can only summon creatures revered by the quah they are a part of, as noted on the following lists. Except as noted above, this spell functions as <Link to="/spell/summon_natures_ally_iii">summon nature's ally III</Link>.</p>
<p><em>Lyrune-Quah (Moon Clan):</em> air elemental (small), 1d3 bats, wolf, 1d3 owls.</p>
<p><em>Shadde-Quah (Axe Clan):</em> 1d3 eagles, earth elemental (small), water elemental (small).</p>
<p><em>Shriikirri-Quah (Hawk Clan):</em> air elemental (small), 1d3+1 hawks (familiars), horse.</p>
<p><em>Shundar-Quah (Spire Clan):</em> air elemental (small), earth elemental (small), 1d3 eagles.</p>
<p><em>Sklar-Quah (Sun Clan):</em> 1d3 fire beetles, fire elemental (small), horse.</p>
<p><em>Skoan-Quah (Skull Clan):</em> 1d3+1 eagles (vultures), 1d3 fire beetles, 1d3 giant centipedes.</p>
<p><em>Tamiir-Quah (Wind Clan):</em> air elemental (small), 1d3 eagles, earth elemental (small).</p>
</>};
const _summon_vanth = {title: "Summon Vanth", jsx: <><h2 id="spell-summon_vanth-summon-vanth">Summon Vanth</h2>
<SpellInfo id="1" source="Pathfinder #80: Empty Graves/28" school="conj" subschools={["sum"]} arc={6} clr={6} orc={6} sor={6} sum={5} usm={5} war={6} wit={6} wiz={6} ct="1 round" comp="V, S, F/DF (a vulture skull funerary mask)" rClose effect="one summoned vanth psychopomp" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell functions like summon monster, except that it summons a single <Link to="/monster/vanth">vanth psychopomp</Link>.</p>
</>};
const _summoner_conduit = {title: "Summoner Conduit", jsx: <><h2 id="spell-summoner_conduit-summoner-conduit">Summoner Conduit</h2>
<SpellInfo id="1" source="Ultimate Combat/245" school="necro" arc={5} clr={4} occ={4} orc={4} psy={5} sor={5} sum={4} usm={4} war={4} wit={5} wiz={5} ct="1 standard action" comp="V, S, M (two flies)" rClose target="one summoned creature or eidolon" dur="1 minute/level" save="Will negates" resist="yes" />
<p>You exploit the invisible, mystic connection between the target creature and its summoner to harm that summoner. Whenever the target's summoned creature is the target of a spell that deals damage, the target's summoner is also considered to be a target of that spell. Such a summoner gains his normal defenses against the spell, such as a saving throw and spell resistance, and cannot be affected if he is on another plane of existence.</p>
</>};
const _sun_metal = {title: "Sun Metal", jsx: <><h2 id="spell-sun_metal-sun-metal">Sun Metal</h2>
<SpellInfo id="1" source="Ultimate Combat/245;Faiths of Purity/28" school="trans" descriptors={["fire"]} clr={1} hnt={1} orc={1} pal={1} rgr={1} war={1} ct="1 standard action" comp="V, S" rTouch target="one melee weapon" dur="1 round/level (see text)" save="Fortitude negates (object)" resist="yes (object)" />
<p>The target weapon ignites into flame that does not hurt the weapon or the wielder, but damages those hit by the weapon. When the weapon's wielder hits with this weapon, it deals an additional 1d4 points of fire damage. This damage is not multiplied in the case of a critical hit. This effect immediately ends if the weapon is submerged in water. This effect does not stack with the flaming or flaming burst weapon special ability or any other effect that grants the weapon extra fire damage. It does not function on weapons with the frost or icy burst weapon special ability or any other effect that grants a weapon extra cold damage.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-sun_metal--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Sun Metal</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 109</Link><br/>The additional damage dealt by the weapon increases to 1d6 points of fire damage. Any creature struck by the weapon is dazzled for 1 round (no saving throw). On a critical hit, the target is blinded for 1 round (Fortitude negates, DC equal to the DC of the spell).</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _sunbeam = {title: "Sunbeam", jsx: <><h2 id="spell-sunbeam-sunbeam">Sunbeam</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/354" school="evo" descriptors={["light"]} drd={7} sha={7} ct="1 standard action" comp="V, S, DF" rFt={60} area="line from your hand" dur="1 round/level or until all beams are exhausted" save="Reflex negates and Reflex half; see text" resist="yes" />
<p>For the duration of this spell, you can use a standard action to evoke a dazzling beam of intense light each round. You can call forth one beam per three caster levels (maximum six beams at 18th level). The spell ends when its duration runs out or your allotment of beams is exhausted.</p>
<p>Each creature in the beam is blinded and takes 4d6 points of damage. Any creatures to which sunlight is harmful or unnatural take double damage. A successful Reflex save negates the blindness and reduces the damage by half.</p>
<p>An undead creature caught within the beam takes 1d6 points of damage per caster level (maximum 20d6), or half damage if a Reflex save is successful. In addition, the beam results in the destruction of any undead creature specifically harmed by bright light if it fails its save.</p>
<p>The ultraviolet light generated by the spell deals damage to fungi, mold, oozes, and slimes just as if they were undead creatures.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-sunbeam--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Sunbeam</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 109</Link><br/>You call forth one beam per 2 caster levels instead of per 3. The damage dealt increases to 4d8 points of damage. The damage dealt to undead creatures, fungi, mold, oozes, and slimes increases to 1d8 points of damage per caster level (maximum 20d8). Any creature that successfully saves against a beam is dazzled for 1 minute.</p>
<p><em>Augmented (9th):</em> If you expend three uses of mythic power, the first beam you create has a duration of 1 round per 2 caster levels, and deals maximum damage on the round you cast it. Creatures in the beam can attempt saving throws to avoid blindness, but not the spell's damage.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _sunburst = {title: "Sunburst", jsx: <><h2 id="spell-sunburst-sunburst">Sunburst</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/355" school="evo" descriptors={["light"]} arc={8} drd={8} sha={8} sor={8} wiz={8} ct="1 standard action" comp="V, S, M/DF (sunstone and fire source)" rLong area="80-ft.-radius burst" dur="instantaneous" save="Reflex partial; see text" resist="yes" />
<p>Sunburst causes a globe of searing radiance to explode silently from a point you select. All creatures in the globe are blinded and take 6d6 points of damage. A creature to which sunlight is harmful or unnatural takes double damage. A successful Reflex save negates the blindness and reduces the damage by half.</p>
<p>An undead creature caught within the globe takes 1d6 points of damage per caster level (maximum 25d6), or half damage if a Reflex save is successful. In addition, the burst results in the destruction of any undead creature specifically harmed by bright light if it fails its save.</p>
<p>The ultraviolet light generated by the spell deals damage to fungi, mold, oozes, and slimes just as if they were undead creatures.</p>
<p>Sunburst dispels any darkness spells of lower than 9th level within its area.</p>
</>};
const _sunder_breaker = {title: "Sunder Breaker", jsx: <><h2 id="spell-sunder_breaker-sunder-breaker">Sunder Breaker</h2>
<SpellInfo id="1" source="Advanced Class Guide/195" school="abjur" descriptors={["force"]} arc={1} mag={1} psy={1} sor={1} wiz={1} ct="1 standard action" comp="V, S" rTouch target="creature touched" dur="1 minute/level (d) or until discharged" save="Will negates (harmless) and see text" resist="yes (harmless) and see text" />
<p>You place an invisible ward upon the target. The next time a creature succeeds at a sunder combat maneuver against the target, the attacker's weapon takes 1d6 points of damage per caster level (maximum 10d6). If the attacker used a natural weapon for the sunder, the attacker takes half this damage. Spell resistance applies to this damage. The attacker can attempt a Fortitude save to halve this damage.</p>
<p>The ward on the target counts as a magical trap and can be detected and disabled as such.</p>
</>};
const _sundered_serpent_coil = {title: "Sundered Serpent Coil", jsx: <><h2 id="spell-sundered_serpent_coil-sundered-serpent-coil">Sundered Serpent Coil</h2>
<SpellInfo id="1" source="Monster Codex/200" school="conj" subschools={["creat"]} arc={3} mag={3} sor={3} sum={3} usm={3} wit={3} wiz={3} ct="1 standard action" comp="V, S, M (a snake scale)" rMed area="one 5-foot square" dur="1 round/level (D)" />
<p>This spell functions like black tentacles, except it creates a Large decapitated snake, which erupts from the ground and grapples a creature you specify within its 5-foot reach. As a standard action, you can command the snake to release its grappled target and direct it to attack a different creature.</p>
</>};
const _sundering_shards = {title: "Sundering Shards", jsx: <><h2 id="spell-sundering_shards-sundering-shards">Sundering Shards</h2>
<SpellInfo id="1" source="Advanced Class Guide/195" school="trans" arc={1} bld={1} mag={1} occ={1} psy={1} rma={1} sor={1} wit={1} wiz={1} ct="1 standard action" comp="V" rTouch target="melee weapon touched" dur="1 hour/level or until discharged" save="Reflex negates (see text)" resist="yes" />
<p>You channel power into a melee weapon. If the weapon's wielder destroys an item with a successful sunder combat maneuver, she can release the extra power in the weapon, shattering the sundered item into jagged shards that deal 1d6 points of piercing and slashing damage to the creature that was wearing, carrying, or wielding the now-shattered item. Any creature (other than the wielder of the weapon targeted by this spell) adjacent to that creature must succeed at a Reflex saving throw or take 1d6 points of piercing and slashing damage from flying shards. The shards also count as whatever special materials the sundered item was made of (for example, the shards from a shattered cold iron weapon are cold iron). Once the weapon's extra power is unleashed, the spell is discharged.</p>
</>};
const _suns_disdain = {title: "Sun's Disdain", jsx: <><h2 id="spell-suns_disdain-suns-disdain">Sun's Disdain</h2>
<SpellInfo id="1" source="Adventurer's Guide/17" school="trans" descriptors={["curse"]} arc={2} bld={2} clr={2} inq={2} orc={2} sha={2} sor={2} war={2} wit={2} wiz={2} ct="1 standard action" comp="V, S, M/DF (a piece of glass)" rTouch target="creature touched" dur="permanent" save="Will negates" resist="yes" />
<p>You alter a creature so the touch of the sun is hostile to it. The cursed creature gains light blindness and is blinded for 1 round if exposed to bright light, such as sunlight or the <Link to="/spell/daylight">daylight</Link> spell. The cursed creature is dazzled as long as it remains in areas of bright light, and it is treated as being particularly susceptible to sunlight for the purposes of resolving spells like <Link to="/spell/searing_light">searing light</Link>, <Link to="/spell/sunbeam">sunbeam</Link>, and <Link to="/spell/sunburst">sunburst</Link>.</p>
<h3 id="spell-suns_disdain-mass-suns-disdain">Mass Sun's Disdain</h3>
<SpellInfo id="2" source="Adventurer's Guide/17" school="trans" descriptors={["curse"]} arc={5} clr={5} inq={5} orc={5} sha={5} sor={5} war={5} wit={5} wiz={5} ct="1 standard action" comp="V, S, M/DF (a piece of glass)" rLong targets="one creature/level, no two of which can be more than 30 ft. apart" dur="permanent" save="Will negates" resist="yes" />
<p>This spell functions like sun's disdain, except that it can affect multiple creatures.</p>
</>};
const _whirlwind = {title: "Whirlwind", jsx: <><h2 id="spell-whirlwind-whirlwind">Whirlwind</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/369" school="evo" descriptors={["air"]} drd={8} sha={8} ct="1 standard action" comp="V, S, DF" rLong effect="cyclone 10 ft. wide at base, 30 ft. wide at top, and 30 ft. tall" dur="1 round/level (D)" save="Reflex negates; see text" resist="yes" />
<p>This spell creates a powerful cyclone of raging wind that moves through the air, along the ground, or over water at a speed of 60 feet per round. You can concentrate on controlling the cyclone's every movement or specify a simple program. Directing the cyclone's movement or changing its programmed movement is a standard action for you. The cyclone always moves during your turn. If the cyclone exceeds the spell's range, it moves in a random, uncontrolled fashion for 1d3 rounds and then dissipates. (You can't regain control of the cyclone, even if it comes back within range.)</p>
<p>Any Large or smaller creature that comes in contact with the spell effect must succeed on a Reflex save or take 3d6 points of damage. A Medium or smaller creature that fails its first save must succeed on a second one or be picked up bodily by the cyclone and held suspended in its powerful winds, taking 1d8 points of damage each round on your turn with no save allowed. You may direct the cyclone to eject any carried creatures whenever you wish, depositing the hapless souls wherever the cyclone happens to be when they are released.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-whirlwind--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Whirlwind</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 112</Link><br/>The cyclone becomes 15 feet wide at the base, 40 feet wide at the top, and 40 feet tall. The cyclone's effect on Large or smaller creatures also applies to Huge creatures, and its damage increases to 3d8 points of damage. The effect on Medium or smaller creatures also applies to Large creatures, and the damage it deals each turn increases to 2d6 points of damage.</p>
<p><em>Augmented (8th):</em> If you expend three uses of mythic power, the cyclone's size increases to 50 feet wide at the base, 150 feet wide at the top, and 150 feet tall. Creatures and objects of all sizes touched by the whirlwind take 8d8 points of damage (Reflex negates), and the damage dealt to those trapped in the cyclone increases to 6d6 points of damage per round. Additionally, unattended objects smaller than 30 feet to a side are swept up in the effect. The area within 20 feet of the whirlwind is treated as severe wind, and within 40 feet it is treated as strong wind.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _whispering_lore = {title: "Whispering Lore", jsx: <><h2 id="spell-whispering_lore-whispering-lore">Whispering Lore</h2>
<SpellInfo id="1" source="Advanced Race Guide/29" school="div" clr={2} drd={1} hnt={1} med={1} orc={2} psy={1} rgr={1} war={2} wit={1} ct="1 full-round action" comp="V, S, M/DF (an owl's beak)" rPers target="you" dur="10 minutes/level (D)" />
<blockquote>
<p><em>Most know of elven magic for its power, but those who delve deeper discover its elegance and ties to the natural world. The following spell is just one that the <Link to="/race/elves">elves</Link> are known for.</em></p>
</blockquote>
<p>Upon casting this spell, you are able to gain knowledge from the land itself. As you walk through the terrain, it whisper information in a language you understand, though the whispering is so rambling it is hard to distinguish useful information. This whispering grants you a +4 insight bonus on a single Knowledge skill type appropriate to the type of terrain you are in. If you are within a cold, desert, forest, jungle, mountain, plains, swamp, or water environment, you gain the bonus on Knowledge (nature) checks. If you are within an underground environment, you gain the bonus on Knowledge (dungeoneering) checks. If you are within an urban environment, you gain the bonus on Knowledge (local) checks. If you are on a plane other than the Material Plane, you gain the bonus on Knowledge (planes) checks. If you enter a new terrain, you lose the previous terrain's skill bonus and gain the new bonus.</p>
</>};
const _whispering_wind = {title: "Whispering Wind", jsx: <><h2 id="spell-whispering_wind-whispering-wind">Whispering Wind</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/369" school="trans" descriptors={["air"]} arc={2} brd={2} inq={2} med={2} mes={2} psy={2} rma={2} skd={2} sor={2} wiz={2} ct="1 standard action" comp="V, S" r="1 mile/level" area="10-ft.-radius spread" dur="no more than 1 hour/level or until discharged (destination is reached)" save="none" resist="no" />
<p>You send a message or sound on the wind to a designated spot. The whispering wind travels to a specific location within range that is familiar to you, provided that it can find a way to the location. A whispering wind is as gentle and unnoticed as a zephyr until it reaches the location. It then delivers its whisper-quiet message or other sound. Note that the message is delivered regardless of whether anyone is present to hear it. The wind then dissipates.</p>
<p>You can prepare the spell to bear a message of no more than 25 words, cause the spell to deliver other sounds for 1 round, or merely have the whispering wind seem to be a faint stirring of the air. You can likewise cause the whispering wind to move as slowly as 1 mile per hour or as quickly as 1 mile per 10 minutes.</p>
<p>When the spell reaches its objective, it swirls and remains in place until the message is delivered. As with <Link to="/spell/magic_mouth">magic mouth</Link>, whispering wind cannot speak verbal components, use command words, or activate magical effects.</p>
</>};
const _wicker_horse = {title: "Wicker Horse", jsx: <><h2 id="spell-wicker_horse-wicker-horse">Wicker Horse</h2>
<SpellInfo id="1" source="Villain Codex/177" school="conj" subschools={["creat"]} occ={2} sha={2} sum={2} usm={2} wit={2} ct="10 minutes; see text" comp="V, S, M/DF (a reed or twig)" rTouch effect="a horse-like wicker construct" dur="1 hour/level (D)" save="none" resist="no" />
<p>Reeds, grasses, creepers, or thin tree branches (your choice) that you touch animate, twisting and bending to form a wicker horse complete with a riding saddle. The object is animated, but retains a wicker-like appearance.</p>
<p>A wicker horse has the statistics of a light horse or a pony, except it gains construct traits and counts as both an animal and a construct for the purposes of spells and effects. It gains a number of extra hit points equal to your caster level. It has no skills or feats except as noted below.</p>
<p>A horse made of reeds gains a number of Swim ranks equal to your caster level. A horse made of grasses gains the <Link to="/feat/run">Run</Link> feat and a number of Acrobatics ranks equal to your caster level. A horse made of creepers gains a number of ranks in Climb and Stealth equal to your caster level. A horse made of tree branches is continually affected by barkskin, as cast by a magic-user with a caster level equal to yours.</p>
<p>The wicker horse does not follow any commands given with the Handle Animal skill, and only you can ride it. You can cast this spell only in an environment where suitable plant material is available. When the spell ends or the horse loses all its hit points, the horse falls apart.</p>
</>};
const _widen_auras = {title: "Widen Auras", jsx: <><h2 id="spell-widen_auras-widen-auras">Widen Auras</h2>
<SpellInfo id="1" source="Advanced Class Guide/199" school="trans" ant={2} pal={2} ct="1 standard action" comp="V" rPers target="you" dur="1 minute/level (D)" />
<p>The range of your antipaladin or paladin auras doubles. For example, if you're a paladin, your aura of courage affects allies within 20 feet instead of within 10 feet.</p>
</>};
const _wild_instinct = {title: "Wild Instinct", jsx: <><h2 id="spell-wild_instinct-wild-instinct">Wild Instinct</h2>
<SpellInfo id="1" source="Heroes of the Wild/31" school="div" bld={2} drd={2} hnt={2} rgr={2} sha={2} ct="1 standard action" comp="V, S, DF" rPers target="you" dur="8 hours" />
<p>This spell sharpens your senses, allowing you to perceive threats you would otherwise miss. You become aware of sounds and smells you would normally overlook, and even retain the ability to detect threats when soundly asleep. For the duration of the spell, you gain a +5 bonus on Perception checks to act in a surprise round. Additionally, you don't take a penalty on Perception checks while sleeping, and can choose to wake if you notice a threat while asleep.</p>
</>};
const _wilderness_soldiers = {title: "Wilderness Soldiers", jsx: <><h2 id="spell-wilderness_soldiers-wilderness-soldiers">Wilderness Soldiers</h2>
<SpellInfo id="1" source="Ultimate Combat/249" school="trans" drd={2} hnt={2} rgr={2} ct="1 standard action" comp="V, S" rFt={30} area="30-ft.-radius emanation, centered on you" dur="1 round/level" save="none" resist="no" />
<p>You call on the plants nearby to aid you in combat. This spell is ineffective if no plants you can direct are within the area. You can spend a swift action and/or a standard action on each of your turns to direct one of the following attacks. The attack bonus or CMB for these attacks equals your base attack bonus + your Wisdom modifier. You grant a +1 bonus per three caster levels (maximum +5) on damage rolls due to this spell. Your wilderness soldiers never provoke attacks of opportunity, and they do not count as allies for flanking or other purposes.</p>
<p><em>Tree:</em> A tree makes a melee attack with a 10-foot reach from its trunk. A hit deals an amount of damage equal to 1d8 points + your Wisdom modifier. The tree can instead attempt a bull rush, drag, or reposition combat maneuver with the same reach, but the tree cannot move itself.</p>
<p><em>Undergrowth or Hedgerow:</em> Acting as a Medium creature, one square of undergrowth or hedgerow attempts a grapple combat maneuver against an opponent within or adjacent to that square. Heavy undergrowth gains a +2 bonus to its CMD. Undergrowth cannot move the grapple or pin a foe, but it can deal an amount of damage equal to 1d4 points + your Wisdom modifier by making a successful grapple check against a foe it is grappling. The undergrowth's CMD is 5 + its CMB. If you fail to direct the undergrowth to maintain the grapple, it releases its opponent.</p>
</>};
const _wind_blades = {title: "Wind Blades", jsx: <><h2 id="spell-wind_blades-wind-blades">Wind Blades</h2>
<SpellInfo id="1" source="Advanced Race Guide/160" school="trans" descriptors={["air"]} arc={5} drd={5} hnt={5} mag={5} sor={5} wit={5} wiz={5} ct="1 standard action" comp="V, S" rTouch target="creature touched" dur="1 round/level" save="Will negates" resist="yes" />
<blockquote>
<p><em><Link to="/race/sylph">Sylphs</Link> have access to the following spell.</em></p>
</blockquote>
<p>You harden the air around the target into jagged invisible blades that deal damage based on how fast the target moves. On its turn, the target takes 1d6 points of slashing damage if it moves at least 5 feet, plus 1d6 points of slashing damage for each additional 10 feet of movement. Movement that doesn't pass through air (such as burrowing, swimming, or teleportation) doesn't cause this damage.</p>
<p>In areas of strong wind, the target takes damage on its turn, even if it doesn't move. The wind deals 1d8 points of slashing damage for strong wind, plus 1d8 for every wind category above strong. This extra damage does not occur from instantaneous wind effects (such as <Link to="/spell/gust_of_wind">gust of wind</Link>), only from wind effects that last at least 1 round.</p>
</>};
const _wind_walk = {title: "Wind Walk", jsx: <><h2 id="spell-wind_walk-wind-walk">Wind Walk</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/369" school="trans" descriptors={["air"]} alc={6} clr={6} drd={7} inv={6} orc={6} sha={7} war={6} ct="1 standard action" comp="V, S, DF" rTouch targets="you and one touched creature per three levels" dur="1 hour/level (d); see text" save="no and Will negates (harmless)" resist="no and yes (harmless)" />
<p>You alter the substance of your body to a cloud-like vapor (as the <Link to="/spell/gaseous_form">gaseous form</Link> spell) and move through the air, possibly at great speed. You can take other creatures with you, each of which acts independently.</p>
<p>Normally, a wind walker flies at a speed of 10 feet with perfect maneuverability. If desired by the subject, a magical wind wafts a wind walker along at up to 600 feet per round (60 mph) with poor maneuverability. Wind walkers are not invisible but rather appear misty and translucent. If fully clothed in white, they are 80% likely to be mistaken for clouds, fog, vapors, or the like.</p>
<p>A wind walker can regain its physical form as desired and later resume the cloud form. Each change to and from vaporous form takes 5 rounds, which counts toward the duration of the spell (as does any time spent in physical form). As noted above, you can dismiss the spell, and you can even dismiss it for individual wind walkers and not others.</p>
<p>For the last minute of the spell's duration, a wind walker in cloud form automatically descends 60 feet per round (for a total of 600 feet), though it may descend faster if it wishes. This descent serves as a warning that the spell is about to end.</p>
</>};
const _wind_wall = {title: "Wind Wall", jsx: <><h2 id="spell-wind_wall-wind-wall">Wind Wall</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/370" school="evo" descriptors={["air"]} arc={3} bld={3} clr={3} drd={3} hnt={2} mag={3} occ={3} orc={3} rgr={2} sha={3} sor={3} spr={3} sum={2} usm={3} war={3} wiz={3} ct="1 standard action" comp="V, S, M/DF (a tiny fan and an exotic feather)" rMed effect="wall up to 10 ft./level long and 5 ft./level high (S)" dur="1 round/level" save="none; see text" resist="yes" />
<p>An invisible vertical curtain of wind appears. It is 2 feet thick and of considerable strength. It is a roaring blast sufficient to blow away any bird smaller than an eagle, or tear papers and similar materials from unsuspecting hands. (A Reflex save allows a creature to maintain its grasp on an object.) Tiny and Small flying creatures cannot pass through the barrier. Loose materials and cloth garments fly upward when caught in a wind wall. Arrows and bolts are deflected upward and miss, while any other normal ranged weapon passing through the wall has a 30% miss chance. (A giant-thrown boulder, a siege engine projectile, and other massive ranged weapons are not affected.) Gases, most gaseous breath weapons, and creatures in gaseous form cannot pass through the wall (although it is no barrier to incorporeal creatures).</p>
<p>While the wall must be vertical, you can shape it in any continuous path along the ground that you like. It is possible to create cylindrical or square wind walls to enclose specific points.</p>
</>};
const _winds_of_vengeance = {title: "Winds of Vengeance", jsx: <><h2 id="spell-winds_of_vengeance-winds-of-vengeance">Winds of Vengeance</h2>
<SpellInfo id="1" source="Advanced Player's Guide/256" school="evo" descriptors={["air"]} arc={9} clr={9} drd={9} orc={9} sha={9} sor={9} wiz={9} ct="1 standard action" comp="V, S, DF" rPers target="you" dur="1 minute/level" />
<p>You surround yourself with a buffeting shroud of supernatural, tornado-force winds. These winds grant you a fly speed of 60 feet with perfect maneuverability. Neither your armor nor your load affects this fly speed. The winds shield you from any other wind effects, and form a shell of breathable air around you, allowing you to fly and breathe underwater or in outer space. Ranged weapons (including giant-thrown boulders, siege weapon projectiles, and other massive ranged weapons) passing through the winds are deflected by the winds and automatically miss you. Gases and most gaseous breath weapons cannot pass though the winds.</p>
<p>In addition, when a creature hits you with a melee attack, you can shape your winds so they lash out at that creature as an immediate action. The creature must make a Fortitude saving throw or take 5d8 points of bludgeoning damage and be knocked prone (if on the ground). On a failed save, Huge flying creatures are checked and Large-sized or smaller flying creatures are blown away instead of knocked prone. On a successful save, the damage is halved and the creature is not knocked prone (or checked or blown away).</p>
</>};
const _windy_escape = {title: "Windy Escape", jsx: <><h2 id="spell-windy_escape-windy-escape">Windy Escape</h2>
<SpellInfo id="1" source="Advanced Race Guide/160" school="trans" descriptors={["air"]} arc={1} bld={1} brd={1} drd={1} hnt={1} mag={1} rma={1} skd={1} sor={1} wiz={1} ct="1 immediate action" comp="V, S" rPers target="you" dur="instantaneous" />
<blockquote>
<p><em><Link to="/race/sylph">Sylphs</Link> have access to the following spell.</em></p>
</blockquote>
<p>You respond to an attack by briefly becoming vaporous and insubstantial, allowing the attack to pass harmlessly through you. You gain DR 10/magic against this attack and are immune to any poison, sneak attacks, or critical hit effect from that attack.</p>
<p>You cannot use windy escape against an attack of opportunity you provoked by casting a spell, using a spell-like ability, or using any other magical ability that provokes an attack of opportunity when used.</p>
</>};
const _wing_bounty = {title: "Wing Bounty", jsx: <><h2 id="spell-wing_bounty-wing-bounty">Wing Bounty</h2>
<SpellInfo id="1" source="Ultimate Wilderness/14" school="conj" subschools={["creat"]} drd={2} hnt={2} sha={2} ct="1 standard action" comp="V, S, DF" rFt={0} effect="2d4 berries + 2 berries/level" dur="1 day/level" save="none" resist="no" />
<blockquote>
<p><em><Link to="/race/gathlain">Gathlains</Link> have access to the following spell.</em></p>
</blockquote>
<p>Your wings sprout a variety of colorful and flavorful berries. Each berry functions as if affected by <Link to="/spell/goodberry">goodberry</Link>. You can choose for one affected berry to also be poisonous (as striped toadstool); only you and druids of 5th level or higher can tell which is which without magic.</p>
</>};
const _wing_thorns = {title: "Wing Thorns", jsx: <><h2 id="spell-wing_thorns-wing-thorns">Wing Thorns</h2>
<SpellInfo id="1" source="Ultimate Wilderness/14" school="trans" descriptors={["poi"]} alc={3} ant={3} bld={3} drd={3} hnt={3} inv={3} mag={4} sha={3} wit={3} ct="1 standard action" comp="V, S" rPers target="you" dur="1 round/level" />
<blockquote>
<p><em><Link to="/race/gathlain">Gathlains</Link> have access to the following spell.</em></p>
</blockquote>
<p>Your wings sprout poisonous thorns each the size of a dagger. You can use these thorns like armor spikes. In addition, you can make two wing attacks as primary natural weapons. If you are Small, the wings deal 1d3 points of bludgeoning and piercing damage plus your Strength modifier (unless you also attack with a weapon, in which case they are treated as a secondary natural weapon). A creature damaged by your wing thorns experiences intense itching, gaining the sickened condition while the spell lasts unless it succeeds at a Fortitude saving throw.</p>
</>};
const _winged_sword = {title: "Winged Sword", jsx: <><h2 id="spell-winged_sword-winged-sword">Winged Sword</h2>
<SpellInfo id="1" source="Arcane Anthology/10" school="trans" arc={2} bld={2} inq={3} mag={2} occ={2} pal={2} sor={2} wiz={2} ct="1 standard action" comp="V, S" rClose target="one melee weapon" dur="10 minutes/level" save="Will negates (object, harmless)" resist="yes (object, harmless)" />
<p>The weapon targeted by this spell grows small feathered wings. For the duration of the spell, the weapon acts as if it had the throwing weapon special ability. This spell can be used in place of magic stone as a prerequisite for the throwing weapon special ability.</p>
</>};
const _winter_feathers = {title: "Winter Feathers", jsx: <><h2 id="spell-winter_feathers-winter-feathers">Winter Feathers</h2>
<SpellInfo id="1" source="Advanced Race Guide/167" school="abjur" arc={1} bld={1} clr={1} drd={1} hnt={1} inq={1} orc={1} rgr={1} sor={1} war={1} wiz={1} ct="1 standard action" comp="V, S" rTouch target="feathered creature touched" dur="24 hours" save="Will negates (harmless)" resist="yes (harmless)" />
<blockquote>
<p><em><Link to="/race/tengu">Tengus</Link> have access to the following spell.</em></p>
</blockquote>
<p>The target's feathers thicken and fluff up to ward against winter's chill. The target suffers no harm from being in a cold environment, and can exist comfortably in conditions as low as -50 degrees Fahrenheit without having to make Fortitude saves. The creature's equipment is likewise protected. This spell doesn't provide any protection from cold damage, nor does it protect against other environmental hazards associated with cold weather (such as slipping on ice, blindness from snow, and so on).</p>
<p>When you cast this spell, you may have the target's feathers turn white for the duration, granting it a +4 circumstance bonus on Stealth checks to hide in ice and snow.</p>
</>};
const _winter_grasp = {title: "Winter Grasp", jsx: <><h2 id="spell-winter_grasp-winter-grasp">Winter Grasp</h2>
<SpellInfo id="1" source="Ultimate Wilderness/237;People of the North/26" school="conj" subschools={["creat"]} descriptors={["cold","water"]} drd={2} hnt={2} sha={2} wit={2} ct="1 standard action" comp="V, S, M/DF (ground glass)" rMed area="20-ft.-radius spread" dur="1 round/level" save="none" resist="no" />
<p>Ice encrusts the ground, radiating supernatural cold and making it hard for creatures to maintain their balance. This icy ground is treated as normal ice, forcing creatures to spend 2 squares of movement to enter an icy square and increasing the DC of Acrobatics checks in the area by 5. A creature that begins its turn in the affected area takes 1d6 points of cold damage and takes a -2 penalty on saving throws against spells with the cold descriptor for 1 round.</p>
</>};
const _wish = {title: "Wish", jsx: <><h2 id="spell-wish-wish">Wish</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/370" school="uni" arc={9} psy={9} sor={9} wiz={9} ct="1 standard action" comp="V, S, M (diamond worth 25,000 gp)" rText effect="see text" dur="see text" save="none, see text" resist="yes" />
<p>Wish is the mightiest spell a wizard or sorcerer can cast. By simply speaking aloud, you can alter reality to better suit you. Even wish, however, has its limits. A wish can produce any one of the following effects.</p>
<ul>
<li>Duplicate any sorcerer/wizard spell of 8th level or lower, provided the spell does not belong to one of your opposition schools.</li>
<li>Duplicate any non-sorcerer/wizard spell of 7th level or lower, provided the spell does not belong to one of your opposition schools.</li>
<li>Duplicate any sorcerer/wizard spell of 7th level or lower, even if it belongs to one of your opposition schools.</li>
<li>Duplicate any non-sorcerer/wizard spell of 6th level or lower, even if it belongs to one of your opposition schools.</li>
<li>Undo the harmful effects of many other spells, such as geas/quest or insanity.</li>
<li>Grant a creature a +1 inherent bonus to an ability score. Two to five wish spells cast in immediate succession can grant a creature a +2 to +5 inherent bonus to an ability score (two wishes for a +2 inherent bonus, three wishes for a +3 inherent bonus, and so on). Inherent bonuses are instantaneous, so they cannot be dispelled. <strong>Note:</strong> An inherent bonus may not exceed +5 for a single ability score, and inherent bonuses to a particular ability score do not stack, so only the best one applies.</li>
<li>Remove injuries and afflictions. A single wish can aid one creature per caster level, and all subjects are cured of the same kind of affliction. For example, you could heal all the damage you and your companions have taken, or remove all poison effects from everyone in the party, but not do both with the same wish.</li>
<li>Revive the dead. A wish can bring a dead creature back to life by duplicating a <Link to="/spell/resurrection">resurrection</Link> spell. A wish can revive a dead creature whose body has been destroyed, but the task takes two wishes: one to recreate the body and another to infuse the body with life again. A wish cannot prevent a character who was brought back to life from gaining a permanent negative level.</li>
<li>Transport travelers. A wish can lift one creature per caster level from anywhere on any plane and place those creatures anywhere else on any plane regardless of local conditions. An unwilling target gets a Will save to negate the effect, and spell resistance (if any) applies.</li>
<li>Undo misfortune. A wish can undo a single recent event. The wish forces a reroll of any roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a wish could undo an opponent's successful save, a foe's successful critical hit (either the attack roll or the critical roll), a friend's failed save, and so on. The reroll, however, may be as bad as or worse than the original roll. An unwilling target gets a Will save to negate the effect, and spell resistance (if any) applies.</li>
</ul>
<p>You may try to use a wish to produce greater effects than these, but doing so is dangerous. (The wish may pervert your intent into a literal but undesirable fulfillment or only a partial fulfillment, at the GM's discretion.)</p>
<p>Duplicated spells allow saves and spell resistance as normal (but save DCs are for 9th-level spells).</p>
<p>When a wish duplicates a spell with a material component that costs more than 10,000 gp, you must provide that component (in addition to the 25,000 gp diamond component for this spell).</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-wish--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Wish</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 112</Link><br/>When using mythic wish to duplicate another spell, you can duplicate a mythic spell you know (if you're a spontaneous caster) or have prepared (if you're a caster who prepares spells). If you don't know or haven't prepared the mythic spell, you can expend a second use of mythic power to duplicate the mythic version of the desired spell.</p>
<p>You can also produce any one of the following effects that modify or replace effects listed in the non-mythic wish spell description:</p>
<ul>
<li>If you use mythic wish to remove injuries and afflictions, you can expend a number of uses of mythic power to remove that number of additional afflictions from all affected creatures.</li>
<li>If you use mythic wish to revive the dead, you can expend a second use of mythic power to negate the target's permanent negative level from the resurrection.</li>
<li>Alter fate. By expending a second use of mythic power, you can cast mythic wish as an immediate action before a 1d20 roll is attempted and choose what number you want to come up on the die.</li>
</ul>
<p><em>Augmented:</em> If you expend two uses of mythic power, you can cast a silent, stilled mythic wish, even if you're helpless or couldn't otherwise take actions (but not unconscious).</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _with_the_wind = {title: "With the Wind", jsx: <><h2 id="spell-with_the_wind-with-the-wind">With the Wind</h2>
<SpellInfo id="1" source="Ultimate Wilderness/237" school="abjur" descriptors={["air"]} arc={2} bld={2} drd={2} hnt={2} mag={2} occ={2} rgr={2} sor={2} spr={2} wiz={2} ct="1 standard action" comp="V, S" rClose target="one creature" dur="1 minute/level" save="Will negates (harmless)" resist="yes (harmless)" />
<p>You create eddies in the air around the subject that protect it from being checked or blown away. The target can't be moved by winds of less than windstorm force unless it wishes to be.</p>
</>};
const _withdraw_affliction = {title: "Withdraw Affliction", jsx: <><h2 id="spell-withdraw_affliction-withdraw-affliction">Withdraw Affliction</h2>
<SpellInfo id="1" source="Occult Adventures/191" school="necro" psy={6} sha={6} spr={5} wit={7} ct="1 standard action" comp="V, S" rTouch target="one afflicted creature" dur="instantaneous" save="none" resist="yes" />
<p>You push your hand into the subject, then withdraw an affliction from the body of the sufferer as a tangible object. This extraction appears as a slimy mass of flesh. The target creature is cured as if affected by <Link to="/spell/remove_disease">remove disease</Link>, <Link to="/spell/remove_curse">remove curse</Link>, or <Link to="/spell/neutralize_poison">neutralize poison</Link>.</p>
<p>In addition, this slimy mass allows you to deliver the affliction to another as a touch attack, as if holding the charge for a touch spell. It has the same effect as the original affliction, with the same saving throw and DC.</p>
</>};
const _wither_limb = {title: "Wither Limb", jsx: <><h2 id="spell-wither_limb-wither-limb">Wither Limb</h2>
<SpellInfo id="1" source="Horror Adventures/131" school="necro" arc={6} clr={6} inq={6} orc={6} sha={6} sor={6} spr={6} war={6} wit={6} wiz={6} ct="1 standard action" comp="V, S" rTouch target="living creature touched" dur="instantaneous" save="Fortitude negates" resist="yes" />
<p>You cause one limb of the target to shrivel and weaken. The target takes 2d6 points of damage. The points are permanently lost until the target's limb is restored by <Link to="/spell/heal">heal</Link>, <Link to="/spell/limited_wish">limited wish</Link>, <Link to="/spell/miracle">miracle</Link>, <Link to="/spell/regenerate">regenerate</Link>, or <Link to="/spell/wish">wish</Link>. Wither limb affects only living creatures of the humanoid or monstrous humanoid type, or similar bipedal creatures at the GM's discretion. You choose the limb affected. This spell's effects stack, until all a target's arms and legs (or equivalent limbs) are withered.</p>
<p><em>Arm:</em> The target looses the use of one arm, which might affect what weapons and shields it can use. The creature must immediately drop all objects held in the withered limb, though it can shift a two-handed weapon it is holding in both hands to a remaining arm as an immediate action. Worn objects' gauntlets, rings, and magic items in the <Link to="/rule/wrist_slot">wrist slot</Link> remain. This prevents the creature from using two-weapon fighting, claw attacks from that arm, and so on. If multiple castings of this spell wither all of a creature's arms, it can't manipulate objects or cast spells requiring somatic components.</p>
<p><em>Leg:</em> The creature's movement speeds are halved, except for flying or other speeds that don't involve its legs. If multiple castings of this spell wither all of a creature's legs, it can only crawl at a speed of 5 feet each round.</p>
<p><em>Wing:</em> The creature loses access to any fly speed that depends on its wings if even a single wing is withered.</p>
</>};
const _witness = {title: "Witness", jsx: <><h2 id="spell-witness-witness">Witness</h2>
<SpellInfo id="1" source="Ultimate Magic/249" school="div" subschools={["scry"]} brd={3} inq={3} med={3} mes={3} occ={3} psy={3} skd={3} wit={3} ct="1 standard action" comp="V, S" rLong target="one living creature" dur="1 minute/level (D)" save="Will negates (harmless)" resist="yes (harmless)" />
<p>You link your senses to the target, allowing you to see and hear through its eyes and ears. As a move action you can shift your senses from yourself to the target or back again. When using the target's senses, you are blind and deaf. When perceiving through the target, you use its normal and special senses (such as darkvision), not your own.</p>
</>};
const _wizened_appearance = {title: "Wizened Appearance", jsx: <><h2 id="spell-wizened_appearance-wizened-appearance">Wizened Appearance</h2>
<SpellInfo id="1" source="Ultimate Intrigue/229" school="trans" subschools={["poly"]} alc={1} arc={1} brd={1} inv={1} med={1} mes={1} occ={1} psy={1} skd={1} sor={1} wit={1} wiz={1} ct="1 standard action" comp="V, S" rTouch target="creature touched" dur="1 hour/level" save="Fortitude negates" resist="yes" />
<p>You polymorph your target to look like an older version of itself. You select how much older (for example, -10 years older- or "as an adult"). You can't otherwise change the target's appearance other than those details directly associated with aging (for example, a target's hair might turn gray or the target might develop liver spots). This spell allows children of creatures that are Medium or smaller when fully grown to grow one size category to the normal, adult size of that type of creature, but otherwise the selected age increase doesn't alter the creature's size. A change in size doesn't alter the target's ability scores. This spell doesn't affect or cause any age-based modifications to ability scores or other age-related effects like dragon age categories or natural metamorphoses.</p>
<p>Wizened appearance and youthful appearance counter and dispel each other.</p>
</>};
const _wood_shape = {title: "Wood Shape", jsx: <><h2 id="spell-wood_shape-wood-shape">Wood Shape</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/370" school="trans" drd={2} hnt={2} occ={2} sha={2} ct="1 standard action" comp="V, S, DF" rTouch target="one touched piece of wood no larger than 10 cu. ft. + 1 cu. ft./level" dur="instantaneous" save="Will negates (object)" resist="yes (object)" />
<p>Wood shape enables you to form one existing piece of wood into any shape that suits your purpose. While it is possible to make crude coffers, doors, and so forth, fine detail isn't possible. There is a 30% chance that any shape that includes moving parts simply doesn't work.</p>
</>};
const _wooden_phalanx = {title: "Wooden Phalanx", jsx: <><h2 id="spell-wooden_phalanx-wooden-phalanx">Wooden Phalanx</h2>
<SpellInfo id="1" source="Ultimate Magic/249" school="conj" subschools={["creat"]} arc={9} clr={9} orc={9} sor={9} wiz={9} ct="1 standard action" comp="V, S" rMed effect="three or more wood golems, no two of which can be more than 30 ft. apart (see text)" dur="1 hour/level (D)" save="none" resist="no" />
<p>You create 1d4+2 wood golems with the advanced template. The golems willingly aid you in combat or battle, perform a specific mission, or serve as bodyguards. You can only have one wooden phalanx spell in effect at one time. If you cast this spell while another casting is still in effect, the previous casting is dispelled.</p>
</>};
const _wooden_wing_shield = {title: "Wooden Wing Shield", jsx: <><h2 id="spell-wooden_wing_shield-wooden-wing-shield">Wooden Wing Shield</h2>
<SpellInfo id="1" source="Ultimate Wilderness/14" school="trans" bld={4} drd={4} hnt={4} mag={5} sha={4} sum={4} ct="1 immediate action" comp="S" rPers target="you" dur="1 round/level or until you move" />
<blockquote>
<p><em><Link to="/race/gathlain">Gathlains</Link> have access to the following spell.</em></p>
</blockquote>
<p>Your wings transmute into a wooden barrier resembling a tower shield to block attacks, granting you a +4 shield bonus to AC. If you move, the spell ends immediately.</p>
</>};
const _woodland_rune = {title: "Woodland Rune", jsx: <><h2 id="spell-woodland_rune-woodland-rune">Woodland Rune</h2>
<SpellInfo id="1" source="Wilderness Origins/13" school="abjur" drd={3} hnt={3} rgr={3} sha={3} wit={3} ct="10 minutes" comp="V, S" rFt={0} effect="one rune" dur="permanent until discharged" save="Fortitude negates" resist="yes" />
<p>Created by Ghorus as a safety measure to limit his enemies' movements, this spell allows you to inscribe a powerful rune on any surface. Woodland rune triggers when any non-plant creature (apart from the caster) moves within 30 feet of the rune. When it's triggered, roots and branches sprout from the ground, catching all creatures within a 30-foot burst of the rune and hindering their movement as if they were moving through heavy undergrowth, though it does not provide concealment. Plant creatures and creatures under the effect of woodland stride or <Link to="/spell/freedom_of_movement">freedom of movement</Link> are not affected by this spell. In all other respects, this spell functions as <Link to="/spell/symbol_of_death">symbol of death</Link>.</p>
</>};
const _word_of_chaos = {title: "Word of Chaos", jsx: <><h2 id="spell-word_of_chaos-word-of-chaos">Word of Chaos</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/371" school="evo" descriptors={["chaotic","sonic"]} clr={7} inq={6} orc={7} ct="1 standard action" comp="V" rFt={40} area="nonchaotic creatures in a 40-ft. radius spread centered on you" dur="instantaneous" save="none or Will negates; see text" resist="yes" />
<p>Any nonchaotic creature within the area of a word of chaos spell suffers the following ill effects, depending on their HD.</p>
<ScrollContainer id="spell-word_of_chaos--table-0"><table>
<thead>
<tr>
<th>HD</th>
<th>Effect</th>
</tr>
</thead>
<tbody><tr>
<td>Equal to caster level</td>
<td>Deafened</td>
</tr>
<tr>
<td>Up to caster level - 1</td>
<td>Stunned, deafened</td>
</tr>
<tr>
<td>Up to caster level - 5</td>
<td>Confused, stunned, deafened</td>
</tr>
<tr>
<td>Up to caster level - 10</td>
<td>Killed, confused, stunned, deafened</td>
</tr>
</tbody></table></ScrollContainer>
<p>The effects are cumulative and concurrent. A successful Will save reduces or eliminates these effects. Creatures affected by multiple effects make only one save and apply the result to all the effects.</p>
<p><em>Deafened:</em> The creature is deafened for 1d4 rounds. Save negates.</p>
<p><em>Stunned:</em> The creature is stunned for 1 round. Save negates.</p>
<p><em>Confused:</em> The creature is confused for 1d10 minutes. This is a mind-affecting enchantment effect. Save reduces the confused effect to 1 round.</p>
<p><em>Killed:</em> Living creatures die. Undead creatures are destroyed. Save negates. If the save is successful, the creature instead takes 3d6 points of damage + 1 point per caster level (maximum +25).</p>
<p>Furthermore, if you are on your home plane when you cast this spell, nonchaotic extraplanar creatures within the area are instantly banished back to their home planes. Creatures so banished cannot return for at least 24 hours. This effect takes place regardless of whether the creatures hear the word of chaos or not. The banishment effect allows a Will save (at a -4 penalty) to negate.</p>
<p>Creatures whose HD exceed your caster level are unaffected by word of chaos.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-word_of_chaos--table-1"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Word of Chaos</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 112</Link><br/>When determining the spell's effect on non-mythic creatures, add your tier to your caster level. Non-chaotic creatures that fail their saves against the spell also take a -4 penalty on attack rolls and saving throws, and their spell resistance decreases by 5 for as long as the spell's other effects last.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _word_of_recall = {title: "Word of Recall", jsx: <><h2 id="spell-word_of_recall-word-of-recall">Word of Recall</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/371" school="conj" subschools={["tele"]} clr={6} drd={8} orc={6} psy={7} war={6} ct="1 standard action" comp="V" r="unlimited" target="you and touched objects or other willing creatures" dur="instantaneous" save="none or Will negates (harmless, object)" resist="no or yes (harmless, object)" />
<p>Word of recall teleports you instantly back to your sanctuary when the word is uttered. You must designate the sanctuary when you prepare the spell, and it must be a very familiar place. The actual point of arrival is a designated area no larger than 10 feet by 10 feet. You can be transported any distance within a plane but cannot travel between planes. You can transport, in addition to yourself, any objects you carry, as long as their weight doesn't exceed your maximum load. You may also bring one additional willing Medium or smaller creature (carrying gear or objects up to its maximum load) or its equivalent per three caster levels. A Large creature counts as two Medium creatures, a Huge creature counts as two Large creatures, and so forth. All creatures to be transported must be in contact with one another, and at least one of those creatures must be in contact with you. Exceeding this limit causes the spell to fail.</p>
<p>An unwilling creature can't be teleported by word of recall. Likewise, a creature's Will save (or spell resistance) prevents items in its possession from being teleported. Unattended, nonmagical objects receive no saving throw.</p>
</>};
const _word_of_resolve = {title: "Word of Resolve", jsx: <><h2 id="spell-word_of_resolve-word-of-resolve">Word of Resolve</h2>
<SpellInfo id="1" source="Ultimate Magic/249" school="abjur" pal={1} ct="1 immediate action" comp="V, DF" rClose target="one ally" dur="instantaneous" save="Will negates (harmless)" resist="yes (harmless)" />
<p>You focus your aura on one ally, allowing it to reroll a failed saving throw against a charm or fear effect with a +4 sacred bonus. If you do not have the aura of courage class ability, this spell has no effect on the target's fear. If you do not have the aura of resolve class ability, this spell has no effect on any charm effects on the target.</p>
</>};
const _world_wave = {title: "World Wave", jsx: <><h2 id="spell-world_wave-world-wave">World Wave</h2>
<SpellInfo id="1" source="Advanced Player's Guide/256" school="trans" descriptors={["earth","water"]} arc={9} drd={9} sor={9} wiz={9} ct="1 standard action" comp="V, S, DF" rText effect="see text" dur="1 round/level or 1 hour/level; see text" save="none" resist="yes" />
<p>You cause any sort of natural terrain (including water, forest, desert, tundra, and so on) to surge beneath your feet and safely propel you with devastating force over great distances. This wave of terrain undulates as it passes over the world, harmlessly lifting or stretching objects, creatures, and phenomena with a connection to nature but tearing through and damaging anything else it encounters. When you cast the spell you must choose the wave's type, either a tsunami or a swell. If you choose a tsunami, you create a 30-foot-high tidal wave of earth or water hurtling across the landscape that lasts for 1 round per level. If you choose a swell, you create a more controlled and gentle 5-foot-high wave that lasts for 1 hour per level. Regardless of its form or composition, the crest of the wave extends 10 feet in front of and behind you, and 5 feet per level to both your left and right. You can stand or sit on the crest of this wave without any fear of falling off it and can even lie down and sleep (or take any other actions you could take if standing on solid ground) as it travels. You can grant up to one additional creature per level the ability to safely accompany you on this wave.</p>
<p>When you first create the wave, you must choose its path by facing the direction you wish it to travel. Once you make this decision, you cannot change it. The wave, in either version, moves at eight times your base land speed. Any object, creature, or phenomena strongly connected to, or a part of, the natural world simply rises up and down with the wave as it passes, taking no damage or injury. However, anything else coming into contact with the wave takes either 6d6 points of bludgeoning damage (if the tsunami) or 1d6 points of bludgeoning damage (if the swell). The wave damages any manufactured object or structure. On the Material Plane, it also damages any creature of the aberration, construct, outsider, or undead type, or with the extraplanar subtype. Creatures with the construct or undead type take double damage from the wave. Other creatures, or creatures with even one druid class level (regardless of their type), are considered a part of the natural world and are unaffected by the wave. Note that on other planes of existence, what is considered to be a part of the natural world may vary at the GM's discretion.</p>
<p>The wave can travel up or down the sides of natural features so long as it does not exceed a 45-degree angle. You cannot alter the dimensions of the wave as it travels. If the wave encounters terrain that it cannot incorporate into itself, the wave simply flows over or around the obstacle (creatures riding the wave are harmlessly displaced to the side to avoid the obstacle) unless the terrain occupies one-half or more of the area of the wave's crest. In such cases the spell ends in 1d6 rounds as the wave falters and collapses, unless its duration would normally cause it to expire prior to that. The momentum of the wave carries you forward through this new terrain without any injury until it collapses, at which point you suffer the normal effects of the terrain in which you are deposited. Terrain the wave cannot incorporate includes anything primarily made from fire (such as lava), air (such as an open cliff face), or something man-made (such as a city).</p>
<p>You can only create the wave if standing on the ground. You cannot create it when underground or on terrain that it cannot incorporate.</p>
</>};
const _wracking_ray = {title: "Wracking Ray", jsx: <><h2 id="spell-wracking_ray-wracking-ray">Wracking Ray</h2>
<SpellInfo id="1" source="Champions of Corruption/25" school="necro" descriptors={["evil","pain"]} arc={5} sor={5} wit={5} wiz={5} ct="1 standard action" comp="V, M (an old bone, broken in the casting)" rMed effect="ray" dur="instantaneous" save="Fortitude half" resist="yes" />
<p>A ray of sickly greenish-gray negative energy issues forth from the palm of your hand. Make a ranged touch attack against the target. A creature hit by this spell is wracked by painful spasms as its muscles and sinews wither and twist. The subject takes 1d4 points of Dexterity and Strength damage per 3 caster levels you possess (maximum 5d4 each). This spell cannot reduce an ability score below 1. A successful Fortitude save halves the damage.</p>
</>};
const _wrath = {title: "Wrath", jsx: <><h2 id="spell-wrath-wrath">Wrath</h2>
<SpellInfo id="1" source="Advanced Player's Guide/257" school="ench" subschools={["comp"]} descriptors={["emo","mind"]} inq={1} ct="1 standard action" comp="V, S, M (a thorny vine)" rPers target="you" dur="1 minute" />
<p>You focus your anger against an enemy. Choose one enemy creature that you can see. You gain a +1 morale bonus on attack rolls and weapon damage rolls against that designated creature for every three caster levels you have (at least +1, maximum +3). You also receive this bonus on caster level checks made to overcome the creature's spell resistance, if any. At 12th level, you gain the benefits of the <Link to="/feat/improved_critical">Improved Critical</Link> feat on attack rolls made against the designated creature. This effect doesn't stack with any other effect that expands the threat range of a weapon.</p>
<h3 id="spell-wrath-shared-wrath">Shared Wrath</h3>
<SpellInfo id="2" source="Advanced Player's Guide/243" school="ench" subschools={["comp"]} descriptors={["emo","mind"]} inq={4} ct="1 standard action" comp="V, S, M (a thorny vine)" rClose targets="up to one creature/level, no two of which can be more than 30 ft. apart" dur="1 minute" save="Will negates (harmless)" resist="yes (harmless)" />
<p>This spell functions as wrath, except that you grant multiple creatures the bonuses against your designated foe. All subjects of shared wrath receive their bonuses against the same creature.</p>
</>};
const _wrathful_mantle = {title: "Wrathful Mantle", jsx: <><h2 id="spell-wrathful_mantle-wrathful-mantle">Wrathful Mantle</h2>
<SpellInfo id="1" source="Advanced Player's Guide/257" school="evo" descriptors={["force","light"]} clr={3} orc={3} pal={3} war={3} ct="1 standard action" comp="V, S, DF" r="touch or 5 ft.; see text" target="creature touched or all creatures within 5 ft.; see text" dur="1 minute/level" save="Will negates (harmless)" resist="yes (harmless)" />
<p>A shimmering mantle of light shrouds the subject, casting light like a torch. The subject of the spell gains a +1 resistance bonus on all saving throws per four caster levels (maximum +5 at 20th level). The subject can end the wrathful mantle at any time as a swift action to deal 2d8 points of force damage to all creatures within 5 feet.</p>
</>};
const _wrathful_weapon = {title: "Wrathful Weapon", jsx: <><h2 id="spell-wrathful_weapon-wrathful-weapon">Wrathful Weapon</h2>
<SpellInfo id="1" source="Advanced Class Origins/31" school={<><Link to="/spelldef/transmutation">transmutation</Link> [see text]</>} clr={4} orc={4} war={4} ct="1 standard action" comp="V, S, DF" rTouch target="melee weapon touched (see text)" dur="1 minute/level" save="Will (harmless, object)" resist="yes (object)" />
<p>You grant the targeted weapon one of the following weapon special abilities: <Link to="/magic-enh/anarchic">anarchic</Link>, <Link to="/magic-enh/axiomatic">axiomatic</Link>, <Link to="/magic-enh/holy">holy</Link>, or <Link to="/magic-enh/unholy">unholy</Link>. If anarchic, this spell has the chaos descriptor; if axiomatic, the law descriptor; if holy, the good descriptor; and if unholy, the evil descriptor. If the caster attempts to place a special ability on a weapon that already has that special ability, the spell fails.</p>
<p>If a warpriest casts this spell on his sacred weapon, the duration doubles. Warpriests with unarmed strike as a sacred weapon can cast this spell on their unarmed strike.</p>
</>};
const _wreath_of_blades = {title: "Wreath of Blades", jsx: <><h2 id="spell-wreath_of_blades-wreath-of-blades">Wreath of Blades</h2>
<SpellInfo id="1" source="Ultimate Combat/249" school="abjur" arc={5} bld={4} mag={4} occ={4} psy={5} sor={5} sum={5} usm={5} wit={5} wiz={5} ct="1 standard action" comp="V, S, F (four mithral daggers, each worth at least 502 gp each)" rPers area="5-foot-radius emanation centered on you" dur="1 round/level" save="Reflex half (special, see below)" resist="no (special, see below)" />
<p>The daggers serving as focus of this spell take on a deadly sharpness as they animate and spin around you, creating a 5-foot-radius emanation of spinning mithral blades that moves with you. Any creature that starts its turn within the area of the spinning blades takes 1d4 points of damage for every two caster levels (maximum 10d4 at 20th level) and the damage bypasses DR/silver.</p>
<p>Furthermore, the daggers ward off some attacks, in a way similar to the <Link to="/spell/warding_weapon">warding weapon</Link> spell. While subject to this spell, you do not provoke attacks of opportunity for casting spells, even from creatures with the <Link to="/feat/disruptive">Disruptive</Link> feat. Creatures with the <Link to="/feat/spellbreaker">Spellbreaker</Link> feat can easily bypass this defensive property, though they still take damage from the spell. Your casting (even failing to cast defensively) still provokes attacks of opportunity from creatures with that feat.</p>
<p>Lastly, the blades that serve as the focus for this spell can be enchanted for greater effect. When all of the blades share the same enhancement bonus and special weapon qualities, a creature that is damaged by this spell is also treated as if hit by one of these weapons. For example, if a 12th-level magus casts this spell using four +1 <Link to="/magic-enh/frost">frost</Link> <Link to="/eq-material/mithral">mithral</Link> daggers as focus, the damage dealt by the blades would be 6d4+1 plus 1d6 cold damage, as long as the daggers were commanded to be sheathed in ice. No matter the modifications made to the focus weapons, they must always be mithral daggers. No other type of weapons can serve as a focus for this spell.</p>
</>};
const _yellow_sign = {title: "Yellow Sign", jsx: <><h2 id="spell-yellow_sign-yellow-sign">Yellow Sign</h2>
<SpellInfo id="1" source="Pathfinder #110: The Thrushmoor Terror/72" school="ench" subschools={["comp"]} descriptors={["mind"]} arc={9} brd={6} clr={9} orc={9} skd={6} sor={9} wit={9} wiz={9} ct="10 minutes" comp="V, S, M (ochre and sulfur, plus powdered gold worth a total of 15,000 gp)" r="0 ft.; see text" effect="one symbol" dur="see text" save="Will negates" resist="yes" />
<blockquote>
<p><em>Priests of <Link to="/faith/hastur">Hastur</Link> have access to the following spell.</em></p>
</blockquote>
<p>This spell functions as per <Link to="/spell/symbol_of_death">symbol of death</Link>, save that creatures that succumb to this spell become dominated (as per <Link to="/spell/dominate_monster">dominate monster</Link>) by <Link to="/monster/hastur">Hastur</Link>. This causes such creatures to seek to aid any obvious minions or worshipers of Hastur in sight, and any true worshiper of Hastur can command the affected creatures as if that worshiper had been the one to dominate them. In the case of conflicting commands issued from different true worshipers of Hastur, the commanders must attempt opposed Charisma checks, with the winner being able to command the targets for that round. If no worshipers or agents of Hastur are in sight, an affected creature can act normally. When affected by this spell's Yellow Sign in this way, the effects last for 1 round per level. Once triggered, the Yellow Sign remains active for 10 minutes per caster level.</p>
<p>There is a 1% chance when a creature fails its saving throw against this spell that Hastur takes note and, for reasons of his own, decides to control the target personally. In this case, the actions taken by the dominated creature are left to the GM to determine, but the effects of this spell's Yellow Sign persist for 1 day per level and the commands issued cannot be countermanded by any other creature, even if they are Hastur worshipers.</p>
<p>Regardless of how long the effects last or whether Hastur directly controls a victim, if a creature failed to resist this spell's effects, Hastur can target that victim for the rest of its life with his fulvous dreams ability. Whether or not the Great Old One ever chooses to do so is left to the GM to determine.</p>
<p>Yellow Sign can be made permanent with a <Link to="/spell/permanency">permanency</Link> spell by a caster of 18th level or higher for the cost of 40,000 gp.</p>
</>};
const _youthful_appearance = {title: "Youthful Appearance", jsx: <><h2 id="spell-youthful_appearance-youthful-appearance">Youthful Appearance</h2>
<SpellInfo id="1" source="Ultimate Magic/249" school="trans" subschools={["poly"]} alc={1} arc={1} brd={1} inv={1} med={1} occ={1} psy={1} rma={1} skd={1} sor={1} wit={1} wiz={1} ct="1 standard action" comp="V, S" rTouch target="creature touched" dur="1 hour/level" />
<p>You make your target look like a younger version of itself. You select how much younger it looks (for example, "-10 years" or "as a young adult"). You cannot otherwise change details of the target's appearance other than those directly associated with aging (for example, gray hair returns to its original color). The target cannot appear so much younger that it changes size. This spell does not affect any age-based modifications to ability scores or other age-related effects.</p>
</>};
const _zephyrs_fleetness = {title: "Zephyr's Fleetness", jsx: <><h2 id="spell-zephyrs_fleetness-zephyrs-fleetness">Zephyr's Fleetness</h2>
<SpellInfo id="1" source="Inner Sea Races/223" school="trans" descriptors={["air"]} hnt={3} rgr={3} ct="1 round" comp="V, S" rLong targets="one creature/2 levels" dur="1 minute/level" save="Will negates (harmless)" resist="yes (harmless)" />
<blockquote>
<p><em>The following spell is available to the indicated race or ethnicity: Keleshite</em></p>
</blockquote>
<p>You can call upon the spirits of the air to grant agility to your allies. Each target gains a +30 foot enhancement bonus to its land speed and fly speed (if any). Each target can also move (and charge) through difficult terrain without penalty.</p>
</>};
const _zone_of_foul_flames = {title: "Zone of Foul Flames", jsx: <><h2 id="spell-zone_of_foul_flames-zone-of-foul-flames">Zone of Foul Flames</h2>
<SpellInfo id="1" source="Inner Sea Magic/63" school="trans" drd={4} hnt={4} ct="1 standard action" comp="V, S, M (a sliver of tree bark from a burnt tree from the Uskwood)" rClose area="20-ft.-radius spread" dur="1 minute/level" save="Will negates" resist="yes" />
<p>The twisted druids of the Uskwood forsook fire in ages past for the glory of Zon-Kuthon. Despite this aversion, these servants of Nidal know well the sting of flame, and have learned to turn it back on those that wield it. This spell creates a zone where magical fire effects twist and lash out against those who create the effects. A zone of foul flames looks unremarkable to the casual observer, but a Perception check (DC = 20 + the caster's level) reveals a faint rippling effect in the area, as if of heat distortions in the air.</p>
<p>Whenever a creature casts a spell with the fire descriptor or activates a magical fire effect (as from a magic item or a special attack) while that creature is located in a zone of foul flames, that creature takes full fire damage from the effect. If the effect allows a saving throw to reduce the damage, the victim may attempt the same saving throw to reduce the damage. All creatures in a zone of foul flames gain a +4 circumstance bonus on all saving throws against fire effects, except for those made by a creature attempting to save against fire damage from his own magic. Nonmagical fire in a zone of foul flames burns half as brightly but is otherwise not affected.</p>
</>};
const _zone_of_silence = {title: "Zone of Silence", jsx: <><h2 id="spell-zone_of_silence-zone-of-silence">Zone of Silence</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/371" school="ill" subschools={["glamer"]} brd={4} mes={4} skd={4} ct="1 round" comp="V, S" rPers area="5-ft.-radius emanation centered on you" dur="1 hour/level (D)" />
<p>By casting zone of silence, you manipulate sound waves in your immediate vicinity so that you and those within the spell's area can converse normally, yet no one outside can hear your voices or any other noises from within, including language-dependent or sonic spell effects. This effect is centered on you and moves with you. Anyone who enters the zone immediately becomes subject to its effects, but those who leave are no longer affected. Note, however, that a successful DC 20 Linguistics check to read lips can still reveal what's said inside a zone of silence.</p>
</>};
const _zone_of_truth = {title: "Zone of Truth", jsx: <><h2 id="spell-zone_of_truth-zone-of-truth">Zone of Truth</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/371" school="ench" subschools={["comp"]} descriptors={["mind"]} clr={2} inq={2} med={2} orc={2} pal={2} psy={2} war={2} wit={2} ct="1 standard action" comp="V, S, DF" rClose area="20-ft.-radius emanation" dur="1 minute/level" save="Will negates" resist="yes" />
<p>Creatures within the emanation area (or those who enter it) can't speak any deliberate and intentional lies. Each potentially affected creature is allowed a save to avoid the effects when the spell is cast or when the creature first enters the emanation area. Affected creatures are aware of this enchantment. Therefore, they may avoid answering questions to which they would normally respond with a lie, or they may be evasive as long as they remain within the boundaries of the truth. Creatures who leave the area are free to speak as they choose.</p>
</>};
const _stunning_barrier_greater = {..._stunning_barrier, title: "Greater Stunning Barrier"};
const _suffocation_mass = {..._suffocation, title: "Mass Suffocation"};
const _suggestion_mass = {..._suggestion, title: "Mass Suggestion"};
const _contagious_suggestion = {..._suggestion, title: "Contagious Suggestion"};
const _triggered_suggestion = {..._suggestion, title: "Triggered Suggestion"};
const _summon_barghest_2 = {..._summon_barghest_1, title: "Summon Barghest II"};
const _summon_cacodaemon_greater = {..._summon_cacodaemon, title: "Greater Summon Cacodaemon"};
const _summon_genie = {..._summon_genie_lesser, title: "Summon Genie"};
const _summon_genie_greater = {..._summon_genie_lesser, title: "Greater Summon Genie"};
const _summon_giant_ally_2 = {..._summon_giant_ally_1, title: "Summon Giant Ally II"};
const _summon_giant_ally_3 = {..._summon_giant_ally_1, title: "Summon Giant Ally III"};
const _summon_monster_1 = {..._summon_monster, title: "Summon Monster I"};
const _summon_monster_2 = {..._summon_monster, title: "Summon Monster II"};
const _summon_monster_3 = {..._summon_monster, title: "Summon Monster III"};
const _summon_monster_4 = {..._summon_monster, title: "Summon Monster IV"};
const _summon_monster_5 = {..._summon_monster, title: "Summon Monster V"};
const _summon_monster_6 = {..._summon_monster, title: "Summon Monster VI"};
const _summon_monster_7 = {..._summon_monster, title: "Summon Monster VII"};
const _summon_monster_8 = {..._summon_monster, title: "Summon Monster VIII"};
const _summon_monster_9 = {..._summon_monster, title: "Summon Monster IX"};
const _summon_natures_ally_1 = {..._summon_natures_ally, title: "Summon Nature's Ally I"};
const _summon_natures_ally_2 = {..._summon_natures_ally, title: "Summon Nature's Ally II"};
const _summon_natures_ally_3 = {..._summon_natures_ally, title: "Summon Nature's Ally III"};
const _summon_natures_ally_4 = {..._summon_natures_ally, title: "Summon Nature's Ally IV"};
const _summon_natures_ally_5 = {..._summon_natures_ally, title: "Summon Nature's Ally V"};
const _summon_natures_ally_6 = {..._summon_natures_ally, title: "Summon Nature's Ally VI"};
const _summon_natures_ally_7 = {..._summon_natures_ally, title: "Summon Nature's Ally VII"};
const _summon_natures_ally_8 = {..._summon_natures_ally, title: "Summon Nature's Ally VIII"};
const _summon_natures_ally_9 = {..._summon_natures_ally, title: "Summon Nature's Ally IX"};
const _summon_kami = {..._summon_natures_ally_1, title: "Summon Kami"};
const _rain_of_frogs = {..._summon_swarm, title: "Rain of Frogs"};
const _suns_disdain_mass = {..._suns_disdain, title: "Mass Sun's Disdain"};
const _shared_wrath = {..._wrath, title: "Shared Wrath"};
export default {stunning_barrier:_stunning_barrier,stunning_finale:_stunning_finale,sturdy_tree_fort:_sturdy_tree_fort,subjective_reality:_subjective_reality,submerge_ship:_submerge_ship,substitute_trail:_substitute_trail,suffocation:_suffocation,suggestion:_suggestion,summon_accuser:_summon_accuser,summon_ancestral_guardian:_summon_ancestral_guardian,summon_barghest_1:_summon_barghest_1,summon_cacodaemon:_summon_cacodaemon,summon_ceustodaemon:_summon_ceustodaemon,summon_derghodaemon:_summon_derghodaemon,summon_eidolon:_summon_eidolon,summon_elder_worm:_summon_elder_worm,summon_elemental_steed:_summon_elemental_steed,summon_erodaemon:_summon_erodaemon,summon_flight_of_eagles:_summon_flight_of_eagles,summon_froghemoth:_summon_froghemoth,summon_genie_lesser:_summon_genie_lesser,summon_giant_ally_1:_summon_giant_ally_1,summon_greater_demon:_summon_greater_demon,summon_infernal_host:_summon_infernal_host,summon_instrument:_summon_instrument,summon_laborers:_summon_laborers,summon_lesser_demon:_summon_lesser_demon,summon_lesser_psychopomp:_summon_lesser_psychopomp,summon_meladaemon:_summon_meladaemon,summon_minor_ally:_summon_minor_ally,summon_minor_monster:_summon_minor_monster,summon_monster:_summon_monster,summon_natures_ally:_summon_natures_ally,summon_ship:_summon_ship,summon_stampede:_summon_stampede,summon_swarm:_summon_swarm,summon_thanadaemon:_summon_thanadaemon,summon_totem_creature:_summon_totem_creature,summon_vanth:_summon_vanth,summoner_conduit:_summoner_conduit,sun_metal:_sun_metal,sunbeam:_sunbeam,sunburst:_sunburst,sunder_breaker:_sunder_breaker,sundered_serpent_coil:_sundered_serpent_coil,sundering_shards:_sundering_shards,suns_disdain:_suns_disdain,whirlwind:_whirlwind,whispering_lore:_whispering_lore,whispering_wind:_whispering_wind,wicker_horse:_wicker_horse,widen_auras:_widen_auras,wild_instinct:_wild_instinct,wilderness_soldiers:_wilderness_soldiers,wind_blades:_wind_blades,wind_walk:_wind_walk,wind_wall:_wind_wall,winds_of_vengeance:_winds_of_vengeance,windy_escape:_windy_escape,wing_bounty:_wing_bounty,wing_thorns:_wing_thorns,winged_sword:_winged_sword,winter_feathers:_winter_feathers,winter_grasp:_winter_grasp,wish:_wish,with_the_wind:_with_the_wind,withdraw_affliction:_withdraw_affliction,wither_limb:_wither_limb,witness:_witness,wizened_appearance:_wizened_appearance,wood_shape:_wood_shape,wooden_phalanx:_wooden_phalanx,wooden_wing_shield:_wooden_wing_shield,woodland_rune:_woodland_rune,word_of_chaos:_word_of_chaos,word_of_recall:_word_of_recall,word_of_resolve:_word_of_resolve,world_wave:_world_wave,wracking_ray:_wracking_ray,wrath:_wrath,wrathful_mantle:_wrathful_mantle,wrathful_weapon:_wrathful_weapon,wreath_of_blades:_wreath_of_blades,yellow_sign:_yellow_sign,youthful_appearance:_youthful_appearance,zephyrs_fleetness:_zephyrs_fleetness,zone_of_foul_flames:_zone_of_foul_flames,zone_of_silence:_zone_of_silence,zone_of_truth:_zone_of_truth,stunning_barrier_greater:_stunning_barrier_greater,suffocation_mass:_suffocation_mass,suggestion_mass:_suggestion_mass,contagious_suggestion:_contagious_suggestion,triggered_suggestion:_triggered_suggestion,summon_barghest_2:_summon_barghest_2,summon_cacodaemon_greater:_summon_cacodaemon_greater,summon_genie:_summon_genie,summon_genie_greater:_summon_genie_greater,summon_giant_ally_2:_summon_giant_ally_2,summon_giant_ally_3:_summon_giant_ally_3,summon_monster_1:_summon_monster_1,summon_monster_2:_summon_monster_2,summon_monster_3:_summon_monster_3,summon_monster_4:_summon_monster_4,summon_monster_5:_summon_monster_5,summon_monster_6:_summon_monster_6,summon_monster_7:_summon_monster_7,summon_monster_8:_summon_monster_8,summon_monster_9:_summon_monster_9,summon_natures_ally_1:_summon_natures_ally_1,summon_natures_ally_2:_summon_natures_ally_2,summon_natures_ally_3:_summon_natures_ally_3,summon_natures_ally_4:_summon_natures_ally_4,summon_natures_ally_5:_summon_natures_ally_5,summon_natures_ally_6:_summon_natures_ally_6,summon_natures_ally_7:_summon_natures_ally_7,summon_natures_ally_8:_summon_natures_ally_8,summon_natures_ally_9:_summon_natures_ally_9,summon_kami:_summon_kami,rain_of_frogs:_rain_of_frogs,suns_disdain_mass:_suns_disdain_mass,shared_wrath:_shared_wrath}