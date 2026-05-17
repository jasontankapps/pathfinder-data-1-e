import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import ByLevelPop from '../../components/ByLevelPop';
const _opportunist = {title: "Opportunist", jsx: <><h2 id="arc-fighter-opportunist-opportunist">Opportunist</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 20</Link><br/>Opportunists believe every battle is one of wits rather than arms. The ratfolk enforcers who protect Goka's infamous Deepmarket embrace this philosophy, unleashing a disorienting mix of martial skill and alchemical weaponry.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-fighter-opportunist--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/ratfolk">Ratfolk</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-fighter-opportunist-duplicitous-ex" icon={["skills"]}>
<Pair single id="arc-fighter-opportunist-duplicitous-ex">Duplicitous (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair hl title="Alters">Class skills</Pair>
<Pair title="Info">An opportunist adds <Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/sense_motive">Sense Motive</Link> (WIS), <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> (DEX), and <Link to="/skill/stealth">Stealth</Link> (DEX) to his list of class skills. He gains 2 bonus skill ranks at each level, which must be allocated among these skills.</Pair>
</Ability>
<Ability id="arc-fighter-opportunist-underhanded-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-opportunist-underhanded-ex">Underhanded (Ex)</Pair>
<Pair hl title="Replaces">The bonus feat gained at 1st level</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An opportunist gains <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link> as a bonus feat even if he does not meet the prerequisites.</Pair>
</Ability>
<Ability id="arc-fighter-opportunist-cunning-edge-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-opportunist-cunning-edge-ex">Cunning Edge (Ex)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 4th, 8th, 12th, 16th, and 20th levels</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Choice">An opportunist can select an edge from those listed below.</Pair>
<Pair title="At 8th Level">He can select a second edge.</Pair>
<Pair title="At 12th Level">He can select a third edge.</Pair>
<Pair title="At 16th Level">He can select a fourth edge.</Pair>
<Pair title="At 20th Level">He can select a fifth edge.</Pair>
</Ability>
<Ability id="arc-fighter-opportunist-alchemical-admixture-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-opportunist-alchemical-admixture-ex">Alchemical Admixture (Ex)</Pair>
<Pair title="Usage">1 time/day per four fighter levels<ByLevelPop levels={[[4,1],[8,2],[12,3],[16,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Full-Round Action">The opportunist can combine two alchemical weapons into a single vial. When thrown as a splash weapon, the mixture has the effects of both component substances and targets are affected as if hit by both. The mixture becomes inert after 1 hour. Combining identical alchemical weapons has no effect.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>Yes</Pair>
</Ability>
<Ability id="arc-fighter-opportunist-alchemical-refinement-ex" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-fighter-opportunist-alchemical-refinement-ex">Alchemical Refinement (Ex)</Pair>
<Pair title="Ability">The opportunist increases the save DC of any alchemical item he crafts by an amount equal to <Link to="/misc/one_third">one-third</Link> of his fighter level. Doing so increases the raw material cost to craft that item by 10 gp for every +1 increase. This bonus applies only when the opportunist uses the crafted alchemical item himself; it functions as a normal item of its type for all other users.</Pair>
</Ability>
<Ability id="arc-fighter-opportunist-bombs-ex" extraClasses="subAbility" icon={["stairs-goal","smoking-finger"]}>
<Pair single id="arc-fighter-opportunist-bombs-ex">Bombs (Ex)</Pair>
<Pair title="Ability"><p>The opportunist can make a number of bombs per day equal to his Intelligence modifier (minimum 1). These bombs act as <Link to="/class/alchemist">alchemist's</Link> bombs and deal 1d6 points of fire damage, plus an additional 1d6 points for every 3 fighter levels the opportunist has.</p>
<blockquote>
<p><em>Text from the alchemist class:</em></p>
<p>Drawing the components of, creating, and throwing a bomb is a single <strong className="hl">standard action</strong>. Thrown bombs have a range of 20 feet and use the <Link to="/rule/throw_splash_weapon">Throw Splash Weapon special attack</Link>. Splash damage from your bomb is always equal to the bomb's minimum damage. Those caught in the splash damage can attempt a Reflex save for half damage, with a DC equal to 10 + <Link to="/misc/half">half</Link> your alchemist level + your Intelligence modifier.</p>
<p>Bombs are considered weapons and can be selected using feats such as <Link to="/feat/point_blank_shot">Point-Blank Shot</Link> and <Link to="/feat/weapon_focus">Weapon Focus</Link>. Your bombs become inert if used or carried by anyone else.</p>
</blockquote>
</Pair>
</Ability>
<Ability id="arc-fighter-opportunist-clouded-shift-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-opportunist-clouded-shift-ex">Clouded Shift (Ex)</Pair>
<Pair title="Ability">As part of the standard action to ignite a <Link to="/eq-misc/smokestick">smokestick</Link> or <Link to="/eq-misc/smoke_pellet">smoke pellet</Link>, the opportunist can take a 5-foot step, even if he has already moved this round. He can use this ability only if he has not already taken a 5-foot step this round, and only if the smoke from his alchemical tool conceals his starting location.</Pair>
</Ability>
<Ability id="arc-fighter-opportunist-poison-use-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-opportunist-poison-use-ex">Poison Use (Ex)</Pair>
<Pair title="Ability">The opportunist no longer risks poisoning himself when applying poison to a weapon.</Pair>
</Ability>
<Ability id="arc-fighter-opportunist-rogue-talent-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-opportunist-rogue-talent-ex">Rogue Talent (Ex)</Pair>
<Pair title="Choice">The opportunist can select one of the following rogue talents for which he qualifies, treating his fighter level as his rogue level: <Link to="/talent/deft_palm">deft palm</Link>, <Link to="/talent/fast_fingers">fast fingers</Link>, <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/honeyed_words">honeyed words</Link>, <Link to="/talent/lasting_poison">lasting poison</Link>, <Link to="/talent/minor_magic">minor magic</Link>, or <Link to="/talent/quick_trapsmith">quick trapsmith</Link>.</Pair>
<Pair title="Special">The opportunist can select this edge multiple times.</Pair>
</Ability>
<Ability id="arc-fighter-opportunist-alchemical-onslaught-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-opportunist-alchemical-onslaught-ex">Alchemical Onslaught (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">An opportunist gains a +1 bonus on attack rolls with alchemical weapons and bombs and can add his Intelligence modifier to damage rolls for splash weapons.</Pair>
<Pair title="Free Action">Once per round, he can draw an alchemical weapon.</Pair>
</Ability>
</>};
const _pack_mule = {title: "Pack Mule", jsx: <><h2 id="arc-fighter-pack_mule-pack-mule">Pack Mule</h2>
<p><strong>Sources</strong> <Link to="/source/black_markets">Black Markets pg. 26</Link><br/>Pack mules carry heavy loads with ease and small packages with discretion. Unlike most couriers or porters, pack mules are also trained combatants able to defend their charges should the need arise. Many are willing to transport illegal goods, serving as runners for smugglers or muscle for bandits. Pack mules seeking legitimate work prove useful additions to merchant caravans and adventuring parties.</p>
<Ability id="arc-fighter-pack_mule-skill-ranks-per-level" icon={["skills"]}>
<Pair single id="arc-fighter-pack_mule-skill-ranks-per-level">Skill Ranks per Level</Pair>
<Pair hl title="Alters">The fighter's skill ranks per level</Pair>
<Pair title="Info">He gains 4 + Int modifier skill ranks every level.</Pair>
</Ability>
<Ability id="arc-fighter-pack_mule-unobtrusive" icon={["skills"]}>
<Pair single id="arc-fighter-pack_mule-unobtrusive">Unobtrusive</Pair>
<Pair hl title="Replaces">The bonus feat gained at 1st level</Pair>
<Pair title="Info">A pack mule gains <Link to="/skill/bluff">Bluff</Link> (Cha), <Link to="/skill/disguise">Disguise</Link> (Cha), <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> (Dex), and <Link to="/skill/stealth">Stealth</Link> (Dex) as class skills.</Pair>
</Ability>
<Ability id="arc-fighter-pack_mule-efficient-packer-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-pack_mule-efficient-packer-ex">Efficient Packer (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A pack mule adds a bonus equal to <Link to="/misc/half">half</Link> his fighter level on Sleight of Hand checks to conceal objects on his body. He also adds a bonus equal to 1/2 his class level to his Strength score for the purpose of determining his <Link to="/rule/carrying_capacity">carrying capacity</Link>.</Pair>
</Ability>
<Ability id="arc-fighter-pack_mule-weight-training-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-pack_mule-weight-training-ex">Weight Training (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1 through 4</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A pack mule learns to be more maneuverable when carrying loads. Whenever he is carrying a medium or heavy load, he reduces the check penalty by 1 (to a minimum of 0) and increases the maximum Dexterity bonus allowed by 1.</Pair>
<Pair title="Ability">A pack mule can move at his normal speed while carrying a medium load.</Pair>
<Pair title="At 7th Level">The check penalty is now reduced by 2, the max Dex bonus is increased by 2, and the pack mule can now move at his normal speed while carrying a heavy load.</Pair>
<Pair title="At 11th Level">The check penalty is now reduced by 4, the max Dex bonus is increased by 4.</Pair>
</Ability>
<Ability id="arc-fighter-pack_mule-healthy-as-a-mule-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-pack_mule-healthy-as-a-mule-ex">Healthy as a Mule (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Passive Ability">Whenever the pack mule takes <Link to="/rule/strength_damage">Constitution, Dexterity, or Strength damage</Link>, he reduces the amount of ability damage taken by 2, to a minimum of 0.</Pair>
</Ability>
</>};
const _phalanx_soldier = {title: "Phalanx Soldier", jsx: <><h2 id="arc-fighter-phalanx_soldier-phalanx-soldier">Phalanx Soldier</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 105</Link><br/>The phalanx soldier specializes in defensive tactics, using his shield to guard himself and his allies and forming a shield wall like an unbreakable anvil against which his enemies break.</p>
<Ability id="arc-fighter-phalanx_soldier-stand-firm-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-phalanx_soldier-stand-firm-ex">Stand Firm (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A phalanx soldier gains a +1 bonus to CMD against <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/overrun">overrun</Link>, and <Link to="/rule/trip">trip</Link> attempts. This bonus also applies on saves against <Link to="/umr/trample">trample</Link> attacks.</Pair>
<Pair title="At 6th Level">The bonus becomes +2.</Pair>
<Pair title="At 10th Level">The bonus increases to +3.</Pair>
<Pair title="At 14th Level">The bonus becomes +4.</Pair>
<Pair title="At 18th Level">The bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-phalanx_soldier-phalanx-fighting-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-phalanx_soldier-phalanx-fighting-ex">Phalanx Fighting (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">When a phalanx soldier wields a shield, he can use any polearm or spear of his size as a one-handed weapon.</Pair>
</Ability>
<Ability id="arc-fighter-phalanx_soldier-ready-pike-ex" icon={["mailed-fist","upgrade"]}>
<Pair single id="arc-fighter-phalanx_soldier-ready-pike-ex">Ready Pike (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four fighter levels beyond 5th<ByLevelPop levels={[[5,1],[9,2],[13,3],[17,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Immediate Action">A phalanx soldier can <Link to="/rule/ready">ready</Link> a weapon with the <Link to="/misc/brace">brace</Link> property, gaining a +1 bonus on attack and damage rolls.</Pair>
<Pair title="At 9th Level">This bonus becomes +2.</Pair>
<Pair title="At 13th Level">This bonus increases to +3.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
<Pair title="Special">He cannot use this ability when <Link to="/rule/flat_footed">flat-footed</Link>.</Pair>
</Ability>
<Ability id="arc-fighter-phalanx_soldier-deft-shield-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-fighter-phalanx_soldier-deft-shield-ex">Deft Shield (Ex)</Pair>
<Pair hl title="Replaces">Armor training 2 and 3</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">The armor check penalty from a shield and the attack roll penalty are reduced by 1 for a phalanx soldier using a <Link to="/eq-armor/tower_shield">tower shield</Link>.</Pair>
<Pair title="At 11th Level">These penalties are reduced by 2.</Pair>
</Ability>
<Ability id="arc-fighter-phalanx_soldier-shield-ally-ex" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-fighter-phalanx_soldier-shield-ally-ex">Shield Ally (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2, 3, and 4</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Move-Equivalent Action">When a phalanx fighter is using a heavy or tower shield, he can provide partial <Link to="/rule/cover">cover</Link> (+2 cover bonus to AC, +1 bonus on Reflex saves) to himself and all adjacent allies until the beginning of his next turn.</Pair>
<Pair title="At 13th Level">He can instead provide cover (+4 cover bonus to AC, +2 bonus on Reflex saves) and <Link to="/ability/evasion">evasion</Link> (as a <Link to="/class/rogue">rogue</Link>) to one adjacent ally until the beginning of his next turn. This cover does not allow Stealth checks.</Pair>
<Pair title="At 17th Level">He can provide cover to himself and all adjacent allies, or he can provide improved cover (+8 cover bonus to AC, +4 bonus on Reflex saves, <Link to="/ability/improved_evasion">improved evasion</Link>) to a single adjacent ally.</Pair>
</Ability>
<Ability id="arc-fighter-phalanx_soldier-irresistible-advance-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-phalanx_soldier-irresistible-advance-ex">Irresistible Advance (Ex)</Pair>
<Pair hl title="Replaces">Armor training 4</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Passive Ability">A phalanx fighter gains a bonus on bull rush and overrun CMB checks. This bonus depends on the type of shield used: +1 with a buckler, +2 with a light shield, +3 with a heavy shield, or +4 with a tower shield.</Pair>
</Ability>
<Ability id="arc-fighter-phalanx_soldier-shielded-fortress-ex" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-fighter-phalanx_soldier-shielded-fortress-ex">Shielded Fortress (Ex)</Pair>
<Pair hl title="Replaces">Weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">A phalanx fighter's shield cannot be <Link to="/rule/disarm">disarmed</Link> or <Link to="/rule/sunder">sundered</Link>. He gains <em>evasion</em> (as a rogue) when using a shield (<em>improved evasion</em> when using a tower shield).</Pair>
<Pair title="Move-Equivalent Action">A phalanx fighter can provide <em>evasion</em> to all adjacent allies until the beginning of his next turn.</Pair>
<Pair title="Immediate Action">He can provide <em>improved evasion</em> to an adjacent ally against one attack.</Pair>
</Ability>
</>};
const _polearm_master = {title: "Polearm Master", jsx: <><h2 id="arc-fighter-polearm_master-polearm-master">Polearm Master</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 106</Link><br/>The polearm master is schooled in the ancient wisdom that enemies are best faced at the end of long striking pole, lashing like a serpent before clumsy swords and axes can even be brought to bear.</p>
<Ability id="arc-fighter-polearm_master-pole-fighting-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-polearm_master-pole-fighting-ex">Pole Fighting (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Immediate Action">A polearm master can shorten the grip on his spear or polearm with reach and use it against adjacent targets. This action results in a -4 penalty on attack rolls with that weapon until he spends another immediate action to return to the normal grip.</Pair>
<Pair title="At 6th Level">The penalty on attack rolls becomes -3.</Pair>
<Pair title="At 10th Level">The penalty on attack rolls increases to -4.</Pair>
<Pair title="At 14th Level">The penalty on attack rolls becomes -5.</Pair>
<Pair title="At 18th Level">The penalty on attack rolls increases to -6.</Pair>
</Ability>
<Ability id="arc-fighter-polearm_master-steadfast-pike-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-polearm_master-steadfast-pike-ex">Steadfast Pike (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1, 2, 3, and 4</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A polearm master gains a +1 bonus on attack rolls with <Link to="/rule/readied">readied</Link> attacks and attacks of opportunity made with a spear or polearm.</Pair>
<Pair title="At 7th Level">The bonus becomes +2.</Pair>
<Pair title="At 11th Level">The bonus increases to +3.</Pair>
<Pair title="At 15th Level">The bonus becomes +4.</Pair>
<Pair title="At 19th Level">The bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-polearm_master-polearm-training-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-polearm_master-polearm-training-ex">Polearm Training (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A polearm master gains a +1 bonus on attack and damage rolls with spears and polearms.</Pair>
<Pair title="At 9th Level">The bonus becomes +2.</Pair>
<Pair title="At 13th Level">The bonus increases to +3.</Pair>
<Pair title="At 17th Level">The bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-fighter-polearm_master-flexible-flanker-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-polearm_master-flexible-flanker-ex">Flexible Flanker (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A polearm master may choose any square adjacent to him and treat that square as his location for determining who he is <Link to="/rule/flanking">flanking</Link>, even if that square is occupied by a creature, object, or solid barrier.</Pair>
</Ability>
<Ability id="arc-fighter-polearm_master-sweeping-fend-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-polearm_master-sweeping-fend-ex">Sweeping Fend (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">A polearm master can use any spear or polearm to make <Link to="/rule/bull_rush">bull rush</Link> maneuvers, though he takes a -4 penalty on combat maneuver checks when making such attempts. When using a spear or polearm to make a <Link to="/rule/trip">trip</Link> maneuver, he treats these weapons as if they had the <Link to="/misc/trip">trip</Link> weapon feature. Weapons with the trip property do not incur this penalty on trip maneuvers.</Pair>
</Ability>
<Ability id="arc-fighter-polearm_master-step-aside-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-polearm_master-step-aside-ex">Step Aside (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 4</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Immediate Action">When a creature threatened by a polearm master takes <Link to="/rule/a_5_foot_step">a 5-foot step</Link> into a square adjacent to him, he can take a 5-foot step. This 5-foot step must be subtracted from his movement on the next turn. He also gains a +2 dodge bonus to his AC against that opponent until the end of his next turn.</Pair>
</Ability>
<Ability id="arc-fighter-polearm_master-polearm-parry-ex" icon={["shield-reflect","armor-upgrade"]}>
<Pair single id="arc-fighter-polearm_master-polearm-parry-ex">Polearm Parry (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Immediate Action">When an opponent threatened by a polearm master makes a melee attack against an ally, he may grant his ally a +2 shield bonus to AC and DR 5/- against that attack.</Pair>
<Pair title="Special">He may use this ability to protect himself, but only if the attacking creature is not adjacent to him.</Pair>
</Ability>
<Ability id="arc-fighter-polearm_master-weapon-mastery-ex" icon={["info"]}>
<Pair single id="arc-fighter-polearm_master-weapon-mastery-ex">Weapon Mastery (Ex)</Pair>
<Pair hl title="Alters">Weapon mastery</Pair>
<Pair title="Info">A polearm master must choose a spear or polearm for <em>weapon mastery.</em></Pair>
</Ability>
</>};
const _qadira_dawnflower_dervish = {title: "Qadira: Dawnflower Dervish", jsx: <><h2 id="arc-fighter-qadira_dawnflower_dervish-qadira-dawnflower-dervish">Qadira: Dawnflower Dervish</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_primer">Inner Sea Primer pg. 25</Link><br/>In Qadira, home of the whirlwind, the <Link to="/monster/giant_scorpion">scorpion</Link>, and the <Link to="/monster/djinni">djinni</Link>, no enemy is as feared as the dervishes of <Link to="/faith/sarenrae">Sarenrae</Link>. While dervishes can be clerics, paladins, or rangers, zealous fighters join their ranks as well. These spinning warriors prefer light or no armor and wield <Link to="/eq-weapon/scimitar">scimitars</Link> with devastating consequences, moving swiftly over the treacherous desert sands to attack with lightning-fast strikes. They maneuver quickly among their enemies, relying on their speed and their skill to see them through the battle.</p>
<Ability id="arc-fighter-qadira_dawnflower_dervish-burst-of-speed-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-qadira_dawnflower_dervish-burst-of-speed-ex">Burst of Speed (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A Dawnflower dervish takes only a -1 penalty to her AC after <Link to="/rule/charging">charging</Link>.</Pair>
<Pair title="At 7th Level">The Dawnflower dervish can charge with no penalty.</Pair>
</Ability>
<Ability id="arc-fighter-qadira_dawnflower_dervish-desert-stride-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-qadira_dawnflower_dervish-desert-stride-ex">Desert Stride (Ex)</Pair>
<Pair hl title="Replaces">Armor training 2</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">A Dawnflower dervish can move through 10 feet of <Link to="/rule/difficult_terrain">difficult terrain</Link> each round as if it were normal terrain. This benefit stacks with the benefits provided by the <Link to="/feat/acrobatic_steps">Acrobatic Steps</Link> and <Link to="/feat/nimble_moves">Nimble Moves</Link> feats.</Pair>
</Ability>
<Ability id="arc-fighter-qadira_dawnflower_dervish-rapid-attack-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-qadira_dawnflower_dervish-rapid-attack-ex">Rapid Attack (Ex)</Pair>
<Pair hl title="Replaces">Armor training 3</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A Dawnflower dervish can combine a <Link to="/rule/full_attack">full attack</Link> with a single move. She must forgo the attack at her highest bonus but may take the remaining attacks at any point during her movement. This movement provokes attacks of opportunity as normal.</Pair>
</Ability>
<Ability id="arc-fighter-qadira_dawnflower_dervish-lightning-strike-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-qadira_dawnflower_dervish-lightning-strike-ex">Lightning Strike (Ex)</Pair>
<Pair hl title="Replaces">Armor training 4</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">As part of a full attack, a Dawnflower dervish can make one additional attack. This attack is at the dervish's highest base attack bonus, but each attack in the round (including the extra one) takes a -2 penalty.</Pair>
</Ability>
<p><strong className="hl">Suggested Feats:</strong> <Link to="/feat/agile_maneuvers">Agile Maneuvers</Link>, <Link to="/feat/combat_expertise">Combat Expertise</Link>, <Link to="/feat/dazzling_display">Dazzling Display</Link>, <Link to="/feat/dervish_dance">Dervish Dance</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/mobility">Mobility</Link>, <Link to="/feat/spring_attack">Spring Attack</Link>, <Link to="/feat/step_up">Step Up</Link>, <Link to="/feat/weapon_finesse">Weapon Finesse</Link>, <Link to="/feat/weapon_focus">Weapon Focus</Link> (scimitar), <Link to="/feat/weapon_specialization">Weapon Specialization</Link> (scimitar), <Link to="/feat/whirlwind_attack">Whirlwind Attack</Link>.</p>
</>};
const _relic_master = {title: "Relic Master", jsx: <><h2 id="arc-fighter-relic_master-relic-master">Relic Master</h2>
<p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook pg. 27</Link><br/>Commonly trained in the well-funded temples of Osirion or Qadira, the relic master is skilled in magic item mastery.</p>
<Ability icon={["skills"]} id="arc-fighter-relic_master-undefined">
<Pair id="arc-fighter-relic_master-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/use_magic_device">Use Magic Device</Link> (CHA)</Pair>
<Pair title="Removed Skills">Handle Animal, Ride</Pair></Ability>
<Ability id="arc-fighter-relic_master-improved-item-mastery-su" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-relic_master-improved-item-mastery-su">Improved Item Mastery (Su)</Pair>
<Pair hl title="Replaces">Armor training</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">1 time/day + 1 per four fighter levels beyond 3rd<ByLevelPop levels={[[3,1],[7,2],[11,3],[15,4],[19,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A relic master can use an <Link to="/main/feats_item_mastery">item mastery feat</Link> she knows with a magic item that doesn't have an appropriate spell in its construction requirements. The magic item must meet all other requirements of the item mastery feat. Alternatively, if she is using a magic item with an appropriate spell in its construction requirements, she can use an item mastery feat without it counting against the feat's total uses per day.</Pair>
</Ability>
<Ability id="arc-fighter-relic_master-relic-channeler-su" icon={["upgrade"]}>
<Pair single id="arc-fighter-relic_master-relic-channeler-su">Relic Channeler (Su)</Pair>
<Pair hl title="Replaces">Weapon training</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 + Con modifier minutes/day (minimum 1); these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Swift Action">A relic master can increase the potency of a magic item she wields by investing it with a bit of her vitality. If the item is armor, a shield, or a weapon, its enhancement bonus increases by 1 to a maximum of +5. If the magic item creates a spell or has a save DC, its effective caster level increases by 1.</Pair>
</Ability>
<Ability id="arc-fighter-relic_master-improvised-item-mastery-su" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-relic_master-improvised-item-mastery-su">Improvised Item Mastery (Su)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Full-Round Action">The relic master can select one item mastery feat whose prerequisites she meets but that she doesn't already have. She gains access to this feat, though she can't use it as a prerequisite for other feats or options. If she selects a different item mastery feat, she loses access to her previous use of <em>improvised item mastery</em> and any magic effect created with it ends immediately. Any daily uses of a selected <em>improvised item mastery</em> feat count against all <em>improvised mastery feats</em> selected in the same day.</Pair>
</Ability>
</>};
const _roughrider = {title: "Roughrider", jsx: <><h2 id="arc-fighter-roughrider-roughrider">Roughrider</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 106</Link><br/>Roughriders study and practice the fine points of mounted combat, drilling endlessly with warbeasts - from noble thoroughbreds to trained monsters - to form a perfect synergy between rider and steed.</p>
<Ability id="arc-fighter-roughrider-steadfast-mount-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-roughrider-steadfast-mount-ex">Steadfast Mount (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">After a roughrider has spent 1 hour practicing with a mount, the mount gains a +1 dodge bonus to AC and a +1 morale bonus on saves, but only while the roughrider is mounted on it or adjacent to it.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-roughrider-armored-charger-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-roughrider-armored-charger-ex">Armored Charger (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A roughrider no longer suffers armor check penalties on Ride skill checks. His mount's speed is not reduced when carrying a medium load or wearing medium barding.</Pair>
</Ability>
<Ability id="arc-fighter-roughrider-mounted-mettle-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-roughrider-mounted-mettle-ex">Mounted Mettle (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1, 2, 3, and 4</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A roughrider and his mount gain a +1 bonus on attack and damage rolls when he is mounted or adjacent to his mount.</Pair>
<Pair title="At 9th Level">This bonus becomes +2.</Pair>
<Pair title="At 13th Level">This bonus increases to +3.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-fighter-roughrider-leap-from-the-saddle-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-roughrider-leap-from-the-saddle-ex">Leap from the Saddle (Ex)</Pair>
<Pair hl title="Replaces">Armor training 2</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">After a roughrider's mount takes a single move, he may attempt a fast dismount (DC 20 Ride check). If he succeeds, he can take a <Link to="/rule/full_attack">full attack</Link> action.</Pair>
</Ability>
<Ability id="arc-fighter-roughrider-relentless-steed-ex" icon={["stairs-goal","rolling-dices"]}>
<Pair single id="arc-fighter-roughrider-relentless-steed-ex">Relentless Steed (Ex)</Pair>
<Pair hl title="Replaces">Armor training 3</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">A roughrider's mount does not reduce its speed when wearing heavy barding or carrying a heavy load.</Pair>
<Pair title="Ability">The roughrider may reroll a Ride skill check or a saving throw made by the mount, but must use the second roll even if it is worse.</Pair>
<Pair title="Usage">1 time/day + 1 per four fighter levels beyond 11th<ByLevelPop levels={[[11,1],[15,2],[19,3]]} unit="time" postText="/day" /></Pair>
</Ability>
<Ability id="arc-fighter-roughrider-ride-them-down-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-roughrider-ride-them-down-ex">Ride Them Down (Ex)</Pair>
<Pair hl title="Replaces">Armor training 4</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A roughrider can spur his mount on while readying an attack. If a roughrider's mount takes a single move, the roughrider can make a full attack, taking his attacks at any point during his mount's movement. If he has the <Link to="/feat/trample">Trample</Link> feat, he may substitute an <Link to="/rule/overrun">overrun</Link> combat maneuver for each of his attacks. This movement provokes attacks of opportunity against the roughrider but not his mount.</Pair>
</Ability>
<Ability id="arc-fighter-roughrider-unavoidable-onslaught-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-roughrider-unavoidable-onslaught-ex">Unavoidable Onslaught (Ex)</Pair>
<Pair hl title="Replaces">Armor training 4</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Passive Ability">A roughrider's mounted charge is not blocked by friendly creatures or <Link to="/rule/difficult_terrain">difficult terrain</Link>.</Pair>
</Ability>
<Ability id="arc-fighter-roughrider-indomitable-steed-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-roughrider-indomitable-steed-ex">Indomitable Steed (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Passive Ability">A roughrider and his steed gain DR 5/- when mounted.</Pair>
</Ability>
</>};
const _savage_warrior = {title: "Savage Warrior", jsx: <><h2 id="arc-fighter-savage_warrior-savage-warrior">Savage Warrior</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 107</Link><br/>Warriors' might is not measured only by their skill with steel, but also by their ability to inflict death with fang and claw, horn and hoof, and every exotic appendage the natural and unnatural world has to offer.</p>
<Ability id="arc-fighter-savage_warrior-spark-of-life-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-savage_warrior-spark-of-life-ex">Spark of Life (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A savage warrior gains a +1 bonus on saving throws made against energy drain and death effects.</Pair>
<Pair title="At 6th Level">The bonus becomes +2.</Pair>
<Pair title="At 10th Level">The bonus increases to +3.</Pair>
<Pair title="At 14th Level">The bonus becomes +4.</Pair>
<Pair title="At 18th Level">The bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-savage_warrior-natural-savagery-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-savage_warrior-natural-savagery-ex">Natural Savagery (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A savage warrior gains a +1 bonus on attack and damage rolls with natural weapons. This bonus also applies to CMB and CMD for <Link to="/rule/grapple">grappling</Link>.</Pair>
<Pair title="At 9th Level">This bonus becomes +2.</Pair>
<Pair title="At 13th Level">This bonus increases to +3.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-fighter-savage_warrior-savage-charge-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-fighter-savage_warrior-savage-charge-ex">Savage Charge (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">When a savage warrior attacks with a natural weapon at the end of a <Link to="/rule/charge">charge</Link>, he gains a bonus on his natural weapon attack rolls equal to <Link to="/misc/half">half</Link> his fighter level, while suffering a penalty to his AC equal to <Link to="/misc/half">half</Link> his fighter level. These replace the normal attack roll bonus and AC penalty for charging. This bonus also applies to his CMB for a <Link to="/rule/bull_rush">bull rush</Link> or <Link to="/rule/overrun">overrun</Link> combat maneuvers made when charging.</Pair>
</Ability>
<Ability id="arc-fighter-savage_warrior-careful-claw-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-savage_warrior-careful-claw-ex">Careful Claw (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">When using a natural weapon to attack a creature using <Link to="/spell/fire_shield">fire shield</Link> or a similar effect that damages creatures attacking it (such as a <Link to="/monster/barbed_devil">barbed devil's</Link> barbed defense), a savage warrior reduces the damage from such effects by an amount equal to 1/2 his fighter level.</Pair>
</Ability>
<Ability id="arc-fighter-savage_warrior-greater-savage-charge-ex" icon={["armor-upgrade","mailed-fist"]}>
<Pair single id="arc-fighter-savage_warrior-greater-savage-charge-ex">Greater Savage Charge (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 4</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">When using <em>savage charge,</em> the AC penalty is reduced to 1/4 his fighter level instead of 1/2 his fighter level. In addition, a savage warrior can charge through friendly creatures and <Link to="/rule/difficult_terrain">difficult terrain</Link>.</Pair>
</Ability>
<Ability id="arc-fighter-savage_warrior-natural-weapon-mastery-ex" icon={["info"]}>
<Pair single id="arc-fighter-savage_warrior-natural-weapon-mastery-ex">Natural Weapon Mastery (Ex)</Pair>
<Pair hl title="Replaces">Weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Info">A savage warrior must choose one natural weapon.</Pair>
</Ability>
</>};
const _scrapper = {title: "Scrapper", jsx: <><h2 id="arc-fighter-scrapper-scrapper">Scrapper</h2>
<p><strong>Sources</strong> <Link to="/source/construct_handbook">Construct Handbook pg. 14</Link><br/>Scrappers are adept at collecting the leftovers from their enemy's armor and using these scraps to improve their own armor.</p>
<Ability id="arc-fighter-scrapper-scrap-armor-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-scrapper-scrap-armor-ex" flavor="A scrapper learns to salvage scrap from constructs or other pieces of armor and attach them to his own armor.">Scrap Armor (Ex)</Pair>
<Pair hl title="Replaces">Armor training</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">Salvaging scrap from a destroyed construct or from another creature's armor takes 1 minute. Scrap from a construct grants the scrapper a natural armor bonus to AC equal to one-quarter the construct's Hit Dice (minimum +1). If the scrap is salvaged from a piece of armor, it instead grants a natural armor bonus to AC equal to 1 + the armor's enhancement bonus (if any). The salvaged armor piece is flimsy and prone to breaking. Scrap is immediately destroyed by any <Link to="/rule/sunder">sunder</Link> combat maneuver that targets the armor to which the scrap is attached. Otherwise, scrap crumbles and falls away after a number of days equal to the natural armor bonus that it grants.</Pair>
<Pair title="At 11th Level">Scrap salvaged from a construct also grants DR/adamantine equal to one-quarter of the construct's Hit Dice.</Pair>
</Ability>
<Ability id="arc-fighter-scrapper-scrapper-training-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-scrapper-scrapper-training-ex">Scrapper Training (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A scrapper selects one fighter <Link to="/ability/weapon_groups">weapon group</Link>. He gains a +1 bonus on attack and damage rolls when performing a sunder combat maneuver with a weapon from the chosen group. He does not provoke attacks of opportunity when performing a sunder combat maneuver with a weapon from the chosen group. If the scrapper has the <Link to="/feat/improved_sunder">Improved Sunder</Link> feat, the bonuses on attack and damage rolls from this ability double.</Pair>
<Pair title="At 13th Level">A scrapper can either take the fighter's <em>weapon training</em> class feature or improve his bonuses from the <em>scrapper training</em> class feature by 1.</Pair>
<Pair title="At 17th Level">A scrapper can either take the fighter's <em>weapon training</em> class feature or improve his bonuses from the <em>scrapper training</em> class feature by 1.</Pair>
</Ability>
</>};
const _seasoned_commander = {title: "Seasoned Commander", jsx: <><h2 id="arc-fighter-seasoned_commander-seasoned-commander">Seasoned Commander</h2>
<p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex pg. 164</Link><br/>The seasoned commander excels at leading troops through inspiration and the use of unit tactics.</p>
<Ability id="arc-fighter-seasoned_commander-strategic-training-ex" icon={["skills"]}>
<Pair single id="arc-fighter-seasoned_commander-strategic-training-ex">Strategic Training (Ex)</Pair>
<Pair hl title="Replaces">Bonus fighter combat feat gained at 1st level, proficiency with heavy armor and tower shields</Pair>
<Pair hl title="Alters">Skill ranks per level, class skills</Pair>
<Pair title="Info">A seasoned commander gains 4 skill ranks + a number of skill ranks equal to his Intelligence modifier at each level instead of the normal 2 skill ranks + Intelligence modifier at each level. A seasoned commander adds <Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/linguistics">Linguistics</Link> (INT), and <Link to="/skill/sense_motive">Sense Motive</Link> (WIS) to his list of class skills.</Pair>
</Ability>
<Ability id="arc-fighter-seasoned_commander-tactician-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-seasoned_commander-tactician-ex">Tactician (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A seasoned commander gains the <Link to="/class/cavalier">cavalier's</Link> <em>tactician</em> class feature, treating his fighter level as his cavalier level for the purposes of this ability.</Pair>
</Ability>
<Ability id="arc-fighter-seasoned_commander-tactician-ex" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-fighter-seasoned_commander-tactician-ex" flavor="Text from the cavalier class">Tactician (Ex)</Pair>
<Pair title="Ability">You receive a <Link to="/main/teamwork_feat">teamwork feat</Link> as a bonus feat. You must meet the prerequisites for this feat.</Pair>
<Pair title="Standard Action">You can grant this feat to all allies within 30 feet who can see and hear you. Allies retain the use of this bonus feat for 3 rounds plus 1 round for every two levels you possess. Allies do not need to meet the prerequisites of these bonus feats.</Pair>
<Pair title="Usage">1 time/day + 1 per five fighter levels<ByLevelPop levels={[[3,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
</Ability>
<Ability id="arc-fighter-seasoned_commander-inspiring-speech-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-seasoned_commander-inspiring-speech-ex">Inspiring Speech (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1 and 3</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">A seasoned commander can give an inspiring speech once per day. If he does, all allies who can hear his speech gain the benefits of <Link to="/performance/inspire_courage">inspire courage</Link>, granting bonuses 1 lower than those granted by a bard of the seasoned commander's fighter level, lasting 1 round per fighter level + his Charisma modifier (abilities that affect a bardic performance, such as <Link to="/feat/lingering_performance">Lingering Performance</Link>, have no effect on this ability).</Pair>
<Pair title="At 7th Level">He can perform the speech as a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 9th Level">He can use this ability twice a day.</Pair>
<Pair title="At 13th Level">He can perform the speech as a <strong className="hl">swift action</strong>.</Pair>
<Pair title="At 15th Level">He can use this ability three times a day.</Pair>
</Ability>
<Ability id="arc-fighter-seasoned_commander-inspire-greatness-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-seasoned_commander-inspire-greatness-ex">Inspire Greatness (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A seasoned commander can also choose to use his <em>inspiring speech</em> to grant the effects of <Link to="/performance/inspire_greatness">inspire greatness</Link> to one ally (instead of <em>inspire courage</em>).</Pair>
<Pair title="At 11th Level">He can target two allies while using this ability.</Pair>
<Pair title="At 13th Level">He can target up to three allies with this ability.</Pair>
<Pair title="At 15th Level">He can now target up to four allies.</Pair>
<Pair title="At 17th Level">He can target up to five allies.</Pair>
<Pair title="At 19th Level">He can target up to six allies.</Pair>
<Pair title="Special">This ability functions in all other respects like the seasoned commander's <em>inspire courage</em> ability. Whichever <em>inspiring speech</em> he chooses to use, if the seasoned commander uses an <em>inspiring speech</em> before the duration of his previous <em>inspiring speech</em> ends, the new <em>inspiring speech</em> replaces the old <em>speech.</em></Pair>
</Ability>
<Ability id="arc-fighter-seasoned_commander-greater-tactician-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-seasoned_commander-greater-tactician-ex">Greater Tactician (Ex)</Pair>
<Pair hl title="Replaces">Armor training 3</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">The seasoned commander gains the <Link to="/class/cavalier">cavalier's</Link> <em>greater tactician</em> class feature, treating his fighter level as his cavalier level for the purposes of this ability.</Pair>
</Ability>
<Ability id="arc-fighter-seasoned_commander-greater-tactician-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-seasoned_commander-greater-tactician-ex" flavor="Text from the cavalier class">Greater Tactician (Ex)</Pair>
<Pair title="Ability">You receive an additional teamwork feat as a bonus feat. You must meet the prerequisites for this feat. You can grant this feat to your allies using the <em>tactician</em> ability.</Pair>
<Pair title="Swift Action">Using the <em>tactician</em> ability becomes a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-fighter-seasoned_commander-inspire-heroics-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-seasoned_commander-inspire-heroics-ex">Inspire Heroics (Ex)</Pair>
<Pair hl title="Replaces">Armor training 4</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A seasoned commander can choose to use his <em>inspiring speech</em> to grant the effects of <Link to="/performance/inspire_heroics">inspire heroics</Link> to one ally (instead of <em>inspire courage</em> or <em>inspire greatness</em>).</Pair>
<Pair title="At 17th Level">He can target up to two allies with this ability.</Pair>
<Pair title="At 19th Level">He can target up to three allies with this ability.</Pair>
<Pair title="Special">This ability functions in all other respects like the seasoned commander's <em>inspire courage</em> ability.</Pair>
</Ability>
<Ability id="arc-fighter-seasoned_commander-master-tactician-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-seasoned_commander-master-tactician-ex">Master Tactician (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 4</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">The seasoned commander gains the cavalier's <em>master tactician</em> class feature, treating his fighter level as his cavalier level for the purposes of this ability.</Pair>
</Ability>
<Ability id="arc-fighter-seasoned_commander-master-tactician-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-seasoned_commander-master-tactician-ex" flavor="Text from the cavalier ability">Master Tactician (Ex)</Pair>
<Pair title="Ability">You receive an additional teamwork feat as a bonus feat. You must meet the prerequisites for this feat. You can grant this feat to your allies using the <em>tactician</em> ability.</Pair>
<Pair title="Special">Whenever you use the <em>tactician</em> ability, you grant any two teamwork feats that you know. You can select from <strong>any</strong> of your teamwork feats, not just your bonus feats.</Pair>
</Ability>
</>};
const _sensate = {title: "Sensate", jsx: <><h2 id="arc-fighter-sensate-sensate">Sensate</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 118</Link><br/>A sensate perceives battle through senses beyond mortal ken, anticipating his opponents' movements before they even begin to act. As long as he keeps his focus about him, he fights with a skill rivaling that of the finest masters-at-arms.</p>
<Ability icon={["skills"]} id="arc-fighter-sensate-undefined">
<Pair id="arc-fighter-sensate-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/perception">Perception</Link> (WIS), <Link to="/skill/sense_motive">Sense Motive</Link> (WIS)</Pair>
<Pair title="Removed Skills">Handle Animal, Intimidate, Knowledge (dungeoneering), Knowledge (engineering)</Pair></Ability>
<Ability id="arc-fighter-sensate-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-fighter-sensate-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiency</Pair>
<Pair title="Info">Sensates are proficient with all simple and martial weapons, light armor, medium armor, and shields (except tower shields).</Pair>
</Ability>
<Ability id="arc-fighter-sensate-guarded-senses-su" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-sensate-guarded-senses-su">Guarded Senses (Su)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A sensate gains a +1 bonus on saves against sonic effects, figments, glamers, patterns, <Link to="/umr/gaze">gaze</Link> attacks, and scent-based attacks.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-sensate-uncanny-dodge-su" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-sensate-uncanny-dodge-su">Uncanny Dodge (Su)</Pair>
<Pair hl title="Replaces">Armor training 1</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A sensate gains <Link to="/ability/uncanny_dodge">uncanny dodge</Link> as the <Link to="/class/barbarian">barbarian</Link> ability of the same name, except supernatural in nature.</Pair>
</Ability>
<Ability id="arc-fighter-sensate-centered-senses-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-fighter-sensate-centered-senses-su">Centered Senses (Su)</Pair>
<Pair hl title="Replaces">Weapon training 2, 3, and 4</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Move-Equivalent Action">A sensate can center his senses. While centered, a sensate gains a +1 insight bonus on attack rolls, weapon damage rolls, and Will saves.</Pair>
<Pair title="At 9th Level">This bonus becomes +2.</Pair>
<Pair title="At 13th Level">This bonus increases to +3.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
<Pair title="Special">A sensate loses his centered state if he gains the confused, dazed, fascinated, staggered, or stunned condition; falls unconscious; or fails a Will save.</Pair>
</Ability>
<Ability id="arc-fighter-sensate-improved-uncanny-dodge-su" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-sensate-improved-uncanny-dodge-su">Improved Uncanny Dodge (Su)</Pair>
<Pair hl title="Replaces">Armor training 2</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">A sensate gains <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> as the barbarian ability of the same name, except supernatural in nature.</Pair>
</Ability>
<Ability id="arc-fighter-sensate-evasion-su" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-sensate-evasion-su">Evasion (Su)</Pair>
<Pair hl title="Replaces">Armor training 3</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">A sensate gains <Link to="/ability/evasion">evasion</Link> while using centered senses. This functions as the rogue ability of the same name, except that it is supernatural in nature and works regardless of the sensate's armor and encumbrance.</Pair>
</Ability>
<Ability id="arc-fighter-sensate-steady-su" icon={["upgrade"]}>
<Pair single id="arc-fighter-sensate-steady-su">Steady (Su)</Pair>
<Pair hl title="Replaces">Armor training 4</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Swift Action">A sensate can center himself as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-fighter-sensate-perfect-senses-su" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-sensate-perfect-senses-su">Perfect Senses (Su)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Passive Ability">A sensate's senses reach perfection, and he can easily notice illusions and unseen foes by combining his senses. While centered, he gains the effects of <Link to="/spell/true_seeing">true seeing</Link> as well as <Link to="/umr/blindsense">blindsense</Link> 60 feet. An unseen creature that makes no sound and leaves no scent (such as a creature under the effects of <Link to="/spell/invisibility">invisibility</Link>, <Link to="/spell/silence">silence</Link>, and <Link to="/spell/negate_aroma">negate aroma</Link>) can still avoid both the <em>true seeing</em> and the <em>blindsense.</em></Pair>
</Ability>
<Ability id="arc-fighter-sensate-precision-su" icon={["upgrade","armor-upgrade","rolling-dices"]}>
<Pair single id="arc-fighter-sensate-precision-su">Precision (Su)</Pair>
<Pair hl title="Replaces">Weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">A sensate rolls twice to confirm critical hits while centered, taking the more favorable result. Opponents must roll twice to confirm critical hits against him, taking the less favorable result. The latter ability does not function when the sensate is denied his Dexterity bonus.</Pair>
</Ability>
</>};
const _shielded_fighter = {title: "Shielded Fighter", jsx: <><h2 id="arc-fighter-shielded_fighter-shielded-fighter">Shielded Fighter</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 108</Link><br/>A shielded fighter focuses on both offense and defense, blending weapon and shield in perfect balance to impede his enemies while delivering deadly blows, and even turning the shield itself into a formidable weapon. These fighting school benefits apply when wielding a weapon and a shield simultaneously.</p>
<Ability id="arc-fighter-shielded_fighter-active-defense-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-shielded_fighter-active-defense-ex">Active Defense (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1, 2, 3, and 4</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A shielded fighter gains a +1 dodge bonus to AC when wielding a shield and <Link to="/misc/fighting_defensively">fighting defensively</Link>, using <Link to="/feat/combat_expertise">Combat Expertise</Link>, or using <Link to="/misc/total_defense">total defense</Link>.</Pair>
<Pair title="Swift Action">He may share this bonus with one adjacent ally, or <Link to="/misc/half">half</Link> of the bonus (minimum +0) with all adjacent allies, until the beginning of his next turn.</Pair>
<Pair title="At 7th Level">The dodge bonus becomes +2.</Pair>
<Pair title="At 11th Level">The dodge bonus increases to +3.</Pair>
<Pair title="At 15th Level">The dodge bonus becomes +4.</Pair>
<Pair title="At 19th Level">The dodge bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-shielded_fighter-shield-fighter-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-fighter-shielded_fighter-shield-fighter-ex">Shield Fighter (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A shielded fighter gains a +1 bonus on attack and damage rolls when making a <Link to="/misc/shield_bash">shield bash</Link>.</Pair>
<Pair title="At 9th Level">The bonus becomes +2.</Pair>
<Pair title="At 13th Level">The bonus increases to +3.</Pair>
<Pair title="At 17th Level">The bonus becomes +4.</Pair>
<Pair title="Special">With a <Link to="/rule/full_attack">full attack</Link> action, a shielded fighter may alternate between using his weapon or his shield for each attack. This action does not grant additional attacks or incur penalties as two-weapon fighting does.</Pair>
</Ability>
<Ability id="arc-fighter-shielded_fighter-shield-buffet-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-fighter-shielded_fighter-shield-buffet-ex">Shield Buffet (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2 and 3</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Move-Equivalent Action">A shielded fighter may make a combat maneuver check to use his shield to impede an adjacent enemy. If successful, the target suffers a -2 penalty on its attack rolls against the shielded fighter and a -2 penalty to AC on attacks made by the shielded fighter until the beginning of his next turn.</Pair>
<Pair title="At 13th Level">A shielded fighter may use this ability as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-fighter-shielded_fighter-shield-guard-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-shielded_fighter-shield-guard-ex">Shield Guard (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 4</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Swift Action">A shielded fighter may designate one square adjacent to him. He may designate two squares if using a heavy shield or three squares if using a tower shield, but these squares must be contiguous. Enemies in these squares cannot <Link to="/rule/flank">flank</Link> the shielded fighter and do not count for flanking with other creatures. This effect lasts until he moves from his position or uses another swift action to change the affected squares.</Pair>
</Ability>
<Ability id="arc-fighter-shielded_fighter-shield-mastery-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-shielded_fighter-shield-mastery-ex">Shield Mastery (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Passive Ability">A shielded fighter gains DR 5/- when wielding a shield.</Pair>
</Ability>
<Ability id="arc-fighter-shielded_fighter-shield-ward-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-shielded_fighter-shield-ward-ex">Shield Ward (Ex)</Pair>
<Pair hl title="Replaces">Weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">A shielded fighter gains <Link to="/ability/evasion">evasion</Link> (as a <Link to="/class/rogue">rogue</Link>) while wielding a shield, and adds his shield bonus to his AC (not including enhancement bonuses) on Reflex saves and to his touch AC. In addition, his shield cannot be <Link to="/rule/disarm">disarmed</Link> or <Link to="/rule/sunder">sundered</Link>.</Pair>
</Ability>
</>};
const _siegebreaker = {title: "Siegebreaker", jsx: <><h2 id="arc-fighter-siegebreaker-siegebreaker">Siegebreaker</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets pg. 11</Link><br/>The siegebreaker is trained to break through lines of enemy soldiers.</p>
<Ability id="arc-fighter-siegebreaker-breaker-rush-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-fighter-siegebreaker-breaker-rush-ex">Breaker Rush (Ex)</Pair>
<Pair hl title="Replaces">The feat gained at 1st level</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A siegebreaker can attempt <Link to="/rule/bull_rush">bull rush</Link> or <Link to="/rule/overrun">overrun</Link> combat maneuvers without provoking attacks of opportunity. When he performs either combat maneuver, he deals an amount of bludgeoning damage equal to his Strength bonus (minimum 1). If he has <Link to="/feat/improved_bull_rush">Improved Bull Rush</Link> or <Link to="/feat/improved_overrun">Improved Overrun</Link>, the damage dealt by the appropriate maneuver increases by 2 and he adds any enhancement bonus from his armor or shield (though such enhancement bonuses do not stack, if both armor and shield are magic).</Pair>
</Ability>
<Ability id="arc-fighter-siegebreaker-armored-vigor-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-siegebreaker-armored-vigor-ex">Armored Vigor (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">3 + Con modifier times/day</Pair>
<Pair title="Swift Action">A siegebreaker can gain 2 <Link to="/rule/temporary_hit_points">temporary hit points</Link> that last for 1 minute.</Pair>
<Pair title="At 8th Level">The amount of temporary hit points becomes 4.</Pair>
<Pair title="At 14th Level">The amount of temporary hit points increases to 6.</Pair>
<Pair title="At 20th Level">The amount of temporary hit points becomes 8.</Pair>
<Pair title="Special">He can use this ability only while wearing armor.</Pair>
</Ability>
<Ability id="arc-fighter-siegebreaker-breaker-momentum-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-siegebreaker-breaker-momentum-ex">Breaker Momentum (Ex)</Pair>
<Pair hl title="Replaces">The feat gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Free Action">When a siegebreaker successfully bull rushes a foe, he can attempt an overrun combat maneuver check against that foe.</Pair>
</Ability>
<Ability id="arc-fighter-siegebreaker-persistent-menace-ex" icon={["info"]}>
<Pair single id="arc-fighter-siegebreaker-persistent-menace-ex">Persistent Menace (Ex)</Pair>
<Pair hl title="Alters">The feat gained at 4th level</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Choice">A siegebreaker must choose either <Link to="/feat/step_up">Step Up</Link> or <Link to="/feat/disruptive">Disruptive</Link> as his bonus feat, but need not meet the prerequisites.</Pair>
</Ability>
<Ability id="arc-fighter-siegebreaker-disorienting-blow-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-fighter-siegebreaker-disorienting-blow-ex">Disorienting Blow (Ex)</Pair>
<Pair hl title="Replaces">The bonus feat gained at 8th level</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Immediate Action">A siegebreaker can distract a foe he just hit with an attack or combat maneuver, imposing a -2 penalty on the foe's attack rolls, caster level checks, or skill checks for 1 round. The foe can negate this penalty with a successful Fortitude save (DC = 10 + <Link to="/misc/half">half</Link> the siegebreaker's fighter level + his Strength modifier).</Pair>
<Pair title="At 14th Level">The penalty increases to -4.</Pair>
</Ability>
<Ability id="arc-fighter-siegebreaker-masterful-distraction-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-fighter-siegebreaker-masterful-distraction-ex">Masterful Distraction (Ex)</Pair>
<Pair hl title="Replaces">Weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A siegebreaker can <Link to="/misc/nauseated">nauseate</Link> a foe he targets with his <em>disorienting blow</em> instead of inflicting a penalty.</Pair>
</Ability>
</>};
const _skirmisher = {title: "Skirmisher", jsx: <><h2 id="arc-fighter-skirmisher-skirmisher">Skirmisher</h2>
<p><strong>Source</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 50</Link>, <a href="https://paizo.com/paizo/faq/v5748nruor1hj#v5748eaic9wc9">errata</a></p>
<p>Not all battles are fought between armies; sometimes, a settlement or nation faces a threat too dire to fight in the open. In order to repel a much larger enemy force, some soldiers must abandon equipment and tactics designed for open-field warfare and instead rely on ambushes, hit-and-run tactics, and sabotage to whittle down their enemies' strength and morale. Skirmishers use harsh weather and unforgiving terrain to their advantage, attacking isolated groups of enemies that cannot flee or fight back effectively. Many tribal warriors also employ small-unit tactics because it is part of their warrior culture, because they cannot field a large army, or simply because they refuse to fight on the enemy's terms.</p>
<Ability id="arc-fighter-skirmisher-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-fighter-skirmisher-armor-proficiency">Armor Proficiency</Pair>
<Pair hl title="Replaces">The fighter's armor proficiency</Pair>
<Pair title="Info">A skirmisher is proficient with light armor and shields but not with medium armor, heavy armor, or tower shields.</Pair>
</Ability>
<Ability id="arc-fighter-skirmisher-wilderness-training-ex" icon={["skills"]}>
<Pair single id="arc-fighter-skirmisher-wilderness-training-ex">Wilderness Training (Ex)</Pair>
<Pair hl title="Alters">Class skills, skill ranks per level</Pair>
<Pair title="Info">A skirmisher relies on his skills and the element of surprise rather than the heaviest shields and armor. He gains <Link to="/skill/acrobatics">Acrobatics</Link> (DEX) and <Link to="/skill/stealth">Stealth</Link> (DEX) as class skills. In addition, the skirmisher gains a number of skill ranks at each level equal to 4 + his Intelligence modifier, instead of 2 + his Intelligence modifier.</Pair>
</Ability>
<Ability id="arc-fighter-skirmisher-conditioning-ex" extraClasses="hasSubs" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-skirmisher-conditioning-ex">Conditioning (Ex)</Pair>
<Pair hl title="Replaces">2nd level fighter bonus feat</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Choice">A skirmisher becomes more resistant to mental and physical threats that are commonly employed by his enemies or often encountered in the terrain in which he operates. The skirmisher must choose one of the specializations below, gaining a +1 bonus on saving throws of the appropriate type.</Pair>
<Pair title="At 6th Level">The saving throw bonus becomes +2.</Pair>
<Pair title="At 10th Level">The saving throw bonus increases to +3.</Pair>
<Pair title="At 14th Level">The saving throw bonus becomes +4.</Pair>
<Pair title="At 18th Level">The saving throw bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-skirmisher-alpine-training-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-skirmisher-alpine-training-ex">Alpine Training (Ex)</Pair>
<Pair title="Passive Ability">A skirmisher operating in mountainous terrain becomes resistant to cold climates and the rigors of long treks at high altitudes. He gains a bonus on Fortitude saving throws against <Link to="/rule/altitude_sickness">altitude sickness</Link>, exposure to <Link to="/rule/cold">cold weather</Link>, and other effects that cause <Link to="/misc/fatigue">fatigue</Link> or <Link to="/misc/exhaustion">exhaustion</Link>.</Pair>
</Ability>
<Ability id="arc-fighter-skirmisher-counter-interrogation-training-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-skirmisher-counter-interrogation-training-ex">Counter-Interrogation Training (Ex)</Pair>
<Pair title="Passive Ability">A skirmisher undertaking infiltration missions learns to resist interrogation and persuasion. The skirmisher gains a bonus on Will saving throws against charms and divinations.</Pair>
</Ability>
<Ability id="arc-fighter-skirmisher-jungle-training-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-skirmisher-jungle-training-ex">Jungle Training (Ex)</Pair>
<Pair title="Passive Ability">Through repeated exposure, a skirmisher operating in jungles and wetlands builds up a tolerance against pathogens and toxins. He gains a bonus on Fortitude saving throws against disease and poison.</Pair>
</Ability>
<Ability id="arc-fighter-skirmisher-light-infantry-training-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-skirmisher-light-infantry-training-ex">Light Infantry Training (Ex)</Pair>
<Pair title="Passive Ability">A skirmisher fighting in a light infantry unit learns to avoid fire from enemy artillery, siege weapons, and spellcasters. He gains a bonus on Reflex saving throws against attacks that deal half damage on a successful save (such as the <Link to="/spell/fireball">fireball</Link> spell) but not against traps, natural hazards, or environmental effects.</Pair>
</Ability>
<Ability id="arc-fighter-skirmisher-reconnaissance-training-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-skirmisher-reconnaissance-training-ex" flavor="A skirmisher operating in heavily trapped or naturally hazardous areas learns to expertly avoid them.">Reconnaissance Training (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">He gains a +1 bonus on Reflex saving throws to avoid traps, natural hazards, and environmental effects.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-skirmisher-mobility-training-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-fighter-skirmisher-mobility-training-ex">Mobility Training (Ex)</Pair>
<Pair hl title="Replaces">Armor training</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A skirmisher learns to be more maneuverable while wearing light or no armor. He gains a +1 dodge bonus to AC while wearing light or no armor and while carrying no more than a light load. Anything that causes the skirmisher to lose his Dexterity bonus to AC also causes the skirmisher to lose this dodge bonus. In addition, a skirmisher gains an enhancement bonus of +5 feet to his base speed. This benefit applies only when he is wearing no armor or light armor, and when he is carrying no more than a light load.</Pair>
<Pair title="At 7th Level">The bonus to speed becomes +10 feet, and the dodge bonus becomes +2.</Pair>
<Pair title="At 11th Level">The dodge bonus becomes +3.</Pair>
<Pair title="At 15th Level">The dodge bonus increases to +4.</Pair>
</Ability>
<Ability id="arc-fighter-skirmisher-mobile-mastery-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-skirmisher-mobile-mastery-ex">Mobile Mastery (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Passive Ability">A skirmisher learns to position his body and conceal his body proportions with clothes so well that it is difficult to hit him. He gains a 20% miss chance on attacks against him. Mobile mastery functions even when the skirmisher is <Link to="/rule/flat_footed">flat-footed</Link>, but not when he is immobilized or <Link to="/misc/helpless">helpless</Link>, when he wears medium or heavy armor, or when he carries a medium or heavy load.</Pair>
</Ability>
</>};
const _spear_fighter = {title: "Spear Fighter", jsx: <><h2 id="arc-fighter-spear_fighter-spear-fighter">Spear Fighter</h2>
<p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 11</Link><br/>The spear is one of the oldest weapons known to most humanoid races, and no weapon has seen as much use across the different continents of Golarion. One of the oldest spear-fighting styles originates in Vudra, where many martial arts traditions consider the spear to be the ultimate weapon.</p>
<Ability icon={["skills"]} id="arc-fighter-spear_fighter-undefined">
<Pair id="arc-fighter-spear_fighter-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX)</Pair>
<Pair title="Removed Skills">Ride</Pair></Ability>
<Ability id="arc-fighter-spear_fighter-armor-proficiency" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-fighter-spear_fighter-armor-proficiency">Armor Proficiency</Pair>
<Pair hl title="Alters">The fighter's armor proficiencies</Pair>
<Pair title="Info">A spear fighter is not proficient with heavy armor or tower shields.</Pair>
<Pair title="Ability">He gains <Link to="/feat/dodge">Dodge</Link> as a bonus feat, even if he doesn't fulfill the prerequisites, but he can't use this feat while wearing heavy armor or using a shield.</Pair>
</Ability>
<Ability id="arc-fighter-spear_fighter-balanced-stride-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-spear_fighter-balanced-stride-ex">Balanced Stride (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">The spear fighter gains a +1 bonus on Acrobatics checks to avoid attacks of opportunity.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-spear_fighter-spear-parry-ex" icon={["armor-upgrade","broken-shield"]}>
<Pair single id="arc-fighter-spear_fighter-spear-parry-ex">Spear Parry (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1, 2, 3, and 4, armor mastery</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A spear fighter learns to parry his opponents' attacks with his spear. This functions as a swashbuckler's <Link to="/swashdeed/opportune_parry_and_riposte">opportune parry and riposte</Link> deed except as noted below. The spear fighter must use a weapon from the spears <Link to="/ability/weapon_groups">weapon group</Link> to perform the parry. He doesn't need panache to parry an attack or to make an attack against a creature whose attack he has parried; instead, he takes a cumulative -4 penalty on all attacks (including further parry attempts) until the end of his next turn.</Pair>
<Pair title="At 7th Level">The penalty becomes -3.</Pair>
<Pair title="At 11th Level">The penalty is reduced to -2.</Pair>
<Pair title="At 17th Level">The penalty becomes -1.</Pair>
<Pair title="At 19th Level">A spear fighter can use <em>spear parry</em> without penalty.</Pair>
</Ability>
<Ability id="arc-fighter-spear_fighter-weapon-training-ex" icon={["info"]}>
<Pair single id="arc-fighter-spear_fighter-weapon-training-ex">Weapon Training (Ex)</Pair>
<Pair hl title="Alters">Weapon training</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Choice">A spear fighter must choose the spears weapon group for the <em>weapon training</em> class feature.</Pair>
</Ability>
<Ability id="arc-fighter-spear_fighter-weapon-mastery-ex" icon={["info"]}>
<Pair single id="arc-fighter-spear_fighter-weapon-mastery-ex">Weapon Mastery (Ex)</Pair>
<Pair hl title="Alters">Weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Choice">A spear fighter must choose a weapon from the spears weapon group for his <em>weapon mastery</em> class feature.</Pair>
</Ability>
</>};
const _steelbound_fighter = {title: "Steelbound Fighter", jsx: <><h2 id="arc-fighter-steelbound_fighter-steelbound-fighter">Steelbound Fighter</h2>
<p><strong>Sources</strong> <Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook pg. 22</Link><br/>Whenever a particularly imposing intelligent weapon controls the mind of its wielder for long enough, spiritual echoes of this dominance can have strange resonances throughout that wielder's bloodline for generations to come. The steelbound fighter is sometimes the result of such a legacy: a fighter who has impressive martial resolve and technique with a specific weapon as the result of a powerful relationship a similar weapon had with one of his ancestors.</p>
<Ability id="arc-fighter-steelbound_fighter-steelbound-weapon-ex" icon={["broken-shield"]}>
<Pair single id="arc-fighter-steelbound_fighter-steelbound-weapon-ex">Steelbound Weapon (Ex)</Pair>
<Pair hl title="Replaces">The fighter's 1st-level bonus feat</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A steelbound fighter selects one type of weapon (such as <Link to="/eq-weapon/short_sword">short swords</Link>, <Link to="/eq-weapon/longbow">longbows</Link>, or <Link to="/eq-weapon/heavy_flail">heavy flails</Link>). He gains <Link to="/feat/weapon_focus">Weapon Focus</Link> with that specific weapon. Whenever he isn't wielding or carrying at least one weapon of this type (the weapon can be broken but not destroyed), a steelbound fighter takes a -2 penalty to his Wisdom score and can't benefit from his fighter class abilities (excluding bonus feats gained from fighter levels). Once the steelbound fighter's weapon awakens (see <em>steelbound awakening</em> below), these penalties apply whenever the fighter isn't carrying or wielding that particular weapon.</Pair>
</Ability>
<Ability id="arc-fighter-steelbound_fighter-steelbound-awakening-su" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-steelbound_fighter-steelbound-awakening-su">Steelbound Awakening (Su)</Pair>
<Pair hl title="Replaces">Weapon training</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability"><p>One nonintelligent weapon carried by the steelbound fighter becomes possessed by the latent spiritual energies that cling to his soul, transforming that weapon into an <Link to="/rule/intelligent_items">intelligent weapon</Link>. The weapon must be of the type the fighter chose at 1st level as his steelbound weapon. The steelbound weapon grants its wielder <Link to="/feat/alertness">Alertness</Link> as a bonus feat as long as the weapon is wielded. A steelbound fighter gains a +1 bonus on attack rolls and damage rolls with his steelbound weapon.</p>
<p>A steelbound weapon gains Intelligence, Wisdom, and Charisma scores of 10 when it awakens, and has the same alignment as its wielder. It communicates via empathy, and has senses that extend 30 feet. It has 5 ranks in a skill of the steelbound fighter's choice.</p>
</Pair>
<Pair title="At 9th Level">The steelbound weapon's bonus becomes +2. Its ability scores increase to 12 and it gains the ability to speak in its wielder's native tongue. The weapon gains the ability to cast a 3rd-level spell once per day (the choice of the spell is made by the steelbound fighter, but is subject to GM approval, and once chosen, it can't be changed), with a caster level equal to the steelbound fighter's level. The spell's save DC is based off of the item's Charisma.</Pair>
<Pair title="At 13th Level">The steelbound weapon's bonus increases to +3. Its ability scores increase to 14 and its senses extend to 120 feet. The weapon gains a <Link to="/rule/special_purpose">special purpose</Link> of the steelbound fighter's choice (subject to GM approval).</Pair>
<Pair title="At 17th Level">The steelbound weapon's bonus becomes +4. Its ability scores increase to 16 and it gains telepathy as well as darkvision with a range of 60 feet. The weapon can now use its spell-like ability three times a day, and can select a second 3rd-level spell that it can use once per day.</Pair>
<Pair title="At 20th Level">The steelbound weapon's bonus increases to +5.</Pair>
<Pair title="Special">A steelbound fighter transfers the effects of his <em>steelbound awakening</em> to a new weapon of the proper type automatically after carrying that weapon on his person for 24 hours, but can have only one weapon under the effects of <em>steelbound awakening</em> at any given time.</Pair>
</Ability>
</>};
const _swarm_fighter = {title: "Swarm Fighter", jsx: <><h2 id="arc-fighter-swarm_fighter-swarm-fighter">Swarm Fighter</h2>
<p><strong>Sources</strong> <Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 23</Link><br/>Kobolds know there's strength in numbers, and they rarely send fewer than two kobolds out on patrol. This reliance on one another extends to combat tactics too - overwhelming numbers and tight quarters are the <Link to="/race/kobold">kobold</Link> fighter's friends. Scuttling between the legs of friend and foe alike, the swarm fighter is an unshakable combatant.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-fighter-swarm_fighter--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/kobold">Kobold</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-fighter-swarm_fighter-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-fighter-swarm_fighter-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Weapon and armor proficiencies</Pair>
<Pair title="Info">A swarm fighter is proficient with all simple and martial weapons. She is proficient with light and medium armor, but not with shields.</Pair>
</Ability>
<Ability id="arc-fighter-swarm_fighter-athletic-prowess-ex" icon={["skills","upgrade"]}>
<Pair single id="arc-fighter-swarm_fighter-athletic-prowess-ex">Athletic Prowess (Ex)</Pair>
<Pair title="Info">A swarm fighter adds <Link to="/skill/acrobatics">Acrobatics</Link> (DEX) and <Link to="/skill/climb">Climb</Link> (STR) to her class skills, and gains a bonus on checks with these skills equal to <Link to="/misc/half">half</Link> her swarm fighter level.</Pair>
</Ability>
<Ability id="arc-fighter-swarm_fighter-mobility-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-swarm_fighter-mobility-ex">Mobility (Ex)</Pair>
<Pair hl title="Replaces">The bonus feat a fighter gains at first level</Pair>
<Pair title="Ability">The swarm fighter gains <Link to="/feat/mobility">Mobility</Link> as a bonus feat, even if she does not meet the prerequisites.</Pair>
<Pair title="Special">This feat can't be replaced at a later level.</Pair>
</Ability>
<Ability id="arc-fighter-swarm_fighter-safety-in-numbers-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-swarm_fighter-safety-in-numbers-ex" flavor="A swarm fighter benefits greatly from the proximity of her allies.">Safety in Numbers (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Passive Ability">She gains a morale bonus on saves against fear effects equal to the number of allies within 20 feet of her. This bonus can't exceed half her level.</Pair>
</Ability>
<Ability id="arc-fighter-swarm_fighter-bonus-teamwork-feats-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-swarm_fighter-bonus-teamwork-feats-ex">Bonus Teamwork Feats (Ex)</Pair>
<Pair hl title="Replaces">The bonus combat feats the fighter normally receives at 2nd, 6th, 10th, 14th, and 18th levels</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">The swarm fighter gains a bonus <Link to="/main/teamwork_feat">teamwork feat</Link>.</Pair>
<Pair title="At 6th Level">She gains a 2nd teamwork feat.</Pair>
<Pair title="At 10th Level">She gains a 3rd teamwork feat.</Pair>
<Pair title="At 14th Level">She gains a 4th teamwork feat.</Pair>
<Pair title="At 18th Level">She gains a 5th teamwork feat.</Pair>
<Pair title="Special">She gains the other bonus combat feats as normal.</Pair>
</Ability>
<Ability id="arc-fighter-swarm_fighter-share-space-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-fighter-swarm_fighter-share-space-ex">Share Space (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">The swarm fighter can move into the space of another creature at least one size category larger than she is. She may end her movement in, and make attacks from, that space. She must succeed at the Acrobatics check for moving through an occupied square to move into a space occupied by an enemy. While sharing the space of another creature, she gains a +2 shield bonus to AC and a +1 circumstance bonus on Reflex saves.</Pair>
</Ability>
<Ability id="arc-fighter-swarm_fighter-strike-the-underbelly-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-fighter-swarm_fighter-strike-the-underbelly-ex">Strike the Underbelly (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">Creatures with which the swarm fighter shares a space are denied their Dexterity bonus to Armor Class against the swam fighter's attacks.</Pair>
</Ability>
<Ability id="arc-fighter-swarm_fighter-always-underfoot-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-swarm_fighter-always-underfoot-ex">Always Underfoot (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3 and 4</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">The swarm fighter gains <Link to="/feat/step_up">Step Up</Link> as a bonus feat. A creature sharing a square with the swarm fighter is considered adjacent for the purposes of this feat.</Pair>
<Pair title="At 17th Level">The swarm fighter gains <Link to="/feat/following_step">Following Step</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-fighter-swarm_fighter-soft-underbelly-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-swarm_fighter-soft-underbelly-ex">Soft Underbelly (Ex)</Pair>
<Pair hl title="Replaces">Weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Any attacks made against creatures with which the swarm fighter shares a space automatically confirm all critical threats.</Pair>
</Ability>
</>};
const _tactician = {title: "Tactician", jsx: <><h2 id="arc-fighter-tactician-tactician">Tactician</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 47</Link><br/>While many fighters focus on the fundamentals of melee and ranged combat, there are those who are trained to view the bigger picture on the battlefield. These fighters use their training and tactical acumen to overcome challenges that would overwhelm mere brute strength and skill at arms.</p>
<Ability id="arc-fighter-tactician-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-fighter-tactician-armor-proficiency">Armor Proficiency</Pair>
<Pair hl title="Alters">Armor proficiencies</Pair>
<Pair title="Info">A tactician is not proficient with heavy armor or tower shields.</Pair>
</Ability>
<Ability id="arc-fighter-tactician-strategic-training-ex" icon={["skills"]}>
<Pair single id="arc-fighter-tactician-strategic-training-ex">Strategic Training (Ex)</Pair>
<Pair hl title="Replaces">The bonus fighter combat feat gained at 1st level</Pair>
<Pair title="Info">A tactician gains 4 skill points + a number of skill points equal to his Intelligence modifier at each level, instead of the normal 2 skill points + Intelligence modifier at each level. Furthermore, <Link to="/skill/diplomacy">Diplomacy</Link> (Cha), <Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (Int), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (Int), <Link to="/skill/linguistics">Linguistics</Link> (Int), and <Link to="/skill/sense_motive">Sense Motive</Link> (Wis) are all class skills for the tactician.</Pair>
</Ability>
<Ability id="arc-fighter-tactician-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-tactician-bonus-feats">Bonus Feats</Pair>
<Pair title="Info">A tactician may choose <Link to="/feat/skill_focus">Skill Focus</Link> or any <Link to="/main/teamwork_feat">teamwork feat</Link>, in addition to combat feats, as bonus feats.</Pair>
</Ability>
<Ability id="arc-fighter-tactician-tactical-awareness-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-tactician-tactical-awareness-ex">Tactical Awareness (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A tactician gains a +1 bonus on initiative checks.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-tactician-tactician-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-tactician-tactician-ex">Tactician (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A tactician gains this ability as the <Link to="/class/cavalier">cavalier</Link> class feature.</Pair>
<Pair title="Usage">1 time/day per fighter level</Pair>
<Pair title="Special">If the tactician also has cavalier levels, these levels stack for determining the number of uses per day, and he can take the better progression.</Pair>
</Ability>
<Ability id="arc-fighter-tactician-cooperative-combatant-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-tactician-cooperative-combatant-ex">Cooperative Combatant (Ex)</Pair>
<Pair hl title="Replaces">Armor training 3</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">When a tactician uses the <Link to="/rule/aid_another_2">aid another</Link> special attack, he may affect one additional ally per point of Intelligence bonus. For each ally that a tactician aids, he can pick whether to grant that ally the +2 bonus on its next attack against the opponent or the +2 bonus to AC against the opponent's next attack on that ally, and can grant different allies different bonuses.</Pair>
</Ability>
<Ability id="arc-fighter-tactician-battle-insight-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-tactician-battle-insight-ex">Battle Insight (Ex)</Pair>
<Pair hl title="Replaces">Armor training 4</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Usage">3 + Int modifier times/day</Pair>
<Pair title="Swift Action">A tactician can grant his Intelligence modifier as an insight bonus on the attack rolls made by a single ally within line of sight that can both see and hear the tactician. That ally gains the bonus until the end of the tactician's next turn.</Pair>
</Ability>
</>};
const _taldor_rondelero_duelist = {title: "Taldor: Rondelero Duelist", jsx: <><h2 id="arc-fighter-taldor_rondelero_duelist-taldor-rondelero-duelist">Taldor: Rondelero Duelist</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_primer">Inner Sea Primer pg. 25</Link><br/>Taldor's warriors have perfected the art of fighting with the <Link to="/eq-weapon/falcata">falcata</Link> and <Link to="/eq-armor/buckler">buckler</Link> in an art they call rondelero. They use their bucklers both to defend themselves and to launch unexpected strikes while chopping and hewing at their foes' unprotected bodies and heads with their falcatas. Rondeleros wear any type of armor, but favor bucklers, and are comfortable using both hands for offense and defense.</p>
<Ability id="arc-fighter-taldor_rondelero_duelist-buckler-bash-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-taldor_rondelero_duelist-buckler-bash-ex">Buckler Bash (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A rondelero can perform a <Link to="/misc/shield_bash">shield bash</Link> with a buckler (use the same damage and critical modifier as for a <Link to="/eq-armor/light_shield">light shield</Link>).</Pair>
</Ability>
<Ability id="arc-fighter-taldor_rondelero_duelist-buckler-catch-ex" icon={["mailed-fist","broken-shield"]}>
<Pair single id="arc-fighter-taldor_rondelero_duelist-buckler-catch-ex">Buckler Catch (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A rondelero can catch his opponent's weapon between his buckler and his forearm, effectively wedging the hafts of polearms and hammers or the flats of blades. This functions as a <Link to="/rule/disarm">disarm</Link> combat maneuver, and the rondelero gains a +4 bonus on the roll. If the rondelero's attack fails by 10 or more, he suffers a -2 penalty to his AC until the start of his next turn.</Pair>
</Ability>
<Ability id="arc-fighter-taldor_rondelero_duelist-strong-swing-ex" icon={["upgrade","mailed-fist"]}>
<Pair single id="arc-fighter-taldor_rondelero_duelist-strong-swing-ex">Strong Swing (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A rondelero gains a +1 bonus on attack and damage rolls when wielding a falcata and buckler that applies to attacks made by either hand.</Pair>
<Pair title="Ability">With a <Link to="/rule/full_attack">full-attack</Link> action, a rondelero may alternate between using his falcata or his buckler for each attack. This does not grant additional attacks or incur penalties as two-weapon fighting does.</Pair>
<Pair title="At 9th Level">These bonuses become +2.</Pair>
<Pair title="At 13th Level">These bonuses increase to +3.</Pair>
<Pair title="At 17th Level">These bonuses become +4.</Pair>
</Ability>
<Ability id="arc-fighter-taldor_rondelero_duelist-armor-training-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-taldor_rondelero_duelist-armor-training-ex">Armor Training (Ex)</Pair>
<Pair hl title="Replaces">Armor training 2</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A rondelero gains <em>armor training 1,</em> and can move at his normal speed in medium armor.</Pair>
<Pair title="At 15th Level">The rondelero gains <em>armor training 2,</em> and can move at his normal speed in heavy armor.</Pair>
</Ability>
<Ability id="arc-fighter-taldor_rondelero_duelist-chopping-blow-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-taldor_rondelero_duelist-chopping-blow-ex">Chopping Blow (Ex)</Pair>
<Pair hl title="Replaces">Armor training 3</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Standard Action">A rondelero can make a single melee attack with a falcata. If the attack hits, he may make a <Link to="/rule/sunder">sunder</Link> combat maneuver against the target of his attack as a <strong className="hl">free action</strong> that does not provoke an attack of opportunity.</Pair>
</Ability>
<p><strong className="hl">Suggested Feats:</strong> <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (falcata), <Link to="/feat/improved_shield_bash">Improved Shield Bash</Link>, <Link to="/feat/improved_two_weapon_fighting">Improved Two-Weapon Fighting</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/shield_slam">Shield Slam</Link>, <Link to="/feat/shield_master">Shield Master</Link>, <Link to="/feat/taldan_duelist">Taldan Duelist</Link>, <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link>, <Link to="/feat/weapon_focus">Weapon Focus</Link> (falcata), <Link to="/feat/weapon_specialization">Weapon Specialization</Link> (falcata).</p>
</>};
const _thunderstriker = {title: "Thunderstriker", jsx: <><h2 id="arc-fighter-thunderstriker-thunderstriker">Thunderstriker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 48</Link><br/>The thunderstriker adopts an unusual fighting style, gripping a heavy weapon with both hands and switching to a defensive posture with weapon and buckler, lashing out with the shield with surprising speed and power.</p>
<Ability id="arc-fighter-thunderstriker-strapped-shield-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-thunderstriker-strapped-shield-ex">Strapped Shield (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A thunderstriker takes no penalty on attack rolls when using a weapon in two hands while wearing a <Link to="/eq-armor/buckler">buckler</Link>.</Pair>
</Ability>
<Ability id="arc-fighter-thunderstriker-hardbuckler-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-thunderstriker-hardbuckler-ex">Hardbuckler (Ex)</Pair>
<Pair hl title="Replaces">Armor training 2</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A thunderstriker may make <Link to="/misc/shield_bash">shield bash</Link> attacks with a buckler as if it were a <Link to="/eq-armor/light_shield">light shield</Link>.</Pair>
</Ability>
<Ability id="arc-fighter-thunderstriker-knockback-smash-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-thunderstriker-knockback-smash-ex">Knockback Smash (Ex)</Pair>
<Pair hl title="Replaces">Armor training 3</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">When a thunderstriker uses his buckler to attack, he gains a bonus equal to the enhancement bonus of the buckler on both attack and damage rolls.</Pair>
</Ability>
<Ability id="arc-fighter-thunderstriker-hammer-and-anvil-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-thunderstriker-hammer-and-anvil-ex">Hammer and Anvil (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">A thunderstriker suffers only half the normal penalties for two-weapon fighting when using a buckler as his off-hand weapon.</Pair>
</Ability>
<Ability id="arc-fighter-thunderstriker-buckler-defense-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-thunderstriker-buckler-defense-ex">Buckler Defense (Ex)</Pair>
<Pair hl title="Replaces">Armor training 4</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Passive Ability">A thunderstriker retains partial use of his buckler even when using a weapon in both hands or in each hand (rather than losing his shield bonus until the beginning of his next turn). He gains a +1 shield bonus to AC and may apply the benefits of any feats he knows that require the use of a shield, but does not benefit from any magical properties his shield may possess.</Pair>
</Ability>
<Ability id="arc-fighter-thunderstriker-balanced-bashing-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-thunderstriker-balanced-bashing-ex">Balanced Bashing (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 4</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">A thunderstriker no longer suffers two-weapon fighting penalties when using a buckler as his off-hand weapon.</Pair>
</Ability>
<Ability id="arc-fighter-thunderstriker-improved-buckler-defense-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-thunderstriker-improved-buckler-defense-ex">Improved Buckler Defense (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Passive Ability">A thunderstriker does not forfeit his shield bonus to AC from a buckler when fighting two-handed.</Pair>
</Ability>
</>};
const _titan_fighter = {title: "Titan Fighter", jsx: <><h2 id="arc-fighter-titan_fighter-titan-fighter">Titan Fighter</h2>
<p><strong>Sources</strong> <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook pg. 21</Link><br/>Titan fighters make use of enormous weapons others can barely lift. Titan fighters have the following class features.</p>
<Ability id="arc-fighter-titan_fighter-giant-weapon-wielder-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-titan_fighter-giant-weapon-wielder-ex">Giant Weapon Wielder (Ex)</Pair>
<Pair hl title="Replaces">The fighter's 1st level bonus feat</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A titan fighter can wield two-handed melee weapons intended for creatures one size category larger than himself, treating them as two-handed weapons. He takes an additional -2 penalty on attack rolls when using an oversized two-handed weapon.</Pair>
</Ability>
<Ability id="arc-fighter-titan_fighter-incredible-heft-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-titan_fighter-incredible-heft-ex">Incredible Heft (Ex)</Pair>
<Pair hl title="Replaces">Armor training</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A titan fighter becomes more skilled at wielding weapons intended for creatures one size category larger than himself. The penalty on attack rolls for using such weapons is reduced by 1, including when using oversized two-handed weapons.</Pair>
<Pair title="At 7th Level">This penalty is now reduced by 2 (minimum 0).</Pair>
<Pair title="At 11th Level">This penalty is now reduced by 3 (minimum 0).</Pair>
<Pair title="At 15th Level">This penalty is now reduced by 4 (minimum 0).</Pair>
<Pair title="At 19th Level">This penalty is now reduced by 5 (minimum 0).</Pair>
</Ability>
<Ability id="arc-fighter-titan_fighter-unstoppable-momentum-ex" icon={["upgrade","armor-upgrade","stairs-goal"]}>
<Pair single id="arc-fighter-titan_fighter-unstoppable-momentum-ex">Unstoppable Momentum (Ex)</Pair>
<Pair hl title="Replaces">Weapon training</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">When wielding oversized weapons, the titan fighter can attempt to <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/drag">drag</Link>, <Link to="/rule/overrun">overrun</Link>, <Link to="/rule/reposition">reposition</Link>, and <Link to="/rule/trip">trip</Link> creatures up to two sizes categories larger than himself.</Pair>
<Pair title="Passive Ability">A titan fighter gains a +1 bonus on combat maneuver checks and to CMD while wielding a weapon sized for a creature of a larger size category.</Pair>
<Pair title="At 9th Level">The bonus becomes +2.</Pair>
<Pair title="At 13th Level">The bonus increases to +3.</Pair>
<Pair title="At 17th Level">The bonus becomes +4.</Pair>
</Ability>
</>};
const _tower_shield_specialist = {title: "Tower Shield Specialist", jsx: <><h2 id="arc-fighter-tower_shield_specialist-tower-shield-specialist">Tower Shield Specialist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 48</Link><br/>Many fighters believe the <Link to="/eq-armor/tower_shield">tower shield</Link> is a tool suitable only for troops on the battlefield, claiming it is too large and bulky to use in skirmishes or within dungeon corridors. Tower shield specialists defy those notions, using their massive shields with startling skill and incredible effect. They use these seemingly clumsy shields to perform deft maneuvers that confound their enemies.</p>
<Ability id="arc-fighter-tower_shield_specialist-burst-barrier-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-tower_shield_specialist-burst-barrier-ex">Burst Barrier (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A tower shield specialist can use his shield to screen himself from burst spells and effects, gaining a +1 bonus on Reflex saves against them while employing a tower shield.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-tower_shield_specialist-tower-shield-training-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-tower_shield_specialist-tower-shield-training-ex">Tower Shield Training (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A tower shield specialist gains <em>armor training</em> as normal, but while he employs a tower shield, the armor penalty is reduced by 3 and the maximum Dexterity bonus allowed by his armor increases by 2. The benefit increases every four levels thereafter as per standard <em>armor training;</em> if the tower shield specialist is not employing a tower shield, the benefits to <em>armor training</em> revert to the normal bonuses.</Pair>
</Ability>
<Ability id="arc-fighter-tower_shield_specialist-tower-shield-specialist-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-tower_shield_specialist-tower-shield-specialist-ex">Tower Shield Specialist (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">When a tower shield specialist employs a tower shield in combat, he does not take the -2 penalty on attack rolls because of the shield's encumbrance.</Pair>
</Ability>
<Ability id="arc-fighter-tower_shield_specialist-tower-shield-defense-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-tower_shield_specialist-tower-shield-defense-ex">Tower Shield Defense (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">While using a tower shield, a tower shield specialist gains his shield bonus against touch attacks.</Pair>
</Ability>
<Ability id="arc-fighter-tower_shield_specialist-immediate-repositioning-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-tower_shield_specialist-immediate-repositioning-ex">Immediate Repositioning (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Immediate Action">A tower shield specialist can reposition his tower shield to another facing, but he cannot use this ability to interrupt an attack.</Pair>
</Ability>
<Ability id="arc-fighter-tower_shield_specialist-tower-shield-evasion-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-tower_shield_specialist-tower-shield-evasion-ex">Tower Shield Evasion (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 4, weapon mastery</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">While using a tower shield, the tower shield specialist gains <Link to="/ability/evasion">evasion</Link>, as the <Link to="/class/rogue">rogue</Link> class ability.</Pair>
<Pair title="At 20th Level">The shield specialist gains <Link to="/talent/improved_evasion">improved evasion</Link>, as the rogue advanced talent, while using a tower shield.</Pair>
</Ability>
</>};
const _trench_fighter = {title: "Trench Fighter", jsx: <><h2 id="arc-fighter-trench_fighter-trench-fighter">Trench Fighter</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_71_rasputin_must_die">Pathfinder #71: Rasputin Must Die! pg. 67</Link></p>
<p>Advances in technology have made archaic armors obsolete by the twentieth century, and modern soldiers concentrate training on firearms and swift feet.</p>
<Ability id="arc-fighter-trench_fighter-trench-warfare-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-fighter-trench_fighter-trench-warfare-ex">Trench Warfare (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1, 2, 3, and 4</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">When behind partial, normal, or improved <Link to="/rule/cover">cover</Link>, a trench fighter gains an additional +2 AC bonus from the cover.</Pair>
<Pair title="Choice">A trench fighter can select one specific type of firearm (such as a machine gun, revolver, or rifle). He gains a bonus equal to his Dexterity modifier on damage rolls when firing that type of firearm.</Pair>
<Pair title="At 7th Level">The trench fighter picks up another type of firearm, gaining these bonuses for those types as well.</Pair>
<Pair title="At 11th Level">The trench fighter picks up a third type of firearm, gaining these bonuses for those types as well.</Pair>
<Pair title="At 15th Level">The trench fighter picks up a fourth type of firearm, gaining these bonuses for those types as well.</Pair>
</Ability>
</>};
const _tribal_fighter = {title: "Tribal Fighter", jsx: <><h2 id="arc-fighter-tribal_fighter-tribal-fighter">Tribal Fighter</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 50</Link><br/>A tribal fighter knows that it is not the weapon that matters but the hand that wields it. Instead of encasing himself in metal armor like the soldiers fighting and dying for the so-called civilized lands do, he prefers to wear something he or his ancestors have killed. These relics and trophies help the tribal fighter attain a battle focus that allows him to perform incredible feats of violence with the simplest of weapons.</p>
<Ability id="arc-fighter-tribal_fighter-forbidden-armor" icon={["broken-shield"]}>
<Pair single id="arc-fighter-tribal_fighter-forbidden-armor">Forbidden Armor</Pair>
<Pair hl title="Alters">Armor proficiency</Pair>
<Pair title="Info">A tribal fighter favors traditional armor and shields, avoiding other types out of spiritual devotion, superstitious suspicion, or respect for tradition. He can attain his <em>battle focus</em> only while using armaments of the appropriate types. Like a <Link to="/class/druid">druid</Link>, a tribal fighter is prohibited from wearing metal armor and using metal shields. A tribal fighter who wears prohibited armor or uses a prohibited shield loses the benefits of the <em>battle focus</em> and <em>tribal weapon training</em> abilities while doing so and for 24 hours after removing the prohibited armor or shield.</Pair>
</Ability>
<Ability id="arc-fighter-tribal_fighter-battle-focus-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-tribal_fighter-battle-focus-ex">Battle Focus (Ex)</Pair>
<Pair hl title="Replaces">The fighter feat gained at 1st level</Pair>
<Pair title="Ability">A tribal fighter learns to fight with his bare hands and wield traditional tribal weapons so effortlessly that they are almost extensions of his arms. He gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat. For the purpose of meeting the prerequisites of <Link to="/main/style_feat">style feats</Link> and feats that have style feats as prerequisites, the tribal fighter counts as having a number of skill ranks equal to his fighter level in all skills in which he is trained.</Pair>
</Ability>
<Ability id="arc-fighter-tribal_fighter-tribal-weapon-training-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-fighter-tribal_fighter-tribal-weapon-training-ex">Tribal Weapon Training (Ex)</Pair>
<Pair hl title="Alters">Weapon training</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">When a tribal fighter gains the <em>weapon training</em> ability, he must choose the tribal <Link to="/ability/weapon_groups">weapon group</Link> and doesn't later gain additional weapon groups, though the <em>weapon training</em> bonus for tribal weapons still improves at 9th level and every 4 levels thereafter. Additionally, if the tribal fighter has combat feats that apply to a specific weapon type (such as <Link to="/feat/improved_critical">Improved Critical</Link> or <Link to="/feat/weapon_focus">Weapon Focus</Link>) and he has selected a weapon that belongs to the tribal weapon group, he can apply the benefits of that feat to all weapons that belong to the tribal weapon group that would legally apply (for instance, a feat that applies only to throwing weapons wouldn't apply to <Link to="/eq-weapon/greatclub">greatclubs</Link>). This benefit applies only to feats selected as fighter bonus feats.</Pair>
</Ability>
</>};
const _two_handed_fighter = {title: "Two-Handed Fighter", jsx: <><h2 id="arc-fighter-two_handed_fighter-two-handed-fighter">Two-Handed Fighter</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 108</Link><br/>Some fighters focus their efforts on finding the biggest, heaviest, most imposing weapon they can find and training to manage and harness the weight of their massive weapons for maximum impact. These fighting school benefits only apply when using two-handed weapons.</p>
<Ability id="arc-fighter-two_handed_fighter-shattering-strike-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-two_handed_fighter-shattering-strike-ex">Shattering Strike (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A two-handed fighter gains a +1 bonus to CMB and CMD on <Link to="/rule/sunder">sunder</Link> attempts and on damage rolls made against objects.</Pair>
<Pair title="At 6th Level">These bonuses become +2.</Pair>
<Pair title="At 10th Level">These bonuses increase to +3.</Pair>
<Pair title="At 14th Level">These bonuses become +4.</Pair>
<Pair title="At 18th Level">These bonuses increase to +5.</Pair>
</Ability>
<Ability id="arc-fighter-two_handed_fighter-overhand-chop-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-two_handed_fighter-overhand-chop-ex">Overhand Chop (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">When a two-handed fighter makes a single attack (with the attack action or a <Link to="/rule/charge">charge</Link>) with a two-handed weapon, he adds double his Strength bonus on damage rolls.</Pair>
</Ability>
<Ability id="arc-fighter-two_handed_fighter-weapon-training-ex" icon={["broken-shield"]}>
<Pair single id="arc-fighter-two_handed_fighter-weapon-training-ex">Weapon Training (Ex)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">As the fighter class feature, but the bonuses only apply when wielding two-handed melee weapons.</Pair>
</Ability>
<Ability id="arc-fighter-two_handed_fighter-backswing-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-two_handed_fighter-backswing-ex">Backswing (Ex)</Pair>
<Pair hl title="Replaces">Armor training 2</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">When a two-handed fighter makes a <Link to="/rule/full_attack">full attack</Link> with a two-handed weapon, he adds double his Strength bonus on damage rolls for all attacks after the first.</Pair>
</Ability>
<Ability id="arc-fighter-two_handed_fighter-piledriver-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-two_handed_fighter-piledriver-ex">Piledriver (Ex)</Pair>
<Pair hl title="Replaces">Armor training 3</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Standard Action">A two-handed fighter can make a single melee attack with a two-handed weapon. If the attack hits, he may make a <Link to="/rule/bull_rush">bull rush</Link> or <Link to="/rule/trip">trip</Link> combat maneuver against the target of his attack as a <strong className="hl">free action</strong> that does not provoke an attack of opportunity.</Pair>
</Ability>
<Ability id="arc-fighter-two_handed_fighter-greater-power-attack-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-two_handed_fighter-greater-power-attack-ex">Greater Power Attack (Ex)</Pair>
<Pair hl title="Replaces">Armor training 4</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Passive Ability">When using <Link to="/feat/power_attack">Power Attack</Link> with a two-handed melee weapon, the bonus damage from Power Attack is doubled (+100%) instead of increased by half (+50%).</Pair>
</Ability>
<Ability id="arc-fighter-two_handed_fighter-devastating-blow-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-two_handed_fighter-devastating-blow-ex">Devastating Blow (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Standard Action">A two-handed fighter may make a single melee attack with a two-handed weapon at a -5 penalty. If the attack hits, it is treated as a critical threat.</Pair>
<Pair title="Special">Special weapon abilities that activate only on a critical hit do not activate if this critical hit is confirmed.</Pair>
</Ability>
</>};
const _two_weapon_warrior = {title: "Two-Weapon Warrior", jsx: <><h2 id="arc-fighter-two_weapon_warrior-two-weapon-warrior">Two-Weapon Warrior</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 109</Link><br/>Trained under great masters who preached the simple truth that two are better than one when it comes to weapons, the two-weapon warrior is a terror when his hands are full. From paired daggers to exotic double weapons, all combinations come equally alive in his skilled hands.</p>
<Ability id="arc-fighter-two_weapon_warrior-defensive-flurry-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-two_weapon_warrior-defensive-flurry-ex">Defensive Flurry (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1 and 2</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">When a two-weapon warrior makes a <Link to="/rule/full_attack">full attack</Link> with both weapons, he gains a +1 dodge bonus to AC against melee attacks until the beginning of his next turn.</Pair>
<Pair title="At 7th Level">This bonus becomes +2.</Pair>
<Pair title="At 11th Level">This bonus increases to +3.</Pair>
<Pair title="At 15th Level">This bonus becomes +4.</Pair>
<Pair title="At 19th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-two_weapon_warrior-twin-blades-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-two_weapon_warrior-twin-blades-ex">Twin Blades (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A two-weapon warrior gains a +1 bonus on attack and damage rolls when making a full attack with two weapons or a double weapon.</Pair>
<Pair title="At 9th Level">This bonus becomes +2.</Pair>
<Pair title="At 13th Level">This bonus increases to +3.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-fighter-two_weapon_warrior-doublestrike-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-two_weapon_warrior-doublestrike-ex">Doublestrike (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Standard Action">A two-weapon warrior may make one attack with both his primary and secondary weapons. The penalties for <Link to="/rule/two_weapon_fighting">attacking with two weapons</Link> apply normally.</Pair>
</Ability>
<Ability id="arc-fighter-two_weapon_warrior-improved-balance-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-two_weapon_warrior-improved-balance-ex">Improved Balance (Ex)</Pair>
<Pair hl title="Replaces">Armor training 3</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">The attack penalties for fighting with two weapons are reduced by -1 for a two-weapon warrior. Alternatively, he may use a one-handed weapon in his off-hand, treating it as if it were a light weapon with the normal light weapon penalties.</Pair>
</Ability>
<Ability id="arc-fighter-two_weapon_warrior-equal-opportunity-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-two_weapon_warrior-equal-opportunity-ex">Equal Opportunity (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">When a two-weapon warrior makes an attack of opportunity, he may attack once with both his primary and secondary weapons. The penalties for attacking with two weapons apply normally.</Pair>
</Ability>
<Ability id="arc-fighter-two_weapon_warrior-perfect-balance-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-two_weapon_warrior-perfect-balance-ex">Perfect Balance (Ex)</Pair>
<Pair hl title="Replaces">Armor training 4</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Passive Ability">The penalties for fighting with two weapons are reduced by an additional -1 for a two-weapon warrior. This benefit stacks with <em>improved balance.</em> If he is using a one-handed weapon in his off hand, treating it as a light weapon, he uses the normal light weapon penalties.</Pair>
</Ability>
<Ability id="arc-fighter-two_weapon_warrior-deft-doublestrike-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-two_weapon_warrior-deft-doublestrike-ex">Deft Doublestrike (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 4</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Immediate Action">When a two-weapon warrior hits an opponent with both weapons, he can make a <Link to="/rule/disarm">disarm</Link> or <Link to="/rule/sunder">sunder</Link> attempt (or <Link to="/rule/trip">trip</Link>, if one or both weapons can be used to trip) against that opponent, and it does not provoke attacks of opportunity.</Pair>
</Ability>
<Ability id="arc-fighter-two_weapon_warrior-deadly-defense-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-two_weapon_warrior-deadly-defense-ex">Deadly Defense (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Passive Ability">When a two-weapon warrior makes a full attack with both weapons, every creature that hits him with a melee attack before the beginning of his next turn provokes an attack of opportunity from the warrior.</Pair>
</Ability>
</>};
const _unarmed_fighter = {title: "Unarmed Fighter", jsx: <><h2 id="arc-fighter-unarmed_fighter-unarmed-fighter">Unarmed Fighter</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 48</Link><br/>Not all fighters need weapons to make their mark on the world. The unarmed fighter picks up a weapon only rarely, and when he does, he prefers the weapons of the monk. There are even those who mistake them for monks, but these fighters enter the fight without ki, and instead have a tough perseverance that few can rival.</p>
<Ability id="arc-fighter-unarmed_fighter-weapon-and-armor-proficiency" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-fighter-unarmed_fighter-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair title="Info">An unarmed fighter is not proficient with medium armor, heavy armor, or shields. An unarmed fighter is proficient with all <Link to="/class/monk">monk</Link> weapons, including exotic monk weapons.</Pair>
</Ability>
<Ability id="arc-fighter-unarmed_fighter-unarmed-style" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-unarmed_fighter-unarmed-style">Unarmed Style</Pair>
<Pair hl title="Replaces">The bonus feat at 1st level</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An unarmed fighter gains the <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> feat and any single <Link to="/main/style_feat">style feat</Link> as a bonus feat. The unarmed fighter need not meet all the prerequisites of the style feat he chooses, but style feats that grant additional uses of the <Link to="/feat/elemental_fist">Elemental Fist</Link> feat cannot be taken until the unarmed fighter has that feat.</Pair>
</Ability>
<Ability id="arc-fighter-unarmed_fighter-harsh-training-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-unarmed_fighter-harsh-training-ex">Harsh Training (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An unarmed fighter gains a +1 bonus on saving throws against effects that cause the exhausted, fatigued, or staggered conditions or temporary penalties to ability scores.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-unarmed_fighter-tough-guy-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-unarmed_fighter-tough-guy-ex">Tough Guy (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">An unarmed fighter gains DR/- equal to <Link to="/misc/half">half</Link> his fighter level against nonlethal damage or damage taken while he is <Link to="/rule/grappled">grappled</Link>.</Pair>
</Ability>
<Ability id="arc-fighter-unarmed_fighter-weapon-training-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-unarmed_fighter-weapon-training-ex">Weapon Training (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1, 2, 3, and 4</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">An unarmed fighter gains a +1 bonus on attack and damage rolls with weapons in the monk and natural <Link to="/ability/weapon_groups">weapon groups</Link>.</Pair>
<Pair title="At 9th Level">This bonus becomes +2.</Pair>
<Pair title="At 13th Level">This bonus increases to +3.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-fighter-unarmed_fighter-clever-wrestler-ex" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="arc-fighter-unarmed_fighter-clever-wrestler-ex">Clever Wrestler (Ex)</Pair>
<Pair hl title="Replaces">Armor training 2</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">An unarmed fighter takes no penalties to Dexterity or on attack rolls while grappled, and retains his Dexterity bonus to AC while pinning an opponent.</Pair>
<Pair title="Ability">The unarmed fighter can make attacks of opportunity even when grappled and even against creatures attempting to <Link to="/rule/grapple">grapple</Link> him if the opponent has the <Link to="/feat/improved_grapple">Improved Grapple</Link> feat or the <Link to="/umr/grab">grab</Link> ability.</Pair>
</Ability>
<Ability id="arc-fighter-unarmed_fighter-trick-throw-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-unarmed_fighter-trick-throw-ex">Trick Throw (Ex)</Pair>
<Pair hl title="Replaces">The 8th-level bonus feat</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Immediate Action">When an unarmed fighter successfully <Link to="/rule/trip">trips</Link> an opponent with an unarmed attack, he can attempt a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver against that creature (before the opponent becomes prone).</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
</Ability>
<Ability id="arc-fighter-unarmed_fighter-takedown-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-unarmed_fighter-takedown-ex">Takedown (Ex)</Pair>
<Pair hl title="Replaces">The 12th-level bonus feat</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Swift Action">If an unarmed fighter succeeds on a <Link to="/rule/drag">drag</Link> maneuver, he can attempt a trip maneuver against the same target.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="At 15th Level">He may do so after a successful grapple check.</Pair>
</Ability>
<Ability id="arc-fighter-unarmed_fighter-eye-gouge-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-unarmed_fighter-eye-gouge-ex">Eye Gouge (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Swift Action">If an unarmed fighter confirms a critical hit with his unarmed strike or begins his turn grappled, he may attempt a dirty trick maneuver to <Link to="/misc/blind">blind</Link> his target.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="Special">A target more than one size category larger is unaffected.</Pair>
</Ability>
<Ability id="arc-fighter-unarmed_fighter-sucker-punch-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-unarmed_fighter-sucker-punch-ex">Sucker Punch (Ex)</Pair>
<Pair hl title="Replaces">Armor training 4</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Swift Action">When an unarmed fighter strikes a creature that is denied its Dexterity bonus to AC, or that he has successfully pinned with a grapple check, he can attempt a dirty trick or trip combat maneuver against that target.</Pair>
</Ability>
<Ability id="arc-fighter-unarmed_fighter-sheer-toughness-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-unarmed_fighter-sheer-toughness-ex">Sheer Toughness (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Passive Ability">An unarmed fighter becomes immune to nonlethal damage and the exhausted, fatigued, and staggered conditions.</Pair>
</Ability>
<Ability id="arc-fighter-unarmed_fighter-weapon-mastery-ex" icon={["info"]}>
<Pair single id="arc-fighter-unarmed_fighter-weapon-mastery-ex">Weapon Mastery (Ex)</Pair>
<Pair hl title="Alters">Weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Info"><em>Weapon mastery</em> applies to unarmed strikes only.</Pair>
</Ability>
</>};
const _unbreakable = {title: "Unbreakable", jsx: <><h2 id="arc-fighter-unbreakable-unbreakable">Unbreakable</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 49</Link><br/>The unbreakable is a warrior of indomitable will, unstoppable and implacable once he has set his mind upon a course of action. The unbreakable endures any trial to do what must be done, and when his mind is set toward a goal, nothing can stop him from achieving it, though many may try. He is a juggernaut and a zealot, supremely confident in his own abilities.</p>
<Ability id="arc-fighter-unbreakable-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-fighter-unbreakable-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair title="Info">An unbreakable is not proficient with tower shields.</Pair>
</Ability>
<Ability id="arc-fighter-unbreakable-tough-as-nails" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-unbreakable-tough-as-nails">Tough as Nails</Pair>
<Pair hl title="Replaces">The fighter's 1st-level bonus feat</Pair>
<Pair title="Ability">An unbreakable gains <Link to="/feat/endurance">Endurance</Link> and <Link to="/feat/diehard">Diehard</Link> as bonus feats.</Pair>
</Ability>
<Ability id="arc-fighter-unbreakable-unflinching-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-unbreakable-unflinching-ex">Unflinching (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An unbreakable gains a +1 bonus on Will saves against mind-affecting effects.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-unbreakable-heroic-recovery-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-unbreakable-heroic-recovery-ex">Heroic Recovery (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">An unbreakable gains the <Link to="/feat/heroic_recovery">Heroic Recovery</Link> feat as a bonus feat, if he does not have it already. If he already has this feat, the unbreakable can choose any <Link to="/main/combat_feat">combat feat</Link> instead.</Pair>
<Pair title="At 9th Level">He may use this feat 2 times per day.</Pair>
<Pair title="At 13th Level">He may use this feat 3 times per day.</Pair>
<Pair title="At 17th Level">He may use this feat 4 times per day.</Pair>
</Ability>
<Ability id="arc-fighter-unbreakable-heroic-defiance-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-unbreakable-heroic-defiance-ex">Heroic Defiance (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">An unbreakable gains the <Link to="/feat/heroic_defiance">Heroic Defiance</Link> feat as a bonus feat, if he does not have it already. If he already has this feat, the unbreakable can choose any combat feat instead.</Pair>
<Pair title="At 13th Level">He may use this feat 2 times per day.</Pair>
<Pair title="At 17th Level">He may use this feat 3 times per day.</Pair>
</Ability>
<Ability id="arc-fighter-unbreakable-quick-recovery-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-unbreakable-quick-recovery-ex">Quick Recovery (Ex)</Pair>
<Pair hl title="Replaces">Armor training 3</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">An unbreakable needs only 15 minutes of rest or to be subject to a healing spell or effect to recover from the <Link to="/misc/fatigued">fatigued</Link> condition.</Pair>
</Ability>
<Ability id="arc-fighter-unbreakable-stalwart-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-unbreakable-stalwart-ex">Stalwart (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">When an unbreakable succeeds on a Fortitude or Will save against a spell or spell-like ability that has a partial effect even on a successful save, he is completely unaffected by it.</Pair>
</Ability>
<Ability id="arc-fighter-unbreakable-unlimited-endurance-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-unbreakable-unlimited-endurance-ex">Unlimited Endurance (Ex)</Pair>
<Pair hl title="Replaces">Armor training 4</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Passive Ability">When an unbreakable is <Link to="/misc/exhausted">exhausted</Link>, he only suffers the effects of the fatigued condition instead, but does require 1 hour of rest to reduce this condition to the actual fatigued condition.</Pair>
</Ability>
<Ability id="arc-fighter-unbreakable-miraculous-recovery-ex" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="arc-fighter-unbreakable-miraculous-recovery-ex">Miraculous Recovery (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 4</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">When an unbreakable makes a saving throw to recover from an ongoing effect, he may roll twice and choose the better roll.</Pair>
</Ability>
<Ability id="arc-fighter-unbreakable-unbreakable-mind-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-unbreakable-unbreakable-mind-ex">Unbreakable Mind (Ex)</Pair>
<Pair hl title="Replaces">Weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">An unbreakable becomes nearly impossible to sway with honeyed words or magic. He gains immunity to mind-affecting effects.</Pair>
</Ability>
</>};
const _ustalavic_duelist = {title: "Ustalavic Duelist", jsx: <><h2 id="arc-fighter-ustalavic_duelist-ustalavic-duelist">Ustalavic Duelist</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 47</Link><br/>The University of Lepidstadt has developed a reputation for churning out fearsome duelists. At the end of each academic year, the students all gather together and duel one another with light blades. Each student duels one opponent after another until he is marked on the cheek by an adversary's blade. These "Lepidstadt scars" are recognized throughout the Inner Sea region and beyond as marks of their prowess. The Lepidstadt Style is one of fluid motion and precise thrusts.</p>
<Ability id="arc-fighter-ustalavic_duelist-weapon-and-armor-proficiency" icon={["info"]}>
<Pair single id="arc-fighter-ustalavic_duelist-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiencies</Pair>
<Pair title="Info">An Ustalavic duelist is proficient with all simple and martial weapons and with all light and medium armor and shields (except tower shields).</Pair>
</Ability>
<Ability id="arc-fighter-ustalavic_duelist-duelist-stance-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-ustalavic_duelist-duelist-stance-ex">Duelist Stance (Ex)</Pair>
<Pair hl title="Replaces">The fighter's 1st-level bonus feat</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">An Ustalavic duelist gains a dodge bonus to AC as long as he is wearing no armor or light armor, wields a melee weapon in one hand, and his other hand is empty. This dodge bonus is equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of his fighter level.</Pair>
</Ability>
<Ability id="arc-fighter-ustalavic_duelist-duelist-training-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-ustalavic_duelist-duelist-training-ex">Duelist Training (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Choice">An Ustalavic duelist must select the light blades <Link to="/ability/weapon_groups">group</Link> for the weapon training class feature.</Pair>
<Pair title="Passive Ability">The Ustalavic duelist's weapon training bonus with light blades increases by 1 on attack and damage rolls for every 4 levels he possesses beyond 5th (to a maximum of +4 on attack and damage rolls at 17th level). If he is using his <em>duelist stance,</em> this damage bonus increases by 2.</Pair>
<Pair title="Special">The Ustalavic duelist does not gain weapon training in any other groups as he increases in level.</Pair>
</Ability>
<Ability id="arc-fighter-ustalavic_duelist-lepidstadt-thrust-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-ustalavic_duelist-lepidstadt-thrust-ex">Lepidstadt Thrust (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">When using <Link to="/feat/vital_strike">Vital Strike</Link>, <Link to="/feat/improved_vital_strike">Improved Vital Strike</Link>, or <Link to="/feat/greater_vital_strike">Greater Vital Strike</Link>, an Ustalavic duelist adds his Intelligence modifier to damage rolls (this bonus to damage is not multiplied on a critical hit). If the duelist confirms a critical hit while using one of these feats, he automatically deals maximum damage.</Pair>
</Ability>
<Ability id="arc-fighter-ustalavic_duelist-science-of-the-blade-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-ustalavic_duelist-science-of-the-blade-ex">Science of the Blade (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">An Ustalavic duelist is able to apply his specialized knowledge of anatomy and physiology to his bladework. The duelist can make <Link to="/rule/dirty_trick">dirty trick</Link>, <Link to="/rule/disarm">disarm</Link>, and <Link to="/rule/trip">trip</Link> combat maneuvers using any one-handed piercing or slashing weapon.</Pair>
</Ability>
<Ability id="arc-fighter-ustalavic_duelist-surgical-strike-ex" icon={["mailed-fist"]}>
<Pair single id="arc-fighter-ustalavic_duelist-surgical-strike-ex">Surgical Strike (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 4</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">When an Ustalavic duelist confirms a critical hit with a light or one-handed piercing or slashing weapon, he deals <Link to="/rule/ability_damage">ability damage</Link> in addition to the normal bonus damage from the critical hit. The duelist chooses which ability is damaged, and deals an amount of damage equal to the critical multiplier of the wielded weapon.</Pair>
</Ability>
</>};
const _varisian_free_style_fighter = {title: "Varisian Free-Style Fighter", jsx: <><h2 id="arc-fighter-varisian_free_style_fighter-varisian-free-style-fighter">Varisian Free-Style Fighter</h2>
<p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook pg. 7</Link><br/>Free-style fighters are most common in Varisia, where their training - with multiple teachers, or perhaps instruction in the anything-goes mentality of the Price of Freedom school in Kaer Maga - allows them to blend fighting styles into a greater whole.</p>
<Ability icon={["skills"]} id="arc-fighter-varisian_free_style_fighter-undefined">
<Pair id="arc-fighter-varisian_free_style_fighter-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/escape_artist">Escape Artist</Link> (DEX), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering), Ride</Pair></Ability>
<Ability id="arc-fighter-varisian_free_style_fighter-martial-flexibility-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-varisian_free_style_fighter-martial-flexibility-ex">Martial Flexibility (Ex)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 1st level, 6th level, 10th level, and 12th level, weapon training, weapon mastery</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A Varisian free-style fighter gains <em>martial flexibility</em> as per the <Link to="/class/brawler">brawler</Link> class feature, treating his fighter level as his brawler level for the purposes of this ability.</Pair>
</Ability>
<Ability id="arc-fighter-varisian_free_style_fighter-free-fighting-style-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-varisian_free_style_fighter-free-fighting-style-ex">Free Fighting Style (Ex)</Pair>
<Pair hl title="Replaces">Armor training</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A Varisian freestyle fighter can freely mix two of the styles he knows into a more flexible style. A Varisian free-style fighter can have an additional <Link to="/main/style_feat">style feat</Link> stance active simultaneously with his first style feat stance. He can enter all of his allowed stances as a <strong className="hl">move action</strong> or one stance as a <strong className="hl">swift action</strong>.</Pair>
<Pair title="At 11th Level">A Varisian free-style fighter can have the stances of up to two additional style feats active at the same time.</Pair>
<Pair title="At 15th Level">A Varisian free-style fighter can have the stances of up to three additional style feats active at the same time.</Pair>
</Ability>
</>};
const _venomblade = {title: "Venomblade", jsx: <><h2 id="arc-fighter-venomblade-venomblade">Venomblade</h2>
<p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 5</Link><br/>The venomblade has learned to take full advantage of his toxic spittle, blinding his targets and then rushing in to cut them down where they stand.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-fighter-venomblade--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/nagaji">Nagaji</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-fighter-venomblade-venom-projection-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-venomblade-venom-projection-ex">Venom Projection (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair hl title="Alters">Bonus feat gained at 1st level</Pair>
<Pair title="Ability">The venomblade must take the <Link to="/feat/spit_venom">Spit Venom</Link> nagaji racial feat as his 1st-level fighter bonus feat if he does not already have that ability.</Pair>
<Pair title="At 2nd Level">He does not provoke an attack of opportunity for using the ability granted by the Spit Venom feat.</Pair>
<Pair title="At 4th Level">He can use the ability granted by the Spit Venom feat as a <strong className="hl">standard action</strong>.</Pair>
<Pair title="At 8th Level">He can use it as a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 12th Level">He can use it as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-fighter-venomblade-sneak-attack-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-venomblade-sneak-attack-ex">Sneak Attack (Ex)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A venomblade deals 1d6 additional points of damage to targets within 30 feet that he flanks or that are denied their Dexterity bonus to AC against him.</Pair>
<Pair title="At 10th Level">This additional damage becomes 2d6.</Pair>
<Pair title="At 14th Level">This additional damage increases to 3d6.</Pair>
<Pair title="At 18th Level">This additional damage becomes 4d6.</Pair>
</Ability>
<Ability id="arc-fighter-venomblade-viper-strike-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-fighter-venomblade-viper-strike-ex">Viper Strike (Ex)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 12th level</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Swift Action">Upon making a successful attack with a slashing or piercing weapon, the venomblade can spend a use of the ability granted by the Spit Venom feat to spray his toxin into the wound. This imposes a -4 penalty on the victim's saving throw against the poison and causes the target to take 1d6 additional points of damage from all successful attacks for 1 round. This is a poison effect.</Pair>
</Ability>
</>};
const _viking = {title: "Viking", jsx: <><h2 id="arc-fighter-viking-viking">Viking</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 51</Link>, <Link to="/source/people_of_the_north">People of the North pg. 24</Link><br/>Vikings seek to raid "softer societies" and return with their longships filled with plunder. A viking strikes fear into the heart of her foes, and in battle she can fly into a terrible rage. Many vikings wear the pelts of bears or wolves, drawing on the strength and ferocity of these beasts in battle. Vikings do not wear heavy armor, but they are skilled at fighting with an axe or spear in conjunction with a shield.</p>
<Ability id="arc-fighter-viking-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-fighter-viking-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Weapon and armor proficiencies</Pair>
<Pair title="Info">A viking is not proficient with heavy armor or tower shields.</Pair>
</Ability>
<Ability id="arc-fighter-viking-fearsome-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-viking-fearsome-ex">Fearsome (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="At 2nd Level">A viking can attempt an Intimidate check to demoralize an opponent as a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 10th Level">She can do so as a <strong className="hl">swift action</strong>.</Pair>
<Pair title="At 18th Level">She can attempt to demoralize a foe as a <strong className="hl">free action</strong> once per round.</Pair>
</Ability>
<Ability id="arc-fighter-viking-shield-defense-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-viking-shield-defense-ex" flavor="A viking learns the art of fighting with a shield.">Shield Defense (Ex)</Pair>
<Pair hl title="Replaces">Armor training</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">Whenever she is wearing medium, light, or no armor and using a shield, the viking's shield bonus to AC increases by 1.</Pair>
<Pair title="At 7th Level">The shield bonus to AC now increases by 2.</Pair>
<Pair title="At 11th Level">The shield bonus to AC now increases by 3.</Pair>
<Pair title="At 15th Level">The shield bonus to AC now increases by 4.</Pair>
</Ability>
<Ability id="arc-fighter-viking-berserker-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-viking-berserker-ex">Berserker (Ex)</Pair>
<Pair hl title="Replaces">Weapon training</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A viking gains the <em>rage</em> ability as per the <Link to="/class/barbarian">barbarian</Link> class feature, and she uses her fighter level as her barbarian level for the purposes of determining her rounds of rage, qualifying for rage powers, and determining the effects of rage powers.</Pair>
</Ability>
<Ability id="arc-fighter-viking-rage-powers-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-viking-rage-powers-ex">Rage Powers (Ex)</Pair>
<Pair hl title="Alters">The fighter's bonus feats</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Choice">Whenever a viking gains a fighter bonus feat, she can instead gain a single <Link to="/ability/rage_powers">rage power</Link>, as the barbarian class feature, in place of the bonus feat. Once selected, these rage powers cannot be changed.</Pair>
</Ability>
</>};
const _warlord = {title: "Warlord", jsx: <><h2 id="arc-fighter-warlord-warlord">Warlord</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_worldscape_3">Pathfinder Worldscape #3 pg. 26</Link><br/>Honorable, fearless experts in gun and blade, warlords roam the dried seabeds of time-worn Mars, warring in great tribes for supremacy over a dying planet. Capable of relentless brutality and quick to flare into open hostilities, warlords cloak their violent ways with paens to great noble houses or honored ancient traditions, bringing an air of respectability and etiquette to the butchery of brazen blades against bare skin. Warlords eschew armor as impractical to their harsh and often desert-like environment, preferring the free movement of near-nakedness. Warlords tend to specialize in the traditional weapons of Barsoom, leaving them ignorant of even simple Weapons common on other worlds. The same impulse that guides a warlord to stick to the traditional garb and gear of his culture can lead to a single-mindedness of purpose that can propel him far within his tribe or noble house. Even warlords of low status in Martian society claim a connection, no matter how ancient, with some great chieftain or emperor, seeing in the glorious past a path to a more hopeful future. Barsoom confers noble status upon its warlords through ritual combat in the case of green Martians or on merit and upon great achievement or heroics in the case of red Martians, so climbing the ladder of status is an important part of a warlord's journey through life.</p>
<Ability icon={["skills"]} id="arc-fighter-warlord-undefined">
<Pair id="arc-fighter-warlord-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering), Swim</Pair></Ability>
<Ability id="arc-fighter-warlord-weapon-and-armor-proficiency" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-fighter-warlord-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiencies</Pair>
<Pair title="Info">A warlord is proficient with the <Link to="/eq-weapon/halberd">halberd</Link>, <Link to="/eq-weapon/radium_pistol">radium pistol</Link>, <Link to="/eq-weapon/rapier">rapier</Link>, <Link to="/eq-weapon/radium_rifle">radium rifle</Link>, <Link to="/eq-weapon/longspear">longspear</Link>, <Link to="/eq-weapon/longsword">longsword</Link>, <Link to="/eq-weapon/shortspear">shortspear</Link>, <Link to="/eq-weapon/spear">spear</Link>, <Link to="/eq-weapon/thark_rifle">Thark rifle</Link>, <Link to="/eq-weapon/trident">trident</Link>, and <Link to="/eq-weapon/whip">whip</Link>. Warlords are not proficient with armor or shields.</Pair>
</Ability>
<Ability id="arc-fighter-warlord-evasive-dueling-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-warlord-evasive-dueling-ex">Evasive Dueling (Ex)</Pair>
<Pair hl title="Alters">Bonus combat feats</Pair>
<Pair title="Choice">Whenever he would gain a bonus combat feat, a warlord can instead add a +1 dodge bonus to his Armor Class. The dodge bonus does not apply when wearing any armor, when using a shield, or when carrying a medium or heavier load.</Pair>
</Ability>
<Ability id="arc-fighter-warlord-battle-bravado-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-warlord-battle-bravado-ex" flavor="The warlord's self confidence and force of will make him more difficult to hit.">Battle Bravado (Ex)</Pair>
<Pair hl title="Replaces">Armor training</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">When unarmored and unencumbered. the warlord adds his Charisma bonus (if any) to his AC and his CMD.</Pair>
<Pair title="At 7th Level">The warlord gains a +1 dodge bonus.</Pair>
<Pair title="At 11th Level">The warlord gains another +1 dodge bonus.</Pair>
<Pair title="At 15th Level">The warlord again gains a +1 dodge bonus.</Pair>
<Pair title="Special">He loses these bonuses when he wears any armor, when he carries a shield, or when he carries a medium or heavy load.</Pair>
</Ability>
<Ability id="arc-fighter-warlord-weapon-training-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-warlord-weapon-training-ex">Weapon Training (Ex)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability"><p>A warlord adds the following <Link to="/ability/weapon_groups">weapon group</Link> to those he can choose from when using weapon training.</p>
<p><strong className="hl">Barsoomian:</strong> Halberd, radium pistol, rapier, radium rifle, longspear, longsword, shortspear, spear, Thark rifle, trident, whip.</p>
</Pair>
</Ability>
<Ability id="arc-fighter-warlord-sun-bronzed-skin-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-warlord-sun-bronzed-skin-ex">Sun-Bronzed Skin (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Passive Ability">The warlord gains DR 5/- whenever he is not wearing armor or using a shield.</Pair>
</Ability>
</>};
const _weapon_bearer_squire = {title: "Weapon Bearer Squire", jsx: <><h2 id="arc-fighter-weapon_bearer_squire-weapon-bearer-squire">Weapon Bearer Squire</h2>
<p><strong>Sources</strong> <Link to="/source/knights_of_the_inner_sea">Knights of the Inner Sea pg. 21</Link><br/>With myriad weapons, armor, and useful gear always on hand, the weapon bearer squire ensures her knight is equipped for any task.</p>
<Ability id="arc-fighter-weapon_bearer_squire-weapon-rack-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-weapon_bearer_squire-weapon-rack-ex">Weapon Rack (Ex)</Pair>
<Pair hl title="Replaces">The 1st-level fighter bonus combat feat</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Move-Equivalent Action">Once per round, a knight can retrieve an item carried by his weapon bearer squire.</Pair>
<Pair title="Immediate Action">A weapon bearer squire can pick up items dropped by her knight.</Pair>
<Pair title="Special">These abilities do not provoke attacks of opportunity. The knight and the weapon bearer squire must be adjacent to each other and must both be able to move and communicate to use these abilities.</Pair>
</Ability>
<Ability id="arc-fighter-weapon_bearer_squire-swift-sharpening-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-weapon_bearer_squire-swift-sharpening-ex" flavor="A weapon bearer squire can quickly hone her lord's weapons to make them more effective in combat.">Swift Sharpening (Ex)</Pair>
<Pair hl title="Replaces">The 2nd-level fighter bonus combat feat</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Full-Round Action">A weapon bearer squire can use a <Link to="/eq-misc/whetstone">whetstone</Link> to sharpen a weapon she is holding, granting whoever wields the weapon a +1 circumstance bonus on his next attack roll with that weapon.</Pair>
<Pair title="Standard Action">She can apply a <Link to="/eq-misc/weapon_blanch_adamantine">weapon blanch</Link> to a weapon she is holding. (This is normally a full-round action.)</Pair>
</Ability>
<Ability id="arc-fighter-weapon_bearer_squire-combat-repairs-ex" icon={["stairs-goal"]}>
<Pair single id="arc-fighter-weapon_bearer_squire-combat-repairs-ex" flavor="A weapon bearer squire can ensure her liege never goes unarmed, even if his weapon has all but shattered.">Combat Repairs (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Full-Round Action">A weapon bearer squire can make rapid repairs to a weapon she is holding and is proficient with by succeeding at a DC 20 Craft (weapons) check. The item does not regain any hit points, but loses the <Link to="/misc/broken">broken</Link> condition for a number of rounds equal to the weapon bearer squire's class level.</Pair>
</Ability>
</>};
const _weapon_master = {title: "Weapon Master", jsx: <><h2 id="arc-fighter-weapon_master-weapon-master">Weapon Master</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 109</Link><br/>Devoted to the perfection of a single weapon, the weapon master's meditations upon his favored weapon border on the obsessive, but none can deny his consummate skill.</p>
<Ability id="arc-fighter-weapon_master-chosen-weapon" icon={["info"]}>
<Pair single id="arc-fighter-weapon_master-chosen-weapon">Chosen Weapon</Pair>
<Pair title="Choice">The weapon master must select a single type of weapon (such as longsword or shortbow). All of his abilities apply to that weapon type.</Pair>
</Ability>
<Ability id="arc-fighter-weapon_master-weapon-guard-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-weapon_master-weapon-guard-ex">Weapon Guard (Ex)</Pair>
<Pair hl title="Replaces">Bravery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A weapon master gains a +1 bonus to CMD against <Link to="/rule/disarm">disarm</Link> and <Link to="/rule/sunder">sunder</Link> attempts while wielding his chosen weapon. This bonus also applies on saves against any effect that targets his chosen weapon (for example, <Link to="/spell/grease">grease</Link>, <Link to="/spell/heat_metal">heat metal</Link>, <Link to="/spell/shatter">shatter</Link>, <Link to="/spell/warp_wood">warp wood</Link>).</Pair>
<Pair title="At 6th Level">The bonus becomes +2.</Pair>
<Pair title="At 10th Level">The bonus increases to +3.</Pair>
<Pair title="At 14th Level">The bonus becomes +4.</Pair>
<Pair title="At 18th Level">The bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-weapon_master-weapon-training-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-weapon_master-weapon-training-ex">Weapon Training (Ex)</Pair>
<Pair hl title="Replaces">Armor training 1, 2, 3, and 4</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A weapon master gains a +1 bonus on attack and damage rolls with his chosen weapon.</Pair>
<Pair title="At 7th Level">The bonus becomes +2.</Pair>
<Pair title="At 11th Level">The bonus increases to +3.</Pair>
<Pair title="At 15th Level">The bonus becomes +4.</Pair>
<Pair title="At 19th Level">The bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-fighter-weapon_master-reliable-strike-ex" icon={["rolling-dices"]}>
<Pair single id="arc-fighter-weapon_master-reliable-strike-ex">Reliable Strike (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 1</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 time/day per five fighter levels<ByLevelPop levels={[[5,1],[10,2],[15,3],[20,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Immediate Action">A weapon master may reroll an attack roll, critical hit confirmation roll, miss chance check, or damage roll. He must accept the second roll even if it is worse.</Pair>
</Ability>
<Ability id="arc-fighter-weapon_master-mirror-move-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-fighter-weapon_master-mirror-move-ex">Mirror Move (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 2</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A weapon master gains his weapon training bonus as an insight bonus to AC when attacked by his chosen weapon.</Pair>
</Ability>
<Ability id="arc-fighter-weapon_master-deadly-critical-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-weapon_master-deadly-critical-ex">Deadly Critical (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 3</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Usage">1 time/day + 1 per three fighter levels beyond 13th<ByLevelPop levels={[[13,1],[16,2],[19,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Immediate Action">When a weapon master confirms a critical hit with his chosen weapon, he can increase the weapon's damage multiplier by +1.</Pair>
</Ability>
<Ability id="arc-fighter-weapon_master-critical-specialist-ex" icon={["upgrade"]}>
<Pair single id="arc-fighter-weapon_master-critical-specialist-ex">Critical Specialist (Ex)</Pair>
<Pair hl title="Replaces">Weapon training 4</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">The save DCs of any effects caused by a critical hit with a weapon master's chosen weapon increase by +4.</Pair>
</Ability>
<Ability id="arc-fighter-weapon_master-unstoppable-strike-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-fighter-weapon_master-unstoppable-strike-ex">Unstoppable Strike (Ex)</Pair>
<Pair hl title="Replaces">Armor mastery</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Standard Action">A weapon master can make one attack with his chosen weapon as a touch attack that ignores damage reduction (or hardness, if attacking an object).</Pair>
</Ability>
</>};
export default {opportunist:_opportunist,pack_mule:_pack_mule,phalanx_soldier:_phalanx_soldier,polearm_master:_polearm_master,qadira_dawnflower_dervish:_qadira_dawnflower_dervish,relic_master:_relic_master,roughrider:_roughrider,savage_warrior:_savage_warrior,scrapper:_scrapper,seasoned_commander:_seasoned_commander,sensate:_sensate,shielded_fighter:_shielded_fighter,siegebreaker:_siegebreaker,skirmisher:_skirmisher,spear_fighter:_spear_fighter,steelbound_fighter:_steelbound_fighter,swarm_fighter:_swarm_fighter,tactician:_tactician,taldor_rondelero_duelist:_taldor_rondelero_duelist,thunderstriker:_thunderstriker,titan_fighter:_titan_fighter,tower_shield_specialist:_tower_shield_specialist,trench_fighter:_trench_fighter,tribal_fighter:_tribal_fighter,two_handed_fighter:_two_handed_fighter,two_weapon_warrior:_two_weapon_warrior,unarmed_fighter:_unarmed_fighter,unbreakable:_unbreakable,ustalavic_duelist:_ustalavic_duelist,varisian_free_style_fighter:_varisian_free_style_fighter,venomblade:_venomblade,viking:_viking,warlord:_warlord,weapon_bearer_squire:_weapon_bearer_squire,weapon_master:_weapon_master}