import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import {Block,Row,Cell} from '../../components/Block';
import AffInfo from '../../components/AfflictionInfo';
const _not_found = {title: "Unknown", jsx: <><h2 id="aspect-not_found-error">Error</h2>
<p>Unable to find the requested shifter aspect.</p>
</>};
const _bat = {title: "Bat", jsx: <><h2 id="aspect-bat-bat">Bat</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 28</Link><br/>The aspect of the bat imparts mastery over darkness and the night. Though not as powerful in battle as some other aspects, those who take this aspect become adept at skirmishing and spying.</p>
<Ability id="minor-form" icon={["stairs-goal"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Ability">You gain darkvision with a range of 60 feet. If you already have darkvision with this range or greater, the range of your darkvision increases by 30 feet.</Pair>
<Pair title="At 8th Level">You gain darkvision with a range of 90 feet instead. If you already have darkvision with this range or greater, your darkvision increases by 30 feet.</Pair>
<Pair title="At 15th Level">You gain the 8th-level benefit and gain <Link to="/umr/blindsense">blindsense</Link> with a range of 15 feet or, if you already have blindsense with a range of 15 feet or more, you increase its range by 10 feet.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/dire_bat">dire bat</Link>. While in this form, you gain a base speed of 30 feet, a fly speed of 40 feet (clumsy), blindsense with a range of 10 feet, and a <Link to="/umr/bite_attack">bite attack</Link> (1d8 damage).</Pair>
<Pair title="At 8th Level">The fly speed increases to 60 feet (good), the range of your blindsense increases to 20 feet, and you gain the <Link to="/feat/flyby_attack">Flyby Attack</Link> feat.</Pair>
<Pair title="At 15th Level">Your fly speed increases to 80 feet (good) and you gain the <Link to="/feat/hover">Hover</Link> feat.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S), wing (B)</Cell></Row></Block>
</>};
const _bear = {title: "Bear", jsx: <><h2 id="aspect-bear-bear">Bear</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 29</Link><br/>The aspect of the bear invokes a juggernaut of tireless endurance and furious power. Those who take this aspect are known for surviving severe wounds and delivering punishing blows in return.</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +2 enhancement bonus to your Constitution score.</Pair>
<Pair title="At 8th Level">The bonus becomes +4.</Pair>
<Pair title="At 15th Level">The bonus increases to +6.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/dire_bear">dire bear</Link>. While in this form, you gain a base speed of 40 feet, low-light vision, <Link to="/umr/scent">scent</Link> (30 feet), a <Link to="/umr/bite_attack">bite attack</Link> (1d8 damage), and two claw attacks (1d6 damage) with the <Link to="/umr/grab">grab</Link> ability.</Pair>
<Pair title="At 8th Level">You gain <Link to="/feat/improved_natural_attack">Improved Natural Attack</Link> with your claws.</Pair>
<Pair title="At 15th Level">The critical multiplier of your claw attack increases by 1 (&times;2 becomes &times;3) to a maximum of &times;4, and you gain the <Link to="/feat/awesome_blow">Awesome Blow</Link> feat.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S)</Cell></Row></Block>
</>};
const _boar = {title: "Boar", jsx: <><h2 id="aspect-boar-boar">Boar</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 4</Link><br/>Those with the aspect of the boar are famously stubborn.</p>
<Ability id="minor-form" icon={["stairs-goal"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Ability">You gain <Link to="/feat/diehard">Diehard</Link> as a bonus feat.</Pair>
<Pair title="At 8th Level">You add your Hit Dice to your Constitution when determining the negative number of hit points at which you die.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal","upgrade"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/dire_boar">dire boar</Link>. While in this form, you gain low-light vision, the <Link to="/umr/scent">scent</Link> ability, a <Link to="/umr/gore_attack">gore attack</Link> (1d8), and a base speed of 40 feet.</Pair>
<Pair title="At 8th Level">You gain <Link to="/feat/improved_natural_attack">Improved Natural Attack</Link> with your gore attack, and you gain <Link to="/umr/powerful_charge">powerful charge</Link> (+1d8 on your gore attack).</Pair>
<Pair title="At 15th Level">You gain 1 additional hit point per Hit Die you have, and you gain <Link to="/feat/awesome_blow">Awesome Blow</Link> as a bonus feat.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Gore (P), hoof (B)</Cell></Row></Block>
</>};
const _bull = {title: "Bull", jsx: <><h2 id="aspect-bull-bull">Bull</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 29</Link><br/>The bull is a fierce charger and is adept at trampling its foes, pounding them to a bloody pulp.</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +2 enhancement bonus to your Strength score.</Pair>
<Pair title="At 8th Level">The bonus becomes +4.</Pair>
<Pair title="At 15th Level">The bonus increases to +6.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a Large bull (use <Link to="/monster/aurochs">aurochs</Link> stats). While in this form, you gain a base speed of 40 feet, low-light vision, <Link to="/umr/scent">scent</Link>, and a <Link to="/umr/gore_attack">gore attack</Link> (1d8 damage) with <Link to="/umr/powerful_charge">powerful charge</Link> (+1d8 on your gore attack).</Pair>
<Pair title="At 8th Level">You gain the <Link to="/umr/trample">trample</Link> as per the universal monster rule (dealing gore damage plus 1-1/2 times your Strength modifier).</Pair>
<Pair title="At 15th Level">Your gore damage increases to 2d8 and you gain the <Link to="/feat/awesome_blow">Awesome Blow</Link> feat.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Gore (P), hoof (B), slam (B)</Cell></Row></Block>
</>};
const _crocodile = {title: "Crocodile", jsx: <><h2 id="aspect-crocodile-crocodile">Crocodile</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 4</Link><br/>The crocodile lurks in the water, unseen until it lunges forth with its powerful jaws.</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +2 competence bonus on Swim checks and <Link to="/rule/grapple">grapple</Link> combat maneuver checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/crocodile">crocodile</Link>. While in this form, you gain a swim speed of 30 feet, low-light vision, a <Link to="/umr/bite_attack">bite attack</Link> (1d8) with the <Link to="/umr/grab">grab</Link> ability, and a tail slap attack (a secondary natural attack that deals 1d12 points of damage).</Pair>
<Pair title="At 8th Level">Once per minute as a <strong className="hl">free action</strong>, you can increase your land speed by 20 feet for 1 round.</Pair>
<Pair title="At 15th Level">You gain <Link to="/feat/improved_natural_attack">Improved Natural Attack</Link> with your bite attack, and when you successfully grapple a foe, you can knock your grappled foe <Link to="/rule/prone">prone</Link>.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S), tail slap (B)</Cell></Row></Block>
</>};
const _deinonychus = {title: "Deinonychus", jsx: <><h2 id="aspect-deinonychus-deinonychus">Deinonychus</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 29</Link><br/>The deinonychus is adept at racing from ambush to deliver grievous wounds with its talons. This aspect infuses the shifter with an enhanced ability to surprise foes and strike first in battle.</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +2 bonus on Initiative checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/deinonychus">deinonychus</Link>. While in this form, you gain a base speed of 60 feet, low-light vision, <Link to="/umr/scent">scent</Link> (30 feet), a <Link to="/umr/bite_attack">bite attack</Link> (1d8 damage), and two talon attacks (1d8 damage; your talon attacks can use your <em>shifter claws</em> damage), and <Link to="/umr/pounce">pounce</Link>.</Pair>
<Pair title="At 8th Level">You gain two foreclaw attacks (1d4 damage; these attacks cannot use your <em>shifter claws</em> damage) and a +4 racial bonus on Acrobatics checks.</Pair>
<Pair title="At 15th Level">You gain a +1 dodge bonus to AC and <Link to="/feat/spring_attack">Spring Attack</Link> as a bonus feat.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S), talon (S)</Cell></Row></Block>
</>};
const _dolphin = {title: "Dolphin", jsx: <><h2 id="aspect-dolphin-dolphin">Dolphin</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 4</Link><br/>The aspect of the dolphin imparts clever mastery of the seas. Shifters with this aspect also embody the size and ferociousness of large dolphins, such as orcas.</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +4 competence bonus on Knowledge checks to identify creatures' abilities and weaknesses.</Pair>
<Pair title="At 8th Level">The bonus becomes +6.</Pair>
<Pair title="At 15th Level">The bonus increases to +8.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a Large <Link to="/monster/dolphin">dolphin</Link>, but your space is 10 feet instead of 5 feet. While in this form, you gain a swim speed of 60 feet, <Link to="/umr/blindsense">blindsense</Link> with a range of 10 feet, low-light vision, a <Link to="/umr/bite_attack">bite attack</Link> (1d8), and the ability to <Link to="/misc/hold_your_breath">hold your breath</Link> for a number of minutes equal to 6 times your Constitution score before you risk drowning.</Pair>
<Pair title="At 8th Level">The range of your blindsense increases to 20 feet.</Pair>
<Pair title="At 15th Level">The range of your blindsense increases to 60 feet and your swim speed increases to 80 feet.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S), Slam (B)</Cell></Row></Block>
</>};
const _dragonfly = {title: "Dragonfly", jsx: <><h2 id="aspect-dragonfly-dragonfly">Dragonfly</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 4</Link><br/>The aspect of the dragonfly offers the ability to make quick, darting attacks at foes.</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain an enhancement bonus of +10 feet to your base speed when <Link to="/rule/charging">charging</Link>.</Pair>
<Pair title="At 8th Level">This bonus increases to +20 feet.</Pair>
<Pair title="At 15th Level">The bonus becomes +30 feet.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/vermin_shape_ii">Vermin Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/giant_dragonfly">giant dragonfly</Link>. While in this form, you gain a fly speed of 60 feet (average), darkvision with a range of 60 feet, and a <Link to="/umr/bite_attack">bite attack</Link> (2d6) with the <Link to="/umr/grab">grab</Link> ability.</Pair>
<Pair title="At 8th Level">You gain <Link to="/feat/flyby_attack">Flyby Attack</Link> as a bonus feat, and your fly speed improves to 60 feet (good).</Pair>
<Pair title="At 15th Level">Your fly speed increases to 80 feet (perfect), and if you <Link to="/rule/charge">charge</Link> while flying, you gain a +4 bonus on <Link to="/rule/grapple">grapple</Link> combat maneuver checks for 1 round.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S), wing (B)</Cell></Row></Block>
</>};
const _electric_eel = {title: "Electric Eel", jsx: <><h2 id="aspect-electric_eel-electric-eel">Electric Eel</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 4</Link><br/>The aspect of the electric eel imparts the ability to charge attacks with electricity and to slip effortlessly out of danger.</p>
<Ability id="minor-form" icon={["mailed-fist"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Ability">Your attacks deal 1 point of electricity damage in addition to their normal damage.</Pair>
<Pair title="At 8th Level">The extra damage becomes 1d3.</Pair>
<Pair title="At 15th Level">The extra damage increases to 1d6.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of an <Link to="/monster/electric_eel">electric eel</Link>. While in this form, you gain a swim speed of 30 feet, low-light vision, electricity <Link to="/umr/resistance">resistance</Link> 5, a <Link to="/umr/bite_attack">bite attack</Link> (1d6), and a tail attack (a secondary natural touch attack that deals 1d6 points of electricity damage).</Pair>
<Pair title="At 8th Level">Your electricity resistance increases to 10 and you gain a +4 racial bonus on Escape Artist checks.</Pair>
<Pair title="At 15th Level">On a critical hit with your tail attack, the creature struck must succeed at a Fortitude save (DC = 10 + half your shifter level + your Constitution modifier) or be <Link to="/misc/stunned">stunned</Link> for 1d4 rounds.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S), tail slap (B)</Cell></Row></Block>
</>};
const _elephant = {title: "Elephant", jsx: <><h2 id="aspect-elephant-elephant">Elephant</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 22</Link><br/>The elephant is a symbol of both power and wisdom in Garund and Vudra. Shifters who take this aspect learn the value of applying their strength with precision. An elephant's alternate attacks are gore (P) and slam (B).</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +4 enhancement bonus on <Link to="/rule/bull_rush">bull rush</Link> and <Link to="/rule/overrun">overrun</Link> combat maneuver checks.</Pair>
<Pair title="At 8th Level">The bonus becomes +6.</Pair>
<Pair title="At 15th Level">The bonus increases to +8.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a Large adolescent <Link to="/monster/elephant">elephant</Link> (as an elephant, but with a space of 10 feet). While in this form, you gain low-light vision, <Link to="/umr/scent">scent</Link>, a <Link to="/umr/gore_attack">gore attack</Link> (1d6 damage), and a slam attack (1d8 damage) with a 5-foot reach. You also gain a +2 racial bonus to Strength and to natural armor. While in this form, you can carry a Medium bipedal creature on your back, allowing you to act as the creature's mount.</Pair>
<Pair title="At 8th Level">You gain <Link to="/umr/trample">trample</Link>, as the universal monster rule, dealing your <em>shifter claw</em> damage.</Pair>
<Pair title="At 15th Level">You gain <Link to="/feat/improved_bull_rush">Improved Bull Rush</Link> as a bonus feat, and your racial bonus to Strength and natural armor increases to +4.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Gore (P), slam (B)</Cell></Row></Block>
</>};
const _falcon = {title: "Falcon", jsx: <><h2 id="aspect-falcon-falcon">Falcon</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 29</Link><br/>The falcon senses all and has the speed to hunt down even the most elusive prey. Those who take this aspect gain enhanced abilities to perceive and reconnoiter the wilderness - little escapes this shifter's attention.</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +4 competence bonus on Perception checks.</Pair>
<Pair title="At 8th Level">The bonus becomes +6.</Pair>
<Pair title="At 15th Level">The bonus increases to +8.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a Small <Link to="/monster/falcon">falcon</Link>. While in this form, you gain a base speed of 30 feet, a <Link to="/umr/bite_attack">bite attack</Link> (1d4 damage), two claw attacks (1d3 damage), a fly speed of 60 feet (good), low-light vision, and a +4 racial bonus on vision-based Perception checks.</Pair>
<Pair title="At 8th Level">You gain darkvision with a range of 120 feet, and your racial bonus on Perception checks increases to +6.</Pair>
<Pair title="At 15th Level">You gain <Link to="/umr/blindsense">blindsense</Link> with a range of 60 feet and your fly speed increases to 90 feet (perfect).</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S), talon (S)</Cell></Row></Block>
</>};
const _frog = {title: "Frog", jsx: <><h2 id="aspect-frog-frog">Frog</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 29</Link><br/>The aspect of the frog grants great mobility in leaping through the air and swimming in water, as well surprising tactics in combat.</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +4 competence bonus on Acrobatics checks when jumping and on Swim checks.</Pair>
<Pair title="At 8th Level">These bonuses become +6.</Pair>
<Pair title="At 15th Level">These bonuses increase to +8.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a Large frog (as per the <Link to="/monster/giant_frog">giant frog</Link> but with a space of 10 feet). While in this form, you gain a base speed of 30 feet, a swim speed of 30 feet, low-light vision, <Link to="/umr/scent">scent</Link> (30 feet), a <Link to="/umr/bite_attack">bite attack</Link> (1d6 damage) with the <Link to="/umr/grab">grab</Link> ability, and the ability to treat all <Link to="/skill/acrobatics">jumps</Link> as if you had a running start.</Pair>
<Pair title="At 8th Level">You gain a tongue attack. Your tongue is a primary natural attack with a reach of 15 feet. Your tongue deals no damage on a hit, but can be used to grab. You do not gain the <Link to="/rule/grappled">grappled</Link> condition while using your tongue in this manner.</Pair>
<Pair title="At 15th Level">Your swim speed increases to 60 feet. In addition, the reach of your tongue attack increases to 30 feet, and your tongue attack deals bludgeoning damage equal to the damage dealt by your <em>shifter claws.</em></Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S)</Cell></Row></Block>
</>};
const _giant_wasp = {title: "Giant Wasp", jsx: <><h2 id="aspect-giant_wasp-giant-wasp">Giant Wasp</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 22</Link><br/>The aspect of the wasp grants flight and a venomous sting, as well as great mental resistance. A giant wasp's alternate attack is sting (P).</p>
<Ability id="minor-form" icon={["armor-upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +4 bonus on Will saves against mind-affecting affects.</Pair>
<Pair title="At 8th Level">The bonus becomes +6.</Pair>
<Pair title="At 15th Level">The bonus increases to +8.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/vermin_shape_ii">Vermin Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/giant_wasp">giant wasp</Link>. This ability uses the <Link to="/spell/vermin_shape_1">vermin shape</Link> spell, rather than <Link to="/spell/beast_shape_1">beast shape</Link>, for the purposes of wild shape. While in this form, you gain a fly speed of 40 feet (clumsy), and swarms and vermin do not attack you unless magically commanded to do so.</Pair>
<Pair title="At 8th Level"><p>This fly speed increases to 60 feet (average), and you gain a sting attack usable a number of times per day equal to 3 + your Wisdom modifier, which applies the following poison.</p>
<AffInfo type="Sting-injury" save="Fort 10 + 1/2 your shifter level + your Con modifier" freq="1/round for 4 rounds" eff={<>1d3 <Link to="/rule/dex_damage">Dex damage</Link></>} cure2 icon="p">Wasp Venom</AffInfo>
</Pair>
<Pair title="At 15th Level">Your fly speed increases to 80 feet (good), and you can attempt to gain control of a mindless swarm as a <strong className="hl">full-round action</strong>. To gain control of the swarm, you must succeed at a Charisma check against a DC of 10 + the swarm's CR. You can direct the swarm to disperse, remain in a designated location, or attack an opponent. This control lasts for a number of rounds equal to <Link to="/misc/half">half</Link> your shifter level.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Sting (P)</Cell></Row></Block>
</>};
const _horse = {title: "Horse", jsx: <><h2 id="aspect-horse-horse">Horse</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 22</Link><br/>The aspect of the horse grants speed and maneuverability. A horse's alternate attack is hoof (B).</p>
<Ability id="minor-form" icon={["stairs-goal","upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Ability">You gain the <Link to="/feat/endurance">Endurance</Link> feat as well as an enhancement bonus of +5 feet to your base speed.</Pair>
<Pair title="At 8th Level">You gain the <Link to="/feat/run">Run</Link> feat. If you already have the Run feat, you instead can run at 6 times your base speed when using the Run feat.</Pair>
<Pair title="At 15th Level">Your enhancement bonus to your base speed increases to +15.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/horse">horse</Link>. While in this form, you gain a base speed of 50 feet, low-light vision, <Link to="/umr/scent">scent</Link> (30 feet), and the ability to move before and after an attack, as if you had the <Link to="/feat/ride_by_attack">Ride-By Attack</Link> feat.</Pair>
<Pair title="At 8th Level">You can move through threatened squares without provoking attacks of opportunity, and you gain <Link to="/umr/trample">trample</Link>, as the universal monster rule, dealing your <em>shifter claw</em> damage.</Pair>
<Pair title="At 15th Level">You gain <Link to="/feat/improved_overrun">Improved Overrun</Link> as a bonus feat, even if you do not meet the prerequisites.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Hoof (B)</Cell></Row></Block>
</>};
const _lion = {title: "Lion", jsx: <><h2 id="aspect-lion-lion">Lion</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 22</Link><br/>Lions hunt in prides, cooperating to bring down large opponents and defend their territory. A lion's alternate attack is bite (B, P, S).</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +4 competence bonus on Intimidate checks.</Pair>
<Pair title="At 8th Level">The bonus becomes +6.</Pair>
<Pair title="At 15th Level">The bonus increases to +8.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/dire_lion">dire lion</Link>. While in this form, you gain a base speed of 40 feet, low-light vision, and <Link to="/umr/scent">scent</Link> (30 feet). Once per day for every 2 shifter levels you have, you can utter a mighty roar, allowing you to attempt an <Link to="/skill/intimidate">Intimidate</Link> check with a +5 circumstance bonus to demoralize enemies within 30 feet. Allies gain a +1 morale bonus on attack and damage rolls against creatures affected by this ability.</Pair>
<Pair title="At 8th Level">You gain one of the following teamwork feats as a bonus feat: <Link to="/feat/outflank">Outflank</Link>, <Link to="/feat/pack_attack">Pack Attack</Link>, <Link to="/feat/paired_opportunists">Paired Opportunists</Link>, or <Link to="/feat/shake_it_off">Shake It Off</Link>. You can grant allies within 30 feet the benefits of this feat as a <strong className="hl">swift action</strong> for a number of rounds equal to 3 + your Wisdom modifier.</Pair>
<Pair title="At 15th Level">You provide a <Link to="/rule/flanking">flanking</Link> bonus to any ally who threatens the same opponent as you do, and you can change places with an adjacent ally as a <strong className="hl">move action</strong> that does not provoke an attack of opportunity, as if using the <Link to="/feat/swap_places">Swap Places</Link> feat.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S)</Cell></Row></Block>
</>};
const _lizard = {title: "Lizard", jsx: <><h2 id="aspect-lizard-lizard">Lizard</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 29</Link><br/>The aspect of the lizard is one of swift, graceful movement, granting the ability to dart and scurry with an astounding agility and balance.</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +4 competence bonus on Acrobatics checks.</Pair>
<Pair title="At 8th Level">The bonus becomes +6.</Pair>
<Pair title="At 15th Level">The bonus increases to +8.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of an agile and brightly colored giant lizard (as per the <Link to="/monster/giant_frilled_lizard">giant frilled lizard</Link>, but with the following changes). While in this form, you gain a base speed of 40 feet, low-light vision, <Link to="/umr/scent">scent</Link> (30 feet), a primary <Link to="/umr/bite_attack">bite attack</Link> (1d8 damage) with the <Link to="/umr/grab">grab</Link> ability and a secondary tail attack (1d6 damage) with the <Link to="/umr/trip">trip</Link> ability.</Pair>
<Pair title="At 8th Level">Your base speed increases to 60 feet and you gain a climb speed of 30 feet.</Pair>
<Pair title="At 15th Level">You gain <Link to="/feat/improved_natural_attack">Improved Natural Attack</Link> with your bite and your tail attacks, and the reach of your tail attack becomes 10 feet.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S), tail slap (B)</Cell></Row></Block>
</>};
const _mantis = {title: "Mantis", jsx: <><h2 id="aspect-mantis-mantis">Mantis</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 4</Link><br/>The aspect of the mantis imparts uncanny patience and unsettling speed.</p>
<Ability id="minor-form" icon={["stairs-goal","upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Ability">You gain <Link to="/feat/lunge">Lunge</Link> as a bonus feat.</Pair>
<Pair title="At 12th Level">Your reach increases by 5 feet.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/vermin_shape_ii">Vermin Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/giant_mantis">giant mantis</Link>. While in this form, you gain darkvision with a range of 60 feet, a +2 racial bonus on initiative checks, and two primary <Link to="/umr/claw_attack">claw attacks</Link> (1d6) with the <Link to="/umr/grab">grab</Link> ability.</Pair>
<Pair title="At 8th Level">You can always act in the surprise round, but if you fail to notice your foes, you act last, regardless of your initiative result (you act in the normal order in subsequent rounds).</Pair>
<Pair title="At 15th Level">Whenever you roll for initiative, you can roll three times and use any one of the results.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S)</Cell></Row></Block>
</>};
const _monkey = {title: "Monkey", jsx: <><h2 id="aspect-monkey-monkey">Monkey</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 30</Link><br/>The monkey is a climbing trickster who specializes in mobility and manual agility.</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +4 competence bonus on Climb checks.</Pair>
<Pair title="At 8th Level">The bonus becomes +6.</Pair>
<Pair title="At 15th Level">The bonus increases to +8.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a Large monkey (as per the <Link to="/monster/dire_ape">dire ape</Link>). While in this form, you gain a base speed of 30 feet, a climb speed of 30 feet, low-light vision, <Link to="/umr/scent">scent</Link> (30 feet), a <Link to="/umr/bite_attack">bite attack</Link> (1d6 damage), and two claw attacks (1d6 damage), and you can still use your hands to wield weapons, hold objects, and manipulate objects normally.</Pair>
<Pair title="At 8th Level">Your climb speed increases to 50 feet, and you can use your tail to hold and manipulate objects as if you had a third hand, but you cannot use it to wield weapons or shields.</Pair>
<Pair title="At 15th Level">You gain a <Link to="/umr/rend">rend</Link> attack that deals extra damage equal to that of your <em>shifter claws</em> attack plus 1-1/2 times your Strength bonus when you hit with two of your normal <em>shifter claws</em> attacks.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S)</Cell></Row></Block>
</>};
const _mouse = {title: "Mouse", jsx: <><h2 id="aspect-mouse-mouse">Mouse</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 30</Link><br/>The aspect of the mouse offers the ability to gain access to hard-to-reach places while avoiding many attacks and effects.</p>
<Ability id="minor-form" icon={["armor-upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain <Link to="/ability/evasion">evasion</Link>, as per the rogue class feature.</Pair>
<Pair title="At 12th Level">This benefit becomes <Link to="/talent/improved_evasion">improved evasion</Link>, as per the rogue advanced talent.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal","armor-upgrade"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a Tiny mouse (as per the <Link to="/monster/dire_rat">dire rat</Link>, but with a space of 2-1/2 feet and a reach of 0 feet). While in this form, you gain a base speed of 30 feet, a climb speed of 20 feet, a swim speed of 20 feet, low-light vision, <Link to="/umr/scent">scent</Link> (30 feet), and a <Link to="/umr/bite_attack">bite attack</Link> (1d4 damage), and you use your Dexterity modifier instead of your Strength modifier on Climb and Swim checks.</Pair>
<Pair title="At 8th Level">Your climb and swim speeds both increase to 40 feet.</Pair>
<Pair title="At 15th Level">You do not provoke attacks of opportunity while moving through or out of a creature's threatened area or moving into its space, but you do when you leave its space.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S)</Cell></Row></Block>
</>};
const _octopus = {title: "Octopus", jsx: <><h2 id="aspect-octopus-octopus">Octopus</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 5</Link><br/>The octopus is a cunning hunter, able to contort its malleable body with ease.</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +4 competence bonus on Escape Artist checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of an <Link to="/monster/octopus">octopus</Link>. While in this form, you gain the <Link to="/subtype/aquatic">aquatic</Link> subtype, a swim speed of 30 feet, low-light vision, a <Link to="/umr/bite_attack">bite attack</Link> (1d3), a tentacles attack (no damage) with the <Link to="/umr/grab">grab</Link> ability, and <Link to="/feat/multiattack">Multiattack</Link> as a bonus feat.</Pair>
<Pair title="At 8th Level">You gain the <Link to="/umr/jet">jet</Link> ability (200 feet).</Pair>
<Pair title="At 15th Level">While within water, you can emit a 10-foot-radius sphere of ink once per minute as a <strong className="hl">swift action</strong>. This ink provides <Link to="/rule/concealment">total concealment</Link> and persists for 1 minute. Also, you now deal an amount of bludgeoning damage with your tentacles attack equal to the damage dealt by your <em>shifter claws.</em></Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S), tentacle (B)</Cell></Row></Block>
</>};
const _owl = {title: "Owl", jsx: <><h2 id="aspect-owl-owl">Owl</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 30</Link><br/>The aspect of the owl is one of silence. This predator glides through the night unheard, a master of stealthy attacks.</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +4 competence bonus on Stealth checks.</Pair>
<Pair title="At 8th Level">The bonus becomes +6.</Pair>
<Pair title="At 15th Level">The bonus increases to +8.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal","upgrade"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a Medium <Link to="/monster/owl">owl</Link>. While in this form, you gain a base speed of 30 feet, a fly speed of 60 feet (average), two talon attacks (1d6 damage), darkvision with a range of 60 feet, and a +2 racial bonus on Stealth checks.</Pair>
<Pair title="At 8th Level">You gain <Link to="/feat/flyby_attack">Flyby Attack</Link> as a bonus feat, and the range of your darkvision increases to 120 feet.</Pair>
<Pair title="At 15th Level">You can take the form of a Large owl and gain the benefits of the <Link to="/feat/snatch">Snatch</Link> feat, but you can use it only to grab a creature at least one size category smaller than yourself, and you can squeeze a creature grappled with this ability no matter what size it is.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S), talons (S)</Cell></Row></Block>
</>};
const _peafowl = {title: "Peafowl", jsx: <><h2 id="aspect-peafowl-peafowl">Peafowl</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 13</Link><br/>Peafowl are popular ornamental birds due to their spectacular colors, and they are often symbols of royalty or the divine.</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +2 enhancement bonus to your Charisma score.</Pair>
<Pair title="At 8th Level">The bonus becomes +4.</Pair>
<Pair title="At 15th Level">The bonus increases to +6.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal","tornado-discs"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability"><p>Your shape changes to that of a Small <Link to="/monster/peafowl">peafowl</Link>. While in this form you gain low-light vision, a fly speed of 40 feet (clumsy), two <Link to="/umr/talon_attack">talon attacks</Link> (1d3 damage), and a +4 racial bonus on Stealth checks.</p>
<p>A peafowl can't use its fly speed to hover and must end any flying move action by landing or perching on a solid surface.</p>
<p>A peafowl can perform a captivating dance targeting all creatures within a 15-foot cone. Each creature in the cone that can see your dance must succeed at a Will save (DC = 10 + half your shifter level + your Charisma modifier) or be <Link to="/misc/stunned">stunned</Link> for 1 round.</p>
</Pair>
<Pair title="At 8th Level">The stunned effect lasts for 2 rounds.</Pair>
<Pair title="At 15th Level">The duration increases to 4 rounds.</Pair>
<Pair title="Special">Whether or not a creature succeeds at the initial save vs your dance, a creature cannot be affected by it again for 24 hours.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S), tail slap (B)</Cell></Row></Block>
</>};
const _scorpion = {title: "Scorpion", jsx: <><h2 id="aspect-scorpion-scorpion">Scorpion</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 5</Link><br/>The aspect of the scorpion invokes a hidden menace with a poisonous sting.</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +2 competence bonus on Stealth checks and <Link to="/rule/grapple">grapple</Link> combat maneuver checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/vermin_shape_ii">Vermin Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/giant_scorpion">giant scorpion</Link>. While in this form, you gain darkvision with a range of 60 feet, <Link to="/umr/tremorsense">tremorsense</Link> with a range of 10 feet, two primary <Link to="/umr/claw_attack">claw attacks</Link> (1d6) with the <Link to="/umr/grab">grab</Link> ability, and a secondary sting attack (1d6).</Pair>
<Pair title="At 8th Level">The range of your tremorsense increases to 20 feet, and you gain a +4 racial bonus on Climb and Perception checks.</Pair>
<Pair title="At 15th Level"><p>When you make an attack of opportunity with your sting attack or maintain a grapple and deal damage with your sting attack, that attack also applies the following poison.</p>
<AffInfo type="Sting-injury" save="Fort 10 + 1/2 your shifter level + your Con modifier" freq="1/round for 6 rounds" eff={<>1d3 <Link to="/rule/str_damage">Str damage</Link></>} cure2c icon="p">Poison</AffInfo>
</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Pincers (B), sting (P)</Cell></Row></Block>
</>};
const _snake = {title: "Snake", jsx: <><h2 id="aspect-snake-snake">Snake</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 30</Link><br/>The snake is a sneaky and lethal foe who strikes unexpectedly with deadly effect, while avoiding opportune strikes made in return.</p>
<Ability id="minor-form" icon={["upgrade","armor-upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Ability">You gain a +2 bonus on attack rolls when making attacks of opportunity and a +2 dodge bonus to your AC against attacks of opportunity.</Pair>
<Pair title="At 8th Level">These bonuses become +4.</Pair>
<Pair title="At 15th Level">These bonuses increase to +6.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal","upgrade"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of an <Link to="/monster/emperor_cobra">emperor cobra</Link>. While in this form, you gain a base speed of 30 feet, a climb speed of 30 feet, a swim speed of 30 feet, low-light vision, <Link to="/umr/scent">scent</Link> (30 feet), a <Link to="/umr/bite_attack">bite attack</Link> (2d6 damage), and the <Link to="/feat/combat_reflexes">Combat Reflexes</Link> feat. If you already have Combat Reflexes or your Dexterity score is not high enough to gain more attacks of opportunity from Combat Reflexes, you can instead make one additional attack of opportunity each round.</Pair>
<Pair title="At 8th Level">You gain a +4 racial bonus on Acrobatics and Stealth checks.</Pair>
<Pair title="At 15th Level"><p>When you make an attack of opportunity with your bite attack, that attack also applies the following poison.</p>
<AffInfo type="Bite-injury" save="Fort 10 + 1/2 your shifter level + your Con modifier" freq="1/round for 6 rounds" eff={<>1d3 <Link to="/rule/con_damage">Con damage</Link></>} cure2c icon="p">Poison</AffInfo>
</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S), tail slap (B)</Cell></Row></Block>
</>};
const _snapping_turtle = {title: "Snapping Turtle", jsx: <><h2 id="aspect-snapping_turtle-snapping-turtle">Snapping Turtle</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 23</Link><br/>Long-lived and resilient, turtles embody wisdom and endurance in many cultures. Those who take this aspect gain profound insight as well as remarkable resilience.</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +2 enhancement bonus to Wisdom.</Pair>
<Pair title="At 8th Level">The bonus becomes +4.</Pair>
<Pair title="At 15th Level">The bonus increases to +6.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal","armor-upgrade"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a Large <Link to="/monster/giant_snapping_turtle">giant snapping turtle</Link>. While in this form, you gain low-light vision, <Link to="/umr/scent">scent</Link> (30 feet), a swim speed of 20 feet, and a <Link to="/umr/bite_attack">bite attack</Link> (1d8 + 1-1/2 your Strength modifier damage).</Pair>
<Pair title="At 8th Level">You gain an insight bonus equal to your Wisdom modifier to your CMD against <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/drag">drag</Link>, <Link to="/rule/overrun">overrun</Link>, <Link to="/rule/reposition">reposition</Link>, and <Link to="/rule/trip">trip</Link> attempts.</Pair>
<Pair title="At 15th Level">You gain DR 5/silver.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S)</Cell></Row></Block>
</>};
const _spider = {title: "Spider", jsx: <><h2 id="aspect-spider-spider">Spider</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 5</Link><br/>The spider is a patient hunter, sensing foes that struggle in its webs.</p>
<Ability id="minor-form" icon={["upgrade","armor-upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +2 competence bonus on Climb checks, Stealth checks, saving throws against <Link to="/spell/web">web</Link> effects (magical or otherwise), and checks to break free of webs.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/vermin_shape_ii">Vermin Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/giant_spider">giant spider</Link>. While in this form, you gain darkvision with a range of 60 feet, <Link to="/umr/tremorsense">tremorsense</Link> with a range of 10 feet, a climb speed of 30 feet, the <Link to="/umr/web">web</Link> special attack, and a <Link to="/umr/bite_attack">bite attack</Link> (1d6).</Pair>
<Pair title="At 8th Level">You gain a +4 racial bonus on Perception checks, and the range of your tremorsense increases to 20 feet.</Pair>
<Pair title="At 15th Level">You gain <Link to="/feat/improved_natural_attack">Improved Natural Attack</Link> (bite), and the range of your tremorsense increases to 30 feet.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S)</Cell></Row></Block>
</>};
const _stag = {title: "Stag", jsx: <><h2 id="aspect-stag-stag">Stag</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 30</Link><br/>The stag can outrun or stand its ground against almost any foe. This aspect offers majestic grace and swift speed.</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain an enhancement bonus of +5 feet to your base speed.</Pair>
<Pair title="At 8th Level">This bonus increases to +10 feet.</Pair>
<Pair title="At 15th Level">The bonus becomes +20 feet.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a Large <Link to="/monster/stag">stag</Link>, but its space changes to 10 feet. While in this form, you gain a base speed of 50 feet, low-light vision, <Link to="/umr/scent">scent</Link> (30 feet), a <Link to="/umr/gore_attack">gore attack</Link> (1d6 damage), and two hoove attacks (1d4 damage).</Pair>
<Pair title="At 8th Level">You gain a +4 racial bonus on Acrobatics checks when jumping.</Pair>
<Pair title="At 15th Level">You gain the <Link to="/feat/awesome_blow">Awesome Blow</Link> and <Link to="/feat/improved_natural_attack">Improved Natural Attack</Link> feats for gore attacks, and you can use Awesome Blow against a creature of your size or smaller.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Gore (P), hoof (B)</Cell></Row></Block>
</>};
const _tiger = {title: "Tiger", jsx: <><h2 id="aspect-tiger-tiger">Tiger</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 31</Link><br/>The tiger is a powerful but graceful hunter of the wild, quietly stalking its prey and then taking it down with ruthless efficiency.</p>
<Ability id="minor-form" icon={["upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain a +2 enhancement bonus to your Dexterity score.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/dire_tiger">dire tiger</Link>. While in this form, you gain a base speed of 40 feet, low-light vision, <Link to="/umr/scent">scent</Link> (30 feet), a <Link to="/umr/bite_attack">bite attack</Link> (2d6 damage), two claw attacks (2d4 damage), the <Link to="/umr/grab">grab</Link> ability with both your bite and claw attacks, and <Link to="/umr/pounce">pounce</Link>.</Pair>
<Pair title="At 8th Level">You gain a +4 racial bonus on Stealth checks.</Pair>
<Pair title="At 15th Level">You gain the <Link to="/umr/rake">rake</Link> attack with your back claw attacks (dealing additional damage equal to that of your claw attack).</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S)</Cell></Row></Block>
</>};
const _wolf = {title: "Wolf", jsx: <><h2 id="aspect-wolf-wolf">Wolf</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 31</Link><br/>The aspect of the wolf provides the senses and the attacks of the mighty wolf, whose instincts are honed to track and take down its prey.</p>
<Ability id="minor-form" icon={["stairs-goal"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Ability">You gain the <Link to="/umr/scent">scent</Link> ability with a range of 10 feet, or, if you have the scent ability, the range increases by 10 feet.</Pair>
<Pair title="At 8th Level">The range of this scent or the increase to your scent increases to 20 feet.</Pair>
<Pair title="At 15th Level">It becomes 30 feet.</Pair>
<Pair title="Special">The range doubles if the opponent is upwind and is halved if the opponent is downwind.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability">Your shape changes to that of a <Link to="/monster/dire_wolf">dire wolf</Link>. While in this form, you gain a base speed of 50 feet, low-light vision, scent (30 feet), a <Link to="/umr/bite_attack">bite attack</Link> (1d8 damage), and you can make a <Link to="/rule/trip">trip</Link> attempt with your bite attack.</Pair>
<Pair title="At 8th Level">The range of your scent ability increases to 40 feet and you gain a +4 racial bonus on Survival checks when tracking with scent.</Pair>
<Pair title="At 15th Level">You gain <Link to="/feat/improved_natural_attack">Improved Natural Attack</Link> (bite).</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S)</Cell></Row></Block>
</>};
const _wolverine = {title: "Wolverine", jsx: <><h2 id="aspect-wolverine-wolverine">Wolverine</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 31</Link><br/>This aspect unlocks the brutal ferocity and tenacious fury of the wolverine. The wolverine's lust for battle invigorates its will to live, and it can press on in battle longer than its enemies expect.</p>
<Ability id="minor-form" icon={["upgrade","armor-upgrade"]}>
<Pair single id="minor-form">Minor Form</Pair>
<Pair title="Passive Ability">You gain 1 additional hit point per Hit Die you have, and treat your Constitution score as 4 points higher than it is for the purpose of determining when you die at negative hit points.</Pair>
<Pair title="At 8th Level">You gain <Link to="/feat/diehard">Diehard</Link> as a bonus feat.</Pair>
<Pair title="At 15th Level">You treat your Constitution as being 8 points higher for the purpose of determining when you die at negative hit points.</Pair>
</Ability>
<Ability id="major-form" icon={["magic-swirl","mailed-fist","stairs-goal"]}>
<Pair single id="major-form">Major Form</Pair>
<Pair title="Functions As" hl><Link to="/spell/beast_shape_ii">Beast Shape II</Link></Pair>
<Pair title="Ability"><p>Your shape changes to that of a <Link to="/monster/dire_wolverine">dire wolverine</Link>. While in this form, you gain a base speed of 30 feet, a climb speed of 10 feet, low-light vision, <Link to="/umr/scent">scent</Link> (30 feet), a <Link to="/umr/bite_attack">bite attack</Link> (1d6 damage), and two claw attacks (1d8 damage).</p>
<p>While in dire wolverine form, you gain the <Link to="/class/barbarian">barbarian's</Link> <em>rage</em> power, but can activate this rage only in a round after you've taken damage. You can <em>rage</em> for a number of rounds each day equal to your shifter level. This ability otherwise functions the same as the barbarian <em>rage</em> ability (unlike a dire wolverine, you can choose to end this rage voluntarily).</p>
</Pair>
<Pair title="At 8th Level">You can choose two barbarian <Link to="/ability/rage_powers">rage powers</Link>, treating your shifter level as your effective barbarian level for the purposes of meeting prerequisites.</Pair>
<Pair title="At 15th Level">You are no longer <Link to="/misc/fatigued">fatigued</Link> at the end of your rage.</Pair>
</Ability>
<Block size="big">
<Row><Cell>Alternate Natural Attacks</Cell><Cell>Bite (B, P, S)</Cell></Row></Block>
</>};
export default {not_found:_not_found,bat:_bat,bear:_bear,boar:_boar,bull:_bull,crocodile:_crocodile,deinonychus:_deinonychus,dolphin:_dolphin,dragonfly:_dragonfly,electric_eel:_electric_eel,elephant:_elephant,falcon:_falcon,frog:_frog,giant_wasp:_giant_wasp,horse:_horse,lion:_lion,lizard:_lizard,mantis:_mantis,monkey:_monkey,mouse:_mouse,octopus:_octopus,owl:_owl,peafowl:_peafowl,scorpion:_scorpion,snake:_snake,snapping_turtle:_snapping_turtle,spider:_spider,stag:_stag,tiger:_tiger,wolf:_wolf,wolverine:_wolverine}