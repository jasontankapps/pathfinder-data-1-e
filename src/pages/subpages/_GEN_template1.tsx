import {IonRippleEffect,IonIcon} from '@ionic/react';
import Header from '../../components/Header';
import Link, {ThLink} from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _not_found = {title: "Unknown", jsx: <><h2 id="template-not_found-error">Error</h2>
<p>Unable to find the requested template.</p>
</>};
const _accursed = {title: "Accursed", jsx: <><div style={{clear:"both"}}></div><Header full><span>Accursed</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 248</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>An accursed creature suffers under a powerful curse and can spread a spiteful curse of its own to others. Choose a thematic curse that you can convey to the players, but don't change the creature's statistics. You can use the sample curses as inspiration.</p>
<p><strong className="hl">Quick Rules:</strong> Two claw attacks that deal 1d4 points of damage <Link to="/umr/natural_attacks">(for Medium creatures)</Link>; natural attacks cause <Link to="/spell/bestow_curse">bestow curse</Link> (DC = 10 + 1/2 creature's HD + creature's Cha modifier, CL = creature's HD) on a successful hit (this can inflict any effect of <em>bestow curse</em> or spread the creature's personal curse).</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Melee</strong> two claw attacks that each deal 1d4 points of damage (for Medium creatures); <strong>Special Attacks</strong> natural attacks cause <em>bestow curse</em> (DC = 10 + 1/2 creature's HD + creature's Cha modifier, CL = creature's HD) on a successful hit (this can inflict any effect of <em>bestow curse</em> or spread the creature's personal curse); <strong>Special Qualities</strong> the creature is under a particular curse.</p>
</>};
const _advanced = {title: "Advanced", jsx: <><div style={{clear:"both"}}></div><Header full><span>Advanced</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 294</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>Creatures with the advanced template are fiercer and more powerful than their ordinary cousins.</p>
<p><strong className="hl">Quick Rules:</strong> +2 on all rolls (including damage rolls) and special ability DCs; +4 to AC and CMD; +2 hp/HD.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>AC</strong> increase natural armor by +2; <strong>Ability Scores</strong> +4 to all ability scores (except Int scores of 2 or less).</p>
</>};
const _aerial = {title: "Aerial", jsx: <><div style={{clear:"both"}}></div><Header full><span>Aerial</span><span>CR +0 or +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook pg. 18</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> See Text</p>
<p>Applying this template to a summoned creature requires the feat <Link to="/feat/versatile_summon_monster">Versatile Summon Monster</Link> or <Link to="/feat/versatile_summon_natures_ally">Versatile Summon Nature's Ally</Link>.</p>
<p>Aerial creatures are native denizens of the Elemental <Link to="/rule/plane_of_air">Plane of Air</Link>, and they possess unique adaptations to help them survive there. This template can be applied only to a non-outsider with none of the subtypes that follow: air, cold, earth, fire, or water. An aerial creature's CR increases by 1 only if the base creature has 5 or more HD.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Type</strong> gains the <Link to="/subtype/air">air</Link> subtype; <strong>Senses</strong> gains darkvision 60 ft.; <strong>Defensive Abilities</strong> gains DR and <Link to="/umr/resistance">resistance</Link> to electricity as noted on the table below; <strong>Speed</strong> gains a fly speed equal to its highest speed with perfect maneuverability (maximum fly speed of 10 feet per HD); <strong>Attacks</strong> gains bonus electricity damage as noted on the table below on attacks with natural weapons and metal weapons.</p>
<ScrollContainer id="template-aerial--table-0"><table>
<thead>
<tr>
<th>Hit Dice</th>
<th>DR</th>
<th>Resist Electricity</th>
<th>Electricity Damage</th>
</tr>
</thead>
<tbody><tr>
<td>1-4</td>
<td>-</td>
<td>10</td>
<td>1 point</td>
</tr>
<tr>
<td>5-10</td>
<td>3/-</td>
<td>15</td>
<td>1d6</td>
</tr>
<tr>
<td>11+</td>
<td>5/-</td>
<td>20</td>
<td>2d6</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _aggregate = {title: "Aggregate", jsx: <><div style={{clear:"both"}}></div><Header full><span>Aggregate</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 59</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>"Aggregate" is an acquired template that can be added to any <Link to="/subtype/robot">robot</Link> (referred to hereafter as the base robot), that gains some of the characteristics of an AI installed in it (referred to hereafter as the base AI). The base robot must have the storage capacity to house the base AI (subject to the GM's discretion). An aggregate retains all the base robot's statistics and special abilities except as noted here. The base AI is not damaged by the destruction of the aggregate, unless the AI is wholly contained within the aggregate's processors (in which case the destruction of the aggregate also destroys the base AI).</p>
<p><strong className="hl">CR:</strong> Same as the base robot + 1. When a base AI is housed entirely in an aggregate, defeating the robot is considered the same as defeating the AI - at the GM's discretion this may replace the normal XP award for an AI on its own.</p>
<p><strong className="hl">Alignment:</strong> The aggregate's alignment changes to match the base AI's alignment.</p>
<p><strong className="hl">Initiative:</strong> The aggregate modifies initiative with the base AI Intelligence modifier instead of the base robot's Dexterity. This stacks with any other modifiers the base robot possesses.</p>
<p><strong className="hl">Senses:</strong> An aggregate retains all of the base robot's senses. An aggregate gains <Link to="/umr/all_around_vision">all-around vision</Link> when it is located in an area fitted with cameras or other sensors that are under the control of the base AI.</p>
<p><strong className="hl">Saves:</strong> An aggregate uses the base robot's saves, though adjust its Will save to account for its new Wisdom score.</p>
<p><strong className="hl">Defensive Abilities:</strong> An aggregate retains all of the base robot's defensive abilities and gains those possessed by the base AI.</p>
<p><strong className="hl">Attacks:</strong> An aggregate uses the base robot's BAB and retains all of the base robot's natural attacks.</p>
<p><strong className="hl">Special Attacks:</strong> An aggregate retains all of its special attacks and gains those possessed by the base AI.</p>
<p><strong className="hl">Abilities:</strong> An aggregate uses the base AI's Intelligence, Wisdom, and Charisma scores.</p>
<p><strong className="hl">Skills:</strong> An aggregate retains all the base robot's skills (recalculated as appropriate for its new Intelligence, Wisdom, and Charisma scores), and gains all of the base AI's skill ranks as bonus skill ranks. These bonus skill ranks do not stack with skill ranks the base robot already has; use the higher of the two for each skill.</p>
<p><strong className="hl">Feats:</strong> An aggregate retains its feats, and gains all of the base AI's feats as bonus feats.</p>
<p><strong className="hl">Languages:</strong> An aggregate retains all of the base robot's languages, and gains any additional languages known by the base AI as bonus languages.</p>
</>};
const _alchemically_invisible = {title: "Alchemically Invisible", jsx: <><div style={{clear:"both"}}></div><Header full><span>Alchemically Invisible</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/rival_guide">Rival Guide pg. 47</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>A creature that is alchemically invisible also suffers from bouts of madness as a result of its condition.</p>
<p><strong className="hl">Quick/Rebuild Rules:</strong> The creature is naturally invisible, but must make a DC 15 Will save at the start of each round of combat to avoid being <Link to="/misc/confused">confused</Link> for 1 round.</p>
</>};
const _alebrije = {title: "Alebrije", jsx: <><div style={{clear:"both"}}></div><Header full><span>Alebrije</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/pathfinder_144_midwives_to_death">Pathfinder #144: Midwives to Death pg. 71</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Alebrijes travel through dreams, visiting creatures as they sleep in hopes of answering questions, jogging memories, or providing inspiration. Alebrijes can take the shape of any animal or magical beast found throughout the Material Plane, though they have unique colorations and patterns all over their bodies, and some grow wings. These colorations typically include bright, vibrant hues and decorative patterns like spirals and stripes.</p>
<p>"Alebrije" is an acquired template that can be added to any <Link to="/type/animal">animal</Link> or <Link to="/type/magical_beast">magical beast</Link> (referred to hereafter as the base creature). An alebrije uses the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Base creature's CR + 2.</p>
<p><strong className="hl">Size:</strong> An alebrije with 8 Hit Dice or more increases in size by one category.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to magical beast (<Link to="/subtype/extraplanar">extraplanar</Link>). Do not recalculate its base attack bonus, saves, or skill ranks.</p>
<p><strong className="hl">Senses:</strong> The creature gains darkvision with a range of 120 feet, dreamsight, and <Link to="/umr/scent">scent</Link>.</p>
<blockquote>
<p><strong>Dreamsight (Su):</strong> Alebrijes are able to notice and locate sleeping creatures within 500 feet, as well as creatures engaged in similar rest, such as meditation or resting trances.</p>
</blockquote>
<p><strong className="hl">AC:</strong> Natural armor bonus increases by 2.</p>
<p><strong className="hl">Hit Dice:</strong> Change all the creature's racial Hit Dice to d10s. Hit Dice derived from class levels remain unchanged.</p>
<p><strong className="hl">Defensive Abilities:</strong> An alebrije with 5 Hit Dice or more gains DR 5/magic (or DR 10/magic if it has 11 Hit Dice or more) and SR equal to its new CR + 6 (or SR equal to its new CR + 11 if it has 11 Hit Dice or more). In addition, an alebrije gains cold resistance 5 and fire resistance 5 (or cold resistance 10 and fire resistance 10 if it has 11 Hit Dice or more). Finally, an alebrije gains <Link to="/magic-enh/light_fortification">light fortification</Link>, as the armor special ability.</p>
<p><strong className="hl">Speed:</strong> An alebrije with 5 Hit Dice or more grows wings and gains a fly speed of 20 feet (average). If the alebrije has 11 Hit Dice or more, it gains a fly speed of 40 feet (average) instead. An alebrije that already has a fly speed improves its maneuverability by one step instead.</p>
<p><strong className="hl">Melee:</strong> An alebrije's natural attacks grow mighty and fantastical. <Link to="/misc/increase_the_damage_die">Increase the damage die</Link> of the base creature's primary natural attacks by one step. An alebrije's natural attacks are considered magical for the purposes of damage reduction.</p>
<p><strong className="hl">Spell-like Abilities:</strong> An alebrije gains the following spell-like abilities, using its Charisma modifier to determine any save DCs: 3/day-<Link to="/spell/dream">dream</Link>, <Link to="/spell/nightmare">nightmare</Link>; 1/day-<Link to="/spell/dream_council">dream council</Link>, <Link to="/spell/dream_travel">dream travel</Link>, <Link to="/spell/mind_thrust_iii">mind thrust III</Link>, <Link to="/spell/plane_shift">plane shift</Link> (self plus 50 lbs. of objects only). The caster level equals the creature's HD (or the caster level of the base creature's spell-like abilities, whichever is higher).</p>
<p><strong className="hl">Ability Scores:</strong> Str +4, Dex +6, Con +4, Int +4, Wis +6, Cha +4.</p>
<p><strong className="hl">Skills:</strong> Alebrijes have a +8 racial bonus on <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> and <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> checks. They always treat these skills as class skills. Otherwise, their skills are the same as the base creatures'.</p>
<p><strong className="hl">Languages:</strong> An alebrije gains <Link to="/umr/telepathy">telepathy</Link> (100 ft.) and can speak one language of its choice.</p>
</>};
const _alter_ego = {title: "Alter Ego", jsx: <><div style={{clear:"both"}}></div><Header full><span>Alter Ego</span><span>CR +0</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 9</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>An alter ego arises when a sliver of a creature's personality breaks free and coalesces into an independent being. An alter ego is almost always formed by accident rather than by design, and usually comes into being during a moment of trauma, disorientation, or sudden incapacitation. In many cases, the progenitor isn't aware that the alter ego was created, particularly if the new creature hides or flees rather than confronting its progenitor immediately.</p>
<p>An alter ego's body is made not of flesh and blood, but of solidified ectoplasm that looks, smells, and feels like its progenitor's body. Because ectoplasm is less dense than bone or carapace, an alter ego weighs less and is more nimble than its progenitor. Although an alter ego appears similar to its progenitor, it speaks in a flat monotone and its eyes stare blankly out of a numb, expressionless face. Observers find an alter ego's behavior and expressions doll-like and off-putting. A creature familiar with the progenitor can identify the alter ego as a duplicate with a successful <Link to="/skill/perception">Perception</Link> check (opposed by the alter ego's Disguise check) or with a successful DC 20 <Link to="/skill/sense_motive">Sense Motive</Link> check. As an alter ego looks very similar to its progenitor, it can easily engender confusion or cause harm to its progenitor's reputation. If the alter ego of a famous paladin is spotted fleeing from danger, for example, witnesses might call the paladin's courage into question. Rumors of uncharacteristic actions might be the progenitor's first indication that an alter ego is at large.</p>
<p>An alter ego's psyche is both more limited and more focused than the mind of its progenitor. Although the alter ego has all of the progenitor's memories and abilities at the time of its creation (including any prepared spells), its personality revolves around a single facet of its progenitor's psyche that drives the alter ego's actions. This facet is often a personality aspect that the progenitor prefers to keep hidden but that leapt to the fore during the event that caused the alter ego's creation. For example, a cleric who secretly grapples with doubt might spawn a staunchly atheist alter ego, or an alchemist who occasionally swindles an adventurer or traveler to keep up with the rent on her shop might engender an openly and unrepentantly greedy alter ego. Stories abound of murderous alter egos, but in truth only a rare few alter egos have facets that provoke extreme activities such as munificence or violence. Alter egos are generally dispassionate in their actions and neutral in alignment; the greatest danger most pose is to their progenitors' reputations and peace of mind.</p>
<p>An alter ego's mind fixates on its sole purpose, and it is rarely idle. It actively and even obsessively pursues short-term goals based on its dominating facet. For example, an alter ego that came into being when its progenitor was disgraced might seek out and humiliate those who witnessed the event, while one with a murderous facet that formed during a botched getaway might engage in a string of massacres. Because these intentions spring from a limited aspect of the progenitor's personality, an alter ego's schemes often conflict with the progenitor's overall goals. For example, the progenitor of the vengeful alter ego might wish to forget the event that created it ever happened, while the alter ego's actions revive gossip about the unfortunate occurrence; if the murderous alter ego sprang from a progenitor who was a methodical, disciplined assassin, the alter ego's reckless killing spree is likely to interfere with the assassin's well-laid plans.</p>
<p>Regardless of the alter ego's personality facet and how it was created, it loathes its progenitor. In some cases, the alter ego might merely find its progenitor to be abrasive. Most alter egos do not initially plan to kill their progenitors, but the idea may come to them while in their progenitors' presences, spurred by their instinctual hatred, and alter egos spawned from self-loathing or suicide attempts may actively plot to ruin or assassinate their progenitors. Despite this revulsion, an alter ego continually receives mental flashes of its progenitor's location and is debilitated when its progenitor is more than a mile away. When in its progenitor's immediate presence, an alter ego cannot help but recognize its progenitor and overhear snatches of the progenitor's surface thoughts. If the progenitor is dead, the alter ego gains considerable freedom to pursue its activities - a realization some alter egos come to over many days, weeks, or years - and that realization drives such alter egos to eventually murder their progenitors, or else plot to replace them and keep their wayward originals somewhere quiet and peaceful.</p>
<p>Certain psychic or magic items (such as a <Link to="/magic-wondrous/mirror_of_opposition">mirror of opposition</Link>) can create a copy of a creature. The alter ego template works well for generating such a creature and is particularly appropriate for a copy of a psychic spellcaster or another psychically sensitive individual. Depending on the effect that created the copy, it may be either a duplicate or an opposite. Unlike standard alter egos, duplicates usually have the same alignment as their progenitors, while opposites have the diametrically opposite alignment.</p>
<p>An alter ego is an artificial creature. It has no need to breathe, eat, or sleep, and rarely takes the time to do so unless it is actively masquerading as a living creature.</p>
<p>It is identical in size to its progenitor, but weighs only two-thirds as much.</p>
<p>"Alter ego" is an acquired template that can be added to any corporeal creature that has an Int score of 3 or higher (referred to hereafter as the base creature). An alter ego uses all of the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Same as base creature.</p>
<p><strong className="hl">Alignment:</strong> Usually neutral.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/construct">construct</Link>. It retains all subtypes except for alignment subtypes and subtypes that indicate kind.</p>
<p><strong className="hl">AC:</strong> Though it appears identical to its progenitor, an alter ego is formed from a solidified ectoplasm that is more yielding than flesh. Reduce the creature's natural armor bonus by 2 (minimum +0).</p>
<p><strong className="hl">Hit Dice:</strong> Change all the creature's racial Hit Dice to d10s. All Hit Dice derived from class levels remain unchanged. As a construct, an alter ego doesn't have a Constitution score, but as a construct it gains bonus hit points based on its size.</p>
<p><strong className="hl">Defensive Abilities:</strong> An alter ego gains fast healing 1 (or fast healing 3 if it has 11 Hit Dice or more), DR 5/adamantine (or DR 10/adamantine if it has 11 Hit Dice or more), and the standard construct immunities and traits.</p>
<p><strong className="hl">Attacks:</strong> An alter ego retains all the natural weapons, manufactured weapon attacks, and weapon proficiencies of the base creature. It also gains a <Link to="/umr/slam_attack">slam attack</Link> that deals damage based on the alter ego's size, but as if it were one size category larger than its actual size.</p>
<p><strong className="hl">Ability Scores:</strong> Dex +4. As a construct, an alter ego has no Constitution score; treat it as having a Constitution score of 10 when determining hit points, save DCs, and other statistics that rely on a Constitution score.</p>
<p><strong className="hl">Feats:</strong> An alter ego gains <Link to="/feat/toughness">Toughness</Link> as a bonus feat.</p>
<p><strong className="hl">Skills:</strong> An alter ego can confuse onlookers into believing it is its progenitor. An alter ego gains a +4 racial bonus on <Link to="/skill/disguise">Disguise</Link> checks to appear as its progenitor.</p>
<p><strong className="hl">Special Qualities:</strong> An alter ego gains the following special qualities.</p>
<blockquote>
<p><strong>Progenitor Dependence (Su):</strong> An alter ego is <Link to="/misc/nauseated">nauseated</Link> whenever it is more than 1 mile from the original creature of which it is a copy, so long as the original creature is alive.</p>
<p><strong>Replicated Gear (Su):</strong> An alter ego has a copy of each item of clothing and equipment (including any magic items other than single- or limited-use items such as wands, scrolls, and potions) that was in its progenitor's possession at the moment when the alter ego was created. This equipment is fabricated of ectoplasm held in place by the alter ego's mental energy. This equipment operates as normal for the alter ego. One round after leaving the alter ego's possession (or 1 round after the alter ego is destroyed), this fabricated equipment dissolves into a thin, silvery mucus.</p>
<p><strong>Sense Progenitor (Su):</strong> An alter ego creature knows the direction and distance to the original creature of which it is a copy. This sense can be blocked by any effect that blocks scrying. An alter ego has <Link to="/spell/detect_thoughts">detect thoughts</Link> and <Link to="/spell/true_seeing">true seeing</Link> against its progenitor in effect at all times (CL 20th); these abilities cannot be dispelled.</p>
</blockquote>
</>};
const _animal_lord = {hasJL:true,title: "Animal Lord", jsx: <><div className="jumpList" id="template-animal_lord-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="template-animal_lord-species-affinity">Species Affinity</InnerLink></li></ul></div><div style={{clear:"both"}}></div><Header full><span>Animal Lord</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 14</Link><br/><strong>Acquired/Inherited Template</strong> Inherited<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>When the gods of nature or powerful spirits desire a champion to defend the animal world, they invest a token of their power in a chosen vessel - be it animal or humanoid. Traditionally, only one animal lord for a specific animal species is active on a world at any one time, although sometimes, when an extant animal lord strays from its charge or otherwise fails, the force that created it might create a replacement to send against the fallen animal lord to challenge it in a combat to the death, with the victor claiming the right to rule or a chance at redemption.</p>
<p>An animal lord does not dwell among humanity - the wild is its domain. How an animal lord interacts with a humanoid society largely depends on how that society treats the animals of that lord's affinity. Societies that honor and respect those animals, even if they use the animals as a food source, earn the animal lord's (sometimes grudging) respect, but those who abuse or otherwise harm animals of that lord's species find a powerful and ardent enemy in the lord.</p>
<p>The longer an animal lord exists, the higher its level should be.</p>
<p>"Animal Lord" is an inherited template that can be added to any humanoid of 10 Hit Dice or more, referred to hereafter as the base creature. The animal lord also gains the characteristics of one type of animal (of a size no larger than one step larger than the base creature's size), referred to hereafter as the base animal.</p>
<p><strong className="hl">CR:</strong> Same as the base creature or the base animal (whichever is higher) +2.</p>
<p><strong className="hl">Alignment:</strong> Any neutral.</p>
<p><strong className="hl">Type:</strong> The base creature's type changes to <Link to="/type/outsider">outsider</Link> (<Link to="/subtype/native">native</Link>, <Link to="/subtype/shapechanger">shapechanger</Link>). Do not recalculate class Hit Dice, BAB, or saves.</p>
<p><strong className="hl">Senses:</strong> An animal lord gains the senses of both the base creature and the base animal in both of its forms.</p>
<p><strong className="hl">AC:</strong> An animal lord gains the base animal or base creature's natural armor bonus, whichever is higher, in both of its forms - this bonus is increased by +2 to determine the animal lord's actual natural armor bonus.</p>
<p><strong className="hl">Defensive Abilities:</strong> An animal lord gains DR 10/silver. It also gains all of the base animal's defensive abilities in both of its forms.</p>
<p><strong className="hl">Speed:</strong> An animal lord's base speed is that of its base creature form or its base animal form, whichever is greater. Animal lords whose base animal has a burrow, climb, fly, or swim speed can use that mode of movement even in humanoid form, instantly growing the necessary appendages as necessary.</p>
<p><strong className="hl">Melee:</strong> An animal lord in humanoid form can instantaneously transform parts of its body to make all of the natural attacks possessed by the base animal. An animal lord typically prefers to use its natural attacks in melee combat, but often carries manufactured ranged weapons to diversify its combat options as well.</p>
<p><strong className="hl">Special Attacks:</strong> An animal lord gains all of the special attacks possessed by the base animal and can employ them in both humanoid and animal form. It also gains abilities determined by its species affinity (see below).</p>
<p><strong className="hl">Ability Scores:</strong> Animal lords use the higher ability score between the base creature and the base animal as their base ability scores, then increase all of these ability scores by +4.</p>
<p><strong className="hl">Skills:</strong> An animal lord gains all of the base animal's racial modifiers to skill checks.</p>
<p><strong className="hl">Special Qualities:</strong> An animal lord gains the following special qualities.</p>
<blockquote>
<p><strong>Change Shape (Su):</strong> An animal lord has two forms - a humanoid and an animal form. When an animal lord in humanoid form uses the base animal's defensive abilities, movement types, attacks, and other features, the animal lord's body instantaneously changes as appropriate to allow the use of that ability, growing wings or claws or fangs as necessary. The animal lord can use this ability to take the shape of the base animal (as <Link to="/spell/shapechange">shapechange</Link>) as a move action.</p>
<p><strong>Dominion (Su):</strong> In both forms, an animal lord is treated as if constantly under the effects of a <Link to="/spell/speak_with_animals">speak with animals</Link> spell, but this only applies to creatures of the animal lord's species affinity (see below). In addition, an animal lord can cast <Link to="/spell/charm_animal">charm animal</Link> on any animal of its affinity as a spell-like ability at will (CL equals the animal lord's HD).</p>
</blockquote>
<h3 id="template-animal_lord-species-affinity" data-hash-target>Species Affinity</h3>
<p>Animal lords can be made from almost any creature of the animal type, but most are grouped into larger categories known as species affinities. The most common animal lord kingdom affinities are detailed below, but many others exist. Animals listed in parenthesis list typical base animals for that lord.</p>
<p><strong className="hl">Bear Lord </strong><strong className="hl"><Link to="/monster/grizzly_bear">(Grizzly Bear):</Link></strong> Bear lords have broad shoulders, sharp teeth, and thick fingers. Bear lords gain the following additional ability.</p>
<blockquote>
<p><strong>Bear Hug (Ex):</strong> A bear lord deals +1d6 extra points of damage when it makes a <Link to="/rule/grapple">grapple</Link> check to damage a creature.</p>
</blockquote>
<p><strong className="hl">Canine Lord </strong><strong className="hl"><Link to="/monster/dog">(Dog, </Link></strong><strong className="hl"><Link to="/monster/hyena">Hyena, </Link></strong><strong className="hl"><Link to="/monster/wolf">Wolf):</Link></strong> Canine lords are hirsute, have pronounced canines, and have slightly pointed ears. Canine lords gain the following additional ability.</p>
<blockquote>
<p><strong>Savage (Ex):</strong> A canine lord deals +1d6 extra points of damage on its first attack in a round against a <Link to="/rule/prone">prone</Link> opponent.</p>
</blockquote>
<p><strong className="hl">Cat Lord </strong><strong className="hl"><Link to="/monster/leopard">(Leopard, </Link></strong><strong className="hl"><Link to="/monster/lion">Lion, </Link></strong><strong className="hl"><Link to="/monster/tiger">Tiger):</Link></strong> Cat lords move with a fluid agility, and have slender bodies and cat-like eyes. Cat lords gain the following additional ability.</p>
<blockquote>
<p><strong>Leap (Ex):</strong> A cat lord adds half its Hit Dice to all <Link to="/skill/acrobatics">Acrobatics</Link> checks made to jump, and is always treated as if it had a running start when jumping.</p>
</blockquote>
<p><strong className="hl">Crocodile Lord </strong><strong className="hl"><Link to="/monster/crocodile">(Crocodile):</Link></strong> Crocodile lords have reptilian eyes, sharp teeth, and a scaly ridge along the spine. Crocodile lords gain the following additional ability.</p>
<blockquote>
<p><strong>Thick Skin (Ex):</strong> A crocodile lord's base natural armor bonus improves by an additional +2 in both of its forms.</p>
</blockquote>
<p><strong className="hl">Dinosaur Lord </strong><strong className="hl"><Link to="/monster/deinonychus">(Deinonychus, </Link></strong><strong className="hl"><Link to="/monster/tyrannosaurus">Tyrannosaurus):</Link></strong> A dinosaur lord tends to have sharp teeth, scaly skin, and a booming voice. Dinosaur lords gain the following additional ability.</p>
<blockquote>
<p><strong>Primeval Mind (Ex):</strong> A dinosaur lord is immune to charm effects and gains a +2 bonus on all Will saves.</p>
</blockquote>
<p><strong className="hl">Raptor Lord </strong><strong className="hl"><Link to="/monster/eagle">(Eagle, </Link></strong><strong className="hl"><Link to="/monster/falcon">Falcon):</Link></strong> Raptor lords have feathery-looking and brightly colored hair, wide searching eyes, and aquiline noses. Raptor lords gain the following additional ability.</p>
<blockquote>
<p><strong>Raptor's Dive (Ex):</strong> A raptor lord deals double damage with any <Link to="/rule/charge">charge</Link> that starts 10 or more feet above its target.</p>
</blockquote>
<p><strong className="hl">Rat Lord </strong><strong className="hl"><Link to="/monster/giant_rat">(Giant Rat):</Link></strong> Rat lords have pointed chins and pointed ears, and move with quick, jittery motions. Rat lords gain the following additional ability.</p>
<blockquote>
<p><strong>Hearty (Ex):</strong> Rat lords are immune to disease and gain a +2 bonus on all Fortitude saves.</p>
</blockquote>
<p><strong className="hl">Shark Lord </strong><strong className="hl"><Link to="/monster/shark">(Shark):</Link></strong> Shark lords have black eyes, pale skin, sharp teeth, and little to no body hair. They gain the following additional ability.</p>
<blockquote>
<p><strong>Brutal Jaws (Ex):</strong> A shark lord's bite attack causes <Link to="/rule/bleed">bleed</Link> (1d6).</p>
</blockquote>
<p><strong className="hl">Serpent Lord </strong><strong className="hl"><Link to="/monster/snake">(Snake):</Link></strong> Serpent lords tend to have unusual skin colors, often with stripes or other patterns), snake-like eyes, and forked tongues. Serpent lords gain the following ability.</p>
<blockquote>
<p><strong>Poison Immunity (Ex):</strong> Serpent lords are immune to poison.</p>
</blockquote>
</>};
const _animus_shade = {title: "Animus Shade", jsx: <><div style={{clear:"both"}}></div><Header full><span>Animus Shade</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 11</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>The typical intelligent mind exists as a war of aspects - primitive survival urges and base wants opposing intellectual reason and high-minded goals. Some of these aspects dominate the mind, defining a creature's personality, while others are shackled away. Sometimes psychic injuries can loosen these shackles, revealing aspects a creature would normally control and suppress. When a creature dies from a psychic injury, its conscious mind may shear away, leaving only those subconscious aspects - the creature's animus - behind. Called animus shades, these spectral undead are gripped with feral rage and lash out at the living. Individuals who engage in psychic combat are particularly prone to succumbing to this form of undeath, and their shades sometimes seek out their former opponents, not content until their one-time adversaries are slain.</p>
<p>Animus shades always bear a superficial resemblance to their former, living selves, but manifest in death as wild brutes, made powerful by their anger and feral by their long suffering. They often appear hunched and contorted after a lifetime of being crushed beneath the weight of the dominant psyches, and can sport wicked claws, overlong limbs, cracked flesh, severed (but still present) body parts, and other nightmarish deformities reflecting the fears their living selves harbored about the dark corners of their own minds. Any gear or items the creature had appear rotted, cracked, and torn in spectral form, though it may carry ghostly versions of the weapons it used in life, deadly implements still capable of harming the living.</p>
<p>Most often, animus shades linger near the sites of their deaths or wander without any specific purpose. As many psychic contests occur in <Link to="/rule/mindscapes">mindscapes</Link> or on far-flung esoteric planes, animus shades are frequently found roaming such realms, endlessly raging over the sometimes centuries-old defeats that resulted in their demises. Even when not consumed by such losses, animus shades commonly target those they happen across who remind them of the dominant selves that repressed them in life - whether because of similarities in physical appearance, personality, or activity. However, some rare animus shades have greater clarity of focus and are gripped with the need to undo the accomplishments they achieved in life, taking pleasure in destroying those things they once loved or took pride in.</p>
<p>Because they're created through psychic violence, animus shades usually appear among intelligent races and beings known for mastering occult forces. Among such races, these undead prove far more common within cultures and groups that cultivate psychic prowess. They're easy to mistake for <Link to="/template/ghost">ghosts</Link> or other undead - often to tragic ends. Fortunately, in lands that value physical strength over mental prowess and in strictly martial cultures, animus shades are almost unknown. Members of races such as hobgoblins, kobolds, and orcs, which seldom give rise to psychically talented individuals, almost never return as animus shades.</p>
<p>Poisoned by the psychic violence that spawned them, animus shades rarely, if ever, cooperate. In death, even animus shades created from former allies slain by the same foe viciously strike out at each other. The mental trauma that fills them and holds them to the world scars these undead deeply, but ultimately makes them most resentful of themselves - they know it was their own weaknesses or distraction that resulted in their deaths. Much of their rage is thus pointed inward, and they take particular satisfaction in viciously unleashing their hatred on those who resemble them, especially if the resulting conflicts remind them of the battles in which they died.</p>
<p>"Animus shade" is an acquired template that can be added to any living creature that has a Charisma score of at least 6 and an Intelligence score of at least 8. An animus shade retains all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Base creature's CR + 2.</p>
<p><strong className="hl">Alignment:</strong> Any evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/undead">undead</Link>. Do not recalculate the creature's base attack bonus, saves, or skill points. It gains the <Link to="/subtype/incorporeal">incorporeal</Link> subtype.</p>
<p><strong className="hl">Senses:</strong> An animus shade gains darkvision with a range of 60 feet.</p>
<p><strong className="hl">Aura:</strong> The animus shade gains a <Link to="/umr/mental_static_aura">mental static aura</Link>.</p>
<p><strong className="hl">AC:</strong> The animus shade gains a deflection bonus to its Armor Class equal to its Charisma modifier from the incorporeal subtype. It loses the base creature's natural armor bonus, as well as all armor and shield bonuses not from force effects or the <Link to="/magic-enh/ghost_touch_a">ghost touch</Link> special ability.</p>
<p><strong className="hl">Hit Dice:</strong> Change the base creature's racial Hit Dice to d8s. Its class Hit Dice are unaffected. As an undead, an animus shade uses its Charisma modifier to determine its bonus hit points (instead of its Constitution modifier).</p>
<p><strong className="hl">Defensive Abilities:</strong> An animus shade retains all of the defensive abilities of the base creature that don't rely on a corporeal form to function. It gains <Link to="/umr/channel_resistance">channel resistance</Link> +4, the incorporeal ability, and all of the immunities granted by its undead traits. An animus shade also gains the following defensive ability.</p>
<blockquote>
<p><strong>Mental Schism (Su):</strong> An animus shade's mind is a chaotic tangle of shredded remnants of the dominant personality that once subsumed it. This mercurial state of being is too piecemeal for alignment-based effects to take hold. The animus shade is immune to all effects that are dependent on alignment.</p>
</blockquote>
<p><strong className="hl">Speed:</strong> An animus shade loses its previous speeds and gains a fly speed of 30 feet (perfect), unless the base creature has a better fly speed.</p>
<p><strong className="hl">Attacks:</strong> An animus shade loses all of the base creature's natural and unarmed attacks.</p>
<p><strong className="hl">Special Attacks:</strong> An animus shade retains all special attacks of the original creature that do not require a corporeal body to function. In addition, it gains the following special attacks. The save DC of an animus shade's special attacks is equal to 10 + half the animus shade's Hit Dice + the animus shade's Charisma modifier. These are mind-affecting effects.</p>
<blockquote>
<p><strong>Animus Insinuation (Sp):</strong> When an animus shade touches a creature, it inspires that creature's animus to rise up and overthrow the creature's personality. This effect functions as per <Link to="/spell/id_insinuation_ii">id insinuation II</Link> if the animus shade's CR is 7 or less or <Link to="/spell/id_insinuation_iv">id insinuation IV</Link> if the animus shade's CR is 8 or higher, except that either way, the effect targets only a single creature touched and the duration is 1 round per Hit Die of the animus shade, without the need for concentration.</p>
<p><strong>Corrupt Intent (Su):</strong> An animus shade subverts the intent and willpower of its enemies, filling them with doubt and conflicting desires that play into the animus shade's hands. Anytime a creature strikes the animus shade with a melee or ranged attack, it must succeed at a Will save or take a -1 penalty on all further attacks against the animus shade for 1d4 rounds. Each subsequent failed save against this ability by a creature already under its effect increases the total penalty by 1 and extends the duration of the effect by 1 round.</p>
<p><strong>Rend Psyche (Su):</strong> As a standard action, an animus shade can unleash a jet of dark energy at a creature within 30 feet. On a successful ranged touch attack, the target is wracked with mental agony as its own animus attempts to wrench free from its physical form. This violent struggle deals a number of d4s of damage equal to the animus shade's CR, as well as 1d6 points of <Link to="/rule/charisma_damage">Charisma damage</Link>. A successful Will save halves the damage and negates the Charisma damage.</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> Cha +4. In addition, as an incorporeal creature, an animus shade has no Strength or Constitution score.</p>
<p><strong className="hl">Skills:</strong> An animus shade gains a +8 racial bonus on <Link to="/skill/intimidate">Intimidate</Link> and <Link to="/skill/perception">Perception</Link> checks (which stacks with other racial bonuses). An animus shade treats <Link to="/skill/climb">Climb</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/fly">Fly</Link>, Intimidate, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, Perception, <Link to="/skill/sense_motive">Sense Motive</Link>, <Link to="/skill/spellcraft">Spellcraft</Link>, and <Link to="/skill/stealth">Stealth</Link> as class skills. Otherwise, its skills are the same as those of the base creature.</p>
</>};
const _apostle_kyton = {title: "Apostle Kyton", jsx: <><div style={{clear:"both"}}></div><Header full><span>Apostle Kyton</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 240</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Not all victims of a <Link to="/family/kyton">kyton's</Link> torturous transformations perish from their captors' exacting ministrations. Some creatures are transfigured into hybrids of their past selves and the dark malevolence of the kytons. These apostle kytons vary from being degenerate and submissive entities wholly subservient to the will of the kytons that massacred their sense of self, to utterly abominable creatures that take glee in their transformation, rising into leadership positions within kyton hierarchy. Creatures that lose themselves completely to the <Link to="/corruption/shadowbound">shadowbound corruption</Link> also sometimes become apostle kytons, as their souls are twisted to match the kytons' amoral sensibilities. Those who willingly become apostle kytons tend to share a similar niche with <Link to="/monster/ostiarius">ostiarius kytons</Link>, and the two sorts of kytons often collude together in cabals. Other apostles assist <Link to="/monster/interlocutor">interlocutors</Link> in their ministrations or even serve the mighty <Link to="/monster/eremite">eremites</Link> directly as seekers of "perfect parts."</p>
<p>"Apostle kyton" is an acquired template that can be added to any living creature of the <Link to="/type/humanoid">humanoid</Link> or <Link to="/type/monstrous_humanoid">monstrous humanoid</Link> type (referred to hereafter as the base creature). Most apostle kytons were once humanoids. An apostle kyton uses the base creature's statistics and abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Base creature's CR + 2.</p>
<p><strong className="hl">Alignment:</strong> Lawful evil.</p>
<p><strong className="hl">Type:</strong> The apostle kyton's type changes to <Link to="/type/outsider">outsider</Link> (<Link to="/subtype/kyton">kyton</Link>, <Link to="/subtype/native">native</Link>). Do not recalculate Hit Dice, BAB, or saves. It gains the <Link to="/subtype/augmented">augmented</Link> subtype.</p>
<p><strong className="hl">Senses:</strong> An apostle kyton gains darkvision 60 feet.</p>
<p><strong className="hl">AC:</strong> Natural armor bonus increases by 4.</p>
<p><strong className="hl">Defensive Abilities:</strong> An apostle kyton gains <Link to="/umr/immunity">immunity</Link> to cold, spell resistance equal to 11 + its total CR, and <Link to="/umr/regeneration">regeneration</Link> equal to 1/2 its Hit Dice that is negated by good weapons, good spells, and silver weapons.</p>
<p><strong className="hl">Special Attacks:</strong> An apostle kyton gains the following special attacks.</p>
<blockquote>
<p><strong>Agonizing Prayer (Su):</strong> As a full-round action that provokes attacks of opportunity, an apostle kyton can orate a prayer so profane that it causes any non-kyton listening to erupt in bleeding wounds. Any non-kyton listener must succeed at a Will save (DC = 10 + 1/2 the apostle kyton's Hit Dice + its Charisma modifier) or take 1d6 points of nonlethal damage per Hit Die of the apostle kyton, take <Link to="/rule/bleed">bleed</Link> damage as if struck by the apostle kyton's bleeding touch, and become <Link to="/misc/staggered">staggered</Link> for 1 round. Creatures that succeed on this save halve the nonlethal damage and negate the staggered effect, but they still take the bleed damage. A creature that has taken nonlethal damage greater than or equal to its current hit points is not normally rendered unconscious by this ability, but such a creature is still <Link to="/misc/helpless">helpless</Link>, rendering it susceptible to the apostle kyton's seductive oration ability. This is a sonic pain effect.</p>
<p><strong>Bleeding Touch (Su):</strong> An apostle kyton that touches a creature deals 1 point of damage plus 1d6 points of bleed damage for every 10 Hit Dice of the kyton. If an apostle kyton attacks with natural or manufactured weapons, its weapons also deal this bleed damage.</p>
<p><strong>Seductive Oration (Su):</strong> An apostle kyton has a unique perspective due to her transition into her current form. As a full-round action that provokes attacks of opportunity, an apostle kyton can speak to the pleasures and wonders it experienced during its transformation. Any creature that listens to this speech for 1 continuous minute must succeed at a Will save (DC = 10 + 1/2 the apostle kyton's Hit Dice + the apostle kyton's Charisma modifier) or take 1d6 points of <Link to="/rule/wisdom_damage">Wisdom damage</Link>. This Wisdom damage increases by 1d6 for every 8 Hit Dice of the apostle kyton. A creature that succeeds at its save can't be affected by that apostle kyton's seductive oration ability for 24 hours.</p>
<p>After failing the save to resist the apostle kyton's seductive oration, the target begins to question the definitions of morality, physicality, and life. Once per week, as long as the affected creature remains in communication with the apostle kyton, it must attempt a saving throw against seductive oration again or have its alignment shift one step toward lawful evil and take 1d6 additional points of Wisdom damage. The save DC increases by 1 per consecutive week of contact with the apostle kyton. A successful save prevents the alignment shift. A creature can't take Wisdom damage from seductive oration more than once per week, even if it encounters multiple apostle kytons.</p>
<p>When the target's alignment completely shifts to lawful evil (or if the target is lawful evil when first seduced), the target must immediately succeed at a Will save (with the same DC as seductive oration, including any increases from extended contact) or gain a <Link to="/rule/madness">greater madness</Link>. If your campaign uses the <Link to="/rule/sanity">sanity system</Link>, then instead of dealing Wisdom damage, seductive oration deals sanity damage equal to 1/2 the apostle kyton's CR. If the target is turned lawful evil, the greater madness it gains is in addition to any madness it might gain from the sanity damage itself.</p>
<p>Creatures that are driven insane by an apostle kyton often eventually become <Link to="/template/broken_soul">broken souls</Link>, but some rare individuals gain the <Link to="/corruption/shadowbound">shadowbound corruption</Link> or even transform into apostle kytons themselves.</p>
<p><strong>Unnerving Gaze (Su):</strong> An apostle kyton's unnerving gaze (see the kyton subtype) causes those who fail their saving throws to be <Link to="/misc/fascinated">fascinated</Link> by the apostle kyton. The apostle kyton's seductive oration doesn't break this fascination effect, but other attacks break the effect as normal.</p>
</blockquote>
<p><strong className="hl">Spell-Like Abilities:</strong> An apostle kyton of 11 Hit Dice or higher can cast <Link to="/spell/shadow_walk">shadow walk</Link> once per day, with a caster level equal to her Hit Dice. An apostle kyton of 20 Hit Dice or higher can use <em>shadow walk</em> at will.</p>
<p><strong className="hl">Special Qualities:</strong> An apostle kyton gains the following.</p>
<blockquote>
<p><strong>Shadow Traveler (Su):</strong> When an apostle kyton uses <em>shadow walk,</em> she moves at 100 miles per hour.</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> Strength +6, Dexterity +4, Constitution +6, Intelligence +2, Wisdom +6, Charisma +6.</p>
<p><strong className="hl">Skills:</strong> An apostle kyton gains a +4 racial bonus on Bluff, Heal, and Intimidate checks.</p>
<p><strong className="hl">Languages:</strong> An apostle kyton learns Infernal as a bonus language.</p>
</>};
const _aqueous = {title: "Aqueous", jsx: <><div style={{clear:"both"}}></div><Header full><span>Aqueous</span><span>CR +0 or +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook pg. 19</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> See Text</p>
<p>Applying this template to a summoned creature requires the feat <Link to="/feat/versatile_summon_monster">Versatile Summon Monster</Link> or <Link to="/feat/versatile_summon_natures_ally">Versatile Summon Nature's Ally</Link>.</p>
<p>Aqueous creatures are native denizens of the Elemental Planes of Water, and they move with a unique grace underwater. This template can be applied only to a non-outsider that has none of the following subtypes: air, cold, earth, fire, or water. An aqueous creature's CR increases by 1 only if the base creature has 5 or more HD.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Type</strong> gains the <Link to="/subtype/water">water</Link> subtype; <strong>Senses</strong> gains darkvision 60 ft.; <strong>Defensive Abilities</strong> gains DR and resistance to cold as noted on the table below; <strong>Speed</strong> gains a swim speed equal to its highest speed + 10 ft.; <strong>Attacks</strong> gains bonus cold damage as noted on the table below on attacks with natural weapons and metal weapons.</p>
<ScrollContainer id="template-aqueous--table-0"><table>
<thead>
<tr>
<th>Hit Dice</th>
<th>DR</th>
<th>Resist Cold</th>
<th>Cold Damage</th>
</tr>
</thead>
<tbody><tr>
<td>1-4</td>
<td>-</td>
<td>10</td>
<td>1 point</td>
</tr>
<tr>
<td>5-10</td>
<td>3/-</td>
<td>15</td>
<td>1d6</td>
</tr>
<tr>
<td>11+</td>
<td>5/-</td>
<td>20</td>
<td>2d6</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _barbarian = {title: "Barbarian", jsx: <><div style={{clear:"both"}}></div><Header full><span>Barbarian</span><span>CR +2 or +3</span></Header>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 246</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>A <Link to="/class/barbarian">barbarian</Link> creature can fly into a rage, granting it numerous bonuses in combat. It also gains additional hit points and a few valuable defensive abilities. A barbarian creature's CR increases by 3 if the creature has 10 or more HD. A barbarian creature must be chaotic.</p>
<p><strong className="hl">Quick Rules:</strong> +2 on all rolls based on Str; can rage for a number of rounds per day equal to 4 + its HD + its Con modifier (this functions as greater rage if the creature has 10 or more HD); gains DR 1/- and <Link to="/ability/uncanny_dodge">uncanny dodge</Link> (DR 3/- and <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> if the creature has 10 or more HD).</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Defensive Abilities</strong> uncanny dodge (improved uncanny dodge if the creature has 10 or more HD; DR 1/- (3/- if the creature has 10 or more HD); <strong>Special Attacks</strong> rage (can be used a number of rounds per day equal to 4 + its HD + its Con modifier, functions as the greater rage class feature if the creature has 10 or more HD); <strong>Ability Scores</strong> +4 Strength.</p>
</>};
const _bard = {title: "Bard", jsx: <><div style={{clear:"both"}}></div><Header full><span>Bard</span><span>CR +1 or +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 246</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>Capable of inspiring its companions to accomplish great things, a <Link to="/class/bard">bard</Link> creature is most effective when surrounded by allies. It also gains some limited spellcasting. A bard creature's CR increases by 2 if the creature has 10 or more HD.</p>
<p><strong className="hl">Quick Rules:</strong> +2 on all rolls based on Cha; can use <Link to="/ability/bardic_performance">bardic performance</Link> for a number of rounds per day equal to 4 + its HD + its Cha modifier (using its HD as its bard level to determine the bonuses and types of performance); can cast a small number of bard spells (see the Bard Spells Known table, below) using its HD as its CL and gaining two spell slots of each level for every level of spells known.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Special Attacks</strong> bardic performance (can be used a number of rounds per day equal to 4 + the creature's HD + its Cha modifier, using its HD as its bard level to determine bonuses and types of performance); <strong>Bard Spells</strong> can cast a small number of bard spells (see the Bard Spells Known table below) using its HD as its CL and gaining two spell slots of each level for every level of spells known; <strong>Ability Scores</strong> +4 Charisma.</p>
<h3 id="template-bard-bard-spells-known">Bard Spells Known</h3>
<ScrollContainer id="template-bard--table-0"><table>
<thead>
<tr>
<th>HD</th>
<th>0</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
</tr>
</thead>
<tbody><tr>
<td>1-4</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5-8</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9-12</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13-16</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>17-20</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _bestial_creature = {title: "Bestial Creature", jsx: <><div style={{clear:"both"}}></div><Header full><span>Bestial Creature</span><span>CR +0</span></Header>
<p><strong>Sources</strong> <Link to="/source/lost_treasures">Lost Treasures pg. 17</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>Bestial is an acquired simple template that can be applied to any <Link to="/type/humanoid">humanoid</Link> that doesn't possess the <Link to="/ability/wild_empathy">wild empathy</Link> class feature. Humanoids afflicted with this template gain traits of a random wild animal from the waist up, appearing much like a <Link to="/template/lycanthrope">lycanthrope</Link> in hybrid form. Common animal forms include those of bears, boars, rats, weasels, and wolves.</p>
<p>Humanoids with the bestial simple template are resilient and develop rudimentary natural attacks, but the transformation dulls the mind and imparts a brutish demeanor.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>AC</strong> increase natural armor by 1; <strong>Attacks</strong> gain 2 claw attacks and 1 bite attack (all primary natural attacks), which deal damage as though the creature were one size category smaller (see <Link to="/umr/natural_attacks">Table 3-1</Link>); <strong>Ability Scores</strong> +2 Con, -2 Int, -2 Cha</p>
</>};
const _black_blooded = {title: "Black-Blooded", jsx: <><div style={{clear:"both"}}></div><Header full><span>Black-Blooded</span><span>CR +3</span></Header>
<p><strong>Sources</strong> <Link to="/source/pathfinder_18_descent_into_midnight">Pathfinder #18: Descent into Midnight pg. 82</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>None can claim to fully understand all of the properties of the <Link to="/magic-artifact/black_blood">black blood</Link> that courses through the depths of the Darklands. Freezing regardless of temperature and fundamentally charged with deadly negative energies, the viscous ooze empowers the magic of the dead while it fouls and destroys nearly every living thing it touches. Yet not everything is destroyed by the profane substance's corruptive touch. Some rare beings refuse to be drained of life, and for their tenacity the black blood disfigures them as if by some cruel whim.</p>
<p>Black-blooded creatures are monstrosities warped by exposure to the vile fluids that pervade the Land of Black Blood. Sometimes born of creatures living on the shores of the Caltherium or those subjected to the necromantic fluids as part of cruel experiments, such beings prove exceedingly rare. Those that do exist, however, are crazed and physically warped abominations, living manifestations of the destructive black blood, their paths tainted by endless secretions of the freezing pollution and the ruined lifeless forms of all they encounter. Fortunately, most mutated by the black blood don't live for long, as no mortal form can suffer the negatively charged. But, in the depths of the Darklands - to the fright of the inhabitants of those already deadly realms - there are known to be some terrifying exceptions.</p>
<p>"Black-Blooded" is an acquired template that can be added to any corporeal aberration, animal, dragon, fey, giant, humanoid, magical beast, monstrous humanoid, ooze, plant, or vermin (referred to hereafter as the base creature).</p>
<p><strong className="hl">CR:</strong> Base creature's CR + 3.</p>
<p><strong className="hl">Alignment:</strong> Chaotic evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/aberration">aberration</Link> and it gains the <Link to="/subtype/aquatic">aquatic</Link> subtype.</p>
<p><strong className="hl">AC:</strong> Natural armor improves by 2.</p>
<p><strong className="hl">Offensive Abilities:</strong> A black-blooded creature retains all of the attacks and damage of the base creature, but deals an additional 1d6 points of cold damage on all attacks.</p>
<p><strong className="hl">Special Attacks:</strong> A black-blooded creature retains all the special attacks of the base creature and gains the following special attack.</p>
<blockquote>
<p><strong>Breath Weapon (Su):</strong> 30-foot cone of black blood, once every 1d4 rounds, damage 6d6 cold. A successful Reflex save (DC 10 + 1.2 black-blooded creature's racial HD + black-blooded creature's Con modifier) reduces damage by half.</p>
</blockquote>
<p><strong className="hl">Special Qualities:</strong> A black-blooded creature has all the special qualities of the base creature, plus darkvision out to 120 feet, low-light vision, and the <Link to="/umr/amphibious">amphibious</Link> quality. A black-blooded creature has <Link to="/umr/immunity">immunity</Link> to ability drain, cold, energy drain, and poison.</p>
<blockquote>
<p><strong>Blood Rain (Su):</strong> Black-blooded creatures constantly leak and spray bursts of freezing black blood. Any creature within 15 feet of a black-blooded creature takes an amount of cold damage equal to the black-blooded creature's Constitution modifier.</p>
<p><strong>Tainted Life (Ex):</strong> The black blood is antithetical to all life and consumes all but the heartiest hosts. Any creature with the black-blooded template must make a DC 15 Fortitude save every day or take 1d4 points of <Link to="/rule/constitution_damage">Constitution damage</Link>.</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> Str +2, Dex +2, Con +4, Int -4, Cha +2.</p>
<p><strong className="hl">Skills:</strong> A black-blooded creature has a +8 racial bonus on any Swim check to perform some special action or avoid a hazard. It can always choose to take 10 on a Swim check, even if distracted or endangered.</p>
</>};
const _blighted_fey = {title: "Blighted Fey", jsx: <><div style={{clear:"both"}}></div><Header full><span>Blighted Fey</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 46</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>In certain wilderness regions, strange corruptions of nature fester and grow where the boundaries between this world and <Link to="/rule/the_abyss">the Abyss</Link> grow thin. Dangerous and evil fungal creatures rise to power in these blighted reaches, such as sinister <Link to="/monster/fungus_queen">fungus queens</Link> or legions of undead <Link to="/template/spore_zombie">spore zombies</Link>, but when <Link to="/type/fey">fey</Link> creatures become infused with this corruption and are themselves blighted, the resulting monstrosities are particularly vile.</p>
<p>The typical Abyssal blight manifests as a black and greasy fungal rot that sways tree branches and limbs where no wind propels them, and a mystic network of fell power extends an unnatural awareness between nearby blighted fey. <Link to="/monster/dryad">Dryads</Link> are often the most insidious of these corrupted fey; they lure humanoids to literally and spiritually dark places to beget more daughters from their dark embrace and further spread the disease. The dryads connect through a unified but tainted mystic field that transcends their ordinary limitations and permits them to treat all infected trees as their own bonded trees.</p>
<p>Only magic such as <Link to="/spell/miracle">miracle</Link>, <Link to="/spell/limited_wish">limited wish</Link>, or <Link to="/spell/wish">wish</Link> can sever the connection to the Abyss and cure a blighted fey, restoring the creature to its uncorrupted state if it fails to resist the transformation with a successful Will saving throw against the spell in question. Of course, once the blight takes hold, a fey creature is corrupted not only in body but in mind as well, and any attempts to cure such a fey creature are bound to be met with violence.</p>
<p>The process of creating a blighted fey can vary. In some cases, the transformation requires a new fey creature to be bound in blighted fungal tendrils and to languish within the corrupted region for 24 hours, but in other cases the blight might affect a creature almost instantaneously. The potential to resist such corruption with a successful saving throw varies, as does the DC to resist such an effect. A <em>wish, limited wish,</em> or <em>miracle</em> can transform a fey creature into a blighted fey in much the same way this magic can be used to rescue a blighted creature from its corruption.</p>
<p>Although the ooze creatures known as <Link to="/family/blight">blights</Link> share a name with the planar corruption that creates blighted fey, these two types of creatures do not get along. In fact, blights often see the advance of an Abyssal incursion into their natural territory as much of an affront as the encroachment of mortal civilization, and in such cases those who oppose either group can sometimes find allies in the enemies of their enemy. Blights are usually the more difficult of the two to reach an accord with, but one should always tread with caution when dealing with the blighted fey.</p>
<p>"Blighted fey" is an acquired template that can be added to any fey creature with 2 or more Hit Dice, referred to hereafter as the base creature. A blighted fey uses the base creature's statistics and abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Base creature's CR + 2.</p>
<p><strong className="hl">Alignment:</strong> Chaotic evil.</p>
<p><strong className="hl">Senses:</strong> A blighted fey gains darkvision to a range of 60 feet if the base creature did not already have it. If the base creature already has darkvision, the ability is extended by an additional 30 feet.</p>
<p><strong className="hl">AC:</strong> Natural armor improves by 2.</p>
<p><strong className="hl">Defensive Abilities:</strong> A blighted fey gains DR 10/cold iron and good; <Link to="/umr/immunity">immunity</Link> to disease, paralysis, poison, and polymorph; and <Link to="/umr/resistance">resistance</Link> to cold 10 and electricity 10. A blighted fey also gains spell resistance equal to 11 + its newly adjusted CR.</p>
<p>Additionally, a blighted fey gains the following ability.</p>
<blockquote>
<p><strong>Fungal Rejuvenation (Su):</strong> So long as it remains within 300 yards of any blighted plant of significant size (such as a tree) and remains standing on moist earth, the blighted fey gains <Link to="/umr/fast_healing">fast healing</Link> 5. The infected tree does not need to be specifically bonded to the blighted fey for this ability to function.</p>
</blockquote>
<p><strong className="hl">Special Attacks:</strong> A blighted fey gains the following special attacks. Unless otherwise noted, save DCs are equal to 10 + half the blighted fey's Hit Dice + the blighted fey's Constitution modifier.</p>
<blockquote>
<p><strong>Parasitic Bond (Su):</strong> Once per day with a successful thorn throw attack (see below), the blighted fey can transform the thorns into a single burrowing, wriggling maggot that infests and infuses the target with a short-term curse from within unless the target succeeds at a Fortitude save. This parasite creates an unholy link to the target, binding it to the blighted fey. This binding persists for 5 rounds, during which half of any hit point damage taken by the blighted fey is dealt to the linked target instead. The type of damage remains consistent with the damage dealt to the blighted fey. Only one parasitic bond can be maintained with one creature at a time. This bond is a curse and a disease effect.</p>
<p><strong>Thorn Throw (Ex):</strong> A blighted fey can shoot a fistful of needle-sharp thorns at a single target within 20 feet as a standard action. The thorn attack deals an amount of damage equal to a sting <Link to="/umr/natural_attack">natural attack</Link>, with damage based on the blighted fey's size (1d4 for a Medium fey), except the attack is resolved as a thrown ranged attack instead of a melee attack. Thorn throw is always a primary attack.</p>
</blockquote>
<p><strong className="hl">Special Qualities:</strong> A blighted fey gains the following special qualities.</p>
<blockquote>
<p><strong>Blighted Unity (Su):</strong> Blighted fey within 100 feet of one other can communicate through a shared fungal mind. This does not permit blighted fey to see and hear through each other's senses, but they can share specific situational information and tactics through <Link to="/umr/telepathy">telepathy</Link>. If one blighted fey within range is aware of danger, they are all aware of danger and cannot be surprised.</p>
<p><strong>Daughter of the Blight (Su):</strong> Fey creatures who normally have close ties to a specific plant gain this specific quality. For example, blighted fey dryads are no longer dependent upon a specific tree. A dryad's tree dependent special ability is modified (but not replaced) so blighted fey dryads are required only to remain within 300 yards of any blighted tree. This ability applies only to dryads and other fey who bond with plants in a similar manner.</p>
<p><strong>Tainted Blood (Ex):</strong> A blighted fey's blood and flesh are rife with disease. Any creature that deals damage with a bite attack against a blighted fey, <Link to="/umr/swallow_whole">swallows one whole</Link>, or otherwise ingests part of one must succeed at a Fortitude save (as per Special Attacks above) or take 1 point of <Link to="/rule/strength_damage">Strength damage</Link> and 1 point of Dexterity damage. One minute later, the affected creature must succeed at a second save at the same DC or be <Link to="/misc/nauseated">nauseated</Link> for 1 minute and take 1d6 points of Strength damage and 1d6 points of Dexterity damage. This is a disease effect.</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> Str +4, Con +4, Cha +2.</p>
<p><strong className="hl">Feats:</strong> Blighted fey gain <Link to="/feat/toughness">Toughness</Link> as a bonus feat.</p>
<p><strong className="hl">Skills:</strong> A blighted fey gains a +2 racial bonus on <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/perception">Perception</Link>, and <Link to="/skill/stealth">Stealth</Link> checks.</p>
</>};
const _boreal_creature = {title: "Boreal Creature", jsx: <><div style={{clear:"both"}}></div><Header full><span>Boreal Creature</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/pathfinder_67_the_snows_of_summer">Pathfinder #67: The Snows of Summer pg. 72</Link><br/><strong>Acquired/Inherited Template</strong> Inherited<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>In realms where the icy hand of winter seldom (or never) releases its frigid grasp, some particularly hardy creatures have evolved to better survive in these harsh environments, becoming stronger and much more dangerous. These boreal creatures mostly resemble members of their kind that dwell in more temperate climates, but their fur and skin are much paler, and it is not uncommon for parts of these creatures to be cloaked in frost.</p>
<h3 id="template-boreal_creature-creating-a-boreal-creature">Creating a Boreal Creature</h3>
<p>"Boreal" is an inherited template that can be added to any Huge or smaller corporeal creature. This template cannot be applied to a creature with the <Link to="/subtype/fire">fire</Link> subtype.</p>
<p><strong className="hl">CR:</strong> Same as the base creature +1.</p>
<p><strong className="hl">Type:</strong> The creature gains the <Link to="/subtype/cold">cold</Link> subtype. If this subtype is applied to a creature with the animal or vermin type, the creature's type changes to <Link to="/type/magical_beast">magical beast</Link>. Do not recalculate its Hit Dice, base attack bonus, saves, or skill points.</p>
<p><strong className="hl">Attacks:</strong> A boreal creature's natural attacks deal an additional 1d6 points of cold damage.</p>
<p><strong className="hl">Abilities:</strong> Str +2, Con +2.</p>
<p><strong className="hl">Skills:</strong> The creature receives a +4 bonus on Stealth and Survival checks in snow. An aquatic boreal creature receives a +4 racial bonus on Stealth and Survival checks at all times in frigid waters (its natural habit), instead of in snow.</p>
<p><strong className="hl">Environment:</strong> The creature's natural environment changes to a cold climate.</p>
<p><strong className="hl">Special Qualities:</strong> A boreal creature gains the following special quality.</p>
<blockquote>
<p><strong>Trackless Step (Ex):</strong> A boreal creature does not leave a trail in snow and cannot be tracked. It can choose to leave a trail, if it so desires. This special quality does not apply to aquatic boreal creatures.</p>
</blockquote>
</>};
const _broken_soul = {title: "Broken Soul", jsx: <><div style={{clear:"both"}}></div><Header full><span>Broken Soul</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 24</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>A broken soul is torment and pain made manifest. Tortured to the extremes of both physical and mental endurance, and then taken beyond those barriers, a broken soul gains extraordinary reserves of fortitude and resilience as well as the ability to inflict a measure of its own terrible suffering on others.</p>
<p>Each broken soul has a unique appearance, the torture it has endured plainly visible on its body. Its skin is a mass of scar tissue, marred with bruises that do not fade and scored with countless scars. In some cases, a broken soul's flesh has been flayed away, revealing the musculature and bone underneath. Weeping sores and open cuts cover a broken soul's body, wounds that never fully heal. Its limbs are often twisted, the result of broken bones that were never set properly, and it might be missing fingers, toes, ears, or other appendages. A broken soul's existence is one of unending suffering, and the constant pain often drives the creature irrevocably mad. In their insanity, these unfortunates hate all other creatures and seek to inflict their wounds and their agony on all they encounter.</p>
<p>The creation of a broken soul can happen in a number of ways. Some broken souls arise spontaneously, the result of horrific treatment at the hands of cruel abusers. With no way to escape their torment, these creatures embrace the pain and anguish and transcend them, making them a part of their very being. In so doing, they become something both more and less than they were. Other broken souls are purposefully created out of helpless prisoners by sadistic torturers through a harrowing gauntlet of mental and physical torments. By breaking a creature's mind and body, these torturers hope to create guardians or servants whose loyalty is ensured by the constant pain they must endure. Even more harrowing, some broken souls take it upon themselves to create more of their kind, fashioning gruesome works of living, mutilated art in an effort to share their suffering. These "artists" often turn on their own torturers first, perfecting their skills on those who created them before turning their attention to any other unfortunate creatures they can find.</p>
<p>"Broken soul" is an acquired template that can be added to any living creature with an Intelligence score of 3 or higher (referred to hereafter as the base creature). A broken soul uses all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Same as the base creature +2.</p>
<p><strong className="hl">Alignment:</strong> Usually chaotic evil.</p>
<p><strong className="hl">AC:</strong> A mass of scar tissue covers every inch of the broken soul's body, increasing the base creature's natural armor bonus by +4.</p>
<p><strong className="hl">Defensive Abilities:</strong> Inured to pain and abuse, a broken soul gains damage reduction 5/- and acid, cold, electricity, fire, and sonic resistance 5.</p>
<p><strong className="hl">Speed:</strong> Because a broken soul is in constant agony, reduce each of its speeds by 10 feet (minimum speed of 5 feet).</p>
<p><strong className="hl">Special Attacks:</strong> A broken soul gains the following special attacks. Save DCs are equal to 10 + 1/2 the broken soul's Hit Dice + the broken soul's Charisma modifier unless otherwise noted.</p>
<blockquote>
<p><strong>Agonized Wail (Su):</strong> As a standard action, a broken soul can emit an agonized wail that inspires terror in those who hear it. All creatures within 120 feet must succeed at a Will save or become <Link to="/misc/shaken">shaken</Link> for as long as they remain within 120 feet of the broken soul. A successful save renders a creature immune to that broken soul's agonized wail for 24 hours. This is a sonic mind-affecting fear effect.</p>
</blockquote>
<p><strong>Baleful Gaze (Su):</strong> Any creature within 60 feet of a broken soul must succeed at a Fortitude save or take 1d4 points of <Link to="/rule/charisma_drain">Strength, Constitution, and Charisma drain</Link>. Whatever the result of the saving throw, the creature cannot be affected by the same broken soul's baleful gaze again for 1 minute.</p>
<p><strong>Torturous Touch (Su):</strong> A broken soul can make a touch attack to cause hideous, painful wounds to rip open in the target's body. This touch deals 2d6 points of slashing damage and 1d6 points of Dexterity damage, and causes the touched creature to fall <Link to="/rule/prone">prone</Link> in a fit of convulsions and be <Link to="/misc/dazed">dazed</Link> for 1d4 rounds. A successful Fortitude save negates the Dexterity damage and the convulsive fit.</p>
<p><strong className="hl">Abilities:</strong> Con +6, Wis -2 (minimum 1). In addition, a broken soul gains a +2 bonus to one ability score of its choice and a -6 penalty to another ability score of its choice (minimum 1), which can apply to the ability scores modified by this template.</p>
<p><strong className="hl">Feats:</strong> A broken soul gains <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, and <Link to="/feat/toughness">Toughness</Link> as bonus feats.</p>
<p><strong className="hl">Skills:</strong> A broken soul gains a +8 racial bonus on <Link to="/skill/intimidate">Intimidate</Link> checks, but takes a -10 racial penalty on <Link to="/rule/concentration">concentration</Link> checks because of its constant pain.</p>
<p><strong className="hl">Organization:</strong> Solitary.</p>
</>};
const _calcified = {title: "Calcified", jsx: <><div style={{clear:"both"}}></div><Header full><span>Calcified</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/plunder_and_peril">Plunder and Peril pg. 61</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>A creature with the calcified template is preserved by the toxic fluids pumped into its body by an <Link to="/monster/incutilis_lord">incutilis lord</Link>. Though the creature's identity is lost and its life soon fades, the incutilis lord retains use of the creature's feats, physical skills, extraordinary abilities, spell-like abilities, and supernatural abilities. This template can be applied to any living corporeal creature.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Senses</strong> darkvision 60 ft.; <strong>AC</strong> increase natural armor by 4; <strong>Immune</strong> mind-affecting effects; <strong>Ability Scores</strong> +4 Str and Con. A calcified creature has no Intelligence score, but can use its physical skills as directed by the incutilis lord that created it and does not lose any skill ranks. <strong>Skills:</strong> +8 racial bonus on <Link to="/skill/stealth">Stealth</Link> checks in dim or no light.</p>
</>};
const _celestial = {title: "Celestial", jsx: <><div style={{clear:"both"}}></div><Header full><span>Celestial</span><span>CR +0 or +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 294</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> Yes</p>
<p>Celestial creatures dwell in the higher planes, but can be summoned using spells such as <Link to="/spell/summon_monster">summon monster</Link> and <Link to="/spell/planar_ally">planar ally</Link>. A celestial creature's CR increases by +1 only if the base creature has 5 or more HD. A celestial creature's quick and rebuild rules are the same.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Senses</strong> gains darkvision 60 ft.; <strong>Defensive Abilities</strong> gains DR and energy resistance as noted on the table; <strong>SR</strong> gains SR equal to new CR +5; <strong>Special Attacks</strong> smite evil 1/day as a swift action (adds Cha bonus to attack rolls and damage bonus equal to HD against evil foes; smite persists until target is dead or the celestial creature rests).</p>
<h3 id="template-celestial-celestial-creature-defenses">Celestial Creature Defenses</h3>
<ScrollContainer id="template-celestial--table-0"><table>
<thead>
<tr>
<th>Hit Dice</th>
<th>Resist Acid, Cold, and Electricity</th>
<th>DR</th>
</tr>
</thead>
<tbody><tr>
<td>1-4</td>
<td>5</td>
<td>-</td>
</tr>
<tr>
<td>5-10</td>
<td>10</td>
<td>5/evil</td>
</tr>
<tr>
<td>11+</td>
<td>15</td>
<td>10/evil</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _child_of_yog_sothoth = {title: "Child of Yog-Sothoth", jsx: <><div style={{clear:"both"}}></div><Header full><span>Child of Yog-Sothoth</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/pathfinder_113_what_grows_within">Pathfinder #113: What Grows Within pg. 82</Link><br/><strong>Acquired/Inherited Template</strong> Inherited<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Creatures born of mortal flesh infused with the essence of the outer god <Link to="/faith/yog_sothoth">Yog-Sothoth</Link>, these deviant children are often tasked with preparing the world for further incursions from other dimensions or agents of the Elder Mythos. Traditionally, the process of creating a child of Yog-Sothoth involves a blasphemous ritual that uses a mortal creature (typically a human) as an incubator. For the purpose of this ritual, gender is irrelevant. Giving birth to a child of Yog-Sothoth is always fatal. In most cases, the ritual results in the birth of twins - one a child of Yog-Sothoth, which can pass for a time as a member of the race of the creature in which it incubated, and one that cannot. Those twins that inherit a monstrous appearance take more after the Outer God itself in form, and are known as the <Link to="/monster/spawn_of_yog_sothoth">spawn of Yog-Sothoth</Link>.</p>
<p>"Child of Yog-Sothoth" is an inherited template that can be added to any living corporeal creature (referred to hereafter as the base creature), but typically, humanoids and animals are those chosen by the cult of Yog-Sothoth to carry the Outer God's gifts. A child of Yog-Sothoth retains all of the base creature's statistics and special abilities, except as listed below.</p>
<p><strong className="hl">CR:</strong> Base creature's CR +1.</p>
<p><strong className="hl">Alignment:</strong> Any chaotic. The vast majority of the children of Yog-Sothoth are chaotic evil. While a good-aligned child of Yog-Sothoth is theoretically possible, such a creature would be significantly unusual in that it would need to have been separated at an early age from the cult that caused its creation, and allowed to mature with the strong guidance of a good-aligned mentor or parental figure.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/aberration">aberration</Link> (<Link to="/subtype/augmented">augmented</Link>). Do not recalculate its base attack bonus, saves, or skill ranks.</p>
<p><strong className="hl">Senses:</strong> The creature gains <Link to="/umr/all_around_vision">all-around vision</Link> and low-light vision.</p>
<p><strong className="hl">AC:</strong> A child of Yog-Sothoth has either a natural armor bonus for every 2 Hit Dice it has or the base creature's natural armor bonus, whichever of the two leads to a higher result.</p>
<p><strong className="hl">Hit Dice:</strong> Change the creature's racial Hit Dice to d8s. All Hit Dice derived from class levels remain unchanged.</p>
<p><strong className="hl">Defensive Abilities:</strong> A child of Yog-Sothoth gains cold resistance 10 and fire resistance 10. It has spell resistance equal to its CR 11, and has a racial bonus on saving throws against mind-affecting effects. A child of Yog-Sothoth is immune to disease and poison.</p>
<p><strong className="hl">Attacks:</strong> While the abdominal tentacles of a child of Yog-Sothoth are merely unsightly sensory organs, the sucker-shaped mouth at the tip of its tail is a <Link to="/umr/primary_attack">primary attack</Link> that the child can use as long as it is not concealing its features (see Special Qualities below). A hit with the tail deals bite damage as normal for a creature of the child's size (1d6 points of damage for a Medium child).</p>
<p><strong className="hl">Special Attacks:</strong> A child of Yog-Sothoth gains the following special attacks.</p>
<blockquote>
<p><strong>Blood Drain (Ex):</strong> A child of Yog-Sothoth can drain blood from a grappled or helpless foe via its tail mouth, dealing 1d2 points of <Link to="/rule/constitution_damage">Constitution damage</Link> per round it does so.</p>
<p><strong>Spell-Like Abilities:</strong> A child of Yog-Sothoth gains the following spell-like abilities (the save DCs of these abilities are calculated using the child's Intelligence score as a result of its magic savant special quality, and its caster level equals its Hit Dice): 3/day <Link to="/spell/comprehend_languages">comprehend languages</Link>, <Link to="/spell/detect_thoughts">detect thoughts</Link>, <Link to="/spell/hypnotism">hypnotism</Link>; 1/day <Link to="/spell/invisibility">invisibility</Link>; 1/week <Link to="/spell/contact_entity_i">contact entity I</Link>. A child of Yog-Sothoth with 5 Hit Dice adds <Link to="/spell/contact_entity_ii">contact entity II</Link> to its 1/week spell-like abilities. A child of Yog-Sothoth with 9 Hit Dice adds <Link to="/spell/contact_entity_iii">contact entity III</Link> to its 1/week spell-like abilities. A child of Yog-Sothoth with 13 Hit Dice adds <Link to="/spell/contact_entity_iv">contact entity IV</Link> to its 1/week spell-like abilities. A child of Yog-Sothoth with 17 Hit Dice adds <Link to="/spell/gate">gate</Link> to its 1/week spell-like abilities.</p>
<p><strong>Stench (Su):</strong> A child of Yog-Sothoth always exudes an unpleasant scent. As a swift action, the child can intensify this scent, causing it to become truly nauseating. All living creatures within 30 feet must succeed at a Fortitude saving throw (DC = 10 1/2 the child's HD the child's Constitution modifier) or become <Link to="/misc/nauseated">nauseated</Link> for 1 round. The child can exude this nauseating stench for a number of rounds per day equal to its total Hit Dice, but these rounds need not be consecutive. Each round the child wishes to maintain the stench, it must use a swift action to do so. The stench is a poison effect.</p>
</blockquote>
<p><strong className="hl">Special Qualities:</strong> A child of Yog-Sothoth gains the following special qualities.</p>
<blockquote>
<p><strong>Conceal Features:</strong> A child of Yog-Sothoth gains a racial bonus on checks to <Link to="/skill/disguise">disguise</Link> itself as a typical member of the base creature's species (although it always appears as a particularly sizable member of that race) if it takes the time to don clothing or armor to hide its monstrous qualities. When it does so, it loses access to all-around vision and can't make its tail attack.</p>
<p><strong>Magic Savant:</strong> A child of Yog-Sothoth's intrinsic understanding of magic allows it to modify the <Link to="/rule/concentration">concentration</Link> checks and save DCs of its racial spell-like abilities (whether from the base creature or from this template) that are normally affected by Charisma to be modified instead by the child's Intelligence modifier. This doesn't affect actual spellcasting ability, such as that granted by sorcerer levels.</p>
</blockquote>
<p><strong className="hl">Weaknesses:</strong> A child of Yog-Sothoth gains the following weakness.</p>
<blockquote>
<p><strong>Loathed:</strong> Children of Yog-Sothoth are loathed by <Link to="/type/animal">animals</Link> and <Link to="/family/psychopomp">psychopomps</Link>. Both types of creatures gain a bonus on <Link to="/skill/perception">Perception</Link> checks and <Link to="/skill/sense_motive">Sense Motive</Link> checks against a child of Yog-Sothoth, and receive a morale bonus on attack rolls and weapon damage rolls against such targets.</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> Str, Con, Int, Cha -2.</p>
<p><strong className="hl">Feats:</strong> A child of Yog-Sothoth gains <Link to="/feat/toughness">Toughness</Link> as a bonus feat.</p>
<p><strong className="hl">Skills:</strong> A child of Yog-Sothoth gains a racial bonus on Disguise checks to appear as a typical specimen of the base creature when it is using its conceal features ability. All <Link to="/skill/knowledge">Knowledge</Link> skills and <Link to="/skill/spellcraft">Spellcraft</Link> are class skills for a child of Yog-Sothoth; a child of Yog-Sothoth gains a racial bonus on <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> and Spellcraft checks.</p>
</>};
const _chthonic = {title: "Chthonic", jsx: <><div style={{clear:"both"}}></div><Header full><span>Chthonic</span><span>CR +0 or +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook pg. 19</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> See Text</p>
<p>Applying this template to a summoned creature requires the feat <Link to="/feat/versatile_summon_monster">Versatile Summon Monster</Link> or <Link to="/feat/versatile_summon_natures_ally">Versatile Summon Nature's Ally</Link>.</p>
<p>Chthonic creatures are native denizens of the Elemental <Link to="/rule/plane_of_earth">Plane of Earth</Link>. They produce acid, which they use to help them burrow quickly through the dense rock of their homes. This template can be applied only to a non-outsider that has none of the following subtypes: air, cold, earth, fire, or water. A chthonic creature's CR increases by 1 only if the base creature has 5 or more HD.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Type</strong> The creature gains the <Link to="/subtype/earth">earth</Link> subtype; <strong>Senses</strong> gains darkvision 60 ft.; <strong>Defensive Abilities</strong> gains DR and resistance to acid as noted on the table below; <strong>Speed</strong> gains a burrow speed equal to half its highest speed (its tunnels always collapse behind it, and never leave behind a usable passage); <strong>Attacks</strong> gains bonus acid damage as noted on the table below on attacks with natural weapons.</p>
<ScrollContainer id="template-chthonic--table-0"><table>
<thead>
<tr>
<th>Hit Dice</th>
<th>DR</th>
<th>Resist Acid</th>
<th>Acid Damage</th>
</tr>
</thead>
<tbody><tr>
<td>1-4</td>
<td>-</td>
<td>10</td>
<td>1 point</td>
</tr>
<tr>
<td>5-10</td>
<td>3/-</td>
<td>15</td>
<td>1d6</td>
</tr>
<tr>
<td>11+</td>
<td>5/-</td>
<td>20</td>
<td>2d6</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _cleric = {title: "Cleric", jsx: <><div style={{clear:"both"}}></div><Header full><span>Cleric</span><span>CR +1, +2, or +3</span></Header>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 246</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>As a conduit of divine power, a <Link to="/class/cleric">cleric</Link> creature is often viewed with great respect by its community. A cleric creature's CR increases by 2 if the creature has 7 or more HD, and it increases by 3 if the creature has 13 or more HD. A cleric creature must worship a deity (which must be determined when the template is added) and its alignment must be within one step of that deity's.</p>
<p><strong className="hl">Quick Rules:</strong> +2 on all rolls based on Wis; can <Link to="/ability/channel_energy">channel energy</Link> a number of times per day equal to 3 + its Charisma modifier (positive if good, negative if evil, choose if neutral; using its HD - 2 as its cleric level to determine the effect and DC, minimum 1); can cast a small number of cleric spells (see below) using its HD as its CL.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Special Attacks</strong> channel energy (can be used a number of times per day equal to 3 + is Cha modifier - positive if good, negative if evil, choose if neutral - using its HD - 2 as its cleric level to determine effect and DC, minimum 1); <strong>Cleric Spells</strong> can cast a small number of cleric spells (see below) using its HD as its CL; <strong>Ability Scores</strong> +4 Wisdom.</p>
<h3 id="template-cleric-cleric-druid-and-wizard-spells-slots">Cleric, Druid, and Wizard Spells Slots</h3>
<ScrollContainer id="template-cleric--table-0"><table>
<thead>
<tr>
<th>HD</th>
<th>0</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
<th>7</th>
<th>8</th>
<th>9</th>
</tr>
</thead>
<tbody><tr>
<td>1-3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4-6</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7-9</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10-12</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13-15</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>16-18</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>19-21</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>22-24</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>25+</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _colour_blighted = {title: "Colour-Blighted", jsx: <><div style={{clear:"both"}}></div><Header full><span>Colour-Blighted</span><span>CR +0</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 39</Link>, <Link to="/source/pathfinder_46_wake_of_the_watcher">Pathfinder #46: Wake of the Watcher pg. 77</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>A creature with the colour-blighted simple template appears hideously deformed and glows with the same unnamable color as the creature that blighted it. A colour-blighted creature's quick and rebuild rules are the same.</p>
<p><strong className="hl">Rebuild Rules:</strong> A colour-blighted creature's ability scores are already <Link to="/rule/ab_drain">drained</Link> as a result of being fed upon by a <Link to="/monster/colour_out_of_space">colour out of space</Link>, but once a creature gains this template, it becomes immune to further feed attacks from colours out of space until it loses the colour-blighted simple template. A Charisma score drained to 0 by a colour out of space's feed attack is raised to 1; otherwise, its ability scores are not altered by this template. In order to remove this simple template from a creature, one only has to restore all of its drained ability scores to normal. As long as a creature suffers the colour-blighted template, it becomes aggressive toward creatures that do not exude the colors of a colour out of space, and gains a +1 bonus on attack rolls and weapon damage rolls against such targets. Every 24 hours, a creature suffering from this simple template must succeed at a DC 12 Fortitude save or crumble into fine, white ash - such a doom means instant death and, for many color-blighted creatures, the only chance at escape from a life filled with pain.</p>
</>};
const _commando_construct = {title: "Commando Construct", jsx: <><div style={{clear:"both"}}></div><Header full><span>Commando Construct</span><span>CR +1 or +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/construct_handbook">Construct Handbook pg. 36</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Commando constructs are elite fighting machines that often operate alone or in small squads. Although they are skilled combatants, these <Link to="/type/construct">constructs</Link> can handle a variety of clandestine activities, including assassination, infiltration, kidnapping, and sabotage. They are most often found wandering the plains of Numeria, or under the service of a local warlord.</p>
<p>"Commando construct" is an acquired template that can be added to any construct, referred to hereafter as the base creature.</p>
<p><strong className="hl">CR:</strong> If the base creature has 9 or fewer HD, base creature's CR + 1; if base creature has 10 or more HD, base creature's CR + 2.</p>
<p><strong className="hl">Type:</strong> A commando construct gains the <Link to="/subtype/augmented">augmented</Link> subtype. It uses all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">AC:</strong> A commando construct's natural armor bonus increases by 4.</p>
<p><strong className="hl">Hit Dice:</strong> Change the commando construct's Hit Dice to d12s. Additionally, a commando construct gains 1-1/2 times the normal bonus hit points for a construct of its size.</p>
<p><strong className="hl">Special Attacks:</strong> A commando construct gains special attacks chosen from the list below. A commando construct with 8 HD or fewer selects one option, a commando construct with 9-12 HD selects two options, and a commando construct with 13 HD or more selects three options. Each option can be selected only once.</p>
<blockquote>
<p><strong>Brutal Attacks (Ex):</strong> When a commando construct makes two successful melee attacks against the same target in 1 round, its attacks either rend flesh or crush bones. This deals an additional amount of damage equal to the damage dealt by its highest-damage successful melee attack plus twice the commando construct's Strength modifier.</p>
<p><strong>Energy Attacks (Su):</strong> Pick one energy type: acid, cold, electricity, or fire. Each of the commando construct's melee attacks deals 1d6 points of energy damage of the chosen type on a hit.</p>
<p><strong>Extra Attack (Ex):</strong> When using the full-attack action, a commando construct can make one extra attack per round at its highest base attack bonus.</p>
<p><strong>Knockdown Strike (Ex):</strong> When a commando construct makes a successful melee attack, it can forgo dealing its normal damage to its target and instead attempt a free combat maneuver check. If the construct is successful, the target takes damage equal to the commando construct's Strength modifier and is knocked <Link to="/rule/prone">prone</Link>. This is treated as a <Link to="/rule/trip">trip</Link> attack for the purpose of creatures that can't be tripped or that have bonuses or weaknesses against trip combat maneuvers. On a failed combat maneuver check, the commando construct is not tripped in return. This ability works only on creatures of a size equal to or smaller than the commando construct.</p>
<p><strong>Knockout Strike (Ex):</strong> As a full-attack action, a commando construct can unleash a devastating strike with one of its melee attacks that can instantly knock a target unconscious. If a commando construct hits and the target takes damage from the attack, the target must succeed at a Fortitude save (DC = 10 + half the commando construct's HD + the commando construct's Strength modifier) or fall unconscious for 1d6 rounds. Each round on its turn, the unconscious target can attempt a new saving throw to regain consciousness. Creatures immune to critical hits or nonlethal damage are immune to this ability.</p>
<p><strong>Precision (Ex):</strong> A commando construct rolls twice to confirm critical hits, taking the more favorable result.</p>
<p><strong>Reach (Ex):</strong> The reach of all of a commando construct's melee attacks increases by 5 feet.</p>
<p><strong>Retaliatory Strike (Ex):</strong> Whenever an enemy makes a successful melee attack against a commando construct or an adjacent ally, the enemy provokes an attack of opportunity from the commando construct.</p>
<p><strong>Sneak Attack (Ex):</strong> As per the rogue class feature. The number of additional <Link to="/ability/sneak_attack">sneak attack</Link> dice is based on the commando creature's Hit Dice.</p>
<p><strong>Sundering Blows (Ex):</strong> Whenever a commando construct confirms a critical hit with a melee attack, it deals an amount of damage to the target's armor or shield equal to the melee damage as if it had also succeeded at a <Link to="/rule/sunder">sunder</Link> combat maneuver.</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> Str +4, Dex +4.</p>
<p><strong className="hl">Feats:</strong> A commando construct gains one bonus <Link to="/main/combat_feat">combat feat</Link>, plus an additional combat feat for every 4 HD (to a maximum of 10 feats from this ability).</p>
<p><strong className="hl">Special Qualities:</strong> A commando construct gains following special abilities.</p>
<blockquote>
<p><strong>Energized Alacrity (Su):</strong> Once per minute as a swift action, a commando construct can draw power from special energizing transmitters attached to its body. When doing so, the commando construct gains a +30-foot bonus to all of its speeds for 1 round. Additionally, when making a full attack during this round, the commando construct can move up to its speed either before or after it attacks. This movement provokes attacks of opportunity as normal.</p>
<p><strong>Tactical Awareness (Ex):</strong> A commando construct gains a +2 bonus on initiative checks. This bonus increases by 1 for every 5 HD the commando construct has (to a maximum of +6 at 20 HD). Additionally, a commando construct is never considered an unaware combatant and is always able to act in the surprise round. A commando construct is still <Link to="/rule/flat_footed">flat-footed</Link> in the surprise round until it acts.</p>
</blockquote>
<h3 id="template-commando_construct-construction">Construction</h3>
<p>A commando construct's materials cost an additional 10,000 gp above the base creature's cost. The <Link to="/skill/craft">Craft</Link> check required to make the body has a DC 4 higher than normal for the base construct's kind. The construct is animated using a special laboratory or workroom that costs 1,000 gp to establish. If the creator is personally constructing the creature's body, the crafting and the ritual can be performed simultaneously. The creator must have a minimum caster level 1 higher than the base creature's minimum required caster level. In addition, the following spells must be cast during the ritual: <Link to="/spell/bulls_strength">bull's strength</Link>, <Link to="/spell/greater_heroism">greater heroism</Link>, and <Link to="/spell/limited_wish">limited wish</Link>.</p>
</>};
const _counterpoised = {title: "Counterpoised", jsx: <><div style={{clear:"both"}}></div><Header full><span>Counterpoised</span><span>CR +0 to +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance pg. 33</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> See Text</p>
<p>Applying this template to a summoned creature requires the feat <Link to="/feat/summon_neutral_monster">Summon Neutral Monster</Link>.</p>
<p>Counterpoised creatures dwell in the Outer Planes where balance between elements or ideologies is paramount, but they can be summoned using spells such as <Link to="/spell/summon_monster">summon monster</Link> and <Link to="/spell/planar_ally">planar ally</Link>. A counterpoised creature's CR increases by 1 only if the base creature has 5 or more Hit Dice. A counterpoised creature's quick and rebuild rules are the same.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Senses</strong> gains darkvision 60 ft.; <strong>Defensive Abilities</strong> gains DR and energy resistance as noted on the table; <strong>SR</strong> gains SR equal to new CR +5; <strong>Special Attacks</strong> smite bias 1/day as a swift action (adds Cha bonus to attack rolls and damage bonus equal to HD against a foe that is chaotic evil, chaotic good, lawful evil, or lawful good; smite persists until the target is dead or the counterpoised creature rests).</p>
<ScrollContainer id="template-counterpoised--table-0"><table>
<thead>
<tr>
<th>Hit Dice</th>
<th>Resist Cold, Electricity, and Fire</th>
<th>DR</th>
</tr>
</thead>
<tbody><tr>
<td>1-4</td>
<td>5</td>
<td>-</td>
</tr>
<tr>
<td>5-10</td>
<td>10</td>
<td>5/adamantine</td>
</tr>
<tr>
<td>11+</td>
<td>15</td>
<td>10/adamantine</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _cursed_lord = {title: "Cursed Lord", jsx: <><div style={{clear:"both"}}></div><Header full><span>Cursed Lord</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 235</Link><br/><strong>Acquired/Inherited Template</strong> Both<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Cursed lords gain dominion over their lands through evil deeds that result in powerful curses that trap them within their realms. They have all the abilities of <Link to="/template/dread_lord">dread lords</Link>, with the following additions and adjustments.</p>
<p><strong className="hl">CR:</strong> Base creature's CR + 2.</p>
<p><strong className="hl">Defensive Abilities:</strong> Cursed lords gain the following.</p>
<blockquote>
<p><strong>Immortal Curse (Su):</strong> Even death can't free a cursed lord from its domain, and cursed lords that are killed return to life 24 hours later. When a cursed lord is created, a specific condition is determined by the source of the cursed lord's curse, which must be performed in order for the cursed lord to be permanently slain. The exact means vary with each cursed lord, are difficult but never impossible, and should be created specifically for each cursed lord by the GM. Examples include disinterring the corpse of the lord's slain lover and reburying it outside the domain, stealing vast treasures from the lord's castle and returning them to the poor people they were stolen from, or destroying a dam to set free a river the cursed lord has prevented from flowing through its lands.</p>
</blockquote>
<p><strong className="hl">Weaknesses:</strong> A cursed lord gains the following weakness.</p>
<blockquote>
<p><strong>Trapped (Ex):</strong> A cursed lord is unable to leave its domain by any means, and effects such as <Link to="/spell/plane_shift">plane shift</Link>, <Link to="/spell/shadow_walk">shadow walk</Link>, <Link to="/spell/teleport">teleport</Link>, and even <Link to="/spell/wish">wish</Link> fail. If its domain is bordered by <Link to="/rule/cursed_domains">dread fog</Link>, the mists inevitably guide the cursed lord back to its domain after 1 hour.</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> Wisdom -4.</p>
</>};
const _cytillesh_zombie = {title: "Cytillesh Zombie", jsx: <><div style={{clear:"both"}}></div><Header full><span>Cytillesh Zombie</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/no_response_from_deepmar">No Response from Deepmar pg. 21</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>The cytillesh zombies presented here use a hybrid monster template that is easy to duplicate. The base creature gains the <Link to="/template/zombie">fast zombie template</Link>. It also gains +4 <Link to="/umr/channel_resistance">channel resistance</Link> and Cytillesh Symbiosis (see below). The cytillesh zombie template increases a zombie's challenge rating by 1. In the context of this adventure, this template can only be added to a creature suffering the effects of exposure to cytillesh fungus that imbibes concentrated cytillesh with <Link to="/eq-material/caphorite">caphorite</Link> and <Link to="/eq-material/lazurite">lazurite</Link> granules.</p>
<blockquote>
<p><strong>Cytillesh Symbiosis (Su)</strong> The cytillesh fungus infesting the host creature's body acts as the dead flesh's animating force. It grants the creature a +4 enhancement bonus to Strength and Dexterity and a poisonous touch. The slam of a cytillesh zombie releases spores that subject the creature to a mild dose of cytillesh poison. The creature must succeed at a DC 18 Fortitude save or become <Link to="/misc/dazed">dazed</Link> for 1d3 rounds as it suffers memory loss of the previous moments. Multiple poisoning effects do not stack, but rather only extend the duration.</p>
</blockquote>
</>};
const _dark = {title: "Dark", jsx: <><div style={{clear:"both"}}></div><Header full><span>Dark</span><span>CR +0 or +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook pg. 19</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> See Text</p>
<p>Applying this template to a summoned creature requires the feat <Link to="/feat/versatile_summon_monster">Versatile Summon Monster</Link>.</p>
<p>Dark creatures are native denizens of the <Link to="/rule/plane_of_shadow">Plane of Shadow</Link>, and generally have a dark gray or deep purple coloration. This template can be applied only to a non-outsider that has none of the following subtypes: air, cold, earth, fire, or water. A dark creature's CR increases by 1 only if the base creature has 5 or more HD.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Senses</strong> gain darkvision 60 ft. and low-light vision; <strong>Defensive Abilities</strong> gains DR and resistance to cold and electricity based on its Hit Dice, as noted on the table below; <strong>SR</strong> gains SR equal to its new CR + 5.</p>
<ScrollContainer id="template-dark--table-0"><table>
<thead>
<tr>
<th>Hit Dice</th>
<th>DR</th>
<th>Resist Cold and Electricity</th>
</tr>
</thead>
<tbody><tr>
<td>1-4</td>
<td>-</td>
<td>5</td>
</tr>
<tr>
<td>5-10</td>
<td>5/Magic</td>
<td>10</td>
</tr>
<tr>
<td>11+</td>
<td>10/magic</td>
<td>15</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _deep_creature = {title: "Deep Creature", jsx: <><div style={{clear:"both"}}></div><Header full><span>Deep Creature</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 248</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>Deep creatures have been twisted by the <Link to="/monster/deep_one">deep ones</Link>, whether through interbreeding or foul rituals.</p>
<p><strong className="hl">Quick Rules:</strong> +8 on <Link to="/skill/swim">Swim</Link> checks and can always take 10 on Swim checks; swim speed equal to base land speed; +1 to AC; +1 on rolls based on Con or Wis; +1 hp/HD; two <Link to="/umr/claw_attack">claw attacks</Link> that each deal 1d4 points of damage (for Medium creatures); <Link to="/umr/amphibious">amphibious</Link>.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Type</strong> gain the <Link to="/subtype/aquatic">aquatic</Link> and <Link to="/subtype/deep_one">deep one</Link> subtypes; <strong>AC</strong> natural armor increases by 1; <strong>Speed</strong> swim speed equal to base land speed; <strong>Melee</strong> two claw attacks that each deal 1d4 points of damage (for Medium creatures); <strong>Special Qualities</strong> amphibious; <strong>Ability Scores</strong> +2 Str, +2 Con, +2 Wis.</p>
</>};
const _degenerate = {title: "Degenerate", jsx: <><div style={{clear:"both"}}></div><Header full><span>Degenerate</span><span>CR -1</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 288</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>Degenerate creatures are weaker than their ordinary cousins.</p>
<p><strong className="hl">Quick Rules:</strong> -2 on all rolls (including damage rolls) and to special ability DCs; -2 to AC and CMD; -2 hp/HD.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Ability Scores</strong> -4 to all ability scores (minimum 1).</p>
</>};
const _demonic_vermin = {title: "Demonic Vermin", jsx: <><div style={{clear:"both"}}></div><Header full><span>Demonic Vermin</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/the_worldwound">The Worldwound pg. 53</Link><br/><strong>Acquired/Inherited Template</strong> Both<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p><Link to="/faith/deskari">Deskari's</Link> influence upon the Worldwound's verminous life cannot be ignored for long by visitors to this tainted land. While some giant vermin have resisted Deskari's influence, most have succumbed to it. Such creatures are almost always encountered along the Worldwound's periphery. As one travels deeper into the blighted land, the immense insects, spiders, and other vermin encountered in the canyons and rivers take on an increasingly unsettling intelligence and demonic features. In many ways, these demonic vermin are no longer true denizens of the Material Plane - they are, after a fact, what happens when the chaos and evil of the Abyss infuse a mindless creature. They are the unholy spawn of vermin - and mortal sins.</p>
<p>Countless variations of demonic vermin exist in the forbidding wasteland that is the Worldwound. When a nest of similar monsters is encountered, they all typically share the same demonic powers and traits, but another nest of the same species could exhibit entirely different abilities, depending on the nature of the Abyssal energies that have corrupted and transformed them. Uncorrupted giant vermin that wander into or are otherwise brought into the Worldwound do not immediately fall victim to this vile transformation, but several months of exposure can, at the GM's whim, cause such creatures to spontaneously transform into one of these hideous monstrosities.</p>
<p>"Demonic vermin" is an inherited or acquired template that can be added to any <Link to="/type/vermin">vermin</Link> (hereafter referred to as the base creature). A demonic vermin retains all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Same as the base creature +1.</p>
<p><strong className="hl">Alignment:</strong> Chaotic evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/magical_beast">magical beast</Link>. Do not recalculate HD, BAB, or saves. While a demonic vermin is not an outsider, it is treated as if it had the demon subtype for the purposes of resolving all effects relating to that subtype.</p>
<p><strong className="hl">AC:</strong> Natural armor improves by +2.</p>
<p><strong className="hl">Special Qualities and Defenses:</strong> A demonic vermin gains <Link to="/umr/immunity">immunity</Link> to electricity and poison and <Link to="/umr/resistance">resistance</Link> to acid 10, cold 10, and fire 10. It also gains DR 5/cold iron (if 11 HD or less) or DR 10/cold iron (if 12 HD or more). As demonic vermin are intelligent, they lose the mindless trait.</p>
<p><strong className="hl">Melee:</strong> A demonic vermin's natural weapons are unchanged, but they are treated as chaotic and evil for the purpose of resolving damage reduction.</p>
<p><strong className="hl">Special Attacks:</strong> A demonic vermin retains all the special attacks of the base creature. In addition, it gains one of the following special abilities of your choosing; you can, of course, invent different abilities of your own as well. The save DC for any of these attacks is equal to 10 + 1/2 the demonic vermin's HD + the demonic vermin's Constitution modifier.</p>
<blockquote>
<p><strong>Abyssal Energy (Su):</strong> Choose one of the following energy types - acid, fire, or cold. The demonic vermin gains immunity to that energy type, and also gains a <Link to="/umr/breath_weapon">breath weapon</Link> that inflicts that type of energy damage. This breath weapon is a 60-foot-line, and deals 1d6 points of damage per CR point possessed by the demonic vermin (Reflex save halves). It can be used once every 1d4 rounds.</p>
<p><strong>Additional Senses (Ex):</strong> The vermin has a large number of extra eyes and other sensory organs. It gains <Link to="/umr/all_around_vision">all-around vision</Link>, <Link to="/umr/scent">scent</Link>, and a +8 racial bonus on <Link to="/skill/perception">Perception</Link> checks.</p>
<p><strong>Death Throes (Su):</strong> When the vermin is slain, it can make a single melee attack (using any one of its natural attacks) as an immediate action. It then explodes into acid, fire, electricity, or cold (your choice), dealing 1d6 points of damage per CR point possessed by the demonic vermin (Reflex save halves).</p>
<p><strong>Diseased (Su):</strong> The demonic vermin is immune to disease, and its natural attacks inflict <Link to="/disease/demonplague">demonplague</Link> on a hit (Fortitude save negates).</p>
<p><strong>Drone (Su):</strong> By rubbing its wings or limbs together as a standard action, the demonic vermin produces a loud, discordant drone that causes those within 30 feet of it to become <Link to="/misc/sickened">sickened</Link> (if the vermin is CR 8 or less) or <Link to="/misc/confused">confused</Link> (if the vermin is CR 9 or higher) for 1d6 rounds (Will save negates). This is a sonic mind-affecting effect.</p>
<p><strong>Skitter (Ex):</strong> The creature has uncanny speed and erratic movements. The vermin's speeds all increase by 10 feet, it gains <Link to="/feat/mobility">Mobility</Link> and <Link to="/feat/spring_attack">Spring Attack</Link> as bonus feats, and it gains a +4 racial bonus on Initiative checks.</p>
</blockquote>
<p><strong className="hl">Spell-Like Abilities:</strong> In addition to gaining one of the special attacks listed above, all demonic vermin gain access to a limited number of spell-like abilities, depending on its Hit Dice. Each ability is usable once per day. Caster level equals the creature's CR.</p>
<ScrollContainer id="template-demonic_vermin--table-0"><table>
<thead>
<tr>
<th>CR</th>
<th>Abilities</th>
</tr>
</thead>
<tbody><tr>
<td>1-4</td>
<td><Link to="/spell/darkness">darkness</Link></td>
</tr>
<tr>
<td>5-8</td>
<td><Link to="/spell/vomit_swarm">vomit swarm</Link></td>
</tr>
<tr>
<td>9-12</td>
<td><Link to="/spell/insect_plague">insect plague</Link></td>
</tr>
<tr>
<td>13-16</td>
<td><Link to="/spell/greater_teleport">greater teleport</Link> (self plus 50 lbs. of objects only)</td>
</tr>
<tr>
<td>17-20</td>
<td><Link to="/spell/earthquake">earthquake</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Abilities:</strong> Str +4, Con +2. A demonic vermin's Intelligence becomes 10 and its Charisma becomes 15 (unless the base creature has higher values, in which case they remain unchanged).</p>
<p><strong className="hl">Feats:</strong> A demonic vermin gains feats as appropriate for its Hit Dice, and gains <Link to="/feat/toughness">Toughness</Link> as a bonus feat.</p>
<p><strong className="hl">Skills:</strong> A demonic vermin has skill points per racial Hit Die equal to 4 + its Intelligence modifier. The following are class skills for demonic vermin: <Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/climb">Climb</Link>, <Link to="/skill/fly">Fly</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, Perception, <Link to="/skill/sense_motive">Sense Motive</Link>, and <Link to="/skill/stealth">Stealth</Link>.</p>
<p><strong className="hl">Languages:</strong> A demonic vermin speaks Abyssal, Celestial, and Draconic. It also gains <Link to="/umr/telepathy">telepathy</Link> to a distance of 100 feet.</p>
</>};
const _devilbound = {title: "Devilbound", jsx: <><div style={{clear:"both"}}></div><Header full><span>Devilbound</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 56</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>A devilbound creature has made a bargain with a <Link to="/family/devil">devil</Link>, promising a service and its soul in exchange for infernal power. The specific service depends on the devil's type and motivations, but always furthers the interests of Hell.</p>
<p>"Devilbound creature" is an acquired template that can be added to any creature with 5 or more Hit Dice and Intelligence, Wisdom, and Charisma scores of 3 or higher (referred to hereafter as the base creature). The creature retains all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Same as the base creature +1.</p>
<p><strong className="hl">Alignment:</strong> Any evil. A devilbound creature radiates an evil aura as if it were an evil outsider.</p>
<p><strong className="hl">Senses:</strong> A devilbound creature gains darkvision 60 ft. and the <Link to="/umr/see_in_darkness">see in darkness</Link> ability.</p>
<p><strong className="hl">AC:</strong> Natural armor improves by +4.</p>
<p><strong className="hl">Defensive Abilities:</strong> A devilbound creature gains a +4 bonus on saving throws against poison, fire <Link to="/umr/resistance">resistance</Link> 30, and <Link to="/umr/regeneration">regeneration</Link> 5 (good spells, good weapons).</p>
<p><strong className="hl">Weaknesses:</strong> The devil-bound creature gains the following weakness.</p>
<blockquote>
<p><strong>Contract Bound (Ex):</strong> The creature has signed a contract of service in return for this template. The devil must reveal its nature as a creature of <Link to="/rule/hell">Hell</Link> when it offers a contract, and it can't hide the details of the contract in any way. The creature must enter the agreement willingly (without magical compulsion). Usually the creature must perform one or more tasks for the devil, and in exchange the creature gains the template's abilities, whether immediately, after a specific amount of time, or once the tasks are completed.</p>
<p>The contract always includes a clause that damns the creature's soul to Hell when the creature dies, with credit for the act and possession of the soul going to the devil signing the contract. When the creature dies, its soul is automatically imprisoned in a gem, which immediately appears in Hell as one of the devil's belongings. If the devil is dead when the creature dies, the creature's soul is destroyed, and can't be restored to life except by <Link to="/spell/miracle">miracle</Link> or <Link to="/spell/wish">wish</Link>. If the creature fails to perform the tasks in the allotted time, its soul is still damned and the devil is not obligated to provide the promised abilities.</p>
<p>Many contracts state that the devil, its agents, and its allies will not attempt to kill the creature. This doesn't protect against all devils, but does offer the creature a measure of protection against treachery from the signatory devil.</p>
<p>Breaking a contract with a devil is difficult and dangerous. Furthermore, as long as the contract remains in effect, a slain victim can't be restored to life after death except by a <em>miracle</em> or <em>wish.</em> If the devilbound creature is restored to life, the devil immediately senses the name and location (as <Link to="/spell/discern_location">discern location</Link>) of the creature responsible.</p>
</blockquote>
<p><strong className="hl">Special Attacks:</strong> The creature gains the <Link to="/umr/summon">summon</Link> universal monster ability and can summon a devil once per day with a 100% chance of success. The devil remains for 1 hour. The creature's caster level or Hit Dice, whichever is higher, determines the most powerful kind of devil it can summon and the effective spell level of this ability, according to the following table.</p>
<ScrollContainer id="template-devilbound--table-0"><table>
<thead>
<tr>
<th>Caster Level</th>
<th>Devil</th>
<th>Spell Level</th>
</tr>
</thead>
<tbody><tr>
<td>3rd</td>
<td className="ion-activatable"><Link to="/monster/lemure">Lemure<IonRippleEffect /></Link></td>
<td>2nd</td>
</tr>
<tr>
<td>9th</td>
<td className="ion-activatable"><Link to="/monster/bearded_devil">Bearded devil<IonRippleEffect /></Link></td>
<td>5th</td>
</tr>
<tr>
<td>11th</td>
<td className="ion-activatable"><Link to="/monster/erinyes">Erinyes<IonRippleEffect /></Link></td>
<td>6th</td>
</tr>
<tr>
<td>13th</td>
<td className="ion-activatable"><Link to="/monster/bone_devil">Bone devil<IonRippleEffect /></Link></td>
<td>7th</td>
</tr>
<tr>
<td>15th</td>
<td className="ion-activatable"><Link to="/monster/barbed_devil">Barbed devil<IonRippleEffect /></Link></td>
<td>8th</td>
</tr>
<tr>
<td>17th</td>
<td className="ion-activatable"><Link to="/monster/ice_devil">Ice devil<IonRippleEffect /></Link></td>
<td>9th</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Spell-Like Abilities:</strong> The creature gains the following spell-like abilities, depending on the kind of devil it is bound to. The creature uses its Hit Dice or caster level, whichever is higher, as the caster level for its spell-like abilities. Save DCs are based on the creature's Intelligence, Wisdom, or Charisma, whichever is highest.</p>
<blockquote>
<p><strong className="hl"><Link to="/monster/accuser_devil">Accuser:</Link></strong> 3/day-<Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link>, <Link to="/spell/invisibility">invisibility</Link> (self only), <Link to="/spell/summon_swarm">summon swarm</Link></p>
<p><strong className="hl"><Link to="/monster/barbed_devil">Barbed:</Link></strong> 3/day-<Link to="/spell/hold_monster">hold monster</Link></p>
<p><strong className="hl"><Link to="/monster/bearded_devil">Bearded:</Link></strong> 3/day-<Link to="/spell/dimension_door">dimension door</Link>, <Link to="/spell/rage">rage</Link></p>
<p><strong className="hl"><Link to="/monster/belier_devil">Belier:</Link></strong> 3/day-<Link to="/spell/charm_monster">charm monster</Link></p>
<p><strong className="hl"><Link to="/monster/bone_devil">Bone:</Link></strong> 3/day-<Link to="/spell/fly">fly</Link>, invisibility (self only)</p>
<p><strong className="hl"><Link to="/monster/contract_devil">Contract:</Link></strong> 3/day-<Link to="/spell/bestow_curse">bestow curse</Link>, <Link to="/spell/detect_thoughts">detect thoughts</Link>, <Link to="/spell/locate_creature">locate creature</Link></p>
<p><strong className="hl"><Link to="/monster/drowning_devil">Drowning:</Link></strong> 3/day-<Link to="/spell/hydraulic_push">hydraulic push</Link>, <Link to="/spell/water_breathing">water breathing</Link></p>
<p><strong className="hl"><Link to="/monster/erinyes">Erinyes:</Link></strong> 3/day-<Link to="/spell/fear">fear</Link> (single target), <Link to="/spell/unholy_blight">unholy blight</Link></p>
<p><strong className="hl"><Link to="/monster/handmaiden_devil">Handmaiden:</Link></strong> 3/day-<Link to="/spell/black_tentacles">black tentacles</Link>; 1/day-<Link to="/spell/true_seeing">true seeing</Link></p>
<p><strong className="hl"><Link to="/monster/horned_devil">Horned:</Link></strong> 3/day-<Link to="/spell/dispel_good">dispel good</Link>, <Link to="/spell/fireball">fireball</Link></p>
<p><strong className="hl"><Link to="/monster/host_devil">Host:</Link></strong> 3/day-dimension door, fly</p>
<p><strong className="hl"><Link to="/monster/ice_devil">Ice:</Link></strong> 3/day-<Link to="/spell/cone_of_cold">cone of cold</Link>, <Link to="/spell/ice_storm">ice storm</Link></p>
<p><strong className="hl"><Link to="/monster/immolation_devil">Immolation:</Link></strong> 3/day-<Link to="/spell/fire_shield">fire shield</Link>, fireball</p>
<p><strong className="hl"><Link to="/monster/imp">Imp:</Link></strong> 3/day-invisibility (self only), <Link to="/spell/polymorph">polymorph</Link> (self only, same size as base creature)</p>
<p><strong className="hl"><Link to="/monster/nemesis_devil">Nemesis:</Link></strong> 3/day-invisibility, <Link to="/spell/scorching_ray">scorching ray</Link>; 1/day-<Link to="/spell/blasphemy">blasphemy</Link></p>
<p><strong className="hl"><Link to="/monster/pit_fiend">Pit Fiend:</Link></strong> 3/day-<Link to="/feat/quickened">quickened</Link> fireball, invisibility; 1/day-blasphemy</p>
</blockquote>
<p><strong className="hl">Abilities:</strong> Adjust the base creature's ability scores according to the kind of devil it is bound to.</p>
<ScrollContainer id="template-devilbound--table-1"><table>
<thead>
<tr>
<th>Devil</th>
<th>Str</th>
<th>Dex</th>
<th>Con</th>
<th>Int</th>
<th>Wis</th>
<th>Cha</th>
</tr>
</thead>
<tbody><tr>
<td>Accuser</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>-</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>Barbed, bearded, host</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>Belier</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>Bone, ice</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>Contract, handmaiden</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>Drowning, horned</td>
<td>2</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
</tr>
<tr>
<td>Erinyes</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>2</td>
</tr>
<tr>
<td>Immolation</td>
<td>2</td>
<td>-</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>2</td>
</tr>
<tr>
<td>Imp</td>
<td>-</td>
<td>2</td>
<td>-</td>
<td>2</td>
<td>-</td>
<td>2</td>
</tr>
<tr>
<td>Nemesis, pit fiend</td>
<td>+2 to any three different ability scores</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _divine_guardian = {title: "Divine Guardian", jsx: <><div style={{clear:"both"}}></div><Header full><span>Divine Guardian</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 60</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>A divine guardian is a creature chosen by the gods to guard a sacred site of the faith. Blessed with eternal life (or damned, some might say), a divine guardian spends untold centuries in the service of its deity, tirelessly and deathlessly defending its charge from any who would seek to desecrate it.</p>
<p>Typically such a creature is transformed into a form more regal than its mortal one, setting it apart from a typical member of its race or species. A divine guardian is spiritually connected to the one site that it must guard for eternity. As long as a divine guardian remains within that site, it does not hunger, thirst, get sick, or even age. Within the bounds of its sacred site, a divine guardian possesses numerous defensive powers to ward it from intruders, but it can never leave the area or the long years of its service will finally catch up to it. A divine guardian must weigh the power and prestige of its endless responsibility against the freedom death might inevitably bring.</p>
<p>Most divine guardians are chosen servants who agree to willingly serve their gods for all eternity, but some have been cursed with their duty in response for some harm to the god's faithful or as atonement for some great sin. Whatever the nature of its creation, a divine guardian is still beholden to the god that granted it its powers, and to the followers of that god as well.</p>
<p>A cleric or paladin of the deity that created a divine guardian can issue the guardian commands. This does not give the cleric or paladin complete control over the creature, but the guardian does respond favorably to those requests. For example, a cleric could ask it to not attack her companions, or to help her defend the guardian's sacred site from attackers. A cleric or paladin of the same faith must win an opposed Charisma check to convince a divine guardian to do anything it wouldn't ordinarily do. A divine guardian can never be ordered to leave its sacred site or to go against the tenets of its deity's faith.</p>
<p>"Divine guardian" is an acquired template that can be added to any creature (referred to hereafter as the base creature). A divine guardian uses all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Same as the base creature +1.</p>
<p><strong className="hl">Alignment:</strong> Usually, the alignment of a divine guardian matches that of the god who invested it with power. Sometimes, however, a god punishes a wayward worshiper or an enemy of the faith by making it a divine guardian.</p>
<p><strong className="hl">Type:</strong> The creature's type does not change, but the creature might gain one or more alignment or elemental subtypes, depending on the alignment and portfolio of the deity that granted it the template. Possible subtypes include air, chaotic, cold, earth, evil, fire, good, lawful, and water. For instance, a lawful good deity's divine guardian would have the lawful and good subtypes, even if it were actually of some other alignment. Similarly, a neutral god of water and ice would grant its divine guardian the water and cold subtypes.</p>
<p><strong className="hl">Senses:</strong> A divine guardian gains darkvision 60 feet and low-light vision.</p>
<p><strong className="hl">Defensive Abilities:</strong> A divine guardian is immune to disease, poison, and all mind-affecting effects. It also gains <Link to="/umr/fast_healing">fast healing</Link> 5. In addition, it gains the following defensive ability.</p>
<blockquote>
<p><strong>Ability Healing (Ex):</strong> A divine guardian heals 1 point of <Link to="/rule/ability_damage">ability damage</Link> per round in each damaged ability score.</p>
</blockquote>
<p><strong className="hl">Special Attacks:</strong> A divine guardian gains the following.</p>
<blockquote>
<p><strong>Spell-Like Abilities:</strong> A divine guardian has a cumulative number of spell-like abilities depending on its Hit Dice. Unless otherwise noted, these abilities are usable 1/day. CL is equal to the divine guardian's HD or the CL of the base creature's spell-like abilities, whichever is higher.</p>
<ScrollContainer id="template-divine_guardian--table-0"><table>
<thead>
<tr>
<th>HD</th>
<th>Abilities</th>
</tr>
</thead>
<tbody><tr>
<td>1-2</td>
<td><Link to="/spell/alarm">Alarm</Link> 3/day, <Link to="/spell/dimension_door">dimension door</Link> at will (within sacred site only), <Link to="/spell/hold_portal">hold portal</Link></td>
</tr>
<tr>
<td>3-4</td>
<td><Link to="/spell/arcane_lock">Arcane lock</Link>, <Link to="/spell/knock">knock</Link> 3/day</td>
</tr>
<tr>
<td>5-6</td>
<td><Link to="/spell/augury">Augury</Link>, <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link></td>
</tr>
<tr>
<td>7-8</td>
<td><Link to="/spell/dismissal">Dismissal</Link></td>
</tr>
<tr>
<td>9-10</td>
<td><Link to="/spell/commune">Commune</Link></td>
</tr>
<tr>
<td>11-12</td>
<td><Link to="/spell/guards_and_wards">Guards and wards</Link></td>
</tr>
<tr>
<td>13-14</td>
<td><Link to="/spell/forbiddance">Forbiddance</Link></td>
</tr>
<tr>
<td>15-16</td>
<td><Link to="/spell/banishment">Banishment</Link></td>
</tr>
<tr>
<td>17-18</td>
<td><Link to="/spell/repulsion">Repulsion</Link></td>
</tr>
<tr>
<td>19-20</td>
<td><Link to="/spell/screen">Screen</Link></td>
</tr>
<tr>
<td>21+</td>
<td><Link to="/spell/antipathy">Antipathy</Link></td>
</tr>
</tbody></table></ScrollContainer>
</blockquote>
<p><strong className="hl">Special Qualities:</strong> A divine guardian gains the following.</p>
<blockquote>
<p><strong>Aura (Ex):</strong> A divine guardian with the chaotic, evil, good, or lawful subtypes has an aura as if it were an aligned outsider of equivalent Hit Dice (see the <Link to="/spell/detect_evil">detect evil</Link> spell for details).</p>
<p><strong>Blessed Life (Ex):</strong> A divine guardian does not age or breathe. It does not require food, drink, or sleep.</p>
<p><strong>Divine Swiftness (Ex):</strong> A divine guardian is gifted with incredible speed, granting it a +4 bonus on initiative rolls. In addition, each of the base creature's speeds is doubled. If the base creature has a fly speed, the divine guardian's maneuverability becomes perfect if it was not already. If the divine guardian acquires the air, earth, or water subtype, it gains a fly, burrow, or swim speed equal to its highest speed.</p>
<p><strong>Sacred Site (Ex):</strong> Each divine guardian is assigned to guard a specific site sacred to the deity that invested it with power. This area may be a structure, a series of structures, or a natural site with clearly defined borders. It can be as large as a city, but in most cases it's a single temple or a sacred grove. Gods don't waste their powers on places that their worshipers can protect, so most divine guardians keep watch over abandoned burial grounds or lost temples. The divine guardian of such a site is charged with protecting it from harm and preventing incursions by those not of the faith. It must keep its vigil until the god deems the guardian's task done.</p>
<p>If the divine guardian ever moves out of the area defined as the sacred site, it immediately loses the divine guardian template and any spellcasting ability the deity might have granted from class levels. It cannot regain the template unless it atones for its failure (usually by completing some quest or via an <Link to="/spell/atonement">atonement</Link> spell) and reenters the site within 1 week. Otherwise, it loses the template permanently, taking 6d6 points of <Link to="/rule/constitution_drain">Constitution drain</Link> as the years of lost food, drink, and sleep return to it tenfold. A creature that lacks a Constitution score takes 2d6 points of damage per Hit Die from this process. Even if it survives the Constitution drain, the creature can never regain the template.</p>
</blockquote>
<p><strong className="hl">Abilities:</strong> Wis +4, Cha +4. If the base creature has an Intelligence score of 2 or lower, it also gains Int +4.</p>
<p><strong className="hl">Skills:</strong> A divine guardian gains a +5 racial bonus on <Link to="/skill/perception">Perception</Link> and <Link to="/skill/sense_motive">Sense Motive</Link> checks.</p>
<p><strong className="hl">Organization:</strong> Solitary.</p>
</>};
const _dread_lord = {title: "Dread Lord", jsx: <><div style={{clear:"both"}}></div><Header full><span>Dread Lord</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 234</Link><br/><strong>Acquired/Inherited Template</strong> Both<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Dread lords are intrinsically tied to the territories they inhabit, either through ancestry or by claiming them in costly battle. Ambitious and cunning in their pursuit of land and glory, once dread lords attain their goals of conquest, they transition into tragic figures. They might find themselves hollow once their dreams are fulfilled, having nothing else to strive for, or could becoming heartless toward their charges, seeing them as ungrateful for all the lord sacrificed.</p>
<p>Some lords come into power through vile deeds and become targets of powerful curses wreaked by people they wronged or powerful divine entities that demand retribution. These despicable creatures are transformed into brooding immortals known as <Link to="/template/cursed_lord">cursed lords</Link>. Regardless of how they rose to rule over their lands, their dark domains are dangerous and haunted places.</p>
<p>"Dread lord" is an acquired or inherited template that can be added to any creature with Intelligence and Charisma scores of at least 6 (referred to hereafter as the base creature). A dread lord uses the base creature's statistics and abilities except as noted here. If the creature is imprisoned within its domain as the result of a powerful curse, it instead becomes a cursed lord (see below).</p>
<p><strong className="hl">CR:</strong> Base creature's CR + 1.</p>
<p><strong className="hl">Alignment:</strong> Any evil.</p>
<p><strong className="hl">Senses:</strong> A dread lord gains darkvision 120 feet.</p>
<p><strong className="hl">Defensive Abilities:</strong> A dread lord gains DR 5/good or silver. A dread lord gains <Link to="/umr/fast_healing">fast healing</Link> 5 if it has fewer than 10 Hit Dice, or fast healing 10 if it has 10 or more Hit Dice.</p>
<p><strong className="hl">Weaknesses:</strong> A dread lord gains the following weakness.</p>
<blockquote>
<p><strong>Landlocked (Ex):</strong> A dread lord's power is drawn directly from its domain, which has a radius of 5 miles per Hit Die of the dread lord, centered on a fixed point of some significance to the dread lord. The dread lord loses all benefits of this template when not within its domain.</p>
</blockquote>
<p><strong className="hl">Special Attacks:</strong> A dread lord gains several special attacks. For every 3 Hit Dice the dread lord has, it chooses a special attack from those listed below. Unless otherwise noted, the saving throw DCs for these abilities are equal to 10 + 1/2 the dread lord's Hit Dice + its Charisma modifier. The dread lord's caster level is equal to its total Hit Dice (or the caster level of its existing spell-like abilities, whichever is higher).</p>
<blockquote>
<p><strong>All-Seeing (Sp):</strong> Nothing happens in the dread lord's realm without the dread lord becoming aware. It can use <Link to="/spell/speak_with_animals">speak with animals</Link>, <Link to="/spell/speak_with_plants">speak with plants</Link>, and <Link to="/spell/stone_tell">stone tell</Link> as spell-like abilities each three times per day. If it has a CR of 5 or higher, it can use <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link> as a spell-like ability three times per day, and the spell's range extends to any place in its domain.</p>
<p><strong>Dream Dominion (Su):</strong> The dread lord has dominion over even the dreams of its subjects. It can use <Link to="/spell/dream">dream</Link> and <Link to="/spell/nightmare">nightmare</Link> as spell-like abilities, each once per day, but targeting only creatures within its domain. If it has a CR of 9 or higher, then once per week it can attempt to gain control of a creature whose dreams it affects in this way. If the target fails a secondary Will saving throw, the dread lord enslaves it, as per <Link to="/spell/dominate_monster">dominate monster</Link>, in addition to the <em>dream</em> or <em>nightmare</em> spell-like ability's normal effects.</p>
<p><strong>Fear Aura (Su):</strong> The dread lord is terrifying to behold. Any creature within a 60-foot radius that sees or hears the dread lord must succeed at a Will save or be <Link to="/misc/shaken">shaken</Link> for as long as it is within the aura, and for 1 minute thereafter. Whether or not the save is successful, that creature cannot be affected again by the same dread lord's fear aura for 24 hours. This is a mind-affecting fear effect.</p>
<p><strong>Magical Mastery (Su):</strong> The dread lord draws magical power from its domain. It treats its caster level as 2 higher for the purposes of spells and spell-like abilities it casts, and the saving throw DCs of such spells and spell-like abilities increase by 1.</p>
<p><strong>Master of the Four Winds (Sp):</strong> The dread lord can control the weather within its domain. It can use <Link to="/spell/fog_cloud">fog cloud</Link> and <Link to="/spell/gust_of_wind">gust of wind</Link> as spell-like abilities each three times per day. If it has a CR of 5 or higher, it can use <Link to="/spell/control_weather">control weather</Link> as a spell-like ability once per day. If it has a CR of 8 or higher, it can use <Link to="/spell/control_winds">control winds</Link> as a spell-like ability once per day.</p>
<p><strong>Physical Mastery (Su):</strong> The dread lord draws strength and deftness from its domain. It gains a +4 profane bonus to its Strength, Dexterity, and Constitution scores.</p>
<p><strong>Plant Affinity (Sp):</strong> The dread lord's control over its lands extends to the very plants. It can use <Link to="/spell/entangle">entangle</Link> as a spell-like ability at will, and <Link to="/spell/plant_growth">plant growth</Link> as a spell-like ability once per day. If it has a CR of 5 or higher, it can use <Link to="/spell/tree_stride">tree stride</Link> as a spell-like ability at will. If it has a CR of 10 or higher, it can use <Link to="/spell/liveoak">liveoak</Link> as a spell-like ability once per day.</p>
<p><strong>Unquestioned Ruler (Sp):</strong> The dread lord's subjects naturally bend to its will. It can use <Link to="/spell/charm_animal">charm animal</Link>, <Link to="/spell/charm_person">charm person</Link>, and <Link to="/spell/detect_thoughts">detect thoughts</Link> as spell-like abilities at will. If it has a CR of 10 or higher, it can use <Link to="/spell/dominate_animal">dominate animal</Link>, <Link to="/spell/dominate_person">dominate person</Link>, and <Link to="/spell/mass_suggestion">mass suggestion</Link> as spell-like abilities three times per day.</p>
</blockquote>
<p><strong className="hl">Special Qualities:</strong> A dread lord gains the following special ability.</p>
<blockquote>
<p><strong>One with the Land (Su):</strong> A dread lord can shape the hazardous landscapes formed as a consequence of its domain's creation to its will. It can replace any normal or supernatural <Link to="/rule/hazards">hazard</Link> present in its domain with another hazard, but the process takes 24 hours, during which time neither hazard functions. The combined CR of all hazards found within a lord's domain (that is, the CR of a hypothetical encounter with all of the hazards at once) can't exceed twice its Hit Dice, and it cannot create any hazards whose CR exceeds its own. A dread lord's affinity with the land grants it a +2 bonus on all Will saves.</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> Intelligence +4, Charisma +4.</p>
</>};
const _dream_eater = {title: "Dream Eater", jsx: <><div style={{clear:"both"}}></div><Header full><span>Dream Eater</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/dungeons_of_golarion">Dungeons of Golarion pg. 42</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>An endless variety of beings exist within and below the Pyramid of Kamaria. Among the most unique denizens of the pyramid, however, are the dream eaters. Created by the <Link to="/magic-artifact/gem_of_dreams">Gem of Dreams</Link>, these one-time humans have been warped by nightmares into deformed creatures. The <Link to="/faith/rovagug">Rovagug</Link> cultists themselves have built a strange mythology for themselves around this practice - they believe the Gem of Dreams to be a gift sent them by their god. According to their myths, once the Rough Beast emerges from the Dead Vault and destroys Golarion, the corpse world left behind would be populated only by those Rovagug has chosen for survival. It is through this magical gem's capacity to transform dreamers into monsters that they believe they are being so selected.</p>
<p>"Dream Eater" is an acquired template that can be added to any living intelligent creature through contact with the artifact known as the Gem of Dreams - but once a creature becomes a dream eater, it cannot gain this template again.</p>
<p><strong className="hl">CR:</strong> Same as base creature +2.</p>
<p><strong className="hl">Alignment:</strong> Chaotic evil - most dream eaters become worshipers of Rovagug, <Link to="/family/demon_lord">demon lords</Link>, or other chaotic evil deities.</p>
<p><strong className="hl">Senses:</strong> The base creature gains darkvision 60 ft.; if the base creature already possesses darkvision, the range of that ability increases by 60 ft.</p>
<p><strong className="hl">Immunity:</strong> The base creature becomes immune to mind-affecting effects.</p>
<p><strong className="hl">Special Attacks:</strong> A dream eater gains two special attacks, as detailed below. Both of these special attacks have save DCs equal to 10 + 1/2 the dream eater's Hit Dice + the dream eater's Charisma modifier.</p>
<blockquote>
<p><strong>Dream Eating (Su):</strong> As a full-round action that provokes attacks of opportunity, a dream eater can consume a creature's subconscious dreams if the victim fails to resist with a Will save. A sleeping victim takes a -2 penalty on saving throws against this ability, but automatically wakens if the save is successful. On a failed save, the victim takes 1d4 points of <Link to="/rule/charisma_damage">Charisma damage</Link>, and the dream eater gains a number of psychic points equal to the Charisma drained, to a maximum amount of psychic points equal to the dream eater's Hit Dice.</p>
<p><strong>Psychic Assault (Su):</strong> As a swift action, a dream eater can imbue any melee attack he makes with a psychic assault, infusing the mind of the creature struck with hideous nightmare visions and hallucinations. The magnitude of the effect depends on how many psychic points the dream eater spends in the assault. By expending 1 point, the dream eater can cause the victim to become <Link to="/misc/dazzled">dazzled</Link> for 1d6 rounds. By expending 3 points, he can make a victim become <Link to="/misc/staggered">staggered</Link> for 1d6 rounds. By expending 5 points, he can make the victim <Link to="/misc/nauseated">nauseated</Link> for 1d6 rounds. By expending 7 points, he can make the victim <Link to="/misc/confused">confused</Link> for 1d6 rounds. And by expending 9 points, he can <Link to="/misc/stun">stun</Link> the victim for 1d6 rounds. The victim can resist the psychic assault entirely by making a Will saving throw.</p>
</blockquote>
<p><strong className="hl">Special Abilities:</strong> A dream eater gains <Link to="/umr/telepathy">telepathy</Link> with other dream eaters to a range of 30 feet.</p>
<p><strong className="hl">Ability Scores:</strong> Str +6, Dex +2, Con +4, Int +2, Wis +2, Cha +4.</p>
<p><strong className="hl">Skills:</strong> A dream eater gains a +4 racial bonus on <Link to="/skill/perception">Perception</Link> and <Link to="/skill/stealth">Stealth</Link> checks. He also gains a +8 racial bonus on <Link to="/skill/knowledge_religion">Knowledge (religion)</Link> and <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> checks, and these two skills are now always considered class skills for the creature.</p>
</>};
const _dreamspawn = {title: "Dreamspawn", jsx: <><div style={{clear:"both"}}></div><Header full><span>Dreamspawn</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/the_house_on_hook_street">The House on Hook Street pg. 62</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Dreamspawn creatures are created when the lucid bodies of dreamers are killed in certain correupted areas of the <Link to="/rule/dimension_of_dreams">Dimension of Dreams</Link>, their nightmarish final moments resulting in true death in the waking world. On some rare occasions, the creature or creatures responsible for the death of the dreamer are intrinsically bound to that dreamer's death throes, their etheric forms dragged along with the victim's fleeing soul and stranded somewhere between the sleeping and waking worlds. These creatures soon emerge on the Material Plane, bursting forth from their victim's corpse as nightmarish spectres of the dream-thing they once were.</p>
<p>Dreamspawn creatures are always linked by ectoplasmic strands to the corpse of the dreamer that created them. They drain the corpse of fluids and essence in order to manifest, desiccating the remains in the process. Their initial manifestation usually disfigures the corpse in some horrifying manner. Dreamspawn creatures are forced to drag the remains of dead dreamers behind them, motivated to experience the Material Plane but shackled to their creator's rotting body.</p>
<p>These otherworldly creatures seek out new host bodies to replace the original rotting corpses that first brought them into the world. This effort allows them to extend their lives as their host body rots beyond repair. Those who hunt these escaped nightmares and seek to silence them have learned to sense the eerie vibrations that accompany the dreamspawn's violation of planar physics, and use it to their advantage to locate and destroy the creatures.</p>
<p>"Dreamspawn creature" is an acquired template that can be added to any corporeal creature (referred to hereafter as the base creature). Dreamspawn creatures are typically at least one size category larger than their hosts. A dreamspawn creature uses all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Same as the base creature's CR + 1.</p>
<p><strong className="hl">Alignment:</strong> Usually evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/outsider">outsider</Link> (<Link to="/subtype/extraplanar">extraplanar</Link>). Do not recalculate base class Hit Dice, BAB, saves, or skill points.</p>
<p><strong className="hl">Senses:</strong> A dreamspawn creature gains thoughtsense 60 feet.</p>
<blockquote>
<p><strong>Thoughtsense (Su):</strong> A dreamspawn creature can automatically detect and locate conscious creatures within the specified range (usually 60 feet). This functions similarly to the <Link to="/umr/blindsight">blindsight</Link> ability. <Link to="/spell/nondetection">Nondetection</Link>, <Link to="/spell/mind_blank">mind blank</Link>, and similar effects can block thoughtsense. Thoughtsense can distinguish between sentient (Intelligence 3 or greater) and non-sentient (Intelligence 1-2) creatures, but otherwise provides no information about the creatures it detects.</p>
</blockquote>
<p><strong className="hl">Aura:</strong> A dreamspawn creature has the following aura.</p>
<blockquote>
<p><strong>Discordant Feedback (Su):</strong> The dreamspawn creature's psychic energy creates an eerie, shrieking feedback in the minds of living creatures in a 10-foot radius. Creatures within the aura take a -2 penalty on all attack rolls, skill checks, and saving throws while in the area, and must make a successful Will save or take 1d2 points of <Link to="/rule/charisma_damage">Charisma damage</Link>. Spellcasters who attempt to cast spells in the aura's radius must make a <Link to="/rule/concentration">concentration</Link> check with a DC equal to 10 + 1/2 the dreamspawn creature's Hit Dice + the dreamspawn creature's Charisma modifier. If the character fails, the spell is expended but does not function. This is a mind-affecting effect.</p>
</blockquote>
<p><strong className="hl">Defensive Abilities:</strong> A dreamspawn creature gains DR 5/good or silver, immunity to mind-affecting effects, and the following defensive ability.</p>
<p><strong>Span Planes (Su):</strong> Dreamspawn creatures exist partially on the Material Plane and partially in the Dimension of Dreams. Dreamspawn creatures take half damage (50%) from all nonmagical attack forms, and full damage from magical weapons, spells, spell-like effects, supernatural effects, incorporeal creatures and effects, and force effects.</p>
<p><strong className="hl">Speed:</strong> Same as the base creature. If the base creature does not have a fly speed, the dreamspawn creature gains a fly speed of 10 (perfect maneuverability) as a supernatural ability.</p>
<p><strong className="hl">Attacks:</strong> A dreamspawn creature retains all the natural weapons, manufactured weapon attacks, and weapon proficiencies of the base creature. If the base creature has no other natural attacks, the dreamspawn creature gains a <Link to="/umr/slam_attack">slam attack</Link> that deals damage based on the dreamspawn creature's size.</p>
<p><strong className="hl">Special Qualities:</strong> A dreamspawn creature gains the following special quality.</p>
<blockquote>
<p><strong>Sleepwalker (Su):</strong> A dreamspawn creature is tethered to the corpse of the dreamer whose death birthed it, using it as a conduit between one world and the next. Typically, the desiccated corpse is dragged lifelessly along with the materialized dreamspawn creature, occupying an adjacent square and moving along with it. As a move action, the dreamspawn creature can also withdraw wholly into the corpse where it can control the movements of its host. While inhabiting the corpse, it can attack foes with a slam attack. Any attack against the host deals half damage to the dreamspawn creature as well, although its DR, resistances, and immunities may negate some or all of this damage. The dreamspawn creature can materialize from the corpse as a free action. If a dreamspawn creature kills another corporeal target, it can discard its tethered corpse and attach itself to the newly killed victim.</p>
</blockquote>
<p><strong className="hl">Abilities:</strong> Dex +4, Cha +2.</p>
</>};
const _druid = {title: "Druid", jsx: <><div style={{clear:"both"}}></div><Header full><span>Druid</span><span>CR +1, +2, or +3</span></Header>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 247</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> No</p>
<p>Drawn to the raw might and power of nature, a <Link to="/class/druid">druid</Link> creature gains the ability to change shape and cast druid spells. A druid creature's CR increases by 2 if the creature has 7 or more HD, and it increases by 3 if the creature has 13 or more HD.</p>
<p><strong className="hl">Quick Rules:</strong> +2 on all rolls based on Wis; can use wild shape if it has 7 or more HD (using its HD - 3 as its druid level to determine the effect of the wild shape); can cast a small number of druid spells (see below) using its HD as its CL; <Link to="/ability/woodland_stride">woodland stride</Link>.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Special Attacks</strong> wild shape (if it has 7 or more HD, using its HD - 3 as its druid level to determine the effect of the wild shape); <strong>Druid Spells</strong> can cast a small number of druid spells (see below) using its HD as its CL; <strong>Ability Scores</strong> +4 Wisdom; <strong>SQ</strong> woodland stride.</p>
<p><strong>Animal Companion:</strong> These rules assume the druid creature doesn't have an animal companion. If you want to add one, select a creature from the list of a <Link to="/spell/summon_natures_ally">summon nature's ally</Link> spell. The spell must have a level no higher than 1/2 the creature's CR. Treat the companion as an additional creature in the encounter, awarding XP for defeating it as if it was not an animal companion.</p>
<h3 id="template-druid-cleric-druid-and-wizard-spells-slots">Cleric, Druid, and Wizard Spells Slots</h3>
<ScrollContainer id="template-druid--table-0"><table>
<thead>
<tr>
<th>HD</th>
<th>0</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
<th>7</th>
<th>8</th>
<th>9</th>
</tr>
</thead>
<tbody><tr>
<td>1-3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4-6</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7-9</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10-12</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13-15</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>16-18</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>19-21</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>22-24</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>25+</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _echohusk = {title: "Echohusk", jsx: <><div style={{clear:"both"}}></div><Header full><span>Echohusk</span><span>CR Varies</span></Header>
<p><strong>Sources</strong> <Link to="/source/occult_bestiary">Occult Bestiary pg. 24</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Echohusks are the walking corpses of creatures slain by powerful psychic attacks and animated by the mental energies that caused their deaths. The mind and soul of an echohusk are erased from its being, leaving nothing but the psychic echo of the creature that scoured its mind.</p>
<p>Left unattended, echohusks do little other than attack creatures that disturb them. However, anyone who creates an echohusk possesses an innate mental link to the undead creature, and is able to command the echohusk to perform whatever gruesome tasks she desires.</p>
<p>Echohusks are common in and around Geb, where death from the powerful mental attacks of psychic spellcasters - even <Link to="/template/lich">liches</Link> - is an all too common occurrence. In such areas, echohusks are found in groups, obeying the commands of their dark masters. In the deep reaches of the underworld, where lost travelers or wayward patrols might encounter psychic horrors like <Link to="/monster/neothelid">neothelids</Link>, masterless echohusks are more common; the ancient and terrible creatures that happen to spawn them typically have little use for mindless servants.</p>
<p>Many psychic creatures have attempted to perfect the technique of creating echohusks, but only the attacks of the incorporeal undead known as <Link to="/monster/psychic_stalker">psychic stalkers</Link> can create echohusks without fail. The horrific nature of psychic stalkers is likely the reason for this phenomenon.</p>
<p>"Echohusk" is an acquired template that can be added to any living, intelligent corporeal creature, referred to hereafter as the base creature.</p>
<p><strong className="hl">CR:</strong> This depends on the creature's new total number of Hit Dice, as given below.</p>
<ScrollContainer id="template-echohusk--table-0"><table>
<thead>
<tr>
<th>HD</th>
<th>CR</th>
<th>XP</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>1/4</td>
<td>100</td>
</tr>
<tr>
<td>2</td>
<td>1/2</td>
<td>200</td>
</tr>
<tr>
<td>3-4</td>
<td>1</td>
<td>400</td>
</tr>
<tr>
<td>5-6</td>
<td>2</td>
<td>600</td>
</tr>
<tr>
<td>7-8</td>
<td>3</td>
<td>800</td>
</tr>
<tr>
<td>9-10</td>
<td>4</td>
<td>1,200</td>
</tr>
<tr>
<td>11-12</td>
<td>5</td>
<td>1,600</td>
</tr>
<tr>
<td>13-15</td>
<td>6</td>
<td>2,400</td>
</tr>
<tr>
<td>16-17</td>
<td>7</td>
<td>3,200</td>
</tr>
<tr>
<td>18-20</td>
<td>8</td>
<td>4,800</td>
</tr>
<tr>
<td>21-24</td>
<td>9</td>
<td>6,400</td>
</tr>
<tr>
<td>25-28</td>
<td>10</td>
<td>9,600</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Alignment:</strong> Always neutral evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/undead">undead</Link>. It retains any subtypes except for alignment subtypes (such as <Link to="/subtype/good">good</Link>) and subtypes that indicate kind (such as <Link to="/subtype/giant">giant</Link>). It doesn't gain the augmented subtype. It uses all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">AC:</strong> The creature's natural armor bonus is based on the echohusk's size, indicated below.</p>
<ScrollContainer id="template-echohusk--table-1"><table>
<thead>
<tr>
<th>Echohusk Size</th>
<th>Natural Armor Bonus</th>
</tr>
</thead>
<tbody><tr>
<td>Small or smaller</td>
<td>+0</td>
</tr>
<tr>
<td>Medium</td>
<td>+1</td>
</tr>
<tr>
<td>Large</td>
<td>+2</td>
</tr>
<tr>
<td>Huge</td>
<td>+3</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>+6</td>
</tr>
<tr>
<td>Colossal</td>
<td>+10</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Hit Dice:</strong> An echohusk retains the number of HD the base creature possessed (except those from class levels), and gains a number of additional Hit Dice given on the following table. An echohusk uses its Charisma modifier (instead of its Constitution modifier) to determine bonus hit points.</p>
<ScrollContainer id="template-echohusk--table-2"><table>
<thead>
<tr>
<th>Echohusk Size</th>
<th>Bonus Hit Dice</th>
</tr>
</thead>
<tbody><tr>
<td>Medium or smaller</td>
<td>-</td>
</tr>
<tr>
<td>Large</td>
<td>+1</td>
</tr>
<tr>
<td>Huge</td>
<td>+2</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>+4</td>
</tr>
<tr>
<td>Colossal</td>
<td>+6</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Saves:</strong> Base save bonuses are Fortitude +1/3 Hit Dice, Reflex +1/3 Hit Dice, and Will +1/2 Hit Dice + 2.</p>
<p><strong className="hl">Defensive Abilities:</strong> Echohusks lose their defensive abilities and gain all of the qualities and immunities granted by the undead type.</p>
<p><strong className="hl">Weaknesses:</strong> Echohusks gain the following weakness.</p>
<blockquote>
<p><strong>Vulnerable to Psychic Magic (Ex):</strong> Echohusks are particularly susceptible to psychic spells and attacks, as the entire force that animates them is composed of psychic energy. They take a -4 penalty on saving throws against psychic spells and effects.</p>
</blockquote>
<p><strong className="hl">Speed:</strong> An echohusk retains all of the base creature's movement speeds. However, its maneuverability for flight drops to clumsy.</p>
<p><strong className="hl">Attacks:</strong> An echohusk retains all the natural weapons, manufactured weapon attacks, and weapon proficiencies of the base creature. It gains a <Link to="/umr/slam_attack">slam attack</Link> that deals damage as if it were one size category larger than its actual size.</p>
<p><strong className="hl">Special Attacks:</strong> An echohusk retains none of the base creature's special attacks.</p>
<p><strong className="hl">Ability Scores:</strong> An echohusk's Strength score increases by 2. An echohusk has neither a Constitution score or an Intelligence score, its Wisdom score changes to 10, and its Charisma score changes to 14.</p>
<p><strong className="hl">BAB:</strong> An echohusk's base attack bonus is equal to 3/4 of its Hit Dice.</p>
<p><strong className="hl">Skills:</strong> An echohusk has no skill ranks and loses any racial bonuses to skills that the base creature possessed.</p>
<p><strong className="hl">Feats:</strong> An echohusk loses all feats possessed by the base creature, and doesn't gain feats as its Hit Dice increase.</p>
<p><strong className="hl">Special Qualities:</strong> An echohusk loses most special qualities of the base creature, but it retains any extraordinary special qualities that improve its melee or ranged attacks. An echohusk gains the following special qualities.</p>
<blockquote>
<p><strong>Psychic Servitude (Su):</strong> Echohusks are animated not by typical necromantic energies, but rather by the mental energies of a powerful psychic creature. They cannot be commanded or created by <Link to="/spell/animate_dead">animate dead</Link>, <Link to="/spell/command_undead">command undead</Link>, <Link to="/spell/control_undead">control undead</Link>, and similar necromancy spells and effects. However, any creature that creates an echohusk with its psychic attacks can command that echohusk as if it had animated it using the <em>animate dead</em> spell (up to 4 HD of echohusks per HD of the animating creature, and no one echohusk can possess more than twice the HD of the animating creature). Echohusks under a creature's control don't count against the number of other undead that the creature can control with the <em>animate dead</em> spell, the <Link to="/feat/command_undead">Command Undead</Link> feat, or other similar effects.</p>
<p><strong>Shattered Psyche (Ex):</strong> Psychic attacks that are powerful enough to destroy minds leave behind a powerful but unstable force that lashes out at those nearby. When an echohusk takes damage from a melee attack, a ranged attack from within 30 feet, or a psychic spell or effect from any distance, the creature that initiated the attack must succeed at a Will saving throw (DC = 10 + 1/2 the echohusk's Hit Dice + the echohusk's Charisma modifier) or take 1 point of <Link to="/rule/charisma_damage">Charisma damage</Link> and be <Link to="/misc/dazed">dazed</Link> for 1 round as the psychic energies in the echohusk shatter once more.</p>
</blockquote>
</>};
const _ectoplasmic = {title: "Ectoplasmic", jsx: <><div style={{clear:"both"}}></div><Header full><span>Ectoplasmic</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_4">Bestiary 4 pg. 83</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Drawn from energies of the <Link to="/rule/ethereal_plane">Ethereal Plane</Link>, ectoplasm is a vile substance resembling thick tangles of slimy linen or dripping goo. It shapes itself into the form of an <Link to="/type/undead">undead</Link> creature, creating a host for a soul unfortunate enough to be confined within it. The existence of an ectoplasmic being is a cruel one, and few souls willingly choose this painful form of undeath.</p>
<p>An ectoplasmic creature is approximately the same size as the body it inhabited in life, though it weighs nearly twice as much, as the ropes of undead matter that compose its body are significantly heavier than most living flesh.</p>
<p>Even more so than most undead beings, creatures born of ectoplasm live hateful existences, filled with nothing but a lust for destruction and suffering. They have no bodily needs and require no sustenance; the only thing an ectoplasmic creature feeds upon is its own hatred of the living.</p>
<p>Once a spirit has passed to the afterlife, it seldom wishes to return at all, let alone in a disfigured ectoplasmic body. Spirits that aren't powerful enough to come back as <Link to="/template/ghost">ghosts</Link> or <Link to="/monster/spectre">spectres</Link> sometimes return as ectoplasmic monsters, particularly when there are no remains of the creature's original body for its soul to inhabit in the form of a <Link to="/template/skeleton">skeleton</Link> or <Link to="/template/zombie">zombie</Link>. Sometimes, ghosts and other strong undead purposefully draw upon ectoplasm from the ethereal realm, yearning for even more power in their ectoplasmic hosts.</p>
<p>Those who suffer this sorrowful fate, by misfortune or choice, are usually stuck in their ectoplasmic prisons until death grants them sweet release from this unlife. The transition from death to ectoplasmic undeath is a torturous ordeal, as is retaining the horrid form into which the creature is reborn. Often, this persistent agony drives these beings beyond mad, creating within an insatiable rage akin to that experienced by frustrated ghosts and other haunted souls.</p>
<p>An ectoplasmic creature's burning desperation and embitterment often pushes it toward violence: most such beings fling themselves into battle willingly, killing to satiate their natural hunger for the suffering of others, while simultaneously hoping to be killed and thus freed of their own suffering.</p>
<p>Whenever in contact with surfaces (including walls they pass through), ectoplasmic creatures leave a trail of a silvery substance that resembles a slug's mucus - a trait almost exclusive to these undead. This slippery secretion dries within moments, so if its encountered, there is surely such a creature lurking nearby.</p>
<p>Ectoplasmic beings can inhabit any location, regardless of environment or climate. The horrors tend to prowl the areas in which they died, and rarely venture outside these areas, as though they were anchored there.</p>
<p>Though these entities rarely coordinate complicated actions with others of their kind, they seem to do so unintentionally at times. Their unnatural strength makes ectoplasmic creatures formidable combatants, which those not familiar with fighting ectoplasmic creatures would expect by looking at them. Fortunately for the wary, the sticky ectoplasm that trails behind these undead monsters is a clear indicator of their presence, and most experienced <Link to="/class/cleric">clerics</Link> can identify the substance at a glance.</p>
<p>"Ectoplasmic" is an acquired template that can be added to any corporeal creature (other than an undead), referred to hereafter as the base creature.</p>
<p><strong className="hl">CR:</strong> Same as the base creature +1.</p>
<p><strong className="hl">Alignment:</strong> Usually chaotic evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to undead. It retains any subtype except for alignment subtypes (such as <Link to="/subtype/evil">evil</Link>) and subtypes that indicate kind (such as <Link to="/subtype/giant">giant</Link>). It does not gain the <Link to="/subtype/augmented">augmented</Link> subtype. It uses all the base creature's statistics and special abilities except as noted in the following sections.</p>
<p><strong className="hl">AC:</strong> The creature's natural armor bonus changes as follows:</p>
<ScrollContainer id="template-ectoplasmic--table-0"><table>
<thead>
<tr>
<th>Ectoplasm Size</th>
<th>Natural Armor Bonus</th>
</tr>
</thead>
<tbody><tr>
<td>Tiny or smaller</td>
<td>+0</td>
</tr>
<tr>
<td>Small</td>
<td>+1</td>
</tr>
<tr>
<td>Medium</td>
<td>+2</td>
</tr>
<tr>
<td>Large</td>
<td>+3</td>
</tr>
<tr>
<td>Huge</td>
<td>+4</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>+6</td>
</tr>
<tr>
<td>Colossal</td>
<td>+8</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Hit Dice:</strong> Drop HD gained from class levels (to a minimum of 1 HD) and change racial Hit Dice to d8s. Ectoplasmic creatures use their Charisma modifiers to determine bonus hit points (instead of Constitution).</p>
<p><strong className="hl">Saves:</strong> Base save bonuses for racial Hit Dice are Fort +1/3 HD, Ref +1/3 HD, and Will +1/2 HD + 2.</p>
<p><strong className="hl">Defensive Abilities:</strong> An ectoplasmic creature loses the base creature's defensive abilities, and gains DR 5/slashing as well as all of the standard immunities and traits possessed by undead creatures.</p>
<p><strong className="hl">Speed:</strong> Winged ectoplasmic creatures can still fly, but their maneuverability drops to poor if it was initially any better. If the base creature flew magically, so can the ectoplasmic creature. Retain all other movement types. An ectoplasmic creature gains the ability to traverse the air (as the <Link to="/spell/air_walk">air walk</Link> spell) as a constant effect.</p>
<p><strong className="hl">Attacks:</strong> An ectoplasmic creature retains all natural weapons of the base creature. It gains a <Link to="/umr/slam_attack">slam attack</Link> that deals damage based on the ectoplasmic creature's size.</p>
<p><strong className="hl">Special Attacks:</strong> An ectoplasmic creature retains all of the special attacks of the base creature. In addition, an ectoplasmic creature gains the following special attack.</p>
<blockquote>
<p><strong>Horrifying Ooze (Su):</strong> Any creature struck by an ectoplasmic creature's slam attack must succeed at a Will save (DC = 10 + 1/2 the ectoplasmic creature's Hit Dice + the ectoplasmic creature's Charisma modifier) or be <Link to="/misc/shaken">shaken</Link> for 1d4 rounds.</p>
</blockquote>
<p><strong className="hl">Abilities:</strong> An ectoplasmic creature receives a +2 bonus to Strength and a +2 bonus to Charisma. An ectoplasmic creature has no Constitution or Intelligence score, and its Wisdom score becomes 10.</p>
<p><strong className="hl">BAB:</strong> An ectoplasmic creature's base attack bonus is equal to 3/4 its Hit Dice.</p>
<p><strong className="hl">Feats:</strong> An ectoplasmic creature loses all feats possessed by the base creature, and gains <Link to="/feat/toughness">Toughness</Link> as a bonus feat.</p>
<p><strong className="hl">Special Abilities:</strong> An ectoplasmic creature loses most special qualities of the base creature. It retains any extraordinary special qualities that improve its melee or ranged attacks. An ectoplasmic creature gains the following special ability:</p>
<blockquote>
<p><strong>Phase Lurch (Su):</strong> An ectoplasmic creature has the ability to pass through walls or material obstacles. In order to use this ability, the ectoplasmic creature must begin and end its turn outside of whatever wall or obstacle it's moving through. An ectoplasmic creature cannot move through corporeal creatures with this ability, and its movement speed is halved while moving through a wall or obstacle. Any surface it moves through is coated with a thin, silvery mucus that lingers for 1 minute.</p>
</blockquote>
</>};
const _elemental_infused_creature = {title: "Elemental-Infused Creature", jsx: <><div style={{clear:"both"}}></div><Header full><span>Elemental-Infused Creature</span><span>CR +1 or +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/planes_of_power">Planes of Power pg. 56</Link><br/><strong>Acquired/Inherited Template</strong> Both<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Sometimes unpredictable elemental events cause planar energies to infuse mundane creatures with otherworldly power, transforming them into element-infused creatures.</p>
<p>"Element-infused" is an inherited or acquired template that can be added to any living, corporeal creature. An element-infused creature retains the base creature's statistics and special abilities except as noted here. An element-infused creature has a strong connection to one or two of the elemental planes. Unlike most templates, the element-infused template grants few universal abilities; rather, it grants the creature a choice of several different defensive, offensive, and movement-based abilities that match its particular element or elements. In this way, not all water-infused creatures are necessarily identical. In order to select an ability, at least one of an element-infused creature's elements must match one of those listed in parentheses after the ability's name. For abilities that reference an energy type, the energy type chosen must be associated with one of the creature's elements: acid (earth), cold (water), electricity (air), or fire (fire).</p>
<p>An element-infused creature can select a number of movement abilities (see the Speed section), defensive abilities, and offensive abilities (see the Special Attacks section) based on its Hit Dice, as shown in the chart below. In addition, an element-infused creature with 4 or more Hit Dice gains one or more bonus abilities that it can use to select additional abilities from any of these three categories. A creature infused with only one element gains one additional bonus ability.</p>
<ScrollContainer id="template-elemental_infused_creature--table-0"><table>
<thead>
<tr>
<th>HD</th>
<th>Movement</th>
<th>Defensive</th>
<th>Offensive</th>
<th>Bonus</th>
</tr>
</thead>
<tbody><tr>
<td>1-3</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>4-6</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>7-9</td>
<td>1</td>
<td>2</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>10-12</td>
<td>1</td>
<td>2</td>
<td>1</td>
<td>2</td>
</tr>
<tr>
<td>13-15</td>
<td>1</td>
<td>2</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>16-18</td>
<td>1</td>
<td>2</td>
<td>2</td>
<td>3</td>
</tr>
<tr>
<td>19+</td>
<td>1</td>
<td>3</td>
<td>2</td>
<td>3</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">CR:</strong> If 9 HD or fewer, base creature's CR + 1; if 10 HD or more, base creature's + 2.</p>
<p><strong className="hl">Type:</strong> The creature's type chances to <Link to="/type/outsider">outsider</Link> (<Link to="/subtype/native">native</Link>). In addition, the creature gains the <Link to="/subtype/air">air</Link>, <Link to="/subtype/earth">earth</Link>, <Link to="/subtype/fire">fire</Link>, or <Link to="/subtype/water">water</Link> subtypes corresponding to its element or elements. Do not recalculate HD, BAB, or saves.</p>
<p><strong className="hl">Senses:</strong> An element-infused creature gains darkvision with a range of up to 60 feet.</p>
<p><strong className="hl">Defensive Abilities:</strong> An element-infused creature can choose one or more of the following extraordinary abilities.</p>
<blockquote>
<p><strong>Damage Reduction (any):</strong> The creature gains DR 2/-. If the creature has 10 or more HD, this ability can be selected one additional time, increasing the damage reduction to 5/-.</p>
<p><strong>Energy Immunity (any):</strong> The creature gains <Link to="/umr/immunity">immunity</Link> to one of its associated energy types, chosen when it gains this ability. The creature must already have energy resistance 10 or higher for that energy in order to select this ability.</p>
<p><strong>Energy Resistance (any):</strong> The creature ignores the first 10 points of damage that it takes from one of its associated energy types, chosen when it gains this ability. A fire-infused creature that selects this ability also ignores the damage dealt by the fire-dominant <Link to="/rule/planar_traits">planar trait</Link>.</p>
<p><strong>Evasion (air or fire):</strong> The creature gains the ability to avoid damage as if it had the <Link to="/ability/evasion">evasion</Link> rogue class ability.</p>
<p><strong>Fiery Blood (fire):</strong> Anyone who damages the creature with a slashing or piercing melee weapon is sprayed with boiling blood that deals 1d4 points of fire damage. This damage increases by 1d4 for every 5 HD the creature has. Creatures using <Link to="/misc/reach">reach</Link> weapons are not subject to this damage.</p>
<p><strong>Fortification (any):</strong> The creature has a 50% chance to negate a critical hit or <Link to="/ability/sneak_attack">sneak attack</Link>, taking only the normal amount of damage from the attack.</p>
<p><strong>Improved Natural Armor (earth):</strong> The creature's natural armor bonus improves by 2. If the creature has 10 or more HD, this bonus increases to 3.</p>
<p><strong>Indistinct Form (air or water):</strong> The creature benefits from a 20% miss chance as if it had <Link to="/rule/concealment">concealment</Link>.</p>
<p><strong>Stability (earth or water):</strong> The creature receives a +4 racial bonus to its CMD when resisting <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/drag">drag</Link>, <Link to="/rule/overrun">overrun</Link>, or <Link to="/rule/trip">trip</Link> combat maneuvers.</p>
</blockquote>
<p><strong className="hl">Speed:</strong> An element-infused creature can choose one or more of the following abilities. Except where noted, these are extraordinary abilities.</p>
<blockquote>
<p><strong>Burrow (earth):</strong> The creature gains a burrow speed equal to half its highest speed. Tunnels it creates always collapse behind it and never leave behind a usable passage.</p>
<p><strong>Earth Glide (earth):</strong> The creature gains the earth glide ability of an <Link to="/monster/earth_elemental">earth elemental</Link>, though it can use this ability for only 1 minute per HD it has. This duration does not need to be consecutive, but it must be spent in 1-minute increments. The creature must have a burrow speed in order to use this ability. It can select this ability a second time in order to use this power at will.</p>
<p><strong>Flight (air):</strong> The creature gains a fly speed equal to its highest speed with average maneuverability (maximum fly speed of 10 feet per HD).</p>
<p><strong>Improved Quickness (Su, fire):</strong> Three times per day as a swift action, the creature can take an extra move action. The creature must already have quickness to select this ability.</p>
<p><strong>Puddle Form (Su, water):</strong> Once per day, the creature can turn into an animate puddle of water for up to 10 minutes. This functions as <Link to="/spell/gaseous_form">gaseous form</Link>, but the creature instead has both a base speed and swim speed of 10 feet.</p>
<p><strong>Quickness (fire):</strong> The creature's base movement speed increases by 10, and it gains a +1 bonus on initiative checks. For every 5 HD the creature has, its base speed increases by an additional 10 feet (maximum = double its base speed), and its initiative bonus increases by 1 (maximum +5).</p>
<p><strong>Swim (water):</strong> The creature gains a swim speed equal to its highest speed (maximum 100 feet). The creature also gains the <Link to="/umr/amphibious">amphibious</Link> quality and <Link to="/subtype/aquatic">aquatic</Link> subtype.</p>
</blockquote>
<p><strong className="hl">Special Attacks:</strong> An element-infused creature can choose one or more of the following abilities.</p>
<blockquote>
<p><strong>Breath Weapon (Su, any):</strong> The creature gains a <Link to="/umr/breath_weapon">breath weapon</Link> (15-foot cone or 30-foot line) that it can use as a standard action once every minute. The breath weapon deals 1d6 points of damage of one of its associated energy types (Reflex half, DC = 10 + 1/2 creature's HD + Con modifier). The damage increases by 1d6 for every 3 HD the creature has. If the creature has 10 or more HD, the size of the breath weapon doubles.</p>
<p><strong>Burn (Ex, fire):</strong> The creature can set creatures it strikes on fire, as per the <Link to="/umr/burn">burn</Link> ability, though only with attacks augmented by its energy attacks ability.</p>
<p><strong>Energy Attacks (Ex, any):</strong> One of the creature's natural attacks deals an additional 1d6 points of its corresponding energy's damage, selected when the creature gains this ability. This damage increases by 1d6 for every 10 HD the creature has. An element-infused creature can select this ability multiple times, applying its benefits to an additional two natural attacks each time.</p>
<p><strong>Gusting Strike (Ex, air):</strong> Once per round when the creature hits with a melee attack, it can attempt a <Link to="/rule/bull_rush">bull rush</Link> combat maneuver check against the target of its melee attack as a free action. This bull rush does not provoke an attack of opportunity.</p>
<p><strong>Toppling Strike (Ex, earth or water):</strong> The element-infused creature gains the <Link to="/rule/trip">trip</Link> special ability with one of its natural attacks.</p>
</blockquote>
<p><strong className="hl">Abilities:</strong> An element-infused creature gains a +4 bonus to two ability scores of its choice, a +2 bonus to two other ability scores of its choice, and a -2 penalty to one ability score of its choice.</p>
<p><strong className="hl">Skills:</strong> An element-infused creature with racial Hit Dice has a number of skill points per racial Hit Die equal to 6 + Intelligence mod. Racial class skills are unchanged, and class level skill ranks are unaffected.</p>
<p><strong className="hl">Languages:</strong> The creature gains an elemental language or languages associated with its elemental type as long as it has an Intelligence score of 3 or higher: Aquan (water), Auran (air), Ignan (fire), or Terran (earth). If the base creature is unable to speak, it can instead understand the acquired languages.</p>
</>};
const _energized = {title: "Energized", jsx: <><div style={{clear:"both"}}></div><Header full><span>Energized</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/construct_handbook">Construct Handbook pg. 38</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Most golems are animated by an elemental spirit bound within a constructed body, but some creators build their golems with a greater purpose in mind. An energized golem is infused with the raw elemental energy of the elemental spirit used to animate it, granting it increased strength and agility and a host of supernatural powers.</p>
<p>"Energized" is an acquired template that can be added to any <Link to="/family/golem">golem</Link> (referred to hereafter as the base creature). An energized golem uses all the base creature's statistics and special abilities except as noted here. Save DCs are equal to 10 + half the energized golem's Hit Dice + the energized golem's Constitution modifier.</p>
<p><strong className="hl">CR:</strong> Base creature's CR + 2.</p>
<p><strong className="hl">Aura (Su):</strong> An energized golem radiates one of the elemental energy auras described below. All creatures within 5 feet of the energized golem take 1d6 points of energy damage at the beginning of the golem's turn. Each type of elemental aura generates an additional effect within this range, as is described below. For every 10 Hit Dice the energized golem has, the range of the aura extends by 5 feet and it deals an additional 1d6 points of energy damage. The type of energy damage and any additional effects of the aura are determined by the elemental overcharge special quality.</p>
<blockquote>
<p><strong>Blizzard:</strong> The frigid temperatures surrounding the energized golem deal an additional amount of nonlethal damage equal to the damage dice of its elemental aura to all creatures within range each round. A creature can attempt a Fortitude save to negate this additional nonlethal damage. Creatures that take any amount of nonlethal damage from this effect are <Link to="/misc/fatigued">fatigued</Link>. If a target is already fatigued, it is instead <Link to="/misc/exhausted">exhausted</Link>. The fatigued or exhaustion condition persists until the creature recovers from the nonlethal damage.</p>
<p><strong>Caustic Mist:</strong> A poisonous miasma emanates from the energized golem, afflicting those within range each round with a deadly toxin that rapidly destroys flesh, muscle, and organs alike.</p>
<div className="sideNoteWrap"><ScrollContainer id="template-energized--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th colSpan={4} scope="col" className="title">Miasma</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Aura-inhaled</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1 <Link to="/rule/str_damage">Str damage</Link>, 1 Dex damage and 1 Con damage</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>2 saves</td></tr></tbody></table></ScrollContainer></div><p><strong>Immolation:</strong> The extreme heat surrounding the energized golem causes each creature and unattended object within range to catch fire unless it succeeds at a Reflex save. Each affected creature or item takes an additional amount of fire damage equal to the number of damage dice for the energized golem's elemental aura immediately and each round thereafter as long as it remains within the aura. A creature or object that has caught on fire but moves outside of the aura instead takes 1d6 points of fire damage each round and can attempt another Reflex save each round to extinguish the flames.</p>
<p><strong>Swirling Winds:</strong> Powerful winds surround the energized golem, buffeting creatures within range and dealing an additional amount of bludgeoning damage equal to the damage dice of its elemental aura. These winds otherwise function as a <Link to="/spell/gust_of_wind">gust of wind</Link> spell. An affected creature can attempt a Reflex save to negate this additional damage, but a successful Fortitude save is required to negate the <em>gust of wind</em> effect. If the energized golem has 10 or more Hit Dice, the DC of Fly or Strength checks to resist the effects of the winds increases by 5.</p>
</blockquote>
<p><strong className="hl">AC:</strong> Natural armor improves by 3.</p>
<p><strong className="hl">Hit Points:</strong> An energized golem receives double the bonus hit points based on its size granted by the <Link to="/type/construct">construct</Link> creature type.</p>
<p><strong className="hl">Defensive Abilities:</strong> An energized golem's body is infused with elemental energy, granting it immunity to a single energy type. Refer to the elemental overcharge special quality below.</p>
<p><strong className="hl">Special Attacks:</strong> An energized golem retains all of the base creature's special abilities and gains the following special attack.</p>
<blockquote>
<p><strong>Energy Discharge (Su):</strong> Once per hour, an energized golem can discharge a pulse of energy from its body as a standard action, affecting all targets within a 20-foot <Link to="/misc/burst">burst</Link>. This burst deals 1d8 points of energy damage for every 2 Hit Dice the energized golem has (Reflex half). Each creature damaged by this ability must succeed at a second saving throw or suffer an additional effect. The type of energy damage, the additional effect, and the type of save to avoid this additional effect are determined by the elemental overcharge special quality.</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> An energized golem gains ability scores based on the base creature's Hit Dice and the type of elemental spirit used in its creation. If the elemental spirit used is an air or fire elemental spirit, the energized golem gains a +2 bonus to Strength and +4 bonus to Dexterity. If the elemental spirit used is an earth or water elemental spirit, the energized golem gains a +4 bonus to Strength and +2 bonus to Dexterity. If the base creature has 10 or more Hit Dice, these ability score bonuses increase to +8 and +4.</p>
<p><strong className="hl">Special Qualities:</strong> An energized golem retains all of the base creature's special qualities and gains the following special quality.</p>
<blockquote>
<p><strong>Elemental Overcharge (Su):</strong> An energized golem is augmented by the elemental spirit that is bound to it during its creation. Its natural attacks deal 1d6 points of energy damage for every 6 Hit Dice the golem has. The type of damage dealt, the golem's immunity, and its aura are based on the elemental spirit bound to the golem during its creation, as listed on the table below.</p>
<ScrollContainer id="template-energized--table-1"><table>
<thead>
<tr>
<th>Elemental</th>
<th>Energy</th>
<th>Aura</th>
<th>Discharge Effect (Saving Throw Type)</th>
</tr>
</thead>
<tbody><tr>
<td>Air</td>
<td>Electricity</td>
<td>Swirling winds</td>
<td><Link to="/misc/stunned">Stunned</Link> for 1 round (Fortitude)</td>
</tr>
<tr>
<td>Earth</td>
<td>Acid</td>
<td>Caustic mist</td>
<td>Acid clings to targets, dealing half damage next round (Reflex)</td>
</tr>
<tr>
<td>Fire</td>
<td>Fire</td>
<td>Immolation</td>
<td>Knocked <Link to="/rule/prone">prone</Link> (Fortitude)</td>
</tr>
<tr>
<td>Water</td>
<td>Cold</td>
<td>Blizzard</td>
<td><Link to="/rule/entangled">Entangled</Link> for 1d4+1 rounds (Reflex)</td>
</tr>
</tbody></table></ScrollContainer>
</blockquote>
<h3 id="template-energized-construction">Construction</h3>
<p>An energized golem's body must be magically reinforced to withstand the raw energy of the elemental to be sealed within it, costing an additional 25,000 gp above the base golem's cost. All <Link to="/skill/craft">Craft</Link> check DCs to create the golem are increased by 5, and the minimum caster level requirements are 2 higher than normal. In addition, the following spells are added to the base golem's requirements: any <Link to="/spell/magic_circle">magic circle</Link> spell and <Link to="/spell/planar_binding">planar binding</Link>.</p>
</>};
const _enlightened_construct = {title: "Enlightened Construct", jsx: <><div style={{clear:"both"}}></div><Header full><span>Enlightened Construct</span><span>CR +1, +2, or +3</span></Header>
<p><strong>Sources</strong> <Link to="/source/construct_handbook">Construct Handbook pg. 40</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Infused with powerful psychic energy, enlightened constructs have access to strange and deadly mental powers. Highly intelligent and secretive, these constructs typically serve as henchmen to powerful psychics or sorcerous cabals.</p>
<p>"Enlightened construct" is an acquired template that can be added to any <Link to="/type/construct">construct</Link>, referred to hereafter as the base creature. An enlightened construct retains all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> If the base creature had 4 or fewer HD, base creature's CR + 1; HD 5-10, base creature's CR + 2; HD 11 or more, base creature's CR + 3.</p>
<p><strong className="hl">Alignment:</strong> An enlightened construct's alignment is no more than one step away from that of its creator.</p>
<p><strong className="hl">Type:</strong> An enlightened construct gains the <Link to="/subtype/augmented">augmented</Link> subtype.</p>
<p><strong className="hl">Senses:</strong> An enlightened construct gains <Link to="/umr/lifesense">lifesense</Link> out to 60 feet.</p>
<p><strong className="hl">Weaknesses:</strong> An enlightened construct gains the following weakness.</p>
<blockquote>
<p><strong>Susceptible to Mind-Affecting Effects (Ex):</strong> An enlightened construct is susceptible to mind-affecting effects, even though it is a construct. Although they can be magically charmed or compelled, enlightened constructs are particularly resistant to enchantments and receive a +4 bonus on Will saves to resist these effects.</p>
</blockquote>
<p><strong className="hl">Special Attacks:</strong> An enlightened construct gains the following special abilities.</p>
<blockquote>
<p><strong>Mind Thrust (Sp):</strong> An enlightened construct can use <em>mind thrust</em> as a spell-like ability a number of times per day equal to 2 + the enlightened construct's Intelligence modifier. The version of <em>mind thrust</em> available to an enlightened construct is determined by its Hit Dice: HD Spell</p>
<ScrollContainer id="template-enlightened_construct--table-0"><table>
<thead>
<tr>
<th>HD</th>
<th>Spell</th>
</tr>
</thead>
<tbody><tr>
<td>1-2</td>
<td><Link to="/spell/mind_thrust_i">Mind thrust I</Link></td>
</tr>
<tr>
<td>3-4</td>
<td><Link to="/spell/mind_thrust_ii">Mind thrust II</Link></td>
</tr>
<tr>
<td>5-7</td>
<td><Link to="/spell/mind_thrust_iii">Mind thrust III</Link></td>
</tr>
<tr>
<td>8-10</td>
<td><Link to="/spell/mind_thrust_iv">Mind thrust IV</Link></td>
</tr>
<tr>
<td>11-15</td>
<td><Link to="/spell/mind_thrust_v">Mind thrust V</Link></td>
</tr>
<tr>
<td>16-20</td>
<td><Link to="/spell/mind_thrust_vi">Mind thrust VI</Link></td>
</tr>
</tbody></table></ScrollContainer>
</blockquote>
<p><strong className="hl">Spell-Like Abilities (Sp):</strong> An enlightened construct gains a number of spell-like abilities set by its Hit Dice. It gains the spell-like abilities listed in the entry for its Hit Dice on the table below, as well as all listed spell-like abilities for prior entries. Unless otherwise noted, each ability is usable 1/day. The caster level for these abilities is equal to the enlightened construct's Hit Dice (or the caster level of the base construct's spell-like abilities, whichever is higher). The DC for a saving throw against the enlightened construct's spell-like ability is equal to 10 + the spell's level + the enlightened construct's Intelligence modifier.</p>
<ScrollContainer id="template-enlightened_construct--table-1"><table>
<thead>
<tr>
<th>HD</th>
<th>Spell-Like Abilities</th>
</tr>
</thead>
<tbody><tr>
<td>1-2</td>
<td><Link to="/spell/mindlink">Mindlink</Link> 3/day</td>
</tr>
<tr>
<td>3-4</td>
<td><Link to="/spell/mental_block">Mental block</Link></td>
</tr>
<tr>
<td>5-6</td>
<td><Link to="/spell/mind_probe">Mind probe</Link> 3/day</td>
</tr>
<tr>
<td>7-8</td>
<td><Link to="/spell/telekinesis">Telekinesis</Link> 3/day</td>
</tr>
<tr>
<td>9-10</td>
<td><Link to="/spell/dimensional_lock">Dimensional lock</Link> 3/day</td>
</tr>
<tr>
<td>11-12</td>
<td><Link to="/spell/dimension_door">Dimension door</Link> 3/day</td>
</tr>
<tr>
<td>13-14</td>
<td><Link to="/spell/mass_synesthesia">Mass synesthesia</Link></td>
</tr>
<tr>
<td>15-16</td>
<td><Link to="/spell/antimagic_field">Antimagic field</Link></td>
</tr>
<tr>
<td>17-18</td>
<td><Link to="/spell/telekinetic_storm">Telekinetic storm</Link></td>
</tr>
<tr>
<td>19-20</td>
<td><Link to="/spell/power_word_kill">Power word kill</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Ability Scores:</strong> If the base creature had an Intelligence score of 9 or less, roll 2d6+4 to determine the enlightened construct's new Intelligence score. If the base creature had an Intelligence score of 10 or greater, increase its Intelligence score by 6. Additionally, increase the enlightened construct's Charisma score by 2d6.</p>
<p><strong className="hl">Feats:</strong> Since it has an Intelligence score, an enlightened construct gains feats as normal for a creature of its Hit Dice.</p>
<p><strong className="hl">Skills:</strong> An enlightened construct gains skill points according to its new Intelligence score, which are assigned appropriately for its function, as determined by the GM.</p>
<p><strong className="hl">Languages:</strong> An enlightened construct speaks one language that its creator spoke, plus a number of additional <Link to="/misc/languages">languages</Link> that its creator knew equal to the enlightened construct's Intelligence bonus (if any). The enlightened construct can also communicate by telepathy up to a range of 100 feet.</p>
<p><strong className="hl">Special Qualities:</strong> An enlightened construct gains the following special qualities.</p>
<blockquote>
<p><strong>Artificial Soul (Su):</strong> Though not the true soul of a living creature, the enlightened construct's artificial soul provides it with a unique personality and a spark of sentience. Unlike most constructs, the enlightened construct is not immune to necromantic effects. Enlightened constructs are still immune to death effects and they cannot be <em>raised</em> or <em>resurrected.</em> Enlightened construct <Link to="/family/golem">golems</Link> are still immune to magic as described in their entries.</p>
<p><strong>Phrenic Stone (Su):</strong> An enlightened construct has a stone infused with supernatural mental energy embedded into its head or chest that is the source of its awakened intellect. If an enlightened construct is destroyed but this phrenic stone remains intact, it can be used to create another enlightened construct, using the same cost as augmenting a new enlightened construct (see Construction below). When a phrenic stone is used to create a new enlightened construct, the personality and memories of the previous enlightened construct are lost. A phrenic stone has hardness 10, 20 hit points, and a break DC of 30.</p>
</blockquote>
<h3 id="template-enlightened_construct-construction">Construction</h3>
<p>An enlightened construct's phrenic stone and materials cost an additional 60,000 gp above the base creature's cost. The construct's master can assemble the body or hire someone else to do the job. The DC of the <Link to="/skill/craft">Craft</Link> check required to create the body is 10 higher than normal for the base creature. After the body is created, the enlightened construct is animated through a magical ritual that requires a specially prepared laboratory or workroom that costs 1,000 gp to establish. The ritual takes 8 hours to complete. If the creator is personally constructing the construct's body, the construction and the ritual can be performed simultaneously. The creator must have a minimum caster level 4 higher than the base construct's minimum required caster level. In addition, the following spells must be cast during the ritual: <Link to="/spell/awaken_construct">awaken construct</Link>, <Link to="/spell/eagles_splendor">eagle's splendor</Link>, <Link to="/spell/greater_possession">greater possession</Link>, and <Link to="/spell/wish">wish</Link>.</p>
</>};
const _entothrope = {hasJL:true,title: "Entothrope", jsx: <><div className="jumpList" id="template-entothrope-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="template-entothrope-entothropy">Entothropy</InnerLink></li><li><InnerLink toTop to="template-entothrope-entothropic-player-characters">Entothropic Player Characters</InnerLink></li><li><InnerLink toTop to="template-entothrope-weremantis">Weremantis</InnerLink></li><li><InnerLink toTop to="template-entothrope-werespider">Werespider</InnerLink></li><li><InnerLink toTop to="template-entothrope-werewasp">Werewasp</InnerLink></li></ul></div><div style={{clear:"both"}}></div><Header full><span>Entothrope</span><span>CR +1 (see text)</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 116</Link><br/><strong>Acquired/Inherited Template</strong> Both<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Entothropes are <Link to="/type/humanoid">humanoids</Link> with the ability to turn into large insects and insect-humanoid hybrids.</p>
<p>"Entothrope" is an inherited (for natural entothropes) or acquired (for afflicted entothropes) template that can be added to any humanoid.</p>
<p><strong className="hl">CR:</strong> Base humanoid's or base vermin's CR (whichever is higher) + 1.</p>
<p><strong className="hl">Size and Type:</strong> The humanoid (referred to as the base creature) gains the <Link to="/subtype/shapechanger">shapechanger</Link> subtype. The entothrope takes on the characteristics of a type of <Link to="/type/vermin">vermin</Link> (referred to as the base vermin) within one size category of the base creature's size. An entothrope's hybrid form is the same size as the base creature or base vermin, whichever is larger.</p>
<p><strong className="hl">AC:</strong> In hybrid or vermin form, the entothrope uses the base vermin's natural armor bonus or gains a +2 natural armor bonus, whichever is higher.</p>
<p><strong className="hl">Defensive Abilities:</strong> A natural entothrope gains DR 10/silver in hybrid or vermin form. An afflicted entothrope gains DR 5/silver in hybrid or vermin form.</p>
<p><strong className="hl">Speed:</strong> Same as the base creature's or base vermin's speed, depending on which form the entothrope is using. Hybrids use the base creature's speed, unless the entothrope has a CR of 5 or higher, in which case it gains all of the base vermin's additional speeds (such as a climb or fly speed) in hybrid form.</p>
<p><strong className="hl">Melee:</strong> An entothrope gains natural attacks in hybrid and vermin forms according to the base vermin.</p>
<p><strong className="hl">Special Abilities:</strong> An entothrope retains all the special attacks, qualities, and abilities of the base creature. In hybrid or vermin form, it gains the special attacks, qualities, and abilities of the base vermin. An entothrope also gains darkvision 60 feet and the following abilities.</p>
<blockquote>
<p><strong>Change Shape (Su):</strong> All entothropes have three forms - a humanoid form, a vermin form, and a hybrid form. Equipment doesn't meld with the new form between humanoid and hybrid form, but does between those forms and vermin form. A natural entothrope can shift into any of its three alternate forms as a move action. An afflicted entothrope can assume vermin or hybrid form as a full-round action by succeeding at a DC 15 Constitution check, or humanoid form as a full-round action by succeeding at a DC 20 Constitution check. On nights when the moon is new, an afflicted entothrope gains a +5 morale bonus on Constitution checks to assume hybrid or vermin form, but a -5 penalty on Constitution checks to assume humanoid form. An afflicted entothrope reverts to its humanoid form automatically with the next sunrise, or after 8 hours of rest, whichever comes first. A slain entothrope reverts to its humanoid form, although it remains dead.</p>
<p><strong>Curse of Entothropy (Su):</strong> A natural entothrope's bite or sting attack in hybrid or vermin form infects a humanoid target with entothropy (Fortitude DC 15 negates). If the victim's size is not within one size category of the entothrope, this ability has no effect.</p>
<p><strong>Entothropic Empathy (Ex):</strong> In any form, natural entothropes can communicate with vermin related to their vermin forms, even though most vermin are mindless. Entothropes can attempt <Link to="/skill/diplomacy">Diplomacy</Link> checks to alter such a creature's attitude, and when doing so gain a +4 racial bonus on the check. This act implants the vermin with a modicum of intelligence, allowing the entothrope to train these vermin or otherwise use them as effective allies. Afflicted entothropes gain this ability only in hybrid or insect form.</p>
<p><strong>Insect Mind (Ex):</strong> In human or hybrid form, an entothrope gains a +4 bonus on saves against mind-affecting effects.</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> Int -2 and Wis +2 in all forms; Dex +2 and Con +2 in hybrid and vermin forms. Entothropes are observant, but their minds work in inefficient ways. In addition to these adjustments to the base creature's stats, an entothrope's ability scores change when she assumes hybrid or insect form. In human form, the entothrope's ability scores are unchanged from the base creature's form. In hybrid and insect form, the entothrope's ability scores are the same as the base creature's or the base vermin's, whichever ability score is higher.</p>
<h3 id="template-entothrope-entothropy" data-hash-target>Entothropy</h3>
<p>A creature that catches entothropy shows no symptoms (and does not gain the template) until the night of the next new moon, when the victim involuntarily assumes vermin form and forgets her identity. The character remains in vermin form until the next dawn and remembers nothing about the entire episode (or subsequent episodes) unless she succeeds at a DC 20 Will save, in which case she becomes aware of his condition.</p>
<p>A <Link to="/spell/heal">heal</Link> or <Link to="/spell/remove_disease">remove disease</Link> spell cast by a cleric of 12th level or higher cures the affliction, provided the character receives the spell within 3 days of the infecting entothrope's attack. Alternatively, consuming a dose of <Link to="/eq-poison/belladonna">belladonna</Link> (but not wolfsbane) allows an afflicted entothrope to attempt a new Fortitude save to recover from entothropy.</p>
<h3 id="template-entothrope-entothropic-player-characters" data-hash-target>Entothropic Player Characters</h3>
<p>When a PC becomes an entothrope, you as the GM have a choice to make. In most cases, you should take control of the PC's actions whenever she is in hybrid or vermin form - entothropy shouldn't be a method to increase a PC's power, after all, and what an afflicted entothrope does while in hybrid or vermin form is often at odds with what the character would actually want.</p>
<h3 id="template-entothrope-weremantis" data-hash-target>Weremantis</h3>
<p>In humanoid form, natural weremantises are often tall and long-limbed. Many have pointy chins and brilliant green eyes that seem slightly too large for their faces. They tend to be solitary individuals, explaining their distant attitudes as a form of spirituality or piety. However, when they do make friends or take lovers, the relationships burn brightly for a short time. Eventually, though, the weremantises grow bored with the associations and end them in an equally dramatic manner, often through violent murders.</p>
<h3 id="template-entothrope-werespider" data-hash-target>Werespider</h3>
<p>In humanoid form, werespiders are squat, compact, and usually have short, dark brown or black hair. Their eyes tend to be large and dark, and their fingers almost constantly twitch. Their faces are often shiny with natural oils, and the chins of male werespiders are commonly covered in prickly black stubble. Werespiders enjoy the company of kin, having large families and even larger networks of friends and acquaintances. They like to pass information through these communities, creating a web of contacts that can sometimes stretch over several towns. Werespiders that like to sit at the centers of large organizations often employ non-entothrope informants and spies to be on the lookout for the information they desire, slipping feelers into all aspects of their communities.</p>
<p>Werespiders prefer not to fight by themselves. They are most comfortable when outnumbering their foes. When threatened, a lone werespider attempts to scuttle off to a safer location, usually one full of his allies. Such places are often filled with traps designed to immobilize or poison targets - sometimes both. When werespiders catch victims in these devices, they are quick to move the corpses out of the way and reset the traps, leaving the looting of the bodies for when they feel secure once again.</p>
<h3 id="template-entothrope-werewasp" data-hash-target>Werewasp</h3>
<p>Werewasps in humanoid form often have two-toned hair color and a faint, humming timbre in their voices.</p>
</>};
const _entropic = {title: "Entropic", jsx: <><div style={{clear:"both"}}></div><Header full><span>Entropic</span><span>CR +0 or +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_2">Bestiary 2 pg. 292</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> Yes</p>
<p>Creatures with the entropic template live in planes where chaos is paramount. They can be summoned using spells such as <Link to="/spell/summon_monster">summon monster</Link> and <Link to="/spell/planar_ally">planar ally</Link>. An entropic creature's CR increases by +1 only if the base creature has 5 or more HD. An entropic creature's quick and rebuild rules are the same.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Senses</strong> gains darkvision 60 ft.; <strong>Defensive Abilities</strong> gains DR and energy resistance as noted on the table; <strong>SR</strong> gains SR equal to new CR +5; <strong>Special Attacks</strong> smite law 1/day as a swift action (adds Cha bonus to attack rolls and damage bonus equal to HD against lawful foes; smite persists until the target is dead or the entropic creature rests).</p>
<h3 id="template-entropic-entropic-creature-defenses">Entropic Creature Defenses</h3>
<ScrollContainer id="template-entropic--table-0"><table>
<thead>
<tr>
<th>Hit Dice</th>
<th>Resist Acid and Fire</th>
<th>DR</th>
</tr>
</thead>
<tbody><tr>
<td>1-4</td>
<td>5</td>
<td>-</td>
</tr>
<tr>
<td>5-10</td>
<td>10</td>
<td>5/lawful</td>
</tr>
<tr>
<td>11+</td>
<td>15</td>
<td>10/lawful</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _eruphyte = {title: "Eruphyte", jsx: <><div style={{clear:"both"}}></div><Header full><span>Eruphyte</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/pathfinder_142_gardens_of_gallowspire">Pathfinder #142: Gardens of Gallowspire pg. 66</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>The <Link to="/rule/astral_plane">Astral Plane</Link>, the realm of thought and higher consciousness, hosts two vulnerable sources of information: astral bodies connected to spellcasters' physical forms by invisible silver cords, and souls bound for the Boneyard. When either vessel is disrupted or destroyed, there is a small chance that the victim's fragmented intellect will pass along a fraying silver cord or through a weakened planar barrier. Mixed with the Astral Plane's raw cognitive force, this tumultuous information vents into the Material Plane. For esoteric reasons not fully understood by scholars, sentient plants make ideal vessels for these proto-intellects, where they either instill a rudimentary mind in a formerly thoughtless plant or bolster existing mental capabilities. These eruphyte creatures become conduits for raw thought and vast stores of knowledge.</p>
<p>"Eruphyte" is an acquired template that can be added to any plant creature, referred to hereafter as the base creature. An eruphyte creature uses the base creature's statistics and abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> The base creature's CR + 1.</p>
<p><strong className="hl">Senses:</strong> An eruphyte creature gains the following sense.</p>
<blockquote>
<p><strong>Thoughtsense (Su):</strong> An eruphyte creature notices and locates living, conscious creatures within 60 feet as if it possessed the <Link to="/umr/blindsight">blindsight</Link> ability. Spells such as <Link to="/spell/nondetection">nondetection</Link> or <Link to="/spell/mind_blank">mind blank</Link> make a creature undetectable by this sense.</p>
</blockquote>
<p><strong className="hl">Special Attacks:</strong> An eruphyte creature gains the following special attack.</p>
<blockquote>
<p><strong>Thoughtspear (Su):</strong> Once per hour as a standard action, an eruphyte creature can direct a blast of disorienting mental energy at a creature within 120 feet. This attack deals 1d8 damage for every 2 Hit Dice the eruphyte creature has (rounded down, minimum 1d8), and the target cannot attempt <Link to="/skill/knowledge">Knowledge</Link> skill checks for 1 minute afterwards. A target that succeeds at a Will saving throw (DC = 10 + half the eruphyte creature's HD + its Intelligence modifier) reduces the damage by half and negates the skill disruption. This is a mind-affecting effect.</p>
</blockquote>
<p><strong className="hl">Languages:</strong> An eruphyte creature gains <Link to="/umr/telepathy">telepathy</Link> (60 ft.).</p>
<p><strong className="hl">Special Qualities:</strong> An eruphyte creature gains the bardic knowledge ability with an effective <Link to="/class/bard">bard</Link> level equal to half its HD, rounded down.</p>
<p><strong className="hl">Abilities:</strong> Int +6. An eruphyte creature gains feats and skill points according to its new Intelligence score. Eruphyte creatures typically receive feats that enhance their preexisting behavior patterns or enable new means of achieving the same goals. Eruphyte creatures with Intelligence scores of 10 or higher may receive feats that enable more advanced behaviors, tactics, or even social patterns, as befits their situation. They typically gain skill ranks in Knowledge or other Intelligence-based skills.</p>
</>};
const _exoskeleton = {hasJL:true,title: "Exoskeleton", jsx: <><div className="jumpList" id="template-exoskeleton-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="template-exoskeleton-haunted-exoskeleton">Haunted Exoskeleton</InnerLink></li></ul></div><div style={{clear:"both"}}></div><Header full><span>Exoskeleton</span><span>CR Varies</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 124</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Found skittering through forgotten tombs, crawling through deep forests, and filling damp caverns, exoskeletons are animated carapaces of arthropods and other <Link to="/type/vermin">vermin</Link>. Most exoskeletons are the intentional creations of necromancers, but some of these undead monstrosities arise spontaneously from places awash with negative energy or are created by malfunctioning artifacts. Sometimes, the simple act of feeding on freshly destroyed undead creatures is enough to transform an insect into an exoskeleton upon its eventual death. Though exoskeletons are just as mindless as they were when they were living, they have become infused with an evil instinct in their new unlife that drives them to relentlessly attack all living creatures on sight, exploding in a burst of dusty remains when destroyed.</p>
<p>A spellcaster can create an exoskeleton using <Link to="/spell/animate_dead">animate dead</Link>. An exoskeleton can be created from a mostly intact dead vermin that has an exoskeleton. This includes arachnids, crustaceans, insects, and even some mollusks, but not soft-bodied vermin such as jellyfish and leeches.</p>
<p>"Exoskeleton" is an acquired template that can be added to any corporeal vermin that has an exoskeleton (referred to hereafter as the base creature).</p>
<p><strong className="hl">CR:</strong> Depends on Hit Dice, as follows.</p>
<ScrollContainer id="template-exoskeleton--table-0"><table>
<thead>
<tr>
<th>Hit Dice</th>
<th>CR</th>
<th>XP</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>1/4</td>
<td>100</td>
</tr>
<tr>
<td>2</td>
<td>1/2</td>
<td>200</td>
</tr>
<tr>
<td>3-4</td>
<td>1</td>
<td>400</td>
</tr>
<tr>
<td>5-6</td>
<td>2</td>
<td>600</td>
</tr>
<tr>
<td>7-8</td>
<td>3</td>
<td>800</td>
</tr>
<tr>
<td>9-10</td>
<td>4</td>
<td>1,200</td>
</tr>
<tr>
<td>11-12</td>
<td>5</td>
<td>1,600</td>
</tr>
<tr>
<td>13-15</td>
<td>6</td>
<td>2,400</td>
</tr>
<tr>
<td>16-17</td>
<td>7</td>
<td>3,200</td>
</tr>
<tr>
<td>18-20</td>
<td>8</td>
<td>4,800</td>
</tr>
<tr>
<td>21-24</td>
<td>9</td>
<td>6,400</td>
</tr>
<tr>
<td>25-28</td>
<td>10</td>
<td>9,600</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Alignment:</strong> Always neutral evil.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/undead">undead</Link>. It retains any subtype except for alignment subtypes and subtypes that indicate kind. It does not gain the augmented subtype. It uses the base creature's abilities except as noted below.</p>
<p><strong className="hl">AC:</strong> The base creature's natural armor changes as follows.</p>
<ScrollContainer id="template-exoskeleton--table-1"><table>
<thead>
<tr>
<th>Exoskelton Size</th>
<th>Natural Armor Bonus</th>
</tr>
</thead>
<tbody><tr>
<td>Tiny or smaller</td>
<td>+0</td>
</tr>
<tr>
<td>Small</td>
<td>+1</td>
</tr>
<tr>
<td>Medium</td>
<td>+2</td>
</tr>
<tr>
<td>Large</td>
<td>+3</td>
</tr>
<tr>
<td>Huge</td>
<td>+4</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>+7</td>
</tr>
<tr>
<td>Colossal</td>
<td>+11</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Hit Dice:</strong> An exoskeleton retains the number of Hit Dice the base creature had, and gains a number of additional Hit Dice as noted on the following table. If the base creature has more than 20 Hit Dice, it can't be made into an exoskeleton by the <Link to="/spell/animate_dead">animate dead</Link> spell. An exoskeleton uses its Charisma modifier (instead of its Constitution modifier) to determine bonus hit points.</p>
<ScrollContainer id="template-exoskeleton--table-2"><table>
<thead>
<tr>
<th>Exoskelton Size</th>
<th>Bonus Hit Dice</th>
</tr>
</thead>
<tbody><tr>
<td>Tiny or smaller</td>
<td>-</td>
</tr>
<tr>
<td>Small or Medium</td>
<td>+1</td>
</tr>
<tr>
<td>Large</td>
<td>+2</td>
</tr>
<tr>
<td>Huge</td>
<td>+4</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>+6</td>
</tr>
<tr>
<td>Colossal</td>
<td>+10</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Saves:</strong> Base save bonuses are Fort +1/3 Hit Dice, Ref +1/3 Hit Dice, and Will +1/2 Hit Dice + 2.</p>
<p><strong className="hl">Defensive Abilities:</strong> Exoskeletons lose their defensive abilities and gain all of the qualities and immunities granted by the undead type. In addition, exoskeletons gain DR 5/bludgeoning.</p>
<p><strong className="hl">Speed:</strong> Exoskeletons retain all movement speeds. They can still fly but their maneuverability drops to clumsy.</p>
<p><strong className="hl">Attacks:</strong> An exoskeleton retains all of its natural weapons. If the base creature didn't have any natural weapons, it gains a <Link to="/umr/slam_attack">slam attack</Link> that deals damage as if it were one size category larger than its actual size.</p>
<p><strong className="hl">Special Attacks:</strong> An exoskeleton loses all of its special attacks that rely on a living biology (such as poison), but it retains any others.</p>
<p><strong className="hl">Abilities:</strong> An exoskeleton's Strength increases by 2. The exoskeleton has no Constitution or Intelligence score, and its Wisdom and Charisma scores change to 10.</p>
<p><strong className="hl">BAB:</strong> An exoskeleton's base attack bonus is equal to 3/4 of its Hit Dice.</p>
<p><strong className="hl">Skills:</strong> Though most vermin are mindless and have no skill ranks, the exoskeleton loses all skill ranks if it had any, and it doesn't retain any racial bonuses it had.</p>
<p><strong className="hl">Feats:</strong> An exoskeleton loses all feats that the base creature had and doesn't gain feats as its Hit Dice increase, but it does gain <Link to="/feat/toughness">Toughness</Link> as a bonus feat.</p>
<p><strong className="hl">Special Qualities:</strong> An exoskeleton loses most special qualities of the base creature. It retains any extraordinary special qualities that improve its melee or ranged attacks. An exoskeleton gains the following special quality.</p>
<blockquote>
<p><strong>Burst (Ex):</strong> When an exoskeleton is destroyed, its desiccated husk bursts, releasing the dusty remains of the vermin's insides into the surrounding air. Any creature adjacent to an exoskeleton when it bursts must succeed at a Fortitude save or become <Link to="/misc/staggered">staggered</Link> for 1 round as it coughs and sneezes. Creatures that don't need to breathe are immune to this effect. If the exoskeleton has 10 or more Hit Dice, the victim is instead <Link to="/misc/nauseated">nauseated</Link> for 1 round. The save DC is equal to 10 + half the exoskeleton's Hit Dice + its Charisma modifier.</p>
</blockquote>
<h3 id="template-exoskeleton-haunted-exoskeleton" data-hash-target>Haunted Exoskeleton</h3>
<p>Rarely, an exoskeleton is haunted by the lost spirit of a stubborn soul. This wreaks havoc on the spirit, wiping away most of its memories but giving the exoskeleton an Intelligence score of 10, along with all of the feats and skill ranks its Hit Dice would afford. <Link to="/skill/climb">Climb</Link>, <Link to="/skill/fly">Fly</Link>, <Link to="/skill/perception">Perception</Link>, and <Link to="/skill/swim">Swim</Link> are class skills for haunted exoskeletons. A haunted exoskeleton typically understands one language (usually Common) but cannot speak.</p>
</>};
const _failed_prophet = {title: "Failed Prophet", jsx: <><div style={{clear:"both"}}></div><Header full><span>Failed Prophet</span><span>CR +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/druma_profit_and_prophecy">Druma, Profit and Prophecy pg. 60</Link><br/><strong>Acquired/Inherited Template</strong> Acquired<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>When a Kalistocrat performs the final rites to create her idealized afterlife, the likelihood of success depends on how stringently she adhered to Kalistrade's teachings and how much wealth she sacrificed to serve as an occult anchor for her will. It's not always apparent which prophets succeed, and mere weeks after death, the mindscapes of those prophets who failed begin to collapse. For most, their souls become untethered and join the River of Souls, but others cling tenaciously to their failed dream, and their consciousness escapes into and animates their gold-veined bodies.</p>
<p>Some of these so-called failed prophets eventually slip out of their shells and accept <Link to="/faith/pharasma">Pharasma's</Link> judgment. Others refuse to accept their own failure and attempt to perform the ritual again after accumulating far more wealth than before. These failed prophets often break out of their mausoleums to hunt down the wealthy and steal their treasure - or worse, dismantle the precious bodies of other Kalistocrats for scrap, sending the mindscapes of their one-time allies hurtling to the Astral Plane to be torn apart by predators or astral weather.</p>
<p>"Failed prophet" is an acquired template that can be added to any living creature with 5 or more Hit Dice. A failed prophet retains all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> The base creature's CR + 2.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/construct">construct</Link> with the <Link to="/subtype/augmented">augmented</Link> subtype. The failed prophet retains all subtypes except alignment subtypes (such as good). Do not recalculate BAB, saves, or skill ranks.</p>
<p><strong className="hl">Senses:</strong> A failed prophet gains darkvision 60 feet as well the following ability.</p>
<blockquote>
<p><strong>Silver Scent (Ex):</strong> A failed prophet can sense valuable materials as if using the <Link to="/umr/scent">scent</Link> universal monster rule. A failed prophet can attempt a DC 20 <Link to="/skill/appraise">Appraise</Link> check as a free action to identify the relative values of detected wealth.</p>
</blockquote>
<p><strong className="hl">AC:</strong> A failed prophet has a +5 natural armor bonus or the base creature's natural armor bonus, whichever is better.</p>
<p><strong className="hl">Hit Dice:</strong> Change all of the base creature's racial Hit Dice to d10s. All Hit Dice derived from class levels remain unchanged. As constructs, failed prophets gain bonus hit points based on their size.</p>
<p><strong className="hl">Defensive Abilities:</strong> A failed prophet gains DR 10/bludgeoning and magic, a +4 bonus on saving throws against mind-affecting effects, and immunity to cold and electricity. The failed prophet also gains the immunities normally granted by her construct traits, except for the construct type's immunity to mind-affecting effects. Failed prophets also gain the following defensive ability.</p>
<blockquote>
<p><strong>Revel in Wealth (Ex):</strong> A failed prophet gains <Link to="/umr/fast_healing">fast healing</Link> equal to her Hit Dice so long as she has wealth stored in her personal vault (see below) worth at least 1,000 gp.</p>
</blockquote>
<p><strong className="hl">Melee Attack:</strong> A failed prophet gains two <Link to="/umr/claw_attack">claw attacks</Link> if the base creature didn't already have them. These claws have a reach equal to the base creature's natural reach plus 5 feet and deal damage as if the prophet were one size larger than she actually is. In place of making a claw attack, a failed prophet can instead attempt a touch attack that deals no damage but allows her to use her <em>greedy grab</em> special attack. The failed prophet's natural weapons are treated as magic weapons for the purpose of overcoming damage reduction.</p>
<p><strong className="hl">Special Attacks:</strong> A failed prophet gains the following special attacks.</p>
<blockquote>
<p><strong>Aurokinesis:</strong> A failed prophet can hurl shards of her body, gaining the gather power and kinetic blast abilities of a <Link to="/class/kineticist">kineticist</Link> with a level equal to the prophet's CR - 2. She also gains the <Link to="/kinetic/earth_blast">earth blast</Link> kinetic blast and a number of <Link to="/ability/infusions">infusions</Link> equal to 1/3 the prophet's CR (rounded up). A failed prophet of CR 10 or higher also gains the <Link to="/kinetic/metal_blast">metal blast</Link> composite blast. If a failed prophet already has the kinetic blast class ability, she can instead either gain the internal buffer class ability of a kineticist whose level is equal to the prophet's CR or increase the number of points her internal buffer can store by 2; in either case, she restores her buffer to its maximum capacity every 24 hours.</p>
<p>For the purpose of calculating the save DCs and damage for her kineticist abilities, the prophet chooses either her Intelligence, Wisdom, or Charisma score and uses that in place of her Constitution score. Once this choice is made, it cannot be changed.</p>
<p><strong>Greedy Grab (Ex):</strong> When a failed prophet hits a creature with her claw attack or a touch attack, she can attempt a free <Link to="/rule/steal">steal</Link> combat maneuver with a +4 racial bonus to steal the target's wealth; this does not provoke an attack of opportunity. If successful, the prophet grabs mundane valuables from the target equal to 100 gp &times; the failed prophet's Hit Dice, shoveling them into her personal vault (see below). A failed prophet cannot steal more wealth than her target has.</p>
<p><strong>Personal Vault (Ex):</strong> A failed prophet can stow small objects and mundane valuables within her body, up to 500 gp &times; her Hit Dice. Creatures can steal individual objects from this extradimensional space with a successful steal combat maneuver or <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check, though either of these checks takes a -5 penalty.</p>
<p><strong>Plutophage (Ex):</strong> A failed prophet can siphon the value from the valuables in her personal vault equal to 100 gp &times; her Hit Dice to negate 1 point of burn whenever she would accept burn from her aurokinesis.</p>
</blockquote>
<p><strong className="hl">Ability Scores:</strong> Str +6, Dex +2, Int +2, Wis +4, Cha +2. A failed prophet has no Constitution score.</p>
<p><strong className="hl">Skills:</strong> Failed prophets have a +4 racial bonus on Appraise, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, and <Link to="/skill/stealth">Stealth</Link> checks. A failed prophet's skills are the same as those of the base creature, except she treats Knowledge (arcana) and Knowledge (religion) as class skills as well.</p>
</>};
const _fey_animal = {title: "Fey Animal", jsx: <><div style={{clear:"both"}}></div><Header full><span>Fey Animal</span><span>CR +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/lands_of_the_linnorm_kings">Lands of the Linnorm Kings pg. 58</Link><br/><strong>Acquired/Inherited Template</strong> Both<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>"Fey animal" is an inherited or acquired template that can be added to a living, corporeal animal (referred to hereafter as the base creature). A fey animal uses all the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> Same as the base creature +1.</p>
<p><strong className="hl">Type:</strong> Creature type changes to <Link to="/type/fey">fey</Link>. It gains the <Link to="/subtype/augmented">augmented</Link> subtype. Do not recalculate Hit Dice, Base Attack Bonus, skills, or saves.</p>
<p><strong className="hl">Alignment:</strong> Any chaotic.</p>
<p><strong className="hl">AC:</strong> A fey creature's natural armor bonus increases by +1.</p>
<p><strong className="hl">Special Qualities and Defenses:</strong> A fey animal gains darkvision 60 feet and low-light vision if it didn't already possess it. It also gains DR 5/cold iron (DR 10/cold iron if it has 11 or more Hit Dice) and SR equal to its CR + 11.</p>
<p><strong className="hl">Speed:</strong> All of the fey creature's movement speeds increase by 10 feet.</p>
<p><strong className="hl">Special Attacks:</strong> A fey animal gains the special attack described below. Save DCs are equal to 10 + 1/2 the fey animal's Hit Dice + the fey animal's Charisma modifier.</p>
<blockquote>
<p><strong>Death Curse (Su):</strong> When a creature slays a fey animal, the slayer is cursed with ill luck unless it makes a successful Will saving throw to resist the curse. If it fails to resist, the victim takes a -2 penalty on all attack rolls, ability checks, skill checks, and saving throws until the curse is removed. The total penalty from multiple fey animal death curses stacks, but the multiple death curses count as a single curse overall for the purposes of removing its effects. A fey creature can see this curse on a creature as an angry red halo around the victim's head.</p>
</blockquote>
<p><strong className="hl">Spell-Like Abilities:</strong> A fey animal has a cumulative number of spell-like abilities set by its HD. Unless otherwise noted, an ability is usable 1/day. The CL equals the fey animal's CR.</p>
<ScrollContainer id="template-fey_animal--table-0"><table>
<thead>
<tr>
<th>HD</th>
<th>Spell-Like Abilities</th>
</tr>
</thead>
<tbody><tr>
<td>1-3</td>
<td><Link to="/spell/charm_person">charm person</Link>, <Link to="/spell/faerie_fire">faerie fire</Link></td>
</tr>
<tr>
<td>4-6</td>
<td><Link to="/spell/fly">fly</Link> (3/day), <Link to="/spell/tree_shape">tree shape</Link></td>
</tr>
<tr>
<td>7-9</td>
<td><Link to="/spell/charm_monster">charm monster</Link>, <Link to="/spell/hallucinatory_terrain">hallucinatory terrain</Link></td>
</tr>
<tr>
<td>10-13</td>
<td><Link to="/spell/polymorph">polymorph</Link> (3/day), <Link to="/spell/summon_natures_ally_iv">summon nature's ally IV</Link></td>
</tr>
<tr>
<td>14-16</td>
<td><Link to="/spell/feeblemind">feeblemind</Link>, <Link to="/spell/transport_via_plants">transport via plants</Link></td>
</tr>
<tr>
<td>17 or higher</td>
<td><Link to="/spell/mass_charm_monster">mass charm monster</Link>, <Link to="/spell/summon_natures_ally_viii">summon nature's ally VIII</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Abilities:</strong> Dex +4, Int +10 (to a maximum score of 12), Wis +2, Cha +4.</p>
<p><strong className="hl">Skills:</strong> A fey animal gains a +4 racial bonus on <Link to="/skill/bluff">Bluff</Link> and <Link to="/skill/stealth">Stealth</Link> checks, and has skill points per racial Hit Die equal to 6 + its Intelligence modifier. Its racial class skills are <Link to="/skill/acrobatics">Acrobatics</Link>, Bluff, <Link to="/skill/climb">Climb</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/fly">Fly</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, Stealth, and <Link to="/skill/swim">Swim</Link>.</p>
<p><strong className="hl">Languages:</strong> Fey animals speak Sylvan plus one other language common to the region.</p>
</>};
const _fey_creature = {title: "Fey Creature", jsx: <><div style={{clear:"both"}}></div><Header full><span>Fey Creature</span><span>CR +1 or +2</span></Header>
<p><strong>Sources</strong> <Link to="/source/bestiary_3">Bestiary 3 pg. 116</Link><br/><strong>Acquired/Inherited Template</strong> Both<br/><strong>Simple Template</strong> No<br/><strong>Usable with Summons</strong> No</p>
<p>Fey creatures resemble the mundane creatures they derive from, but with brighter colors, delicate features, and elegant wings such as those of a <Link to="/monster/pixie">pixie</Link> or <Link to="/monster/sprite">sprite</Link>. Despite their fragile-seeming appearance, fey creatures are every bit as hardy as their non-fey relations, though they sacrifice raw might for grace and the ability to fly. They live long lives, barring death by misadventure, and rarely show outward signs of age.</p>
<p>Some fey creatures owe their nature to fey ancestors interbreeding with mortal beings, while others are races in their own right. Still others began life as ordinary creatures and were infused with fey essence through the magic of learned spellcasters or the influence of ancient powers of nature. As a rule, fey creatures rarely dwell in civilized lands, both by preference and because the conditions that give rise to the fey rarely occur in urban surroundings. If not already born into realms of primeval wild or areas touched by great fey powers, fey creatures soon seek them out.</p>
<p>Though more prone to mischief than mayhem, fey creatures run the gamut from inimical to sprightly in behavior. Those inclined toward play and jest take a dim view of interlopers lacking in good humor. Such foul-tempered intruders risk humiliation at best if they insult the fey, and much worse if they raise arms against them. More aggressive fey still possess a well-developed though sadistic sense of humor. Such wicked fey use their inborn powers to lure outsiders to their doom, rather than into mere inconvenience.</p>
<p>Fey creatures generally have cordial relationships with animals, allies of nature such as druids, and other fey. Exceptions exist where rival communities of fey dwell in proximity to one another. In these cases, any fey creatures in the vicinity ally with one side or the other according to their own inclinations, only rarely standing outside such conflicts. Fey creatures derived from horses and the like often serve as mounts, though only to other fey or to allies of nature who acknowledge them as at least near-equals, if not full partners.</p>
<p>"Fey Creature" is an inherited or acquired template that can be added to any living, corporeal creature. A fey creature retains the base creature's statistics and special abilities except as noted here.</p>
<p><strong className="hl">CR:</strong> 9 HD or less, as base creature +1; 10 HD or more, as base creature +2.</p>
<p><strong className="hl">Alignment:</strong> Any non-lawful.</p>
<p><strong className="hl">Type:</strong> The creature's type changes to <Link to="/type/fey">fey</Link>. Do not recalculate HD, BAB, or saves.</p>
<p><strong className="hl">Senses:</strong> A fey creature gains low-light vision.</p>
<p><strong className="hl">AC:</strong> Reduce the creature's natural armor, if any, by 1 (minimum of 0).</p>
<p><strong className="hl">Defensive Abilities:</strong> A fey creature gains a +4 bonus on saves against mind-affecting effects, resist cold and electricity 10, and DR 5/cold iron (if 11 HD or less) or DR 10/cold iron (if 12 HD or more).</p>
<p><strong className="hl">Speed:</strong> Unless the base creature flies better, the fey creature flies at 1-1/2 times the base creature's land speed (good maneuverability), rounded down to the nearest multiple of 5 feet. If the creature already has flight with a maneuverability of good, it increases to perfect.</p>
<p><strong className="hl">Special Abilities:</strong> A fey creature gains one of the following abilities for every 4 HD or fraction thereof.</p>
<blockquote>
<p><strong>Camouflage (Ex):</strong> A fey creature can use <Link to="/skill/stealth">Stealth</Link> to hide in any sort of natural terrain, even if the terrain does not grant cover or concealment. It gains a +4 racial bonus on Stealth checks. This bonus does not stack with any racial Stealth bonus possessed by the base creature.</p>
<p><strong>Change Shape (Su):</strong> A fey creature can <Link to="/umr/change_shape">change shape</Link> into a single form. Possible forms include a normal specimen of its base creature, a humanoid creature within one size category, or an animal within one size category. In all cases, the fey creature appears as the same individual of its alternate form each time it changes shape. The type of polymorph spell used should be chosen as appropriate based on the alternate form, such as <Link to="/spell/alter_self">alter self</Link> for taking humanoid form. This ability can be selected more than once, granting an additional form each time.</p>
<p><strong>Energy Resistance (Ex):</strong> A fey creature gains <Link to="/umr/resistance">resistance</Link> 10 to one energy type, or increases an existing resistance by 10. Resistance increased beyond 30 becomes <Link to="/umr/immunity">immunity</Link> instead. This ability can be selected more than once.</p>
<p><strong>Evasion (Ex):</strong> A fey creature gains <Link to="/ability/evasion">evasion</Link>, as the rogue ability of the same name.</p>
<p><strong>Long Step (Su):</strong> A fey creature can teleport up to 10 feet per Hit Die as a move action. It may use this ability once every 1d4 rounds.</p>
<p><strong>Spell Resistance (Ex):</strong> A fey creature gains SR equal to 11 + its CR. This does not stack with any existing SR possessed by the base creature.</p>
<p><strong>Trackless Step (Ex):</strong> A fey creature does not leave a trail in natural surroundings and cannot be tracked. It can choose to leave a trail, if it so desires.</p>
<p><strong>Vanish (Su):</strong> As a swift action, a fey creature can vanish for 1 round as if affected by <Link to="/spell/invisibility">invisibility</Link>. It can use this ability for 1 round per day per Hit Die.</p>
<p><strong>Woodland Stride (Ex):</strong> A fey creature can move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at its normal speed and without taking damage or suffering any other impairment. Thorns, briars, and overgrown areas that have been magically manipulated to impede motion still affect it. Optionally, this ability may function in a different type of terrain, to allow the fey creature to move through, swamps, rocky areas, ice, and so forth. Whatever the choice, this ability only functions in one type of terrain. This ability can be selected more than once, for a different terrain each time.</p>
</blockquote>
<p><strong className="hl">Spell-Like Abilities:</strong> A fey creature with an Intelligence or Wisdom score of 8 or more has a cumulative number of spell-like abilities depending on its Hit Dice. Unless otherwise noted, an ability is usable once per day. Caster level equals the creature's HD (or the caster level of the base creature's spell-like abilities, whichever is higher).</p>
<ScrollContainer id="template-fey_creature--table-0"><table>
<thead>
<tr>
<th>d20</th>
<th>Spell-Like Abilities</th>
</tr>
</thead>
<tbody><tr>
<td>1-2</td>
<td><Link to="/spell/dancing_lights">Dancing lights</Link> 3/day, <Link to="/spell/faerie_fire">faerie fire</Link></td>
</tr>
<tr>
<td>3-4</td>
<td><Link to="/spell/entangle">Entangle</Link>, <Link to="/spell/glitterdust">glitterdust</Link></td>
</tr>
<tr>
<td>5-6</td>
<td><Link to="/spell/deep_slumber">Deep slumber</Link></td>
</tr>
<tr>
<td>7-8</td>
<td><Link to="/spell/major_image">Major image</Link></td>
</tr>
<tr>
<td>9-10</td>
<td><Link to="/spell/confusion">Confusion</Link></td>
</tr>
<tr>
<td>11-12</td>
<td><Link to="/spell/feeblemind">Feeblemind</Link></td>
</tr>
<tr>
<td>13-14</td>
<td><Link to="/spell/mislead">Mislead</Link></td>
</tr>
<tr>
<td>15-16</td>
<td><Link to="/spell/project_image">Project image</Link></td>
</tr>
<tr>
<td>17-18</td>
<td><Link to="/spell/irresistible_dance">Irresistible dance</Link></td>
</tr>
<tr>
<td>19-20</td>
<td><Link to="/spell/scintillating_pattern">Scintillating pattern</Link></td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Abilities:</strong> A fey creature gains a +4 bonus to Dexterity and a +2 bonus to Intelligence and Charisma. A fey creature receives a -2 penalty to Strength. Fey creatures derived from creatures without an Intelligence score gain an Intelligence of 3.</p>
<p><strong className="hl">Skills:</strong> A fey creature with racial Hit Dice has skill points per racial Hit Die equal to 6 + its Intelligence modifier. It gains <Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/fly">Fly</Link>, and Stealth as class skills.</p>
<p><strong className="hl">Languages:</strong> Fey creatures speak Sylvan as well as any languages spoken by the base creature.</p>
</>};
const _fey_touched_creature = {title: "Fey-Touched Creature", jsx: <><div style={{clear:"both"}}></div><Header full><span>Fey-Touched Creature</span><span>CR +0 or +1</span></Header>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 17</Link><br/><strong>Acquired/Inherited Template</strong> Inherited<br/><strong>Simple Template</strong> Yes<br/><strong>Usable with Summons</strong> See Text</p>
<p>Fey-touched creatures are descended from inhabitants of the First World and often possess striking features compared to their normal counterparts, such as bright coloration or a cunning visage. The fey-touched creature's First World ancestor needn't be a fey specifically, and even magical beasts, First World <Link to="/race/gnome">gnomes</Link>, and other non-fey inhabitants of the fecund, magical plane can produce fey-touched heirs generations after their initial dalliance with residents of other planes. Some fey-touched creatures thus claim to be descended from the legendary Tane and even the god-like <Link to="/rule/eldest">Eldest</Link>, though these claims are likely unfounded - such claims themselves intentional or accidental manifestations of the creature's hereditary First World influence.</p>
<p>A fey-touched creature's CR increases by 1 only if the base creature has 5 or more Hit Dice. The fey-touched creature template can be applied only to living creatures. A fey-touched creature's quick and rebuild rules are the same. Spellcasters with ties to the fey (such as sorcerers with the <Link to="/sorcbloodline/fey">fey</Link> bloodline) can summon fey-touched creatures with <Link to="/spell/summon_monster">summon monster</Link> spells and take fey-touched creatures as <Link to="/feat/improved_familiar">improved familiars</Link> at 3rd level, similar to selecting celestial or infernal familiars.</p>
<p><strong className="hl">Rebuild Rules:</strong> <strong>Senses</strong> gains low-light vision; <strong>Defensive Abilities</strong> gains +2 bonus on Will saves and DR as noted on the table; <strong>SR</strong> gains SR equal to new CR +5; <strong>Special Qualities</strong> <Link to="/umr/change_shape">change shape</Link> (a single fixed Small or Medium humanoid form, <Link to="/spell/alter_self">alter self</Link>), <Link to="/ability/woodland_stride">woodland stride</Link> (as the druid ability).</p>
<h3 id="template-fey_touched_creature-fey-touched-creature-defenses">Fey-touched Creature Defenses</h3>
<ScrollContainer id="template-fey_touched_creature--table-0"><table>
<thead>
<tr>
<th>Hit Dice</th>
<th>DR</th>
</tr>
</thead>
<tbody><tr>
<td>1-4</td>
<td>-</td>
</tr>
<tr>
<td>5-10</td>
<td>5/cold iron</td>
</tr>
<tr>
<td>11+</td>
<td>10/cold iron</td>
</tr>
</tbody></table></ScrollContainer>
</>};
export default {not_found:_not_found,accursed:_accursed,advanced:_advanced,aerial:_aerial,aggregate:_aggregate,alchemically_invisible:_alchemically_invisible,alebrije:_alebrije,alter_ego:_alter_ego,animal_lord:_animal_lord,animus_shade:_animus_shade,apostle_kyton:_apostle_kyton,aqueous:_aqueous,barbarian:_barbarian,bard:_bard,bestial_creature:_bestial_creature,black_blooded:_black_blooded,blighted_fey:_blighted_fey,boreal_creature:_boreal_creature,broken_soul:_broken_soul,calcified:_calcified,celestial:_celestial,child_of_yog_sothoth:_child_of_yog_sothoth,chthonic:_chthonic,cleric:_cleric,colour_blighted:_colour_blighted,commando_construct:_commando_construct,counterpoised:_counterpoised,cursed_lord:_cursed_lord,cytillesh_zombie:_cytillesh_zombie,dark:_dark,deep_creature:_deep_creature,degenerate:_degenerate,demonic_vermin:_demonic_vermin,devilbound:_devilbound,divine_guardian:_divine_guardian,dread_lord:_dread_lord,dream_eater:_dream_eater,dreamspawn:_dreamspawn,druid:_druid,echohusk:_echohusk,ectoplasmic:_ectoplasmic,elemental_infused_creature:_elemental_infused_creature,energized:_energized,enlightened_construct:_enlightened_construct,entothrope:_entothrope,entropic:_entropic,eruphyte:_eruphyte,exoskeleton:_exoskeleton,failed_prophet:_failed_prophet,fey_animal:_fey_animal,fey_creature:_fey_creature,fey_touched_creature:_fey_touched_creature}