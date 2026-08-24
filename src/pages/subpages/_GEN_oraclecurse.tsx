import {IonRippleEffect} from '@ionic/react';
import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import AffInfo from '../../components/AfflictionInfo';
const _not_found = {title: "Unknown", jsx: <><h2 id="oraclecurse-not_found-error">Error</h2>
<p>Unable to find the requested oracle curse.</p>
</>};
const _aboleth = {title: "Aboleth", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link></p>
<Ability id="aboleth" icon={["broken-shield","spell-book"]}>
<Pair single id="aboleth" flavor={<>Your mind is marked by <Link to="/monster/aboleth">aboleth</Link> tampering, either as a result of a close encounter with one of these creatures while you were a child, or even through an ancestor, close family member, or one of your sisters or brothers in faith - this associate's interaction with the aboleths may be all that it takes to infect you.</>}>Aboleth</Pair>
<Pair title="Penalty">You take a -2 penalty on saving throws against mind-affecting effects.</Pair>
<Pair title="Benefit">Add <Link to="/spell/charm_person">charm person</Link> and <Link to="/spell/hypnotism">hypnotism</Link> to your list of 1st-level oracle spells known.</Pair>
<Pair title="At 5th Level">Add <Link to="/spell/minor_image">minor image</Link> to your list of 2nd-level oracle spells known.</Pair>
<Pair title="At 10th Level">Add <Link to="/spell/modify_memory">modify memory</Link> to your list of 4th-level oracle spells known.</Pair>
<Pair title="At 15th Level">Add <Link to="/spell/veil">veil</Link> to your list of 6th-level oracle spells known.</Pair>
</Ability>
</>};
const _acursed = {title: "Acursed", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link></p>
<Ability id="acursed" icon={["broken-shield","armor-upgrade","spell-book"]}>
<Pair single id="acursed" flavor="You are cursed with misfortune and sorrow.">Acursed</Pair>
<Pair title="Penalty">You cannot gain benefit from morale bonuses.</Pair>
<Pair title="Benefit">You gain a +4 bonus to all saving throws against <Link to="/spelldef/curse">curse</Link> effects.</Pair>
<Pair title="At 5th Level">Add <Link to="/spell/ill_omen">ill omen</Link> to your list of spells known.</Pair>
<Pair title="At 10th Level">Add <Link to="/spell/greater_brand">greater brand</Link> to your list of spells known.</Pair>
<Pair title="At 15th Level">You are immune to curse effects except for your own oracle curse.</Pair>
</Ability>
</>};
const _blackened = {title: "Blackened", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_angels">Blood of Angels</Link></p>
<Ability id="blackened" icon={["broken-shield","spell-book"]}>
<Pair single id="blackened" flavor="Your hands and forearms are shriveled and blackened, as if you had plunged your arms into a blazing fire, and your thin, papery skin is sensitive to the touch.">Blackened</Pair>
<Pair title="Penalty">You take a -4 penalty on weapon attack rolls.</Pair>
<Pair title="Benefit">Add <Link to="/spell/burning_hands">burning hands</Link> to your list of spells known.</Pair>
<Pair title="At 5th Level">Add <Link to="/spell/scorching_ray">scorching ray</Link> and <Link to="/spell/flaming_sphere">flaming sphere</Link> to your list of spells known.</Pair>
<Pair title="At 10th Level">Add <Link to="/spell/wall_of_fire">wall of fire</Link> to your list of spells known and your penalty on weapon attack rolls is reduced to -2.</Pair>
<Pair title="At 15th Level">Add <Link to="/spell/delayed_blast_fireball">delayed blast fireball</Link> to your list of spells known.</Pair>
</Ability>
</>};
const _clouded_vision = {title: "Clouded Vision", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="clouded-vision" icon={["broken-shield","stairs-goal"]}>
<Pair single id="clouded-vision" flavor="Your eyes are obscured, making it difficult for you to see.">Clouded Vision</Pair>
<Pair title="Penalty">You cannot see anything beyond 30 feet.</Pair>
<Pair title="Benefit">You can see as if you had darkvision 30 ft.</Pair>
<Pair title="At 5th Level">This distance increases to 60 feet.</Pair>
<Pair title="At 10th Level">You gain <Link to="/umr/blindsense">blindsense</Link> out to a range of 30 feet.</Pair>
<Pair title="At 15th Level">You gain <Link to="/umr/blindsight">blindsight</Link> out to a range of 15 feet.</Pair>
</Ability>
</>};
const _cold_blooded = {title: "Cold-Blooded", jsx: <><p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex</Link></p>
<Ability id="cold-blooded" icon={["broken-shield","armor-upgrade","stairs-goal"]}>
<Pair single id="cold-blooded" flavor="Your blood turns sluggish without sufficient heat, and you must seek warmth and shelter earlier than most.">Cold-Blooded</Pair>
<Pair title="Penalty">You take a -4 penalty on saves against cold spells and effects, and whenever you fail such a saving throw, you are <Link to="/misc/staggered">staggered</Link> for 1 round.</Pair>
<Pair title="Benefit">You can survive without food four times longer than a typical creature of your species before you begin to starve.</Pair>
<Pair title="At 5th Level">Poisons affecting you have their onset time doubled and last half as long if they end after a set time (for example, a poison with a frequency of 1/round for 6 rounds would instead have a frequency of 1/round for 3 rounds). Poisons with no onset time gain an onset time of 1 round.</Pair>
<Pair title="At 10th Level">Whenever an action you have <Link to="/rule/readied">readied</Link> is triggered, you can take an additional move action at half your speed - along with your readied action - even if you have already taken a move action that round.</Pair>
<Pair title="At 15th Level">You can take an additional move action a number of times per day equal to your Charisma modifier. You can take these additional move actions only on your turn, and can take only one of these extra move actions per turn.</Pair>
<Pair title="Special">This oracle curse is common among <Link to="/monster/lizardfolk">lizardfolk</Link> and other oracles with the reptilian subtype.</Pair>
</Ability>
</>};
const _consumed = {title: "Consumed", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_fiends">Blood of Fiends</Link></p>
<Ability id="consumed" icon={["broken-shield","armor-upgrade","rolling-dices","remedy"]}>
<Pair single id="consumed" flavor={<>Your connection to Abaddon and the <Link to="/family/daemon">daemons</Link> that call it home has left you diminished but still able to scorn many mortal frailties.</>}>Consumed</Pair>
<Pair title="Penalty">Whenever you take lethal hit point damage, you take an additional number of points of nonlethal damage equal to 1/2 the lethal damage you took.</Pair>
<Pair title="Benefit">You automatically <Link to="/misc/stabilize">stabilize</Link> when brought below 0 hit points.</Pair>
<Pair title="At 5th Level">Whenever you make a saving throw against a disease or poison effect, roll twice and use the higher roll as your result.</Pair>
<Pair title="At 10th Level">You can go without food or water for a number of days equal to your oracle level before suffering any ill effects due to <Link to="/rule/starvation">starvation</Link> or thirst.</Pair>
<Pair title="At 15th Level">Whenever a creature within 30 feet takes damage while in combat, you automatically gain 1 temporary hit point. You can benefit from this ability a number of times per round equal to your Charisma modifier, and you can gain a total number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> in this way equal to your oracle level. Temporary hit points gained this way disappear after 1 hour.</Pair>
</Ability>
</>};
const _covetous = {title: "Covetous", jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons</Link></p>
<Ability id="covetous" icon={["broken-shield","skills","upgrade","spell-book","armor-upgrade"]}>
<Pair single id="covetous" flavor="You find yourself drawn to the luster of wealthy living.">Covetous</Pair>
<Pair title="Penalty">You must wear fine nonmagical clothing and jewelry worth at least 50 gp + 100 gp per character level you have beyond 1st. If you do not have sufficient wealth to purchase this additional equipment, you feel a strong desire (but are not compelled) to sell existing items or steal from others to obtain it. You are <Link to="/misc/sickened">sickened</Link> whenever you do not meet this requirement; you are also sickened for 24 hours after anything worth 25 gp &times; your character level or more is taken from you against your will.</Pair>
<Pair title="Benefit"><Link to="/skill/use_magic_device">Use Magic Device</Link> becomes a class skill for you.</Pair>
<Pair title="At 5th Level">You gain a +4 insight bonus on <Link to="/skill/appraise">Appraise</Link> checks, <Link to="/skill/spellcraft">Spellcraft</Link> checks to identify magic items, and Use Magic Device checks.</Pair>
<Pair title="At 10th Level">You add <Link to="/spell/fabricate">fabricate</Link> to your list of spells known.</Pair>
<Pair title="At 15th Level">You add half your oracle level to your CMD against <Link to="/rule/steal">steal</Link> combat maneuvers and to the DC of Sleight of Hand checks to take items from you.</Pair>
</Ability>
</>};
const _deaf = {title: "Deaf", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="deaf" icon={["broken-shield","upgrade","stairs-goal"]}>
<Pair single id="deaf" flavor="You cannot hear.">Deaf</Pair>
<Pair title="Penalty">You suffer all of the usual penalties for being <Link to="/misc/deafened">deafened</Link>.</Pair>
<Pair title="Benefit">You cast all of your spells as if they were modified by the <Link to="/feat/silent_spell">Silent Spell</Link> feat. This does not increase their level or casting time.</Pair>
<Pair title="At 5th Level">You receive a +3 competence bonus on <Link to="/skill/perception">Perception</Link> checks that do not rely upon hearing, and the initiative penalty for being deaf is reduced to -2.</Pair>
<Pair title="At 10th Level">You gain <Link to="/umr/scent">scent</Link> and you do not suffer any penalty on initiative checks due to being deaf.</Pair>
<Pair title="At 15th Level">You gain <Link to="/umr/tremorsense">tremorsense</Link> out to a range of 30 feet.</Pair>
</Ability>
</>};
const _deep_one = {title: "Deep One", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link></p>
<Ability id="deep-one" icon={["broken-shield","stairs-goal","armor-upgrade","upgrade","magic-swirl"]}>
<Pair single id="deep-one" flavor="The lure of the ocean tugs at your soul.">Deep One</Pair>
<Pair title="Penalty">You reduce your base land speed by 5 feet.</Pair>
<Pair title="Benefit">You gain a swim speed equal to your land speed, and if you already have a swim speed, you increase it by 10 feet.</Pair>
<Pair title="At 5th Level">Your natural armor bonus increases by 1 as your skin thickens.</Pair>
<Pair title="At 10th Level">You gain a +1 bonus to your caster level when casting spells underwater and when casting spells with the water descriptor.</Pair>
<Pair title="At 15th Level">You gain the benefits of <Link to="/spell/freedom_of_movement">freedom of movement</Link> while underwater.</Pair>
</Ability>
</>};
const _demonic = {title: "Demonic", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link></p>
<Ability id="demonic" icon={["broken-shield","upgrade","armor-upgrade"]}>
<Pair single id="demonic" flavor="Your heart is cursed with the pull of the Abyss.">Demonic</Pair>
<Pair title="Penalty">You cannot cast spells with the good or lawful descriptors, nor can you summon good or lawful creatures. Good and lawful creatures instinctively distrust you, and you take a -4 penalty on all <Link to="/skill/diplomacy">Diplomacy</Link> checks against such creatures. Diplomacy is not a class skill for you.</Pair>
<Pair title="Benefit">You gain a +2 bonus on all <Link to="/skill/bluff">Bluff</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks. You gain Bluff or Intimidate (choose one) as a class skill.</Pair>
<Pair title="At 5th Level">You gain a +4 bonus to all saving throws against fear effects.</Pair>
<Pair title="At 10th Level">You gain immunity to poison.</Pair>
<Pair title="At 15th Level">Any weapon you wield is treated as chaotic and evil for the purposes of overcoming damage reduction.</Pair>
</Ability>
</>};
const _elemental_imbalance = {title: "Elemental Imbalance", jsx: <><p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link></p>
<Ability id="elemental-imbalance" icon={["broken-shield","spell-book"]}>
<Pair single id="elemental-imbalance" flavor="You wield an element's might, but you are vulnerable to its opposite.">Elemental Imbalance</Pair>
<Pair title="Penalty"><p>Choose air, earth, fire, or water.</p>
<p>If you select air, you gain <Link to="/umr/vulnerability">vulnerability</Link> to acid, cannot benefit from any acid <Link to="/umr/resistance">resistance</Link> or <Link to="/umr/immunity">immunity</Link>, and cannot cast spells with the acid or earth descriptors.</p>
<p>If you select earth, you gain vulnerability to electricity, cannot benefit from any electricity resistance or immunity, and cannot cast spells with the air or electricity descriptors.</p>
<p>If you select fire, you gain vulnerability to cold, cannot benefit from any cold resistance or immunity, and cannot cast spells with the cold or water descriptors.</p>
<p>If you select water, you gain vulnerability to fire, cannot benefit from any fire resistance or immunity, and cannot cast spells with the fire descriptor.</p>
</Pair>
<Pair title="Benefit"><p>As you advance in level, add the following spells to your oracle spells known based on your chosen element.</p>
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
</Pair>
</Ability>
</>};
const _ghoul = {title: "Ghoul", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link></p>
<Ability id="ghoul" icon={["broken-shield","armor-upgrade","spell-book","magic-swirl"]}>
<Pair single id="ghoul" flavor="While your actual dietary needs don't change, you crave the flesh of sentient creatures.">Ghoul</Pair>
<Pair title="Penalty">You can only go without food for 12 hours before you begin to <Link to="/rule/starve">starve</Link>, and when you do starve, the DC of the Constitution check to avoid taking damage increases by 5.</Pair>
<Pair title="Benefit">If you feed on fresh, raw flesh (no older than 1 hour) from a creature of your own race, you gain a +1 morale bonus on all saving throws for 24 hours.</Pair>
<Pair title="At 5th Level">You add <Link to="/spell/ghoul_touch">ghoul touch</Link> to your list of 2nd-level oracle spells known.</Pair>
<Pair title="At 10th Level">You become immune to paralysis and disease.</Pair>
<Pair title="At 15th Level">You gain the effects of <Link to="/spell/heroes_feast">heroes' feast</Link> whenever you feed on the raw flesh of a sentient creature, and the effects of this <em>heroes' feast</em> double if the flesh you eat comes from a member of your own race (this effect applies no more often than once per day).</Pair>
</Ability>
</>};
const _god_meddled = {title: "God-Meddled", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion</Link></p>
<Ability id="god-meddled" icon={["broken-shield","armor-upgrade"]}>
<Pair single id="god-meddled" flavor="The isle of Iblydos is populated and watched over by hero-gods, some of whom are known for entangling mortals in their own affairs. The gods' interference in your life has left you with strange, unpredictable powers dependent on divine whim. Bizarre side effects occur whenever you are affected by a spell from a divine caster - for better or for worse.">God-Meddled</Pair>
<Pair title="Effects">Once per round, when a creature casts a divine spell including you as a target, roll 1d20 and consult the God-Meddled Effects table below. The effect resulting from this roll begins at the end of that enemy's turn. This effect targets only you, even if other creatures were included as targets of the triggering spell.</Pair>
<Pair title="At 5th Level">You gain a +2 competence bonus on saving throws to resist divine spells.</Pair>
<Pair title="At 10th Level">You become immune to the <Link to="/misc/confused">confused</Link> condition.</Pair>
<Pair title="At 15th Level">You gain a +4 competence bonus on saving throws to resist mind-affecting effects.</Pair>
</Ability>
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
const _haunted = {title: "Haunted", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="haunted" icon={["broken-shield","spell-book"]}>
<Pair single id="haunted" flavor="Malevolent spirits follow you wherever you go, causing minor mishaps and strange occurrences (such as unexpected breezes, small objects moving on their own, and faint noises).">Haunted</Pair>
<Pair title="Penalty">Retrieving any stored item from your gear requires a <strong className="hl">standard action</strong>, unless it would normally take longer. Any item you drop lands 10 feet away from you in a random direction.</Pair>
<Pair title="Benefit">Add <Link to="/spell/mage_hand">mage hand</Link> and <Link to="/spell/ghost_sound">ghost sound</Link> to your list of spells known.</Pair>
<Pair title="At 5th Level">Add <Link to="/spell/levitate">levitate</Link> and <Link to="/spell/minor_image">minor image</Link> to your list of spells known.</Pair>
<Pair title="At 10th Level">Add <Link to="/spell/telekinesis">telekinesis</Link> to your list of spells known.</Pair>
<Pair title="At 15th Level">Add <Link to="/spell/reverse_gravity">reverse gravity</Link> to your list of spells known.</Pair>
</Ability>
</>};
const _hellbound = {title: "Hellbound", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link></p>
<Ability id="hellbound" icon={["broken-shield","upgrade","armor-upgrade"]}>
<Pair single id="hellbound" flavor="Infernal influence grants you profane insight and weighs on your soul.">Hellbound</Pair>
<Pair title="Penalty">You cannot cast spells with the good or chaotic descriptors, and you can't summon good or chaotic creatures. Good and chaotic creatures instinctively distrust you, and you take a -4 penalty on all <Link to="/skill/diplomacy">Diplomacy</Link> checks against such creatures.</Pair>
<Pair title="Benefit">You gain a +2 bonus on all <Link to="/skill/bluff">Bluff</Link> and <Link to="/skill/intimidate">Intimidate</Link> checks.</Pair>
<Pair title="At 5th Level">You gain a +4 bonus to all saving throws against charm effects.</Pair>
<Pair title="At 10th Level">You gain immunity to fire.</Pair>
<Pair title="At 15th Level">Any weapon you wield is treated as lawful and evil for the purposes of overcoming damage reduction.</Pair>
</Ability>
</>};
const _hive = {title: "Hive", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link></p>
<Ability id="hive" icon={["broken-shield","bowman","armor-upgrade"]}>
<Pair single id="hive" flavor={<>You were exposed at a young age (perhaps even before you were born) to the alien species known as the <Link to="/family/hive">hive</Link>, but this exposure did not result in a full-blown infestation by these otherworldly monsters.</>}>Hive</Pair>
<Pair title="Penalty">Others (including animals) find the unsightly spines and rough growths that periodically emerge from your flesh to be disturbing and distracting, and you take a -4 penalty on Bluff, Diplomacy, Handle Animal, and Ride checks.</Pair>
<Pair title="Benefit">Once per day as a <strong className="hl">standard action</strong>, you can cough up an ovoid, leathery sphere that can be hurled as a flask of <Link to="/eq-weapon/acid">acid</Link>, though it becomes inert after 24 hours.</Pair>
<Pair title="At 5th Level">You gain the benefits of <Link to="/spell/endure_elements">endure elements</Link> in hot environments and are immune to <Link to="/rule/infestations">infestations</Link> (save for those from the hive itself).</Pair>
<Pair title="At 10th Level">Your skin deformities grow numerous enough to increase your natural armor bonus by 1.</Pair>
<Pair title="At 15th Level">You gain acid <Link to="/umr/resistance">resistance</Link> 20.</Pair>
</Ability>
</>};
const _hunger = {title: "Hunger", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_monster_codex">Inner Sea Monster Codex</Link></p>
<Ability id="hunger" icon={["broken-shield","mailed-fist","upgrade","stairs-goal"]}>
<Pair single id="hunger" flavor="Ravenous hunger wracks your body in stressful situations.">Hunger</Pair>
<Pair title="Penalty">You gain none of the benefits from spells or magic items that provide nourishment, such as <Link to="/spell/goodberry">goodberry</Link>, <Link to="/spell/heroes_feast">heroes' feast</Link>, or a <Link to="/magic-ring/ring_of_sustenance">ring of sustenance</Link>. You begin each combat with the <Link to="/misc/sickened">sickened</Link> condition until you deal damage with your bite attack (see below).</Pair>
<Pair title="Benefit">You gain a <Link to="/umr/bite_attack">bite attack</Link> that deals an amount of piercing damage appropriate for your size (1d8 for a Large creature, 1d6 for Medium, 1d4 for Small) as a secondary natural attack.</Pair>
<Pair title="At 5th Level">You gain the <Link to="/umr/grab">grab</Link> monster special ability on bite attacks against creatures smaller than yourself.</Pair>
<Pair title="At 10th Level">Your bite attack deals damage as if you were <Link to="/misc/one_size_category_larger">one size category larger</Link>.</Pair>
<Pair title="At 15th Level">You gain the <Link to="/umr/blood_drain">blood drain</Link> monster special ability with your bite, dealing 1d2 points of <Link to="/rule/constitution_damage">Constitution damage</Link> at the end of a turn if you grapple a foe.</Pair>
</Ability>
</>};
const _infested = {title: "Infested", jsx: <><p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex</Link></p>
<Ability id="infested" icon={["broken-shield","armor-upgrade","spell-book"]}>
<Pair single id="infested" flavor="Insects, spiders, grubs, and other vermin plague you constantly. They crawl in your hair, fill your clothes, and fly or crawl into your mouth, nose, and ears.">Infested</Pair>
<Pair title="Penalty">You take a -4 penalty on <Link to="/skill/diplomacy">Diplomacy</Link> checks, and when you first meet someone, the person's initial attitude toward you starts one level lower than normal. Animals shy away from you - you take a -4 penalty on <Link to="/skill/handle_animal">Handle Animal</Link> checks.</Pair>
<Pair title="Benefit">You gain a +2 bonus on Fortitude saves versus poisons from insects, scorpions, and spiders, as well as the distraction ability of swarms of such creatures.</Pair>
<Pair title="At 5th Level">You add <Link to="/spell/vomit_swarm">vomit swarm</Link> to your list of spells known.</Pair>
<Pair title="At 7th Level">Your bonus on poison and distraction saves increases to +4, and you gain DR 10/- against all swarm damage.</Pair>
<Pair title="At 13th Level">You add <Link to="/spell/swarm_skin">swarm skin</Link> to your list of spells known.</Pair>
<Pair title="At 17th Level">You become immune to the swarm damage and the distraction ability of insect, scorpion, and spider swarms.</Pair>
</Ability>
</>};
const _lame = {title: "Lame", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="lame" icon={["broken-shield","upgrade","armor-upgrade"]}>
<Pair single id="lame" flavor="One of your legs is permanently wounded.">Lame</Pair>
<Pair title="Penalty">You reduce your base land speed by 10 feet if your base speed is 30 feet or more. If your base speed is less than 30 feet, your speed is reduced by 5 feet.</Pair>
<Pair title="Benefit">Your speed is never reduced due to encumbrance.</Pair>
<Pair title="At 5th Level">You are immune to the <Link to="/misc/fatigued">fatigued</Link> condition (but not exhaustion).</Pair>
<Pair title="At 10th Level">Your speed is never reduced by armor.</Pair>
<Pair title="At 15th Level">You are immune to the <Link to="/misc/exhausted">exhausted</Link> condition.</Pair>
</Ability>
</>};
const _legalistic = {title: "Legalistic", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_fiends">Blood of Fiends</Link></p>
<Ability id="legalistic" icon={["broken-shield","upgrade","armor-upgrade","armor-downgrade"]}>
<Pair single id="legalistic" flavor="The shackles of Hell impose savage consequences should you violate a covenant, but also imbue you with remarkable guile.">Legalistic</Pair>
<Pair title="Penalty">Whenever you break your word (either purposefully or unintentionally), you become <Link to="/misc/sickened">sickened</Link> for 24 hours or until you meet your obligation, whichever comes first.</Pair>
<Pair title="Benefit">Once per day, you can make a vow to yourself that grants a +4 morale bonus on any one roll you make while trying to fulfill a promise made to another individual.</Pair>
<Pair title="At 5th Level">You gain a +3 competence bonus on <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/intimidate">Intimidate</Link>, and <Link to="/skill/sense_motive">Sense Motive</Link> checks while talking to an individual one-on-one.</Pair>
<Pair title="At 10th Level">You can make a new saving throw each minute to resist mind-affecting effects as your subconscious searches for loopholes.</Pair>
<Pair title="At 15th Level">Any creature that violates its freely given word to you takes a penalty to AC, to spell resistance, and on saving throws against your attacks and abilities equal to your Charisma modifier (minimum 1) for 24 hours.</Pair>
</Ability>
</>};
const _lich = {title: "Lich", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link></p>
<Ability id="lich" icon={["broken-shield","spell-book","armor-upgrade"]}>
<Pair single id="lich" flavor={<>Every living spellcaster hides a secret in their flesh - a unique, personalized set of conditions that, when all are fulfilled in the correct order, can trigger the transformation into a <Link to="/template/lich">lich</Link>. Normally, one must expend years and tens of thousands of gold pieces to research this deeply personalized method of attaining immortality. Yet, in a rare few cases, chance and ill fortune can conspire against an unsuspecting spellcaster. You have (unknowingly) fulfilled most (but not all) of the ritualistic components to achieve lichdom. You have yet to turn into an undead creature, but you are close.</>}>Lich</Pair>
<Pair title="Effects">You take damage from positive energy and heal from negative energy as if you were undead.</Pair>
<Pair title="At 5th Level">Add <Link to="/spell/control_undead">control undead</Link> to your list of 2nd-level oracle spells known.</Pair>
<Pair title="At 10th Level">Add <Link to="/spell/undead_anatomy_i">undead anatomy I</Link> to your list of 3rd-level oracle spells known and <Link to="/spell/undead_anatomy_ii">undead anatomy II</Link> to your list of 5th-level oracle spells known.</Pair>
<Pair title="At 15th Level">You are immune to death effects.</Pair>
</Ability>
</>};
const _lycanthropy = {title: "Lycanthropy", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link></p>
<Ability id="lycanthropy" icon={["broken-shield","upgrade","spell-book","armor-upgrade"]}>
<Pair single id="lycanthropy" flavor="You suffer from a minor form of lycanthropy. The exact animal your body and mind are aligned with can vary, but you should choose an animal that matches your faith thematically.">Lycanthropy</Pair>
<Pair title="Penalty">In times of stress or unease, you cannot speak - only growl and snarl like an animal. This ability works similarly to the <Link to="/oraclecurse/tongues">tongues</Link> curse, but whenever you are in combat, you cannot speak at all. This does not interfere with spellcasting but does apply to spells that are language dependent. A character under the effects of <Link to="/spell/speak_with_animals">speak with animals</Link> can understand you, and you can communicate with such characters normally. You can speak with animals when in this condition.</Pair>
<Pair title="Benefit">Choose one type of animal commonly associated with lycanthropy (such as rats, wolves, or bears); you gain a +4 bonus on <Link to="/skill/handle_animal">Handle Animal</Link> checks with these creatures.</Pair>
<Pair title="At 5th Level">Add <Link to="/spell/charm_animal">charm animal</Link> to your list of 1st-level oracle spells known and <Link to="/spell/animal_messenger">animal messenger</Link> to your list of 2nd-level oracle spells known.</Pair>
<Pair title="At 10th Level">Add <Link to="/spell/beast_shape_i">beast shape I</Link> to your list of 3rd-level oracle spells known and <Link to="/spell/beast_shape_ii">beast shape II</Link> to your list of 5th-level oracle spells known.</Pair>
<Pair title="At 15th Level">You gain <Link to="/rule/damage_reduction">damage reduction</Link> 5/silver, and if you already have this type of damage reduction, it increases in value by 5 (to a maximum of DR 15/silver).</Pair>
</Ability>
</>};
const _plagued = {title: "Plagued", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link></p>
<Ability id="plagued" icon={["broken-shield","armor-upgrade","spell-book","upgrade"]}>
<Pair single id="plagued" flavor="You suffer from minor ailments and sicknesses. While you struggle to resist new diseases, you have grown accustomed to the many inconveniences of sickness.">Plagued</Pair>
<Pair title="Penalty">You take a -1 penalty on all saving throws against disease or infestation effects.</Pair>
<Pair title="Benefit">You are immune to the <Link to="/misc/sickened">sickened</Link> condition.</Pair>
<Pair title="At 5th Level">Add <Link to="/spell/pox_pustules">pox pustules</Link> to your list of 2nd-level oracle spells known.</Pair>
<Pair title="At 10th Level">Increase the save DC of any disease effect you create by +2, and you raise the number of saves required to recover naturally from these diseases by 1.</Pair>
<Pair title="At 15th Level">You are immune to the effects of disease and <Link to="/rule/infestations">infestations</Link>, but you can still function as a carrier for sickness.</Pair>
</Ability>
</>};
const _possessed = {title: "Possessed", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link></p>
<Ability id="possessed" icon={["broken-shield","rolling-dices","armor-upgrade","spell-book"]}>
<Pair single id="possessed" flavor="Another mind shares your body, interfering with your control, and it's more difficult for you to concentrate as a result.">Possessed</Pair>
<Pair title="Penalty">You take a -2 penalty on all <Link to="/rule/concentration">concentration</Link> checks, and concentrating to maintain a spell duration provokes attacks of opportunity.</Pair>
<Pair title="Benefit">Whenever a foe attempts to use an effect to possess or dominate you and the effect allows a saving throw to negate, you may roll twice and take the better of the two results.</Pair>
<Pair title="At 5th Level">If you become <Link to="/misc/dazed">dazed</Link> or <Link to="/misc/stunned">stunned</Link>, you can choose instead to become <Link to="/misc/confused">confused</Link> for twice the duration the daze or stun effect would have normally lasted.</Pair>
<Pair title="At 10th Level">Add <Link to="/spell/possession">possession</Link> to your list of 5th-level oracle spells known.</Pair>
<Pair title="At 15th Level">Add <Link to="/spell/greater_object_possession">greater object possession</Link> to your list of 7th-level oracle spells known.</Pair>
</Ability>
</>};
const _powerless_prophecy = {title: "Powerless Prophecy", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_monster_codex">Inner Sea Monster Codex</Link></p>
<Ability id="powerless-prophecy" icon={["broken-shield","armor-upgrade","upgrade"]}>
<Pair single id="powerless-prophecy" flavor="You are forewarned of danger but can't act to prevent it.">Powerless Prophecy</Pair>
<Pair title="Penalty">You can't take any actions in a surprise round, including free actions, except for <Link to="/arc-oracle/cyclopean_seer">flash of insight</Link>. In the absence of a surprise round, you are <Link to="/misc/staggered">staggered</Link> for the entire first round of combat.</Pair>
<Pair title="Benefit">You gain <Link to="/ability/uncanny_dodge">uncanny dodge</Link>, as the rogue class feature.</Pair>
<Pair title="At 5th Level">You gain a +4 insight bonus on initiative checks.</Pair>
<Pair title="At 10th Level">You gain <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> as the rogue ability, using your oracle level as your rogue level.</Pair>
<Pair title="At 15th Level">You gain a +4 insight bonus on all your saving throws and to your AC during surprise rounds and when you are otherwise unaware of an attack.</Pair>
</Ability>
</>};
const _pranked = {title: "Pranked", jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World</Link></p>
<Ability id="pranked" icon={["broken-shield","spell-book"]}>
<Pair single id="pranked" flavor="Capricious fey constantly bedevil you, playing pranks on you such as tying your shoelaces together, hiding your gear, making inappropriate noises or smells at formal events, and mimicking your voice to tell embarrassing lies.">Pranked</Pair>
<Pair title="Penalty">You take a -4 penalty on initiative checks, in addition to any social consequences the fey mischief may cause for you. Furthermore, whenever you attempt to retrieve a stored item from your gear, there's a 25% chance that you fail to find it with that action.</Pair>
<Pair title="Benefit">Add <Link to="/spell/faerie_fire">faerie fire</Link> and <Link to="/spell/ghost_sound">ghost sound</Link> to your list of spells known.</Pair>
<Pair title="At 5th Level">Add <Link to="/spell/glitterdust">glitterdust</Link> and <Link to="/spell/minor_image">minor image</Link> to your list of spells known.</Pair>
<Pair title="At 10th Level">Add <Link to="/spell/confusion">confusion</Link> to your list of spells known as a 5th-level spell.</Pair>
<Pair title="At 15th Level">Add <Link to="/spell/project_image">project image</Link> to your list of spells known.</Pair>
</Ability>
</>};
const _promethean = {title: "Promethean", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link></p>
<Ability id="promethean" icon={["broken-shield","armor-upgrade"]}>
<Pair single id="promethean" flavor="Your body is falling apart, forcing you to rely on mechanical augmentations or replacements to keep yourself alive.">Promethean</Pair>
<Pair title="Penalty">You take 1 point of <Link to="/rule/constitution_damage">Constitution damage</Link> each day.</Pair>
<Pair title="Benefit">After taking your Constitution damage, you ignore the first point of Strength, Dexterity, or Constitution damage you take for the remainder of that day.</Pair>
<Pair title="At 5th Level">You gain a +2 bonus on all saving throws on effects that cause <Link to="/rule/ability_damage_drain">ability damage, ability drain, or ability score penalties</Link>.</Pair>
<Pair title="At 10th Level">This bonus increases to +6.</Pair>
<Pair title="At 15th Level">Any effect that would normally deal ability drain on you instead deals ability damage whenever you successfully save against the effect.</Pair>
</Ability>
</>};
const _putrid = {title: "Putrid", jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="putrid" icon={["broken-shield","armor-upgrade"]}>
<Pair single id="putrid" flavor="Your presence causes liquids to spoil.">Putrid</Pair>
<Pair title="Penalty">Your presence stagnates water and befouls all liquids carried on your person, including magical items such as potions, and unattended sources of still water within 10 feet. Creatures who drink such a liquid are <Link to="/misc/nauseated">nauseated</Link> for 1 round (though potions and similar liquids still convey their usual benefits as well). Affected liquids remain stagnant for 1 hour after leaving your presence. <Link to="/spell/purify_food_and_drink">Purify food and drink</Link> can cleanse a stagnant potion or water with a successful caster level check (DC = 15 + double the potion's caster level).</Pair>
<Pair title="Benefit">None.</Pair>
<Pair title="At 5th Level">You become immune to the nauseated effects created by liquids your presence has befouled.</Pair>
<Pair title="At 10th Level">Your body is covered in noxious slime, and each creature adjacent to you at the beginning of its turn must succeed at a Fortitude save (DC = 10 + half your oracle level + your Charisma modifier) or become <Link to="/misc/sickened">sickened</Link> for 1 round.</Pair>
<Pair title="At 15th Level">Your slime coating grants you DR 10/-.</Pair>
</Ability>
</>};
const _reclusive = {title: "Reclusive", jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World</Link></p>
<Ability id="reclusive" icon={["broken-shield","upgrade","armor-upgrade"]}>
<Pair single id="reclusive" flavor="You are reclusive and paranoid to the point that your allies cannot easily help you in times of stress or unease.">Reclusive</Pair>
<Pair title="Penalty">Whenever you are in combat, your allies must succeed at a melee touch attack to affect you with touch spells, and you must attempt saving throws to resist all spells cast by anyone other than yourself, even those cast by allies.</Pair>
<Pair title="Benefit">Instantaneous spells you cast only on yourself affect you as though your caster level were 1 higher.</Pair>
<Pair title="At 5th Level">Any spells you cast only on yourself affect you as if they were modified by the <Link to="/feat/extend_spell">Extend Spell</Link> feat. This does not increase their level or casting time.</Pair>
<Pair title="At 10th Level">You are immune to charm spells and spell-like abilities.</Pair>
<Pair title="At 15th Level">You gain spell resistance equal to 10 + your oracle level.</Pair>
</Ability>
</>};
const _scourge = {title: "Scourge", jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="scourge" icon={["broken-shield","stairs-goal","spell-book"]}>
<Pair single id="scourge" flavor="You are a blight on the natural world.">Scourge</Pair>
<Pair title="Penalty">Bizarre natural hazards develop within a 300-foot radius around you whenever you linger in a natural area for more than 10 minutes, as <Link to="/spell/lesser_curse_terrain">lesser curse terrain</Link>. You cannot choose the hazards or their locations.</Pair>
<Pair title="Benefit">Your movement is unimpeded by undergrowth, as a druid's <Link to="/ability/woodland_stride">woodland stride</Link> ability, as plants wither away in your footsteps.</Pair>
<Pair title="At 5th Level">Add <Link to="/spell/feast_of_ashes">feast of ashes</Link> to your list of 2nd-lvel oracle spells known.</Pair>
<Pair title="At 10th Level">Add <Link to="/spell/explosion_of_rot">explosion of rot</Link> to your list of 4th-level oracle spells known.</Pair>
<Pair title="At 15th Level">Add <Link to="/spell/swarm_skin">swarm skin</Link> to your list of 6th-level oracle spells known.</Pair>
</Ability>
</>};
const _shadowbound = {title: "Shadowbound", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link></p>
<Ability id="shadowbound" icon={["broken-shield","stairs-goal","spell-book"]}>
<Pair single id="shadowbound" flavor="Your pigmentation is oddly colorless, and your eyes are highly sensitive to light.">Shadowbound</Pair>
<Pair title="Penalty">You are <Link to="/misc/blinded">blinded</Link> for 1 round when exposed to normal or bright light and <Link to="/misc/dazzled">dazzled</Link> while in such a lit area.</Pair>
<Pair title="Benefit">You gain darkvision to a range of 30 feet.</Pair>
<Pair title="At 5th Level">The range of your darkvision increases by 30 feet.</Pair>
<Pair title="At 10th Level">Add <Link to="/spell/shadow_conjuration">shadow conjuration</Link> to your list of 4th-level oracle spells known and <Link to="/spell/shadow_evocation">shadow evocation</Link> to your list of 5th-level oracle spells known.</Pair>
<Pair title="At 15th Level">Add <Link to="/spell/shadow_walk">shadow walk</Link> to your list of 6th-level oracle spells known.</Pair>
</Ability>
</>};
const _shattered_psyche = {title: "Shattered Psyche", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_88_valley_of_the_brain_collectors">Pathfinder #88: Valley of the Brain Collectors</Link></p>
<Ability id="shattered-psyche" icon={["broken-shield","armor-upgrade"]}>
<Pair single id="shattered-psyche" flavor="Your mind is crowded with dozens of voices, fragmented snippets of your past lives.">Shattered Psyche</Pair>
<Pair title="Penalty">You take a -2 penalty on all Intelligence-based skill checks, Wisdom-based skill checks, and <Link to="/rule/concentration">concentration</Link> checks.</Pair>
<Pair title="Benefit">You gain a +4 competence bonus on saving throws made against mind-affecting effects.</Pair>
<Pair title="At 5th Level">You're <Link to="/umr/immune">immune</Link> to charm effects.</Pair>
<Pair title="At 10th Level">You're immune to compulsion effects.</Pair>
<Pair title="At 15th Level">You're immune to all mind-affecting effects.</Pair>
</Ability>
</>};
const _site_bound = {title: "Site-Bound", jsx: <><p><strong>Sources</strong> <Link to="/source/inner_sea_monster_codex">Inner Sea Monster Codex</Link></p>
<Ability id="site-bound" icon={["broken-shield","upgrade"]}>
<Pair single id="site-bound" flavor="You are bound to a particular place.">Site-Bound</Pair>
<Pair title="Penalty">You form a bond with a particular 10-foot square, and must remain within 1,500 feet of that site or immediately become <Link to="/misc/sickened">sickened</Link>. You must succeed at a DC 15 Fortitude save each minute you spend outside of the boundary or become <Link to="/misc/nauseated">nauseated</Link>. For every hour spent outside of the boundary, you also take 1d4 points of <Link to="/rule/constitution_damage">Constitution damage</Link> (no save).</Pair>
<Pair title="Benefit">When within range of your bonded site, you gain a +1 bonus to your caster level when casting oracle spells.</Pair>
<Pair title="At 5th Level">The radius increases from 1,500 feet to 2,250 feet.</Pair>
<Pair title="At 10th Level">The radius increases to 3,000 feet and the bonus to your caster level when casting oracle spells within the boundary increases by 1.</Pair>
<Pair title="At 15th Level">You can move up to 1 mile from your bonded site.</Pair>
</Ability>
</>};
const _song_bound = {title: "Song-Bound", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea</Link></p>
<Ability id="song-bound" icon={["broken-shield","stairs-goal","spell-book","upgrade"]}>
<Pair single id="song-bound" flavor="Whenever you speak, you are compelled to sing loudly, and you draw out even short utterances with vocal scales or simple melodies.">Song-Bound</Pair>
<Pair title="Prerequisites"><Link to="/race/merfolk">Merfolk</Link></Pair>
<Pair title="Penalty">You cannot speak in less than a loud voice, although you may choose not to speak.</Pair>
<Pair title="Benefit">You can perform the <Link to="/performance/countersong">countersong</Link> bardic performance (using Perform [sing] only) for a number of rounds per day equal to your oracle level. If you gain the <Link to="/ability/bardic_performance">bardic performance</Link> class feature, these rounds are in addition to any other bardic performance rounds you gain, but they can be used only for the <em>countersong</em> bardic performance.</Pair>
<Pair title="At 5th Level">Add <Link to="/spell/command">command</Link> and <Link to="/spell/suggestion">suggestion</Link> to your list of spells known.</Pair>
<Pair title="At 10th Level">Add 1 to the DC of saving throws against language-dependent spells you cast.</Pair>
<Pair title="At 15th Level">Add <Link to="/spell/greater_command">greater command</Link> and <Link to="/spell/mass_suggestion">mass suggestion</Link> to your list of spells known.</Pair>
</Ability>
</>};
const _tongues = {title: "Tongues", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="tongues" icon={["broken-shield","stairs-goal","magic-swirl"]}>
<Pair single id="tongues" flavor="In times of stress or unease, you speak in tongues.">Tongues</Pair>
<Pair title="Penalty">Pick one of the following languages: Abyssal, Aklo, Aquan, Auran, Celestial, Ignan, Infernal, or Terran. Whenever you are in combat, you can only speak and understand the selected language. This does not interfere with spellcasting, but it does apply to spells that are <Link to="/spelldef/language_dependent">language dependent</Link>.</Pair>
<Pair title="Benefit">You gain the selected language as a bonus language.</Pair>
<Pair title="At 5th Level">Pick an additional language to speak in combat and add it to your list of known languages.</Pair>
<Pair title="At 10th Level">You can understand any spoken language, as if under the effects of <Link to="/spell/tongues">tongues</Link>, even during combat.</Pair>
<Pair title="At 15th Level">You can speak and understand any language, but your speech is still restricted during combat.</Pair>
</Ability>
</>};
const _toxic_blood = {title: "Toxic Blood", jsx: <><p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex</Link></p>
<Ability id="toxic-blood" icon={["broken-shield","armor-upgrade","magic-palm"]}>
<Pair single id="toxic-blood" flavor="Your body is ravaged by a potent, slow-acting poison that resists all treatment.">Toxic Blood</Pair>
<Pair title="Penalty">Whenever you must attempt a Fortitude save to resist a poison effect, roll twice and take the lowest result. Additionally, you need one more consecutive successful save to end an ongoing poison. You lose any immunity to poison you have upon receiving this curse, and you become immune to <Link to="/spell/delay_poison">delay poison</Link> and <Link to="/spell/neutralize_poison">neutralize poison</Link>, as well as other attempts to suppress or remove the poison from which you are suffering.</Pair>
<Pair title="Benefit">You gain the <Link to="/ability/poison_use">poison use</Link> ability.</Pair>
<Pair title="At 5th Level"><p>You are so envenomed that your touch becomes poisonous. Once per day for every 4 oracle levels you have, you can deliver a unique contact poison as a touch attack or via an unarmed strike or natural weapon.</p>
<AffInfo type="Poison; Contact" save="Fort 10 + 1/2 your oracle level + your Cha modifier" freq="1/round for 5 rounds" eff={<>1d2 <Link to="/rule/dex_damage">Dex damage</Link></>} cure1 icon="p" />
</Pair>
<Pair title="At 10th Level">The poison deals 1d3 points of Dexterity damage per round for 7 rounds.</Pair>
<Pair title="At 15th Level">You can expend a use of your poison touch to transfer any poison effect you are currently experiencing from yourself to another creature. The touched creature must immediately attempt a saving throw against the poison (using the poison's initial DC and duration for a single dose, regardless of how many doses are currently affecting you). If the creature fails its save, the poison ceases to act on you, as if you had succeeded at all the necessary saves (this bypasses your immunity to effects that remove poison).</Pair>
</Ability>
</>};
const _vampirism = {title: "Vampirism", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms</Link></p>
<Ability id="vampirism" icon={["broken-shield","armor-upgrade","spell-book"]}>
<Pair single id="vampirism" flavor="You crave the taste of fresh, warm blood.">Vampirism</Pair>
<Pair title="Effects">You take damage from positive energy and heal from negative energy as if you were undead.</Pair>
<Pair title="At 5th Level">You gain <Link to="/umr/channel_resistance">channel resistance</Link> +4.</Pair>
<Pair title="At 10th Level">You add <Link to="/spell/vampiric_touch">vampiric touch</Link> to your list of 3rd-level oracle spells known and <Link to="/spell/undead_anatomy_ii">undead anatomy II</Link> to your list of 5th-level oracle spells known.</Pair>
<Pair title="At 15th Level">You gain <Link to="/rule/damage_reduction">damage reduction</Link> 5/magic.</Pair>
</Ability>
</>};
const _wasting = {title: "Wasting", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="wasting" icon={["broken-shield","armor-upgrade"]}>
<Pair single id="wasting" flavor="Your body is slowly rotting away.">Wasting</Pair>
<Pair title="Penalty">You take a -4 penalty on Charisma-based skill checks, except for <Link to="/skill/intimidate">Intimidate</Link>.</Pair>
<Pair title="Benefit">You gain a +4 competence bonus on saves made against disease.</Pair>
<Pair title="At 5th Level">You are immune to the <Link to="/misc/sickened">sickened</Link> condition (but not nauseated).</Pair>
<Pair title="At 10th Level">You gain immunity to disease.</Pair>
<Pair title="At 15th Level">You are immune to the <Link to="/misc/nauseated">nauseated</Link> condition.</Pair>
</Ability>
</>};
const _wolfscarred_face = {title: "Wolfscarred Face", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_angels">Blood of Angels</Link></p>
<Ability id="wolfscarred-face" icon={["broken-shield","mailed-fist","spell-book","upgrade"]}>
<Pair single id="wolfscarred-face" flavor="Your face is deformed, as though you were born with a wolf's muzzle instead of an ordinary nose and jaw. Many mistake you for a werewolf, and in areas plagued by lycanthropes, you must take pains to hide your face.">Wolfscarred Face</Pair>
<Pair title="Penalty">You have a severe speech impediment, and any spells you cast with a verbal component have a 20% chance of failing, wasting your action but not expending the spell.</Pair>
<Pair title="Benefit">You gain a <Link to="/umr/natural_attack">natural bite attack</Link> that deals 1d4 points of damage if you are a Medium creature or 1d3 points of damage if you are Small.</Pair>
<Pair title="At 5th Level">You add <Link to="/spell/magic_fang">magic fang</Link> to your list of known spells and your bite damage increases to 1d6 if you are Medium or 1d4 if you are Small.</Pair>
<Pair title="At 10th Level">The damage dealt by your bite attack increases to 1d8 if you are Medium or 1d6 if you are Small.</Pair>
<Pair title="At 15th Level">You add <Link to="/spell/greater_magic_fang">greater magic fang</Link> to your list of known spells and the damage dealt by your bite attack increases to 2d6 if you are Medium or 1d8 if you are Small.</Pair>
</Ability>
</>};
const _wrecker = {title: "Wrecker", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_fiends">Blood of Fiends</Link></p>
<Ability id="wrecker" icon={["broken-shield","skills","armor-downgrade","upgrade"]}>
<Pair single id="wrecker" flavor={<>The destructive power of <Link to="/rule/the_abyss">the Abyss</Link> and its teeming hordes of <Link to="/family/demon">demons</Link> seeps from your very pores and into your belongings and surroundings.</>}>Wrecker</Pair>
<Pair title="Penalty">Held objects gain the <Link to="/misc/broken">broken</Link> condition when you use or equip them but regain their actual condition if employed by anyone else. If a held item is restored to unbroken condition, it becomes broken again the following round.</Pair>
<Pair title="Benefit"><Link to="/skill/disable_device">Disable Device</Link> becomes a class skill for you and you can make Disable Device checks to destroy nonmagical traps as a <strong className="hl">move action</strong> without the need to use tools or take any action beyond simply touching it.</Pair>
<Pair title="At 5th Level">Whenever you attempt to damage an object with a melee attack, reduce its hardness by an amount equal to your oracle level before determining the damage you deal with that attack.</Pair>
<Pair title="At 10th Level">Any attacks you make against objects and constructs automatically bypass any damage reduction they may possess except epic.</Pair>
<Pair title="At 15th Level">Whenever you are dealt damage by an attack with a manufactured weapon, you can require the weapon's wielder to make a Reflex save (DC 10 + 1/2 your oracle level + your Charisma modifier) to avoid having the weapon collapse into dust immediately after striking you (magical weapons receive an additional saving throw against this effect).</Pair>
</Ability>
</>};
const _wrecking_mysticism = {title: "Wrecking Mysticism", jsx: <><p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox</Link></p>
<Ability id="wrecking-mysticism" icon={["broken-shield","stairs-goal","spell-book"]}>
<Pair single id="wrecking-mysticism" flavor="A divine entity has blessed you with a source of eldritch power.">Wrecking Mysticism</Pair>
<Pair title="Prerequisites"><Link to="/race/kitsune">Kitsune</Link></Pair>
<Pair title="Penalty">This power erodes your fortitude, increasing by 50% the duration of any poison, <Link to="/misc/sickened">sickened</Link> condition, or <Link to="/misc/nauseated">nauseated</Link> condition affecting you.</Pair>
<Pair title="Benefit">Whenever you would gain a mystery spell, you can gain <Link to="/feat/magical_tail">Magical Tail</Link> as a bonus feat instead. Once this choice has been made, it cannot be changed. You cannot replace a bonus spell granted to you by an oracle archetype with Magical Tail, even if it replaces a mystery spell.</Pair>
<Pair title="At 5th Level">Add <Link to="/spell/minor_image">minor image</Link> and <Link to="/spell/ventriloquism">ventriloquism</Link>.</Pair>
<Pair title="At 10th Level">Add <Link to="/spell/magic_jar">magic jar</Link> to your list of spells known.</Pair>
<Pair title="At 15th Level">Add <Link to="/spell/project_image">project image</Link> to your list of spells known.</Pair>
</Ability>
</>};
export default {not_found:_not_found,aboleth:_aboleth,acursed:_acursed,blackened:_blackened,clouded_vision:_clouded_vision,cold_blooded:_cold_blooded,consumed:_consumed,covetous:_covetous,deaf:_deaf,deep_one:_deep_one,demonic:_demonic,elemental_imbalance:_elemental_imbalance,ghoul:_ghoul,god_meddled:_god_meddled,haunted:_haunted,hellbound:_hellbound,hive:_hive,hunger:_hunger,infested:_infested,lame:_lame,legalistic:_legalistic,lich:_lich,lycanthropy:_lycanthropy,plagued:_plagued,possessed:_possessed,powerless_prophecy:_powerless_prophecy,pranked:_pranked,promethean:_promethean,putrid:_putrid,reclusive:_reclusive,scourge:_scourge,shadowbound:_shadowbound,shattered_psyche:_shattered_psyche,site_bound:_site_bound,song_bound:_song_bound,tongues:_tongues,toxic_blood:_toxic_blood,vampirism:_vampirism,wasting:_wasting,wolfscarred_face:_wolfscarred_face,wrecker:_wrecker,wrecking_mysticism:_wrecking_mysticism}