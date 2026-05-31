import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _ankous_shadow = {title: "Ankou's Shadow", jsx: <><h2 id="arc-slayer-ankous_shadow-ankous-shadow">Ankou's Shadow</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 14</Link><br/>Ankous are terrifying, winged fey assassins dispatched by the greatest lords of the First World to eliminate rivals. Some mortals emulate ankous to become the perfect assassins; others believe themselves to be ankous incarnated in mortal shells on a deep cover mission. In either case, an ankou's shadow practices the deadliest skills of the First World's most feared enforcers.</p>
<Ability id="arc-slayer-ankous_shadow-shadow-double-sp" icon={["stairs-goal"]}>
<Pair single id="arc-slayer-ankous_shadow-shadow-double-sp">Shadow Double (Sp)</Pair>
<Pair hl title="Replaces">Studied target</Pair>
<Pair title="Full-Round Action">An ankou's shadow can create a single, quasi-real, shadowy duplicate. This <em>shadow double</em> remains in his square, mimicking his movements as a single <Link to="/spell/mirror_image">mirror image</Link>, except that it lasts until it is destroyed or he chooses to dismiss it as a <strong className="hl">swift action</strong>. This ability does not stack with the <em>mirror image</em> spell or with similar abilities, such as the <em>copycat</em> ability of the <Link to="/domain/trickery">Trickery</Link> domain.</Pair>
<Pair title="At 5th Level">An ankou's shadow gains a second <em>shadow double.</em> In addition to using these <em>shadow doubles</em> as <em>mirror images</em> in his square, he can move his doubles as part of his own move action, dividing his movement between himself and his doubles. When outside his square, <em>shadow doubles</em> do not protect the ankou's shadow as <em>mirror image</em> and are limited in the actions they can take. Shadow doubles provide <Link to="/rule/flanking">flanking</Link> for the ankou's shadow and his allies, but they do not possess teamwork feats or special abilities that alter the effects of flanking or aiding another. As a <strong className="hl">swift action</strong>, the ankou's shadow can direct his <em>shadow doubles</em> to use the <Link to="/rule/aid_another_2">aid another</Link> action, using his own base attack bonus plus his Intelligence modifier for the roll. Although a <em>shadow double</em> appears to duplicate the ankou's shadow's gear, this gear is part of its form; a <em>shadow double's</em> gear cannot be destroyed, dropped, or stolen. A <em>shadow double</em> disappears if it ventures more than 50 feet from the ankou's shadow or if it leaves his line of sight or effect. A <em>shadow double</em> that is hit by an attack roll or takes any damage is destroyed. The AC of a <em>shadow double</em> is equal to the ankou's shadow's touch AC, and it has the same CMD and saving throw bonuses as the ankou's shadow. Shadow doubles possess <Link to="/ability/evasion">evasion</Link> if the ankou's shadow does. Mind-affecting effects targeting a <em>shadow double</em> affect the ankou's shadow instead, though he isn't affected twice by effects that target both him and a <em>shadow double.</em></Pair>
<Pair title="At 10th Level">An ankou's shadow gains a third <em>shadow double.</em> He can divide his actions between his actual body and his <em>shadow doubles,</em> using them as the origin point for attacks or abilities. For example, an ankou's shadow making three attacks as a part of a full attack could make his primary attack from his own body and his other two attacks from two of his <em>shadow doubles.</em></Pair>
<Pair title="At 15th Level">An ankou's shadow gains a fourth <em>shadow double.</em> In addition to the abilities above, an ankou's shadow can assign the doubles to perform simple tasks on their own, as the <Link to="/spell/unseen_servant">unseen servant</Link> spell, except that the <em>shadow doubles</em> have an effective Strength score of 10.</Pair>
</Ability>
<Ability id="arc-slayer-ankous_shadow-ankous-vision-sp" icon={["magic-swirl"]}>
<Pair single id="arc-slayer-ankous_shadow-ankous-vision-sp">Ankou's Vision (Sp)</Pair>
<Pair hl title="Replaces">Stalker</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">An ankou's shadow can use <Link to="/spell/see_invisibility">see invisibility</Link>, as per the spell, for 1 minute per level per day. This duration does not need to be consecutive, but it must be used in 1-minute increments.</Pair>
</Ability>
<Ability id="arc-slayer-ankous_shadow-shadow-prey-ex" icon={["broken-shield","info"]}>
<Pair single id="arc-slayer-ankous_shadow-shadow-prey-ex">Shadow Prey (Ex)</Pair>
<Pair hl title="Alters">Quarry, improved quarry</Pair>
<Pair title="Info">An ankou's shadow cannot denote a target as his <em>quarry</em> unless he has a <em>shadow double</em> present, but unlike other slayers, the target does not need to be one of his <em>studied targets.</em></Pair>
</Ability>
<Ability id="arc-slayer-ankous_shadow-unfettered-shadows-su" icon={["stairs-goal"]}>
<Pair single id="arc-slayer-ankous_shadow-unfettered-shadows-su">Unfettered Shadows (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Usage">3 + Intelligence modifier times/day</Pair>
<Pair title="Standard Action">An ankou's shadow can unfetter all of his <em>shadow doubles</em> for 1 minute. While unfettered, each <em>shadow double</em> can move and attack as if it were the ankou's shadow without using any of his actions. A creature struck by a <em>shadow double</em> can attempt a Will save (DC 20 + the ankou's shadow's Intelligence modifier) each time it takes damage to recognize the illusion. If it succeeds, the target treats all the <em>shadow doubles</em> as 20% real, as the spell <Link to="/spell/shadow_conjuration">shadow conjuration</Link>.</Pair>
<Pair title="Special">The <em>shadow doubles</em> cannot use the <em>shadow double</em> ability.</Pair>
</Ability>
<p><strong className="hl">The following slayer talents complement the ankou's shadow archetype:</strong> <Link to="/slayertalent/rogue_talent">rogue talent</Link> (<Link to="/talent/bleeding_attack">bleeding attack</Link>, <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/surprise_attack">surprise attack</Link>), <Link to="/slayertalent/slowing_strike">slowing strike</Link></p><p><strong className="hl">The following advanced slayer talents complement the ankou's shadow archetype:</strong> <Link to="/slayertalent/advanced_rogue_talent">advanced rogue talent</Link> (hunter's surprise), <Link to="/slayertalent/assassinate">assassinate</Link>, <Link to="/slayertalent/woodland_stride">woodland stride</Link></p></>};
const _avalancher = {title: "Avalancher", jsx: <><h2 id="arc-slayer-avalancher-avalancher">Avalancher</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 86</Link><br/>Avalanchers attack from overhead cliffs and mesas like a landslide of arrows and blades.</p>
<Ability id="arc-slayer-avalancher-falling-strike-ex" icon={["upgrade"]}>
<Pair single id="arc-slayer-avalancher-falling-strike-ex" flavor="An avalancher excels at dropping onto opponents from higher ground.">Falling Strike (Ex)</Pair>
<Pair hl title="Replaces">Studied target</Pair>
<Pair title="Passive Ability">He gains a bonus on Stealth checks and attack and damage rolls when he falls at least 10 feet before attacking an opponent. These bonuses are equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of his slayer level, and they stack with any bonuses the avalancher receives for <Link to="/rule/charging">charging</Link> or attacking from <Link to="/rule/higher_ground">higher ground</Link>.</Pair>
</Ability>
<Ability id="arc-slayer-avalancher-cliff-jumper-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-slayer-avalancher-cliff-jumper-ex">Cliff Jumper (Ex)</Pair>
<Pair hl title="Replaces">Track, swift tracker</Pair>
<Pair title="Passive Ability">An avalancher adds half his level on Acrobatics checks to jump or soften a fall.</Pair>
<Pair title="Ability">Whenever he attempts an <Link to="/skill/acrobatics">Acrobatics</Link> check to soften an intentional fall, he reduces the falling damage he takes by an additional 1d6 for every increment of 10 by which his Acrobatics check result exceeds the DC (a 2d6 reduction at DC 25, 3d6 at DC 35, and so on).</Pair>
<Pair title="At 11th Level">The avalancher reduces the DC of his Acrobatics checks to soften a fall by 5.</Pair>
</Ability>
<Ability id="arc-slayer-avalancher-falling-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-slayer-avalancher-falling-dodge-ex">Falling Dodge (Ex)</Pair>
<Pair hl title="Replaces">Stalker</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">An avalancher gains his bonus to AC from the <em>falling strike</em> ability when a jump or fall carries him through threatened squares.</Pair>
<Pair title="Special">This bonus applies only when he's jumping, not when he's using Acrobatics to try to avoid attacks of opportunity from moving through threatened squares.</Pair>
</Ability>
<Ability id="arc-slayer-avalancher-fall-by-attack-ex" icon={["stairs-goal"]}>
<Pair single id="arc-slayer-avalancher-fall-by-attack-ex">Fall-By Attack (Ex)</Pair>
<Pair hl title="Replaces">Quarry, improved quarry</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">If the avalancher makes a single jump of at least 20 feet in any direction and lands at an elevation at least 10 feet lower than his starting elevation, he can make ranged or melee attacks during his fall as if he were making a full-round attack. He can make any number of attacks in any combination of squares along this single jump, up to his maximum number of attacks, but he can attack a given creature once at most. If the avalancher attempts a jump but fails the Acrobatics check, he makes no attacks and suffers the consequences of his failed jump normally.</Pair>
<Pair title="At 19th Level">He can add his extra damage from <em>sneak attack</em> against each creature he hits while using this ability, even if the targets have acted in combat or retain their Dexterity bonuses to AC.</Pair>
</Ability>
<Ability id="arc-slayer-avalancher-death-from-above-ex" icon={["stairs-goal"]}>
<Pair single id="arc-slayer-avalancher-death-from-above-ex" flavor="An avalancher can take down his foe with a single attack.">Death from Above (Ex)</Pair>
<Pair hl title="Replaces">Master slayer</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">During a round, if he falls at least 10 feet (the action type depends on how he comes to be falling), he can make a single attack at his full base attack bonus as a <strong className="hl">standard action</strong>, choosing one of the following effects: kill, knock unconscious for 1d4 hours, or paralyze for 2d6 rounds. If the attack hits, the target takes damage normally and must succeed at a Fortitude save or suffer the additional effect. The save DC is equal to 20 + 1 for every 10 feet the avalancher fell before making the attack (to a maximum of DC 30 for a fall of 100 feet or more).</Pair>
<Pair title="Special">Whether or not the target succeeds, it can't be targeted by this ability again (by any avalancher) for 24 hours.</Pair>
</Ability>
</>};
const _bloody_jake = {title: "Bloody Jake", jsx: <><h2 id="arc-slayer-bloody_jake-bloody-jake">Bloody Jake</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 66</Link><br/>Bloody jakes are cruel backwoods folk who prey upon their country cousins while terrorizing civilized people who venture into their rural range.</p>
<Ability id="arc-slayer-bloody_jake-alignment" icon={["hazard-sign"]}>
<Pair single id="arc-slayer-bloody_jake-alignment">Alignment</Pair>
<Pair title="Prerequisites">A bloody jake must be of an evil alignment.</Pair>
<Pair title="Info">A bloody jake who becomes nonevil cannot gain new levels as a slayer but retains all his class abilities.</Pair>
</Ability>
<Ability id="arc-slayer-bloody_jake-favored-terrain-ex" icon={["upgrade"]}>
<Pair single id="arc-slayer-bloody_jake-favored-terrain-ex">Favored Terrain (Ex)</Pair>
<Pair hl title="Replaces">Proficiency in medium armor and shields</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A bloody jake can select a type of terrain from the <Link to="/ability/favored_terrain">favored terrain</Link> table for <Link to="/class/ranger">rangers</Link>, though he is restricted to cold, desert, forest, jungle, mountains, plains, and swamp.</Pair>
<Pair title="At 5th Level">His bonuses in the selected terrain increase by 2.</Pair>
<Pair title="At 10th Level">His bonuses in the selected terrain now increase by 4.</Pair>
<Pair title="At 15th Level">His bonuses in the selected terrain now increase by 6.</Pair>
<Pair title="At 20th Level">His bonuses in the selected terrain now increase by 8.</Pair>
<Pair title="Special">He does not gain the ability to select additional <em>favored terrains</em> unless he takes the <Link to="/talent/terrain_mastery">terrain mastery</Link> rogue talent.</Pair>
</Ability>
<Ability id="arc-slayer-bloody_jake-cruel-tricks" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-slayer-bloody_jake-cruel-tricks">Cruel Tricks</Pair>
<Pair hl title="Replaces">The 1st-level studied target, slayer talents gained at 4th, 8th, 12th, and 16th level</Pair>
<Pair title="Usage">Slayer level + Charisma modifier times/day</Pair>
<Pair title="Ability">Bloody jakes use backwoods folk magic to confuse, terrify, and weaken their prey. He gains the <em>cruel tricks</em> below at the indicated slayer levels.</Pair>
</Ability>
<Ability id="arc-slayer-bloody_jake-distant-voices-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-slayer-bloody_jake-distant-voices-sp">Distant Voices (Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A bloody jake can cause his voice to seem to emanate from somewhere else, as per <Link to="/spell/ventriloquism">ventriloquism</Link>. This ability doesn't take any other action to activate and can be used as part of speaking (as a <strong className="hl">free action</strong>); it costs one use of <em>cruel tricks</em> to affect his speech for 1 round.</Pair>
</Ability>
<Ability id="arc-slayer-bloody_jake-lose-your-way-sp" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-slayer-bloody_jake-lose-your-way-sp">Lose Your Way (Sp)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Standard Action">A bloody jake can spend one use of <em>cruel tricks</em> to cause a creature that is within 30 feet and within the bloody jake's <em>favored terrain</em> to become disoriented, taking a penalty on Survival checks equal to the bloody jake's slayer level and a -2 penalty on saving throws against fear and illusions. This effect lasts for 1 hour per slayer level of the bloody jake or for as long as the affected creature remains within the bloody jake's <em>favored terrain,</em> whichever is shorter.</Pair>
</Ability>
<Ability id="arc-slayer-bloody_jake-somethings-not-right-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-slayer-bloody_jake-somethings-not-right-su">Something's Not Right (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Move-Equivalent Action">A bloody jake can spend one use of <em>cruel tricks</em> to cause all foes within 30 feet to become <Link to="/misc/shaken">shaken</Link> for 1 round. This is a fear effect that doesn't increase in strength by applying other effects that cause creatures to become shaken.</Pair>
<Pair title="At 12th Level">He can use this ability as a <strong className="hl">swift action</strong>.</Pair>
<Pair title="At 16th Level">A bloody jake can make any number of the affected foes <Link to="/misc/frightened">frightened</Link> for 1 round, though such foes receive a Will save (DC = 10 + 1/2 the loody jake's slayer level + his Charisma modifier) to negate the frightened condition; even so, such a foe is still shaken.</Pair>
</Ability>
<Ability id="arc-slayer-bloody_jake-the-woods-have-eyes-sp" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-slayer-bloody_jake-the-woods-have-eyes-sp">The Woods Have Eyes (Sp)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Swift Action">A bloody jake in his <em>favored terrain</em> can spend one use of <em>cruel tricks</em> to gain <Link to="/umr/blindsense">blindsense</Link> in a 30-foot radius for 1 round; this blindsense is sound-based.</Pair>
</Ability>
<Ability id="arc-slayer-bloody_jake-poor-study-ex" icon={["broken-shield"]}>
<Pair single id="arc-slayer-bloody_jake-poor-study-ex">Poor Study (Ex)</Pair>
<Pair hl title="Alters">Studied target</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A bloody jake gains <em>studied target</em> at 5th level rather than 1st level, with a bonus equal to <Link to="/misc/one_fifth">one-fifth</Link> of his slayer level.</Pair>
<Pair title="At 11th Level">A bloody jake may study an opponent as a <strong className="hl">move</strong> or <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="arc-slayer-bloody_jake-sadistic-snare-ex" icon={["stairs-goal"]}>
<Pair single id="arc-slayer-bloody_jake-sadistic-snare-ex">Sadistic Snare (Ex)</Pair>
<Pair hl title="Replaces">Slayer talent gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A bloody jake gains <Link to="/feat/learn_ranger_trap">Learn Ranger Trap</Link> as a bonus feat, benefiting from it as if he were a ranger. He can expend two uses of his traps ability to add his sneak attack damage to the trap's damage; any slayer talents or rogue talents he has that modify sneak attack damage, such as <Link to="/talent/bleeding_attack">bleeding attack</Link>, also apply to sneak attack damage dealt by his ranger traps.</Pair>
</Ability>
<Ability id="arc-slayer-bloody_jake-cruel-trick-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-slayer-bloody_jake-cruel-trick-ex">Cruel Trick (Ex)</Pair>
<Pair hl title="Replaces">Swift tracker</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A bloody jake can maim or humiliate his target with a sneak attack, substituting 1 point of <Link to="/rule/charisma_damage">Dexterity or Charisma damage</Link> per die of sneak attack damage forfeited. A successful Will save negates this ability damage (DC = 10 + 1/2 the bloody jake's slayer level + his Charisma modifier).</Pair>
</Ability>
<Ability id="arc-slayer-bloody_jake-woodland-shortcut-sp" icon={["magic-swirl"]}>
<Pair single id="arc-slayer-bloody_jake-woodland-shortcut-sp">Woodland Shortcut (Sp)</Pair>
<Pair hl title="Replaces">Slayer's advance</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">A bloody jake can move with supernatural ease among the trees once per day, as if using <Link to="/spell/tree_stride">tree stride</Link> with a caster level equal to his slayer level.</Pair>
</Ability>
</>};
const _bounty_hunter = {title: "Bounty Hunter", jsx: <><h2 id="arc-slayer-bounty_hunter-bounty-hunter">Bounty Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 118</Link><br/>Whether tasked with bringing in wanted criminals or paid to drag debtors back to their loan sharks, bounty hunters are valued for their ability to capture targets alive.</p>
<Ability id="arc-slayer-bounty_hunter-weapon-and-armor-proficiency" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-slayer-bounty_hunter-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiencies</Pair>
<Pair title="Info">A bounty hunter is proficient with all simple and martial weapons plus the <Link to="/eq-weapon/aklys">aklys</Link>, <Link to="/eq-weapon/bolas">bolas</Link>, <Link to="/eq-weapon/dan_bong">dan bong</Link>, <Link to="/eq-weapon/lasso">lasso</Link>, and <Link to="/eq-weapon/net">net</Link>. Bounty hunters are proficient with light armor, light shields, and bucklers, but not heavy shields or tower shields.</Pair>
</Ability>
<Ability id="arc-slayer-bounty_hunter-dirty-trick-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-slayer-bounty_hunter-dirty-trick-ex">Dirty Trick (Ex)</Pair>
<Pair hl title="Replaces">Slayer talent gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">Anytime a bounty hunter is able to deal sneak attack damage to a <em>studied target,</em> he can instead attempt to hamper the target. The bounty hunter must declare that he's using this ability before the attack roll is made. If the attack hits, it deals damage normally, but instead of rolling sneak attack damage, the bounty hunter can attempt a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver against the <em>studied target</em> as a free action, adding 1 to the combat maneuver check for each die of the bounty hunter's sneak attack damage. This combat maneuver does not provoke attacks of opportunity.</Pair>
</Ability>
<Ability id="arc-slayer-bounty_hunter-submission-hold-ex" icon={["mailed-fist"]}>
<Pair single id="arc-slayer-bounty_hunter-submission-hold-ex">Submission Hold (Ex)</Pair>
<Pair hl title="Replaces">Slayer talent gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">When a bounty hunter attempts a <Link to="/rule/grapple">grapple</Link> combat maneuver check to deal damage, he can choose to add his sneak attack damage to the grapple damage for that attack. He takes a -5 penalty on the combat maneuver check if he does this. This sneak attack damage is nonlethal damage, unless the bounty hunter is able to deal normal damage with a grapple and chooses to do so.</Pair>
</Ability>
<Ability id="arc-slayer-bounty_hunter-incapacitate-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-slayer-bounty_hunter-incapacitate-ex">Incapacitate (Ex)</Pair>
<Pair hl title="Replaces">The advanced slayer talent gained at 10th level</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">A bounty hunter can incapacitate a <em>studied target.</em> This functions like the <Link to="/slayertalent/assassinate">assassinate</Link> slayer talent, except instead of killing the target, the bounty hunter's successful attack knocks the target unconscious for 1d6 rounds unless it succeeds at its saving throw. If the target does succeed at its saving throw, it still takes the sneak attack damage as normal, but the damage is nonlethal, and the target is immune to that slayer's incapacitate ability for 24 hours.</Pair>
</Ability>
<p><strong className="hl">The following slayer talents complement the bounty hunter archetype:</strong> <Link to="/slayertalent/rogue_talent">rogue talent</Link> (<Link to="/talent/camouflage">camouflage</Link>, <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/hard_to_fool">hard to fool</Link>, <Link to="/talent/snap_shot">snap shot</Link>, <Link to="/talent/surprise_attack">surprise attack</Link>, <Link to="/talent/terrain_mastery">terrain mastery</Link>), <Link to="/slayertalent/slowing_strike">slowing strike</Link></p><p><strong className="hl">The following advanced slayer talents complement the bounty hunter archetype:</strong> <Link to="/slayertalent/advanced_rogue_talent">advanced rogue talent</Link> (<Link to="/talent/hunters_surprise">hunter's surprise</Link>, <Link to="/talent/knock_out_blow">knock-out blow</Link>, <Link to="/talent/master_of_disguise">master of disguise</Link>), <Link to="/slayertalent/woodland_stride">woodland stride</Link></p></>};
const _butterfly_blade = {title: "Butterfly Blade", jsx: <><h2 id="arc-slayer-butterfly_blade-butterfly-blade">Butterfly Blade</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 24</Link><br/>Followers of a tradition dating back to the ancient empire of Yixing, the yellow-robed agents known as butterfly blades now operate primarily in Goka, where many serve the city's politically savvy ruler. Butterfly blades work in the shadows, eliminating threats with their namesake weapons and intimidating troublesome nobles.</p>
<Ability id="arc-slayer-butterfly_blade-studied-stalker-ex" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-slayer-butterfly_blade-studied-stalker-ex">Studied Stalker (Ex)</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair hl title="Alters">Studied target</Pair>
<Pair title="Ability">A butterfly blade gains the <em>stalker</em> class feature at 1st level, rather than at 7th level.</Pair>
<Pair title="Special">The butterfly blade doesn't add his <em>studied target</em> bonus on Knowledge or Survival checks.</Pair>
</Ability>
<Ability id="arc-slayer-butterfly_blade-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-slayer-butterfly_blade-bonus-feats">Bonus Feats</Pair>
<Pair hl title="Alters">Slayer talents</Pair>
<Pair title="Choice">Whenever a butterfly blade would gain a slayer talent, he can instead select a feat from the following list: <Link to="/feat/cutting_humiliation">Cutting Humiliation</Link>, <Link to="/feat/enforcer">Enforcer</Link>, <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link>, <Link to="/feat/nerve_racking_negotiator">Nerve-Racking Negotiator</Link>, or <Link to="/feat/threatening_negotiator">Threatening Negotiator</Link>. The butterfly blade does not need to meet the feat's prerequisites.</Pair>
</Ability>
<Ability id="arc-slayer-butterfly_blade-butterflys-kiss-ex" extraClasses="hasSubs" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-slayer-butterfly_blade-butterflys-kiss-ex" flavor="Butterfly blades train to inflict painful cuts rather than lethal ones.">Butterfly's Kiss (Ex)</Pair>
<Pair hl title="Replaces">Sneak attack</Pair>
<Pair title="Ability">A butterfly blade can deal nonlethal damage with <Link to="/eq-weapon/butterfly_sword">butterfly swords</Link> without taking a penalty on attack rolls.</Pair>
<Pair title="At 3rd Level">A butterfly blade gets a +1 bonus on attack rolls with butterfly swords, and the damage die of any butterfly sword he wields increases <Link to="/misc/by_one_step">by one step</Link>.</Pair>
<Pair title="At 6th Level">The butterfly blade gains the <em>knockout</em> class feature, as per a <Link to="/class/brawler">brawler</Link> of his class level - 2.</Pair>
<Pair title="At 9th Level">The bonus becomes +2 and the damage die increases another step.</Pair>
<Pair title="At 15th Level">The bonus increases to +3 and the damage die increases another step.</Pair>
</Ability>
<Ability id="arc-slayer-butterfly_blade-knockout-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-slayer-butterfly_blade-knockout-ex" flavor="Text from the brawler class ability.">Knockout (Ex)</Pair>
<Pair title="Standard Action">Once a day, you can unleash a devastating attack that can instantly knock a target unconscious. You must announce this intent before making your attack roll. If you hit and the target takes damage from the blow, the target must succeed at a Fortitude saving throw (DC = 10 + <Link to="/misc/half">half</Link> your brawler level + the higher of your Strength or Dexterity modifier) or fall unconscious for 1d6 rounds.</Pair>
<Pair title="At 10th Level">You can use this twice a day.</Pair>
<Pair title="At 16th Level">You can use this three times per day.</Pair>
<Pair title="Special">Each round on its turn, the unconscious target may attempt a new saving throw to end the effect as a <strong className="hl">full-round action</strong> that does not provoke attacks of opportunity. Creatures immune to critical hits or nonlethal damage are immune to this ability.</Pair>
</Ability>
<Ability id="arc-slayer-butterfly_blade-innocent-butterfly-sp" icon={["magic-swirl"]}>
<Pair single id="arc-slayer-butterfly_blade-innocent-butterfly-sp">Innocent Butterfly (Sp)</Pair>
<Pair hl title="Replaces">Stalker, swift tracker, quarry</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A butterfly blade can use <Link to="/spell/aura_of_the_unremarkable">aura of the unremarkable</Link> once per day as a spell-like ability.</Pair>
<Pair title="At 11th Level">He can use it twice per day.</Pair>
<Pair title="At 14th Level">It becomes a constant spell-like ability that he can activate or deactivate as a <strong className="hl">free action</strong>.</Pair>
<Pair title="Special">The ability's caster level is equal to his slayer class level, and the DC is equal to 10 + the number of ranks the butterfly blade has in either Bluff or Intimidate, whichever is higher.</Pair>
</Ability>
<Ability id="arc-slayer-butterfly_blade-deadly-butterfly-ex" icon={["upgrade"]}>
<Pair single id="arc-slayer-butterfly_blade-deadly-butterfly-ex" flavor="A butterfly blade becomes a bloody whirlwind in combat.">Deadly Butterfly (Ex)</Pair>
<Pair hl title="Replaces">Improved quarry</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Passive Ability">When he strikes a foe with a butterfly sword, he automatically confirms critical threats. In addition, any butterfly sword he wields is treated as if it has the <Link to="/magic-enh/speed">speed</Link> weapon special ability. If the weapon already has the <em>speed</em> weapon special ability, this doesn't stack.</Pair>
</Ability>
</>};
const _cleaner = {title: "Cleaner", jsx: <><h2 id="arc-slayer-cleaner-cleaner">Cleaner</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 118</Link><br/>A cleaner is responsible for destroying or removing incriminating evidence from a crime scene, disposing of corpses and eliminating witnesses to make a crime look like an accident or a mere disappearance.</p>
<Ability id="arc-slayer-cleaner-deceitful" icon={["stairs-goal"]}>
<Pair single id="arc-slayer-cleaner-deceitful">Deceitful</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A cleaner becomes skilled at deceiving others, and gains <Link to="/feat/deceitful">Deceitful</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-slayer-cleaner-without-a-trace-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-slayer-cleaner-without-a-trace-ex">Without a Trace (Ex)</Pair>
<Pair hl title="Replaces">Slayer talent gained at 4th level</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A cleaner is able to study a location, conceal evidence, and hide in or extricate himself quickly from that location. Studying a location takes 1 minute for each 10-foot square. Once he has studied an area, the cleaner can attempt a Disguise check to alter evidence or a Stealth check to conceal evidence (by doing things such as cleaning up bloodstains, obscuring footprints, moving a dead body, and so on). Altering an area takes 1d3 &times; 10 minutes of work per 10-foot square. Anyone attempting to determine what actually happened in that area must succeed at an opposed Perception check against the result of the cleaner's Disguise or Stealth check (cleaner's choice) or accept the altered scene as truth. The cleaner gains a +4 bonus on this check, on Sleight of Hand checks to hide objects from that location on his person, and on Stealth checks to hide within or escape from that location. This lasts as long as the scene remains unaltered (except by the cleaner).</Pair>
</Ability>
<Ability id="arc-slayer-cleaner-mislead-sp" icon={["magic-swirl"]}>
<Pair single id="arc-slayer-cleaner-mislead-sp">Mislead (Sp)</Pair>
<Pair hl title="Replaces">Stalker</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A cleaner can cast <Link to="/spell/misdirection">misdirection</Link> on himself at will. This lasts until the cleaner uses the ability again or ends the effect as a <strong className="hl">standard action</strong>.</Pair>
</Ability>
<p><strong className="hl">The following slayer talents complement the cleaner archetype:</strong> <Link to="/slayertalent/foil_talent">foil talent</Link>, <Link to="/slayertalent/rogue_talent">rogue talent</Link> (<Link to="/talent/camouflage">camouflage</Link>, <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/rogue_crawl">rogue crawl</Link>, <Link to="/talent/surprise_attack">surprise attack</Link>, <Link to="/talent/terrain_mastery">terrain mastery</Link>)</p><p><strong className="hl">The following advanced slayer talents complement the cleaner archetype:</strong> <Link to="/slayertalent/advanced_rogue_talent">advanced rogue talent</Link> (<Link to="/talent/knock_out_blow">knock-out blow</Link>, <Link to="/talent/master_of_disguise">master of disguise</Link>), <Link to="/slayertalent/assassinate">assassinate</Link>, <Link to="/slayertalent/slayer_camouflage">slayer camouflage</Link></p></>};
const _covenbane = {title: "Covenbane", jsx: <><h2 id="arc-slayer-covenbane-covenbane">Covenbane</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven pg. 26</Link><br/>Covenbane slayers are scarred by arcane magic at a young age, and that resonance gives them supernatural insight into the psychic bonds between others. They are adept at fighting tight-knit groups, exploiting their connections to hunt and wound teams. The churches of <Link to="/faith/iomedae">Iomedae</Link> and <Link to="/faith/milani">Milani</Link> in particular dispatch special agents to rescue hexed children from Irrisen, Razmiran, and other lands plagued by abusive arcanists and then raise them in this deadly art.</p>
<Ability id="arc-slayer-covenbane-hag-sense-su" icon={["upgrade"]}>
<Pair single id="arc-slayer-covenbane-hag-sense-su">Hag Sense (Su)</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair title="Passive Ability">A covenbane's magical scars throb in the presence of magic. A covenbane adds half his level (minimum +1) on Perception, Sense Motive, and Survival checks to identify, recognize, or track a <Link to="/family/hag">hag</Link>, arcane spellcaster, or creature with spell-like abilities.</Pair>
<Pair title="Ability">He can also use his <em>hag sense</em> to recognize whether someone within 30 feet of him is using magic to hide her true form. To do this, he must succeed at a Perception check against a DC equal to 15 + the target's CR; success indicates the presence of a magical disguise, but it does not reveal the creature's true form.</Pair>
</Ability>
<Ability id="arc-slayer-covenbane-studied-coven-su" icon={["upgrade"]}>
<Pair single id="arc-slayer-covenbane-studied-coven-su">Studied Coven (Su)</Pair>
<Pair hl title="Replaces">Slayer talent gained at 2nd level</Pair>
<Pair hl title="Alters">Studied target</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A covenbane can designate an entire coven as his <em>studied target</em> by studying any single member. He applies his <em>studied target</em> bonus against all members of the studied creature's coven, and all members of the coven count as one target for the purposes of determining the maximum number of <em>studied targets</em> a slayer can maintain. This bonus remains even if one or more members of the coven die after the covenbane studies them.</Pair>
<Pair title="At 7th Level">The covenbane can designate other magically linked creatures, such as those bound by a <Link to="/template/hivemind_swarm">hivemind</Link> or a <Link to="/spell/telepathic_bond">telepathic bond</Link> spell, as a coven, but he can target only three members of such a link.</Pair>
<Pair title="Special">Studying a coven always requires a <strong className="hl">move action</strong>, even if the slayer could normally study a target with a swift or immediate action.</Pair>
</Ability>
<Ability id="arc-slayer-covenbane-disrupt-coven-su" icon={["armor-downgrade"]}>
<Pair single id="arc-slayer-covenbane-disrupt-coven-su">Disrupt Coven (Su)</Pair>
<Pair hl title="Replaces">Stalker</Pair>
<Pair title="At 7th Level">Anyone the slayer threatens no longer counts as an ally for the purposes of friendly spellcasting or employing teamwork feats and cannot access any special abilities gained from being part of a coven (including coven spellcasting).<sup><InnerLink showBacklink="backlink-arc-slayer-covenbane-fake-fn-1" id="arc-slayer-covenbane-fake-fn-1" data-hash-target to="arc-slayer-covenbane-fake-fn-1-target">1</InnerLink></sup></Pair>
</Ability>
<Ability id="arc-slayer-covenbane-unseen-sense-su" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-slayer-covenbane-unseen-sense-su">Unseen Sense (Su)</Pair>
<Pair hl title="Replaces">Swift tracker</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">The covenbane learns to use his <em>hag sense</em> to help target concealed or invisible opponents in combat. He can use his <em>hag sense</em> to detect invisible opponents as well as magically disguised creatures.</Pair>
<Pair title="Special">He also gains <Link to="/feat/blind_fight">Blind-Fight</Link> as a bonus feat but gains its benefits only against spellcasters and creatures with spell-like abilities.</Pair>
</Ability>
<section data-footnotes><h3 id="arc-slayer-covenbane-label">Footnotes</h3><ol>
<li id="arc-slayer-covenbane-fake-fn-1-target"><p>It's not explicitly stated, but since this replaces Stalker and is listed between a 2nd-level and 11th-level ability, it has been listed here as a 7th-level ability. <InnerLink aria-label="Back to reference 1" id="backlink-arc-slayer-covenbane-fake-fn-1" data-hash-target to="arc-slayer-covenbane-fake-fn-1">↩</InnerLink></p></li>
</ol></section></>};
const _cutthroat = {title: "Cutthroat", jsx: <><h2 id="arc-slayer-cutthroat-cutthroat">Cutthroat</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 119</Link><br/>Street-smart and extremely resourceful, cutthroats stalk city streets and alleyways, preying on those unfortunate enough to catch their eye. More opportunists than careful planners, they don't care who they rob or kill, and take advantage of whatever circumstances put them near a suitable target.</p>
<Ability icon={["skills"]} id="arc-slayer-cutthroat-undefined">
<Pair id="arc-slayer-cutthroat-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT), <Link to="/skill/linguistics">Linguistics</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering), Knowledge (geography), Survival</Pair></Ability>
<Ability id="arc-slayer-cutthroat-street-stalker-ex" icon={["upgrade"]}>
<Pair single id="arc-slayer-cutthroat-street-stalker-ex">Street Stalker (Ex)</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A cutthroat selects the Acrobatics, Climb, or Knowledge (local) skill. Once selected, this cannot be changed.</Pair>
<Pair title="Passive Ability">When in urban environments, the cutthroat adds 1/2 his slayer level (minimum 1) to checks attempted with this skill.</Pair>
</Ability>
<Ability id="arc-slayer-cutthroat-opportune-target-ex" icon={["upgrade"]}>
<Pair single id="arc-slayer-cutthroat-opportune-target-ex" flavor="A cutthroat who catches a foe by surprise can quickly study that foe to find its weaknesses.">Opportune Target (Ex)</Pair>
<Pair hl title="Replaces">Slayer talent gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">If a cutthroat can act in the surprise round, once during that surprise round he can study a foe as a <strong className="hl">free action</strong> (instead of a move action) and select it as his <em>studied target.</em></Pair>
</Ability>
<Ability id="arc-slayer-cutthroat-stab-and-grab-ex" icon={["stairs-goal"]}>
<Pair single id="arc-slayer-cutthroat-stab-and-grab-ex">Stab and Grab (Ex)</Pair>
<Pair hl title="Replaces">Slayer talent gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Swift Action">A cutthroat can attempt a <Link to="/rule/steal">steal</Link> combat maneuver against a dead or unconscious target or a <em>studied target</em> he has just confirmed a critical hit against. A dead or unconscious opponent takes a -10 penalty to its CMD against this maneuver.</Pair>
</Ability>
<p><strong className="hl">The following slayer talents complement the cutthroat archetype:</strong> <Link to="/slayertalent/poison_use">poison use</Link>, <Link to="/slayertalent/rogue_talent">rogue talent</Link> (<Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/surprise_attack">surprise attack</Link>, <Link to="/talent/terrain_mastery">terrain mastery</Link>), <Link to="/slayertalent/slowing_strike">slowing strike</Link></p><p><strong className="hl">The following advanced slayer talents complement the cutthroat archetype:</strong> <Link to="/slayertalent/advanced_rogue_talent">advanced rogue talent</Link> (<Link to="/talent/knock_out_blow">knock-out blow</Link>, <Link to="/talent/opportunist">opportunist</Link>), <Link to="/slayertalent/assassinate">assassinate</Link>, <Link to="/slayertalent/slayer_camouflage">slayer camouflage</Link></p></>};
const _deliverer = {title: "Deliverer", jsx: <><h2 id="arc-slayer-deliverer-deliverer">Deliverer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 119</Link><br/>Also known as a divine assassin, god's blade, or wrath-bringer, a deliverer is a weapon chosen by a god to punish those who have committed an affront to that deity. Evil deities are more likely to use assassins than deliverers, but some good deities use deliverers to deal with problems of a subtler nature than a cleric, inquisitor, paladin, or warpriest can typically handle.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-slayer-deliverer--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Follower of a deity</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-slayer-deliverer-weapon-and-armor-proficiency" icon={["stairs-goal"]}>
<Pair single id="arc-slayer-deliverer-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Weapon and armor proficiency</Pair>
<Pair title="Ability">A deliverer gains proficiency with his deity's favored weapon, in addition to the slayer's normal weapon proficiencies.</Pair>
</Ability>
<Ability id="arc-slayer-deliverer-determined-zeal-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-slayer-deliverer-determined-zeal-ex" flavor="A deliverer shrugs off attempts by his moral opposite to control or kill him.">Determined Zeal (Ex)</Pair>
<Pair hl title="Replaces">Slayer talent gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">On any round in which deliverer attacks an opponent whose alignment is at least two steps away from his own (such as a lawful good deliverer fighting a chaotic good or lawful evil foe, or a neutral foe with no other alignment components), he gains a +2 bonus on Will saving throws against that opponent's abilities, as well as the benefit of the <Link to="/feat/diehard">Diehard</Link> feat until the end of his next turn.</Pair>
</Ability>
<Ability id="arc-slayer-deliverer-true-believer-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-slayer-deliverer-true-believer-ex" flavor="Mortal wounds cannot stop a deliverer from performing his divine duty.">True Believer (Ex)</Pair>
<Pair hl title="Replaces">Slayer talent gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">On any round in which he attacks an opponent whose alignment is at least two steps away from his own (see Determined Zeal, above) while benefiting from the Diehard feat, he isn't staggered from having negative hit points, nor does he automatically lose 1 hit point per round.</Pair>
</Ability>
<Ability id="arc-slayer-deliverer-divine-anathema-ex" icon={["upgrade"]}>
<Pair single id="arc-slayer-deliverer-divine-anathema-ex">Divine Anathema (Ex)</Pair>
<Pair hl title="Replaces">Advanced slayer talent gained at 10th level</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Free Action">A deliverer can declare a <em>studied target</em> to be his divine anathema. The <em>studied target's</em> alignment must be at least two steps away from that of the deliverer. Against this target, the deliverer's attacks deal an additional 2d6 points of damage; this damage is directly from divine power and does not stack with the bonus damage from a holy or unholy weapon, or a weapon with a similar weapon special ability or effect.</Pair>
<Pair title="Special">A deliverer can have only one divine anathema at a time.</Pair>
</Ability>
<p><strong className="hl">The following slayer talents complement the deliverer archetype:</strong> <Link to="/slayertalent/foil_scrutiny">foil scrutiny</Link>, <Link to="/slayertalent/rogue_talent">rogue talent</Link> (<Link to="/talent/combat_trick">combat trick</Link>, <Link to="/talent/finesse_rogue">finesse rogue</Link>, <Link to="/talent/terrain_mastery">terrain mastery</Link>, <Link to="/talent/trap_spotter">trap spotter</Link>), <Link to="/slayertalent/trapfinding">trapfinding›</Link></p><p><strong className="hl">The following advanced slayer talents complement the deliverer archetype:</strong> <Link to="/slayertalent/advanced_rogue_talent">advanced rogue talent</Link> (<Link to="/talent/hunters_surprise">hunter's surprise</Link>, <Link to="/talent/master_of_disguise">master of disguise</Link>), <Link to="/slayertalent/assassinate">assassinate</Link>, <Link to="/slayertalent/nina_master_trick">nina master trick</Link> (<Link to="/ninjatrick/evasion">evasion</Link>)</p><Ability id="arc-slayer-deliverer-ex-deliverers" icon={["hazard-sign"]}>
<Pair single id="arc-slayer-deliverer-ex-deliverers">Ex-Deliverers</Pair>
<Pair title="Info">A deliverer who grossly violates the code of conduct required by his deity loses all class features granted by this archetype, except for the weapon proficiencies. (He does not gain the slayer class abilities that the archetype replaces.) He cannot thereafter gain levels as a deliverer of that deity until he atones for his deeds (see the <Link to="/spell/atonement">atonement</Link> spell description).</Pair>
</Ability>
</>};
const _dune_rider = {title: "Dune Rider", jsx: <><h2 id="arc-slayer-dune_rider-dune-rider">Dune Rider</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 86</Link><br/>Mounted harriers, saboteurs, and skirmishers, dune riders can disrupt even the most organized opposition.</p>
<Ability id="arc-slayer-dune_rider-sand-foot-ex" icon={["upgrade"]}>
<Pair single id="arc-slayer-dune_rider-sand-foot-ex">Sand Foot (Ex)</Pair>
<Pair hl title="Replaces">Track, fast tracker</Pair>
<Pair title="Passive Ability">The dune rider adds half his level as a bonus on Ride checks in warm deserts, hills, and mountains.</Pair>
<Pair title="At 11th Level">The dune rider and his mount no longer treat sand or rocky ground as <Link to="/rule/difficult_terrain">difficult terrain</Link>, and they gain a +10-foot enhancement bonus to their base speed in warm deserts, hills, and mountains.</Pair>
</Ability>
<Ability id="arc-slayer-dune_rider-desert-skirmisher-ex" icon={["upgrade"]}>
<Pair single id="arc-slayer-dune_rider-desert-skirmisher-ex">Desert Skirmisher (Ex)</Pair>
<Pair hl title="Replaces">Studied target</Pair>
<Pair title="Passive Ability">The dune rider excels in combat in warm deserts, hills, and mountains. While in such terrain, he gains a +2 bonus on initiative, Perception, and Stealth checks, and a +1 bonus on attack and damage rolls.</Pair>
<Pair title="At 5th Level">The bonus on initiative, Perception, and Stealth checks becomes +4, and the bonus on attack and damage rolls increases to +2.</Pair>
<Pair title="At 10th Level">The bonus on initiative, Perception, and Stealth checks becomes +6, and the bonus on attack and damage rolls increases to +3.</Pair>
<Pair title="At 15th Level">The bonus on initiative, Perception, and Stealth checks becomes +8, and the bonus on attack and damage rolls increases to +4.</Pair>
<Pair title="At 20th Level">The bonus on initiative, Perception, and Stealth checks becomes +10, and the bonus on attack and damage rolls increases to +5.</Pair>
</Ability>
<Ability id="arc-slayer-dune_rider-galloping-fire-ex" icon={["upgrade"]}>
<Pair single id="arc-slayer-dune_rider-galloping-fire-ex">Galloping Fire (Ex)</Pair>
<Pair hl title="Replaces">Stalker, slayer talent gained at 4th level</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">The penalties for the dune rider's ranged attacks while mounted decrease by 2.</Pair>
<Pair title="At 7th Level">These penalties now decrease by 4.</Pair>
</Ability>
<Ability id="arc-slayer-dune_rider-dust-vision-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-slayer-dune_rider-dust-vision-ex" flavor="The dune rider is at home in the desert.">Dust Vision (Ex)</Pair>
<Pair hl title="Replaces">Slayer talent gained at 8th level</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">He exists comfortably in hot conditions up to 140&deg; Fahrenheit without having to attempt Fortitude saves. His equipment is likewise protected. He takes no penalties on Perception checks from blowing sand, dust, or heat shimmers, nor do these effects grant <Link to="/rule/concealment">concealment</Link> to the dune rider's enemies within 30 feet. Effects that would grant total concealment work normally.</Pair>
</Ability>
<Ability id="arc-slayer-dune_rider-dunes-of-death-su" icon={["armor-downgrade"]}>
<Pair single id="arc-slayer-dune_rider-dunes-of-death-su" flavor="A dune rider can use the desert's heat to finish off his foes.">Dunes of Death (Su)</Pair>
<Pair hl title="Replaces">Master slayer</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Standard Action">He can make a single attack at his full base attack bonus while in warm desert, hills, or mountains, choosing one of the following effects: kill, knock unconscious for 1d4 hours, or paralyze for 2d6 rounds. If the attack hits, the target takes damage normally and must succeed at a Fortitude save or suffer the additional effect. The DC of this save is 20 + the dune rider's Intelligence modifier.</Pair>
<Pair title="Special">Whether or not the target succeeds, it can't be targeted by this ability again for 24 hours.</Pair>
</Ability>
</>};
const _family_hunter = {title: "Family Hunter", jsx: <><h2 id="arc-slayer-family_hunter-family-hunter">Family Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 66</Link><br/>Most slayers focus their efforts on single targets, but family hunters try to root out every branch of a tainted tree of life.</p>
<Ability id="arc-slayer-family_hunter-find-family-sp" icon={["stairs-goal"]}>
<Pair single id="arc-slayer-family_hunter-find-family-sp">Find Family (Sp)</Pair>
<Pair hl title="Replaces">Slayer talent gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Choice">A family hunter chooses a particular family line of mortal creatures to cleanse (she must choose an actual family line like "The Montrose family," rather than something generic that would cover all creatures of a given kind like "All humans descended from the first human created by the gods").</Pair>
<Pair title="Ability">She can target any creature from that family line with <Link to="/spell/discern_next_of_kin">discern next of kin</Link> (with a caster level equal to her slayer level) at will as a spell-like ability. The save DC is Charisma-based and is modified by the slayer's <em>studied target</em> bonus if the creature is also her <em>studied target.</em> A creature that successfully saves against this effect is immune to this ability for 24 hours.</Pair>
<Pair title="Special">If the family hunter's chosen family line is completely eradicated, she can choose a new one after 1 month of studying.</Pair>
</Ability>
<Ability id="arc-slayer-family_hunter-kinslayer-su" icon={["upgrade"]}>
<Pair single id="arc-slayer-family_hunter-kinslayer-su">Kinslayer (Su)</Pair>
<Pair hl title="Alters">Sneak attack</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A family hunter's sneak attack deals an additional 1d6 points of damage to any creature with a blood relation to the family line she seeks to cleanse.</Pair>
</Ability>
<Ability id="arc-slayer-family_hunter-studied-target-ex" icon={["broken-shield"]}>
<Pair single id="arc-slayer-family_hunter-studied-target-ex">Studied Target (Ex)</Pair>
<Pair hl title="Alters">Studied target</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Info">A slayer can maintain more than one <em>studied target</em> at a time only if all targets are closely related to one another (even if they aren't part of the family line she seeks to cleanse). This includes blood relatives; undead spawn; constructs or undead and their creator; summoned creatures and their summoner; creatures that are charmed, dominated, or otherwise under direct magical control and their controller; and cohorts, followers, animal companions, familiars, and similar associates of one master.</Pair>
</Ability>
<Ability id="arc-slayer-family_hunter-disrupt-teamwork-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-slayer-family_hunter-disrupt-teamwork-ex">Disrupt Teamwork (Ex)</Pair>
<Pair hl title="Replaces">Slayer talent gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A family hunter's <em>studied target</em> never counts as an ally to its allies for the purpose of <Link to="/rule/flanking">flanking</Link> the family hunter or using teamwork feats or the <Link to="/rule/aid_another_2">aid another</Link> action against the family hunter.</Pair>
</Ability>
</>};
const _grave_warden = {title: "Grave Warden", jsx: <><h2 id="arc-slayer-grave_warden-grave-warden">Grave Warden</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 120</Link><br/>While paladins and inquisitors use their connection with the divine to fight undead hordes and other horrors of the night, a grave warden relies on knowledge, skill with weapons, and tenacity to put an end to these night-born terrors.</p>
<p><strong>Holy Water Sprinkler (Ex):</strong> At 2nd level, a grave warden can draw a flask of <Link to="/eq-weapon/holy_water">holy water</Link> as if it were a weapon (and can thus use the <Link to="/feat/quick_draw">Quick Draw</Link> feat to draw flasks of holy water). As a swift action, he can open a flask of holy water and pour it onto a held or adjacent melee weapon. If the weapon successfully hits an undead creature before the end of the grave warden's next turn, the undead takes damage as if it took a direct hit from the holy water, in addition to the damage from the weapon, if any.</p>
<p>This ability replaces the <strong className="hl">slayer talent</strong> gained at 2nd level.</p>
<p><strong>Death Ward (Sp):</strong> At 7th level, a grave warden learns to perform a short ritual that grants the benefits of <Link to="/spell/death_ward">death ward</Link>, using his slayer level as his caster level. Performing this ritual takes 1 minute and uses 4 flasks of holy water. The grave warden can protect only himself with this ability.</p>
<p>This ability replaces <strong className="hl">stalker</strong>.</p>
<p><strong>Dustbringer (Ex):</strong> At 10th level, a grave warden can slay a studied undead opponent. This functions as the <Link to="/slayertalent/assassinate">assassinate</Link> slayer talent, except it requires a successful Will saving throw instead of a successful Fortitude save, affects only undead, and destroys the target instead of killing it. If the target succeeds at its saving throw, it becomes immune to that grave warden's dustbringer ability for 24 hours.</p>
<p>This ability replaces the <strong className="hl">advanced slayer talent</strong> gained at 10th level.</p>
<p><strong>Slayer Talents:</strong> The following slayer talents (and rogue talents) complement the grave warden archetype: <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/finesse_rogue">finesse rogue</Link>, <Link to="/talent/surprise_attack">surprise attack</Link>, <Link to="/talent/swift_poison">swift poison</Link>, <Link to="/talent/terrain_mastery">terrain mastery</Link>, <Link to="/talent/trap_spotter">trap spotter</Link>, and <Link to="/talent/unwitting_ally">unwitting ally</Link>.</p>
<p><strong>Advanced Slayer Talents:</strong> The following advanced slayer talents (also available to rogues) complement the grave warden archetype: <Link to="/talent/hunters_surprise">hunter's surprise</Link>, and <Link to="/slayertalent/slayer_camouflage">slayer camouflage</Link>.</p>
</>};
const _guerrilla = {title: "Guerrilla", jsx: <><h2 id="arc-slayer-guerrilla-guerrilla">Guerrilla</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 87</Link><br/>Slayers characterized by cunning and patience, guerrillas specialize in ambush and harassment of enemies.</p>
<p><strong>Strike First, Strike Last (Ex):</strong> A guerrilla adds half his level on Stealth checks when remaining motionless and reduces the penalty on Stealth checks when sniping by an equal amount. He also gains this bonus on his initiative checks in surprise rounds whenever he is aware of the surprise round and at least one enemy is unaware.</p>
<p>This replaces <strong className="hl">track</strong> and <strong className="hl">swift tracker</strong>.</p>
<p><strong>Quick Start (Ex):</strong> At 6th level, the guerrilla can take a normal charge action during the surprise round, rather than a charge with half the usual distance.</p>
<p>This replaces the 6th-level <strong className="hl">slayer talent</strong>.</p>
<p><strong>Astonishing Strike (Ex):</strong> At 14th level, when the guerrilla deals sneak attack damage to a target of his studied target ability during the surprise round, that target is denied its Dexterity bonus to AC against attacks from the same guerrilla until the end of the guerrilla's next turn. When the guerrilla reaches 19th level, this ability works any time he deals sneak attack damage to a target of his studied target ability during the first round of combat, whether or not it's a surprise round.</p>
<p>This replaces <strong className="hl">quarry</strong> and <strong className="hl">improved quarry</strong>.</p>
</>};
const _pureblade = {title: "Pureblade", jsx: <><h2 id="arc-slayer-pureblade-pureblade">Pureblade</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 20</Link><br/>First known in Numeria, these aberration hunters have spread to other regions of Golarion, even as far as the lands bordering the Mana Wastes. In Numeria, Pureblades are skilled at slaying naturally arising aberrations and any creatures that have been mutated by exposure to the bizarre alien technology that pervades the land. Pureblades from Alkenstar and Nex lead forays into the magic-starved Mana Wastes to eliminate aberrations before the creatures can threaten their lands.</p>
<p><strong>Aberration Hunter (Ex):</strong> If a Pureblade deals damage to an aberration, as an immediate action he can apply his studied target bonus against that target even if he didn't sneak attack it. In addition, a Pureblade can attempt Knowledge (dungeoneering) skill checks untrained when trying to identify aberrations.</p>
<p>This ability replaces <strong className="hl">track</strong>.</p>
<p><strong>Alien Prescience (Sp):</strong> At 2nd level, as a standard action a Pureblade can detect aberrations. This works like <Link to="/spell/detect_undead">detect undead</Link>, except it detects aberrations instead of undead.</p>
<p>This ability replaces the <strong className="hl">slayer talent</strong> received at 2nd level.</p>
<p><strong>Discern Weakness (Ex):</strong> At 7th level, a Pureblade becomes an expert at locating an aberration's weak points. The Pureblade rolls twice to confirm critical hits against aberrations and keeps the higher roll.</p>
<p>This ability replaces <strong className="hl">stalker</strong>.</p>
<p><strong>Steely Mind (Ex):</strong> At 8th level, a Pureblade gains a +2 resistance bonus on saving throws against mind-affecting spells and effects. This bonus increases to +4 at 12th level and +6 at 16th level. In addition, once per day as a standard action, a Pureblade can shed a magical effect placed on him by an aberration as <Link to="/spell/break_enchantment">break enchantment</Link>, using his slayer level as his caster level. A Pureblade can use this ability twice per day at 12th level and three times per day at 16th level.</p>
<p>This ability replaces the <strong className="hl">slayer talent</strong> received at 8th level.</p>
<p><strong>Aberration Slayer (Ex):</strong> At 20th level, a Pureblade can use his master slayer ability on any aberration, even if it's not his studied target.</p>
<p>This ability alters <strong className="hl">master slayer</strong>.</p>
</>};
const _sczarni_executioner = {title: "Sczarni Executioner", jsx: <><h2 id="arc-slayer-sczarni_executioner-sczarni-executioner">Sczarni Executioner</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 21</Link><br/>These professional killers are trained and used almost exclusively by the various Sczarni crime families. Streetwise and ruthless, they operate independently, often making their talents available to the highest bidder. Though a few unscrupulous Sczarni executioners exploit this arrangement and force families to pay higher rates for their services, most of these assassins follow a strict personal code and maintain absolute transparency with their employers.</p>
<p>Talents marked with an asterisk (*) are considered Primary Sneak Attack Talents. Only one of these talents can be applied to an individual attack, and the decision of which to use must be made before the attack roll is made.</p>
<Ability icon={["skills"]} id="arc-slayer-sczarni_executioner-undefined">
<Pair id="arc-slayer-sczarni_executioner-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/appraise">Appraise</Link> (INT), <Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/escape_artist">Escape Artist</Link> (DEX)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering), Knowledge (geography), Ride, Survival</Pair></Ability>
<p><strong>Bloodstained Hands (Ex):</strong> A Sczarni executioner must be evil. If he ever becomes nonevil, he loses this archetype and becomes a regular slayer.</p>
<p><strong>Focused Killer (Ex):</strong> At 1st level, a Sczarni executioner's studied target bonuses and the DCs of his slayer abilities increase by 1 against humanoid opponents, but decrease by 1 against non-humanoid targets.</p>
<p>This ability alters <strong className="hl">studied target</strong>.</p>
<p><strong>Painful Strike* (Ex):</strong> At 4th level, a Sczarni executioner automatically gains this talent. Sczarni executioners are trained to cause excruciating pain when striking targets, often leaving them reeling in agony or completely incapacitated as they slowly bleed out. A creature that takes sneak attack damage from a Sczarni executioner must make a successful a Fortitude save (DC = 10 + 1/2 the Sczarni executioner's class level + his Intelligence modifier) or become sickened for 1d4 rounds.</p>
<p>This ability alters the <strong className="hl">slayer talent</strong> received at 4th level and replaces <strong className="hl">swift tracker</strong>.</p>
<p><strong>Assassinate (Ex):</strong> At 10th level, a Sczarni executioner must select the <Link to="/slayertalent/assassinate">assassinate</Link> advanced slayer talent.</p>
<p><strong>Swift Death (Ex):</strong> At 14th level, once per day a Sczarni executioner can attempt to assassinate a foe without studying his foe beforehand. He must still succeed at a sneak attack against the target. At 19th level, he can make two such attacks per day.</p>
<p>This ability replaces <strong className="hl">quarry</strong> and <strong className="hl">improved quarry</strong>.</p>
</>};
const _sniper = {title: "Sniper", jsx: <><h2 id="arc-slayer-sniper-sniper">Sniper</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 120</Link><br/>Whether it's with a bullet from a sling, a quarrel from a crossbow, or even an expertly thrown dagger, the sniper ensures that a single shot disables his targets.</p>
<p><strong>Accuracy (Ex):</strong> At 1st level, a sniper halves all range increment penalties when making ranged attacks with a bow, crossbow, or firearm.</p>
<p>This ability replaces <strong className="hl">track</strong>.</p>
<p><strong>Deadly Sniper (Ex):</strong> At 2nd level, when the sniper makes an attack against a target who is within his weapon's first range increment and completely unaware of his presence, that attack ignores the 30 foot range limit on ranged sneak attacks, and if it is a sneak attack, he adds his sniper level as a bonus on his sneak attack damage roll. After this first attack, the target is aware of the sniper's presence.</p>
<p><strong>Slayer Talents:</strong> The following slayer talents (and rogue talents) complement the sniper archetype: <Link to="/talent/camouflage">camouflage</Link>, <Link to="/talent/snap_shot">snap shot</Link>, <Link to="/talent/snipers_eye">sniper's eye</Link>, and <Link to="/talent/weapon_training">weapon training</Link>.</p>
<p><strong>Advanced Slayer Talents:</strong> The following advanced slayer talents (which are also available to rogues) complement the sniper archetype: <Link to="/talent/deadly_sneak">deadly sneak</Link>, <Link to="/talent/master_of_disguise">master of disguise</Link>, and <Link to="/talent/stealthy_sniper">stealthy sniper</Link>.</p>
</>};
const _spawn_slayer = {title: "Spawn Slayer", jsx: <><h2 id="arc-slayer-spawn_slayer-spawn-slayer">Spawn Slayer</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 24</Link><br/>Generations of Ninshaburian warriors fought the Spawn of Rovagug, holding the line against impossible odds. Some of their ancient techniques persist to this day.</p>
<p><strong>Studied Spawn (Ex):</strong> A spawn slayer specializes in fighting against larger, single targets. At 5th, 10th, 15th, and 20th levels, the bonuses on weapon attack rolls, damage rolls, and skill checks against a studied target increase by 1, as do the DCs of slayer abilities against a studied target. He can also ignore size restrictions against a studied target when attempting combat maneuvers against larger foes. At 5th level, if the target is Large or larger, these bonuses increase by an additional 1. At 10th level, if the target is Huge or larger, the bonuses increase by an additional 2. At 15th level, if the target is Gargantuan or larger, the bonuses increase by an additional 3. At 20th level, if the target is Colossal in size, the bonuses increase by an additional 4. A spawn slayer cannot maintain these bonuses against more than one target at a time. He does not gain the ability to study an opponent as a swift action at 7th level.</p>
<p>This alters <strong className="hl">studied target</strong>.</p>
<p><strong>Gain Leverage (Ex):</strong> At 7th level, a spawn slayer learns techniques to counteract a foe's size advantage. When performing a combat maneuver against a studied target of Large or larger size, the spawn slayer gains a bonus on the check equal to the creature's size modifier to CMB (Large +1, Huge +2, Gargantuan +4, and Colossal +8). The spawn slayer adds this same bonus to his CMD when defending against combat maneuvers from a Large or larger studied target.</p>
<p>This replaces <strong className="hl">stalker</strong>.</p>
<p><strong>Force Vulnerability (Ex):</strong> At 20th level, a spawn slayer can create an opening in even an invulnerable foe's defenses. As a standard action, he can make a single attack against a studied target at his full attack bonus. If the attack hits, the damage bypasses any damage reduction and the target must succeed at a Will saving throw (DC 10 + half the slayer's level + the slayer's Intelligence modifier) or lose one of its defensive abilities for 2d6 rounds. The slayer can choose which defensive ability is lost from the following options: a single immunity, all resistances, regeneration, or spell resistance. Whether or not the target fails this save, it cannot be targeted by force vulnerability again (by you or another slayer) for 24 hours.</p>
<p>This replaces <strong className="hl">master slayer</strong>.</p>
</>};
const _spire_diver = {title: "Spire Diver", jsx: <><h2 id="arc-slayer-spire_diver-spire-diver">Spire Diver</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_124_city_in_the_deep">Pathfinder #124: City in the Deep pg. 80</Link><br/>Peerless divers, assassins, and scouts, spire divers operate in and out of water using the same weapons and equipment. Although the elves of the Mordant Spire originally developed the techniques that spire divers use, people living in coastal areas and archipelagos near the Mwangi Expanse and Tian Xia have similar, independently developed warrior and diving traditions.</p>
<p><strong>Studied Target (Ex):</strong> A spire diver does not gain the ability to add her studied target bonus on Bluff and Survival checks against an opponent she has studied. At 7th level, she cannot add her studied target bonus on Disguise checks. Instead, when using any bow or crossbow against her studied target underwater, the spire diver ignores the normal penalty for shooting underwater and instead treats the weapon as though its range increment were 10 feet. At 5th, 10th, 15th, and 20th levels, the range increment increases by 10 feet, to a maximum of 50 feet.</p>
<p>When using a bow or crossbow that already has an underwater range increment, such as an <Link to="/eq-weapon/underwater_light_crossbow">underwater crossbow</Link>, the spire diver adds the range increment gained from studied target as a bonus to the weapon's usual underwater range increment, though the combined range increment cannot exceed the weapon's normal range increment.</p>
<p>This alters <strong className="hl">studied target</strong> and <strong className="hl">stalker</strong>.</p>
<p><strong>Hold Breath (Ex):</strong> A spire diver increases the number of rounds she can <Link to="/misc/hold_her_breath">hold her breath</Link> before she is required to start attempting Constitution checks to avoid drowning by 2 per slayer level she has.</p>
<p>This replaces <strong className="hl">track</strong>.</p>
<p><strong>Slayer Talents:</strong> A spire diver can select the <Link to="/talent/strong_stroke">strong stroke</Link> rogue talent as a slayer talent.</p>
<p><strong>Swift Swimmer (Ex):</strong> At 11th level, a spire diver gains a swim speed equal to her base speed.</p>
<p>This replaces <strong className="hl">swift tracker</strong>.</p>
<p><strong>Diver's Advance (Ex):</strong> At 13th level, a spire diver can swim up to twice her swim speed once per day as a move action. She can use Stealth as part of this movement but takes a -10 penalty on her check for doing so. At 17th level, she can use this ability twice per day.</p>
<p>This replaces <strong className="hl">slayer's advance</strong>.</p>
<p><strong>Diver's Quarry (Ex):</strong> A spire diver gains quarry and improved quarry as a normal slayer, but she does not gain the ability to take 10 or take 20 on Survival checks while moving at normal speed without penalty. Instead, at 14th level, a spire diver can take 10 on Knowledge checks to identify a monster she has selected as her quarry. At 19th level, she can take 20 on these checks without spending extra time to do so. The spire diver must be trained in the appropriate Knowledge skill to use this ability.</p>
<p>This alters <strong className="hl">quarry</strong> and <strong className="hl">improved quarry</strong>.</p>
</>};
const _spiritslayer = {title: "Spiritslayer", jsx: <><h2 id="arc-slayer-spiritslayer-spiritslayer">Spiritslayer</h2>
<p><strong>Sources</strong> <Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook pg. 15</Link><br/>Originally trained and employed by the enforcers of the Pure Legion seeking to defend Rahadoum from divine spellcasters, Rahadoumi spiritslayers have proven so invaluable in culling ghosts, shadow demons, and other incorporeal creatures that their techniques have spread across the Inner Sea region and beyond. Ironically, most now are trained and employed by the church of Pharasma to cull wicked spirits.</p>
<p><strong>Spirit Sense (Ex):</strong> At 2nd level, a spiritslayer manifests an uncanny sixth sense regarding the presence of invisible creatures. He gains <Link to="/feat/blind_fight">Blind-Fight</Link> as a bonus feat and ignores the usual +20 bonus to the DC of any Perception check to pinpoint the location of an invisible creature. If the spiritslayer manages to pinpoint an invisible creature's location using a Perception check, he can study that creature with his studied target ability as a swift action.</p>
<p>In addition, whenever the spiritslayer studies a possessed creature, he can automatically switch his studied target from the possessed creature to the possessing entity should that entity be expelled from his studied target. A spiritslayer adds his studied target bonus on attack rolls to all saving throws he attempts against possession effects used by his studied targets.</p>
<p>This ability replaces the <strong className="hl">slayer talent</strong> gained at 2nd level.</p>
<p><strong>Spiritslayer Talents:</strong> A spiritslayer can select the following slayer talents, in addition to general slayer talents.</p>
<blockquote>
<p><strong>Disrupt Possession (Ex):</strong> Whenever a spiritslayer with this talent deals sneak attack damage to a creature that is being possessed, he also deals his sneak attack damage to the possessing entity. Once per round, a possessed creature that is damaged by disrupt possession can attempt a new Will saving throw to end the possession, gaining a +1 bonus on its save for each sneak attack damage die the spiritslayer rolled. This talent is considered a Primary Sneak Attack Talent, alters the spiritslayer's sneak attack, and doesn't stack with other talents that alter sneak attack. A spiritslayer must be at least 8th level before selecting this talent.</p>
<p><strong>Improved Spirit Sense:</strong> A spiritslayer who selects this talent gains <Link to="/feat/improved_blind_fight">Improved Blind-Fight</Link> as a bonus feat, ignoring its prerequisites. In addition, he adds 1/2 his slayer level on Perception checks to pinpoint the location of an invisible creature. He can use Perception to pinpoint the location of an ethereal creature, but he doesn't gain this bonus on Perception checks when doing so. A spiritslayer must be at least 6th level before selecting this talent.</p>
<blockquote>
<p><strong>Greater Spirit Sense:</strong> A spiritslayer who selects this talent gains <Link to="/feat/greater_blind_fight">Greater Blind-Fight</Link> as a bonus feat, ignoring its prerequisites. In addition, he adds 1/2 his slayer level to his Perception checks to pinpoint the location of ethereal creatures, and once per round he can attempt a Perception check to pinpoint the locations of all invisible creatures within 30 feet of him without needing to take an action. A spiritslayer must be at least 10th level and have the improved spirit sense spiritslayer talent before selecting this talent.</p>
</blockquote>
</blockquote>
<p><strong>Ghost Slayer (Ex):</strong> At 7th level, whenever a spiritslayer makes an outsider or undead creature with the incorporeal subtype his studied target, his attacks count as magic for the purpose of striking that creature (though this doesn't give his attacks an enhancement bonus) and he can deal precision-based damage to such creatures (though his <Link to="/misc/precision_damage">precision damage</Link> is reduced by 50% unless he has a means to bypass the creature's reduction in damage from corporeal sources, such as a <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon). At 14th level, the spiritslayer's attacks against outsiders or undead creatures with the incorporeal subtype ignore the 50% reduction in damage from magical corporeal sources that such creatures have and can deal precision-based damage to incorporeal creatures.</p>
<p>This ability replaces <strong className="hl">stalker</strong>.</p>
</>};
const _stygian_slayer = {title: "Stygian Slayer", jsx: <><h2 id="arc-slayer-stygian_slayer-stygian-slayer">Stygian Slayer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 120</Link><br/>A stygian slayer crawls out of the darkest shadows to strike fear into the hearts of civilized folk. He's a merciless killer who can control a sliver of magic, allowing him to arrive unseen, commit murder, and depart without detection.</p>
<p><strong>Weapon and Armor Proficiency:</strong> A stygian slayer is proficient with light armor, but not with medium armor, heavy armor, or any kind of shield (including tower shields).</p>
<p>This replaces the slayer's <strong className="hl">armor proficiency</strong>.</p>
<p><strong>Invisibility (Sp):</strong> At 4th level, a stygian slayer can cast <Link to="/spell/invisibility">invisibility</Link> once per day, using his slayer level as his caster level. The slayer uses his Intelligence modifier for <Link to="/rule/concentration">concentration</Link> checks when using this ability. The slayer can use this an additional time per day at 8th level and every 4 levels thereafter.</p>
<p>This ability replaces the <strong className="hl">slayer talent</strong> gained at 4th level.</p>
<p><strong>Spell Use:</strong> At 7th level, a stygian slayer is able to use spell completion and spell trigger items as if he were an arcane caster with these spells on his spell list: darkness, forced quiet, modify memory, nondetection, obscuring mist, phantom steed, shadow walk, and wizard spells of the illusion school of spell level 0 through 4th. The slayer's uses his class level as his caster level for this ability.</p>
<p>This ability replaces <strong className="hl">stalker</strong>.</p>
<p><strong>Shadowy Mist Form (Sp):</strong> At 10th level, a stygian slayer can transform into an inky black cloud of mist. This functions as <Link to="/spell/gaseous_form">gaseous form</Link>, except it also obscures vision as <Link to="/spell/fog_cloud">fog cloud</Link>. The slayer can use this ability for a number of minutes per day equal to his level. These minutes need not be consecutive, but must be used in 1-minute increments.</p>
<p>This ability replaces the <strong className="hl">advanced slayer talent</strong> gained at 10th level.</p>
<p><strong>Slayer Talents:</strong> The following slayer talents (and rogue talents) complement the stygian slayer archetype: <Link to="/talent/bleeding_attack">bleeding attack</Link>, <Link to="/talent/lasting_poison">lasting poison</Link>, <Link to="/slayertalent/poison_use">poison use</Link>, <Link to="/talent/powerful_sneak">powerful sneak</Link>, <Link to="/talent/rogue_crawl">rogue crawl</Link>, <Link to="/talent/slow_reactions">slow reactions</Link>, <Link to="/talent/surprise_attack">surprise attack</Link>, and <Link to="/talent/swift_poison">swift poison</Link>.</p>
<p><strong>Advanced Slayer Talents:</strong> The following advanced slayer talents (and advanced rogue talents) complement the stygian slayer archetype: <Link to="/slayertalent/assassinate">assassinate</Link>, <Link to="/talent/hunters_surprise">hunter's surprise</Link>, and <Link to="/slayertalent/slayer_camouflage">slayer camouflage</Link>.</p>
</>};
const _toxic_sniper = {title: "Toxic Sniper", jsx: <><h2 id="arc-slayer-toxic_sniper-toxic-sniper">Toxic Sniper</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 27</Link><br/>Followers of the daemonic harbinger Cixyron hide throughout the Mana Wastes, scavenging for guns. With significant firepower in hand, the Furious Thunder's snipers bring poisonous death to the wastes.</p>
<p><strong>Weapon and Armor Proficiency:</strong> A toxic sniper is proficient with all simple weapons and firearms. He is proficient with light armor.</p>
<p>This alters the toxic sniper's <strong className="hl">weapon and armor proficiency</strong>.</p>
<p><strong>Scrapper's Gun:</strong> A toxic sniper gains the <Link to="/feat/gunsmithing">Gunsmithing</Link> feat, a battered gun identical to that gained by a 1st-level <Link to="/class/gunslinger">gunslinger</Link>, and the ability to restore his battered gun as if he were a gunslinger.</p>
<p>This replaces <strong className="hl">track</strong>.</p>
<p><strong>Sharpshooter's Study (Ex):</strong> A toxic sniper's focus makes him extremely deadly with ranged weapons. He gains a bonus on attack and damage rolls against his studied target only when attacking with a ranged weapon.</p>
<p>This alters <strong className="hl">studied target</strong>.</p>
<p><strong>Toxic Grit (Ex):</strong> At 2nd level, the toxic sniper gains the <Link to="/feat/amateur_gunslinger">Amateur Gunslinger</Link> feat as a bonus feat.</p>
<p>This replaces the <strong className="hl">slayer talent</strong> gained at 2nd level.</p>
<p><strong>Toxic Shots (Ex):</strong> At 4th level, a toxic sniper can coat his ammunition in poison without requiring a pitted bullet. He is trained in applying poison in this way and cannot accidentally poison himself when applying poison to his ammunition. The toxic sniper can create a number of toxic shots per day equal to half his slayer level plus his Wisdom modifier. The penetrating nature of a toxic shot increases the DC of any poisons applied in this way by 2. A toxic sniper cannot create a toxic shot that is part of an alchemical cartridge.</p>
<p>This replaces the <strong className="hl">slayer talent</strong> gained at 4th level.</p>
<p><strong>Marksman (Ex):</strong> At 6th level, a toxic sniper reduces the penalty on Stealth checks while sniping by 5. He reduces the penalty by 5 again at 12th level and at 18th level. At 8th level, he increases the distance from which he can deliver a ranged sneak attack against his studied target by 10 feet. This increases by 10 feet again at 14th level and at 20th level.</p>
<p>This replaces <strong className="hl">slayer talents</strong> gained at 6th, 8th, 12th, 14th, 16th, 18th, and 20th levels.</p>
<p><strong>Precise Toxin (Ex):</strong> At 10th level, a toxic sniper can deliver a toxic shot to especially vulnerable areas. When he hits an opponent with a toxic shot and deals sneak attack damage, he can forgo all his bonus damage to increase the DC of the his toxic shot's poison. The DC increases by 1 for every 2d6 points of sneak attack damage he forgoes in this way.</p>
<p>This replaces the <strong className="hl">slayer talent</strong> gained at 10th level.</p>
</>};
const _turncoat = {title: "Turncoat", jsx: <><h2 id="arc-slayer-turncoat-turncoat">Turncoat</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands pg. 17</Link><br/>In Sekamina, betraying others before they have the chance to betray you can be a necessary survival technique. While not all adventurers have the heart for such underhanded dealings, others have developed a knack for it. The turncoat's natural talents for deception and treachery are fitting when negotiating with the untrustworthy inhabitants of Sekamina and other notoriously unscrupulous areas, and his ability to adapt allows him to preempt opponents' schemes. Not all party members may be comfortable with having someone so adept at backstabbing among their ranks, but most tend to be grateful that he uses his skills to their benefit.</p>
<p><strong>Dubious Recognition (Ex):</strong> A turncoat adds half his level (minimum 1) to Sense Motive checks to recognize when a creature is lying or attempting to take advantage of the turncoat and his allies.</p>
<p>This replaces <strong className="hl">track</strong>.</p>
<p><strong>Double Speak (Ex):</strong> At 7th level, a turncoat can attempt a Bluff check in place of a Diplomacy check against a studied target. The target can attempt an opposed Sense Motive check.</p>
<p>This ability replaces <strong className="hl">stalker</strong>.</p>
<p><strong>Sudden Betrayal (Ex):</strong> At 14th level, as a standard action a turncoat can choose a single creature within 30 feet. He gains a +4 circumstance bonus on Diplomacy checks against this target. If the target has an attitude of indifferent or better toward him, the first attack roll the turncoat makes against that target is automatically treated as threatening a critical hit. If the target's attitude is friendly or better, a successful attack is treated as a confirmed critical hit. This ability can be used only once per day.</p>
<p>At 19th level, the bonus increases to +6, and the attack is treated as a confirmed critical hit if the target is at least indifferent to the turncoat.</p>
<p>This ability replaces <strong className="hl">quarry</strong> and <strong className="hl">improved quarry</strong>.</p>
</>};
const _vanguard = {title: "Vanguard", jsx: <><h2 id="arc-slayer-vanguard-vanguard">Vanguard</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 121</Link><br/>Vanguards are battlefield commanders who focus on the brutality of combat and lead their allies to bloody victory. Quick to react to danger, a vanguard is a valuable scout, capable officer, and skilled tactician.</p>
<p><strong>Lookout (Ex):</strong> At 1st level, a vanguard adds 1/2 his level (minimum 1) to initiative checks.</p>
<p>This ability replaces <strong className="hl">track</strong>.</p>
<p><strong>Tactician (Ex):</strong> At 2nd level, a vanguard receives a <Link to="/main/teamwork_feat">teamwork feat</Link> as a bonus feat. He must meet the prerequisites for this feat. Once per day as a standard action, the vanguard can grant one of his teamwork feats to all allies within 30 feet who can see and hear him. Allies retain the use of this bonus feat for 3 rounds plus 1 round for every 2 levels the vanguard possesses. Allies do not need to meet the prerequisites of this bonus feat. Whenever the vanguard is able to select a new slayer talent, he can instead choose to gain an additional use per day of this ability.</p>
<p>This ability replaces the <strong className="hl">slayer talent</strong> gained at 2nd level.</p>
<p><strong>Vanguard's Bond (Ex):</strong> At 4th level, a vanguard forms a bond with his fighting companions. As a move action, he can choose one of his current studied targets and grant half his studied target bonus against that target to all allies within 30 feet who can see or hear him. This bonus lasts for a number of rounds equal to the slayer's Intelligence modifier (minimum 1). This bonus does not stack with any <Link to="/ability/favored_enemy">favored enemy</Link> or studied target bonuses possessed by his allies; they use whichever bonus is higher.</p>
<p>This ability replaces the <strong className="hl">slayer talent</strong> gained at 4th level.</p>
<p><strong>Ever Ready (Ex):</strong> At 7th level, a vanguard is never considered an <Link to="/rule/surprise">unaware combatant</Link> and is always able to act in the surprise round. The vanguard is still flat-footed in the surprise round until he acts.</p>
<p>This ability replaces <strong className="hl">stalker</strong>.</p>
<p><strong>Slayer Talents:</strong> The following slayer talents complement the vanguard archetype: <Link to="/talent/combat_trick">combat trick</Link>, <Link to="/talent/finesse_rogue">finesse rogue</Link>, <Link to="/talent/hard_to_fool">hard to fool</Link>, <Link to="/talent/rogue_crawl">rogue crawl</Link>, <Link to="/talent/surprise_attack">surprise attack</Link>, <Link to="/talent/terrain_mastery">terrain mastery</Link>, and <Link to="/talent/weapon_training">weapon training</Link>.</p>
<p><strong>Advanced Slayer Talents:</strong> The following advanced slayer talents (and advanced rogue talents) complement the vanguard archetype: <Link to="/talent/feat">feat</Link>, <Link to="/talent/opportunist">opportunist</Link>, <Link to="/slayertalent/slayer_camouflage">slayer camouflage</Link>, and <Link to="/talent/unwitting_ally">unwitting ally</Link>.</p>
</>};
const _velvet_blade = {title: "Velvet Blade", jsx: <><h2 id="arc-slayer-velvet_blade-velvet-blade">Velvet Blade</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 70</Link><br/>Velvet blades specialize in infiltrating the upper echelons of society, mingling with nobles and courtiers, and killing them. Velvet blades are often born into the aristocracy, with an intricate understanding of the inner workings of upper-class society. Though a few velvet blades are unhinged maniacs who enjoy preying on their peers, most of these well-heeled slayers assume a professional demeanor and hire themselves out to other nobles or well-connected criminal organizations.</p>
<Ability icon={["skills"]} id="arc-slayer-velvet_blade-undefined">
<Pair id="arc-slayer-velvet_blade-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering)</Pair></Ability>
<p><strong>Armor Proficiency:</strong> A velvet blade is not proficient with medium armor or shields.</p>
<p>This alters the slayer's <strong className="hl">armor proficiency</strong>.</p>
<p><strong>Studied Socialite (Ex):</strong> A velvet blade focuses her studies on social infiltration rather than brute force, believing it is easier to kill an opponent quietly and unprepared than in a loud battle. She adds her studied target bonus on Bluff, Diplomacy, Disguise, Intimidate, Knowledge, Perception, Sense Motive, Stealth, and Survival checks against studied opponents, as well as to the DCs of slayer class abilities she uses against such opponents. She never gains a bonus on weapon attack and damage rolls from her studied target ability.</p>
<p>This ability alters <strong className="hl">studied target</strong>.</p>
<p><strong>Courtly Graces (Ex):</strong> A velvet blade spends long hours memorizing etiquette and family lineages of royalty and other prominent families. She gains a bonus on Knowledge (nobility checks) equal to half her slayer level (minimum +1).</p>
<p>This ability replaces <strong className="hl">track</strong>.</p>
<p><strong>Treacherous Blade (Ex):</strong> At 7th level, a velvet blade can capitalize on how others underestimate her and allow her close to them, assuming she is harmless. She gains the <Link to="/feat/betrayer">Betrayer</Link> feat as a bonus feat, whether or not she meets the prerequisites. Additionally, when making her first attack against a studied target that believes her to be harmless or to be an ally, the attack counts as a sneak attack, even if the target isn't flanked or denied its Dexterity bonus to AC, and the velvet blade gains +2d6 sneak attack damage, increasing by 1d6 at 10th level and every 5 levels thereafter. Even if she immediately attacks the target again (such as by continuing a full attack), only the first attack gains these benefits, since the target immediately realizes the velvet blade is something more than she seemed.</p>
<p><strong>Silent Dispatch (Ex):</strong> At 11th level, a velvet blade becomes adept at taking out her targets quietly. She gains the <Link to="/vigtalent/silent_dispatch">silent dispatch</Link> vigilante talent without meeting the talent's prerequisites.</p>
<p>This ability replaces <strong className="hl">swift tracker</strong>.</p>
</>};
const _witch_killer = {title: "Witch Killer", jsx: <><h2 id="arc-slayer-witch_killer-witch-killer">Witch Killer</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 67</Link><br/>Born into cultures where magic users are hated and feared, witch killers devote their lives to purge the arcane taint from the world.</p>
<Ability icon={["skills"]} id="arc-slayer-witch_killer-undefined">
<Pair id="arc-slayer-witch_killer-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/spellcraft">Spellcraft</Link> (INT)</Pair></Ability>
<p><strong>Studied Witch (Ex):</strong> A witch killer's studied combat bonus applies on Spellcraft checks and saving throws against arcane spells and spell-like abilities and hexes. This bonus is reduced by 1 (minimum 0) if the target is not an arcane spellcaster, or a being called or summoned by arcane magic. He does not gain the increases to the maximum number of studied targets he can have at a time normally attained at 5th, 10th, 15th, and 20th levels, but his bonuses still increase at those levels.</p>
<p>This ability alters <strong className="hl">studied target</strong>.</p>
<p><strong>Superstitous (Ex):</strong> Instead of being able to select ranger combat style feats as slayer talents, a witch killer can select any of the following barbarian rage powers as slayer talents, treating his slayer level as his barbarian level: <Link to="/ragepower/clear_mind">clear mind</Link>, <Link to="/ragepower/disruptive">disruptive</Link>, <Link to="/ragepower/eater_of_magic">eater of magic</Link>, <Link to="/ragepower/spell_sunder">spell sunder</Link>, <Link to="/ragepower/spellbreaker">spellbreaker</Link>, <Link to="/ragepower/sunder_enchantment">sunder enchantment</Link>, <Link to="/ragepower/superstition">superstition</Link>, or <Link to="/ragepower/witch_hunter">witch hunter</Link>. If the witch killer selects a rage power that can normally be used only once per rage (eater of magic, spell sunder, or sunder enchantment), he can use it once per day per 5 slayer levels he possesses, though no more than once per round in any event. The other rage powers affect the slayer constantly, though the superstition and witch hunter rage powers apply only against arcane spells and spell-like abilities and the creatures that use them.</p>
<p><strong>Lingering Thrust (Ex):</strong> At 4th level, when a witch killer's attack against an arcane spellcaster in the midst of casting forces the spellcaster to attempt a <Link to="/rule/concentration">concentration</Link> check, the witch killer adds half his slayer level to the check's DC. When he makes a sneak attack against an arcane spellcaster, up to 1 point of sneak attack damage per slayer level counts as ongoing damage for the purpose of forcing the spellcaster to attempt concentration checks (the witch killer does not add half his slayer level to this DC).</p>
<p>This ability replaces the <strong className="hl">slayer talent</strong> gained at 4th level.</p>
<p><strong>Scent Magic (Su):</strong> At 5th level, a witch killer can detect arcane magic by scent. He can use <Link to="/spell/detect_magic">detect magic</Link> at will (as per a <Link to="/class/paladin">paladin's</Link> ability to detect evil), but only against arcane magic, and the ability is scent-based and thus defeated by effects like <Link to="/spell/negate_aroma">negate aroma</Link>. Even when he isn't concentrating on using his magic scent, when a creature within scent range casts an arcane spell (including arcane spell-like abilities or magic item effects), the witch killer automatically pinpoints the caster's location.</p>
<p><strong>Burn the Witch (Sp):</strong> At 10th level, once per day when a witch killer observes a creature within 30 feet cast an arcane spell or use an arcane spell-like ability, he can use foster hatred on that character, or target one creature harmed by the arcane effect with vengeful outrage, identifying the caster as the enemy. He can use this ability twice per day at 15th level, and he can use this ability three times per day at 20th level. The save DC is Charisma-based and uses the witch killer's slayer level as his caster level.</p>
<p>This ability replaces the <strong className="hl">slayer talent</strong> normally gained at 10th level.</p>
</>};
const _woodland_sniper = {title: "Woodland Sniper", jsx: <><h2 id="arc-slayer-woodland_sniper-woodland-sniper">Woodland Sniper</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 87</Link><br/>Woodland snipers are guardians of forest and grove, keeping vigil on their borders and hunting bounties and trespassers from the shelter of sturdy branches.</p>
<p><strong>Tree Climber (Ex):</strong> A woodland sniper adds half his level to Acrobatics and Climb checks to move between, through, or up trees. With a successful DC 15 Acrobatics check, he can make ranged attacks with bows while balancing on branches.</p>
<p>This replaces <strong className="hl">track</strong>.</p>
<p><strong>Ranged Sneak Attack (Ex):</strong> At 3rd level, whenever a woodland sniper makes a ranged attack against a creature within 30 feet that is denied its Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), he deals an additional 1d6 points of damage. This damage increases by 1d6 every 3 levels thereafter. Should the woodland sniper score a critical hit with his ranged attack, this additional damage is not multiplied. A woodland sniper cannot use sneak attack with a melee attack.</p>
<p>At 6th level and every 3rd level thereafter, the range at which he can make a sneak attack increases by 10 feet.</p>
<p>This alters <strong className="hl">sneak attack</strong>.</p>
<p><strong>Still Shot (Ex):</strong> At 7th level, when he has cover provided by one or more trees, the woodland sniper reduces the penalty on Stealth checks to remain hidden while sniping by half his slayer level.</p>
<p>This replaces <strong className="hl">stalker</strong>.</p>
<p><strong>Branchwalking (Ex):</strong> At 11th level, the woodland sniper gains a climb speed equal to his base speed. In addition, at 13th level, he can move from one tree to another via connecting branches by adding 5 to the DC of an Acrobatics or Climb check to move within the canopy. The woodland sniper cannot end his movement on a branch that cannot support his weight.</p>
<p>This replaces <strong className="hl">swift tracker</strong> and <strong className="hl">slayer's advance</strong>.</p>
</>};
export default {ankous_shadow:_ankous_shadow,avalancher:_avalancher,bloody_jake:_bloody_jake,bounty_hunter:_bounty_hunter,butterfly_blade:_butterfly_blade,cleaner:_cleaner,covenbane:_covenbane,cutthroat:_cutthroat,deliverer:_deliverer,dune_rider:_dune_rider,family_hunter:_family_hunter,grave_warden:_grave_warden,guerrilla:_guerrilla,pureblade:_pureblade,sczarni_executioner:_sczarni_executioner,sniper:_sniper,spawn_slayer:_spawn_slayer,spire_diver:_spire_diver,spiritslayer:_spiritslayer,stygian_slayer:_stygian_slayer,toxic_sniper:_toxic_sniper,turncoat:_turncoat,vanguard:_vanguard,velvet_blade:_velvet_blade,witch_killer:_witch_killer,woodland_sniper:_woodland_sniper}