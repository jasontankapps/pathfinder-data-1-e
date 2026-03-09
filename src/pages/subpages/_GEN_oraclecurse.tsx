import {IonRippleEffect,IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
const _not_found = {title: "Unknown", jsx: <><h2 id="oraclecurse-not_found-error">Error</h2>
<p>Unable to find the requested oracle curse.</p>
</>};
const _aboleth = {title: "Aboleth", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link><br/><strong>Aboleth:</strong> Your mind is marked by <Link to="/monster/aboleth">aboleth</Link> tampering, either as a result of a close encounter with one of these creatures while you were a child, or even through an ancestor, close family member, or one of your sisters or brothers in faith - this associate's interaction with the aboleths may be all that it takes to infect you.</p>
<p><strong className="hl">Penalty:</strong> You take a -2 penalty on saving throws against mind-affecting effects.</p>
<p><strong className="hl">Benefit:</strong> Add <Link to="/spell/charm_person">charm person</Link> and <Link to="/spell/hypnotism">hypnotism</Link> to your list of 1st-level oracle spells known.</p>
<p><strong className="hl">At 5th Level:</strong> Add <Link to="/spell/minor_image">minor image</Link> to your list of 2nd-level oracle spells known.</p>
<p><strong className="hl">At 10th Level:</strong> Add <Link to="/spell/modify_memory">modify memory</Link> to your list of 4th-level oracle spells known.</p>
<p><strong className="hl">At 15th Level:</strong> Add <Link to="/spell/veil">veil</Link> to your list of 6th-level oracle spells known.</p>
</>};
const _acursed = {title: "Acursed", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link><br/><strong>Acursed:</strong> You are cursed with misfortune and sorrow.</p>
<p><strong className="hl">Penalty:</strong> You cannot gain benefit from morale bonuses.</p>
<p><strong className="hl">Benefit:</strong> You gain a +4 bonus to all saving throws against <Link to="/spelldef/curse">curse</Link> effects.</p>
<p><strong className="hl">At 5th Level:</strong> Add <Link to="/spell/ill_omen">ill omen</Link> to your list of spells known.</p>
<p><strong className="hl">At 10th Level:</strong> Add <Link to="/spell/greater_brand">greater brand</Link> to your list of spells known.</p>
<p><strong className="hl">At 15th Level:</strong> You are immune to curse effects except for your own oracle curse.</p>
</>};
const _blackened = {title: "Blackened", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_angels">Blood of Angels</Link><br/><strong>Blackened:</strong> Your hands and forearms are shriveled and blackened, as if you had plunged your arms into a blazing fire, and your thin, papery skin is sensitive to the touch.</p>
<p><strong className="hl">Penalty:</strong> You take a -4 penalty on weapon attack rolls.</p>
<p><strong className="hl">Benefit:</strong> Add <Link to="/spell/burning_hands">burning hands</Link> to your list of spells known.</p>
<p><strong className="hl">At 5th Level:</strong> Add <Link to="/spell/scorching_ray">scorching ray</Link> and <Link to="/spell/flaming_sphere">flaming sphere</Link> to your list of spells known.</p>
<p><strong className="hl">At 10th Level:</strong> Add <Link to="/spell/wall_of_fire">wall of fire</Link> to your list of spells known and your penalty on weapon attack rolls is reduced to -2.</p>
<p><strong className="hl">At 15th Level:</strong> Add <Link to="/spell/delayed_blast_fireball">delayed blast fireball</Link> to your list of spells known.</p>
</>};
const _clouded_vision = {title: "Clouded Vision", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link><br/><strong>Clouded Vision:</strong> Your eyes are obscured, making it difficult for you to see.</p>
<p><strong className="hl">Penalty:</strong> You cannot see anything beyond 30 feet.</p>
<p><strong className="hl">Benefit:</strong> You can see as if you had darkvision 30 ft.</p>
<p><strong className="hl">At 5th Level:</strong> This distance increases to 60 feet.</p>
<p><strong className="hl">At 10th Level:</strong> You gain <Link to="/umr/blindsense">blindsense</Link> out to a range of 30 feet.</p>
<p><strong className="hl">At 15th Level:</strong> You gain <Link to="/umr/blindsight">blindsight</Link> out to a range of 15 feet.</p>
</>};
const _cold_blooded = {title: "Cold-Blooded", jsx: <><p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex</Link><br/><strong>Cold-Blooded:</strong> Your blood turns sluggish without sufficient heat, and you must seek warmth and shelter earlier than most. This oracle curse is common among <Link to="/monster/lizardfolk">lizardfolk</Link> and other oracles with the reptilian subtype.</p>
<p><strong className="hl">Penalty:</strong> You take a -4 penalty on saves against cold spells and effects, and whenever you fail such a saving throw, you are <Link to="/misc/staggered">staggered</Link> for 1 round.</p>
<p><strong className="hl">Benefit:</strong> You can survive without food four times longer than a typical creature of your species before you begin to starve.</p>
<p><strong className="hl">At 5th Level:</strong> Poisons affecting you have their onset time doubled and last half as long if they end after a set time (for example, a poison with a frequency of 1/round for 6 rounds would instead have a frequency of 1/round for 3 rounds). Poisons with no onset time gain an onset time of 1 round.</p>
<p><strong className="hl">At 10th Level:</strong> Whenever an action you have <Link to="/rule/readied">readied</Link> is triggered, you can take an additional move action at half your speed - along with your readied action - even if you have already taken a move action that round.</p>
<p><strong className="hl">At 15th Level:</strong> You can take an additional move action a number of times per day equal to your Charisma modifier. You can take these additional move actions only on your turn, and can take only one of these extra move actions per turn.</p>
</>};
const _consumed = {title: "Consumed", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_fiends">Blood of Fiends</Link><br/><strong>Consumed:</strong> Your connection to Abaddon and the <Link to="/family/daemon">daemons</Link> that call it home has left you diminished but still able to scorn many mortal frailties.</p>
<p><strong className="hl">Penalty:</strong> Whenever you take lethal hit point damage, you take an additional number of points of nonlethal damage equal to 1/2 the lethal damage you took.</p>
<p><strong className="hl">Benefit:</strong> You automatically <Link to="/misc/stabilize">stabilize</Link> when brought below 0 hit points.</p>
<p><strong className="hl">At 5th Level:</strong> Whenever you make a saving throw against a disease or poison effect, roll twice and use the higher roll as your result.</p>
<p><strong className="hl">At 10th Level:</strong> You can go without food or water for a number of days equal to your oracle level before suffering any ill effects due to <Link to="/rule/starvation">starvation</Link> or thirst.</p>
<p><strong className="hl">At 15th Level:</strong> Whenever a creature within 30 feet takes damage while in combat, you automatically gain 1 temporary hit point. You can benefit from this ability a number of times per round equal to your Charisma modifier, and you can gain a total number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> in this way equal to your oracle level. Temporary hit points gained this way disappear after 1 hour.</p>
</>};
const _covetous = {title: "Covetous", jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons</Link><br/><strong>Covetous:</strong> You find yourself drawn to the luster of wealthy living.</p>
<p><strong className="hl">Penalty:</strong> You must wear fine nonmagical clothing and jewelry worth at least 50 gp + 100 gp per character level you have beyond 1st. If you do not have sufficient wealth to purchase this additional equipment, you feel a strong desire (but are not compelled) to sell existing items or steal from others to obtain it. You are <Link to="/misc/sickened">sickened</Link> whenever you do not meet this requirement; you are also sickened for 24 hours after anything worth 25 gp &times; your character level or more is taken from you against your will.</p>
<p><strong className="hl">Benefit:</strong> Use Magic Device becomes a class skill for you.</p>
<p><strong className="hl">At 5th Level:</strong> You gain a +4 insight bonus on Appraise checks, Spellcraft checks to identify magic items, and Use Magic Device checks.</p>
<p><strong className="hl">At 10th Level:</strong> You add <Link to="/spell/fabricate">fabricate</Link> to your list of spells known.</p>
<p><strong className="hl">At 15th Level:</strong> You add half your oracle level to your CMD against <Link to="/rule/steal">steal</Link> combat maneuvers and to the DC of Sleight of Hand checks to take items from you.</p>
</>};
const _deaf = {title: "Deaf", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link><br/><strong>Deaf:</strong> You cannot hear.</p>
<p><strong className="hl">Penalty:</strong> You suffer all of the usual penalties for being <Link to="/misc/deafened">deafened</Link>.</p>
<p><strong className="hl">Benefit:</strong> You cast all of your spells as if they were modified by the <Link to="/feat/silent_spell">Silent Spell</Link> feat. This does not increase their level or casting time.</p>
<p><strong className="hl">At 5th Level:</strong> You receive a +3 competence bonus on Perception checks that do not rely upon hearing, and the initiative penalty for being deaf is reduced to -2.</p>
<p><strong className="hl">At 10th Level:</strong> You gain <Link to="/umr/scent">scent</Link> and you do not suffer any penalty on initiative checks due to being deaf.</p>
<p><strong className="hl">At 15th Level:</strong> You gain <Link to="/umr/tremorsense">tremorsense</Link> out to a range of 30 feet.</p>
</>};
const _deep_one = {title: "Deep One", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link><br/><strong>Deep One:</strong> The lure of the ocean tugs at your soul.</p>
<p><strong className="hl">Penalty:</strong> You reduce your base land speed by 5 feet.</p>
<p><strong className="hl">Benefit:</strong> You gain a swim speed equal to your land speed, and if you already have a swim speed, you increase it by 10 feet.</p>
<p><strong className="hl">At 5th Level:</strong> Your natural armor bonus increases by 1 as your skin thickens.</p>
<p><strong className="hl">At 10th Level:</strong> You gain a +1 bonus to your caster level when casting spells underwater and when casting spells with the water descriptor.</p>
<p><strong className="hl">At 15th Level:</strong> You gain the benefits of <Link to="/spell/freedom_of_movement">freedom of movement</Link> while underwater.</p>
</>};
const _demonic = {title: "Demonic", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link><br/><strong>Demonic:</strong> Your heart is cursed with the pull of the Abyss.</p>
<p><strong className="hl">Penalty:</strong> You cannot cast spells with the good or lawful descriptors, nor can you summon good or lawful creatures. Good and lawful creatures instinctively distrust you, and you take a -4 penalty on all Diplomacy checks against such creatures. Diplomacy is not a class skill for you.</p>
<p><strong className="hl">Benefit:</strong> You gain a +2 bonus on all Bluff and Intimidate checks. You gain Bluff or Intimidate (choose one) as a class skill.</p>
<p><strong className="hl">At 5th Level:</strong> You gain a +4 bonus to all saving throws against fear effects.</p>
<p><strong className="hl">At 10th Level:</strong> You gain immunity to poison.</p>
<p><strong className="hl">At 15th Level:</strong> Any weapon you wield is treated as chaotic and evil for the purposes of overcoming damage reduction.</p>
</>};
const _elemental_imbalance = {title: "Elemental Imbalance", jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link><br/><strong>Elemental Imbalance:</strong> You wield an element's might, but you are vulnerable to its opposite.</p>
<p><strong className="hl">Penalty:</strong> Choose air, earth, fire, or water.</p>
<blockquote>
<p>If you select air, you gain <Link to="/umr/vulnerability">vulnerability</Link> to acid, cannot benefit from any acid <Link to="/umr/resistance">resistance</Link> or <Link to="/umr/immunity">immunity</Link>, and cannot cast spells with the acid or earth descriptors.</p>
<p>If you select earth, you gain vulnerability to electricity, cannot benefit from any electricity resistance or immunity, and cannot cast spells with the air or electricity descriptors.</p>
<p>If you select fire, you gain vulnerability to cold, cannot benefit from any cold resistance or immunity, and cannot cast spells with the cold or water descriptors.</p>
<p>If you select water, you gain vulnerability to fire, cannot benefit from any fire resistance or immunity, and cannot cast spells with the fire descriptor.</p>
</blockquote>
<p><strong className="hl">Benefits:</strong> As you advance in level, add the following spells to your oracle spells known based on your chosen element.</p>
<ScrollContainer id="oraclecurse-elemental_imbalance--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Fire Spell</th>
<th>Earth Spell</th>
<th>Water Spell</th>
<th>Air Spell</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td className="ion-activatable"><Link to="/spell/burning_hands">burning hands<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/grease">grease<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/hydraulic_push">hydraulic push<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/shocking_grasp">shocking grasp<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>5th</td>
<td className="ion-activatable"><Link to="/spell/scorching_ray">scorching ray<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/glitterdust">glitterdust<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/frigid_touch">frigid touch<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/levitate">levitate<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>10th</td>
<td className="ion-activatable"><Link to="/spell/wall_of_fire">wall of fire<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/calcific_touch">calcific touch<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/ice_storm">ice storm<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/ball_lightning">ball lightning<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>15th</td>
<td className="ion-activatable"><Link to="/spell/contagious_flame">contagious flame<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/flesh_to_stone">flesh to stone<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/freezing_sphere">freezing sphere<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/spell/chain_lightning">chain lightning<IonRippleEffect /></Link></td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _ghoul = {title: "Ghoul", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link><br/><strong>Ghoul:</strong> While your actual dietary needs don't change, you crave the flesh of sentient creatures.</p>
<p><strong className="hl">Penalty:</strong> You can only go without food for 12 hours before you begin to <Link to="/rule/starve">starve</Link>, and when you do starve, the DC of the Constitution check to avoid taking damage increases by 5.</p>
<p><strong className="hl">Benefit:</strong> If you feed on fresh, raw flesh (no older than 1 hour) from a creature of your own race, you gain a +1 morale bonus on all saving throws for 24 hours.</p>
<p><strong className="hl">At 5th Level:</strong> You add <Link to="/spell/ghoul_touch">ghoul touch</Link> to your list of 2nd-level oracle spells known.</p>
<p><strong className="hl">At 10th Level:</strong> You become immune to paralysis and disease.</p>
<p><strong className="hl">At 15th Level:</strong> You gain the effects of <Link to="/spell/heroes_feast">heroes' feast</Link> whenever you feed on the raw flesh of a sentient creature, and the effects of this <em>heroes' feast</em> double if the flesh you eat comes from a member of your own race (this effect applies no more often than once per day).</p>
</>};
const _god_meddled = {title: "God-Meddled", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion</Link><br/><strong>God-Meddled:</strong> The isle of Iblydos is populated and watched over by hero-gods, some of whom are known for entangling mortals in their own affairs. The gods' interference in your life has left you with strange, unpredictable powers dependent on divine whim. Bizarre side effects occur whenever you are affected by a spell from a divine caster - for better or for worse.</p>
<p><strong className="hl">Penalty/Benefit:</strong> Once per round, when a creature casts a divine spell including you as a target, roll 1d20 and consult the table below. The effect resulting from this roll begins at the end of that enemy's turn. This effect targets only you, even if other creatures were included as targets of the triggering spell.</p>
<p><strong className="hl">At 5th Level:</strong> You gain a +2 competence bonus on saving throws to resist divine spells.</p>
<p><strong className="hl">At 10th Level:</strong> You become immune to the <Link to="/misc/confused">confused</Link> condition.</p>
<p><strong className="hl">At 15th Level:</strong> You gain a +4 competence bonus on saving throws to resist mind-affecting effects.</p>
<h3 id="oraclecurse-god_meddled-god-meddled-effects">God-Meddled Effects</h3>
<ScrollContainer id="oraclecurse-god_meddled--table-0"><table>
<thead>
<tr>
<th>d20</th>
<th>Effect</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>You provoke an attack of opportunity from one enemy adjacent to you. If no enemy is adjacent, the closest enemy can move its full movement speed in your direction as a free action. If multiple enemies qualify, the GM determines which creature attacks or moves. This movement does not trigger attacks of opportunity.</td>
</tr>
<tr>
<td>2-3</td>
<td>Your movement speed is halved for 1 round.</td>
</tr>
<tr>
<td>4-5</td>
<td>You are <Link to="/misc/deafened">deafened</Link> for 1 round.</td>
</tr>
<tr>
<td>6-7</td>
<td>You are knocked <Link to="/rule/prone">prone</Link>.</td>
</tr>
<tr>
<td>8-10</td>
<td>You shrink by one size category for 1 round, as <Link to="/spell/reduce_person">reduce person</Link>.</td>
</tr>
<tr>
<td>11-13</td>
<td>You grow by one size category for 1 round, as <Link to="/spell/enlarge_person">enlarge person</Link>.</td>
</tr>
<tr>
<td>14-15</td>
<td>Your caster level is treated as 1 higher for the purpose of spell durations for 1 round.</td>
</tr>
<tr>
<td>16-17</td>
<td>Creatures in squares adjacent to you are pushed 10 feet away from the space you occupy.</td>
</tr>
<tr>
<td>18-19</td>
<td>You are able to understand all languages for 1 round.</td>
</tr>
<tr>
<td>20</td>
<td>You gain the benefits of <Link to="/spell/haste">haste</Link> for 1 round.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _haunted = {title: "Haunted", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link><br/><strong>Haunted:</strong> Malevolent spirits follow you wherever you go, causing minor mishaps and strange occurrences (such as unexpected breezes, small objects moving on their own, and faint noises).</p>
<p><strong className="hl">Penalty:</strong> Retrieving any stored item from your gear requires a standard action, unless it would normally take longer. Any item you drop lands 10 feet away from you in a random direction.</p>
<p><strong className="hl">Benefit:</strong> Add <Link to="/spell/mage_hand">mage hand</Link> and <Link to="/spell/ghost_sound">ghost sound</Link> to your list of spells known.</p>
<p><strong className="hl">At 5th Level:</strong> Add <Link to="/spell/levitate">levitate</Link> and <Link to="/spell/minor_image">minor image</Link> to your list of spells known.</p>
<p><strong className="hl">At 10th Level:</strong> Add <Link to="/spell/telekinesis">telekinesis</Link> to your list of spells known.</p>
<p><strong className="hl">At 15th Level:</strong> Add <Link to="/spell/reverse_gravity">reverse gravity</Link> to your list of spells known.</p>
</>};
const _hellbound = {title: "Hellbound", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link><br/><strong>Hellbound:</strong> Infernal influence grants you profane insight and weighs on your soul.</p>
<p><strong className="hl">Penalty:</strong> You cannot cast spells with the good or chaotic descriptors, and you can't summon good or chaotic creatures. Good and chaotic creatures instinctively distrust you, and you take a -4 penalty on all Diplomacy checks against such creatures.</p>
<p><strong className="hl">Benefit:</strong> You gain a +2 bonus on all Bluff and Intimidate checks.</p>
<p><strong className="hl">At 5th Level:</strong> You gain a +4 bonus to all saving throws against charm effects.</p>
<p><strong className="hl">At 10th Level:</strong> You gain immunity to fire.</p>
<p><strong className="hl">At 15th Level:</strong> Any weapon you wield is treated as lawful and evil for the purposes of overcoming damage reduction.</p>
</>};
const _hive = {title: "Hive", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link><br/><strong>Hive:</strong> You were exposed at a young age (perhaps even before you were born) to the alien species known as the <Link to="/family/hive">hive</Link>, but this exposure did not result in a full-blown infestation by these otherworldly monsters.</p>
<p><strong className="hl">Penalty:</strong> Others (including animals) find the unsightly spines and rough growths that periodically emerge from your flesh to be disturbing and distracting, and you take a -4 penalty on Bluff, Diplomacy, Handle Animal, and Ride checks.</p>
<p><strong className="hl">Benefit:</strong> Once per day as a standard action, you can cough up an ovoid, leathery sphere that can be hurled as a flask of <Link to="/eq-weapon/acid">acid</Link>, though it becomes inert after 24 hours.</p>
<p><strong className="hl">At 5th Level:</strong> You gain the benefits of <Link to="/spell/endure_elements">endure elements</Link> in hot environments and are immune to <Link to="/rule/infestations">infestations</Link> (save for those from the hive itself).</p>
<p><strong className="hl">At 10th Level:</strong> Your skin deformities grow numerous enough to increase your natural armor bonus by 1.</p>
<p><strong className="hl">At 15th Level:</strong> You gain acid <Link to="/umr/resistance">resistance</Link> 20.</p>
</>};
const _hunger = {title: "Hunger", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_monster_codex">Inner Sea Monster Codex</Link><br/><strong>Hunger:</strong> Ravenous hunger wracks your body in stressful situations.</p>
<p><strong className="hl">Penalty:</strong> You gain none of the benefits from spells or magic items that provide nourishment, such as <Link to="/spell/goodberry">goodberry</Link>, <Link to="/spell/heroes_feast">heroes' feast</Link>, or a <Link to="/magic-ring/ring_of_sustenance">ring of sustenance</Link>. You begin each combat with the <Link to="/misc/sickened">sickened</Link> condition until you deal damage with your bite attack (see below).</p>
<p><strong className="hl">Benefit:</strong> You gain a bite attack that deals an amount of piercing damage appropriate for your size (1d8 for a Large creature, 1d6 for Medium, 1d4 for Small) as a secondary <Link to="/umr/natural_attack">natural attack</Link>.</p>
<p><strong className="hl">At 5th Level:</strong> You gain the <Link to="/umr/grab">grab</Link> monster special ability on bite attacks against creatures smaller than yourself.</p>
<p><strong className="hl">At 10th Level:</strong> Your bite attack deals damage as if you were <Link to="/misc/one_size_category_larger">one size category larger</Link>.</p>
<p><strong className="hl">At 15th Level:</strong> You gain the <Link to="/umr/blood_drain">blood drain</Link> monster special ability with your bite, dealing 1d2 points of <Link to="/rule/constitution_damage">Constitution damage</Link> at the end of a turn if you grapple a foe.</p>
</>};
const _infested = {title: "Infested", jsx: <><p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex</Link><br/><strong>Infested:</strong> Insects, spiders, grubs, and other vermin plague you constantly. They crawl in your hair, fill your clothes, and fly or crawl into your mouth, nose, and ears.</p>
<p><strong className="hl">Penalty:</strong> You take a -4 penalty on Diplomacy checks, and when you first meet someone, the person's initial attitude toward you starts one level lower than normal. Animals shy away from you - you take a -4 penalty on Handle Animal checks.</p>
<p><strong className="hl">Benefit:</strong> You gain a +2 bonus on Fortitude saves versus poisons from insects, scorpions, and spiders, as well as the distraction ability of swarms of such creatures.</p>
<p><strong className="hl">At 5th Level:</strong> You add <Link to="/spell/vomit_swarm">vomit swarm</Link> to your list of spells known.</p>
<p><strong className="hl">At 7th Level:</strong> Your bonus on poison and distraction saves increases to +4, and you gain DR 10/- against all swarm damage.</p>
<p><strong className="hl">At 13th Level:</strong> You add <Link to="/spell/swarm_skin">swarm skin</Link> to your list of spells known.</p>
<p><strong className="hl">At 17th Level:</strong> You become immune to the swarm damage and the distraction ability of insect, scorpion, and spider swarms.</p>
</>};
const _lame = {title: "Lame", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link><br/><strong>Lame:</strong> One of your legs is permanently wounded.</p>
<p><strong className="hl">Penalty:</strong> You reduce your base land speed by 10 feet if your base speed is 30 feet or more. If your base speed is less than 30 feet, your speed is reduced by 5 feet.</p>
<p><strong className="hl">Benefit:</strong> Your speed is never reduced due to encumbrance.</p>
<p><strong className="hl">At 5th Level:</strong> You are immune to the <Link to="/misc/fatigued">fatigued</Link> condition (but not exhaustion).</p>
<p><strong className="hl">At 10th Level:</strong> Your speed is never reduced by armor.</p>
<p><strong className="hl">At 15th Level:</strong> You are immune to the <Link to="/misc/exhausted">exhausted</Link> condition.</p>
</>};
const _legalistic = {title: "Legalistic", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_fiends">Blood of Fiends</Link><br/><strong>Legalistic:</strong> The shackles of Hell impose savage consequences should you violate a covenant, but also imbue you with remarkable guile.</p>
<p><strong className="hl">Penalty:</strong> Whenever you break your word (either purposefully or unintentionally), you become <Link to="/misc/sickened">sickened</Link> for 24 hours or until you meet your obligation, whichever comes first.</p>
<p><strong className="hl">Benefit:</strong> Once per day, you can make a vow to yourself that grants a +4 morale bonus on any one roll you make while trying to fulfill a promise made to another individual.</p>
<p><strong className="hl">At 5th Level:</strong> You gain a +3 competence bonus on Diplomacy, Intimidate, and Sense Motive checks while talking to an individual one-on-one.</p>
<p><strong className="hl">At 10th Level:</strong> You can make a new saving throw each minute to resist mind-affecting effects as your subconscious searches for loopholes.</p>
<p><strong className="hl">At 15th Level:</strong> Any creature that violates its freely given word to you takes a penalty to AC, to spell resistance, and on saving throws against your attacks and abilities equal to your Charisma modifier (minimum 1) for 24 hours.</p>
</>};
const _lich = {title: "Lich", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link><br/><strong>Lich:</strong> Every living spellcaster hides a secret in their flesh - a unique, personalized set of conditions that, when all are fulfilled in the correct order, can trigger the transformation into a <Link to="/template/lich">lich</Link>. Normally, one must expend years and tens of thousands of gold pieces to research this deeply personalized method of attaining immortality. Yet, in a rare few cases, chance and ill fortune can conspire against an unsuspecting spellcaster. You have (unknowingly) fulfilled most (but not all) of the ritualistic components to achieve lichdom. You have yet to turn into an undead creature, but you are close.</p>
<p><strong className="hl">Penalty/Benefit:</strong> You take damage from positive energy and heal from negative energy as if you were undead.</p>
<p><strong className="hl">At 5th Level:</strong> Add <Link to="/spell/control_undead">control undead</Link> to your list of 2nd-level oracle spells known.</p>
<p><strong className="hl">At 10th Level:</strong> Add <Link to="/spell/undead_anatomy_i">undead anatomy I</Link> to your list of 3rd-level oracle spells known and <Link to="/spell/undead_anatomy_ii">undead anatomy II</Link> to your list of 5th-level oracle spells known.</p>
<p><strong className="hl">At 15th Level:</strong> You are immune to death effects.</p>
</>};
const _lycanthropy = {title: "Lycanthropy", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link><br/><strong>Lycanthropy:</strong> You suffer from a minor form of lycanthropy. The exact animal your body and mind are aligned with can vary, but you should choose an animal that matches your faith thematically.</p>
<p><strong className="hl">Penalty:</strong> In times of stress or unease, you cannot speak - only growl and snarl like an animal. This ability works similarly to the <Link to="/oraclecurse/tongues">tongues</Link> curse, but whenever you are in combat, you cannot speak at all. This does not interfere with spellcasting but does apply to spells that are language dependent. A character under the effects of <Link to="/spell/speak_with_animals">speak with animals</Link> can understand you, and you can communicate with such characters normally. You can speak with animals when in this condition.</p>
<p><strong className="hl">Benefit:</strong> Choose one type of animal commonly associated with lycanthropy (such as rats, wolves, or bears); you gain a +4 bonus on Handle Animal checks with these creatures.</p>
<p><strong className="hl">At 5th Level:</strong> Add <Link to="/spell/charm_animal">charm animal</Link> to your list of 1st-level oracle spells known and <Link to="/spell/animal_messenger">animal messenger</Link> to your list of 2nd-level oracle spells known.</p>
<p><strong className="hl">At 10th Level:</strong> Add <Link to="/spell/beast_shape_i">beast shape I</Link> to your list of 3rd-level oracle spells known and <Link to="/spell/beast_shape_ii">beast shape II</Link> to your list of 5th-level oracle spells known.</p>
<p><strong className="hl">At 15th Level:</strong> You gain <Link to="/rule/damage_reduction">damage reduction</Link> 5/silver, and if you already have this type of damage reduction, it increases in value by 5 (to a maximum of DR 15/silver).</p>
</>};
const _plagued = {title: "Plagued", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link><br/><strong>Plagued:</strong> You suffer from minor ailments and sicknesses. While you struggle to resist new diseases, you have grown accustomed to the many inconveniences of sickness.</p>
<p><strong className="hl">Penalty:</strong> You take a -1 penalty on all saving throws against disease or infestation effects.</p>
<p><strong className="hl">Benefit:</strong> You are immune to the <Link to="/misc/sickened">sickened</Link> condition.</p>
<p><strong className="hl">At 5th Level:</strong> Add <Link to="/spell/pox_pustules">pox pustules</Link> to your list of 2nd-level oracle spells known.</p>
<p><strong className="hl">At 10th Level:</strong> Increase the save DC of any disease effect you create by +2, and you raise the number of saves required to recover naturally from these diseases by 1.</p>
<p><strong className="hl">At 15th Level:</strong> You are immune to the effects of disease and <Link to="/rule/infestations">infestations</Link>, but you can still function as a carrier for sickness.</p>
</>};
const _possessed = {title: "Possessed", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link><br/><strong>Possessed:</strong> Another mind shares your body, interfering with your control, and it's more difficult for you to concentrate as a result.</p>
<p><strong className="hl">Penalty:</strong> You take a -2 penalty on all <Link to="/rule/concentration">concentration</Link> checks, and concentrating to maintain a spell duration provokes attacks of opportunity.</p>
<p><strong className="hl">Benefit:</strong> Whenever a foe attempts to use an effect to possess or dominate you and the effect allows a saving throw to negate, you may roll twice and take the better of the two results.</p>
<p><strong className="hl">At 5th Level:</strong> If you become <Link to="/misc/dazed">dazed</Link> or <Link to="/misc/stunned">stunned</Link>, you can choose instead to become <Link to="/misc/confused">confused</Link> for twice the duration the daze or stun effect would have normally lasted.</p>
<p><strong className="hl">At 10th Level:</strong> Add <Link to="/spell/possession">possession</Link> to your list of 5th-level oracle spells known.</p>
<p><strong className="hl">At 15th Level:</strong> Add <Link to="/spell/greater_object_possession">greater object possession</Link> to your list of 7th-level oracle spells known.</p>
</>};
const _powerless_prophecy = {title: "Powerless Prophecy", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_monster_codex">Inner Sea Monster Codex</Link><br/><strong>Powerless Prophecy:</strong> You are forewarned of danger but can't act to prevent it.</p>
<p><strong className="hl">Penalty:</strong> You can't take any actions in a surprise round, including free actions, except for <Link to="/arc-oracle/cyclopean_seer">flash of insight</Link>. In the absence of a surprise round, you are <Link to="/misc/staggered">staggered</Link> for the entire first round of combat.</p>
<p><strong className="hl">Benefit:</strong> You gain <Link to="/ability/uncanny_dodge">uncanny dodge</Link>, as the rogue class feature.</p>
<p><strong className="hl">At 5th Level:</strong> You gain a +4 insight bonus on initiative checks.</p>
<p><strong className="hl">At 10th Level:</strong> You gain <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> as the rogue ability, using your oracle level as your rogue level.</p>
<p><strong className="hl">At 15th Level:</strong> You gain a +4 insight bonus on all your saving throws and to your AC during surprise rounds and when you are otherwise unaware of an attack.</p>
</>};
const _pranked = {title: "Pranked", jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World</Link><br/><strong>Pranked:</strong> Capricious fey constantly bedevil you, playing pranks on you such as tying your shoelaces together, hiding your gear, making inappropriate noises or smells at formal events, and mimicking your voice to tell embarrassing lies.</p>
<p><strong className="hl">Penalty:</strong> You take a -4 penalty on initiative checks, in addition to any social consequences the fey mischief may cause for you. Furthermore, whenever you attempt to retrieve a stored item from your gear, there's a 25% chance that you fail to find it with that action.</p>
<p><strong className="hl">Benefit:</strong> Add <Link to="/spell/faerie_fire">faerie fire</Link> and <Link to="/spell/ghost_sound">ghost sound</Link> to your list of spells known.</p>
<p><strong className="hl">At 5th Level:</strong> Add <Link to="/spell/glitterdust">glitterdust</Link> and <Link to="/spell/minor_image">minor image</Link> to your list of spells known.</p>
<p><strong className="hl">At 10th Level:</strong> Add <Link to="/spell/confusion">confusion</Link> to your list of spells known as a 5th-level spell.</p>
<p><strong className="hl">At 15th Level:</strong> Add <Link to="/spell/project_image">project image</Link> to your list of spells known.</p>
</>};
const _promethean = {title: "Promethean", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link><br/><strong>Promethean:</strong> Your body is falling apart, forcing you to rely on mechanical augmentations or replacements to keep yourself alive.</p>
<p><strong className="hl">Penalty:</strong> You take 1 point of <Link to="/rule/constitution_damage">Constitution damage</Link> each day.</p>
<p><strong className="hl">Benefit:</strong> After taking your Constitution damage, you ignore the first point of Strength, Dexterity, or Constitution damage you take for the remainder of that day.</p>
<p><strong className="hl">At 5th Level:</strong> You gain a +2 bonus on all saving throws on effects that cause <Link to="/rule/ability_damage_drain">ability damage, ability drain, or ability score penalties</Link>.</p>
<p><strong className="hl">At 10th Level:</strong> This bonus increases to +6.</p>
<p><strong className="hl">At 15th Level:</strong> Any effect that would normally deal ability drain on you instead deals ability damage whenever you successfully save against the effect.</p>
</>};
const _putrid = {title: "Putrid", jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link><br/><strong>Putrid:</strong> Your presence causes liquids to spoil.</p>
<p><strong className="hl">Penalty:</strong> Your presence stagnates water and befouls all liquids carried on your person, including magical items such as potions, and unattended sources of still water within 10 feet. Creatures who drink such a liquid are <Link to="/misc/nauseated">nauseated</Link> for 1 round (though potions and similar liquids still convey their usual benefits as well). Affected liquids remain stagnant for 1 hour after leaving your presence. <Link to="/spell/purify_food_and_drink">Purify food and drink</Link> can cleanse a stagnant potion or water with a successful caster level check (DC = 15 + double the potion's caster level).</p>
<p><strong className="hl">Benefit:</strong> None.</p>
<p><strong className="hl">At 5th Level:</strong> You become immune to the nauseated effects created by liquids your presence has befouled.</p>
<p><strong className="hl">At 10th Level:</strong> Your body is covered in noxious slime, and each creature adjacent to you at the beginning of its turn must succeed at a Fortitude save (DC = 10 + half your oracle level + your Charisma modifier) or become <Link to="/misc/sickened">sickened</Link> for 1 round.</p>
<p><strong className="hl">At 15th Level:</strong> Your slime coating grants you DR 10/-.</p>
</>};
const _reclusive = {title: "Reclusive", jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World</Link><br/><strong>Reclusive:</strong> You are reclusive and paranoid to the point that your allies cannot easily help you in times of stress or unease.</p>
<p><strong className="hl">Penalty:</strong> Whenever you are in combat, your allies must succeed at a melee touch attack to affect you with touch spells, and you must attempt saving throws to resist all spells cast by anyone other than yourself, even those cast by allies.</p>
<p><strong className="hl">Benefit:</strong> Instantaneous spells you cast only on yourself affect you as though your caster level were 1 higher.</p>
<p><strong className="hl">At 5th Level:</strong> Any spells you cast only on yourself affect you as if they were modified by the <Link to="/feat/extend_spell">Extend Spell</Link> feat. This does not increase their level or casting time.</p>
<p><strong className="hl">At 10th Level:</strong> You are immune to charm spells and spell-like abilities.</p>
<p><strong className="hl">At 15th Level:</strong> You gain spell resistance equal to 10 + your oracle level.</p>
</>};
const _scourge = {title: "Scourge", jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link><br/><strong>Scourge:</strong> You are a blight on the natural world.</p>
<p><strong className="hl">Penalty:</strong> Bizarre natural hazards develop within a 300-foot radius around you whenever you linger in a natural area for more than 10 minutes, as <Link to="/spell/lesser_curse_terrain">lesser curse terrain</Link>. You cannot choose the hazards or their locations.</p>
<p><strong className="hl">Benefit:</strong> Your movement is unimpeded by undergrowth, as a druid's <Link to="/ability/woodland_stride">woodland stride</Link> ability, as plants wither away in your footsteps.</p>
<p><strong className="hl">At 5th Level:</strong> Add <Link to="/spell/feast_of_ashes">feast of ashes</Link> to your list of 2nd-lvel oracle spells known.</p>
<p><strong className="hl">At 10th Level:</strong> Add <Link to="/spell/explosion_of_rot">explosion of rot</Link> to your list of 4th-level oracle spells known.</p>
<p><strong className="hl">At 15th Level:</strong> Add <Link to="/spell/swarm_skin">swarm skin</Link> to your list of 6th-level oracle spells known.</p>
</>};
const _shadowbound = {title: "Shadowbound", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link><br/><strong>Shadowbound:</strong> Your pigmentation is oddly colorless, and your eyes are highly sensitive to light.</p>
<p><strong className="hl">Penalty:</strong> You are <Link to="/misc/blinded">blinded</Link> for 1 round when exposed to normal or bright light and <Link to="/misc/dazzled">dazzled</Link> while in such a lit area.</p>
<p><strong className="hl">Benefit:</strong> You gain darkvision to a range of 30 feet.</p>
<p><strong className="hl">At 5th Level:</strong> The range of your darkvision increases by 30 feet.</p>
<p><strong className="hl">At 10th Level:</strong> Add <Link to="/spell/shadow_conjuration">shadow conjuration</Link> to your list of 4th-level oracle spells known and <Link to="/spell/shadow_evocation">shadow evocation</Link> to your list of 5th-level oracle spells known.</p>
<p><strong className="hl">At 15th Level:</strong> Add <Link to="/spell/shadow_walk">shadow walk</Link> to your list of 6th-level oracle spells known.</p>
</>};
const _shattered_psyche = {title: "Shattered Psyche", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_88_valley_of_the_brain_collectors">Pathfinder #88: Valley of the Brain Collectors</Link><br/><strong>Shattered Psyche:</strong> Your mind is crowded with dozens of voices, fragmented snippets of your past lives.</p>
<p><strong className="hl">Penalty:</strong> You take a -2 penalty on all Intelligence-based skill checks, Wisdom-based skill checks, and <Link to="/rule/concentration">concentration</Link> checks.</p>
<p><strong className="hl">Benefit:</strong> You gain a +4 competence bonus on saving throws made against mind-affecting effects.</p>
<p><strong className="hl">At 5th Level:</strong> You're <Link to="/umr/immune">immune</Link> to charm effects.</p>
<p><strong className="hl">At 10th Level:</strong> You're immune to compulsion effects.</p>
<p><strong className="hl">At 15th Level:</strong> You're immune to all mind-affecting effects.</p>
</>};
const _site_bound = {title: "Site-Bound", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_monster_codex">Inner Sea Monster Codex</Link><br/><strong>Site-Bound:</strong> You are bound to a particular place.</p>
<p><strong className="hl">Penalty:</strong> You form a bond with a particular 10-foot square, and must remain within 1,500 feet of that site or immediately become <Link to="/misc/sickened">sickened</Link>. You must succeed at a DC 15 Fortitude save each minute you spend outside of the boundary or become <Link to="/misc/nauseated">nauseated</Link>. For every hour spent outside of the boundary, you also take 1d4 points of <Link to="/rule/constitution_damage">Constitution damage</Link> (no save).</p>
<p><strong className="hl">Benefit:</strong> When within range of your bonded site, you gain a +1 bonus to your caster level when casting oracle spells.</p>
<p><strong className="hl">At 5th Level:</strong> The radius increases from 1,500 feet to 2,250 feet.</p>
<p><strong className="hl">At 10th Level:</strong> The radius increases to 3,000 feet and the bonus to your caster level when casting oracle spells within the boundary increases by 1.</p>
<p><strong className="hl">At 15th Level:</strong> You can move up to 1 mile from your bonded site.</p>
</>};
const _song_bound = {title: "Song-Bound", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea</Link><br/><strong>Song-Bound:</strong> (<Link to="/race/merfolk">Merfolk</Link> only) Whenever you speak, you are compelled to sing loudly, and you draw out even short utterances with vocal scales or simple melodies.</p>
<p><strong className="hl">Penalty:</strong> You cannot speak in less than a loud voice, although you may choose not to speak.</p>
<p><strong className="hl">Benefit:</strong> You can perform the <Link to="/performance/countersong">countersong</Link> bardic performance (using Perform [sing] only) for a number of rounds per day equal to your oracle level. If you gain the <Link to="/ability/bardic_performance">bardic performance</Link> class feature, these rounds are in addition to any other bardic performance rounds you gain, but they can be used only for the <em>countersong</em> bardic performance.</p>
<p><strong className="hl">At 5th Level:</strong> Add <Link to="/spell/command">command</Link> and <Link to="/spell/suggestion">suggestion</Link> to your list of spells known.</p>
<p><strong className="hl">At 10th Level:</strong> Add 1 to the DC of saving throws against language-dependent spells you cast.</p>
<p><strong className="hl">At 15th Level:</strong> Add <Link to="/spell/greater_command">greater command</Link> and <Link to="/spell/mass_suggestion">mass suggestion</Link> to your list of spells known.</p>
</>};
const _tongues = {title: "Tongues", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link><br/><strong>Tongues:</strong> In times of stress or unease, you speak in tongues.</p>
<p><strong className="hl">Penalty:</strong> Pick one of the following languages: Abyssal, Aklo, Aquan, Auran, Celestial, Ignan, Infernal, or Terran. Whenever you are in combat, you can only speak and understand the selected language. This does not interfere with spellcasting, but it does apply to spells that are <Link to="/spelldef/language_dependent">language dependent</Link>.</p>
<p><strong className="hl">Benefit:</strong> You gain the selected language as a bonus language.</p>
<p><strong className="hl">At 5th Level:</strong> Pick an additional language to speak in combat and add it to your list of known languages.</p>
<p><strong className="hl">At 10th Level:</strong> You can understand any spoken language, as if under the effects of <Link to="/spell/tongues">tongues</Link>, even during combat.</p>
<p><strong className="hl">At 15th Level:</strong> You can speak and understand any language, but your speech is still restricted during combat.</p>
</>};
const _toxic_blood = {title: "Toxic Blood", jsx: <><p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex</Link><br/><strong>Toxic Blood:</strong> Your body is ravaged by a potent, slow-acting poison that resists all treatment.</p>
<p><strong className="hl">Penalty:</strong> Whenever you must attempt a Fortitude save to resist a poison effect, roll twice and take the lowest result. Additionally, you need one more consecutive successful save to end an ongoing poison. You lose any immunity to poison you have upon receiving this curse, and you become immune to <Link to="/spell/delay_poison">delay poison</Link> and <Link to="/spell/neutralize_poison">neutralize poison</Link>, as well as other attempts to suppress or remove the poison from which you are suffering.</p>
<p><strong className="hl">Benefit:</strong> You gain the <Link to="/ability/poison_use">poison use</Link> ability.</p>
<p><strong className="hl">At 5th Level:</strong> You are so envenomed that your touch becomes poisonous. Once per day for every 4 oracle levels you have, you can deliver a unique contact poison as a touch attack or via an unarmed strike or natural weapon.</p>
<div className="sideNoteWrap"><ScrollContainer id="oraclecurse-toxic_blood--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Poison; Contact</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 your oracle level + your Cha modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 5 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d2 <Link to="/rule/dex_damage">Dex damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><p><strong className="hl">At 10th Level:</strong> The poison deals 1d3 points of Dexterity damage per round for 7 rounds.</p>
<p><strong className="hl">At 15th Level:</strong> You can expend a use of your poison touch to transfer any poison effect you are currently experiencing from yourself to another creature. The touched creature must immediately attempt a saving throw against the poison (using the poison's initial DC and duration for a single dose, regardless of how many doses are currently affecting you). If the creature fails its save, the poison ceases to act on you, as if you had succeeded at all the necessary saves (this bypasses your immunity to effects that remove poison).</p>
</>};
const _vampirism = {title: "Vampirism", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link><br/><strong>Vampirism:</strong> You crave the taste of fresh, warm blood.</p>
<p><strong className="hl">Penalty/Benefit:</strong> You take damage from positive energy and heal from negative energy as if you were undead.</p>
<p><strong className="hl">At 5th Level:</strong> You gain <Link to="/umr/channel_resistance">channel resistance</Link> +4.</p>
<p><strong className="hl">At 10th Level:</strong> You add <Link to="/spell/vampiric_touch">vampiric touch</Link> to your list of 3rd-level oracle spells known and <Link to="/spell/undead_anatomy_ii">undead anatomy II</Link> to your list of 5th-level oracle spells known.</p>
<p><strong className="hl">At 15th Level:</strong> You gain <Link to="/rule/damage_reduction">damage reduction</Link> 5/magic.</p>
</>};
const _wasting = {title: "Wasting", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link><br/><strong>Wasting:</strong> Your body is slowly rotting away.</p>
<p><strong className="hl">Penalty:</strong> You take a -4 penalty on Charisma-based skill checks, except for Intimidate.</p>
<p><strong className="hl">Benefit:</strong> You gain a +4 competence bonus on saves made against disease.</p>
<p><strong className="hl">At 5th Level:</strong> You are immune to the <Link to="/misc/sickened">sickened</Link> condition (but not nauseated).</p>
<p><strong className="hl">At 10th Level:</strong> You gain immunity to disease.</p>
<p><strong className="hl">At 15th Level:</strong> You are immune to the <Link to="/misc/nauseated">nauseated</Link> condition.</p>
</>};
const _wolfscarred_face = {title: "Wolfscarred Face", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_angels">Blood of Angels</Link><br/><strong>Wolfscarred Face:</strong> Your face is deformed, as though you were born with a wolf's muzzle instead of an ordinary nose and jaw. Many mistake you for a werewolf, and in areas plagued by lycanthropes, you must take pains to hide your face.</p>
<p><strong className="hl">Penalty:</strong> You have a severe speech impediment, and any spells you cast with a verbal component have a 20% chance of failing, wasting your action but not expending the spell.</p>
<p><strong className="hl">Benefit:</strong> You gain a <Link to="/umr/natural_attack">natural bite attack</Link> that deals 1d4 points of damage if you are a Medium creature or 1d3 points of damage if you are Small.</p>
<p><strong className="hl">At 5th Level:</strong> You add <Link to="/spell/magic_fang">magic fang</Link> to your list of known spells and your bite damage increases to 1d6 if you are Medium or 1d4 if you are Small.</p>
<p><strong className="hl">At 10th Level:</strong> The damage dealt by your bite attack increases to 1d8 if you are Medium or 1d6 if you are Small.</p>
<p><strong className="hl">At 15th Level:</strong> You add <Link to="/spell/greater_magic_fang">greater magic fang</Link> to your list of known spells and the damage dealt by your bite attack increases to 2d6 if you are Medium or 1d8 if you are Small.</p>
</>};
const _wrecker = {title: "Wrecker", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_fiends">Blood of Fiends</Link><br/><strong>Wrecker:</strong> The destructive power of <Link to="/rule/the_abyss">the Abyss</Link> and its teeming hordes of <Link to="/family/demon">demons</Link> seeps from your very pores and into your belongings and surroundings.</p>
<p><strong className="hl">Penalty:</strong> Held objects gain the <Link to="/misc/broken">broken</Link> condition when you use or equip them but regain their actual condition if employed by anyone else. If a held item is restored to unbroken condition, it becomes broken again the following round.</p>
<p><strong className="hl">Benefit:</strong> Disable Device becomes a class skill for you and you can make Disable Device checks to destroy nonmagical traps as a move action without the need to use tools or take any action beyond simply touching it.</p>
<p><strong className="hl">At 5th Level:</strong> Whenever you attempt to damage an object with a melee attack, reduce its hardness by an amount equal to your oracle level before determining the damage you deal with that attack.</p>
<p><strong className="hl">At 10th Level:</strong> Any attacks you make against objects and constructs automatically bypass any damage reduction they may possess except epic.</p>
<p><strong className="hl">At 15th Level:</strong> Whenever you are dealt damage by an attack with a manufactured weapon, you can require the weapon's wielder to make a Reflex save (DC 10 + 1/2 your oracle level + your Charisma modifier) to avoid having the weapon collapse into dust immediately after striking you (magical weapons receive an additional saving throw against this effect).</p>
</>};
const _wrecking_mysticism = {title: "Wrecking Mysticism", jsx: <><p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox</Link><br/><strong>Wrecking Mysticism:</strong> (<Link to="/race/kitsune">Kitsune</Link> only) A divine entity has blessed you with a source of eldritch power.</p>
<p><strong className="hl">Penalty:</strong> This power erodes your fortitude, increasing by 50% the duration of any poison, sickened condition, or nauseated condition affecting you.</p>
<p><strong className="hl">Benefit:</strong> Whenever you would gain a mystery spell, you can gain <Link to="/feat/magical_tail">Magical Tail</Link> as a bonus feat instead. Once this choice has been made, it cannot be changed. You cannot replace a bonus spell granted to you by an oracle archetype with Magical Tail, even if it replaces a mystery spell.</p>
<p><strong className="hl">At 5th Level:</strong> Add <Link to="/spell/minor_image">minor image</Link> and <Link to="/spell/ventriloquism">ventriloquism</Link>.</p>
<p><strong className="hl">At 10th Level:</strong> Add <Link to="/spell/magic_jar">magic jar</Link> to your list of spells known.</p>
<p><strong className="hl">At 15th Level:</strong> Add <Link to="/spell/project_image">project image</Link> to your list of spells known.</p>
</>};
export default {not_found:_not_found,aboleth:_aboleth,acursed:_acursed,blackened:_blackened,clouded_vision:_clouded_vision,cold_blooded:_cold_blooded,consumed:_consumed,covetous:_covetous,deaf:_deaf,deep_one:_deep_one,demonic:_demonic,elemental_imbalance:_elemental_imbalance,ghoul:_ghoul,god_meddled:_god_meddled,haunted:_haunted,hellbound:_hellbound,hive:_hive,hunger:_hunger,infested:_infested,lame:_lame,legalistic:_legalistic,lich:_lich,lycanthropy:_lycanthropy,plagued:_plagued,possessed:_possessed,powerless_prophecy:_powerless_prophecy,pranked:_pranked,promethean:_promethean,putrid:_putrid,reclusive:_reclusive,scourge:_scourge,shadowbound:_shadowbound,shattered_psyche:_shattered_psyche,site_bound:_site_bound,song_bound:_song_bound,tongues:_tongues,toxic_blood:_toxic_blood,vampirism:_vampirism,wasting:_wasting,wolfscarred_face:_wolfscarred_face,wrecker:_wrecker,wrecking_mysticism:_wrecking_mysticism}