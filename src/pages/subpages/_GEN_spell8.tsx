import {IonRippleEffect,IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import SpellInfo from '../../components/SpellInfo';
import Message from '../../components/Message';
const _qlippoth_appearance = {title: "Qlippoth Appearance", jsx: <><h2 id="spell-qlippoth_appearance-qlippoth-appearance">Qlippoth Appearance</h2>
<SpellInfo id="1" source="Pathfinder #135: Runeplague/74" school="trans" subschools={["poly"]} descriptors={["mind"]} alc={3} ant={2} clr={3} orc={3} sha={3} war={3} wit={3} ct="1 standard action" comp="V, S" rPers target="you" dur="10 minutes/level (see text)" save="Will negates (see text)" resist="yes" />
<p>When under the effects of this spell, your face and body appear subtly wrong, though you are still recognizable as yourself. You gain a +4 circumstance bonus on Intimidate checks but take a -4 penalty on Diplomacy checks. As long as this spell's effects persist, you can reveal the face under your face as a standard action, assaulting the senses of a single living creature within 30 feet that can see you. A targeted creature must succeed at a Will save against the DC of this spell or be subject to one of the following effects (your choice). Every time you use this ability, you reduce the remaining duration of this spell by 10 minutes.</p>
<ul>
<li>The affected creature takes 1 point of Wisdom damage.</li>
<li>The affected creature is paralyzed with revulsion for 1 round.</li>
<li>The affected creature is sickened with disgust for 1d6 rounds.</li>
<li>The affected creature takes 1d6 points of nonlethal damage as its senses are overwhelmed.</li>
</ul>
</>};
const _qualm = {title: "Qualm", jsx: <><h2 id="spell-qualm-qualm">Qualm</h2>
<SpellInfo id="1" source="Ultimate Combat/241" school="ench" subschools={["comp"]} descriptors={["mind"]} arc={2} brd={2} inq={2} med={2} mes={2} psy={2} skd={2} sor={2} wit={2} wiz={2} ct="1 standard action" comp="V, S" rClose target="one creature" dur="1 minute/level or until discharged" save="Will negates" resist="yes" />
<p>The target is suddenly beset with unexplainable doubts about the effectiveness of its actions and the righteousness of its cause. The creature takes a -10 penalty on its ability checks, skill checks, and <Link to="/rule/concentration">concentration</Link> checks, until the duration ends, or until it spends its entire turn doing absolutely nothing (it spends a full-round action gaining focus). Spending an entire turn doing nothing discharges the spell.</p>
</>};
const _quell_energy = {title: "Quell Energy", jsx: <><h2 id="spell-quell_energy-quell-energy">Quell Energy</h2>
<SpellInfo id="1" source="Occult Origins/29" school="abjur" arc={3} drd={3} hnt={3} inq={3} occ={3} psy={3} sha={3} sor={3} wit={3} wiz={3} ct="1 standard action" comp="V, S" rClose target="one creature" dur="1 round/level" save="Will partial" resist="yes" />
<p>You reduce the target creature's ability to tap into a single energy type (acid, cold, electricity, fire, or sonic) of your choice. This reduces damage of the selected type the creature deals with spells, spell-like abilities, and supernatural abilities by 10 points. Multiple castings of this spell stack. Damage from sources other than the creature, such as objects and magic items, is not reduced. If the damage of one of the creature's effects is negated entirely, any additional effects associated with that damage (such being stunned by sound burst or set on fire by a fire elemental) are also negated. At 13th level, you reduce the target's damage by 20 points, and at 19th level, you reduce the target's damage by 30 points.</p>
<p>If the target succeeds on its saving throw, the spell's duration is reduced to 1 round.</p>
</>};
const _quench = {title: "Quench", jsx: <><h2 id="spell-quench-quench">Quench</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/329" school="trans" drd={3} hnt={3} ct="1 standard action" comp="V, S, DF" rMed areaOrTarget="one 20-ft. cube/level (S) or one fire-based magic item" dur="instantaneous" save="none or Will negates (object)" resist="no or yes (object)" />
<p>Quench is often used to put out forest fires and other conflagrations. It extinguishes all nonmagical fires in its area. The spell also dispels any fire spells in its area, though you must succeed on a dispel check (1d20 +1 per caster level, maximum +15) against each spell to dispel it. The DC to dispel such spells is 11 + the caster level of the fire spell.</p>
<p>Each creature with the fire subtype within the area of a quench spell takes 1d6 points of damage per caster level (maximum 10d6, no save allowed).</p>
<p>Alternatively, you can target the spell on a single magic item that creates or controls flame. The item loses all its fire-based magical abilities for 1d4 hours unless it succeeds on a Will save. Artifacts are immune to this effect.</p>
</>};
const _questing_stone = {title: "Questing Stone", jsx: <><h2 id="spell-questing_stone-questing-stone">Questing Stone</h2>
<SpellInfo id="1" source="Seekers of Secrets/17" school="div" arc={4} brd={4} skd={4} sor={4} wiz={4} ct="10 minutes" comp="V, S, F" r="touch and unlimited" target="one ioun stone touched" dur="1 minute/level (D)" save="none" resist="no" />
<p>This spell functions like arcane eye, except that it uses an ioun stone as a visible scrying sensor. The ioun stone moves at the same rate as an arcane eye, and may pass through holes or spaces as small as 2 inches in diameter. It can enter another plane of existence using a gate or similar portal, but the caster loses contact with the sensor should this occur. The enhanced ioun stone has AC 24, 10 hp, hardness 5, fly speed 30 (perfect), and a +16 Stealth bonus. The stone does not provide you with its normal benefits while you are using it as a scrying sensor.</p>
</>};
const _quick_change = {title: "Quick Change", jsx: <><h2 id="spell-quick_change-quick-change">Quick Change</h2>
<SpellInfo id="1" source="Horror Adventures/125" school="trans" subschools={["poly"]} alc={2} arc={2} bld={2} brd={2} drd={2} hnt={2} inq={2} inv={2} mag={2} med={2} mes={2} occ={2} rgr={2} sha={2} skd={2} sor={2} spr={2} sum={2} usm={2} wit={2} wiz={2} ct="1 standard action" comp="V, S" rPers target="you" dur="1 hour/level" />
<p>If you have the change shape special quality, you can revert to your true form as a swift action. If a creature is not aware of your true form, when you use this spell to revert to your true form and attack that creature in the same round, the creature is denied its Dexterity bonus to AC against your first attack.</p>
</>};
const _quick_throwing = {title: "Quick Throwing", jsx: <><h2 id="spell-quick_throwing-quick-throwing">Quick Throwing</h2>
<SpellInfo id="1" source="Pathfinder #91: Battle of Bloodmarch Hills/71" school="trans" ant={2} bld={2} hnt={2} mag={2} pal={2} rgr={2} ct="1 standard action" comp="V, S, M" rClose target="one creature/level, no two of which can be more than 30 ft. apart" dur="1 round/level" save="Fortitude negates (harmless)" resist="yes (harmless)" />
<p>Those under the effects of this spell become faster in the use of thrown weapons. They can draw thrown weapons (including rocks if they have the rock throwing ability) on their bodies or within their space without the need for the <Link to="/feat/quick_draw">Quick Draw</Link> feat, allowing them to make their full normal rate of attacks with such weapons. This has no effects on other forms of ranged weapon ammunition.</p>
</>};
const _quieting_weapons = {title: "Quieting Weapons", jsx: <><h2 id="spell-quieting_weapons-quieting-weapons">Quieting Weapons</h2>
<SpellInfo id="1" source="Ultimate Intrigue/223" school="ill" subschools={["glamer"]} arc={4} brd={4} clr={4} hnt={3} inq={4} mag={4} occ={4} orc={4} psy={4} rgr={3} skd={4} sor={4} spr={4} war={4} wiz={4} ct="1 standard action" comp="S" rClose target="up to one natural or manufactured weapon per 3 caster levels" dur="10 minutes/level" save="Will negates (object)" resist="yes (object)" />
<p>The target weapons and any ammunition they fire make no sound as part of their normal functions as a weapon. For instance, a firearm's firing would not make an explosive sound, but if you cast this spell on a creature's bite attack, it would not prevent it from vocalizing from its mouth. The first time a creature is struck by a weapon affected by this spell, it must succeed at a Will save (SR applies to this effect) or it becomes unable to make noise louder than a whisper (Perception DC 10 to hear) whether vocally or by other means for the duration of the effect. Because the creature can still whisper, this doesn't interfere with verbal spell components. Whether it succeeds or fails its saving throw, the creature is immune to further effects from this casting of quieting weapons.</p>
</>};
const _quintessence = {title: "Quintessence", jsx: <><h2 id="spell-quintessence-quintessence">Quintessence</h2>
<SpellInfo id="1" source="Occult Adventures/184" school="ill" subschools={["glamer"]} arc={1} brd={1} med={1} mes={1} occ={1} psy={1} skd={1} sor={1} wiz={1} ct="1 standard action" comp="V, S" rTouch target="creature or object touched" dur="10 minutes/level (D)" save="Will negates (harmless) and Will disbelief, see text" resist="see text" />
<p>You draw forth the idealized image of the target creature or object, masking any flaws or damage. An injured or ill creature appears healthy, and a damaged object or one with the broken condition appears intact. However, a corpse masked by quintessence remains obviously dead, and a completely destroyed object can't be made to seem whole. This illusion has visual and tactile components. Careful examination of or handling the target grants a saving throw to disbelieve, but casual observation does not. Using a broken object for its intended purpose automatically reveals the deception. Appraise checks to assess the value of an object affected by quintessence estimate the value as an item of its type in perfect condition, unless the appraiser disbelieves the illusion.</p>
<p>Unwilling targets can negate the spell's effect on them with successful Will saves or with spell resistance. Those who interact with the target can attempt Will saves to see through the glamer, but spell resistance doesn't apply. Quintessence counters and dispels <Link to="/spell/decrepit_disguise">decrepit disguise</Link>.</p>
</>};
const _quintessence_mastery = {title: "Quintessence Mastery", jsx: <><h2 id="spell-quintessence_mastery-quintessence-mastery">Quintessence Mastery</h2>
<SpellInfo id="1" source="Planar Adventures/43" school="trans" arc={8} clr={8} orc={8} sor={8} wit={8} wiz={8} ct="1 round or 4 hours; see text" comp="V, S, F (a staff crafted from the chosen plane's material worth 2,500 gp)" r="personal or up to 10 10-ft. cubes/level (S)" effect="control over a plane's terrain and traits" dur="1 hour/level or 1 day/level; see text" />
<p>This spell grants the caster limited control over the quintessence of an Outer Plane. The control granted by quintessence mastery can take one of two forms, depending on the version of the spell cast. Both versions can be cast only on one of the nine Outer Planes, for it is these planes, not the Transitive or Inner Planes, that are comprised of quintessence.</p>
<p><em>Planewarp:</em> This allows the caster to create various objects or effects. When this spell is cast, you can replicate a number of effects from one or more of the following spells: control water, diminish plants, fog cloud, major creation, move earth, plant growth, secure shelter, soften earth and stone, spike growth, spike stones, stone shape, transmute mud to rock, transmute rock to mud, wall of stone, or wall of thorns. The total spell levels of effects to be created must not exceed 8. For example, you could use this spell to replicate the effects of fog cloud, secure shelter, and soften earth and stone (since these three spells have levels that add up to 8) or diminish plants and spike stones (since these two spells have levels that add up to 7), but not move earth and plant growth (since these two spells have levels that add up to 9). If a spell appears on different spell lists at different levels, use the lowest level-control water, for example, counts as a 4th-level spell even though it's a 6th-level spell for sorcerers and wizards. This list need not be exhaustive; at the GM's discretion, this list may be expanded to include similar spells from other sources or similarly themed effects that do not mimic specific spells. This version of the spell has a casting time of 1 round and lasts for 1 hour per caster level or until its effects are expended.</p>
<p><em>Shape Realm:</em> This functions similarly to <Link to="/spell/create_demiplane">create demiplane</Link>, except that it alters an equivalent area of the plane the caster is on rather than creating a self-contained realm on the Astral or Ethereal Plane. You cannot grant the affected area an alignment or essence trait opposed by the plane's traits (such as granting the lawful-aligned trait to a portion of Elysium), and the area is not self-contained. At the GM's discretion, additional restrictions beyond those listed in the create demiplane spell may limit this spell's effects, and additional options for customizing the affected area may be available. This version of the spell has a casting time of 4 hours and lasts for 1 day per caster level. This version of quintessence mastery can be made <Link to="/spell/permanency">permanent</Link> in the same way and for the same cost as create demiplane. This version of quintessence mastery does not function within the boundaries of a divine realm.</p>
</>};
const _radiation_ward = {title: "Radiation Ward", jsx: <><h2 id="spell-radiation_ward-radiation-ward">Radiation Ward</h2>
<SpellInfo id="1" source="Heroes of the Darklands/15" school="abjur" alc={2} arc={2} clr={2} drd={2} hnt={1} orc={2} rgr={1} sha={2} sor={2} war={2} wiz={2} ct="1 standard action" comp="V, S" rTouch target="creature touched" dur="1 hour/level (D)" save="Fortitude negates (harmless)" resist="yes (harmless)" />
<p>A creature warded by this spell gains a +4 bonus on saving throws against radiation-based effects. In addition, the warded creature is immediately aware when it enters an area of radiation, as well as the radiation level (low, medium, high, or severe) suffusing the area.</p>
</>};
const _rage = {title: "Rage", jsx: <><h2 id="spell-rage-rage">Rage</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/329" school="ench" subschools={["comp"]} descriptors={["emo","mind"]} alc={3} arc={3} bld={3} brd={2} inv={3} mes={2} psy={3} skd={2} sor={3} sum={3} usm={3} wit={3} wiz={3} ct="1 standard action" comp="V, S" rMed targets="one willing living creature per three levels, no two of which may be more than 30 ft. apart" dur="concentration+ 1 round/level (D)" save="none" resist="yes" />
<p>Each affected creature gains a +2 morale bonus to Strength and Constitution, a +1 morale bonus on Will saves, and a -2 penalty to AC. The effect is otherwise identical with a <Link to="/class/barbarian">barbarian's</Link> rage except that the subjects aren't fatigued at the end of the rage.</p>
</>};
const _raging_rubble = {title: "Raging Rubble", jsx: <><h2 id="spell-raging_rubble-raging-rubble">Raging Rubble</h2>
<SpellInfo id="1" source="Advanced Race Guide/149" school="trans" descriptors={["earth"]} arc={3} bld={3} brd={3} clr={3} drd={3} hnt={3} orc={3} rma={3} skd={3} sor={3} war={3} wit={3} wiz={3} ct="1 round" comp="V, S, DF" rClose effect="one swarm of stones" dur="concentration+ 2 rounds" save="none" resist="yes" />
<blockquote>
<p><em><Link to="/race/oread">Oreads</Link> have access to the following spell.</em></p>
</blockquote>
<p>You animate an area of rubble, gravel, or other small stones, creating a dangerous, rolling area of debris. The animated rubble has a space of 10 feet and acts like a <Link to="/subtype/swarm">swarm</Link>, damaging (1d6 hit points) and distracting (DC 12) anything within it. As a move action, you can direct the rubble to move up to 10 feet. If the rubble is attacked, treat it as a Medium animated object with the young creature simple template and the swarm subtype.</p>
</>};
const _rags_to_riches = {title: "Rags to Riches", jsx: <><h2 id="spell-rags_to_riches-rags-to-riches">Rags to Riches</h2>
<SpellInfo id="1" source="Arcane Anthology/21" school="trans" alc={3} arc={4} brd={3} clr={4} inv={3} med={3} occ={3} orc={4} skd={3} sor={4} war={4} wit={4} wiz={4} ct="1 standard action" comp="V, S, M (a bit of burlap wrapped over a copper coin)" rTouch target="1 weapon, suit or armor, shield, tool, or skill kit touched/5 levels" dur="10 minutes/level" save="Fortitude negates (object)" resist="no" />
<p>The target object is enhanced to function as a masterwork item. In addition to any bonuses for the masterwork quality, the object gains other bonuses. Skill kits and other equipment add an additional +1 insight bonus for every 4 caster levels you possess to skill checks made with them that already receive a bonus from the skill kit. Armor and weapons gain temporary hit points equal to your caster level. If the object already has an enhancement bonus, this bonus increases by 1. If the object of the spell has hardness, that hardness increases by 5.</p>
</>};
const _raiment_of_command = {title: "Raiment of Command", jsx: <><h2 id="spell-raiment_of_command-raiment-of-command">Raiment of Command</h2>
<SpellInfo id="1" source="Rise of the Runelords Anniversary Edition/418;Pathfinder #5: Sins of the Saviors/61" school="ill" subschools={["glamer"]} arc={2} brd={2} rma={2} skd={2} sor={2} wiz={2} ct="1 standard action" comp="V, S" rPers target="you" dur="1 hour/level" save="Will" resist="no" />
<p>You are cloaked in an illusion of authority. Others perceive you to be a legitimate figure of authority, such as a higher-ranking official, a religious figure, or a more powerful warrior. This illusion grants you a +5 bonus on all Diplomacy and Intimidate checks. If you attempt to disguise yourself as a specific authority figure whom you have met in person, you gain a +10 competence bonus on the Disguise check and any Bluff check related to impersonating that authority figure.</p>
<p>In addition, others are uncomfortable acting against you. Creatures with an Intelligence of 3 or more take a -2 penalty on all opposed checks made against you, such as Sense Motive checks made to determine if you're bluffing, or Perception checks made to notice you when you're using Stealth to sneak (a result of their not wanting to question whether you belong there, and thus giving you the benefit of the doubt).</p>
</>};
const _rain_of_arrows = {title: "Rain of Arrows", jsx: <><h2 id="spell-rain_of_arrows-rain-of-arrows">Rain of Arrows</h2>
<SpellInfo id="1" source="Ranged Tactics Toolbox/31" school="conj" subschools={["creat"]} arc={8} sor={8} wiz={8} ct="1 standard action" comp="V, S, M (a quiver full of 20 arrows worth 1 gp)" rLong effect="15-ft.-radius cloud of arrows" dur="instantaneous" save="Reflex half" resist="no" />
<p>You point your finger and conjure a cloud of magical arrows that rain down on any creatures and objects in the indicated area. You must have line of sight to the intended area. The arrows deal 1d6 points of piercing damage per caster level (maximum 20d6) to each creature and object in a 15-foot radius centered on the targeted square or intersection.</p>
<p>If the arrows used as a material component are all made of the same material (such as cold iron), the arrows created by the spell are also made of that material.</p>
</>};
const _rainbow_pattern = {title: "Rainbow Pattern", jsx: <><h2 id="spell-rainbow_pattern-rainbow-pattern">Rainbow Pattern</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/329" school="ill" subschools={["pat"]} descriptors={["mind"]} arc={4} brd={4} psy={4} rma={4} skd={4} sor={4} wiz={4} ct="1 standard action" comp="S, M (a piece of phosphor), F (a crystal prism); see text" rMed effect="colorful lights with a 20-ft.-radius spread" dur="concentration+ 1 round/level (D)" save="Will negates" resist="yes" />
<p>A glowing, rainbow-hued pattern of interweaving colors fascinates those within it. Rainbow pattern fascinates a maximum of 24 HD of creatures. Creatures with the fewest HD are affected first. Among creatures with equal HD, those who are closest to the spell's point of origin are affected first. An affected creature that fails its saves is fascinated by the pattern.</p>
<p>With a simple gesture (a free action), you can make the rainbow pattern move up to 30 feet per round (moving its effective point of origin). All fascinated creatures follow the moving rainbow of light, trying to remain within the effect. Fascinated creatures who are restrained and removed from the pattern still try to follow it. If the pattern leads its subjects into a dangerous area, each fascinated creature gets a second save. If the view of the lights is completely blocked, creatures who can't see them are no longer affected.</p>
<p>The spell does not affect sightless creatures. Most spellcasters need not utter a sound to cast this spell, but a bard must perform as a verbal component.</p>
</>};
const _raise_dead = {title: "Raise Dead", jsx: <><h2 id="spell-raise_dead-raise-dead">Raise Dead</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/329" school="conj" subschools={["heal"]} adp={5} clr={5} orc={5} sha={6} spr={5} war={5} wit={6} ct="1 minute" comp="V, S, M (diamond worth 5,000 gp), DF" rTouch target="dead creature touched" dur="instantaneous" save="none, see text" resist="yes" />
<p>You restore life to a deceased creature. You can raise a creature that has been dead for no longer than 1 day per caster level. In addition, the subject's soul must be free and willing to return. If the subject's soul is not willing to return, the spell does not work; therefore, a subject that wants to return receives no saving throw.</p>
<p>Coming back from the dead is an ordeal. The subject of the spell gains two permanent negative levels when it is raised, just as if it had been hit by an energy-draining creature. If the subject is 1st level, it takes 2 points of Constitution drain instead (if this would reduce its Con to 0 or less, it can't be raised). A character who died with spells prepared has a 50% chance of losing any given spell upon being raised. A spellcasting creature that doesn't prepare spells (such as a sorcerer) has a 50% chance of losing any given unused spell slot as if it had been used to cast a spell.</p>
<p>A raised creature has a number of hit points equal to its current HD. Any ability scores damaged to 0 are raised to 1. Normal poison and normal disease are cured in the process of raising the subject, but magical diseases and curses are not undone. While the spell closes mortal wounds and repairs lethal damage of most kinds, the body of the creature to be raised must be whole. Otherwise, missing parts are still missing when the creature is brought back to life. None of the dead creature's equipment or possessions are affected in any way by this spell.</p>
<p>A creature who has been turned into an undead creature or killed by a death effect can't be raised by this spell. Constructs, elementals, outsiders, and undead creatures can't be raised. The spell cannot bring back a creature that has died of old age.</p>
<h3 id="spell-raise_dead-raise-animal-companion">Raise Animal Companion</h3>
<SpellInfo id="2" source="Ultimate Magic/233" school="conj" subschools={["heal"]} drd={5} hnt={4} pal={4} rgr={4} ct="1 minute" comp="V, S, M (a diamond worth 1,000 gp)" rTouch target="dead animal companion or bonded mount" dur="instantaneous" save="none, see text" resist="yes" />
<p>This spell functions as raise dead, but it only affects an animal companion, familiar, or paladin's bonded mount.</p>
</>};
const _rally_point = {title: "Rally Point", jsx: <><h2 id="spell-rally_point-rally-point">Rally Point</h2>
<SpellInfo id="1" source="Advanced Player's Guide/237" school="ench" subschools={["comp"]} descriptors={["emo","good","mind"]} pal={1} ct="1 standard action" comp="V, S, DF" rFt={5} area="one 5-ft. square" dur="1 minute/level (D)" save="Will negates (harmless)" resist="yes (harmless)" />
<p>You create a spot that has the power to briefly hearten any good creature who comes into contact with it. A good creature who enters this square (even if simply as part of its normal move) gains a +2 morale bonus on attacks, saving throws, and 2 temporary hit points per caster level for 1 round. Nongood creatures gain no benefit from this spell. A creature cannot benefit more than once from the same casting of this spell.</p>
</>};
const _rampart = {title: "Rampart", jsx: <><h2 id="spell-rampart-rampart">Rampart</h2>
<SpellInfo id="1" source="Advanced Player's Guide/237" school="conj" subschools={["creat"]} descriptors={["earth"]} arc={7} drd={7} sor={7} wiz={7} ct="1 standard action" comp="V, S, M (a handful of earth)" rMed effect="10-ft.-high earthen wall, in a line up to 10 ft. long/2 levels, or a circle with radius of up to 3 ft. + 1 ft./level" dur="instantaneous" save="none" resist="no" />
<p>You create a massive rampart of hard-packed earth and stone 5 feet thick. The rampart cannot be conjured so that it occupies the same space as another creature or object. Each 5-foot-wide section of the rampart has hardness 0 and 180 hit points. A section of the rampart whose hit points drop to 0 is breached. If a creature tries to break through the rampart with a single attack, the DC for the Strength check is 60. A creature can climb over the rampart with a DC 20 Climb check.</p>
</>};
const _rapid_repair = {title: "Rapid Repair", jsx: <><h2 id="spell-rapid_repair-rapid-repair">Rapid Repair</h2>
<SpellInfo id="1" source="Ultimate Magic/234" school="trans" arc={5} clr={5} occ={4} orc={5} sor={5} war={5} wiz={5} ct="1 standard action" comp="V, S, DF" rTouch target="construct touched" dur="1 round/level" save="Fortitude negates (harmless)" resist="yes (harmless)" />
<p>The targeted construct gains fast healing 5. This does not stack with any fast healing the construct already has. Fast healing has no effect on a construct that has been brought to 0 hit points or destroyed.</p>
</>};
const _ravens_flight = {title: "Raven's Flight", jsx: <><h2 id="spell-ravens_flight-ravens-flight">Raven's Flight</h2>
<SpellInfo id="1" source="Heroes of the Wild/31" school="trans" arc={2} brd={3} drd={3} hnt={2} inq={3} mag={2} rgr={2} sha={2} skd={3} sor={2} wit={2} wiz={2} ct="1 swift action" comp="V" rPers target="you" dur="1 round" />
<p>You can cast this spell only if it is the first action you take on your turn. In a burst of shadowy feathers, you turn into a Tiny blurred shape reminiscent of a black raven until the beginning of your next turn. You gain a fly speed of 50 feet with good maneuverability, and apply appropriate size modifiers (though your ability scores don't change). Until the beginning of your next turn, you can take only the 5-foot step, move, run, or withdraw actions. If the spell is dispelled while you are still aloft, the power of flight dissipates slowly; you float downward 60 feet on your next turn, then fall any remaining distance.</p>
</>};
const _ray_of_enfeeblement = {title: "Ray of Enfeeblement", jsx: <><h2 id="spell-ray_of_enfeeblement-ray-of-enfeeblement">Ray of Enfeeblement</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/329" school="necro" arc={1} bld={1} mag={1} mes={1} sor={1} wit={1} wiz={1} ct="1 standard action" comp="V, S" rClose effect="ray" dur="1 round/level" save="Fortitude half" resist="yes" />
<p>A coruscating ray springs from your hand. You must succeed on a ranged touch attack to strike a target. The subject takes a penalty to Strength equal to 1d6+1 per two caster levels (maximum 1d6+5). The subject's Strength score cannot drop below 1. A successful Fortitude save reduces this penalty by half. This penalty does not stack with itself. Apply the highest penalty instead.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-ray_of_enfeeblement--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Ray of Enfeeblement</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 105</Link><br/>The Strength penalty increases to 1d8 + 1 per 2 caster levels (maximum +10). If the target fails its save, it's fatigued.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _ray_of_exhaustion = {title: "Ray of Exhaustion", jsx: <><h2 id="spell-ray_of_exhaustion-ray-of-exhaustion">Ray of Exhaustion</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/330" school="necro" arc={3} bld={3} mag={3} mes={3} sor={3} spr={3} wit={3} wiz={3} ct="1 standard action" comp="V, S, M (a drop of sweat)" rClose effect="ray" dur="1 minute/level" save="Fortitude partial; see text" resist="yes" />
<p>A black ray projects from your pointing finger. You must succeed on a ranged touch attack with the ray to strike a target.</p>
<p>The subject is immediately exhausted for the spell's duration. A successful Fortitude save means the creature is only fatigued.</p>
<p>A character that is already fatigued instead becomes exhausted.</p>
<p>This spell has no effect on a creature that is already exhausted. Unlike normal exhaustion or fatigue, the effect ends as soon as the spell's duration expires.</p>
<h3 id="spell-ray_of_exhaustion-ray-of-sickening">Ray of Sickening</h3>
<SpellInfo id="2" source="Ultimate Magic/234;Dark Markets - A Guide to Katapesh/57" school="necro" arc={1} bld={1} clr={1} drd={1} hnt={1} mes={1} orc={1} sor={1} sum={1} usm={1} war={1} wit={1} wiz={1} ct="1 standard action" comp="V, S, M (a drop of sweat)" rClose effect="ray" dur="1 minute/level" save="Fortitude partial, see text" resist="yes" />
<p>This spell functions as ray of exhaustion, except the target is sickened if it fails its save and unaffected if it makes its save.</p>
</>};
const _ray_of_frost = {title: "Ray of Frost", jsx: <><h2 id="spell-ray_of_frost-ray-of-frost">Ray of Frost</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/330" school="evo" descriptors={["cold"]} arc={0} mag={0} sor={0} wiz={0} ct="1 standard action" comp="V, S" rClose effect="ray" dur="instantaneous" save="none" resist="yes" />
<p>A ray of freezing air and ice projects from your pointing finger. You must succeed on a ranged touch attack with the ray to deal damage to a target. The ray deals 1d3 points of cold damage.</p>
</>};
const _read_magic = {title: "Read Magic", jsx: <><h2 id="spell-read_magic-read-magic">Read Magic</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/330" school="div" adp={0} ant={1} arc={0} brd={0} clr={0} drd={0} hnt={0} inq={0} mag={0} med={0} mes={0} occ={0} orc={0} pal={1} psy={0} rgr={1} sha={0} skd={0} sor={0} spr={0} sum={0} usm={0} war={0} wit={0} wiz={0} ct="1 standard action" comp="V, S, F (a clear crystal or mineral prism)" rPers target="you" dur="10 minutes/level" />
<p>You can decipher magical inscriptions on objects-books, scrolls, weapons, and the like-that would otherwise be unintelligible. This deciphering does not normally invoke the magic contained in the writing, although it may do so in the case of a cursed or trapped scroll. Furthermore, once the spell is cast and you have read the magical inscription, you are thereafter able to read that particular writing without recourse to the use of read magic. You can read at the rate of one page (250 words) per minute. The spell allows you to identify a glyph of warding with a DC 13 Spellcraft check, a greater glyph of warding with a DC 16 Spellcraft check, or any symbol spell with a Spellcraft check (DC 10 + spell level).</p>
<p>Read magic can be made permanent with a <Link to="/spell/permanency">permanency</Link> spell.</p>
</>};
const _read_weather = {title: "Read Weather", jsx: <><h2 id="spell-read_weather-read-weather">Read Weather</h2>
<SpellInfo id="1" source="Inner Sea Gods/238;Faiths of Balance/28" school="div" brd={1} clr={1} drd={1} hnt={1} orc={1} rgr={1} sha={1} skd={1} war={1} wit={1} faith="Gozreh" ct="1 minute" comp="V, S, F (a set of marked sticks or bones worth at least 25 gp)" rPers target="you" dur="instantaneous" />
<p>This spell allows you to forecast the weather at your location for the next 48 hours, providing you with advance warning of storms, tornadoes, and so on. This forecast reveals only the weather that would arise naturally, and does not take into account any magical occurrences that might change the weather.</p>
<Message spelldeity /></>};
const _realm_retribution = {title: "Realm Retribution", jsx: <><h2 id="spell-realm_retribution-realm-retribution">Realm Retribution</h2>
<SpellInfo id="1" source="Chronicle of Legends/14" school="conj" subschools={["tele"]} clr={8} inq={6} orc={8} war={6} ct="1 standard action" comp="V, S" rTouch target="creature touched" dur="1 round/level" save="Will negates (see text)" resist="no" />
<p>All attacks made by the target match your alignment, counting as either chaotic, evil, good, or lawful as appropriate. If your alignment includes multiple alignment components, such as lawful good, you select one alignment component to impart to the target. Whenever the target confirms a critical hit against or takes damage from a creature, that creature must attempt a Will save. On a failed save, the creature is sent to the Outer Plane matching your alignment, as per <Link to="/spell/plane_shift">plane shift</Link>, and the spell ends. A warpriest treats this spell as a 6th-level cleric spell for the purposes of preparing the spell, determining DCs, and so forth.</p>
</>};
const _reapers_coterie = {title: "Reaper's Coterie", jsx: <><h2 id="spell-reapers_coterie-reapers-coterie">Reaper's Coterie</h2>
<SpellInfo id="1" source="Melee Tactics Toolbox/31" school="necro" descriptors={["evil"]} ant={2} bld={2} clr={3} inq={3} orc={3} war={3} wit={3} ct="1 standard action" comp="V, S, DF" rTouch target="weapon touched" dur="1 round/level" save="none" resist="no" />
<p>The target weapon becomes a reservoir of spiritual energy, fueling its destructive power by drawing in a tiny fragment of the essence of each creature it is used to defeat. When the targeted weapon is used to reduce a living creature to 0 or fewer hit points, it gains a +1 profane bonus on damage rolls. This bonus increases by 1 for each creature reduced to 0 hit points or fewer with that weapon, up to a maximum bonus equal to 1/2 your caster level.</p>
</>};
const _reboot = {title: "Reboot", jsx: <><h2 id="spell-reboot-reboot">Reboot</h2>
<SpellInfo id="1" source="People of the Stars/29" school="trans" arc={5} clr={5} orc={5} sor={5} sum={4} usm={4} war={5} wit={5} wiz={5} ct="1 round" comp="V, S, F (a ruby worth at least 25 gp per HD of the target construct)" rClose target="one destroyed construct of up to 2 HD/level" dur="1 round/level (D)" save="none" resist="no" />
<p>Whispering in the dense, information-rich machine language of the First Ones, you bring a destroyed construct back to operational status for a short time, restoring it to 1 hit point. The construct can be further healed with spells like make whole, but it returns to its destroyed state as soon as this spell's duration expires or it is brought to 0 hit points, whichever comes first. As long as the construct is active, it obeys your commands to the best of its ability, fighting on your behalf and carrying out tasks that it is capable of performing.</p>
<p>Constructs with more than twice as many Hit Dice as your caster level cannot be targeted by this spell.</p>
</>};
const _rebuke = {title: "Rebuke", jsx: <><h2 id="spell-rebuke-rebuke">Rebuke</h2>
<SpellInfo id="1" source="Advanced Player's Guide/238" school="evo" descriptors={["sonic"]} inq={4} ct="1 standard action" comp="V, S, DF" rFt={20} area="20-ft.-radius burst centered on you" dur="instantaneous" save="Fortitude partial" resist="yes" />
<p>Your wrathful words cause physical harm to your enemies. Your enemies take 1d8 points of damage per two caster levels (maximum 5d8) and are staggered for 1 round. Half of this damage is sonic damage, but the other half results directly from divine power and is therefore not subject to being reduced by resistance to sonic-based attacks. Rebuke is especially devastating to foes who worship your god, inflicting 1d6 points of damage per caster level (maximum 10d6) and stunning them for 1d4 rounds. A successful Fortitude save halves the damage and negates the staggering or stunning effect.</p>
<p>Enemies do not need to hear a rebuke to be harmed by it, but it is negated by magical silence.</p>
</>};
const _rebuke_technology = {title: "Rebuke Technology", jsx: <><h2 id="spell-rebuke_technology-rebuke-technology">Rebuke Technology</h2>
<SpellInfo id="1" source="Technology Guide/10" school="abjur" arc={4} drd={4} hnt={4} sor={4} wiz={4} ct="1 standard action" comp="V, S, F/DF (powdered fragments of technology)" rMed target="one technological object or creature" dur="1 round/level" save="Fortitude negates (object)" resist="yes (object)" />
<p>You shroud the targeted technological object or creature (such as a robot or a nanotech swarm) with magical energy. If the targeted creature fails to resist the spell, it is rendered inert and unusable (or unconscious in the case of creatures) for the spell's duration. A creature can attempt a new Fortitude saving throw to end the effect early at the end of its turn after the first full round it is affected by this spell.</p>
</>};
const _recentering_drone = {title: "Recentering Drone", jsx: <><h2 id="spell-recentering_drone-recentering-drone">Recentering Drone</h2>
<SpellInfo id="1" source="Champions of Balance/27" school="abjur" clr={2} drd={2} hnt={2} orc={2} war={2} ct="1 standard action" comp="V, S, DF" rClose targets="one creature/2 levels (no two of which may be more than 30 ft. apart)" dur="concentration" save="Will negates (harmless)" resist="yes (harmless)" />
<p>You emit a calming subsonic drone that allows the targets to temporarily refocus and restore their balance when they're suffering from debilitating conditions. A target with the dazzled, fatigued, shaken, or sickened condition ignores the penalties of those conditions for the duration of this spell. A target with one of the following conditions is treated as having the associated lesser condition for the duration of the spell, as shown by the following table.</p>
<ScrollContainer id="spell-recentering_drone--table-0"><table>
<thead>
<tr>
<th>Condition</th>
<th>Lesser Condition</th>
</tr>
</thead>
<tbody><tr>
<td>Blinded</td>
<td>Dazzled</td>
</tr>
<tr>
<td>Exhausted</td>
<td>Fatigued</td>
</tr>
<tr>
<td>Frightened</td>
<td>Shaken</td>
</tr>
<tr>
<td>Nauseated</td>
<td>Sickened</td>
</tr>
</tbody></table></ScrollContainer>
<p>At the end of the spell's duration, the targets are again subject to the appropriate penalties if the original conditions affecting the target are still in effect.</p>
</>};
const _recharge = {title: "Recharge", jsx: <><h2 id="spell-recharge-recharge">Recharge</h2>
<SpellInfo id="1" source="Technology Guide/11" school="evo" arc={3} brd={2} clr={3} mag={3} orc={3} skd={2} sor={3} war={3} wiz={3} ct="1 round" comp="V, S, M (500 gp of diamond dust)" rTouch target="object touched" dur="instantaneous" save="Fortitude negates (object)" resist="yes (object)" />
<p>You restore up to 1 charge per level to a battery or half that number of charges to a technological item capable of being charged by a battery. If you recharge a battery, there is a 20% chance that the battery is destroyed by the attempt. If you restore more charges than the item can hold, the item must succeed at a Fortitude saving throw or take 1d6 points of electricity damage for each excess charge. This spell provides no knowledge of how many charges an item can safely hold, but you can choose to bestow fewer charges than the maximum allowed to reduce the risk; you must declare how many charges you are restoring before casting this spell.</p>
</>};
const _recharge_innate_magic = {title: "Recharge Innate Magic", jsx: <><h2 id="spell-recharge_innate_magic-recharge-innate-magic">Recharge Innate Magic</h2>
<SpellInfo id="1" source="Advanced Race Guide/39" school="trans" alc={1} arc={1} brd={1} clr={1} drd={1} hnt={1} inq={1} inv={1} mag={1} mes={1} orc={1} psy={1} rma={1} skd={1} sor={1} war={1} wit={1} wiz={1} ct="1 standard action" comp="V, S" rPers target="you" dur="instantaneous" />
<blockquote>
<p><em><Link to="/race/gnome">Gnomes</Link> have access to the following spell.</em></p>
</blockquote>
<p>You channel magic energy into your own aura, recharging your innate magic abilities. You regain one use of all 0-level and 1st-level spell-like abilities you can use as a result of a racial trait.</p>
</>};
const _reckless_infatuation = {title: "Reckless Infatuation", jsx: <><h2 id="spell-reckless_infatuation-reckless-infatuation">Reckless Infatuation</h2>
<SpellInfo id="1" source="Ultimate Magic/234" school="ench" subschools={["comp"]} descriptors={["emo","mind"]} arc={3} brd={2} mes={2} psy={3} skd={2} sor={3} wit={3} wiz={3} ct="1 standard action" comp="V, S" rClose target="one creature" dur="1 day/level" save="Will negates" resist="yes" />
<p>You fill your target with feelings of intense infatuation for a specific individual known to the target. At the time of the casting, you designate a single creature as the focus of the target's desire. Thereafter, the target does all it can to remain within 30 feet of the object of its desire. If the target moves outside this range, it gains the staggered condition until it is again near the focus of its desire. If remaining within 30 feet of the focus of its affection would place the target in obvious physical danger, the target can attempt a second save to break the spell's effect.</p>
<p>Reckless infatuation counters <Link to="/spell/unadulterated_loathing">unadulterated loathing</Link>.</p>
</>};
const _recoil_fire = {title: "Recoil Fire", jsx: <><h2 id="spell-recoil_fire-recoil-fire">Recoil Fire</h2>
<SpellInfo id="1" source="Ultimate Combat/241" school="trans" arc={2} rma={2} sor={2} wit={2} wiz={2} ct="1 standard action" comp="V, S, M (hoof shavings from a mule)" rClose target="1 firearm" dur="instantaneous" save="Will negates (object)" resist="yes (object)" />
<p>The target firearm suddenly fires of its own volition, even if it is unloaded, generating a recoil so great that the wielder or carrier of the firearm must scramble to hold onto it and becomes flat-footed until the start of his next turn. If the wielder is already flat-footed, he is instead knocked prone. If the firearm was loaded, that ammunition is wasted.</p>
</>};
const _recorporeal_incarnation = {title: "Recorporeal Incarnation", jsx: <><h2 id="spell-recorporeal_incarnation-recorporeal-incarnation">Recorporeal Incarnation</h2>
<SpellInfo id="1" source="Inner Sea Intrigue/61;Pathfinder #16: Endless Night/10" school="necro" arc={7} sor={7} wit={7} wiz={7} ct="10 minutes" comp="V, S, F (a gem worth at least 250 gp)" rTouch target="one willing living creature and one humanoid corpse" dur="1 week/level" save="none" resist="no" />
<p>Recorporeal incarnation effectively replaces the target living creature's body with that of the target corpse. The target corpse must be fresh - either dead for no more than 24 hours or appropriately preserved by an effect such as gentle repose. While casting the spell, you must remain in contact with the corpse while touching the living target with the focus item. As the spell is cast, the dead body's flesh unravels like ribbons to sheathe the living target, who must be within one size category of the corpse. While the spell is in effect, the focus item must remain within 30 feet of the target living creature.</p>
<p>The living target gains the physical appearance and size of the corpse, and gains its abilities as defined in alter self as well as any immunities, weapon proficiencies, weaknesses, and spell resistance the dead target had while living. The living target gains a +20 circumstance bonus on Disguise checks to impersonate the individual whose corpse is targeted by this spell. The disguise created by recorporeal incarnation lasts for a number of weeks equal to your caster level, or until the focus item is moved more than 30 feet away from the living target. When the effect ends, the living target returns to its normal form, sloughing off the corpse's flesh.</p>
<p>The greatest strength of recorporeal incarnation is the difficulty of detecting it as a disguise. If subjected to detect magic, the living target sheds no magical aura, though the focus item gives off an aura of strong necromantic magic. True seeing does not reveal the living target's true form, since the corpse's flesh magically obscures it. The spell detect undead and similar effects indicate the living target is an undead creature, but the target is not truly undead, and is not affected by any other effects that target undead creatures. Recorporeal incarnation does not disguise the target's alignment.</p>
<p>If the living target of recorporeal incarnation dies while the spell is in effect, the spell continues. Any <Link to="/spell/raise_dead">raise dead</Link> or similar spell cast upon that target resurrects that target, not the corpse flesh. Since recorporeal incarnation destroys the majority of the target corpse's physical remains, the target corpse cannot be restored to life except by <Link to="/spell/miracle">miracle</Link>, <Link to="/spell/resurrection">resurrection</Link>, <Link to="/spell/true_resurrection">true resurrection</Link>, or <Link to="/spell/wish">wish</Link>. Recorporeal incarnation can be made permanent by a 15th-level caster using <Link to="/spell/permanency">permanency</Link> with a material component worth 17,500 gp.</p>
</>};
const _red_hand_of_the_killer = {title: "Red Hand of the Killer", jsx: <><h2 id="spell-red_hand_of_the_killer-red-hand-of-the-killer">Red Hand of the Killer</h2>
<SpellInfo id="1" source="Ultimate Intrigue/223" school="necro" arc={5} brd={4} clr={4} inq={4} med={3} occ={4} orc={4} pal={4} psy={5} skd={4} sor={5} spr={4} war={4} wit={5} wiz={5} ct="1 standard action" comp="V, S, M (a black candle), F (a corpse slain no more than 1 day ago per caster level)" rText target="one creature" dur="1 day/level (D)" save="Will negates" resist="yes" />
<p>Drawing upon the spiritual link between a corpse and its killer, you reach out across space to brand the killer of the corpse you used as a focus for this spell, creating a physical manifestation of the killer's guilt.</p>
<p>The killer's right hand becomes stained indelibly red, and this stain can't be removed (although it can be hidden by magical or mundane means, such as disguise self or by wearing gloves). If the killer is not humanoid, or doesn't have a right hand for some other reason, the spell instead causes a red stain in the shape of a hand to appear elsewhere on the creature's body (typically on the chest).</p>
<p>This spell affects only the creature that directly killed the targeted corpse. Other individuals that contributed to the target's death are unaffected, and if the victim did not die from violence or died indirectly (for instance, if the creature died from suffocating after someone trapped it in a room filling with water), then the spell has no effect. The killer can attempt a Will save to resist the spell's effects. Distance is not a factor, but the killer must be on the same plane as you at the time you cast the spell, or the spell fails. Once a corpse has acted as the focus for red hand of the killer, it can never act as the focus for another casting of red hand of the killer.</p>
</>};
const _redcaps_touch = {title: "Redcap's Touch", jsx: <><h2 id="spell-redcaps_touch-redcaps-touch">Redcap's Touch</h2>
<SpellInfo id="1" source="Heroes from the Fringe/18" school="trans" ant={4} arc={6} bld={4} drd={6} hnt={4} rgr={4} sha={6} sor={6} wit={6} wiz={6} ct="1 standard action" comp="V, S, M (1 ounce of blood)" rTouch target="one non-magical hat touched" dur="1 minute/level (D)" save="Will negates (object, harmless)" resist="yes (object, harmless)" />
<p>You infuse the target with the blood used as a material component, imparting malicious power. As long as the hat is worn (occupying the wearer's <Link to="/rule/head_slot">head slot</Link> as though it were a magic item), it grants its wearer a +2 bonus on damage rolls and causes the wearer to regain 1d4 hit points whenever they deal the killing blow to a living creature.</p>
</>};
const _reduce_animal = {title: "Reduce Animal", jsx: <><h2 id="spell-reduce_animal-reduce-animal">Reduce Animal</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/330" school="trans" drd={2} hnt={2} rgr={3} ct="1 standard action" comp="V, S" rTouch target="one willing animal of Small, Medium, Large, or Huge size" dur="1 hour/level (D)" save="none" resist="no" />
<p>This spell functions like reduce person, except that it affects a single willing animal. Reduce the damage dealt by the animal's natural attacks <Link to="/umr/natural_attacks">as appropriate for its new size</Link>.</p>
</>};
const _reduce_person = {hasJL:true,title: "Reduce Person", jsx: <><div className="jumpList" id="spell-reduce_person-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="spell-reduce_person-mythic_reduce_person">Mythic Reduce Person</InnerLink></li><li><InnerLink toTop to="spell-reduce_person-mass-reduce-person">Mass Reduce Person</InnerLink></li></ul></div><h2 id="spell-reduce_person-reduce-person">Reduce Person</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/330" school="trans" alc={1} arc={1} bld={1} inv={1} mag={1} med={1} occ={1} psy={1} rma={1} sor={1} sum={1} usm={1} wit={1} wiz={1} ct="1 round" comp="V, S, M (a pinch of powdered iron)" rClose target="one humanoid creature" dur="1 minute/level (D)" save="Fortitude negates" resist="yes" />
<p>This spell causes instant diminution of a humanoid creature, halving its height, length, and width and dividing its weight by 8. This decrease changes the creature's size category to the next smaller one. The target gains a +2 size bonus to Dexterity, a -2 size penalty to Strength (to a minimum of 1), and a +1 bonus on attack rolls and AC due to its reduced size.</p>
<p>A Small humanoid creature whose size decreases to Tiny has a space of 2-1/2 feet and a natural reach of 0 feet (meaning that it must enter an opponent's square to attack). A Large humanoid creature whose size decreases to Medium has a space of 5 feet and a natural reach of 5 feet. This spell doesn't change the target's speed.</p>
<p>All equipment worn or carried by a creature is similarly reduced by the spell.</p>
<p>Melee and projectile weapons <Link to="/misc/deal_less_damage">deal less damage</Link>. Other magical properties are not affected by this spell. Any reduced item that leaves the reduced creature's possession (including a projectile or thrown weapon) instantly returns to its normal size. This means that thrown weapons deal their normal damage (projectiles deal damage based on the size of the weapon that fired them).</p>
<p>Multiple magical effects that reduce size do not stack. Reduce person counters and dispels <Link to="/spell/enlarge_person">enlarge person</Link>.</p>
<p>Reduce person can be made permanent with a <Link to="/spell/permanency">permanency</Link> spell.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-reduce_person--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col" id="spell-reduce_person-mythic_reduce_person" data-hash-target>Mythic Reduce Person</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 105</Link></p>
<p>You can decrease the target's size by up to two categories, to a minimum of Tiny. If the target shrinks two sizes, its weight decreases by a factor of 16 and it gains a +4 size bonus to Dexterity, a -4 size penalty to Strength, and a +2 bonus on attack rolls and to AC because of its decreased size. A Medium or Small humanoid creature whose size decreases to Tiny has a space of 2-1/2 feet and a natural reach of 0 feet.</p>
<p>Mythic reduce person counters and dispels mythic <Link to="/spell/enlarge_person">enlarge person</Link>.</p>
</td></tr></tbody></table></ScrollContainer></div><h3 id="spell-reduce_person-mass-reduce-person" data-hash-target>Mass Reduce Person</h3>
<SpellInfo id="2" source="PRPG Core Rulebook/331" school="trans" arc={4} bld={4} mag={4} psy={4} rma={4} sor={4} sum={3} usm={4} wiz={4} ct="1 round" comp="V, S, M (a pinch of powdered iron)" rClose target="one humanoid creature/level, no two of which can be more than 30 ft. apart" dur="1 minute/level (D)" save="Fortitude negates" resist="yes" />
<p>This spell functions like reduce person, except that it affects multiple creatures.</p>
</>};
const _refine_improvised_weapon = {title: "Refine Improvised Weapon", jsx: <><h2 id="spell-refine_improvised_weapon-refine-improvised-weapon">Refine Improvised Weapon</h2>
<SpellInfo id="1" source="Advanced Class Guide/190" school="trans" arc={1} clr={1} hnt={1} inq={1} occ={1} orc={1} rgr={1} rma={1} sor={1} war={1} wiz={1} ct="1 standard action" comp="V, S, DF" rTouch target="one improvised weapon" dur="1 hour/level (D)" save="Will negates (object, harmless)" resist="yes (object, harmless)" />
<p>You transform an improvised weapon into an equivalent simple or martial weapon of masterwork quality. This effect does not alter the weapon's shape or appearance in any way. For example, if this spell is cast on a chair leg, a butter knife, or a pitchfork, the items function as a masterwork club, a masterwork dagger, or a masterwork trident, respectively, but the items look no different than they did before the spell was cast.</p>
</>};
const _reflexive_barrier = {title: "Reflexive Barrier", jsx: <><h2 id="spell-reflexive_barrier-reflexive-barrier">Reflexive Barrier</h2>
<SpellInfo id="1" source="Psychic Anthology/10" school="evo" descriptors={["force"]} mag={3} psy={3} ct="1 immediate action" comp="V, S" rClose target="one creature" dur="1 round (see text)" save=" (harmless)" resist="no (harmless)" />
<p>In the blink of an eye, you erect a deflective barrier of force to protect one target. The target gains a deflection bonus to its AC equal to half your caster level. This bonus lasts until the beginning of your next turn. You can cast this spell as a reaction to an attack, but you must do so before the result of the attack is revealed.</p>
</>};
const _refuge = {title: "Refuge", jsx: <><h2 id="spell-refuge-refuge">Refuge</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/331" school="conj" subschools={["tele"]} arc={9} clr={7} orc={7} psy={8} sor={9} wit={9} wiz={9} ct="1 standard action" comp="V, S, M (a prepared object worth 1,500 gp)" rTouch target="object touched" dur="permanent until discharged" save="none" resist="no" />
<p>When you cast this spell, you create powerful magic in a specially prepared object. This object contains the power to instantly transport its possessor across any distance within the same plane to your abode. Once the item is so enhanced, you must give it willingly to a creature and at the same time inform it of a command word to be spoken when the item is used. To make use of the item, the subject speaks the command word at the same time that it rends or breaks the item (a standard action). When this is done, the individual and all objects it is wearing and carrying (to a maximum of the character's heavy load) are instantly transported to your abode. No other creatures are affected (aside from a familiar or animal companion that is touching the subject).</p>
<p>You can alter the spell when casting it so that it transports you to within 10 feet of the possessor of the item when it is broken and the command word spoken. You will have a general idea of the location and situation of the item possessor at the time the refuge spell is discharged, but once you decide to alter the spell in this fashion, you have no choice whether or not to be transported.</p>
</>};
const _regenerate = {title: "Regenerate", jsx: <><h2 id="spell-regenerate-regenerate">Regenerate</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/331" school="conj" subschools={["heal"]} clr={7} drd={9} orc={7} sha={7} wit={7} ct="3 rounds" comp="V, S, DF" rTouch target="living creature touched" dur="instantaneous" save="Fortitude negates (harmless)" resist="yes (harmless)" />
<p>The subject's severed body members (fingers, toes, hands, feet, arms, legs, tails, or even heads of multiheaded creatures), broken bones, and ruined organs grow back. After the spell is cast, the physical regeneration is complete in 1 round if the severed members are present and touching the creature. It takes 2d10 rounds otherwise.</p>
<p>Regenerate also cures 4d8 points of damage + 1 point per caster level (maximum +35), rids the subject of exhaustion and fatigue, and eliminates all nonlethal damage the subject has taken. It has no effect on nonliving creatures (including undead).</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-regenerate--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Regenerate</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 105</Link><br/>The casting time changes to 1 standard action and the target changes to 1 living creature or corpse touched. The spell removes the blinded, dazzled, and deafened conditions. The target gains regeneration equal to your tier (overcome by acid and fire) for 1 round per caster level. If the target was killed by amputation or decapitation (such as from a vorpal weapon) within the past 1 round, the spell regenerates lost body parts and brings the creature back to life (as breath of life), treating it as if it had negative hp equal to its Constitution score.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _reincarnate = {hasJL:true,title: "Reincarnate", jsx: <><div className="jumpList" id="spell-reincarnate-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="spell-reincarnate-reincarnation-on-golarion">Reincarnation on Golarion</InnerLink></li><li><InnerLink toTop to="spell-reincarnate-cyclic-reincarnation">Cyclic Reincarnation</InnerLink></li><li><InnerLink toTop to="spell-reincarnate-reincarnate-spy">Reincarnate Spy</InnerLink></li></ul></div><h2 id="spell-reincarnate-reincarnate">Reincarnate</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/331" school="trans" drd={4} hnt={4} med={4} sha={4} wit={5} ct="10 minutes" comp="V, S, M (oils worth 1,000 gp), DF" rTouch target="dead creature touched" dur="instantaneous" save="none, see text" resist="yes" />
<p>With this spell, you bring back a dead creature in another body, provided that its death occurred no more than 1 week before the casting of the spell and the subject's soul is free and willing to return. If the subject's soul is not willing to return, the spell does not work; therefore, a subject that wants to return receives no saving throw.</p>
<p>Since the dead creature is returning in a new body, all physical ills and afflictions are repaired. The condition of the remains is not a factor. So long as some small portion of the creature's body still exists, it can be reincarnated, but the portion receiving the spell must have been part of the creature's body at the time of death. The magic of the spell creates an entirely new young adult body for the soul to inhabit from the natural elements at hand. This process takes 1 hour to complete. When the body is ready, the subject is reincarnated.</p>
<p>A reincarnated creature recalls the majority of its former life and form. It retains any class abilities, feats, or skill ranks it formerly possessed. Its class, base attack bonus, base save bonuses, and hit points are unchanged. Strength, Dexterity, and Constitution scores depend partly on the new body. First eliminate the subject's racial adjustments (since it is no longer necessarily of his previous race) and then apply the adjustments found below to its remaining ability scores. The subject of the spell gains two permanent negative levels when it is reincarnated. Negative levels equal to or greater than the creature's Hit Dice are instead applied as Constitution drain (if this would reduce its Con to 0 or less, it can't be reincarnated). A character who died with spells prepared has a 50% chance of losing any given spell upon being reincarnated. A spellcasting creature that doesn't prepare spells (such as a sorcerer) has a 50% chance of losing any given unused spell slot as if it had been used to cast a spell.</p>
<p>It's possible for the change in the subject's ability scores to make it difficult for it to pursue its previous character class. If this is the case, the subject is advised to become a multiclass character.</p>
<p>For a humanoid creature, the new incarnation is determined using the table below. For non-humanoid creatures, a similar table of creatures of the same type should be created.</p>
<p>A creature that has been turned into an undead creature or killed by a death effect can't be returned to life by this spell. Constructs, elementals, outsiders, and undead creatures can't be reincarnated. The spell can bring back a creature that has died of old age.</p>
<ScrollContainer id="spell-reincarnate--table-0"><table>
<thead>
<tr>
<th>d%</th>
<th>Incarnation</th>
<th>Str</th>
<th>Dex</th>
<th>Con</th>
</tr>
</thead>
<tbody><tr>
<td>01</td>
<td className="ion-activatable"><Link to="/monster/bugbear">Bugbear<IonRippleEffect /></Link></td>
<td>+4</td>
<td>+2</td>
<td>+2</td>
</tr>
<tr>
<td>02-13</td>
<td className="ion-activatable"><Link to="/race/dwarf">Dwarf<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+0</td>
<td>+2</td>
</tr>
<tr>
<td>14-25</td>
<td className="ion-activatable"><Link to="/race/elf">Elf<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>-2</td>
</tr>
<tr>
<td>26</td>
<td className="ion-activatable"><Link to="/monster/gnoll">Gnoll<IonRippleEffect /></Link></td>
<td>+4</td>
<td>+0</td>
<td>+2</td>
</tr>
<tr>
<td>27-38</td>
<td className="ion-activatable"><Link to="/race/gnome">Gnome<IonRippleEffect /></Link></td>
<td>-2</td>
<td>+0</td>
<td>+2</td>
</tr>
<tr>
<td>39-42</td>
<td className="ion-activatable"><Link to="/race/goblin">Goblin<IonRippleEffect /></Link></td>
<td>-2</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>43-52</td>
<td className="ion-activatable"><Link to="/race/half_elf">Half-elf<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>53-62</td>
<td className="ion-activatable"><Link to="/race/half_orc">Half-orc<IonRippleEffect /></Link></td>
<td>+2</td>
<td>+0</td>
<td>+0</td>
</tr>
<tr>
<td>63-74</td>
<td className="ion-activatable"><Link to="/race/halfling">Halfling<IonRippleEffect /></Link></td>
<td>-2</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>75-89</td>
<td className="ion-activatable"><Link to="/race/human">Human<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+0</td>
<td>+2</td>
</tr>
<tr>
<td>90-93</td>
<td className="ion-activatable"><Link to="/race/kobold">Kobold<IonRippleEffect /></Link></td>
<td>-4</td>
<td>+0</td>
<td>-2</td>
</tr>
<tr>
<td>94</td>
<td className="ion-activatable"><Link to="/monster/lizardfolk">Lizardfolk<IonRippleEffect /></Link></td>
<td>+2</td>
<td>+2</td>
<td>+2</td>
</tr>
<tr>
<td>95-98</td>
<td className="ion-activatable"><Link to="/race/orc">Orc<IonRippleEffect /></Link></td>
<td>+4</td>
<td>+0</td>
<td>+0</td>
</tr>
<tr>
<td>99</td>
<td className="ion-activatable"><Link to="/monster/troglodyte">Troglodyte<IonRippleEffect /></Link></td>
<td>+0</td>
<td>-2</td>
<td>+4</td>
</tr>
<tr>
<td>100</td>
<td>Other (GM's choice)</td>
<td>?</td>
<td>?</td>
<td>?</td>
</tr>
</tbody></table></ScrollContainer>
<p>The reincarnated creature gains all abilities associated with its new form, including forms of movement and speeds, natural armor, natural attacks, extraordinary abilities, and the like, but it doesn't automatically speak the language of the new form.</p>
<p>A <Link to="/spell/wish">wish</Link> or a <Link to="/spell/miracle">miracle</Link> spell can restore a reincarnated character to his or her original form.</p>
<h3 id="spell-reincarnate-reincarnation-on-golarion" data-hash-target>Reincarnation on Golarion</h3>
<p><strong>Sources</strong> <Link to="/source/inner_sea_races">Inner Sea Races pg. 193</Link></p>
<p>Death is a natural part of life in the Inner Sea region, but it need not be final. Yet returning to life is not without its perils and peculiarities. While reincarnation is a significant part of the culture of certain races - particularly the <Link to="/race/samsaran">samsarans</Link>, who reincarnate countless times over the centuries on their slow paths toward perfection and enlightenment - the use of the spell reincarnate allows any character to experience this mystical and fundamentally life-changing event. The table of random races presented here expands on the one presented with the reincarnate spell. At the GM's discretion, you may use the following optional table when rolling to determine what new body is generated when a reincarnate spell is cast. This Golarion-specific table excludes all races that possess racial Hit Dice, but also adds in new races that are relatively widespread and common in the region. Not all of the races appear on the following table-<Link to="/race/android">androids</Link>, for example, are beyond the scope of a reincarnate spell to create (although dead androids and <Link to="/race/wyrwood">wyrwoods</Link> can themselves be reincarnated, they have no chance of coming back in the same type of body). Others, such as <Link to="/race/kasatha">kasathas</Link> and other alien races, are not true natives of Golarion and thus lack the "spiritual weight" needed to be included in a table of reincarnation possibilities. Of course, a result of "GM's choice" gives each GM the opportunity to break these assumptions about allowed incarnations as she sees fit.</p>
<p>When using these expanded tables, roll first on the Core Incarnations table. This table presents an array of familiar races. Move on to the Other Incarnations table only if directed to do so. This larger list presents a selection of less-common races from across Golarion, some of which might be familiar to the people of the Inner Sea, while others might be almost entirely alien. If the incarnation rolled has multiple ethnicities or heritages - as is the case with <Link to="/race/aasimar">aasimar</Link>, <Link to="/race/dhampir">dhampir</Link>, and several similar races - randomly determine which ethnicity or heritage applies to the new incarnation. Ability score modifiers remain the same regardless of the final ethnicity or heritage.</p>
<h4 id="spell-reincarnate-core-incarnations">Core Incarnations</h4>
<ScrollContainer id="spell-reincarnate--table-1"><table>
<thead>
<tr>
<th>d%</th>
<th>Incarnation</th>
<th>Str</th>
<th>Dex</th>
<th>Con</th>
</tr>
</thead>
<tbody><tr>
<td>01-12</td>
<td className="ion-activatable"><Link to="/race/dwarf">Dwarf<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+0</td>
<td>+2</td>
</tr>
<tr>
<td>13-24</td>
<td className="ion-activatable"><Link to="/race/elf">Elf<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>-2</td>
</tr>
<tr>
<td>25-36</td>
<td className="ion-activatable"><Link to="/race/gnome">Gnome<IonRippleEffect /></Link></td>
<td>-2</td>
<td>+0</td>
<td>+2</td>
</tr>
<tr>
<td>37-48</td>
<td className="ion-activatable"><Link to="/race/half_elf">Half-elf<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>49-60</td>
<td className="ion-activatable"><Link to="/race/half_orc">Half-orc<IonRippleEffect /></Link></td>
<td>+2</td>
<td>+0</td>
<td>+0</td>
</tr>
<tr>
<td>61-72</td>
<td className="ion-activatable"><Link to="/race/halfling">Halfling<IonRippleEffect /></Link></td>
<td>-2</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>73-89</td>
<td className="ion-activatable"><Link to="/race/human">Human<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+0</td>
<td>+2</td>
</tr>
<tr>
<td>90-99</td>
<td>Roll on Other Incarnations</td>
<td>?</td>
<td>?</td>
<td>?</td>
</tr>
<tr>
<td>100</td>
<td>GM's choice</td>
<td>?</td>
<td>?</td>
<td>?</td>
</tr>
</tbody></table></ScrollContainer>
<h4 id="spell-reincarnate-other-incarnations">Other Incarnations</h4>
<ScrollContainer id="spell-reincarnate--table-2"><table>
<thead>
<tr>
<th>d%</th>
<th>Incarnation</th>
<th>Str</th>
<th>Dex</th>
<th>Con</th>
</tr>
</thead>
<tbody><tr>
<td>01-05</td>
<td className="ion-activatable"><Link to="/race/aasimar">Aasimar<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+0</td>
<td>+0</td>
</tr>
<tr>
<td>06-07</td>
<td className="ion-activatable"><Link to="/race/aquatic_elf">Aquatic elf<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>-2</td>
</tr>
<tr>
<td>08-09</td>
<td className="ion-activatable"><Link to="/race/catfolk">Catfolk<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>10-11</td>
<td className="ion-activatable"><Link to="/race/changeling">Changeling<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+0</td>
<td>-2</td>
</tr>
<tr>
<td>12-13</td>
<td className="ion-activatable"><Link to="/race/dhampir">Dhampir<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>-2</td>
</tr>
<tr>
<td>14</td>
<td className="ion-activatable"><Link to="/race/drow">Drow<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>-2</td>
</tr>
<tr>
<td>15-16</td>
<td className="ion-activatable"><Link to="/race/duergar">Duergar<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+0</td>
<td>+2</td>
</tr>
<tr>
<td>17-18</td>
<td className="ion-activatable"><Link to="/race/fetchling">Fetchling<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>19-20</td>
<td className="ion-activatable"><Link to="/race/ghoran">Ghoran<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+0</td>
<td>+2</td>
</tr>
<tr>
<td>21-22</td>
<td className="ion-activatable"><Link to="/race/gillman">Gillman<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+0</td>
<td>+2</td>
</tr>
<tr>
<td>23-27</td>
<td className="ion-activatable"><Link to="/race/goblin">Goblin<IonRippleEffect /></Link></td>
<td>-2</td>
<td>+4</td>
<td>+0</td>
</tr>
<tr>
<td>28-29</td>
<td className="ion-activatable"><Link to="/race/grippli">Grippli<IonRippleEffect /></Link></td>
<td>-2</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>30-33</td>
<td className="ion-activatable"><Link to="/race/hobgoblin">Hobgoblin<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>+2</td>
</tr>
<tr>
<td>34-37</td>
<td className="ion-activatable"><Link to="/race/ifrit">Ifrit<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>38-39</td>
<td className="ion-activatable"><Link to="/race/kitsune">Kitsune<IonRippleEffect /></Link></td>
<td>-2</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>40-44</td>
<td className="ion-activatable"><Link to="/race/kobold">Kobold<IonRippleEffect /></Link></td>
<td>-4</td>
<td>+2</td>
<td>-2</td>
</tr>
<tr>
<td>45-46</td>
<td className="ion-activatable"><Link to="/race/merfolk">Merfolk<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>+2</td>
</tr>
<tr>
<td>47-48</td>
<td className="ion-activatable"><Link to="/race/nagaji">Nagaji<IonRippleEffect /></Link></td>
<td>+2</td>
<td>+0</td>
<td>+0</td>
</tr>
<tr>
<td>49-53</td>
<td className="ion-activatable"><Link to="/race/orc">Orc<IonRippleEffect /></Link></td>
<td>+4</td>
<td>+0</td>
<td>+0</td>
</tr>
<tr>
<td>54-57</td>
<td className="ion-activatable"><Link to="/race/oread">Oread<IonRippleEffect /></Link></td>
<td>+2</td>
<td>+0</td>
<td>+0</td>
</tr>
<tr>
<td>58-59</td>
<td className="ion-activatable"><Link to="/race/ratfolk">Ratfolk<IonRippleEffect /></Link></td>
<td>-2</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>60-67</td>
<td className="ion-activatable"><Link to="/race/samsaran">Samsaran<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+0</td>
<td>-2</td>
</tr>
<tr>
<td>68-69</td>
<td className="ion-activatable"><Link to="/race/skinwalker">Skinwalker<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+0</td>
<td>+0</td>
</tr>
<tr>
<td>70-71</td>
<td className="ion-activatable"><Link to="/race/strix">Strix<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>72-74</td>
<td className="ion-activatable"><Link to="/race/suli">Suli<IonRippleEffect /></Link></td>
<td>+2</td>
<td>+0</td>
<td>+0</td>
</tr>
<tr>
<td>75</td>
<td className="ion-activatable"><Link to="/race/svirfneblin">Svirfneblin<IonRippleEffect /></Link></td>
<td>-2</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>76-79</td>
<td className="ion-activatable"><Link to="/race/sylph">Sylph<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>-2</td>
</tr>
<tr>
<td>80-82</td>
<td className="ion-activatable"><Link to="/race/tengu">Tengu<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>-2</td>
</tr>
<tr>
<td>83-87</td>
<td className="ion-activatable"><Link to="/race/tiefling">Tiefling<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>88-91</td>
<td className="ion-activatable"><Link to="/race/undine">Undine<IonRippleEffect /></Link></td>
<td>-2</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>92-93</td>
<td className="ion-activatable"><Link to="/race/vanara">Vanara<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>94-95</td>
<td className="ion-activatable"><Link to="/race/vishkanya">Vishkanya<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>96-97</td>
<td className="ion-activatable"><Link to="/race/wayang">Wayang<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>98-99</td>
<td className="ion-activatable"><Link to="/race/wyvaran">Wyvaran<IonRippleEffect /></Link></td>
<td>+0</td>
<td>+2</td>
<td>+0</td>
</tr>
<tr>
<td>100</td>
<td>GM's choice</td>
<td>?</td>
<td>?</td>
<td>?</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="spell-reincarnate-cyclic-reincarnation" data-hash-target>Cyclic Reincarnation</h3>
<SpellInfo id="2" source="Arcane Anthology/13" school="trans" drd={6} hnt={6} ct="10 minutes" comp="V, S, M (oils worth 5,000 gp), DF" rTouch target="dead creature touched" dur="instantaneous" save="none, see text" resist="yes" />
<p>This spell allows a dead creature that died no more than 1 year before the casting of the spell to return to life in a body that closely resembles its original body; it functions as reincarnate except as noted. Cyclic reincarnation returns the dead creature to life in a new body of the same race that the target belonged to in life, and the new body appears physically similar to the creature's previous one, to the extent that the creature could be easily mistaken for its own offspring or kin. If the affected creature isn't a humanoid, there is a 75% chance that the creature returns to life as a youth of its race, gaining the young creature simple template instead (or becomes a juvenile, in the case of dragons and other creatures whose power is determined by their age category).</p>
<p>You can use cyclic reincarnation on someone who was killed by a death effect or turned into an undead creature and then destroyed, but non-humanoids so restored always return to life with the young creature simple template (or as a juvenile, in the case of creatures whose power is determined by their age category).</p>
<h3 id="spell-reincarnate-reincarnate-spy" data-hash-target>Reincarnate Spy</h3>
<SpellInfo id="3" source="Ultimate Intrigue/223" school="conj" subschools={["heal"]} drd={6} hnt={6} sha={6} wit={7} ct="10 minutes" comp="V, S, M (oils worth 2,500 gp and a possession or piece of the body of the creature to resemble), DF" rTouch target="dead creature touched" dur="instantaneous" save="none (see text)" resist="yes" />
<p>This spell functions as reincarnate except that you can cause the new body to resemble a particular creature, matching its age category and sex and rerolling any race result that would be the wrong size category. The subject further gains a +5 bonus on Disguise checks to impersonate the chosen creature due to similar features, although it might take a penalty for being the wrong race.</p>
<p>The spell automatically leaves you with a small piece of the creature's new body, typically a lock of hair (useful for scrying and other such spells).</p>
</>};
const _reinforce_armaments = {title: "Reinforce Armaments", jsx: <><h2 id="spell-reinforce_armaments-reinforce-armaments">Reinforce Armaments</h2>
<SpellInfo id="1" source="Ultimate Combat/241" school="trans" arc={1} clr={1} mag={1} occ={1} orc={1} rma={1} sor={1} war={1} wit={1} wiz={1} ct="1 standard action" comp="V, S, M/DF (a metal pin)" rTouch target="one armor suit or weapon touched" dur="10 minutes/level" save="Will negates (object, harmless)" resist="yes (object, harmless)" />
<p>You reinforce a weapon or armor suit to give it a temporarily upgrade or mitigate the <Link to="/misc/fragile">fragile</Link> quality. A suit of armor or weapon touched that has the fragile quality is not considered to have the fragile quality for the spell's duration. Normal armor suits or weapons subjected to this spell instead gain the masterwork quality for the spell's duration and their hardness is doubled. If this spell is cast on masterwork or magical armor or weapons, their hardness is doubled for the duration of the spell.</p>
<h3 id="spell-reinforce_armaments-communal-reinforce-armaments">Communal Reinforce Armaments</h3>
<SpellInfo id="2" source="Ultimate Combat/241" school="trans" arc={2} clr={2} mag={2} occ={2} orc={2} rma={2} sor={2} war={2} wit={2} wiz={2} ct="1 standard action" comp="V, S, M/DF (a metal pin)" rTouch targets="armor suits or weapons touched" dur="10 minutes/level" save="Will negates (object, harmless)" resist="yes (object, harmless)" />
<p>This spell functions like reinforce armaments, except you divide the duration in 10-minute intervals among the objects touched.</p>
</>};
const _reinvigorating_wind = {title: "Reinvigorating Wind", jsx: <><h2 id="spell-reinvigorating_wind-reinvigorating-wind">Reinvigorating Wind</h2>
<SpellInfo id="1" source="Villain Codex/177" school="ench" subschools={["comp"]} descriptors={["air","mind"]} brd={2} drd={3} hnt={3} sha={2} skd={2} wit={3} ct="1 standard action" comp="V, S, M/DF (a flower petal)" rFt={30} area="cone-shaped burst" dur="instantaneous" save="Will negates (harmless)" resist="yes (harmless)" />
<p>You exhale deeply, creating a gentle magical wind that invigorates any allies in the affected area, as follows. Any sleeping allies immediately wake up. Fascinated allies are shaken free of the fascinate effect. Flat-footed allies no longer count as flat-footed even if they have not acted yet. The duration of effects that cause any allies to be confused, frightened, paralyzed, slowed, or stunned is decreased by 1d4 rounds (roll separately for each target). If the duration of any such effect is reduced to 0 rounds or fewer, the effect ends for that ally. Finally, any allies lying prone may stand up as an immediate action, provoking attacks of opportunity as normal.</p>
</>};
const _rejuvenate_eidolon_lesser = {hasJL:true,title: "Lesser Rejuvenate Eidolon", jsx: <><div className="jumpList" id="spell-rejuvenate_eidolon_lesser-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="spell-rejuvenate_eidolon_lesser-rejuvenate-eidolon">Rejuvenate Eidolon</InnerLink></li><li><InnerLink toTop to="spell-rejuvenate_eidolon_lesser-greater-rejuvenate-eidolon">Greater Rejuvenate Eidolon</InnerLink></li></ul></div><h2 id="spell-rejuvenate_eidolon_lesser-lesser-rejuvenate-eidolon">Lesser Rejuvenate Eidolon</h2>
<SpellInfo id="1" source="Advanced Player's Guide/238" school="conj" subschools={["heal"]} sum={1} usm={1} ct="1 standard action" comp="V, S, M (a drop of your blood)" rTouch target="eidolon touched" dur="instantaneous" save="none" resist="no" />
<p>By laying your hand upon an eidolon, you cause its wounds to close and its form to solidify. This spell cures 1d10 points of damage +1 point per caster level (maximum +5).</p>
<h3 id="spell-rejuvenate_eidolon_lesser-rejuvenate-eidolon" data-hash-target>Rejuvenate Eidolon</h3>
<SpellInfo id="2" source="Advanced Player's Guide/238" school="conj" subschools={["heal"]} sum={3} usm={3} ct="1 standard action" comp="V, S, M (a drop of your blood)" rTouch target="eidolon touched" dur="instantaneous" save="none" resist="no" />
<p>This spell functions as lesser rejuvenate eidolon, except that it cures 3d10 points of damage +1 point per caster level (maximum +10).</p>
<h3 id="spell-rejuvenate_eidolon_lesser-greater-rejuvenate-eidolon" data-hash-target>Greater Rejuvenate Eidolon</h3>
<SpellInfo id="3" source="Advanced Player's Guide/238" school="conj" subschools={["heal"]} sum={5} usm={5} ct="1 standard action" comp="V, S, M (a drop of your blood)" rTouch target="eidolon touched" dur="instantaneous" save="none" resist="no" />
<p>This spell functions as lesser rejuvenate eidolon, except that it cures 5d10 points of damage +1 point per caster level (maximum +20).</p>
</>};
const _release_the_hounds = {title: "Release the Hounds", jsx: <><h2 id="spell-release_the_hounds-release-the-hounds">Release the Hounds</h2>
<SpellInfo id="1" source="Magic Tactics Toolbox/10" school="conj" subschools={["sum"]} arc={5} brd={5} drd={5} hnt={5} sha={5} skd={5} sor={5} sum={5} usm={5} wit={5} wiz={5} ct="1 standard action" comp="V, S, M/DF (shards of a canine's fang)" rClose effect="one pack of canines" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell summons a pack of canines that respond to the spellcaster's commands and act in perfect unison, causing them to function like a swarm. The pack uses the statistics for a winter wolf, except it loses its breath weapon, the cold subtype, and its cold special attack and gains the swarm subtype, a swarm attack that deals 3d6 points of damage, and the distraction special attack (DC 17). Whenever the pack damages an opponent with its swarm attack, it can immediately attempt a trip combat maneuver check against that creature with its trip special attack. The pack does not gain any damage reduction or immunity to damage and can be attacked by effects that target a specific number of creatures, though such attacks deal 1/4 the normal amount of damage (25%) and effects that don't deal hit point damage are only 25% likely to work.</p>
</>};
const _reloading_hands = {title: "Reloading Hands", jsx: <><h2 id="spell-reloading_hands-reloading-hands">Reloading Hands</h2>
<SpellInfo id="1" source="Ultimate Combat/242" school="conj" subschools={["creat"]} arc={2} hnt={2} mag={2} rgr={2} sor={2} wiz={2} ct="1 standard action" comp="V, S" rTouch target="projectile weapon touched" dur="1 round/caster level" />
<p>Once per round, phantom hands load a single ranged weapon or firearm with conjured ammunition. This ammunition counts as magical for overcoming damage reduction and attacking incorporeal creatures, but is the standard for its type (a normal bullet or pellets and black powder in the case of firearms). Conjured ammunition ceases to exist 1 round after it is removed from the weapon, or at the end of the duration, whichever comes first.</p>
</>};
const _remarkable_legerdemain = {title: "Remarkable Legerdemain", jsx: <><h2 id="spell-remarkable_legerdemain-remarkable-legerdemain">Remarkable Legerdemain</h2>
<SpellInfo id="1" source="Black Markets/31" school="trans" arc={2} brd={2} skd={2} sor={2} wiz={2} ct="1 standard action" comp="V, S" rPers target="you" dur="1 minute/level (D)" />
<p>While this spell is in effect, your body and clothing flutter and distort subtly, allowing you to conceal items with uncanny skill. You treat any object you can hold in one hand as a coin-sized object for the purposes of Sleight of Hand checks to palm the object or make it disappear; however, you can hide only one such item per caster level on your person at one time. This effect does not change the actual sizes of the objects.</p>
</>};
const _remote_viewing = {title: "Remote Viewing", jsx: <><h2 id="spell-remote_viewing-remote-viewing">Remote Viewing</h2>
<SpellInfo id="1" source="Occult Adventures/184" school="div" subschools={["scry"]} med={4} occ={5} psy={5} spr={5} ct="1 hour" comp="V, S, M (incense)" rText target="you" dur="instantaneous" />
<p>Your body enters a trance as you send your psychic senses to a distant location and gain psychic impressions of that location. You must specify the distance and direction to the location you desire to view remotely. This spell doesn't allow you to see the visual appearance of the location's surface, so it isn't useful for casting spells like teleport, but it grants you a psychic impression of the location, which could give you deeper information. For example, a forest that is home to a tight-knit community of fey might appear as a city in the trees, or a beautiful palace ruled by an evil king and warded by forbiddance might appear as a dark fortress encased in insubstantial chains.</p>
<p>During the 1 hour casting time of remote viewing, your real body is unconscious and helpless, and you are unaware of its surroundings.</p>
</>};
const _remove_blindness_deafness = {title: "Remove Blindness/Deafness", jsx: <><h2 id="spell-remove_blindness_deafness-remove-blindnessdeafness">Remove Blindness/Deafness</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/332" school="conj" subschools={["heal"]} alc={3} clr={3} inv={3} mes={3} orc={3} pal={3} sha={3} spr={3} war={3} wit={3} ct="1 standard action" comp="V, S" rTouch target="creature touched" dur="instantaneous" save="Fortitude negates (harmless)" resist="yes (harmless)" />
<p>Remove blindness/deafness cures blindness or deafness (your choice), whether the effect is normal or magical in nature. The spell does not restore ears or eyes that have been lost, but it repairs them if they are damaged.</p>
<p>Remove blindness/deafness counters and dispels <Link to="/spell/blindness_deafness">blindness/deafness</Link>.</p>
</>};
const _remove_curse = {title: "Remove Curse", jsx: <><h2 id="spell-remove_curse-remove-curse">Remove Curse</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/332" school="abjur" adp={3} alc={3} arc={4} brd={3} clr={3} inq={3} inv={3} med={3} mes={3} orc={3} pal={3} sha={3} skd={3} sor={4} spr={4} war={3} wit={3} wiz={4} ct="1 standard action" comp="V, S" rTouch target="creature or object touched" dur="instantaneous" save="Will negates (harmless)" resist="yes (harmless)" />
<p>Remove curse can remove all curses on an object or a creature. If the target is a creature, you must make a caster level check (1d20 + caster level) against the DC of each curse affecting the target. Success means that the curse is removed. Remove curse does not remove the curse from a cursed shield, weapon, or suit of armor, although a successful caster level check enables the creature afflicted with any such cursed item to remove and get rid of it.</p>
<p>Remove curse counters and dispels <Link to="/spell/bestow_curse">bestow curse</Link>.</p>
</>};
const _remove_disease = {title: "Remove Disease", jsx: <><h2 id="spell-remove_disease-remove-disease">Remove Disease</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/332" school="conj" subschools={["heal"]} adp={3} alc={3} clr={3} drd={3} hnt={3} inq={3} inv={3} orc={3} rgr={3} sha={3} spr={3} war={3} wit={3} ct="1 standard action" comp="V, S" rTouch target="creature touched" dur="instantaneous" save="Fortitude negates (harmless)" resist="yes (harmless)" />
<p>Remove disease can cure all diseases from which the subject is suffering. You must make a caster level check (1d20 + caster level) against the DC of each disease affecting the target. Success means that the disease is cured. The spell also kills some hazards and parasites, including green slime and others.</p>
<p>Since the spell's duration is instantaneous, it does not prevent reinfection after a new exposure to the same disease at a later date.</p>
</>};
const _remove_fear = {title: "Remove Fear", jsx: <><h2 id="spell-remove_fear-remove-fear">Remove Fear</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/332" school="abjur" brd={1} clr={1} inq={1} med={1} mes={1} orc={1} psy={1} sha={1} skd={1} spr={1} war={1} ct="1 standard action" comp="V, S" rClose targets="one creature plus one additional creature per four levels, no two of which can be more than 30 ft. apart" dur="10 minutes; see text" save="Will negates (harmless)" resist="yes (harmless)" />
<p>You instill courage in the subject, granting it a +4 morale bonus against fear effects for 10 minutes. If the subject is under the influence of a fear effect when receiving the spell, that effect is suppressed for the duration of the spell.</p>
<p>Remove fear counters and dispels <Link to="/spell/cause_fear">cause fear</Link>.</p>
</>};
const _remove_paralysis = {title: "Remove Paralysis", jsx: <><h2 id="spell-remove_paralysis-remove-paralysis">Remove Paralysis</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/332" school="conj" subschools={["heal"]} clr={2} inq={2} orc={2} pal={2} sha={2} spr={2} war={2} ct="1 standard action" comp="V, S" rClose targets="up to four creatures, no two of which can be more than 30 ft. apart" dur="instantaneous" save="Will negates (harmless)" resist="yes (harmless)" />
<p>You can free one or more creatures from the effects of temporary paralysis or related magic, including spells and effects that cause a creature to gain the staggered condition. If the spell is cast on one creature, the paralysis is negated. If cast on two creatures, each receives another save with a +4 resistance bonus against the effect that afflicts it. If cast on three or four creatures, each receives another save with a +2 resistance bonus.</p>
<p>The spell does not restore ability scores reduced by penalties, damage, or drain.</p>
</>};
const _remove_radioactivity = {title: "Remove Radioactivity", jsx: <><h2 id="spell-remove_radioactivity-remove-radioactivity">Remove Radioactivity</h2>
<SpellInfo id="1" source="Technology Guide/11" school="conj" subschools={["heal"]} brd={4} clr={4} drd={4} hnt={4} inq={4} orc={4} pal={4} rgr={4} skd={4} war={4} wit={4} ct="1 standard action" comp="V, S" rTouch target="creature or object touched" dur="instantaneous" save="Fortitude negates (object)" resist="yes (object)" />
<p>You remove all ongoing radiation effects, both primary and secondary, on a single target if you succeed at a caster level check (DC = the Fortitude DC associated with the radiation effect). In addition, you immediately restore 1d4 points of Constitution drain and 1d4 points of Strength drain caused by radiation-this spell cannot restore ability damage or drain caused by other sources. When cast on an area, a single casting of remove radioactivity removes radiation from a 20-foot-radius area around the point you touch. This spell has no power to negate naturally radioactive materials, and as long as such materials remain in an area, the radiation that was removed may return.</p>
<h3 id="spell-remove_radioactivity-greater-remove-radioactivity">Greater Remove Radioactivity</h3>
<SpellInfo id="2" source="Technology Guide/11" school="conj" subschools={["heal"]} clr={8} drd={8} orc={8} wit={8} ct="1 standard action" comp="V, S" rTouch target="creature or object touched" dur="instantaneous" save="Fortitude negates (object)" resist="yes (object)" />
<p>This spell functions like remove radioactivity, save that it cures all ability damage and drain due to radioactivity that the target has taken. In addition, you can deplete a radioactive object as well, although because you must touch the object to affect it, you expose yourself to at least 1 round of contact with the object's radiation. You must succeed at a caster level check (DC = 5 + the Fortitude DC associated with the radiation effect) in order to deplete the object. If you are successful, the object no longer emits radiation. In the case of a nuclear reactor or atomic warhead, this permanently renders the reactor or warhead inert and harmless.</p>
</>};
const _remove_sickness = {title: "Remove Sickness", jsx: <><h2 id="spell-remove_sickness-remove-sickness">Remove Sickness</h2>
<SpellInfo id="1" source="Ultimate Magic/234" school="conj" subschools={["heal"]} clr={1} drd={1} hnt={1} mes={1} orc={1} spr={1} war={1} wit={1} ct="1 standard action" comp="V, S" rClose targets="one creature" dur="10 minutes/level; see text" save="Fortitude negates (harmless)" resist="yes (harmless)" />
<p>You quell feelings of illness and nausea in the target, giving it a +4 morale bonus on saving throws against disease, nausea, and sickened effects. If the subject is already under the influence of one of these effects when receiving the spell, that effect is suppressed for the duration of the spell.</p>
</>};
const _rend_body_1 = {hasJL:true,title: "Rend Body I", jsx: <><div className="jumpList" id="spell-rend_body_1-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="spell-rend_body_1-rend-body-ii">Rend Body II</InnerLink></li><li><InnerLink toTop to="spell-rend_body_1-rend-body-iii">Rend Body III</InnerLink></li><li><InnerLink toTop to="spell-rend_body_1-rend-body-iv">Rend Body IV</InnerLink></li></ul></div><h2 id="spell-rend_body_1-rend-body-i">Rend Body I</h2>
<SpellInfo id="1" source="Psychic Anthology/10" school="evo" psy={5} ct="1 full-round action" comp="S" rClose target="one creature" dur="instantaneous" save="Fortitude partial (see text)" resist="yes" />
<p>You lacerate the body of the target creature with telekinetic force, rending it limb from limb. The target creature takes 1d6 points of damage per caster level you have (maximum 10d6 points of damage). If this spell deals an amount of damage to the target equal to more than half its maximum hit point total, one of the target's limbs (determined randomly) is gruesomely ripped from the target's body and flies 15 feet away from the creature in a random direction. The target then takes 1 point of bleed damage per 2 caster levels you have. The bleeding can be stopped by a successful DC 15 Heal check or the application of any effect that heals hit point damage, but the limb can be restored only by powerful healing effects such as heal or regeneration. If the damage reduces the target's hit points to below 0, all of its limbs are affected in this fashion.</p>
<p>Creatures without discernible anatomy or limbs are unaffected by rend body.</p>
<h3 id="spell-rend_body_1-rend-body-ii" data-hash-target>Rend Body II</h3>
<SpellInfo id="2" source="Psychic Anthology/10" school="evo" psy={6} ct="1 full-round action" comp="S" rClose target="one creature" dur="instantaneous" />
<p>This spell functions as per rend body I, but the target takes 1d8 points of damage per caster level you have (maximum 10d8). This spell can be undercast.</p>
<h3 id="spell-rend_body_1-rend-body-iii" data-hash-target>Rend Body III</h3>
<SpellInfo id="3" source="Psychic Anthology/10" school="evo" psy={7} ct="1 full-round action" comp="S" rClose target="one creature" dur="instantaneous" />
<p>This spell functions as per rend body I, but the target takes 1d8 points of damage per caster level you have (maximum 15d8), and if a limb is ripped from its body, the target is sickened for as long as the bleed damage persists. This spell can be undercast.</p>
<h3 id="spell-rend_body_1-rend-body-iv" data-hash-target>Rend Body IV</h3>
<SpellInfo id="4" source="Psychic Anthology/10" school="evo" psy={8} ct="1 full-round action" comp="S" rClose target="one creature" dur="instantaneous" />
<p>This functions as per rend body III, but the target takes 1d8 points of damage per caster level (maximum 20d8), and one of the target's limbs is ripped off if the amount of damage dealt is greater than 1/4 of its maximum hit point total. This spell can be undercast.</p>
</>};
const _renovation = {title: "Renovation", jsx: <><h2 id="spell-renovation-renovation">Renovation</h2>
<SpellInfo id="1" source="Quests and Campaigns/29" school="trans" arc={4} brd={5} rma={4} skd={5} sor={4} wiz={4} ct="8 hours" comp="V, S, M (silver dust worth 1,000 gp)" rTouch target="one unoccupied structure" dur="instantaneous" save="none (object" resist="no" />
<p>Upon casting this spell, you permanently rearrange and resize the rooms in a building you constructed as a <Link to="/rule/downtime_activities">downtime activity</Link>. You may reorganize and remap the building however you please, as if each room had just been constructed and is being positioned for the first time. You cannot make any changes to a building that changes how much a room would cost to create or that alters the benefits a room provides. The structure also must remain in the same general position within the district. If you don't wholly own the structure, all of the structure's owners must consent to the changes being made before the spell is cast; otherwise, it fails immediately.</p>
</>};
const _repair_undead = {title: "Repair Undead", jsx: <><h2 id="spell-repair_undead-repair-undead">Repair Undead</h2>
<SpellInfo id="1" source="Advanced Class Guide/191" school="necro" arc={1} sor={1} wiz={1} ct="1 standard action" comp="V, S" rTouch target="one undead creature touched (see text)" dur="instantaneous" save="Will half (harmless)" resist="yes (harmless)" />
<p>When you touch an undead creature, you channel negative energy that heals 1d8 points of damage + 1 point per caster level (maximum +5). This spell has no effect on living creatures, except those that are healed by negative energy are also healed by the spell.</p>
</>};
const _repair_undead_mass = {title: "Mass Repair Undead", jsx: <><h2 id="spell-repair_undead_mass-mass-repair-undead">Mass Repair Undead</h2>
<SpellInfo id="1" source="Advanced Class Guide/191" school="necro" arc={5} sor={5} spr={5} wiz={5} ct="1 standard action" comp="V, S" rClose targets="one undead creature/level, no two of which can be more than 30 ft. apart" dur="instantaneous" save="Will half (harmless)" resist="yes (harmless)" />
<p>This spell functions as <Link to="/spell/repair_undead">repair undead</Link>, except as noted above, and it cures 1d8 points of damage + 1 point per caster level (maximum +20) on each selected creature.</p>
</>};
const _repel_metal_or_stone = {title: "Repel Metal or Stone", jsx: <><h2 id="spell-repel_metal_or_stone-repel-metal-or-stone">Repel Metal or Stone</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/333" school="abjur" descriptors={["earth"]} drd={8} ct="1 standard action" comp="V, S" rFt={60} area="60-ft. line from you" dur="1 round/level (D)" save="none" resist="no" />
<p>This spell creates waves of invisible energy that roll forth from you. All metal or stone objects in the path of the spell are pushed away from you to the limit of the range. Fixed metal or stone objects larger than 3 inches in diameter and loose objects weighing more than 500 pounds are not affected. Anything else, including animated objects, small boulders, and creatures in metal armor, moves back. Fixed objects 3 inches in diameter or smaller bend or break, and the pieces move with the wave of energy. Objects affected by the spell are repelled at the rate of 40 feet per round.</p>
<p>Objects such as metal armor, swords, and the like are pushed back, dragging their bearers with them. Even magic items with metal components are repelled, although an antimagic field blocks the effects. A creature being dragged by an item it is carrying can let go. A creature being dragged by a shield can loose it as a move action and drop it as a free action.</p>
<p>The waves of energy continue to sweep down the set path for the spell's duration. After you cast the spell, the path is set, and you can then do other things or go elsewhere without affecting the spell's power.</p>
</>};
const _repel_vermin = {title: "Repel Vermin", jsx: <><h2 id="spell-repel_vermin-repel-vermin">Repel Vermin</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/333" school="abjur" descriptors={["pain"]} brd={4} clr={4} drd={4} hnt={3} orc={4} rgr={3} sha={4} skd={4} war={4} ct="1 standard action" comp="V, S, DF" rFt={10} area="10-ft.-radius emanation centered on you" dur="10 minutes/level (D)" save="none or Will negates; see text" resist="yes" />
<p>An invisible barrier holds back vermin. A vermin with HD of less than one-third your level cannot penetrate the barrier.</p>
<p>A vermin with HD of one-third your level or more can penetrate the barrier if it succeeds on a Will save. Even so, crossing the barrier deals the vermin 2d6 points of damage, and pressing against the barrier causes pain, which deters most vermin.</p>
</>};
const _repel_wood = {title: "Repel Wood", jsx: <><h2 id="spell-repel_wood-repel-wood">Repel Wood</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/333" school="trans" drd={6} hnt={6} ct="1 standard action" comp="V, S" rFt={60} area="60-ft. line-shaped emanation from you" dur="1 minute/level (D)" save="none" resist="no" />
<p>Waves of energy roll forth from you, moving in the direction that you determine, causing all wooden objects in the path of the spell to be pushed away from you to the limit of the range. Wooden objects larger than 3 inches in diameter that are fixed firmly are not affected, but loose objects are. Objects 3 inches in diameter or smaller that are fixed in place splinter and break, and the pieces move with the wave of energy. Objects affected by the spell are repelled at the rate of 40 feet per round.</p>
<p>Objects such as wooden shields, spears, wooden weapon shafts and hafts, and arrows and bolts are pushed back, dragging those carrying them along. A creature being dragged by an item it is carrying can let go. A creature being dragged by a shield can loose it as a move action and drop it as a free action. If a spear is planted (set) in a way that prevents this forced movement, it splinters. Even magic items with wooden sections are repelled, although an antimagic field blocks the effects.</p>
<p>The waves of energy continue to sweep down the set path for the spell's duration. After you cast the spell, the path is set, and you can then do other things or go elsewhere without affecting the spell's power.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-repel_wood--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Repel Wood</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 105</Link><br/>The casting time changes to 1 immediate action. You may cause one affected wooden object up to 5 inches in diameter to splinter and break.</p>
<p><em>Augmented (3rd):</em> If you expend two uses of mythic power, the area changes to a 60-foot, cone-shaped emanation from you.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _replay_tracks = {title: "Replay Tracks", jsx: <><h2 id="spell-replay_tracks-replay-tracks">Replay Tracks</h2>
<SpellInfo id="1" source="Ultimate Wilderness/233" school="div" drd={5} hnt={2} inq={4} med={3} occ={3} psy={5} rgr={2} ct="3 rounds" comp="V, S, F (a track or other sign of a creature's passing found with Perception or Survival)" rPers target="you" dur="concentration, up to 1 hour/level" />
<p>This spell allows you to reconstruct past events that occurred in your current location based on the tracks and other signs left behind. Replay tracks reveals events that occurred while the tracks that serve as the focus for the spell were being left, revealing events in the order they happened in real time or in reverse, depending on whether you are following the tracks forward or backward, although the image isn't clear enough to make out details (such as a creature's exact identity). You can attempt Survival checks to follow tracks as part of concentrating on the spell, but only events connected to the tracks used as the focus of the spell are revealed by the spell. Elements that left no trace detectable by you, such as creatures benefitting from pass without trace, are absent from the events you visualize.</p>
</>};
const _replenish_ki = {title: "Replenish Ki", jsx: <><h2 id="spell-replenish_ki-replenish-ki">Replenish Ki</h2>
<SpellInfo id="1" source="Inner Sea Gods/238;Pathfinder #53: Tide of Honor/73" school="conj" subschools={["heal"]} clr={4} orc={4} war={4} faith="Irori" ct="1 minute" comp="V, S, DF" rTouch target="creature touched" dur="instantaneous" save="Will negates (harmless)" resist="yes (harmless)" />
<p>You attune the target's internal store of supernatural energy to the cosmos, replenishing its ki pool. If you are the target, you regain 2 ki points. If another creature is the target, it regains 1 ki point. This does not allow the target to exceed its ki pool's maximum. This spell has no effect if the target does not have a ki pool.</p>
<Message spelldeity /></>};
const _repress_memory = {title: "Repress Memory", jsx: <><h2 id="spell-repress_memory-repress-memory">Repress Memory</h2>
<SpellInfo id="1" source="Occult Adventures/184" school="ench" subschools={["comp"]} descriptors={["mind"]} brd={5} mes={5} psy={6} skd={5} ct="1 round" comp="V, S" rPers target="you" dur="instantaneous" />
<p>This spell allows you to safeguard important knowledge, even from yourself. When casting this spell, you recount one piece of knowledge you possess (up to a maximum of 50 words). This knowledge disappears utterly from your mind, and you might not realize you forgot something. The magic of the spell patches omissions in your memory with indistinct haze. Repress memory protects against detect thoughts, discern lies, zone of truth, and similar spells, though careful questioning may reveal the gaps in your memory, or that your memory has been affected by the spell.</p>
<p>A repressed memory can be restored only by <Link to="/spell/break_enchantment">break enchantment</Link>, <Link to="/spell/psychic_surgery">psychic surgery</Link>, <Link to="/spell/limited_wish">limited wish</Link>, <Link to="/spell/miracle">miracle</Link>, or <Link to="/spell/wish">wish</Link>. If you use this spell to negate the memory of a magical compulsion, it doesn't remove the compulsion, nor does it remove procedural memories that might affect your skills or class abilities.</p>
<p>At the GM's discretion, multiple castings of this spell might erase memories of a lengthier event or all memory of a place or individual from your memory.</p>
</>};
const _reprobation = {title: "Reprobation", jsx: <><h2 id="spell-reprobation-reprobation">Reprobation</h2>
<SpellInfo id="1" source="Ultimate Magic/234" school={<><Link to="/spelldef/transmutation">transmutation</Link> [<Link to="/spelldef/curse">curse</Link>, see text]</>} clr={5} drd={5} hnt={5} inq={4} orc={5} pal={4} war={5} ct="1 minute" comp="V, S, DF" rClose target="one creature of your faith" dur="permanent" save="none" resist="yes" />
<p>You cast the target out of your religion as a curse and punishment for acts or misdeeds against the tenets of your faith. This has three effects.</p>
<p>First, the target is marked with a magical symbol visible only to members of your faith. This symbol indicates that the target has transgressed and that the faithful should not help it. Likewise, the target is not to be persecuted because of the mark (though this would not keep members of a lawful faith from imprisoning a known criminal if these crimes were known to have taken place after he gained the mark).</p>
<p>Second, the target is no longer affected by helpful spells cast by the faithful and is always treated as an enemy for the purpose of other spells cast by those of your faith. For example, cure light wounds cast by a member of your faith has no effect on the target. If the target were traveling with a cleric of your faith who cast prayer, that spell would penalize rather than aid the target, despite the target's friendship with the cleric.</p>
<p>Third, if the target is a divine spellcaster, a member of a prestige class of your faith, or otherwise has some ability because the target belongs to your faith, it cannot use those abilities while the mark remains in place. For example, a paladin of your faith would be unable to cast paladin spells or use lay on hands or other class abilities. The target can join another faith to regain the use of these abilities, but the mark remains visible to those of your faith, even if those of the new faith accept the target.</p>
<p>This powerful spell with no saving throw is used to punish severe transgressions that do not deserve death or when you prefer to be merciful rather than meting out a more severe punishment. However, the spell has one drawback that prevents it from being overused. If the target did not commit any acts or misdeeds against your faith, the spell does not affect it but affects you instead, even if you are innocent of the charges. This potential backlash prevents inquisitions run by corrupt members of the faith, and it means that most accusations of misconduct are carefully investigated (and usually verified with magic) before this sentence is handed down.</p>
<p>This mark can be removed like any other curse effect. In addition, a member of your faith can use <Link to="/spell/atonement">atonement</Link> to break the curse if he makes a caster level check against your caster level; <Link to="/spell/remove_curse">remove curse</Link> also requires a caster of your faith and a caster level check to end the reprobation.</p>
</>};
const _repugnant_taste = {title: "Repugnant Taste", jsx: <><h2 id="spell-repugnant_taste-repugnant-taste">Repugnant Taste</h2>
<SpellInfo id="1" source="Monster Hunter's Handbook/30" school="trans" descriptors={["poi"]} alc={3} brd={3} drd={4} hnt={3} inv={3} mes={3} rgr={3} sha={4} skd={3} wit={4} ct="1 standard action" comp="V, S, M/DF (mustard seed)" rTouch target="creature touched" dur="10 minutes/level" save="Fortitude negates (harmless)" resist="yes (harmless)" />
<p>The target creature begins sweating a foul liquid that makes it repugnant to most living creatures. When a creature deals damage to the affected creature with a bite attack or the swallow whole ability, it must succeed at a Fortitude saving throw or become nauseated until the end of its next turn. After a creature has become nauseated by this spell, each subsequent failed saving throw against the spell instead gives it the sickened condition until the end of its next turn.</p>
</>};
const _repulsion = {title: "Repulsion", jsx: <><h2 id="spell-repulsion-repulsion">Repulsion</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/333" school="abjur" arc={6} clr={7} inq={6} occ={6} orc={7} psy={7} sor={6} spr={6} sum={5} usm={6} wiz={6} ct="1 standard action" comp="V, S, F/DF (a pair of canine statuettes worth 50 gp)" r="up to 10 ft./level" area="up to 10-ft.-radius/level emanation centered on you" dur="1 round/level (D)" save="Will negates" resist="yes" />
<p>An invisible, mobile field surrounds you and prevents creatures from approaching you. You decide how big the field is at the time of casting (to the limit your level allows). Any creature within or entering the field must attempt a save. If it fails, it becomes unable to move toward you for the duration of the spell. Repelled creatures' actions are not otherwise restricted. They can fight other creatures and can cast spells and attack you with ranged weapons. If you move closer to an affected creature, nothing happens. The creature is not forced back. The creature is free to make melee attacks against you if you come within reach. If a repelled creature moves away from you and then tries to turn back toward you, it cannot move any closer if it is still within the spell's area.</p>
</>};
const _residual_tracking = {title: "Residual Tracking", jsx: <><h2 id="spell-residual_tracking-residual-tracking">Residual Tracking</h2>
<SpellInfo id="1" source="Advanced Player's Guide/238" school="div" hnt={1} occ={2} rgr={1} ct="1 minute" comp="V, S, M (a bit of plaster)" rTouch target="footprint touched" dur="instantaneous" save="none" resist="no" />
<p>By touching a footprint, you receive a clear mental image of the person or creature that made it. The image has the exact same appearance as the creature that made the footprint at the moment it made the imprint, including any telling features or expressions, any gear or equipment, or anything else the creature was carrying at the time. For example, the footprint of a horse would reveal both the horse and any creature riding it when it made the footprint.</p>
</>};
const _resilient_reservoir = {title: "Resilient Reservoir", jsx: <><h2 id="spell-resilient_reservoir-resilient-reservoir">Resilient Reservoir</h2>
<SpellInfo id="1" source="Advanced Race Guide/49" school="trans" arc={4} mag={3} mes={3} pal={3} psy={4} rma={4} sor={4} wit={4} wiz={4} ct="1 standard action" comp="V, S" rPers area="special, see text" dur="1 round/ level" save="none (see below)" resist="yes" />
<blockquote>
<p><em><Link to="/race/half_elves">Half-elves</Link> have access to the following spell.</em></p>
</blockquote>
<p>Upon casting this spell, damage from melee attacks and touch spells gets transferred into a special pool that you then redirect before the spell's duration expires.</p>
<p>Each time you are struck by a melee attack or touch spell that deals hit point damage, 1 point of damage is negated and transferred into the reservoir created by this spell. The total number of points in the reservoir cannot exceed your caster level (to a maximum of 20 points at 20th level). As an immediate action, anytime before the spell's duration expires, you can expend a number of points of energy from the reservoir, granting yourself an insight bonus on one skill check, attack roll, damage roll, or combat maneuver check, but you must do so before the roll is made. This bonus is equal to the number of points spent. For every five caster levels, you may call upon the reservoir one additional time (maximum of four times at 15th level).</p>
<p>If you are reduced to negative hit points while you are under the effect of this spell, the spell automatically release the remaining magic of the reservoir in a concussive blast of force. All creatures within a 15-foot radius take 1d6 points of force damage per 2 points remaining in the reserve (maximum of 10d6). A successful Reflex save halves this damage, and spell resistance applies to this effect.</p>
</>};
const _resilient_sphere = {title: "Resilient Sphere", jsx: <><h2 id="spell-resilient_sphere-resilient-sphere">Resilient Sphere</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/333" school="evo" descriptors={["force"]} arc={4} occ={4} psy={4} sor={4} wiz={4} ct="1 standard action" comp="V, S, F (a crystal sphere)" rClose effect="1-ft.-diameter/level sphere, centered around a creature" dur="1 minute/level (D)" save="Reflex negates" resist="yes" />
<p>A globe of shimmering force encloses a creature, provided the creature is small enough to fit within the diameter of the sphere. The sphere contains its subject for the spell's duration. The sphere functions as a <Link to="/spell/wall_of_force">wall of force</Link>, except that it can be negated by <Link to="/spell/dispel_magic">dispel magic</Link>. A subject inside the sphere can breathe normally. The sphere cannot be physically moved either by people outside it or by the struggles of those within.</p>
</>};
const _resinous_skin = {title: "Resinous Skin", jsx: <><h2 id="spell-resinous_skin-resinous-skin">Resinous Skin</h2>
<SpellInfo id="1" source="Ultimate Combat/242" school="trans" alc={3} arc={3} bld={3} drd={3} hnt={3} inv={3} psy={3} rma={3} sor={3} wiz={3} ct="1 standard action" comp="V, S" rPers target="you" dur="10 minutes/level" save="see text" resist="no" />
<p>You coat your body with a resinous substance, protecting you from attacks and binding weapons that strike you. You gain DR 5/piercing, as well as a +4 circumstance bonus to your CMD against disarm attempts and on saving throws against effects that cause you to drop something you are holding. Additionally, you gain a +2 circumstance bonus on combat maneuver checks to initiate a grapple, maintain a grapple, and pin a foe. Any enemy you grapple takes a -2 penalty on attempts to break the grapple and to escape the grapple using Escape Artist. Any weapon, that strikes you becomes stuck unless its wielder succeeds at a Reflex saving throw. Such a weapon can be pulled free of you only with a successful Strength check (DC = your saving throw DC for this spell). This spell has no effect on unarmed strikes or natural weapons.</p>
</>};
const _resist_energy = {hasJL:true,title: "Resist Energy", jsx: <><div className="jumpList" id="spell-resist_energy-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="spell-resist_energy-mythic_resist_energy">Mythic Resist Energy</InnerLink></li><li><InnerLink toTop to="spell-resist_energy-communal-resist-energy">Communal Resist Energy</InnerLink></li></ul></div><h2 id="spell-resist_energy-resist-energy">Resist Energy</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/334" school="abjur" adp={2} alc={2} arc={2} bld={2} clr={2} drd={2} hnt={1} inq={2} inv={2} occ={2} orc={2} pal={2} psy={2} rgr={1} sha={2} sor={2} spr={2} sum={2} usm={2} war={2} wiz={2} ct="1 standard action" comp="V, S, DF" rTouch target="creature touched" dur="10 minutes/level" save="Fortitude negates (harmless)" resist="yes (harmless)" />
<p>This abjuration grants a creature limited protection from damage of whichever one of five energy types you select: acid, cold, electricity, fire, or sonic. The subject gains resist energy 10 against the energy type chosen, meaning that each time the creature is subjected to such damage (whether from a natural or magical source), that damage is reduced by 10 points before being applied to the creature's hit points. The value of the energy resistance granted increases to 20 points at 7th level and to a maximum of 30 points at 11th level. The spell protects the recipient's equipment as well.</p>
<p>Resist energy absorbs only damage. The subject could still suffer unfortunate side effects.</p>
<p>Resist energy overlaps (and does not stack with) <Link to="/spell/protection_from_energy">protection from energy</Link>. If a character is warded by protection from energy and resist energy, the protection spell absorbs damage until its power is exhausted.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-resist_energy--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col" id="spell-resist_energy-mythic_resist_energy" data-hash-target>Mythic Resist Energy</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 105</Link></p>
<p>The target gains a +4 bonus on saves against effects that deal damage of the selected energy type. Once each round as a free action, the target can choose one adjacent ally to gain energy resistance 5 against the chosen energy type for 1 round. This increases to energy resistance 10 at caster level 7 and energy resistance 15 at caster level 11.</p>
</td></tr></tbody></table></ScrollContainer></div><h3 id="spell-resist_energy-communal-resist-energy" data-hash-target>Communal Resist Energy</h3>
<SpellInfo id="2" source="Ultimate Combat/242" school="abjur" alc={3} arc={3} clr={3} drd={3} hnt={3} inq={3} inv={3} occ={3} orc={3} pal={3} psy={3} rgr={3} sor={3} sum={3} usm={3} war={3} wiz={3} ct="1 standard action" comp="V, S, DF" rTouch targets="creatures touched" dur="10 minutes/level" save="Fortitude negates (harmless)" resist="yes (harmless)" />
<p>This spell functions like resist energy, except you divide the duration in 10-minute intervals among the creatures touched.</p>
</>};
const _resist_starvation = {title: "Resist Starvation", jsx: <><h2 id="spell-resist_starvation-resist-starvation">Resist Starvation</h2>
<SpellInfo id="1" source="Villain Codex/21" school="trans" ant={1} clr={1} orc={1} sha={1} war={1} ct="1 standard action" comp="V, S, M (crumb of food)" rTouch target="one living creature touched" dur="1 day/level" save="Will negates (harmless)" resist="yes (harmless)" />
<p>If the target doesn't eat on the day this spell is cast on it, the DC to avoid taking nonlethal damage from starvation on the following day doesn't increase by 1. This spell fails if the target hasn't already attempted at least one Constitution check to avoid starvation.</p>
</>};
const _resistance = {title: "Resistance", jsx: <><h2 id="spell-resistance-resistance">Resistance</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/334" school="abjur" arc={0} brd={0} clr={0} drd={0} hnt={0} inq={0} med={0} occ={0} orc={0} pal={1} psy={0} sha={0} skd={0} sor={0} spr={0} sum={0} usm={0} war={0} wit={0} wiz={0} ct="1 standard action" comp="V, S, M/DF (a miniature cloak)" rTouch target="creature touched" dur="1 minute" save="Will negates (harmless)" resist="yes (harmless)" />
<p>You imbue the subject with magical energy that protects it from harm, granting it a +1 resistance bonus on saves.</p>
<p>Resistance can be made permanent with a <Link to="/spell/permanency">permanency</Link> spell.</p>
</>};
const _resize_item = {title: "Resize Item", jsx: <><h2 id="spell-resize_item-resize-item">Resize Item</h2>
<SpellInfo id="1" source="Giant Hunter's Handbook/33" school="trans" arc={3} sor={3} wiz={3} ct="1 standard action" comp="V, S, M (silver calipers worth 25 gp)" rTouch target="one weapon or suit of armor weighing up to 25 lbs./level" dur="24 hours (D)" save="Will negates (object)" resist="yes (object)" />
<p>You alter a magic weapon or suit of armor to be up to two size categories larger or smaller. If the spell on a resized suit of armor ends while the armor is being worn, the armor falls off harmlessly. If the spell would cause an item to grow too large for the area containing it, its growth halts just before that point.</p>
<p>Resize item can be made permanent with a <Link to="/spell/permanency">permanency</Link> spell for 7,500 gp, in which case the affected object is set at one specific new size within two steps of its original size.</p>
</>};
const _resonating_word = {title: "Resonating Word", jsx: <><h2 id="spell-resonating_word-resonating-word">Resonating Word</h2>
<SpellInfo id="1" source="Ultimate Magic/235" school="trans" descriptors={["sonic"]} arc={7} brd={5} psy={7} skd={5} sor={7} wiz={7} ct="1 standard action" comp="V" rMed target="one creature" dur="3 rounds" save="Fortitude partial" resist="yes" />
<p>You speak a terrible word of power, setting up potentially lethal vibrations in the chosen target. The target must save once each round on your turn, and the effects grow stronger for each saving throw the creature fails.</p>
<p>On the first round, the target takes 5d6 points of sonic damage and is staggered for 1 round. A successful save halves the damage and negates the staggered effect.</p>
<p>On the second round, the target takes 5d6 points of damage and is stunned for 1 round. A successful save halves the damage and negates the stunning effect.</p>
<p>On the third round, the target takes 10d6 points of damage and is stunned for 1d4+1 rounds. A successful save halves the damage and negates the stunning effect.</p>
<p>The resonating word has no power after the third round, even if the spell's duration is increased.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-resonating_word--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Resonating Word</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 105</Link><br/>The damage dealt increases to 8d6 points on the 1st and 2nd rounds and 15d6 on the 3rd round. The target takes a -4 penalty on saving throws against all sonic effects.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _resounding_blow = {title: "Resounding Blow", jsx: <><h2 id="spell-resounding_blow-resounding-blow">Resounding Blow</h2>
<SpellInfo id="1" source="Advanced Player's Guide/238" school="evo" descriptors={["sonic"]} ant={4} inq={5} pal={4} ct="1 swift action" comp="V" rPers target="you" dur="1 round/level" save="Fortitude partial, see text" resist="no" />
<p>You must have a melee weapon in hand to cast this spell. On a successful melee attack, your weapon resounds with a thunderous clash. The target takes 1d6 points of sonic damage. Your weapon is not harmed by this attack.</p>
<p>If you are using your judgment ability or smite ability against the target, it is staggered for 1 round on a successful attack. A successful Fortitude save negates the staggering effect.</p>
<p>On a successful critical hit, the target is stunned for 1 round and deafened for 1d6 rounds. A successful Fortitude save negates the stunning and deafening effects. If you are also using judgment or smite, your foe makes only a single save against all effects.</p>
<p>This spell immediately ends if your weapon leaves your hand. Resounding blow stacks with the thundering weapon property.</p>
</>};
const _resounding_clang = {title: "Resounding Clang", jsx: <><h2 id="spell-resounding_clang-resounding-clang">Resounding Clang</h2>
<SpellInfo id="1" source="People of the River/27" school="trans" brd={2} skd={2} ct="1 standard action" comp="S, F (bell, chimes, gong, or cymbals)" rFt={30} area="30-ft.-radius burst, centered on you" dur="1 round/level" save="Reflex negates" resist="yes (object)" />
<p>You create a loud, resonating clangor that causes metallic objects to vibrate wildly. Affected creatures wielding metal weapons take a -1 penalty on attack rolls, while creatures using metallic tools take a -1 penalty on associated skill checks. Creatures wearing metal armor increase the armor check penalty of their armor by 1. These penalties increase by 1 at 8th caster level and every 4 caster levels thereafter (to a maximum of -4 at 16th level).</p>
<p>To be affected by the spell, an item must be composed primarily of metal. Nonmetallic objects with metal components (such as studded leather armor or padded armor with armor spikes) are not affected. Creatures made of metal take the penalties described above on attack rolls, damage rolls, skill checks, and Reflex saves.</p>
</>};
const _respectful_quiet = {title: "Respectful Quiet", jsx: <><h2 id="spell-respectful_quiet-respectful-quiet">Respectful Quiet</h2>
<SpellInfo id="1" source="Inner Sea Races/222" school="ill" subschools={["glamer"]} brd={3} clr={5} inq={3} orc={5} skd={3} war={5} ct="1 standard action" comp="V, S, DF" rMed targets="any number of creatures in a 30-ft.-radius burst" dur="1 minute/level (D)" save="Will negates" resist="yes" />
<blockquote>
<p><em>The following spell is available to the indicated race or ethnicity: Chelaxian</em></p>
</blockquote>
<p>All targets are rendered silent, as per silence. The silence affects the entirety of each creature but does not extend beyond. However, the silence is one-way-sounds from outside the creatures' spaces can still enter. Quieted creatures gain a +10 circumstance bonus on Stealth checks.</p>
</>};
const _resplendent_mansion = {title: "Resplendent Mansion", jsx: <><h2 id="spell-resplendent_mansion-resplendent-mansion">Resplendent Mansion</h2>
<SpellInfo id="1" source="Ultimate Intrigue/224" school="conj" subschools={["creat"]} arc={9} psy={9} sor={9} wiz={9} ct="1 minute" comp="V, S, F (a miniature cornerstone carved from precious gemstones worth 500 gp)" rLong effect="opulent mansion, up to 300 feet on a side and one story tall/4 levels" dur="1 day/level (D)" save="none" resist="no" />
<p>This spell creates a towering mansion. While casting the spell, you hold an image of the mansion and its desired appearance in your mind. The mansion can contain as many or as few rooms as you desire, and is decorated to match your image. You can imagine a purpose for each room of the mansion, and the proper accouterments appear within. Any furniture or other mundane fixtures function normally for anyone inside the mansion, but cease to exist if taken beyond its walls. No fixture created with this spell can create magical effects, but magical devices brought into the mansion function normally.</p>
<p>A resplendent mansion contains the same types of foodstuffs and servants as a mage's magnificent mansion.</p>
<p>Each of the mansion's exterior doorways and windows are protected by alarm spells. You choose whether each alarm is audible or mental as you cast the spell, and each alarm has a different sound (for an audible alarm) or sensation (for a mental one), allowing you to instantly determine which portal has been used.</p>
<p>The mansion must be created on a plot of land free of other structures. It adapts to the natural terrain, adopting all structural requirements for being built on, for example, a mountainside. The mansion adjusts around small features such as ponds or spires of rock, but can't be created on water or other non-solid surfaces. If created on snow, sand dunes, or other soft surfaces with a solid surface underneath, the foundation reaches the solid ground. If created on a solid but unstable surface, such as a swamp or an area plagued by tremors, there's a 10% chance each day that the mansion begins to sink or collapse.</p>
<p>The mansion doesn't harm creatures within the area when it appears, and can't be created among a crowd or in a densely populated area. Any creature inadvertently caught inside the mansion when the spell is cast ends up unharmed inside the complete mansion.</p>
</>};
const _rest_eternal = {title: "Rest Eternal", jsx: <><h2 id="spell-rest_eternal-rest-eternal">Rest Eternal</h2>
<SpellInfo id="1" source="Advanced Player's Guide/238" school="necro" descriptors={["curse"]} clr={4} drd={5} hnt={5} orc={4} sha={5} war={4} wit={5} ct="1 round" comp="V, S, M/DF (ashes and a vial of holy or unholy water)" rTouch target="one dead creature touched" dur="permanent" save="none" resist="no" />
<p>You place a curse upon a dead creature that bars its spirit from returning. Anyone casting a spell that would communicate with the dead creature, return it to life, or turn it into an undead creature must succeed on a caster level check with a DC of 11 plus your caster level. Rest eternal cannot be dispelled, but it can be negated with <Link to="/spell/remove_curse">remove curse</Link> or <Link to="/spell/break_enchantment">break enchantment</Link>.</p>
</>};
const _restful_cloak = {title: "Restful Cloak", jsx: <><h2 id="spell-restful_cloak-restful-cloak">Restful Cloak</h2>
<SpellInfo id="1" source="Adventurer's Armory 2/21" school="conj" subschools={["heal"]} clr={2} drd={2} hnt={2} occ={2} orc={2} pal={2} rgr={2} sha={2} war={2} ct="1 standard action" comp="V, S, F (cloak)" rPers target="you" dur="1 hour/level" />
<p>A cloak you are wearing transforms into a canvas tent large enough to hold four Medium creatures, firmly pitched in a flat area adjacent to you (if there is no such area, this spell simply fails). A creature regains 1 hit point for each hour it rests in the tent, in addition to any other benefits of resting. Additionally, a fatigued creature resting within the tent for 1 hour loses the fatigued condition, but a creature cannot recover from being fatigued more than once per casting of restful tent. At the end of the spell's duration, the tent transforms back into a cloak. If the tent is moved prior to the expiration of the spell's duration, the spell immediately ends.</p>
</>};
const _restful_sleep = {title: "Restful Sleep", jsx: <><h2 id="spell-restful_sleep-restful-sleep">Restful Sleep</h2>
<SpellInfo id="1" source="Advanced Player's Guide/239" school="necro" brd={1} skd={1} ct="10 minutes" comp="V, S, M (a pinch of sand)" rClose target="one creature/level, no two of which can be more than 30 ft. apart" dur="8 hours or 24 hours; see text" save="Fortitude negates (harmless)" resist="yes (harmless)" />
<p>You cast this spell immediately prior to resting. While under the effects of this spell, you and your allies enjoy a restful night's sleep. If a subject completes a full night's rest, it regains hit points as if it had undergone a full day of <Link to="/rule/bed_rest">bed rest</Link> (regaining twice its character level in hit points). If a subject completes a full day's rest, it regains three times its character level in hit points. Any significant interruption during the rest (such as being awoken) prevents any healing that night and ends the effect of this spell on the awakened subject. Any healing acquired while under the effects of restful sleep is considered natural healing, and has no affect on effects requiring magical healing to cure.</p>
</>};
const _restoration = {hasJL:true,title: "Restoration", jsx: <><div className="jumpList" id="spell-restoration-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="spell-restoration-greater-restoration">Greater Restoration</InnerLink></li><li><InnerLink toTop to="spell-restoration-lesser-restoration">Lesser Restoration</InnerLink></li></ul></div><h2 id="spell-restoration-restoration">Restoration</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/334" school="conj" subschools={["heal"]} adp={4} alc={4} clr={4} inq={4} inv={4} mes={4} orc={4} pal={4} sha={4} spr={4} war={4} ct="3 rounds" comp="V, S, M (diamond dust worth 100 gp or 1,000 gp, see text)" rTouch target="creature touched" dur="instantaneous" save="Will negates (harmless)" resist="yes (harmless)" />
<p>This spell functions like lesser restoration, except that it also dispels temporary negative levels or one permanent negative level. If this spell is used to dispel a permanent negative level, it has a material component of diamond dust worth 1,000 gp. This spell cannot be used to dispel more than one permanent negative level possessed by a target in a 1-week period.</p>
<p>Restoration cures all temporary ability damage, and it restores all points permanently drained from a single ability score (your choice if more than one is drained). It also eliminates any fatigue or exhaustion suffered by the target.</p>
<h3 id="spell-restoration-greater-restoration" data-hash-target>Greater Restoration</h3>
<SpellInfo id="2" source="PRPG Core Rulebook/334" school="conj" subschools={["heal"]} clr={7} orc={7} sha={7} ct="3 rounds" comp="V, S, M (diamond dust worth 5,000 gp)" rTouch target="creature touched" dur="instantaneous" save="Will negates (harmless)" resist="yes (harmless)" />
<p>This spell functions like lesser restoration, except that it dispels all permanent and temporary negative levels afflicting the healed creature. Greater restoration also dispels all magical effects penalizing the creature's abilities, cures all temporary ability damage, and restores all points permanently drained from all ability scores. It also eliminates fatigue and exhaustion, and removes all forms of insanity, confusion, and similar mental effects.</p>
<h3 id="spell-restoration-lesser-restoration" data-hash-target>Lesser Restoration</h3>
<SpellInfo id="3" source="PRPG Core Rulebook/334" school="conj" subschools={["heal"]} alc={2} clr={2} drd={2} hnt={2} inq={2} inv={2} mes={2} orc={2} pal={1} sha={2} spr={2} war={2} ct="3 rounds" comp="V, S" rTouch target="creature touched" dur="instantaneous" save="Will negates (harmless)" resist="yes (harmless)" />
<p>Lesser restoration dispels any magical effects reducing one of the subject's ability scores or cures 1d4 points of temporary ability damage to one of the subject's ability scores. It also eliminates any fatigue suffered by the character, and improves an exhausted condition to fatigued. It does not restore permanent ability drain.</p>
</>};
const _restore_corpse = {title: "Restore Corpse", jsx: <><h2 id="spell-restore_corpse-restore-corpse">Restore Corpse</h2>
<SpellInfo id="1" source="Ultimate Magic/235" school="necro" arc={1} clr={1} drd={1} hnt={1} med={1} occ={1} orc={1} psy={1} sor={1} war={1} wit={1} wiz={1} ct="1 standard action" comp="V, S" rTouch target="corpse touched" dur="instantaneous" save="none" resist="no" />
<p>You grow flesh on a decomposed or skeletonized corpse of a Medium or smaller creature, providing it with sufficient flesh that it can be animated as a zombie rather than a skeleton. The corpse looks as it did when the creature died. The new flesh is somewhat rotted and not fit for eating.</p>
</>};
const _restore_eidolon_lesser = {title: "Lesser Restore Eidolon", jsx: <><h2 id="spell-restore_eidolon_lesser-lesser-restore-eidolon">Lesser Restore Eidolon</h2>
<SpellInfo id="1" source="Ultimate Magic/235" school="conj" subschools={["heal"]} sum={2} usm={2} ct="3 rounds" comp="V, S" rTouch target="eidolon touched" dur="instantaneous" save="Will negates (harmless)" resist="yes (harmless)" />
<p>This spell functions as <Link to="/spell/lesser_restoration">lesser restoration</Link>, except it only affects an eidolon.</p>
<h3 id="spell-restore_eidolon_lesser-restore-eidolon">Restore Eidolon</h3>
<SpellInfo id="2" source="Ultimate Magic/235" school="conj" subschools={["heal"]} sum={3} usm={3} ct="1 minute" comp="V, S, M (diamond dust worth 100 gp or 1,000 gp, see text)" rTouch target="eidolon touched" dur="instantaneous" save="Will negates (harmless)" resist="yes (harmless)" />
<p>This spell functions as <Link to="/spell/restoration">restoration</Link>, except it only affects an eidolon.</p>
</>};
const _restore_mythic_power = {title: "Restore Mythic Power", jsx: <><h2 id="spell-restore_mythic_power-restore-mythic-power">Restore Mythic Power</h2>
<SpellInfo id="1" source="Mythic Adventures/114" school="trans" arc={3} brd={3} clr={3} med={2} orc={3} psy={3} rma={3} skd={3} sor={3} war={3} wit={3} wiz={3} ct="1 standard action" comp="V, S" rTouch targets="you and one mythic creature" dur="instantaneous" save="Will negates (harmless)" resist="yes (harmless)" />
<p>By laying your hands on the target, you're able to transfer some of your mythic essence to the target. You expend three uses of your mythic power to restore one use of the target's mythic power.</p>
</>};
const _resurgent_transformation = {title: "Resurgent Transformation", jsx: <><h2 id="spell-resurgent_transformation-resurgent-transformation">Resurgent Transformation</h2>
<SpellInfo id="1" source="Advanced Player's Guide/239" school="conj" subschools={["heal"]} alc={5} inv={5} ct="1 standard action" comp="V, S, M (a pinch of meteoric iron worth 100 gp)" rPers target="you" dur="1 hour/level or until triggered, then 1 round/level" />
<p>Resurgent transformation grants you the ability to recover from deadly wounds with restored vitality and a will to fight, but at a price. Once cast, resurgent transformation lies dormant for up to 1 hour per level until you are reduced to one-quarter hit points or less. Once triggered, you immediately gain a +4 enhancement bonus to Constitution and Strength, damage reduction 5/-, and the benefits of a haste spell. In addition, you heal 4d8 points of damage + 1 point per caster level (maximum +25). Resurgent transformation can even save you from death by healing the damage from an otherwise mortal wound, though it does not prevent death from massive damage or from causes other than hit point loss. Your mental faculties are impaired by this magical transformation, however, causing 1d4 points of Intelligence and Wisdom damage.</p>
<p>The advantages from your transformation persist for 1 round per caster level after the spell is triggered. Once the spell ends, it takes a heavy toll, leaving you exhausted and inflicting 1d4 points of Constitution damage. Utilizing more than one resurgent transformation in a day is particularly risky. The expiration of a second resurgent transformation in a 24-hour period inflicts an additional 1d4 points of Constitution damage and results in death from system shock unless you succeed at a DC 15 Fortitude save, made after the Constitution damage has been applied.</p>
<p>If the spell expires or is dispelled before the transformation has been triggered, no adverse effects result.</p>
</>};
const _resurrection = {hasJL:true,title: "Resurrection", jsx: <><div className="jumpList" id="spell-resurrection-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="spell-resurrection-false-resurrection">False Resurrection</InnerLink></li><li><InnerLink toTop to="spell-resurrection-greater-false-resurrection">Greater False Resurrection</InnerLink></li></ul></div><h2 id="spell-resurrection-resurrection">Resurrection</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/334" school="conj" subschools={["heal"]} clr={7} orc={7} sha={8} wit={8} ct="1 minute" comp="V, S, M (diamond worth 10,000 gp), DF" rTouch target="dead creature touched" dur="instantaneous" save="none, see text" resist="yes" />
<p>This spell functions like <Link to="/spell/raise_dead">raise dead</Link>, except that you are able to restore life and complete strength to any deceased creature.</p>
<p>The condition of the remains is not a factor. So long as some small portion of the creature's body still exists, it can be resurrected, but the portion receiving the spell must have been part of the creature's body at the time of death. (The remains of a creature hit by a disintegrate spell count as a small portion of its body.) The creature can have been dead no longer than 10 years per caster level.</p>
<p>Upon completion of the spell, the creature is immediately restored to full hit points, vigor, and health, with no loss of prepared spells. The subject of the spell gains one permanent negative level when it is raised, just as if it had been hit by an energy-draining creature. If the subject is 1st level, it takes 2 points of Constitution drain instead (if this would reduce its Con to 0 or less, it can't be resurrected).</p>
<p>You can resurrect someone killed by a death effect or someone who has been turned into an undead creature and then destroyed. You cannot resurrect someone who has died of old age. Constructs, elementals, outsiders, and undead creatures can't be resurrected.</p>
<h3 id="spell-resurrection-false-resurrection" data-hash-target>False Resurrection</h3>
<SpellInfo id="2" source="Ultimate Intrigue/214" school="conj" subschools={["call"]} descriptors={["chaotic","evil","ruse"]} clr={7} orc={7} sha={8} wit={8} ct="1 minute" comp="V, S, M (diamond worth 10,000 gp), DF" rTouch target="dead creature touched" dur="1 day/level" save="none" resist="yes" />
<p>This spell functions as resurrection except that instead of recalling the dead soul to life, the spell calls a shadow demon with the advanced simple template to possess the body. If you fail to overcome the subject's spell resistance, the subject's soul can negate the calling and gain the option to return to life (as resurrection) in the restored body. The possession otherwise functions (as possession) except that the subject's soul is not present to resist. When false resurrection ends or the demon is removed from the subject, the demon returns to the Abyss, leaving the body alive but soulless (like that created by clone). If the soul hasn't been returned to life already, it has the option to return in the now-empty body if it still lives (as resurrection). If the body was killed, the demon is sent back to the Abyss but the subject remains dead.</p>
<p>Attempts to identify false resurrection with a skill check incorrectly identify it as resurrection (see the <Link to="/spelldef/ruse">ruse</Link> descriptor). A fooled viewer mistakes false resurrection's aura as the lingering aura of an instantaneous conjuration effect.</p>
<h3 id="spell-resurrection-greater-false-resurrection" data-hash-target>Greater False Resurrection</h3>
<SpellInfo id="3" source="Ultimate Intrigue/214" school="conj" subschools={["call"]} descriptors={["evil","lawful","ruse"]} clr={9} orc={9} ct="1 minute" comp="V, S, M (diamond worth 25,000 gp), DF" rTouch target="dead creature touched" dur="permanent" save="none" resist="yes" />
<p>This spell functions as false resurrection except that it calls a belier devil with the young simple template to possess the body and all parts of false resurrection that function like resurrection instead function like <Link to="/spell/true_resurrection">true resurrection</Link>.</p>
<p>Attempts to identify greater false resurrection with a skill check incorrectly identify it as true resurrection (see the <Link to="/spelldef/ruse">ruse</Link> descriptor). A fooled viewer mistakes greater false resurrection's aura as the lingering aura of an instantaneous conjuration effect.</p>
</>};
const _retribution = {title: "Retribution", jsx: <><h2 id="spell-retribution-retribution">Retribution</h2>
<SpellInfo id="1" source="Advanced Player's Guide/239" school="necro" descriptors={["evil","pain"]} inq={3} ct="1 standard action" comp="V" rClose target="one creature who has just struck you with an attack" dur="1 round/level" save="Fortitude partial" resist="yes" />
<p>Retribution blasts those who have the temerity to assault your person. You may target anyone who has just struck you with an attack within the previous round, whether with a melee, ranged, or natural weapon, or a spell that requires an attack roll. The target is wracked with shooting pains that impose a -4 penalty on attack rolls, skills checks, and ability checks. On a successful Fortitude save, the penalty only lasts for 1 round. A target who worships the same god as you takes a -2 penalty on its saving throw.</p>
</>};
const _retributive_reparations = {title: "Retributive Reparations", jsx: <><h2 id="spell-retributive_reparations-retributive-reparations">Retributive Reparations</h2>
<SpellInfo id="1" source="Occult Origins/29" school="necro" descriptors={["curse"]} ant={3} inq={3} occ={3} spr={3} wit={4} ct="1 standard action" comp="V, S" rTouch target="one object" dur="1 day/level or until triggered, and permanent, see text" save="Will negates (object) and Will negates, see text" resist="yes" />
<p>If a creature successfully takes the item targeted by this spell while you are holding, wearing, or wielding it, the creature must attempt a Will save. If the creature fails its save, it becomes fatigued, and it must attempt a new saving throw at the end of its turn every round it does not return the item to you. Failing a second saving throw causes the target to become exhausted. As long as the victim of the curse is actively working to return the object, its exhaustion is reduced to fatigue. The fatigue and exhaustion cannot be removed by effects that normally remove them, though immunity to fatigue and exhaustion protect against the conditions as normal.</p>
<p>This curse can be ended with <Link to="/spell/remove_curse">remove curse</Link> or by returning the item to you. You can have this spell active on one item at a time.</p>
</>};
const _retrieve_item = {title: "Retrieve Item", jsx: <><h2 id="spell-retrieve_item-retrieve-item">Retrieve Item</h2>
<SpellInfo id="1" source="Classic Treasures Revisited/27" school="conj" subschools={["call"]} arc={2} brd={2} skd={2} sor={2} wiz={2} ct="1 full-round action" comp="V, S" rLong target="an unattended object weighing 1 lb. or less whose longest dimension is 6 inches or less" dur="permanent until discharged" save="none" resist="no" />
<p>You call a specific nonliving item directly to your hand from a nearby location. First, you must cast the spell on the item while holding it. Thereafter, you can summon the item by speaking a special word (set by you when the spell is cast) and snapping your fingers. The item appears instantly in your hand.</p>
<p>If the item is in the possession of another creature, the spell fails.</p>
</>};
const _retrocognition = {title: "Retrocognition", jsx: <><h2 id="spell-retrocognition-retrocognition">Retrocognition</h2>
<SpellInfo id="1" source="Occult Adventures/185" school="div" arc={7} med={3} occ={3} psy={5} sor={7} wiz={7} ct="1 minute" comp="V, S" rPers target="you" dur="concentration, up to 1 minute/level" />
<p>This spell allows you to gain psychic impressions from past events that occurred in your current location. Retrocognition reveals psychic impressions from events that occurred over the course of the last hour throughout the first minute of the duration, followed by impressions from the next hour back the next minute you concentrate, and so on. If a psychically traumatic or turbulent event happened during that time period, you must succeed at a <Link to="/rule/concentration">concentration</Link> check (DC = 20, 30, or 40, depending on the severity of the psychic disturbance) or lose concentration on the spell.</p>
<p>At caster level 13th and higher, you can choose to collect impressions from over the course of a longer interval of time than an hour, beginning at 1 week per minute of concentration (as listed on the table below). The amount of detail you receive diminishes, so this eventually makes it harder to distinguish impressions left by anything but the most major events.</p>
<ScrollContainer id="spell-retrocognition--table-0"><table>
<thead>
<tr>
<th>Caster Level</th>
<th>Time Period</th>
</tr>
</thead>
<tbody><tr>
<td>13th-15th</td>
<td>1 week per minute</td>
</tr>
<tr>
<td>16th-18th</td>
<td>1 year per minute</td>
</tr>
<tr>
<td>19th+</td>
<td>1 century per minute</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _returning_weapon = {title: "Returning Weapon", jsx: <><h2 id="spell-returning_weapon-returning-weapon">Returning Weapon</h2>
<SpellInfo id="1" source="Ultimate Combat/242" school="conj" subschools={["tele"]} arc={2} bld={1} brd={2} clr={2} hnt={1} inq={1} mag={1} occ={1} orc={2} psy={2} rgr={1} skd={2} sor={2} war={2} wit={2} wiz={2} ct="1 standard action" comp="V, S" rClose target="one weapon that can be thrown" dur="1 minute/level" save="Will negates (object, harmless)" resist="yes (object, harmless)" />
<p>For the duration of the spell, the target weapon acts as if it had the returning weapon special ability.</p>
<p>This spell can be used as the prerequisite for the returning weapon special ability.</p>
<h3 id="spell-returning_weapon-communal-returning-weapon">Communal Returning Weapon</h3>
<SpellInfo id="2" source="Ultimate Combat/243" school="conj" subschools={["tele"]} arc={3} brd={3} clr={3} hnt={2} inq={2} mag={2} occ={2} orc={3} psy={3} rgr={2} skd={3} sor={3} war={3} wit={3} wiz={3} ct="1 standard action" comp="V, S" rClose targets="weapons that can be thrown" dur="1 minute/level" save="Will negates (object, harmless)" resist="yes (object, harmless)" />
<p>This spell functions like returning weapon, except you divide the duration in 1-minute intervals among the targeted weapons.</p>
</>};
const _reveal_emotions = {title: "Reveal Emotions", jsx: <><h2 id="spell-reveal_emotions-reveal-emotions">Reveal Emotions</h2>
<SpellInfo id="1" source="Heroes of the High Court/10" school="div" med={3} mes={4} occ={4} psy={4} spr={4} ct="1 minute" comp="V, S" rClose area="40-ft.-radius spread" dur="1 hour/level (D)" save="none" resist="yes" />
<p>You create an area that draws out a creature's emotion aura. Creatures within this area constantly glow with colors that represent their current overall emotional state and continue to do so for 1d4 rounds after leaving the area. This glow is clearly visible to any creature that can see the creature. Emotionless creatures or creatures unaffected by this spell glow with a dull purple hue while within the area.</p>
</>};
const _reveal_mirage = {title: "Reveal Mirage", jsx: <><h2 id="spell-reveal_mirage-reveal-mirage">Reveal Mirage</h2>
<SpellInfo id="1" source="Osirion, Legacy of the Pharaohs/46" school="div" arc={3} clr={3} drd={2} hnt={1} orc={3} rgr={1} sor={3} war={3} wit={3} wiz={3} ct="1 standard action" comp="V, S, F (a small prism)" rPers target="you" dur="1 round" />
<p>You can focus upon a single point within line of sight and discern if the terrain or geographic features of that point are illusory. This ability allows you a Will save to disbelieve a terrain-affecting illusion (glamer) effect from range as though you had interacted with it. In addition to affecting such spells as hallucinatory terrain and mirage arcana, this spell also allows you to disbelieve naturally occurring mirages.</p>
</>};
const _reveal_secrets = {title: "Reveal Secrets", jsx: <><h2 id="spell-reveal_secrets-reveal-secrets">Reveal Secrets</h2>
<SpellInfo id="1" source="Inner Sea Temples/63" school="ench" subschools={["comp"]} descriptors={["lang","mind"]} arc={1} brd={1} inq={1} mes={1} psy={1} skd={1} sor={1} wit={1} wiz={1} ct="1 standard action" comp="V, S, M (a drop of alcoholic liquid)" rTouch target="creature touched" dur="1 round" save="Will negates" resist="yes" />
<p>When you cast this spell, you ask the target whether it has a secret about a specific topic that can be described in 10 words or fewer. This can concern a person, place, or thing (such as a town's mayor, the ring worn by a traveling merchant, or the bridge spanning a nearby river) or an easily distinguished event (such as a historic battle or a recent rash of disappearances). If the target knows a secret about the topic (information it believes isn't common knowledge and which it would not normally tell you), it states it has a secret. The target doesn't mention anything about the secret and doesn't remember telling you it has a secret. If the target succeeds at its saving throw, it isn't compelled to reveal whether it knows a secret and is aware that you asked.</p>
</>};
const _reveal_true_shape = {title: "Reveal True Shape", jsx: <><h2 id="spell-reveal_true_shape-reveal-true-shape">Reveal True Shape</h2>
<SpellInfo id="1" source="Pathfinder #19: Howl of the Carrion King/75" school="div" arc={2} brd={2} clr={2} drd={2} hnt={2} orc={2} skd={2} sor={2} war={2} wiz={2} ct="1 standard action" comp="V, S, M (a pinch of rare herbs worth 50 gp)" rClose target="one creature" dur="1 round/level" save="Will negates" resist="yes" />
<p>You reveal the true form of a magically disguised or transformed creature, whether the target's transformation is physical (such as polymorph) or illusory (such as disguise self). The spell does not force the creature into its true form, but rather creates a perfect illusion of the creature's true form that overlaps it and hides the disguised form completely, making the true form visible to all observers. For the duration of the spell, if the target changes shape or uses illusion to disguise its appearance, observers can still see its true form, though once the spell runs out any illusions or shape changes made by the target in the meantime immediately take effect. This spell does not reveal invisible creatures, overcome effects such as blur and displacement, or penetrate mundane disguises.</p>
</>};
const _revealing_light = {title: "Revealing Light", jsx: <><h2 id="spell-revealing_light-revealing-light">Revealing Light</h2>
<SpellInfo id="1" source="Monster Hunter's Handbook/31" school="evo" descriptors={["light"]} arc={2} brd={1} clr={2} inq={2} med={1} orc={2} psy={2} skd={1} sor={2} war={2} wiz={2} ct="1 standard action" comp="V, S, M/DF (piece of a mirror)" rTouch target="object touched" dur="10 minutes/level" save="none" resist="no" />
<p>The touched object emits a shimmering light (as per light) that causes shadows to shift constantly in a 20-foot radius. Creatures lose any racial bonus on Stealth checks while in the area, and the light suppresses any bonuses on Stealth checks granted by visual camouflage (such as from camouflage netting or the camouflage rogue talent). The unpredictable light patterns also interfere with spells and effects of the pattern subschool, granting all creatures in the area a +2 bonus on saves against such effects.</p>
</>};
const _revelation = {title: "Revelation", jsx: <><h2 id="spell-revelation-revelation">Revelation</h2>
<SpellInfo id="1" source="Seekers of Secrets/17" school="div" arc={3} brd={2} clr={3} orc={3} skd={2} sor={3} war={3} wiz={3} ct="1 round" comp="V, S" rPers target="you" dur="1 round/level; see text" />
<p>You gain a brief understanding of the workings of a single puzzle, device, or trap, gaining an insight bonus equal to your caster level (maximum +10) on checks to disable, manipulate or solve the object in question. Your insight is ineffable; you are unable to communicate your understanding to others. At the GM's option, this spell may instead give you a clue or other piece of useful information. In this case you may communicate the clue to others and retain knowledge of it after the spell's duration has expired.</p>
</>};
const _revenant_armor = {title: "Revenant Armor", jsx: <><h2 id="spell-revenant_armor-revenant-armor">Revenant Armor</h2>
<SpellInfo id="1" source="Armor Master's Handbook/23" school="trans" ant={3} arc={4} clr={4} mag={4} med={4} occ={4} orc={4} pal={3} sha={3} sor={4} spr={3} war={4} wit={3} wiz={4} ct="1 standard action" comp="V, S, F (one suit of armor)" rClose target="one suit of armor" dur="1 day/level or 1 hour/level; see below" save="none" resist="no" />
<p>This spell endows a suit of armor with a singular purpose realized only after its wearer goes unconscious or is killed; whenever the wearer of a suit of armor warded by revenant armor is brought below 0 hit points or otherwise rendered unconscious (but not paralyzed or held) in combat, the armor is immediately brought to life as a Medium animated object. This animated suit of armor still contains the unconscious (or dead) body of its former wearer and moves with a shambling gait at a speed of 20 feet. This animated object has average hit points and, if the armor is made from metal, it has the metal animated object extraordinary ability (plus <Link to="/monster/animated_object">additional abilities</Link> based on the type of metal). Once animated, the revenant armor remains standing (and stands if knocked prone, doing so without provoking attacks of opportunity), and prevents the wearer of the armor from being considered helpless. If an ally of the wearer is within range of the armor, she can direct it to move, though it refuses to go anywhere that requires a skill check. If grappled or otherwise restrained, it can attempt to break free with a Strength score equal to your caster level and a CMB equal to 1 + your caster level + the armor's Strength modifier. If the armor's wearer is reduced to dust, made conscious, or removed from the armor, the spell ends.</p>
</>};
const _reverse_gravity = {title: "Reverse Gravity", jsx: <><h2 id="spell-reverse_gravity-reverse-gravity">Reverse Gravity</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/335" school="trans" arc={7} drd={8} psy={7} sor={7} wiz={7} ct="1 standard action" comp="V, S, M/DF (lodestone and iron fillings)" rMed area="up to one 10-ft. cube/level (S)" dur="1 round/level (D)" save="none, see text" resist="no" />
<p>This spell reverses gravity in an area, causing unattached objects and creatures in the area to fall upward and reach the top of the area in 1 round. If a solid object (such as a ceiling) is encountered in this fall, <Link to="/rule/falling_objects">falling objects</Link> and creatures strike it in the same manner as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, until the spell ends. At the end of the spell duration, affected objects and creatures fall downward.</p>
<p>Provided it has something to hold onto, a creature caught in the area can attempt a Reflex save to secure itself when the spell strikes. Creatures who can fly or levitate can keep themselves from falling.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-reverse_gravity--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Reverse Gravity</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 105</Link><br/>Creatures in the area or that enter the area must succeed at a Fortitude save or be nauseated.</p>
<p><em>Augmented (8th):</em> If you expend three uses of mythic power, once per round as a move action you may select one secured creature (one that succeeded at its Reflex save) or attached object (such as a tree or cottage) and force it to attempt a Fortitude save against the spell. The selected creature or object can weigh no more than 100 pounds per caster level. If it fails the save, it's pulled free and falls upward.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _reviving_finale = {title: "Reviving Finale", jsx: <><h2 id="spell-reviving_finale-reviving-finale">Reviving Finale</h2>
<SpellInfo id="1" source="Advanced Player's Guide/239" school="conj" subschools={["heal"]} brd={3} skd={3} ct="1 swift action" comp="V, S" rFt={20} area="a 20-ft.-radius burst centered on you" dur="instantaneous" save="Will half (harmless)" resist="yes (harmless)" />
<p>You must have a bardic performance in effect to cast this spell. With a flourish, you immediately end your bardic performance, and allies within the area of the spell regain 2d6 hit points. This spell has no effect on undead creatures.</p>
</>};
const _ricochet_shot = {title: "Ricochet Shot", jsx: <><h2 id="spell-ricochet_shot-ricochet-shot">Ricochet Shot</h2>
<SpellInfo id="1" source="Ultimate Combat/243" school="evo" arc={2} hnt={2} rgr={2} sor={2} wiz={2} ct="1 standard action" comp="V, S, M (a wishbone)" rClose target="one projectile weapon" dur="1 round/level or until discharged" save="Will negates (object, harmless)" resist="yes (object, harmless)" />
<p>You imbue a projectile weapon with the ability to ricochet any projectiles that hit one target so that they also hit another. When the wielder ricochets a projectile, she selects a primary target to attack. If she hits the primary target, the projectile ricochets instead of being destroyed. The wielder can then select a secondary target that is within 20 feet of the primary target. She makes an attack roll against the secondary target at the same base attack bonus, but does not gain the benefit from any enhancement bonuses or magic qualities on the projectile. If the shot comes from a firearm, the ricochet targets normal AC rather than touch AC.</p>
<p>While the spell lasts, the target weapon's wielder can ricochet one projectile per three caster levels you possess, to a maximum of six at caster level 18th. Once the target weapon's wielder ricochets that many shots, the spell is discharged. If the weapon's wielder fails to use all the ricochets before the spell end, those ricochets are wasted.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-ricochet_shot--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Ricochet Shot</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 106</Link><br/>If the attack hits the secondary target, the wielder can select a tertiary target within 20 feet of the secondary target. This functions like a ricochet off the primary target. The tertiary target must be a different creature than the primary target.</p>
<p><em>Augmented (3rd):</em> If you expend two uses of mythic power, the secondary and tertiary attacks gain the enhancement bonus and magic qualities of the attack against the primary target.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _ride_the_lightning = {title: "Ride the Lightning", jsx: <><h2 id="spell-ride_the_lightning-ride-the-lightning">Ride the Lightning</h2>
<SpellInfo id="1" source="Ultimate Magic/235" school="evo" descriptors={["elec"]} arc={9} sor={9} wiz={9} ct="1 swift action" comp="V, S" rPers target="you" dur="1 round/level (D)" />
<p>You may transform into lightning as a standard action and instantly travel in a straight line to a distance of up to 120 feet, rematerializing in the new location as a free action. This movement does not provoke attacks of opportunity. Creatures in this line take 10d6 points of electrical damage and are staggered for 1 round (a successful Reflex save halves the damage and negates the staggered condition, spell resistance applies). Objects in your path are damaged as well, with combustible objects being set ablaze and metals with low melting points melted. If your path is interrupted by a barrier or otherwise deflected, you materialize short of your final destination in the nearest open space; targets in the line to that point take damage as normal. You are immune to electricity while this spell lasts.</p>
</>};
const _ride_the_waves = {title: "Ride The Waves", jsx: <><h2 id="spell-ride_the_waves-ride-the-waves">Ride The Waves</h2>
<SpellInfo id="1" source="Ultimate Magic/235" school="trans" descriptors={["water"]} arc={4} bld={4} clr={4} drd={4} hnt={4} orc={4} rma={4} sha={4} sor={4} war={4} wit={4} wiz={4} ct="1 standard action" comp="V, S" rTouch target="creature touched" dur="1 hour/level (D)" save="Will negates (harmless)" resist="yes (harmless)" />
<p>The target gains the ability to breathe water and a swim speed of 30 feet. This swim speed means the target also gains the standard +8 bonus on Swim checks and the ability to take 10 on Swim checks even while distracted or endangered. The target can use the run action while swimming, provided it swims in a straight line. The spell does not make the target unable to breathe air.</p>
</>};
const _riding_possession = {title: "Riding Possession", jsx: <><h2 id="spell-riding_possession-riding-possession">Riding Possession</h2>
<SpellInfo id="1" source="Occult Adventures/185" school="necro" arc={4} med={2} mes={4} occ={3} psy={4} sor={4} spr={3} sum={4} wit={4} wiz={4} ct="1 standard action" comp="V, S" rMed target="one creature" dur="1 hour/level (d); see text" save="Will negates" resist="yes" />
<p>You stealthily project your soul into the host's body as an observer, with limited ability to influence the target. This functions as <Link to="/spell/possession">possession</Link>, except the host is still in full control of its body and is unaware you are possessing it. You can't communicate with the host directly, but you can cast mind-affecting spells or riding possession on the host as long as you can cast these spells as purely mental actions. Even if the spell you cast would normally affect more than one target or an area, it can affect only the host. If the host succeeds at a saving throw against a spell that you cast in this way, it immediately becomes aware that it is possessed, and if it was already aware, it receives another saving throw against riding possession. <Link to="/spell/protection_from_evil">Protection from evil</Link> and similar effects don't expel you from the host, but they do prevent you from casting further spells from within your host until their durations expire.</p>
</>};
const _rift_of_ruin = {title: "Rift of Ruin", jsx: <><h2 id="spell-rift_of_ruin-rift-of-ruin">Rift of Ruin</h2>
<SpellInfo id="1" source="Book of the Damned/185;Book of the Damned - Volume 2: Lords of Chaos/48" school="conj" subschools={["call"]} descriptors={["chaotic","evil"]} arc={8} clr={8} orc={8} sor={8} wit={8} wiz={8} ct="1 standard action" comp="V, S" rLong effect="5-ft.-wide, 60-ft.-deep extradimensional hole, up to 5 ft. long per level (S)" dur="1 round/level (see text)" save="Reflex partial" resist="no" />
<p>This spell tears a rift in reality, creating an extradimensional hole with a depth of 60 feet. You must create the rift on a horizontal surface of sufficient size. Since the rift extends into the Abyss, it does not displace the original underlying material or allow access to areas below the surface-you can create the rift on the deck of a ship as easily as in a dungeon floor or the ground of a forest. Any Large or smaller creature standing in the area where you conjure the rift must succeed at a Reflex save to avoid falling into the hole. If successful, the creature picks which side of the rift it remains on once the rift opens. Unattended objects and structures that can be fully engulfed by the rift automatically fall into it.</p>
<p>The walls of the rift are covered with razor-sharp blades, while the floor seethes with boiling pools of acid, strange chewing vermin, writhing shards of ice, and all manner of other chaotic and deadly manifestations of the Abyss. A creature that falls into the rift takes 6d6 points of falling damage. Any creature in the rift (starting on the round it enters) takes an additional 6d6 points of damage from the rift's environs, even if the creature is merely climbing or flying within the rift rather than standing at the bottom. This additional damage changes from round to round and is randomly selected from acid, bludgeoning, cold, electricity, fire, piercing, slashing, or sonic. Each round, a creature in the rift can attempt a Reflex save to take half damage that round. The rift's walls have a Climb DC of 25.</p>
<p>When this spell's duration ends, the rift snaps shut, violently expelling all creatures still within. These creatures take double damage from the rift's environs in that round and are knocked prone as they are returned to the surface above.</p>
<p>At any time during the spell's duration, you can use it to conjure a number of Abyssal denizens into the surrounding region as a standard action. Doing so causes the rift to snap shut, ending the spell's duration and returning any creatures that had fallen into it to the ground as detailed above. As the rift snaps shut, choose one of the following creatures or groups of creatures to appear in the area; these Abyssal denizens are treated as if you had summoned them via <Link to="/spell/summon_monster_vii">summon monster VII</Link> and remain for a number of rounds equal to the remaining duration of the rift of ruin spell. You can choose to summon one of the following: one bebilith, one vrock, 1d3 shadow demons, 1d3 succubi, 1d4+1 babaus, or 1d4+1 brimoraks.</p>
</>};
const _righteous_blood = {title: "Righteous Blood", jsx: <><h2 id="spell-righteous_blood-righteous-blood">Righteous Blood</h2>
<SpellInfo id="1" source="Demon Hunter's Handbook/27" school="abjur" descriptors={["good"]} inq={2} pal={2} ct="1 standard action" comp="V, S, DF" rTouch target="one creature of good alignment" dur="10 minutes/level (D)" save="Will negates (harmless)" resist="yes (harmless)" />
<p>The target creature's innate goodness infuses its body with holy energy. While this energy does not directly empower the target, it can harm embodiments of evil. Any creature that damages the target with a slashing or piercing melee weapon is sprayed by the target's holy blood. If the attacker is a creature with the evil subtype, it takes 1d6 points of damage from divine power each time it successfully hits the target. If the target has the good subtype or an ability that grants it an aura of good (like paladins or some clerics), its blood instead deals 2d6 points of damage. Creatures that don't have the evil subtype or that are using reach weapons are not subject to this damage.</p>
</>};
const _righteous_condemnation = {title: "Righteous Condemnation", jsx: <><h2 id="spell-righteous_condemnation-righteous-condemnation">Righteous Condemnation</h2>
<SpellInfo id="1" source="Plane-Hopper's Handbook/13" school="abjur" descriptors={["good","lawful"]} clr={3} inq={3} orc={3} pal={2} war={3} ct="1 standard action" comp="V, S, DF" rPers target="you" dur="1 round/level (D)" save="Will negates" resist="yes" />
<p>Any creature of chaotic, neutral, or evil alignment who targets you with a spell must succeed at a Will save or take a -4 penalty on Intelligence-, Wisdom-, and Charisma-based checks for the spell's duration. Creatures with only neutral alignment components receive a +4 bonus on their Will saves against this spell. The penalties for alignment components stack (therefore, a chaotic evil spellcaster would take a -8 penalty).</p>
</>};
const _righteous_might = {title: "Righteous Might", jsx: <><h2 id="spell-righteous_might-righteous-might">Righteous Might</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/335" school="trans" clr={5} inq={5} orc={5} war={5} ct="1 standard action" comp="V, S, DF" rPers target="you" dur="1 round/level (D)" />
<p>Your height immediately doubles, and your weight increases by a factor of eight. This increase changes your size category to the next larger one. You gain a +4 size bonus to Strength and Constitution and take a -2 penalty to your Dexterity. You gain a +2 enhancement bonus to your natural armor. You gain DR 5/evil (if you normally channel positive energy) or DR 5/good (if you normally channel negative energy). At 15th level, this DR becomes 10/evil or 10/good (the maximum). Your size modifier for AC and attacks changes as appropriate to your new size category. This spell doesn't change your speed. Determine space and reach as appropriate to your new size.</p>
<p>If insufficient room is available for the desired growth, you attain the maximum possible size and may make a Strength check (using your increased Strength) to burst any enclosures in the process (see <Link to="/rule/breaking_things">Breaking Items</Link>). If you fail, you are constrained without harm by the materials enclosing you - the spell cannot crush you by increasing your size.</p>
<p>All equipment you wear or carry is similarly enlarged by the spell. Melee weapons deal more damage. Other magical properties are not affected by this spell. Any enlarged item that leaves your possession (including a projectile or thrown weapon) instantly returns to its normal size. This means that thrown and projectile weapons deal their normal damage. Magical effects that increase size do not stack.</p>
</>};
const _righteous_vigor = {title: "Righteous Vigor", jsx: <><h2 id="spell-righteous_vigor-righteous-vigor">Righteous Vigor</h2>
<SpellInfo id="1" source="Advanced Player's Guide/239" school="ench" subschools={["comp"]} descriptors={["mind"]} inq={3} pal={2} ct="1 standard action" comp="V, S, DF" rTouch target="creature touched" dur="1 round/level" save="Will negates (harmless)" resist="yes (harmless)" />
<p>Infusing the target with a surge of furious divine energy, you enhance a creature's ability to hit an opponent based on the number of times it has already hit that opponent with a successful attack. Each time the subject successfully strikes an opponent with a successful melee attack, the subject gains a cumulative +1 morale bonus on attack rolls (maximum +4 bonus) and gains 1d8 temporary hit points (to a maximum of 20 temporary hit points). If an attack misses, the attack bonus resets to +0 but any accumulated temporary hit points remain. The temporary hit points disappear at the end of the spell's duration.</p>
</>};
const _rigor_mortis = {title: "Rigor Mortis", jsx: <><h2 id="spell-rigor_mortis-rigor-mortis">Rigor Mortis</h2>
<SpellInfo id="1" source="Horror Adventures/126" school="trans" descriptors={["pain"]} arc={4} clr={4} mag={4} occ={4} orc={4} psy={4} sha={4} sor={4} spr={3} war={4} wit={4} wiz={4} ct="1 standard action" comp="V, S, M/DF (a knucklebone)" rMed target="one living creature" dur="instantaneous; see text" save="Fortitude partial (see text)" resist="yes" />
<p>The joints of a creature affected by this spell stiffen and swell, making movement painful and slow. The target takes 1d6 points of nonlethal damage per caster level. Additionally, the target takes a -4 penalty to Dexterity and its movement speed decreases by 10 feet; these additional effects last for 1 minute per caster level, though another creature can spend 1 minute and attempt a DC 25 Heal check to end them early. A successful save halves the nonlethal damage and negates the penalty to Dexterity and movement.</p>
</>};
const _rising_water = {title: "Rising Water", jsx: <><h2 id="spell-rising_water-rising-water">Rising Water</h2>
<SpellInfo id="1" source="Elemental Master's Handbook/14" school="conj" descriptors={["water"]} arc={4} bld={3} drd={4} hnt={3} mag={4} occ={4} psy={4} rgr={3} sha={4} sor={4} sum={4} usm={4} wiz={4} ct="1 standard action" comp="V, S, M (a lily pad)" rMed area="cylinder (20-ft. radius, 10 ft. high)" dur="1 round/level (D)" save="none" resist="no" />
<p>You conjure a cylinder of calm water on an area of solid ground or on top of a body of water. The water forms quickly but displaces only air; it doesn't push away objects or creatures, though anything in the area when the spell is cast is submerged. Unconscious air-breathing creatures caught in the area immediately begin to drown, but other air-breathing creatures can <Link to="/misc/hold_their_breath">hold their breath</Link> while in the cylinder. Movement through the cylinder at normal speed requires a successful DC 10 Swim check (otherwise, creatures move at one-quarter speed). If conjured in an area with insufficient room for the entire cylinder, the cylinder attains its maximum possible size. It retains its shape in defiance of gravity for the spell's duration, and any creature can enter or exit the cylinder's sides as easily as stepping into or out of a pool of ordinary water. The water disappears at the end of the spell's duration, so creatures swimming in the water immediately fall to the ground.</p>
</>};
const _rite_of_bodily_purity = {title: "Rite of Bodily Purity", jsx: <><h2 id="spell-rite_of_bodily_purity-rite-of-bodily-purity">Rite of Bodily Purity</h2>
<SpellInfo id="1" source="Divine Anthology/13" school="abjur" descriptors={["medi"]} clr={1} drd={1} pal={1} rgr={1} sha={1} war={1} ct="1 hour" comp="V, M (soothing incense worth 100 gp)" rPers target="you" dur="24 hours or until discharged" />
<p>You energize your body's immune system, improving your ability to resist toxins and ailments. You gain a +2 resistance bonus on saving throws to resist diseases, drugs, and poisons. Additionally, at any time during the spell's duration, whenever you fail a saving throw to resist a disease, drug, or poison, you can expend the spell's remaining duration as an immediate action in order to reroll that saving throw. You must take the second result, even if it's worse. The +2 resistance bonus granted by the spell applies to the reroll, but after you make this reroll, the spell ends.</p>
</>};
const _rite_of_centered_mind = {title: "Rite of Centered Mind", jsx: <><h2 id="spell-rite_of_centered_mind-rite-of-centered-mind">Rite of Centered Mind</h2>
<SpellInfo id="1" source="Divine Anthology/13" school="abjur" descriptors={["medi"]} arc={1} clr={1} drd={1} sha={1} war={1} wiz={1} ct="1 hour" comp="V, M (soothing incense worth 100 gp)" rPers target="you" dur="24 hours or until discharged" />
<p>You heighten your awareness of your own thoughts, allowing you to more easily resist outside influences. You gain a +1 resistance bonus on saving throws to resist mind-affecting effects. This resistance bonus is increased to +2 if the effect is an emotion or fear effect. Additionally, at any time during the spell's duration, whenever you fail a saving throw to resist a mind-affecting effect, you can expend the spell's remaining duration as an immediate action in order to reroll that saving throw. You must take the second result, even if it's worse. The +2 resistance bonus granted by the spell applies to the reroll, but after you make this reroll, the spell ends.</p>
</>};
const _rivals_weald = {title: "Rival's Weald", jsx: <><h2 id="spell-rivals_weald-rivals-weald">Rival's Weald</h2>
<SpellInfo id="1" source="Chronicle of Legends/14" school="trans" subschools={["poly"]} drd={9} sha={9} wit={9} ct="1 standard action" comp="V, S, M (a hardened piece of tree sap)" rClose target="one creature/two levels, no two of which can be more than 30 ft. apart" dur="permanent" save="Fortitude negates, Will partial (see text)" resist="yes" />
<p>This spell transforms your targets into trees as per <Link to="/spell/tree_shape">tree shape</Link>, except the targets transform into living trees that resemble their original forms. If a target is in a situation that would prove fatal to a tree created by this spell, such as off the ground or under water, the target receives a +4 bonus on its Fortitude save.</p>
<p>If the spell succeeds, the target must also attempt a Will save. On a failed save, the creature loses the ability to observe what transpires around it, and its mental capacity reverts to that of a tree, rendering it unable to take any kind of action. A target that succeeds at the saving throw can observe the area around it but can't take any actions other than communicate to those under the effects of a <Link to="/spell/speak_with_plants">speak with plants</Link> spell or to other trees. Over the span of 1 year, the target's appearance becomes more like a common tree and less like its original form.</p>
<p>Any polymorph effects on a target are automatically dispelled when the target fails to resist the effects of rival's weald, and as long as rival's weald remains in effect, the target cannot use other polymorph spells or effects to assume a new form. Incorporeal, gaseous, and plant creatures are immune to rival's weald.</p>
</>};
const _river_of_wind = {title: "River of Wind", jsx: <><h2 id="spell-river_of_wind-river-of-wind">River of Wind</h2>
<SpellInfo id="1" source="Advanced Player's Guide/240" school="evo" descriptors={["air"]} arc={4} bld={4} drd={4} hnt={4} mag={4} occ={4} sor={4} wiz={4} ct="1 standard action" comp="V, S" rFt={120} area="120-ft. line" dur="1 round/level" save="Fortitude partial" resist="yes" />
<p>Summoning up the power of the tempest, you direct a current of forceful winds where you please. This spell creates a 5-foot-diameter line of wind - the direction of the wind is away from your location when you cast the spell, and remains constant in that direction for the spell duration. Creatures caught in a river of wind take 4d6 nonlethal damage and are knocked prone. A successful Fortitude save halves the damage and prevents being knocked prone.</p>
<p>A creature that begins its turn wholly or partially within a river of wind must make a Fortitude save or be pushed 20 feet in the wind's direction of flow, take 2d6 nonlethal damage, and be knocked prone - a successful Fortitude save means the creature merely takes 1d6 nonlethal damage. Creatures under the effect of freedom of movement and creatures with the air subtype are unaffected by a river of wind.</p>
</>};
const _river_whip = {title: "River Whip", jsx: <><h2 id="spell-river_whip-river-whip">River Whip</h2>
<SpellInfo id="1" source="Advanced Class Guide/191" school="conj" subschools={["creat"]} descriptors={["water"]} arc={2} mag={2} sor={2} wit={2} wiz={2} ct="1 standard action" comp="V, S" rFt={0} effect="whip of water" dur="1 minute/level (d) or until discharged (see text)" save="none" resist="no" />
<p>You create a coil of flowing fresh water, functioning a whip appropriate for your size, except you make a melee touch attack instead of a regular attack. Anything you strike with the whip takes damage and is doused with 1 pint of water. A creature with the fire subtype takes an additional 1d6 points of damage. If the target is on fire, it gains a +2 bonus on its next saving throw to extinguish the flames.</p>
<p>After you have successfully used the whip to hit a creature a number of times equal to your caster level, the water is expended and the spell is discharged. The water created by this spell is otherwise identical to that produced by create water.</p>
</>};
const _riversight = {title: "Riversight", jsx: <><h2 id="spell-riversight-riversight">Riversight</h2>
<SpellInfo id="1" source="People of the River/27" school="div" subschools={["scry"]} clr={3} drd={2} hnt={2} inq={3} orc={3} rgr={2} war={3} wit={3} ct="1 minute" comp="V, S, F/DF (a smooth river stone)" rText target="nonmagical freshwater waterway" effect="magical sensor" dur="1 minute/level (D)" save="none" resist="no" />
<p>You can view events transpiring along a natural watercourse you touch. You can see anything on or within the river as if you were present at that location, or you can observe anything happening within 15 feet of the river's banks as if peering from the water's surface. Moving your point of view to a different location along the river is a standard action, though your perception can follow something moving along the river as a free action.</p>
<p>The range of this spell is affected by whether you are attempting to gaze up or downriver - if viewing a location downriver, you can view any spot within 2 miles per caster level; if viewing upriver, you can view any spot within 1/2 mile per caster level. The magical sensor created by this spell can travel only as far along the river as your range and the river permits; obstructions such as dams and reservoirs halt the sensor, as does an estuary flowing into the sea or other body of saltwater.</p>
</>};
const _roaming_pit = {title: "Roaming Pit", jsx: <><h2 id="spell-roaming_pit-roaming-pit">Roaming Pit</h2>
<SpellInfo id="1" source="Magic Tactics Toolbox/13" school="conj" subschools={["creat"]} arc={5} clr={6} drd={6} hnt={6} occ={6} psy={6} sor={5} sum={5} usm={5} war={6} wiz={5} ct="1 standard action" comp="V, S, M (powered diamond dust worth 10 gp)" rMed effect="mobile 10-ft.-by-10-ft. hold, 10 ft. deep/2 levels" dur="1 round/level" save="Reflex negates" resist="no" />
<p>This spell functions as <Link to="/spell/create_pit">create pit</Link>, except the pit is capable of movement. As a move action, you can direct the pit to move up to 20 feet, though it must always remain on a horizontal surface large enough to accommodate its area. If the pit's movement causes it to share a space with a creature on the same horizontal surface, that creature must succeed at a Reflex saving throw or fall into the pit. Any creature that avoids falling into the pit when it reaches its new destination moves to the nearest safe space. Creatures that fall into the pit move with it if it is relocated.</p>
</>};
const _rock_whip = {title: "Rock Whip", jsx: <><h2 id="spell-rock_whip-rock-whip">Rock Whip</h2>
<SpellInfo id="1" source="Heroes of the Darklands/9" school="conj" subschools={["creat"]} arc={2} clr={2} drd={2} hnt={1} mag={2} orc={2} rgr={1} sha={2} sor={2} war={2} wit={2} wiz={2} ct="1 standard action" comp="V, S" rFt={0} effect="whip of earth and stone" dur="1 round/level (D)" save="none" resist="no" />
<p>A 15-foot-long lash of crumbling crystal and earth emerges from the palm of your hand. This weapon is treated as a nonmagical whip that deals 1d8 points of bludgeoning damage. You can wield this weapon as a whip as if you were proficient with it, and it isn't subject to the disarm or sunder combat maneuver. The whip passes through natural unworked stone effortlessly, allowing you to ignore cover between you and your target from such sources. Armor and natural armor have no effect on the damage dealt by a rock whip (unlike a normal whip), but the whip deals no damage to outsiders with the earth subtype. Attacks with a rock whip strike with resounding force; you can make a free bull rush combat maneuver against any creature you strike with a rock whip, using your caster level in place of your base attack bonus and your primary casting ability score modifier (Charisma for sorcerers, Intelligence for wizards, and so on) in place of your Strength modifier.</p>
</>};
const _root = {title: "Root", jsx: <><h2 id="spell-root-root">Root</h2>
<SpellInfo id="1" source="Paizo Blog - Ultimate Cantrips" school="trans" descriptors={["earth"]} arc={0} sor={0} wiz={0} ct="1 standard action" comp="V, S, M (a pinch of dirt)" rTouch target="creature touched" dur="1 minute (D)" save="Will negates (harmless)" resist="yes" />
<p>This spell strengthens the subject's connection to the ground below, bolstering its defense against combat maneuvers. It gains a +2 insight bonus to its CMD to resist being moved or tripped and a +2 competence bonus on all Acrobatics checks made to balance or remain standing on earth, sand, stone, or a similar rocky substance.</p>
<p><strong>Note:</strong> This is a rare cantrip. Spellcasters that gain access to all 0-level spells at 1st level do not gain access to rare cantrips. A spellcaster gains access to rare cantrips only by uncovering their secrets in some other way. Some are guarded by jealous mages, while others are lost in missing libraries or molder on forgotten scrolls.</p>
</>};
const _rope_tornado = {title: "Rope Tornado", jsx: <><h2 id="spell-rope_tornado-rope-tornado">Rope Tornado</h2>
<SpellInfo id="1" source="Wilderness Origins/27" school="evo" descriptors={["air"]} arc={4} drd={4} hnt={4} mag={4} occ={4} sha={4} sor={4} wit={4} wiz={4} ct="1 standard action" comp="V, S, M (a length of twine)" rFt={120} area="120 ft. line" dur="instantaneous" save="Reflex negates" resist="yes" />
<p>A spiraling twister of tornado-force wind surges forth from your palm, unbalancing those it rushes over. Creatures on the ground within the area are knocked prone. A flying creature within the spell's area must instead succeed at a DC 25 Fly check or plummet to the ground, taking the appropriate amount of falling damage. Creatures that are Huge or larger in size gain a +2 bonus on their Reflex saves, while creatures that are Medium or smaller in size take a -2 penalty.</p>
<p>Additionally, the area is subjected to tornado-force winds, extinguishing all nonmagical flames, dispersing clouds, and scattering unattended objects.</p>
</>};
const _rope_trick = {title: "Rope Trick", jsx: <><h2 id="spell-rope_trick-rope-trick">Rope Trick</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/335" school="trans" arc={2} med={2} occ={2} psy={2} rma={2} sor={2} wiz={2} ct="1 standard action" comp="V, S, M (powdered corn and a twisted loop of parchment)" rTouch target="one touched piece of rope from 5 ft. to 30 ft. long" dur="1 hour/level (D)" save="none" resist="no" />
<p>When this spell is cast upon a piece of rope from 5 to 30 feet long, one end of the rope rises into the air until the whole rope hangs perpendicular to the ground, as if affixed at the upper end. The upper end is, in fact, fastened to an extradimensional space that is outside the usual multiverse of extradimensional spaces. Creatures in the extradimensional space are hidden, beyond the reach of spells (including divinations), unless those spells work across planes. The space holds as many as eight creatures (of any size). The rope cannot be removed or hidden. The rope can support up to 16,000 pounds. A weight greater than that can pull the rope free.</p>
<p>Spells cannot be cast across the extradimensional interface, nor can area effects cross it. Those in the extradimensional space can see out of it as if a 3-foot-by-5-foot window were centered on the rope. The window is invisible, and even creatures that can see the window can't see through it. Anything inside the extradimensional space drops out when the spell ends. The rope can be climbed by only one person at a time. The rope trick spell enables climbers to reach a normal place if they do not climb all the way to the extradimensional space.</p>
</>};
const _ropeweave = {title: "Ropeweave", jsx: <><h2 id="spell-ropeweave-ropeweave">Ropeweave</h2>
<SpellInfo id="1" source="Ultimate Wilderness/233" school="trans" hnt={2} occ={2} rgr={2} ct="1 minute" comp="V, S, F (a rope)" rTouch target="one rope" dur="1 hour/level (D)" save="none" resist="no" />
<p>You cause the target rope to grow in length and weave itself into one of several forms, each of which can support up to 1,000 pounds, plus 200 pounds per caster level (maximum 3,000 pounds at 10th level). Only one type of construction can be created with each casting of the spell, and the creation remains stationary unless destroyed.</p>
<p>Each 5-foot section of the object created by this spell has a break DC of 23, AC 11, and 1 hit point per caster level (maximum 10 hp), but all sections of the creation are magically supported and need not be anchored to a solid surface or any other portion of the effect. Destroying one part of it does not cause the remainder of the structure to collapse, though each 5-foot section destroyed reduces the maximum weight the creation can support by 200 pounds. During any round in which the rope is overloaded, every remaining section takes 1d4 points of damage.</p>
<p>You can use ropeweave to create any of the following structures.</p>
<p><em>Rope Bridge:</em> The rope forms a 5-foot-wide bridge that spans up to 10 feet horizontally per caster level you have (maximum 100 feet). Creatures can cross the bridge at half speed with a successful DC 5 Acrobatics check or at full speed with a successful DC 10 Acrobatics check. The DC assumes a creature is using both hands to assist in navigating the rope bridge; the DC increases by 5 if a creature uses only one hand to steady itself and by 10 if the creature does not use its hands. A failed Acrobatics check results in failure to progress across the rope bridge; creatures that fail by 5 or more fall.</p>
<p><em>Rope Hammock:</em> The rope knits itself into a stationary hammock suspended in midair. The hammock can be suspended at a height of 5 feet plus 5 feet per 2 caster levels you have (maximum 30 feet), with a rope ladder (see below) leading up to a platform of 1 5-foot square per caster level, and at least one such square must be adjacent to the square containing the vertical rope ladder. As a move action, the caster can command the rope ladder to withdraw into the hammock. When the ladder is withdrawn, the rope hammock blends in with its surroundings and muffles sounds and smells from creatures resting on it that are taking no violent actions; noticing the rope hammock requires a successful DC 20 Perception check or Survival check, even for creatures with scent. This does not apply if the creatures in the hammock attack or move more than half speed. The hammock provides a +2 cover bonus to AC against attacks from beneath it.</p>
<p><em>Rope Ladder:</em> The rope knots itself and hangs suspended in midair, perpendicular to the ground, stretching up to 10 feet vertically per caster level you have (maximum 100 feet). Climbing the rope ladder requires a successful DC 5 Climb check, or DC 0 if there is a wall adjacent to it you can brace it against.</p>
<p><em>Trip Line:</em> The rope stretches into a tangled mass that fills one 5-foot square per caster level you have (maximum 10 squares), all of which must be contiguous (including diagonally). Any creature entering a square with this trip line must succeed at an Acrobatics check (DC = 10 if moving at half speed, DC = 15 if moving at full speed, and DC = 20 if running or charging). On a failed check, the creature's movement stops when it enters the square; a creature that fails by 5 or more falls prone. A creature larger than Medium gains a +2 bonus on its Acrobatics check for every size category larger than Medium it is.</p>
</>};
const _rotgut = {title: "Rotgut", jsx: <><h2 id="spell-rotgut-rotgut">Rotgut</h2>
<SpellInfo id="1" source="Villain Codex/188" school="trans" ant={2} brd={2} clr={2} inq={2} occ={2} orc={2} skd={2} war={2} ct="1 round" comp="V, S, M (a pinch of hops)" rClose target="1 gallon of water/level" dur="instantaneous" save="Fortitude negates (object)" resist="yes (object)" />
<p>You transform the target into a cheap alcohol of your choice, such as beer, grog, mead, rum, or wine. The alcohol doesn't taste good, but it's drinkable and just as effective as normal alcohol in making creatures inebriated. This spell doesn't work on holy water, potions, magical liquids, or water that is part of a creature.</p>
</>};
const _rotting_alliance = {title: "Rotting Alliance", jsx: <><h2 id="spell-rotting_alliance-rotting-alliance">Rotting Alliance</h2>
<SpellInfo id="1" source="Inner Sea Intrigue/61" school="necro" descriptors={["curse","dis"]} clr={8} drd={8} inq={6} occ={6} orc={8} wit={8} ct="1 standard action" comp="V, S" rClose target="one living creature/level, no two of which can be more than 60 feet apart" dur="permanent" save="Fortitude negates" resist="yes" />
<p>You curse two or more creatures to sicken and waste away while in each others' company. Each target that fails a Fortitude save becomes cursed with a wasting sickness. The disease has no onset period, and those who contracted it must attempt a second Fortitude save immediately. A target that fails this second saving throw takes 1d6 points of Constitution damage and 1d6 points of Charisma damage. Every day thereafter, each target that was within 100 feet of another target during the previous 24 hours takes 1d6 points of Constitution damage and 1d6 points of Charisma damage (reroll to determine the specific amount of damage each day). A successful Fortitude save negates the damage for that day only.</p>
<p>A target cannot be healed of damage from this disease (naturally or by magic) while the target is within 100 feet of another target. If healed of such damage while away from other targets, a target might take damage again the day they reconvene. This disease is a curse, and can never be cured by successful saving throws. The spell can be ended on a single target only with a successful casting of <Link to="/spell/remove_curse">remove curse</Link> followed by a successful casting of <Link to="/spell/remove_disease">remove disease</Link> while the target is within 100 feet of at least one other target. When the curse remains on only one target, it ends automatically.</p>
</>};
const _rovagugs_fury = {title: "Rovagug's Fury", jsx: <><h2 id="spell-rovagugs_fury-rovagugs-fury">Rovagug's Fury</h2>
<SpellInfo id="1" source="Inner Sea Gods/239;Pathfinder #23: The Impossible Eye/66;Gods and Magic/33" school="trans" adp={2} arc={2} bld={2} clr={2} inq={2} orc={2} rma={2} sor={2} war={2} wit={2} wiz={2} faith="Rovagug" ct="1 standard action" comp="V, S" rFt={30} area="cone-shaped burst" dur="instantaneous" save="none" resist="yes" />
<p>You create a minor earthquake that can trip creatures. Attempt a single combat maneuver check and apply the result against the CMD of every creature in the area. If your roll equals or exceeds a creature's CMD, that creature is knocked prone. This trip attack does not provoke an attack of opportunity (though you do provoke one for casting the spell), nor are you knocked prone if you fail the check by 10 or more. Unlike with a regular trip attack, you can trip any creature touching the ground, regardless of size. <Link to="/feat/improved_trip">Improved Trip</Link> does not affect this spell in any way. Though the earthquake is small and focused on the ground, if the area is particularly unstable, the spell might cause items to topple, stones to shake loose from the walls or ceiling, and so on at the GM's discretion.</p>
<Message spelldeity /></>};
const _rubberskin = {title: "Rubberskin", jsx: <><h2 id="spell-rubberskin-rubberskin">Rubberskin</h2>
<SpellInfo id="1" source="Melee Tactics Toolbox/31" school="trans" alc={4} arc={5} inv={4} mag={4} sor={5} wit={5} wiz={5} ct="1 standard action" comp="V, S, M (a piece of rubber or drop of tar)" rPers effect="see text" dur="10 minutes/level" />
<p>Your skin becomes more elastic, distributing crushing damage efficiently. For the duration of the spell, all bludgeoning and falling damage you take is converted into nonlethal damage. This spell has no effect if you're immune to nonlethal damage.</p>
</>};
const _rumormonger = {title: "Rumormonger", jsx: <><h2 id="spell-rumormonger-rumormonger">Rumormonger</h2>
<SpellInfo id="1" source="Ultimate Intrigue/224" school="div" brd={2} inq={2} med={1} mes={2} psy={3} skd={2} ct="1 standard action" comp="V" rLong effect="1 rumor" dur="1 day/level (D)" save="Will negates (see text)" resist="yes" />
<p>You utter a brief anecdote or bit of news as the verbal component of this spell and track its progress through a social gathering or other crowd. When someone who heard the rumor directly from you and repeated the rumor is within your range, they glow silver to your sight, though this glow doesn't occur if the creature is in disguise (unless it was in the same disguise at the time of casting). You can choose to follow the rumor by selecting any such creature in range, at which point the creatures who heard the rumor from you no longer glow silver, and now the creatures who heard the rumor from your chosen creature glow silver instead. You can follow the rumor's path until you reach a creature that heard the rumor but didn't repeat it (or repeated it incorrectly). The glow identifies only creatures who heard the same information you conveyed. Minor cosmetic changes in the rumor don't interrupt the chain, but when the rumor no longer resembles the information you imparted, the trail stops and the spell ends.</p>
<p>You can instead use this spell to trace a rumor back to its source once you hear it. In this case, you repeat the rumor as you heard it for the spell's verbal component. The person who told you the rumor can attempt a Will save to end the effect. Failure indicates the silver glow leads to the individual that told her. This process continues each time you locate the next individual spreading the same information. Each individual attempts the save until one of them succeeds (in which case the spell ends and you can't attempt to trace this particular rumor again) or you trace the rumor to its original source. As with the other application of the spell, tracing a rumor back fails to cause a creature to glow if it is in disguise, unless it was in the same disguise at the time of speaking the rumor.</p>
</>};
const _rune_of_durability = {title: "Rune of Durability", jsx: <><h2 id="spell-rune_of_durability-rune-of-durability">Rune of Durability</h2>
<SpellInfo id="1" source="Dwarves of Golarion/25" school="trans" arc={3} rma={3} sor={3} wiz={3} ct="1 minute" comp="V, S, M (iron fillings)" rTouch target="weapon touched" dur="permanent" save="none" resist="no" />
<p>You inscribe an angular rune upon the surface of a weapon, increasing its hit points. A weapon that bears this rune multiplies its hit points by 2, as if it were one size category larger than it actually is. Placing more than one rune of this type on a weapon has no effect.</p>
</>};
const _rune_of_jandelay = {title: "Rune of Jandelay", jsx: <><h2 id="spell-rune_of_jandelay-rune-of-jandelay">Rune of Jandelay</h2>
<SpellInfo id="1" source="Pathfinder #77: Herald of the Ivory Labyrinth/50" school="trans" arc={9} sor={9} wit={9} wiz={9} ct="3 rounds" comp="V, S, M (cold iron, powdered diamond, and ground adamantine worth a total of 5,000 gp)" r="0 ft.; see text" area="one rune" dur="10 minutes/level" save="see below" resist="no" />
<p>You scribe a potent rune of power upon a surface, similar to the way in which a symbol spell is cast. When inscribed, the rune of Jandelay manifests as a shape that evokes the face of a monstrous elephantine creature - the legendary Oliphant of Jandelay itself. The rune is 5 feet across when created, and the surface on which it is to be inscribed must be large enough to bear it.</p>
<p>The rune of Jandelay is a potent ward against the primal chaos of the Great Beyond. While it is primarily intended to combat the forces of the Maelstrom, it is equally useful against forces from the other chaotic Outer Planes. When cast, the rune stabilizes and reinforces an area in a 120-foot-radius sphere centered on it. Earthquake, transmute rock to mud, stone shape, spike stones, and other spell effects that magically damage or manipulate terrain or structures deal no damage and do not alter anything in the area. Damaging spells that specifically target these structures or regions do not deal damage, but area-affecting spells may damage creatures in the area as normal. Strong chaos planar alignment is reduced to mild alignment, and mild chaos planar alignment is negated entirely in this area.</p>
<p>Creatures with the chaotic subtype in the area of a rune of Jandelay must save against the spell or gain 2 negative levels for as long as they remain in the area. A creature that saves and leaves the area must save again upon reentering the area. These negative levels can never result in permanent level loss but cannot be restored by restoration or similar magic.</p>
</>};
const _rune_of_ruin = {title: "Rune of Ruin", jsx: <><h2 id="spell-rune_of_ruin-rune-of-ruin">Rune of Ruin</h2>
<SpellInfo id="1" source="Arcane Anthology/22" school="trans" descriptors={["curse"]} alc={4} arc={5} brd={4} inq={4} inv={4} skd={4} sor={5} wit={5} wiz={5} ct="1 standard action" comp="V, S, M (a self-portrait on a thin sheet of paper)" rMed target="1 object" dur="instantaneous" save="Fortitude negates (object)" resist="no" />
<p>You curse a magic item, such as magical clothing, a suit of armor, or a weapon. The object is reduced to 1/4 its normal hit point total, gains the broken condition, and appears damaged and worn. If it grants a numeric bonus, such as a +2 deflection bonus to AC, that bonus is reduced by 1 for every 3 caster levels you possess, to a minimum of +0. Other magical qualities fail to work 50% of the time when called upon, so a resistance bonus on saves or a weapon's flaming special ability could fail each time the item is used.</p>
<p>If the object is an intelligent magical item, its Ego score remains unchanged despite its reduced quality. The weapon has only a 50% chance to successfully use any spells or spell-like abilities it has, and has a 25% chance of forgetting its special purpose (if any). If an intelligent weapon is actively dominating its wielder when it fails its save against rune of ruin, the wielder gains an immediate saving throw with a +4 bonus to regain control. Rune of ruin has no affect on magical artifacts.</p>
</>};
const _rune_of_rule = {title: "Rune of Rule", jsx: <><h2 id="spell-rune_of_rule-rune-of-rule">Rune of Rule</h2>
<SpellInfo id="1" source="Adventurer's Guide/61" school="trans" arc={2} brd={2} occ={2} skd={2} sor={2} wit={2} wiz={2} ct="1 minute" comp="V, S, M (vial of paint worth 25 gp)" rClose target="one living creature" dur="1 day or until activated (see description)" save="Will (harmless)" resist="yes" />
<p>Investigations into the ancient and mysterious traditions of the seven virtues of rule of the lost human empire of Azlant, which were later corrupted by the runelords into the more familiar seven deadly sins, inspired the <Link to="/rule/cyphermages">Cyphermages</Link> to develop the runes of rule. This spell allows you to place a rune upon another creature that can then be used to aid it at a later time. You determine the spell's effect at the time of casting by using your finger to paint a specific rune on the recipient's body with a dose of specially prepared paint worth 25 gp. The inscribed rune lasts for 24 hours or until the spell is activated. Unless otherwise noted, the creature upon which the rune of rule has been inscribed can activate it at any time as a swift action. If the spell effect isn't used, all markings associated with the rune disappear and the effect fades. You can never place the spell upon yourself - it must be bestowed on someone else. The seven runes of rule, along with their specific effects when the user activates them, are listed below. A creature can bear only one rune of rule at a time.</p>
<p><em>Charity:</em> A creature bearing this mark gains a +5 insight bonus on a single attack roll or skill check attempted at the request of another creature, provided the creature bearing this mark does not gain any immediate benefit or reward for making the roll or attempting the check.</p>
<p><em>Generosity:</em> A creature bearing the rune of generosity can activate it as an immediate action, but it must do so as another creature within 30 feet activates a consumable magic item such as a potion or scroll that was given to it at some point within the last 24 hours by the creature bearing the rune. When the rune is activated, the effects of the consumable magic item resolve at a caster level that is 2 higher than the item's actual caster level.</p>
<p><em>Humility:</em> When a creature activates the rune of humility, it does not provoke attacks of opportunity for 1 round.</p>
<p><em>Kindness:</em> A creature must be using the aid another action or casting a healing spell in order to activate a rune of kindness. If the creature activates the rune while using the aid another action, the bonus imparted on a success increases to +5. If the creature instead activates the rune while casting a healing spell, the effective caster level of the spell increases by 2.</p>
<p><em>Love:</em> When a creature activates the rune of love as he casts a spell with the charm descriptor, the save DC of that spell increases by 1. Alternatively, a creature can activate the rune of love after he rolls damage for a weapon or spell attack, causing the damage dealt to become nonlethal damage.</p>
<p><em>Temperance:</em> A creature bearing the rune of temperance can activate it as an immediate action immediately upon failing a saving throw against a poison, disease, drug, or similar effect. The creature can immediately attempt a second saving throw against the effect and can use the result of that second saving throw as the actual result.</p>
<p><em>Zeal:</em> A creature that activates the rune of zeal gains a +3 bonus on Will saves, and the save DCs of all language-dependent effects created by the creature increase by 1; these effects last for 1 round.</p>
</>};
const _rune_of_warding = {title: "Rune of Warding", jsx: <><h2 id="spell-rune_of_warding-rune-of-warding">Rune of Warding</h2>
<SpellInfo id="1" source="Dwarves of Golarion/25" school="abjur" arc={3} sor={3} wiz={3} ct="1 hour" comp="V, S, M (powdered adamantine, diamond, or mithral worth 200 gp)" rTouch target="doorway or portal touched" dur="permanent until discharged" save="Reflex half" resist="no (object) and yes (see text)" />
<p>You inscribe a series of runes upon the surface of a door or around the border of an entryway. They function as a glyph of warding (blast glyph), though unlike a glyph of warding, these runes are always visible. The runes count as a glyph of warding for the purpose of what spells can defeat it, placing multiple glyphs in the same area, and so on.</p>
</>};
const _rune_trace = {title: "Rune Trace", jsx: <><h2 id="spell-rune_trace-rune-trace">Rune Trace</h2>
<SpellInfo id="1" source="Adventurer's Guide/60" school="div" arc={1} brd={1} clr={1} occ={1} orc={1} psy={1} skd={1} sor={1} war={1} wiz={1} ct="1 minute" comp="V, S, M (pinch of powdered gemstones worth 25 gp)" rTouch target="rune touched" dur="instantaneous" save="none" resist="no" />
<p>By immersing yourself fully in the intricacies of a carved or written rune of any kind, you can divine the elements of that rune's nature. While casting rune trace, you must run your fingers (which cannot be gloved at the time) over the rune, glyph, symbol, or other marking you want to examine (hereafter referred to as the "rune"). This does not trigger any effects that touching the rune would normally trigger. Runes, symbols, and other effects that trigger when read still trigger as normal if you do so, but note that this spell does not require you to view and read the rune that you're targeting. When the spell's casting time ends, you instantly receive flashes of insight regarding the rune's nature, history, and purpose, including the following information.</p>
<p><em>Age:</em> You learn if the rune was placed within the last 24 hours, within the last month, within the last year, within the last decade, within the last century, or prior to the last century.</p>
<p><em>Insight:</em> If you have cast rune trace on a magical rune, you gain a +5 bonus on all skill rolls and checks to dispel, disable, or otherwise tamper with the rune.</p>
<p><em>Language:</em> You learn what language the character of the rune is taken from, or in the case of a rune that has no language, you learn that it is a unique image.</p>
<p><em>Purpose:</em> You learn the general purpose of the rune (such as whether it's a decoration, information, a magical defense, or a warning).</p>
</>};
const _runic_overload = {title: "Runic Overload", jsx: <><h2 id="spell-runic_overload-runic-overload">Runic Overload</h2>
<SpellInfo id="1" source="Giant Hunter's Handbook/26" school="evo" descriptors={["sonic"]} arc={5} bld={3} mag={4} sor={5} wit={6} wiz={5} ct="1 standard action" comp="V, S, M (a small rune carved from stone)" rClose target="one creature or object" dur="instantaneous" save="see text" resist="see text" />
<p>This spell charges magical runes to an explosive degree. If cast on a creature with magical runes on its body, such as a rune giant or a runescarred creature, it deals 1d6 points of sonic damage per caster level (maximum 20d6) to the target and stuns the target for 1 round. When the spell is cast in this way, it must overcome the target's spell resistance. A successful Will save halves the damage and negates the stun effect.</p>
<p>The spell can also be cast on other magical runes, such as those from arcane mark or explosive runes. In this case, the resulting explosion deals 1d8 points of sonic damage per 2 caster levels (maximum 10d8) to all creatures within a 5-foot radius. Creatures in the area that succeed at a Reflex save take half damage. This spell doesn't destroy runes; targeted runes continue to function normally. Mundane runes, such as ones in writing or runic tattoos, cannot be affected by this spell.</p>
</>};
const _rusting_grasp = {title: "Rusting Grasp", jsx: <><h2 id="spell-rusting_grasp-rusting-grasp">Rusting Grasp</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/335" school="trans" drd={4} hnt={4} occ={4} ct="1 standard action" comp="V, S, DF" rTouch target="one nonmagical ferrous object (or the volume of the object within 3 ft. of the touched point) or one ferrous creature" dur="see text" save="none" resist="no" />
<p>Any iron or iron alloy item you touch crumbles into rust. If the item is so large that it cannot fit within a 3-foot radius, a 3-foot-radius volume of the metal is rusted and destroyed. Magic items made of metal are immune to this spell.</p>
<p>You may employ rusting grasp in combat with a successful melee touch attack. Rusting grasp used in this way instantaneously destroys 1d6 points of AC gained from metal armor (to the maximum amount of protection the armor offers) through corrosion.</p>
<p>Weapons in use by an opponent targeted by the spell are more difficult to grasp. You must succeed on a melee touch attack against the weapon. A metal weapon that is hit is destroyed. Striking at an opponent's weapon provokes an attack of opportunity. Also, you must touch the weapon and not the other way around.</p>
<p>Against a ferrous creature, rusting grasp instantaneously deals 3d6 points of damage + 1 per caster level (maximum +15) per successful attack. The spell lasts for 1 round per level, and you can make one melee touch attack per round.</p>
</>};
const _sabotage_construct = {title: "Sabotage Construct", jsx: <><h2 id="spell-sabotage_construct-sabotage-construct">Sabotage Construct</h2>
<SpellInfo id="1" source="People of the River/27" school="trans" arc={6} brd={5} inq={5} skd={5} sor={6} wit={6} wiz={6} ct="1 standard action" comp="V, S" rTouch targets="all constructs in a 15-ft.-radius burst" dur="1 round/level" save="Will partial" resist="yes" />
<p>This spell functions as <Link to="/spell/confusion">confusion</Link>, except that it affects only constructs. When you are rolling for a confused construct's behavior, a result of 26-50 indicates the construct twitches spasmodically. On a successful Will save, the construct is confused for only 1 round.</p>
</>};
const _sacramental_seal = {title: "Sacramental Seal", jsx: <><h2 id="spell-sacramental_seal-sacramental-seal">Sacramental Seal</h2>
<SpellInfo id="1" source="Horror Adventures/126" school="necro" clr={8} orc={8} ct="1 round" comp="V, S, F (an object worth at least 2,000 gp)" rTouch target="creature touched" dur="instantaneous" save="Will negates" resist="yes" />
<p>You trap the target in an object decorated with the holy symbols of your god or faith. While trapped in the object, the creature can't take any actions and is immune to spells and spell-like abilities. The creature remains permanently trapped in the object as long the object remains in your possession. Only a <Link to="/spell/freedom">freedom</Link>, <Link to="/spell/miracle">miracle</Link>, or <Link to="/spell/wish">wish</Link> spell can dispel the enchantment, though destroying the object frees the creature.</p>
<p>If you relinquish your stewardship of the object (such as giving it away or leaving it in a remote location or extradimensional space), the trapped creature begins to gain control over the object. It immediately gains the ability to communicate telepathically with any creature now in possession of the object. It still can't take any actions besides communicating but can use feats and skills related to speaking (such as Bluff and Diplomacy).</p>
<p>After 1 week of the object being out of your presence, the creature can create a number of haunts with a total CR (that is, the CR of the encounter with all of the haunts at once) equaling 1/4 the creature's Hit Dice. These haunts are centered on the object. The creature can also communicate telepathically up to a range of 100 feet at this point.</p>
<p>After 1 month of the object being out of your presence, the CR total of the haunts the trapped creature can create increases to 1/2 its Hit Dice. In addition to telepathy, it can also impart mental images of its choosing into the mind of any creature holding or carrying the object.</p>
<p>After 1 year of being out of your presence, in addition to the above abilities, the creature can attempt to possess any living creature with an Intelligence score of 3 or higher that touches the object, as per possession. However, the creature can't personally destroy the object, even while possessing another creature.</p>
<p>Because the binding magic irrevocably weakens the longer you're away from the item, returning it to your ownership doesn't reverse any of the effects. You must free the creature and impose another sacramental seal if you want to restrict its abilities again.</p>
<p>If the object is placed in the stewardship of creatures or a location belonging to your faith, it still counts as being out of your presence but it takes ten times longer for the creature to manifest the above abilities (it would take 10 weeks for it to manifest the ability to create haunts, for example).</p>
</>};
const _sacred_bond = {title: "Sacred Bond", jsx: <><h2 id="spell-sacred_bond-sacred-bond">Sacred Bond</h2>
<SpellInfo id="1" source="Advanced Player's Guide/240" school="conj" subschools={["heal"]} clr={3} inq={2} orc={3} pal={2} war={3} ct="1 round" comp="V, S, F (a pair of golden bracelets worth 100 gp each worn by both you and the target)" r="touch; see text" target="creature touched" dur="10 minutes/level (D)" save="Will negates (harmless)" resist="yes (harmless)" />
<p>To use this spell, you first touch the intended recipient, creating a sympathetic field of healing energies between you. Once the spell has been cast, you and the target may cast conjuration (healing) spells with a range of touch upon each other so long as you are within close range (25 ft. + 5 ft./2 levels). Should either you or the target remove your bracelet, the spell immediately ends.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-sacred_bond--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Sacred Bond</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 106</Link><br/>The range at which you and the target can cast conjuration (healing) spells on each other increases to medium (100 feet + 10 feet per caster level). When you or the target uses the sacred bond to cast a healing spell on the other, the caster also heals a number of hit points equal to the minimum amount the spell can heal.</p>
<p><em>Augmented (6th):</em> If you expend two uses of mythic power, casting a healing spell through the link heals the caster the normal amount instead of the minimum amount.</p>
<p>You and the target can use the link to heal each other with targeted healing abilities such as lay on hands. Unlike with healing spells, a character using a healing ability in this way doesn't heal herself.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _sacred_nimbus = {title: "Sacred Nimbus", jsx: <><h2 id="spell-sacred_nimbus-sacred-nimbus">Sacred Nimbus</h2>
<SpellInfo id="1" source="Horror Adventures/126" school="evo" descriptors={["good"]} clr={5} inq={5} orc={5} pal={4} war={5} ct="1 standard action" comp="V, S, DF" rPers target="you" dur="1 round/level (D)" />
<p>You are surrounded by a nimbus of golden light shaped like your god's holy symbol or a symbol of your faith. Any evil creature striking you with unarmed strikes, natural weapons, or a handheld weapon deals normal damage, but at the same time, the attacker takes 1d6 points of damage + 1 point per caster level (maximum +15). Creatures wielding melee weapons with reach are not subject to this damage if they attack you. Spell resistance applies against this damage. You also take half damage from magical attacks with the evil descriptor. If such an attack allows a Reflex save for half damage, you take no damage on a successful saving throw.</p>
</>};
const _sacred_space = {title: "Sacred Space", jsx: <><h2 id="spell-sacred_space-sacred-space">Sacred Space</h2>
<SpellInfo id="1" source="Advanced Race Guide/89" school="evo" descriptors={["good"]} clr={2} orc={2} pal={2} war={2} ct="1 standard action" comp="V, S, M (a vial of ambrosia)" rClose area="20-ft.-radius emanation" dur="2 hours/level" save="none" resist="no" />
<blockquote>
<p><em><Link to="/race/aasimar">Aasimars</Link> have access to the following spell.</em></p>
</blockquote>
<p>This spell sanctifies an area with heavenly power. The DC to resist spells or spell-like abilities with the good descriptor or channeled energy that damages evil outsiders (as when using <Link to="/feat/alignment_channel">Alignment Channel</Link>) increases by +2. In addition, evil outsiders take a -1 penalty on attack rolls, damage rolls, and saving throws, and they cannot be called or summoned into a sacred space. If the sacred space contains an altar, shrine, or other permanent fixture dedicated to your deity, pantheon, or good-aligned higher power, the modifiers given above are doubled. You cannot cast sacred space in an area with a permanent fixture dedicated to a deity other than yours.</p>
</>};
const _sacrifice = {title: "Sacrifice", jsx: <><h2 id="spell-sacrifice-sacrifice">Sacrifice</h2>
<SpellInfo id="1" source="Book of the Damned/185;Book of the Damned - Volume 1: Princes of Darkness/47" school="ench" subschools={["charm"]} descriptors={["mind"]} arc={4} clr={4} orc={4} sor={4} war={4} wiz={4} ct="1 minute" comp="V, S, M (see text)" rClose target="one summoned elemental or outsider (see text)" dur="instantaneous, 1 hour, or 1 day (see text)" save="none" resist="no" />
<p>You make a sacrifice to aid in conjuring and commanding a creature called with <Link to="/spell/planar_ally">planar ally</Link>, <Link to="/spell/planar_binding">planar binding</Link>, or a similar spell. A sacrifice can be used in a variety of ways.</p>
<p><em>Bargain:</em> Making a sacrifice directly to the conjured being grants you a bonus on opposed Charisma checks made to compel the creature into service for the next hour.</p>
<p><em>Enticement:</em> Making a sacrifice the round before conjuring increases the DC of the Will save an outsider must attempt to resist being conjured.</p>
<p><em>Payment:</em> Making a sacrifice directly to the conjured being allows you to pay for one service from the creature in commodities other than gold.</p>
<p><em>Reinforcement:</em> Making a sacrifice the round before creating a magic circle and preparing a summoning diagram amplifies the power of its warding magic, increasing the DC of Charisma checks the creature might attempt to escape. This lasts 1 day.</p>
<p>Multiple sacrifices can be made to affect a single conjuring, but the bonuses provided by this spell do not stack. Therefore, while you can make sacrifices to aid in conjuring and bargaining with a creature, you cannot make multiple sacrifices (even of varying types) to enhance the same effect for a particular conjuration. A sacrifice can consist of any kind of commodity the target creature favors, including living creatures, treasures, or more ephemeral offerings. While this spell is not fundamentally evil, good-aligned creatures are more selective in what offerings they accept, typically scoffing at blood sacrifices. Many sacrifices are fundamentally evil acts, such as murdering a pious innocent to conjure a fiend. Any creature might reject certain types of sacrifices, thus denying you the benefits of this spell, as the offering must appeal to the target-few outsiders would care for 2,000 gp worth of parchment, while 2,000 gp of diamonds would be widely coveted. The GM determines what sacrifices creatures find appealing.</p>
<p>The table below lists a number of likely offerings, along with the bonus such gifts provide and the offering's equivalent value in gold pieces for the purposes of planar ally. Several of these sacrifices involve the loss of ability scores, levels, or lives, and some can cause changes in alignment. Any change wrought by such sacrifices (loss of ability score or level, or change in alignment) cannot be recovered, cured, or undone by any spell or effect short of miracle or wish. The same is true of creatures killed as a sacrifice; such creatures cannot be resurrected by any magic less powerful than these spells. Any object sacrificed with this spell is effectively destroyed or removed to an extraplanar holding of the conjured creature's choice. The bonuses and values noted on the sacrifice effects table are guidelines for offerings; certain types of treasures or lives might prove especially valuable to specific creatures, with extraordinary sacrifices (such as a potent artifact or the life of a high-level paladin) garnering increased bonuses.</p>
<p>You cannot make greater sacrifices than those noted on the table to gain increased bonuses or gold values. For example, you could not gain 2 permanent negative levels to gain a +16 bonus, nor gain increased benefit from slaying 20 Hit Dice worth of creatures to pay for a 10-HD creature's service.</p>
<ScrollContainer id="spell-sacrifice--table-0"><table>
<thead>
<tr>
<th>Type</th>
<th>Sacrifice</th>
<th>Granted Bonus</th>
<th>GP Value</th>
</tr>
</thead>
<tbody><tr>
<td>Treasures</td>
<td>100 gp/HD of target</td>
<td>+1</td>
<td>Equal</td>
</tr>
<tr>
<td>Lives<sup><InnerLink showBacklink="backlink-spell-sacrifice-ref-1-1" id="spell-sacrifice-ref-1-1" data-hash-target to="spell-sacrifice-1">1</InnerLink></sup></td>
<td>One living creature with HD equal to target</td>
<td>+2</td>
<td>200 gp/HD</td>
</tr>
<tr>
<td>Body/Mind<sup><InnerLink showBacklink="backlink-spell-sacrifice-ref-1-2" id="spell-sacrifice-ref-1-2" data-hash-target to="spell-sacrifice-1">1</InnerLink></sup></td>
<td>Reduction of ability scores by 1 reduced</td>
<td>+4</td>
<td>500 gp/point</td>
</tr>
<tr>
<td>Morals<sup><InnerLink showBacklink="backlink-spell-sacrifice-ref-2-1" id="spell-sacrifice-ref-2-1" data-hash-target to="spell-sacrifice-2">2</InnerLink></sup></td>
<td>Alignment shifts one step toward target's</td>
<td>+6</td>
<td>1,000 gp/step</td>
</tr>
<tr>
<td>Soul<sup><InnerLink showBacklink="backlink-spell-sacrifice-ref-1-3" id="spell-sacrifice-ref-1-3" data-hash-target to="spell-sacrifice-1">1</InnerLink></sup></td>
<td>One permanent negative level</td>
<td>+8</td>
<td>2,500 gp</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="spell-sacrifice-label">Footnotes</h3>
<ol>
<li id="spell-sacrifice-1">
<p>When used to sacrifice a life, body, mind, or soul other than the caster's own, this is an evil act. <InnerLink id="backlink-spell-sacrifice-ref-1-1" data-hash-target to="spell-sacrifice-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink> <InnerLink id="backlink-spell-sacrifice-ref-1-2" data-hash-target to="spell-sacrifice-ref-1-2" aria-label="Back to reference 1-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-spell-sacrifice-ref-1-3" data-hash-target to="spell-sacrifice-ref-1-3" aria-label="Back to reference 1-3">↩<sup>3</sup></InnerLink></p>
</li>
<li id="spell-sacrifice-2">
<p>A character can sacrifice only her own morals, and can do so only once per lifetime. <InnerLink id="backlink-spell-sacrifice-ref-2-1" data-hash-target to="spell-sacrifice-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _sacrificial_oath = {title: "Sacrificial Oath", jsx: <><h2 id="spell-sacrificial_oath-sacrificial-oath">Sacrificial Oath</h2>
<SpellInfo id="1" source="Advanced Player's Guide/240" school="abjur" pal={4} ct="1 standard action" comp="V, S, DF" rTouch target="creature touched" dur="1 minute/level" save="Fortitude negates (harmless)" resist="yes (harmless)" />
<p>You create a powerful bond between yourself and a single creature. Until the end of the spell's duration, each time the target is hit with an attack or fails a saving throw, you can take the full damage of that attack and any other effects that creature suffers. If you choose not to take on the damage and effects, you instead take a number of points of damage equal to your Constitution score as backlash. Any resistances or immunities you have are applied normally, but you cannot otherwise reduce or negate the damage or effects of either the transfer or the backlash. If you or the subject of the spell move out of line of sight, the spell ends.</p>
</>};
const _saddle_surge = {title: "Saddle Surge", jsx: <><h2 id="spell-saddle_surge-saddle-surge">Saddle Surge</h2>
<SpellInfo id="1" source="Advanced Player's Guide/240" school="trans" pal={2} ct="1 standard action" comp="V, S, DF" rPers targets="you and your mount" dur="1 round/level (d); see text" />
<p>You and your mount form a perfect synergy that endows both of you with advantages based upon how far you travel each round. For every 5 feet your mount moves in a given round, you gain a +1 competence bonus on Ride checks and both you and your mount gain a +1 morale bonus on damage rolls made with weapons or natural attacks for 1 round. For instance, if your mount traveled 40 feet in a round, you would gain a +8 bonus on Ride checks and you and your mount would both gain a +8 bonus on damage rolls for 1 round, to a maximum bonus equal to your caster level. You must be mounted to enjoy the benefits of this spell. If you dismount, get knocked off, or take any other action that separates you from your mount, the spell immediately ends.</p>
</>};
const _sadomasochism = {title: "Sadomasochism", jsx: <><h2 id="spell-sadomasochism-sadomasochism">Sadomasochism</h2>
<SpellInfo id="1" source="Inner Sea Gods/239" school="necro" descriptors={["pain"]} ant={3} arc={4} bld={4} clr={3} inq={3} mag={4} orc={3} sor={4} war={3} wit={4} wiz={4} faith="Zon-Kuthon" ct="1 standard action" comp="V, S" rPers target="you" dur="1 minute/level (D)" save="Will negates, see text" resist="yes" />
<p>While subject to this spell, any time you are dealt damage, your attacker must roll damage for the attack twice and take the higher roll, but the attacker must also succeed at a Will saving throw or become demoralized for 1 round. Each time you deal damage to a creature demoralized by this spell, you roll damage twice and take the higher result.</p>
<Message spelldeity /></>};
const _salvage = {title: "Salvage", jsx: <><h2 id="spell-salvage-salvage">Salvage</h2>
<SpellInfo id="1" source="Pirates of the Inner Sea/28" school="trans" arc={9} clr={9} orc={9} sor={9} wiz={9} ct="1 standard action" comp="V, S, M" rLong targets="one shipwreck" dur="see text" save="Fortitude negates (object)" resist="yes (object)" />
<p>An invisible force pulls together the remains of a shipwreck. Bits of hull, tattered sails, broken masts, and smashed figureheads knit themselves back together. Rotten wood turns solid once more, and sails re-weave themselves as the rigging snakes across the masts.</p>
<p>It takes a variable amount of time for the ship to rebuild itself, depending on its size.</p>
<ScrollContainer id="spell-salvage--table-0"><table>
<thead>
<tr>
<th>Size</th>
<th>Duration</th>
</tr>
</thead>
<tbody><tr>
<td>Raft</td>
<td>1 minute</td>
</tr>
<tr>
<td>Rowboat</td>
<td>1 minute</td>
</tr>
<tr>
<td>Keelboat</td>
<td>10 minutes</td>
</tr>
<tr>
<td>Longship</td>
<td>1 hour</td>
</tr>
<tr>
<td>Sailing ship</td>
<td>2 hours</td>
</tr>
<tr>
<td>Warship</td>
<td>3 hours</td>
</tr>
<tr>
<td>Galleon</td>
<td>4 hours</td>
</tr>
</tbody></table></ScrollContainer>
<p>At the end of the duration, an air bubble forms around the repaired ship. If submerged, the ship shoots to the surface, erupting with a great splash before settling on the water.</p>
<p>Though the spell requires time to repair the ship, its effects are instantaneous. A salvaged ship cannot be dispelled to return it to a shipwreck. However, before the spell's duration ends and while the ship is still being repaired, salvage can be dispelled to interrupt the repair process. The ship remains in the condition it was in when the spell was interrupted until a new salvage spell is cast (but continues to age normally and suffers the effects of its environments). A new salvage spell's duration is modified by any repairs already begun.</p>
</>};
const _sanctify_armor = {title: "Sanctify Armor", jsx: <><h2 id="spell-sanctify_armor-sanctify-armor">Sanctify Armor</h2>
<SpellInfo id="1" source="Advanced Player's Guide/240" school="abjur" descriptors={["good"]} inq={4} pal={3} ct="1 standard action" comp="V, S" rTouch target="armor touched" dur="1 minute/level" save="Will negates (object, harmless)" resist="yes (object, harmless)" />
<p>You imbue your armor with a righteous aura. It gains a +1 enhancement bonus per four caster levels (maximum +5 at 20th level). When using your judgment or smite ability, you gain DR 5/evil.</p>
<p>An outfit of regular clothing counts as armor that grants no AC bonus for the purpose of this spell.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-sanctify_armor--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Sanctify Armor</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 106</Link><br/>You gain DR 5/evil while wearing the target armor. While you're using your judgment or smite ability, this improves to DR 10/evil.</p>
<p><em>Augmented (3rd):</em> If you expend two uses of mythic power, when you use judgment or smite, add half your tier to your AC as a sacred bonus.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _sanctify_corpse = {title: "Sanctify Corpse", jsx: <><h2 id="spell-sanctify_corpse-sanctify-corpse">Sanctify Corpse</h2>
<SpellInfo id="1" source="Ultimate Magic/236" school="evo" descriptors={["good"]} clr={1} inq={1} orc={1} pal={1} spr={1} war={1} wit={1} ct="1 standard action" comp="V, S, M (a pinch of silver dust), DF" rTouch area="corpse touched" dur="24 hours" save="none" resist="no" />
<p>This spell blesses a corpse with positive energy, preventing it from being turned into an undead creature. Attempts to raise the corpse as an undead automatically fail. If the corpse is of a person slain by a creature that creates undead out of its slain foes (such as a shadow, vampire, or wraith), that effect is delayed until the end of this spell. It is possible to protect a corpse for an extended time by casting this spell each day.</p>
<p>Sanctify corpse can be made permanent with a <Link to="/spell/permanency">permanency</Link> spell by a caster of 9th level or higher for the cost of 500 gp.</p>
</>};
const _sanctify_weapons = {title: "Sanctify Weapons", jsx: <><h2 id="spell-sanctify_weapons-sanctify-weapons">Sanctify Weapons</h2>
<SpellInfo id="1" source="Chronicle of the Righteous/50" school="trans" clr={5} orc={5} pal={3} war={5} ct="1 standard action" comp="V, S, DF" rClose area="20-ft.-radius spread" dur="1 round/level" save="Will negates (object, harmless)" resist="yes (object, harmless)" />
<p>This spell originated among the armies of Heaven. Choose a specific subtype of evil outsider when you cast this spell, such as daemon, demon, devil, or div. All manufactured weapons in the area of effect bypass the DR of that type of outsider. The weapons do not become aligned or change composition.</p>
</>};
const _sanctuary = {title: "Sanctuary", jsx: <><h2 id="spell-sanctuary-sanctuary">Sanctuary</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/336" school="abjur" clr={1} inq={1} orc={1} spr={1} war={1} ct="1 standard action" comp="V, S, DF" rTouch target="creature touched" dur="1 round/level" save="Will negates" resist="no" />
<p>Any opponent attempting to directly attack the warded creature, even with a targeted spell, must attempt a Will save. If the save succeeds, the opponent can attack normally and is unaffected by that casting of the spell. If the save fails, the opponent can't follow through with the attack, that part of its action is lost, and it can't directly attack the warded creature for the duration of the spell. Those not attempting to attack the subject remain unaffected. This spell does not prevent the warded creature from being attacked or affected by area of effect spells. The subject cannot attack without breaking the spell but may use non-attack spells or otherwise act.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-sanctuary--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Sanctuary</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 107</Link><br/>If an attacker succeeds at its Will save to attack the protected target, add your tier to the target's AC against the attack. If the target uses a healing spell or ability on another creature, that creature gains the benefit of non-mythic sanctuary for 1 round. If the creature breaks the non-mythic sanctuary by attacking, subsequent healing by the target doesn't create another non-mythic sanctuary effect on the creature.</p>
<p><em>Augmented (2nd):</em> If you expend two uses of mythic power, select a number of additional creatures equal to half your tier that are within reach. These creatures gain the benefit of non-mythic sanctuary.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _sand_table = {title: "Sand Table", jsx: <><h2 id="spell-sand_table-sand-table">Sand Table</h2>
<SpellInfo id="1" source="Villain Codex/165" school="div" arc={4} brd={3} hnt={3} med={3} rgr={3} skd={3} sor={4} wiz={4} ct="10 minutes" comp="V, S, M (handful of sand)" rText effect="see text" dur="1 hour/level (D)" save="none" resist="no" />
<p>Sand table allows you to create a scale model of the battlefield surrounding your position, showing numbers of troops, their relative positions, and their movement as if you were observing from a great height overhead (1,000 feet up). You cast the spell upon a table or other flat surface and cause the model to appear upon a 5-foot-by-5-foot section of that table or surface. It reflects accurate terrain and topography, though it doesn't identify fine topographical features or concealed or hidden topography. It also indicates all normally visible Small or larger creatures within the area of effect, but it doesn't provide identifying characteristics of those creatures; each creature appears as an indistinct speck, under 1 millimeter in each dimension.</p>
<p>The spell marks obvious war camps and contingents of troops with a symbol of their banner (if they openly carry such a symbol). The spell provides a snapshot of the topography and creature locations when cast; it doesn't adjust for changes that occur during the duration. The table shows the land surrounding itself up to a 1-mile radius from the surface. The sand table does not reveal invisible or incorporeal creatures, nor does it include creatures that are underground, indoors, submerged below the surface of water, below a tree line or other source of cover from above, or flying above 1,000 feet in the air. Those looking at the table can spot Small and larger creatures that are using Stealth to hide, but they take a -10 penalty on their Perception checks because of the size of the models.</p>
<p>Once the spell has been cast, if anything moves or shakes the surface upon which it was placed, the spell ends instantly.</p>
</>};
const _sand_whirlwind = {title: "Sand Whirlwind", jsx: <><h2 id="spell-sand_whirlwind-sand-whirlwind">Sand Whirlwind</h2>
<SpellInfo id="1" source="Taldor, Echoes of Glory/25" school="conj" subschools={["creat"]} clr={3} orc={3} war={3} ct="1 standard action" comp="V, S, M (a handful of sand, dust, or fine powder)" rMed target="one creature" dur="1 round/level" save="Will negates (blinding only)" resist="no" />
<p>A whirling cloud of sand strikes the target, blinding it and hampering its ability to speak. To speak while affected by the spell, the target must make a <Link to="/rule/concentration">concentration</Link> check (DC equal to the DC of this spell). If the target tries to cast a spell, the Concentration DC increases by the level of the spell being cast. A successful Will save negates the blindness but not the speechhampering effect.</p>
<h3 id="spell-sand_whirlwind-greater-sand-whirlwind">Greater Sand Whirlwind</h3>
<SpellInfo id="2" source="Taldor, Echoes of Glory/25" school="conj" subschools={["creat"]} clr={5} orc={5} war={5} ct="1 standard action" comp="V, S, M (a handful of sand, dust, or fine powder)" rMed area="10-ft.-radius spread" dur="1 round/level" save="Will negates (blinding only)" resist="no" />
<p>This spell functions as sand whirlwind except as noted above.</p>
</>};
const _sands_of_time = {title: "Sands of Time", jsx: <><h2 id="spell-sands_of_time-sands-of-time">Sands of Time</h2>
<SpellInfo id="1" source="Ultimate Magic/236;Osirion, Land of the Pharaohs/27" school="necro" arc={3} clr={3} occ={3} orc={3} psy={3} sha={4} sor={3} spr={3} war={3} wit={3} wiz={3} ct="1 standard action" comp="V, S" rTouch target="touched creature or object" dur="10 minutes/level or instantaneous (see text)" save="none" resist="yes" />
<p>You temporarily age the target, immediately advancing it to the next age category. The target immediately takes the age penalties to Strength, Dexterity, and Constitution for its new age category, but does not gain the bonuses for that category. A creature whose age is unknown is treated as if the spell advances it to middle age. Ageless or immortal creatures are immune to this spell.</p>
<p>If you cast this on an object, construct, or undead creature, it takes 3d6 points of damage + 1 point per caster level (maximum +15) as time weathers and corrodes it. This version of the spell has an instantaneous duration.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-sands_of_time--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Sands of Time</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 107</Link><br/>You age the target by two categories instead of one. The damage dealt to objects, constructs, and undead increases to 5d6 points of damage + 1 point per caster level (maximum +20).</p>
<p><em>Augmented (8th):</em> If you expend four uses of mythic power, the duration changes to instantaneous. If the target is a living creature, its age increases to venerable, regardless of its current age. A non-mythic creature receives no saving throw against this, but a mythic creature can attempt a Fortitude save against the spell's DC to reduce the duration to 10 minutes per level and the effect to two age categories instead of automatically changing to venerable.</p>
<p>If the target is an object, construct, or undead, it takes 30 points of damage per caster level. A mythic creature that succeeds at a Fortitude takes only half damage.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _sarzari_shadow_memory = {title: "Sarzari Shadow Memory", jsx: <><h2 id="spell-sarzari_shadow_memory-sarzari-shadow-memory">Sarzari Shadow Memory</h2>
<SpellInfo id="1" source="Adventurer's Guide/160" school="div" arc={6} brd={6} clr={6} inq={6} orc={6} psy={6} skd={6} sor={6} war={6} wit={6} wiz={6} ct="1 hour" comp="V, S, M (a work of art bearing your target's likeness worth at least 1,500 gp)" rPers target="you" dur="1 month" save="Will negates (harmless)" resist="no (harmless)" />
<p>While casting this spell, you slowly destroy a piece of art bearing your victim's likeness and beseech Achaekek to grant you access to the knowledge and lore contained within the innermost sanctum of the Crimson Citadel, the Sarzari Library. This endows you with information that could facilitate the target's assassination by your hands. This information must be chosen from one of the three following categories: back doors, character, or weakness.</p>
<p>"Back doors" informs you of hidden passages and other means of navigation within your target's home. While inside your target's home, you gain a +10 insight bonus on Perception checks and gain the constant benefits of <Link to="/spell/detect_secret_doors">detect secret doors</Link> and <Link to="/spell/find_traps">find traps</Link>. You automatically see through any illusory walls in the target's home.</p>
<p>"Character" lets you know of a compromising detail about your target's personal life, giving you a +10 bonus on Bluff, Diplomacy, and Intimidate checks when attempting to gather information about your contracted victim from other people. Your target takes a -2 penalty on all saving throws against mind-affecting effects you generate, and you gain a +4 bonus on caster level checks you attempt to overcome the target's spell resistance.</p>
<p>"Weakness" grants you knowledge of physical vulnerabilities your target has, as well as information about the target's damage reduction, immunities, and other defensive abilities. If these vulnerabilities and defenses change during the spell's duration, you immediately know. You automatically confirm all critical threats against the target.</p>
<p>Once your victim is slain or a month has passed (whichever comes first), the information you gained from the spell fades. While you can recall certain elements of these memories, you no longer gain any of the benefits associated with the spell. You can only have one target affected by Sarzari shadow memory at any one time; if you cast this spell a second time while a previous casting is still active, the effects of the new spell replace the effects of the old one.</p>
</>};
const _savage_maw = {title: "Savage Maw", jsx: <><h2 id="spell-savage_maw-savage-maw">Savage Maw</h2>
<SpellInfo id="1" source="Advanced Race Guide/59" school="trans" ant={1} clr={2} drd={2} hnt={1} inq={2} mag={2} orc={2} psy={2} rgr={1} war={2} ct="1 standard action" comp="V, S" rPers target="you" dur="1 minute/level (d), special (see below)" />
<blockquote>
<p><em><Link to="/race/half_orc">Half-orcs</Link> have access to the following spell.</em></p>
</blockquote>
<p>Your teeth extend and sharpen, transforming your mouth into a maw of razor-sharp fangs. You gain a bite attack that deals 1d4 points of damage plus your Strength modifier. If you confirm a critical hit with this attack, it also deals 1 point of bleed damage. If you already have a bite attack, your bite deals 2 points of bleed damage on a critical hit. You are considered proficient with this attack. If used as part of a full-attack action, the bite is considered a secondary attack, is made at your full base attack bonus -5, and adds half your Strength modifier to its damage.</p>
<p>You can end this spell before its normal duration by making a bestial roar as a swift action. When you do, you can make an Intimidate check to demoralize all foes within a 30-foot radius that can hear the roar.</p>
</>};
const _saving_finale = {title: "Saving Finale", jsx: <><h2 id="spell-saving_finale-saving-finale">Saving Finale</h2>
<SpellInfo id="1" source="Advanced Player's Guide/241" school="evo" descriptors={["mind"]} brd={1} skd={1} ct="1 immediate action" comp="V, S" rClose target="one living creature" dur="instantaneous" save="Will negates (harmless)" resist="yes (harmless)" />
<p>You must have a bardic performance in effect to cast this spell. With a flourish, you can immediately end your bardic performance when a creature within range affected by your bardic performance fails a saving throw, allowing the subject to immediately reroll the failed saving throw.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-saving_finale--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Saving Finale</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 107</Link><br/>Add your tier as a bonus on the saving throw reroll.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _sawtooth_terrain = {title: "Sawtooth Terrain", jsx: <><h2 id="spell-sawtooth_terrain-sawtooth-terrain">Sawtooth Terrain</h2>
<SpellInfo id="1" source="Adventurer's Guide/161" school="trans" descriptors={["earth"]} arc={5} clr={5} drd={5} hnt={5} orc={5} sor={5} war={5} wit={5} wiz={5} ct="1 round" comp="V, S, DF" rClose effect="one 10-foot square of difficult and damaging terrain" dur="1 round/level" save="Reflex negates" resist="yes" />
<p>This spell targets an area of earth, metal, stone, or wood, causing long, serrated blades to shoot out from random points within the area of effect. Any creature in the area when the spell is first cast must attempt a Reflex save to avoid taking 3d8 points of piercing damage from the blades and an additional 2d6 points of bleed damage. A creature that fails the save also has its speed reduced by half for 24 hours or until the injured creature benefits from a "cure" spell (which restores lost hit points as normal). Another creature can remove the penalty by succeeding on a Heal check against the spell's save DC as a standard action.</p>
<p>The lashing limbs remain active in the area for the remainder of the spell's duration, during which time the area is treated as difficult terrain, and any creature that moves into or through the area takes 1d8 points of piercing damage. The transformed area can be located on any visible surface within range, including floors, walls, doors, ceilings, or other generally flat surfaces.</p>
</>};
const _scale_spikes = {title: "Scale Spikes", jsx: <><h2 id="spell-scale_spikes-scale-spikes">Scale Spikes</h2>
<SpellInfo id="1" source="Monster Codex/141" school="trans" alc={2} arc={2} bld={2} drd={2} hnt={2} inv={2} rgr={2} sha={2} sor={2} wit={2} wiz={2} ct="1 standard action" comp="V, S, M/DF (a small thorn)" rClose target="one living creature/level that is a reptile, has the dragon type, or has the reptilian subtype, and that also has a natural armor bonus of at least +1" dur="1 minute/level" save="Fortitude negates (harmless)" resist="yes (harmless)" />
<p>When the target is affected by this spell, its scales grow jagged spikes. These spikes act like +1 armor spikes. The subject is automatically considered proficient with these scale spikes.</p>
<h3 id="spell-scale_spikes-greater-scale-spikes">Greater Scale Spikes</h3>
<SpellInfo id="2" source="Monster Codex/141" school="trans" alc={4} arc={3} bld={4} drd={3} hnt={3} inv={4} rgr={3} sha={3} sor={3} wit={3} wiz={3} ct="1 standard action" comp="V, S, M/DF (a bit of thistle)" rClose target="one living creature/level that is a reptile, has the dragon type, or has the reptilian subtype, and also has a natural armor bonus of at least +1" dur="1 hour/level" save="Fortitude negates (harmless)" resist="yes (harmless)" />
<p>This spell functions like scale spikes, except that the spikes growing out of the scales have an enhancement bonus on attack and damage rolls equal to +1 for every 4 caster levels (maximum +5). This bonus does not allow the spikes to bypass damage reduction aside from magic.</p>
</>};
const _scales_of_deflection = {title: "Scales of Deflection", jsx: <><h2 id="spell-scales_of_deflection-scales-of-deflection">Scales of Deflection</h2>
<SpellInfo id="1" source="Legacy of Dragons/31" school="abjur" descriptors={["drac"]} arc={3} bld={2} mag={3} occ={3} pal={3} psy={3} sor={3} spr={3} sum={3} usm={3} wiz={3} ct="1 standard action" comp="V, M (a dragon scale)" rPers target="you" dur="1 minute/level (see text)" />
<p>Brilliant draconic iconography matching your draconic heritage (or a kind of dragon whose alignment matches your own) surrounds you. Any touch attack attempted against you resolves against your normal AC. Once such an attack has been resolved, this spell is dismissed at the end of your next turn.</p>
</>};
const _scamper = {title: "Scamper", jsx: <><h2 id="spell-scamper-scamper">Scamper</h2>
<SpellInfo id="1" source="Ultimate Wilderness/234;Animal Archive/25" school="trans" drd={2} hnt={2} rgr={2} ct="1 swift action" comp="V, S" rClose target="your animal companion" dur="1 round; see text" save="none" resist="no" />
<p>Your animal companion moves with astonishing agility and speed until the end of its turn. It can move at full speed while using Acrobatics, and it gains a competence bonus equal to twice your caster level (maximum +20 at 10th level) on Acrobatics checks to avoid attacks of opportunity or move through a square occupied by an enemy.</p>
</>};
const _scare = {title: "Scare", jsx: <><h2 id="spell-scare-scare">Scare</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/336" school="necro" descriptors={["emo","fear","mind"]} ant={2} arc={2} brd={2} med={2} mes={2} occ={2} psy={2} sha={2} skd={2} sor={2} spr={2} wit={2} wiz={2} ct="1 standard action" comp="V, S, M (a bone from an undead creature)" rMed targets="one living creature per three levels, no two of which can be more than 30 ft. apart" dur="1 round/level or 1 round; see text for cause fear" save="Will partial" resist="yes" />
<p>This spell functions like cause fear, except that it causes all targeted creatures of less than 6 HD to become frightened.</p>
</>};
const _scarify = {title: "Scarify", jsx: <><h2 id="spell-scarify-scarify">Scarify</h2>
<SpellInfo id="1" source="Inner Sea Temples/13" school="necro" adp={1} alc={1} ant={1} clr={1} drd={1} hnt={1} inq={1} inv={1} orc={1} sha={1} spr={1} war={1} wit={1} ct="1 standard action" comp="V, S" rTouch target="creature touched" dur="instantaneous" save="Fortitude negates (harmless)" resist="yes (harmless)" />
<p>Your touch causes a single creature's skin to produce fibrous tissue that sutures the creature's wounds, rapidly closing them and leaving jagged scars where the wounds were. The process is painful, and converts 2d6 points of damage + 1 point per caster level (maximum +5) into nonlethal damage. If the target creature is immune to nonlethal damage, the spell fails. Damage resistance against nonlethal damage reduces the amount of damage converted. This effect counts as healing for the purpose of stopping bleed damage. Kuthites are especially fond of this spell, as it gives them permanent physical reminders of the all too brief pain they endured.</p>
</>};
const _scent_trail = {title: "Scent Trail", jsx: <><h2 id="spell-scent_trail-scent-trail">Scent Trail</h2>
<SpellInfo id="1" source="Advanced Player's Guide/241" school="trans" drd={2} hnt={2} ct="1 standard action" comp="V, S, M (a queen ant)" rClose targets="one creature/level, no two of which can be more than 30 ft. apart" dur="1 hour/level" save="Fortitude negates (harmless)" resist="yes (harmless)" />
<p>You, or a willing creature you touch, lay down a trail of scents that only the creatures you designate at the time of casting can detect. These creatures find it very easy to follow this trail. They gain a +20 competence bonus on any Survival checks made for the purpose of tracking the creature laying this trail. Subject creatures with the scent special ability gain a +10 competence bonus on Wisdom or Survival checks to follow the trail.</p>
<p>In addition, you can leave scent messages along the trail. Each word or emotion in this message requires spending a move action in the same spot. Subject creatures seeking to understand this message must make another DC 20 Survival check, with a -1 penalty for every word or emotion in the message, in order to understand it. Creatures cannot benefit from this smell if they cannot use, or do not have, a sense of smell. Creatures can use this spell to backtrack through a dungeon, maze, or similar areas even if the creature laying down the trail crossed over the spot multiple times.</p>
</>};
const _scintillating_pattern = {title: "Scintillating Pattern", jsx: <><h2 id="spell-scintillating_pattern-scintillating-pattern">Scintillating Pattern</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/336" school="ill" subschools={["pat"]} descriptors={["mind"]} arc={8} psy={8} sor={8} wiz={8} ct="1 standard action" comp="V, S, M (a crystal prism)" rClose effect="colorful lights in a 20-ft.-radius spread" dur="concentration+ 2 rounds" save="none" resist="yes" />
<p>A twisting pattern of coruscating colors weaves through the air, affecting creatures within. The spell affects a total number of HD of creatures equal to your caster level (maximum 20). Creatures with the fewest HD are affected first, and among creatures with equal HD, those who are closest to the spell's point of origin are affected first. HD that are not sufficient to affect a creature are wasted. The spell affects each subject according to its HD.</p>
<p><em>6 or less:</em> Unconscious for 1d4 rounds, then stunned for 1d4 rounds, and then confused for 1d4 rounds. (Treat an unconscious result as stunned for nonliving creatures.)</p>
<p><em>7 to 12:</em> Stunned for 1d4 rounds, then confused for an additional 1d4 rounds.</p>
<p><em>13 or more:</em> Confused for 1d4 rounds.</p>
<p>Sightless creatures are not affected by scintillating pattern.</p>
</>};
const _scintillating_wall = {title: "Scintillating Wall", jsx: <><h2 id="spell-scintillating_wall-scintillating-wall">Scintillating Wall</h2>
<SpellInfo id="1" source="Distant Realms/42" school="ill" subschools={["pat"]} descriptors={["mind"]} arc={5} brd={4} psy={5} skd={4} sor={5} wiz={5} ct="1 standard action" comp="V, S, M (a handful of crushed d'ziriak chitin)" rClose effect="wall with an area of up to one 10-ft. square/level" dur="1 round/level (D)" save="see text" resist="no" />
<p>You create a vibrant wall of hypnotic light and color. The wall does not impede movement or line of sight in any way. Creatures moving through the wall must succeed at a Will save or become fascinated. Each round, on its turn, a fascinated creature can attempt a new saving throw to end the effect as a full-round action that does not provoke attacks of opportunity. A creature that succeeds at the save against the fascination effect is no longer affected if it remains within the wall, but it must attempt a new saving throw if it leaves the area and later moves through the wall again. Creatures adjacent to the wall and creatures moving through the wall that succeed at their save against fascination are dazzled.</p>
<p>If you create the wall so that it appears in the same space as one or more creatures, each affected creature must succeed at a Fortitude save or become blinded. Creatures that successfully save against the blindness are subject to the fascination effect unless they leave the wall within 1 round of casting the spell.</p>
<p>Scintillating wall can be made permanent with a <Link to="/spell/permanency">permanency</Link> spell cast by a caster of 13th level or higher, at a cost of 12,500 gp.</p>
</>};
const _scoop = {title: "Scoop", jsx: <><h2 id="spell-scoop-scoop">Scoop</h2>
<SpellInfo id="1" source="Paizo Blog - Ultimate Cantrips" school="evo" descriptors={["force"]} arc={0} sor={0} wiz={0} ct="1 standard action" comp="V, S" rClose effect="6 inch diameter container of force" dur="concentration" save="none" resist="yes" />
<p>You will a small vessel of force into existence. As a move action, you can direct the container up to 15 feet per round in any direction, though the spell ends if the distance between you and the container ever exceeds the spell's range. You can dip the container to pick up or drop a liquid as a move action. The vessel holds up to 1 pint of liquid or small objects, weighing up to 5 pounds. You can also gather up a pint of liquid or small objects spread cross a surface with 1 minute of careful concentration.</p>
<p><strong>Note:</strong> This is a rare cantrip. Spellcasters that gain access to all 0-level spells at 1st level do not gain access to rare cantrips. A spellcaster gains access to rare cantrips only by uncovering their secrets in some other way. Some are guarded by jealous mages, while others are lost in missing libraries or molder on forgotten scrolls.</p>
</>};
const _scorching_ash_form = {title: "Scorching Ash Form", jsx: <><h2 id="spell-scorching_ash_form-scorching-ash-form">Scorching Ash Form</h2>
<SpellInfo id="1" source="Advanced Race Guide/131" school="trans" descriptors={["fire"]} alc={4} arc={4} inv={4} rma={4} sor={4} wiz={4} ct="1 standard action" comp="S, M (a bit of gauze and a handful of ashes)" rTouch target="willing corporeal creature touched" dur="1 minute/level" save="none" resist="no" />
<blockquote>
<p><em><Link to="/race/ifrit">Ifrits</Link> have access to the following spell.</em></p>
</blockquote>
<p>This spell functions like gaseous form, except the target becomes a visible swirl of hot ash and smoke instead of harmless translucent gas. The target gains the fire subtype. Any creature that begins its turn sharing a space with the target takes 2d6 points of fire damage and must make a Fortitude save (DC 15, + 1 per previous check) or suffer the effects of <Link to="/rule/forest_fires">smoke inhalation</Link>.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-scorching_ash_form--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Scorching Ash Form</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 107</Link><br/>The damage dealt increases to 3d6 points of fire damage. This otherwise makes the same changes as mythic gaseous form.</p>
<p><em>Augmented:</em> If you expend two uses of mythic power, the target can shift into or out of scorching ash form as a move action.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _scorching_ray = {title: "Scorching Ray", jsx: <><h2 id="spell-scorching_ray-scorching-ray">Scorching Ray</h2>
<SpellInfo id="1" source="PRPG Core Rulebook/337" school="evo" descriptors={["fire"]} adp={2} arc={2} bld={2} mag={2} sor={2} wiz={2} ct="1 standard action" comp="V, S" rClose effect="one or more rays" dur="instantaneous" save="none" resist="yes" />
<p>You blast your enemies with a searing beam of fire. You may fire one ray, plus one additional ray for every four levels beyond 3rd (to a maximum of three rays at 11th level). Each ray requires a ranged touch attack to hit and deals 4d6 points of fire damage. The rays may be fired at the same or different targets, but all rays must be aimed at targets within 30 feet of each other and fired simultaneously.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-scorching_ray--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Scorching Ray</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 107</Link><br/>Each ray's damage increases to 6d6 points of fire damage. The first ray bypasses fire resistance and immunity.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _scourge_of_the_horsemen = {title: "Scourge of the Horsemen", jsx: <><h2 id="spell-scourge_of_the_horsemen-scourge-of-the-horsemen">Scourge of the Horsemen</h2>
<SpellInfo id="1" source="Book of the Damned - Volume 3: Horsemen of the Apocalypse/39" school="necro" descriptors={["acid","evil"]} arc={9} clr={9} orc={9} sor={9} wiz={9} ct="1 standard action" comp="V, S" rMed area="30-ft. burst" dur="instantaneous" save="Fortitude half" resist="yes" />
<p>This spell blasts the area with a horrific combination of soul-rending energy and physical corrosion. Creatures in the area of effect gain 1d4 negative levels, and take 1d6 points of acid damage per caster level (maximum 20d6).</p>
</>};
const _scouring_winds = {title: "Scouring Winds", jsx: <><h2 id="spell-scouring_winds-scouring-winds">Scouring Winds</h2>
<SpellInfo id="1" source="Ultimate Magic/236" school="evo" descriptors={["air","earth"]} arc={7} drd={7} sor={7} wit={7} wiz={7} ct="1 standard action" comp="V, S" rMed effect="sandstorm in 20-ft. radius, 20 ft. high" dur="1 round/level (D)" save="none" resist="yes (see text)" />
<p>This spell brings forth a windstorm of stinging sand that blocks all vision. You can move the storm up to 30 feet each round as a move action.</p>
<p>Any creature in the area takes 3d6 points of piercing damage each round. The area is considered a windstorm (see the <Link to="/rule/wind">wind effects</Link> table).</p>
<p>If a creature with spell resistance successfully resists this spell, it is unaffected by the winds and sand, but still unable to see within the area of the spell.</p>
<div className="sideNoteWrap singular optional mythic"><ScrollContainer id="spell-scouring_winds--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/mythic_feats" rowSpan={2}><IonIcon aria-label="Mythic Rules" icon="/icons/ancient-sword.svg" /></ThLink><th scope="col">Mythic Scouring Winds</th></tr><tr><td><p><strong>Sources</strong> <Link to="/source/mythic_adventures">Mythic Adventures pg. 107</Link><br/>The spell's damage increases to 4d8 points of piercing damage. Any creature in the area at the start of your turn must succeed at a Reflex save or be blinded for as long as it remains in the area and for 1d4 rounds after it leaves.</p>
<p><em>Augmented (5th):</em> If you expend two uses of mythic power, the sandstorm's radius and height each increase to 40 feet, and the damage dealt increases to 6d8 points of piercing damage. Each round, you can either move the storm up to 50 feet as a move action or up to 10 feet as a swift action.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _screaming_flames = {title: "Screaming Flames", jsx: <><h2 id="spell-screaming_flames-screaming-flames">Screaming Flames</h2>
<SpellInfo id="1" source="Horror Adventures/126" school="evo" descriptors={["evil","fire","mind"]} ant={3} clr={3} orc={3} war={3} ct="1 standard action" comp="V, S, M/DF (a charred animal or humanoid skull fragment)" rClose effect="a sheet of flames up to 15 ft. long and 10 ft. high that moves 15 ft. in a straight line" dur="instantaneous" save="Reflex half and Will negates (see text)" resist="yes" />
<p>A sheer wall of flame appears and rushes away from you. Tendrils of fire reach out of it, shaped into skulls screaming in agony. When the wall passes through a creature's space, that creature must succeed at a Reflex save or take 1d8 points of fire damage for every 2 caster levels you have (maximum 5d8). Any creature taking fire damage must also succeed at a Will save or take 1d3 points of Wisdom damage. Deaf creatures receive a +4 circumstance bonus on their Will saves.</p>
<p>If your campaign uses <Link to="/rule/sanity">the sanity system</Link>, a creature takes 1d6 points of sanity damage instead of Wisdom damage.</p>
</>};
const _screech = {title: "Screech", jsx: <><h2 id="spell-screech-screech">Screech</h2>
<SpellInfo id="1" source="Advanced Player's Guide/241" school="evo" descriptors={["sonic"]} wit={3} ct="1 standard action" comp="V" rFt={30} area="30-ft.-radius spread centered on you" dur="instantaneous" save="Fortitude negates" resist="yes" />
<p>You emit a shrill, piercing shriek, startling those around you into dropping their guard. Enemies in the area must make a successful saving throw or immediately provoke attacks of opportunity from foes that threaten them. You and your allies are unaffected by your own screech.</p>
</>};
const _raise_animal_companion = {..._raise_dead, title: "Raise Animal Companion"};
const _ray_of_sickening = {..._ray_of_exhaustion, title: "Ray of Sickening"};
const _reduce_person_mass = {..._reduce_person, title: "Mass Reduce Person"};
const _reincarnate_spy = {..._reincarnate, title: "Reincarnate Spy"};
const _cyclic_reincarnation = {..._reincarnate, title: "Cyclic Reincarnation"};
const _reinforce_armaments_communal = {..._reinforce_armaments, title: "Communal Reinforce Armaments"};
const _rejuvenate_eidolon = {..._rejuvenate_eidolon_lesser, title: "Rejuvenate Eidolon"};
const _rejuvenate_eidolon_greater = {..._rejuvenate_eidolon_lesser, title: "Greater Rejuvenate Eidolon"};
const _remove_radioactivity_greater = {..._remove_radioactivity, title: "Greater Remove Radioactivity"};
const _rend_body_2 = {..._rend_body_1, title: "Rend Body II"};
const _rend_body_3 = {..._rend_body_1, title: "Rend Body III"};
const _rend_body_4 = {..._rend_body_1, title: "Rend Body IV"};
const _resist_energy_communal = {..._resist_energy, title: "Communal Resist Energy"};
const _restoration_greater = {..._restoration, title: "Greater Restoration"};
const _restoration_lesser = {..._restoration, title: "Lesser Restoration"};
const _restore_eidolon = {..._restore_eidolon_lesser, title: "Restore Eidolon"};
const _false_resurrection = {..._resurrection, title: "False Resurrection"};
const _false_resurrection_greater = {..._resurrection, title: "Greater False Resurrection"};
const _returning_weapon_communal = {..._returning_weapon, title: "Communal Returning Weapon"};
const _sand_whirlwind_greater = {..._sand_whirlwind, title: "Greater Sand Whirlwind"};
const _scale_spikes_greater = {..._scale_spikes, title: "Greater Scale Spikes"};
export default {qlippoth_appearance:_qlippoth_appearance,qualm:_qualm,quell_energy:_quell_energy,quench:_quench,questing_stone:_questing_stone,quick_change:_quick_change,quick_throwing:_quick_throwing,quieting_weapons:_quieting_weapons,quintessence:_quintessence,quintessence_mastery:_quintessence_mastery,radiation_ward:_radiation_ward,rage:_rage,raging_rubble:_raging_rubble,rags_to_riches:_rags_to_riches,raiment_of_command:_raiment_of_command,rain_of_arrows:_rain_of_arrows,rainbow_pattern:_rainbow_pattern,raise_dead:_raise_dead,rally_point:_rally_point,rampart:_rampart,rapid_repair:_rapid_repair,ravens_flight:_ravens_flight,ray_of_enfeeblement:_ray_of_enfeeblement,ray_of_exhaustion:_ray_of_exhaustion,ray_of_frost:_ray_of_frost,read_magic:_read_magic,read_weather:_read_weather,realm_retribution:_realm_retribution,reapers_coterie:_reapers_coterie,reboot:_reboot,rebuke:_rebuke,rebuke_technology:_rebuke_technology,recentering_drone:_recentering_drone,recharge:_recharge,recharge_innate_magic:_recharge_innate_magic,reckless_infatuation:_reckless_infatuation,recoil_fire:_recoil_fire,recorporeal_incarnation:_recorporeal_incarnation,red_hand_of_the_killer:_red_hand_of_the_killer,redcaps_touch:_redcaps_touch,reduce_animal:_reduce_animal,reduce_person:_reduce_person,refine_improvised_weapon:_refine_improvised_weapon,reflexive_barrier:_reflexive_barrier,refuge:_refuge,regenerate:_regenerate,reincarnate:_reincarnate,reinforce_armaments:_reinforce_armaments,reinvigorating_wind:_reinvigorating_wind,rejuvenate_eidolon_lesser:_rejuvenate_eidolon_lesser,release_the_hounds:_release_the_hounds,reloading_hands:_reloading_hands,remarkable_legerdemain:_remarkable_legerdemain,remote_viewing:_remote_viewing,remove_blindness_deafness:_remove_blindness_deafness,remove_curse:_remove_curse,remove_disease:_remove_disease,remove_fear:_remove_fear,remove_paralysis:_remove_paralysis,remove_radioactivity:_remove_radioactivity,remove_sickness:_remove_sickness,rend_body_1:_rend_body_1,renovation:_renovation,repair_undead:_repair_undead,repair_undead_mass:_repair_undead_mass,repel_metal_or_stone:_repel_metal_or_stone,repel_vermin:_repel_vermin,repel_wood:_repel_wood,replay_tracks:_replay_tracks,replenish_ki:_replenish_ki,repress_memory:_repress_memory,reprobation:_reprobation,repugnant_taste:_repugnant_taste,repulsion:_repulsion,residual_tracking:_residual_tracking,resilient_reservoir:_resilient_reservoir,resilient_sphere:_resilient_sphere,resinous_skin:_resinous_skin,resist_energy:_resist_energy,resist_starvation:_resist_starvation,resistance:_resistance,resize_item:_resize_item,resonating_word:_resonating_word,resounding_blow:_resounding_blow,resounding_clang:_resounding_clang,respectful_quiet:_respectful_quiet,resplendent_mansion:_resplendent_mansion,rest_eternal:_rest_eternal,restful_cloak:_restful_cloak,restful_sleep:_restful_sleep,restoration:_restoration,restore_corpse:_restore_corpse,restore_eidolon_lesser:_restore_eidolon_lesser,restore_mythic_power:_restore_mythic_power,resurgent_transformation:_resurgent_transformation,resurrection:_resurrection,retribution:_retribution,retributive_reparations:_retributive_reparations,retrieve_item:_retrieve_item,retrocognition:_retrocognition,returning_weapon:_returning_weapon,reveal_emotions:_reveal_emotions,reveal_mirage:_reveal_mirage,reveal_secrets:_reveal_secrets,reveal_true_shape:_reveal_true_shape,revealing_light:_revealing_light,revelation:_revelation,revenant_armor:_revenant_armor,reverse_gravity:_reverse_gravity,reviving_finale:_reviving_finale,ricochet_shot:_ricochet_shot,ride_the_lightning:_ride_the_lightning,ride_the_waves:_ride_the_waves,riding_possession:_riding_possession,rift_of_ruin:_rift_of_ruin,righteous_blood:_righteous_blood,righteous_condemnation:_righteous_condemnation,righteous_might:_righteous_might,righteous_vigor:_righteous_vigor,rigor_mortis:_rigor_mortis,rising_water:_rising_water,rite_of_bodily_purity:_rite_of_bodily_purity,rite_of_centered_mind:_rite_of_centered_mind,rivals_weald:_rivals_weald,river_of_wind:_river_of_wind,river_whip:_river_whip,riversight:_riversight,roaming_pit:_roaming_pit,rock_whip:_rock_whip,root:_root,rope_tornado:_rope_tornado,rope_trick:_rope_trick,ropeweave:_ropeweave,rotgut:_rotgut,rotting_alliance:_rotting_alliance,rovagugs_fury:_rovagugs_fury,rubberskin:_rubberskin,rumormonger:_rumormonger,rune_of_durability:_rune_of_durability,rune_of_jandelay:_rune_of_jandelay,rune_of_ruin:_rune_of_ruin,rune_of_rule:_rune_of_rule,rune_of_warding:_rune_of_warding,rune_trace:_rune_trace,runic_overload:_runic_overload,rusting_grasp:_rusting_grasp,sabotage_construct:_sabotage_construct,sacramental_seal:_sacramental_seal,sacred_bond:_sacred_bond,sacred_nimbus:_sacred_nimbus,sacred_space:_sacred_space,sacrifice:_sacrifice,sacrificial_oath:_sacrificial_oath,saddle_surge:_saddle_surge,sadomasochism:_sadomasochism,salvage:_salvage,sanctify_armor:_sanctify_armor,sanctify_corpse:_sanctify_corpse,sanctify_weapons:_sanctify_weapons,sanctuary:_sanctuary,sand_table:_sand_table,sand_whirlwind:_sand_whirlwind,sands_of_time:_sands_of_time,sarzari_shadow_memory:_sarzari_shadow_memory,savage_maw:_savage_maw,saving_finale:_saving_finale,sawtooth_terrain:_sawtooth_terrain,scale_spikes:_scale_spikes,scales_of_deflection:_scales_of_deflection,scamper:_scamper,scare:_scare,scarify:_scarify,scent_trail:_scent_trail,scintillating_pattern:_scintillating_pattern,scintillating_wall:_scintillating_wall,scoop:_scoop,scorching_ash_form:_scorching_ash_form,scorching_ray:_scorching_ray,scourge_of_the_horsemen:_scourge_of_the_horsemen,scouring_winds:_scouring_winds,screaming_flames:_screaming_flames,screech:_screech,raise_animal_companion:_raise_animal_companion,ray_of_sickening:_ray_of_sickening,reduce_person_mass:_reduce_person_mass,reincarnate_spy:_reincarnate_spy,cyclic_reincarnation:_cyclic_reincarnation,reinforce_armaments_communal:_reinforce_armaments_communal,rejuvenate_eidolon:_rejuvenate_eidolon,rejuvenate_eidolon_greater:_rejuvenate_eidolon_greater,remove_radioactivity_greater:_remove_radioactivity_greater,rend_body_2:_rend_body_2,rend_body_3:_rend_body_3,rend_body_4:_rend_body_4,resist_energy_communal:_resist_energy_communal,restoration_greater:_restoration_greater,restoration_lesser:_restoration_lesser,restore_eidolon:_restore_eidolon,false_resurrection:_false_resurrection,false_resurrection_greater:_false_resurrection_greater,returning_weapon_communal:_returning_weapon_communal,sand_whirlwind_greater:_sand_whirlwind_greater,scale_spikes_greater:_scale_spikes_greater}