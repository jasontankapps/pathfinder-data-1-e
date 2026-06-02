import {IonIcon} from '@ionic/react';
import DisplayTable from '../../components/DisplayTable';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _ranger = {hasJL:true,title: "Ranger", jsx: <><div className="jumpList" id="class-ranger-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-ranger-favored-enemy-ex">Favored Enemy</InnerLink></li><li><InnerLink toTop to="class-ranger-track-ex">Track and Empathy</InnerLink></li><li><InnerLink toTop to="class-ranger-combat-style-feat-ex">Combat Style</InnerLink></li><li><InnerLink toTop to="class-ranger-endurance">Endurance and Favored Terrain</InnerLink></li><li><InnerLink toTop to="class-ranger-hunters-bond-ex">Hunter's Bond</InnerLink></li><li><InnerLink toTop to="class-ranger-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-ranger-woodland-stride-ex">Stride, Tracking, and Evasion</InnerLink></li><li><InnerLink toTop to="class-ranger-quarry-ex">Quarry</InnerLink></li><li><InnerLink toTop to="class-ranger-camouflage-ex">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-ranger-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-ranger-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-ranger-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-ranger-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-ranger-ranger">Ranger</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 64</Link></p>
<p>For those who relish the thrill of the hunt, there are only predators and prey. Be they scouts, trackers, or bounty hunters, rangers share much in common: unique mastery of specialized weapons, skill at stalking even the most elusive game, and the expertise to defeat a wide range of quarries. Knowledgeable, patient, and skilled hunters, these rangers hound man, beast, and monster alike, gaining insight into the way of the predator, skill in varied environments, and ever more lethal martial prowess. While some track man-eating creatures to protect the frontier, others pursue more cunning game - even fugitives among their own people.</p>
<p><strong>Role:</strong> Rangers are deft skirmishers, either in melee or at range, capable of skillfully dancing in and out of battle. Their abilities allow them to deal significant harm to specific types of foes, but their skills are valuable against all manner of enemies.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d10</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>5d6 &times; 10 gp (average 175 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>6 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/ride">Ride</Link>, <Link to="/skill/stealth">Stealth</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/heal">Heal</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/survival">Survival</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/handle_animal">Handle Animal</Link>, <Link to="/skill/intimidate">Intimidate</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-ranger-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-ranger--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+1</td>
<td>+2</td>
<td>+2</td>
<td>+0</td>
<td>1st favored enemy, track, wild empathy</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>+2</td>
<td>+3</td>
<td>+3</td>
<td>+0</td>
<td>Combat style feat</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>+3</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>Endurance, 1st favored terrain</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>+4</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>Hunter's bond</td>
<td>0</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>+5</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>2nd favored enemy</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>+6/+1</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>Combat style feat</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>Woodland stride</td>
<td>1</td>
<td>0</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>+8/+3</td>
<td>+6</td>
<td>+6</td>
<td>+2</td>
<td>Swift tracker, 2nd favored terrain</td>
<td>1</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+3</td>
<td>Evasion</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>+10/+5</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>3rd favored enemy, combat style feat</td>
<td>2</td>
<td>1</td>
<td>0</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>+11/+6/+1</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>Quarry</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>+12/+7/+2</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>Camouflage</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>+13/+8/+3</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>3rd favored terrain</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>14th</td>
<td>+14/+9/+4</td>
<td>+9</td>
<td>+9</td>
<td>+4</td>
<td>Combat style feat</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>15th</td>
<td>+15/+10/+5</td>
<td>+9</td>
<td>+9</td>
<td>+5</td>
<td>4th favored enemy</td>
<td>3</td>
<td>2</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>16th</td>
<td>+16/+11/+6/+1</td>
<td>+10</td>
<td>+10</td>
<td>+5</td>
<td>Improved evasion</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>17th</td>
<td>+17/+12/+7/+2</td>
<td>+10</td>
<td>+10</td>
<td>+5</td>
<td>Hide in plain sight</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>18th</td>
<td>+18/+13/+8/+3</td>
<td>+11</td>
<td>+11</td>
<td>+6</td>
<td>4th favored terrain, combat style feat</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>19th</td>
<td>+19/+14/+9/+4</td>
<td>+11</td>
<td>+11</td>
<td>+6</td>
<td>Improved quarry</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>20th</td>
<td>+20/+15/+10/+5</td>
<td>+12</td>
<td>+12</td>
<td>+6</td>
<td>5th favored enemy, master hunter</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={2}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>Light and Medium armors</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">Yes, except tower shields</td></tr></tbody></table>
<Ability id="class-ranger-favored-enemy-ex" icon={["upgrade"]}>
<Pair single id="class-ranger-favored-enemy-ex">Favored Enemy (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You select a creature type (and, if applicable, subtype) from the ranger favored enemies list below. You gain a +2 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against creatures of your selected type. Likewise, you get a +2 bonus on weapon attack and damage rolls against them. You may make Knowledge skill checks untrained when attempting to identify these creatures.</Pair>
<Pair title="At 5th Level">You select a new favorite enemy. The bonus against any one favored enemy (including the one just selected, if so desired) increases by +2.</Pair>
<Pair title="At 10th Level">You select a new favorite enemy. The bonus against any one favored enemy (including the one just selected, if so desired) increases by +2.</Pair>
<Pair title="At 15th Level">You select a new favorite enemy. The bonus against any one favored enemy (including the one just selected, if so desired) increases by +2.</Pair>
<Pair title="At 20th Level">You select a new favorite enemy. The bonus against any one favored enemy (including the one just selected, if so desired) increases by +2.</Pair>
<Pair title="Special">If a specific creature falls into more than one category of favored enemy, your bonuses do not stack; you simply use whichever bonus is higher. Note that there are other types of humanoid to choose from - those called out specifically below are merely the most common.</Pair>
</Ability>
<div className="columnar">
<ul>
<li>Aberration</li>
<li>Animal</li>
<li>Construct</li>
<li>Dragon</li>
<li>Fey</li>
<li>Humanoid (aquatic)</li>
<li>Humanoid (dwarf)</li>
<li>Humanoid (elf)</li>
<li>Humanoid (giant)</li>
<li>Humanoid (goblinoid)</li>
<li>Humanoid (gnoll)</li>
<li>Humanoid (gnome)</li>
<li>Humanoid (halfling)</li>
<li>Humanoid (human)</li>
<li>Humanoid (orc)</li>
<li>Humanoid (reptilian)</li>
<li>Humanoid (other subtype)</li>
<li>Magical beast</li>
<li>Monstrous humanoid</li>
<li>Ooze</li>
<li>Outsider (air)</li>
<li>Outsider (chaotic)</li>
<li>Outsider (earth)</li>
<li>Outsider (evil)</li>
<li>Outsider (fire)</li>
<li>Outsider (good)</li>
<li>Outsider (lawful)</li>
<li>Outsider (native)</li>
<li>Outsider (water)</li>
<li>Plant</li>
<li>Undead</li>
<li>Vermin</li>
</ul>
</div>
<Ability id="class-ranger-track-ex" icon={["upgrade"]}>
<Pair single id="class-ranger-track-ex">Track (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You add <Link to="/misc/half">half</Link> your level (minimum 1) to Survival skill checks made to follow or identify tracks.</Pair>
</Ability>
<Ability id="class-ranger-wild-empathy-ex" icon={["stairs-goal"]}>
<Pair single id="class-ranger-wild-empathy-ex" flavor="A ranger can improve the initial attitude of an animal.">Wild Empathy (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">This ability functions just like a <Link to="/skill/diplomacy">Diplomacy</Link> check to improve the attitude of a person. You roll 1d20 and add your ranger level and your Charisma bonus to determine the wild empathy check result. The typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly. You can also use this ability to influence a magical beast with an Intelligence score of 1 or 2, but you take a -4 penalty on the check.</Pair>
<Pair title="Special">To use wild empathy, you and the animal must be within 30 feet of one another under normal visibility conditions. Generally, influencing an animal in this way takes 1 minute, but, as with influencing people, it might take more or less time.</Pair>
</Ability>
<Ability id="class-ranger-combat-style-feat-ex" icon={["stairs-goal"]}>
<Pair single id="class-ranger-combat-style-feat-ex">Combat Style Feat (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">You must select a <Link to="/ability/combat_styles">combat style</Link> to pursue. Once you select a combat style, it cannot be changed. Your expertise manifests in the form of bonus feats at 2nd, 6th, 10th, 14th, and 18th level. You can choose feats from your selected combat style, even if you do not have the normal prerequisites.</Pair>
<Pair title="Special">The benefits of your chosen style feats apply only when you wear light, medium, or no armor. You loses all benefits of your combat style feats when wearing heavy armor.</Pair>
</Ability>
<div className="sideNoteWrap singular optional elephant"><ScrollContainer id="class-ranger--table-1"><table><tbody><tr><ThLink scope="row" to="/rule/the_elephant_in_the_room"><IonIcon aria-label="The Elephant in the Room" icon="/icons/elephant.svg" /></ThLink><td><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link><br/>You can pick archery or two-weapon combat as a combat style, <Link to="/rule/teitr_ranger">as described here</Link>.</p>
</td></tr></tbody></table></ScrollContainer></div><Ability id="class-ranger-endurance" icon={["stairs-goal"]}>
<Pair single id="class-ranger-endurance">Endurance</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">You gain <Link to="/feat/endurance">Endurance</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="class-ranger-favored-terrain-ex" icon={["upgrade"]}>
<Pair single id="class-ranger-favored-terrain-ex">Favored Terrain (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability"><p>You may select a type of terrain from the list below. You gain a +2 bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival skill checks when you are in this terrain. When traveling through your favored terrain, you leave no trail and cannot be tracked (though you may leave a trail if you so choose).</p>
<ul>
<li>Cold (ice, glaciers, snow, and tundra)</li>
<li>Desert (sand and wastelands)</li>
<li>Forest (coniferous and deciduous)</li>
<li>Jungle</li>
<li>Mountain (including hills)</li>
<li>Plains</li>
<li>Planes (pick one, other than Material Plane)</li>
<li>Swamp</li>
<li>Underground (caves and dungeons)</li>
<li>Urban (buildings, streets, and sewers)</li>
<li>Water (above and below the surface)</li>
</ul>
</Pair>
<Pair title="At 8th Level">You may select a new favorite terrain. The bonuses in any one favored terrain (including the one just selected, if so desired) increase by +2.</Pair>
<Pair title="At 13th Level">You may select a new favorite terrain. The bonuses in any one favored terrain (including the one just selected, if so desired) increase by +2.</Pair>
<Pair title="At 18th Level">You may select a new favorite terrain. The bonuses in any one favored terrain (including the one just selected, if so desired) increase by +2.</Pair>
<Pair title="Special">If a specific terrain falls into more than one category of favored terrain, the ranger's bonuses do not stack; he simply uses whichever bonus is higher.</Pair>
</Ability>
<Ability id="class-ranger-hunters-bond-ex" extraClasses="hasSubs" icon={["upgrade"]}>
<Pair single id="class-ranger-hunters-bond-ex">Hunter's Bond (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">You form a bond with your hunting companions. This bond can take one of two forms. Once the form is chosen, it cannot be changed.</Pair>
</Ability>
<Ability id="class-ranger-companions-bond" extraClasses="subAbility numbered" icon={["upgrade"]}>
<Pair single id="class-ranger-companions-bond">Companions Bond</Pair>
<Pair title="Move-Equivalent Action">You grant half your favored enemy bonus against a single target of the appropriate type to all allies within 30 feet who can see or hear you. This bonus lasts for a number of rounds equal to your Wisdom modifier (minimum 1). This bonus does not stack with any favored enemy bonuses possessed by your allies; they use whichever bonus is higher.</Pair>
</Ability>
<Ability id="class-ranger-animal-companion" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="class-ranger-animal-companion">Animal Companion</Pair>
<Pair title="Ability"><p>You select an <Link to="/sidekick/animal_companion">animal companion</Link> from the list below. This animal is a loyal companion that accompanies you on your adventures as appropriate for its kind. Your animal companion shares your favored enemy and favored terrain bonuses.</p>
<p><strong className="hl">List of possible companions:</strong> <Link to="/companion/antelope">Antelope</Link>, <Link to="/companion/armorfish">Armorfish</Link>, <Link to="/companion/baboon">Baboon</Link>, <Link to="/companion/badger">Badger</Link>, <Link to="/companion/bird">Bird (Eagle, Hawk, or Owl)</Link>, <Link to="/companion/bustard">Bustard</Link>, <Link to="/companion/camel">Camel</Link>, <Link to="/companion/capybara">Capybara</Link>, <Link to="/companion/cheetah">Cheetah</Link>, <Link to="/companion/constrictor_snake">Constrictor Snake</Link>, <Link to="/companion/dire_rat">Dire Rat</Link>, <Link to="/companion/dog">Dog</Link>, <Link to="/companion/elk">Elk</Link>, <Link to="/companion/falcon">Falcon</Link>, <Link to="/companion/giant_gecko">Giant Gecko</Link>, <Link to="/companion/hobbe_hound">Hobbe Hound</Link>, <Link to="/companion/horse">Horse</Link>, <Link to="/companion/kangaroo">Kangaroo</Link>, <Link to="/companion/leopard">Leopard</Link>, <Link to="/companion/marsupial_devil">Marsupial Devil</Link>, <Link to="/companion/pony">Pony</Link>, <Link to="/companion/ram">Ram</Link>, <Link to="/companion/reef_snake">Reef Snake</Link>, <Link to="/companion/reindeer">Reindeer</Link>, <Link to="/companion/shark">Shark</Link>, <Link to="/companion/spitting_cobra">Spitting Cobra</Link>, <Link to="/companion/stag">Stag</Link>, <Link to="/companion/stingray">Stingray</Link>, <Link to="/companion/trumpeter_swan">Swan, Trumpeter</Link>, <Link to="/companion/thylacine">Thylacine</Link>, <Link to="/companion/viper">Viper</Link>, <Link to="/companion/wolf">Wolf</Link>, <Link to="/companion/wolfdog">Wolfdog</Link>, <Link to="/companion/yak">Yak</Link>, <Link to="/companion/zebra">Zebra</Link>.</p><p>If the campaign takes place wholly or partly in an aquatic environment, you may choose from <strong className="hl">this list</strong> instead: <Link to="/companion/armorfish">Armorfish</Link>, <Link to="/companion/reef_snake">Reef Snake</Link>, <Link to="/companion/shark">Shark</Link>, <Link to="/companion/stingray">Stingray</Link>.</p>
</Pair>
<Pair title="Special">This ability functions like the druid <Link to="/ability/animal_companion">animal companion</Link> ability (which is part of the Nature Bond class feature), except that your effective druid level is equal to your ranger level - 3.</Pair>
</Ability>
<Ability id="class-ranger-spells" icon={["magic-swirl"]}>
<Pair single id="class-ranger-spells">Spells</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">You gain the ability to cast a small number of divine spells which are drawn from the <Link to="/main/ranger_spell">ranger spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Wisdom modifier. You must choose and prepare your spells in advance. Like other spellcasters, you can cast only a certain number of spells of each spell level per day. In addition, you receive <Link to="/rule/bonus_spells">bonus spells per day</Link> if you have a high Wisdom score.</Pair>
<Pair title="Usage">To prepare or cast a spell, you must have a Wisdom score equal to at least 10 + the spell level.</Pair>
<Pair title="Info"><p>You must spend 1 hour each day in quiet prayer and meditation to regain your daily allotment of spells. You may prepare and cast any spell on the ranger spell list, provided that you can cast spells of that level, but you must choose which spells to prepare during your daily meditation.</p>
<p>Through 3rd level, you have no caster level. At 4th level and higher, your caster level is equal to your ranger level - 3.</p>
</Pair>
<Pair title="Special">When it is indicated that you get 0 spells per day of a given spell level, you gain only the bonus spells you would be entitled to based on your Wisdom score for that spell level.</Pair>
</Ability>
<Ability id="class-ranger-woodland-stride-ex" icon={["upgrade"]}>
<Pair single id="class-ranger-woodland-stride-ex">Woodland Stride (Ex)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">You may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at your normal speed and without taking damage or suffering any other impairment.</Pair>
<Pair title="Special">Thorns, briars, and overgrown areas that are enchanted or magically manipulated to impede motion, however, still affect you.</Pair>
</Ability>
<Ability id="class-ranger-swift-tracker-ex" icon={["upgrade"]}>
<Pair single id="class-ranger-swift-tracker-ex">Swift Tracker (Ex)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You can move at your normal speed while using Survival to follow tracks without taking the normal -5 penalty. You take only a -10 penalty (instead of the normal -20) when moving at up to twice normal speed while tracking.</Pair>
</Ability>
<Ability id="class-ranger-evasion-ex" icon={["armor-upgrade"]}>
<Pair single id="class-ranger-evasion-ex">Evasion (Ex)</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">You can avoid even magical and unusual attacks with great agility. If you make a successful Reflex saving throw against an attack that normally deals half damage on a successful save, you instead take no damage.</Pair>
<Pair title="Special">Evasion can be used only if you are wearing light armor, medium armor, or no armor. A <Link to="/misc/helpless">helpless</Link> ranger does not gain the benefit of <em>evasion.</em></Pair>
</Ability>
<Ability id="class-ranger-quarry-ex" icon={["upgrade"]}>
<Pair single id="class-ranger-quarry-ex">Quarry (Ex)</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Standard Action">You can denote one target within your line of sight as your quarry.</Pair>
<Pair title="Passive Ability">Whenever you are following the tracks of your quarry, you can take 10 on your Survival skill checks while moving at normal speed, without penalty. In addition, you receive a +2 insight bonus on attack rolls made against your quarry, and all critical threats are automatically confirmed.</Pair>
<Pair title="Special">You can have no more than one quarry at a time and the creature's type must correspond to one of your favored enemy types. You can dismiss this effect at any time as a <strong className="hl">free action</strong>, but you cannot select a new quarry for 24 hours. If you see proof that your quarry is dead, you can select a new quarry after waiting 1 hour.</Pair>
</Ability>
<Ability id="class-ranger-camouflage-ex" icon={["stairs-goal"]}>
<Pair single id="class-ranger-camouflage-ex">Camouflage (Ex)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">You can use the Stealth skill to hide in any of your favored terrains, even if the terrain doesn't grant <Link to="/rule/cover">cover</Link> or <Link to="/rule/concealment">concealment</Link>.</Pair>
</Ability>
<Ability id="class-ranger-improved-evasion-ex" icon={["armor-upgrade"]}>
<Pair single id="class-ranger-improved-evasion-ex">Improved Evasion (Ex)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Passive Ability">This ability works like evasion, except that while you still take no damage on a successful Reflex saving throw against attacks, you henceforth take only half damage on a failed save. A helpless ranger does not gain the benefit of <em>improved evasion.</em></Pair>
</Ability>
<Ability id="class-ranger-hide-in-plain-sight-ex" icon={["upgrade"]}>
<Pair single id="class-ranger-hide-in-plain-sight-ex">Hide in Plain Sight (Ex)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">While in any of your favored terrains, you can use the Stealth skill even while being observed.</Pair>
</Ability>
<Ability id="class-ranger-improved-quarry-ex" icon={["upgrade"]}>
<Pair single id="class-ranger-improved-quarry-ex">Improved Quarry (Ex)</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Free Action">You can now select a quarry as a free action.</Pair>
<Pair title="Passive Ability">You can take 20 while using Survival to track your quarry, while moving at normal speed without penalty. Your insight bonus to attack your quarry increases to +4.</Pair>
<Pair title="Special">If your quarry is killed or dismissed, you can select a new one after 10 minutes have passed.</Pair>
</Ability>
<Ability id="class-ranger-master-hunter-ex" icon={["upgrade"]}>
<Pair single id="class-ranger-master-hunter-ex">Master Hunter (Ex)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You can always move at full speed while using Survival to follow tracks without penalty.</Pair>
<Pair title="Standard Action">You can make a single attack against a favored enemy at your full attack bonus. If the attack hits, the target takes damage normally and must make a Fortitude save or die. The DC of this save is equal to 10 + 1/2 your level + your Wisdom modifier. You can choose instead to deal an amount of nonlethal damage equal to the creature's current hit points. A successful save negates this damage.</Pair>
<Pair title="Usage">You can use this ability once per day against each favored enemy type you possess, but not against the same creature more than once in a 24-hour period.</Pair>
</Ability>
<h3 id="class-ranger-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-ranger--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Great Beast (Su)</td><td>At 20th level, the character's <Link to="/sidekick/animal_companion">animal companion</Link> is a paragon of its kind - a hero and legend in its own right. The animal companion's Strength, Dexterity, Constitution, and Wisdom scores each increase by 4. This capstone is available to any class with an animal companion.</td></tr>
<tr><td>Old Dog, New Tricks (Ex)</td><td>At 20th level, the character shows that a true warrior always has one more surprise the enemy hasn't seen. The character gains four <Link to="/main/combat_feat">combat feats</Link>. This capstone is available to characters of any class that gains at least four bonus combat feats.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>Seen It Before (Ex)</td><td>At 20th level, the ranger is wise to all the tricks of his prey. The ranger adds his favored enemy bonus as an insight bonus on saves against spells and abilities used by his favored enemies.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-ranger-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Aphorite:</strong> Add 1 foot to the range of the ranger's hunter's bond ability when granting a bonus to allies. This option has no effect unless the ranger has selected it 5 times (or another increment of 5).<sup><InnerLink showBacklink="backlink-class-ranger-ref-A-1" id="class-ranger-ref-A-1" data-hash-target to="class-ranger-A">1</InnerLink></sup></p>
<p><strong>Aquatic elf:</strong> Choose a weapon from the following list: longbow, shortbow, or any weapon with "elven" in its name. Reduce the penalty on ranged attack rolls underwater made with this weapon by 1.<sup><InnerLink showBacklink="backlink-class-ranger-ref-B-1" id="class-ranger-ref-B-1" data-hash-target to="class-ranger-B">2</InnerLink></sup></p>
<p><strong>Boggard:</strong> Add 1/4 to a single existing favored terrain bonus (maximum +2 per favored terrain).<sup><InnerLink showBacklink="backlink-class-ranger-ref-C-1" id="class-ranger-ref-C-1" data-hash-target to="class-ranger-C">3</InnerLink></sup></p>
<p><strong>Catfolk:</strong> Choose a weapon from the following list: claws, kukri, longbow, longsword, short spear, or shortbow. Add +1/2 on critical hit confirmation rolls made while using that weapon (maximum bonus of +4). This bonus does not stack with <Link to="/feat/critical_focus">Critical Focus</Link>.<sup><InnerLink showBacklink="backlink-class-ranger-ref-D-1" id="class-ranger-ref-D-1" data-hash-target to="class-ranger-D">4</InnerLink></sup></p>
<p><strong>Drow:</strong> Add +1/3 to initiative checks in one of the ranger's favored terrains.<sup><InnerLink showBacklink="backlink-class-ranger-ref-E-1" id="class-ranger-ref-E-1" data-hash-target to="class-ranger-E">5</InnerLink></sup></p>
<p><strong>Duskwalker:</strong> Add 1/5 to the ranger's favored enemy bonus against undead. The ranger must have favored enemy (undead) to select this option.<sup><InnerLink showBacklink="backlink-class-ranger-ref-F-1" id="class-ranger-ref-F-1" data-hash-target to="class-ranger-F">6</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Add a +1/2 bonus on wild empathy checks to influence animals and magical beasts that live underground.<sup><InnerLink showBacklink="backlink-class-ranger-ref-G-1" id="class-ranger-ref-G-1" data-hash-target to="class-ranger-G">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-ranger-ref-H-1" id="class-ranger-ref-H-1" data-hash-target to="class-ranger-H">8</InnerLink></sup></p>
<p><strong>Elf:</strong> Choose a weapon from the following list: longbow, longsword, rapier, shortbow, short sword, or any weapon with "elven" in its name. Add +1/2 on critical hit confirmation rolls made while using that weapon (maximum bonus of +4). This bonus does not stack with Critical Focus.<sup><InnerLink showBacklink="backlink-class-ranger-ref-I-1" id="class-ranger-ref-I-1" data-hash-target to="class-ranger-I">9</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-ranger-ref-J-1" id="class-ranger-ref-J-1" data-hash-target to="class-ranger-J">10</InnerLink></sup></p>
<p><strong>Fetchling:</strong> Add a +1/2 bonus on Perception and Survival checks made on the Plane of Shadow.<sup><InnerLink showBacklink="backlink-class-ranger-ref-K-1" id="class-ranger-ref-K-1" data-hash-target to="class-ranger-K">11</InnerLink></sup></p>
<p><strong>Gathlain:</strong> Add 1/4 to the damage dealt by the ranger's animal companion's natural attacks.<sup><InnerLink showBacklink="backlink-class-ranger-ref-L-1" id="class-ranger-ref-L-1" data-hash-target to="class-ranger-L">12</InnerLink></sup></p>
<p><strong>Ghoran:</strong> Add a +1/4 bonus on initiative checks and Survival checks when the ranger is in a favored terrain.<sup><InnerLink showBacklink="backlink-class-ranger-ref-M-1" id="class-ranger-ref-M-1" data-hash-target to="class-ranger-M">13</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add DR 1/magic to the ranger's animal companion. Each additional time the ranger selects this benefit, the DR/magic increases by +1/2 (maximum DR 10/magic). If the ranger ever replaces his animal companion, the new companion gains this DR.<sup><InnerLink showBacklink="backlink-class-ranger-ref-N-1" id="class-ranger-ref-N-1" data-hash-target to="class-ranger-N">14</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-ranger-ref-O-1" id="class-ranger-ref-O-1" data-hash-target to="class-ranger-O">15</InnerLink></sup></p>
<p><strong>Goblin:</strong> Gain a +1/2 bonus on damage dealt to dogs (and dog-like creatures) and horses (and horse-like creatures).<sup><InnerLink showBacklink="backlink-class-ranger-ref-P-1" id="class-ranger-ref-P-1" data-hash-target to="class-ranger-P">16</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-ranger-ref-Q-1" id="class-ranger-ref-Q-1" data-hash-target to="class-ranger-Q">17</InnerLink></sup></p>
<p><strong>Grippli:</strong> Add a +1 racial bonus on Swim skill checks. When this bonus reaches +8, the ranger gains a swim speed of 15 feet (this does not grant the ranger another +8 racial bonus on Swim checks).<sup><InnerLink showBacklink="backlink-class-ranger-ref-R-1" id="class-ranger-ref-R-1" data-hash-target to="class-ranger-R">18</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add +1 skill rank to the ranger's animal companion. If the ranger ever replaces his companion, the new companion gains these bonus skill ranks.<sup><InnerLink showBacklink="backlink-class-ranger-ref-S-1" id="class-ranger-ref-S-1" data-hash-target to="class-ranger-S">19</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-ranger-ref-T-1" id="class-ranger-ref-T-1" data-hash-target to="class-ranger-T">20</InnerLink></sup></p>
<p><strong>Half-elf:</strong> The duration of the ranger's companion bond increases by 1 round.<sup><InnerLink showBacklink="backlink-class-ranger-ref-U-1" id="class-ranger-ref-U-1" data-hash-target to="class-ranger-U">21</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add a +1/4 dodge bonus to Armor Class against the ranger's favored enemies.<sup><InnerLink showBacklink="backlink-class-ranger-ref-V-1" id="class-ranger-ref-V-1" data-hash-target to="class-ranger-V">22</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-ranger-ref-W-1" id="class-ranger-ref-W-1" data-hash-target to="class-ranger-W">23</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add +1 hit point to the ranger's animal companion. If the ranger ever replaces his animal companion, the new animal companion gains these bonus hit points.<sup><InnerLink showBacklink="backlink-class-ranger-ref-X-1" id="class-ranger-ref-X-1" data-hash-target to="class-ranger-X">24</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-ranger-ref-Y-1" id="class-ranger-ref-Y-1" data-hash-target to="class-ranger-Y">25</InnerLink></sup></p>
<p><strong>Hobgoblin:</strong> Add +1/4 to a single existing favored enemy bonus (maximum bonus +1 per favored enemy).<sup><InnerLink showBacklink="backlink-class-ranger-ref-Z-1" id="class-ranger-ref-Z-1" data-hash-target to="class-ranger-Z">26</InnerLink></sup></p>
<p><strong>Human:</strong> Add +1 hit point or +1 skill rank to the ranger's animal companion. If the ranger ever replaces his companion, the new companion gains these bonus hit points or skill ranks.<sup><InnerLink showBacklink="backlink-class-ranger-ref-1-1" id="class-ranger-ref-1-1" data-hash-target to="class-ranger-1">27</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-ranger-ref-2-1" id="class-ranger-ref-2-1" data-hash-target to="class-ranger-2">28</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-ranger-ref-3-1" id="class-ranger-ref-3-1" data-hash-target to="class-ranger-3">29</InnerLink></sup></p>
<p><strong>Kobold:</strong> Add +1/4 to the number of opponents the ranger may select when using hunter's bond to grant a bonus to allies. All selected creatures must be of the same type.<sup><InnerLink showBacklink="backlink-class-ranger-ref-4-1" id="class-ranger-ref-4-1" data-hash-target to="class-ranger-4">30</InnerLink></sup></p>
<p><strong>Locathah:</strong> Add 1 skill rank to the ranger's animal companion. If the ranger ever replaces his animal companion, the new animal companion gains these bonus skill ranks.<sup><InnerLink showBacklink="backlink-class-ranger-ref-5-1" id="class-ranger-ref-5-1" data-hash-target to="class-ranger-5">31</InnerLink></sup></p>
<p><strong>Merfolk:</strong> Add +1 hit point to the ranger's animal companion. If the ranger ever replaces his animal companion, the new animal companion gains these bonus hit points.<sup><InnerLink showBacklink="backlink-class-ranger-ref-6-1" id="class-ranger-ref-6-1" data-hash-target to="class-ranger-6">32</InnerLink></sup></p>
<p><strong>Nagaji:</strong> Add 1 skill rank to the ranger's constrictor snake or viper snake animal companion.<sup><InnerLink showBacklink="backlink-class-ranger-ref-7-1" id="class-ranger-ref-7-1" data-hash-target to="class-ranger-7">33</InnerLink></sup></p>
<p><strong>Orc:</strong> Add +1 hit point to the ranger's animal companion. If the ranger ever replaces his animal companion, the new animal companion gains these bonus hit points.<sup><InnerLink showBacklink="backlink-class-ranger-ref-8-1" id="class-ranger-ref-8-1" data-hash-target to="class-ranger-8">34</InnerLink></sup></p>
<p><strong>Oread:</strong> Add +1/4 to the natural armor bonus of the ranger's animal companion. If the ranger ever replaces his animal companion, the new animal companion gains this bonus.<sup><InnerLink showBacklink="backlink-class-ranger-ref-9-1" id="class-ranger-ref-9-1" data-hash-target to="class-ranger-9">35</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Add +1 to an animal companion's CMD when adjacent to the ranger. If the ranger ever replaces his animal companion, the new animal companion gains this bonus.<sup><InnerLink showBacklink="backlink-class-ranger-ref-0-1" id="class-ranger-ref-0-1" data-hash-target to="class-ranger-0">36</InnerLink></sup></p>
<p><strong>Shabti:</strong> Add 1/4 to a single existing favored terrain bonus (maximum bonus +1 per favored terrain).<sup><InnerLink showBacklink="backlink-class-ranger-ref-!-1" id="class-ranger-ref-!-1" data-hash-target to="class-ranger-!">37</InnerLink></sup></p>
<p><strong>Strix:</strong> Add +1/2 round to the duration of the bonus granted to the companions of the ranger using his hunter's bond ability.<sup><InnerLink showBacklink="backlink-class-ranger-ref-%40-1" id="class-ranger-ref-%40-1" data-hash-target to="class-ranger-%40">38</InnerLink></sup></p>
<p><strong>Suli:</strong> Add +1 to acid resistance, cold resistance, electricity resistance, or fire resistance.<sup><InnerLink showBacklink="backlink-class-ranger-ref-%26-1" id="class-ranger-ref-%26-1" data-hash-target to="class-ranger-%26">39</InnerLink></sup></p>
<p><strong>Svirfneblin:</strong> Add DR 1/magic to the ranger's animal companion. Each additional time the ranger selects this benefit, the DR/magic increases +1/2 (maximum DR 10/magic). If the ranger ever replaces his animal companion, the new companion gains this DR.<sup><InnerLink showBacklink="backlink-class-ranger-ref-%25-1" id="class-ranger-ref-%25-1" data-hash-target to="class-ranger-%25">40</InnerLink></sup></p>
<p><strong>Vanara:</strong> Add +1/4 dodge bonus to Armor Class against the ranger's favored enemies.<sup><InnerLink showBacklink="backlink-class-ranger-ref-%23-1" id="class-ranger-ref-%23-1" data-hash-target to="class-ranger-%23">41</InnerLink></sup></p>
<p><strong>Vine leshy:</strong> Add a +1/2 bonus to Knowledge (nature) checks in the ranger's favored terrain.<sup><InnerLink showBacklink="backlink-class-ranger-ref-%3B-1" id="class-ranger-ref-%3B-1" data-hash-target to="class-ranger-%3B">42</InnerLink></sup></p>
<p><strong>Wayang:</strong> Gain 1/6 of an additional favored terrain. Gaining a favored terrain in this manner does not increase the bonuses provided by his other favored terrains.<sup><InnerLink showBacklink="backlink-class-ranger-ref-%3F-1" id="class-ranger-ref-%3F-1" data-hash-target to="class-ranger-%3F">43</InnerLink></sup></p>
</div>
<h3 id="class-ranger-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-ranger/abendego_diver">Abendego Diver</Link></p><p><strong>Modifies or Replaces:</strong> Weapon and Armor Proficiencies; Track; Wild Empathy; Favored Terrain; Woodland Stride; Swift Tracker; Master Hunter</p><p>Named for the vicious and unending storm in the southern Arcadian Ocean, Abendego divers have pushed their bodies to their limits, holding their breath to expand their lung capacity and swimming until ocean travel is second nature to them.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/battle_scout">Battle Scout</Link></p><p><strong>Modifies or Replaces:</strong> Hunter's Bond; 2nd, 3rd, 4th Favored Enemies; Master Hunter</p><p>Though regular outdoorsmen might suffice in many cases, some large forces look to battle scouts to keep the body of their troops safe and prepared for the terrain and whatever dangers that terrain hides.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/beast_master">Beast Master</Link></p><p><strong>Modifies or Replaces:</strong> Hunter's Bond; 6th-level Combat Style Feat; Camouflage</p><p>Some rangers, particularly those in primitive lands or who were raised by animals, have unusually strong bonds with animals.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/blightwarden">Blightwarden</Link></p><p><strong>Modifies or Replaces:</strong> Favored Enemy; Wild Empathy; 1st Favored Terrain; Endurance</p><p>Some rangers feel so closely connected to their homelands that they stand as guardians against pervasive corruptions that pervert those lands beyond the point of recognition.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/bow_nomad">Bow Nomad</Link></p><p><strong>Modifies or Replaces:</strong> Wild Empathy; Combat Style; Endurance; Favored Terrain; 6th-level Combat Feat; Camouflage; Hide in Plain Sight</p><p>(Kasatha Only) Thanks to their four arms, kasathas can master a combat form native to their home world and rarely witnessed on Golarion - wielding two bows at once.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/cinderwalker">Cinderwalker</Link></p><p><strong>Modifies or Replaces:</strong> 1st Favored Terrain; Wild Empathy; Hunter's Bond; Woodland Stride</p><p>Cinderwalkers traverse burning wastelands and restless mountains, thriving in lands most creatures avoid.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/code_runner">Code Runner</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Wild Empathy; Hunter's Bond</p><p>A code runner specializes in the subtle and speedy transfer of secret messages.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/corpse_hunter">Corpse Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Spells; Favored Enemies; Woodland Stride; Swift Tracker</p><p>Many rangers count the undead among their favored enemies, but some make a full-time job out of hunting down and destroying these walking corpses.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/dandy">Dandy</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Favored Enemy; Wild Empathy; Favored Terrain; Hunter's Bond; Spellcasting; Woodland Stride</p><p>The antithesis of the gruff and wild woodsmen, a dandy takes effort to master the subtle etiquette of noble courts, the whispers of dark rumors, and the customs of the cultured world.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/darklands_sailor">Darklands Sailor</Link></p><p><strong>Modifies or Replaces:</strong> Track; Favored Terrain; Woodland Stride; Swift Tracker; Camouflage; Hide in Plain Sight</p><p>Those plying the lightless waters of the Darklands learn to use sound to augment their compromised vision, providing insight into the hazards lurking below the surface.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/deep_walker">Deep Walker</Link></p><p><strong>Modifies or Replaces:</strong> Favored Terrain; Woodland Stride; Camouflage; Hide in Plain Sight</p><p>Some rangers devote their lives to the woods, becoming hunters, protectors, and wilderness guides among its diverse terrain types.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/divine_tracker">Divine Tracker</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Wild Empathy; Hunter's Bond</p><p>Blessed by his deity, a divine tracker hunts down those he deems deserving of his retribution.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/dragon_hunter">Dragon Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Track; 5th, 10th, 15th, 20th-level Favored Enemies</p><p>The quintessential dragonslayers, dragon hunters are experts at forging through the wilds in search of great wyrms.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/drake_warden">Drake Warden</Link></p><p><strong>Modifies or Replaces:</strong> Hunter's Bond; 2nd Favored Enemy; Swift Tracker</p><p>Some rangers specialize in dealing with rambunctious younger drakes and thanks to their methods, their drakes are both fiercely loyal and extremely useful for scouting and stealth missions.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/dungeon_rover">Dungeon Rover</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Track; Wild Empathy; Hunter's Bond; Woodland Stride; Swift Tracker</p><p>These rangers specialize in surviving hostile subterranean environs. They are well equipped to avoid traps, spot secret passages, and deal with inimical dungeon tenants.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/dusk_stalker">Dusk Stalker</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Favored Terrain; Hunter's Bond; Camouflage</p><p>(Fetchling Only) Hunters and guides through the Shadow Plane, dusk stalkers are rangers that thrive in shadow.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/elemental_envoy">Elemental Envoy</Link></p><p><strong>Modifies or Replaces:</strong> Combat Style; Favored Terrain</p><p>An elemental envoy travels the Elemental Planes. He has learned to protect himself from their many dangers, and he models his fighting style after their teachings.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/falconer">Falconer</Link></p><p><strong>Modifies or Replaces:</strong> Wild Empathy; Hunter's Bond; 6th-level Combat Style Feat</p><p>Rangers have always enjoyed a special bond with a specific animal, but the falconer takes this bond to a deeper level.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/flamewarden">Flamewarden</Link></p><p><strong>Modifies or Replaces:</strong> Hunter's Bond; Spells; Evasion; Camouflage; Improved Evasion; Master Hunter</p><p>Emulating the blazing phoenix, flamewardens sweep through the world like a selective forest fire, burning away corruption, evil, and those who cling to decay.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/fortune_finder">Fortune-Finder</Link></p><p><strong>Modifies or Replaces:</strong> Track; Hunter's Bond; Woodland Stride; Quarry; Improved Quarry; Master Hunter</p><p>Vanaras often leave home to seek fortune and sate their curiosity regarding the mysterious lands that lie beyond their native territories. The most skilled of these thrillseekers are called ba-sadhaks, or fortune-finders.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/freebooter">Freebooter</Link></p><p><strong>Modifies or Replaces:</strong> Favored Enemy; Hunter's Bond; Woodland Stride</p><p>A freebooter is a natural leader, a pirate who works well with a variety of people and in a variety of roles.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/galvanic_saboteur">Galvanic Saboteur</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Favored Enemy; Wild Empathy; Favored Terrain; Woodland Stride; Swift Tracker; Camouflage; Hide in Plain Sight</p><p>Many Kellid locals blame Kevoth-Kul's change on the influence of the Technic League and view both the League and their mechanical minions with a mix of fear and distrust. Some Kellid rangers have since developed skills to defeat the League's robotic enforcers and devious arcanists.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/groom">Groom</Link></p><p><strong>Modifies or Replaces:</strong> Track; Endurance; 1st Favored Terrain</p><p>The groom attends to the needs of the party's mounts and beasts of burden during their adventures, and guards these animals while the party goes underground.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/guide">Guide</Link></p><p><strong>Modifies or Replaces:</strong> Favored Enemy; Hunter's Bond; Evasion; Quarry; Improved Quarry; Improved Evasion</p><p>Many rangers are loners, but some choose to use their familiarity with the land to guide others safely through the wilderness.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/guildbreaker">Guildbreaker</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Favored Enemy; Wild Empathy; Hunter's Bond; Woodland Stride</p><p>Guildbreakers stoke their enmity for their foes, and they train to track the movements of rival organizations, and even to infiltrate these groups to gather secret intelligence.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/hooded_champion">Hooded Champion</Link></p><p><strong>Modifies or Replaces:</strong> 1st-level Favored Enemy; Combat Style; Wild Empathy; Endurance; Evasion; Improved Evasion</p><p>The hooded champion lives on the periphery of civilized lands, and is often at odds with the forces of law and order.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/horse_lord">Horse Lord</Link></p><p><strong>Modifies or Replaces:</strong> Hunter's Bond; Camouflage; Hide in Plain Sight</p><p>Rangers of the plains use horses or other riding beasts to hunt their lands, forging a near-mystical relationship with their mounts.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/ilsurian_archer">Ilsurian Archer</Link></p><p><strong>Modifies or Replaces:</strong> Track; Wild Empathy; Combat Style; Spellcasting; Swift Tracker; Quarry; Improved Quarry</p><p>Ilsurian archers maintain the strong tradition of archery first developed by soldiers in the service of Ilsur, who raised a small army with which he intended to overthrow the monarch of Korvosa after the fall of the Chelish Empire.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/infiltrator">Infiltrator</Link></p><p><strong>Modifies or Replaces:</strong> Favored Terrain</p><p>Some rangers study their favored enemies and learn their ways, applying this knowledge to their own abilities and using their foes' strengths against them.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/jungle_lord">Jungle Lord</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Weapon and Armor Proficiency; Favored Enemy; Favored Terrain; Hunter's Bond; Spells; 5th, 10th, 15th, 18th-level Favored Terrain; Quarry; Improved Quarry; Camouflage; Master Hunter</p><p>Jungle lords are tempered by their harsh and unforgiving environments into something more than ordinary men and women.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/lantern_lighter">Lantern Lighter</Link></p><p><strong>Modifies or Replaces:</strong> Wild Empathy; Endurance; Favored Terrain; Woodland Stride; Camouflage; Hide in Plain Sight</p><p>Lantern lighters were originally entrusted with secretly eliminating the drow and quarantining any knowledge of their existence, but in the new Lantern Bearer era, the lantern lighters have refocused their efforts on helping to rescue those imprisoned by the drow, or even to help individual drow who seek to escape the cruelties of their society for a chance at redemption on the surface.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/nirmathi_irregular">Nirmathi Irregular</Link></p><p><strong>Modifies or Replaces:</strong> Normal Weapon/Armor Proficiencies; Favored Enemy; Favored Terrain; Altered Spell List</p><p>An irregular troop from Nirmathas, this ranger chooses to focus on the magic of stealth.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/planar_scout">Planar Scout</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Wild Empathy; Favored Terrain; Hunter's Bond; Evasion; Improved Evasion</p><p>Planar scouts are rangers specializing in traversing the planes - and surviving their journeys.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/poison_darter">Poison Darter</Link></p><p><strong>Modifies or Replaces:</strong> Favored Enemy; Wild Empathy; Combat Style; Hunter's Bond; Master Hunter</p><p>(Grippli) In dense jungles, foliage and tight spaces hinder all but the most deceptively humble weapons: blowguns and poison.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/raven_master">Raven Master</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Wild Empathy; Hunter's Bond; Woodland Stride; Swift Tracker; Camouflage; Spellcasting</p><p>Raven masters serve as messengers and spies for the Silver Ravens, eschewing a ranger's usual connection to the natural world to form a mystic bond with their birds and to grant both animal and master a number of specialized abilities</p></div>
<div className="archetype"><p><Link to="/arc-ranger/realm_wanderer">Realm Wanderer</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Track; Hunter's Bond; Swift Tracker; Master Hunter</p><p>These rangers take to heart the lessons they've learned from their vastly contrasting experiences and know that creatively embracing this wisdom is sometimes the difference between life and death.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/sable_company_marine">Sable Company Marine</Link></p><p><strong>Modifies or Replaces:</strong> Hunter's Bond</p><p>Sable Company marines receive their training at the elite Endrin Military Academy in Korvosa. A large portion of their education is the handling and riding of hippogriffs, the iconic mounts of members of the company.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/sentinel">Sentinel</Link></p><p><strong>Modifies or Replaces:</strong> Wild Empathy; Hunter's Bond; Woodland Stride; 6th-level Combat Style Feat; Quarry; Improved Quarry</p><p>A sentinel specializes in heightening all of her senses to expose spies and those who work for opposing factions, rooting out all who attempt to slip past her evervigilant watch.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/shapeshifter">Shapeshifter</Link></p><p><strong>Modifies or Replaces:</strong> Favored Terrain; Camouflage; Master Hunter</p><p>Most rangers venture into the wilderness, but there are some who let the wilderness seep into them.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/skirmisher">Skirmisher</Link></p><p><strong>Modifies or Replaces:</strong> Spells</p><p>Many rangers rely on spells, but there are some who eschew aid from divine powers for their own reasons.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/spirit_ranger">Spirit Ranger</Link></p><p><strong>Modifies or Replaces:</strong> Hunter's Bond; Camouflage</p><p>Some rangers nurture a connection with the spirits that reside in all things.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/stormwalker">Stormwalker</Link></p><p><strong>Modifies or Replaces:</strong> Combat Style; Hunter's Bond; Swift Tracker; Quarry; Improved Evasion; Improved Quarry</p><p>Rangers who walk in the tempest unafraid draw the power of the storm into themselves and become stormwalkers.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/summit_sentinel">Summit Sentinel</Link></p><p><strong>Modifies or Replaces:</strong> Combat Style; Favored Terrain; Swift Tracker; Hide in Plain Sight</p><p>Some rangers eschew the path of the swift skirmisher and embrace the implacable strength of the mountain.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/sword_devil">Sword-Devil</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Favored Enemy; Favored Terrain; Hunter's Bond; Spells; Quarry; Improved Quarry; Master Hunter</p><p>Agile, vengeful, and deadly, a sword-devil fights with precision and grace, channeling the difficult lessons of a star-crossed life into unparalleled battle prowess.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/tanglebriar_demonslayer">Tanglebriar Demonslayer</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Favored Enemy; Endurance; Spells; Quarry; Improved Quarry</p><p>Though they are sworn foes of Treerazer and his kin, Tanglebriar demonslayers are known to venture forth from Kyonin to broaden their expertise in the destruction of demons.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/tidal_hunter">Tidal Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Wild Empathy; 6th-level Combat Style Feat; Track; Camouflage; Favored Terrain; Woodland Stride; Improved Evasion</p><p>The tidal hunter draws strength from the fish and other wildlife of the deep.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/toxic_herbalist">Toxic Herbalist</Link></p><p><strong>Modifies or Replaces:</strong> Wild Empathy; Endurance; Hunter's Bond; Swift Tracker; Quarry; Improved Quarry</p><p>Saviors and destroyers in equal measure, toxic herbalists use nature's bounty to craft remedies and poisons.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/toxophilite">Toxophilite</Link></p><p><strong>Modifies or Replaces:</strong> Wild Empathy; Combat Style; Endurance; Quarry; Improved Quarry</p><p>The toxophilite emulates the sharpshooting rangers of legend, who could pin a fly to the wall with a single shot or split one arrow with another.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/transporter">Transporter</Link></p><p><strong>Modifies or Replaces:</strong> Wild Empathy; Favored Terrain; Hunter's Bond; Woodland Stride</p><p>Transporters specialize in smuggling people as efficiently as possible through harsh and difficult environments.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/trapper">Trapper</Link></p><p><strong>Modifies or Replaces:</strong> Spells</p><p>A trapper is a ranger who focuses exclusively on traps, rather than learning conventional magic.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/trophy_hunter">Trophy Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Wild Empathy; Combat Feat Style; Hunter's Bond</p><p>Some rangers have taken up the mysteries of black powder in order to become big game hunters.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/urban_ranger">Urban Ranger</Link></p><p><strong>Modifies or Replaces:</strong> Favored Terrain; Endurance; Woodland Stride; Camouflage; Hide in Plain Sight</p><p>For the urban ranger, the streets and sewers of the city are just as dangerous as the barren wastelands or the deep forests.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/warden">Warden</Link></p><p><strong>Modifies or Replaces:</strong> Favored Enemy; Combat Style Feats; Hunter's Bond; Master Hunter</p><p>All rangers have a bond with the wilderness, but the warden may have the strongest. This protector sits guard in the middle of the wilderness, keeping a lookout for any dangers that might spill from the deeper wilderness beyond, and protecting civilization from the savagery of nature - and vice versa.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/wave_warden">Wave Warden</Link></p><p><strong>Modifies or Replaces:</strong> Track; Combat Style; Favored Terrain; Woodland Stride; Swift Tracker</p><p>(Merfolk Only) The wave warden patrols beneath the sea, preserving the safety and secrets of merfolk communities.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/wild_hunter">Wild Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Favored Enemy; Woodland Stride; Swift Tracker</p><p>A wild hunter seeks to emulate the animals around him to keep him safe while he tracks his prey.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/wild_shadow">Wild Shadow</Link></p><p><strong>Modifies or Replaces:</strong> Track; Wild Empathy; Favored Terrain; Hunter's Bond; Woodland Stride; Quarry; Camouflage; Improved Quarry</p><p>(Half-Elf Only) The isolation that some half-elves feel leads them to live a life of isolation amid the wild places of the world.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/wild_soul">Wild Soul</Link></p><p><strong>Modifies or Replaces:</strong> Code of Conduct; Favored Enemy; Swift Tracker; Quarry; Improved Quarry; Master Hunter</p><p>Wild souls hail from primitive roots in the wild and venture to more civilized lands and learn their ways.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/wild_stalker">Wild Stalker</Link></p><p><strong>Modifies or Replaces:</strong> Favored Enemy; 2nd-level Combat Style Feat; Hunter's Bond</p><p>The wild stalker forsakes the bonds of community and lives in the trackless wilds far from others of his kind, or perhaps grew up there, never knowing of civilization as anything more than his enemy.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/wilderness_explorer">Wilderness Explorer</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Wild Empathy; Hunter's Bond; Swift Tracker; Favored Terrain; Quarry; Improved Quarry</p><p>Wilderness explorers are adept at making peaceful contact with remote societies.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/wilderness_medic">Wilderness Medic</Link></p><p><strong>Modifies or Replaces:</strong> Wild Empathy; Endurance; Evasion; Hunter's Bond; Improved Evasion</p><p>Wilderness medics know a variety of ways they can supply and preserve a rebellion or similar movement without requiring any resources that might make them easier to track down.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/witchguard">Witchguard</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Hunter's Bond; Endurance; Spells; Woodland Stride</p><p>Witchguards are the sworn defenders of the White Witches of Irrisen.</p></div>
<div className="archetype"><p><Link to="/arc-ranger/yokai_hunter">Yokai Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Favored Enemy; Woodland Stride; Camouflage</p><p>Yokai hunters possess a supernatural tether to the spirit worlds that shroud mortal existence.</p></div>
<h3 id="class-ranger-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"ranger archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Camouflage"},{"header":"Class Skills"},{"header":"Combat Style Feats"},{"header":"2nd-level Combat Style Feat"},{"header":"6th-level Combat Style Feat"},{"header":"Endurance"},{"header":"Evasion"},{"header":"Favored Enemy"},{"header":"1st-Level Favored Enemy"},{"header":"5th-Level Favored Enemy"},{"header":"10th-Level Favored Enemy"},{"header":"15th-Level Favored Enemy"},{"header":"20th-Level Favored Enemy"},{"header":"Favored Terrain"},{"header":"3rd-Level Favored Terrain"},{"header":"Hide in Plain Sight"},{"header":"Hunter's Bond"},{"header":"Improved Evasion"},{"header":"Master Hunter"},{"header":"Quarry"},{"header":"Improved Quarry"},{"header":"Spellcasting"},{"header":"Swift Tracker"},{"header":"Track"},{"header":"Weapon/Armor Proficiency"},{"header":"Wild Empathy"},{"header":"Woodland Stride"}],"data":[["‹arc-ranger/Abendego Diver›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,"X","X","X","X","X"],["‹arc-ranger/Battle Scout›",null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,"X","X",null,null,null,null,null,null,null,null],["‹arc-ranger/Beast Master›",null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-ranger/Blightwarden›",null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null],["‹arc-ranger/Bow Nomad›",null,"X",null,"X",null,"X","X",null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,"X",null],["‹arc-ranger/Cinderwalker›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,"X","X"],["‹arc-ranger/Code Runner›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null],["‹arc-ranger/Corpse Hunter›",null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,"X"],["‹arc-ranger/Dandy›",null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,"X",null,null,null,"X",null,null,null,"X","X"],["‹arc-ranger/Darklands Sailor›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,"X","X",null,null,"X"],["‹arc-ranger/Deep Walker›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,"X"],["‹arc-ranger/Divine Tracker›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null],["‹arc-ranger/Dragon Hunter›",null,null,"X",null,null,null,null,null,null,null,null,"X","X","X","X",null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-ranger/Drake Warden›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-ranger/Dungeon Rover›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,"X","X"],["‹arc-ranger/Dusk Stalker›",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-ranger/Elemental Envoy›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-ranger/Falconer›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null],["‹arc-ranger/Flamewarden›",null,"X",null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,"X","X",null,null,"X",null,null,null,null,null],["‹arc-ranger/Fortune-Finder›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X","X",null,null,"X",null,null,"X"],["‹arc-ranger/Freebooter›",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X"],["‹arc-ranger/Galvanic Saboteur›",null,"X","X",null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,"X",null,null,null,null,null,"X",null,null,"X","X"],["‹arc-ranger/Groom›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null],["‹arc-ranger/Guide›",null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,"X",null,"X","X",null,null,null,null,null,null],["‹arc-ranger/Guildbreaker›",null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X","X"],["‹arc-ranger/Hooded Champion›",null,null,null,"X",null,null,"X","X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-ranger/Horse Lord›",null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null],["‹arc-ranger/Ilsurian Archer›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X","X","X",null,"X",null],["‹arc-ranger/Infiltrator›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-ranger/Jungle Lord›",null,"X","X",null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,"X","X","X","X","X",null,null,"X",null,null],["‹arc-ranger/Lantern Lighter›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,"X","X"],["‹arc-ranger/Nirmathi Irregular›",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,"X",null,null],["‹arc-ranger/Planar Scout›",null,null,"X",null,null,null,null,"X","X",null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,"X",null],["‹arc-ranger/Poison Darter›",null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,"X",null],["‹arc-ranger/Raven Master›",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X","X",null,null,"X","X"],["‹arc-ranger/Realm Wanderer›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,"X","X",null,null,null],["‹arc-ranger/Sable Company Marine›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-ranger/Sentinel›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X","X",null,null,null,null,"X","X"],["‹arc-ranger/Shapeshifter›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-ranger/Skirmisher›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-ranger/Spirit Ranger›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-ranger/Stormwalker›",null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,"X","X",null,"X",null,null,null,null],["‹arc-ranger/Summit Sentinel›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,"X",null,null,null,null],["‹arc-ranger/Sword-Devil›",null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,"X","X","X","X","X",null,null,null,null,null],["‹arc-ranger/Tanglebriar Demonslayer›",null,null,"X",null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null],["‹arc-ranger/Tidal Hunter›",null,"X",null,null,null,"X",null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,"X","X"],["‹arc-ranger/Toxic Herbalist›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,"X","X",null,"X",null,null,"X",null],["‹arc-ranger/Toxophilite›",null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,"X",null],["‹arc-ranger/Transporter›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,"X","X"],["‹arc-ranger/Trapper›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-ranger/Trophy Hunter›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null],["‹arc-ranger/Urban Ranger›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,"X"],["‹arc-ranger/Warden›",null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null],["‹arc-ranger/Wave Warden›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X","X",null,null,"X"],["‹arc-ranger/Wild Hunter›",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X"],["‹arc-ranger/Wild Shadow›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,"X","X",null,null,"X",null,"X","X"],["‹arc-ranger/Wild Soul›",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X","X","X",null,"X",null,null,null,null],["‹arc-ranger/Wild Stalker›",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-ranger/Wilderness Explorer›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,"X","X",null,"X",null,null,"X",null],["‹arc-ranger/Wilderness Medic›",null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null],["‹arc-ranger/Witchguard›",null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,"X"],["‹arc-ranger/Yokai Hunter›",null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X"]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-ranger-label">Footnotes</h3>
<ol>
<li id="class-ranger-A">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 15</Link> <InnerLink id="backlink-class-ranger-ref-A-1" data-hash-target to="class-ranger-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-ranger-B">
<p><Link to="/source/blood_of_the_sea">Blood of the Sea pg. 5</Link> <InnerLink id="backlink-class-ranger-ref-B-1" data-hash-target to="class-ranger-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-ranger-C">
<p><Link to="/source/monster_codex">Monster Codex pg. 8</Link> <InnerLink id="backlink-class-ranger-ref-C-1" data-hash-target to="class-ranger-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-ranger-D">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 92</Link> <InnerLink id="backlink-class-ranger-ref-D-1" data-hash-target to="class-ranger-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-ranger-E">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 15</Link> <InnerLink id="backlink-class-ranger-ref-E-1" data-hash-target to="class-ranger-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-ranger-F">
<p>Plane-Hopper's Handbook pg. 17 <InnerLink id="backlink-class-ranger-ref-F-1" data-hash-target to="class-ranger-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-ranger-G">
<p>Advanced Race Guide pg. 13 <InnerLink id="backlink-class-ranger-ref-G-1" data-hash-target to="class-ranger-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-ranger-H">
<p><Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 11</Link> <InnerLink id="backlink-class-ranger-ref-H-1" data-hash-target to="class-ranger-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-ranger-I">
<p>Advanced Race Guide pg. 23 <InnerLink id="backlink-class-ranger-ref-I-1" data-hash-target to="class-ranger-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-ranger-J">
<p>Advanced Player's Guide pg. 13 <InnerLink id="backlink-class-ranger-ref-J-1" data-hash-target to="class-ranger-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-ranger-K">
<p>Advanced Race Guide pg. 109 <InnerLink id="backlink-class-ranger-ref-K-1" data-hash-target to="class-ranger-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-ranger-L">
<p><Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 10</Link> <InnerLink id="backlink-class-ranger-ref-L-1" data-hash-target to="class-ranger-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-ranger-M">
<p>Ultimate Wilderness pg. 17 <InnerLink id="backlink-class-ranger-ref-M-1" data-hash-target to="class-ranger-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
<li id="class-ranger-N">
<p>Advanced Race Guide pg. 33 <InnerLink id="backlink-class-ranger-ref-N-1" data-hash-target to="class-ranger-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="class-ranger-O">
<p>Advanced Player's Guide pg. 15 <InnerLink id="backlink-class-ranger-ref-O-1" data-hash-target to="class-ranger-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="class-ranger-P">
<p>Advanced Race Guide pg. 115 <InnerLink id="backlink-class-ranger-ref-P-1" data-hash-target to="class-ranger-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
<li id="class-ranger-Q">
<p><Link to="/source/goblins_of_golarion">Goblins of Golarion pg. 31</Link> <InnerLink id="backlink-class-ranger-ref-Q-1" data-hash-target to="class-ranger-ref-Q-1" aria-label="Back to reference Q-1">↩</InnerLink></p>
</li>
<li id="class-ranger-R">
<p>Advanced Race Guide pg. 190 <InnerLink id="backlink-class-ranger-ref-R-1" data-hash-target to="class-ranger-ref-R-1" aria-label="Back to reference R-1">↩</InnerLink></p>
</li>
<li id="class-ranger-S">
<p>Advanced Race Guide pg. 43 <InnerLink id="backlink-class-ranger-ref-S-1" data-hash-target to="class-ranger-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink></p>
</li>
<li id="class-ranger-T">
<p>Advanced Player's Guide pg. 17 <InnerLink id="backlink-class-ranger-ref-T-1" data-hash-target to="class-ranger-ref-T-1" aria-label="Back to reference T-1">↩</InnerLink></p>
</li>
<li id="class-ranger-U">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 40</Link> <InnerLink id="backlink-class-ranger-ref-U-1" data-hash-target to="class-ranger-ref-U-1" aria-label="Back to reference U-1">↩</InnerLink></p>
</li>
<li id="class-ranger-V">
<p>Advanced Race Guide pg. 63 <InnerLink id="backlink-class-ranger-ref-V-1" data-hash-target to="class-ranger-ref-V-1" aria-label="Back to reference V-1">↩</InnerLink></p>
</li>
<li id="class-ranger-W">
<p>Advanced Player's Guide pg. 21 <InnerLink id="backlink-class-ranger-ref-W-1" data-hash-target to="class-ranger-ref-W-1" aria-label="Back to reference W-1">↩</InnerLink></p>
</li>
<li id="class-ranger-X">
<p>Advanced Race Guide pg. 53 <InnerLink id="backlink-class-ranger-ref-X-1" data-hash-target to="class-ranger-ref-X-1" aria-label="Back to reference X-1">↩</InnerLink></p>
</li>
<li id="class-ranger-Y">
<p>Advanced Player's Guide pg. 19 <InnerLink id="backlink-class-ranger-ref-Y-1" data-hash-target to="class-ranger-ref-Y-1" aria-label="Back to reference Y-1">↩</InnerLink></p>
</li>
<li id="class-ranger-Z">
<p>Advanced Race Guide pg. 122 <InnerLink id="backlink-class-ranger-ref-Z-1" data-hash-target to="class-ranger-ref-Z-1" aria-label="Back to reference Z-1">↩</InnerLink></p>
</li>
<li id="class-ranger-1">
<p>Advanced Race Guide pg. 73 <InnerLink id="backlink-class-ranger-ref-1-1" data-hash-target to="class-ranger-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="class-ranger-2">
<p>Advanced Player's Guide pg. 23 <InnerLink id="backlink-class-ranger-ref-2-1" data-hash-target to="class-ranger-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="class-ranger-3">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-ranger-ref-3-1" data-hash-target to="class-ranger-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
<li id="class-ranger-4">
<p>Advanced Race Guide pg. 133 <InnerLink id="backlink-class-ranger-ref-4-1" data-hash-target to="class-ranger-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink></p>
</li>
<li id="class-ranger-5">
<p>Blood of the Sea pg. 11 <InnerLink id="backlink-class-ranger-ref-5-1" data-hash-target to="class-ranger-ref-5-1" aria-label="Back to reference 5-1">↩</InnerLink></p>
</li>
<li id="class-ranger-6">
<p>Advanced Race Guide pg. 194 <InnerLink id="backlink-class-ranger-ref-6-1" data-hash-target to="class-ranger-ref-6-1" aria-label="Back to reference 6-1">↩</InnerLink></p>
</li>
<li id="class-ranger-7">
<p>Blood of the Beast pg. 16 <InnerLink id="backlink-class-ranger-ref-7-1" data-hash-target to="class-ranger-ref-7-1" aria-label="Back to reference 7-1">↩</InnerLink></p>
</li>
<li id="class-ranger-8">
<p>Advanced Race Guide pg. 139 <InnerLink id="backlink-class-ranger-ref-8-1" data-hash-target to="class-ranger-ref-8-1" aria-label="Back to reference 8-1">↩</InnerLink></p>
</li>
<li id="class-ranger-9">
<p>Advanced Race Guide pg. 145 <InnerLink id="backlink-class-ranger-ref-9-1" data-hash-target to="class-ranger-ref-9-1" aria-label="Back to reference 9-1">↩</InnerLink></p>
</li>
<li id="class-ranger-0">
<p>Advanced Race Guide pg. 151 <InnerLink id="backlink-class-ranger-ref-0-1" data-hash-target to="class-ranger-ref-0-1" aria-label="Back to reference 0-1">↩</InnerLink></p>
</li>
<li id="class-ranger-!">
<p>Plane-Hopper's Handbook pg. 23 <InnerLink id="backlink-class-ranger-ref-!-1" data-hash-target to="class-ranger-ref-!-1" aria-label="Back to reference !-1">↩</InnerLink></p>
</li>
<li id="class-ranger-%40">
<p>Advanced Race Guide pg. 200 <InnerLink id="backlink-class-ranger-ref-%40-1" data-hash-target to="class-ranger-ref-%40-1" aria-label="Back to reference @-1">↩</InnerLink></p>
</li>
<li id="class-ranger-%26">
<p>Advanced Race Guide pg. 203 <InnerLink id="backlink-class-ranger-ref-%26-1" data-hash-target to="class-ranger-ref-%26-1" aria-label="Back to reference &-1">↩</InnerLink></p>
</li>
<li id="class-ranger-%25">
<p>Advanced Race Guide pg. 204 <InnerLink id="backlink-class-ranger-ref-%25-1" data-hash-target to="class-ranger-ref-%25-1" aria-label="Back to reference %-1">↩</InnerLink></p>
</li>
<li id="class-ranger-%23">
<p>Advanced Race Guide pg. 206 <InnerLink id="backlink-class-ranger-ref-%23-1" data-hash-target to="class-ranger-ref-%23-1" aria-label="Back to reference #-1">↩</InnerLink></p>
</li>
<li id="class-ranger-%3B">
<p>Ultimate Wilderness pg. 22 <InnerLink id="backlink-class-ranger-ref-%3B-1" data-hash-target to="class-ranger-ref-%3B-1" aria-label="Back to reference ;-1">↩</InnerLink></p>
</li>
<li id="class-ranger-%3F">
<p>Blood of Shadows pg. 11 <InnerLink id="backlink-class-ranger-ref-%3F-1" data-hash-target to="class-ranger-ref-%3F-1" aria-label="Back to reference ?-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _shifter = {hasJL:true,title: "Shifter", jsx: <><div className="jumpList" id="class-shifter-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-shifter-bonus-languages">Bonus Languages</InnerLink></li><li><InnerLink toTop to="class-shifter-shifter-aspect-su">Shifter Aspect</InnerLink></li><li><InnerLink toTop to="class-shifter-shifter-claws-su">Shifter Claws</InnerLink></li><li><InnerLink toTop to="class-shifter-wild-empathy-ex">Wild Empathy</InnerLink></li><li><InnerLink toTop to="class-shifter-defensive-instinct-ex">Defensive Instinct</InnerLink></li><li><InnerLink toTop to="class-shifter-track-ex">Track and Woodland Stride</InnerLink></li><li><InnerLink toTop to="class-shifter-wild-shape-su">Wild Shape</InnerLink></li><li><InnerLink toTop to="class-shifter-trackless-step-ex">Trackless Step</InnerLink></li><li><InnerLink toTop to="class-shifter-shifters-fury-ex">Shifter's Fury</InnerLink></li><li><InnerLink toTop to="class-shifter-chimeric-aspect-su">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-shifter-speaking-druidic">Speaking Druidic</InnerLink></li><li><InnerLink toTop to="class-shifter-ex-shifters">Ex-Shifters</InnerLink></li><li><InnerLink toTop to="class-shifter-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-shifter-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-shifter-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-shifter-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-shifter-shifter">Shifter</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 26</Link></p>
<p>Whether riding on the wind as a falcon or hiding in some fetid bog waiting to strike, the shifter is a true master of the wild. Both a devoted defender of druidic circles and a fierce predator, the shifter can take on the forms of nature and even fuse them together with devastating effect and unbridled savagery. By way of the druidic discipline of wild shape, they become living aspects of the wild. At first, they are able to assume only a minor aspect, but with time and practice they can fully transform into ever more powerful forms.</p>
<p>The shifter class offers players a way to experience a shapeshifting character that is more martially inclined than a spellcasting <Link to="/class/druid">druid</Link>. With each new level, the shifter's powers grow in new and surprising ways, creating a character that thrives in battle, exploration, and stealth.</p>
<p>Shifters are protectors of druidic circles and avengers of nature, yet a shifter's magic is different from that of her druidic kin. Rather than invoking spells from the natural world or forging alliances with animals, shifters focus their supernatural powers inward to gain control over their own forms. Their ability to change their forms is as varied as the wonders of the wilds themselves but always remains at least partially rooted in the natural world. There are many paths to becoming a shifter; most are trained in that role by druidic circles and have their powers unlocked via rituals of initiation. Yet some stumble upon the gift naturally, as if their blood bore the secrets of shifter transformation.</p>
<p>For those leaning toward the causes of law and good, the path of the shifter is one of contemplation and understanding. They become one with nature through mental and physical mimicry and gain an ever deeper spiritual understanding of the ebb and flow of the natural world. Those leaning toward the chaotic and evil teachings of druidic philosophy find such enlightenment through more violent means. These are typically quicker transformations, both brutal and painful, imparting the dark lessons of nature through its most catastrophic forms. Shifters who lean toward true neutrality are the most diverse when it comes to their command of metamorphic secrets.</p>
<p><strong>Role:</strong> The shifter is so attuned to nature and the wild beasts of the world that she can call upon those powers to mystically fortify her being. Fluid in form and function, she can shape herself to overcome hardships and support those she befriends or serves.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any neutral</span><table className="basic alignment"><tbody><tr><td>LG</td><td data-lit>LN</td><td>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td>CG</td><td data-lit>CN</td><td>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d10</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>3d6 &times; 10 gp (average 105 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/fly">Fly</Link>, <Link to="/skill/ride">Ride</Link>, <Link to="/skill/stealth">Stealth</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/survival">Survival</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/handle_animal">Handle Animal</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-shifter-class-features">Class Features</h3>
<ScrollContainer id="class-shifter--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+1</td>
<td>+2</td>
<td>+2</td>
<td>+0</td>
<td>Shifter aspect, shifter claws, wild empathy</td>
</tr>
<tr>
<td>2nd</td>
<td>+2</td>
<td>+3</td>
<td>+3</td>
<td>+0</td>
<td>Defensive instinct, track</td>
</tr>
<tr>
<td>3rd</td>
<td>+3</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>Shifter claws increase, woodland stride</td>
</tr>
<tr>
<td>4th</td>
<td>+4</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>Defensive instinct (+1), wild shape</td>
</tr>
<tr>
<td>5th</td>
<td>+5</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>Second aspect, trackless step</td>
</tr>
<tr>
<td>6th</td>
<td>+6/+1</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>Shifter's fury</td>
</tr>
<tr>
<td>7th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>Shifter claws increase</td>
</tr>
<tr>
<td>8th</td>
<td>+8/+3</td>
<td>+6</td>
<td>+6</td>
<td>+2</td>
<td>Defensive instinct (+2)</td>
</tr>
<tr>
<td>9th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+3</td>
<td>Chimeric aspect</td>
</tr>
<tr>
<td>10th</td>
<td>+10/+5</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>Third aspect</td>
</tr>
<tr>
<td>11th</td>
<td>+11/+6/+1</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>Shifter claws increase</td>
</tr>
<tr>
<td>12th</td>
<td>+12/+7/+2</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>Defensive instinct (+3)</td>
</tr>
<tr>
<td>13th</td>
<td>+13/+8/+3</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>Shifter claws increase</td>
</tr>
<tr>
<td>14th</td>
<td>+14/+9/+4</td>
<td>+9</td>
<td>+9</td>
<td>+4</td>
<td>Greater chimeric aspect</td>
</tr>
<tr>
<td>15th</td>
<td>+15/+10/+5</td>
<td>+9</td>
<td>+9</td>
<td>+5</td>
<td>Fourth aspect</td>
</tr>
<tr>
<td>16th</td>
<td>+16/+11/+6/+1</td>
<td>+10</td>
<td>+10</td>
<td>+5</td>
<td>Defensive instinct (+4)</td>
</tr>
<tr>
<td>17th</td>
<td>+17/+12/+7/+2</td>
<td>+10</td>
<td>+10</td>
<td>+5</td>
<td>Shifter claws increase</td>
</tr>
<tr>
<td>18th</td>
<td>+18/+13/+8/+3</td>
<td>+11</td>
<td>+11</td>
<td>+6</td>
<td>A thousand faces, timeless body</td>
</tr>
<tr>
<td>19th</td>
<td>+19/+14/+9/+4</td>
<td>+11</td>
<td>+11</td>
<td>+6</td>
<td>Shifter claws increase</td>
</tr>
<tr>
<td>20th</td>
<td>+20/+15/+10/+5</td>
<td>+12</td>
<td>+12</td>
<td>+6</td>
<td>Defensive instinct (+5), final aspect</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={6}>Weapons</th><td><Link to="/eq-weapon/club">club</Link></td><td><Link to="/eq-weapon/dagger">dagger</Link></td></tr><tr><td><Link to="/eq-weapon/dart">dart</Link></td><td><Link to="/eq-weapon/quarterstaff">quarterstaff</Link></td></tr><tr><td><Link to="/eq-weapon/scimitar">scimitar</Link></td><td><Link to="/eq-weapon/scythe">scythe</Link></td></tr><tr><td><Link to="/eq-weapon/sickle">sickle</Link></td><td><Link to="/eq-weapon/shortspear">shortspear</Link></td></tr><tr><td><Link to="/eq-weapon/sling">sling</Link></td><td><Link to="/eq-weapon/spear">spear</Link></td></tr><tr><td colSpan={2}>The natural attacks (claw, bite, and so forth) from the <em>shifter claws</em> class feature and of forms you assume with wild shape.</td></tr><tr><th>Armor?</th><td colSpan={2}>Light and Medium armors</td></tr><tr><th>Shields?</th><td colSpan={2}>Yes, except tower shields</td></tr><tr><th>Armor</th><td colSpan={2}>You are prohibited from wearing metal armor or using metal shields. You can wear wooden armor and use wooden shields that have been altered by the <Link to="/spell/ironwood">ironwood</Link> spell so that it functions as if it were steel.</td></tr><tr><td colSpan={3} className="sw se">A shifter who wears prohibited armor or uses a prohibited shield is unable to use her shifter aspect, shifter claws, wild shape, and other shifter supernatural or spell-like abilities while doing so and for 24 hours thereafter.</td></tr></tbody></table>
<Ability id="class-shifter-bonus-languages" icon={["stairs-goal"]}>
<Pair single id="class-shifter-bonus-languages">Bonus Languages</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Your bonus language options include Sylvan, the language of woodland creatures, and Aklo, the tongue spoken by certain sinister fey or otherworldly denizens of reaches of the wild rarely explored by humanity. These choices are in addition to the bonus languages available to you because of your race. You also know Druidic, a secret language known only to druids and shifters, which you learn upon becoming a 1st-level shifter.</Pair>
<Pair title="Special">Druidic is a free language; that is, you know it in addition to your regular allotment of languages and it doesn't take up a language slot. Shifters are forbidden to teach this language to non-druids or non-shifters.</Pair>
</Ability>
<Ability id="class-shifter-shifter-aspect-su" icon={["stairs-goal"]}>
<Pair single id="class-shifter-shifter-aspect-su">Shifter Aspect (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You gain your first <Link to="/ability/aspects">aspect</Link> - a category of animal to which your body and soul have become supernaturally attuned.</Pair>
<Pair title="Swift Action">You can shift into your aspect's minor form. You can assume only one minor form at a time. Shifting to a new aspect (or aspects, in the case of <em>chimeric aspects</em> or <em>greater chimeric aspects</em>) ends all minor forms currently manifested.</Pair>
<Pair title="Usage">3 minutes/day + 1 minute per shifter level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Free Action">On your turn, you can end the effect.</Pair>
<Pair title="At 5th Level">You gain a second aspect.</Pair>
<Pair title="At 10th Level">You gain a third aspect.</Pair>
<Pair title="At 15th Level">You gain a fourth aspect.</Pair>
<Pair title="Special">The minor forms of aspects are not polymorph effects, and you do not lose the benefits of a minor form while affected by polymorph effects.</Pair>
</Ability>
<Ability id="class-shifter-shifter-claws-su" icon={["mailed-fist"]}>
<Pair single id="class-shifter-shifter-claws-su">Shifter Claws (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Swift Action">In your natural form, you can extend your claws to use as a weapon. This magical transformation is fueled as much by your faith in the natural world as it is by inborn talent.</Pair>
<Pair title="Info">The claws on each hand can be used as a primary <Link to="/umr/natural_attack">natural attack</Link>, dealing 1d4 points of piercing and slashing damage (1d3 if you are Small). If you use one of your claw attacks in concert with a weapon held in the other hand, the claw acts as a secondary natural attack instead.</Pair>
<Pair title="At 3rd Level">Your claws ignore DR/cold iron, DR/magic, and DR/silver.</Pair>
<Pair title="At 7th Level">Your claw damage becomes 1d6 (1d4 if Small).</Pair>
<Pair title="At 11th Level">Your claw damage becomes 1d8 (1d6 if Small).</Pair>
<Pair title="At 17th Level">Your claws' critical multiplier becomes &times;3.</Pair>
<Pair title="At 19th Level">Your claws ignore DR/adamantine and DR/-.</Pair>
<Pair title="Special">While you use <em>wild shape</em> to assume your aspect's major form, your natural attacks gain the same benefits granted by your <em>shifter claws</em> ability. If the form you take has claw attacks, you can use either the base damage of your <em>shifter claws</em> or the damage of the form's claws, whichever is greater. If the form does not have claw attacks, you can choose up to two natural attacks that would deal less damage than your shifter claw damage and have those attacks instead deal the same damage as your <em>shifter claws.</em></Pair>
</Ability>
<aside><p>Optionally, each time the shifter activates her shifter's claws ability in her natural form, she can manifest one of the <strong className="hl">alternate natural attacks</strong> listed in any of her chosen aspects, or those aspects that relate to her archetype. Each alternate natural attack replaces one of the shifter's claw attacks. The shifter can gain up to two different alternate natural attacks with this method. These alternate natural attacks modify only the damage type of the shifter's natural attacks and otherwise function exactly as above. For example, the <Link to="/aspect/bat">bat</Link> provides a bite (bludgeoning, piercing, and slashing) and tail slap (bludgeoning) options, while the <Link to="/aspect/elephant">elephant</Link> offers gore (piercing) and slam (bludgeoning) attacks.</p>
</aside><Ability id="class-shifter-wild-empathy-ex" icon={["upgrade"]}>
<Pair single id="class-shifter-wild-empathy-ex" flavor="A shifter can improve the attitude of an animal.">Wild Empathy (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">This ability functions just like a <Link to="/skill/diplomacy">Diplomacy</Link> check made to improve the attitude of a person. You roll 1d20 and add your shifter level and your Charisma modifier to determine the wild empathy check result. The typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly. You can also use this ability to influence a magical beast with an Intelligence score of 1 or 2, but you take a -4 penalty on the check.</Pair>
<Pair title="Special">To use wild empathy, you and the animal must be within 30 feet of one another under normal conditions. Generally, influencing an animal in this way takes 1 minute but, as with influencing people, it might take more or less time.</Pair>
</Ability>
<Ability id="class-shifter-defensive-instinct-ex" icon={["armor-upgrade"]}>
<Pair single id="class-shifter-defensive-instinct-ex">Defensive Instinct (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">When unarmored, not using a shield, unencumbered, and conscious, you add your Wisdom bonus (if any) to your AC and CMD. If you are wearing nonmetal armor or using a nonmetal shield, you instead add <Link to="/misc/half">half</Link> your Wisdom bonus to her AC (minimum 0).</Pair>
<Pair title="At 4th Level">You gain an additional bonus to AC and CMD equal to one-fourth of your shifter level.</Pair>
<Pair title="Special">These bonuses to AC apply even against touch attacks or when you're <Link to="/rule/flat_footed">flat-footed</Link>. You lose these bonuses when immobilized or helpless. These bonuses do not stack with the monk AC bonus class feature.</Pair>
</Ability>
<Ability id="class-shifter-track-ex" icon={["upgrade"]}>
<Pair single id="class-shifter-track-ex">Track (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">You add half your level as a bonus on Survival checks to follow tracks.</Pair>
</Ability>
<Ability id="class-shifter-woodland-stride-ex" icon={["upgrade"]}>
<Pair single id="class-shifter-woodland-stride-ex">Woodland Stride (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">You can move through any sort of undergrowth (such as briars, natural thorns, overgrown areas, and similar terrain) at your normal speed and without taking damage or suffering any other impairment. Briars, thorns, and overgrown areas that are enchanted or magically manipulated to impede motion still affect you.</Pair>
</Ability>
<Ability id="class-shifter-wild-shape-su" icon={["stairs-goal"]}>
<Pair single id="class-shifter-wild-shape-su">Wild Shape (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">Shifter level + Wisdom modifier hours/day; these hours need not be consecutive, but they must be spent in 1-hour increments</Pair>
<Pair title="Standard Action">You gain the ability to turn yourself into the major form of one of your aspects and back again. This ability functions as <Link to="/spell/beast_shape_ii">beast shape II</Link>, except as noted here. You can turn into the major form of only one of your aspects at a time. Often a particular aspect's major form grants abilities beyond the normal effect of <em>beast shape II.</em> Each major form details the abilities you gain with that major form and at what level; you gain these instead of the form abilities from <em>beast shape II,</em> but you still gain <em>beast shape II</em> abilities that are size dependent.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="Special">You lose your ability to speak while in animal form because you are limited to the sounds that a normal, untrained animal can make, but you can communicate normally with other animals of the same general grouping as your new form. You can take feats and other abilities that require wild shape; for the purpose of qualifying for prerequisites, your effective druid level is equal to your shifter level.</Pair>
</Ability>
<Ability id="class-shifter-trackless-step-ex" icon={["upgrade"]}>
<Pair single id="class-shifter-trackless-step-ex">Trackless Step (Ex)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">You leave no trail in natural surroundings and cannot be tracked. You can choose to leave a trail if you so desire.</Pair>
</Ability>
<Ability id="class-shifter-shifters-fury-ex" icon={["mailed-fist"]}>
<Pair single id="class-shifter-shifters-fury-ex">Shifter's Fury (Ex)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Full-Round Action">You gain the ability to make several ferocious attacks with the same natural weapon. Instead of attacking with all your natural weapons, you can choose a single natural weapon and make a full attack with that natural weapon, gaining a second iterative attack at -5 as if it was a manufactured weapon. When you do so, all your other natural attacks count as secondary attacks and don't benefit from <em>shifter's claws.</em></Pair>
<Pair title="At 11th Level">You gain a third iterative attack at -10.</Pair>
<Pair title="At 16th Level">You gain a fourth iterative attack at -15.</Pair>
</Ability>
<Ability id="class-shifter-chimeric-aspect-su" icon={["upgrade"]}>
<Pair single id="class-shifter-chimeric-aspect-su">Chimeric Aspect (Su)</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">When you use your shifter aspect ability to take on a minor form, you can choose two aspects and assume the minor form of each aspect.</Pair>
</Ability>
<Ability id="class-shifter-greater-chimeric-aspect-su" icon={["upgrade"]}>
<Pair single id="class-shifter-greater-chimeric-aspect-su">Greater Chimeric Aspect (Su)</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">When you use your shifter aspect ability to take on a minor form, you can choose up to three aspects and assume the minor form of each aspect.</Pair>
</Ability>
<Ability id="class-shifter-a-thousand-faces-su" icon={["magic-swirl"]}>
<Pair single id="class-shifter-a-thousand-faces-su">A Thousand Faces (Su)</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Standard Action">You gain the ability to change your appearance at will, as if using the <Link to="/spell/alter_self">alter self</Link> spell, but only while in your normal form.</Pair>
</Ability>
<Ability id="class-shifter-timeless-body-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="class-shifter-timeless-body-ex">Timeless Body (Ex)</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Passive Ability">You no longer take ability score penalties for aging and cannot be magically <Link to="/rule/age">aged</Link>. Any penalties you may have already incurred, however, remain in place. Bonuses still accrue, and you still die of old age when your time is up.</Pair>
</Ability>
<Ability id="class-shifter-final-aspect-su" icon={["upgrade"]}>
<Pair single id="class-shifter-final-aspect-su">Final Aspect (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">You gain access to a fifth aspect, and when you use <em>shifter's aspect</em>, you can assume the minor forms of all your aspects and you can use your major and minor forms at will.</Pair>
</Ability>
<h3 id="class-shifter-speaking-druidic" data-hash-target>Speaking Druidic</h3>
<p>For the purposes of teaching and learning the Druidic language, shifters are considered to be druids - the nuances of the language are instrumental in teaching characters of both classes to use and control their abilities. While the rare druidic circle might bar shifters from its order, and while some eccentric shifters may view druids as competitors or even enemies, all shifters are assumed to speak it.</p>
<h3 id="class-shifter-ex-shifters" data-hash-target>Ex-Shifters</h3>
<p>A shifter who ceases to revere nature, changes to a prohibited alignment, or teaches the Druidic language to a non-druid or a non-shifter loses all her supernatural abilities. She cannot thereafter gain levels as a shifter until she <Link to="/spell/atonement">atones</Link>.</p>
<h3 id="class-shifter-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-shifter--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Flexible Form (Su)</td><td>At 20th level, the shifter has control over her bodies down to the finest details. When the shifter uses wild shape, she gains a total of a +6 bonus to her physical ability scores, which she can distribute as she likes each time she shifts. For example, she can gain a +4 bonus to Strength and a +2 bonus to Dexterity, and the next time she shifts she can instead gain a +6 bonus to Constitution.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-shifter-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Catfolk:</strong> Add 1/5 to the damage dealt when using the shifter claws ability.<sup><InnerLink showBacklink="backlink-class-shifter-ref-A-1" id="class-shifter-ref-A-1" data-hash-target to="class-shifter-A">1</InnerLink></sup></p>
<p><strong>Dhampir:</strong> Add a +1 bonus on wild empathy checks to improve the attitude of bats, rats, and wolves.<sup><InnerLink showBacklink="backlink-class-shifter-ref-A-2" id="class-shifter-ref-A-2" data-hash-target to="class-shifter-A">1</InnerLink></sup></p>
<p><strong>Drow:</strong> Add a +1/2 bonus on Climb checks.<sup><InnerLink showBacklink="backlink-class-shifter-ref-A-3" id="class-shifter-ref-A-3" data-hash-target to="class-shifter-A">1</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Add a +1/2 bonus on wild empathy checks to influence animals and magical beasts that are normally encountered in underground environments.<sup><InnerLink showBacklink="backlink-class-shifter-ref-B-1" id="class-shifter-ref-B-1" data-hash-target to="class-shifter-B">2</InnerLink></sup></p>
<p><strong>Elf:</strong> Add 1 to the shifter's base speed. This has no ingame effect unless the shifter has selected this reward five times (or any multiple of five) to enhance her speed by 5 feet. For example, a 4th-level elven shifter who has selected this option four times has a base speed of 34 feet, but is treated as if she still had a base speed of 30 feet. When she reaches 5th level and takes this favored class option again, her base speed becomes 35 feet. This bonus applies only when the shifter is wearing no armor.<sup><InnerLink showBacklink="backlink-class-shifter-ref-B-2" id="class-shifter-ref-B-2" data-hash-target to="class-shifter-B">2</InnerLink></sup></p>
<p><strong>Gathlain:</strong> Add a +1 bonus on Knowledge (nature) checks relating to plants and flying animals.<sup><InnerLink showBacklink="backlink-class-shifter-ref-A-4" id="class-shifter-ref-A-4" data-hash-target to="class-shifter-A">1</InnerLink></sup></p>
<p><strong>Ghoran:</strong> Add 1/5 to the shifter's natural armor bonus when using wild shape to assume a major form.<sup><InnerLink showBacklink="backlink-class-shifter-ref-C-1" id="class-shifter-ref-C-1" data-hash-target to="class-shifter-C">3</InnerLink></sup></p>
<p><strong>Gnome:</strong> Gain energy resistance 1 against acid, cold, electricity, or fire. Each time the shifter selects this reward, increase that energy resistance by 1, to a maximum of energy resistance 10. Once the gnome reaches energy resistance 10, she can select a new type of energy to build her resistance to the next time she selects this favored class option.<sup><InnerLink showBacklink="backlink-class-shifter-ref-B-3" id="class-shifter-ref-B-3" data-hash-target to="class-shifter-B">2</InnerLink></sup></p>
<p><strong>Grippli:</strong> Add a +1 bonus on Survival checks to follow tracks through swamps.<sup><InnerLink showBacklink="backlink-class-shifter-ref-A-5" id="class-shifter-ref-A-5" data-hash-target to="class-shifter-A">1</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add a +1/2 bonus on Survival checks to get along in the wild, to avoid getting lost, and to avoid all natural hazards.<sup><InnerLink showBacklink="backlink-class-shifter-ref-B-4" id="class-shifter-ref-B-4" data-hash-target to="class-shifter-B">2</InnerLink></sup></p>
<p><strong>Halfling:</strong> Increase the AC bonus from defensive instinct by 1/4 against creatures of size Large or larger.<sup><InnerLink showBacklink="backlink-class-shifter-ref-B-5" id="class-shifter-ref-B-5" data-hash-target to="class-shifter-B">2</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add a +1/3 bonus on critical hit confirmation rolls when using shifter claws (maximum bonus of +5). This bonus does not stack with <Link to="/feat/critical_focus">Critical Focus</Link>.<sup><InnerLink showBacklink="backlink-class-shifter-ref-B-6" id="class-shifter-ref-B-6" data-hash-target to="class-shifter-B">2</InnerLink></sup></p>
<p><strong>Human:</strong> Add 1/3 to the number of minutes the shifter can assume her minor form each day.<sup><InnerLink showBacklink="backlink-class-shifter-ref-B-7" id="class-shifter-ref-B-7" data-hash-target to="class-shifter-B">2</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-shifter-ref-D-1" id="class-shifter-ref-D-1" data-hash-target to="class-shifter-D">4</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Add 1/4 to the number of minutes the shifter can assume her minor form each day.<sup><InnerLink showBacklink="backlink-class-shifter-ref-A-6" id="class-shifter-ref-A-6" data-hash-target to="class-shifter-A">1</InnerLink></sup></p>
<p><strong>Kobold:</strong> Add a +1/4 bonus on Stealth checks while in the shifter's minor or major form.<sup><InnerLink showBacklink="backlink-class-shifter-ref-A-7" id="class-shifter-ref-A-7" data-hash-target to="class-shifter-A">1</InnerLink></sup></p>
<p><strong>Orc:</strong> Add 1/5 to the damage dealt when using the shifter claws ability.<sup><InnerLink showBacklink="backlink-class-shifter-ref-A-8" id="class-shifter-ref-A-8" data-hash-target to="class-shifter-A">1</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Add a +1 bonus on wild empathy checks to influence animals and magical beasts that live underground.<sup><InnerLink showBacklink="backlink-class-shifter-ref-A-9" id="class-shifter-ref-A-9" data-hash-target to="class-shifter-A">1</InnerLink></sup></p>
<p><strong>Tiefling:</strong> Add a +1 bonus on wild empathy checks to improve the attitude of fiendish creatures.<sup><InnerLink showBacklink="backlink-class-shifter-ref-A-10" id="class-shifter-ref-A-10" data-hash-target to="class-shifter-A">1</InnerLink></sup></p>
<p><strong>Undine:</strong> Add a +1 bonus on wild empathy checks to influence animals and magical beasts with the aquatic subtype.<sup><InnerLink showBacklink="backlink-class-shifter-ref-A-11" id="class-shifter-ref-A-11" data-hash-target to="class-shifter-A">1</InnerLink></sup></p>
<p><strong>Vanara:</strong> Add a +1/2 bonus on Acrobatics checks to jump and a +1/2 bonus on wild empathy checks.<sup><InnerLink showBacklink="backlink-class-shifter-ref-A-12" id="class-shifter-ref-A-12" data-hash-target to="class-shifter-A">1</InnerLink></sup></p>
<p><strong>Vine leshy:</strong> Add a +1 bonus on Knowledge (nature) checks relating to plants.<sup><InnerLink showBacklink="backlink-class-shifter-ref-A-13" id="class-shifter-ref-A-13" data-hash-target to="class-shifter-A">1</InnerLink></sup></p>
</div>
<h3 id="class-shifter-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-shifter/adaptive_shifter">Adaptive Shifter</Link></p><p><strong>Modifies or Replaces:</strong> Shifter Claws; Shifter Aspect; Chimeric Aspect; Greater Chimeric Aspect; Final Aspect; Wild Empathy; Track; Woodland Stride; Trackless Step; Wild Shape</p><p>Rather than emulate other animals entirely, some shifters learn to reshape their forms on the fly in response to a range of stimuli</p></div>
<div className="archetype"><p><Link to="/arc-shifter/dragonblood_shifter">Dragonblood Shifter</Link></p><p><strong>Modifies or Replaces:</strong> Shifter Aspect; Wild Shape; Chimeric Aspect; Greater Chimeric Aspect; Final Aspect</p><p>Dragonblood shifters draw upon the inherent strength and majesty of the true dragons, gaining a measure of their powers from their association.</p></div>
<div className="archetype"><p><Link to="/arc-shifter/elementalist_shifter">Elementalist Shifter</Link></p><p><strong>Modifies or Replaces:</strong> Languages; Shifter Aspect; Wild Empathy; Shifter Claws; Wild Shape; Chimeric Aspect; Greater Chimeric Aspect</p><p>Rather than drawing power from bestial aspects, elementalist shifters channel power from the Inner Sphere and can take on powerful elemental forms at the cost of the greater diversity available to traditional shifters.</p></div>
<div className="archetype"><p><Link to="/arc-shifter/feyform_shifter">Feyform Shifter</Link></p><p><strong>Modifies or Replaces:</strong> Shifter Aspect; Wild Shape; Chimeric Aspect; Greater Chimeric Aspect; Final Aspect</p><p>Feyform shifters are intimately linked to the First World, and can draw from it to gain otherworldly powers.</p></div>
<div className="archetype"><p><Link to="/arc-shifter/fiendflesh_shifter">Fiendflesh Shifter</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Shifter Claws; Wild Shape; Shifter Aspect; Defensive Instinct; Chimeric Aspect; Greater Chimeric Instinct</p><p>By forging dark pacts with extraplanar forces, fiendflesh shifters invoke sinister powers to assume the strengths of daemons, demons, or devils.</p></div>
<div className="archetype"><p><Link to="/arc-shifter/holy_beast">Holy Beast</Link></p><p><strong>Modifies or Replaces:</strong> Deity; Shifter Claws; Wild Empathy; Track; Woodland Stride; Trackless Step</p><p>Holy beast shifters pledge to hunt down their deity's enemies to earn that deity's blessing.</p></div>
<div className="archetype"><p><Link to="/arc-shifter/leafshifter">Leafshifter</Link></p><p><strong>Modifies or Replaces:</strong> Shifter Claws; Shifter Aspect</p><p>(Ghoran only) Rather than assume aspects taken from the traits of natural animals, a leafshifter transforms into plant-animal hybrids that resemble living topiaries.</p></div>
<div className="archetype"><p><Link to="/arc-shifter/oozemorph">Oozemorph</Link></p><p><strong>Modifies or Replaces:</strong> Weapon and Armor Proficiencies; Chimeric Aspect; Greater Chimeric Aspect; Wild Shape; Shifter Aspect; Shifter Claws; Wild Empathy; Defensive Instinct; Woodland Stride</p><p>While most shifters are trained in druidic traditions that allow them to tap into animalistic powers, others look instead to the simplest forms of life for inspiration. Known as oozemorphs, these shifters focus on the ooze - a form of life as simple in construction as it is dangerous in combat.</p></div>
<div className="archetype"><p><Link to="/arc-shifter/rageshaper">Rageshaper</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Wild Shape; Shifter Aspect; Shifter Claws; Defensive Instinct; Chimeric Aspect; Greater Chimeric Aspect; Woodland Stride; Trackless Step</p><p>The rageshaper is a destructive force of nature brought to bear - a wild and uncontrollable engine of annihilation fueled by wrath.</p></div>
<div className="archetype"><p><Link to="/arc-shifter/style_shifter">Style Shifter</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiencies; Shifter Aspect; Chimeric Aspect; Greater Chimeric Aspect; Final Aspect; Wild Shape</p><p>Style shifters have been able to perfect their combat techniques to the point where they can augment a combat style by partially transforming into the creature that inspired it.</p></div>
<div className="archetype"><p><Link to="/arc-shifter/swarm_shifter">Swarm Shifter</Link></p><p><strong>Modifies or Replaces:</strong> Wild Shape; Shifter Aspect; Chimeric Aspect; Greater Chimeric Aspect; Final Aspect</p><p>Swarm shifters channel the essence of the basest and most overlooked animals, vermin.</p></div>
<div className="archetype"><p><Link to="/arc-shifter/verdant_shifter">Verdant Shifter</Link></p><p><strong>Modifies or Replaces:</strong> Wild Empathy; Shifter Aspect; Defensive Instinct; Wild Shape; Chimeric Aspect; Greater Chimeric Aspect</p><p>Verdant shifters have an affinity for plants rather than animals and gain a plant-like form that grows in power as they do.</p></div>
<div className="archetype"><p><Link to="/arc-shifter/weretouched">Weretouched</Link></p><p><strong>Modifies or Replaces:</strong> Shifter Aspect; Wild Empathy; Wild Shape</p><p>Weretouched shifters are scions of lycanthropic forces, whether hereditary or supernaturally imposed. They can assume both animal and hybrid forms, as a lycanthrope does.</p></div>
<div className="archetype"><p><Link to="/arc-shifter/wild_effigy">Wild Effigy</Link></p><p><strong>Modifies or Replaces:</strong> Wild Empathy; Track; Woodland Stride; Trackless Step; Defensive Instinct</p><p>A wild effigy still takes on the shapes of natural animals, but rather than transforming her body into flesh and muscle, she transforms into constructed effigies of her chosen aspects.</p></div>
<h3 id="class-shifter-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"shifter archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Armor Proficiency"},{"header":"Defensive Instinct"},{"header":"Languages"},{"header":"Shifter Aspect"},{"header":"Chimeric Aspect"},{"header":"Greater Chimeric Aspect"},{"header":"Greater Chimeric Instinct"},{"header":"Final Aspect"},{"header":"Shifter Claws"},{"header":"Track"},{"header":"Trackless Step"},{"header":"Weapon/Armor Proficiency"},{"header":"Wild Empathy"},{"header":"Wild Shape"},{"header":"Woodland Stride"}],"data":[["‹arc-shifter/Adaptive Shifter›",null,null,null,null,"X","X","X",null,"X","X","X","X",null,"X","X","X"],["‹arc-shifter/Dragonblood Shifter›",null,null,null,null,"X","X","X",null,"X",null,null,null,null,null,"X",null],["‹arc-shifter/Elementalist Shifter›",null,null,null,"X","X","X","X",null,null,"X",null,null,null,"X","X",null],["‹arc-shifter/Feyform Shifter›",null,null,null,null,"X","X","X",null,"X",null,null,null,null,null,"X",null],["‹arc-shifter/Fiendflesh Shifter›","X",null,"X",null,"X","X",null,"X",null,"X",null,null,null,null,"X",null],["‹arc-shifter/Holy Beast›",null,null,null,null,null,null,null,null,null,"X","X","X",null,"X",null,"X"],["‹arc-shifter/Leafshifter›",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null],["‹arc-shifter/Oozemorph›",null,null,"X",null,"X","X","X",null,null,"X",null,null,"X","X","X","X"],["‹arc-shifter/Rageshaper›","X",null,"X",null,"X","X","X",null,null,"X",null,"X",null,null,"X","X"],["‹arc-shifter/Style Shifter›",null,"X",null,null,"X","X","X",null,"X",null,null,null,null,null,"X",null],["‹arc-shifter/Swarm Shifter›",null,null,null,null,"X","X","X",null,"X",null,null,null,null,null,"X",null],["‹arc-shifter/Verdant Shifter›",null,null,"X",null,"X","X","X",null,null,null,null,null,null,"X","X",null],["‹arc-shifter/Weretouched›",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X","X",null],["‹arc-shifter/Wild Effigy›",null,null,"X",null,null,null,null,null,null,null,"X","X",null,"X",null,"X"]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-shifter-label">Footnotes</h3>
<ol>
<li id="class-shifter-A">
<p><Link to="/source/wilderness_origins">Wilderness Origins pg. 8</Link> <InnerLink id="backlink-class-shifter-ref-A-1" data-hash-target to="class-shifter-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink> <InnerLink id="backlink-class-shifter-ref-A-2" data-hash-target to="class-shifter-ref-A-2" aria-label="Back to reference A-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-class-shifter-ref-A-3" data-hash-target to="class-shifter-ref-A-3" aria-label="Back to reference A-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-class-shifter-ref-A-4" data-hash-target to="class-shifter-ref-A-4" aria-label="Back to reference A-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-class-shifter-ref-A-5" data-hash-target to="class-shifter-ref-A-5" aria-label="Back to reference A-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-class-shifter-ref-A-6" data-hash-target to="class-shifter-ref-A-6" aria-label="Back to reference A-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-class-shifter-ref-A-7" data-hash-target to="class-shifter-ref-A-7" aria-label="Back to reference A-7">↩<sup>7</sup></InnerLink> <InnerLink id="backlink-class-shifter-ref-A-8" data-hash-target to="class-shifter-ref-A-8" aria-label="Back to reference A-8">↩<sup>8</sup></InnerLink> <InnerLink id="backlink-class-shifter-ref-A-9" data-hash-target to="class-shifter-ref-A-9" aria-label="Back to reference A-9">↩<sup>9</sup></InnerLink> <InnerLink id="backlink-class-shifter-ref-A-10" data-hash-target to="class-shifter-ref-A-10" aria-label="Back to reference A-10">↩<sup>10</sup></InnerLink> <InnerLink id="backlink-class-shifter-ref-A-11" data-hash-target to="class-shifter-ref-A-11" aria-label="Back to reference A-11">↩<sup>11</sup></InnerLink> <InnerLink id="backlink-class-shifter-ref-A-12" data-hash-target to="class-shifter-ref-A-12" aria-label="Back to reference A-12">↩<sup>12</sup></InnerLink> <InnerLink id="backlink-class-shifter-ref-A-13" data-hash-target to="class-shifter-ref-A-13" aria-label="Back to reference A-13">↩<sup>13</sup></InnerLink></p>
</li>
<li id="class-shifter-B">
<p><Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 31</Link> <InnerLink id="backlink-class-shifter-ref-B-1" data-hash-target to="class-shifter-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink> <InnerLink id="backlink-class-shifter-ref-B-2" data-hash-target to="class-shifter-ref-B-2" aria-label="Back to reference B-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-class-shifter-ref-B-3" data-hash-target to="class-shifter-ref-B-3" aria-label="Back to reference B-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-class-shifter-ref-B-4" data-hash-target to="class-shifter-ref-B-4" aria-label="Back to reference B-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-class-shifter-ref-B-5" data-hash-target to="class-shifter-ref-B-5" aria-label="Back to reference B-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-class-shifter-ref-B-6" data-hash-target to="class-shifter-ref-B-6" aria-label="Back to reference B-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-class-shifter-ref-B-7" data-hash-target to="class-shifter-ref-B-7" aria-label="Back to reference B-7">↩<sup>7</sup></InnerLink></p>
</li>
<li id="class-shifter-C">
<p>Ultimate Wilderness pg. 17 <InnerLink id="backlink-class-shifter-ref-C-1" data-hash-target to="class-shifter-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-shifter-D">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-shifter-ref-D-1" data-hash-target to="class-shifter-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _magus = {hasJL:true,title: "Magus", jsx: <><div className="jumpList" id="class-magus-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-magus-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-magus-arcane-pool-su">Arcane Pool</InnerLink></li><li><InnerLink toTop to="class-magus-spell-combat-ex">Spell Combat</InnerLink></li><li><InnerLink toTop to="class-magus-spellstrike-su">Spellstrike</InnerLink></li><li><InnerLink toTop to="class-magus-magus-arcana">Magus Arcana</InnerLink></li><li><InnerLink toTop to="class-magus-spell-recall-su">Spell Recall</InnerLink></li><li><InnerLink toTop to="class-magus-bonus-feats">Bonus Feats</InnerLink></li><li><InnerLink toTop to="class-magus-knowledge-pool-su">Knowledge Pool and Medium Armor</InnerLink></li><li><InnerLink toTop to="class-magus-improved-spell-combat-ex">Improved Spell Combat and Fighter Training</InnerLink></li><li><InnerLink toTop to="class-magus-improved-spell-recall-su">Improved Spell Recall</InnerLink></li><li><InnerLink toTop to="class-magus-heavy-armor-ex">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-magus-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-magus-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-magus-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-magus-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-magus-magus">Magus</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 9</Link></p>
<p>There are those who spend their lives poring over ancient tomes and texts, unlocking the power of magic, and there are those who spend their time perfecting the use of individual weapons, becoming masters without equal. The magus is at once a student of both philosophies, blending magical ability and martial prowess into something entirely unique, a discipline in which both spell and steel are used to devastating effect. As he grows in power, the magus unlocks powerful forms of arcana that allow him to merge his talents further, and at the pinnacle of his art, the magus becomes a blur of steel and magic, a force that few foes would dare to stand against.</p>
<p><strong>Role:</strong> Magi spend much of their time traveling the world, learning whatever martial or arcane secrets they can find. They might spend months learning a new sword-fighting style from a master warrior, while simultaneously moonlighting in the local library, poring through tomes of ancient lore. Most who take this path dabble in all sorts of lore, picking up anything that might aid them in their search for perfection.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>4d6 &times; 10 gp (average 140 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>2 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/fly">Fly</Link>, <Link to="/skill/ride">Ride</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/profession_any">Profession (any)</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-magus-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-magus--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
<th>0</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
<th>5th</th>
<th>6th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+0</td>
<td>+2</td>
<td>+0</td>
<td>+2</td>
<td>Arcane pool, cantrips, spell combat</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>+1</td>
<td>+3</td>
<td>+0</td>
<td>+3</td>
<td>Spellstrike</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>+2</td>
<td>+3</td>
<td>+1</td>
<td>+3</td>
<td>Magus arcana</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>+3</td>
<td>+4</td>
<td>+1</td>
<td>+4</td>
<td>Spell recall</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>+3</td>
<td>+4</td>
<td>+1</td>
<td>+4</td>
<td>Bonus feat</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>+4</td>
<td>+5</td>
<td>+2</td>
<td>+5</td>
<td>Magus arcana</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>+5</td>
<td>Knowledge pool, medium armor</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>+6/+1</td>
<td>+6</td>
<td>+2</td>
<td>+6</td>
<td>Improved spell combat</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>+6/+1</td>
<td>+6</td>
<td>+3</td>
<td>+6</td>
<td>Magus arcana</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>+7/+2</td>
<td>+7</td>
<td>+3</td>
<td>+7</td>
<td>Fighter training</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>+8/+3</td>
<td>+7</td>
<td>+3</td>
<td>+7</td>
<td>Bonus feat, improved spell recall</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>+9/+4</td>
<td>+8</td>
<td>+4</td>
<td>+8</td>
<td>Magus arcana</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>+9/+4</td>
<td>+8</td>
<td>+4</td>
<td>+8</td>
<td>Heavy armor</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>+10/+5</td>
<td>+9</td>
<td>+4</td>
<td>+9</td>
<td>Greater spell combat</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>+11/+6/+1</td>
<td>+9</td>
<td>+5</td>
<td>+9</td>
<td>Magus arcana</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>+12/+7/+2</td>
<td>+10</td>
<td>+5</td>
<td>+10</td>
<td>Counterstrike</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>1</td>
</tr>
<tr>
<td>17th</td>
<td>+12/+7/+2</td>
<td>+10</td>
<td>+5</td>
<td>+10</td>
<td>Bonus feat</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>2</td>
</tr>
<tr>
<td>18th</td>
<td>+13/+8/+3</td>
<td>+11</td>
<td>+6</td>
<td>+11</td>
<td>Magus arcana</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
</tr>
<tr>
<td>19th</td>
<td>+14/+9/+4</td>
<td>+11</td>
<td>+6</td>
<td>+11</td>
<td>Greater spell access</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
</tr>
<tr>
<td>20th</td>
<td>+15/+10/+5</td>
<td>+12</td>
<td>+6</td>
<td>+12</td>
<td>True magus</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={2}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>Light armor</td></tr><tr><th>Shields?</th><td colSpan={2}>No</td></tr><tr><td colSpan={3} className="sw se">You can cast magus spells while wearing light armor without incurring the normal arcane spell failure chance. Like any other arcane spellcaster, a magus wearing medium armor, heavy armor, or a shield incurs a chance of arcane spell failure if the spell in question has a somatic component. A multiclass magus still incurs the normal arcane spell failure chance for arcane spells received from other classes.</td></tr></tbody></table>
<Ability id="class-magus-spells" icon={["magic-swirl"]}><Pair single id="class-magus-spells">Spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">To learn, prepare, or cast a spell, you must have a Intelligence score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Intelligence score.</Pair>
<Pair title="Ability">You gain the ability to cast arcane spells which are drawn from the <Link to="/main/spells_magus">magus spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Intelligence modifier. You must choose and prepare your spells in advance.</Pair><Pair title="Special">You may know any number of spells. You must choose and prepare your spells ahead of time by getting 8 hours of sleep and spending 1 hour studying your spellbook and deciding which spells to prepare.</Pair></Ability><Ability id="class-magus-cantrips" icon={["magic-swirl"]}>
<Pair single id="class-magus-cantrips">Cantrips</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You learn a number of cantrips, or 0-level arcane spells. These spells are prepared like any other spell, but they are not expended when cast and may be used again. Cantrips prepared using other spell slots, such as those due to metamagic feats, are expended normally.</Pair>
</Ability>
<Ability id="class-magus-spellbooks" icon={["stairs-goal"]}>
<Pair single id="class-magus-spellbooks">Spellbooks</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You must study your spellbook each day to prepare your spells. You cannot prepare any spell not recorded in your spellbook except for <Link to="/spell/read_magic">read magic</Link>, which all magi can prepare from memory.</Pair>
<Pair title="Special">You begin play with a spellbook containing all 0-level magus spells plus three 1st-level magus spells of your choice. You also select a number of additional 1st-level magus spells equal to your Intelligence modifier to add to your spellbook. At each new magus level, you gain two new magus spells of any spell level or levels that you can cast (based on your new magus level) for your spellbook. At any time, you can also add spells found in other spellbooks to your own (see <Link to="/rule/arcane_magical_writing">Arcane Magical Writing</Link>).</Pair>
</Ability>
<Ability id="class-magus-arcane-pool-su" icon={["magic-swirl"]}>
<Pair single id="class-magus-arcane-pool-su">Arcane Pool (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You gain a reservoir of mystical arcane energy that you can draw upon to fuel your powers and enhance your weapon. This <em>arcane pool</em> has a number of points equal to <Link to="/misc/half">half</Link> your magus level (minimum 1) + your Intelligence modifier. The pool refreshes once per day when you prepare your spells.</Pair>
<Pair title="At 1st Level">You can expend 1 point from your arcane pool as a <strong className="hl">swift action</strong> to grant any weapon you are holding enhancement bonuses for 1 minute. These bonuses are equal to 1 + one-fourth of your magus level. They can be added to the weapon, stacking with existing weapon enhancement to a maximum of +5. Multiple uses of this ability do not stack with themselves.</Pair>
<Pair title="At 5th Level">These bonuses can be used to add any of the following weapon properties: <Link to="/magic-enh/dancing">dancing</Link>, <Link to="/magic-enh/flaming">flaming</Link>, <Link to="/magic-enh/flaming_burst">flaming burst</Link>, <Link to="/magic-enh/frost">frost</Link>, <Link to="/magic-enh/icy_burst">icy burst</Link>, <Link to="/magic-enh/keen">keen</Link>, <Link to="/magic-enh/shock">shock</Link>, <Link to="/magic-enh/shocking_burst">shocking burst</Link>, <Link to="/magic-enh/speed">speed</Link>, or <Link to="/magic-enh/vorpal">vorpal</Link>. Adding these properties consumes an amount of bonus equal to the property's base price modifier. These properties are added to any the weapon already has, but duplicates do not stack. If the weapon is not magical, at least a +1 enhancement bonus must be added before any other properties can be added. These bonuses and properties are decided when the arcane pool point is spent and cannot be changed until the next time you use this ability. These bonuses do not function if the weapon is wielded by anyone other than you.</Pair>
<Pair title="Special">You can only enhance one weapon in this way at one time. If you use this ability again, the first use immediately ends.</Pair>
</Ability>
<Ability id="class-magus-spell-combat-ex" icon={["stairs-goal","mailed-fist","magic-swirl"]}>
<Pair single id="class-magus-spell-combat-ex" flavor="A magus learn to cast spells and wield his weapons at the same time. This functions much like two-weapon fighting, but the off-hand weapon is a spell that is being cast.">Spell Combat (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Full-Round Action">You can make all of your attacks with your melee weapon at a -2 penalty and can also cast any spell from the magus spell list with a casting time of 1 standard action (any attack roll made as part of this spell also takes this penalty). If you cast this spell defensively, you can decide to take an additional penalty on your attack rolls, up to your Intelligence bonus, and add the same amount as a circumstance bonus on your <Link to="/rule/concentration">concentration</Link> check. If the check fails, the spell is wasted, but the attacks still take the penalty. You can choose to cast the spell first or make the weapon attacks first, but if you have more than one attack, you cannot cast the spell between weapon attacks.</Pair>
<Pair title="Special">To use this ability, you must have one hand free (even if the spell being cast does not have somatic components), while wielding a light or one-handed melee weapon in the other hand.</Pair>
</Ability>
<Ability id="class-magus-spellstrike-su" icon={["mailed-fist"]}>
<Pair single id="class-magus-spellstrike-su">Spellstrike (Su)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">Whenever you cast a spell with a range of "touch" from the magus spell list, you can deliver the spell through any weapon you are wielding as part of a melee attack. Instead of the free melee touch attack normally allowed to deliver the spell, you can make one free melee attack with your weapon (at your highest base attack bonus) as part of casting this spell. If successful, this melee attack deals its normal damage as well as the effects of the spell. If you make this attack in concert with <em>spell combat,</em> this melee attack takes all the penalties accrued by spell combat melee attacks.</Pair>
<Pair title="Special">This attack uses the weapon's critical range (20, 19-20, or 18-20 and modified by the <em>keen</em> weapon property or similar effects), but the spell effect only deals &times;2 damage on a successful critical hit, while the weapon damage uses its own critical modifier.</Pair>
</Ability>
<Ability id="class-magus-magus-arcana" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="class-magus-magus-arcana" flavor="As a magus gain levels, he learns arcane secrets tailored to his specific way of blending martial puissance and magical skill.">Magus Arcana</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">You gain one <Link to="/ability/magus_arcana">magus arcana</Link>.</Pair>
<Pair title="At 6th Level">You gain a new magus arcana.</Pair>
<Pair title="At 9th Level">You gain a new magus arcana.</Pair>
<Pair title="At 12th Level">You gain a new magus arcana.</Pair>
<Pair title="At 15th Level">You gain a new magus arcana.</Pair>
<Pair title="At 18th Level">You gain a new magus arcana.</Pair>
<Pair title="Special">Unless specifically noted in a magus arcana's description, you cannot select a particular magus arcana more than once. Magus arcana that affect spells can only be used to modify spells from the magus spell list unless otherwise noted.</Pair>
</Ability>
<Ability id="class-magus-spell-recall-su" icon={["magic-swirl"]}>
<Pair single id="class-magus-spell-recall-su">Spell Recall (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Swift Action">You can recall any single magus spell that you have already prepared and cast that day by expending a number of points from your <em>arcane pool</em> equal to the spell's level (minimum 1). The spell is prepared again, just as if it had not been cast.</Pair>
</Ability>
<Ability id="class-magus-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="class-magus-bonus-feats">Bonus Feats</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">You gain a bonus feat in addition to those gained from normal advancement. These bonus feats must be selected from those listed as <Link to="/main/combat_feat">combat</Link>, <Link to="/main/item_creation_feat">item creation</Link>, or <Link to="/main/metamagic_feat">metamagic</Link> feats. You must meet the prerequisites for this feat as normal.</Pair>
<Pair title="At 11th Level">You gain another bonus feat, following the restrictions above.</Pair>
<Pair title="At 17th Level">You gain another bonus feat, following the restrictions above.</Pair>
</Ability>
<Ability id="class-magus-knowledge-pool-su" icon={["magic-swirl"]}>
<Pair single id="class-magus-knowledge-pool-su">Knowledge Pool (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">When you prepare your magus spells, you can decide to expend 1 or more points from your <em>arcane pool,</em> up to your Intelligence bonus. For each point you expend, you can treat any one spell from the magus spell list as if it were in your spellbook and can prepare that spell as normal that day. If you do not cast spells prepared in this way before the next time you prepare spells, you lose those spells.</Pair>
<Pair title="Special">You can also cast spells added in this way using your <em>spell recall</em> ability, but only until you prepare spells again.</Pair>
</Ability>
<Ability id="class-magus-medium-armor-ex" icon={["armor-upgrade"]}>
<Pair single id="class-magus-medium-armor-ex">Medium Armor (Ex)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">You gain proficiency with medium armor. You can cast magus spells while wearing medium armor without incurring the normal arcane spell failure chance.</Pair>
<Pair title="Special">Like any other arcane spellcaster, a magus wearing heavy armor or using a shield incurs a chance of arcane spell failure if the spell in question has a somatic component.</Pair>
</Ability>
<Ability id="class-magus-improved-spell-combat-ex" icon={["armor-upgrade"]}>
<Pair single id="class-magus-improved-spell-combat-ex">Improved Spell Combat/ (Ex)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">When using the <em>spell combat</em> ability, you receive a +2 circumstance bonus on concentration checks, in addition to any bonus granted by taking an additional penalty on the attack roll.</Pair>
</Ability>
<Ability id="class-magus-fighter-training-ex" icon={["upgrade"]}>
<Pair single id="class-magus-fighter-training-ex">Fighter Training (Ex)</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">You count 1/2 your total magus level as your fighter level for the purpose of qualifying for feats. If you have levels in fighter, these levels stack.</Pair>
</Ability>
<Ability id="class-magus-improved-spell-recall-su" icon={["upgrade"]}>
<Pair single id="class-magus-improved-spell-recall-su">Improved Spell Recall (Su)</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">Whenever you recall a spell with <em>spell recall,</em> you expend a number of points from your arcane pool equal to 1/2 the spell's level (minimum 1).</Pair>
<Pair title="Swift Action">Instead of recalling a used spell, you can prepare a spell of the same level that you have in your spellbook. You do so by expending a number of points from your arcane pool equal to the spell's level (minimum 1). You cannot apply metamagic feats to a spell prepared in this way, and you do not need to reference your spellbook to prepare a spell in this way.</Pair>
</Ability>
<Ability id="class-magus-heavy-armor-ex" icon={["armor-upgrade"]}>
<Pair single id="class-magus-heavy-armor-ex">Heavy Armor (Ex)</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">You gain proficiency with heavy armor. You can cast magus spells while wearing heavy armor without incurring the normal arcane spell failure chance.</Pair>
<Pair title="Special">Like any other arcane spellcaster, a magus using a shield incurs a chance of arcane spell failure if the spell in question has a somatic component.</Pair>
</Ability>
<Ability id="class-magus-greater-spell-combat-ex" icon={["armor-upgrade"]}>
<Pair single id="class-magus-greater-spell-combat-ex">Greater Spell Combat (Ex)</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">Whenever you use the <em>spell combat</em> ability, your concentration check bonus equals double the amount of the attack penalty taken.</Pair>
</Ability>
<Ability id="class-magus-counterstrike-ex" icon={["mailed-fist"]}>
<Pair single id="class-magus-counterstrike-ex">Counterstrike (Ex)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Passive Ability">Whenever an enemy within reach of you successfully casts a spell defensively, that enemy provokes an attack of opportunity from you after the spell is complete. This attack of opportunity cannot disrupt the spell.</Pair>
</Ability>
<Ability id="class-magus-greater-spell-access-su" icon={["magic-swirl"]}>
<Pair single id="class-magus-greater-spell-access-su">Greater Spell Access (Su)</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Ability">You gain access to an expanded spell list. You learn and place 14 spells from the <Link to="/main/spells_wizard">wizard's spell list</Link> into your spellbook as magus spells of their wizard level. You gain two of each of the following wizard spells not on the magus spell list: 0-level, 1st-level, 2nd-level, 3rd-level, 4th-level, 5th-level, and 6th-level. You can ignore the somatic component of these spells, casting them without the normal chance of spell failure.</Pair>
</Ability>
<Ability id="class-magus-true-magus-su" icon={["upgrade","mailed-fist"]}>
<Pair single id="class-magus-true-magus-su">True Magus (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Whenever you use your <em>spell combat</em> ability, you do not need to make a concentration check to cast the spell defensively. Whenever you use <em>spell combat</em> and your spell targets the same creature as your melee attacks, you can choose to either increase the DC to resist the spell by +2, grant yourself a +2 circumstance bonus on any checks made to overcome spell resistance, or grant yourself a +2 circumstance bonus on all attack rolls made against the target during your turn.</Pair>
</Ability>
<h3 id="class-magus-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-magus--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Legendary Blade (Su)</td><td>At 20th level, the magus can turn his weapon into a thing of terror and wonder. When the magus enhances his weapon with his arcane pool, he grants it an additional +2 enhancement bonus (for a total of +7).</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>Walking Library (Ex)</td><td>At 20th level, the character becomes a small, mobile athenaeum of occult scraps and lore. The character adds 100 spell levels' worth of spells to his spellbook or familiar and gains a +4 insight bonus on all Knowledge skills. Characters of any class that prepares spells from a spellbook or familiar can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-magus-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Aphorite:</strong> Add one spell from the magus spell list to the magus's spellbook. This spell must be at least 1 level below the highest spell level he can cast.<sup><InnerLink showBacklink="backlink-class-magus-ref-A-1" id="class-magus-ref-A-1" data-hash-target to="class-magus-A">1</InnerLink></sup></p>
<p><strong>Aquatic elf:</strong> Add one spell from the cleric, druid, or wizard spell list with the water descriptor to the magus's spellbook. This spell must be at least 1 level below the highest spell level he can cast. This spell is treated as 1 level higher unless it also appears on the magus spell list.<sup><InnerLink showBacklink="backlink-class-magus-ref-B-1" id="class-magus-ref-B-1" data-hash-target to="class-magus-B">2</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Select one known magus arcana usable only once per day. The magus adds +1/6 to the number of times it can be used per day. Once that magus arcana is usable twice per day, the magus must select a different magus arcana.<sup><InnerLink showBacklink="backlink-class-magus-ref-C-1" id="class-magus-ref-C-1" data-hash-target to="class-magus-C">3</InnerLink></sup></p>
<p><strong>Elf:</strong> The magus gains 1/6 of a new magus arcana.<sup><InnerLink showBacklink="backlink-class-magus-ref-D-1" id="class-magus-ref-D-1" data-hash-target to="class-magus-D">4</InnerLink></sup></p>
<p><strong>Fetchling:</strong> Add 1/4 point to the magus's arcane pool.<sup><InnerLink showBacklink="backlink-class-magus-ref-E-1" id="class-magus-ref-E-1" data-hash-target to="class-magus-E">5</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add one of the following weapon special abilities to the list of weapon special abilities the magus may add to his weapon using his arcane pool: <Link to="/magic-enh/defending">defending</Link>, <Link to="/magic-enh/ghost_touch">ghost touch</Link>, <Link to="/magic-enh/merciful">merciful</Link>, <Link to="/magic-enh/mighty_cleaving">mighty cleaving</Link>, <Link to="/magic-enh/vicious">vicious</Link>; <Link to="/magic-enh/allying">allying</Link>, <Link to="/magic-enh/conductive">conductive</Link>, <Link to="/magic-enh/corrosive">corrosive</Link>, <Link to="/magic-enh/corrosive_burst">corrosive burst</Link>, <Link to="/magic-enh/menacing">menacing</Link>. Once an ability has been selected with this reward, it cannot be changed.<sup><InnerLink showBacklink="backlink-class-magus-ref-F-1" id="class-magus-ref-F-1" data-hash-target to="class-magus-F">6</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add 1/2 of an illusion spell from the sorcerer/ wizard spell list that isn't on the magus spell list to the magus's spellbook. The magus treats this spell as if it were on the magus spell list at the same level as on the sorcerer/ wizard list. This spell must be at least 1 level below the highest spell level the magus can cast.<sup><InnerLink showBacklink="backlink-class-magus-ref-G-1" id="class-magus-ref-G-1" data-hash-target to="class-magus-G">7</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add +1/4 to the magus's arcane pool.<sup><InnerLink showBacklink="backlink-class-magus-ref-H-1" id="class-magus-ref-H-1" data-hash-target to="class-magus-H">8</InnerLink></sup></p>
<p><strong>Halfling:</strong> The magus gains 1/6 of a new magus arcana.<sup><InnerLink showBacklink="backlink-class-magus-ref-I-1" id="class-magus-ref-I-1" data-hash-target to="class-magus-I">9</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add +1/2 point of fire damage to spells that deal fire damage cast by the magus.<sup><InnerLink showBacklink="backlink-class-magus-ref-J-1" id="class-magus-ref-J-1" data-hash-target to="class-magus-J">10</InnerLink></sup></p>
<p><strong>Human:</strong> Add +1/4 point to the magus' arcane pool.<sup><InnerLink showBacklink="backlink-class-magus-ref-K-1" id="class-magus-ref-K-1" data-hash-target to="class-magus-K">11</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-magus-ref-L-1" id="class-magus-ref-L-1" data-hash-target to="class-magus-L">12</InnerLink></sup></p>
<p><strong>Kobold:</strong> Add a +1/2 bonus on concentration checks made to cast defensively.<sup><InnerLink showBacklink="backlink-class-magus-ref-M-1" id="class-magus-ref-M-1" data-hash-target to="class-magus-M">13</InnerLink></sup></p>
<p><strong>Suli:</strong> Add +1/4 point to the magus's arcane pool.<sup><InnerLink showBacklink="backlink-class-magus-ref-N-1" id="class-magus-ref-N-1" data-hash-target to="class-magus-N">14</InnerLink></sup></p>
<p><strong>Tiefling:</strong> Add +1/4 point to the magus's arcane pool.<sup><InnerLink showBacklink="backlink-class-magus-ref-O-1" id="class-magus-ref-O-1" data-hash-target to="class-magus-O">15</InnerLink></sup></p>
<p><strong>Wyrwood:</strong> Add 2 rounds to the duration of the magus' arcane pool enhancements.<sup><InnerLink showBacklink="backlink-class-magus-ref-P-1" id="class-magus-ref-P-1" data-hash-target to="class-magus-P">16</InnerLink></sup></p>
</div>
<h3 id="class-magus-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-magus/armored_battlemage">Armored Battlemage</Link></p><p><strong>Modifies or Replaces:</strong> Spell Combat; Arcane Pool; 3rd, 18th-level Magus Arcana; Improved Spell Combat; Greater Spell Combat</p><p>Armored battlemages learn to move and cast spells in even the most restrictive armors, and have developed new methods to magically enhance their armor.</p></div>
<div className="archetype"><p><Link to="/arc-magus/beastblade">Beastblade</Link></p><p><strong>Modifies or Replaces:</strong> 3rd-level Magus Arcana; Spell Recall; Knowledge Pool; Improved Spell Recall</p><p>Beastblade magi work in tandem with their familiars, using spell, steel, and claw to clear the battlefield of foes.</p></div>
<div className="archetype"><p><Link to="/arc-magus/bladebound">Bladebound</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Pool; 3rd-level Magus Arcana</p><p>A select group of magi are called to carry a black blade - a sentient weapon of often unknown and possibly unknowable purpose.</p></div>
<div className="archetype"><p><Link to="/arc-magus/card_caster">Card Caster</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Pool; Spellstrike; 3rd-level Arcana</p><p>The card caster is an ancient, martial offshoot of the traditional harrower, learning to not only draw power from the harrow, but also to invest each card with deadly power.</p></div>
<div className="archetype"><p><Link to="/arc-magus/deep_marshal">Deep Marshal</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiencies; Medium Armor; Heavy Armor; Spellcasting; Arcane Pool; Spell Combat; Spellstrike; 3rd-level Magus Arcana</p><p>Largely unseen by visitors, the deep marshals have survived into the modern era as keepers, protectors, and repairers of the myriad of stony passages that travel around, through, and under the Five Kings Mountains.</p></div>
<div className="archetype"><p><Link to="/arc-magus/eldritch_archer">Eldritch Archer</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Arcane Pool; Spell Combat; Spellstrike; Counterstrike</p><p>The eldritch archer rains magical attacks down on her foes from the city walls.</p></div>
<div className="archetype"><p><Link to="/arc-magus/eldritch_scion">Eldritch Scion</Link></p><p><strong>Modifies or Replaces:</strong> Spells; Spell Recall; Arcane Pool; Spell Combat; Knowledge Pool; Improved Spell Combat; Greater Spell Combat</p><p>Unlike typical magi, eldritch scions do not study tomes of magic or spend time learning to combine martial and magical skills. Rather, eldritch scions find that their spells and abilities come to them instinctively.</p></div>
<div className="archetype"><p><Link to="/arc-magus/elemental_knight">Elemental Knight</Link></p><p><strong>Modifies or Replaces:</strong> Spell Recall</p><p>(Suli Only) Elemental knights are born with elemental energies surging through their blood and discover the secret of reconciling and focusing this primal power into the arcane.</p></div>
<div className="archetype"><p><Link to="/arc-magus/esoteric">Esoteric</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Spellcasting; Arcane Pool; Spellstrike; Spell Recall; Bonus Feats; Medium Armor; Heavy Armor; Improved Spell Recall</p><p>Esoterics are drawn to the mysticism of the occult and spend their lives delving into forgotten texts and forbidden tomes.</p></div>
<div className="archetype"><p><Link to="/arc-magus/fiend_flayer">Fiend Flayer</Link></p><p><strong>Modifies or Replaces:</strong> None</p><p>(Tiefling Only) Some tiefling magi can tap the dark energy of their fiendish blood to enhance their arcane and combat talents.</p></div>
<div className="archetype"><p><Link to="/arc-magus/greensting_slayer">Greensting Slayer</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Pool; Medium Armor; Heavy Armor</p><p>The blending of martial prowess with elven magic has long been a staple of the Blackash Training Grounds in Erages. More than a few who study at Erages Academy follow this path because of the promises of wealth that the city's criminal element makes toward practiced brawlers and smugglers.</p></div>
<div className="archetype"><p><Link to="/arc-magus/hexbreaker">Hexbreaker</Link></p><p><strong>Modifies or Replaces:</strong> Spell Recall; Improved Spell Recall</p><p>Hexbreakers - sometimes called witch-hammers for their proclivity toward warhammers - have borne witness to the damage of unrestrained arcane power and hone their own arcane arts to battle such abuse.</p></div>
<div className="archetype"><p><Link to="/arc-magus/hexcrafter">Hexcrafter</Link></p><p><strong>Modifies or Replaces:</strong> Spell Recall</p><p>A hexcrafter magus has uncovered the secret of using his arcane pool to recreate witch hexes.</p></div>
<div className="archetype"><p><Link to="/arc-magus/iron_ring_striker">Iron-Ring Striker</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Proficiency; Arcane Pool; Spellstrike; 5th-level Bonus Feat; Medium Armor; Heavy Armor; Knowledge Pool; Counterstrike</p><p>Practitioners of this martial art, powered by arcane magic, wear an iron ring on the finger of one hand.</p></div>
<div className="archetype"><p><Link to="/arc-magus/jistkan_artificer">Jistkan Artificer</Link></p><p><strong>Modifies or Replaces:</strong> Spells; Arcane Pool; Cantrips; 3rd-level Magus Arcana; Spellstrike</p><p>As part of studying the secret methods the original Jistkan artificers used to build golems, these magi graft construct parts onto their own arms.</p></div>
<div className="archetype"><p><Link to="/arc-magus/kapenia_dancer">Kapenia Dancer</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Diminished Spellcasting</p><p>The kapenia dancer laces their deadly scarves with powerful magic.</p></div>
<div className="archetype"><p><Link to="/arc-magus/kensai">Kensai</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Spells; Spell Recall; Knowledge Pool; Medium Armor; 9th-level Arcana; Improved Spell Recall; Heavy Armor; True Magus</p><p>A kensai spends his life focusing his training and meditation into a rapturous perfection of the use of a single weapon, which is usually but not always a sword, channeling his arcane might through it in a dizzying and deadly dance beyond the abilities of even the greatest of mundane warriors.</p></div>
<div className="archetype"><p><Link to="/arc-magus/magic_warrior">Magic Warrior</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 3rd-level Magus Arcana; Improved Spell Combat; Greater Spell Combat; Greater Spell Access</p><p>Trained in a tradition stretching back to Old-Mage Jatembe's Ten Magic Warriors, magic warriors renounce their identities to master magical might and serve as champions of culture and learning across the Mwangi Expanse and beyond.</p></div>
<div className="archetype"><p><Link to="/arc-magus/mindblade">Mindblade</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Arcane Pool; Spell Recall; Knowledge Pool; Improved Spell Recall; Greater Spell Combat; Greater Spell Access; Medium Armor; Improved Spell Combat; Heavy Armor</p><p>A mindblade blends psychic talent and martial skill to lethal effect. By forming weapons with her mind, she always has the right tool for any situation.</p></div>
<div className="archetype"><p><Link to="/arc-magus/myrmidarch">Myrmidarch</Link></p><p><strong>Modifies or Replaces:</strong> Spells; Spell Recall; Improved Spell Recall; 6th, 12th, 18th-level Magus Arcana; Knowledge Pool; Improved Spell Combat; Greater Spell Combat; True Magus</p><p>The myrmidarch is a skilled specialist, using magic to supplement and augment his martial mastery.</p></div>
<div className="archetype"><p><Link to="/arc-magus/nature_bonded_magus">Nature-Bonded Magus</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Pool; Spell Recall; Knowledge Pool; Improved Spell Recall</p><p>A nature-bonded magus synergizes arcane magic and the divine magic traditions of druids into a deadly synthesis.</p></div>
<div className="archetype"><p><Link to="/arc-magus/puppetmaster">Puppetmaster</Link></p><p><strong>Modifies or Replaces:</strong> Skills; Knowledge Pool; Greater Spell Access; Arcane Pool; Spell Combat; Improved Spell Combat; Greater Spell Combat; Spellstrike; Fighter Training; Counterstrike; Medium Armor; Heavy Armor; True Magus</p><p>Puppetmasters focus on using charm and illusion spells to control the senses of those for whom they perform.</p></div>
<div className="archetype"><p><Link to="/arc-magus/sigilus">Sigilus</Link></p><p><strong>Modifies or Replaces:</strong> Spellstrike; Medium Armor; Heavy Armor</p><p>A sigilus manipulates the discoveries of wizards and other more sagacious Cyphermages, using those findings to create special sigils that allow her to transfer spell effects into different objects for later use.</p></div>
<div className="archetype"><p><Link to="/arc-magus/skirnir">Skirnir</Link></p><p><strong>Modifies or Replaces:</strong> Spells; Spell Combat; Spell Recall; Knowledge Pool; Improved Spell Combat; Greater Spell Combat; Greater Spell Access; Counterstrike</p><p>Sometimes called a shield-vassal or shieldmaiden, the skirnir has learned to infuse his power into his shield.</p></div>
<div className="archetype"><p><Link to="/arc-magus/sorrowblade">Sorrowblade</Link></p><p><strong>Modifies or Replaces:</strong> 3rd, 12th-level Magus Arcana; Speed Weapon Property</p><p>A magus who has suffered greatly over the course of her life can learn to channel that misery into her weapon and inflict it on others.</p></div>
<div className="archetype"><p><Link to="/arc-magus/soul_forger">Soul Forger</Link></p><p><strong>Modifies or Replaces:</strong> Spells; Knowledge Pool; Spell Recall; Improved Spell Recall; Counterstrike; Greater Spell Access</p><p>The soul forger has learned the skill of infusing the raw magical essence of his soul into armaments of surpassing power, combining the mystic arts with the arts of war in a unity of steely perfection.</p></div>
<div className="archetype"><p><Link to="/arc-magus/spell_dancer">Spell Dancer</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Pool; 5th-level Bonus Feat; Medium Armor; Heavy Armor</p><p>(Elf Only) Many elven magi do not consider themselves masters of a blend of martial and magical talents, but rather a sub-category of wizards who study the effect of physical movement and techniques upon spellcasting ability.</p></div>
<div className="archetype"><p><Link to="/arc-magus/spell_trapper">Spell Trapper</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Spell Recall; Fighter Training</p><p>Spell trappers forsake much of their arcane skill and martial knowledge in exchange for the ability to conjure magical traps to hinder their foes.</p></div>
<div className="archetype"><p><Link to="/arc-magus/spellblade">Spellblade</Link></p><p><strong>Modifies or Replaces:</strong> Spellstrike</p><p>A spellblade magus can manifest a ghostly blade of force that can be used as an off-hand weapon.</p></div>
<div className="archetype"><p><Link to="/arc-magus/spire_defender">Spire Defender</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Spell Recall</p><p>(Elf only, unless given GM permission) Magi who train themselves to accompany sages and archaeologists venturing into the Mordant Spire become spire defenders.</p></div>
<div className="archetype"><p><Link to="/arc-magus/staff_magus">Staff Magus</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Medium Armor; Heavy Armor; Fighter Training</p><p>While most magi use a one-handed weapon as their melee implement of choice, one group of magi uses the quarterstaff instead.</p></div>
<h3 id="class-magus-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"magus archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Arcane Pool"},{"header":"Armor Proficiency"},{"header":"Medium Armor"},{"header":"Heavy Armor"},{"header":"Bonus Feats"},{"header":"5th-level Bonus Feat"},{"header":"Cantrips"},{"header":"Class Skills"},{"header":"Counterstrike"},{"header":"Fighter Training"},{"header":"Greater Spell Access"},{"header":"Knowledge Pool"},{"header":"3rd-level Magus Arcana"},{"header":"6th-level Magus Arcana"},{"header":"9th-level Magus Arcana"},{"header":"12th-level Magus Arcana"},{"header":"18th-level Magus Arcana"},{"header":"Skills"},{"header":"Speed Weapon Property"},{"header":"Spell Combat"},{"header":"Improved Spell Combat"},{"header":"Greater Spell Combat"},{"header":"Spell Recall"},{"header":"Improved Spell Recall"},{"header":"Spellcasting"},{"header":"Spellstrike"},{"header":"True Magus"},{"header":"Weapon Proficiency"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-magus/Armored Battlemage›","X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,"X","X","X",null,null,null,null,null,null,null],["‹arc-magus/Beastblade›",null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null],["‹arc-magus/Bladebound›","X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-magus/Card Caster›","X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-magus/Deep Marshal›","X","X","X","X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,null],["‹arc-magus/Eldritch Archer›","X",null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null],["‹arc-magus/Eldritch Scion›","X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X","X","X","X",null,"X",null,null,null,null],["‹arc-magus/Elemental Knight›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-magus/Esoteric›","X",null,"X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X","X",null,null,"X"],["‹arc-magus/Fiend Flayer›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-magus/Greensting Slayer›","X",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-magus/Hexbreaker›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null],["‹arc-magus/Hexcrafter›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-magus/Iron-Ring Striker›","X",null,"X","X",null,"X",null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null],["‹arc-magus/Jistkan Artificer›","X",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null],["‹arc-magus/Kapenia Dancer›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X"],["‹arc-magus/Kensai›",null,null,"X","X",null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,"X","X","X",null,"X",null,"X"],["‹arc-magus/Magic Warrior›",null,null,null,null,null,null,null,"X",null,null,"X",null,"X",null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null],["‹arc-magus/Mindblade›","X",null,"X","X",null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,"X","X","X","X","X",null,null,null,null],["‹arc-magus/Myrmidarch›",null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,"X","X",null,null,null,"X","X","X","X","X",null,"X",null,null],["‹arc-magus/Nature-Bonded Magus›","X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null],["‹arc-magus/Puppetmaster›","X",null,"X","X",null,null,null,null,"X","X","X","X",null,null,null,null,null,"X",null,"X","X","X",null,null,null,"X","X",null,null],["‹arc-magus/Sigilus›",null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-magus/Skirnir›",null,null,null,null,null,null,null,null,"X",null,"X","X",null,null,null,null,null,null,null,"X","X","X","X",null,"X",null,null,null,null],["‹arc-magus/Sorrowblade›",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-magus/Soul Forger›",null,null,null,null,null,null,null,null,"X",null,"X","X",null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null],["‹arc-magus/Spell Dancer›","X",null,"X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-magus/Spell Trapper›",null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-magus/Spellblade›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-magus/Spire Defender›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X"],["‹arc-magus/Staff Magus›",null,null,"X","X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X"]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-magus-label">Footnotes</h3>
<ol>
<li id="class-magus-A">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 15</Link> <InnerLink id="backlink-class-magus-ref-A-1" data-hash-target to="class-magus-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-magus-B">
<p><Link to="/source/blood_of_the_sea">Blood of the Sea pg. 5</Link> <InnerLink id="backlink-class-magus-ref-B-1" data-hash-target to="class-magus-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-magus-C">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 13</Link> <InnerLink id="backlink-class-magus-ref-C-1" data-hash-target to="class-magus-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-magus-D">
<p>Advanced Race Guide pg. 23 <InnerLink id="backlink-class-magus-ref-D-1" data-hash-target to="class-magus-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-magus-E">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 7</Link> <InnerLink id="backlink-class-magus-ref-E-1" data-hash-target to="class-magus-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-magus-F">
<p>Advanced Race Guide pg. 33 <InnerLink id="backlink-class-magus-ref-F-1" data-hash-target to="class-magus-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-magus-G">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 39</Link> <InnerLink id="backlink-class-magus-ref-G-1" data-hash-target to="class-magus-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-magus-H">
<p>Advanced Race Guide pg. 43 <InnerLink id="backlink-class-magus-ref-H-1" data-hash-target to="class-magus-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-magus-I">
<p>Advanced Race Guide pg. 63 <InnerLink id="backlink-class-magus-ref-I-1" data-hash-target to="class-magus-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-magus-J">
<p>Advanced Race Guide pg. 53 <InnerLink id="backlink-class-magus-ref-J-1" data-hash-target to="class-magus-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-magus-K">
<p>Advanced Race Guide pg. 73 <InnerLink id="backlink-class-magus-ref-K-1" data-hash-target to="class-magus-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-magus-L">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-magus-ref-L-1" data-hash-target to="class-magus-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-magus-M">
<p>Advanced Race Guide pg. 133 <InnerLink id="backlink-class-magus-ref-M-1" data-hash-target to="class-magus-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
<li id="class-magus-N">
<p>Advanced Race Guide pg. 203 <InnerLink id="backlink-class-magus-ref-N-1" data-hash-target to="class-magus-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="class-magus-O">
<p>Advanced Race Guide pg. 170 <InnerLink id="backlink-class-magus-ref-O-1" data-hash-target to="class-magus-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="class-magus-P">
<p><Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 6</Link> <InnerLink id="backlink-class-magus-ref-P-1" data-hash-target to="class-magus-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _gunslinger = {hasJL:true,title: "Gunslinger", jsx: <><div className="jumpList" id="class-gunslinger-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-gunslinger-gunsmith">Gunsmith</InnerLink></li><li><InnerLink toTop to="class-gunslinger-grit-ex">Grit</InnerLink></li><li><InnerLink toTop to="class-gunslinger-deeds">Deeds</InnerLink></li><li><InnerLink toTop to="class-gunslinger-nimble-ex">Nimble</InnerLink></li><li><InnerLink toTop to="class-gunslinger-bonus-feats">Bonus Feats</InnerLink></li><li><InnerLink toTop to="class-gunslinger-gun-training-ex">Gun Training</InnerLink></li><li><InnerLink toTop to="class-gunslinger-true-grit-ex">True Grit</InnerLink></li><li><InnerLink toTop to="class-gunslinger-grit-and-panache">Grit and Panache</InnerLink></li><li><InnerLink toTop to="class-gunslinger-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-gunslinger-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-gunslinger-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-gunslinger-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-gunslinger-gunslinger">Gunslinger</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 9</Link>, <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 56</Link></p>
<p>For a renegade few, battle sounds different than it does for the typical fighter. The clash of steel and the sizzle of spell energy are drowned out by the thunderous rhythm of gunfire - the pounding beat of the gunslinger.</p>
<p>Gunslingers are a bold and mysterious lot. While many treat the secrets of black powder with the same care and reverence that a wizard typically reserves for his spellbook, most gunslingers know that firearms are a secret that cannot remain concealed forever. While current firearms are simple, often imprecise, and even dangerous devices, they are a technology on the move, and one that will become even more powerful when it is fully fused with magic.</p>
<p><strong>Role:</strong> Gunslingers are thunderous artillery, often found where the fighting is fiercest. Brave, clever, and frequently foolhardy, many gunslingers push to position themselves at close range, barrels blazing, to take down their foes and demoralize their enemies. Other gunslingers are masters of distant death, picking off enemies from afar with their strange and wondrous weapons.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d10</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>5d6 &times; 10 gp (average 175 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/ride">Ride</Link>, <Link to="/skill/sleight_of_hand">Sleight of Hand</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/heal">Heal</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/survival">Survival</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/handle_animal">Handle Animal</Link>, <Link to="/skill/intimidate">Intimidate</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-gunslinger-class-features">Class Features</h3>
<ScrollContainer id="class-gunslinger--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+1</td>
<td>+2</td>
<td>+2</td>
<td>+0</td>
<td>Deeds, grit, gunsmith</td>
</tr>
<tr>
<td>2nd</td>
<td>+2</td>
<td>+3</td>
<td>+3</td>
<td>+0</td>
<td>Nimble +1</td>
</tr>
<tr>
<td>3rd</td>
<td>+3</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>Deeds</td>
</tr>
<tr>
<td>4th</td>
<td>+4</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>Bonus feat</td>
</tr>
<tr>
<td>5th</td>
<td>+5</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>Gun training 1</td>
</tr>
<tr>
<td>6th</td>
<td>+6/+1</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>Nimble +2</td>
</tr>
<tr>
<td>7th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>Deeds</td>
</tr>
<tr>
<td>8th</td>
<td>+8/+3</td>
<td>+6</td>
<td>+6</td>
<td>+2</td>
<td>Bonus feat</td>
</tr>
<tr>
<td>9th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+3</td>
<td>Gun training 2</td>
</tr>
<tr>
<td>10th</td>
<td>+10/+5</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>Nimble +3</td>
</tr>
<tr>
<td>11th</td>
<td>+11/+6/+1</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>Deeds</td>
</tr>
<tr>
<td>12th</td>
<td>+12/+7/+2</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>Bonus feat</td>
</tr>
<tr>
<td>13th</td>
<td>+13/+8/+3</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>Gun training 3</td>
</tr>
<tr>
<td>14th</td>
<td>+14/+9/+4</td>
<td>+9</td>
<td>+9</td>
<td>+4</td>
<td>Nimble +4</td>
</tr>
<tr>
<td>15th</td>
<td>+15/+10/+5</td>
<td>+9</td>
<td>+9</td>
<td>+5</td>
<td>Deeds</td>
</tr>
<tr>
<td>16th</td>
<td>+16/+11/+6/+1</td>
<td>+10</td>
<td>+10</td>
<td>+5</td>
<td>Bonus feat</td>
</tr>
<tr>
<td>17th</td>
<td>+17/+12/+7/+2</td>
<td>+10</td>
<td>+10</td>
<td>+5</td>
<td>Gun training 4</td>
</tr>
<tr>
<td>18th</td>
<td>+18/+13/+8/+3</td>
<td>+11</td>
<td>+11</td>
<td>+6</td>
<td>Nimble +5</td>
</tr>
<tr>
<td>19th</td>
<td>+19/+14/+9/+4</td>
<td>+11</td>
<td>+11</td>
<td>+6</td>
<td>Deeds</td>
</tr>
<tr>
<td>20th</td>
<td>+20/+15/+10/+5</td>
<td>+12</td>
<td>+12</td>
<td>+6</td>
<td>Bonus feat, true grit</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={3}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><td colSpan={2}>all <Link to="/main/equipment_firearms">firearms</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>Light armor</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">No</td></tr></tbody></table>
<Ability id="class-gunslinger-gunsmith" icon={["stairs-goal"]}>
<Pair single id="class-gunslinger-gunsmith">Gunsmith</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You gain <Link to="/feat/gunsmithing">Gunsmithing</Link> as a bonus feat, and one of the following firearms of your choice: <Link to="/eq-weapon/blunderbuss">blunderbuss</Link>, <Link to="/eq-weapon/musket">musket</Link>, or <Link to="/eq-weapon/pistol">pistol</Link>. Your starting weapon is battered, and only you know how to use it properly. All other creatures treat your gun as if it had the <Link to="/misc/broken">broken</Link> condition. If the weapon already has the broken condition, it does not work at all for anyone else trying to use it.</Pair>
<Pair title="Special">This starting weapon can only be sold for scrap (it's worth 4d10 gp when sold).</Pair>
</Ability>
<Ability id="class-gunslinger-grit-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="class-gunslinger-grit-ex" flavor="Some gunslingers claim they belong to a mystical way of the gun, but it's more likely that the volatile nature of firearms simply prunes the unlucky and careless from their ranks. Whatever the reason, all gunslingers have grit.">Grit (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">In game terms, grit is a fluctuating measure of your ability to perform amazing actions in combat. At the start of each day, you gain a number of grit points equal to your Wisdom modifier (minimum 1). Your grit goes up or down throughout the day, but usually cannot go higher than your Wisdom modifier (minimum 1), though some feats and magic items may affect this maximum. You spend grit to accomplish deeds, and regain grit in the following ways.</Pair>
</Ability>
<Ability id="class-gunslinger-critical-hit-with-a-firearm" extraClasses="subAbility numbered" icon={["stairs-goal","bowman"]}>
<Pair single id="class-gunslinger-critical-hit-with-a-firearm">Critical Hit with a Firearm</Pair>
<Pair title="Passive Ability">Each time you confirm a critical hit with a firearm attack while in the heat of combat, you regain 1 grit point. Confirming a critical hit on a <Link to="/misc/helpless">helpless</Link> or unaware creature or on a creature that has fewer Hit Dice than <Link to="/misc/half">half</Link> your character level does not restore grit.</Pair>
</Ability>
<Ability id="class-gunslinger-killing-blow-with-a-firearm" extraClasses="subAbility numbered" icon={["stairs-goal","bowman"]}>
<Pair single id="class-gunslinger-killing-blow-with-a-firearm">Killing Blow with a Firearm</Pair>
<Pair title="Passive Ability">When you reduce a creature to 0 or fewer hit points with a firearm attack while in the heat of combat, you regain 1 grit point. Destroying an unattended object, reducing a helpless or unaware creature to 0 or fewer hit points, or reducing a creature that has fewer Hit Dice than half your character level to 0 or fewer hit points does not restore any grit.</Pair>
</Ability>
<aside><p><strong>Optional Rule: Daring Act</strong></p>
<p>The following method for regaining grit points requires a measure of GM judgment, so it is an optional rule.</p>
<p><strong>Daring Act:</strong> Each time a gunslinger performs a daring act, she can regain grit. As a general guideline, a daring act should be risky and dramatic. It should take a good deal of guts, and its outcome should have a low probability of success. If it is successful, the gunslinger regains 1 grit point.</p>
<p>Before attempting a daring act, the player should ask the GM whether the act qualifies. The GM is the final arbiter of what's considered a daring act, and can grant a regained grit point for a daring act even if the player does not ask beforehand whether the act qualifies.</p>
</aside><Ability id="class-gunslinger-deeds" icon={["stairs-goal"]}>
<Pair single id="class-gunslinger-deeds">Deeds</Pair>
<Pair title="Ability">You spend grit points to accomplish deeds. Most deeds grant you some momentary bonus or effect, but there are some that provide longer-lasting effects. Some deeds stay in effect as long as you have at least 1 grit point. Here is the list of base <Link to="/ability/gunslinger_deeds">gunslinger deeds</Link>.</Pair>
<Pair title="Special">You can only perform deeds of your level or lower. Unless otherwise noted, a deed can be performed multiple successive times, as long as the appropriate amount of grit is spent to perform the deed.</Pair>
</Ability>
<aside><p>Gunslingers may optionally select a <Link to="/ability/gunslinger_renowned_deeds">renowned deed</Link> at 1st, 7th and 15th level. Each of these deeds replace two other deeds.</p>
</aside><Ability id="class-gunslinger-nimble-ex" icon={["armor-upgrade"]}>
<Pair single id="class-gunslinger-nimble-ex">Nimble (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">You gain a +1 dodge bonus to AC while wearing light or no armor. Anything that causes you to lose your Dexterity bonus to AC also causes you to lose this dodge bonus.</Pair>
<Pair title="At 6th Level">The dodge bonus becomes +2.</Pair>
<Pair title="At 10th Level">The dodge bonus increases to +3.</Pair>
<Pair title="At 14th Level">The dodge bonus becomes +4.</Pair>
<Pair title="At 18th Level">The dodge bonus increases to +5.</Pair>
</Ability>
<Ability id="class-gunslinger-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="class-gunslinger-bonus-feats">Bonus Feats</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">You gain a bonus feat in addition to those gained by normal advancement. These bonus feats must be <Link to="/main/combat_feat">combat</Link> or <Link to="/main/feats_grit">grit</Link> feats.</Pair>
<Pair title="At 8th Level">You gain another bonus combat or grit feat.</Pair>
<Pair title="At 12th Level">You gain another bonus combat or grit feat.</Pair>
<Pair title="At 16th Level">You gain another bonus combat or grit feat.</Pair>
<Pair title="At 20th Level">You gain another bonus combat or grit feat.</Pair>
</Ability>
<aside><p>Optionally, a gunslinger can pick a <Link to="/ability/dares">dare</Link> instead of a bonus feat. These special abilities only activate when a gunslinger goes down to 0 grit.</p>
</aside><Ability id="class-gunslinger-gun-training-ex" icon={["upgrade","bowman"]}>
<Pair single id="class-gunslinger-gun-training-ex">Gun Training (Ex)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">You select one specific type of firearm (such as an <Link to="/eq-weapon/axe_musket">axe musket</Link>, blunderbuss, musket, or pistol). You gain a bonus equal to your Dexterity modifier on damage rolls when firing that type of firearm. Furthermore, when you misfire with that type of firearm, the misfire value of that firearm increases by 2 instead of 4.</Pair>
<Pair title="At 9th Level">You select another type of firearm, gaining these same bonuses for it.</Pair>
<Pair title="At 13th Level">You select a third type of firearm, gaining these same bonuses for it.</Pair>
<Pair title="At 17th Level">You select a fourth type of firearm, gaining these same bonuses for it.</Pair>
</Ability>
<Ability id="class-gunslinger-true-grit-ex" icon={["upgrade"]}>
<Pair single id="class-gunslinger-true-grit-ex">True Grit (Ex)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">You pick two deeds that you have access to and that you must spend grit to perform. You can perform these deeds for 1 grit point fewer (minimum 0) than usual. If the number of grit points to perform a deed is reduced to 0, you can perform this deed as long as you have at least 1 grit point. If a deed could already be performed as long as you had at least 1 grit point, you can now perform that deed even when you have no grit points.</Pair>
</Ability>
<h3 id="class-gunslinger-grit-and-panache" data-hash-target>Grit and Panache</h3>
<p>The gunslinger's grit and the <Link to="/class/swashbuckler">swashbuckler's</Link> panache represent two paths to gain access to the same heroic pool. Characters with both grit and panache class features combine the two resources together into a larger pool of both grit points and panache points.</p>
<p>For purposes of feat prerequisites, a character with the panache class feature satisfies the prerequisites as if she were a grit user, and vice versa. Swashbuckler levels stack with gunslinger levels for the purpose of satisfying <Link to="/feat/signature_deed">Signature Deed's</Link> level requirement. For feats, magic items, and other effects, a panache user can spend and gain panache points in place of grit points, and vice versa.</p>
<h3 id="class-gunslinger-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-gunslinger--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Old Dog, New Tricks (Ex)</td><td>At 20th level, the character shows that a true warrior always has one more surprise the enemy hasn't seen. The character gains four <Link to="/main/combat_feat">combat feats</Link>. This capstone is available to characters of any class that gains at least four bonus combat feats.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>Personal Armory (Ex)</td><td>At 20th level, there is not a gun in the world that the gunslinger can't fire. The gunslinger applies her gun training to all firearms, and her damage bonus from gun training increases to 1-1/2 times her Dexterity bonus.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-gunslinger-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Dwarf:</strong> Reduce the misfire chance for one type of firearm by 1/4. You cannot reduce the misfire chance of a firearm below 1.<sup><InnerLink showBacklink="backlink-class-gunslinger-ref-A-1" id="class-gunslinger-ref-A-1" data-hash-target to="class-gunslinger-A">1</InnerLink></sup></p>
<p><strong>Elf:</strong> Add +1/3 on critical hit confirmation rolls made with firearms (maximum bonus of +5). This bonus does not stack with <Link to="/feat/critical_focus">Critical Focus</Link>.<sup><InnerLink showBacklink="backlink-class-gunslinger-ref-B-1" id="class-gunslinger-ref-B-1" data-hash-target to="class-gunslinger-B">2</InnerLink></sup></p>
<p><strong>Fetchling:</strong> Add 1/4 point to the gunslinger's grit.<sup><InnerLink showBacklink="backlink-class-gunslinger-ref-C-1" id="class-gunslinger-ref-C-1" data-hash-target to="class-gunslinger-C">3</InnerLink></sup></p>
<p><strong>Gnome:</strong> The gunslinger reduces the amount of time needed to restore a broken firearm using the Gunsmithing feat by 5 minutes (maximum reduction of 50 minutes).<sup><InnerLink showBacklink="backlink-class-gunslinger-ref-D-1" id="class-gunslinger-ref-D-1" data-hash-target to="class-gunslinger-D">4</InnerLink></sup></p>
<p><strong>Goblin:</strong> Add +1/3 on critical hit confirmation rolls made with firearms (maximum bonus of +5). This bonus does not stack with Critical Focus.<sup><InnerLink showBacklink="backlink-class-gunslinger-ref-E-1" id="class-gunslinger-ref-E-1" data-hash-target to="class-gunslinger-E">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-gunslinger-ref-F-1" id="class-gunslinger-ref-F-1" data-hash-target to="class-gunslinger-F">6</InnerLink></sup></p>
<p><strong>Grippli:</strong> Add a +1/4 bonus on attack rolls when making a utility shot or a dead shot.<sup><InnerLink showBacklink="backlink-class-gunslinger-ref-G-1" id="class-gunslinger-ref-G-1" data-hash-target to="class-gunslinger-G">7</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add +1/4 to the number of grit points in the gunslinger's grit pool.<sup><InnerLink showBacklink="backlink-class-gunslinger-ref-H-1" id="class-gunslinger-ref-H-1" data-hash-target to="class-gunslinger-H">8</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add +1/4 to the dodge bonus to AC granted by the nimble class feature (maximum +2) or +1/4 to the AC bonus gained when using the gunslinger's dodge deed.<sup><InnerLink showBacklink="backlink-class-gunslinger-ref-I-1" id="class-gunslinger-ref-I-1" data-hash-target to="class-gunslinger-I">9</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add a +1/3 bonus on attack rolls when using the pistol whip deed.<sup><InnerLink showBacklink="backlink-class-gunslinger-ref-J-1" id="class-gunslinger-ref-J-1" data-hash-target to="class-gunslinger-J">10</InnerLink></sup></p>
<p><strong>Hobgoblin:</strong> Add +1/4 to the gunslinger's grit points.<sup><InnerLink showBacklink="backlink-class-gunslinger-ref-K-1" id="class-gunslinger-ref-K-1" data-hash-target to="class-gunslinger-K">11</InnerLink></sup></p>
<p><strong>Human:</strong> Add +1/4 point to the gunslinger's grit points.<sup><InnerLink showBacklink="backlink-class-gunslinger-ref-L-1" id="class-gunslinger-ref-L-1" data-hash-target to="class-gunslinger-L">12</InnerLink></sup></p>
<p><strong>Ifrit:</strong> Add +1/2 to the bonus on initiative checks the gunslinger makes while using her gunslinger initiative deed.<sup><InnerLink showBacklink="backlink-class-gunslinger-ref-M-1" id="class-gunslinger-ref-M-1" data-hash-target to="class-gunslinger-M">13</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-gunslinger-ref-N-1" id="class-gunslinger-ref-N-1" data-hash-target to="class-gunslinger-N">14</InnerLink></sup></p>
<p><strong>Kobold:</strong> Add +1/4 to the dodge bonus to AC granted by the nimble class feature (maximum +4).<sup><InnerLink showBacklink="backlink-class-gunslinger-ref-O-1" id="class-gunslinger-ref-O-1" data-hash-target to="class-gunslinger-O">15</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Add a +1/2 bonus on initiative checks when the gunslinger has at least 1 grit point.<sup><InnerLink showBacklink="backlink-class-gunslinger-ref-P-1" id="class-gunslinger-ref-P-1" data-hash-target to="class-gunslinger-P">16</InnerLink></sup></p>
</div>
<h3 id="class-gunslinger-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-gunslinger/black_powder_vaulter">Black Powder Vaulter</Link></p><p><strong>Modifies or Replaces:</strong> Deadeye; Gunslinger's Dodge; Gunslinger Initiative; Startling Shot; Expert Loading</p><p>Black powder vaulters like to get into the thick of the battle, maneuvering among the fray to find the most advantageous positions from which to kill their enemies.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/blatherskite">Blatherskite</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Gunslinger's Dodge; Gunslinger Initiative; Pistol-Whip; Startling Shot</p><p>The blatherskate has an extraordinary talent for retreating from harm's way and fooling his enemies into thinking he is weaker than he is.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/bolt_ace">Bolt Ace</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Proficiencies; Gunsmith; Grit; Deadeye; Quick Clear; Utility Shot; Startling Shot; Expert Loading; Lightning Reload; Menacing Shot; Gun Training</p><p>While gunslingers are full of sound and fury, there is a class of gunslingers that never soil their hands with powder or feel the sting of gun smoke.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/buccaneer">Buccaneer</Link></p><p><strong>Modifies or Replaces:</strong> Quick Clear Deed; Pistol Whip Deed; Dead Shot Deed; Lightning Reload Deed; Grit; Nimble; Gun Training 1, 2, and 4</p><p>(Human Only) Freebooters who cling to the convoluted codes that rule independent ships, the buccaneer is a gunslinger of the high seas.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/bushwhacker">Bushwhacker</Link></p><p><strong>Modifies or Replaces:</strong> Grit; Utility Shot Deed; Targeting Deed; 4th, 8th, 12th, 16th, 20th-level Bonus Feat</p><p>(Kobold Only) The bushwhacker specializes in the art of the ambush. For her, gunplay works best when it comes from a concealed position and is directed against a target that falls with the very first volley and is dead before the smoke clears.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/commando">Commando</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Utility Shot; Expert Loading; Lightning Reload; Slinger's Luck; 4th-level Bonus Feat; Gun Training</p><p>Commandos are those rough and ready gunslingers who excel at hit-and-run tactics and leveraging their expertise in the wild against their enemies.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/experimental_gunsmith">Experimental Gunsmith</Link></p><p><strong>Modifies or Replaces:</strong> Gunsmith; Gunsmithing; Gun Training</p><p>(Gnome Only) The experimental gunsmith is obsessed with creating the ultimate firearm, and is willing to take risks to work the kinks out of her design.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/firebrand">Firebrand</Link></p><p><strong>Modifies or Replaces:</strong> Gunsmith; Grit; Deadeye; Dead Shot; Bonus Feats; Gun Training</p><p>Where other gunslingers rely on precision shooting, the firebrand instead masters explosive ordnance.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/graveslinger">Graveslinger</Link></p><p><strong>Modifies or Replaces:</strong> Deadeye; Startling Shot; Bleeding Wound; Menacing Shot; 4th-level Bonus Feat</p><p>Graveslingers craft signature bullets to hunt down wandering undead. With this infused ammunition, they can take on the most resilient spectral foes with ease.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/gulch_gunner">Gulch Gunner</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Grit; Deadeye Deed; Pistol Whip Deed; Menacing Shot Deed; 9th, 13th, 17th-level Gun Training</p><p>(Ratfolk Only) These gulch gunners often specialize in proficiency with a single pistol (easily handled in tight spaces) and wander from warren to warren selling their tunnel-shooting skills to the highest bidder.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/gun_scavenger">Gun Scavenger</Link></p><p><strong>Modifies or Replaces:</strong> Gunsmith; Quick Clear Deed; Targeting Deed; Nimble</p><p>A gun scavenger collects scraps, spare parts, and other components that might - if modified properly - give her firearm an extra edge.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/gun_tank">Gun Tank</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiency; Gunslinger's Dodge Deed; Evasive Deed; Nimble; Bonus Feats (4th level and every 4 levels after)</p><p>Gunslingers usually don't use heavy armor, but there are a few who use and modify their armor to protect themselves from both traditional weapons and gunfire.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/gunner_squire">Gunner Squire</Link></p><p><strong>Modifies or Replaces:</strong> Gunslinger's Dodge; Gunslinger Initiative; Nimble +1</p><p>The gunner squire is prepared to reload or repair her lord's firearms at a moment's notice.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/maverick">Maverick</Link></p><p><strong>Modifies or Replaces:</strong> Dodge; Pistol Whip; Gunslinger Initiative</p><p>Quick with her gun and no stranger to barroom brawls, a maverick can hold her own when bullets and punches start flying.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/musket_master">Musket Master</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Proficiency; Gunsmith; Gunslinger's Dodge Deed; Utility Shot Deed; Gun Training 1-4</p><p>Some gunslingers want a little more firepower and range. These are the musket masters; the best of these gunslingers can reload a musket with dazzling speed, potentially putting even their pistol-wielding brethren to shame.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/mysterious_stranger">Mysterious Stranger</Link></p><p><strong>Modifies or Replaces:</strong> Grit; Quick Clear Deed; Nimble; Gun Training 1</p><p>A few rare gunslingers seem to accomplish their chosen tasks purely through willpower and an unwillingness to ever give up.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/pistolero">Pistolero</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Proficiency; Gunsmith; Deadeye Deed; Startling Shot Deed; Menacing Shot Deed; Gun Training 1-4</p><p>While most gunslingers have favorite firearms, there are those rare ones who choose to specialize in one-handed firearms exclusively.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/planar_rifter">Planar Rifter</Link></p><p><strong>Modifies or Replaces:</strong> Grit; Deadeye; Dead Shot; Menacing Shot; Death's Shot; Nimble; Gun Training</p><p>Planar rifters harvest pieces of the Outer Planes, absorbing some of the energy into themselves and condensing other portions of it into bullets they can fire from their guns</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/scatter_gunner">Scatter Gunner</Link></p><p><strong>Modifies or Replaces:</strong> Gunsmith; Deadeye; Utility Shot; Dead Shot; Targeting</p><p>Punishing firearms such as the blunderbuss and dragon pistol can lay waste to invaders in tight corridors, and the dwarves of Dongun Hold have pioneered masterful methods for making the most of these indiscriminate weapons</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/siege_gunner">Siege Gunner</Link></p><p><strong>Modifies or Replaces:</strong> Grit; Nimble; Deadeye; Gunslinger Initiative; Bonus Feats</p><p>The Grand Duchy of Alkenstar has spawned all manner of firearm specialists, wielding small and large firearms alike. Siege gunners specialize in the very largest: cannons, bombards, and firedrakes.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/techslinger">Techslinger</Link></p><p><strong>Modifies or Replaces:</strong> Deadeye; Quick Clear; Expert Loading; Gun Training</p><p>Techslingers spurn unreliable gunpowder weapons in favor of high-tech armaments.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/thronewarden">Thronewarden</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Nimble; 4th-level Bonus Feat; Startling Shot; Bleeding Wound</p><p>As vigilant sentinels, thronewardens identify and head off trouble.</p></div>
<div className="archetype"><p><Link to="/arc-gunslinger/wyrm_sniper">Wyrm Sniper</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Starling Shot Deed; Lightning Reload Deed; Menacing Shot Deed</p><p>These long-shot artists are masters at taking down dragons with sharp shooting and light siege weaponry.</p></div>
<h3 id="class-gunslinger-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"gunslinger archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Armor Proficiency"},{"header":"Bleeding Wound"},{"header":"Bonus Feats"},{"header":"Class Skills"},{"header":"Death's Shot"},{"header":"Deed: Dead Shot"},{"header":"Deed: Deadeye"},{"header":"Deed: Evasive"},{"header":"Deed: Gunslinger's Dodge"},{"header":"Deed: Lightning Reload"},{"header":"Deed: Menacing Shot"},{"header":"Deed: Pistol Whip"},{"header":"Deed: Quick Clear"},{"header":"Deed: Startling Shot"},{"header":"Deed: Targeting"},{"header":"Deed: Utility Shot"},{"header":"Expert Loading"},{"header":"Grit"},{"header":"Gun Training"},{"header":"Gun Training 1"},{"header":"Gun Training 2"},{"header":"Gun Training 3"},{"header":"Gun Training 4"},{"header":"Gunslinger Initiative"},{"header":"Gunsmith"},{"header":"Nimble"},{"header":"Nimble +1"},{"header":"Slinger's Luck"},{"header":"Weapon Proficiency"}],"data":[["‹arc-gunslinger/Black Powder Vaulter›",null,null,null,null,null,null,"X",null,"X",null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-gunslinger/Blatherskite›",null,null,null,"X",null,null,null,null,"X",null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-gunslinger/Bolt Ace›",null,null,null,null,null,null,"X",null,null,"X","X",null,"X","X",null,"X","X","X","X",null,null,null,null,null,"X",null,null,null,"X"],["‹arc-gunslinger/Buccaneer›",null,null,null,null,null,"X",null,null,null,"X",null,"X","X",null,null,null,null,"X",null,"X","X",null,"X",null,null,"X",null,null,null],["‹arc-gunslinger/Bushwhacker›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null],["‹arc-gunslinger/Commando›",null,null,"X","X",null,null,null,null,null,"X",null,null,null,null,null,"X","X",null,"X",null,null,null,null,null,null,null,null,"X",null],["‹arc-gunslinger/Experimental Gunsmith›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null],["‹arc-gunslinger/Firebrand›",null,null,"X",null,null,"X","X",null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,"X",null,null,null,null],["‹arc-gunslinger/Graveslinger›",null,"X","X",null,null,null,"X",null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-gunslinger/Gulch Gunner›",null,null,null,"X",null,null,"X",null,null,null,"X","X",null,null,null,null,null,"X",null,null,"X","X","X",null,null,null,null,null,null],["‹arc-gunslinger/Gun Scavenger›",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,"X","X",null,null,null],["‹arc-gunslinger/Gun Tank›","X",null,"X",null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-gunslinger/Gunner Squire›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null],["‹arc-gunslinger/Maverick›",null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-gunslinger/Musket Master›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,"X",null,null,null,"X"],["‹arc-gunslinger/Mysterious Stranger›",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,"X",null,null,null,null,null,"X",null,null,null],["‹arc-gunslinger/Pistolero›",null,null,null,null,null,null,"X",null,null,null,"X",null,null,"X",null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,"X"],["‹arc-gunslinger/Planar Rifter›",null,null,null,null,"X","X","X",null,null,null,"X",null,null,null,null,null,null,"X","X",null,null,null,null,null,null,"X",null,null,null],["‹arc-gunslinger/Scatter Gunner›",null,null,null,null,null,"X","X",null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-gunslinger/Siege Gunner›",null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,"X",null,null,null],["‹arc-gunslinger/Techslinger›",null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-gunslinger/Thronewarden›",null,"X","X","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-gunslinger/Wyrm Sniper›",null,null,null,"X",null,null,null,null,null,"X","X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-gunslinger-label">Footnotes</h3>
<ol>
<li id="class-gunslinger-A">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 13</Link> <InnerLink id="backlink-class-gunslinger-ref-A-1" data-hash-target to="class-gunslinger-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-gunslinger-B">
<p>Advanced Race Guide pg. 23 <InnerLink id="backlink-class-gunslinger-ref-B-1" data-hash-target to="class-gunslinger-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-gunslinger-C">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 7</Link> <InnerLink id="backlink-class-gunslinger-ref-C-1" data-hash-target to="class-gunslinger-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-gunslinger-D">
<p>Advanced Race Guide pg. 33 <InnerLink id="backlink-class-gunslinger-ref-D-1" data-hash-target to="class-gunslinger-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-gunslinger-E">
<p>Advanced Race Guide pg. 115 <InnerLink id="backlink-class-gunslinger-ref-E-1" data-hash-target to="class-gunslinger-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-gunslinger-F">
<p><Link to="/source/goblins_of_golarion">Goblins of Golarion pg. 31</Link> <InnerLink id="backlink-class-gunslinger-ref-F-1" data-hash-target to="class-gunslinger-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-gunslinger-G">
<p>Advanced Race Guide pg. 190 <InnerLink id="backlink-class-gunslinger-ref-G-1" data-hash-target to="class-gunslinger-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-gunslinger-H">
<p>Advanced Race Guide pg. 43 <InnerLink id="backlink-class-gunslinger-ref-H-1" data-hash-target to="class-gunslinger-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-gunslinger-I">
<p>Advanced Race Guide pg. 63 <InnerLink id="backlink-class-gunslinger-ref-I-1" data-hash-target to="class-gunslinger-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-gunslinger-J">
<p>Advanced Race Guide pg. 53 <InnerLink id="backlink-class-gunslinger-ref-J-1" data-hash-target to="class-gunslinger-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-gunslinger-K">
<p>Advanced Race Guide pg. 121 <InnerLink id="backlink-class-gunslinger-ref-K-1" data-hash-target to="class-gunslinger-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-gunslinger-L">
<p>Advanced Race Guide pg. 73 <InnerLink id="backlink-class-gunslinger-ref-L-1" data-hash-target to="class-gunslinger-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-gunslinger-M">
<p>Advanced Race Guide pg. 127 <InnerLink id="backlink-class-gunslinger-ref-M-1" data-hash-target to="class-gunslinger-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
<li id="class-gunslinger-N">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-gunslinger-ref-N-1" data-hash-target to="class-gunslinger-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="class-gunslinger-O">
<p>Advanced Race Guide pg. 133 <InnerLink id="backlink-class-gunslinger-ref-O-1" data-hash-target to="class-gunslinger-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="class-gunslinger-P">
<p>Advanced Race Guide pg. 151 <InnerLink id="backlink-class-gunslinger-ref-P-1" data-hash-target to="class-gunslinger-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _barbarian = {hasJL:true,title: "Barbarian", jsx: <><div className="jumpList" id="class-barbarian-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-barbarian-fast-movement-ex">Fast Movement</InnerLink></li><li><InnerLink toTop to="class-barbarian-rage-ex">Rage</InnerLink></li><li><InnerLink toTop to="class-barbarian-rage-powers-ex">Rage Powers</InnerLink></li><li><InnerLink toTop to="class-barbarian-uncanny-dodge-ex">Uncanny Dodge</InnerLink></li><li><InnerLink toTop to="class-barbarian-trap-sense-ex">Trap Sense</InnerLink></li><li><InnerLink toTop to="class-barbarian-improved-uncanny-dodge-ex">Improved Uncanny Dodge</InnerLink></li><li><InnerLink toTop to="class-barbarian-damage-reduction-ex">Damage Reduction</InnerLink></li><li><InnerLink toTop to="class-barbarian-greater-rage-ex">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-barbarian-ex-barbarians">Ex-Barbarians</InnerLink></li><li><InnerLink toTop to="class-barbarian-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-barbarian-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-barbarian-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-barbarian-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-barbarian-barbarian">Barbarian</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 31</Link></p>
<p>For some, there is only rage. In the ways of their people, in the fury of their passion, in the howl of battle, conflict is all these brutal souls know. Savages, hired muscle, masters of vicious martial techniques, they are not soldiers or professional warriors - they are the battle possessed, creatures of slaughter and spirits of war. Known as barbarians, these warmongers know little of training, preparation, or the rules of warfare; for them, only the moment exists, with the foes that stand before them and the knowledge that the next moment might hold their death. They possess a sixth sense in regard to danger and the endurance to weather all that might entail. These brutal warriors might rise from all walks of life, both civilized and savage, though whole societies embracing such philosophies roam the wild places of the world. Within barbarians storms the primal spirit of battle, and woe to those who face their rage.</p>
<p><strong>Role:</strong> Barbarians excel in combat, possessing the martial prowess and fortitude to take on foes seemingly far superior to themselves. With rage granting them boldness and daring beyond that of most other warriors, barbarians charge furiously into battle and ruin all who would stand in their way.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any nonlawful</span><table className="basic alignment"><tbody><tr><td>LG</td><td>LN</td><td>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d12</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>3d6 &times; 10 gp (average 105 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/ride">Ride</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/perception">Perception</Link>, <Link to="/skill/survival">Survival</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/handle_animal">Handle Animal</Link>, <Link to="/skill/intimidate">Intimidate</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-barbarian-class-features">Class Features</h3>
<ScrollContainer id="class-barbarian--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+1</td>
<td>+2</td>
<td>+0</td>
<td>+0</td>
<td>Fast movement, rage</td>
</tr>
<tr>
<td>2nd</td>
<td>+2</td>
<td>+3</td>
<td>+0</td>
<td>+0</td>
<td>Rage power, uncanny dodge</td>
</tr>
<tr>
<td>3rd</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>+1</td>
<td>Trap sense +1</td>
</tr>
<tr>
<td>4th</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>+1</td>
<td>Rage power</td>
</tr>
<tr>
<td>5th</td>
<td>+5</td>
<td>+4</td>
<td>+1</td>
<td>+1</td>
<td>Improved uncanny dodge</td>
</tr>
<tr>
<td>6th</td>
<td>+6/+1</td>
<td>+5</td>
<td>+2</td>
<td>+2</td>
<td>Rage power, Trap sense +2</td>
</tr>
<tr>
<td>7th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+2</td>
<td>+2</td>
<td>Damage reduction 1/-</td>
</tr>
<tr>
<td>8th</td>
<td>+8/+3</td>
<td>+6</td>
<td>+2</td>
<td>+2</td>
<td>Rage power</td>
</tr>
<tr>
<td>9th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+3</td>
<td>+3</td>
<td>Trap sense +3</td>
</tr>
<tr>
<td>10th</td>
<td>+10/+5</td>
<td>+7</td>
<td>+3</td>
<td>+3</td>
<td>Damage reduction 2/-, Rage power</td>
</tr>
<tr>
<td>11th</td>
<td>+11/+6/+1</td>
<td>+7</td>
<td>+3</td>
<td>+3</td>
<td>Greater rage</td>
</tr>
<tr>
<td>12th</td>
<td>+12/+7/+2</td>
<td>+8</td>
<td>+4</td>
<td>+4</td>
<td>Rage power, Trap sense +4</td>
</tr>
<tr>
<td>13th</td>
<td>+13/+8/+3</td>
<td>+8</td>
<td>+4</td>
<td>+4</td>
<td>Damage reduction 3/-</td>
</tr>
<tr>
<td>14th</td>
<td>+14/+9/+4</td>
<td>+9</td>
<td>+4</td>
<td>+4</td>
<td>Indomitable will, Rage power</td>
</tr>
<tr>
<td>15th</td>
<td>+15/+10/+5</td>
<td>+9</td>
<td>+5</td>
<td>+5</td>
<td>Trap sense +5</td>
</tr>
<tr>
<td>16th</td>
<td>+16/+11/+6/+1</td>
<td>+10</td>
<td>+5</td>
<td>+5</td>
<td>Damage reduction 4/-, Rage power</td>
</tr>
<tr>
<td>17th</td>
<td>+17/+12/+7/+2</td>
<td>+10</td>
<td>+5</td>
<td>+5</td>
<td>Tireless rage</td>
</tr>
<tr>
<td>18th</td>
<td>+18/+13/+8/+3</td>
<td>+11</td>
<td>+6</td>
<td>+6</td>
<td>Rage power, Trap sense +6</td>
</tr>
<tr>
<td>19th</td>
<td>+19/+14/+9/+4</td>
<td>+11</td>
<td>+6</td>
<td>+6</td>
<td>Damage reduction 5/-</td>
</tr>
<tr>
<td>20th</td>
<td>+20/+15/+10/+5</td>
<td>+12</td>
<td>+6</td>
<td>+6</td>
<td>Mighty rage, Rage power</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Weapon and Armor Proficiency:</strong> A barbarian is proficient with all simple and martial weapons, light armor, medium armor, and shields (except tower shields).</p>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={2}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>Light and Medium armors</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">Yes, except tower shields</td></tr></tbody></table>
<Ability id="class-barbarian-fast-movement-ex" icon={["upgrade"]}>
<Pair single id="class-barbarian-fast-movement-ex">Fast Movement (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Your land speed is faster than the norm for your race by +10 feet.</Pair>
<Pair title="Special">This benefit applies only when you are wearing no armor, light armor, or medium armor, and not carrying a heavy load. Apply this bonus before modifying your speed because of any load carried or armor worn. This bonus stacks with any other bonuses to your land speed.</Pair>
</Ability>
<Ability id="class-barbarian-rage-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="class-barbarian-rage-ex" flavor="A barbarian can call upon inner reserves of strength and ferocity, granting her additional combat prowess.">Rage (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">2 rounds/day + double your barbarian level + your Constitution modifier</Pair>
<Pair title="Free Action">You can enter (or end) a <em>rage.</em> You gain a +4 morale bonus to your Strength and Constitution, as well as a +2 morale bonus on Will saves. The increase to Constitution grants you 2 hit points per Hit Dice, but these disappear when the <em>rage</em> ends and are not lost first like <Link to="/rule/temporary_hit_points">temporary hit points</Link>.</Pair>
<Pair title="Passive Ability">While in <em>rage,</em> you take a -2 penalty to Armor Class, and you cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except Acrobatics, Fly, Intimidate, and Ride) or any ability that requires patience or concentration. You are <Link to="/misc/fatigued">fatigued</Link> after <em>rage</em> for a number of rounds equal to 2 times the number of rounds spent in the <em>rage.</em> You cannot enter a new <em>rage</em> while fatigued or <Link to="/misc/exhausted">exhausted</Link> but can otherwise enter <em>rage</em> multiple times during a single encounter or combat. If you fall unconscious, your <em>rage</em> immediately ends, placing you in peril of death.</Pair>
<Pair title="Special">Temporary increases to Constitution, such as those gained from <em>rage</em> and spells like <Link to="/spell/bears_endurance">bear's endurance</Link>, do not increase the total number of rounds that a barbarian can <em>rage</em> per day. The total number of rounds of <em>rage</em> per day is renewed after resting for 8 hours, although these hours do not need to be consecutive.</Pair>
</Ability>
<Ability id="class-barbarian-rage-powers-ex" icon={["stairs-goal","upgrade","armor-upgrade"]}>
<Pair single id="class-barbarian-rage-powers-ex" flavor={<>As a barbarian gains levels, she learns to use her <em>rage</em> in new ways.</>}>Rage Powers (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">You gain a <Link to="/ability/rage_powers">rage power</Link>. You gain another rage power at every even-numbered level of barbarian after this (4th, 6th, 8th, and so on).</Pair>
<Pair title="Special">You gain the benefits of rage powers only while <em>raging,</em> and some of these powers require you to take an action first. Unless otherwise noted, you cannot select an individual power more than once.</Pair>
</Ability>
<Ability id="class-barbarian-uncanny-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="class-barbarian-uncanny-dodge-ex">Uncanny Dodge (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">You cannot be caught <Link to="/rule/flat_footed">flat-footed</Link>, nor do you lose your Dex bonus to AC if the attacker is invisible.</Pair>
<Pair title="Special">You still lose your Dexterity bonus to AC if immobilized, or if an opponent successfully uses the feint action against you. If you have <em>uncanny dodge</em> from a different class, you automatically gain <em>improved uncanny dodge</em> instead.</Pair>
</Ability>
<Ability id="class-barbarian-trap-sense-ex" icon={["armor-upgrade"]}>
<Pair single id="class-barbarian-trap-sense-ex">Trap Sense (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">You gain a bonus on Reflex saves made to avoid traps and a dodge bonus to AC against attacks made by traps. Both of these bonuses are equal to <Link to="/misc/one_third">one-third</Link> of your barbarian level.</Pair>
<Pair title="Special"><em>Trap sense</em> bonuses gained from multiple classes stack.</Pair>
</Ability>
<Ability id="class-barbarian-improved-uncanny-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="class-barbarian-improved-uncanny-dodge-ex">Improved Uncanny Dodge (Ex)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">You can no longer be <Link to="/rule/flanked">flanked</Link>. This defense denies a rogue the ability to <Link to="/ability/sneak_attack">sneak attack</Link> you by flanking you, unless the attacker has at least four more rogue levels than you have barbarian levels.</Pair>
<Pair title="Special">If you already have <em>uncanny dodge</em> from another class, the levels from the classes that grant <em>uncanny dodge</em> stack to determine the minimum rogue level required to flank you.</Pair>
</Ability>
<Ability id="class-barbarian-damage-reduction-ex" icon={["armor-upgrade"]}>
<Pair single id="class-barbarian-damage-reduction-ex">Damage Reduction (Ex)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/rule/damage_reduction">damage reduction</Link> of DR 1/-.</Pair>
<Pair title="At 10th Level">You now have DR 2/-.</Pair>
<Pair title="At 13th Level">You now have DR 3/-.</Pair>
<Pair title="At 16th Level">You now have DR 4/-.</Pair>
<Pair title="At 19th Level">You now have DR 5/-.</Pair>
</Ability>
<Ability id="class-barbarian-greater-rage-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="class-barbarian-greater-rage-ex">Greater Rage (Ex)</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Free Action">When you enter a <em>rage,</em> the morale bonus to your Strength and Constitution increase to +6 and the morale bonus on your Will saves increases to +3.</Pair>
</Ability>
<Ability id="class-barbarian-indomitable-will-ex" icon={["armor-upgrade"]}>
<Pair single id="class-barbarian-indomitable-will-ex">Indomitable Will (Ex)</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">You gain a +4 bonus on Will saves to resist enchantment spells. This bonus stacks with all other modifiers, including the morale bonus on Will saves you also receive during your <em>rage.</em></Pair>
</Ability>
<Ability id="class-barbarian-tireless-rage-ex" icon={["upgrade"]}>
<Pair single id="class-barbarian-tireless-rage-ex">Tireless Rage (Ex)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">You no longer become fatigued at the end of your <em>rage.</em></Pair>
</Ability>
<Ability id="class-barbarian-mighty-rage-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="class-barbarian-mighty-rage-ex">Mighty Rage (Ex)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Free Action">When you enter a <em>rage,</em> the morale bonus to your Strength and Constitution increase to +8 and the morale bonus on your Will saves increases to +4.</Pair>
</Ability>
<h3 id="class-barbarian-ex-barbarians" data-hash-target>Ex-Barbarians</h3>
<p>A barbarian who becomes lawful loses the ability to <em>rage</em> and cannot gain more levels as a barbarian. She retains all other benefits of the class.</p>
<h3 id="class-barbarian-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-barbarian--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>Unstoppable (Ex)</td><td>At 20th level, nothing can kill the barbarian, though not for lack of trying. The barbarian gains DR 3/- or increases the value of any existing damage reduction by 3. In addition, she gains energy resistance to acid, cold, electricity, and fire equal to her DR/- value.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-barbarian-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Boggard:</strong> Add 1 on the barbarian's Acrobatics checks to jump.<sup><InnerLink showBacklink="backlink-class-barbarian-ref-A-1" id="class-barbarian-ref-A-1" data-hash-target to="class-barbarian-A">1</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Add +1 to the barbarian's total number of <em>rage</em> rounds per day.<sup><InnerLink showBacklink="backlink-class-barbarian-ref-B-1" id="class-barbarian-ref-B-1" data-hash-target to="class-barbarian-B">2</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-barbarian-ref-C-1" id="class-barbarian-ref-C-1" data-hash-target to="class-barbarian-C">3</InnerLink></sup></p>
<p><strong>Elf:</strong> Add +1 to the barbarian's base speed. In combat this option has no effect unless the barbarian has selected it five times (or another increment of five). This bonus stacks with the barbarian's fast movement feature and applies under the same conditions as that feature.<sup><InnerLink showBacklink="backlink-class-barbarian-ref-D-1" id="class-barbarian-ref-D-1" data-hash-target to="class-barbarian-D">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-barbarian-ref-E-1" id="class-barbarian-ref-E-1" data-hash-target to="class-barbarian-E">5</InnerLink></sup></p>
<p><strong>Fetchling:</strong> Add +1 to either cold or electricity resistance while <em>raging</em> (maximum resistance 15 for either type).<sup><InnerLink showBacklink="backlink-class-barbarian-ref-F-1" id="class-barbarian-ref-F-1" data-hash-target to="class-barbarian-F">6</InnerLink></sup></p>
<p><strong>Gathlain:</strong> Add 1/4 to the barbarian's damage reduction. If the barbarian would not otherwise have damage reduction, this damage reduction can be bypassed by cold iron.<sup><InnerLink showBacklink="backlink-class-barbarian-ref-G-1" id="class-barbarian-ref-G-1" data-hash-target to="class-barbarian-G">7</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add a +1/2 bonus to the barbarian's trap sense.<sup><InnerLink showBacklink="backlink-class-barbarian-ref-H-1" id="class-barbarian-ref-H-1" data-hash-target to="class-barbarian-H">8</InnerLink></sup></p>
<p><strong>Goblin:</strong> Add +1/2 on critical hit confirmation rolls for attacks made with unarmed strikes or natural weapons (maximum bonus of +4). This bonus does not stack with <Link to="/feat/critical_focus">Critical Focus</Link>.<sup><InnerLink showBacklink="backlink-class-barbarian-ref-I-1" id="class-barbarian-ref-I-1" data-hash-target to="class-barbarian-I">9</InnerLink></sup></p>
<p><strong>Grippli:</strong> Add 1/5 to the armor bonus granted by hide armor or bone armor the barbarian wears (maximum +3).<sup><InnerLink showBacklink="backlink-class-barbarian-ref-J-1" id="class-barbarian-ref-J-1" data-hash-target to="class-barbarian-J">10</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add +1/4 to the bonus on Reflex saves and dodge bonus to AC against attacks made by traps granted by trap sense.<sup><InnerLink showBacklink="backlink-class-barbarian-ref-K-1" id="class-barbarian-ref-K-1" data-hash-target to="class-barbarian-K">11</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add a +1/2 bonus to trap sense or +1/3 to the bonus from the surprise accuracy rage power.<sup><InnerLink showBacklink="backlink-class-barbarian-ref-L-1" id="class-barbarian-ref-L-1" data-hash-target to="class-barbarian-L">12</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add 1 foot to the range increment of thrown weapons the barbarian wields. This option has no effect unless the barbarian has selected it 5 times (or another increment of 5).<sup><InnerLink showBacklink="backlink-class-barbarian-ref-M-1" id="class-barbarian-ref-M-1" data-hash-target to="class-barbarian-M">13</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add +1 to the barbarian's total number of <em>rage</em> rounds per day.<sup><InnerLink showBacklink="backlink-class-barbarian-ref-N-1" id="class-barbarian-ref-N-1" data-hash-target to="class-barbarian-N">14</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-barbarian-ref-O-1" id="class-barbarian-ref-O-1" data-hash-target to="class-barbarian-O">15</InnerLink></sup></p>
<p><strong>Human:</strong> Add a +1/2 bonus to trap sense or +1/3 to the bonus from the superstitious rage power.<sup><InnerLink showBacklink="backlink-class-barbarian-ref-P-1" id="class-barbarian-ref-P-1" data-hash-target to="class-barbarian-P">16</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-barbarian-ref-Q-1" id="class-barbarian-ref-Q-1" data-hash-target to="class-barbarian-Q">17</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-barbarian-ref-R-1" id="class-barbarian-ref-R-1" data-hash-target to="class-barbarian-R">18</InnerLink></sup></p>
<p><strong>Kobold:</strong> While you are <em>raging,</em> your racial natural attacks deal +1/4 point of damage.<sup><InnerLink showBacklink="backlink-class-barbarian-ref-S-1" id="class-barbarian-ref-S-1" data-hash-target to="class-barbarian-S">19</InnerLink></sup></p>
<p><strong>Orc:</strong> Add +1 to the barbarian's total number of <em>rage</em> rounds per day.<sup><InnerLink showBacklink="backlink-class-barbarian-ref-T-1" id="class-barbarian-ref-T-1" data-hash-target to="class-barbarian-T">20</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> When <em>raging,</em> add +1/4 to the barbarian's swarming trait's flanking bonus on attack rolls.<sup><InnerLink showBacklink="backlink-class-barbarian-ref-U-1" id="class-barbarian-ref-U-1" data-hash-target to="class-barbarian-U">21</InnerLink></sup></p>
<p><strong>Strix:</strong> Add +1 to the barbarian's total number of <em>rage</em> rounds per day.<sup><InnerLink showBacklink="backlink-class-barbarian-ref-V-1" id="class-barbarian-ref-V-1" data-hash-target to="class-barbarian-V">22</InnerLink></sup></p>
<p><strong>Tengu:</strong> Add +1/3 to the bonus from the superstitious rage power.<sup><InnerLink showBacklink="backlink-class-barbarian-ref-W-1" id="class-barbarian-ref-W-1" data-hash-target to="class-barbarian-W">23</InnerLink></sup></p>
<p><strong>Wayang:</strong> Add a +1/4 bonus to weapon damage rolls that the barbarian makes against opponents that are within <Link to="/rule/dim_light">dim light</Link> or darkness.<sup><InnerLink showBacklink="backlink-class-barbarian-ref-X-1" id="class-barbarian-ref-X-1" data-hash-target to="class-barbarian-X">24</InnerLink></sup></p>
</div>
<h3 id="class-barbarian-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-barbarian/armored_hulk">Armored Hulk</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Trap Sense; Improved Uncanny Dodge</p><p>Some barbarians disdain the hides and leather used as armor by most of their kin. Instead they master the heaviest of armors, even those created by more civilized people, to gain greater protection and stability in battle.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/beastkin_berserker">Beastkin Berserker</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; 4th, 8th, 12th-level Rage Power</p><p>While some barbarians take on bestial aspects in their <em>rages,</em> the beastkin berserker descends so deeply into primal fury that she actually transforms into an animal.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/breaker">Breaker</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Trap Sense</p><p>Breakers find the need to destroy their surroundings.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/brutal_pugilist">Brutal Pugilist</Link></p><p><strong>Modifies or Replaces:</strong> Uncanny Dodge; Trap Sense; Improved Uncanny Dodge</p><p>Some barbarians focus on using their bare hands to tear their opponents limb from limb.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/brutish_swamper">Brutish Swamper</Link></p><p><strong>Modifies or Replaces:</strong> Skills; Fast Movement; Uncanny Dodge; Improved Uncanny Dodge; Trap Sense; 6th-level Rage Power</p><p>The hardy and insular denizens of the swamp produce warriors of narrow focus and great strength.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/cave_dweller">Cave Dweller</Link></p><p><strong>Modifies or Replaces:</strong> Skills; Fast Movement; Trap Sense; Damage Reduction</p><p>Unused to the light of the sun, cave dwellers use their subterranean expertise to protect their clans from the manifold dangers of deep caverns and tunnels.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/deepwater_rager">Deepwater Rager</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Improved Uncanny Dodge; Indomitable Will; Tireless Rage</p><p>Deepwater ragers bellow ferociously as they charge their enemies, tackling them into the raging seas.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/dreadnought">Dreadnought</Link></p><p><strong>Modifies or Replaces:</strong> Rage; Fast Movement; Indomitable Will; Tireless Rage</p><p>Unstoppable and fearless, the dreadnought turns the terror of her enemies into violent physical power.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/drunken_brute">Drunken Brute</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement</p><p>Drunken brutes use potent liquor to fuel their <em>rage</em> and grant them additional powers.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/drunken_rager">Drunken Rager</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Trap Sense; Improved Uncanny Dodge; 12th-level Rage Power</p><p>These hotheaded, hard-drinking ruffians and brawlers are as dangerous in the midst of combat as they are in a tavern, and they wouldn't be caught dead without a libation for either occasion.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/elemental_kin">Elemental Kin</Link></p><p><strong>Modifies or Replaces:</strong> Trap Sense</p><p>Some barbarian tribes have strong ties to the elemental forces of nature.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/fearsome_defender">Fearsome Defender</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Trap Sense; Improved Uncanny Dodge</p><p>These savage slaves feel little pain and exist only to rain terror down on the enemies of their pitiless masters.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/feral_gnasher">Feral Gnasher</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Fast Movement; 2nd-level Rage Power; Trap Sense 1-5; Improved Uncanny Dodge</p><p>(Goblin Only) Feral gnashers grow up in the wild, either raised by animals or scraping by on their own, and soon learn to fend for themselves.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/flesheater">Flesheater</Link></p><p><strong>Modifies or Replaces:</strong> Rage; 2nd, 8th, and 14th-level Rage Powers; Greater Rage; Mighty Rage</p><p>A flesheater eats flesh to create a spiritual bond between herself and the consumed creature, allowing her to take on aspects of the creature that served as the meal.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/geminate_invoker">Geminate Invoker</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Class Skills; Rage; Trap Sense; 4th, 8th, 12th-level Rage Powers</p><p>Geminate invokers are barbarians who use Rivethun traditions to invite spirits into their bodies.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/giant_stalker">Giant Stalker</Link></p><p><strong>Modifies or Replaces:</strong> Rage; Uncanny Dodge; Trap Sense</p><p>Giant stalkers are followers of the Mammoth Lords who have trained since childhood to spot and track giants.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/hateful_rager">Hateful Rager</Link></p><p><strong>Modifies or Replaces:</strong> Rage; 2nd, 8th, 14th, 20th-level Rage Powers; Uncanny Dodge; Trap Sense +3</p><p>(Half-Orc Only) From a young age, many half-orcs are treated cruelly, bullied, ridiculed, and made outcasts. While some hide their shame, others foster a deep, burning hatred that they channel into a raw fury and unleash against their enemies.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/hurler">Hurler</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement</p><p>The hurler becomes skilled at throwing objects at their foes before closing in for the kill.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/invulnerable_rager">Invulnerable Rager</Link></p><p><strong>Modifies or Replaces:</strong> Uncanny Dodge; Improved Uncanny Dodge; Damage Reduction; Trap Sense</p><p>Some barbarians learn to take whatever comes their way, shrugging off mortal wounds with ease.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/jungle_rager">Jungle Rager</Link></p><p><strong>Modifies or Replaces:</strong> Uncanny Dodge; Trap Sense; Improved Uncanny Dodge; Damage Reduction</p><p>A jungle rager can disappear from sight, strike from hiding, and use the environment to shield herself from harm.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/mad_dog">Mad Dog</Link></p><p><strong>Modifies or Replaces:</strong> 2nd, 6th, 10th, 14th, 18th-level Rage Powers; Rage; Uncanny Dodge; Improved Uncanny Dodge; Damage Reduction; Indomitable Will</p><p>Though named for the wild savages who fight alongside rabid dogs, mad dogs employ all manner of beasts as their battle brethren.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/mooncursed">Mooncursed</Link></p><p><strong>Modifies or Replaces:</strong> Rage; Improved Uncanny Dodge; Greater Rage; Mighty Rage</p><p>Some barbarians exhibit an unusual form of lycanthropy powered by their fury. Such a character transforms willfully but can maintain her animal or hybrid forms only while <em>raging.</em></p></div>
<div className="archetype"><p><Link to="/arc-barbarian/mounted_fury">Mounted Fury</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Improved Uncanny Dodge</p><p>Many barbarian tribes are masters of the horse, teaching their members how to ride from a young age.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/numerian_liberator">Numerian Liberator</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Uncanny Dodge; Improved Uncanny Dodge; Indomitable Will</p><p>While many native Kellids oppose the Technic League and its espousal of foul alien artifacts, the most stalwart and staunchly dedicated of these technophobic traditionalists refer to themselves as Numerian liberators.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/pack_hunter">Pack Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Rage Powers; Trap Sense; 6th-level Rage Power</p><p>Pack hunter barbarians team up to hunt dangerous prey to feed, to protect their camps, and as a rite of passage.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/pack_rager">Pack Rager</Link></p><p><strong>Modifies or Replaces:</strong> 2nd, 6th, 10th, 14th, and 18th-level Rage Powers; Damage Reduction</p><p>Barbarian <em>rages</em> can be a thing of savage beauty, exhibiting a lethal grace. While such uncontrolled displays of carnage often disregard group tactics, there are those barbarians whose <em>rages</em> inspire and spur on their allies during the ferocious dance of death.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/primal_hunter">Primal Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Rage</p><p>Rather than exploding with anger, primal hunters focus their <em>rage</em> to strike distant targets.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/raging_cannibal">Raging Cannibal</Link></p><p><strong>Modifies or Replaces:</strong> 2nd-level Rage Power; Uncanny Dodge; Trap Sense; Improved Uncanny Dodge; Damage Reduction</p><p>While savagery is not inherently evil, some barbaric cultures thrive on depravity and welcome the act of feeding on their own kind.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/savage_barbarian">Savage Barbarian</Link></p><p><strong>Modifies or Replaces:</strong> Trap Sense; Damage Reduction</p><p>The savage barbarian learns to avoid blows and toughen up their skin.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/savage_technologist">Savage Technologist</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Weapon/Armor Proficiency; Rage; Uncanny Dodge; Improved Uncanny Dodge</p><p>Savage technologists exhort Kellids to rise up against the depredations of the Technic League. But rather than rejecting technology, they wield the League's own weapons against it.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/scarred_rager">Scarred Rager</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Trap Sense; Improved Uncanny Dodge</p><p>The scarred rager believes each wound tells the tales of her prowess and bravery.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/sea_reaver">Sea Reaver</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Trap Sense; Improved Uncanny Dodge</p><p>Some sea reavers are no more than hunters of the open sea, while others are raiders striking fear into coastal settlements within reach of the sea reavers' longships.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/sharptooth">Sharptooth</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Improved Uncanny Dodge; Trap Sense; 6th and 12th-level Rage Powers</p><p>Coastal hunters and agents of the ocean's rage, sharptooth barbarians emulate the greatest predators of the sea.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/shoanti_burn_rider">Shoanti Burn Rider</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Trap Sense; 4th, 8th, 12th, 16th-level Rage Powers; Improved Uncanny Dodge</p><p>The Shoanti tribes who live in the Cinderlands have turned the deadly emberstorms that plague the region into a rite of passage. A few who survive the experience begin to embrace the adrenaline and surge of joy that comes from dancing along the edge of a whirling firestorm. These thrill-seekers are known as burn riders, and their exploits are celebrated by all Shoanti.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/superstitious">Superstitious</Link></p><p><strong>Modifies or Replaces:</strong> Trap Sense; Damage Reduction</p><p>The superstitious barbarian is naturally distrusting, developing keen senses to protect themselves from harm.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/titan_mauler">Titan Mauler</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Trap Sense; Improved Uncanny Dodge; Indomitable Will</p><p>In lands overrun by giants, dragons, and other hulking beasts, entire fellowships of barbarians hone tactics and traditions with one purpose - to bring low these massive foes.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/totem_warrior">Totem Warrior</Link></p><p><strong>Modifies or Replaces:</strong> None</p><p>The totem warrior has a special totem that is the patron of her tribe.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/true_primitive">True Primitive</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Trap Sense</p><p>Isolated and xenophobic tribes that dwell in areas untouched by civilization often see anything from cities and organized settlements as strange, dangerous, and decadent.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/untamed_rager">Untamed Rager</Link></p><p><strong>Modifies or Replaces:</strong> Uncanny Dodge; Trap Sense; Improved Uncanny Dodge; Damage Reduction</p><p>There are no rules in the wild. Some barbarians enter combat with only victory in mind and do anything in their power to achieve it.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/urban_barbarian">Urban Barbarian</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Rage</p><p>Every barbarian knows that city life can soften the spirit and the body, but some barbarians take on the trappings and ways of their adoptive homes and bend their savage powers to its challenges.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/wild_rager">Wild Rager</Link></p><p><strong>Modifies or Replaces:</strong> Rage; Uncanny Dodge; Improved Uncanny Dodge</p><p>Rages are barely controlled, but there are those who wholly give in to their more savage side, letting their <em>rages</em> take them to a confusing and uncontrolled place of terrible savagery.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/wildborn">Wildborn</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Trap Sense; Rage Powers; Damage Reduction</p><p>Some barbarians are born or bred outside the reach of civilization. These wildborn fight and survive without ever seeing a forge or worked stone, and only dare a trip into the city when no other option is available.</p></div>
<h3 id="class-barbarian-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"barbarian archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Class Skills"},{"header":"Damage Reduction"},{"header":"Fast Movement"},{"header":"Indomitable Will"},{"header":"Rage"},{"header":"Greater Rage"},{"header":"Tireless Rage"},{"header":"Mighty Rage"},{"header":"Rage Powers"},{"header":"2nd-level Rage Power"},{"header":"4th-level Rage Power"},{"header":"6th-level Rage Power"},{"header":"8th-level Rage Power"},{"header":"10th-level Rage Power"},{"header":"12th-level Rage Power"},{"header":"14th-level Rage Power"},{"header":"16th-level Rage Power"},{"header":"18th-level Rage Power"},{"header":"20th-level Rage Power"},{"header":"Trap Sense"},{"header":"Trap Sense +1"},{"header":"Trap Sense +2"},{"header":"Trap Sense +3"},{"header":"Trap Sense +4"},{"header":"Trap Sense +5"},{"header":"Uncanny Dodge"},{"header":"Improved Uncanny Dodge"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-barbarian/Armored Hulk›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null],["‹arc-barbarian/Beastkin Berserker›",null,null,null,"X",null,null,null,null,null,null,null,"X",null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-barbarian/Breaker›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-barbarian/Brutal Pugilist›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null],["‹arc-barbarian/Brutish Swamper›",null,"X",null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null],["‹arc-barbarian/Cave Dweller›",null,"X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-barbarian/Deepwater Rager›",null,null,null,"X","X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null],["‹arc-barbarian/Dreadnought›",null,null,null,"X","X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-barbarian/Drunken Brute›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-barbarian/Drunken Rager›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,"X","X",null],["‹arc-barbarian/Elemental Kin›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-barbarian/Fearsome Defender›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null],["‹arc-barbarian/Feral Gnasher›",null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X","X","X","X","X",null,"X","X"],["‹arc-barbarian/Flesheater›",null,null,null,null,null,"X","X",null,"X",null,"X",null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-barbarian/Geminate Invoker›","X","X",null,null,null,"X",null,null,null,null,null,"X",null,"X",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-barbarian/Giant Stalker›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null],["‹arc-barbarian/Hateful Rager›",null,null,null,null,null,"X",null,null,null,null,"X",null,null,"X",null,null,"X",null,null,"X",null,null,null,"X",null,null,"X",null,null],["‹arc-barbarian/Hurler›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-barbarian/Invulnerable Rager›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null],["‹arc-barbarian/Jungle Rager›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null],["‹arc-barbarian/Mad Dog›",null,null,"X",null,"X","X",null,null,null,null,"X",null,"X",null,"X",null,"X",null,"X",null,null,null,null,null,null,null,"X","X",null],["‹arc-barbarian/Mooncursed›",null,null,null,null,null,"X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-barbarian/Mounted Fury›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null],["‹arc-barbarian/Numerian Liberator›",null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null],["‹arc-barbarian/Pack Hunter›",null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-barbarian/Pack Rager›",null,null,"X",null,null,null,null,null,null,null,"X",null,"X",null,"X",null,"X",null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-barbarian/Primal Hunter›",null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-barbarian/Raging Cannibal›",null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null],["‹arc-barbarian/Savage Barbarian›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-barbarian/Savage Technologist›",null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X"],["‹arc-barbarian/Scarred Rager›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null],["‹arc-barbarian/Sea Reaver›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null],["‹arc-barbarian/Sharptooth›",null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X",null,null,null,null,null,"X","X",null],["‹arc-barbarian/Shoanti Burn Rider›",null,null,null,"X",null,null,null,null,null,null,null,"X",null,"X",null,"X",null,"X",null,null,"X",null,null,null,null,null,"X","X",null],["‹arc-barbarian/Superstitious›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-barbarian/Titan Mauler›",null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null],["‹arc-barbarian/Totem Warrior›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-barbarian/True Primitive›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-barbarian/Untamed Rager›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null],["‹arc-barbarian/Urban Barbarian›",null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-barbarian/Wild Rager›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null],["‹arc-barbarian/Wildborn›",null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X"]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-barbarian-label">Footnotes</h3>
<ol>
<li id="class-barbarian-A">
<p><Link to="/source/monster_codex">Monster Codex pg. 8</Link> <InnerLink id="backlink-class-barbarian-ref-A-1" data-hash-target to="class-barbarian-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-B">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 13</Link> <InnerLink id="backlink-class-barbarian-ref-B-1" data-hash-target to="class-barbarian-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-C">
<p><Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 11</Link> <InnerLink id="backlink-class-barbarian-ref-C-1" data-hash-target to="class-barbarian-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-D">
<p>Advanced Race Guide pg. 23 <InnerLink id="backlink-class-barbarian-ref-D-1" data-hash-target to="class-barbarian-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-E">
<p>Advanced Player's Guide pg. 13 <InnerLink id="backlink-class-barbarian-ref-E-1" data-hash-target to="class-barbarian-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-F">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 7</Link> <InnerLink id="backlink-class-barbarian-ref-F-1" data-hash-target to="class-barbarian-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-G">
<p><Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 10</Link> <InnerLink id="backlink-class-barbarian-ref-G-1" data-hash-target to="class-barbarian-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-H">
<p>Advanced Race Guide pg. 33 <InnerLink id="backlink-class-barbarian-ref-H-1" data-hash-target to="class-barbarian-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-I">
<p>Advanced Race Guide pg. 115 <InnerLink id="backlink-class-barbarian-ref-I-1" data-hash-target to="class-barbarian-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-J">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 8</Link> <InnerLink id="backlink-class-barbarian-ref-J-1" data-hash-target to="class-barbarian-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-K">
<p>Advanced Race Guide pg. 42 <InnerLink id="backlink-class-barbarian-ref-K-1" data-hash-target to="class-barbarian-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-L">
<p>Advanced Race Guide pg. 63 <InnerLink id="backlink-class-barbarian-ref-L-1" data-hash-target to="class-barbarian-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-M">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 41</Link> <InnerLink id="backlink-class-barbarian-ref-M-1" data-hash-target to="class-barbarian-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-N">
<p>Advanced Race Guide pg. 53 <InnerLink id="backlink-class-barbarian-ref-N-1" data-hash-target to="class-barbarian-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-O">
<p>Advanced Player's Guide pg. 19 <InnerLink id="backlink-class-barbarian-ref-O-1" data-hash-target to="class-barbarian-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-P">
<p>Advanced Race Guide pg. 73 <InnerLink id="backlink-class-barbarian-ref-P-1" data-hash-target to="class-barbarian-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-Q">
<p>Advanced Player's Guide pg. 23 <InnerLink id="backlink-class-barbarian-ref-Q-1" data-hash-target to="class-barbarian-ref-Q-1" aria-label="Back to reference Q-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-R">
<p>Blood of the Beast pg. 12 <InnerLink id="backlink-class-barbarian-ref-R-1" data-hash-target to="class-barbarian-ref-R-1" aria-label="Back to reference R-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-S">
<p><Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 15</Link> <InnerLink id="backlink-class-barbarian-ref-S-1" data-hash-target to="class-barbarian-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-T">
<p>Advanced Race Guide pg. 139 <InnerLink id="backlink-class-barbarian-ref-T-1" data-hash-target to="class-barbarian-ref-T-1" aria-label="Back to reference T-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-U">
<p>Advanced Race Guide pg. 151 <InnerLink id="backlink-class-barbarian-ref-U-1" data-hash-target to="class-barbarian-ref-U-1" aria-label="Back to reference U-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-V">
<p>Advanced Race Guide pg. 200 <InnerLink id="backlink-class-barbarian-ref-V-1" data-hash-target to="class-barbarian-ref-V-1" aria-label="Back to reference V-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-W">
<p>Advanced Race Guide pg. 163 <InnerLink id="backlink-class-barbarian-ref-W-1" data-hash-target to="class-barbarian-ref-W-1" aria-label="Back to reference W-1">↩</InnerLink></p>
</li>
<li id="class-barbarian-X">
<p>Blood of Shadows pg. 10 <InnerLink id="backlink-class-barbarian-ref-X-1" data-hash-target to="class-barbarian-ref-X-1" aria-label="Back to reference X-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _unchained_barbarian = {hasJL:true,title: "Unchained Barbarian", jsx: <><div className="jumpList" id="class-unchained_barbarian-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-unchained_barbarian-fast-movement-ex">Fast Movement</InnerLink></li><li><InnerLink toTop to="class-unchained_barbarian-rage-ex">Rage</InnerLink></li><li><InnerLink toTop to="class-unchained_barbarian-rage-powers-ex">Rage Powers</InnerLink></li><li><InnerLink toTop to="class-unchained_barbarian-uncanny-dodge-ex">Uncanny Dodge</InnerLink></li><li><InnerLink toTop to="class-unchained_barbarian-trap-sense-ex">Trap Sense</InnerLink></li><li><InnerLink toTop to="class-unchained_barbarian-danger-sense-ex">Danger Sense</InnerLink></li><li><InnerLink toTop to="class-unchained_barbarian-improved-uncanny-dodge-ex">Improved Uncanny Dodge</InnerLink></li><li><InnerLink toTop to="class-unchained_barbarian-damage-reduction-ex">Damage Reduction</InnerLink></li><li><InnerLink toTop to="class-unchained_barbarian-greater-rage-ex">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-unchained_barbarian-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-unchained_barbarian-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-unchained_barbarian-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-unchained_barbarian-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-unchained_barbarian-unchained-barbarian">Unchained Barbarian</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 8</Link></p>
<p>For some heroes, the rage that lives within them can't be contained. Whether this fury is a product of heritage or of nature, these adventurers have learned to harness it, turning its power against their foes. The primal warriors known as barbarians transform their rage into a potent weapon on a battlefield. Heedless of their wounds and possessed of unstoppable bloodlust, these savage brutes are the embodiment of war.</p>
<p><strong>Unchained:</strong> The unchained barbarian is similar in many regards to its counterpart in the Core Rulebook - she still goes into a rage and gains rage powers, but many of the details have been changed. Rage now grants <Link to="/rule/temporary_hit_points">temporary hit points</Link> and static bonuses on attack and damage rolls, rather than bonuses to ability scores that force players to recalculate a number of statistics. Additionally, many rage powers now function whenever the barbarian is <em>raging,</em> as opposed to just once per rage. Finally, the overall utility of many of the rage powers has been adjusted to make them more useful and interesting.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any nonlawful</span><table className="basic alignment"><tbody><tr><td>LG</td><td>LN</td><td>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d12</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>3d6 &times; 10 gp (average 105 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/ride">Ride</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/perception">Perception</Link>, <Link to="/skill/survival">Survival</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/handle_animal">Handle Animal</Link>, <Link to="/skill/intimidate">Intimidate</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-unchained_barbarian-class-features">Class Features</h3>
<ScrollContainer id="class-unchained_barbarian--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+1</td>
<td>+2</td>
<td>+0</td>
<td>+0</td>
<td>Fast movement, rage</td>
</tr>
<tr>
<td>2nd</td>
<td>+2</td>
<td>+3</td>
<td>+0</td>
<td>+0</td>
<td>Rage power, uncanny dodge</td>
</tr>
<tr>
<td>3rd</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>+1</td>
<td>Danger sense +1</td>
</tr>
<tr>
<td>4th</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>+1</td>
<td>Rage power</td>
</tr>
<tr>
<td>5th</td>
<td>+5</td>
<td>+4</td>
<td>+1</td>
<td>+1</td>
<td>Improved uncanny dodge</td>
</tr>
<tr>
<td>6th</td>
<td>+6/+1</td>
<td>+5</td>
<td>+2</td>
<td>+2</td>
<td>Danger sense +2, rage power</td>
</tr>
<tr>
<td>7th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+2</td>
<td>+2</td>
<td>Damage reduction 1/-</td>
</tr>
<tr>
<td>8th</td>
<td>+8/+3</td>
<td>+6</td>
<td>+2</td>
<td>+2</td>
<td>Rage power</td>
</tr>
<tr>
<td>9th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+3</td>
<td>+3</td>
<td>Danger sense +3</td>
</tr>
<tr>
<td>10th</td>
<td>+10/+5</td>
<td>+7</td>
<td>+3</td>
<td>+3</td>
<td>Damage reduction 2/-, rage power</td>
</tr>
<tr>
<td>11th</td>
<td>+11/+6/+1</td>
<td>+7</td>
<td>+3</td>
<td>+3</td>
<td>Greater rage</td>
</tr>
<tr>
<td>12th</td>
<td>+12/+7/+2</td>
<td>+8</td>
<td>+4</td>
<td>+4</td>
<td>Danger sense +4, rage power</td>
</tr>
<tr>
<td>13th</td>
<td>+13/+8/+3</td>
<td>+8</td>
<td>+4</td>
<td>+4</td>
<td>Damage reduction 3/-</td>
</tr>
<tr>
<td>14th</td>
<td>+14/+9/+4</td>
<td>+9</td>
<td>+4</td>
<td>+4</td>
<td>Indomitable will, rage power</td>
</tr>
<tr>
<td>15th</td>
<td>+15/+10/+5</td>
<td>+9</td>
<td>+5</td>
<td>+5</td>
<td>Danger sense +5</td>
</tr>
<tr>
<td>16th</td>
<td>+16/+11/+6/+1</td>
<td>+10</td>
<td>+5</td>
<td>+5</td>
<td>Damage reduction 4/-, rage power</td>
</tr>
<tr>
<td>17th</td>
<td>+17/+12/+7/+2</td>
<td>+10</td>
<td>+5</td>
<td>+5</td>
<td>Tireless rage</td>
</tr>
<tr>
<td>18th</td>
<td>+18/+13/+8/+3</td>
<td>+11</td>
<td>+6</td>
<td>+6</td>
<td>Danger sense +6, rage power</td>
</tr>
<tr>
<td>19th</td>
<td>+19/+14/+9/+4</td>
<td>+11</td>
<td>+6</td>
<td>+6</td>
<td>Damage reduction 5/-</td>
</tr>
<tr>
<td>20th</td>
<td>+20/+15/+10/+5</td>
<td>+12</td>
<td>+6</td>
<td>+6</td>
<td>Mighty rage, rage power</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={2}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>Light and Medium armors</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">Yes, except tower shields</td></tr></tbody></table>
<Ability id="class-unchained_barbarian-fast-movement-ex" icon={["upgrade"]}>
<Pair single id="class-unchained_barbarian-fast-movement-ex">Fast Movement (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Your land speed is faster than the norm for your race by +10 feet.</Pair>
<Pair title="Special">This benefit applies only when you are wearing no armor, light armor, or medium armor, and not carrying a heavy load. Apply this bonus before modifying your speed because of any load carried or armor worn. This bonus stacks with any other bonuses to your land speed.</Pair>
</Ability>
<Ability id="class-unchained_barbarian-rage-ex" icon={["stairs-goal","upgrade","armor-upgrade"]}>
<Pair single id="class-unchained_barbarian-rage-ex" flavor="A barbarian can call upon inner reserves of strength and ferocity, granting her additional combat prowess.">Rage (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">2 rounds/day + double your barbarian level + your Constitution modifier</Pair>
<Pair title="Free Action">You can enter (or end) a <em>rage.</em> You gain a +2 bonus on melee attack rolls, melee damage rolls, thrown weapon damage rolls, and Will saving throws. You gain 2 <Link to="/rule/temporary_hit_points">temporary hit points</Link> per Hit Die. These temporary hit points are lost first when a character takes damage, disappear when the <em>rage</em> ends, and are not replenished if you enter a <em>rage</em> again within 1 minute of your previous <em>rage.</em></Pair>
<Pair title="Passive Ability">While in <em>rage,</em> you take a -2 penalty to Armor Class, and you cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except Acrobatics, Fly, Intimidate, and Ride) or any ability that requires patience or concentration. You are <Link to="/misc/fatigued">fatigued</Link> for 1 minute after the <em>rage</em> ends. You cannot enter a new <em>rage</em> while fatigued or <Link to="/misc/exhausted">exhausted</Link> but can otherwise enter <em>rage</em> multiple times during a single encounter or combat. If you fall unconscious, your <em>rage</em> immediately ends.</Pair>
<Pair title="Special">Temporary increases to Constitution, such as those gained from <em>rage</em> and spells like <Link to="/spell/bears_endurance">bear's endurance</Link>, do not increase the total number of rounds that a barbarian can <em>rage</em> per day. The total number of rounds of <em>rage</em> per day is renewed after resting for 8 hours, although these hours do not need to be consecutive.</Pair>
</Ability>
<Ability id="class-unchained_barbarian-rage-powers-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="class-unchained_barbarian-rage-powers-ex" flavor={<>As a barbarian gains levels, she learns to use her <em>rage</em> in new ways.</>}>Rage Powers (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">You gain a <Link to="/ability/rage_powers">rage power</Link>. You gain another rage power at every even-numbered level of barbarian after this (4th, 6th, 8th, and so on). You gain the benefits of rage powers only while <em>raging,</em> and some of these powers require you to take an action first. Unless otherwise noted, you cannot select an individual power more than once.</Pair>
<Pair title="Special">Some rage powers are <strong className="hl">stances</strong>. Activating a <Link to="/ability/stance_rage_powers">stance rage power</Link> is a <strong className="hl">move action</strong>. You can't have more than one stance rage power active at a time. If you activate a stance rage power while another one is active, the current stance immediately ends. The stance can be intentionally ended at the beginning of your turn as a <strong className="hl">free action</strong>; otherwise, it lasts until the <em>rage</em> ends.</Pair>
</Ability>
<Ability id="class-unchained_barbarian-uncanny-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="class-unchained_barbarian-uncanny-dodge-ex">Uncanny Dodge (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">You cannot be caught <Link to="/rule/flat_footed">flat-footed</Link>, nor do you lose your Dex bonus to AC if the attacker is invisible.</Pair>
<Pair title="Special">You still lose your Dexterity bonus to AC if immobilized, or if an opponent successfully uses the feint action against you. If you have <em>uncanny dodge</em> from a different class, you automatically gain <em>improved uncanny dodge</em> instead.</Pair>
</Ability>
<Ability id="class-unchained_barbarian-trap-sense-ex" icon={["armor-upgrade"]}>
<Pair single id="class-unchained_barbarian-trap-sense-ex">Trap Sense (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">You gain a bonus on Reflex saves made to avoid traps and a dodge bonus to AC against attacks made by traps. Both of these bonuses are equal to <Link to="/misc/one_third">one-third</Link> of your barbarian level.</Pair>
<Pair title="Special"><em>Trap sense</em> bonuses gained from multiple classes stack.</Pair>
</Ability>
<Ability id="class-unchained_barbarian-danger-sense-ex" icon={["armor-upgrade"]}>
<Pair single id="class-unchained_barbarian-danger-sense-ex">Danger Sense (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">You gain a bonus on Reflex saves made to avoid traps, a dodge bonus to AC against attacks made by traps, and a bonus on Perception checks to avoid being surprised by a foe. These bonuses are equal to one-third of your barbarian level.</Pair>
<Pair title="Special">This ability counts as <em>trap sense</em> for any feat or class prerequisite, and can be replaced by any archetype class feature that replaces <em>trap sense.</em> The bonuses gained from this ability stack with those gained from <em>trap sense</em> (if you have <em>trap sense</em> from another class).</Pair>
</Ability>
<Ability id="class-unchained_barbarian-improved-uncanny-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="class-unchained_barbarian-improved-uncanny-dodge-ex">Improved Uncanny Dodge (Ex)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">You can no longer be <Link to="/rule/flanked">flanked</Link>. This defense denies enemies the ability to <Link to="/ability/sneak_attack">sneak attack</Link> you by flanking you, unless the attacker has at least four more levels in a class that provides <em>sneak attack</em> than you have barbarian levels.</Pair>
<Pair title="Special">If you already have <em>uncanny dodge</em> from another class, the levels from the classes that grant <em>uncanny dodge</em> stack to determine the minimum rogue level required to flank you.</Pair>
</Ability>
<Ability id="class-unchained_barbarian-damage-reduction-ex" icon={["armor-upgrade"]}>
<Pair single id="class-unchained_barbarian-damage-reduction-ex">Damage Reduction (Ex)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/rule/damage_reduction">damage reduction</Link> of DR 1/-.</Pair>
<Pair title="At 10th Level">You now have DR 2/-.</Pair>
<Pair title="At 13th Level">You now have DR 3/-.</Pair>
<Pair title="At 16th Level">You now have DR 4/-.</Pair>
<Pair title="At 19th Level">You now have DR 5/-.</Pair>
</Ability>
<Ability id="class-unchained_barbarian-greater-rage-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="class-unchained_barbarian-greater-rage-ex">Greater Rage (Ex)</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Free Action">The bonus on melee attack rolls, melee damage rolls, thrown weapon damage rolls, and Will saves while <em>raging</em> increases to +3. In addition, the amount of temporary hit points gained when entering a <em>rage</em> increases to 3 per Hit Die.</Pair>
</Ability>
<Ability id="class-unchained_barbarian-indomitable-will-ex" icon={["armor-upgrade"]}>
<Pair single id="class-unchained_barbarian-indomitable-will-ex">Indomitable Will (Ex)</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">You gain a +4 bonus on Will saves to resist enchantment spells. This bonus stacks with all other modifiers, including the morale bonus on Will saves you also receive during your <em>rage.</em></Pair>
</Ability>
<Ability id="class-unchained_barbarian-tireless-rage-ex" icon={["upgrade"]}>
<Pair single id="class-unchained_barbarian-tireless-rage-ex">Tireless Rage (Ex)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">You no longer become fatigued at the end of your <em>rage.</em> If you enter a <em>rage</em> again within 1 minute of ending a <em>rage,</em> you don't gain any temporary hit points from your <em>rage.</em></Pair>
</Ability>
<Ability id="class-unchained_barbarian-mighty-rage-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="class-unchained_barbarian-mighty-rage-ex">Mighty Rage (Ex)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Free Action">When you enter a <em>rage,</em> the bonus on melee attack rolls, melee damage rolls, thrown weapon damage rolls, and Will saves while <em>raging</em> increases to +4. In addition, the amount of temporary hit points gained when entering a <em>rage</em> increases to 4 per Hit Die.</Pair>
</Ability>
<h3 id="class-unchained_barbarian-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-unchained_barbarian--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>Unstoppable (Ex)</td><td>At 20th level, nothing can kill the barbarian, though not for lack of trying. The barbarian gains DR 3/- or increases the value of any existing damage reduction by 3. In addition, she gains energy resistance to acid, cold, electricity, and fire equal to her DR/- value.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-unchained_barbarian-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-unchained_barbarian-ref-A-1" id="class-unchained_barbarian-ref-A-1" data-hash-target to="class-unchained_barbarian-A">1</InnerLink></sup></p>
</div>
<h3 id="class-unchained_barbarian-archetypes" data-hash-target>Archetypes</h3>
<p>When the <em>unchained</em> classes were introduced, they came with a note saying "these classes should work with any of the archetypes from previous books as long as the classes still have the appropriate class features to replace."<sup><InnerLink showBacklink="backlink-class-unchained_barbarian-ref-B-1" id="class-unchained_barbarian-ref-B-1" data-hash-target to="class-unchained_barbarian-B">2</InnerLink></sup> The <em>deepwater rager</em> archetype was printed with a note saying it works for the unchained barbarian, and <em>danger sense</em> above explicitly says it can be treated as <em>trap sense</em> for archetype purposes. Everything else is guesswork.</p>
<p>The barbarian archetypes below DO NOT modify or replace <em>rage, greater rage</em> or <em>mighty rage,</em> and so are likely permitted. As always, consult your GM for final approval.</p>
<div className="archetype"><p><Link to="/arc-barbarian/armored_hulk">Armored Hulk</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Trap Sense; Improved Uncanny Dodge</p><p>Some barbarians disdain the hides and leather used as armor by most of their kin. Instead they master the heaviest of armors, even those created by more civilized people, to gain greater protection and stability in battle.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/beastkin_berserker">Beastkin Berserker</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; 4th, 8th, 12th-level Rage Power</p><p>While some barbarians take on bestial aspects in their <em>rages,</em> the beastkin berserker descends so deeply into primal fury that she actually transforms into an animal.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/breaker">Breaker</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Trap Sense</p><p>Breakers find the need to destroy their surroundings.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/brutal_pugilist">Brutal Pugilist</Link></p><p><strong>Modifies or Replaces:</strong> Uncanny Dodge; Trap Sense; Improved Uncanny Dodge</p><p>Some barbarians focus on using their bare hands to tear their opponents limb from limb.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/brutish_swamper">Brutish Swamper</Link></p><p><strong>Modifies or Replaces:</strong> Skills; Fast Movement; Uncanny Dodge; Improved Uncanny Dodge; Trap Sense; 6th-level Rage Power</p><p>The hardy and insular denizens of the swamp produce warriors of narrow focus and great strength.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/cave_dweller">Cave Dweller</Link></p><p><strong>Modifies or Replaces:</strong> Skills; Fast Movement; Trap Sense; Damage Reduction</p><p>Unused to the light of the sun, cave dwellers use their subterranean expertise to protect their clans from the manifold dangers of deep caverns and tunnels.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/deepwater_rager">Deepwater Rager</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Improved Uncanny Dodge; Indomitable Will; Tireless Rage</p><p>Deepwater ragers bellow ferociously as they charge their enemies, tackling them into the raging seas.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/drunken_brute">Drunken Brute</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement</p><p>Drunken brutes use potent liquor to fuel their <em>rage</em> and grant them additional powers.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/drunken_rager">Drunken Rager</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Trap Sense; Improved Uncanny Dodge; 12th-level Rage Power</p><p>These hotheaded, hard-drinking ruffians and brawlers are as dangerous in the midst of combat as they are in a tavern, and they wouldn't be caught dead without a libation for either occasion.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/elemental_kin">Elemental Kin</Link></p><p><strong>Modifies or Replaces:</strong> Trap Sense</p><p>Some barbarian tribes have strong ties to the elemental forces of nature.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/fearsome_defender">Fearsome Defender</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Trap Sense; Improved Uncanny Dodge</p><p>These savage slaves feel little pain and exist only to rain terror down on the enemies of their pitiless masters.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/feral_gnasher">Feral Gnasher</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Fast Movement; 2nd-level Rage Power; Trap Sense 1-5; Improved Uncanny Dodge</p><p>(Goblin Only) Feral gnashers grow up in the wild, either raised by animals or scraping by on their own, and soon learn to fend for themselves.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/hurler">Hurler</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement</p><p>The hurler becomes skilled at throwing objects at their foes before closing in for the kill.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/invulnerable_rager">Invulnerable Rager</Link></p><p><strong>Modifies or Replaces:</strong> Uncanny Dodge; Improved Uncanny Dodge; Damage Reduction; Trap Sense</p><p>Some barbarians learn to take whatever comes their way, shrugging off mortal wounds with ease.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/jungle_rager">Jungle Rager</Link></p><p><strong>Modifies or Replaces:</strong> Uncanny Dodge; Trap Sense; Improved Uncanny Dodge; Damage Reduction</p><p>A jungle rager can disappear from sight, strike from hiding, and use the environment to shield herself from harm.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/mounted_fury">Mounted Fury</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Improved Uncanny Dodge</p><p>Many barbarian tribes are masters of the horse, teaching their members how to ride from a young age.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/numerian_liberator">Numerian Liberator</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Uncanny Dodge; Improved Uncanny Dodge; Indomitable Will</p><p>While many native Kellids oppose the Technic League and its espousal of foul alien artifacts, the most stalwart and staunchly dedicated of these technophobic traditionalists refer to themselves as Numerian liberators.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/pack_hunter">Pack Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Rage Powers; Trap Sense; 6th-level Rage Power</p><p>Pack hunter barbarians team up to hunt dangerous prey to feed, to protect their camps, and as a rite of passage.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/pack_rager">Pack Rager</Link></p><p><strong>Modifies or Replaces:</strong> 2nd, 6th, 10th, 14th, and 18th-level Rage Powers; Damage Reduction</p><p>Barbarian <em>rages</em> can be a thing of savage beauty, exhibiting a lethal grace. While such uncontrolled displays of carnage often disregard group tactics, there are those barbarians whose <em>rages</em> inspire and spur on their allies during the ferocious dance of death.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/raging_cannibal">Raging Cannibal</Link></p><p><strong>Modifies or Replaces:</strong> 2nd-level Rage Power; Uncanny Dodge; Trap Sense; Improved Uncanny Dodge; Damage Reduction</p><p>While savagery is not inherently evil, some barbaric cultures thrive on depravity and welcome the act of feeding on their own kind.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/savage_barbarian">Savage Barbarian</Link></p><p><strong>Modifies or Replaces:</strong> Trap Sense; Damage Reduction</p><p>The savage barbarian learns to avoid blows and toughen up their skin.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/scarred_rager">Scarred Rager</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Trap Sense; Improved Uncanny Dodge</p><p>The scarred rager believes each wound tells the tales of her prowess and bravery.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/sea_reaver">Sea Reaver</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Trap Sense; Improved Uncanny Dodge</p><p>Some sea reavers are no more than hunters of the open sea, while others are raiders striking fear into coastal settlements within reach of the sea reavers' longships.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/sharptooth">Sharptooth</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Improved Uncanny Dodge; Trap Sense; 6th and 12th-level Rage Powers</p><p>Coastal hunters and agents of the ocean's rage, sharptooth barbarians emulate the greatest predators of the sea.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/shoanti_burn_rider">Shoanti Burn Rider</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Trap Sense; 4th, 8th, 12th, 16th-level Rage Powers; Improved Uncanny Dodge</p><p>The Shoanti tribes who live in the Cinderlands have turned the deadly emberstorms that plague the region into a rite of passage. A few who survive the experience begin to embrace the adrenaline and surge of joy that comes from dancing along the edge of a whirling firestorm. These thrill-seekers are known as burn riders, and their exploits are celebrated by all Shoanti.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/superstitious">Superstitious</Link></p><p><strong>Modifies or Replaces:</strong> Trap Sense; Damage Reduction</p><p>The superstitious barbarian is naturally distrusting, developing keen senses to protect themselves from harm.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/titan_mauler">Titan Mauler</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Uncanny Dodge; Trap Sense; Improved Uncanny Dodge; Indomitable Will</p><p>In lands overrun by giants, dragons, and other hulking beasts, entire fellowships of barbarians hone tactics and traditions with one purpose - to bring low these massive foes.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/totem_warrior">Totem Warrior</Link></p><p><strong>Modifies or Replaces:</strong> None</p><p>The totem warrior has a special totem that is the patron of her tribe.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/true_primitive">True Primitive</Link></p><p><strong>Modifies or Replaces:</strong> Fast Movement; Trap Sense</p><p>Isolated and xenophobic tribes that dwell in areas untouched by civilization often see anything from cities and organized settlements as strange, dangerous, and decadent.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/untamed_rager">Untamed Rager</Link></p><p><strong>Modifies or Replaces:</strong> Uncanny Dodge; Trap Sense; Improved Uncanny Dodge; Damage Reduction</p><p>There are no rules in the wild. Some barbarians enter combat with only victory in mind and do anything in their power to achieve it.</p></div>
<div className="archetype"><p><Link to="/arc-barbarian/wildborn">Wildborn</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiency; Trap Sense; Rage Powers; Damage Reduction</p><p>Some barbarians are born or bred outside the reach of civilization. These wildborn fight and survive without ever seeing a forge or worked stone, and only dare a trip into the city when no other option is available.</p></div>
<h3 id="class-unchained_barbarian-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"unchained barbarian archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Class Skills"},{"header":"Damage Reduction"},{"header":"Fast Movement"},{"header":"Indomitable Will"},{"header":"Rage Powers"},{"header":"2nd-level Rage Power"},{"header":"4th-level Rage Power"},{"header":"6th-level Rage Power"},{"header":"8th-level Rage Power"},{"header":"10th-level Rage Power"},{"header":"12th-level Rage Power"},{"header":"14th-level Rage Power"},{"header":"16th-level Rage Power"},{"header":"18th-level Rage Power"},{"header":"20th-level Rage Power"},{"header":"Tireless Rage"},{"header":"Trap Sense"},{"header":"Uncanny Dodge"},{"header":"Improved Uncanny Dodge"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-barbarian/Armored Hulk›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null],["‹arc-barbarian/Beastkin Berserker›",null,null,null,"X",null,null,null,"X",null,"X",null,"X",null,null,null,null,null,null,null,null,null],["‹arc-barbarian/Breaker›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-barbarian/Brutal Pugilist›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null],["‹arc-barbarian/Brutish Swamper›",null,"X",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X","X","X",null],["‹arc-barbarian/Cave Dweller›",null,"X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-barbarian/Deepwater Rager›",null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,"X",null,"X","X",null],["‹arc-barbarian/Drunken Brute›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-barbarian/Drunken Rager›",null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X","X",null],["‹arc-barbarian/Elemental Kin›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-barbarian/Fearsome Defender›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null],["‹arc-barbarian/Feral Gnasher›",null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,"X","X"],["‹arc-barbarian/Hurler›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-barbarian/Invulnerable Rager›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null],["‹arc-barbarian/Jungle Rager›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null],["‹arc-barbarian/Mounted Fury›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null],["‹arc-barbarian/Numerian Liberator›",null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null],["‹arc-barbarian/Pack Hunter›",null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-barbarian/Pack Rager›",null,null,"X",null,null,null,"X",null,"X",null,"X",null,"X",null,"X",null,null,null,null,null,null],["‹arc-barbarian/Raging Cannibal›",null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X","X","X",null],["‹arc-barbarian/Savage Barbarian›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-barbarian/Scarred Rager›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null],["‹arc-barbarian/Sea Reaver›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null],["‹arc-barbarian/Sharptooth›",null,null,null,"X",null,null,null,null,"X",null,null,"X",null,null,null,null,null,"X","X","X",null],["‹arc-barbarian/Shoanti Burn Rider›",null,null,null,"X",null,null,null,"X",null,"X",null,"X",null,"X",null,null,null,"X","X","X",null],["‹arc-barbarian/Superstitious›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-barbarian/Titan Mauler›",null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null],["‹arc-barbarian/Totem Warrior›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-barbarian/True Primitive›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-barbarian/Untamed Rager›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null],["‹arc-barbarian/Wildborn›",null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X"]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-unchained_barbarian-label">Footnotes</h3>
<ol>
<li id="class-unchained_barbarian-A">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-unchained_barbarian-ref-A-1" data-hash-target to="class-unchained_barbarian-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-unchained_barbarian-B">
<p><Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 8</Link> <InnerLink id="backlink-class-unchained_barbarian-ref-B-1" data-hash-target to="class-unchained_barbarian-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
export default {ranger:_ranger,shifter:_shifter,magus:_magus,gunslinger:_gunslinger,barbarian:_barbarian,unchained_barbarian:_unchained_barbarian}